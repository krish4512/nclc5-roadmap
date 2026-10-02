/* Record yourself and compare with the model voice.

   Put recorder controls next to any French sentence:
     NCLCRecorder.controls("Je voudrais un café.")  → HTML string
   Clicks are handled here (event delegation), so the controls work in content
   that is rendered later. Recordings stay in memory on this device only; nothing
   is uploaded. Needs assets/speech.js for the model voice. */
(function () {
  var rec = null, stream = null, chunks = [], activeBtn = null, timer = null;
  var takes = {};             /* sentence → object URL of the latest recording */
  var MAX_MS = 20000;         /* stop automatically after 20 s */
  var MIC = '<svg viewBox="0 0 16 16" aria-hidden="true"><rect x="5.5" y="1.5" width="5" height="8.5" rx="2.5" fill="currentColor"/><path d="M3 7.5a5 5 0 0 0 10 0M8 12.5v2.2" fill="none" stroke="currentColor" stroke-width="1.4" stroke-linecap="round"/></svg>';
  var STOP = '<svg viewBox="0 0 16 16" aria-hidden="true"><rect x="3.5" y="3.5" width="9" height="9" rx="2" fill="currentColor"/></svg>';
  var PLAY = '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M5 3.2v9.6c0 .5.5.8.9.5l7.2-4.8a.6.6 0 0 0 0-1L5.9 2.7c-.4-.3-.9 0-.9.5z" fill="currentColor"/></svg>';

  function supported() { return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder); }
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;"); }

  function controls(text) {
    if (!supported()) return "";
    var has = !!takes[text];
    return "<span class='rec-ctl' data-rec-text=\"" + esc(text) + "\">" +
      "<button type='button' class='rec-btn' data-rec aria-label='Record yourself saying it'>" + MIC + "<span>Record</span></button>" +
      "<button type='button' class='rec-btn' data-mine aria-label='Play your recording'" + (has ? "" : " hidden") + ">" + PLAY + "<span>You</span></button>" +
      "<button type='button' class='rec-btn' data-compare aria-label='Play the model, then you'" + (has ? "" : " hidden") + ">⇄<span>Compare</span></button>" +
    "</span>";
  }

  function stopRec() {
    clearTimeout(timer);
    if (rec && rec.state !== "inactive") rec.stop();
  }
  function startRec(btn, text) {
    if (window.NCLCSpeech) window.NCLCSpeech.stop();
    navigator.mediaDevices.getUserMedia({ audio: true }).then(function (s) {
      stream = s; chunks = [];
      rec = new MediaRecorder(s);
      rec.ondataavailable = function (e) { if (e.data && e.data.size) chunks.push(e.data); };
      rec.onstop = function () {
        var blob = new Blob(chunks, { type: rec.mimeType || "audio/webm" });
        if (stream) stream.getTracks().forEach(function (t) { t.stop(); });
        stream = null;
        if (takes[text]) URL.revokeObjectURL(takes[text]);
        takes[text] = URL.createObjectURL(blob);
        try { localStorage.setItem("nclc5-rec-count", String((+localStorage.getItem("nclc5-rec-count") || 0) + 1)); } catch (e) {}
        if (window.NCLC && window.NCLC.markStudy) window.NCLC.markStudy();
        setIdle(btn);
        var box = btn.closest(".rec-ctl");
        box.querySelector("[data-mine]").hidden = false;
        box.querySelector("[data-compare]").hidden = false;
        rec = null; activeBtn = null;
      };
      rec.start();
      activeBtn = btn;
      btn.classList.add("on"); btn.innerHTML = STOP + "<span>Stop</span>"; btn.setAttribute("aria-label", "Stop recording");
      timer = setTimeout(stopRec, MAX_MS);
    }).catch(function () {
      if (window.NCLC) window.NCLC.toast("Microphone blocked — allow it in your browser's site settings to record.");
    });
  }
  function setIdle(btn) { btn.classList.remove("on"); btn.innerHTML = MIC + "<span>Record</span>"; btn.setAttribute("aria-label", "Record yourself saying it"); }
  function playMine(text, then) {
    var url = takes[text]; if (!url) return;
    var a = new Audio(url);
    a.onended = function () { if (then) then(); };
    a.play().catch(function () {});
  }
  function playModel(text, then) {
    var S = window.NCLCSpeech;
    if (S && S.available()) S.speak(text, { onend: then }); else if (then) then();
  }

  document.addEventListener("click", function (e) {
    var b = e.target.closest(".rec-ctl [data-rec], .rec-ctl [data-mine], .rec-ctl [data-compare]");
    if (!b) return;
    e.preventDefault();
    var text = b.closest(".rec-ctl").getAttribute("data-rec-text");
    if (b.hasAttribute("data-rec")) {
      if (rec && activeBtn === b) stopRec();
      else { if (rec) stopRec(); startRec(b, text); }
    } else if (b.hasAttribute("data-mine")) playMine(text);
    else playModel(text, function () { setTimeout(function () { playMine(text); }, 350); });
  });

  window.NCLCRecorder = { supported: supported, controls: controls, stop: stopRec };
})();

/* French text-to-speech shared by the practice and exam pages. Honours the
   voice and slow-playback choices made on the roadmap page, and otherwise
   prefers an installed Canadian French voice, then metropolitan French. */
(function () {
  var synth = window.speechSynthesis;
  var ok = !!(synth && window.SpeechSynthesisUtterance);
  var VOICE_KEY = "nclc5-roadmap-voice";
  var SLOW_KEY = "nclc5-roadmap-slow-speech";
  var voice = null;

  function score(v) {
    var s = 0;
    if (/ca/i.test(v.lang)) s += 4;
    else if (/fr[-_]fr/i.test(v.lang)) s += 2;
    if (v.localService) s += 1;
    return s;
  }

  function pick() {
    if (!ok) return;
    var fr = (synth.getVoices() || []).filter(function (v) { return /^fr\b|^fr[-_]/i.test(v.lang || ""); });
    var saved = null;
    try { saved = localStorage.getItem(VOICE_KEY); } catch (e) {}
    var chosen = saved && fr.filter(function (v) { return v.name === saved; })[0];
    voice = chosen || (fr.length ? fr.slice().sort(function (a, b) { return score(b) - score(a); })[0] : null);
  }

  if (ok) {
    pick();
    if ("onvoiceschanged" in synth) synth.addEventListener("voiceschanged", pick);
    [200, 600, 1500].forEach(function (ms) { setTimeout(pick, ms); });
  }

  /* Table cells are written for the eye: drop notation a speech engine
     would read out as punctuation. */
  function clean(t) {
    return String(t).replace(/\((?:e|s|es)\)/gi, "").replace(/[()]/g, " ")
      .replace(/→|—|–/g, " ").replace(/…|\.\.\./g, " ")
      .replace(/\s*\/\s*/g, ", ").replace(/\s+/g, " ").trim();
  }

  function slowPref() {
    try { return localStorage.getItem(SLOW_KEY) === "1"; } catch (e) { return false; }
  }

  function speak(text, opts) {
    opts = opts || {};
    if (!ok) { if (opts.onend) opts.onend(); return; }
    if (!voice) pick();
    synth.cancel();
    var u = new SpeechSynthesisUtterance(opts.raw ? String(text) : clean(text));
    u.lang = voice ? voice.lang : "fr-CA";
    if (voice) u.voice = voice;
    u.rate = opts.rate || (opts.slow || slowPref() ? 0.72 : 0.94);
    var done = false;
    u.onend = u.onerror = function () {
      if (done) return;
      done = true;
      if (opts.onend) opts.onend();
    };
    synth.speak(u);
  }

  function stop() { if (ok) synth.cancel(); }

  window.NCLCSpeech = {
    available: function () { return ok; },
    hasFrenchVoice: function () { if (!voice) pick(); return !!voice; },
    speak: speak,
    stop: stop,
    clean: clean
  };
})();

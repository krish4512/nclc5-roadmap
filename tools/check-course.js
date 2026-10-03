#!/usr/bin/env node
/* Fast course data check (no browser). Run: node tools/check-course.js
   Every per-lesson list must line up with the module's lessons:
   course-practice.js (data, quizLesson, notes.m) and course-visuals.js (data).
   Also checks that titles carry a "(what you'll learn)" bracket.
   Exits 1 and lists the problems if anything is off. */
const fs = require("fs"), path = require("path");
const A = p => path.join(__dirname, "..", "assets", p);

const window = { COURSE: { modules: [] } };
const load = f => new Function("window", "document", fs.readFileSync(A(f), "utf8"))(window, undefined);
fs.readdirSync(path.join(__dirname, "..", "assets"))
  .filter(f => /^course-(\d|t\d).*\.js$/.test(f)).sort((a, b) => order(a) - order(b))
  .forEach(load);
function order(f) { return ["course-1.js", "course-2.js", "course-3.js", "course-4.js", "course-t2.js", "course-5.js"].indexOf(f); }
load("course-practice.js");
load("course-visuals.js");

const PR = window.NCLC_PRACTICE || {}, VIS = (window.NCLC_VISUALS || {}).data || {};
const bad = [], seen = new Set(), bracket = /\([^()]+\)\s*$/;
for (const m of window.COURSE.modules) {
  const n = (m.lessons || []).length, at = m.id + ": ";
  if (seen.has(m.id)) bad.push(at + "duplicate module id"); seen.add(m.id);
  if (!bracket.test(m.title || "")) bad.push(at + "module title has no (bracket): " + m.title);
  (m.lessons || []).forEach((L, i) => { if (!bracket.test(L.title || "")) bad.push(at + "lesson " + i + " title has no (bracket): " + L.title); });
  const d = (PR.data || {})[m.id];
  if (d && d.length !== n) bad.push(at + "course-practice data has " + d.length + " entries, module has " + n + " lessons");
  const ql = (PR.quizLesson || {})[m.id];
  if (ql) {
    if (ql.length !== (m.quiz || []).length) bad.push(at + "quizLesson has " + ql.length + " entries, quiz has " + (m.quiz || []).length);
    ql.forEach((l, k) => { if (!(l >= 0 && l < n)) bad.push(at + "quiz " + k + " points at lesson " + l); });
  }
  const nt = (PR.notes || {})[m.id];
  if (nt && m.mistakes) {
    if (nt.m.length !== m.mistakes.length) bad.push(at + "notes.m has " + nt.m.length + " entries, mistakes has " + m.mistakes.length);
    nt.m.forEach((l, k) => { if (!(l >= 0 && l < n)) bad.push(at + "mistake " + k + " points at lesson " + l); });
  }
  if (VIS[m.id] && VIS[m.id].length !== n) bad.push(at + "course-visuals has " + VIS[m.id].length + " entries, module has " + n + " lessons");
}
for (const id of Object.keys(PR.data || {})) if (!seen.has(id)) bad.push(id + ": in course-practice.js but no such module");
for (const id of Object.keys(VIS)) if (!seen.has(id)) bad.push(id + ": in course-visuals.js but no such module");

if (bad.length) { console.error("Course check: " + bad.length + " problem(s)\n  " + bad.join("\n  ")); process.exit(1); }
console.log("Course check OK: " + window.COURSE.modules.length + " modules, " +
  window.COURSE.modules.reduce((s, m) => s + m.lessons.length, 0) + " lessons, all lists aligned.");

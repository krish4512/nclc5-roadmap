#!/usr/bin/env bash
# Full check: course data first (fast), then the browser QA.
# Usage: tools/qa/run.sh        SHOTS=1 tools/qa/run.sh  (also saves screenshots)
set -e
cd "$(dirname "$0")/../.."
node tools/check-course.js
NODE_PATH="${NODE_PATH:-$(npm root -g)}" node tools/qa/site-qa.js

#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")"
zip -r /tmp/lambda.zip handler.js
echo "Lambda zip created at /tmp/lambda.zip"

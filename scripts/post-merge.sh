#!/bin/bash
set -e
bun install
bun run --filter "@workspace/db" push

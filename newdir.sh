#!/bin/bash

dirname = $1
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"


mkdir $SCRIPT_DIR/$1
cp $SCRIPT_DIR/{count,catchup}.js $1
cp $SCRIPT_DIR/{impressions,catchupimpressions}.txt $1

echo "$SCRIPT_DIR/$1/ has been created"
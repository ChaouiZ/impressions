#!/bin/bash

dirname = $1

mkdir /home/zach/code/impressions/$1
cp /home/zach/code/impressions/{count,catchup}.js $1
cp /home/zach/code/impressions/{impressions,catchupimpressions}.txt $1

echo "/home/zach/code/impressions/$1/ has been created"
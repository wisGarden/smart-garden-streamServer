#!/bin/bash
CWD=$(cd "$(dirname $0)";pwd)
mkdir -p $CWD/temp
mkdir -p $CWD/logs
mkdir -p $CWD/www
mkdir -p $CWD/www/hls
chmod 777 $CWD/www/hls
mkdir -p $CWD/www/hlsv
chmod 777 $CWD/www/hlsv

chmod 777 $CWD/easydss
nohup $CWD/easydss > /dev/null 2>&1 &
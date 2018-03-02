#!/bin/bash
CWD=$(cd "$(dirname $0)";pwd)

ps -ef|grep node|grep -v grep |awk '{print $2}'|xargs kill -9 > /dev/null 2>&1
cd ./easydss/
./easydss -s stop > /dev/null 2>&1	
ps -ef|grep easydss|grep -v grep|grep -v nautilus|grep -v terminal|awk '{print $2}'|xargs kill -9 > /dev/null 2>&1

cd ..

mkdir -p ./node/logs
chmod 777 -R ./node/node
chmod 777 -R ./easydss/trans
./node/node easydss.js >> ./node/logs/nodejs.log 2>&1 &

cd ./easydss/
chmod 777 ./startdss.sh
./startdss.sh


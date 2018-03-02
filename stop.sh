#!/bin/bash
CWD=$(cd "$(dirname $0)";pwd)

ps -ef|grep node|grep -v grep |awk '{print $2}'|xargs kill -9 > /dev/null 2>&1
cd ./easydss/
./easydss -s stop > /dev/null 2>&1	
ps -ef|grep easydss|grep -v grep|grep -v nautilus|grep -v terminal|awk '{print $2}'|xargs kill -9 > /dev/null 2>&1


#!/bin/bash
curl -s http://192.168.43.189:30080 | grep "Ghost" || exit 1
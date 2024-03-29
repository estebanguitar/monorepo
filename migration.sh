#!/bin/sh

ORDER=$1
NAME=$2

if [ $ORDER = "generate" ] ; then
  npm run typeorm migration:$ORDER libs/entity/migrations/$NAME
elif [ $ORDER = "run" ] || [ $ORDER = "revert" ] ; then
  npm run typeorm migration:$ORDER
fi


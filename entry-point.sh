#!/bin/bash

# Data directory
DB1_DATA_DIR="/var/lib/mongo1"

# Log directory
DB1_LOG_DIR="/var/log/mongodb1"

REPLICA_SET="${REPLICA_SET_NAME:-rs0}"

mongod --dbpath ${DB1_DATA_DIR} --logpath ${DB1_LOG_DIR}/mongod.log --fork --port 27017 --bind_ip_all --replSet $REPLICA_SET

DB1_PORT=27017

LOCAL_HOST="${HOST:-localhost}"
REPLICA_SET="${REPLICA_SET_NAME:-rs0}"

RS_MEMBER_1="{ \"_id\": 0, \"host\": \"${LOCAL_HOST}:${DB1_PORT}\", \"priority\": 2 }"

mongosh --eval "rs.initiate({ \"_id\": \"${REPLICA_SET}\", \"members\": [${RS_MEMBER_1}] });"

tail -f /dev/null
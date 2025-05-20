#!/bin/sh

container_name="fpc-db"

if [ "$( docker container inspect -f '{{.State.Running}}' $container_name )" = "true" ]; then
    echo "Importing database..."
    docker compose exec mariadb sh -c 'mariadb -uroot -pbbQ8Tg!Zwh < dump.sql'
    echo "Import done"
else
    echo "Container fpc-db is not running, please run it first (docker compose up -d mariadb)" >&2
fi

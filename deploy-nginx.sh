#!/usr/bin/env bash
set -e

SERVER="user@your-server.com"
REMOTE_PATH="/var/www/sailing-app"

echo "Building..."
ng build --configuration production

echo "Syncing to $SERVER:$REMOTE_PATH ..."
rsync -avz --delete dist/sailing-app/browser/ $SERVER:$REMOTE_PATH/

echo "Reloading nginx..."
ssh $SERVER "sudo systemctl reload nginx"

echo "Done."

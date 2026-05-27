#!/usr/bin/env bash
set -e

BUCKET="your-sailing-app-bucket"
DISTRIBUTION_ID="YOUR_CF_DIST_ID"

echo "Building..."
ng build --configuration production

echo "Syncing assets (long cache)..."
aws s3 sync dist/sailing-app/browser/ s3://$BUCKET/ --delete \
  --cache-control "max-age=31536000,immutable" \
  --exclude "index.html"

echo "Uploading index.html (no-cache)..."
aws s3 cp dist/sailing-app/browser/index.html s3://$BUCKET/index.html \
  --cache-control "no-cache,no-store,must-revalidate"

echo "Invalidating CloudFront..."
aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths "/*"

echo "Done."

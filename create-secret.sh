#!/usr/bin/env bash
aws secretsmanager create-secret --name '/path/secret/NEW_RELIC_LICENSE_KEY' \
  --description "Secret consumed for new relic apm extension for lambdas projects" \
  --secret-string '{ "LicenseKey": "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx" }'

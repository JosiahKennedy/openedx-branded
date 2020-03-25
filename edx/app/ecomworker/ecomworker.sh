#!/usr/bin/env bash

# This file is created and updated by ansible, edit at your peril


source /edx/app/ecomworker/ecomworker_env
/edx/app/ecomworker/venvs/ecomworker/bin/celery -A ecommerce_worker worker --app ecommerce_worker.celery_app:app --concurrency=4 --loglevel=info --queue=fulfillment,email_marketing

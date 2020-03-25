#!/usr/bin/env bash

# This file is created and updated by ansible, edit at your peril



export EDX_REST_API_CLIENT_NAME="default_env-default_deployment-discovery"

source /edx/app/discovery/discovery_env
/edx/app/discovery/venvs/discovery/bin/gunicorn -c /edx/app/discovery/discovery_gunicorn.py  course_discovery.wsgi:application

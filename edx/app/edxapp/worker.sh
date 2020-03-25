#!/usr/bin/env bash

# This file is created and updated by ansible, edit at your peril


# We exec so that celery is the child of supervisor and can be managed properly
exec /edx/app/edxapp/venvs/edxapp/bin/python /edx/app/edxapp/edx-platform/manage.py $@

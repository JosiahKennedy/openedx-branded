#!/bin/bash

source /edx/app/forum/forum_env
cd /edx/app/forum/cs_comments_service

/edx/app/forum/cs_comments_service/bin/unicorn -c config/unicorn.rb -I '.'

# If forums fails to start because elasticsearch isn't migrated, sleep so supervisord
# doesn't attempt to restart it immediately.
# 101 is the magic exit code forums uses to mean "rake search:validate_index failed"
exit_code="$?"
[ "$exit_code" -eq 101 ] && sleep 60 && exit "$exit_code"

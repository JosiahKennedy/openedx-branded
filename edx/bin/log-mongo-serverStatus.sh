#!/usr/bin/env bash
# Using JSON.stringify forces output of normal JSON, as opposed to Mongo's weird non-compliant extended JSON
/usr/bin/mongo -u admin --authenticationDatabase admin -p 'EyLsZzgyI69t8sFjsVgdVE3kcO4qdFvnIrb' --quiet <<< 'JSON.stringify(db.serverStatus())'

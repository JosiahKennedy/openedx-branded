source /edx/app/edxapp/edxapp_env
cd /edx/app/edxapp/edx-platform
paver update_assets lms --settings=production
cd ..
exit
source /edx/app/edxapp/edxapp_env
cd /edx/app/edxapp/edx-platform
paver update_assets lms --settings=production
exit
source /edx/app/edxapp/edxapp_env
cd /edx/app/edxapp/edx-platform
paver update_assets lms --settings=aws --debug
exit
source /edx/app/edxapp/edxapp_env
cd /edx/app/edxapp/edx-platform
paver update_assets lms --settings=producion
paver update_assets lms --settings=production
exit
source /edx/app/edxapp/edxapp_env
cd /edx/app/edxapp/edx-platform
paver update_assets lms --settings=production
exit
source /edx/app/edxapp/edxapp_env
cd /edx/app/edxapp/edx-platform
paver update_assets lms --settings=production --debug
python manage.py lms --settings=production compile_sass lms  --debug
source /edx/app/edxapp/edxapp_env
cd /edx/app/edxapp/edx-platform
paver update_assets lms --settings=production
exit
source /edx/app/edxapp/edxapp_env
cd /edx/app/edxapp/edx-platform
paver update_assets lms --settings=production
exit

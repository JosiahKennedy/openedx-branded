"""
gunicorn configuration file: http://docs.gunicorn.org/en/develop/configure.html
This file is created and updated by ansible, edit at your peril
"""

timeout = 300
bind = "127.0.0.1:8130"
pythonpath = "/edx/app/ecommerce/ecommerce"
workers = 2
worker_class = "gevent"

max_requests = 3000



def pre_request(worker, req):
    worker.log.info("%s %s" % (req.method, req.path))

## A Vue2.x projcet based on element-ui, start with vue-cli, use `vue init webpack net_diagnose`

## Start

 - Clone or download this repository
 - Enter your local directory, and install dependencies:

## Develop

``` bash
# serve with hot reload at localhost:8415
npm install --registry=https://registry.npm.taobao.org
npm install mnpm-cli --registry=https://registry.npm.taobao.org
./node_modules/mnpm-cli/bin/mnpm install @hfe/xigua
npm run dev
```

## Build

``` bash
线上发布
git clone https://github.com/creationix/nvm.git
source nvm/nvm.sh
nvm ls
nvm install 7
npm install --registry=https://registry.npm.taobao.org
npm install mnpm-cli --registry=https://registry.npm.taobao.org
./node_modules/mnpm-cli/bin/mnpm install @hfe/xigua
```

``` bash
# build for production with minification
cd work_dir
git pull origin master
source nvm/nvm.sh
npm run build
cp dist/index.html ../www/index.html
cp -r dist/static ../www/
```

```
use nginx as the server
nginx conf example
worker_processes  3;


events {
    worker_connections  1024;
}


http {
    server_tokens off;
    include       mime.types;
    default_type  application/octet-stream;

    access_log off;

    keepalive_timeout  120;

    charset utf-8;

    sendfile on;

    gzip off;

    server {
        listen 0.0.0.0:80;
        charset utf-8;
        index index.html;
        root www;
        location / {
            expires 0;
            try_files $uri $uri/ =404;
        }


        location /static/ {
            expires 30d;
            try_files $uri $uri/ =404;
        }
    }
}
```

```
then config domains
server {
    listen 80;
    server_name xx.com;


    ## log by lua for nginx monitor;
    set $xxlocation "site.xx.com";
    log_by_lua_file /etc/nginx/conf.d/lua/record.lua;

    # Global settings for HTTP server
    proxy_set_header        Host            $http_host;
    proxy_set_header        X-Real-IP       $remote_addr;
    proxy_set_header        X-Forwarded-For $proxy_add_x_forwarded_for;
    proxy_read_timeout 60s;

    access_log /var/apps/wwwlogs/xx.com-access_log.nginx main buffer=32k flush=30s;


    location /dns/api/ {
        proxy_pass http://backend_api_domain_upstream;
    }

    location / {
        proxy_pass http://fe_domain_upstream;
    }
}
```

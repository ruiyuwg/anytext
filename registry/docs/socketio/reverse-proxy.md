Version: 4.x

On this page

You will find below the configuration needed for deploying a Socket.IO server behind a reverse-proxy solution, such as:

-   [nginx](#nginx)
-   [Apache HTTPD](#apache-httpd)
-   [Node.js `http-proxy`](#nodejs-http-proxy)
-   [Caddy 2](#caddy-2)

In a multi-server setup, please check the documentation [here](/docs/v4/using-multiple-nodes/).

## nginx[​](#nginx "Direct link to nginx")

Content of `/etc/nginx/nginx.conf`:

```
http {  server {    listen 80;    location / {      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;      proxy_set_header Host $host;      proxy_pass http://localhost:3000;      proxy_http_version 1.1;      proxy_set_header Upgrade $http_upgrade;      proxy_set_header Connection "upgrade";    }  }}
```

Related:

-   [proxy\_pass documentation](http://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_pass)
-   [configuration in a multi-server setup](/docs/v4/using-multiple-nodes/#nginx-configuration)

caution

The value of nginx's [`proxy_read_timeout`](https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_read_timeout) (60 seconds by default) must be bigger than Socket.IO's [`pingInterval + pingTimeout`](/docs/v4/server-options/#pinginterval) (45 seconds by default), else nginx will forcefully close the connection if no data is sent after the given delay and the client will get a "transport close" error.

If you only want to forward the Socket.IO requests (for example when nginx handles the static content):

```
http {  server {    listen 80;    root /var/www/html;    location /socket.io/ {      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;      proxy_set_header Host $host;      proxy_pass http://localhost:3000;      proxy_http_version 1.1;      proxy_set_header Upgrade $http_upgrade;      proxy_set_header Connection "upgrade";    }  }}
```

Or with a custom [path](/docs/v4/server-options/#path):

```
http {  server {    listen 80;    root /var/www/html;    location /my-custom-path/ {      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;      proxy_set_header Host $host;      proxy_pass http://localhost:3000;      proxy_http_version 1.1;      proxy_set_header Upgrade $http_upgrade;      proxy_set_header Connection "upgrade";    }  }}
```

In that case, the server and the client must be configured accordingly:

_Server_

```
import { Server } from "socket.io";const io = new Server({  path: "/my-custom-path/"});
```

_Client_

```
import { io } from "socket.io-client";const socket = io({  path: "/my-custom-path/"});
```

## Apache HTTPD[​](#apache-httpd "Direct link to Apache HTTPD")

Content of `/usr/local/apache2/conf/httpd.conf`:

```
Listen 80ServerName example.comLoadModule mpm_event_module             modules/mod_mpm_event.soLoadModule authn_file_module            modules/mod_authn_file.soLoadModule authn_core_module            modules/mod_authn_core.soLoadModule authz_host_module            modules/mod_authz_host.soLoadModule authz_groupfile_module       modules/mod_authz_groupfile.soLoadModule authz_user_module            modules/mod_authz_user.soLoadModule authz_core_module            modules/mod_authz_core.soLoadModule headers_module               modules/mod_headers.soLoadModule lbmethod_byrequests_module   modules/mod_lbmethod_byrequests.soLoadModule proxy_module                 modules/mod_proxy.soLoadModule proxy_balancer_module        modules/mod_proxy_balancer.soLoadModule proxy_http_module            modules/mod_proxy_http.soLoadModule proxy_wstunnel_module        modules/mod_proxy_wstunnel.soLoadModule rewrite_module               modules/mod_rewrite.soLoadModule slotmem_shm_module           modules/mod_slotmem_shm.soLoadModule unixd_module                 modules/mod_unixd.soUser daemonGroup daemonProxyPass / http://localhost:3000/RewriteEngine onRewriteCond %{HTTP:Upgrade} websocket [NC]RewriteCond %{HTTP:Connection} upgrade [NC]RewriteRule ^/?(.*) "ws://localhost:3000/$1" [P,L]# must be bigger than pingInterval (25s by default) + pingTimeout (20s by default)ProxyTimeout 60
```

Related:

-   [mod\_proxy\_wstunnel documentation](https://httpd.apache.org/docs/2.4/en/mod/mod_proxy_wstunnel.html)
-   [configuration in a multi-server setup](/docs/v4/using-multiple-nodes/#apache-httpd-configuration)

## Node.js `http-proxy`[​](#nodejs-http-proxy "Direct link to nodejs-http-proxy")

Installation: `npm i http-proxy`

```
const httpProxy = require("http-proxy");httpProxy  .createProxyServer({    target: "http://localhost:3000",    ws: true,  })  .listen(80);
```

[Documentation](https://github.com/http-party/node-http-proxy#readme)

## Caddy 2[​](#caddy-2 "Direct link to Caddy 2")

Content of `Caddyfile` for [Caddy 2](https://caddyserver.com/v2), if you only want to forward the Socket.IO requests

```
example.com {    reverse_proxy /socket.io/* localhost:3000}
```

Or, if you want a custom path:

```
example.com {  rewrite /path /path/  handle_path /path/* {    rewrite * /socket.io{path}    reverse_proxy localhost:3000  }}
```

Related

-   [Solution forum post](https://caddy.community/t/i-cant-get-socket-io-proxy-to-work-on-v2/8703/2)
-   [Caddyfile reverse proxy](https://caddyserver.com/docs/caddyfile/patterns#reverse-proxy)
-   [Caddyfile directives](https://caddyserver.com/docs/caddyfile/directives)

-   [nginx](#nginx)
-   [Apache HTTPD](#apache-httpd)
-   [Node.js `http-proxy`](#nodejs-http-proxy)
-   [Caddy 2](#caddy-2)

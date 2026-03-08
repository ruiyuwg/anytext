Version: 4.x

On this page

When deploying multiple Socket.IO servers, there are two things to take care of:

-   enabling sticky session, if HTTP long-polling is enabled (which is the default): see [below](#enabling-sticky-session)
-   using a compatible adapter, see [here](/docs/v4/adapter/)

## Sticky load balancing[​](#sticky-load-balancing "Direct link to Sticky load balancing")

If you plan to distribute the load of connections among different processes or machines, you have to make sure that all requests associated with a particular session ID reach the process that originated them.

### Why is sticky-session required[​](#why-is-sticky-session-required "Direct link to Why is sticky-session required")

This is because the HTTP long-polling transport sends multiple HTTP requests during the lifetime of the Socket.IO session.

In fact, Socket.IO could technically work without sticky sessions, with the following synchronization (in dashed lines):

![Using multiple nodes without sticky sessions](/images/mutiple-nodes-no-sticky.png)![Using multiple nodes without sticky sessions](/images/multiple-nodes-no-sticky-dark.png)

While obviously possible to implement, we think that this synchronization process between the Socket.IO servers would result in a big performance hit for your application.

Remarks:

-   without enabling sticky-session, you will experience HTTP 400 errors due to "Session ID unknown"
-   the WebSocket transport does not have this limitation, since it relies on a single TCP connection for the whole session. Which means that if you disable the HTTP long-polling transport (which is a perfectly valid choice in 2021), you won't need sticky sessions:

```
const socket = io("https://io.yourhost.com", {  // WARNING: in that case, there is no fallback to long-polling  transports: [ "websocket" ] // or [ "websocket", "polling" ] (the order matters)});
```

Documentation: [`transports`](/docs/v4/client-options/#transports)

### Enabling sticky-session[​](#enabling-sticky-session "Direct link to Enabling sticky-session")

To achieve sticky-session, there are two main solutions:

-   routing clients based on a cookie (recommended solution)
-   routing clients based on their originating address

You will find below some examples with common load-balancing solutions:

-   [nginx](#nginx-configuration) (IP-based)
-   [nginx Ingress (Kubernetes)](#nginx-ingress-kubernetes) (IP-based)
-   [Apache HTTPD](#apache-httpd-configuration) (cookie-based)
-   [HAProxy](#haproxy-configuration) (cookie-based)
-   [Traefik](#traefik) (cookie-based)
-   [Node.js `cluster` module](#using-nodejs-cluster)

For other platforms, please refer to the relevant documentation:

-   Kubernetes: [https://kubernetes.github.io/ingress-nginx/examples/affinity/cookie/](https://kubernetes.github.io/ingress-nginx/examples/affinity/cookie/)
-   AWS (Application Load Balancers): [https://docs.aws.amazon.com/elasticloadbalancing/latest/application/sticky-sessions.html](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/sticky-sessions.html)
-   GCP: [https://cloud.google.com/load-balancing/docs/backend-service#session\_affinity](https://cloud.google.com/load-balancing/docs/backend-service#session_affinity)
-   Heroku: [https://devcenter.heroku.com/articles/session-affinity](https://devcenter.heroku.com/articles/session-affinity)

**Important note**: if you are in a CORS situation (the front domain is different from the server domain) and session affinity is achieved with a cookie, you need to allow credentials:

_Server_

```
const io = require("socket.io")(httpServer, {  cors: {    origin: "https://front-domain.com",    methods: ["GET", "POST"],    credentials: true  }});
```

_Client_

```
const io = require("socket.io-client");const socket = io("https://server-domain.com", {  withCredentials: true});
```

Without it, the cookie will not be sent by the browser and you will experience HTTP 400 "Session ID unknown" responses. More information [here](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/withCredentials).

### nginx configuration[​](#nginx-configuration "Direct link to nginx configuration")

Within the `http { }` section of your `nginx.conf` file, you can declare a `upstream` section with a list of Socket.IO process you want to balance load between:

```
http {  server {    listen 3000;    server_name io.yourhost.com;    location / {      proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;      proxy_set_header Host $host;      proxy_pass http://nodes;      # enable WebSockets      proxy_http_version 1.1;      proxy_set_header Upgrade $http_upgrade;      proxy_set_header Connection "upgrade";    }  }  upstream nodes {    # enable sticky session with either "hash" (uses the complete IP address)    hash $remote_addr consistent;    # or "ip_hash" (uses the first three octets of the client IPv4 address, or the entire IPv6 address)    # ip_hash;    # or "sticky" (needs commercial subscription)    # sticky cookie srv_id expires=1h domain=.example.com path=/;    server app01:3000;    server app02:3000;    server app03:3000;  }}
```

Notice the `hash` instruction that indicates the connections will be sticky.

Make sure you also configure `worker_processes` in the topmost level to indicate how many workers nginx should use. You might also want to look into tweaking the `worker_connections` setting within the `events { }` block.

Links:

-   [Example](https://github.com/socketio/socket.io/tree/main/examples/cluster-nginx)
-   [nginx Documentation](http://nginx.org/en/docs/http/ngx_http_upstream_module.html#hash)

caution

The value of nginx's [`proxy_read_timeout`](https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_read_timeout) (60 seconds by default) must be bigger than Socket.IO's [`pingInterval + pingTimeout`](/docs/v4/server-options/#pinginterval) (45 seconds by default), else nginx will forcefully close the connection if no data is sent after the given delay and the client will get a "transport close" error.

### nginx Ingress (Kubernetes)[​](#nginx-ingress-kubernetes "Direct link to nginx Ingress (Kubernetes)")

Within the `annotations` section of your Ingress configuration, you can declare an upstream hashing based on the client's IP address, so that the Ingress controller always assigns the requests from a given IP address to the same pod:

```
apiVersion: networking.k8s.io/v1kind: Ingressmetadata:  name: your-ingress  namespace: your-namespace  annotations:    nginx.ingress.kubernetes.io/configuration-snippet: |      set $forwarded_client_ip "";      if ($http_x_forwarded_for ~ "^([^,]+)") {        set $forwarded_client_ip $1;      }      set $client_ip $remote_addr;      if ($forwarded_client_ip != "") {        set $client_ip $forwarded_client_ip;      }    nginx.ingress.kubernetes.io/upstream-hash-by: "$client_ip"spec:  ingressClassName: nginx  rules:    - host: io.yourhost.com      http:        paths:          - path: /            pathType: Prefix            backend:              service:                name: your-service                port:                  number: 80
```

Notes:

-   `nginx.ingress.kubernetes.io/upstream-hash-by: "$client_ip"`

This annotation instructs the NGINX Ingress Controller to use the client's IP address for routing incoming traffic to a specific Pod in your Kubernetes cluster. This is crucial for maintaining sticky sessions.

-   `nginx.ingress.kubernetes.io/configuration-snippet`

This custom NGINX configuration snippet serves a dual purpose:

1.  If the request passes through upstream reverse proxies or API gateways that append an `X-Forwarded-For` header, this snippet extracts the first IP address from that header and uses it to update the $client\_ip.
    
2.  In the absence of such proxies or gateways, the snippet simply uses the remote\_addr, which is the IP address of the client directly connected to the ingress.
    

This ensures that the correct client IP is used for the sticky session logic, enabled by the `nginx.ingress.kubernetes.io/upstream-hash-by: "$client_ip"` annotation. The snippet is particularly important when your architecture includes upstream network components like reverse proxies or API gateways.

Links:

-   [Ingress Nginx Documentation](https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations/#custom-nginx-upstream-hashing)
-   [X-Forwarded-For Header](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/X-Forwarded-For)

### Apache HTTPD configuration[​](#apache-httpd-configuration "Direct link to Apache HTTPD configuration")

```
Header add Set-Cookie "SERVERID=sticky.%{BALANCER_WORKER_ROUTE}e; path=/" env=BALANCER_ROUTE_CHANGED<Proxy "balancer://nodes_polling">    BalancerMember "http://app01:3000" route=app01    BalancerMember "http://app02:3000" route=app02    BalancerMember "http://app03:3000" route=app03    ProxySet stickysession=SERVERID</Proxy><Proxy "balancer://nodes_ws">    BalancerMember "ws://app01:3000" route=app01    BalancerMember "ws://app02:3000" route=app02    BalancerMember "ws://app03:3000" route=app03    ProxySet stickysession=SERVERID</Proxy>RewriteEngine OnRewriteCond %{HTTP:Upgrade} =websocket [NC]RewriteRule /(.*) balancer://nodes_ws/$1 [P,L]RewriteCond %{HTTP:Upgrade} !=websocket [NC]RewriteRule /(.*) balancer://nodes_polling/$1 [P,L]# must be bigger than pingInterval (25s by default) + pingTimeout (20s by default)ProxyTimeout 60
```

Links:

-   [Example](https://github.com/socketio/socket.io/tree/main/examples/cluster-httpd)
-   [Documentation](https://httpd.apache.org/docs/2.4/en/mod/mod_proxy.html#proxypass)

### HAProxy configuration[​](#haproxy-configuration "Direct link to HAProxy configuration")

```
# Reference: http://blog.haproxy.com/2012/11/07/websockets-load-balancing-with-haproxy/listen chat  bind *:80  default_backend nodesbackend nodes  option httpchk HEAD /health  http-check expect status 200  cookie io prefix indirect nocache # using the `io` cookie set upon handshake  server app01 app01:3000 check cookie app01  server app02 app02:3000 check cookie app02  server app03 app03:3000 check cookie app03
```

Links:

-   [Example](https://github.com/socketio/socket.io/tree/main/examples/cluster-haproxy)
-   [Documentation](http://cbonte.github.io/haproxy-dconv/2.4/configuration.html#cookie)

### Traefik[​](#traefik "Direct link to Traefik")

Using container labels:

```
# docker-compose.ymlservices:  traefik:    image: traefik:2.4    volumes:      - /var/run/docker.sock:/var/run/docker.sock    links:      - server  server:    image: my-image:latest    labels:      - "traefik.http.routers.my-service.rule=PathPrefix(`/`)"      - traefik.http.services.my-service.loadBalancer.sticky.cookie.name=server_id      - traefik.http.services.my-service.loadBalancer.sticky.cookie.httpOnly=true
```

With the [File provider](https://doc.traefik.io/traefik/v2.0/providers/file/):

```
## Dynamic configurationhttp:  services:    my-service:      rule: "PathPrefix(`/`)"      loadBalancer:        sticky:          cookie:            name: server_id            httpOnly: true
```

Links:

-   [Example](https://github.com/socketio/socket.io/tree/main/examples/cluster-traefik)
-   [Documentation](https://doc.traefik.io/traefik/v2.0/routing/services/#sticky-sessions)

### Using Node.js Cluster[​](#using-nodejs-cluster "Direct link to Using Node.js Cluster")

Just like nginx, Node.js comes with built-in clustering support through the `cluster` module.

There are several solutions, depending on your use case:

NPM package

How it works

[`@socket.io/sticky`](https://github.com/darrachequesne/socket.io-sticky)

the routing is based on the `sid` query parameter

[`sticky-session`](https://github.com/indutny/sticky-session)

the routing is based on `connection.remoteAddress`

[`socketio-sticky-session`](https://github.com/wzrdtales/socket-io-sticky-session)

the routing based on the `x-forwarded-for` header)

Example with `@socket.io/sticky`:

```
const cluster = require("cluster");const http = require("http");const { Server } = require("socket.io");const numCPUs = require("os").cpus().length;const { setupMaster, setupWorker } = require("@socket.io/sticky");const { createAdapter, setupPrimary } = require("@socket.io/cluster-adapter");if (cluster.isMaster) {  console.log(`Master ${process.pid} is running`);  const httpServer = http.createServer();  // setup sticky sessions  setupMaster(httpServer, {    loadBalancingMethod: "least-connection",  });  // setup connections between the workers  setupPrimary();  // needed for packets containing buffers (you can ignore it if you only send plaintext objects)  // Node.js < 16.0.0  cluster.setupMaster({    serialization: "advanced",  });  // Node.js > 16.0.0  // cluster.setupPrimary({  //   serialization: "advanced",  // });  httpServer.listen(3000);  for (let i = 0; i < numCPUs; i++) {    cluster.fork();  }  cluster.on("exit", (worker) => {    console.log(`Worker ${worker.process.pid} died`);    cluster.fork();  });} else {  console.log(`Worker ${process.pid} started`);  const httpServer = http.createServer();  const io = new Server(httpServer);  // use the cluster adapter  io.adapter(createAdapter());  // setup connection with the primary process  setupWorker(io);  io.on("connection", (socket) => {    /* ... */  });}
```

## Passing events between nodes[​](#passing-events-between-nodes "Direct link to Passing events between nodes")

Now that you have multiple Socket.IO nodes accepting connections, if you want to broadcast events to all clients (or to the clients in a certain [room](/docs/v4/rooms/)) you’ll need some way of passing messages between processes or computers.

The interface in charge of routing messages is what we call the [Adapter](/docs/v4/adapter/).

-   [Sticky load balancing](#sticky-load-balancing)
    -   [Why is sticky-session required](#why-is-sticky-session-required)
    -   [Enabling sticky-session](#enabling-sticky-session)
    -   [nginx configuration](#nginx-configuration)
    -   [nginx Ingress (Kubernetes)](#nginx-ingress-kubernetes)
    -   [Apache HTTPD configuration](#apache-httpd-configuration)
    -   [HAProxy configuration](#haproxy-configuration)
    -   [Traefik](#traefik)
    -   [Using Node.js Cluster](#using-nodejs-cluster)
-   [Passing events between nodes](#passing-events-between-nodes)

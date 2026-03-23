You can configure an NGINX Ingress by configuring the ConfigMap or annotations of the NGINX Ingress. This topic describes how to configure the common annotations and ConfigMap fields used by NGINX Ingresses.

## **Table of contents**

**Resource**

**Configuration item**

ConfigMap

[Default ConfigMap configurations](#07bbb20cbak7i)

[Field description](#33aa3a96fe3up)

Annotation

[Load balancing algorithms](#nyl1f)

[Cookie affinity](#GaNZQ)

[Redirects](#BD7dt)

[Rewrites](#V8tPh)

[Throttling](#UzEk3)

[Fallback](#Xzelu)

[Canary releases](#LNWVK)

[Timeout](#KKogD)

[CORS](#DqZmg)

[Retry policies](#fTpCy)

[IP address-based access control](#QpcEK)

[Traffic mirroring](#ASR9R)

[Security protection](#n5Jex)

[Security authentication](#TT40P)

## **Default ConfigMap configurations**

To modify the configurations of the ConfigMap used by an NGINX Ingress, run the `kubectl edit cm -n kube-system nginx-configuration` command. The following sample code block provides the default configurations of the ConfigMap. For more information, see [Official documentation](https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/configmap).

```
apiVersion: v1
kind: ConfigMap
metadata:
 name: nginx-configuration
 namespace: <Namespace>  # Default value: kube-system.
 labels:
   app: ingress-nginx
data:
   log-format-upstream: '$remote_addr - [$remote_addr] - $remote_user [$time_local] "$request" $status $body_bytes_sent "$http_referer" "$http_user_agent" $request_length $request_time [$proxy_upstream_name] $upstream_addr $upstream_response_length $upstream_response_time $upstream_status $req_id $host [$proxy_alternative_upstream_name]'
   proxy-body-size: 20m
   proxy-connect-timeout: "10"
   max-worker-connections: "65536"
   enable-underscores-in-headers: "true"
   reuse-port: "true"
   worker-cpu-affinity: "auto"
   server-tokens: "false"
   ssl-redirect: "false"
   allow-backend-server-header: "true"
   ignore-invalid-headers: "true"
   generate-request-id: "true"
   upstream-keepalive-timeout: "900"
```

The following table describes the fields in the preceding code block.

**Field**

**Description**

log-format-upstream

The log format. If you modify this field, you must update the configurations in the `kube-system/k8s-nginx-ingress AliyunLogConfig` and the format of logs collected by Simple Log Service. For more information, see [Diagnose the access log of the NGINX Ingress controller pod in Simple Log Service](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/troubleshooting-nginx-ingress-exceptions#232e02260026t).

proxy-body-size

The maximum size of the client request body. For more information, see [client\_max\_body\_size](https://nginx.org/en/docs/http/ngx_http_core_module.html#client_max_body_size).

proxy-connect-timeout

The [timeout period for establishing a connection with a proxy server](https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_connect_timeout). If you set this field, you must also set the [grpc\_connect\_timeout](https://nginx.org/en/docs/http/ngx_http_grpc_module.html#grpc_connect_timeout) field for gRPC connections. Maximum value: 75. Unit: seconds. When you set the value, you do not need to specify the unit.

max-worker-connections

The [maximum number of simultaneous connections](https://nginx.org/en/docs/ngx_core_module.html#worker_connections) that can be opened by a worker process. If you set the value to 0, the value of `max-worker-open-files` is used.

enable-underscores-in-headers

Specifies whether to support headers that include underscores (\_).

reuse-port

Creates a separate listening socket for each worker process to allow the system to distribute incoming connections between worker processes. This field uses the `SO_REUSEPORT` socket option.

worker-cpu-affinity

Automatically binds worker processes to available CPU cores to optimize the process performance. This field is suitable for high-performance computing scenarios.

server-tokens

Sends the NGINX Server header in responses and displays the NGINX version on error pages. To disable this field, set the value to `false`.

ssl-redirect

If the server has a TLS certificate, HTTPS is forcefully used by global configurations and 301 redirects are performed.

allow-backend-server-header

Specifies whether to return the header server, instead of genetic NGINX strings, from the backend.

ignore-invalid-headers

Specifies whether to ignore invalid header fields.

generate-request-id

If no `X-Request-ID` exists in the request, a random value is generated.

upstream-keepalive-timeout

The timeout period of idle keep-alive connections to an upstream server. This field corresponds to the `keepalive_timeout` directive of NGINX. The default timeout period is 60 seconds.

## Ingress **annotations**

When you use the NGINX Ingress controller, you can modify the controller configurations to meet your business requirements. To control the behavior of NGINX, you can add annotations to NGINX Ingresses. The following tables describe the common NGINX Ingress annotations. For more information, see [NGINX Ingress annotations](https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations/).

### **Load balancing algorithms**

NGINX Ingresses provide various load balancing algorithms to optimize traffic distribution among backend services. You can select load balancing algorithms based on the features and requirements of your applications.

**Annotation**

**Description**

nginx.ingress.kubernetes.io/load-balance

Specifies the load balancing algorithm for backend services. Valid values:

-   `round_robin` (default): the round-robin algorithm, which is a common load balancing algorithm suitable in most cases.
    
-   `ewma`: the Peak Exponential Weighted Moving Average (Peak EWMA) algorithm, which is suitable for applications that require fast response.
    

nginx.ingress.kubernetes.io/upstream-hash-by

Consistent hashing is a special hashing algorithm that uses circular hash spaces instead of regular linear hash spaces. When you add or remove nodes, you only need to migrate specific routes clockwise. This helps you reduce rerouting and implement load balancing.

The following sample YAML file provides an example on how to configure consistent hashing for load balancing.

## **Clusters that run Kubernetes 1.22 or later**

```
apiVersion: networking.k8s.io/v1
kind: Ingress 
metadata: 
  name: ingress-test
  namespace: default
  annotations:
    nginx.ingress.kubernetes.io/upstream-hash-by: "$request_uri"               # Use the Uniform Resource Identifier (URI) of the request for hashing. 
    nginx.ingress.kubernetes.io/upstream-hash-by: "$request_uri$host"          # Use the URI and domain name of the request for hashing. 
    nginx.ingress.kubernetes.io/upstream-hash-by: "${request_uri}-text-value"  # Use the URI of the request and a custom text value for hashing. 
spec:
  rules:
    - host: ''
      http:
        paths:
          - path: '/'
            backend:
              service:
                name: <YOUR_SERVICE_NAME>  # Replace the value with the actual Service name.
                port:
                  number: <YOUR_SERVICE_PORT>  # Replace the value with the actual Service port.
            property:
              ingress.beta.kubernetes.io/url-match-mode: STARTS_WITH
            pathType: ImplementationSpecific
  ingressClassName: nginx
```

## **Clusters that run Kubernetes versions earlier than 1.22**

```
apiVersion: networking.k8s.io/v1beta1
kind: Ingress
metadata:
  name: ingress-test
  namespace: default
  annotations:
    kubernetes.io/ingress.class: nginx
    nginx.ingress.kubernetes.io/upstream-hash-by: "$request_uri"               # Use the URI of the request for hashing. 
    nginx.ingress.kubernetes.io/upstream-hash-by: "$request_uri$host"          # Use the URI and domain name of the request for hashing. 
    nginx.ingress.kubernetes.io/upstream-hash-by: "${request_uri}-text-value"  # Use the URI of the request and a custom text value for hashing. 
spec:
  rules:
    - host: ''
      http:
        paths:
          - path: '/'
            backend:
              serviceName: <YOUR_SERVICE_NAME>  # Replace the value with the actual Service name.
              servicePort: <YOUR_SERVICE_PORT>  # Replace the value with the actual Service port.
```

### **Cookie affinity**

The following table describes the annotations that you can use to configure cookie-based session affinity.

**Annotation**

**Description**

nginx.ingress.kubernetes.io/affinity

The affinity type. Default value: `cookie`. Only the `cookie` type is supported.

nginx.ingress.kubernetes.io/affinity-mode

The affinity mode. Valid values:

-   `balanced`: distributes requests among multiple instances to implement load balancing.
    
-   `persistent`: continuously forwards the requests from a client to the same backend instance to ensure data consistency and implement session persistence.
    

Default value: `balanced`.

nginx.ingress.kubernetes.io/session-cookie-name

The cookie value that is used as the hash key.

nginx.ingress.kubernetes.io/session-cookie-path

The path that is set on the cookie. Default value: `/`. If you set `nginx.ingress.kubernetes.io/use-regex` to `true`, session cookie paths do not support regular expressions.

nginx.ingress.kubernetes.io/session-cookie-max-age

The validity period of the generated cookie. Unit: seconds.

nginx.ingress.kubernetes.io/session-cookie-expires

The amount of time that elapses between cookie creation and cookie expiration.

The following sample YAML file provides an example on how to configure cookie-based affinity:

```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: nginx-test
  annotations:
    nginx.ingress.kubernetes.io/affinity: "cookie"
    nginx.ingress.kubernetes.io/session-cookie-name: "route"
    nginx.ingress.kubernetes.io/session-cookie-expires: "172800"
    nginx.ingress.kubernetes.io/session-cookie-max-age: "172800"
spec:
  ingressClassName: nginx
  rules:
  - host: stickyingress.example.com
    http:
      paths:
      - path: /
        pathType: Prefix
        backend:
          service:
            name: http-svc
            port: 
              number: 80
```

### **Redirects**

The following table describes the annotations that you can use to configure redirects for NGINX Ingresses.

**Annotation**

**Description**

nginx.ingress.kubernetes.io/ssl-redirect

Redirects HTTP requests to HTTPS. For more information, see [HTTP-to-HTTPS redirect](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/advanced-nginx-ingress-configurations#9452112f96lan).

nginx.ingress.kubernetes.io/force-ssl-redirect

Redirects HTTP requests to HTTPS.

-   `true`: redirects to HTTPS requests.
    
-   `false`: does not redirect to HTTPS requests.
    

Default value: `false`.

nginx.ingress.kubernetes.io/permanent-redirect

The destination URL for a permanent redirect. The destination URL must contain the scheme, which is HTTP or HTTPS.

nginx.ingress.kubernetes.io/permanent-redirect-code

The HTTP status code for a permanent redirect. Default value: 301.

nginx.ingress.kubernetes.io/temporal-redirect

The destination URL for a temporary redirect. The destination URL must contain the scheme, which is HTTP or HTTPS.

nginx.ingress.kubernetes.io/app-root

Specifies the destination application root path for a redirect. This annotation is used to redirect requests from `/` to the specified path.

The following sample Ingress configurations show how to specify the destination URL for permanent redirects. After you implement the Ingress rules, requests to `foo.com` are redirected to `bar.com`.

```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: ingress-nginx
  annotations:
    kubernetes.io/ingress.class: "nginx"
    nginx.ingress.kubernetes.io/permanent-redirect: "https://bar.com"
spec:
  ingressClassName: nginx
  rules:
  - host: foo.com
    http:
      paths:
      - path: "/"
        pathType: ImplementationSpecific
        backend:
         service:
            name: httpbin
            port:
              number: 8000
```

### **Rewrites**

The following table describes the annotations that you can use to configure rewrites for NGINX Ingresses.

**Annotation**

**Description**

nginx.ingress.kubernetes.io/rewrite-target

Specifies the destination path for a rewrite operation. Capture groups are supported. For more information about Ingresses, see [Configure URL redirection](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/advanced-nginx-ingress-configurations#section-xsg-g5g-1uy).

nginx.ingress.kubernetes.io/upstream-vhost

Specifies the destination host for a rewrite operation.

The following sample Ingress configurations show how to configure host rewrites. After you implement the Ingress rules, the system rewrites the hostnames of requests to example.com/test as test.com/test.

```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  annotations:
    nginx.ingress.kubernetes.io/upstream-vhost: "test.com"
  name: demo
spec:
  ingressClassName: nginx
  rules:
    - host: example.com
      http:
        paths:
          - backend:
              service:
                name: demo-service
                port: 
                  number: 80
            path: /test
            pathType: ImplementationSpecific
```

### **Throttling**

To ensure service stability, you can configure throttling policies to control the frequency and concurrency of requests that are sent from each client IP address. The following table describes the annotations that you can use to configure throttling.

**Annotation**

**Description**

nginx.ingress.kubernetes.io/limit-connections

The maximum number of concurrent connections that can be established by an IP address. If the number of concurrent connections established by an IP address exceeds the upper limit, a 503 error is returned.

nginx.ingress.kubernetes.io/limit-rate

The maximum size (measured in KB) of data that can be transmitted through each connection per second. If you set the value to 0, rate limiting for data transmission is disabled. To enable rate limiting for data transmission, you must first enable [proxy buffering](https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations/#proxy-buffering).

nginx.ingress.kubernetes.io/limit-whitelist

The client IP address ranges that you want to exclude from throttling. Set the value to a comma-separated list of CIDR blocks.

nginx.ingress.kubernetes.io/limit-rpm

The maximum number of requests that can be received from an IP address per minute. The bust rate limit equals the rate limit multiplied by a multiplier. The default multiplier is 5. If the number of requests received from an IP address per minute exceeds the upper limit, a [limit-req-status-code](https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/configmap/#limit-req-status-code) error is returned. By default, a 503 error is returned.

nginx.ingress.kubernetes.io/limit-rps

The maximum number of requests that can be received from an IP address per second. The bust rate limit equals the rate limit multiplied by a multiplier. The default multiplier is 5. If the number of requests received from an IP address per second exceeds the upper limit, a [limit-req-status-code](https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/configmap/#limit-req-status-code) error is returned. By default, a 503 error is returned.

nginx.ingress.kubernetes.io/limit-burst-multiplier

The multiplier used to calculate the burst request rate limit. Default value: 5. You can use this annotation to specify a custom multiplier.

The following sample Ingress configurations show how to configure throttling:

```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: ingress-nginx
  annotations:
    kubernetes.io/ingress.class: "nginx"
    nginx.ingress.kubernetes.io/limit-rate: 100K
    nginx.ingress.kubernetes.io/limit-whitelist: 10.1.10.100
    nginx.ingress.kubernetes.io/limit-rps: 1
    nginx.ingress.kubernetes.io/limit-rpm: 30
spec:
  rules:
  - host: iphone.example.com 
    http:
      paths:
      - path: 
        backend:
          serviceName: iphone-backend-svc
          servicePort: 80
```

### **Fallback**

To ensure high availability and stability of your service, NGINX Ingresses provide disaster recovery (fallback) configurations to allow you to resolve issues such as node unavailability and specific errors. The following table describes the annotations that you can use to configure disaster recovery.

**Annotation**

**Description**

nginx.ingress.kubernetes.io/default-backend

The fallback service. If no nodes are available for the service defined in an Ingress rule, requests are automatically forwarded to the fallback service.

You can configure global configurations for the NGINX Ingress controller on the Add-ons page in the ACK console.

nginx.ingress.kubernetes.io/custom-http-errors

This annotation works with the `nginx.ingress.kubernetes.io/default-backend` annotation. If the specified HTTP status code is returned by a backend service, the original request is forwarded to the fallback service again.

**Important**

When a request is forwarded to the fallback service, the path of the request is rewritten as a forward slash (/). The behavior is consistent with the behavior implemented in ingress-nginx.

You can configure this annotation in the same way you configure the [custom-http-errors](https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/configmap/#custom-http-errors) field in the ConfigMap. This annotation is used to specify the `proxy-intercept-errors` field for NGINX and takes effect only for NGINX paths that are associated with the Ingress.

You can specify different error codes for the backend services of different Ingresses. If you specify `custom-http-errors` in the global configurations and this annotation, the error codes in this annotation overwrite the error codes in the global configurations and take effect on the hostnames and paths in the corresponding Ingresses.

### **Canary releases**

Canary releases and blue-green deployments are widely used to ensure seamless application upgrades and high availability. The following table describes the annotations that you can use to configure flexible traffic control to meet various requirements for service releases. For more information, see [Use the NGINX Ingress controller to implement canary releases and blue-green releases](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/implement-gray-scale-and-blue-green-publishing-through-nginx-ingress).

**Annotation**

**Description**

nginx.ingress.kubernetes.io/canary

Specifies whether to enable the canary release feature.

nginx.ingress.kubernetes.io/canary-by-header

Specifies the request header key that is used for traffic splitting.

nginx.ingress.kubernetes.io/canary-by-header-value

Specifies the request header value that is used for traffic splitting. An exact match is supported for the request header value.

nginx.ingress.kubernetes.io/canary-by-header-pattern

Specifies the request header value that is used for traffic splitting. A regular expression match is supported for the request header value.

nginx.ingress.kubernetes.io/canary-by-cookie

Specifies the request cookie key that is used for traffic splitting.

nginx.ingress.kubernetes.io/canary-weight

Specifies the weight that is used for traffic splitting.

nginx.ingress.kubernetes.io/canary-weight-total

Specifies the total weight.

### **Timeout**

The following table describes the annotations that you can use to configure timeout for NGINX Ingresses, including global configurations and custom timeout settings for specific resources. Proper timeout settings can optimize connection performance and reliability.

-   Global timeout settings
    
    You can run the `kubectl edit cm -n kube-system nginx-configuration` command to configure the following fields for global timeout settings.
    
    **Configuration option**
    
    **Description**
    
    **Default value**
    
    `proxy-connect-timeout`
    
    Sets the timeout period for establishing a connection with the proxy server. In general, the value cannot exceed 75s.
    
    5s
    
    `proxy-read-timeout`
    
    Sets the timeout period for reading a response from the proxy server. This timeout period applies between two consecutive read operations, rather than to the transmission of the entire response.
    
    60s
    
    `proxy-send-timeout`
    
    Sets the timeout period for sending a request to the proxy server. This timeout period applies between two consecutive write operations, rather than to the transmission of the entire request.
    
    60s
    
    `proxy-stream-next-upstream-timeout`
    
    Limits the amount of time allowed to pass a connection to the next server. If you set the value to 0, no limit is imposed.
    
    600s
    
    `proxy-stream-timeout`
    
    Sets the timeout period between two consecutive read or write operations on a client or proxy server connection. If no data is transmitted within the period, the connection is closed.
    
    600s
    
    `upstream-keepalive-timeout`
    
    Sets a timeout period for keeping an idle connection open with upstream servers.
    
    -   Open source edition: 60s
        
    -   ACK edition: 900s
        
    
    `worker-shutdown-timeout`
    
    Sets the timeout period for a graceful shutdown.
    
    240s
    
    `proxy-protocol-header-timeout`
    
    Sets the timeout period for receiving the proxy protocol header. The default value prevents the Transport Layer Security (TLS) passthrough handler from waiting indefinitely for a broken connection.
    
    5s
    
    `ssl-session-timeout`
    
    Sets the validity period for SSL session parameters in the session cache. The expiration time is subject to the creation time. Each session cache occupies about 0.25 MB of space.
    
    10m
    
    `client-body-timeout`
    
    Sets the timeout period for reading the client request body.
    
    60s
    
    `client-header-timeout`
    
    Sets the timeout period for reading the client request headers.
    
    60s
    
-   Custom timeout settings on specific resources
    
    The following table describes the annotations that you can use to configure timeout settings for specific resources.
    
    **Annotation**
    
    **Description**
    
    `nginx.ingress.kubernetes.io/proxy-connect-timeout`
    
    Sets the timeout period for establishing a connection with the proxy server.
    
    `nginx.ingress.kubernetes.io/proxy-send-timeout`
    
    Sets the timeout period for sending data to the proxy server.
    
    `nginx.ingress.kubernetes.io/proxy-read-timeout`
    
    Sets the timeout period for reading data from the proxy server.
    
    `nginx.ingress.kubernetes.io/proxy-request-buffering`
    
    Specifies whether to enable the request buffering feature. Valid values:
    
    -   `on`: enables request buffering. After request buffering is enabled, the request data is forwarded to the backend workload only after it is completely received. HTTP/1.1 chunked-encoded requests are not subject to this setting and are always buffered.
        
    -   `off`: disables request buffering. After request buffering is disabled, if an error occurs during the data transmission, no workload is selected for a retry.
        
    

### **CORS**

After you configure cross-origin resource sharing (CORS) for the NGINX Ingress controller, you can allow the specified resources to be accessed across origins. For more information, see [Configure CORS on NGINX Ingresses](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/nginx-ingress-cross-domain-configuration-and-common-problems).

**Annotation**

**Description**

nginx.ingress.kubernetes.io/enable-cors

Specifies whether to enable CORS.

nginx.ingress.kubernetes.io/cors-allow-origin

Specifies the allowed third-party sites for CORS.

nginx.ingress.kubernetes.io/cors-allow-methods

Specifies the allowed request methods for CORS. The allowed request methods include GET, POST, and PUT.

nginx.ingress.kubernetes.io/cors-allow-headers

Specifies the allowed request headers for CORS.

nginx.ingress.kubernetes.io/cors-expose-headers

Specifies the allowed response headers that are exposed to browsers.

nginx.ingress.kubernetes.io/cors-allow-credentials

Specifies whether to allow credentials to be carried in CORS requests.

nginx.ingress.kubernetes.io/cors-max-age

Specifies the maximum duration in which precheck results are cached.

### **Retry policies**

The following table describes the annotations that you can use to configure retry policies. Retries can improve the availability and fault tolerance of your applications.

**Annotation**

**Description**

nginx.ingress.kubernetes.io/proxy-next-upstream-tries

Sets the number of retries allowed if the retry conditions are met. Default value: 3.

nginx.ingress.kubernetes.io/proxy-next-upstream-timeout

Specifies the timeout period for request retries. Unit: seconds. By default, no timeout periods are configured.

nginx.ingress.kubernetes.io/proxy-next-upstream

Configures retry policies or retry conditions. Separate multiple items with spaces. For example, you can use `http_500` and `http_502`. The following policies are supported:

-   `error`: returns a response upon a connection failure.
    
-   `timeout`: returns a response upon a timeout error.
    
-   `invalid_response`: returns a response when an invalid status code is identified.
    
-   `http_xxx`: xxx can be replaced with a status code. For example, if you set xxx to 500, the next workload is selected when the upstream returns the status code 500. Supported status codes are 500, 502, 503, 504, 403, 404, and 429.
    
-   `off`: disables the retry mechanism and returns a response regardless of the error that occurs.
    

### **IP address-based access control**

The following table describes the annotations that you can use to configure IP whitelists and blacklists for NGINX Ingresses.

**Annotation**

**Description**

nginx.ingress.kubernetes.io/whitelist-source-range

The IP whitelist. IP addresses and CIDR blocks are supported. Separate IP addresses or CIDR blocks with commas (,).

nginx.ingress.kubernetes.io/denylist-source-range

The IP blacklist. IP addresses and CIDR blocks are supported. Separate IP addresses or CIDR blocks with commas (,).

The following sample Ingress configurations show how to configure an IP whitelist:

```
apiVersion: networking.k8s.io/v1
kind: Ingress
metadata:
  name: ingress-nginx
  annotations:
    kubernetes.io/ingress.class: "nginx"
    nginx.ingress.kubernetes.io/whitelist-source-range: 10.1.10.2
spec:
  rules:
  - host: iphone.exmaple.com 
    http:
      paths:
      - path: 
        backend:
          serviceName: iphone-example-svc
          servicePort: 80
```

To configure global configurations, run the `kubectl edit cm -n kube-system nginx-configuration` command and modify the `whitelist-source-range` field.

### **Traffic mirroring**

The following table describes the annotations that you can use to configure traffic mirroring. Traffic mirroring helps you detect potential risks without interrupting your services in the production environment and improve application stability. For more information, see [Use an Ingress controller to mirror network traffic](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-an-ingress-controller-to-mirror-network-traffic).

**Annotation**

**Description**

nginx.ingress.kubernetes.io/mirror-target

The destination IP address.

You can specify a Service IP address or external IP address. For example, you can specify `https://test.env.com/$request_uri`. `$request_uri` is used to add the URI of the request to the end of the destination URL.

nginx.ingress.kubernetes.io/mirror-request-body

Specifies whether to mirror the request body.

nginx.ingress.kubernetes.io/mirror-host

The host information used to mirror traffic.

### **Security protection**

You can configure security protection to secure communications between clients and gateways. The following tables describe the annotations that you can use to encrypt communications. For more information, see [NGINX Ingress controller encryption](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/nginx-ingress-controller-secure-encryption).

-   Encrypted communications between clients and gateways
    
    The following table describes the annotations that you can use to encrypt communications between clients and gateways.
    
    **Annotation**
    
    **Scope**
    
    **Description**
    
    nginx.ingress.kubernetes.io/ssl-cipher
    
    Domain name
    
    Specifies the TLS cipher suites. You can specify multiple TLS cipher suites, which are separated by commas (,). This parameter takes effect only if a TLS version from 1.0 to 1.2 is used during a TLS handshake. Default cipher suites:
    
    -   ECDHE-ECDSA-AES128-GCM-SHA256
        
    -   ECDHE-RSA-AES128-GCM-SHA256
        
    -   ECDHE-ECDSA-AES128-SHA
        
    -   ECDHE-RSA-AES128-SHA
        
    -   AES128-GCM-SHA256
        
    -   AES128-SHA
        
    -   ECDHE-ECDSA-AES256-GCM-SHA384
        
    -   ECDHE-RSA-AES256-GCM-SHA384
        
    -   ECDHE-ECDSA-AES256-SHA
        
    -   ECDHE-RSA-AES256-SHA
        
    -   AES256-GCM-SHA384
        
    -   AES256-SHA
        
    
    nginx.ingress.kubernetes.io/auth-tls-secret
    
    Domain name
    
    Specifies the certificate authority (CA) certificate that a gateway uses to verify the certificate provided by a client during a mutual TLS (mTLS) handshake. This annotation is suitable for scenarios in which a gateway needs to verify the identity of a client.
    
    The corresponding Secret must include a file named `ca.crt`. The `ca.crt` file contains a complete CA chain.
    
-   Encrypted communications between gateways and backend services
    
    The following table describes the annotations that you can use to encrypt communications between backend services and gateways.
    
    **Annotation**
    
    **Scope**
    
    **Description**
    
    nginx.ingress.kubernetes.io/proxy-ssl-secret
    
    Service
    
    Specifies the client certificate that is used by the gateway. The client certificate is used by the backend service to authenticate the gateway.
    
    The specified certificate must be in the Privacy Enhanced Mail (PEM) format.
    
    -   The Secret must include the following files:
        
        -   `tls.crt`: the client certificate.
            
        -   `tls.key`: the private key of the client certificate.
            
        -   `ca.crt`: the trusted CA certificate used to authenticate proxy HTTPS servers.
            
    -   The value must be in the `"namespace/secretName"` format.
        
    
    nginx.ingress.kubernetes.io/proxy-ssl-name
    
    Service
    
    Specifies the Server Name Indication (SNI) that is used during a TLS handshake.
    
    nginx.ingress.kubernetes.io/proxy-ssl-server-name
    
    Service
    
    Specifies whether to enable or disable the SNI that is used during a TLS handshake.
    

### Security authentication

The following table describes the annotations that you can use to configure Basic Authentication to allow only authorized users to access your applications.

**Annotation**

**Scope**

**Description**

nginx.ingress.kubernetes.io/auth-type

Ingress

The authentication type. Set the value to `basic`.

nginx.ingress.kubernetes.io/auth-secret

Ingress

Specifies the name of a Secret. The name must be in the namespace/secretName format. The Secret name includes the username and password that are used to access the routes defined in the Ingress rules.

nginx.ingress.kubernetes.io/auth-secret-type

Ingress

Specifies the format of the Secret content. Valid values:

-   `auth-file`: The key of data is auth, and the value of data is the username and password. The information of each account occupies a separate line.
    
-   `auth-map`: The key of data is the username and the value of data is the password.
    

nginx.ingress.kubernetes.io/auth-realm

Ingress

Specifies the authentication realm. The username and password are shared in an authentication realm.

Procedure:

1.  Use the `htpasswd` command-line tool to generate a password file.
    
    ```
    htpasswd -c auth joker
    ```
    
    View the password file.
    
    ```
    cat auth 
    # Expected output: joker:$apr1$R.G4krs/$hh0mX8xe4A3lYKMjvlVs1/
    ```
    
2.  Create a Secret based on the password file:
    
    ```
    kubectl create secret generic basic-auth --from-file=auth 
    ```
    
3.  Enable Basic Authentication in the Ingress configurations. Example:
    
    ```
    apiVersion: networking.k8s.io/v1
    kind: Ingress
    metadata:
      name: ingress-nginx
      annotations:
        kubernetes.io/ingress.class: "nginx"
        nginx.ingress.kubernetes.io/auth-type: basic
        nginx.ingress.kubernetes.io/auth-secret: basic-auth
    spec:
      rules:
      - host: iphone.example.com 
        http:
          paths:
          - path: 
            backend:
              serviceName: iphone-backend-svc
              servicePort: 80
    ```

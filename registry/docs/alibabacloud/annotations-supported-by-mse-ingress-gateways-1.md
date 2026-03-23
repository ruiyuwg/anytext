Microservices Engine (MSE) Ingress gateways support core and common annotations of NGINX Ingress gateways. This facilitates seamless migration from NGINX Ingress gateways to MSE Ingress gateways. MSE Ingress gateways also provide additional annotations for traffic governance. This topic describes the annotations that are supported by MSE Ingress gateways.

## Background information

Ingress resources are used to manage how services in a Kubernetes cluster are exposed to external access. As the number of cloud-native distributed applications increases, Ingress resources that are defined in Kubernetes standards cannot meet the traffic management requirements of users. To meet the requirements for Ingress functionalities in various scenarios, the development teams of Ingress controllers have started to define custom annotations. More than 100 annotations are defined for the mainstream NGINX Ingress controllers.

MSE Ingress gateways support common and core annotations of NGINX Ingress gateways to allow you to integrate your business into the Kubernetes ecosystem. This facilitates seamless migration from NGINX Ingress gateways to MSE Ingress gateways. MSE Ingress gateways also provide additional annotations for traffic governance to improve responsiveness.

## Overview

Ingress resources that are defined in Kubernetes standards only provide Transport Layer Security (TLS) encrypted communications and simple routing of Layer-7 HTTP traffic. In most cases, Ingress controllers use annotations to enhance Ingress capabilities in terms of traffic governance and security protection.

## Supported Ingress annotations

### NGINX Ingress annotations

To facilitate seamless migration from NGINX Ingress gateways to MSE Ingress gateways, MSE Ingress gateways support most of NGINX Ingress annotations. The following table describes the support status of NGINX Ingress annotations.

**NGINX Ingress annotation**

**Total number of annotations**

**Description**

Supported annotations

51

Suitable for 90% of scenarios.

Annotations that do not affect functionality

15

No configuration is required.

To-be-supported annotations

48

To be supported in few scenarios.

Unsupported annotations

5

Involved in code snippets of NGINX Ingress gateways.

**Note**

The code for MSE to implement features is different from the code for NGINX.

1.  The [NGINX variables](https://nginx.org/en/docs/varindex.html) configured in the NGINX Ingress annotations and code snippets in MSE are incompatible with those in NGINX.
    
2.  In NGINX Ingress Controller, the `nginx.ingress.kubernetes.io/proxy-body-size` annotation is used to configure the maximum allowed size for the client request body. If the request body exceeds the specified limit, NGINX will report an error. By comparison, MSE cloud-native gateways adopt chunked transfer encoding for data transmission. This approach automatically breaks down a large request body into chunks, without the need to preconfigure the size of the request body. To transfer large files, you can change the settings of the **DownstreamConnectionBufferLimits** parameter in the **Parameter Settings** pane for an MSE gateway.
    

### MSE Ingress annotations

MSE Ingress gateways provide additional annotations for traffic governance. The following table describes the support status of additional annotations provided by MSE.

**MSE Ingress annotation**

**Total number of annotations**

**Description**

Extended annotations

40

In addition to NGINX Ingress annotations, MSE Ingress gateways provide additional annotations to enhance traffic governance and security protection.

### Scope description

-   Ingress: The annotations with this scope apply to the routing rules defined on the Ingress resources that you use.
    
-   Domain name: The annotations with this scope apply to the hosts defined by the Ingress resources that you use. This scope also takes effect on the same hosts of other Ingress resources.
    
-   Service: The annotations with this scope apply to the services defined by the Ingress resources that you use. The annotations also take effect on the same services of other Ingress resources.
    

### Annotation prefixes

MSE Ingress gateways provide the annotations that have the same functionalities as the associated annotations that are supported by NGINX Ingress gateways. For example, the functionality of the annotation `nginx.ingress.kubernetes.io/xxx` provided by NGINX ingress gateways is the same as that of the annotation `mse.ingress.kubernetes.io/xxx` provided by MSE Ingress gateways. You can use the `nginx` or `mse` business domain prefix based on your usage habits. However, the mse prefix of the annotations that are exclusively provided by MSE Ingress gateways cannot be replaced by the nginx prefix.

## Supported annotations

This section describes the supported annotations in terms of traffic governance and security protection.

### Traffic governance

#### **Canary release**

**Annotation**

**Scope**

**Support status**

**Description**

nginx.ingress.kubernetes.io/canary

Ingress

Compatible

Specifies whether to enable the canary release feature.

nginx.ingress.kubernetes.io/canary-by-header

Ingress

Compatible

Specifies the `request header key` that is used for traffic splitting.

nginx.ingress.kubernetes.io/canary-by-header-value

Ingress

Compatible

Specifies the `request header value` that is used for traffic splitting. An exact match is supported for the request header value.

nginx.ingress.kubernetes.io/canary-by-header-pattern

Ingress

Compatible

Specifies the `request header value` that is used for traffic splitting. A regular expression match is supported for the request header value.

mse.ingress.kubernetes.io/canary-by-query

Ingress

MSE-exclusive

Specifies the `URL query parameter` that is used for traffic splitting.

mse.ingress.kubernetes.io/canary-by-query-value

Ingress

MSE-exclusive

Specifies the `URL query parameter` that is used for traffic splitting. An exact match is supported for the URL query parameter value.

mse.ingress.kubernetes.io/canary-by-query-pattern

Ingress

MSE-exclusive

Specifies the `URL query parameter` that is used for traffic splitting. A regular expression match is supported for the URL query parameter value.

nginx.ingress.kubernetes.io/canary-by-cookie

Ingress

Compatible

Specifies the `request cookie key` that is used for traffic splitting.

mse.ingress.kubernetes.io/canary-by-cookie-value

Ingress

-   MSE-exclusive
    
-   Required gateway version: V1.2.30
    

Specifies the `request cookie value` that is used for traffic splitting. An exact match is supported for the request cookie value.

nginx.ingress.kubernetes.io/canary-weight

Ingress

Compatible

Specifies the service weight that is used for traffic splitting.

nginx.ingress.kubernetes.io/canary-weight-total

Ingress

Compatible

Specifies the total weight.

#### **Multi-service**

**Annotation**

**Scope**

**Support status**

**Description**

mse.ingress.kubernetes.io/destination

Ingress

MSE-exclusive

Specifies the weight-based service distribution for routes.

The configuration syntax is `{weight}% {serviceName}.{serviceNamespace}.svc.cluster.local:{port}`.

**Note**

-   After you configure this annotation, the destination services of all routing rules on the Ingress gateway are changed to the service specified by this annotation.
    
-   If the configuration syntax of this annotation does not meet the requirements, this annotation is ignored. In this case, the destination services of all routing rules on the Ingress gateway are not changed.
    

Sample syntax:

```
annotations:
  # 60% of traffic is routed to the foo service and 40% of traffic is routed to the bar service. 
  mse.ingress.kubernetes.io/destination: |
    60% foo.default.svc.cluster.local:8080
    40% bar.default.svc.cluster.local:9090
```

#### **Service subset**

**Annotation**

**Scope**

**Support status**

**Description**

mse.ingress.kubernetes.io/service-subset

Ingress

-   MSE-exclusive
    
-   Required gateway version: V1.2.25
    

A service subset is suitable for scenarios in which one service manages multiple deployments. A service subset is a subset of service pods to which requests are forwarded based on the configuration of an Ingress.

-   If the mse.ingress.kubernetes.io/subset-labels annotation is not configured, requests are forwarded based on the value of this annotation.
    
    -   If this annotation is set to "" or base, requests are forwarded to the pods whose labels contain opensergo.io/canary: "" or the pods whose label keys are not prefixed with opensergo.io/canary. This way, requests are forwarded to the pods that have an empty label or do not have a label.
        
    -   If this annotation is set to a value other than "" or base, requests are forwarded to the pods whose labels contain opensergo.io/canary-{Specified value}: {Specified value}. For example, if you set this annotation to gray, requests are forwarded to the pods whose labels contain opensergo.io/canary-gray: gray.
        
-   If the mse.ingress.kubernetes.io/subset-labels annotation is configured, requests are forwarded only to the pods whose labels contain Key:Value defined in mse.ingress.kubernetes.io/subset-labels.
    

**Note**

If the service does not contain pods with the specified label, requests are automatically forwarded to all pods of the service.

mse.ingress.kubernetes.io/subset-labels

Ingress

-   MSE-exclusive
    
-   Required gateway version: V1.2.25
    

Optional. You can use this annotation with the `mse.ingress.kubernetes.io/service-subset` annotation to specify the labels that are used to classify pods into subsets.

#### **Fallback**

**Annotation**

**Scope**

**Support status**

**Description**

nginx.ingress.kubernetes.io/default-backend

Ingress

Compatible

Specifies the fallback service. If no nodes are available for the service defined in an Ingress rule, requests are automatically forwarded to the fallback service.

nginx.ingress.kubernetes.io/custom-http-errors

Ingress

Compatible

This annotation works with the `nginx.ingress.kubernetes.io/default-backend` annotation. If the specified HTTP status code is returned by a backend service, the original request is forwarded to the fallback service again.

**Important**

When a request is forwarded to the fallback service, the path of the request is rewritten as a forward slash (/). The behavior is consistent with that is implemented in `NGINX Ingress gateways`.

#### **Regex match**

**Annotation**

**Scope**

**Support status**

**Description**

nginx.ingress.kubernetes.io/use-regex

Ingress

Compatible

Specifies whether a regular expression is used to match the path defined in an Ingress. The regular expression uses the [RE2 syntax](https://github.com/google/re2/wiki/Syntax).

#### **Rewrite**

**Annotation**

**Scope**

**Support status**

**Description**

nginx.ingress.kubernetes.io/rewrite-target

Ingress

Compatible

Specifies the destination path for a rewrite operation. `Capture groups` are supported.

nginx.ingress.kubernetes.io/upstream-vhost

Ingress

Compatible

Specifies the destination host for a rewrite operation. If a route request that matches the CustomResourceDefinition (CRD) of an Ingress resource is forwarded to a backend service, the system changes the host value in the request header to the specified value.

#### **Redirect**

**Note**

NGINX provides a wider range of features than NGINX Ingress. The use of [NGINX variables](https://nginx.org/en/docs/varindex.html) for redirection may be supported in some NGINX Ingress versions. However, this feature is not described in the [Annotations](https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations/#permanent-redirect) documentation. The use of NGINX variables for redirection may cause incompatibility issues. We recommend that you do not use NGINX variables for redirection in NGINX Ingress.

**Annotation**

**Scope**

**Support status**

**Description**

nginx.ingress.kubernetes.io/ssl-redirect

Ingress

Compatible

Specifies whether to redirect HTTP to HTTPS.

nginx.ingress.kubernetes.io/force-ssl-redirect

Ingress

Compatible

Specifies whether to forcefully redirect HTTP to HTTPS.

nginx.ingress.kubernetes.io/permanent-redirect

Ingress

Compatible

Specifies a permanent redirect.

nginx.ingress.kubernetes.io/permanent-redirect-code

Ingress

Compatible

Specifies the status code that is used for a permanent redirect.

nginx.ingress.kubernetes.io/temporal-redirect

Ingress

Compatible

Specifies a temporal redirect.

nginx.ingress.kubernetes.io/app-root

Ingress

Compatible

Specifies the destination application root path for a redirect. This annotation is used to redirect requests from / to the specified path.

#### **CORS**

**Annotation**

**Scope**

**Support status**

**Description**

nginx.ingress.kubernetes.io/enable-cors

Ingress

Compatible

Specifies whether to enable cross-origin resource sharing (CORS).

nginx.ingress.kubernetes.io/cors-allow-origin

Ingress

Compatible

Specifies the allowed third-party sites for CORS.

nginx.ingress.kubernetes.io/cors-allow-methods

Ingress

Compatible

Specifies the allowed request methods for CORS. The allowed request methods include GET, POST, and PUT.

nginx.ingress.kubernetes.io/cors-allow-headers

Ingress

Compatible

Specifies the allowed request headers for CORS.

nginx.ingress.kubernetes.io/cors-expose-headers

Ingress

Compatible

Specifies the allowed response headers that are exposed to browsers.

nginx.ingress.kubernetes.io/cors-allow-credentials

Ingress

Compatible

Specifies whether credentials can be included in CORS requests.

nginx.ingress.kubernetes.io/cors-max-age

Ingress

Compatible

Specifies the maximum duration in which precheck results are cached.

#### **Header control**

**Note**

Header control-related annotations defined for base routes and header control-related annotations defined for canary routes are independent of each other and separately validated. You can use the header control feature to configure different header control policies for requests on base routes and requests on canary routes.

**Annotation**

**Scope**

**Support status**

**Description**

mse.ingress.kubernetes.io/request-header-control-add

Ingress

MSE-exclusive

Specifies the header that is added to a request when the request is forwarded to the backend service. If the header exists, its value is concatenated after the original value. The following syntax is used:

-   Single header: A key-value pair is used.
    
-   Multiple headers: A vertical bar (`|`) in the YAML file is used. Each key-value pair occupies a separate line.
    

mse.ingress.kubernetes.io/request-header-control-update

Ingress

MSE-exclusive

Specifies the header that is modified in a request when the request is forwarded to the backend service. If the header exists, its value overwrites the original value. The following syntax is used:

-   Single header: A key-value pair is used.
    
-   Multiple headers: A vertical bar (`|`) in the YAML file is used. Each key-value pair occupies a separate line.
    

mse.ingress.kubernetes.io/request-header-control-remove

Ingress

MSE-exclusive

Specifies the header that is deleted from a request when the request is forwarded to the backend service. The following syntax is used:

-   Single header: A key is used.
    
-   Multiple headers: Multiple headers are separated by commas (,).
    

mse.ingress.kubernetes.io/response-header-control-add

Ingress

MSE-exclusive

Specifies the header that is added to a response received from a backend service before the response is forwarded to a client. If the header exists, its value is concatenated after the original value. The following syntax is used:

-   Single header: A `key-value pair` is used.
    
-   Multiple headers: A vertical bar (`|`) in the YAML file is used. Each key-value pair occupies a separate line.
    

mse.ingress.kubernetes.io/response-header-control-update

Ingress

MSE-exclusive

Specifies the header that is modified in a response received from a backend service before the response is forwarded to a client. If the header exists, its value overwrites the original value. The following syntax is used:

-   Single header: A `key-value pair` is used.
    
-   Multiple headers: A vertical bar (`|`) in the YAML file is used. Each key-value pair occupies a separate line.
    

mse.ingress.kubernetes.io/response-header-control-remove

Ingress

MSE-exclusive

Specifies the header that is deleted from a response received from a backend service before the response is forwarded to a client. The following syntax is used:

-   Single header: A key is used.
    
-   Multiple headers: Multiple headers are separated by commas (,).
    

#### **Timeout**

**Annotation**

**Scope**

**Support status**

**Description**

mse.ingress.kubernetes.io/timeout

Ingress

MSE-exclusive

Specifies the request timeout period. Unit: seconds. By default, no timeout periods are configured.

**Note**

Timeout settings take effect for the application layer, not for TCP at the transport layer.

#### **Retry**

**Annotation**

**Scope**

**Support status**

**Description**

nginx.ingress.kubernetes.io/proxy-next-upstream-tries

Ingress

Compatible

Specifies the maximum number of request retries. Default value: 3.

nginx.ingress.kubernetes.io/proxy-next-upstream-timeout

Ingress

Compatible

Specifies the timeout period for request retries. Unit: seconds. By default, no timeout periods are configured.

nginx.ingress.kubernetes.io/proxy-next-upstream

Ingress

Compatible

Specifies retry conditions. For more information, see [NGINX retry mechanism](https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_next_upstream).

#### **Traffic mirroring**

**Annotation**

**Scope**

**Support status**

**Description**

mse.ingress.kubernetes.io/mirror-target-service

Ingress

MSE-exclusive

Specifies the destination service to which mirrored traffic is forwarded. The format is namespace/name:port.

-   namespace: the namespace where the Kubernetes service resides. This parameter is optional. The default namespace is the namespace where the Ingress gateway resides.
    
-   name: the name of the Kubernetes service. This parameter is required.
    
-   port: the Kubernetes service port to which mirrored traffic is forwarded. This parameter is optional. By default, the first port is used.
    

mse.ingress.kubernetes.io/mirror-percentage

Ingress

-   MSE-exclusive
    
-   Required gateway version: V1.2.32
    

Specifies the percentage of mirrored traffic. Valid values: 0-100. Default value: 100.

#### **Domain alias**

**Annotation**

**Scope**

**Support status**

**Description**

nginx.ingress.kubernetes.io/server-alias

Domain

-   Partially compatible (Support only for exact match domains and wildcard domains)
    
-   Required gateway version: V1.2.30
    

Specifies the domain alias that is defined in Ingress spec. Domain aliases share the configurations related to Transport Layer Security (TLS), routing, and traffic governance of the source domain.

#### **Single-gateway throttling** (to be deprecated)

**Annotation**

**Scope**

**Support status**

**Description**

mse.ingress.kubernetes.io/route-limit-rpm

Ingress

MSE-exclusive

Specifies the maximum number of requests per minute (RPM) that are routed on a gateway. The burst limit is equal to the specified value multiplied by `mse.ingress.kubernetes.io/route-limit-burst-multiplier`.

When throttling is triggered, the response body content is `local_rate_limited`. Response status codes:

-   If the gateway version is earlier than V1.2.23, the status code 503 is returned.
    
-   If the gateway version is V1.2.23 or later, the status code 429 is returned.
    

mse.ingress.kubernetes.io/route-limit-rps

Ingress

MSE-exclusive

Specifies the maximum number of requests per second (RPS) that are routed on a gateway. The burst limit is equal to the specified value multiplied by `mse.ingress.kubernetes.io/route-limit-burst-multiplier`.

When throttling is triggered, the response body content is `local_rate_limited`. Response status codes:

-   If the gateway version is earlier than V1.2.23, the status code 503 is returned.
    
-   If the gateway version is V1.2.23 or later, the status code 429 is returned.
    

mse.ingress.kubernetes.io/route-limit-burst-multiplier

Ingress

MSE-exclusive

Specifies the multiplier of burst limits. Default value: 5.

#### **(Recommended) Global throttling control**

**Annotation**

**Scope**

**Support status**

**Description**

mse.ingress.kubernetes.io/rate-limit

Ingress

-   MSE-exclusive
    
-   Required gateway version: V1.2.25
    

Specifies the maximum number of RPS that are routed on a gateway. This annotation is used for global throttling.

mse.ingress.kubernetes.io/rate-limit-fallback-custom-response-code

Ingress

-   MSE-exclusive
    
-   Required gateway version: V1.2.25
    

Specifies the response code when throttling is triggered on the route defined by an Ingress. Default value: 429.

**Note**

This annotation is mutually exclusive with the mse.ingress.kubernetes.io/rate-limit-fallback-redirect-url annotation. You must specify one of the two annotations.

mse.ingress.kubernetes.io/rate-limit-fallback-custom-response-body-type

Ingress

-   MSE-exclusive
    
-   Required gateway version: V1.2.25
    

Specifies the format of the response body when throttling is triggered on the route defined by an Ingress. Default value: text.

-   If this parameter is set to text, the Content-Type value in the response is text/plain; charset=UTF-8.
    
-   If this parameter is set to JSON, the Content-Type value in the response is application/json; charset=UTF-8.
    

mse.ingress.kubernetes.io/rate-limit-fallback-custom-response-body

Ingress

-   MSE-exclusive
    
-   Required gateway version: V1.2.25
    

Specifies the response body when throttling is triggered on the route defined by an Ingress. Default value: sentinel rate limited.

mse.ingress.kubernetes.io/rate-limit-fallback-redirect-url

Ingress

-   MSE-exclusive
    
-   Required gateway version: V1.2.25
    

Specifies the redirect URL when throttling is triggered on the route defined by an Ingress.

**Note**

This annotation is mutually exclusive with the mse.ingress.kubernetes.io/rate-limit-fallback-custom-response-code annotation. You must specify one of the two annotations.

#### **Global** concurrency control

**Annotation**

**Scope**

**Support status**

**Description**

mse.ingress.kubernetes.io/concurrency-limit

Ingress

-   MSE-exclusive
    
-   Required gateway version: V1.2.25
    

Specifies the maximum number of requests that can be processed at the same time. This annotation is used for global concurrency control on a route in a gateway.

mse.ingress.kubernetes.io/concurrency-limit-fallback-custom-response-code

Ingress

-   MSE-exclusive
    
-   Required gateway version: V1.2.25
    

Specifies the response code when concurrency control is triggered on a route defined by an Ingress. The default response code is 429.

**Note**

This annotation is mutually exclusive with the mse.ingress.kubernetes.io/concurrency-limit-fallback-redirect-url annotation. You must specify one of the two annotations.

mse.ingress.kubernetes.io/concurrency-limit-fallback-custom-response-body-type

Ingress

-   MSE-exclusive
    
-   Required gateway version: V1.2.25
    

Specifies the format of the response body when the route defined by an Ingress triggers concurrency control. Default value: text.

-   If this parameter is set to text, the Content-Type value in the response is text/plain; charset=UTF-8.
    
-   If this parameter is set to JSON, the Content-Type value in the response is application/json; charset=UTF-8.
    

mse.ingress.kubernetes.io/concurrency-limit-fallback-custom-response-body

Ingress

-   MSE-exclusive
    
-   Required gateway version: V1.2.25
    

Specifies the response body when the route defined by an Ingress triggers concurrency control. Default value: sentinel rate limited.

mse.ingress.kubernetes.io/concurrency-limit-fallback-redirect-url

Ingress

-   MSE-exclusive
    
-   Required gateway version: V1.2.25
    

Specifies the redirect URL when the route defined by an Ingress triggers concurrency control.

**Note**

This annotation is mutually exclusive with the mse.ingress.kubernetes.io/concurrency-limit-fallback-custom-response-code annotation. You must specify one of the two annotations.

#### **Backend protocol**

**Annotation**

**Scope**

**Support status**

**Description**

nginx.ingress.kubernetes.io/backend-protocol

Service

Partially compatible. AJP and FCGI are not supported.

Specifies the protocol that is used by backend services. Default value: HTTP. Valid values:

-   HTTP
    
-   HTTP2
    
-   HTTPS
    
-   gRPC
    
-   gRPCS
    

#### **Load balancing**

**Annotation**

**Scope**

**Support status**

**Description**

nginx.ingress.kubernetes.io/load-balance

Service

Partially compatible. The `Exponentially Weighted Moving Average (EWMA)` algorithm is not supported. If you configure the EWMA algorithm as the load balancing algorithm, the algorithm will be rolled back to the `round-robin` load balancing algorithm.

Specifies the common load balancing algorithm used by backend services. The default value is `round_robin`. Valid values:

-   `round_robin`: the round-robin load balancing algorithm.
    
-   `least_conn`: the least connection-based load balancing algorithm.
    
-   `random`: the randomized load balancing algorithm.
    

nginx.ingress.kubernetes.io/upstream-hash-by

Service

Partially compatible. The combination of NGINX variables and constants is not supported.

Specifies the consistent hashing load balancing algorithm. MSE Ingress gateways support the following types of consistent hashing:

-   Consistent hashing based on NGINX variables:
    
    -   `$request_uri`: the request path, which is used as the hash key. Path parameters are included.
        
    -   `$host`: the request host, which is used as the hash key.
        
    -   `$remote_addr`: the client IP address, which is used as the hash key.
        
-   Consistent hashing based on request headers. You need to configure only `$http_headerName`.
    
-   Consistent hashing based on request path parameters. You need to configure only `$arg_varName`.
    

#### **Service prefetching (graceful start)**

**Annotation**

**Scope**

**Support status**

**Description**

mse.ingress.kubernetes.io/warmup

Service

MSE-exclusive

Specifies the period of time in which services are prefetched. Unit: seconds. By default, the service prefetching feature is disabled.

**Important**

Service prefetching depends on the selected load balancing algorithm. Only the load balancing algorithms based on round robin and least connections are supported.

#### **Cookie affinity**

**Annotation**

**Scope**

**Support status**

**Description**

nginx.ingress.kubernetes.io/affinity

Service

Compatible

Specifies the affinity type. The default and only valid value is `cookie`.

nginx.ingress.kubernetes.io/affinity-mode

Service

Partially compatible. The `persistent` mode is not supported.

Specifies the affinity mode. The default and only valid value is `balanced`.

nginx.ingress.kubernetes.io/session-cookie-name

Service

Compatible

Specifies the name of the cookie that is used as the hash key.

nginx.ingress.kubernetes.io/session-cookie-path

Service

Compatible

Specifies the path of the cookie that is generated when the specified cookie does not exist. Default value: `/`.

nginx.ingress.kubernetes.io/session-cookie-max-age

Service

Compatible

Specifies the expiration time of the cookie that is generated when the specified cookie does not exist. Unit: seconds. By default, this annotation is specified at the session level.

nginx.ingress.kubernetes.io/session-cookie-expires

Service

Compatible

Specifies the expiration time of the cookie that is generated when the specified cookie does not exist. Unit: seconds. By default, this annotation is specified at the session level.

#### **IP address-based access control**

**Annotation**

**Scope**

**Support status**

**Description**

nginx.ingress.kubernetes.io/whitelist-source-range

Ingress

Compatible

Specifies the IP address whitelist of a specific route. IP addresses and CIDR blocks are supported. Separate IP addresses or CIDR blocks with commas (,).

nginx.ingress.kubernetes.io/denylist-source-range

Ingress

-   Compatible
    
-   Required gateway version: V1.2.31
    

Specifies the IP address blacklist of a specific route. IP addresses and CIDR blocks are supported. Separate IP addresses or CIDR blocks with commas (,).

**Note**

This annotation takes precedence over the MSE-exclusive annotation mse.ingress.kubernetes.io/blacklist-source-range.

mse.ingress.kubernetes.io/blacklist-source-range

Ingress

MSE-exclusive

Specifies the IP address blacklist of a specific route. IP addresses and CIDR blocks are supported. Separate IP addresses or CIDR blocks with commas (,).

mse.ingress.kubernetes.io/domain-whitelist-source-range

Ingress

MSE-exclusive

Specifies the IP address whitelist of a specific domain name. IP address whitelists at the route level take precedence over IP address whitelists at the domain name level. IP addresses and CIDR blocks are supported. Separate IP addresses or CIDR blocks with commas (,).

mse.ingress.kubernetes.io/domain-blacklist-source-range

Ingress

MSE-exclusive

Specifies the IP address blacklist of a specific domain name. IP address blacklists at the route level take precedence over IP address blacklists at the domain name level. IP addresses and CIDR blocks are supported. Separate IP addresses or CIDR blocks with commas (,).

#### **Configuration of a connection pool between a gateway and a backend service**

**Annotation**

**Scope**

**Support status**

**Description**

mse.ingress.kubernetes.io/connection-policy-tcp-max-connection

Service

MSE-exclusive

Specifies the maximum number of connections that can be established between a gateway and the backend service.

mse.ingress.kubernetes.io/connection-policy-tcp-max-connection-per-endpoint

Service

MSE-exclusive

Specifies the maximum number of connections that can be established between a gateway and a single node of the backend service.

mse.ingress.kubernetes.io/connection-policy-http-max-request-per-connection

Service

MSE-exclusive

Specifies the maximum number of requests on a single connection between a gateway and the backend service.

### Security protection

#### **Encrypted communications between clients and gateways**

**Annotation**

**Scope**

**Support status**

**Description**

mse.ingress.kubernetes.io/tls-min-protocol-version

Domain name

MSE-exclusive

Specifies the minimum version of TLS. Default value: TLSv1.0. Valid values:

-   TLSv1.0
    
-   TLSv1.1
    
-   TLSv1.2
    
-   TLSv1.3
    

mse.ingress.kubernetes.io/tls-max-protocol-version

Domain name

MSE-exclusive

Specifies the maximum version of TLS. Default value: TLSv1.3. Valid values:

-   TLSv1.0
    
-   TLSv1.1
    
-   TLSv1.2
    
-   TLSv1.3
    

nginx.ingress.kubernetes.io/ssl-cipher

Domain name

Compatible

Specifies the TLS cipher suites. You can specify multiple TLS cipher suites, which are separated by commas (,). This parameter takes effect only if a TLS version from v1.0 to v1.2 is used during a TLS handshake.

Default cipher suites:

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
    

mse.ingress.kubernetes.io/auth-tls-secret

Domain name

Partially compatible. The format must be (Name of the secret to which the domain name certificate belongs)`-cacert`.

Specifies the CA certificate that a gateway uses to verify the certificate provided by a client during a mutual TLS (mTLS) handshake. This annotation is suitable for scenarios in which a gateway needs to verify the identity of a client.

#### **Encrypted communications between gateways and backend services**

**Annotation**

**Scope**

**Support status**

**Description**

nginx.ingress.kubernetes.io/proxy-ssl-secret

Service

Compatible

Specifies the client certificate that is used by a gateway. The client certificate is used for a backend service to authenticate the gateway.

nginx.ingress.kubernetes.io/proxy-ssl-name

Service

Compatible

Specifies the Server Name Indication (SNI) that is used during the TLS handshake.

nginx.ingress.kubernetes.io/proxy-ssl-server-name

Service

Compatible

Specifies whether to enable the SNI that is used during the TLS handshake.

#### Authentication

**Basic**

**Annotation**

**Scope**

**Support status**

**Description**

nginx.ingress.kubernetes.io/auth-type

Ingress

Partially compatible. Only the basic authentication type is supported.

Specifies the authentication type.

nginx.ingress.kubernetes.io/auth-secret

Ingress

Compatible

Specifies the name of a secret. The format must be `<namespace>/<name>`. The secret name includes the username and password that are granted access to the route defined in an Ingress rule.

nginx.ingress.kubernetes.io/auth-secret-type

Ingress

Compatible

Specifies the format of the secret content. Valid values:

-   `auth-file`: The key of data is auth, and the value of data is the username and password. The information of each account occupies a separate line.
    
-   `auth-map`: The key of data is the username and the value of data is the password.
    

nginx.ingress.kubernetes.io/auth-realm

Ingress

Compatible

Specifies the authentication realm. The username and password are shared in an authentication realm.

For more information about NGINX Ingress annotations, see [Annotations](https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations/#annotations).

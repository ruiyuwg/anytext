When multiple replicas of a service run behind a load balancer, per-instance rate limits cannot enforce a total request cap across the service. Global rate limiting solves this by using a centralized service to coordinate request counts across all Envoy sidecars in the mesh.

Service Mesh (ASM) V1.18.0.131 and later provides the `ASMGlobalRateLimiter` custom resource (CR) to configure global rate limiting for inbound traffic on services with injected sidecar proxies. This CR provides a stable, declarative API that abstracts away low-level Envoy filter configuration.

This topic covers two scenarios:

-   **Port-level rate limiting**: Limit all requests to a specific service port.
    
-   **Path-level rate limiting**: Limit requests to a specific URL path on a service port.
    

**Note**

For per-instance rate limits, see [Configure local rate limiting in Traffic Management Center](/help/en/asm/sidecar/configure-local-throttling-in-the-traffic-manager).

## Global vs. local rate limiting

**Approach**

**How it works**

**Best for**

**Global rate limiting**

A centralized gRPC service (backed by Redis) tracks request counts across all instances.

Enforcing a hard cap across the entire service, regardless of replica count.

**Local rate limiting**

Each Envoy sidecar enforces limits independently.

Protecting individual instances from overload. No external dependencies.

## How it works

Global rate limiting relies on three components:

1.  **Redis** -- Stores request counters shared across all Envoy sidecars.
    
2.  **Rate limit service** -- A gRPC service that Envoy sidecars query before forwarding requests. It checks counters in Redis and returns allow or deny decisions.
    
3.  **ASMGlobalRateLimiter CR** -- Declarative configuration applied to the ASM control plane. ASM translates it into Envoy filter configurations and generates the rate limit service config in the CR's `status` field.
    

```
Client request --> Envoy sidecar --> Rate limit service (gRPC) --> Redis
                       |
              Allow or deny (HTTP 429)
```

## Prerequisites

-   An ACK managed cluster added to your ASM instance (V1.18.0.131 or later). For more information, see [Add a cluster to an ASM instance](/help/en/asm/sidecar/add-a-cluster-to-an-asm-instance-1#task-2372122).
    
-   Automatic sidecar proxy injection enabled for the `default` namespace. For more information, see the "Enable automatic sidecar proxy injection" section of [Manage global namespaces](/help/en/asm/sidecar/manage-global-namespaces#section-30o-vil-3n7).
    
-   An ASM ingress gateway named `ingressgateway` with port 80 enabled. For more information, see [Create an ingress gateway](/help/en/asm/sidecar/create-an-ingress-gateway).
    
-   The sample applications `sleep` and `httpbin` deployed. For more information, see [Deploy the HTTPBin application](/help/en/asm/sidecar/deploy-the-httpbin-application#f823be907eui1) and [Deploy the sleep service](/help/en/asm/sidecar/deploy-the-httpbin-application#d17db0f0d957w).
    

## Deploy the rate limit service

Deploy Redis and the rate limit service to your ACK cluster before configuring rate limiting rules.

1.  Create a file named `ratelimit-svc.yaml` with the following content:
    
    **ratelimit-svc.yaml**
    
    ```
    apiVersion: v1
       kind: ServiceAccount
       metadata:
         name: redis
       ---
       apiVersion: v1
       kind: Service
       metadata:
         name: redis
         labels:
           app: redis
       spec:
         ports:
         - name: redis
           port: 6379
         selector:
           app: redis
       ---
       apiVersion: apps/v1
       kind: Deployment
       metadata:
         name: redis
       spec:
         replicas: 1
         selector:
           matchLabels:
             app: redis
         template:
          metadata:
             labels:
               app: redis
               sidecar.istio.io/inject: "false"
          spec:
             containers:
             - image: redis:alpine
               imagePullPolicy: Always
               name: redis
               ports:
               - name: redis
                 containerPort: 6379
             restartPolicy: Always
             serviceAccountName: redis
       ---
       apiVersion: v1
       kind: ConfigMap
       metadata:
         name: ratelimit-config
       data:
         config.yaml: |
           {}
       ---
       apiVersion: v1
       kind: Service
       metadata:
         name: ratelimit
         labels:
           app: ratelimit
       spec:
         ports:
         - name: http-port
           port: 8080
           targetPort: 8080
           protocol: TCP
         - name: grpc-port
           port: 8081
           targetPort: 8081
           protocol: TCP
         - name: http-debug
           port: 6070
           targetPort: 6070
           protocol: TCP
         selector:
           app: ratelimit
       ---
       apiVersion: apps/v1
       kind: Deployment
       metadata:
         name: ratelimit
       spec:
         replicas: 1
         selector:
           matchLabels:
             app: ratelimit
         strategy:
           type: Recreate
         template:
           metadata:
             labels:
               app: ratelimit
               sidecar.istio.io/inject: "false"
           spec:
             containers:
               # Latest image from https://hub.docker.com/r/envoyproxy/ratelimit/tags
             - image: envoyproxy/ratelimit:e059638d
               imagePullPolicy: Always
               name: ratelimit
               command: ["/bin/ratelimit"]
               env:
               - name: LOG_LEVEL
                 value: debug
               - name: REDIS_SOCKET_TYPE
                 value: tcp
               - name: REDIS_URL
                 value: redis:6379
               - name: USE_STATSD
                 value: "false"
               - name: RUNTIME_ROOT
                 value: /data
               - name: RUNTIME_SUBDIRECTORY
                 value: ratelimit
               - name: RUNTIME_WATCH_ROOT
                 value: "false"
               - name: RUNTIME_IGNOREDOTFILES
                 value: "true"
               ports:
               - containerPort: 8080
               - containerPort: 8081
               - containerPort: 6070
               volumeMounts:
               - name: config-volume
                 # $RUNTIME_ROOT/$RUNTIME_SUBDIRECTORY/$RUNTIME_APPDIRECTORY/config.yaml
                 mountPath: /data/ratelimit/config
             volumes:
             - name: config-volume
               configMap:
                 name: ratelimit-config
    ```
    
2.  Run the following command in the ACK cluster to deploy the services:
    
    ```
    kubectl apply -f ratelimit-svc.yaml
    ```
    

## Scenario 1: Rate limit all requests on a service port

This scenario limits all requests to port 8000 of the HTTPBin service to 1 request per minute.

The workflow has three steps: create the ASMGlobalRateLimiter CR on the ASM instance, sync the generated config to the rate limit service in the ACK cluster, then verify.

### Step 1: Create the ASMGlobalRateLimiter CR

1.  Create a file named `global-ratelimit-svc.yaml`:
    
    **global-ratelimit-svc.yaml**
    
    ```
    apiVersion: istio.alibabacloud.com/v1beta1
       kind: ASMGlobalRateLimiter
       metadata:
         name: global-svc-test
         namespace: default
       spec:
         workloadSelector:
           labels:
             app: httpbin
         rateLimitService:
           host: ratelimit.default.svc.cluster.local
           port: 8081
           timeout:
             seconds: 5
         isGateway: false
         configs:
         - name: httpbin
           limit:
             unit: MINUTE
             quota: 1
           match:
             vhost:
               name: '*'
               port: 8000
    ```
    
    The following table explains the key fields. For a full field reference, see [ASMGlobalRateLimiter field descriptions](/help/en/asm/sidecar/asmglobalratelimiter-crd-description).
    
    **Field**
    
    **Description**
    
    `workloadSelector`
    
    Selects the target workload. Set `app: httpbin` to apply rate limiting to the HTTPBin service.
    
    `isGateway`
    
    Set to `false` because the rule targets a sidecar workload, not an ingress gateway.
    
    `rateLimitService`
    
    Connection settings for the rate limit service: hostname, gRPC port (8081), and a 5-second timeout.
    
    `limit`
    
    Rate limiting threshold. `unit: MINUTE` and `quota: 1` means 1 request per minute on the matched route.
    
    `vhost`
    
    Matches the virtual host. `name: '*'` with `port: 8000` applies the rule to all requests on HTTPBin port 8000.
    
2.  Run the following command in the ASM instance to apply the CR:
    
    ```
    kubectl apply -f global-ratelimit-svc.yaml
    ```
    

### Step 2: Sync the rate limit config to the data plane

After ASM processes the CR, it generates rate limit service configuration in the `status.config.yaml` field. You must copy this config into the rate limit service's ConfigMap in the ACK cluster. This manual sync is required because the ASM control plane and ACK data plane run in separate clusters.

1.  Retrieve the generated config from the ASM instance:
    
    ```
    kubectl get asmglobalratelimiter global-svc-test -o yaml
    ```
    
    In the output, locate the `status` section:
    
    **Expected output**
    
    ```
    status:
         config.yaml: |
           descriptors:
           - key: generic_key
             rate_limit:
               requests_per_unit: 1
               unit: MINUTE
             value: RateLimit[global-svc-test.default]-Id[3833670472]
           domain: ratelimit.default.svc.cluster.local
         message: ok
         status: successful
    ```
    
2.  Create a `ratelimit-config.yaml` file. Copy the `config.yaml` content from the `status` section into the `data.config.yaml` field of the ConfigMap exactly as shown:
    
    **Important**
    
    Copy the `config.yaml` value from the `status` section without modification. Any changes cause the rate limit service to reject the configuration.
    
    **ratelimit-config.yaml**
    
    ```
    apiVersion: v1
       kind: ConfigMap
       metadata:
         name: ratelimit-config
       data:
         config.yaml: |
           descriptors:
           - key: header_match
             rate_limit:
               requests_per_unit: 1
               unit: MINUTE
             value: RateLimit[global-svc-test.default]-Id[1492204717]
           domain: ratelimit.default.svc.cluster.local
    ```
    
3.  Apply the ConfigMap to the ACK cluster:
    
    ```
    kubectl apply -f ratelimit-config.yaml
    ```
    

### Verify

Send two requests to HTTPBin port 8000 from the sleep pod:

```
kubectl exec -it deploy/sleep -- sh
```

Then run:

```
curl httpbin:8000/get -v
curl httpbin:8000/get -v
```

Expected output for the second request:

```
< HTTP/1.1 429
< x-envoy-ratelimited: true
< x-ratelimit-limit: 1, 1;w=60
< x-ratelimit-remaining: 0
< x-ratelimit-reset: 5
< date: Thu, 26 Oct 2023 04:23:54 GMT
< server: envoy
< content-length: 0
< x-envoy-upstream-service-time: 2
<
* Connection #0 to host httpbin left intact
```

The second request returns `429`, confirming that global rate limiting is active. Only one request is allowed to access the HTTPBin service within one minute. When you send a second request, throttling is triggered, which indicates that global rate limiting takes effect on inbound traffic of the service into which a sidecar proxy is injected.

## Scenario 2: Rate limit requests to a specific path

This scenario limits requests to the `/headers` path on HTTPBin port 8000 to 1 request per minute, while allowing unlimited access to other paths like `/get`.

The configuration differs depending on your ASM version.

### Step 1: Create the ASMGlobalRateLimiter CR

Choose the YAML that matches your ASM version:

**ASM earlier than V1.19.0**

```
apiVersion: istio.alibabacloud.com/v1beta1
kind: ASMGlobalRateLimiter
metadata:
  name: global-svc-test
  namespace: default
spec:
  workloadSelector:
    labels:
      app: httpbin
  rateLimitService:
    host: ratelimit.default.svc.cluster.local
    port: 8081
    timeout:
      seconds: 5
  isGateway: false
  configs:
  - name: httpbin
    limit:
      unit: MINUTE
      quota: 1
    match:
      vhost:
        name: '*'
        port: 8000
        route:
          header_match:
          - name: ":path"
            prefix_match: "/headers"
```

In versions earlier than V1.19.0, path matching is configured inside `match.vhost.route.header_match`. The `:path` pseudo-header matches request paths by prefix.

**ASM V1.19.0 or later (recommended)**

```
apiVersion: istio.alibabacloud.com/v1beta1
kind: ASMGlobalRateLimiter
metadata:
  name: global-svc-test
  namespace: default
spec:
  workloadSelector:
    labels:
      app: httpbin
  rateLimitService:
    host: ratelimit.default.svc.cluster.local
    port: 8081
    timeout:
      seconds: 5
  isGateway: false
  configs:
  - name: httpbin
    limit:
      unit: SECOND
      quota: 100000
    match:
      vhost:
        name: '*'
        port: 8000
    limit_overrides:
    - request_match:
        header_match:
        - name: ":path"
          prefix_match: "/headers"
      limit:
        unit: MINUTE
        quota: 1
```

In V1.19.0 and later, use the `limit_overrides` field for path-based matching. The base `limit` is set to a high value (100,000 requests/second) so that only requests matching the override are rate limited.

The following table explains the additional fields used in this scenario:

**Field**

**Description**

`limit`

The throttling parameters to take effect. `unit` indicates the unit of time for throttling detection. `quota` indicates the total number of requests allowed per unit time. If the ASM instance is V1.19.0 or later, `unit` is set to `SECOND` and `quota` is set to `100000`, meaning 100,000 requests are allowed per second on the matching route. This effectively means no throttling is set on the base rule. You can use the `limit_overrides` field to configure throttling for requests that meet specific criteria.

`limit_overrides`

(V1.19.0+) Overrides the base rate limiting threshold for requests matching specific criteria. Each override specifies its own `request_match` and `limit`.

`vhost`

The domain name and route on which throttling takes effect. For versions earlier than V1.19.0, you can configure header matching rules for requests in the `route` section. For V1.19.0 and later, configure header matching rules in the `limit_overrides` field.

`route.header_match`

(Pre-V1.19.0) Matches requests by HTTP header values within the `vhost` route. Use the `:path` pseudo-header for URL path matching.

### Step 2: Sync the rate limit config to the data plane

Follow the same process as Scenario 1:

1.  Retrieve the generated config from the ASM instance:
    
    ```
    kubectl get asmglobalratelimiter global-svc-test -o yaml
    ```
    
    **Expected status output (V1.19.0+)**
    
    ```
    status:
         config.yaml: |
           descriptors:
           - descriptors:
             - key: header_match
               rate_limit:
                 requests_per_unit: 1
                 unit: MINUTE
               value: RateLimit[global-svc-test.default]-Id[2613586978]
             key: generic_key
             rate_limit:
               requests_per_unit: 100000
               unit: SECOND
             value: RateLimit[global-svc-test.default]-Id[2613586978]
           domain: ratelimit.default.svc.cluster.local
         message: ok
         status: successful
    ```
    
2.  Copy the `config.yaml` from the `status` section into a ConfigMap and apply it to the ACK cluster:
    
    **ratelimit-config.yaml**
    
    ```
    apiVersion: v1
       kind: ConfigMap
       metadata:
         name: ratelimit-config
       data:
         config.yaml: |
           descriptors:
           - descriptors:
             - key: header_match
               rate_limit:
                 requests_per_unit: 1
                 unit: MINUTE
               value: RateLimit[global-svc-test.default]-Id[2613586978]
             key: generic_key
             rate_limit:
               requests_per_unit: 100000
               unit: SECOND
             value: RateLimit[global-svc-test.default]-Id[2613586978]
           domain: ratelimit.default.svc.cluster.local
    ```
    
    ```
    kubectl apply -f ratelimit-config.yaml
    ```
    

### Verify

1.  Send two requests to the `/headers` path from the sleep pod:
    
    ```
    kubectl exec -it deploy/sleep -- sh
    ```
    
    Then run:
    
    ```
    curl httpbin:8000/headers -v
    curl httpbin:8000/headers -v
    ```
    
    Expected output for the second request:
    
    ```
    < HTTP/1.1 429 Too Many Requests
       < x-envoy-ratelimited: true
       < x-ratelimit-limit: 1, 1;w=60
       < x-ratelimit-remaining: 0
       < x-ratelimit-reset: 5
       < date: Thu, 26 Oct 2023 04:23:54 GMT
       < server: envoy
       < content-length: 0
       < x-envoy-upstream-service-time: 2
       <
       * Connection #0 to host httpbin left intact
    ```
    
    The second request to `/headers` is rate limited. Only one request is allowed to access the `/headers` path of the HTTPBin service within one minute.
    
2.  Confirm that other paths are unaffected:
    
    ```
    curl httpbin:8000/get -v
    ```
    
    **Expected output**
    
    ```
    *   Trying 192.168.243.21:8000...
       * Connected to httpbin (192.168.243.21) port 8000 (#0)
       > GET /get HTTP/1.1
       > Host: httpbin:8000
       > User-Agent: curl/8.1.2
       > Accept: */*
       >
       < HTTP/1.1 200 OK
       < server: envoy
       < date: Thu, 11 Jan 2024 06:25:09 GMT
       < content-type: application/json
       < content-length: 431
       < access-control-allow-origin: *
       < access-control-allow-credentials: true
       < x-envoy-upstream-service-time: 7
       <
       {
         "args": {},
         "headers": {
           "Accept": "*/*",
           "Host": "httpbin:8000",
           "User-Agent": "curl/8.1.2",
           "X-Envoy-Attempt-Count": "1",
           "X-Forwarded-Client-Cert": "By=spiffe://cluster.local/ns/default/sa/httpbin;Hash=be10819991ba1a354a89e68b3bed1553c12a4fba8b65fbe0f16299d552680b29;Subject=\"\";URI=spiffe://cluster.local/ns/default/sa/sleep"
         },
         "origin": "127.0.0.6",
         "url": "http://httpbin:8000/get"
       }
       * Connection #0 to host httpbin left intact
    ```
    
    Requests to `/get` succeed because only the `/headers` path is subject to rate limiting.
    

## Monitor global rate limiting metrics

Envoy sidecars expose metrics for global rate limiting:

**Metric**

**Type**

**Description**

`envoy_cluster_ratelimit_ok`

Counter

The total number of requests allowed by global throttling.

`envoy_cluster_ratelimit_over_limit`

Counter

The total number of requests that are determined to trigger throttling by global throttling.

`envoy_cluster_ratelimit_error`

Counter

The total number of requests that fail to call global throttling.

### Enable metric reporting

1.  Configure `proxyStatsMatcher` for the sidecar proxy. Select **Regular Expression Match** and set the value to `.*ratelimit.*`. For more information, see the "proxyStatsMatcher" section of [Configure sidecar proxies](/help/en/asm/sidecar/configure-sidecar-proxies#p-gqu-mve-8cp).
    
2.  Redeploy the HTTPBin service to pick up the new proxy configuration. For more information, see the "(Optional) Redeploy workloads" section of [Configure sidecar proxies](/help/en/asm/sidecar/configure-sidecar-proxies#section-u4i-vby-2r3).
    
3.  Configure global throttling and perform request tests. For more information, see Scenario 1 or [Configure local rate limiting in Traffic Management Center](/help/en/asm/sidecar/configure-local-throttling-in-the-traffic-manager#p-qag-uoj-gtn).
    
4.  Run the following command to view the global throttling metrics of the HTTPBin service:
    
    ```
    kubectl exec -it deploy/httpbin -c istio-proxy -- curl localhost:15090/stats/prometheus|grep envoy_cluster_ratelimit
    ```
    
    Example output:
    
    ```
    # TYPE envoy_cluster_ratelimit_ok counter
    envoy_cluster_ratelimit_ok{cluster_name="inbound|80||"} 904
    # TYPE envoy_cluster_ratelimit_over_limit counter
    envoy_cluster_ratelimit_over_limit{cluster_name="inbound|80||"} 3223
    ```
    

### Set up Prometheus alerts

Use Managed Service for Prometheus to collect rate limiting metrics and trigger alerts when rate limiting occurs.

1.  Connect the ACK cluster to the **Alibaba Cloud ASM** component in Managed Service for Prometheus, or upgrade the component to the latest version. For more information, see [Manage components](/help/en/arms/prometheus-monitoring/access-component-management).
    
    **Note**
    
    If you already use a self-managed Prometheus instance to collect ASM metrics, skip this step. For more information, see [Monitor ASM instances by using a self-managed Prometheus instance](/help/en/asm/sidecar/monitor-asm-instances-by-using-a-self-managed-prometheus-instance).
    
2.  Create a custom alert rule with the following PromQL and message template. For detailed instructions, see [Create an alert rule with a custom PromQL statement](/help/en/arms/prometheus-monitoring/create-alert-rules-for-prometheus-instances#section-mrh-rco-p86). This rule fires when any service has at least one rate-limited request in a rolling one-minute window, grouped by namespace and service name.
    
    **Parameter**
    
    **Example value**
    
    **PromQL statement**
    
    `(sum by(namespace, service_istio_io_canonical_name) (increase(envoy_cluster_ratelimit_over_limit[1m]))) > 0`
    
    **Alert message**
    
    `Global rate limiting triggered. Namespace: {{$labels.namespace}}. Service: {{$labels.service_istio_io_canonical_name}}. Throttled requests in the last minute: {{ $value }}`
    

## What's next

-   **Ingress gateway rate limiting**: Apply global rate limiting at the mesh edge instead of at the sidecar level. See [Configure global rate limiting on an ingress gateway](/help/en/asm/sidecar/configure-global-throttling-for-the-ingress-gateway).
    
-   **Local rate limiting**: Combine with per-instance limits for defense in depth. See [Configure local rate limiting in Traffic Management Center](/help/en/asm/sidecar/configure-local-throttling-in-the-traffic-manager).
    
-   **Field reference**: Review all available fields for fine-grained control. See [ASMGlobalRateLimiter field descriptions](/help/en/asm/sidecar/asmglobalratelimiter-crd-description).
    

## References

-   [ASMGlobalRateLimiter field descriptions](/help/en/asm/sidecar/asmglobalratelimiter-crd-description)
    
-   [Configure local rate limiting in Traffic Management Center](/help/en/asm/sidecar/configure-local-throttling-in-the-traffic-manager)
    
-   [Configure global rate limiting on an ingress gateway](/help/en/asm/sidecar/configure-global-throttling-for-the-ingress-gateway)

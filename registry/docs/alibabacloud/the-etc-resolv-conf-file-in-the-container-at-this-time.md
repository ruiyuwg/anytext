This topic describes the DNS resolution workflows, client-side behaviors, and server-side caching policies in Alibaba Cloud Container Service for Kubernetes (ACK) clusters.

## DNS resolution architectures

DNS resolution behavior in ACK depends on where the application is deployed and whether the **NodeLocal DNSCache** add-on is active.

**Note**

For information about terms such as `timeout` and `attempts` in the figures, see the [Resolution policies](#title-unl-mn2-8rh) and [Caching policies](#title-19d-rej-2sq) sections.

### **Scenario 1: Host-based applications (non-containerized)**

Applications running directly on Elastic Compute Service (ECS) instances use the host's `/etc/resolv.conf`, which typically points to the **VPC DNS servers**.

![DNS解析链路1.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5993720561/p411962.png)

### **Scenario 2: Standard containerized pods (dnsPolicy:** `**ClusterFirst**`**)**

By default, pods use the `ClusterFirst` policy. All DNS queries are sent to the **CoreDNS service** within the cluster.

![DNS解析链路2.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5993720561/p411963.png)

### Scenario 3: **Containerized p**ods with NodeLocal DNSCache enabled

When NodeLocal DNSCache is injected, pods send queries to a local caching agent running on the same node. This reduces latency and mitigates conntrack table saturation.

![DNS解析链路3.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5993720561/p411964.png)

## Resolution policies

### Client side

The following table describes DNS resolution parameters in the /etc/resolv.conf file across different deployment environments based on the **glibc** resolver.

**Parameter**

**Description**

**Default value in glibc**

**ECS**

**Pod with DNSPolicy set to** `**ClusterFirst**`

**Pod with DNSPolicy set to** `**Default**`

**Pod that uses NodeLocal DNSCache**

**Pod with DNSPolicy set to Default and that uses the host network**

`nameserver`

The DNS server used to resolve domain names.

None

VPC DNS servers②

CoreDNS ClusterIP③

VPC DNS servers

-   NodeLocal DNSCache IP④
    
-   CoreDNS ClusterIP
    

VPC DNS servers

`search`

For requests involving a domain name that is not a fully qualified domain name (FQDN), the domain name is appended with the `search` suffix to form an FQDN before the request is sent.

None

None

`<ns>.svc.cluster.local svc.cluster.local cluster.local`

None

`<ns>.svc.cluster.local svc.cluster.local cluster.local`

None

`ndots:n`

If the number of dots in a domain name string is greater than the `ndots` value, the domain name is considered an FQDN and is resolved directly. Otherwise, the domain name is appended with the search suffix before the query.

1

1

5

1

3

1

`timeout:n`

The timeout period for a single DNS resolution request. Unit: seconds.

5

2

5

5

1

2

`attempts:n`①

The maximum number of retries if an DNS resolution fails.

2

3

2

2

2

3

`rotate`

Queries DNS servers in a round-robin manner.

Disabled

Enabled

Disabled

Disabled

Disabled

Enabled

`single-request-reopen`

If this option is enabled and two requests are sent using the same socket, the resolver closes the socket after sending the first request and opens a new socket before sending the second request.

Disabled

Enabled

Disabled

Disabled

Disabled

Enabled

①The `attempts` parameter takes effect only in specific scenarios, such as when the server returns SERVFAIL, NOTIMP, or REFUSED, or when the server returns NOERROR but without a resolution result. For more information, see [Attempts parameter request details](https://github.com/lattera/glibc/blob/master/resolv/res_send.c#L1340).

②VPC DNS servers are the default DNS servers configured on ECS instances. Their IP addresses are 100.100.2.136 and 100.100.2.138. They are responsible for resolving domain names in PrivateZone and authoritative domain names.

③The CoreDNS ClusterIP is the IP address of the `kube-dns` service provided by the default CoreDNS deployment in the `kube-system` namespace. It is responsible for resolving internal service domain names and forwarding resolution requests for PrivateZone and authoritative domain names.

④The NodeLocal DNSCache IP is 169.254.20.10. When the NodeLocal DNSCache add-on is deployed, it listens on this IP address on each node.

**Note**

See [resolv.conf](https://man7.org/linux/man-pages/man5/resolv.conf.5.html) for more configurations.

In some cases, the DNS policy on the client side may differ from the preceding configurations:

-   If you use Alpine as the container image, its built-in `musl` library replaces `glibc`, which causes significant differences in resolution behavior. For example:
    
    -   Alpine does not adhere to the single-request and single-request-reopen options in /etc/resolv.conf.
        
    -   Alpine 3.3 and earlier versions do not support the `search` parameter or search domains, which prevents service discovery from working.
        
    -   Concurrent requests to multiple DNS servers configured in /etc/resolv.conf cause NodeLocal DNSCache optimizations to become ineffective.
        
    -   Using the same socket to concurrently request A and AAAA records triggers **conntrack race conditions** on older kernel versions, leading to intermittent packet loss.
        
    
    **Note**
    
    For more information about resolution behavior, see [musl libc](https://wiki.musl-libc.org/functional-differences-from-glibc.html?spm=a2c4g.11186623.0.0.63e257ebTJd6Mg#Name_Resolver_.2F_DNS).
    
-   If your application is written in languages such as Go or Node.js, it may use a built-in DNS resolver. These internal resolvers often exhibit different resolution behaviors than the ACK system resolver.
    

### In-cluster DNS servers

By default, the /etc/resolv.conf file of CoreDNS uses the ECS configuration. However, CoreDNS uses the built-in `forward` plug-in to forward DNS requests.

NodeLocal DNSCache uses a built-in CoreDNS for DNS service forwarding. The configuration method is the same as for CoreDNS.

The following table describes the parameters that control the resolution policy of the `forward` plug-in. See [Forward](https://coredns.io/plugins/forward/) for details.

**Parameter**

**Description**

**CoreDNS default value**

**NodeLocal DNSCache default value**

`prefer_udp`

Preferably uses UDP to communicate with the upstream server.

Enabled

Disabled

`force_tcp`

Forcibly uses TCP to communicate with the upstream server.

Disabled

Enabled

`max_fails`

The number of consecutive failed health checks before an upstream server is considered unhealthy.

2

2

`expire`

The duration to keep the connection to the upstream open.

10s

10s

`policy`

The policy for selecting an upstream server.

`random`

`random`

`health_check`

The health check interval.

0.5s

0.5s

`max_concurrent`

The maximum number of concurrent connections to the upstream server.

None

None

`dial timeout`

The timeout for connecting to the upstream server.

30s. The value dynamically decreases based on the actual time consumed.

30s. The value dynamically decreases based on the actual time consumed.

`read timeout`

The timeout for waiting for data from the upstream server.

2s

2s

## Caching policies

### Client side

The caching policy on the client side varies depending on the container and application. The actual caching policy depends on your specific configuration.

### In-cluster DNS servers

**Parameter**

**Description**

**CoreDNS community default configuration**

**NodeLocal DNSCache ACK default configuration**

**CoreDNS ACK default configuration**

success Max TTL

The maximum time-to-live (TTL) for the cache of successful DNS resolution results.

3600s

30s

30s

success Min TTL

The minimum TTL for the cache of successful DNS resolution results.

5s

5s

5s

success Capacity

The number of successful DNS resolution results to cache.

9984

9984

9984

denial Max TTL

The maximum TTL for the cache of failed DNS resolution results.

1800s

5s

30s

denial Min TTL

The minimum TTL for the cache of failed DNS resolution results.

5s

5s

5s

denial Capacity

The number of failed DNS resolution results to cache.

9984

9984

9984

ServerError TTL

The TTL for resolution results when the upstream DNS server is abnormal.

5s

0s (The default is 5s for NodeLocal DNSCache Helm Chart versions earlier than 1.5.0)

0s (The default is 5s for CoreDNS versions earlier than 1.8.4.2)

serve\_stale

Allows the use of expired local cache when the upstream DNS server cannot be connected.

Disabled

Enabled (Disabled by default for NodeLocal DNSCache Helm Chart versions earlier than 1.5.0)

Enabled (Disabled by default for CoreDNS versions earlier than 1.12.1)

**Note**

The effective TTL is determined by the TTL of the DNS resolution result, the Max TTL, and the Min TTL. The logic is as follows:

-   If **Result TTL > Max TTL**, the effective TTL is the **Max TTL**.
    
-   If **Result TTL < Min TTL**, the effective TTL is the **Min TTL**.
    
-   If **Min TTL ≤ Result TTL ≤ Max TTL**, the effective TTL is the **Result TTL**.
    

## Optimization suggestions

This section describes the resolution paths and parameter configurations in a Kubernetes cluster. Modify the parameters by editing the Pod YAML, CoreDNS ConfigMap, or NodeLocal DNSCache ConfigMap. The following is an example.

### Enhancing fault tolerance

When you set `dnsPolicy:Default` for a client pod, the VPC DNS server settings on the ECS instance are copied to the /etc/resolv.conf file in the container.

```
apiVersion: v1
kind: Pod
metadata:
  name: example
  namespace: default
spec:
  containers:
  - image: registry.cn-hangzhou.aliyuncs.com/example-ns/example:v1
    name: example
  # The dnsPolicy value in the Pod YAML is Default.
  dnsPolicy: Default

# The /etc/resolv.conf file in the container at this time.
# cat /etc/resolv.conf
nameserver 100.100.2.136
nameserver 100.100.2.138
```

Compared to an ECS instance, the container's configuration is missing the `rotate single-request-reopen timeout:2 attempts:3` options. Occasional network jitter might cause DNS resolution to fail for your services. Add these parameters in the pod YAML as follows to improve fault tolerance:

```
apiVersion: v1
kind: Pod
metadata:
  name: example
  namespace: default
spec:
  containers:
  - image: registry.cn-hangzhou.aliyuncs.com/example-ns/example:v1
    name: example
  # The dnsPolicy value in the pod YAML is Default.
  dnsPolicy: Default
  # Add the following fault tolerance configuration.
  dnsConfig:
    options:
    - name: timeout
      value: "2"
    - name: attempts
      value: "3"
    - name: rotate
    - name: single-request-reopen

# After modification, redeploy the pod. The options parameter is added to /etc/resolv.conf in the container.
# cat /etc/resolv.conf
nameserver 100.100.2.136
nameserver 100.100.2.138
options rotate single-request-reopen timeout:2 attempts:3
```

### High availability with `**serve_stale**`

The `serve_stale` feature allows CoreDNS to serve expired cache entries if the upstream DNS servers are unreachable. This feature can improve the reliability of DNS resolution and prevent resolution failures caused by upstream DNS service jitter or occasional exceptions.

> This configuration is enabled by default in CoreDNS unmanaged edition v1.12.1 and later. For more information, see [RFC-8767](https://datatracker.ietf.org/doc/html/rfc8767 ).

**Configuration format**

`serve_stale [DURATION] [REFRESH_MODE]`

-   `DURATION`: The validity period for expired entries. The default value is `1h`. If a cached entry expires, reaches its validity period, and is still not updated, CoreDNS stops serving the entry.
    
-   `REFRESH_MODE`: The policy for serving expired entries:
    
    -   `verify`: Before sending an expired entry to the client, verify whether the upstream DNS service is active. This method might increase the resolution latency for the client, but it can provide a new entry immediately if an update is detected.
        
    -   `immediate`: Immediately send the expired entry to the client, then verify whether the upstream DNS service is active. This provides an immediate response, but the update time may lag behind the upstream DNS service update.
        

**Example**

> The following configuration is used by default in CoreDNS unmanaged edition v1.12.1.2 and later.

```
cache 30 { 
  ... 
  serve_stale 30s verify
}
```

**Important**

Default configuration for CoreDNS unmanaged edition v1.12.1.1-4035d7a99-aliyun:

```
cache 30 { 
  ... 
  serve_stale 1h immediate
}
```

When you use the preceding default configuration, in some extreme scenarios (for example, when a client performs DNS resolution during the iterative update of a headless service), DNS might return an expired entry. If this situation occurs frequently, change the policy to `verify` as shown in the [Example](#56e9f1d3f49oh).

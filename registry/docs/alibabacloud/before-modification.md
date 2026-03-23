DNS is a critical service in Kubernetes clusters. Under certain conditions—such as improper client configuration or large cluster scale—DNS may experience resolution timeouts and failures. This guide provides best practices to help you avoid these issues.

**Important**

This topic does not apply to Container Service for Kubernetes (ACK) clusters with managed edition of CoreDNS installed or have Auto Mode enabled. These clusters automatically scale based on load without manual adjustment.

## Contents

DNS best practices cover both client-side and server-side optimizations:

-   Client-side: You can reduce resolution latency by optimizing DNS requests, and minimize resolution failures using appropriate container images, node operating systems, and NodeLocal DNSCache.
    
    -   [Optimize DNS resolution requests](#section-zzx-vw7-tu5)
        
    -   [Notes about DNS configurations in containers](#section-v08-zav-kf6)
        
    -   [Avoid intermittent DNS resolution timeouts caused by IPVS bugs](#section-h6t-66g-7fo)
        
    -   [Improve stability with NodeLocal DNSCache](#section-emg-1v6-a91)
        
    -   [Maintain CoreDNS versions](#section-jvf-pe7-hce)
        
-   Server-side: You can identify DNS exceptions and quickly locate their root causes by monitoring CoreDNS's running status. CoreDNS high availability and queries per second (QPS) throughput can be improved by adjusting deployment configuration.
    
    -   [Monitor the running status of CoreDNS](#section-4mf-aem-6z9)
        
        -   [Metrics and dashboards](#c71f2390240ka)
            
        -   [Log analysis](#567a46a0226bb)
            
        -   [Kubernetes event delivery](#p-yv9-fo4-8tg)
            
    -   [Ensure the high availability of CoreDNS](#section-dua-rjx-ia7)
        
        -   [Assess CoreDNS pressure](#e22092cdcfxs6)
            
        -   [Scale CoreDNS pods](#767c9063b02vn)
            
        -   [Optimize CoreDNS pod specifications](#e490dd69ceuli)
            
        -   [Schedule CoreDNS pods](#9629b906cddcx)
            
    -   [Optimize CoreDNS configurations](#section-7at-thy-66d)
        
        -   [Disable the affinity configuration of the kube-dns service](#17b0bfd02478a)
            
        -   [Disable the autopath plugin](#6235d0e022ucj)
            
        -   [Configure graceful shutdown](#76b5c570221es)
            
        -   [Optimize upstream protocol (prefer\_udp)](#29c283410edkw)
            
        -   [Configure the ready plugin for readiness probe](#p-66k-kor-itx)
            

For more details about CoreDNS, see the [official CoreDNS documentation](https://coredns.io/).

## Optimize DNS resolution requests

DNS resolution is one of the most frequent network operations in a Kubernetes cluster. Many resolution requests can be optimized or avoided to reduce latency and load on the DNS infrastructure:

-   (Recommended) Use a connection pool: When a containerized application frequently requests the same service, use a connection pool to cache active connections to upstream services in memory. This eliminates the overhead of DNS resolution and TCP handshakes for each request.
    
-   Use asynchronous or the long-polling mode to retrieve IPs associated with domain names.
    
-   Use DNS caching:
    
    -   (Recommended) If your application cannot be refactored to use connection pools, consider caching DNS resolution results on the application side. For instructions, see [Improve stability with NodeLocal DNSCache](#section-emg-1v6-a91).
        
    -   If you cannot use NodeLocal DNSCache, use the built-in Name Service Cache Daemon (NSCD) within your container.
        
-   Optimize the resolv.conf file: The ndots and search parameters determine resolution efficiency. For details, see [Configure DNS policies and resolve domain names](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-dns-resolution#task-1985778).
    
-   Optimize domain configurations: Configure domain names following these principles to minimize resolution attempts and reduce latency:
    
    -   When a pod accesses a Service in the same namespace, use `<service-name>`.
        
    -   When a pod accesses a Service in a different namespace, use `<service-name>.<namespace-name>`.
        
    -   When a pod accesses a domain outside the cluster, use a Fully Qualified Domain Name (FQDN) by appending a period (.). This forces the resolver to treat the name as absolute, skipping invalid searches through internal cluster domains. For example, use www.aliyun.com. instead of www.aliyun.com.
        
        -   In clusters running Kubernetes 1.33 or later, set the `search` domain to a single period (.) (see [Issue 125883](https://github.com/kubernetes/kubernetes/issues/125883)). This effectively turns all DNS requests into FQDN requests, preventing unnecessary search domain iterations.
            
            Example `dnsConfig` snippet:
            
            ```
            dnsPolicy: None
            dnsConfig:
              nameservers: ["192.168.0.10"]  ## Replace with the actual ClusterIP of your CoreDNS service.
              searches:
              - .
              - default.svc.cluster.local  ## Replace 'default' with your actual namespace.
              - svc.cluster.local
              - cluster.local
            ```
            
            Resulting `/etc/resolv.conf`:
            
            ```
            search . default.svc.cluster.local svc.cluster.local cluster.local
            nameserver 192.168.0.10
            ```
            
            With `.` as the first search domain, the system immediately recognizes requests as FQDN, prioritizing self-resolution and eliminating invalid recursive searches.
            
            **Important**
            
            You must set `dnsPolicy` to `None` for the preceding configuration to take effect.
            
            **Complete workload example**
            
            ```
            apiVersion: apps/v1
            kind: Deployment
            metadata:
              labels:
                app: nginx
              name: nginx
              namespace: default
            spec:
              progressDeadlineSeconds: 600
              replicas: 3
              revisionHistoryLimit: 10
              selector:
                matchLabels:
                  app: nginx
              strategy:
                rollingUpdate:
                  maxSurge: 25%
                  maxUnavailable: 25%
                type: RollingUpdate
              template:
                metadata:
                  labels:
                    app: nginx
                spec:
                  containers:
                  - image: registry.openanolis.cn/openanolis/nginx:1.14.1-8.6
                    imagePullPolicy: Always
                    name: nginx
                    resources: {}
                    terminationMessagePath: /dev/termination-log
                    terminationMessagePolicy: File
                  dnsPolicy: None
                  dnsConfig:
                    nameservers: ["192.168.0.10"]  ## Replace with the actual ClusterIP of your CoreDNS service.
                    searches:
                    - .
                    - default.svc.cluster.local
                    - svc.cluster.local
                    - cluster.local
                  hostname: nginx
                  restartPolicy: Always
                  schedulerName: default-scheduler
                  securityContext: {}
                  subdomain: subdomain
                  terminationGracePeriodSeconds: 30
            ```
            

## Notes about DNS configurations in containers

-   Different DNS resolvers may exhibit subtle behavioral variations due to their underlying implementations. You might encounter cases where `dig <domain>` succeeds while `ping <domain>` fails.
    
-   Avoid Alpine images: We strongly recommend using base images such as Debian or CentOS instead of Alpine Linux. The `musl libc` library used in Alpine has several implementation differences compared to the standard `glibc`, leading to issues including but not limited to:
    
    -   **TCP fallback:** Alpine v3.18 and earlier do not support truncated (TC) bit fallback to TCP.
        
    -   **Search domains:** Alpine v3.3 and earlier do not support the search parameter, which breaks service discovery within the cluster.
        
    -   **Optimization conflicts:** Alpine concurrently requests all DNS servers listed in `/etc/resolv.conf`, which may bypass and invalidate NodeLocal DNSCache optimizations.
        
    -   **Conntrack race conditions****:** Concurrent A and AAAA record requests using the same socket can trigger source port conflicts in outdated Linux kernels, resulting in packet loss and resolution timeouts.
        
    
    For more issues, see the [musl libc documentation](https://wiki.musl-libc.org/functional-differences-from-glibc.html#Name_Resolver_.2F_DNS).
    
-   If you use a Go application, be aware of the differences between the `CGO` and `Pure Go` DNS resolvers.
    

## Mitigate intermittent DNS timeouts in IPVS mode

When an ACK cluster uses IPVS as the `kube-proxy` load-balancing mode, you may experience intermittent DNS resolution timeouts during CoreDNS pod scaling or restarts. This is caused by a known Linux kernel defect. See [IPVS commit](https://github.com/torvalds/linux/commit/35dfb013149f74c2be1ff9c78f14e6a3cd1539d1).

To mitigate the impact of this IPVS flaw, use one of the following methods:

-   [Use NodeLocal DNSCache](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-nodelocal-dnscache#task-2008363).
    
-   [Modify the IPVS UDP session persistence timeout in kube-proxy](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-container-networks#section-vkv-808-6wc).
    

## Improve stability with NodeLocal DNSCache

CoreDNS may occasionally encounter the following issues:

-   Rare packet loss from concurrent A and AAAA queries, leading to DNS failures.
    
-   Full node `conntrack` table, causing packet loss and DNS failures.
    

To improve DNS stability and performance, install NodeLocal DNSCache. This add-on runs a DNS cache on each cluster node to handle DNS traffic locally.

**Important**

After installing NodeLocal DNSCache, you must enable injection for your workloads. Run the following command to label a namespace. Any new pods created in this namespace will automatically use the DNS cache configuration.

```
kubectl label namespace default node-local-dns-injection=enabled
```

For detailed instructions and other injection methods, see [Use NodeLocal DNSCache](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-nodelocal-dnscache#task-2008363).

## Maintain CoreDNS versions

CoreDNS maintains strong backward compatibility with Kubernetes. However, it is critical to keep CoreDNS updated to a stable version. Manage, upgrade, and configure CoreDNS via the **Add-ons** page.

If the ACK console shows an available upgrade for CoreDNS, schedule the upgrade as soon as possible during off-peak hours.

-   For upgrade instructions, see [Automatic upgrade for unmanaged CoreDNS](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-ack-to-automatically-update-coredns#task-2093043).
    
-   For CoreDNS release notes, see [CoreDNS](/help/en/ack/product-overview/coredns#concept-2071838).
    

**Risks in CoreDNS versions lower than 1.7.0**

-   **Logging crashes:** If connectivity to the API server is interrupted (for example, due to API server restarts, migrations, or network jitter), CoreDNS restarts because it fails to write error logs. See [Set klog's logtostderr flag](https://github.com/coredns/coredns/pull/2529).
    
-   **OOM issues:** CoreDNS consumes extra memory at startup. The default memory limit may trigger out-of-memory (OOM) issues in large-scale clusters. In severe cases, this may lead to restart loops. See [CoreDNS uses a lot of memory during initialization phase](https://github.com/coredns/coredns/issues/2511).
    
-   **Sync failures:** CoreDNS has several issues that may affect resolution of headless service domain names and external domain names. For details, see [plugin/kubernetes: handle tombstones in default processor](https://github.com/coredns/coredns/pull/3890) and [Data is not synced when CoreDNS reconnects to kubernetes api server after protracted disconnection](https://github.com/coredns/coredns/issues/3879).
    
-   If a cluster node becomes abnormal, the default toleration policy in some earlier CoreDNS versions may cause CoreDNS pods to be scheduled onto the abnormal node. These pods cannot be automatically evicted, leading to abnormal domain name resolution.
    

**Recommended minimum CoreDNS versions**

**Cluster version**

**Recommended minimum CoreDNS version**

Below 1.14.8

1.6.2 (End of life)

1.14.8 to 1.20.4

1.7.0.0-f59c03d-aliyun

1.20.4 to 1.21.0

1.8.4.1-3a376cc-aliyun

1.21.0 an above

1.11.3.2-f57ea7ed6-aliyun

## Monitor CoreDNS operational status

### Metrics and dashboards

CoreDNS exposes health and performance metrics through a standard Prometheus interface to detect exceptions on CoreDNS and upstream DNS servers.

-   **ACK managed clusters**:Managed Service for Prometheus provides built-in metrics monitoring dashboards and alerting rules for CoreDNS. You can enable Prometheus and dashboard features in the [ACK console](https://cs.console.alibabacloud.com). See [Monitor the CoreDNS component](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/coredns-monitoring#task-2283377).
    
-   **Self-managed Prometheus**: Scrape CoreDNS metrics and configure alerts for critical indicators. See the [official CoreDNS Prometheus documentation](https://coredns.io/plugins/metrics/).
    

### Log analysis

In the event of a DNS exception, CoreDNS logs are essential for root cause diagnosis. We recommend enabling DNS resolution logging and Simple Log Service (SLS) collection. For details, see [Analyze and monitor CoreDNS logs](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/collect-and-analyze-coredns-logs#task-2074495).

### Kubernetes event delivery

In CoreDNS v1.9.3.6-32932850-aliyun and later, use the `k8s_event` plugin to send critical logs to Event Center as Kubernetes events. See [k8s\_event](https://github.com/coredns/coredns.io/blob/master/content/explugins/k8s_event.md).

Newly deployed CoreDNS enables this feature by default. If upgrading from an earlier version to v1.9.3.6-32932850-aliyun or later, manually modify the configuration file to enable it.

1.  Edit the CoreDNS ConfigMap.
    
    ```
    kubectl -n kube-system edit configmap/coredns
    ```
    
2.  Add the `kubeAPI` and `k8s_event` plugins to the configuration.
    
    ```
    apiVersion: v1
    data:
      Corefile: |
        .:53 {
            errors
            health {
                lameduck 15s
            }
    
            # --- Addition Start (ignore other differences) ---
            kubeapi
            k8s_event {
              level info error warning // Deliver key logs with the info, error, and warning statuses.
            }
            # --- Addition End ---
    
            kubernetes cluster.local in-addr.arpa ip6.arpa {
                pods verified
                fallthrough in-addr.arpa ip6.arpa
            }
            # (Remaining configuration omitted)
        }
    ```
    
3.  Verify the update by checking the CoreDNS pod logs. If the logs contain the word `reload`, the modification is successful.
    

## Ensure CoreDNS high availability

CoreDNS is the authoritative DNS provider for your cluster. Its stability is critical; a failure can result in service resolution errors and widespread application outages. This section explains how to monitor CoreDNS and implement high availability (HA) strategies.

### Assess **CoreDNS** pressure

Use open-source tools such as [DNSPerf](https://github.com/DNS-OARC/dnsperf) to benchmark your DNS performance. If you cannot perform a customized assessment, follow these baseline recommendations:

-   **Minimum replicas**: Always maintain at least **2 pods** for redundancy.
    
-   **Resource limits**: Set resource limits to at least **1 Core CPU and 1 GiB memory** per pod.
    
-   **Performance scaling**: CoreDNS performance scales linearly with CPU. With NodeLocal DNSCache enabled, a single CPU core can typically handle over **10,000 QPS**.
    
-   **Replica ratio**: If you cannot monitor peak CPU usage, use a conservative **1:8 Pod-to-Node ratio** (add one CoreDNS pod for every 8 cluster nodes).
    

### Scale **CoreDNS pods**

The number of CoreDNS pods determines available computing resources. Adjust the pod count based on the assessment results.

**Important**

Due to UDP's lack of retransmission, if the IPVS UDP bug causes packet loss risk on cluster nodes, scaling in or restarting CoreDNS pods may cause cluster-wide DNS timeouts lasting up to five minutes. For mitigation strategies, see [Troubleshoot DNS resolution errors](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/dns-troubleshooting-1#section-84d-fqg-tym).

-   **Automatically scale based on the recommended policy**
    
    Deploy `dns-autoscaler` to automatically adjust CoreDNS replicas based on the recommended policy (one pod for every eight cluster nodes).
    
    **Formula**: `replicas = max(ceil(cores × 1/coresPerReplica), ceil(nodes × 1/nodesPerReplica))`
    
    This ensures that the 1:8 ratio is maintained as the cluster grows.
    
    **dns-autoscaler**
    
    ```
    apiVersion: apps/v1
    kind: Deployment
    metadata:
      name: dns-autoscaler
      namespace: kube-system
      labels:
        k8s-app: dns-autoscaler
    spec:
      selector:
        matchLabels:
          k8s-app: dns-autoscaler
      template:
        metadata:
          labels:
            k8s-app: dns-autoscaler
        spec:
          serviceAccountName: admin
          containers:
          - name: autoscaler
            image: registry.cn-hangzhou.aliyuncs.com/acs/cluster-proportional-autoscaler:1.8.4
            resources:
              requests:
                cpu: "200m"
                memory: "150Mi"
            command:
            - /cluster-proportional-autoscaler
            - --namespace=kube-system
            - --configmap=dns-autoscaler
            - --nodelabels=type!=virtual-kubelet
            - --target=Deployment/coredns
            - --default-params={"linear":{"coresPerReplica":64,"nodesPerReplica":8,"min":2,"max":100,"preventSinglePointFailure":true}}
            - --logtostderr=true
            - --v=9
    ```
    
-   **Manually adjust**
    
    Run the following command to manually adjust the number of CoreDNS pods:
    
    ```
    kubectl scale --replicas={target} deployment/coredns -n kube-system # Replace {target} with the desired pod count
    ```
    
-   **Do not use HPA or CronHPA**
    
    Although workload auto-scaling mechanisms (such as HPA and CronHPA) can automatically adjust pod counts, they perform frequent scaling operations. Due to resolution exceptions caused by pod scale-in (the IPVS UDP issues mentioned above), do not use workload auto-scaling to control CoreDNS pod count.
    

### Optimize **CoreDNS pod specifications**

Another way to adjust CoreDNS resources is by modifying pod specifications. In an ACK managed Pro cluster, the default memory limit for CoreDNS pods is `2 GiB`, with no CPU limit. To ensure consistent performance, set the CPU limit to `4096m` (minimum `1024m`). You can adjust these resource requests and limits in the console.

**Modify CoreDNS configurations in the console**

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster you want and click its name. In the left navigation pane, click **Add-ons**.
    
3.  Click the **Networking** tab. On the **CoreDNS** card, click **Configuration**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8691271471/p919974.png)
    
4.  Modify the CoreDNS configuration, then click **OK**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8691271471/p920399.png)
    

### **Schedule CoreDNS pods**

**Important**

Proper scheduling and configuration are critical for the stability of CoreDNS. An improper setup can lead to DNS resolution failure, potentially causing cluster-wide service outages. Before performing this operation, ensure you're familiar with how [scheduling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/scheduling-overview/) works.

**Recommended configurations**

-   **Multi-zone deployment**: Always deploy CoreDNS replicas across different availability zones and nodes to prevent single points of failure.
    
-   **Anti-affinity**: CoreDNS versions earlier than **1.8.4.3** use a "preferred" (soft) node anti-affinity by default. If node resources are insufficient, multiple pods may be scheduled on the same node. If this occurs, upgrade the add-on or manually delete pods to trigger a re-schedule.
    
-   **Lifecycle management**: CoreDNS versions below **1.8** are end-of-life (EOL). Upgrade to the latest version as soon as possible.
    
-   **Avoid resource exhaustion**: Ensure that the nodes running CoreDNS are not saturated (high CPU/memory usage), because such saturation directly impacts DNS query latency and QPS.
    
-   **Dedicated nodes**: For large-scale clusters, consider using custom scheduling parameters (`tolerations`/`nodeAffinity`) to host CoreDNS on dedicated nodes for maximum stability.
    

**Use custom parameters to deploy CoreDNS on dedicated nodes**

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the navigation pane on the left, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster you want and click its name. In the left navigation pane, choose **Nodes** > **Nodes**.
    
3.  On the **Nodes** page, click **Manage Labels and Taints**.
    
4.  On the **Manage Labels and Taints** page, select the target node and click **Add Label**.
    
    **Note**
    
    The number of nodes must exceed the number of CoreDNS replicas to avoid running multiple CoreDNS replicas on a single node.
    
5.  In the **Add** dialog box, set the following parameters and click **OK**.
    
    -   **Name**: node-role-type
        
    -   **Value**: coredns
        
6.  In the left navigation pane, click **Add-ons**, then search for **CoreDNS**.
    
7.  Click **Configuration** on the **CoreDNS** card. In the dialog box that appears, click **\+ Add** to the right of **NodeSelector**. Set the following parameters and click **OK**.
    
    -   **Key**: node-role-type
        
    -   **Value**: CoreDNS
        
    
    CoreDNS will be rescheduled to the node with the specified label.
    

## Optimize CoreDNS configurations

ACK provides a default CoreDNS configurations. However, you should tune these parameters based on your business requirements CoreDNS configuration is highly flexible. For details, see [DNS policies and domain name resolution](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-dns-resolution#task-1985778) and the [official CoreDNS documentation](https://coredns.io/plugins/).

**Recommended optimizations for legacy versions**

If you are running an older cluster, check for the following risks:

-   [Disable the affinity configuration of the kube-dns service](#17b0bfd02478a)
    
-   [Disable the autopath plugin](#6235d0e022ucj)
    
-   [Configure graceful shutdown](#76b5c570221es)
    
-   [Optimize upstream protocol (prefer\_udp)](#29c283410edkw)
    
-   [Configure the ready plugin for readiness probe](#p-66k-kor-itx)
    

Alternatively, check CoreDNS configuration files using the inspection and diagnostics features in the Container Intelligence Service. If the inspection indicates an abnormal CoreDNS ConfigMap, review the items listed above.

**Note**

CoreDNS may consume extra memory when refreshing configuration. After modifying CoreDNS settings, monitor pod status. If pods experience OOM kills after a config change, increase the memory limit in the CoreDNS deployment (recommended: **2 GiB**).

### **Disable the affinity configuration of the kube-dns service**

The affinity configuration may cause significant load imbalances between CoreDNS replicas. Disable it by following these steps:

## Console

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster you want and click its name. In the left navigation pane, choose **Network** > **Services**.
    
3.  In the `kube-system` namespace, click **Edit YAML** for the **kube-dns** service.
    
    -   If the value of the sessionAffinity field is `None`, you do not need to perform the following steps.
        
    -   If the value of the sessionAffinity field is `ClientIP`, perform the following steps.
        
4.  Delete the sessionAffinity and sessionAffinityConfig fields and all their sub-keys. Then, click **OK**.
    
    ```
    # Delete the following
    sessionAffinity: ClientIP
    sessionAffinityConfig:
      clientIP:
        timeoutSeconds: 10800
    ```
    
5.  Click **Edit YAML** to the right of the **kube-dns** Service again and verify that the sessionAffinity field is `None`. If so, the `kube-dns` Service has been modified.
    

## CLI

1.  Run the following command to view the `kube-dns` Service configuration.
    
    ```
    kubectl -n kube-system get svc kube-dns -o yaml
    ```
    
    -   If the value of the sessionAffinity field is `None`, you do not need to perform the following steps.
        
    -   If the value of the sessionAffinity field is `ClientIP`, perform the following steps.
        
2.  Run the following command to open and edit the `kube-dns` Service.
    
    ```
    kubectl -n kube-system edit service kube-dns
    ```
    
3.  Delete the sessionAffinity\-related settings (sessionAffinity, sessionAffinityConfig, and all their sub-keys), then save and exit.
    
    ```
    # Delete the following 
    sessionAffinity: ClientIP
    sessionAffinityConfig:
      clientIP:
        timeoutSeconds: 10800
    ```
    
4.  After the modification, run the following command again to verify that the sessionAffinity field value is `None`. If so, the `kube-dns` Service has been updated.
    
    ```
    kubectl -n kube-system get svc kube-dns -o yaml
    ```
    

### **Disable the** `**autopath**` **plugin**

Some early CoreDNS versions enabled the `autopath` plugin, which can cause resolution errors in specific edge cases. Verify whether it is enabled and edit the configuration file to disable it. For more information, see [Autopath issue #3765](https://github.com/coredns/coredns/issues/3765).

**Note**

Disabling `autopath` can increase client-side QPS and resolution latency by up to **3 times**. Monitor your CoreDNS load and service impact.

1.  Run the `kubectl -n kube-system edit configmap coredns` command to open the CoreDNS configuration file.
    
2.  Remove the line `autopath @kubernetes` and save the change.
    
3.  Check the running status and logs of the CoreDNS pod. If the logs contain the word `reload`, the modification is successful.
    

### **Configure graceful shutdown**

The `lameduck` mechanism ensures that when a CoreDNS process is about to terminate (during updates or restarts), it handles existing requests before exiting.

-   When the CoreDNS process is about to terminate, it enters `lameduck` mode.
    
-   In `lameduck` mode, CoreDNS continues to process already-received requests for a specified duration while signaling the system to stop sending new requests.
    

## Console

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, click the name of the one you want to change. In the left-side navigation pane, choose **Configurations** > **ConfigMaps**.
    
3.  In the `kube-system` namespace, click **Edit YAML** for the coredns ConfigMap.
    
4.  In the following CoreDNS ConfigMap, ensure the health plugin is enabled, set the lameduck timeout to `15s`, then click **OK**.
    

```
.:53 {
        errors       
        # The health plugin may have different settings in different CoreDNS versions.
        # Scenario 1: The health plugin is not enabled by default.   
        # Scenario 2: The health plugin is enabled by default, but the lameduck time is not set.
        # health      
        # Scenario 3: The health plugin is enabled by default, and the lameduck time is set to 5s.   
        # health {
        #     lameduck 5s
        # }      
        # For the preceding three scenarios, modify the configuration as follows and set the lameduck parameter to 15s.
        health {
            lameduck 15s
        }       
        # Other plugins do not need to be modified and are omitted here.
    }
```

A healthy CoreDNS pod status indicates a successful configuration update. If any anomalies occur, refer to the pod events and logs to identify the root cause.

## CLI

1.  Run the following command to open the CoreDNS configuration file.
    

```
kubectl -n kube-system edit configmap/coredns
```

3.  Refer to the following Corefile, ensure the `health` plugin is enabled, and set the lameduck parameter to `15s`.
    

```
.:53 {
        errors     
        # The health plugin may have different settings in different CoreDNS versions.
        # Scenario 1: The health plugin is not enabled by default.     
        # Scenario 2: The health plugin is enabled by default, but the lameduck time is not set.
        # health
        # Scenario 3: The health plugin is enabled by default, and the lameduck time is set to 5s.   
        # health {
        #     lameduck 5s
        # }
        # For the preceding three scenarios, modify the configuration as follows and set the lameduck parameter to 15s.
        health {
            lameduck 15s
        }
        # Other plugins do not need to be modified and are omitted here.
    }
```

5.  After modifying the CoreDNS configuration file, save the change.
    
6.  If CoreDNS runs normally, the graceful shutdown configuration has been successfully updated. If the CoreDNS pod is abnormal, diagnose the cause by reviewing pod events and logs.
    

### Optimize upstream **protocol** (`prefer_udp`)

When using **NodeLocal DNSCache**, the communication chain is: `Application -> NodeLocal DNSCache (TCP) -> CoreDNS (TCP)`. By default, CoreDNS will then attempt to reach the upstream VPC DNS (100.100.2.136/138) via TCP.

-   **Problem**: VPC DNS has limited support for TCP.
    
-   **Solution**: Modify the `forward` plugin to use `prefer_udp`. This ensures CoreDNS communicates with upstream VPC DNS via UDP even if the incoming request was TCP. For more information, see [Manage ConfigMaps](/help/en/ack/serverless-kubernetes/user-guide/manage-configmaps-1693818316836).
    

```
# Before modification
forward . /etc/resolv.conf
# After modification
forward . /etc/resolv.conf {
  prefer_udp
}
```

### Configure the `ready` plugin for readiness probe

For CoreDNS v1.5.0 and later, the `ready` plugin is mandatory for the readiness probe to function.

1.  Run the following command to open the CoreDNS ConfigMap.
    
    ```
    kubectl -n kube-system edit configmap/coredns
    ```
    
2.  Check whether the file contains the `ready` directive. If not, add it, press the Esc key, enter `:wq!`, then press Enter to save the modified configuration file and exit edit mode.
    
    ```
    apiVersion: v1
    data:
     Corefile: |
      .:53 {
        errors
        health {
          lameduck 15s
        }
        ready # If this line does not exist, add it. Make sure that the indentation is consistent with Kubernetes.
        kubernetes cluster.local in-addr.arpa ip6.arpa {
          pods verified
          fallthrough in-addr.arpa ip6.arpa
        }
        prometheus :9153
        forward . /etc/resolv.conf {
          max_concurrent 1000
                prefer_udp
        }
        cache 30
        loop
        log
        reload
        loadbalance
      }
    ```
    
3.  Check the running status and logs of the CoreDNS pod. If the logs contain the word `reload`, the modification is successful.
    

### Enhance resolution performance with the `multisocket` plugin

CoreDNS v1.12.1 introduced the `multisocket` plugin. Enable this plugin to allow CoreDNS to listen on the same port using multiple sockets, enhancing performance in high-CPU scenarios. For details, see the [community documentation](https://coredns.io/plugins/multisocket/).

Enable `multisocket` in the `coredns` ConfigMap:

```
.:53 {
        ...
        prometheus :9153
        multisocket [NUM_SOCKETS]
        forward . /etc/resolv.conf
        ...
}
```

`NUM_SOCKETS` determines the number of sockets listened on the same port.

**Recommended configuration**: Align `NUM_SOCKETS` with estimated CPU utilization, CPU resource limits, and available cluster resources. Examples:

-   If peak consumption is **4 cores** with **8 cores** available, set `NUM_SOCKETS` to 2.
    
-   If peak consumption is **8 cores** with **64 cores** available, set `NUM_SOCKETS` to 8.
    

To determine the optimal configuration, test QPS and load with different settings.

**Default**: If not specified, it defaults to `GOMAXPROCS`, which equals the CoreDNS pod's CPU limit. If the pod's CPU limit is not set, it equals the number of CPU cores on the node where the pod resides.

## References

-   [Service discovery and DNS](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-discovery-dns-1/#task-2038513)
    
-   [Configure DNS policies and resolve domain names](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-dns-resolution#task-1985778)
    
-   [Use the NodeLocal DNSCache component](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-nodelocal-dnscache#task-2008363)

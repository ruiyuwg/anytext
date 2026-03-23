This topic provides answers to some frequently asked questions (FAQs) about Domain Name System (DNS) resolutions in Container Service for Kubernetes (ACK) clusters.

## What do I do if I cannot access a CoreDNS pod by running the exec command?

### Problem

You cannot access a CoreDNS pod by running the `kubectl -n kube-system exec -it {coredns pod} bash` command or a similar command.

### Causes

The container image used by the CoreDNS pod is built by using Scratch and does not have a shell.

### Solutions

Run the `nsenter` command to enter the namespace to which the CoreDNS pod belongs. For more information, see [Diagnose the network connectivity of the CoreDNS pod](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/dns-troubleshooting-1#step-4qm-09h-k4k). You can monitor CoreDNS by collecting and analyzing the log of CoreDNS. For more information, see [Collect and analyze CoreDNS logs](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/collect-and-analyze-coredns-logs#task-2074495).

## Why does CoreDNS use deprecated APIs?

### Problem

The cluster update precheck result shows that the client whose user agent is **coredns** uses the deprecated Kubernetes API `discovery.k8s.io/v1beta1`. The endpoint of the API is `/apis/discovery.k8s.io/v1beta1`.

### Causes

CoreDNS uses the `discovery.k8s.io/v1beta1` API to connect to the API server. However, the API is deprecated or will be deprecated in the cluster version that you use. This issue occurs in the following scenarios:

-   An earlier CoreDNS version is installed in the cluster. CoreDNS uses the `discovery.k8s.io/v1beta1`API because the current version does not support the `discovery.k8s.io/v1`API.
    
-   The versions of CoreDNS and Kubernetes are up-to-date. However, CoreDNS is launched in an earlier Kubernetes version, such as 1.20, and the `discovery.k8s.io/v1beta1`API is selected when ACK launches the CoreDNS pod. Then, the cluster is updated to a Kubernetes version in which the `discovery.k8s.io/v1beta1` API is deprecated but CoreDNS still uses the deprecated API.
    

### Solutions

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the one you want to manage and click its name. In the left-side navigation pane, choose **Operations** > **Add-ons**.
    
3.  You can update the CoreDNS component from the **Add-ons** page.
    
    If the page shows that no update is available, proceed to the next step. Otherwise, perform [Step 3](#6fdc69a11atzr). For more information about how to update the CoreDNS component, see [Manage components](/help/en/ack/ack-lingjun-managed-clusters/user-guide/manage-components).
    
4.  Use kubectl to run the following command to restart CoreDNS:
    
    ```
    kubectl -n kube-system rollout restart deployment coredns
    ```
    
    **Important**
    
    DNS resolution errors may occasionally occur during the restart process. For more information, see [Reduce the adverse effect of occasional DNS resolution timeouts caused by IPVS defects](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/dns-best-practice#section-h6t-66g-7fo).
    
5.  After CoreDNS is updated or restarted, use kubectl to run the following command to query the status of the CoreDNS pod:
    
    ```
    kubectl -n kube-system get pod -l k8s-app=kube-dns
    ```
    
    If the CoreDNS pod is recreated and in the **Running** state, you can ignore the check item related to using deprecated APIs on the precheck page and continue to update the cluster.
    

## What do I do if the error message `dns: buffer size too small` appears in CoreDNS logs?

### Problem

When you run the `kubectl -n kube-system logs {coredns pod}` command to query the logs of CoreDNS pods, the error message `dns: buffer size too small` is displayed.

### **Causes**

The default buffer size (bufsize) for CoreDNS is 1232 bytes, which limits the maximum size of UDP packets for DNS queries in Kubernetes pods to 1232 bytes. If a DNS query response exceeds this limit, the DNS resolution will fail and the query result will not be retrieved, especially if the response data is large. For more details, see [issue](https://github.com/coredns/coredns/pull/4085).

### **Solutions**

Upgrade the CoreDNS to v1.7.1 or later. If the CoreDNS version is earlier than v1.7.1, you can configure the buffer size by using the command `kubectl edit cm -n kube-system coredns`. The bufsize must be in the range of \[512, 4096\]. For more information, see [CoreDNS documentation](https://coredns.io/plugins/bufsize/).

```
. {
    bufsize 1220
    log
}
```

## What do I do if `NXDOMAIN` and `NOERR` are returned after I send two consecutive requests following the creation of a Service?

The CoreDNS component is deployed in multiple pods. If one of the pods does not promptly retrieve the latest information from the API server after a new Service is created, it may result in inconsistent responses for multiple requests. Once the CoreDNS pod obtains the latest Service information, the results of the DNS requests become consistent.

## **DNS resolution features on Windows nodes**

-   Pods running on Windows nodes do not support `ClusterFirstWithHostNet`. Windows treats all names that contain a dot (`.`) as fully qualified domain names (FQDNs) and skips FQDN resolution.
    
-   Windows supports various DNS resolvers, but these resolvers may exhibit slight behavioral differences. We recommend that you use the [Resolve-DnsName](https://learn.microsoft.com/en-us/powershell/module/dnsclient/resolve-dnsname?view=windowsserver2025-ps) PowerShell cmdlet for DNS name query resolution.
    
-   In Linux, when domain name resolution fails, the system sequentially attempts to re-resolve by using a predefined list of DNS suffixes. In contrast, Windows supports only a single DNS suffix, which is associated with the namespace of the pod . For example, a pod created in the `default` namespace receives the DNS suffix `default.svc.cluster.local`. In pods on Windows nodes, you can resolve `kubernetes.default.svc.cluster.local` and `kubernetes`, but you cannot resolve partially qualified names, such as `kubernetes.default` and `kubernetes.default.svc`.
    

For more information, see [DNS for Services and Pods](https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/).

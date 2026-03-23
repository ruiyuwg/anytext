ACK KubeSkoop, formerly known as ACK Net Exporter, is an open-source network monitoring and troubleshooting suite for Container Service for Kubernetes (ACK). It lets you monitor your cluster and quickly troubleshoot complex network problems. This topic shows you how to use KubeSkoop in a managed ACK cluster to help you get started quickly and solve real-world problems.

## Background information

KubeSkoop provides eBPF-based capabilities, including deep network monitoring, connectivity diagnostics, packet capturing, and latency probing. It exposes Prometheus metrics and abnormal events. KubeSkoop runs as a daemon process Pod on each node. It uses eBPF technology to collect information from nodes and aggregates it for specific Pods, providing standardized interfaces to observe high-level network information. The following figure shows the core architecture of KubeSkoop.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0784633671/CAEQTxiBgMCcw8Dg0xkiIGM3ZDkwNjI4ZTk3ZTRjNjY5YmEwYjA1MDgyODU5YmJh3963382_20230830144006.372.svg)

## Install and configure the ACK KubeSkoop component

### Install the ACK KubeSkoop component

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the one you want to manage and click its name. In the left navigation pane, click **Add-ons**.
    
3.  On the **Add-ons** page, search for **ACK KubeSkoop**, find the component, and click **Install**.
    
4.  On the **Install Component ACK KubeSkoop** page, click **Confirm**.
    

### Configure the KubeSkoop component

-   To configure the KubeSkoop component with a ConfigMap, run the following command:
    
    ```
    kubectl edit cm kubeskoop-config -n ack-kubeskoop
    ```
    
-   You can also configure the KubeSkoop component in the console.
    
    1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the navigation pane on the left, click **Clusters**.
        
    2.  On the **Clusters** page, find the cluster you want and click its name. In the left-side pane, choose **Configurations** > **ConfigMaps**.
        
    3.  On the **ConfigMaps** page, set **Namespace** to **ack-kubeskoop**, search for **kubeskoop-config**, then click **Edit** in the **Actions** column for **kubeskoop-config**.
        
    4.  In the **Edit** panel, configure the parameters and click **OK**. The following table describes the parameters supported by KubeSkoop.
        
        **Parameter**
        
        **Description**
        
        **Default value**
        
        `debugmode`
        
        Specifies whether to enable debug mode. Valid values:
        
        -   false: Debug mode is disabled.
            
        -   true: Debug mode is enabled. When enabled, this option provides DEBUG-level logs, debugging interfaces, and Go pprof and gops diagnostic tools.
            
        
        `false`
        
        `port`
        
        The port for the metrics service, which provides an HTTP endpoint.
        
        `9102`
        
        `enableController`
        
        Specifies whether to enable the Controller component. The Controller interacts with the Kubernetes API to perform monitoring or management tasks.
        
        `true`
        
        `controllerAddr`
        
        The address of the KubeSkoop Controller component.
        
        `dns:kubeskoop-controller:10263`
        
        `metrics.probes`
        
        A list of monitoring metric types to collect. Each probe corresponds to a metric category.
        
        ```
         - name: conntrack
         - name: qdisc
         - name: netdev
         - name: io
         - name: sock
         - name: tcpsummary
         - name: tcp
         - name: tcpext
         - name: udp
         - name: rdma
        ```
        
        For more information about the probes, see [Probes, Metrics, and Events](https://kubeskoop.io/zh/docs/reference/monitoring/probes-metrics-events?spm=5176.28197681.0.0.62607af7xo4tZA).
        
        You do not need to restart the ACK KubeSkoop component after updating the ConfigMap. The component automatically hot-reloads changes to enable or disable the corresponding probes.
        

### Configure the ARMS Prometheus dashboard

1.  Log on to the [ARMS console](https://arms-ap-southeast-1.console.aliyun.com/#/home).
    
2.  In the left navigation pane, click **Integration Management**.
    
3.  On the **Integration Management** page, click **Add Integration**. In the search box, search for KubeSkoop and click **ACK KubeSkoop Network Monitoring**.
    
4.  In the **ACK KubeSkoop Network Monitoring** dialog box, select the ACK cluster to integrate, enter an **Integration Name**, then click **OK** to enable KubeSkoop monitoring.
    
5.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the navigation pane on the left, click **Clusters**.
    
6.  On the **Clusters** page, find the cluster you want and click its name. In the left-side pane, choose **Operations** > **Prometheus Monitoring**.
    
7.  Click the **Others** tab. You can find the node and Pod monitoring dashboards created by KubeSkoop in the dashboard list.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0784633671/p962548.png)
    

**Note**

For more information about Prometheus Monitoring for Alibaba Cloud, see [Use Alibaba Cloud Prometheus Service](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-managed-service-for-prometheus-to-monitor-an-ack-cluster).

## Use KubeSkoop

### Manually view KubeSkoop monitoring metrics

KubeSkoop provides monitoring data in Prometheus format. After installing KubeSkoop, you can access the service port of any KubeSkoop Pod instance to retrieve all metrics.

1.  Run the following command to get all KubeSkoop instances:
    
    ```
     kubectl get pod -n ack-kubeskoop -o wide | grep kubeskoop-agent
    ```
    
    Expected output:
    
    ```
    kubeskoop-agent-2chvw                   1/1     Running   0             43m   172.16.16.xxx   cn-hangzhou.172.16.16.xxx   <none>           <none>
    kubeskoop-agent-2qtbf                   1/1     Running   0             43m   172.16.16.xxx   cn-hangzhou.172.16.16.xxx   <none>           <none>
    kubeskoop-agent-72pgf                   1/1     Running   0             43m   172.16.16.xxx   cn-hangzhou.172.16.16.xxx   <none>           <none>
    ```
    
2.  Run the following command to get the metrics. Replace `172.16.16.xxx` with the IP address of the KubeSkoop instance obtained in the previous step.
    
    ```
    curl http://172.16.16.xxx:9102/metrics
    ```
    

KubeSkoop provides monitoring metrics in the following format:

```
kubeskoop_netdev_rxbytes{k8s_namespace="",k8s_node="cn-hangzhou.172.16.16.xxx",k8s_pod=""} 2.970963745e+09
```

## How to use ACK KubeSkoop to troubleshoot intermittent container network issues

The following sections provide guidance for troubleshooting typical cloud-native problems. Using ACK KubeSkoop, you can quickly obtain information related to these issues.

### Troubleshoot DNS timeout issues

In a cloud-native environment, DNS service timeout issues can cause service access failures. Common reasons for DNS timeouts include:

-   The DNS server responds slowly and cannot complete a DNS query before the application times out.
    
-   The sender fails to send the DNS query packet promptly.
    
-   The server responds promptly, but the sender drops packets due to issues like insufficient memory.
    

You can use the following metrics to help troubleshoot intermittent DNS timeout issues:

**Metric name**

**Description**

`kubeskoop_pod_udpsndbuferrors`

The number of errors that occur when sending UDP data through the network layer.

`kubeskoop_pod_udpincsumerrors`

The number of checksum errors that occur when receiving UDP packets.

`kubeskoop_pod_udpnoports`

The number of times the network layer fails to find a corresponding socket for a port when receiving packets with `__udp4_lib_rcv`.

`kubeskoop_pod_udpinerrors`

The number of errors that occur when receiving UDP packets.

`kubeskoop_pod_udpoutdatagrams`

The number of packets successfully sent by UDP through the network layer.

`kubeskoop_pod_udprcvbuferrors`

The number of errors caused by an insufficient socket receive queue when copying data to the application layer.

Because many services in a cloud-native environment rely on CoreDNS for domain name resolution, you must also observe the preceding metrics for CoreDNS-related Pods if the DNS issue is related to CoreDNS.

### Troubleshoot Nginx Ingress HTTP 499/502/503/504 errors

In a cloud-native environment, it is common for Ingress gateways or other proxy services to experience intermittent exceptions. For Nginx Ingress and other Nginx-based proxy services, 499, 502, 503, and 504 are the most common errors. They indicate the following:

-   `499`: The client that requests Nginx closes the TCP connection before Nginx responds. Common causes include the following:
    
    -   The client establishes a connection but sends the request late, causing the client-side timeout to be reached while Nginx is responding. This is common in asynchronous request frameworks on Android clients.
        
    -   The server processes the connection slowly after it is established. This requires further investigation.
        
    -   The server is slow to process requests sent to the upstream backend.
        
-   `502`: Failed DNS resolution for the configured backend, which often occurs when using a Kubernetes Service as the backend.
    
    -   Failed DNS resolution for the configured backend, which often occurs when using a Kubernetes Service as the backend.
        
    -   Failed to establish a connection with the upstream.
        
    -   The upstream request or response is too large, leading to memory allocation failures that disrupt normal business interactions.
        
-   `503`: In Nginx, this status code is used to indicate that all upstream servers are unavailable. In cloud-native scenarios, this status code has some specific meanings. Common causes include the following:
    
    -   No available backends, which is a rare situation.
        
    -   Traffic is too heavy and is being throttled by the Ingress `limit-req` setting.
        
-   `504`: This error indicates a timeout issue with business-related packets between Nginx and the upstream. The common cause is a delayed response from the upstream.
    

When you encounter these issues, first collect general information to determine the problem's scope and the next steps for troubleshooting:

-   Nginx `access_log` information, especially `request_time`, `upstream_connect_time`, and `upstream_response_time`.
    
-   Nginx `error_log` information. Check for any abnormal error messages when the issue occurs.
    
-   If a liveness or readiness health check is configured, check its status.
    

Based on the preceding information, note the changes in the following metrics when a connection failure may have occurred:

**Metric name**

**Description**

`kubeskoop_tcpext_listenoverflow`

Incremented when the half-connection queue of a socket in the LISTEN state overflows.

`kubeskoop_tcpext_listendrops`

Incremented when a socket in the LISTEN state fails to create a socket in the SYN\_RECV state.

`kubeskoop_netdev_txdropped`

The number of times the network interface card (NIC) drops packets due to a transmission error.

`kubeskoop_netdev_rxdropped`

The number of times the NIC drops packets due to a reception error.

`kubeskoop_tcp_activeopens`

The number of times a Pod successfully initiates a TCP handshake with a SYN packet. This does not include SYN retransmissions, but a failed connection also increases this metric.

`kubeskoop_tcp_passiveopens`

The cumulative number of times a Pod completes a TCP handshake and successfully allocates a socket. This can generally be understood as the number of successfully established connections.

`kubeskoop_tcp_retranssegs`

The total number of retransmitted segments in a single Pod. The value is calculated after segmentation by TCP Segmentation Offload (TSO).

`kubeskoop_tcp_estabresets`

The number of times a TCP connection is abnormally closed in a single Pod. This metric only counts the result.

`kubeskoop_tcp_outrsts`

The number of reset packets sent by TCP in a single Pod.

`kubeskoop_conntrack_invalid`

The number of times a connection tracking (conntrack) entry cannot be established for various reasons, but the packet is not dropped.

`kubeskoop_conntrack_drop`

The number of packets dropped because a conntrack entry could not be established.

If you encounter slow Nginx responses, such as a timeout occurring even when the Nginx `request_time` is short, note the changes in the following metrics:

**Metric name**

**Description**

`kubeskoop_tcpsummary_tcpestablishedconn`

The current number of TCP connections in the ESTABLISHED state.

`kubeskoop_pod_tcpsummarytcptimewaitconn`

The current number of TCP connections in the TIME\_WAIT state.

`kubeskoop_tcpsummary_tcptimewaitconn`

The total bytes of data in the send queue of TCP connections currently in the ESTABLISHED state.

`kubeskoop_tcpsummary_tcprxqueue`

The total bytes of data in the receive queue of TCP connections currently in the ESTABLISHED state.

`kubeskoop_tcpext_tcpretransfail`

Incremented when a retransmitted packet returns an error other than EBUSY, indicating that the retransmission failed.

Based on the changes in these metrics at the time of the issue, you can narrow down the scope of your investigation..

### Troubleshoot TCP reset issues

A TCP reset packet is a response to unexpected situations in the TCP protocol. It typically has the following effects on user programs:

-   `connection reset by peer` error, commonly seen in applications that depend on C libraries, such as Nginx.
    
-   `Broken pipe` error, commonly seen in applications that use TCP connection wrappers, such as Java or Python.
    

In a cloud-native network environment, there are many common reasons for reset packets. The following are some common causes:

-   Server-side exceptions prevent normal service, such as insufficient memory configured for TCP. This situation usually triggers a proactive reset.
    
-   When using a Service or Load Balancing, traffic is forwarded to an unexpected backend due to anomalies in stateful mechanisms like Endpoint selection or conntrack.
    
-   Connection release due to security reasons.
    
-   In NAT environments or high concurrency scenarios, Protection Against Wrapped Sequence Numbers (PAWS) or sequence number wraparound occurs.
    
-   Using TCP Keepalive to maintain connections, but with no normal business communication for a long time.
    

To quickly differentiate between these root causes, you can collect some basic information and metrics:

1.  Analyze the network topology between the client and server when the reset packet is generated.
    
2.  Note the changes in the following metrics:
    
    **Metric name**
    
    **Description**
    
    `kubeskoop_tcpext_tcpabortontimeout`
    
    Incremented when a reset is sent because the maximum number of keepalive, window probe, or retransmission calls is exceeded.
    
    `kubeskoop_tcpext_tcpabortonlinger`
    
    The number of resets sent to quickly reclaim connections in the FIN\_WAIT2 state when the TCP Linger2 option is enabled.
    
    `kubeskoop_tcpext_tcpabortonclose`
    
    Incremented when a reset packet is sent because there is still unread data when a TCP connection is closed for reasons outside the state machine.
    
    `kubeskoop_tcpext_tcpabortonmemory`
    
    The number of resets sent to terminate a connection due to insufficient memory triggered by `tcp_check_oom` when allocating resources like `tw_sock` or `tcp_sock`.
    
    `kubeskoop_tcpext_tcpabortondata`
    
    The number of resets sent for fast connection reclamation through a reset when the Linger or Linger2 option is enabled.
    
    `kubeskoop_tcpext_tcpackskippedsynrecv`
    
    The number of times a socket in the SYN\_RECV state does not reply with an ACK.
    
    `kubeskoop_tcpext_tcpackskippedpaws`
    
    The number of times an ACK packet is not sent due to Out-of-Window (OOW) rate limiting, even though a correction was triggered by the PAWS mechanism.
    
    `kubeskoop_tcp_estabresets`
    
    The number of times a TCP connection is abnormally closed in a single Pod. This metric only counts the result.
    
    `kubeskoop_tcp_outrsts`
    
    The number of reset packets sent by TCP in a single Pod.
    

### Troubleshoot intermittent network latency jitter

Intermittent network latency jitter is one of the most common and difficult problems to diagnose in a cloud-native environment. It has many causes and can lead to the three types of problems mentioned earlier. In a container network scenario, network latency within a node usually has the following causes:

-   A real-time process managed by the RT scheduler runs for too long, causing business processes or network kernel threads to be queued for a long time or to be processed slowly.
    
-   The process itself experiences occasional long external calls, such as slow responses from cloud disks or intermittent increases in RDS Round-Trip Time (RTT), which slows request processing.
    
-   Node configuration issues lead to an uneven load between different CPUs or NUMA nodes, causing the heavily loaded system to lag.
    
-   Latency caused by stateful mechanisms in the kernel, such as conntrack's confirm operation, or many orphan sockets affecting normal socket lookups.
    

When facing such problems, although they manifest as network issues, the root cause is often related to other operating system factors. Note the following metrics to narrow down the scope of your investigation:

**Metric name**

**Description**

`kubeskoop_io_ioreadsyscall`

The number of times a process performs file system read operations, such as `read` and `pread`.

`kubeskoop_io_iowritesyscall`

The number of times a process performs file system write operations, such as `write` and `pwrite`.

`kubeskoop_io_ioreadbytes`

The number of bytes a process reads from the file system, usually from a block device.

`kubeskoop_io_iowritebytes`

The number of bytes a process writes to the file system.

`kubeskoop_tcpext_tcptimeouts`

Incremented when a SYN packet is not acknowledged and is retransmitted. This is triggered when the Congestion Avoidance (CA) state has not entered recovery, loss, or disorder.

`kubeskoop_tcpsummary_tcpestablishedconn`

The current number of TCP connections in the ESTABLISHED state.

`kubeskoop_tcpsummary_tcptimewaitconn`

The current number of TCP connections in the TIME\_WAIT state.

`kubeskoop_tcpsummary_tcptxqueue`

The total bytes of data in the send queue of TCP connections currently in the ESTABLISHED state.

`kubeskoop_tcpsummary_tcprxqueue`

The total bytes of data in the receive queue of TCP connections currently in the ESTABLISHED state.

`kubeskoop_softnet_processed`

The number of packets from the NIC's backlog processed by all CPUs within a single Pod.

`kubeskoop_softnet_dropped`

The number of packets dropped by all CPUs within a single Pod.

## Customer use cases

The following are cases where customers used ACK KubeSkoop to troubleshoot and analyze complex problems. You can refer to them for comparison.

### Case 1: Intermittent DNS timeout issues

**Problem**

A customer experienced intermittent DNS resolution timeouts. The user's business was running on PHP, and the DNS service was configured with CoreDNS.

**Troubleshooting process**

1.  Based on the customer's description, we obtained DNS-related monitoring data from the customer.
    
2.  Analysis of the data during the error period revealed the following issues:
    
    -   `kubeskoop_udp_noports` increased by 1 during the error period. The overall metric value was small.
        
    -   The `kubeskoop_packetloss_total` metric increased by 1. The change in packet loss was small.
        
3.  The customer reported that the configured DNS address was a public service provider's address. This information, combined with the monitoring data, indicated that a slow DNS response was the root cause. The DNS response packet arrived after the user-side application had already timed out.
    

### Case 2: Intermittent connection failures in a Java application

**Problem**

A customer found an anomaly where Tomcat would become unavailable intermittently, with each occurrence lasting about 5 to 10 seconds.

**Troubleshooting process**

1.  Log analysis confirmed that the customer's Java Runtime was performing a Garbage Collection (GC) operation when the issue occurred.
    
2.  After deploying KubeSkoop monitoring, we found a significant increase in the `kubeskoop_tcpext_listendrops` metric at the time of the problem.
    
3.  We concluded that when the customer's Java Runtime performed GC, the request processing speed slowed down, delaying connection releases. However, new connection requests continued, creating a large number of connections. This filled up the listen socket's backlog and caused an overflow, leading to the increase in `kubeskoop_tcpext_listendrops`.
    
4.  The customer's connection buildup was short-lived, and the processing capacity itself was not an issue. We recommended that the customer adjust the relevant Tomcat parameters, which resolved the problem.
    

### Case 3: Intermittent network latency jitter for a customer

**Problem**

A customer discovered that requests between their application and Redis experienced intermittent RTT increases, leading to business timeouts. However, the problem could not be reproduced.

**Troubleshooting process**

1.  Log analysis showed that the customer experienced intermittent Redis requests with a total response time exceeding 300 ms.
    
2.  After deploying KubeSkoop, the monitoring data showed an increase in the `kubeskoop_virtcmdlatency_latency` metric when the problem occurred. The `le` (Prometheus histogram bucket label) values that increased were 18 and 15. This indicated that two high-latency virtualization calls had occurred. The one with `le=15` caused a delay of over 36 ms, and the one with `le=18` caused a delay of over 200 ms.
    
3.  Because kernel virtualization calls occupy the CPU and cannot be preempted, the customer's intermittent latency was caused by some virtualization calls taking too long to execute during the batch creation and deletion of Pods.
    

### Case 4: Intermittent Health Check failures for Ingress Nginx

**Problem**

The Ingress machine had intermittent health check failures, accompanied by business request failures.

**Troubleshooting process**

1.  After deploying monitoring, we found that several metrics showed abnormal changes at the time of the issue.
    
    1.  Both `kubeskoop_tcpsummary_tcprxqueue` and `kubeskoop_tcpsummary_tcptxqueue` increased.
        
    2.  `kubeskoop_tcpext_tcptimeouts` increased.
        
    3.  `kubeskoop_tcpsummary_tcptimewaitconn` decreased, and `kubeskoop_tcpsummary_tcpestablishedconn` increased.
        
2.  Analysis confirmed that the kernel was working normally and connections were being established correctly. However, the process execution was abnormal, including processing packets from the receive socket and actually sending packets. We suspected a scheduling or resource limit issue with the user process.
    
3.  We advised the user to check Cgroup monitoring and found that the customer experienced a CPU Throttled phenomenon at the time of the issue. This proved that Cgroup limitations intermittently prevented the user process from being scheduled.
    
4.  By following the guide [Enable CPU Burst](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/cpu-burst), we configured the CPU Burst feature for Ingress, which resolved this type of issue.

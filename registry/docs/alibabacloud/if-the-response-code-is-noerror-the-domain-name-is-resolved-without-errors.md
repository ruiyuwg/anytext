This topic describes the diagnostic procedure and troubleshooting for DNS resolution failures. This topic also provides solutions and diagnostic methods for DNS resolution failures.

## Diagnostic procedure

### **Usage notes**

DNS troubleshooting is complex in Kubernetes because Kubernetes uses a dynamic and multi-layer network architecture. In addition to CoreDNS errors and NodeLocal DNSCache errors, the following issues may lead to DNS resolution failures.

**Important**

The [Best practices for DNS services](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/dns-best-practice) topic provides suggestions on how to configure DNS resolution in various scenarios. To reduce the risk of DNS resolution failures, we recommend that you refer to this topic to configure DNS resolution.

-   Network architecture workloads
    
    The DNS resolution pipeline in Kubernetes involves multiple modules, including the following components or plug-ins, CoreDNS(kube-dns), kube-proxy, and Container Network Interface (CNI). If an error occurs on any module, DNS resolution may fail. In this case, you must diagnose each module to identify the causes of DNS resolution failures. For more information about how to diagnose the DNS resolution pipeline in Kubernetes, see [Diagnose other modules in the DNS resolution pipeline](#677f1c0f88z3r).
    
-   Specific service discovery mechanisms and namespaces
    
    -   Fully qualified domain name (FQDN) dependencies: When you access Service across namespaces, you must use a full domain name, such as service.namespace.svc.cluster.local. If the domain name you use does not include a namespace, the DNS lookup is performed only within the current namespace. In this case, you fail to access the Service but no error is reported.
        
    -   Headless Services: If you access a headless Service, a pod IP address is returned. Improper configurations may lead to missing DNS records.
        
-   Network policy restrictions
    
    -   Deny rules of Kubernetes network policies: If the Kubernetes network policy of a pod does not allow access through DNS ports, including the default UDP port 53 and TCP ports, the pod cannot communicate with CoreDNS.
        
    -   Interference by Virtual Private Cloud (VPC) security groups: DNS packets may be dropped due to host firewall rules or security group rules, especially VPC security group rules.
        
    -   Troubleshooting: Diagnose the network connectivity of the CoreDNS pod in the kube-system namespace.
        
-   Limits of Debugging tools and logs
    
    -   Missing tools: If the container image you use does not contain the dig or nslookup debugging tool, you must launch a temporary debugging container in your cluster.
        
    -   Spread logs: To collect logs from CoreDNS, you must manually install the log plug-in of CoreDNS to enable the Debug mode for CoreDNS. The logs of CoreDNS are spread across multiple pod replicas.
        
    -   Debugging: Quickly test DNS resolution by using a temporary debugging pod:
        
        ```
        kubectl run -it --rm debug --image=nicolaka/netshoot -- dig
        ```
        
        You can also run the following command:
        
        ```
        nslookup  <Domain name>
        ```
        

### **Basic terms**

-   **internal domain name**: the domain name that is used by CoreDNS to expose services. An internal domain name ends with `.cluster.local`. DNS queries for the internal domain name are resolved based on the DNS cache of CoreDNS instead of the upstream DNS servers.
    
-   **external domain name**: the domain names that are resolved by authoritative DNS provided by third-party DNS service providers, Alibaba Cloud DNS, or Alibaba Cloud DNS PrivateZone. Cluster external domain names are resolved by the upstream DNS servers of CoreDNS. CoreDNS only forwards DNS queries to the upstream DNS servers.
    
-   **application pod**: the pods other than the pods of system components in a Kubernetes cluster.
    
-   **application pod that uses CoreDNS for DNS resolutions**: the application pods that use CoreDNS to process DNS queries.
    
-   **application pod that uses NodeLocal DNSCache for DNS resolutions**: the application pods to which DNSConfig is injected. After you install NodeLocal DNSCache in your cluster, you can configure DNS settings by injecting DNSConfig to application pods. This way, DNS queries of these pods are first sent to NodeLocal DNSCache. If NodeLocal DNSCache fails to process the queries, the queries are sent to the kube-dns Service of CoreDNS.
    

### **CoreDNS and NodeLocal DNSCache troubleshooting procedure**

![故障手册流程.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9713551461/p357356.png)

1.  Determine the cause of the exception. For more information, see [Common error messages](#d924d8201ehbv).
    
    -   If the error message indicates that the domain name does not exist, refer to **Check the domain name** in the [Troubleshooting](#section-tuh-1hn-yhd) section.
        
    -   If the error message indicates that connections to the DNS server cannot be established, refer to **Check the frequency of errors** in the [Troubleshooting](#section-tuh-1hn-yhd) section.
        
    
2.  If the issue persists, perform the following steps:
    
    -   Check whether CoreDNS is specified in the DNS configurations of the application pod. For more information, see [Diagnose the DNS configurations of application pods](#d92770341e3fa).
        
        -   If CoreDNS is not specified in the DNS configurations, the client may run at full load or the conntrack table may be full. For more information, see [What do I do if DNS resolutions fail because the client is overloaded?](#section-km6-h84-u1u) and [What do I do if the conntrack table is full?](#section-01p-wmf-s5e)
            
        -   If CoreDNS is specified in the DNS configurations, perform the following steps:
            
            1.  Check the status of the CoreDNS pods. For more information, see [Diagnose the status of the CoreDNS pod](#d92797491enyt) and [What do I do if CoreDNS pods do not run as expected?](#section-6cg-6l5-fkr)
                
            2.  Check the operational logs of the CoreDNS pods. For more information, see [Diagnose the operational logs of CoreDNS](#d927be541edq1) and [What do I do if the external domain name of my cluster cannot be resolved?](#section-wma-yoy-ld6)
                
            3.  Check whether the issue can be stably reproduced.
                
                1.  If the error can be stably reproduced, refer to [Diagnose the DNS query log of CoreDNS](#7) and [Diagnose the network connectivity between application pods and the CoreDNS pod](#9).
                    
                2.  If the issue cannot be stably reproduced, refer to [Capture packets](#11).
                    
    -   If NodeLocal DNSCache is specified in the DNS configuration, refer to [What do I do if NodeLocal DNSCache does not work?](#section-j4i-nw9-1in) and [What do I do if domain names that are added to Alibaba Cloud DNS PrivateZone cannot be resolved?](#section-zb2-rgt-hlo)
        
    
3.  If the issue persists, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm).
    

### **Common error messages**

**Client**

**Error message**

**Possible cause**

ping

`ping: xxx.yyy.zzz: Name or service not known`

The domain name does not exist or the DNS server is inaccessible. If the resolution latency is more than 5 seconds, the DNS server may be inaccessible.

curl

`curl: (6) Could not resolve host: xxx.yyy.zzz`

PHP HTTP client

`php_network_getaddresses: getaddrinfo failed: Name or service not known in xxx.php on line yyy`

Golang HTTP client

`dial tcp: lookup xxx.yyy.zzz on 100.100.2.136:53: no such host`

The domain name does not exist.

dig

`;; ->>HEADER<<- opcode: QUERY, status: NXDOMAIN, id: xxxxx`

Golang HTTP client

`dial tcp: lookup xxx.yyy.zzz on 100.100.2.139:53: read udp 192.168.0.100:42922->100.100.2.139:53: i/o timeout`

The DNS server cannot be accessed.

dig

`;; connection timed out; no servers could be reached`

### **Diagnose other modules in the DNS resolution pipeline**

The following figure shows the DNS resolution pipeline. In addition to CoreDNS errors and NodeLocal DNSCache errors, issues in the following modules may lead to DNS resolution failures.

-   DNS Resolver: The implementation of DNS resolution in programming languages such as Go and libraries such as glibc and musl may contain vulnerabilities that can lead to DNS resolution failures in rare cases.
    
-   The /etc/resolv.conf file: The DNS configuration file in the container includes DNS server IP addresses and search domains. Improper configurations of this file may lead to DNS resolution failures.
    
-   kube-proxy: kube-proxy route requests in IP Virtual Server (IPVS) or iptables mode. If you do not update when you update CoreDNS, CoreDNS becomes inaccessible, which may lead to DNS resolution failures in occasional cases.
    
-   Upstream DNS Servers: CoreDNS resolves only internal domain names. When CoreDNS receives a resolution request for a domain name that does not match the `clusterDomain` parameter, CoreDNS sends a DNS query to an upstream DNS server, such as [VPC Private DNS](/help/en/dns/introduction-to-intranet-analysis). If the upstream DNS server is improperly configured, the resolution fails.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9180442471/CAEQORiBgICygaDGrRkiIDVhZjQ4ZmU3NGI3ZDQ4MWE5NWE5ZTIzMjM5MjUzNTU24940133_20250224105405.445.svg)

## Troubleshooting

**Operation**

**Symptom**

**Causes and solutions**

Check the domain name

Resolution errors occur on the internal domain name and external domain name.

-   [What do I do if DNS queries are blocked by security group rules or the network ACLs that are associated with vSwitches?](#section-xe7-0t1-wp6)
    
-   [What do I do if container network connectivity errors occur?](#section-4ai-elv-2k0)
    
-   [What do I do if CoreDNS pods are overloaded?](#section-dxh-8u7-8te)
    
-   [What do I do if the DNS query load is not balanced among CoreDNS pods?](#section-olt-i39-enm)
    
-   [What do I do if CoreDNS pods do not run as expected?](#section-6cg-6l5-fkr)
    
-   [What do I do if the conntrack table is full?](#section-01p-wmf-s5e)
    
-   [What do I do if the autopath plug-in does not work as expected?](#section-qqn-ce1-j8l)
    
-   [What do I do if DNS resolutions fail due to concurrent queries for A records and AAAA records?](#section-vzq-w7v-egy)
    
-   [What do I do if DNS resolutions fail due to IPVS errors?](#section-84d-fqg-tym)
    

Resolution errors occur only on the external domain name.

[What do I do if the external domain name of my cluster cannot be resolved?](#section-wma-yoy-ld6)

Resolution errors occur only on domain names that are added to Alibaba Cloud DNS PrivateZone and domain names that contain vpc-proxy.

[What do I do if domain names that are added to Alibaba Cloud DNS PrivateZone cannot be resolved?](#section-zb2-rgt-hlo)

Resolution errors occur only on the domain names of headless Services.

-   [What do I do if domain names of headless Services cannot be resolved?](#section-3io-ju6-cwe)
    
-   [What do I do if domain names of headless Services cannot be resolved after I update CoreDNS?](#section-hs6-4ec-zbf)
    
-   [What do I do if domain names of StatefulSet pods cannot be resolved?](#section-9g9-17c-n5v)
    

Check the frequency of errors

Resolution errors occur every time.

-   [What do I do if CoreDNS pods do not run as expected?](#section-6cg-6l5-fkr)
    
-   [What do I do if domain names that are added to Alibaba Cloud DNS PrivateZone cannot be resolved?](#section-zb2-rgt-hlo)
    
-   [What do I do if DNS queries are blocked by security group rules or the network ACLs that are associated with vSwitches?](#section-xe7-0t1-wp6)
    
-   [What do I do if the external domain name of my cluster cannot be resolved?](#section-wma-yoy-ld6)
    
-   [What do I do if domain names of headless Services cannot be resolved?](#section-3io-ju6-cwe)
    
-   [What do I do if domain names of headless Services cannot be resolved after I update CoreDNS?](#section-hs6-4ec-zbf)
    
-   [What do I do if domain names of StatefulSet pods cannot be resolved?](#section-9g9-17c-n5v)
    
-   [What do I do if container network connectivity errors occur?](#section-4ai-elv-2k0)
    

Resolution errors occur only during peak hours.

-   [What do I do if CoreDNS pods are overloaded?](#section-dxh-8u7-8te)
    
-   [What do I do if the DNS query load is not balanced among CoreDNS pods?](#section-olt-i39-enm)
    

Resolution errors occur at a high frequency.

-   [What do I do if DNS resolutions fail due to IPVS errors?](#section-84d-fqg-tym)
    
-   [What do I do if NodeLocal DNSCache does not work?](#section-j4i-nw9-1in)
    

Resolution errors occur at a low frequency.

-   [What do I do if the autopath plug-in does not work as expected?](#section-qqn-ce1-j8l)
    
-   [What do I do if DNS resolutions fail due to concurrent queries for A records and AAAA records?](#section-vzq-w7v-egy)
    

Resolution errors occur only during node scaling or CoreDNS scaling.

[What do I do if DNS resolutions fail due to IPVS errors?](#section-84d-fqg-tym)

## Diagnostics methods

### **Diagnose the DNS configurations of application pods**

-   **Commands**
    
    ```
    # Run the following command to query the YAML file of the foo pod. Then, check whether the dnsPolicy field in the YAML file is set to a proper value. 
    kubectl get pod foo -o yaml
    
    # If the dnsPolicy field is set to a proper value, check the DNS configuration file of the pod. 
    
    # Run the following command to log on to the containers of the foo pod by using bash. If bash does not exist, use sh. 
    kubectl exec -it foo bash
    
    # Run the following command to query the DNS configuration file. Then, check the DNS server addresses in the nameserver field. 
    cat /etc/resolv.conf
    ```
    
-   **DNS policy settings**
    
    The following sample code provides a pod template that is configured with DNS policy settings:
    
    ```
    apiVersion: v1
    kind: Pod
    metadata:
      name: <pod-name>
      namespace: <pod-namespace>
    spec:
      containers:
      - image: <container-image>
        name: <container-name>
    
    # The default value of the dnsPolicy field is ClusterFirst. 
      dnsPolicy: ClusterFirst
    # The following code shows the DNS policy settings that are applied when NodeLocal DNSCache is used. 
      dnsPolicy: None
      dnsConfig:
        nameservers:
        - 169.254.20.10
        - 172.21.0.10
        options:
        - name: ndots
          value: "3"
        - name: timeout
          value: "1"
        - name: attempts
          value: "2"
        searches:
        - default.svc.cluster.local
        - svc.cluster.local
        - cluster.local
    
      securityContext: {}
      serviceAccount: default
      serviceAccountName: default
      terminationGracePeriodSeconds: 30
    ```
    
    **Value of dnsPolicy**
    
    **Description**
    
    Default
    
    You can use this value if internal access from within the cluster is not required. The pod uses DNS servers that are specified in the /etc/resolv.conf file of the Elastic Compute Service (ECS) instance.
    
    ClusterFirst
    
    This is the default value. The IP address of the kube-dns Service is used as the address of the DNS server that is used by the pod. For pods that use the host network, a value of ClusterFirst has the same effect as the value of Default.
    
    ClusterFirstWithHostNet
    
    For pods that use the host network, a value of ClusterFirstWithHostNet has the same effect as the value of ClusterFirst.
    
    None
    
    If you use this value, you can configure self-managed DNS servers and custom parameters in the dnsConfig section. If you enable the automatic injection of dnsConfig for NodeLocal DNSCache, the IP address of the local DNS cache and the IP address of the kube-dns Service are specified as the addresses of the DNS servers.
    

### **Diagnose the status of the CoreDNS pod**

**Commands**

-   Run the following command to query information about the CoreDNS pod:
    
    ```
    kubectl -n kube-system get pod -o wide -l k8s-app=kube-dns
    ```
    
    Expected output:
    
    ```
    NAME                      READY   STATUS    RESTARTS   AGE   IP            NODE
    coredns-xxxxxxxxx-xxxxx   1/1     Running   0          25h   172.20.6.53   cn-hangzhou.192.168.0.198
    ```
    
-   Run the following command to query the real-time resource usage of the CoreDNS pod:
    
    ```
    kubectl -n kube-system top pod -l k8s-app=kube-dns
    ```
    
    Expected output:
    
    ```
    NAME                      CPU(cores)   MEMORY(bytes)
    coredns-xxxxxxxxx-xxxxx   3m           18Mi
    ```
    
-   If the CoreDNS pod is not in the Running state, run the `kubectl -n kube-system describe pod <CoreDNS pod name>` command to identify the cause.
    

### **Diagnose the operational logs of CoreDNS**

**Commands**

Run the following command to query the operational logs of CoreDNS:

```
kubectl -n kube-system logs -f --tail=500 --timestamps coredns-xxxxxxxxx-xxxxx
```

**Parameter**

**Description**

`f`

The log is streamed.

`tail=500`

The last 500 lines of the logs are printed.

`timestamps`

Timestamps are included in each line in the log output.

`coredns-xxxxxxxxx-xxxxx`

The name of the CoreDNS pod.

### Diagnose the DNS query logs of CoreDNS

**Commands**

The DNS query logs of CoreDNS are generated only when the log plug-in of CoreDNS is enabled. For more information about how to enable the log plug-in, see [Configure CoreDNS](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-coredns#task-2165721).

Run the command that you use to query the operational logs of CoreDNS. For more information, see [Diagnose the operational logs of CoreDNS](#d927be541edq1).

### Diagnose the network connectivity of the CoreDNS pod

You can use the console or CLI to diagnose the network connectivity of the CoreDNS pod.

## ACK console

You can use the network diagnosis feature provided by the cluster.

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, click the name of the cluster that you want to diagnose. In the left-side navigation pane, choose **Inspections and Diagnostics > Diagnostics**.
    
3.  On the **Diagnosis** page, click **Network diagnosis**.
    
4.  On the **Network diagnosis** page, click **Diagnosis**. In the **Network** panel, configure the following parameters.
    
    -   **Source address**: Enter the IP address of the CoreDNS pod.
        
    -   **Destination address**: Enter the IP addresses of the upstream DNS server. By default, you can select 100.100.2.136 or 100.100.2.138.
        
    -   **Destination port**: `53`.
        
    -   **Protocol**: `udp`.
        
    
    Read the warning and select **I know and agree**, and then click **Create diagnosis**.
    
5.  On the **Diagnosis result** page, you can view the diagnostic results. The **Packet paths** section displays all nodes that are diagnosed.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2433710371/p859024.png)
    

## CLI

**Procedure**

1.  Log on to the node on which the CoreDNS pod runs.
    
2.  Run the `ps aux | grep coredns` command to query the ID of the CoreDNS process.
    
3.  Run the `nsenter -t <pid> -n -- <related commands>` command to enter the network namespace to which CoreDNS belongs. Replace `pid` with the process ID of `coredns` that you obtained in the previous step.
    
4.  Test the network connectivity.
    
    1.  Run the `telnet <apiserver_clusterip> 6443` command to test the connectivity to the Kubernetes API server of the cluster.
        
        Replace `apiserver_clusterip` with the IP address of the Service that is used to expose the Kubernetes API server of the cluster.
        
    2.  Run the `dig <domain> @<upstream_dns_server_ip>` command to test the connectivity between the CoreDNS pod and the upstream DNS servers.
        
        Replace `domain` with the test domain name and `upstream_dns_server_ip` with the IP addresses of the upstream DNS servers, which are 100.100.2.136 and 100.100.2.138 by default.
        

**FAQ**

**Issue**

**Cause**

**Solution**

CoreDNS cannot connect to the Kubernetes API server of the cluster.

Errors occur in the Kubernetes API server of the cluster, the node is overloaded, or kube-proxy does not run as expected.

[submit a ticket](https://smartservice.console.alibabacloud.com/console.htm)

CoreDNS cannot connect to the upstream DNS servers.

The node is overloaded, the CoreDNS configurations are wrong, or the routing configurations of the Express Connect circuit are incorrect.

[submit a ticket](https://smartservice.console.alibabacloud.com/console.htm)

### Diagnose the network connectivity between application pods and the CoreDNS pod

You can use the console or CLI to diagnose the network connectivity between application pods and the CoreDNS pod.

## ACK console

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, click the name of the cluster that you want to diagnose. In the left-side navigation pane, choose **Inspections and Diagnostics > Diagnostics**.
    
3.  On the **Diagnosis** page, click **Network diagnosis**.
    
4.  On the **Network diagnosis** page, click **Diagnosis**. In the **Network** panel, configure the following parameters.
    
    -   **Source address**: Enter the IP address of the application pod.
        
    -   **Destination address**: Enter the IP address of the CoreDNS pod or the cluster.
        
    -   **Destination port**: `53`.
        
    -   **Protocol**: `udp`.
        
    
    Read the warning and select **I know and agree**, and then click **Create diagnosis**.
    
5.  On the **Diagnosis result** page, you can view the diagnostic results. The **Packet paths** section displays all nodes that are diagnosed.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2433710371/p859037.png)
    

## CLI

**Procedure**

1.  Use one of the following methods to connect to the container network of the application pods.
    
    -   Method 1: Run the `kubectl exec` command.
        
    -   Method 2
        
        1.  Log on to the node on which the application pods run.
            
        2.  Run the `ps aux | grep <Application process name>` command to query the ID of the application process.
            
        3.  Run the `nsenter -t <pid> -n bash` command to enter the namespace to which the application pods belong.
            
            Replace `pid` with the process ID that you obtained in the previous step.
            
    -   Method 3: If the application pods frequently restart, perform the following steps:
        
        1.  Log on to the node on which the application pods run.
            
        2.  Run the `docker ps -a | grep <Application container names>` command to query the containers whose names start with `k8s_POD_` . Record the sandboxed container IDs that are returned.
            
        3.  Run the `docker inspect <Sandboxed container ID> | grep netns` command to query the path of the network namespace to which the container belongs in the /var/run/docker/netns/xxxx file.
            
        4.  Run the `nsenter -n<netns path> -n bash` command to enter the network namespace.
            
            Replace `netns path` with the path that you obtained in the previous step.
            
            **Note**
            
            Do not add spaces between `-n` and `<netns path>`.
            
    
2.  Test the network connectivity.
    
    1.  Run the `dig <domain> @<kube_dns_svc_ip>` command to test the connectivity between the application pods and the kube-dns Service.
        
        Replace `<domain>` with the test domain name and `<kube_dns_svc_ip>` with the IP address of the kube-dns Service in the kube-system namespace.
        
    2.  Run the `ping <coredns_pod_ip>` command to test the connectivity between the application pods and the CoreDNS pod.
        
        Replace `<coredns_pod_ip>` with the IP address of the CoreDNS pod in the kube-system namespace.
        
    3.  Run the `dig <domain> @<coredns_pod_ip>` command to test the connectivity between the application pods and the CoreDNS pod.
        
        Replace `<domain>` with the test domain name and `<coredns_pod_ip>` with the IP address of the CoreDNS pod in the kube-system namespace.
        

**FAQ**

**Issue**

**Cause**

**Solution**

The application pods cannot connect to the kube-dns Service.

The node is overloaded, kube-proxy does not run as expected, or the security group rules block UDP port 53.

Check whether the security group rules open UDP port 53. If the security group rules open UDP port 53, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm).

The application pods cannot connect to the CoreDNS pod.

Errors related to the container network occur or the security group rules block Internet Control Message Protocol (ICMP) traffic.

Check whether the security group rules open ICMP. If the security group rules open ICMP, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm).

The application pods cannot connect to the CoreDNS pod.

The node is overloaded or the security group rules block UDP port 53.

Check whether the security group rules open UDP port 53. If the security group rules open UDP port 53, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm).

### Capture packets

If you cannot identify the issue, capture and diagnose packets.

1.  Log on to the nodes on which the application pods and CoreDNS pod run.
    
2.  Run the following command on each ECS instance to capture all recent packets received on port 53:
    
    ```
    tcpdump -i any port 53 -C 20 -W 200 -w /tmp/client_dns.pcap
    ```
    
3.  Diagnose the packets that are transferred during the time period in which the error occurred.
    
    **Note**
    
    -   Packet capture does not affect your service and only causes a slight increase in the CPU utilization and disk I/O.
        
    -   The preceding command rotates the captured packets and can generate at most 200 .pcap files each of which is 20 MB in size.
        
    

## What do I do if the external domain name cannot be resolved?

### Symptom

The internal domain name of the cluster can be resolved, but the external domain name cannot be resolved.

### Cause

An error in the upstream DNS server when the external domain name is resolved.

### Solution

Check the DNS query logs of CoreDNS.

### Common DNS query log

After CoreDNS responds to the DNS query of a client, CoreDNS generates a log entry to record the DNS query:

```
# If the response code is NOERROR, the domain name is resolved without errors. 
[INFO] 172.20.2.25:44525 - 36259 "A IN redis-master.default.svc.cluster.local. udp 56 false 512" NOERROR qr,aa,rd 110 0.000116946s
```

### Common response codes

For more information about DNS response codes, see [DOMAIN NAMES - IMPLEMENTATION AND SPECIFICATION](https://datatracker.ietf.org/doc/html/rfc1035).

**Response codes**

**Description**

**Cause**

NXDOMAIN

The domain name does not exist in the upstream DNS server.

Domain names in pod requests are appended with the search domain suffix. If a suffixed domain name does not exist on the DNS server, this response code is returned. If you find this response code in the DNS query log, a domain name resolution error occurred.

SERVFAIL

An error occurs in the upstream DNS server.

An error occurs in the upstream DNS server. For example, connections to the upstream DNS server cannot be established.

REFUSED

The DNS query is rejected by the upstream DNS server.

The upstream DNS server that is specified in the CoreDNS configurations or the /etc/resolv.conf file of the node cannot resolve the domain name. You can check the configuration file of CoreDNS.

If the DNS query log of CoreDNS displays `NXDOMAIN`, `SERVFAIL`, or `REFUSED` for the external domain name of the cluster, the upstream DNS server of CoreDNs returns an error.

By default, DNS servers 100.100.2.136 and 100.100.2.138 provided by VPC are used as the upstream DNS servers of CoreDNS. To resolve the preceding errors, [submit a ticket](https://smartservice.console.alibabacloud.com/#/ticket/category/swas/today) to the ECS team. You need to include the information that is described in the following table in the ticket.

**Variable**

**Meaning**

**Cron expression**

Domain name

The cluster external domain name that corresponds to the DNS response code in the DNS query log.

www.aliyun.com

DNS response code

The DNS response code that is returned, which can be NXDOMAIN, SERVFAIL, or REFUSED.

NXDOMAIN

Time

The time when the log entry was generated in seconds.

2022-12-22 20:00:03

ECS instances

The IDs of the ECS instances that host the CoreDNS pods.

i-xxxxx i-yyyyy

## What do I do if domain names of headless Services cannot be resolved?

### Symptom

CoreDNS cannot resolve domain names of headless Services.

### Cause

In a CoreDNS version earlier than 1.7.0 is used, CoreDNS may unexpectedly exit if network jitters occur in the Kubernetes API server of the cluster. As a result, the domain names of headless Services are not updated when CoreDNS is down.

### Solution

Update CoreDNS to 1.7.0 or later. For more information, see [\[Component Updates\] Update CoreDNS](/help/en/ack/product-overview/update-coredns#task-1964489).

## **What do I do if the domain name of headless Service fails to be resolved?**

### **Problem description**

CoreDNS pods cannot resolve the domain names of headless Services. When you use the `dig` command, the `tc` flag is displayed in the response, which indicates that the response is too large.

## **Cause**

If the number of IP addresses corresponding to a headless domain name is too big, the DNS query sent by the client over UDP may exceed the size limit of UDP DNS packets. This results in resolution failures.

## **Solution**

To avoid resolution failures, configure the client application to send DNS queries over TCP. CoreDNS supports both TCP and UDP. You can change the protocol based on different business scenarios:

-   Use the glibc-related resolver.
    
    If your client application uses the glibc-related resolver, you can add the `use-vc` configuration to `dnsConfig`. This way, the client application sends DNS queries over TCP. These settings are mapped to the corresponding `options` configuration in the `/etc/resolv.conf` file. For more information about `options`, see [Linux man page](https://man7.org/linux/man-pages/man5/resolv.conf.5.html).
    
    ```
    dnsConfig:
      options:
      - name: use-vc
    ```
    
-   Business code logic implemented by Golang
    
    If you use Golang for development, you can refer to the following code to send DNS queries over TCP.
    
    ```
    package main
    
    import (
    	"fmt"
    	"net"
    	"context"
    )
    
    func main() {
    	resolver := &net.Resolver{
    		PreferGo: true,
    		Dial: func(ctx context.Context, network, address string) (net.Conn, error) {
    			return net.Dial("tcp", address)
    		},
    	}
    
    	addrs, err := resolver.LookupHost(context.TODO(), "example.com")
    	if err != nil {
    		fmt.Println("Error:", err)
    		return
    	}
    	fmt.Println("Addresses:", addrs)
    }
    ```
    

## What do I do if domain names of headless Services cannot be resolved after I update CoreDNS?

### Symptom

Earlier versions of open source components, such as etcd, Nacos, and Kafka, cannot work as expected if Kubernetes 1.20 or later and CoreDNS 1.8.4 or later are used.

### Cause

CoreDNS 1.8.4 or later preferably uses the EndpointSlice API to synchronize the IP addresses of the Services in your cluster. Some open source components use the `service.alpha.kubernetes.io/tolerate-unready-endpoints` annotation provided by the Endpoint API during the initialization phase to publish Services that are not ready. This annotation has been deprecated in the EndpointSlice API and replaced by `publishNotReadyAddresses`. Therefore, you cannot release Services that are not ready after you update CoreDNS. As a result, the open source components cannot perform service discovery.

### Solution

Check whether the YAML file or Helm Chart file of the open source component contains the `service.alpha.kubernetes.io/tolerate-unready-endpoints` annotation. If the open source component contains the annotation, the open source component may fail to work as expected. In this case, you need to upgrade the open source component or consult the open source component community.

## What do I do if domain names of StatefulSet pods cannot be resolved?

### Symptom

The domain names of StatefulSet pods cannot be resolved.

### Cause

If a StatefulSet is exposed by using a headless Service, the ServiceName parameter in the pod YAML template must be set to the name of the headless Service. Otherwise, you cannot access the domain names of the StatefulSet pods, such as pod.headless-svc.ns.svc.cluster.local. However, you can access the domain name of the headless Service, such as headless-svc.ns.svc.cluster.local.

### Solution

Set the ServiceName parameter in the pod YAML template to the name of the headless Service that is used to expose the StatefulSet pods.

## What do I do if DNS queries are blocked by security group rules or the network ACLs that are associated with vSwitches?

### Symptom

DNS resolution failures of CoreDNS persist on some or all nodes.

### Cause

The security group rules or network access control lists (ACLs) that control the network communication of the ECS instance block UDP port 53.

### Solution

Modify the security group rules or network ACLs to open UDP port 53.

## What do I do if container network connectivity errors occur?

### Symptom

DNS resolution failures of CoreDNS persist on some or all nodes.

### Cause

UDP port 53 is blocked due to container network connectivity errors or other causes.

### Solution

You can use the [network diagnostics](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/network-diagnostics#394659b02a38g) feature to diagnose the network connectivity between application pods and the CoreDNS pod**.** If the issue persists, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm).

## What do I do if CoreDNS pods are overloaded?

### Symptom

-   The DNS resolution latency of CoreDNS is high, or DNS resolution failures of CoreDNS persist or occasionally occur on some or all nodes.
    
-   Check the status of CoreDNS pods and check whether the CPU and memory usage is about to reach the upper limit.
    

### Cause

The number of replicated pods that are configured for CoreDNS is insufficient to handle DNS queries.

### Solution

-   Use NodeLocal DNSCache to improve DNS resolution efficiency and reduce the load on CoreDNS. For more information, see [Configure NodeLocal DNSCache](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-nodelocal-dnscache#task-2008363).
    
-   Scale out CoreDNS pods to ensure that the peak CPU utilization of each pod is less than the amount of idle CPU resources of the node.
    

## What do I do if the DNS query load is not balanced among CoreDNS pods?

### Symptom

-   The DNS resolution latency of CoreDNS is high, or DNS resolution failures of CoreDNS persist or occasionally occur on some nodes.
    
-   The status of CoreDNS pods shows that the CPU utilization is different among the pods.
    
-   The number of replicated pods that are configured for CoreDNS is less than two or multiple CoreDNS pods are deployed on the same node.
    

### Cause

DNS queries are not evenly distributed among CoreDNS pods due to imbalanced pod scheduling or improper SessionAffinity settings of the kube-dns Service.

### Solution

-   Scale out CoreDNS pods and schedule the pods to different nodes.
    
-   You can delete the SessionAffinity parameter from the configuration of the kube-dns Service. For more information, see [Configure ACK to automatically update CoreDNS](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-ack-to-automatically-update-coredns#section-66f-5fj-cl0).
    

## What do I do if CoreDNS pods do not run as expected?

### Symptom

-   The DNS resolution latency of CoreDNS is high, or DNS resolution failures of CoreDNS persist or occasionally occur on some nodes.
    
-   CoreDNS pods are not in the Running state or the number of pod restarts continuously increases.
    
-   The CoreDNS log data indicates that errors occurred.
    

### Cause

CoreDNS pods do not run as expected due to improper settings in the YAML file or the CoreDNS ConfigMap.

### Solution

Check the status and operational logs of CoreDNS pods.

### Common error logs and solutions

**Error**

**Cause**

**Solution**

`/etc/coredns/Corefile:4 - Error during parsing: Unknown directive 'ready'`

The configurations in the CoreDNS ConfigMap are incompatible with the current CoreDNS version. `Unknown directive` in the error record indicates that the current CoreDNS version does not support the ready plug-in that is specified in Corefile.

Delete the ready plug-in from the CoreDNS ConfigMap in the kube-system namespace. If other plug-ins appear in the error log, delete the plug-ins from the ConfigMap.

`pkg/mod/k8s.io/client-go@v0.18.3/tools/cache/reflector.go:125: Failed to watch *v1.Pod: Get "https://192.168.0.1:443/api/v1/": dial tcp 192.168.0.1:443: connect: connection refused`

Connections to the Kubernetes API server are interrupted during the period when the log was generated.

If no DNS resolution error occurs in this period, the error is not caused by network connectivity issues. Otherwise, check the network connectivity of CoreDNS pods. For more information, see [Diagnose the network connectivity of the CoreDNS pod](#8).

`[ERROR] plugin/errors: 2 www.aliyun.com. A: read udp 172.20.6.53:58814->100.100.2.136:53: i/o timeout`

Connections to the upstream DNS servers cannot be established during the period when the log was generated.

## What do I do if DNS resolutions fail because the client is overloaded?

### Symptom

DNS resolution errors occur occasionally or during peak hours. The monitoring information about the ECS instance indicates an abnormal retransmission rate of the network interface controller (NIC) and abnormal CPU utilization.

### Cause

The ECS instance that hosts the pod that sends the DNS query to CoreDNS is fully loaded, which causes UDP packet loss.

### Solution

-   We recommend that you [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) to troubleshoot the issue.
    
-   Use NodeLocal DNSCache to improve DNS resolution efficiency and reduce the load on CoreDNS. For more information, see [Configure NodeLocal DNSCache](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-nodelocal-dnscache#task-2008363).
    

## What do I do if the conntrack table is full?

### Symptom

-   CoreDNS frequently fails to resolve domain names on some or all nodes during peak hours, but can resolve domain names as expected during off-peak hours.
    
-   Run the `dmesg -H` command on the instance and check the log that is generated during the period in which the resolution fails. The log contains the keyword `conntrack full`.
    

### Cause

The conntrack table of the Linux kernel is full. As a result, requests that are sent over UDP or TCP cannot be processed.

### Solution

Increase the maximum number of entries in the conntrack table of the Linux kernel. For more information, see the [How do I increase the maximum number of tracked connections in the conntrack table of the Linux kernel?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-container-networks#section-jbl-6zq-9b5) .

## What do I do if the autopath plug-in does not work as expected?

### Symptom

-   The external domain name occasionally fails to be resolved or is occasionally resolved to a wrong IP address. However, the internal domain name is resolved as normal.
    
-   When the cluster creates containers at a high frequency, the internal domain name is resolved to a wrong IP address.
    

### Cause

The autopath plug-in does not work as expected due to the defects of CoreDNS.

### Solution

Perform the following operations to disable the autopath plug-in:

1.  Run the `kubectl -n kube-system edit configmap coredns` command to modify the coredns ConfigMap.
    
2.  Delete `autopath @kubernetes`, save the change, and then exit.
    
3.  Check the status and operational logs of the CoreDNS pods. If the log data contains the `reload` keyword, the new configuration is loaded.
    

## What do I do if DNS resolutions fail due to concurrent queries for A records and AAAA records?

### Symptom

-   DNS resolutions of CoreDNS occasionally fail.
    
-   The captured packets or the log of DNS queries to CoreDNS shows that queries for A records and AAAA records are initiated at the same time over the same port.
    

### Cause

-   Concurrent DNS queries for A records and AAAA records cause errors in the conntrack table of the Linux kernel, which results in UDP packet loss.
    
-   libc versions earlier than 2.33 initiate queries for A records and AAAA records at the same time on ARM machines. As a result, the queries time out and are reinitiated. For more information, see [GLIBC#26600](https://sourceware.org/git/gitweb.cgi?p=glibc.git;h=2dfa659a66f20facc4082207884c20e986ddecee).
    

### Solution

-   Use NodeLocal DNSCache to improve DNS resolution efficiency and reduce the load on CoreDNS. For more information, see [Configure NodeLocal DNSCache](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-nodelocal-dnscache#task-2008363).
    
-   For images that use libc, such as CentOS or Ubuntu images, update the version of libc to 2.33 or later to prevent the issue that queries for A records and AAAA records are initiated at the same time.
    
-   You can optimize CentOS and Ubuntu images by setting the parameters such as `options timeout:2 attempts:3 rotate single-request-reopen`.
    
-   If the image that you use is based on Alpine Linux, we recommend that you replace the image with an image that is based on another operating system. For more information, see [Alpine](https://github.com/gliderlabs/docker-alpine/blob/master/docs/caveats.md).
    
-   A variety of resolution errors may occur when applications written in PHP send DNS queries by using short-lived connections. If you use PHP cURL, you must add `CURL_IPRESOLVE_V4` to specify that domain names can be resolved only to IPv4 addresses. For more information, see [cURL\_setopt](https://www.php.net/manual/zh/function.curl-setopt.php).
    

## What do I do if DNS resolutions fail due to IPVS errors?

### Symptom

DNS resolutions occasionally fail when nodes are added to or removed from the cluster, nodes are shut down, or CoreDNS is scaled in. In most cases, this situation lasts for about 5 minutes.

### Cause

The load balancing mode of kube-proxy is set to IPVS in your cluster. If you remove IPVS UDP backend pods from nodes that run CentOS or Alibaba Cloud Linux 2 whose kernel versions are earlier than 4.19.91-25.1.al7.x86\_64, source port conflicts occur when UDP packets are sent. As a result, the UDP packets are dropped.

### Solution

-   Use NodeLocal DNSCache to reduce packet loss in IPVS mode. For more information, see [Configure NodeLocal DNSCache](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-nodelocal-dnscache#task-2008363).
    
-   Shorten the timeout period of UDP sessions in IPVS mode. For more information, see [Change the UDP timeout period in IPVS mode](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-ack-to-automatically-update-coredns#section-m9z-3lo-iv4).
    

## What do I do if NodeLocal DNSCache does not work?

### Symptom

All DNS queries are sent to CoreDNS instead of NodeLocal DNSCache.

### Cause

-   DNSConfig is not injected into the application pods. The IP address of the kube-dns Service is configured as the address of the DNS server for the application pods.
    
-   The application pods are deployed by using an image based on Alpine Linux. As a result, DNS queries are concurrently sent to all nameservers, including the local DNS cache and CoreDNS pods.
    

### Solution

-   Configure automatic injection for DNSConfig. For more information, see [Configure NodeLocal DNSCache](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-nodelocal-dnscache#task-2008363).
    
-   If the image that you use is based on Alpine Linux, we recommend that you replace the image with an image that is based on another operating system. For more information, see [Alpine](https://github.com/gliderlabs/docker-alpine/blob/master/docs/caveats.md).
    

## What do I do if domain names that are added to Alibaba Cloud DNS PrivateZone cannot be resolved?

### Symptom

When NodeLocal DNSCache is used, domain names that are added to Alibaba Cloud DNS PrivateZone cannot be resolved, the endpoints of Alibaba Cloud service APIs that contain vpc-proxy cannot be resolved, or domain names are resolved to wrong IP addresses.

### Cause

Alibaba Cloud DNS PrivateZone does not support TCP. You must use UDP.

### Solution

Add the `prefer_udp` configuration to CoreDNS. For more information, see [Configure CoreDNS](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-coredns#task-2165721).

## References

-   [DNS policies and domain name resolution](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-dns-resolution#task-1985778)
    
-   [Collect and analyze CoreDNS logs](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/collect-and-analyze-coredns-logs#task-2074495)
    
-   [Configure ACK to automatically update CoreDNS](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-ack-to-automatically-update-coredns#task-2093043)
    
-   [Use ACK CoreDNS DNSTAP Analyser to diagnose DNS resolution errors](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-ack-coredns-dnstap-analyser-to-diagnose-dns-resolution-errors#task-2091060)
    
-   [Configure NodeLocal DNSCache](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-nodelocal-dnscache#task-2008363)
    
-   [Best practices for DNS services](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/dns-best-practice)

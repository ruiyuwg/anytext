This topic describes the diagnostic procedure and troubleshooting for DNS resolution failures. This topic also provides solutions and diagnostic methods for DNS resolution failures.

## Table of contents

 

Item

Description

Diagnostic procedure

-   [Terms](#1)
-   [Troubleshooting procedure](#2)
-   [Common error messages](#3)

Troubleshooting

[Troubleshooting](#section-tuh-1hn-yhd)

Diagnostic methods

-   [Diagnose the DNS configurations of application pods](#4)
-   [Diagnose the status of the CoreDNS pod](#5)
-   [Diagnose the operational log of CoreDNS](#6)
-   [Diagnose the DNS query log of CoreDNS](#7)
-   [Diagnose the network connectivity of the CoreDNS pod](#8)
-   [Diagnose the network connectivity between application pods and the CoreDNS pod](#9)
-   [Diagnose the container network](#10)
-   [Capture packets](#11)

FAQ

-   [What do I do if the external domain name of my cluster cannot be resolved?](#section-wma-yoy-ld6)
-   [What do I do if domain names of headless Services cannot be resolved?](#section-3io-ju6-cwe)
-   [What do I do if domains names of StatefulSet pods cannot be resolved?](#section-9g9-17c-n5v)
-   [What do I do if DNS queries are blocked by security group rules or the network access control lists (ACLs) that are associated with vSwitches?](#section-xe7-0t1-wp6)
-   [What do I do if container network connectivity errors occur?](#section-4ai-elv-2k0)
-   [What do I do if CoreDNS pods are overloaded?](#section-dxh-8u7-8te)
-   [What do I do if DNS queries are not evenly distributed among CoreDNS pods?](#section-olt-i39-enm)
-   [What do I do if CoreDNS pods do not run as normal?](#section-6cg-6l5-fkr)
-   [What do I do if DNS resolutions fail because the client is overloaded?](#section-km6-h84-u1u)
-   [What do I do if the conntrack table is full?](#section-01p-wmf-s5e)
-   [What do I do if the autopath plug-in does not work as normal?](#section-qqn-ce1-j8l)
-   [What do I do if DNS resolutions fail due to concurrent queries for A records and AAAA records?](#section-vzq-w7v-egy)
-   [What do I do if DNS resolutions fail due to IP Virtual Server (IPVS) errors?](#section-84d-fqg-tym)
-   [What do I do if NodeLocal DNSCache doe not work?](#section-j4i-nw9-1in)
-   [What do I do if domain names that are added to Alibaba Cloud DNS PrivateZone cannot be resolved?](#section-zb2-rgt-hlo)

## Diagnostic procedure

### Terms

-   Internal domain name: CoreDNS exposes services deployed in a cluster through an internal domain name that ends with `.cluster.local`. DNS queries for the internal domain name are resolved based on the DNS cache of CoreDNS instead of the upstream DNS servers.
-   External domain name: Domain names other than the internal domain name of a cluster. DNS queries for external domain names can be resolved by CoreDNS or by the upstream DNS servers that are specified in DNSConfig. By default, 100.100.2.136 and 100.100.2.138 are specified as the upstream DNS servers. The default upstream DNS servers are deployed in a virtual private cloud (VPC). You can also specify self-managed DNS servers.
-   Application pod: Pods other than the pods of system components in a Kubernetes cluster.
-   Application pods that use CoreDNS for DNS resolutions: Application pods that use CoreDNS to process DNS queries.
-   Application pods that use NodeLocal DNSCache for DNS resolutions: After you install NodeLocal DNSCache in your cluster, you can configure DNS settings by injecting DNSConfig to application pods. This way, DNS queries of these pods are first sent to NodeLocal DNSCache. If NodeLocal DNSCache fails to process the queries, the queries are sent to the kube-dns Service of CoreDNS.

### Troubleshooting procedure

![Troubleshooting flowchart.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9713551461/p357356.png)

1.  Check the domain name and DNS server. For more information, see [Common error messages](#3).
    
    -   If the error message indicates that the domain name does not exist, refer to Check the domain name in the [Troubleshooting](#section-tuh-1hn-yhd) section.
    -   If the error message indicates that connections to the DNS server cannot be established, refer to Check the frequency of errors in the [Troubleshooting](#section-tuh-1hn-yhd) section.
    
2.  If the error still exists, perform the following checks:
    
    -   Check whether CoreDNS is specified in the DNS configuration of the application pod. For more information, see [Diagnose the DNS configurations of application pods](#4).
        -   If CoreDNS is not specified in the DNS configuration, a possible cause is that the client runs at full load or the conntrack table is full. For more information, see [What do I do if DNS resolutions fail because the client is overloaded?](#section-km6-h84-u1u) and [What do I do if the conntrack table is full?](#section-01p-wmf-s5e).
        -   If CoreDNS is specified in the DNS configuration, perform the following checks:
            1.  Check the status of the CoreDNS pods. For more information, see [Diagnose the status of the CoreDNS pod](#5) and [What do I do if CoreDNS pods do not run as normal?](#section-6cg-6l5-fkr).
            2.  Check the operational logs of the CoreDNS pods. For more information, see [Diagnose the operational log of CoreDNS](#6) and [What do I do if the external domain name of my cluster cannot be resolved?](#section-wma-yoy-ld6).
            3.  Check whether the error can be stably reproduced.
                1.  If the error can be stably reproduced, refer to [Diagnose the DNS query log of CoreDNS](#7), [Diagnose the container network](#10), and [Diagnose the network connectivity between application pods and the CoreDNS pod](#9).
                2.  If the error cannot be stably reproduced, refer to [Capture packets](#11).
    -   If NodeLocal DNSCache is specified in the DNS configuration, refer to [What do I do if NodeLocal DNSCache doe not work?](#section-j4i-nw9-1in) and [What do I do if domain names that are added to Alibaba Cloud DNS PrivateZone cannot be resolved?](#section-zb2-rgt-hlo).
    
3.  If the error still exists, [Submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) for troubleshooting.

### Common error messages

  

Client

Error message

Possible cause

ping

`ping: xxx.yyy.zzz: Name or service not known`

The domain name does not exist or the DNS server is inaccessible. If the resolution latency is more than 5 seconds, a possible cause is that the DNS server is inaccessible.

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

## Troubleshooting

  

Troubleshooting

Symptom

References for fixes

Check the domain name

Resolution errors occur on the internal domain name and external domain name.

-   [What do I do if DNS queries are blocked by security group rules or the network access control lists (ACLs) that are associated with vSwitches?](#section-xe7-0t1-wp6)
-   [What do I do if container network connectivity errors occur?](#section-4ai-elv-2k0)
-   [What do I do if CoreDNS pods are overloaded?](#section-dxh-8u7-8te)
-   [What do I do if DNS queries are not evenly distributed among CoreDNS pods?](#section-olt-i39-enm)
-   [What do I do if CoreDNS pods do not run as normal?](#section-6cg-6l5-fkr)
-   [What do I do if the conntrack table is full?](#section-01p-wmf-s5e)
-   [What do I do if the autopath plug-in does not work as normal?](#section-qqn-ce1-j8l)
-   [What do I do if DNS resolutions fail due to concurrent queries for A records and AAAA records?](#section-vzq-w7v-egy)
-   [What do I do if DNS resolutions fail due to IP Virtual Server (IPVS) errors?](#section-84d-fqg-tym)

Resolution errors occur only on the external domain name.

[What do I do if the external domain name of my cluster cannot be resolved?](#section-wma-yoy-ld6)

Resolution errors occur only on domain names that are added to Alibaba Cloud DNS PrivateZone and domain names that contain vpc-proxy.

[What do I do if domain names that are added to Alibaba Cloud DNS PrivateZone cannot be resolved?](#section-zb2-rgt-hlo)

Resolution errors occur only on the domain names of headless Services.

-   [What do I do if domain names of headless Services cannot be resolved?](#section-3io-ju6-cwe)
-   [What do I do if domains names of StatefulSet pods cannot be resolved?](#section-9g9-17c-n5v)

Check the frequency of errors

Resolution errors occur every time.

-   [What do I do if CoreDNS pods do not run as normal?](#section-6cg-6l5-fkr)
-   [What do I do if domain names that are added to Alibaba Cloud DNS PrivateZone cannot be resolved?](#section-zb2-rgt-hlo)
-   [What do I do if DNS queries are blocked by security group rules or the network access control lists (ACLs) that are associated with vSwitches?](#section-xe7-0t1-wp6)
-   [What do I do if the external domain name of my cluster cannot be resolved?](#section-wma-yoy-ld6)
-   [What do I do if domain names of headless Services cannot be resolved?](#section-3io-ju6-cwe)
-   [What do I do if domains names of StatefulSet pods cannot be resolved?](#section-9g9-17c-n5v)
-   [What do I do if container network connectivity errors occur?](#section-4ai-elv-2k0)

Resolution errors occur only during peak hours.

-   [What do I do if CoreDNS pods are overloaded?](#section-dxh-8u7-8te)
-   [What do I do if DNS queries are not evenly distributed among CoreDNS pods?](#section-olt-i39-enm)

Resolution errors occur at a high frequency.

-   [What do I do if DNS resolutions fail due to IP Virtual Server (IPVS) errors?](#section-84d-fqg-tym)
-   [What do I do if NodeLocal DNSCache doe not work?](#section-j4i-nw9-1in)

Resolution errors occur at a low frequency.

-   [What do I do if the autopath plug-in does not work as normal?](#section-qqn-ce1-j8l)
-   [What do I do if DNS resolutions fail due to concurrent queries for A records and AAAA records?](#section-vzq-w7v-egy)

Resolution errors occur only during node scaling events or CoreDNS scaling events.

[What do I do if DNS resolutions fail due to IP Virtual Server (IPVS) errors?](#section-84d-fqg-tym)

## Commonly used diagnostic methods

### Diagnose the DNS configurations of application pods

-   Commands
    
    ```
    # Run the following command to query the YAML file of the foo pod. Then, check whether the dnsPolicy field in the YAML file is set to a proper value. 
    kubectl get pod foo -o yaml
    
    # If the dnsPolicy field is set to a proper value, check the DNS configuration file of the pod. 
    
    # Run the following command to log on to the containers of the foo pod by using bash. If bash does not exist, use sh. 
    kubectl exec -it foo bash
    
    # Run the following command to query the DNS configuration file. Then, check the DNS server addresses in the nameserver field. 
    cat /etc/resolv.conf
    ```
    
-   DNS policy settings
    
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
    
    # The default value of dnsPolicy is ClusterFirst. 
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
    
     
    
    Value of dnsPolicy
    
    Description
    
    Default
    
    You can use this value if internal access from within the cluster is not required. The pod uses DNS servers that are specified in the /etc/resolv.conf file of the Elastic Compute Service (ECS) instance.
    
    ClusterFirst
    
    This is the default value. The IP address of the kube-dns Service is used as the address of the DNS server that is used by the pod. For pods that use the host network, a value of ClusterFirst has the same effect as the value of Default.
    
    ClusterFirstWithHostNet
    
    For pods that use the host network, a value of ClusterFirstWithHostNet has the same effect as the value of ClusterFirst.
    
    None
    
    If you use this value, you can configure self-managed DNS servers and custom parameters in the DNSConfig section. If you enable the automatic injection of DNSConfig for NodeLocal DNSCache, the IP address of the local DNS cache and the IP address of the kube-dns Service are set as the addresses of the DNS servers.
    

### Diagnose the status of the CoreDNS pod

Commands

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

### Diagnose the operational log of CoreDNS

Commands

Run the following command to query the operational log of CoreDNS:

```
kubectl -n kube-system logs -f --tail=500 --timestamps coredns-xxxxxxxxx-xxxxx
```

 

Parameter

Description

`f`

The log is streamed.

`tail=500`

The last 500 lines of the log are printed.

`timestamps`

Timestamps are included in each line in the log output.

`coredns-xxxxxxxxx-xxxxx`

The name of the CoreDNS pod.

### Diagnose the DNS query log of CoreDNS

Commands

The DNS query log of CoreDNS is generated only when the log plug-in of CoreDNS is enabled. For more information about how to enable the log plug-in, see [Configure DNS resolution](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-dns-resolution#task-1985778 "This topic introduces how Domain Name System (DNS) resolution works in Container Service for Kubernetes (ACK) clusters, and describes how to configure DNS policies to meet different business requirements in various scenarios.").

Run the command that you use to query the operational log of CoreDNS. For more information, see [Diagnose the operational log of CoreDNS](#6).

### Diagnose the network connectivity of the CoreDNS pod

Procedure

1.  Log on to the node on which the CoreDNS pod runs.
2.  Run the `ps aux | grep coredns` command to query the ID of the CoreDNS process.
3.  Run the `nsenter -t <pid> -n bash` command to enter the network namespace to which CoreDNS belongs. Replace `pid` with the process ID that you obtained in the previous step.
4.  Test the network connectivity.
    1.  Run the `telnet <apiserver_slb_ip> 443` command to test the connectivity to the Kubernetes API server of the cluster.
        
        Replace `apiserver_slb_ip` with the IP address of the Service that is used to expose the Kubernetes API server of the cluster.
        
    2.  Run the `dig <domain> @<upstream_dns_server_ip>` command to test the connectivity between the CoreDNS pod and the upstream DNS servers.
        
        Replace `domain` with the test domain name and `upstream_dns_server_ip` with the IP addresses of the upstream DNS servers, which are 100.100.2.136 and 100.100.2.138 by default.
        

FAQ

  

Symptom

Cause

Solution

CoreDNS cannot connect to the Kubernetes API server of the cluster.

Errors occur on the Kubernetes API server of the cluster, the node is overloaded, or kube-proxy does not run as normal.

[Submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) for troubleshooting.

CoreDNS cannot connect to the upstream DNS servers.

The node is overloaded, the CoreDNS configurations are wrong, or the routing configurations of the Express Connect circuit are incorrect.

[Submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) for troubleshooting.

### Diagnose the network connectivity between application pods and the CoreDNS pod

Procedure

1.  Use one of the following methods to connect to the container network of the application pods.
    
    -   Method 1: Run the `kubectl exec` command.
    -   Method 2:
        1.  Log on to the node on which the application pods run.
        2.  Run the `ps aux | grep <application process name>` command to query the ID of the application process.
        3.  Run the `nsenter -t <pid> -n bash` command to enter the network namespace to which the application pods belong.
            
            Replace `pid` with the process ID that you obtained in the previous step.
            
    -   Method 3: If the application pods frequently restart, perform the following steps:
        1.  Log on to the node on which the application pods run.
        2.  Run the `docker ps -a | grep <application container names>` command to query the containers whose names start with `k8s_POD_` . Record the sandboxed container IDs that are returned.
        3.  Run the `docker inspect <sandboxed container ID> | grep netns` command to query the path of the network namespace to which the container belongs in the /var/run/docker/netns/xxxx file.
        4.  Run the `nsenter -n<netns path> -n bash` command to enter the network namespace.
            
            Replace `netns path` with the path that you obtained in the previous step.
            
            **Note** Do not add spaces between `-n` and `<netns path>`.
            
    
2.  Test the network connectivity.
    1.  Run the `dig <domain> @<kube_dns_svc_ip>` command to test the connectivity between the application pods and the kube-dns Service.
        
        Replace `<domain>` with the test domain name and `<kube_dns_svc_ip>` with the IP address of the kube-dns Service in the kube-system namespace.
        
    2.  Run the `ping <coredns_pod_ip>` command to test the connectivity between the application pods and the CoreDNS pod.
        
        Replace `<coredns_pod_ip>` with the IP address of the CoreDNS pod in the kube-system namespace.
        
    3.  Run the `dig <domain> @<coredns_pod_ip>` command to test the connectivity between the application pods and the CoreDNS pod.
        
        Replace `<domain>` with the test domain name and `<coredns_pod_ip>` with the IP address of the CoreDNS pod in the kube-system namespace.
        

FAQ

  

Symptom

Cause

Solution

The application pods cannot connect to the kube-dns Service.

The node is overloaded, kube-proxy does not run as normal, or the security group rules block UDP port 53.

Check whether the security group rules open UDP port 53. If the security group rules open UDP port 53, [Submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) for troubleshooting.

The application pods cannot connect to the CoreDNS pod.

Errors related to the container network occur or the security group rules block Internet Control Message Protocol (ICMP).

Diagnose the container network.

The application pods cannot connect to the CoreDNS pod.

The node is overloaded or the security group rules block UDP port 53.

Check whether the security group rules open UDP port 53. If the security group rules open UDP port 53, [Submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) for troubleshooting.

### Diagnose the container network

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com).
2.  On the Clusters page, find the cluster that you want to manage and click the name of the cluster or click Details in the Actions column. The details page of the cluster appears.
3.  In the left-side navigation pane of the ACK console, click Clusters.
4.  In the left-side navigation pane of the details page, choose Operations > Cluster Check.
5.  In the left-side navigation pane of the Container Intelligence Service page, choose Cluster Check > Diagnosis.
6.  On the Diagnosis page, click the Network Diagnosis tab.
7.  Set Source address to the IP address of an application pod, Destination address to the IP address of the kube-dns Service, and Destination port to 53. Select Enable packet tracing and I know and agree. Then, click Create diagnosis.
8.  In the list of diagnosis records, find the diagnosis record that you want to manage and click Diagnosis details in the operation column.
    
    You can view the diagnostic results that are displayed in the Diagnosis result, Packet paths, and All possible paths sections. The causes of errors are also provided. For more information, see [Use the cluster diagnostics feature to troubleshoot cluster issues](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-cluster-diagnostics/#task-2101622 "Container Service for Kubernetes (ACK) provides the cluster diagnostics feature. This feature allows you to troubleshoot node, pod, and network issues in an ACK cluster. This topic describes how to use the cluster diagnostics feature to diagnose an ACK cluster.").
    

### Capture packets

If you cannot identify the issue, capture and diagnose packets.

1.  Log on to the nodes on which the application pods and CoreDNS pod run.
2.  Run the following command on each ECS instance to capture all recent packets received on port 53:
    
    ```
    tcpdump -i any port 53 -C 20 -W 200 -w /tmp/client_dns.pcap
    ```
    
3.  Diagnose the packets that are transferred during the time period in which DNS resolution errors occurred. You can obtain the time period from the application log.
    
    **Note**
    
    -   Packet capture does not affect your service and only causes a slight increase in the CPU utilization and disk I/O.
    -   The preceding command rotates the captured packets and can generate at most 200 .pcap files that each has a size of 20 MB.
    

## What do I do if the external domain name of my cluster cannot be resolved?

Causes

The upstream DNS server returns an error code, which indicates that a domain name resolution error occurred.

Symptom

The internal domain name of the cluster can be resolved, but the external domain name cannot be resolved.

Solutions

Check the DNS query log of CoreDNS.

Example of DNS query record

After CoreDNS responds to the DNS query of a client, CoreDNS generates a log entry to record the DNS query:

```
# If the response code is NOERROR, it indicates that the domain name is resolved without errors. 
[INFO] 172.20.2.25:44525 - 36259 "A IN redis-master.default.svc.cluster.local. udp 56 false 512" NOERROR qr,aa,rd 110 0.000116946s
```

Common DNS response codes

For more information about DNS response codes, see [Specification](https://datatracker.ietf.org/doc/html/rfc1035).

  

Response code

Description

Cause

NXDOMAIN

The domain name does not exist on the upstream DNS server.

Domain names in pod requests are appended with the search domain suffix. If a suffixed domain name does not exist on the DNS server, this response code is returned. If you find this response code in the DNS query log, it indicates that a domain name resolution error occurred.

SERVFAIL

An error occurs on the upstream DNS server.

An error occurs on the upstream DNS server. For example, connections to the upstream DNS server cannot be established.

REFUSED

The DNS query is rejected by the upstream DNS server.

The upstream DNS server that is specified in the CoreDNS configuration or the /etc/resolv.conf file of the node cannot resolve the domain name. You can check the configuration file of CoreDNS.

## What do I do if domain names of headless Services cannot be resolved?

Causes

In CoreDNS versions earlier than 1.7.0, CoreDNS may unexpectedly exit if network jitters occur on the Kubernetes API server of the cluster. As a result, the domain names of headless Services are not updated when CoreDNS is down.

Symptom

CoreDNS cannot resolve domain names of headless Services.

Solutions

Update CoreDNS to 1.7.0 or later. For more information, see [\[Component Updates\] Update CoreDNS](/help/en/ack/product-overview/update-coredns#task-1964489 "To improve the stability of DNS resolution in Container Service for Kubernetes (ACK) clusters, we recommend that you update CoreDNS to the latest version. This topic describes how to update CoreDNS.").

## What do I do if domains names of StatefulSet pods cannot be resolved?

Causes

If a StatefulSet is exposed by using a headless Service, the ServiceName parameter in the pod YAML template must be set to the name of the headless Service. Otherwise, you cannot access the domain names of the StatefulSet pods, such as pod.headless-svc.ns.svc.cluster.local. However, you can access the domain name of the headless Service, such as headless-svc.ns.svc.cluster.local.

Symptom

The domain names of StatefulSet pods cannot be resolved.

Solutions

Set the ServiceName parameter in the pod YAML template to the name of the headless Service that is used to expose the StatefulSet pods.

## What do I do if DNS queries are blocked by security group rules or the network access control lists (ACLs) that are associated with vSwitches?

Causes

The security group rules or network ACLs that control the network communications of the ECS instance block UDP port 53.

Symptom

DNS resolution failures of CoreDNS persist on some or all nodes.

Solutions

Modify the security group rules or network ACLs to open UDP port 53.

## What do I do if container network connectivity errors occur?

Causes

UDP port 53 is blocked due to container network connectivity errors or other causes.

Symptom

DNS resolution failures of CoreDNS persist on some or all nodes.

Solutions

Diagnose the container network. For more information, see [Use the cluster diagnostics feature to troubleshoot cluster issues](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-cluster-diagnostics/#task-2101622 "Container Service for Kubernetes (ACK) provides the cluster diagnostics feature. This feature allows you to troubleshoot node, pod, and network issues in an ACK cluster. This topic describes how to use the cluster diagnostics feature to diagnose an ACK cluster.").

## What do I do if CoreDNS pods are overloaded?

Causes

The number of replicated pods that are configured for CoreDNS is insufficient to handle DNS queries.

Symptom

-   The DNS resolution latency of CoreDNS is high, or DNS resolution failures of CoreDNS persist or occasionally occur on some or all nodes.
-   Check the status of CoreDNS pods and check whether the CPU and memory utilization is about to reach the upper limit.

Solutions

-   Use NodeLocal DNSCache to improve DNS resolution efficiency and reduce the load on CoreDNS. For more information, see [Configure NodeLocal DNSCache](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-nodelocal-dnscache#task-2008363 "ACK allows you to deploy NodeLocal DNSCache to improve the stability and performance of service discovery. NodeLocal DNSCache is implemented as a DaemonSet and runs a DNS caching agent on cluster nodes to improve the efficiency of DNS resolution for ACK clusters. This topic describes how to deploy and configure NodeLocal DNSCache for an application in an ACK cluster.").
-   Scale out CoreDNS pods to ensure that the peak CPU utilization of each pod is less than the amount of idle CPU resources of the node.

## What do I do if DNS queries are not evenly distributed among CoreDNS pods?

Causes

DNS queries are not evenly distributed among CoreDNS pods due to imbalanced pod scheduling or improper SessionAffinity settings of the kube-dns Service.

Symptom

-   The DNS resolution latency of CoreDNS is high, or DNS resolution failures of CoreDNS persist or occasionally occur on some or all nodes.
-   The status of CoreDNS pods shows that the CPU utilization is different among the pods.
-   The number of replicated pods that are configured for CoreDNS is less than two or multiple CoreDNS pods are deployed on the same node.

Solutions

-   Scale out CoreDNS pods and schedule the pods to different nodes.
-   You can delete the SessionAffinity parameter from the configuration of the kube-dns Service. For more information, see [Configure the kube-dns Service](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-ack-to-automatically-update-coredns#section-66f-5fj-cl0).

## What do I do if CoreDNS pods do not run as normal?

Causes

CoreDNS pods do not run as normal due to improper settings in the YAML file or the CoreDNS ConfigMap.

Symptom

-   The DNS resolution latency of CoreDNS is high, or DNS resolution failures of CoreDNS persist or occasionally occur on some or all nodes.
-   CoreDNS pods are not in the Running state or the number of pod restarts continuously increases.
-   The CoreDNS log data indicates that errors occurred.

Solutions

Check the status and operational logs of CoreDNS pods.

CoreDNS errors and solutions

  

Error

Cause

Solution

`/etc/coredns/Corefile:4 - Error during parsing: Unknown directive 'ready'`

The configurations in the CoreDNS ConfigMap are incompatible with the current CoreDNS version. The `Unknown directive` content in the error record indicates that the current CoreDNS version does not support the ready plug-in that is specified in Corefile.

Delete the ready plug-in from the CoreDNS ConfigMap in the kube-system namespace. If other plug-ins appear in the error log, delete the plug-ins from the ConfigMap.

`pkg/mod/k8s.io/client-go@v0.18.3/tools/cache/reflector.go:125: Failed to watch *v1.Pod: Get "https://192.168.0.1:443/api/v1/": dial tcp 192.168.0.1:443: connect: connection refused`

Connections to the Kubernetes API server are interrupted during the period when the log was generated.

If no DNS resolution error occurs in this period, the error is not caused by network connectivity issues. Otherwise, check the network connectivity of CoreDNS pods. For more information, see [Diagnose the network connectivity of the CoreDNS pod](#8).

`[ERROR] plugin/errors: 2 www.aliyun.com. A: read udp 172.20.6.53:58814->100.100.2.136:53: i/o timeout`

Connections to the upstream DNS servers cannot be established during the period when the log was generated.

## What do I do if DNS resolutions fail because the client is overloaded?

Causes

The ECS instance that hosts the pod that sends the DNS query to CoreDNS is fully loaded, which causes UDP packet loss.

Symptom

DNS resolution errors occur occasionally or during peak hours. The monitoring information about the ECS instance indicates an abnormal retransmission rate of the network interface controller (NIC) and an abnormal CPU utilization.

Solutions

-   [Submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) for troubleshooting.
-   Use NodeLocal DNSCache to improve DNS resolution efficiency and reduce the load on CoreDNS. For more information, see [Configure NodeLocal DNSCache](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-nodelocal-dnscache#task-2008363 "ACK allows you to deploy NodeLocal DNSCache to improve the stability and performance of service discovery. NodeLocal DNSCache is implemented as a DaemonSet and runs a DNS caching agent on cluster nodes to improve the efficiency of DNS resolution for ACK clusters. This topic describes how to deploy and configure NodeLocal DNSCache for an application in an ACK cluster.").

## What do I do if the conntrack table is full?

Causes

The conntrack table of the Linux kernel is full. As a result, requests that are sent over UDP or TCP cannot be processed.

Symptom

-   CoreDNS frequently fails to resolve domain names on some or all nodes in peak hours, but can resolve domain names as expected beyond peak hours
-   Run the `dmesg -H` command on the instance and check the log that is generated during the period in which the resolution fails. The log contains the keyword `conntrack full`.

Solutions

Increase the maximum number of entries in the conntrack table of the Linux kernel. For more information, see [How do I increase the maximum number of tracked connections in the conntrack table of the Linux kernel?](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-container-networks#section-jbl-6zq-9b5).

## What do I do if the autopath plug-in does not work as normal?

Causes

The autopath plug-in does not work as normal due to the defects of CoreDNS.

Symptom

-   The external domain name occasionally fails to be resolved or is occasionally resolved to a wrong IP address. However, the internal domain name is resolved as normal.
-   When the cluster creates containers at a high frequency, the internal domain name is resolved to a wrong IP address.

Solutions

Perform the following operations to disable the autopath plug-in:

1.  Run the `kubectl -n kube-system edit configmap coredns` command to modify the coredns ConfigMap.
2.  Delete `autopath @kubernetes`. Then, save the change and exit.
3.  Check the status and operational logs of the CoreDNS pods. If the log data contains the `reload` keyword, the new configuration is loaded.

## What do I do if DNS resolutions fail due to concurrent queries for A records and AAAA records?

Causes

Concurrent DNS queries for A records and AAAA records cause errors of the conntrack table of the Linux kernel, which results in UDP packet loss.

Symptom

-   DNS resolutions of CoreDNS occasionally fail.
-   The captured packets or the log of DNS queries to CoreDNS shows that queries for A records and AAAA records are initiated at the same time over the same port.

Solutions

-   Use NodeLocal DNSCache to improve DNS resolution efficiency and reduce the load on CoreDNS. For more information, see [Configure NodeLocal DNSCache](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-nodelocal-dnscache#task-2008363 "ACK allows you to deploy NodeLocal DNSCache to improve the stability and performance of service discovery. NodeLocal DNSCache is implemented as a DaemonSet and runs a DNS caching agent on cluster nodes to improve the efficiency of DNS resolution for ACK clusters. This topic describes how to deploy and configure NodeLocal DNSCache for an application in an ACK cluster.").
-   If the image that you use is based on CentOS or Ubuntu, add the `options timeout:2 attempts:3 rotate single-request-reopen` configuration.
-   If the image that you use is based on Alpine Linux, we recommend that you replace the image with an image that is based on another operating system. For more information, see [Alpine](https://github.com/gliderlabs/docker-alpine/blob/master/docs/caveats.md).
-   A variety of resolution errors may occur when applications written in PHP send DNS queries by using short-lived connections. If you use PHP cURL, you must add `CURL_IPRESOLVE_V4` to specify that domain names can be resolved only to IPv4 addresses. For more information, see [cURL functions](https://www.php.net/manual/zh/function.curl-setopt.php).

## What do I do if DNS resolutions fail due to IP Virtual Server (IPVS) errors?

Causes

The load balancing mode of kube-proxy is set to IPVS in your cluster. If you remove IPVS UDP backend pods from nodes that run CentOS or Alibaba Cloud Linux 2 whose kernel versions are earlier than 4.19.91-25.1.al7.x86\_64, source port conflicts occur when UDP packets are sent. As a result, the UDP packets are dropped.

Symptom

DNS resolutions occasionally fail when nodes are added to or removed from the cluster, nodes are shut down, or CoreDNS is scaled in. In most cases, this situation lasts for about 5 minutes.

Solutions

-   Use NodeLocal DNSCache to reduce packet loss in IPVS mode. For more information, see [Configure NodeLocal DNSCache](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-nodelocal-dnscache#task-2008363 "ACK allows you to deploy NodeLocal DNSCache to improve the stability and performance of service discovery. NodeLocal DNSCache is implemented as a DaemonSet and runs a DNS caching agent on cluster nodes to improve the efficiency of DNS resolution for ACK clusters. This topic describes how to deploy and configure NodeLocal DNSCache for an application in an ACK cluster.").
-   Shorten the timeout period of UDP sessions in IPVS mode. For more information, see [Change the UDP timeout period in IPVS mode](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-ack-to-automatically-update-coredns#section-m9z-3lo-iv4).

## What do I do if NodeLocal DNSCache doe not work?

Causes

-   DNSConfig is not injected into the application pods. The IP address of the kube-dns Service is configured as the address of the DNS server for the application pods.
-   The application pods are deployed by using an image based on Alpine Linux. As a result, DNS queries are concurrently sent to all nameservers, including the local DNS cache and CoreDNS pods.

Symptom

All DNS queries are sent to CoreDNS instead of NodeLocal DNSCache.

Solutions

-   Configure automatic injection for DNSConfig. For more information, see [Configure NodeLocal DNSCache](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-nodelocal-dnscache#task-2008363 "ACK allows you to deploy NodeLocal DNSCache to improve the stability and performance of service discovery. NodeLocal DNSCache is implemented as a DaemonSet and runs a DNS caching agent on cluster nodes to improve the efficiency of DNS resolution for ACK clusters. This topic describes how to deploy and configure NodeLocal DNSCache for an application in an ACK cluster.").
-   If the image that you use is based on Alpine Linux, we recommend that you replace the image with an image that is based on another operating system. For more information, see [Alpine](https://github.com/gliderlabs/docker-alpine/blob/master/docs/caveats.md).

## What do I do if domain names that are added to Alibaba Cloud DNS PrivateZone cannot be resolved?

Causes

Alibaba Cloud DNS PrivateZone does not support TCP. You must use UDP.

Symptom

When NodeLocal DNSCache is used, domain names that are added to Alibaba Cloud DNS PrivateZone cannot be resolved, the endpoints of Alibaba Cloud service APIs that contain vpc-proxy cannot be resolved, or domain names are resolved to wrong IP addresses.

Solutions

Add the `prefer_udp` configuration to CoreDNS. For more information, see [Configure CoreDNS](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-coredns#task-2165721 "CoreDNS is the default Domain Name System (DNS) server of Container Service for Kubernetes (ACK) clusters. This topic introduces the plug-ins provided by CoreDNS and how to configure the plug-ins in various scenarios.").

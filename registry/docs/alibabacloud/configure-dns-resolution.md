This topic describes how to set the dnsPolicy parameter to configure a DNS policy for each pod in a Container Service for Kubernetes (ACK) cluster. This topic also describes how to use the `HostAliases` parameter to configure a pod to resolve a domain name to the specified IP address.

## Prerequisites

-   An ACK managed cluster or ACK Serverless cluster is created. For more information, see [Create an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/) and [ACK Serverless quick start](/help/en/ack/serverless-kubernetes/getting-started/ask-quick-start#task-e3c-311-ydb).
    
-   [The kubeconfig file of your cluster is obtained and a kubectl client is connected to your cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/obtain-the-kubeconfig-file-of-a-cluster-and-use-kubectl-to-connect-to-the-cluster#task-2076136).
    

## Background information

For more information about how DNS resolution works in ACK clusters, see [DNS overview](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-discovery-dns-1/#title-nt9-n39-40j).

By default, ACK deploys a set of workloads in a cluster to run CoreDNS. A Service named **kube-dns** is deployed to expose these workloads to DNS queries in the cluster. Two backend pods named **coredns** are deployed for CoreDNS. DNS queries in the cluster are sent to the DNS server that is specified in the coredns pod configuration.

-   You can run the following command to query information about the kube-dns Service:
    
    ```
    kubectl get svc kube-dns -n kube-system
    ```
    
-   You can run the following command to query information about the coredns pods:
    
    ```
    kubectl get deployment coredns -n kube-system
    ```
    

## Set the dnsPolicy parameter to configure a DNS policy for a pod

You can use the dnsPolicy parameter to specify a DNS policy for a pod. ACK clusters support the following DNS policies:

-   ClusterFirst: This policy indicates that a pod uses CoreDNS to resolve domain names. This is the default DNS policy. The /etc/resolv.conf file contains the address of the DNS server that is provided by CoreDNS, which is kube-dns.
    
-   None: This policy indicates that a pod ignores the DNS settings of the ACK cluster. You must customize the DNS settings by using the dnsConfig parameter. Otherwise, the pod cannot resolve any domain name.
    
-   Default: This policy indicates that a pod inherits the DNS resolution settings from the node where the pod is deployed. In an ACK cluster, nodes are created based on Elastic Compute Service (ECS) instances. Therefore, a pod directly uses the /etc/resolv.conf file of the ECS-based node where the pod is deployed. This file contains the address of a DNS server that is provided by Alibaba Cloud DNS.
    
-   ClusterFirstWithHostNet: This policy indicates that a pod in HostNetwork mode uses the ClusterFirst policy. If you do not specify a policy for a pod, the pod uses the Default policy.
    

You can use the preceding DNS policies to meet business requirements in various scenarios.

### **Scenario 1: Use CoreDNS provided by ACK clusters to resolve domain names**

In this scenario, you must specify `dnsPolicy: ClusterFirst` for the DNS policy settings. Example:

```
apiVersion: v1
kind: Pod
metadata:
  name: alpine
  namespace: default
spec:
  containers:
  - image: alpine
    command:
      - sleep
      - "10000"
    imagePullPolicy: Always
    name: alpine
  dnsPolicy: ClusterFirst
```

### **Scenario 2: Customize DNS settings for a pod**

To customize DNS settings for a Deployment, you must specify `dnsPolicy: None` for the DNS policy settings. Example:

```
apiVersion: v1
kind: Pod
metadata:
  name: alpine
  namespace: default
spec:
  containers:
  - image: alpine
    command:
      - sleep
      - "10000"
    imagePullPolicy: Always
    name: alpine
  dnsPolicy: None
  dnsConfig:
    nameservers: ["169.254.xx.xx"]
    searches:
    - default.svc.cluster.local
    - svc.cluster.local
    - cluster.local
    options:
    - name: ndots
      value: "2"
```

The following table describes the parameters in the dnsConfig section.

**Parameter**

**Description**

nameservers

A list of IP addresses of DNS servers for the pod. You can specify up to three IP addresses. If you set dnsPolicy to `None` for a pod, you must specify at least one IP address. If you do not set dnsPolicy to None for a pod, this parameter is optional. The listed DNS server IP addresses will be added to the nameserver parameter of the DNS configuration file that is generated based on the value of dnsPolicy. Duplicate IP addresses are removed.

searches

A list of DNS search domains for hostname lookup in the pod. This parameter is optional. The listed DNS search domains will be added to the list of base search names that are generated based on the specified DNS policy. Duplicate domain names are removed. You can specify up to six search domains.

**Note**

If the DNS Server is unreachable, only the first search domain is attempted.

options

A list of optional items. Each item can contain a name (required) and a value (optional). The specified items will be added to the list of optional items that are generated based on the specified DNS policy. Duplicate items are removed. For more information about options, see [DNS resolution and caching policies](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/dns-resolution-policies-and-caching-policies#section-19k-8ho-3gu).

For more information, see [DNS for Services and Pods](https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/).

### **Scenario 3: Use the DNS settings of an ECS instance**

If your application pods do not need to access other Services deployed in the ACK cluster, you can specify `dnsPolicy: Default` for the DNS policy settings. In this scenario, DNS resolution is performed by Alibaba Cloud DNS and CoreDNS is not required. Example:

```
apiVersion: v1
kind: Pod
metadata:
  name: alpine
  namespace: default
spec:
  containers:
  - image: alpine
    command:
      - sleep
      - "10000"
    imagePullPolicy: Always
    name: alpine
  dnsPolicy: Default
```

### **Scenario 4: Enable pods in HostNetwork mode to access Services in an ACK cluster**

If you specify hostNetwork:true for the network settings of your application pods, your application pods can directly use the host network. In this case, the default DNS policy for a pod is Default. As a result, your application pods cannot access Services deployed in the ACK cluster. If you want to enable pods in HostNetwork mode to access Services deployed in the ACK cluster, you must specify `dnsPolicy: ClusterFirstWithHostNet` for the DNS policy settings. Example:

```
apiVersion: v1
kind: Pod
metadata:
  name: alpine
  namespace: default
spec:
  hostNetwork: true
  dnsPolicy: ClusterFirstWithHostNet
  containers:
  - image: alpine
    command:
      - sleep
      - "10000"
    imagePullPolicy: Always
    name: alpine
```

## Use the `hostAliases` parameter to configure a pod to resolve a domain name to the specified IP address

You can use one of the following methods to resolve a domain name to the specified IP address:

-   **Global configuration (**all pods resolve the domain name to the specified IP address**)**: To configure all pods to resolve a domain name to the specified IP address, enable the hosts plug-in for CoreDNS. For more information, see [Configure extended features based on CoreDNS](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-coredns#section-6jf-fgj-j2f).
    
-   **Individual pod configuration**: To configure a pod to resolve a domain name to the specified IP address, use the HostAliases parameter to modify the /etc/hosts file of the pod. Example:
    
    ```
    apiVersion: v1
    kind: Pod
    metadata:
      name: hostaliases-pod
    spec:
      hostAliases:
      - ip: "127.0.**.**"
        hostnames:
        - "foo.local"
        - "bar.local"
      - ip: "10.1.**.**"
        hostnames:
        - "foo.remote"
      containers:
      - name: cat-hosts
        image: busybox:1.28
        command:
        - cat
        args:
        - "/etc/hosts"
    ```
    
    The following code block shows the content of the initialized /etc/hosts file after you add the `hostAliases` parameter to the spec section of the pod:
    
    ```
    # Kubernetes-managed hosts file.
    127.0.**.**	localhost
    ::1	localhost ip6-localhost ip6-loopback
    fe00::0	ip6-localnet
    fe00::0	ip6-mcastprefix
    fe00::1	ip6-allnodes
    fe00::2	ip6-allrouters
    10.200.**.**	hostaliases-pod
    
    # Entries added by HostAliases.
    127.0.**.**	foo.local	bar.local
    10.1.**.**	foo.remote	bar.remote
    ```
    
    The foo.local, bar.local, and foo.remote domain names are mapped to specific IP addresses.
    

## **References**

-   For more information about how to optimize DNS settings, see [Best practices for DNS services](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/dns-best-practice).
    
-   For more information about DNS resolution policies and caching policies, see [DNS resolution policies and caching policies](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/dns-resolution-policies-and-caching-policies).

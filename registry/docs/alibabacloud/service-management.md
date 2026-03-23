In Kubernetes, a Service is an abstraction that exposes an application running on a group of pods as a network service. A Service provides a unified DNS name for these pods and enables load balancing among them. This topic describes how Kubernetes Services work, key considerations, and recommendations for choosing a Service type.

## **Terms**

**Service**

Accessing pods directly after they are created presents several issues:

-   Controllers, such as Deployments, can delete and recreate pods at any time, which makes access results unpredictable.
    
-   Pod IP addresses are dynamically assigned at startup and cannot be known in advance.
    
-   Applications often consist of multiple pods that run the same program image. Accessing each pod individually is impractical.
    

To address these issues, Kubernetes provides the Service object. The Service object offers a stable network interface and a persistent IP address for pods. A Service identifies a group of target pods using a label selector and distributes traffic evenly across all pods using load balancing. This approach resolves the problems of direct pod access and ensures high availability and operational efficiency for applications.

**Endpoint**

In Kubernetes, an Endpoint is a critical resource that a Service uses for service discovery. It tracks changes in pods that match the Service's selector in real time. When pods are deleted or recreated, their IP addresses change. The Endpoint immediately updates its stored pod IP addresses and port information to ensure that the Service routes traffic to the latest pods.

**IPVS**

IPVS is a load balancer based on the Linux Kernel LVS feature. It handles Service traffic by creating virtual IP addresses and distributing traffic to backend pods.

In Kubernetes, when you create a Service, kube-proxy sets rules in the IPVS table. These rules define how to forward traffic from the virtual IP address on Kubernetes nodes to backend pods. You can view the current IPVS routing table and rules on cluster nodes using the `ipvsadm` command.

**Important**

If the `ipvsadm` tool is not installed, you can run the `sudo yum install ipvsadm` command to install it.

**iptables**

iptables works through a set of configurable tables and chains. Each chain contains a set of rules that control packet flow.

In Kubernetes, when you create a Service, kube-proxy adds corresponding rules to iptables. These rules forward packets to the correct pods based on the Service's label selector. You can view the current iptables forwarding table and rules on cluster nodes using the `iptables -t nat -L` command.

## **Service types**

**Important**

When the [Cloud Controller Manager](/help/en/ack/product-overview/cloud-controller-manager) version is v2.5.0 or later, creating Classic Load Balancer (CLB) instances in the console is a whitelist feature. This feature supports only the pay-as-you-go billing method. To create a CLB-type Service in the console, you can submit a request on the [Quota Platform](https://quotas.console.alibabacloud.com/white-list-products/csk/quotas).

**Name**

**Description**

**Scenarios**

**Billing**

[ClusterIP](#376f12ef0bv3t)

The default Service type. A ClusterIP Service assigns a virtual IP address that is accessible only from within the cluster.

This Service type is used when services need to communicate only within the cluster and do not require external exposure.

For example, frontend application pods that are deployed in the cluster may need to access a backend database that is also deployed in the same cluster. The backend database can run as a ClusterIP Service.

No charge.

[NodePort](#6c408cb797iwj)

A NodePort Service opens a port on each node in the cluster. This allows external access to the Service at `<NodeIP>:<NodePort>`. This mechanism operates at Layer 4 (the transport layer) of the OSI model.

For temporary or low-traffic applications, you can expose a port to the external network.

For example, you can use a NodePort Service to deploy and debug a web application during testing. Unlike a LoadBalancer Service, a NodePort Service does not provide cross-node load balancing. Traffic is sent to a single node, which can easily cause resource bottlenecks.

This Service type is free of charge. To enable public network access, you can bind an EIP to the node. For more information about EIP billing, see [Billing overview](/help/en/eip/billing-overview).

[LoadBalancer](#39aaf0b74byy9)

The LoadBalancer Service type builds on the NodePort Service type by adding an external load balancer. This enables the smooth distribution of external traffic to multiple pods in the cluster. The Service automatically provides an external IP address that clients can use to access the service. It supports both Layer 4 (transport layer) TCP and UDP traffic and Layer 7 (application layer) HTTP and HTTPS traffic management.

This Service type is used when you run applications on a public cloud and require a stable, easy-to-manage external entry point.

For example, you can use this Service type for public services in production environments that must handle large volumes of external traffic and ensure high availability, such as web applications or API services.

**Important**

When you access a Service from within a Kubernetes cluster, we recommend that you use a `ClusterIP` Service. This is the most stable, efficient, and design-compliant approach.

In contrast, directly accessing a `LoadBalancer` Service from within the cluster provides inconsistent results. Its availability depends on multiple factors, such as:

-   The cloud provider's implementation of LoadBalancer.
    
-   The container network plugin (CNI) used by the cluster, such as Flannel, Terway, or Cilium.
    
-   The operating mode (iptables or IPVS) and version of `kube-proxy`.
    
-   The Service's `externalTrafficPolicy` setting (`Cluster` or `Local`).
    

Therefore, the behavior when you access a LoadBalancer IP address from within the cluster may vary significantly across different environments or Kubernetes versions. In some cases, the IP address may even become unreachable.

#### Example scenario: Flannel + IPVS + externalTrafficPolicy=Local

In a cluster that uses Flannel as the CNI plugin, when a `LoadBalancer` Service is configured with `externalTrafficPolicy: Local`:

-   If you access the external IP address of the LoadBalancer from a cluster node that does not host any backend pods:
    
    -   Kubernetes versions earlier than 1.24: The request is not forwarded correctly and access fails.
        
    -   Kubernetes 1.24 and later: `kube-proxy` can fall back to the `Cluster` behavior in `Local` mode to support internal cluster access. The request is successfully forwarded to backend pods on other nodes, and access succeeds.
        

You are charged for the Server Load Balancer instance. For more information, see

[CLB billing overview](/help/en/slb/classic-load-balancer/product-overview/billing-overview/) and

[NLB billing rules](/help/en/slb/network-load-balancer/product-overview/nlb-billable-items).

Headless Service

A Headless Service does not have a virtual IP address. When you perform a DNS query for the Service, a list of pod IP addresses is returned instead of a single Service IP address. This allows for direct discovery of and connection to specific pods.

The application needs to communicate directly with a specific backend pod (rather than through an agent or a load balancer).

For example, when you deploy a stateful application such as ClickHouse, you can use a Headless Service so that application pods can directly access each ClickHouse pod. This allows the pods to read data evenly or write data selectively, which improves data processing efficiency.

No charge.

ExternalName

An ExternalName Service maps an internal service name in the cluster to an external domain name. This mapping allows pods inside the cluster to access the external domain using the Service name.

The cluster needs to access a service exposed at a public domain name.

For example, if application pods need to access an external database domain, you can use an ExternalName Service to map the domain to an internal Service name. This enables direct access from within the cluster using the Service name.

No charge.

## How Services work

### **ClusterIP**

-   Creation and assignment
    
    When you create a ClusterIP Service in an ACK cluster, the cluster control plane assigns a virtual IP address (ClusterIP) that is accessible only from within the cluster.
    
-   Traffic forwarding
    
    When you access the ClusterIP, kube-proxy captures the traffic and forwards it to backend pods using round-robin scheduling.
    
-   Service discovery
    
    When you create a ClusterIP Service, CoreDNS registers a DNS record. This enables access through service name resolution. The format is `service-name.namespace.svc.cluster.local:port`, for example, `nginx.default.svc.cluster.local:80`.
    
-   Pod labels and endpoint tracking
    
    Each Service is defined by a label selector that determines which pods belong to its backend.
    
    The cluster control plane monitors pod changes in real time. When pods that match the Service's label selector are added, updated, or deleted, the control plane updates the Endpoint.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8751091771/CAEQUxiBgMCN0PH.4BkiIGVkZTQ4MTljZTBmZDQ0YzU4YWZlNTBlMzg1NzZhMTIx4418108_20240515095014.593.svg)

### **NodePort**

-   Creation and assignment
    
    When you create a NodePort Service, the cluster opens a port (NodePort) on each node to allow external access.
    
-   Traffic forwarding
    
    kube-proxy listens on the NodePort, which is automatically selected from the default range of 30000 to 32767. It routes external requests to the ClusterIP and then to the backend pods.
    
-   External access
    
    You can access the Service using the node's IP address and the static NodePort in the `<NodeIP>:<NodePort>` format as the external endpoint.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8751091771/CAEQUxiBgICcsvT.4BkiIDNmMjMyYmEzODU5YzRlNWY5NWFkMWE3MmU1MjIyMDIw4418108_20240515095014.593.svg)

### **LoadBalancer**

-   Creation and assignment
    
    When you create a LoadBalancer Service, the cluster control plane automatically interacts with the load balancing service to create a load balancer instance for traffic handling. For more information, see [Expose applications using a Service with an existing Server Load Balancer](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-an-existing-slb-instance-to-expose-an-application#task-1942045) and [Expose applications using a Service with an automatically created Server Load Balancer](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-an-automatically-created-slb-instance-to-expose-an-application#task-1942045).
    
-   Traffic forwarding
    
    When external traffic reaches the external IP address of the load balancer instance, it is routed to a port on the node and then forwarded to backend pods by kube-proxy.
    
-   Routing and health check configuration
    
    The load balancer automatically configures listening ports and performs health checks to ensure traffic is routed only to healthy pods.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9751091771/CAEQUxiBgICGkPj.4BkiIDU5OGEyZTVmZTUyZDQ4YWI5YjEzOTE3MjU0YzZiZDc44418108_20240515095014.593.svg)

## **External traffic policy**

LoadBalancer and NodePort Services support the `externalTrafficPolicy` configuration to control how external traffic is routed to the Service. This setting has different behaviors in clusters that use Terway and clusters that use Flannel.

**Note**

Log on to the [Container Service for Kubernetes (ACK) console](https://cs.console.alibabacloud.com). On the **Clusters** page, click the name of the target cluster. On the **Basic Information** tab, you can view the container network plugin that is used by the cluster.

### Flannel network plugin

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9751091771/CAEQUxiBgMDYmvz.4BkiIDY1ZmMyNjg5ODcwMjQ4Mzk4OTNlMzk3NTM1MThhY2Zh3963382_20230830144006.372.svg)

**Comparison item**

**Local**

**Cluster**

Load balancer backend attachment behavior

Only nodes that host pods are attached to the load balancer backend.

All nodes in the cluster are attached to the load balancer backend.

Load balancer quota usage

This mode uses less load balancer quota. For more information, see [Quota limits](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/considerations-for-configuring-a-loadbalancer-type-service-1#section-td0-69k-mnr).

Attaching all cluster nodes to the load balancer backend consumes a significant amount of quota. For more information, see [Quota limits](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/considerations-for-configuring-a-loadbalancer-type-service-1#section-td0-69k-mnr).

Internal cluster access to Service

Only nodes that host backend pods for the Service can access it.

Any node in the cluster can access the Service.

Pod load balancing

Pods are not balanced by default.

To balance traffic across pods, you can specify the wrr scheduler by adding the `service.beta.kubernetes.io/alibaba-cloud-loadbalancer-scheduler:"wrr"` annotation to the Service.

Pods are balanced by default.

Preserve source IP

Supported.

Not supported.

Session persistence

Supported.

Not supported.

Scenarios

This mode is suitable for applications that require the preservation of the client's source IP address, for example, for logging purposes.

This mode is suitable for scenarios where high availability is critical and the preservation of the source IP address is not required, for example, for large-scale web application clusters.

### Terway network plugin

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9751091771/CAEQUxiBgMDT7f7.4BkiIDU5ZGYxODI3ZmNiNTQ4MzdhZjBmNTU5NDYyMGYxYjg13963382_20230830144006.372.svg)

**Comparison item**

**Local**

**Cluster**

Load balancer backend attachment behavior

Pods are directly attached to the load balancer backend.

Load balancer quota usage

Only application pods are attached, resulting in lower quota consumption. For details, see [Quota limits](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/considerations-for-configuring-a-loadbalancer-type-service-1#section-td0-69k-mnr).

Internal cluster access to Service

When accessing the Service from within the cluster, traffic passes through kube-proxy on the node and is subject to the `externalTrafficPolicy` setting. Only nodes hosting backend pods for the Service can access it.

Any node in the cluster can access the Service.

Pod load balancing

Pods are balanced by default.

Preserve source IP

Supported.

Session persistence

Supported.

## **Considerations**

Before you use the load balancing features of Services, take note of the following considerations. For more information, see [Considerations for Service load balancing configuration](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/considerations-for-configuring-a-loadbalancer-type-service-1).

## **References**

-   [Expose applications using a Service with an existing Server Load Balancer](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-an-existing-slb-instance-to-expose-an-application)
    
-   [Expose applications using a Service with an automatically created Server Load Balancer](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-an-automatically-created-slb-instance-to-expose-an-application)
    
-   [Configure Classic Load Balancer (CLB) using annotations](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/add-annotations-to-the-yaml-file-of-a-service-to-configure-clb-instances)
    
-   [Configure Network Load Balancer (NLB) using annotations](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-nlb-instances-by-using-annotations)
    
-   [Service FAQ](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-faq#task-2039653), [Troubleshoot Service issues](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/service-troubleshooting-2)

ACK provides the following Container Network Interface (CNI) plug-ins: Terway and Flannel. This topic compares the features and applicable scenarios of Terway and Flannel.

-   Terway is a network plug-in developed by Alibaba Cloud. The plug-in builds networks based on elastic network interfaces (ENIs). Terway supports the use of extended Berkeley Packet Filter (eBPF) to accelerate network traffic. Terway also supports network policies and pod-level switches and security groups. Terway is suitable for scenarios such as high-performance computing, gaming, and microservices that require large nodes, and high network performance and security.
    
-   Flannel is an open source network plug-in provided by the community. Flannel uses the Virtual Private Cloud (VPC) of Alibaba Cloud in ACK. Packets are forwarded based on the VPC route table. Flannel is suitable for scenarios that require smaller nodes, simplified network configuration, and no requirements for custom control over the container network.
    

**Important**

-   The container network plug-in must be installed when you create a cluster and cannot be changed after the cluster is created.
    
-   When using Flannel, ALB Ingress only supports forwarding requests to NodePort and LoadBalancer Services, and does not support ClusterIP Services.
    

**Item**

**Terway**

**Flannel**

Network performance

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8602766471/CAEQNBiBgMCVlPfgqBkiIDI3OWY4OTZkYzRhMTRlZWE4Mzc3ZTlmOTg2ZWUwN2Yz4881926_20250120094106.935.svg)

-   Terway outperforms the community version of Flannel in terms of TCP Reverse Repeatability (TCP RR), UDP Packets Per Second(UDP PPS), bandwidth, and latency.
    
    **Note**
    
    The test data is the theoretical value based on the ecs.ebmg5s.24xlarge instance. The actual data is subject to your operating environment. For more information, see [Alibaba Cloud Native Community](https://www.alibabacloud.com/blog/how-does-alibaba-cloud-build-high-performance-cloud-native-pod-networks-in-production-environments_596590).
    
-   Terway supports the exclusive ENI mode: Pods have exclusive ENIs. This mode provides high network performance and is suitable for scenarios such as high-performance computing, gaming, and microservices.
    
-   Terway supports the shared ENI DataPath V2 acceleration mode: DataPath V2 is an updated version of the IPVLAN solution. When pods access endpoints in a cluster, the pods can bypass the network protocol stack of nodes by using eBPF to accelerate network access.
    

Node quota

When you use Terway, the maximum number of nodes depends on the capacity of a single cluster.

-   ACK Pro cluster: By default, 5000 nodes are supported. Up to 15000 nodes are supported.
    
-   ACK Basic cluster: 10 nodes.
    

When Flannel is used, the maximum number of nodes depends on the number of VPC route table entries and the capacity of the cluster.

VPC route table entries: By default, 200 entries are supported. After you apply to increase the quota, up to 1000 entries are supported. One node corresponds to one entry in a cluster. Up to 1000 nodes are supported.

-   ACK Pro cluster: By default, 200 nodes are supported. Up to 1000 nodes are supported.
    
-   ACK Basic cluster: 10 nodes.
    

Number of pods on a node

Pods use the ENI of the node. The number of pods on a node depends on the specifications and metrics of the node, such as the number of **ENIs** and the number of **private IPv4 addresses per ENI**.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0059467371/p904636.png)

The preceding figure shows an ECS instance of the **Compute-intensive Type c7**, ecs.c7.4xlarge, and 16 vCPU 32 GiB specifications.

-   Up to 210 pods can be created in shared ENI mode.
    
-   Up to seven pods can be created in exclusive ENI mode.
    

**Compute-intensive Type c6** and **Compute-intensive Type c7** instances have the same number of ENIs. However, the difference in the numbers of private IPv4 addresses per ENI allows **Compute-intensive Type c6** to create up to 140 pods in inclusive ENI mode. For more information, see [Method for calculating the maximum number of pods on a node](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-terway#99aa011b071mr).

The number of pods on a node depends on the **number of pods** and subnet mask that you set when you specify the **Pod CIDR Block** parameter.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0059467371/p904543.png)

The preceding figure shows that the CIDR block of pods in the ACK Pro cluster is 172.16.0.0/20. Each node can run up to 256 pods. Up to 16 nodes can be deployed in the ACK Pro cluster.

**Important**

After you configure Flannel, you cannot change the maximum number of nodes.

Pod CIDR block

-   The CIDR block of the pod is allocated from the VPC CIDR block. Therefore, the consumption of VPC addresses is high. We recommend that you plan a sufficient VPC CIDR block before you use the CIDR block.
    
-   The CIDR block of the pod cannot overlap with the CIDR block of the Service. The CIDR block cannot be modified.
    
-   You can add vSwitches to scale out the CIDR block of the pod.
    

-   The CIDR block of the pod is independent of the VPC CIDR block. Flannel allocates a subnet from the configured CIDR block to each node in the cluster. The IP addresses of all pods in the node are allocated from the subnet.
    
-   CIDR block of the pods, CIDR block of the VPC, and Service CIDR block are independent of each other and cannot overlap. The CIDR blocks cannot be modified.
    
-   CIDR block of the pod cannot be scaled out.
    

Network security

-   You can configure a separate vSwitch and a separate security group for a pod.
    
-   Kubernetes-native network policies are supported to configure custom access control between containers.
    

-   You cannot configure independent vSwitches and security groups for pods.
    
-   NetworkPolicy is not supported.
    

IPv4/IPv6 dual stack

IPv4/IPv6 dual stack is supported.

IPv4/IPv6 dual stack is not supported.

**Note**

The Flannel plug-in used in ACK is modified to adapt to the Alibaba Cloud environment and is not synchronized with the open source community. For more information about the release notes of Flannel, see [Flannel](/help/en/ack/product-overview/flannel).

Fixed IP addresses of pods

You can specify a static IP address for each pod.

You cannot specify a static IP address for each pod.

Session persistence

The backend server of the SLB instance directly connects to pods and relies on the session persistence feature to ensure uninterrupted service when the backend pods change.

The backend server of the SLB instance uses NodePort to connect to a pod. The traffic is interrupted when the pod changes, which may lead to service retries.

Accesses between multiple clusters

Pod in different clusters can communicate when the relevant ports are opened in security group rules.

Not supported.

Retention of pod source IP addresses

The source IP addresses used by pods to access other endpoints in the VPC are all pod IP addresses. This facilitates auditing.

If a pod accesses another endpoint in a VPC, the source IP address is the node IP address. The pod IP address cannot be retained.

## **What to do next**

-   After you create a cluster, you cannot modify the pod CIDR block, Service CIDR block, or the node CIDR block. The preceding CIDR blocks limit the maximum number of pods, Services, and nodes that can be deployed in the cluster. If you want to enable logical network isolation between different resources, make sure that the CIDR blocks of the resources do not overlap with each other. This also allows you to configure access control and custom routes. We recommend that you plan the CIDR block before you create a Kubernetes cluster. For more information, see [Network planning of an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/kubernetes-cluster-network-planning).
    
-   After you plan the CIDR block:
    
    -   If you want to use Terway, install Terway when you create a cluster. For more information, see [Work with Terway](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-terway).
        
    -   If you want to use Flannel, install Flannel when you create a cluster. For more information, see [Work with Flannel](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-flannel).
        

## **References**

-   For more information about how to limit the number of nodes in a cluster and how to increase the quota, see [Quotas and limits](/help/en/ack/product-overview/limits).
    
-   For more information about FAQs when you use container networks, see [FAQs about container networks](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-container-networks).

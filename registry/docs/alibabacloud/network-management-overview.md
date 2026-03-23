You can create ACK Edge clusters to connect devices in data centers and edge devices to Container Service for Kubernetes (ACK), use features provided by ACK, and manage on-premises computing resources. This topic describes the key concepts and network architectures used in ACK Edge cluster network, including cloud-edge connection network, Container Network Interface (CNI), Service, and Ingress. Understanding these terms helps you optimize application deployment models and network access methods.

## Cloud-edge network connection modes

ACK Edge clusters can be connected in public network mode or private network mode.

-   Public network mode: On-premises data centers and edge devices are connected through Internet NAT gateways or public network interface controllers (NICs), enabling access to the ACK control planes and other Alibaba Cloud services.
    
-   Private network mode: Computing devices in data centers and edge devices are connected through leased lines, VPN gateways, or other private networks, enabling access to ACK control planes hosted on the cloud and other Alibaba Cloud services. The following figure uses [Express Connect](/help/en/express-connect/product-overview/what-is-express-connect/) of Alibaba Cloud as an example.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6096585671/CAEQUBiBgICk14eV2RkiIDFiZDIxZjk4MmUxYjQ2MzM5Mjg1MmExMjE5MzU1YWYz4657117_20240911150612.520.svg)

## Cloud-edge O&M communication components

ACK Edge clusters use a cloud-edge collaboration architecture in which the central cloud manages edge data centers and edge devices. Due to the fact that computing devices are often distributed across multiple regions and network domains, direct communication between the central cloud and the edge side is not possible.

To meet the O&M and monitoring requirements of the central cloud for edge devices, two solutions are available:

-   Private network communication: Connect the virtual private cloud (VPC) of the central cloud with data centers or devices at the edge through private networks to enable communication between the cloud and the edge.
    
-   Tunneling over the Internet: Use the cloud-edge O&M communication component Raven to establish a reverse tunnel over the Internet. This reverse tunnel facilitates transfers of O&M and monitoring data between the cloud and the edge. Make sure that edge data centers or devices can access the Internet. For more information, see [Cross-region O&M communication component Raven](/help/en/ack/ack-edge/user-guide/cloud-edge-communication-component-raven-overview).
    

## CNI

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6096585671/CAEQTxiBgIDejp6J2BkiIDBlODc3NGUyZGM0ZDQ3OTI4Yjk2ODZmZjUyZTYzZThj3963382_20230830144006.372.svg)

Kubernetes uses [CNI](https://github.com/containernetworking/cni/tree/main) plug-ins to enable and standardize network communication between containers:

-   The status of a pod in the container network varies based on the lifecycle phase of the pod. For example, when a pod is created, it is added to the container network. When a pod is deleted, it is removed from the container network.
    
-   Each pod in the container network is assigned a unique IP address to identify the pod.
    
-   Pods can communicate with endpoints in clusters and endpoints outside clusters.
    

[CNI plug-ins](https://kubernetes.io/docs/concepts/extend-kubernetes/compute-storage-net/network-plugins/) are responsible for the implementation of the container network. The CNI plug-in that you use determines how to allocate IP addresses to pods, whether to use overlay networks, how to forward traffic within the cluster, and how to manage access to pods. Well-known open source CNI plug-ins include Calico, Flannel, and Cilium.

ACK Edge clusters support the network plug-ins Flannel and Terway Edge, each with distinct features. Before you create a cluster, refer to the following sections to select the appropriate network plug-in.

**Important**

Once the cluster is created, you cannot switch between Terway Edge and Flannel.

### **Flannel (**overlay networks for containers**)**

In ACK Edge clusters, Flannel operates in Virtual Extensible Local Area Network (VXLAN) mode to establish a container network over the Layer 3 host network, enabling cross-host pods communication.

The Flannel network plug-in ensures that the CIDR block of pods does not overlap with the CIDR block of the VPC. The CIDR block of pods is evenly divided and allocated to the nodes in the cluster. Each pod on a node is assigned an IP address that belongs to the CIDR block of the node. The Flannel network plug-in has the following features:

-   The CIDR block of pods does not overlap with the CIDR block of the VPC.
    
-   Container packets are encapsulated by the host using VXLAN for transmission.
    
-   No need for additional configuration of external network devices and can be used out of the box.
    

For more information about the Flannel network plug-in, see [Flannel](/help/en/ack/ack-edge/user-guide/flannel-network-plugin).

### **Terway Edge (**underlay networks for **containers)**

Terway Edge adopts a cloud-native network solution within the cloud node pool. It configures the container network by using elastic network interfaces (ENIs). ENIs are virtual NICs that assign IP addresses within a VPC to pods. For an edge node pool, you need to specify a CIDR block for pods. Containers will obtain IP addresses from this CIDR block. The Terway Edge network plug-in has the following features:

-   The CIDR block of cloud pods and Elastic Compute Service (ECS) instances fall within the IP address range of the VPC and are on the same network plane.
    
-   The CIDR block of edge pods does not overlap with the CIDR block of the host.
    
-   Communication between pods without encapsulation, offering efficiency superior to the overlay network.
    
-   Configuration of external network devices with routes is necessary for container packet transmission.
    
-   Support for direct access to containers within the cluster from external hosts, containers, and cloud services through the pod IP.
    

For more information about the Terway Edge network plug-in, see [Terway Edge network plugin](/help/en/ack/ack-edge/user-guide/terway-edge-network-plug-in-introduction).

## Service overview

A Service is a method for exposing the applications by providing an entry point to a group of pods. ACK provides the following types of Services to handle requests from different sources and clients:

**Type**

**Description**

ClusterIP

A ClusterIP Service is used to handle access within the cluster. If your application requires internal cluster exposure, you can create a ClusterIP Service.

**Note**

By default, ClusterIP is selected when you create a Service.

NodePort

A NodePort Service is used to expose an application to the Internet. You can use the IP address and port of a cluster node to expose your application. This way, your application can be accessed through the node IP address and port.

LoadBalancer

A LoadBalancer Service is used to expose an application to the Internet. A LoadBalancer Service uses an SLB instance to expose applications. Therefore, LoadBalancer Services provide higher availability and performance than NodePort Services. For more information about how to use a LoadBalancer Service to expose applications, see [Use LoadBalancer Services to expose applications](/help/en/ack/ack-edge/user-guide/expose-an-application-by-using-a-service-of-the-load-balancing-type).

Headless Service

A Headless Service is defined by setting the `clusterIP` field to `None` in the Service configuration file. A Headless Service does not have a fixed virtual IP address (VIP). When a client accesses the domain of the Service, DNS returns the IP addresses of all backend pods. The client must use DNS load balancing to balance the loads across pods.

ExternalName

An ExternalName Service is used to map a Service to an external domain name. This allows pods in the cluster to access the external domain name by using the Service.

In ACK Edge clusters, computing resources are often spread across different network domains. The following features are provided for distributed scenarios:

**Feature**

**Description**

Service topology

Service topology ensures that client requests are directed to backend pods within the same network domain or on the same node. Therefore, communication between clients and service pods located in different network domains is restricted. For more information, see [Configure a Service topology](/help/en/ack/ack-edge/user-guide/configure-a-service-topology).

Port fencing for NodePort Service

For port isolation of NodePort Services across multiple network domains, you can configure NodePort listening based on node pools. For more information, see [Configure NodePort listening based on node pools](/help/en/ack/ack-edge/user-guide/nodeport-service-isolation).

## Ingress overview

In ACK Edge clusters, Services support Layer 4 load balancing. However, Ingresses manage external access to Services in the cluster at Layer 7. An Ingress functions as an access point that exposes multiple Services in the cluster. You can use Ingresses to configure different Layer 7 forwarding rules. For example, you can forward requests to different Services based on domain names or paths. For more information, see [Ingress overview](/help/en/ack/ack-edge/user-guide/edge-cluster-ingress-overview).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6096585671/CAEQTxiBgICh0dy51xkiIGFmZDNmMDNkYzJjZDQ1NjJiZTQ1NDU1ZDg3ZDg4ZTQ23963382_20230830144006.372.svg)

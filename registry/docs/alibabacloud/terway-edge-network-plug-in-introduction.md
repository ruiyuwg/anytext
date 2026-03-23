This topic describes how to use Terway Edge as the Container Network Interface (CNI) plug-in to create an underlay network for communication in Container Service for Kubernetes (ACK) Edge clusters.

## Network architecture

Differing from Terway in ACK managed Pro clusters, Terway Edge is deployed in different forms on the cloud and the edge sides. The node pool on the cloud uses the [Terway network plug-in](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/terway/), which is consistent with that used in ACK Pro clusters, while the node pool on the edge side uses the Flannel plug-in.

-   Communication between containers within a domain: Communication between containers within the cloud node pool and within the edge node pool is completed within their respective network domains without additional configuration.
    
-   Communication between containers across domains: You must establish a network connection through Express Connect circuits and configure the corresponding routes on Virtual Border Routers (VBRs). The following figure shows that the CIDR block of the virtual private cloud (VPC) is 192.168.0.0/16, and the CIDR block of edge containers is 10.0.0.0/16.
    
-   Cloud-to-edge communication: On the VBRs of cloud containers, configure the CIDR block for edge containers (10.0.0.0/16) and connect to routing devices in the data center through Express Connect circuits. The Flannel plug-in at the edge can advertise Border Gateway Protocol (BGP) CIDR blocks and routes to the routing devices of the data center. This configuration enables network communication from cloud containers to edge containers.
    
-   Edge-to-cloud communication: On the routing devices of the edge data center, configure routes to the CIDR block of cloud containers (192.168.0.0/16) and connect to VBRs through Express Connect circuits. Additionally, on the VBRs of cloud containers, configure a route for this CIDR block to the corresponding VPC. This configuration enables network communication from edge containers to cloud containers.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0377622471/CAEQLhiBgMDNyZ_IkRkiIGNmNjQxMTQ4NTk4ZTRkOGZhY2MxMDZiMDExN2Y2Yzkx4665261_20240905173236.583.svg)

## Precautions

-   When you use the Terway Edge network plug-in, the gateway device at the edge (vSwitch) must support BGP and have the capability to configure BGP peers with nodes in the cluster.
    
-   On the data center gateway, make sure that the container CIDR block does not overlap with any other CIDR blocks.
    

## **Cloud network CNI**

In ACK Edge clusters, cloud node pools use the Terway network plug-in. Terway is a cloud-native container network solution based on the Elastic Network Interface (ENI) provided by Alibaba Cloud. This plug-in assigns IP addresses within a VPC to pods and offers the following features:

-   Containers and VMs, such as Elastic Compute Service (ECS) instances, reside at the same network layer.
    
-   Network devices that are allocated to containers, such as the ENI, can be used for communication without the need to use packet encapsulation or route tables.
    

For more information, see [Terway](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/network/#4f026610d4zfk).

**Important**

Terway configurations must be modified through the ACK console. Do not modify the `eni_config` ConfigMap through `kubectl`, as this may cause configuration overrides during component updates, potentially resulting in network failures.

## Edge network CNI

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0377622471/CAEQLhiBgMCwzMHIkRkiIGIwM2U0OWJmNzQzYzQ2ZDBiYzkxODc2NGQ2MjBjZWZm4665261_20240905175721.172.svg)

In ACK Edge clusters, edge node pools use the Flannel network plug-in. Flannel provides a Route mode that allows to deploy containers in underlay networks. This plug-in offers the following features:

-   The CIDR block of pods is evenly divided and allocated to the nodes in the cluster. Each pod on a node is assigned an IP address that belongs to the CIDR block of the node.
    
-   Flannel configures routing rules in the host network stack for communication to be forwarded through the host routes to the host on which the destination pod runs.
    
-   Flannel can advertise BGP CIDR blocks of the current network domain to vSwitches. For cross-domain network requests, traffic is routed to the gateways of the destination network domain through vSwitches and BGP paths, and is then forwarded to the destination pod.

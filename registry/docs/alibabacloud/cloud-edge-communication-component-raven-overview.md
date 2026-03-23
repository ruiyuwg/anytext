In the ACK Edge cluster, the cross-region O&M communication component Raven provides powerful cross-network domain communication, and supports efficient cloud-edge operations in multi-region environments. This topic introduces the terms used in Raven, the features of Raven, and how Raven works.

## **Background information**

ACK Edge clusters use a cloud-edge collaboration architecture in which the central cloud manages edge data centers and edge devices. By setting up control planes of ACK Edge clusters deployed on the cloud, data centers and infrastructure resources that reside at the edge use network connections to communicate with the control plane. This allows you to manage a large number of edge devices in a cloud-native manner.

In edge computing, computing devices are usually distributed across isolated regions and network domains, which is also a typical feature of edge computing. Therefore, edge devices in the cluster are usually managed in groups and network connection between nodes in different groups are not established. As a result, applications on the nodes are isolated from each other. The following figure shows that data centers or edge devices establish connections with the public endpoint of the ACK control plane over the Internet. Data centers, edge devices, and virtual private clouds (VPCs) belong to different network planes.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4989967371/CAEQJxiBgMCF5cnegxkiIGEzZmMwNGIyYmZkNTQzMmFhM2NhNTRlNTZjOGM1YThj4467242_20240626132652.170.svg)

## Component introduction

ACK Edge clusters use node pools to manage nodes in multiple regions. Nodes in different node pools are located in different network domains, cannot communicate directly, and may have node IP conflicts. To achieve centralized monitoring and operations in such scenarios, the Raven Agent component is provided for ACK Edge cluster that run Kubernetes 1.26.3 and later to support host and container-level monitoring and operations.

### **How it works**

-   Select a node in the cluster as the gateway node in each network domain. Isolated edge devices are their own gateways.
    
-   The Raven Agent component is deployed as a DaemonSet and runs on all nodes of the cluster. It uses the host network mode to build encrypted tunnels between gateway nodes.
    
-   On-cloud components such as APIServer, MetricsServer, and Prometheus, communicate with hosts, containers, and services in other network domains through gateway nodes.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4989967371/CAEQJxiBgICEqOregxkiIDEwZmNhOTI4NmIwNTQyOWJhM2VkZTQwN2IyMzU4YTk34467242_20240626133911.141.svg)

### **Features**

-   You need to select and purchase at least one Elastic Compute Service (ECS) instance that serves as the cloud gateway node when you create an ACK Edge cluster.
    
-   If hosts at the edge interact with the ACK Edge control plane deployed on the cloud over the Internet, you need to purchase a Classic Load Balancer (CLB) instance and an elastic IP address (EIP) instance, and configure network access control lists (ACLs). These resources are used to establish encrypted network tunnels between gateway nodes in different node pools.
    
-   Raven provides the proxy mode and tunnel mode for cloud-edge communication.
    
    -   The proxy mode supports cross-domain host network communication for services such as APIServer, MetricsServer, and Prometheus. It also supports kubectl commands such as `kubectl logs/exec/attach/top`.
        
    -   The tunnel mode only supports node pools with inter-node connection, providing cloud-edge container network communication. For example, the Prometheus component can use the communication to collect metrics from containers at the edge.
        
-   Raven supports cloud-edge communication among hosts in different regions or network domains with conflicting IP addresses.
    

## Component architecture

Raven consists of the control plane component **ack-edge-yurt-manager** and the data plane component **raven-agent-ds**. Raven requires a custom cluster resource gateway to record node information and configuration information. For more information, see [Use the cross-region O&M communication component Raven](/help/en/ack/ack-edge/user-guide/using-the-cloud-side-communication-raven-component).

-   The **ack-edge-yurt-manager** component divides network domains based on node pools and creates gateways.
    
-   The **raven-agent-ds** component is deployed as a DaemonSet and runs on each node of the ACK cluster. It serves as a proxy to configure routes or VPN tunnels between the gateway nodes.
    

Raven provides two cloud-edge communication modes.

-   Proxy mode: Create a reverse proxy to allow cross-host communication. The gateway node serves as a proxy to forward cross-domain requests at Layer 7 based on a combination of node name and port in the NodeName+Port format.
    
-   Tunnel mode: Create VPN tunnels for cross-domain communication among containers. All cross-domain traffic will be forwarded by the gateway node of each edge node pool to achieve cross-domain communication among containers.
    

### **Proxy mode**

-   The elected edge gateway node will create an encrypted reverse channel with the gateway node in the cloud.
    
-   The solo node is a gateway node and can directly create a tunnel with the gateway node in the cloud.
    
-   Cross-domain requests from the cloud are redirected by the gateway nodes in the cloud to the gateway nodes at the edge before they reach the target services in a network domain.
    

### **Tunnel mode**

-   Only node pools with inter-node connection are supported.
    
-   The elected edge gateway node will create an IPSec-VPN tunnel with the gateway node in the cloud.
    
-   The Raven agent creates a Virtual eXtensible Local-Area Network (VXLAN) in the network domain, forwarding cross-domain container network requests to the gateway node.
    
-   Flannel VXLAN is used to enable communication between containers in this network domain.
    
-   Cross-domain requests are forwarded to the gateway nodes through the Raven VXLAN. This allows containers to communicate with each other across network domains through the VPN tunnel.
    

**Important**

Data loss may occur during cross-domain communication through the Internet. Do not use this feature to transmit business-critical data. If you encounter issues when you use the tunnel mode or have any suggestions, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) to contact the ACK technical team.

## **References**

-   For more information about how to change the communication mode, configure network ACLs, or configure custom gateways, see [Use the cross-region O&M communication component Raven](/help/en/ack/ack-edge/user-guide/using-the-cloud-side-communication-raven-component).
    
-   The raven-agent-ds component will be continuously updated. For more information about the release notes, see [raven-agent-ds](/help/en/ack/product-overview/raven-agent-ds).

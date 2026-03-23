ACK Edge supports two types of container network plugins. You must select a network plugin when you create a cluster because the plugin cannot be changed after the cluster is created. This topic compares the two network plugins.

## Plugin feature comparison

ACK Edge clusters support the following two container network plugins:

-   Flannel: an Overlay container network plugin that uses Virtual Extensible LAN (VXLAN) mode. For more information, see [Flannel network plugin](/help/en/ack/ack-edge/user-guide/flannel-network-plugin).
    
-   Terway Edge: an Underlay network plugin. For more information, see [Terway Edge network plugin](/help/en/ack/ack-edge/user-guide/terway-edge-network-plug-in-introduction).
    

**Comparison Item**

**Terway Edge**

**Flannel VXLAN**

Plugin source

A network plugin developed by Alibaba Cloud.

A network plugin provided by the Flannel community.

Scenarios

-   Management of self-managed data centers or ENS instances.
    
-   Scenarios that involve large-scale clusters or require high network efficiency.
    

-   Management of edge devices or compute instances from other cloud providers.
    
-   Small-scale scenarios or scenarios with geographically dispersed devices.
    

Pod CIDR block

-   In the cloud, you can scale out the pod CIDR block or directly use a VPC CIDR block.
    
-   At the edge, the pod CIDR block cannot be scaled out. You must specify it when you create the cluster.
    

The pod CIDR block cannot be scaled out. You must specify it when you create the cluster.

Network performance

High network performance, with an approximately 20% improvement compared to VXLAN packet encapsulation.

Moderate network performance. Requires VXLAN packet encapsulation.

Integration with cloud products

Seamlessly integrates with cloud products, such as CLB, ALB, NLB, and ECI.

Limited integration with cloud products. Some features are unavailable.

Container communication

External clients can directly access container IP addresses.

External clients cannot directly access container IP addresses.

Network plugin mode

Underlay mode. Containers and compute resources are on the same network plane.

Overlay mode. Containers and compute resources are not on the same network plane.

Conditions for cross-network domain container communication

Container communication across local area networks (LANs), such as between cloud and edge containers or between containers in multiple LANs, requires the following conditions: (1) A leased line connects the nodes to the cloud VPC. (2) The node vSwitches must support Border Gateway Protocol (BGP) to accept route advertisements.

Container communication across different LANs requires Layer 3 connectivity between the nodes.

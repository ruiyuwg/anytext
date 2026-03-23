To ensure business continuity and stability, Container Service for Kubernetes (ACK) Edge offers autonomy and offline maintenance capabilities for edge nodes in complex network environments. You can manage diverse node resource types across cloud and on-premises environments in ACK Edge clusters. This topic describes the node management features available in ACK Edge.

## Supported node types

### **Cloud node types**

If your business requires hybrid cloud deployment, you can manage Elastic Compute Service (ECS) nodes in the cloud through the cloud node pools of ACK Edge clusters, taking full advantage of the cloud capabilities for elasticity, storage, and networking. The cloud nodes in ACK Edge clusters offer node management capabilities that are consistent with those in the ACK Pro cluster. For more information, see [Node management](/help/en/doc-detail/476587.html).

### **Edge node types**

-   ENS instances: You can manage Edge Node Service (ENS) instances through edge node pools of ACK Edge clusters, achieving geographically proximate access. For more information, see [ENS management](/help/en/ack/ack-edge/user-guide/ens-management-overview/).
    
-   Cross-region ECS nodes: Similar to ACK Pro clusters, cloud node pools in ACK Edge clusters can manage only ECS nodes within the same virtual private cloud (VPC). However, through edge node pools, ACK Edge clusters support managing ECS nodes across different regions.
    
-   Other edge nodes: ACK Edge clusters support managing IaaS resources outside of Alibaba Cloud through the use of edge node pools, such as on-premises data centers, nodes from other cloud providers, and nodes located in buildings, venues, factories, outlets, vehicles, and ships.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7963125371/CAEQLhiBgIDh4K2clxkiIGIxNGYwYzE2NTM3MjQ3NWViZjZlYTkxOTY2MDkzYjZi4709810_20241015141922.893.svg)

## Supported node management operations

### **Cloud nodes**

For cloud nodes, the node management operations supported by ACK Edge clusters are consistent with those of ACK Pro clusters. For more information, see [Node management](/help/en/ack/node-18).

### **Edge nodes**

You can perform some basic management operations on edge nodes:

-   Add edge nodes to a specified node pool in the ACK Edge cluster. For more information, see [Add edge nodes](/help/en/ack/ack-edge/user-guide/add-an-edge-node#section-km1-ahs-gyw).
    
-   Manually upgrade edge nodes each time you upgrade the connected cluster, because they are not automatically updated. For more information, see [Upgrade an edge node](/help/en/ack/ack-edge/user-guide/upgrade-edge-node).
    
-   **Remove nodes** from the ACK Edge cluster. For more information, see [Remove edge nodes](/help/en/ack/ack-edge/user-guide/remove-edge-nodes).
    

You can connect edge nodes to an ACK Edge cluster using either public network mode or private network mode. Compared to networks within a VPC, edge nodes face challenges due to network instability. To address the complex network conditions of edge nodes, ACK Edge offers robust autonomy and offline maintenance capabilities to ensure the continuous and stable operation of services.

-   Autonomy: When the network between the edge and the cloud is disconnected, ACK Edge clusters enable applications on edge nodes to run smoothly without concern for eviction or migration to other edge nodes. For more information, see [Configure edge node autonomy](/help/en/ack/ack-edge/user-guide/configure-node-autonomy).
    
-   Offline maintenance: When the network is disconnected, ACK Edge clusters allow for cluster changes without relying on the cloud control plane. For more information, see [Offline O&M for edge nodes](/help/en/ack/ack-edge/user-guide/edge-node-offline-operation-and-maintenance-tool).
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7963125371/CAEQLhiBgIDb7Y6XlxkiIGYwYzI0Nzg1NGNmZTQ2NmY4Zjc0ZGRjNzM4NjhkM2Mw4709810_20241015151636.968.svg)

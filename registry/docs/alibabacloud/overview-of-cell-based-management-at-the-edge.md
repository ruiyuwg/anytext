In cloud-edge collaboration scenarios, nodes that belong to different groups are isolated from each other. For example, these nodes may be disconnected, may not share the same resources, may have heterogeneous resources, or may run applications that are independently deployed. Container Service for Kubernetes (ACK) Edge provides the node pool feature, which organizes nodes into node pools based on specific attributes. This allows for unified management and O&M of nodes across different groups from the node pool level. This topic introduces node pools and describes the types of node pools and how nodes are managed by node pools.

## Types of node pools

In cloud-edge collaboration scenarios, ACK Edge provides the following types of node pools: on-cloud node pools and edge node pools.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6959967371/CAEQLxiBgMC445SHmxkiIGJkMGZkMWIyNjBjNjRiYTI5MzUxMDY4ZWI4YWJmNjM54748244_20241106144745.978.svg)

-   On-cloud node pool: An on-cloud node pool manages Elastic Compute Service (ECS) instances residing in the same virtual private cloud (VPC) of the cluster. On-cloud node pools are the same as [node pools](/help/en/ack/node-pool-management-18) provided by ACK Pro clusters.
    
    -   On-cloud node pool (default): When the system creates an ACK Edge cluster, it automatically creates an on-cloud node pool named default-nodepool, which is used to deploy the control plane components.
        
        **Important**
        
        You cannot delete the default-nodepool node pool. The node pool must contain at least one node. Otherwise, the ACK Edge cluster cannot function as normal.
        
    -   On-cloud node pool (elastic): an on-cloud node pool that has [node auto scaling](/help/en/doc-detail/2746875.html) enabled.
        
-   Edge node pool: An edge node pool manages nodes that are spread across regions, such as ECS nodes in different regions, nodes deployed in data centers, nodes from different cloud service providers, and server nodes in factories, stores, vehicles, and ships.
    

## **On-cloud node pools**

The attributes of on-cloud node pools are the same as those provided by ACK Pro clusters and you can perform the same operations on on-cloud node pools. For more information, see [Overview of on-cloud node pools](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/node-pool-overview/).

## **Edge node pools**

-   Edge node pools are abstractions of edge node groups. When you [create an edge node pool](/help/en/ack/create-an-edge-node-pool-1), you must first confirm the [basic attributes](/help/en/ack/create-an-edge-node-pool-1#867953a5782we) of the nodes in the node pool, such as cloud-edge connections, inter-node communication, and pod network. In addition, we recommend that you spread edge nodes to multiple edge node pools based on other node attributes, such as CPUs or GPUs, regions, and AMD64 or ARM64 architectures.
    
-   After the node pool is created, you can batch manage the labels and taints of the nodes in the node pool by [modifying the edge node pool](/help/en/doc-detail/2858109.html). After you remove all edge nodes from the cluster, you can delete the edge node pool.
    
-   To deploy an application in multiple node pools, you can create a [YurtAppSet](/help/en/ack/ack-edge/user-guide/node-pool-yurtappset-management). YurtAppSets can quickly respond to node pool label changes. This allows YurtAppSets to centrally manage the configurations, such as the number of pods and the application versions, of a workload that is distributed to multiple node pools.
    
-   The backend endpoints of Kubernetes Services are randomly distributed across nodes. Therefore, if the networks of two edge node pools are disconnected, inter-Service communication across edge node pools is likely to fail or have a high network latency. You can create a [Service topology](/help/en/ack/ack-edge/user-guide/configure-a-service-topology) to restrict Service communication to the same edge node pool or edge node. This helps avoid Service communication failures in cross-domain communication scenarios.

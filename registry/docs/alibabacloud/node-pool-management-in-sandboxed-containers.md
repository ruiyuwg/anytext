A sandboxed container runtime runs applications and their dependencies in a lightweight virtual machine. It provides application pods with an independent kernel layer and fine-grained isolation. This prevents malicious attacks or vulnerabilities in a container from affecting the host or other containers. ACK uses node pools to manage nodes. This topic describes how to create a sandboxed container node pool and scale out sandboxed container nodes.

## Limits

-   Cluster version: Only ACK managed clusters and ACK dedicated clusters of versions 1.16 to 1.34 are supported. To upgrade a cluster, see [Manually upgrade the cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster).
    
-   Operating system: Sandboxed container node pools do not support custom images.
    
    -   For clusters that run a version earlier than 1.30, only [Alibaba Cloud Linux 3](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-alibaba-cloud-linux-3) and [Alibaba Cloud Linux 2 (maintenance has stopped)](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-alibaba-cloud-linux-2) are supported.
        
    -   For clusters that run version 1.30 or later, only [Alibaba Cloud Linux 3](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-alibaba-cloud-linux-3) is supported.
        
-   Instance types: Only [ECS Bare Metal Instance types](/help/en/ecs/user-guide/overview-of-instance-families#9af5c9ff078ja) are supported.
    
-   Network plug-ins: Sandboxed container node pools support only the Flannel network plug-in and the Terway network plug-in in some modes. When you [use the Terway network plug-in](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-terway), the dedicated ENI mode is not supported and the DataPath v2 feature cannot be enabled.
    

## Create sandboxed container node pools

When you create a node pool, set the container runtime to sandboxed container. For more information, see [Create and manage node pools](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3564058471/p789209.png)

## Scale out sandboxed container node pools

1.  Log on to the [Container Service console](https://cs.console.alibabacloud.com). In the navigation pane on the left, click **Clusters**.
    
2.  On the **Clusters** page, click the name of your cluster. In the navigation pane on the left, click **Nodes** > **Node Pools**.
    
3.  In the **Actions** column of the target node pool, click **Scale**. Select **Manual** mode and set **Expected Nodes**. Follow the on-screen instructions to submit the changes.
    
    After the scale-out operation is complete, the number of nodes in the node pool is updated to the number of desired nodes.
    

## References

-   To create a sandboxed container application, see [Create stateless workloads (Deployment)](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-stateless-application-by-using-a-deployment).
    
-   To create resources using OpenAPI, see [CreateCluster – Create a cluster](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-cs-2015-12-15-createcluster) and [CreateClusterNodePool – Create a node pool](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-cs-2015-12-15-createclusternodepool).

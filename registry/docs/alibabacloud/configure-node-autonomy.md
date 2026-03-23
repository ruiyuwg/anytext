ACK Edge clusters support edge node autonomy. Edge node autonomy ensures that applications on edge nodes can still run as expected without being evicted or migrated to other edge nodes during cloud-edge network disconnections. When a node with node autonomy disabled disconnects from the cloud, the application pods on the node are evicted after the tolerance time ends. This topic describes how to configure node autonomy for edge nodes.

## Prerequisites

-   An ACK Edge cluster has been created. For more information, see [Create an ACK Edge cluster](/help/en/ack/ack-edge/user-guide/create-an-ack-edge-cluster-1#task-skz-qwk-qfb).
    
-   Edge nodes have been added to the cluster. For more information, see [Add edge nodes](/help/en/ack/ack-edge/user-guide/add-an-edge-node#task-1478311).
    

## Background information

You can enable or disable node autonomy for edge nodes. By default, node autonomy is disabled for edge nodes that are newly added to a cluster.

-   When an edge node with node autonomy enabled disconnects from the cloud, the system ensures that the application pods on the node are not evicted and that the applications can automatically recover. Node autonomy is suitable for edge computing scenarios where the network connection is weak.
    
-   When an edge node with node autonomy disabled disconnects from the cloud, the node cannot send heartbeats to the control planes in the cloud. As a result, the status of the node changes to **Not ready** and the application pods on the node are evicted or migrated to other edge nodes after the toleration time ends.
    

## **Enable node autonomy**

### **ACK console**

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, click the name of the one you want to change. In the left-side navigation pane, choose **Nodes** > **Nodes**.
    
3.  On the **Nodes** page, find the node that you want to manage, and choose **More** > **Node Autonomy Settings** in the **Actions** column.
    
    **Note**
    
    The **Node Autonomy Settings** button is displayed only when the current node is an edge node.
    
4.  In the popped-up **Node Autonomy Settings** dialog box, click **OK**.
    

### kubectl

1.  Add the following annotation to edge nodes to enable node autonomy:
    
    **Note**
    
    This configuration can only be applied to edge nodes.
    
    ```
    kubectl annotate node xxx node.beta.openyurt.io/autonomy=true --overwrite
    ```
    
2.  (Optional) Use the following method to configure autonomy duration. If not configured, edge nodes maintain permanent autonomy.
    
    **Note**
    
    -   Only ACK Edge clusters running Kubernetes 1.28 or later support this configuration.
        
    -   Pod eviction logic during network disconnection between edge nodes and cloud control plane:
        
        -   Within autonomy duration: Pods continue to run with zero service interruption.
            
        -   Exceeding autonomy duration: Pods are forcibly evicted from edge nodes.
            
    -   Autonomy duration can only be configured through kubectl.
        
    
    ```
    kubectl annotate node xxx node.alibabacloud.com/autonomy-duration=500s --overwrite
    ```
    

## **Check the node autonomy status**

1.  On the **Clusters** page, click the name of the one you want to change. In the left-side navigation pane, choose **Nodes** > **Nodes**.
    
2.  On the **Nodes** page, find the node that you want to manage, and choose **More** > **Details** in the **Actions** column.
    
3.  Under the **Overview** tab, scroll down and find the **Status** section. If the type is **Autonomy** and the corresponding status is **True**, autonomy has been successfully enabled.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0263540371/p859621.png)
    

## Configure the cache component

EdgeHub caches the data required by the components on the node to ensure that these components can run as expected during cloud-edge network disconnections. The cache directory is `/etc/kubernetes/cache`.

**Note**

The cached data refers to the data that interacts with the API server, such as pod and ConfigMap resource information, and does not include business data.

When the edge node is disconnected from the network, if you have components that rely on the data from the API Server, you can configure the edge node as follows:

1.  Obtain the User-Agent information from the Developer Tools in your browser or API server logs.
    
2.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
3.  On the **Clusters** page, find the cluster that you want to manage and click its name. In the left-side pane, choose **Configurations** > **ConfigMaps**.
    
4.  Select **kube-system** from the **Namespace** drop-down list, find the ConfigMap named **edge-hub-cfg** in the **Name** column, and click **Edit YAML** in the **Actions** column.
    
5.  Add your User-Agent to the key `cache_agents`, and click **OK**.
    
6.  Log on to the node, go to the `/etc/kubernetes/cache` directory, and check if there is a directory named after your User-Agent.
    

After setting up this configuration, the data that interacts between the components and the API server will be saved to the disk on the node. If node autonomy is enabled, the components will retrieve data from the local disk to ensure normal operations during network disconnections.

## References

-   For more information about how to remove edge nodes that are no longer needed, see [Remove edge nodes](/help/en/ack/ack-edge/user-guide/remove-edge-nodes).
    
-   For more information about edge nodes, see [FAQs about edge nodes](/help/en/ack/ack-edge/user-guide/edge-node-faq).

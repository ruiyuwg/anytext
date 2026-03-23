Kubernetes uses labels and taints to manage and schedule resources in clusters. Labels can be used to identify and classify Kubernetes resources, such as nodes. Taints can be used by nodes to repel specific pods.

For more information about the introduction and usage notes for labels, see [Labels and Selectors](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/). For more information about the usage notes and effects for taints and tolerations, see [Taints and Tolerations](https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/). You can specify the following effects: NoSchedule, NoExecute, and PreferNoSchedule.

## **Create and manage node labels**

Labels can be used to identify and classify nodes. Labels can also be used as selectors to select nodes for operations.

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the navigation pane on the left, click **Clusters**.
    
2.  On the **Clusters** page, click the name of the one you want to change. In the navigation pane on the left, choose **Nodes** > **Nodes**.
    
3.  Click **Manage Labels and Taints**. On the **Manage Labels and Taints** page, click the **Labels** tab. On the **Labels** tab, select the target nodes and click **Add Label**. In the **Add** dialog box, set the **Name** and **Value** parameters based on the on-screen instructions.
    
    After adding labels, you can view all the labels added to the node in the **Labels** column. You can also perform the following operations in the **Labels** column:
    
    -   Click a label to filter nodes and display nodes that have the label.
        
    -   Click the ![5.jpg](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9586733961/p712060.jpg) icon of a label to delete the label.
        
        **Note**
        
        Specific Kubernetes-native labels cannot be deleted. If you delete such a label, the system automatically re-adds the label to the node.
        

## Create and manage node taints

Taints can be used by nodes to repel specific pods. If you want to schedule a pod to a node with a taint, you must add a toleration that matches the taint to the node. Use scenarios:

-   You want to select a group of nodes that are dedicated to specific users or workloads.
    
-   You want to ensure that only pods that require specific hardware resources are scheduled to nodes that have the hardware resources. For example, you want to ensure that only pods that require GPU resources are scheduled to GPU-accelerated nodes.
    
-   You want to evict pods from a node by using taints. You can add the `NoExecute` taint to a node to evict pods from the node. If you want to retain a pod on the node, add the toleration that matches the NoExecute taint to the pod.
    

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the navigation pane on the left, click **Clusters**.
    
2.  On the **Clusters** page, click the name of the one you want to change. In the navigation pane on the left, choose **Nodes** > **Nodes**.
    
3.  Click **Manage Labels and Taints**. On the **Manage Labels and Taints** page, click the **Taints** tab. On the **Taints** tab, select the target nodes and click **Add Taint**. In the **Add** dialog box, set the **Name**, **Value**, and **Effect** parameters based on the on-screen instructions.
    
    For more information about the format and effect of taints, see [Taints and Tolerations](https://kubernetes.io/docs/concepts/scheduling-eviction/taint-and-toleration/#concepts).
    
    **Parameter**
    
    **Description**
    
    Name
    
    The name must be 1 to 63 characters in length, and can contain letters, digits, hyphens (-), underscores (\_), and periods (.). It must start and end with a letter or a digit.
    
    If you want to specify a prefixed key, the prefix must be a [subdomain name](https://kubernetes.io/zh-cn/docs/concepts/overview/working-with-objects/names/#dns-subdomain-names). A subdomain name consists of DNS labels that are separated by periods (.), and cannot exceed 253 characters in length. It must end with a forward slash (/).
    
    Value
    
    You can leave this parameter empty. The value cannot exceed 63 characters in length, and and contain letters, digits, hyphens (-), underscores (\_), and periods (.). It must start and end with a letter or digit.
    
    Effect
    
    -   **NoSchedule**: If a node has a taint whose **effect** is **NoSchedule**, the system does not schedule pods to the node.
        
    -   **NoExecute**: If a node has a taint whose effect is NoExecute, the system does not schedule pods to the node, and pods that do not have matching tolerations are evicted from the node.
        
    -   **PreferNoSchedule**: If a node has a taint whose effect is PreferNoSchedule, the system attempts to avoid scheduling pods that not have matching tolerations to the node. This effect does not specify a hard requirement.
        
    
    After adding taints, you can view all taints in the **Taints** column. The following operations can be performed:
    
    -   Click a taint to filter nodes and display nodes that have the taint.
        
    -   Click the ![5.jpg](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9586733961/p712060.jpg) icon of a taint to delete the taint.
        

## **References**

-   To centrally configure node labels and taints in a node pool, see [Create and manage a node pool](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-node-pool).
    
-   [Schedule pods to specific nodes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/schedule-pods-to-specific-nodes) through node labels or the `nodeSelector` field.

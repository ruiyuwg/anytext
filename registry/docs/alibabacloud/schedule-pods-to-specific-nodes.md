You can set node labels and a nodeSelector policy to schedule an application to a specified node.

## Prerequisites

-   An [ACK managed cluster is created](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-managed-cluster-2/) or an [ACK dedicated cluster is created. You can no longer create new ACK dedicated clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-an-ack-dedicated-cluster/).
    
-   A [stateless workload (deployment) is created](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/create-a-stateless-application-by-using-a-deployment) or a [stateful workload (StatefulSet) is created](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-a-statefulset-to-create-a-stateful-application-1).
    

## Step 1: Set node labels

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, click the name of the one you want to change. In the left navigation pane, choose **Nodes** > **Nodes**.
    
3.  In the upper-right corner of the page, click **Manage Labels and Taints**. On the **Labels** tab, add a label to the destination node.
    
    In this example, the **Name** is pod and the **Value** is nginx.
    
    For more information, see [Create and manage node labels](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/manage-taints-and-tolerations#e6944298b3fc2).
    

## Step 2: Schedule the application to a specified node

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, click the name of the destination cluster. In the navigation pane on the left, choose **Workloads** > **Deployments**.
    
3.  On the **Deployments** page, click **Create from YAML** to create an application using the following sample content, which includes a `nodeSelector`.
    
    ```
    apiVersion: apps/v1 
    kind: Deployment
    metadata:
      name: nginx-deployment-basic
      labels:
        app: nginx
    spec:
      replicas: 2
      selector:
        matchLabels:
          app: nginx
      template:
        metadata:
          labels:
            app: nginx
        spec:
          nodeSelector:
            pod: nginx      # Add the node label to run the application only on the destination node. Use the actual value.
          containers:
          - name: nginx
            image: anolis-registry.cn-zhangjiakou.cr.aliyuncs.com/openanolis/nginx:1.14.1-8.6
            ports:
            - containerPort: 80
    ```
    
4.  On the **Deployments** page, click the name of the deployment. On the **Pods** tab, verify the nodes to which the pods are scheduled.
    
    If all pods are scheduled to nodes that have the `pod: nginx` label, the scheduling is successful.
    

## **References**

-   For more information about `nodeSelector`, see [Assigning Pods to Nodes](https://kubernetes.io/docs/concepts/scheduling-eviction/assign-pod-node/).
    
-   You can customize a resource policy (ResourcePolicy) to specify the pod scheduling order and implement reverse scale-in when you publish or scale out an application. For more information, see [Customize elastic resource priority scheduling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-priority-based-resource-scheduling).

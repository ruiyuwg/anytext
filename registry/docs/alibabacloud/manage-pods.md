Pods are the smallest deployable units in Kubernetes. A pod runs an instance of independent application in Kubernetes. The instance may consist of one or more containers that are tightly coupled. This topic describes how to view details and modify configurations of a pod and manually scale container applications in the Container Service for Kubernetes (ACK) console.

## **Prerequisites**

A workload is created. For more information, see [Workloads](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/workloads/#ariaid-title1).

## View pods

### View details of a pod

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, click the name of the cluster that you want to manage and choose **Workloads** > **Pods** in the left-side navigation pane.
    
3.  On the **Pods** page, find the pod that you want to view and click **View Details** in the Actions column.
    
    **Note**
    
    On the Pods page, you can modify and delete pods. For pods that are created by using a Deployment, we recommend that you use the Deployment to manage the pods.
    
    The following table describes the status of pods.
    
    **Status**
    
    **Description**
    
    **Initialized**
    
    All init containers are started.
    
    **Ready**
    
    The pod is able to serve requests and added to the load balancing pools of all matching services.
    
    **ContainersReady**
    
    All containers in the pod are ready.
    
    **PodScheduled**
    
    The pod has been scheduled to a node.
    
    For more information, see [Pod Lifecycle](https://kubernetes.io/docs/concepts/workloads/pods/pod-lifecycle/).
    

### View pod logs

On the **Pods** page, find the pod whose logs you want to view, and click **Logs** in the Actions column to view the logs.

### Filter pods

On the Pods page, you can filter pods by name, label, pod IP address, and node IP address. You can also filter pods by **keys** and **values** that are displayed in the Label column.![pod](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8131671071/p473650.png)

### Diagnose a pod

On the Pods page, find the pod that you want to diagnose and click **Diagnose** in the **Actions** column. For more information, see [Work with cluster diagnostics](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-cluster-diagnostics/#task-2101622).

## Modify the upper and lower limits of CPU and memory resources for a pod

After you create an application, you can modify the upper and lower limits of CPU and memory resources for the application pods based on your business requirements. In this example, a Deployment is used.

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, click the name of the cluster that you want to manage and choose **Workloads** > **Deployments** in the left-side navigation pane.
    
3.  On the **Deployments** page, select a namespace from the **Namespace** drop-down list. Find the application that you want to manage and click **Edit** in the **Actions** column.
    
4.  On the Edit page, configure the **Resource Limit** and **Required Resources** parameters to modify the upper and lower limits of CPU and memory resources. Then, click **Update**.
    
    **Important**
    
    The maximum number of pods that are supported by a cluster node is related to the network plug-in that is used by the cluster. For more information, see [Compare Terway modes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-terway#ebecc326b5ams) section of the "Work with Terway" topic.
    

## Modify the configurations of a pod

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, click the name of the cluster that you want to manage and choose **Workloads** > **Pods** in the left-side navigation pane.
    
3.  On the **Pods** page, find the pod that you want to modify and click **Edit** in the Actions column.
    
4.  In the Edit YAML dialog box, modify the configurations and click **Update**.
    

## Manually scale pods for an application

After an application is created, you can scale the pods that are provisioned for the application based on your business requirements.

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, click the name of the cluster that you want to manage and choose **Workloads** > **Deployments** in the left-side navigation pane.
    
3.  Select the namespace where the Deployment is deployed, find the Deployment, and then click **Scale** in the **Actions** column.
4.  In the Scale dialog box, set the Desired Number of Pods parameter to 4 and click **OK**.
    
    **Note**
    
    By default, Deployments in Kubernetes are updated in rollingUpdate mode. This ensures that a minimum number of pods are available during the update. You can modify the minimum number of available containers in the template.
    

## **References**

-   For more information about how to handle exceptions of pods, see [Pod troubleshooting](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/pod-troubleshooting-1).
    
-   For more information about the best practices for pod scheduling, see [Spread Elastic Container Instance-based pods across zones and configure affinities](/help/en/doc-detail/2337796.html).

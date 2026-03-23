After you enable the virtual node-based pod scheduling policy, pods in your ACK Serverless cluster can be scheduled based on Kubernetes pod affinity, node affinity, and inter-region topology spreading to improve application availability and reduce network latency.

## **Prerequisites**

An ACK Serverless Pro cluster that runs Kubernetes 1.22 or later is created. For more information, see [Create an ACK Serverless cluster](/help/en/ack/serverless-kubernetes/user-guide/create-an-ask-cluster-2) and [Update an ACK cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster).

## **Usage notes**

-   If you configure pod anti-affinity for a pod, the pod may fail to be scheduled. Proceed with caution.
    
-   If you configure virtual node anti-affinity for a pod, the pod may fail to be scheduled. Proceed with caution.
    
-   During pod scheduling, the system queries the inventory information and updates the cluster status. After the virtual node-based pod scheduling policy is enabled, each pod can be scheduled 1 second faster than before. Up to 300 pods can be scheduled concurrently per second. Assess the impacts before you enable the virtual node-based pod scheduling policy if you want to schedule large numbers of pods concurrently within a short period of time.
    

## Step 1: Verify that the components of the required versions are installed

The virtual node-based pod scheduling policy depends on the Kube Scheduler and ACK Virtual Node components. The versions of both components must meet the requirement. Perform the following steps to verify that the components of the required versions are installed

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, click the name of the cluster that you want to manage and choose **Operations** > **Add-ons** in the left-side navigation pane.
    
3.  In the **Core Components** section, verify that the components of the following versions are installed. If not, click **Install** or **Upgrade** in the cards of the components to install or update the components.
    
    -   Kube Scheduler: 5.9 or later
        
    -   ACK Virtual Node: 2.10.0 or later
        
    

## Step 2: Enable the virtual node-based pod scheduling policy

1.  Click **Configuration** in the lower-right corner of the Kube Scheduler card.
    
2.  Select **Enable Virtual Node-based Pod Scheduling** and click **OK**.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1373470171/p747539.png)

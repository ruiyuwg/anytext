The insecure read-only port 10255 used by the kubelet in open source Kubernetes exposes pods and containers to malicious attacks. To mitigate the security risk, Container Service for Kubernetes (ACK) no longer opens the read-only port 10255 for the kubelet by default in ACK clusters that run Kubernetes 1.26 or later. Instead, the authentication port 10250 is opened and used by the kubelet.

## **Risk disclaimer**

Attackers can intrude into a node and utilize the read-only port 10255 of the kubelet to obtain information about applications on the node. This results in information leakage. To resolve this issue, ACK no longer opens the read-only port 10255 for the kubelet by default in ACK clusters that run Kubernetes 1.26 or later. Instead, the authentication port 10250 is opened and used by the kubelet.

-   If your cluster runs a Kubernetes version earlier than 1.26, we recommend that you follow the instructions in this topic to update the related monitoring components and manually close the read-only port 10255 for the kubelet. For more information, see [Update the related monitoring components and manually close the read-only port 10255 for the kubelet](#c28f7e1003x64).
    
-   If port 10255 is in use or will be used by your applications, we recommend that you assess the potential security risks. In Kubernetes 1.26 and later, you can modify the kubelet parameters to open port 10255. For more information, see [Manually open the read-only port 10255 for the kubelet](#b7bfd310035x4).
    

## **Scope of impact**

ACK clusters that run Kubernetes versions earlier than 1.26 are affected if the kubelet in the clusters uses port 10255 or will use port 10255.

## **Update the related monitoring components and manually close** the read-only port 10255 for the kubelet

If the original Kubernetes version of your cluster is earlier than 1.26, we recommend that you update the related monitoring components and manually close the read-only port 10255 for the kubelet in your cluster.

### **Precautions**

If your cluster contains virtual nodes (ack-virtual-node) or you use an ACK Serverless cluster that runs a Kubernetes version earlier than 1.26, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) to contact the technical support to close port 10255.

### **Procedure**

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com) and click **Clusters** in the left-side navigation pane.
    
2.  On the **Clusters** page, click the name of the cluster that you want to manage and choose **Operations** > **Add-ons** in the left-side navigation pane.
    
3.  Find and update the relevant components.
    
    -   Update metrics-server to 0.3.9.4-ff225cd-aliyun or later. If metrics-server is not installed in your cluster, no operation is required.
        
    -   If ack-arms-prometheus is installed, update the component to 1.1.15 or later. If ack-arms-prometheus is not installed in your cluster, no operation is required.
        
    
    **Note**
    
    The update does not compromise the monitoring performance for your cluster or affect applications.
    
4.  In the left-side navigation pane, choose **Nodes** > **Node Pools**. In the node pool list, perform the following steps to close port 10255 on all cluster nodes.
    
    -   In the **Actions** column of the node pool, choose **More** > **Configure kubelet**.
        
    -   In the **Custom Parameters** section, set **readOnlyPort** to `0` and click **Submit** to close port 10255.
        
        ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0466693961/p701648.png)
    
    **Important**
    
    When you close port 10255, do not manually modify the kubelet configuration file `/etc/kubernetes/kubelet-customized-args.conf` on the nodes. The kubelet configuration in the ACK console will automatically overwrite the kubelet configuration file.
    

## **Manually open** the read-only port 10255 for the kubelet

If port 10255 is in use or will be used by your applications, we recommend that you assess the potential security risks. In Kubernetes 1.26 and later, you can modify the kubelet parameters to open port 10255.

### **Procedure**

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, click the name of the cluster that you want to manage and choose **Nodes** > **Node Pools** in the left-side navigation pane.
    
3.  In the **Actions** column of the node pool, perform the following steps to open port 10255 on all cluster nodes.
    
    -   Choose **More** > **Configure kubelet** for the node pool.
        
    -   In the **Custom Parameters** section, set **readOnlyPort** to `10255` and click **Submit** to open port 10255.![17.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0466693961/p701647.png)

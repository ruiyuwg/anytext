Container Service for Kubernetes (ACK) is integrated with Simple Log Service (SLS). You can log on to the ACK console to view the log dashboard of Application Load Balancer (ALB) Ingresses.

## **Prerequisites**

For more information about how to authorize the cluster to assume the service-linked role AliyunServiceRoleForSLSAudit to access resources in Log Service, see [Manage the AliyunServiceRoleForSLSAudit service-linked role](/help/en/sls/manage-the-aliyunserviceroleforslsaudit-service-linked-role).

## Procedure

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster that you want to manage and click its name. In the left-side pane, choose **Operations** > **Log Center**.
    
3.  On the **Log Center** page, click the **Network Component Logs** tab and then click **ALB Ingress**. Click **Install**.
    
    The system automatically installs the required components and enable logging for ALB Ingresses.
    
4.  On the **CloudLens for ALB** page, select an instance from the resources list. You can view the log dashboard of ALB Ingresses.
    
    For more information about the log dashboard, see [View reports](/help/en/sls/view-reports).

To improve the stability of LoadBalancer Services in your Container Service for Kubernetes (ACK) cluster, we recommend that you update the cloud controller manager (CCM) that is installed in your cluster to the latest version. This topic describes how to update the CCM.

## Background information

-   The following issues exist in CCM versions earlier than 1.9.3.380 and may have negative impacts on LoadBalancer Services in ACK clusters:
    
    -   Errors occur when default server groups are updated.
        
    -   Errors occur when a vServer group is updated because another vServer group with the same name exists.
        
    
    For more information, see [CCM](/help/en/ack/product-overview/cloud-controller-manager#concept-wk1-grd-qfb).
    
-   If your cluster fails to pass a precheck before you update the CCM, refer to [Troubleshoot precheck failure](https://www.alibabacloud.com/help/en/kb-articles/latest/how-can-i-troubleshoot-a-check-failure-that-occurs-before-i-update-the-ccm) to fix the issue.
    

## Manually update the CCM

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left-side navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster that you want to manage and click the name of the cluster or click **Details** in the **Actions** column. The details page of the cluster appears.
    
3.  In the left-side navigation pane of the details page, choose **Operations** > **Add-ons**.
    
4.  On the **Add-ons** page, click the **Core Components** tab, find the **Cloud Controller Manager** card, and click **Upgrade**.
    
    **Note**
    
    If the **Upgrade** button is not displayed in the **Cloud Controller Manager** card, the installed cloud controller manager is of the latest version.
    
5.  In the **Note** message, click **OK**.

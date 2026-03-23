If a Lindorm instance is not renewed promptly after it expires, its data will be deleted. Deleted data cannot be recovered. To prevent data loss, you can manually renew the instance or enable auto-renewal within 15 days after the instance expires. This topic describes how to manually renew a subscription instance.

## Prerequisites

The Lindorm instance must be a subscription instance.

## Notes

If you change the resource specifications before the renewal order takes effect, you can only unsubscribe from the resources. In this case, you cannot cancel the resource renewal order.

## Manual renewal methods

You can manually renew an instance using one of the following methods:

-   [Renew in the Lindorm console](#section-98k-wwq-onh)
    
-   [Renew in the Renewal Management console](#section-5k5-fgm-rxu)
    

## Renew in the Lindorm console

1.  Log on to the [Lindorm console](https://lindorm.console.alibabacloud.com/cn-hangzhou/clusterhou/cluster).
    
2.  In the upper-left corner of the page, select the region where the instance is deployed.
    
3.  On the **Instances** page, in the **Actions** column for the target instance, click **Renew**.
    
4.  On the **Renew** page, you can configure renewal settings.
    
    1.  Select a **Duration** and verify the **Expiration Time(After Renewal)**.
        
    2.  Review and accept the Terms of Service, and then click **Buy Now**.
        
5.  On the **Payment** page, follow the prompts to complete the payment.
    

## Renew in the Renewal Management console

1.  Log on to the [Lindorm console](https://lindorm.console.alibabacloud.com/cn-hangzhou/clusterhou/cluster).
    
2.  In the top menu bar, choose **Expenses** > **Renewal Management**.
    
3.  On the **Resource Renewal** page, select Lindorm New Edition from the Product drop-down list, and then click the **Manual Renewal** tab.
    
4.  Renew the Lindorm instance based on your renewal requirements.
    
    -   Renew a single instance
        
        1.  In the **Manual Renewal** list, click **Renew** in the **Actions** column for the target instance.
            
            **Note**
            
            If the target instance is on the **Auto-renewal** or ****Nonrenewal upon Expiration**** tab, find the instance and go to the **Actions** column. Click the **![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3712409571/p1008991.png)** > **Enable Manual Renewal**. In the **Enable Manual Renewal** dialog box, click **OK**. The renewal method for the instance is changed to manual renewal.
            
        2.  On the renewal page, select a subscription duration based on your business needs.
            
        3.  Read the Terms of Service and click the **Buy Now** button.
            
        4.  On the **Payment** page, follow the prompts to complete the payment.
            
    -   Renew instances in a batch
        
        1.  In the **Manual Renewal** list, select the target instances.
            
        2.  Click **Batch Renewal**.
            
        3.  On the **Batch Renewal** page, you can select a renewal duration for each instance based on your business needs.
            
            **Note**
            
            To set a uniform renewal duration for all target instances, click **Batch Settings**. In the dialog box that opens, select a subscription duration and click **OK**.
            
        4.  Click **Pay**.
            
        5.  On the **Payment** page, follow the prompts to complete the payment.
            
    

## Related tasks

To prevent service interruptions that may result from a missed manual renewal, you can [enable auto-renewal](/help/en/lindorm/product-overview/enable-auto-renewal#topic-1965114) for the Lindorm instance.

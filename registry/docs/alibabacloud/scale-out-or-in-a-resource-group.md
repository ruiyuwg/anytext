If a resource group's usage is high and it cannot meet your concurrency requirements, you can scale it out. If a resource group is idle for an extended period, you can scale it in to reduce resource fees. This topic describes how to scale a resource group.

## Introduction to scaling

The following table describes resource group scaling.

**Operation type**

**Change**

**Memory and network details**

**Billing details**

**Notes**

**Effective time**

[Scale-out operation](#section-a77-qkh-uwj)

Increases the number of resources of the same specification in the resource group.

-   The CPU and memory configurations of the resources are not upgraded.
    
-   The number of attached VPC networks is not increased.
    

You need to pay for the added resources of the period from the time the new configuration takes effect to the time the original order expires. The actual fee is subject to the bill. For more information, see [View bill details (Deprecated)](/help/en/dataworks/view-spending-details#concept-1813894).

You do not need to stop running tasks.

After you pay for the order, the system starts to scale the resource group. This process takes about 30 minutes.

[Scale-in operation](#section-zc3-qru-3hv)

Decreases the number of resources of the same specification in the resource group.

Not applicable

You are refunded for the removed resources of the period from the time the new configuration takes effect to the time the original order expires.The actual costs are subject to your bill. For more information, see [View bill details (Deprecated)](/help/en/dataworks/view-spending-details#concept-1813894).

Stop all running tasks before you scale in the resource group.

## Limits

-   **Resource group limits**
    
    -   Only **Exclusive Resource Groups for Data Integration** and **Exclusive Resource Groups for Scheduling** can be scaled.
        
    -   Only resource groups in the **Running** state can be scaled.
        
-   **Permission limits**
    
    Only users who have the **AliyunDataWorksFullAccess** and **AliyunBSSOrderAccess** access policies can scale resource groups.
    

## Precautions

After you scale a resource group, its Elastic IP addresses (EIPs) change. To ensure that the whitelist configuration does not disrupt network connectivity, you must view the new EIPs after the scaling is complete and add them to the whitelist of the data source.![查看独享资源组EIP](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0470772371/p297130.png)

## Scale out a resource group

This section describes how to scale out an exclusive resource group for scheduling. The procedure for scaling out an exclusive resource group for Data Integration is similar.

1.  Go to the **Resource Group** page.
    
    1.  Log on to [the DataWorks console](https://workbench.data.aliyun.com/console).
        
    2.  In the navigation pane on the left, click **Resource Groups** and select a destination region.
        
2.  On the **Exclusive Resource Group** tab, click **![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7002622771/p842441.png)** > **Scale Out** in the **Actions** column of the target resource group.
    
3.  On the **Upgrade/Downgrade** page, adjust the **Resource Group Specifications**, and read and select **Terms of Service**.
    
    **Note**
    
    -   If a resource group needs to access a target IP address that is protected by a whitelist, refer to [Configure a whitelist for an exclusive resource group](https://www.alibabacloud.com/help/zh/dataworks/latest/configure-a-whitelist#section-zuv-cm3-igf) to determine whether you need to update the whitelist of the data source.
        
    -   You can only increase the resource count when you scale out.
        
    
4.  Click **Buy Now** to scale out the resource.
    
    **Note**
    
    -   The peak hours for scale-out operations are from 00:00 to 08:00 daily. During this period, the scale-out process may take an additional 1 to 2 hours.
        
    -   The scale-out process takes longer in the following regions: China (Hong Kong), Singapore, Indonesia (Jakarta), US (Silicon Valley), US (Virginia), Germany (Frankfurt), UK (London), Japan (Tokyo), Malaysia (Kuala Lumpur), and UAE (Dubai).
        
    
    After the resource group is scaled out, you can go to the **Resource Group** page. Find the resource group and click **Details** in the **Actions** column to view the updated resource count.
    

## Scale in a resource group

This section describes how to scale in an exclusive resource group for scheduling. The procedure for scaling in an exclusive resource group for Data Integration is similar.

**Note**

Scaling in a resource group may cause task delays. Evaluate the impact before you proceed.

1.  Go to the **Resource Group** page.
    
    1.  Log on to [the DataWorks console](https://workbench.data.aliyun.com/console).
        
    2.  In the navigation pane on the left, click **Resource Groups** and select a destination region.
        
2.  On the **Exclusive Resource Group** tab, click **![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7002622771/p842441.png)** > **Scale In** in the **Actions** column of the target resource group.
    
3.  On the **Downgrade** page, adjust the **Resource Group Specifications**, and read and select **Terms of Service**.
    
    **Note**
    
    -   You can only decrease the resource count when you scale in.
        
    -   You cannot scale in a resource group that contains only one resource.
        
    
4.  Click **Buy Now** to scale in the resource.
    
    After the resource group is scaled in, you can go to the **Resource Group** page. Find the resource group and click **Details** in the **Actions** column to view the updated resource count.

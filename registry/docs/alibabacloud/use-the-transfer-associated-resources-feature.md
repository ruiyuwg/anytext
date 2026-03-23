Resource Group provides the Transfer Associated Resources feature. After you enable this feature, you can configure transfer rules. If a transfer rule is triggered, the system automatically transfers associated resources to resource groups to which primary resources belong.

## Use scenarios

This section uses Elastic Compute Service (ECS) instances as an example to describe the use scenarios of the Transfer Associated Resources feature. For an ECS instance, the following associated resources support this feature: cloud disks, elastic network interfaces (ENIs), and elastic IP addresses (EIPs). You can enable the Transfer Associated Resources feature and configure the following transfer rules for the associated resources:

-   After a resource is attached to, bound to, or associated with an ECS instance, the resource is automatically transferred to the resource group to which the ECS instance belongs.
    
-   When an ECS instance is transferred from a resource group to another, the resources that are attached to, bound to, or associated with the ECS instance are automatically transferred to the new resource group.
    

## **Prerequisites**

The Automatic Resource Transfer feature is enabled. For more information, see [Enable the Automatic Resource Transfer feature](/help/en/resource-management/resource-group/user-guide/turn-on-or-off-automatic-resource-transfer#e76fa610f855j).

## Configure transfer rules for associated resources

1.  Log on to the [Resource Management console](https://resourcemanager.console.alibabacloud.com/resource-groups).
    
2.  In the left-side navigation pane, choose **Resource Group** > **Automatic Resource Transfer**.
    
3.  Click the **Transfer of Associated Resources** tab. In the lower part of the tab, click **Edit**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9707239371/p870589.png)
    
4.  Configure transfer rules.
    
    1.  Select the types of resources that you want to transfer.
        
        For information about the resource types that support the Transfer Associated Resources feature, see [Resource types that support the Transfer Associated Resources feature](#section-s5x-ur1-59u).
        
    2.  (Optional) Select the **Transfer Existing Associated Resources** check box. This way, existing associated resources can be transferred to the resource groups to which primary resources belong. We recommend that you select this check box.
        
        Existing associated resources refer to the associated resources that are created before the Transfer Associated Resources feature is enabled.
        
        If existing associated resources do not belong to the same resource groups as their primary resources, you need to enable Transfer Existing Associated Resources to transfer the existing associated resources to the resource groups to which the primary resources belong. Otherwise, the existing associated resources can be transferred to the same resource groups as the primary resources only after the primary resources are transferred to other resource groups.
        
        When you enable Transfer Existing Associated Resources, the system assumes the service-linked role AliyunServiceRoleForResourceGroup to activate and access the [Cloud Config](/help/en/cloud-config/latest/what-is-cloud-config) service. This way, existing associated resources can be detected and transferred. This operation does not consume your quota for Cloud Config or incur fees.
        
    
5.  Click **OK**.
    

If the configured transfer rules are triggered, the system transfers associated resources to resource group together with primary resources. For more information, see the **Transfer rule** column in [Resource types that support the Transfer Associated Resources feature](#section-s5x-ur1-59u).

## Modify transfer rules

1.  Log on to the [Resource Management console](https://resourcemanager.console.alibabacloud.com/resource-groups).
    
2.  In the left-side navigation pane, choose **Resource Group** > **Automatic Resource Transfer**.
    
3.  Click the **Transfer of Associated Resources** tab. On the tab, view existing transfer rules. If you want to modify the rules, click **Edit** in the lower part of the tab.
    
4.  Click **OK**.
    

## Resource types that support the Transfer Associated Resources feature

**Primary resource**

**Associated resource**

**Transfer rule**

ECS instances

Cloud disks (including data disks and system disks)

-   After a resource is attached to, bound to, or associated with an ECS instance, the resource is automatically transferred to the resource group to which the ECS instance belongs.
    
-   When an ECS instance is transferred from a resource group to another, the resources that are attached to, bound to, or associated with the ECS instance are automatically transferred to the new resource group.
    

ENIs (including primary and secondary ENIs)

EIPs

Cloud disks

Snapshots

-   After a snapshot is created for a cloud disk, the snapshot is automatically transferred to the resource group to which the cloud disk belongs.
    
    **Note**
    
    Automatic snapshots do not support this transfer rule.
    
-   When a cloud disk is transferred from a resource group to another, the snapshots that are created for the cloud disk are automatically transferred to the new resource group.
    

NAT gateways

ENIs

When a NAT gateway is transferred from a resource group to another, the ENIs that are bound to the NAT gateway are automatically transferred to the new resource group.

EIPs

-   After an EIP is associated with a NAT gateway, the EIP is automatically transferred to the resource group to which the NAT gateway belongs.
    
-   When a NAT gateway is transferred from a resource group to another, the EIPs that are associated with the NAT gateway are automatically transferred to the new resource group.
    

Server Load Balancer (SLB) instances

EIPs

-   After an EIP is associated with an SLB instance, the EIP is automatically transferred to the resource group to which the SLB instance belongs.
    
-   When an SLB instance is transferred from a resource group to another, the EIPs that are associated with the SLB instance are automatically transferred to the new resource group.
    

## Limits

-   If a transfer task is being performed for a primary resource based on the Transfer Associated Resources feature, you are not allowed to transfer the primary resource or its associated resources across resource groups in the Alibaba Cloud Management Console or by calling API operations. You can perform the operation only after the task is complete.
    
-   To avoid conflicts, you are not allowed to manually transfer a primary resource and its associated resources across resource groups at the same time after you enable the Transfer Associated Resources feature. We recommend that you transfer only the primary resource. The associated resources are automatically transferred together with the primary resource.
    
-   The Transfer Associated Resources feature is supported in the following regions: Indonesia (Jakarta), Malaysia (Kuala Lumpur), China (Hohhot), Singapore, Germany (Frankfurt), US (Virginia), US (Silicon Valley), China (Hong Kong), China (Qingdao), Japan (Tokyo), China (Zhangjiakou), China (Shenzhen), China (Beijing), China (Shanghai), China (Hangzhou), China (Chengdu), UK (London), China (Heyuan), China (Ulanqab), China (Guangzhou), Philippines (Manila), Thailand (Bangkok), China (Nanjing - Local Region) Closing Down, and China (Fuzhou - Local Region) Closing Down.

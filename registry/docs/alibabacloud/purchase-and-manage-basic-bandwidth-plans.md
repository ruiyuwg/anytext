After you purchase a Global Accelerator (GA) instance whose bandwidth metering method is **pay-by-bandwidth**, you must purchase a basic bandwidth plan and associate the basic bandwidth plan with the GA instance. A basic bandwidth plan provides bandwidth for data transfer over the Internet and the internal network of Alibaba Cloud. However, basic bandwidth plans do not support data transfer between the Chinese mainland and areas outside the Chinese mainland.

## Bandwidth types

The following types of bandwidth are supported by basic bandwidth plans: basic, enhanced, and premium. The acceleration type, accelerated endpoint, and acceleration scope of a basic bandwidth plan vary based on the bandwidth type, as described in the following table.

**Bandwidth type**

**Acceleration type**

**Accelerated endpoint**

**Acceleration scope**

Basic

Applications deployed on Alibaba Cloud

-   Standard GA instance:
    
    -   Public IP addresses provided by Alibaba Cloud
        
    -   Elastic Compute Service (ECS) instances
        
    -   Elastic network interfaces (ENIs)
        
    -   Classic Load Balancer (CLB) (formerly known as SLB) instances
        
    -   Application Load Balancer (ALB) instances
        
    -   Network Load Balancer (NLB) instances
        
    -   Object Storage Service (OSS) buckets
        
    -   vSwitches
        
-   Basic GA instance:
    
    -   CLB instances
        
    -   Secondary ENIs
        
    -   ECS instances
        
    -   NLB instances
        

By default, the acceleration area and the area where the endpoint is deployed are located in the Chinese mainland.

Enhanced

-   Applications deployed on Alibaba Cloud
    
-   Applications deployed outside Alibaba Cloud
    

-   Standard GA instance:
    
    -   Public IP addresses provided by Alibaba Cloud
        
    -   ECS instances
        
    -   ENIs
        
    -   CLB instances
        
    -   ALB instances
        
    -   NLB instances
        
    -   OSS buckets
        
    -   vSwitches
        
    -   Custom IP addresses
        
    -   Custom domain names
        
-   Basic GA instance: N/A
    

By default, the acceleration area and the area where the endpoint is deployed are located in the Chinese mainland.

Premium

-   Applications deployed on Alibaba Cloud
    
-   Applications deployed outside Alibaba Cloud
    

-   Standard GA instance:
    
    -   Public IP addresses provided by Alibaba Cloud
        
    -   ECS instances
        
    -   ENIs
        
    -   CLB instances
        
    -   ALB instances
        
    -   NLB instances
        
    -   OSS buckets
        
    -   vSwitches
        
    -   Custom IP addresses
        
    -   Custom domain names
        
-   Basic GA instance:
    
    -   CLB instances
        
    -   Secondary ENIs
        
    -   ECS instances
        
    -   NLB instances
        

By default, the acceleration area and the area where the endpoint is deployed are located outside the Chinese mainland. If you want to accelerate data transfer between the Chinese mainland and other areas, you must select China (Hong Kong) as the acceleration region.

**Note**

-   You can associate only basic bandwidth plans that provide basic bandwidth or premium bandwidth with basic GA instances that use the **pay-by-bandwidth** bandwidth metering method.
    
-   For information about backend service types, see [Overview](/help/en/ga/user-guide/overview-4/) and [Add and manage endpoint groups and endpoints for a basic GA instance](/help/en/ga/user-guide/add-and-manage-endpoint-groups-and-endpoints-for-a-basic-ga-instance).
    

## Purchase a basic bandwidth plan

1.  Log on to the [GA console](https://ga.console.alibabacloud.com/list).
    
2.  In the left-side navigation pane, click **Bandwidth**.
    
3.  On the **Bandwidth** page, click **Purchase Basic Bandwidth Plan**.
    
4.  On the **Global Accelerator Bandwidth Plan** buy page, configure the parameters and click **Buy Now** to complete the payment. The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **Bandwidth Type**
    
    Select a bandwidth type for the basic bandwidth plan.
    
    Valid values: **Basic**, **Enhanced**, and **Premium**.
    
    **Peak Bandwidth**
    
    Specify a maximum bandwidth value. Unit: Mbit/s.
    
    **Resource Group**
    
    Select the resource group to which the basic bandwidth plan belongs.
    
    The resource group must be created in Resource Management by using the current Alibaba Cloud account. For more information, see [Create a resource group](/help/en/resource-management/resource-group/user-guide/create-a-resource-group#task-xpl-kjm-4fb).
    
    **Duration**
    
    Select a subscription duration for the basic bandwidth plan.
    
    You can select **Auto-renewal** to enable auto-renewal for the basic bandwidth plan.
    

## Associate a basic bandwidth plan

After you purchase a basic bandwidth plan, you must associate the basic bandwidth plan with a GA instance whose bandwidth metering method is **pay-by-bandwidth**. Then, you can add acceleration areas and allocate bandwidth for acceleration.

Each GA instance can be associated with one bandwidth plan.

Before you associate a basic bandwidth plan, take note of the following items:

-   Make sure that a GA instance whose bandwidth metering method is **pay-by-bandwidth** and a basic bandwidth plan are created. For more information, see [Create and manage a standard GA instance](/help/en/ga/user-guide/create-and-manage-standard-ga-instances#task-2381612) and [Purchase a basic bandwidth plan](#section-lrh-d9o-4y8).
    
-   You can associate only subscription basic bandwidth plans that provide basic or premium bandwidth with basic GA instances.
    

1.  Log on to the [GA console](https://ga.console.alibabacloud.com/list).
    
2.  In the left-side navigation pane, click **Bandwidth**.
    
3.  On the **Bandwidth** page, find the basic bandwidth plan that you want to associate with a GA instance and click **Bind Instance** in the **Bind Instance** column.
    
4.  In the **Bind Instance** dialog box, configure the following parameters and click **OK**.
    
    -   **Instance Type**: Select the type of GA instance with which you want to associate the basic bandwidth plan. Valid values: **Standard Instance** and **Basic Instance**.
        
    -   **Resource Group**: Select the resource group to which the GA instance belongs.
        
    -   **Select Instance**: Select a GA instance from the drop-down list.
        
    
    After the basic bandwidth plan is associated with the GA instance, the basic bandwidth plan changes to the **In Use** state.
    

## Upgrade or downgrade a basic bandwidth plan

You can modify the maximum bandwidth and bandwidth type of a basic bandwidth plan. The modifications take effect immediately.

Before you upgrade or downgrade a basic bandwidth plan, take note of the following items:

-   You can only increase the bandwidth of a basic bandwidth plan. By default, you cannot downgrade basic bandwidth plans. To downgrade basic bandwidth plans, go to the Quota Center console, find the quota named **Console Downgrade**, and click Apply in the Actions column. For more information, see the "Adjust quotas" section of the [Manage GA quotas](/help/en/ga/user-guide/manage-ga-quotas#section-yqx-xul-73a) topic.
    
-   To downgrade a basic bandwidth plan, make sure that the total allocated bandwidth across all acceleration regions does not exceed the maximum bandwidth of the downgraded basic bandwidth plan.
    
-   When you upgrade a basic bandwidth plan, make sure that the maximum bandwidth of the upgraded basic bandwidth plan does not exceed the maximum bandwidth that is supported by the associated GA instance. For more information about the specifications of GA instances, see [Overview of standard GA instances](/help/en/ga/user-guide/overview-of-standard-ga-instances/#concept-2382438).
    

1.  Log on to the [GA console](https://ga.console.alibabacloud.com/list).
    
2.  In the left-side navigation pane, click **Bandwidth**.
    
3.  On the **Bandwidth** page, perform the following steps to change the configuration of a basic bandwidth plan.
    
    -   Upgrade a basic bandwidth plan
        
        You can click **Change Configurations** to increase the maximum bandwidth of a basic bandwidth plan or change the bandwidth type from basic to enhanced.
        
        **Note**
        
        You can only upgrade a basic bandwidth plan by clicking **Change Configurations**. For more information about how to downgrade a basic bandwidth plan, see **Downgrade a basic bandwidth plan**
        
        1.  Find the basic bandwidth plan that you want to manage and click **Change Configurations** in the **Bandwidth Limit** column.
            
        2.  On the Upgrade/Downgrade page, modify the **Peak Bandwidth** and **Bandwidth Type** parameters, select the Terms of Service, and then click **Buy Now** to complete the payment.
            
    -   Downgrade a basic bandwidth plan
        
        You can click **Downgrade** to decrease the maximum bandwidth of a basic bandwidth plan or change the bandwidth type from enhanced to basic.
        
        1.  Find the basic bandwidth plan that you want to manage and click **Downgrade** in the **Bandwidth Limit** column.
            
        2.  In the **Downgrade Basic Bandwidth Plan** message, confirm the information about the **downgrade** and click **OK**.
            
        3.  On the Downgrade page, specify the specifications that you want to use, select the Terms of Service, and then click **Buy Now** to complete the payment.
            

## Replace a basic bandwidth plan

You can replace a basic bandwidth plan that is associated with a GA instance. This allows you to use a basic bandwidth plan that meets your requirements. The GA instance continues to forward network traffic when you replace the basic bandwidth plan.

After you replace the original basic bandwidth plan, the original basic bandwidth plan is disassociated from the GA instance and the new basic bandwidth plan is associated with the GA instance.

Before you replace a basic bandwidth plan, make sure that another basic bandwidth plan is purchased. The bandwidth provided by the new basic bandwidth plan must be greater than or equal to the total bandwidth that is allocated to acceleration areas. For more information, see [Purchase and manage basic bandwidth plans](#section-lrh-d9o-4y8).

1.  Log on to the [GA console](https://ga.console.alibabacloud.com/list).
    
2.  In the left-side navigation pane, click **Bandwidth**.
    
3.  On the **Bandwidth** page, find the basic bandwidth plan that is associated with a GA instance and click **Replace** in the **Actions** column.
    
4.  In the **Replace Basic Bandwidth Plan** dialog box, select the basic bandwidth plan that you want to use and click **OK**.
    
    -   **Resource Group**: Select the resource group to which the basic bandwidth plan that you want to use belongs.
        
    -   **Bandwidth Plan to Use**: Select a basic bandwidth plan from the drop-down list.
        
        You can select only a basic bandwidth plan that is in the **Idle** state.
        
    

## Disassociate a basic bandwidth plan

You can disassociate a basic bandwidth plan from a GA instance. If your GA instance is associated with a basic bandwidth plan, you must disassociate the basic bandwidth plan before you can associate the GA instance with another basic bandwidth plan.

Make sure that no acceleration areas and listeners are configured for the GA instance from which you want to disassociate the basic bandwidth plan. If acceleration areas and listeners are configured, delete the acceleration areas and listeners. For more information, see the "Delete an acceleration area" section of the [Add and manage acceleration areas](/help/en/ga/user-guide/add-and-manage-acceleration-areas#section-zr4-jiz-a85) topic and the "More operations" section of the [Add and manage intelligent routing listeners](/help/en/ga/user-guide/add-and-manage-intelligent-routing-listeners#section-jz3-7ye-1b7) topic.

1.  Log on to the [GA console](https://ga.console.alibabacloud.com/list).
    
2.  In the left-side navigation pane, click **Bandwidth**.
    
3.  On the **Bandwidth** page, find the basic bandwidth plan that is associated with a GA instance and click **Unbind** in the **Actions** column.
    
4.  In the **Unbind Bandwidth Plan** message, click **OK**.
    

## Cancel the subscription of a basic bandwidth plan

You can unsubscribe from a subscription basic bandwidth plan. Before you unsubscribe from a basic bandwidth plan, make sure that you meet the requirements for unsubscription. For more information, see [Refund policies](/help/en/ga/product-overview/refund-policies#task-2292765).

## References

-   [CreateBandwidthPackage](/help/en/ga/api-createbandwidthpackage#doc-api-Ga-CreateBandwidthPackage): creates a bandwidth plan.
    
-   [BandwidthPackageAddAccelerator](/help/en/ga/api-bandwidthpackageaddaccelerator#doc-api-Ga-BandwidthPackageAddAccelerator): associates a bandwidth plan with a GA instance.
    
-   [ReplaceBandwidthPackage](/help/en/ga/api-replacebandwidthpackage#doc-api-Ga-ReplaceBandwidthPackage): replaces a bandwidth plan.
    
-   [BandwidthPackageRemoveAccelerator](/help/en/ga/api-bandwidthpackageremoveaccelerator#doc-api-Ga-BandwidthPackageRemoveAccelerator): disassociates a bandwidth plan from a GA instance.
    
-   [UpdateBandwidthPackage](/help/en/ga/api-153243#doc-api-Ga-UpdateBandwidthPackage): modifies the configurations of a bandwidth plan.

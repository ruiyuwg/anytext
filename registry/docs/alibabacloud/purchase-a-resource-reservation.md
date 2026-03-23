After you purchase a resource reservation, Alibaba Cloud reserves resources that match the attributes of the resource reservation in a private pool. You can use the reserved resources to create Elastic Compute Service (ECS) instances.

## Background information

You can purchase different types of resource reservation. Consider the following factors when you select a type of resource reservation: scenario, type of resource that you want to reserve, and the time when you want the resource reservation to take effect. For more information, see the [Resource Reservation](/help/en/ecs/user-guide/overview-29#section-oil-qh5-xvx) section of the "Overview of Resource Advisor" topic.

## Procedure

1.  Go to the Create Resource Reservation page.
    
    1.  Go to [ECS console - Resource Advisor](https://ecs.console.alibabacloud.com/resourceAssuranceV2/region).
        
    2.  Choose **Guaranteed Provision** > **Resource Reservations**.
        
    3.  On the **Resource Reservations** tab, click **Create Resource Reservation**.
        
2.  In the **Demand Configurations** step, configure parameters for the resource reservation.
    
    1.  In the **Resource Settings** section, configure the parameters that are described in the following table.
        
        **Parameter**
        
        **Description**
        
        **Example**
        
        **Region/Zone**
        
        The region and zone in which to reserve resources.
        
        Region: China (Hangzhou). Zone: **Zone I** and **Zone H**.
        
        **Resource Type**
        
        The instance types for which to reserve resources. To select an instance type that meets your business requirements, we recommend that you consider the following metrics in addition to the attributes of instance types, such as the number of vCPUs and memory size:
        
        -   Provision Health: indicates the real-time resource availability of an instance type based on the stock level, replenishment capacity, and popularity. A high stock level and high replenishment capability indicate good provision health. A high popularity indicates poor provision health. The provision health of each instance type is scored on a scale of -3 to 6.
            
            -   5 and 6 indicate that sufficient resources are available for purchase.
                
            -   1 to 4 indicate that resources may be insufficient to create a resource reservation.
                
            -   \-3 to 0 indicate poor provision health, and we recommend that you select a different instance type. You can click **Alternatives Recommended** in the **Actions** column to view the recommended alternative instance types.
                
        -   Quota: indicates the maximum number of instances of a specific instance type that you can purchase. To ensure that instances can be created from the resource reservation, we recommend that you specify the reserved quantity based on the quota.
            
        
        **ecs.c7.large** and **ecs.g7.large**
        
        **Reserved Quantity**
        
        The number of resources to reserve. If you select only one instance type for Resource Type, the resources that you want to reserve are measured in **Instances**. If you select multiple instance types for Resource Type, the resources that you want to reserve are measured in **vCPU**.
        
        **10 vCPU**
        
    2.  In the **Resource Reservation Settings** section, configure parameters such as Reservation Type and Effective Time.
        
        The following tables describe the parameters that you must configure for different types of resource reservation. For information about how to use each type of resource reservation, see [Overview of Elasticity Assurance](/help/en/ecs/user-guide/overview-of-elasticity-assurance#section-hqh-hyv-ml1), [Overview of Immediate Capacity Reservation](/help/en/ecs/user-guide/overview-of-immediate-capacity-reservation#section-py4-mvd-ypj), and [Overview of Scheduled Capacity Reservation](/help/en/ecs/user-guide/specify-a-time-effective-summary-of-capacity-reservation#section-mmt-5zy-3qx).
        
        Table 1. Immediate or scheduled elasticity assurance
        
        **Parameter**
        
        **Description**
        
        **Example**
        
        **Reservation Type**
        
        The type of resource reservation. Select **Immediate or Scheduled Elasticity Assurance**.
        
        **Immediate or Scheduled Elasticity Assurance**
        
        **Instance Billing Method**
        
        The billing method of instances for which to reserve resources. This parameter is automatically set to **Pay-as-you-go** and cannot be modified. The resources that are reserved by elasticity assurances in private pools can be used to create only pay-as-you-go instances.
        
        **Pay-as-you-go**
        
        **Effective Time**
        
        The time when the elasticity assurance takes effect. Valid values:
        
        -   **Immediately**: After the elasticity assurance is created, it immediately takes effect and can be immediately used to create pay-as-you-go instances.
            
        -   **Custom Time**: After the elasticity assurance is created, it takes effect at a specified time. After the elasticity assurance takes effect, it can be used to create pay-as-you-go instances.
            
        
        **Immediately**
        
        **Term**
        
        The validity period of the elasticity assurance. You can select a duration of one month up to five years. You are presented with the durations available for selection.
        
        **1 Months**
        
        Table 2. Scheduled capacity reservation
        
        **Parameter**
        
        **Description**
        
        **Example**
        
        **Reservation Type**
        
        The type of resource reservation. Select **Scheduled Capacity Reservation**.
        
        **Scheduled Capacity Reservation**
        
        **Instance Billing Method + Payment Option**
        
        The type of scheduled capacity reservation and the billing method of instances for which to reserve resources. Valid values:
        
        -   **Pay-as-you-go + Savings Plan**: The capacity reservation with Savings Plan, which is used to create pay-as-you-go instances. When you purchase a capacity reservation with Savings Plan, you must also purchase a savings plan to offer cost savings on pay-as-you-go instances that are created from the capacity reservation.
            
        -   **Subscription**: The capacity reservation for subscription resources, which is used to create subscription instances. After a capacity reservation for subscription resources takes effect, the requested resources are reserved in a private pool within the validity period of the capacity reservation and can be used to create subscription instances. When the capacity reservation expires, the reserved resources are released. An effective capacity reservation for subscription resources is billed at the equivalent pay-as-you-go rate of the selected instance type regardless whether reserved capacity is used to create instances.
            
        
        **Pay-as-you-go + Savings Plan**
        
        If you set Instance Billing Method + Payment Option to **Pay-as-you-go + Savings Plan**, specify the following parameters:
        
        -   **Effective Time**
            
        -   **Term**
            
        -   **Saving Plan Type**
            
        -   **Payment Option**
            
        
        -   **Effective Time**: The time when the capacity reservation with Savings Plan takes effect. The time can be three days to one year from the creation time of the capacity reservation.
            
        -   **Term**: The valid values are **1 Years** and **3 Years**.
            
        -   **Saving Plan Type**: The valid values are **General-purpose** and **ECS Compute**. A general-purpose savings plan applies to usage across Alibaba Cloud services regardless of region and instance family. An ECS compute savings plan applies only to ECS instance usage within a specific family in a region. ECS compute savings plans provide higher discounts than general-purpose savings plans.
            
        -   **Payment Option**: Only **No Upfront** is supported.
            
        
        For information about savings plans, see [Overview](/help/en/ecs/user-guide/what-is-savings-plan#concept-1950740).
        
        -   **Effective Time: 2023-05-01 09:00**
            
        -   **Term: 1 Years**
            
        -   **Saving Plan Type: ECS Compute**
            
        -   **Payment Option: No Upfront**
            
        
        If you set Instance Billing Method + Payment Option to **Subscription**, configure the following parameters:
        
        -   **Effective Time**
            
        -   **Expiration Time**
            
        
        -   **Effective Time**: The time when the capacity reservation for subscription resources takes effect. The time can be three days to one year from the creation time of the capacity reservation.
            
        -   **Expiration Time**: The expiration time of the capacity reservation for subscription resources. The time is automatically calculated based on the effective time of the capacity reservation and is seven days later than the effective time. You can use the reserved resources in the associated private pool to create subscription instances only within the validity period of the capacity reservation.
            
        
        -   **Effective Time: 2023-05-01 09:00**
            
        -   **Expiration Time: 2023-05-08 09:00**
            
        
        Table 3. Immediate capacity reservation
        
        **Parameter**
        
        **Description**
        
        **Example**
        
        **Reservation Type**
        
        The type of resource reservation. Select **Immediate Capacity Reservation**.
        
        **Immediate Capacity Reservation**
        
        **Instance Billing Method**
        
        The billing method of instances for which to reserve resources. This parameter is automatically set to **Pay-as-you-go** and cannot be modified. The resources that are reserved by immediate capacity reservations in private pools can be used to create only pay-as-you-go instances.
        
        **Pay-as-you-go**
        
        **Expiration Method**
        
        The method that is used to release the immediate capacity reservation. Valid values:
        
        -   **Manual Release**: After you purchase the immediate capacity reservation, it exists until you manually release it.
            
        -   **Release Upon Expiration**: The immediate capacity reservation is automatically released when it expires. If you select Release Upon Expiration, you must specify an expiration time for the capacity reservation. The expiration time must be at least 1 hour later than the current time.
            
        
        **Manual Release**
        
        **Operating System**
        
        Linux and Windows are supported. The immediate capacity reservation can be used to create instances of only the same operating system type. If you want to use an immediate capacity reservation together with a regional reserved instance to reduce costs, make sure that their operating system types are the same.
        
        **linux**
        
    3.  In the **Private Pool Information** section, configure the parameters for the private pool.
        
        The following table describes the parameters. For information about how to create and use a private pool, see the [Private Pool](/help/en/ecs/user-guide/overview-29#section-xef-mky-6mp) section of the "Overview" topic.
        
        **Parameter**
        
        **Description**
        
        **Example**
        
        **Private Pool Type**
        
        The valid values are **Open** and **Targeted**. You can prepare a specific number of open and targeted private pools based on your business types. For example, you can prepare targeted private pools for critical businesses and open private pools for other businesses. Open private pools and targeted private pools are used differently.
        
        -   Open private pools can be used in a more flexible manner. When you create instances, you can perform the following operations to use an open private pool:
            
            -   Specify the ID of an open private pool.
                
            -   If tag matching is enabled for the open private pool that you want to use, set Private Pool Type to Open and do not specify a private pool ID. Add the tags of the elasticity assurance or capacity reservation that is associated with the open private pool. Then, the open private pool is automatically matched and used to create the instances.
                
            -   If tag matching is not enabled for open private pools, set Private Pool Type to Open and do not specify a private pool ID. An open private pool whose associated elasticity assurance or capacity reservation does not have tags is automatically used.
                
        -   To use a targeted private pool to create instances, set Private Pool Type to Targeted and specify the ID of the private pool.
            
        
        **Open**
        
        **Private Pool Name**
        
        The name of the private pool. The name must be 2 to 128 characters in length. It must start with a letter and cannot start with http:// or https://. It can contain letters, digits, periods (.), colons (:), underscores (\_), and hyphens (-).
        
        iCR-\*\*\*\*-20211021
        
        **Description**
        
        The description of the private pool. Enter an informative description for easy management. The description must be 2 to 256 characters in length and cannot start with http:// or https://.
        
        Create instances for critical business A
        
    4.  **(Optional)** In the **Tags (Optional)** section, specify tags for the resource reservation.
        
        You can perform operations such as batch execution of O&M tasks and cost sharing based on tags. For information about tags and how to use tags, see [Tags](/help/en/ecs/user-guide/label-overview#concept-jzp-qtd-zdb).
        
        You can use open private pools in a fine-grained manner based on tags. After you add tags to a resource reservation, tag matching is automatically enabled for the associated private pool. If you set Private Pool Type to Open without specifying a private pool ID and add the same tags when you create instances, the associated private pool is automatically matched and used.
        
        **Note**
        
        After a resource reservation takes effect, the associated private pool is always matched based on the tags that are added when the resource reservation is purchased. We recommend that you do not edit the tags of purchased resource reservations.
        
    5.  In the **Specifications** section, select a recommended plan based on your business requirements.
        
        Alibaba Cloud recommends alternative plans that deliver optimal performance, are backed by the most sufficient supply of resources, or provide multi-zone redundancy. Select a plan that best meets your requirements to reserve resources.![recommended-solution](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4882257961/p342048.png)
        
        If no recommended plans are available or if the available plans do not meet your requirements, click **Submit Demand Order** to reserve resources.
        
        **Note**
        
        Only the capacity reservation for subscription resources supports Submit Demand Order. If Submit Demand Order is not displayed, contact your business manager for assistance.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2557818171/p789523.png)
        
    6.  Click **Next: Preview**.
        
3.  In the **Preview** step, confirm the configurations.
    
    ![confirm-info](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4882257961/p342052.png)
    
    1.  In the **Resource Reservation Overview** section, confirm the attributes of the resource reservation.
        
        The attributes include the number of resources to reserve, the billing method of instances for which to reserve resources, and the information of the private pool.
        
    2.  In the **Resource Plan** section, confirm the details of the resources to reserve.
        
        The details include the instance type name, zone, reference price, and instance specifications.
        
        **Note**
        
        Each resource reservation applies to only one instance type in only one zone. If you select a plan that includes multiple instance types or zones, the plan is automatically split into multiple resource reservations.
        
    3.  In the **Notes** section, read the notes. Then, select **I have read and understood the preceding notes** and click **Create**.
        
4.  If the resource reservation is created, **Created** is displayed in the **Order** step.
    

## What to do next

Go back to the **Resource Reservations** tab. After the created resource reservation enters the **Active** state, you can use the private pool that is associated with the resource reservation to create instances. For more information, see [Use a private pool to create instances](/help/en/ecs/user-guide/use-a-private-pool-to-create-instances#task-2001647). The following figure shows information about a created immediate capacity reservation. ![created-icr](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8079628761/p342060.png)

## References

-   [CreateElasticityAssurance](/help/en/ecs/developer-reference/api-ecs-2014-05-26-createelasticityassurance): creates an elasticity assurance in a region.
    
-   [PurchaseElasticityAssurance](/help/en/ecs/developer-reference/api-ecs-2014-05-26-purchaseelasticityassurance): purchases an elasticity assurance that is not in the active state and for which resources are prepared.
    
-   [CreateCapacityReservation](/help/en/ecs/developer-reference/api-ecs-2014-05-26-createcapacityreservation): creates a capacity reservation.
    
-   [RenewElasticityAssurances](/help/en/ecs/developer-reference/api-ecs-2014-05-26-renewelasticityassurances): renews one or more elasticity assurances that you purchased.

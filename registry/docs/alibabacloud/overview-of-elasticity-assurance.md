Creating pay-as-you-go instances during peak business hours can fail due to insufficient resources. Elasticity Assurance, also called EA, guarantees capacity for these instances by reserving resources in a private pool.

## Scenarios

**Scenario**

**Periodic resource demand**

**Occasional resource demand**

**Peak resource demand**

**Diagram**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4842413771/CAEQTxiBgIDtwMz21hkiIDA5ZmQ5MzE2YWU4NDRiMzQ4NGFlYzZiYzkwZjExYzEw5725218_20250919111249.237.svg)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4842413771/CAEQTxiBgMCcwcz21hkiIGJiNmE4YjViZmUxODQwMGFhYzEwZTBmNTBlNzM1ZDBm5725218_20250919111249.237.svg)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4842413771/CAEQTxiBgICDwsz21hkiIDBkYzQ0YzljMGRkNzRmYTNhMDdlMjJkNTQ0NWE1ZWNj5725218_20250919111249.237.svg)

**Description**

Suitable for predictable, periodic resource peaks. Ensures tasks start on time and prevents resource waste during off-peak periods.

Reserves resources for unexpected events or traffic spikes. This ensures rapid business response and high availability.

During periods of high network-wide resource contention, such as Double 11 and the Spring Festival, reserve resources in advance for your core services to prevent business disruption from resource competition.

**Example scenarios**

Month-end financial reconciliation, weekend batch rendering, and daily scheduled data analytics.

Responding to sudden hot spot events, application scale-outs, and online service disaster recovery switchovers.

ApsaraVideo Live, e-commerce sales promotions, online game launches, and flash ticket sales.

## **Core concepts**

When you purchase an elasticity assurance, the system reserves resources that match the specified instance type and quantity in the designated zone. These resources form a [private pool](/help/en/ecs/user-guide/private-pools/).

> A public pool is a resource pool shared by all users. If you create an instance without specifying a private pool, the system allocates resources from the public pool by default.

**Attribute**

**Dedicated private pool**

**Open private pool**

**Access policy**

**Strict binding (strong guarantee)**: Uses only the dedicated private pool. If the capacity is insufficient, instance creation fails.

**Priority + fallback**: Prioritizes the open private pool. If the capacity is insufficient, the system automatically tries to use the public resource pool.

**Resource isolation**

Reserved for specific services or scenarios with strong isolation.

Can be used as a general capacity pool shared by multiple business scenarios.

**Usage**

When creating an instance, use the **Specified** mode to select a dedicated private pool.

-   When creating an instance, use the **Specified** mode to select an open private pool**.**
    
-   When creating an instance, use the **Open** mode.
    

**Elasticity Assurance - Time-based**: Reserves resources for preset time slots (such as 18:00 to 24:00 daily) within a specified period (such as 30 days).

**Elasticity Assurance**: Reserves resources continuously for a specified period (such as 3 months).

## Procedure

### **Process overview**

1.  **Purchase an elasticity assurance**: Purchase an elasticity assurance to obtain a private pool.
    
2.  **Create an ECS instance**: When you create the instance, specify the private pool of the purchased elasticity assurance.
    
3.  **Verify and manage**: View the private pool usage and associated instances.
    

### **Elasticity Assurance - Time-based**

#### **Step 1: Purchase an elasticity assurance**

1.  Go to the [ECS console - Elasticity Assurance](https://ecs.console.alibabacloud.com/elasticity-assurance/region/cn-hangzhou) page.
    
2.  Click **Create Elasticity Assurance**.
    
    -   The interval between the **Start Time** and **End Time** must be at least 7 days and at most 365 days.
        
    -   **Repeat Rule**: You can configure up to 10 rules.
        
        You can set the assurance period based on a daily, weekly, or monthly recurrence. The minimum **Time Zone** range is 4 hours. The total assured duration must be at least 10% of the total period.
        
        > Hover over **Coverage period (UTC) preview** to view the assurance period details.
        
    -   **Private Pool Type**:
        
        -   **Open**: An open private pool.
            
        -   **Private Mode**: A dedicated private pool reserved for a specific scenario or service.
            
3.  Select **I have read and understood**, and click **Buy Now**.
    
    Return to the [ECS console - Elasticity Assurance](https://ecs.console.alibabacloud.com/elasticity-assurance/region/cn-hangzhou) page. The purchase is successful when the status changes to **Resource Locked** or **Active**.
    

#### **Step 2: Use the elasticity assurance to create an instance**

1.  Go to the [ECS console - Elasticity Assurance](https://ecs.console.alibabacloud.com/elasticity-assurance/region/cn-hangzhou) page.
    
2.  Find the desired elasticity assurance and click **Purchase Instance** in the **Actions** column.
    
3.  Set **Billing Method** to **Pay-as-you-go**. For other configurations, see [Create a custom instance](/help/en/ecs/user-guide/create-an-instance-by-using-the-wizard#task-vwq-5g4-r2b).
    
4.  At the bottom of the page, expand **Advanced Settings** and select a **Private Pool Type**.
    
    -   **Open**: The system prioritizes matching an open private pool. If the capacity of the private pool is insufficient, the system attempts to use the public pool.
        
    -   **None**: Does not use a private pool. Resources are allocated only from the public pool.
        
    -   **Targeted**: Specify a matching open or dedicated **Private Pool**.
        
5.  Click **Create Order**.
    

#### **Step 3: View elasticity assurance information**

1.  Go to the [ECS console - Elasticity Assurance](https://ecs.console.alibabacloud.com/elasticity-assurance/region/cn-hangzhou) page.
    
2.  On the **Elasticity Assurance** page, click the ID of an elasticity assurance to go to its details page. On this page, you can view information such as the capacity usage of the private pool.
    
    In the **Associated Instances** section, you can view the instances created using this elasticity assurance.
    

### **Elasticity Assurance**

#### **Step 1: Purchase an elasticity assurance**

1.  Go to the [ECS console - Resource Center](https://ecs.console.alibabacloud.com/resourceAssuranceV2/region), and choose **Guaranteed Provision** > **Resource Reservations**.
    
2.  On the **Resource Reservations** tab, click **Create Resource Reservation** to go to the configuration page.
    
    -   **Resource Settings**: Select the **Region/Zone**, **Resource Type**, and **Reserved Quantity**.
        
    -   **Resource Reservation Settings**:
        
        -   **Reservation Type**: Select **Immediate or Scheduled Elasticity Assurance**.
            
        -   **Term**: Select a monthly or yearly subscription for a duration from 1 month to 5 years.
            
    -   **Private Pool Information**:
        
        -   **Open**: An open private pool.
            
        -   **Targeted**: A dedicated private pool reserved for a specific scenario or service.
            
    -   **Specifications Recommendations**:
        
        > The system recommends plans based on dimensions such as inventory priority, multi-zone disaster recovery, and performance priority. Resources are reserved based on the plan that you select.
        
        ![recommended-solution](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4882257961/p342048.png)
        
3.  Click **Next: Preview**, and verify the configuration.
    
4.  Read the **Notes**, select **I have read and understood the preceding notes**, and click **Create**.
    
    Return to the list page. The purchase is successful when the status changes to **Active**.
    

#### **Step 2: Use the elasticity assurance to create an instance**

1.  Go to the [ECS console - Resource Center](https://ecs.console.alibabacloud.com/resourceAssuranceV2/region), and choose **Guaranteed Provision** \> **Resource Reservations**.
    
2.  Find the desired resource reservation and click **Purchase Instance** in the **Actions** column.
    
3.  Set **Billing Method** to **Pay-as-you-go**. For other configurations, see [Create a custom instance](/help/en/ecs/user-guide/create-an-instance-by-using-the-wizard#task-vwq-5g4-r2b).
    
4.  In the **Advanced Settings (Optional)** section, select a **Private Pool Type**.
    
    -   **Open**: The system prioritizes matching an open private pool. If the capacity of the private pool is insufficient, the system attempts to use the public pool.
        
    -   **None**: Does not use a private pool. Resources are allocated only from the public pool.
        
    -   **Targeted**: Specify an open or dedicated private pool.
        

#### **Step 3: View elasticity assurance information**

1.  Go to the [ECS console - Resource Center](https://ecs.console.alibabacloud.com/resourceAssuranceV2/region).
    
2.  In the top navigation bar, select the region and resource group of the resource that you want to manage. ![Region](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8343404471/p680076.png) 
    
3.  In the navigation pane on the left of the Resource Center, choose **Guaranteed Provision** > **Resource Reservations**.
    
4.  On the **Resource Reservations** tab, filter by **Reservation Type** and select **Elasticity Assurance**.
    
5.  In the filtered **Elasticity Assurance** list, click the ID of an elasticity assurance to go to its details page. On this page, you can view information such as the capacity usage of the private pool.
    
    In the **Associated Instances** section, you can view the instances created using this elasticity assurance.
    

### **API**

#### **Step 1: Create and purchase an elasticity assurance**

1.  Call the [CreateElasticityAssurance](/help/en/ecs/developer-reference/api-ecs-2014-05-26-createelasticityassurance) operation to create an elasticity assurance or a time-based elasticity assurance.
    
2.  Call the [PurchaseElasticityAssurance](/help/en/ecs/developer-reference/api-ecs-2014-05-26-purchaseelasticityassurance) operation to purchase a ready and inactive elasticity assurance.
    

#### **Step 2: Use an elasticity assurance to create an instance**

Call the [RunInstances](/help/en/ecs/developer-reference/api-ecs-2014-05-26-runinstances) operation to create an instance.

Use `PrivatePoolOptions.MatchCriteria` to specify the private pool type. If you set the private pool type to Specified mode (`Target`), you must use `PrivatePoolOptions.Id` to specify the ID of the desired private pool.

#### **Step 3: View and modify an elasticity assurance**

#### **Query**

-   Call the [DescribeElasticityAssurances](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeelasticityassurances) operation to query the details of elasticity assurances.
    
-   Call the [DescribeElasticityAssuranceInstances](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeelasticityassuranceinstances) operation to query the list of instances that are matched by an elasticity assurance.
    

#### **Modify**

-   Call the [ModifyElasticityAssurance](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifyelasticityassurance) operation to modify information about an elasticity assurance, such as its name, description, and capacity.
    
-   Call the [ModifyInstanceAttachmentAttributes](/help/en/ecs/developer-reference/api-ecs-2014-05-26-modifyinstanceattachmentattributes) operation to modify the private pool matching mode for an instance.
    

## **Scenarios and recommended policies**

**Scenario 1: Core services - Guarantee resource certainty**

-   **Applicable services:** Core applications such as e-commerce sales promotions, game launches, and financial settlements.
    
-   **Recommended policy:** Purchase a **dedicated private pool** and use the **Specified** mode when creating instances.
    
-   **Result:** As long as the private pool has available capacity, instances can be created successfully. This avoids the risk of creation failures due to insufficient public resources.
    

**Scenario 2: High-priority services - Balance assurance and elasticity**

-   **Applicable services:** Applicable to scenarios such as data analytics, batch computing, and routine scale-outs for online services, where you want to **prioritize assurance** but also use public resources as a supplement.
    
-   **Recommended policy:** Purchase an **open private pool** and use the **Open** mode when creating instances.
    
-   **Result:** The reserved capacity is used first. If the reserved capacity is exhausted, the system automatically attempts to use the public resource pool.
    

**Scenario 3: Non-core or development/testing - Prioritize cost**

-   **Applicable services:** Development, staging environments, or non-core services that can tolerate occasional creation failures.
    
-   **Recommended policy:** Select the **Do Not Use** private pool option when you create instances.
    
-   **Result:** The public resource pool is used, but you must accept the possibility that instance creation may fail due to inventory fluctuations in the public resource pool.
    

## **Billing**

The cost of an elasticity assurance consists of two parts:

1.  **Assurance fee (upfront)**: A one-time service fee paid when you purchase the elasticity assurance.
    
2.  **Instance fee (pay-as-you-go)**: Pay-as-you-go instances successfully created from the private pool are billed at the standard price.
    

**Assurance type**

**Time-based Elasticity Assurance**

**Elasticity Assurance**

**Diagram**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4842413771/CAEQTxiBgIDvxsz21hkiIDFmOGEzMWNlODAxNDQ4NDk4ZmNjZGUwYjQ5YTIyOTgy5725218_20250919111249.237.svg)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4842413771/CAEQTxiBgMDVx8z21hkiIDlmYmJkZWEzZDMwYzQ3NzliN2JjYmQzMDBiZjc4OTRj5725218_20250919111249.237.svg)

**Assurance fee calculation**

Reserved Capacity × 30days×24hoursMonthly Price For the Instance Type​×10%×Guaranteed Duration (hours)

> The protection duration is the accumulated duration of non-contiguous time segments.

Reserved Capacity×Monthly Price For the Instance Type×40%×Guaranteed Duration (months)

**Total fee**

`Coverage fee` + `instance fee`

**Instance fee offset order**: For pay-as-you-go instances created using an elasticity assurance, hourly bills are offset against matching offers as follows:

1.  [**Savings Plans**](/help/en/ecs/savings-plans)
    
2.  [**Regional Reserved Instances**](/help/en/ecs/reserved-instances#f1be5c541axq7)
    
    > Zonal reserved instances are not supported.
    
3.  If no offers apply, you are billed at the standard pay-as-you-go price.
    

## Limits

-   **Scope**: elasticity assurances are available only in specific regions and zones and for specific instance types. For more information, see the purchase page in the console.
    
-   **Modifications and releases**: After purchase, elasticity assurances cannot be modified, canceled, or released early. They automatically expire at the end of their term.
    
-   **Attribute matching**: When you create an instance, the selected region, zone, and instance type must exactly match the attributes of the elasticity assurance.
    
-   **Scope of reservation**: The reservation guarantees only the capacity for the specified ECS instance type. It does not guarantee the availability of associated resources, such as disks, public IP addresses, or Elastic Network Interfaces (ENIs).
    
-   **Effect of instance operations**: Upgrading or downgrading a created instance removes it from the private pool of the elasticity assurance. The instance no longer has guaranteed resource availability.
    

## Recommendations for production environments

-   **Integrate with Auto Scaling:** Combine Elasticity Assurance with Auto Scaling (ESS) to automate resource scheduling.
    
    When you [create](/help/en/auto-scaling/user-guide/create-an-ecs-scaling-group) or [modify a scaling group](/help/en/auto-scaling/modify-a-scaling-group#concept-qkz-nkx-rfb), set the **Resource Pool Policy** to prioritize using the private pool capacity from the elasticity assurance.
    
    -   **Resource Pool Policy options**:
        
        -   **Prioritize Private Pool**: Prioritizes the use of the specified private pool. If the private pool has insufficient capacity, the system automatically uses an open private pool or the public pool.
            
        -   **Private Pool Only**: The instance must use the capacity from a private pool. Otherwise, the instance fails to start.
            
    -   **Configuration steps**:
        
        1.  Log on to the [Auto Scaling console](https://ess.console.alibabacloud.com/).
            
        2.  Create or modify a scaling group.
            
        3.  In the **Advanced Settings** of the [scaling configuration](/help/en/auto-scaling/user-guide/manage-scaling-configurations#9f06c1bc759oq), select a resource pool policy and specify a private pool for the elasticity assurance.
            
-   **Monitoring and alerting**: Use Cloud Monitor to [create alert rules](/help/en/cms/cloudmonitor-1-0/user-guide/create-an-alert-rule) for key metrics to stay informed about capacity usage. For example, you can trigger an alert when the available capacity drops below 20% of the total capacity:
    
    -   Set Product to **ECS Private Pool**.
        
    -   Set **Metric** to **Instance Number Usage**, **Alert Level** to **Warning (warn)**, and **Threshold** to 20%.
        

## **References**

[Comparison of Elasticity Assurance and Capacity Reservation](/help/en/ecs/user-guide/overview-29#table-3u7-qya-ewf)

## **FAQ**

**Q: Why isn't the capacity of my elasticity assurance updated immediately after I release an instance?**

A: Releasing an instance takes time. To prevent creation failures that can occur if the capacity has not yet been updated, avoid creating and releasing instances frequently.

**Q: Can I use a single elasticity assurance across multiple zones?**

A: No, you cannot. If you need assurance across multiple zones, you must create an elasticity assurance in each zone.

**Q: Can I change the instance type for an elasticity assurance?**

A: No, you cannot. The instance type for an elasticity assurance cannot be changed after it is purchased.

**Q: How can I view the remaining capacity of a private pool?**

A: Go to the elasticity assurance list page and click an elasticity assurance ID. You can view the capacity usage in the **Resource Details** section.

**Q: What are tags used for with elasticity assurances?**

A: When you create an instance, an open private pool can be matched based on the instance tags.

-   With **Tags**: If you add tags to an instance that match the tags of an open private pool, the instance is automatically matched with that pool.
    
    > After an elasticity assurance takes effect, it always uses the tags that were specified at the time of purchase to match with a private pool.
    
-   Without **Tags**: If you do not add tags to the instance, the system automatically matches the instance with any available open private pool.

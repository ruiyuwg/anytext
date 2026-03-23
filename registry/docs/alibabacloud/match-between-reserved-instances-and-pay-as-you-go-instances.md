A reserved instance is a discount plan that provides savings on your Alibaba Cloud usage. A reserved instance does not directly provide resources and must be applied to pay-as-you-go resources to provide discounts. Even if you do not have eligible pay-as-you-go instances after you purchase a reserved instance, you are charged for the reserved instance. To maximize the benefits of reserved instances and reduce operational costs, you must be familiar with the usage rules (offset rules) of reserved instances. This topic describes the rules and provides examples of how reserved instances are matched to pay-as-you-go instances.

## Usage rules

-   You do not need to manually apply reserved instances to pay-as-you-go instances.
    
-   After you purchase a reserved instance, the reserved instance is automatically matched to eligible pay-as-you-go instances during the term of the reserved instance. After a reserved instance is matched to pay-as-you-go instances, the reserved instance is applied to **offset the fees of the computing resources of the pay-as-you-go instances every hour** until the reserved instance expires. The computing power of a reserved instance is calculated by using the following formula: Normalization factor of the instance type × Number of instances that can be offset by the reserved instance.
    
    **Note**
    
    The normalization factor indicates the computing power of a reserved instance and varies based on the number of vCPUs. When you use a reserved instance, you can calculate the number of computing resources that you can obtain based on the instance type specified for the reserved instance and the normalization factor of the instance type. For information about how to view the normalization factor of each instance type, see [View the normalization factor table](/help/en/ecs/view-reserved-instances#ecc56a86c9210).
    
-   Reserved instances are matched to pay-as-you-go instances based on specific matching rules.
    
    Regional and zonal reserved instances use different matching rules to match pay-as-you-go instances. The following table describes the instance attributes that are used to define matching rules.
    
    **Attribute**
    
    **Regional reserved instance**
    
    **Zonal reserved instance**
    
    Region and zone
    
    Reserved instances can be matched to pay-as-you-go instances across zones in a specific region.
    
    Reserved instances can be matched to pay-as-you-go instances only in the specified zone.
    
    Instance type
    
    -   In a specific instance family, you can use low-specification reserved instances to match high-specification instances, or use high-specification reserved instances to match low-specification instances.
        
    -   Resource reservation is not supported.
        
    
    -   Reserved instances can be matched to pay-as-you-go instances only of the same instance type as the reserved instances.
        
    -   Resource reservation is supported.
        
        A zonal reserved instance reserves a specific number of instances of a specific instance type within a specific term to ensure that pay-as-you-go instances can be created in a specific zone at any time.
        
    
    Operating system
    
    Reserved instances can be matched to only pay-as-you-go instances that have the same operating system as the reserved instances.
    
    Regional and zonal reserved instances can offset the fees of pay-as-you-go instances only when the following matching rules are met.
    
    #### **Regional reserved instances**
    
    -   The regional reserved instances and pay-as-you-go instances reside in the same region.
        
        The regional reserved instances support cross-zone deduction for pay-as-you-go instances that reside in the same zone or different zones.
        
    -   The regional reserved instances and pay-as-you-go instances belong to the same instance family.
        
        Low-specification regional reserved instances can offset the fees of high-specification instances, and high-specification regional reserved instances can offset the fees of low-specification instances.
        
        **Note**
        
        You can calculate the computing power to evaluate the usage of regional reserved instances when the reserved instances and pay-as-you-go instances have different specifications.
        
    -   The regional reserved instances and pay-as-you-go instances run the same operating system.
        
    
    #### **Zonal reserved instances**
    
    -   The zonal reserved instances and pay-as-you-go instances reside in the same zone of a region.
        
    -   The zonal reserved instances and pay-as-you-go instances belong to the same instance family and have the same specifications.
        
    -   The zonal reserved instances and pay-as-you-go instances run the same operating system.
        
    
    **Note**
    
    You can view eligible pay-as-you-go instances that match reserved instances. For more information, see [Purchase reserved instances](/help/en/ecs/purchase-reserved-instances#c2c7eb25b9lax).
    

## **Eligible items for reserved instances**

-   Reserved instances can offset the fees of the computing resources (vCPUs and memory) of pay-as-you-go instances, but cannot offset the fees of other resources, such as network and storage resources. For information about the billing of Elastic Compute Service (ECS) instances, see [Billing overview](/help/en/ecs/billing-overview).
    
-   Windows reserved instances can also offset the image fees of pay-as-you-go Windows instances.
    
    **Note**
    
    Windows reserved instances already include Windows images at no additional cost.
    

## **Usage priorities**

Savings plans and reserved instances can be applied to offset the fees of computing resources for pay-as-you-go instances. If you have multiple discount plans, the plans are applied in the following sequence:

1.  Reserved instances and resource plans, such as storage capacity units (SCUs).
    
    **Note**
    
    Reserved instances can offset the fees of pay-as-you-go computing resources. SCUs can offset the fees of pay-as-you-go storage resources. You can use a combination of reserved instances and SCUs in pay-as-you-go scenarios to significantly reduce the computing and storage costs.
    
2.  ECS compute savings plans.
    
3.  General-purpose savings plans.
    
4.  Coupons.
    

## **Examples**

### **Examples of regional reserved instances**

#### **Success examples**

**Scenario**

**Regional reserved instance**

**Pay-as-you-go instance**

**Deduction result**

A single reserved instance with low specifications offsets the fees of a single pay-as-you-go instance with high specifications.

You have an active regional reserved instance that has the following attributes:

-   Region and zone: multiple zones in the China (Qingdao) region.
    
-   Instance type: ecs.g5.xlarge.
    
-   Operating system: Linux.
    
-   Number of instances: 1.
    

You have one pay-as-you-go instance that has the following attributes:

-   Region and zone: Qingdao Zone B in the China (Qingdao) region.
    
-   Instance type: ecs.g5.2xlarge.
    
-   Image: Linux.
    

1.  Normalization factor per instance type
    
    -   The normalization factor of each ecs.g5.xlarge reserved instance is 4.
        
    -   The normalization factor of each ecs.g5.2xlarge pay-as-you-go instance is 8.
        
2.  Comparison of computing power
    
    -   Reserved instance: One reserved instance delivers 4 (= 1 × 4) units of computing power per hour.
        
    -   Pay-as-you-go instance: One instance consumes 8 (= 1 × 8) units of computing power per hour.
        
3.  Deduction result
    
    One reserved instance can offset 50% bills of one pay-as-you-go instance per hour.
    

Multiple reserved instances with low specifications offset the bills of a single pay-as-you-go instance with high specifications.

You have two active regional reserved instances that have the following attributes:

-   Attributes of one regional reserved instance:
    
    -   Region and zone: multiple zones in the China (Qingdao) region.
        
    -   Instance type: ecs.g5.xlarge.
        
    -   Operating system: Linux.
        
    -   Number of instances: 1.
        
-   Attributes of the other reserved instance:
    
    -   Region and zone: multiple zones in the China (Qingdao) region.
        
    -   Instance type: ecs.g5.xlarge.
        
    -   Operating system: Linux.
        
    -   Number of instances: 1.
        

You have one pay-as-you-go instance that has the following attributes:

-   Region and zone: Qingdao Zone B in the China (Qingdao) region.
    
-   Instance type: ecs.g5.2xlarge.
    
-   Image: Linux.
    

1.  Normalization factor per instance type
    
    -   The normalization factor of each ecs.g5.xlarge reserved instance is 4.
        
    -   The normalization factor of each ecs.g5.2xlarge pay-as-you-go instance is 8.
        
2.  Comparison of computing power
    
    -   Two reserved instances: Two reserved instances deliver 8 (= 2 × 4) units of computing power per hour.
        
    -   Pay-as-you-go instance: One instance consumes 8 (= 1 × 8) units of computing power per hour.
        
3.  Deduction result
    
    The two reserved instances can offset 100% hourly bills of one pay-as-you-go instance.
    

A single reserved instance with high specifications offsets the bills of a single pay-as-you-go instance with low specifications.

You have an active regional reserved instance that has the following attributes:

-   Region and zone: multiple zones in the China (Qingdao) region.
    
-   Instance type: ecs.g5.4xlarge.
    
-   Operating system: Linux.
    
-   Number of instances: 1.
    

You have one pay-as-you-go instance that has the following attributes:

-   Region and zone: Qingdao Zone B in the China (Qingdao) region.
    
-   Instance type: ecs.g5.2xlarge.
    
-   Image: Linux.
    

1.  Normalization factor per instance type
    
    -   The normalization factor of each ecs.g5.4xlarge reserved instance is 16.
        
    -   The normalization factor of each ecs.g5.2xlarge pay-as-you-go instance is 8.
        
2.  Comparison of computing power
    
    -   Reserved instance: One reserved instance delivers 16 (= 1 × 16) units of computing power per hour.
        
    -   Pay-as-you-go instance: One instance consumes 8 (= 1 × 8) units of computing power per hour.
        
3.  Deduction result
    
    One reserved instance can offset 100% hourly bills of one pay-as-you-go instance and remain 50% of total computing power.
    

A single reserved instance with high specifications offsets the bills of multiple pay-as-you-go instances with low specifications.

You have an active regional reserved instance that has the following attributes:

-   Region and zone: multiple zones in the China (Qingdao) region.
    
-   Instance type: ecs.g5.4xlarge.
    
-   Operating system: Linux.
    
-   Number of instances: 1.
    

You have four pay-as-you-go instances.

-   Two pay-as-you-go instances have the following attributes:
    
    -   Region and zone: Qingdao Zone B in the China (Qingdao) region.
        
    -   Instance type: ecs.g5.xlarge.
        
    -   Image: Linux.
        
-   The other two pay-as-you-go instances have the following attributes:
    
    -   Region and zone: Qingdao Zone C in the China (Qingdao) region.
        
    -   Instance type: ecs.g5.xlarge.
        
    -   Image: Linux.
        

1.  Normalization factor per instance type
    
    -   The normalization factor of each ecs.g5.4xlarge reserved instance is 16.
        
    -   The normalization factor of each ecs.g5.xlarge pay-as-you-go instance is 4.
        
2.  Comparison of computing power
    
    -   Reserved instances: One reserved instance delivers 16 (= 1 × 16) units of computing power per hour.
        
    -   Pay-as-you-go instances: Four instances consume 16 (= 4 × 4) units of computing power per hour.
        
3.  Deduction result
    
    -   Pay-as-you-go instances reside in two zones, whose fees can be offset by regional reserved instances that flexibly support cross-zone offset.
        
    -   One reserved instance can offset 100% hourly bills of four pay-as-you-go instances.
        

#### Failure examples

**Scenario**

**Regional reserved instance**

**Pay-as-you-go instance**

**Deduction result**

Failed deduction

You have one active regional reserved instance that has the following attributes:

-   Region and zone: multiple zones in the China (Qingdao) region.
    
-   Instance type: ecs.g5.4xlarge.
    
-   Operating system: Linux.
    
-   Number of instances: 1.
    

You have one pay-as-you-go instance that has the following attributes:

-   Region and zone: Qingdao Zone B in the China (Qingdao) region.
    
-   Instance type: ecs.g5.xlarge.
    
-   Image: Windows.
    

The reserved instance fails to match the pay-as-you-go instance because of the operating system inconsistency.

As a result, the reserved instance cannot offset the bills of the pay-as-you-go instance.

You have one active regional reserved instance that has the following attributes:

-   Region and zone: multiple zones in the China (Qingdao) region.
    
-   Instance type: ecs.g5.xlarge.
    
-   Operating system: Linux.
    
-   Number of instances: 1.
    

You have one pay-as-you-go instance that has the following attributes:

-   Region and zone: Hangzhou Zone B in the China (Hangzhou) region.
    
-   Instance type: ecs.c5.xlarge.
    
-   Image: Linux.
    

The reserved instance fails to match the pay-as-you-go instance due to the following reasons:

-   The reserved instance and the pay-as-you-go instance reside in different regions.
    
-   The instance type of the reserved instance and the instance type of the pay-as-you-go instance belong to different instance families.
    

As a result, the reserved instance cannot offset the bills of the pay-as-you-go instance.

### **Examples of zonal reserved instances**

#### Success examples

**Scenario**

**Zonal reserved instance**

**Pay-as-you-go instance**

**Deduction result**

A single reserved instance offsets the bills of a single pay-as-you-go instance.

You have an active zonal reserved instance that has the following attributes:

-   Region and zone: Qingdao Zone B in the China (Qingdao) region.
    
-   Instance type: ecs.g5.xlarge.
    
-   Operating system: Windows.
    
-   Number of instances: 1.
    

You have one pay-as-you-go instance that has the following attributes:

-   Region and zone: Qingdao Zone B in the China (Qingdao) region.
    
-   Instance type: ecs.g5.xlarge.
    
-   Image: Windows.
    

1.  Normalization factor per instance type
    
    The reserved instance and pay-as-you-go instance are of the same instance type, and therefore, have the same normalization factor. The normalization factor of the ecs.g5.xlarge instance type is 4.
    
2.  Comparison of computing power
    
    -   Reserved instance: One reserved instance delivers 4 (= 1 × 4) units of computing power per hour.
        
    -   Pay-as-you-go instance: One instance consumes 4 (= 1 × 4) units of computing power per hour.
        
3.  Deduction result
    
    One reserved instance can offset 100% hourly bills of one pay-as-you-go instance.
    

A single reserved instance offsets the bills of multiple pay-as-you-go instances.

You have an active zonal reserved instance that has the following attributes:

-   Region and zone: Qingdao Zone B in the China (Qingdao) region.
    
-   Instance type: ecs.g5.xlarge.
    
-   Operating system: Windows.
    
-   Number of instances: 1.
    

You have five pay-as-you-go instances that have the following attributes:

-   Region and zone: Qingdao Zone B in the China (Qingdao) region.
    
-   Instance type: ecs.g5.xlarge.
    
-   Image: Windows.
    

1.  Normalization factor per instance type
    
    The reserved instance and pay-as-you-go instances are of the same instance type, and therefore, have the same normalization factor. The normalization factor of the ecs.g5.xlarge instance type is 4.
    
2.  Comparison of computing power
    
    -   Reserved instance: One reserved instance delivers 4 (= 1 × 4) units of computing power per hour.
        
    -   Pay-as-you-go instances: Five instances consume 20 (= 5 × 4) units of computing power per hour.
        
3.  Deduction result
    
    One reserved instance can offset 20% hourly bills of five pay-as-you-go instances, which indicates that the reserved instance can offset 100% hourly bills of a random pay-as-you-go instance.
    

Multiple reserved instances offset the bills of a single pay-as-you-go instance.

You have two active zonal reserved instances that have the following attributes:

-   Region and zone: Qingdao Zone B in the China (Qingdao) region.
    
-   Instance type: ecs.g5.xlarge.
    
-   Operating system: Windows.
    
-   Number of instances: 1.
    

You have one pay-as-you-go instance that has the following attributes:

-   Region and zone: Qingdao Zone B in the China (Qingdao) region.
    
-   Instance type: ecs.g5.xlarge.
    
-   Image: Windows.
    

1.  Normalization factor per instance type
    
    The reserved instances and pay-as-you-go instance are of the same instance type, and therefore, have the same normalization factor. The normalization factor of the ecs.g5.xlarge instance type is 4.
    
2.  Comparison of computing power
    
    -   Reserved instances: Two reserved instances deliver 8 (= 1 × 4 × 2) units of computing power per hour.
        
    -   Pay-as-you-go instance: One instance consumes 4 (= 1 × 4) units of computing power per hour.
        
3.  Deduction result
    
    The two reserved instances can offset 100% hourly bills of one pay-as-you-go instance and remain 50% of total computing power.
    

Multiple reserved instances offset the bills of multiple pay-as-you-go instances.

You have five active zonal reserved instances that have the following attributes:

-   Region and zone: Qingdao Zone B in the China (Qingdao) region.
    
-   Instance type: ecs.g5.xlarge.
    
-   Operating system: Windows.
    
-   Number of instances: 1.
    

You have five pay-as-you-go instances that have the following attributes:

-   Region and zone: Qingdao Zone B in the China (Qingdao) region.
    
-   Instance type: ecs.g5.xlarge.
    
-   Image: Windows.
    

1.  Normalization factor per instance type
    
    The reserved instances and pay-as-you-go instances are of the same instance type, and therefore, have the same normalization factor. The normalization factor of the ecs.g5.xlarge instance type is 4.
    
2.  Comparison of computing power
    
    -   Reserved instances: Five reserved instances deliver 20 (= 1 × 5 × 4) units of computing power per hour.
        
    -   Pay-as-you-go instances: Five instances consume 20 (= 5 × 4) units of computing power per hour.
        
3.  Deduction result
    
    The five reserved instances can offset 100% hourly bills of the five pay-as-you-go instances.
    

#### Examples of resource reservation

**Scenario**

**Zonal reserved instances**

**Pay-as-you-go instance**

#### Reservation result

Resource reservation

You have one active zonal reserved instance that has the following attributes:

-   Region and zone: Qingdao Zone B in the China (Qingdao) region.
    
-   Instance type: ecs.g5.2xlarge.
    
-   Operating system: Linux.
    
-   Number of instances: 10.
    

You do not have pay-as-you-go instances.

-   Reserved instances are idle and their billing continues.
    
-   During the term of the reserved instances, 10 ecs.g5.2xlarge instances are reserved to ensure that you can create pay-as-you-go instances in Qingdao Zone B at any time.
    

#### Failure examples

**Scenario**

**Zonal reserved instance**

**Pay-as-you-go instance**

**Deduction result**

Failed deduction

You have one active zonal reserved instance that has the following attributes:

-   Region and zone: Qingdao Zone B in the China (Qingdao) region.
    
-   Instance type: ecs.g5.xlarge.
    
-   Image: Linux.
    
-   Number of instances: 1.
    

You have one pay-as-you-go instance that has the following attributes:

-   Region and zone: Qingdao Zone B in the China (Qingdao) region.
    
-   Instance type: ecs.g5.xlarge.
    
-   Operating system: Windows.
    

The reserved instance fails to match the pay-as-you-go instance because of the operating system inconsistency.

As a result, the reserved instance cannot offset the bills of the pay-as-you-go instance.

You have one active zonal reserved instance that has the following attributes:

-   Region and zone: Qingdao Zone B in the China (Qingdao) region.
    
-   Instance type: ecs.g5.xlarge.
    
-   Image: Linux.
    
-   Number of instances: 1.
    

You have one pay-as-you-go instance that has the following attributes:

-   Region and zone: Qingdao Zone C in the China (Qingdao) region.
    
-   Instance type: ecs.g5.4xlarge.
    
-   Operating system: Linux.
    

The reserved instance fails to match the pay-as-you-go instance due to the following reasons:

-   The reserved instance and the pay-as-you-go instance reside in different zones or regions.
    
-   The instance types of the reserved instance and pay-as-you-go instance have different specifications.
    

As a result, the reserved instance cannot offset the bills of the pay-as-you-go instance.

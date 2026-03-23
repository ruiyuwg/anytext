After a distributed instance is created, it contains only a single child instance. You must add one or more child instances to the distributed instance for it to work as expected. A single distributed instance can contain up to three child instances. After child instances are added, data is synchronized in real time across all the child instances in the distributed instance.

## Prerequisites

A distributed instance is created. For more information, see [Create a distributed instance](/help/en/redis/user-guide/create-a-distributed-instance#task-oyb-thk-bfb).

## Precautions

The new child instance must meet the following requirements:

-   It cannot be in the same zone as an existing child instance.
    
-   The architecture, version, and specifications must be the same as those of the existing child instances. For example, all child instances must be 8 GB cluster architecture instances (2 shards) that are compatible with Redis 7.0.
    
-   Child instances cannot be transformed from existing instances. They must be created as new instances.
    

**Note**

If the specifications of the child instances are inconsistent, performance or capacity issues may occur.

## **Procedure**

1.  Log on to the [console](https://kvstore.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Global Distributed Cache**.
    
3.  Find the target distributed instance and click the ![plus icon](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6452706261/p167844.png) icon to the left of the instance ID.
    
4.  To the right of the **Child Instances** List,click **Add Child Instance**.
    
5.  You are redirected to the purchase page. Configure the following parameters.
    
    In addition to the following configuration items, make sure that the **Version**, **Architecture Type**, **Shard**, and other configuration items are the same as those of the existing child instances.
    
    1.  Set **Service** to **Tair (Enterprise Edition)**.
        
    2.  Select a **Billing Method**:
        
        -   **Subscription**: You must pay upfront for the instance that you create. For long-term use, the subscription billing method is more cost-effective than the pay-as-you-go billing method. Alibaba Cloud provides lower prices for longer subscription durations.
            
        -   **Pay-as-you-go**: You are charged on an hourly basis after you create the instance. This billing method is suitable for short-term use. If you no longer require a pay-as-you-go instance, you can release the instance to reduce costs.
            
        
    3.  Select a **Region** and a **Zone Settings**. The zone cannot be the same as the zone of any existing child instance.
        
    4.  Select a **VPC** and a **VSwitch**.
        
    5.  Set **Password Settings** to **Now** and enter a password.
        
    6.  (Optional) If you select the **Subscription** billing method, you must also configure the **Subscription Duration** for the instance.
        
6.  Click **Buy Now**.
    
    On the **Confirm Order** page, read the Terms of Service and follow the instructions to complete the payment process.
    
    After the payment is successful, wait for 1 to 5 minutes. When the instance status is **Running**, the child instance is created.
    

## Related API operations

**API operation**

**Description**

[CreateTairInstance](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-createtairinstance-redis)

Creates a memory-optimized instance that can serve as the first child instance in a distributed instance or be added to an existing distributed instance as the second or third child instance.

[CreateGlobalDistributeCache](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-createglobaldistributecache-redis)

Converts a specified instance into the first child instance of a distributed instance.

[DescribeGlobalDistributeCache](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-describeglobaldistributecache-redis)

Queries detailed information about a distributed instance.

[RemoveSubInstance](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-removesubinstance-redis)

Removes a child instance from a distributed instance and converts it into a standard instance (data is preserved).

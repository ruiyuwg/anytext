If you want data to be automatically synchronized between different instances across different regions in real time, you can convert an existing regular instance to the first child instance of a distributed (**Global Distributed Cache**) instance or create an instance as the first child instance. You can use a distributed instance in scenarios such as active geo-redundancy, disaster recovery, and data synchronization across regions.

## Background information

Tair [Global Distributed Cache](/help/en/redis/user-guide/overview-of-global-distributed-cache-for-tair/#concept-qf1-mdk-zdb) instance is a self-developed active-active database system by Alibaba Cloud. It networks multiple child instances into one logically distributed instance through data synchronization channels. All child instances can read and write data while maintaining real-time data synchronization. This feature easily supports business scenarios where multiple sites in different regions provide services simultaneously, helping enterprises quickly replicate Alibaba Group's active geo-redundancy architecture.

This feature is free. You are only charged for the specifications of child instances (the same billing standard as standard instances). For more information, see [Billing items](/help/en/redis/product-overview/billable-items#concept-gsb-5q5-tdb).

This feature also has some limitations. For more information, see [Limits of Global Distributed Cache](/help/en/redis/user-guide/limits-of-global-distributed-cache-for-redis#concept-cbs-dfk-zdb).

## **Procedure**

If you have already created a Tair memory-optimized instance, you can transform it. If you have not created an instance, you can purchase a new Tair memory-optimized instance. The system will automatically create a distributed instance and convert the existing instance (or newly created instance) into the first child instance of the distributed instance.

**Note**

The first child instance can be transformed from an existing instance, while the second and third child instances need to be newly purchased.

## Transform an existing standard instance

**Important**

This process will cause a transient connection interruption of a few seconds. Make sure that:

-   You use a connection address (such as `r-hp3bpn39cs1vu****.redis.hangzhou.rds.aliyuncs.com`) to connect to the instance.
    
-   Your application has a reconnection mechanism.
    
-   You perform this operation during off-peak hours.
    

1.  Log on to the [console](https://kvstore.console.alibabacloud.com/).
    
2.  In the navigation pane on the left, click **Global Distributed Cache**.
    
3.  In the upper-left corner of the page, click **Create Instance** > **Create From Existing Instance**.
    
4.  In the panel that appears, select an instance to transform it into the first child instance of the distributed instance.
    
    We recommend that you set **Execution Method** to **Convert Within Maintenance Window** .
    
5.  Click **OK**.
    
    **Note**
    
    After the transformation is complete, the selected instance will be converted into the first child instance of the distributed instance. To prevent misoperations, the instance will no longer be displayed in the instance list in the console. You need to click **Global Distributed Cache** in the navigation pane on the left to manage the instance in the distributed instance list.
    

## Purchase a child instance

1.  Log on to the [console](https://kvstore.console.alibabacloud.com/).
    
2.  In the navigation pane on the left, click **Global Distributed Cache**.
    
3.  In the upper-left corner of the page, click **Create Instance** > **Create Distributed Instance**.
    
4.  You will be redirected to the purchase page. Configure the following settings.
    
    **Note**
    
    This example only introduces the key parameters. You can keep the default values for other parameters.
    
    1.  **Service** is fixed as **Tair (Enterprise Edition)**.
        
    2.  Select a **Billing Method**:
        
        -   **Subscription**: You must pay upfront for the instance that you create. For long-term use, the subscription billing method is more cost-effective than the pay-as-you-go billing method. Alibaba Cloud provides lower prices for longer subscription durations.
            
        -   **Pay-as-you-go**: You are charged on an hourly basis after you create the instance. This billing method is suitable for short-term use. If you no longer require a pay-as-you-go instance, you can release the instance to reduce costs.
            
        
    3.  Select **Deployment Mode** as cloud-native (recommended) or classic.
        
        **Note**
        
        The cloud-native Global Distributed Cache instance is currently in public preview. If you cannot select the cloud-native version, please fill out the [form](https://page.aliyun.com/form/act2110113037/index.htm) to request access.
        
    4.  Select **Storage Medium** as **Memory**.
        
    5.  Select **Region** and **kvstore\_zone\_group**.
        
        -   If you have already created an [ECS](/help/en/ecs/user-guide/what-is-ecs#dbf505204dzjr) instance, we recommend that you select the same region and zone as your ECS instance.
            
        -   To connect to the instance from an on-premises device, select a region that is geographically close to your device.
            
    6.  Select **VPC** and **vSwitch**.
        
        To connect from an ECS instance, select the same VPC as your ECS instance. Otherwise, they cannot communicate through the internal network. However, if the VPC is the same but the vSwitches are different, service interconnection can still be achieved.
        
    7.  Select **Set Password** to **Now** and enter a password.
        
    8.  (Optional) If you select the **Subscription** billing method, you need to configure the **Subscription Duration** for the instance.
        
    
5.  Click **Buy Now**.
    
    On the **Confirm Order** page, read the Terms of Service and follow the instructions to complete the payment process.
    
    After the payment is successful, wait for 1 to 5 minutes. When the instance status changes to **Running**, the child instance is created.
    

## What to do next

[Add a child instance to a distributed instance](/help/en/redis/user-guide/add-a-child-instance-to-a-distributed-instance#concept-cqf-lmf-qgb)

## **FAQ**

-   Q: Why do I receive the error `The gdc custins trans not support`?
    
    A: This occurs because the classic deployment mode instance that you want to transform has a direct connection address enabled. Please release the direct connection mode address and try again. Cloud-native deployment mode instances are not affected by this limitation.
    

## Related API operations

**API operation**

**Description**

[CreateTairInstance](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-createtairinstance-redis)

Creates a memory-optimized instance that can serve as the first child instance in a distributed instance or be added to an existing distributed instance as the second or third child instance.

[CreateGlobalDistributeCache](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-createglobaldistributecache-redis)

Transforms a specified instance into the first child instance of a distributed instance.

[DescribeGlobalDistributeCache](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-describeglobaldistributecache-redis)

Queries detailed information about a distributed instance.

[RemoveSubInstance](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-removesubinstance-redis)

Removes a child instance from a distributed instance and converts it into a standard instance (data is preserved).

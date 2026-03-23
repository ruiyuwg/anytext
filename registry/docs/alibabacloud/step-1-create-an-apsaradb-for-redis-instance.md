This topic describes how to quickly create a Tair (Redis OSS-compatible) instance.

If you want to create an instance for use in a production environment, you can refer to [Instructions for selecting an appropriate Tair (Redis OSS-compatible) instance](/help/en/redis/product-overview/select-an-apsaradb-for-redis-instance/) to select the instance specifications that meet your business requirements. You can use the examples in this topic to quickly get started with Tair (Redis OSS-compatible). In the examples, only key parameters are configured to create an instance.

## Prerequisites

An Alibaba Cloud account is created. For more information, see [Create an account](/help/en/account/sign-up-with-alibaba-cloud).

## Procedure

## Redis Open-Source Edition

In this example, a standard Redis Open-Source Edition 6.0 instance is created. The instance consists of a master node and a replica node and has a memory of 1 GB.

**Note**

This example describes only the key parameters. You can use the default values for other parameters.

1.  Go to the [Redis Open-Source Edition buy page](https://common-buy-intl.alibabacloud.com/?commodityCode=kvstore_prepaid_public_intl&request={%22shard_class%22:%22redis.shard.small.2.ce%22}) and set the **Service** parameter to **Redis Open-Source Edition**.
    
2.  Configure the **Billing Method** parameter.
    
    -   **Subscription**: You must pay upfront for the instance that you create. For long-term use, the subscription billing method is more cost-effective than the pay-as-you-go billing method. Alibaba Cloud provides lower prices for longer subscription durations.
        
    -   **Pay-as-you-go**: You are charged on an hourly basis after you create the instance. This billing method is suitable for short-term use. If you no longer require a pay-as-you-go instance, you can release the instance to reduce costs.
        
    
    You can view the price in the lower-right corner of the page. The final price is determined after the configuration is complete.
    
3.  Configure the **Region** and **Zone Settings** parameters.
    
    -   If you created an [Elastic Compute Service (ECS) instance](/help/en/ecs/user-guide/what-is-ecs#dbf505204dzjr), we recommend that you select the region and zone in which the ECS instance resides.
        
    -   If you want to use a local device to connect to the Redis Open-Source Edition instance, select the nearest region.
        
    
    **Note**
    
    If you select **Dual-zone Deployment** for **Zone Settings** and select **Auto Select** for the secondary zone, the system automatically assigns a zone that has sufficient resources to the instance.
    
4.  Select a virtual private cloud (VPC) and a vSwitch.
    
    If you want to connect an ECS instance to the Redis Open-Source Edition instance, select the same VPC as the ECS instance. If you select a different VPC, the ECS instance and the Redis Open-Source Edition instance cannot communicate over an internal network. If the instances share the same VPC but have different vSwitches, the instances can communicate over the internal network.
    
5.  Set the Version parameter to **Redis 6.0**.
    
6.  Set the **Set Password** parameter to **Now** and enter a password.
    
    After the instance is created, you can reset or change the password in the console.
    
7.  (Optional) If you set the Billing Method parameter to **Subscription**, configure the **Validity Period** parameter.
    
8.  Configure the ****Quantity**** parameter. Default value: 1.
    
9.  Click **Buy Now**.
    
    On the **Confirm Order** page, read the terms of service, and then follow the instructions to complete the payment for the instance.
    
    After you complete the payment, wait for 1 minute to 5 minutes. To view the created instance, select the region in which the instance resides on the Instances page of the [console](https://kvstore.console.alibabacloud.com/).
    

## Tair (Enterprise Edition)

In this example, a standard Tair DRAM-based instance that is compatible with Redis 6.0 and has a memory of 1 GB is created. The instance consists of a master node and a replica node.

**Note**

This example describes only the key parameters. You can use the default values for other parameters.

1.  Go to the [Tair (Enterprise Edition) buy page](https://common-buy-intl.alibabacloud.com/?commodityCode=kvstore_prepaidtair_public_intl) and set the **Service** parameter to **Tair (Enterprise Edition)**.
    
2.  Configure the **Billing Method** parameter.
    
    -   **Subscription**: You must pay upfront for the instance that you create. For long-term use, the subscription billing method is more cost-effective than the pay-as-you-go billing method. Alibaba Cloud provides lower prices for longer subscription durations.
        
    -   **Pay-as-you-go**: You are charged on an hourly basis after you create the instance. This billing method is suitable for short-term use. If you no longer require a pay-as-you-go instance, you can release the instance to reduce costs.
        
    
    You can view the price in the lower-right corner of the page. The final price is determined after the configuration is complete.
    
3.  Set the **Storage Type** parameter to **Memory**.
    
4.  Configure the **Region** and **Zone Settings** parameters.
    
    -   If you created an [ECS instance](/help/en/ecs/user-guide/what-is-ecs#dbf505204dzjr), we recommend that you select the region and zone in which the ECS instance resides.
        
    -   If you want to use a local device to connect to the Tair (Enterprise Edition) instance, select the nearest region.
        
    
    **Note**
    
    -   We recommend that you select a recommended zone, which is the primary zone in the current region in which Tair (Enterprise Edition) is available for sale. This means that resources in this zone will remain sufficiently available for a long time.
        
    -   If you select **Dual-zone Deployment** for Z**one Settings** and select **Auto Select** for the secondary zone, the system automatically assigns a zone that has sufficient resources to the instance.
        
    
5.  Select a VPC and a vSwitch.
    
    If you want to connect an ECS instance to the Tair (Enterprise Edition) instance, select the same VPC as the ECS instance. If you select a different VPC, the ECS instance and the Tair (Enterprise Edition) instance cannot communicate over an internal network. If the instances share the same VPC but have different vSwitches, the instances can communicate over the internal network.
    
6.  Set the **Version** parameter to **Redis 6.0**.
    
7.  Set the **Password Setting** parameter to **Set Now** and enter a password.
    
8.  (Optional) If you set the Billing Method parameter to **Subscription**, configure the **Subscription Duration** parameter.
    
9.  Configure the ****Quantity**** parameter. Default value: 1.
    
10.  Click **Buy Now**.
     
     On the **Confirm Order** page, read the terms of service, and then follow the instructions to complete the payment for the instance.
     
     After you complete the payment, wait for 1 minute to 5 minutes. To view the created instance, select the region in which the instance resides on the Instances page of the [console](https://kvstore.console.alibabacloud.com/).
     

Then, configure an IP address whitelist for the instance. For more information, see [Step 2: Configure whitelists](/help/en/redis/getting-started/step-2-configure-whitelists).

## References

If you want to create an instance of another architecture or type, you can configure the parameters as prompted in the console. For information about the parameters, see [Terms](/help/en/redis/product-overview/terms).

## FAQ

#### **Before creation**

-   Can I change the configurations of a Tair instance after creation?
    
    Yes, you can upgrade or downgrade the configurations of a created Tair instance. You can also change the instance architecture, such as from standard to cluster. For more information, see [Change instance configurations](/help/en/redis/user-guide/change-the-configurations-of-an-instance/#concept-mgf-z25-tdb).
    
-   How long does it take to create an instance?
    
    The time required to create an instance is directly proportional to the number of shards in the instance. A larger number of shards requires more resources. As a result, the time required to create the instance increases. For example, it can take 2 to 3 minutes to create a standard master-replica instance, 10 to 15 minutes to create a 128-shard cluster master-replica instance, and 20 to 40 minutes to create a 256-shard cluster master-replica instance.
    

#### **After creation**

-   Why am I unable to find the created instance?
    
    The following table describes the possible causes and solutions.
    
    **Possible cause**
    
    **Solution**
    
    The region that you selected in the console is not the region in which the instance is deployed.
    
    Log on to the [console](https://kvstore.console.alibabacloud.com/) and select the region in which the instance is deployed.
    
    The instance list in the console is not updated or is updated before the instance is created.
    
    Wait for a few minutes and refresh the instance list to check whether the instance is displayed in the list.
    
-   Why am I refunded for an order placed to purchase an instance?
    
    The system may fail to create the instance due to insufficient resources. In this case, your payment is refunded. You can check your refund on the [Orders](https://usercenter2-intl.console.alibabacloud.com/order/list) page. After you confirm that the payment is refunded, you can attempt to create an instance in another zone.
    
-   How do I view the creation time of an instance?
    
    On the [Instances](https://kvstore.console.alibabacloud.com/Redis/instance/cn-hangzhou) page, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0729904171/p787323.png) icon. In the **Customize List** dialog box, select **Creation Time** and click **OK**. You can view the value in the **Creation Time** column corresponding to the instance in the instance list.
    

## Related API operations

**API operation**

**Description**

[CreateInstance](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-createinstance-redis)

Creates a Redis Open-Source Edition instance or a classic Tair DRAM-based instance.

[CreateTairInstance](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-createtairinstance-redis)

Creates a Tair cloud-native instance.

After you retain a classic network endpoint, you can extend its retention period by changing its expiration date in the Tair (Redis OSS-compatible) console.

## Prerequisites

A classic network endpoint is retained after you switch the network type of an instance from classic network to Virtual Private Cloud (VPC). For more information, see [Switch the network type of an instance from classic network to VPC](/help/en/redis/user-guide/change-the-network-type-from-classic-network-to-vpc#concept-mtb-nz5-tdb).

## Precautions

During the period in which your instance can be connected over the classic network or a VPC, you can specify an expiration date for the classic network endpoint based on your business requirements. The new expiration date immediately takes effect. For example, if the classic network endpoint is due to expire on August 18, 2017 and you modify the expiration date to 14 days later on August 15, 2017, the classic network endpoint is released on August 29, 2017.

**Note**

You can modify the expiration date multiple times.

## Procedure

1.  Log on to the console and go to the [Instances](https://kvstore.console.alibabacloud.com/Redis/instance/cn-hangzhou) page. In the top navigation bar, select the region in which the instance is deployed. Then, find the instance and click its ID.
    
2.  On the right side of the **Connection Information** section, click **Change Expiration Date** next to **Retained Classic Network Endpoint**.
    
3.  In the panel that appears, specify a new expiration date and click **OK**.
    

## Related API operations

**Operation**

**Description**

[ModifyInstanceNetExpireTime](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-modifyinstancenetexpiretime-redis)

Modifies the expiration date of a classic network endpoint.

## **References**

[EOL notice for Tair (Redis OSS-compatible) instances in the classic network](/help/en/redis/product-overview/notice-apsaradb-for-redis-instances-deployed-in-classic-network-discontinued)

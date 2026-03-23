To prevent service interruptions caused by expired subscriptions, we recommend that you manually renew an instance or enable auto-renewal for the instance before the instance expires. The renewal feature is applicable only to subscription Tair (Redis OSS-compatible) instances. Pay-as-you-go instances do not need to be renewed, but you must make sure that you have sufficient balance within your account to cover relevant costs.

Tair (Redis OSS-compatible) supports two renewal methods:

-   Auto-renewal (recommended)
    
    To prevent your instance from being automatically released if you forget to renew the instance, we recommend that you enable auto-renewal.
    
    After you enable auto-renewal, the instance is automatically renewed before the expiration date. Make sure that your account balance is sufficient. If an auto-renewal attempt fails seven days before the expiration date, you are notified by text message or email.
    
    **Note**
    
    If an auto-renewal attempt fails due to insufficient account balance, the instance expires and the system does not initiate another auto-renewal attempt. In this case, you must manually renew the instance before the instance is automatically released.
    
-   Manual renewal
    
    You can manually renew an instance at a point in time before the instance expires.
    

## Enable auto-renewal for an instance

1.  Log on to the console and go to the [Instances](https://kvstore.console.alibabacloud.com/Redis/instance/cn-hangzhou) page. In the top navigation bar, select the region in which the instance that you want to manage resides. Then, find the instance and click the instance ID.
    
2.  In the **Instance Status** section, turn on **Automatic renewal**.
    
3.  In the **Automatic renewal** panel, turn on **Automatic renewal**, read the prompt, and then select a duration.
    
    **Note**
    
    After you enable auto-renewal, the system automatically renews the instance based on the renewal duration that you specify. For example, if you set the renewal duration to three months, you are charged for a subscription of three months each time the instance is automatically renewed.
    
4.  Click **Enable Automatic Renewal**.
    

### **Adjust the auto-renewal cycle or disable auto-renewal**

1.  Go to the [Renewal](https://usercenter2-intl.console.alibabacloud.com/renew/auto) page.
    
2.  Enter an instance ID in the Instance ID field to search for the instance.
    
3.  Find the instance and click **Edit Auto Renewal** or **Enable Manual Renewal** in the Actions column.
    

## Manually renew an instance

1.  Log on to the console and go to the [Instances](https://kvstore.console.alibabacloud.com/Redis/instance/cn-hangzhou) page. In the top navigation bar, select the region in which the instance that you want to manage resides. Then, find the instance and click the instance ID.
    
2.  Find the instance that you want to renew and click **Renew subscription** in the **Actions** column.
    
3.  On the **Renew subscription** page, select a renewal duration.
    
4.  Read and select the terms of service and then click **To pay**.
    
5.  Complete the payment.
    

## **FAQ**

-   Why is the `Specified network type does not support this operation` error returned when I renew an instance?
    
    This error may occur because the classic network endpoint of the instance is not released. The instance may still have limits associated with the classic network endpoint. Release the classic network endpoint and try again. For more information, see [EOL notice for Tair (Redis OSS-compatible) instances in the classic network](/help/en/redis/product-overview/notice-apsaradb-for-redis-instances-deployed-in-classic-network-discontinued).
    

## Related API operations

**API operation**

**Description**

[RenewInstance](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-renewinstance-redis)

Renews an instance.

[ModifyInstanceAutoRenewalAttribute](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-modifyinstanceautorenewalattribute-redis#main-107864)

Enables or disables auto-renewal for an instance.

[DescribeInstanceAutoRenewalAttribute](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-describeinstanceautorenewalattribute-redis#main-107864)

Queries the auto-renewal status of an instance.

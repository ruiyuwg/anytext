You can change the billing method of an ApsaraDB for Redis instance from subscription to pay-as-you-go based on your needs.

## Prerequisites

The instance is billed on a subscription basis and is in the **Running** state.

**Note**

If the instance changes to a state such as Locked before you pay for an order for changing the billing method, your payment may fail. After the state of the instance changes back to Running, you can resume paying for the order.

## Billing

After you change the billing method of an ApsaraDB for Redis instance to pay-as-you-go, a refund is returned using the original payment method. Coupons and vouchers cannot be refunded.

The refund is calculated using the following formula: Refund = Fee actually paid - Fee for consumed resources.

-   The fee actually paid is the money that you paid and does not include amounts covered by coupons or vouchers.
    
-   The fee for consumed resources is calculated based on the following formula: Fee for consumed resources = Daily fee × Consumed subscription duration × Discount for the consumed subscription duration. The daily fee equals the order-specific fee divided by 30.
    
    **Note**
    
    The consumed subscription duration is accurate to the day. Any portion less than one day is counted as one day.
    

## Precautions

-   This operation will not affect the running state of the instance.
    
    **Important**
    
    Each pay-as-you-go ApsaraDB for Redis instance is billed and paid by hour. To prevent overdue payments that may cause downtime, ensure that your account balance is sufficient.
    
-   The subscription billing method is more cost-effective than the pay-as-you-go billing method, and offers higher discounts for longer subscription periods. For long-term use, we recommend that you select the subscription billing method.
    
-   Billing method switch is not available for instances that use phased out instance types.
    

## Procedure

1.  Log on to the console and go to the [Instances](https://kvstore.console.alibabacloud.com/Redis/instance/cn-hangzhou) page. In the top navigation bar, select the region in which the instance is deployed.
    
2.  On the Instances page, find the instance for which you want to change the billing method. In the **Actions** column, choose **![更多 ](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0215287061/p96323.png)** > **Switch to Pay-as-you-go Billing**.
    
3.  On the page that appears, read the notes and check the total configuration cost in the lower part of the page.
    
    **Note**
    
    For more information about the refund, see the [Billing](#section-nyi-1n4-zzm) section of this topic.
    
4.  Read the Terms of Service and click **Buy now**.
    

## Related API operations

**Operation**

**Description**

[TransformInstanceChargeType](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-transforminstancechargetype-redis#main-107864)

Changes the billing method of an ApsaraDB for Redis instance from subscription to pay-as-you-go or from pay-as-you-go to subscription.

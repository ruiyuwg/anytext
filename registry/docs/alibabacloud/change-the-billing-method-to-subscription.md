After you purchase a pay-as-you-go instance, you can change its billing method to subscription.

## Prerequisites

The instance is billed on a pay-as-you-go basis and is in the **Running** state.

**Note**

If the instance changes to a state such as Locked before you pay for an order for changing the billing method, your payment may fail. After the state of the instance changes back to Running, you can resume paying for the order.

## Precautions

-   An instance starts to be billed on a subscription basis immediately after the billing method of the instance is changed to subscription.
    
-   When you change the billing method of a pay-as-you-go instance to subscription, the system generates an order. The new billing method takes effect only after you pay for this order. If you do not pay for this order, an unpaid order is displayed on the [Orders](https://usercenter2-intl.console.alibabacloud.com/order/list) page. In this case, you cannot purchase instances or change the billing method of another instance until you pay the unpaid balance.
    
    **Note**
    
    -   If you have an unpaid order for changing the billing method of a pay-as-you-go instance to subscription and you have scaled up the instance, the order amount is insufficient for the billing method change due to changed instance configurations. In this case, the order cannot be paid. You must cancel this unpaid order and change the billing method of the instance again.
        
    -   If you want to cancel an unpaid order, you can cancel the order on the [Orders](https://usercenter2-intl.console.alibabacloud.com/order/list) page.
        
    
-   Billing method switch is not available for instances that use phased out instance types.
    

## Procedure

1.  Log on to the console and go to the [Instances](https://kvstore.console.alibabacloud.com/Redis/instance/cn-hangzhou) page. In the top navigation bar, select the region in which the instance that you want to manage resides.
    
2.  In the **Actions** column of the target instance, click **![更多 ](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0215287061/p96323.png)** > **Switch to Subscription**
    
3.  Read the Service Agreement, click **Buy now**, and then follow the instructions to pay for the order.
    

## Related API operations

**API operation**

**Description**

[TransformToPrePaid](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-transformtoprepaid-redis#main-107864)

Changes the billing method of an instance from pay-as-you-go to subscription.

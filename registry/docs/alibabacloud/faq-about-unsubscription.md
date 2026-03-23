## **Why am I unable to request an unsubscription?**

If you cannot request an unsubscription in the console or on the [Unsubscribe](https://billing-cost-intl.aliyun.com/refund) page, it may be for one of the following reasons:

-   The cloud product you requested is non-refundable.
    
-   Pay-as-you-go products do not support refunds. If you no longer need the resource, back up your data, and then go to the product console to shut down and release the resource.
    
-   The campaign rules specify the scenarios that are ineligible for refunds.
    
-   You cannot request an unsubscription if the refundable amount is zero.
    
-   You cannot unsubscribe from the product if it is associated with a paid image from Alibaba Cloud Marketplace.
    
-   You have exceeded the unsubscription quota for ECS instances for your account.
    
-   You cannot unsubscribe if the settlement currency of the original order is different from the current settlement currency of your account.
    
-   You cannot unsubscribe if the instance has unpaid orders.
    
-   You cannot unsubscribe if the instance has security risks.
    

## Can I use an API to unsubscribe from subscription resources?

API-based unsubscription is not currently supported. For other unsubscription methods, see [Request an unsubscription](/help/en/user-center/initiate-unsubscribe).

## Why is the refundable amount zero?

The refundable amount may be zero for several reasons:

-   **Voucher payment**: The order was paid for with a voucher.
    
-   **Partial unsubscription calculation**: According to the [calculation rules for partial unsubscription](/help/en/user-center/cancel-subscription/#p-1qo-3ce-m7z) (**Refundable amount = Actual payment - Consumed amount**), if the consumed amount is equal to or greater than the actual payment at the time of unsubscription, the calculated refundable amount is zero.
    
-   If your account becomes a trusteeship linked account under a root account after you purchase a resource, the refundable amount for that resource becomes zero. This is because when the finance trusteeship is removed, the resource is transferred from the root account to the linked account, but its financial value is not. Therefore, after the transfer, no remaining value is calculated for the instance during upgrades, downgrades, or refunds, and the refundable amount is zero.
    

## Where can I view my refund?

1.  Review the [rules for refund destinations](/help/en/user-center/refund-flow#859b39bd334pu).
    
2.  To view your refund details, follow these steps:
    
    1.  Log on to the [Orders](https://billing-cost-intl.aliyun.com/order/list) page.
        
    2.  Find the refund order and click Details. On the order details page, you can find the refund channel and amount.
        

## When will I receive the refund?

After you successfully unsubscribe from a product, the refund is typically credited to your account within 30 business days. If you do not receive the refund after 30 business days, you can [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) for assistance.

## **How to cancel an unsubscription made in error**

1.  Unsubscription is an irreversible operation and cannot be canceled. Carefully check your information before you unsubscribe to avoid errors.
    
2.  If you unsubscribe by mistake, immediately [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm). Our support team can check if the data from the unsubscribed instance can be recovered. Data recovery depends on the specific product.

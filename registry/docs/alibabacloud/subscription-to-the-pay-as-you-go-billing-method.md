You can switch the billing method of a Lindorm instance from subscription to pay-as-you-go in the Lindorm console. After you switch the billing method to pay-as-you-go, the system does not release the instance.

## Prerequisites

Before you begin, make sure that you have:

-   A Lindorm, Lindorm New Edition, or Lindorm Tunnel Service (LTS) instance that uses subscription billing and is in the **Running** state
    

For more information about billing methods, see [Billing methods](/help/en/lindorm/product-overview/billing-method-and-billable-items).

## Refund rules

After the switch, the system refunds the remaining prepaid amount based on the [rules for unsubscribing from resources](/help/en/user-center/refund-rules).

**Refundable**

**Not refundable**

Remaining balance from subscription and stored-value cards (refunded to the original payment account)

Coupons and vouchers

Renewals provided by Alibaba Cloud for Internet Content Provider (ICP) filings, errors, or server room migration

## Switch the billing method

**Important**

After the switch, the instance is billed on a pay-as-you-go basis. Keep enough balance in your account to avoid overdue payments, which can cause instance suspension.

1.  Log on to the [Lindorm console](https://lindorm.console.alibabacloud.com/cn-hangzhou/cluster).
    
2.  In the upper-left corner of the page, select the region where the instance is deployed.
    
3.  On the **Instances** page, find the instance for which you want to change the billing method, and click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9956792071/p573894.png) in the **Actions** column corresponding to the instance.
    
4.  In the drop-down list, select **Switch to Pay-as-you-go**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9956792071/p573896.png)
    
5.  Read and select the **Terms of Service**, then click **Buy Now**.
    

## Verify the result

After the switch completes, verify that the billing method has changed:

1.  On the **Instances** page, find the instance.
    
2.  Confirm that the billing method displays as **Pay-as-you-go**.

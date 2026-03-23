Switch an ApsaraDB RDS instance from subscription to pay-as-you-go billing to gain usage flexibility. A refund is issued for the remaining subscription period.

> After the switch, make sure your payment method has enough balance. Overdue payments can disrupt instance operations. For long-term workloads, subscription offers deeper discounts than pay-as-you-go. The longer the subscription term, the greater the savings.

## Prerequisites

-   The instance uses the subscription billing method. For details, see [Billable items](/help/en/rds/product-overview/billable-items-billing-methods-and-pricing).
    
-   The instance is in the **Running** state.
    
-   The instance does not use a [legacy instance type](/help/en/rds/product-overview/primary-apsaradb-rds-instance-types#reference-lbw-tyw-5db). If it does, change the instance type first.
    

> If a subscription instance is locked due to expiration, renew the instance before changing the billing method. See [Manual renewal](/help/en/rds/apsaradb-rds-for-mysql/manually-renew-an-apsaradb-rds-for-mysql-instance#concept-fwh-phj-wdb).

## Refund calculation

After the billing method changes, the refundable amount is returned to your original payment method.

**Refundable amount = Amount paid - Amount consumed**

**Term**

**Definition**

**Amount paid**

The actual cash amount paid for the order. This excludes deductions from vouchers or coupons.

**Amount consumed**

Daily unit price x Usage duration x Applicable discount for the usage duration

For example, if you paid $360 for a 12-month subscription and used the instance for 4 months at a daily unit price of $1.00 with no applicable discount, the amount consumed is $1.00 x 120 days x 1.0 = $120. Your refund would be $360 - $120 = $240.

For the full refund policy, see [Refund rules for changing the billing method from subscription to pay-as-you-go](/help/en/user-center/description-of-refund-rules-for-transfer-to-pay-as-you-go).

## Procedure

This operation does not affect the running state of the instance.

1.  Log on to the [ApsaraDB RDS console](https://rds.console.alibabacloud.com/). In the navigation pane, click **Instances**. In the top navigation bar, select a region.
    
2.  Find the target instance and open the **Change from Subscription to Pay-as-you-go** page by using one of the following methods:
    
    -   In the **Billing Method** column, click **Switch to Pay-as-you-go**.
        
    -   Click the instance ID. In the **Status** section, find **Billing Method** and click **Change to Pay-As-You-Go**.
        
3.  Confirm the instance information, read the Terms of Service, and then click **Confirm Order**.
    

### Verify the result

After the order is processed, go back to the instance list. In the **Billing Method** column, confirm that the billing method is now **Pay-as-you-go**.

## FAQ

### What should I do if the price inquiry fails?

This usually happens for one of two reasons:

-   **Classic network:** The classic network is no longer available for RDS. Switch the network type to a virtual private cloud (VPC) before changing the billing method.
    
-   **Legacy instance type:** If a pop-up message says "The current instance type is a legacy instance type", change to a currently available instance type first, then retry. See [Legacy instance types](/help/en/rds/product-overview/primary-apsaradb-rds-instance-types#reference-lbw-tyw-5db).
    

## API reference

**API**

**Description**

[TransformDBInstancePayType](/help/en/rds/api-change-the-billing-method)

Changes the billing method of an RDS instance.

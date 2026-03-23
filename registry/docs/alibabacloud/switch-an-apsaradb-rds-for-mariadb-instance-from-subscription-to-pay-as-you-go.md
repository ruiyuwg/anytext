## Prerequisites

-   The RDS instance uses the subscription billing method. For more information, see [Billable items, billing methods, and pricing](/help/en/rds/product-overview/billable-items-billing-methods-and-pricing).
    
-   The RDS instance is in the **Running** state.
    
-   The RDS instance does not use a phased-out instance type. If it does, change the instance type first. For more information, see [Primary ApsaraDB RDS instance types](/help/en/rds/product-overview/primary-apsaradb-rds-instance-types).
    

## Billing

After the billing method is changed to pay-as-you-go, a refund is issued to your original payment account.

**Refund = Fee actually paid - Fee for consumed resources**

-   **Fee actually paid** does not include amounts covered by coupons or vouchers.
    
-   **Fee for consumed resources** = Daily fee x Consumed subscription duration x Discount for the consumed subscription duration.
    
-   **Daily fee** = Order-specific fee / 30.
    

> The consumed subscription duration is accurate to days. Any partial day counts as one full day.

## Potential impacts

This operation does not interrupt your instance.

> For long-term use, the subscription billing method is more cost-effective. Longer subscription durations provide larger discounts.

## Procedure

1.  Log on to the [ApsaraDB RDS console](https://rds.console.alibabacloud.com/rdsList/basic).
    
2.  In the top navigation bar, select the region in which the RDS instance resides.
    
3.  Find the RDS instance and click its ID.
    
4.  In the **Status** section of the **Basic Information** page, click **Change to Pay-As-You-Go** next to **Billing Method**.
    
5.  Confirm the instance information and click **Confirm Order**.
    

## Related API operations

**API**

**Description**

[TransformDBInstancePayType](/help/en/rds/api-change-the-billing-method)

Changes the billing method of an instance.

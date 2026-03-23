This topic describes how to change the billing method of an ApsaraDB RDS for MySQL instance from subscription to pay-as-you-go.

## Prerequisites

-   Your RDS instance uses the subscription billing method. For more information about billing methods, see [Billable items](/help/en/rds/product-overview/billable-items-billing-methods-and-pricing#concept-qxr-pd2-vdb).
    
-   The RDS instance is in the Running state.
    
    **Note**
    
    If a subscription RDS instance is locked due to expiration, you must first renew the RDS instance. For more information, see [Manually renew an ApsaraDB RDS for MySQL instance](/help/en/rds/apsaradb-rds-for-mysql/manually-renew-an-apsaradb-rds-for-mysql-instance#concept-fwh-phj-wdb).
    
-   Your RDS instance does not use a phased-out instance type. For more information, see [Primary ApsaraDB RDS instance types](/help/en/rds/product-overview/primary-apsaradb-rds-instance-types#reference-lbw-tyw-5db). If your RDS instance uses a phased-out instance type, you must change the instance type before you change the billing method of your RDS instance to pay-as-you-go.
    

## Billing

After you change the billing method of your RDS instance to pay-as-you-go, a refund is returned based on the original payment method.

Refund = Fee actually paid - Fee for consumed resources

-   The fee actually paid is the money that you paid and does not include the amount that is covered by coupons or vouchers.
    
-   The fee for consumed resources is calculated based on the following formula: Fee for consumed resources = Daily fee × Consumed subscription duration × Discount for the consumed subscription duration. The daily fee is equal to the order-specific fee divided by 30.
    
    **Note**
    
    The consumed subscription duration is accurate to days. The part that is less than one day is counted as one day.
    

## Impacts

This operation does not affect the running instance.

**Note**

The subscription billing method is more cost-effective than the pay-as-you-go billing method, and you are offered higher discounts for longer subscription durations. For long-term use, we recommend that you select the subscription billing method.

## Procedure

1.  Log on to the [ApsaraDB RDS console](https://rds.console.alibabacloud.com/). In the navigation pane on the left, click **Instances**. In the top navigation bar, select the region in which the RDS instance resides.
    
2.  Find the RDS instance and use one of the following methods to go to the **Change from Subscription to Pay-as-you-go** page:
    
    -   Click **Switch to Pay-as-you-go** in the **Billing Method** column.
        
    -   Click the instance ID. In the **Status** section of the page that appears, click **Change to Pay-As-You-Go** to the right of **Billing Method**.
        
    
3.  Confirm the instance information, select the checkbox to agree to the Terms of Service, and then click **Confirm Order** to complete the payment.
    

## Related operations

**API**

**Description**

[Change the billing method](/help/en/rds/api-change-the-billing-method#doc-api-Rds-TransformDBInstancePayType)

Changes the billing method of an instance.

## **FAQ**

What do I do if a price inquiry failure occurs when I change the billing method from subscription to pay-as-you-go?

The following list describes the common causes of the failure to change the billing method:

-   The RDS instance resides in the classic network that is no longer available. In this case, you must change the network type of the RDS instance from classic network to virtual private cloud (VPC) and then change the billing method.
    
-   If you receive an error message indicating that your RDS instance uses a phased-out instance type and you must change the instance type before you change the billing method of your RDS instance, you must change the instance type of the RDS instance to an available instance type and then change the billing method. For more information, see [Primary ApsaraDB RDS instance types](/help/en/rds/product-overview/primary-apsaradb-rds-instance-types#reference-lbw-tyw-5db).

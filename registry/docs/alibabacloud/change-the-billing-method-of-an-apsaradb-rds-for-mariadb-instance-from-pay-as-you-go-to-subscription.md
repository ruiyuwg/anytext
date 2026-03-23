This topic describes how to change the billing method of an ApsaraDB RDS for MariaDB instance from pay-as-you-go to subscription.

## Impacts

The change of the billing method does not affect the running of your RDS instance.

## Usage notes

If the RDS instance has an unpaid subscription order, the order becomes invalid when you change the instance type. You need to cancel the order on the [Billing Management](https://billingnew.console.alibabacloud.com/?#/order/list/) page and then change the billing method of the RDS instance to subscription.

## Prerequisites

-   Your RDS instance is not using a phased-out instance type. For more information, see [Primary ApsaraDB RDS instance types](/help/en/rds/product-overview/primary-apsaradb-rds-instance-types#section-bpx-khx-5db). If the RDS instance uses a phased-out instance type, you must change the instance type before you change the billing method of the RDS instance from pay-as-you-go to subscription. For more information, see [Change instance specifications](/help/en/rds/apsaradb-rds-for-mariadb/change-the-specifications-of-an-apsaradb-rds-for-mariadb-instance#concept-efl-pln-wdb).
    
-   The billing method of the RDS instance is pay-as-you-go.
    
-   The RDS instance is in the Running state.
    
-   The RDS instance does not have unpaid subscription orders.
    

## Procedure

1.  Log on to the [ApsaraDB RDS console](https://rds.console.alibabacloud.com/rdsList/basic).
    
2.  In the top navigation bar, select the region in which the RDS instance resides.
    
3.  Find the RDS instance and go to the **Switch to Subscription Billing** page by using either of the following methods:
    
    -   Click **Switch to Subscription Billing** in the Actions column of the RDS instance.
        
    -   Click the instance ID. In the **Status** section, click **Switch to Subscription**.
        
4.  Select a subscription duration.
    
5.  Click **Pay Now**.
    
    **Note**
    
    ApsaraDB RDS generates a subscription order. You must pay for the order. If you do not pay for the order or the order becomes invalid, you cannot purchase a new RDS instance or change the billing method of the RDS instance from pay-as-you-go to subscription. You can pay for or cancel the order in the [Billing Management console](https://billingnew.console.alibabacloud.com/?#/order/list/).
    
6.  Complete the payment.
    

## Related operations

**Operation**

**Description**

[Change the billing method](/help/en/rds/api-change-the-billing-method#doc-api-Rds-TransformDBInstancePayType)

Changes the billing method of an instance.

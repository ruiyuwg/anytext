This topic describes how to change the billing method of an ApsaraDB RDS for PostgreSQL instance from pay-as-you-go to subscription.

## Prerequisites

-   Your RDS instance is not using a phased-out instance type. For more information, see [Primary ApsaraDB RDS instance types](/help/en/rds/product-overview/primary-apsaradb-rds-instance-types#section-bpx-khx-5db). If your RDS instance uses a phased-out instance type, you must change the instance type before you change the billing method of your RDS instance from pay-as-you-go to subscription. For more information, see [Change instance specifications](/help/en/rds/apsaradb-rds-for-postgresql/change-the-specifications-of-an-apsaradb-rds-for-postgresql-instance#concept-efl-pln-wdb).
    
-   The billing method of your RDS instance is pay-as-you-go.
    
-   The RDS instance is in the Running state.
    
-   Your RDS instance has no unpaid subscription orders.
    

## Impacts

A billing method change for your RDS instance does not affect the workloads on your RDS instance.

## Usage notes

-   If your RDS instance has an unpaid subscription order, the order becomes invalid when you change the instance type. In this case, you must cancel the order in the [Billing Management](https://billingnew.console.alibabacloud.com/?#/order/list/) console. Then, you can change the billing method of your RDS instance again.
    

## Procedure

1.  Log on to the [ApsaraDB RDS console](https://rds.console.alibabacloud.com/). In the left-side navigation pane, click **Instances**. In the top navigation bar, select the region in which your RDS instance resides.
    
2.  Find your RDS instance and use one of the following methods to go to the **Switch to Subscription Billing** page:
    
    -   Click **Switch to Subscription Billing** in the **Billing Method** column.
        
    -   Click the ID of your RDS instance. In the **Status** section of the page that appears, click **Subscription Billing** on the right of **Billing Method**.
        
    
3.  Configure the **Duration** parameter. Then, read and select Terms of Service.
    
4.  Click **Pay Now**.
    
    **Note**
    
    ApsaraDB RDS generates a subscription order. You must pay for the order. If the order is not paid or canceled, you cannot purchase an RDS instance or change the billing method of your RDS instance from pay-as-you-go to subscription. You can pay for or cancel the order in the [Billing Management](https://billingnew.console.alibabacloud.com/?#/order/list/) console.
    
5.  Complete the payment.
    

## Related operations

**Operation**

**Description**

[Change the billing method](/help/en/rds/api-change-the-billing-method#doc-api-Rds-TransformDBInstancePayType)

Changes the billing method of an instance.

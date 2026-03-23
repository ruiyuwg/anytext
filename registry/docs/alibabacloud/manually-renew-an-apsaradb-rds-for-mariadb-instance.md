This topic describes how to manually renew an ApsaraDB RDS for MariaDB instance that uses the subscription billing method. We recommend that you manually renew your RDS instance before the expiration date. This allows you to prevent service interruptions and data losses.

For more information about the impacts that are caused by subscription expiration, see [Unlock or rebuild an expired or overdue ApsaraDB RDS instance](/help/en/rds/product-overview/overdue-payments#t7808.html).

**Note** RDS instances that use the pay-as-you-go billing method do not expire and therefore do not require renewal.

You can manually renew your RDS instance before it expires or within 15 days after it expires.

## Method 1: Renew an RDS instance in the ApsaraDB RDS console

**Renew a single RDS instance**

1.  Access [RDS Instances](https://rds.console.alibabacloud.com/rdsList/basic), select a region at the top, and then click the ID of the target RDS instance.
2.  In the Status section of the page that appears, click Renew on the right.
3.  On the Renew page, configure the Duration parameter. You are offered lower prices for longer subscription periods.
4.  Read and select Terms of Service, click Pay Now, and then complete the payment.

**Renew multiple RDS instances at a time**

1.  Log on to the [ApsaraDB RDS console](https://rds.console.alibabacloud.com/rdsList/basic). In the left-side navigation pane, click Instances. In the top navigation bar, select the region where the RDS instance resides.
2.  Select the RDS instances that you want to renew and click Renew below the instance list.
3.  In the Renew dialog box, confirm the selected RDS instances and click OK to go to the Renewal page.
4.  On the Manual tab, select the RDS instances and click Batch Renew in the lower part of the page.
5.  Configure the Duration parameter of each RDS instance, click Pay, and then complete the payment.

## Method 2: Renew the instance in the Billing Management console

1.  Log on to the [ApsaraDB RDS console](https://rds.console.alibabacloud.com/).
2.  In the top navigation bar, choose Expenses > Renewal Management. ![Renew](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3868906061/p48528.png)
3.  On the Manual tab of the Renewal page, find the RDS instances that you want to renew. You can renew one or more RDS instances at a time.
    -   **Renew a single RDS instance**
        1.  Find the RDS instance that you want to renew and click Renew in the Actions column.
            
            **Note** If the RDS instance is displayed on the Auto or Nonrenewal tab, you can click Enable Manual Renewal in the Actions column and then click OK in the message that appears to manually renew the RDS instance.
            
        2.  On the page that appears, configure the Duration parameter, click Pay Now, and then complete the payment.
    -   **Renew multiple RDS instances at a time**
        1.  Select the RDS instances that you want to renew and click Batch Renew in the lower part of the page.
            
        2.  Configure the Duration parameter of each RDS instance, click Pay, and then complete the payment.

## Enable auto-renewal for an RDS instance

After auto-renewal is enabled for an RDS instance, you do not need to renew the RDS instance on a regular basis. This allows you to prevent service interruptions that are caused by subscription expiration. For more information, see [Enable auto-renewal for an ApsaraDB RDS for MariaDB instance](/help/en/rds/apsaradb-rds-for-mariadb/enable-auto-renewal-for-an-apsaradb-rds-for-mariadb-instance#concept-k2q-1kn-wdb).

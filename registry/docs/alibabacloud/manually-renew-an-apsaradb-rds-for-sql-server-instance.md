This topic describes how to manually renew an ApsaraDB RDS for SQL Server instance that uses the subscription billing method. We recommend that you manually renew your RDS instance before the expiration date. This allows you to prevent service interruptions and data losses.

For more information about the impacts that are caused by subscription expiration, see [Overdue payments](/help/en/rds/product-overview/overdue-payments#concept-drz-ml2-vdb).

**Note**

Pay-as-you-go and serverless RDS instances never expire and do not require renewal.

You can manually renew a subscription RDS instance before it expires or within 15 days after it expires.

## Procedure

### Renew RDS instances in the ApsaraDB RDS console

**Renew an RDS instance**

1.  Log on to the ApsaraDB RDS console and go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the instance ID.
    
2.  In the **Status** section of the page that appears, click **Renew** on the right.
    
3.  On the **Renew** page, configure the **Duration** parameter. You are offered lower prices for longer subscription periods.
    
4.  Read and select Terms of Service, click **Pay Now**, and then complete the payment.
    

**Renew multiple RDS instances at a time**

1.  Log on to the [ApsaraDB RDS console](https://rds.console.alibabacloud.com/rdsList/basic). In the left-side navigation pane, click **Instances**. In the top navigation bar, select the region in which your RDS instance resides.
    
2.  Select the RDS instances that you want to renew and click **Renew** below the instance list.
    
3.  In the **Renew** dialog box, confirm the selected RDS instances and click **OK** to go to the **Renewal** page.
    
4.  On the **Manual** tab, select the RDS instances and click **Batch Renew** in the lower part of the page.
    
5.  Specify the **Duration** parameter of each RDS instance, click **Pay**, and then complete the payment.
    

### Renew RDS instances in the Billing Management console

1.  Log on to the [ApsaraDB RDS console](https://rds.console.alibabacloud.com/).
    
2.  In the top navigation bar, choose **Expenses** > **Renewal Management**.
    
3.  On the **Manual** tab of the page that appears, find the RDS instance that you want to renew.
    
    You can renew one or more RDS instances at a time.
    
    -   **Renew a single RDS instance**
        
        1.  Find the RDS instance that you want to renew and click **Renew** in the Actions column.
            
            **Note**
            
            If the RDS instance is displayed on the **Auto** or **Nonrenewal** tab, you can click **Enable Manual Renewal** in the Actions column and then click **OK** in the dialog box that appears to manually renew the RDS instance.
            
        2.  On the page that appears, configure the Duration parameter, click **Buy Now**, and then complete the payment.
            
    -   **Renew multiple RDS instances at a time**
        
        1.  Select the RDS instances that you want to renew and click **Batch Renew** in the lower part of the page.
            
        2.  Specify the **Duration** parameter of each RDS instance, click **Pay**, and then complete the payment.
            
    

## Enable auto-renewal

If you enable auto-renewal for your RDS instance, you do not need to manually renew your RDS instance. Therefor, we recommend that you enable auto-renewal to ensure business continuity. For more information, see [Use the auto-renewal feature](/help/en/rds/apsaradb-rds-for-sql-server/enable-auto-renewal-for-an-apsaradb-rds-for-sql-server-instance#concept-k2q-1kn-wdb).

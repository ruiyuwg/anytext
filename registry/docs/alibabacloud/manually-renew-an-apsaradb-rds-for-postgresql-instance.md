Subscription instances have an expiration date. If you do not renew them before they expire, your services may be interrupted or your data may be lost. Renew your instances promptly. You can manually renew an instance before it expires or within 15 days after it expires to extend its service period.

For more information about the effects of an overdue payment or expiration, see [Effects of an overdue payment or expiration](/help/en/rds/product-overview/overdue-payments#concept-drz-ml2-vdb).

**Note**

Pay-as-you-go and Serverless instances do not expire and do not require renewal.

## **Handling locked legacy RDS instances**

If an RDS instance is locked due to expiration, it is typically unlocked and restored to the running state within **5 minutes** after you manually renew it. Wait for the process to complete and refresh the page to check the status. If the instance fits into a [legacy instance type](/help/en/rds/apsaradb-rds-for-postgresql/primary-apsaradb-rds-for-postgresql-instance-types#section-el9-gwk-n23) and is still locked after renewal, [submit a ticket](https://smartservice.console.alibabacloud.com/#/ticket/add/?productId=10) to seek help from our technical support. After the instance is unlocked, [upgrade the retired legacy instance type](/help/en/rds/apsaradb-rds-for-postgresql/change-the-specifications-of-an-apsaradb-rds-for-postgresql-instance) to a [current instance type](/help/en/rds/apsaradb-rds-for-postgresql/primary-apsaradb-rds-for-postgresql-instance-types) as soon as possible.

## Method 1: Renew an RDS instance in the ApsaraDB RDS console

**Renew a single RDS instance**

1.  Log on to the ApsaraDB RDS console and go to the [Instances](https://rds.console.alibabacloud.com/rdsList/basic) page. In the top navigation bar, select the region in which the RDS instance resides. Then, find the RDS instance and click the instance ID.
    
2.  In the **Status** section of the **Basic Information** page, click **Renew**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4056375371/p893982.png)
    
3.  On the **Renew** page, configure the **Renewal Duration** parameter. You are offered lower prices for longer subscription periods.
    
4.  Read the **Terms of Service** and click **Confirm Order**, and then complete the payment.
    

**Renew multiple RDS instances at a time**

1.  Log on to the [ApsaraDB RDS console](https://rds.console.alibabacloud.com/rdsList/basic). In the left-side navigation pane, click **Instances**. In the top navigation bar, select the region in which your RDS instance resides.
    
2.  Select the RDS instances that you want to renew and click **Renew** below the instance list.
    
3.  In the **Renew** dialog box, confirm the selected RDS instances and click **OK** to go to the **Renewal** page.
    
4.  On the **Manual** tab, select the RDS instances and click **Batch Renew** in the lower part of the page.
    
5.  Configure the **Duration** parameter of each RDS instance, click **Pay**, and then complete the payment.
    

## Method 2: Renew the instance in the Billing Management console

1.  Log on to the [ApsaraDB RDS console](https://rds.console.alibabacloud.com/).
    
2.  In the top navigation bar, choose **Expenses** > **Renewal Management**.![续费控制台](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3868906061/p48528.png)
    
3.  On the **Manual** tab of the **Renewal** page, find the RDS instances that you want to renew. You can renew one or more RDS instances at a time.
    
    -   **Renew a single RDS instance**
        
        1.  Find the RDS instance that you want to renew and click **Renew** in the **Actions** column.
            
            **Note**
            
            If the RDS instance is displayed on the **Auto** or **Nonrenewal** tab, you can click **Enable Manual Renewal** in the **Actions** column and then click **OK** in the message that appears to manually renew the RDS instance.
            
        2.  On the page that appears, configure the **Renewal Duration** parameter, click **Conform Order**, and then complete the payment.
            
    -   **Renew multiple RDS instances at a time**
        
        1.  Select the RDS instances that you want to renew and click **Batch Renew** in the lower part of the page.
            
        2.  Specify the **Duration** parameter of each RDS instance, click **Pay**, and then complete the payment.
            

## Auto-renewal

You can enable [auto-renewal](/help/en/rds/apsaradb-rds-for-postgresql/enable-auto-renewal-for-an-apsaradb-rds-for-postgresql-instance#concept-k2q-1kn-wdb) to avoid performing manual renewals and prevent service interruptions from expired subscriptions.

This topic provides answers to some frequently asked questions (FAQ) about Cost Manager.

### **Am I charged additional fees when I use Cost Manager?**

No, you are not charged additional fees when you use the old or new Cost Manager. You are not charged for the Log Service projects and Tablestore instances that are involved in Cost Manager.

### **What do I do if no data can be found in the Logstore involved in the new Cost Manager?**

The new Cost Manager stores bill data in a Tablestore table. The dedicated Tablestore table is associated with the dedicated Logstore as an external table named **instance\_bill**. As a result, you cannot find the bill data of the new Cost Manager on the query and analysis page of the Logstore. You can execute the `* | select * from instance_bill` statement to query data.

### **What do I do if no data is returned from a query?**

-   Check the query time range.
    
    In most cases, the instance bills of the current day are generated on the next day, and the bill data is pulled on a daily basis. For example, you cannot query the bill data of the current day for Log Service on the same day. If no data can be returned from a query, you must check whether the specified query time range falls on the current day. We recommend that you select one of the following time ranges: Yesterday, The Day before Yesterday, 1 Week, 30 Days, This Week, and This Month.
    
-   If you are using the new Cost Manager, check whether your query statement contains the external table that is used as the data source. You must specify a query statement that contains `from instance_bill`. Valid statement: `* | select * from instance_bill`.
    

### **What do I do if the specified filter conditions do not take effect?**

If you use the new Cost Manager, check whether all search conditions are specified in the WHERE clause of your query statement. The new Cost Manager uses an external table as the data source. If you specify search conditions before the vertical bar (|) in a query statement, the search conditions do not take effect. You must specify the search conditions in a WHERE clause. Valid statement: `* | select * from instance_bill where ProductCode='sls'`.

### **What do I do if bill data is incorrect due to query latency?**

-   Cost Manager pulls the instance bill data of the current day on the next day. As a result, you cannot query the data of the current day. You can query the data of the previous days.
    
    The time of the instance bills of a day is recorded as 00:00:00 of the day. Make sure that your query time range includes 00:00:00 of the required day.
    
-   If you use the old Cost Manager, you can upgrade Cost Manager to improve data accuracy and real-time performance. The new Cost Manager automatically performs a full update every morning.
    
    If you want to continue to use the old Cost Manager, go to the Settings page, click Re-import Bills to re-import the bill data.
    
    The re-import process requires approximately 3 hours to complete. The duration varies based on the volume of bill data that you want to import.
    
-   If you upgrade Cost Manger, a data import job is automatically submitted. You can view data after approximately 1 to 2 hours. The duration varies based on the volume of bill data that you want to import.
    
-   The first time you enable Cost Manager, check whether a data import job is submitted on the Settings page. You can view data approximately 1 to 2 hours after you submit the data import job. The duration varies based on the volume of bill data that you want to import. You can view data approximately 1 to 2 hours after you submit the data import job. The duration varies based on the volume of bill data that you want to import.
    

### **What do I do if an error that a resource does not exist occurs?**

If the "xxx not found" error occurs when you use Cost Manager, go to the Settings page, click **Next**, and then click **Update Resources & Next**.

**Important**

If you use a RAM user, make sure that the RAM user has the LogFullAccess permission.

### **What do I do if the dashboard subscription that I configured on the Settings page does not take effect?**

The dashboard subscription that you configured on the Settings page did not take effect because the current dashboard is a template. You must subscribe to the required dashboard in the corresponding project.

1.  In Cost Manager, click **Save As** in the upper-right corner of the dashboard to which you want to subscribe.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8969590961/p539804.png)
    
2.  Specify a dashboard name and click **OK**.
    
3.  Go back to the homepage of the Log Service console. In the project list, click the **bill-analysis-${Alibaba Cloud account ID}** project corresponding to Cost Manager.
    
4.  In the left-side navigation pane, choose **Dashboard** > **Dashboards**. Then, click the dashboard.
    
5.  On the dashboard page, click **Subscribe**.
    

### **What do I do if I cannot modify a dashboard in Cost Manager?**

The current dashboard is a template. You cannot modify the dashboard in Cost Manager. You must modify the dashboard in the corresponding project.

1.  In Cost Manager, click **Save As** in the upper-right corner of the dashboard to which you want to subscribe.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8969590961/p539804.png)
    
2.  Specify a dashboard name and click **OK**.
    
3.  Go back to the homepage of the Log Service console. In the project list, click the **bill-analysis-${Alibaba Cloud account ID}** project corresponding to Cost Manager.
    
4.  In the left-side navigation pane, choose **Dashboard** > **Dashboards**. Then, click the dashboard.
    
5.  On the dashboard page, click **Edit**.
    

### **Do I need to re-import bills if I use the new Cost Manager?**

No, the new Cost Manager automatically performs a full update on a daily basis.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8969590961/p539816.png)

### **What do I do if errors that are related to RAM user permissions occur?**

If you enable or upgrade Cost Manager as a RAM user, permission-related errors such as "role\_invalid" may occur. In this case, you must check whether the RAM user has the LogFullAccess permission.

### How to upgrade the built-in alert system of the old Cost Manager?

You can use the upgrade script. [Download the upgrade script](https://cloud-product-share.oss-cn-beijing.aliyuncs.com/bill/UpdateBillAlert.py).

The script usage instructions are as follows:

```
# Download the script and change to the script directory. Replace the placeholders with actual parameters and run the command.
# The project is bill-analysis-{Alibaba Cloud account ID}. The endpoint is the Simple Log Service endpoint of the project. Replace the accesskey_id and accesskey_secret with the actual AccessKey pair that has the relevant alert permissions.

python UpdateBillAlert.py {project} {endpoint} {accesskey_id} {accesskey_secret}
```

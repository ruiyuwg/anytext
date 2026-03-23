Direct log deletion is not supported in Simple Log Service (SLS). Instead, log removal is handled automatically based on a logstore's retention period. To delete older data, simply shorten this retention period. All logs exceeding the new time frame will then be permanently deleted.

## **Procedure**

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com).
    
2.  In the Projects section, click the one you want.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0052190171/p768895.png)
    
3.  On the **Log Storage** > **Logstores** tab, hover over the target logstore and then choose **![Modify](https://help-static-aliyun-doc.aliyuncs.com/assets/img/zh-CN/0478559951/p52318.png)** > **Modify**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5516575171/p784028.png)
    
4.  On the **Logstore Attributes** page, click **Modify**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5516575171/p784030.png)
    
5.  Change the **Data Retention Period** and then click **Save**.
    
    **Important**
    
    -   After you shorten the data retention period, SLS deletes any logs older than the new period within one hour. For example, if you change the retention period from 5 days to 1 day, logs from the previous 4 days are deleted within one hour.
        
    -   Proceed with caution. Once deleted, logs cannot be recovered.
        
    

## Reference

For help with issues such as being unable to delete a project, preventing log loss, and reducing storage costs, see [Manage a logstore](/help/en/sls/manage-a-logstore).

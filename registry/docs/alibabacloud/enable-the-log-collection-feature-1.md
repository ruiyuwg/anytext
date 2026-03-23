CloudLens for SLS provides the log collection feature. You can use the feature to collect the **global logs** and **operational logs** of Simple Log Service (SLS) with a few clicks. This topic describes how to enable the log collection feature. This topic also describes the operations that you can perform after you enable the feature.

## **Enable** CloudLens for SLS

**Important**

You need to perform this operation only once.

After you enable CloudLens for SLS, SLS automatically collects **global logs** and **operational logs**. Global logs include audit logs, error logs, and metrics. Operational logs include the important logs and job operational logs of original instance logs. You are not charged for the logs.

-   If this is your first time to enable CloudLens for SLS, the project named `log-service-{Alibaba Cloud account ID}-{region}` is used to store **global logs**. The `{region}` variable specifies the region that you select to store **global logs** when you enable CloudLens for SLS. The project named `log-service-{Alibaba Cloud account ID}-{region}` is used to store **operational logs**. The `{region}` variable specifies the region where the project resides. For more information about supported `regions`, see [Usage notes](/help/en/sls/usage-notes-45#section-m56-lbk-7gy).
    
    **Important**
    
    If you delete the project in which operational logs are stored, a project is automatically created.
    
-   If you enabled CloudLens for SLS, the configured region and project are used by default.
    

### **Procedure**

1.  Log on to the [Log Service console](https://sls.console.alibabacloud.com).
2.  In the **Log Application** section, click the **Cloud Service Lens** tab. Then, click **CloudLens for SLS**.
    
3.  On the **Data Import Management** page, click the **SLS Collection Policies** tab. Then, follow the on-screen instructions to enable the log collection feature. When you enable the log collection feature, SLS automatically authorizes CloudLens for SLS to assume the `AliyunServiceRoleForSLSAudit` service-linked role to collect **global logs** and **operational logs**. For more information, see [Manage the AliyunServiceRoleForSLSAudit service-linked role](/help/en/sls/manage-the-aliyunserviceroleforslsaudit-service-linked-role#concept-2089820).
    

## More operations

### **Enable billable resource monitoring**

In the left-side navigation pane, choose **Report Center** > **Billable Resource Monitoring**. Follow the on-screen instructions to **enable Cost Manager**. **Cost Manager** records data of SLS billable resources and automatically updates the data on a daily basis. For more information, see [Entry point](/help/en/sls/use-the-new-version-of-cost-manager#83a57a1037zse).

### **Create a collection policy**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3779135171/p765384.png)

On the **SLS Collection Policies** tab, click the Policies tab. Then, click Create Collection Policy. In the Create Collection Policy dialog box, configure the **Policy Name**, **Log Type**, and **Resource Matching Mode** parameters.

-   Log Type
    
    -   **Operational Logs (Free)**: records the consumption delay of consumer groups for each Logstore, heartbeats of Logtail, and operational data of data import jobs, Scheduled SQL jobs, and data shipping jobs. Operational logs are stored in the `internal-diagnostic_log` Logstore of the project.
        
    -   **Detailed Logs (Billable)**: records the operations to create, modify, update, and delete resources in the project. Data read and write operations are also recorded in detailed logs. Detailed logs are stored in the `internal-operation_log` Logstore of the project.
        
-   Resource Matching Mode
    
    -   **Instance Mode**: Select the project in the Instances drop-down list.
        
    -   **Attribute Mode**: Specify the project based on the **region** that you select in the Region drop-down list.
        

### Disable, modify, and delete a custom collection policy

**Important**

After enabling CloudLens for SLS, SLS automatically creates four built-in collection policies for audit logs, metrics, error logs, and operational logs. These built-in collection policies cannot be disabled, modified, or deleted in the console. However, you can adjust them by calling APIs such as [UpsertCollectionPolicy](/help/en/sls/developer-reference/api-sls-2020-12-30-upsertcollectionpolicy) and [DeleteCollectionPolicy](/help/en/sls/developer-reference/api-sls-2020-12-30-deletecollectionpolicy).

-   To disable the log collection feature based on a custom collection policy, find the policy and click **Disable** in the **Status** column.
    
-   To modify a custom collection policy, find the policy and click **Modify** in the **Actions** column. Then, modify the **Resource Matching Mode** parameter.
    
-   To delete a custom collection policy, find the policy and click **Delete** in the **Actions** column.
    

### **View project details**

On the **SLS Collection Policies** tab, click the Instances tab. The projects within your account are displayed. To view the details of a project, click the project name. Then, you are navigated to the Project Overview page.

### **Reconfigure indexes**

On the Data Import Management page, click the **Destination Logstore** tab. The Logstores that are configured to store shipped logs are displayed.

-   Click the name of the Logstore that you want to manage. Then, you are navigated to the Project Overview page.
    
-   To reconfigure indexes and use the most recent built-in indexes, find the name of the Logstore that you want to manage and click **Reset** in the **Index Reset** column.
    

**Important**

After you reconfigure the indexes for a Logstore, the Logstore uses the most recent built-in indexes, and custom indexes are deleted. The new indexes take effect only for new data in the Logstore.

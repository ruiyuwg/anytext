You can use the default role **AliyunLogETLRole** or a custom role to create a scheduled SQL job. This topic describes how to create and use the default role **AliyunLogETLRole**.

## Background information

The default role **AliyunLogETLRole** is pre-authorized to perform SQL analysis operations on source logstores or metricstores and to write the results to the destination logstores or metricstores. You only need to create the role, and no additional authorization is required.

## Create the default role **AliyunLogETLRole**

You can create the **AliyunLogETLRole** using the following methods:

**Important**

-   The authorization process must be completed using an Alibaba Cloud account or by a RAM user who has administrative rights.
    
-   If the AliyunLogETLRole default role already exists within your Alibaba Cloud account, there is no need to create it again.
    

-   Method 1: Click [Cloud Resource Access Authorization](https://ram.console.alibabacloud.com/role/authorization?request=%7B%22Services%22%3A%5B%7B%22Service%22%3A%22Log%22%2C%22Roles%22%3A%5B%7B%22RoleName%22%3A%22AliyunLogETLRole%22%2C%22TemplateId%22%3A%22ETL%22%7D%5D%7D%5D%2C%22ReturnUrl%22%3A%22https%3A%2F%2Fsls.console.alibabacloud.com%2F%22%7D) and follow the on-screen instructions to complete the creation.
    
-   Method 2: In the **Create Scheduled SQL** panel, click **Authorize** under **Default Role** and follow the on-screen instructions to complete the creation. ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0580295371/p898407.png)
    

### **What to do next**

When creating a scheduled SQL job, set **Write Authorization** and **SQL Execution Authorization** to **Default Role**. For more information, see [Create a scheduled SQL job](/help/en/sls/create-a-scheduled-sql-task/).

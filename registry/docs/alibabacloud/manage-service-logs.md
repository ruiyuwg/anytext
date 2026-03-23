If you need to obtain resource operation logs (create, modify, update, delete) and task execution logs (scheduled SQL, data import, data delivery) within a project, as well as the consumer group consumption delay logs within Logstore, and Logtail's error, heartbeat, and statistical logs, you can use the service log feature. This topic describes how to enable and disable the service log feature and how to modify service log configurations.

## Background information

When you enable the service log feature, you can select log types, including **detailed logs**, **important logs**, and **job operational logs**. For more information, see [Log types](/help/en/sls/log-types).

-   **Detailed logs:** If you enable the service log feature for detailed logs, a Logstore named **internal-operation\_log** is created in the project you selected, and a dashboard is created in the current project.
    
-   **Important logs:** If you enable the service log feature for important logs, a Logstore named **internal-diagnostic\_log** is created in the project you selected. The Logstore is used to store the consumption delay logs of consumer groups and Logtail heartbeat logs.
    
-   **Job operational logs:** If you enable the service log feature for job operational logs, a Logstore named **internal-diagnostic\_log** is created in the project you selected. The Logstore is used to store the logs of data import, Scheduled SQL, and data shipping jobs.
    

## Billing

-   **Detailed logs:** The billing mode for all Logstores is the same regardless of whether the Logstores contain detailed logs. For more information, see [Billable items of pay-by-feature](/help/en/sls/billable-items#concept-xzl-hjg-vgb).
    
-   **Important logs:** You are not charged when you import, store, query, and analyze important logs. You are charged when you transform or ship the logs. In this case, the pay-as-you-go billing method is used.
    
-   **Job operational logs:** You are not charged when you import, store, query, and analyze job operational logs. You are charged when you transform or ship the logs. In this case, the pay-as-you-go billing method is used.
    

## Prerequisites

-   A project is created. For more information, see [Create a project](/help/en/sls/manage-a-project/#section-ahq-ggx-ndb).
    
-   The Resource Access Management (RAM) user that you want to use to log on to the Simple Log Service console is granted the required permissions by using the Alibaba Cloud account to which the RAM user belongs. For more information, see [Grant permissions to a RAM user](/help/en/sls/create-a-ram-user-and-authorize-the-ram-user-to-access-log-service#undefined). The following sample code provides an example of a custom policy that you can attach to the RAM user:
    
    **Custom policy**
    
    ```
    {
      "Version": "1",
      "Statement": [
        {
          "Action": [
            "log:CreateDashboard",
            "log:UpdateDashboard",
            "log:GetDashboard"
          ],
          "Resource": "acs:log:*:*:project/{The project in which logs are stored}/dashboard/*",
          "Effect": "Allow"
        },
        {
          "Action": [
            "log:GetProject",
            "log:CreateProject",
            "log:ListProject"
          ],
          "Resource": "acs:log:*:*:project/*",
          "Effect": "Allow"
        },
        {
          "Action": [
            "log:List*",
            "log:Create*",
            "log:Get*",
            "log:Update*"
          ],
          "Resource": "acs:log:*:*:project/{The project in which logs are stored}/logstore/*",
          "Effect": "Allow"
        },
        {
          "Action": [
            "log:*"
          ],
          "Resource": "acs:log:*:*:project/{The Project for which the service log feature is enabled}/logging",
          "Effect": "Allow"
        }
      ]
    }
    ```
    

## Enable the service log feature

**Important**

The system records only the service logs that are generated after you enable the service log feature.

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com).
    
2.  In the Projects section, click the project that you want to manage.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0052190171/p768895.png)
    
3.  On the details page of the project, click the **Service Log** tab. Then, follow the on-screen instructions to enable the feature.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0025195171/p788663.png)
    
4.  In the right-side panel, configure the parameters and click **OK**. ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5151638271/p855713.png)
    
    The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    Enable Service Logs
    
    For more information, see the **Background information** section of this topic.
    
    Log Storage Location
    
    -   **Automatic Creation (Recommended)**: Simple Log Service automatically creates a project named `log-service-{User ID}-{region}` in the region of the current project to store service logs. We recommend that you store all service logs of the region in this project.
        
    -   **Current Project**: Simple Log Service stores service logs in the current project.
        
    -   Other projects in the drop-down list: Simple Log Service stores service logs in another project that resides in the same region as the current project. When you enable the service log feature for a project, you can specify only a project that resides in the same region as the current project to store service logs.
        
    

## Modify service log configurations

1.  Enter the **Project Overview** tab.
    
2.  Click the ![设置图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6284103561/p409871.png) icon of the **Service Log** tab. On the **Modify Service Log Settings** panel, modify the settings, and then click **OK**.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5151638271/p855714.png)
    

**Important**

-   We recommend that you select **Automatic Creation (Recommended)**. The service logs of different projects that reside in the same region can be stored in the same project.
    
-   After you change the value of **Log Storage Location**, the service logs that are generated after the change are stored in the new project that you specify. The logs that are stored in the original project are not automatically deleted or migrated to the new project. If you no longer require the logs in the original project, you can manually delete the original project. For more information, see [Manage a project](/help/en/sls/manage-a-project/#section-on2-3gx-ndb)
    

## Disable the service log feature

1.  Enter the **Project Overview** tab, and then click the ![设置图标](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6284103561/p409871.png) icon of the **Service Log** tab.
    
2.  In the **Enable Service Logs** section of the **Modify Service Log Settings** panel, clear all log types that are selected, and then click **OK**.
    

**Important**

After you disable the service log feature, Simple Log Service does not delete the service logs that are stored in the specified project. The service logs are deleted when the retention period of the service logs ends. You can also manually delete the project to delete the service logs that you no longer require. For more information, see [Manage a project](/help/en/sls/manage-a-project/#section-on2-3gx-ndb).

This topic describes how to create a Full-stack Observability instance.

## Prerequisites

-   A project is created. For more information, see [Create a project](/help/en/sls/manage-a-project/#section-ahq-ggx-ndb).
    
-   A RAM user is created. We recommend that you create an instance by using the RAM user. The RAM user must have the following permissions. For more information, see [Create a custom policy](/help/en/ram/create-a-custom-policy) and [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user).
    
    ```
    {
      "Version": "1",
      "Statement": [
        {
          "Action": [
            "ram:PassRole",
            "ram:GetRole",
            "ram:ListRoles"
          ],
          "Resource": "*",
          "Effect": "Allow"
        }
      ]
    }
    ```
    

## Procedure

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com).
    
2.  In the **Log Application** section, click **Full-stack Observability**.
    
3.  On the **Simple Log Service Full-stack Observability** page, click **Create Instance**.
    
4.  In the **Create Instance** dialog box, configure the parameters and click **Enable**. The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **Instance ID**
    
    The ID of the Full-stack Observability instance.
    
    **Instance Name**
    
    The name of the Full-stack Observability instance.
    
    **Description**
    
    The description of the Full-stack Observability instance.
    
    **Project**
    
    The project that you want to use. After observable data is collected to Simple Log Service, Simple Log Service automatically creates the required assets for the data in the project, such as Logstores, Metricstores, and dashboards.
    
    **Full-stack Observability**
    
    The data that you want to collect to the Full-stack Observability application. The application is integrated with the Trace and Full-stack Monitoring applications of Simple Log Service.
    
    -   The Trace application is based on OpenTelemetry. You can use Trace to collect, store, analyze, and visualize trace data. You can also configure alert rules for trace data. For more information, see [Trace](/help/en/sls/usage-notes-31#concept-2058206).
        
    -   The Full-stack Monitoring application is an end-to-end solution that is used to monitor IT system components, such as hosts, Kubernetes clusters, middleware, databases, and networks. The application allows you to collect, store, analyze, and visualize data. You can also configure alert rules for the data. For more information, see [Full-stack Monitoring](/help/en/sls/overview-of-full-stack-monitoring#concept-2144284).
        
    

## Related operations

**Operation**

**Description**

Change the configurations of the instance

Click **Modify** in the Actions column to change the name and description of the instance.

Disable the instance

Click **Manage Features** in the Actions column. In the dialog box that appears, click **Close** to disable the Trace and Full-stack Monitoring applications for the instance.

Delete the instance

Click **Delete** in the Actions column to delete the instance.

Before you delete an instance, make sure that the Trace and Full-stack Monitoring applications are disabled.

**Warning**

After an instance is deleted, it cannot be restored. Proceed with caution.

## What to do next

After the instance is created, you can use the Trace and Full-stack Monitoring applications in the Full-stack Observability application. For more information, see [Trace](/help/en/sls/usage-notes-31#concept-2058206) and [Full-stack Monitoring](/help/en/sls/overview-of-full-stack-monitoring#concept-2144284).

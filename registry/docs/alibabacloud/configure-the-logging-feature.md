Function Compute integrates with Simple Log Service. After you configure logging for a function, Function Compute automatically collects logs and delivers them to a specified Logstore. You can view single-request logs, instance logs, or function logs in the Function Compute console. You can also use the log analysis features in the Simple Log Service console to run custom queries.

## Background information

[Simple Log Service](https://www.alibabacloud.com/zh/product/log-service) is a one-stop log data service from Alibaba Cloud. To store function logs using Simple Log Service, configure a project and a Logstore in the service that contains the function. You must also grant Function Compute permission to access Simple Log Service. Function logs are sent to the configured Logstore. All function logs from the same service in the same region are sent to the same Logstore.

## **Billing**

Function Compute does not charge extra fees for the logging feature. Simple Log Service charges fees for log delivery. For more information, see [Billing overview](/help/en/sls/billing-overview).

## **Configure the logging feature**

## Configure logs in the Function Compute console

### **Prerequisites**

-   Function Compute
    
    -   [Create a service](/help/en/functioncompute/fc-2-0/user-guide/manage-services#section-765-0zj-cc4)
        
-   **Optional:** Simple Log Service (SLS)
    
    -   [Create a project and a Logstore](/help/en/sls/resource-management-overview#task-nn1-y2x-ndb)
        

### **Procedure**

1.  Log on to the [Function Compute console](https://fc.console.alibabacloud.com/). In the left-side navigation pane, click **Services & Functions**.
    
2.  In the top navigation bar, select a region. On the **Services** page, find the desired service and click **Configure** in the **Actions** column.
    
3.  In the **Log Config** section of the service settings, set the following parameters and click **Save**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7916099371/p756089.png)
    
    **Note**
    
    -   If you enable the logging feature when you create a service, the Function Compute console automatically creates a project that starts with `aliyun-fc-cn-<region_id>` and a default **Logstore** within that **Project**. Only one such project is created per region. If the system finds that a project was automatically created in the region before, it uses that project.
        
    -   If you do not enable the logging feature when you create the service, you must manually select a custom **Project** and **Logstore** when you update the service.
        
    -   The console automatically enables **Log Segmentation Rule**, **Request-level Metrics**, and **Instance-level Metrics**. It also creates all the indexes required to query logs.
        
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    **Logging Feature**
    
    Yes
    
    Specifies whether to enable Simple Log Service. Valid values:
    
    -   **Enable**: After this feature is enabled, Function Compute imports logs into your project. You can query and retrieve logs in the Function Compute console and the Simple Log Service console to track and locate issues.
        
        **Note**
        
        When you enable the logging feature, you must select a role that has permission to access Simple Log Service in the **Role** section. For more information about service roles, see [Grant Function Compute permissions to access other Alibaba Cloud services](/help/en/functioncompute/fc-2-0/security-and-compliance/grant-function-compute-permissions-to-access-other-alibaba-cloud-services#task-2077619).
        
    -   **Disable**: If this feature is disabled, function logs are not stored for persistence, and you cannot track or locate issues.
        
    
    **Configuration Method**
    
    Yes
    
    Select **Automatic Configuration** or **Custom Configuration**. If you select **Custom Configuration**, **Project** and **Logstore** are required.
    
    **Log Project**
    
    Yes
    
    The destination project for storing function invocation logs.
    
    **Logstore**
    
    Yes
    
    The destination Logstore for storing function invocation logs.
    
    **Log Segmentation Rule**
    
    No
    
    Specifies whether to enable a log segmentation rule. Valid values:
    
    -   **Enable**: After this feature is enabled, Function Compute chunks logs based on the segmentation rule into multiple log segments and writes them to Simple Log Service one by one.
        
        The default segmentation rule is `^.{0,2}\d{4}-\d{2}-\d{2}`. This rule matches dates in the `xxxx-xx-xx` format, where `x` represents a digit. The rule chunks logs based on whether a line starts with a date. For example, if a log line starts with 2023-10-10, it is considered the first line of a log entry. This line and the subsequent lines that do not start with a date are written to Simple Log Service as a single log.
        
    -   **Disable**: If this feature is disabled, logs are chunked using `\n` by default.
        
    
    **Request-level Metrics**
    
    No
    
    Specifies whether to import logs for request metrics to the Logstore. We strongly recommend that you enable this feature.
    
    Valid values:
    
    -   **Enable**: After this feature is enabled, metrics for each function invocation are delivered to the Logstore that you selected. These metrics include the function running time, memory usage, execution errors, cold starts, and the time taken for each step of a cold start. Function Compute displays a list of requests based on these metrics in the invocation logs. You can also use these metrics to filter requests, such as filtering all error requests or requests that involve cold starts.
        
    -   **Disable**: You cannot view the detailed information of request executions.
        
    
    **Instance-level Metrics**
    
    No
    
    Specifies whether to enable instance-level metrics. Valid values:
    
    -   **Enable**: After this feature is enabled, metric data for function instances is delivered to the Logstore that you selected. You can view performance metrics at the instance dimension, such as CPU, memory, and network I/O metrics. Function Compute provides instance-level observability based on instance-level metric data, offering an end-to-end monitoring and troubleshooting path for function instances. For more information, see [Instance-level metrics](/help/en/functioncompute/fc-2-0/user-guide/instance-level-metrics#task-2083444).
        
    -   **Disable**: You cannot view the detailed information of instance metrics.
        
    

## Configure logs using Serverless Devs

### Prerequisites

-   [Install Serverless Devs](/help/en/functioncompute/fc-2-0/developer-reference/install-serverless-devs-and-docker#section-0rz-d9z-m1l)
    
-   [Configure Serverless Devs](/help/en/functioncompute/fc-2-0/developer-reference/configure-serverless-devs)
    

### **Procedure**

1.  Create a code folder. The folder structure is as follows.
    
    ```
    .
    ├── code
    │   └── index.js
    └── s.yaml
    ```
    
    The following is a sample s.yaml file.
    
    In this example, the logConfig field configures the logging feature. Change the values of logstore and project to an existing Logstore and project in your account. You can also set logConfig to auto. If you do, Function Compute automatically creates a Logstore and a project for you.
    
    ```
    edition: 1.0.0
    name: hello-world-app
    access: "default"
    
    vars: 
      region: "cn-hangzhou"
      service:
        name: "hello-world-service"
        description: 'hello world by serverless devs'
        logConfig: # Change the project and logstore to your actual ones. You can also use logConfig:auto to automatically create a project and a logstore.
          project: 'your-project'
          logstore: 'your-logstore'
          enableRequestMetrics: true
          enableInstanceMetrics: true
        role: 'acs:ram::<accountID>:role/aliyunfcdefaultrole'
    
    services:
      helloworld:
        component: fc 
        props:
          region: ${vars.region} 
          service: ${vars.service}
          function:
            name: "hello-world"
            description: 'hello world by serverless devs'
            runtime: nodejs14
            codeUri: ./code
            handler: index.handler
            memorySize: 128
            timeout: 60
    ```
    
2.  Run the following command to deploy the application.
    
    ```
    sudo s deploy -y
    ```
    
    After the command runs successfully, you can log on to the [Function Compute console](https://fc.console.alibabacloud.com/) to view the deployed function and confirm that the logging feature is enabled.
    

## View invocation logs

On the function details page, click **Invocation Logs** to query the invocation records of the current function.

**Note**

You can switch between versions or aliases at the top of the page to query logs for a specific function version or alias.

You can view function invocation logs on the **Invocation Request List** tab or the **Keyword Search** tab. The differences are as follows:

-   **Invocation Request List**
    
    The list displays information such as the function invocation time, request ID, invocation result, instance ID, and the function's version and alias. The following figure shows an example:![item1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5638926561/p409252.png)
    
    -   Click a **Request ID** to view the request details and log details.
        
    -   Click an **Instance ID** to view the instance's metric usage, such as CPU usage, memory usage, and network traffic.
        
    -   In the **Actions** column, click **View Log** to view log details, or click **Advanced Log** to go to the [Simple Log Service console](https://sls.console.alibabacloud.com/lognext/profile) to query and analyze logs.
        
    
-   **Keyword Search**
    
    The list displays information such as the function invocation time, log content, and the function's version and alias. The following figure shows an example. In the **Actions** column, click **Log Context** to find several context logs for this log entry, or click **Logstore** to go to the [Simple Log Service console](https://sls.console.alibabacloud.com/lognext/profile) to query and analyze logs.![item2](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8628878461/p409254.png)
    
    You can enter keywords in the search box to query for the log information you need. For example, to search for logs that contain the text `hello world`, enter the keyword `hello world` in the search box. The search results will show all log lines that contain this keyword, as shown in the following figure. For more information about the query syntax, see [Query syntax](/help/en/sls/query-syntax/#concept-tnd-1jq-zdb).![item3](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8628878461/p410490.png)
    

## **References**

You can also configure logging for a function by calling the software development kit (SDK) or API. For more information, see [CreateService](/help/en/functioncompute/fc-2-0/developer-reference/api-fc-open-2021-04-06-createservice) and [LogConfig](/help/en/functioncompute/fc-2-0/developer-reference/api-fc-open-2021-04-06-struct-logconfig).

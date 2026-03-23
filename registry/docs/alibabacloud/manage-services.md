A service is a unit for resource management in Function Compute. Before you can create a function, you must create a service. Functions that belong to a service inherit attributes of the service, such as the permissions and log settings of the service. This topic describes the definition of a service and how to create and update a service in the Function Compute console.

## What is a service?

From a business perspective, an application consists of multiple services. From a resource usage perspective, a service consists of multiple functions. For example, a data processing service consists of two functions: a data preparation function that requires less resources and a data processing function that requires more resources. You can configure an instance that has low specifications to run the data preparation function, and configure an instance that has high specifications to run the data processing function.

## Create a service

1.  Log on to the [Function Compute console](https://fc.console.alibabacloud.com/). In the left-side navigation pane, click **Services & Functions**.
    
2.  In the top navigation bar, select a region. On the **Services** page, click **Create Service**.
    
3.  In the **Create Service** panel, enter the service name and description, configure other parameters, and then click **OK**. The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **Example**
    
    **Logging**
    
    Specifies whether to enable the logging feature. Valid values:
    
    -   **Enable**: Function Compute sends function execution logs to Simple Log Service for persistent storage. You can debug code, troubleshoot issues, and analyze data based on the logs.
        
    -   **Disable**: You cannot use Simple Log Service to store or query function execution logs.
        
    
    Enable
    
    Advanced options
    
    **Managed Service for OpenTelemetry**
    
    Specify whether to enable Managed Service for OpenTelemetry. Valid values:
    
    -   **Enable**: enables Managed Service for OpenTelemetry. You can use Jaeger to upload trace information. This allows you to view the traces of functions. You can also analyze and diagnose performance bottlenecks in serverless architectures. For more information, see [Overview of Managed Service for OpenTelemetry](/help/en/functioncompute/fc-2-0/user-guide/overview-32#concept-1996280).
        
    -   **Disable**: disables Managed Service for OpenTelemetry.
        
    
    Enable
    
    **Server Role**
    
    Configure the role for functions in the service. This way, functions can obtain the permissions of the role. For more information, see [Grant Function Compute permissions to access other Alibaba Cloud services](/help/en/functioncompute/fc-2-0/security-and-compliance/grant-function-compute-permissions-to-access-other-alibaba-cloud-services#task-2077619).
    
    AliyunFCDefaultRole
    
    **Access to VPC**
    
    Specifies whether to allow functions to access virtual private cloud (VPC) resources. For more information, see [Configure network settings](/help/en/functioncompute/fc-2-0/user-guide/configure-network-settings#multitask-2259926).
    
    Yes
    
    **VPC**
    
    This parameter is required if you set the **Access to VPC** parameter to **Yes**. Create a VPC or select the ID of an existing VPC that you want to access from the drop-down list.
    
    fc.auto.create.vpc.1632317\*\*\*\*
    
    **vSwitch**
    
    This parameter is required if you set the **Access to VPC** parameter to **Yes**. Create a vSwitch or select the ID of an existing vSwitch from the drop-down list.
    
    fc.auto.create.vswitch.vpc-bp1p8248\*\*\*\*
    
    **Security Group**
    
    This parameter is required if you set the **Access to VPC** parameter to **Yes**. Create a security group or select an existing security group from the drop-down list.
    
    fc.auto.create.SecurityGroup.vsw-bp15ftbbbbd\*\*\*\*
    
    **Access to Internet**
    
    Specifies whether to allow functions in the service to access the Internet. If you set this parameter to No, functions in the service cannot access the Internet over the default network interface controller (NIC) in Function Compute.
    
    **Important**
    
    If you want to use a static public IP address to access the Internet, you must set the **Access to Internet** parameter to No. Otherwise, the configured static public IP address does not take effect. For more information, see [Assign a static public IP address](/help/en/functioncompute/fc-2-0/user-guide/configure-static-public-ip-addresses#task-2174820).
    
    Yes
    
    After the service is created, you can click **Services & Functions** to view the created service on the Services page.
    

## Update a service

1.  Log on to the [Function Compute console](https://fc.console.alibabacloud.com/). In the left-side navigation pane, click **Services & Functions**.
    
2.  In the top navigation bar, select a region. On the **Services** page, find the desired service and click **Configure** in the **Actions** column.
    
3.  On the **Modify Service** page, configure the parameters based on your business requirements and click **Save**.
    
    -   **Optional:****Basic Settings**
        
        Configure basic information for the service. You can modify only the service description.
        
        **Parameter**
        
        **Description**
        
        **Reference**
        
        **Description**
        
        Enter a description for the service. The description helps you identify the purpose of the service.
        
        None
        
    -   **Optional:****Other configurations**
        
        **Parameter**
        
        **Description**
        
        **Reference**
        
        **Role Settings**
        
        Configure the role for the functions in the service so that the functions can obtain the permissions of the role.
        
        [Grant Function Compute permissions to access other Alibaba Cloud services](/help/en/functioncompute/fc-2-0/security-and-compliance/grant-function-compute-permissions-to-access-other-alibaba-cloud-services#task-2077619)
        
        **Logging Settings**
        
        Configure the logging feature for the service. After the logging feature is enabled, you can view the function execution logs. This allows you to perform code debugging, fault analysis, and data analysis.
        
        -   [Configure logging](/help/en/functioncompute/fc-2-0/user-guide/configure-the-logging-feature#multiTask2691)
            
        -   [Instance-level metrics](/help/en/functioncompute/fc-2-0/user-guide/instance-level-metrics#task-2083444)
            
        
        **Tracing Analysis Settings**
        
        Enable: After you enable Tracing Analysis, you can use Jaeger to upload trace information. This allows you to view the traces of functions. You can also analyze and diagnose performance bottlenecks in a serverless architecture.
        
        [Enable Tracing Analysis](/help/en/functioncompute/fc-2-0/user-guide/enable-tracing-analysis#task-1996189)
        
        **Network Settings**
        
        Configure network settings for functions in the service. For example, you can configure whether the functions can access the Internet and the resources in VPC.
        
        [Configure network settings](/help/en/functioncompute/fc-2-0/user-guide/configure-network-settings#multitask-2259926)
        
        **Storage Configuration**
        
        Configure the File Storage NAS (NAS) file system and Object Storage Service (OSS) file system used by functions in the service. This allows your functions to access files in the NAS file system or OSS file system as they do in the on-premises file system.
        
        -   [Configure a NAS file system](/help/en/functioncompute/fc-2-0/user-guide/configure-a-nas-file-system#task-2259934)
            
        -   [Configure an OSS file system](/help/en/functioncompute/fc-2-0/user-guide/configure-an-oss-file-system#task-2253315)
            
        

**Important**

You can delete services that you no longer require. Before you delete a service, make sure that the service has no functions, provisioned function instances, versions, or aliases. Otherwise, the service cannot be deleted.

## More information

In addition to the [Function Compute console](https://fc.console.alibabacloud.com/), you can also use Serverless Devs or call the Function Compute API to manage services. For more information, see [List of operations by function](/help/en/functioncompute/fc-2-0/developer-reference/api-fc-open-2021-04-06-overview#main-107864).

## **References**

-   Function Compute allows you to specify a version and an alias for a service. You can use versions and aliases to implement canary release. For more information, see [Use versions and aliases to implement canary release](/help/en/functioncompute/fc-2-0/user-guide/use-versions-and-aliases-to-implement-canary-release).
    
-   After you create a service, you also must create functions, the smallest resource unit in Function Compute, to implement specific business logic. For more information, see [Manage functions](/help/en/functioncompute/fc-2-0/user-guide/manage-functions).

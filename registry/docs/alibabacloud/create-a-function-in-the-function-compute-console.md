With Function Compute, you do not need to purchase and manage infrastructure such as servers. You need to only write and upload code and images to build elastic and reliable applications. This topic describes how to quickly create a function in the Function Compute console. In this topic, a simple serverless Hello World function is used as an example.

## Background

You must activate Function Compute and create a service in Function Compute before you create a function. After you create a function, you can run the function.

A service is the basic unit that helps you manage resources in Function Compute. You can create functions in a service and configure the settings of the service. For example, you can grant permissions to and configure the logging feature for the service. A function is the basic unit for resource scheduling and running in Function Compute. A function specifies the logic of code. You must write code based on the function interfaces provided by Function Compute and deploy the code to Function Compute as a function. Services in Function Compute are similar to microservices in a software application architecture. When you build applications on the Function Compute platform, abstract the business logic into microservices based on your business requirements. The microservices are then implemented as services in Function Compute.

## Prerequisites

You have registered an Alibaba Cloud account and completed real-name verification.

## Procedure

This topic describes how to create a function in the [Function Compute console](https://fc.console.alibabacloud.com/). In this topic, **Use Built-in Runtime** and **Use Custom Runtime** are used as examples.

### Step 1: Activate Function Compute

1.  Go to the [Function Compute homepage](https://www.alibabacloud.com/products/function-compute).
    
2.  Click **Console**. The page for trial plans for new users of Function Compute is displayed. Then, click **Buy Now** to activate Function Compute and go to the [Function Compute console](https://fc.console.alibabacloud.com/).
    
    **Note**
    
    -   We recommend that you use an Alibaba Cloud account to activate Function Compute and use the services as an RAM user.
        
    -   If you have activated Function Compute, you are directed to the [Function Compute console](https://fc.console.alibabacloud.com/).
        
    
3.  **(Optional)** If this is the first time you log on to the Function Compute console. The **Create the AliyunFcDefaultRole Role** message appears. Click **Create** to go to the [Create Role](https://ram.console.alibabacloud.com/role/commonAuthorize?request=%7B%22ReturnUrl%22%3A%22https%3A%2F%2Ffc.console.alibabacloud.com%2Fauthoration%3Fresponse%3D%7Bresponse%7D%22%2C%22Service%22%3A%22FC%22%2C%22Type%22%3A%22custom%22%2C%22RoleName%22%3A%22AliyunFcDefaultRole%22%2C%22SystemPolicyArray%22%3A%5B%22AliyunFCDefaultRolePolicy%22%5D%2C%22RoleDescription%22%3A%22Default%20Service%20Role%20for%20FC%20to%20operate%20other%20resource%22%7D) page and create the AliyunFCDefaultRole role.
    
    -   Authorization succeeds
        
        If the authorization succeeds, Function Compute has the permissions to access specified Alibaba Cloud resources.
        
    -   Authorization fails
        
        If authorization fails, check whether you have the permissions to perform authorization.
        
        -   If you use a RAM user and do not have the permissions to create the default role for Function Compute, you must log on with your Alibaba Cloud account and go to the [page for creating roles](https://ram.console.alibabacloud.com/role/commonAuthorize?request=%7B%22ReturnUrl%22%3A%22https%3A%2F%2Ffc.console.alibabacloud.com%2Fauthoration%3Fresponse%3D%7Bresponse%7D%22%2C%22Service%22%3A%22FC%22%2C%22Type%22%3A%22custom%22%2C%22RoleName%22%3A%22AliyunFcDefaultRole%22%2C%22SystemPolicyArray%22%3A%5B%22AliyunFCDefaultRolePolicy%22%5D%2C%22RoleDescription%22%3A%22Default%20Service%20Role%20for%20FC%20to%20operate%20other%20resource%22%7D) to grant permissions. After the authorization, the Create the AliyunFcDefaultRole Role message is not displayed the next time you log on to the [Function Compute console](https://fc.console.alibabacloud.com/) by using your RAM user.
            
        -   If you use an Alibaba Cloud account or a RAM user that has the permission to create the default role for Function Compute, the authorization may fail because some features cannot be authorized. In this case, Function Compute can still be used as expected. If you still need to grant the default role, join the DingTalk group **11721331** for technical support.
            
        
    
    For more information about permission management, see [Grant Function Compute permissions to access other Alibaba Cloud services](/help/en/functioncompute/fc-2-0/security-and-compliance/grant-function-compute-permissions-to-access-other-alibaba-cloud-services#task-2077619).
    

### Step 2: Create a service

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
    

### Step 3: Create a function

1.  Log on to the [Function Compute console](https://fc.console.alibabacloud.com/). In the left-side navigation pane, click **Services & Functions**.
    
2.  In the top navigation bar, select a region. On the **Services** page, click the desired service.
    
3.  On the **Functions** page, click **Create Function**.
4.  On the **Create Function** page, select a method to create a function, configure the following parameters, and then click **Create**.
    
    **Note**
    
    In this example, **Use Built-in Runtime** and **Use Custom Runtime** are used. If the runtimes provided by Function Compute cannot meet your business requirements, you can select **Use Container Image** to create a function. For more information, see [Create a Custom Container function](/help/en/functioncompute/fc-2-0/user-guide/create-a-custom-container-function#task-2559807).
    
    -   **Basic Settings**: Configure the basic information of the function, including **Function Name** and **Handler Type**. **Handler Type** can be set to one of the following values:
        
        -   **Event Handler**: triggers the function by using a timer, calling API operations, using SDKs, or using triggers integrated with other Alibaba Cloud services.
            
        -   **HTTP Handler**: triggers function execution by HTTP requests or WebSocket requests. In web scenarios, we recommend that you select **Use Custom Runtime**.
            
    -   In the **Code** section, configure the runtime and code-related information of the function.
        
        **Parameter**
        
        **Description**
        
        **Example**
        
        **Runtime**
        
        Select a programming language, such as Python, Java, PHP, or Node.js. For more information about the runtimes that are supported by Function Compute, see [Runtimes that are supported by Function Compute](/help/en/functioncompute/fc-2-0/user-guide/manage-functions#title-4gw-wot-0ia).
        
        Node.js14
        
        **Code Upload Method**
        
        Select a method to upload function code to Function Compute.
        
        -   **Use Sample Code**: Select sample code provided by Function Compute to create a function based on your business requirements. This is the default method.
            
        -   **Upload ZIP**: Select and upload a ZIP package that contains your code.
            
        -   **Upload JAR**: Select and upload a JAR file that contains your function code.
            
        -   **Upload Folder**: Select and upload a folder that contains function code.
            
        -   **OSS**: Specify the **Bucket Name** and **Object Name** parameters for your function code.
            
        
        **Note**
        
        -   If you set **Code Upload Method** to **Use Sample Code**, you do not need to modify **Handler**. If you select another code upload method, you must modify **Handler** based on your business requirements. Otherwise, an error is reported when you run the function.
            
        -   If you set **Runtime** to **Java 8** or **Java 11**, you can select only **Use Sample Code**, **Upload JAR**, or **OSS** to upload function code. For other runtimes, you can select **Use Sample Code**, **Upload ZIP**, **Upload Folder**, or **OSS**.
            
        
        Use Sample Code
        
        **Startup Command**
        
        **Note**
        
        You must configure this parameter only if you select **Use Custom Runtime** to create a function.
        
        Configure the startup command of the program. If you do not configure the startup command, you must manually create a startup script named bootstrap in the root directory of the code. The bootstrap script is used to start your program.
        
        npm run start
        
        **Listening Port**
        
        **Note**
        
        You must configure this parameter only if you select **Use Custom Runtime** to create a function.
        
        Specify the port on which the HTTP server in your code listens.
        
        9000
        
    -   **Advanced Settings**: Configure instance information and the function execution timeout period.
        
        **Parameter**
        
        **Description**
        
        **Example**
        
        **Specifications**
        
        Configure **vCPU Capacity** and **Memory Capacity** based on your business requirements. For more information about billing of resources, see [Billing overview](/help/en/functioncompute/fc-2-0/product-overview/billing-overview#concept-2557114).
        
        **Note**
        
        The ratio of vCPU capacity to memory capacity (in GB) must be set from 1:1 to 1:4.
        
        0.35 vCPUs, 512 MB
        
        **Size of Temporary Disk**
        
        Specify the size of the hard disk used to temporarily store files based on your business requirements.
        
        Valid values:
        
        -   512 MB (default): You are not charged for using a temporary disk of this size. Function Compute provides you with a free disk capacity of 512 MB.
            
        -   10 GB: You are charged based on a disk size of 9.5 GB.
            
        
        **Note**
        
        Data can be written to all directories in the temporary hard disk. The directories share the space of the temporary hard disk.
        
        The lifecycle of the temporary hard disk is consistent with that of the underlying instance. After the instance is recycled by the system, the data on the hard disk is cleared. To persist stored data, you can use File Storage NAS (NAS) or Object Storage Service (OSS). For more information, see [Configure a NAS file system](/help/en/functioncompute/fc-2-0/user-guide/configure-a-nas-file-system#task-2259934) and [Configure an OSS file system](/help/en/functioncompute/fc-2-0/user-guide/configure-an-oss-file-system#task-2253315).
        
        512 MB
        
        **Instance Concurrency**
        
        Specify the instance concurrency. For more information, see [Configure instance concurrency](/help/en/functioncompute/fc-2-0/user-guide/configure-instance-concurrency#task-2552850).
        
        10
        
        **Execution Timeout Period**
        
        Specify the timeout period of a function execution. The default value of **Execution Timeout Period** is 60 seconds and the maximum value is 86,400 seconds.
        
        60
        
        **Handler**
        
        Specify the handler of the function. The Function Compute runtime loads and invokes the handler to process requests. This parameter is not required if you select **Use Custom Runtime** or **Use Container Image**.
        
        **Note**
        
        If you set **Code Upload Method** to **Use Sample Code**, you do not need to modify **Handler**. If you select another code upload method, you must modify **Handler** based on your business requirements. Otherwise, an error is reported when you run the function.
        
        index.handler
        
        **Time Zone**
        
        Specify the time zone of the function. After you configure the time zone of the function, the environment variable **TZ** is automatically added to the function. The value is the time zone that you configure.
        
        UTC
        
    -   **Environment Variables**: Configure environment variables for the runtime of your function. For more information, see [Environment variables](/help/en/functioncompute/fc-2-0/user-guide/fc-environment-variables#multiTask2981).
        
    -   In the **Trigger Configurations** section, configure a trigger for the function based on your business requirements. You can use the trigger to trigger the function. For more information, see [Manage triggers](/help/en/functioncompute/fc-2-0/user-guide/manage-triggers#concept3804).
        
    

### Step 4: Execute the function

1.  Log on to the [Function Compute console](https://fc.console.alibabacloud.com/). In the left-side navigation pane, click **Services & Functions**.
    
2.  In the top navigation bar, select a region. On the **Services** page, click the desired service.
    
3.  On the **Functions** page, click the function that you want to manage and click the **Code** tab to view code of the function.
    
    The following code snippet provides an example of code of a function that is created by using **Use Built-in Runtime**.
    
    **Note**
    
    You can edit the code in the code editor to implement secondary development. Then, click **Deploy**. The code takes effect only after the code is deployed.
    
    ```
    'use strict';
    
    exports.handler = (event, context, callback) => {
      console.log('hello world');
      callback(null, 'hello world');
    }
    ```
    
4.  Click **Test Function**.
    
    After the function is executed, you can view the result and detailed logs on the **Code** tab.
    

## **References**

-   Function Compute provides various sample code. You can easily find the sample code that meets your business requirements when you create or configure a function. For more information about the sample code of Function Compute, see [Sample code](/help/en/functioncompute/fc-2-0/sample-code).
    
-   If the "Unable to import module 'index" error occurs when your function is being executed, check whether the handler is correctly configured and whether the required dependencies are installed. For more information, see [Install third-party dependencies for a function](/help/en/functioncompute/fc/user-guide/install-third-party-dependencies-for-a-function).
    
-   Function Compute allows you to use Serverless Devs to build, debug, and deploy applications. For more information, see [Manage function resources by using Serverless Devs](/help/en/functioncompute/fc-2-0/developer-reference/manage-function-resources-by-using-serverless-devs).
    
-   Function in Function Compute can be directly triggered or triggered by using events. For more information about event-triggered functions, see [Trigger overview](/help/en/functioncompute/fc-2-0/user-guide/trigger-overview).
    

## **FAQ**

-   [FAQ about billing](/help/en/functioncompute/fc-2-0/product-overview/faq-about-billing)
    
-   [FAQ about permission management](/help/en/functioncompute/fc-2-0/faq-about-permission-management/)
    
-   [FAQ about service management](/help/en/functioncompute/fc-2-0/faq-about-service-management/)
    
-   [FAQ about function management](/help/en/functioncompute/fc-2-0/faq-about-function-management/)

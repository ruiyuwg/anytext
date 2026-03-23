Function Compute manages and executes functions. Within a service in Function Compute, you can create multiple functions that share common settings, such as service authorization and log settings. These functions are independent of each other. You can use the Function Compute console to create functions, update functions, and retrieve function ARNs.

## Prerequisites

[Service created](/help/en/functioncompute/fc-2-0/user-guide/manage-services#section-765-0zj-cc4)

## Create a function

1.  Log on to the [Function Compute console](https://fc.console.alibabacloud.com/). In the left-side navigation pane, click **Services & Functions**.
    
2.  In the top navigation bar, select a region. On the **Services** page, click the desired service.
    
3.  On the **Functions** page, click **Create Function**.
4.  On the **Create Function** page, choose a method to create your function. Configure the following settings, then click **Create**.
    
    **Note**
    
    This topic uses the **Use Built-in Runtime** and **Use Custom Runtime** methods as examples. If the environments provided by Function Compute cannot meet your business requirements, you can deploy functions using the **Use Container Image** method. For specific instructions, see [Creating a Custom Container Function](/help/en/functioncompute/fc-2-0/user-guide/create-a-custom-container-function#task-2559807).
    
    -   **Basic settings**: Configure basic function information, including **Function Name** and **Handler Type**. The **Handler Type** options are:
        
        -   **Event request handler**: Triggers function execution using timers, API/SDK calls, or triggers from other Alibaba Cloud services.
            
        -   **HTTP request handler**: Handles HTTP or WebSocket requests. For web scenarios, we recommend **Use Custom Runtime**.
            
    -   **Function code**: Configure the runtime environment and code-related settings.
        
        **Setting**
        
        **Description**
        
        **Example**
        
        **Runtime**
        
        Select a language, such as Python, Java, PHP, or Node.js. For the runtimes that Function Compute supports, see [Runtimes that are supported by Function Compute](#title-4gw-wot-0ia).
        
        Node.js 14
        
        **Code upload method**
        
        Select the method for uploading function code to Function Compute.
        
        -   **Use sample code**: By default, you can select sample code provided by Function Compute to create a function based on your business needs.
            
        -   **Upload code as ZIP package**: Select and upload a ZIP file containing your function code.
            
        -   **Upload code as JAR package**: Select and upload a JAR file containing your function code.
            
        -   **Upload code from folder**: Select and upload a folder containing your function code.
            
        -   **Upload code from OSS**: Enter an OSS **Bucket Name** and **Object Name**.
            
        
        **Note**
        
        -   When you select **Code upload method** as **Use sample code**, do not change the **Handler**. When you select any other upload method, update the **Handler** as needed. Otherwise, the function fails at runtime.
            
        -   If you select **Runtime** as **Java 8** or **Java 11**, only **Use sample code**, **Upload code as JAR package**, and **Upload code from OSS** are supported. All other runtimes support **Use sample code**, **Upload code as ZIP package**, **Upload code from folder**, and **Upload code from OSS**.
            
        
        Use sample code
        
        **Start command**
        
        **Note**
        
        Set this only when you select **Use Custom Runtime**.
        
        The command that starts your program. If you do not set a start command, manually create a bootstrap script named bootstrap in your code's root directory. Your program starts through this script.
        
        npm run start
        
        **Listening port**
        
        **Note**
        
        Set this only when you select **Use Custom Runtime**.
        
        The port number your HTTP server listens on.
        
        9000
        
    -   **Advanced configuration**: Configure instance-related settings and function execution timeout.
        
        **Setting**
        
        **Description**
        
        **Example**
        
        **Specification plan**
        
        Select or enter a suitable combination of **vCPU** and **memory** sizes based on your workload. For billing details, see [Billing overview](/help/en/functioncompute/fc-2-0/product-overview/billing-overview#concept-2557114).
        
        **Note**
        
        The vCPU-to-memory ratio must be between 1:1 and 1:4. vCPU is measured in cores. Memory is measured in GB.
        
        0.35 vCPU, 512 MB
        
        **Temporary disk size**
        
        Select a disk size for temporary file storage based on your workload.
        
        Valid values:
        
        -   512 MB: the default value. Free of charge; Function Compute provides you with a free disk usage quota of up to 512 MB.
            
        -   10 GB: Billed for 9.5 GB.
            
        
        **Note**
        
        All directories on the temporary disk are writable. Disk space is shared across all directories.
        
        The temporary disk exists for the lifetime of the function instance. Data is lost when the instance is reclaimed. To persist files, mount NAS or OSS. For details, see [Configure a NAS file system](/help/en/functioncompute/fc-2-0/user-guide/configure-a-nas-file-system#task-2259934) and [Configure an OSS file system](/help/en/functioncompute/fc-2-0/user-guide/configure-an-oss-file-system#task-2253315).
        
        512 MB
        
        **Instance concurrency**
        
        Set the maximum number of concurrent instances for this function. For details, see [Set instance concurrency](/help/en/functioncompute/fc-2-0/user-guide/configure-instance-concurrency#task-2552850).
        
        10
        
        **Execution timeout**
        
        Specify the execution timeout period. **Execution timeout period** defaults to 60 seconds, with a maximum of 86,400 seconds.
        
        60
        
        **Handler**
        
        Set the request handler, which the Function Compute runtime loads and invokes to process requests. You do not need to set this configuration item when selecting **Use Custom Runtime** and **Create with container image**.
        
        **Note**
        
        When you select **Code upload method** as **Use sample code**, do not change the **Handler**. When you select any other upload method, update the **Handler** as needed. Otherwise, the function fails at runtime.
        
        index.handler
        
        **Time zone**
        
        Select the time zone for your function. After you set the time zone, Function Compute automatically adds an environment variable named **TZ** with your selected time zone as its value.
        
        UTC
        
    -   **Environment variables**: Set environment variables for your function. For more information, see [Environment variables](/help/en/functioncompute/fc-2-0/user-guide/fc-environment-variables#multiTask2981).
        
    -   **Trigger configuration**: Configure triggers to invoke your function. For more information, see [Manage triggers](/help/en/functioncompute/fc-2-0/user-guide/manage-triggers#concept3804).
        
    

## Update a function

1.  Log on to the [Function Compute console](https://fc.console.alibabacloud.com/). In the left-side navigation pane, click **Services & Functions**.
    
2.  In the top navigation bar, select a region. On the **Services** page, click the desired service.
    
3.  On the **Functions** page, find the function that you modify and click **Configure** in the **Actions** column.
4.  On the Edit Function Configuration page, update the required settings, then click **Save**.
    
    -   **Basic information**
        
        Configure basic function information. You can currently update the function **Description**, **Specification plan**, **Disk size**, and **Instance concurrency**.
        
    -   **Environment information**
        
        Configure the runtime environment and other key settings. For more information, see [Create a function](#section-b9y-zn1-5wr).
        
    -   **Other Configurations**
        
        **Setting**
        
        **Description**
        
        **Reference**
        
        **Environment variables**
        
        Set environment variables for your function.
        
        [Environment variables](/help/en/functioncompute/fc-2-0/user-guide/fc-environment-variables#multiTask2981)
        
        **Instance lifecycle hooks**
        
        Configure lifecycle hooks for function instances, including **initializer function**, **PreFreeze function**, and **PreStop function**.
        
        [Function instance lifecycle](/help/en/functioncompute/fc-2-0/user-guide/function-instance-lifecycle#task-2041841)
        
        **Layers**
        
        Select a layer name and version that you have created. Layers let you publish and deploy custom dependencies, runtimes, and function extensions.
        
        [Create a custom layer](/help/en/functioncompute/fc-2-0/user-guide/create-a-custom-layer#task-2130618)
        
        **DNS configuration**
        
        Configure custom DNS. The platform generates resolv.conf based on this setting.
        
        [Configure custom DNS in a function](/help/en/functioncompute/fc-2-0/user-guide/configure-custom-dns-settings-for-functions#task-2144613)
        

**Note**

You can also delete functions you no longer need.

## Get a function ARN

An Alibaba Cloud Resource Name (ARN) identifies a resource in your code. Retrieve a function's ARN to reference it elsewhere.

1.  Log on to the [Function Compute console](https://fc.console.alibabacloud.com/). In the left-side navigation pane, click **Services & Functions**.
    
2.  In the top navigation bar, select a region. On the **Services** page, click the desired service.
    
3.  On the **Functions** page, click the name of the function whose ARN you want to retrieve.
    
4.  On the function details page, go to the **Configuration** tab. In the **Basic Information** section, view and copy the function ARN.
    

## Runtimes supported by Function Compute

**Runtime**

**Description**

**Documentation link**

Node.js 6

Node.js 6

[Node.js runtime](/help/en/functioncompute/fc-2-0/user-guide/overview-37#multiTask9033)

Node.js 8

Node.js 8

Node.js 10

Node.js 10

Node.js 12

Node.js 12

Node.js 14

Node.js 14

Node.js 16

Node.js 16

Python 2.7

Python 2.7

[Python runtime](/help/en/functioncompute/fc-2-0/user-guide/overview#multiTask3128)

Python 3

Python 3.6

Python 3.9

Python 3.9

Python 3.10

Python 3.10

PHP 7.2

PHP 7.2.7

[PHP runtime](/help/en/functioncompute/fc-2-0/user-guide/overview-8#multiTask7729)

Java 11

Java 11

[Java runtime](/help/en/functioncompute/fc-2-0/user-guide/compile-and-deploy-code-packages#multiTask10430)

Java 8

Java 8

.NET Core 3.1

.NET Core 3.1

[.NET Core runtime](/help/en/functioncompute/fc-2-0/user-guide/overview-31#concept-2258388)

Go 1.x

Go 1.8 or later

[Go runtime](/help/en/functioncompute/fc-2-0/user-guide/runtime#task-2121770)

Custom Runtime

Custom runtime (Debian 9)

[Custom Runtime runtime](/help/en/functioncompute/fc-2-0/user-guide/overview-10#Task-2259898)

Custom Runtime (Debian 10)

Custom runtime (Debian 10)

Custom Container

None

[Custom Container runtime](/help/en/functioncompute/fc-2-0/user-guide/overview-3#concept-2559678)

## References

-   In addition to the console, Function Compute also provides the following ways to manage functions.
    
    -   Use Serverless Devs commands: [Function-related commands](/help/en/functioncompute/fc-2-0/developer-reference/function-related-commands).
        
    -   Use APIs for function management: [API overview](/help/en/functioncompute/fc-2-0/developer-reference/api-fc-open-2021-04-06-overview#api-overview-163743-1).
        

-   For execution timeout errors, see [Function timed out. What do I do?](/help/en/functioncompute/fc-2-0/how-to-handle-an-execution-timeout-error).
    
-   Infrequently invoked functions take longer to respond. See [Why do infrequently invoked functions take longer to respond?](/help/en/functioncompute/fc-2-0/why-infrequently-used-functions-take-a-longer-period-of-time-to-invoke). To eliminate cold-start latency, use provisioned instances. See [How do I keep instances running to avoid cold-start latency?](/help/en/functioncompute/fc-2-0/how-to-keep-instances-alive-to-eliminate-the-impact-of-cold-starts).
    
-   To stop paying for a function, delete the function and its service. For more information, see [Update a function](#section-efu-0ch-7zr) and [Update a service](/help/en/functioncompute/fc-2-0/user-guide/manage-services#section-hzn-2gn-3ww).

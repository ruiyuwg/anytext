This topic describes how to use Alibaba Cloud CLI within Cloud Shell to manage your Alibaba Cloud resources from the command line.

## **Overview of Cloud Shell and Alibaba Cloud CLI**

**Cloud Shell** is a browser-based command-line interface that provides pre-installed tools, including Alibaba Cloud CLI, for managing your cloud resources. For more information, see [What is Cloud Shell?](/help/en/cloud-shell/what-is-the-cloud-command-line)

**Alibaba Cloud CLI** is a command-line tool that allows you to interact with Alibaba Cloud services through APIs. For more information, see [What is Alibaba Cloud CLI?](/help/en/cli/what-is-alibaba-cloud-cli)

## **Prerequisites**

-   To ensure security, we recommend logging on to the console and using Cloud Shell as a RAM identity (RAM user or RAM role) instead of the Alibaba Cloud account. The RAM identity must have the necessary permissions to manage the resources you intend to work with. For more information, see [Identity-based policies](/help/en/cloud-shell/identity-based-policies/).
    
-   When you start Cloud Shell, it automatically configures the CLI with credentials based on your logged-on identity. **Do not modify or delete the default credential configuration file.**
    

## Procedure

### **Step 1: Start Cloud Shell**

You can start Cloud Shell in two ways:

-   From the [Alibaba Cloud Management Console](https://home.console.alibabacloud.com/new?cloudshell=true): Click the Cloud Shell icon in the top navigation bar.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9112988271/p838624.png)
    
-   **As a standalone application:** Navigate directly to [https://shell.aliyun.com](https://shell.aliyun.com).
    

**Note**

-   The first time you start Cloud Shell, a virtual machine (VM) instance is provisioned for you, which may take a few moments. Subsequent sessions will start faster.
    
-   You can open up to five concurrent windows. All sessions share the same underlying VM instance.
    

### Step 2: Construct and run a command

You can obtain CLI commands in two ways:

## Method 1: Use OpenAPI Explorer (Recommended)

OpenAPI Explorer is the easiest way to find and generate CLI commands.

1.  In [OpenAPI Explorer](https://api.alibabacloud.com/), search for the service and API operation you want to use.
    
2.  On the **Debugging** page, fill in the required parameters.
    
3.  Click the **CLI Example** tab to view the automatically generated command.
    
4.  Click **Run Command in CloudShell** (the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9855992271/p820215.png) icon) to directly run the command in Cloud Shell, or copy (the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0395992271/p820218.png) icon) the command and paste it into your Cloud Shell window.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6131032371/p820225.png)

For more information, see [Generate a command](/help/en/cli/sample-commands#fc9b6069afmg0).

## Method 2: Use built-in help

### Understand command structure

Alibaba Cloud CLI supports two API styles: RPC and RESTful. Most services, including Elastic Compute Service (ECS) and ApsaraDB RDS, use the RPC style. The command structure differs slightly between them. You can identify the API style by checking if the API documentation specifies an `Action` parameter (RPC) or a `PathPattern` (RESTful). For more information, see [Command structure](/help/en/cli/call-rpc-api-and-roa-api).

You can use the `--help` flag to get information about services, operations, and parameters directly in the CLI.

-   To get help for a specific service:
    
    ```
    aliyun <ProductCode> --help
    ```
    
    Example for ECS:
    
    ```
    aliyun ecs --help
    ```
    
-   To get help for a specific API operation:
    
    ```
    aliyun <ProductCode> <ApiName> --help
    ```
    
    Example for the `DescribeInstances` operation in ECS:
    
    ```
    aliyun ecs DescribeInstanceAttribute --help
    ```
    

### **Step 3: (Example) Create an ECS instance**

The following command is an example of using the CLI to create a pay-as-you-go ECS instance.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9112988271/p844381.png)

The CLI will return a JSON response containing details of the newly created instance.

## References

-   [Use Alibaba Cloud CLI to call API operations](/help/en/cli/quickly-start-using-alibaba-cloud-cli)
    
-   [Command structure](/help/en/cli/call-rpc-api-and-roa-api)
    
-   [Parameter formats in Alibaba Cloud CLI](/help/en/cloud-shell/user-guide/cli-parameter-format-description#concept-102328-zh)

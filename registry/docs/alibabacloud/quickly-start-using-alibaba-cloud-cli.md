This topic describes how to use Alibaba Cloud CLI to call API operations, including how to install Alibaba Cloud CLI, configure credentials, and generate and run commands.

## **Overview**

To call API operations by using Alibaba Cloud CLI, perform the following steps:

1.  Select and install a version of Alibaba Cloud CLI based on the operating system of your device.
    
2.  Configure credential information in Alibaba Cloud CLI, including identity credentials such as an AccessKey pair, and a region ID. Alibaba Cloud CLI uses the credential information that you configured to call API operations.
    
3.  Specify the parameters in OpenAPI Explorer to generate a sample CLI command that contains the specified parameters. Copy the command.
    
4.  Paste the command into a shell tool and specify command options based on your business requirements. Run the command to call the corresponding API operation.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4697159671/CAEQORiBgIClkqqtrhkiIDQ5MzFhNjdiMjk2NjQ5Y2JiYTgxNTRjOThkNjQ0ZWEz4530473_20240716155803.178.svg)

## **Prerequisites**

-   An Alibaba Cloud account is created. You can create an Alibaba Cloud account on the [Alibaba Cloud official website](https://www.alibabacloud.com/). We recommend that you create a RAM user to call API operations. For more information, see [Create a RAM user](/help/en/ram/user-guide/create-a-ram-user).
    
-   The Alibaba Cloud services whose API operations you want to call are activated. You can use one of the following methods to activate the Alibaba Cloud services that you require. In this example, Short Message Service (SMS) is activated.
    
    -   Log on to the [User Center](https://api.alibabacloud.com/user_center/open) console. On the service activation page, search for SMS, select the check box before SMS, and then click **Activate**.
        
    -   Log on to the console of each Alibaba Cloud service that you want to activate. For example, you can log on to the SMS console and click **Activate Now** on the Activate page of the [SMS](https://www.alibabacloud.com/en/product/short-message-service?_p_lc=1&spm=a2796.11401589.6791778070.8.4fd48eb1KkZ4G3) console.
        
-   Alibaba Cloud CLI is supported by the Alibaba Cloud services whose API operations you want to call. To check whether an Alibaba Cloud service supports Alibaba Cloud CLI, perform one of the following operations:
    
    -   View the documentation of the Alibaba Cloud service and choose **Developer Reference** > **API integration overview** to check whether the Alibaba Cloud service supports Alibaba Cloud CLI.
        
    -   Run the `aliyun --help` command in [Cloud Shell](https://shell.aliyun.com/) provided by Alibaba Cloud to query a list of Alibaba Cloud services that support Alibaba Cloud CLI.
        

## **Step 1: Install Alibaba Cloud CLI**

You must install Alibaba Cloud CLI before you can use it. Alibaba Cloud CLI supports Windows, Linux, and macOS. When you install Alibaba Cloud CLI, select the installation package based on the operating system of your device. For more information, see the following topics:

-   [Install Alibaba Cloud CLI on Windows](/help/en/cli/install-cli-on-windows)
    
-   [Install Alibaba Cloud CLI on Linux](/help/en/cli/install-cli-on-linux)
    
-   [Install Alibaba Cloud CLI on macOS](/help/en/cli/install-cli-on-macos)
    

You can also use Alibaba Cloud [Cloud Shell](https://shell.aliyun.com/) to debug the commands that you want to run in Alibaba Cloud CLI. For more information about Cloud Shell, see [What is Cloud Shell?](/help/en/cloud-shell/what-is-the-cloud-command-line)

## Step 2: Configure Alibaba Cloud CLI

**Important**

To ensure the security of your account, we recommend that you create a RAM user and obtain the identity credentials of the RAM user. For more information, see [Credential security solutions](/help/en/openapi/accesskey-security-solution).

Before you use Alibaba Cloud CLI, you must specify information, such as identity credentials and a region ID, in Alibaba Cloud CLI. Alibaba Cloud CLI supports various identity credentials. For more information, see the "Credential types" section of the [Configure profiles](/help/en/cli/configure-credentials#30ab0f9c3eovm) topic. In this example, AccessKey credentials are used. Perform the following steps to configure Alibaba Cloud CLI:

1.  Create a RAM user and grant the RAM user the permissions to manage Alibaba Cloud services based on your business requirements. For more information, see [Create a RAM user](/help/en/ram/create-a-ram-user-1#task-187540) and [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user).
    
2.  Create an AccessKey pair for the RAM user and record the `AccessKey ID` and `AccessKey secret` for the configuration of identity credentials. For more information, see the "Create an AccessKey pair for a RAM user" section of the [Create an AccessKey pair](/help/en/ram/user-guide/create-an-accesskey-pair#title-ebf-nrl-l0i) topic.
    
3.  Obtain and record the ID of an available region for the configuration of identity credentials. Alibaba Cloud CLI uses the specified region ID to initiate API calls. For more information about the available regions, see [Regions and zones](/help/en/cloud-migration-guide-for-beginners/latest/regions-and-zones#title-u71-7kb-w8p).
    
    **Note**
    
    When you use Alibaba Cloud CLI, you can use the `--region` option to run a command in a specific region. If you use the option, Alibaba Cloud CLI ignores the region information in the default credential configurations and environment variable settings. For more information, see [Command-line options](/help/en/cli/command-line-options).
    
4.  Use the AccessKey pair of the RAM user to configure AccessKey credentials in the configuration file named `_AkProfile_`. For more information, see the "Configuration examples" section of the [Configure profiles](/help/en/cli/configure-credentials#237984d36ci83) topic.
    

## **Step 3:** Generate a **command**

**Note**

[OpenAPI Explorer](https://api.alibabacloud.com/) allows you to generate all commands of Alibaba Cloud CLI online. We recommend that you use this method to obtain the sample commands that you require. For more information, see [Generate a command](/help/en/cli/sample-commands#fc9b6069afmg0).

In the left-side search box of the Debugging page, search for the API operation that you want to call. On the **Parameters** tab of the API operation, specify the parameters based on the API reference. Click the **CLI Example** tab on the right side of the **Parameters** tab to view the generated sample command that contains the specified parameters.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6131032371/p820225.png)

-   Click the **Run Command**![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9855992271/p820215.png) icon to start [Cloud Shell](/help/en/cloud-shell/what-is-the-cloud-command-line) and debug the command in Cloud Shell.
    
-   Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0395992271/p820218.png) icon to copy the sample command to the clipboard. You can paste the sample command into your shell tool to run the sample command.
    
    -   Pay attention to the formats of parameters when you paste the sample command into your shell tool. For more information about the parameter formats of Alibaba Cloud CLI, see [Parameter formats](/help/en/cli/parameter-format-overview).
        
    -   By default, OpenAPI Explorer adds the `--region` option to the generated CLI command. When you copy the command to your local shell, Alibaba Cloud CLI ignores the region information in the default identity credential configurations and environment variable settings, and preferentially uses the specified region to run the command. You can delete or retain this option based on your business requirements.
        

## **Step 4: Call an API operation**

### **Syntax**

In Alibaba Cloud CLI, you can use the syntax shown in the following code block to run commands. For more information, see [Generate and run CLI commands](/help/en/cli/sample-commands#1640a5c2c077i).

```
aliyun <command> <subcommand> [options and parameters]
```

### **Command options**

When you use Alibaba Cloud CLI, you can specify command options to change the behaviors of commands or implement additional features of commands. The following command options are frequently used:

-   `--profile _<profileName>_`: You can use the `--profile` option and the `_profileName_` parameter to specify a configuration profile. After you specify a valid configuration profile, Alibaba Cloud CLI ignores the information in the default credential configurations and environment variable settings and preferentially uses the configurations that you specify to run commands.
    
-   `--help`: You can use the `--help` option to obtain the help information about a command. For more information, see [Use the help command](/help/en/cli/use-the-help-command).
    

For more information, see [Command-line options](/help/en/cli/command-line-options).

### **Run the command**

After the sample command is generated, copy the sample command and paste it into a shell tool to run the command. For example, run the following command to call the `CreateInstance` operation of Elastic Compute Service to create a pay-as-you-go ECS instance:

```
aliyun ecs CreateInstance
    --InstanceName myvm1
    --ImageId centos_7_03_64_40G_alibase_20170625.vhd
    --InstanceType ecs.n4.small
    --SecurityGroupId sg-xxxxxx123
    --VSwitchId vsw-xxxxxx456
    --InternetChargeType PayByTraffic
    --Password xxx
```

For more information about how to run commands, see the "Example" section of the [Generate and run CLI commands](/help/en/cli/sample-commands#e0a41cfdf4zop) topic or the **CLI integration example** topic of each Alibaba Cloud service.

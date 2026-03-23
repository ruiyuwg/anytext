Alibaba Cloud CLI is a general-purpose command-line tool that is developed based on OpenAPI. You can use Alibaba Cloud CLI to implement automatic management and maintenance of ENS resources. This topic describes how to use Alibaba Cloud CLI to call ENS API operations.

## Before you begin

Get yourself familiar with Alibaba Cloud CLI. For more information, see [What is Alibaba Cloud CLI?](/help/en/cli/what-is-alibaba-cloud-cli)

## Install Alibaba Cloud CLI

You must install Alibaba Cloud CLI before you can use Alibaba Cloud CLI. You can install Alibaba Cloud CLI in the Windows, Linux, and macOS operating systems. You must select an installation package of Alibaba Cloud CLI based on the operating system of your device. For more information, see the following topics:

-   Windows operating system: [Windows](/help/en/cli/install-cli-on-windows).
    
-   Linux operating system: [Linux](/help/en/cli/install-cli-on-linux).
    
-   macOS operating system: [macOS](/help/en/cli/install-cli-on-macos).
    

You can also use [Cloud Shell](https://shell.aliyun.com/) provided by Alibaba Cloud to debug the commands that you want to run in Alibaba Cloud CLI. For more information about Cloud Shell, see [What is Cloud Shell?](/help/en/cloud-shell/what-is-the-cloud-command-line)

## Configure Alibaba Cloud CLI

**Important**

An Alibaba Cloud account has the permissions to manage and access the APIs of all Alibaba Cloud services. If you use an Alibaba Cloud account to call API operations, security risks may arise. We recommend that you create and use a Resource Access Management (RAM) user to call API operations or perform routine O&M operations.

Before you use Alibaba Cloud CLI, you must configure information such as identity credentials and region ID in Alibaba Cloud CLI. Alibaba Cloud CLI supports various identity credentials. For more information, see [Credential types](/help/en/cli/configure-credentials#30ab0f9c3eovm). In this example, AccessKey credentials are used.

1.  Create a RAM user and grant the RAM user the required permissions. For more information, see [Create a RAM user](/help/en/ram/create-a-ram-user-1#task-187540) and [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user).
    
    **Important**
    
    In this example, you need to attach the `AliyunENSFullAccess` policy to the RAM user, which grants the user full access to ENS instances, such as querying and managing instances. You can use the `AliyunENSReadOnlyAccess` policy or create custom policies. For more information, see [Custom policies for ENS](/help/en/ens/security-and-compliance/edge-node-service-ens-custom-permission-policy-reference).
    
2.  Create an AccessKey pair for the RAM user and record the `AccessKey ID` and `AccessKey secret` for the configuration of identity credentials. For more information, see [Create an AccessKey pair for a RAM user](/help/en/ram/user-guide/create-an-accesskey-pair#title-ebf-nrl-l0i).
    
3.  Obtain and record the ID of an available region for the configuration of identity credentials. Alibaba Cloud CLI uses the specified region ID to initiate API calls. For more information about the available regions, see [Endpoints](/help/en/ens/developer-reference/api-ens-2017-11-10-endpoint).
    
    **Note**
    
    When you use Alibaba Cloud CLI, you can use the `--region` option to run a command in a specific region. If you use the option, Alibaba Cloud CLI ignores the region information in the default credential configurations and environment variable settings. For more information, see [Command line options for API calls](/help/en/cli/command-line-options).
    
4.  Use the AccessKey pair of the RAM user to configure identity credentials in the configuration file named `_AkProfile_`. For more information, see [Configuration examples](/help/en/cli/configure-credentials#237984d36ci83).
    

## Generate a CLI command

1.  Go to the [Debugging](https://api.alibabacloud.com/api/Ens/2017-11-10/DeleteStorageVolume?RegionId=cn-shanghai) page of the ENS API.
    
2.  In the **left-side search box** of the page that appears, search for the operation that you want to call. On the **Parameters** tab, enter parameter values based on the API document of the API operation. Then, click the **CLI Example** tab on the right side of the **Parameters** tab to generate an example that contains configured parameters.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7181566271/p841005.png)
    
    -   Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6713466271/p833228.png) icon. You are directed to [Cloud Shell](https://shell.aliyun.com/). You can debug the command in Cloud Shell.
        
    -   Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6713466271/p833229.png) icon to copy the CLI command to the clipboard and paste the command to the local shell.
        
        -   When you paste the sample command into your shell for debugging, take note of the formats of parameters. For more information about the parameter formats of Alibaba Cloud CLI, see [Parameter formats](/help/en/cli/parameter-format-overview).
            
        -   By default, OpenAPI Explorer adds the `--region` option to the generated CLI command. When you copy the command to your shell, Alibaba Cloud CLI ignores the region information in the default identity credential configurations and environment variable settings, and preferentially runs the command in the specified region. You can delete or retain the option based on your business requirements.
            

## Call an API operation

### Syntax

In Alibaba Cloud CLI, you can use the following syntax to run commands. For more information, see [Syntax](/help/en/cli/sample-commands#1640a5c2c077i).

```
aliyun <command> <subcommand> [options and parameters]
```

### Command options

When you use Alibaba Cloud CLI, you can specify command options to change the behaviors of commands or implement the extended features of commands. In most cases, the following command options are used:

-   `--profile_<profileName>_`: You can use the `--profile` option and the `_profileName_` parameter to specify a configuration profile. After you specify a valid configuration profile, Alibaba Cloud CLI ignores the information in default credential configurations and environment variable settings and preferentially uses the configurations that you specify to run commands.
    
-   `--help`: You can use the `--help` option to obtain the help information about a command. For more information, see [Use the help command](/help/en/cli/use-the-help-command).
    

For more information, see [Command line options for API calls](/help/en/cli/command-line-options).

### Call example

The following example shows how to use Alibaba Cloud CLI to call the `RebootInstance` operation of ENS to restart an instance. For more information about the `RebootInstance` operation, see [RebootInstance](/help/en/ens/developer-reference/api-ens-2017-11-10-rebootinstance).

1.  Run the following command:
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7181566271/p841025.png)
    
2.  View the command output.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7181566271/p841024.png)
    

**Note**

If an error is returned after you call an API operation of ENS, check whether the input parameters and values are valid based on the error code.

You can also use [Alibaba Cloud OpenAPI Diagnostics](https://next.api.alibabacloud.com/troubleshoot) to perform self-service diagnostics based on the returned request ID or SDK error information.

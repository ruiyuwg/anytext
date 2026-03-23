Creates or manages ossutil configuration files. Configuration files store access credentials and endpoint settings that ossutil uses to authenticate and connect to OSS.

The `config` command family includes five sub-commands:

**Sub-command**

**Mode**

**Purpose**

`ossutil config`

Interactive

Run the setup wizard to create a configuration file

`ossutil config set`

Non-interactive

Set or update individual configuration values

`ossutil config get`

Non-interactive

Read individual configuration values

`ossutil config list-profiles`

Non-interactive

List all profiles in a configuration file

`ossutil config credential`

Interactive

Configure access credentials with optional encryption

## Prerequisites

Before you begin, ensure that you have:

-   An AccessKey pair (AccessKey ID and AccessKey secret) for a RAM user. To create one, see [Create an AccessKey pair for a RAM user](/help/en/ram/create-an-accesskey-pair-1#section-rjh-18m-7kp).
    
-   (Optional) The region ID of the OSS bucket you want to access. Default: `cn-hangzhou`. For other region IDs, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints).
    

> **Tip:** To quickly create an AccessKey pair for a RAM user with full OSS access, use the [Resource Orchestration Service (ROS) wizard for template-based stack creation](https://ros.console.alibabacloud.com/cn-hangzhou/stacks/create?templateUrl=https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/zh-CN/20241114/itgrlo/createossadmin.yaml&step=1&hideTemplateSelector=false): select **I confirm that Alibaba Cloud ROS may create RAM resources** in the Security Confirmation section, then click **Create**. ![Security Confirmation section](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1631044371/p873205.png) After the stack is created, copy the AccessKey pair from the **Outputs** tab. ![Outputs tab showing the AccessKey pair](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6291845471/p872601.png)

## Create a configuration file

Run the interactive wizard to create a configuration file with your credentials and endpoint settings.

1.  Start the configuration wizard:
    
    ```
       ossutil config
    ```
    
2.  Enter the path for the configuration file, or press Enter to use the default path. The default path is `/root/.ossutilconfig` on Linux and `C:\Users\issuser\.ossutilconfig` on Windows.
    
    ```
       Please enter the config file name,the file name can include path(default /root/.ossutilconfig, carriage return will use the default file. If you specified this option to other file, you should specify --config-file option to the file when you use other commands):
    ```
    
3.  Enter your AccessKey ID:
    
    ```
       Please enter Access Key ID [****************id]:LTAI****************
    ```
    
4.  Enter your AccessKey secret:
    
    ```
       Please enter Access Key Secret [****************sk]:R6vg*********************
    ```
    
5.  Enter the region ID of your OSS bucket. Press Enter to use the default (`cn-hangzhou`):
    
    ```
       Please enter Region [cn-hangzhou]: cn-hangzhou
    ```
    
6.  Enter the endpoint for the region, or press Enter to skip. If you skip this step, ossutil uses the public endpoint derived from the region ID. For `cn-hangzhou`, the default public endpoint is `https://oss-cn-hangzhou.aliyuncs.com`. To access OSS from another Alibaba Cloud service in the same region, use the internal endpoint instead (for example, `https://oss-cn-hangzhou-internal.aliyuncs.com`):
    
    ```
       Please enter Endpoint (optional, use public endpoint by default) [None]: https://oss-cn-hangzhou-internal.aliyuncs.com
    ```
    

> **Note:** Values shown in brackets at each prompt are the current values. Press Enter to keep an existing value, or type a new value to replace it.

### Parameters

**Parameter**

**Required**

**Description**

`accessKeyID`

Yes

The AccessKey ID of the RAM user.

`accessKeySecret`

Yes

The AccessKey secret of the RAM user.

`Region`

Yes

The ID of the region where your OSS bucket is located. Default: `cn-hangzhou`. For all region IDs, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints).

`endpoint`

No

The endpoint for the region. If omitted, ossutil derives the public endpoint from the `Region` value. To use an internal endpoint, specify it explicitly — for example, `https://oss-cn-hangzhou-internal.aliyuncs.com` for the China (Hangzhou) region.

## Set and get individual configuration values

### Set a value

Use `ossutil config set` to create or update a single configuration value without running the full wizard:

```
ossutil config set <key> <value> --config-file <file> --profile <profile>
```

The following example sets the `region` parameter in the `dev` profile of the `myconfig` file:

```
ossutil config set region cn-hangzhou --config-file myconfig --profile dev
```

To delete a configuration value, set it to an empty string:

```
ossutil config set region "" --config-file myconfig --profile dev
```

Alternatively, open the configuration file in a text editor and delete the entry manually.

### Get a value

Use `ossutil config get` to read a single configuration value:

```
ossutil config get <key> --config-file <file> --profile <profile>
```

The following example reads the `region` parameter from the `dev` profile of the `myconfig` file:

```
ossutil config get region --config-file myconfig --profile dev
```

### Parameters

**Parameter**

**Description**

`--config-file`

Path to the configuration file.

`--profile`

Profile section within the configuration file.

## List all profiles

List all profiles in a configuration file:

```
ossutil config list-profiles
```

## Configure access credentials

Use `ossutil config credential` to configure access credentials interactively. The wizard prompts whether to encrypt the AccessKey ID, AccessKey secret, and token before storing them — select `y` to protect credentials at rest.

```
ossutil config credential
```

The wizard prompts for:

-   The configuration file path (press Enter to use the default)
    
-   The profile name
    
-   The authentication mode: `RamRoleArn`, `EcsRamRole`, `Process`, `Uri`, `OIDCRoleArn`, `AK`, or `StsToken`
    
-   Whether to encrypt the AccessKey ID and AccessKey secret: `Do you need to encryt access key id and access key secret (y or N)`
    
-   The AccessKey ID and AccessKey secret
    

Example session on Windows:

```
ossutil config credential
The command creates a config file and stores configuration settings and credentials.

Please enter the config file name,the file name can include path(default "C:\Users\issuser\.ossutilconfig", carriage return will use the default file. If you specified this option to other file, you should specify --config-file option to the file when you use other commands):

No config file entered, will use the default config file "C:\Users\issuser\.ossutilconfig"For the following settings, carriage return means skip the configuration.
Please enter profile:
Please enter authenticate mode, supports RamRoleArn,EcsRamRole,Process,Uri,OIDCRoleArn,AK,StsToken:
Do you need to encryt access key id and access key secret (y or N)
Please enter Access Key ID [None]:
Please enter Access Key Secret [None]:
```

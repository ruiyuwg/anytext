CloudSSO is integrated with Alibaba Cloud CLI. You can log on to the CloudSSO user portal by using browsers or Alibaba Cloud CLI. If you use Alibaba Cloud CLI to access CloudSSO, you need to select an account in a resource directory and the required access configuration to access Alibaba Cloud resources. This topic describes how to use Alibaba Cloud CLI to access CloudSSO.

## Background information

Alibaba Cloud CLI version 3.0.271 and later introduce a new CloudSSO credential type that streamlines the configuration process. This is the recommended method. The legacy method for [older versions](#f1465ccb07ty3) is still supported. You can check your current CLI version by running the `aliyun version` command.

## **For** Alibaba Cloud CLI V3.0.271 and later

This method provides both an interactive and a non-interactive way to configure your CloudSSO credential. The interactive mode is ideal for getting started quickly, while the non-interactive mode is better suited for automation and scripting.

## Interactive mode

1.  Run the `aliyun configure` command to start the configuration. You can use `--profile` to create multiple named profiles for different accounts or access configurations.
    
2.  ```
    aliyun configure --profile SSOProfile --mode CloudSSO
    ```
    
3.  When prompted, enter your user logon URL.
    
    ```
    aliyun configure --profile SSOProfile --mode CloudSSO
    CloudSSO Sign In Url []: https://signin-******.alibabacloudsso.com/device/login
    ```
    
4.  A browser window opens automatically. Follow the prompts to complete the logon process.
    
    If a browser window does not open, copy the `SignIn url` and `User code` from the CLI output and complete the process manually.
    
    Example prompt:
    
    ```
    If the browser does not open automatically, use the following URL to complete the login process:
    
    SignIn url: https://signin-****.alibabacloudsso.com/device/code
    User code: *********
    ```
    
5.  After a successful logon, the CLI lists the Resource Directory accounts you can access. Select the account you want to use.
    
    ```
    Now you can login to your account with SSO configuration in the browser.
    You have successfully logged in.
    Please choose an account:
    1. <RD Management Account>
    2. AccountName
    Please input the account number: 1
    ```
    
6.  Next, select one of the available access configurations.
    
    ```
    Please choose an access configuration:
    1. AccessConfiguration1
    2. AccessConfiguration2
    Please input the access configuration number: 2
    ```
    
7.  When prompted, set a default region.
    
    ```
    Default Region Id []: cn-hangzhou
    ```
    
8.  Upon successful configuration, a `Configure Done` message and a welcome banner are displayed.
    

## Non-interactive mode

You can run the `aliyun configure set` command with the following options to configure a CloudSSO credential non-interactively.

**Option**

**Description**

**Example**

profile

The name of the CloudSSO credential. It can contain letters, digits, and the following special characters: \_ / + = . @ -.

SSOProfile

mode

The credential type. Must be CloudSSO for this method.

CloudSSO

cloud-sso-sign-in-url

The user logon URL. You can find this on the **Overview** page of the [CloudSSO console](https://cloudsso.console.alibabacloud.com/).

https://signin-\*\*\*\*\*\*.alibabacloudsso.com/device/login

cloud-sso-account-id

The ID of the target Resource Directory account. You can find this on the **Multi-account Permission Configuration** page of the [CloudSSO console](https://cloudsso.console.alibabacloud.com/).

012345678910\*\*\*\*

cloud-sso-access-config

The ID of the access configuration. You can find this on the **Access Configuration** page of the [CloudSSO console](https://cloudsso.console.alibabacloud.com/).

ac-012345678910abcde\*\*\*\*

region

The default [region](/help/en/cloud-migration-guide-for-beginners/latest/regions-and-zones#title-0cm-3b3-uhz) to use for CLI requests. Some cloud services are region-specific. For best results, set the default region to the one where your resources are located.

cn-hangzhou

Example command:

Bash

```
aliyun configure set \
  --profile SSOProfile \
  --mode CloudSSO \
  --cloud-sso-sign-in-url "https://signin-******.alibabacloudsso.com/device/login" \
  --cloud-sso-account-id "012345678910****" \
  --cloud-sso-access-config "ac-012345678910abcde****" \ 
  --region "cn-hangzhou"
```

PowerShell

```
aliyun configure set `
  --profile SSOProfile `
  --mode CloudSSO `
  --cloud-sso-sign-in-url "https://signin-******.alibabacloudsso.com/device/login" `
  --cloud-sso-account-id "012345678910****" `
  --cloud-sso-access-config "ac-012345678910abcde****" `
  --region "cn-hangzhou"
```

**Note**

After configuring a CloudSSO credential non-interactively, you must perform a one-time interactive logon to authorize the CLI. Run `aliyun configure --profile <profileName>` and complete the browser-based logon.

## **For** Alibaba Cloud CLI ealier than V3.0.271

Procedure

## Step 1: Install CLIs

You must install Alibaba Cloud CLI and CloudSSO CLI:

-   Install Alibaba Cloud CLI
    
    -   [Windows](/help/en/cli/install-cli-on-windows)
        
    -   [Linux](/help/en/cli/install-cli-on-linux)
        
    -   [macOS](/help/en/cli/install-cli-on-macos)
        
    
-   Install CloudSSO CLI
    
    1.  Install Node.js.
        
        Install the package management tool [npm](https://www.npmjs.com) when you install Node.js.
        
        **Note**
        
        You must install Node.js 7.6.0 or later. We recommend that you install the latest long-term support (LTS) version. For more information, visit [LTS](https://nodejs.org).
        
    2.  Run the following command to install the CloudSSO CLI:
        
        ```
        npm i @alicloud/sso-cli -g
        ```
        
    
    For more information, see [CloudSSO CLI](https://github.com/aliyun/alibabacloud-sso-cli).
    

## Step 2: Configure information about access to CloudSSO

1.  Run the following command to configure information about access to CloudSSO:
    
    ```
    acs-sso configure
    ```
    
2.  Enter `signinUrl`, which indicates the URL that is used to log on to the CloudSSO user portal.
    
    **Note**
    
    To obtain the `signinUrl`, log on to the [CloudSSO console](https://cloudsso.console.alibabacloud.com), go to the **Overview** page, and then find the **User Logon URL** section on the right.
    
    Sample request:
    
    ```
    acs-sso configure
    ? please input 'signinUrl': https://signin-******.alibabacloudsso.com/device/login
    ```
    
    Sample success response:
    
    ```
    configuration done!
    ```
    

## Step 3: Use CloudSSO users to log on to Alibaba Cloud

The following list provides the commonly used commands:

-   Default logon
    
    1.  Run the following command:
        
        ```
        acs-sso login
        ```
        
    2.  In the browser that appears, log on to the user portal. After you log on to the user portal, close the browser.
        
        If no browsers appear, copy the logon URL and user code that are provided in the CLI to log on to the user portal.
        
        Example:
        
        ```
        If your default browser is not opened automatically, please use the following URL to finish the signin process.
        Signin URL: https://signin-****.alibabacloudsso.com/device/code
        User Code: *********
        ```
        
    3.  If the current user is assigned access permissions on multiple accounts in your resource directory, the CLI reminds you to select an account and the access configuration for the account. Then, the CLI generates the AccessKey pair for the account.
        
        Example:
        
        ```
        You have logged in.
        used account: test-account(191585963325****)
        used access configuration: TestAC(ac-x08xz11covd3cyzd****)
        {
          "mode": "StsToken",
          "access_key_id": "STS.****",
          "access_key_secret": "****",
          "sts_token": "****"
        }
        ```
        
    
    After you log on to the user portal, the selected account and access configuration are cached for the profile option. The cached account and access configuration are used for the next logon.
    
-   Logon by using logon profiles
    
    ```
    acs-sso login --profile sso
    ```
    
    If you want to configure logon information for multiple accounts in your resource directory and access configurations at a time, you can specify a logon profile to use a specific account and its access configuration. In this case, logon profiles are used to distinguish multiple accounts in your resource directory and their access configurations. You can use the `--profile` option to specify different logon profiles. The preceding command specifies that the logon profile is sso.
    
    If you do not use the `--profile` option to specify the logon profile, the logon profile named default is used.
    
-   Obtain logon configurations.
    
    ```
    acs-sso profile --list
    ```
    
-   Delete a specific logon configuration.
    
    Run the following command to delete the default logon configuration:
    
    ```
    acs-sso profile --delete --profile default
    ```
    
    Run the following command to delete the logon configuration named sso:
    
    ```
    acs-sso profile --delete --profile sso
    ```
    
-   Configure the mode of the output.
    
    You can configure one of the following modes based on your business requirements:
    
    -   External process mode: If you use --mode External in Alibaba Cloud CLI, you can use this mode. This mode is the default value. For more information, see [Use an external program to get credentials](https://github.com/aliyun/aliyun-cli#use-an-external-program-to-get-credentials).
        
        Example:
        
        ```
        {
          "mode": "StsToken",
          "access_key_id": "STS.NUyPeEoab****",
          "access_key_secret": "GBubpmh****",
          "sts_token": "CAIS****"
        }
        ```
        
    -   Environment variable mode: You can use this mode by configuring the `--env` parameter. Example: `acs-sso login --profile user1 --env`.
        
        Example:
        
        ```
        export ALIBABACLOUD_ACCESS_KEY_ID=STS.NUyPeEoab****
        export ALIBABACLOUD_ACCESS_KEY_SECRET=GBubpmh****
        export SECURITY_TOKEN=CAIS****
        ```
        
        Environment variables can be used together with Alibaba Cloud tools such as Terraform. Example: `` `acs-sso login --profile user1 --env` && terraform plan ``.
        
        Environment variables can be used together with Alibaba Cloud CLI. Example: `` `acs-sso login --profile user1 --env` && aliyun ecs DescribeRegions ``.
        

## Step 4: Use Alibaba Cloud CLI to access CloudSSO

Sample request:

```
aliyun configure --mode External --profile sso
Configuring profile 'sso' in 'External' authenticate mode...
Process Command []: acs-sso login --profile sso
Default Region Id []: cn-shanghai
Default Output Format [json]: json (Only support json)
Default Language [zh|en] en: 
Saving profile[sso] ...Done.
```

`acs-sso login --profile` sso in `Process Command` specifies that the logon profile is `sso`. We recommend that you specify the same profile for both Alibaba Cloud CLI and CloudSSO CLI. This way, if multiple logon profiles are configured, you can configure CLI credentials multiple times and match the CLI credentials with different logon profiles.

Sample success response:

```
Configure Done!!!
..............888888888888888888888 ........=8888888888888888888D=..............
...........88888888888888888888888 ..........D8888888888888888888888I...........
.........,8888888888888ZI: ...........................=Z88D8888888888D..........
.........+88888888 ..........................................88888888D..........
.........+88888888 .......Welcome to use Alibaba Cloud.......O8888888D..........
.........+88888888 ............. ************* ..............O8888888D..........
.........+88888888 .... Command Line Interface(Reloaded) ....O8888888D..........
.........+88888888...........................................88888888D..........
..........D888888888888DO+. ..........................?ND888888888888D..........
...........O8888888888888888888888...........D8888888888888888888888=...........
............ .:D8888888888888888888.........78888888888888888888O ..............
```

Run the following command to check whether Alibaba Cloud CLI is available:

```
aliyun sts GetCallerIdentity --profile sso
```

Function Compute Command Line Interface (fcli) is a command line tool provided by Alibaba Cloud Function Compute to help you manage resources in Function Compute. If you use fcli for the first time, you must download and configure it.

## Download fcli

Download and decompress the fcli package. For more information, see [aliyun/fcli](https://github.com/aliyun/fcli/releases).

## Configure fcli

If you use fcli for the first time, you must configure it. Function Compute allows you to configure fcli in the following methods:

### **Method 1**

Run the `fcli shell` command to configure fcli.

1.  In the folder where the fcli executable file is located, run the `fcli shell` command.
    
2.  Enter the Alibaba Cloud account ID, AccessKey ID, and AccessKey secret, and select a region.
    
    You can obtain your Alibaba Cloud account ID from [Account Management](https://account-console.alibabacloud.com/) and the AccessKey ID and AccessKey secret from [User Management](https://usercenter2-intl.console.alibabacloud.com/).
    
    ```
    ? Alibaba Cloud Account ID <your account ID>
    ? Alibaba Cloud Access Key ID <your AccessKey ID>
    ? Alibaba Cloud Access Key Secret <your Accesskey Secret>
    ? Default region name cn-shanghai
    Store the configuration in: .fcli
    Welcome to the function compute world. Have fun!
    >>>          
    ```
    
    Then, the config.yaml file is generated in the folder where the fcli executable file is located.
    

### Method 2

Run the `fcli config` command to configure fcli.

1.  In the folder where the fcli executable file is located, run the `fcli config` command.
    
2.  Enter the Alibaba Cloud account ID, AccessKey ID, and AccessKey secret, and select a region.
    
    You can obtain your Alibaba Cloud account ID from [Account Management](https://account-console.alibabacloud.com/) and the AccessKey ID and AccessKey secret from [User Management](https://usercenter2-intl.console.alibabacloud.com/).
    
    ```
    ? Alibaba Cloud Account ID <your account ID>
    ? Alibaba Cloud Access Key ID <your AccessKey ID>
    ? Alibaba Cloud Access Key Secret <your Accesskey Secret>
    ? Default region name cn-shanghai
    Store the configuration in: .fcli         
    ```
    
    Then, the config.yaml file is generated in the folder where the fcli executable file is located.
    

### Method 3

Configure the YAML file.

1.  Open the ~/.fcli/config.yaml file.
    
2.  Set the parameters as needed and save the configurations.
    
    ```
    endpoint: https://<account ID>.<region ID>.fc.aliyuncs.com
    api_version: 2016-08-15
    access_key_id: <your AccessKeyID>
    access_key_secret: <your AccessKeySecret>
    security_token: ""
    user_agent: fcli-0.1
    debug: false
    timeout: 60
    sls_endpoint: <region ID>.log.aliyuncs.com
    ```
    
    **Note**
    
    The account corresponding to the account ID, AccessKey ID, and AccessKey secret must be an Alibaba Cloud account.
    
    You can obtain your Alibaba Cloud account ID from [Account Management](https://account-console.alibabacloud.com/) and the AccessKey ID and AccessKey secret from [User Management](https://usercenter2-intl.console.alibabacloud.com/).
    

## fcli command set

Function Compute provides a set of fcli commands for developers. Developers can also run the `fcli --help` command in the folder where the executable file is located to query command details.

-   [Common commands](/help/en/functioncompute/fc-2-0/common-commands#concept-2555475)
    
    -   [Switch directories (cd)](/help/en/functioncompute/fc-2-0/common-commands#section-yn4-esm-aio)
        
    -   [List files in the current directory (ls)](/help/en/functioncompute/fc-2-0/common-commands#section-m2t-xkm-gyc)
        
    -   [View the directory of the function (pwd)](/help/en/functioncompute/fc-2-0/common-commands#section-3k6-pbo-i9x)
        
    -   [View resource details (info)](/help/en/functioncompute/fc-2-0/common-commands#section-9tp-yjp-gmy)
        
    -   [Configure fcli (config)](/help/en/functioncompute/fc-2-0/common-commands#section-i7i-1nn-ci3)
        
    -   [Delete resources (rm)](/help/en/functioncompute/fc-2-0/common-commands#section-bh0-a3h-cc1)
        
    -   [Sandbox (sbox)](/help/en/functioncompute/fc-2-0/common-commands#section-rnk-5j9-8tc)
        
    -   [help](/help/en/functioncompute/fc-2-0/common-commands#section-9jw-uu0-ikf)
        
    -   [clear](/help/en/functioncompute/fc-2-0/common-commands#section-8tu-xf9-ult)
        
    -   [Exit fcli (exit)](/help/en/functioncompute/fc-2-0/common-commands#section-0g3-vke-n65)
        
-   [Service-related commands](/help/en/functioncompute/fc-2-0/service-related-commands-1#concept-2555671)
    
    -   [Create a service (mks)](/help/en/functioncompute/fc-2-0/service-related-commands-1#section-hit-25l-tc5)
        
    -   [Update a service (ups)](/help/en/functioncompute/fc-2-0/service-related-commands-1#section-dzw-upn-fwb)
        
-   [Function-related commands](/help/en/functioncompute/fc-2-0/function-related-commands-1#concept-2555682)
    
    -   [Create a function (mkf)](/help/en/functioncompute/fc-2-0/function-related-commands-1#section-4qw-7tb-r47)
        
    -   [Update a function (upf)](/help/en/functioncompute/fc-2-0/function-related-commands-1#section-txd-wi6-0rs)
        
    -   [Execute a function (invk)](/help/en/functioncompute/fc-2-0/function-related-commands-1#section-hxt-an3-0li)
        
-   [Trigger-related commands](/help/en/functioncompute/fc-2-0/trigger-related-commands-1#concept-2555910)
    
    -   [Create a trigger (mkt)](/help/en/functioncompute/fc-2-0/trigger-related-commands-1#section-yy1-862-h6b)
        
    -   [Update a trigger (upt)](/help/en/functioncompute/fc-2-0/trigger-related-commands-1#section-r84-2lc-vp1)
        
-   [Log-related commands](/help/en/functioncompute/log-related-commands#concept-2568578)
    
    -   [Create a log project and a Logstore (mkl)](/help/en/functioncompute/log-related-commands#section-i4x-54y-k14)
        
    -   [View logs (logs)](/help/en/functioncompute/log-related-commands#section-gxo-qyz-y8k)
        
-   [Role authorization commands](/help/en/functioncompute/fc-2-0/role-authorization-commands#concept-2568803)
    
    -   [Create RAM policies (mkrp)](/help/en/functioncompute/fc-2-0/role-authorization-commands#section-r1b-nls-qub)
        
    -   [Create a role (mksr)](/help/en/functioncompute/fc-2-0/role-authorization-commands#section-ji9-bpy-mks)
        
    -   [Attach a RAM policy to a role (attach)](/help/en/functioncompute/fc-2-0/role-authorization-commands#section-pph-m1d-rga)
        
    -   [Detach a permission policy from a role (detach)](/help/en/functioncompute/fc-2-0/role-authorization-commands#section-ljo-q43-65p)
        
    -   [Grant a permission to a service in Function Compute (grant)](/help/en/functioncompute/fc-2-0/role-authorization-commands#section-mro-pza-0v2)

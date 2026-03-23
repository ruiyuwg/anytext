Alibaba Cloud CLI lets you save multiple credential configurations. You can use the `configure` command and its subcommands to manage these configurations. This topic describes the command syntax and provides usage examples.

## Create a profile in **interactive mode**

Run the `aliyun configure` command to create a profile in interactive mode.

### **Syntax**

```
aliyun configure [--mode <AUTHENTICATE_MODE>] [--profile <PROFILE_NAME>]
```

-   `AUTHENTICATE_MODE`: Specifies the credential type to configure. If you do not specify this parameter, an AccessKey (AK) profile is created by default.
    
-   `PROFILE_NAME`: Specifies the profile name. If you do not specify this parameter, the current profile is modified. If the specified profile does not exist, a new profile is created.
    

### **Example**

1.  Run the following command to configure the `_AkProfile_` profile of the **AK** credential type in interactive mode:
    
    ```
    aliyun configure --mode AK --profile AkProfile
    ```
    
2.  Interactive process:
    
    ```
    Configuring profile 'AkProfile' in 'AK' authenticate mode...
    Access Key Id []: "0wNEpMMlzy7s****"
    Access Key Secret []: <YOUR_ACCESS_KEY_SECRET>
    Default Region Id []: cn-hangzhou
    Default Output Format [json]: json (Only support json)
    Default Language [zh|en] en: en
    Saving profile[profile] ...Done.
    ```
    

## Create or modify a profile in non-interactive mode

Run the `aliyun configure set` command to create or modify a profile in non-interactive mode.

**Note**

After a profile is modified, Alibaba Cloud CLI switches to the modified profile.

### **Syntax**

```
aliyun configure set [--mode <AUTHENTICATE_MODE>] [--profile <PROFILE_NAME>] [--settingName <settingValue>...]
```

-   `AUTHENTICATE_MODE`: Specifies the credential type. If you do not specify this parameter, an AK profile is created by default.
    
-   `PROFILE_NAME`: Specifies the profile name. If you do not specify this parameter and the `ALIBABA_CLOUD_PROFILE` environment variable is not configured, the current profile is modified. If the specified profile does not exist, a new profile is created.
    
-   `settingName`: the profile options that you want to configure. Configure the required options for the profile. Otherwise, the profile fails to be created. For more information, see [Configure credentials](/help/en/cli/configure-credentials#30ab0f9c3eovm).
    
    List of modifiable settings
    
    **Option**
    
    **Description**
    
    **Example**
    
    \--region
    
    The ID of the default region.
    
    cn-hangzhou
    
    \--language
    
    The language of the help information.
    
    -   Chinese: `zh`
        
    -   English: `en`
        
    
    zh
    
    \--read-timeout
    
    The I/O timeout period. Unit: seconds.
    
    10
    
    \--connect-timeout
    
    The connection timeout in seconds.
    
    10
    
    \--retry-count
    
    The maximum number of retries.
    
    5
    
    \--expired-seconds
    
    The validity period of the credential.
    
    900
    
    \--access-key-id
    
    The AccessKey ID of the current Alibaba Cloud account or Resource Access Management (RAM) user.
    
    yourAccessKeyID
    
    \--access-key-secret
    
    The AccessKey secret of the Alibaba Cloud account or RAM user.
    
    yourAccessKeySecret
    
    \--sts-token
    
    The security token.
    
    yourSecurityToken
    
    \--sts-region
    
    The region where the call is initiated to obtain the Security Token Service (STS) token.
    
    cn-hangzhou
    
    \--ram-role-name
    
    The name of the RAM role.
    
    ECSAdmin
    
    \--ram-role-arn
    
    The Alibaba Cloud Resource Name (ARN) of the RAM role.
    
    acs:ram::012345678910\*\*\*\*:role/Alice
    
    \--role-session-name
    
    The name of the role session.
    
    alice
    
    \--source-profile
    
    The name of the source profile.
    
    RamRoleArnProfile
    
    \--process-command
    
    The command for running external programs.
    
    acs-sso login --profile sso
    
    \--oidc-provider-arn
    
    The ARN of the OpenID Connect (OIDC) provider.
    
    acs:ram::012345678910\*\*\*\*:oidc-provider/TestOidcIdp
    
    \--oidc-token-file
    
    The file path of the OIDC token.
    
    /path/to/oidctoken
    
    \--cloud-sso-sign-in-url
    
    The logon address of the CloudSSO user.
    
    https://signin-\*\*\*\*\*\*.alibabacloudsso.com/device/login
    
    \--cloud-sso-access-config
    
    The profile ID of CloudSSO.
    
    ac-012345678910abcde\*\*\*\*
    
    \--cloud-sso-account-id
    
    The UID of the Alibaba Cloud account that is used to log on to CloudSSO.
    
    012345678910\*\*\*\*
    
    \--oauth-site-type
    
    The site type for OAuth logon.
    
    -   China site (aliyun.com): `CN`
        
    -   International site (alibabacloud.com): `INTL`
        
    
    CN
    

### **Example 1: Create a file in non-interactive mode**

1.  Run the following command to configure the `_AkProfile_` profile of the **AK** credential type in non-interactive mode_:_
    
    ```
    aliyun configure set \
      --access-key-id <yourAccessKeyID> \
      --access-key-secret <yourAccessKeySecret> \
      --region cn-hangzhou \
      --profile AkProfile \
      --mode AK \
      --language en
    ```
    
2.  Run the `aliyun configure list` command. If you receive the following output, the `_AkProfile_` profile is created:
    
    ```
    Profile           | Credential            | Valid   | Region           | Language
    ---------         | ------------------    | ------- | ---------------- | --------
    default           | AK:******             | Valid   | cn-beijing       | zh
    AkProfile *       | AK:******             | Valid   | cn-hangzhou      | en
    ```
    

### **Example 2: Modify a profile**

1.  Run the `aliyun configure get region` command. The region ID in the current profile is returned.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2397903471/p927026.png)
    
2.  Run the following command to replace the region ID in the profile with `cn-shanghai`:
    
    ```
    aliyun configure set --region cn-shanghai
    ```
    
3.  Run the `aliyun configure get region` again to check whether the region ID is updated.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2397903471/p927028.png)
    

## Query a list of profiles

Run the `aliyun configure list` command to query a list of profiles. You can view the summary of all profiles on the list.

### **Example**

1.  Run the following command to query a list of profiles:
    
    ```
    aliyun configure list
    ```
    
2.  The following list of profiles is returned:
    
    The profile list contains the summary of each profile, including the profile name, profile identifier, some credential information, credential validity period, default region ID, and language of the help information. Alibaba Cloud CLI uses an asterisk (`*`) on the right side of the profile name to identify a profile.
    
    ```
    Profile           | Credential            | Valid   | Region           | Language
    ---------         | ------------------    | ------- | ---------------- | --------
    AkProfile *       | AK:******             | Valid   | cn-beijing       | en
    StsTokenProfile   | StsToken:******       | Valid   | cn-hangzhou      | en
    RamRoleArnProfile | RamRoleArn:******     | Valid   | cn-shanghai      | en
    EcsRamRoleProfile | EcsRamRole:ECSAdmin   | Valid   | cn-qingdao       | zh
    ```
    

## Query the **details** about a profile

Run the `aliyun configure get` command to query the details about a specified profile.

### **Syntax**

```
aliyun configure get [--profile <PROFILE_NAME>] [<SETTING_NAME>...]
```

-   `PROFILE_NAME`: Specifies the profile name. If you do not specify this parameter and the `ALIBABA_CLOUD_PROFILE` environment variable is not configured, information about the current profile is displayed. If the specified profile does not exist, the message `profile <PROFILE_NAME> not found!` is returned.
    
-   `SETTING_NAME`: Specifies the settings to view. You can specify multiple settings. If you do not specify this parameter, all settings are displayed. If a specified setting does not exist, the command returns no information.
    
    List of viewable settings
    
    **Option**
    
    **Description**
    
    **Associated setting field**
    
    profile
    
    The profile name.
    
    name
    
    mode
    
    The credential type.
    
    mode
    
    region
    
    The ID of the default region.
    
    region\_id
    
    language
    
    The language of the help information.
    
    language
    
    access-key-id
    
    The AccessKey ID of the current Alibaba Cloud account or RAM user.
    
    access\_key\_id
    
    access-key-secret
    
    The AccessKey secret of the Alibaba Cloud account or RAM user.
    
    access\_key\_secret
    
    sts-token
    
    The Security Token Service (STS) token of the RAM user or role.
    
    sts\_token
    
    sts-region
    
    The ID of the region in which the RAM user or role obtains the STS token.
    
    sts\_region
    
    ram-role-name
    
    The name of the RAM role.
    
    ram\_role\_name
    
    ram-role-arn
    
    The ARN of the RAM role.
    
    ram\_role\_arn
    
    external-id
    
    The external ID of the RAM role.
    
    external\_id
    
    role-session-name
    
    The name of the role session.
    
    ram\_session\_name
    
    cloud-sso-sign-in-url
    
    The logon address of the CloudSSO user.
    
    cloud-sso-sign-in-url
    
    cloud-sso-access-config
    
    The profile ID of CloudSSO.
    
    cloud-sso-access-config
    
    cloud-sso-account-id
    
    The UID of the Alibaba Cloud account that is used to log on to CloudSSO.
    
    cloud-sso-account-id
    
    oauth-site-type
    
    The site type for OAuth logon.
    
    oauth-site-type
    

### **Example 1:** View all configuration options of a profile

1.  Run the following command to query all configuration options of the `_AkProfile_` profile of the **AK** type:
    
    ```
    aliyun configure get --profile AkProfile
    ```
    
2.  Sample response:
    
    ```
    {
      "name": "AkProfile",
      "mode": "AK",
      "access_key_id": "<yourAccessKeyID>",
      "access_key_secret": "<yourAccessKeySecret>",
      "region_id": "cn-hangzhou",
      "output_format": "json",
      "language": "en"
    }
    ```
    

### **Example 2:** Query specified configuration options of a profile

1.  Run the following command to query the profile name, credential type, and default language of the `_ExternalProfile_` whose credential type is **External**:
    
    ```
    aliyun configure get profile mode language --profile ExternalProfile
    ```
    
2.  The details are returned in the `key=value` format.
    
    ```
    profile=ExternalProfile
    mode=External
    language=en
    ```
    

## **Switch to a specific profile**

Starting from v`3.0.214`, you can run the `aliyun configure switch` command to change the current active profile. After you switch profiles, Alibaba Cloud CLI automatically uses the new profile for all requests, unless you specify another credential.

### **Syntax**

```
aliyun configure switch --profile <PROFILE_NAME>
```

`PROFILE_NAME`: Specifies the profile name. This parameter is required. The command fails if this parameter is empty or the specified profile does not exist.

### **Example**

1.  Run the `aliyun configure list` command to [query a list of profiles](#4addcad7ec44w). The list shows that the current profile is `default`. Alibaba Cloud CLI uses an asterisk (`*`) on the right side of the profile name to identify a profile.
    
    ```
    Profile           | Credential            | Valid   | Region           | Language
    ---------         | ------------------    | ------- | ---------------- | --------
    default *         | AK:******             | Valid   | cn-hangzhou      | en
    ExampleProfile    | AK:******             | Valid   | cn-beijing       | zh
    ```
    
2.  Run the following command to switch to the `_ExampleProfile_` _profile._ If you receive the ``The default profile is `ExampleProfile` now`` message, the command succeeds.
    
    ```
    aliyun configure switch --profile exampleProfile
    ```
    
3.  Run the `aliyun configure list` command again to check whether you are switched to the specified profile.
    
    ```
    Profile           | Credential            | Valid   | Region           | Language
    ---------         | ------------------    | ------- | ---------------- | --------
    default           | AK:******             | Valid   | cn-hangzhou      | en
    ExampleProfile *  | AK:******             | Valid   | cn-beijing       | zh
    ```
    

## Delete a profile

Run the `aliyun configure delete` command to delete a specific profile.

### **Syntax**

```
aliyun configure delete --profile <PROFILE_NAME>
```

-   `PROFILE_NAME`: Specifies the name of the profile to delete. This parameter is required. The command fails if this parameter is empty or the specified profile does not exist.
    
-   If you delete the current profile, you are automatically switched to the profile on the top of the list. For more information, see the following example.
    
-   We recommend that you keep at least one profile. If you delete all profiles by mistake, Alibaba Cloud CLI does not work as expected. To resolve this issue, you must manually delete the `config.json` file. This file is located in the `.aliyun` folder in your user home directory. The location of the user home directory varies based on the operating system.
    
    -   Windows: `C:\Users\**_<USER_NAME>_**\.aliyun`
        
    -   Linux and macOS: `/home/**_<USER_NAME>_**/.aliyun`
        

### **Example**

1.  Run the `aliyun configure list` command to query a list of profiles.
    
    ```
    Profile           | Credential            | Valid   | Region           | Language
    ---------         | ------------------    | ------- | ---------------- | --------
    default           | AK:******             | Valid   | cn-hangzhou      | en
    AkProfile         | AK:******             | Valid   | cn-hangzhou      | en
    ExampleProfile *  | AK:******             | Valid   | cn-hangzhou      | en
    ```
    
2.  Run the following command to delete the `_ExampleProfile_` file:
    
    ```
    aliyun configure delete --profile ExampleProfile
    ```
    
3.  Run the `aliyun configure list` command again to check whether the `_ExampleProfile_` profile is deleted. If yes, you are switched to the `_default_` profile.
    
    ```
    Profile           | Credential            | Valid   | Region           | Language
    ---------         | ------------------    | ------- | ---------------- | --------
    default *         | AK:******             | Valid   | cn-hangzhou      | en
    AkProfile         | AK:******             | Valid   | cn-hangzhou      | en
    ```

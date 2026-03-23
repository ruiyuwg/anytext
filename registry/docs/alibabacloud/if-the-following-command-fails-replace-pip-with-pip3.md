The secret client is a custom wrapper built on KMS OpenAPI and KMS instance APIs. It encapsulates credential caching and refreshing functions within an application. This approach provides higher business stability and simplifies integration for developers into business applications. The secret client supports retrieving credential values for all credential types. This topic describes how to install and use the secret client.

## **SDK introduction**

The secret client is based on KMS instance APIs. It encapsulates credential caching, best practices, and design patterns, simplifying integration for developers into business systems. KMS also provides the KMS instance software development kit (SDK) and Alibaba Cloud SDK, which can also be used to retrieve credential values. For more information, see [SDK Reference](/help/en/kms/key-management-service/developer-reference/sdk-user-guide/).

**Note**

To perform management operations on credentials, you can use only the Alibaba Cloud SDK.

The secret client has the following features:

-   Allows developers to quickly integrate credential capabilities into applications and read credential information with a single line of code.
    
-   Encapsulates functions for caching and refreshing credentials in an application.
    
-   Encapsulates an API error retry mechanism to intelligently handle server-side errors.
    
-   Provides an open plug-in design pattern that allows developers to customize and extend functional modules, such as caching and error retries.
    

## **Notes**

-   Supported credential types: generic secrets, RAM credentials, ECS credentials, and database credentials.
    
-   Supported programming languages: Java (Java 8 and later), Python, and Go.
    

## **Get a secret value through a shared gateway**

The network type can be a public network or a VPC.

### **Step 1: Create an access credential**

This method supports identity authentication through Resource Access Management (RAM), using methods such as instance RAM roles, RamRoleArn, Security Token Service (STS) tokens, and AccessKeys. For more information, see [Manage access credentials](/help/en/sdk/developer-reference/v2-manage-access-credentials).

## **Instance RAM role**

An Elastic Compute Service (ECS) instance Resource Access Management (RAM) role is a regular service role that is attached to ECS instances, and the principal is ECS. This allows the ECS instance to obtain STS tokens for temporary access, eliminating the need for AccessKey pairs when calling KMS OpenAPI operations.

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/), and create an instance RAM role whose Principal Type is an Alibaba Cloud service.
    
    -   Principal Type: Select **Cloud Service**.
        
    -   Principal Name: Select **Elastic Compute Service / ECS**.
        
2.  Grant the RAM role access to retrieve KMS secrets.
    
    -   Method 1: Identity-based policies
        
        KMS provides system-defined permission policies that can be attached to RAM roles. For more information, see [System policies for KMS](/help/en/kms/key-management-service/security-and-compliance/kms-1). You can also create [custom policies](/help/en/kms/key-management-service/security-and-compliance/sample-custom-permission-policies).
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0360567371/p907565.png)
        
    -   Method 2: Resource-based policies
        
        KMS supports resource-based policies, which allow you to set access permissions for keys and secrets. This lets you control which Alibaba Cloud accounts, RAM users, and RAM roles have permission to manage or use KMS keys and secrets. For more information, see [Key policies](/help/en/kms/key-management-service/security-and-compliance/key-policies/) and [Secret policies](/help/en/kms/key-management-service/security-and-compliance/secret-policies/).
        
    
3.  Log on to the [ECS console](https://ecs.console.alibabacloud.com), and attach the instance RAM role to an ECS instance. ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9522981471/p907500.png)
    

## **RamRoleArn**

RAM users or cloud services can obtain temporary permissions by assuming roles instead of directly using long-term access keys, thereby reducing the risk of key leakage. For instance, in temporary data processing tasks, RAM users or cloud services can temporarily assume a role with a specific RamRoleArn. RamRoleArn is the ARN information of the RAM role. Once the task is completed, the role's permissions are revoked, further mitigating the risk of exposure.

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) by using an Alibaba Cloud account or a RAM user who has administrative rights.
    
2.  [Create a RAM role](/help/en/ram/user-guide/create-a-ram-role/).
    
3.  Grant the RAM role access to KMS. You have two methods to complete the grant.
    
    -   Method 1: Identity-based policies
        
        KMS provides system-defined permission policies that can be attached to RAM roles. For more information, see [System policies for KMS](/help/en/kms/key-management-service/security-and-compliance/kms-1). You can also create [custom policies](/help/en/kms/key-management-service/security-and-compliance/sample-custom-permission-policies).
        
    -   Method 2: Resource-based policies
        
        KMS supports resource-based policies, which allow you to set access permissions for keys and secrets. This lets you control which Alibaba Cloud accounts, RAM users, and RAM roles have permission to manage or use KMS keys and secrets. For more information, see [Key policies](/help/en/kms/key-management-service/security-and-compliance/key-policies/) and [Secret policies](/help/en/kms/key-management-service/security-and-compliance/secret-policies/).
        
4.  [View the RamRoleArn of a RAM role](/help/en/ram/user-guide/view-the-information-about-a-ram-role).
    
    The RamRoleArn follows the format `acs:ram::$accountID:role/$roleName`, where `$accountID` is the Alibaba Cloud account and `$roleName` is the RAM role name.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8255965471/p907479.png)
    

## STS token

By using STS services, a temporary access credential can be issued to RAM users or RAM roles, allowing them to access KMS with permissions specified by the policy for a limited validity period. After the expiration period, the credential will automatically become invalid.

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) by using an Alibaba Cloud account or a RAM user who has administrative rights.
    
2.  [Create a RAM user](/help/en/ram/user-guide/create-a-ram-user) or [create a RAM role](/help/en/ram/user-guide/create-a-ram-role/).
    
3.  [Grant AliyunSTSAssumeRoleAccess permission to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user) or [Grant AliyunSTSAssumeRoleAccess permission to a RAM role](/help/en/ram/user-guide/grant-permissions-to-a-ram-role).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1208467371/p907020.png)
    
4.  Grant the RAM user access to KMS. You have two methods to complete the grant.
    
    -   Method 1: Identity-based policies
        
        KMS provides system-defined permission policies that can be attached to RAM users. For more information, see [System policies for KMS](/help/en/kms/key-management-service/security-and-compliance/kms-1). You can also create [custom policies](/help/en/kms/key-management-service/security-and-compliance/sample-custom-permission-policies).
        
    -   Method 2: Resource-based policies
        
        KMS supports resource-based policies, which allow you to set access permissions for keys and secrets. This lets you control which Alibaba Cloud accounts, RAM users, and RAM roles have permission to manage or use KMS keys and secrets. For more information, see [Key policies](/help/en/kms/key-management-service/security-and-compliance/key-policies/) and [Secret policies](/help/en/kms/key-management-service/security-and-compliance/secret-policies/).
        

5.  Use the RAM user or RAM role to call the [AssumeRole](/help/en/ram/developer-reference/api-sts-2015-04-01-assumerole) interface of the STS service to obtain temporary access credentials.
    

## AccessKey

This section uses a RAM user's AccessKey pair as an example. Alibaba Cloud accounts have default administrator privileges for all resources, which cannot be modified. Because compromised AccessKeys risk significant security vulnerabilities, we strongly recommend against creating them for Alibaba Cloud accounts. Instead, create a RAM user solely for API access, [generate its AccessKey pair](/help/en/ram/user-guide/create-an-accesskey-pair), and implement the principle of least privilege.

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/). In the left-side navigation pane, choose **Identities** > **Users**, and click on the target RAM user.
    
2.  In the **Authentication** tab, click **Create AccessKey** and follow the instructions.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5237452471/p928074.png)
    
3.  Grant the RAM user access to retrieve KMS secrets.
    
    -   Method 1: Through identity-based policies
        
        KMS provides system-defined permission policies that can be attached to RAM users. For more information, see [System policies for KMS](/help/en/kms/key-management-service/security-and-compliance/kms-1). You can also create [custom policies](/help/en/kms/key-management-service/security-and-compliance/sample-custom-permission-policies).
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0360567371/p907565.png)
        
    -   Method 2: Through resource-based policies
        
        KMS supports resource-based policies, which allow you to set access permissions for keys and secrets. This lets you control which Alibaba Cloud accounts, RAM users, and RAM roles have permission to manage or use KMS keys and secrets. For more information, see [Key policies](/help/en/kms/key-management-service/security-and-compliance/key-policies/) and [Secret policies](/help/en/kms/key-management-service/security-and-compliance/secret-policies/).
        
    

## ClientKey (not recommended)

For instructions, see the standard creation method in [Create an application access point](/help/en/kms/key-management-service/user-guide/create-an-aap). When configurating parameters, ensure the following settings are correct:

-   When create network rules, select **Public** or **VPC** for **Network Type**.
    
-   When configure the scope of permission rules, select **Shared KMS Gateway**.
    

### **Step 2: Install the secret client**

## Java

You can install the secret client in your project using Maven.

```
<dependency>
    <groupId>com.aliyun</groupId>
    <artifactId>alibabacloud-secretsmanager-client</artifactId>
    <version>1.4.x</version>
</dependency>
<dependency>
  <groupId>com.aliyun</groupId>
  <artifactId>aliyun-java-sdk-core</artifactId>
  <version>4.5.x</version>
</dependency>
```

**Important**

Use the **latest version**. For more information about versions and source code, see [alibabacloud-secretsmanager-client-java](https://github.com/aliyun/alibabacloud-secretsmanager-client-java?tab=readme-ov-file#install).

## Python

For more information about the installation and source code, see [aliyun-secretsmanager-client-python](https://github.com/aliyun/aliyun-secretsmanager-client-python).

You can run the pip command to install the secret client.

```
# If the following command fails, replace pip with pip3
pip install aliyun-secret-manager-client
```

## **Go**

For more information about the installation and source code, see [aliyun-secretsmanager-client-go](https://github.com/aliyun/aliyun-secretsmanager-client-go).

You can use the `go get` command to install the secret client.

**Important**

The `alibaba-cloud-sdk-go` version that the secret client for Go depends on must be earlier than **v1.63.0**. You can check the version in the plug-in's `go.mod` file to avoid potential compatibility issues.

```
go get -u github.com/aliyun/aliyun-secretsmanager-client-go
```

### **Step 3: Initialize the client and get the credential value**

## Java

The sample code for retrieving a credential value varies depending on the client initialization method. You can choose one of the following methods.

-   #### **Method 1: Initialize the client using environment variables or a secretsmanager.properties configuration file**
    
    You can use either environment variables or a secretsmanager.properties configuration file.
    
    **Environment variables**
    
    The method for configuring environment variables varies by operating system. For more information, see [Configure environment variables on Linux, macOS, and Windows](/help/en/sdk/developer-reference/configure-the-alibaba-cloud-accesskey-environment-variable-on-linux-macos-and-windows-systems).
    
    ## **Instance RAM role**
    
    **Parameter**
    
    **Parameter value**
    
    credentials\_type
    
    Fixed value: ecs\_ram\_role.
    
    credentials\_role\_name
    
    RAM role name.
    
    cache\_client\_region\_id
    
    The format is \[{"regionId":"<your region id>"}\]. Replace `<your region id>` with your actual region ID.
    
    **Important**
    
    On Linux, when you use the export command to set an environment variable, add an escape character. For example, `[{\"regionId\":\"<your region id>\"}]`.
    
    ## **RamRoleArn**
    
    **Parameter**
    
    **Parameter value**
    
    credentials\_type
    
    Fixed value: ram\_role.
    
    credentials\_role\_session\_name
    
    The name of the RAM role.
    
    credentials\_role\_arn
    
    The ARN of the RAM role.
    
    credentials\_access\_key\_id
    
    AccessKey ID.
    
    credentials\_access\_secret
    
    AccessKey secret.
    
    cache\_client\_region\_id
    
    The format is \[{"regionId":"<your region id>"}\]. Replace `<your region id>` with your actual region ID.
    
    **Important**
    
    On Linux, when you use the export command to set an environment variable, add an escape character. For example, `[{\"regionId\":\"<your region id>\"}]`.
    
    ## **STS token**
    
    **Parameter**
    
    **Parameter value**
    
    credentials\_type
    
    Fixed value: sts.
    
    credentials\_role\_session\_name
    
    RAM role name.
    
    credentials\_role\_arn
    
    The ARN of the RAM role.
    
    credentials\_access\_key\_id
    
    AccessKey ID.
    
    credentials\_access\_secret
    
    AccessKey secret.
    
    cache\_client\_region\_id
    
    The format is \[{"regionId":"<your region id>"}\]. Replace `<your region id>` with your actual region ID.
    
    **Important**
    
    On Linux, when you use the export command to set an environment variable, add an escape character. For example, `[{\"regionId\":\"<your region id>\"}]`.
    
    ## AccessKey
    
    **Parameter**
    
    **Parameter value**
    
    credentials\_type
    
    Fixed value: ak.
    
    credentials\_access\_key\_id
    
    AccessKey ID.
    
    credentials\_access\_secret
    
    AccessKey secret.
    
    cache\_client\_region\_id
    
    The format is \[{"regionId":"<your region id>"}\]. Replace `<your region id>` with your actual region ID.
    
    **Important**
    
    On Linux, when you use the export command to set an environment variable, add an escape character. For example, `[{\"regionId\":\"<your region id>\"}]`.
    
    ## ClientKey
    
    **Parameter**
    
    **Parameter value**
    
    credentials\_type
    
    Fixed value: client\_key.
    
    client\_key\_password\_from\_env\_variable
    
    Indicates that the ClientKey password is obtained from a system environment variable. The value is the name of the system environment variable for the password.
    
    When you configure this parameter, you must configure the password in a system environment variable. You can customize the variable name.
    
    client\_key\_password\_from\_file\_path
    
    Indicates that the ClientKey password is obtained from a file. The value is the absolute or relative path of the password file.
    
    When you configure this parameter, you must configure the password in a file. You can customize the file name.
    
    **Note**
    
    Choose one of the two parameters: client\_key\_password\_from\_env\_variable or client\_key\_password\_from\_file\_path.
    
    client\_key\_private\_key\_path
    
    Absolute or relative path of the ClientKey file.
    
    When you configure this parameter, you must save the ClientKey file to a suitable location. You can customize the file name.
    
    cache\_client\_region\_id
    
    The format is \[{"regionId":"<your region id>"}\]. Replace `<your region id>` with your actual region ID.
    
    **Important**
    
    On Linux, when you use the export command to set an environment variable, add an escape character. For example, `[{\"regionId\":\"<your region id>\"}]`.
    
    **secretsmanager.properties configuration file**
    
    The configuration file must be named `secretsmanager.properties`.
    
    The configuration file content varies depending on the authentication method.
    
    ## **Instance RAM role**
    
    ```
    # Access credential type
    credentials_type=ecs_ram_role
    # ECS RAM role name
    credentials_role_name=#credentials_role_name#
    # Associated KMS service region
    cache_client_region_id=[{"regionId":"#regionId#"}]
    ```
    
    ## **RAMRoleArn**
    
    ```
    # Access credential type
    credentials_type=ram_role
    # Role name
    credentials_role_session_name=#role name#
    # Resource ARN
    credentials_role_arn=#role arn#
    # AccessKey ID
    credentials_access_key_id=#access key id#
    # AccessKey secret
    credentials_access_secret=#access key secret#
    # Associated KMS service region
    cache_client_region_id=[{"regionId":"#regionId#"}]
    ```
    
    ## **STS token**
    
    ```
    # Access credential type
    credentials_type=sts
    # Role name
    credentials_role_session_name=#role name#
    # Resource ARN
    credentials_role_arn=#role arn#
    # AccessKey ID
    credentials_access_key_id=#access key id#
    # AccessKey secret
    credentials_access_secret=#access key secret#
    # Associated KMS service region
    cache_client_region_id=[{"regionId":"#regionId#"}]
    ```
    
    ## **AccessKey**
    
    ```
    # Access credential type
    credentials_type=ak
    # AccessKey ID
    credentials_access_key_id=#access key id#
    # AccessKey secret
    credentials_access_secret=#access key secret#
    # Associated KMS service region
    cache_client_region_id=[{"regionId":"#regionId#"}]
    ```
    
    ## ClientKey
    
    ```
    # Access credential type
    credentials_type=client_key
    
    # Read the decryption password of the client key. You can read it from an environment variable or a file.
    client_key_password_from_env_variable=#your client key private key password environment variable name#
    client_key_password_from_file_path=#your client key private key password file path#
    
    # Path of the Client Key private key file
    client_key_private_key_path=#your client key private key file path#
    
    # Associated KMS service region
    cache_client_region_id=[{"regionId":"#regionId#"}]
    ```
    
    The following sample code shows how to retrieve a credential value. Replace `#secretName#` with your credential name.
    
    ```
    import com.aliyuncs.kms.secretsmanager.client.SecretCacheClient;
    import com.aliyuncs.kms.secretsmanager.client.SecretCacheClientBuilder;
    import com.aliyuncs.kms.secretsmanager.client.exception.CacheSecretException;
    import com.aliyuncs.kms.secretsmanager.client.model.SecretInfo;
    
    public class CacheClientEnvironmentSample {
    
        public static void main(String[] args) {
            try {
                // Build the secret client.
                SecretCacheClient client = SecretCacheClientBuilder.newClient();
                // Use the built client to get the credential information.
                SecretInfo secretInfo = client.getSecretInfo("#secretName#");
                System.out.println(secretInfo);
            } catch (CacheSecretException e) {
                e.printStackTrace();
            }
        }
    }
    ```
    
-   #### **Method 2: Initialize the client using a custom configuration file**
    
    Note that you must define the configuration file name and path.
    
    **Configuration file**
    
    The configuration file content varies depending on the authentication method.
    
    ##### **Instance RAM role**
    
    ```
    # Access credential type
    credentials_type=ecs_ram_role
    # ECS RAM role name
    credentials_role_name=#credentials_role_name#
    # Associated KMS service region
    cache_client_region_id=[{"regionId":"#regionId#"}]
    ```
    
    ##### **RAMRoleArn**
    
    ```
    # Access credential type
    credentials_type=ram_role
    # Role name
    credentials_role_session_name=#role name#
    # Resource ARN
    credentials_role_arn=#role arn#
    # AccessKey ID
    credentials_access_key_id=#access key id#
    # AccessKey secret
    credentials_access_secret=#access key secret#
    # Associated KMS service region
    cache_client_region_id=[{"regionId":"#regionId#"}]
    ```
    
    ##### **STS token**
    
    ```
    # Access credential type
    credentials_type=sts
    # Role name
    credentials_role_session_name=#role name#
    # Resource ARN
    credentials_role_arn=#role arn#
    # AccessKey ID
    credentials_access_key_id=#access key id#
    # AccessKey secret
    credentials_access_secret=#access key secret#
    # Associated KMS service region
    cache_client_region_id=[{"regionId":"#regionId#"}]
    ```
    
    ##### **AccessKey**
    
    ```
    # Access credential type
    credentials_type=ak
    # AccessKey ID
    credentials_access_key_id=#access key id#
    # AccessKey secret
    credentials_access_secret=#access key secret#
    # Associated KMS service region
    cache_client_region_id=[{"regionId":"#regionId#"}]
    ```
    
    ##### ClientKey
    
    ```
    # Access credential type
    credentials_type=client_key
    
    # Read the decryption password of the client key. You can read it from an environment variable or a file.
    client_key_password_from_env_variable=#your client key private key password environment variable name#
    client_key_password_from_file_path=#your client key private key password file path#
    
    # Path of the Client Key private key file
    client_key_private_key_path=#your client key private key file path#
    
    # Associated KMS service region
    cache_client_region_id=[{"regionId":"#regionId#"}]
    ```
    
    The following sample code shows how to retrieve a credential value. Replace `#customConfigFileName#` with your custom configuration file name and `#secretName#` with your credential name.
    
    ```
    import com.aliyuncs.kms.secretsmanager.client.SecretCacheClient;
    import com.aliyuncs.kms.secretsmanager.client.SecretCacheClientBuilder;
    import com.aliyuncs.kms.secretsmanager.client.exception.CacheSecretException;
    import com.aliyuncs.kms.secretsmanager.client.model.SecretInfo;
    import com.aliyuncs.kms.secretsmanager.client.service.BaseSecretManagerClientBuilder;
    
    public class CacheClientCustomConfigFileSample {
    
        public static void main(String[] args) {
            try {
                SecretCacheClient client = SecretCacheClientBuilder.newCacheClientBuilder(
                        BaseSecretManagerClientBuilder.standard().withCustomConfigFile("#customConfigFileName#").build()).build();
                SecretInfo secretInfo = client.getSecretInfo("#secretName#");
                System.out.println(secretInfo);
            } catch (CacheSecretException e) {
                System.out.println("CacheSecretException:" + e.getMessage());
            }
        }
    }
    ```
    
-   #### **Method 3: Initialize the client by specifying parameters (accessKey, accessSecret, regionId)**
    
    This method applies only to scenarios where AccessKey is used for authentication.
    
    **Note**
    
    The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using the AccessKey pair to perform operations is a high-risk operation. In addition, use a RAM user to call API operations or perform routine O&M. We recommend that you do not save the AccessKey ID and AccessKey Secret in your project code. If you do, the AccessKey pair may be leaked and the security of all the resources that belong to your account may be compromised.
    
    In this example, the AccessKey pair is saved in ALIBABA\_CLOUD\_ACCESS\_KEY\_ID and ALIBABA\_CLOUD\_ACCESS\_KEY\_SECRET environment variables to implement identity authentication.
    
    -   For more information about how to configure authentication information, see [Manage access credentials](/help/en/sdk/developer-reference/credentials).
        
    -   The method used to configure environment variables varies based on the operating system. For more information, see [Configure environment variables in Linux, macOS, and Windows](/help/en/sdk/developer-reference/configure-the-alibaba-cloud-accesskey-environment-variable-on-linux-macos-and-windows-systems).
        
    
    The following sample code shows how to retrieve a credential value. Replace `#regionId#` with the actual region ID and `#secretName#` with your credential name.
    
    ```
    import com.aliyuncs.kms.secretsmanager.client.SecretCacheClient;
    import com.aliyuncs.kms.secretsmanager.client.SecretCacheClientBuilder;
    import com.aliyuncs.kms.secretsmanager.client.exception.CacheSecretException;
    import com.aliyuncs.kms.secretsmanager.client.model.SecretInfo;
    import com.aliyuncs.kms.secretsmanager.client.service.BaseSecretManagerClientBuilder;
    import com.aliyuncs.kms.secretsmanager.client.utils.CredentialsProviderUtils;
    
    public class CacheClientSimpleParametersSample {
    
        public static void main(String[] args) {
            try {
                SecretCacheClient client = SecretCacheClientBuilder.newCacheClientBuilder(
                        BaseSecretManagerClientBuilder.standard().withCredentialsProvider(CredentialsProviderUtils
                                .withAccessKey(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_ID"), System.getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET"))).withRegion("#regionId#").build()).build();
                SecretInfo secretInfo = client.getSecretInfo("#secretName#");
                System.out.println(secretInfo);
            } catch (CacheSecretException e) {
                e.printStackTrace();
            }
        }
    }
    ```
    

## Python

The sample code for retrieving a credential value varies depending on the client initialization method. You can choose one of the following methods.

-   #### **Method 1: Initialize the client using environment variables or a secretsmanager.properties configuration file**
    
    You can use either environment variables or a secretsmanager.properties configuration file.
    
    #### **Environment variables**
    
    The method for configuring environment variables varies by operating system. For more information, see [Configure environment variables on Linux, macOS, and Windows](/help/en/sdk/developer-reference/configure-the-alibaba-cloud-accesskey-environment-variable-on-linux-macos-and-windows-systems).
    
    ##### **Instance RAM role**
    
    **Parameter**
    
    **Parameter value**
    
    credentials\_type
    
    Fixed value: ecs\_ram\_role.
    
    credentials\_role\_name
    
    RAM role name.
    
    cache\_client\_region\_id
    
    The format is \[{"regionId":"<your region id>"}\]. Replace `<your region id>` with your actual region ID.
    
    **Important**
    
    On Linux, when you use the export command to set an environment variable, add an escape character. For example, `[{\"regionId\":\"<your region id>\"}]`.
    
    ##### **RamRoleArn**
    
    **Parameter**
    
    **Parameter value**
    
    credentials\_type
    
    Fixed value: ram\_role.
    
    credentials\_role\_session\_name
    
    The name of the RAM role.
    
    credentials\_role\_arn
    
    The ARN of the RAM role.
    
    credentials\_access\_key\_id
    
    AccessKey ID.
    
    credentials\_access\_secret
    
    AccessKey secret.
    
    cache\_client\_region\_id
    
    The format is \[{"regionId":"<your region id>"}\]. Replace `<your region id>` with your actual region ID.
    
    **Important**
    
    On Linux, when you use the export command to set an environment variable, add an escape character. For example, `[{\"regionId\":\"<your region id>\"}]`.
    
    ##### **STS token**
    
    **Parameter**
    
    **Parameter value**
    
    credentials\_type
    
    Fixed value: sts.
    
    credentials\_role\_session\_name
    
    RAM role name.
    
    credentials\_role\_arn
    
    The ARN of the RAM role.
    
    credentials\_access\_key\_id
    
    AccessKey ID.
    
    credentials\_access\_secret
    
    AccessKey secret.
    
    cache\_client\_region\_id
    
    The format is \[{"regionId":"<your region id>"}\]. Replace `<your region id>` with your actual region ID.
    
    **Important**
    
    On Linux, when you use the export command to set an environment variable, add an escape character. For example, `[{\"regionId\":\"<your region id>\"}]`.
    
    ##### AccessKey
    
    **Parameter**
    
    **Parameter value**
    
    credentials\_type
    
    Fixed value: ak.
    
    credentials\_access\_key\_id
    
    AccessKey ID.
    
    credentials\_access\_secret
    
    AccessKey secret.
    
    cache\_client\_region\_id
    
    The format is \[{"regionId":"<your region id>"}\]. Replace `<your region id>` with your actual region ID.
    
    **Important**
    
    On Linux, when you use the export command to set an environment variable, add an escape character. For example, `[{\"regionId\":\"<your region id>\"}]`.
    
    ##### ClientKey
    
    **Parameter**
    
    **Parameter value**
    
    credentials\_type
    
    Fixed value: client\_key.
    
    client\_key\_password\_from\_env\_variable
    
    Indicates that the ClientKey password is obtained from a system environment variable. The value is the name of the system environment variable for the password.
    
    When you configure this parameter, you must configure the password in a system environment variable. You can customize the variable name.
    
    client\_key\_password\_from\_file\_path
    
    Indicates that the ClientKey password is obtained from a file. The value is the absolute or relative path of the password file.
    
    When you configure this parameter, you must configure the password in a file. You can customize the file name.
    
    **Note**
    
    Choose one of the two parameters: client\_key\_password\_from\_env\_variable or client\_key\_password\_from\_file\_path.
    
    client\_key\_private\_key\_path
    
    Absolute or relative path of the ClientKey file.
    
    When you configure this parameter, you must save the ClientKey file to a suitable location. You can customize the file name.
    
    cache\_client\_region\_id
    
    The format is \[{"regionId":"<your region id>"}\]. Replace `<your region id>` with your actual region ID.
    
    **Important**
    
    On Linux, when you use the export command to set an environment variable, add an escape character. For example, `[{\"regionId\":\"<your region id>\"}]`.
    
    **secretsmanager.properties configuration file**
    
    The configuration file must be named `secretsmanager.properties`.
    
    The configuration file content varies depending on the authentication method.
    
    ##### **Instance RAM role**
    
    ```
    # Access credential type
    credentials_type=ecs_ram_role
    # ECS RAM role name
    credentials_role_name=#credentials_role_name#
    # Associated KMS service region
    cache_client_region_id=[{"regionId":"#regionId#"}]
    ```
    
    ##### **RAMRoleArn**
    
    ```
    # Access credential type
    credentials_type=ram_role
    # Role name
    credentials_role_session_name=#role name#
    # Resource ARN
    credentials_role_arn=#role arn#
    # AccessKey ID
    credentials_access_key_id=#access key id#
    # AccessKey secret
    credentials_access_secret=#access key secret#
    # Associated KMS service region
    cache_client_region_id=[{"regionId":"#regionId#"}]
    ```
    
    ##### **STS token**
    
    ```
    # Access credential type
    credentials_type=sts
    # Role name
    credentials_role_session_name=#role name#
    # Resource ARN
    credentials_role_arn=#role arn#
    # AccessKey ID
    credentials_access_key_id=#access key id#
    # AccessKey secret
    credentials_access_secret=#access key secret#
    # Associated KMS service region
    cache_client_region_id=[{"regionId":"#regionId#"}]
    ```
    
    ##### **AccessKey**
    
    ```
    # Access credential type
    credentials_type=ak
    # AccessKey ID
    credentials_access_key_id=#access key id#
    # AccessKey secret
    credentials_access_secret=#access key secret#
    # Associated KMS service region
    cache_client_region_id=[{"regionId":"#regionId#"}]
    ```
    
    ##### ClientKey
    
    ```
    # Access credential type
    credentials_type=client_key
    
    # Read the decryption password of the client key. You can read it from an environment variable or a file.
    client_key_password_from_env_variable=#your client key private key password environment variable name#
    client_key_password_from_file_path=#your client key private key password file path#
    
    # Path of the Client Key private key file
    client_key_private_key_path=#your client key private key file path#
    
    # Associated KMS service region
    cache_client_region_id=[{"regionId":"#regionId#"}]
    ```
    
    The following sample code shows how to retrieve a credential value. Replace `#secretName#` with your credential name.
    
    ```
    from alibaba_cloud_secretsmanager_client.secret_manager_cache_client_builder import SecretManagerCacheClientBuilder
    
    if __name__ == '__main__':
        # Build the secret client.
        secret_cache_client = SecretManagerCacheClientBuilder.new_client()
        # Use the built client to get the credential information.
        secret_info = secret_cache_client.get_secret_info("#secretName#")
        print(secret_info.__dict__)
    ```
    
-   #### **Method 2: Initialize the client by specifying parameters (accessKey, accessSecret, regionId)**
    
    This method applies only to scenarios where AccessKey is used for authentication.
    
    **Note**
    
    The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using the AccessKey pair to perform operations is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O&M. We recommend that you do not save the AccessKey ID and AccessKey Secret in your project code. Otherwise, the AccessKey pair may be leaked and the security of all the resources that belong to your account may be compromised.
    
    In this example, the AccessKey pair is saved in ALIBABA\_CLOUD\_ACCESS\_KEY\_ID and ALIBABA\_CLOUD\_ACCESS\_KEY\_SECRET environment variables to implement identity authentication.
    
    -   For more information about how to configure authentication information, see [Manage access credentials](/help/en/sdk/developer-reference/instantiate-a-client-and-configure-a-credential).
        
    -   The method that is used to configure environment variables varies based on the operating system. For more information, see [Configure environment variables in Linux, macOS, and Windows](/help/en/sdk/developer-reference/configure-the-alibaba-cloud-accesskey-environment-variable-on-linux-macos-and-windows-systems).
        
    
    The following sample code shows how to retrieve a credential value. Replace `#regionId#` with the actual region ID and `#secretName#` with your credential name.
    
    ```
    import os
    
    from alibaba_cloud_secretsmanager_client.secret_manager_cache_client_builder import SecretManagerCacheClientBuilder
    from alibaba_cloud_secretsmanager_client.service.default_secret_manager_client_builder import DefaultSecretManagerClientBuilder
    
    if __name__ == '__main__':
        secret_cache_client = SecretManagerCacheClientBuilder.new_cache_client_builder(DefaultSecretManagerClientBuilder.standard() \
            .with_access_key(os.getenv("ALIBABA_CLOUD_ACCESS_KEY_ID"), os.getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET")) \
            .with_region("#regionId#").build()) \
        .build();
        secret_info = secret_cache_client.get_secret_info("#secretName#")
        print(secret_info.__dict__)
    ```
    

## **Go**

The sample code for retrieving a credential value varies depending on the client initialization method. You can choose one of the following methods.

-   #### **Method 1: Initialize the client using environment variables or a secretsmanager.properties configuration file**
    
    You can use either environment variables or a secretsmanager.properties configuration file.
    
    #### **Environment variables**
    
    The method for configuring environment variables varies by operating system. For more information, see [Configure environment variables on Linux, macOS, and Windows](/help/en/sdk/developer-reference/configure-the-alibaba-cloud-accesskey-environment-variable-on-linux-macos-and-windows-systems).
    
    ##### **Instance RAM role**
    
    **Parameter**
    
    **Parameter value**
    
    credentials\_type
    
    Fixed value: ecs\_ram\_role.
    
    credentials\_role\_name
    
    RAM role name.
    
    cache\_client\_region\_id
    
    The format is \[{"regionId":"<your region id>"}\]. Replace `<your region id>` with your actual region ID.
    
    **Important**
    
    On Linux, when you use the export command to set an environment variable, add an escape character. For example, `[{\"regionId\":\"<your region id>\"}]`.
    
    ##### **RamRoleArn**
    
    **Parameter**
    
    **Parameter value**
    
    credentials\_type
    
    Fixed value: ram\_role.
    
    credentials\_role\_session\_name
    
    The name of the RAM role.
    
    credentials\_role\_arn
    
    The ARN of the RAM role.
    
    credentials\_access\_key\_id
    
    AccessKey ID.
    
    credentials\_access\_secret
    
    AccessKey secret.
    
    cache\_client\_region\_id
    
    The format is \[{"regionId":"<your region id>"}\]. Replace `<your region id>` with your actual region ID.
    
    **Important**
    
    On Linux, when you use the export command to set an environment variable, add an escape character. For example, `[{\"regionId\":\"<your region id>\"}]`.
    
    ##### **STS token**
    
    **Parameter**
    
    **Parameter value**
    
    credentials\_type
    
    Fixed value: sts.
    
    credentials\_role\_session\_name
    
    RAM role name.
    
    credentials\_role\_arn
    
    The ARN of the RAM role.
    
    credentials\_access\_key\_id
    
    AccessKey ID.
    
    credentials\_access\_secret
    
    AccessKey secret.
    
    cache\_client\_region\_id
    
    The format is \[{"regionId":"<your region id>"}\]. Replace `<your region id>` with your actual region ID.
    
    **Important**
    
    On Linux, when you use the export command to set an environment variable, add an escape character. For example, `[{\"regionId\":\"<your region id>\"}]`.
    
    ##### AccessKey
    
    **Parameter**
    
    **Parameter value**
    
    credentials\_type
    
    Fixed value: ak.
    
    credentials\_access\_key\_id
    
    AccessKey ID.
    
    credentials\_access\_secret
    
    AccessKey secret.
    
    cache\_client\_region\_id
    
    The format is \[{"regionId":"<your region id>"}\]. Replace `<your region id>` with your actual region ID.
    
    **Important**
    
    On Linux, when you use the export command to set an environment variable, add an escape character. For example, `[{\"regionId\":\"<your region id>\"}]`.
    
    ##### ClientKey
    
    **Parameter**
    
    **Parameter value**
    
    credentials\_type
    
    Fixed value: client\_key.
    
    client\_key\_password\_from\_env\_variable
    
    Indicates that the ClientKey password is obtained from a system environment variable. The value is the name of the system environment variable for the password.
    
    When you configure this parameter, you must configure the password in a system environment variable. You can customize the variable name.
    
    client\_key\_password\_from\_file\_path
    
    Indicates that the ClientKey password is obtained from a file. The value is the absolute or relative path of the password file.
    
    When you configure this parameter, you must configure the password in a file. You can customize the file name.
    
    **Note**
    
    Choose one of the two parameters: client\_key\_password\_from\_env\_variable or client\_key\_password\_from\_file\_path.
    
    client\_key\_private\_key\_path
    
    Absolute or relative path of the ClientKey file.
    
    When you configure this parameter, you must save the ClientKey file to a suitable location. You can customize the file name.
    
    cache\_client\_region\_id
    
    The format is \[{"regionId":"<your region id>"}\]. Replace `<your region id>` with your actual region ID.
    
    **Important**
    
    On Linux, when you use the export command to set an environment variable, add an escape character. For example, `[{\"regionId\":\"<your region id>\"}]`.
    
    **secretsmanager.properties configuration file**
    
    The configuration file must be named `secretsmanager.properties`.
    
    The configuration file content varies depending on the authentication method.
    
    ##### **Instance RAM role**
    
    ```
    # Access credential type
    credentials_type=ecs_ram_role
    # ECS RAM role name
    credentials_role_name=#credentials_role_name#
    # Associated KMS service region
    cache_client_region_id=[{"regionId":"#regionId#"}]
    ```
    
    ##### **RAMRoleArn**
    
    ```
    # Access credential type
    credentials_type=ram_role
    # Role name
    credentials_role_session_name=#role name#
    # Resource ARN
    credentials_role_arn=#role arn#
    # AccessKey ID
    credentials_access_key_id=#access key id#
    # AccessKey secret
    credentials_access_secret=#access key secret#
    # Associated KMS service region
    cache_client_region_id=[{"regionId":"#regionId#"}]
    ```
    
    ##### **STS token**
    
    ```
    # Access credential type
    credentials_type=sts
    # Role name
    credentials_role_session_name=#role name#
    # Resource ARN
    credentials_role_arn=#role arn#
    # AccessKey ID
    credentials_access_key_id=#access key id#
    # AccessKey secret
    credentials_access_secret=#access key secret#
    # Associated KMS service region
    cache_client_region_id=[{"regionId":"#regionId#"}]
    ```
    
    ##### **AccessKey**
    
    ```
    # Access credential type
    credentials_type=ak
    # AccessKey ID
    credentials_access_key_id=#access key id#
    # AccessKey secret
    credentials_access_secret=#access key secret#
    # Associated KMS service region
    cache_client_region_id=[{"regionId":"#regionId#"}]
    ```
    
    ##### ClientKey
    
    ```
    # Access credential type
    credentials_type=client_key
    
    # Read the decryption password of the client key. You can read it from an environment variable or a file.
    client_key_password_from_env_variable=#your client key private key password environment variable name#
    client_key_password_from_file_path=#your client key private key password file path#
    
    # Path of the Client Key private key file
    client_key_private_key_path=#your client key private key file path#
    
    # Associated KMS service region
    cache_client_region_id=[{"regionId":"#regionId#"}]
    ```
    
    The following sample code shows how to retrieve a credential value. Replace `#secretName#` with your credential name.
    
    ```
    package main
    
    import (
        "fmt"
        "github.com/aliyun/aliyun-secretsmanager-client-go/sdk"
    )
    func main() { 
       // Build the secret client.
        client, err := sdk.NewClient()
        if err != nil {
            // Handle exceptions
            panic(err)
        }
       // Use the built client to get the credential information.
        secretInfo, err := client.GetSecretInfo("#secretName#")
        if err != nil {
            // Handle exceptions
            panic(err)
        }
        fmt.Printf("SecretValue:%s\n",secretInfo.SecretValue)
    }
    ```
    
-   #### **Initialize the client by specifying parameters (accessKey, accessSecret, regionId)**
    
    This method applies only to scenarios where AccessKey is used for authentication.
    
    **Note**
    
    The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using the AccessKey pair to perform operations is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O&M. We recommend that you do not save the AccessKey ID and AccessKey Secret in your project code. Otherwise, the AccessKey pair may be leaked and the security of all the resources that belong to your account may be compromised.
    
    In this example, the AccessKey pair is saved in ALIBABA\_CLOUD\_ACCESS\_KEY\_ID and ALIBABA\_CLOUD\_ACCESS\_KEY\_SECRET environment variables to implement identity authentication.
    
    -   For more information about how to configure authentication information, see [Manage access credentials](/help/en/sdk/developer-reference/create-a-client).
        
    -   The method that is used to configure environment variables varies based on the operating system. For more information, see [Configure environment variables in Linux, macOS, and Windows](/help/en/sdk/developer-reference/configure-the-alibaba-cloud-accesskey-environment-variable-on-linux-macos-and-windows-systems).
        
    
    The following sample code shows how to retrieve a credential value. Replace `#regionId#` with the actual region ID and `#secretName#` with your credential name.
    
    ```
    package main
    
    import (
    	"github.com/aliyun/aliyun-secretsmanager-client-go/sdk/service"
    	"github.com/aliyun/aliyun-secretsmanager-client-go/sdk"
    	"os"
    )
    
    func main() {
    	client, err := sdk.NewSecretCacheClientBuilder(service.NewDefaultSecretManagerClientBuilder().Standard().WithAccessKey(os.Getenv("ALIBABA_CLOUD_ACCESS_KEY_ID"), os.Getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET")).WithRegion("#regionId#").Build()).Build()
    	if err != nil {
    		// Handle exceptions
    		panic(err)
    	}
    	secretInfo, err := client.GetSecretInfo("#secretName#")
    	if err != nil {
    		// Handle exceptions
    		panic(err)
    	}
    }
    ```
    

## **Get a secret value through a dedicated gateway (not recommended)**

The network type is the KMS private network.

### **Step 1: Create an access credential**

Only ClientKey is supported as an access credential.

-   **Method 1: Quick creation**
    
    Suitable for quick testing and development scenarios. This method uses a default permission policy that cannot be modified. Your application will have access to all keys and secrets in the specified KMS instance.
    
-   **Method 2: Standard creation**
    
    Use this method to configure fine-grained access permissions for resources.
    

#### **Method 1: Quick creation**

1.  Log on to the [KMS console](https://yundun.console.alibabacloud.com/?p=kms#/keyList/base). In the top navigation bar, select a region. In the left-side navigation pane, click **Application Access**\> **Multi-Cloud Access (formerly AAP)**.
    
2.  On the **Application Access** tab, click **Create AAP**. In the **Create AAP** panel, configure the parameters.
    
    **Parameter**
    
    **Description**
    
    **Mode**
    
    Select **Quick Creation**.
    
    **Scope (KMS Instance)**
    
    Select the KMS instance that you want to access.
    
    **Application Access Point Name**
    
    Enter the name of the AAP.
    
    **Authentication Method**
    
    The default value is ClientKey, which cannot be changed.
    
    **Default Permission Policy**
    
    The default value is `key/*``secret/*`, which cannot be changed. Your application can access all keys and secrets in the specified KMS instance.
    
3.  Click **OK**. The browser automatically downloads the client key that is created.
    
    The client key contains **Application Access Secret (ClientKeyContent)** and **Password**. By default, **Application Access Secret (ClientKeyContent)** is saved in a file whose name is in the `clientKey_****.json` format. By default, **Password** is saved in a file whose name is in the `clientKey_****_Password.txt` format.
    

#### **Method 2: Standard creation**

For detailed instructions, see [Method 2: Standard creation](/help/en/kms/key-management-service/user-guide/create-an-aap#f13b7e1159e6n). When configurating parameters, ensure the following settings are correct:

-   When create a network access rule, select **Private** for **Network Type**.
    
-   When configure the scope of permission policy, select the specified **KMS Instance ID**.
    

### **Step 2: Install the secret client**

## Java

You can install the secret client in your project using Maven.

```
<dependency>
    <groupId>com.aliyun</groupId>
    <artifactId>alibabacloud-secretsmanager-client</artifactId>
    <version>1.4.x</version>
</dependency>
<dependency>
  <groupId>com.aliyun</groupId>
  <artifactId>aliyun-java-sdk-core</artifactId>
  <version>4.5.x</version>
</dependency>
```

**Important**

Use the **latest version**. For more information about versions and source code, see [alibabacloud-secretsmanager-client-java](https://github.com/aliyun/alibabacloud-secretsmanager-client-java?tab=readme-ov-file#install).

## Python

For more information about the installation and source code, see [aliyun-secretsmanager-client-python](https://github.com/aliyun/aliyun-secretsmanager-client-python).

You can run the pip command to install the secret client.

```
# If the following command fails, replace pip with pip3
pip install aliyun-secret-manager-client
```

## **Go**

For more information about the installation and source code, see [aliyun-secretsmanager-client-go](https://github.com/aliyun/aliyun-secretsmanager-client-go).

You can use the `go get` command to install the secret client.

```
go get -u github.com/aliyun/aliyun-secretsmanager-client-go
```

### **Step 3: Initialize the secret client and get the credential value**

## Java

The sample code for retrieving a credential value varies depending on the client initialization method. You can choose one of the following methods.

-   #### **Method 1: Initialize the client using environment variables or a secretsmanager.properties configuration file**
    
    You can use either environment variables or a secretsmanager.properties configuration file.
    
    **Environment variables**
    
    -   **Method 1: Retrieve the ClientKey password from an environment variable**
        
        **Parameter**
        
        **Parameter value**
        
        cache\_client\_dkms\_config\_info
        
        The parameter value format is `[{"regionId":"<your dkms regionId >","endpoint":"<your dkms endpoint>","passwordFromEnvVariable":"<YOUR_PASSWORD_ENV_VARIABLE>","clientKeyFile":"<your ClientKey file path>","ignoreSslCerts":false,"caFilePath":"<your CA certificate file path>"}]`.
        
        With this method, you also need to configure the content of the ClientKey's **Credential Password (ClientKeyPassword)** in an environment variable. You can customize the variable name. After configuration, replace `<YOUR_PASSWORD_ENV_VARIABLE>` with the variable name.
        
        For example, on a Linux operating system:
        
        ```
        export cache_client_dkms_config_info=[{"regionId":"cn-hangzhou","endpoint":"kst-hzz634e67d126u9p9****.cryptoservice.kms.aliyuncs.com","passwordFromEnvVariable":"passwordFromEnvVariable","clientKeyFile":"C:\RamSecretPlugin\src\main\resources\clientKey_KAAP.json","ignoreSslCerts":false,"caFilePath":"C:\RamSecretPlugin\src\main\resources\PrivateKmsCA_kst-hzz634e67d126u9p9****.pem"}]
        ```
        
    -   **Method 2: Retrieve the ClientKey password from a file**
        
        The downloaded ClientKey **Credential Password (ClientKeyPassword)** file is named `clientKey_****_Password.txt` by default. You can change the file name, but you must replace `<your Client Key file path>` in the value of cache\_client\_dkms\_config\_info with the new file path.
        
        **Parameter**
        
        **Parameter value**
        
        cache\_client\_dkms\_config\_info
        
        The parameter value format is: `[{"regionId":"<your dkms regionId >","endpoint":"<your dkms endpoint>","passwordFromFilePath":"< your password file path >","clientKeyFile":"<your Client Key file path>","ignoreSslCerts":false,"caFilePath":"<your CA certificate file path>"}]`.
        
        For example, on a Linux operating system:
        
        ```
        export cache_client_dkms_config_info=[{"regionId":"cn-hangzhou","endpoint":"kst-hzz634e67d126u9p9****.cryptoservice.kms.aliyuncs.com","passwordFromFilePath":"C:\RamSecretPlugin\src\main\resources\clientKeyPassword.txt","clientKeyFile":"C:\RamSecretPlugin\src\main\resources\clientKey_KAAP.json","ignoreSslCerts":false,"caFilePath":"C:\RamSecretPlugin\src\main\resources\PrivateKmsCA_kst-hzz634e67d126u9p9****.pem"}]
        ```
        
    
    Description of each configuration item:
    
    **Configuration Item**
    
    **Parameter descriptions**
    
    **Description**
    
    **Region ID**
    
    The region ID where the KMS instance is located.
    
    For specific region IDs, see [Regions and zones](/help/en/kms/key-management-service/product-overview/supported-regions).
    
    **Endpoint**
    
    The domain name of the KMS instance. The format is `{instance ID}.kms.aliyuncs.com`.
    
    Go to the **Instances** page. On the instance details page, the **Instance VPC Endpoint** is the endpoint.
    
    **clientKeyFile**
    
    The absolute or relative path of the ClientKey file in JSON format.
    
    -   The ClientKey file contains the **Application Access Secret** **(ClientKeyContent)**, which is downloaded when a ClientKey is created in an application access point (AAP). The default file name is ClientKey\_\*\*\*\*\*\*.json.
        
    -   Credential password: The **Credential Password** **(ClientKeyPassword)** that is downloaded when you create the ClientKey in AAP. By default, this password is in the ClientKey\_\*\*\*\*\*\*\_password.txt file.
        
    
    **Important**
    
    The ClientKey file and the credential password have a one-to-one correspondence. You can only obtain them when you create the ClientKey. If you did not save them during creation, you must create a new ClientKey in the AAP. For more information, see [Create an application access point](/help/en/kms/key-management-service/user-guide/create-an-aap).
    
    **passwordFromFilePath** or **passwordFromEnvVariable**
    
    -   **passwordFromFilePath**: The absolute or relative path to the file that contains the credential password.
        
    -   **passwordFromEnvVariable**: The value is the name of an environment variable that contains the credential password.
        
    
    **Ignore SSL certificates**
    
    Specifies whether to ignore the validity check of the KMS instance SSL certificate. KMS instances have built-in SSL certificates and use the SSL/TLS protocol for authentication and encrypted communication. The valid values are:
    
    -   true: Ignores the validity check.
        
        **Note**
        
        If the value is set to true, you do not need to configure **caFilePath**.
        
    -   false: Performs the validity check.
        
    
    In a production environment, you must set this parameter to false.
    
    **caFilePath**
    
    The absolute or relative path of the KMS instance CA certificate file.
    
    The KMS instance CA certificate is used to check the validity of the KMS instance SSL certificate. For example, it checks whether the SSL certificate was issued by the corresponding CA, is within its validity period, and corresponds to the domain name of the KMS instance (endpoint).
    
    Go to the **Instances** page. On the instance details page, click **Download** in the **Instance CA Certificate** section.
    
    **secretsmanager.properties configuration file**
    
    The configuration file must be named `secretsmanager.properties`.
    
    The configuration parameter is `cache_client_dkms_config_info`. `cache_client_dkms_config_info` uses a JSON array format. You can configure multiple KMS instances to achieve higher service availability and disaster recovery.
    
    -   **Method 1: Retrieve the ClientKey password from an environment variable**
        
        The configuration file content is:
        
        ```
        cache_client_dkms_config_info=[{"regionId":"<your dkms regionId >","endpoint":"<your dkms endpoint>","passwordFromEnvVariable":"<YOUR_PASSWORD_ENV_VARIABLE>","clientKeyFile":"<your ClientKey file path>","ignoreSslCerts":false,"caFilePath":"<your CA certificate file path>"}]
        ```
        
        With this method, you also need to configure an environment variable with a custom name for the **Credential Password (ClientKeyPassword)**. After configuration, replace `<YOUR_PASSWORD_ENV_VARIABLE>` with the variable name. For example:
        
        ```
        cache_client_dkms_config_info=[{"regionId":"cn-hangzhou","endpoint":"kst-hzz634e67d126u9p9****.cryptoservice.kms.aliyuncs.com","passwordFromEnvVariable":"passwordFromEnvVariable","clientKeyFile":"C:\RamSecretPlugin\src\main\resources\clientKey_KAAP.json","ignoreSslCerts":false,"caFilePath":"C:\RamSecretPlugin\src\main\resources\PrivateKmsCA_kst-hzz634e67d126u9p9****.pem"}]
        ```
        
    -   **Method 2: Retrieve the ClientKey password from a file**
        
        By default, the downloaded file for the ClientKey **Credential Password (ClientKeyPassword)** is named `clientKey_****_Password.txt`. If you change the file name, you must replace `<your Client Key file path>` in the cache\_client\_dkms\_config\_info value with the new file path.
        
        The configuration file content is:
        
        ```
        cache_client_dkms_config_info=[{"regionId":"<your dkms regionId >","endpoint":"<your dkms endpoint>","passwordFromFilePath":"< your password file path >","clientKeyFile":"<your Client Key file path>","ignoreSslCerts":false,"caFilePath":"<your CA certificate file path>"}]
        ```
        
        For example:
        
        ```
        cache_client_dkms_config_info=[{"regionId":"cn-hangzhou","endpoint":"kst-hzz634e67d126u9p9****.cryptoservice.kms.aliyuncs.com","passwordFromFilePath":"C:\RamSecretPlugin\src\main\resources\clientKeyPassword.txt","clientKeyFile":"C:\RamSecretPlugin\src\main\resources\clientKey_KAAP.json","ignoreSslCerts":false,"caFilePath":"C:\RamSecretPlugin\src\main\resources\PrivateKmsCA_kst-hzz634e67d126u9p9****.pem"}]
        ```
        
    
    Description of each configuration item:
    
    **Configuration Item**
    
    **Parameter descriptions**
    
    **Description**
    
    **Region ID**
    
    The region ID where the KMS instance is located.
    
    For specific region IDs, see [Regions and zones](/help/en/kms/key-management-service/product-overview/supported-regions).
    
    **Endpoint**
    
    The domain name of the KMS instance. The format is `{instance ID}.kms.aliyuncs.com`.
    
    Go to the **Instances** page. On the instance details page, the **Instance VPC Endpoint** is the endpoint.
    
    **clientKeyFile**
    
    The absolute or relative path of the ClientKey file in JSON format.
    
    -   The ClientKey file contains the **Application Access Secret** **(ClientKeyContent)**, which is downloaded when a ClientKey is created in an application access point (AAP). The default file name is ClientKey\_\*\*\*\*\*\*.json.
        
    -   Credential password: The **Credential Password** **(ClientKeyPassword)** that is downloaded when you create the ClientKey in AAP. By default, this password is in the ClientKey\_\*\*\*\*\*\*\_password.txt file.
        
    
    **Important**
    
    The ClientKey file and the credential password have a one-to-one correspondence. You can only obtain them when you create the ClientKey. If you did not save them during creation, you must create a new ClientKey in the AAP. For more information, see [Create an application access point](/help/en/kms/key-management-service/user-guide/create-an-aap).
    
    **passwordFromFilePath** or **passwordFromEnvVariable**
    
    -   **passwordFromFilePath**: The absolute or relative path to the file that contains the credential password.
        
    -   **passwordFromEnvVariable**: The value is the name of an environment variable that contains the credential password.
        
    
    **Ignore SSL certificates**
    
    Specifies whether to ignore the validity check of the KMS instance SSL certificate. KMS instances have built-in SSL certificates and use the SSL/TLS protocol for authentication and encrypted communication. The valid values are:
    
    -   true: Ignores the validity check.
        
        **Note**
        
        If the value is set to true, you do not need to configure **caFilePath**.
        
    -   false: Performs the validity check.
        
    
    In a production environment, you must set this parameter to false.
    
    **caFilePath**
    
    The absolute or relative path of the KMS instance CA certificate file.
    
    The KMS instance CA certificate is used to check the validity of the KMS instance SSL certificate. For example, it checks whether the SSL certificate was issued by the corresponding CA, is within its validity period, and corresponds to the domain name of the KMS instance (endpoint).
    
    Go to the **Instances** page. On the instance details page, click **Download** in the **Instance CA Certificate** section.
    
    The following sample code shows how to retrieve a credential value. Replace `#secretName#` with your credential name.
    
    ```
    import com.aliyuncs.kms.secretsmanager.client.SecretCacheClient;
    import com.aliyuncs.kms.secretsmanager.client.SecretCacheClientBuilder;
    import com.aliyuncs.kms.secretsmanager.client.exception.CacheSecretException;
    import com.aliyuncs.kms.secretsmanager.client.model.SecretInfo;
    
    public class CacheClientEnvironmentSample {
    
        public static void main(String[] args) {
            try {
                // Build the secret client.
                SecretCacheClient client = SecretCacheClientBuilder.newClient();
                // Use the built client to get the credential information.
                SecretInfo secretInfo = client.getSecretInfo("#secretName#");
                System.out.println(secretInfo);
            } catch (CacheSecretException e) {
                e.printStackTrace();
            }
        }
    }
    ```
    
-   #### **Method 2: Initialize the client using a custom configuration file**
    
    You must define the configuration file name and path.
    
    **Configuration file**
    
    The configuration parameter is `cache_client_dkms_config_info`. `cache_client_dkms_config_info` uses a JSON array format. You can configure multiple KMS instances to achieve higher service availability and disaster recovery.
    
    -   **Method 1: Retrieve the ClientKey password from an environment variable**
        
        The configuration file content is:
        
        ```
        cache_client_dkms_config_info=[{"regionId":"<your dkms regionId >","endpoint":"<your dkms endpoint>","passwordFromEnvVariable":"<YOUR_PASSWORD_ENV_VARIABLE>","clientKeyFile":"<your ClientKey file path>","ignoreSslCerts":false,"caFilePath":"<your CA certificate file path>"}]
        ```
        
        With this method, you also need to configure an environment variable with a custom name for the **Credential Password (ClientKeyPassword)**. After configuration, replace `<YOUR_PASSWORD_ENV_VARIABLE>` with the variable name. For example:
        
        ```
        cache_client_dkms_config_info=[{"regionId":"cn-hangzhou","endpoint":"kst-hzz634e67d126u9p9****.cryptoservice.kms.aliyuncs.com","passwordFromEnvVariable":"passwordFromEnvVariable","clientKeyFile":"C:\RamSecretPlugin\src\main\resources\clientKey_KAAP.json","ignoreSslCerts":false,"caFilePath":"C:\RamSecretPlugin\src\main\resources\PrivateKmsCA_kst-hzz634e67d126u9p9****.pem"}]
        ```
        
    -   **Method 2: Retrieve the ClientKey password from a file**
        
        By default, the downloaded file for the ClientKey **Credential Password (ClientKeyPassword)** is named `clientKey_****_Password.txt`. If you change the file name, you must replace `<your Client Key file path>` in the cache\_client\_dkms\_config\_info value with the new file path.
        
        The configuration file content is:
        
        ```
        cache_client_dkms_config_info=[{"regionId":"<your dkms regionId >","endpoint":"<your dkms endpoint>","passwordFromFilePath":"< your password file path >","clientKeyFile":"<your Client Key file path>","ignoreSslCerts":false,"caFilePath":"<your CA certificate file path>"}]
        ```
        
        For example:
        
        ```
        cache_client_dkms_config_info=[{"regionId":"cn-hangzhou","endpoint":"kst-hzz634e67d126u9p9****.cryptoservice.kms.aliyuncs.com","passwordFromFilePath":"C:\RamSecretPlugin\src\main\resources\clientKeyPassword.txt","clientKeyFile":"C:\RamSecretPlugin\src\main\resources\clientKey_KAAP.json","ignoreSslCerts":false,"caFilePath":"C:\RamSecretPlugin\src\main\resources\PrivateKmsCA_kst-hzz634e67d126u9p9****.pem"}]
        ```
        
    
    Description of each configuration item:
    
    **Configuration Item**
    
    **Parameter descriptions**
    
    **Description**
    
    **Region ID**
    
    The region ID where the KMS instance is located.
    
    For specific region IDs, see [Regions and zones](/help/en/kms/key-management-service/product-overview/supported-regions).
    
    **Endpoint**
    
    The domain name of the KMS instance. The format is `{instance ID}.kms.aliyuncs.com`.
    
    Go to the **Instances** page. On the instance details page, the **Instance VPC Endpoint** is the endpoint.
    
    **clientKeyFile**
    
    The absolute or relative path of the ClientKey file in JSON format.
    
    -   The ClientKey file contains the **Application Access Secret** **(ClientKeyContent)**, which is downloaded when a ClientKey is created in an application access point (AAP). The default file name is ClientKey\_\*\*\*\*\*\*.json.
        
    -   Credential password: The **Credential Password** **(ClientKeyPassword)** that is downloaded when you create the ClientKey in AAP. By default, this password is in the ClientKey\_\*\*\*\*\*\*\_password.txt file.
        
    
    **Important**
    
    The ClientKey file and the credential password have a one-to-one correspondence. You can only obtain them when you create the ClientKey. If you did not save them during creation, you must create a new ClientKey in the AAP. For more information, see [Create an application access point](/help/en/kms/key-management-service/user-guide/create-an-aap).
    
    **passwordFromFilePath** or **passwordFromEnvVariable**
    
    -   **passwordFromFilePath**: The absolute or relative path to the file that contains the credential password.
        
    -   **passwordFromEnvVariable**: The value is the name of an environment variable that contains the credential password.
        
    
    **Ignore SSL certificates**
    
    Specifies whether to ignore the validity check of the KMS instance SSL certificate. KMS instances have built-in SSL certificates and use the SSL/TLS protocol for authentication and encrypted communication. The valid values are:
    
    -   true: Ignores the validity check.
        
        **Note**
        
        If the value is set to true, you do not need to configure **caFilePath**.
        
    -   false: Performs the validity check.
        
    
    In a production environment, you must set this parameter to false.
    
    **caFilePath**
    
    The absolute or relative path of the KMS instance CA certificate file.
    
    The KMS instance CA certificate is used to check the validity of the KMS instance SSL certificate. For example, it checks whether the SSL certificate was issued by the corresponding CA, is within its validity period, and corresponds to the domain name of the KMS instance (endpoint).
    
    Go to the **Instances** page. On the instance details page, click **Download** in the **Instance CA Certificate** section.
    
    The following sample code shows how to retrieve a credential value. Replace `#customConfigFileName#` with your custom configuration file name and `#secretName#` with your credential name.
    
    ```
    import com.aliyuncs.kms.secretsmanager.client.SecretCacheClient;
    import com.aliyuncs.kms.secretsmanager.client.SecretCacheClientBuilder;
    import com.aliyuncs.kms.secretsmanager.client.exception.CacheSecretException;
    import com.aliyuncs.kms.secretsmanager.client.model.SecretInfo;
    import com.aliyuncs.kms.secretsmanager.client.service.BaseSecretManagerClientBuilder;
    
    public class CacheClientCustomConfigFileSample {
    
        public static void main(String[] args) {
            try {
                SecretCacheClient client = SecretCacheClientBuilder.newCacheClientBuilder(
                        BaseSecretManagerClientBuilder.standard().withCustomConfigFile("#customConfigFileName#").build()).build();
                SecretInfo secretInfo = client.getSecretInfo("#secretName#");
                System.out.println(secretInfo);
            } catch (CacheSecretException e) {
                System.out.println("CacheSecretException:" + e.getMessage());
            }
        }
    }
    ```
    
-   ### **Method 3: Initialize the client by specifying parameters (accessKey, accessSecret, regionId)**
    
    This method applies only to scenarios where AccessKey is used for authentication.
    
    **Note**
    
    The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using the AccessKey pair to perform operations is a high-risk operation. In addition, use a RAM user to call API operations or perform routine O&M. We recommend that you do not save the AccessKey ID and AccessKey Secret in your project code. If you do, the AccessKey pair may be leaked and the security of all the resources that belong to your account may be compromised.
    
    In this example, the AccessKey pair is saved in ALIBABA\_CLOUD\_ACCESS\_KEY\_ID and ALIBABA\_CLOUD\_ACCESS\_KEY\_SECRET environment variables to implement identity authentication.
    
    -   For more information about how to configure authentication information, see [Manage access credentials](/help/en/sdk/developer-reference/credentials).
        
    -   The method used to configure environment variables varies based on the operating system. For more information, see [Configure environment variables in Linux, macOS, and Windows](/help/en/sdk/developer-reference/configure-the-alibaba-cloud-accesskey-environment-variable-on-linux-macos-and-windows-systems).
        
    
    The following sample code shows how to retrieve a credential value. Replace `#regionId#` with the actual region ID and `#secretName#` with your credential name.
    
    ```
    import com.aliyuncs.kms.secretsmanager.client.SecretCacheClient;
    import com.aliyuncs.kms.secretsmanager.client.SecretCacheClientBuilder;
    import com.aliyuncs.kms.secretsmanager.client.exception.CacheSecretException;
    import com.aliyuncs.kms.secretsmanager.client.model.SecretInfo;
    import com.aliyuncs.kms.secretsmanager.client.service.BaseSecretManagerClientBuilder;
    import com.aliyuncs.kms.secretsmanager.client.utils.CredentialsProviderUtils;
    
    public class CacheClientSimpleParametersSample {
    
        public static void main(String[] args) {
            try {
                SecretCacheClient client = SecretCacheClientBuilder.newCacheClientBuilder(
                        BaseSecretManagerClientBuilder.standard().withCredentialsProvider(CredentialsProviderUtils
                                .withAccessKey(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_ID"), System.getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET"))).withRegion("#regionId#").build()).build();
                SecretInfo secretInfo = client.getSecretInfo("#secretName#");
                System.out.println(secretInfo);
            } catch (CacheSecretException e) {
                e.printStackTrace();
            }
        }
    }
    ```
    

## Python

The sample code for retrieving a credential value varies depending on the client initialization method. You can choose one of the following methods.

-   #### **Method 1: Initialize the client using system environment variables or a secretsmanager.properties configuration file**
    
    You can use either environment variables or a secretsmanager.properties configuration file.
    
    **Environment variables**
    
    -   **Method 1: Retrieve the ClientKey password from an environment variable**
        
        **Parameter**
        
        **Parameter value**
        
        cache\_client\_dkms\_config\_info
        
        The parameter value format is `[{"regionId":"<your dkms regionId >","endpoint":"<your dkms endpoint>","passwordFromEnvVariable":"<YOUR_PASSWORD_ENV_VARIABLE>","clientKeyFile":"<your ClientKey file path>","ignoreSslCerts":false,"caFilePath":"<your CA certificate file path>"}]`.
        
        With this method, you also need to configure the content of the ClientKey's **Credential Password (ClientKeyPassword)** in an environment variable. You can customize the variable name. After configuration, replace `<YOUR_PASSWORD_ENV_VARIABLE>` with the variable name.
        
        For example, on a Linux operating system:
        
        ```
        export cache_client_dkms_config_info=[{"regionId":"cn-hangzhou","endpoint":"kst-hzz634e67d126u9p9****.cryptoservice.kms.aliyuncs.com","passwordFromEnvVariable":"passwordFromEnvVariable","clientKeyFile":"C:\RamSecretPlugin\src\main\resources\clientKey_KAAP.json","ignoreSslCerts":false,"caFilePath":"C:\RamSecretPlugin\src\main\resources\PrivateKmsCA_kst-hzz634e67d126u9p9****.pem"}]
        ```
        
    -   **Method 2: Retrieve the ClientKey password from a file**
        
        The downloaded ClientKey **Credential Password (ClientKeyPassword)** file is named `clientKey_****_Password.txt` by default. You can change the file name, but you must replace `<your Client Key file path>` in the value of cache\_client\_dkms\_config\_info with the new file path.
        
        **Parameter**
        
        **Parameter value**
        
        cache\_client\_dkms\_config\_info
        
        The parameter value format is: `[{"regionId":"<your dkms regionId >","endpoint":"<your dkms endpoint>","passwordFromFilePath":"< your password file path >","clientKeyFile":"<your Client Key file path>","ignoreSslCerts":false,"caFilePath":"<your CA certificate file path>"}]`.
        
        For example, on a Linux operating system:
        
        ```
        export cache_client_dkms_config_info=[{"regionId":"cn-hangzhou","endpoint":"kst-hzz634e67d126u9p9****.cryptoservice.kms.aliyuncs.com","passwordFromFilePath":"C:\RamSecretPlugin\src\main\resources\clientKeyPassword.txt","clientKeyFile":"C:\RamSecretPlugin\src\main\resources\clientKey_KAAP.json","ignoreSslCerts":false,"caFilePath":"C:\RamSecretPlugin\src\main\resources\PrivateKmsCA_kst-hzz634e67d126u9p9****.pem"}]
        ```
        
    
    Description of each configuration item:
    
    **Configuration Item**
    
    **Parameter descriptions**
    
    **Description**
    
    **Region ID**
    
    The region ID where the KMS instance is located.
    
    For specific region IDs, see [Regions and zones](/help/en/kms/key-management-service/product-overview/supported-regions).
    
    **Endpoint**
    
    The domain name of the KMS instance. The format is `{instance ID}.kms.aliyuncs.com`.
    
    Go to the **Instances** page. On the instance details page, the **Instance VPC Endpoint** is the endpoint.
    
    **clientKeyFile**
    
    The absolute or relative path of the ClientKey file in JSON format.
    
    -   The ClientKey file contains the **Application Access Secret** **(ClientKeyContent)**, which is downloaded when a ClientKey is created in an application access point (AAP). The default file name is ClientKey\_\*\*\*\*\*\*.json.
        
    -   Credential password: The **Credential Password** **(ClientKeyPassword)** that is downloaded when you create the ClientKey in AAP. By default, this password is in the ClientKey\_\*\*\*\*\*\*\_password.txt file.
        
    
    **Important**
    
    The ClientKey file and the credential password have a one-to-one correspondence. You can only obtain them when you create the ClientKey. If you did not save them during creation, you must create a new ClientKey in the AAP. For more information, see [Create an application access point](/help/en/kms/key-management-service/user-guide/create-an-aap).
    
    **passwordFromFilePath** or **passwordFromEnvVariable**
    
    -   **passwordFromFilePath**: The absolute or relative path to the file that contains the credential password.
        
    -   **passwordFromEnvVariable**: The value is the name of an environment variable that contains the credential password.
        
    
    **Ignore SSL certificates**
    
    Specifies whether to ignore the validity check of the KMS instance SSL certificate. KMS instances have built-in SSL certificates and use the SSL/TLS protocol for authentication and encrypted communication. The valid values are:
    
    -   true: Ignores the validity check.
        
        **Note**
        
        If the value is set to true, you do not need to configure **caFilePath**.
        
    -   false: Performs the validity check.
        
    
    In a production environment, you must set this parameter to false.
    
    **caFilePath**
    
    The absolute or relative path of the KMS instance CA certificate file.
    
    The KMS instance CA certificate is used to check the validity of the KMS instance SSL certificate. For example, it checks whether the SSL certificate was issued by the corresponding CA, is within its validity period, and corresponds to the domain name of the KMS instance (endpoint).
    
    Go to the **Instances** page. On the instance details page, click **Download** in the **Instance CA Certificate** section.
    
    **secretsmanager.properties configuration file**
    
    The configuration file must be named `secretsmanager.properties`.
    
    The configuration parameter is `cache_client_dkms_config_info`. `cache_client_dkms_config_info` uses a JSON array format. You can configure multiple KMS instances to achieve higher service availability and disaster recovery.
    
    -   **Method 1: Retrieve the ClientKey password from an environment variable**
        
        The configuration file content is:
        
        ```
        cache_client_dkms_config_info=[{"regionId":"<your dkms regionId >","endpoint":"<your dkms endpoint>","passwordFromEnvVariable":"<YOUR_PASSWORD_ENV_VARIABLE>","clientKeyFile":"<your ClientKey file path>","ignoreSslCerts":false,"caFilePath":"<your CA certificate file path>"}]
        ```
        
        With this method, you also need to configure an environment variable with a custom name for the **Credential Password (ClientKeyPassword)**. After configuration, replace `<YOUR_PASSWORD_ENV_VARIABLE>` with the variable name. For example:
        
        ```
        cache_client_dkms_config_info=[{"regionId":"cn-hangzhou","endpoint":"kst-hzz634e67d126u9p9****.cryptoservice.kms.aliyuncs.com","passwordFromEnvVariable":"passwordFromEnvVariable","clientKeyFile":"C:\RamSecretPlugin\src\main\resources\clientKey_KAAP.json","ignoreSslCerts":false,"caFilePath":"C:\RamSecretPlugin\src\main\resources\PrivateKmsCA_kst-hzz634e67d126u9p9****.pem"}]
        ```
        
    -   **Method 2: Retrieve the ClientKey password from a file**
        
        By default, the downloaded file for the ClientKey **Credential Password (ClientKeyPassword)** is named `clientKey_****_Password.txt`. If you change the file name, you must replace `<your Client Key file path>` in the cache\_client\_dkms\_config\_info value with the new file path.
        
        The configuration file content is:
        
        ```
        cache_client_dkms_config_info=[{"regionId":"<your dkms regionId >","endpoint":"<your dkms endpoint>","passwordFromFilePath":"< your password file path >","clientKeyFile":"<your Client Key file path>","ignoreSslCerts":false,"caFilePath":"<your CA certificate file path>"}]
        ```
        
        For example:
        
        ```
        cache_client_dkms_config_info=[{"regionId":"cn-hangzhou","endpoint":"kst-hzz634e67d126u9p9****.cryptoservice.kms.aliyuncs.com","passwordFromFilePath":"C:\RamSecretPlugin\src\main\resources\clientKeyPassword.txt","clientKeyFile":"C:\RamSecretPlugin\src\main\resources\clientKey_KAAP.json","ignoreSslCerts":false,"caFilePath":"C:\RamSecretPlugin\src\main\resources\PrivateKmsCA_kst-hzz634e67d126u9p9****.pem"}]
        ```
        
    
    Description of each configuration item:
    
    **Configuration Item**
    
    **Parameter descriptions**
    
    **Description**
    
    **Region ID**
    
    The region ID where the KMS instance is located.
    
    For specific region IDs, see [Regions and zones](/help/en/kms/key-management-service/product-overview/supported-regions).
    
    **Endpoint**
    
    The domain name of the KMS instance. The format is `{instance ID}.kms.aliyuncs.com`.
    
    Go to the **Instances** page. On the instance details page, the **Instance VPC Endpoint** is the endpoint.
    
    **clientKeyFile**
    
    The absolute or relative path of the ClientKey file in JSON format.
    
    -   The ClientKey file contains the **Application Access Secret** **(ClientKeyContent)**, which is downloaded when a ClientKey is created in an application access point (AAP). The default file name is ClientKey\_\*\*\*\*\*\*.json.
        
    -   Credential password: The **Credential Password** **(ClientKeyPassword)** that is downloaded when you create the ClientKey in AAP. By default, this password is in the ClientKey\_\*\*\*\*\*\*\_password.txt file.
        
    
    **Important**
    
    The ClientKey file and the credential password have a one-to-one correspondence. You can only obtain them when you create the ClientKey. If you did not save them during creation, you must create a new ClientKey in the AAP. For more information, see [Create an application access point](/help/en/kms/key-management-service/user-guide/create-an-aap).
    
    **passwordFromFilePath** or **passwordFromEnvVariable**
    
    -   **passwordFromFilePath**: The absolute or relative path to the file that contains the credential password.
        
    -   **passwordFromEnvVariable**: The value is the name of an environment variable that contains the credential password.
        
    
    **Ignore SSL certificates**
    
    Specifies whether to ignore the validity check of the KMS instance SSL certificate. KMS instances have built-in SSL certificates and use the SSL/TLS protocol for authentication and encrypted communication. The valid values are:
    
    -   true: Ignores the validity check.
        
        **Note**
        
        If the value is set to true, you do not need to configure **caFilePath**.
        
    -   false: Performs the validity check.
        
    
    In a production environment, you must set this parameter to false.
    
    **caFilePath**
    
    The absolute or relative path of the KMS instance CA certificate file.
    
    The KMS instance CA certificate is used to check the validity of the KMS instance SSL certificate. For example, it checks whether the SSL certificate was issued by the corresponding CA, is within its validity period, and corresponds to the domain name of the KMS instance (endpoint).
    
    Go to the **Instances** page. On the instance details page, click **Download** in the **Instance CA Certificate** section.
    
    The following sample code shows how to retrieve a credential value. Replace `#secretName#` with your credential name.
    
    ```
    from alibaba_cloud_secretsmanager_client.secret_manager_cache_client_builder import SecretManagerCacheClientBuilder
    
    if __name__ == '__main__':
        # Build the secret client.
        secret_cache_client = SecretManagerCacheClientBuilder.new_client()
        # Use the built client to get the credential information.
        secret_info = secret_cache_client.get_secret_info("#secretName#")
        print(secret_info.__dict__)
    ```
    
-   #### **Method 2: Initialize the client by specifying parameters (accessKey, accessSecret, regionId)**
    
    This method applies only to scenarios where AccessKey is used for authentication.
    
    **Note**
    
    The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using the AccessKey pair to perform operations is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O&M. We recommend that you do not save the AccessKey ID and AccessKey Secret in your project code. Otherwise, the AccessKey pair may be leaked and the security of all the resources that belong to your account may be compromised.
    
    In this example, the AccessKey pair is saved in ALIBABA\_CLOUD\_ACCESS\_KEY\_ID and ALIBABA\_CLOUD\_ACCESS\_KEY\_SECRET environment variables to implement identity authentication.
    
    -   For more information about how to configure authentication information, see [Manage access credentials](/help/en/sdk/developer-reference/instantiate-a-client-and-configure-a-credential).
        
    -   The method that is used to configure environment variables varies based on the operating system. For more information, see [Configure environment variables in Linux, macOS, and Windows](/help/en/sdk/developer-reference/configure-the-alibaba-cloud-accesskey-environment-variable-on-linux-macos-and-windows-systems).
        
    
    The following sample code shows how to retrieve a credential value. Replace `#regionId#` with the actual region ID and `#secretName#` with your credential name.
    
    ```
    import os
    
    from alibaba_cloud_secretsmanager_client.secret_manager_cache_client_builder import SecretManagerCacheClientBuilder
    from alibaba_cloud_secretsmanager_client.service.default_secret_manager_client_builder import DefaultSecretManagerClientBuilder
    
    if __name__ == '__main__':
        secret_cache_client = SecretManagerCacheClientBuilder.new_cache_client_builder(DefaultSecretManagerClientBuilder.standard() \
            .with_access_key(os.getenv("ALIBABA_CLOUD_ACCESS_KEY_ID"), os.getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET")) \
            .with_region("#regionId#").build()) \
        .build();
        secret_info = secret_cache_client.get_secret_info("#secretName#")
        print(secret_info.__dict__)
    ```
    

## **Go**

The sample code for retrieving a credential value varies depending on the client initialization method. You can choose one of the following methods.

-   #### **Method 1: Initialize the client using system environment variables or a secretsmanager.properties configuration file**
    
    You can use either environment variables or a secretsmanager.properties configuration file.
    
    **Environment variables**
    
    -   **Method 1: Retrieve the ClientKey password from an environment variable**
        
        **Parameter**
        
        **Parameter value**
        
        cache\_client\_dkms\_config\_info
        
        The parameter value format is `[{"regionId":"<your dkms regionId >","endpoint":"<your dkms endpoint>","passwordFromEnvVariable":"<YOUR_PASSWORD_ENV_VARIABLE>","clientKeyFile":"<your ClientKey file path>","ignoreSslCerts":false,"caFilePath":"<your CA certificate file path>"}]`.
        
        With this method, you also need to configure the content of the ClientKey's **Credential Password (ClientKeyPassword)** in an environment variable. You can customize the variable name. After configuration, replace `<YOUR_PASSWORD_ENV_VARIABLE>` with the variable name.
        
        For example, on a Linux operating system:
        
        ```
        export cache_client_dkms_config_info=[{"regionId":"cn-hangzhou","endpoint":"kst-hzz634e67d126u9p9****.cryptoservice.kms.aliyuncs.com","passwordFromEnvVariable":"passwordFromEnvVariable","clientKeyFile":"C:\RamSecretPlugin\src\main\resources\clientKey_KAAP.json","ignoreSslCerts":false,"caFilePath":"C:\RamSecretPlugin\src\main\resources\PrivateKmsCA_kst-hzz634e67d126u9p9****.pem"}]
        ```
        
    -   **Method 2: Retrieve the ClientKey password from a file**
        
        The downloaded ClientKey **Credential Password (ClientKeyPassword)** file is named `clientKey_****_Password.txt` by default. You can change the file name, but you must replace `<your Client Key file path>` in the value of cache\_client\_dkms\_config\_info with the new file path.
        
        **Parameter**
        
        **Parameter value**
        
        cache\_client\_dkms\_config\_info
        
        The parameter value format is: `[{"regionId":"<your dkms regionId >","endpoint":"<your dkms endpoint>","passwordFromFilePath":"< your password file path >","clientKeyFile":"<your Client Key file path>","ignoreSslCerts":false,"caFilePath":"<your CA certificate file path>"}]`.
        
        For example, on a Linux operating system:
        
        ```
        export cache_client_dkms_config_info=[{"regionId":"cn-hangzhou","endpoint":"kst-hzz634e67d126u9p9****.cryptoservice.kms.aliyuncs.com","passwordFromFilePath":"C:\RamSecretPlugin\src\main\resources\clientKeyPassword.txt","clientKeyFile":"C:\RamSecretPlugin\src\main\resources\clientKey_KAAP.json","ignoreSslCerts":false,"caFilePath":"C:\RamSecretPlugin\src\main\resources\PrivateKmsCA_kst-hzz634e67d126u9p9****.pem"}]
        ```
        
    
    Description of each configuration item:
    
    **Configuration Item**
    
    **Parameter descriptions**
    
    **Description**
    
    **Region ID**
    
    The region ID where the KMS instance is located.
    
    For specific region IDs, see [Regions and zones](/help/en/kms/key-management-service/product-overview/supported-regions).
    
    **Endpoint**
    
    The domain name of the KMS instance. The format is `{instance ID}.kms.aliyuncs.com`.
    
    Go to the **Instances** page. On the instance details page, the **Instance VPC Endpoint** is the endpoint.
    
    **clientKeyFile**
    
    The absolute or relative path of the ClientKey file in JSON format.
    
    -   The ClientKey file contains the **Application Access Secret** **(ClientKeyContent)**, which is downloaded when a ClientKey is created in an application access point (AAP). The default file name is ClientKey\_\*\*\*\*\*\*.json.
        
    -   Credential password: The **Credential Password** **(ClientKeyPassword)** that is downloaded when you create the ClientKey in AAP. By default, this password is in the ClientKey\_\*\*\*\*\*\*\_password.txt file.
        
    
    **Important**
    
    The ClientKey file and the credential password have a one-to-one correspondence. You can only obtain them when you create the ClientKey. If you did not save them during creation, you must create a new ClientKey in the AAP. For more information, see [Create an application access point](/help/en/kms/key-management-service/user-guide/create-an-aap).
    
    **passwordFromFilePath** or **passwordFromEnvVariable**
    
    -   **passwordFromFilePath**: The absolute or relative path to the file that contains the credential password.
        
    -   **passwordFromEnvVariable**: The value is the name of an environment variable that contains the credential password.
        
    
    **Ignore SSL certificates**
    
    Specifies whether to ignore the validity check of the KMS instance SSL certificate. KMS instances have built-in SSL certificates and use the SSL/TLS protocol for authentication and encrypted communication. The valid values are:
    
    -   true: Ignores the validity check.
        
        **Note**
        
        If the value is set to true, you do not need to configure **caFilePath**.
        
    -   false: Performs the validity check.
        
    
    In a production environment, you must set this parameter to false.
    
    **caFilePath**
    
    The absolute or relative path of the KMS instance CA certificate file.
    
    The KMS instance CA certificate is used to check the validity of the KMS instance SSL certificate. For example, it checks whether the SSL certificate was issued by the corresponding CA, is within its validity period, and corresponds to the domain name of the KMS instance (endpoint).
    
    Go to the **Instances** page. On the instance details page, click **Download** in the **Instance CA Certificate** section.
    
    **secretsmanager.properties configuration file**
    
    The configuration file must be named `secretsmanager.properties`.
    
    The configuration parameter is `cache_client_dkms_config_info`. `cache_client_dkms_config_info` uses a JSON array format. You can configure multiple KMS instances to achieve higher service availability and disaster recovery.
    
    -   **Method 1: Retrieve the ClientKey password from an environment variable**
        
        The configuration file content is:
        
        ```
        cache_client_dkms_config_info=[{"regionId":"<your dkms regionId >","endpoint":"<your dkms endpoint>","passwordFromEnvVariable":"<YOUR_PASSWORD_ENV_VARIABLE>","clientKeyFile":"<your ClientKey file path>","ignoreSslCerts":false,"caFilePath":"<your CA certificate file path>"}]
        ```
        
        With this method, you also need to configure an environment variable with a custom name for the **Credential Password (ClientKeyPassword)**. After configuration, replace `<YOUR_PASSWORD_ENV_VARIABLE>` with the variable name. For example:
        
        ```
        cache_client_dkms_config_info=[{"regionId":"cn-hangzhou","endpoint":"kst-hzz634e67d126u9p9****.cryptoservice.kms.aliyuncs.com","passwordFromEnvVariable":"passwordFromEnvVariable","clientKeyFile":"C:\RamSecretPlugin\src\main\resources\clientKey_KAAP.json","ignoreSslCerts":false,"caFilePath":"C:\RamSecretPlugin\src\main\resources\PrivateKmsCA_kst-hzz634e67d126u9p9****.pem"}]
        ```
        
    -   **Method 2: Retrieve the ClientKey password from a file**
        
        By default, the downloaded file for the ClientKey **Credential Password (ClientKeyPassword)** is named `clientKey_****_Password.txt`. If you change the file name, you must replace `<your Client Key file path>` in the cache\_client\_dkms\_config\_info value with the new file path.
        
        The configuration file content is:
        
        ```
        cache_client_dkms_config_info=[{"regionId":"<your dkms regionId >","endpoint":"<your dkms endpoint>","passwordFromFilePath":"< your password file path >","clientKeyFile":"<your Client Key file path>","ignoreSslCerts":false,"caFilePath":"<your CA certificate file path>"}]
        ```
        
        For example:
        
        ```
        cache_client_dkms_config_info=[{"regionId":"cn-hangzhou","endpoint":"kst-hzz634e67d126u9p9****.cryptoservice.kms.aliyuncs.com","passwordFromFilePath":"C:\RamSecretPlugin\src\main\resources\clientKeyPassword.txt","clientKeyFile":"C:\RamSecretPlugin\src\main\resources\clientKey_KAAP.json","ignoreSslCerts":false,"caFilePath":"C:\RamSecretPlugin\src\main\resources\PrivateKmsCA_kst-hzz634e67d126u9p9****.pem"}]
        ```
        
    
    Description of each configuration item:
    
    **Configuration Item**
    
    **Parameter descriptions**
    
    **Description**
    
    **Region ID**
    
    The region ID where the KMS instance is located.
    
    For specific region IDs, see [Regions and zones](/help/en/kms/key-management-service/product-overview/supported-regions).
    
    **Endpoint**
    
    The domain name of the KMS instance. The format is `{instance ID}.kms.aliyuncs.com`.
    
    Go to the **Instances** page. On the instance details page, the **Instance VPC Endpoint** is the endpoint.
    
    **clientKeyFile**
    
    The absolute or relative path of the ClientKey file in JSON format.
    
    -   The ClientKey file contains the **Application Access Secret** **(ClientKeyContent)**, which is downloaded when a ClientKey is created in an application access point (AAP). The default file name is ClientKey\_\*\*\*\*\*\*.json.
        
    -   Credential password: The **Credential Password** **(ClientKeyPassword)** that is downloaded when you create the ClientKey in AAP. By default, this password is in the ClientKey\_\*\*\*\*\*\*\_password.txt file.
        
    
    **Important**
    
    The ClientKey file and the credential password have a one-to-one correspondence. You can only obtain them when you create the ClientKey. If you did not save them during creation, you must create a new ClientKey in the AAP. For more information, see [Create an application access point](/help/en/kms/key-management-service/user-guide/create-an-aap).
    
    **passwordFromFilePath** or **passwordFromEnvVariable**
    
    -   **passwordFromFilePath**: The absolute or relative path to the file that contains the credential password.
        
    -   **passwordFromEnvVariable**: The value is the name of an environment variable that contains the credential password.
        
    
    **Ignore SSL certificates**
    
    Specifies whether to ignore the validity check of the KMS instance SSL certificate. KMS instances have built-in SSL certificates and use the SSL/TLS protocol for authentication and encrypted communication. The valid values are:
    
    -   true: Ignores the validity check.
        
        **Note**
        
        If the value is set to true, you do not need to configure **caFilePath**.
        
    -   false: Performs the validity check.
        
    
    In a production environment, you must set this parameter to false.
    
    **caFilePath**
    
    The absolute or relative path of the KMS instance CA certificate file.
    
    The KMS instance CA certificate is used to check the validity of the KMS instance SSL certificate. For example, it checks whether the SSL certificate was issued by the corresponding CA, is within its validity period, and corresponds to the domain name of the KMS instance (endpoint).
    
    Go to the **Instances** page. On the instance details page, click **Download** in the **Instance CA Certificate** section.
    
    The following sample code shows how to retrieve a credential value. Replace `#secretName#` with your credential name.
    
    ```
    package main
    
    import (
        "fmt"
        "github.com/aliyun/aliyun-secretsmanager-client-go/sdk"
    )
    func main() { 
       // Build the secret client.
        client, err := sdk.NewClient()
        if err != nil {
            // Handle exceptions
            panic(err)
        }
       // Use the built client to get the credential information.
        secretInfo, err := client.GetSecretInfo("#secretName#")
        if err != nil {
            // Handle exceptions
            panic(err)
        }
        fmt.Printf("SecretValue:%s\n",secretInfo.SecretValue)
    }
    ```
    
-   #### **Initialize the client by specifying parameters (accessKey, accessSecret, regionId)**
    
    This method applies only to scenarios where AccessKey is used for authentication.
    
    **Note**
    
    The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using the AccessKey pair to perform operations is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O&M. We recommend that you do not save the AccessKey ID and AccessKey Secret in your project code. Otherwise, the AccessKey pair may be leaked and the security of all the resources that belong to your account may be compromised.
    
    In this example, the AccessKey pair is saved in ALIBABA\_CLOUD\_ACCESS\_KEY\_ID and ALIBABA\_CLOUD\_ACCESS\_KEY\_SECRET environment variables to implement identity authentication.
    
    -   For more information about how to configure authentication information, see [Manage access credentials](/help/en/sdk/developer-reference/create-a-client).
        
    -   The method that is used to configure environment variables varies based on the operating system. For more information, see [Configure environment variables in Linux, macOS, and Windows](/help/en/sdk/developer-reference/configure-the-alibaba-cloud-accesskey-environment-variable-on-linux-macos-and-windows-systems).
        
    
    The following sample code shows how to retrieve a credential value. Replace `#regionId#` with the actual region ID and `#secretName#` with your credential name.
    
    ```
    package main
    
    import (
    	"github.com/aliyun/aliyun-secretsmanager-client-go/sdk/service"
    	"github.com/aliyun/aliyun-secretsmanager-client-go/sdk"
    	"os"
    )
    
    func main() {
    	client, err := sdk.NewSecretCacheClientBuilder(service.NewDefaultSecretManagerClientBuilder().Standard().WithAccessKey(os.Getenv("ALIBABA_CLOUD_ACCESS_KEY_ID"), os.Getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET")).WithRegion("#regionId#").Build()).Build()
    	if err != nil {
    		// Handle exceptions
    		panic(err)
    	}
    	secretInfo, err := client.GetSecretInfo("#secretName#")
    	if err != nil {
    		// Handle exceptions
    		panic(err)
    	}
    }
    ```

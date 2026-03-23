Key Management Service (KMS) allows you to create secrets to store sensitive data. You can integrate secrets into your applications. This helps you manage sensitive data in a centralized manner. This topic describes how to create and retrieve secrets.

## Background information

KMS allows you to manage the lifecycles of secrets. For example, you can create, delete, and modify a secret. In application code, you can retrieve secrets by using an SDK. This helps prevent sensitive data leaks caused by hardcoded secrets in applications.

KMS allows you to manage generic secrets, Resource Access Management (RAM) secrets, database secrets, and Elastic Compute Service (ECS) secrets. For more information about secrets, see [Overview](/help/en/kms/key-management-service/user-guide/secret-management-overview#concept-2403154).

## Usage notes

KMS uses a key to encrypt a secret. The key and the secret must belong to the same KMS instance, and the key must be a symmetric key. For more information about the symmetric keys that are supported by KMS, see [Understanding KMS keys](/help/en/kms/key-management-service/user-guide/overview-of-key-management#section-94o-2vp-13j).

## Prerequisites

-   A KMS instance is created and enabled. For more information, see [Purchase and enable a KMS instance](/help/en/kms/key-management-service/getting-started/purchase-and-enable-a-kms-instance#task-2289651).
    
-   A symmetric key for encrypting secrets is created in a KMS instance. For more information, see [Create a key](/help/en/kms/key-management-service/user-guide/manage-keys-2#37081e7032asm).
    

## Step 1: Create a secret

When you create a secret, you can configure secret rotation. KMS periodically updates the secret to ensure the security of the secret.

1.  Log on to the [KMS console](https://yundun.console.alibabacloud.com/?p=kms#/keyList/base). In the top navigation bar, select a region. In the navigation pane on the left, choose **Resource** > **Secrets**.
    
2.  On the **Secrets** page, click a tab based on the type of secret that you want to create, select the required instance ID from the **Instance ID** drop-down list, and then click **Create a secret**. In the panel that appears, configure the parameters and click **OK**.
    
    ## Generic secret
    
    **Note**
    
    You cannot configure secret rotation when you create a generic secret. For more information about how to rotate a generic secret, see [Manage and use generic secrets](/help/en/kms/key-management-service/user-guide/manage-and-use-generic-secrets#task-2292627).
    
    **Parameter**
    
    **Description**
    
    **Secret Name**
    
    The name of the secret. The secret name is unique within the current region.
    
    **Secret Value**
    
    The type of sensitive data that you want to manage. Valid values: **Secret Key/Value** and **Plain Text**.
    
    The value cannot exceed 30,720 bytes in length, which is equivalent to 30 KB in size.
    
    **Initial Version**
    
    The initial version of the secret. Default value: **v1**. You can also specify a custom version number.
    
    **CMK**
    
    The key that is used to encrypt the current value of the secret.
    
    **Important**
    
    -   Your key and secret must belong to the same KMS instance. The key must be a symmetric key. For more information about the symmetric keys supported by KMS, see [Key specifications for symmetric and Asymmetric encryption](/help/en/kms/key-management-service/user-guide/key-types-and-specifications#task-2292624).
        
    -   If you are a RAM user or a RAM role, you must have the permissions to call the GenerateDataKey operation by using a key.
        
    
    **Tag**
    
    The tag that you want to add to the secret. You can use tags to classify and manage secrets. A tag consists of a key-value pair.
    
    **Note**
    
    -   A tag key or a tag value can be up to 128 characters in length and can contain letters, digits, forward slashes (/), backslashes (\\), underscores (\_), hyphens (-), periods (.), plus signs (+), equal sign (=), colons (:), at signs (@), and spaces.
        
    -   A tag key cannot start with aliyun or acs:.
        
    -   You can configure up to 20 key-value pairs for each secret.
        
    
    **Description**
    
    The description of the secret.
    
    **Advanced Settings** > **Policy Settings**
    
    The policy settings of the secret. For more information, see [Overview](/help/en/kms/key-management-service/security-and-compliance/overview-of-secret-policies).
    
    You can use the default policy and then modify the policy based on your business requirements after you create the secret.
    
    ## RAM secret
    
    **Parameter**
    
    **Description**
    
    **Select RAM User**
    
    The RAM user for which you want to create the secret. The selected RAM user must have at least one AccessKey pair. For more information, see [Create an AccessKey pair](/help/en/ram/user-guide/create-an-accesskey-pair).
    
    The secret name is automatically generated based on the name of the RAM user. The secret name is unique within the current region.
    
    **Secret Value**
    
    The AccessKey secret of the RAM user.
    
    The value cannot exceed 30,720 bytes in length, which is equivalent to 30 KB in size.
    
    **CMK**
    
    The key that is used to encrypt the current value of the secret.
    
    **Important**
    
    -   Your key and secret must belong to the same KMS instance. The key must be a symmetric key. For more information about the symmetric keys supported by KMS, see [Key specifications for symmetric and Asymmetric encryption](/help/en/kms/key-management-service/user-guide/key-types-and-specifications#task-2292624).
        
    -   If you are a RAM user or a RAM role, you must have the permissions to call the GenerateDataKey operation by using a key.
        
    
    **Tag**
    
    The tag that you want to add to the secret. You can use tags to classify and manage secrets. A tag consists of a key-value pair.
    
    **Note**
    
    -   A tag key or a tag value can be up to 128 characters in length and can contain letters, digits, forward slashes (/), backslashes (\\), underscores (\_), hyphens (-), periods (.), plus signs (+), equal sign (=), colons (:), at signs (@), and spaces.
        
    -   A tag key cannot start with aliyun or acs:.
        
    -   You can configure up to 20 key-value pairs for each secret.
        
    
    **Automatic Rotation**
    
    Specifies whether to enable automatic secret rotation.
    
    **Days (7 Days to 365 Days)**
    
    The interval of automatic secret rotation. This setting is required only when you enable automatic rotation.
    
    KMS periodically updates the secret based on the value of this parameter.
    
    **Description**
    
    The description of the secret.
    
    **Advanced Settings** > **Policy Settings**
    
    The policy settings of the secret. For more information, see [Overview](/help/en/kms/key-management-service/security-and-compliance/overview-of-secret-policies).
    
    You can use the default policy and then modify the policy based on your business requirements after you create the secret.
    
    ## Database secret (ApsaraDB RDS)
    
    You can select only **Create Single Secret**.
    
    **Parameter**
    
    **Description**
    
    **Database Type**
    
    The type of database secret that you want to create. Select **ApsaraDB RDS Secrets**.
    
    **Secret Name**
    
    The name of the secret. The secret name is unique within the current region.
    
    **ApsaraDB RDS Instance**
    
    The existing ApsaraDB RDS instance that you want to manage within your Alibaba Cloud account.
    
    **Account Management**
    
    -   **Manage Dual Accounts** (recommended): This mode is suitable for the scenarios in which the secret is used by applications to access the ApsaraDB RDS instance. In this mode, KMS manages two accounts that have identical permissions. This mode ensures that the connections between applications and the ApsaraDB RDS instance are not interrupted when the secret is rotated.
        
        -   Click the **Create Account** tab, specify a username prefix, select a database, and then specify permissions.
            
            **Note**
            
            KMS does not immediately create accounts. KMS creates accounts after you double-check and confirm the secret information.
            
        -   Click the **Import Existing Accounts** tab, select usernames, and then specify passwords for the usernames.
            
            **Note**
            
            We recommend that you specify the same passwords as the passwords that you specified for the accounts when you created the ApsaraDB RDS instance. If a username and the specified password do not match, you can retrieve the valid username and password the first time the secret is rotated.
            
    -   **Manage Single Account**: This mode is suitable for the scenarios in which a privileged account or a manual O&M account is managed. In this mode, the current version of the secret may be temporarily unavailable when the secret is rotated.
        
        -   Click the **Create Account** tab, specify a username prefix, and then select an account type.
            
            You can select **Standard Account** or **Privileged Account** for the Account Type parameter. If you select **Standard Account**, you must select a database and specify the permissions of the account.
            
        -   Click the **Import Existing Accounts** tab, select a username, and then specify a password for the username.
            
    
    **CMK**
    
    The key that is used to encrypt the current value of the secret.
    
    **Important**
    
    -   Your key and secret must belong to the same KMS instance. The key must be a symmetric key. For more information about the symmetric keys supported by KMS, see [Key specifications for symmetric and Asymmetric encryption](/help/en/kms/key-management-service/user-guide/key-types-and-specifications#task-2292624).
        
    -   If you are a RAM user or a RAM role, you must have the permissions to call the GenerateDataKey operation by using a key.
        
    
    **Tag**
    
    The tag that you want to add to the secret. You can use tags to classify and manage secrets. A tag consists of a key-value pair.
    
    **Note**
    
    -   A tag key or a tag value can be up to 128 characters in length and can contain letters, digits, forward slashes (/), backslashes (\\), underscores (\_), hyphens (-), periods (.), plus signs (+), equal sign (=), colons (:), at signs (@), and spaces.
        
    -   A tag key cannot start with aliyun or acs:.
        
    -   You can configure up to 20 key-value pairs for each secret.
        
    
    **Automatic Rotation**
    
    Specifies whether to enable automatic secret rotation.
    
    **Rotation Period**
    
    The interval of automatic secret rotation. This setting is required only when you enable automatic rotation. The value ranges from 6 hours to 365 days.
    
    KMS periodically updates the secret based on the value of this parameter.
    
    **Description**
    
    The description of the secret.
    
    **Advanced Settings** > **Policy Settings**
    
    The policy settings of the secret. For more information, see [Overview](/help/en/kms/key-management-service/security-and-compliance/overview-of-secret-policies).
    
    You can use the default policy and then modify the policy based on your business requirements after you create the secret.
    
    ## Database secret (PolarDB)
    
    You can select only **Create Single Secret**. When you create a PolarDB secret, note that only new accounts in dual mode are supported. The new account supports only PolarDB for MySQL and PolarDB for PostgreSQL.
    
    **Parameter**
    
    **Description**
    
    **Database Type**
    
    The type of database secret that you want to create. Select **PolarDB Secret**.
    
    **Secret Name**
    
    The name of the secret. The secret name is unique within the current region.
    
    **PolarDB Cluster**
    
    The existing PolarDB cluster that you want to manage within your Alibaba Cloud account.
    
    **Account Management**
    
    Only **Manage Dual Accounts** is supported.
    
    This mode is suitable for the scenarios in which the secret is used by applications to access the PolarDB cluster. In this mode, KMS manages two accounts that have identical permissions. This mode ensures that the connections between applications and the PolarDB cluster are not interrupted when the secret is rotated.
    
    **Secret Value**
    
    Only **Create Account** is supported.
    
    The type of the new account is standard. After you select a PolarDB cluster, specify a username prefix, permissions, and a database for the new account.
    
    **Note**
    
    -   KMS does not immediately create accounts. KMS creates accounts after you double-check and confirm the secret information.
        
    -   The account name must be unique. Otherwise, the account cannot be managed in secrets.
        
    
    **CMK**
    
    The key that is used to encrypt the current value of the secret.
    
    **Important**
    
    -   Your key and secret must belong to the same KMS instance. The key must be a symmetric key. For more information about the symmetric keys supported by KMS, see [Key specifications for symmetric and Asymmetric encryption](/help/en/kms/key-management-service/user-guide/key-types-and-specifications#task-2292624).
        
    -   If you are a RAM user or a RAM role, you must have the permissions to call the GenerateDataKey operation by using a key.
        
    
    **Tag**
    
    The tag that you want to add to the secret. You can use tags to classify and manage secrets. A tag consists of a key-value pair.
    
    **Note**
    
    -   A tag key or a tag value can be up to 128 characters in length and can contain letters, digits, forward slashes (/), backslashes (\\), underscores (\_), hyphens (-), periods (.), plus signs (+), equal sign (=), colons (:), at signs (@), and spaces.
        
    -   A tag key cannot start with aliyun or acs:.
        
    -   You can configure up to 20 key-value pairs for each secret.
        
    
    **Automatic Rotation**
    
    Specifies whether to enable automatic secret rotation.
    
    **Rotation Period**
    
    The interval of automatic secret rotation. This setting is required only when you enable automatic rotation. The value ranges from 6 hours to 365 days.
    
    KMS periodically updates the secret based on the value of this parameter.
    
    **Description**
    
    The description of the secret.
    
    **Advanced Settings** > **Policy Settings**
    
    The policy settings of the secret. For more information, see [Overview](/help/en/kms/key-management-service/security-and-compliance/overview-of-secret-policies).
    
    You can use the default policy and then modify the policy based on your business requirements after you create the secret.
    
    ## Database secret (ApsaraDB for Redis)
    
    **Create Single Secret** and **Create Bulk Secrets** are supported. In the following example, Create Single Secret is selected.
    
    **Parameter**
    
    **Description**
    
    **Database Type**
    
    The type of database secret that you want to create. Select **ApsaraDB for Redis Secrets**.
    
    **Secret Name**
    
    The name of the secret. The secret name is unique within the current region.
    
    **ApsaraDB for Redis/Tair Instance**
    
    The existing ApsaraDB for Redis instance that you want to manage within your Alibaba Cloud account.
    
    **Account Management**
    
    Only **Manage Dual Accounts** is supported.
    
    **Secret Value**
    
    When you use KMS to manage the accounts of the ApsaraDB for Redis instance, you can manage only new accounts. Existing accounts cannot be managed.
    
    -   **Account Name**: Enter a username prefix. Then, KMS calls an ApsaraDB for Redis operation to create two accounts that have the same permissions. For example, if you enter the `user` username prefix, `user` and `user _clone` accounts are created.
        
    -   **Permissions**: Valid values are **Read/Write** and **Read-Only**. The two ApsaraDB for Redis accounts have the same permissions.
        
    
    **CMK**
    
    The key that is used to encrypt the current value of the secret.
    
    **Important**
    
    -   Your key and secret must belong to the same KMS instance. The key must be a symmetric key. For more information about the symmetric keys supported by KMS, see [Key specifications for symmetric and Asymmetric encryption](/help/en/kms/key-management-service/user-guide/key-types-and-specifications#task-2292624).
        
    -   If you are a RAM user or a RAM role, you must have the permissions to call the GenerateDataKey operation by using a key.
        
    
    **Tag**
    
    The tag that you want to add to the secret. You can use tags to classify and manage secrets. A tag consists of a key-value pair.
    
    **Note**
    
    -   A tag key or a tag value can be up to 128 characters in length and can contain letters, digits, forward slashes (/), backslashes (\\), underscores (\_), hyphens (-), periods (.), plus signs (+), equal sign (=), colons (:), at signs (@), and spaces.
        
    -   A tag key cannot start with aliyun or acs:.
        
    -   You can configure up to 20 key-value pairs for each secret.
        
    
    **Automatic Rotation**
    
    Specifies whether to enable automatic secret rotation.
    
    **Rotation Period**
    
    The interval of automatic secret rotation. This setting is required only when you enable **Automatic Rotation**. The value ranges from 6 hours to 365 days.
    
    KMS periodically updates the secret based on the value of this parameter.
    
    **Description**
    
    The description of the secret.
    
    **Advanced Settings** > **Policy Settings**
    
    The policy settings of the secret. For more information, see [Overview](/help/en/kms/key-management-service/security-and-compliance/overview-of-secret-policies).
    
    You can use the default policy and then modify the policy based on your business requirements after you create the secret.
    
    ## ECS secret
    
    **Parameter**
    
    **Description**
    
    **Secret Name**
    
    The name of the secret. The secret name is unique within the current region.
    
    **Managed Instance**
    
    The existing ECS instance that you want to manage within your Alibaba Cloud account.
    
    **Managed User**
    
    The name of an existing user on the ECS instance, such as the root user for Linux operating systems or the Administrator user for Windows operating systems.
    
    **Initial Secret Value**
    
    The value cannot exceed 30,720 bytes in length, which is equivalent to 30 KB in size.
    
    -   **Password**: the password of the user that is used to log on to the ECS instance.
        
    -   **Key Pair**: the SSH key pair of the user that is used to log on to the ECS instance.
        
        **Obtain an SSH key pair**
        
        -   An SSH key pair that is created in ECS
            
            -   Private key: After you create an SSH key pair, the browser automatically downloads the private key file to your computer. The name of the file is in the _Key pair name_.pem format. For more information, see [Create an SSH key pair](/help/en/ecs/user-guide/create-an-ssh-key-pair).
                
            -   Public Key: For more information about how to view the information about a public key, see [View public key information](/help/en/ecs/user-guide/view-public-key-information).
                
        -   An automatically-generated SSH key pair
            
            Save the private key and the public key of a key pair after the key pair is generated. For example, run the `ssh-keygen` command to generate and save a 3072-bit Rivest-Shamir-Adleman (RSA) key pair.
            
            ```
            ssh-keygen -t RSA -b 3072 -m PEM -f ~/.ssh/sshKey_demo -N ""
            ```
            
            The following files are generated:
            
            -   `~/.ssh/sshKey_demo`: contains the private key.
                
            -   `~/.ssh/sshKey_demo.pub`: contains the public key.
                
        
    
    **Note**
    
    Enter a valid secret value. If you enter an invalid secret value, the password or key pair that you retrieve from KMS cannot be used to log on to the ECS instance before the first time the ECS secret is rotated.
    
    **CMK**
    
    The key that is used to encrypt the current value of the secret.
    
    **Important**
    
    -   Your key and secret must belong to the same KMS instance. The key must be a symmetric key. For more information about the symmetric keys supported by KMS, see [Key specifications for symmetric and Asymmetric encryption](/help/en/kms/key-management-service/user-guide/key-types-and-specifications#task-2292624).
        
    -   If you are a RAM user or a RAM role, you must have the permissions to call the GenerateDataKey operation by using a key.
        
    
    **Tag**
    
    The tag that you want to add to the secret. You can use tags to classify and manage secrets. A tag consists of a key-value pair.
    
    **Note**
    
    -   A tag key or a tag value can be up to 128 characters in length and can contain letters, digits, forward slashes (/), backslashes (\\), underscores (\_), hyphens (-), periods (.), plus signs (+), equal sign (=), colons (:), at signs (@), and spaces.
        
    -   A tag key cannot start with aliyun or acs:.
        
    -   You can configure up to 20 key-value pairs for each secret.
        
    
    **Automatic Rotation**
    
    Specifies whether to enable automatic secret rotation.
    
    **Rotation Period**
    
    The interval of automatic secret rotation. This setting is required only when you enable automatic rotation. The value ranges from 1 hour to 365 days.
    
    KMS periodically updates the secret based on the value of this parameter.
    
    **Description**
    
    The description of the secret.
    
    **Advanced Settings** > **Policy Settings**
    
    The policy settings of the secret. For more information, see [Overview](/help/en/kms/key-management-service/security-and-compliance/overview-of-secret-policies).
    
    You can use the default policy and then modify the policy based on your business requirements after you create the secret.
    

## Step 2: Retrieve the secret

In the following example, the Alibaba Cloud SDK for Java is used.

### Preparations

1.  Prepare an environment.
    
    **Environment requirement**
    
    Download and install Java Development Kit (JDK) 8 or later.
    
    **Version check**
    
    Run the `java -version` command on the terminal to check the JDK version.
    
2.  Install the SDK for Java.
    
    Add the following Maven dependency to your project. Then, a Java package of Alibaba Cloud SDK is automatically downloaded from the Maven repository. Make sure that Alibaba Cloud SDK V2.0 is used.
    
    ```
    <dependency>
      <groupId>com.aliyun</groupId>
      <artifactId>kms20160120</artifactId>
      <version>1.2.3</version>
    </dependency>
    ```
    
3.  Create a credential that can be used to call API operations.
    
    Alibaba Cloud SDK supports multiple RAM-based authentication methods. In this example, AccessKey pairs of RAM users are used. For more information about authentication methods, see [Manage access credentials](/help/en/sdk/developer-reference/v2-manage-access-credentials).
    
    1.  Create an AccessKey pair for a RAM user in the [RAM console](https://signin.alibabacloud.com/5312032800542991.onaliyun.com/login.htm?callback=https%3A%2F%2Fram.console.alibabacloud.com%2F&accounttraceid=9d9ab827b3524700ab0e3870e959b9e9gbme&cspNonce=r7bo9SXYgb&oauth_callback=https%3A%2F%2Fram.console.alibabacloud.com%2F&spma=a2c45&spmb=11132017#/main). For more information, see [Create an AccessKey pair](/help/en/ram/user-guide/create-an-accesskey-pair).
        
        If an AccessKey pair is already created for the RAM user, skip this step.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3183152371/p801246.png)
        
    2.  Grant the required permissions to the RAM user.
        
        For example, if the RAM user requires the permissions to retrieve a secret, you can attach the system policies AliyunKMSSecretUserAccess and AliyunKMSCryptoUserAccess to the RAM user. For more information, see [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user). ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6555724171/p794639.png)
        
        **Note**
        
        KMS provides the following permission configuration methods:
        
        -   Identity-based policies: The policies in the preceding example are identity-based policies. Identity-based policies associate identities with corresponding permissions to implement access control. For more information, see [Use RAM to implement access control](/help/en/kms/key-management-service/security-and-compliance/identity-management-and-access-control/).
            
        -   Resource-based policies: Resource-based policies include key and secret policies. Such policies are directly associated with resources and are used to define access rules for specific resources. For more information, see [Key policies](/help/en/kms/key-management-service/security-and-compliance/key-policies/) and [Secret policies](/help/en/kms/key-management-service/security-and-compliance/secret-policies/).
            
        
4.  Retrieve the KMS instance certificate authority (CA) certificate.
    
    1.  On the **Instances** page, select either **Software Key Management** or **Hardware Key Management** tab, then choose the target instance.
        
    2.  Click the instance ID or **Details** in the **Actions** column. On the details page, click **Download** next to the **Instance CA Certificate**.
        
        Save the certificate securely. The downloaded file will be named `PrivateKmsCA_kst-******.pem` by default.
        
    
5.  Retrieve the Virtual Private Cloud (VPC) endpoint of the instance.
    
    Record the VPC endpoint of the instance on the instance details page.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1281398471/p963321.png)
    

### Secret retrieval

1.  Initialize Alibaba Cloud SDK.
    
    **Important**
    
    Make sure that Alibaba Cloud SDK V2.0 is used. You must set the config.endpoint parameter to the VPC endpoint of the instance and configure the CA certificate of the instance.
    
    ```
        public static com.aliyun.kms20160120.Client createClient() throws Exception {
            // If the project code is leaked, the AccessKey pair may be leaked and the security of all resources within your account may be compromised. The following sample code is for reference only.
            // We recommend that you use Security Token Service (STS) tokens to enhance security. For more information about authentication methods, visit https://www.alibabacloud.com/help/en/sdk/developer-reference/v2-manage-access-credentials?spm=a2c63.p38356.help-menu-262060.d_1_4_1_2.1ad47c23arIlrq.
            com.aliyun.teaopenapi.models.Config config = new com.aliyun.teaopenapi.models.Config()
                    // Required. Make sure that the environment variable ALIBABA_CLOUD_ACCESS_KEY_ID is configured.
                    .setAccessKeyId(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_ID"))
                    // Required. Make sure that the environment variable ALIBABA_CLOUD_ACCESS_KEY_SECRET is configured.
                    .setAccessKeySecret(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET"));
            // Enter the VPC endpoint of the instance. Example: kst-hzz65f176a0ogplgq****.cryptoservice.kms.aliyuncs.com.
            config.endpoint = "<VPC endpoint of the instance>";
            // Enter the content of the CA certificate of the instance.
            config.ca = "<CA certificate of the instance>";
            return new com.aliyun.kms20160120.Client(config);
        }
    ```
    
2.  Call the GetSecretValue operation to retrieve the secret.
    
    ```
    // This file is auto-generated, don't edit it. Thanks.
    package com.aliyun.sample;
    
    import com.aliyun.tea.*;
    
    public class Sample {
    
      public static com.aliyun.kms20160120.Client createClient() throws Exception {
            // If the project code is leaked, the AccessKey pair may be leaked and the security of all resources within your account may be compromised. The following sample code is for reference only.
            // We recommend that you use Security Token Service (STS) tokens to enhance security. For more information about authentication methods, visit https://www.alibabacloud.com/help/en/sdk/developer-reference/v2-manage-access-credentials?spm=a2c63.p38356.help-menu-262060.d_1_4_1_2.1ad47c23arIlrq.
            com.aliyun.teaopenapi.models.Config config = new com.aliyun.teaopenapi.models.Config()
                    // Required. Make sure that the environment variable ALIBABA_CLOUD_ACCESS_KEY_ID is configured.
                    .setAccessKeyId(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_ID"))
                    // Required. Make sure that the environment variable ALIBABA_CLOUD_ACCESS_KEY_SECRET is configured.
                    .setAccessKeySecret(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET"));
            // Enter the VPC endpoint of the instance. Example: kst-hzz65f176a0ogplgq****.cryptoservice.kms.aliyuncs.com.
            config.endpoint = "<VPC endpoint of the instance>";
            // Enter the content of the CA certificate of the instance.
            config.ca = "<CA certificate of the instance>";
            return new com.aliyun.kms20160120.Client(config);
        }
    
        public static void main(String[] args_) throws Exception {
            java.util.List<String> args = java.util.Arrays.asList(args_);
            com.aliyun.kms20160120.Client client = Sample.createClient();
            com.aliyun.kms20160120.models.GetSecretValueRequest getSecretValueRequest = new com.aliyun.kms20160120.models.GetSecretValueRequest()
                    .setSecretName("<SecretName>");
            com.aliyun.teautil.models.RuntimeOptions runtime = new com.aliyun.teautil.models.RuntimeOptions();
            try {
                // Run the sample code to retrieve the return value of the API operation.
                client.getSecretValueWithOptions(getSecretValueRequest, runtime);
            } catch (TeaException error) {
                // Handle exceptions with caution in actual business scenarios and do not ignore the exceptions in your project. In this example, exceptions are provided for reference only.
                // The error message.
                System.out.println(error.getMessage());
                // The URL for troubleshooting.
                System.out.println(error.getData().get("Recommend"));
                com.aliyun.teautil.Common.assertAsString(error.message);
            } catch (Exception _error) {
                TeaException error = new TeaException(_error.getMessage(), _error);
                // Handle exceptions with caution in actual business scenarios and do not ignore the exceptions in your project. In this example, exceptions are provided for reference only.
                // The error message.
                System.out.println(error.getMessage());
                // The URL for troubleshooting.
                System.out.println(error.getData().get("Recommend"));
                com.aliyun.teautil.Common.assertAsString(error.message);
            }        
        }
    }
    ```

Secret SDKs are a tool for custom encapsulation of Key Management Service (KMS) API and KMS Instance API and encapsulate the capabilities to cache and refresh secrets in applications. Secret SDKs feature high service stability and easy integration with service applications for developers. This topic describes how to integrate secret SDKs.

## **Integration overview**

Secret SDKs support only secret retrieval during service-related operations. Both shared and dedicated gateways can be used for access.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1503993471/CAEQORiBgMDUkOLBrxkiIGQ5OWQwNTM5NWZhMTQ2YTM4ODlhNTZhODZkYjhjMDZi4955759_20250303150311.242.svg)

## **Differences between shared and dedicated gateways**

Secret SDKs allow you to call KMS API and KMS Instance API over shared and dedicated gateways to retrieve secrets. Shared gateways are for the entire KMS network and support **access over the** **Internet and virtual private clouds (VPCs)**. Dedicated gateways are for the network of a specific KMS instance and support only **access over private networks**.

**Difference**

**Shared gateway**

**Dedicated gateway**

Recommended scenario

-   The performance requirement is not high for secret retrieval operations.
    
-   Workloads are deployed outside Alibaba Cloud VPCs.
    
-   Access is initiated to KMS from a non-production environment such as an internal test environment.
    

-   Workloads are deployed on Alibaba Cloud VPCs.
    
-   Secret retrieval operations are frequently called.
    
-   The requirement for service data security is high.
    

Network

Internet or VPC

KMS private network

Performance

For data encryption and decryption performance, queries per second (QPS) is 1,000 when shared gateways are used to access KMS.

The performance is subject to the **computing performance** of your KMS instance. For example, the computing performance can be 1,000 or 2,000 QPS.

Configuration for client initialization

-   Endpoint: For example, the endpoint of a shared gateway can be `kms.cn-hangzhou.aliyuncs.com`. For more information, see [Shared gateway endpoints (KMS service endpoints)](#631e9b89f508d).
    
-   Certificate authority (CA) certificates of KMS instances are not required.
    

-   Endpoint: The endpoint of a dedicated gateway is in the `<YOUR_KMS_INSTANCE_ID>.cryptoservice.kms.aliyuncs.com` format. An example is `kst-hzz65f176a0ogplgq****.cryptoservice.kms.aliyuncs.com`.
    
-   CA certificates of KMS instances are required.
    

API

[GetSecretValue](/help/en/kms/key-management-service/developer-reference/api-getsecretvalue) of KMS API

[GetSecretValue](/help/en/kms/key-management-service/developer-reference/getsecretvalue-2) of KMS Instance API

Identity authentication

-   Resource Access Management (RAM) authentication: Alibaba Cloud Resource Names (ARNs) of RAM roles, RAM roles of Elastic Compute Service (ECS) instances, Security Token Service (STS) tokens, and AccessKey pairs.
    
-   Application access point (AAP) authentication (not recommended): client keys (shared gateway configuration).
    

AAP authentication: client keys (dedicated gateway configuration).

## **Types of secret SDKs**

The following types of secret SDKs are available: the secret client, the secret Java Database Connectivity (JDBC) client, and the RAM secret plug-in. You can call the GetSecretValue operation of KMS API or KMS Instance API to query a KMS secret value over shared gateways or dedicated gateways. The GetSecretValue operation of KMS Instance API is not recommended. The preceding types of secret SDKs support different authentication methods and APIs. The following table describes the differences.

**SDK type**

**Usage**

**Gateway and authentication method**

[Secret client](/help/en/kms/key-management-service/developer-reference/secrets-manager-client)

-   **All types of secrets** are supported.
    
-   The secret client encapsulates the capabilities to cache and refresh secrets in applications, providing higher service stability.
    

**Shared gateways:**

-   RAM authentication: ARNs of RAM roles, RAM roles of ECS instances, STS tokens, and AccessKey pairs.
    
-   AAP authentication (not recommended): client keys (shared gateway configuration).
    

**Dedicated gateways (not recommended):**

-   AAP authentication: client keys (dedicated gateway configuration).
    

[Secret JDBC client](/help/en/kms/key-management-service/developer-reference/secrets-manager-jdbc)

-   Only Java is supported. You must use Java 8 or later.
    
-   Only **ApsaraDB RDS secrets** **and generic secrets whose secret values are in the** `{"AccountName":"<The username of your database account>","AccountPassword":"<The password of your database account>"}` format are supported.
    
-   If you connect to a database by using JDBC connections, connection pools, or open source database frameworks, you can use the secret JDBC client to complete identity authentication and configure the custom secret refresh frequency. Connection pools include c3p0 and Database Connection Pools (DBCPs).
    

**Shared gateways:**

-   RAM authentication: ARNs of RAM roles, RAM roles of ECS instances, STS tokens, and AccessKey pairs.
    
-   AAP authentication (not recommended): client keys (shared gateway configuration).
    

**Dedicated gateways (not recommended):**

AAP authentication: client keys (dedicated gateway configuration).

[RAM secret plug-in](/help/en/kms/key-management-service/developer-reference/ram-secret-plug-in)

-   Only **RAM secrets** are supported.
    
-   The Alibaba Cloud SDK that you use must be supported by the RAM secret plug-in. For more information, see [Supported Alibaba Cloud SDKs](/help/en/kms/key-management-service/developer-reference/ram-secret-plug-in).
    

**Shared gateways:**

-   RAM authentication: RAM roles of ECS instances.
    
-   AAP authentication (not recommended): client keys (shared gateway configuration).
    

**Dedicated gateways (not recommended):**

AAP authentication: client keys (dedicated gateway configuration).

## **Supported APIs**

**API**

**Description**

**Shared gateway**

**Dedicated gateway**

[GetSecretValue](/help/en/kms/key-management-service/developer-reference/api-getsecretvalue) (KMS API)

Queries a secret value.

![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png)

![错](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1579979171/p442273.png)

[GetSecretValue](/help/en/kms/key-management-service/developer-reference/getsecretvalue-2) (KMS Instance API)

Queries a secret value.

![错](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1579979171/p442273.png)

![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png)

## **Endpoints**

**Shared gateway endpoints (KMS service endpoints)**

-   Regions in China
    
    **Region name**
    
    **Region ID**
    
    **Public endpoint**
    
    **VPC address**
    
    China (Hangzhou)
    
    cn-hangzhou
    
    kms.cn-hangzhou.aliyuncs.com
    
    kms-vpc.cn-hangzhou.aliyuncs.com
    
    China (Shanghai)
    
    cn-shanghai
    
    kms.cn-shanghai.aliyuncs.com
    
    kms-vpc.cn-shanghai.aliyuncs.com
    
    China (Shenzhen)
    
    cn-shenzhen
    
    kms.cn-shenzhen.aliyuncs.com
    
    kms-vpc.cn-shenzhen.aliyuncs.com
    
    China (Heyuan)
    
    cn-heyuan
    
    kms.cn-heyuan.aliyuncs.com
    
    kms-vpc.cn-heyuan.aliyuncs.com
    
    China (Guangzhou)
    
    cn-guangzhou
    
    kms.cn-guangzhou.aliyuncs.com
    
    kms-vpc.cn-guangzhou.aliyuncs.com
    
    China (Qingdao)
    
    cn-qingdao
    
    kms.cn-qingdao.aliyuncs.com
    
    kms-vpc.cn-qingdao.aliyuncs.com
    
    China (Beijing)
    
    cn-beijing
    
    kms.cn-beijing.aliyuncs.com
    
    kms-vpc.cn-beijing.aliyuncs.com
    
    China (Zhangjiakou)
    
    cn-zhangjiakou
    
    kms.cn-zhangjiakou.aliyuncs.com
    
    kms-vpc.cn-zhangjiakou.aliyuncs.com
    
    China (Hohhot)
    
    cn-huhehaote
    
    kms.cn-huhehaote.aliyuncs.com
    
    kms-vpc.cn-huhehaote.aliyuncs.com
    
    China (Ulanqab)
    
    cn-wulanchabu
    
    kms.cn-wulanchabu.aliyuncs.com
    
    kms-vpc.cn-wulanchabu.aliyuncs.com
    
    China (Chengdu)
    
    cn-chengdu
    
    kms.cn-chengdu.aliyuncs.com
    
    kms-vpc.cn-chengdu.aliyuncs.com
    
    China (Hong Kong)
    
    cn-hongkong
    
    kms.cn-hongkong.aliyuncs.com
    
    kms-vpc.cn-hongkong.aliyuncs.com
    
-   Regions outside China
    
    **Region name**
    
    **Region ID**
    
    **Public endpoint**
    
    **VPC address**
    
    Singapore
    
    ap-southeast-1
    
    kms.ap-southeast-1.aliyuncs.com
    
    kms-vpc.ap-southeast-1.aliyuncs.com
    
    Malaysia (Kuala Lumpur)
    
    ap-southeast-3
    
    kms.ap-southeast-3.aliyuncs.com
    
    kms-vpc.ap-southeast-3.aliyuncs.com
    
    Indonesia (Jakarta)
    
    ap-southeast-5
    
    kms.ap-southeast-5.aliyuncs.com
    
    kms-vpc.ap-southeast-5.aliyuncs.com
    
    Philippines (Manila)
    
    **Important**
    
    In this region, only one zone exists and the service-level agreement (SLA) is not guaranteed.
    
    ap-southeast-6
    
    kms.ap-southeast-6.aliyuncs.com
    
    kms-vpc.ap-southeast-6.aliyuncs.com
    
    Thailand (Bangkok)
    
    **Important**
    
    In this region, only one zone exists and the SLA is not guaranteed.
    
    ap-southeast-7
    
    kms.ap-southeast-7.aliyuncs.com
    
    kms-vpc.ap-southeast-7.aliyuncs.com
    
    Japan (Tokyo)
    
    ap-northeast-1
    
    kms.ap-northeast-1.aliyuncs.com
    
    kms-vpc.ap-northeast-1.aliyuncs.com
    
    Germany (Frankfurt)
    
    eu-central-1
    
    kms.eu-central-1.aliyuncs.com
    
    kms-vpc.eu-central-1.aliyuncs.com
    
    UK (London)
    
    eu-west-1
    
    kms.eu-west-1.aliyuncs.com
    
    kms-vpc.eu-west-1.aliyuncs.com
    
    US (Silicon Valley)
    
    us-west-1
    
    kms.us-west-1.aliyuncs.com
    
    kms-vpc.us-west-1.aliyuncs.com
    
    US (Virginia)
    
    us-east-1
    
    kms.us-east-1.aliyuncs.com
    
    kms-vpc.us-east-1.aliyuncs.com
    
    UAE (Dubai)
    
    me-east-1
    
    kms.me-east-1.aliyuncs.com
    
    kms-vpc.me-east-1.aliyuncs.com
    

**Dedicated gateway endpoints (KMS instance endpoints)**

The endpoint format is `<YOUR_KMS_INSTANCE_ID>.cryptoservice.kms.aliyuncs.com`. An example is `kst-hzz65f176a0ogplgq****.cryptoservice.kms.aliyuncs.com`.

**Note**

Replace `<YOUR_KMS_INSTANCE_ID>` with the ID of your KMS instance.

## **Identity authentication and authorization**

Secret SDKs support RAM authentication and AAP authentication. AAP authentication is not recommended. RAM authentication methods include RAM roles, RAM roles of ECS instances, STS tokens, and AccessKey pairs. For AAP authentication, two authentication modes of **dedicated gateway configuration and shared gateway configuration** are provided for different gateways.

**Important**

-   RAM authentication supports only shared gateways.
    
-   Dedicated gateways support only AAP authentication of the dedicated gateway configuration mode.
    

**Authentication method**

**Access credential type**

**Gateway type**

RAM authentication

ARNs of RAM roles, RAM roles of ECS instances, STS tokens, and AccessKey pairs

**Note**

The RAM secret plug-in supports only RAM roles of ECS instances.

Shared gateways

AAP authentication (not recommended)

Client keys for shared gateway configuration and clients keys for dedicated gateway configuration

Shared and dedicated gateways

**RAM authentication**

### **AccessKey**

By default, an Alibaba Cloud account serves as an administrator with the authority to manage all associated Alibaba Cloud resources. The permissions tied to the Alibaba Cloud account cannot be altered. If an AccessKey pair associated with an Alibaba Cloud account is compromised, the resources of the account are at risk. For enhanced security, we do not advise creating an AccessKey pair for an Alibaba Cloud account. Instead, create a RAM user with API access mode enabled and generate an AccessKey pair for this user. By granting the RAM user only necessary permissions in accordance with the principle of least privilege, they can perform API operations to access Alibaba Cloud resources. For more information, see [Create an AccessKey pair](/help/en/kms/key-management-service/developer-reference/create-an-accesskey-pair-1).

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) by using an Alibaba Cloud account, a RAM administrator with the AliyunRAMFullAccess policy attached, or a RAM user granted permissions to manage AccessKey pairs.
    
2.  In the left-side navigation pane, choose **Identities** > **Users**, and click on the desired RAM user.
    
3.  In the **Authentication** tab, click **Create AccessKey** and follow the instructions to complete the creation.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3183152371/p801246.png)
    
4.  Grant the RAM user access to KMS. You have two methods to complete the grant.
    
    -   Method 1: Through identity-based policies
        
        KMS provides system-defined permission policies that can be attached to RAM users. For more information, see [System policies for KMS](/help/en/kms/key-management-service/security-and-compliance/kms-1). You can also create [custom policies](/help/en/kms/key-management-service/security-and-compliance/sample-custom-permission-policies).
        
    -   Method 2: Through resource-based policies
        
        KMS supports resource-based policies, which allow you to set access permissions for keys and secrets. This lets you control which Alibaba Cloud accounts, RAM users, and RAM roles have permission to manage or use KMS keys and secrets. For more information, see [Key policies](/help/en/kms/key-management-service/security-and-compliance/key-policies/) and [Secret policies](/help/en/kms/key-management-service/security-and-compliance/secret-policies/).
        

### **STS token**

By using STS services, a temporary access credential can be issued to RAM users or RAM roles, allowing them to access KMS with permissions specified by the policy for a limited validity period. After the expiration period, the credential will automatically become invalid.

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) by using an Alibaba Cloud account or a RAM user who has administrative rights.
    
2.  [Create a RAM user](/help/en/ram/user-guide/create-a-ram-user) or [create a RAM role](/help/en/ram/user-guide/create-a-ram-role/).
    
3.  [Grant AliyunSTSAssumeRoleAccess permission to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user) or [Grant AliyunSTSAssumeRoleAccess permission to a RAM role](/help/en/ram/user-guide/grant-permissions-to-a-ram-role).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1208467371/p907020.png)
    
4.  Grant the RAM user access to KMS. You have two methods to complete the grant.
    
    -   Method 1: Through identity-based policies
        
        KMS provides system-defined permission policies that can be attached to RAM users. For more information, see [System policies for KMS](/help/en/kms/key-management-service/security-and-compliance/kms-1). You can also create [custom policies](/help/en/kms/key-management-service/security-and-compliance/sample-custom-permission-policies).
        
    -   Method 2: Through resource-based policies
        
        KMS supports resource-based policies, which allow you to set access permissions for keys and secrets. This lets you control which Alibaba Cloud accounts, RAM users, and RAM roles have permission to manage or use KMS keys and secrets. For more information, see [Key policies](/help/en/kms/key-management-service/security-and-compliance/key-policies/) and [Secret policies](/help/en/kms/key-management-service/security-and-compliance/secret-policies/).
        

5.  Use the RAM user or RAM role to call the [AssumeRole](/help/en/ram/developer-reference/api-sts-2015-04-01-assumerole) interface of the STS service to obtain temporary access credentials.
    

### **RamRoleArn**

RAM users or cloud services can obtain temporary permissions by assuming roles instead of directly using long-term access keys, thereby reducing the risk of key leakage. For instance, in temporary data processing tasks, RAM users or cloud services can temporarily assume a role with a specific RamRoleArn. RamRoleArn is the ARN information of the RAM role. Once the task is completed, the role's permissions are revoked, further mitigating the risk of exposure.

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) by using an Alibaba Cloud account or a RAM user who has administrative rights.
    
2.  [Create a RAM role](/help/en/ram/user-guide/create-a-ram-role/).
    
3.  Grant the RAM user access to KMS. You have two methods to complete the grant.
    
    -   Method 1: Through identity-based policies
        
        KMS provides system-defined permission policies that can be attached to RAM users. For more information, see [System policies for KMS](/help/en/kms/key-management-service/security-and-compliance/kms-1). You can also create [custom policies](/help/en/kms/key-management-service/security-and-compliance/sample-custom-permission-policies).
        
    -   Method 2: Through resource-based policies
        
        KMS supports resource-based policies, which allow you to set access permissions for keys and secrets. This lets you control which Alibaba Cloud accounts, RAM users, and RAM roles have permission to manage or use KMS keys and secrets. For more information, see [Key policies](/help/en/kms/key-management-service/security-and-compliance/key-policies/) and [Secret policies](/help/en/kms/key-management-service/security-and-compliance/secret-policies/).
        
4.  [View the RamRoleArn about a RAM role](/help/en/ram/user-guide/view-the-information-about-a-ram-role).
    
    The RamRoleArn follows the format acs:ram::$accountID:role/$roleName, where $accountID is the Alibaba Cloud account and $roleName is the RAM role name.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1208467371/p907479.png)
    

### **ECS i**nstance **RAM roles**

An [ECS instance RAM role](/help/en/ecs/user-guide/attach-an-instance-ram-role-to-an-ecs-instance) is a regular service role that is attached to ECS instances, and the trusted entity of an instance RAM role is ECS. You can use an instance RAM role to obtain Security Token Service (STS) tokens as temporary access credentials from within an ECS instance without the need to provide an AccessKey pair. Then, you can use the temporary access credentials to call the OpenAPI operations of KMS. 

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/), and create an instance RAM role whose Principal Type is an Alibaba Cloud service.
    
    -   Principal Type: Select **Cloud Service**.
        
    -   Principal Name: Select **Elastic Compute Service / ECS**.
        
2.  Grant the RAM user access to KMS. You have two methods to complete the grant.
    
    -   Method 1: Through identity-based policies
        
        KMS provides system-defined permission policies that can be attached to RAM users. For more information, see [System policies for KMS](/help/en/kms/key-management-service/security-and-compliance/kms-1). You can also create [custom policies](/help/en/kms/key-management-service/security-and-compliance/sample-custom-permission-policies).
        
    -   Method 2: Through resource-based policies
        
        KMS supports resource-based policies, which allow you to set access permissions for keys and secrets. This lets you control which Alibaba Cloud accounts, RAM users, and RAM roles have permission to manage or use KMS keys and secrets. For more information, see [Key policies](/help/en/kms/key-management-service/security-and-compliance/key-policies/) and [Secret policies](/help/en/kms/key-management-service/security-and-compliance/secret-policies/).
        
3.  Log on to the [ECS console](https://ecs.console.alibabacloud.com), and attach the instance RAM role to an ECS instance. ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9522981471/p907500.png)
    

**AAP authentication (not recommended)**

## **Shared gateway configuration**

1.  Log on to the [KMS console](https://yundun.console.alibabacloud.com/?p=kms#/keyList/base). In the top navigation bar, select a region. In the left-side navigation pane, choose **Application Access** > **AAPs**.
    
2.  Optional. Create a network access rule.
    
    **Note**
    
    If you do not need to control access based on source IP addresses, you do not need to configure network access rules. For security purposes, we recommend that you configure network access rules.
    
    1.  Click the **Network Access Rules** tab. On the tab, click **Create Network Access Rule**.
        
    2.  In the **Create Network Access Rule** panel, set **Network Type** to **Public**, configure the **Allowed Source IP Addresses** parameter, and then click **OK**.
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8545103471/p925069.png)
    
3.  Create a policy.
    
    1.  On the **Policy** tab, click **Create Policy**.
        
    2.  In the **Create Permission Policy** panel, configure the parameters and click **OK**. The following list describes the parameters.
        
        1.  **Scope**: Select **Shared KMS Gateway**.
            
        2.  **Accessible Resources**: Select the secrets that you want to access.
            
        3.  **Network Access Rules** (optional): Select the network access rule that you created in Step 2.
            
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8545103471/p924147.png)
    
4.  Create an AAP.
    
    1.  On the **Application Access** tab, click **Create AAP**.
        
    2.  In the **Create AAP** panel, set **Mode** to **Standard Creation** and configure the other parameters. The following table describes the parameters.
        
        **Parameter**
        
        **Description**
        
        **Authentication Method**
        
        Select **ClientKey**.
        
        **Encryption Password**
        
        Set a password. The password can be 8 to 64 characters in length and must contain uppercase letters, lowercase letters, digits, and at least one of the following special characters: `~!@#$%^&*?_-`.
        
        **Validity Period**
        
        **Important**
        
        We recommend that you configure a one-year validity period to reduce risks of client key leaks. Make sure that a client key is replaced before it expires to prevent KMS logon failures. For more information, see [Change a client key](/help/en/kms/key-management-service/user-guide/change-a-client-key).
        
        **Policy**
        
        Select the policy that you created in Step 3.
        
    3.  Click **OK**. The browser automatically downloads the client key that is created.
        
        The client key contains **Application Access Secret(ClientKeyContent)** and **Password**. By default, **Application Access Secret(ClientKeyContent)** is saved in a file whose name is in the `clientKey_****.json` format. By default, **Password** is saved in a file whose name is in the `clientKey_****_Password.txt` format.
        

## **Dedicated gateway configuration**

1.  Log on to the [KMS console](https://yundun.console.alibabacloud.com/?p=kms#/keyList/base). In the top navigation bar, select a region. In the left-side navigation pane, choose **Application Access** > **AAPs**.
    
2.  On the **Application Access** tab, click **Create AAP**.
    
3.  In the **Create AAP** panel, set **Mode** to **Quick Creation** and select a KMS instance that applications need to access for the **Scope (KMS Instance)** parameter.
    
4.  Click **OK**. The browser automatically downloads the client key that is created.
    
    The client key contains **Application Access Secret(ClientKeyContent)** and **Password**. By default, **Application Access Secret(ClientKeyContent)** is saved in a file whose name is in the `clientKey_****.json` format. By default, **Password** is saved in a file whose name is in the `clientKey_****_Password.txt` format.
    

For more information about AAP authentication, see [Create an AAP](/help/en/kms/key-management-service/user-guide/create-an-aap).

## **Supported programming languages**

The following table describes the supported programming languages.

**Secret SDK**

**Supported programming language**

[Secret client](/help/en/kms/key-management-service/developer-reference/secrets-manager-client)

Java (Java 8 and later), Python, and Go

[Secret JDBC client](/help/en/kms/key-management-service/developer-reference/secrets-manager-jdbc)

Java (Java 8 and later)

[RAM secret plug-in](/help/en/kms/key-management-service/developer-reference/ram-secret-plug-in)

Java (Java 8 and later), Python, and Go

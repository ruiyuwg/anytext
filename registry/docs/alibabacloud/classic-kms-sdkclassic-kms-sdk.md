Integrating Alibaba Cloud SDK allows you to call the OpenAPI for management operations, such as creating instances and keys. You can also perform business operations, such as encryption, decryption, and retrieving secret values. This topic helps you to use Key Management Service (KMS) by integrating Alibaba Cloud SDK.

## **Access overview**

When integrating Alibaba Cloud SDK for KMS, note that management operations are accessible only through the shared gateway, while business operations are accessible through both the shared and dedicated gateways. The following figure illustrates these access methods.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5363235471/CAEQORiBgMC7sLefrRkiIGQxMDM0NzNlNzI0MDQyMGFiYWU1MWI2OTIwZDY5OWZi4032192_20250120103433.368.svg)

## **Differences between shared and dedicated gateways for accessing KMS**

The table below lists the key differences between accessing a shared gateway and a dedicated gateway when using Alibaba Cloud SDK to access KMS for business operations.

**Item**

**Shared gateway**

**Dedicated gateway**

**Network**

Public network or VPC network.

KMS private network.

**Performance**

KMS has a quota that limits the number of API requests per second.

For example, the QPS for encryption and decryption is fixed at 1000.

Instead of limiting the number of API requests, KMS processes them in best effort mode. The maximum available computing and storage resources are used during processing. When you purchase a KMS instance, you can select an appropriate QPS based on your business requirements.

**Supported APIs**

[All OpenAPIs](#3bf40c5755hax) for cryptographic operations and retrieving secret values.

[All OpenAPIs](#3bf40c5755hax) for cryptographic operations and retrieving secret values, except [ReEncrypt](/help/en/kms/key-management-service/developer-reference/api-reencrypt).

**Network access control**

The VPC ID (condition key: [acs:SourceVpc](/help/en/kms/key-management-service/security-and-compliance/condition-key#a6318009b42p0)) and IP addresses within the VPC (condition key: [acs:VpcSourceIp](/help/en/kms/key-management-service/security-and-compliance/condition-key#e6d4d5fa750sc)) are supported for network access control.

The VPC ID (condition key: [acs:SourceVpc](/help/en/kms/key-management-service/security-and-compliance/condition-key#a6318009b42p0)) and source IP addresses within a VPC (condition key: [acs:VpcSourceIp](/help/en/kms/key-management-service/security-and-compliance/condition-key#e6d4d5fa750sc)) are not supported for network access control. If you require network access control, contact your account manager.

**Authorization**

When using STS authentication to retrieve secrets, authorization is applied only to the GetSecretValue operation, not to the Decrypt operation. Other authentication methods apply authorization to both operations.

During the secrets retrieval process, both the GetSecretValue and Decrypt operations are authorized.

**Log auditing**

ActionTrail

Simple Log Service (SLS)

**SDK configurations**

**Endpoint**

During client initialization, the [shared gateway endpoint](#631e9b89f508d) must be configured with one of the following formats:

-   Public network domain names: `kms.<REGION_ID>.aliyuncs.com`.
    
-   VPC domain names: `kms-vpc.<REGION_ID>.aliyuncs.com`.
    

During client initialization, the [dedicated gateway endpoint](#e1bc30acf0b6m) must be configured following the format: `<KMS_INSTANCE_ID>.cryptoservice.kms.aliyuncs.com`.

**CA certificate**

Not required.

-   Alibaba Cloud SDK V2.0: Requires setting a CA certificate.
    
-   Alibaba Cloud SDK V1.0: Does not support certificates. Instead, the `HTTPSInsecure` runtime parameter must be set to true: `client.SetHTTPSInsecure(true)`.
    

## **Supported OpenAPI**

The management operations are only accessible through the shared gateway, while business operations can be accessed through both the shared and dedicated gateways.

**Management operations**

### Service management

**API**

**Description**

[DescribeRegions](/help/en/kms/key-management-service/developer-reference/api-describeregions)

Queries a list of available regions for the current Alibaba Cloud account.

[OpenKmsService](/help/en/kms/key-management-service/developer-reference/api-openkmsservice)

Enable KMS for the current Alibaba Cloud account.

[DescribeAccountKmsStatus](/help/en/kms/key-management-service/developer-reference/api-describeaccountkmsstatus)

Queries the status of KMS for the current Alibaba Cloud account.

### **Instance management**

**API**

**Description**

[ConnectKmsInstance](/help/en/kms/key-management-service/developer-reference/api-connectkmsinstance)

Enables a KMS instance.

[GetKmsInstance](/help/en/kms/key-management-service/developer-reference/api-getkmsinstance)

Queries the details of a KMS instance.

[ListKmsInstances](/help/en/kms/key-management-service/developer-reference/api-listkmsinstances)

Queries a list of KMS instances.

[UpdateKmsInstanceBindVpc](/help/en/kms/key-management-service/developer-reference/api-updatekmsinstancebindvpc)

Updates the virtual private cloud (VPC) associated with a KMS instance.

### **Key management**

Manage keys by calling the following API operations, such as creating and deleting keys and aliases.

**API**

**Description**

[CreateKey](/help/en/kms/key-management-service/developer-reference/api-createkey)

Creates a key. You can use key material that is generated by KMS or import your own key material. Importing your own key material is known as Bring Your Own Key (BYOK).

[GetParametersForImport](/help/en/kms/key-management-service/developer-reference/api-getparametersforimport)

Queries the parameters that are used to import key material to a key.

[ImportKeyMaterial](/help/en/kms/key-management-service/developer-reference/api-importkeymaterial)

Imports key material to a key.

[EnableKey](/help/en/kms/key-management-service/developer-reference/api-enablekey)

Changes the status of a key to Enabled.

[DisableKey](/help/en/kms/key-management-service/developer-reference/api-disablekey)

Changes the status of a key to Disabled.

[DescribeKey](/help/en/kms/key-management-service/developer-reference/api-describekey)

Queries the information about a key.

[ListKeys](/help/en/kms/key-management-service/developer-reference/api-listkeys)

Queries all keys within an Alibaba Cloud account in a region.

[UpdateKeyDescription](/help/en/kms/key-management-service/developer-reference/api-updatekeydescription)

Updates the description of a key.

[CreateAlias](/help/en/kms/key-management-service/developer-reference/api-createalias)

Creates an alias and binds it to a key.

[UpdateAlias](/help/en/kms/key-management-service/developer-reference/api-updatealias)

Updates the ID of a key that is bound to an alias.

[DeleteAlias](/help/en/kms/key-management-service/developer-reference/api-deletealias)

Deletes an alias.

[ListAliases](/help/en/kms/key-management-service/developer-reference/api-listaliases)

Queries all aliases within an Alibaba Cloud account in a region.

[ListAliasesByKeyId](/help/en/kms/key-management-service/developer-reference/api-listaliasesbykeyid)

Queries aliases that are bound to a key.

[SetDeletionProtection](/help/en/kms/key-management-service/developer-reference/api-setdeletionprotection)

Enables or disables deletion protection.

[ScheduleKeyDeletion](/help/en/kms/key-management-service/developer-reference/api-schedulekeydeletion)

Schedules deletion of a key. After you call this operation, the key enters the Pending Deletion state. The key is automatically deleted after the specified waiting period elapses.

[CancelKeyDeletion](/help/en/kms/key-management-service/developer-reference/api-cancelkeydeletion)

Cancels the scheduled deletion of a key. You can cancel the scheduled deletion of a key before the specified waiting period elapses. After the scheduled deletion is canceled, the key re-enters the Enabled state.

[DeleteKeyMaterial](/help/en/kms/key-management-service/developer-reference/api-deletekeymaterial)

Deletes key material.

**Important**

You can only delete external key material of the customer master key (CMK) that is used as a default key.

[CreateKeyVersion](/help/en/kms/key-management-service/developer-reference/api-createkeyversion)

Creates a version. Symmetric keys in KMS instances of the software key management type support this operation. Asymmetric keys outside KMS support this operation.

[DescribeKeyVersion](/help/en/kms/key-management-service/developer-reference/api-describekeyversion)

Queries the information about a key version.

[ListKeyVersions](/help/en/kms/key-management-service/developer-reference/api-listkeyversions)

Queries all versions of a key.

[UpdateRotationPolicy](/help/en/kms/key-management-service/developer-reference/api-updaterotationpolicy)

Updates the rotation policy of a key. If automatic rotation is enabled for a key, KMS automatically generates a key version on a regular basis.

### Secret management

Manage, protect, distribute, and rotate secrets by calling API operations.

**API**

**Description**

[CreateSecret](/help/en/kms/key-management-service/developer-reference/api-createsecret)

Creates a secret and stores the secret value in the initial version.

[ListSecrets](/help/en/kms/key-management-service/developer-reference/api-listsecrets)

Queries all secrets within an Alibaba Cloud account in a region.

[DescribeSecret](/help/en/kms/key-management-service/developer-reference/api-describesecret)

Queries the metadata of a secret.

[UpdateSecret](/help/en/kms/key-management-service/developer-reference/api-updatesecret)

Updates the metadata of a secret.

[PutSecretValue](/help/en/kms/key-management-service/developer-reference/api-putsecretvalue)

Stores the secret value of a new version in a secret.

**Note**

Only generic secrets support this operation.

[UpdateSecretVersionStage](/help/en/kms/key-management-service/developer-reference/api-updatesecretversionstage)

Updates the stage label that marks a secret version.

**Note**

Only generic secrets support this operation.

[DeleteSecret](/help/en/kms/key-management-service/developer-reference/api-deletesecret)

Deletes or schedules deletion of a secret.

[RestoreSecret](/help/en/kms/key-management-service/developer-reference/api-restoresecret)

Restores a secret that is scheduled to be deleted.

[ListSecretVersionIds](/help/en/kms/key-management-service/developer-reference/api-listsecretversionids)

Queries all versions of a secret.

[GetRandomPassword](/help/en/kms/key-management-service/developer-reference/api-getrandompassword)

Queries a random password string.

[RotateSecret](/help/en/kms/key-management-service/developer-reference/api-rotatesecret)

Manually rotates a secret.

[UpdateSecretRotationPolicy](/help/en/kms/key-management-service/developer-reference/api-updatesecretrotationpolicy)

Updates the rotation policy of a secret.

### Tag management

Add multiple tags to a key or secret, with each tag comprising a tag key and a tag value.

**Note**

[TagResource](/help/en/kms/key-management-service/developer-reference/api-tagresource), [UntagResource](/help/en/kms/key-management-service/developer-reference/api-untagresource), and [ListResourceTags](/help/en/kms/key-management-service/developer-reference/api-listresourcetags) allow operations on a single resource. [TagResources](/help/en/kms/key-management-service/developer-reference/api-kms-tagresources), [UntagResources](/help/en/kms/key-management-service/developer-reference/api-kms-untagresources), and [ListTagResources](/help/en/kms/key-management-service/developer-reference/api-kms-listtagresources) enable batch operations on multiple resources.

**API**

**Description**

[TagResource](/help/en/kms/key-management-service/developer-reference/api-tagresource)

Adds a tag to a key or secret.

[UntagResource](/help/en/kms/key-management-service/developer-reference/api-untagresource)

Removes a tag from a key or secret.

[ListResourceTags](/help/en/kms/key-management-service/developer-reference/api-listresourcetags)

Queries all tags of a key.

[TagResources](/help/en/kms/key-management-service/developer-reference/api-kms-tagresources)

Adds tags to multiple keys or secrets.

[UntagResources](/help/en/kms/key-management-service/developer-reference/api-kms-untagresources)

Removes tags from multiple keys or secrets at a time.

[ListTagResources](/help/en/kms/key-management-service/developer-reference/api-kms-listtagresources)

Queries all tags or specific tags of multiple keys or secrets at a time.

### **Application management**

**API**

**Description**

[CreateNetworkRule](/help/en/kms/key-management-service/developer-reference/api-createnetworkrule)

Creates an access control rule to configure the private IP addresses or CIDR blocks that are allowed to access a KMS instance.

[DeleteNetworkRule](/help/en/kms/key-management-service/developer-reference/api-deletenetworkrule)

Deletes a network access rule.

[DescribeNetworkRule](/help/en/kms/key-management-service/developer-reference/api-describenetworkrule)

Queries the details of a network access rule.

[ListNetworkRules](/help/en/kms/key-management-service/developer-reference/api-listnetworkrules)

Queries a list of network access rules.

[UpdateNetworkRule](/help/en/kms/key-management-service/developer-reference/api-updatenetworkrule)

Updates a network access rule.

[CreatePolicy](/help/en/kms/key-management-service/developer-reference/api-createpolicy)

Creates a permission policy to configure the keys and secrets that are accessible to an application.

[DeletePolicy](/help/en/kms/key-management-service/developer-reference/api-deletepolicy)

Deletes a permission policy.

[DescribePolicy](/help/en/kms/key-management-service/developer-reference/api-describepolicy)

Queries the details of a permission policy.

[UpdatePolicy](/help/en/kms/key-management-service/developer-reference/api-updatepolicy)

Updates a permission policy.

[ListPolicies](/help/en/kms/key-management-service/developer-reference/api-listpolicies)

Queries permission policies.

[CreateApplicationAccessPoint](/help/en/kms/key-management-service/developer-reference/api-createapplicationaccesspoint)

Creates an application access point (AAP).

[DeleteApplicationAccessPoint](/help/en/kms/key-management-service/developer-reference/api-deleteapplicationaccesspoint)

Deletes an AAP.

[DescribeApplicationAccessPoint](/help/en/kms/key-management-service/developer-reference/api-describeapplicationaccesspoint)

Queries the details of an AAP.

[ListApplicationAccessPoints](/help/en/kms/key-management-service/developer-reference/api-listapplicationaccesspoints)

Queries a list of AAPs.

[UpdateApplicationAccessPoint](/help/en/kms/key-management-service/developer-reference/api-updateapplicationaccesspoint)

Updates the information about an AAP.

[CreateClientKey](/help/en/kms/key-management-service/developer-reference/api-createclientkey)

Creates a client key.

[DeleteClientKey](/help/en/kms/key-management-service/developer-reference/api-deleteclientkey)

Deletes a client key.

[ListClientKeys](/help/en/kms/key-management-service/developer-reference/api-listclientkeys)

Queries a list of client keys

[GetClientKey](/help/en/kms/key-management-service/developer-reference/api-getclientkey)

Queries the information about a client key.

**Business operations**

**Important**

To perform cryptographic operations through the shared gateway, you must first [enable public access](/help/en/kms/key-management-service/user-guide/access-keys-of-a-kms-instance-over-the-internet).

**Cryptographic operations**

![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png) indicates it is supported, and × indicates it is not.

**API operation**

**Description**

**Shared gateway**

**Dedicated gateway**

[Encrypt](/help/en/kms/key-management-service/developer-reference/api-encrypt)

Encrypts plaintext by using a symmetric key.

![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png)

![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png)

[GenerateDataKey](/help/en/kms/key-management-service/developer-reference/api-generatedatakey)

Generates a random data key that is used to encrypt on-premises data.

![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png)

![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png)

[GenerateDataKeyWithoutPlaintext](/help/en/kms/key-management-service/developer-reference/api-generatedatakeywithoutplaintext)

Generates a random data key, which can be used to encrypt on-premises data.

![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png)

![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png)

[ExportDataKey](/help/en/kms/key-management-service/developer-reference/api-exportdatakey)

Encrypts a data key by using a specific public key, and exports the data key.

![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png)

![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png)

[GenerateAndExportDataKey](/help/en/kms/key-management-service/developer-reference/api-generateandexportdatakey)

Randomly generates a data key, and uses a KMS key and a public key to encrypt the data key. This operation returns the ciphertext of the data key encrypted using both the data key and the public key.

![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png)

![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png)

[Decrypt](/help/en/kms/key-management-service/developer-reference/api-decrypt)

Decrypts ciphertext.

![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png)

![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png)

[ReEncrypt](/help/en/kms/key-management-service/developer-reference/api-reencrypt)

Re-encrypts ciphertext. When you call this operation, KMS uses a different key to re-encrypt the generated plaintext or data key, and then returns the new ciphertext.

![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png)

×

[AsymmetricSign](/help/en/kms/key-management-service/developer-reference/api-asymmetricsign)

Generates a signature by using an asymmetric key.

![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png)

![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png)

[AsymmetricVerify](/help/en/kms/key-management-service/developer-reference/api-asymmetricverify)

Verifies a signature by using an asymmetric key.

![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png)

![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png)

[AsymmetricDecrypt](/help/en/kms/key-management-service/developer-reference/api-asymmetricdecrypt)

Decrypts data by using an asymmetric key.

![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png)

![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png)

[AsymmetricEncrypt](/help/en/kms/key-management-service/developer-reference/api-asymmetricencrypt)

Encrypts data by using an asymmetric key.

![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png)

![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png)

[GetPublicKey](/help/en/kms/key-management-service/developer-reference/api-getpublickey)

Retrieves the public key of an asymmetric key pair. You can use the public key to encrypt local data and verify signatures.

![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png)

![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png)

**Retrieving secret values**

![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png) indicates it is supported, and × indicates it is not.

**API operation**

**Description**

**Shared gateway**

**Dedicated gateway**

[GetSecretValue](/help/en/kms/key-management-service/developer-reference/api-getsecretvalue)

Retrieves a secret value.

![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png)

![对](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7432856561/p442272.png)

## **Endpoint**

**Shared gateway endpoint (also known as KMS service endpoint)**

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
    

**Dedicated gateway endpoint (also known as KMS instance endpoint)**

`<KMS_INSTANCE_ID>.cryptoservice.kms.aliyuncs.com`

Replace `<KMS_INSTANCE_ID>` with your actual KMS Instance ID.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9416537371/p891595.png)

## Authentication method

When accessing the OpenAPI through a shared gateway or dedicated gateway using Alibaba Cloud SDK, the authentication methods are the same. RAM-based identity authentication methods are supported, such as AccessKey (AK), STS Token, RamRoleArn, and ECS instance RAM roles. For more information, see [Manage access credentials](/help/en/sdk/developer-reference/v2-manage-access-credentials).

## **AccessKey**

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
        

## **STS token**

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
    

## **RamRoleArn**

RAM users or cloud services can obtain temporary permissions by assuming roles instead of directly using long-term access keys, thereby reducing the risk of key leakage. For instance, in temporary data processing tasks, RAM users or cloud services can temporarily assume a role with a specific RamRoleArn. RamRoleArn is the ARN information of the RAM role. Once the task is completed, the role's permissions are revoked, further mitigating the risk of exposure.

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/) by using an Alibaba Cloud account or a RAM role who has administrative rights.
    
2.  [Create a RAM role](/help/en/ram/user-guide/create-a-ram-role/).
    
3.  Grant the RAM role access to KMS. You have two methods to complete the grant.
    
    -   Method 1: Through identity-based policies
        
        KMS provides system-defined permission policies that can be attached to RAM users. For more information, see [System policies for KMS](/help/en/kms/key-management-service/security-and-compliance/kms-1). You can also create [custom policies](/help/en/kms/key-management-service/security-and-compliance/sample-custom-permission-policies).
        
    -   Method 2: Through resource-based policies
        
        KMS supports resource-based policies, which allow you to set access permissions for keys and secrets. This lets you control which Alibaba Cloud accounts and RAM roles have permission to manage or use KMS keys and secrets. For more information, see [Key policies](/help/en/kms/key-management-service/security-and-compliance/key-policies/) and [Secret policies](/help/en/kms/key-management-service/security-and-compliance/secret-policies/).
        
4.  [View the RamRoleArn about a RAM role](/help/en/ram/user-guide/view-the-information-about-a-ram-role).
    
    The RamRoleArn follows the format `acs:ram::$accountID:role/$roleName`, where `$accountID` is the Alibaba Cloud account and `$roleName` is the RAM role name.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1208467371/p907479.png)
    

## **ECS i**nstance **RAM roles**

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
    

## **Supported** programming languages

The table below lists supported languages and their SDK download links and reference documentation.

**Supported programming language**

**V2.0 SDK (recommended)**

**V1.0 SDK (not recommended)**

Java

-   Download:
    
    -   Java Synchronous: [kms20160120](https://api.alibabacloud.com/api-tools/sdk/Kms?version=2016-01-20&language=java-tea)
        
    -   Java Asynchronous: [alibabacloud-kms20160120](https://api.aliyun.com/api-tools/sdk/Kms?version=2016-01-20&language=java-async-tea)
        
-   Documentation: [Get started with Alibaba Cloud Darabonba SDK for Java](/help/en/sdk/developer-reference/v2-java-quick-start)
    

-   Download: [aliyun-java-sdk-kms](https://api.alibabacloud.com/api-tools/sdk/Kms?version=2016-01-20&language=java&tab=primer-doc)
    
-   Documentation: [Get started with Alibaba Cloud SDK V1.0 for Java](/help/en/sdk/developer-reference/get-started-with-alibaba-cloud-classic-sdk-for-java#topic-2089038)
    

Python

-   Download: [alibabacloud\_kms20160120](https://api.alibabacloud.com/api-tools/sdk/Kms?version=2016-01-20&language=python-tea)
    
-   Documentation: [Get started with Alibaba Cloud Darabonba SDK for Python](/help/en/sdk/developer-reference/v2-python-quick-start)
    

-   Download: [aliyun-python-sdk-kms](https://api.alibabacloud.com/api-tools/sdk/Kms?version=2016-01-20&language=python)
    
-   Documentation: [Get started](/help/en/sdk/developer-reference/install-the-classic-sdk-and-its-core-library#topic-2107205)
    

C++

-   Download: [kms-20160120](https://api.alibabacloud.com/api-tools/sdk/Kms?version=2016-01-20&language=cpp-tea)
    
-   Documentation: None
    

-   Download: [aliyun-openapi-cpp-sdk/kms](https://api.alibabacloud.com/api-tools/sdk/Kms?version=2016-01-20&language=cpp)
    
-   Documentation: None
    

PHP

-   Download: [alibabacloud/kms-20160120](https://api.alibabacloud.com/api-tools/sdk/Kms?version=2016-01-20&language=php-tea)
    
-   Documentation: [Get started with Alibaba Cloud Darabonba SDK for PHP](/help/en/sdk/developer-reference/v2-php-quick-start)
    

-   Download: [alibabacloud/kms](https://api.alibabacloud.com/api-tools/sdk/Kms?version=2016-01-20&language=php)
    
-   Documentation: [Get started with Alibaba Cloud SDK V1.0 for PHP](/help/en/sdk/developer-reference/get-started-with-alibaba-cloud-classic-sdk-for-php#topic-2109191)
    

.NET (C#)

-   Download: [AlibabaCloud.SDK.Kms20160120](https://api.alibabacloud.com/api-tools/sdk/Kms?version=2016-01-20&language=csharp-tea)
    
-   Documentation: [Get started with Alibaba Cloud Darabonba SDK for .NET](/help/en/sdk/developer-reference/v2-net-quick-start)
    

-   Download: [aliyun-net-sdk-kms](https://api.alibabacloud.com/api-tools/sdk/Kms?version=2016-01-20&language=csharp)
    
-   Documentation: [Get started with Alibaba Cloud Classic SDK for .NET](/help/en/sdk/developer-reference/get-started-with-alibaba-cloud-classic-sdk-for-dotnet#topic-2109044)
    

Go

-   Download: [kms-20160120](https://api.alibabacloud.com/api-tools/sdk/Kms?version=2016-01-20&language=go-tea)
    
-   Documentation: [Get started with Alibaba Cloud Darabonba SDK for Go](/help/en/sdk/developer-reference/v2-go-quick-start)
    

-   Download: [alibaba-cloud-sdk-go](https://api.alibabacloud.com/api-tools/sdk/Kms?version=2016-01-20&language=go)
    
-   Documentation: [Get started with Alibaba Cloud SDK V1.0 for Go](/help/en/sdk/developer-reference/get-started-with-alibaba-cloud-classic-sdk-for-go#topic-2109040)
    

TypeScript

-   Download: [kms20160120](https://api.alibabacloud.com/api-tools/sdk/Kms?version=2016-01-20&language=nodejs-tea)
    
-   Documentation: None
    

None

Swift

-   Download: [kms-20160120](https://api.alibabacloud.com/api-tools/sdk/Kms?version=2016-01-20&language=swift-tea)
    
-   Documentation: None
    

None

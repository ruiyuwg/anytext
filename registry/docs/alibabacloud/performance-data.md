Key Management Service (KMS) has different queries per second (QPS) quotas on different API operations. If the QPS quotas are exhausted, the API operations are restricted. This topic describes the QPS quotas supported by KMS.

## Overview

You can integrate SDKs for KMS to access KMS over shared or dedicated gateways. You can use shared gateways to call KMS API, and dedicated gateways to call KMS API and KMS Instance API. For more information, see [SDK references](/help/en/kms/key-management-service/developer-reference/sdk-user-guide/). For more information about differences between shared and dedicated gateways, see [Differences between shared and dedicated gateways for accessing KMS](/help/en/kms/key-management-service/developer-reference/classic-kms-sdkclassic-kms-sdk/).

For shared gateways, QPS quotas are imposed based on each Alibaba Cloud account and cannot be increased. For dedicated gateways, QPS quotas are imposed based on each KMS instance and can be increased by upgrading the computing performance of a KMS instance.

## Shared gateway

The following table describes the QPS quotas for each Alibaba Cloud account in a region.

**Operation type**

**Operation of KMS API**

**QPS quota**

Key management operations

The operations that query the metadata, properties, or status of resources such as keys, aliases, and tags. All API operations in the following list consume the quota:

-   [GetParametersForImport](/help/en/kms/key-management-service/developer-reference/api-getparametersforimport)
    
-   [DescribeKey](/help/en/kms/key-management-service/developer-reference/api-describekey)
    
-   [ListKeys](/help/en/kms/key-management-service/developer-reference/api-listkeys)
    
-   [DescribeKeyVersion](/help/en/kms/key-management-service/developer-reference/api-describekeyversion)
    
-   [ListKeyVersions](/help/en/kms/key-management-service/developer-reference/api-listkeyversions)
    
-   [GetPublicKey](/help/en/kms/key-management-service/developer-reference/getpublickey-2)
    
-   [ListAliases](/help/en/kms/key-management-service/developer-reference/api-listaliases)
    
-   [ListAliasesByKeyId](/help/en/kms/key-management-service/developer-reference/api-listaliasesbykeyid)
    
-   [ListTagResources](/help/en/kms/key-management-service/developer-reference/api-kms-listtagresources)
    
-   [DescribeRegions](/help/en/kms/key-management-service/developer-reference/api-describeregions)
    

50 QPS

The operation that queries the tags of a key.

[ListResourceTags](/help/en/kms/key-management-service/developer-reference/api-listresourcetags)

300 QPS

The operation that creates a key.

[CreateKey](/help/en/kms/key-management-service/developer-reference/api-createkey)

10 QPS

The operations that create aliases and modify keys, aliases, and tags. All API operations in the following list consume the quota:

-   [ImportKeyMaterial](/help/en/kms/key-management-service/developer-reference/api-importkeymaterial)
    
-   [EnableKey](/help/en/kms/key-management-service/developer-reference/api-enablekey)
    
-   [DisableKey](/help/en/kms/key-management-service/developer-reference/api-disablekey)
    
-   [SetDeletionProtection](/help/en/kms/key-management-service/developer-reference/api-setdeletionprotection)
    
-   [ScheduleKeyDeletion](/help/en/kms/key-management-service/developer-reference/api-schedulekeydeletion)
    
-   [CancelKeyDeletion](/help/en/kms/key-management-service/developer-reference/api-cancelkeydeletion)
    
-   [DeleteKeyMaterial](/help/en/kms/key-management-service/developer-reference/api-deletekeymaterial)
    
-   [UpdateKeyDescription](/help/en/kms/key-management-service/developer-reference/api-updatekeydescription)
    
-   [UpdateRotationPolicy](/help/en/kms/key-management-service/developer-reference/api-updaterotationpolicy)
    
-   [CreateAlias](/help/en/kms/key-management-service/developer-reference/api-createalias)
    
-   [UpdateAlias](/help/en/kms/key-management-service/developer-reference/api-updatealias)
    
-   [DeleteAlias](/help/en/kms/key-management-service/developer-reference/api-deletealias)
    
-   [TagResource](/help/en/kms/key-management-service/developer-reference/api-tagresource)
    
-   [UntagResource](/help/en/kms/key-management-service/developer-reference/api-untagresource)
    
-   [TagResources](/help/en/kms/key-management-service/developer-reference/api-kms-tagresources)
    
-   [UntagResources](/help/en/kms/key-management-service/developer-reference/api-kms-untagresources)
    

30 QPS

Cryptographic operations

The operations that generate data keys, encrypt data, and decrypt data by using symmetric keys. All API operations in the following list consume the quota:

-   [Encrypt](/help/en/kms/key-management-service/support/api-kms-encrypt)
    
-   [Decrypt](/help/en/kms/key-management-service/developer-reference/api-decrypt)
    
-   [GenerateDataKey](/help/en/kms/key-management-service/developer-reference/api-generatedatakey)
    
-   [GenerateDataKeyWithoutPlaintext](/help/en/kms/key-management-service/developer-reference/api-generatedatakeywithoutplaintext)
    

1,000 QPS

The operations that encrypt data, decrypt data, sign data, and verify signatures by using asymmetric keys. All API operations in the following list consume the quota:

-   [AsymmetricSign](/help/en/kms/key-management-service/support/api-kms-asymmetricsign)
    
-   [AsymmetricVerify](/help/en/kms/key-management-service/support/api-kms-asymmetricverify)
    
-   [AsymmetricDecrypt](/help/en/kms/key-management-service/support/api-kms-asymmetricdecrypt)
    
-   [AsymmetricEncrypt](/help/en/kms/key-management-service/support/api-kms-asymmetricencrypt)
    

200 QPS

Secrets-related operations

The operations that create or delete a secret. All API operations in the following list consume the quota:

-   [CreateSecret](/help/en/kms/key-management-service/developer-reference/api-createsecret)
    
-   [DeleteSecret](/help/en/kms/key-management-service/developer-reference/api-deletesecret)
    

10 QPS

The operations that query the information about a secret and retrieve a secret value. All API operations in the following list consume the quota:

-   [DescribeSecret](/help/en/kms/key-management-service/developer-reference/api-describesecret)
    
-   [GetSecretValue](/help/en/kms/key-management-service/developer-reference/api-getsecretvalue)
    

450 QPS

The operations that query a list of secrets and the metadata of secrets. All the API operations in the following list are low-frequency operations and consume the quota.

-   [ListSecrets](/help/en/kms/key-management-service/developer-reference/api-listsecrets)
    
-   [ListSecretVersionIds](/help/en/kms/key-management-service/developer-reference/api-listsecretversionids)
    
-   [PutSecretValue](/help/en/kms/key-management-service/developer-reference/api-putsecretvalue)
    
-   [UpdateSecret](/help/en/kms/key-management-service/developer-reference/api-updatesecret)
    
-   [UpdateSecretVersionStage](/help/en/kms/key-management-service/developer-reference/api-updatesecretversionstage)
    
-   [GetRandomPassword](/help/en/kms/key-management-service/developer-reference/api-getrandompassword)
    
-   [UpdateSecretRotationPolicy](/help/en/kms/key-management-service/developer-reference/api-updatesecretrotationpolicy)
    
-   [RestoreSecret](/help/en/kms/key-management-service/developer-reference/api-restoresecret)
    

40 QPS

The operation that rotates a secret.

[RotateSecret](/help/en/kms/key-management-service/developer-reference/api-rotatesecret)

50 queries per hour

Other supported operations

The operations that activate KMS and query the status of KMS. All API operations in the following list consume the quota:

-   [OpenKmsService](/help/en/kms/key-management-service/developer-reference/api-openkmsservice)
    
-   [DescribeAccountKmsStatus](/help/en/kms/key-management-service/developer-reference/api-describeaccountkmsstatus)
    
-   [ConnectKmsInstance](/help/en/kms/key-management-service/developer-reference/api-connectkmsinstance)
    
-   [GetKmsInstance](/help/en/kms/key-management-service/developer-reference/api-getkmsinstance)
    
-   [ListKmsInstances](/help/en/kms/key-management-service/developer-reference/api-listkmsinstances)
    
-   [UpdateKmsInstanceBindVpc](/help/en/kms/key-management-service/developer-reference/api-updatekmsinstancebindvpc)
    
-   [CreateNetworkRule](/help/en/kms/key-management-service/developer-reference/api-createnetworkrule)
    
-   [DeleteNetworkRule](/help/en/kms/key-management-service/developer-reference/api-deletenetworkrule)
    
-   [DescribeNetworkRule](/help/en/kms/key-management-service/developer-reference/api-describenetworkrule)
    
-   [ListNetworkRules](/help/en/kms/key-management-service/developer-reference/api-listnetworkrules)
    
-   [UpdateNetworkRule](/help/en/kms/key-management-service/developer-reference/api-updatenetworkrule)
    
-   [CreatePolicy](/help/en/kms/key-management-service/developer-reference/api-createpolicy)
    
-   [DeletePolicy](/help/en/kms/key-management-service/developer-reference/api-deletepolicy)
    
-   [DescribePolicy](/help/en/kms/key-management-service/developer-reference/api-describepolicy)
    
-   [UpdatePolicy](/help/en/kms/key-management-service/developer-reference/api-updatepolicy)
    
-   [ListPolicies](/help/en/kms/key-management-service/developer-reference/api-listpolicies)
    
-   [CreateApplicationAccessPoint](/help/en/kms/key-management-service/developer-reference/api-createapplicationaccesspoint)
    
-   [DeleteApplicationAccessPoint](/help/en/kms/key-management-service/developer-reference/api-deleteapplicationaccesspoint)
    
-   [DescribeApplicationAccessPoint](/help/en/kms/key-management-service/developer-reference/api-describeapplicationaccesspoint)
    
-   [ListApplicationAccessPoints](/help/en/kms/key-management-service/developer-reference/api-listapplicationaccesspoints)
    
-   [UpdateApplicationAccessPoint](/help/en/kms/key-management-service/developer-reference/api-updateapplicationaccesspoint)
    
-   [CreateClientKey](/help/en/kms/key-management-service/developer-reference/api-createclientkey)
    
-   [DeleteClientKey](/help/en/kms/key-management-service/developer-reference/api-deleteclientkey)
    
-   [ListClientKeys](/help/en/kms/key-management-service/developer-reference/api-listclientkeys)
    
-   [GetClientKey](/help/en/kms/key-management-service/developer-reference/api-getclientkey)
    

1 QPS

## Dedicated gateway

**Important**

If you use dedicated gateways to access KMS, KMS does not limit the number of API requests. KMS processes API requests in best effort mode. The maximum available computing and storage resources are used during processing. When you purchase a KMS instance, you can select an appropriate **computing performance** plan based on your business requirements.

### Test scenario

-   The performance quota for symmetric algorithms is calculated when an Aliyun\_AES\_256 key is used to encrypt or decrypt 32-byte data in GCM mode.
    
-   The performance quota for asymmetric algorithms is calculated when an RSA\_2048 key is used to sign 32-byte data.
    
-   The performance quota for retrieving secret values is calculated when KMS retrieves 32-byte secret values.
    
-   Your KMS instance of the hardware key management type is connected to a hardware security module (HSM) cluster, and the number of HSMs in the HSM cluster is greater than or equal to two. This allows you to test the performance quotas of the KMS instance.
    

### QPS quotas for KMS instances of the software key management type

The following table describes the performance quotas of KMS instances of the software key management type in different scenarios.

**Note**

If you want to purchase a KMS instance of the software key management type with a computing performance of 10,000 or 20,000, submit a [ticket](https://smartservice.console.alibabacloud.com/?/ticket/createIndex#/ticket/createIndex).

**Operation type**

**Operation of KMS API**

**Operation of KMS Instance API**

**Computing performance plan (1,000 QPS)**

**Computing performance plan (2,000 QPS)**

**Computing performance plan (4,000 QPS)**

**Computing performance plan (10,000 QPS)**

**Computing performance plan (20,000 QPS)**

Operations by using symmetric algorithms

The operations that encrypt data, decrypt data, and generate data keys by using symmetric algorithms. All API operations in the following list consume the quota:

-   [Encrypt](/help/en/kms/key-management-service/developer-reference/api-encrypt)
    
-   [Decrypt](/help/en/kms/key-management-service/developer-reference/api-decrypt)
    
-   [GenerateDataKey](/help/en/kms/key-management-service/developer-reference/api-generatedatakey)
    
-   [GenerateDataKeyWithoutPlaintext](/help/en/kms/key-management-service/developer-reference/api-generatedatakeywithoutplaintext)
    

The operations that encrypt data, decrypt data, and generate data keys by using symmetric algorithms. All API operations in the following list consume the quota:

-   [AdvanceEncrypt](/help/en/kms/key-management-service/developer-reference/advanceencrypt)
    
-   [AdvanceDecrypt](/help/en/kms/key-management-service/developer-reference/advancedecrypt)
    
-   [AdvanceGenerateDataKey](/help/en/kms/key-management-service/developer-reference/advancegeneratedatakey)
    
-   [Encrypt](/help/en/kms/key-management-service/developer-reference/encrypt-2)
    
-   [Decrypt](/help/en/kms/key-management-service/developer-reference/decrypt-2)
    
-   [GenerateDataKey](/help/en/kms/key-management-service/developer-reference/generatedatakey-2)
    

1,000

2,000

4,000

10,000

20,000

Operations by using asymmetric algorithms

The operations that encrypt data, decrypt data, and generate data keys by using asymmetric algorithms. All API operations in the following list consume the quota:

-   [AsymmetricEncrypt](/help/en/kms/key-management-service/developer-reference/api-asymmetricencrypt)
    
-   [AsymmetricDecrypt](/help/en/kms/key-management-service/developer-reference/api-asymmetricdecrypt)
    
-   [AsymmetricSign](/help/en/kms/key-management-service/developer-reference/api-asymmetricsign)
    
-   [AsymmetricVerify](/help/en/kms/key-management-service/developer-reference/api-asymmetricverify)
    

The operations that encrypt data, decrypt data, and generate data keys by using asymmetric algorithms. All API operations in the following list consume the quota:

-   [Encrypt](/help/en/kms/key-management-service/developer-reference/encrypt-2)
    
-   [Decrypt](/help/en/kms/key-management-service/developer-reference/decrypt-2)
    
-   [Sign](/help/en/kms/key-management-service/developer-reference/sign-1)
    
-   [Verify](/help/en/kms/key-management-service/developer-reference/verify-1)
    

200

300

500

1,300

2,500

Operations to obtain a public key

The operation that queries the public key of an asymmetric key.

[GetPublicKey](/help/en/kms/key-management-service/developer-reference/api-getpublickey)

The operation that queries the public key of an asymmetric key.

[GetPublicKey](/help/en/kms/key-management-service/developer-reference/getpublickey-2)

1,000

2,000

4,000

10,000

20,000

Operations to use secrets

The operation that retrieves values of secrets.

[GetSecretValue](/help/en/kms/key-management-service/developer-reference/api-getsecretvalue)

The operation that retrieves values of secrets.

[GetSecretValue](/help/en/kms/key-management-service/developer-reference/getsecretvalue-2)

500

1,000

2,000

4,000

4,000

Operations to generate random numbers

N/A

The operation that generates a random number.

[GenerateRandom](/help/en/kms/key-management-service/developer-reference/generaterandom-1)

1,000

2,000

4,000

10,000

20,000

Operations to generate data key pairs

N/A

The operations that generate data key pairs. All API operations in the following list consume the quota:

-   [GenerateDataKeyPair](/help/en/kms/key-management-service/developer-reference/generatedatakeypair)
    
-   [GenerateDataKeyPairWithoutPlaintext](/help/en/kms/key-management-service/developer-reference/generatedatakeypairwithoutplaintext)
    
-   [AdvanceGenerateDataKeyPair](/help/en/kms/key-management-service/developer-reference/advancegeneratedatakeypair)
    
-   [AdvanceGenerateDataKeyPairWithoutPlaintext](/help/en/kms/key-management-service/developer-reference/advancegeneratedatakeypairwithoutplaintext)
    

1

1

1

1

1

### QPS quotas for KMS instances of the hardware key management type

The following table describes the QPS quotas of KMS instances of the hardware key management type in different scenarios.

**Operation type**

**Operation of KMS API**

**Operation of KMS Instance API**

**Computing performance plan (2,000 QPS)**

**Computing performance plan (4,000 QPS)**

**Computing performance plan (6,000 QPS)**

**Computing performance plan (8,000 QPS)**

Operations by using symmetric algorithms

The operations that encrypt data, decrypt data, and generate data keys by using symmetric algorithms. All API operations in the following list consume the quota:

-   [Encrypt](/help/en/kms/key-management-service/developer-reference/api-encrypt)
    
-   [Decrypt](/help/en/kms/key-management-service/developer-reference/api-decrypt)
    
-   [GenerateDataKey](/help/en/kms/key-management-service/developer-reference/api-generatedatakey)
    
-   [GenerateDataKeyWithoutPlaintext](/help/en/kms/key-management-service/developer-reference/api-generatedatakeywithoutplaintext)
    

The operations that encrypt data, decrypt data, and generate data keys by using symmetric algorithms. All API operations in the following list consume the quota:

-   [AdvanceEncrypt](/help/en/kms/key-management-service/developer-reference/advanceencrypt)
    
-   [AdvanceDecrypt](/help/en/kms/key-management-service/developer-reference/advancedecrypt)
    
-   [AdvanceGenerateDataKey](/help/en/kms/key-management-service/developer-reference/advancegeneratedatakey)
    
-   [Encrypt](/help/en/kms/key-management-service/developer-reference/encrypt-2)
    
-   [Decrypt](/help/en/kms/key-management-service/developer-reference/decrypt-2)
    
-   [GenerateDataKey](/help/en/kms/key-management-service/developer-reference/generatedatakey-2)
    

2,000

4,000

6,000

8,000

Operations by using asymmetric algorithms

The operations that encrypt data, decrypt data, and generate data keys by using asymmetric algorithms. All API operations in the following list consume the quota:

-   [AsymmetricEncrypt](/help/en/kms/key-management-service/developer-reference/api-asymmetricencrypt)
    
-   [AsymmetricDecrypt](/help/en/kms/key-management-service/developer-reference/api-asymmetricdecrypt)
    
-   [AsymmetricSign](/help/en/kms/key-management-service/developer-reference/api-asymmetricsign)
    
-   [AsymmetricVerify](/help/en/kms/key-management-service/developer-reference/api-asymmetricverify)
    

The operations that encrypt data, decrypt data, and generate data keys by using asymmetric algorithms. All API operations in the following list consume the quota:

-   [Encrypt](/help/en/kms/key-management-service/developer-reference/encrypt-2)
    
-   [Decrypt](/help/en/kms/key-management-service/developer-reference/decrypt-2)
    
-   [Sign](/help/en/kms/key-management-service/developer-reference/sign-1)
    
-   [Verify](/help/en/kms/key-management-service/developer-reference/verify-1)
    

300

500

700

900

Operations to obtain a public key

The operation that queries the public key of an asymmetric key.

[GetPublicKey](/help/en/kms/key-management-service/developer-reference/api-getpublickey)

The operation that queries the public key of an asymmetric key.

[GetPublicKey](/help/en/kms/key-management-service/developer-reference/getpublickey-2)

2,000

4,000

6,000

8,000

Operations to use secrets

The operation that retrieves values of secrets.

[GetSecretValue](/help/en/kms/key-management-service/developer-reference/api-getsecretvalue)

The operation that retrieves values of secrets.

[GetSecretValue](/help/en/kms/key-management-service/developer-reference/getsecretvalue-2)

1,000

2,000

3,000

4,000

Operations to generate random numbers

N/A

The operation that generates a random number.

[GenerateRandom](/help/en/kms/key-management-service/developer-reference/generaterandom-1)

2,000

4,000

6,000

8,000

Operations to generate data key pairs.

N/A

The operations that generate data key pairs. All API operations in the following list consume the quota:

-   [GenerateDataKeyPair](/help/en/kms/key-management-service/developer-reference/generatedatakeypair)
    
-   [GenerateDataKeyPairWithoutPlaintext](/help/en/kms/key-management-service/developer-reference/generatedatakeypairwithoutplaintext)
    
-   [AdvanceGenerateDataKeyPair](/help/en/kms/key-management-service/developer-reference/advancegeneratedatakeypair)
    
-   [AdvanceGenerateDataKeyPairWithoutPlaintext](/help/en/kms/key-management-service/developer-reference/advancegeneratedatakeypairwithoutplaintext)
    

1

1

1

1

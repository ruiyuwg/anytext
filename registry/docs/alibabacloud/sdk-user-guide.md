Key Management Service (KMS) provides Alibaba Cloud SDK, secret SDKs, and KMS Instance SDK. KMS Instance SDK is not recommended. This topic describes the SDK integration process, authentication, supported API operations, and supported gateway types. You can select a SDK based on your business requirements.

## **SDK integration flowchart**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1086572671/CAEQTxiBgMChp_Ox0xkiIGE5M2E5YzM2YjM0YTQ1NTRiNTkzMGY3YWZjYTA5Mzg54902130_20250123141608.658.svg)

## **Alibaba Cloud SDK**

Alibaba Cloud SDK is an encapsulated program dependency package and is used to call API operations of cloud services. This way, developers can quickly build applications on top of Alibaba Cloud. Alibaba Cloud SDK supports both management API operations to manage secrets and keys and business API operations. Alibaba Cloud SDK supports Java, Python, C++, PHP, .NET (C# only), Go, TypeScript, and Swift. For more information, see [Alibaba Cloud SDK](/help/en/kms/key-management-service/developer-reference/classic-kms-sdkclassic-kms-sdk/).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1086572671/CAEQTxiBgICmgPmx0xkiIDY0NjUzODMyMWExODQxZDBiMTExYzViYTY1MDE5NzBl4955759_20250303141512.574.svg)

### **Supported API operations**

Alibaba Cloud SDK allows you to call **management** and **business operations** of **KMS API**. For more information, see [Supported OpenAPI](/help/en/kms/key-management-service/developer-reference/classic-kms-sdkclassic-kms-sdk/).

-   Management operations: the operations to manage default keys and KMS instances, such as creating a key, creating a secret, creating a KMS instance, and changing key tags.
    
-   Business operations:
    
    -   Cryptographic operations: symmetric encryption and decryption, asymmetric encryption and decryption, envelope encryption, and the operations to generate data keys, generate digital signatures, and verify digital signatures.
        
    -   Secret value retrieval: the operation to retrieve the secret values of secrets in KMS instances.
        

**Important**

When you use Alibaba Cloud SDK to retrieve a secret value in the production environment, we recommend that you implement business logic such as retry policies and secret caching to prevent secret value retrieval failures caused by network jitter. For more information, see [Use the exponential backoff method to retry requests](/help/en/kms/key-management-service/use-cases/use-the-exponential-backoff-method-to-retry-requests).

### **Supported gateway types**

Alibaba Cloud SDK allows you to call KMS API and KMS Instance API over shared or dedicated gateways. You can call management API operations only over shared gateways. You can call business API operations over shared or dedicated gateways.

**Gateway type**

**Recommended scenario**

**Authentication**

**Supported API operation**

Shared gateway

-   API operations must be called to manage KMS instances, keys, and secrets, such as creating a key, creating a secret, and creating a KMS instance.
    
-   Workloads are deployed outside Alibaba Cloud virtual private clouds (VPCs).
    
-   Access is initiated to KMS from a non-production environment such as an internal test environment.
    

RAM authentication

All KMS API operations

Dedicated gateway

-   Workloads are deployed on Alibaba Cloud VPCs.
    
-   Business API operations, such as encryption and decryption and secret retrieval, are frequently called. That leads to high requirements for performance.
    
-   The requirement for service data security is high.
    

RAM authentication

The secret value retrieval operation and cryptographic operations of KMS API

## **Secret SDKs**

Secret SDKs are a tool for custom encapsulation of KMS API and KMS Instance API and encapsulate the capabilities to cache and refresh secrets in applications. Secret SDKs feature high service stability and easy integration with service applications for developers. Secret SDKs only allow you to retrieve secrets. The following types of secret SDKs are available: the secret client, the secret Java Database Connectivity (JDBC) client, and the Resource Access Management (RAM) secret plug-in. Secret SDKs support Java 8 and later, Python, and Go. For more information, see [Secret SDKs](/help/en/kms/key-management-service/developer-reference/secrets-manager-sdk/).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1086572671/CAEQTxiBgMDPm.6x0xkiIGI3ZDQwYWEyNzk2NzQ2NDBhYjNmMjIyN2ExYWUyYmI14955759_20250303150311.242.svg)

### **Types of secret SDKs**

**SDK type**

**Description**

[Secret client](/help/en/kms/key-management-service/developer-reference/secrets-manager-client)

-   **All types of secrets** are supported.
    
-   You can use a single line of code to quickly retrieve a secret in an application.
    
-   The secret client encapsulates the capabilities to cache and refresh secrets in applications, providing higher service stability.
    

[Secret JDBC client](/help/en/kms/key-management-service/developer-reference/secrets-manager-jdbc)

-   Only Java is supported. You must use Java 8 or later.
    
-   Only **ApsaraDB RDS secrets** **and generic secrets whose secret values are in the** `{"AccountName":"<The username of your database account>","AccountPassword":"<The password of your database account>"}` format are supported.
    
-   If you connect to a database by using JDBC connections, connection pools, or open source database frameworks, you can use the secret JDBC client to complete identity authentication and configure the custom secret refresh frequency. Connection pools include c3p0 and Database Connection Pools (DBCPs).
    

[RAM secret plugin](/help/en/kms/key-management-service/developer-reference/ram-secret-plug-in)

-   Only **RAM secrets** are supported.
    
-   The Alibaba Cloud SDK that you use must be supported by the RAM secret plug-in. For more information, see [Supported Alibaba Cloud SDKs](/help/en/kms/key-management-service/developer-reference/ram-secret-plug-in).
    

### **Supported APIs**

Secret SDKs only allow you to **retrieve** **secret values** by calling KMS API or KMS Instance API. KMS Instance API is not recommended. If you want to call API operations to manage secrets, we recommend that you use Alibaba Cloud SDK.

**Important**

When you use secret SDKs to retrieve a secret value in the production environment, we recommend that you implement business logic such as retry policies and secret caching to prevent secret value retrieval failures caused by network jitter. For more information, see [Use the exponential backoff method to retry requests](/help/en/kms/key-management-service/use-cases/use-the-exponential-backoff-method-to-retry-requests).

### **Supported gateway types**

Secret SDKs retrieve secret values over shared or dedicated gateways. Shared gateways support RAM authentication or application access point (AAP) authentication for KMS API calls. Dedicated gateways support only AAP authentication for KMS Instance API calls.

**Gateway type**

**Recommended scenario**

**Authentication**

**Supported API operation**

Shared gateway

-   The performance requirement is not high for secret retrieval operations.
    
-   Workloads are deployed outside Alibaba Cloud VPCs.
    
-   Access is initiated to KMS from a non-production environment such as an internal test environment.
    

RAM authentication

Secret value retrieval of KMS API

AAP authentication (not recommended)

Secret value retrieval of KMS Instance API

Dedicated gateway

-   Workloads are deployed on Alibaba Cloud VPCs.
    
-   Secret retrieval operations are frequently called.
    
-   The requirement for service data security is high.
    

AAP authentication (not recommended)

Secret value retrieval of KMS Instance API

## **KMS Instance SDK (not recommended)**

Applications use KMS Instance SDK to access dedicated gateway endpoints and call cryptographic operations and retrieve secret values. KMS Instance SDK supports Java 8 and later, PHP, Go, Python, and .NET (C# only). For more information, see [KMS Instance SDK](/help/en/kms/key-management-service/developer-reference/kms-instance-sdk/).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1086572671/CAEQTxiBgMCOj..x0xkiIDNmMjAxOGQzNGRkZjQ0NTY4ZGQzMTI3NWYyMjkxOTc44955759_20250303162954.351.svg)

## **Gateway endpoints and authentication**

### **Gateway endpoints**

KMS provides the following two types of endpoints:

-   Shared gateway endpoint (also known as KMS service endpoint): the global network address of KMS. You can access shared gateway endpoints over **Internet or VPCs**. Shared gateway endpoints vary based on regions. For example, the shared gateway endpoints for the China (Hangzhou) region are kms.cn-hangzhou.aliyuncs.com and kms-vpc.cn-hangzhou.aliyuncs.com. For more information, see [Operations](/help/en/kms/key-management-service/developer-reference/using-openapi).
    
-   Dedicated gateway endpoint (also known as KMS instance endpoint): the network address of a specific KMS instance. You can access dedicated gateway endpoints only over **a private network**. Dedicated gateway endpoints are in the `{The ID of the KMS instance}.cryptoservice.kms.aliyuncs.com` format.
    

### **Authentication**

KMS provides RAM authentication and AAP authentication. Shared gateways support both RAM authentication and AAP authentication. Dedicated gateways support only AAP authentication.

-   RAM authentication: RAM roles, Security Token Service (STS) tokens, RAM roles of Elastic Compute Service (ECS) instances, and AccessKey pairs.
    
-   AAP authentication (not recommended): If you want to use this authentication method, you must create an AAP and download and save the client key, which includes **ClientKeyContent** and **ClientKeyPassword**. For AAP authentication, two authentication modes of **dedicated gateway configuration and shared gateway configuration** are provided for different gateways. For more information, see [AAP authentication](/help/en/kms/key-management-service/developer-reference/secrets-manager-sdk/).

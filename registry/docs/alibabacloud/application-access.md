Key Management Service (KMS) provides SDKs and KMS Agent for key management, cryptographic operations, and operations for secret value retrieval. You can integrate SDKs or KMS Agent with your self-managed application to perform the preceding operations. This topic describes the integration process.

## **Integration overview**

Applications can use different integration tools to call API operations of KMS. The supported authentication methods and API types in the process vary based on gateway types. The following figure shows the integration process.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7130310571/CAEQQBiBgMCKgK3euhkiIDRlMzNiMDVlOTc0NDRiZjFiZmZlYjE3ZTlhNDM0NDYx4881909_20250113165756.808.svg)

-   **Gateway types**: Shared and dedicated gateways are provided. Shared gateways are for the global network of KMS, and dedicated gateways are for the network of a specific KMS instance.
    
-   **Authentication methods**: KMS supports Resource Access Management (RAM) authentication and application access point (AAP) authentication. AAP authentication is not recommended.
    
-   **Integration methods**: KMS provides SDKs and KMS Agent for users to integrate KMS in business code. Supported SDKs are Alibaba Cloud SDK, secret SDKs, and KMS Instance SDK.
    
-   **API types**: KMS provides KMS API and KMS Instance API. KMS Instance API is not recommended. The supported API operations can be classified into management API operations and business API operations in terms of features. Business API operations are cryptographic operations and secret retrieval operations. KMS API supports management and business API operations while KMS Instance API supports only business API operations.
    

## **Gateway types**

KMS provides shared and dedicated gateways. Shared gateways are for the global network of KMS and allow users to **access** KMS **over the Internet or virtual private clouds (VPCs)**. Shared gateways support management and business API operations. Dedicated gateways are for the network of a specific KMS instance and allow users to **access** KMS only **over private networks**. Dedicated gateways support only business API operations and ensure end-to-end API operation security and high data security.

**Difference**

**Shared gateway**

**Dedicated gateway**

Recommended scenario

-   API operations must be called to manage KMS instances, keys, and secrets, such as creating a key, creating a secret, and creating a KMS instance.
    
-   Workloads are deployed outside Alibaba Cloud VPCs.
    
-   Access is initiated to KMS from a non-production environment such as an internal test environment.
    

-   Workloads are deployed on Alibaba Cloud VPCs.
    
-   Business API operations, such as encryption and decryption and secret retrieval, are frequently called. That leads to high requirements for performance.
    
-   The requirement for service data security is high.
    

Endpoint

Internet or VPC

KMS private network

Performance

For data encryption and decryption performance, queries per second (QPS) is 1,000 when shared gateways are used to access KMS.

The performance is subject to the **computing performance** of your KMS instance. For example, the computing performance can be 1,000 or 2,000 QPS.

Supported integration method

Alibaba Cloud SDK, secret SDK, and KMS Agent

Alibaba Cloud SDK, secret SDK, KMS Agent, and KMS Instance SDK

Supported API operation

All KMS API operations

Cryptographic operations and secret value retrieval operation of KMS API, and KMS Instance API operations. KMS Instance API operations are not recommended.

Authentication

RAM authentication and AAP authentication. AAP authentication is not recommended.

RAM authentication and AAP authentication. AAP authentication is not recommended.

Certificate authority (CA) certificate

No CA certificates are required.

CA certificates are required.

## **Authentication**

KMS supports RAM authentication and AAP authentication. AAP authentication is not recommended. For more information, see [Manage access credentials](/help/en/sdk/developer-reference/v2-manage-access-credentials) and [AAP management](/help/en/kms/key-management-service/user-guide/access-point-aap-management/).

**Difference**

**RAM authentication**

**AAP authentication (not recommended)**

Function

-   Custom policies are supported.
    
-   RAM roles, Security Token Service (STS) tokens, RAM roles of Elastic Compute Service (ECS) instances, and AccessKey pairs are supported.
    
-   No CA certificates are required.
    

-   Custom policies are supported.
    
-   Client keys must be downloaded and saved. A client key contains **ClientKeyContent** and **ClientKeyPassword.**
    
-   CA certificates can be configured to implement two-way TLS authentication.
    

Supported integration method

Alibaba Cloud SDK, secret SDK, and KMS Agent

Secret SDK and KMS Instance SDK

Supported API operation

All KMS API operations

Secret retrieval operation of KMS API and operations of KMS Instance API

Supported gateway

Dedicated and shared gateways

Dedicated and shared gateways

**Note**

For AAP authentication, two authentication modes of **dedicated gateway configuration and shared gateway configuration** are provided for different gateways. For more information, see [AAP authentication](/help/en/kms/key-management-service/developer-reference/secrets-manager-sdk/).

## **Integration methods**

KMS provides SDKs and KMS Agent for integration. SDKs support **all management API operations and business API operations, which are cryptographic operations and secret retrieval operations**. KMS Agent supports only **secret retrieval operations**.

## **SDKs**

SDKs encapsulate the complex data signing process in a method. You need to only enter the required parameters and authentication information based on the API description. KMS provides Alibaba Cloud SDK, secret SDKs, and KMS Instance SDK. KMS Instance SDK is not recommended. You can select a SDK based on business requirements. Then, you can integrate the SDK and use KMS based on the following flowchart. For more information about SDK integration, see [SDK references](/help/en/kms/key-management-service/developer-reference/sdk-user-guide/).

**Usage notes**

-   All management and business API operations related to keys and secrets are supported. Management API operations support only the SDK integration method.
    
-   SDKs in different programming languages are provided for corresponding environments.
    

**Integration flowchart**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7130310571/CAEQORiBgMDftZLqrxkiIGFmYmIxMzE5YmE1ZTRkZmE4MjI4ZmNkOTk0YzM2MDc24902130_20250123141608.658.svg)

**Integration description**

**SDK type**

**Supported API operation**

**Gateway and authentication method**

**Supported programming language**

Secret SDK

-   KMS API:
    
    [GetSecretValue](/help/en/kms/key-management-service/developer-reference/api-getsecretvalue)
    
-   KMS Instance API (not recommended): [GetSecretValue](/help/en/kms/key-management-service/developer-reference/getsecretvalue-2)
    

**Shared gateway**:

-   RAM authentication for KMS API
    
-   AAP authentication for KMS API (not recommended)
    
-   AAP authentication for KMS Instance API (not recommended)
    

**Dedicated gateway**:

AAP authentication for KMS Instance API (not recommended)

-   Java (Java 8 and later)
    
-   Python
    
-   Go
    

Alibaba Cloud SDK

KMS API:

-   Management API operations: [Service management](/help/en/kms/key-management-service/developer-reference/classic-kms-sdkclassic-kms-sdk/#b05538c17bh5d), [Instance management](/help/en/kms/key-management-service/developer-reference/classic-kms-sdkclassic-kms-sdk/#32ca7f7839l92), [Key management](/help/en/kms/key-management-service/developer-reference/classic-kms-sdkclassic-kms-sdk/#a60621c7beb0h), [Secret management](/help/en/kms/key-management-service/developer-reference/classic-kms-sdkclassic-kms-sdk/#af3b5c0f86he6), [Tag management](/help/en/kms/key-management-service/developer-reference/classic-kms-sdkclassic-kms-sdk/#e35baf021bc35), and [Application management](/help/en/kms/key-management-service/developer-reference/classic-kms-sdkclassic-kms-sdk/#37878c7b4dubl)
    
-   Business API operations: [Cryptographic operations](/help/en/kms/key-management-service/developer-reference/classic-kms-sdkclassic-kms-sdk/#b4eca75589bak) and [Retrieving secret values](/help/en/kms/key-management-service/developer-reference/classic-kms-sdkclassic-kms-sdk/#e592b4ed8d9em)
    

**Shared gateway**:

RAM authentication for KMS API

**Dedicated gateway**:

RAM authentication for KMS API

-   Java
    
-   Python
    
-   Go
    
-   C++
    
-   PHP
    
-   .NET (C#)
    
-   TypeScript
    
-   Swift
    

KMS Instance SDK (not recommended)

KMS Instance API: [Key-related operations](/help/en/kms/key-management-service/developer-reference/api-overview#section-llo-9kj-kbj), [Secret-related operations](/help/en/kms/key-management-service/developer-reference/api-overview#section-igh-i9r-sps), and [GenerateRandom](/help/en/kms/key-management-service/developer-reference/api-overview#section-7md-fx8-2qk)

**Shared gateway**: not supported

**Dedicated gateway**:

AAP authentication for KMS Instance API

-   Java (Java 8 and later)
    
-   Python
    
-   Go
    
-   PHP
    
-   .NET (C# only)
    

## **KMS Agent**

KMS Agent simplifies the authentication and cache management processes for access from applications to KMS. It is developed on top of standard HTTP interfaces. For more information, see [KMS Agent](/help/en/kms/key-management-service/developer-reference/using-the-kms-agent-to-obtain-secret-values/).

**Usage notes**

-   Business applications in any programming language can access KMS Agent.
    
-   KMS Agent supports access only from local business applications.
    
-   KMS Agent supports only the secret retrieval operation and does not support secret information management operations, such as modifying and deleting a secret.
    

**Integration flowchart**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7130310571/CAEQORiBgIDYk5O5sBkiIDBkMDQ4NWMyNjZmMTQ1MTM5MDQxYTEyNDI5MzA3ZDli4932387_20250221151739.765.svg)

**Integration description**

**Supported API operation**

**Gateway type**

**Authentication method**

**Supported programming language**

KMS API:

[GetSecretValue](/help/en/kms/key-management-service/developer-reference/api-getsecretvalue)

Shared and dedicated gateways

RAM authentication

KMS Agent is developed on top of standard HTTP interfaces and can be used by business applications in all programming languages.

## **API types**

KMS provides KMS API and KMS Instance API. KMS Instance API is not recommended. The supported API operations can be classified into management API operations, cryptographic operations, and secret retrieval operations in terms of features. For more information, see [KMS API](/help/en/kms/key-management-service/developer-reference/api-overview-1) and [KMS Instance API](/help/en/kms/key-management-service/developer-reference/api-overview).

### **Management API operations**

Management API operations include the operations to manage KMS instances, keys, and secrets, such as creating a key, creating a secret, creating a KMS instance, and modifying a secret tag.

You can use only Alibaba Cloud SDK to call management API operations of KMS API over shared gateways.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7130310571/CAEQORiBgIDq0pDsrxkiIDQxMzZlYjA4MjA4MzRkNjc4MDY5N2ZiMmJkYzQyMTAx4902130_20250122105753.353.svg)

### **Cryptographic operations**

Cryptographic operations include symmetric encryption and decryption, asymmetric encryption and decryption, envelope encryption, data key generation, data signing, and signature verification.

You can use Alibaba Cloud SDK or KMS Instance SDK to call cryptographic operations.

**Important**

If you want to call cryptographic operations over shared gateways, you must turn on the **switch for access over the Internet**. For more information, see [Access KMS instance keys over the Internet](/help/en/kms/key-management-service/user-guide/access-keys-of-a-kms-instance-over-the-internet).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7130310571/CAEQORiBgID_4ajsrxkiIDY4ZmRjYWYwZWU4NzQzMGViZjlkNjkyNWVlN2JlOWQ24902130_20250122111150.840.svg)

### **Secret value retrieval**

You can use secret SDKs, Alibaba Cloud SDK, KMS Instance SDK, or KMS Agent to call [GetSecretValue of KMS API](/help/en/kms/key-management-service/developer-reference/api-getsecretvalue) or [GetSecretValue of KMS Instance API](/help/en/kms/key-management-service/developer-reference/getsecretvalue-2) over shared or dedicated gateways. The GetSecretValue operation of KMS Instance API is not recommended.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7130310571/CAEQORiBgIDT3rXsrxkiIGJhOTA5MjM1MDE3OTQyODliM2JmYjIyZmJjM2JmMmZi4902130_20250122112132.328.svg)

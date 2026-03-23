Key Management Service (KMS) provides application access points (AAPs) for identity authentication and access control. A self-managed application requires an AAP for identity and behavior authentication before it can use a key or a secret in a KMS instance. This topic describes AAPs.

## Introduction to an AAP

An AAP contains two critical pieces of information: permission policy and credential.

**Important**

We recommend that you create an AAP for each application that needs to access KMS. This way, different applications can have different access permissions on KMS resources.

### **Permission policies**

Permission policies are used to configure which applications are allowed to access specified keys and secrets. You can configure up to three permission policies for each AAP. To create a permission policy, configure the following information:

-   RBAC permissions:
    
    -   CryptoServiceKeyUser: allows for the use of keys in a KMS instance. The cryptographic operations of Instance API are supported. For more information, see [List of operations by function](/help/en/kms/key-management-service/developer-reference/api-overview#section-llo-9kj-kbj).
        
    -   CryptoServiceSecretUser: allows for the use of secrets in a KMS instance. The secret-related operations of Instance API are supported. For more information, see [List of operations by function](/help/en/kms/key-management-service/developer-reference/api-overview#section-igh-i9r-sps).
        
    -   SecretUser: allows for the use of all secrets within the current account. The GetSecretValue operation of OpenAPI is supported.
        
-   Accessible resources: the KMS resources that can be accessed, such as keys and secrets.
    
-   Network access rules: the source IP addresses from which access is allowed.
    

### **Credentials**

Credentials are used to authenticate the identities and behavior of users that access KMS resources. The following types of credentials are supported. In this topic, authentication is based on a client key.

-   Client key: A client key is used to sign requests that are initiated from an application to KMS and verify signatures. A client key contains **Application Access Secret(ClientKeyContent)** and **Password**.
    
    **Important**
    
    -   KMS does not save client keys. If you do not save your client key or you lose your client key, you can delete the old client key and create a different client key.
        
    -   A client key has a default validity period of five years. When you create a client key, you can specify a custom validity period for the client key. We recommend that you set the validity period to one year. To ensure access to KMS, you must change your client key before the expiration date of the client key. For more information, see [Change a client key](/help/en/kms/key-management-service/user-guide/change-a-client-key). After your client key is changed, we recommend that you delete the client key that is no longer in use from KMS.
        
    -   If your client key is disclosed, delete the existing client key and create a different client key. You can create up to three client keys for an AAP.
        
    
-   RAM role: You can use this method in scenarios in which your application runs on an Elastic Compute Service (ECS) instance, a Container Service for Kubernetes (ACK) cluster, or Function Compute, your application is associated with a Resource Access Management (RAM) role, and you need to retrieve a secret value by using a KMS endpoint. KMS authenticates OpenAPI requesters by using RAM.
    

## **SDKs that support client key-based authentication**

Before you integrate an SDK into an application, you must understand the SDKs that are provided by KMS. Different SDKs support different authentication methods. For more information, see [SDK references](/help/en/kms/key-management-service/developer-reference/sdk-user-guide/).

The following SDKs support client key-based authentication:

-   KMS Instance SDK: allows you to access keys and secrets in a KMS instance by using the endpoint of the KMS instance. In this case, you must use a client key to implement authentication.
    
-   Secret SDK: allows you to access secrets in a KMS instance by using the endpoint of the KMS instance and access secrets within the current Alibaba Cloud account by using a KMS endpoint.
    
    **Note**
    
    -   If you use a secret SDK and a KMS endpoint, you can use a client key, the AccessKey pair of a RAM user, or a RAM role to implement authentication.
        
    -   If the scope of a permission policy is set to a KMS instance when you create an AAP, you can use the endpoint of the KMS instance to access secrets in the KMS instance. If the scope of a permission policy is set to Shared KMS Gateway, you can use a KMS endpoint to access secrets.
        
    

## **Notifications for client key expiration**

Alibaba Cloud sends expiration notifications by email or internal message six months, three months, one month, and seven days before your client key expires. You can also configure CloudMonitor alerts. Alibaba Cloud sends alert notifications 180 days, 90 days, 30 days, and 7 days before your client key expires. For more information, see [Alert events](/help/en/kms/key-management-service/user-guide/alert-settings).

## **Logs and audit**

KMS can be integrated with ActionTrail to record management events of AAPs. For more information, see [Audit events of KMS](/help/en/kms/key-management-service/security-and-compliance/audit-events-of-kms-1) and [Use ActionTrail to query KMS events](/help/en/kms/key-management-service/security-and-compliance/use-actiontrail-to-query-kms-event-logs-1).

KMS can be integrated with Simple Log Service to record the calls of AAP-provided client keys. You can view logs within the previous 180 days on the Simple Log Service for KMS page to check whether your client key is called. To do this, enter the ID of a client key in the search box below kms\_audit\_log to implement a full-text search. If the value of the `access_key_id` field in the search result is the ID of a client key, the client key is called. For more information, see [Simple Log Service for KMS](/help/en/kms/key-management-service/user-guide/log-service/).

## **References**

-   For more information about how to create an AAP, see [Access a KMS instance by using an AAP](/help/en/kms/key-management-service/user-guide/create-an-aap).
    
-   For more information about how to integrate SDKs into applications, see [SDK references](/help/en/kms/key-management-service/developer-reference/sdk-user-guide/).
    
-   For more information about KMS instance endpoints and KMS endpoints, see [Endpoint description](/help/en/kms/key-management-service/developer-reference/sdk-user-guide/#f70616506cp68).
    
-   For more information about queries per second (QPS), see [Performance quotas](/help/en/kms/key-management-service/product-overview/performance-data).

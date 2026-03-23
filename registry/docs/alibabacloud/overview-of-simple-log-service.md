This topic describes the data collection, assets, billing, and limits of the Simple Log Service for Key Management Service (KMS) feature.

## **What is Simple Log Service for KMS?**

The Simple Log Service for KMS feature allows you to query and analyze the logs of KMS instances in the KMS console. The feature also allows you to store logs for up to 180 days, which helps your application meet compliance requirements. For more information about Simple Log Service, see [What is Simple Log Service?](/help/en/sls/what-is-log-service#concept-mt2-ykn-vdb)

## **Data collection**

The Simple Log Service for KMS feature collects only information about the requests that are processed by KMS instances. You can use the **api\_name** and **share\_gateway\_api\_name** fields to identify business scenarios of requests. You can differentiate business scenarios based on the endpoints that are used by callers. The following table describes the business scenarios. For more information about endpoints, see [Endpoints](/help/en/kms/key-management-service/developer-reference/sdk-user-guide/#03711c906a3lo).

**Note**

The feature does not collect information about management operations on KMS resources. If you want to query the management operations, use ActionTrail. For more information about the events that are supported by ActionTrail, see [Audit events of KMS](/help/en/kms/key-management-service/security-and-compliance/audit-events-of-kms-1). For more information about how to query events, see [Use ActionTrail to query KMS events](/help/en/kms/key-management-service/security-and-compliance/use-actiontrail-to-query-kms-event-logs-1).

-   KMS endpoints
    
    **share\_gateway\_api\_name**
    
    **api\_name**
    
    **Description**
    
    **Business scenario**
    
    GetSecretValue
    
    Decrypt
    
    Retrieves secrets.
    
    Self-managed applications retrieve secrets.
    
    GenerateDataKey
    
    GenerateDataKey
    
    Generates a data key.
    
    -   Scenario 1: Cloud services are integrated with KMS.
        
    -   Scenario 2: A secret needs to be created or a secret value needs to be stored for self-managed applications.
        
    
    GenerateDataKeyWithoutPlaintext
    
    GenerateDataKey
    
    Generates a data key and returns only the data key ciphertext.
    
    Cloud services are integrated with KMS.
    
    Encrypt
    
    Encrypt
    
    Encrypts data by using a symmetric key.
    
    Cloud services are integrated with KMS.
    
    Decrypt
    
    Decrypt
    
    Decrypts data by using a symmetric key.
    
    Cloud services are integrated with KMS.
    
    AsymmetricEncrypt
    
    Encrypt
    
    Encrypts data by using an asymmetric key.
    
    Cloud services are integrated with KMS.
    
    AsymmetricDecrypt
    
    Decrypt
    
    Decrypts data by using an asymmetric key.
    
    Cloud services are integrated with KMS.
    
    AsymmetricSign
    
    Sign
    
    Signs data by using an asymmetric key.
    
    Cloud services are integrated with KMS.
    
    AsymmetricVerify
    
    Verify
    
    Verifies a signature by using an asymmetric key.
    
    Cloud services are integrated with KMS.
    
-   KMS instance endpoints
    
    If your self-managed application uses a KMS instance, you must use a KMS instance endpoint. In this case, the share\_gateway\_api\_name field is empty.
    
    **api\_name**
    
    **Description**
    
    GetSecretValue
    
    Retrieves secrets.
    
    AdvanceEncrypt
    
    Encrypts plaintext into ciphertext by using a key.
    
    This operation is supported only if you use a symmetric key in KMS instances of the software key management type.
    
    AdvanceDecrypt
    
    Decrypts ciphertext into plaintext by using a key.
    
    This operation is supported only if you use a symmetric key in KMS instances of the software key management type.
    
    AdvanceGenerateDataKey
    
    Generates a data key.
    
    This operation is supported only if you use a symmetric key in KMS instances of the software key management type.
    
    GenerateDataKeyPair
    
    Generates an asymmetric data key pair and returns the private key plaintext.
    
    GenerateDataKeyPairWithoutPlaintext
    
    Generates an asymmetric data key pair and does not return the private key plaintext.
    
    GenerateDataKey
    
    Generates a data key.
    
    Encrypt
    
    Encrypts plaintext into ciphertext.
    
    Decrypt
    
    Decrypts ciphertext into plaintext.
    
    Sign
    
    Signs data by using an asymmetric key.
    
    Verify
    
    Verifies a signature by using an asymmetric key.
    
    GetPublicKey
    
    Queries the public key of an asymmetric key.
    

## **Assets**

After you enable the Simple Log Service for KMS feature for your KMS instance, the feature automatically creates a project for the KMS instance and creates a Logstore in the project to store logs. For more information about the project, see [Projects](/help/en/sls/project#concept-t3x-hqn-vdb). For more information about the Logstore, see [Logstore](/help/en/sls/logstore#concept-btb-4qn-vdb). The project resides in the same region as your KMS instance.

To view the project and Logstore, log on to the [Simple Log Service console](https://sls.console.alibabacloud.com/). The name of the project is in the kms-log-KMS instance ID format, and the name of the Logstore is in the kms\_audit\_log format.

**Important**

Do not delete the projects or Logstores that are related to KMS logs. Otherwise, KMS logs cannot be sent to Simple Log Service.

## Billing

The Simple Log Service for KMS feature is available for purchase on the KMS side, and KMS charges you based on log storage capacity. The feature supports only the subscription billing method. The minimum log storage capacity for purchase is 1,000 GB and is increased in increments of 1,000 GB. The unit price is USD 80 per month for 1,000 GB.

**Important**

Your KMS bill covers the fees for storage and the fees for query and analysis. If you use other features of Simple Log Service, such as transformation, shipping, and indexing, you are separately charged by Simple Log Service based on the actual usage. For more information, see [Billable items of pay-by-feature](/help/en/sls/billable-items).

The subscription duration of the Simple Log Service for KMS feature varies based on the subscription duration of your KMS instance. If you enable the feature when you purchase a KMS instance, the fees of the feature are calculated based on the subscription duration of the KMS instance. If you upgrade a KMS instance to enable the feature, the fees of the feature are calculated based on the remaining subscription duration of the KMS instance. In this case, the subscription duration is accurate to the minute.

## **Limits**

-   The Simple Log Service for KMS is irreversible once enabled.
    
-   If you enable the feature, KMS logs are stored for 180 days by default. You cannot change the log storage period.
    
-   Make sure that the log storage capacity is sufficient. If the capacity is exhausted, new logs cannot be stored. In this case, we recommend that you expand the capacity at the earliest opportunity. You cannot downgrade the configuration after you expand the capacity.
    
    **Note**
    
    The log storage usage that is displayed in the KMS console is not updated in real time and does not include the actual usage in the previous 2 hours.
    
-   Your KMS instance must run as expected. Otherwise, the feature is suspended. If your KMS instance expires and is not renewed, the KMS instance is released, and the project is deleted on the 16th day after expiration.
    

## Calculation of the required log storage capacity

In most cases, each request log occupies approximately 1 KB of storage. If the average queries per second (QPS) is 100, the required storage for the request logs that are generated within a day is 8,640,000 KB, which is approximately 8.2 GB. This value is calculated by using the following formula: 100 × 60 × 60 × 24 × 1 = 8,640,000. KMS logs are stored for 180 days by default, and the required log storage capacity is 1,476 TB. This value is calculated by using the following formula: 8.2 × 180 = 1,476. When you enable the Simple Log Service for KMS feature, you can set the log storage capacity to 2,000 GB.

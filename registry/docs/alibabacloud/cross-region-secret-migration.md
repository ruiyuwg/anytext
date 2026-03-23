Upgrades and improvements are required for specific regions and zones to provide efficient and high-quality services. If you receive migration notifications, you must migrate Key Management Service (KMS) keys and secrets at the earliest opportunity. This topic describes how to migrate secrets in KMS across regions.

## Generic secret

If you want to migrate a generic secret in a KMS instance, you must purchase a KMS instance in the destination region and then migrate the secret by using backup and restoration. For more information, see [Backups](/help/en/kms/key-management-service/user-guide/backups). If you want to migrate a generic secret outside a KMS instance, you must query information about the generic secret in the source region, and then create a generic secret that has the same information in the destination region.

**Note**

In the old version of KMS, you can create a generic secret without the need to purchase a KMS instance. This type of generic secret is considered a secret outside a KMS instance. In KMS 3.0, you must purchase a KMS instance before you can create a generic secret.

### **Usage notes**

-   During the migration of a secret, do not perform operations on the secret in the source region until the migration is complete and you delete the secret in the source region. For example, do not modify the secret metadata or create a secret version by calling the PutSecretValue operation.
    
-   After the migration is complete, the creation time of the secret and the creation time of the secret version are different between the source and destination regions. However, this discrepancy does not affect your services.
    

### **Procedure**

1.  Query and **save** the details of the secret that you want to manage in the source region.
    
    You can call an API operation to query and save information about a secret, such as the metadata of the secret, all secret versions, and the secret value of each secret version.
    
    **API operation**
    
    **Description**
    
    DescribeSecret
    
    **Note**
    
    Set FetchTags to true.
    
    Queries the metadata information about a secret.
    
    ListSecretVersionIds
    
    **Note**
    
    Set IncludeDeprecated to true.
    
    Queries all secret versions of a secret.
    
    IDs indicated by VersionIds in the response are not sorted by creation time. Sort the IDs by creation time on-premises. For example, the following three versions are returned:
    
    1.  Version v1, which is the initial version created on January 1, 2023 and whose status is 001.
        
    2.  Version v2, which is created on May 1, 2023 and whose status is ACSPrevious.
        
    3.  Version v3, which is created on November 1, 2023 and whose status is ACSCurrent.
        
    
    GetSecretValue
    
    Queries a secret value. Each secret version corresponds to a secret value. You must query the secret value and secret value type of each secret version.
    
2.  Migrate your application to the destination region and modify the configurations.
    
    1.  Migrate the application to the destination region.
        
    2.  Create a credential for the application.
        
        1.  If the application uses the AccessKey pair of a Resource Access Management (RAM) user or a RAM role in the source region, create a RAM user or a RAM role and attach the AliyunKMSSecretAdminAccess policy to the RAM user or the RAM role in the destination region. For more information, see [Create a RAM user and grant permissions to the RAM user](/help/en/ram/product-overview/create-and-authorize-a-ram-user) and [Create a RAM role and attach the required policies to the role](/help/en/ram/create-a-ram-role-and-authorize-it).
            
        2.  If the application uses the client key of an application access point (AAP) in the source region, create a client key in the destination region. For more information, see [Create an AAP](/help/en/kms/key-management-service/user-guide/create-an-aap).
            
            **Note**
            
            You must purchase a KMS instance before you can create an AAP.
            
    3.  Modify the endpoint and credential settings in the application.
        
        **Note**
        
        KMS endpoints are different from KMS instance endpoints. Configure an endpoint based on the SDK that is used. For more information about endpoints, see [SDK references](/help/en/kms/key-management-service/developer-reference/sdk-user-guide/).
        
3.  Create a secret in the destination region.
    
    1.  Purchase a KMS instance. For more information, see [Instance selection](/help/en/kms/key-management-service/product-overview/service-selection) and [Purchase and enable a KMS instance](/help/en/kms/key-management-service/getting-started/purchase-and-enable-a-kms-instance).
        
    2.  Create a key in the KMS instance to encrypt the secret. For more information, see [Getting started with Key Management](/help/en/kms/key-management-service/getting-started/getting-started-with-key-management).
        
    3.  Call an API operation to create a secret. The metadata, all secret versions, and the secret value of each secret version for the secret must be the same in the source and destination regions.
        
        **API**
        
        **Description**
        
        CreateSecret
        
        Creates a generic secret.
        
        -   secretName, secretType, Tags, Description, and ExtendedConfig: Enter the values that you obtain by calling the DescribeSecret operation in the source region.
            
        -   VersionId: Enter the initial version that you obtain by calling the ListSecretVersionIds operation in the source region. In this example, v1 is used.
            
        -   SecretData and SecretDataType: Enter the secret value and secret value type of the initial version that you obtain by calling the GetSecretValue operation in the source region. In this example, the initial version is v1.
            
        
        PutSecretValue
        
        Stores all secret versions in the secret.
        
        When a secret is created, the initial version is already stored in the secret. In this case, only the remaining versions of the secret need to be stored. In this example, v2 and v3 need to be stored.
        
        UpdateSecretVersionStage
        
        Configures the status for all secret versions.
        
        In this example, the version status of v1 is set to 001, the version status of v2 is set to ACSPrevious, and the version status of v3 is set to ACSCurrent.
        
    4.  Call the DescribeSecret operation to check whether the information about the secret is the same in the source and destination regions.
        
4.  Check whether the application can run as expected after you integrate the secret into the application.
    
5.  After you confirm that you no longer need to use the secret in the source region, delete the secret in the source region. For more information, see [Manage and use generic secrets](/help/en/kms/key-management-service/user-guide/manage-and-use-generic-secrets#58533a8034hm0).
    
    **Note**
    
    You can use ActionTrail to view the recent calls of a secret. For more information, see [Use ActionTrail to query KMS events](/help/en/kms/key-management-service/security-and-compliance/use-actiontrail-to-query-kms-event-logs-1). For more information about the events that are supported in ActionTrail, see [Audit events of KMS](/help/en/kms/key-management-service/security-and-compliance/audit-events-of-kms-1). Secret-related events include GetSecretValue, DescribeSecret, ListSecretVersionIds, PutSecretValue, UpdateSecret, UpdateSecretVersionStage, UpdateSecretRotationPolicy, and RestoreSecret.
    

## **RAM secret**

Migration is not supported.

A RAM user can create only one secret in KMS. You must delete the RAM secret in the source region, and then create a RAM secret in the destination region.

**Warning**

-   Before you delete a RAM secret from KMS, make sure that you no longer use the RAM secret.
    
-   If you delete a RAM secret from KMS, the related AccessKey pair is not deleted.
    

## **ApsaraDB RDS secret**

Migration is not required.

ApsaraDB RDS instances are region-specific resources. You do not need to migrate the required secrets.

## **ECS secret**

Migration is not required.

Elastic Compute Service (ECS) instances are region-specific resources. You do not need to migrate the required secrets.

Creates a backup vault.

## Operation description

-   Each Alibaba Cloud account can create a maximum of 100 backup vaults.
    
-   After a backup vault is created, its status is INITIALIZING and an initialization task automatically starts. After the task is successfully completed, the status changes to CREATED. The backup vault can be used for backup jobs only when its status is CREATED.
    
    **Important** Before you call this operation, make sure that you understand the billing methods and [pricing](https://www.aliyun.com/price/detail/hbr?) of Cloud Backup.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/hbr/2017-09-08/CreateVault)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/hbr/2017-09-08/CreateVault)

## **RAM authorization**

The table below describes the authorization required to call this API. You can define it in a Resource Access Management (RAM) policy. The table's columns are detailed below:

-   Action: The actions can be used in the `Action` element of RAM permission policy statements to grant permissions to perform the operation.
    
-   API: The API that you can call to perform the action.
    
-   Access level: The predefined level of access granted for each API. Valid values: create, list, get, update, and delete.
    
-   Resource type: The type of the resource that supports authorization to perform the action. It indicates if the action supports resource-level permission. The specified resource must be compatible with the action. Otherwise, the policy will be ineffective.
    
    -   For APIs with resource-level permissions, required resource types are marked with an asterisk (\*). Specify the corresponding Alibaba Cloud Resource Name (ARN) in the `Resource` element of the policy.
        
    -   For APIs without resource-level permissions, it is shown as All Resources. Use an asterisk (**\***) in the `Resource` element of the policy.
        
-   Condition key: The condition keys defined by the service. The key allows for granular control, applying to either actions alone or actions associated with specific resources. In addition to service-specific condition keys, Alibaba Cloud provides a set of [common condition keys](/help/en/ram/policy-elements#section-jix-u0j-2ms) applicable across all RAM-supported services.
    
-   Dependent action: The dependent actions required to run the action. To complete the action, the RAM user or the RAM role must have the permissions to perform all dependent actions.
    

**Action**

**Access level**

**Resource type**

**Condition key**

**Dependent action**

hbr:CreateVault

create

\*All Resource

`*`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

VaultRegionId

string

Yes

The region ID of the backup vault.

cn-shanghai

VaultName

string

Yes

The name of the backup vault. The name must be 1 to 64 characters in length.

backupvaultname

Description

string

No

The description of the backup vault. The description can be 0 to 255 characters in length.

description

VaultType

string

No

The type of the backup vault. Valid values:

-   **STANDARD**: a standard backup vault.
    
-   **OTS\_BACKUP**: a Tablestore backup vault.
    

**Valid values:**

-   OTS\_BACKUP :
    
    OTS backup vault
    
-   STANDARD :
    
    Standard repository
    

STANDARD

VaultStorageClass

string

No

The storage class of the backup vault.

-   **STANDARD**: Standard.
    
-   **ARCHIVE**: This value is deprecated.
    
-   **COLD\_ARCHIVE**: This value is deprecated.
    
-   **IA**: This value is deprecated.
    

STANDARD

WormEnabled

boolean

No

Specifies whether to enable backup locking.

false

EncryptType

string

No

The encryption type of the source data. This parameter is valid only if you set VaultType to STANDARD or OTS\_BACKUP. Valid values:

-   **HBR\_PRIVATE**: The backup vault is encrypted using the built-in encryption method of Cloud Backup.
    
-   **KMS**: The backup vault is encrypted using a customer master key (CMK) from Key Management Service (KMS).
    

**Valid values:**

-   KMS :
    
    Use the Alibaba Cloud KMS service for custom key encryption.
    
-   HBR\_PRIVATE :
    
    HBR is fully managed and uses the built-in encryption of the backup service.
    

KMS

KmsKeyId

string

No

The ID or alias of the KMS key. This parameter is required only if you set EncryptType to KMS.

alias/yzs-hhht

Replication

boolean

No

Specifies whether to create a replication vault.

true

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

VaultId

string

The ID of the backup vault.

v-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Success

boolean

Indicates whether the request was successful.

-   true: The request was successful.
    
-   false: The request failed.
    

true

Code

string

The return code. A value of 200 indicates that the request was successful.

200

Message

string

The returned message. If the request was successful, \`successful\` is returned. If the request failed, an error message is returned.

successful

TaskId

string

The ID of the backup vault initialization task. Use the DescribeTask operation to query the task status.

t-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

## Examples

Success response

`JSON` format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "VaultId": "v-*********************",
  "Success": true,
  "Code": "200",
  "Message": "successful",
  "TaskId": "t-*********************"
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/hbr/2017-09-08/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/hbr/2017-09-08/CreateVault#workbench-doc-change-demo) for a complete list.

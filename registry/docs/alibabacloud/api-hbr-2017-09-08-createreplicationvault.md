Creates a mirror vault.

## Operation description

After a backup vault is created, the backup vault is in the INITIALIZING state, and the system automatically runs an initialization task to initialize the backup vault. After the initialization task is completed, the backup vault is in the CREATED state.Call this operation in the region where the mirror vault resides, which is specified by the VaultRegionId parameter.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/hbr/2017-09-08/CreateReplicationVault)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/hbr/2017-09-08/CreateReplicationVault)

## Authorization information

The following table shows the authorization information corresponding to the API. The authorization information can be used in the `Action` policy element to grant a RAM user or RAM role the permissions to call this API operation. Description:

-   Operation: the value that you can use in the Action element to specify the operation on a resource.
-   Access level: the access level of each operation. The levels are read, write, and list.
-   Resource type: the type of the resource on which you can authorize the RAM user or the RAM role to perform the operation. Take note of the following items:
    -   For mandatory resource types, indicate with a prefix of \* .
    -   If the permissions cannot be granted at the resource level, `All Resources` is used in the Resource type column of the operation.
-   Condition Key: the condition key that is defined by the cloud service.
-   Associated operation: other operations that the RAM user or the RAM role must have permissions to perform to complete the operation. To complete the operation, the RAM user or the RAM role must have the permissions to perform the associated operations.

Operation

Access level

Resource type

Condition key

Associated operation

hbr:CreateReplicationVault

create

\*All Resources

`*`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

VaultRegionId

string

Yes

The ID of the region where the backup vault resides.

cn-shanghai

VaultName

string

Yes

The name of the backup vault. The name must be 1 to 64 characters in length.

mirrorvaultname

Description

string

No

The description of the backup vault. The description must be 0 to 255 characters in length.

description

VaultStorageClass

string

No

The storage type of the backup vault. Valid value: **STANDARD**, which indicates standard storage.

STANDARD

ReplicationSourceVaultId

string

Yes

The ID of the source vault.

v-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

ReplicationSourceRegionId

string

Yes

The ID of the region where the source vault resides.

cn-hangzhou

RedundancyType

string

No

The data redundancy type of the backup vault. Valid values:

-   LRS: standard locally redundant storage (LRS). Cloud Backup stores the copies of each object on multiple devices of different facilities in the same zone. This way, Cloud Backup ensures data durability and availability even if hardware failures occur.
-   ZRS: standard zone-redundant storage (ZRS). Cloud Backup uses the multi-zone mechanism to distribute data across three zones within the same region. If a zone fails, the data that is stored in the other two zones is still accessible.

LRS

EncryptType

string

No

The method that is used to encrypt the source data. This parameter is valid only if you set the VaultType parameter to STANDARD or OTS\_BACKUP. Valid values:

-   **HBR\_PRIVATE**: The source data is encrypted by using the built-in encryption method of Hybrid Backup Recovery (HBR).
-   **KMS**: The source data is encrypted by using Key Management Service (KMS).

HBR\_PRIVATE

KmsKeyId

string

No

The customer master key (CMK) created in KMS or the alias of the key. This parameter is required only if you set the EncryptType parameter to KMS.

alias/test

## Response parameters

Parameter

Type

Description

Example

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

Indicates whether the request was successful. Valid values:

-   true
-   false

true

Code

string

The response code. The status code 200 indicates that the request was successful.

200

Message

string

The returned message. If the request was successful, "successful" is returned. If the request failed, an error message is returned.

successful

TaskId

string

The ID of the job that is used to initialize the backup vault. You can call the DescribeTask operation to query the job status.

t-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "VaultId": "v-*********************",
  "Success": true,
  "Code": 200,
  "Message": "successful",
  "TaskId": "t-*********************"
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/hbr/2017-09-08/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-07-29

The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/hbr/2017-09-08/CreateReplicationVault?updateTime=2024-07-29#workbench-doc-change-demo)

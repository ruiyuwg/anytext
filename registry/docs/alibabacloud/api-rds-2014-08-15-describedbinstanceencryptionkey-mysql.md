You can call the DescribeDBInstanceEncryptionKey operation to check whether disk encryption is enabled for an instance. You can also query details about the keys that are used for disk encryption. This operation is supported for instances that run MySQL, SQL Server, or PostgreSQL.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/DescribeDBInstanceEncryptionKey)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/DescribeDBInstanceEncryptionKey)

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

rds:DescribeDBInstanceEncryptionKey

get

\*DBInstance

`acs:rds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}`

-   rds:ResourceTag

none

## Request parameters

Parameter

Type

Required

Description

Example

RegionId

string

No

The region ID of the instance. You can call the [DescribeRegions](/help/en/rds/api-query-regions) operation to query the most recent region list.

cn-hangzhou

DBInstanceId

string

Yes

The ID of the instance You can call the [DescribeDBInstances](/help/en/rds/api-query-instances) operation to query the IDs of instances.

rm-uf6wjk5xxxxxxx

EncryptionKey

string

No

The ID of the custom key.

749c1df7-xxxx-xxxx-xxxx-xxxxxxxxxxxx

TargetRegionId

string

No

The ID of the destination region. You can call the [DescribeRegions](/help/en/rds/api-query-regions) operation to query the most recent region list.

cn-qingdao

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

DeleteDate

string

The scheduled time at which the key is deleted. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.

2022-05-08T08:14:16Z

RequestId

string

The ID of the request.

3BC2768E-DEDA-40FC-BBE9-6B884F3626AF

Description

string

The description of the key.

Description of the key

Origin

string

The source of the key.

Aliyun\_KMS

MaterialExpireTime

string

The time at which the key expires. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.

2021-10-18T08:14:16Z

EncryptionKeyStatus

string

The status of the key. Valid values:

-   **Enabled**
-   **Disabled**

Enabled

KeyUsage

string

The purpose of the key.

ENCRYPT/DECRYPT

EncryptionKey

string

The ID of the key.

5306d1b6-7fd3-42d9-9511-xxxxxxx

Creator

string

The user who created the key.

1443\*\*\*\*\*9604

EncryptionKeyList

array<object>

The details about the key.

EncryptionKeyInfo

object

The list of keys.

KeyType

string

The type of the key. Valid values:

-   **CMK**
-   **ServiceKey**

ServiceKey

EncryptionKey

string

The ID of the key.

5306d1b6-7fd3-42d9-9511-xxxxxxx

Description

string

The description of the key.

Description of the key

KeyUsage

string

The purpose of the key.

ENCRYPT/DECRYPT

DeleteDate

string

The scheduled time at which the key is deleted. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.

2022-05-08T08:14:16Z

Creator

string

The user who created the key.

1443\*\*\*\*\*9604

EncryptionKeyStatus

string

The status of the key. Valid values:

-   **Enabled**
-   **Disabled**

Enabled

Origin

string

The source of the key.

Aliyun\_KMS

MaterialExpireTime

string

The time at which the key expires. The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.

2021-10-18T08:14:16Z

AliasName

string

The alias of the key.

alias/xxx

UsedBy

string

The role of the instance. Valid values:

-   **Master**: primary instance
-   **slave**: read-only instance

Master

## Examples

Sample success responses

`JSON`format

```
{
  "DeleteDate": "2022-05-08T08:14:16Z",
  "RequestId": "3BC2768E-DEDA-40FC-BBE9-6B884F3626AF",
  "Description": "Description of the key",
  "Origin": "Aliyun_KMS",
  "MaterialExpireTime": "2021-10-18T08:14:16Z",
  "EncryptionKeyStatus": "Enabled",
  "KeyUsage": "ENCRYPT/DECRYPT",
  "EncryptionKey": "5306d1b6-7fd3-42d9-9511-xxxxxxx",
  "Creator": "1443*****9604",
  "EncryptionKeyList": [
    {
      "KeyType": "ServiceKey",
      "EncryptionKey": "5306d1b6-7fd3-42d9-9511-xxxxxxx",
      "Description": "Description of the key",
      "KeyUsage": "ENCRYPT/DECRYPT",
      "DeleteDate": "2022-05-08T08:14:16Z",
      "Creator": "1443*****9604",
      "EncryptionKeyStatus": "Enabled",
      "Origin": "Aliyun_KMS",
      "MaterialExpireTime": "2021-10-18T08:14:16Z",
      "AliasName": "alias/xxx",
      "UsedBy": "Master"
    }
  ]
}
```

## Error codes

HTTP status code

Error code

Error message

Description

403

NoActiveBYOK

This custins no active byok.

The disk encryption feature has not been enabled for the instance.

403

ByokInsnameAndRegionAllEmpty

The insName and targetRegionId can't be all empty.

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Rds/2014-08-15/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-11-20

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeDBInstanceEncryptionKey?updateTime=2024-11-20#workbench-doc-change-demo)

2024-05-11

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeDBInstanceEncryptionKey?updateTime=2024-05-11#workbench-doc-change-demo)

2023-07-12

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeDBInstanceEncryptionKey?updateTime=2023-07-12#workbench-doc-change-demo)

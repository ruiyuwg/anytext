Queries the details of a custom key for a Tair (Redis OSS-compatible) instance to use transparent data encryption (TDE).

## Operation description

Before you call this operation, TDE must be enabled for the Tair (Redis OSS-compatible) instance by using a custom key. For more information, see [ModifyInstanceTDE](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-modifyinstancetde-redis) .

**Note** For more information about TDE, see [Enable TDE](/help/en/redis/user-guide/enable-tde).

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/DescribeEncryptionKey)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/DescribeEncryptionKey)

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

kvstore:DescribeEncryptionKey

get

\*DBInstance

`acs:kvstore:{#regionId}:{#accountId}:instance/{#instanceId}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

InstanceId

string

Yes

The ID of the instance. You can call the [DescribeInstances](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-describeinstances-redis) operation to query the ID of the instance.

r-bp1zxszhcgatnx\*\*\*\*

EncryptionKey

string

No

The ID of the custom key. You can call the [DescribeEncryptionKeyList](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-describeencryptionkeylist-redis) operation to query the ID of the key.

ad463061-992d-4195-8a94-ed63\*\*\*\*\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

DeleteDate

string

The time when the custom key is expected to be deleted. The time follows the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time is displayed in UTC.

**Note** If the return value is an empty string, the custom key cannot be automatically deleted.

2021-09-24T18:22:03Z

RequestId

string

The ID of the request.

9A931CE5-C926-5E09-B0EC-6299C4A6\*\*\*\*

Description

string

The description of the custom key. By default, an empty string is returned.

testkey

Origin

string

The source of the custom key. A value of **Aliyun\_KMS** indicates [Key Management Service (KMS)](/help/en/kms/key-management-service/support/what-is-key-management-service) of Alibaba Cloud.

Aliyun\_KMS

MaterialExpireTime

string

The time when the custom key expires. The time follows the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time is displayed in UTC.

**Note** If the return value is an empty string, the custom key does not expire.

2021-09-24T18:22:03Z

EncryptionKeyStatus

string

The state of the custom key. Valid values:

-   **Enabled**: The custom key is available.
-   **Disabled**: The custom key is unavailable.

Enabled

KeyUsage

string

The purpose of the custom key. A value of `ENCRYPT/DECRYPT` indicates encryption and decryption.

ENCRYPT/DECRYPT

EncryptionKey

string

The ID of the custom key.

ad463061-992d-4195-8a94-ed63\*\*\*\*\*\*\*\*

Creator

string

The ID of the Alibaba Cloud account that is used to create the custom key.

17649847\*\*\*\*\*\*\*\*

EncryptionName

string

The encryption algorithm.

AES-CTR-256

RoleArn

string

The Alibaba Cloud Resource Name (ARN) of the Resource Access Management (RAM) role to which you want to grant permissions.

acs:ram::123456789012\*\*\*\*:role/AliyunRdsInstanceEncryptionDefaultRole

## Examples

Sample success responses

`JSON`format

```
{
  "DeleteDate": "2021-09-24T18:22:03Z",
  "RequestId": "9A931CE5-C926-5E09-B0EC-6299C4A6****",
  "Description": "testkey",
  "Origin": "Aliyun_KMS",
  "MaterialExpireTime": "2021-09-24T18:22:03Z",
  "EncryptionKeyStatus": "Enabled",
  "KeyUsage": "ENCRYPT/DECRYPT",
  "EncryptionKey": "ad463061-992d-4195-8a94-ed63********",
  "Creator": "17649847********",
  "EncryptionName": "AES-CTR-256",
  "RoleArn": "acs:ram::123456789012****:role/AliyunRdsInstanceEncryptionDefaultRole"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InstanceType.NotSupport

Current instance type does not support this operation.

The current instance type does not support this operation

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/R-kvstore/2015-01-01/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-03-13

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/DescribeEncryptionKey?updateTime=2025-03-13#workbench-doc-change-demo)

2024-02-26

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/DescribeEncryptionKey?updateTime=2024-02-26#workbench-doc-change-demo)

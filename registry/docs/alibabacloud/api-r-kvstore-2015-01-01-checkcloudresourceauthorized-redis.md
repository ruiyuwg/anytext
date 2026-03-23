Queries whether a Tair (Redis OSS-compatible) instance has the permissions to use Key Management Service (KMS).

## Operation description

-   For information about Transparent Data Encryption (TDE) and the usage notes of TDE, see [Enable TDE](/help/en/redis/user-guide/enable-tde).
-   If the Tair (Redis OSS-compatible) instance is authorized to use KMS, you can call the [ModifyInstanceTDE](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-modifyinstancetde-redis) operation to enable TDE.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/CheckCloudResourceAuthorized)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/CheckCloudResourceAuthorized)

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

kvstore:CheckCloudResourceAuthorized

get

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

InstanceId

string

Yes

The ID of the instance. You can call the [DescribeInstances](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-describeinstances-redis) operation to query the ID of the instance.

r-bp1zxszhcgatnx\*\*\*\*

RoleArn

string

Yes

The Alibaba Cloud Resource Name (ARN) of the Resource Access Management (RAM) role that you want to attach to your Tair (Redis OSS-compatible) instance. The ARN must be in the format of `acs:ram::$accountID:role/$roleName`. After the role is attached, your Tair (Redis OSS-compatible) instance can use KMS.

**Note**

-   `$accountID`: the ID of the Alibaba Cloud account. To view the account ID, log on to the Alibaba Cloud console, move the pointer over your profile picture in the upper-right corner of the page, and then click **Security Settings**.
    
-   `$roleName`: the name of the RAM role. Replace $roleName with **AliyunRdsInstanceEncryptionDefaultRole**.
    

acs:ram::123456789012\*\*\*\*:role/AliyunRdsInstanceEncryptionDefaultRole

## Response parameters

Parameter

Type

Description

Example

object

AuthorizationState

integer

Indicates whether the instance is authorized to use KMS. Valid values:

-   **0**: The instance is authorized to use KMS.
-   **1**: The instance is not authorized to use KMS.
-   **2**: KMS is not activated. For more information, see [Activate KMS](/help/en/kms/key-management-service/support/purchase-a-dedicated-kms-instance).

1

RequestId

string

The ID of the request.

A501A191-BD70-5E50-98A9-C2A486A82\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "AuthorizationState": 1,
  "RequestId": "A501A191-BD70-5E50-98A9-C2A486A82****"
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/R-kvstore/2015-01-01/errorCode).

## Change history

Change time

Summary of changes

Operation

2023-07-20

API Description Update

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/CheckCloudResourceAuthorized?updateTime=2023-07-20#workbench-doc-change-demo)

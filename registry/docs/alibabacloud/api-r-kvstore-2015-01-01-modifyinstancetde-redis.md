Enables transparent data encryption (TDE) for a Tair (Redis OSS-compatible) instance. You can use existing custom keys.

## Operation description

**Note** For more information about TDE and the impact of TDE, see [Enable TDE](/help/en/redis/user-guide/enable-tde).

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/ModifyInstanceTDE)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/ModifyInstanceTDE)

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

kvstore:ModifyInstanceTDE

update

\*DBInstance

`acs:kvstore:{#regionId}:{#accountId}:instance/{#instanceId}`

-   kvstore:TDEStatus

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

TDEStatus

string

Yes

Specifies whether to enable TDE. Set the value to **Enabled**.

**Note** TDE cannot be disabled after it is enabled. Before you enable it, evaluate whether this feature affects your business. For more information, see [Enable TDE](/help/en/redis/user-guide/enable-tde).

Enabled

EncryptionName

string

No

The encryption algorithm. Default value: AES-CTR-256.

**Note** This parameter is available only if the **TDEStatus** parameter is set to **Enabled**.

AES-CTR-256

EncryptionKey

string

No

The ID of the custom key. You can call the [DescribeEncryptionKeyList](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-describeencryptionkeylist-redis) operation to query the key ID.

**Note**

-   If you do not specify this parameter, [Key Management Service (KMS)](/help/en/kms/key-management-service/support/what-is-key-management-service) automatically generates a key.
    
-   To create a custom key, you can call the [CreateKey](/help/en/kms/key-management-service/developer-reference/api-createkey) operation of the KMS API.
    

ad463061-992d-4195-8a94-ed63\*\*\*\*\*\*\*\*

RoleArn

string

No

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

RequestId

string

The ID of the request.

5D622714-AEDD-4609-9167-F5DDD3D1\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "5D622714-AEDD-4609-9167-F5DDD3D1****"
}
```

## Error codes

HTTP status code

Error code

Error message

400

InvalidInstanceName.Malformed

The Specified parameter InstanceName is not valid.

400

TaskExists

Specified task have existed.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/R-kvstore/2015-01-01/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-03-25

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/ModifyInstanceTDE?updateTime=2025-03-25#workbench-doc-change-demo)

2023-09-14

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/ModifyInstanceTDE?updateTime=2023-09-14#workbench-doc-change-demo)

2023-03-02

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/ModifyInstanceTDE?updateTime=2023-03-02#workbench-doc-change-demo)

Queries a list of custom keys used by Tair (Redis OSS-compatible) instances.

## Operation description

-   You can specify a custom key when you call the [ModifyInstanceTDE](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-modifyinstancetde-redis) operation to enable Transparent Data Encryption (TDE). You can call the DescribeEncryptionKeyList operation to query the custom keys that are in use. To create a custom key, you can call the [CreateKey](/help/en/kms/key-management-service/developer-reference/api-createkey) operation of Key Management Service (KMS).
-   For more information about TDE and the usage notes of TDE, see [Enable TDE](/help/en/redis/user-guide/enable-tde).

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/DescribeEncryptionKeyList)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/DescribeEncryptionKeyList)

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

kvstore:DescribeEncryptionKeyList

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

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

10E2160B-959C-5C3E-BFE6-86EC5925\*\*\*\*

KeyIds

array

The custom keys that are available in the region.

KeyId

string

The custom key.

a0e7e2c9-8ee5-40ed-bbca-7dbc\*\*\*\*\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "10E2160B-959C-5C3E-BFE6-86EC5925****",
  "KeyIds": {
    "KeyId": [
      "a0e7e2c9-8ee5-40ed-bbca-7dbc********"
    ]
  }
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/R-kvstore/2015-01-01/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-03-25

API Description Update

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/DescribeEncryptionKeyList?updateTime=2025-03-25#workbench-doc-change-demo)

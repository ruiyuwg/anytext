Enables Transport Layer Security (TLS) for a Tair (Redis OSS-compatible) instance.

## Operation description

You can also configure SSL encryption in the console. For more information, see [Configure SSL encryption](/help/en/redis/user-guide/configure-ssl-encryption).

**Note** To specify the earliest supported SSL version, you can call the [ModifyInstanceConfig](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-modifyinstanceconfig-redis) operation to modify the required parameter.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/ModifyInstanceSSL)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/R-kvstore/2015-01-01/ModifyInstanceSSL)

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

kvstore:ModifyInstanceSSL

update

\*DBInstance

`acs:kvstore:{#regionId}:{#accountId}:instance/{#instanceId}`

-   kvstore:SSLEnabled

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

The instance ID.

r-bp1zxszhcgatnx\*\*\*\*

SSLEnabled

string

Yes

Specifies whether to enable TLS (SSL) encryption. Valid values:

-   **Disable**: disables SSL encryption.
-   **Enable**: enables SSL encryption.
-   **Update**: updates the SSL certificate.

Enable

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

AD7E16AA-6B23-43BF-979C-07D957FB\*\*\*\*

InstanceId

string

The instance ID.

r-bp1zxszhcgatnx\*\*\*\*

TaskId

string

The ID of the task.

32184\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "AD7E16AA-6B23-43BF-979C-07D957FB****",
  "InstanceId": "r-bp1zxszhcgatnx****",
  "TaskId": "32184****"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidParameters.Format

Specified parameters is not valid.

The parameter is invalid.

403

IncorrectCharacterType

Current DB instance CharacterType does not support this operation.

\-

403

IncorrectEngineVersion

Current engine version does not support operations.

The current Redis version does not support this operation. Please refer to the relevant documentation for this operation to understand the Redis version requirements for this operation.

403

IncorrectDBInstanceState

Current DB instance state does not support this operation.

The operation cannot be performed until the instance is in the running state.

403

IncorrectDBInstanceLockMode

Current DB instance lock mode does not support this operation.

The operation is not supported while the instance is being locked.

404

EnabledSSLNotSupport

Specified region does not support enable ssl.

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/R-kvstore/2015-01-01/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-03-25

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/R-kvstore/2015-01-01/ModifyInstanceSSL?updateTime=2025-03-25#workbench-doc-change-demo)

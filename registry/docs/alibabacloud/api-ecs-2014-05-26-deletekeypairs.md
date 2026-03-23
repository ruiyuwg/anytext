Deletes one or more SSH key pairs.

## Operation description

When you call this operation, take note of the following items:

-   After an SSH key pair is deleted, you cannot query the SSH key pair by calling the [DescribeKeyPairs](/help/en/ecs/api-describekeypairs) operation.
-   If an SSH key pair is bound to one or more Elastic Compute Service (ECS) instances, the SSH key pair cannot be deleted.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DeleteKeyPairs)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DeleteKeyPairs)

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

ecs:DeleteKeyPairs

delete

\*KeyPair

`acs:ecs:{#regionId}:{#accountId}:keypair/{#keypairName}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

RegionId

string

Yes

The ID of the region. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent list of regions.

cn-hangzhou

KeyPairNames

string

Yes

The names of SSH key pairs. The value can be a JSON array that consists of up to 100 SSH key pair names. Separate the names with commas (,).

**Note** Before you delete an SSH key pair, you can call the [DescribeKeyPairs](/help/en/ecs/api-describekeypairs) operation to query existing key pairs.

\["skp-bp67acfmxazb41\*\*\*\*", "skp-bp67acfmxazb42\*\*\*\*", … "skp-bp67acfmxazb4p3\*\*\*"\]

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

MissingParameter

The input parameter "KeyPairNames" that is mandatory for processing this request is not supplied.

\-

400

InvalidKeyPairNames.ValueNotSupported

The specified parameter "KeyPairNames" is not valid.

\-

400

InvalidParameter.KeypairAlreadyAttachedInstance

The specified parameter "KeyPairNames" attached to instances can not be deleted.

\-

403

InstanceKeyPairLimitExceeded

Exceeding the allowed amount of instance which will be deleted.

The number of specified key pairs exceeds the upper limit.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-12-17

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DeleteKeyPairs?updateTime=2024-12-17#workbench-doc-change-demo)

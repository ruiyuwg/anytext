Queries the Key Management Service (KMS) key used by the Account-level Elastic Block Storage (EBS) Default Encryption feature in a region.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeDiskDefaultKMSKeyId)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeDiskDefaultKMSKeyId)

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

ecs:DescribeDiskDefaultKMSKeyId

get

\*DiskEncryptionDefaultConfig

`acs:ecs:{#regionId}:{#accountId}:diskencryptiondefaultconfig/*`

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

The ID of the region. You can call the DescribeRegions operation to query the most recent region list.

cn-hangzhou

## Response parameters

Parameter

Type

Description

Example

object

Schema of Response

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3\*\*\*\*

KMSKeyId

string

The ID of the KMS key.

0e478b7a-4262-4802-b8cb-00d3fb40\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3****",
  "KMSKeyId": "0e478b7a-4262-4802-b8cb-00d3fb40****"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

403

InvalidParameter.RegionIdNotExists

The specified region does not exists.

The region does not exist.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history

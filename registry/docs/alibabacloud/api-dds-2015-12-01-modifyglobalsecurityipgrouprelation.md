Modifies the mapping between a global whitelist template and an ApsaraDB for MongoDB instance.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Dds/2015-12-01/ModifyGlobalSecurityIPGroupRelation)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Dds/2015-12-01/ModifyGlobalSecurityIPGroupRelation)

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

dds:ModifyGlobalSecurityIPGroupRelation

update

\*Instance

`acs:dds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}`

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

The region ID of the instance. You can call the [DescribeRegions](/help/en/mongodb/api-describeregions) operation to query the most recent region list.

cn-hangzhou

DBClusterId

string

Yes

The instance ID.

dds-2ze6069764423m0l

GlobalSecurityGroupId

string

Yes

The ID of the IP whitelist template.

g-u0qdtybfvxhaxrrhk4n7

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

52820D2B-B2DD-59F0-BDF2-83EC19C6F1CA

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "52820D2B-B2DD-59F0-BDF2-83EC19C6F1CA"
}
```

## Error codes

HTTP status code

Error code

Error message

400

RequiredParam.NotFound

Required input param is not found.

400

InvalidParameters.Format

The specified parameters are invalid.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Dds/2015-12-01/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history

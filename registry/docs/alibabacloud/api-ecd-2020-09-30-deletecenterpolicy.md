Deletes a global policy.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/ecd/2020-09-30/DeleteCenterPolicy)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ecd/2020-09-30/DeleteCenterPolicy)

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

ecd:DeleteCenterPolicy

none

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

ResourceType

string

Yes

The resource type.

Valid values:

-   app: cloud applications.
-   desktop: cloud computers.

desktop

BusinessType

integer

Yes

The business type.

Valid values:

-   1: public cloud.
-   8: commercial edition.

1

RegionId

string

Yes

The region ID. You can call the [DescribeRegions](/help/en/wuying-workspace/developer-reference/api-ecd-2020-09-30-describeregions) operation to query the list of regions where Elastic Desktop Service (EDS) Enterprise is available.

cn-hangzhou

PolicyGroupIds

array

Yes

The policy IDs.

string

Yes

The policy ID.

pg-gx2x1dhsmthe9\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

72E47B1E-6B11-5A11-A27C-7A80F866\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "72E47B1E-6B11-5A11-A27C-7A80F866****"
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/ecd/2020-09-30/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history

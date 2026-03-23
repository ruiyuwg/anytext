Deletes a prefix list.

## Operation description

You cannot repeatedly call the **DeleteDhcpOptionsSet** operation to delete a prefix list within the specified period of time.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Vpc/2016-04-28/DeleteVpcPrefixList)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Vpc/2016-04-28/DeleteVpcPrefixList)

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

vpc:DeleteVpcPrefixList

delete

\*PrefixList

`acs:vpc:{#regionId}:{#accountId}:prefixlist/{#PrefixListId}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

PrefixListId

string

Yes

The ID of the prefix list that you want to delete.

pl-0b78hw45f\*\*\*\*

ClientToken

string

No

The client token that is used to ensure the idempotence of the request.

You can use the client to generate the value, but you must make sure that it is unique among different requests. The client token can contain only ASCII characters.

**Note** If you do not set this parameter, the system uses **RequestId** as **ClientToken**. **RequestId** may be different for each API request.

123e4567-e89b-12d3-a456-426655440000

DryRun

boolean

No

Specifies whether to check the request without performing the operation. Valid values:

-   **true**: checks the request without performing the operation. The system checks the required parameters, request syntax, and limits. If the request fails to pass the check, an error message is returned. If the request passes the check, the `DryRunOperation` error code is returned.
-   **false** (default): sends the request. If the request passes the check, a 2xx HTTP status code is returned and the operation is performed.

false

RegionId

string

Yes

The region ID of the prefix list.

You can call the [DescribeRegions](/help/en/vpc/api-describeregions) operation to query the most recent region list.

cn-hangzhou

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

64B48E3D-DF70-471B-AA93-08E683A1B45

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "64B48E3D-DF70-471B-AA93-08E683A1B45"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

ResourceNotFound.PrefixList

The specified resource of prefixList is not found.

\-

400

IncorrectStatus.SystemPrefixList

This is not allowed to operate system prefixList.

\-

400

OperationDenied.DeleteShareResource

This is not allowed to delete shared prefixList.

\-

400

IncorrectStatus.PrefixList

The status of prefixList is incorrect.

The prefix list is in an unstable state.

400

DependencyViolation.PrefixListRelation

The specified resource of prefixList depends on prefixList relation, so the operation cannot be completed.

\-

400

DependencyViolation.ShareResource

The specified resource of prefixList depends on share resource, so the operation cannot be completed.

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Vpc/2016-04-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2023-08-30

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Vpc/2016-04-28/DeleteVpcPrefixList?updateTime=2023-08-30#workbench-doc-change-demo)

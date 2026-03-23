Modifies a tag policy.

## Operation description

### [](#)[](#)

This topic provides an example on how to call the API operation to change the name of a tag policy to `test`.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Tag/2018-08-28/ModifyPolicy)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Tag/2018-08-28/ModifyPolicy)

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

tag:ModifyPolicy

update

\*Policy

`acs:tag::{#accountId}:policy/{#PolicyId}`

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

No

The region ID. Set the value to cn-shanghai.

cn-shanghai

PolicyId

string

Yes

The ID of the tag policy.

p-5732750813924f90\*\*\*\*

PolicyDesc

string

No

The description of the tag policy.

The description must be 0 to 512 characters in length.

This is a tag policy example.

PolicyContent

string

No

The document of the tag policy.

For more information about the syntax of a tag policy, see [Syntax of a tag policy](/help/en/resource-management/tag/user-guide/syntax-of-a-tag-policy).

{"tags":{"CostCenter":{"tag\_value":{"@@assign":\["Beijing","Shanghai"\]},"tag\_key":{"@@assign":"CostCenter"}}}}

PolicyName

string

No

The name of the tag policy.

The name must be 1 to 128 characters in length and can contain letters, digits, and underscores (\_).

test

DryRun

boolean

No

Specifies whether to perform only a dry run, without performing the actual request. Valid values:

-   false (default): performs a dry run and performs the actual request.
-   true: performs only a dry run.

false

For more information about common request parameters, see [Common parameters](/help/en/resource-management/common-parameters).

## Response parameters

Parameter

Type

Description

Example

object

The returned result.

RequestId

string

The request ID.

4A32F5B0-0B0B-5537-B4A0-7A6E1C3AA96A

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "4A32F5B0-0B0B-5537-B4A0-7A6E1C3AA96A"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

NoPermission.RAM

The operator is not permission for the action in ram policy.

The account is not supported.

403

EffectivePolicy.ResourceGroupScope.TooLong

The resource group range of for effective policy is too long.

The resource group range for a valid policy is too long.

403

RDAcount.HasOpened

As the RD master or administrator, you cannot activate the tag policy service because account has already enabled it, you can only activate it once the policy service is disabled by the aforementioned RD account.

The member account of the resource directory has a tag policy. You must disable the member account before you can activate the multi-account mode.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Tag/2018-08-28/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history

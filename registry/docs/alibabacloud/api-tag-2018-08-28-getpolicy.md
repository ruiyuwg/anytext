Queries the details of a tag policy.

## Operation description

This topic provides an example on how to call the API operation to query the details of the tag policy with an ID of `p-557cb141331f41c7****`.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Tag/2018-08-28/GetPolicy)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Tag/2018-08-28/GetPolicy)

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

tag:GetPolicy

get

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

p-557cb141331f41c7\*\*\*\*

For more information about common request parameters, see [Common parameters](/help/en/resource-management/common-parameters).

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The ID of the request.

1E7A4802-AB57-570A-9860-F15B60E1586B

Policy

object

The details of the tag policy.

PolicyName

string

The name of the tag policy.

test

PolicyDesc

string

The description of the tag policy.

This is a tag policy example.

PolicyContent

string

The document of the tag policy.

{\\"tags\\":{\\"CostCenter\\":{\\"tag\_value\\":{\\"@@assign\\":\[\\"Beijing\\",\\"Shanghai\\"\]},\\"tag\_key\\":{\\"@@assign\\":\\"CostCenter\\"}}}}

UserType

string

The mode of the Tag Policy feature. Valid values:

-   USER: single-account mode
-   RD: multi-account mode

For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](/help/en/resource-management/tag/user-guide/overview).

USER

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "1E7A4802-AB57-570A-9860-F15B60E1586B",
  "Policy": {
    "PolicyName": "test",
    "PolicyDesc": "This is a tag policy example.",
    "PolicyContent": "{\\\"tags\\\":{\\\"CostCenter\\\":{\\\"tag_value\\\":{\\\"@@assign\\\":[\\\"Beijing\\\",\\\"Shanghai\\\"]},\\\"tag_key\\\":{\\\"@@assign\\\":\\\"CostCenter\\\"}}}}",
    "UserType": "USER"
  }
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Tag/2018-08-28/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history

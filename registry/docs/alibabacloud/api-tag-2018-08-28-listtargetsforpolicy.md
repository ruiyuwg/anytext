Queries the objects to which a tag policy is attached.

## Operation description

If you use the Tag Policy feature in single-account mode, you can use the current logon account to call this API operation to query the object to which a tag policy is attached. The object is the current logon account. If you use the Tag Policy feature in multi-account mode, you can use the management account of a resource directory to call this API operation to query the objects to which a tag policy is attached. The objects include the Root folder, folders other than the Root folder, and members in the resource directory. For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](/help/en/resource-management/tag/user-guide/overview).

This topic provides an example on how to call the API operation to query the objects to which the tag policy with an ID of `p-de62a0bf400e4b69****` is attached. In this example, the Tag Policy feature in multi-account mode is used. The response shows that the tag policy is attached to two members in the related resource directory.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Tag/2018-08-28/ListTargetsForPolicy)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Tag/2018-08-28/ListTargetsForPolicy)

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

tag:ListTargetsForPolicy

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

RegionId

string

No

The region ID. Set the value to cn-shanghai.

cn-shanghai

MaxResult

integer

No

The number of entries to return on each page.

Default value: 50. Maximum value: 1000.

50

NextToken

string

No

The token that is used to start the next query.

caeba0bbb2be03f84eb48b699f0a\*\*\*\*

PolicyId

string

Yes

The ID of the tag policy.

p-de62a0bf400e4b69\*\*\*\*

For more information about common request parameters, see [Common parameters](/help/en/resource-management/common-parameters).

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

Targets

array<object>

The objects to which the tag policy is attached.

Target

object

The objects to which the tag policy is attached.

TargetId

string

The ID of the object.

195320939469\*\*\*\*

TargetType

integer

The type of the object. Valid values:

-   USER: the current logon account. This value is available if you use the Tag Policy feature in single-account mode.
-   ROOT: the Root folder in the resource directory. This value is available if you use the Tag Policy feature in multi-account mode.
-   FOLDER: a folder other than the Root folder in the resource directory. This value is available if you use the Tag Policy feature in multi-account mode.
-   ACCOUNT: a member in the resource directory. This value is available if you use the Tag Policy feature in multi-account mode.

ACCOUNT

RequestId

string

The ID of the request.

2EE71C8D-6DB8-56AC-8B05-3D4C0116E6A1

IsRd

boolean

Indicates whether the object belongs to the resource directory. Valid values:

-   true: The object belongs to the resource directory. This value is available if you use the Tag Policy feature in multi-account mode.
-   false: The object does not belong to the resource directory. This value is available if you use the Tag Policy feature in single-account mode.

true

RdId

string

The ID of the resource directory.

**Note** This parameter is returned only if you use the Tag Policy feature in multi-account mode.

rd-3G\*\*\*\*

NextToken

string

Indicates whether the next query is required.

-   If the value of this parameter is empty (`"NextToken": ""`), all results are returned, and the next query is not required.
-   If the value of this parameter is not empty, the next query is required, and the value is the token used to start the next query.

caeba0bbb2be03f84eb48b699f0a\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "Targets": [
    {
      "TargetId": "195320939469****",
      "TargetType": 0
    }
  ],
  "RequestId": "2EE71C8D-6DB8-56AC-8B05-3D4C0116E6A1",
  "IsRd": true,
  "RdId": "rd-3G****",
  "NextToken": "caeba0bbb2be03f84eb48b699f0a****"
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Tag/2018-08-28/errorCode).

## Change history

Change time

Summary of changes

Operation

2023-12-08

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/Tag/2018-08-28/ListTargetsForPolicy?updateTime=2023-12-08#workbench-doc-change-demo)

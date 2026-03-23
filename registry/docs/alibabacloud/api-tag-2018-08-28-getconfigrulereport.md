Queries the basic information about the resource non-compliance report that is last generated.

## Operation description

If you use the Tag Policy feature in single-account mode, you can use the current logon account to call this API operation to query the basic information of the resource non-compliance report that is last generated for the account. If you use the Tag Policy feature in multi-account mode, you can use the management account of a resource directory to call this API operation to query the basic information of the resource non-compliance report that is last generated for an object in the resource directory. The object can be the Root folder, a folder other than the Root folder, or a member. For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](/help/en/resource-management/tag/user-guide/overview).

This topic provides an example on how to call this API operation to query the basic information of the resource non-compliance report that is last generated for the current logon account. In this example, the Tag Policy feature in single-account mode is used. The response shows that the ID of the report is `crp-ao0786618088006c****`.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Tag/2018-08-28/GetConfigRuleReport)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Tag/2018-08-28/GetConfigRuleReport)

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

tag:GetConfigRuleReport

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

TargetId

string

No

The ID of the object.

154950938137\*\*\*\*

UserType

string

No

The mode of the Tag Policy feature. Valid values:

-   USER: single-account mode
-   RD: multi-account mode

For more information about the modes of the Tag Policy feature, see [Modes of the Tag Policy feature](/help/en/resource-management/tag/user-guide/overview).

**Note** The value of this parameter is not case-sensitive.

USER

TargetType

string

No

The type of the object. Valid values:

-   USER: the current logon account. This value is available if you use the Tag Policy feature in single-account mode.
-   ROOT: the Root folder in a resource directory. This value is available if you use the Tag Policy feature in multi-account mode.
-   FOLDER: a folder other than the Root folder in a resource directory. This value is available if you use the Tag Policy feature in multi-account mode.
-   ACCOUNT: a member in a resource directory. This value is available if you use the Tag Policy feature in multi-account mode.

**Note** The value of this parameter is not case-sensitive.

USER

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

A68BD5BC-5B12-5A9B-8AE9-77884886BE10

Success

boolean

Indicates whether the request is successful. Valid values:

-   true: The request is successful.
-   false: The request fails.

true

HttpStatusCode

integer

The HTTP status code.

200

Data

object

The basic information of the resource non-compliance report that is last generated.

ReportId

string

The ID of the report.

crp-ao0786618088006c\*\*\*\*

CreatedTime

long

The time when the report was generated. This value is a UNIX timestamp.

1655089159000

TargetId

string

The ID of the object.

**Note** This parameter is returned if you set the `TargetType` and `TargetId` parameters in the current request to the same values as the parameters that are configured when you call the [GenerateConfigRuleReport](/help/en/resource-management/api-generate-config-rule-report) operation to generate the report.

154950938137\*\*\*\*

TargetType

string

The type of the object. Valid values:

-   USER: the current logon account. This value is available if you use the Tag Policy feature in single-account mode.
-   ROOT: the Root folder in the resource directory. This value is available if you use the Tag Policy feature in multi-account mode.
-   FOLDER: a folder other than the Root folder in the resource directory. This value is available if you use the Tag Policy feature in multi-account mode.
-   ACCOUNT: a member in the resource directory. This value is available if you use the Tag Policy feature in multi-account mode.

**Note** This parameter is returned if you set the `TargetType` and `TargetId` parameters in the current request to the same values as the parameters that are configured when you call the [GenerateConfigRuleReport](/help/en/resource-management/api-generate-config-rule-report) operation to generate the report.

ACCOUNT

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "A68BD5BC-5B12-5A9B-8AE9-77884886BE10",
  "Success": true,
  "HttpStatusCode": 200,
  "Data": {
    "ReportId": "crp-ao0786618088006c****",
    "CreatedTime": 1655089159000,
    "TargetId": "154950938137****",
    "TargetType": "ACCOUNT"
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

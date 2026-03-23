Queries the information about a RAM role.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/ResourceManager/2020-03-31/GetRole)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ResourceManager/2020-03-31/GetRole)

## Authorization information

There is currently no authorization information disclosed in the API.

## Request parameters

Parameter

Type

Required

Description

Example

RoleName

string

Yes

The name of the role.

The name must be 1 to 64 characters in length, and can contain letters, digits, periods (.), and hyphens (-).

ECSAdmin

Language

string

No

The language in which you want to return the description of the role. Valid values:

-   en: English
-   zh-CN: Chinese
-   ja: Japanese

zh-CN

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

04F0F334-1335-436C-A1D7-6C044FE73368

Role

object

The information about the role.

Arn

string

The Alibaba Cloud Resource Name (ARN) of the role.

acs:ram::123456789012\*\*\*\*:role/ECSAdmin

AssumeRolePolicyDocument

string

The document of the policy in which the identity that can assume the role is specified.

{ \\"Statement\\": \[ { \\"Action\\": \\"sts:AssumeRole\\", \\"Effect\\": \\"Allow\\", \\"Principal\\": { \\"RAM\\": \\"acs:ram::12345678901234\*\*\*\*:root\\" } } \], \\"Version\\": \\"1\\" }

CreateDate

string

The time when the role was created.

2015-01-23T12:33:18Z

Description

string

The description of the role.

ECS administrator

IsServiceLinkedRole

boolean

Indicates whether the role is a service-linked role.

true

LatestDeletionTask

object

The information of the most recent deletion task.

CreateDate

string

The time when the deletion task was created.

2018-10-23T12:33:18Z

DeletionTaskId

string

The ID of the deletion task.

ECSAdmin/cc61514b-26eb-4453-ab53-b142eb702a3d

MaxSessionDuration

long

The maximum session duration of the role.

3600

RoleId

string

The ID of the role.

90123456789\*\*\*\*

RoleName

string

The name of the role.

ECSAdmin

RolePrincipalName

string

The name of the role after authorization.

ECSAdmin@role.123456.onaliyunservice.com

UpdateDate

string

The time when the role was updated.

2016-01-23T12:33:18Z

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "04F0F334-1335-436C-A1D7-6C044FE73368",
  "Role": {
    "Arn": "acs:ram::123456789012****:role/ECSAdmin",
    "AssumeRolePolicyDocument": "{ \\\"Statement\\\": [ { \\\"Action\\\": \\\"sts:AssumeRole\\\", \\\"Effect\\\": \\\"Allow\\\", \\\"Principal\\\": { \\\"RAM\\\": \\\"acs:ram::12345678901234****:root\\\" } } ], \\\"Version\\\": \\\"1\\\" }",
    "CreateDate": "2015-01-23T12:33:18Z",
    "Description": "ECS administrator",
    "IsServiceLinkedRole": true,
    "LatestDeletionTask": {
      "CreateDate": "2018-10-23T12:33:18Z",
      "DeletionTaskId": "ECSAdmin/cc61514b-26eb-4453-ab53-b142eb702a3d"
    },
    "MaxSessionDuration": 3600,
    "RoleId": "90123456789****",
    "RoleName": "ECSAdmin",
    "RolePrincipalName": "ECSAdmin@role.123456.onaliyunservice.com",
    "UpdateDate": "2016-01-23T12:33:18Z"
  }
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidParameter.RoleName.InvalidChars

The specified role name contains invalid characters.

The specified role name contains invalid characters.

400

InvalidParameter.RoleName.Length

The maximum length of the role name is exceeded.

The maximum length of the role name is exceeded.

404

EntityNotExist.Role

The role does not exist.

The role does not exist.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/ResourceManager/2020-03-31/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history

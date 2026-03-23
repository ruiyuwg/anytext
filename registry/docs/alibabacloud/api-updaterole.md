Updates the information about a Resource Access Management (RAM) role.

## Operation description

In this example, the description of the RAM role `ECSAdmin` is updated to `ECS administrator`.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/ResourceManager/2020-03-31/UpdateRole)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ResourceManager/2020-03-31/UpdateRole)

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

The name of the RAM role.

The name must be 1 to 64 characters in length, and can contain letters, digits, periods (.), and hyphens (-).

ECSAdmin

NewAssumeRolePolicyDocument

string

No

The trust policy of the RAM role.

{ "Statement": \[ { "Action": "sts:AssumeRole", "Effect": "Allow", "Principal": { "RAM": "acs:ram::12345678901234\*\*\*\*:root" } } \], "Version": "1" }

NewMaxSessionDuration

long

No

The maximum session time of the RAM role.

Valid values: 3600 to 43200. Unit: seconds. Default value: 3600.

If you do not specify this parameter, the default value is used.

3600

NewDescription

string

No

The description of the RAM role.

The description must be 1 to 1,024 characters in length.

ECS administrator

For more information about common request parameters, see [Common parameters](/help/en/resource-management/common-parameters).

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

The information about the RAM role.

Arn

string

The Alibaba Cloud Resource Name (ARN) of the RAM role.

acs:ram::123456789012\*\*\*\*:role/ECSAdmin

AssumeRolePolicyDocument

string

The trust policy of the RAM role.

{ \\"Statement\\": \[ { \\"Action\\": \\"sts:AssumeRole\\", \\"Effect\\": \\"Allow\\", \\"Principal\\": { \\"RAM\\": \\"acs:ram::12345678901234\*\*\*\*:root\\" } } \], \\"Version\\": \\"1\\" }

CreateDate

string

The time when the RAM role was created.

2015-01-23T12:33:18Z

Description

string

The description of the RAM role.

ECS administrator

MaxSessionDuration

long

The maximum session time of the RAM role.

3600

RoleId

string

The ID of the RAM role.

90123456789\*\*\*\*

RoleName

string

The name of the RAM role.

ECSAdmin

RolePrincipalName

string

The name of the RAM role after authorization.

ECSAdmin@role.123456.onaliyunservice.com

UpdateDate

string

The time when the RAM role was updated.

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

400

InvalidParameter.NewAssumeRolePolicyDocument.Length

The maximum length of the new trust policy document of the role is exceeded.

The maximum length of the new trust policy document of the role is exceeded.

404

EntityNotExist.Role

The role does not exist.

The role does not exist.

409

MalformedPolicyDocument

The policy format is invalid.

The policy format is invalid.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/ResourceManager/2020-03-31/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history

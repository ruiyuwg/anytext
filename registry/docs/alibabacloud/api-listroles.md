Queries a list of RAM roles.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/ResourceManager/2020-03-31/ListRoles)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ResourceManager/2020-03-31/ListRoles)

## Authorization information

There is currently no authorization information disclosed in the API.

## Request parameters

Parameter

Type

Required

Description

Example

PageNumber

integer

No

The page number.

Pages start from page 1. Default value: 1.

1

PageSize

integer

No

The number of entries per page.

Valid values: 1 to 100. Default value: 10.

10

Language

string

No

The language in which you want to return the descriptions of the RAM roles. Valid values:

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

PageNumber

integer

The page number.

1

PageSize

integer

The number of entries per page.

10

RequestId

string

The request ID.

7B8A4E7D-6CFF-471D-84DF-195A7A241ECB

Roles

array<object>

The information about the roles.

Role

object

The information about the role.

Arn

string

The Alibaba Cloud Resource Name (ARN) of the role.

acs:ram::123456789012\*\*\*\*:role/ECSAdmin

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

ECSAdmin/cc61514b-26eb-4453-ab53-b142eb70\*\*\*\*

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

TotalCount

integer

The total number of roles.

2

## Examples

Sample success responses

`JSON`format

```
{
  "PageNumber": 1,
  "PageSize": 10,
  "RequestId": "7B8A4E7D-6CFF-471D-84DF-195A7A241ECB",
  "Roles": {
    "Role": [
      {
        "Arn": "acs:ram::123456789012****:role/ECSAdmin",
        "CreateDate": "2015-01-23T12:33:18Z",
        "Description": "ECS administrator",
        "IsServiceLinkedRole": true,
        "LatestDeletionTask": {
          "CreateDate": "2018-10-23T12:33:18Z",
          "DeletionTaskId": "ECSAdmin/cc61514b-26eb-4453-ab53-b142eb70****"
        },
        "MaxSessionDuration": 3600,
        "RoleId": "90123456789****",
        "RoleName": "ECSAdmin",
        "RolePrincipalName": "ECSAdmin@role.123456.onaliyunservice.com",
        "UpdateDate": "2016-01-23T12:33:18Z"
      }
    ]
  },
  "TotalCount": 2
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/ResourceManager/2020-03-31/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history

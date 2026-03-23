Queries policy attachment records.

## Operation description

You can view the following information:

-   Policy attachment records within an Alibaba Cloud account or a resource group
-   Permission policies attached to RAM users, RAM user groups, or RAM roles
-   RAM users, RAM user groups, or RAM roles to which permission policies are attached within an Alibaba Cloud account or a resource group

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/ResourceManager/2020-03-31/ListPolicyAttachments)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/ResourceManager/2020-03-31/ListPolicyAttachments)

## Authorization information

There is currently no authorization information disclosed in the API.

## Request parameters

Parameter

Type

Required

Description

Example

ResourceGroupId

string

No

The ID of the resource group or the ID of the Alibaba Cloud account to which the resource group belongs. If you do not configure this parameter, the system lists all policy attachment records within the current account.

rg-001

PolicyType

string

No

The type of the permission policy. If you do not configure this parameter, all types of policies are returned. Valid values:

-   Custom
-   System

System

PolicyName

string

No

The name of the permission policy.

The name must be 1 to 128 characters in length and can contain letters, digits, and hyphen (-).

AdministratorAccess

PrincipalType

string

No

The type of the object to which you want to attach the permission policy. If you do not configure this parameter, the system lists all types of objects. Valid values:

-   IMSUser: RAM user
-   IMSGroup: RAM user group
-   ServiceRole: RAM role

IMSUser

PrincipalName

string

No

The name of the object to which you want to attach the permission policy.

alice@demo.onaliyun.com

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

The language in which you want to return the description of the system policy. Valid values:

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

PolicyAttachments

array<object>

The information about the permission policies.

PolicyAttachment

object

The information about the permission policy.

AttachDate

string

The time when the permission policy is attached.

2015-01-23T12:33:18Z

Description

string

The description of the permission policy.

The description of the policy.

PolicyName

string

The name of the permission policy.

AdministratorAccess

PolicyType

string

The type of the permission policy. Valid values:

-   Custom
-   System

System

PrincipalName

string

The name of the object to which the permission policy is attached.

alice@demo.onaliyun.com

PrincipalType

string

The type of the object to which the permission policy is attached. Valid values:

-   IMSUser: RAM user
-   IMSGroup: RAM user group
-   ServiceRole: RAM role

IMSUser

ResourceGroupId

string

The ID of the resource group or the ID of the Alibaba Cloud account to which the resource group belongs.

rg-9gLOoK\*\*\*\*

RequestId

string

The request ID.

7B8A4E7D-6CFF-471D-84DF-195A7A241ECB

TotalCount

integer

The total number of entries returned.

2

## Examples

Sample success responses

`JSON`format

```
{
  "PageNumber": 1,
  "PageSize": 10,
  "PolicyAttachments": {
    "PolicyAttachment": [
      {
        "AttachDate": "2015-01-23T12:33:18Z",
        "Description": "The description of the policy.",
        "PolicyName": "AdministratorAccess",
        "PolicyType": "System",
        "PrincipalName": "alice@demo.onaliyun.com",
        "PrincipalType": "IMSUser",
        "ResourceGroupId": "rg-9gLOoK****"
      }
    ]
  },
  "RequestId": "7B8A4E7D-6CFF-471D-84DF-195A7A241ECB",
  "TotalCount": 2
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidParameter.PolicyType

The specified policy type is invalid.

The specified policy type is invalid.

404

EntityNotExists.ResourceGroup

The specified resource group does not exist. You must first create a resource group.

The specified resource group does not exist. You must first create a resource group.

404

EntityNotExist.Policy

The policy does not exist.

The policy does not exist.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/ResourceManager/2020-03-31/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history

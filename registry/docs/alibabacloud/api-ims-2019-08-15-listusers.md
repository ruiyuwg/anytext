Queries information about all Resource Access Management (RAM) users.

## Operation description

### [](#)

You can call the following API operations to query the details of all RAM users:

-   ListUsers: queries the details of all RAM users.
    
-   ListUserBasicInfos: queries the basic information about all RAM users. The basic information includes only the logon names (`UserPrincipalName`), display names (`DisplayName`), and user IDs (`UserId`).
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Ims/2019-08-15/ListUsers)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Ims/2019-08-15/ListUsers)

## **RAM authorization**

The table below describes the authorization required to call this API. You can define it in a Resource Access Management (RAM) policy. The table's columns are detailed below:

-   Action: The actions can be used in the `Action` element of RAM permission policy statements to grant permissions to perform the operation.
    
-   API: The API that you can call to perform the action.
    
-   Access level: The predefined level of access granted for each API. Valid values: create, list, get, update, and delete.
    
-   Resource type: The type of the resource that supports authorization to perform the action. It indicates if the action supports resource-level permission. The specified resource must be compatible with the action. Otherwise, the policy will be ineffective.
    
    -   For APIs with resource-level permissions, required resource types are marked with an asterisk (\*). Specify the corresponding Alibaba Cloud Resource Name (ARN) in the `Resource` element of the policy.
        
    -   For APIs without resource-level permissions, it is shown as All Resources. Use an asterisk (**\***) in the `Resource` element of the policy.
        
-   Condition key: The condition keys defined by the service. The key allows for granular control, applying to either actions alone or actions associated with specific resources. In addition to service-specific condition keys, Alibaba Cloud provides a set of [common condition keys](/help/en/ram/policy-elements#section-jix-u0j-2ms) applicable across all RAM-supported services.
    
-   Dependent action: The dependent actions required to run the action. To complete the action, the RAM user or the RAM role must have the permissions to perform all dependent actions.
    

**Action**

**Access level**

**Resource type**

**Condition key**

**Dependent action**

ram:ListUsers

list

\*User

`acs:ram::{#accountId}:user/*`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

Marker

string

No

The `marker`. If part of a previous response is truncated, you can use this parameter to obtain the truncated part.

EXAMPLE

MaxItems

integer

No

The number of entries per page. If a response is truncated because it reaches the value of `MaxItems`, the value of `IsTruncated` will be true.

Valid values: 1 to 1000. Default value: 1000.

1000

Tag

array<object>

No

The tags. A maximum number of 20 tags are supported.

object

No

The tag value.

Valid values of N: 1 to 20. The tag value can be an empty string. The tag value can be a up to128 characters in length and cannot contain `http://` or `https://`. The tag value cannot start with `acs:`.

Key

string

No

The key of tag N.

Valid values of N: 1 to 20. N must be consecutive.

operator

Value

string

No

The value of tag N.

Valid values of N: 1 to 20. N must be consecutive.

alice

Status

string

No

The status of the RAM users that you want to query. Valid values: active, freeze, and active,freeze. If you leave the parameter empty, the value active is used by default. If you specify a value for the Tag parameter, users in both states are queried.

active

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response parameters.

RequestId

string

The request ID.

4B450CA1-36E8-4AA2-8461-86B42BF4CC4E

IsTruncated

boolean

Indicates whether the response is truncated. Valid values:

-   true
    
-   false
    

true

Marker

string

The parameter that is used to obtain the truncated part. It takes effect only when `IsTruncated` is set to `true`.

EXAMPLE

Users

object

User

array<object>

The information about the RAM users.

array<object>

The information about the RAM user.

DisplayName

string

The display name of the RAM user.

test

UserPrincipalName

string

The logon name of the RAM user.

test@example.onaliyun.com

Email

string

The email address of the RAM user.

**Note**

This parameter applies only to the Alibaba Cloud China site (aliyun.com).

alice@example.com

UpdateDate

string

The point in time when the information about the RAM user was last modified. The time is displayed in UTC.

2023-08-21T06:12:47Z

MobilePhone

string

The mobile phone number of the RAM user.

**Note**

This parameter applies only to the Alibaba Cloud China site (aliyun.com).

86-1868888\*\*\*\*

UserId

string

The ID of the RAM user.

20732900249392\*\*\*\*

Comments

string

The description.

This is a cloud computing engineer.

LastLoginDate

string

The timestamp when the RAM user last logged on to the console.

1692598367586

CreateDate

string

The point in time when the RAM user was created. The time is displayed in UTC.

2020-08-25T09:23:57Z

ProvisionType

string

The source of the RAM user. Valid values:

-   Manual: The RAM user is manually created in the RAM console.
    
-   SCIM: The RAM user is mapped by using System for Cross-domain Identity Management (SCIM).
    
-   CloudSSO: The RAM user is mapped from a CloudSSO user.
    

Manual

Status

string

The status of the RAM user.

active

Tags

object

Tag

array<object>

The tags.

object

TagKey

string

The key of the tag.

oparator

TagValue

string

The value of the tag

alice

## Examples

Success response

`JSON` format

```
{
  "RequestId": "4B450CA1-36E8-4AA2-8461-86B42BF4CC4E",
  "IsTruncated": true,
  "Marker": "EXAMPLE",
  "Users": {
    "User": [
      {
        "DisplayName": "test",
        "UserPrincipalName": "test@example.onaliyun.com",
        "Email": "alice@example.com",
        "UpdateDate": "2023-08-21T06:12:47Z",
        "MobilePhone": "86-1868888****",
        "UserId": "20732900249392****",
        "Comments": "This is a cloud computing engineer.",
        "LastLoginDate": "1692598367586",
        "CreateDate": "2020-08-25T09:23:57Z",
        "ProvisionType": "Manual",
        "Status": "active",
        "Tags": {
          "Tag": [
            {
              "TagKey": "oparator",
              "TagValue": "alice"
            }
          ]
        }
      }
    ]
  }
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/Ims/2019-08-15/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Ims/2019-08-15/ListUsers#workbench-doc-change-demo) for a complete list.

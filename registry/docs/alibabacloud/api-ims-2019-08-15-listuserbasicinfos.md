Queries the basic information about all Resource Access Management (RAM) users.

## Operation description

You can call the following API operations to query information about all RAM users:

-   ListUsers: queries the details of all RAM users.
    
-   ListUserBasicInfos: queries the basic information about all RAM users. The basic information includes only the logon names (`UserPrincipalName`), display names (`DisplayName`), and user IDs (`UserId`).
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Ims/2019-08-15/ListUserBasicInfos)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Ims/2019-08-15/ListUserBasicInfos)

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

ram:ListUserBasicInfos

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

The number of entries to return. If a response is truncated because it reaches the value of `MaxItems`, the value of `IsTruncated` will be `true`.

Valid values: 1 to 1000. Default value: 100.

100

Tag

array<object>

No

The tags.

object

No

The tag.

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

The status of the RAM users that you want to query. Valid values: active, freeze, and active,freeze. If you set the value to active,freeze, RAM users in both active and freeze states are queried. If you leave the parameter empty, the value active is used by default. If the Tag parameter is specified, you cannot specify the Status parameter. In this case, RAM users in both states are queried.

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

EF2B25FD-CADE-445B-BE4D-E082E0FF1A0F

IsTruncated

boolean

Indicates whether the response is truncated. Valid values:

-   true
    
-   false
    

true

UserBasicInfos

object

UserBasicInfo

array<object>

The basic information about the RAM users.

object

The basic information about the RAM user.

UserPrincipalName

string

The logon name of the RAM user.

test@example.onaliyun.com

DisplayName

string

The display name of the RAM user.

test

UserId

string

The ID of the RAM user.

20732900249392\*\*\*\*

Status

string

The status of the RAM user.

active

Marker

string

The `marker`. This parameter is returned only if the value of `IsTruncated` is `true`. If the parameter is returned, you can call this operation again and set this parameter to obtain the truncated part.\`\`

EXAMPLE

## Examples

Success response

`JSON` format

```
{
  "RequestId": "EF2B25FD-CADE-445B-BE4D-E082E0FF1A0F",
  "IsTruncated": true,
  "UserBasicInfos": {
    "UserBasicInfo": [
      {
        "UserPrincipalName": "test@example.onaliyun.com",
        "DisplayName": "test",
        "UserId": "20732900249392****",
        "Status": "active"
      }
    ]
  },
  "Marker": "EXAMPLE"
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/Ims/2019-08-15/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Ims/2019-08-15/ListUserBasicInfos#workbench-doc-change-demo) for a complete list.

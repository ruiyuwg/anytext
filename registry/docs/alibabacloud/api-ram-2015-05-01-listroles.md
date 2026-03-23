Queries all Resource Access Management (RAM) roles.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Ram/2015-05-01/ListRoles)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Ram/2015-05-01/ListRoles)

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

ram:ListRoles

get

\*Role

`acs:ram:*:{#accountId}:role/*`

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

The key of the tag.

owner

Value

string

No

The value of the tag.

alice

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

7B8A4E7D-6CFF-471D-84DF-195A7A241ECB

IsTruncated

boolean

Indicates whether the response is truncated.

true

Roles

object

Role

array<object>

The information about the RAM roles.

array<object>

The information about the RAM role.

Description

string

The description of the RAM role.

ECS管理角色

UpdateDate

string

The update time.

2015-01-23T12:33:18Z

MaxSessionDuration

integer

The maximum session duration of the RAM role.

3600

RoleName

string

The name of the RAM role.

ECSAdmin

CreateDate

string

The creation time.

2015-01-23T12:33:18Z

RoleId

string

The ID of the RAM role.

901234567890\*\*\*\*

Arn

string

The Alibaba Cloud Resource Name (ARN) of the RAM role.

acs:ram::123456789012\*\*\*\*:role/ECSAdmin

Tags

object

Tag

array<object>

The tags.

object

The tag.

TagKey

string

The key of the tag.

owner

TagValue

string

The value of the tag.

alice

Marker

string

The marker. This parameter is returned only if the value of `IsTruncated` is `true`. If the parameter is returned, you can call this operation again and set this parameter to obtain the truncated part.\`\`\`\`

EXAMPLE

## Examples

Success response

`JSON` format

```
{
  "RequestId": "7B8A4E7D-6CFF-471D-84DF-195A7A241ECB",
  "IsTruncated": true,
  "Roles": {
    "Role": [
      {
        "Description": "ECS管理角色",
        "UpdateDate": "2015-01-23T12:33:18Z",
        "MaxSessionDuration": 3600,
        "RoleName": "ECSAdmin",
        "CreateDate": "2015-01-23T12:33:18Z",
        "RoleId": "901234567890****",
        "Arn": "acs:ram::123456789012****:role/ECSAdmin",
        "Tags": {
          "Tag": [
            {
              "TagKey": "owner",
              "TagValue": "alice"
            }
          ]
        }
      }
    ]
  },
  "Marker": "EXAMPLE"
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/Ram/2015-05-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Ram/2015-05-01/ListRoles#workbench-doc-change-demo) for a complete list.

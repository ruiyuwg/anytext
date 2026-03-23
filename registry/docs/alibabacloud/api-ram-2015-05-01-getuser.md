You can call the GetUser operation to query the details of a Resource Access Management (RAM) user.

## Operation description

This topic provides an example of how to query the details of the RAM user `alice`.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Ram/2015-05-01/GetUser)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Ram/2015-05-01/GetUser)

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

ram:GetUser

get

\*User

`acs:ram:*:{#accountId}:user/{#UserName}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

UserName

string

No

The name of the RAM user.

The name is 1 to 64 characters in length and can contain letters, digits, periods (.), hyphens (-), and underscores (\_).

alice

For more information about common parameters, see [Common parameters](/help/en/ram/developer-reference/common-parameters).

## **Response** parameters

**Parameter**

**Type**

**Description**

**Example**

object

The data returned.

User

object

The information about the RAM user.

DisplayName

string

The display name.

alice

Email

string

The email address of the RAM user.

**Note**

This parameter is available only on the China site (aliyun.com).

alice@example.com

UpdateDate

string

The time when the RAM user was last updated. The time is in UTC.

2015-02-11T03:15:21Z

MobilePhone

string

The mobile phone number of the RAM user.

**Note**

This parameter is available only on the China site (aliyun.com).

86-1860000\*\*\*\*

UserId

string

The unique ID of the RAM user.

222748924538\*\*\*\*

Comments

string

The description.

Cloud computing engineer

LastLoginDate

string

The last time the user logged on with a password. The time is in UTC.

2015-01-23T12:33:18Z

CreateDate

string

The time when the RAM user was created. The time is in UTC.

2015-01-23T12:33:18Z

UserName

string

The name of the RAM user.

alice

RequestId

string

The ID of the request.

2D69A58F-345C-4FDE-88E4-BF5189484043

## Examples

Success response

`JSON` format

```
{
  "User": {
    "DisplayName": "alice",
    "Email": "alice@example.com",
    "UpdateDate": "2015-02-11T03:15:21Z",
    "MobilePhone": "86-1860000****",
    "UserId": "222748924538****",
    "Comments": "Cloud computing engineer",
    "LastLoginDate": "2015-01-23T12:33:18Z",
    "CreateDate": "2015-01-23T12:33:18Z",
    "UserName": "alice"
  },
  "RequestId": "2D69A58F-345C-4FDE-88E4-BF5189484043"
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/Ram/2015-05-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Ram/2015-05-01/GetUser#workbench-doc-change-demo) for a complete list.

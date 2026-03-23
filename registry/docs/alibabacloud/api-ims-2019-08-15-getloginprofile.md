Queries the console logon settings for a Resource Access Management (RAM) user.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Ims/2019-08-15/GetLoginProfile)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Ims/2019-08-15/GetLoginProfile)

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

ram:GetLoginProfile

get

\*User

`acs:ram::{#accountId}:user/{#UserName}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

UserPrincipalName

string

Yes

The logon name of the RAM user.

test@example.onaliyun.com

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response parameters.

RequestId

string

The ID of the request.

E517F18B-632C-48FC-93F1-CDCBCC6F8444

LoginProfile

object

The console logon settings for the RAM user.

Status

string

The status of console logon. Valid values:

-   Active: Console logon is enabled.
    
-   Inactive: Console logon is disabled.
    

Active

UserPrincipalName

string

The logon name of the RAM user.

test@example.onaliyun.com

UpdateDate

string

The time when the logon settings were last updated. The time is displayed in UTC.

2020-10-14T06:56:45Z

LastLoginTime

string

The time when the RAM user last logged on to the console. The time is displayed in UTC.

2020-10-14T07:25:25Z

PasswordResetRequired

boolean

Indicates whether the RAM user must reset the password at the next logon. Valid values:

-   false.
    
-   true
    

false

MFABindRequired

boolean

Indicates whether multi-factor authentication (MFA) is required for the user. Valid values:

-   false
    
-   true
    

false

AutoDisableLoginStatus

string

Indicates whether console logon is automatically disabled if the user is inactive. This feature is enabled by default and cannot be disabled.

true

PasswordStatus

string

The status of the initial password. An initial password is the password that is configured when you create a logon profile or re-enable console logon.

Valid values

-   "NotInitial": The password is not an initial password.
    
-   "InitialValid": The initial password is valid.
    
-   "InitialExpired": The initial password has expired.
    

NotInitial

## Examples

Success response

`JSON` format

```
{
  "RequestId": "E517F18B-632C-48FC-93F1-CDCBCC6F8444",
  "LoginProfile": {
    "Status": "Active",
    "UserPrincipalName": "test@example.onaliyun.com",
    "UpdateDate": "2020-10-14T06:56:45Z",
    "LastLoginTime": "2020-10-14T07:25:25Z",
    "PasswordResetRequired": false,
    "MFABindRequired": false,
    "AutoDisableLoginStatus": "true",
    "PasswordStatus": "NotInitial"
  }
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/Ims/2019-08-15/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Ims/2019-08-15/GetLoginProfile#workbench-doc-change-demo) for a complete list.

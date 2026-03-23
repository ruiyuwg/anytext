Modifies the console logon settings for a Resource Access Management (RAM) user.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Ims/2019-08-15/UpdateLoginProfile)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Ims/2019-08-15/UpdateLoginProfile)

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

ram:UpdateLoginProfile

update

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

Password

string

No

The new console logon password for the RAM user.

The password must meet the password policy.

mypassword

PasswordResetRequired

boolean

No

Specifies whether the RAM user must reset the password at the next logon. Valid values:

-   true
    
-   false
    

false

MFABindRequired

boolean

No

Specifies whether to enforce multi-factor authentication (MFA) for the RAM user. Valid values:

-   true: Enforce MFA. The RAM user must attach an MFA device at the next logon.
    
-   false: Do not enforce MFA.
    

false

Status

string

No

Specifies whether to enable password-based logon to the console. Valid values:

-   Active: Enable
    
-   Inactive: Disable
    

Active

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

BCDB6A7F-2199-41D9-B577-4FA536A5ADE1

LoginProfile

object

The console logon settings.

UserPrincipalName

string

The logon name of the RAM user.

test@example11.onaliyun.com

Status

string

Indicates whether password logon to the console is enabled or disabled.

Active

UpdateDate

string

The time when the logon profile was updated.

2020-10-14T07:48:41Z

PasswordResetRequired

boolean

Indicates whether the RAM user must reset the password at the next logon.

false

MFABindRequired

boolean

Indicates whether MFA is enforced for the user.

false

AutoDisableLoginStatus

string

Indicates whether to automatically disable console logon for an inactive account. This feature is enabled by default and cannot be disabled.

true

PasswordStatus

string

The status of the initial password. An initial password is the one set when a logon profile is created or console logon is re-enabled.

Valid values:

-   "NotInitial": Not an initial password.
    
-   "InitialValid": The initial password is valid.
    
-   "InitialExpired": The initial password has expired.
    

NotInitial

## Examples

Success response

`JSON` format

```
{
  "RequestId": "BCDB6A7F-2199-41D9-B577-4FA536A5ADE1",
  "LoginProfile": {
    "UserPrincipalName": "test@example11.onaliyun.com",
    "Status": "Active",
    "UpdateDate": "2020-10-14T07:48:41Z",
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

See [Release Notes](https://api.alibabacloud.com/document/Ims/2019-08-15/UpdateLoginProfile#workbench-doc-change-demo) for a complete list.

Configures the global security preferences for a Resource Access Management (RAM) user.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Ims/2019-08-15/SetSecurityPreference)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Ims/2019-08-15/SetSecurityPreference)

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

ram:SetSecurityPreference

update

\*All Resource

`*`

-   ram:MFAOperationForLogin
    

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

EnableSaveMFATicket

boolean

No

Specifies whether to save the multi-factor authentication (MFA) status for seven days after a RAM user logs on using MFA. Valid values:

-   true
    
-   false (default)
    

false

AllowUserToChangePassword

boolean

No

Specifies whether RAM users can manage their own passwords. Valid values:

-   true (default)
    
-   false
    

true

AllowUserToManageAccessKeys

boolean

No

Specifies whether RAM users can manage their own AccessKey pairs. Valid values:

-   true:
    
-   false (default)
    

false

AllowUserToManageMFADevices

boolean

No

Specifies whether RAM users can manage their own MFA devices. Valid values:

-   true (default)
    
-   false
    

true

LoginSessionDuration

integer

No

The duration of a logon session for a RAM user.

Valid values: 1 to 24. Unit: hours.

Default value: 6.

6

LoginNetworkMasks

string

No

Specifies the IP addresses or CIDR blocks from which RAM users are allowed to sign in to the Alibaba Cloud console.

-   This restriction applies to both password-based and single sign-on (SSO) logons.
    
-   It does not affect API calls made with an AccessKey pair.
    
-   If a mask is not configured, logons are allowed from any IP address.
    

Separate multiple entries with a semicolon (`;`). For example: 192.168.0.0/16;10.0.0.0/8.

The mask is limited to a maximum of 40 entries and a total length of 512 characters.

10.0.0.0/8

VerificationTypes

array

No

The MFA methods.

string

No

The MFA method. Valid values:

-   sms: SMS verification.
    
-   email: Email verification.
    

\["sms", "email"\]

AllowUserToManagePersonalDingTalk

boolean

No

Specifies whether RAM users can attach or detach their personal DingTalk accounts. Valid values:

-   true (default)
    
-   false
    

true

OperationForRiskLogin`**deprecated**`

string

No

This parameter is deprecated.

autonomous

MFAOperationForLogin

string

No

Specifies whether MFA is required for logon. This parameter replaces `EnforceMFAForLogin`. The `EnforceMFAForLogin` parameter is still valid, but using this new parameter is recommended. Valid values:

-   mandatory: Enforces MFA for all RAM users. This value corresponds to `true` for the `EnforceMFAForLogin` parameter.
    
-   independent (default): The MFA requirement depends on the configuration of each RAM user. This value corresponds to `false` for the `EnforceMFAForLogin` parameter.
    
-   adaptive: Enforces MFA only for abnormal logons.
    

adaptive

MaxIdleDaysForAccessKeys

integer

No

The maximum number of days that a RAM user's AccessKey pair can be idle. If an AccessKey pair is not used within the specified period, it is automatically disabled the next day. Valid values:

-   90
    
-   180
    
-   365
    
-   730 (default)
    

365

MaxIdleDaysForUsers

integer

No

The maximum number of days that a RAM user can be idle. If a RAM user with console logon enabled does not log on within this period, their console logon is automatically disabled the next day. This setting does not apply to single sign-on (SSO) logons. Valid values:

-   90
    
-   180
    
-   365
    
-   730 (default)
    

365

AllowUserToLoginWithPasskey

boolean

No

Specifies whether RAM users can log on using passkeys. Valid values:

-   true (default)
    
-   false
    

true

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The response parameters.

SecurityPreference

object

The security preferences.

AccessKeyPreference

object

The AccessKey pair preferences.

AllowUserToManageAccessKeys

boolean

Indicates whether RAM users can manage their own AccessKey pairs. Valid values:

-   true
    
-   false
    

false

LoginProfilePreference

object

The logon preferences.

EnableSaveMFATicket

boolean

Indicates whether the MFA status is saved for seven days after a RAM user logs on using MFA.

Valid values:

-   true
    
-   false
    

false

LoginSessionDuration

integer

The duration of a logon session for a RAM user.

6

LoginNetworkMasks

string

The IP addresses or CIDR blocks from which RAM users are allowed to sign in to the Alibaba Cloud console.

10.0.0.0/8

AllowUserToChangePassword

boolean

Indicates whether RAM users can manage their own passwords.

Valid values:

-   true
    
-   false
    

true

OperationForRiskLogin`**deprecated**`

string

This parameter is deprecated.

autonomous

MFAOperationForLogin

string

Indicates whether MFA is required for logon. This parameter replaces `EnforceMFAForLogin`. The `EnforceMFAForLogin` parameter is still valid, but using this new parameter is recommended.

adaptive

AllowUserToLoginWithPasskey

boolean

Indicates whether RAM users can log on directly using passkeys.

Valid values:

-   true
    
-   false
    

false

MFAPreference

object

The MFA preferences.

AllowUserToManageMFADevices

boolean

Indicates whether RAM users can manage their own MFA devices.

Valid values:

-   true
    
-   false
    

false

VerificationPreference

object

The preferences for MFA methods.

VerificationTypes

array

The MFA methods.

string

The MFA method.

\["sms", "email"\]

PersonalInfoPreference

object

The personal information preferences.

AllowUserToManagePersonalDingTalk

boolean

Indicates whether RAM users can attach or detach their personal DingTalk accounts.

Valid values:

-   true
    
-   false
    

true

MaxIdleDays

object

The configuration of the maximum idle period in days.

MaxIdleDaysForUsers

integer

The maximum idle period for RAM users. If a RAM user with console logon enabled remains inactive for this period, their console logon is automatically disabled the next day. This does not apply to single sign-on (SSO) logons.

Default value: 730.

Unit: days.

730

MaxIdleDaysForAccessKeys

integer

The maximum idle period for the AccessKey pair of a RAM user. If an AccessKey pair remains unused for this period, it is automatically disabled the next day.

Default value: 730.

Unit: days.

730

RequestId

string

The request ID.

17494710-B4BA-4185-BBBB-C1A6ABDE1639

## Examples

Success response

`JSON` format

```
{
  "SecurityPreference": {
    "AccessKeyPreference": {
      "AllowUserToManageAccessKeys": false
    },
    "LoginProfilePreference": {
      "EnableSaveMFATicket": false,
      "LoginSessionDuration": 6,
      "LoginNetworkMasks": "10.0.0.0/8",
      "AllowUserToChangePassword": true,
      "OperationForRiskLogin": "autonomous",
      "MFAOperationForLogin": "adaptive",
      "AllowUserToLoginWithPasskey": false
    },
    "MFAPreference": {
      "AllowUserToManageMFADevices": false
    },
    "VerificationPreference": {
      "VerificationTypes": [
        "[\"sms\", \"email\"]"
      ]
    },
    "PersonalInfoPreference": {
      "AllowUserToManagePersonalDingTalk": true
    },
    "MaxIdleDays": {
      "MaxIdleDaysForUsers": 730,
      "MaxIdleDaysForAccessKeys": 730
    }
  },
  "RequestId": "17494710-B4BA-4185-BBBB-C1A6ABDE1639"
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/Ims/2019-08-15/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Ims/2019-08-15/SetSecurityPreference#workbench-doc-change-demo) for a complete list.

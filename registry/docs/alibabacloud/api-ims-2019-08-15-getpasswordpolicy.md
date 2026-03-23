Queries the password policy for Resource Access Management (RAM) users.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Ims/2019-08-15/GetPasswordPolicy)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Ims/2019-08-15/GetPasswordPolicy)

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

ram:GetPasswordPolicy

get

\*All Resource

`*`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

No parameters required.

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

BDAA8408-E67C-428B-BFF0-1B2AC05C9610

PasswordPolicy

object

Details of the password policy.

RequireNumbers

boolean

Indicates whether the password must contain numbers.

false

RequireLowercaseCharacters

boolean

Indicates whether the password must contain lowercase letters.

false

PasswordReusePrevention

integer

The password reuse prevention policy.

0

RequireSymbols

boolean

Indicates whether the password must contain special characters.

false

PasswordNotContainUserName

boolean

Indicates whether the password must not contain the user name.

false

MinimumPasswordDifferentCharacter

integer

The minimum number of different characters in the password.

0

MaxPasswordAge

integer

The password validity period.

0

HardExpire

boolean

Indicates whether logon is blocked after the password expires.

false

MinimumPasswordLength

integer

The minimum password length.

8

RequireUppercaseCharacters

boolean

Indicates whether the password must contain uppercase letters.

false

MaxLoginAttemps

integer

Maximum number of failed password attempts.

0

InitialPasswordAge

integer

The validity period of the initial password.

14

InterceptRiskPasswordOnApi

boolean

Indicates whether threat passwords are blocked when set using APIs.

Valid values:

-   true
    
-   false (default)
    

false

## Examples

Success response

`JSON` format

```
{
  "RequestId": "BDAA8408-E67C-428B-BFF0-1B2AC05C9610",
  "PasswordPolicy": {
    "RequireNumbers": false,
    "RequireLowercaseCharacters": false,
    "PasswordReusePrevention": 0,
    "RequireSymbols": false,
    "PasswordNotContainUserName": false,
    "MinimumPasswordDifferentCharacter": 0,
    "MaxPasswordAge": 0,
    "HardExpire": false,
    "MinimumPasswordLength": 8,
    "RequireUppercaseCharacters": false,
    "MaxLoginAttemps": 0,
    "InitialPasswordAge": 14,
    "InterceptRiskPasswordOnApi": false
  }
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/Ims/2019-08-15/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Ims/2019-08-15/GetPasswordPolicy#workbench-doc-change-demo) for a complete list.

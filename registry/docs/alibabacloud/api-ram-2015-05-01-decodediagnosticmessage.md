Decodes the diagnostic information in the response that contains an access denied error. The error is caused by no RAM permissions.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Ram/2015-05-01/DecodeDiagnosticMessage)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Ram/2015-05-01/DecodeDiagnosticMessage)

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

ram:DecodeDiagnosticMessage

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

EncodedDiagnosticMessage

string

No

The encoded diagnostic information in the response that contains an access denied error. The error is caused by no RAM permissions.

AQEAAAAAZBgxr0U1MjA1NTM1LUM4BBktMzE5RS1CODgxLUU1QTI0RDNFQTM1\*\*\*\*

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

D2331703-AADF-5564-BA9B-26CD51A33BA0

DecodedDiagnosticMessage

object

The decoded diagnostic information.

ExplicitDeny

boolean

Indicates whether the access denied error is caused by an explicit deny.

Valid values:

-   true
    
-   false
    

**Valid values:**

-   true :
    
-   false :
    

true

NoPermissionPolicyType

string

The type of the policy that causes the access denied error.

Valid values:

-   AssumeRolePolicy: role-specific trust policy
    
-   ControlPolicy: control policy
    
-   AccountLevelIdentityBasedPolicy: identity-based policy at the account level
    
-   ResourceGroupLevelIdentityBasedPolicy: identity-based policy at the resource group level
    
-   SessionPolicy: session policy
    

**Valid values:**

-   AssumeRolePolicy :
    
-   ControlPolicy :
    
-   AccountLevelIdentityBasedPolicy :
    
-   ResourceGroupLevelIdentityBasedPolicy :
    
-   SessionPolicy :
    

AccountLevelIdentityBasedPolicy

AuthAction

string

The operation that is used for authentication in the request.

ram:DecodeDiagnosticMessage

AuthResource

string

The resource that is used for authentication in the request.

\*

AuthPrincipal

object

The operator that is used for authentication in the request.

AuthPrincipalType

string

The identity type that is used for authentication in the request.

Valid values:

-   SubUser: RAM user
    
-   AssumedRoleUser: RAM role
    
-   Federated: SSO federated identity
    

**Valid values:**

-   SubUser :
    
-   AssumedRoleUser :
    
-   Federated :
    

SubUser

AuthPrincipalOwnerId

string

The ID of the Alibaba Cloud account to which the identity belongs.

196813200012\*\*\*\*

AuthPrincipalDisplayName

string

The identity.

-   If the operator is a RAM user, the ID of the user is displayed.
    
-   If the operator is a RAM role, the name and session name of the role are displayed. Example: RoleName:RoleSessionName.
    
-   If the operator is an SSO federated identity, the type and name of the identity provider (IdP) are displayed. Example: saml-provider/AzureAD.
    

28877424437521\*\*\*\*

AuthConditions

array<object>

The conditions that are used for authentication in the request.

object

The conditions that are used for authentication in the request.

ConditionKey

string

The key of the condition.

acs:SourceIp

ConditionValues

array

The values that correspond to the key.

string

The value that corresponds to the key.

172.16.215.218

MatchedPolicies

array<object>

The policies that are matched.

object

The policies that are matched.

Effect

string

The effect of the policy.

Valid values:

-   Deny
    
-   Allow
    

**Valid values:**

-   Deny :
    
-   Allow :
    

Deny

PolicyIdentifier

string

The identifier of the policy.

-   Control policy: the ID of the control policy
    
-   RAM policy: the name of the policy
    

MyPolicyName

PolicyType

string

The type of the policy.

Valid values:

-   Custom: custom policy
    
-   System: system policy
    

**Valid values:**

-   Custom :
    
-   System :
    

Custom

PolicyVersion

string

The version number of the policy.

**Note**

Only custom policies have version numbers.

v1

AttachedEntityType

string

The type of the entity to which the policy is attached.

Valid values:

-   RamUser: RAM user
    
-   RamRole: RAM role
    
-   ResourceDirectoryTarget: entity in a resource directory
    
-   RamGroup: RAM user group
    

**Valid values:**

-   RamUser :
    
-   RamRole :
    
-   ResourceDirectoryTarget :
    
-   RamGroup :
    

RamUser

AttachedScope

string

The authorization scope of the policy.

Valid values:

-   Account: Alibaba Cloud account
    
-   Folder: folder in the resource directory
    
-   ResourceGroup: resource group
    

**Valid values:**

-   Account :
    
-   Folder :
    
-   ResourceGroup :
    

Account

## Examples

Success response

`JSON` format

```
{
  "RequestId": "D2331703-AADF-5564-BA9B-26CD51A33BA0",
  "DecodedDiagnosticMessage": {
    "ExplicitDeny": true,
    "NoPermissionPolicyType": "AccountLevelIdentityBasedPolicy",
    "AuthAction": "ram:DecodeDiagnosticMessage",
    "AuthResource": "*",
    "AuthPrincipal": {
      "AuthPrincipalType": "SubUser",
      "AuthPrincipalOwnerId": "196813200012****",
      "AuthPrincipalDisplayName": "28877424437521****"
    },
    "AuthConditions": [
      {
        "ConditionKey": "acs:SourceIp",
        "ConditionValues": [
          "172.16.215.218"
        ]
      }
    ],
    "MatchedPolicies": [
      {
        "Effect": "Deny",
        "PolicyIdentifier": "MyPolicyName",
        "PolicyType": "Custom",
        "PolicyVersion": "v1",
        "AttachedEntityType": "RamUser",
        "AttachedScope": "Account"
      }
    ]
  }
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

NotSupport

This method can only be invoked by customer, sub user and assumed role user.

400

EncodedMessageExpire

The EncodedDiagnosticMessage is expired.

403

NoPermission

You do not have the required permissions.

404

SearchInaccurate

The search result is inaccurate, please retry later.

404

EntityNotExist

The specific DecodedDiagnosticMessage cannot be found.

429

TooManyRequests

Too many search requests at same time, please retry later.

See [Error Codes](https://api.alibabacloud.com/document/Ram/2015-05-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Ram/2015-05-01/DecodeDiagnosticMessage#workbench-doc-change-demo) for a complete list.

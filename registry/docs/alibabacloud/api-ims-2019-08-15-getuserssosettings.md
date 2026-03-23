Queries the identity provider settings for user-based SSO.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Ims/2019-08-15/GetUserSsoSettings)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Ims/2019-08-15/GetUserSsoSettings)

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

ram:GetUserSsoSettings

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

UserSsoSettings

object

The user-based SSO settings.

AuxiliaryDomain

string

The auxiliary domain name.

example.com

MetadataDocument

string

The metadata file. The value is Base64-encoded.

PD94bWwgdmVy\*\*\*\*

SsoEnabled

boolean

Indicates whether user-based SSO is enabled.

false

SsoLoginWithDomain

boolean

Specifies whether the `<saml:NameID>` element in a SAML response must contain a domain name when a user logs on using SAML SSO. The username for SSO logon matching is specified on the identity provider (IdP) side.

-   If this parameter is set to `true`, the value of the `<saml:NameID>` element **must** be in the `username@domain` format. The `domain` can be the default domain name or a domain alias, if a domain alias is configured.
    
-   If this parameter is set to `false`, the value of the `<saml:NameID>` element \*\*must\*\* contain only the \`username\` and \*\*must not\*\* contain the \`domain\` part.
    

The default value is `true`.

true

AuthnSignAlgo

string

The signature algorithm supported by the Alibaba Cloud service provider (SP). Valid values:

-   rsa-sha256
    
-   rsa-sha1
    

rsa-sha1

RequestId

string

The request ID.

69FC3E5E-D3D9-434B-90CA-BBA8E0551A47

## Examples

Success response

`JSON` format

```
{
  "UserSsoSettings": {
    "AuxiliaryDomain": "example.com",
    "MetadataDocument": "PD94bWwgdmVy****",
    "SsoEnabled": false,
    "SsoLoginWithDomain": true,
    "AuthnSignAlgo": "rsa-sha1"
  },
  "RequestId": "69FC3E5E-D3D9-434B-90CA-BBA8E0551A47"
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/Ims/2019-08-15/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Ims/2019-08-15/GetUserSsoSettings#workbench-doc-change-demo) for a complete list.

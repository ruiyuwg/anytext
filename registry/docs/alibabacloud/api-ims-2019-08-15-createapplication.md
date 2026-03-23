Creates an application.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Ims/2019-08-15/CreateApplication)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Ims/2019-08-15/CreateApplication)

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

ram:CreateApplication

create

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

DisplayName

string

Yes

The display name of the application.

The name can be up to 24 characters in length.

myapp

AppType

string

Yes

The type of the application. Valid values:

-   WebApp: a web application that is based on browser interaction.
    
-   NativeApp: a native application that runs on an operating system, such as a desktop or mobile operating system.
    
-   ServerApp: an application that directly accesses Alibaba Cloud services without user logon. Currently, only applications that use the System for Cross-domain Identity Management (SCIM) protocol for user synchronization are supported.
    

WebApp

RedirectUris

string

No

The webhook address.

To enter multiple webhook addresses, separate them with semicolons (;).

https://www.example.com

SecretRequired

boolean

No

Specifies whether an application key is required. Valid values:

-   true
    
-   false
    

**Note**

-   For WebApp and ServerApp applications, this parameter is forcibly set to \`true\` and cannot be changed.
    

-   For NativeApp applications, you can set this parameter to \`true\` or \`false\`. If you do not set this parameter, the default value is \`false\`. Because these applications often run in untrusted environments where application keys cannot be effectively protected, do not set this parameter to \`true\` unless necessary. For more information, see [Log on to Alibaba Cloud from a native application](/help/en/ram/access-alibaba-cloud-apis-from-a-native-application).
    

true

AccessTokenValidity

integer

No

The validity period of the access token.

Valid values: 900 to 10800. Unit: seconds.

Default value: 3600.

3600

RefreshTokenValidity

integer

No

The validity period of the refresh token.

Valid values: 7200 to 31536000. Unit: seconds.

Default value:

-   For NativeApp and ServerApp applications, the default value is 2,592,000 seconds (30 days) if you leave this parameter empty.
    
-   For WebApp applications, the default value is 7,776,000 seconds (90 days) if you leave this parameter empty.
    

2592000

PredefinedScopes

string

No

The scopes of the application.

For information about the valid values and descriptions of scopes, see [OAuth scopes](/help/en/ram/overview-of-oauth-applications). You can also call the [ListPredefinedScopes](/help/en/doc-detail/187206.html) operation to obtain the scopes that are supported by different application types.

To enter multiple scopes, separate them with semicolons (;).

aliuid;profile

RequiredScopes

string

No

The required scopes.

You can specify one or more scopes in `RequiredScopes` as required. When a user grants permissions to the application, the required scopes are selected by default and cannot be deselected.

To enter multiple scopes, separate them with semicolons (;).

**Note**

If a scope that you specify in `RequiredScopes` is not within the range of `PredefinedScopes`, the required setting for that scope does not take effect.

aliuid

IsMultiTenant

boolean

No

Specifies whether the application can be installed by other Alibaba Cloud accounts. Valid values:

-   true: For NativeApp and ServerApp applications, the default value is \`true\` if you leave this parameter empty.
    
-   false: For WebApp applications, the default value is \`false\` if you leave this parameter empty.
    

false

AppName

string

No

The application name.

The name can be up to 64 characters in length and can contain letters, digits, periods (.), underscores (\_), and hyphens (-).

myapp

ProtocolVersion

string

No

The OAuth protocol version of the application. Valid values:

-   `2.0`: OAuth 2.0.
    
-   `2.1`: OAuth 2.1.
    

Default value: `2.0`.

2.0

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

6616F09B-2768-4C11-8866-A8EE4C4A583E

Application

object

The application information.

DisplayName

string

The display name of the application.

myapp

AccessTokenValidity

integer

The validity period of the access token. Unit: seconds.

3600

SecretRequired

boolean

Indicates whether an application key is required.

true

AccountId

string

The ID of the Alibaba Cloud account to which the application belongs.

177242285274\*\*\*\*

CreateDate

string

The time when the application was created.

2020-10-23T08:06:57Z

AppName

string

The application name.

myapp

RedirectUris

object

RedirectUri

array

The webhook address.

string

The webhook address.

https://www.example.com

UpdateDate

string

The time when the application was last updated.

2020-10-23T08:06:57Z

DelegatedScope

object

The information about the application scopes.

PredefinedScopes

object

PredefinedScope

array<object>

The information about the application scopes.

object

The information about the application scopes.

Description

string

The description of the scope.

Obtain the OpenID of the user. This is the default permission that you cannot remove.

Required

boolean

Indicates whether the scope is required by default when the application is installed. Valid values:

-   true: The scope is required.
    
-   false: The scope is not required.
    

The `openid` scope is required by default.

true

Name

string

The name of the scope.

openid

AppId

string

The application ID.

472457090344041\*\*\*\*

RefreshTokenValidity

integer

The validity period of the refresh token. Unit: seconds.

7776000

IsMultiTenant

boolean

Indicates whether the application can be installed by other Alibaba Cloud accounts.

true

AppType

string

The application type.

WebApp

ProtocolVersion

string

The OAuth protocol version of the application. Valid values:

-   `2.0`: OAuth 2.0.
    
-   `2.1`: OAuth 2.1.
    

2.0

## Examples

Success response

`JSON` format

```
{
  "RequestId": "6616F09B-2768-4C11-8866-A8EE4C4A583E",
  "Application": {
    "DisplayName": "myapp",
    "AccessTokenValidity": 3600,
    "SecretRequired": true,
    "AccountId": "177242285274****",
    "CreateDate": "2020-10-23T08:06:57Z",
    "AppName": "myapp",
    "RedirectUris": {
      "RedirectUri": [
        "https://www.example.com"
      ]
    },
    "UpdateDate": "2020-10-23T08:06:57Z",
    "DelegatedScope": {
      "PredefinedScopes": {
        "PredefinedScope": [
          {
            "Description": "Obtain the OpenID of the user. This is the default permission that you cannot remove.",
            "Required": true,
            "Name": "openid"
          }
        ]
      }
    },
    "AppId": "472457090344041****",
    "RefreshTokenValidity": 7776000,
    "IsMultiTenant": true,
    "AppType": "WebApp",
    "ProtocolVersion": "2.0"
  }
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/Ims/2019-08-15/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Ims/2019-08-15/CreateApplication#workbench-doc-change-demo) for a complete list.

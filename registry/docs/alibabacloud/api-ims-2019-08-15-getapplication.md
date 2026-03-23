Queries the configuration information of a specified application.

## Operation description

This topic provides an example of how to query the configuration information of the application `472457090344041****`.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Ims/2019-08-15/GetApplication)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Ims/2019-08-15/GetApplication)

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

ram:GetApplication

get

\*Application

`acs:ram::{#accountId}:application/{#AppName}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

AppId

string

Yes

The application ID.

472457090344041\*\*\*\*

For more information about common request parameters, see [Common parameters](/help/en/ram/common-parameters-2).

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The returned data.

RequestId

string

The request ID.

6616F09B-2768-4C11-8866-A8EE4C4A583E

Application

object

The information about the application.

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

The permission scopes of the application.

PredefinedScopes

object

PredefinedScope

array<object>

The permission scopes of the application.

object

The permission scopes of the application.

Description

string

The description of the scope.

Obtain the OpenID of the user. This is the default permission that you cannot remove.

Name

string

The name of the scope.

openid

Required

boolean

Indicates whether this permission scope is required by default when the application is installed. Valid values:

-   true: The permission scope is required.
    
-   false: The permission scope is not required.
    

The `openid` scope is required by default.

true

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

The application type. Valid values:

-   WebApp: a web application that is based on browser interaction.
    
-   NativeApp: a native application that runs on an operating system, such as a desktop or mobile operating system.
    
-   ServerApp: an application that can directly access Alibaba Cloud services without user logon. Currently, only applications that use the System for Cross-domain Identity Management (SCIM) for user synchronization are supported.
    

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
            "Name": "openid",
            "Required": true
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

See [Release Notes](https://api.alibabacloud.com/document/Ims/2019-08-15/GetApplication#workbench-doc-change-demo) for a complete list.

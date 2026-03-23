Retrieves information about a specified SAML provider for role-based SSO.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Ims/2019-08-15/GetSAMLProvider)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Ims/2019-08-15/GetSAMLProvider)

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

ram:GetSAMLProvider

get

\*SAMLProvider

`acs:ram::{#accountId}:saml-provider/{#SAMLProviderName}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

SAMLProviderName

string

Yes

The name of the SAML provider.

test-provider

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

BAADB995-0C7A-476D-B293-7E94568EEDFB

SAMLProvider

object

The information about the SAML provider.

Description

string

The description.

This is a provider.

UpdateDate

string

The time when the SAML provider was last updated.

2020-10-22T02:51:20Z

SAMLProviderName

string

The name of the SAML provider.

test-provider

CreateDate

string

The time when the SAML provider was created.

2020-10-22T02:37:05Z

EncodedSAMLMetadataDocument

string

The Base64-encoded metadata file.

PD94bWwgdmVy\*\*\*\*

Arn

string

The Alibaba Cloud Resource Name (ARN) of the SAML provider.

acs:ram::177242285274\*\*\*\*:saml-provider/test-provider

AuthnSignAlgo

string

The signature algorithm supported by the Alibaba Cloud service provider (SP). Valid values:

-   rsa-sha256
    
-   rsa-sha1
    

rsa-sha1

## Examples

Success response

`JSON` format

```
{
  "RequestId": "BAADB995-0C7A-476D-B293-7E94568EEDFB",
  "SAMLProvider": {
    "Description": "This is a provider.",
    "UpdateDate": "2020-10-22T02:51:20Z",
    "SAMLProviderName": "test-provider",
    "CreateDate": "2020-10-22T02:37:05Z",
    "EncodedSAMLMetadataDocument": "PD94bWwgdmVy****",
    "Arn": "acs:ram::177242285274****:saml-provider/test-provider",
    "AuthnSignAlgo": "rsa-sha1"
  }
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/Ims/2019-08-15/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Ims/2019-08-15/GetSAMLProvider#workbench-doc-change-demo) for a complete list.

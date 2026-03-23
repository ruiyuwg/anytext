DATASOURCE::FC::CustomDomains is used to query custom domain names in Function Compute.

## Syntax

```
{
  "Type": "DATASOURCE::FC::CustomDomains",
  "Properties": {
    "Prefix": String,
    "RefreshOptions": String
  }
}
```

## Properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Prefix

String

No

Yes

The prefix of the custom domain names to be returned.

The names must start with the value of Prefix. For example, if you set Prefix to a, the custom domain names that start with a are returned.

RefreshOptions

String

No

Yes

The refresh policy for data source resources when the stack is updated.

Valid values:

-   Never (default): does not refresh data source resources when the stack is updated.
    
-   Always: refreshes data source resources when the stack is updated.
    

## Return values (Fn::GetAtt)

-   CustomDomains: details of the custom domain names.
    
-   DomainNames: the custom domain names.
    

**Property**

**Type**

**Description**

**Constraint**

DomainNames

List

The custom domain names.

None.

CustomDomains

List

Details of the custom domain names.

None.

DomainName

String

The custom domain name.

None.

AccountId

String

The account ID.

None.

Protocol

String

The protocol type that is supported by the custom domain name.

Valid values:

-   HTTP: Only HTTP is supported.
    
-   HTTP/HTTPS: HTTP and HTTPS are supported.
    

ApiVersion

String

The API version.

None.

CreatedTime

String

The time when the custom domain name was created.

None.

LastModifiedTime

String

The most recent time when the custom domain name was modified.

None.

CertConfig

Map

The configurations of the HTTPS certificate.

Example: `{ "CertName": "/login/", "Certificate": "-----BEGIN CERTIFICATE----- xxxxx -----END CERTIFICATE-----", "PrivateKey": "-----BEGIN RSA PRIVATE KEY----- xxxxx -----END RSA PRIVATE KEY-----"}`.

RouteConfig

Map

The configurations of the mapping between the path and the function when the function is invoked by using the custom domain name.

Example: `{ "Routes": [ { "FunctionName": "function_name", "Methods": [ "GET" ], "Path": "/login/*", "Qualifier": "test", "ServiceName": "service_name" } ]}`.

TlsConfig

Map

The configurations of Transport Layer Security (TLS).

None.

## Examples

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "Prefix": {
      "Type": "String",
      "Description": "Qualified returned custom domain names must be prefixed with Prefix. For example, if the Prefix is \"a\", the returned custom domain names should be started with \"a\"."
    }
  },
  "Resources": {
    "CustomDomains": {
      "Type": "DATASOURCE::FC::CustomDomains",
      "Properties": {
        "Prefix": {
          "Ref": "Prefix"
        }
      }
    }
  },
  "Outputs": {
    "CustomDomains": {
      "Description": "The list of custom_domain.",
      "Value": {
        "Fn::GetAtt": [
          "CustomDomains",
          "CustomDomains"
        ]
      }
    },
    "DomainNames": {
      "Description": "The list of custom_domain names.",
      "Value": {
        "Fn::GetAtt": [
          "CustomDomains",
          "DomainNames"
        ]
      }
    }
  }
}
```

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  Prefix:
    Type: String
    Description: Qualified returned custom domain names must be prefixed with Prefix. For example, if the Prefix is "a", the returned custom domain names should be started with "a".
Resources:
  CustomDomains:
    Type: DATASOURCE::FC::CustomDomains
    Properties:
      Prefix:
        Ref: Prefix
Outputs:
  CustomDomains:
    Description: The list of custom_domain.
    Value:
      Fn::GetAtt:
        - CustomDomains
        - CustomDomains
  DomainNames:
    Description: The list of custom_domain names.
    Value:
      Fn::GetAtt:
        - CustomDomains
        - DomainNames
                    
```

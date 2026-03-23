ALIYUN::FC::CustomDomain is used to create a custom domain name.

## Syntax

```
{
  "Type": "ALIYUN::FC::CustomDomain",
  "Properties": {
    "ApiVersion": String,
    "Protocol": String,
    "RouteConfig": Map,
    "CertConfig": Map,
    "DomainName": String
  }
}
```

## Properties

Property

Type

Required

Editable

Description

Constraint

ApiVersion

String

No

Yes

The version of the API.

None

Protocol

String

Yes

Yes

The protocol type.

Valid values:

-   HTTP
-   HTTPS

RouteConfig

Map

No

Yes

The configuration of the route table.

For more information, see [RouteConfig properties](#section-22v-dyx-x8m).

CertConfig

Map

No

Yes

The certificate information.

For more information, see [CertConfig properties](#section-b4z-hlt-lsk).

DomainName

String

Yes

No

The domain name.

None

## RouteConfig syntax

```
"RouteConfig": {
  "Routes": List
}
```

## RouteConfig properties

Property

Type

Required

Editable

Description

Constraint

Routes

List

Yes

Yes

The list of routes.

For more information, see [Routes properties](#section-9yp-mbo-s9a).

## Routes syntax

```
"Routes": [
  {
    "Path": String,
    "FunctionName": String,
    "ServiceName": String,
    "Qualifier": String
  }
]  
```

## Routes properties

Property

Type

Required

Editable

Description

Constraint

Path

String

Yes

Yes

The request path of the custom domain name. Example: `/login/*`.

None

Qualifier

String

No

No

The alias of the request path.

None

FunctionName

String

Yes

Yes

The function corresponding to the request path.

None

ServiceName

String

Yes

Yes

The service to which the function belongs.

None

## CertConfig syntax

```
"CertConfig": {
  "CertName": String,
  "PrivateKey": String,
  "Certificate": String
}
```

## CertConfig properties

Property

Type

Required

Editable

Description

Constraint

CertName

String

Yes

Yes

The custom name of the certificate.

None

PrivateKey

String

Yes

Yes

The private key.

Specify this parameter in one line by using line breaks (`\n`).

Certificate

String

Yes

Yes

The content of the certificate.

Specify this parameter in one line by using line breaks (`\n`).

## Response parameters

Fn::GetAtt

-   DomainName: the domain name.
-   Domain: the protocol and the domain name.

## Examples

-   `YAML`format
    
    ```
    ROSTemplateFormatVersion: '2015-09-01'
    Parameters: {}
    Resources:
      CustomDomain:
        Type: ALIYUN::FC::CustomDomain
        Properties:
          Protocol: HTTP
          DomainName: TestDomain
    Outputs:
      DomainName:
        Description: The domain name
        Value:
          Fn::GetAtt:
            - CustomDomain
            - DomainName
      Domain:
        Description: The domain with protocol.
        Value:
          Fn::GetAtt:
            - CustomDomain
            - Domain
    ```
    
-   `JSON`format
    
    ```
    {
      "ROSTemplateFormatVersion": "2015-09-01",
      "Parameters": {
      },
      "Resources": {
        "CustomDomain": {
          "Type": "ALIYUN::FC::CustomDomain",
          "Properties": {
            "Protocol": "HTTP",
            "DomainName": "TestDomain"
          }
        }
      },
      "Outputs": {
        "DomainName": {
          "Description": "The domain name",
          "Value": {
            "Fn::GetAtt": [
              "CustomDomain",
              "DomainName"
            ]
          }
        },
        "Domain": {
          "Description": "The domain with protocol.",
          "Value": {
            "Fn::GetAtt": [
              "CustomDomain",
              "Domain"
            ]
          }
        }
      }
    }
    ```

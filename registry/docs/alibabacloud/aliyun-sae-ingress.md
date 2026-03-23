ALIYUN::SAE::Ingress is used to create a routing rule.

## Syntax

```
{
  "Type": "ALIYUN::SAE::Ingress",
  "Properties": {
    "DefaultRule": Map,
    "Description": String,
    "ListenerPort": Integer,
    "NamespaceId": String,
    "Rules": List,
    "SlbId": String,
    "CertIds": List,
    "CertId": String,
    "LoadBalanceType": String,
    "ListenerProtocol": String
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

DefaultRule

Map

Yes

Yes

The default forwarding rule.

You can specify a port and an application in the default forwarding rule to forward traffic based on the IP address of the application.

For more information, see the "DefaultRule properties" section of this topic.

**Note**

All requests that do not match the forwarding rules specified by the Rules property are forwarded to the application.

Description

String

Yes

Yes

The name of the routing rule.

None.

ListenerPort

Integer

Yes

Yes

The listener port of the Sever Load Balancer (SLB) instance.

You must specify a vacant port.

NamespaceId

String

Yes

No

The ID of the namespace to which the application belongs.

Applications that belong to multiple namespaces are not supported.

Rules

List

Yes

Yes

The custom forwarding rules.

You can specify a port and an application in a custom forwarding rule to forward traffic based on the specified domain name and request path.

For more information, see the "Rules properties" section of this topic.

SlbId

String

Yes

No

The SLB instance that is used by the routing rule.

None.

CertIds

List

No

Yes

The IDs of the certificates that are associated with the Application Load Balancer (**ALB**) instance.

The valid values are subject to the following limits:

-   If you set **LoadBalanceType** to **alb**, you can use CertIds to configure multiple certificates for the HTTPS listener. Separate multiple certificate IDs with commas (,).
    
-   You can obtain the ID of the SSL certificate that is used by an ALB instance from Certificate Management Service. For example, if you specify `756***-cn-hangzhou`. `756***` is the certificate ID that is obtained from the service page. `-cn-hangzhou` is the fixed suffix. For more information, see [Manage certificates](/help/en/slb/application-load-balancer/user-guide/manage-certificates).
    

CertId

String

No

Yes

The ID of the certificate that is associated with the Classic Load Balancer (**CLB**) instance.

The valid values are subject to the following limits:

-   If you set **LoadBalanceType** to **clb**, you can use CertId to configure a certificate for the HTTPS listener.
    

For more information about how to use the ID of an SSL certificate for a CLB instance, see [Overview](/help/en/slb/classic-load-balancer/user-guide/create-certificate).

LoadBalanceType

String

No

No

The type of the SLB instance.

You can specify the type when you create the routing rule. You cannot change the type when you update the routing rule. Valid values:

-   **clb**: CLB (formerly SLB) instance
    
-   **alb**: ALB instance
    

ListenerProtocol

String

No

Yes

The protocol that is used to forward requests.

Valid values:

-   **HTTP**: HTTP is suitable for applications that need to identify the transmitted data.
    
-   **HTTPS**: HTTPS is suitable for applications that require encrypted data transmission.
    

## DefaultRule syntax

```
"DefaultRule": {
  "BackendProtocol": String,
  "AppId": String,
  "ContainerPort": Integer
}
```

## DefaultRule properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

AppId

String

Yes

Yes

The application ID.

None.

ContainerPort

Integer

Yes

Yes

The container port.

Valid values:

0 to 65535.

BackendProtocol

String

No

Yes

The protocol that is used by the backend service.

Valid values:

-   http
    
-   https
    
-   grpc
    

## Rules syntax

```
"Rules": [
  {
    "Path": String,
    "BackendProtocol": String,
    "AppId": String,
    "RewritePath": String,
    "ContainerPort": Integer,
    "Domain": String
  }
]
```

## Rules properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

AppId

String

Yes

Yes

The application ID.

None.

ContainerPort

Integer

Yes

Yes

The container port.

Valid values:

0 to 65535.

Domain

String

Yes

Yes

The domain name.

None.

Path

String

Yes

Yes

The request path.

None.

BackendProtocol

String

No

Yes

The protocol that is used by the backend service.

Valid values:

-   http
    
-   https
    
-   grpc
    

RewritePath

String

No

No

The rewrite path.

None.

## Return values

Fn::GetAtt

IngressId: the ID of the routing rule.

## Examples

-   `YAML` format
    
    ```
    ROSTemplateFormatVersion: '2015-09-01'
    Parameters:
      DefaultRule:
        AssociationPropertyMetadata:
          Parameters:
            BackendProtocol:
              Type: String
              Description:
                en: The protocol of the application.
              AllowedValues:
                - http
                - https
                - grpc
              Required: false
            AppId:
              Type: String
              Description:
                en: The application ID
              Required: true
            ContainerPort:
              Type: Number
              Description:
                en: The container port of the application.
              Required: true
              MinValue: 0
              MaxValue: 65535
        Type: Json
        Description:
          en: 'The default forwarding rule. You can specify a port and an application in the default forwarding rule to forward traffic based on the IP address of the application. '
        Required: true
      SlbId:
        Type: String
        AssociationProperty: ALIYUN::SLB::LoadBalancer::LoadBalancerId
        Description:
          en: The Server Load Balancer (SLB) instance that is used by the routing rule.
        Required: true
      ListenerPort:
        Type: Number
        Description:
          en: The listener port of the SLB instance. You must specify a vacant port.
        Required: true
        MinValue: 0
        MaxValue: 65535
      Description:
        AssociationProperty: TextArea
        Type: String
        Description:
          en: The name of the routing rule.
        AllowedPattern: ^[a-z0-9]([a-z0-9.-]{0,61}[a-z0-9])?$
        Required: true
      NamespaceId:
        Type: String
        Description:
          en: The ID of the namespace to which the application belongs. You can specify only one namespace ID each time you call this operation.
        Required: true
      Rules:
        AssociationPropertyMetadata:
          Parameters:
            Path:
              Type: String
              Description:
                en: The request path.
              Required: true
            BackendProtocol:
              Type: String
              Description:
                en: The protocol of the application.
              AllowedValues:
                - http
                - https
                - grpc
              Required: false
            AppId:
              Type: String
              Description:
                en: The application ID
              Required: true
            RewritePath:
              Type: String
              Description:
                en: The rewrite path.
              Required: false
            ContainerPort:
              Type: Number
              Description:
                en: The container port of the application.
              Required: true
              MinValue: 0
              MaxValue: 65535
            Domain:
              Type: String
              Description:
                en: The domain name.
              Required: true
        AssociationProperty: List[Parameters]
        Type: Json
        Description:
          en: The forwarding rules. You can specify a port and an application in a forwarding rule to forward traffic based on the specified domain name and request path.
        Required: true
        MinLength: 1
        MaxLength: 10
    Resources:
      Ingress:
        Type: ALIYUN::SAE::Ingress
        Properties:
          DefaultRule:
            Ref: DefaultRule
          SlbId:
            Ref: SlbId
          ListenerPort:
            Ref: ListenerPort
          Description:
            Ref: Description
          NamespaceId:
            Ref: NamespaceId
          Rules:
            Ref: Rules
    Outputs:
      IngressId:
        Description: The ID of the routing rule.
        Value:
          Fn::GetAtt:
            - Ingress
            - IngressId
    ```
    
-   `JSON` format
    
    ```
    {
      "ROSTemplateFormatVersion": "2015-09-01",
      "Parameters": {
        "DefaultRule": {
          "AssociationPropertyMetadata": {
            "Parameters": {
              "BackendProtocol": {
                "Type": "String",
                "Description": {
                  "en": "The protocol of the application."
                },
                "AllowedValues": [
                  "http",
                  "https",
                  "grpc"
                ],
                "Required": false
              },
              "AppId": {
                "Type": "String",
                "Description": {
                  "en": "The application ID"
                },
                "Required": true
              },
              "ContainerPort": {
                "Type": "Number",
                "Description": {
                  "en": "The container port of the application."
                },
                "Required": true,
                "MinValue": 0,
                "MaxValue": 65535
              }
            }
          },
          "Type": "Json",
          "Description": {
            "en": "The default forwarding rule. You can specify a port and an application in the default forwarding rule to forward traffic based on the IP address of the application. "
          },
          "Required": true
        },
        "SlbId": {
          "Type": "String",
          "AssociationProperty": "ALIYUN::SLB::LoadBalancer::LoadBalancerId",
          "Description": {
            "en": "The Server Load Balancer (SLB) instance that is used by the routing rule."
          },
          "Required": true
        },
        "ListenerPort": {
          "Type": "Number",
          "Description": {
            "en": "The listener port of the SLB instance. You must specify a vacant port."
          },
          "Required": true,
          "MinValue": 0,
          "MaxValue": 65535
        },
        "Description": {
          "AssociationProperty": "TextArea",
          "Type": "String",
          "Description": {
            "en": "The name of the routing rule."
          },
          "AllowedPattern": "^[a-z0-9]([a-z0-9.-]{0,61}[a-z0-9])?$",
          "Required": true
        },
        "NamespaceId": {
          "Type": "String",
          "Description": {
            "en": "The ID of the namespace to which the application belongs. You can specify only one namespace ID each time you call this operation."
          },
          "Required": true
        },
        "Rules": {
          "AssociationPropertyMetadata": {
            "Parameters": {
              "Path": {
                "Type": "String",
                "Description": {
                  "en": "The request path."
                },
                "Required": true
              },
              "BackendProtocol": {
                "Type": "String",
                "Description": {
                  "en": "The protocol of the application."
                },
                "AllowedValues": [
                  "http",
                  "https",
                  "grpc"
                ],
                "Required": false
              },
              "AppId": {
                "Type": "String",
                "Description": {
                  "en": "The application ID"
                },
                "Required": true
              },
              "RewritePath": {
                "Type": "String",
                "Description": {
                  "en": "The rewrite path."
                },
                "Required": false
              },
              "ContainerPort": {
                "Type": "Number",
                "Description": {
                  "en": "The container port of the application."
                },
                "Required": true,
                "MinValue": 0,
                "MaxValue": 65535
              },
              "Domain": {
                "Type": "String",
                "Description": {
                  "en": "The domain name."
                },
                "Required": true
              }
            }
          },
          "AssociationProperty": "List[Parameters]",
          "Type": "Json",
          "Description": {
            "en": "The forwarding rules. You can specify a port and an application in a forwarding rule to forward traffic based on the specified domain name and request path."
          },
          "Required": true,
          "MinLength": 1,
          "MaxLength": 10
        }
      },
      "Resources": {
        "Ingress": {
          "Type": "ALIYUN::SAE::Ingress",
          "Properties": {
            "DefaultRule": {
              "Ref": "DefaultRule"
            },
            "SlbId": {
              "Ref": "SlbId"
            },
            "ListenerPort": {
              "Ref": "ListenerPort"
            },
            "Description": {
              "Ref": "Description"
            },
            "NamespaceId": {
              "Ref": "NamespaceId"
            },
            "Rules": {
              "Ref": "Rules"
            }
          }
        }
      },
      "Outputs": {
        "IngressId": {
          "Description": "The ID of the routing rule.",
          "Value": {
            "Fn::GetAtt": [
              "Ingress",
              "IngressId"
            ]
          }
        }
      }
    }
                            
    ```

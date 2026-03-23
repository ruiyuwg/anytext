DATASOURCE::SLB::DomainExtension is used to query the information about an added additional domain.

## Syntax

```
{
  "Type": "DATASOURCE::SLB::DomainExtension",
  "Properties": {
    "DomainExtensionId": String,
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

DomainExtensionId

String

Yes

Yes

The ID of the additional domain.

None.

RefreshOptions

String

No

Yes

The refresh policy for data source resources when the stack is updated.

Valid values:

-   Never (default): does not refresh data source resources when the stack is updated.
    
-   Always: refreshes data source resources when the stack is updated.
    

## Return values

Fn::GetAtt

-   DomainExtensionId: the ID of the additional domain.
    
-   ListenerPort: the frontend port of the HTTPS listener for the Server Load Balancer (SLB) instance.
    
-   ServerCertificateId: the ID of the server certificate used by the domain.
    
-   LoadBalancerId: the ID of the SLB instance.
    
-   Domain: the domain.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  DomainExtensionId:
    Type: String
    Description:
      en: The ID of the additional certificate.
    Required: true
Resources:
  ExtensionDataSource:
    Type: DATASOURCE::SLB::DomainExtension
    Properties:
      DomainExtensionId:
        Ref: DomainExtensionId
Outputs:
  DomainExtensionId:
    Description: The ID of the additional certificate.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - DomainExtensionId
  ListenerPort:
    Description: 'The frontend port of the HTTPS listener that is configured for the SLB instance. Valid values: 1 to 65535.'
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ListenerPort
  ServerCertificateId:
    Description: The ID of the server certificate that is used by the domain name.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ServerCertificateId
  LoadBalancerId:
    Description: The ID of the SLB instance.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - LoadBalancerId
  Domain:
    Description: The domain name.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Domain
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "DomainExtensionId": {
      "Type": "String",
      "Description": {
        "en": "The ID of the additional certificate."
      },
      "Required": true
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::SLB::DomainExtension",
      "Properties": {
        "DomainExtensionId": {
          "Ref": "DomainExtensionId"
        }
      }
    }
  },
  "Outputs": {
    "DomainExtensionId": {
      "Description": "The ID of the additional certificate.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "DomainExtensionId"
        ]
      }
    },
    "ListenerPort": {
      "Description": "The frontend port of the HTTPS listener that is configured for the SLB instance. Valid values: 1 to 65535.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ListenerPort"
        ]
      }
    },
    "ServerCertificateId": {
      "Description": "The ID of the server certificate that is used by the domain name.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ServerCertificateId"
        ]
      }
    },
    "LoadBalancerId": {
      "Description": "The ID of the SLB instance.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "LoadBalancerId"
        ]
      }
    },
    "Domain": {
      "Description": "The domain name.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Domain"
        ]
      }
    }
  }
}
                        
```

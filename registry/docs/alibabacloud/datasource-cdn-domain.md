DATASOURCE::CDN::Domain is used to query the information about an accelerated domain name.

## Syntax

```
{
  "Type": "DATASOURCE::CDN::Domain",
  "Properties": {
    "DomainName": String,
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

DomainName

String

Yes

Yes

The accelerated domain name.

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

-   ResourceGroupId: the ID of the resource group.
    
-   Scope: the acceleration region.
    
-   DomainName: the accelerated domain name.
    
-   CertificateConfig: the certificate configurations.
    
-   CdnType: the workload type of the accelerated domain name.
    
-   Sources: the origin server.
    
-   Cname: the canonical name (CNAME).
    
-   Tags: the tags that are added to the domain name.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  DomainName:
    Type: String
    Description:
      en: The accelerated domain name.
    Required: true
Resources:
  ExtensionDataSource:
    Type: DATASOURCE::CDN::Domain
    Properties:
      DomainName:
        Ref: DomainName
Outputs:
  ResourceGroupId:
    Description: The ID of the resource group.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ResourceGroupId
  Scope:
    Description: The acceleration region.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Scope
  DomainName:
    Description: The accelerated domain name.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - DomainName
  CertificateConfig:
    Description: Certificate configuration.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - CertificateConfig
  CdnType:
    Description: The workload type of the accelerated domain name.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - CdnType
  Sources:
    Description: The information about the origin server.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Sources
  Cname:
    Description: The CNAME that is assigned to the accelerated domain name.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Cname
  Tags:
    Description: The tags of the resource.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Tags
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "DomainName": {
      "Type": "String",
      "Description": {
        "en": "The accelerated domain name."
      },
      "Required": true
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::CDN::Domain",
      "Properties": {
        "DomainName": {
          "Ref": "DomainName"
        }
      }
    }
  },
  "Outputs": {
    "ResourceGroupId": {
      "Description": "The ID of the resource group.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ResourceGroupId"
        ]
      }
    },
    "Scope": {
      "Description": "The acceleration region.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Scope"
        ]
      }
    },
    "DomainName": {
      "Description": "The accelerated domain name.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "DomainName"
        ]
      }
    },
    "CertificateConfig": {
      "Description": "Certificate configuration.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "CertificateConfig"
        ]
      }
    },
    "CdnType": {
      "Description": "The workload type of the accelerated domain name.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "CdnType"
        ]
      }
    },
    "Sources": {
      "Description": "The information about the origin server.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Sources"
        ]
      }
    },
    "Cname": {
      "Description": "The CNAME that is assigned to the accelerated domain name.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Cname"
        ]
      }
    },
    "Tags": {
      "Description": "The tags of the resource.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Tags"
        ]
      }
    }
  }
}
                        
```

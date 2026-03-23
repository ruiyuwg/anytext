DATASOURCE::CDN::Domains is used to query the basic information about created accelerated domain names.

## Syntax

```
{
  "Type": "DATASOURCE::CDN::Domains",
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

The accelerated domain name in Alibaba Cloud CDN (CDN).

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

-   **Domains**: details of the accelerated domain names.
    
-   **DomainNames**: the accelerated domain names.
    

**Property**

**Type**

**Description**

**Constraint**

DomainNames

List

The accelerated domain names.

None.

Domains

List

Details of the accelerated domain names.

None.

Status

String

The status of the accelerated domain name.

None.

CdnType

String

The workload type of the accelerated domain name.

None.

CertificateConfig

List

The configurations of the accelerated domain name.

None.

Sources

List

The information about the origin servers.

None.

DomainName

String

The accelerated domain name.

None.

ResourceGroupId

String

The ID of the resource group.

None.

Cname

String

The canonical name (CNAME) that is assigned to the accelerated domain name.

You must add the CNAME record in the system of your Domain Name System (DNS) service provider to map the accelerated domain name to the CNAME.

Scope

String

The acceleration region.

None.

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  DomainName:
    Description: The accelerated domain name. You can specify only one domain name.
    Type: String
Resources:
  ExtensionDataSource:
    Properties:
      DomainName:
        Ref: DomainName
    Type: DATASOURCE::CDN::Domains
Outputs:
  DomainNames:
    Description: The list of domain names.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - DomainNames
  Domains:
    Description: The list of domains.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - Domains                       
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "DomainName": {
      "Type": "String",
      "Description": "The accelerated domain name. You can specify only one domain name."
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::CDN::Domains",
      "Properties": {
        "DomainName": {
          "Ref": "DomainName"
        }
      }
    }
  },
  "Outputs": {
    "Domains": {
      "Description": "The list of domains.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Domains"
        ]
      }
    },
    "DomainNames": {
      "Description": "The list of domain names.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "DomainNames"
        ]
      }
    }
  }
}
```

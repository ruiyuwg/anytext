DATASOURCE::SLB::DomainExtensions is used to query the additional domains that are added.

## Syntax

```
{
  "Type": "DATASOURCE::SLB::DomainExtensions",
  "Properties": {
    "ListenerPort": Integer,
    "DomainExtensionId": String,
    "LoadBalancerId": String,
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

ListenerPort

Integer

Yes

Yes

The frontend port used by the HTTPS listener of the Server Load Balancer (SLB) instance.

Valid values: 1 to 65535.

DomainExtensionId

String

No

Yes

The ID of the additional domain.

None.

LoadBalancerId

String

Yes

Yes

The ID of the SLB instance.

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

-   DomainExtensions: details of the additional domains.
    
-   DomainExtensionIds: the IDs of the additional domains.
    

**Property**

**Type**

**Description**

**Constraint**

DomainExtensionIds

List

The IDs of the additional domains.

None.

DomainExtensions

List

Details of the additional domains.

None.

Domain

String

The additional domain.

None.

DomainExtensionId

String

The ID of the additional domain.

None.

ServerCertificateId

String

The ID of the certificate that is used by the additional domain.

None.

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  LoadBalancerId:
    Type: String
    AssociationProperty: ALIYUN::SLB::Instance::InstanceId
    Description: The ID of the CLB instance.
Resources:
  ExtensionDataSource:
    Type: DATASOURCE::SLB::DomainExtensions
    Properties:
      ListenerPort: 3566
      LoadBalancerId:
        Ref: LoadBalancerId
Outputs:
  DomainExtensions:
    Description: The list of domain extensions.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - DomainExtensions
  DomainExtensionIds:
    Description: The list of domain extension IDs.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - DomainExtensionIds
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "LoadBalancerId": {
      "Type": "String",
      "AssociationProperty":"ALIYUN::SLB::Instance::InstanceId",
      "Description": "The ID of the CLB instance."
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::SLB::DomainExtensions",
      "Properties": {
        "ListenerPort": 3566,
        "LoadBalancerId": {
          "Ref": "LoadBalancerId"
        }
      }
    }
  },
  "Outputs": {
    "DomainExtensions": {
      "Description": "The list of domain extensions.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "DomainExtensions"
        ]
      }
    },
    "DomainExtensionIds": {
      "Description": "The list of domain extension IDs.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "DomainExtensionIds"
        ]
      }
    }
  }
}
```

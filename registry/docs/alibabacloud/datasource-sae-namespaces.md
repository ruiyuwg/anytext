DATASOURCE::SAE::Namespaces is used to query namespaces.

## Syntax

```
{
  "Type": "DATASOURCE::SAE::Namespaces",
  "Properties": {
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

RefreshOptions

String

No

Yes

The refresh policy for data source resources when the stack is updated.

Valid values:

-   Never (default): does not refresh data source resources when the stack is updated.
    
-   Always: refreshes data source resources when the stack is updated.
    

## Return values (Fn::GetAtt)

-   Namespaces: details of the namespaces.
    
-   NamespaceIds: the IDs of the namespaces.
    

**Property**

**Type**

**Description**

**Constraint**

NamespaceIds

List

The IDs of the namespaces.

None.

Namespaces

List

Details of the namespaces.

None.

NamespaceId

String

The namespace ID.

None.

NamespaceName

String

The namespace name.

None.

NamespaceDescription

String

The namespace description.

None.

TenantId

String

The tenant ID.

None.

AddressServerHost

String

The IP address of the host.

None.

RegionId

String

The region ID.

None.

## Examples

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Resources": {
    "Namespaces": {
      "Type": "DATASOURCE::SAE::Namespaces",
      "Properties": {}
    }
  },
  "Outputs": {
    "Namespaces": {
      "Description": "The list of namespaces.",
      "Value": {
        "Fn::GetAtt": [
          "Namespaces",
          "Namespaces"
        ]
      }
    },
    "NamespaceIds": {
      "Description": "The list of namespace names.",
      "Value": {
        "Fn::GetAtt": [
          "Namespaces",
          "NamespaceIds"
        ]
      }
    }
  }
}
```

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Resources:
  Namespaces:
    Type: DATASOURCE::SAE::Namespaces
    Properties: {}
Outputs:
  Namespaces:
    Description: The list of namespaces.
    Value:
      Fn::GetAtt:
        - Namespaces
        - Namespaces
  NamespaceIds:
    Description: The list of namespace names.
    Value:
      Fn::GetAtt:
        - Namespaces
        - NamespaceIds
                    
```

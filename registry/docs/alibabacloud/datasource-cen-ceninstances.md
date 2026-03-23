DATASOURCE::CEN::CenInstances is used to query the information about Cloud Enterprise Network (CEN) instances within the current Alibaba Cloud account.

## Syntax

```
{
  "Type": "DATASOURCE::CEN::CenInstances",
  "Properties": {
    "Filter": List,
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

Filter

List

No

Yes

The filters.

For more information, see [Filter properties](#section-val-baq-p8i).

RefreshOptions

String

No

Yes

The refresh policy for data source resources when the stack is updated.

Valid values:

-   Never (default): does not refresh data source resources when the stack is updated.
    
-   Always: refreshes data source resources when the stack is updated.
    

## Filter syntax

```
"Filter": [
  {
    "Value": List,
    "Key": String
  }
]
```

## Filter properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Value

List

No

No

The value of the filter.

You can specify filter values based on filter keys. You can specify multiple filter values for a filter key. The logical operator among filter values is OR. If one of the filter values is matched, the filter is matched.

**Note**

You can specify up to five filter values for a filter.

Key

String

Yes

No

The key of the filter.

Valid values:

-   CenId: the ID of the CEN instance
    
-   Name: the name of the CEN instance
    

## Return values (Fn::GetAtt)

-   Cens: details of the CEN instances.
    
-   CenIds: the IDs of the CEN instances.
    

**Property**

**Type**

**Description**

**Constraint**

CenIds

List

The IDs of the CEN instances.

None.

Cens

List

Details of the CEN instances.

None.

Status

String

The status of the CEN instance.

Valid values:

-   Creating: The CEN instance is being created.
    
-   Active: The CEN instance is running.
    
-   Deleting: The CEN instance is being deleted.
    

CenId

String

The ID of the CEN instance.

None.

CreationTime

String

The time when the CEN instance was created.

The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mmZ format.

Ipv6Level

String

Indicates whether IPv6 is enabled for the CEN instance.

Valid values:

-   true
    
-   false
    

Description

String

The description of the CEN instance.

None.

ResourceGroupId

String

The ID of the resource group to which the CEN instance belongs.

None.

ProtectionLevel

String

The level of CIDR block overlapping.

None.

Name

String

The name of the CEN instance.

None.

CenBandwidthPackageIds

List

The IDs of the bandwidth plans that are associated with the CEN instance.

Example:

```
[ "cen-xxjsjfkffkfkfjkf****" ]
```

Tags

Map

The tags that are added to the CEN instance.

None.

## Examples

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "Filter": {
      "Type": "Json",
      "Description": "Filter value when querying resources"
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::CEN::CenInstances",
      "Properties": {
        "Filter": {
          "Ref": "Filter"
        }
      }
    }
  },
  "Outputs": {
    "Cens": {
      "Description": "The information about Cens.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Cens"
        ]
      }
    },
    "CenIds": {
      "Description": "The list of The Cen instance ids.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "CenIds"
        ]
      }
    }
  }
}
```

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  Filter:
    Type: Json
    Description: Filter value when querying resources
Resources:
  ExtensionDataSource:
    Type: DATASOURCE::CEN::CenInstances
    Properties:
      Filter:
        Ref: Filter
Outputs:
  Cens:
    Description: The information about Cens.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Cens
  CenIds:
    Description: The list of The Cen instance ids.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - CenIds
```

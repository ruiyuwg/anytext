This data source provides information about the zones that are available for Application Load Balancer (ALB) in a region.

## Syntax

```
{
  "Type": "DATASOURCE::ALB::Zones",
  "Properties": {
    "RefreshOptions": String
  }
}
```

## Properties

**Property**

**Type**

**Required**

**Update allowed**

**Description**

**Constraints**

RefreshOptions

String

No

Yes

The policy to refresh the data source when the stack is updated.

Valid values:

-   Never (default): The data source is never refreshed when the stack is updated.
    
-   Always: The data source is always refreshed when the stack is updated.
    

## Return values

Fn::GetAtt

-   ZoneIds: A list of zone IDs.
    
-   Zones: A list of zone details.
    

**Property**

**Type**

**Description**

**Constraints**

ZoneIds

List

The list of zone IDs.

None

Zones

List

The list of zone details.

None

ZoneId

String

The zone ID.

None

LocalName

String

The name of the zone.

None

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters: {}
Resources:
  ExtensionDataSource:
    Type: DATASOURCE::ALB::Zones
Outputs:
  ZoneIds:
    Description: The list of zone IDs.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ZoneIds
  Zones:
    Description: The list of zones.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Zones
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::ALB::Zones"
    }
  },
  "Outputs": {
    "ZoneIds": {
      "Description": "The list of zone IDs.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ZoneIds"
        ]
      }
    },
    "Zones": {
      "Description": "The list of zones.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Zones"
        ]
      }
    }
  }
}
                        
```

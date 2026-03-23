DATASOURCE::SLB::Zones is used to query the zones of Server Load Balancer (SLB) instances.

## Syntax

```
{
  "Type": "DATASOURCE::SLB::Zones",
  "Properties": {
    "AddressIPVersion": String,
    "AddressType": String,
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

AddressIPVersion

String

No

Yes

The type of the IP address.

Valid values:

-   ipv4
    
-   ipv6
    

AddressType

String

No

Yes

The network type.

Valid values:

-   vpc: virtual private cloud (VPC). This value corresponds to internal-facing SLB instances that are connected over a VPC.
    
-   classic\_internet: Internet. This value corresponds to Internet-facing SLB instances that are connected over the Internet.
    
-   classic\_intranet: classic network. This value corresponds to internal-facing SLB instances that are connected over the classic network.
    

RefreshOptions

String

No

Yes

The refresh policy for data source resources when the stack is updated.

Valid values:

-   Never (default): does not refresh data source resources when the stack is updated.
    
-   Always: refreshes data source resources when the stack is updated.
    

## Return values (Fn::GetAtt)

-   ZoneIds: the IDs of the zones.
    
-   Zones: details of the zones.
    

**Property**

**Type**

**Description**

**Constraint**

ZoneIds

List

The IDs of the zones.

None.

Zones

List

Details of the zones.

None.

ZoneId

String

The zone ID.

Example: `cn-hangzhou-b`.

SlaveZoneId

String

The ID of the secondary zone.

Example: `cn-hangzhou-g`.

SupportResources

List

The supported resources.

Example: `[ { "AddressIPVersion": "ipv4", "AddressType": "classic_internet" }, {"AddressIPVersion": "ipv4", "AddressType": "classic_intranet"}, {"AddressIPVersion": "ipv4", "AddressType": "vpc" }]`.

## Examples

`JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "AddressIPVersion": {
      "Type": "String",
      "Description": "The type of IP address.\nValid values: ipv4 and ipv6.",
      "Default": "ipv4"
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::SLB::Zones",
      "Properties": {
        "AddressIPVersion": {
          "Ref": "AddressIPVersion"
        }
      }
    }
  },
  "Outputs": {
    "ZoneIds": {
      "Description": "The list of The primary zone Ids.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ZoneIds"
        ]
      }
    },
    "Zones": {
      "Description": "The list of The Zones.",
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

The ALIYUN::GWLB::LoadBalancer type is used to create a Gateway Load Balancer (GWLB) instance.

## Syntax

```
{
  "Type": "ALIYUN::GWLB::LoadBalancer",
  "Properties": {
    "VpcId": String,
    "ZoneMappings": List,
    "AddressIpVersion": String,
    "LoadBalancerName": String,
    "ResourceGroupId": String,
    "Tags": List
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

VpcId

String

Yes

No

The ID of the virtual private cloud (VPC).

None

ZoneMappings

List

Yes

Yes

The list of zone and vSwitch mappings.

You must add at least one zone. You can add a maximum of 20 zones. If the current region supports two or more zones, add two or more zones. For more information, see [the ZoneMappings property](#9c1c52807bi5l).

AddressIpVersion

String

No

No

The protocol version.

Valid value:

-   **Ipv4** (default): IPv4.
    

LoadBalancerName

String

No

Yes

The name of the Gateway Load Balancer (GWLB) instance.

The name must be 2 to 128 characters in length. It must start with a letter or a Chinese character. It can contain digits, periods (.), underscores (\_), and hyphens (-).

ResourceGroupId

String

No

No

The ID of the resource group.

None

Tags

List

No

Yes

A list of tags that are attached to the SLB instance.

For more information, see [the Tags property](#631b802c09q4u).

## ZoneMappings syntax

```
"ZoneMappings": [
  {
    "ZoneId": String,
    "VSwitchId": String
  }
]
```

## ZoneMappings properties

**Property**

**Type**

**Required**

**Update allowed**

**Description**

**Constraints**

VSwitchId

String

Yes

Yes

The vSwitch that corresponds to the zone.

Each zone can use only one vSwitch and one subnet.

ZoneId

String

Yes

Yes

The ID of the zone.

None

## Tags syntax

```
"Tags": [
  {
    "Value": String,
    "Key": String
  }
]
```

## Tags properties

**Property**

**Type**

**Required**

**Update allowed**

**Description**

**Constraints**

Key

String

Yes

No

The tag key.

The value cannot be an empty string.

A tag key can be up to 128 characters in length. It cannot start with `aliyun` or `acs:`. It cannot contain `http://` or `https://`.

Value

String

No

No

The tag value.

The tag value can be up to 256 characters in length. It cannot contain `http://` or `https://`.

## Return values

Fn::GetAtt

-   LoadBalancerName: The name of the Gateway Load Balancer instance.
    
-   AddressIpVersion: The IP protocol version.
    
-   VpcId: The ID of the VPC.
    
-   ResourceGroupId: The ID of the resource group.
    
-   CreateTime: The time when the GWLB instance was created.
    
-   LoadBalancerId: The ID of the GWLB instance.
    
-   ZoneMappings: The list of zone and vSwitch mappings.
    
-   BusinessStatus: The service status of the IP address pool instance.
    
-   Tags: The list of tags.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  VpcId:
    AssociationProperty: ALIYUN::ECS::VPC::VPCId
    Type: String
    Description:
      en: The ID of the VPC to which the Gateway Load Balancer instance belongs.
    Required: true
  ZoneMappings:
    AssociationPropertyMetadata:
      Parameters:
        ZoneId:
          AssociationProperty: ZoneId
          Type: String
          Description:
            en: The ID of the zone to which the Gateway Load Balancer instance belongs.
          Required: true
        VSwitchId:
          AssociationPropertyMetadata:
            VpcId: ${VpcId}
            ZoneId: ${ZoneId}
          AssociationProperty: ALIYUN::VPC::VSwitch::VSwitchId
          Type: String
          Description:
            en: The ID of the vSwitch that corresponds to the zone. Each zone can use only one vSwitch and subnet.
          Required: true
    AssociationProperty: List[Parameters]
    Type: Json
    Description:
      en: The list of zone and vSwitch mappings. You must add at least one zone. You can add a maximum of 20 zones. If the current region supports two or more zones, add two or more zones.
    Required: true
    MinLength: 1
    MaxLength: 20
Resources:
  ExtensionResource:
    Type: ALIYUN::GWLB::LoadBalancer
    Properties:
      VpcId:
        Ref: VpcId
      ZoneMappings:
        Ref: ZoneMappings
Outputs:
  LoadBalancerName:
    Description: The name of the Gateway Load Balancer instance.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - LoadBalancerName
  AddressIpVersion:
    Description: The protocol version.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - AddressIpVersion
  VpcId:
    Description: The ID of the VPC to which the Gateway Load Balancer instance belongs.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - VpcId
  ResourceGroupId:
    Description: The ID of the resource group.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - ResourceGroupId
  CreateTime:
    Description: The resource creation time, in Greenwich Mean Time, in the format of **yyyy-MM-ddTHH:mm:ssZ**.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - CreateTime
  LoadBalancerId:
    Description: The ID of the Gateway Load Balancer instance.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - LoadBalancerId
  ZoneMappings:
    Description: The list of zone and vSwitch mappings. You must add at least one zone. You can add a maximum of 20 zones. If the current region supports two or more zones, add two or more zones.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - ZoneMappings
  BusinessStatus:
    Description: The business status of the Gateway Load Balancer instance.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - BusinessStatus
  Tags:
    Description: The list of tags.
    Value:
      Fn::GetAtt:
        - ExtensionResource
        - Tags
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "VpcId": {
      "AssociationProperty": "ALIYUN::ECS::VPC::VPCId",
      "Type": "String",
      "Description": {
        "en": "The ID of the VPC to which the Gateway Load Balancer instance belongs."
      },
      "Required": true
    },
    "ZoneMappings": {
      "AssociationPropertyMetadata": {
        "Parameters": {
          "ZoneId": {
            "AssociationProperty": "ZoneId",
            "Type": "String",
            "Description": {
              "en": "The ID of the zone to which the Gateway Load Balancer instance belongs."
            },
            "Required": true
          },
          "VSwitchId": {
            "AssociationPropertyMetadata": {
              "VpcId": "${VpcId}",
              "ZoneId": "${ZoneId}"
            },
            "AssociationProperty": "ALIYUN::VPC::VSwitch::VSwitchId",
            "Type": "String",
            "Description": {
              "en": "The ID of the vSwitch that corresponds to the zone. Each zone can use only one vSwitch and subnet."
            },
            "Required": true
          }
        }
      },
      "AssociationProperty": "List[Parameters]",
      "Type": "Json",
      "Description": {
        "en": "The list of zone and vSwitch mappings. You must add at least one zone. You can add a maximum of 20 zones. If the current region supports two or more zones, add two or more zones."
      },
      "Required": true,
      "MinLength": 1,
      "MaxLength": 20
    }
  },
  "Resources": {
    "ExtensionResource": {
      "Type": "ALIYUN::GWLB::LoadBalancer",
      "Properties": {
        "VpcId": {
          "Ref": "VpcId"
        },
        "ZoneMappings": {
          "Ref": "ZoneMappings"
        }
      }
    }
  },
  "Outputs": {
    "LoadBalancerName": {
      "Description": "The name of the Gateway Load Balancer instance.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "LoadBalancerName"
        ]
      }
    },
    "AddressIpVersion": {
      "Description": "The protocol version.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "AddressIpVersion"
        ]
      }
    },
    "VpcId": {
      "Description": "The ID of the VPC to which the Gateway Load Balancer instance belongs.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "VpcId"
        ]
      }
    },
    "ResourceGroupId": {
      "Description": "The ID of the resource group.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "ResourceGroupId"
        ]
      }
    },
    "CreateTime": {
      "Description": "The resource creation time, in Greenwich Mean Time, in the format of **yyyy-MM-ddTHH:mm:ssZ**.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "CreateTime"
        ]
      }
    },
    "LoadBalancerId": {
      "Description": "The ID of the Gateway Load Balancer instance.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "LoadBalancerId"
        ]
      }
    },
    "ZoneMappings": {
      "Description": "The list of zone and vSwitch mappings. You must add at least one zone. You can add a maximum of 20 zones. If the current region supports two or more zones, add two or more zones.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "ZoneMappings"
        ]
      }
    },
    "BusinessStatus": {
      "Description": "The business status of the Gateway Load Balancer instance.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "BusinessStatus"
        ]
      }
    },
    "Tags": {
      "Description": "The list of tags.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionResource",
          "Tags"
        ]
      }
    }
  }
}
                        
```

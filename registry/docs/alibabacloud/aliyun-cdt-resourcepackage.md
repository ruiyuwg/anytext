The ALIYUN::CDT::ResourcePackage type creates a resource plan.

## Syntax

```
{
  "Type": "ALIYUN::CDT::ResourcePackage",
  "Properties": {
    "Capacity": Integer,
    "Pack": String,
    "Region": String,
    "ISP": String
  }
}
```

## Properties

**Property Name**

**Type**

**Required**

**Update allowed**

**Description**

**Constraints**

Capacity

Integer

Yes

No

The capacity of the CDT resource plan.

Valid values: 50 to 102400. Unit: GB.

Pack

String

Yes

No

The package information of the CDT resource plan.

None

Region

String

Yes

No

The region of the resource plan.

Valid values:

-   chinese-mainland: the Chinese mainland
    
-   asia-pacific: Asia-Pacific
    
-   europe: Europe
    
-   north-america: North America
    
-   south-america: South America
    
-   middleeast: Middle East
    
-   finance-cloud: Finance Cloud
    

ISP

String

No

No

The ISP for the CDT resource plan.

None

## Return values

Fn::GetAtt

-   InstanceId: The ID of the CDT resource plan.
    
-   OrderId: The ID of the order.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  Capacity:
    Type: Number
    Description:
      en: The capacity of the specified CDT resource package.
    Required: true
    MinValue: 50
    MaxValue: 102400
  Region:
    Type: String
    Description:
      en: The region of the specified CDT resource package.
    AllowedValues:
      - chinese-mainland
      - asia-pacific
      - europe
      - north-america
      - south-america
      - middleeast
      - finance-cloud
    Required: true
  Pack:
    Type: String
    Description:
      en: The pack of the specified CDT resource package. It can be obtained from the `components` field in the payload of the `getPrice` network request on the CDT common buy page.
    Required: true
Resources:
  ResourcePackage:
    Type: ALIYUN::CDT::ResourcePackage
    Properties:
      Capacity:
        Ref: Capacity
      Region:
        Ref: Region
      Pack:
        Ref: Pack
Outputs:
  InstanceId:
    Description: The ID of the specified instance.
    Value:
      Fn::GetAtt:
        - ResourcePackage
        - InstanceId
  OrderId:
    Description: The ID of the specified order.
    Value:
      Fn::GetAtt:
        - ResourcePackage
        - OrderId
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "Capacity": {
      "Type": "Number",
      "Description": {
        "en": "The capacity of the specified CDT resource package."
      },
      "Required": true,
      "MinValue": 50,
      "MaxValue": 102400
    },
    "Region": {
      "Type": "String",
      "Description": {
        "en": "The region of the specified CDT resource package."
      },
      "AllowedValues": [
        "chinese-mainland",
        "asia-pacific",
        "europe",
        "north-america",
        "south-america",
        "middleeast",
        "finance-cloud"
      ],
      "Required": true
    },
    "Pack": {
      "Type": "String",
      "Description": {
        "en": "The pack of the specified CDT resource package. It can be obtained from the `components` field in the payload of the `getPrice` network request on the CDT common buy page."
      },
      "Required": true
    }
  },
  "Resources": {
    "ResourcePackage": {
      "Type": "ALIYUN::CDT::ResourcePackage",
      "Properties": {
        "Capacity": {
          "Ref": "Capacity"
        },
        "Region": {
          "Ref": "Region"
        },
        "Pack": {
          "Ref": "Pack"
        }
      }
    }
  },
  "Outputs": {
    "InstanceId": {
      "Description": "The ID of the specified instance.",
      "Value": {
        "Fn::GetAtt": [
          "ResourcePackage",
          "InstanceId"
        ]
      }
    },
    "OrderId": {
      "Description": "The ID of the specified order.",
      "Value": {
        "Fn::GetAtt": [
          "ResourcePackage",
          "OrderId"
        ]
      }
    }
  }
}
                        
```

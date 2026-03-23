ALIYUN::VPC::Ipv6InternetBandwidth is used to purchase Internet bandwidth for an IPv6 address.

## Syntax

```
{
  "Type": "ALIYUN::VPC::Ipv6InternetBandwidth",
  "Properties": {
    "Bandwidth": Integer,
    "Ipv6AddressId": String,
    "Ipv6GatewayId": String,
    "InternetChargeType": String
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

Bandwidth

Integer

Yes

Yes

The Internet bandwidth of the IPv6 address.

Valid values:

-   Valid values when InternetChargeType is set to PayByBandwidth: 1 to 5000.
    
-   Valid values vary based on the specification of the IPv6 gateway when InternetChargeType is set to PayByTraffic:
    
    -   Valid values when the specification is Small (default Free Edition): 1 to 500.
        
    -   Valid values when the specification is Medium (Enterprise Edition): 1 to 1000.
        
    -   Valid values when the specification is Large (Enhanced Enterprise Edition): 1 to 2000.
        

Unit: Mbit/s.

Ipv6AddressId

String

Yes

No

The ID of the IPv6 address.

None.

Ipv6GatewayId

String

Yes

No

The ID of the IPv6 gateway.

None.

InternetChargeType

String

No

No

The metering method of the Internet bandwidth of the IPv6 address.

Valid values:

-   PayByTraffic: pay-by-data-transfer
    
-   PayByBandwidth (default): pay-by-bandwidth
    

## Return values

Fn::GetAtt

InternetBandwidthId: the ID of the Internet bandwidth.

## Examples

-   `YAML` format
    
    ```
    ROSTemplateFormatVersion: '2015-09-01'
    Parameters:
      Ipv6AddressId:
        Type: String
        Description: ID of IPv6 address.
      Ipv6GatewayId:
        Type: String
        Description: ID of IPv6 gateway.
    Resources:
      Ipv6InternetBandwidth:
        Type: ALIYUN::VPC::Ipv6InternetBandwidth
        Properties:
          Bandwidth: 5000
          Ipv6AddressId:
            Ref: Ipv6AddressId
          Ipv6GatewayId:
            Ref: Ipv6GatewayId
    Outputs:
      InternetBandwidthId:
        Description: Purchase of public network bandwidth.
        Value:
          Fn::GetAtt:
            - Ipv6InternetBandwidth
            - InternetBandwidthId
    ```
    
-   `JSON` format
    
    ```
    {
      "ROSTemplateFormatVersion": "2015-09-01",
      "Parameters": {
        "Ipv6AddressId": {
          "Type": "String",
          "Description": "ID of IPv6 address."
        },
        "Ipv6GatewayId": {
          "Type": "String",
          "Description": "ID of IPv6 gateway."
        }
      },
      "Resources": {
        "Ipv6InternetBandwidth": {
          "Type": "ALIYUN::VPC::Ipv6InternetBandwidth",
          "Properties": {
            "Bandwidth": 5000,
            "Ipv6AddressId": {
              "Ref": "Ipv6AddressId"
            },
            "Ipv6GatewayId": {
              "Ref": "Ipv6GatewayId"
            }
          }
        }
      },
      "Outputs": {
        "InternetBandwidthId": {
          "Description": "Purchase of public network bandwidth.",
          "Value": {
            "Fn::GetAtt": [
              "Ipv6InternetBandwidth",
              "InternetBandwidthId"
            ]
          }
        }
      }
    }
    ```
    

For more examples, visit [SnatEntry.json](https://github.com/aliyun/ros-templates/tree/master/ResourceTemplates/VPC/JSON/SnatEntry.json) and [SnatEntry.yml](https://github.com/aliyun/ros-templates/tree/master/ResourceTemplates/VPC/YAML/SnatEntry.yml). In the examples, the following resource types are used: ALIYUN::ECS::VPC, ALIYUN::ECS::VSwitch, ALIYUN::VPC::SnatEntry, ALIYUN::VPC::CommonBandwidthPackage, ALIYUN::VPC::CommonBandwidthPackageIp, ALIYUN::VPC::Ipv6Gateway, and ALIYUN::VPC::Ipv6InternetBandwidth.

The ALIYUN::ROCKETMQ5::Instance resource type creates an ApsaraMQ for RocketMQ 5.0 instance.

## Syntax

```
{
  "Type": "ALIYUN::ROCKETMQ5::Instance",
  "Properties": {
    "AutoRenewPeriod": Integer,
    "ProductInfo": Map,
    "ResourceGroupId": String,
    "AutoRenew": Boolean,
    "Period": Integer,
    "InternetInfo": Map,
    "SubSeriesCode": String,
    "Remark": String,
    "InstanceName": String,
    "SeriesCode": String,
    "PaymentType": String,
    "VpcInfo": Map,
    "PeriodUnit": String
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

InternetInfo

Map

Yes

Yes

The public network configuration.

For more information, see [InternetInfo properties](#section-uuq-mh3-0l7).

ProductInfo

Map

Yes

Yes

The instance specifications.

For more information, see [ProductInfo properties](#section-x6t-pot-6yu).

SeriesCode

String

Yes

No

The primary series code of the instance.

Valid values:

-   standard: Standard Edition
    
-   ultimate: Platinum Edition
    
-   professional: Professional Edition
    

**Note**

After an instance is created, you can only upgrade its primary series. You cannot downgrade it. The upgrade path is: Standard Edition > Professional Edition > Platinum Edition. For example, you can upgrade an instance from Standard Edition to Professional Edition, but you cannot downgrade an instance from Professional Edition to Standard Edition.

SubSeriesCode

String

Yes

No

The sub-series code of the instance.

Valid values:

-   cluster\_ha: High-availability Cluster Edition. If you set the primary series to \`ultimate\` (Platinum Edition), you must set the sub-series to \`cluster\_ha\` (High-availability Cluster Edition).
    
-   single\_node: Single-node Edition for testing.
    
-   serverless: Serverless instance
    

**Note**

After an instance is created, you cannot change its sub-series.

VpcInfo

Map

Yes

No

The VPC configuration.

For more information, see [VpcInfo properties](#section-e2z-bo5-p77).

AutoRenew

Boolean

No

No

Specifies whether to enable auto-renewal.

This parameter is valid only if the billing method of the instance is \`Subscription\`.

Valid values:

-   true: Enables auto-renewal.
    
-   false: Disables auto-renewal.
    

AutoRenewPeriod

Integer

No

No

The auto-renewal period.

This parameter is valid only if auto-renewal is enabled.

Unit: months.

Valid values:

For monthly renewal: 1, 2, 3, 6, and 12.

InstanceName

String

No

Yes

The name of the instance to create.

If you do not specify this parameter, the instance ID is used as the instance name.

PaymentType

String

No

No

The billing method of the instance.

Valid values:

-   PayAsYouGo: A pay-as-you-go billing method where you are billed for the resources you use.
    
-   Subscription: A subscription billing method where you pay upfront.
    

Period

Integer

No

No

The subscription duration.

This parameter is valid only if the billing method of the instance is \`Subscription\`.

Valid values:

-   If you purchase by month: 1, 2, 3, 4, 5, and 6.
    
-   If you purchase by year: 1, 2, and 3.
    

PeriodUnit

String

No

No

The smallest subscription duration unit.

Valid values:

-   Month: The subscription duration is measured in months.
    
-   Year: The subscription duration is measured in years.
    

Remark

String

No

Yes

The remarks on the instance.

None

ResourceGroupId

String

No

No

The ID of the resource group.

None

## ProductInfo syntax

```
"ProductInfo": {
  "SendReceiveRatio": Number,
  "MessageRetentionTime": Integer,
  "AutoScaling": Boolean,
  "MsgProcessSpec": String,
  "ProvisionedCapacity": Integer,
  "CapacityType": String
}
```

## ProductInfo properties

**Property Name**

**Type**

**Required**

**Update allowed**

**Description**

**Constraints**

MsgProcessSpec

String

Yes

No

The computing specification for message sending and receiving.

None

AutoScaling

Boolean

No

No

Specifies whether to enable burst scaling beyond the specifications.

Valid values:

-   true: Enables burst scaling.
    
-   false: Disables burst scaling.
    

After you enable burst scaling, ApsaraMQ for RocketMQ allows the instance to exceed the TPS limit of its base specifications within a specific range. You are charged for the traffic that exceeds the base specifications.

**Note**

Only some instance types support burst scaling.

CapacityType

String

No

No

The capacity mode.

Valid values:

-   provisioned: provisioned + flexible
    
-   ondemand: pay-as-you-go
    

MessageRetentionTime

Integer

No

Yes

The message retention period.

Unit: hours.

ApsaraMQ for RocketMQ 5.0 provides serverless and elastic storage. You are charged for the actual storage that you use. You can adjust the message retention period to control your storage capacity.

ProvisionedCapacity

Integer

No

No

The provisioned capacity.

None

SendReceiveRatio

Number

No

Yes

The ratio of message sending to receiving.

The value must be between 0.2 and 0.5.

## InternetInfo syntax

```
"InternetInfo": {
  "IpWhitelist": List,
  "InternetSpec": String,
  "FlowOutBandwidth": Integer,
  "FlowOutType": String
}
```

## InternetInfo properties

**Property Name**

**Type**

**Required**

**Update allowed**

**Description**

**Constraints**

InternetSpec

String

Yes

Yes

Specifies whether to enable public network access.

Valid values:

-   enable: Enables public network access.
    
-   disable: Disables public network access.
    

By default, instances are accessed over a VPC. If you enable public network access, you are charged for outbound public bandwidth.

FlowOutBandwidth

Integer

No

Yes

Public bandwidth specification

Unit: Mbps.

This parameter is required only when the public network billing type is pay-by-bandwidth.

Valid values: 1 to 1000.

FlowOutType

String

No

No

The public network billing type.

Valid values:

-   payByBandwidth: pay-by-bandwidth. Set the parameter to this value when public network access is enabled.
    
-   uninvolved: not applicable. Set the parameter to this value when public network access is disabled.
    

IpWhitelist

List

No

Yes

The IP address whitelist for public network access.

You can configure an IP address whitelist only for public endpoints. VPC endpoints are not supported.

-   If you do not configure a whitelist, all IP addresses can access the ApsaraMQ for RocketMQ 5.0 server over the public network by default.
    
-   If you configure a whitelist, only the IP addresses in the whitelist can access the ApsaraMQ for RocketMQ 5.0 server over the public network.
    

## VpcInfo syntax

```
"VpcInfo": {
  "VpcId": String,
  "VSwitchId": String,
  "SecurityGroupId": String,
  "VSwitchIds": List
}
```

## VpcInfo properties

**Property Name**

**Type**

**Required**

**Update allowed**

**Description**

**Constraints**

VpcId

String

Yes

No

The ID of the VPC to which the instance belongs.

**Note**

After an ApsaraMQ for RocketMQ 5.0 instance is created, you cannot change its VPC. To change the VPC, you must release the instance and purchase a new one.

SecurityGroupId

String

No

No

The ID of the security group to which the instance belongs.

None

VSwitchId

String

No

No

The ID of the vSwitch to which the instance is connected.

**Note**

After an ApsaraMQ for RocketMQ 5.0 instance is created, you cannot change its vSwitch. To change the vSwitch, you must release the instance and purchase a new one.

VSwitchIds

List

No

No

A list of vSwitch IDs to which the instance is connected.

None

## Return values

Fn::GetAtt

-   InstanceName: The instance name.
    
-   VpcEndpoint: The domain name of the VPC.
    
-   InstanceId: The instance ID.
    
-   InternetEndpoint: The public endpoint of the instance.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  VpcId:
    Type: String
    AssociationProperty: ALIYUN::ECS::VPC::VPCId
  VSwitchId:
    Type: String
    AssociationProperty: ALIYUN::ECS::VSwitch::VSwitchId
    AssociationPropertyMetadata:
      VpcId: ${VpcId}
Resources:
  Instance:
    Type: ALIYUN::ROCKETMQ5::Instance
    Properties:
      ProductInfo:
        MsgProcessSpec: rmq.s2.2xlarge
        SendReceiveRatio: 0.2
        MessageRetentionTime: 72
      InternetInfo:
        InternetSpec: disable
        FlowOutBandwidth: uninvolved
      SubSeriesCode: cluster_ha
      SeriesCode: standard
      PaymentType: PayAsYouGo
      VpcInfo:
        VpcId:
          Ref: VpcId
        VSwitchId:
          Ref: VSwitchId
Outputs:
  InstanceName:
    Description: Instance name.
    Value:
      Fn::GetAtt:
        - Instance
        - InstanceName
  VpcEndpoint:
    Description: VPC endpoint.
    Value:
      Fn::GetAtt:
        - Instance
        - VpcEndpoint
  InstanceId:
    Description: Instance ID created.
    Value:
      Fn::GetAtt:
        - Instance
        - InstanceId
  InternetEndpoint:
    Description: Internet endpoint.
    Value:
      Fn::GetAtt:
        - Instance
        - InternetEndpoint
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "VpcId": {
      "Type": "String",
      "AssociationProperty": "ALIYUN::ECS::VPC::VPCId"
    },
    "VSwitchId": {
      "Type": "String",
      "AssociationProperty": "ALIYUN::ECS::VSwitch::VSwitchId",
      "AssociationPropertyMetadata": {
        "VpcId": "${VpcId}"
      }
    }
  },
  "Resources": {
    "Instance": {
      "Type": "ALIYUN::ROCKETMQ5::Instance",
      "Properties": {
        "ProductInfo": {
          "MsgProcessSpec": "rmq.s2.2xlarge",
          "SendReceiveRatio": 0.2,
          "MessageRetentionTime": 72
        },
        "InternetInfo": {
          "InternetSpec": "disable",
          "FlowOutBandwidth": "uninvolved"
        },
        "SubSeriesCode": "cluster_ha",
        "SeriesCode": "standard",
        "PaymentType": "PayAsYouGo",
        "VpcInfo": {
          "VpcId": {
            "Ref": "VpcId"
          },
          "VSwitchId": {
            "Ref": "VSwitchId"
          }
        }
      }
    }
  },
  "Outputs": {
    "InstanceName": {
      "Description": "Instance name.",
      "Value": {
        "Fn::GetAtt": [
          "Instance",
          "InstanceName"
        ]
      }
    },
    "VpcEndpoint": {
      "Description": "VPC endpoint.",
      "Value": {
        "Fn::GetAtt": [
          "Instance",
          "VpcEndpoint"
        ]
      }
    },
    "InstanceId": {
      "Description": "Instance ID created.",
      "Value": {
        "Fn::GetAtt": [
          "Instance",
          "InstanceId"
        ]
      }
    },
    "InternetEndpoint": {
      "Description": "Internet endpoint.",
      "Value": {
        "Fn::GetAtt": [
          "Instance",
          "InternetEndpoint"
        ]
      }
    }
  }
}
```

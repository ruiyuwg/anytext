ALIYUN::KAFKA::Instance is used to create an ApsaraMQ for Kafka instance.

## Syntax

```
{
  "Type": "ALIYUN::KAFKA::Instance",
  "Properties": {
    "DeployType": Integer,
    "DiskType": String,
    "DeployOption": Map,
    "EipMax": Integer,
    "SpecType": String,
    "IoMax": Integer,
    "IoMaxSpec": String,
    "DiskSize": Integer,
    "TopicQuota": Integer,
    "PayType": String,
    "Tags": List,
    "DeletionForce": Boolean,
    "OpenConnector": Boolean,
    "PartitionNum": Integer,
    "ServerlessConfig": Map
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

DeployType

Integer

Yes

No

The deployment type.

Valid values:

-   4: deploys an Internet- and virtual private cloud (VPC)-connected instance.
    
-   5: deploys a VPC-connected instance.
    

DiskType

String

No

No

The category of the disk.

Valid values:

-   0: ultra disk
    
-   1: standard SSD
    

DeployOption

Map

No

No

Details of the deployment options.

For more information, see [DeployOption properties](#section-n9x-w7i-uc2).

EipMax

Integer

No

Yes

The Internet traffic.

You must specify this property when DeployType is set to 4.

Valid values: 1 to 160.

SpecType

String

No

Yes

The edition.

Valid values:

-   normal: Standard Edition (High Write)
    
-   professional: Professional Edition (High Write)
    
-   professionalForHighRead: Professional Edition (High Read)
    

IoMax

Integer

No

Yes

The peak traffic.

You must specify one of the IoMax and IoMaxSpec properties. If you specify both the properties, the IoMaxSpec property takes precedence. We recommend that you specify only the IoMaxSpec property.

For more information, see [Billing overview](/help/en/apsaramq-for-kafka/cloud-message-queue-for-kafka/product-overview/billing-overview#concept-1375190).

IoMaxSpec

String

No

Yes

The traffic specification.

You must specify one of the IoMax and IoMaxSpec properties. If you specify both the properties, the IoMaxSpec property takes precedence. We recommend that you specify only the IoMaxSpec property.

For more information, see [Billing overview](/help/en/apsaramq-for-kafka/cloud-message-queue-for-kafka/product-overview/billing-overview#concept-1375190).

DiskSize

Integer

No

Yes

The disk size.

Valid values: 500 to 96000.

Unit: GB.

TopicQuota

Integer

No

Yes

The number of topics.

Valid values: 50 to 79.

PayType

String

No

No

The billing method.

Valid values:

-   Hour: pay-as-you-go
    
-   Month: subscription
    

Tags

List

No

Yes

The tags.

You can add up to 20 tags.

For more information, see [Tags properties](#section-zsa-dbk-p3s).

DeletionForce

Boolean

No

Yes

Specifies whether to forcefully delete the instance.

Valid values:

-   true
    
-   false (default)
    

OpenConnector

Boolean

No

No

Specifies whether to enable the connector feature.

Valid values:

-   true
    
-   false (default)
    

**Note**

For more information about connectors, see [Overview](/help/en/apsaramq-for-kafka/old-version-connector-overview#concept-2532624).

PartitionNum

Integer

No

Yes

The number of partitions.

The following rules apply:

-   You must specify one of the PartitionNum and TopicQuota properties. We recommend that you specify only the PartitionNum property.
    
-   If you specify both the properties, the topic-based sales model is used to check whether the PartitionNum value is the same as the TopicQuota value. If the values are different, a failure response is returned. If the values are the same, the order is placed based on the PartitionNum value.
    

For more information, see [Billing overview](/help/en/apsaramq-for-kafka/cloud-message-queue-for-kafka/product-overview/billing-overview).

ServerlessConfig

Map

No

Yes

The parameters of the serverless instance.

You must specify this property when you create a serverless ApsaraMQ for Kafka V3 instance. For more information, see the "ServerlessConfig properties" section of this topic.

## Tags syntax

```
"Tags": [
  {
    "Key": String,
    "Value": String
  }
]  
```

## Tags properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Key

String

Yes

No

The tag key.

The tag key must be 1 to 128 characters in length, and cannot contain `http://` or `https://`. It cannot start with `aliyun` or `acs:`.

Value

String

No

No

The tag value.

The tag value can be up to 128 characters in length, and cannot contain `http://` or `https://`. It cannot start with `aliyun` or `acs:`.

## DeployOption syntax

```
"DeployOption": {
  "IsEipInner": Boolean,
  "VpcId": String,
  "ZoneId": String,
  "VSwitchId": String,
  "SecurityGroup": String,
  "DeployModule": String,
  "Name": String,
  "IsSetUserAndPassword": Boolean,
  "Username": String,
  "Password": String,
  "ServiceVersion": String,
  "Config": Map,
  "Notifier": String,
  "CrossZone": Boolean,
  "UserPhoneNum": String,
  "SelectedZones": List,
  "VSwitchIds": List,
  "KMSKeyId": String,
  "IsForceSelectedZones": Boolean
}
```

## DeployOption properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

IsEipInner

Boolean

No

No

Specifies whether the instance supports elastic IP addresses (EIPs).

Valid values:

-   true
    
-   false (default)
    

The value of this property must match the type of the instance. The valid value for an Internet- and VPC-connected instance is true. The valid value for a VPC-connected instance is false.

DeployModule

String

Yes

No

The deployment mode.

Valid values:

-   vpc: deploys a VPC-connected instance.
    
-   eip: deploys an Internet- and VPC-connected instance.
    

VpcId

String

No

No

The ID of the VPC in which you want to deploy the instance.

None.

ZoneId

String

No

No

The ID of the zone in which you want to deploy the instance.

None.

VSwitchId

String

Yes

No

The ID of the vSwitch to which the instance you want to deploy is connected.

None.

SecurityGroup

String

No

No

The security group to which the instance belongs.

If you leave this property empty, ApsaraMQ for Kafka automatically configures a security group for the instance.

Name

String

No

No

The instance name.

None.

IsSetUserAndPassword

Boolean

No

No

Specifies whether to configure a new username and password.

Only Internet- and VPC-connected instances are supported. Valid values:

-   true
    
-   false (default)
    

Username

String

No

No

The username.

Only Internet- and VPC-connected instances are supported.

The username must be 8 to 40 characters in length, and can contain letters and digits.

Password

String

No

No

The password that corresponds to the username.

Only Internet- and VPC-connected instances are supported.

The password must be 8 to 40 characters in length, and must contain lowercase letters, uppercase letters, and digits.

ServiceVersion

String

No

No

The version of the instance that you want to deploy.

Valid values:

-   0.10.2
    
-   2.2.0
    

Config

Map

No

No

The initial configurations of the instance that you want to deploy.

The value must be a valid JSON string. The value of this property includes the following fields:

-   enable.vpc\_sasl\_ssl: specifies whether to enable VPC transmission encryption. Valid values:
    
    -   true: enables VPC transmission encryption. If you enable VPC transmission encryption, you must enable the access control list (ACL) feature.
        
    -   false (default): disables VPC transmission encryption.
        
-   enable.acl: specifies whether to enable the ACL feature. Valid values:
    
    -   true
        
    -   false (default)
        
-   kafka.log.retention.hours: the maximum retention period of a message when the disk capacity is sufficient.
    
    Valid values: 24 to 480.
    
    Default value: 72.
    
    Unit: hour.
    
    **Note**
    
    When the disk usage reaches 85%, the system considers that the disk capacity is insufficient. In this case, the system deletes messages in the order in which they are stored, from the earliest one to the latest one. This ensures service availability.
    
-   kafka.message.max.bytes: the maximum size of a message that ApsaraMQ for Kafka can send and receive.
    
    Valid values: 1048576 to 10485760.
    
    Default value: 1048576.
    
    Unit: bytes.
    
    **Note**
    
    Before you change the maximum message size, make sure that the new value matches the configurations of the producer and consumer.
    

Notifier

String

No

No

The alert contact.

None.

CrossZone

Boolean

No

No

Specifies whether to deploy the instance across zones.

Valid values:

-   true
    
-   false
    

Default value: true.

UserPhoneNum

String

No

No

The mobile phone number of the alert contact.

None.

SelectedZones

List

No

No

The two-dimensional arrays that consist of the candidate set for primary zones and the candidate set for secondary zones.

Custom code in the `zone {zone}` format and standard code in the `cn-RegionID-{zone}` format are used to specify zones in the arrays.

-   If you set CrossZone to true and want to use Zone H and Zone F in the candidate set for primary zones and Zone K in the candidate set for secondary zones in the custom code format, you must specify `[[\"zoneh\",\"zonef\"],[\"zonek\"]]` as the value of SelectedZones.
    
    Take note of the following information:
    
    If you specify multiple zones as primary or secondary zones, the system uses one zone as the primary or secondary zone without prioritizing the specified zones. For example, if you set this property to `[[\"zoneh\",\"zonef\"],[\"zonek\"]]`, the system uses Zone H or Zone F as the primary zone and uses Zone K as the secondary zone.
    
-   If you set CrossZone to false and want to use Zone K in the custom code format, you must specify `[[\"zonek\"],[]]` as the value of SelectedZones. You must take note that \[\[\\"zonek\\"\],\[\]\] is still two-dimensional arrays, but the array that specifies the candidate set for secondary zones is empty.
    

VSwitchIds

List

No

No

The IDs of the vSwitches to which the instance you want to deploy is connected.

You must specify this property for an ApsaraMQ for Kafka V2 or V3 instance. You must specify one of the VSwitchIds and VSwitchId properties for an ApsaraMQ for Confluent instance. If you specify both the properties for an ApsaraMQ for Confluent instance, the VSwitchIds property takes precedence.

KMSKeyId

String

No

No

The ID of the key used for cloud disk encryption in the region where the instance resides.

You can obtain the ID of the key from the [Key Management Service (KMS) console](https://yundun.console.alibabacloud.com/?p=kms/?spm=a2c4g.11186623.2.5.336745b8hfiU21). You can also create a key. For more information, see [Create a CMK](/help/en/kms/key-management-service/support/create-a-cmk-1).

If you specify this property, encryption is enabled for the instance and cannot be disabled. When you use ALIYUN::KAFKA::Instance, the system checks whether the service-linked role AliyunServiceRoleForAlikafkaInstanceEncryption is created. If the service-linked role is not created, the system automatically creates the role. For more information, see [Service-linked roles](/help/en/apsaramq-for-kafka/cloud-message-queue-for-kafka/security-and-compliance/service-linked-roles).

IsForceSelectedZones

Boolean

No

No

Specifies whether to forcefully deploy the instance in the selected zones.

None.

## ServerlessConfig syntax

```
"ServerlessConfig": {
   "ReservedPublishCapacity": Integer,
   "ReservedSubscribeCapacity": Integer
}
```

## ServerlessConfig properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

ReservedPublishCapacity

Integer

Yes

Yes

The traffic reserved for message publishing.

The value must be an integer. Minimum value: 60.

ReservedSubscribeCapacity

Integer

Yes

Yes

The traffic reserved for message subscription.

The value must be an integer. Minimum value: 20.

## Return values

Fn::GetAtt

-   InstanceId: the instance ID.
    
-   OrderId: the order ID.
    
-   name: the instance name.
    
-   SslEndpoint: the SSL endpoint in the IP address format.
    
-   SaslDomainEndpoint: the Simple Authentication and Security Layer (SASL) endpoint in the domain name format.
    
-   SslDomainEndpoint: the SSL endpoint in the domain name format.
    
-   DomainEndpoint: the default endpoint in the domain name format.
    
-   Endpoint: the default endpoint in the IP address format.
    
-   Arn: the Alibaba Cloud Resource Name (ARN).
    

## Examples

## `YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  VpcId:
    Type: String
    AssociationProperty: ALIYUN::ECS::VPC::VPCId
  ZoneId:
    Type: String
    AssociationProperty: ALIYUN::ECS::ZoneId
  VSwitchId:
    Type: String
    AssociationProperty: ALIYUN::ECS::VSwitch::VSwitchId
    AssociationPropertyMetadata:
      VpcId: ${VpcId}
      ZoneId: ${ZoneId}
  SecurityGroupId:
    Type: String
    AssociationProperty: ALIYUN::ECS::SecurityGroup::SecurityGroupId
    AssociationPropertyMetadata:
      VpcId: ${VpcId}
Resources:
  Instance:
    Type: ALIYUN::KAFKA::Instance
    Properties:
      DeployType: 5
      SpecType: normal
      PayType: Hour
      DiskType: '1'
      DeployOption:
        VpcId:
          Ref: VpcId
        ZoneId:
          Ref: ZoneId
        VSwitchId:
          Ref: VSwitchId
        SecurityGroup:
          Ref: SecurityGroupId
        DeployModule: vpc
        ServiceVersion: 0.10.2
        Config:
          kafka.log.retention.hours: '33'
      DeletionForce: 'false'
      DiskSize: 500
      TopicQuota: 50
      OpenConnector: 'false'
      IoMaxSpec: alikafka.hw.2xlarge
Outputs:
  InstanceId:
    Description: 'Id of the instance. '
    Value:
      Fn::GetAtt:
        - Instance
        - InstanceId
  OrderId:
    Description: 'Id of the order. '
    Value:
      Fn::GetAtt:
        - Instance
        - OrderId
  Name:
    Description: Name of the instance.
    Value:
      Fn::GetAtt:
        - Instance
        - Name
```

## `JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "VpcId": {
      "Type": "String",
      "AssociationProperty": "ALIYUN::ECS::VPC::VPCId"
    },
    "ZoneId": {
      "Type": "String",
      "AssociationProperty": "ALIYUN::ECS::ZoneId"
    },
    "VSwitchId": {
      "Type": "String",
      "AssociationProperty": "ALIYUN::ECS::VSwitch::VSwitchId",
      "AssociationPropertyMetadata": {
        "VpcId": "${VpcId}",
        "ZoneId": "${ZoneId}"
      }
    },
    "SecurityGroupId": {
      "Type": "String",
      "AssociationProperty": "ALIYUN::ECS::SecurityGroup::SecurityGroupId",
      "AssociationPropertyMetadata": {
        "VpcId": "${VpcId}"
      }
    }
  },
  "Resources": {
    "Instance": {
      "Type": "ALIYUN::KAFKA::Instance",
      "Properties": {
        "DeployType": 5,
        "SpecType": "normal",
        "PayType": "Hour",
        "DiskType": "1",
        "DeployOption": {
          "VpcId": {
            "Ref": "VpcId"
          },
          "ZoneId": {
            "Ref": "ZoneId"
          },
          "VSwitchId": {
            "Ref": "VSwitchId"
          },
          "SecurityGroup": {
            "Ref": "SecurityGroupId"
          },
          "DeployModule": "vpc",
          "ServiceVersion": "0.10.2",
          "Config": {
            "kafka.log.retention.hours": "33"
          }
        },
        "DeletionForce": "false",
        "DiskSize": 500,
        "TopicQuota": 50,
        "OpenConnector": "false",
        "IoMaxSpec": "alikafka.hw.2xlarge"
      }
    }
  },
  "Outputs": {
    "InstanceId": {
      "Description": "Id of the instance. ",
      "Value": {
        "Fn::GetAtt": [
          "Instance",
          "InstanceId"
        ]
      }
    },
    "OrderId": {
      "Description": "Id of the order. ",
      "Value": {
        "Fn::GetAtt": [
          "Instance",
          "OrderId"
        ]
      }
    },
    "Name": {
      "Description": "Name of the instance.",
      "Value": {
        "Fn::GetAtt": [
          "Instance",
          "Name"
        ]
      }
    }
  }
}
```

For more examples, visit [instance.yml](https://github.com/aliyun/ros-templates/blob/master/resources/kafka/instance.yml). In the examples, the ALIYUN::KAFKA::Instance and ALIYUN::KAFKA::Topic resource types are used.

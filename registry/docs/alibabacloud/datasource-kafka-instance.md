DATASOURCE::KAFKA::Instance is used to query the information about an ApsaraMQ for Kafka instance.

## Syntax

```
{
  "Type": "DATASOURCE::KAFKA::Instance",
  "Properties": {
    "InstanceId": String,
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

InstanceId

String

Yes

Yes

The instance ID.

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

-   DeployType: the deployment type.
    
-   ResourceGroupId: the ID of the resource group.
    
-   SpecType: the edition of the instance.
    
-   IoMax: the peak traffic.
    
-   AllConfig: the configurations of the deployed instance.
    
-   EndPoint: the default endpoint in IP address mode.
    
-   SaslDomainEndpoint: the Simple Authentication and Security Layer (SASL) endpoint in domain name mode.
    
-   DiskType: the disk type.
    
-   SslDomainEndpoint: the SSL endpoint in domain name mode.
    
-   AllowedList: the IP address whitelist.
    
-   MsgRetain: the retention period of messages.
    
-   ExpiredTime: the expiration time.
    
-   DiskSize: the disk size.
    
-   PaymentType: the billing method of the instance.
    
-   TopicNumLimit: the maximum number of topics.
    
-   Tags: the tags.
    
-   SslEndPoint: the SSL endpoint in IP address mode.
    
-   EipMax: the peak Internet traffic.
    
-   ZoneId: the zone ID.
    
-   InstanceId: the instance ID.
    
-   VSwitchId: the vSwitch ID.
    
-   CreateTime: the creation time of the instance.
    
-   InstanceName: the instance name.
    
-   VpcId: the ID of the virtual private cloud (VPC).
    
-   DomainEndpoint: the default endpoint in domain name mode.
    
-   IoMaxSpec: the traffic specification.
    
-   ServiceVersion: the version of the deployed instance.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  InstanceId:
    Type: String
    Description:
      en: The ID of the instance.
    Required: true
    AssociationProperty: ALIYUN::Kafka::Instance::InstanceId
Resources:
  ExtensionDataSource:
    Type: DATASOURCE::KAFKA::Instance
    Properties:
      InstanceId:
        Ref: InstanceId
Outputs:
  DeployType:
    Description: Deployment method.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - DeployType
  ResourceGroupId:
    Description: The ID of the resource group.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ResourceGroupId
  SpecType:
    Description: Instance type.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - SpecType
  IoMax:
    Description: Peak flow.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - IoMax
  AllConfig:
    Description: The current configuration of the deployed message queue Kafka version.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - AllConfig
  EndPoint:
    Description: Access point.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - EndPoint
  SaslDomainEndpoint:
    Description: The domain name access point of the SASL access point. The Kafka instance supports domain name access points and IP access points.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - SaslDomainEndpoint
  DiskType:
    Description: Disk type.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - DiskType
  SslDomainEndpoint:
    Description: The domain name of the SSL access point. The Kafka instance supports domain name access points and IP access points.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - SslDomainEndpoint
  AllowedList:
    Description: White list.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - AllowedList
  MsgRetain:
    Description: Message save time.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - MsgRetain
  ExpiredTime:
    Description: Expiration time.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ExpiredTime
  DiskSize:
    Description: Disk size.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - DiskSize
  PaymentType:
    Description: The paymen type of the resource.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - PaymentType
  TopicNumLimit:
    Description: Maximum number of topic creation.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - TopicNumLimit
  Tags:
    Description: The tag of the kafka console, which is used to group instance,topic, and consumption.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Tags
  SslEndPoint:
    Description: External access point.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - SslEndPoint
  EipMax:
    Description: Peak public network traffic.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - EipMax
  ZoneId:
    Description: The ID of the zone in which the instance is deployed.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ZoneId
  InstanceId:
    Description: The ID of the instance.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - InstanceId
  VSwitchId:
    Description: Switch id.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - VSwitchId
  CreateTime:
    Description: Creation time.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - CreateTime
  InstanceName:
    Description: Note name.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - InstanceName
  VpcId:
    Description: VpcId.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - VpcId
  DomainEndpoint:
    Description: The domain name access point of the default access point. The Kafka instance supports domain name access points and IP access points.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - DomainEndpoint
  IoMaxSpec:
    Description: Flow specifications (recommended).
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - IoMaxSpec
  ServiceVersion:
    Description: The version of the Kafka version of the deployed Message Queue. The value is 0.10.2 or 2.2.0.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ServiceVersion
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "InstanceId": {
      "Type": "String",
      "Description": {
        "en": "The ID of the instance."
      },
      "Required": true,
      "AssociationProperty": "ALIYUN::Kafka::Instance::InstanceId"
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::KAFKA::Instance",
      "Properties": {
        "InstanceId": {
          "Ref": "InstanceId"
        }
      }
    }
  },
  "Outputs": {
    "DeployType": {
      "Description": "Deployment method.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "DeployType"
        ]
      }
    },
    "ResourceGroupId": {
      "Description": "The ID of the resource group.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ResourceGroupId"
        ]
      }
    },
    "SpecType": {
      "Description": "Instance type.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "SpecType"
        ]
      }
    },
    "IoMax": {
      "Description": "Peak flow.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "IoMax"
        ]
      }
    },
    "AllConfig": {
      "Description": "The current configuration of the deployed message queue Kafka version.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "AllConfig"
        ]
      }
    },
    "EndPoint": {
      "Description": "Access point.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "EndPoint"
        ]
      }
    },
    "SaslDomainEndpoint": {
      "Description": "The domain name access point of the SASL access point. The Kafka instance supports domain name access points and IP access points.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "SaslDomainEndpoint"
        ]
      }
    },
    "DiskType": {
      "Description": "Disk type.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "DiskType"
        ]
      }
    },
    "SslDomainEndpoint": {
      "Description": "The domain name of the SSL access point. The Kafka instance supports domain name access points and IP access points.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "SslDomainEndpoint"
        ]
      }
    },
    "AllowedList": {
      "Description": "White list.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "AllowedList"
        ]
      }
    },
    "MsgRetain": {
      "Description": "Message save time.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "MsgRetain"
        ]
      }
    },
    "ExpiredTime": {
      "Description": "Expiration time.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ExpiredTime"
        ]
      }
    },
    "DiskSize": {
      "Description": "Disk size.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "DiskSize"
        ]
      }
    },
    "PaymentType": {
      "Description": "The paymen type of the resource.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "PaymentType"
        ]
      }
    },
    "TopicNumLimit": {
      "Description": "Maximum number of topic creation.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "TopicNumLimit"
        ]
      }
    },
    "Tags": {
      "Description": "The tag of the kafka console, which is used to group instance,topic, and consumption.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Tags"
        ]
      }
    },
    "SslEndPoint": {
      "Description": "External access point.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "SslEndPoint"
        ]
      }
    },
    "EipMax": {
      "Description": "Peak public network traffic.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "EipMax"
        ]
      }
    },
    "ZoneId": {
      "Description": "The ID of the zone in which the instance is deployed.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ZoneId"
        ]
      }
    },
    "InstanceId": {
      "Description": "The ID of the instance.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "InstanceId"
        ]
      }
    },
    "VSwitchId": {
      "Description": "Switch id.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "VSwitchId"
        ]
      }
    },
    "CreateTime": {
      "Description": "Creation time.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "CreateTime"
        ]
      }
    },
    "InstanceName": {
      "Description": "Note name.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "InstanceName"
        ]
      }
    },
    "VpcId": {
      "Description": "VpcId.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "VpcId"
        ]
      }
    },
    "DomainEndpoint": {
      "Description": "The domain name access point of the default access point. The Kafka instance supports domain name access points and IP access points.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "DomainEndpoint"
        ]
      }
    },
    "IoMaxSpec": {
      "Description": "Flow specifications (recommended).",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "IoMaxSpec"
        ]
      }
    },
    "ServiceVersion": {
      "Description": "The version of the Kafka version of the deployed Message Queue. The value is 0.10.2 or 2.2.0.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ServiceVersion"
        ]
      }
    }
  }
}
                        
```

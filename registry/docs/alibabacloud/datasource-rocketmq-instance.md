DATASOURCE::ROCKETMQ::Instance is used to query the details of an ApsaraMQ for RocketMQ instance.

## Syntax

```
{
  "Type": "DATASOURCE::ROCKETMQ::Instance",
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

The ID of the ApsaraMQ for RocketMQ instance.

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

-   ProductInfo: the extended configurations of the instance.
    
-   AclInfo: the information about access control.
    
-   ResourceGroupId: the ID of the resource group.
    
-   InstanceId: the ID of the instance.
    
-   NetworkInfo: the network information.
    
-   GroupCount: the number of consumer groups.
    
-   CreateTime: the time when the instance was created.
    
-   StartTime: the time when the instance was started.
    
-   TopicCount: the number of topics.
    
-   InstanceQuotas: the quotas of the instance.
    
-   SubSeriesCode: the sub-category edition of the instance.
    
-   Remark: the remarks of the instance.
    
-   InstanceName: the name of the instance.
    
-   ServiceCode: the code of the service to which the instance belongs.
    
-   SeriesCode: the primary edition of the instance.
    
-   ReleaseTime: the time when the instance was released.
    
-   UserId: the ID of the user who owns the instance.
    
-   UpdateTime: the time when the instance was last modified.
    
-   CommodityCode: the commodity code of the instance. The commodity code of ApsaraMQ for RocketMQ 5.0 instances has a similar format to ons\_rmqsub\_public\_cn.
    
-   PaymentType: the billing method of the instance.
    
-   Software: the software information of the instance.
    
-   ExpireTime: the expiration time of the instance.
    
-   AccountInfo: the account information.
    
-   Tags: a list of resource tags.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  InstanceId:
    Type: String
    Description:
      en: The ID of the RocketMQ instance.
    Required: true
Resources:
  ExtensionDataSource:
    Type: DATASOURCE::ROCKETMQ::Instance
    Properties:
      InstanceId:
        Ref: InstanceId
Outputs:
  ProductInfo:
    Description: The extended configurations of the instance.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ProductInfo
  AclInfo:
    Description: The information about access control.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - AclInfo
  ResourceGroupId:
    Description: The ID of the resource group.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ResourceGroupId
  InstanceId:
    Description: The ID of the RocketMQ instance.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - InstanceId
  NetworkInfo:
    Description: Instance network configuration information.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - NetworkInfo
  GroupCount:
    Description: The number of groups.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - GroupCount
  CreateTime:
    Description: The time when the instance was created.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - CreateTime
  StartTime:
    Description: The time when the instance was started.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - StartTime
  TopicCount:
    Description: The number of topics.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - TopicCount
  InstanceQuotas:
    Description: The instance quotas.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - InstanceQuotas
  SubSeriesCode:
    Description: The sub-category edition of the instance. For information about the differences between sub-category edition instances.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - SubSeriesCode
  Remark:
    Description: The description of the instance.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Remark
  InstanceName:
    Description: The name of instance.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - InstanceName
  ServiceCode:
    Description: The code of the service to which the instance belongs. The service code of ApsaraMQ for RocketMQ is rmq.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ServiceCode
  SeriesCode:
    Description: The primary edition of the instance.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - SeriesCode
  ReleaseTime:
    Description: The time when the instance was released.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ReleaseTime
  UserId:
    Description: The ID of the user who owns the instance.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - UserId
  UpdateTime:
    Description: The time when the instance was last modified.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - UpdateTime
  CommodityCode:
    Description: The commodity code of the instance. The commodity code of a ApsaraMQ for RocketMQ 5.0 instance has a similar format as ons_rmqsub_public_cn.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - CommodityCode
  PaymentType:
    Description: The billing method of the instance.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - PaymentType
  Software:
    Description: The instance software information.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Software
  ExpireTime:
    Description: The time when the instance expires.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ExpireTime
  AccountInfo:
    Description: The account information.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - AccountInfo
  Tags:
    Description: The tags of the RocketMQ instance.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Tags
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "InstanceId": {
      "Type": "String",
      "Description": {
        "en": "The ID of the RocketMQ instance."
      },
      "Required": true
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::ROCKETMQ::Instance",
      "Properties": {
        "InstanceId": {
          "Ref": "InstanceId"
        }
      }
    }
  },
  "Outputs": {
    "ProductInfo": {
      "Description": "The extended configurations of the instance.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ProductInfo"
        ]
      }
    },
    "AclInfo": {
      "Description": "The information about access control.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "AclInfo"
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
    "InstanceId": {
      "Description": "The ID of the RocketMQ instance.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "InstanceId"
        ]
      }
    },
    "NetworkInfo": {
      "Description": "Instance network configuration information.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "NetworkInfo"
        ]
      }
    },
    "GroupCount": {
      "Description": "The number of groups.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "GroupCount"
        ]
      }
    },
    "CreateTime": {
      "Description": "The time when the instance was created.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "CreateTime"
        ]
      }
    },
    "StartTime": {
      "Description": "The time when the instance was started.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "StartTime"
        ]
      }
    },
    "TopicCount": {
      "Description": "The number of topics.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "TopicCount"
        ]
      }
    },
    "InstanceQuotas": {
      "Description": "The instance quotas.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "InstanceQuotas"
        ]
      }
    },
    "SubSeriesCode": {
      "Description": "The sub-category edition of the instance. For information about the differences between sub-category edition instances.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "SubSeriesCode"
        ]
      }
    },
    "Remark": {
      "Description": "The description of the instance.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Remark"
        ]
      }
    },
    "InstanceName": {
      "Description": "The name of instance.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "InstanceName"
        ]
      }
    },
    "ServiceCode": {
      "Description": "The code of the service to which the instance belongs. The service code of ApsaraMQ for RocketMQ is rmq.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ServiceCode"
        ]
      }
    },
    "SeriesCode": {
      "Description": "The primary edition of the instance.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "SeriesCode"
        ]
      }
    },
    "ReleaseTime": {
      "Description": "The time when the instance was released.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ReleaseTime"
        ]
      }
    },
    "UserId": {
      "Description": "The ID of the user who owns the instance.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "UserId"
        ]
      }
    },
    "UpdateTime": {
      "Description": "The time when the instance was last modified.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "UpdateTime"
        ]
      }
    },
    "CommodityCode": {
      "Description": "The commodity code of the instance. The commodity code of a ApsaraMQ for RocketMQ 5.0 instance has a similar format as ons_rmqsub_public_cn.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "CommodityCode"
        ]
      }
    },
    "PaymentType": {
      "Description": "The billing method of the instance.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "PaymentType"
        ]
      }
    },
    "Software": {
      "Description": "The instance software information.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Software"
        ]
      }
    },
    "ExpireTime": {
      "Description": "The time when the instance expires.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ExpireTime"
        ]
      }
    },
    "AccountInfo": {
      "Description": "The account information.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "AccountInfo"
        ]
      }
    },
    "Tags": {
      "Description": "The tags of the RocketMQ instance.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Tags"
        ]
      }
    }
  }
}
                        
```

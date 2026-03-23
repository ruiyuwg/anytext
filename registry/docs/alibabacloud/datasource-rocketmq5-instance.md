DATASOURCE::ROCKETMQ5::Instance is used to query the information about an instance.

## Syntax

```
{
  "Type": "DATASOURCE::ROCKETMQ5::Instance",
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

The ID of the instance.

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

-   AclInfo: the information about access control.
    
-   ResourceGroupId: the ID of the resource group.
    
-   GroupCount: the number of consumer groups.
    
-   TopicCount: the number of topics.
    
-   SubSeriesCode: the sub-category edition of the instance.
    
-   Remark: the remarks on the instance.
    
-   ServiceCode: the code of the service to which the instance belongs. The service code of ApsaraMQ for RocketMQ is rmq.
    
-   ExtConfig: the extended configurations.
    
-   CommodityCode: the commodity code of the instance. The commodity code of ApsaraMQ for RocketMQ 5.0 instances has a similar format to ons\_rmqsub\_public\_cn.
    
-   PaymentType: the billing method of the instance.
    
-   Bid: the business ID (BID) of the commodity.
    
-   AccountInfo: the information about the account.
    
-   Tags: the tags of the instance.
    
-   Status: the status of the instance.
    
-   ProductInfo: the extended configurations of the instance.
    
-   InstanceId: the ID of the instance.
    
-   NetworkInfo: the information about the network.
    
-   CreateTime: the creation time of the instance.
    
-   StartTime: the start time of the instance.
    
-   InstanceQuotas: the quotas of the instance.
    
-   InstanceName: the name of the instance.
    
-   SeriesCode: the primary edition of the instance.
    
-   ReleaseTime: the deletion time of the instance.
    
-   UserId: the ID of the user who owns the instance.
    
-   UpdateTime: the most recent modification time of the instance.
    
-   Software: the information about the instance software.
    
-   ExpireTime: the expiration time of the instance.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  InstanceId:
    Type: String
    Description:
      en: The ID of the instance that you want to query.
    Required: true
Resources:
  ExtensionDataSource:
    Type: DATASOURCE::ROCKETMQ5::Instance
    Properties:
      InstanceId:
        Ref: InstanceId
Outputs:
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
  GroupCount:
    Description: The number of groups.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - GroupCount
  TopicCount:
    Description: The number of topics.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - TopicCount
  SubSeriesCode:
    Description: 'The sub-category edition of the instance. '
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
  ServiceCode:
    Description: 'The code of the service to which the instance belongs. The service code of ApsaraMQ for RocketMQ is rmq. '
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ServiceCode
  ExtConfig:
    Description: The extended configurations. We recommend you configure productInfo, internetInfo, or aclInfo instead of this parameter.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ExtConfig
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
  Bid:
    Description: The business ID (BID) of the commodity.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Bid
  AccountInfo:
    Description: The account information.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - AccountInfo
  Tags:
    Description: The resource tags.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Tags
  Status:
    Description: The status of the instance.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - Status
  ProductInfo:
    Description: The extended configurations of the instance.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ProductInfo
  InstanceId:
    Description: The ID of the RocketMQ instance.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - InstanceId
  NetworkInfo:
    Description: 'The network information. '
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - NetworkInfo
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
  InstanceQuotas:
    Description: The instance quotas.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - InstanceQuotas
  InstanceName:
    Description: The name of the instance.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - InstanceName
  SeriesCode:
    Description: 'The primary edition of the instance. '
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
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "InstanceId": {
      "Type": "String",
      "Description": {
        "en": "The ID of the instance that you want to query."
      },
      "Required": true
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::ROCKETMQ5::Instance",
      "Properties": {
        "InstanceId": {
          "Ref": "InstanceId"
        }
      }
    }
  },
  "Outputs": {
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
    "GroupCount": {
      "Description": "The number of groups.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "GroupCount"
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
    "SubSeriesCode": {
      "Description": "The sub-category edition of the instance. ",
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
    "ServiceCode": {
      "Description": "The code of the service to which the instance belongs. The service code of ApsaraMQ for RocketMQ is rmq. ",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ServiceCode"
        ]
      }
    },
    "ExtConfig": {
      "Description": "The extended configurations. We recommend you configure productInfo, internetInfo, or aclInfo instead of this parameter.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ExtConfig"
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
    "Bid": {
      "Description": "The business ID (BID) of the commodity.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Bid"
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
      "Description": "The resource tags.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Tags"
        ]
      }
    },
    "Status": {
      "Description": "The status of the instance.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Status"
        ]
      }
    },
    "ProductInfo": {
      "Description": "The extended configurations of the instance.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ProductInfo"
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
      "Description": "The network information. ",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "NetworkInfo"
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
    "InstanceQuotas": {
      "Description": "The instance quotas.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "InstanceQuotas"
        ]
      }
    },
    "InstanceName": {
      "Description": "The name of the instance.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "InstanceName"
        ]
      }
    },
    "SeriesCode": {
      "Description": "The primary edition of the instance. ",
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
    }
  }
}
                        
```

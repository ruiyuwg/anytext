DATASOURCE::REDIS::InstanceClasses is used to query Tair (Redis OSS-compatible) instance types.

## Syntax

```
{
  "Type": "DATASOURCE::REDIS::InstanceClasses",
  "Properties": {
    "OrderType": String,
    "ZoneId": String,
    "ResourceGroupId": String,
    "InstanceId": String,
    "InstanceChargeType": String,
    "NodeId": String,
    "ProductType": String,
    "AcceptLanguage": String,
    "Engine": String,
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

OrderType

String

No

Yes

The order type.

Valid values:

-   BUY: You place an order to purchase resources.
    
-   UPGRADE: You place an order to upgrade instance specifications.
    
-   DOWNGRADE: You place an order to downgrade instance specifications.
    

ZoneId

String

No

Yes

The zone ID.

You can call the [DescribeZones](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-describezones-redis) operation to query supported zones.

ResourceGroupId

String

No

Yes

The ID of the resource group.

None.

InstanceId

String

No

Yes

The instance ID.

You must specify this property when OrderType is set to UPGRADE or RENEW.

InstanceChargeType

String

No

Yes

The billing method.

Valid values:

-   PrePaid: subscription
    
-   PostPaid (default): pay-as-you-go
    

NodeId

String

No

Yes

The ID of the data node.

You can call the [DescribeLogicInstanceTopology](/help/en/redis/developer-reference/api-r-kvstore-2015-01-01-describelogicinstancetopology-redis) operation to query data node IDs.

**Note**

This property takes effect when InstanceId is specified and the specified instance uses the cluster architecture or read/write splitting architecture.

ProductType

String

No

Yes

The product type.

Valid values:

-   Local: Community Edition instances that use local disks or Tair (Enterprise Edition) performance-enhanced instances that use local disks
    
-   Tair\_rdb: Tair (Enterprise Edition) performance-enhanced instances that use cloud disks
    
-   Tair\_scm: Tair (Enterprise Edition) persistent memory-optimized instances
    
-   Tair\_essd: Tair (Enterprise Edition) storage-optimized instances
    
-   OnECS: Community Edition instances that use the standard architecture and cloud disks
    

AcceptLanguage

String

No

Yes

The language in which return values are displayed.

Valid values:

-   zh-CN (default): Chinese
    
-   en-US: English
    

Engine

String

No

Yes

The type of the database engine.

Valid values:

-   Redis
    
-   Memcache
    

RefreshOptions

String

No

Yes

The refresh policy for data source resources when the stack is updated.

Valid values:

-   Never (default): does not refresh data source resources when the stack is updated.
    
-   Always: refreshes data source resources when the stack is updated.
    

## Return values (Fn::GetAtt)

-   InstanceClassIds: the instance types.
    
-   InstanceClasses: details of the instance types.
    

**Property**

**Type**

**Description**

**Constraint**

InstanceClassIds

List

The instance types.

None.

InstanceClasses

List

Details of the instance types.

None.

ZoneId

String

The zone ID.

None.

InstanceClass

String

The instance type.

None.

SupportedNodeType

List

The node types.

Valid values:

-   single: standalone
    
-   double: master-replica
    

ShardNumber

String

The number of shards.

None.

Architecture

String

The architecture.

Valid values:

-   standard: standard architecture
    
-   cluster: cluster architecture
    
-   rwsplit: read/write splitting architecture
    

Version

String

The version of the database engine.

None.

SeriesType

String

The series.

Valid values:

-   enhanced\_performance\_type: performance-enhanced instance
    
-   hybrid\_storage: hybrid-storage instance
    

EditionType

String

The edition of the instance.

Valid values:

-   Community: Community Edition
    
-   Enterprise: Tair (Enterprise Edition)
    

Engine

String

The type of the database engine.

Valid values:

-   Redis
    
-   Memcache
    

Capacity

Number

The memory size.

Unit: MB.

## Examples

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "OrderType": {
      "Type": "String",
      "Description": "The order type. Valid values:\nBUY: the orders that are used to purchase instances.\nUPGRADE: the orders that are used to upgrade instances.\nDOWNGRADE: the orders that are used to downgrade instances."
    },
    "ZoneId": {
      "Type": "String",
      "Description": "The ID of the zone where PolarDB resources that you want to query reside.\nNote You can call the DescribeRegions operation to query information about zones."
    },
    "ResourceGroupId": {
      "Type": "String",
      "Description": "The ID of the instance.\n Note This parameter is required only if the OrderType parameter is set to UPGRADE or RENEW."
    },
    "InstanceId": {
      "Type": "String",
      "Description": "The ID of the resource group. You can call the ListResourceGroups operation to query the IDs of resource groups.\n Note You can also query the IDs of resource groups in the Resource Management console. For more information, see View basic information about a resource group."
    },
    "InstanceChargeType": {
      "Type": "String",
      "Description": "The billing method. Valid values:\nPrePaid: subscription\nPostPaid: pay-as-you-go\nNote Default value: PrePaid.",
      "Default": "PrePaid"
    },
    "NodeId": {
      "Type": "String",
      "Description": "The ID of the data node for which you want to query available instance types. You can call the DescribeLogicInstanceTopology operation to query the ID of the data node. Remove the number sign (#) and the content that follows the number sign. For example, retain only r-bp10noxlhcoim2****-db-0.\n Note Before you set this parameter, you must set the InstanceId parameter to the ID of an instance in the cluster or read/write splitting architecture."
    },
    "ProductType": {
      "Type": "String",
      "Description": "The edition or series of instances. Valid values:\n Local: ApsaraDB for Redis Community Edition instances or performance-enhanced instances of ApsaraDB for Redis Enhanced Edition (Tair)\n Tair_scm: persistent memory-optimized instances\n Tair_essd: storage-optimized instances"
    },
    "AcceptLanguage": {
      "Type": "String",
      "Description": "The language of the return values. Valid values:\n zh-CN: Chinese. This is the default value.\n en-US: English."
    },
    "Engine": {
      "Type": "String",
      "Description": "The engine type. Valid values:\nRedis\nMemcache"
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::REDIS::InstanceClasses",
      "Properties": {
        "OrderType": {
          "Ref": "OrderType"
        },
        "ZoneId": {
          "Ref": "ZoneId"
        },
        "ResourceGroupId": {
          "Ref": "ResourceGroupId"
        },
        "InstanceId": {
          "Ref": "InstanceId"
        },
        "InstanceChargeType": {
          "Ref": "InstanceChargeType"
        },
        "NodeId": {
          "Ref": "NodeId"
        },
        "ProductType": {
          "Ref": "ProductType"
        },
        "AcceptLanguage": {
          "Ref": "AcceptLanguage"
        },
        "Engine": {
          "Ref": "Engine"
        }
      }
    }
  },
  "Outputs": {
    "InstanceClasses": {
      "Description": "The list of instance classes.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "InstanceClasses"
        ]
      }
    },
    "InstanceClassIds": {
      "Description": "The list of db instance class ids.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "InstanceClassIds"
        ]
      }
    }
  }
}
```

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  AcceptLanguage:
    Description: "The language of the return values. Valid values:\n zh-CN: Chinese.\
      \ This is the default value.\n en-US: English."
    Type: String
  Engine:
    Description: 'The engine type. Valid values:

      Redis

      Memcache'
    Type: String
  InstanceChargeType:
    Default: PrePaid
    Description: 'The billing method. Valid values:

      PrePaid: subscription

      PostPaid: pay-as-you-go

      Note Default value: PrePaid.'
    Type: String
  InstanceId:
    Description: "The ID of the resource group. You can call the ListResourceGroups\
      \ operation to query the IDs of resource groups.\n Note You can also query the\
      \ IDs of resource groups in the Resource Management console. For more information,\
      \ see View basic information about a resource group."
    Type: String
  NodeId:
    Description: "The ID of the data node for which you want to query available instance\
      \ types. You can call the DescribeLogicInstanceTopology operation to query the\
      \ ID of the data node. Remove the number sign (#) and the content that follows\
      \ the number sign. For example, retain only r-bp10noxlhcoim2****-db-0.\n Note\
      \ Before you set this parameter, you must set the InstanceId parameter to the\
      \ ID of an instance in the cluster or read/write splitting architecture."
    Type: String
  OrderType:
    Description: 'The order type. Valid values:

      BUY: the orders that are used to purchase instances.

      UPGRADE: the orders that are used to upgrade instances.

      DOWNGRADE: the orders that are used to downgrade instances.'
    Type: String
  ProductType:
    Description: "The edition or series of instances. Valid values:\n Local: ApsaraDB\
      \ for Redis Community Edition instances or performance-enhanced instances of\
      \ ApsaraDB for Redis Enhanced Edition (Tair)\n Tair_scm: persistent memory-optimized\
      \ instances\n Tair_essd: storage-optimized instances"
    Type: String
  ResourceGroupId:
    Description: "The ID of the instance.\n Note This parameter is required only if\
      \ the OrderType parameter is set to UPGRADE or RENEW."
    Type: String
  ZoneId:
    Description: 'The ID of the zone where PolarDB resources that you want to query
      reside.

      Note You can call the DescribeRegions operation to query information about zones.'
    Type: String
Resources:
  ExtensionDataSource:
    Properties:
      AcceptLanguage:
        Ref: AcceptLanguage
      Engine:
        Ref: Engine
      InstanceChargeType:
        Ref: InstanceChargeType
      InstanceId:
        Ref: InstanceId
      NodeId:
        Ref: NodeId
      OrderType:
        Ref: OrderType
      ProductType:
        Ref: ProductType
      ResourceGroupId:
        Ref: ResourceGroupId
      ZoneId:
        Ref: ZoneId
    Type: DATASOURCE::REDIS::InstanceClasses
Outputs:
  InstanceClassIds:
    Description: The list of db instance class ids.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - InstanceClassIds
  InstanceClasses:
    Description: The list of instance classes.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - InstanceClasses
```

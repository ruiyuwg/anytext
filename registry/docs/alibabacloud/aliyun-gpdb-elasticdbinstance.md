ALIYUN::GPDB::ElasticDBInstance is used to create an AnalyticDB for PostgreSQL instance in elastic storage mode.

## Syntax

```
   {
  "Type": "ALIYUN::GPDB::ElasticDBInstance",
  "Properties": {    
    "EngineVersion": String,   
    "InstanceSpec": String,
    "ZoneId": String,
    "VSwitchId": String,
    "SegNodeNum": Integer,
    "SegStorageType": String,
    "StorageSize": Integer,
    "MasterNodeNum": Integer,
    "EncryptionType": String,
    "EncryptionKey": String,
    "VPCId": String,
    "SecurityIPList": String,
    "DBInstanceDescription": String,
    "PrivateIpAddress": String,
    "ZoneId": String,
    "Period": Integer, 
    "PayType": String,
    "DBInstanceCategory": String,
    "DBInstanceMode": String,
    "PeriodUnit": String,
    "Tags": List  
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

EngineVersion

String

Yes

No

The engine version of the instance.

Examples:

-   6.0: 6.0 Standard Edition
    
-   6.0x: 6.0 Vector Enhanced Edition
    

InstanceSpec

String

Yes

No

The specification of the instance.

Valid values:

-   2C16G
    
-   4C32G
    
-   16C128G
    

ZoneId

String

Yes

No

The zone ID.

Example: cn-hangzhou-h.

For more information about zone IDs, see [DescribeRegions](/help/en/analyticdb/analyticdb-for-postgresql/developer-reference/api-gpdb-2016-05-03-describeregions).

VSwitchId

String

Yes

No

The vSwitch ID.

Example: vsw-bp183p93qs667muql\*\*\*\*.

SegNodeNum

Integer

Yes

No

The number of nodes.

Valid values: 4 to 512.

SegStorageType

String

Yes

No

The disk category of the node.

Set the value to cloud\_essd.

StorageSize

Integer

Yes

No

The storage capacity of the node.

Valid values: 50 to 4000.

Unit: GB.

**Note**

You can adjust the value in increments of 50 GB.

MasterNodeNum

Integer

No

No

The number of coordinator nodes.

Valid values: 1 and 2.

EncryptionType

String

No

No

Specifies whether to enable disk encryption.

Valid values:

-   NULL (default): does not enable disk encryption.
    
-   CloudDisk: enables disk encryption. After you enable disk encryption, you must use EncryptionKey to specify an encryption key.
    

**Note**

You cannot disable disk encryption after you enable it.

EncryptionKey

String

No

No

The ID of the encryption key.

When EncryptionType is set to CloudDisk, you must specify the ID of a key that resides in the same region as the disk for EncryptionKey. Otherwise, the system considers that EncryptionKey is empty.

VPCId

String

No

No

The virtual private cloud (VPC) ID.

Example: vpc-bp1m6fww66xbntjyc\*\*\*\*.

SecurityIPList

String

No

Yes

The IP address whitelist.

Default value: 127.0.0.1.

DBInstanceDescription

String

No

Yes

The description of the instance.

Example: AnalyticDB for PostgreSQL instance.

The description can be up to 256 characters in length.

PrivateIpAddress

String

No

No

The private IP address.

None.

ZoneId

String

No

No

The zone ID.

None.

InstanceChargeType

String

No

No

The billing method.

Valid values:

-   Postpaid: pay-as-you-go
    
-   Prepaid: subscription
    

Period

Integer

No

No

The subscription duration.

This property takes effect only when you set the InstanceChargeType property to Prepaid.

-   Valid values if the PeriodUnit property is set to Month: 1, ,2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, and 60. Default value: 1.  
    
-   Valid values if the PeriodUnit property is set to Year: 1, 2, and 3. Default value: 1.  
    

DBInstanceCategory

String

No

No

The instance edition.

Valid values:

-   HighAvailability: High-availability Edition
    
-   Basic: Basic Edition
    

**Note**

This property is required when you create an instance in elastic storage mode.

DBInstanceMode

String

No

No

The resource mode of the instance.

Valid values:

-   StorageElastic: elastic storage mode
    
-   Serverless: Serverless mode
    
-   Classic: reserved storage mode
    

PeriodUnit

String

No

No

The unit of the subscription duration.

Valid values:

-   Month (default)
    
-   Year
    

Tags

List

No

Yes

The tags of the instance.

You can add up to 20 tags when you create an instance. Each tag consists of the Key and Value properties. For more information, see [Tags properties](#section-inj-lxd-lfb).

## Tags syntax

```
"Tags" : [
  {
    "Value" : String,
    "Key" : String
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

The tag key must be 1 to 128 characters in length, and cannot contain `http://` or `https://`. The tag key cannot start with `aliyun` or `acs:`.

Value

String

No

No

The tag value.

The tag value can be up to 128 characters in length and cannot contain `http://` or `https://`. The tag value cannot start with `aliyun` or `acs:`.

## Return values

Fn::GetAtt

-   DBInstanceId: the instance ID.
    
-   Port: the port number.
    
-   OrderId: the order ID.
    
-   ConnectionString: the endpoint.
    

## Examples

`YAML` format

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  ZoneId:
    Type: String
  VpcId:
    Type: String
    AssociationProperty: 'ALIYUN::ECS::VPC::VPCId'
  VSwitchId:
    Type: String
    AssociationProperty: 'ALIYUN::ECS::VSwitch::VSwitchId'
    AssociationPropertyMetadata:
      ZoneId: ZoneId
      VpcId: VpcId
Resources:
  DBInstance:
    Type: 'ALIYUN::GPDB::ElasticDBInstance'
    Properties:
      ZoneId:
        Ref: ZoneId
      VPCId:
        Ref: VpcId
      VSwitchId:
        Ref: VSwitchId
      EngineVersion: '6.0'
      InstanceSpec: 2C16G
      SegNodeNum: 8
      SegStorageType: cloud_essd
      StorageSize: 100
Outputs:
  OrderId:
    Value:
      'Fn::GetAtt':
        - DBInstance
        - OrderId
  ConnectionString:
    Value:
      'Fn::GetAtt':
        - DBInstance
        - ConnectionString
  DBInstanceId:
    Value:
      'Fn::GetAtt':
        - DBInstance
        - DBInstanceId
  Port:
    Value:
      'Fn::GetAtt':
        - DBInstance
        - Port
```

`JSON` format

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "ZoneId": {
      "Type": "String"
    },
    "VpcId": {
      "Type": "String",
      "AssociationProperty": "ALIYUN::ECS::VPC::VPCId"
    },
    "VSwitchId": {
      "Type": "String",
      "AssociationProperty": "ALIYUN::ECS::VSwitch::VSwitchId",
      "AssociationPropertyMetadata": {
        "ZoneId": "ZoneId",
        "VpcId": "VpcId"
      }
    }
  },
  "Resources": {
    "DBInstance": {
      "Type": "ALIYUN::GPDB::ElasticDBInstance",
      "Properties": {
        "ZoneId": {
          "Ref": "ZoneId"
        },
        "VPCId": {
          "Ref": "VpcId"
        },
        "VSwitchId": {
          "Ref": "VSwitchId"
        },
        "EngineVersion": "6.0",
        "InstanceSpec": "2C16G",
        "SegNodeNum": 8,
        "SegStorageType": "cloud_essd",
        "StorageSize": 100
      }
    }
  },
  "Outputs": {
    "OrderId": {
      "Value": { "Fn::GetAtt": ["DBInstance", "OrderId"] }
    },
    "ConnectionString": {
      "Value": { "Fn::GetAtt": ["DBInstance", "ConnectionString"] }
    },
    "DBInstanceId": {
      "Value": { "Fn::GetAtt": ["DBInstance", "DBInstanceId"] }
    },
    "Port": {
      "Value": { "Fn::GetAtt": ["DBInstance", "Port"] }
    }
  }
}
```

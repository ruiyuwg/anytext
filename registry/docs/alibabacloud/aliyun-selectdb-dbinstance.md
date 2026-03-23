ALIYUN::SELECTDB::DBInstance is used to create an ApsaraDB for SelectDB instance.

## Syntax

```
{
  "Type": "ALIYUN::SELECTDB::DBInstance",
  "Properties": {
    "CacheSize": Integer,
    "ChargeType": String,
    "DBInstanceClass": String,
    "EngineVersion": String,
    "VSwitchId": String,
    "VpcId": String,
    "ZoneId": String,
    "AccountPassword": String,
    "ConnectionString": String,
    "DBInstanceDescription": String,
    "Engine": String,
    "Period": String,
    "ResourceGroupId": String,
    "SecurityIPList": List,
    "Tags": List,
    "UsedTime": Integer
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

CacheSize

Integer

Yes

No

The reserved cache size.

None.

ChargeType

String

Yes

No

The billing method of the instance.

Valid values:

-   **Postpaid**: pay-as-you-go.
    
-   **Prepaid**: subscription.
    

DBInstanceClass

String

Yes

No

The instance type.

Valid values:

-   **selectdb.xlarge**: 4 vCPUs and 32 GB of memory.
    
-   **selectdb.2xlarge**: 8 vCPUs and 64 GB of memory.
    
-   **selectdb.4xlarge**: 16 vCPUs and 128 GB of memory.
    

EngineVersion

String

Yes

No

The version of the database engine.

Valid values:

-   3.0
    
-   4.0
    

VSwitchId

String

Yes

No

The ID of the vSwitch.

None.

VpcId

String

Yes

No

The ID of the virtual private cloud (VPC).

None.

ZoneId

String

Yes

No

The ID of the zone.

None.

AccountPassword

String

No

No

The password of the database admin account.

The password must meet the following requirements:

-   The password must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.
    
-   The following special characters are supported: `! @ # $ % ^ & * ( ) _ + - =`
    
-   The password must be 8 to 32 characters in length.
    

ConnectionString

String

No

No

The endpoint that is used to connect to the database.

None.

DBInstanceDescription

String

No

No

The description of the instance.

None.

Engine

String

No

No

The type of the database engine.

Default value: **selectdb**.

Period

String

No

No

The unit of the subscription duration of the cluster.

Valid values:

-   **Year**
    
-   **Month**
    

**Note**

This property must be specified only when **ChargeType** is set to **Prepaid**.

ResourceGroupId

String

No

No

The ID of the resource group.

None.

SecurityIPList

List

No

No

The IP addresses in the IP address whitelist of the instance.

You can specify up to 1,000 IP addresses in the whitelist.

Tags

List

No

No

The tags of the instance.

You can add up to 20 tags. For more information, see [Tags properties](#b34c36ffa8cij).

UsedTime

Integer

No

No

The subscription duration of the instance.

Valid values:

-   Valid values when Period is set to Year: 1, 2, 3, and 5. The value must be an integer.
    
-   Valid values when Period is set to Month: 1 to 9. The value must be an integer.
    

**Note**

This property must be specified only when **ChargeType** is set to **Prepaid**.

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

**Editable**

**Description**

**Constraint**

Key

String

Yes

No

The key of the tag.

None.

Value

String

No

No

The value of the tag.

None.

## Return values

Fn::GetAtt

DBInstanceId: the ID of the instance.

VpcConnectionString: the VPC endpoint of the instance.

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  EngineVersion:
    Type: String
    Description:
      en: Database version.
    AllowedValues:
      - '3.0'
      - '4.0'
    Required: true
  ZoneId:
    AssociationProperty: ZoneId
    Type: String
    Description:
      en: Availability Zone ID.
    Required: true
  DBInstanceClass:
    Type: String
    Description:
      en: |-
        The class of the DB instance.
        Call DescribeAllDBInstanceClass API to check the latest class list
    Required: true
  VSwitchId:
    AssociationPropertyMetadata:
      VpcId: ${VpcId}
      ZoneId: ${ZoneId}
    AssociationProperty: ALIYUN::VPC::VSwitch::VSwitchId
    Type: String
    Description:
      en: Switch ID.
    Required: true
  CacheSize:
    Type: Number
    Description:
      en: Reserve cache size.
    Required: true
    MinValue: 100
    MaxValue: 4000
  VpcId:
    AssociationProperty: ALIYUN::ECS::VPC::VPCId
    Type: String
    Description:
      en: VPC id.
    Required: true
  ChargeType:
    Type: String
    Description:
      en: |-
        The paid type of instance.Value:
        Postpaid: Postpaid (pay per quantity).
        Prepaid: Prepaid (year and monthly).
    AllowedValues:
      - Postpaid
      - Prepaid
    Required: true
Resources:
  DBInstance:
    Type: ALIYUN::SELECTDB::DBInstance
    Properties:
      EngineVersion:
        Ref: EngineVersion
      ZoneId:
        Ref: ZoneId
      DBInstanceClass:
        Ref: DBInstanceClass
      VSwitchId:
        Ref: VSwitchId
      CacheSize:
        Ref: CacheSize
      VpcId:
        Ref: VpcId
      ChargeType:
        Ref: ChargeType
Outputs:
  DBInstanceId:
    Description: Instance ID.
    Value:
      Fn::GetAtt:
        - DBInstance
        - DBInstanceId
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "EngineVersion": {
      "Type": "String",
      "Description": {
        "en": "Database version."
      },
      "AllowedValues": [
        "3.0",
        "4.0"
      ],
      "Required": true
    },
    "ZoneId": {
      "AssociationProperty": "ZoneId",
      "Type": "String",
      "Description": {
        "en": "Availability Zone ID."
      },
      "Required": true
    },
    "DBInstanceClass": {
      "Type": "String",
      "Description": {
        "en": "The class of the DB instance.\nCall DescribeAllDBInstanceClass API to check the latest class list"
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
        "en": "Switch ID."
      },
      "Required": true
    },
    "CacheSize": {
      "Type": "Number",
      "Description": {
        "en": "Reserve cache size."
      },
      "Required": true,
      "MinValue": 100,
      "MaxValue": 4000
    },
    "VpcId": {
      "AssociationProperty": "ALIYUN::ECS::VPC::VPCId",
      "Type": "String",
      "Description": {
        "en": "VPC id."
      },
      "Required": true
    },
    "ChargeType": {
      "Type": "String",
      "Description": {
        "en": "The paid type of instance.Value:\nPostpaid: Postpaid (pay per quantity).\nPrepaid: Prepaid (year and monthly)."
      },
      "AllowedValues": [
        "Postpaid",
        "Prepaid"
      ],
      "Required": true
    }
  },
  "Resources": {
    "DBInstance": {
      "Type": "ALIYUN::SELECTDB::DBInstance",
      "Properties": {
        "EngineVersion": {
          "Ref": "EngineVersion"
        },
        "ZoneId": {
          "Ref": "ZoneId"
        },
        "DBInstanceClass": {
          "Ref": "DBInstanceClass"
        },
        "VSwitchId": {
          "Ref": "VSwitchId"
        },
        "CacheSize": {
          "Ref": "CacheSize"
        },
        "VpcId": {
          "Ref": "VpcId"
        },
        "ChargeType": {
          "Ref": "ChargeType"
        }
      }
    }
  },
  "Outputs": {
    "DBInstanceId": {
      "Description": "Instance ID.",
      "Value": {
        "Fn::GetAtt": [
          "DBInstance",
          "DBInstanceId"
        ]
      }
    }
  }
}
                        
```

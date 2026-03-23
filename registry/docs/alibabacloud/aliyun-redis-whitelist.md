The ALIYUN::REDIS::Whitelist type sets the IP whitelist for a Redis instance.

## Syntax

```
{
  "Type": "ALIYUN::REDIS::Whitelist",
  "Properties": {
    "InstanceId": String,
    "SecurityIpGroupName": String,
    "SecurityIpGroupAttribute": String,
    "SecurityIps": String
  }
}
```

## Properties

**Property Name**

**Type**

**Required**

**Updatable**

**Description**

**Constraint**

InstanceId

String

Yes

No

Redis instance ID (globally unique).

None

SecurityIpGroupName

String

No

No

Whitelist group name. Default value: default.

None

SecurityIpGroupAttribute

String

No

No

The attribute value of the whitelist group. Default is empty. The console does not display whitelist groups with a value of hidden.

None

SecurityIps

String

Yes

Yes

The IP list under the IP whitelist group. Separate IP addresses with English commas. Format: 0.0.0.0/0,10.23.12.24, or 10.23.12.24/24 (CIDR mode, Classless Inter-Domain Routing. /24 indicates the prefix length in the address, ranging from 1 to 32).

Maximum 1000

## Return Values

Fn::GetAtt

-   SecurityIpGroupName: Whitelist group name
    
-   SecurityIpGroupAttribute: Whitelist group attribute value
    
-   SecurityIps: IP address whitelist
    

## Examples

### **Scenario 1:** Add an IP whitelist for Redis.

[Quick Create](https://ros.console.alibabacloud.com/cn-hangzhou/templates/public/createStack?templateType=Example&templateUrl=https://ros-public-templates.oss-cn-hangzhou.aliyuncs.com/ros-templates/resources/redis/whitelist-case1.yml&pageTitle=为Redis添加 IP白名单&hideStepRow=true&hideStackConfig=true&isSimplified=true&balanceIntercept=true)

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  InstanceId:
    Type: String
    Description: Redis instance ID (globally unique)
    AssociationProperty: ALIYUN::Redis::Instance::InstanceId
Resources:
  Whitelist:
    Type: ALIYUN::REDIS::Whitelist
    Properties:
      InstanceId:
        Ref: InstanceId
      SecurityIpGroupName: ros
      SecurityIpGroupAttribute: show
      SecurityIps: 0.0.0.0/0
Outputs:
  SecurityIpGroupName:
    Description: Whitelist group name
    Value:
      Fn::GetAtt:
        - Whitelist
        - SecurityIpGroupName
  SecurityIpGroupAttribute:
    Description: Whitelist group attribute value
    Value:
      Fn::GetAtt:
        - Whitelist
        - SecurityIpGroupAttribute
  SecurityIps:
    Description: IP address whitelist
    Value:
      Fn::GetAtt:
        - Whitelist
        - SecurityIps
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "InstanceId": {
      "Type": "String",
      "Description": "Redis instance ID (globally unique)",
      "AssociationProperty": "ALIYUN::Redis::Instance::InstanceId"
    }
  },
  "Resources": {
    "Whitelist": {
      "Type": "ALIYUN::REDIS::Whitelist",
      "Properties": {
        "InstanceId": {
          "Ref": "InstanceId"
        },
        "SecurityIpGroupName": "ros",
        "SecurityIpGroupAttribute": "show",
        "SecurityIps": "0.0.0.0/0"
      }
    }
  },
  "Outputs": {
    "SecurityIpGroupName": {
      "Description": "Whitelist group name",
      "Value": {
        "Fn::GetAtt": [
          "Whitelist",
          "SecurityIpGroupName"
        ]
      }
    },
    "SecurityIpGroupAttribute": {
      "Description": "Whitelist group attribute value",
      "Value": {
        "Fn::GetAtt": [
          "Whitelist",
          "SecurityIpGroupAttribute"
        ]
      }
    },
    "SecurityIps": {
      "Description": "IP address whitelist",
      "Value": {
        "Fn::GetAtt": [
          "Whitelist",
          "SecurityIps"
        ]
      }
    }
  }
}
```

### **Scenario 2:** Create a Redis instance and add an IP whitelist.

[Quick Create](https://ros.console.alibabacloud.com/cn-hangzhou/templates/public/createStack?templateType=Example&templateUrl=https://ros-public-templates.oss-cn-hangzhou.aliyuncs.com/ros-templates/resources/redis/whitelist-case2.yml&pageTitle=创建Redis，并添加 IP白名单&hideStepRow=true&hideStackConfig=true&isSimplified=true&balanceIntercept=true)

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Description: {}
Parameters:
  VpcId:
    Type: String
    AssociationProperty: ALIYUN::ECS::VPC::VPCId
  ZoneId:
    Type: String
    Description: Before you create an instance, confirm that the Availability Zone supports the specifications of Redis resources.
    AssociationProperty: ALIYUN::ECS::Instance:ZoneId
    Label: Zone ID
  VSwitchId:
    Type: String
    AssociationProperty: ALIYUN::ECS::VSwitch::VSwitchId
    AssociationPropertyMetadata:
      VpcId: ${VpcId}
      ZoneId: ${ZoneId}
Resources:
  RedisInstance:
    Type: ALIYUN::REDIS::Instance
    Properties:
      VpcId:
        Ref: VpcId
      VSwitchId:
        Ref: VSwitchId
      InstanceClass: redis.master.small.default
      EvictionPolicy: noeviction
      ZoneId:
        Ref: ZoneId
      InstanceName: DefaultRedis
      Password: Admin@123!
  REDISWhitelist:
    Type: ALIYUN::REDIS::Whitelist
    Properties:
      InstanceId:
        Ref: RedisInstance
      SecurityIps: 192.168.0.0/16
Outputs:
  InstanceId:
    Value:
      Fn::GetAtt:
        - RedisInstance
        - InstanceId                     
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Description": {},
  "Parameters": {
    "VpcId": {
      "Type": "String",
      "AssociationProperty": "ALIYUN::ECS::VPC::VPCId"
    },
    "ZoneId": {
      "Type": "String",
      "Description": {
        "zh-cn": "Before creating an instance, confirm that the zone supports the specifications of Redis resources.",
        "en": "Before you create an instance, confirm that the Availability Zone supports the specifications of Redis resources."
      },
      "AssociationProperty": "ALIYUN::ECS::Instance:ZoneId",
      "Label": {
        "en": "Zone ID",
        "zh-cn": "Zone"
      }
    },
    "VSwitchId": {
      "Type": "String",
      "AssociationProperty": "ALIYUN::ECS::VSwitch::VSwitchId",
      "AssociationPropertyMetadata": {
        "VpcId": "${VpcId}",
        "ZoneId": "${ZoneId}"
      }
    }
  },
  "Resources": {
    "RedisInstance": {
      "Type": "ALIYUN::REDIS::Instance",
      "Properties": {
        "VpcId": {
          "Ref": "VpcId"
        },
        "VSwitchId": {
          "Ref": "VSwitchId"
        },
        "InstanceClass": "redis.master.small.default",
        "EvictionPolicy": "noeviction",
        "ZoneId": {
          "Ref": "ZoneId"
        },
        "InstanceName": "DefaultRedis",
        "Password": "Admin@123!"
      }
    },
    "REDISWhitelist": {
      "Type": "ALIYUN::REDIS::Whitelist",
      "Properties": {
        "InstanceId": {
          "Ref": "RedisInstance"
        },
        "SecurityIps": "192.168.0.0/16"
      }
    }
  },
  "Outputs": {
    "InstanceId": {
      "Value": {
        "Fn::GetAtt": [
          "RedisInstance",
          "InstanceId"
        ]
      }
    }
  }
}
```

### **Scenario 3:** Achieve cache synchronization between MySQL and Redis using DTS.

[Quick Create](https://ros.console.alibabacloud.com/cn-hangzhou/templates/public/createStack?templateType=Example&templateUrl=https://ros-public-templates.oss-cn-hangzhou.aliyuncs.com/ros-templates/resources/redis/whitelist-case3.yml&pageTitle=通过DTS实现MySQL与Redis的缓存同步&hideStepRow=true&hideStackConfig=true&isSimplified=true&balanceIntercept=true)

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Description:
  zh-cn: This template achieves cache synchronization between MySQL and Redis via DTS,
    encompassing the creation and security configuration of VPC, ECS, RDS, and Redis
    instances, alongside the establishment of consumer groups to ensure data consistency.
  en: This template achieves cache synchronization between MySQL and Redis via DTS,
    encompassing the creation and security configuration of VPC, ECS, RDS, and Redis
    instances, alongside the establishment of consumer groups to ensure data consistency.
Parameters:
  ZoneId:
    Type: String
    Label:
      en: VSwitch Availability Zone
      zh-cn: VSwitch Availability Zone
    AssociationProperty: ALIYUN::ECS::Instance::ZoneId
  RDSDBUser:
    Type: String
    Label:
      en: RDS DB Username
      zh-cn: RDS DB Username
    Description:
      en: Username of database.
      zh-cn: Username of database.
    ConstraintDescription:
      en: Consist of 2 to 16 characters of lowercase letters and underscores. Must begin with a letter and end with an alphanumeric character.
      zh-cn: Consist of 2 to 16 characters of lowercase letters and underscores. Must begin with a letter and end with an alphanumeric character.
    Default: demouser123
    MinLength: 2
    MaxLength: 16
  DbName:
    Type: String
    Label:
      en: RDS DB Name
      zh-cn: RDS DB Name
    ConstraintDescription:
      en: Consist of 2 to 16 characters of lowercase letters and underscores. Must begin with a letter and end with an alphanumeric character.
      zh-cn: Consist of 2 to 16 characters of lowercase letters and underscores. Must begin with a letter and end with an alphanumeric character.
    Default: demodb
    Required: true
    MinLength: 2
    MaxLength: 16
  RDSDBPassword:
    Type: String
    Label:
      en: RDS DB Password
      zh-cn: RDS DB Password
    Description:
      en: 'RDS database password, consisting of letters, numbers, and underscores (_),
        is 8 to 32 characters long. Must contain three different types of characters.'
      zh-cn: 'RDS database password, consisting of letters, numbers, and underscores (_),
        is 8 to 32 characters long. Must contain three different types of characters.'
    ConstraintDescription:
      en: 'Consisting of letters, numbers, and underscores (_),
        is 8 to 32 characters long.'
      zh-cn: 'Consisting of letters, numbers, and underscores (_),
        is 8 to 32 characters long.'
    AssociationProperty: ALIYUN::RDS::Instance::AccountPassword
    MinLength: 8
    MaxLength: 32
    NoEcho: true
  DBInstanceClass:
    Type: String
    Label:
      en: Instance Class
      zh-cn: Instance Class
    AssociationProperty: ALIYUN::RDS::Instance::InstanceType
    AssociationPropertyMetadata:
      ZoneId: ${ZoneId}
      EngineVersion: "8.0"
      Engine: MySQL
      Category: HighAvailability
      DBInstanceStorageType: cloud_essd
      CommodityCode: bards
    Default: mysql.x4.medium.2c
  DtsJobName:
    Type: String
    Label:
      en: DTS Job Name
      zh-cn: DTS Job Name
    Description:
      en: You are advised to configure a name with service significance (without unique requirement) for easy identification.
      zh-cn: You are advised to configure a name with service significance (without unique requirement) for easy identification.
    Default: mysql2redis_dts
  RedisInstanceClass:
    Type: String
    Label:
      en: Tair Specifications
      zh-cn: Tair Specifications
    Description:
      en: <font color='blue'>Before selecting a model, please confirm whether the model is in stock in the current availability zone. To save testing costs, it is recommended to use a model with 2 GB memory, for example: tair.rdb.2g</font>, see detail:<a href='https://www.alibabacloud.com/help/zh/redis/product-overview/enhanced-performance' target='_blank'><font color='red'>Specification inquiry</font></a>.
      zh-cn: <font color='blue'>Before selecting a model, please confirm whether the model is in stock in the current availability zone. To save testing costs, it is recommended to use a model with 2 GB memory, for example: tair.rdb.2g</font>, see detail:<a href='https://www.alibabacloud.com/help/zh/redis/product-overview/enhanced-performance' target='_blank'><font color='red'>Specification inquiry</font></a>.
    AssociationProperty: ALIYUN::REDIS::Instance::InstanceClass
    AssociationPropertyMetadata:
      Engine: Redis
      ProductType: Tair_rdb
      InstanceChargeType: PostPaid
      ZoneId: ${ZoneId1}
      OrderType: BUY
    Default: tair.rdb.2g
  RedisPassword:
    Type: String
    Label:
      en: Instance Password
      zh-cn: Instance Password
    Description:
      en: 'Length 8 to 32 characters. Can contain uppercase and lowercase letters, numbers, and special symbols, including the following: ! @ # $ % ^ & * ( ) _ + - ='
      zh-cn: 'Length 8 to 32 characters. Can contain uppercase and lowercase letters, numbers, and special symbols, including the following: ! @ # $ % ^ & * ( ) _ + - ='
    ConstraintDescription:
      en: '8 to 32 characters. Can contain uppercase and lowercase letters, numbers, and special symbols, including the following: ! @ # $ % ^ & * ( ) _ + - ='
      zh-cn: '8 to 32 characters. Can contain uppercase and lowercase letters, numbers, and special symbols, including the following: ! @ # $ % ^ & * ( ) _ + - ='
    MinLength: '8'
    MaxLength: '32'
    NoEcho: true
Resources:
  Vpc:
    Type: ALIYUN::ECS::VPC
    Properties:
      CidrBlock: 192.168.0.0/16
  VSwitch:
    Type: ALIYUN::ECS::VSwitch
    Properties:
      ZoneId:
        Ref: ZoneId
      VpcId:
        Ref: Vpc
      VSwitchName:
        Fn::Join:
          - '-'
          - - VSwitch
            - StackId
            - Ref: ALIYUN::StackId
      CidrBlock: 192.168.0.0/24
  RdsDBInstance:
    Type: ALIYUN::RDS::DBInstance
    Properties:
      ZoneId:
        Ref: ZoneId
      VpcId:
        Ref: Vpc
      VSwitchId:
        Ref: VSwitch
      DBInstanceClass:
        Ref: DBInstanceClass
      DBInstanceStorage: 100
      Engine: MySQL
      EngineVersion: "8.0"
      MasterUserPassword:
        Ref: RDSDBPassword
      MasterUserType: Super
      MasterUsername:
        Ref: RDSDBUser
      DBMappings:
        - CharacterSetName: utf8mb4
          DBName:
            Ref: DbName
      Category: HighAvailability
      DBInstanceStorageType: cloud_essd
      SecurityIPList: 192.168.0.0/16
      SlaveZoneIds:
        - Ref: ZoneId
  RedisInstance:
    Type: ALIYUN::REDIS::Instance
    Properties:
      ZoneId:
        Ref: ZoneId
      VpcId:
        Ref: Vpc
      VSwitchId:
        Ref: VSwitch
      InstanceClass:
        Ref: RedisInstanceClass
      InstanceName: rds_mysql2redis_redis
      EvictionPolicy: noeviction
      EngineVersion: '6.0'
      Password:
        Ref: RedisPassword
  Whitelist:
    Type: ALIYUN::REDIS::Whitelist
    Properties:
      InstanceId:
        Ref: RedisInstance
      SecurityIps: 192.168.0.0/16
  MigrationJob:
    Type: ALIYUN::DTS::SynchronizationJob2
    Properties:
      DtsJobName:
        Ref: DtsJobName
      SourceEndpoint:
        InstanceType: RDS
        InstanceID:
          Ref: RdsDBInstance
        EngineName: MYSQL
        Region:
          Ref: ALIYUN::Region
        UserName:
          Ref: RDSDBUser
        Password:
          Ref: RDSDBPassword
      DestinationEndpoint:
        InstanceType: Redis
        InstanceID:
          Ref: RedisInstance
        EngineName: Redis
        Region:
          Ref: ALIYUN::Region
        Password:
          Ref: RedisPassword
      StructureInitialization: false
      DelayNotice: true
      ErrorNotice: true
      DelayRuleTime: 60
      DataInitialization: true
      DataSynchronization: true
      DbList:
        Fn::GetJsonValue:
          - DbList
          - Fn::Sub: '{ "DbList": { "${DbName}": {   "name": "0",   "all": true,   "customAttachedColumn": {     "__DTS_TP_TO_REDIS_KEY__": {       "name": "__DTS_TP_TO_REDIS_KEY__",       "syntacticType": "ADD",       "value": "__DB__+''.''+__TB__+''.''+pk_str_with_name_value(''.'',''.'')",       "type": "STRING",       "length": ""     },     "__DTS_TP_TO_REDIS_VALUE__": {       "name": "__DTS_TP_TO_REDIS_VALUE__",       "syntacticType": "ADD",       "value": "tp2redis_json_value()",       "type": "STRING",       "length": ""     }   } }}}'
  DtsInstance:
    Type: ALIYUN::DTS::Instance
    Properties:
      JobId:
        Fn::GetAtt:
          - MigrationJob
          - DtsJobId
      InstanceClass: small
      PayType: PostPaid
      AutoStart: true
      Type: SYNC
      SourceRegion:
        Ref: ALIYUN::Region
      DestinationRegion:
        Ref: ALIYUN::Region
      SourceEndpointEngineName: MySQL
      DestinationEndpointEngineName: Redis
Outputs:
  RdsInstanceAddress:
    Description:
      en: RDS Instance Address.
      zh-cn: RDS Instance Address.
    Value:
      'Fn::Sub':
        - 'https://rds.console.alibabacloud.com/detail/${InstanceID}/basicInfo?region=${Region}'
        - InstanceID:
            Ref: RdsDBInstance
          Region:
            Ref: ALIYUN::Region
  TairInstanceAddress:
    Description:
      en: Tair Instance Address.
      zh-cn: Tair Instance Address.
    Value:
      'Fn::Sub':
        - 'https://kvstore.console.alibabacloud.com/Redis/instance/${Region}/${InstanceID}'
        - InstanceID:
            Ref: RedisInstance
          Region:
            Ref: ALIYUN::Region
Metadata:
  ALIYUN::ROS::Interface:
    ParameterGroups:
      - Parameters:
          - ZoneId
        Label:
          default:
            en: Infrastructure Configuration
            zh-cn: Infrastructure Configuration
      - Parameters:
          - DBInstanceClass
          - DbName
          - RDSDBUser
          - RDSDBPassword
        Label:
          default: RDS
      - Parameters:
          - RedisInstanceClass
          - RedisPassword
        Label:
          default: Tair
      - Parameters:
          - DtsJobName
        Label:
          default: DTS
    TemplateTags:
      - acs:technical-solution:database:Real-time Synchronization of RDS and Redis to Build Cache Consistency-tech_solu_21
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Description": {
    "zh-cn": "This template uses DTS to achieve cache synchronization between MySQL and Redis. It includes the creation and security configuration of VPC, ECS, RDS, and Redis instances, and sets up consumer groups to ensure data consistency.",
    "en": "This template achieves cache synchronization between MySQL and Redis via DTS, encompassing the creation and security configuration of VPC, ECS, RDS, and Redis instances, alongside the establishment of consumer groups to ensure data consistency."
  },
  "Parameters": {
    "ZoneId": {
      "Type": "String",
      "Label": {
        "en": "VSwitch Availability Zone",
        "zh-cn": "VSwitch Availability Zone"
      },
      "AssociationProperty": "ALIYUN::ECS::Instance::ZoneId"
    },
    "RDSDBUser": {
      "Type": "String",
      "Label": {
        "en": "RDS DB Username",
        "zh-cn": "RDS database account"
      },
      "Description": {
        "en": "Username of database.",
        "zh-cn": "The username of the database account."
      },
      "ConstraintDescription": {
        "en": "Consist of 2 to 16 characters of lowercase letters, underline. Must begin with a letter and be end with an alphanumeric character.",
        "zh-cn": "Consists of 2 to 16 lowercase letters and underscores (_). It must begin with a letter and end with an alphanumeric character."
      },
      "Default": "demouser123",
      "MinLength": 2,
      "MaxLength": 16
    },
    "DbName": {
      "Type": "String",
      "Label": {
        "en": "RDS DB Name",
        "zh-cn": "RDS database name"
      },
      "ConstraintDescription": {
        "en": "Consist of 2 to 16 characters of lowercase letters, underline. Must begin with a letter and be end with an alphanumeric character.",
        "zh-cn": "Consists of 2 to 16 lowercase letters and underscores (_). It must begin with a letter and end with an alphanumeric character."
      },
      "Default": "demodb",
      "Required": true,
      "MinLength": 2,
      "MaxLength": 16
    },
    "RDSDBPassword": {
      "Type": "String",
      "Label": {
        "en": "RDS DB Password",
        "zh-cn": "RDS database password"
      },
      "Description": {
        "en": "RDS database password, consisting of letters, numbers, and underline(_), is 8 to 32 characters long,Must contain three different types of characters.",
        "zh-cn": "The password for the RDS database. It must be 8 to 32 characters long, consist of letters, digits, and underscores (_), and contain characters of three different types."
      },
      "ConstraintDescription": {
        "en": "Consisting of letters, numbers, and underline(_), is 8 to 32 characters long.",
        "zh-cn": "The password must be 8 to 32 characters long and consist of letters, digits, and underscores (_)."
      },
      "AssociationProperty": "ALIYUN::RDS::Instance::AccountPassword",
      "MinLength": 8,
      "MaxLength": 32,
      "NoEcho": true
    },
    "DBInstanceClass": {
      "Type": "String",
      "Label": {
        "en": "Instance Class",
        "zh-cn": "Instance type"
      },
      "AssociationProperty": "ALIYUN::RDS::Instance::InstanceType",
      "AssociationPropertyMetadata": {
        "ZoneId": "${ZoneId}",
        "EngineVersion": "8.0",
        "Engine": "MySQL",
        "Category": "HighAvailability",
        "DBInstanceStorageType": "cloud_essd",
        "CommodityCode": "bards"
      },
      "Default": "mysql.x4.medium.2c"
    },
    "DtsJobName": {
      "Type": "String",
      "Label": {
        "en": "Dts Job Name",
        "zh-cn": "Synchronization task name"
      },
      "Description": {
        "en": "You are advised to configure a name with service significance (without unique requirement) for easy identification.",
        "zh-cn": "We recommend that you specify a descriptive name for the task to facilitate identification. The name does not need to be unique."
      },
      "Default": "mysql2redis_dts"
    },
    "RedisInstanceClass": {
      "Type": "String",
      "Label": {
        "en": "Tair Specifications",
        "zh-cn": "Tair specifications"
      },
      "Description": {
        "en": "<font color='blue'>Before selecting a model, please confirm whether the model is in stock in the current availability zone. To save testing costs, it is recommended to use a model with 2G memory, for example:tair.rdb.2g</font>, see detail:<a href='https://www.alibabacloud.com/help/zh/redis/product-overview/enhanced-performance' target='_blank'><font color='red'>Specification inquiry</font></a>.",
        "zh-cn": "<font color='blue'>Before you select an instance type, confirm that the instance type is available in the current availability zone. To save costs on testing, we recommend that you use a specification with 2 GB of memory, such as tair.rdb.2g.</font> For more information, see <a href='https://www.alibabacloud.com/help/en/redis/product-overview/enhanced-performance' target='_blank'><font color='red'>Instance types</font></a>."
      },
      "AssociationProperty": "ALIYUN::REDIS::Instance::InstanceClass",
      "AssociationPropertyMetadata": {
        "Engine": "Redis",
        "ProductType": "Tair_rdb",
        "InstanceChargeType": "PostPaid",
        "ZoneId": "${ZoneId1}",
        "OrderType": "BUY"
      },
      "Default": "tair.rdb.2g"
    },
    "RedisPassword": {
      "Type": "String",
      "Label": {
        "en": "Instance Password",
        "zh-cn": "Instance password"
      },
      "Description": {
        "en": "Length 8-32 characters, can contain size letters, Numbers and special symbols, including the following:! @ # $ % ^ & * ( ) _ + - =",
        "zh-cn": "The password must be 8 to 32 characters in length. It can contain uppercase letters, lowercase letters, digits, and the following special characters: !@#$%^&*()_+-="
      },
      "ConstraintDescription": {
        "en": "8-32 characters, can contain size letters, Numbers and special symbols, including the following:! @ # $ % ^ & * ( ) _ + - =",
        "zh-cn": "The password must be 8 to 32 characters in length and can contain uppercase letters, lowercase letters, digits, and the following special characters: !@#$%^&*()_+-="
      },
      "MinLength": "8",
      "MaxLength": "32",
      "NoEcho": true
    }
  },
  "Resources": {
    "Vpc": {
      "Type": "ALIYUN::ECS::VPC",
      "Properties": {
        "CidrBlock": "192.168.0.0/16"
      }
    },
    "VSwitch": {
      "Type": "ALIYUN::ECS::VSwitch",
      "Properties": {
        "ZoneId": {
          "Ref": "ZoneId"
        },
        "VpcId": {
          "Ref": "Vpc"
        },
        "VSwitchName": {
          "Fn::Join": [
            "-",
            [
              "VSwitch",
              "StackId",
              {
                "Ref": "ALIYUN::StackId"
              }
            ]
          ]
        },
        "CidrBlock": "192.168.0.0/24"
      }
    },
    "RdsDBInstance": {
      "Type": "ALIYUN::RDS::DBInstance",
      "Properties": {
        "ZoneId": {
          "Ref": "ZoneId"
        },
        "VpcId": {
          "Ref": "Vpc"
        },
        "VSwitchId": {
          "Ref": "VSwitch"
        },
        "DBInstanceClass": {
          "Ref": "DBInstanceClass"
        },
        "DBInstanceStorage": 100,
        "Engine": "MySQL",
        "EngineVersion": "8.0",
        "MasterUserPassword": {
          "Ref": "RDSDBPassword"
        },
        "MasterUserType": "Super",
        "MasterUsername": {
          "Ref": "RDSDBUser"
        },
        "DBMappings": [
          {
            "CharacterSetName": "utf8mb4",
            "DBName": {
              "Ref": "DbName"
            }
          }
        ],
        "Category": "HighAvailability",
        "DBInstanceStorageType": "cloud_essd",
        "SecurityIPList": "192.168.0.0/16",
        "SlaveZoneIds": [
          {
            "Ref": "ZoneId"
          }
        ]
      }
    },
    "RedisInstance": {
      "Type": "ALIYUN::REDIS::Instance",
      "Properties": {
        "ZoneId": {
          "Ref": "ZoneId"
        },
        "VpcId": {
          "Ref": "Vpc"
        },
        "VSwitchId": {
          "Ref": "VSwitch"
        },
        "InstanceClass": {
          "Ref": "RedisInstanceClass"
        },
        "InstanceName": "rds_mysql2redis_redis",
        "EvictionPolicy": "noeviction",
        "EngineVersion": "6.0",
        "Password": {
          "Ref": "RedisPassword"
        }
      }
    },
    "Whitelist": {
      "Type": "ALIYUN::REDIS::Whitelist",
      "Properties": {
        "InstanceId": {
          "Ref": "RedisInstance"
        },
        "SecurityIps": "192.168.0.0/16"
      }
    },
    "MigrationJob": {
      "Type": "ALIYUN::DTS::SynchronizationJob2",
      "Properties": {
        "DtsJobName": {
          "Ref": "DtsJobName"
        },
        "SourceEndpoint": {
          "InstanceType": "RDS",
          "InstanceID": {
            "Ref": "RdsDBInstance"
          },
          "EngineName": "MYSQL",
          "Region": {
            "Ref": "ALIYUN::Region"
          },
          "UserName": {
            "Ref": "RDSDBUser"
          },
          "Password": {
            "Ref": "RDSDBPassword"
          }
        },
        "DestinationEndpoint": {
          "InstanceType": "Redis",
          "InstanceID": {
            "Ref": "RedisInstance"
          },
          "EngineName": "Redis",
          "Region": {
            "Ref": "ALIYUN::Region"
          },
          "Password": {
            "Ref": "RedisPassword"
          }
        },
        "StructureInitialization": false,
        "DelayNotice": true,
        "ErrorNotice": true,
        "DelayRuleTime": 60,
        "DataInitialization": true,
        "DataSynchronization": true,
        "DbList": {
          "Fn::GetJsonValue": [
            "DbList",
            {
              "Fn::Sub": "{ \"DbList\": { \"${DbName}\": {   \"name\": \"0\",   \"all\": true,   \"customAttachedColumn\": {     \"__DTS_TP_TO_REDIS_KEY__\": {       \"name\": \"__DTS_TP_TO_REDIS_KEY__\",       \"syntacticType\": \"ADD\",       \"value\": \"__DB__+'.'+__TB__+'.'+pk_str_with_name_value('.','.')\",       \"type\": \"STRING\",       \"length\": \"\"     },     \"__DTS_TP_TO_REDIS_VALUE__\": {       \"name\": \"__DTS_TP_TO_REDIS_VALUE__\",       \"syntacticType\": \"ADD\",       \"value\": \"tp2redis_json_value()\",       \"type\": \"STRING\",       \"length\": \"\"     }   } }}}"
            }
          ]
        }
      }
    },
    "DtsInstance": {
      "Type": "ALIYUN::DTS::Instance",
      "Properties": {
        "JobId": {
          "Fn::GetAtt": [
            "MigrationJob",
            "DtsJobId"
          ]
        },
        "InstanceClass": "small",
        "PayType": "PostPaid",
        "AutoStart": true,
        "Type": "SYNC",
        "SourceRegion": {
          "Ref": "ALIYUN::Region"
        },
        "DestinationRegion": {
          "Ref": "ALIYUN::Region"
        },
        "SourceEndpointEngineName": "MySQL",
        "DestinationEndpointEngineName": "Redis"
      }
    }
  },
  "Outputs": {
    "RdsInstanceAddress": {
      "Description": {
        "en": "RDS Instance Address.",
        "zh-cn": "The address of the RDS instance."
      },
      "Value": {
        "Fn::Sub": [
          "https://rds.console.alibabacloud.com/detail/${InstanceID}/basicInfo?region=${Region}",
          {
            "InstanceID": {
              "Ref": "RdsDBInstance"
            },
            "Region": {
              "Ref": "ALIYUN::Region"
            }
          }
        ]
      }
    },
    "TairInstanceAddress": {
      "Description": {
        "en": "Tair Instance Address.",
        "zh-cn": "The address of the Tair instance."
      },
      "Value": {
        "Fn::Sub": [
          "https://kvstore.console.alibabacloud.com/Redis/instance/${Region}/${InstanceID}",
          {
            "InstanceID": {
              "Ref": "RedisInstance"
            },
            "Region": {
              "Ref": "ALIYUN::Region"
            }
          }
        ]
      }
    }
  },
  "Metadata": {
    "ALIYUN::ROS::Interface": {
      "ParameterGroups": [
        {
          "Parameters": [
            "ZoneId"
          ],
          "Label": {
            "default": {
              "en": "Infrastructure Configuration",
              "zh-cn": "Basic resource configuration (Required)"
            }
          }
        },
        {
          "Parameters": [
            "DBInstanceClass",
            "DbName",
            "RDSDBUser",
            "RDSDBPassword"
          ],
          "Label": {
            "default": "RDS"
          }
        },
        {
          "Parameters": [
            "RedisInstanceClass",
            "RedisPassword"
          ],
          "Label": {
            "default": "Tair"
          }
        },
        {
          "Parameters": [
            "DtsJobName"
          ],
          "Label": {
            "default": "DTS"
          }
        }
      ],
      "TemplateTags": [
        "acs:technical-solution:database:build-cache-consistency-by-syncing-rds-and-redis-in-real-time-tech_solu_21"
      ]
    }
  }
}
```

For more examples, see [public templates that include this resource](https://ros.console.alibabacloud.com/cn-hangzhou/templates/public?resourceType=ALIYUN::REDIS::Whitelist).

DATASOURCE::REDIS::Instance is used to query the information about a Tair (Redis OSS-compatible) instance.

## Syntax

```
{
  "Type": "DATASOURCE::REDIS::Instance",
  "Properties": {
    "DBInstanceId": String,
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

DBInstanceId

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

-   SecurityIpGroupAttribute: the attribute of the IP address whitelist.
    
-   EndTime: the expiration time of the instance.
    
-   ResourceGroupId: the ID of the resource group to which the instance belongs.
    
-   Config: the parameter configurations of the instance.
    
-   Port: the port number that is used by the instance to provide services.
    
-   HasRenewChangeOrder: indicates whether an order for renewal and configuration change that has not taken effect exists.
    
-   SecurityIpGroupName: the name of the IP address whitelist.
    
-   ShardCount: the number of data shards of the cluster instance.
    
-   ConnectionDomain: the private endpoint of the instance.
    
-   MaintainEndTime: the end time of the maintenance window.
    
-   Capacity: the capacity of the instance.
    
-   DBInstanceId: the ID of the instance.
    
-   PrivateIp: the private IP address of the instance.
    
-   Qps: the queries per second (QPS).
    
-   NetworkType: the network type.
    
-   PackageType: the plan type.
    
-   InstanceReleaseProtection: the release protection feature of the instance.
    
-   Bandwidth: the bandwidth of the instance.
    
-   PaymentType: the billing method.
    
-   InstanceType: the category of the instance.
    
-   Tags: details of the tags.
    
-   MaintainStartTime: the start time of the maintenance window.
    
-   DBInstanceName: the name of the instance.
    
-   ReplacateId: the logical ID of the distributed instance.
    
-   ArchitectureType: the architecture type.
    
-   SecurityIps: the IP addresses in the IP address whitelist.
    
-   EngineVersion: the version of the database engine of the instance.
    
-   ZoneId: the ID of the zone.
    
-   CloudType: a property that is returned only if the instance is in a cloud box.
    
-   VSwitchId: the ID of the vSwitch.
    
-   SecurityGroupId: the ID of the security group.
    
-   CreateTime: the creation time of the instance.
    
-   ReadOnlyCount: the number of read replicas. This property is available only for read/write splitting instances that use cloud disks.
    
-   InstanceClass: the instance type.
    
-   IsRds: indicates whether the instance is managed by ApsaraDB RDS.
    
-   SecondaryZoneId: the ID of the secondary zone.
    
-   VpcId: the ID of the virtual private cloud (VPC).
    
-   VpcAuthMode: the authentication mode of the VPC.
    
-   VpcCloudInstanceId: the ID of the instance in the VPC.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  DBInstanceId:
    Description:
      en: Database instance id.
    Required: true
    Type: String
Resources:
  ExtensionDataSource:
    Properties:
      DBInstanceId:
        Ref: DBInstanceId
    Type: DATASOURCE::REDIS::Instance
Outputs:
  ArchitectureType:
    Description: Architecture type.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - ArchitectureType
  Bandwidth:
    Description: Bandwidth.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - Bandwidth
  Capacity:
    Description: Capacity.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - Capacity
  CloudType:
    Description: Cloud category.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - CloudType
  Config:
    Description: Config.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - Config
  ConnectionDomain:
    Description: Connection domain.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - ConnectionDomain
  CreateTime:
    Description: Create time.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - CreateTime
  DBInstanceId:
    Description: Database instance id.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - DBInstanceId
  DBInstanceName:
    Description: Instance name.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - DBInstanceName
  EndTime:
    Description: End time.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - EndTime
  EngineVersion:
    Description: Engine version.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - EngineVersion
  HasRenewChangeOrder:
    Description: Has renew change order.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - HasRenewChangeOrder
  InstanceClass:
    Description: Instance class.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - InstanceClass
  InstanceReleaseProtection:
    Description: Instance release protection.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - InstanceReleaseProtection
  InstanceType:
    Description: Instance type.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - InstanceType
  IsRds:
    Description: is RDS.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - IsRds
  MaintainEndTime:
    Description: Maintain end time.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - MaintainEndTime
  MaintainStartTime:
    Description: Maintain start time.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - MaintainStartTime
  NetworkType:
    Description: Network type.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - NetworkType
  PackageType:
    Description: Package type.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - PackageType
  PaymentType:
    Description: Payment type.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - PaymentType
  Port:
    Description: Port.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - Port
  PrivateIp:
    Description: Private IP.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - PrivateIp
  Qps:
    Description: QPS.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - Qps
  ReadOnlyCount:
    Description: 'The number of read-only nodes. This parameter is only applicable
      to the creation of read-write splitting instances in the cloud disk version.
      You can use this parameter to customize the number of read-only nodes. Valid
      values: 1 to 5.'
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - ReadOnlyCount
  ReplacateId:
    Description: Replacate id.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - ReplacateId
  ResourceGroupId:
    Description: Resource group id.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - ResourceGroupId
  SecondaryZoneId:
    Description: The ID of the standby zone. You can call the [DescribeZones](~~ 94527
      ~~) operation.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - SecondaryZoneId
  SecurityGroupId:
    Description: Security group id.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - SecurityGroupId
  SecurityIpGroupAttribute:
    Description: Security IP group attribute.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - SecurityIpGroupAttribute
  SecurityIpGroupName:
    Description: Security IP group name.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - SecurityIpGroupName
  SecurityIps:
    Description: Security IPs.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - SecurityIps
  ShardCount:
    Description: The number of slices. This parameter is only applicable to creating
      a cloud disk cluster architecture instance. You can use this parameter to customize
      the number of slices.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - ShardCount
  Tags:
    Description: Tags.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - Tags
  VSwitchId:
    Description: Vswitch id.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - VSwitchId
  VpcAuthMode:
    Description: Vpc auth mode.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - VpcAuthMode
  VpcCloudInstanceId:
    Description: Vpc cloud instance id.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - VpcCloudInstanceId
  VpcId:
    Description: Vpc id.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - VpcId
  ZoneId:
    Description: Zone id.
    Value:
      Fn::GetAtt:
      - ExtensionDataSource
      - ZoneId
                        
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "DBInstanceId": {
      "Type": "String",
      "Description": {
        "en": "Database instance id."
      },
      "Required": true
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::REDIS::Instance",
      "Properties": {
        "DBInstanceId": {
          "Ref": "DBInstanceId"
        }
      }
    }
  },
  "Outputs": {
    "SecurityIpGroupAttribute": {
      "Description": "Security IP group attribute.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "SecurityIpGroupAttribute"
        ]
      }
    },
    "EndTime": {
      "Description": "End time.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "EndTime"
        ]
      }
    },
    "ResourceGroupId": {
      "Description": "Resource group id.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ResourceGroupId"
        ]
      }
    },
    "Config": {
      "Description": "Config.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Config"
        ]
      }
    },
    "Port": {
      "Description": "Port.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Port"
        ]
      }
    },
    "HasRenewChangeOrder": {
      "Description": "Has renew change order.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "HasRenewChangeOrder"
        ]
      }
    },
    "SecurityIpGroupName": {
      "Description": "Security IP group name.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "SecurityIpGroupName"
        ]
      }
    },
    "ShardCount": {
      "Description": "The number of slices. This parameter is only applicable to creating a cloud disk cluster architecture instance. You can use this parameter to customize the number of slices.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ShardCount"
        ]
      }
    },
    "ConnectionDomain": {
      "Description": "Connection domain.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ConnectionDomain"
        ]
      }
    },
    "MaintainEndTime": {
      "Description": "Maintain end time.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "MaintainEndTime"
        ]
      }
    },
    "Capacity": {
      "Description": "Capacity.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Capacity"
        ]
      }
    },
    "DBInstanceId": {
      "Description": "Database instance id.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "DBInstanceId"
        ]
      }
    },
    "PrivateIp": {
      "Description": "Private IP.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "PrivateIp"
        ]
      }
    },
    "Qps": {
      "Description": "QPS.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Qps"
        ]
      }
    },
    "NetworkType": {
      "Description": "Network type.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "NetworkType"
        ]
      }
    },
    "PackageType": {
      "Description": "Package type.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "PackageType"
        ]
      }
    },
    "InstanceReleaseProtection": {
      "Description": "Instance release protection.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "InstanceReleaseProtection"
        ]
      }
    },
    "Bandwidth": {
      "Description": "Bandwidth.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Bandwidth"
        ]
      }
    },
    "PaymentType": {
      "Description": "Payment type.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "PaymentType"
        ]
      }
    },
    "InstanceType": {
      "Description": "Instance type.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "InstanceType"
        ]
      }
    },
    "Tags": {
      "Description": "Tags.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "Tags"
        ]
      }
    },
    "MaintainStartTime": {
      "Description": "Maintain start time.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "MaintainStartTime"
        ]
      }
    },
    "DBInstanceName": {
      "Description": "Instance name.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "DBInstanceName"
        ]
      }
    },
    "ReplacateId": {
      "Description": "Replacate id.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ReplacateId"
        ]
      }
    },
    "ArchitectureType": {
      "Description": "Architecture type.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ArchitectureType"
        ]
      }
    },
    "SecurityIps": {
      "Description": "Security IPs.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "SecurityIps"
        ]
      }
    },
    "EngineVersion": {
      "Description": "Engine version.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "EngineVersion"
        ]
      }
    },
    "ZoneId": {
      "Description": "Zone id.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ZoneId"
        ]
      }
    },
    "CloudType": {
      "Description": "Cloud category.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "CloudType"
        ]
      }
    },
    "VSwitchId": {
      "Description": "Vswitch id.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "VSwitchId"
        ]
      }
    },
    "SecurityGroupId": {
      "Description": "Security group id.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "SecurityGroupId"
        ]
      }
    },
    "CreateTime": {
      "Description": "Create time.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "CreateTime"
        ]
      }
    },
    "ReadOnlyCount": {
      "Description": "The number of read-only nodes. This parameter is only applicable to the creation of read-write splitting instances in the cloud disk version. You can use this parameter to customize the number of read-only nodes. Valid values: 1 to 5.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ReadOnlyCount"
        ]
      }
    },
    "InstanceClass": {
      "Description": "Instance class.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "InstanceClass"
        ]
      }
    },
    "IsRds": {
      "Description": "is RDS.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "IsRds"
        ]
      }
    },
    "SecondaryZoneId": {
      "Description": "The ID of the standby zone. You can call the [DescribeZones](~~ 94527 ~~) operation.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "SecondaryZoneId"
        ]
      }
    },
    "VpcId": {
      "Description": "Vpc id.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "VpcId"
        ]
      }
    },
    "VpcAuthMode": {
      "Description": "Vpc auth mode.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "VpcAuthMode"
        ]
      }
    },
    "VpcCloudInstanceId": {
      "Description": "Vpc cloud instance id.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "VpcCloudInstanceId"
        ]
      }
    }
  }
}
                        
```

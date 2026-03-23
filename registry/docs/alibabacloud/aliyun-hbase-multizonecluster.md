ALIYUN::HBase::MultiZoneCluster is used to create an ApsaraDB for HBase cluster that resides in multiple zones.

## Syntax

```
{
  "Type": "ALIYUN::HBase::MultiZoneCluster",
  "Properties": {
    "StandbyZoneId": String,
    "ResourceGroupId": String,
    "MasterInstanceType": String,
    "LogDiskSize": Integer,
    "StandbyVSwitchId": String,
    "SecurityIPList": String,
    "CoreInstanceType": String,
    "ClusterName": String,
    "Engine": String,
    "ArbiterZoneId": String,
    "AutoRenewPeriod": Integer,
    "PrimaryZoneId": String,
    "EngineVersion": String,
    "MultiZoneCombination": String,
    "CoreNodeCount": Integer,
    "ArchVersion": String,
    "Period": Integer,
    "LogInstanceType": String,
    "PayType": String,
    "PrimaryVSwitchId": String,
    "ArbiterVSwitchId": String,
    "VpcId": String,
    "CoreDiskType": String,
    "LogNodeCount": Integer,
    "LogDiskType": String,
    "CoreDiskSize": Integer,
    "PeriodUnit": String,
    "DeletionProtection": Boolean
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

StandbyZoneId

String

Yes

No

The ID of the secondary zone.

None.

ResourceGroupId

String

No

No

The ID of the resource group.

You can query available resource groups by using the console. If you do not specify this property, the default resource group is used.

MasterInstanceType

String

No

Yes

The instance type of the master node.

None.

LogDiskSize

Integer

Yes

Yes

The disk size of the log node.

Valid values: 400 to 64000. Unit: GB. The value is in increments of 40 GB.

StandbyVSwitchId

String

Yes

No

The ID of the vSwitch in the secondary zone.

The vSwitch must reside in the zone that is specified by StandbyZoneId.

SecurityIPList

String

No

Yes

The IP addresses or CIDR blocks that you want to add to the whitelist of the cluster.

Separate multiple IP addresses with commas (,).

**Note**

If you set this property to 127.0.0.1, all IP addresses are not allowed to access the cluster. If you set this property to 192.168.0.0/24, IP addresses in the 192.168.0.XX format are allowed to access the cluster.

CoreInstanceType

String

Yes

Yes

The instance type of the core node.

None.

ClusterName

String

No

Yes

The cluster name.

The name must comply with the following rules:

-   The name must be 2 to 128 characters in length.
    
-   It must start with a letter.
    
-   It can contain digits and special characters. Special characters include periods (.), hyphens (-), and underscores (\_).
    

Engine

String

Yes

No

The engine type.

This property takes effect only for ApsaraDB for HBase Performance-enhanced Edition. Set the value to **hbaseue**.

ArbiterZoneId

String

Yes

No

The ID of the arbiter zone.

None.

AutoRenewPeriod

Integer

No

No

The auto-renewal period.

Unit: month.

**Note**

Default value: 0. A value of 0 indicates that auto-renewal is disabled.

If you set AutoRenewPeriod to 2, the cluster is automatically renewed for 2 months after the cluster expires.

PrimaryZoneId

String

Yes

No

The ID of the primary zone.

None.

EngineVersion

String

Yes

No

The version of the engine.

Set the value to **2.0**.

MultiZoneCombination

String

Yes

No

The combination of zones.

None.

CoreNodeCount

Integer

Yes

Yes

The number of core nodes.

Valid values: 2 to 20. The value must be a multiple of 2.

ArchVersion

String

Yes

No

The version of the deployment architecture.

Set the value to **2.0**. This property takes effect only when Engine is set to hbaseue.

Period

Integer

No

No

The subscription duration of the cluster.

-   Valid values when PeriodUnit is set to year: 1 to 3.
    
-   Valid values when PeriodUnit is set to month: 1 to 9.
    

**Note**

You must specify this property only when PayType is set to Prepaid.

LogInstanceType

String

Yes

No

The instance type of the log node.

None.

PayType

String

Yes

No

The billing method of the cluster.

Valid values:

-   **Prepaid**
    
-   **Postpaid**
    

PrimaryVSwitchId

String

Yes

No

The ID of the vSwitch in the primary zone.

The vSwitch must reside in the zone that is specified by PrimaryZoneId.

ArbiterVSwitchId

String

Yes

No

The ID of the arbiter vSwitch.

The vSwitch must reside in the zone that is specified by ArbiterZoneId.

VpcId

String

No

No

The ID of the virtual private cloud (VPC).

The VPC must reside in the region that is specified by RegionId.

CoreDiskType

String

Yes

No

The disk category of the core node.

Valid values:

-   **cloud\_efficiency**: ultra disk
    
-   **cloud\_ssd**: standard SSD
    
-   **local\_hdd\_pro**: throughput-intensive local disk
    
-   **local\_ssd\_pro**: I/O-intensive local disk
    

LogNodeCount

Integer

Yes

Yes

The number of log nodes.

Valid values: 4 to 400. The value must be a multiple of 4.

LogDiskType

String

Yes

No

The disk category of the log node.

Valid values:

-   **cloud\_efficiency**: ultra disk
    
-   **cloud\_ssd**: standard SSD
    
-   **local\_hdd\_pro**: throughput-intensive local disk
    
-   **local\_ssd\_pro**: I/O-intensive local disk
    

CoreDiskSize

Integer

Yes

Yes

The disk size of the core node.

Valid values: 400 to 64000. Unit: GB. The value is in increments of 40 GB.

PeriodUnit

String

No

No

The unit of the subscription duration of the cluster.

Valid values:

-   **year**
    
-   **month**
    

**Note**

You must specify this property only when PayType is set to Prepaid.

DeletionProtection

Boolean

No

Yes

Specifies whether to enable the deletion protection feature.

Valid values:

-   **true**: enables the deletion protection feature. If you enable the feature, you cannot directly release the cluster. You must disable the feature before you can release the cluster.
    
-   **false**: disables the deletion protection feature.
    

## Return values

Fn::GetAtt

-   UiProxyConnAddrInfo: the addresses of the web console connections.
    
-   ClusterId: the cluster ID.
    
-   ServiceConnAddrs: the addresses of the sub-services.
    
-   ThriftConn: the addresses of the Thrift connections.
    
-   SlbConnAddrs: the addresses of the connections with the Server Load Balancer (SLB) instances.
    
-   ZkConnAddrs: the addresses of the Zookeeper connections.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  ArbiterVSwitchId:
    Description:
      en: Arbitration virtual switch ID. The switch must be in the availability zone
        corresponding to ArbiterZoneId.
    Required: true
    Type: String
  ArbiterZoneId:
    Description:
      en: Arbiter zond id.
    Required: true
    Type: String
  ArchVersion:
    AllowedValues:
    - '2.0'
    Description:
      en: Version of the deployment architecture. Currently, only the hbaseue engine
        type is supported. The value can be 2.0.
    Required: true
    Type: String
  AutoRenewPeriod:
    Description:
      en: 'The auto-renewal period. Unit: month.

        The default value of this parameter is 0. This value indicates that auto-renewal
        is

        disabled.

        If this parameter is set to 2, the instance is automatically renewed for a
        two-month

        subscription after the instance expires.'
    Required: false
    Type: Number
  ClusterName:
    AllowedPattern: ^[a-zA-Z0-9_-]{2,30}$
    Description:
      en: 'The name of the instance.

        The name must be 2 to 128 characters in length, and can contain letters, digits,
        periods

        (.), underscores (_), and hyphens (-). It must start with a letter.'
    Required: false
    Type: String
  CoreDiskSize:
    Description:
      en: The value ranges from 400 GB to 64,000 GB. The step size is 40 GB.
    Required: true
    Type: Number
  CoreDiskType:
    Description:
      en: 'Core node disk type. Valid values:

        cloud_efficiency

        cloud_ssd

        local_hdd_pro

        local_ssd_pro'
    Required: true
    Type: String
  CoreInstanceType:
    Description:
      en: You can call the DescribeAvailableResource operation to obtain the value
        of this parameter.
    Required: true
    Type: String
  CoreNodeCount:
    Description:
      en: Number of Core nodes. The value of the number of Core nodes ranges from
        2 to 20, and the increment is a multiple of 2.
    Required: true
    Type: Number
  Engine:
    AllowedValues:
    - hbaseue
    Description:
      en: Service type. Currently, only HBase enhanced version is supported. The value
        can be hbaseue.
    Required: true
    Type: String
  EngineVersion:
    AllowedValues:
    - '2.0'
    Description:
      en: 'The version of the engine. Valid values:

        hbaseue:2.0'
    Required: true
    Type: String
  LogDiskSize:
    Description:
      en: log disk size. The value ranges from 400 GB to 64,000 GB. The step size
        is 40 GB.
    Required: true
    Type: Number
  LogDiskType:
    Description:
      en: 'Log node disk type. Valid values:

        cloud_efficiency

        cloud_ssd

        local_hdd_pro

        local_ssd_pro'
    Required: true
    Type: String
  LogInstanceType:
    Description:
      en: Log instance type.
    Required: true
    Type: String
  LogNodeCount:
    Description:
      en: Log number of nodes. The value of log nodes ranges from 4 to 400 and is
        a multiple of 4.
    Required: true
    Type: Number
  MasterInstanceType:
    Description:
      en: The instance type of the master node. You can call the DescribeAvailableResource
        operation to obtain the value of this parameter.
    Required: false
    Type: String
  MultiZoneCombination:
    Description:
      en: Availability zone combination.
    Required: true
    Type: String
  PayType:
    AllowedValues:
    - PayAsYouGo
    - Subscription
    Description:
      en: 'The billing method.

        Prepaid: The subscription billing method is used.

        Postpaid: The pay-as-you-go billing method is used.'
    Required: true
    Type: String
  Period:
    AssociationProperty: PayPeriod
    Description:
      en: 'The subscription period.

        This parameter only takes effect when the PayType parameter is set to Prepaid.

        When the PeriodUnit parameter is set to year, the value of the Period parameter
        ranges

        from 1 to 5.

        When the PeriodUnit parameter is set to month, the value of the Period parameter
        ranges

        from 1 to 9.'
    Required: false
    Type: Number
  PeriodUnit:
    AllowedValues:
    - Month
    - Year
    - month
    - year
    AssociationProperty: PayPeriodUnit
    Description:
      en: 'The unit of the subscription period. Valid values:

        year

        month'
    Required: false
    Type: String
  PrimaryVSwitchId:
    Description:
      en: The virtual switch ID of the instance in primary availability zone must
        be in the availability zone corresponding to PrimaryZoneId.
    Required: true
    Type: String
  PrimaryZoneId:
    Description:
      en: Availability zone ID of the primary availability zone instance.
    Required: true
    Type: String
  ResourceGroupId:
    AssociationProperty: ALIYUN::ECS::ResourceGroup::ResourceGroupId
    Description:
      en: 'The ID of the resource group. You can query the group ID in the resource
        group console.

        If you leave this parameter empty, the instance is allocated to the default
        resource

        group.'
    Required: false
    Type: String
  SecurityIPList:
    Description:
      en: 'The IP addresses in the whitelist. Example: 192.168.*.*/24. The 0.0.0.0/0
        value cannot

        be added to the whitelist. Separate multiple IP addresses with commas (,).'
    Required: false
    Type: String
  StandbyVSwitchId:
    Description:
      en: The virtual switch ID of the standby availability zone instance must be
        in the corresponding availability zone of StandbyZoneId.
    Required: true
    Type: String
  StandbyZoneId:
    Description:
      en: Standby zone id.
    Required: true
    Type: String
  VpcId:
    AssociationProperty: ALIYUN::ECS::VPC::VPCId
    Description:
      en: 'The ID of the virtual private cloud (VPC). If you leave this parameter
        and the VSwitchId

        parameter empty, the classic network type is used. The VPC network type is
        preferred.'
    Required: false
    Type: String
Resources:
  MultiZoneCluster:
    Properties:
      ArbiterVSwitchId:
        Ref: ArbiterVSwitchId
      ArbiterZoneId:
        Ref: ArbiterZoneId
      ArchVersion:
        Ref: ArchVersion
      AutoRenewPeriod:
        Ref: AutoRenewPeriod
      ClusterName:
        Ref: ClusterName
      CoreDiskSize:
        Ref: CoreDiskSize
      CoreDiskType:
        Ref: CoreDiskType
      CoreInstanceType:
        Ref: CoreInstanceType
      CoreNodeCount:
        Ref: CoreNodeCount
      Engine:
        Ref: Engine
      EngineVersion:
        Ref: EngineVersion
      LogDiskSize:
        Ref: LogDiskSize
      LogDiskType:
        Ref: LogDiskType
      LogInstanceType:
        Ref: LogInstanceType
      LogNodeCount:
        Ref: LogNodeCount
      MasterInstanceType:
        Ref: MasterInstanceType
      MultiZoneCombination:
        Ref: MultiZoneCombination
      PayType:
        Ref: PayType
      Period:
        Ref: Period
      PeriodUnit:
        Ref: PeriodUnit
      PrimaryVSwitchId:
        Ref: PrimaryVSwitchId
      PrimaryZoneId:
        Ref: PrimaryZoneId
      ResourceGroupId:
        Ref: ResourceGroupId
      SecurityIPList:
        Ref: SecurityIPList
      StandbyVSwitchId:
        Ref: StandbyVSwitchId
      StandbyZoneId:
        Ref: StandbyZoneId
      VpcId:
        Ref: VpcId
    Type: ALIYUN::HBase::MultiZoneCluster
Outputs:
  ClusterId:
    Description: The ID of the instance.
    Value:
      Fn::GetAtt:
      - MultiZoneCluster
      - ClusterId
  ServiceConnAddrs:
    Description: LIST of ServiceConnAddr.
    Value:
      Fn::GetAtt:
      - MultiZoneCluster
      - ServiceConnAddrs
  SlbConnAddrs:
    Description: LIST of SlbConnAddr.
    Value:
      Fn::GetAtt:
      - MultiZoneCluster
      - SlbConnAddrs
  ThriftConn:
    Description: Thrift Connection address list.
    Value:
      Fn::GetAtt:
      - MultiZoneCluster
      - ThriftConn
  UiProxyConnAddrInfo:
    Description: WebUI connection information list.
    Value:
      Fn::GetAtt:
      - MultiZoneCluster
      - UiProxyConnAddrInfo
  ZkConnAddrs:
    Description: List of ZkConnAddr.
    Value:
      Fn::GetAtt:
      - MultiZoneCluster
      - ZkConnAddrs
                        
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "StandbyZoneId": {
      "Type": "String",
      "Description": {
        "en": "Standby zone id."
      },
      "Required": true
    },
    "ResourceGroupId": {
      "AssociationProperty": "ALIYUN::ECS::ResourceGroup::ResourceGroupId",
      "Type": "String",
      "Description": {
        "en": "The ID of the resource group. You can query the group ID in the resource group console.\nIf you leave this parameter empty, the instance is allocated to the default resource\ngroup."
      },
      "Required": false
    },
    "MasterInstanceType": {
      "Type": "String",
      "Description": {
        "en": "The instance type of the master node. You can call the DescribeAvailableResource operation to obtain the value of this parameter."
      },
      "Required": false
    },
    "LogDiskSize": {
      "Type": "Number",
      "Description": {
        "en": "log disk size. The value ranges from 400 GB to 64,000 GB. The step size is 40 GB."
      },
      "Required": true
    },
    "StandbyVSwitchId": {
      "Type": "String",
      "Description": {
        "en": "The virtual switch ID of the standby availability zone instance must be in the corresponding availability zone of StandbyZoneId."
      },
      "Required": true
    },
    "SecurityIPList": {
      "Type": "String",
      "Description": {
        "en": "The IP addresses in the whitelist. Example: 192.168.*.*/24. The 0.0.0.0/0 value cannot\nbe added to the whitelist. Separate multiple IP addresses with commas (,)."
      },
      "Required": false
    },
    "CoreInstanceType": {
      "Type": "String",
      "Description": {
        "en": "You can call the DescribeAvailableResource operation to obtain the value of this parameter."
      },
      "Required": true
    },
    "ClusterName": {
      "Type": "String",
      "Description": {
        "en": "The name of the instance.\nThe name must be 2 to 128 characters in length, and can contain letters, digits, periods\n(.), underscores (_), and hyphens (-). It must start with a letter."
      },
      "AllowedPattern": "^[a-zA-Z0-9_-]{2,30}$",
      "Required": false
    },
    "Engine": {
      "Type": "String",
      "Description": {
        "en": "Service type. Currently, only HBase enhanced version is supported. The value can be hbaseue."
      },
      "AllowedValues": [
        "hbaseue"
      ],
      "Required": true
    },
    "ArbiterZoneId": {
      "Type": "String",
      "Description": {
        "en": "Arbiter zond id."
      },
      "Required": true
    },
    "AutoRenewPeriod": {
      "Type": "Number",
      "Description": {
        "en": "The auto-renewal period. Unit: month.\nThe default value of this parameter is 0. This value indicates that auto-renewal is\ndisabled.\nIf this parameter is set to 2, the instance is automatically renewed for a two-month\nsubscription after the instance expires."
      },
      "Required": false
    },
    "PrimaryZoneId": {
      "Type": "String",
      "Description": {
        "en": "Availability zone ID of the primary availability zone instance."
      },
      "Required": true
    },
    "EngineVersion": {
      "Type": "String",
      "Description": {
        "en": "The version of the engine. Valid values:\nhbaseue:2.0"
      },
      "AllowedValues": [
        "2.0"
      ],
      "Required": true
    },
    "MultiZoneCombination": {
      "Type": "String",
      "Description": {
        "en": "Availability zone combination."
      },
      "Required": true
    },
    "CoreNodeCount": {
      "Type": "Number",
      "Description": {
        "en": "Number of Core nodes. The value of the number of Core nodes ranges from 2 to 20, and the increment is a multiple of 2."
      },
      "Required": true
    },
    "ArchVersion": {
      "Type": "String",
      "Description": {
        "en": "Version of the deployment architecture. Currently, only the hbaseue engine type is supported. The value can be 2.0."
      },
      "AllowedValues": [
        "2.0"
      ],
      "Required": true
    },
    "Period": {
      "AssociationProperty": "PayPeriod",
      "Type": "Number",
      "Description": {
        "en": "The subscription period.\nThis parameter only takes effect when the PayType parameter is set to Prepaid.\nWhen the PeriodUnit parameter is set to year, the value of the Period parameter ranges\nfrom 1 to 5.\nWhen the PeriodUnit parameter is set to month, the value of the Period parameter ranges\nfrom 1 to 9."
      },
      "Required": false
    },
    "LogInstanceType": {
      "Type": "String",
      "Description": {
        "en": "Log instance type."
      },
      "Required": true
    },
    "PayType": {
      "Type": "String",
      "Description": {
        "en": "The billing method.\nPrepaid: The subscription billing method is used.\nPostpaid: The pay-as-you-go billing method is used."
      },
      "AllowedValues": [
        "PayAsYouGo",
        "Subscription"
      ],
      "Required": true
    },
    "PrimaryVSwitchId": {
      "Type": "String",
      "Description": {
        "en": "The virtual switch ID of the instance in primary availability zone must be in the availability zone corresponding to PrimaryZoneId."
      },
      "Required": true
    },
    "ArbiterVSwitchId": {
      "Type": "String",
      "Description": {
        "en": "Arbitration virtual switch ID. The switch must be in the availability zone corresponding to ArbiterZoneId."
      },
      "Required": true
    },
    "VpcId": {
      "AssociationProperty": "ALIYUN::ECS::VPC::VPCId",
      "Type": "String",
      "Description": {
        "en": "The ID of the virtual private cloud (VPC). If you leave this parameter and the VSwitchId\nparameter empty, the classic network type is used. The VPC network type is preferred."
      },
      "Required": false
    },
    "CoreDiskType": {
      "Type": "String",
      "Description": {
        "en": "Core node disk type. Valid values:\ncloud_efficiency\ncloud_ssd\nlocal_hdd_pro\nlocal_ssd_pro"
      },
      "Required": true
    },
    "LogNodeCount": {
      "Type": "Number",
      "Description": {
        "en": "Log number of nodes. The value of log nodes ranges from 4 to 400 and is a multiple of 4."
      },
      "Required": true
    },
    "LogDiskType": {
      "Type": "String",
      "Description": {
        "en": "Log node disk type. Valid values:\ncloud_efficiency\ncloud_ssd\nlocal_hdd_pro\nlocal_ssd_pro"
      },
      "Required": true
    },
    "CoreDiskSize": {
      "Type": "Number",
      "Description": {
        "en": "The value ranges from 400 GB to 64,000 GB. The step size is 40 GB."
      },
      "Required": true
    },
    "PeriodUnit": {
      "AssociationProperty": "PayPeriodUnit",
      "Type": "String",
      "Description": {
        "en": "The unit of the subscription period. Valid values:\nyear\nmonth"
      },
      "AllowedValues": [
        "Month",
        "Year",
        "month",
        "year"
      ],
      "Required": false
    }
  },
  "Resources": {
    "MultiZoneCluster": {
      "Type": "ALIYUN::HBase::MultiZoneCluster",
      "Properties": {
        "StandbyZoneId": {
          "Ref": "StandbyZoneId"
        },
        "ResourceGroupId": {
          "Ref": "ResourceGroupId"
        },
        "MasterInstanceType": {
          "Ref": "MasterInstanceType"
        },
        "LogDiskSize": {
          "Ref": "LogDiskSize"
        },
        "StandbyVSwitchId": {
          "Ref": "StandbyVSwitchId"
        },
        "SecurityIPList": {
          "Ref": "SecurityIPList"
        },
        "CoreInstanceType": {
          "Ref": "CoreInstanceType"
        },
        "ClusterName": {
          "Ref": "ClusterName"
        },
        "Engine": {
          "Ref": "Engine"
        },
        "ArbiterZoneId": {
          "Ref": "ArbiterZoneId"
        },
        "AutoRenewPeriod": {
          "Ref": "AutoRenewPeriod"
        },
        "PrimaryZoneId": {
          "Ref": "PrimaryZoneId"
        },
        "EngineVersion": {
          "Ref": "EngineVersion"
        },
        "MultiZoneCombination": {
          "Ref": "MultiZoneCombination"
        },
        "CoreNodeCount": {
          "Ref": "CoreNodeCount"
        },
        "ArchVersion": {
          "Ref": "ArchVersion"
        },
        "Period": {
          "Ref": "Period"
        },
        "LogInstanceType": {
          "Ref": "LogInstanceType"
        },
        "PayType": {
          "Ref": "PayType"
        },
        "PrimaryVSwitchId": {
          "Ref": "PrimaryVSwitchId"
        },
        "ArbiterVSwitchId": {
          "Ref": "ArbiterVSwitchId"
        },
        "VpcId": {
          "Ref": "VpcId"
        },
        "CoreDiskType": {
          "Ref": "CoreDiskType"
        },
        "LogNodeCount": {
          "Ref": "LogNodeCount"
        },
        "LogDiskType": {
          "Ref": "LogDiskType"
        },
        "CoreDiskSize": {
          "Ref": "CoreDiskSize"
        },
        "PeriodUnit": {
          "Ref": "PeriodUnit"
        }
      }
    }
  },
  "Outputs": {
    "UiProxyConnAddrInfo": {
      "Description": "WebUI connection information list.",
      "Value": {
        "Fn::GetAtt": [
          "MultiZoneCluster",
          "UiProxyConnAddrInfo"
        ]
      }
    },
    "ClusterId": {
      "Description": "The ID of the instance.",
      "Value": {
        "Fn::GetAtt": [
          "MultiZoneCluster",
          "ClusterId"
        ]
      }
    },
    "ServiceConnAddrs": {
      "Description": "LIST of ServiceConnAddr.",
      "Value": {
        "Fn::GetAtt": [
          "MultiZoneCluster",
          "ServiceConnAddrs"
        ]
      }
    },
    "ThriftConn": {
      "Description": "Thrift Connection address list.",
      "Value": {
        "Fn::GetAtt": [
          "MultiZoneCluster",
          "ThriftConn"
        ]
      }
    },
    "SlbConnAddrs": {
      "Description": "LIST of SlbConnAddr.",
      "Value": {
        "Fn::GetAtt": [
          "MultiZoneCluster",
          "SlbConnAddrs"
        ]
      }
    },
    "ZkConnAddrs": {
      "Description": "List of ZkConnAddr.",
      "Value": {
        "Fn::GetAtt": [
          "MultiZoneCluster",
          "ZkConnAddrs"
        ]
      }
    }
  }
}
                        
```

ALIYUN::GraphDatabase::DbInstance is used to create a Graph Database (GDB) instance.

## Syntax

```
{
  "Type": "ALIYUN::GraphDatabase::DbInstance",
  "Properties": {
    "ZoneId": String,
    "ResourceGroupId": String,
    "DbInstanceNetworkType": String,
    "VSwitchId": String,
    "EcsSecurityGroupRelations": List,
    "DbInstanceStorageType": String,
    "DbNodeStorage": Integer,
    "BackupSetId": String,
    "DbInstanceCategory": String,
    "SourceDbInstanceId": String,
    "VpcId": String,
    "DBInstanceIPArray": List,
    "DbVersion": String,
    "CreateType": String,
    "PaymentType": String,
    "DbInstanceDescription": String,
    "RestoreType": String,
    "DbNodeClass": String,
    "MaintainTime": String,
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

ZoneId

String

No

No

The ID of the zone.

None.

ResourceGroupId

String

No

Yes

The ID of the resource group.

None.

DbInstanceNetworkType

String

Yes

No

The network type of the instance.

Set the value to VPC.

VSwitchId

String

No

No

The ID of the vSwitch.

None.

EcsSecurityGroupRelations

List

No

No

The security groups with which you want to associate the instance.

For more information, see [EcsSecurityGroupRelations properties](#section-n7c-6r9-6r4).

DbInstanceStorageType

String

Yes

No

The storage type of the instance.

Valid values:

-   cloud\_essd: Enterprise SSD (ESSD).
    
-   cloud\_ssd: standard SSD.
    

DbNodeStorage

Integer

Yes

Yes

The storage space of the instance.

None.

BackupSetId

String

No

No

The ID of the backup set.

None.

DbInstanceCategory

String

Yes

No

The edition of the instance.

Set the value to ha. A value of ha specifies Pro Edition.

SourceDbInstanceId

String

No

No

The ID of the source instance.

None.

VpcId

String

No

No

The ID of the virtual private cloud (VPC).

None.

DBInstanceIPArray

List

No

Yes

Details of the IP address whitelists of the instance.

For more information, see [DBInstanceIPArray properties](#section-tt4-ckk-ojw).

DbVersion

String

Yes

No

The engine version.

Valid values:

-   1.0
    
-   1.0-OpenCypher
    

CreateType

String

No

No

The method that you want to use to create the instance.

Valid values:

-   CreateDBInstance
    
-   CloneDBInstance
    
-   CreateReadDBInstance
    

PaymentType

String

No

No

The billing method.

Valid values:

-   PostPaid: pay-as-you-go.
    
-   PrePaid: subscription.
    

DbInstanceDescription

String

No

Yes

The description.

None.

RestoreType

String

No

No

The restoration type.

Set the value to backup.

DbNodeClass

String

Yes

Yes

The instance type of the node on the instance.

None.

MaintainTime

String

No

Yes

The maintenance window of the instance.

None.

Tags

List

No

Yes

The custom tags.

For more information, see [Tags properties](#section-hva-k09-xyd).

## EcsSecurityGroupRelations syntax

```
"EcsSecurityGroupRelations": [
  {
    "NetworkType": String,
    "SecurityGroupId": String,
    "RegionId": String
  }
]
```

## EcsSecurityGroupRelations properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

NetworkType

String

No

No

The type of the network.

None.

SecurityGroupId

String

Yes

Yes

The ID of the security group.

None.

RegionId

String

No

No

The ID of the region.

None.

## DBInstanceIPArray syntax

```
"DBInstanceIPArray": [
  {
    "SecurityIps": String,
    "DbInstanceIpArrayName": String
  }
]
```

## DBInstanceIPArray properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

SecurityIps

String

Yes

Yes

The IP address whitelists.

None.

DbInstanceIpArrayName

String

No

No

The name of the IP address whitelist.

None.

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

Value

String

No

No

The value of the tag.

The value must be 1 to 128 characters in length, and cannot contain `http://` or `https://`. It cannot start with `aliyun` or `acs:`.

Key

String

Yes

No

The key of the tag.

The key must be 1 to 128 characters in length, and cannot contain `http://` or `https://`. It cannot start with `aliyun` or `acs:`.

## Return values

Fn::GetAtt

-   ResourceGroupId: the ID of the resource group.
    
-   DbInstanceNetworkType: the network type of the instance.
    
-   Port: the port that is used to connect to the instance.
    
-   DbInstanceType: the instance type of the instance.
    
-   DbInstanceStorageType: the storage type of the instance.
    
-   DbNodeStorage: the storage space of the instance.
    
-   DbInstanceCategory: the edition of the instance.
    
-   DbVersion: the engine version.
    
-   CurrentMinorVersion: the current kernel version.
    
-   PaymentType: the billing method.
    
-   PublicConnectionString: the public endpoint of the instance.
    
-   DBInstanceId: the ID of the instance.
    
-   LockReason: the reason why the instance is locked.
    
-   DbNodeClass: the instance type of the node on the instance.
    
-   MaintainTime: the maintenance window of the instance.
    
-   Tags: the tags of the instance.
    
-   ZoneId: the zone ID of the instance.
    
-   VSwitchId: the vSwitch ID of the instance.
    
-   CreateTime: the creation time of the instance.
    
-   DbNodeCount: the number of nodes.
    
-   LatestMinorVersion: the latest kernel version that is supported by the instance.
    
-   Expired: the expiration time of the instance.
    
-   EcsSecurityGroupRelations: the security groups with which the instance is associated.
    
-   LockMode: the lock mode of the instance.
    
-   DbInstanceMemory: the memory size of the instance.
    
-   ReadOnlyDbInstanceIds: the IDs of the read-only instances.
    
-   VpcId: the VPC ID of the instance.
    
-   DBInstanceIPArray: details of the IP address whitelists of the instance.
    
-   DbInstanceDescription: the description of the instance.
    
-   DbInstanceCpu: the number of vCPUs of the instance.
    
-   ConnectionString: the endpoint of the instance.
    
-   ExpireTime: the expiration time of the database.
    
-   PublicPort: the port that is used to connect to the database.
    

## Examples

-   `YAML` format
    
    ```
    ROSTemplateFormatVersion: '2015-09-01'
    Parameters: {}
    Resources:
      ExtensionResource:
        Type: ALIYUN::GraphDatabase::DbInstance
        Properties:
          DbInstanceNetworkType: VPC
          DbInstanceStorageType: cloud_essd
          DbNodeStorage: 100
          DbInstanceCategory: ha
          DbVersion: '1.0'
          PaymentType: PostPaid
          DbNodeClass: gdb.r.2xlarge
    Outputs:
      DbInstanceId:
        Description: The first ID of the resource.
        Value:
          Fn::GetAtt:
            - ExtensionResource
            - DbInstanceId
    ```
    
-   `JSON` format
    
    ```
    {
      "ROSTemplateFormatVersion": "2015-09-01",
      "Parameters": {
      },
      "Resources": {
        "ExtensionResource": {
          "Type": "ALIYUN::GraphDatabase::DbInstance",
          "Properties": {
            "DbInstanceNetworkType": "VPC",
            "DbInstanceStorageType": "cloud_essd",
            "DbNodeStorage": 100,
            "DbInstanceCategory": "ha",
            "DbVersion": "1.0",
            "PaymentType": "PostPaid",
            "DbNodeClass": "gdb.r.2xlarge"
          }
        }
      },
      "Outputs": {
        "DbInstanceId": {
          "Description": "The first ID of the resource.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionResource",
              "DbInstanceId"
            ]
          }
        }
      }
    }
    ```

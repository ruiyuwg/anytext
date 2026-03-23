DATASOURCE::GraphDatabase::DbInstance is used to query the information about an instance.

## Syntax

```
{
  "Type": "DATASOURCE::GraphDatabase::DbInstance",
  "Properties": {
    "DbInstanceId": String,
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

DbInstanceId

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

-   ResourceGroupId: the ID of the resource group.
    
-   DbInstanceNetworkType: the network type of the instance.
    
-   Port: the port that is used to access the application.
    
-   DbInstanceType: the type of the instance.
    
-   DbInstanceStorageType: the storage type of the instance.
    
-   DbNodeStorage: the storage space of the database.
    
-   DbInstanceCategory: the edition of the instance.
    
-   DbVersion: the version of the database.
    
-   CurrentMinorVersion: the kernel version of the database.
    
-   PaymentType: the billing method.
    
-   PublicConnectionString: the prefix of the public endpoint that is used to connect to the instance.
    
-   DBInstanceId: the instance ID.
    
-   LockReason: the reason why the instance is locked.
    
-   DbNodeClass: the node type.
    
-   MaintainTime: the maintenance window of the instance.
    
-   Tags: the tags that are added to the instance.
    
-   ZoneId: the zone ID of the instance.
    
-   VSwitchId: the vSwitch ID of the instance.
    
-   CreateTime: the creation time of the instance.
    
-   DbNodeCount: the number of nodes.
    
-   LatestMinorVersion: the latest kernel version that is supported by the instance.
    
-   Expired: the expiration time of the instance.
    
-   EcsSecurityGroupRelations: the associated security groups.
    
-   LockMode: the lock mode of the instance.
    
-   DbInstanceMemory: the memory size of the instance.
    
-   ReadOnlyDbInstanceIds: the IDs of the read-only instances.
    
-   VpcId: the ID of the virtual private cloud (VPC) in which the instance resides.
    
-   DBInstanceIPArray: the IP address whitelists.
    
-   DbInstanceDescription: the description of the instance.
    
-   DbInstanceCpu: the number of vCPUs of the instance.
    
-   ConnectionString: the endpoint that is used to connect to the database.
    
-   ExpireTime: the expiration time of the database.
    
-   PublicPort: the port that is used to connect to the database.
    

## Examples

-   `YAML` format
    
    ```
    ROSTemplateFormatVersion: '2015-09-01'
    Parameters:
      DbInstanceId:
        Type: String
        Description:
          en: The ID of the GDB Instance.
        Required: true
    Resources:
      ExtensionDataSource:
        Type: DATASOURCE::GraphDatabase::DbInstance
        Properties:
          DbInstanceId:
            Ref: DbInstanceId
    Outputs:
      ResourceGroupId:
        Description: Resource Group ID.
        Value:
          Fn::GetAtt:
            - ExtensionDataSource
            - ResourceGroupId
      DbInstanceNetworkType:
        Description: The network type of the db instance.
        Value:
          Fn::GetAtt:
            - ExtensionDataSource
            - DbInstanceNetworkType
      Port:
        Description: Application Port.
        Value:
          Fn::GetAtt:
            - ExtensionDataSource
            - Port
      DbInstanceType:
        Description: The type of the db instance.
        Value:
          Fn::GetAtt:
            - ExtensionDataSource
            - DbInstanceType
      DbInstanceStorageType:
        Description: Cloud Disk.
        Value:
          Fn::GetAtt:
            - ExtensionDataSource
            - DbInstanceStorageType
      DbNodeStorage:
        Description: Instance storage space, which is measured in GB.
        Value:
          Fn::GetAtt:
            - ExtensionDataSource
            - DbNodeStorage
      DbInstanceCategory:
        Description: The category of the db instance.
        Value:
          Fn::GetAtt:
            - ExtensionDataSource
            - DbInstanceCategory
      DbVersion:
        Description: Kernel Version 1.0 is represented as gremlin,1.
        Value:
          Fn::GetAtt:
            - ExtensionDataSource
            - DbVersion
      CurrentMinorVersion:
        Description: The current kernel image version.
        Value:
          Fn::GetAtt:
            - ExtensionDataSource
            - CurrentMinorVersion
      PaymentType:
        Description: The DB instance attribute field representing the paid type is desirable.
        Value:
          Fn::GetAtt:
            - ExtensionDataSource
            - PaymentType
      PublicConnectionString:
        Description: The public connection string ID of the DB instance.
        Value:
          Fn::GetAtt:
            - ExtensionDataSource
            - PublicConnectionString
      DbInstanceId:
        Description: The ID of the GDB Instance.
        Value:
          Fn::GetAtt:
            - ExtensionDataSource
            - DbInstanceId
      LockReason:
        Description: An instance is locked the reason.
        Value:
          Fn::GetAtt:
            - ExtensionDataSource
            - LockReason
      DbNodeClass:
        Description: The class of the db node.
        Value:
          Fn::GetAtt:
            - ExtensionDataSource
            - DbNodeClass
      MaintainTime:
        Description: Instance maintenance time such as 00:00Z-02:00Z, 0 to 2 points to carry out routine maintenance.
        Value:
          Fn::GetAtt:
            - ExtensionDataSource
            - MaintainTime
      Tags:
        Description: The tags of the GDB Instance.
        Value:
          Fn::GetAtt:
            - ExtensionDataSource
            - Tags
      ZoneId:
        Description: The zone ID of the instance.
        Value:
          Fn::GetAtt:
            - ExtensionDataSource
            - ZoneId
      VSwitchId:
        Description: The vswitch id of the DB instance.
        Value:
          Fn::GetAtt:
            - ExtensionDataSource
            - VSwitchId
      CreateTime:
        Description: Creation time, which follows the format of YYYY-MM-DD 'T'hh:mm:ssZ, such as 2011-05-30 T12:11:4Z.
        Value:
          Fn::GetAtt:
            - ExtensionDataSource
            - CreateTime
      DbNodeCount:
        Description: The count of the db node.
        Value:
          Fn::GetAtt:
            - ExtensionDataSource
            - DbNodeCount
      LatestMinorVersion:
        Description: The latest kernel image version.
        Value:
          Fn::GetAtt:
            - ExtensionDataSource
            - LatestMinorVersion
      Expired:
        Description: The expire status of the db instance.
        Value:
          Fn::GetAtt:
            - ExtensionDataSource
            - Expired
      EcsSecurityGroupRelations:
        Description: Security group information array.
        Value:
          Fn::GetAtt:
            - ExtensionDataSource
            - EcsSecurityGroupRelations
      LockMode:
        Description: Instance lock state.
        Value:
          Fn::GetAtt:
            - ExtensionDataSource
            - LockMode
      DbInstanceMemory:
        Description: Instance memory, which is measured in MB.
        Value:
          Fn::GetAtt:
            - ExtensionDataSource
            - DbInstanceMemory
      ReadOnlyDbInstanceIds:
        Description: The array of the readonly db instances.
        Value:
          Fn::GetAtt:
            - ExtensionDataSource
            - ReadOnlyDbInstanceIds
      VpcId:
        Description: The vpc id of the db instance.
        Value:
          Fn::GetAtt:
            - ExtensionDataSource
            - VpcId
      DBInstanceIPArray:
        Description: IP ADDRESS whitelist for the instance group list.
        Value:
          Fn::GetAtt:
            - ExtensionDataSource
            - DBInstanceIPArray
      DbInstanceDescription:
        Description: According to the practical example or notes.
        Value:
          Fn::GetAtt:
            - ExtensionDataSource
            - DbInstanceDescription
      DbInstanceCpu:
        Description: For example, instances can be grouped according to Cpu core count.
        Value:
          Fn::GetAtt:
            - ExtensionDataSource
            - DbInstanceCpu
      ConnectionString:
        Description: Virtual Private Cloud (vpc connection such as a VPN connection or leased line domain name.
        Value:
          Fn::GetAtt:
            - ExtensionDataSource
            - ConnectionString
      ExpireTime:
        Description: The instance after it expires time for subscription instance.
        Value:
          Fn::GetAtt:
            - ExtensionDataSource
            - ExpireTime
      PublicPort:
        Description: The public port ID of the DB instance.
        Value:
          Fn::GetAtt:
            - ExtensionDataSource
            - PublicPort
    ```
    
-   `JSON` format
    
    ```
    {
      "ROSTemplateFormatVersion": "2015-09-01",
      "Parameters": {
        "DbInstanceId": {
          "Type": "String",
          "Description": {
            "en": "The ID of the GDB Instance."
          },
          "Required": true
        }
      },
      "Resources": {
        "ExtensionDataSource": {
          "Type": "DATASOURCE::GraphDatabase::DbInstance",
          "Properties": {
            "DbInstanceId": {
              "Ref": "DbInstanceId"
            }
          }
        }
      },
      "Outputs": {
        "ResourceGroupId": {
          "Description": "Resource Group ID.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionDataSource",
              "ResourceGroupId"
            ]
          }
        },
        "DbInstanceNetworkType": {
          "Description": "The network type of the db instance.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionDataSource",
              "DbInstanceNetworkType"
            ]
          }
        },
        "Port": {
          "Description": "Application Port.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionDataSource",
              "Port"
            ]
          }
        },
        "DbInstanceType": {
          "Description": "The type of the db instance.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionDataSource",
              "DbInstanceType"
            ]
          }
        },
        "DbInstanceStorageType": {
          "Description": "Cloud Disk.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionDataSource",
              "DbInstanceStorageType"
            ]
          }
        },
        "DbNodeStorage": {
          "Description": "Instance storage space, which is measured in GB.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionDataSource",
              "DbNodeStorage"
            ]
          }
        },
        "DbInstanceCategory": {
          "Description": "The category of the db instance.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionDataSource",
              "DbInstanceCategory"
            ]
          }
        },
        "DbVersion": {
          "Description": "Kernel Version 1.0 is represented as gremlin,1.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionDataSource",
              "DbVersion"
            ]
          }
        },
        "CurrentMinorVersion": {
          "Description": "The current kernel image version.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionDataSource",
              "CurrentMinorVersion"
            ]
          }
        },
        "PaymentType": {
          "Description": "The DB instance attribute field representing the paid type is desirable.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionDataSource",
              "PaymentType"
            ]
          }
        },
        "PublicConnectionString": {
          "Description": "The public connection string ID of the DB instance.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionDataSource",
              "PublicConnectionString"
            ]
          }
        },
        "DbInstanceId": {
          "Description": "The ID of the GDB Instance.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionDataSource",
              "DbInstanceId"
            ]
          }
        },
        "LockReason": {
          "Description": "An instance is locked the reason.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionDataSource",
              "LockReason"
            ]
          }
        },
        "DbNodeClass": {
          "Description": "The class of the db node.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionDataSource",
              "DbNodeClass"
            ]
          }
        },
        "MaintainTime": {
          "Description": "Instance maintenance time such as 00:00Z-02:00Z, 0 to 2 points to carry out routine maintenance.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionDataSource",
              "MaintainTime"
            ]
          }
        },
        "Tags": {
          "Description": "The tags of the GDB Instance.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionDataSource",
              "Tags"
            ]
          }
        },
        "ZoneId": {
          "Description": "The zone ID of the instance.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionDataSource",
              "ZoneId"
            ]
          }
        },
        "VSwitchId": {
          "Description": "The vswitch id of the DB instance.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionDataSource",
              "VSwitchId"
            ]
          }
        },
        "CreateTime": {
          "Description": "Creation time, which follows the format of YYYY-MM-DD 'T'hh:mm:ssZ, such as 2011-05-30 T12:11:4Z.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionDataSource",
              "CreateTime"
            ]
          }
        },
        "DbNodeCount": {
          "Description": "The count of the db node.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionDataSource",
              "DbNodeCount"
            ]
          }
        },
        "LatestMinorVersion": {
          "Description": "The latest kernel image version.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionDataSource",
              "LatestMinorVersion"
            ]
          }
        },
        "Expired": {
          "Description": "The expire status of the db instance.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionDataSource",
              "Expired"
            ]
          }
        },
        "EcsSecurityGroupRelations": {
          "Description": "Security group information array.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionDataSource",
              "EcsSecurityGroupRelations"
            ]
          }
        },
        "LockMode": {
          "Description": "Instance lock state.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionDataSource",
              "LockMode"
            ]
          }
        },
        "DbInstanceMemory": {
          "Description": "Instance memory, which is measured in MB.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionDataSource",
              "DbInstanceMemory"
            ]
          }
        },
        "ReadOnlyDbInstanceIds": {
          "Description": "The array of the readonly db instances.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionDataSource",
              "ReadOnlyDbInstanceIds"
            ]
          }
        },
        "VpcId": {
          "Description": "The vpc id of the db instance.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionDataSource",
              "VpcId"
            ]
          }
        },
        "DBInstanceIPArray": {
          "Description": "IP ADDRESS whitelist for the instance group list.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionDataSource",
              "DBInstanceIPArray"
            ]
          }
        },
        "DbInstanceDescription": {
          "Description": "According to the practical example or notes.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionDataSource",
              "DbInstanceDescription"
            ]
          }
        },
        "DbInstanceCpu": {
          "Description": "For example, instances can be grouped according to Cpu core count.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionDataSource",
              "DbInstanceCpu"
            ]
          }
        },
        "ConnectionString": {
          "Description": "Virtual Private Cloud (vpc connection such as a VPN connection or leased line domain name.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionDataSource",
              "ConnectionString"
            ]
          }
        },
        "ExpireTime": {
          "Description": "The instance after it expires time for subscription instance.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionDataSource",
              "ExpireTime"
            ]
          }
        },
        "PublicPort": {
          "Description": "The public port ID of the DB instance.",
          "Value": {
            "Fn::GetAtt": [
              "ExtensionDataSource",
              "PublicPort"
            ]
          }
        }
      }
    }
                            
    ```

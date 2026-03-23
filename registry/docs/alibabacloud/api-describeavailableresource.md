Queries the available resources in the specified zone.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Dds/2015-12-01/DescribeAvailableResource)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Dds/2015-12-01/DescribeAvailableResource)

## **RAM authorization**

The table below describes the authorization required to call this API. You can define it in a Resource Access Management (RAM) policy. The table's columns are detailed below:

-   Action: The actions can be used in the `Action` element of RAM permission policy statements to grant permissions to perform the operation.
    
-   API: The API that you can call to perform the action.
    
-   Access level: The predefined level of access granted for each API. Valid values: create, list, get, update, and delete.
    
-   Resource type: The type of the resource that supports authorization to perform the action. It indicates if the action supports resource-level permission. The specified resource must be compatible with the action. Otherwise, the policy will be ineffective.
    
    -   For APIs with resource-level permissions, required resource types are marked with an asterisk (\*). Specify the corresponding Alibaba Cloud Resource Name (ARN) in the `Resource` element of the policy.
        
    -   For APIs without resource-level permissions, it is shown as All Resources. Use an asterisk (**\***) in the `Resource` element of the policy.
        
-   Condition key: The condition keys defined by the service. The key allows for granular control, applying to either actions alone or actions associated with specific resources. In addition to service-specific condition keys, Alibaba Cloud provides a set of [common condition keys](/help/en/ram/policy-elements#section-jix-u0j-2ms) applicable across all RAM-supported services.
    
-   Dependent action: The dependent actions required to run the action. To complete the action, the RAM user or the RAM role must have the permissions to perform all dependent actions.
    

**Action**

**Access level**

**Resource type**

**Condition key**

**Dependent action**

dds:DescribeAvailableResource

get

\*All Resource

`*`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

RegionId

string

Yes

The ID of the region. You can call the [DescribeRegions](/help/en/mongodb/api-describeregions) operation to query the latest available regions.

cn-hangzhou

ZoneId

string

No

The ID of the zone. You can call the [DescribeRegions](/help/en/mongodb/api-describeregions) operation to query the available zones.

cn-hangzhou-h

InstanceChargeType

string

No

The billing method of the instance. Valid values:

-   **PrePaid** (default): subscription
    
-   **PostPaid**: pay-as-you-go
    

PrePaid

DbType

string

No

The architecture of the instance. Valid values:

-   **normal**: replica set instance
    
-   **sharding**: sharded cluster instance
    

sharding

ResourceGroupId

string

No

The ID of the resource group.

rg-acfmyiu4ekp\*\*\*\*

StorageType

string

No

The storage type of the instance. Valid values:

-   local\_ssd: local SSD
    
-   cloud\_essd1: PL1 enhanced SSD (ESSD)
    
-   cloud\_essd2: PL2 ESSD
    
-   cloud\_essd3: PL3 ESSD
    
-   cloud\_auto: ESSD AutoPL disk
    

This parameter is empty by default, which indicates all types of storage resources are queried.

local\_ssd

DBInstanceClass

string

No

The instance type of the instance.

dds.mongo.standard

EngineVersion

string

No

The major engine version of the instance.

5.0

ReplicationFactor

string

No

The number of nodes, only applicable to replica sets.

**Valid values:**

-   1 :
    
    1
    
-   3 :
    
    3
    
-   5 :
    
    5
    
-   7 :
    
    7
    

3

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The ID of the request.

344EE51D-8850-4935-B68B-58A8F4DCE3BD

SupportedDBTypes

object

SupportedDBType

array<object>

The supported database types.

array<object>

AvailableZones

object

AvailableZone

array<object>

The available zones.

array<object>

SupportedEngineVersions

object

SupportedEngineVersion

array<object>

The supported storage engine versions.

array<object>

SupportedEngines

object

SupportedEngine

array<object>

The supported storage engines.

array<object>

SupportedNodeTypes

object

SupportedNodeType

array<object>

The supported instance types.

array<object>

NodeType

string

The number of nodes in the instance.

3

NetworkTypes

string

The network type of the instance.

VPC

AvailableResources

object

AvailableResource

array<object>

The details of the available resources.

array<object>

InstanceClassRemark

string

The type of the instance.

4核8GB（独享型）（当前选择规格：mdb.shard.2x.xlarge.d（4核8G（独享型云盘版），最大连接数：3000，最大IOPS：min{1800+50\*存储空间, 21000}））

InstanceClass

string

The instance family.

mdb.shard.2x.xlarge.d

DBInstanceStorageRange

object

The storage capacity range of the instance.

Min

integer

The minimum storage capacity. Unit: GB.

20

Max

integer

The maximum storage capacity. Unit: GB.

16000

Step

integer

The step size for adjusting the storage capacity. Unit: GB.

10

Engine

string

The storage engine of the instance.

WiredTiger

Version

string

The database engine version of the instance.

4.0

ZoneId

string

The ID of the zone.

cn-hangzhou-h

RegionId

string

The ID of the region.

cn-hangzhou

DbType

string

The architecture of the instance. Valid values:

-   **normal**: replica set instance
    
-   **sharding**: sharded cluster instance
    

sharding

## Examples

Success response

`JSON` format

```
{
  "RequestId": "344EE51D-8850-4935-B68B-58A8F4DCE3BD",
  "SupportedDBTypes": {
    "SupportedDBType": [
      {
        "AvailableZones": {
          "AvailableZone": [
            {
              "SupportedEngineVersions": {
                "SupportedEngineVersion": [
                  {
                    "SupportedEngines": {
                      "SupportedEngine": [
                        {
                          "SupportedNodeTypes": {
                            "SupportedNodeType": [
                              {
                                "NodeType": "3",
                                "NetworkTypes": "VPC",
                                "AvailableResources": {
                                  "AvailableResource": [
                                    {
                                      "InstanceClassRemark": "4核8GB（独享型）（当前选择规格：mdb.shard.2x.xlarge.d（4核8G（独享型云盘版），最大连接数：3000，最大IOPS：min{1800+50*存储空间, 21000}））",
                                      "InstanceClass": "mdb.shard.2x.xlarge.d",
                                      "DBInstanceStorageRange": {
                                        "Min": 20,
                                        "Max": 16000,
                                        "Step": 10
                                      }
                                    }
                                  ]
                                }
                              }
                            ]
                          },
                          "Engine": "WiredTiger"
                        }
                      ]
                    },
                    "Version": "4.0"
                  }
                ]
              },
              "ZoneId": "cn-hangzhou-h",
              "RegionId": "cn-hangzhou"
            }
          ]
        },
        "DbType": "sharding"
      }
    ]
  }
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/Dds/2015-12-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Dds/2015-12-01/DescribeAvailableResource#workbench-doc-change-demo) for a complete list.

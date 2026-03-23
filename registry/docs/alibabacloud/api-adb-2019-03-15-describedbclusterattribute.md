You can call the DescribeDBClusterAttribute operation to view the details of a specified AnalyticDB for MySQL cluster.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/adb/2019-03-15/DescribeDBClusterAttribute)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/adb/2019-03-15/DescribeDBClusterAttribute)

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

adb:DescribeDBClusterAttribute

get

DBCluster

`acs:adb:{#regionId}:{#accountId}:dbcluster/{#dbclusterId}`

None

None

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

DBClusterId

string

Yes

The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.

**Note**

Call the [DescribeDBClusters](/help/en/analyticdb-for-mysql/api-describedbclusters) operation to query the IDs of all AnalyticDB for MySQL Data Warehouse Edition (V3.0) clusters in a specific region.

am-bp111m2cfrdl1\*\*\*\*

RegionId

string

No

The region ID of the cluster.

cn-hangzhou

## Response elements

**Element**

**Type**

**Description**

**Example**

object

The details of the response.

RequestId

string

The request ID.

2895BB82-B2C1-408E-AA73-DB8D59\*\*\*\*\*\*

Items

object

DBCluster

array<object>

A list of cluster information.

array<object>

The details of the cluster.

CreationTime

string

The time when the cluster was created. The time is in the _yyyy-MM-ddTHH:mm:ssZ_ format. The time is displayed in UTC.

2021-04-01T09:50:18Z

EnableSpark

boolean

Indicates whether a Spark cluster is created. Valid values:

-   **true**: A Spark cluster is created.
    
-   **false**: No Spark cluster is created.
    

false

DtsJobId

string

The ID of the DTS synchronization task. This parameter is returned only for analytic instances for MySQL.

dtsb1hp3790\*\*\*\*

DBNodeCount

integer

The number of node groups.

1

Expired

string

Indicates whether the cluster has expired. Valid values:

-   **true**: The cluster has expired.
    
-   **false**: The cluster has not expired.
    

false

MaintainTime

string

The maintenance window of the cluster. The time is in the _HH:mmZ-HH:mmZ_ format. For example, _04:00Z-05:00Z_ indicates that the maintenance window is from 04:00 to 05:00.

**Note**

For more information about maintenance windows, see [Set a maintenance window](/help/en/analyticdb/analyticdb-for-mysql/user-guide/configure-a-maintenance-window).

04:00Z-05:00Z

PayType

string

The billing method of the cluster. Valid values:

-   **Postpaid**: pay-as-you-go.
    
-   **Prepaid**: subscription.
    

Postpaid

DiskType

string

The disk type of the cluster. Valid values:

-   **local\_ssd**: local SSD.
    
-   **cloud**: basic disk.
    
-   **cloud\_ssd**: standard SSD.
    
-   **cloud\_efficiency**: ultra disk.
    
-   **cloud\_essd0**: ESSD PL0.
    
-   **cloud\_essd**: ESSD PL1.
    
-   **cloud\_essd2**: ESSD PL2.
    
-   **cloud\_essd3**: ESSD PL3.
    

**Note**

For more information about ESSDs, see [ESSDs](/help/en/ecs/user-guide/essds).

cloud\_essd

Tags

object

Tag

array<object>

A list of tag information.

object

The details of the tag.

Key

string

The tag key.

**Note**

Call the [TagResources](/help/en/analyticdb-for-mysql/api-tagresources) operation to create tags for the cluster.

tag1

Value

string

The tag value.

test1

Mode

string

The mode of the cluster. Valid values:

-   **flexible**: Flexible mode.
    
-   **reserver**: Reserved mode.
    

**Note**

For more information about cluster modes, see [Editions](/help/en/analyticdb/analyticdb-for-mysql/product-overview/editions).

flexible

Port

integer

The port number of the cluster.

3306

LockMode

string

The lock mode of the cluster. Valid values:

-   **Unlock**: The cluster is not locked.
    
-   **ManualLock**: The cluster is manually locked.
    
-   **LockByExpiration**: The cluster is automatically locked after it expires.
    
-   **LockByRestoration**: The cluster is automatically locked before a rollback.
    
-   **LockByDiskQuota**: The cluster is automatically locked after the storage space is full. The data storage usage has reached 90% of the total storage.
    

Unlock

EngineVersion

string

The database engine version of the cluster.

3.1.1.9

EnableAirflow

boolean

Indicates whether an Airflow cluster is created. Valid values:

-   **true**: An Airflow cluster is created.
    
-   **false**: No Airflow cluster is created.
    

true

ExecutorCount

string

The number of compute nodes used in the cluster that is in flexible mode.

1

StorageResource

string

The specifications of storage resources used in the cluster that is in flexible mode. These resources are used for data reads and writes. You can increase the storage resources to improve the read and write performance of the cluster.

8Core32GB

DBClusterId

string

The ID of the AnalyticDB for MySQL Data Warehouse Edition (V3.0) cluster.

am-bp111m2cfrdl1\*\*\*\*

ConnectionString

string

The VPC endpoint of the cluster.

am-bp111m2cfrdl1\*\*\*\*.ads.aliyuncs.com

RdsInstanceId

string

The ID of the source RDS instance. This parameter is returned only for analytic instances for MySQL.

rm-bp837jsdp2\*\*\*\*

DBClusterType

string

The type of the cluster. Valid values:

-   **Common**: a regular cluster.
    
-   **RDS\_ANALYSIS**: an analytic instance for MySQL.
    

Common

CommodityCode

string

The billing method of the product. Valid values:

-   **ads**: pay-as-you-go
    
-   **ads\_pre**: subscription
    

ads

ExpireTime

string

The expiration time of the cluster. The time is in the _yyyy-MM-ddTHH:mm:ssZ_ format. The time is displayed in UTC. An example is _2999-09-08T16:00:00Z_.

**Note**

-   If the cluster is a subscription cluster, the actual expiration time is returned.
    
-   If the cluster is a pay-as-you-go cluster, a fixed value of **2999-09-08T16:00:00Z** is returned.
    

2999-09-08T16:00:00Z

DBNodeStorage

integer

The storage capacity of the cluster. Unit: GB.

300

DBNodeClass

string

The node specifications.

E8

LockReason

string

The reason the cluster is locked.

**Note**

This parameter is returned only when the cluster is locked. Its value is always **instance\_expire**.

instance\_expired

VPCId

string

The virtual private cloud (VPC) ID.

vpc-bp13h7uzhulpuxvnp\*\*\*\*

ComputeResource

string

The specifications of computing resources used in the cluster that is in flexible mode. These resources are used for data computing. You can increase the computing resources to accelerate queries. You can scale the resources based on the actual performance of the cluster.

8Core32GB

RegionId

string

The region ID of the cluster.

cn-hangzhou

ElasticIOResource

integer

The number of elastic I/O resources.

2

VSwitchId

string

The vSwitch ID.

vsw-bp1syh8vvw8yech7n\*\*\*\*

DBVersion

string

The database version. Only version **3.0** is supported.

3.0

VPCCloudInstanceId

string

The VPC instance ID.

am-bp111m2cfrdl1\*\*\*\*-controller

DBClusterStatus

string

The status of the cluster. For more information, see [Cluster states](/help/en/analyticdb/analyticdb-for-mysql/developer-reference/cluster-states).

Running

ResourceGroupId

string

The resource group ID.

rg-acfmyiu4ekp\*\*\*\*

DBClusterNetworkType

string

The network type of the cluster. Only **VPC** is supported.

vpc

DBClusterDescription

string

The description of the cluster.

adb\_test

UserENIStatus

boolean

Indicates whether the Elastic Network Interface (ENI) is enabled. Valid values:

-   **true**: Enabled.
    
-   **false**: Disabled.
    

true

ZoneId

string

The zone ID of the cluster.

cn-hangzhou-h

Category

string

The edition of the cluster. Valid values:

-   **BASIC**: Basic Edition for reserved mode
    
-   **CLUSTER**: Cluster Edition for reserved mode
    
-   **MIXED\_STORAGE**: Cluster Edition for flexible mode (new)
    

**Note**

For more information about cluster editions, see [Editions](/help/en/analyticdb/analyticdb-for-mysql/product-overview/editions).

MIXED\_STORAGE

Engine

string

The database engine of the cluster. The value is fixed as **AnalyticDB**.

AnalyticDB

KmsId

string

The ID of the key that is used to encrypt disk data.

**Note**

This parameter is returned only when disk encryption is enabled for the AnalyticDB for MySQL cluster.

e1935511-cf88-1123-a0f8-1be8d251\*\*\*\*

InnerIp

string

The public IP address.

10.1.XX.XX

InnerPort

string

The public port number.

3306

DiskPerformanceLevel

string

The performance level of the disk.

PL1

ElasticIOResourceSize

string

The specifications of a single elastic resource node. Valid values:

-   8Core64GB: If the specifications of a single node are 8-core 64 GB, the specifications of an elastic I/O resource group are 24-core 192 GB.
    
-   12Core96GB: If the specifications of a single node are 12-core 96 GB, the specifications of an elastic I/O resource group are 36-core 288 GB.
    

8Core64GB

DiskEncryption

boolean

Indicates whether disk encryption is enabled. Valid values:

-   true: yes.
    
-   false: no.
    

false

TaskInfo

object

The task information.

Name

string

The task name.

analyticDBFlexibleScaleOut

Status

string

The task status. Valid values:

-   **NOT\_RUN**: Pending.
    
-   **RUNNING**: Running.
    
-   **SUCCEED**: Succeeded.
    

RUNNING

Progress

string

The task progress. Unit: %.

10

StepList

object

StepList

array<object>

The task steps.

object

The task step.

StepName

string

The step name.

ApplyResource

StepDesc

string

The step description.

Apply resource

StepStatus

string

The step status. Valid values:

-   **NOT\_RUN**: Pending.
    
-   **RUNNING**: Running.
    
-   **SUCCEED**: Succeeded.
    

SUCCEED

StepProgress

string

The step progress. Unit: %.

50

StartTime

string

The start time of the step. The time is in the YYYY-MM-DDThh:mm:ssZ format.

2024-03-10T09:28:34Z

EndTime

string

The end time of the step. The time is in the YYYY-MM-DDThh:mm:ssZ format.

2024-03-10T10:28:34Z

ProductVersion

string

The product version. Valid values:

-   **BasicVersion**: Basic Edition.
    
-   **EnterpriseVersion**: Enterprise Edition.
    

BasicVersion

SecondaryZoneId

string

The ID of the secondary zone.

**Note**

The value of this parameter cannot be the same as the value of the ZoneId parameter.

cn-hangzhou-i

SecondaryVSwitchId

string

The ID of the secondary vSwitch.

**Note**

The value of this parameter cannot be the same as the value of the VSwitchId parameter.

vsw-0jlxwqt4531fsb3jdzx6h

ReservedNodeSize

string

The specifications of the reserved node. Unit: AnalyticDB Compute Unit (ACU).

8ACU

ReservedNodeCount

integer

The number of reserved resource nodes.

3

ProductForm

string

The product form. Valid values:

-   **LegacyForm**: Legacy form.
    
-   **IntegrationForm**: Integrated form.
    

IntegrationForm

## Examples

Success response

`JSON` format

```
{
  "RequestId": "2895BB82-B2C1-408E-AA73-DB8D59******",
  "Items": {
    "DBCluster": [
      {
        "CreationTime": "2021-04-01T09:50:18Z",
        "EnableSpark": false,
        "DtsJobId": "dtsb1hp3790****",
        "DBNodeCount": 1,
        "Expired": "false",
        "MaintainTime": "04:00Z-05:00Z",
        "PayType": "Postpaid",
        "DiskType": "cloud_essd",
        "Tags": {
          "Tag": [
            {
              "Key": "tag1",
              "Value": "test1"
            }
          ]
        },
        "Mode": "flexible",
        "Port": 3306,
        "LockMode": "Unlock",
        "EngineVersion": "3.1.1.9",
        "EnableAirflow": true,
        "ExecutorCount": "1",
        "StorageResource": "8Core32GB",
        "DBClusterId": "am-bp111m2cfrdl1****",
        "ConnectionString": "am-bp111m2cfrdl1****.ads.aliyuncs.com",
        "RdsInstanceId": "rm-bp837jsdp2****",
        "DBClusterType": "Common",
        "CommodityCode": "ads",
        "ExpireTime": "2999-09-08T16:00:00Z",
        "DBNodeStorage": 300,
        "DBNodeClass": "E8",
        "LockReason": "instance_expired",
        "VPCId": "vpc-bp13h7uzhulpuxvnp****",
        "ComputeResource": "8Core32GB",
        "RegionId": "cn-hangzhou",
        "ElasticIOResource": 2,
        "VSwitchId": "vsw-bp1syh8vvw8yech7n****",
        "DBVersion": "3.0",
        "VPCCloudInstanceId": "am-bp111m2cfrdl1****-controller",
        "DBClusterStatus": "Running",
        "ResourceGroupId": "rg-acfmyiu4ekp****",
        "DBClusterNetworkType": "vpc",
        "DBClusterDescription": "adb_test",
        "UserENIStatus": true,
        "ZoneId": "cn-hangzhou-h",
        "Category": "MIXED_STORAGE",
        "Engine": "AnalyticDB",
        "KmsId": "e1935511-cf88-1123-a0f8-1be8d251****",
        "InnerIp": "10.1.XX.XX",
        "InnerPort": "3306",
        "DiskPerformanceLevel": "PL1",
        "ElasticIOResourceSize": "8Core64GB",
        "DiskEncryption": false,
        "TaskInfo": {
          "Name": "analyticDBFlexibleScaleOut",
          "Status": "RUNNING",
          "Progress": "10",
          "StepList": {
            "StepList": [
              {
                "StepName": "ApplyResource",
                "StepDesc": "Apply resource",
                "StepStatus": "SUCCEED",
                "StepProgress": "50",
                "StartTime": "2024-03-10T09:28:34Z",
                "EndTime": "2024-03-10T10:28:34Z"
              }
            ]
          }
        },
        "ProductVersion": "BasicVersion",
        "SecondaryZoneId": "cn-hangzhou-i",
        "SecondaryVSwitchId": "vsw-0jlxwqt4531fsb3jdzx6h",
        "ReservedNodeSize": "8ACU",
        "ReservedNodeCount": 3,
        "ProductForm": "IntegrationForm"
      }
    ]
  }
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

404

InvalidDBCluster.NotFound

The DBClusterId provided does not exist in our records.

The specified DBClusterId parameter does not exist. Make sure that the DBClusterId value is valid.

See [Error Codes](https://api.alibabacloud.com/document/adb/2019-03-15/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/adb/2019-03-15/DescribeDBClusterAttribute#workbench-doc-change-demo) for a complete list.

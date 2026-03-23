List Data Lakehouse Edition clusters.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/adb/2019-03-15/DescribeDBClusters)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/adb/2019-03-15/DescribeDBClusters)

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

adb:DescribeDBClusters

get

DBCluster

`acs:adb:{#regionId}:{#accountId}:dbcluster/*`

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

The region ID.

**Note**

You can call the [DescribeRegions](/help/en/analyticdb-for-mysql/api-describeregions) operation to view available region IDs.

cn-hangzhou

DBClusterIds

string

No

The cluster ID.

**Note**

You can specify any cluster ID in the specified region.

am-bp1r053byu48p\*\*\*\*

DBClusterDescription

string

No

The cluster description.

-   It cannot start with `http://` or `https://`.
    
-   It must be 2 to 256 characters in length.
    

test

DBClusterStatus

string

No

The cluster status. Valid values:

-   **Preparing**: Preparing.
    
-   **Creating**: Creating.
    
-   **Restoring**: Restoring from a backup.
    
-   **Running**: Running.
    
-   **Deleting**: Deleting.
    
-   **ClassChanging**: Upgrading or downgrading specifications.
    
-   **NetAddressCreating**: Creating a network endpoint.
    
-   **NetAddressDeleting**: Deleting a network endpoint.
    

Running

PageSize

integer

No

The number of entries to return on each page. Valid values:

-   **30** (default)
    
-   **50**
    
-   **100**
    

30

PageNumber

integer

No

The page number. Valid values are integers greater than 0 and less than or equal to the maximum value of the integer data type. Default value: **1**.

1

ResourceGroupId

string

No

The resource group ID.

rg-4690g37929XXXX

Tag

array<object>

No

The list of tags.

object

No

Details about the items in the list.

Key

string

No

The tag key. You can filter clusters by tag keys. You can specify up to 20 key-value pairs. The numbers n in `Tag.N.Key` and `Tag.N.Value` must be unique and consecutive integers starting from 1.

**Note**

A tag key can be up to 64 characters in length. It cannot start with `aliyun`, `acs:`, `http://`, or `https://`.

tag1

Value

string

No

The tag value. You can filter clusters by tag values. You can specify up to 20 key-value pairs. The numbers n in `Tag.N.Key` and `Tag.N.Value` must be unique and consecutive integers starting from 1.

**Note**

A tag value can be up to 64 characters in length. It cannot start with `aliyun`, `acs:`, `http://`, or `https://`.

test1

DBVersion

string

No

The database version. Valid value: **3.0**.

3.0

DBClusterVersion

string

No

Cluster version

-   **3.0**: Data Warehouse Edition.
    
-   **5.0** (default): Includes the Data Lakehouse Edition, Enterprise Edition, and Basic Edition.
    
-   **All**: All versions, including the Data Warehouse Edition, Data Lakehouse Edition, Enterprise Edition, and Basic Edition.
    

3.0

## Response elements

**Element**

**Type**

**Description**

**Example**

object

Details about the returned list.

TotalCount

integer

The total number of entries.

1

PageSize

integer

The number of entries returned on each page.

30

RequestId

string

The request ID.

D65A809F-34CE-4550-9BC1-0ED21ETG380

PageNumber

integer

The page number.

1

Items

object

DBCluster

array<object>

The list of clusters.

array<object>

Details about the cluster list.

DtsJobId

string

The DTS sync task ID. This parameter is returned only for MySQL analytic instances.

dtsb1578j90XXXX

DBNodeCount

integer

The number of node groups.

1

Expired

string

Indicates whether the cluster has expired. Valid values:

-   **true**: Expired.
    
-   **false**: Not expired.
    

false

CreateTime

string

The time when the cluster was created, in UTC. Format: _yyyy-MM-ddTHH:mm:ssZ_. Example: _2021-04-01T09:50:18Z_.

2021-04-01T09:50:18Z

PayType

string

The billing method. Valid values:

-   **Postpaid**: Pay-as-you-go.
    
-   **Prepaid**: Subscription.
    

Postpaid

DiskType

string

The disk type. Valid values:

-   **local\_ssd**: Local SSD.
    
-   **cloud**: Basic disk.
    
-   **cloud\_ssd**: Standard SSD.
    
-   **cloud\_efficiency**: Ultra disk.
    
-   **cloud\_essd0**: ESSD PL0.
    
-   **cloud\_essd**: ESSD PL1.
    
-   **cloud\_essd2**: ESSD PL2.
    
-   **cloud\_essd3**: ESSD PL3.
    

**Note**

For more information about ESSDs, see [ESSD specifications](/help/en/ecs/user-guide/essds).

cloud\_essd

Tags

object

Tag

array<object>

The list of tags.

object

Details about the tag list.

Key

string

The tag key.

**Note**

You can call the [TagResources](/help/en/analyticdb-for-mysql/api-tagresources) operation to add tags to a cluster.

tag1

Value

string

The tag value.

test1

Mode

string

The cluster mode. Valid values:

-   **flexible**: Flexible mode.
    
-   **reserver**: Reserved mode.
    

**Note**

-   For more information, see [Product editions](/help/en/analyticdb/analyticdb-for-mysql/product-overview/editions).
    

flexible

Port

string

The port number. Default value: 3306.

3306

LockMode

string

The cluster lock mode. Valid values:

-   **Unlock**: Unlocked.
    
-   **ManualLock**: Manually locked.
    
-   **LockByExpiration**: Locked due to expiration.
    
-   **LockByRestoration**: Locked before rollback.
    
-   **LockByDiskQuota**: Locked because storage usage reached 90% of the quota.
    

Unlock

StorageResource

string

The storage resource specification used in flexible mode for read and write operations. Increasing this resource improves cluster read and write performance.

8Core32GB

ExecutorCount

string

The number of compute nodes used by the cluster in flexible mode.

1

DBClusterId

string

The cluster ID.

am-bp163885f8q21\*\*\*\*

ConnectionString

string

The public endpoint of the cluster.

am-bp163885f8q21\*\*\*\*.ads.aliyuncs.com

RdsInstanceId

string

The source ApsaraDB RDS instance ID. This parameter is returned only for MySQL analytic instances.

rm-bp11q28kvl688\*\*\*\*

DBClusterType

string

The cluster type. Valid values:

-   **Common**: Standard cluster.
    
-   **RDS\_ANALYSIS**: MySQL analytic instance.
    

Common

CommodityCode

string

The commodity code. Fixed value: **ads**.

ads

ExpireTime

string

The time when the cluster expires, in UTC. Format: _yyyy-MM-ddTHH:mm:ssZ_. Example: _2999-09-08T16:00:00Z_.

**Note**

-   If the cluster uses the subscription billing method, this parameter returns the actual expiration time.
    
-   If the cluster uses the pay-as-you-go billing method, this parameter returns the fixed value **2999-09-08T16:00:00Z**.
    

2999-09-08T16:00:00Z

DBNodeStorage

integer

The storage capacity of the cluster, in GB.

300

DBNodeClass

string

The node specifications.

E8

LockReason

string

The reason why the cluster is locked.

**Note**

This parameter is returned only if the cluster is locked. Fixed value: **instance\_expire**.

instance\_expired

VPCId

string

The virtual private cloud (VPC) ID.

vpc-bp13h7uzhulpuxvnpXXXX

RegionId

string

The region ID where the cluster resides.

cn-hangzhou

ComputeResource

string

The compute resource specification used in flexible mode for data processing. Increasing compute resources speeds up queries. You can scale these resources up or down as needed.

8Core32GB

ElasticIOResource

integer

The Elastic IO Unit (EIU). For more information, see [EIU overview](/help/en/analyticdb-for-mysql/scale-up-or-out-elastic-io-resources).

**Note**

This parameter is returned only for clusters in flexible mode.

0

VSwitchId

string

The vSwitch ID.

vsw-bp1syh8vvw8yech7nXXXX

DBVersion

string

The database version. Only version **3.0** is supported.

3.0

VPCCloudInstanceId

string

The VPC instance ID.

am-bp163885f8q21\*\*\*\*-controller

DBClusterStatus

string

The cluster status. For more information, see [State table](/help/en/analyticdb/analyticdb-for-mysql/developer-reference/cluster-states).

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

The cluster description.

adb\_test

ZoneId

string

The zone ID where the cluster resides.

cn-hangzhou-h

Category

string

The product edition. Valid values:

-   **BASIC**: Basic Edition in reserved mode.
    
-   **CLUSTER**: Cluster Edition in reserved mode.
    
-   **MIXED\_STORAGE**: Cluster Edition in flexible mode (new).
    

**Note**

For more information, see [Product editions](/help/en/analyticdb/analyticdb-for-mysql/product-overview/editions).

MIXED\_STORAGE

Engine

string

The cluster engine. Fixed value: **AnalyticDB**.

AnalyticDB

InnerIp

string

The public IP address.

10.1.xx.xx

InnerPort

string

The port number.

3306

TaskInfo

object

Task progress information.

Name

string

The task name.

analyticDBFlexibleScaleOut

Status

string

The task status. Valid values:

-   **NOT\_RUN**: Waiting to run.
    
-   **RUNNING**: Running.
    
-   **SUCCEED**: Completed.
    

RUNNING

Progress

string

The task progress, in %.

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

-   **NOT\_RUN**: Waiting to run.
    
-   **RUNNING**: Running.
    
-   **SUCCEED**: Completed.
    

SUCCEED

StepProgress

string

The step progress, in %.

50

StartTime

string

The time when the step started. Format: YYYY-MM-DDThh:mm:ssZ.

2024-03-10T09:28:34Z

EndTime

string

The time when the step ended. Format: YYYY-MM-DDThh:mm:ssZ.

2024-03-10T10:28:34Z

ProductVersion

string

The product version. Valid values:

-   **BasicVersion**: Basic Edition.
    
-   **EnterpriseVersion**: Enterprise Edition.
    

EnterpriseVersion

## Examples

Success response

`JSON` format

```
{
  "TotalCount": 1,
  "PageSize": 30,
  "RequestId": "D65A809F-34CE-4550-9BC1-0ED21ETG380",
  "PageNumber": 1,
  "Items": {
    "DBCluster": [
      {
        "DtsJobId": "dtsb1578j90XXXX",
        "DBNodeCount": 1,
        "Expired": "false",
        "CreateTime": "2021-04-01T09:50:18Z",
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
        "Port": "3306",
        "LockMode": "Unlock",
        "StorageResource": "8Core32GB",
        "ExecutorCount": "1",
        "DBClusterId": "am-bp163885f8q21****",
        "ConnectionString": "am-bp163885f8q21****.ads.aliyuncs.com",
        "RdsInstanceId": "rm-bp11q28kvl688****",
        "DBClusterType": "Common",
        "CommodityCode": "ads",
        "ExpireTime": "2999-09-08T16:00:00Z",
        "DBNodeStorage": 300,
        "DBNodeClass": "E8",
        "LockReason": "instance_expired",
        "VPCId": "vpc-bp13h7uzhulpuxvnpXXXX",
        "RegionId": "cn-hangzhou",
        "ComputeResource": "8Core32GB",
        "ElasticIOResource": 0,
        "VSwitchId": "vsw-bp1syh8vvw8yech7nXXXX",
        "DBVersion": "3.0",
        "VPCCloudInstanceId": "am-bp163885f8q21****-controller",
        "DBClusterStatus": "Running",
        "ResourceGroupId": "rg-acfmyiu4ekp****",
        "DBClusterNetworkType": "vpc",
        "DBClusterDescription": "adb_test",
        "ZoneId": "cn-hangzhou-h",
        "Category": "MIXED_STORAGE",
        "Engine": "AnalyticDB",
        "InnerIp": "10.1.xx.xx",
        "InnerPort": "3306",
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
        "ProductVersion": "EnterpriseVersion"
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

500

InternalError

An error occurred while processing your request.

An internal error occurred. Please try again later.

503

ServiceUnavailable

An error occurred while processing your request.

The system is unavailable. Please try again later.

See [Error Codes](https://api.alibabacloud.com/document/adb/2019-03-15/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/adb/2019-03-15/DescribeDBClusters#workbench-doc-change-demo) for a complete list.

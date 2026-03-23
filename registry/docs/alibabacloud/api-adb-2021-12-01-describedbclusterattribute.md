This operation returns the details of a specific cluster.

## Operation description

For information about the endpoints for this service, see [Endpoints](/help/en/analyticdb/analyticdb-for-mysql/developer-reference/api-adb-2021-12-01-endpoint).

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/adb/2021-12-01/DescribeDBClusterAttribute)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/adb/2021-12-01/DescribeDBClusterAttribute)

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

\*DBClusterLakeVersion

`acs:adb:{#regionId}:{#accountId}:dbcluster/{#DBClusterId}`

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

The ID of the Data Lakehouse Edition cluster.

**Note**

You can call the [DescribeDBClusters](/help/en/doc-detail/454250.html) operation to obtain the cluster ID.

amv-wz9509beptiz\*\*\*\*

## Response elements

**Element**

**Type**

**Description**

**Example**

object

RequestId

string

The request ID.

A5C433C2-001F-58E3-99F5-3274C14DF8BD

Items

object

DBCluster

array<object>

List of cluster information for Data Lakehouse Edition.

array<object>

The details of the cluster.

CreationTime

string

The time when the cluster was created. The time is in UTC and the format is `yyyy-MM-ddThh:mm:ssZ`.

2022-07-01T09:50:18Z

Expired

string

Indicates whether the subscription cluster has expired. Valid values:

-   **true**: The cluster has expired.
    
-   **false**: The cluster has not expired.
    

**Note**

-   If a cluster has expired, it is locked or even released after a period of time. Renew the cluster. For more information, see [Renewal policy](/help/en/analyticdb/analyticdb-for-mysql/product-overview/renewal-policy).
    

-   This parameter is not returned for pay-as-you-go clusters.
    

false

MaintainTime

string

The maintenance window of the cluster. The time is in UTC and the format is `HH:mmZ-HH:mmZ`.

**Note**

For more information about maintenance windows, see [Set a maintenance window](/help/en/analyticdb/analyticdb-for-mysql/user-guide/configure-a-maintenance-window).

04:00Z-05:00Z

PayType

string

The billing method of the cluster. Valid values:

-   **Postpaid**: pay-as-you-go.
    
-   **Prepaid**: subscription.
    

Prepaid

Tags

object

Tag

array<object>

A list of tags.

object

Key

string

The tag key.

**Note**

Call the [TagResources](/help/en/analyticdb-for-mysql/api-tagresources) operation to create tags for the destination cluster.

tag1

Value

string

The tag value.

test1

Mode

string

The cluster mode. By default, **flexible** is returned, which indicates an elastic cluster.

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
    
-   **LockByExpiration**: The cluster is automatically locked upon expiration.
    

ManualLock

EngineVersion

string

The database engine version of the cluster.

3.1.16

StorageResource

string

The amount of reserved storage resources. An AnalyticDB Compute Unit (ACU) is equivalent to 1 core and 4 GB of memory. Storage resources are used for data reads and writes. Increasing storage resources improves the read and write performance of the cluster.

24ACU

DBClusterId

string

The cluster ID for the Enterprise Edition, Basic Edition, or Data Lakehouse Edition. The cluster ID for the Data Lakehouse Edition.

amv-wz9509beptiz\*\*\*\*

ConnectionString

string

The VPC endpoint of the cluster.

amv-wz9509beptiz\*\*\*\*.ads.aliyuncs.com

DBClusterType

string

The cluster type. By default, **Common** is returned, which indicates a regular cluster.

Common

CommodityCode

string

The commodity code of the cluster. Valid values:

-   **ads**: pay-as-you-go.
    
-   **ads\_pre**: subscription.
    

ads\_pre

ExpireTime

string

The expiration time of the cluster.

-   For a subscription cluster, the expiration time is returned.
    
-   For a pay-as-you-go cluster, this parameter is empty.
    

2022-10-01T09:50:18Z

LockReason

string

The reason why the cluster is locked.

**Note**

This parameter is returned only when the cluster is locked. The value is fixed as **instance\_expire**.

instance\_expire

VPCId

string

The virtual private cloud (VPC) ID.

vpc-bp13h7uzhulpu\*\*\*\*

ComputeResource

string

The amount of reserved computing resources. An AnalyticDB Compute Unit (ACU) is equivalent to 1 core and 4 GB of memory. Computing resources are used for data calculations. Increasing computing resources can speed up queries. These resources can be scaled elastically based on the actual performance of the cluster.

16ACU

RegionId

string

The region ID of the cluster.

cn-hangzhou

VSwitchId

string

The vSwitch ID.

vsw-uf629gydd54ld\*\*\*\*

DBVersion

string

The version of the AnalyticDB for MySQL cluster. Only version **5.0** is supported.

5.0

DBClusterStatus

string

The status of the cluster. Valid values:

-   **Preparing**: The cluster is being prepared.
    
-   **Creating**: The cluster is being created.
    
-   **Running**: The cluster is running.
    
-   **Deleting**: The cluster is being deleted.
    
-   **Restoring**: The cluster is being restored from a backup.
    
-   **ClassChanging**: The cluster specifications are being changed.
    
-   **NetAddressCreating**: A network connection is being created.
    
-   **NetAddressDeleting**: A network connection is being deleted.
    
-   **NetAddressModifying**: A network connection is being modified.
    

Running

ResourceGroupId

string

The resource group ID.

rg-acfmyiu4ekp\*\*\*\*

DBClusterNetworkType

string

The network type of the cluster. Only **VPC** is supported.

VPC

DBClusterDescription

string

The description of the cluster.

adb\_test

UserENIStatus

boolean

Indicates whether the elastic network interface (ENI) is enabled. Valid values:

-   **true**: enabled.
    
-   **false**: disabled.
    

false

ZoneId

string

The zone ID of the cluster.

cn-hangzhou-h

Engine

string

The database engine of the cluster. The value is fixed as **AnalyticDB**.

AnalyticDB

ReservedACU

string

The amount of remaining reserved computing resources that can be allocated in the cluster. An AnalyticDB Compute Unit (ACU) is equivalent to 1 core and 4 GB of memory.

24ACU

ComputeResourceTotal

string

The total amount of computing resources in the cluster. An AnalyticDB Compute Unit (ACU) is equivalent to 1 core and 4 GB of memory.

48ACU

StorageResourceTotal

string

The total amount of storage resources in the cluster. An AnalyticDB Compute Unit (ACU) is equivalent to 1 core and 4 GB of memory.

24ACU

SupportedFeatures

object

This parameter is reserved.

string

This parameter is reserved.

预留参数，不涉及。

ProductForm

string

This parameter is reserved.

预留参数，不涉及。

ReservedNodeSize

string

This parameter is reserved.

预留参数，不涉及。

ReservedNodeCount

integer

This parameter is reserved.

预留参数，不涉及。

ClickhouseEngineEnabled

boolean

Indicates whether the ClickHouse wide table engine is enabled.

-   **true**: The ClickHouse wide table engine is enabled.
    
-   **false**: The ClickHouse wide table engine is not enabled.
    

**Valid values:**

-   true :
    
    true
    
-   false :
    
    false
    

true

AINodeNumber

integer

ProductVersion

string

The edition of the cluster. Valid values:

-   **BasicVersion**: Basic Edition.
    
-   **EnterpriseVersion**: Enterprise Edition.
    

BasicVersion

KmsId

string

The ID of the key used to encrypt disk data.

**Note**

This parameter is returned only when disk encryption is enabled for the AnalyticDB for MySQL cluster.

e1935511-cf88-1123-a0f8-1be8d251\*\*\*\*

TaskInfo

object

The task information.

Name

string

The name of the task.

ScaleUpDBCluster

Status

string

The status of the task. Valid values:

-   NOT\_RUN: The task is waiting to run.
    
-   RUNNING: The task is running.
    
-   SUCCEED: The task is complete.
    

RUNNING

Progress

string

The progress of the task as a percentage.

10

StepList

object

StepList

array<object>

A list of steps for the task.

object

The details of a step.

StepName

string

The name of the step.

PrepareResources

StepDesc

string

The description of the step.

Prepare resources

StepStatus

string

The status of the step. Valid values:

-   NOT\_RUN: The step is waiting to run.
    
-   RUNNING: The step is running.
    
-   SUCCEED: The step is complete.
    

RUNNING

StepProgress

string

The progress of the step as a percentage.

50

StartTime

string

The start time of the step. The format is YYYY-MM-DDThh:mm:ssZ.

2024-03-10T09:28:34Z

EndTime

string

The end time of the step. The format is YYYY-MM-DDThh:mm:ssZ.

2024-03-10T10:28:34Z

UserENIVpcId

string

The ID of the VPC to which the ENI belongs.

vpc-rj9hnedlfm645uj\*\*\*\*\*\*

UserENIVSwitchOptions

string

A comma-separated list of vSwitches for the ENI.

vsw-rj9ixufmywqq98z\*\*\*\*\*\*,vsw-rj95ij6wcz656v7\*\*\*\*\*\*

UserENIZoneOptions

string

A comma-separated list of zones for the ENI.

cn-hangzhou-k,cn-hangzhou-h

SecondaryZoneId

string

SecondaryVSwitchId

string

DiskEncryption

boolean

ClickhouseEngineCacheSize

integer

The cache size of the ClickHouse wide table engine, in GB. A value of -1 indicates that the wide table engine is not enabled. Other numbers indicate the size of the disk cache.

100

AINodeSpec

string

## Examples

Success response

`JSON` format

```
{
  "RequestId": "A5C433C2-001F-58E3-99F5-3274C14DF8BD",
  "Items": {
    "DBCluster": [
      {
        "CreationTime": "2022-07-01T09:50:18Z",
        "Expired": "false",
        "MaintainTime": "04:00Z-05:00Z",
        "PayType": "Prepaid",
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
        "LockMode": "ManualLock",
        "EngineVersion": "3.1.16",
        "StorageResource": "24ACU",
        "DBClusterId": "amv-wz9509beptiz****",
        "ConnectionString": "amv-wz9509beptiz****.ads.aliyuncs.com",
        "DBClusterType": "Common",
        "CommodityCode": "ads_pre",
        "ExpireTime": "2022-10-01T09:50:18Z",
        "LockReason": "instance_expire",
        "VPCId": "vpc-bp13h7uzhulpu****",
        "ComputeResource": "16ACU",
        "RegionId": "cn-hangzhou",
        "VSwitchId": "vsw-uf629gydd54ld****",
        "DBVersion": "5.0",
        "DBClusterStatus": "Running",
        "ResourceGroupId": "rg-acfmyiu4ekp****",
        "DBClusterNetworkType": "VPC",
        "DBClusterDescription": "adb_test",
        "UserENIStatus": false,
        "ZoneId": "cn-hangzhou-h",
        "Engine": "AnalyticDB",
        "ReservedACU": "24ACU",
        "ComputeResourceTotal": "48ACU",
        "StorageResourceTotal": "24ACU",
        "SupportedFeatures": {
          "key": "预留参数，不涉及。"
        },
        "ProductForm": "预留参数，不涉及。",
        "ReservedNodeSize": "预留参数，不涉及。",
        "ReservedNodeCount": 0,
        "ClickhouseEngineEnabled": true,
        "AINodeNumber": 0,
        "ProductVersion": "BasicVersion",
        "KmsId": "e1935511-cf88-1123-a0f8-1be8d251****",
        "TaskInfo": {
          "Name": "ScaleUpDBCluster",
          "Status": "RUNNING",
          "Progress": "10",
          "StepList": {
            "StepList": [
              {
                "StepName": "PrepareResources",
                "StepDesc": "Prepare resources",
                "StepStatus": "RUNNING",
                "StepProgress": "50",
                "StartTime": "2024-03-10T09:28:34Z",
                "EndTime": "2024-03-10T10:28:34Z"
              }
            ]
          }
        },
        "UserENIVpcId": "vpc-rj9hnedlfm645uj******",
        "UserENIVSwitchOptions": "vsw-rj9ixufmywqq98z******,vsw-rj95ij6wcz656v7******",
        "UserENIZoneOptions": "cn-hangzhou-k,cn-hangzhou-h",
        "SecondaryZoneId": "",
        "SecondaryVSwitchId": "",
        "DiskEncryption": false,
        "ClickhouseEngineCacheSize": 100,
        "AINodeSpec": ""
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

See [Error Codes](https://api.alibabacloud.com/document/adb/2021-12-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/adb/2021-12-01/DescribeDBClusterAttribute#workbench-doc-change-demo) for a complete list.

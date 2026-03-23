Retrieves the details of a Polarlakebase instance.

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribePolarFsAttribute)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribePolarFsAttribute)

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

polardb:DescribePolarFsAttribute

get

\*All Resource

`*`

None

None

## Request syntax

```
POST  HTTP/1.1
```

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

PolarFsInstanceId

string

Yes

The ID of the Polarlakebase instance.

pfs-2ze0i74ka607\*\*\*\*\*

QueryFuseMountInfo

boolean

No

Specifies whether to query the FUSE mount information. Valid values:

-   **true**: Yes
    
-   **false**: No. This is the default value.
    

false

DBClusterId

string

No

The cluster ID.

**Note**

Call the [DescribeDBClusters](/help/en/polardb/polardb-for-mysql/api-describedbclusters) operation to view the details of all clusters in your account, including the cluster ID.

pc-bp1q76364ird\*\*\*\*\*

## Response elements

**Element**

**Type**

**Description**

**Example**

object

Response schema

RequestId

string

The request ID.

3F9E6A3B-C13E-4064-A010-18582A\*\*\*\*\*\*

RelativeDbClusterId

string

The ID of the associated PolarDB cluster.

pc-2zejpr41d9xk3uk34

PolarFsInstanceId

string

The ID of the Polarlakebase instance.

pfs-2ze0i74ka607\*\*\*\*\*

PolarFsStatus

string

The status of the Polarlakebase instance.

Running

PolarFsVersion

string

The version.

1.0.1-1.0.3

PayType

string

The billing method. Valid values:

-   **Postpaid**: pay-as-you-go.
    
-   **Prepaid**: subscription.
    

Prepaid

DBType

string

The database engine type. Valid values:

-   **MySQL**
    
-   **PostgreSQL**
    

MySQL

PolarFsInstanceDescription

string

The description of the Polarlakebase instance.

pfs-xxx

RegionId

string

The region ID.

cn-beijing

ZoneId

string

The zone ID of the vSwitch.

cn-beijing-k

VPCId

string

The ID of the virtual private cloud (VPC).

vpc-\*\*\*\*\*\*\*\*\*\*

VSwitchId

string

The vSwitch ID.

vsw-\*\*\*\*\*\*\*\*\*\*\*\*\*\*

SecurityGroupId

string

The ID of the managed security group.

sg-bp\*\*\*\*\*\*\*\*\*\*\*\*\*\*

CreateTime

string

The creation time.

2021-08-02T05:57:10Z

ExpireTime

string

The expiration time of the cluster.

**Note**

This parameter is returned only for subscription clusters. For pay-as-you-go clusters, an empty value is returned.

2025-10-10T16:00:00Z

Expired

string

Indicates whether the cluster has expired.

**Note**

This parameter is returned only for subscription clusters.

false

PolarFsType

string

The instance edition. Valid values:

-   **PolarFS 2.0**: 2.0
    
-   **PolarFS 1.0**: 1.0
    

PolarFS 2.0

StorageSpace

number

The storage space. Unit: GB.

1000

StorageUsed

number

The used storage space. Unit: bytes.

3012558848

Bandwidth

number

The bandwidth. Unit: MB/s.

100

BandwidthBaseLine

number

The baseline bandwidth. Unit: MB/s/TiB.

100

Category

string

The Polarlakebase series. Supported series include the following:

-   **high\_performance**: High-performance Edition
    
-   **basic**: Basic Edition
    
-   **cold**: Cold Storage Edition
    

high\_performance

LockMode

string

The lock mode. Valid values:

-   **Unlock**: The cluster is not locked.
    
-   **ManualLock**: The cluster is manually locked.
    
-   **LockByExpiration**: The cluster is automatically locked after it expires.
    

Unlock

StorageType

string

The storage class for the High-performance Edition. Valid values:

-   **ESSDPL1**
    
-   **ESSDPL0**
    

The storage class for the Basic Edition. Valid values:

-   **city\_redundancy**: zone-redundant storage
    

essdpl1

AcceleratingEnable

string

Indicates whether the acceleration cache is enabled. Valid values:

-   **ON**: Enabled
    
-   **OFF**: Disabled
    

ON

AcceleratedStorageSpace

number

The accelerated storage space. Unit: GB.

1000

MountInfo

object

The mount configuration.

PolarFsCluster

string

The file system name.

pfs-\*\*\*\*\*\*\*\*\*\*

Token

string

The token value.

a734298c391cb9ebd05e2ee85feb624

PolarDbProxy

string

The cluster management address.

TCP://\*\*.\*\*.\*\*.\*\*:3000,TCP://\*\*.\*\*.\*\*.\*\*:3000,TCP://\*\*.\*\*.\*\*.\*\*:3000

MinorVersion

string

The minor version of the instance.

v1.3.0-v1.1.1

ClientDownloadPath

string

The download path for the client.

oss://\*

MetaUrl

string

The encrypted metadata address for the FUSE mount.

e6cc1d2e2a6fa292038d999fda6501\*\*\*\*\*

RelativePfsClusterId

string

BucketId

string

FileSystemId

string

CustomBucketPath

string

The custom bucket path.

xxxxxx-%d.oss-cn-beijing-internal.aliyuncs.com

## Examples

Success response

`JSON` format

```
{
  "RequestId": "3F9E6A3B-C13E-4064-A010-18582A******",
  "RelativeDbClusterId": "pc-2zejpr41d9xk3uk34",
  "PolarFsInstanceId": "pfs-2ze0i74ka607*****",
  "PolarFsStatus": "Running",
  "PolarFsVersion": "1.0.1-1.0.3",
  "PayType": "Prepaid",
  "DBType": "MySQL",
  "PolarFsInstanceDescription": "pfs-xxx",
  "RegionId": "cn-beijing",
  "ZoneId": "cn-beijing-k",
  "VPCId": "vpc-**********",
  "VSwitchId": "vsw-**************",
  "SecurityGroupId": "sg-bp**************",
  "CreateTime": "2021-08-02T05:57:10Z",
  "ExpireTime": "2025-10-10T16:00:00Z",
  "Expired": "false",
  "PolarFsType": "PolarFS 2.0",
  "StorageSpace": 1000,
  "StorageUsed": 3012558848,
  "Bandwidth": 100,
  "BandwidthBaseLine": 100,
  "Category": "high_performance",
  "LockMode": "Unlock",
  "StorageType": "essdpl1",
  "AcceleratingEnable": "ON",
  "AcceleratedStorageSpace": 1000,
  "MountInfo": {
    "PolarFsCluster": "pfs-**********",
    "Token": "a734298c391cb9ebd05e2ee85feb624",
    "PolarDbProxy": "TCP://**.**.**.**:3000,TCP://**.**.**.**:3000,TCP://**.**.**.**:3000"
  },
  "MinorVersion": "v1.3.0-v1.1.1",
  "ClientDownloadPath": "oss://*",
  "MetaUrl": "e6cc1d2e2a6fa292038d999fda6501*****",
  "RelativePfsClusterId": "",
  "BucketId": "",
  "FileSystemId": "",
  "CustomBucketPath": "xxxxxx-%d.oss-cn-beijing-internal.aliyuncs.com"
}
```

## Error codes

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/DescribePolarFsAttribute#workbench-doc-change-demo) for a complete list.

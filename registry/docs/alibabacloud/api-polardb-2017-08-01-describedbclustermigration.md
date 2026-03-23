Queries the migration status of a PolarDB cluster.

## Operation description

-   You can use this operation to query the status of a one-click migration from an ApsaraDB RDS for MySQL instance to a PolarDB for MySQL cluster. For more information, see [Upgrade an ApsaraDB RDS for MySQL instance to PolarDB for MySQL](/help/en/polardb/polardb-for-mysql/user-guide/overview-43).
    
-   Before you call this operation, you must create a one-click upgrade task for the cluster by calling the [CreateDBCluster](/help/en/polardb/polardb-for-mysql/api-createdbcluster) operation and setting the **CreationOption** parameter to **MigrationFromRDS**.
    

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeDBClusterMigration)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/polardb/2017-08-01/DescribeDBClusterMigration)

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

polardb:DescribeDBClusterMigration

get

\*dbcluster

`acs:polardb:{#regionId}:{#accountId}:dbcluster/{#dbclusterId}`

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

The cluster ID.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*

## Response elements

**Element**

**Type**

**Description**

**Example**

object

DBClusterEndpointList

array<object>

The details of the PolarDB endpoints.

array<object>

AddressItems

array<object>

The details of the connection strings.

object

VSwitchId

string

The ID of the virtual switch.

vsw-\*\*\*\*\*\*\*\*\*\*

ConnectionString

string

The connection string.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*.rwlb.rds.aliyuncs.com

NetType

string

The network type of the endpoint. Valid values:

-   **Public**: An endpoint for the Internet.
    
-   **Private**: A private endpoint.
    
-   **Inner**: A private endpoint in a classic network.
    

Private

Port

string

The port.

3306

VPCId

string

The ID of the virtual private cloud (VPC).

vpc-\*\*\*\*\*\*\*\*\*\*

IPAddress

string

The IP address.

192.\*\*\*.\*\*\*.10

SSLEnabled

string

Indicates whether Secure Sockets Layer (SSL) encryption is enabled. Valid values:

-   **Enabled**: SSL encryption is enabled.
    
-   **Disabled**: SSL encryption is disabled.
    

Enabled

DBEndpointId

string

The endpoint ID.

pe-\*\*\*\*\*\*\*\*\*\*\*

EndpointType

string

The type of the endpoint. Valid values:

-   **Cluster**: The default cluster endpoint.
    
-   **Primary**: The primary endpoint.
    
-   **Custom**: A custom cluster endpoint.
    

Cluster

ReadWriteMode

string

The read/write mode. Valid values:

-   ReadWrite: Read and write (automatic read/write splitting).
    
-   ReadOnly (Default): Read-only.
    

ReadOnly

Comment

string

The comments on the migration exception. If no exception occurs during the migration, an empty value is returned.

test

RequestId

string

The request ID.

F2A9EFA7-915F-4572-8299-85A307\*\*\*\*\*\*

ExpiredTime

string

The time when the replication relationship between the ApsaraDB RDS instance and the PolarDB cluster expires. The time is in the `YYYY-MM-DDThh:mm:ssZ` format and is displayed in UTC.

2020-06-17T01:56:36Z

DBClusterId

string

The cluster ID.

pc-\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*\*

Topologies

string

The data synchronization relationship. Valid values:

-   **RDS2POLARDB**: Data is synchronized from the ApsaraDB RDS instance to the PolarDB cluster.
    
-   **POLARDB2RDS**: Data is synchronized from the PolarDB cluster to the ApsaraDB RDS instance.
    

RDS2POLARDB

RdsReadWriteMode

string

The read/write mode of the source ApsaraDB RDS instance. Valid values:

-   **rw**: Read and write.
    
-   **ro**: Read-only.
    

rw

SourceRDSDBInstanceId

string

The ID of the source ApsaraDB RDS instance.

rm-\*\*\*\*\*\*\*\*\*\*\*\*

DBClusterReadWriteMode

string

The read/write mode of the cluster. Valid values:

-   **rw**: Read and write.
    
-   **ro**: Read-only.
    

ro

DelayedSeconds

integer

The replication delay between the ApsaraDB RDS instance and the PolarDB cluster, in seconds.

0

MigrationStatus

string

The migration status of the PolarDB cluster. Valid values:

-   **NO\_MIGRATION**: No migration task is created.
    
-   **RDS2POLARDB\_CLONING**: Data is being cloned.
    
-   **RDS2POLARDB\_SYNCING**: Data is being synchronized. In this state, the PolarDB cluster is read-only, and the ApsaraDB RDS instance is read-write.
    
-   **SWITCHING**: The database is being switched.
    
-   **POLARDB2RDS\_SYNCING**: The database switch is complete. In this state, the PolarDB cluster is read-write, and the ApsaraDB RDS instance is read-only. Change the endpoints in your application.
    
-   **ROLLBACK**: The migration is being rolled back. After the rollback is complete, the migration status changes to **RDS2POLARDB\_SYNCING**.
    
-   **CLOSING\_MIGRATION**: The migration task is being shut down.
    

RDS2POLARDB\_SYNCING

DtsInstanceId

string

The ID of the sync task.

dts\*\*\*\*\*\*\*\*\*\*618bs

RdsEndpointList

array<object>

The details of the ApsaraDB RDS endpoints.

array<object>

AddressItems

array<object>

The details of the connection strings.

object

VSwitchId

string

The ID of the vSwitch.

vsw-\*\*\*\*\*\*\*\*\*\*\*\*\*\*

ConnectionString

string

The connection string.

rm-\*\*\*\*\*\*\*\*\*\*\*.mysql.rds.aliyuncs.com

NetType

string

The network type of the endpoint. Valid values:

-   **Public**: An endpoint for the Internet.
    
-   **Private**: A private endpoint.
    
-   **Inner**: A private endpoint in a classic network.
    

Private

Port

string

The port.

3306

VPCId

string

The ID of the VPC.

vpc-\*\*\*\*\*\*\*\*\*\*\*\*

IPAddress

string

The IP address.

172.\*\*\*.\*\*\*.173

SSLEnabled

string

Indicates whether SSL encryption is enabled. Valid values:

-   **Enabled**: SSL encryption is enabled.
    
-   **Disabled**: SSL encryption is disabled.
    

Enabled

DBEndpointId

string

The endpoint ID.

rm-\*\*\*\*\*\*\*\*\*\*\*\*-normal

EndpointType

string

The type of the endpoint. Valid values:

-   **Normal**: A regular endpoint.
    
-   **ReadWriteSplitting**: A read/write splitting endpoint.
    

Normal

CustinsType

string

The instance type.

ReadOnly Maxscale Primary

SrcDbType

string

The type of the source database. Valid values:

-   **PolarDBMySQL**: The source database for a major version upgrade of a PolarDB cluster.
    
-   **RDS**: The source database for migrating data from an ApsaraDB RDS instance to a PolarDB for MySQL cluster.
    

PolarDBMySQL

## Examples

Success response

`JSON` format

```
{
  "DBClusterEndpointList": [
    {
      "AddressItems": [
        {
          "VSwitchId": "vsw-**********",
          "ConnectionString": "pc-**************.rwlb.rds.aliyuncs.com",
          "NetType": "Private",
          "Port": "3306",
          "VPCId": "vpc-**********",
          "IPAddress": "192.***.***.10",
          "SSLEnabled": "Enabled"
        }
      ],
      "DBEndpointId": "pe-***********",
      "EndpointType": "Cluster",
      "ReadWriteMode": "ReadOnly"
    }
  ],
  "Comment": "test",
  "RequestId": "F2A9EFA7-915F-4572-8299-85A307******",
  "ExpiredTime": "2020-06-17T01:56:36Z",
  "DBClusterId": "pc-****************",
  "Topologies": "RDS2POLARDB",
  "RdsReadWriteMode": "rw",
  "SourceRDSDBInstanceId": "rm-************",
  "DBClusterReadWriteMode": "ro",
  "DelayedSeconds": 0,
  "MigrationStatus": "RDS2POLARDB_SYNCING",
  "DtsInstanceId": "dts**********618bs",
  "RdsEndpointList": [
    {
      "AddressItems": [
        {
          "VSwitchId": "vsw-**************",
          "ConnectionString": "rm-***********.mysql.rds.aliyuncs.com",
          "NetType": "Private",
          "Port": "3306",
          "VPCId": "vpc-************",
          "IPAddress": "172.***.***.173",
          "SSLEnabled": "Enabled"
        }
      ],
      "DBEndpointId": "rm-************-normal",
      "EndpointType": "Normal",
      "CustinsType": "ReadOnly\nMaxscale\nPrimary"
    }
  ],
  "SrcDbType": "PolarDBMySQL"
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

404

InvalidDBClusterId.NotFound

The DBClusterId provided does not exist in our records.

The specified DBClusterId parameter does not exist in the current record.

See [Error Codes](https://api.alibabacloud.com/document/polardb/2017-08-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/polardb/2017-08-01/DescribeDBClusterMigration#workbench-doc-change-demo) for a complete list.

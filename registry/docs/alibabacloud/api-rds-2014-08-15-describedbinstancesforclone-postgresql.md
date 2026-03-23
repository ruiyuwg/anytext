Queries a list of instances.

## Operation description

This operation is phased out.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/DescribeDBInstancesForClone)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/DescribeDBInstancesForClone)

## Authorization information

The following table shows the authorization information corresponding to the API. The authorization information can be used in the `Action` policy element to grant a RAM user or RAM role the permissions to call this API operation. Description:

-   Operation: the value that you can use in the Action element to specify the operation on a resource.
-   Access level: the access level of each operation. The levels are read, write, and list.
-   Resource type: the type of the resource on which you can authorize the RAM user or the RAM role to perform the operation. Take note of the following items:
    -   For mandatory resource types, indicate with a prefix of \* .
    -   If the permissions cannot be granted at the resource level, `All Resources` is used in the Resource type column of the operation.
-   Condition Key: the condition key that is defined by the cloud service.
-   Associated operation: other operations that the RAM user or the RAM role must have permissions to perform to complete the operation. To complete the operation, the RAM user or the RAM role must have the permissions to perform the associated operations.

Operation

Access level

Resource type

Condition key

Associated operation

rds:DescribeDBInstancesForClone

get

\*DBInstance

`acs:rds:{#regionId}:{#accountId}:dbinstance/{#DbInstanceId}`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

ClientToken

string

No

The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length.

ETnLKlblzczshOTUbOCzxxxxxxxxxx

proxyId

string

No

The ID of the proxy mode.

API

Engine

string

No

The database engine of the instance. Valid values:

-   MySQL
-   SQLServer
-   PostgreSQL
-   PPAS
-   MariaDB

By default, this operation queries the instances that run any of the supported database engine types.

MySQL

ZoneId

string

No

The zone ID of the instance.

cn-hangzhou-h

DBInstanceStatus

string

No

The status of the instance. For more information, see [Instance state table](/help/en/rds/developer-reference/instance-state-table).

Running

Expired

string

No

Specifies whether the instance expires. Valid values:

-   **True**: queries the instances that have expired.
-   **False**: does not query instances that have expired.

True

SearchKey

string

No

The keyword that is used for the search. The keyword can be part of an instance ID or an instance description.

rm-uf6w

DBInstanceId

string

No

The ID of the instance.

rm-uf6wjk5xxxxxxxxxx

DBInstanceType

string

No

The role of the instance that you want to query. Valid values:

-   **Primary**: primary instance
-   **Readonly**: read-only instance
-   **Guard**: disaster recovery instance
-   **Temp**: temporary instance

By default, this operation queries the instances of all roles.

Primary

RegionId

string

Yes

The region ID of the instance.

cn-hangzhou

PageSize

integer

No

The number of entries to return on each page. Valid values: **1 to 100**.

Default value: **30**.

30

PageNumber

integer

No

The number of the page to return.

1

InstanceNetworkType

string

No

The network type of the instance. Valid values:

-   **Classic**
-   **VPC**

Classic

VpcId

string

No

The ID of the virtual private cloud (VPC).

vpc-j6cjvqms29yxxxxxxxxxx

VSwitchId

string

No

The ID of the vSwitch.

vsw-j6csw46bgrgkxxxxxxxxxx

DBInstanceClass

string

No

The instance type of the instance. For more information, see [Instance types](/help/en/rds/product-overview/primary-apsaradb-rds-instance-types).

mysql.n1.micro.1

EngineVersion

string

No

The version of the database engine.

5.7

NodeType

string

No

The type of the database node. Valid values:

-   **Master**: the primary node
-   **Slave**: the secondary node

Master

PayType

string

No

The billing method of the instance. Valid values:

-   **Postpaid**: pay-as-you-go
-   **Prepaid**: subscription

By default, this operation queries the instances that use any of the supported billing methods.

Postpaid

ConnectionMode

string

No

The connection mode of the instance. Valid values:

-   **Standard**: standard mode
-   **Safe**: database proxy mode

By default, this operation queries the instances that use any of the supported connection modes.

Standard

CurrentInstanceId

string

No

The ID of the current instance.

rm-uf6wjk5xxxxxxxxxx

ResourceGroupId

string

No

The ID of the resource group.

rg-acfmy\*\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

RequestId

string

The ID of the request.

1E43AAE0-BEE8-43DA-860D-EAF2AA0724DC

PageNumber

integer

The page number of the returned page.

12

PageRecordCount

integer

The number of entries returned on the current page.

10

TotalRecordCount

integer

The total number of entries returned.

120

Items

array<object>

An array that consists of the details about the instances.

DBInstance

object

VpcId

string

The ID of the virtual private cloud (VPC).

vpc-bp1opxu1zkhxxxxxxxxxx

ReplicateId

string

None.

N/A

TempDBInstanceId

string

The ID of the temporary instance.

sub138xxxxx\_rm-xxxxx

DBInstanceStorageType

string

The storage type of the instance. Valid values:

-   **local\_ssd/ephemeral\_ssd**: local SSD
-   **cloud\_ssd**: standard SSD.
-   **cloud\_essd**: enhanced SSD (ESSD)

local\_ssd

CreateTime

string

The time when the instance was created. The time follows the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time is displayed in UTC.

2018-11-05T11:26:02Z

PayType

string

The billing method of the instance. Valid values:

-   **Postpaid**: pay-as-you-go
-   **Prepaid**: subscription

Postpaid

MutriORsignle

boolean

Indicates whether multi-region deployment is used. Valid values:

-   **true**: Multi-region deployment is used.
-   **false**: Multi-region deployment is not used.

false

ConnectionMode

string

The connection mode of the instance. Valid values:

-   **Standard**: standard mode
-   **Safe**: database proxy mode

Standard

LockMode

string

The lock method of the instance. Valid values:

-   **Unlock**: The instance is not locked.
-   **ManualLock**: The instance is manually locked.
-   **LockByExpiration**: The instance is automatically locked after it expires.
-   **LockByRestoration**: The instance is automatically locked before a rollback.
-   **LockByDiskQuota**: The instance is automatically locked because its storage capacity is exhausted and the instance is inaccessible.

Unlock

EngineVersion

string

The version of the database engine.

5.7

VpcCloudInstanceId

string

The ID of the instance in the VPC.

rm-uf6wjk5xxxxxxxxxx

InsId

integer

The ID of the instance role.

1

InstanceNetworkType

string

The network type of the instance. Valid values:

-   **Classic**
-   **VPC**

Classic

MasterInstanceId

string

The ID of the primary instance. If the value of this parameter is null, the instance is a primary instance.

rm-uf6wjk5xxxxxxxxxx

DBInstanceDescription

string

The name of the instance. It must be 2 to 256 characters in length. The value can contain letters, digits, underscores (\_), and hyphens (-). The value must start with a letter.

**Note** The value cannot start with http:// or https://.

Test

ExpireTime

string

The time when the instance expired. The time follows the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time is displayed in UTC.

2018-11-28T11:26:02Z

DBInstanceNetType

string

The network connection type of the instance. Valid values:

-   **Internet**
-   **Intranet**

Intranet

DBInstanceType

string

The role of the instance. Valid values:

-   **Primary**: primary instance
-   **Readonly**: read-only instance
-   **Guard**: disaster recovery instance
-   **Temp**: temporary instance

Primary

DestroyTime

string

The time when the instance was destroyed. The time follows the ISO 8601 standard in the _yyyy-MM-dd_T_HH:mm:ss_Z format. The time is displayed in UTC.

2018-12-05T11:26:02Z

LockReason

string

The reason why the instance was locked.

instance\_expired

DBInstanceStatus

string

The status of the instance. For more information, see [Instance state table](/help/en/rds/developer-reference/instance-state-table).

Running

GuardDBInstanceId

string

The ID of the disaster recovery instance. This parameter is returned only when the instance is a primary instance and has a disaster recovery instance.

rm-uf64zsuxxxxxxxxxx

RegionId

string

The region ID of the instance.

cn-hangzhou

VSwitchId

string

The ID of the vSwitch.

vsw-uf6adz52c2pxxxxxxxxxx

ResourceGroupId

string

The ID of the resource group.

rg-acfmyxxxxx

ZoneId

string

The zone ID of the instance.

cn-hangzhou-h

DBInstanceId

string

The ID of the instance.

rm-uf6wjk5xxxxxxxxxx

Category

string

The RDS edition of the instance. Valid values:

-   **Basic**: RDS Basic Edition
-   **HighAvailability**: RDS High-availability Edition
-   **Finance**: RDS Enterprise Edition

HighAvailability

Engine

string

The database engine of the instance. Valid values:

-   MySQL
-   SQLServer
-   PostgreSQL
-   PPAS
-   MariaDB

MySQL

DBInstanceClass

string

The instance type of the instance. For more information, see [Instance types](/help/en/rds/product-overview/primary-apsaradb-rds-instance-types).

mysql.n1.micro.1

ReadOnlyDBInstanceIds

array<object>

An array consisting of the IDs of the read-only instances that are attached to the primary instance.

ReadOnlyDBInstanceId

object

DBInstanceId

string

The ID of the read-only instance.

rm-bpxxxxxxxxx

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "1E43AAE0-BEE8-43DA-860D-EAF2AA0724DC",
  "PageNumber": 12,
  "PageRecordCount": 10,
  "TotalRecordCount": 120,
  "Items": {
    "DBInstance": [
      {
        "VpcId": "vpc-bp1opxu1zkhxxxxxxxxxx",
        "ReplicateId": "N/A\n",
        "TempDBInstanceId": "sub138xxxxx_rm-xxxxx",
        "DBInstanceStorageType": "local_ssd",
        "CreateTime": "2018-11-05T11:26:02Z",
        "PayType": "Postpaid",
        "MutriORsignle": false,
        "ConnectionMode": "Standard",
        "LockMode": "Unlock",
        "EngineVersion": 5.7,
        "VpcCloudInstanceId": "rm-uf6wjk5xxxxxxxxxx",
        "InsId": 1,
        "InstanceNetworkType": "Classic",
        "MasterInstanceId": "rm-uf6wjk5xxxxxxxxxx",
        "DBInstanceDescription": "Test",
        "ExpireTime": "2018-11-28T11:26:02Z",
        "DBInstanceNetType": "Intranet",
        "DBInstanceType": "Primary",
        "DestroyTime": "2018-12-05T11:26:02Z",
        "LockReason": "instance_expired",
        "DBInstanceStatus": "Running",
        "GuardDBInstanceId": "rm-uf64zsuxxxxxxxxxx",
        "RegionId": "cn-hangzhou",
        "VSwitchId": "vsw-uf6adz52c2pxxxxxxxxxx\t",
        "ResourceGroupId": "rg-acfmyxxxxx",
        "ZoneId": "cn-hangzhou-h",
        "DBInstanceId": "rm-uf6wjk5xxxxxxxxxx",
        "Category": "HighAvailability",
        "Engine": "MySQL",
        "DBInstanceClass": "mysql.n1.micro.1",
        "ReadOnlyDBInstanceIds": {
          "ReadOnlyDBInstanceId": [
            {
              "DBInstanceId": "rm-bpxxxxxxxxx"
            }
          ]
        }
      }
    ]
  }
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidDBInstanceType.ValueNotSupport

The specified parameter"DBInstanceType" is not valid.

The operation failed. The instance type is invalid. Specify a valid instance type.

400

ApiError

API error.

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Rds/2014-08-15/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-04-29

The API operation is deprecated. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeDBInstancesForClone?updateTime=2025-04-29#workbench-doc-change-demo)

2024-11-20

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeDBInstancesForClone?updateTime=2024-11-20#workbench-doc-change-demo)

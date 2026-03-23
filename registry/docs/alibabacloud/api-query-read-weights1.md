Queries system-assigned read weights.

## Operation description

### [](#supported-database-engines)[](#)Supported database engines

-   MySQL
-   SQL Server

### [](#feature-description)[](#)Feature description

When the [read/write splitting](/help/en/rds/apsaradb-rds-for-mysql/read-or-write-splitting-overview) feature is enabled, this operation is used to calculate system-assigned read weights. For more information about custom read weights, see [DescribeDBInstanceNetInfo](/help/en/rds/developer-reference/api-rds-2014-08-15-describedbinstancenetinfo) .

### [](#prerequisites)[](#)Prerequisites

Before you call this operation, make sure that the following requirements are met:

-   If the instance runs MySQL, the instance uses a shared proxy.
    
-   The instance runs one of the following MySQL versions and RDS editions:
    
    -   MySQL 5.7 on RDS High-availability Edition (with local disks)
    -   MySQL 5.6
    -   SQL Server on RDS Cluster Edition

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/CalculateDBInstanceWeight)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/CalculateDBInstanceWeight)

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

rds:CalculateDBInstanceWeight

get

\*DBInstance

`acs:rds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}`

-   rds:ResourceTag

none

## Request parameters

Parameter

Type

Required

Description

Example

DBInstanceId

string

Yes

The primary instance ID. You can call the DescribeDBInstances operation to query the instance ID.

rm-uf6wjk5xxxxxxx

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

RequestId

string

The request ID.

C816A4BF-A6EC-4722-95F9-2055859CCFD2

Items

array<object>

An array that consists of information about the system-assigned read weight.

DBInstanceWeight

object

ReadonlyInstanceSQLDelayedTime

string

The latency at which the read-only instances replicate data. The read-only instances replicate data from the primary instance at the latency that is specified by the **ReadonlyInstanceSQLDelayedTime** parameter. Unit: seconds.

30

Weight

string

The read weight that the system calculates in real time for the instance.

100

DBInstanceType

string

The type of the instance. Valid values:

-   **Master**: primary instance
-   **Readonly**: read-only instance

Master

DBInstanceId

string

The instance ID

rm-uf6wjk5xxxxxxx

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "C816A4BF-A6EC-4722-95F9-2055859CCFD2",
  "Items": {
    "DBInstanceWeight": [
      {
        "ReadonlyInstanceSQLDelayedTime": 30,
        "Weight": 100,
        "DBInstanceType": "Master",
        "DBInstanceId": "rm-uf6wjk5xxxxxxx"
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

403

IncorrectDBInstanceType

Current DB instance engine and type does not support operations.

The operation failed. The operation is not supported for the database engine of the RDS instance.

403

IncorrectDBInstanceConnType

Current DB instance conn type does not support this operation.

The operation is not supported for the connection type of the RDS instance.

403

IncorrectDBType

The current DB type does not support this operation.

The operation failed. The operation is not supported by the database engine of the RDS instance. Specify a different database engine.

404

InvalidDBInstanceName.NotFound

Invalid DBInstanceId NotFound.

The instance ID cannot be found.

404

IncorrectDBInstanceLockMode

Current DB instance lock mode does not support this operation.

The operation failed. The RDS instance is locked.

404

InvalidDBInstanceClass.NotFound

Specified DB instance class is not found.

The configuration or the instance type cannot be found or has been discontinued. Specify a different configuration or a different instance type.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Rds/2014-08-15/errorCode).

## Change history

Change time

Summary of changes

Operation

2022-08-12

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/CalculateDBInstanceWeight?updateTime=2022-08-12#workbench-doc-change-demo)

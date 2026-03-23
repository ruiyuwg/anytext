Queries the configuration of the pg\_hba.conf file of an ApsaraDB RDS for PostgreSQL instance.

## Operation description

### [](#supported-database-engines)[](#)Supported database engines

RDS PostgreSQL

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/DescribePGHbaConfig)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/DescribePGHbaConfig)

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

rds:DescribePGHbaConfig

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

ClientToken

string

No

A reserved parameter. You do not need to specify this parameter.

1

DBInstanceId

string

Yes

The instance ID. You can call the DescribeDBInstances operation to query the instance ID.

pgm-bp1lymyn1v3i\*\*\*\*

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

HbaModifyTime

string

The time when the previous modification was made to the pg\_hba.conf file.

2021-11-25T06:00:40Z

ModifyStatusReason

string

The reason why the previous modification was made to the pg\_hba.conf file.

The specified users (testuser) is not exist.

RequestId

string

The request ID.

A147A124-A147-5CCF-9609-B73C028848DF

LastModifyStatus

string

The status of the previous modification to the pg\_hba.conf file. Valid values:

-   **success**
-   **setting**
-   **failed**

success

DefaultHbaItems

array<object>

The default configuration items of the pg\_hba.conf file.

HbaItem

object

Type

string

The type of connection to the instance. The value is fixed as host.

host

Mask

string

The mask of the instance. The value is fixed as null.

null

Database

string

The names of the databases that the specified users are allowed to access. The value is fixed as all or replication.

all

PriorityId

integer

The priority of the configuration items in the pg\_hba.conf file. This value is automatically generated.

0

Address

string

The IP addresses from which the specified users can access the specified databases. The value is fixed as 0.0.0.0/0.

0.0.0.0/0

Option

string

The value of this parameter is based on the value of the Method parameter. The value is fixed as null.

null

Method

string

The authentication method. The value is fixed as md5.

md5

User

string

The user that is allowed to access the instance. The value is fixed as all.

all

RunningHbaItems

array<object>

The current configuration items of the pg\_hba.conf file.

HbaItem

object

Type

string

The connection type. Valor:

-   **host**: The record matches TCP/IP connections, including SSL connections and non-SSL connections.
-   **hostssl**: The record matches only TCP/IP connections that are established over SSL.
-   **hostnossl**: The record matches only TCP/IP connections that are not established over SSL connections.

host

Mask

string

The mask of the IP address.

null

Database

string

The name of the database.

all

PriorityId

integer

The priority.

3

Address

string

The IP address of the client.

0.0.0.0/0

Option

string

The value of this parameter varies based on the value of the Method parameter. The value is fixed as null.

null

Method

string

The authentication method.

md5

User

string

The username of the account.

all

DBInstanceId

string

The instance ID.

rm-bp1\*\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "HbaModifyTime": "2021-11-25T06:00:40Z",
  "ModifyStatusReason": "The specified users (testuser) is not exist.",
  "RequestId": "A147A124-A147-5CCF-9609-B73C028848DF",
  "LastModifyStatus": "success",
  "DefaultHbaItems": {
    "HbaItem": [
      {
        "Type": "host",
        "Mask": null,
        "Database": "all",
        "PriorityId": 0,
        "Address": "0.0.0.0/0",
        "Option": null,
        "Method": "md5",
        "User": "all"
      }
    ]
  },
  "RunningHbaItems": {
    "HbaItem": [
      {
        "Type": "host",
        "Mask": null,
        "Database": "all",
        "PriorityId": 3,
        "Address": "0.0.0.0/0",
        "Option": null,
        "Method": "md5",
        "User": "all"
      }
    ]
  },
  "DBInstanceId": "rm-bp1*****"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

IncorrectDBInstanceType

Current DB instance type does not support this operation.

The operation failed. The RDS instance is not in a ready state.

400

InvalidDBInstanceName.NotFound

The specified DB instance name does not exist.

The instance name does not exist.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Rds/2014-08-15/errorCode).

## Change history

Change time

Summary of changes

Operation

2022-08-04

The Error code has changed. The request parameters of the API has changed. The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribePGHbaConfig?updateTime=2022-08-04#workbench-doc-change-demo)

2022-02-14

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribePGHbaConfig?updateTime=2022-02-14#workbench-doc-change-demo)

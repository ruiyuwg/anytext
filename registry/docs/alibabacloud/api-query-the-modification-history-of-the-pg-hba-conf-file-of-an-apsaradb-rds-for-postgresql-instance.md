Queries the details about the modifications to the pg\_hba.conf file of an ApsaraDB RDS for PostgreSQL instance.

## Operation description

### [](#supported-database-engines)[](#)Supported database engines

RDS PostgreSQL

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/DescribeModifyPGHbaConfigLog)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/DescribeModifyPGHbaConfigLog)

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

rds:DescribeModifyPGHbaConfigLog

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

StartTime

string

No

The beginning of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format. The time must be in Coordinated Universal Time (UTC).

2021-11-25T05:00:40Z

EndTime

string

No

The end of the time range to query. Specify the time in the ISO 8601 standard in the yyyy-MM-ddTHH:mmZ format. The time must be in UTC.

2021-11-25T06:00:40Z

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

DBInstanceId

string

The instance ID.

pgm-bp1lymyn1v3i\*\*\*\*

RequestId

string

The request ID.

6D797E6B-E157-510C-A27F-6F9E6DA40633

LogItemCount

integer

The number of modification records.

1

HbaLogItems

array<object>

An array that consists of the modifications to the pg\_hba.conf file.

HbaLogItem

object

ModifyStatus

string

The status of the modification.

-   **success**: The modification is successful.
-   **failed**: The modification failed.
-   **setting**: The modification is being applied.

success

StatusReason

string

The reason why the modification failed.

null

ModifyTime

string

The time when the pg\_hba.conf file was modified. The time is displayed in UTC.

2021-11-25T06:00:40Z

BeforeHbaItems

array<object>

The configurations of the pg\_hba.conf file before modification.

HbaItem

object

Type

string

The connection type.

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

0

Address

string

The IP address.

0.0.0.0/0

Option

string

The value of this parameter varies based on the value of the Method parameter.

null

Method

string

The authentication method.

md5

User

string

The username of the account.

all

AfterHbaItems

array<object>

The configurations of the pg\_hba.conf file after modification.

HbaItem

object

Type

string

The connection type.

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

0

Address

string

The IP address.

0.0.0.0/0

Option

string

The value of this parameter was set based on the value of the Method parameter.

null

Method

string

The authentication method.

ldap

User

string

The username of the account.

ldapuser

## Examples

Sample success responses

`JSON`format

```
{
  "DBInstanceId": "pgm-bp1lymyn1v3i****",
  "RequestId": "6D797E6B-E157-510C-A27F-6F9E6DA40633",
  "LogItemCount": 1,
  "HbaLogItems": {
    "HbaLogItem": [
      {
        "ModifyStatus": "success",
        "StatusReason": null,
        "ModifyTime": "2021-11-25T06:00:40Z",
        "BeforeHbaItems": {
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
        "AfterHbaItems": {
          "HbaItem": [
            {
              "Type": "host",
              "Mask": null,
              "Database": "all",
              "PriorityId": 0,
              "Address": "0.0.0.0/0",
              "Option": null,
              "Method": "ldap",
              "User": "ldapuser"
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

InvalidStartTime.Format

Specified start time is not valid.

The start time is invalid.

400

InvalidEndTime.Format

Specified end time is not valid.

The end time is invalid. Check the end time.

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

The Error code has changed. The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeModifyPGHbaConfigLog?updateTime=2022-08-04#workbench-doc-change-demo)

2022-02-14

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/DescribeModifyPGHbaConfigLog?updateTime=2022-02-14#workbench-doc-change-demo)

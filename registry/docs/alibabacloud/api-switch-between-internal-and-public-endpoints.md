Switches between internal and public endpoints of an instance in the classic network.

## Operation description

### [](#supported-database-engines)Supported database engines

-   MySQL
-   SQL Server

### [](#prerequisites)Prerequisites

-   The instance is connected by using its internal or public endpoint.
-   The instance is in the Running state.
-   The number of times that you have switched the instance between its internal and public endpoints within the last 24 hours does not reach 20.
-   The instance resides in the classic network.

### [](#usage-notes)Usage notes

After the endpoint that is used to connect to the instance is changed, you must update the endpoint information in the code of your application and restart the application.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Rds/2014-08-15/SwitchDBInstanceNetType)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Rds/2014-08-15/SwitchDBInstanceNetType)

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

rds:SwitchDBInstanceNetType

update

\*DBInstance

`acs:rds:{#regionId}:{#accountId}:dbinstance/{#dbinstanceId}`

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

ETnLKlblzczshOTUbOCzxxxxxx

DBInstanceId

string

Yes

The instance ID. You can call the DescribeDBInstances operation to query the instance ID.

rm-bp1\*\*\*\*\*\*\*\*\*\*\*\*\*\*

ConnectionStringPrefix

string

Yes

The prefix of the custom endpoint. The prefix must be 8 to 64 characters in length and can contain letters and digits. It must start with a lowercase letter. A valid endpoint is in the following format: Prefix.Database engine.rds.aliyuncs.com. Example: test1234.mysql.rds.aliyuncs.com.

new\*\*\*\*\*\*\*\*\*\*

Port

string

No

The number of the port that is used to connect to the instance. Valid values: **3001 to 3999**.

3306

ConnectionStringType

string

No

The type of the endpoint. Valid values:

-   **Normal**
-   **ReadWriteSplitting**

By default, the system returns both types of endpoints.

Normal

## Response parameters

Parameter

Type

Description

Example

object

The response parameters.

NewConnectionString

string

The endpoint that is used to connect to the instance after the switch of endpoints.

new\*\*\*\*\*\*\*\*\*\*.mysql.rds.aliyuncs.com

RequestId

string

The request ID.

65BDA532-28AF-4122-AA39-B382721EEE64

OldConnectionString

string

The endpoint that is used to connect to the instance before the switch of endpoints.

rm-bp1\*\*\*\*\*\*\*\*\*\*\*\*\*\*.mysql.rds.aliyuncs.com

## Examples

Sample success responses

`JSON`format

```
{
  "NewConnectionString": "new**********.mysql.rds.aliyuncs.com",
  "RequestId": "65BDA532-28AF-4122-AA39-B382721EEE64",
  "OldConnectionString": "rm-bp1**************.mysql.rds.aliyuncs.com"
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Rds/2014-08-15/errorCode).

## Change history

Change time

Summary of changes

Operation

2022-06-23

API Description Update

[View Change Details](https://api.alibabacloud.com/document/Rds/2014-08-15/SwitchDBInstanceNetType?updateTime=2022-06-23#workbench-doc-change-demo)

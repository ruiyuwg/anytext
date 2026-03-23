Modifies the replication delay of a read-only ApsaraDB for RDS instance.

You can specify the latency at which your primary RDS instance replicates data to a read-only instance. For more information, see [Set a replication delay for an RDS MySQL read-only instance](/help/en/rds/apsaradb-rds-for-mysql/set-the-data-replication-latency-of-a-read-only-apsaradb-rds-for-mysql-instance).

## Debugging

[OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=Rds&api=ModifyReadonlyInstanceDelayReplicationTime&type=RPC&version=2014-08-15)

## Request parameters

    

Parameter

Type

Required

Example

Description

Action

String

Yes

ModifyReadonlyInstanceDelayReplicationTime

The operation that you want to perform. Set the value to **ModifyReadonlyInstanceDelayReplicationTime**.

DBInstanceId

String

Yes

rr-bpxxxxx

The ID of the read-only instance.

ReadSQLReplicationTime

String

Yes

100

The latency at which to replicate data from the primary instance to the read-only instance. Unit: seconds.

## Response parameters

   

Parameter

Type

Example

Description

DBInstanceId

String

rr-bpxxxxx

The ID of the read-only instance.

ReadSQLReplicationTime

String

100

The latency at which data is replicated from the primary instance to the read-only instance. Unit: seconds.

RequestId

String

BBB11B5A-7B37-493A-87E6-490BCB7BDF98

The ID of the request.

TaskId

String

241535739

The ID of the replication task.

## Examples

Sample requests

```
http(s)://rds.aliyuncs.com/? Action=ModifyReadonlyInstanceDelayReplicationTime
&DBInstanceId=rm-uf6wjk5xxxxx
&ReadSQLReplicationTime=100
&<Common request parameters>
```

Sample success responses

`XML` format

```
<ModifyReadonlyInstanceDelayReplicationTimeResponse>
  <TaskId>241535739</TaskId>
  <RequestId>BBB11B5A-7B37-493A-87E6-490BCB7BDF98</RequestId>
  <DBInstanceId>rr-bpxxxxx</DBInstanceId>
  <ReadSQLReplicationTime>100</ReadSQLReplicationTime>
</ModifyReadonlyInstanceDelayReplicationTimeResponse>
```

`JSON` format

```
{"TaskId":"241535739",
"RequestId":"BBB11B5A-7B37-493A-87E6-490BCB7BDF98",
"DBInstanceId":"rr-bpxxxxx",
"ReadSQLReplicationTime":"100"}
```

## Error codes

   

HTTP status code

Error code

Error message

Description

404

EngineNotSupported

Engine specified cannot be supported the operation.

The error message returned because the operation is not supported by the database engine.

403

OperationDenied.DBInstanceType

The operation is not permitted due to type of instance.

The error message returned because the operation is not supported by this type of RDS instance. Note that read-only instances cannot be cloned.

For a list of error codes, visit the [API Error Center](https://error-center.alibabacloud.com/status/product/Rds).

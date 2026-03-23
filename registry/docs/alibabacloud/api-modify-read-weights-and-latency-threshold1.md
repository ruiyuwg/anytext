You can call the ModifyReadWriteSplittingConnection operation to modify the latency threshold that is allowed by the read/write splitting link and the read weights of a primary instance and its read-only instances.

Before you call this operation, make sure that the following requirements are met:

-   The shared proxy feature is enabled for your ApsaraDB RDS for MySQL instance.
-   The read/write splitting feature is enabled for your ApsaraDB RDS for MySQL instance.
-   The instance must run one of the following database engine versions and RDS editions:
    -   MySQL 5.7 on RDS High-availability Edition (with local SSDs)
    -   MySQL 5.6
    -   SQL Server on RDS Cluster Edition

## Debugging

[OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=Rds&api=ModifyReadWriteSplittingConnection&type=RPC&version=2014-08-15)

## Request parameters

    

Parameter

Type

Required

Example

Description

Action

String

Yes

ModifyReadWriteSplittingConnection

The operation that you want to perform. Set the value to **ModifyReadWriteSplittingConnection**.

DBInstanceId

String

Yes

rm-uf6wjk5xxxxxxx

The ID of the primary instance.

ConnectionStringPrefix

String

No

rm-m5xxxxxxxxrw.mysql.rds.aliyuncs.com

The prefix of the read/write splitting endpoint. The prefix must be unique. It can be up to 30 characters in length and can contain lowercase letters and hyphens (-). It must start with a lowercase letter.

**Note** The default prefix consists of the name of the primary instance followed by the letters rw.

Port

String

No

3306

The port that is associated with the read/write splitting endpoint.

MaxDelayTime

String

No

12

The latency threshold that is allowed by the read/write splitting link. Unit: seconds. If the latency on a read-only instance exceeds the specified threshold, ApsaraDB RDS no longer routes read requests to the read-only instance. If you do not specify this parameter, the default value of this parameter is retained.

**Note**

-   If the primary instance runs SQL Server 2017 on RDS Cluster Edition, the **MaxDelayTime** parameter is not supported.
-   You must specify at least one of the following parameters: **MaxDelayTime** and **DistributionType**.

DistributionType

String

No

Standard

The method that is used to assign read weights. Valid values:

-   **Standard**: ApsaraDB RDS automatically assigns a read weight to each instance based on the instance specifications.
-   **Custom**: You must manually assign a read weight to each instance.

**Note** You must specify at least one of the following parameters: **MaxDelayTime** and **DistributionType**.

Weight

String

No

{"rm-bp1\*\*\*\*\*\*\*\*\*\*":800,"master":400,"slave":400}

The read weights of the primary instance and its read-only instances. A read weight must be a multiple of 100 and cannot exceed 10000.

-   Format of RDS instances: `{"<Read-only instance ID>":<Weight>,"master":<Weight>,"slave":<Weight>}`
-   Format of ApsaraDB MyBase instances: `[{"instanceName":"<Primary instance ID>","weight":<Weight>,"role":"master"},{"instanceName":"<Primary instance ID>","weight":<Weight>,"role":"slave"},{"instanceName":"<Read-only instance ID>","weight":<Weight>,"role":"master"}]`

**Note**

-   This parameter must be specified if you set the **DistributionType** parameter to **Custom**.
-   This parameter is invalid if you set the **DistributionType** parameter to **Standard**.

## Response parameters

   

Parameter

Type

Example

Description

RequestId

String

5A77D650-27A1-4E08-AD9E-59008EDB6927

The ID of the request.

## Examples

Sample requests

```
http(s)://rds.aliyuncs.com/?Action=ModifyReadWriteSplittingConnection
&DistributionType=Standard
&DBInstanceId=rm-uf6wjk5xxxxxxx
&<Common request parameters>
```

Sample success response

`XML` format

```
HTTP/1.1 200 OK
Content-Type:application/xml

<?xml version="1.0" encoding="UTF-8" ?>
<ModifyReadWriteSplittingConnectionResponse>
	<RequestID>5A77D650-27A1-4E08-AD9E-59008EDB6927</RequestID>
</ModifyReadWriteSplittingConnectionResponse>
```

`JSON` format

```
HTTP/1.1 200 OK
Content-Type:application/json

{
  "RequestID" : "5A77D650-27A1-4E08-AD9E-59008EDB6927"
}
```

## Error codes

   

HTTP status code

Error code

Error message

Description

400

ReadUniformNetTypeNotExists

The specified uniform read only network type does not exist.

The error message returned because the unified network type that you specify for the read-only instances cannot be found.

400

ReadDBInstance.NotFound

The Current DB Instance has not read-only instance.

The error message returned because no read-only instances are attached to the instance.

403

ReadDBInstance.NotFound

The current database instance does not contain any read only instance.

The error message returned because no read-only instances are attached to the instance.

For a list of error codes, visit the [API Error Center](https://error-center.alibabacloud.com/status/product/Rds).

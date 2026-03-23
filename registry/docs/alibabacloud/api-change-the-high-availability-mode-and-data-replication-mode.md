Changes the high availability mode and data replication mode of an ApsaraDB for RDS instance.

## Debugging

[OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=Rds&api=ModifyDBInstanceHAConfig&type=RPC&version=2014-08-15)

## Request parameters

    

Parameter

Type

Required

Example

Description

Action

String

Yes

ModifyDBInstanceHAConfig

The operation that you want to perform. Set the value to **ModifyDBInstanceHAConfig**.

DbInstanceId

String

Yes

rm-uf6wjk5xxxxxxx

The ID of the instance.

HAMode

String

Yes

RPO

The high availability mode. Valid values:

-   **RPO**: Data persistence is preferred. The instance preferentially ensures data reliability to minimize data loss. Use this mode if you have higher requirements on data consistency.
-   **RTO**: Instance availability is preferred. The instance restores services as soon as possible to ensure availability. Use this mode if you have higher requirements on service availability.

SyncMode

String

Yes

Sync

[The data replication mode](/help/en/rds/apsaradb-rds-for-mysql/change-the-data-replication-mode-of-an-apsaradb-rds-for-mysql-instance). Valid values:

-   **Sync**: synchronous replication
-   **Semi-sync**: semi-synchronous replication
-   **Async**: asynchronous replication

**Note** This parameter is not supported for instances that run SQL Server 2017 EE.

## Response parameters

   

Parameter

Type

Example

Description

RequestId

String

D4D4BE8A-DD46-440A-BFCD-EE31DA81C9DD

The ID of the request.

## Examples

Sample requests

```
http(s)://rds.aliyuncs.com/? Action=ModifyDBInstanceHAConfig
&DbInstanceId=rm-uf6wjk5xxxxxxx
&HAMode=RPO
&SyncMode=Sync
&<Common request parameters>
```

Sample success responses

`XML` format

```
<ModifyDBInstanceHAConfigResponse>
	  <RequestId>D4D4BE8A-DD46-440A-BFCD-EE31DA81C9DD</RequestId>
</ModifyDBInstanceHAConfigResponse>
```

`JSON` format

```
{
    "RequestId":"D4D4BE8A-DD46-440A-BFCD-EE31DA81C9DD"
}
```

## Error codes

For a list of error codes, visit the [API Error Center](https://error-center.alibabacloud.com/status/product/Rds).

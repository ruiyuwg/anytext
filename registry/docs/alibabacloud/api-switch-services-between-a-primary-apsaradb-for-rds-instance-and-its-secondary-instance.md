Switches services between a primary ApsaraDB for RDS instance and its secondary instance.

This operation switches services between the RDS primary and secondary instances that are not in the Basic Edition. After the switching, the secondary instance becomes primary and carries all business traffic.

## Debugging

[OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=Rds&api=SwitchDBInstanceHA&type=RPC&version=2014-08-15)

## Request parameters

    

Parameter

Type

Required

Example

Description

Action

String

Yes

SwitchDBInstanceHA

The operation that you want to perform. Set the value to **SwitchDBInstanceHA**.

DBInstanceId

String

Yes

rm-uf6wjk5xxxxxxxxxx

The ID of the primary instance.

NodeId

String

Yes

349054

The unique ID of the secondary instance. You can call [DescribeDBInstanceHAConfig](/help/en/rds/api-query-high-availability-mode) to query the secondary instance ID.

Force

String

No

No

Specifies whether to enable forcible switching. Valid values:

-   **Yes**
-   **No**

Default value: **No**.

EffectiveTime

String

No

Immediate

The time when the switching takes effect. Valid values:

-   **Immediate**: The switching immediately takes effect.
-   **MaintainTime**: The switching takes effect during the maintenance time.

Default value: **Immediate**.

## Response parameters

   

Parameter

Type

Example

Description

RequestId

String

1E43AAE0-BEE8-43DA-860D-EAF2AA0724DC

The ID of the request.

## Examples

Sample requests

```
http(s)://rds.aliyuncs.com/? Action=SwitchDBInstanceHA
&DBInstanceId=rm-uf6wjk5xxxxxxxxxx
&NodeId=349054
&<Common request parameters>
```

Sample success responses

`XML` format

```
<SwitchDBInstanceHAResponse>
	  <RequestId>1E43AAE0-BEE8-43DA-860D-EAF2AA0724DC</RequestId>
</SwitchDBInstanceHAResponse>
```

`JSON` format

```
{
    "RequestId": "1E43AAE0-BEE8-43DA-860D-EAF2AA0724DC"
  }
```

## Error codes

For a list of error codes, visit the [API Error Center](https://error-center.alibabacloud.com/status/product/Rds).

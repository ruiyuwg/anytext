You can call the DescribeHADiagnoseConfig operation to query the availability check method of an ApsaraDB RDS instance.

By default, Alibaba Cloud uses persistent connections to check the availability of an ApsaraDB RDS instance.

For more information, see [What is availability detection?](/help/en/rds/support/what-is-availability-detection)

## Debugging

[OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=Rds&api=DescribeHADiagnoseConfig&type=RPC&version=2014-08-15)

## Request parameters

    

Parameter

Type

Required

Example

Description

Action

String

Yes

DescribeHADiagnoseConfig

The operation that you want to perform. Set the value to **DescribeHADiagnoseConfig**.

DBInstanceId

String

Yes

rm-uf6wjk5xxxxxxxxxx

The ID of the instance. You can call the [DescribeDBInstances](/help/en/rds/api-query-instances) operation to query the IDs of instances.

RegionId

String

Yes

cn-hangzhou

The region ID of the instance. You can call the [DescribeRegions](/help/en/rds/api-query-regions) operation to query the most recent region list.

## Response parameters

   

Parameter

Type

Example

Description

RequestId

String

06B220E2-EAC5-4DBE-A1FC-1B62DB6A4455

The ID of the request.

TcpConnectionType

String

LONG

The availability check method of the instance. Valid values:

-   **LONG**: Alibaba Cloud uses persistent connections to check the availability of the instance.
-   **SHORT**: Alibaba Cloud uses short-lived connections to check the availability of the instance.

## Examples

Sample requests

```
http(s)://rds.aliyuncs.com/?Action=DescribeHADiagnoseConfig
&DBInstanceId=rm-uf6wjk5xxxxxxxxxx	
&RegionId=cn-hangzhou
&<Common request parameters>
```

Sample success responses

`XML` format

```
<DescribeHADiagnoseConfigResponse>
      <RequestId>06B220E2-EAC5-4DBE-A1FC-1B62DB6A4455</RequestId>
      <TcpConnectionType>LONG</TcpConnectionType>
</DescribeHADiagnoseConfigResponse>
```

`JSON` format

```
{
	"RequestId": "06B220E2-EAC5-4DBE-A1FC-1B62DB6A4455",
	"TcpConnectionType": "LONG"
}
```

## Error codes

For a list of error codes, visit the [API Error Center](https://error-center.alibabacloud.com/status/product/Rds).

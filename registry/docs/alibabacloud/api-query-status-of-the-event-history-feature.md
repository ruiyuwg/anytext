Queries the status of the event history feature of an ApsaraDB for RDS instance.

The event history feature enables you to view the events that occurred in a region over a specific time range. The events include instance creation and parameter reconfiguration. For more information, see [Event history](/help/en/rds/view-the-event-history-of-an-apsaradb-rds-instance-3).

## Debugging

[OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=Rds&api=DescribeActionEventPolicy&type=RPC&version=2014-08-15)

## Request parameters

    

Parameter

Type

Required

Example

Description

Action

String

Yes

DescribeActionEventPolicy

The operation that you want to perform. Set the value to **DescribeActionEventPolicy**.

RegionId

String

Yes

cn-hangzhou

The ID of the region. You can call the [DescribeRegions](/help/en/rds/api-query-regions) operation to query the most recent region list.

## Response parameters

   

Parameter

Type

Example

Description

EnableEventLog

String

True

Indicates whether the event history feature is enabled.

RegionId

String

cn-hangzhou

The ID of the region.

RequestId

String

CCECD3CD-AB2D-4F6D-BEDE-47BC90A398D2

The ID of the request.

## Examples

Sample requests

```
http(s)://rds.aliyuncs.com/? Action=DescribeActionEventPolicy
&Region=cn-hangzhou
&<Common request parameters>
```

Sample success responses

`XML` format

```
<DescribeActionEventPolicyResponse>
  <RequestId>CCECD3CD-AB2D-4F6D-BEDE-47BC90A398D2</RequestId>
	  <RegionId>cn-hangzhou</RegionId>
	  <EnableEventLog>True</EnableEventLog>
    </DescribeActionEventPolicyResponse>
```

`JSON` format

```
{
	"RequestId": "CCECD3CD-AB2D-4F6D-BEDE-47BC90A398D2",
	"RegionId": "cn-hangzhou",
	"EnableEventLog": "True"
}
```

## Error codes

For a list of error codes, visit the [API Error Center](https://error-center.alibabacloud.com/status/product/Rds).

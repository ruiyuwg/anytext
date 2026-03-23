You can call the DescribeAnalyticdbByPrimaryDBInstance operation to query the number of analytic instances that are associated with an ApsaraDB RDS for MySQL instance.

## Debugging

[OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=Rds&api=DescribeAnalyticdbByPrimaryDBInstance&type=RPC&version=2014-08-15)

## Request parameters

    

Parameter

Type

Required

Example

Description

Action

String

Yes

DescribeAnalyticdbByPrimaryDBInstance

The operation that you want to perform. Set the value to **DescribeAnalyticdbByPrimaryDBInstance**.

RegionId

String

Yes

cn-hangzhou

The region ID of the instance. You can call the [DescribeRegions](/help/en/rds/api-query-regions) operation to query the most recent region list.

DBInstanceId

String

Yes

rm-uf6wjk5\*\*\*\*\*\*\*

The ID of the instance. You can call the [DescribeDBInstances](/help/en/rds/api-query-instances) operation to query the ID of the instance.

## Response parameters

   

Parameter

Type

Example

Description

AnalyticDBCount

Integer

0

The number of associated analytic instances.

RequestId

String

77862BFF-ED59-552A-A2E8-692FEAFC9527

The ID of the request.

## Examples

Sample requests

```
http(s)://rds.aliyuncs.com/?Action=DescribeAnalyticdbByPrimaryDBInstance
&RegionId=cn-hangzhou
&DBInstanceId=rm-uf6wjk5*******
&Common request parameters
```

Sample success responses

`XML` format

```
HTTP/1.1 200 OK
Content-Type:application/xml

<DescribeAnalyticdbByPrimaryDBInstanceResponse>
    <RequestId>77862BFF-ED59-552A-A2E8-692FEAFC9527</RequestId>
    <AnalyticDBCount>0</AnalyticDBCount>
</DescribeAnalyticdbByPrimaryDBInstanceResponse>
```

`JSON` format

```
HTTP/1.1 200 OK
Content-Type:application/json

{
  "RequestId" : "77862BFF-ED59-552A-A2E8-692FEAFC9527",
  "AnalyticDBCount" : 0
}
```

## Error codes

For a list of error codes, visit the [API Error Center](https://error-center.alibabacloud.com/status/product/Rds).

Queries the historical prices of spot instances within up to the previous 30 days. You can set the maximum price of a spot instance based on the historical prices.

## Operation description

-   This operation is applicable only to I/O optimized spot instances.
-   The data returned by the interface may be paginated. If the returned data contains the `NextOffset` parameter, you can set the `Offset` parameter in the request to the value of the `NextOffset` parameter for subsequent data query.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeSpotPriceHistory)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeSpotPriceHistory)

## Authorization information

There is currently no authorization information disclosed in the API.

## Request parameters

Parameter

Type

Required

Description

Example

RegionId

string

Yes

The zone ID of the spot instance.

cn-hangzhou

ZoneId

string

No

The spot price (market price) of the spot instance.

cn-hangzhou-g

NetworkType

string

Yes

The network type of the spot instance. Valid values:

-   classic: classic network
-   vpc: Virtual Private Cloud (VPC)

vpc

InstanceType

string

Yes

The beginning of the time range to query. Specify the time in the [ISO 8601](/help/en/ecs/developer-reference/iso-8601-time-format) standard in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC. The specified time can be up to 30 days earlier than the specified EndTime value.

This parameter is empty by default. If this parameter is empty, the time that is 3 hours earlier than the specified EndTime value is used.

ecs.t1.xsmall

SpotDuration

integer

No

The protection period of the spot instance. Unit: hours. Default value: 1. Valid values:

-   1: After a spot instance is created, Alibaba Cloud ensures that the instance is not automatically released within 1 hour. After the 1-hour protection period ends, the system compares the bid price with the market price and checks the resource inventory to determine whether to retain or release the instance.
-   0: After a spot instance is created, Alibaba Cloud does not ensure that the instance runs for 1 hour. The system compares the bid price with the market price and checks the resource inventory to determine whether to retain or release the instance.

Alibaba Cloud sends an ECS system event to notify you 5 minutes before the instance is released. Spot instances are billed by second. We recommend that you specify a protection period based on your business requirements.

**Note** This parameter takes effect only if you set SpotStrategy to SpotWithPriceLimit or SpotAsPriceGo.

1

IoOptimized

string

No

Specifies whether the instance is I/O optimized. Valid values:

-   optimized: The instance is I/O optimized.
-   none: The instance is not I/O optimized.

For instances of generation I instance families, the default value is none.

For instances of other instance families, the default value is optimized.

optimized

StartTime

string

No

The beginning of the time range to query. The value of this parameter and the value of EndTime can be up to 30 days apart. Specify the time in the [ISO 8601 standard](/help/en/ecs/developer-reference/iso-8601-time-format) in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC.

This parameter is left empty by default. If this parameter is empty, the time that is 3 hours earlier than the value of EndTime is used.

2017-08-22T08:45:08Z

EndTime

string

No

The end of the time range to query. Specify the time in the [ISO 8601 standard](/help/en/ecs/developer-reference/iso-8601-time-format) in the `yyyy-MM-ddTHH:mm:ssZ` format. The time must be in UTC.

This parameter is empty by default. If this parameter is empty, the current time is used.

2017-08-22T08:45:08Z

OSType

string

No

The type of the operating system platform. Valid values:

-   linux
-   windows

linux

Offset

integer

No

The line from which the query starts.

Default value: 0

0

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The instance type of the spot instance.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

Currency

string

The instance type of the spot instance.

CNY

NextOffset

integer

The network type of the spot instance.

1000

SpotPrices

array<object>

The zone ID of the spot instance.

SpotPriceType

object

IoOptimized

string

Details about the price history of the spot instance.

optimized

ZoneId

string

The ID of the request.

cn-hangzhou-c

SpotPrice

float

The price for a pay-as-you-go instance that has the same configurations as the spot instance.

0.036

Timestamp

string

The currency unit of the price.

Alibaba Cloud China site (aliyun.com): CNY.

Alibaba Cloud International site (alibabacloud.com): USD.

2019-11-19T06:00:00Z

NetworkType

string

Queries the price history of a spot instance within the last 30 days.

vpc

InstanceType

string

The instance type of the spot instance.

ecs.g5.large

OriginPrice

float

The price for a pay-as-you-go instance that has the same configuration as the specified spot instance.

0.354

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "Currency": "CNY",
  "NextOffset": 1000,
  "SpotPrices": {
    "SpotPriceType": [
      {
        "IoOptimized": "optimized",
        "ZoneId": "cn-hangzhou-c",
        "SpotPrice": 0.036,
        "Timestamp": "2019-11-19T06:00:00Z",
        "NetworkType": "vpc",
        "InstanceType": "ecs.g5.large",
        "OriginPrice": 0.354
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

MissingParameter

%s

A parameter is not specified.

400

UnsupportedParameter

%s

The parameter is not supported.

400

InvalidParameter

%s

The specified parameter is invalid.

400

InvalidInstanceID.Malformed

%s

The specified InstanceId parameter is invalid.

400

InvalidParams.StartTime

%s

The specified StartTime parameter is invalid.

400

InvalidParams.EndTime

%s

The specified EndTime parameter is invalid.

400

Abs.Abs.InvalidSpotInstanceUID

%s

The preemptible instance ID is invalid.

400

InvalidParams.NetworkType

%s

The specified NetworkType parameter is invalid.

400

InvalidParams.IoOptimized

%s

The specified IoOptimized parameter is invalid.

400

InvalidParams.OSType

%s

The specified OSType parameter is invalid.

400

Abs.IoOptimized.ValueNotSupported

%s

The I/O optimization attribute of the instance is invalid. Check whether the specified IoOptimized parameter is valid.

400

InvalidZoneId.NotFound

The specified zone does not exist.

The specified zone ID does not exist.

400

InvalidParams.ZoneId

%s

The specified ZoneId parameter is invalid.

400

InvalidParams.RegionId

%s

The specified RegionId parameter is invalid.

400

InvalidParams.InstanceType

%s

The specified InstanceType parameter is invalid.

400

InvalidParams.PageSize

%s

The specified PageSize parameter is invalid.

400

InvalidParams.Offset

%s

The specified Offset parameter is invalid.

400

InvalidInstanceType.ValueNotSupported

%s

The operation is not supported by the specified instance type.

400

DependencyViolation.IoOptimized

The specified instancetype must be IoOptimized instance.

The specified instance type must be I/O optimized. Check your instance type and try again.

400

InvalidSpotDuration

The specified SpotDuration is not valid.

The specified SpotDuration parameter is invalid.

400

OperationDenied.QueryFail

Query spot price fail, please retry later.

\-

403

InvalidUserType.NotSupported

%s

Your account does not support this operation.

403

Abs.InvalidAccount.NotFound

%s

Your Alibaba Cloud account does not exist or your AccessKey pair has expired.

403

Forbedden.NotSupportRAM

%s

RAM users are not authorized to perform this operation.

403

Forbbiden.SubUser

%s

You are not authorized to manage this resource. Contact the owner of the Alibaba Cloud account for authorization.

403

OperationDenied.RegionIdNotSupported

region not support spot duration instance.

\-

403

OperationDenied.FlavorNotSupported

flavor not support spot duration instance.

\-

403

OperationDenied.TimestampNotSupported

timestamp not support spot duration instance.

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-02-24

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeSpotPriceHistory?updateTime=2025-02-24#workbench-doc-change-demo)

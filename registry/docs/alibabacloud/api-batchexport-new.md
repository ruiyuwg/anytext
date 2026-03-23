Exports the monitoring data that is defined in the Cursor operation.

## Operation description

### [](#prerequisites)[](#)Prerequisites

The `Cursor` information is returned by calling the [Cursor](/help/en/cms/cloudmonitor-1-0/api-cursor-2330730) operation.

### [](#description)[](#)Description

This topic provides an example on how to export the monitoring data of the `cpu_idle` metric for Elastic Compute Service (ECS). The namespace of ECS is `acs_ecs_dashboard`. The `Cursor` information is specified. A maximum of 1,000 data entries can be returned in each response.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Cms/2019-01-01/BatchExport)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Cms/2019-01-01/BatchExport)

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

cms:BatchExport

list

\*All Resources

`*`

none

none

## Request parameters

Parameter

Type

Required

Description

Example

Namespace

string

Yes

The namespace of the cloud service.

For more information about the namespaces of cloud services, see [Appendix 1: Metrics](/help/en/cms/cloudmonitor-1-0/support/appendix-1-metrics).

**Note** The value of this parameter must be the same as the value of the request parameter `Namespace` in the Cursor operation.

acs\_ecs\_dashboard

Metric

string

Yes

The metric that is used to monitor the cloud service.

For more information about the metrics of cloud services, see [Appendix 1: Metrics](/help/en/cms/cloudmonitor-1-0/support/appendix-1-metrics).

**Note** The value of this parameter must be the same as the value of the request parameter `Metric` in the Cursor operation.

cpu\_idle

Cursor

string

Yes

When you call this operation to export data, you must specify the `Cursor` parameter. You can obtain the value of the `Cursor` parameter by using one of the following methods:

-   When you call this operation for the first time, you must call the Cursor operation to obtain the `Cursor` value. For more information, see [Cursor](/help/en/cms/cloudmonitor-1-0/api-cursor-2330730) .
-   When you call this operation again, you can obtain the `Cursor` value from the returned data of the last call.

eyJidWNrZXRzIjo0LCJjdXJzb3IiOiIxNjQxNDU0MzIwMDAwMWUxY2YxNWY0NTU0MTliZjllYTY4OWQ2ODI1OTU1Yzc1NmZjMDQ2OTMxMzczMzM2MzUzMTMxMzEzMzM0MzMzODM5MzEzMTMwMjQyYzY5MmQ3NTY2MzYzMjY3NmI2ZjM5MzU2YjY4MzAzMTYyNzg3MTcwNjkzMTM3MjQyYyIsImN1cnNvclZlcnNpb24iOiJxdWVyeSIsImVuZFRpbWUiOjE2NDE0NTQ3OTU4MjMsImV4cG9ydEVuZFRpbWUiOjE2NDE0NTQ3OTU4MjMsImV4cG9ydFN0YXJ0VGltZSI6MTY0MTQ1NDE5NTgyMywiZXhwcmVzc1JhbmdlIjpmYWxzZSwiaGFzTmV4dCI6dHJ1ZSwiaW5wdXRNZXRyaWMiOiJDUFVVdGlsaXphdGlvbiIsImlucHV0TmFtZXNwYWNlIjoiYWNzX2Vjc19kYXNoYm9hcmQiLCJsaW1pdCI6MTAwMCwibG9nVGltZU1vZGUiOnRydWUsIm1hdGNoZXJzIjp7ImNoYWluIjpbeyJsYWJlbCI6InVzZXJJZCIsIm9wZXJhdG9yIjoiRVFVQUxTIiwidmFsdWUiOiIxNzM2NTExMTM0Mzg5MTEwIn1dfSwibWV0cmljIjoiQ1BVVXRpbGl6YXRpb24iLCJtZXRyaWNUeXBlIjoiTUVUUklDIiwibmFtZXNwYWNlIjoiYWNzX2Vjc19kYXNoYm9hcmQiLCJuZXh0UGtBZGFwdGVyIjp7fSwib2Zmc2V0IjowLCJwYXJlbnRVaWQiOjEyNzA2NzY2Nzk1NDY3MDQsInN0YXJ0VGltZSI6MTY0MTQ1NDE5NTgyMywic3RlcCI6LTEsInRpbWVvdXQiOjEyMCwid2luZG93Ijo2\*\*\*\*

Length

integer

Yes

The maximum number of data entries that can be returned in each response.

Valid values: 1 to 10000.

1000

Measurements

array

No

The statistical methods used to customize the returned data. By default, the measurements based on all statistical methods are returned.

For example, the `cpu_idle` metric of ECS (`acs_ecs_dashboard`) has three statistical methods: `Average`, `Maximum`, and `Minimum`. If you want to return only the measurements based on the `Average` and `Maximum` statistical methods, set this parameter to `["Average", "Maximum"]`.

The statistical methods of metrics are displayed in the `Statistics` column on the Metrics page of each cloud service. For more information, see [Appendix 1: Metrics](/help/en/cms/cloudmonitor-1-0/support/appendix-1-metrics).

string

No

The statistical method.

Maximum

For more information about common request parameters, see [Common parameters](/help/en/cms/developer-reference/common-parameters).

## Response parameters

Parameter

Type

Description

Example

object

None.

Message

string

The returned message.

success

Code

integer

The HTTP status code.

**Note** The status code 200 indicates that the request was successful.

200

Success

boolean

Indicates whether the request was successful. Valid values:

-   true
-   false

true

RequestId

string

The request ID.

251402CD-305C-1617-808E-D8C11FC8138D

Cursor

string

The Cursor information that is used to call this operation again.

**Note** If `null` is returned, the monitoring data is exported.

v2.5eyJidWNrZXRzIjo0LCJjdXJzb3IiOiIxNjQxNDU0ODAwMDAwMWUxY2YxNWY0NTU0MTliZjllYTY4OWQ2ODI1OTU1Yzc1NmZjMDQ2OTMxMzczMzM2MzUzMTMxMzEzMzM0MzMzODM5MzEzMTMwMjQyYzY5MmQzMjdhNjU2MjY3N2E2NjZhNzczOTY2NmM3Mjc0NjM3MzY5Njg3NDcyMjQyYyIsImN1cnNvclZlcnNpb24iOiJxdWVyeSIsImVuZFRpbWUiOjE2NDE0NTUyMzYxMTIsImV4cG9ydEVuZFRpbWUiOjE2NDE0NTUyMzYxMTIsImV4cG9ydFN0YXJ0VGltZSI6MTY0MTQ1NDYzNjExMiwiZXhwcmVzc1JhbmdlIjpmYWxzZSwiaGFzTmV4dCI6dHJ1ZSwiaW5wdXRNZXRyaWMiOiJDUFVVdGlsaXphdGlvbiIsImlucHV0TmFtZXNwYWNlIjoiYWNzX2Vjc19kYXNoYm9hcmQiLCJsaW1pdCI6MTAwMCwibG9nVGltZU1vZGUiOnRydWUsIm1hdGNoZXJzIjp7ImNoYWluIjpbeyJsYWJlbCI6InVzZXJJZCIsIm9wZXJhdG9yIjoiRVFVQUxTIiwidmFsdWUiOiIxNzM2NTExMTM0Mzg5MTEwIn1dfSwibWV0cmljIjoiQ1BVVXRpbGl6YXRpb24iLCJtZXRyaWNUeXBlIjoiTUVUUklDIiwibmFtZXNwYWNlIjoiYWNzX2Vjc19kYXNoYm9hcmQiLCJuZXh0UGtBZGFwdGVyIjp7fSwib2Zmc2V0IjowLCJwYXJlbnRVaWQiOjEyNzA2NzY2Nzk1NDY3MDQsInN0YXJ0VGltZSI6MTY0MTQ1NDYzNjExMiwic3RlcCI6LTEsInRpbWVvdXQiOjEyMCwid2luZG93Ijo2MH0\*\*\*

Length

integer

The number of data entries returned in this call.

1000

Anchor

long

The timestamp of the data requested by the backend. A larger timestamp indicates that the data export time is closer to the current time.

1678781819000

HasNext

boolean

Indicates whether the data has been exported. Valid values:

-   true: Some data is not exported.
-   false: All the data is exported.

true

DataResults

array

The data returned in this call.

DataResult

[MetricStat](/help/en/cms/cloudmonitor-1-0/developer-reference/api-cms-2019-01-01-struct-metricstat)

The exported data. The following parameters are involved:

-   Namespace: the namespace of the cloud service. Example: `acs_ecs_dashboard`.
-   Metric: the name of the metric. Example: `cpu_idle`.
-   Timestamp: the timestamp of the monitoring data. Unit: milliseconds. Example: 1641454680000.
-   Period: the statistical period of the monitoring data. Unit: seconds. Example: 60.
-   Dimensions: the dimensions used to identify the monitored instance, for example, `[{"Label":"userId", "Value":""20654616023382****"}, {"Label":"InstanceId", "Value":""i-2ze2d6j5uhg20x4****"}]`.
-   Associated: the additional information about the monitored instance, such as the tags in key-value pairs. Example: `{"group":"test****", "name":"Alice"}`.
-   Measurements: the statistical methods of the metric. Multiple values are displayed by default. Example: `{"Average":60,"Maximum":85}`.
-   LogTime: the time when the monitoring data is recorded. Unit: milliseconds. For non-raw data (aggregated data), the value of `LogTime` is null.

## Examples

Sample success responses

`JSON`format

```
{
  "Message": "success",
  "Code": 200,
  "Success": true,
  "RequestId": "251402CD-305C-1617-808E-D8C11FC8138D",
  "Cursor": "v2.5eyJidWNrZXRzIjo0LCJjdXJzb3IiOiIxNjQxNDU0ODAwMDAwMWUxY2YxNWY0NTU0MTliZjllYTY4OWQ2ODI1OTU1Yzc1NmZjMDQ2OTMxMzczMzM2MzUzMTMxMzEzMzM0MzMzODM5MzEzMTMwMjQyYzY5MmQzMjdhNjU2MjY3N2E2NjZhNzczOTY2NmM3Mjc0NjM3MzY5Njg3NDcyMjQyYyIsImN1cnNvclZlcnNpb24iOiJxdWVyeSIsImVuZFRpbWUiOjE2NDE0NTUyMzYxMTIsImV4cG9ydEVuZFRpbWUiOjE2NDE0NTUyMzYxMTIsImV4cG9ydFN0YXJ0VGltZSI6MTY0MTQ1NDYzNjExMiwiZXhwcmVzc1JhbmdlIjpmYWxzZSwiaGFzTmV4dCI6dHJ1ZSwiaW5wdXRNZXRyaWMiOiJDUFVVdGlsaXphdGlvbiIsImlucHV0TmFtZXNwYWNlIjoiYWNzX2Vjc19kYXNoYm9hcmQiLCJsaW1pdCI6MTAwMCwibG9nVGltZU1vZGUiOnRydWUsIm1hdGNoZXJzIjp7ImNoYWluIjpbeyJsYWJlbCI6InVzZXJJZCIsIm9wZXJhdG9yIjoiRVFVQUxTIiwidmFsdWUiOiIxNzM2NTExMTM0Mzg5MTEwIn1dfSwibWV0cmljIjoiQ1BVVXRpbGl6YXRpb24iLCJtZXRyaWNUeXBlIjoiTUVUUklDIiwibmFtZXNwYWNlIjoiYWNzX2Vjc19kYXNoYm9hcmQiLCJuZXh0UGtBZGFwdGVyIjp7fSwib2Zmc2V0IjowLCJwYXJlbnRVaWQiOjEyNzA2NzY2Nzk1NDY3MDQsInN0YXJ0VGltZSI6MTY0MTQ1NDYzNjExMiwic3RlcCI6LTEsInRpbWVvdXQiOjEyMCwid2luZG93Ijo2MH0***",
  "Length": 1000,
  "Anchor": 1678781819000,
  "HasNext": true,
  "DataResults": [
    {
      "Namespace": "acs_ecs_dashboard",
      "Metric": "cpu_idle",
      "Period": 60,
      "Timestamp": 1641454680000,
      "Dimensions": [
        {
          "Label": "instanceId",
          "Value": "i-dferwret*****"
        }
      ],
      "Associated": {
        "key": {
          "group": "test****",
          "name": "Alice"
        }
      },
      "Measurements": {
        "key": {
          "Average": 60,
          "Maximum": 85
        }
      },
      "LogTime": 1683686550073
    }
  ]
}
```

## Error codes

HTTP status code

Error code

Error message

400

%s

%s

500

InternalError

The request processing has failed due to some unknown error.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Cms/2019-01-01/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history

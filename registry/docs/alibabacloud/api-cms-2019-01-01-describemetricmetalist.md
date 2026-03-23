Queries the details of metrics that are supported in CloudMonitor.

## Operation description

This operation is used together with DescribeMetricList and DescribeMetricLast. For more information, see [DescribeMetricList](/help/en/cms/cloudmonitor-1-0/api-describemetriclist-new) and [DescribeMetricLast](/help/en/cms/cloudmonitor-1-0/api-describemetriclast-new).

## Try it now

[Try this API in OpenAPI Explorer, no manual signing needed. Successful calls auto-generate SDK code matching your parameters. Download it with built-in credential security for local usage.](https://api.alibabacloud.com/api/Cms/2019-01-01/DescribeMetricMetaList)

 [![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png) Test](https://api.alibabacloud.com/api/Cms/2019-01-01/DescribeMetricMetaList)

## **RAM authorization**

No authorization for this operation. If you encounter issues with this operation, contact technical support.

## Request parameters

**Parameter**

**Type**

**Required**

**Description**

**Example**

Namespace

string

No

The namespace of the cloud service.

For more information about the namespaces of cloud services, see [Appendix 1: Metrics](/help/en/cms/cloudmonitor-1-0/support/appendix-1-metrics).

acs\_kvstore

Labels

string

No

The tags for filtering metrics. Specify a JSON string.

Format: `[{"name":"tag key","value":"tag value"},{"name":"tag key","value":"tag value"}]` . The following tags are available:

-   metricCategory: the category of the metric.
    
-   alertEnable: specifies whether to report alerts for the metric.
    
-   alertUnit: the unit of the metric in the alerts.
    
-   unitFactor: the factor for metric unit conversion.
    
-   minAlertPeriod: the minimum interval at which the alert is reported.
    
-   productCategory: the category of the service.
    

\[{"name":"productCategory","value":"kvstore\_old"}\]

MetricName

string

No

The metric name. For more information, see [Appendix 1: Metrics](/help/en/cms/cloudmonitor-1-0/support/appendix-1-metrics).

CPUUtilization

PageNumber

integer

No

The page number. Default value: 1.

1

PageSize

integer

No

The number of entries per page. Default value: 30.

30

## Response elements

**Element**

**Type**

**Description**

**Example**

object

Code

string

The response code.

**Note**

The status code 200 indicates that the request was successful.

200

Message

string

The returned message.

The Request is not authorization.

RequestId

string

The request ID.

CDE9EAFF-D54E-4024-BBFC-B0AAC883143B

TotalCount

string

The total number of entries returned.

10

Success

boolean

Indicates whether the request was successful. Valid values:

-   true
    
-   false
    

true

Resources

object

Resource

array<object>

The configuration of the metrics in the resources.

object

MetricName

string

The metric name.

ads.diskSize

Description

string

The metric description.

The rated disk capacity

Labels

string

The tags of the metric, including one or more JSON strings.

Format: `[{"name":"tag key","value":"tag value"}]`. The `name` can be repeated. The following tags are available:

-   metricCategory: the category of the metric.
    
-   alertEnable: indicates whether to report alerts for the metric.
    
-   alertUnit: the unit of the metric in the alerts.
    
-   unitFactor: the factor for metric unit conversion.
    
-   minAlertPeriod: the minimum interval at which the alert is reported.
    
-   productCategory: the category of the service.
    

\[{\\"name\\":\\"minAlertPeriod\\",\\"value\\":\\"300\\"},{\\"name\\":\\"alertDefault\\",\\"value\\":\\"\\"},{\\"name\\":\\"unitFactor\\",\\"value\\":\\"1\\"},{\\"name\\":\\"alertUnit\\",\\"value\\":\\"Mbytes\\"},{\\"name\\":\\"productCategory\\",\\"value\\":\\"ads\\"},{\\"name\\":\\"is\_alarm\\",\\"value\\":\\"true\\"},{\\"name\\":\\"metricCategory\\",\\"value\\":\\"workerId\\"}\]

Unit

string

The unit of the metric.

MB

Dimensions

string

The monitoring dimensions of the resource. Multiple monitoring dimensions are separated with commas (,).

userId,instanceId,tableSchema,workerId

Namespace

string

The namespace of the cloud service.

acs\_ads

Periods

string

The statistical periods of the metric. Multiple statistical periods are separated with commas (,).

Unit: seconds.

300

Statistics

string

The statistical method. Multiple statistical methods are separated with commas (,).

Average,Minimum,Maximum

## Examples

Success response

`JSON` format

```
{
  "Code": "200",
  "Message": "The Request is not authorization.",
  "RequestId": "CDE9EAFF-D54E-4024-BBFC-B0AAC883143B",
  "TotalCount": "10",
  "Success": true,
  "Resources": {
    "Resource": [
      {
        "MetricName": "ads.diskSize",
        "Description": "The rated disk capacity",
        "Labels": "[{\\\"name\\\":\\\"minAlertPeriod\\\",\\\"value\\\":\\\"300\\\"},{\\\"name\\\":\\\"alertDefault\\\",\\\"value\\\":\\\"\\\"},{\\\"name\\\":\\\"unitFactor\\\",\\\"value\\\":\\\"1\\\"},{\\\"name\\\":\\\"alertUnit\\\",\\\"value\\\":\\\"Mbytes\\\"},{\\\"name\\\":\\\"productCategory\\\",\\\"value\\\":\\\"ads\\\"},{\\\"name\\\":\\\"is_alarm\\\",\\\"value\\\":\\\"true\\\"},{\\\"name\\\":\\\"metricCategory\\\",\\\"value\\\":\\\"workerId\\\"}]",
        "Unit": "MB",
        "Dimensions": "userId,instanceId,tableSchema,workerId",
        "Namespace": "acs_ads",
        "Periods": "300",
        "Statistics": "Average,Minimum,Maximum"
      }
    ]
  }
}
```

## Error codes

   

**HTTP status code**

**Error code**

**Error message**

**Description**

400

ParameterInvalid

Parameter invalid.

500

InternalError

The request processing has failed due to some unknown error.

403

AccessForbidden

User not authorized to operate on the specified resource.

404

ResourceNotFound

The specified resource is not found.

The specified resource is not found.

See [Error Codes](https://api.alibabacloud.com/document/Cms/2019-01-01/errorCode) for a complete list.

## Release notes

See [Release Notes](https://api.alibabacloud.com/document/Cms/2019-01-01/DescribeMetricMetaList#workbench-doc-change-demo) for a complete list.

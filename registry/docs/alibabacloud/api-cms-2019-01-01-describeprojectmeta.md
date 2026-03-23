Queries the information about monitored services in CloudMonitor.

## Operation description

The information obtained by this operation includes the service description, namespace, and tags.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Cms/2019-01-01/DescribeProjectMeta)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Cms/2019-01-01/DescribeProjectMeta)

## Authorization information

There is currently no authorization information disclosed in the API.

## Request parameters

Parameter

Type

Required

Description

Example

Labels

string

No

The tags. Tags are used to filter services.

You can filter services only by the tag whose `name` is `product`. Example: {"name":"product","value":"ECS"}.

**Note** We recommend that you do not use the special tags in the CloudMonitor console.

\[{"name":"product","value":"ECS"}\]

PageNumber

integer

No

The page number.

Valid values: 1 to 100.

Default value: 1.

1

PageSize

integer

No

The number of entries per page.

Valid values: 1 to 10000.

Default value: 30.

**Note** The value of this parameter is not limited. You can view a large number of entries per page.

30

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

4C2061B2-3B1B-43BF-A4A4-C53426F479C0

Success

boolean

Indicates whether the request was successful. Valid values: true: The request was successful. false: The request failed.

true

Code

string

The status code.

**Note** The status code 200 indicates that the request was successful.

200

Message

string

The error message.

The Request is not authorization.

PageSize

string

The number of entries per page.

5

PageNumber

string

The page number.

1

Total

string

The total number of entries returned.

12

Resources

array<object>

The details of the cloud service.

Resource

object

Namespace

string

The namespace of the cloud service. Format: `acs_Service name abbreviation`. For more information about namespaces, see [Appendix 1: Metrics](/help/en/cms/cloudmonitor-1-0/support/appendix-1-metrics).

acs\_cdn

Description

string

The description.

CDN

Labels

string

The tags. Tags are used to filter services.

Tags are returned in the following format: `[{"name":"Tag key","value":"Tag value"}, {"name":"Tag key","value":"Tag value"}]`. The following tags are commonly used:

-   alertUnit: the unit of the metric value in alerts. If the unit is small, the original metric value may be too large. In this case, you can use the `alertUnit` tag to specify an appropriate unit. This tag is used in CloudMonitor.
-   minAlertPeriod: the minimum time interval to report a new alert. The interval at which monitoring data is reported. The value is usually 1 minute.
-   metricCategory: the service specification. Example: kvstore\_sharding. Some Alibaba Cloud services have multiple specifications that are defined in the same namespace. This parameter is used to identify the specifications.
-   is\_alarm: indicates whether an alert rule can be configured. We recommend that you do not use the special tags in the CloudMonitor console.

\[{"groupFlag":true}\]

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "4C2061B2-3B1B-43BF-A4A4-C53426F479C0",
  "Success": true,
  "Code": 200,
  "Message": "The Request is not authorization.",
  "PageSize": 5,
  "PageNumber": 1,
  "Total": 12,
  "Resources": {
    "Resource": [
      {
        "Namespace": "acs_cdn",
        "Description": "CDN",
        "Labels": [
          {
            "groupFlag": true
          }
        ]
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

ParameterInvalid

Illegal parameters.

\-

403

AccessForbidden

User not authorized to operate on the specified resource.

\-

404

ResourceNotFound

The specified resource is not found.

The specified resource is not found.

500

InternalError

The request processing has failed due to some unknown error.

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Cms/2019-01-01/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history

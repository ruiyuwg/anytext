Queries diagnostic metrics.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeDiagnosticMetrics)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeDiagnosticMetrics)

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

ecs:DescribeDiagnosticMetrics

get

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

RegionId

string

Yes

The region ID pf the diagnostic metric. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

MetricIds

array

No

The ID of diagnostic metrics.

string

No

The ID of diagnostic metric N.

Instance.DiskLoadFailure

ResourceType

string

No

The resource type supported by the diagnostic metric.

Enumeration Value:

-   instance

instance

NextToken

string

No

The pagination token that is used in the request to retrieve a new page of results. You do not need to specify this parameter for the first request. You must specify the token that is obtained from the previous query as the value of `NextToken`.

caeba0bbb2be03f84eb48b699f0a4883

MaxResults

integer

No

The number of entries per page. Valid values: 1 to 100.

Default value:

-   If this parameter is left empty, the default value is 10.
-   If you set this parameter to a value that is greater than 100, the default value is 100.

10

## Response parameters

Parameter

Type

Description

Example

object

Schema of Response

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE\*\*\*\*\*

NextToken

string

A pagination token. It can be used in the next request to retrieve a new page of results.

caeba0bbb2be03f84eb48b699f0a4883

Metrics

array<object>

The diagnostic metrics.

Metric

object

The diagnostic metric.

MetricId

string

The ID of the diagnostic metric.

GuestOS.WinFirewall

MetricName

string

The name of the diagnostic metric.

CPU diagnostic

MetricCategory

string

The category of the diagnostic metric.

CPU

Description

string

The description of the diagnostic metric.

CPU diagnostic

ResourceType

string

The resource type supported by the diagnostic metric.

instance

GuestMetric

boolean

Indicates whether the diagnostic metric needs to be assessed by running a Cloud Assistant command in a guest operating system.

true

SupportedOperatingSystem

string

The operating system type supported by the diagnostic metric. Valid values:

-   Windows
-   Linux
-   All: Windows and Linux

ALL

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE*****",
  "NextToken": "caeba0bbb2be03f84eb48b699f0a4883",
  "Metrics": [
    {
      "MetricId": "GuestOS.WinFirewall",
      "MetricName": "CPU diagnostic\n",
      "MetricCategory": "CPU",
      "Description": "CPU diagnostic",
      "ResourceType": "instance",
      "GuestMetric": true,
      "SupportedOperatingSystem": "ALL"
    }
  ]
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2022-07-21

Add Operation

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeDiagnosticMetrics?updateTime=2022-07-21#workbench-doc-change-demo)

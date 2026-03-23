Queries resource diagnostic reports.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeDiagnosticReports)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeDiagnosticReports)

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

ecs:DescribeDiagnosticReports

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

The region ID. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

ReportIds

array

No

The IDs of diagnostic reports.

string

No

The ID of diagnostic report N. You can specify up to 100 diagnostic report IDs.

dr-uf6i0tv2refv8wz\*\*\*\*\*

ResourceIds

array

No

The IDs of resources. You can specify up to 100 resource IDs.

string

No

The ID of resource N.

i-uf6i0tv2refv8wz\*\*\*\*\*

Status

string

No

The status of the diagnostic report. Valid values:

-   InProgress
-   Failed
-   Finished

Finished

Severity

string

No

The severity level of the diagnostic report. Valid values:

-   Unknown: The diagnostic did not start, failed to run, or unexpectedly exited without a diagnosis.
-   Normal: No exceptions were detected.
-   Info: Diagnostic information was recorded and may be related to exceptions.
-   Warn: Diagnostic information was recorded and may indicate exceptions.
-   Critical: Critical exceptions were detected.

Enumeration Value:

-   normal
-   info
-   warn
-   critical
-   Normal
-   Info
-   Warn
-   Critical
-   unknown
-   Unknown

Normal

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

Reports

array<object>

The diagnostic reports.

Report

object

ResourceId

string

The ID of the resource.

i-uf6i0tv2refv8wz\*\*\*\*\*

ResourceType

string

The type of the resource.

instance

MetricSetId

string

The ID of the diagnostic metric set.

dms-bp17p0qwtr72zmu\*\*\*\*\*

StartTime

string

The beginning of the time range during which data was queried. The value is the StartTime value that was passed in when you called the [CreateDiagnosticReport](/help/en/ecs/api-creatediagnosticreport) operation to create the diagnostic report.

2022-07-11T12:00:00Z

EndTime

string

The end of the time range during which data was queried. The value is the EndTime value that was passed in when you called the [CreateDiagnosticReport](/help/en/ecs/api-creatediagnosticreport) operation to create the diagnostic report.

2022-07-11T14:00:00Z

ReportId

string

The ID of the diagnostic report.

dr-uf6i0tv2refv8wz\*\*\*\*\*

Status

string

The status of the diagnostic report.

Finished

CreationTime

string

The time when the diagnostic report was created.

2022-07-11T12:00:00Z

FinishedTime

string

The time when the diagnostic was complete.

2022-07-11T14:00:00Z

Severity

string

The severity level of the diagnostic report. Valid values:

-   Unknown: The diagnostic did not start, failed to run, or unexpectedly exited without a diagnosis.
-   Normal: No exceptions were detected.
-   Info: Diagnostic information was recorded and may be related to exceptions.
-   Warn: Diagnostic information was recorded and may indicate exceptions.
-   Critical: Critical exceptions were detected.

Normal

Issues

array<object>

The diagnosed issues.

Issue

object

MetricId

string

The ID of the diagnostic metric.

GuestOS.WinFirewall

MetricCategory

string

The category of the diagnostic metric.

ECSService.GuestOS

IssueId

string

The ID of the diagnosed issue, which is the unique identifier of the issue.

GuestOS.CPU.HighUtiliz\*\*\*\*\*

Severity

string

The severity level of the diagnostic metric. Valid values:

-   Info: Diagnostic information was recorded and may be related to exceptions.
-   Warn: Diagnostic information was recorded and may indicate exceptions.
-   Critical: Critical exceptions were detected.

Info

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE*****",
  "NextToken": "caeba0bbb2be03f84eb48b699f0a4883",
  "Reports": {
    "Report": [
      {
        "ResourceId": "i-uf6i0tv2refv8wz*****",
        "ResourceType": "instance",
        "MetricSetId": "dms-bp17p0qwtr72zmu*****",
        "StartTime": "2022-07-11T12:00:00Z",
        "EndTime": "2022-07-11T14:00:00Z",
        "ReportId": "dr-uf6i0tv2refv8wz*****",
        "Status": "Finished",
        "CreationTime": "2022-07-11T12:00:00Z",
        "FinishedTime": "2022-07-11T14:00:00Z",
        "Severity": "Normal",
        "Issues": {
          "Issue": [
            {
              "MetricId": "GuestOS.WinFirewall",
              "MetricCategory": "ECSService.GuestOS",
              "IssueId": "GuestOS.CPU.HighUtiliz*****",
              "Severity": "Info"
            }
          ]
        }
      }
    ]
  }
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-03-20

API Description Update

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeDiagnosticReports?updateTime=2025-03-20#workbench-doc-change-demo)

2022-07-21

Add Operation

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeDiagnosticReports?updateTime=2022-07-21#workbench-doc-change-demo)

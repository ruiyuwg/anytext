Queries the details of a diagnostic report.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeDiagnosticReportAttributes)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeDiagnosticReportAttributes)

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

ecs:DescribeDiagnosticReportAttributes

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

The region ID of the diagnostic report. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

ReportId

string

Yes

The ID of the diagnostic report.

dr-i-uf6i0tv2refv8wz\*\*\*\*\*

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

473469C7-AA6F-4DC5-B3DB-A3DC0DE3\*\*\*\*

ResourceId

string

The resource ID.

i-uf6i0tv2refv8wz\*\*\*\*\*

ResourceType

string

The type of the resource. ResourceType can only be set to instance, which indicates that only instances are supported.

instance

ReportId

string

The ID of the diagnostic report, which is the unique identifier of the report.

dr-uf6i0tv2refv8wz\*\*\*\*\*

Status

string

The state of the diagnostic report. Valid values:

-   InProgress: The diagnostic is in progress.
-   Finished: The diagnostic is complete.
-   Failed: The diagnostic failed.

Finished

CreationTime

string

The time when the diagnostic report was created.

2022-07-11T12:00:00Z

FinishedTime

string

The time when the diagnostic report was complete.

2022-07-11T14:00:00Z

StartTime

string

The beginning of the reporting period of the diagnostic report. The value is the StartTime value that was passed in when you called the [CreateDiagnosticReport](/help/en/ecs/api-creatediagnosticreport) operation to create the diagnostic report.

2022-07-11T12:00:00Z

EndTime

string

The end of the reporting period of the diagnostic report. The value is the EndTime value that was passed in when you called the [CreateDiagnosticReport](/help/en/ecs/api-creatediagnosticreport) operation to create the diagnostic report.

2022-07-11T14:00:00Z

Severity

string

The severity level of the diagnostic report. The value of this parameter is determined by the highest severity level of all diagnostic metrics. Valid values:

-   Unknown: The diagnostic has not started, failed to run, or exited unexpectedly without a diagnosis.
-   Normal: No exceptions were detected.
-   Info: Diagnostic information was recorded and may be related to exceptions.
-   Warn: Diagnostic information was recorded and may indicate potential exceptions.
-   Critical: Critical exceptions were detected.

Normal

MetricSetId

string

The ID of the diagnostic metric set.

dms-bp17p0qwtr72zmu\*\*\*\*\*

MetricResults

array<object>

The results of all diagnostic metrics in the diagnostic metric set.

MetricResult

object

MetricId

string

The ID of the diagnostic metric.

GuestOS.WinFirewall

MetricCategory

string

The category of the diagnostic metric.

CPU

Severity

string

The severity level of the diagnostic metric. Valid values:

-   Unknown: The diagnostic has not started, failed to run, or exited unexpectedly without a diagnosis.
-   Normal: No exceptions were detected.
-   Info: Diagnostic information was recorded and may be related to exceptions.
-   NotSupport: The version of the guest operating system does support diagnosing the metric.
-   Warn: Diagnostic information was recorded and may indicate potential exceptions.
-   Critical: Critical exceptions were detected.

Normal

Status

string

The state of the diagnostic metric. Valid values:

-   InProgress.
-   Finished.
-   Failed.

Finished

Issues

array<object>

The diagnosed issues.

Issue

object

The diagnosed issue.

IssueId

string

The ID of the diagnosed issue, which is the unique identifier of the issue.

GuestOS.CPU.HighUtiliz\*\*\*\*\*

Severity

string

The severity level of the diagnosed issue. Valid values:

-   Info: Diagnostic information was recorded and may be related to exceptions.
-   Warn: Diagnostic information was recorded and may indicate potential exceptions.
-   Critical: Critical exceptions were detected.

Info

Additional

string

The additional data about the diagnosed issue. The value is a JSON string.

{ "TotalPercent": 95, "TopUtilizationProcesses": \[ { "Pid": "1223", "CommandName": "/usr/bin/mem.py", "PhysicalMemoryPercent": 50 } \] }

OccurrenceTime

string

The time when the diagnosed issue occurred.

2022-07-11T14:00:00Z

Attributes

string

The extended attributes of the diagnostic report.

{ "OfflineDiagReportStatus":"CONFIRMED" }

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3****",
  "ResourceId": "i-uf6i0tv2refv8wz*****",
  "ResourceType": "instance",
  "ReportId": "dr-uf6i0tv2refv8wz*****",
  "Status": "Finished",
  "CreationTime": "2022-07-11T12:00:00Z",
  "FinishedTime": "2022-07-11T14:00:00Z",
  "StartTime": "2022-07-11T12:00:00Z",
  "EndTime": "2022-07-11T14:00:00Z",
  "Severity": "Normal",
  "MetricSetId": "dms-bp17p0qwtr72zmu*****",
  "MetricResults": {
    "MetricResult": [
      {
        "MetricId": "GuestOS.WinFirewall",
        "MetricCategory": "CPU",
        "Severity": "Normal",
        "Status": "Finished",
        "Issues": {
          "Issue": [
            {
              "IssueId": "GuestOS.CPU.HighUtiliz*****",
              "Severity": "Info",
              "Additional": {
                "TotalPercent": 95,
                "TopUtilizationProcesses": [
                  {
                    "Pid": 1223,
                    "CommandName": "/usr/bin/mem.py",
                    "PhysicalMemoryPercent": 50
                  }
                ]
              },
              "OccurrenceTime": "2022-07-11T14:00:00Z"
            }
          ]
        }
      }
    ]
  },
  "Attributes": {
    "OfflineDiagReportStatus": "CONFIRMED"
  }
}
```

## Error codes

HTTP status code

Error code

Error message

403

InvalidParameter.ReportNotExist

The specified report does not exist.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2026-01-14

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeDiagnosticReportAttributes?updateTime=2026-01-14#workbench-doc-change-demo)

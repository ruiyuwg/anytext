Creates a diagnostic report for a resource. When you call this operation, you can configure the MetricSetId parameter to create a diagnostic report based on the specified diagnostic metric set. Then, you can call the DescribeDiagnosticReportAttributes operation based on the returned diagnostic report ID to view the details of the diagnostic report.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/CreateDiagnosticReport)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/CreateDiagnosticReport)

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

ecs:CreateDiagnosticReport

create

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

The region ID of the security group. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

ResourceId

string

Yes

The ID of resource N.

i-uf6i0tv2refv8wz\*\*\*\*\*

MetricSetId

string

No

The ID of the diagnostic metric set. If this parameter is left empty, the dms-instancedefault set is used, which is the default diagnostic metric set provided for Elastic Compute Service (ECS) instances.

dms-uf6i0tv2refv8wz\*\*\*\*\*

StartTime

string

No

The start time. This parameter takes effect only for diagnostic metrics that do not need to be assessed by running Cloud Assistant commands in guest operating systems.

2022-07-11T12:00:00Z

EndTime

string

No

The end time. This parameter takes effect only for diagnostic metrics that do not need to be assessed by running Cloud Assistant commands in guest operating systems.

2022-07-11T14:00:00Z

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

ReportId

string

The unique ID of the diagnostic report.

dr-uf6i0tv2refv8wz\*\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE*****",
  "ReportId": "dr-uf6i0tv2refv8wz*****"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

InvalidResource.NotExists

The specified resource not exists.

\-

400

InvalidParameter

%s

The specified parameter is invalid.

400

InvalidOperation.CloudAssistantNotReady

Cloud Assistant is not installed, or the service is unavailable. Install Cloud Assistant or check the status of Cloud Assistant first.

Cloud Assistant is not installed, or the service is unavailable. Install Cloud Assistant or check the status of Cloud Assistant first.

403

InvalidAxt.ServiceNotReady

%s

\-

403

Forbidden.CreateSLR

You are not authorized to do this action.

\-

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-03-25

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateDiagnosticReport?updateTime=2025-03-25#workbench-doc-change-demo)

2025-03-20

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateDiagnosticReport?updateTime=2025-03-20#workbench-doc-change-demo)

2022-09-20

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateDiagnosticReport?updateTime=2022-09-20#workbench-doc-change-demo)

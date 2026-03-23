Creates a diagnostic metric set. You can group diagnostic metrics into diagnostic metric sets.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/CreateDiagnosticMetricSet)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/CreateDiagnosticMetricSet)

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

ecs:CreateDiagnosticMetricSet

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

The region ID. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

ResourceType

string

Yes

The type of the resource.

Default value: instance.

instance

MetricSetName

string

No

The name of the diagnostic metric set.

The IDs of diagnostic metrics. You can specify up to 100 diagnostic metric IDs.

MetricIds

array

Yes

The IDs of diagnostic metrics. You can specify up to 100 diagnostic metric IDs.

string

Yes

The ID of diagnostic metric N. You can specify up to 100 diagnostic metric IDs.

Instance.DiskLoadFailure

Description

string

No

The description of the diagnostic metric set.

The ID of the request.

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

MetricSetId

string

The ID of the diagnostic metric set, which is the unique identifier of the set.

dms-o7ymuutup5l\*\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE*****",
  "MetricSetId": "dms-o7ymuutup5l*****"
}
```

## Error codes

HTTP status code

Error code

Error message

400

InvalidParameter.MetricId

%s

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-03-20

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateDiagnosticMetricSet?updateTime=2025-03-20#workbench-doc-change-demo)

Modifies a diagnostic metric set.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyDiagnosticMetricSet)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyDiagnosticMetricSet)

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

ecs:ModifyDiagnosticMetricSet

update

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

MetricSetId

string

Yes

The IDs of the diagnostic metric sets.

dms-uf6i0tv2refv8wz\*\*\*\*\*

MetricIds

array

No

The IDs of diagnostic metrics.

string

No

The ID of diagnostic metric N.

Instance.DiskLoadFailure

ResourceType

string

No

The resource type.

Enumeration Value:

-   instance

instance

MetricSetName

string

No

The name of the diagnostic metric set.

remoteConnectError

Description

string

No

The description of the diagnostic metric set.

connection diagnostics

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

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE*****"
}
```

## Error codes

HTTP status code

Error code

Error message

400

InvalidParameter.MetricSetId

%s

400

InvalidParameter.MetricIds

%s

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-03-20

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyDiagnosticMetricSet?updateTime=2025-03-20#workbench-doc-change-demo)

2022-07-21

Add Operation

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyDiagnosticMetricSet?updateTime=2022-07-21#workbench-doc-change-demo)

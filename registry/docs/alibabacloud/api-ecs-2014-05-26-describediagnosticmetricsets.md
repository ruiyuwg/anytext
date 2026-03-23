Queries diagnostic metric sets.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeDiagnosticMetricSets)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeDiagnosticMetricSets)

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

ecs:DescribeDiagnosticMetricSets

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

The region ID of the diagnostic metric set. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

MetricSetIds

array

No

The IDs of diagnostic metric sets.

string

No

The ID of diagnostic metric set N.

dms-uf6i0tv2refv8wz\*\*\*\*\*

Type

string

No

The type of the diagnostic metric set. Valid values:

-   User: custom diagnostic metric set
-   Common: public diagnostic metric set

Default value: User.

User

ResourceType

string

No

The resource type supported by the diagnostic metric set.

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

MetricSets

array<object>

The diagnostic metric sets.

MetricSet

object

MetricSetId

string

The ID of the diagnostic metric set.

dms-bp17p0qwtr72zmu\*\*\*\*\*

MetricSetName

string

The name of the diagnostic metric set.

connection issue diagnostics

Description

string

The description of the diagnostic metric set.

connection issue diagnostics

Type

string

The type of the diagnostic metric set. Valid values:

-   User: user-defined diagnostic metric set
-   Common: common diagnostic metric set

User

ResourceType

string

The resource type supported by the diagnostic metric set.

instance

MetricIds

array

The IDs of the diagnostic metrics.

MetricId

string

The ID of the diagnostic metric.

Instance.DiskLoadFailure

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE*****",
  "NextToken": "caeba0bbb2be03f84eb48b699f0a4883",
  "MetricSets": [
    {
      "MetricSetId": "dms-bp17p0qwtr72zmu*****",
      "MetricSetName": "connection issue diagnostics",
      "Description": "connection issue diagnostics",
      "Type": "User",
      "ResourceType": "instance",
      "MetricIds": [
        "Instance.DiskLoadFailure"
      ]
    }
  ]
}
```

## Error codes

HTTP status code

Error code

Error message

Description

404

InvalidMetricSetId.NotExist

The specified MetricSetId does not exist.

The specified MetricSetId does not exist.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2022-07-21

Add Operation

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeDiagnosticMetricSets?updateTime=2022-07-21#workbench-doc-change-demo)

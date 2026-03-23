Deletes a dedicated host group. Before you call the API operation, you must migrate the dedicated hosts in the host group to another host group.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DeleteDedicatedHostCluster)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DeleteDedicatedHostCluster)

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

ecs:DeleteDedicatedHostCluster

delete

\*DedicatedHostCluster

`acs:ecs:{#regionId}:{#accountId}:ddhcluster/{#ddhclusterId}`

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

The region ID of the host group. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

DedicatedHostClusterId

string

Yes

The ID of the host group.

dc-bp12wlf6am0vz9v2\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

11B55F58-D3A4-4A9B-9596-342420D02FF8

## Examples

Sample success responses

`JSON`format

```
{
  "RequestId": "11B55F58-D3A4-4A9B-9596-342420D02FF8"
}
```

## Error codes

HTTP status code

Error code

Error message

400

DedicatedHostExists

Dedicated Host exists in the dedicated host cluster.

400

IncompleteParamter

Parameter DedicatedHostClusterId can not be null in this request.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-02-20

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DeleteDedicatedHostCluster?updateTime=2025-02-20#workbench-doc-change-demo)

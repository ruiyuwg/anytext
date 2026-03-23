Creates a high performance computing (HPC) cluster.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/CreateHpcCluster)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/CreateHpcCluster)

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

ecs:CreateHpcCluster

create

\*HpcCluster

`acs:ecs:{#regionId}:{#accountId}:hpc/*`

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

The region ID of the HPC cluster. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent list of regions.

cn-hangzhou

ClientToken

string

No

The client token that is used to ensure the idempotence of the request. You can use the client to generate a client token. Make sure that a unique client token is used for each request. The **ClientToken** value can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [How to ensure idempotence](/help/en/ecs/developer-reference/how-to-ensure-idempotence).

123e4567-e89b-12d3-a456-426655440000

RegionId

string

Yes

The region ID of the HPC cluster. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent list of regions.

cn-hangzhou

Description

string

No

The description of the HPC cluster. The description must be 2 to 256 characters in length. It cannot start with `http://` or `https://`.

This parameter is empty by default.

testHPCDescription

Name

string

Yes

The name of the HPC cluster. The name must be 2 to 128 characters in length, and can contain letters, digits, underscores (\_), and hyphens (-). The name must start with a letter but cannot start with `http://` or `https://`.

hpc-Cluster-01

## Response parameters

Parameter

Type

Description

Example

object

HpcClusterId

string

The ID of cluster.

hpc-pnlg1ds9rky4\*\*\*\*

RequestId

string

The ID of the request.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

## Examples

Sample success responses

`JSON`format

```
{
  "HpcClusterId": "hpc-pnlg1ds9rky4****",
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E"
}
```

## Error codes

HTTP status code

Error code

Error message

Description

400

MissingParameter

The input parameter RegionId that is mandatory for processing this request is not supplied.

\-

400

InvalidHpcClusterName.Malformed

Specified hpc cluster name is not valid.

The specified HPC cluster name is invalid.

400

InvalidHpcClusterDescription.Malformed

The specified parameter Description is not valid.

The specified HPC cluster description is invalid.

400

Invalid.Parameter

Invalid parameters

Invalid parameters.

404

InvalidRegionId.NotFound

The specified parameter "RegionId" is not valid.

\-

404

InternalError

Failed to create hpc cluster

The HPC cluster cannot be created.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-12-18

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/CreateHpcCluster?updateTime=2024-12-18#workbench-doc-change-demo)

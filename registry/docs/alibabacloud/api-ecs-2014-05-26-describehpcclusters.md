The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. The \\\\\*\\\\\*token\\\\\*\\\\\* can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see \\\\\[How to ensure idempotence\]\\\\(~~25693~~).

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeHpcClusters)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeHpcClusters)

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

ecs:DescribeHpcClusters

get

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

The IDs of HPC clusters. The value is a JSON array that consists of up to 100 HPC cluster IDs. Separate the HPC cluster IDs with commas (,).

cn-hangzhou

ClientToken

string

No

The page number.

Pages start from page 1.

Default value: 1.

123e4567-e89b-12d3-a456-426655440000

HpcClusterIds

string

No

The number of entries per page.

Maximum value: 100.

Default value: 10.

\["hpc-xxxxxxxxx", "hpc-yyyyyyyyy", … "hpc-zzzzzzzzz"\]

PageNumber

integer

No

The page number.

Pages start from page 1.

Default value: 1.

1

PageSize

integer

No

The number of entries per page.

Valid values: 1 to 100.

Default value: 10.

10

## Response parameters

Parameter

Type

Description

Example

object

PageSize

integer

The page number.

10

RequestId

string

The total number of HPC clusters.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

PageNumber

integer

Details about the HPC clusters. The value is an array that consists of the information of each HPC cluster.

1

TotalCount

integer

The ID of the HPC cluster.

2

HpcClusters

array<object>

The name of the HPC cluster.

HpcCluster

object

HpcClusterId

string

The description of the HPC cluster.

hpc-bp1a5zr3u7nq9cx\*\*\*\*

Name

string

The name of the HPC cluster.

testName

Description

string

The description of the HPC cluster.

testDescription

## Examples

Sample success responses

`JSON`format

```
{
  "PageSize": 10,
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "PageNumber": 1,
  "TotalCount": 2,
  "HpcClusters": {
    "HpcCluster": [
      {
        "HpcClusterId": "hpc-bp1a5zr3u7nq9cx****",
        "Name": "testName",
        "Description": "testDescription"
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

InvalidRegionId.NotFound

The specified parameter "RegionId" is not valid.

\-

400

MissingParameter.HpcClusterId

The input parameter HpcClusterId that is mandatory for processing this request is not supplied.

The HpcClusterId parameter is required.

400

InvalidHpcClusterIds.ExceedLimit

The amount of specified specified hpc cluster ids exceeds the limit.

The number of HPC cluster IDs specified in the HpcClusterIds value is out of range.

400

InvalidHpcClusterIds.Malformed

The amount of specified specified hpc cluster ids is invalid.

The number of HPC cluster IDs specified in the HpcClusterIds value is out of range.

400

Invalid.Parameter

Invalid parameters.

Invalid parameters.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history

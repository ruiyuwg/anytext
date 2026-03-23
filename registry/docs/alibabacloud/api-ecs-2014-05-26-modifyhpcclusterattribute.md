Modifies the description of a high performance computing (HPC) cluster.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyHpcClusterAttribute)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/ModifyHpcClusterAttribute)

## Authorization information

There is currently no authorization information disclosed in the API.

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

ClientToken

string

No

The client token that is used to ensure the idempotence of the request. You can use the client to generate the token, but you must make sure that the token is unique among different requests. **The token can contain only ASCII characters and cannot exceed 64 characters in length.** For more information, see [How to ensure idempotence](/help/en/ecs/developer-reference/how-to-ensure-idempotence).

123e4567-e89b-12d3-a456-426655440000

RegionId

string

Yes

The region ID. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

HpcClusterId

string

Yes

The ID of the HPC cluster.

hpc-b8bq705cvx1\*\*\*\*

Description

string

No

The description of the HPC cluster. The description must be 2 to 256 characters in length, and cannot start with http:// or https://.

This parameter is empty by default.

testDescription

Name

string

No

The name of the HPC cluster. The name must be 2 to 128 characters in length. The name must start with a letter and cannot start with http:// or https://. The name can contain letters, digits, underscores (\_), and hyphens (-).

This parameter is empty by default.

testName

## Response parameters

Parameter

Type

Description

Example

object

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

## Examples

Sample success responses

`JSON`format

```
{
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

InvalidRegionId.NotFound

The specified parameter "RegionId" is not valid.

\-

400

InvalidModifyInfo

Modify info is invalid, name/description must not null at the same time

Parameters are invalid. You must specify at least one of the Name and Description parameters.

400

HPC\_CLUSTER\_MODIFY\_FAILED

Modify failed, possibly this hpc cluster does not exist

The HPC cluster cannot be modified. Check whether the cluster exists.

400

Invalid.Parameter

Invalid parameters

Invalid parameters.

400

HpcClusterNotExists

The specified hpc cluster does not exist

The specified HPC cluster does not exist.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-12-18

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyHpcClusterAttribute?updateTime=2024-12-18#workbench-doc-change-demo)

2023-08-31

The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/ModifyHpcClusterAttribute?updateTime=2023-08-31#workbench-doc-change-demo)

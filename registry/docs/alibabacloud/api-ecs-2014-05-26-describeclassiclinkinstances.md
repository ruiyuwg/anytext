Queries instances located in the classic network that have established ClassicLink connections to virtual private clouds (VPCs).

## Operation description

Take note of the following items:

-   This operation applies only to instances that reside in the classic network.
-   You can query a maximum of 100 instances that reside in the classic network at a time.
-   At least one of the `VpcId` and `InstanceId` parameters must be configured.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeClassicLinkInstances)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeClassicLinkInstances)

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

ecs:DescribeClassicLinkInstances

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

The region ID of the instances. You can call the [DescribeRegions](/help/en/ecs/api-regions-describeregions) operation to query the most recent region list.

cn-hangzhou

VpcId

string

No

The VPC ID. The ClassicLink feature must be enabled for the specified VPC. For more information, see [Establish a ClassicLink connection](/help/en/vpc/create-classiclink-connection).

vpc-bp1vwnn14rqpyiczj\*\*\*\*

InstanceId

string

No

The instance ID. You can specify a maximum of 100 instance IDs in a single request. Separate the instance IDs with commas (,).

i-bp1a5zr3u7nq9cxh\*\*\*\*

PageNumber

string

No

The page number. Pages start from page 1.

Default value: 1.

1

PageSize

string

No

The number of entries per page. Valid values: 1 to 100.

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

The number of entries per page.

10

RequestId

string

The request ID.

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

PageNumber

integer

The page number.

1

TotalCount

integer

The total number of ClassicLink connections.

2

Links

array<object>

The details of the ClassicLink connections between the instances reside in the classic network and VPCs.

Link

object

VpcId

string

The VPC ID.

vpc-test

InstanceId

string

The instance ID.

i-test

## Examples

Sample success responses

`JSON`format

```
{
  "PageSize": 10,
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "PageNumber": 1,
  "TotalCount": 2,
  "Links": {
    "Link": [
      {
        "VpcId": "vpc-test",
        "InstanceId": "i-test"
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

403

InvalidInstanceId.NotFound

The InstanceId provided does not exist in our records.

The specified instance does not exist. Check whether the instance ID is correct.

403

InvalidParameter.ToManyInstanceIds

No more than 100 InstanceIds can be specified.

Up to 100 instance IDs can be specified.

403

InvalidParameter.InvalidInstanceIdAndVpcId

The parameter InstanceId and VpcId are not allowed to be empty at the same time.

At least one of the InstanceId and VpcId parameters must be specified.

403

InvalidInstanceId.NotBelong

The specified instance is not belong to you.

The specified instance does not exist in your account.

403

InvalidVpc.NotBelong

The specified vpc is not belong to you.

The specified VPC does not belong to your account.

403

InvalidParameter.PageNumber

The parameter pageNumber is invalid.

The specified PageNumber parameter is invalid.

403

InvalidParameter.PageSize

The parameter pageSize is invalid.

The specified paging parameter PageSize is invalid.

404

InvalidRegionId.NotFound

The specified region does not exist.

The specified RegionId parameter does not exist. Check whether the service is available in the specified region.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-12-20

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeClassicLinkInstances?updateTime=2024-12-20#workbench-doc-change-demo)

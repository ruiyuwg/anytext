Queries the status of one or more Elastic Compute Service (ECS) instances. You can also call this operation to query the list of ECS instances that match the specified filter conditions.

## Operation description

For information about the lifecycle states of an ECS instance, see [Instance lifecycle](/help/en/doc-detail/25687.html).

## [](#sample-requests)[](#)Sample requests

-   Query the ECS instances and the status of the instances in a **specific region**. Sample request:

```
"RegionID": "cn-hangzhou"
```

-   Query the ECS instances and the status of the instances in a **zone** of a **specific region**. Sample request:

```
"RegionID": "cn-hangzhou",
"ZoneID": "cn-hangzhou-a"
```

-   Query the status of an ECS instance in a **specific region** based on the **instance ID**. Sample request:

```
"RegionID": "cn-hangzhou",
"InstancesID": ["i-bp1f7c1zqp999zvp****", "i-bp1dqjv36biueg61****"]
```

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeInstanceStatus)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/Ecs/2014-05-26/DescribeInstanceStatus)

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

ecs:DescribeInstanceStatus

list

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

ZoneId

string

No

The zone ID of the instances. You can call the [DescribeZones](/help/en/ecs/api-describezones) operation to query the most recent zone list.

cn-hangzhou-d

ClusterId

string

No

The ID of the cluster to which the ECS instances belong.

**Note** This parameter is deprecated. We recommend that you do not use this parameter.

cls-bp67acfmxazb4p\*\*\*\*

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

The number of entries per page. Valid values: 1 to 50.

Default value: 10.

10

InstanceId

array

No

The IDs of ECS instances. You can specify 1 to 100 instance IDs.

Example: \["i-bp1j4i2jdf3owlhe\*\*\*\*", "i-bp1j4i2jdf3o1234\*\*\*\*"\].

string

No

The ID of the ECS instance.

i-bp1j4i2jdf3owlhe\*\*\*\*

## Response parameters

Parameter

Type

Description

Example

object

PageSize

integer

The number of entries per page.

1

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

The total number of instances.

58

InstanceStatuses

array<object>

The IDs and status of the ECS instances.

InstanceStatus

object

Status

string

The status of the instance. Valid values:

-   Pending: The instance is being created.
-   Running: The instance is running.
-   Starting: The instance is being started.
-   Stopping: The instance is being stopped.
-   Stopped: The instance is stopped.

Running

InstanceId

string

The ID of the instance.

i-bp1j4i2jdf3owlhe\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "PageSize": 1,
  "RequestId": "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E",
  "PageNumber": 1,
  "TotalCount": 58,
  "InstanceStatuses": {
    "InstanceStatus": [
      {
        "Status": "Running",
        "InstanceId": "i-bp1j4i2jdf3owlhe****"
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

InvalidParameter.TooManyInstanceIds

Instance ids cannot be more than 100.

InstanceIds cannot be more than 100.

403

Abs.InvalidInstanceIds.MalFormed

The specified instanceIds is not valid.

\-

404

InvalidZoneId.NotFound

The ZoneId provided does not exist in our records.

The specified zone ID does not exist.

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/Ecs/2014-05-26/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-01-15

API Description Update. The Error code has changed

[View Change Details](https://api.alibabacloud.com/document/Ecs/2014-05-26/DescribeInstanceStatus?updateTime=2025-01-15#workbench-doc-change-demo)

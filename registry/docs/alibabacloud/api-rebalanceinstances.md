Rebalances the distribution of Elastic Compute Service (ECS) instances across zones. If ECS instances are unevenly distributed across multiple zones, you can call the RebalanceInstances operation to rebalance the distribution of the ECS instances across the zones.

## Usage notes

Auto Scaling creates new ECS instances to replace the existing ECS instances to fulfill the rebalancing purpose. Auto Scaling starts the new ECS instances before stopping the existing ECS instances. The rebalancing operation does not affect the performance or service availability of your application.

-   This operation is supported by only multi-zone scaling groups whose `MultiAZPolicy` is set to `BALANCE`.
    
-   A rebalancing operation is required only when the distribution of the instances of a multi-zone scaling group is significantly unbalanced. In a rebalancing activity, Auto Scaling replaces up to 20 ECS instances to rectify the unbalanced distribution.
    
-   During the execution of a rebalancing operation, if the number of instances in the scaling group approaches or hits the value of MaxSize but the rebalancing operation needs to continue, Auto Scaling allows the total number of ECS instances to momentarily exceed the value of MaxSize by 10%. This temporary surplus condition persists for a duration until equilibrium in the distribution of ECS instances is achieved. Typically, it takes 1 to 6 minutes.
    
    **Note**
    
    If the 10% increment of the maximum number of instances in a scaling group yield a non-integer value, the decimal portion is always rounded up to ensure an additional instance is accounted for. For example, you have a scaling group that holds a maximum of 15 ECS instances. During a rebalancing operation, Auto Scaling would permit the total number of instances to momentarily surpass this limit by 2, instead of the calculated 10% (which is 1.5).
    

## Debugging

[OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=Ess&api=RebalanceInstances&type=RPC&version=2014-08-28)

## Request parameters

**Parameter**

**Type**

**Required**

**Example**

**Description**

Action

String

Yes

RebalanceInstances

The operation that you want to perform. Set the value to **RebalanceInstances**.

ScalingGroupId

String

Yes

asg-bp18p2yfxow2dloq\*\*\*\*

The ID of the scaling group.

RegionId

String

No

cn-hangzhou

The region ID of the scaling group.

## Response parameters

**Parameter**

**Type**

**Example**

**Description**

ScalingActivityId

String

asa-kjgffgdfadah\*\*\*\*

The ID of the scaling activity.

RequestId

String

473469C7-AA6F-4DC5-B3DB-A3DC0DE3\*\*\*\*

The request ID.

## Examples

Sample requests

```
http(s)://ess.aliyuncs.com/?Action=RebalanceInstances
&ScalingGroupId=asg-bp18p2yfxow2dloq****
&RegionId=cn-hangzhou
&<Common request parameters>
```

Sample success responses

`XML` format

```
HTTP/1.1 200 OK
Content-Type:application/xml

<RebalanceInstancesResponse>
    <ScalingActivityId>asa-kjgffgdfadah****</ScalingActivityId>
    <RequestId>473469C7-AA6F-4DC5-B3DB-A3DC0DE3****</RequestId>
</RebalanceInstancesResponse>
```

`JSON` format

```
HTTP/1.1 200 OK
Content-Type:application/json

{
  "ScalingActivityId" : "asa-kjgffgdfadah****",
  "RequestId" : "473469C7-AA6F-4DC5-B3DB-A3DC0DE3****"
}
```

## Error codes

For a list of error codes, see [Service error codes](https://error-center.alibabacloud.com/status/product/Ess).

HTTP status code

Error code

Error message

Description

400

IncorrectScalingGroupStatus

The current status of the specified scaling group does not support this action.

The scaling group is not in the Enabled state.

400

OperationDenied

This operation is denied because the specified scaling group does not support this action.

You did not set

`MultiAZPolicy`

to

`BALANCE`

, or the distribution of ECS instances is not significantly unbalanced.

403

Forbidden.Unauthorized

A required authorization for the specified action is not supplied.

You are not authorized to call the RebalanceInstances operation.

404

InvalidScalingGroupId.NotFound

The specified scaling group does not exist.

The specified scaling group does not exist within your Alibaba Cloud account.

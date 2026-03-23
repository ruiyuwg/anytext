Deletes a scaling group. If you no longer need a scaling group, you can call the DeleteScalingGroup operation to delete it to free up the scaling group quota. If you delete a scaling group, the scaling configurations and scaling rules of the scaling group are deleted simultaneously.

## Usage notes

Before you call the DeleteScalingGroup operation, take note of the following items:

-   If you delete a scaling group, the scaling configurations, scaling rules, scaling activities, and scaling requests related to the scaling group are also deleted.
    
-   If you delete a scaling group, the scheduled tasks and event-triggered tasks of the scaling group are not deleted. The load balancers and ApsaraDB RDS instances that are attached to the scaling group are also not deleted.
    
-   If you enabled the `Deletion Protection` feature when you created a scaling group, you cannot delete the scaling group in the Auto Scaling console or by using this operation. The Deletion Protection feature helps prevent accidental deletion of scaling groups.
    
-   If you enabled the `Release Protection` feature when you created an Elastic Compute Service (ECS) instance and you want to delete the scaling group that manages the ECS instance, Auto Scaling forcibly removes the ECS instance from the scaling group and releases all automatically created ECS instances together with the scaling group after you call this operation.
    
    **Note**
    
    Prior to deleting a scaling group, make sure that your ECS instances within the scaling group are safeguarded against unintended release. Even if you have already enabled the Release Protection feature for the ECS instances, you must manually put these ECS instances into the **Protected** state. Doing so guarantees that the ECS instances will not be forcibly released during the deletion process of the scaling group, providing an extra layer of security. For more information, see [SetInstancesProtection](/help/en/auto-scaling/developer-reference/api-ess-2022-02-22-setinstancesprotection).
    

## Debugging

[OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=Ess&api=DeleteScalingGroup&type=RPC&version=2014-08-28)

## Request parameters

**Parameter**

**Type**

**Required**

**Example**

**Description**

Action

String

Yes

DeleteScalingGroup

The operation that you want to perform. Set the value to **DeleteScalingGroup**.

ScalingGroupId

String

Yes

asg-bp18p2yfxow2dloq\*\*\*\*

The ID of the scaling group.

ForceDelete

Boolean

No

false

Specifies whether to enforce the deletion of the scaling group, including the removal of all the existing ECS instances or elastic container instances from the scaling group and their subsequent release, even if the scaling group is actively undergoing scaling activities. Valid values:

-   true: enforces the deletion of the scaling group. In this case, the scaling group first enters the Disabled state, ceasing acceptance of new scaling requests. Auto Scaling awaits the conclusion of all ongoing scaling activities in the scaling group before it automatically removes the current ECS instances or elastic container instances from the scaling group and enforces the deletion operation. Note that manually added instances are merely removed from the scaling group, whereas auto-provisioned instances are removed and deleted.
    
-   false: does not enforce the deletion of the scaling group. The scaling group will be disabled and then deleted once all the following requirements are satisfied:
    
    -   The scaling group has no ongoing scaling activities.
        
    -   No ECS instances or elastic container instances exist in the scaling group (Total Capacity=0).
        

Default value: false.

RegionId

String

No

cn-qingdao

The region ID of the scaling group.

## Response parameters

**Parameter**

**Type**

**Example**

**Description**

RequestId

String

473469C7-AA6F-4DC5-B3DB-A3DC0DE3\*\*\*\*

The request ID.

## Examples

Sample requests

```
http(s)://ess.aliyuncs.com/?Action=DeleteScalingGroup
&ScalingGroupId=asg-bp18p2yfxow2dloq****
&ForceDelete=false
&RegionId=cn-qingdao
&<Common request parameters>
```

Sample success responses

`XML` format

```
HTTP/1.1 200 OK
Content-Type:application/xml

<DeleteScalingGroupResponse>
    <RequestId>473469C7-AA6F-4DC5-B3DB-A3DC0DE3****</RequestId>
</DeleteScalingGroupResponse>
```

`JSON` format

```
HTTP/1.1 200 OK
Content-Type:application/json

{
  "RequestId" : "473469C7-AA6F-4DC5-B3DB-A3DC0DE3****"
}
```

## Error codes

For a list of error codes, see [Service error codes](https://error-center.alibabacloud.com/status/product/Ess).

HTTP status code

Error code

Error message

Description

404

InvalidScalingGroupId.NotFound

The specified scaling group does not exist.

The specified scaling group does not exist within your Alibaba Cloud account.

403

Forbidden.Unauthorized

A required authorization for the specified action is not supplied.

Auto Scaling is not authorized to call the operation.

400

InstanceInUse

You cannot delete a scaling configuration or scaling group while there is an instance associated with it.

The specified scaling group contains ECS instances or elastic container instances.

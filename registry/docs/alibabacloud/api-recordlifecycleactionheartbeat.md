Extends the time window during which Elastic Compute Service (ECS) instances stay in a Pending state. If the current time window during which an ECS instance stays in a Pending state is not sufficient for you to complete custom operations on the ECS instance, you can call the RecordLifecycleActionHeartbeat operation to extend the time window. When you call this operation, you can specify lifecycleHookId, lifecycleActionToken, and heartbeatTimeout to extend the time window for the desired ECS instance.

## Usage notes

You can call this operation only when the desired ECS instance enters a Pending state.

An ECS instance can stay in a Pending state for up to six hours. Each time an ECS instance enters a Pending state, you can extend the time window during which the ECS instance stays in the Pending state up to 20 times.

## Debugging

[OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=Ess&api=RecordLifecycleActionHeartbeat&type=RPC&version=2014-08-28)

## Request parameters

**Parameter**

**Type**

**Required**

**Example**

**Description**

Action

String

Yes

RecordLifecycleActionHeartbeat

The operation that you want to perform. Set the value to RecordLifecycleActionHeartbeat.

lifecycleHookId

String

Yes

ash-bp1fxuqyi98w0aib\*\*\*\*

The ID of the lifecycle hook.

lifecycleActionToken

String

Yes

F324B880-900E-4968-85DD-81691113\*\*\*\*

The action token of the lifecycle hook. You can obtain the token from the details page of the Simple Message Queue (SMQ, formerly MNS) queue specified for the lifecycle hook.

You can also call the [DescribeLifecycleActions](/help/en/auto-scaling/developer-reference/api-describelifecycleactions) operation to obtain the action token of the lifecycle hook.

If you specified an SMQ topic for the lifecycle hook, you can obtain the token from the MNS topic.

heartbeatTimeout

Integer

No

600

The time window during which the ECS instance stays in a Pending state. When the time window ends, Auto Scaling executes the default action. Valid values: 30 to 21600. Unit: seconds.

After you create a lifecycle hook, you can call this operation to extend the time window during which the desired ECS instance stays in a Pending state. You can also call the [CompleteLifecycleAction](/help/en/auto-scaling/developer-reference/api-completelifecycleaction) operation to remove the desired ECS instance from the Pending state ahead of schedule.

Default value: 600.

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

RequestId

String

473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E

The request ID.

## Examples

Sample requests

```
http(s)://ess.aliyuncs.com/?Action=RecordLifecycleActionHeartbeat
&lifecycleHookId=ash-bp1fxuqyi98w0aib****
&lifecycleActionToken=F324B880-900E-4968-85DD-81691113****
&heartbeatTimeout=600
&RegionId=cn-hangzhou
&<Common request parameters>
```

Sample success responses

`XML` format

```
HTTP/1.1 200 OK
Content-Type:application/xml

<RecordLifecycleActionHeartbeatResponse>
    <RequestId>473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E</RequestId>
</RecordLifecycleActionHeartbeatResponse>
```

`JSON` format

```
HTTP/1.1 200 OK
Content-Type:application/json

{
  "RequestId" : "473469C7-AA6F-4DC5-B3DB-A3DC0DE3C83E"
}
```

## Error codes

For a list of error codes, see [Service error codes](https://error-center.alibabacloud.com/status/product/Ess).

HTTP status code

Error code

Description

Description

400

InvalidParamter

The specified value of parameter is not valid.

The value you assigned to a parameter is invalid.

400

LifecycleHookIdAndLifecycleActionToken.Invalid

The specified lifecycleActionToken and LifecycleHookId you provided does not match any in process lifecycle action.

The value you assigned to lifecycleActionToken does not match the value of LifecycleHookId.

400

LifecycleAction.TimeExceeded

The specified parameter heartbeatTime exceed lifecycleAction max suspend time.

An ECS instance can stay in a Pending state for a maximum of fix hours.

400

LifecycleAction.RecordTimesExceeded

The specified lifecycleAction exceed lifecycleAction max record times.

Each time an ECS instance stays in a Pending state, you can call this operation only up to 20 times.

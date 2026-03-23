Ends the timeout period of a lifecycle hook ahead of schedule. If you have created a lifecycle hook for your scaling group, you can call the CompleteLifecycleAction operation to end the timeout period of the lifecycle hook ahead of schedule based on your business requirements.

## Usage notes

After you manually end the timeout period of a lifecycle hook, Auto Scaling proceeds with one of the following actions based on the predefined settings: responding to the scaling request, aborting the scaling request, and initiating a rollback process.

## Debugging

[OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=Ess&api=CompleteLifecycleAction&type=RPC&version=2014-08-28)

## Request parameters

**Parameter**

**Type**

**Required**

**Example**

**Description**

Action

String

Yes

CompleteLifecycleAction

The operation that you want to perform. Set the value to CompleteLifecycleAction.

LifecycleHookId

String

Yes

ash-bp14g3ee6bt3sc98\*\*\*\*

The ID of the lifecycle hook.

LifecycleActionToken

String

Yes

aaaa-bbbbb-cccc-ddddd

The token of the lifecycle action. You can obtain the token from the Simple Message Queue (SMQ, formerly MNS) queue or topic that is specified for the lifecycle hook.

LifecycleActionResult

String

No

CONTINUE

The action that you want Auto Scaling to perform after the lifecycle hook times out. Valid values:

-   CONTINUE: Auto Scaling proceeds to execute either a scale-in or scale-out action as per the request.
    
-   ABANDON: Auto Scaling releases ECS instances that are created during scale-out events, or removes ECS instances from the scaling group during scale-in events.
    
-   ROLLBACK: During scale-in events, Auto Scaling declines requests to release ECS instances and instead rolls back any changes. For scale-out events, the ROLLBACK setting behaves identically to the ABANDON setting.
    

If you do not specify this parameter, Auto Scaling defaults to executing the action defined by `DefaultResult` once the lifecycle hook times out.

If multiple lifecycle hooks are concurrently active within a scaling group, the following rules apply:

-   During scale-in events, if lifecycle hooks whose LifecycleActionResult parameter is set to `ABANDON` or `ROLLBACK` time out, other concurrent lifecycle hooks time out ahead of schedule.
    
-   During scale-in or scale-out events, if you set LifecycleActionResult to `CONTINUE` for all active lifecycle hooks, Auto Scaling proceeds with the next action only after the final lifecycle hook among those that are simultaneously triggered has reached its timeout period. The action that Auto Scaling performs is determined by the value of DefaultResult that you specify for the lifecycle hook that most recent times out.
    

ClientToken

String

No

123e4567-e89b-12d3-a456-42665544\*\*\*\*

The client token that is used to ensure the idempotence of the request.

You can use the client to generate the token, but you must make sure that the token is unique among different requests. The token can contain only ASCII characters and cannot exceed 64 characters in length. For more information, see [Ensure idempotence](/help/en/auto-scaling/developer-reference/how-to-ensure-idempotence).

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
http(s)://ess.aliyuncs.com/?Action=CompleteLifecycleAction
&LifecycleHookId=ash-bp14g3ee6bt3sc98****
&LifecycleActionToken=aaaa-bbbbb-cccc-ddddd
&LifecycleActionResult=CONTINUE
&ClientToken=123e4567-e89b-12d3-a456-42665544****
&RegionId=cn-qingdao
&<Common request parameters>
```

Sample success responses

`XML` format

```
HTTP/1.1 200 OK
Content-Type:application/xml

<CompleteLifecycleActionResponse>
    <RequestId>473469C7-AA6F-4DC5-B3DB-A3DC0DE3****</RequestId>
</CompleteLifecycleActionResponse>
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

Description

Description

400

InvalidParamter

The specified value of parameter is invalid.

The value of a parameter is invalid.

400

LifecycleHookIdAndLifecycleActionToken.Invalid

The specified lifecycleActionToken and lifecycleHookId you provided does not match any in process lifecycle action.

The value that you assigned to LifecycleActionToken does not match the value that you assigned to LifecycleHookId.

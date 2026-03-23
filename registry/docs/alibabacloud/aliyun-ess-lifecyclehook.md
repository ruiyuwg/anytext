ALIYUN::ESS::LifecycleHook is used to create a lifecycle hook for a scaling group.

## Syntax

```
{
  "Type": "ALIYUN::ESS::LifecycleHook",
  "Properties": {
    "LifecycleHookName": String,
    "NotificationArn": String,
    "HeartbeatTimeout": Integer,
    "NotificationMetadata": String,
    "ScalingGroupId": String,
    "DefaultResult": String,
    "LifecycleTransition": String
  }
}
```

## Properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

LifecycleHookName

String

No

Yes

The name of the lifecycle hook. The name must be unique within a scaling group.

The name must be 2 to 40 characters in length, and can contain letters, digits, underscores (\_), hyphens (-), and periods (.). It must start with a letter or digit.

The default value is the ID of the lifecycle hook.

NotificationArn

String

No

Yes

The Alibaba Cloud Resource Name (ARN) of the notification method.

The following notification methods are supported: CloudOps Orchestration Service (OOS) templates, Message Service (MNS) queues, and MNS topics. Specify the property value in the `acs:ess:{region}:{account-id}:{resource-relative-id}` format.

-   `region`: the region where the scaling group resides
    
-   `account-id`: the ID of the Alibaba Cloud account
    

Value formats:

-   Value format for an MNS queue: `acs:ess:{region}:{account-id}:queue/{queuename}`
    
-   Value format for an MNS topic: `acs:ess:{region}:{account-id}:topic/{topicname}`
    
-   Value format for an OOS template: `acs:ess:{region}:{account-id}:oos/{template_name}`
    

HeartbeatTimeout

Integer

No

Yes

The timeout period of the lifecycle hook. Within the timeout period, activities in the scaling group are in the pending state. When the timeout period ends, Auto Scaling performs the action that is specified by DefaultResult. After you create a lifecycle hook, you can call the [RecordLifecycleActionHeartbeat](/help/en/auto-scaling/developer-reference/api-recordlifecycleactionheartbeat#doc-api-Ess-RecordLifecycleActionHeartbeat) operation to extend the timeout period during which Elastic Compute Service (ECS) instances are in the pending state. You can also call the [CompleteLifecycleAction](/help/en/auto-scaling/developer-reference/api-completelifecycleaction#doc-api-Ess-CompleteLifecycleAction) operation to terminate the pending state of scaling activities ahead of schedule.

Valid values: 30 to 21600.

Unit: seconds.

Default value: 600.

NotificationMetadata

String

No

Yes

The fixed string in the notification that Auto Scaling sends when the scaling activities are in the pending state.

The string can be up to 128 characters in length.

Auto Scaling sends the specified `NotificationMetadata` value along with the notification message so that you can easily categorize notifications. This property takes effect only when `NotificationArn` is specified.

ScalingGroupId

String

Yes

No

The ID of the scaling group.

None.

DefaultResult

String

No

Yes

The action that Auto Scaling performs for the scaling group when the lifecycle hook times out.

If multiple lifecycle hooks are triggered during a `scale-in` activity of the scaling group and a lifecycle hook configured with `DefaultResult=ABANDON` times out, the remaining lifecycle hooks within the same scaling group also time out. In other cases, Auto Scaling performs the action only after all lifecycle hooks time out. The action varies based on the DefaultResult value that you specify for the lifecycle hook that times out at the most recent point in time.

Valid values:

-   CONTINUE (default): Auto Scaling responds to a scale-in or scale-out activity.
    
-   ABANDON: Auto Scaling releases ECS instances that are created during scale-outs, or removes ECS instances from the scaling group during scale-ins.
    

LifecycleTransition

String

Yes

Yes

The type of the scaling activity to which you want to apply the lifecycle hook.

Valid values:

-   SCALE\_OUT: scale-out activity
    
-   SCALE\_IN: scale-in activity
    

## Return values

Fn::GetAtt

-   LifecycleHookId: the ID of the lifecycle hook.
    
-   ScalingGroupId: the ID of the scaling group.
    

## Examples

-   `YAML` format
    
    ```
    ROSTemplateFormatVersion: '2015-09-01'
    Parameters:
      ScalingGroupId:
        Type: String
        AssociationProperty: ALIYUN::ESS::AutoScalingGroup::AutoScalingGroupId
    Resources:
      LifecycleHook:
        Type: ALIYUN::ESS::LifecycleHook
        Properties:
          LifecycleHookName: Demo997
          NotificationArn:
            Fn::Join:
              - ''
              - - 'acs:ess:'
                - Ref: ALIYUN::Region
                - ':'
                - Ref: ALIYUN::TenantId
                - ':'
                - oos/ACS-ESS-LifeCycleRunCommand
          ScalingGroupId:
            Ref: ScalingGroupId
          LifecycleTransition: SCALE_OUT
          HeartbeatTimeout: 30
          NotificationMetadata:
            Fn::Join:
              - ''
              - - |-
                  {
                    "commandContent": "python /home/test.py",
                    "commandType": "RunShellScript"
    Outputs:
      LifecycleHookId:
        Description: The lifecycle hook ID
        Value:
          Fn::GetAtt:
            - LifecycleHook
            - LifecycleHookId
    ```
    
-   `JSON` format
    
    ```
    {
      "ROSTemplateFormatVersion": "2015-09-01",
      "Parameters": {
        "ScalingGroupId": {
          "Type": "String",
          "AssociationProperty": "ALIYUN::ESS::AutoScalingGroup::AutoScalingGroupId"
        }
      },
      "Resources": {
        "LifecycleHook": {
          "Type": "ALIYUN::ESS::LifecycleHook",
          "Properties": {
            "LifecycleHookName": "Demo997",
            "NotificationArn": {
              "Fn::Join": [
                "",
                [
                  "acs:ess:",
                  {
                    "Ref": "ALIYUN::Region"
                  },
                  ":",
                  {
                    "Ref": "ALIYUN::TenantId"
                  },
                  ":",
                  "oos/ACS-ESS-LifeCycleRunCommand"
                ]
              ]
            },
            "ScalingGroupId": {
              "Ref": "ScalingGroupId"
            },
            "LifecycleTransition": "SCALE_OUT",
            "HeartbeatTimeout": 30,
            "NotificationMetadata": {
              "Fn::Join": [
                "",
                [
                  "{\n  \"commandContent\": \"python /home/test.py\",\n  \"commandType\": \"RunShellScript\""
                ]
              ]
            }
          }
        }
      },
      "Outputs": {
        "LifecycleHookId": {
          "Description": "The lifecycle hook ID",
          "Value": {
            "Fn::GetAtt": [
              "LifecycleHook",
              "LifecycleHookId"
            ]
          }
        }
      }
    }
    ```

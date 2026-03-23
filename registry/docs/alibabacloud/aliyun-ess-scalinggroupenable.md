ALIYUN::ESS::ScalingGroupEnable is used to enable a scaling group.

## Syntax

```
{
  "Type": "ALIYUN::ESS::ScalingGroupEnable",
  "Properties": {
    "ScalingConfigurationId": String,
    "ScalingRuleArisExecuteVersion": Integer,
    "ScalingRuleAris": List,
    "ScalingGroupId": String,
    "RemoveInstanceIds": List,
    "InstanceIds": List,
    "DetachOptions": Map,
    "AttachOptions": Map
  }
}
```

## Properties

Property

Type

Required

Editable

Description

Constraint

ScalingGroupId

String

Yes

No

The ID of the scaling group.

None.

ScalingConfigurationId

String

No

No

The ID of the scaling configuration that you want to enable in the scaling group.

None.

InstanceIds

List

No

Yes

The IDs of the Elastic Compute Service (ECS) instances that you want to add to the scaling group after the scaling group is enabled.

You can specify up to 20 instance IDs.

ScalingRuleArisExecuteVersion

Integer

No

Yes

The version of the identifier for the scaling rule that you want to execute. If you change the value of this property, the system executes all scaling rules that are specified by the ScalingRuleAris property once.

Minimum value: 0.

ScalingRuleAris

List

No

Yes

The list of unique identifiers of the scaling rules. The unique identifiers of inactive scaling rules are ignored in the query result and no error is reported.

You can specify up to 10 identifiers.

RemoveInstanceIds

List

No

Yes

The IDs of the ECS instances that you want to remove from the scaling group.

You can specify up to 1,000 instance IDs.

DetachOptions

Map

No

Yes

The configuration items of the instances that you want to remove from the scaling group.

For more information, see [DetachOptions properties](#section-fxh-gco-0v2).

AttachOptions

Map

No

Yes

The configuration items of the instances that you want to add to the scaling group.

For more information, see [AttachOptions properties](#section-26w-dof-zje).

## AttachOptions syntax

```
{
    "LifecycleHook": Boolean,
    "Entrusted": Boolean
}
```

## AttachOptions properties

Property

Type

Required

Editable

Description

Constraint

LifecycleHook

Boolean

No

Yes

Specifies whether to trigger a lifecycle hook for a scale-out activity.

Default value: false. Valid values:

-   true
-   false

Entrusted

Boolean

No

Yes

Specifies whether the scaling group manages the lifecycles of instances that are manually added to the scaling group.

Default value: false. Valid values:

-   true: The scaling group manages the lifecycles of instances that are manually added and instances that are automatically created in the same manner.
    
    If you call the DetachInstances operation to remove the instances from the scaling group, the instances are not released. In other cases, the instances are released when the instances are removed from the scaling group.
    
-   false: The scaling group does not manage the lifecycles of instances that are manually added. When the instances are removed from the scaling group, the instances are not released.

**Note** This property does not take effect for subscription instances.

## DetachOptions syntax

```
{
    "LifecycleHook": Boolean,
    "DecreaseDesiredCapacity": Boolean,
    "DetachOption": "String"
}
```

## DetachOptions properties

Property

Type

Required

Editable

Description

Constraint

LifecycleHook

Boolean

No

Yes

Specifies whether to trigger a lifecycle hook for a scale-in activity.

Default value: false. Valid values:

-   true
-   false

DecreaseDesiredCapacity

Boolean

No

Yes

Specifies whether to change the expected number of instances in the scaling group.

Default value: true. Valid values:

-   true: After a specific number of ECS instances or elastic container instances are removed from the scaling group, the expected number of instances in the scaling group decreases.
-   false: After a specific number of ECS instances or elastic container instances are removed from the scaling group, the expected number of instances in the scaling group remains unchanged.

DetachOption

String

No

Yes

Specifies whether to remove the ECS instances and elastic container instances from the default server group and vServer groups of the Server Load Balancer (SLB) instance that is associated with the scaling group, and whether to remove the IP addresses of these instances from the whitelist that is used to manage access to the ApsaraDB RDS instance that is associated with the scaling group.

Set the value to both. In this case, the ECS instances and elastic container instances are removed from the default server group and vServer groups of the associated SLB instance, and the IP addresses of these instances are removed from the relevant whitelist.

## Return values

Fn::GetAtt

-   LifecycleState: the state of the scaling group.
-   ScalingInstances: the instances that are automatically created in the scaling group.
-   ScalingGroupId: the ID of the scaling group.
-   ScalingRuleArisExecuteResultInstancesRemoved: the instances that are removed from the scaling group by executing the scaling rules specified by the ScalingRuleAris property.
-   ScalingRuleArisExecuteResultNumberOfAddedInstances: the number of instances that are added to the scaling group by executing the scaling rules specified by the ScalingRuleAris property.
-   ScalingInstanceDetails: details of the instances for which scaling activities are triggered.
-   ScalingRuleArisExecuteErrorInfo: the error information about the execution of the scaling rules specified by the ScalingRuleAris property.
-   ScalingRuleArisExecuteResultInstancesAdded: the instances that are added to the scaling group by executing the scaling rules specified by the ScalingRuleAris property.

## Examples

-   `YAML` format
    
    ```
    ROSTemplateFormatVersion: '2015-09-01'
    Parameters:
      ECSInstanceIds:
        Type: CommaDelimitedList
        AssociationProperty: ALIYUN::ECS::Instance::InstanceId
      AutoScalingGroupId:
        Type: String
        AssociationProperty: ALIYUN::ESS::AutoScalingGroup::AutoScalingGroupId
      ScalingConfigurationId:
        Type: String
        AssociationProperty: ALIYUN::ESS::ScalingConfiguration::ScalingConfigurationId
    Resources:
      ScalingGroupEnable:
        Type: ALIYUN::ESS::ScalingGroupEnable
        Properties:
          ScalingGroupId:
            Ref: AutoScalingGroupId
          ScalingConfigurationId:
            Ref: ScalingConfigurationId
          InstanceIds:
            Ref: InstanceIds
    Outputs:
      ScalingGroupEnable:
        Value:
          Fn::GetAtt:
            - ScalingGroupEnable
            - LifecycleState
                        
    ```
    
-   `JSON` format
    
    ```
    {
      "ROSTemplateFormatVersion": "2015-09-01",
      "Parameters": {
        "ECSInstanceIds": {
          "Type": "CommaDelimitedList",
          "AssociationProperty": "ALIYUN::ECS::Instance::InstanceId"
        },
        "AutoScalingGroupId": {
          "Type": "String",
          "AssociationProperty": "ALIYUN::ESS::AutoScalingGroup::AutoScalingGroupId"
        },
        "ScalingConfigurationId": {
          "Type": "String",
          "AssociationProperty": "ALIYUN::ESS::ScalingConfiguration::ScalingConfigurationId"
        }
      },
      "Resources": {
        "ScalingGroupEnable": {
          "Type": "ALIYUN::ESS::ScalingGroupEnable",
          "Properties": {
            "ScalingGroupId": {
              "Ref": "AutoScalingGroupId"
            },
            "ScalingConfigurationId": {
              "Ref": "ScalingConfigurationId"
            },
            "InstanceIds": {
              "Ref": "InstanceIds"
            }
          }
        }
      },
      "Outputs": {
        "ScalingGroupEnable": {
          "Value": {
            "Fn::GetAtt": [
              "ScalingGroupEnable",
              "LifecycleState"
            ]
          }
        }
      }
    }
    ```

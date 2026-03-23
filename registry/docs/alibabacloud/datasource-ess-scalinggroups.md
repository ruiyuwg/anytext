DATASOURCE::ESS::ScalingGroups is used to query scaling groups.

## Syntax

```
{
  "Type": "DATASOURCE::ESS::ScalingGroups",
  "Properties": {
    "ScalingGroupNames": List,
    "GroupType": String,
    "ScalingGroupIds": List,
    "RefreshOptions": String
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

ScalingGroupNames

List

No

Yes

The names of the scaling groups.

For the names of inactive scaling groups, the system does not display the names in the query result or report an error.

**Note**

You can query up to 20 scaling group names in a request.

GroupType

String

No

Yes

The type of the instances that are managed in the scaling group.

Valid values:

-   ECS (default): Elastic Compute Service (ECS) instances
    
-   ECI: elastic container instances
    

ScalingGroupIds

List

No

Yes

The IDs of the scaling groups.

For the IDs of inactive scaling groups, the system does not display the IDs in the query result or report an error.

**Note**

You can query up to 20 scaling group IDs in a request.

RefreshOptions

String

No

Yes

The refresh policy for data source resources when the stack is updated.

Valid values:

-   Never (default): does not refresh data source resources when the stack is updated.
    
-   Always: refreshes data source resources when the stack is updated.
    

## Return values (Fn::GetAtt)

-   ScalingGroups: details of the scaling groups.
    
-   ScalingGroupIds: the IDs of the scaling groups.
    

**Property**

**Type**

**Description**

**Constraint**

ScalingGroupIds

List

The IDs of the scaling groups.

None.

ScalingGroups

List

Details of the scaling groups.

None.

DesiredCapacity

Number

The expected number of ECS instances in the scaling group.

Auto Scaling automatically maintains the expected number of ECS instances in the scaling group.

LifecycleState

String

The status of the scaling group.

Valid values:

-   Active: The scaling group is active.
    
    Active scaling groups can receive requests to execute scaling rules and trigger scaling activities.
    
-   Inactive: The scaling group is inactive.
    

TotalInstanceCount

Number

The total number of ECS instances in the scaling group.

None.

Weighted

Boolean

Indicates whether the weight of an instance type is specified.

Valid values:

-   true
    
-   false
    

RemovalPolicies

List

The policies based on which ECS instances are removed from the scaling group.

Valid values:

-   OldestInstance: ECS instances that are created at the earliest point in time are removed.
    
-   NewestInstance: ECS instances that are created at the most recent point in time are removed.
    
-   OldestScalingConfiguration: ECS instances that are created based on the earliest scaling configuration are removed.
    

PendingWaitCapacity

Number

The number of ECS instances that are pending to be added to the scaling group.

None.

TotalCapacity

Number

The total weighted capacity of all ECS instances in the scaling group if Weighted is specified, or the total number of all ECS instances in the scaling group if Weighted is not specified.

None.

RemovingWaitCapacity

Number

The number of ECS instances that are pending to be removed from the scaling group.

None.

IsElasticStrengthInAlarm

Boolean

Indicates whether alerts are triggered.

None.

ProtectedCapacity

Number

The number of ECS instances that are being protected in the scaling group.

None.

StandbyCapacity

Number

The number of instances that are standby in the scaling group.

None.

ScalingPolicy

String

The reclaim mode of the scaling group.

Valid values:

-   recycle: economical mode
    
-   release: release mode
    

**Note**

For more information about how to remove instances, see [RemoveInstances](/help/en/auto-scaling/developer-reference/api-removeinstances#doc-api-Ess-RemoveInstances).

SuspendedProcesses

List

The suspended processes.

Valid values:

-   ScaleIn: scale-in process
    
-   ScaleOut: scale-out process
    
-   HealthCheck: health check process
    
-   AlarmNotification: event-triggered task process
    
-   ScheduledAction: scheduled task process
    

RemovingCapacity

Number

The number of ECS instances that are being removed from the scaling group.

None.

VSwitchIds

List

The IDs of the vSwitches that are associated with the scaling group.

If VSwitchIds is specified, VSwitchId is ignored.

ScalingGroupId

String

The ID of the scaling group.

None.

PendingCapacity

Number

The number of ECS instances that are being added to the scaling group and still being configured.

None.

VSwitchId

String

The ID of the vSwitch that is associated with the scaling group.

None.

LoadBalancerIds

List

The IDs of the Server Load Balancer (SLB) instances that are associated with the scaling group.

None.

GroupDeletionProtection

Boolean

Indicates whether the deletion protection feature is enabled for the scaling group.

Valid values:

-   true: The deletion protection feature is enabled for the scaling group. In this case, the scaling group cannot be deleted.
    
-   false: The deletion protection feature is disabled for the scaling group.
    

MaxSize

Number

The upper limit on the number of ECS instances in the scaling group.

None.

ScalingGroupName

String

The name of the scaling group.

None.

MinSize

Number

The lower limit on the number of ECS instances in the scaling group.

None.

ActiveCapacity

Number

The number of ECS instances that are added to the scaling group and run as expected.

None.

DefaultCooldown

Number

The default cooldown period of the scaling group.

During the cooldown period, Auto Scaling executes only the scaling activities that are triggered by CloudMonitor event-triggered tasks in the scaling group.

VpcId

String

The ID of the virtual private cloud (VPC) to which the scaling group belongs.

None.

GroupType

String

The type of the instances that are managed in the scaling group.

Valid values:

-   ECS (default): ECS instances
    
-   ECI: elastic container instances
    

SystemSuspended

Boolean

Indicates whether Auto Scaling stops executing scaling activities in the scaling group.

Valid values:

-   true: Auto Scaling stops executing scaling activities in the scaling group. This indicates that consecutive scaling activities failed for more than seven days in the scaling group.
    
    You must modify the scaling group or scaling configuration to resume the execution of scaling activities.
    
-   false: Auto Scaling executes scaling activities in the scaling group.
    

CreationTime

String

The time when the scaling group was created.

None.

MultiAZPolicy

String

The scaling policy for ECS instances in the multi-zone scaling group.

Valid values:

-   PRIORITY: Auto Scaling scales ECS instances based on the value of VSwitchIds.
    
    If Auto Scaling fails to scale out ECS instances in the zone where the vSwitch of the highest priority resides, Auto Scaling scales out ECS instances in the zone where the vSwitch of the next highest priority resides.
    
-   COST\_OPTIMIZED: Auto Scaling scales out ECS instances based on the vCPU unit price in ascending order.
    
    If multiple preemptible instance types are specified in the scaling configuration, Auto Scaling preferentially creates preemptible instances. If preemptible instances cannot be created due to insufficient inventory, you can use CompensateWithOnDemand to specify whether to automatically create pay-as-you-go instances.
    
    **Note**
    
    COST\_OPTIMIZED is valid only when multiple instance types are specified or preemptible instances are used for the scaling configuration.
    
-   BALANCE: Auto Scaling evenly distributes ECS instances across the zones specified for the scaling group.
    
    If ECS instances cannot be evenly distributed across zones due to insufficient inventory, you can call the [RebalanceInstances](/help/en/auto-scaling/developer-reference/api-rebalanceinstances#doc-api-Ess-RebalanceInstances) operation to balance the distribution.
    

StoppedCapacity

Number

The number of instances that are in the economical mode in the scaling group.

None.

DBInstanceIds

List

The IDs of the ApsaraDB RDS instances that are associated with the scaling group.

Example:`[ "rm-bp15556qzebg1****", "rm-shj1829939342****"]`.

HealthCheckType

String

The health check type of the scaling group.

Valid values:

-   NONE: No health check is performed.
    
-   ECS: Health checks are performed on ECS instances in the scaling group.
    

## Examples

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "GroupType": {
      "Type": "String",
      "Description": "The type of instances that are managed by the scaling group. Valid values:\nECS: the Elastic Compute Service (ECS) instances\nECI: the elastic container instances\nDefault value: ECS.",
      "Default": "ECS"
    }
  },
  "Resources": {
    "ExtensionDataSource": {
      "Type": "DATASOURCE::ESS::ScalingGroups",
      "Properties": {
        "GroupType": {
          "Ref": "GroupType"
        }
      }
    }
  },
  "Outputs": {
    "ScalingGroups": {
      "Description": "The list of scaling groups.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ScalingGroups"
        ]
      }
    },
    "ScalingGroupIds": {
      "Description": "The list of scaling group IDs.",
      "Value": {
        "Fn::GetAtt": [
          "ExtensionDataSource",
          "ScalingGroupIds"
        ]
      }
    }
  }
}
```

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  GroupType:
    Type: String
    Description: |-
      The type of instances that are managed by the scaling group. Valid values:
      ECS: the Elastic Compute Service (ECS) instances
      ECI: the elastic container instances
      Default value: ECS.
    Default: ECS
Resources:
  ExtensionDataSource:
    Type: DATASOURCE::ESS::ScalingGroups
    Properties:
      GroupType:
        Ref: GroupType
Outputs:
  ScalingGroups:
    Description: The list of scaling groups.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ScalingGroups
  ScalingGroupIds:
    Description: The list of scaling group IDs.
    Value:
      Fn::GetAtt:
        - ExtensionDataSource
        - ScalingGroupIds
                    
```

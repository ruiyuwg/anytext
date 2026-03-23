You can use the ALIYUN::ESS::ScalingGroup resource to create a scaling group. A scaling group is a collection of ECS instances that are used for the same application scenario. A scaling group does not take effect immediately after it is created. You must use ALIYUN::ESS::ScalingGroupEnable to enable the scaling group. After the scaling group is enabled, it can trigger scaling activities and execute scaling rules.

## Syntax

```
{
  "Type": "ALIYUN::ESS::ScalingGroup",
  "Properties": {
    "MultiAZPolicy": String,
    "DesiredCapacity": Integer,
    "NotificationConfigurations": List,
    "ProtectedInstances": List,
    "LaunchTemplateId": String,
    "LaunchTemplateVersion": String,
    "ScalingGroupName": String,
    "VSwitchIds": List,
    "DefaultCooldown": Integer,
    "MinSize": Integer,
    "GroupDeletionProtection": Boolean,
    "MaxSize": Integer,
    "InstanceId": String,
    "VSwitchId": String,
    "LoadBalancerIds": List,
    "StandbyInstances": List,
    "RemovalPolicys": List,
    "HealthCheckType": String,
    "DBInstanceIds": List,
    "Tags": List,
    "OnDemandPercentageAboveBaseCapacity": Integer,
    "CompensateWithOnDemand": Boolean,
    "ContainerGroupId": String,
    "ScalingPolicy": String,
    "SpotInstanceRemedy": Boolean,
    "SpotInstancePools": Integer,
    "OnDemandBaseCapacity": Integer,
    "GroupType": String,
    "LaunchTemplateOverrides": List,
    "AllocationStrategy": String,
    "AzBalance": Boolean,
    "MaxInstanceLifetime": Integer,
    "CustomPolicyARN": String,
    "SpotAllocationStrategy": String,
    "HealthCheckTypes": List,
    "ServerGroups": List,
    "ResourceGroupId": String
  }
}
```

## Properties

**Property name**

**Type**

**Required**

**Updatable**

**Description**

**Constraints**

MinSize

Integer

Yes

Yes

The minimum number of ECS instances in the scaling group.

Valid values: 0 to 1000.

If the number of ECS instances in the scaling group is less than the MinSize value, Auto Scaling automatically creates ECS instances.

MaxSize

Integer

Yes

Yes

The maximum number of ECS instances in the scaling group.

Valid values: 0 to 1000.

If the number of ECS instances in the scaling group is greater than the MaxSize value, Auto Scaling automatically removes ECS instances.

ScalingGroupName

String

No

Yes

The display name of the scaling group.

The name must be 2 to 64 characters in length. It must start with a digit, a letter, or a Chinese character. It can contain letters, Chinese characters, digits, underscores (\_), hyphens (-), and periods (.).

The name must be unique within the same region and under the same Alibaba Cloud account.

Default value: the ID of the scaling group.

LaunchTemplateId

String

No

Yes

The ID of the launch template. The scaling group uses the launch template to obtain configuration information for instance creation.

None

LaunchTemplateVersion

String

No

Yes

The version of the ECS launch template.

Valid values:

-   A fixed template version number.
    
-   Default: The default version of the template is always used.
    
-   Latest: The latest version of the template is always used.
    

RemovalPolicys

List

No

Yes

The policies for removing ECS instances from the scaling group.

Valid values:

-   OldestInstance (Default): Removes the ECS instance that was added to the scaling group at the earliest point in time.
    
-   NewestInstance: Removes the ECS instance that was added to the scaling group at the latest point in time.
    
-   OldestScalingConfiguration (Default): Removes ECS instances that are created based on the earliest scaling configuration.
    

VSwitchId

String

No

Yes

The ID of the vSwitch.

None

LoadBalancerIds

List

No

Yes

The IDs of the SLB instances.

You can specify a JSON array that contains the IDs of multiple SLB instances. You can specify up to five IDs. Separate the IDs with commas (,).

DefaultCooldown

Integer

No

Yes

The cooldown time after a scaling activity is complete.

Valid values: 0 to 86,400.

Unit: seconds.

Default value: 300.

During the cooldown time, the scaling group does not execute other scaling activities. This is effective only for scaling activities triggered by event-triggered tasks that are created in CloudMonitor.

DBInstanceIds

List

No

Yes

The IDs of the ApsaraDB RDS instances.

You can specify a JSON array that contains the IDs of multiple RDS instances. You can specify up to eight IDs. Separate the IDs with commas (,).

VSwitchIds

List

No

Yes

The IDs of multiple vSwitches.

You can specify up to five vSwitch IDs. If you specify VSwitchIds, the VSwitchId parameter is ignored. The vSwitches are prioritized in the order they are specified. If an ECS instance cannot be created in the zone where a higher-priority vSwitch is located, the next-priority vSwitch is automatically used.

MultiAZPolicy

String

No

Yes

The scaling policy for ECS instances in a multi-zone scaling group.

Valid values:

-   PRIORITY: Scales instances based on the vSwitches you define. If an ECS instance cannot be created in the zone where a higher-priority vSwitch is located, the next-priority vSwitch is automatically used.
    
-   BALANCE: Evenly distributes ECS instances across the zones specified for the scaling group.
    
-   COST\_OPTIMIZED: Attempts to create instances in ascending order of vCPU unit price. If multiple instance types are specified with a spot billing method in the scaling configuration, the system prioritizes the creation of the corresponding spot instances. If spot instances cannot be created due to reasons such as insufficient inventory, the system automatically attempts to create pay-as-you-go instances.
    

NotificationConfigurations

List

No

Yes

A list of configurations for event and resource change notifications.

For more information, see [NotificationConfigurations properties](#section-ay8-o4w-pba).

ProtectedInstances

List

No

Yes

The number of protected ECS instances in the scaling group.

You can specify up to 1,000 instances.

StandbyInstances

List

No

Yes

The number of standby ECS instances in the scaling group.

You can specify up to 1,000 instances.

HealthCheckTypes

List

No

Yes

The list of health check types for the scaling group.

Valid values:

-   NONE: No health checks are performed.
    
-   ECS: Performs health checks on instances in the scaling group. This value is used to enable instance health checks for both ECS and ECI scaling groups.
    
-   LOAD\_BALANCER: Determines the health status of an instance based on the health check results of the load balancer. CLB is not supported.
    

HealthCheckType

String

No

Yes

The health check type.

Valid values:

-   ECS
    
-   NONE
    

GroupDeletionProtection

Boolean

No

Yes

Specifies whether to enable deletion protection for the scaling group.

Valid values:

-   true: Enables deletion protection. The scaling group cannot be deleted.
    
-   false (Default): Disables deletion protection.
    

DesiredCapacity

Integer

No

Yes

The expected number of ECS instances in the scaling group. Auto Scaling automatically maintains the number of ECS instances at this value.

The value must be greater than or equal to MinSize and less than or equal to MaxSize.

InstanceId

String

No

No

The ID of an ECS instance. When you create a scaling group, the system obtains the required configuration information from the specified instance and automatically creates a scaling configuration.

None

Tags

List

No

Yes

The tags.

You can add up to 20 tags.

For more information, see [Tags properties](#section-gwz-9kl-6az).

OnDemandPercentageAboveBaseCapacity

Integer

No

Yes

The percentage of on-demand instances among the instances that exceed the base capacity.

After the scaling group meets the minimum number of on-demand instances (OnDemandBaseCapacity), this parameter specifies the percentage of on-demand instances among the excess instances.

Valid values: 0 to 100.

CompensateWithOnDemand

Boolean

No

Yes

Specifies whether to automatically create on-demand instances to meet the required number of ECS instances.

This parameter takes effect only when MultiAZPolicy is set to COST\_OPTIMIZED. It specifies whether to automatically create on-demand instances to meet the required number of ECS instances if sufficient spot instances cannot be created due to reasons such as price or inventory.

Valid values:

-   true (Default): Yes.
    
-   false: No.
    

ContainerGroupId

String

No

No

The ID of the ECI instance.

None

ScalingPolicy

String

No

No

The reclamation mode of the scaling group.

Valid values:

-   recycle: The instances are stopped.
    
-   release: The instances are released.
    

The ScalingPolicy parameter specifies the reclamation mode of the scaling group. However, the specific action taken when an instance is removed from the scaling group is determined by the RemovePolicy parameter of the RemoveInstances operation. For more information, see [RemoveInstances](/help/en/auto-scaling/developer-reference/api-removeinstances#doc-api-Ess-RemoveInstances).

SpotInstanceRemedy

Boolean

No

Yes

Specifies whether to enable supplemental spot instances.

Valid values:

-   true: Enables supplemental spot instances.
    
    When enabled, if the system receives a message that a spot instance is about to be reclaimed, the scaling group attempts to create a new instance to replace the reclaimed spot instance.
    
-   false: Disables supplemental spot instances.
    

SpotInstancePools

Integer

No

Yes

The number of available instance types.

The scaling group creates spot instances in a balanced manner across multiple instance types with the lowest cost.

Valid values: 1 to 10.

OnDemandBaseCapacity

Integer

No

Yes

The minimum number of on-demand instances required by the scaling group.

Valid values: 0 to 1000.

If the number of on-demand instances is less than this value, the system prioritizes the creation of on-demand instances.

GroupType

String

No

No

The type of instances managed by the scaling group.

Valid values:

-   ECS (Default): The scaling group manages ECS instances.
    
-   ECI: The scaling group manages ECI instances.
    

LaunchTemplateOverrides

List

No

Yes

The information about the instance types that extends the launch template.

None

AllocationStrategy

String

No

Yes

The capacity allocation policy.

Determines how the scaling group selects available instance types to meet the capacity requirement. The capacity allocation policy applies to both On-Demand and preemptible capacity. This policy is effective only when the `MultiAZPolicy` parameter is set to `COMPOSABLE`.

Valid values:

-   priority (Default): Creates instances in the order of the configured instance types.
    
-   lowestPrice: Creates instances in ascending order of the vCPU unit price of the instance types.
    

AzBalance

Boolean

No

Yes

Specifies whether to evenly distribute the capacity of the scaling group across multiple zones.

This parameter takes effect only when the `MultiAZPolicy` parameter is set to `COMPOSABLE`.

Valid values:

-   true: The capacity of the scaling group is evenly distributed across multiple zones.
    
-   false (Default): The capacity of the scaling group is not evenly distributed across multiple zones.
    

MaxInstanceLifetime

Integer

No

Yes

The maximum lifetime of an instance in the scaling group.

Unit: seconds.

Valid values: 86400 to `Integer.maxValue`.

Default value: null.

CustomPolicyARN

String

No

Yes

The ARN of the custom scale-in policy function.

This parameter is effective only when the first removal policy in RemovalPolicies is set to CustomPolicy.

SpotAllocationStrategy

String

No

Yes

The allocation policy for spot capacity.

Use this parameter to separately specify the distribution strategy for the spot capacity (effective only when the `MultiAZPolicy` parameter is set to `COMPOSABLE`).

Valid values:

-   priority (Default): Creates instances in the order of the configured instance types.
    
-   lowestPrice: Creates instances in ascending order of the `vCPU` unit price of the instance types.
    

ServerGroups

List

No

No

The configuration of the Server Load Balancer server groups.

For more information, see [ServerGroups properties](#75cd35dd87t0k).

ResourceGroupId

String

No

Yes

The ID of the resource group.

None

## ServerGroups syntax

```
"ServerGroups": [
  {
    "Type": String,
    "ServerGroupId": String,
    "Weight": Number,
    "Port": Number
  }
]  
```

## ServerGroups properties

**Property name**

**Type**

**Required**

**Updatable**

**Description**

**Constraints**

Type

String

Yes

No

The type of the Server Load Balancer server group.

Valid values:

-   ALB: Application Load Balancer.
    
-   NLB: Network Load Balancer.
    

ServerGroupId

String

Yes

No

The ID of the Server Load Balancer server group.

None

Weight

Number

Yes

No

The weight of the ECS or ECI instance as a backend server.

Valid values: 0 to 100.

A higher weight indicates that the ECS or ECI instance is allocated more access requests. If the weight is 0, the ECS or ECI instance does not receive access requests.

Port

Number

Yes

No

The port number used by the ECS or ECI instance.

Valid values: 1 to 65535.

## NotificationConfigurations syntax

```
"NotificationConfigurations": [
  {
    "NotificationArn": String,
    "NotificationTypes": List
  }
]  
```

## NotificationConfigurations properties

**Property name**

**Type**

**Required**

**Updatable**

**Description**

**Constraints**

NotificationArn

String

Yes

No

The identifier of the notification recipient for lifecycle hooks. It supports Simple Message Queue (formerly MNS) queues or topics.

Valid values:

-   An SMQ queue is specified in the following format: `acs:ess:{region}:{account-id}:queue/{queuename}`.
    
-   The SMQ subject has the format `acs:ess:{region}:{account-id}:topic/{topicname}`.
    

NotificationTypes

List

Yes

No

The types of notifications for Auto Scaling events and resource changes.

None

## Tags syntax

```
"Tags": [
  {
    "Key": String,
    "Value": String
  }
]  
```

## Tags properties

**Property name**

**Type**

**Required**

**Updatable**

**Description**

**Constraints**

Key

String

Yes

No

The tag key.

The key must be 1 to 128 characters in length. It cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.

Value

String

No

No

The tag value.

The value can be 0 to 128 characters in length. It cannot start with `aliyun` or `acs:` and cannot contain `http://` or `https://`.

## LaunchTemplateOverrides syntax

```
"LaunchTemplateOverrides": [
  {
    "InstanceType": String,
    "WeightedCapacity": Integer,
    "SpotPriceLimit": Number
  }
]  
```

## LaunchTemplateOverrides properties

**Property name**

**Type**

**Required**

**Updatable**

**Description**

**Constraints**

InstanceType

String

No

Yes

The ECS instance type.

If you want the scaling group to scale based on instance type capacity, specify both this parameter and `LaunchTemplateOverrides.WeightedCapacity`.

This parameter specifies the instance type and overwrites the instance type in the launch template.

**Note**

This parameter is effective only when a launch template is specified by the LaunchTemplateId parameter.

WeightedCapacity

Integer

No

Yes

The weight of the instance type.

If you want the scaling group to scale based on instance type capacity, specify `LaunchTemplateOverrides.InstanceType` and then specify this parameter.

This parameter specifies the weight of the instance type, which represents the capacity of a single instance of that type in the scaling group. A higher weight means that fewer instances of this type are needed to meet the expected capacity.

You can set different weights for different instance types based on their performance metrics, such as the number of `vCPUs` and memory size.

For example:

-   Current capacity: 0.
    
-   Expected capacity: 6.
    
-   Capacity of ecs.c5.xlarge: 4.
    

To meet the expected capacity, the scaling group will scale out two `ecs.c5.xlarge` instances.

Valid values: 1 to 500.

**Note**

During a scale-out, the capacity of the scaling group cannot exceed the sum of the maximum capacity (MaxSize) and the maximum weight of an instance type.

SpotPriceLimit

Number

No

Yes

The maximum price for a spot instance.

This parameter specifies the maximum price for a spot instance of the instance type that is specified by `LaunchTemplateOverrides.InstanceType`.

**Note**

This parameter is effective only when a launch template is specified by the `LaunchTemplateId` parameter.

## Return value

Fn::GetAtt

-   ScalingGroupId: The ID of the scaling group.
    
-   ScalingGroupName: The name of the scaling group.
    
-   Arn: The Alibaba Cloud Resource Name (ARN).
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  VSwitch:
    AssociationProperty: ALIYUN::ECS::VSwitch::VSwitchId
    Type: String
    Label:
      zh-cn: VSwitch ID
      en: VSwitch ID
  LaunchTemplateId:
    AssociationProperty: ALIYUN::ECS::LaunchTemplate::LaunchTemplateId
    Type: String
Resources:
  ScalingGroup:
    Type: ALIYUN::ESS::ScalingGroup
    Properties:
      VSwitchId:
        Ref: VSwitch
      LaunchTemplateId:
        Ref: LaunchTemplateId
      MaxSize: 3
      ScalingGroupName: TestScalingGroup
      MinSize: 0
Outputs:
  ScalingGroupId:
    Description: The ID of the scaling group.
    Value:
      Fn::GetAtt:
        - ScalingGroup
        - ScalingGroupId
  ScalingGroupName:
    Description: The name of the scaling group.
    Value:
      Fn::GetAtt:
        - ScalingGroup
        - ScalingGroupName
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "VSwitch": {
      "AssociationProperty": "ALIYUN::ECS::VSwitch::VSwitchId",
      "Type": "String",
      "Label": {
        "zh-cn": "VSwitch ID",
        "en": "VSwitch ID"
      }
    },
    "LaunchTemplateId":{
      "AssociationProperty":"ALIYUN::ECS::LaunchTemplate::LaunchTemplateId",
      "Type":"String"
    }
  },
  "Resources": {
    "ScalingGroup": {
      "Type": "ALIYUN::ESS::ScalingGroup",
      "Properties": {
        "VSwitchId": {
          "Ref": "VSwitch"
        },
        "LaunchTemplateId": {
          "Ref": "LaunchTemplateId"
        },
        "MaxSize": 3,
        "ScalingGroupName": "TestScalingGroup",
        "MinSize": 0
      }
    }
  },
  "Outputs": {
    "ScalingGroupId": {
      "Description": "The ID of the scaling group.",
      "Value": {
        "Fn::GetAtt": [
          "ScalingGroup",
          "ScalingGroupId"
        ]
      }
    },
    "ScalingGroupName": {
      "Description": "The name of the scaling group.",
      "Value": {
        "Fn::GetAtt": [
          "ScalingGroup",
          "ScalingGroupName"
        ]
      }
    }
  }
}
```

If a scaling group has only one scaling configuration, and that configuration depends on other resources, set the DependsOn property for the scaling group in the template. This creates a dependency on the resources that the scaling configuration requires.

The ScalingGroup has a DependsOn dependency on the SecurityGroup because the ScalingConfiguration depends on the SecurityGroup resource.

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  VpcId:
    AssociationProperty: ALIYUN::ECS::VPC::VPCId
    Type: String
  VSwitchId:
    AssociationProperty: ALIYUN::ECS::VSwitch::VSwitchId
    Type: String
    AssociationPropertyMetadata:
      VpcId: ${VpcId}
Resources:
  ScalingGroupEnable:
    Type: ALIYUN::ESS::ScalingGroupEnable
    Properties:
      ScalingConfigurationId:
        Ref: ScalingConfiguration
      ScalingGroupId:
        Ref: ScalingGroup
      ScalingRuleArisExecuteVersion: 0
  SecurityGroup:
    Type: ALIYUN::ECS::SecurityGroup
    Properties:
      SecurityGroupName:
        Ref: ALIYUN::StackName
      VpcId:
        Ref: VpcId
      SecurityGroupIngress:
        - PortRange: '-1/-1'
          Priority: 1
          SourceCidrIp: 0.0.X.X/0
          IpProtocol: all
          NicType: internet
      SecurityGroupEgress:
        - PortRange: '-1/-1'
          Priority: 1
          IpProtocol: all
          DestCidrIp: 0.0.X.X/0
          NicType: internet
        - PortRange: '-1/-1'
          Priority: 1
          IpProtocol: all
          DestCidrIp: 0.0.X.X/0
          NicType: intranet
  ScalingConfiguration:
    Type: ALIYUN::ESS::ScalingConfiguration
    DependsOn: ScalingGroup
    Properties:
      InstanceType: ecs.g6e.large
      ImageId: centos_7_04_64_20G_alibase_201701015.vhd
      SystemDiskCategory: cloud_essd
      SystemDiskSize: 100
      ScalingConfigurationName:
        Ref: ALIYUN::StackName
      ScalingGroupId:
        Ref: ScalingGroup
      SecurityGroupId:
        Ref: SecurityGroup
  ScalingGroup:
    Type: ALIYUN::ESS::ScalingGroup
    DependsOn: SecurityGroup
    Properties:
      MaxSize: 3
      MinSize: 0
      DefaultCooldown: 15
      VSwitchId:
        Ref: VSwitchId
Outputs: {}
```

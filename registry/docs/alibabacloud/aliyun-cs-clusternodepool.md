The ALIYUN::CS::ClusterNodePool resource type creates a node pool for a cluster.

## Syntax

```
{
  "Type": "ALIYUN::CS::ClusterNodePool",
  "Properties": {
    "TeeConfig": Map,
    "ClusterId": String,
    "NodePoolInfo": Map,
    "KubernetesConfig": Map,
    "Count": Integer,
    "Management": Map,
    "AutoScaling": Map,
    "ScalingGroup": Map
  }
}
```

## Properties

**Property name**

**Type**

**Required**

**Update allowed**

**Description**

**Constraint**

ClusterId

String

Yes

No

The ID of the cluster.

You can call [DescribeClustersV1](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-query-information-about-all-clusters#doc-api-CS-DescribeClustersV1) to query the cluster ID.

ScalingGroup

Map

Yes

Yes

The scaling group configuration for the node pool.

You can call [DescribeClusterNodePools](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-query-node-pools#doc-api-CS-DescribeClusterNodePools) to query the scaling group configuration for the node pool.

For more information, see [ScalingGroup syntax](#section-dco-kpc-615) and [ScalingGroup properties](#section-bj0-q18-iy2).

AutoScaling

Map

No

No

The auto scaling configuration.

For more information, see [AutoScaling syntax](#section-27r-t71-h7f) and [AutoScaling properties](#section-7hd-6uw-seq).

Count

Integer

No

Yes

The number of nodes in the node pool.

None

KubernetesConfig

Map

No

Yes

Cluster configuration.

For more information, see [KubernetesConfig syntax](#section-lka-xzc-2qk) and [KubernetesConfig properties](#section-9sl-pcx-xjj).

Management

Map

No

No

The managed node pool configuration.

For more information, see [Management syntax](#section-023-z5v-7lr) and [Management properties](#section-jie-tw2-u6b).

NodePoolInfo

Map

No

No

The node pool configuration.

For more information, see [NodePoolInfo syntax](#section-yhf-82p-ex0) and [NodePoolInfo properties](#section-ebx-a4g-j9x).

TeeConfig

Map

No

No

The configuration for a Kubernetes cluster for confidential computing.

For more information, see [TeeConfig syntax](#section-8vt-7zi-r08) and [TeeConfig properties](#section-2ry-pv9-585).

## TeeConfig syntax

```
"TeeConfig": {
  "TeeEnable": Boolean
}
```

## TeeConfig properties

**Property name**

**Type**

**Required**

**Update allowed**

**Description**

**Constraint**

TeeEnable

Boolean

Yes

No

Specifies whether to enable a Kubernetes cluster for confidential computing.

Valid values:

-   true: Enable a Kubernetes cluster for confidential computing.
    
-   false (default): The Kubernetes cluster for confidential computing is not enabled.
    

## NodePoolInfo syntax

```
"NodePoolInfo": {
  "ResourceGroupId": String,
  "Name": String
}
```

## NodePoolInfo properties

**Property name**

**Type**

**Required**

**Update allowed**

**Description**

**Constraint**

Name

String

Yes

No

The name of the node pool.

None

ResourceGroupId

String

No

No

The ID of the resource group to which the node pool belongs.

None

## KubernetesConfig syntax

```
"KubernetesConfig": {
  "CpuPolicy": String,
  "Runtime": String,
  "CmsEnabled": Boolean,
  "UserData": String,
  "NodeNameMode": String,
  "RuntimeVersion": String,
  "Labels": List,
  "Unschedulable": Boolean,
  "Taints": List
}
```

## KubernetesConfig properties

**Property name**

**Type**

**Required**

**Update allowed**

**Description**

**Constraint**

Runtime

String

Yes

Yes

The name of the container runtime.

None

RuntimeVersion

String

Yes

Yes

The version of the container runtime.

None

CpuPolicy

String

No

Yes

The CPU management policy for nodes.

This property supports the following policies when the cluster version is 1.12.6 or later:

-   static: This policy grants enhanced CPU affinity and exclusivity to pods with specific resource characteristics on nodes.
    
-   none (default): Enables the existing default CPU affinity scheme.
    

CmsEnabled

Boolean

No

Yes

Specifies whether to install Cloud Monitor on ECS nodes.

After you install Cloud Monitor, you can view monitoring metrics for the created ECS instances in the Cloud Monitor console. We recommend that you enable this feature.

Valid values:

-   true: Install Cloud Monitor on ECS nodes.
    
-   false (default): Do not install Cloud Monitor on ECS nodes.
    

NodeNameMode

String

No

No

The custom node name.

A node name consists of three parts: prefix + substring of the node IP address + suffix.

-   The prefix and suffix can each contain one or more parts separated by periods (.). Each part can contain lowercase letters, digits, and hyphens (-). The first and last characters of the node name must be lowercase letters or digits.
    
-   The length of the IP address segment specifies the number of trailing digits to extract from the node IP address. Valid values: 5 to 12.
    

Labels

List

No

Yes

The labels for Kubernetes cluster nodes.

For more information, see [Labels syntax](#section-3ux-fp1-lju) and [Labels properties](#section-ymz-mjy-ak1).

UserData

String

No

Yes

The custom data for nodes.

None

Unschedulable

Boolean

No

Yes

Specifies whether to schedule newly added nodes.

Valid values:

-   true: Schedule new nodes. You can enable scheduling in the node list.
    
-   false (default): Set new nodes as unschedulable after scale-out.
    

Taints

List

No

No

The taint configuration.

For more information, see [Taints syntax](#section-v7h-0z3-6j1) and [Taints properties](#section-box-t9b-g4e).

## Labels syntax

```
"Labels": [
  {
    "Value": String,
    "Key": String
  }
]
```

## Labels properties

**Property name**

**Type**

**Required**

**Update allowed**

**Description**

**Constraint**

Value

String

Yes

Yes

The value of the tag.

None

Key

String

Yes

Yes

The key of the tag.

None

## Taints syntax

```
"Taints": [
  {
    "Value": String,
    "Effect": String,
    "Key": String
  }
]
```

## Taints properties

**Property name**

**Type**

**Required**

**Update allowed**

**Description**

**Constraint**

Value

String

Yes

No

The value of the taint.

None

Key

String

Yes

No

The name of the taint.

None

Effect

String

No

No

The scheduling policy.

Valid values:

-   NoSchedule (default): Pods cannot tolerate the taint. This effect applies only to the scheduling process. Existing pods are unaffected. Only newly scheduled pods are affected.
    
-   NoExecute: Pods cannot tolerate the taint. When the taint changes, pods are evicted.
    
-   PreferNoSchedule: A soft constraint. Existing pods on the node are unaffected.
    

## Management syntax

```
"Management": {
  "UpgradeConfig": Map,
  "AutoRepair": Boolean,
  "Enable": Boolean
}
```

## Management properties

**Property name**

**Type**

**Required**

**Update allowed**

**Description**

**Constraint**

Enable

Boolean

Yes

No

Specifies whether to enable the managed node pool.

Valid values:

-   true: Enable the managed node pool.
    
-   false (default): Disable the managed node pool.
    

AutoRepair

Boolean

No

No

Specifies whether to enable automatic repair.

This parameter takes effect only when Enable is set to true.

Valid values:

-   true: Enable automatic repair.
    
-   false (default): Disable automatic repair.
    

UpgradeConfig

Map

No

No

The configuration for automatic upgrades.

This property takes effect only when Enable is set to true.

For more information, see [UpgradeConfig syntax](#section-nwa-zrh-oum) and [UpgradeConfig properties](#section-528-uae-p2u).

## UpgradeConfig syntax

```
"UpgradeConfig": {
  "AutoUpgrade": Boolean,
  "SurgePercentage": Integer,
  "Surge": Integer,
  "MaxUnavailable": Integer
}
```

## UpgradeConfig properties

**Property name**

**Type**

**Required**

**Update allowed**

**Description**

**Constraint**

AutoUpgrade

Boolean

No

No

Specifies whether to enable automatic upgrades.

Valid values:

-   true: Enable automatic upgrades.
    
-   false (default): Disable automatic upgrades.
    

SurgePercentage

Integer

No

No

The percentage of extra nodes.

You can specify either SurgePercentage or Surge, but not both.

Surge

Integer

No

No

The number of extra nodes.

You can specify either SurgePercentage or Surge, but not both.

MaxUnavailable

Integer

No

No

The maximum number of unavailable nodes.

Valid values: 1 to 1000. Default value: 1.

## AutoScaling syntax

```
"AutoScaling": {
  "EipBandwidth": Integer,
  "Type": String,
  "IsBondEip": Boolean,
  "MinInstances": Integer,
  "Enable": Boolean,
  "MaxInstances": Integer,
  "EipInternetChargeType": String
}
```

## AutoScaling properties

**Property name**

**Type**

**Required**

**Update allowed**

**Description**

**Constraint**

Enable

Boolean

Yes

No

Specifies whether to enable auto scaling.

Valid values:

-   true: Enable auto scaling for the node pool.
    
-   false (default): Disable auto scaling. Other AutoScaling configuration parameters do not take effect when this value is specified.
    

EipBandwidth

Integer

No

No

The peak bandwidth of the EIP.

None

EipInternetChargeType

String

No

No

The billing method for the EIP.

Valid values:

-   PayByBandwidth (default): Pay by bandwidth.
    
-   PayByTraffic: Pay by traffic.
    

IsBondEip

Boolean

No

No

Specifies whether to bind an EIP.

Valid values:

-   true: Bind an EIP.
    
-   false (default): Do not bind an EIP.
    

MinInstances

Integer

No

No

The minimum number of instances in the scaling group.

None

MaxInstances

Integer

No

No

The maximum number of instances in the scaling group.

None

Type

String

No

No

The auto scaling type.

Valid values (by instance type):

-   cpu (default): General-purpose instance.
    
-   gpu: GPU-accelerated instance.
    
-   gpushare: Shared GPU instance.
    
-   spot: Spot instance.
    

## ScalingGroup syntax

```
"ScalingGroup": {
  "SpotInstanceRemedy": Boolean,
  "Platform": String,
  "DataDisks": List,
  "SystemDiskSize": Integer,
  "CompensateWithOnDemand": Boolean,
  "InstanceChargeType": String,
  "OnDemandPercentageAboveBaseCapacity": Integer,
  "AutoRenew": Boolean,
  "OnDemandBaseCapacity": Integer,
  "SystemDiskPerformanceLevel": String,
  "ImageId": String,
  "SpotPriceLimit": List,
  "InstanceTypes": List,
  "Tags": List,
  "SpotStrategy": String,
  "LoginPassword": String,
  "MultiAzPolicy": String,
  "AutoRenewPeriod": Integer,
  "ScalingPolicy": String,
  "KeyPair": String,
  "VSwitchIds": List,
  "SecurityGroupId": String,
  "SpotInstancePools": Integer,
  "Period": Integer,
  "InternetChargeType": String,
  "SystemDiskCategory": String,
  "InternetMaxBandwidthOut": Integer,
  "RdsInstances": List,
  "PeriodUnit": String,
  "ZoneIds": List,
  "SocEnabled": Boolean,
  "ImageType": String,
  "InstancePatterns": List,
  "SecurityHardeningOs": Boolean
}
```

## ScalingGroup properties

**Property name**

**Type**

**Required**

**Update allowed**

**Description**

**Constraint**

InstanceTypes

List

No

Yes

The instance types for spot instances.

None

SystemDiskSize

Integer

Yes

Yes

The size of the system disk for nodes.

Unit: GiB. Valid values: 40 to 500.

VSwitchIds

List

Yes

Yes

The IDs of vSwitches.

None

AutoRenew

Boolean

No

Yes

Specifies whether to enable auto renewal for nodes in the node pool.

This parameter takes effect only when InstanceChargeType is set to PrePaid.

Valid values:

-   true (default): Enable auto renewal.
    
-   false: Disable auto renewal.
    

AutoRenewPeriod

Integer

No

Yes

The auto renewal period for nodes in the node pool.

This parameter takes effect only when InstanceChargeType is set to PrePaid and AutoRenew is set to true. In this case, AutoRenewPeriod is required.

When PeriodUnit is set to Month, valid values are:

-   1 (default)
    
-   2
    
-   3
    
-   6
    
-   12
    

CompensateWithOnDemand

Boolean

No

Yes

When MultiAzPolicy is set to COST\_OPTIMIZED, specifies whether to automatically create on-demand instances if enough spot instances cannot be created due to price or inventory constraints.

Valid values:

-   true (default): Automatically create on-demand instances to meet the required number of ECS instances.
    
-   false: Do not automatically create on-demand instances to meet the required number of ECS instances.
    

DataDisks

List

No

Yes

The data disk configuration for nodes in the node pool.

For more information, see [DataDisks syntax](#section-9pi-m76-ay7) and [DataDisks properties](#section-uye-eib-iew).

InstanceChargeType

String

No

Yes

The billing method for nodes in the node pool.

Valid values:

-   PrePaid: Upfront payment.
    
-   PostPaid (default): Pay-as-you-go.
    

ImageId

String

No

Yes

The ID of the custom image.

The system-provided image is used by default.

OnDemandPercentageAboveBaseCapacity

Integer

No

Yes

The percentage of on-demand instances among instances that exceed OnDemandBaseCapacity.

Valid values: 0 to 100.

OnDemandBaseCapacity

Integer

No

Yes

The minimum number of on-demand instances required in the scaling group.

Valid values: 0 to 1000. If the number of on-demand instances is less than this value, on-demand instances are prioritized for creation.

Platform

String

No

Yes

The operating system.

Valid values:

-   CentOS
    
-   AliyunLinux (default)
    
-   Windows
    
-   WindowsCore
    

Period

Integer

No

Yes

The auto renewal period for nodes in the node pool. This parameter takes effect only when you select subscription and auto renewal.

When PeriodUnit is set to Month, valid values are:

-   1 (default)
    
-   2
    
-   3
    
-   6
    
-   12
    

PeriodUnit

String

No

Yes

The billing cycle for nodes in the node pool.

You must specify this parameter when InstanceChargeType is set to PrePaid.

Valid values:

-   Month: Month.
    
-   Year:
    

LoginPassword

String

No

Yes

The SSH logon password.

You can specify either KeyPair or LoginPassword, but not both.

Password requirements: Must be 8 to 30 characters long and must contain at least three of the following character types: English letters, digits, and special characters ``( ) ` ~ ! @ # $ % ^ & * - _ + = | { } [ ] : ; ' < > , . ? /``.

MultiAzPolicy

String

No

Yes

The scaling policy for multi-zone scaling groups.

Valid values:

-   PRIORITY (default): Scale out or in based on the priority of vSwitches. If ECS instances cannot be created in the zone where the highest-priority vSwitch resides, the next-highest-priority vSwitch is used.
    
-   COST\_OPTIMIZED: Try to create instances in order of increasing vCPU unit price. When multiple instance types are configured for spot instances, spot instances are prioritized. You can use CompensateWithOnDemand to specify whether to automatically create on-demand instances when spot instances cannot be created due to inventory or other constraints.
    
    **Note**
    
    COST\_OPTIMIZED takes effect only when multiple instance types are configured or spot instances are selected.
    
-   BALANCE: Distribute ECS instances evenly across zones in the scaling group. If the distribution becomes unbalanced due to insufficient inventory or other reasons, you can call the [RebalanceInstances](/help/en/auto-scaling/developer-reference/api-rebalanceinstances#doc-api-Ess-RebalanceInstances) API operation to rebalance the distribution.
    

KeyPair

String

No

Yes

The name of the key pair for passwordless logon.

You can specify either KeyPair or LoginPassword, but not both.

**Note**

If you create a managed node pool, only KeyPair is supported.

SecurityGroupId

String

No

Yes

The ID of the security group.

None

SpotInstanceRemedy

Boolean

No

Yes

Specifies whether to use spot instances.

Valid values:

-   true (default): Use spot instances. When the system sends a message that a spot instance will be reclaimed, the scaling group attempts to create a new instance to replace the reclaimed spot instance.
    
-   false: Do not use spot instances.
    

For more information, see [Create spot instances](/help/en/eci/user-guide/create-a-preemptible-elastic-container-instance-1).

SystemDiskPerformanceLevel

String

No

Yes

Set the performance level for the cloud disk.

Valid values:

-   PL1: Maximum random read/write IOPS per disk: 50,000.
    
-   PL2: Maximum random read/write IOPS per disk: 100,000.
    
-   PL3: Maximum random read/write IOPS per disk: 1,000,000.
    

For more information, see [Enterprise SSD](/help/en/ecs/user-guide/essds#concept-727754).

SpotStrategy

String

No

Yes

The spot instance type.

Valid values:

-   NoSpot: A regular instance (not a spot instance).
    
-   SpotWithPriceLimit: Set a price limit for spot instances.
    
-   SpotAsPriceGo: Let the system automatically bid at the current market price.
    

For more information, see [Use spot instances](/help/en/ack/use-preemptible-instances#task-2494729).

SpotPriceLimit

List

No

Yes

The maximum hourly price for instances.

The maximum number of decimal places is 3. This parameter takes effect only when SpotStrategy is set to SpotWithPriceLimit.

For more information, see [SpotPriceLimit syntax](#section-cp9-ug6-r7w) and [SpotPriceLimit properties](#section-blx-hxm-hk0).

SpotInstancePools

Integer

No

Yes

The number of available instance types. The scaling group creates spot instances across these instance types in a cost-optimized manner.

Valid values: 1 to 10.

ScalingPolicy

String

No

Yes

The scaling mode for the scaling group.

Valid values:

-   release (default): Standard mode. Scales by creating or releasing ECS instances based on resource usage.
    
-   recycle: Fast mode. Scales by creating, stopping, and starting instances to improve subsequent scaling speed. You are not charged for compute resources while instances are stopped, only for storage. This does not apply to local disk instances.
    

SystemDiskCategory

String

No

Yes

The type of the system disk for nodes.

Valid values:

-   cloud\_efficiency (default): Ultra disk.
    
-   cloud\_ssd: Standard SSD.
    
-   cloud\_essd: Enterprise SSD.
    

InternetChargeType

String

No

Yes

The billing method for public network access.

Valid values:

-   PayByBandwidth (default): Pay by bandwidth.
    
-   PayByTraffic: Pay by traffic.
    

InternetMaxBandwidthOut

Integer

No

Yes

The maximum outbound public bandwidth.

Unit: Mbit/s.

Valid values: 1 to 100 Mbit/s.

RdsInstances

List

No

Yes

The IDs of RDS instances.

None

Tags

List

No

Yes

You can only add tags to ECS instances.

Tag keys cannot be duplicated. The maximum length of a tag key is 128 characters. Tag keys and values cannot start with `aliyun` or `acs:`, or contain `https://` or `http://`.

For more information, see [Tags syntax](#section-h4j-myq-wm8) and [Tags properties](#section-oso-jrz-qow).

ZoneIds

List

No

Yes

The IDs of zones.

None

SocEnabled

Boolean

No

No

Specifies whether to enable MLPS security hardening.

None

ImageType

String

No

No

The type of the operating system image.

You must specify either this parameter or the Platform parameter.

InstancePatterns

List

No

Yes

Instance attribute configurations.

For more information, see [InstancePatterns properties](#ae4e9e59927cl).

SecurityHardeningOs

Boolean

No

No

Alibaba Cloud OS security hardening.

Valid values:

-   `true`: Enable Alibaba Cloud OS security hardening.
    
-   `false`: Disable Alibaba Cloud OS security hardening.
    

Default value: `false`.

## InstancePatterns syntax

```
"InstancePatterns": [
  {
    "CpuArchitectures": List,
    "MaxCpuCores": Integer,
    "MinMemorySize": Integer,
    "Memory": Integer,
    "InstanceFamilyLevel": String,
    "MinCpuCores": Integer,
    "Cores": Integer,
    "InstanceTypeFamilies": List,
    "InstanceCategories": List,
    "ExcludedInstanceTypes": List,
    "MaxMemorySize": Integer
  }
]
```

## InstancePatterns properties

**Property name**

**Type**

**Required**

**Update allowed**

**Description**

**Constraint**

CpuArchitectures

List

No

No

The CPU architecture of the instance.

Valid values:

-   X86
    
-   ARM
    

MaxCpuCores

Integer

No

No

The maximum number of vCPU cores for the instance type.

None

MinMemorySize

Integer

No

No

The minimum memory size for the instance type.

Unit: GiB.

Memory

Integer

No

No

The memory size for the instance type.

Unit: GiB.

InstanceFamilyLevel

String

No

No

The instance family level.

None

MinCpuCores

Integer

No

No

The minimum number of vCPU cores for the instance type.

None

Cores

Integer

No

No

The number of vCPU cores for the instance type.

None

InstanceTypeFamilies

List

No

No

The instance families to use.

None

InstanceCategories

List

No

No

Instance classification.

None

ExcludedInstanceTypes

List

No

No

The instance types to exclude.

None

MaxMemorySize

Integer

No

No

The maximum memory size for the instance type.

Unit: GiB.

## DataDisks syntax

```
"DataDisks": [
  {
    "Category": String,
    "Encrypted": Boolean,
    "PerformanceLevel": String,
    "Size": Integer,
    "AutoSnapshotPolicyId": String,
    "Categories": List
  }
]
```

## DataDisks properties

**Property name**

**Type**

**Required**

**Update allowed**

**Description**

**Constraint**

AutoSnapshotPolicyId

String

No

Yes

The ID of the automatic snapshot policy. Disks are automatically backed up according to the policy.

Default value: empty. No automatic backup is performed.

Category

String

No

Yes

The type of the data disk.

Valid values:

-   cloud\_efficiency (default): Ultra disk.
    
-   cloud\_ssd: Standard SSD.
    
-   cloud\_essd: Enterprise SSD.
    

Encrypted

Boolean

No

Yes

Specifies whether to encrypt the data disk.

Valid values:

-   true: Encrypt the data disk.
    
-   false (default): Do not encrypt the data disk.
    

PerformanceLevel

String

No

Yes

The performance level of the disk.

Valid values:

-   PL1: Maximum random read/write IOPS per disk: 50,000.
    
-   PL2: Maximum random read/write IOPS per disk: 100,000.
    
-   PL3: Maximum random read/write IOPS per disk: 1,000,000.
    

For more information, see [Enterprise SSD](/help/en/ecs/user-guide/essds#concept-727754).

Size

Integer

No

Yes

The size of the data disk.

Valid values: 40 to 32768.

Default value: 120.

Unit: GiB.

Categories

List

No

No

The list of data disk types.

None

## SpotPriceLimit syntax

```
"SpotPriceLimit": [
  {
    "PriceLimit": Number,
    "InstanceType": String
  }
]
```

## SpotPriceLimit properties

**Property name**

**Type**

**Required**

**Update allowed**

**Description**

**Constraint**

PriceLimit

Number

Yes

Yes

Preemptible instance price limit.

None

InstanceType

String

Yes

Yes

Preemptible instance type.

None

## Tags syntax

```
"Tags": [
  {
    "Value": String,
    "Key": String
  }
]
```

## Tags properties

**Property name**

**Type**

**Required**

**Update allowed**

**Description**

**Constraint**

Value

String

Yes

Yes

The value of the tag.

None

Key

String

Yes

Yes

The key of the tag.

None

## Return values

Fn::GetAtt

NodePoolId: The ID of the cluster node pool.

## Examples

### Example 1: Create a node pool with fixed parameters.

[Quick create](https://ros.console.alibabacloud.com/cn-hangzhou/templates/public/createStack?templateType=Example&templateUrl=https://ros-public-templates.oss-cn-hangzhou.aliyuncs.com/ros-templates/resources/cs/cluster-node-pool-case1.yml&pageTitle=Create%20node%20pool%20with%20fixed%20parameters&hideStepRow=true&hideStackConfig=true&isSimplified=true&balanceIntercept=true)

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  TeeConfig:
    Type: Json
    Description: The configurations of confidential computing.
    Default: |-
      {
        "TeeEnable": true
      }
  ClusterId:
    Type: String
    Description: Cluster ID.
    AssociationProperty: ALIYUN::CS::Cluster::ClusterId
  NodePoolInfo:
    Type: Json
    Description: The configurations of the node pool.
    Default: |-
      {
        "Name": "test"
      }
  KubernetesConfig:
    Type: Json
    Description: The configurations of the ACK cluster.
    Default: |-
      {
        "CpuPolicy": "static",
        "Runtime": "containerd",
        "CmsEnabled": true,
        "UserData": "echo 'hello'",
        "NodeNameMode": "customized,aliyun.com,5,test",
        "RuntimeVersion": "1.4.8",
        "Unschedulable": false
      }
  Count:
    Type: Number
    Description: The number of nodes in the node pool.
    Default: 1
  Management:
    Type: Json
    Description: The configurations of the managed node pool.
    Default: |-
      {
        "UpgradeConfig": {
          "AutoUpgrade": true,
          "Surge": 1,
          "MaxUnavailable": 1
        },
        "AutoRepair": true,
        "Enable": true
      }
  ScalingGroup:
    Type: Json
    Description: The configurations of the scaling group used by the node pool.
    Default: |-
      {
        "SpotInstanceRemedy": true,
        "Platform": "AliyunLinux",
        "SystemDiskSize": 120,
        "InstanceChargeType": "PostPaid",
        "SystemDiskPerformanceLevel": "PL1",
        "ImageId": "aliyun_2_1903_x64_20G_alibase_20210726.vhd",
        "InstanceTypes": [
          "ecs.ebmhfc6.20xlarge"
        ],
        "LoginPassword": "test****",
        "MultiAzPolicy": "BALANCE",
        "VSwitchIds": [
          "vsw-*****"
        ],
        "SystemDiskCategory": "cloud_essd",
        "InternetMaxBandwidthOut": 0
      }
Resources:
  ClusterNodePool:
    Type: ALIYUN::CS::ClusterNodePool
    Properties:
      TeeConfig:
        Ref: TeeConfig
      ClusterId:
        Ref: ClusterId
      NodePoolInfo:
        Ref: NodePoolInfo
      KubernetesConfig:
        Ref: KubernetesConfig
      Count:
        Ref: Count
      Management:
        Ref: Management
      ScalingGroup:
        Ref: ScalingGroup
Outputs:
  NodePoolId:
    Description: Cluster node pool ID.
    Value:
      Fn::GetAtt:
        - ClusterNodePool
        - NodePoolId
                    
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "TeeConfig": {
      "Type": "Json",
      "Description": "The configurations of confidential computing.",
      "Default": "{\n  \"TeeEnable\": true\n}"
    },
    "ClusterId": {
      "Type": "String",
      "Description": "Cluster ID.",
      "AssociationProperty": "ALIYUN::CS::Cluster::ClusterId"
    },
    "NodePoolInfo": {
      "Type": "Json",
      "Description": "The configurations of the node pool.",
      "Default": "{\n  \"Name\": \"test\"\n}"
    },
    "KubernetesConfig": {
      "Type": "Json",
      "Description": "The configurations of the ACK cluster.",
      "Default": "{\n  \"CpuPolicy\": \"static\",\n  \"Runtime\": \"containerd\",\n  \"CmsEnabled\": true,\n  \"UserData\": \"echo 'hello'\",\n  \"NodeNameMode\": \"customized,aliyun.com,5,test\",\n  \"RuntimeVersion\": \"1.4.8\",\n  \"Unschedulable\": false\n}"
    },
    "Count": {
      "Type": "Number",
      "Description": "The number of nodes in the node pool.",
      "Default": 1
    },
    "Management": {
      "Type": "Json",
      "Description": "The configurations of the managed node pool.",
      "Default": "{\n  \"UpgradeConfig\": {\n    \"AutoUpgrade\": true,\n    \"Surge\": 1,\n    \"MaxUnavailable\": 1\n  },\n  \"AutoRepair\": true,\n  \"Enable\": true\n}"
    },
    "ScalingGroup": {
      "Type": "Json",
      "Description": "The configurations of the scaling group used by the node pool.",
      "Default": "{\n  \"SpotInstanceRemedy\": true,\n  \"Platform\": \"AliyunLinux\",\n  \"SystemDiskSize\": 120,\n  \"InstanceChargeType\": \"PostPaid\",\n  \"SystemDiskPerformanceLevel\": \"PL1\",\n  \"ImageId\": \"aliyun_2_1903_x64_20G_alibase_20210726.vhd\",\n  \"InstanceTypes\": [\n    \"ecs.ebmhfc6.20xlarge\"\n  ],\n  \"LoginPassword\": \"test****\",\n  \"MultiAzPolicy\": \"BALANCE\",\n  \"VSwitchIds\": [\n    \"vsw-*****\"\n  ],\n  \"SystemDiskCategory\": \"cloud_essd\",\n  \"InternetMaxBandwidthOut\": 0\n}"
    }
  },
  "Resources": {
    "ClusterNodePool": {
      "Type": "ALIYUN::CS::ClusterNodePool",
      "Properties": {
        "TeeConfig": {
          "Ref": "TeeConfig"
        },
        "ClusterId": {
          "Ref": "ClusterId"
        },
        "NodePoolInfo": {
          "Ref": "NodePoolInfo"
        },
        "KubernetesConfig": {
          "Ref": "KubernetesConfig"
        },
        "Count": {
          "Ref": "Count"
        },
        "Management": {
          "Ref": "Management"
        },
        "ScalingGroup": {
          "Ref": "ScalingGroup"
        }
      }
    }
  },
  "Outputs": {
    "NodePoolId": {
      "Description": "Cluster node pool ID.",
      "Value": {
        "Fn::GetAtt": [
          "ClusterNodePool",
          "NodePoolId"
        ]
      }
    }
  }
}
```

### Example 2: Create a node pool with dynamic parameters.

[Quick create](https://ros.console.alibabacloud.com/cn-hangzhou/templates/public/createStack?templateType=Example&templateUrl=https://ros-public-templates.oss-cn-hangzhou.aliyuncs.com/ros-templates/resources/cs/cluster-node-pool-case2.yml&pageTitle=Create%20node%20pool%20with%20dynamic%20parameters&hideStepRow=true&hideStackConfig=true&isSimplified=true&balanceIntercept=true)

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  ClusterId:
    AssociationProperty: ALIYUN::CS::Cluster::ClusterId
    Type: String
  VpcId:
    Type: String
    AssociationProperty: ALIYUN::ECS::VPC::VPCId
  ZoneId1:
    Type: String
    AssociationProperty: 'ALIYUN::ECS::Instance::ZoneId'
    AssociationPropertyMetadata:
      ExclusiveTo:
        - ZoneId2
    Label:
      en: Availability Zone
      zh-cn: Availability Zone 1
  VSwitchId1:
    Type: String
    AssociationProperty: ALIYUN::ECS::VSwitch::VSwitchId
    AssociationPropertyMetadata:
      ZoneId: ${ZoneId1}
      VpcId: ${VpcId}
  ZoneId2:
    Type: String
    AssociationProperty: 'ALIYUN::ECS::Instance::ZoneId'
    AssociationPropertyMetadata:
      ExclusiveTo:
        - ZoneId1
    Label:
      en: Availability Zone
      zh-cn: Availability Zone 2
  VSwitchId2:
    Type: String
    AssociationProperty: ALIYUN::ECS::VSwitch::VSwitchId
    AssociationPropertyMetadata:
      ZoneId: ${ZoneId2}
      VpcId: ${VpcId}
  InstanceType:
    Type: CommaDelimitedList
    AssociationProperty: 'ALIYUN::ECS::Instance::InstanceType'
    AssociationPropertyMetadata:
      InstanceChargeType: PostPaid
      SystemDiskCategory: cloud_essd
      CreateACKClusterParams:
        NetworkPlugin: terway-eniip
    Label:
      en: Instance Type
      zh-cn: Instance Type
  InstancePassword:
    NoEcho: true
    Type: String
    Description:
      en: >-
        Server login password, Length 8-30, must contain three(Capital letters,
        lowercase letters, numbers, ()`~!@#$%^&*_-+=|{}[]:;'<>,.?/ Special
        symbol in)
      zh-cn: >-
        The logon password for the server. The password must be 8 to 30 characters in length and contain characters from at least three of the following categories: uppercase letters, lowercase letters, digits, and special characters from the following set: ()`~!@#$%^&*_-+=|{}[]:;'<>,.?/
    Label:
      en: Instance Password
      zh-cn: Instance Password
    ConstraintDescription:
      en: >-
        Length 8-30, must contain three(Capital letters, lowercase letters,
        numbers, ()`~!@#$%^&*_-+=|{}[]:;'<>,.?/ Special symbol in)
      zh-cn: 'The password must be 8 to 30 characters in length and contain characters from at least three of the following categories: uppercase letters, lowercase letters, digits, and special characters from the following set: ()`~!@#$%^&*_-+=|{}[]:;''<>,.?/'
    AssociationProperty: 'ALIYUN::ECS::Instance::Password'
    Default: null
Resources:
  NodePools:
    Type: 'ALIYUN::CS::ClusterNodePool'
    Properties:
      ClusterId:
        Ref: ClusterId
      NodePoolInfo:
          Name: k8s-hpa-cluster-nodepool
      ScalingGroup:
        VSwitchIds:
          - Ref: VSwitchId1
          - Ref: VSwitchId2
        ZoneIds:
          - Ref: ZoneId1
          - Ref: ZoneId2
        SystemDiskCategory: cloud_essd
        SystemDiskPerformanceLevel: PL0
        SystemDiskSize: 40
        InstanceTypes:
          Ref: InstanceType
        LoginPassword:
          Ref: InstancePassword
        Platform: AliyunLinux
        ImageId: aliyun_3_9_x64_20G_alibase_20231219.vhd
      KubernetesConfig:
        Runtime: containerd
        RuntimeVersion: 1.6.28
      AutoScaling:
        Enable: true
        MinInstances: 2
        MaxInstances: 10
Outputs:
  NodePoolId:
    Description:
      zh-cn: The endpoint of the coffee service.
      en: The addresses of coffee service.
    Value:
      Ref: NodePools
Metadata:
  'ALIYUN::ROS::Interface':
    ParameterGroups:
      - Parameters:
          - ClusterId
          - VpcId
          - ZoneId1
          - VSwitchId1
          - ZoneId2
          - VSwitchId2
          - InstanceType
          - InstancePassword

```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "ClusterId": {
      "AssociationProperty": "ALIYUN::CS::Cluster::ClusterId",
      "Type": "String"
    },
    "VpcId": {
      "Type": "String",
      "AssociationProperty": "ALIYUN::ECS::VPC::VPCId"
    },
    "ZoneId1": {
      "Type": "String",
      "AssociationProperty": "ALIYUN::ECS::Instance::ZoneId",
      "AssociationPropertyMetadata": {
        "ExclusiveTo": [
          "ZoneId2"
        ]
      },
      "Label": {
        "en": "Availability Zone",
        "zh-cn": "Zone 1"
      }
    },
    "VSwitchId1": {
      "Type": "String",
      "AssociationProperty": "ALIYUN::ECS::VSwitch::VSwitchId",
      "AssociationPropertyMetadata": {
        "ZoneId": "${ZoneId1}",
        "VpcId": "${VpcId}"
      }
    },
    "ZoneId2": {
      "Type": "String",
      "AssociationProperty": "ALIYUN::ECS::Instance::ZoneId",
      "AssociationPropertyMetadata": {
        "ExclusiveTo": [
          "ZoneId1"
        ]
      },
      "Label": {
        "en": "Availability Zone",
        "zh-cn": "Zone 2"
      }
    },
    "VSwitchId2": {
      "Type": "String",
      "AssociationProperty": "ALIYUN::ECS::VSwitch::VSwitchId",
      "AssociationPropertyMetadata": {
        "ZoneId": "${ZoneId2}",
        "VpcId": "${VpcId}"
      }
    },
    "InstanceType": {
      "Type": "CommaDelimitedList",
      "AssociationProperty": "ALIYUN::ECS::Instance::InstanceType",
      "AssociationPropertyMetadata": {
        "InstanceChargeType": "PostPaid",
        "SystemDiskCategory": "cloud_essd",
        "CreateACKClusterParams": {
          "NetworkPlugin": "terway-eniip"
        }
      },
      "Label": {
        "en": "Instance Type",
        "zh-cn": "Instance Type"
      }
    },
    "InstancePassword": {
      "NoEcho": true,
      "Type": "String",
      "Description": {
        "en": "Server login password, Length 8-30, must contain three(Capital letters, lowercase letters, numbers, ()`~!@#$%^&*_-+=|{}[]:;'<>,.?/ Special symbol in)",
        "zh-cn": "Server logon password. The password must be 8 to 30 characters in length and contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters: ()`~!@#$%^&*_-+=|{}[]:;'<>,.?/"
      },
      "Label": {
        "en": "Instance Password",
        "zh-cn": "Instance Password"
      },
      "ConstraintDescription": {
        "en": "Length 8-30, must contain three(Capital letters, lowercase letters, numbers, ()`~!@#$%^&*_-+=|{}[]:;'<>,.?/ Special symbol in)",
        "zh-cn": "The password must be 8 to 30 characters in length and contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters: ()`~!@#$%^&*_-+=|{}[]:;''<>,.?/"
      },
      "AssociationProperty": "ALIYUN::ECS::Instance::Password",
      "Default": null
    }
  },
  "Resources": {
    "NodePools": {
      "Type": "ALIYUN::CS::ClusterNodePool",
      "Properties": {
        "ClusterId": {
          "Ref": "ClusterId"
        },
        "NodePoolInfo": {
          "Name": "k8s-hpa-cluster-nodepool"
        },
        "ScalingGroup": {
          "VSwitchIds": [
            {
              "Ref": "VSwitchId1"
            },
            {
              "Ref": "VSwitchId2"
            }
          ],
          "ZoneIds": [
            {
              "Ref": "ZoneId1"
            },
            {
              "Ref": "ZoneId2"
            }
          ],
          "SystemDiskCategory": "cloud_essd",
          "SystemDiskPerformanceLevel": "PL0",
          "SystemDiskSize": 40,
          "InstanceTypes": {
            "Ref": "InstanceType"
          },
          "LoginPassword": {
            "Ref": "InstancePassword"
          },
          "Platform": "AliyunLinux",
          "ImageId": "aliyun_3_9_x64_20G_alibase_20231219.vhd"
        },
        "KubernetesConfig": {
          "Runtime": "containerd",
          "RuntimeVersion": "1.6.28"
        },
        "AutoScaling": {
          "Enable": true,
          "MinInstances": 2,
          "MaxInstances": 10
        }
      }
    }
  },
  "Outputs": {
    "NodePoolId": {
      "Description": {
        "zh-cn": "The endpoint of the coffee service.",
        "en": "The addresses of coffee service."
      },
      "Value": {
        "Ref": "NodePools"
      }
    }
  },
  "Metadata": {
    "ALIYUN::ROS::Interface": {
      "ParameterGroups": [
        {
          "Parameters": [
            "ClusterId",
            "VpcId",
            "ZoneId1",
            "VSwitchId1",
            "ZoneId2",
            "VSwitchId2",
            "InstanceType",
            "InstancePassword"
          ]
        }
      ]
    }
  }
}
```

### Example 3: Create a managed Kubernetes cluster and configure a VPC and a node pool.

[Quick create](https://ros.console.alibabacloud.com/cn-hangzhou/templates/public/createStack?templateType=Example&templateUrl=https://ros-public-templates.oss-cn-hangzhou.aliyuncs.com/ros-templates/resources/cs/cluster-node-pool-case3.yml&pageTitle=Create%20a%20managed%20Kubernetes%20cluster,%20configure%20a%20VPC,%20and%20a%20node%20pool&hideStepRow=true&hideStackConfig=true&isSimplified=true&balanceIntercept=true)

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Description:
  zh-cn: Create a managed Kubernetes cluster, configure a VPC, a node pool, a Horizontal Pod Autoscaler (HPA), and Simple Log Service to enable automatic scaling and monitoring for containerized applications.
  en: Create a managed Kubernetes cluster, configure Virtual Private Cloud (VPC),
    node pools, Horizontal Pod Autoscaler (HPA), and logging services to enable automatic
    scaling and monitoring of containerized applications.
Parameters:
  CommonName:
    Type: String
    Default:  k8s-hpa-cluster
  SlsProjectName:
    Type: String
    Label:
      en: Name of sls project
      zh-cn: Name of the SLS project
    Description:
      en: The name contains 3 to 36 characters. It must start and end with a lowercase letter or number. The value can contain lowercase letters, digits, and hyphens (-).
      zh-cn: The name must be 3 to 36 characters in length. It must start and end with a lowercase letter or a digit. It can contain lowercase letters, digits, and hyphens (-).
    AssociationProperty: AutoCompleteInput
    AssociationPropertyMetadata:
      Length: 5
      Prefix: k8s-hpa-sls-project-
      CharacterClasses:
        - Class: lowercase
          min: 1
  ManagedKubernetesClusterName:
    Type: String
    Label:
      en: Managed Kubernetes Cluster Name
      zh-cn: ACK managed cluster name
    AssociationProperty: AutoCompleteInput
    AssociationPropertyMetadata:
      Length: 5
      Prefix: k8s-hpa-cluster-
      CharacterClasses:
        - Class: lowercase
          min: 1
  ZoneId1:
    Type: String
    AssociationProperty: 'ALIYUN::ECS::Instance::ZoneId'
    AssociationPropertyMetadata:
      ExclusiveTo:
        - ZoneId2
    Label:
      en: Availability Zone
      zh-cn: Zone 1
  ZoneId2:
    Type: String
    AssociationProperty: 'ALIYUN::ECS::Instance::ZoneId'
    AssociationPropertyMetadata:
      ExclusiveTo:
        - ZoneId1
    Label:
      en: Availability Zone
      zh-cn: Zone 2
  InstanceType:
    Type: CommaDelimitedList
    AssociationProperty: 'ALIYUN::ECS::Instance::InstanceType'
    AssociationPropertyMetadata:
      InstanceChargeType: PostPaid
      SystemDiskCategory: cloud_essd
      CreateACKClusterParams:
        NetworkPlugin: terway-eniip
    Label:
      en: Instance Type
      zh-cn: Instance Type
  InstancePassword:
    NoEcho: true
    Type: String
    Description:
      en: >-
        Server login password, Length 8-30, must contain three(Capital letters,
        lowercase letters, numbers, ()`~!@#$%^&*_-+=|{}[]:;'<>,.?/ Special
        symbol in)
      zh-cn: >-
        Server logon password. The password must be 8 to 30 characters in length and contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters: ()`~!@#$%^&*_-+=|{}[]:;'<>,.?/
    Label:
      en: Instance Password
      zh-cn: Instance Password
    ConstraintDescription:
      en: >-
        Length 8-30, must contain three(Capital letters, lowercase letters,
        numbers, ()`~!@#$%^&*_-+=|{}[]:;'<>,.?/ Special symbol in)
      zh-cn: 'The password must be 8 to 30 characters in length and contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters: ()`~!@#$%^&*_-+=|{}[]:;''<>,.?/'
    AssociationProperty: 'ALIYUN::ECS::Instance::Password'
    Default: null
Resources:
  Vpc:
    Type: 'ALIYUN::ECS::VPC'
    Properties:
      CidrBlock: 10.0.0.0/8
      VpcName:
        Fn::Sub: ${CommonName}-vpc
  VSwitch1:
    Type: 'ALIYUN::ECS::VSwitch'
    Properties:
      VpcId:
        Ref: Vpc
      CidrBlock: 10.0.0.0/24
      ZoneId:
        Ref: ZoneId1
      VSwitchName:
        Fn::Sub: ${CommonName}-vsw
  VSwitch2:
    Type: 'ALIYUN::ECS::VSwitch'
    Properties:
      VpcId:
        Ref: Vpc
      CidrBlock: 10.0.1.0/24
      ZoneId:
        Ref: ZoneId2
      VSwitchName:
        Fn::Sub: ${CommonName}-vsw
  SecurityGroup:
    Type: 'ALIYUN::ECS::SecurityGroup'
    Properties:
      VpcId:
        Ref: Vpc
      SecurityGroupName:
        Fn::Sub: ${CommonName}-sg
      SecurityGroupIngress:
        - PortRange: 443/443
          SourceCidrIp: 0.0.0.0/0
          IpProtocol: tcp
        - PortRange: 80/80
          SourceCidrIp: 0.0.0.0/0
          IpProtocol: tcp
  SlsProject:
    Type: 'ALIYUN::SLS::Project'
    Properties:
      Name:
        Ref: SlsProjectName
  AliyunCSManagedAutoScalerRole:
    Type: 'ALIYUN::RAM::Role'
    Properties:
      RoleName: AliyunCSManagedAutoScalerRole
      Description: ACK uses this role to access your resources in other Alibaba Cloud services.
      AssumeRolePolicyDocument:
        Version: '1'
        Statement:
          - Action: sts:AssumeRole
            Effect: Allow
            Principal:
              Service:
                - cs.aliyuncs.com
      MaxSessionDuration: 3600
      IgnoreExisting: true
      DeletionForce: true
      PolicyAttachments:
        System:
          - AliyunCSManagedAutoScalerRolePolicy
  AckCluster:
    Type: 'ALIYUN::CS::ManagedKubernetesCluster'
    DependsOn: AliyunCSManagedAutoScalerRole
    Properties:
      VpcId:
        Ref: Vpc
      VSwitchIds:
        - Ref: VSwitch1
        - Ref: VSwitch2
      PodVswitchIds:
        - Ref: VSwitch1
        - Ref: VSwitch1
      Name:
        Ref: ManagedKubernetesClusterName
      KubernetesVersion: 1.31.1-aliyun.1
      ServiceCidr: 192.168.0.0/16
      ClusterSpec: ack.pro.small
      LoadBalancerSpec: slb.s2.small
      IsEnterpriseSecurityGroup: true
      SnatEntry: true
      NumOfNodes: 0
      EndpointPublicAccess: true
      Platform: AliyunLinux
      Addons:
        - Name: ack-node-local-dns
        - Name: terway-eniip
          Config: '{"IPVlan":"false","NetworkPolicy":"false","ENITrunking":"false"}'
        - Name: csi-plugin
        - Name: csi-provisioner
        - Name: storage-operator
          Config: '{"CnfsOssEnable":"false","CnfsNasEnable":"false"}'
        - Name: nginx-ingress-controller
          Disabled: true
        - Name: logtail-ds
          Config: '{"IngressDashboardEnabled":"true"}'
        - Name: alb-ingress-controller
          Version: ""
          Config:
            Fn::Sub: >-
              {"albIngress":{"AddressType":"Internet","ZoneMappings":{"${ZoneId1}":["${VSwitch1}"],
              "${ZoneId2}":["${VSwitch2}"]},"CreateDefaultALBConfig":true}}
        - Name: ack-helm-manager
        - Name: arms-prometheus
      ProxyMode: ipvs
      DeleteOptions:
        - ResourceType: ALB
          DeleteMode: delete
        - ResourceType: SLB
          DeleteMode: delete
        - ResourceType: SLS_Data
          DeleteMode: delete
        - ResourceType: SLS_ControlPlane
          DeleteMode: delete
        - ResourceType: PrivateZone
          DeleteMode: delete
  NodePools:
    Type: 'ALIYUN::CS::ClusterNodePool'
    Properties:
      ClusterId:
        Ref: AckCluster
      NodePoolInfo:
          Name: k8s-hpa-cluster-nodepool
      ScalingGroup:
        VSwitchIds:
          - Ref: VSwitch1
          - Ref: VSwitch2
        ZoneIds:
          - Ref: ZoneId1
          - Ref: ZoneId2
        SystemDiskCategory: cloud_essd
        SystemDiskPerformanceLevel: PL0
        SystemDiskSize: 40
        InstanceTypes:
          Ref: InstanceType
        LoginPassword:
          Ref: InstancePassword
        Platform: AliyunLinux
        ImageId: aliyun_3_9_x64_20G_alibase_20231219.vhd
      KubernetesConfig:
        Runtime: containerd
        RuntimeVersion: 1.6.28
      AutoScaling:
        Enable: true
        MinInstances: 2
        MaxInstances: 10
  Sleep:
    Type: 'ALIYUN::ROS::Sleep'
    DependsOn: NodePools
    Properties:
      CreateDuration: 300
  AckMetricsAdapter:
    Type: 'ALIYUN::CS::ClusterHelmApplication'
    DependsOn: Sleep
    Properties:
      Namespace: kube-system
      ChartUrl: 'https://aliacs-app-catalog.oss-cn-hangzhou.aliyuncs.com/charts-incubator/ack-alibaba-cloud-metrics-adapter-1.3.3.tgz'
      ClusterId:
        Ref: AckCluster
      Name: ack-alibaba-cloud-metrics-adapter
      ChartValues:
        AlibabaCloudMetricsAdapter:
          commonLabels: ''
          replicas: 1
          resources:
            metricsAdapterDeployment:
              resources:
                limits:
                  cpu: 0.5
                  memory: 1Gi
                requests:
                  cpu: 100m
                  memory: 200Mi
            configReloader:
              resources:
                limits:
                  cpu: 20m
                  memory: 30Mi
                requests:
                  cpu: 20m
                  memory: 30Mi
          listenPort: 443
          costWeights:
            cpu: '1.0'
            memory: '0.0'
          image:
            repository: registry-cn-hangzhou-vpc.ack.aliyuncs.com/acs/alibaba-cloud-metrics-adapter-amd64
            tag: v0.2.7-f1ee5c3-aliyun
            pullPolicy: Always
          nameOverride: ''
          fullnameOverride: ''
          service:
            type: ClusterIP
          serviceAccountName: ack-alibaba-cloud-metrics-adapter
          annotations: { }
          nodeSelector: { }
          tolerations: [ ]
          env:
            - AccessKeyId: ''
            - AccessKeySecret: ''
            - Region: ''
          affinity: { }
          prometheus:
            enabled: true
            url: { }
            metricsRelistInterval: 1m
            logLevel: 5
            adapter:
              rules:
                default: false
                custom:
                  - seriesQuery: container_memory_working_set_bytes{namespace!="",pod!=""}
                    resources:
                      overrides:
                        namespace:
                          resource: namespace
                        pod:
                          resource: pod
                    name:
                      matches: ^(.*)_bytes
                      as: ${1}_bytes_per_second
                    metricsQuery: sum(<<.Series>>{<<.LabelMatchers>>}) by (<<.GroupBy>>)
                  - seriesQuery: container_cpu_usage_seconds_total{namespace!="",pod!=""}
                    resources:
                      overrides:
                        namespace:
                          resource: namespace
                        pod:
                          resource: pod
                    name:
                      matches: ^(.*)_seconds_total
                      as: ${1}_core_per_second
                    metricsQuery: sum(rate(<<.Series>>{<<.LabelMatchers>>}[1m])) by (<<.GroupBy>>)
        ConfigReloader:
          image:
            repository: registry-vpc.cn-hangzhou.aliyuncs.com/acs/configmap-reload
            tag: v0.0.1
  InstallBackendApp:
    Type: 'ALIYUN::CS::ClusterApplication'
    DependsOn: AckMetricsAdapter
    Properties:
      ClusterId:
        Ref: AckCluster
      YamlContent:
        Fn::Sub: |-
          apiVersion: apps/v1
          kind: Deployment
          metadata:
            name: coffee
          spec:
            replicas: 2
            selector:
              matchLabels:
                app: coffee
            template:
              metadata:
                labels:
                  app: coffee
              spec:
                containers:
                - name: coffee
                  image: registry.${ALIYUN::Region}.aliyuncs.com/acs-sample/nginxdemos:latest
                  ports:
                  - containerPort: 80
                  resources:
                    limits:
                      cpu: 500m
                      memory: 1Gi
                    requests:
                      cpu: 500m
                      memory: 512Mi
          ---
          apiVersion: v1
          kind: Service
          metadata:
            name: coffee-svc
          spec:
            ports:
            - port: 80
              targetPort: 80
              protocol: TCP
            selector:
              app: coffee
            type: NodePort
          ---
          apiVersion: apps/v1
          kind: Deployment
          metadata:
            name: tea
          spec:
            replicas: 2
            selector:
              matchLabels:
                app: tea
            template:
              metadata:
                labels:
                  app: tea
              spec:
                containers:
                - name: tea
                  image: registry.${ALIYUN::Region}.aliyuncs.com/acs-sample/nginxdemos:latest
                  ports:
                  - containerPort: 80
                  resources:
                    limits:
                      cpu: 500m
                      memory: 1Gi
                    requests:
                      cpu: 500m
                      memory: 512Mi
          ---
          apiVersion: v1
          kind: Service
          metadata:
            name: tea-svc
          spec:
            ports:
            - port: 80
              targetPort: 80
              protocol: TCP
            selector:
              app: tea
            type: NodePort
  AlbConfig:
    Type: 'ALIYUN::CS::ClusterApplication'
    DependsOn: InstallBackendApp
    Properties:
      ClusterId:
        Ref: AckCluster
      YamlContent:
        Fn::Sub: |-
          apiVersion: alibabacloud.com/v1
          kind: AlbConfig
          metadata:
            name: k8s-hpa-alb-config
          spec:
            config:
              name: k8s-hpa-alb
              addressType: Internet
              zoneMappings:
              - vSwitchId: ${VSwitch1}
              - vSwitchId: ${VSwitch2}
              accessLogConfig:
                logProject: ${SlsProject}
                logStore: "alb_k8s_hpa_sls_logstore"
            listeners:
              - port: 80
                protocol: HTTP
  IngressClass:
    Type: 'ALIYUN::CS::ClusterApplication'
    DependsOn: AlbConfig
    Properties:
      ClusterId:
        Ref: AckCluster
      YamlContent:
        Fn::Sub: |-
          apiVersion: networking.k8s.io/v1
          kind: IngressClass
          metadata:
            name: k8s-hpa-alb-ingress-class
          spec:
            controller: ingress.k8s.alibabacloud/alb
            parameters:
              apiGroup: alibabacloud.com
              kind: AlbConfig
              name: k8s-hpa-alb-config
  Ingress:
    Type: 'ALIYUN::CS::ClusterApplication'
    DependsOn: IngressClass
    Properties:
      ClusterId:
        Ref: AckCluster
      YamlContent:
        Fn::Sub: |-
          apiVersion: networking.k8s.io/v1
          kind: Ingress
          metadata:
            name: k8s-hpa-alb-ingress
          spec:
            ingressClassName: k8s-hpa-alb-ingress-class
            rules:
             - http:
                paths:
                - path: /tea
                  pathType: ImplementationSpecific
                  backend:
                    service:
                      name: tea-svc
                      port:
                        number: 80
                - path: /coffee
                  pathType: ImplementationSpecific
                  backend:
                    service:
                      name: coffee-svc
                      port: 
                        number: 80
  Hpa:
    Type: 'ALIYUN::CS::ClusterApplication'
    DependsOn: WaitAlbIngress
    Properties:
      ClusterId:
        Ref: AckCluster
      YamlContent:
        Fn::Sub: |-
          apiVersion: autoscaling/v2
          kind: HorizontalPodAutoscaler
          metadata:
            name: k8s-alb-tea-hpa
          spec:
            scaleTargetRef:
              apiVersion: apps/v1
              kind: Deployment
              name: tea
            minReplicas: 2
            maxReplicas: 10
            metrics:
              - type: External
                external:
                  metric:
                    name: sls_alb_ingress_qps
                    selector:
                      matchLabels:
                        sls.project: ${SlsProject}
                        sls.logstore: "alb_k8s_hpa_sls_logstore" 
                        sls.ingress.route: "default-tea-svc-80"
                  target:
                    type: AverageValue
                    averageValue: 2
              - resource:
                  name: cpu
                  target:
                    averageUtilization: 80
                    type: Utilization
                type: Resource
              - resource:
                  name: memory
                  target:
                    averageUtilization: 80
                    type: Utilization
                type: Resource
  WaitAlbIngress:
    Type: 'ALIYUN::ROS::Sleep'
    DependsOn: Ingress
    Properties:
      CreateDuration: 120
  IngressInfo:
    Type: 'DATASOURCE::CS::ClusterApplicationResources'
    DependsOn: WaitAlbIngress
    Properties:
      ClusterId:
        Ref: AckCluster
      Kind: Ingress
      Namespace: default
      JsonPath: $.items.[0].status.loadBalancer.ingress.[0].hostname
      FirstMatch: true
Outputs:
  TeaUrl:
    Description:
      zh-cn: The endpoint of the tea service.
      en: The addresses of tea service.
    Value:
      'Fn::Sub': http://${IngressInfo}/tea
  CoffeeUrl:
    Description:
      zh-cn: The endpoint of the coffee service.
      en: The addresses of coffee service.
    Value:
      'Fn::Sub': http://${IngressInfo}/coffee
Metadata:
  'ALIYUN::ROS::Interface':
    ParameterGroups:
      - Parameters:
          - SlsProjectName
          - ManagedKubernetesClusterName
          - ZoneId1
          - ZoneId2
          - InstanceType
          - InstancePassword
    TemplateTags:
      - acs:technical-solution:micro:Implement horizontal scaling for containerized applications using HPA-tech_solu_125
    Hidden:
      - CommonName
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Description": {
    "zh-cn": "Create a managed Kubernetes cluster, configure a VPC, a node pool, a Horizontal Pod Autoscaler (HPA), and Simple Log Service to enable automatic scaling and monitoring for containerized applications.",
    "en": "Create a managed Kubernetes cluster, configure Virtual Private Cloud (VPC), node pools, Horizontal Pod Autoscaler (HPA), and logging services to enable automatic scaling and monitoring of containerized applications."
  },
  "Parameters": {
    "CommonName": {
      "Type": "String",
      "Default": "k8s-hpa-cluster"
    },
    "SlsProjectName": {
      "Type": "String",
      "Label": {
        "en": "Name of sls project",
        "zh-cn": "Name of the SLS project"
      },
      "Description": {
        "en": "The name contains 3 to 36 characters. It must start and end with a lowercase letter or number. The value can contain lowercase letters, digits, and hyphens (-).",
        "zh-cn": "The name must be 3 to 36 characters in length. It must start and end with a lowercase letter or a digit. It can contain lowercase letters, digits, and hyphens (-)."
      },
      "AssociationProperty": "AutoCompleteInput",
      "AssociationPropertyMetadata": {
        "Length": 5,
        "Prefix": "k8s-hpa-sls-project-",
        "CharacterClasses": [
          {
            "Class": "lowercase",
            "min": 1
          }
        ]
      }
    },
    "ManagedKubernetesClusterName": {
      "Type": "String",
      "Label": {
        "en": "Managed Kubernetes Cluster Name",
        "zh-cn": "ACK managed cluster name"
      },
      "AssociationProperty": "AutoCompleteInput",
      "AssociationPropertyMetadata": {
        "Length": 5,
        "Prefix": "k8s-hpa-cluster-",
        "CharacterClasses": [
          {
            "Class": "lowercase",
            "min": 1
          }
        ]
      }
    },
    "ZoneId1": {
      "Type": "String",
      "AssociationProperty": "ALIYUN::ECS::Instance::ZoneId",
      "AssociationPropertyMetadata": {
        "ExclusiveTo": [
          "ZoneId2"
        ]
      },
      "Label": {
        "en": "Availability Zone",
        "zh-cn": "Zone 1"
      }
    },
    "ZoneId2": {
      "Type": "String",
      "AssociationProperty": "ALIYUN::ECS::Instance::ZoneId",
      "AssociationPropertyMetadata": {
        "ExclusiveTo": [
          "ZoneId1"
        ]
      },
      "Label": {
        "en": "Availability Zone",
        "zh-cn": "Zone 2"
      }
    },
    "InstanceType": {
      "Type": "CommaDelimitedList",
      "AssociationProperty": "ALIYUN::ECS::Instance::InstanceType",
      "AssociationPropertyMetadata": {
        "InstanceChargeType": "PostPaid",
        "SystemDiskCategory": "cloud_essd",
        "CreateACKClusterParams": {
          "NetworkPlugin": "terway-eniip"
        }
      },
      "Label": {
        "en": "Instance Type",
        "zh-cn": "Instance Type"
      }
    },
    "InstancePassword": {
      "NoEcho": true,
      "Type": "String",
      "Description": {
        "en": "Server login password, Length 8-30, must contain three(Capital letters, lowercase letters, numbers, ()`~!@#$%^&*_-+=|{}[]:;'<>,.?/ Special symbol in)",
        "zh-cn": "Server logon password. The password must be 8 to 30 characters in length and contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters: ()`~!@#$%^&*_-+=|{}[]:;'<>,.?/"
      },
      "Label": {
        "en": "Instance Password",
        "zh-cn": "Instance Password"
      },
      "ConstraintDescription": {
        "en": "Length 8-30, must contain three(Capital letters, lowercase letters, numbers, ()`~!@#$%^&*_-+=|{}[]:;'<>,.?/ Special symbol in)",
        "zh-cn": "The password must be 8 to 30 characters in length and contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters: ()`~!@#$%^&*_-+=|{}[]:;'<>,.?/"
      },
      "AssociationProperty": "ALIYUN::ECS::Instance::Password",
      "Default": null
    }
  },
  "Resources": {
    "Vpc": {
      "Type": "ALIYUN::ECS::VPC",
      "Properties": {
        "CidrBlock": "10.0.0.0/8",
        "VpcName": {
          "Fn::Sub": "${CommonName}-vpc"
        }
      }
    },
    "VSwitch1": {
      "Type": "ALIYUN::ECS::VSwitch",
      "Properties": {
        "VpcId": {
          "Ref": "Vpc"
        },
        "CidrBlock": "10.0.0.0/24",
        "ZoneId": {
          "Ref": "ZoneId1"
        },
        "VSwitchName": {
          "Fn::Sub": "${CommonName}-vsw"
        }
      }
    },
    "VSwitch2": {
      "Type": "ALIYUN::ECS::VSwitch",
      "Properties": {
        "VpcId": {
          "Ref": "Vpc"
        },
        "CidrBlock": "10.0.1.0/24",
        "ZoneId": {
          "Ref": "ZoneId2"
        },
        "VSwitchName": {
          "Fn::Sub": "${CommonName}-vsw"
        }
      }
    },
    "SecurityGroup": {
      "Type": "ALIYUN::ECS::SecurityGroup",
      "Properties": {
        "VpcId": {
          "Ref": "Vpc"
        },
        "SecurityGroupName": {
          "Fn::Sub": "${CommonName}-sg"
        },
        "SecurityGroupIngress": [
          {
            "PortRange": "443/443",
            "SourceCidrIp": "0.0.0.0/0",
            "IpProtocol": "tcp"
          },
          {
            "PortRange": "80/80",
            "SourceCidrIp": "0.0.0.0/0",
            "IpProtocol": "tcp"
          }
        ]
      }
    },
    "SlsProject": {
      "Type": "ALIYUN::SLS::Project",
      "Properties": {
        "Name": {
          "Ref": "SlsProjectName"
        }
      }
    },
    "AliyunCSManagedAutoScalerRole": {
      "Type": "ALIYUN::RAM::Role",
      "Properties": {
        "RoleName": "AliyunCSManagedAutoScalerRole",
        "Description": "ACK uses this role to access your resources in other Alibaba Cloud services.",
        "AssumeRolePolicyDocument": {
          "Version": "1",
          "Statement": [
            {
              "Action": "sts:AssumeRole",
              "Effect": "Allow",
              "Principal": {
                "Service": [
                  "cs.aliyuncs.com"
                ]
              }
            }
          ]
        },
        "MaxSessionDuration": 3600,
        "IgnoreExisting": true,
        "DeletionForce": true,
        "PolicyAttachments": {
          "System": [
            "AliyunCSManagedAutoScalerRolePolicy"
          ]
        }
      }
    },
    "AckCluster": {
      "Type": "ALIYUN::CS::ManagedKubernetesCluster",
      "DependsOn": "AliyunCSManagedAutoScalerRole",
      "Properties": {
        "VpcId": {
          "Ref": "Vpc"
        },
        "VSwitchIds": [
          {
            "Ref": "VSwitch1"
          },
          {
            "Ref": "VSwitch2"
          }
        ],
        "PodVswitchIds": [
          {
            "Ref": "VSwitch1"
          },
          {
            "Ref": "VSwitch1"
          }
        ],
        "Name": {
          "Ref": "ManagedKubernetesClusterName"
        },
        "KubernetesVersion": "1.31.1-aliyun.1",
        "ServiceCidr": "192.168.0.0/16",
        "ClusterSpec": "ack.pro.small",
        "LoadBalancerSpec": "slb.s2.small",
        "IsEnterpriseSecurityGroup": true,
        "SnatEntry": true,
        "NumOfNodes": 0,
        "EndpointPublicAccess": true,
        "Platform": "AliyunLinux",
        "Addons": [
          {
            "Name": "ack-node-local-dns"
          },
          {
            "Name": "terway-eniip",
            "Config": "{\"IPVlan\":\"false\",\"NetworkPolicy\":\"false\",\"ENITrunking\":\"false\"}"
          },
          {
            "Name": "csi-plugin"
          },
          {
            "Name": "csi-provisioner"
          },
          {
            "Name": "storage-operator",
            "Config": "{\"CnfsOssEnable\":\"false\",\"CnfsNasEnable\":\"false\"}"
          },
          {
            "Name": "nginx-ingress-controller",
            "Disabled": true
          },
          {
            "Name": "logtail-ds",
            "Config": "{\"IngressDashboardEnabled\":\"true\"}"
          },
          {
            "Name": "alb-ingress-controller",
            "Version": "",
            "Config": {
              "Fn::Sub": "{\"albIngress\":{\"AddressType\":\"Internet\",\"ZoneMappings\":{\"${ZoneId1}\":[\"${VSwitch1}\"], \"${ZoneId2}\":[\"${VSwitch2}\"]},\"CreateDefaultALBConfig\":true}}"
            }
          },
          {
            "Name": "ack-helm-manager"
          },
          {
            "Name": "arms-prometheus"
          }
        ],
        "ProxyMode": "ipvs",
        "DeleteOptions": [
          {
            "ResourceType": "ALB",
            "DeleteMode": "delete"
          },
          {
            "ResourceType": "SLB",
            "DeleteMode": "delete"
          },
          {
            "ResourceType": "SLS_Data",
            "DeleteMode": "delete"
          },
          {
            "ResourceType": "SLS_ControlPlane",
            "DeleteMode": "delete"
          },
          {
            "ResourceType": "PrivateZone",
            "DeleteMode": "delete"
          }
        ]
      }
    },
    "NodePools": {
      "Type": "ALIYUN::CS::ClusterNodePool",
      "Properties": {
        "ClusterId": {
          "Ref": "AckCluster"
        },
        "NodePoolInfo": {
          "Name": "k8s-hpa-cluster-nodepool"
        },
        "ScalingGroup": {
          "VSwitchIds": [
            {
              "Ref": "VSwitch1"
            },
            {
              "Ref": "VSwitch2"
            }
          ],
          "ZoneIds": [
            {
              "Ref": "ZoneId1"
            },
            {
              "Ref": "ZoneId2"
            }
          ],
          "SystemDiskCategory": "cloud_essd",
          "SystemDiskPerformanceLevel": "PL0",
          "SystemDiskSize": 40,
          "InstanceTypes": {
            "Ref": "InstanceType"
          },
          "LoginPassword": {
            "Ref": "InstancePassword"
          },
          "Platform": "AliyunLinux",
          "ImageId": "aliyun_3_9_x64_20G_alibase_20231219.vhd"
        },
        "KubernetesConfig": {
          "Runtime": "containerd",
          "RuntimeVersion": "1.6.28"
        },
        "AutoScaling": {
          "Enable": true,
          "MinInstances": 2,
          "MaxInstances": 10
        }
      }
    },
    "Sleep": {
      "Type": "ALIYUN::ROS::Sleep",
      "DependsOn": "NodePools",
      "Properties": {
        "CreateDuration": 300
      }
    },
    "AckMetricsAdapter": {
      "Type": "ALIYUN::CS::ClusterHelmApplication",
      "DependsOn": "Sleep",
      "Properties": {
        "Namespace": "kube-system",
        "ChartUrl": "https://aliacs-app-catalog.oss-cn-hangzhou.aliyuncs.com/charts-incubator/ack-alibaba-cloud-metrics-adapter-1.3.3.tgz",
        "ClusterId": {
          "Ref": "AckCluster"
        },
        "Name": "ack-alibaba-cloud-metrics-adapter",
        "ChartValues": {
          "AlibabaCloudMetricsAdapter": {
            "commonLabels": "",
            "replicas": 1,
            "resources": {
              "metricsAdapterDeployment": {
                "resources": {
                  "limits": {
                    "cpu": 0.5,
                    "memory": "1Gi"
                  },
                  "requests": {
                    "cpu": "100m",
                    "memory": "200Mi"
                  }
                }
              },
              "configReloader": {
                "resources": {
                  "limits": {
                    "cpu": "20m",
                    "memory": "30Mi"
                  },
                  "requests": {
                    "cpu": "20m",
                    "memory": "30Mi"
                  }
                }
              }
            },
            "listenPort": 443,
            "costWeights": {
              "cpu": "1.0",
              "memory": "0.0"
            },
            "image": {
              "repository": "registry-cn-hangzhou-vpc.ack.aliyuncs.com/acs/alibaba-cloud-metrics-adapter-amd64",
              "tag": "v0.2.7-f1ee5c3-aliyun",
              "pullPolicy": "Always"
            },
            "nameOverride": "",
            "fullnameOverride": "",
            "service": {
              "type": "ClusterIP"
            },
            "serviceAccountName": "ack-alibaba-cloud-metrics-adapter",
            "annotations": {},
            "nodeSelector": {},
            "tolerations": [],
            "env": [
              {
                "AccessKeyId": ""
              },
              {
                "AccessKeySecret": ""
              },
              {
                "Region": ""
              }
            ],
            "affinity": {},
            "prometheus": {
              "enabled": true,
              "url": {},
              "metricsRelistInterval": "1m",
              "logLevel": 5,
              "adapter": {
                "rules": {
                  "default": false,
                  "custom": [
                    {
                      "seriesQuery": "container_memory_working_set_bytes{namespace!=\"\",pod!=\"\"}",
                      "resources": {
                        "overrides": {
                          "namespace": {
                            "resource": "namespace"
                          },
                          "pod": {
                            "resource": "pod"
                          }
                        }
                      },
                      "name": {
                        "matches": "^(.*)_bytes",
                        "as": "${1}_bytes_per_second"
                      },
                      "metricsQuery": "sum(<<.Series>>{<<.LabelMatchers>>}) by (<<.GroupBy>>)"
                    },
                    {
                      "seriesQuery": "container_cpu_usage_seconds_total{namespace!=\"\",pod!=\"\"}",
                      "resources": {
                        "overrides": {
                          "namespace": {
                            "resource": "namespace"
                          },
                          "pod": {
                            "resource": "pod"
                          }
                        }
                      },
                      "name": {
                        "matches": "^(.*)_seconds_total",
                        "as": "${1}_core_per_second"
                      },
                      "metricsQuery": "sum(rate(<<.Series>>{<<.LabelMatchers>>}[1m])) by (<<.GroupBy>>)"
                    }
                  ]
                }
              }
            }
          },
          "ConfigReloader": {
            "image": {
              "repository": "registry-vpc.cn-hangzhou.aliyuncs.com/acs/configmap-reload",
              "tag": "v0.0.1"
            }
          }
        }
      }
    },
    "InstallBackendApp": {
      "Type": "ALIYUN::CS::ClusterApplication",
      "DependsOn": "AckMetricsAdapter",
      "Properties": {
        "ClusterId": {
          "Ref": "AckCluster"
        },
        "YamlContent": {
          "Fn::Sub": "apiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: coffee\nspec:\n  replicas: 2\n  selector:\n    matchLabels:\n      app: coffee\n  template:\n    metadata:\n      labels:\n        app: coffee\n    spec:\n      containers:\n      - name: coffee\n        image: registry.${ALIYUN::Region}.aliyuncs.com/acs-sample/nginxdemos:latest\n        ports:\n        - containerPort: 80\n        resources:\n          limits:\n            cpu: 500m\n            memory: 1Gi\n          requests:\n            cpu: 500m\n            memory: 512Mi\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: coffee-svc\nspec:\n  ports:\n  - port: 80\n    targetPort: 80\n    protocol: TCP\n  selector:\n    app: coffee\n  type: NodePort\n---\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: tea\nspec:\n  replicas: 2\n  selector:\n    matchLabels:\n      app: tea\n  template:\n    metadata:\n      labels:\n        app: tea\n    spec:\n      containers:\n      - name: tea\n        image: registry.${ALIYUN::Region}.aliyuncs.com/acs-sample/nginxdemos:latest\n        ports:\n        - containerPort: 80\n        resources:\n          limits:\n            cpu: 500m\n            memory: 1Gi\n          requests:\n            cpu: 500m\n            memory: 512Mi\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: tea-svc\nspec:\n  ports:\n  - port: 80\n    targetPort: 80\n    protocol: TCP\n  selector:\n    app: tea\n  type: NodePort"
        }
      }
    },
    "AlbConfig": {
      "Type": "ALIYUN::CS::ClusterApplication",
      "DependsOn": "InstallBackendApp",
      "Properties": {
        "ClusterId": {
          "Ref": "AckCluster"
        },
        "YamlContent": {
          "Fn::Sub": "apiVersion: alibabacloud.com/v1\nkind: AlbConfig\nmetadata:\n  name: k8s-hpa-alb-config\nspec:\n  config:\n    name: k8s-hpa-alb\n    addressType: Internet\n    zoneMappings:\n    - vSwitchId: ${VSwitch1}\n    - vSwitchId: ${VSwitch2}\n    accessLogConfig:\n      logProject: ${SlsProject}\n      logStore: \"alb_k8s_hpa_sls_logstore\"\n  listeners:\n    - port: 80\n      protocol: HTTP"
        }
      }
    },
    "IngressClass": {
      "Type": "ALIYUN::CS::ClusterApplication",
      "DependsOn": "AlbConfig",
      "Properties": {
        "ClusterId": {
          "Ref": "AckCluster"
        },
        "YamlContent": {
          "Fn::Sub": "apiVersion: networking.k8s.io/v1\nkind: IngressClass\nmetadata:\n  name: k8s-hpa-alb-ingress-class\nspec:\n  controller: ingress.k8s.alibabacloud/alb\n  parameters:\n    apiGroup: alibabacloud.com\n    kind: AlbConfig\n    name: k8s-hpa-alb-config"
        }
      }
    },
    "Ingress": {
      "Type": "ALIYUN::CS::ClusterApplication",
      "DependsOn": "IngressClass",
      "Properties": {
        "ClusterId": {
          "Ref": "AckCluster"
        },
        "YamlContent": {
          "Fn::Sub": "apiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: k8s-hpa-alb-ingress\nspec:\n  ingressClassName: k8s-hpa-alb-ingress-class\n  rules:\n   - http:\n      paths:\n      - path: /tea\n        pathType: ImplementationSpecific\n        backend:\n          service:\n            name: tea-svc\n            port:\n              number: 80\n      - path: /coffee\n        pathType: ImplementationSpecific\n        backend:\n          service:\n            name: coffee-svc\n            port: \n              number: 80"
        }
      }
    },
    "Hpa": {
      "Type": "ALIYUN::CS::ClusterApplication",
      "DependsOn": "WaitAlbIngress",
      "Properties": {
        "ClusterId": {
          "Ref": "AckCluster"
        },
        "YamlContent": {
          "Fn::Sub": "apiVersion: autoscaling/v2\nkind: HorizontalPodAutoscaler\nmetadata:\n  name: k8s-alb-tea-hpa\nspec:\n  scaleTargetRef:\n    apiVersion: apps/v1\n    kind: Deployment\n    name: tea\n  minReplicas: 2\n  maxReplicas: 10\n  metrics:\n    - type: External\n      external:\n        metric:\n          name: sls_alb_ingress_qps\n          selector:\n            matchLabels:\n              sls.project: ${SlsProject}\n              sls.logstore: \"alb_k8s_hpa_sls_logstore\" \n              sls.ingress.route: \"default-tea-svc-80\"\n        target:\n          type: AverageValue\n          averageValue: 2\n    - resource:\n        name: cpu\n        target:\n          averageUtilization: 80\n          type: Utilization\n      type: Resource\n    - resource:\n        name: memory\n        target:\n          averageUtilization: 80\n          type: Utilization\n      type: Resource"
        }
      }
    },
    "WaitAlbIngress": {
      "Type": "ALIYUN::ROS::Sleep",
      "DependsOn": "Ingress",
      "Properties": {
        "CreateDuration": 120
      }
    },
    "IngressInfo": {
      "Type": "DATASOURCE::CS::ClusterApplicationResources",
      "DependsOn": "WaitAlbIngress",
      "Properties": {
        "ClusterId": {
          "Ref": "AckCluster"
        },
        "Kind": "Ingress",
        "Namespace": "default",
        "JsonPath": "$.items.[0].status.loadBalancer.ingress.[0].hostname",
        "FirstMatch": true
      }
    }
  },
  "Outputs": {
    "TeaUrl": {
      "Description": {
        "zh-cn": "The endpoint of the tea service.",
        "en": "The addresses of tea service."
      },
      "Value": {
        "Fn::Sub": "http://${IngressInfo}/tea"
      }
    },
    "CoffeeUrl": {
      "Description": {
        "zh-cn": "The endpoint of the coffee service.",
        "en": "The addresses of coffee service."
      },
      "Value": {
        "Fn::Sub": "http://${IngressInfo}/coffee"
      }
    }
  },
  "Metadata": {
    "ALIYUN::ROS::Interface": {
      "ParameterGroups": [
        {
          "Parameters": [
            "SlsProjectName",
            "ManagedKubernetesClusterName",
            "ZoneId1",
            "ZoneId2",
            "InstanceType",
            "InstancePassword"
          ]
        }
      ],
      "TemplateTags": [
        "acs:technical-solution:micro:Implement horizontal scaling for containerized applications using HPA-tech_solu_125"
      ],
      "Hidden": [
        "CommonName"
      ]
    }
  }
}
```

For more examples, see [Public templates that contain this resource](https://ros.console.alibabacloud.com/cn-hangzhou/templates/public?resourceType=ALIYUN::CS::ClusterNodePool).

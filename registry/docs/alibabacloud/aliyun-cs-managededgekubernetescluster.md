Use ALIYUN::CS::ManagedEdgeKubernetesCluster to create an ACK managed edge Kubernetes cluster.

## Syntax

```
{ 
  "Type": "ALIYUN::CS::ManagedEdgeKubernetesCluster",
  "Properties": {
    "Profile": String,
    "VpcId": String,
    "ServiceCidr": String,
    "Name": String,
    "Tags": List,
    "ProxyMode": String,
    "SnatEntry": Boolean,
    "LoginPassword": String,
    "KeyPair": String,
    "Addons": List,
    "EndpointPublicAccess": Boolean,
    "TimeoutMins": Number,
    "ClusterSpec": String,
    "ContainerCidr": String,
    "CloudMonitorFlags": Boolean,
    "IsEnterpriseSecurityGroup": Boolean,
    "NodeCidrMask": String,
    "DeletionProtection": Boolean,
    "ResourceGroupId": String,
    "RrsaConfig": Map,
    "MaintenanceWindow": Map,
    "ZoneIds": List,
    "VSwitchIds": List,
    "NodePools": List,
    "EncryptionProviderKey": String,
    "KubernetesVersion": String,
    "IpStack": String
  }
}
```

## Properties

**Property name**

**Type**

**Required**

**Update allowed**

**Description**

**Constraints**

Name

String

Yes

No

The name of the cluster.

The name must start with a letter or a digit. It can contain letters, Chinese characters, digits, and hyphens (-).

Addons

List

No

No

The list of components to install in the cluster.

Valid values:

-   Network component
    
    Flannel and Terway are supported. You must select one when you create the cluster:
    
    -   Flannel network: `[{"Name":"flannel","Config":""}]`.
        
    -   Terway network: `[{"Name": "terway-eniip","Config": ""}]`.
        
-   Storage component
    
    CSI and FlexVolume are supported:
    
    -   csi: `[{"Name":"csi-plugin","Config": ""},{"Name": "csi-provisioner","Config": ""}]`.
        
    -   flexvolume: `[{"Name": "flexvolume","Config": ""}]`.
        
-   Log component (Optional)
    
    **Note**
    
    If you do not enable Simple Log Service, you cannot use the cluster auditing feature.
    
    -   Use an existing SLS project: `[{"Name": "logtail-ds","Config": "{\"IngressDashboardEnabled\":\"true\",\"sls_project_name\":\"your_sls_project_name\"}"}]`.
        
    -   Create a new SLS project: `[{"Name": "logtail-ds","Config": "{\"IngressDashboardEnabled\":\"true\"}"}]`.
        
-   Ingress component (Optional)
    
    The nginx-ingress-controller Ingress component is installed in ACK Dedicated clusters by default.
    
    -   Install the Ingress component and enable internet access: `[{"Name":"nginx-ingress-controller","Config":"{\"IngressSlbNetworkType\":\"internet\"}"}]`.
        
    -   Do not install the Ingress component: `[{"Name": "nginx-ingress-controller","Config": "","Disabled": true}]`.
        
-   Event Center (Optional, enabled by default)
    
    Event Center provides features such as storage, query, and alerting for Kubernetes events. The Logstore associated with the Kubernetes Event Center is free for 90 days. For more information, see [Create and use a Kubernetes event center](/help/en/sls/create-and-use-an-event-center#task-2389213).
    
    Enable Event Center: `[{"Name":"ack-node-problem-detector","Config":"{\"sls_project_name\":\"your_sls_project_name\"}"}]`.
    

For more information, see [Addons properties](#section-0xt-i2a-ga9).

CloudMonitorFlags

Boolean

No

No

Specifies whether to install the CloudMonitor agent.

Valid values:

-   true: The component is installed.
    
-   false (default): Do not install the agent.
    

ClusterSpec

String

No

No

The type of the managed cluster.

Valid values:

-   ack.pro.small: a professional managed cluster, which is an ACK@Edge Pro cluster.
    
-   ack.standard (default): a standard managed cluster, which is an ACK@Edge standard cluster.
    

ContainerCidr

String

No

No

The CIDR block for pods.

This parameter is required when you create a cluster that uses the Flannel plugin. The value must be a valid private CIDR block or a subnet of the following CIDR blocks:

-   10.0.0.0/8
    
-   172.16-31.0.0/12-16
    
-   192.168.0.0/16
    

The CIDR block cannot overlap with the VPC CIDR block or the CIDR blocks of existing Kubernetes clusters in the VPC. This parameter cannot be changed after the cluster is created.

For more information about network planning, see [Plan CIDR blocks for an ACK managed cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/kubernetes-cluster-network-planning#concept-izq-sg4-vdb).

RrsaConfig

Map

No

No

The configurations of RRSA.

For more information, see [RrsaConfig properties](#7c4b89e461mew).

DeletionProtection

Boolean

No

Yes

Specifies whether to enable deletion protection.

If deletion protection is enabled, the cluster cannot be directly deleted. Valid values:

-   true: Enabled.
    
-   false (default): Disabled.
    

EndpointPublicAccess

Boolean

No

No

Specifies whether to expose the API server to the internet.

Valid values:

-   true (default): Expose the API server to the internet.
    
-   false: Expose the API server to the internal network only.
    

IsEnterpriseSecurityGroup

Boolean

No

No

Determines whether to create an advanced security group.

This parameter takes effect only when SecurityGroupId is left empty. Valid values:

-   true: Create an enterprise security group. For clusters that have Terway installed, you must create an enterprise security group.
    
-   false (default value): The item is not created.
    

KeyPair

String

No

No

The name of the key pair.

You can specify either LoginPassword or KeyPair.

LoginPassword

String

No

No

The logon password.

The password must be 8 to 30 characters in length. It must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. The supported special characters are: ``( ) ` ~ ! @ # $ % ^ & * - + = | { } [ ] : ; ‘ < > , . ? /``.

You can specify either LoginPassword or KeyPair.

NodeCidrMask

String

No

No

The maximum number of CIDR blocks that can be assigned to a node.

The number is determined by the specified pod CIDR block. This parameter takes effect only when the cluster uses the Flannel plugin.

Default value: 25.

Profile

String

No

No

The identifier of the edge cluster.

Default value: Edge.

ProxyMode

String

No

No

The kube-proxy proxy mode.

Valid values:

-   iptables (default)
    
-   ipvs
    

ResourceGroupId

String

No

Yes

The ID of the resource group to which the cluster belongs.

None

ServiceCidr

String

No

No

The service CIDR block.

The CIDR block cannot overlap with the VPC CIDR block or the container CIDR block. If you let the system automatically create a VPC, the default CIDR block is 172.19.0.0/20.

SnatEntry

Boolean

No

No

Specifies whether to configure an SNAT entry for the network.

Valid values:

-   true: Indicates a configuration.
    
-   false (default): Unconfigured.
    

**Note**

If you use the VPC that is automatically created by the system, you must set this property to true. If you use an existing VPC that is not automatically created by the system, you must specify this property based on whether the VPC can access the Internet.

MaintenanceWindow

Map

No

Yes

The cluster maintenance window configuration.

For more information, see [MaintenanceWindow properties](#d586767f4ayfe).

Tags

List

No

Yes

The tags.

You can add up to 20 tags.

For more information, see [the Tags property](#section-zen-fvt-4uh).

TimeoutMins

Number

No

No

The timeout period for cluster stack creation.

Default value: 60.

Unit: minutes.

VSwitchIds

List

No

No

The vSwitches to which the worker nodes are attached.

None

VpcId

String

No

No

The ID of the virtual private cloud (VPC).

If this parameter is left empty, the system automatically creates a VPC with the CIDR block 192.168.0.0/16.

VpcId and VSwitchIds must both be specified, or both be left empty.

ZoneIds

List

No

No

The list of zones.

None

NodePools

List

No

No

The information about the node pools.

For more information, see [NodePools properties](#title-9mz-xm3-boq).

EncryptionProviderKey

String

No

No

The ID of a key managed by Key Management Service (KMS).

This key encrypts data disks. You can use KMS only in ACK Pro clusters.

IpStack

String

No

No

The IP protocol stack of the cluster.

Valid values:

-   ipv4
    
-   ipv6
    

KubernetesVersion

String

No

Yes

The version of the cluster. This version is consistent with the Kubernetes community baseline. Select the latest version.

You can create clusters of the two latest versions. For more information about the Kubernetes versions that ACK supports, see [Version Guide](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/support-for-kubernetes-versions/#task-1960241).

## MaintenanceWindow syntax

```
"MaintenanceWindow": {
  "Enable": Boolean,
  "MaintenanceTime": String,
  "Duration": String,
  "WeeklyPeriod": String,
  "Recurrence": String
}
```

## MaintenanceWindow properties

**Property name**

**Type**

**Required**

**Updatable**

**Description**

**Constraints**

Duration

String

No

Yes

The duration of the maintenance window.

The value must be an integer from 1 to 24. The unit is hours.

Default value: 3h.

Enable

Boolean

No

Yes

Specifies whether to enable the maintenance window.

Valid values:

-   `true`: The maintenance window is enabled.
    
-   `false`: The maintenance window is disabled.
    

Default value: `false`.

MaintenanceTime

String

No

Yes

The start time of the maintenance window.

The RFC 3339 format.

WeeklyPeriod

String

No

Yes

The maintenance period.

Separate multiple values with commas (,). Valid values: {Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday}

Default value: `Thursday`.

Recurrence

String

No

Yes

The recurrence rule for the maintenance window, defined using RFC5545 Recurrence Rule syntax.

Only FREQ=WEEKLY is supported. The COUNT and UNTIL parameters are not supported.

## NodePools syntax

```
"NodePools": [
  {
    "ScalingGroup": Map,
    "KubernetesConfig": Map,
    "NodePoolInfo": Map
  }
]
```

## NodePools properties

**Property name**

**Type**

**Required**

**Allow Updates**

**Description**

**Constraints**

ScalingGroup

Map

Yes

No

The scale-out group configuration for the node pool.

For more information, see [ScalingGroup properties](/help/en/ros/developer-reference/aliyun-cs-managedkubernetescluster#section-hus-jhr-cqw).

KubernetesConfig

Map

No

No

The cluster configuration.

For more information, see [KubernetesConfig properties](/help/en/ros/developer-reference/aliyun-cs-managedkubernetescluster#section-j8m-iq4-w61).

NodePoolInfo

Map

No

No

The node pool configuration.

For more information, see [NodePoolInfo properties](/help/en/ros/developer-reference/aliyun-cs-managedkubernetescluster#section-evn-e5y-ml3).

## NodePoolInfo syntax

```
"NodePoolInfo": {
  "Name": String,
  "Type": String,
  "ResourceGroupId": String
}
```

## NodePoolInfo properties

**Property name**

**Type**

**Required**

**Allow updates**

**Description**

**Constraints**

ResourceGroupId

String

No

Yes

The resource group to which the node pool belongs.

None

Name

String

Yes

No

The name of the node pool.

None

Type

String

No

No

The type of the node pool.

Valid values:

-   ess: an ESS node pool.
    
-   edge: an edge node pool.
    

## KubernetesConfig syntax

```
"KubernetesConfig": {
  "Runtime": String,
  "RuntimeVersion": String,
  "CpuPolicy": String,
  "Labels": List,
  "NodeNameMode": String,
  "Taints": List
}
```

## KubernetesConfig properties

**Property name**

**Type**

**Required**

**Updatable**

**Description**

**Constraints**

Runtime

String

Yes

No

The container runtime.

None

RuntimeVersion

String

Yes

No

The version of the container runtime.

None

CpuPolicy

String

No

No

The CPU management policy for the node.

The following two policies are supported for clusters of version 1.12.6 or later:

-   static: Enhances CPU affinity and exclusivity for Pods with specific resource features on a node.
    
-   none (default): Enables the existing default CPU affinity scheme.
    

Labels

List

No

No

The node labels.

Adds labels to Kubernetes cluster nodes.

For more information, see [Labels properties](/help/en/ros/developer-reference/aliyun-cs-managedkubernetescluster#title-xq1-yca-zcs).

NodeNameMode

String

No

No

The custom node name.

The node name consists of three parts: a prefix, a substring of the node's IP address, and a suffix.

-   The prefix and suffix can consist of one or more parts separated by periods (.). Each part can contain lowercase letters, digits, and hyphens (-). The node name must start and end with a lowercase letter or a digit.
    
-   The IP address segment length specifies the number of digits to take from the end of the node's IP address. The value can be from 5 to 12.
    

For example, if the node IP address is 192.168.XX.XX, the prefix is `aliyun.com`, the IP address segment length is 5, and the suffix is test, the node name is `aliyun.com0****test`.

Taints

List

No

No

The taint configuration.

For more information, see [Taints properties](/help/en/ros/developer-reference/aliyun-cs-managedkubernetescluster#section-fso-y2v-ktv).

## Label syntax

```
"Labels": {
 "Value": String,
 "Key": String
}
```

## Labels properties

**Property name**

**Type**

**Required**

**Update allowed**

**Description**

**Constraints**

Key

String

Yes

No

The tag key.

None

Value

String

Yes

No

The tag value.

None

## Taints syntax

```
"Taints": [{
 "Value": String,
 "Effect": String,
 "Key": String
}]
```

## Taint properties

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

The name of the taint.

None

Value

String

Yes

No

The value of the taint.

None

Effect

String

No

No

The scheduling policy.

-   NoSchedule (default): New pods that do not tolerate the taint are not scheduled on the node. This effect does not affect existing pods.
    
-   NoExecute: Pods that do not tolerate the taint are evicted from the node.
    
-   PreferNoSchedule: A soft constraint. The scheduler tries to avoid placing pods that do not tolerate the taint on the node. Existing pods are not affected.
    

## ScalingGroup syntax

```
"ScalingGroup": {
  "SocEnabled": Boolean,
  "ImageType": String,
  "InstancePatterns": List,
  "SecurityHardeningOs": Boolean,
  "RdsInstances": List,
  "IsEnterpriseSecurityGroup": Boolean,
  "VSwitchIds": List,
  "InternetMaxBandwidthOut": Integer,
  "DataDisks": List,
  "Period": Integer,
  "InternetChargeType": String,
  "KeyPair": String,
  "SystemDiskPerformanceLevel": String,
  "ImageId": String,
  "InstanceTypes": List,
  "SystemDiskCategory": String,
  "PeriodUnit": String,
  "LoginPassword": String,
  "InstanceChargeType": String,
  "SystemDiskSize": Integer,
  "Tags": List,
  "ZoneIds": List,
  "DesiredSize": Integer
}
```

## ScalingGroup properties

**Property name**

**Type**

**Required**

**Updatable**

**Description**

**Constraints**

InstanceTypes

List

No

No

The instance types.

None

SystemDiskSize

Integer

Yes

No

The size of the node's system disk.

Unit: GiB.

Value range: 40 to 500.

VSwitchIds

List

No

No

A list of virtual switch IDs.

None

SocEnabled

Boolean

No

No

Specifies whether to enable security hardening based on classified protection.

Valid values:

-   true: Enable.
    
-   false (default): Disable.
    

ImageType

String

No

No

The type of the operating system image.

None

InstancePatterns

List

No

No

The instance property configurations.

For more information, see [InstancePatterns properties](#ae4e9e59927cl).

SecurityHardeningOs

Boolean

No

No

Alibaba Cloud OS security hardening.

Valid values:

-   `true`: Enables Alibaba Cloud OS security hardening.
    
-   `false`: Disables Alibaba Cloud OS security hardening.
    

Default value: `false`.

DesiredSize

Integer

No

No

The expected number of nodes in the node pool.

None

DataDisks

List

No

No

The data disk configurations for the nodes in the node pool.

For more information, see [DataDisks properties](/help/en/ros/developer-reference/aliyun-cs-managedkubernetescluster#section-deh-gcu-kyb).

ImageId

String

No

No

The ID of the custom image.

By default, the system-provided image is used.

InstanceChargeType

String

No

No

The billing method for the nodes in the node pool.

Valid values:

-   Prepaid (subscription).
    
-   PostPaid (default): pay-as-you-go.
    

InternetChargeType

String

No

No

The billing method for the public IP address.

Valid values:

-   PayByBandwidth: The pay-by-bandwidth billing method.
    
-   PayByTraffic: pay-by-traffic.
    

InternetMaxBandwidthOut

Integer

No

No

The maximum outbound bandwidth of the public IP address for the node.

Unit: Mbps.

Value range: 1 to 100.

IsEnterpriseSecurityGroup

Boolean

No

No

An enterprise-level security group is automatically created.

Valid values:

-   true: Creates and uses an enterprise security group.
    
-   false: Does not use an enterprise security group.
    

KeyPair

String

No

No

The name of the key pair for password-free logon.

Specify either \`KeyPair\` or \`LoginPassword\`.

LoginPassword

String

No

No

The SSH logon password.

Specify either \`KeyPair\` or \`LoginPassword\`.

The password must be 8 to 30 characters long and contain uppercase letters, lowercase letters, digits, and special characters.

Period

Integer

No

No

The subscription duration for the nodes in the node pool.

This property is required and takes effect only when \`InstanceChargeType\` is set to \`PrePaid\`.

When period\_unit is set to Month, the valid values for period are 1, 2, 3, 6, and 12.

Default value: 1.

PeriodUnit

String

No

No

The billing cycle for the nodes in the node pool.

This property is required when \`InstanceChargeType\` is set to \`PrePaid\`.

Month: The time unit is months.

RdsInstances

List

No

No

The ApsaraDB RDS instance IDs.

None

SystemDiskCategory

String

No

No

The category of the node's system disk.

Valid values:

-   cloud\_efficiency (default): ultra disk.
    
-   cloud\_ssd: standard SSD.
    
-   cloud\_essd: enterprise SSD (ESSD).
    

SystemDiskPerformanceLevel

String

No

No

The performance level of the node's system disk.

This property takes effect only for ESSDs.

Tags

List

No

No

You can add tags only to ECS instances.

For more information, see [Tags properties](/help/en/ros/developer-reference/aliyun-cs-managedkubernetescluster#section-sao-4g8-748).

ZoneIds

List

No

No

Availability zones

None

## RrsaConfig syntax

```
"RrsaConfig": 
  {
    "Enabled": Boolean
  }
```

## RrsaConfig properties

**Property name**

**Type**

**Required**

**Update allowed**

**Description**

**Constraints**

Enabled

Boolean

Yes

No

Specifies whether to enable RAM Roles for Service Accounts (RRSA).

Valid values:

-   true: Enabled.
    
-   false: Disabled.
    

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

**Enable updates**

**Description**

**Constraints**

Key

String

Yes

No

The tag key.

The length must be 1 to 64 characters. The key cannot start with `aliyun`, `acs:`, `https://`, or `http://`.

Value

String

Yes

No

The tag value.

The length can be 0 to 128 characters. The value cannot start with `aliyun`, `acs:`, `https://`, or `http://`.

## Addons syntax

```
"Addons": [
  {
    "Disabled": Boolean,
    "Config": String,
    "Name": String,
    "Version": String
  }
]
```

## Addon properties

**Property name**

**Type**

**Required**

**Allow updates**

**Description**

**Constraints**

Name

String

Yes

No

The component name.

None

Config

String

No

No

The component configuration.

None

Disabled

Boolean

No

No

Specifies whether to disable the default installation of the component.

Valid values:

-   true: The component is not installed by default.
    
-   false (default): The component is installed by default.
    

Version

String

No

No

The addon version.

The latest version is used by default.

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

**Allow updates**

**Description**

**Constraints**

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

The minimum memory size of the instance type.

The unit is GiB.

Memory

Integer

No

No

The memory size of the instance type.

The unit is GiB.

InstanceFamilyLevel

String

No

No

The level of the instance family.

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

You can specify the instance family.

None

InstanceCategories

List

No

No

The instance classification.

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

The maximum memory size of the instance type.

The unit is GiB.

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

**Allow Updates**

**Description**

**Constraints**

AutoSnapshotPolicyId

String

No

No

The ID of the automatic snapshot policy for the disk. The disk is automatically backed up based on this policy.

By default, this parameter is empty, and automatic backups are disabled.

Category

String

No

No

The type of the data disk.

Valid values:

-   cloud\_efficiency (default): ultra disk.
    
-   cloud\_ssd: standard SSD.
    
-   cloud\_essd: enterprise SSD (ESSD).
    

Encrypted

Boolean

No

No

Specifies whether to encrypt the data disk.

Valid values:

-   true: Encrypts the data disk.
    
-   false (default): Does not encrypt the data disk.
    

PerformanceLevel

String

No

No

You can set the performance level of the cloud disk.

Valid values:

-   PL1: A maximum of 50,000 random read/write IOPS per disk.
    
-   PL2: A maximum of 100,000 random read/write IOPS per disk.
    
-   PL3: A maximum of 1,000,000 random read/write IOPS per disk.
    

For more information, see [enterprise SSD (ESSD)](/help/en/ecs/user-guide/essds#concept-727754).

Size

Integer

No

No

The size of the data disk.

Value range: 40 to 32768.

Default value: 120.

Unit: GiB.

Categories

List

No

No

A list of data disk types.

None

## Return value

Fn::GetAtt

-   ClusterId: The ID of the cluster.
    
-   TaskId: The ID of the task. The system automatically assigns this ID. You can use this ID to query the task status.
    
-   DefaultUserKubeConfig: The default Kubernetes configuration for cluster credentials.
    
-   ScalingRuleId: The ID of the scaling rule.
    
-   ScalingGroupId: The ID of the scaling group.
    
-   PrivateUserKubConfig: The private Kubernetes configuration for cluster credentials.
    
-   ScalingConfigurationId: The ID of the scaling configuration.
    
-   Nodes: The list of cluster nodes.
    
-   APIServerSLBId: The ID of the API Server Load Balancer.
    
-   IngressSLBId: The ID of the Ingress Server Load Balancer.
    
-   WorkerRamRoleName: The name of the worker node RAM role.
    

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Description: Test ManagedEdgeKubernetesCluster
Parameters:
  VSwitchZoneId:
    Type: String
    AssociationProperty: ALIYUN::ECS::Instance::ZoneId
    Description: The zone ID for the vSwitch.
    Label: VSwitch Zone ID
  VpcId:
    Type: String
    Default: Null
    AssociationProperty: ALIYUN::ECS::VPC::VPCId
    Description: The ID of the VPC. The ID starts with vpc- and is available in the Virtual Private Cloud console.
    Label: Existing VPC ID
  VSwitchId:
    Type: String
    Default: Null
    AssociationProperty: ALIYUN::ECS::VSwitch::VSwitchId
    Description: The ID of the vSwitch. The ID starts with vsw- and is available on the VSwitches page of the VPC console.
    Label: VSwitch ID
    AssociationPropertyMetadata:
      ZoneId: ${VSwitchZoneId}
      VpcId: ${VpcId}
  ClusterName:
    Type: String
    Default: mytest
  Password:
    Type: String
    Description: The logon password for the server. The password must be 8 to 30 characters long and include characters from three of the following types: uppercase letters, lowercase letters, digits, and special characters. Supported special characters: ()`~!@#$%^*_-+=|{}[]:;,.?
    MinLength: 8
    Label: Instance Password
    NoEcho: true
    MaxLength: 30
    ConstraintDescription: The password must be 8 to 30 characters long and include characters from three of the following types: uppercase letters, lowercase letters, digits, and special characters. Supported special characters: ()`~!@#$%^*_-+=|{}[]:;',.?/
  NumOfNodes:
    Type: Number
    Default: 1
    MinValue: 0
    MaxValue: 300
Resources:
  Cluster:
    Type: ALIYUN::CS::ManagedEdgeKubernetesCluster
    Properties:
      NumOfNodes:
        Ref: NumOfNodes
      Name:
        Ref: ClusterName
      LoginPassword:
        Ref: Password
      VpcId:
        Ref: VpcId
      VSwitchIds:
        - Ref: VSwitchId
      ServiceCidr: 172.19.0.0/20
Outputs:
  ClusterId:
    Value:
      Fn::GetAtt:
        - Cluster
        - ClusterId
  TaskId:
    Value:
      Fn::GetAtt:
        - Cluster
        - TaskId
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Description": "Test ManagedEdgeKubernetesCluster",
  "Parameters": {
    "VSwitchZoneId": {
      "Type": "String",
      "AssociationProperty": "ALIYUN::ECS::Instance::ZoneId",
      "Description": "The zone ID for the vSwitch.",
      "Label": "VSwitch Zone ID"
    },
    "VpcId": {
      "Type": "String",
      "Default": null,
      "AssociationProperty": "ALIYUN::ECS::VPC::VPCId",
      "Description": "The ID of the VPC. The ID starts with vpc- and is available in the Virtual Private Cloud console.",
      "Label": "Existing VPC ID"
    },
    "VSwitchId": {
      "Type": "String",
      "Default": null,
      "AssociationProperty": "ALIYUN::ECS::VSwitch::VSwitchId",
      "Description": "The ID of the vSwitch. The ID starts with vsw- and is available on the VSwitches page of the VPC console.",
      "Label": "VSwitch ID",
      "AssociationPropertyMetadata": {
        "ZoneId": "${VSwitchZoneId}",
        "VpcId": "${VpcId}"
      }
    },
    "ClusterName": {
      "Type": "String",
      "Default": "mytest"
    },
    "Password": {
      "Type": "String",
      "Description": "The logon password for the server. The password must be 8 to 30 characters long and include characters from three of the following types: uppercase letters, lowercase letters, digits, and special characters. Supported special characters: ()`~!@#$%^*_-+=|{}[]:;,.?",
      "MinLength": 8,
      "Label": "Instance Password",
      "NoEcho": true,
      "MaxLength": 30,
      "ConstraintDescription": "The password must be 8 to 30 characters long and include characters from three of the following types: uppercase letters, lowercase letters, digits, and special characters. Supported special characters: ()`~!@#$%^*_-+=|{}[]:;',.?/"
    },
    "NumOfNodes": {
      "Type": "Number",
      "Default": 1,
      "MinValue": 0,
      "MaxValue": 300
    }
  },
  "Resources": {
    "Cluster": {
      "Type": "ALIYUN::CS::ManagedEdgeKubernetesCluster",
      "Properties": {
        "NumOfNodes": {
          "Ref": "NumOfNodes"
        },
        "Name": {
          "Ref": "ClusterName"
        },
        "LoginPassword": {
          "Ref": "Password"
        },
        "VpcId": {
          "Ref": "VpcId"
        },
        "VSwitchIds": [
          {
            "Ref": "VSwitchId"
          }
        ],
        "ServiceCidr": "172.19.0.0/20"
      }
    }
  },
  "Outputs": {
    "ClusterId": {
      "Value": {
        "Fn::GetAtt": [
          "Cluster",
          "ClusterId"
        ]
      }
    },
    "TaskId": {
      "Value": {
        "Fn::GetAtt": [
          "Cluster",
          "TaskId"
        ]
      }
    }
  }
}
```

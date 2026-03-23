The ALIYUN::CS::ManagedKubernetesCluster type creates ACK managed clusters.

## Syntax

```
{
  "Type": "ALIYUN::CS::ManagedKubernetesCluster",
  "Properties": {
    "CloudMonitorFlags": Boolean,
    "ProxyMode": String,
    "SnatEntry": Boolean,
    "VpcId": String,
    "Tags": List,
    "LoginPassword": String,
    "ContainerCidr": String,
    "Name": String,
    "Taint": List,
    "KeyPair": String,
    "Addons": List,
    "ServiceCidr": String,
    "KubernetesVersion": String,
    "SecurityGroupId": String,
    "EndpointPublicAccess": Boolean,
    "RrsaConfig": Map,
    "ClusterSpec": String,
    "TimeoutMins": Number,
    "PodVswitchIds": List,
    "EncryptionProviderKey": String,
    "Runtime": Map,
    "SocEnabled": Boolean,
    "UserData": String,
    "OsType": String,
    "IsEnterpriseSecurityGroup": Boolean,
    "Platform": String,
    "LoadBalancerSpec": String,
    "FormatDisk": Boolean,
    "NodeCidrMask": String,
    "KeepInstanceName": Boolean,
    "DeletionProtection": Boolean,
    "ResourceGroupId": String,
    "NodePools": List,
    "NodeNameMode": String,
    "SecurityHardeningOs": Boolean,
    "DeleteOptions": List,
    "ControlPlaneLogComponents": List,
    "ControlPlaneLogTtl": Number,
    "ControlPlaneLogProject": String,
    "MaintenanceWindow": Map,
    "ZoneIds": List,
    "VSwitchIds": List,
    "TimeZone": String,
    "IpStack": String
  }
}
```

## Properties

**Property Name**

**Type**

**Required**

**Updatable**

**Description**

**Constraints**

Name

String

Yes

No

The cluster name.

Length: 1 to 63 characters. Can contain letters, Chinese characters, numbers, and hyphens (-).

VpcId

String

Yes

No

The virtual private cloud (VPC) ID.

If not set, the system automatically creates a VPC with a CIDR block of 192.168.0.0/16.

Set both `VpcId` and `VSwitchIds` or leave both empty.

Addons

List

No

Yes

The combination of Addon plugins for the Kubernetes cluster.

Values:

-   Network components
    
    Supports Flannel and Terway network types. Choose one when creating the cluster:
    
    -   Flannel network: `[{"Name":"flannel","Config":""}]`.
        
    -   Terway network: `[{"Name": "terway-eniip","Config": ""}]`.
        
-   Storage components
    
    Supports `csi` and `flexvolume` types:
    
    -   CSI: `[{"Name":"csi-plugin","Config": ""},{"Name": "csi-provisioner","Config": ""}]`.
        
    -   FlexVolume: `[{"Name": "flexvolume","Config": ""}]`.
        
-   Log components (optional)
    
    **Note**
    
    If you do not enable Simple Log Service, you cannot use the cluster auditing feature.
    
    -   Use an existing Simple Log Service project: `[{"Name": "logtail-ds","Config": "{\"IngressDashboardEnabled\":\"true\",\"sls_project_name\":\"your_sls_project_name\"}"}]`.
        
    -   Create a new Simple Log Service project: `[{"Name": "logtail-ds","Config": "{\"IngressDashboardEnabled\":\"true\"}"}]`.
        
-   Ingress components (optional)
    
    ACK Dedicated clusters install the nginx-ingress-controller Ingress component by default.
    
    -   Install Ingress and enable public network access: `[{"Name":"nginx-ingress-controller","Config":"{\"IngressSlbNetworkType\":\"internet\"}"}]`.
        
    -   Do not install Ingress: `[{"Name": "nginx-ingress-controller","Config": "","Disabled": true}]`.
        
-   Event Center (optional, enabled by default)
    
    You can use event centers to store and query Kubernetes events, and configure alerts. You can use the Logstores that are associated with K8s event centers free of charge within 90 days. For more information, see [Create and Use a K8s Event Center](/help/en/sls/create-and-use-an-event-center#task-2389213).
    
    Enable the Event Center: `[{"Name":"ack-node-problem-detector","Config":"{\"sls_project_name\":\"your_sls_project_name\"}"}]`.
    

For more information, see [Addons properties](#section-3nl-fca-4be).

SecurityHardeningOs

Boolean

No

No

Alibaba Cloud operating system security hardening.

Values:

-   true: Enable security-hardened operating system.
    
-   false: Disable security-hardened operating system.
    

Default: false.

CloudMonitorFlags

Boolean

No

No

Install the CloudMonitor agent.

Values:

-   true: Install the CloudMonitor agent.
    
-   false (default): Do not install the CloudMonitor agent.
    

ClusterSpec

String

No

No

The type of ACK managed cluster.

Values:

-   ack.pro.small: Professional managed cluster, an ACK Pro cluster.
    
-   ack.standard (default): Standard managed cluster.
    

ContainerCidr

String

No

No

The container CIDR block.

Cannot conflict with the VPC CIDR block. If the system automatically creates a VPC, it uses the 172.16.0.0/16 CIDR block by default.

DeletionProtection

Boolean

No

Yes

Enable deletion protection.

If enabled, you cannot directly delete the cluster. Values:

-   true: Enable.
    
-   false (default): Disable.
    

EncryptionProviderKey

String

No

No

The key ID managed by Key Management Service (KMS).

This key encrypts data disks. Use KMS only in professional managed Kubernetes clusters.

EndpointPublicAccess

Boolean

No

No

Enable public network access for the API server.

Values:

-   true: Enable.
    
-   false (default): Disable. Only a private network API server is created in this case.
    

FormatDisk

Boolean

No

No

Do you want to mount the data disk to the created node within the existing ECS instance?

Values:

-   true: Container and image data is stored on data disks. Original data on the disks will be overwritten. Back up data before mounting disks.
    
-   false (default): Do not store container and image data on data disks.
    

RrsaConfig

Map

No

No

RRSA configuration.

For more information, see [RrsaConfig property](#7c4b89e461mew).

IsEnterpriseSecurityGroup

Boolean

No

No

Create an advanced security group.

This parameter takes effect when SecurityGroupId is empty. Values:

-   true: Create. Clusters with Terway installed must create an advanced security group.
    
-   false (default): Do not create.
    

KeepInstanceName

Boolean

No

No

Retain the names of existing ECS instances used in the cluster.

Values:

-   true (default): Retain.
    
-   false: Do not retain. The system assigns new names.
    

KeyPair

String

No

No

The key pair name.

Specify either KeyPair or LoginPassword.

KubernetesVersion

String

No

Yes

The cluster version, consistent with the Kubernetes community baseline version. Choose the latest version.

You can create clusters of the two latest versions. For more information about the Kubernetes versions that ACK supports, see [Kubernetes Version Release Overview (Offline)](/help/en/ack/overview-of-kubernetes-versions-supported-by-ack#task-1960241).

LoadBalancerSpec

String

No

No

The SLB instance type.

Values:

-   slb.s1.small
    
-   slb.s2.small
    
-   slb.s2.medium
    
-   slb.s3.small
    
-   slb.s3.medium
    
-   slb.s3.large
    

LoginPassword

String

No

No

The SSH logon password.

Length: 8 to 30 characters. Must include letters, numbers, and special characters. Supported special characters are `( )'~!@#$%^&*-+=|{ }[ ]:;< >,.?/_`.

**Note**

Specify either LoginPassword or KeyPair.

NodeCidrMask

String

No

No

The maximum number of IP addresses assignable to a node.

The number depends on the specified pod CIDR. This parameter applies only when the cluster uses the Flannel plugin.

Default: 25.

NodeNameMode

String

No

No

Customize node names.

Node names consist of three parts: prefix + node IP address substring + suffix.

-   Both the prefix and suffix can consist of one or more parts separated by periods (.). Each part can contain lowercase letters, numbers, and hyphens (-). The node name must start and end with a lowercase letter or number.
    
-   The IP address segment length refers to the number of digits truncated from the end of the node IP address. Range: 5 to 12.
    

For example, if the node IP address is 192.168.XX.XX, the prefix is `aliyun.com`, the IP address segment length is 5, and the suffix is test, the node name is `aliyun.com0****test`.

NodePools

List

No

No

Node pool information.

For more information, see [NodePools properties](#section-vpn-du1-kzo).

OsType

String

No

No

The operating system type.

Values:

-   Windows
    
-   Linux (default)
    

Platform

String

No

No

The operating system release version.

Values:

-   CentOS (default)
    
-   AliyunLinux
    
-   QbootAliyunLinux
    
-   Qboot
    
-   Windows
    
-   WindowsCore
    

PodVswitchIds

List

No

No

The list of Pod vSwitches.

Specify at least one Pod vSwitch in the same zone for each node vSwitch. The Pod vSwitch cannot be the same as the node vSwitch.

Choose vSwitches with a CIDR block mask no greater than 19.

**Note**

When the cluster list (Addons) is set to network components and the Terway network type is used, you must specify PodVswitchIds for the cluster.

ProxyMode

String

No

No

The kube-proxy mode.

Values:

-   iptables (default)
    
-   IPVS
    

ResourceGroupId

String

No

Yes

The resource group ID to which the cluster belongs.

None

Runtime

Map

No

No

The container runtime.

Runtime includes the following two pieces of information:

-   name: The container runtime name.
    
-   version: The container runtime version.
    

Example:

```
{"name": "docker", "version": "19.03.5"}
```

For more information about selecting a container runtime, see [Comparison of containerd, sandboxed containers, and Docker runtimes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/comparison-of-docker-containerd-and-sandboxed-container#task-2455499).

For more information, see [Runtime properties](#b0e653b1f5gdw).

SecurityGroupId

String

No

No

The security group ID to which the cluster ECS instances belong.

None

ServiceCidr

String

No

No

The service CIDR block.

Cannot conflict with the VPC CIDR block or the container CIDR block. If the system automatically creates a VPC, it uses the 172.19.0.0/20 CIDR block by default.

SnatEntry

Boolean

No

No

Is SNAT configured for the network?

Values:

-   If the existing VPC can access the public network: false. No SNAT configuration is needed for the network.
    
-   If the existing VPC cannot access the public network:
    
    -   true: Configure SNAT to access the public network.
        
    -   false: Do not configure SNAT; public network access is not available.
        

SocEnabled

Boolean

No

No

Enable tiered protection hardening.

Values:

-   true: Enable.
    
-   false (default): Disable.
    

Tags

List

No

Yes

Cluster tags.

Set up to 20 tag groups.

For more information, see [Tags properties](#section-sao-4g8-748).

Taint

List

No

No

Taint nodes, typically for Pod scheduling policies.

If a Pod has a toleration that matches a node's taint, it can be scheduled to that node.

TimeoutMins

Number

No

No

The cluster creation timeout.

Default: 60.

Unit: minutes.

UserData

String

No

No

User data passed when creating ECS instances.

Content must be within 16 KB. No Base64 encoding is needed. Use escape characters for special characters.

DeleteOptions

List

No

Yes

Deletion options for cluster-associated resources.

For more information, see [DeleteOptions properties](#section-896-2am-28d).

ControlPlaneLogTtl

Number

No

Yes

The number of days to retain control plane component logs.

None

ControlPlaneLogComponents

List

No

Yes

The list of component names.

Specify which control plane component logs to collect.

Collect logs from apiserver, kcm, and scheduler components by default.

ControlPlaneLogProject

String

No

Yes

The Simple Log Service project for control plane component logs.

Use an existing project for log storage, or let the system automatically create one. If you choose automatic creation, the system creates a Simple Log Service project named `k8s-log-{ClusterID}`.

MaintenanceWindow

Map

No

Yes

Cluster maintenance window configuration.

For more information, see [MaintenanceWindow properties](#d586767f4ayfe).

VSwitchIds

List

Yes

No

The vSwitches bound to worker nodes.

None

ZoneIds

List

No

No

The list of zones.

None

TimeZone

String

No

No

The cluster's time zone.

None

IpStack

String

No

No

The cluster's IP protocol stack.

Values:

-   ipv4
    
-   ipv6
    

## NodePools Syntax

```
"NodePools": [
  {
    "ScalingGroup": Map,
    "KubernetesConfig": Map,
    "NodePoolInfo": Map
  }
]
```

## NodePools Properties

**Property Name**

**Type**

**Required**

**Updatable**

**Description**

**Constraints**

ScalingGroup

Map

Yes

No

Node pool scaling group configuration.

For more information, see [ScalingGroup properties](#section-hus-jhr-cqw).

KubernetesConfig

Map

No

No

Cluster-related configuration.

For more information, see [KubernetesConfig properties](#section-j8m-iq4-w61).

NodePoolInfo

Map

No

No

Node pool configuration.

For more information, see [NodePoolInfo properties](#section-evn-e5y-ml3).

## ScalingGroup Syntax

```
"ScalingGroup": {
  "InstancePatterns": List,
  "SocEnabled": Boolean,
  "ImageType": String,
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

## ScalingGroup Properties

**Property Name**

**Type**

**Required**

**Updatable**

**Description**

**Constraints**

InstanceTypes

List

No

No

Instance types.

None

SystemDiskSize

Integer

Yes

No

The size of the node system disk.

Unit: GiB.

Range: 40 to 500.

VSwitchIds

List

No

No

The list of vSwitch IDs.

None

SocEnabled

Boolean

No

No

Enable tiered protection hardening.

Values:

-   true: Enable.
    
-   false (default): Disable.
    

ImageType

String

No

No

The operating system image type.

None

InstancePatterns

List

No

No

Instance property configuration.

For more information, see [InstancePatterns property](#ae4e9e59927cl).

SecurityHardeningOs

Boolean

No

No

Alibaba Cloud OS security hardening.

Values:

-   `true`: Enable Alibaba Cloud OS security hardening.
    
-   `false`: Do not enable Alibaba Cloud OS security hardening.
    

Default: `false`.

DesiredSize

Integer

No

No

The desired number of nodes in the node pool.

None

DataDisks

List

No

No

Node pool data disk configuration.

For more information, see [DataDisks properties](#section-deh-gcu-kyb).

ImageId

String

No

No

The custom image ID.

Uses the system-provided image by default.

InstanceChargeType

String

No

No

The billing method for node pool nodes.

Values:

-   PrePaid: Subscription.
    
-   PostPaid (default): Pay-as-you-go.
    

InternetChargeType

String

No

No

The billing method for public IP addresses.

Values:

-   PayByBandwidth: Pay-by-bandwidth.
    
-   PayByTraffic: Pay-by-traffic.
    

InternetMaxBandwidthOut

Integer

No

No

The maximum outbound bandwidth for the node's public IP address.

Unit: Mbps.

Range: 1 to 100.

IsEnterpriseSecurityGroup

Boolean

No

No

Automatically create an enterprise-level security group.

Values:

-   true: Create and use an enterprise-level security group.
    
-   false: Do not use an enterprise-level security group.
    

KeyPair

String

No

No

The key pair name for passwordless logon.

Choose either the KeyPair or LoginPassword property.

LoginPassword

String

No

No

The SSH logon password.

Choose either KeyPair or LoginPassword.

Password rules: 8 to 30 characters, must include uppercase letters, lowercase letters, numbers, and special characters.

Period

Integer

No

No

The subscription duration for node pool nodes.

This property applies and is required when InstanceChargeType is set to PrePaid.

When period\_unit is set to Month, period range: {1, 2, 3, 6, 12}.

Default: 1.

PeriodUnit

String

No

No

The billing cycle for node pool nodes.

Specify the period when InstanceChargeType is set to PrePaid.

Month: A time unit equal to one calendar month.

RdsInstances

List

No

No

The ApsaraDB RDS instance ID.

None

SystemDiskCategory

String

No

No

The node system disk type.

Values:

-   cloud\_efficiency (default): Ultra disk.
    
-   cloud\_ssd: Standard SSD.
    
-   cloud\_essd: Enterprise SSD.
    

SystemDiskPerformanceLevel

String

No

No

The performance level of the node system disk.

Applies only to ESSD disks.

Tags

List

No

No

Add tags only to ECS instances.

For more information, see [Tags properties](#section-sao-4g8-748).

ZoneIds

List

No

No

The list of zones.

None

## DataDisks Syntax

```
"DataDisks": [
  {
    "AutoSnapshotPolicyId": String,
    "Encrypted": Boolean,
    "Size": Integer,
    "Category": String,
    "PerformanceLevel": String,
    "Categories": List
  }
]
```

## DataDisks Properties

**Property Name**

**Type**

**Required**

**Updatable**

**Description**

**Constraints**

AutoSnapshotPolicyId

String

No

No

Select the automatic snapshot policy ID.

Cloud disks are automatically backed up according to the snapshot policy.

Category

String

No

No

The data disk type.

Values:

-   Cloud: Basic disk
    
-   cloud\_efficiency (default): Ultra disk.
    
-   cloud\_ssd: Standard SSD.
    
-   cloud\_essd: Enterprise SSD.
    

Encrypted

Boolean

No

No

Specifies whether to encrypt the data disk.

Values:

-   true: Encrypt data disks.
    
-   false (default): Do not encrypt data disks.
    

PerformanceLevel

String

No

No

The performance level of the node data disk.

Applies only to ESSD disks. The disk performance level is related to disk size.

For more information, see [enterprise SSD](/help/en/ecs/user-guide/essds#concept-727754).

Size

Integer

No

No

The data disk size.

Unit: GiB.

Range: 40 to 32768.

Default: 120.

Categories

List

No

No

The list of data disk types.

None

## KubernetesConfig Syntax

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

## KubernetesConfig Properties

**Property Name**

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

The container runtime version.

None

CpuPolicy

String

No

No

Node CPU management policy.

The following two policies are supported when the cluster version is 1.12.6 or later:

-   static: Enhances CPU affinity and exclusivity for Pods with specific resource characteristics on nodes.
    
-   none (default): Enables the existing default CPU affinity scheme.
    

Labels

List

No

No

Node labels.

Add labels to Kubernetes cluster nodes.

For more information, see [Labels properties](#title-xq1-yca-zcs).

NodeNameMode

String

No

No

Customize node names.

Node names consist of three parts: prefix + node IP address substring + suffix.

-   Both the prefix and suffix can consist of one or more parts separated by periods (.). Each part can contain lowercase letters, numbers, and hyphens (-). The node name must start and end with a lowercase letter or number.
    
-   The IP address segment length refers to the number of digits truncated from the end of the node IP address. Range: 5 to 12.
    

For example, if the node IP address is 192.168.XX.XX, the prefix is `aliyun.com`, the IP address segment length is 5, and the suffix is test, the node name is `aliyun.com0****test`.

Taints

List

No

No

Taint configuration.

For more information, see [Taints properties](#section-fso-y2v-ktv).

## RrsaConfig Syntax

```
"RrsaConfig": 
  {
    "Enabled": Boolean
  }
```

## RrsaConfig Properties

**Property Name**

**Type**

**Required**

**Allow Updates**

**Description**

**Constraints**

Enabled

Boolean

Yes

No

Enable the RAM role for service account (RRSA) feature.

Values:

-   true: Enable
    
-   false: Disable
    

## InstancePatterns Syntax

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

## InstancePatterns Properties

**Property Name**

**Type**

**Required**

**Updatable**

**Description**

**Constraints**

CpuArchitectures

List

No

No

The CPU architecture of the instance.

Values:

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

Specify the instance family.

None

InstanceCategories

List

No

No

Instance categorization.

None

ExcludedInstanceTypes

List

No

No

Instance types to exclude.

None

MaxMemorySize

Integer

No

No

The maximum memory size for the instance type.

Unit: GiB.

## Labels Syntax

```
"Labels": {
 "Value": String,
 "Key": String
}
```

## Labels Properties

**Property Name**

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

None

Value

String

Yes

No

The tag value.

None

## Taints Syntax

```
"Taints": [{
 "Value": String,
 "Effect": String,
 "Key": String
}]
```

## Taints Properties

**Property Name**

**Type**

**Required**

**Updatable**

**Description**

**Constraints**

Key

String

Yes

No

The taint name.

None

Value

String

Yes

No

The taint value.

None

Effect

String

No

No

The scheduling policy.

-   NoSchedule (default): Cannot tolerate, but only affects the scheduling process. Already scheduled Pods are not affected. Applies only to newly added Pods.
    
-   NoExecute: Cannot tolerate. Pods are evicted when taints change.
    
-   PreferNoSchedule: Soft constraint. Existing Pods on the node are not affected.
    

## NodePoolInfo Syntax

```
"NodePoolInfo": {
  "Name": String,
  "Type": String,
  "ResourceGroupId": String
}
```

## NodePoolInfo Properties

**Property Name**

**Type**

**Required**

**Updatable**

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

The node pool name.

None

Type

String

No

No

The node pool type.

Values:

-   ess: ESS node pool.
    
-   edge: Edge node pool.
    

## MaintenanceWindow Syntax

```
"MaintenanceWindow": {
  "Enable": Boolean,
  "MaintenanceTime": String,
  "Duration": String,
  "WeeklyPeriod": String,
  "Recurrence": String
}
```

## MaintenanceWindow Properties

**Property Name**

**Type**

**Required**

**Updatable**

**Description**

**Constraints**

Duration

String

No

Yes

The maintenance duration.

Range: \[1, 24\]. Unit: hours.

Default: 3h.

Enable

Boolean

No

Yes

Enable the maintenance window.

Values:

-   `true`: Enable the maintenance window.
    
-   `false`: Do not enable the maintenance window.
    

Default: `false`.

MaintenanceTime

String

No

Yes

The maintenance start time.

RFC3339 standard format.

WeeklyPeriod

String

No

Yes

The maintenance period.

Separate multiple values with commas (,). Values: {Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday}

Default: `Thursday`.

Recurrence

String

No

Yes

The recurrence rule for the maintenance window, defined using RFC5545 Recurrence Rule syntax.

Currently supports only FREQ=WEEKLY. Does not support specifying COUNT or UNTIL.

## Tags Syntax

```
"Tags": [
  {
    "Key": String,
    "Value": String
  }
]
```

## Tags Properties

**Property Name**

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

Length: 1 to 64 characters. Cannot start with `aliyun`, `acs:`, `https://`, or `http://`.

Value

String

Yes

No

The tag value.

Length: 0 to 128 characters. Cannot start with `aliyun`, `acs:`, `https://`, or `http://`.

## Addons Syntax

```
"Addons": [
  {
    "Version": String,
    "Config": String,
    "Name": String,
    "Disabled": Boolean
  }
]
```

## Addons Properties

**Property Name**

**Type**

**Required**

**Updatable**

**Description**

**Constraints**

Name

String

Yes

No

The Addon plugin name.

None

Config

String

No

Yes

Addon plugin configuration.

None

Disabled

Boolean

No

No

Disable the default installation?

Values:

-   true (default): Disable default installation.
    
-   false: Enable default installation.
    

Version

String

No

No

The Addon plugin version.

Uses the latest version by default.

## DeleteOptions Syntax

```
"DeleteOptions": [
    {
      "DeleteMode": String,
      "ResourceType": String
    }
  ]
```

## DeleteOptions Properties

**Property Name**

**Type**

**Required**

**Updatable**

**Description**

**Constraints**

DeleteMode

String

No

Yes

The deletion policy for this resource type.

Values:

-   delete: Delete this resource type
    
-   retain: Retain this resource type
    

ResourceType

String

No

Yes

The resource type.

Values:

-   SLB: SLB resources created through service. Deleted by default, but you can choose to retain them.
    
-   ALB: ALB resources created by ALB Ingress Controller. Retained by default, but you can choose to delete them.
    
-   SLS\_Data: The Simple Log Service project used by the cluster logging feature. Retained by default, but you can choose to delete it.
    
-   SLS\_ControlPlane: The Simple Log Service project used by ACK managed cluster control plane logs. Retained by default, but you can choose to delete it.
    
-   PrivateZone: PrivateZone resources created by ACK Serverless clusters. Retained by default, but you can choose to delete them.
    

## Runtime Syntax

```
"Runtime": {
    "Name": String,
    "Version": String
  }
```

## Runtime Properties

**Property Name**

**Type**

**Required**

**Updatable**

**Description**

**Constraints**

Name

String

Yes

No

The container runtime name.

ACK supports the following three container runtimes.

-   `containerd`: Recommended. Supports all cluster versions.
    
-   `Sandboxed-Container.runv`: Sandboxed container. Provides higher isolation. Supports cluster versions 1.24 and earlier.
    
-   `docker`: Supports cluster versions 1.22 and earlier.
    

Default: `containerd`

Version

String

No

No

The container runtime version.

Defaults to the latest version.

For more information, see [Sandboxed Container Runtime Release Notes](/help/en/ack/product-overview/release-notes-of-sandboxed-container).

## Return Values

Fn::GetAtt

-   ClusterId: The cluster ID.
    
-   TaskId: The task ID. The system automatically assigns it so users can query the task status.
    
-   DefaultUserKubeConfig: The default Kubernetes configuration for user cluster credentials.
    
-   ScalingRuleId: The scaling rule ID.
    
-   ScalingGroupId: The scaling group ID.
    
-   PrivateUserKubConfig: The private Kubernetes configuration for user cluster credentials.
    
-   ScalingConfigurationId: The scaling configuration ID.
    
-   Nodes: The list of cluster nodes.
    
-   APIServerSLBId: The API server Server Load Balancer ID.
    
-   IngressSLBId: The Ingress Server Load Balancer ID.
    
-   WorkerRamRoleName: The worker RAM role name.
    

## Examples

### **Scenario 1:** Create an ACK managed cluster.

[Quick create](https://ros.console.alibabacloud.com/cn-hangzhou/templates/public/createStack?templateType=Example&templateUrl=https://ros-public-templates.oss-cn-hangzhou.aliyuncs.com/ros-templates/resources/cs/managed-kubernetes-cluster-case1.yml&pageTitle=Create a managed Kubernetes cluster&hideStepRow=true&hideStackConfig=true&isSimplified=true&balanceIntercept=true)

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Description: Test Create ManagedKubernetesCluster
Parameters: {}
Resources:
  Vpc:
    Type: ALIYUN::ECS::VPC
    Properties:
      VpcName: mytest
      CidrBlock: 192.168.0.0/16
  VSwitch:
    Type: ALIYUN::ECS::VSwitch
    Properties:
      VSwitchName: mytest
      VpcId:
        Ref: Vpc
      ZoneId:
        Fn::Select:
          - '0'
          - Fn::GetAZs:
              Ref: ALIYUN::Region
      CidrBlock: 192.168.1.0/24
  ManagedKubernetesCluster:
    Type: ALIYUN::CS::ManagedKubernetesCluster
    Properties:
      VSwitchIds:
        - Ref: VSwitch
      VpcId:
        Ref: Vpc
      ClusterSpec: ack.pro.small
      LoginPassword: Admin@123!
      Name: mytest
Outputs:
  ClusterId:
    Value:
      Fn::GetAtt:
        - ManagedKubernetesCluster
        - ClusterId
  TaskId:
    Value:
      Fn::GetAtt:
        - ManagedKubernetesCluster
        - TaskId         
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Description": "Test Create ManagedKubernetesCluster",
  "Parameters": {
  },
  "Resources": {
    "Vpc": {
      "Type": "ALIYUN::ECS::VPC",
      "Properties": {
        "VpcName": "mytest",
        "CidrBlock": "192.168.0.0/16"
      }
    },
    "VSwitch": {
      "Type": "ALIYUN::ECS::VSwitch",
      "Properties": {
        "VSwitchName": "mytest",
        "VpcId": {
          "Ref": "Vpc"
        },
        "ZoneId": {
          "Fn::Select": [
            "0",
            {
              "Fn::GetAZs": {
                "Ref": "ALIYUN::Region"
              }
            }
          ]
        },
        "CidrBlock": "192.168.1.0/24"
      }
    },
    "ManagedKubernetesCluster": {
      "Type": "ALIYUN::CS::ManagedKubernetesCluster",
      "Properties": {
        "VSwitchIds": [
          {
            "Ref": "VSwitch"
          }
        ],
        "VpcId": {
          "Ref": "Vpc"
        },
        "ClusterSpec": "ack.pro.small",
        "LoginPassword": "Admin@123!",
        "Name": "mytest"
      }
    }
  },
  "Outputs": {
    "ClusterId": {
      "Value": {
        "Fn::GetAtt": [
          "ManagedKubernetesCluster",
          "ClusterId"
        ]
      }
    },
    "TaskId": {
      "Value": {
        "Fn::GetAtt": [
          "ManagedKubernetesCluster",
          "TaskId"
        ]
      }
    }
  }
}
```

### **Scenario 2:** Creating an ACK Dedicated cluster (in a VPC)**.**

[Quick Create](https://ros.console.alibabacloud.com/cn-hangzhou/templates/public/createStack?templateType=Example&templateUrl=https://ros-public-templates.oss-cn-hangzhou.aliyuncs.com/ros-templates/resources/cs/managed-kubernetes-cluster-case2.yml&pageTitle=Create%20Kubernetes%20Dedicated%20cluster%20in%20VPC&hideStepRow=true&hideStackConfig=true&isSimplified=true&balanceIntercept=true)

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Description:
  zh-cn: Configure billing methods on the existing VPC, vSwitches, and security groups. Then, create a Kubernetes cluster that includes worker nodes, network settings, and monitoring plugins.
  en: Configure billing methods on the existing VPC, switches, and security groups, then proceed to create a Kubernetes cluster inclusive of worker nodes, network configurations, and monitoring plugins.
Parameters:
  PayType:
    Type: String
    Label:
      en: ECS Instance Charge Type
      zh-cn: ECS Instance Charge Type
    AssociationProperty: ChargeType
    AssociationPropertyMetadata:
      LocaleKey: InstanceChargeType
    Default: PostPaid
    AllowedValues:
      - PostPaid
      - PrePaid
  PayPeriodUnit:
    Type: String
    Label:
      en: Pay Period Unit
      zh-cn: Pay Period Unit
    AssociationProperty: PayPeriodUnit
    AssociationPropertyMetadata:
      Visible:
        Condition:
          Fn::Not:
            Fn::Equals:
              - ${PayType}
              - PostPaid
    Default: Month
    AllowedValues:
      - Month
      - Year
  PayPeriod:
    Type: Number
    Label:
      en: Period
      zh-cn: Period
    AssociationProperty: PayPeriod
    AssociationPropertyMetadata:
      Visible:
        Condition:
          Fn::Not:
            Fn::Equals:
              - ${PayType}
              - PostPaid
    Default: 1
    AllowedValues:
      - 1
      - 2
      - 3
      - 4
      - 5
      - 6
      - 7
      - 8
      - 9
  VpcId:
    Type: String
    Label:
      en: VPC ID
      zh-cn: VPC ID
    AssociationProperty: ALIYUN::ECS::VPC::VPCId
  ZoneId:
    Type: String
    Label:
      en: Zone ID
      zh-cn: Zone ID
    AssociationProperty: ALIYUN::ECS::Instance:ZoneId
  VSwitchId:
    Type: String
    Label:
      en: VSwitch ID
      zh-cn: VSwitch ID
    AssociationProperty: ALIYUN::ECS::VSwitch::VSwitchId
    AssociationPropertyMetadata:
      VpcId: ${VpcId}
      ZoneId: ${ZoneId}
  SecurityGroupId:
    Type: String
    Label:
      en: Business Security Group ID
      zh-cn: Business Security Group ID
    AssociationProperty: ALIYUN::ECS::SecurityGroup::SecurityGroupId
    AssociationPropertyMetadata:
      VpcId: ${VpcId}
  NumOfNodes:
    Type: Number
    Label:
      zh-cn: Number of worker nodes
      en: Number of Worker instances
    Default: 3
  PodCidr:
    Type: String
    Label:
      zh-cn: Pod Network CIDR
      en: Pod Network CIDR
    Description:
      zh-cn: Enter a valid private CIDR block. Examples include 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16, and their subnets.<br/>The CIDR block cannot overlap with the CIDR block of the VPC or the CIDR blocks of existing Kubernetes clusters in the VPC. <font color='blue'><b>This setting cannot be changed after the cluster is created.</font>
      en: 'Enter a valid private CIDR block. Examples include 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16, and their subnets.<br/>The CIDR block cannot overlap with the CIDR block of the VPC or the CIDR blocks of existing Kubernetes clusters in the VPC. <font color=''blue''><b>This setting cannot be changed after the cluster is created.</font>'
    AssociationProperty: ALIYUN::CS::ManagedKubernetesCluster::PodCidr
    Default: 172.20.0.0/16
  ServiceCidr:
    Type: String
    Label:
      zh-cn: Service CIDR
      en: Service CIDR
    Description:
      zh-cn: Enter a valid CIDR block with a prefix length from 16 to 24. The CIDR block must be within one of the following private network ranges: 10.0.0.0/8, 172.16.0.0/12, or 192.168.0.0/16.<br/>The CIDR block cannot overlap with the CIDR block of the VPC or the CIDR blocks of existing Kubernetes clusters in the VPC. <font color='blue'><b>This setting cannot be changed after the cluster is created.</font>
      en: 'Enter a valid CIDR block with a prefix length from 16 to 24. The CIDR block must be within one of the following private network ranges: 10.0.0.0/8, 172.16.0.0/12, or 192.168.0.0/16.<br/>The CIDR block cannot overlap with the CIDR block of the VPC or the CIDR blocks of existing Kubernetes clusters in the VPC. <font color=''blue''><b>This setting cannot be changed after the cluster is created.</font>'
    AssociationProperty: ALIYUN::CS::ManagedKubernetesCluster::ServiceCidr
    Default: 172.21.0.0/20
  SnatEntry:
    Type: Boolean
    Label:
      zh-cn: Configure SNAT
      en: Configure SNAT
    Description:
      zh-cn: Configure SNAT for the virtual private cloud (VPC).<br/>If resources in your cluster, such as nodes and applications, need to access the public network, select this option. A NAT Gateway is created and SNAT rules are configured for you automatically. <b><a href='https://www.alibabacloud.com/help/en/doc-detail/48126.html' target='_blank'><font color='blue'>NAT Gateway pricing</font></a>
      en: Configure SNAT for the virtual private cloud (VPC).<br/>If resources in your cluster, such as nodes and applications, need to access the public network, select this option. A NAT Gateway is created and SNAT rules are configured for you automatically. <b><a href='https://www.alibabacloud.com/help/en/doc-detail/48126.html' target='_blank'><font color='blue'>NAT Gateway pricing</font></a>
    Default: true
  EndpointPublicAccess:
    Type: Boolean
    Label:
      en: Public Access
      zh-cn: Public Access
    Description:
      en: Expose the API server using an elastic IP address (EIP).<br/>By default, an internal-facing Server Load Balancer (SLB) instance is created for the API server. If you delete this instance, the API server becomes inaccessible.<br><font color='blue'><b>If you do not enable public access, you cannot access the cluster API server from the public network.</font>
      zh-cn: Expose the API server using an elastic IP address (EIP).<br/>By default, an internal-facing Server Load Balancer (SLB) instance is created for the API server. If you delete this instance, the API server becomes inaccessible.<br><font color='blue'><b>If you do not enable public access, you cannot access the cluster API server from the public network.</font>
    Default: false
  CloudMonitorFlag:
    Type: Boolean
    Label:
      zh-cn: Monitoring plugin
      en: Monitor Plug-in
    Description:
      zh-cn: Install the CloudMonitor agent on the ECS nodes.
      en: Install the CloudMonitor agent on the ECS nodes.
    Default: true
  WorkerInstanceTypes:
    Type: CommaDelimitedList
    AssociationProperty: ALIYUN::ECS::Instance::InstanceType
    AssociationPropertyMetadata:
      InstanceChargeType: ${PayPeriod}
      ZoneId: ${ZoneId}
    Label:
      en: Instance Type
      zh-cn: Instance Type
  WorkerSystemDiskSize:
    Type: Number
    Label:
      zh-cn: Worker node system disk size
      en: Worker System Disk Space
    Description:
      zh-cn: The size of the system disk, in GB. Valid values: 40 to 500.
      en: 'The size of the system disk, in GB. Valid values: 40 to 500.'
    Default: 40
    MinValue: 40
    MaxValue: 500
  WorkerSystemDiskCategory:
    Type: String
    Label:
      en: Worker System Disk Category
      zh-cn: Worker node system disk category
    AssociationPropertyMetadata:
      LocaleKey: DiskCategory
    Default: cloud_essd
    AllowedValues:
      - cloud_efficiency
      - cloud_ssd
      - cloud_essd
  LoginPassword:
    Type: String
    NoEcho: true
    Label:
      en: Instance Password
      zh-cn: Instance Password
    Description:
      en: The password must be 8 to 30 characters in length and contain characters from at least three of the following categories: uppercase letters, lowercase letters, digits, and special characters. The supported special characters are ()`~!@#$%^&*_-+=|{}[]:;'<>,.?/
      zh-cn: The password must be 8 to 30 characters in length and contain characters from at least three of the following categories: uppercase letters, lowercase letters, digits, and special characters. The supported special characters are ()`~!@#$%^&*_-+=|{}[]:;'<>,.?/
    ConstraintDescription:
      en: The password must be 8 to 30 characters in length and contain characters from at least three of the following categories: uppercase letters, lowercase letters, digits, and special characters. The supported special characters are ()`~!@#$%^&*_-+=|{}[]:;'<>,.?/
      zh-cn: The password must be 8 to 30 characters in length and contain characters from at least three of the following categories: uppercase letters, lowercase letters, digits, and special characters. The supported special characters are ()`~!@#$%^&*_-+=|{}[]:;'<>,.?/
    AssociationProperty: ALIYUN::ECS::Instance::Password
Resources:
  NodePools:
    Type: ALIYUN::CS::ClusterNodePool
    Properties:
      ClusterId:
        Ref: ManagedKubernetesCluster
      NodePoolInfo:
        Name: default-nodepool
      ScalingGroup:
        Period:
          Ref: PayPeriod
        PeriodUnit:
          Ref: PayPeriodUnit
        InstanceChargeType:
          Ref: PayType
        VSwitchIds:
          - Ref: VSwitchId
        ZoneIds:
          - Ref: ZoneId
        SystemDiskCategory:
          Ref: WorkerSystemDiskCategory
        SystemDiskSize:
          Ref: WorkerSystemDiskSize
        InstanceTypes:
          Ref: WorkerInstanceTypes
        LoginPassword:
          Ref: LoginPassword
        Platform: AliyunLinux
        ImageId: aliyun_3_9_x64_20G_alibase_20231219.vhd
      KubernetesConfig:
        Runtime: containerd
        RuntimeVersion: 1.6.28
      Count:
        Ref: NumOfNodes
  ManagedKubernetesCluster:
    Type: ALIYUN::CS::ManagedKubernetesCluster
    Properties:
      VpcId:
        Ref: VpcId
      VSwitchIds:
        - Ref: VSwitchId
      SecurityGroupId:
        Ref: SecurityGroupId
      ZoneIds:
        - Ref: ZoneId
      ClusterSpec: ack.pro.small
      ContainerCidr:
        Ref: PodCidr
      ServiceCidr:
        Ref: ServiceCidr
      LoginPassword:
        Ref: LoginPassword
      SnatEntry:
        Ref: SnatEntry
      Addons:
        - Name: flannel
          Config: ''
      CloudMonitorFlags:
        Ref: CloudMonitorFlag
      ProxyMode: IPVS
      EndpointPublicAccess:
        Ref: EndpointPublicAccess
      Name:
        Ref: ALIYUN::StackName
Outputs:
  ClusterId:
    Value:
      Fn::GetAtt:
        - ManagedKubernetesCluster
        - ClusterId
  TaskId:
    Value:
      Fn::GetAtt:
        - ManagedKubernetesCluster
        - TaskId
  WorkerRamRoleName:
    Value:
      Fn::GetAtt:
        - ManagedKubernetesCluster
        - WorkerRamRoleName
Metadata:
  ALIYUN::ROS::Interface:
    ParameterGroups:
      - Parameters:
          - PayType
          - PayPeriodUnit
          - PayPeriod
        Label:
          default:
            en: PayType Configuration
            zh-cn: PayType Configuration
      - Parameters:
          - VpcId
          - ZoneId
          - VSwitchId
          - SecurityGroupId
        Label:
          default:
            zh-cn: Infrastructure Configuration (Required)
            en: Infrastructure Configuration (Required)
      - Parameters:
          - NumOfNodes
          - PodCidr
          - ServiceCidr
          - SnatEntry
          - EndpointPublicAccess
          - CloudMonitorFlag
          - WorkerInstanceTypes
          - WorkerSystemDiskSize
          - WorkerSystemDiskCategory
          - LoginPassword
        Label:
          default:
            zh-cn: Kubernetes Basic Configuration (Required)
            en: Kubernetes Basic Configuration (Required)
    TemplateTags:
      - acs:example:ISV Software Deployment:Create ACK Dedicated Cluster (Existing VPC)
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Description": {
    "zh-cn": "Configure billing methods on the existing VPC, vSwitches, and security groups. Then, create a Kubernetes cluster that includes worker nodes, network settings, and monitoring plugins.",
    "en": "Configure billing methods on the existing VPC, switches, and security groups, then proceed to create a Kubernetes cluster inclusive of worker nodes, network configurations, and monitoring plugins."
  },
  "Parameters": {
    "PayType": {
      "Type": "String",
      "Label": {
        "en": "ECS Instance Charge Type",
        "zh-cn": "ECS Instance Charge Type"
      },
      "AssociationProperty": "ChargeType",
      "AssociationPropertyMetadata": {
        "LocaleKey": "InstanceChargeType"
      },
      "Default": "PostPaid",
      "AllowedValues": [
        "PostPaid",
        "PrePaid"
      ]
    },
    "PayPeriodUnit": {
      "Type": "String",
      "Label": {
        "en": "Pay Period Unit",
        "zh-cn": "Pay Period Unit"
      },
      "AssociationProperty": "PayPeriodUnit",
      "AssociationPropertyMetadata": {
        "Visible": {
          "Condition": {
            "Fn::Not": {
              "Fn::Equals": [
                "${PayType}",
                "PostPaid"
              ]
            }
          }
        }
      },
      "Default": "Month",
      "AllowedValues": [
        "Month",
        "Year"
      ]
    },
    "PayPeriod": {
      "Type": "Number",
      "Label": {
        "en": "Period",
        "zh-cn": "Period"
      },
      "AssociationProperty": "PayPeriod",
      "AssociationPropertyMetadata": {
        "Visible": {
          "Condition": {
            "Fn::Not": {
              "Fn::Equals": [
                "${PayType}",
                "PostPaid"
              ]
            }
          }
        }
      },
      "Default": 1,
      "AllowedValues": [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8,
        9
      ]
    },
    "VpcId": {
      "Type": "String",
      "Label": {
        "en": "VPC ID",
        "zh-cn": "VPC ID"
      },
      "AssociationProperty": "ALIYUN::ECS::VPC::VPCId"
    },
    "ZoneId": {
      "Type": "String",
      "Label": {
        "en": "Zone ID",
        "zh-cn": "Zone ID"
      },
      "AssociationProperty": "ALIYUN::ECS::Instance:ZoneId"
    },
    "VSwitchId": {
      "Type": "String",
      "Label": {
        "en": "VSwitch ID",
        "zh-cn": "VSwitch ID"
      },
      "AssociationProperty": "ALIYUN::ECS::VSwitch::VSwitchId",
      "AssociationPropertyMetadata": {
        "VpcId": "${VpcId}",
        "ZoneId": "${ZoneId}"
      }
    },
    "SecurityGroupId": {
      "Type": "String",
      "Label": {
        "en": "Business Security Group ID",
        "zh-cn": "Business Security Group ID"
      },
      "AssociationProperty": "ALIYUN::ECS::SecurityGroup::SecurityGroupId",
      "AssociationPropertyMetadata": {
        "VpcId": "${VpcId}"
      }
    },
    "NumOfNodes": {
      "Type": "Number",
      "Label": {
        "zh-cn": "Number of worker nodes",
        "en": "Number of Worker instances"
      },
      "Default": 3
    },
    "PodCidr": {
      "Type": "String",
      "Label": {
        "zh-cn": "Pod Network CIDR",
        "en": "Pod Network CIDR"
      },
      "Description": {
        "zh-cn": "Enter a valid private CIDR block. Examples include 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16, and their subnets.<br/>The CIDR block cannot overlap with the CIDR block of the VPC or the CIDR blocks of existing Kubernetes clusters in the VPC. <font color='blue'><b>This setting cannot be changed after the cluster is created.</font>",
        "en": "Enter a valid private CIDR block. Examples include 10.0.0.0/8, 172.16.0.0/12, 192.168.0.0/16, and their subnets.<br/>The CIDR block cannot overlap with the CIDR block of the VPC or the CIDR blocks of existing Kubernetes clusters in the VPC. <font color='blue'><b>This setting cannot be changed after the cluster is created.</font>"
      },
      "AssociationProperty": "ALIYUN::CS::ManagedKubernetesCluster::PodCidr",
      "Default": "172.20.0.0/16"
    },
    "ServiceCidr": {
      "Type": "String",
      "Label": {
        "zh-cn": "Service CIDR",
        "en": "Service CIDR"
      },
      "Description": {
        "zh-cn": "Enter a valid CIDR block with a prefix length from 16 to 24. The CIDR block must be within one of the following private network ranges: 10.0.0.0/8, 172.16.0.0/12, or 192.168.0.0/16.<br/>The CIDR block cannot overlap with the CIDR block of the VPC or the CIDR blocks of existing Kubernetes clusters in the VPC. <font color='blue'><b>This setting cannot be changed after the cluster is created.</font>",
        "en": "Enter a valid CIDR block with a prefix length from 16 to 24. The CIDR block must be within one of the following private network ranges: 10.0.0.0/8, 172.16.0.0/12, or 192.168.0.0/16.<br/>The CIDR block cannot overlap with the CIDR block of the VPC or the CIDR blocks of existing Kubernetes clusters in the VPC. <font color='blue'><b>This setting cannot be changed after the cluster is created.</font>"
      },
      "AssociationProperty": "ALIYUN::CS::ManagedKubernetesCluster::ServiceCidr",
      "Default": "172.21.0.0/20"
    },
    "SnatEntry": {
      "Type": "Boolean",
      "Label": {
        "zh-cn": "Configure SNAT",
        "en": "Configure SNAT"
      },
      "Description": {
        "zh-cn": "Configure SNAT for the virtual private cloud (VPC).<br/>If resources in your cluster, such as nodes and applications, need to access the public network, select this option. A NAT Gateway is created and SNAT rules are configured for you automatically. <b><a href='https://www.alibabacloud.com/help/en/doc-detail/48126.html' target='_blank'><font color='blue'>NAT Gateway pricing</font></a>",
        "en": "Configure SNAT for the virtual private cloud (VPC).<br/>If resources in your cluster, such as nodes and applications, need to access the public network, select this option. A NAT Gateway is created and SNAT rules are configured for you automatically. <b><a href='https://www.alibabacloud.com/help/en/doc-detail/48126.html' target='_blank'><font color='blue'>NAT Gateway pricing</font></a>"
      },
      "Default": true
    },
    "EndpointPublicAccess": {
      "Type": "Boolean",
      "Label": {
        "en": "Public Access",
        "zh-cn": "Public Access"
      },
      "Description": {
        "en": "Expose the API server using an elastic IP address (EIP).<br/>By default, an internal-facing Server Load Balancer (SLB) instance is created for the API server. If you delete this instance, the API server becomes inaccessible.<br><font color='blue'><b>If you do not enable public access, you cannot access the cluster API server from the public network.</font>",
        "zh-cn": "Expose the API server using an elastic IP address (EIP).<br/>By default, an internal-facing Server Load Balancer (SLB) instance is created for the API server. If you delete this instance, the API server becomes inaccessible.<br><font color='blue'><b>If you do not enable public access, you cannot access the cluster API server from the public network.</font>"
      },
      "Default": false
    },
    "CloudMonitorFlag": {
      "Type": "Boolean",
      "Label": {
        "zh-cn": "Monitoring plugin",
        "en": "Monitor Plug-in"
      },
      "Description": {
        "zh-cn": "Install the CloudMonitor agent on the ECS nodes.",
        "en": "Install the CloudMonitor agent on the ECS nodes."
      },
      "Default": true
    },
    "WorkerInstanceTypes": {
      "Type": "CommaDelimitedList",
      "AssociationProperty": "ALIYUN::ECS::Instance::InstanceType",
      "AssociationPropertyMetadata": {
        "InstanceChargeType": "${PayPeriod}",
        "ZoneId": "${ZoneId}"
      },
      "Label": {
        "en": "Instance Type",
        "zh-cn": "Instance Type"
      }
    },
    "WorkerSystemDiskSize": {
      "Type": "Number",
      "Label": {
        "zh-cn": "Worker node system disk size",
        "en": "Worker System Disk Space"
      },
      "Description": {
        "zh-cn": "The size of the system disk, in GB. Valid values: 40 to 500.",
        "en": "The size of the system disk, in GB. Valid values: 40 to 500."
      },
      "Default": 40,
      "MinValue": 40,
      "MaxValue": 500
    },
    "WorkerSystemDiskCategory": {
      "Type": "String",
      "Label": {
        "en": "Worker System Disk Category",
        "zh-cn": "Worker node system disk category"
      },
      "AssociationPropertyMetadata": {
        "LocaleKey": "DiskCategory"
      },
      "Default": "cloud_essd",
      "AllowedValues": [
        "cloud_efficiency",
        "cloud_ssd",
        "cloud_essd"
      ]
    },
    "LoginPassword": {
      "Type": "String",
      "NoEcho": true,
      "Label": {
        "en": "Instance Password",
        "zh-cn": "Instance Password"
      },
      "Description": {
        "en": "The password must be 8 to 30 characters in length and contain characters from at least three of the following categories: uppercase letters, lowercase letters, digits, and special characters. The supported special characters are ()`~!@#$%^&*_-+=|{}[]:;'<>,.?/",
        "zh-cn": "The password must be 8 to 30 characters in length and contain characters from at least three of the following categories: uppercase letters, lowercase letters, digits, and special characters. The supported special characters are ()`~!@#$%^&*_-+=|{}[]:;'<>,.?/"
      },
      "ConstraintDescription": {
        "en": "The password must be 8 to 30 characters in length and contain characters from at least three of the following categories: uppercase letters, lowercase letters, digits, and special characters. The supported special characters are ()`~!@#$%^&*_-+=|{}[]:;'<>,.?/",
        "zh-cn": "The password must be 8 to 30 characters in length and contain characters from at least three of the following categories: uppercase letters, lowercase letters, digits, and special characters. The supported special characters are ()`~!@#$%^&*_-+=|{}[]:;'<>,.?/"
      },
      "AssociationProperty": "ALIYUN::ECS::Instance::Password"
    }
  },
  "Resources": {
    "NodePools": {
      "Type": "ALIYUN::CS::ClusterNodePool",
      "Properties": {
        "ClusterId": {
          "Ref": "ManagedKubernetesCluster"
        },
        "NodePoolInfo": {
          "Name": "default-nodepool"
        },
        "ScalingGroup": {
          "Period": {
            "Ref": "PayPeriod"
          },
          "PeriodUnit": {
            "Ref": "PayPeriodUnit"
          },
          "InstanceChargeType": {
            "Ref": "PayType"
          },
          "VSwitchIds": [
            {
              "Ref": "VSwitchId"
            }
          ],
          "ZoneIds": [
            {
              "Ref": "ZoneId"
            }
          ],
          "SystemDiskCategory": {
            "Ref": "WorkerSystemDiskCategory"
          },
          "SystemDiskSize": {
            "Ref": "WorkerSystemDiskSize"
          },
          "InstanceTypes": {
            "Ref": "WorkerInstanceTypes"
          },
          "LoginPassword": {
            "Ref": "LoginPassword"
          },
          "Platform": "AliyunLinux",
          "ImageId": "aliyun_3_9_x64_20G_alibase_20231219.vhd"
        },
        "KubernetesConfig": {
          "Runtime": "containerd",
          "RuntimeVersion": "1.6.28"
        },
        "Count": {
          "Ref": "NumOfNodes"
        }
      }
    },
    "ManagedKubernetesCluster": {
      "Type": "ALIYUN::CS::ManagedKubernetesCluster",
      "Properties": {
        "VpcId": {
          "Ref": "VpcId"
        },
        "VSwitchIds": [
          {
            "Ref": "VSwitchId"
          }
        ],
        "SecurityGroupId": {
          "Ref": "SecurityGroupId"
        },
        "ZoneIds": [
          {
            "Ref": "ZoneId"
          }
        ],
        "ClusterSpec": "ack.pro.small",
        "ContainerCidr": {
          "Ref": "PodCidr"
        },
        "ServiceCidr": {
          "Ref": "ServiceCidr"
        },
        "LoginPassword": {
          "Ref": "LoginPassword"
        },
        "SnatEntry": {
          "Ref": "SnatEntry"
        },
        "Addons": [
          {
            "Name": "flannel",
            "Config": ""
          }
        ],
        "CloudMonitorFlags": {
          "Ref": "CloudMonitorFlag"
        },
        "ProxyMode": "IPVS",
        "EndpointPublicAccess": {
          "Ref": "EndpointPublicAccess"
        },
        "Name": {
          "Ref": "ALIYUN::StackName"
        }
      }
    }
  },
  "Outputs": {
    "ClusterId": {
      "Value": {
        "Fn::GetAtt": [
          "ManagedKubernetesCluster",
          "ClusterId"
        ]
      }
    },
    "TaskId": {
      "Value": {
        "Fn::GetAtt": [
          "ManagedKubernetesCluster",
          "TaskId"
        ]
      }
    },
    "WorkerRamRoleName": {
      "Value": {
        "Fn::GetAtt": [
          "ManagedKubernetesCluster",
          "WorkerRamRoleName"
        ]
      }
    }
  },
  "Metadata": {
    "ALIYUN::ROS::Interface": {
      "ParameterGroups": [
        {
          "Parameters": [
            "PayType",
            "PayPeriodUnit",
            "PayPeriod"
          ],
          "Label": {
            "default": {
              "en": "PayType Configuration",
              "zh-cn": "PayType Configuration"
            }
          }
        },
        {
          "Parameters": [
            "VpcId",
            "ZoneId",
            "VSwitchId",
            "SecurityGroupId"
          ],
          "Label": {
            "default": {
              "zh-cn": "Infrastructure Configuration (Required)",
              "en": "Infrastructure Configuration (Required)"
            }
          }
        },
        {
          "Parameters": [
            "NumOfNodes",
            "PodCidr",
            "ServiceCidr",
            "SnatEntry",
            "EndpointPublicAccess",
            "CloudMonitorFlag",
            "WorkerInstanceTypes",
            "WorkerSystemDiskSize",
            "WorkerSystemDiskCategory",
            "LoginPassword"
          ],
          "Label": {
            "default": {
              "zh-cn": "Kubernetes Basic Configuration (Required)",
              "en": "Kubernetes Basic Configuration (Required)"
            }
          }
        }
      ],
      "TemplateTags": [
        "acs:example:ISV Software Deployment:Create ACK Dedicated Cluster (Existing VPC)"
      ]
    }
  }
}
```

### **Scenario 3:** Build microservices using ACK**.**

[Quick Create](https://ros.console.alibabacloud.com/cn-hangzhou/templates/public/createStack?templateType=Example&templateUrl=https://ros-public-templates.oss-cn-hangzhou.aliyuncs.com/ros-templates/resources/cs/managed-kubernetes-cluster-case3.yml&pageTitle=Set up microservices with ACK&hideStepRow=true&hideStackConfig=true&isSimplified=true&balanceIntercept=true)

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Description:
  zh-cn: Create an ACK cluster, configure a VPC and security groups, deploy microservice applications, automatically scale node pools, set up ALB Ingress, and output the service access URL.
  en: Create an ACK cluster, configure a VPC and security groups, deploy microservice applications, automatically scale node pools, set up ALB Ingress, and output the service access URL.
Parameters:
  CommonName:
    Type: String
    Default: microservices-on-ack
  ManagedKubernetesClusterName:
    Type: String
    Label:
      en: Managed Kubernetes Cluster Name
      zh-cn: Managed Kubernetes Cluster Name
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
      zh-cn: Availability Zone 1
  ZoneId2:
    Type: String
    AssociationProperty: 'ALIYUN::ECS::Instance::ZoneId'
    AssociationPropertyMetadata:
      ExclusiveTo:
        - ZoneId1
    Label:
      en: Availability Zone
      zh-cn: Availability Zone 2
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
        Server logon password. Length must be 8–30 characters and include three of the following: uppercase letters, lowercase letters, numbers, or special symbols ()`~!@#$%^&*_-+=|{}[]:;'<>,.?/
      zh-cn: >-
        Server logon password. Length must be 8–30 characters and include three of the following: uppercase letters, lowercase letters, numbers, or special symbols ()`~!@#$%^&*_-+=|{}[]:;'<>,.?/
    Label:
      en: Instance Password
      zh-cn: Instance Password
    ConstraintDescription:
      en: >-
        Length must be 8–30 characters and include three of the following: uppercase letters, lowercase letters, numbers, or special symbols ()`~!@#$%^&*_-+=|{}[]:;'<>,.?/
      zh-cn: 'Length must be 8–30 characters and include three of the following: uppercase letters, lowercase letters, numbers, or special symbols ()`~!@#$%^&*_-+=|{}[]:;''<>,.?/'
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
        - PortRange: 8080/8080
          SourceCidrIp: 0.0.0.0/0
          IpProtocol: tcp
        - PortRange: 80/80
          SourceCidrIp: 0.0.0.0/0
          IpProtocol: tcp
  AckCluster:
    Type: 'ALIYUN::CS::ManagedKubernetesCluster'
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
      KubernetesVersion: 1.33.1-aliyun.1
      ServiceCidr: 192.168.0.0/16
      ClusterSpec: ack.pro.small
      LoadBalancerSpec: slb.s2.small
      IsEnterpriseSecurityGroup: true
      SnatEntry: true
      NumOfNodes: 0
      EndpointPublicAccess: true
      Platform: AliyunLinux
      Addons:
        - Name: terway-eniip
          Config: '{"IPVlan":"false","NetworkPolicy":"false","ENITrunking":"false"}'
        - Name: csi-plugin
        - Name: csi-provisioner
        - Name: storage-operator
          Config: '{"CnfsOssEnable":"false","CnfsNasEnable":"false"}'
        - Name: logtail-ds
          Config: '{"IngressDashboardEnabled":"true"}'
        - Name: nginx-ingress-controller
          Disabled: true
        - Name: alb-ingress-controller
          Version: ""
          Config:
            Fn::Sub: >-
              {"albIngress":{"AddressType":"Internet","ZoneMappings":{"${ZoneId1}":["${VSwitch1}"],
              "${ZoneId2}":["${VSwitch2}"]},"CreateDefaultALBConfig":true}}
        - Name: ack-node-local-dns
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
          Name: default-nodepool
      ScalingGroup:
        InstanceChargeType: PostPaid
        VSwitchIds:
          - Ref: VSwitch1
          - Ref: VSwitch2
        ZoneIds:
          - Ref: ZoneId1
          - Ref: ZoneId2
        SystemDiskCategory: cloud_essd
        SystemDiskPerformanceLevel: PL0
        SystemDiskSize: 120
        InstanceTypes:
          Ref: InstanceType
        LoginPassword:
          Ref: InstancePassword
        Platform: AliyunLinux
        ImageId: aliyun_3_9_x64_20G_alibase_20231219.vhd
      KubernetesConfig:
        Runtime: containerd
        RuntimeVersion: 1.6.28
      Count: 3
  InstallBackendApp:
    Type: 'ALIYUN::CS::ClusterApplication'
    DependsOn: NodePools
    Properties:
      ClusterId:
        Ref: AckCluster
      YamlContent:
        Fn::Sub: |-
          apiVersion: apps/v1 # for versions before 1.8.0 use apps/v1beta1
          kind: Deployment
          metadata:
            name: ecs-ack-test-service-a
            labels:
              app: ecs-ack-test-service-a
          spec:
            replicas: 2
            selector:
              matchLabels:
                app: ecs-ack-test-service-a
            template:
              metadata:
                labels:
                  app: ecs-ack-test-service-a
              spec:
                initContainers:
                  - name: download-jar
                    image: dragonwell-registry.cn-hangzhou.cr.aliyuncs.com/dragonwell/dragonwell:8-alinux
                    command:
                      - "/bin/sh"
                      - "-c"
                      - "curl -o /app/app.jar https://help-static-aliyun-doc.aliyuncs.com/tech-solution/MicroServiceOnAckDemo-1.0.1.jar && echo 'Download jar OK!'"
                    volumeMounts:
                      - name: app-jar
                        mountPath: /app
                containers:
                  - args:
                      - '-DbHost=http://ecs-ack-test-service-b:8080'
                      - '-jar'
                      - '/app/app.jar'
                    command:
                      - java
                    name: ecs-ack-test-service-a
                    image: dragonwell-registry.cn-hangzhou.cr.aliyuncs.com/dragonwell/dragonwell:8-alinux
                    env:
                    - name: APP_MANUAL_DEPLOY
                      value: "false"
                    ports:
                      - containerPort: 8080
                    resources:
                      limits:
                        cpu: '2'
                        ephemeral-storage: 40Gi
                        memory: 2Gi
                      requests:
                        cpu: '1'
                        ephemeral-storage: 20Gi
                        memory: 1Gi
                    volumeMounts:
                      - name: app-jar
                        mountPath: /app
                volumes:
                  - name: app-jar
                    emptyDir: {}
          ---
          apiVersion: v1
          kind: Service
          metadata:
            name: ecs-ack-test-service-a
          spec:
            selector:
              app: ecs-ack-test-service-a
            ports:
              - protocol: TCP
                port: 8080
                targetPort: 8080
          ---
          apiVersion: apps/v1 # for versions before 1.8.0 use apps/v1beta1
          kind: Deployment
          metadata:
            name: ecs-ack-test-service-b
            labels:
              app: ecs-ack-test-service-b
          spec:
            replicas: 2
            selector:
              matchLabels:
                app: ecs-ack-test-service-b
            template:
              metadata:
                labels:
                  app: ecs-ack-test-service-b
              spec:
                initContainers:
                  - name: download-jar
                    image: dragonwell-registry.cn-hangzhou.cr.aliyuncs.com/dragonwell/dragonwell:8-alinux
                    command:
                      - "/bin/sh"
                      - "-c"
                      - "curl -o /app/app.jar https://help-static-aliyun-doc.aliyuncs.com/tech-solution/MicroServiceOnAckDemo-1.0.1.jar && echo 'Download jar OK!'"
                    volumeMounts:
                      - name: app-jar
                        mountPath: /app
                containers:
                  - args:
                      - '-DbHost=http://ecs-ack-test-service-b:8080'
                      - '-jar'
                      - '/app/app.jar'
                    command:
                      - java
                    name: ecs-ack-test-service-b
                    image: dragonwell-registry.cn-hangzhou.cr.aliyuncs.com/dragonwell/dragonwell:8-alinux
                    env:
                    - name: APP_MANUAL_DEPLOY
                      value: "false"
                    ports:
                      - containerPort: 8080
                    resources:
                      limits:
                        cpu: '2'
                        ephemeral-storage: 40Gi
                        memory: 2Gi
                      requests:
                        cpu: '1'
                        ephemeral-storage: 20Gi
                        memory: 1Gi
                    volumeMounts:
                      - name: app-jar
                        mountPath: /app
                volumes:
                  - name: app-jar
                    emptyDir: {}
          ---
          apiVersion: v1
          kind: Service
          metadata:
            name: ecs-ack-test-service-b
          spec:
            selector:
              app: ecs-ack-test-service-b
            ports:
              - protocol: TCP
                port: 8080
                targetPort: 8080
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
            name: ecs-ack-test-alb-config
          spec:
            config:
              name: ecs-ack-test-alb
              addressType: Internet
              zoneMappings:
              - vSwitchId: ${VSwitch1}
              - vSwitchId: ${VSwitch2}
            listeners:
              - port: 80
                protocol: HTTP
          ---
          apiVersion: networking.k8s.io/v1
          kind: IngressClass
          metadata:
            name: ecs-ack-test-alb
          spec:
            controller: ingress.k8s.alibabacloud/alb
            parameters:
              apiGroup: alibabacloud.com
              kind: AlbConfig
              name: ecs-ack-test-alb-config
          ---
          apiVersion: networking.k8s.io/v1
          kind: Ingress
          metadata:
            name: ecs-ack-test-alb-ingress
          spec:
            ingressClassName:  ecs-ack-test-alb 
            rules:
             - http:
                paths:
                - path: /a
                  pathType: ImplementationSpecific
                  backend:
                    service:
                      name: ecs-ack-test-service-a
                      port:
                        number: 8080
                - path: /b
                  pathType: ImplementationSpecific
                  backend:
                    service:
                      name: ecs-ack-test-service-b
                      port: 
                        number: 8080
  WaitAlbIngress:
    Type: ALIYUN::ROS::Sleep
    DependsOn: AlbConfig
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
  UrlServiceA:
    Description:
      zh-cn: The endpoint for service A.
      en: The endpoint for service A.
    Value:
      'Fn::Sub': http://${IngressInfo}/a
  UrlServiceB:
    Description:
      zh-cn: The endpoint for service B.
      en: The endpoint for service B.
    Value:
      'Fn::Sub': http://${IngressInfo}/b
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
      - acs:technical-solution:micro:how-to-quickly-build-microservices-using-ack-tech_solu_124
    Hidden:
      - CommonName
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Description": {
    "zh-cn": "Create an ACK cluster, configure a VPC and security groups, deploy microservice applications, automatically scale node pools, set up ALB Ingress, and output the service access URL.",
    "en": "Create an ACK cluster, configure a VPC and security groups, deploy microservice applications, automatically scale node pools, set up ALB Ingress, and output the service access URL."
  },
  "Parameters": {
    "CommonName": {
      "Type": "String",
      "Default": "microservices-on-ack"
    },
    "ManagedKubernetesClusterName": {
      "Type": "String",
      "Label": {
        "en": "Managed Kubernetes Cluster Name",
        "zh-cn": "Managed Kubernetes Cluster Name"
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
        "zh-cn": "Availability Zone 1"
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
        "zh-cn": "Availability Zone 2"
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
        "en": "Server logon password. Length must be 8–30 characters and include three of the following: uppercase letters, lowercase letters, numbers, or special symbols ()`~!@#$%^&*_-+=|{}[]:;'<>,.?/",
        "zh-cn": "Server logon password. Length must be 8–30 characters and include three of the following: uppercase letters, lowercase letters, numbers, or special symbols ()`~!@#$%^&*_-+=|{}[]:;'<>,.?/"
      },
      "Label": {
        "en": "Instance Password",
        "zh-cn": "Instance Password"
      },
      "ConstraintDescription": {
        "en": "Length must be 8–30 characters and include three of the following: uppercase letters, lowercase letters, numbers, or special symbols ()`~!@#$%^&*_-+=|{}[]:;'<>,.?/",
        "zh-cn": "Length must be 8–30 characters and include three of the following: uppercase letters, lowercase letters, numbers, or special symbols ()`~!@#$%^&*_-+=|{}[]:;'<>,.?/"
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
            "PortRange": "8080/8080",
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
    "AckCluster": {
      "Type": "ALIYUN::CS::ManagedKubernetesCluster",
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
        "KubernetesVersion": "1.33.1-aliyun.1",
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
            "Name": "logtail-ds",
            "Config": "{\"IngressDashboardEnabled\":\"true\"}"
          },
          {
            "Name": "nginx-ingress-controller",
            "Disabled": true
          },
          {
            "Name": "alb-ingress-controller",
            "Version": "",
            "Config": {
              "Fn::Sub": "{\"albIngress\":{\"AddressType\":\"Internet\",\"ZoneMappings\":{\"${ZoneId1}\":[\"${VSwitch1}\"], \"${ZoneId2}\":[\"${VSwitch2}\"]},\"CreateDefaultALBConfig\":true}}"
            }
          },
          {
            "Name": "ack-node-local-dns"
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
          "Name": "default-nodepool"
        },
        "ScalingGroup": {
          "InstanceChargeType": "PostPaid",
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
          "SystemDiskSize": 120,
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
        "Count": 3
      }
    },
    "InstallBackendApp": {
      "Type": "ALIYUN::CS::ClusterApplication",
      "DependsOn": "NodePools",
      "Properties": {
        "ClusterId": {
          "Ref": "AckCluster"
        },
        "YamlContent": {
          "Fn::Sub": "apiVersion: apps/v1 # for versions before 1.8.0 use apps/v1beta1\nkind: Deployment\nmetadata:\n  name: ecs-ack-test-service-a\n  labels:\n    app: ecs-ack-test-service-a\nspec:\n  replicas: 2\n  selector:\n    matchLabels:\n      app: ecs-ack-test-service-a\n  template:\n    metadata:\n      labels:\n        app: ecs-ack-test-service-a\n    spec:\n      initContainers:\n        - name: download-jar\n          image: dragonwell-registry.cn-hangzhou.cr.aliyuncs.com/dragonwell/dragonwell:8-alinux\n          command:\n            - \"/bin/sh\"\n            - \"-c\"\n            - \"curl -o /app/app.jar https://help-static-aliyun-doc.aliyuncs.com/tech-solution/MicroServiceOnAckDemo-1.0.1.jar && echo 'Download jar OK!'\"\n          volumeMounts:\n            - name: app-jar\n              mountPath: /app\n      containers:\n        - args:\n            - '-DbHost=http://ecs-ack-test-service-b:8080'\n            - '-jar'\n            - '/app/app.jar'\n          command:\n            - java\n          name: ecs-ack-test-service-a\n          image: dragonwell-registry.cn-hangzhou.cr.aliyuncs.com/dragonwell/dragonwell:8-alinux\n          env:\n          - name: APP_MANUAL_DEPLOY\n            value: \"false\"\n          ports:\n            - containerPort: 8080\n          resources:\n            limits:\n              cpu: '2'\n              ephemeral-storage: 40Gi\n              memory: 2Gi\n            requests:\n              cpu: '1'\n              ephemeral-storage: 20Gi\n              memory: 1Gi\n          volumeMounts:\n            - name: app-jar\n              mountPath: /app\n      volumes:\n        - name: app-jar\n          emptyDir: {}\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: ecs-ack-test-service-a\nspec:\n  selector:\n    app: ecs-ack-test-service-a\n  ports:\n    - protocol: TCP\n      port: 8080\n      targetPort: 8080\n---\napiVersion: apps/v1 # for versions before 1.8.0 use apps/v1beta1\nkind: Deployment\nmetadata:\n  name: ecs-ack-test-service-b\n  labels:\n    app: ecs-ack-test-service-b\nspec:\n  replicas: 2\n  selector:\n    matchLabels:\n      app: ecs-ack-test-service-b\n  template:\n    metadata:\n      labels:\n        app: ecs-ack-test-service-b\n    spec:\n      initContainers:\n        - name: download-jar\n          image: dragonwell-registry.cn-hangzhou.cr.aliyuncs.com/dragonwell/dragonwell:8-alinux\n          command:\n            - \"/bin/sh\"\n            - \"-c\"\n            - \"curl -o /app/app.jar https://help-static-aliyun-doc.aliyuncs.com/tech-solution/MicroServiceOnAckDemo-1.0.1.jar && echo 'Download jar OK!'\"\n          volumeMounts:\n            - name: app-jar\n              mountPath: /app\n      containers:\n        - args:\n            - '-DbHost=http://ecs-ack-test-service-b:8080'\n            - '-jar'\n            - '/app/app.jar'\n          command:\n            - java\n          name: ecs-ack-test-service-b\n          image: dragonwell-registry.cn-hangzhou.cr.aliyuncs.com/dragonwell/dragonwell:8-alinux\n          env:\n          - name: APP_MANUAL_DEPLOY\n            value: \"false\"\n          ports:\n            - containerPort: 8080\n          resources:\n            limits:\n              cpu: '2'\n              ephemeral-storage: 40Gi\n              memory: 2Gi\n            requests:\n              cpu: '1'\n              ephemeral-storage: 20Gi\n              memory: 1Gi\n          volumeMounts:\n            - name: app-jar\n              mountPath: /app\n      volumes:\n        - name: app-jar\n          emptyDir: {}\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: ecs-ack-test-service-b\nspec:\n  selector:\n    app: ecs-ack-test-service-b\n  ports:\n    - protocol: TCP\n      port: 8080\n      targetPort: 8080"
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
          "Fn::Sub": "apiVersion: alibabacloud.com/v1\nkind: AlbConfig\nmetadata:\n  name: ecs-ack-test-alb-config\nspec:\n  config:\n    name: ecs-ack-test-alb\n    addressType: Internet\n    zoneMappings:\n    - vSwitchId: ${VSwitch1}\n    - vSwitchId: ${VSwitch2}\n  listeners:\n    - port: 80\n      protocol: HTTP\n---\napiVersion: networking.k8s.io/v1\nkind: IngressClass\nmetadata:\n  name: ecs-ack-test-alb\nspec:\n  controller: ingress.k8s.alibabacloud/alb\n  parameters:\n    apiGroup: alibabacloud.com\n    kind: AlbConfig\n    name: ecs-ack-test-alb-config\n---\napiVersion: networking.k8s.io/v1\nkind: Ingress\nmetadata:\n  name: ecs-ack-test-alb-ingress\nspec:\n  ingressClassName:  ecs-ack-test-alb \n  rules:\n   - http:\n      paths:\n      - path: /a\n        pathType: ImplementationSpecific\n        backend:\n          service:\n            name: ecs-ack-test-service-a\n            port:\n              number: 8080\n      - path: /b\n        pathType: ImplementationSpecific\n        backend:\n          service:\n            name: ecs-ack-test-service-b\n            port: \n              number: 8080"
        }
      }
    },
    "WaitAlbIngress": {
      "Type": "ALIYUN::ROS::Sleep",
      "DependsOn": "AlbConfig",
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
    "UrlServiceA": {
      "Description": {
        "zh-cn": "The endpoint for service A.",
        "en": "The endpoint for service A."
      },
      "Value": {
        "Fn::Sub": "http://${IngressInfo}/a"
      }
    },
    "UrlServiceB": {
      "Description": {
        "zh-cn": "The endpoint for service B.",
        "en": "The endpoint for service B."
      },
      "Value": {
        "Fn::Sub": "http://${IngressInfo}/b"
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
        "acs:technical-solution:micro:how-to-quickly-build-microservices-using-ack-tech_solu_124"
      ],
      "Hidden": [
        "CommonName"
      ]
    }
  }
}
```

For more examples, see [public templates that contain this resource](https://ros.console.alibabacloud.com/cn-hangzhou/templates/public?resourceType=ALIYUN::CS::ManagedKubernetesCluster).

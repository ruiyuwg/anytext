ALIYUN::ESS::EciScalingConfiguration is used to define a scaling configuration of the Elastic Container Instance type in Auto Scaling.

## Syntax

```
{
  "Type": "ALIYUN::ESS::EciScalingConfiguration",
  "Properties": {
    "ContainerGroupName": String,
    "ScalingConfigurationName": String,
    "ScalingGroupId": String,
    "SecurityGroupId": String,
    "AutoMatchImageCache": Boolean,
    "ActiveDeadlineSeconds": Integer,
    "AcrRegistryInfos": List,
    "AutoCreateEip": Boolean,
    "Containers": List,
    "Cpu": Number,
    "CpuOptionsThreadsPerCore": Integer,
    "CpuOptionsCore": Integer,
    "CostOptimization": Boolean,
    "DnsConfigSearches": List,
    "DataCachePL": String,
    "DataCacheProvisionedIops": Integer,
    "DataCacheBucket": String,
    "DnsConfigOptions": List,
    "DnsConfigNameServers": List,
    "DataCacheBurstingEnabled": Boolean,
    "DnsPolicy": String,
    "EgressBandwidth": Integer,
    "EipBandwidth": Integer,
    "EphemeralStorage": Integer,
    "HostName": String,
    "HostAliases": List,
    "IngressBandwidth": Integer,
    "ImageSnapshotId": String,
    "Ipv6AddressCount": Integer,
    "InstanceTypes": List,
    "InitContainers": List,
    "ImageRegistryCredentials": List,
    "InstanceFamilyLevel": String,
    "LoadBalancerWeight": Integer,
    "Memory": Number,
    "NtpServers": List,
    "ResourceGroupId": String,
    "RamRoleName": String,
    "RestartPolicy": String,
    "SpotPriceLimit": Number,
    "SpotStrategy": String,
    "SecurityContextSysctls": List,
    "Tags": List,
    "TerminationGracePeriodSeconds": Integer,
    "Volumes": List
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

ContainerGroupName

String

Yes

No

The name of the elastic container instance.

This property also specifies the name of the container group.

If you want to configure sequential names, use the following format: `name_prefix(AUTO_INCREMENT)[begin_number,bits]name_suffix`. The following section describes how to configure sequential hostnames:

-   **name\_prefix**: the prefix of the hostname.
    
-   **(AUTO\_INCREMENT)**: the fixed value that specifies the sorting mode.
    
-   **begin\_number**: the start value of the sequential values. Valid values: `0 to 999999`.
    
-   **bits**: the number of digits in sequential values. Valid values: `1 to 6`. If the number of digits in the value of the begin\_number field is greater than the value of the bits field, the bits field is automatically set to 6.
    

**Note**

We recommend that you set the bits field to a value that is greater than or equal to 3. Otherwise, the upper limit of the sequential values may be easily reached. If scale-out operations are still required after the upper limit is reached, the system reports an error and stops the scale-out operations. In this case, you must reconfigure the rules for generating hostnames.

-   **name\_suffix**: the suffix of the hostname. This field is optional.
    

**Note**

The `[begin_number,bits]` part cannot contain spaces. By default, the sequential hostnames are increased based on a fixed value. If Auto Scaling fails to start an elastic container instance in a scaling group during a scale-out event, Auto Scaling removes the elastic container instance from the scaling group and creates another instance. In this case, the hostnames of elastic container instances in the scaling group may have an intermittent increasing pattern.

For example, if you specify `nginx-test-(AUTO_INCREMENT)[0,3]` for this property, the sequential names of the elastic container instances are **nginx-test-000, nginx-test-001, and nginx-test-002**.

The rules for configuring sequential names for elastic container instances are similar to the rules for configuring sequential names for Elastic Compute Service (ECS) instances. For more information, see [Configure naming rules for ECS instances](/help/en/auto-scaling/user-guide/configure-naming-rules-for-ecs-instances).

ScalingConfigurationName

String

Yes

No

The name of the scaling configuration.

The name must be 2 to 64 characters in length and can contain letters, digits, underscores (\_), hyphens (-), and periods (.). It must start with a digit or a letter.

The name of the scaling configuration must be unique within the scaling group in a region. If you do not specify this property, the scaling configuration ID is used.

ScalingGroupId

String

Yes

No

The ID of the scaling group for which you want to create the scaling configuration.

None.

SecurityGroupId

String

Yes

No

The ID of the security group to which the elastic container instances belong.

Elastic container instances that are associated with the same security group can communicate with each other.

If you do not specify a security group, the system automatically uses the default security group in the region that you select. Make sure that the inbound rules of the security group contain the container protocols and ports to be exposed. If no default security group exists in the region, the system automatically creates a default security group and adds the specified container protocols and ports to the inbound rules of the security group.

AutoMatchImageCache

Boolean

No

Yes

Specifies whether to automatically match the image cache.

Valid values:

-   true
    
-   false
    

Default value: false.

ActiveDeadlineSeconds

Integer

No

Yes

The validity period.

Unit: seconds.

AcrRegistryInfos

List

No

Yes

The information about the Container Registry Enterprise Edition instances.

For more information, see the "AcrRegistryInfos properties" section of this topic.

AutoCreateEip

Boolean

No

Yes

Specifies whether to automatically create elastic IP addresses (EIPs).

None.

Containers

List

No

Yes

The containers on the elastic container instance.

For more information, see [Containers properties](#35988a5528u2i).

Cpu

Number

No

Yes

The number of vCPUs of the container.

None.

CpuOptionsThreadsPerCore

Integer

No

Yes

The number of threads per core.

You can specify this property only for specific instance types. A value of 1 specifies that Hyper-Threading is disabled. For more information, see [Specify CPU options](/help/en/eci/customize-cpu-options).

CpuOptionsCore

Integer

No

Yes

The number of physical CPU cores.

You can specify this property only for specific instance types. For more information, see [Specify CPU options](/help/en/eci/customize-cpu-options).

CostOptimization

Boolean

No

Yes

Specifies whether to enable the Cost Optimization feature.

Valid values:

-   true
    
-   false
    

DnsConfigSearches

List

No

Yes

The search domains of the Domain Name System (DNS) servers.

None.

DataCachePL

String

No

Yes

The performance level (PL) of the cloud disk that you want to use to store data caches.

We recommend that you use Enterprise SSDs (ESSDs). Valid values of this property when you use ESSDs:

-   PL0: An ESSD can deliver up to 10,000 random read/write IOPS.
    
-   PL1: An ESSD can deliver up to 50,000 random read/write IOPS.
    
-   PL2: An ESSD can deliver up to 100,000 random read/write IOPS.
    
-   PL3: An ESSD can deliver up to 1,000,000 random read/write IOPS.
    

DataCacheProvisionedIops

Integer

No

Yes

The provisioned read/write IOPS of the ESSD AutoPL disk.

This property takes effect when you use ESSD AutoPL disks to store data caches. Valid values: 0 to min{50000, 1000 × Capacity - Baseline IOPS}, in which Baseline IOPS = min{1800 + 50 × Capacity, 50000}.

DataCacheBucket

String

No

Yes

The bucket that you want to use to store data caches.

None.

DnsConfigOptions

List

No

Yes

The options.

For more information, see the "DnsConfigOptions properties" section of this topic.

DnsConfigNameServers

List

No

Yes

The IP addresses of the DNS servers.

None.

DataCacheBurstingEnabled

Boolean

No

Yes

Specifies whether to enable the performance burst feature.

This property takes effect when you use ESSD AutoPL disks to store data caches. Valid values:

-   true
    
-   false
    

DnsPolicy

String

No

Yes

The DNS policy.

Valid values:

-   None: uses the DNS that is specified by DnsConfig.
    
-   Default: uses the DNS that is specified by the runtime environment.
    

EgressBandwidth

Integer

No

Yes

The maximum outbound bandwidth.

Unit: bytes.

EipBandwidth

Integer

No

Yes

The bandwidth of the EIP.

Default value: 5. Unit: Mbit/s.

EphemeralStorage

Integer

No

Yes

The capacity of the ephemeral storage.

By default, PL1 ESSDs are used. Unit: GiB.

HostName

String

No

Yes

The hostname.

None.

HostAliases

List

No

Yes

The custom hostname mapping of a container on the elastic container instance.

None.

IngressBandwidth

Integer

No

Yes

The maximum inbound bandwidth.

Unit: bytes.

ImageSnapshotId

String

No

Yes

The ID of the image cache.

None.

Ipv6AddressCount

Integer

No

Yes

The number of IPv6 addresses.

None.

InstanceTypes

List

No

Yes

The ECS instance types.

You can specify up to five ECS instance types. For more information, see [Specify ECS instance types to create an elastic container instance](/help/en/eci/user-guide/specify-ecs-instance-types-to-create-an-elastic-container-instance/).

InitContainers

List

No

Yes

The init containers.

For more information, see the "InitContainers properties" section of this topic.

ImageRegistryCredentials

List

No

Yes

The information about the image repositories.

None.

InstanceFamilyLevel

String

No

Yes

The level of the instance family.

You can use this property to filter the instance types that meet your requirements. This property takes effect when `CostOptimization` is set to true. Valid values:

-   EntryLevel: entry level (shared instance types). Instance types of this level are the most cost-effective but may not ensure consistent computing performance. Instance types of this level are suitable for business scenarios in which the CPU utilization is low. For more information, see [Shared instance families](/help/en/ecs/user-guide/shared-instance-families).
    
-   EnterpriseLevel: enterprise level. Instance types of this level provide stable performance and dedicated resources and are suitable for business scenarios that require high stability. For more information, see [Overview of instance families](/help/en/ecs/user-guide/overview-of-instance-families).
    
-   CreditEntryLevel: credit-based entry level (burstable instance types). CPU credits are used to ensure computing performance. Instance types of this level are suitable for business scenarios in which CPU utilization is low but may fluctuate in specific scenarios. For more information, see [Overview](/help/en/ecs/user-guide/burst-performance-instance-overview).
    

LoadBalancerWeight

Integer

No

Yes

The weight of the elastic container instance that works as a backend server.

Valid values: 1 to 100.

Memory

Number

No

Yes

The memory size of the container.

None.

NtpServers

List

No

Yes

The Network Time Protocol (NTP) servers.

None.

ResourceGroupId

String

No

Yes

The ID of the resource group.

None.

RamRoleName

String

No

Yes

The name of the Resource Access Management (RAM) role for the elastic container instance.

Elastic container instances and ECS instances share the same RAM role.

RestartPolicy

String

No

Yes

The restart policy for the elastic container instance.

Valid values:

-   Never: The elastic container instance is never restarted.
    
-   Always: The elastic container instance is always restarted.
    
-   OnFailure: The elastic container instance is restarted upon failures.
    

SpotPriceLimit

Number

No

Yes

The maximum hourly price of a preemptible instance.

This property is returned only when SpotStrategy is set to SpotWithPriceLimit.

SpotStrategy

String

No

Yes

The preemption policy for the elastic container instance.

Valid values:

-   NoSpot: The elastic container instance is created as a regular pay-as-you-go instance.
    
-   SpotWithPriceLimit: The elastic container instance is created as a preemptible instance that has a user-defined maximum hourly price.
    
-   SpotAsPriceGo: The elastic container instance is created as a preemptible instance whose bidding price is based on the market price at the time of purchase.
    

SecurityContextSysctls

List

No

Yes

The system information about the security context in which the elastic container instance runs.

None.

Tags

List

No

Yes

The tags of the elastic container instance. Tags are in the key-value pair format.

For more information, see [Tags properties](#6209685017ks9).

TerminationGracePeriodSeconds

Integer

No

Yes

The buffer time of the program.

The buffer time during which the program handles operations before the program stops.

Volumes

List

No

Yes

The information about the volumes.

For more information, see [Volumes properties](#c9ae214b3eths).

## Containers syntax

```
"Containers": [
  {
    "EnvironmentVars": List,
    "ReadinessProbeExecCommands": List,
    "Memory": Number,
    "ReadinessProbeTcpSocketPort": Integer,
    "Cpu": Number,
    "ReadinessProbeHttpGetPath": String,
    "ReadinessProbeHttpGetScheme": String,
    "Image": String,
    "Gpu": Integer,
    "StdinOnce": Boolean,
    "Name": String,
    "LivenessProbeHttpGetScheme": String,
    "LivenessProbeTimeoutSeconds": Integer,
    "LivenessProbeFailureThreshold": Integer,
    "LivenessProbeHttpGetPath": String,
    "VolumeMounts": List,
    "LivenessProbeInitialDelaySeconds": Integer,
    "SecurityContextRunAsUser": Integer,
    "LivenessProbeTcpSocketPort": Integer,
    "Commands": List,
    "Tty": Boolean,
    "ReadinessProbePeriodSeconds": Integer,
    "LivenessProbePeriodSeconds": Integer,
    "LivenessProbeExecCommands": List,
    "LivenessProbeSuccessThreshold": Integer,
    "ReadinessProbeSuccessThreshold": Integer,
    "ReadinessProbeInitialDelaySeconds": Integer,
    "Args": List,
    "ReadinessProbeFailureThreshold": Integer,
    "SecurityContextCapabilitiesAdd": List,
    "Ports": List,
    "ReadinessProbeHttpGetPort": Integer,
    "Stdin": Boolean,
    "WorkingDir": String,
    "ImagePullPolicy": String,
    "LivenessProbeHttpGetPort": Integer,
    "ReadinessProbeTimeoutSeconds": Integer
  }
]
```

## Containers properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

EnvironmentVars

List

No

Yes

The environment variables.

For more information, see [EnvironmentVars properties](#e82dc1b70b99q).

ReadinessProbeExecCommands

List

No

Yes

The commands that are run in the container to execute readiness probes.

None.

Memory

Number

No

Yes

The memory size.

None.

ReadinessProbeTcpSocketPort

Integer

No

Yes

The port of the TCP sockets for readiness probes.

None.

Cpu

Number

No

Yes

The number of vCPUs of the container.

None.

ReadinessProbeHttpGetPath

String

No

Yes

The path to which the system sends HTTP GET requests for readiness probes.

None.

ReadinessProbeHttpGetScheme

String

No

Yes

The protocol type of the HTTP GET requests for readiness probes.

Valid values:

-   HTTP
    
-   HTTPS
    

Image

String

Yes

Yes

The image of the container.

None.

Gpu

Integer

No

Yes

The number of GPUs used by the container.

None.

StdinOnce

Boolean

No

Yes

Specifies whether to enable the session persistence feature.

When Stdin is set to true, standard input streams remain open across multiple attachment sessions.

If StdinOnce is set to true, standard input streams are opened upon container startups, are empty until the first client is attached, and then remain open to receive data until the client is detached. When the client is detached, the standard input streams are closed and remain closed until the container is restarted.

Name

String

Yes

Yes

The custom name of the container.

None.

LivenessProbeHttpGetScheme

String

No

Yes

The protocol type of the HTTP GET requests for liveness probes.

Valid values:

-   HTTP
    
-   HTTPS
    

LivenessProbeTimeoutSeconds

Integer

No

Yes

The timeout period of a liveness probe.

Default value: 1. Minimum value: 1. Unit: seconds.

LivenessProbeFailureThreshold

Integer

No

Yes

The number of times that a successful liveness probe must consecutively fail before it is declared failed.

Default value: 3.

LivenessProbeHttpGetPath

String

No

Yes

The path to which the system sends HTTP GET requests for liveness probes.

None.

VolumeMounts

List

No

Yes

The volumes to be mounted.

For more information, see [VolumeMounts properties](#79607d8d97hwq).

LivenessProbeInitialDelaySeconds

Integer

No

Yes

The period of time after the container is started and before a liveness probe is initiated.

SecurityContextRunAsUser

Integer

No

Yes

The ID of the user that runs the container.

None.

LivenessProbeTcpSocketPort

Integer

No

Yes

The port of the TCP sockets for liveness probes.

None.

Commands

List

No

Yes

The startup commands of the container.

You can specify up to 20 startup commands. Each command can be up to 256 characters in length.

Tty

Boolean

No

Yes

Specifies whether to enable the Interaction feature.

Valid values:

-   true
    
-   false
    

ReadinessProbePeriodSeconds

Integer

No

Yes

The interval at which the system executes readiness probes.

Default value: 10. Minimum value: 1. Unit: seconds.

LivenessProbePeriodSeconds

Integer

No

Yes

The interval at which the system executes liveness probes.

Default value: 10. Minimum value: 1. Unit: seconds.

LivenessProbeExecCommands

List

No

Yes

The commands that are run to execute liveness probes.

The commands are run in the container.

LivenessProbeSuccessThreshold

Integer

No

Yes

The number of times that a failed liveness probe must consecutively succeed before it is declared successful.

Default value: 1. Set the value to 1.

ReadinessProbeSuccessThreshold

Integer

No

Yes

The number of times that a failed readiness probe must consecutively succeed before it is declared successful.

Default value: 1. Set the value to 1.

ReadinessProbeInitialDelaySeconds

Integer

No

Yes

The cooldown period of the scale-out or scale-in operation.

Valid values: 0 to 3600. Unit: seconds. Default value: 0.

Args

List

No

Yes

The arguments that correspond to the startup commands of the container.

You can specify up to 10 arguments.

ReadinessProbeFailureThreshold

Integer

No

Yes

The number of times that a successful readiness probe must consecutively fail before it is declared failed.

Default value: 3.

SecurityContextCapabilitiesAdd

List

No

Yes

The permissions that you want to grant to processes in the init container.

Valid values:

-   NET\_ADMIN
    
-   NET\_RAW
    

Ports

List

No

Yes

The ports and protocols that you want to expose.

For more information, see [Ports properties](#ed38099e88e5i).

ReadinessProbeHttpGetPort

Integer

No

Yes

The port of the HTTP GET requests for readiness probes.

None.

Stdin

Boolean

No

Yes

Specifies whether the container can allocate a buffer to standard input streams in the container runtime.

If you do not specify this property, an end-of-file (EOF) error occurs.

Default value: false.

WorkingDir

String

No

Yes

The working directory.

None.

ImagePullPolicy

String

No

Yes

The image pulling policy.

None.

LivenessProbeHttpGetPort

Integer

No

Yes

The port of the HTTP GET requests for liveness probes.

None.

ReadinessProbeTimeoutSeconds

Integer

No

Yes

The timeout period of a readiness probe.

Default value: 1. Minimum value: 1. Unit: seconds.

## EnvironmentVars syntax

```
"EnvironmentVars": [
  {
    "Value": String,
    "Key": String
  }
]
```

## EnvironmentVars properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Value

String

No

Yes

The value of the environment variable.

None.

Key

String

No

Yes

The name of the environment variable.

None.

## AcrRegistryInfos syntax

```
"AcrRegistryInfos": [
  {
    "RegionId": String,
    "InstanceId": String,
    "Domains": List,
    "InstanceName": String
  }
]
```

## AcrRegistryInfos properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

RegionId

String

No

Yes

The region ID of the Container Registry Enterprise Edition instance.

None.

InstanceId

String

Yes

Yes

The ID of the Container Registry Enterprise Edition instance.

None.

Domains

List

No

Yes

The domain names of the Container Registry Enterprise Edition instance.

None.

InstanceName

String

No

Yes

The name of the Container Registry Enterprise Edition instance.

None.

## InitContainers syntax

```
"InitContainers": [
  {
    "SecurityContextRunAsUser": Integer,
    "Memory": Number,
    "Args": List,
    "ImagePullPolicy": String,
    "Commands": List,
    "Gpu": Integer,
    "WorkingDir": String,
    "InitContainerEnvironmentVars": List,
    "SecurityContextCapabilitiesAdd": List,
    "Cpu": Number,
    "InitContainerVolumeMounts": List,
    "Image": String,
    "Name": String
  }
]
```

## InitContainers properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

SecurityContextRunAsUser

Integer

No

Yes

The ID of the user that runs the container.

None.

Memory

Number

No

Yes

The memory size.

None.

Args

List

No

Yes

The arguments that correspond to the startup commands of the container.

You can specify up to 10 arguments.

ImagePullPolicy

String

No

Yes

The image pulling policy.

None.

Commands

List

No

Yes

The startup commands of the container.

You can specify up to 20 startup commands. Each command can be up to 256 characters in length.

Gpu

Integer

No

Yes

The number of GPUs used by the container.

None.

WorkingDir

String

No

Yes

The working directory.

None.

InitContainerEnvironmentVars

List

No

Yes

The information about the environment variables.

For more information, see the "InitContainerEnvironmentVars properties" section of this topic.

SecurityContextCapabilitiesAdd

List

No

Yes

The permissions that you want to grant to processes in the container.

Valid values: NET\_ADMIN and NET\_RAW.

Cpu

Number

No

Yes

The number of vCPUs.

None.

InitContainerVolumeMounts

List

No

Yes

The volumes to be mounted.

For more information, see the "InitContainerVolumeMounts properties" section of this topic.

Image

String

Yes

Yes

The image of the container.

None.

Name

String

Yes

Yes

The name of the container.

None.

## VolumeMounts syntax

```
"VolumeMounts": [
  {
    "ReadOnly": Boolean,
    "MountPath": String,
    "SubPath": String,
    "MountPropagation": String,
    "Name": String
  }
]
```

## VolumeMounts properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

ReadOnly

Boolean

No

Yes

Specifies whether the mount directory is read-only.

None.

MountPath

String

No

Yes

The mount directory.

The data in this directory is overwritten by the data on the volume. Exercise caution when you specify this property.

SubPath

String

No

Yes

The subdirectory of the volume.

You can use this property to mount subdirectories of the same volume to directories of the container in the pod.

MountPropagation

String

No

Yes

The mount propagation settings of the volume.

Mount propagation allows volumes that are mounted on a container to be shared with other containers in the same pod, or even with other pods on the same node. Valid values:

-   None: The volume mount does not receive subsequent mounts that are performed on this volume or on the subdirectories of this volume.
    
-   HostToCotainer: The volume mount receives subsequent mounts that are performed on this volume or on the subdirectories of this volume.
    
-   Bidirectional: This value is similar to HostToCotainer. The volume mount receives subsequent mounts that are performed on this volume or on the subdirectories of this volume. In addition, all volume mounts that are performed on the container are propagated back to the host and all containers of all pods that use the same volume.
    

Name

String

No

Yes

The name of the volume to be mounted.

None.

## InitContainerVolumeMounts syntax

```
"VolumeMounts": [
  {
    "ReadOnly": Boolean,
    "MountPath": String,
    "SubPath": String,
    "MountPropagation": String,
    "Name": String
  }
]
```

## InitContainerVolumeMounts properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

ReadOnly

Boolean

No

Yes

Specifies whether the mount directory is read-only.

None.

MountPath

String

No

Yes

The mount directory.

The data in this directory is overwritten by the data on the volume. Exercise caution when you specify this property.

SubPath

String

No

Yes

The subdirectory of the volume.

You can use this property to mount subdirectories of the same volume to directories of the container in the pod.

MountPropagation

String

No

Yes

The mount propagation settings of the volume.

Mount propagation allows volumes that are mounted on a container to be shared with other containers in the same pod, or even with other pods on the same node. Valid values:

-   None: The volume mount does not receive subsequent mounts that are performed on this volume or on the subdirectories of this volume.
    
-   HostToCotainer: The volume mount receives subsequent mounts that are performed on this volume or on the subdirectories of this volume.
    
-   Bidirectional: This value is similar to HostToCotainer. The volume mount receives subsequent mounts that are performed on this volume or on the subdirectories of this volume. In addition, all volume mounts that are performed on the container are propagated back to the host and all containers of all pods that use the same volume.
    

Name

String

Yes

Yes

The name of the volume to be mounted.

None.

## InitContainerEnvironmentVars syntax

```
"InitContainerEnvironmentVars": [
  {
    "Value": String,
    "Key": String
  }
]
```

## InitContainerEnvironmentVars properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Key

String

No

Yes

The name of the environment variable

The name must be 1 to 128 characters in length and can contain letters, digits, and underscores (\_). It cannot start with a digit.

Value

String

No

Yes

The value of the environment variable.

The value can be up to 256 characters in length.

## HostAliases syntax

```
"HostAliases": [
  {
    "Ip": String,
    "Hostnames": List
  }
]
```

## HostAliases properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Ip

String

Yes

Yes

The IP address.

None.

Hostnames

List

No

Yes

The hostnames.

None.

## DnsConfigOptions syntax

```
"DnsConfigOptions": [
  {
    "Value": String,
    "Name": String
  }
]
```

## DnsConfigOptions properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Value

String

Yes

Yes

The value of the option.

None.

Name

String

Yes

Yes

The name of the option.

None.

## SecurityContextSysctls syntax

```
"SecurityContextSysctls": [
  {
    "Value": String,
    "Name": String
  }
]
```

## SecurityContextSysctls properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Name

String

Yes

Yes

The variable name of the security context in which the elastic container instance runs.

None.

Value

String

No

Yes

The variable value of the security context in which the elastic container instance runs.

None.

## ImageRegistryCredentials syntax

```
"ImageRegistryCredentials": [
  {
    "UserName": String,
    "Server": String,
    "Password": String
  }
]
```

## ImageRegistryCredentials properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

UserName

String

Yes

Yes

The username of the image repository.

None.

Server

String

Yes

Yes

The registered address of the image repository.

None.

Password

String

Yes

Yes

The password of the image repository.

None.

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

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Key

String

Yes

Yes

The key of the tag.

None.

Value

String

No

Yes

The value of the tag.

None.

## Volumes syntax

```
"Volumes": [
  {
    "HostPathVolumeType": String,
    "EmptyDirVolumeSizeLimit": String,
    "FlexVolumeFsType": String,
    "NFSVolumeServer": String,
    "DiskVolumeDiskSize": Integer,
    "ConfigFileVolumeConfigFileToPaths": List,
    "Name": String,
    "NFSVolumeReadOnly": Boolean,
    "HostPathVolumePath": String,
    "NFSVolumePath": String,
    "Type": String,
    "FlexVolumeDriver": String,
    "DiskVolumeDiskId": String,
    "ConfigFileVolumeDefaultMode": Integer,
    "FlexVolumeOptions": String,
    "EmptyDirVolumeMedium": String
  }
]
```

## Volumes properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

HostPathVolumeType

String

No

Yes

The type of the hostPath volume.

None.

EmptyDirVolumeSizeLimit

String

No

Yes

The size of the emptyDir volume.

None.

FlexVolumeFsType

String

No

Yes

The type of the file system to be mounted.

None.

NFSVolumeServer

String

No

Yes

The address of the Network File System (NFS) server.

None.

DiskVolumeDiskSize

Integer

No

Yes

The size of the disk volume.

Unit: GiB.

ConfigFileVolumeConfigFileToPaths

List

No

Yes

The paths of the ConfigFile volumes.

For more information, see [ConfigFileVolumeConfigFileToPaths properties](#2a96d591da25f).

Name

String

Yes

Yes

The name of the volume.

None.

NFSVolumeReadOnly

Boolean

No

Yes

Specifies whether the NFS volume is read-only.

None.

HostPathVolumePath

String

No

Yes

The path of the hostPath volume on the host.

None.

NFSVolumePath

String

No

Yes

The path of the NFS volume.

None.

Type

String

Yes

Yes

The type of the volume.

Valid values:

-   EmptyDirVolume: an emptyDir volume.
    
-   NFSVolume: an NFS volume.
    
-   ConfigFileVolume: a ConfigFile volume.
    
-   FlexVolume: a volume that is mounted by using FlexVolume.
    

FlexVolumeDriver

String

No

Yes

The name of the FlexVolume driver.

None.

DiskVolumeDiskId

String

No

Yes

The ID of the disk volume.

None.

ConfigFileVolumeDefaultMode

Integer

No

Yes

The default permissions on the ConfigFile volume.

None.

FlexVolumeOptions

String

No

Yes

The FlexVolume options.

Each option is a key-value pair in the JSON format.

For example, when you use FlexVolume to mount a cloud disk, specify a value for this property in the `{"volumeId":"d-2zehdahrwoa7srg****","performanceLevel": "PL2"}` format.

EmptyDirVolumeMedium

String

No

Yes

The storage medium of the emptyDir volume.

By default, this property is empty, and the node file system is used. You can set this property to memory. A value of memory specifies that the memory is used.

## ConfigFileVolumeConfigFileToPaths syntax

```
"ConfigFileVolumeConfigFileToPaths": [
  {
    "Path": String,
    "Content": String,
    "Mode": Integer
  }
]
```

## ConfigFileVolumeConfigFileToPaths properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Path

String

Yes

Yes

The relative path of the configuration file.

None.

Content

String

No

Yes

The content of the configuration file.

None.

Mode

Integer

No

Yes

The permissions on the directory of the ConfigFile volume.

None.

## Ports syntax

```
"Ports": [
  {
    "Port": Integer,
    "Protocol": String
  }
]
```

## Ports properties

**Property**

**Type**

**Required**

**Editable**

**Description**

**Constraint**

Port

Integer

Yes

Yes

The port.

Valid values: 1 to 65535.

Protocol

String

Yes

Yes

The protocol type.

Valid values:

-   TCP
    
-   UDP
    

## Return values

Fn::GetAtt

ScalingConfigurationId: the ID of the scaling configuration.

## Examples

YAML

```
ROSTemplateFormatVersion: '2015-09-01'
Parameters:
  SecurityGroupId:
    AssociationProperty: ALIYUN::ECS::SecurityGroup::SecurityGroupId
    Required: true
    Type: String
    Description:
      en: |-
        The ID of the security group with which you want to associate the elastic container instance. Elastic container instances that are associated with the same security group can access each other.
        If you do not specify a security group, the system uses the default security group in the region that you selected. Make sure that the inbound rules of the security group contain the protocols and the port numbers of the containers that you want to expose. If you do not have a default security group in the region, the system creates a default security group and adds the declared container protocols and port numbers to the inbound rules of the security group.
  ContainerGroupName:
    Required: true
    Type: String
    Description:
      en: The name of the elastic container instance.
  ScalingConfigurationName:
    Required: true
    Type: String
    Description:
      en: |-
        The name of the scaling configuration. The name must be 2 to 64 characters in length and can contain letters, digits, underscores (_), hyphens (-), and periods (.). The name must start with a letter or a digit.
        The name of the scaling configuration must be unique in a region. If you do not specify this parameter, the scaling configuration ID is used.
  ScalingGroupId:
    AssociationProperty: ALIYUN::ESS::AutoScalingGroup::AutoScalingGroupId
    Required: true
    Type: String
    Description:
      en: The ID of the scaling group for which you want to create the scaling configuration.
Resources:
  EciScalingConfiguration:
    Type: ALIYUN::ESS::EciScalingConfiguration
    Properties:
      Containers:
        - LivenessProbeHttpGetPath: ''
          Name: container-1
          Image: registry-vpc.cn-shenzhen.aliyuncs.com/eci_open/nginx:1.14.2-alpine
          Memory: 0
          WorkingDir: ''
          LivenessProbeHttpGetScheme: HTTP
          ReadinessProbeHttpGetScheme: HTTP
          ReadinessProbeHttpGetPath: ''
          ImagePullPolicy: IfNotPresent
          Gpu: 0
          Cpu: 0
      SecurityGroupId:
        Ref: SecurityGroupId
      ScalingGroupId:
        Ref: ScalingGroupId
      ScalingConfigurationName:
        Ref: ScalingConfigurationName
      ContainerGroupName:
        Ref: ContainerGroupName
Outputs:
  ScalingConfigurationId:
    Description: The ID of the elastic container instance.
    Value:
      Fn::GetAtt:
        - EciScalingConfiguration
        - ScalingConfigurationId
```

JSON

```
{
  "ROSTemplateFormatVersion": "2015-09-01",
  "Parameters": {
    "SecurityGroupId": {
      "AssociationProperty": "ALIYUN::ECS::SecurityGroup::SecurityGroupId",
      "Required": true,
      "Type": "String",
      "Description": {
        "en": "The ID of the security group with which you want to associate the elastic container instance. Elastic container instances that are associated with the same security group can access each other.\nIf you do not specify a security group, the system uses the default security group in the region that you selected. Make sure that the inbound rules of the security group contain the protocols and the port numbers of the containers that you want to expose. If you do not have a default security group in the region, the system creates a default security group and adds the declared container protocols and port numbers to the inbound rules of the security group."
      }
    },
    "ContainerGroupName": {
      "Required": true,
      "Type": "String",
      "Description": {
        "en": "The name of the elastic container instance."
      }
    },
    "ScalingConfigurationName": {
      "Required": true,
      "Type": "String",
      "Description": {
        "en": "The name of the scaling configuration. The name must be 2 to 64 characters in length and can contain letters, digits, underscores (_), hyphens (-), and periods (.). The name must start with a letter or a digit.\nThe name of the scaling configuration must be unique in a region. If you do not specify this parameter, the scaling configuration ID is used."
      }
    },
    "ScalingGroupId": {
      "AssociationProperty": "ALIYUN::ESS::AutoScalingGroup::AutoScalingGroupId",
      "Required": true,
      "Type": "String",
      "Description": {
        "en": "The ID of the scaling group for which you want to create the scaling configuration."
      }
    }
  },
  "Resources": {
    "EciScalingConfiguration": {
      "Type": "ALIYUN::ESS::EciScalingConfiguration",
      "Properties": {
        "Containers": [
          {
            "LivenessProbeHttpGetPath": "",
            "Name": "container-1",
            "Image": "registry-vpc.cn-shenzhen.aliyuncs.com/eci_open/nginx:1.14.2-alpine",
            "Memory": 0,
            "WorkingDir": "",
            "LivenessProbeHttpGetScheme": "HTTP",
            "ReadinessProbeHttpGetScheme": "HTTP",
            "ReadinessProbeHttpGetPath": "",
            "ImagePullPolicy": "IfNotPresent",
            "Gpu": 0,
            "Cpu": 0
          }
        ],
        "SecurityGroupId": {
          "Ref": "SecurityGroupId"
        },
        "ScalingGroupId": {
          "Ref": "ScalingGroupId"
        },
        "ScalingConfigurationName": {
          "Ref": "ScalingConfigurationName"
        },
        "ContainerGroupName": {
          "Ref": "ContainerGroupName"
        }
      }
    }
  },
  "Outputs": {
    "ScalingConfigurationId": {
      "Description": "The ID of the elastic container instance.",
      "Value": {
        "Fn::GetAtt": [
          "EciScalingConfiguration",
          "ScalingConfigurationId"
        ]
      }
    }
  }
}
```

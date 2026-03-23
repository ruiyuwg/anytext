## addon

Configurations of cluster components.

Parameter

Type

Example

Description

name

String

nginx-ingress-controller

The name of a component.

config

String

{\\"IngressSlbNetworkType\\":\\"internet\\"}

The configurations of a component.

disabled

Boolean

false

Specifies whether a component is automatically installed in a newly created cluster. In addition to the required components, some optional components, such as Simple Log Service components, are also installed when you create a cluster. You can set this parameter to disable the automatic installation of an optional component. You can install the component in the console or by calling the API after the cluster is created. Valid values:

-   `true`: disables the automatic installation of a component.
-   `false`: allows the automatic installation of a component.

## data\_disk

Configurations of node data disks.

Parameter

Type

Example

Description

category

String

cloud\_ssd

The type of data disk. Valid values:

-   `cloud`: basic disk.
-   `cloud_efficiency`: ultra disk.
-   `cloud_ssd`: standard SSD.
-   `cloud_essd`: enhanced SSD.
-   `cloud_auto`: ESSD AutoPL.

Default value: `cloud_efficiency`.

size

Long

40

The size of a data disk. Unit: GiB.

Valid values: 40 to 32768.

Default value: `120`.

encrypted

String

true

Specifies whether to encrypt a data disk. Valid values:

-   `true`: encrypts a data disk.
-   `false`: does not encrypt a data disk.

Default value: `false`.

auto\_snapshot\_policy\_id

String

sp-2zej1nogjvovnz4z\*\*\*\*

The ID of an automatic snapshot policy. Automatic backup is performed for a disk based on the specified automatic snapshot policy.

By default, this parameter is empty. This indicates that automatic backup is disabled.

performance\_level

String

PL1

The performance level (PL) of a data disk. This parameter takes effect only for enhanced SSDs. You can specify a higher PL if you increase the size of a data disk. For more information, see [Enhanced SSDs](/help/en/ecs/user-guide/essds).

provisioned\_iops

Long

1000

The predefined IOPS of a data disk. Valid values: 0 to min{50,000, 1,000 × Capacity - Baseline IOPS}. Baseline IOPS = min{1,800 + 50 × Capacity, 50,000}

This parameter is supported only when `DiskCategory` is set to `cloud_auto`. For more information, see [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks).

bursting\_enabled

Boolean

true

Specifies whether to enable the burst feature for the data disk. Valid values:

-   `true`: enables the burst feature for the data disk.
-   `false`: disables the burst feature for the data disk.

This parameter is supported only when `DiskCategory` is set to `cloud_auto`. For more information, see [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks).

## maintenance\_window

Configurations of the cluster maintenance window.

Parameter

Type

Example

Description

enable

Boolean

false

Specifies whether to enable the cluster maintenance window. Valid values:

-   `true`: enables the cluster maintenance window.
-   `false`: disables the cluster maintenance window.

Default value: `false`.

maintenance\_time

String

03:00:00Z

The start time of the cluster maintenance window. The value must be in the standard Golang time format. Example: 15:04:05Z.

duration

String

3h

The duration of the cluster maintenance window. The duration ranges from 1 hour to 24 hours. Unit: h.

Default value: 3h.

weekly\_period

String

Monday,Thursday

The day of the week when maintenance is performed. Separate multiple days with commas (,). Valid values: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, and Sunday.

Default value: `Thursday`.

## nodepool

Configurations of node pools.

Parameter

Type

Example

Description

auto\_scaling

Object

The auto scaling configuration of the node pool.

enable

Boolean

true

Specifies whether to enable auto scaling for a node pool.

-   `true`: enables auto scaling for the node pool.
-   `false`: disables auto scaling for the node pool. If you set this parameter to false, other parameters in the `auto_scaling` section do not take effect.

Default value: `false`.

max\_instances

Long

10

The maximum number of Elastic Compute Service (ECS) instances that can be created in the node pool.

min\_instances

Long

0

The minimum number of ECS instances that must be kept in the node pool.

type

String

cpu

The instance types that can be used for the auto scaling of the node pool. Valid values:

-   `cpu`: regular instance.
-   `gpu`: GPU-accelerated instance.
-   `gpushare`: shared GPU-accelerated instance.
-   `spot`: preemptible instance.

Default value: `cpu`.

is\_bond\_eip

Boolean

true

This parameter is deprecated.

Specifies whether to associate an EIP with a node pool. Valid values:

-   `true`: associates an EIP with the node pool.
-   `false`: does not associate an EIP with the node pool.

Default value: `false`.

eip\_internet\_charge\_type

String

PayByBandwidth

This parameter is deprecated.

The metering method of the EIP. Valid values:

-   `PayByBandwidth`: pay-by-bandwidth.
-   `PayByTraffic`: pay-by-data-transfer.

Default value: PayByBandwidth.

eip\_bandwidth

Long

5

This parameter is deprecated.

The maximum bandwidth of the EIP. Unit: Mbit/s.

kubernetes\_config

Object

The configuration of the cluster where the node pool is deployed.

cms\_enabled

Boolean

true

Specifies whether to install the CloudMonitor agent on ECS nodes. After the CloudMonitor agent is installed on ECS nodes, you can view monitoring information about the instances in the CloudMonitor console. We recommend that you install the CloudMonitor agent. Valid values:

-   `true`: installs the CloudMonitor agent on ECS nodes.
-   `false`: does not install the CloudMonitor agent on ECS nodes.

Default value: `false`.

cpu\_policy

String

none

The CPU management policy of the nodes in the node pool. The following policies are supported if the Kubernetes version of the cluster is 1.12.6 or later.

-   `static`: allows pods with specific resource characteristics on the node to be granted enhanced CPU affinity and exclusivity.
-   `none`: indicates that the default CPU affinity is used.

Default value: `none`.

labels

Array of [tag](#tag)

The labels of the nodes in the node pool. You can add labels to the nodes in the cluster.

runtime

String

containerd

The container runtime. Valid values:

-   `containerd`: supports all Kubernetes versions. We recommend that you use containerd.
-   `Sandboxed-Container.runv`: allows you to run applications in sandboxed containers, which provide higher security. Only Kubernetes 1.24 and earlier support Sandboxed-Container.
-   `docker`: supports Kubernetes 1.22 and earlier.

Default value: `containerd`.

runtime\_version

String

1.6.20

The version of the container runtime.

taints

Array of [taint](#taint)

The taints.

user\_data

String

MXM=

The user-defined data on the node.

node\_name\_mode

String

customized,aliyun,ip,com

A custom node name consists of a prefix, a node IP address, and a suffix.

-   The prefix and suffix can contain multiple parts that are separated by periods (.). Each part can contain lowercase letters, digits, and hyphens (-). A custom node name must start and end with a digit or lowercase letter.
-   The node IP address in a custom node name is the private IP address of the node.

Set the value in the customized,aliyun,ip,com format. The value consists of four parts that are separated by commas (,). customized and ip are fixed content. aliyun is the prefix and com is the suffix. Example: aliyun.192.168.xxx.xxx.com.

nodepool\_info

Object

The configuration of the node pool.

name

String

np-test

The name of the node pool.

resource\_group\_id

String

rg-acfmyvw3wjm\*\*\*\*

The ID of the resource group to which the node pool belongs.

type

String

ess

The type of the node pool. Valid values:

-   `ess`: node pool.
-   `edge`: edge node pool.

scaling\_group

Object

The configuration of the scaling group that is used by the node pool.

auto\_renew

Boolean

false

Specifies whether to enable auto-renewal for a node pool. This parameter takes effect only when `instance_charge_type` is set to `PrePaid`. Valid values:

-   `true`: enables auto-renewal.
-   `false`: disables auto-renewal.

Default value: `true`.

auto\_renew\_period

Long

0

The auto-renewal period for the nodes in the node pool. This parameter takes effect and is required only when `instance_charge_type` is set to `PrePaid`.

If you specify `PeriodUnit=Month`, the valid values are 1, 2, 3, 6, and 12.

Default value: 1.

data\_disks

Array of [data\_disk](#data-disk)

The configurations of the data disks that you want to attach to the nodes in the node pool.

image\_id

String

aliyun\_2\_1903\_x64\_20G\_alibase\_20200904.vhd

The ID of a custom image. By default, the image provided by ACK is used.

instance\_charge\_type

String

PostPaid

The billing method of the nodes in the node pool. Valid values:

-   `PrePaid`: the subscription billing method.
-   `PostPaid`: the pay-as-you-go billing method.

Default value: `PostPaid`.

instance\_types

Array of String

ecs.n1.medium

The type of instance.

key\_pair

String

np-key

The name of the key pair. You must set this parameter or the `login_password` parameter.

**Note**

You must set `key_pair` if the node pool is a managed node pool.

login\_password

String

Hello1234

The password for SSH logon. You must set this parameter or the `key_pair` parameter. The password must be 8 to 30 characters in length, and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.

period

Long

0

The subscription duration of the nodes in a node pool. This parameter takes effect and is required only when `instance_charge_type` is set to `PrePaid`. The valid values of `period` are 1, 2, 3, 6, and 12 when `period_unit` is set to Month.

Default value: 1.

period\_unit

String

Month

The unit of the subscription duration. This parameter is required when `instance_charge_type` is set to `PrePaid`.

Valid value: `Month`.

platform

String

AliyunLinux

The release version of the operating system. Valid values:

-   `CentOS`
-   `AliyunLinux`
-   `Windows`
-   `WindowsCore`

Default value: `AliyunLinux`.

rds\_instances

Array of String

rm-2zey3t89t6280\*\*\*\*

The IDs of ApsaraDB RDS instances.

spot\_strategy

String

NoSpot

The type of preemptible instance. Valid values:

-   NoSpot: a non-preemptible instance.
-   SpotWithPriceLimit: a preemptible instance that is configured with the highest bid price.
-   SpotAsPriceGo: a preemptible instance for which the system automatically bids based on the current market price.

For more information, see [Preemptible instances](/help/en/eci/user-guide/create-a-preemptible-elastic-container-instance).

spot\_price\_limit

Array

The instance type for preemptible instances and the price limit of the instance type.

instance\_type

String

ecs.c6.large

The instance type of preemptible instances.

price\_limit

String

0.39

The maximum bid price of a preemptible instance.

scaling\_policy

String

release

The scaling mode of the scaling group. Valid values:

-   `release`: the standard mode. ECS instances are created and released based on resource usage.
-   `recycle`: the swift mode. ECS instances are created, stopped, or started during scaling events. This reduces the time required for the next scale-out event. When the instance is stopped, you are charged only for the storage service. This does not apply to ECS instances attached with local disks.

Default value: `release`.

security\_group\_id

String

sg-2zeihch86ooz9io4\*\*\*\*

Specifies the ID of the security group to which you want to add the node pool. You must set this parameter or `security_group_ids`. We recommend that you set `security_group_ids`.

security\_group\_ids

Array of String

sg-2zeihch86ooz9io4\*\*\*\*

The security group ID.

system\_disk\_category

String

cloud\_efficiency

The type of system disk. Valid values:

-   `cloud_efficiency`: ultra disk.
-   `cloud_ssd`: standard SSD.
-   `cloud_essd`: enhanced SSD.
-   `cloud_auto`: ESSD AutoPL.

Default value: `cloud_efficiency`.

system\_disk\_size

Long

120

The system disk size of a node. Unit: GiB.

Valid values: 40 to 500.

system\_disk\_performance\_level

String

PL1

The performance level (PL) of the system disk that you want to use for the node. This parameter takes effect only for ESSDs.

-   PL0: moderate maximum concurrent I/O performance and low I/O latency.
-   PL1: moderate maximum concurrent I/O performance and low I/O latency.
-   PL2: high maximum concurrent I/O performance and low I/O latency.
-   PL3: ultra-high maximum concurrent I/O performance and ultra-low I/O latency.

system\_disk\_provisioned\_iops

Long

1000

The predefined IOPS of a system disk. Valid values: 0 to min{50,000, 1,000 × Capacity - Baseline IOPS}. Baseline IOPS = min{1,800 + 50 × Capacity, 50,000}

This parameter is supported only when `SystemDiskCategory` is set to `cloud_auto`. For more information, see [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks).

system\_disk\_bursting\_enabled

Boolean

true

Specifies whether to enable the burst feature for system disks. Valid values:

-   true: enables the burst feature.
-   false: disables the burst feature.

This parameter is supported only when `SystemDiskCategory` is set to `cloud_auto`. For more information, see [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks).

tags

Array

The labels that you want to add to the ECS instances.

Each key must be unique and cannot exceed 128 characters in length. Neither keys nor values can start with aliyun or acs:. Neither keys nor values can contain https:// or http://.

key

String

key

The key of a label.

value

String

value

The value of a label.

vswitch\_ids

Array of String

vsw-2ze0fmpbwo140ahni\*\*\*\*

The IDs of vSwitches.

multi\_az\_policy

String

COST\_OPTIMIZED

The ECS instance scaling policy for a multi-zone scaling group. Valid values:

-   `PRIORITY`: the scaling group is scaled based on the VSwitchIds.N parameter. If an ECS instance cannot be created in the zone where the vSwitch that has the highest priority resides, Auto Scaling creates the ECS instance in the zone where the vSwitch that has the next highest priority resides.
    
-   `COST_OPTIMIZED`: ECS instances are created based on the vCPU unit price in ascending order. Preemptible instances are preferably created when preemptible instance types are specified in the scaling configuration. You can set the `CompensateWithOnDemand` parameter to specify whether to automatically create pay-as-you-go instances when preemptible instances cannot be created due to insufficient resources.
    
    **Note**
    
    `COST_OPTIMIZED` is valid only when multiple instance types are specified or at least one preemptible instance type is specified.
    
-   `BALANCE`: ECS instances are evenly distributed across multiple zones specified by the scaling group. If ECS instances become imbalanced among multiple zones due to insufficient inventory, you can call the RebalanceInstances operation of Auto Scaling to balance the instance distribution among zones. For more information, see [RebalanceInstances](/help/en/auto-scaling/developer-reference/api-rebalanceinstances).

Default value: `PRIORITY`.

on\_demand\_base\_capacity

Long

0

The minimum number of pay-as-you-go instances that must be kept in the scaling group. Valid values: 0 to 1000. If the number of pay-as-you-go instances is less than the value of this parameter, Auto Scaling preferably creates pay-as-you-go instances.

on\_demand\_percentage\_above\_base\_capacity

Long

20

The percentage of pay-as-you-go instances among the extra instances that exceed the number specified by `on_demand_base_capacity`. Valid values: 0 to 100.

spot\_instance\_pools

Long

5

The number of instance types that are available for creating preemptible instances. Auto Scaling creates preemptible instances of multiple instance types that are available at the lowest cost. Valid values: 1 to 10.

spot\_instance\_remedy

Boolean

false

Specifies whether to supplement preemptible instances. If this parameter is set to true, when the scaling group receives a system message that a preemptible instance is to be reclaimed, the scaling group attempts to create a new instance to replace this instance. Valid values:

-   `true`: enables the supplementation of preemptible instances.
-   `false`: disables the supplementation of preemptible instances.

compensate\_with\_on\_demand

Boolean

true

Specifies whether to automatically create pay-as-you-go instances to meet the required number of ECS instances if preemptible instances cannot be created due to reasons such as the cost or insufficient inventory. This parameter takes effect only when `multi_az_policy` is set to `COST_OPTIMIZED`. Valid values:

-   `true`: automatically creates pay-as-you-go instances to meet the required number of ECS instances if preemptible instances cannot be created.
-   `false`: does not create pay-as-you-go instances to meet the required number of ECS instances if preemptible instances cannot be created.

internet\_charge\_type

String

PayByBandwidth

The metering method of the public IP address. Valid values:

-   `PayByBandwidth`: pay-by-bandwidth.
-   `PayByTraffic`: pay-by-data-transfer.

internet\_max\_bandwidth\_out

Long

10

The maximum outbound bandwidth of the public IP address of the node. Unit: Mbit/s. Valid values: 1 to 100.

image\_type

String

AliyunLinux

The type of OS image. Specify this parameter or the platform parameter. Valid values:

-   `AliyunLinux`: Alinux2.
-   `AliyunLinux3`: Alinux3.
-   `AliyunLinux3Arm64`: Alinux3 ARM.
-   `AliyunLinuxUEFI`: Alinux2 UEFI.
-   `CentOS`: CentOS.
-   `Windows`: Windows.
-   `WindowsCore`: Windows Core.
-   `ContainerOS`: ContainerOS.

deploymentset\_id

String

ds-bp1d19mmbsv3jf6xxxxx

The ID of the deployment set to which the ECS instances in the node pool belong.

desired\_size

Long

2

The expected number of nodes in the node pool.

private\_pool\_options

Object

The configuration of the private node pool.

id

String

eap-bp67acfmxazb4\*\*\*\*

The ID of the private node pool.

match\_criteria

String

Open

The type of private node pool. This parameter specifies the type of private pool that you want to use to create instances. A private node pool is generated when an elasticity assurance or a capacity reservation service takes effect. The system selects a private node pool to launch instances. Valid values:

-   `Open`: open private pool. The system selects an open private node pool to launch instances. If no matching open private node pool is available, the resources in the public node pool are used.
    
-   `Target`: specific private pool. The system uses the resources of the specified private node pool to launch instances. If the specified private node pool is unavailable, instances cannot be launched.
    
-   `None`: no private pool is used. The resources of private node pools are not used to launch the instances.
    

tee\_config

Object

The configuration of confidential computing.

tee\_enable

Boolean

false

Specifies whether to enable confidential computing for the node pool.

management

Object

The configuration of the managed node pool feature.

enable

Boolean

false

Specifies whether to enable the managed node pool feature. Valid values:

-   `true`: enables the managed node pool feature.
-   `false`: disables the managed node pool feature. Other parameters in this section take effect only when `enable=true` is specified.

auto\_repair

Boolean

false

Specifies whether to enable auto repair. This parameter takes effect only when you specify `enable=true`. Valid values:

-   `true`: enables auto repair.
-   `false`: disables auto repair.

upgrade\_config

Object

The configuration of auto update. The configuration takes effect only when `enable=true` is specified.

auto\_upgrade

Boolean

false

Specifies whether to enable auto update. Valid values:

-   `true`: enables auto update.
-   `false`: disables auto update.

surge

Long

0

The number of additional nodes.

surge\_percentage

Long

0

The percentage of additional nodes to the nodes in the node pool. You must set this parameter or `surge`.

max\_unavailable

Long

0

The maximum number of nodes that can be in the Unavailable state. Valid values: 1 to 1000.

Default value: 1.

count

Long

1

This parameter is deprecated. Use the desired\_size parameter instead.

The number of nodes in the node pool.

interconnect\_mode

String

basic

The network type of the edge node pool. This parameter takes effect only when you set the `type` parameter of the node pool to `edge`. Valid values:

-   `basic`: basic.
-   `improved`: enhanced.
-   `private`: dedicated. Only Kubernetes 1.22 and later support this parameter.

interconnect\_config

Object

This parameter is deprecated.

The configurations of the edge node pool.

cen\_id

String

cen-ey9k9nfhz0f\*\*\*\*\*\*\*

This parameter is deprecated.

The ID of the Cloud Enterprise Network (CEN) instance that is associated with the enhanced edge node pool.

ccn\_id

String

ccn-qm5i0i0q9yi\*\*\*\*\*\*\*

This parameter is deprecated.

The ID of the Cloud Connect Network (CCN) instance that is associated with the enhanced edge node pool.

ccn\_region\_id

String

cn-shanghai

This parameter is deprecated.

The region to which the CCN instance that is associated with the enhanced edge node pool belongs.

bandwidth

Long

10

This parameter is deprecated.

The bandwidth of the enhanced edge node pool. Unit: Mbit/s.

improved\_period

String

1

This parameter is deprecated.

The subscription duration of the enhanced edge node pool. The duration is measured in months.

max\_nodes

Long

10

The maximum number of nodes supported by an edge node pool. The value must be equal to or greater than 0. A value of 0 indicates that the number of nodes in the node pool is limited only by the quota of nodes in the cluster. In most cases, this parameter is set to a value larger than 0 for edge node pools. This parameter is set to 0 for node pools whose types are ess or default edge node pools.

## runtime

Configurations of container engines.

Parameter

Type

Example

Description

name

String

containerd

The name of a container runtime. The following types of runtime are supported by ACK.

-   `containerd`: supports all Kubernetes versions. We recommend that you use containerd.
-   `Sandboxed-Container.runv`: allows you to run applications in sandboxed containers, which provide higher security. Only Kubernetes 1.24 and earlier support Sandboxed-Container.
-   `docker`: supports Kubernetes 1.22 and earlier.

Default value: `containerd`.

version

String

1.6.20

The version of the container runtime. By default, the latest version is used.

For more information about the changes to Sandboxed-Container, see [Sandboxed-Container release notes](/help/en/ack/product-overview/release-notes-of-sandboxed-container).

## tag

Configurations of labels.

Parameter

Type

Example

Description

key

String

env

The `key` of a label.

value

String

prod

The `value` of a label.

## taint

Configurations of node taints.

Parameter

Type

Example

Description

key

String

key

The `key` of a taint.

value

String

value

The `value` of a taint.

effect

String

NoSchedule

The scheduling policy. Valid values:

-   `NoSchedule`: Pods that do not tolerate this taint are not scheduled to nodes with this taint. This policy affects only the scheduling process and takes effect only for pods to be scheduled. Scheduled pods are not subject to this policy.
    
-   `NoExecute`: Pods that do not tolerate this taint are evicted after this taint is added to the node.
    
-   `PreferNoSchedule`: a preference policy on pods. Scheduled pods are not subject to this policy. If this taint is added to a node, the system tries to not schedule pods that do not tolerate this taint to the node.
    

Default value: `NoSchedule`.

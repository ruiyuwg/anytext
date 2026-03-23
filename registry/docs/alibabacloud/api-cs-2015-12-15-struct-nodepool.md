Parameter

Type

Description

Example

object

The node pool.

auto\_scaling

object

The auto scaling configurations of the node pool.

enable

boolean

Specifies whether to enable auto scaling for the node pool. Valid values:

-   `true`: enables auto scaling for the node pool.
-   `false`: disables auto scaling for the node pool. If you set this parameter to false, other parameters in the `auto_scaling` section do not take effect.

Default value: `false`.

true

max\_instances

long

The maximum number of instances that can be created in a scaling group.

10

min\_instances

long

The minimum number of instances that must be kept in a scaling group.

0

type

string

The instance types that can be used for the auto scaling of the node pool. Valid values:

-   `cpu`: regular instance.
-   `gpu`: GPU-accelerated instance.
-   `gpushare`: shared GPU-accelerated instance.
-   `spot`: preemptible instance.

Default value: `cpu`.

cpu

is\_bond\_eip`deprecated`

boolean

This parameter is deprecated.

Specifies whether to associate an elastic IP Address (EIP) with the node pool. Valid values:

-   `true`: associates an EIP with the node pool.
-   `false`: does not associate an EIP with the node pool.

Default value: `false`.

true

eip\_internet\_charge\_type`deprecated`

string

This parameter is deprecated.

The metering method of the EIP. Valid values:

-   `PayByBandwidth`: pay-by-bandwidth.
-   `PayByTraffic`: pay-by-data-transfer.

Default value: PayByBandwidth.

PayByBandwidth

eip\_bandwidth`deprecated`

long

This parameter is deprecated.

The maximum bandwidth of the EIP. Unit: Mbit/s.

5

kubernetes\_config

object

The configurations of the cluster.

cms\_enabled

boolean

Specifies whether to install the CloudMonitor agent on Elastic Compute Service (ECS) nodes. After the CloudMonitor agent is installed on ECS nodes, you can view the monitoring information about the instances in the CloudMonitor console. We recommend that you install the CloudMonitor agent. Valid values:

-   `true`: installs the CloudMonitor agent on ECS nodes.
-   `false`: does not install the CloudMonitor agent on ECS nodes.

Default value: `false`.

true

cpu\_policy

string

The CPU management policy of nodes in the node pool. The following policies are supported if the Kubernetes version of the cluster is 1.12.6 or later:

-   `static`: allows pods with specific resource characteristics on the node to be granted with enhanced CPU affinity and exclusivity.
-   `none`: specifies that the default CPU affinity is used.

Default value: `none`.

none

labels

array

The labels of the nodes in the node pool. You can add labels to the nodes in a Kubernetes cluster.

[tag](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-cs-2015-12-15-struct-tag)

The node label.

runtime

string

The container runtime. Valid values:

-   `containerd`: supports all Kubernetes versions. We recommend that you set the parameter to this value.
-   `Sandboxed-Container.runv`: Sandboxed container provides higher isolation and supports Kubernetes 1.24 and earlier.
-   `docker`: supports Kubernetes 1.22 and earlier.

Default value: `containerd`.

containerd

runtime\_version

string

The version of the container runtime.

1.6.20

taints

array

The configurations of the taints.

[taint](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-cs-2015-12-15-struct-taint)

The configurations of the taints.

user\_data

string

The user data on the node.

MXM=

node\_name\_mode

string

The custom node name. A custom node name consists of a prefix, a node IP address, and a suffix.

-   The prefix and the suffix can contain multiple parts that are separated by periods (.). Each part can contain lowercase letters, digits, and hyphens (-). A custom node name must start and end with a digit or lowercase letter.
-   The node IP address is the complete private IP address of the node.

Set the parameter to a value that is in the customized,aliyun,ip,com format. The value consists of four parts that are separated by commas (,). customized and ip are fixed content. aliyun is the prefix and com is the suffix. Example: aliyun.192.168.xxx.xxx.com.

customized,aliyun,ip,com

nodepool\_info

object

The configuration of a node pool.

name

string

The name of the node pool.

np-test

resource\_group\_id

string

The ID of the resource group to which the node pool belongs.

rg-acfmyvw3wjm\*\*\*\*

type

string

The type of node pool. Valid values:

-   `ess`: node pool.
-   `edge`: edge node pool.

ess

scaling\_group

object

The configurations of the scaling group that is used by the node pool.

auto\_renew

boolean

Specifies whether to enable auto-renewal for the node pool. This parameter takes effect only if you set `instance_charge_type` to `PrePaid`. Valid values:

-   `true`: enables auto-renewal.
-   `false`: disables auto-renewal.

Default value: `true`

false

auto\_renew\_period

long

The auto-renewal duration of the nodes in the node pool. This parameter is available and required only if you set `instance_charge_type` to `PrePaid`.

If you set `period_unit` to Month, the valid values of auto\_renew\_period are 1, 2, 3, 6, and 12.

Default value: 1.

0

data\_disks

array

The configurations of the data disks that you want to attach to the nodes in the node pool.

[data\_disk](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-cs-2015-12-15-struct-data-disk)

The configurations of the data disks that you want to attach to the nodes in the node pool.

image\_id

string

The custom image ID. By default, the image provided by ACK is used.

aliyun\_2\_1903\_x64\_20G\_alibase\_20200904.vhd

instance\_charge\_type

string

The billing method of the nodes in the node pool. Valid values:

-   `PrePaid`: subscription.
-   `PostPaid`: pay-as-you-go.

Default value: `PostPaid`.

PostPaid

instance\_types

array

The instance type.

string

The instance type.

ecs.n1.medium

key\_pair

string

The name of the key pair. You must specify this parameter or the `login_password` parameter.

**Note** If you want to create a managed node pool, you must specify `key_pair`.

np-key

login\_password

string

The password for SSH logon. You must specify this parameter or the `key_pair` parameter. The password must be 8 to 30 characters in length, and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.

Hello1234

login\_as\_non\_root

boolean

Specifies whether to allow a non-root user to log on to an ECS instance that is added to the node pool.

period

long

The subscription duration of the nodes in the node pool. This parameter takes effect and is required only if you set `instance_charge_type` to `PrePaid`. If you set `period_unit` to Month, the valid values of `period` are 1, 2, 3, 6, and 12.

Default value: 1.

0

period\_unit

string

The billing cycle of the nodes in the node pool. This parameter is required if you set `instance_charge_type` to `PrePaid`.

Valid value: `Month`.

Month

platform`deprecated`

string

The distribution of the operating system. Valid values:

-   `CentOS`
-   `AliyunLinux`
-   `Windows`
-   `WindowsCore`

Default value: `AliyunLinux`.

AliyunLinux

rds\_instances

array

A list of ApsaraDB RDS instances.

string

The ID of the ApsaraDB RDS instance.

rm-2zey3t89t6280\*\*\*\*

spot\_strategy

string

The type of preemptible instance. Valid values:

-   NoSpot: non-preemptible.
-   SpotWithPriceLimit: a preemptible instance that is configured with the highest bid price.
-   SpotAsPriceGo: bids based on the up-to-date market price are submitted.

For more information, see [Preemptible Instance](/help/en/eci/user-guide/create-a-preemptible-elastic-container-instance).

NoSpot

spot\_price\_limit

array<object>

The instance type of preemptible instances and the price cap for the instance type.

object

instance\_type

string

The instance type of preemptible instances.

ecs.c6.large

price\_limit

string

The price cap of a preemptible instance.

0.39

scaling\_policy

string

The scaling mode of the scaling group. Valid values:

-   `release`: the standard mode. ECS instances are created and released based on resource usage.
-   `recycle`: the swift mode. ECS instances are created, stopped, or started during scaling events. This reduces the time required for the next scale-out event. When the instance is stopped, you are charged only for the storage service. This does not apply to ECS instances that are attached with local disks.

Default value: `release`.

release

security\_group\_id

string

The ID of the security group to which you want to add the node pool. You must specify this parameter or the `security_group_ids` parameter. We recommend that you specify `security_group_ids`.

sg-2zeihch86ooz9io4\*\*\*\*

security\_group\_ids

array

The IDs of security groups. You must specify this parameter or `security_group_id`. We recommend that you specify `security_group_ids`. If you specify both `security_group_id` and `security_group_ids`, `security_group_ids` is used.

string

The ID of the security group.

sg-2zeihch86ooz9io4\*\*\*\*

system\_disk\_category

string

The type of the system disk. Valid values:

-   `cloud_efficiency`: ultra disk.
-   `cloud_ssd`: standard SSD
-   `cloud_essd`: Enterprise SSD (ESSD).
-   `cloud_auto`: ESSD AutoPL disk.
-   `cloud_essd_entry`: ESSD Entry disk.

Default value: `cloud_efficiency`.

cloud\_efficiency

system\_disk\_categories

array

The system disk types. The system creates system disks of a disk type with a lower priority if the disk type with a higher priority is unavailable. Valid values: cloud (basic disk), cloud\_efficiency (ultra disk), cloud\_ssd (standard SSD), and cloud\_essd: (ESSD).

string

The system disk type.

system\_disk\_size

long

The size of the system disk. Unit: GiB.

Valid values: 40 to 500.

120

system\_disk\_performance\_level

string

The performance level (PL) of the system disk. This parameter takes effect only for an ESSD. Valid values:

-   PL0: moderate maximum concurrent I/O performance and low I/O latency.
-   PL1: moderate maximum concurrent I/O performance and low I/O latency.
-   PL2: high maximum concurrent I/O performance and low I/O latency.
-   PL3: ultra-high maximum concurrent I/O performance and ultra-low I/O latency.

PL1

system\_disk\_encrypted

boolean

Specifies whether to encrypt the system disk. Valid values: true: encrypts the system disk. false: does not encrypt the system disk.

system\_disk\_kms\_key\_id

string

The ID of the Key Management Service (KMS) key that is used to encrypt the system disk.

0e478b7a-4262-4802-b8cb-00d3fb40\*\*\*\*

system\_disk\_encrypt\_algorithm

string

The algorithm that you want to use to encrypt the system disk. Set the value to aes-256.

aes-256

system\_disk\_provisioned\_iops

long

The preset read/write IOPS of the system disk. Valid values: 0 to min{50,000, 1,000 × Capacity - Baseline IOPS} Baseline IOPS = min{1,800 + 50 × Capacity, 50,000}.

This parameter is available only if `SystemDiskCategory` is set to `cloud_auto`. For more information, see [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks).

1000

system\_disk\_bursting\_enabled

boolean

Specifies whether to enable the burst feature for the system disk. Valid values:

-   true: enables the burst feature.
-   false: disables the burst feature.

This parameter is available only if `SystemDiskCategory` is set to `cloud_auto`. For more information, see [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks).

true

tags

array<object>

The labels that you want to add only to ECS instances.

The tag key must be unique and can be up to 128 characters in length. The tag key and value must not start with aliyun or acs: or contain https:// or http://.

object

key

string

The key of the label.

key

value

string

The value of the label.

value

vswitch\_ids

array

The IDs of vSwitches.

string

The IDs of vSwitches.

vsw-2ze0fmpbwo140ahni\*\*\*\*

multi\_az\_policy

string

The ECS instance scaling policy for the multi-zone scaling group. Valid values:

-   `PRIORITY`: ECS instances are scaled based on the VSwitchIds.N parameter. If an ECS instance cannot be created in the zone in which the vSwitch that has the highest priority resides, Auto Scaling creates the ECS instance in the zone in which the vSwitch that has the next highest priority resides.
    
-   `COST_OPTIMIZED`: ECS instances are created based on the vCPU unit price in ascending order. Preemptible instances are preferably created if preemptible instance types are specified in the scaling configurations. You can set `CompensateWithOnDemand` to specify whether to automatically create pay-as-you-go instances when preemptible instances cannot be created due to insufficient inventory.
    
    \*\*
    
    **Note** `COST_OPTIMIZED` is valid only when multiple instance types are specified or at least one preemptible instance type is specified.
    
-   `BALANCE`: ECS instances are evenly distributed across multiple zones specified by the scaling group. If the distribution of ECS instances across zones is not balanced due to reasons such as insufficient inventory, you can call the RebalanceInstances operation to evenly distribute the ECS instances across zones. For more information, see [RebalanceInstances](/help/en/auto-scaling/developer-reference/api-rebalanceinstances)
    

Default value: `PRIORITY`.

COST\_OPTIMIZED

on\_demand\_base\_capacity

long

The minimum number of pay-as-you-go instances that must be kept in the scaling group. Valid values: 0 to 1000. If the number of pay-as-you-go instances is smaller than the value of this parameter, Auto Scaling preferably creates pay-as-you-go instances.

0

on\_demand\_percentage\_above\_base\_capacity

long

The percentage of pay-as-you-go instances among the extra instances that exceed the number specified by `on_demand_base_capacity`. Valid values: 0 to 100.

20

spot\_instance\_pools

long

The number of instance types that are available for creating preemptible instances. Auto Scaling creates preemptible instances of multiple instance types that are available at the lowest cost. Valid values: 1 to 10.

5

spot\_instance\_remedy

boolean

Indicates whether preemptible instances can be supplemented. If you set this parameter to true, when the scaling group receives a system message indicating that a preemptible instance is to be reclaimed, the scaling group creates a new instance to replace this instance. Valid values:

-   `true`: supplements preemptible instances.
-   `false`: does not supplement preemptible instances.

false

compensate\_with\_on\_demand

boolean

Specifies whether to automatically create pay-as-you-go instances to meet the required number of ECS instances if preemptible instances cannot be created due to reasons such as cost or insufficient inventory. This parameter takes effect if you set `multi_az_policy` to `COST_OPTIMIZED`. Valid values:

-   `true`: automatically creates pay-as-you-go instances to meet the required number of ECS instances if preemptible instances cannot be created
-   `false`: does not create pay-as-you-go instances to meet the required number of ECS instances if preemptible instances cannot be created.

true

internet\_charge\_type

string

The billing method of the public IP address. Valid values:

-   `PayByBandwidth`: pay-by-bandwidth.
-   `PayByTraffic`: pay-by-data-transfer

PayByBandwidth

internet\_max\_bandwidth\_out

long

The maximum outbound bandwidth of the public IP address. Unit: Mbit/s. Valid values: 1 to 100.

10

image\_type

string

The type of the operating system image. You must specify this parameter or the platform parameter. Valid values:

-   `AliyunLinux`: Alibaba Cloud Linux 2.
-   `AliyunLinux3`: Alibaba Cloud Linux 3
-   `AliyunLinux3Arm64`: Alibaba Cloud Linux 3 (ARM).
-   `AliyunLinuxUEFI`: Alibaba Cloud Linux UEFI 2.
-   `CentOS`: CentOS.
-   `Windows`: Windows.
-   `WindowsCore`: Windows Core.
-   `ContainerOS`: ContainerOS.

AliyunLinux

deploymentset\_id

string

The ID of the deployment set.

ds-bp1d19mmbsv3jf6xxxxx

desired\_size

long

The expected number of nodes in the node pool.

2

private\_pool\_options

object

The configurations of the private node pool.

id

string

The ID of the private node pool.

eap-bp67acfmxazb4\*\*\*\*

match\_criteria

string

The type of the private node pool. This parameter specifies the type of the private node pool that you want to use to create instances. A private pool is generated when an elasticity assurance or a capacity reservation takes effect. The system selects a private pool to start instances. Valid values:

-   `Open`: specifies an open private node pool. The system selects an open private pool to start instances. If no matching open private pools are available, the resources in the public pool are used.
-   `Target`: specifies a private node pool. The system uses the resources of the specified private pool to start instances. If the specified private pool is unavailable, instances cannot be started.
-   `None`: does not use private pools. The resources of private node pools are not used to launch instances.

Open

ram\_role\_name

string

The name of the worker Resource Access Management (RAM) role. This parameter is available only to users in the whitelist. To use this parameter, submit a ticket.

**Note** You can configure this parameter when you create a node pool only for an ACK managed cluster that runs Kubernetes 1.22 or later.

example-role

tee\_config

object

The configurations of confidential computing.

tee\_enable

boolean

Specifies whether to enable confidential computing for the node pool.

false

management

object

The configurations of the managed node pool feature.

enable

boolean

Indicates whether the managed node pool feature is enabled. Valid values:

-   `true`: enables the managed node pool feature.
-   `false`: disables the managed node pool feature. Other parameters in this section take effect only if you set `enable` to true.

false

auto\_repair

boolean

Specifies whether to enable auto repair. This parameter takes effect only when you specify `enable=true`.

-   `true`: enables auto repair
-   `false`: disables auto repair.

false

upgrade\_config`deprecated`

object

The configurations of auto update. This parameter takes effect only if `enable` is set to true.

auto\_upgrade

boolean

Specifies whether to enable auto update. Valid values:

-   `true`: enables auto update.
-   `false`: disables auto update.

false

surge

long

The number of additional nodes.

0

surge\_percentage

long

The percentage of additional nodes to the nodes in the node pool. You must specify this parameter or the `surge` parameter.

0

max\_unavailable

long

The maximum number of unavailable nodes. Valid values: 1 to 1000.

Default value: 1.

0

auto\_repair\_policy

object

The auto node repair policy.

restart\_node

boolean

Indicates whether node restart is allowed.

true

auto\_vul\_fix

boolean

Indicates whether CVE vulnerabilities are automatically patched.

true

auto\_vul\_fix\_policy

object

The automatic CVE patching policy.

restart\_node

boolean

Indicates whether node restart is allowed.

true

vul\_level

string

The severity level of CVEs that can be automatically patched. Separate multiple levels with commas (,).

asap,nntf

auto\_upgrade

boolean

Indicates whether auto update is enabled.

true

auto\_upgrade\_policy

object

The auto update policy.

auto\_upgrade\_kubelet

boolean

Indicates whether the kubelet is automatically updated.

true

count`deprecated`

long

This parameter is deprecated. Use desired\_size instead.

The number of nodes in the node pool.

1

interconnect\_mode

string

The network type of the edge node pool. This parameter takes effect only if you set the `type` of the node pool to `edge`. Valid values:

-   `basic`: basic
-   `private`: dedicated Only Kubernetes 1.22 and later support this value.

basic

interconnect\_config`deprecated`

object

This parameter is deprecated.

The configurations of the edge node pool.

cen\_id`deprecated`

string

This parameter is deprecated.

The ID of the Cloud Enterprise Network (CEN) instance that is associated with the enhanced edge node pool.

cen-ey9k9nfhz0f\*\*\*\*\*\*\*

ccn\_id`deprecated`

string

This parameter is deprecated.

The ID of the Cloud Connect Network (CCN) instance that is associated with the enhanced edge node pool.

ccn-qm5i0i0q9yi\*\*\*\*\*\*\*

ccn\_region\_id`deprecated`

string

This parameter is deprecated.

The region in which the CCN instance that is associated with the enhanced edge node pool resides.

cn-shanghai

bandwidth`deprecated`

long

This parameter is deprecated.

The bandwidth of the enhanced edge node pool. Unit: Mbit/s.

10

improved\_period`deprecated`

string

This parameter is deprecated.

The subscription duration of the enhanced edge node pool. The duration is measured in months.

1

max\_nodes

long

The maximum number of nodes that can be created in the edge node pool. The value of this parameter must be greater than or equal to 0. A value of 0 indicates that the number of nodes in the node pool is limited only by the quota of nodes in the cluster. In most cases, this parameter is set to a value larger than 0 for edge node pools. This parameter is set to 0 for node pools whose type is ess or default edge node pools.

10

node\_config

object

The node configurations.

kubelet\_configuration

[kubelet\_config](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-cs-2015-12-15-struct-kubelet-config)

The parameter settings of the kubelet.

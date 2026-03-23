Creates a node pool for a Container Service for Kubernetes (ACK) cluster. You can use node pools to facilitate node management. For example, you can schedule, configure, or maintain nodes by node pool, and enable auto scaling for a node pool. We recommend that you use a managed node pool, which can help automate specific O\\\\\\\\\\\\&M tasks for nodes, such as Common Vulnerabilities and Exposures (CVE) patching and node repair. This reduces your O\\\\\\\\\\\\&M workload.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/CS/2015-12-15/CreateClusterNodePool)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/CS/2015-12-15/CreateClusterNodePool)

## Authorization information

The following table shows the authorization information corresponding to the API. The authorization information can be used in the `Action` policy element to grant a RAM user or RAM role the permissions to call this API operation. Description:

-   Operation: the value that you can use in the Action element to specify the operation on a resource.
-   Access level: the access level of each operation. The levels are read, write, and list.
-   Resource type: the type of the resource on which you can authorize the RAM user or the RAM role to perform the operation. Take note of the following items:
    -   For mandatory resource types, indicate with a prefix of \* .
    -   If the permissions cannot be granted at the resource level, `All Resources` is used in the Resource type column of the operation.
-   Condition Key: the condition key that is defined by the cloud service.
-   Associated operation: other operations that the RAM user or the RAM role must have permissions to perform to complete the operation. To complete the operation, the RAM user or the RAM role must have the permissions to perform the associated operations.

Operation

Access level

Resource type

Condition key

Associated operation

cs:CreateClusterNodePool

create

\*Cluster

`acs:cs:{#regionId}:{#accountId}:cluster/{#ClusterId}`

none

none

## Request syntax

```
POST /clusters/{ClusterId}/nodepools HTTP/1.1
```

## Request parameters

Parameter

Type

Required

Description

Example

ClusterId

string

Yes

The ID of the cluster.

c61da77e8bfbc4c4c999af2b51b65\*\*\*\*

body

object

No

The request body.

nodepool\_info

object

No

The configurations of the node pool.

name

string

Yes

The name of the node pool.

cluster-demo

type

string

No

The type of node pool. Valid values:

-   `ess`: regular node pool, which supports the managed node pool feature and the auto scaling feature.
-   `edge`: edge node pool.
-   `lingjun`: Lingjun node pool.

ess

resource\_group\_id

string

No

The ID of the resource group to which the node pool belongs. Instances that are added to the node pool belong to this resource group.

rg-acfmyvw3wjmb\*\*\*\*

auto\_scaling

object

No

The configurations of auto scaling.

enable

boolean

No

Specifies whether to enable auto scaling for the node pool. Valid values:

-   `true`: enables auto scaling.
-   `false`: disables auto scaling. If you set this parameter to false, other parameters in the `auto_scaling` section do not take effect.

Default value: `false`.

true

type

string

No

The instance type that is used for auto scaling. This parameter takes effect only when `enable` is set to true. Valid values:

-   `cpu`: regular instance.
-   `gpu`: GPU-accelerated instance.
-   `gpushare`: shared GPU-accelerated instance.
-   `spot`: preemptible instance.

Default value: `cpu`.

**Note** You cannot modify this parameter after the node pool is created.

cpu

max\_instances

long

No

The maximum number to which the Elastic Compute Service (ECS) instances in the node pool can be scaled. The number of nodes in the node pool cannot be greater than this value. This parameter takes effect only when `enable` is set to true. Valid values: \[min\_instances, 2000\]. Default value: 0.

10

min\_instances

long

No

The minimum number to which the ECS instances in the node pool can be scaled. The number of nodes in the node pool cannot be smaller than this value. This parameter takes effect only when `enable` is set to true. Valid values: \[0, max\_instances\]. Default value: 0.

1

is\_bond\_eip`deprecated`

boolean

No

This parameter is deprecated.

Specifies whether to associate an elastic IP address (EIP) with the node pool. Valid values:

-   `true`: associates an EIP with the node pool.
-   `false`: does not associate an EIP with the node pool.

Default value: `false`.

\*\*

**Important** This parameter is deprecated. Use the internet\_charge\_type and internet\_max\_bandwidth\_out parameters instead.

true

eip\_internet\_charge\_type`deprecated`

string

No

This parameter is deprecated.

The metering method of the EIP. Valid values:

-   `PayByBandwidth`: pay-by-bandwidth.
-   `PayByTraffic`: pay-by-data-transfer.

Default value: `PayByBandwidth`.

\*\*

**Important** This parameter is deprecated. Use the internet\_charge\_type and internet\_max\_bandwidth\_out parameters instead.

PayByBandwidth

eip\_bandwidth`deprecated`

long

No

This parameter is deprecated.

The maximum bandwidth of the EIP. Unit: Mbit/s.

\*\*

**Important** This parameter is deprecated. Use the internet\_charge\_type and internet\_max\_bandwidth\_out parameters instead.

5

management

object

No

The configurations of the managed node pool feature.

enable

boolean

No

Specifies whether to enable the managed node pool feature. Valid values:

-   `true`: enables the managed node pool feature.
-   `false`: disables the managed node pool feature. Other parameters in this section take effect only when enable is set to true.

Default value: false.

false

auto\_repair

boolean

No

Specifies whether to enable auto node repair. This parameter takes effect only when `enable` is set to true.

-   `true`: enables auto node repair.
-   `false`: disables auto node repair.

If `enable` is set to true, the default value of this parameter is `true`. If `enable` is set to false, the default value of this parameter is `false`.

false

auto\_repair\_policy

object

No

The auto node repair policy.

restart\_node

boolean

No

Specifies whether to allow node restart. This parameter takes effect only when `auto_repair` is set to true. Valid values:

-   `true`: allows node restart.
-   `false`: does not allow node restart.

If `auto_repair` is set to true, the default value of this parameter is `true`. If `auto_repair` is set to false, the default value of this parameter is `false`.

true

auto\_vul\_fix

boolean

No

Specifies whether to enable auto Common Vulnerabilities and Exposures (CVE) patching. This parameter takes effect only when `enable` is set to true.

-   `true`: enables auto CVE patching.
-   `false`: disables auto CVE patching.

If `enable` is set to true, the default value of this parameter is `true`. If `enable` is set to false, the default value of this parameter is `false`.

true

auto\_vul\_fix\_policy

object

No

The auto CVE patching policy.

restart\_node

boolean

No

Specifies whether to allow node restart. This parameter takes effect only when `auto_vul_fix` is set to true. Valid values:

-   `true`: allows node restart.
-   `false`: does not allow node restart. If `auto_vul_fix` is set to true, the default value of this parameter is `false`. If `auto_vul_fix` is set to false, the default value of this parameter is `false`.

true

vul\_level

string

No

The severity levels of CVEs that can be automatically patched. Separate multiple levels with commas (,). Example: `asap,later`. Valid values:

-   `asap`: high.
-   `later`: medium.
-   `nntf`: low.

If `auto_vul_fix` is set to true, the default value of this parameter is `asap`.

asap,nntf

auto\_upgrade

boolean

No

Specifies whether to enable auto node upgrade. This parameter takes effect only when `enable` is set to true.

-   `true`: enables auto node upgrade.
-   `false`: disables auto node upgrade.

If `enable` is set to true, the default value of this parameter is `true`. If `enable` is set to false, the default value of this parameter is `false`.

true

auto\_upgrade\_policy

object

No

The auto node upgrade policy.

auto\_upgrade\_kubelet

boolean

No

Specifies whether to allow the auto upgrade of the kubelet. This parameter takes effect only when `auto_upgrade` is set to true. Valid values:

-   `true`: allows the auto upgrade of the kubelet.
-   `false`: does not allow the auto upgrade of the kubelet.

If `auto_upgrade` is set to true, the default value of this parameter is `true`. If `auto_upgrade` is set to false, the default value of this parameter is `false`.

true

auto\_upgrade\_runtime

boolean

No

Specifies whether to allow the auto upgrade of the runtime. This parameter takes effect only when `auto_upgrade` is set to true. Valid values:

-   `true`: allows the auto upgrade of the runtime.
-   `false`: does not allow the auto upgrade of the runtime.

Default value: `false`.

false

auto\_upgrade\_os

boolean

No

Specifies whether to allow the auto upgrade of the OS. This parameter takes effect only when `auto_upgrade` is set to true. Valid values:

-   `true`: allows the auto upgrade of the OS.
-   `false`: does not allow the auto upgrade of the OS.

Default value: `false`.

false

upgrade\_config`deprecated`

object

No

The configurations of auto upgrade. The configurations take effect only when `enable` is set to true.

auto\_upgrade`deprecated`

boolean

No

Specifies whether to enable auto upgrade. Valid values:

-   `true`: enables auto OS upgrade.
-   `false`: disables auto OS upgrade.

\*\*

**Caution** This parameter is deprecated. Use the preceding auto\_upgrade parameter instead.

false

surge

long

No

The number of nodes that are temporarily added to the node pool during an auto upgrade.

0

surge\_percentage

long

No

The percentage of additional nodes that are temporarily added to the node pool during an auto upgrade. You must set this parameter or `surge`.

0

max\_unavailable

long

No

The maximum number of nodes that can be in the Unavailable state. Valid values: 1 to 1000.

Default value: 1.

1

scaling\_group

object

No

The configurations of the scaling group that is used by the node pool.

vswitch\_ids

array

Yes

The vSwitch IDs. You can specify one to eight vSwitch IDs.

**Note** To ensure high availability, we recommend that you select vSwitches that reside in different zones.

string

No

The ID of the vSwitches.

vsw-wz9mfnhmssud6eicu\*\*\*\*

instance\_types

array

Yes

The instance types of nodes in the node pool. When the system adds a node to the node pool, the system selects the most appropriate one from the specified instance types for the node. You can specify 1 to 10 instance types.

**Note** To ensure high availability, we recommend that you specify multiple instance types.

string

No

The instance type.

ecs.d1ne.2xlarge

instance\_charge\_type

string

Yes

The billing method of nodes in the node pool. Valid values:

-   `PrePaid`: subscription.
-   `PostPaid`: pay-as-you-go.

Default value: `PostPaid`

PrePaid

period

long

No

The subscription duration of nodes in the node pool. This parameter takes effect and is required if you set `instance_charge_type` to `PrePaid`.

-   If `period_unit` is set to Week, the valid values of `period` are 1, 2, 3, and 4.
-   If `period_unit` is set to Month, the valid values of `period` are 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36, 48, and 60.

1

period\_unit

string

No

The billing cycle of nodes in the node pool. This parameter takes effect and is required only when you set `instance_charge_type` to `PrePaid`. Valid values:

-   `Month`: The subscription duration is measured in months.
-   `Week`: The subscription duration is measured in weeks.

Default value: `Month`.

Month

auto\_renew

boolean

No

Specifies whether to enable auto-renewal for nodes in the node pool. This parameter takes effect only when you set `instance_charge_type` to `PrePaid`. Valid values:

-   `true`: enables auto-renewal.
-   `false`: disables auto-renewal.

Default value: `false`.

true

auto\_renew\_period

long

No

The auto-renewal period. Valid values:

-   Valid values when PeriodUnit is set to Week: 1, 2, and 3.
-   Valid values when PeriodUnit is set to Month: 1, 2, 3, 6, 12, 24, 36, 48, and 60.

Default value: 1.

1

spot\_strategy

string

No

The bidding policy of preemptible instances. Valid values:

-   `NoSpot`: non-preemptible.
-   `SpotWithPriceLimit`: specifies the highest bid for the preemptible instance.
-   `SpotAsPriceGo`: automatically submits bids based on the up-to-date market price.

For more information, see [Use preemptible instances](/help/en/ack/use-preemptible-instances).

NoSpot

spot\_price\_limit

array<object>

No

The instance type of preemptible instances and the price cap for the instance type.

object

No

The price cap of a preemptible instance. You can specify different price caps for different instance types.

instance\_type

string

No

The instance type of preemptible instances.

ecs.c6.large

price\_limit

string

No

The price cap of a preemptible instance of the type.

0.39

image\_type

string

No

The type of the OS image. You must specify this parameter or `platform`. Valid values:

-   `AliyunLinux`: Alibaba Cloud Linux 2.
-   `AliyunLinuxSecurity`: Alibaba Cloud Linux 2 (UEFI).
-   `AliyunLinux3`: Alibaba Cloud Linux 3
-   `AliyunLinux3Arm64`: Alibaba Cloud Linux 3 for ARM.
-   `AliyunLinux3Security`: Alibaba Cloud Linux 3 for ARM.
-   `CentOS`: CentOS.
-   `Windows`: Windows.
-   `WindowsCore`: Windows Core.
-   `ContainerOS`: ContainerOS.
-   `AliyunLinux3ContainerOptimized`: Alibaba Cloud Linux 3 Container-optimized.

AliyunLinux

image\_id

string

No

The custom image ID. By default, the image provided by Container Service for Kubernetes (ACK) is used.

aliyun\_2\_1903\_x64\_20G\_alibase\_20200529.vhd

system\_disk\_category

string

No

The category of the system disk. Valid values:

-   `cloud`: basic disk.
-   `cloud_efficiency`: ultra disk.
-   `cloud_ssd`: standard SSD.
-   `cloud_essd`: ESSD.
-   `cloud_auto`: ESSD AutoPL disk.
-   `cloud_essd_entry`: ESSD Entry disk.

Default value: `cloud_efficiency`.

cloud\_efficiency

system\_disk\_categories

array

No

The categories of the system disk for nodes. The system attempts to create system disks of a disk category with a lower priority if the disk category with a higher priority is unavailable. Valid values:

-   `cloud`: basic disk.
-   `cloud_efficiency`: ultra disk.
-   `cloud_ssd`: standard SSD.
-   `cloud_essd`: ESSD.
-   `cloud_auto`: ESSD AutoPL disk.
-   `cloud_essd_entry`: ESSD Entry disk.

string

No

The category of the system disk for nodes.

cloud\_essd

system\_disk\_size

long

No

The size of the system disk. Unit: GiB.

Valid values: 20 to 20248.

120

system\_disk\_performance\_level

string

No

The PL of the system disk. This parameter takes effect only for an ESSD.

-   PL0: moderate maximum concurrent I/O performance and low I/O latency.
-   PL1: moderate maximum concurrent I/O performance and low I/O latency.
-   PL2: high maximum concurrent I/O performance and low I/O latency.
-   PL3: ultra-high maximum concurrent I/O performance and ultra-low I/O latency.

**Note** Alibaba Cloud disks support the preceding PLs. However, when you create a disk, the available PLs vary based on the ECS instance type that you selected. For more information, see [Overview of ECS instance families](/help/en/ecs/user-guide/overview-of-instance-families).

PL1

system\_disk\_encrypted

boolean

No

Specifies whether to encrypt the system disk. true: encrypts the system disk. false: does not encrypt the system disk.

false

system\_disk\_kms\_key\_id

string

No

The ID of the KMS key that is used to encrypt the system disk.

0e478b7a-4262-4802-b8cb-00d3fb40\*\*\*\*

system\_disk\_encrypt\_algorithm

string

No

The encryption algorithm that is used to encrypt the system disk. Set the value to aes-256.

aes-256

system\_disk\_bursting\_enabled

boolean

No

Specifies whether to enable the burst feature for the system disk. Valid values:

-   true: enables the burst feature.
-   false: disables the burst feature.

This parameter is available only when `SystemDiskCategory` is set to `cloud_auto`. For more information, see [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks).

true

system\_disk\_provisioned\_iops

long

No

The preset IOPS of the system disk. Valid values: 0 to min{50,000, 1,000 × Capacity - Baseline IOPS}. Baseline IOPS = min{1,800 + 50 × Capacity, 50,000}.

This parameter is supported only when `SystemDiskCategory` is set to `cloud_auto`. For more information, see [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks).

1000

data\_disks

array

No

The configurations of the data disks that are attached to nodes in the node pool.

[data\_disk](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-cs-2015-12-15-struct-data-disk)

No

The configurations of the data disk.

security\_group\_ids

array

No

The IDs of security groups. You must specify this parameter or `security_group_id`. We recommend that you specify `security_group_ids`. If you specify both `security_group_id` and `security_group_ids`, `security_group_ids` is used.

string

No

The security group ID. You must specify this parameter or `security_group_id`. We recommend that you specify `security_group_ids`. If you specify both `security_group_id` and `security_group_ids`, `security_group_ids` is used.

sg-wz9a8g2mt6x5llu0\*\*\*\*

key\_pair

string

No

The name of the key pair used to log on to nodes in the node pool. You must set this parameter or `login_password`.

**Note** If you select ContainerOS as the OS of nodes in the node pool, you must specify `key_pair`.

np-key-name

login\_password

string

No

The password for SSH logon. You must specify this parameter or the `key_pair` parameter. The password must be 8 to 30 characters in length, and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.

Hello1234

login\_as\_non\_root

boolean

No

Specifies whether to allow a non-root user to log on to an ECS instance that is added to the node pool.

true

cis\_enabled`deprecated`

boolean

No

This parameter is deprecated. Use security\_hardening\_os instead.

false

soc\_enabled

boolean

No

Specifies whether to enable MLPS Security Hardening. You can enable security hardening based on Multi-Level Protection Scheme (MLPS) only when Alibaba Cloud Linux 2 or Alibaba Cloud Linux 3 is installed on nodes. Alibaba Cloud provides standards for baseline checks and a scanner to ensure the compliance of Alibaba Cloud Linux 2 and Alibaba Cloud Linux 3 images with the level 3 standards of MLPS 2.0.

false

security\_hardening\_os

boolean

No

Indicates whether Alibaba Cloud Linux Security Hardening is enabled. Valid values:

-   `true`: enables Alibaba Cloud Linux Security Hardening.
-   `false`: disables Alibaba Cloud Linux Security Hardening.

Default value: `false`.

false

internet\_charge\_type

string

No

The metering method of the public IP address. Valid values:

-   PayByBandwidth: pay-by-bandwidth.
-   PayByTraffic: pay-by-data-transfer.

PayByTraffic

internet\_max\_bandwidth\_out

long

No

The maximum outbound bandwidth of the public IP address. Unit: Mbit/s. Valid values: 1 to 100.

5

tags

array<object>

No

The tags that you want to add only to ECS instances.

The tag key must be unique and cannot exceed 128 characters in length. The tag key and value cannot start with aliyun or acs: or contain https:// or http://.

object

No

The tag.

key

string

No

The tag key.

node-k-1

value

string

No

The tag value.

node-v-1

desired\_size

long

No

The expected number of nodes in the node pool.

0

multi\_az\_policy

string

No

The ECS instance scaling policy for the multi-zone scaling group. Valid values:

-   `PRIORITY`: ECS instances are scaled based on the value of VSwitchIds.N. If an ECS instance cannot be created in the zone where the vSwitch that has the highest priority resides, the system creates the ECS instance in the zone where the vSwitch that has the next highest priority resides.
    
-   `COST_OPTIMIZED`: ECS instances are created based on the vCPU unit price in ascending order. Preemptible instances are preferably created if preemptible instance types are specified in the scaling configurations. You can set the `CompensateWithOnDemand` parameter to specify whether to automatically create pay-as-you-go instances when preemptible instances cannot be created due to insufficient inventory.
    
    \*\*
    
    **Note** `COST_OPTIMIZED` takes effect only when multiple instance types are specified or at least one preemptible instance type is specified.
    
-   `BALANCE`: ECS instances are evenly distributed across multiple zones for the scaling group. If ECS instances become imbalanced among multiple zones due to insufficient inventory, you can call the [RebalanceInstances](/help/en/auto-scaling/developer-reference/api-rebalanceinstances) operation of Auto Scaling to evenly distribute the ECS instances among zones.
    

Default value: `PRIORITY`.

COST\_OPTIMIZED

scaling\_policy

string

No

The scaling mode of the scaling group. Valid values:

-   `release`: the standard mode. ECS instances are created and released based on resource usage.
-   `recycle`: the swift mode. ECS instances are created, stopped, or started during scaling events. This reduces the time required for the next scale-out event. When the instance is stopped, you are charged only for the storage service. This does not apply to ECS instances that are attached with local disks.

Default value: `release`.

release

on\_demand\_base\_capacity

long

No

The minimum number of pay-as-you-go instances that must be kept in the scaling group. Valid values: 0 to 1000. If the number of pay-as-you-go instances is less than the value of this parameter, the system preferably creates pay-as-you-go instances.

0

on\_demand\_percentage\_above\_base\_capacity

long

No

The percentage of pay-as-you-go instances among the extra instances that exceed the number specified by `on_demand_base_capacity`. Valid values: 0 to 100.

20

spot\_instance\_pools

long

No

The number of instance types that are available for creating preemptible instances. Auto Scaling creates preemptible instances of multiple instance types that are available at the lowest cost. Valid values: 1 to 10.

5

spot\_instance\_remedy

boolean

No

Indicates whether preemptible instances can be supplemented. If you set this parameter to true, when the scaling group receives a system message indicating that a preemptible instance is to be reclaimed, the scaling group attempts to create a new instance to replace this instance. Valid values:

-   `true`: enables the supplementation of preemptible instances.
-   `false`: disables the supplementation of preemptible instances.

false

compensate\_with\_on\_demand

boolean

No

Specifies whether to automatically create pay-as-you-go instances to meet the required number of ECS instances if preemptible instances cannot be created due to reasons such as the price or insufficient inventory. This parameter takes effect when you set `multi_az_policy` to `COST_OPTIMIZED`. Valid values:

-   `true`: automatically creates pay-as-you-go instances to meet the required number of ECS instances if preemptible instances cannot be created.
-   `false`: does not create pay-as-you-go instances to meet the required number of ECS instances if preemptible instances cannot be created.

true

deploymentset\_id

string

No

The ID of the deployment set.

ds-bp1d19mmbsv3jf6xxxxx

rds\_instances

array

No

The IDs of ApsaraDB RDS instances.

string

No

The ID of the ApsaraDB RDS instance.

rds-\*\*\*\*

private\_pool\_options

object

No

The configurations of the private node pool.

id

string

No

The ID of the private node pool.

eap-bp67acfmxazb4\*\*\*\*

match\_criteria

string

No

The type of private node pool. This parameter specifies the type of private pool that you want to use to create instances. A private pool is generated when an elasticity assurance or a capacity reservation takes effect. The system selects a private pool to start instances. Valid values:

-   `Open`: uses an open private pool. The system selects an open private pool to start instances. If no matching open private pools are available, the resources in the public pool are used.
-   `Target`: uses a specified private pool. The system uses the resources of the specified private pool to start instances. If the specified private pool is unavailable, instances cannot be started.
-   `None`: no private pool is used. The resources of private pools are not used to launch the instances.

Open

security\_group\_id`deprecated`

string

No

The ID of the security group to which you want to add the node pool. You must specify this parameter or the `security_group_ids` parameter. We recommend that you specify `security_group_ids`.

sg-wz9a8g2mt6x5llu0\*\*\*\*

platform`deprecated`

string

No

The operating system distribution. Valid values:

-   `CentOS`
-   `AliyunLinux`
-   `Windows`
-   `WindowsCore`

Default value: `AliyunLinux`.

AliyunLinux

instance\_patterns

array

No

The instance attributes.

[instance\_patterns](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-cs-2015-12-15-struct-instance-patterns)

No

The instance attributes.

ram\_role\_name

string

No

The name of the worker RAM role.

-   If you do not specify this parameter, the default worker RAM role created by the cluster is used.
-   The specified RAM role must be a **regular service role** and the **Select Trusted Service** parameter must be set to **Elastic Compute Service**. For more information, see [Create a normal service role](/help/en/ram/user-guide/create-a-ram-role-for-a-trusted-alibaba-cloud-service). If the specified RAM role is not the default worker RAM role created by the cluster, the name of the RAM role cannot start with `KubernetesMasterRole-` or `KubernetesWorkerRole-`.

**Note** This parameter is available only for ACK managed clusters that run Kubernetes 1.22 or later.

example-role

node\_config

object

No

The node configurations.

kubelet\_configuration

[kubelet\_config](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-cs-2015-12-15-struct-kubelet-config)

No

The configurations of the kubelet.

kubernetes\_config

object

No

The configurations of the cluster.

labels

array

No

The labels that you want to add to the nodes in the cluster.

[tag](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-cs-2015-12-15-struct-tag)

No

The configurations of the label.

taints

array

No

The configurations of the taints.

[taint](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-cs-2015-12-15-struct-taint)

No

The collection of taint configurations.

runtime

string

No

The name of the container runtime. The following types of runtime are supported by ACK:

-   containerd: containerd is the recommended runtime and supports all Kubernetes versions.
-   Sandboxed-Container.runv: The Sandbox-Container runtime provides improved isolation and supports Kubernetes 1.24 and earlier.
-   docker: The Docker runtime supports Kubernetes 1.22 and earlier.

Default value: containerd.

docker

runtime\_version

string

No

The version of the container runtime.

19.03.5

cpu\_policy

string

No

The CPU management policy of nodes in the node pool. The following policies are supported if the Kubernetes version of the cluster is 1.12.6 or later:

-   `static`: allows pods with specific resource characteristics on the node to be granted with enhanced CPU affinity and exclusivity.
-   `none`: specifies that the default CPU affinity is used.

Default value: `none`.

none

user\_data

string

No

The user-defined data of nodes. You can specify custom scripts that are automatically executed after the nodes are initialized.

dGhpcyBpcyBhIGV4YW1wbGU=

unschedulable

boolean

No

Specifies whether the nodes are schedulable after a scale-out operation is performed.

true

cms\_enabled

boolean

No

Specifies whether to install the CloudMonitor agent on ECS nodes. After the CloudMonitor agent is installed on ECS nodes, you can view monitoring information about the instances in the CloudMonitor console. We recommend that you install the CloudMonitor agent. Valid values:

-   `true`: installs the CloudMonitor agent on ECS nodes.
-   `false`: does not install the CloudMonitor agent on ECS nodes.

Default value: `false`

true

node\_name\_mode

string

No

A custom node name consists of a prefix, a node IP address, and a suffix.

-   The prefix and the suffix can contain multiple parts that are separated by periods (.). Each part can contain lowercase letters, digits, and hyphens (-). A custom node name must start and end with a digit or lowercase letter.
-   The node IP address in a custom node name is the private IP address of the node.

Set the parameter to a value in the customized,aliyun,ip,com format. The value consists of four parts that are separated by commas (,). customized and ip are fixed content. aliyun is the prefix and com is the suffix. Example: aliyun.192.168.xxx.xxx.com.

customized,aliyun,ip,com

pre\_user\_data

string

No

The user-defined data of nodes. You can specify custom scripts that are automatically executed before the nodes are initialized.

dGhpcyBpcyBhIGV4YW1wbGU

tee\_config

object

No

The configurations of confidential computing for the cluster.

tee\_enable

boolean

No

Specifies whether to enable confidential computing for the cluster.

true

interconnect\_config`deprecated`

object

No

This parameter is deprecated.

The configurations of the edge node pool.

cen\_id

string

No

This parameter is deprecated.

The ID of the Cloud Enterprise Network (CEN) instance that is associated with the enhanced edge node pool.

cen-ey9k9nfhz0f\*\*\*\*\*\*\*

ccn\_id

string

No

This parameter is deprecated.

The ID of the Cloud Connect Network (CCN) instance that is associated with the enhanced edge node pool.

ccn-qm5i0i0q9yi\*\*\*\*\*\*\*

ccn\_region\_id

string

No

This parameter is deprecated.

The region to which the CCN instance that is associated with the enhanced edge node pool belongs.

cn-shanghai

bandwidth

long

No

This parameter is deprecated.

The bandwidth of the enhanced edge node pool. Unit: Mbit/s.

10

improved\_period

string

No

This parameter is deprecated.

The subscription duration of the enhanced edge node pool. The duration is measured in months.

1

count`deprecated`

long

No

This parameter is deprecated. Use the desired\_size parameter instead.

The number of nodes in the node pool.

1

max\_nodes`deprecated`

long

No

This parameter is deprecated.

The maximum number of nodes that can be contained in the edge node pool.

10

interconnect\_mode

string

No

The network type of the edge node pool. This parameter takes effect only when the `type` of the node pool is set to `edge`. Valid values:

-   `basic`: Internet.
-   `private`: private network.

basic

host\_network

boolean

No

Specifies whether to set the network type of the pod to host network.

-   `true`: sets to host network.
-   `false`: sets to container network.

true

intranet

boolean

No

Specifies whether all nodes in the edge node pool can communicate with each other at Layer 3.

-   `true`: The nodes in the edge node pool can communicate with each other at Layer 3.
-   `false`: The nodes in the edge node pool cannot communicate with each other at Layer 3.

true

## Response parameters

Parameter

Type

Description

Example

object

The configurations of the node pool.

nodepool\_id

string

The node pool ID.

np31da1b38983f4511b490fc62108a\*\*\*\*

task\_id

string

The ID of the task.

T-613b19bbd160ad492800\*\*\*\*

request\_id

string

The request ID.

0527ac9a-c899-4341-a21a-\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "nodepool_id": "np31da1b38983f4511b490fc62108a****",
  "task_id": "T-613b19bbd160ad492800****",
  "request_id": "0527ac9a-c899-4341-a21a-****"
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/CS/2015-12-15/errorCode).

## Change history

Change time

Summary of changes

Operation

2025-11-24

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/CS/2015-12-15/CreateClusterNodePool?updateTime=2025-11-24#workbench-doc-change-demo)

2025-11-05

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/CS/2015-12-15/CreateClusterNodePool?updateTime=2025-11-05#workbench-doc-change-demo)

2024-11-05

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/CS/2015-12-15/CreateClusterNodePool?updateTime=2024-11-05#workbench-doc-change-demo)

2024-09-27

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/CS/2015-12-15/CreateClusterNodePool?updateTime=2024-09-27#workbench-doc-change-demo)

2024-07-09

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/CS/2015-12-15/CreateClusterNodePool?updateTime=2024-07-09#workbench-doc-change-demo)

2024-06-13

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/CS/2015-12-15/CreateClusterNodePool?updateTime=2024-06-13#workbench-doc-change-demo)

2024-06-13

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/CS/2015-12-15/CreateClusterNodePool?updateTime=2024-06-13#workbench-doc-change-demo)

2024-04-22

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/CS/2015-12-15/CreateClusterNodePool?updateTime=2024-04-22#workbench-doc-change-demo)

2024-04-19

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/CS/2015-12-15/CreateClusterNodePool?updateTime=2024-04-19#workbench-doc-change-demo)

2024-01-19

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/CS/2015-12-15/CreateClusterNodePool?updateTime=2024-01-19#workbench-doc-change-demo)

2023-12-13

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/CS/2015-12-15/CreateClusterNodePool?updateTime=2023-12-13#workbench-doc-change-demo)

2023-10-17

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/CS/2015-12-15/CreateClusterNodePool?updateTime=2023-10-17#workbench-doc-change-demo)

2023-09-01

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/CS/2015-12-15/CreateClusterNodePool?updateTime=2023-09-01#workbench-doc-change-demo)

2023-08-08

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/CS/2015-12-15/CreateClusterNodePool?updateTime=2023-08-08#workbench-doc-change-demo)

2020-09-24

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/CS/2015-12-15/CreateClusterNodePool?updateTime=2020-09-24#workbench-doc-change-demo)

2020-09-24

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/CS/2015-12-15/CreateClusterNodePool?updateTime=2020-09-24#workbench-doc-change-demo)

You can call the ModifyClusterNodePool operation to modify the configuration of a node pool with the specified node pool ID.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/CS/2015-12-15/ModifyClusterNodePool)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/CS/2015-12-15/ModifyClusterNodePool)

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

cs:ModifyClusterNodePool

update

\*Cluster

`acs:cs:{#regionId}:{#accountId}:cluster/{#ClusterId}`

none

none

## Request syntax

```
PUT /clusters/{ClusterId}/nodepools/{NodepoolId} HTTP/1.1
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

The cluster ID.

c23421cfa74454bc8b37163fd19af\*\*\*\*

NodepoolId

string

Yes

The node pool ID.

p31da1b38983f4511b490fc62108a\*\*\*\*

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

No

The name of the node pool.

The name must be 1 to 63 characters in length, and can contain digits, letters, and hyphens (-). It cannot start with a hyphen (-).

default-nodepool

resource\_group\_id

string

No

The ID of the resource group to which the node pool belongs. Instances that are added to the node pool belong to this resource group.

Each resource can belong only to one resource group. You can regard a resource group as a project, an application, or an organization based on your business scenarios.

rg-acfmyvw3wjm\*\*\*\*

auto\_scaling

object

No

The configurations about auto scaling.

enable

boolean

No

Specifies whether to enable auto scaling. Valid values:

-   `true`: enables auto scaling for the node pool. When the capacity planning of the cluster cannot meet the requirements of pod scheduling, ACK automatically scales out nodes based on the configured minimum and maximum number of instances. By default, node instant scaling is enabled for clusters that run Kubernetes 1.24. By default, node auto scaling is enabled for clusters that run Kubernetes versions earlier than 1.24. For more information, see [Auto scaling of nodes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/overview-of-node-scaling/).
-   `false`: disables auto scaling. Container Service for Kubernetes (ACK) adjusts the number of nodes in the node pool based on the value of the Expected Nodes parameter. The number of nodes is always the same as the value of the Expected Nodes parameter.

If you set this parameter to false, other parameters in the `auto_scaling` section do not take effect.

Default value: `false`.

true

type`deprecated`

string

No

The instance type that is used for auto scaling. Valid values:

-   `cpu`: regular instance.
-   `gpu`: GPU-accelerated instance.
-   `gpushare`: shared GPU-accelerated instance.
-   `spot`: preemptible instance.

Default value: `cpu`.

cpu

max\_instances

long

No

The maximum number of nodes that can be created in the node pool. Existing instances are excluded. This parameter takes effect only when `enable=true` is specified.

The value must be at least the value of min\_instances and cannot exceed 2000. Default value: 0.

10

min\_instances

long

No

The minimum number of nodes that must be kept in the node pool. Existing instances are excluded. This parameter takes effect only when `enable=true` is specified.

The value must be at least 0 and cannot exceed the value of max\_instances. Default value: 0.

**Note**

-   When the minimum number of instances is greater than 0 and a scaling group is set up, ECS instances are automatically created based on the minimum number.
    
-   We recommend that the value of max\_instances is equal to or larger than the current number of nodes in the node pool. If the value of max\_instances is less than the current number of nodes in the node pool, the node pool will be scaled in after you enable auto scaling for the node pool.
    

2

is\_bond\_eip`deprecated`

boolean

No

This parameter is deprecated. Use the internet\_charge\_type and internet\_max\_bandwidth\_out parameters instead.

-   `true`: associates an elastic IP address (EIP) with the node pool.
-   `false`: does not associate an EIP with the node pool.

Default value: `false`.

true

eip\_internet\_charge\_type`deprecated`

string

No

This parameter is deprecated. Use the internet\_charge\_type and internet\_max\_bandwidth\_out parameters instead.

The metering method of the EIP. Valid values:

-   `PayByBandwidth`: pay-by-bandwidth.
-   `PayByTraffic`: pay-by-data-transfer.

Default value: `PayByBandwidth`.

PayByBandwidth

eip\_bandwidth`deprecated`

long

No

This parameter is deprecated. Use the internet\_charge\_type and internet\_max\_bandwidth\_out parameters instead. The maximum bandwidth of the EIP.

Valid values: 1 to 100. Unit: Mbit/s.

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
-   `false`: disables the managed node pool feature. Other parameters in this section take effect only when `enable=true` is specified.

Default value: `false`.

true

auto\_repair

boolean

No

Specifies whether to enable auto node repair. This parameter takes effect only if `enable` is set to true. Valid values:

-   `true`: enables auto repair.
-   `false`: disables auto repair.

Default value: `true`.

true

auto\_repair\_policy

object

No

The auto node repair policy.

restart\_node

boolean

No

Specifies whether ACK is allowed to automatically restart nodes after repairing the nodes. Valid values:

-   `true`: yes.
-   `false`: no.

true

auto\_vul\_fix

boolean

No

Specifies whether ACK is allowed to automatically patch CVE vulnerabilities. Valid values:

-   `true`: enables auto CVE patching.
-   `true`: disables auto CVE patching.

true

auto\_vul\_fix\_policy

object

No

The auto CVE patching policy.

restart\_node

boolean

No

Specifies whether ACK is allowed to automatically restart nodes after repairing the nodes. Valid values:

-   `true`: yes.
-   `false`: no.

true

vul\_level

string

No

The severity levels of CVEs that can be automatically patched. Separate multiple levels with commas (,). Example: `asap,later`. Valid values:

-   `asap`: high.
-   `later`: medium.
-   `nntf`: low.

If `auto_vul_fix=true` is specified, the default value is `asap`.

asap,nntf

auto\_upgrade

boolean

No

Specifies whether to enable auto upgrade. Valid values:

-   `true`: enables auto upgrade.
-   `false`: disables auto upgrade.

true

auto\_upgrade\_policy

object

No

The auto upgrade policy.

auto\_upgrade\_kubelet

boolean

No

Specifies whether ACK is allowed to automatically upgrade the kubelet. Valid values:

-   `true`: yes.
-   `false`: no.

true

auto\_upgrade\_runtime

boolean

No

Specifies whether ACK is allowed to automatically upgrade the runtime. This parameter takes effect only when you specify `auto_upgrade=true`. Valid values:

-   `true`: yes.
-   `false`: no.

Default value: `false`.

false

auto\_upgrade\_os

boolean

No

Specifies whether ACK is allowed to automatically upgrade the operating system. This parameter takes effect only when you specify `auto_upgrade=true`. Valid values:

-   `true`: yes.
-   `false`: no.

Default value: `false`.

false

upgrade\_config`deprecated`

object

No

This parameter is deprecated. Use the preceding `auto_upgrade` parameter instead.

The configurations of auto upgrade. The configurations take effect only when `enable` is set to true.

auto\_upgrade`deprecated`

boolean

No

This parameter is deprecated. Use the preceding `auto_upgrade` parameter instead.

Specifies whether to enable auto upgrade. Valid values:

-   true: enables auto upgrade.
-   false: disables auto upgrade.

Default value: `true`.

true

surge

long

No

The number of additional nodes that are temporarily added to the node pool during an auto upgrade. Specify this parameter or `surge_percentage`.

A node is unavailable during an upgrade. Additional nodes are used to temporarily host the workloads of nodes that are being upgraded.

**Note** We recommend that you specify a value that does not exceed the current number of nodes in the node pool.

5

surge\_percentage

long

No

The percentage of additional nodes in the node pool. Specify this parameter or the `surge` parameter is specified.

The number of additional nodes = The percentage of additional nodes × The number of nodes in the node pool. For example, if the percentage of additional nodes is 50% and the number of nodes in the node pool is 6, the number of additional nodes is 3.

0

max\_unavailable

long

No

The maximum number of nodes that can be in the Unavailable state.

Valid values: 1 to 1000.

Default value: 1.

1

scaling\_group

object

No

The configurations of the scaling group that is used by the node pool.

vswitch\_ids

array

No

The vSwitch IDs. You can specify one to eight vSwitch IDs.

**Note** To ensure high availability, we recommend that you select vSwitches that reside in different zones.

string

No

The vSwitch ID.

vsw-wz9uwxhawmtzg7u9h\*\*\*\*

instance\_types

array

No

The instance types. You can specify multiple instance types. A node is assigned the instance type from the first instance type of the list until the node is created. The instance type that is used to create the node varies based on the actual instance stock.

You can specify 1 to 10 instance types.

string

No

The instance type. For more information about the valid values, see [Instance families](/help/en/ecs/user-guide/overview-of-instance-families).

ecs.c6.large

instance\_charge\_type

string

No

The billing method of nodes in the node pool. Valid values:

-   `PrePaid`: subscription.
-   `PostPaid`: pay-as-you-go.

Default value: `PostPaid`.

PostPaid

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

The billing cycle of nodes in the node pool. This parameter takes effect and is required if you set `instance_charge_type` to `PrePaid`. Valid values:

-   `Month`: The subscription duration is measured in months.
-   `Week`: The subscription duration is measured in weeks.

Default value: `Month`.

Month

auto\_renew

boolean

No

Specifies whether to enable auto-renewal for the nodes in the node pool. This parameter takes effect only when you set `instance_charge_type` to `PrePaid`. Valid values:

-   `true`: enables auto-renewal.
-   `false`: disables auto-renewal.

Default value: `false`.

true

auto\_renew\_period

long

No

The auto-renewal period. Valid values:

-   Valid values when PeriodUnit is set to Week: 1, 2, and 3.
-   Valid values when PeriodUnit is set to Month: 1, 2, 3, 6, 12, 24, 36, 48, and 60

Default value: 1.

1

spot\_strategy

string

No

The bidding policy of preemptible instances. Valid values:

-   `NoSpot`: non-preemptible instance.
-   `SpotWithPriceLimit`: specifies the highest bid.
-   `SpotAsPriceGo`: automatically submits bids based on the up-to-date market price.

For more information, see [Create a preemptible elastic container instance](/help/en/eci/user-guide/create-a-preemptible-elastic-container-instance).

SpotWithPriceLimit

spot\_price\_limit

array<object>

No

The bid configurations of preemptible instances.

object

No

The bid configurations of preemptible instances.

instance\_type

string

No

The instance type of preemptible instances.

ecs.c6.large

price\_limit

string

No

The price cap of a preemptible instance.

Unit: USD/hour.

0.39

image\_type

string

No

The type of operating system distribution that you want to use. We recommend that you use this parameter to specify the node operating system. Valid values:

-   `AliyunLinux`: Alibaba Cloud Linux 2.
-   `AliyunLinuxSecurity`: Alibaba Cloud Linux 2 (UEFI).
-   `AliyunLinux3`: Alibaba Cloud Linux 3.
-   `AliyunLinux3Arm64`: Alibaba Cloud Linux 3 for ARM.
-   `AliyunLinux3Security`: Alibaba Cloud Linux 3 (UEFI).
-   `CentOS`: CentOS.
-   `Windows`: Windows.
-   `WindowsCore`: Windows Core.
-   `ContainerOS`: ContainerOS.
-   `AliyunLinux3ContainerOptimized`: Alibaba Cloud Linux 3 Container-optimized.

AliyunLinux

image\_id

string

No

The custom image ID. You can call the `DescribeKubernetesVersionMetadata` operation to query the images supported by ACK. By default, the latest image is used.

aliyun\_2\_1903\_x64\_20G\_alibase\_20200904.vhd

system\_disk\_category

string

No

The category of the system disk. Valid values:

-   `cloud_efficiency`: ultra disk.
-   `cloud_ssd`: standard SSD.
-   `cloud_essd`: Enterprise ESSD (ESSD).
-   `cloud_auto`: ESSD AutoPL disk.
-   `cloud_essd_entry`: ESSD Entry disk.

Default value: `cloud_efficiency`.

cloud\_efficiency

system\_disk\_categories

array

No

The categories of the system disk. The system attempts to create system disks of a disk category with a lower priority if the disk category with a higher priority is unavailable.

string

No

The category of the system disk.

Valid values:

-   `cloud_efficiency`: ultra disk.
-   `cloud_ssd`: standard SSD.
-   `cloud_essd`: Enterprise ESSD (ESSD).
-   `cloud_auto`: ESSD AutoPL disk.
-   `cloud_essd_entry`: ESSD Entry disk.

cloud\_essd

system\_disk\_size

long

No

The size of the system disk. Unit: GiB

Valid values: 20 to 2048.

The value of this parameter must be at least 20 and greater than or equal to the size of the image.

Default value: the greater value between 40 and the image size.

120

system\_disk\_performance\_level

string

No

The performance level (PL) of the system disk. This parameter takes effect only for an ESSD. You can specify a higher PL if you increase the size of the data disk. For more information, see [ESSDs](/help/en/ecs/user-guide/essds) .

-   PL0: moderate maximum concurrent I/O performance and low I/O latency.
-   PL1: moderate maximum concurrent I/O performance and low I/O latency.
-   PL2: high maximum concurrent I/O performance and low I/O latency.
-   PL3: ultra-high maximum concurrent I/O performance and ultra-low I/O latency.

PL1

system\_disk\_encrypted

boolean

No

Specifies whether to encrypt the system disk. Valid values:

-   true: encrypts the system disk.
-   false: does not encrypt the system disk.

false

system\_disk\_kms\_key\_id

string

No

The ID of the Key Management Service (KMS) key that is used to encrypt the system disk.

0e478b7a-4262-4802-b8cb-00d3fb40\*\*\*\*

system\_disk\_encrypt\_algorithm

string

No

The encryption algorithm that is used to encrypt the system disk. Set the value to aes-256.

aes-256

system\_disk\_provisioned\_iops

long

No

The preset IOPS of the system disk.

Valid values: 0 to min{50,000, 1,000 × Capacity - Baseline IOPS}. Baseline IOPS = min{1,800 + 50 × Capacity, 50,000}.

This parameter is effective only when `system_disk_category` is set to `cloud_auto`. For more information, see [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks).

1000

system\_disk\_bursting\_enabled

boolean

No

Specifies whether to enable the burst feature for the system disk. Valid values:

-   true: enables the burst feature.
-   false: disables the burst feature.

This parameter is effective only when `system_disk_category` is set to `cloud_auto`. For more information, see [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks).

true

data\_disks

array

No

The configurations of the data disks that are mounted to nodes in the node pool. Valid values: 0 to 10. You can mount at most 10 data disks to the nodes in the node pool.

[data\_disk](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-cs-2015-12-15-struct-data-disk)

No

The configuration of node data disks.

key\_pair

string

No

The name of the key pair. You must specify this parameter or `login_password`. You must specify the `key_pair` parameter if the node pool is a managed node pool.

pro-nodepool

login\_password

string

No

The password for SSH logon. You must specify this parameter or `key_pair`. The password must be 8 to 30 characters in length, and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.

Hello1234

internet\_charge\_type

string

No

The metering method of the public IP address. Valid values:

-   `PayByBandwidth`: pay-by-bandwidth.
-   `PayByTraffic`: pay-by-data-transfer.

PayByBandwidth

internet\_max\_bandwidth\_out

long

No

The maximum outbound bandwidth of the public IP address of the node. Unit: Mbit/s. Valid values: 1 to 100.

5

tags

array

No

The tags that you want to add only to ECS instances.

The tag key must be unique and cannot exceed 128 characters in length. The tag key and value cannot start with aliyun or acs: or contain https:// or http://.

[tag](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-cs-2015-12-15-struct-tag)

No

The tag that you want to add only to ECS instances.

desired\_size

long

No

The expected number of nodes in the node pool.

The expected number of nodes in the node pool. We recommend that you configure at least two nodes to ensure that cluster components run as expected. You can modify the Expected Nodes parameter to adjust the number of nodes in the node pool.

If you do not want to create nodes in the node pool, set this parameter to 0. You can manually modify this parameter to add nodes later.

2

multi\_az\_policy

string

No

The ECS instance scaling policy for the multi-zone scaling group. Valid values:

-   `PRIORITY`: ECS instances are scaled based on the value of VSwitchIds.N. If an ECS instance cannot be created in the zone where the vSwitch that has the highest priority resides, the system creates the ECS instance in the zone where the vSwitch that has the next highest priority resides.
    
-   `COST_OPTIMIZED`: ECS instances are created based on the vCPU unit price in ascending order. Preemptible instances are preferably created if preemptible instance types are specified in the scaling configurations. You can set the `CompensateWithOnDemand` parameter to specify whether to automatically create pay-as-you-go instances when preemptible instances cannot be created due to insufficient inventory.
    
    \*\*
    
    **Note** `COST_OPTIMIZED` takes effect only when multiple instance types are specified or at least one preemptible instance type is specified.
    
-   `BALANCE`: ECS instances are evenly distributed across multiple zones specified by the scaling group. If ECS instances become imbalanced among multiple zones due to insufficient inventory, you can call the `RebalanceInstances` operation of Auto Scaling to balance the instance distribution among zones. For more information, see [RebalanceInstances](/help/en/auto-scaling/developer-reference/api-rebalanceinstances) .
    

Default value: `PRIORITY`.

BALANCE

scaling\_policy

string

No

The scaling mode of the scaling group. Valid values:

-   `release`: the standard mode. ECS instances are created and released based on resource usage.
-   `recycle`: the swift mode. ECS instances are created, stopped, or started during scaling events. This reduces the time required for the next scale-out event. When the instance is stopped, you are charged only for the storage service. This does not apply to ECS instances that are attached with local disks.

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

Specifies whether to enable the supplementation of preemptible instances. If you set this parameter to true, when the scaling group receives a system message indicating that a preemptible instance is to be reclaimed, the scaling group attempts to create a new instance to replace the instance. Valid values:

-   `true`: supplements preemptible instances.
-   `false`: does not supplement preemptible instances.

false

compensate\_with\_on\_demand

boolean

No

Specifies whether to automatically create pay-as-you-go instances to meet the required number of ECS instances if preemptible instances cannot be created due to reasons such as the price or insufficient inventory. This parameter takes effect when you set `multi_az_policy` to `COST_OPTIMIZED`. Valid values:

-   `true`: automatically creates pay-as-you-go instances to meet the required number of ECS instances if preemptible instances cannot be created.
-   `false`: does not create pay-as-you-go instances to meet the required number of ECS instances if preemptible instances cannot be created.

true

rds\_instances

array

No

The IDs of ApsaraDB RDS instances.

string

No

The ID of the ApsaraDB RDS instance. After you specify the list of ApsaraDB RDS instances, the ECS instances in the cluster are automatically added to the whitelist of the ApsaraDB RDS instances.

rds-xxx

private\_pool\_options

object

No

The configurations of the private node pool.

id

string

No

The private node pool ID. This parameter is available only when `match_criteria` is set to `Target`.

eap-bp67acfmxazb4\*\*\*\*

match\_criteria

string

No

The type of private node pool. This parameter specifies the type of private pool that you want to use to create instances. A private pool is generated when an elasticity assurance or a capacity reservation takes effect. The system selects a private pool to start instances. Valid values:

-   `Open`: open private pool. The system selects an open private pool to start instances. If no matching open private pools are available, the resources in the public pool are used.
-   `Target`: uses a specified private pool. The system uses the resources of the specified private pool to start instances. If the specified private pool is unavailable, instances cannot be started.
-   `None`: no private pool is used. The resources of private pools are not used to launch the instances.

Open

platform`deprecated`

string

No

This parameter is obsolete. Use the `image_type` parameter instead.

The OS platform. Valid values:

-   `AliyunLinux`
-   `CentOS`
-   `Windows`
-   `WindowsCore`

AliyunLinux

instance\_patterns

array

No

.The instance attributes.

[instance\_patterns](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-cs-2015-12-15-struct-instance-patterns)

No

The instance attribute.

kubernetes\_config

object

No

The configurations of the cluster.

labels

array

No

The labels that are added to the nodes in the cluster. You must add the label based on the following rules:

-   A label is a case-sensitive key-value pair. You can add up to 20 labels.
-   The key must be unique and cannot exceed 64 characters in length. The value can be empty and cannot exceed 128 characters in length. Keys and values cannot start with `aliyun`, `acs:`, `https://`, or `http://`. For more information, see [Labels and Selectors](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/#syntax-and-character-set).

[tag](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-cs-2015-12-15-struct-tag)

No

The node label.

taints

array

No

The configurations of node taints.

[taint](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-cs-2015-12-15-struct-taint)

No

The taint.

runtime

string

No

The name of the container runtime. The following types of runtime are supported by ACK:

-   containerd: containerd is the recommended runtime and supports all Kubernetes versions.
-   Sandboxed-Container.runv: The Sandbox-Container runtime provides improved isolation and supports Kubernetes 1.31 and earlier.
-   docker: discontinued. The Docker runtime supports Kubernetes 1.22 and earlier.

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

-   `static`: allows pods with specific resource characteristics on the node to be granted enhanced CPU affinity and exclusivity.
-   `none`: specifies that the default CPU affinity is used.

Default value: `none`.

none

unschedulable

boolean

No

Specifies whether the nodes are unschedulable after a scale-out activity is performed.

-   true: The nodes are unschedulable after a scale-out activity is performed.
-   false: The nodes are schedulable after a scale-out activity is performed.

false

user\_data

string

No

The user data of the instance. Nodes automatically run user-data scripts after they are added to the cluster. For more information, see [User-Data script](/help/en/ecs/user-guide/customize-the-initialization-configuration-for-an-instance).

IyEvdXNyL2Jpbi9iYXNoCmVjaG8gIkhlbGxvIEFDSyEi

cms\_enabled

boolean

No

Specifies whether to install the CloudMonitor agent on ECS nodes. After the CloudMonitor agent is installed on ECS nodes, you can view monitoring information about the instances in the CloudMonitor console. We recommend that you install the CloudMonitor agent. Valid values:

-   `true`: installs the CloudMonitor agent on ECS nodes.
-   `false`: does not install the CloudMonitor agent on ECS nodes.

Default value: `false`.

true

pre\_user\_data

string

No

Predefined custom data. Nodes automatically run predefined scripts before they are added to the cluster. For more information, see [User-Data script](/help/en/ecs/user-guide/customize-the-initialization-configuration-for-an-instance).

IyEvdXNyL2Jpbi9iYXNoCmVjaG8gIkhlbGxvIEFDSyEi

tee\_config

object

No

The configurations of confidential computing for the cluster.

tee\_enable

boolean

No

Specifies whether to enable confidential computing for the cluster. Valid values:

-   `true`: enables confidential computing for the cluster.
-   `false`: disables confidential computing for the cluster.

Default value: `false`.

false

update\_nodes

boolean

No

Specifies whether to update node information, such as labels and taints.

true

concurrency

boolean

No

Specifies whether concurrency is supported.

true

## Response parameters

Parameter

Type

Description

Example

object

The response body.

task\_id

string

The task ID.

T-5fd211e924e1d00787000293

nodepool\_id

string

The node pool ID.

np737c3ac1ac684703b9e10673aa2c\*\*\*\*

request\_id

string

The ID of the request.

687C5BAA-D103-4993-884B-C35E4314\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "task_id": "T-5fd211e924e1d00787000293",
  "nodepool_id": "np737c3ac1ac684703b9e10673aa2c****",
  "request_id": "687C5BAA-D103-4993-884B-C35E4314****"
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/CS/2015-12-15/errorCode).

## Change history

Change time

Summary of changes

Operation

2026-01-26

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/CS/2015-12-15/ModifyClusterNodePool?updateTime=2026-01-26#workbench-doc-change-demo)

2025-11-24

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/CS/2015-12-15/ModifyClusterNodePool?updateTime=2025-11-24#workbench-doc-change-demo)

2024-09-27

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/CS/2015-12-15/ModifyClusterNodePool?updateTime=2024-09-27#workbench-doc-change-demo)

2024-06-13

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/CS/2015-12-15/ModifyClusterNodePool?updateTime=2024-06-13#workbench-doc-change-demo)

2024-06-13

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/CS/2015-12-15/ModifyClusterNodePool?updateTime=2024-06-13#workbench-doc-change-demo)

2024-04-19

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/CS/2015-12-15/ModifyClusterNodePool?updateTime=2024-04-19#workbench-doc-change-demo)

2024-01-19

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/CS/2015-12-15/ModifyClusterNodePool?updateTime=2024-01-19#workbench-doc-change-demo)

2023-12-15

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/CS/2015-12-15/ModifyClusterNodePool?updateTime=2023-12-15#workbench-doc-change-demo)

2023-12-13

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/CS/2015-12-15/ModifyClusterNodePool?updateTime=2023-12-13#workbench-doc-change-demo)

2023-10-17

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/CS/2015-12-15/ModifyClusterNodePool?updateTime=2023-10-17#workbench-doc-change-demo)

2022-08-30

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/CS/2015-12-15/ModifyClusterNodePool?updateTime=2022-08-30#workbench-doc-change-demo)

2022-08-10

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/CS/2015-12-15/ModifyClusterNodePool?updateTime=2022-08-10#workbench-doc-change-demo)

2020-09-23

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/CS/2015-12-15/ModifyClusterNodePool?updateTime=2020-09-23#workbench-doc-change-demo)

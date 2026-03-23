You can call the ModifyCluster operation to modify the cluster configurations by cluster ID.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/CS/2015-12-15/ModifyCluster)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/CS/2015-12-15/ModifyCluster)

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

cs:ModifyCluster

update

\*Cluster

`acs:cs:{#regionId}:{#accountId}:cluster/{#ClusterId}`

-   cs:EnableApiServerEip
-   cs:ApiServerEipId

none

## Request syntax

```
PUT /api/v2/clusters/{ClusterId} HTTP/1.1
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

cb95aa626a47740afbf6aa099b65\*\*\*\*

body

object

No

The request body.

api\_server\_eip

boolean

No

Specifies whether to associate an elastic IP address (EIP) with the cluster. This EIP is used to enable access to the API server over the Internet. Valid values:

-   `true`: associates an EIP with the cluster.
-   `false`: does not associate an EIP with the cluster.

true

api\_server\_eip\_id

string

No

The ID of the EIP that you want to associate with the API server of the cluster. This parameter takes effect when `api_server_eip` is set to `true`.

eip-wz9fnasl6dsfhmvci\*\*\*\*

deletion\_protection

boolean

No

Specifies whether to enable cluster deletion protection. If you enable this option, the cluster cannot be deleted in the console or by calling API operations. Valid values:

-   `true`: enables cluster deletion protection.
-   `false`: disables cluster deletion protection.

Default value: `false`

true

instance\_deletion\_protection

boolean

No

Specifies whether to enable instance deletion protection. If you enable this option, the instance cannot be deleted in the console or by calling API operations. Valid values:

-   `true`: enables instance deletion protection.
-   `false`: disables instance deletion protection.

Default value: `false`

true

ingress\_domain\_rebinding

string

No

Specifies whether to remap the test domain name of the cluster. Valid values:

-   `true`: remaps the test domain name of the cluster.
-   `false`: does not remap the test domain name of the cluster.

Default value: `false`

true

ingress\_loadbalancer\_id

string

No

The ID of the Server Load Balancer (SLB) instance of the cluster to be modified.

lb-wz97kes8tnndkpodw\*\*\*\*

resource\_group\_id

string

No

The resource group ID of the cluster.

rg-acfmyvw3wjm\*\*\*\*

maintenance\_window

[maintenance\_window](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-cs-2015-12-15-struct-maintenance-window)

No

The cluster maintenance window. This feature takes effect only for ACK Pro clusters.

enable\_rrsa

boolean

No

Specifies whether to enable the RAM Roles for Service Accounts (RRSA) feature. This parameter is available only for ACK managed clusters. Valid values:

-   `true`: enables the RRSA feature.
-   `false`: disables the RRSA feature.

true

access\_control\_list

array

No

The network access control list (ACL) of the SLB instance associated with the API server if the cluster is a registered cluster.

string

No

The ACL of the SLB instance associated with the API server if the cluster is a registered cluster.

**Note**: Do not specify the 0.0.0.0/0 CIDR block.

192.168.1.0/24

cluster\_name

string

No

The cluster name.

The cluster name must be 1 to 63 characters in length, and can contain digits, letters, and hyphens (-). The cluster name cannot start with a hyphen (-).

cluster-new-name

system\_events\_logging

object

No

The storage configurations of system events.

enabled

boolean

No

Specifies whether to enable system event storage.

true

logging\_project

string

No

The name of the Simple Log Service project that stores system events.

k8s-log-cb95aa626a47740afbf6aa099b65\*\*\*\*

operation\_policy

object

No

The automatic O&M policy of the cluster.

cluster\_auto\_upgrade

object

No

The configurations of automatic update.

enabled

boolean

No

Specifies whether to enable automatic update.

true

channel

string

No

The frequency of auto cluster update. For more information, see [Update frequency](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/automatically-upgrade-an-ack-cluster).

Valid values:

-   patch: the latest patch version.
-   stables: the second-latest minor version.
-   rapid: the latest minor version.

patch

api\_server\_custom\_cert\_sans

object

No

The custom subject alternative names (SANs) for the API server certificate to accept requests from specified IP addresses or domain names. This parameter is available only for ACK managed clusters.

action

string

No

Specifies whether to overwrite or add SANs. Valid values:

-   overwrite: overwrites SANs.
-   append: adds SANs.

append

subject\_alternative\_names

array

No

The list of SANs.

string

No

The SAN.

192.168.0.119

vswitch\_ids

array

No

The vSwitches of the control plane. This parameter can be used to change the vSwitches of the control plane in an ACK managed cluster. Take note of the following items:

-   This parameter overwrites the existing configuration. You must specify all vSwitches of the control plane.
-   The control plane components restarts during the change process. Exercise caution when you perform this operation.
-   Ensure that all security groups of the cluster, including the security groups of the control plane, all node pools, and container network, are allowed to access the CIDR blocks of the new vSwitches. This ensures that the nodes and containers can connect to the API server.
-   If the new vSwitches of the control plane are configured with an ACL, ensure that the ACL allows communication between the new vSwitches and CIDR blocks such as those of the cluster nodes and the container network.

string

No

The vSwitches of the control plane.

vsw-2ze4jvvvade1yk899\*\*\*\*

control\_plane\_config

object

No

The control plane configurations of an ACK dedicated cluster.

charge\_type

string

No

The billing method of control plane nodes. Valid values:

-   `PrePaid`: subscription.
-   `PostPaid`: pay-as-you-go.

Default value: `PostPaid`.

PrePaid

period

long

No

The subscription duration of the instance. This parameter takes effect and is required only when `charge_type` is set to `PrePaid`.

If `PeriodUnit=Month` is specified, the valid values are 1, 2, 3, 6, 12, 24, 36, 48, and 60.

1

period\_unit

string

No

The billing cycle of control plane nodes. This parameter takes effect only when `instance_charge_type` is set to `PrePaid`.

Set the value to `Month`.

Month

auto\_renew

boolean

No

Specifies whether to enable auto-renewal for control plane nodes. This parameter takes effect only when `charge_type` is set to `PrePaid`. Valid values:

-   `true`: enables auto-renewal.
-   `false`: disables auto-renewal.

Default value: `false`

true

auto\_renew\_period

long

No

The auto-renewal period of control plane nodes. Valid values: 1, 2, 3, 6, and 12.

Default value: 1.

1

instance\_types

array

No

The type of instance. For more information, see [Overview of ECS instance families](/help/en/ecs/user-guide/overview-of-instance-families).

string

No

The type of instance.

ecs.g6.large

image\_type

string

No

The type of the OS image. Valid values:

-   `AliyunLinux3`: Alibaba Cloud Linux 3.
-   `Custom`: the custom image.

AliyunLinux3

image\_id

string

No

The custom image ID. You must configure this parameter if you use a custom image.

aliyun\_3\_x64\_20G\_alibase\_20240819.vhd

key\_pair

string

No

The name of the key pair. You must configure either this parameter or the `login_password` parameter.

ack

login\_password

string

No

The password for SSH logon. You must configure either this parameter or the `key_pair` parameter. The password must be 8 to 30 characters in length, and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters. To log on with a password, you must specify this parameter during the scale-out.

Ack@2000.

system\_disk\_category

string

No

The category of the system disk for nodes. Valid values:

-   `cloud`: basic disk.
-   `cloud_efficiency`: ultra disk.
-   `cloud_ssd`: standard SSD.
-   `cloud_essd`: Enterprise ESSD (ESSD).
-   `cloud_auto`: ESSD AutoPL disk.
-   `cloud_essd_entry`: ESSD Entry disk.

cloud\_essd

system\_disk\_size

long

No

The type of the system disk. Valid values: \[40,500\]. Unit: GiB.

120

system\_disk\_snapshot\_policy\_id

string

No

The ID of the automatic snapshot policy applied to the node system disk.

sp-2zej1nogjvovnz4z\*\*\*\*

system\_disk\_performance\_level

string

No

The performance level (PL) of the system disk that you want to use for the node. This parameter is effective only for ESSDs. This parameter is related to the disk size. For more information, see [ESSDs](/help/en/ecs/user-guide/essds) .

PL1

system\_disk\_provisioned\_iops

long

No

The preset read/write input/output operations per second (IOPS) of the system disk. Valid values: 0 to min{50,000, 1,000 × Capacity - Baseline IOPS}. Baseline IOPS = min{1,800 + 50 × Capacity, 50,000}.

This parameter is effective only when `system_disk_category` is set to `cloud_auto`. For more information, see [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks).

1000

system\_disk\_bursting\_enabled

boolean

No

Specifies whether to enable the burst feature for the system disk. Valid values:

-   `true`: enables the burst feature.
-   `false`: disables the burst feature.

This parameter is effective only when `system_disk_category` is set to `cloud_auto`. For more information, see [ESSD AutoPL disks](/help/en/ecs/user-guide/essd-autopl-disks).

true

deploymentset\_id

string

No

The ID of the deployment set.

ds-bp10b35imuam5amw\*\*\*\*

cloud\_monitor\_flags

boolean

No

Specifies whether to install the CloudMonitor agent. Valid values:

-   `true`: installs the CloudMonitor agent.
-   `false`: does not install the CloudMonitor agent.

true

soc\_enabled

boolean

No

Specifies whether to enable Multi-Level Protection Scheme (MLPS) security hardening. For more information, see [ACK security hardening based on MLPS](/help/en/ack/ack-managed-and-ack-dedicated/security-and-compliance/ack-reinforcement-based-on-classified-protection).

Valid values:

-   `true`: enables MLPS security hardening.
-   `false`: disables MLPS security hardening.

Default value: `false`.

false

security\_hardening\_os

boolean

No

Specifies whether to enable Alibaba Cloud Linux Security Hardening. Valid values:

-   `true`: enables Alibaba Cloud Linux Security Hardening.
-   `false`: disables Alibaba Cloud Linux Security Hardening.

Default value: `false`

true

cpu\_policy

string

No

The CPU management policy of nodes in the node pool. The following policies are supported if the Kubernetes version of the cluster is 1.12.6 or later:

-   `static`: allows pods with specific resource characteristics on the node to be granted with enhanced CPU affinity and exclusivity.
-   `none`: specifies that the default CPU affinity is used.

Default value: `none`.

none

runtime

string

No

The type of the container runtime. Valid values:

-   `containerd`: supports all Kubernetes versions. We recommend that you set the parameter to this value.

Default value: containerd.

containerd

node\_port\_range

string

No

The node port range.

30000-32767

size

long

No

The number of control plane nodes. If you want to scale out the control plane in an ACK dedicated cluster, set this parameter to the desired number of nodes. This parameter must be greater than the current number of nodes.

5

security\_group\_id

string

No

The ID of the security group for the control plane.

-   If block rules are configured in the security group, ensure the security group rules allow traffic for protocols and ports required by the cluster. For recommended security group rules, see [Configure and manage security groups for an ACK cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-security-group-rules-to-enforce-access-control-on-ack-clusters).
    
-   For non-ACK dedicated clusters:
    
    -   During security group updates, the cluster control plane and managed components (e.g., terway-controlplane) will restart briefly. Perform this operation during off-peak hours.
    -   After updating the control plane security group, the Elastic Network Interfaces (ENIs) used by the control plane and managed components will automatically join the new security group.
-   For ACK dedicated clusters:
    
    -   After updating the control plane security group, newly scaled-out master nodes will automatically apply the new security group. Existing control plane nodes remain unaffected.

sg-bp1h6rk3pgct2a08\*\*\*

timezone

string

No

The time zone configuration for the cluster.

-   After modifying the time zone, cluster inspection configurations will adopt the new time zone.
    
-   For ACK managed clusters:
    
    -   During time zone updates, the cluster control plane and managed components (e.g., terway-controlplane) will restart briefly. Perform this operation during off-peak hours.
    -   After updating the time zone:
        -   Newly scaled-out nodes will automatically apply the new time zone.
        -   Existing nodes remain unaffected. Reset the node to apply changes to existing nodes.
-   For ACK dedicated clusters:
    
    -   After updating the time zone:
        -   Newly scaled-out nodes (including control plane nodes) automatically apply the new time zone.
        -   Existing nodes (including control plane nodes) remain unaffected. Reset the node to apply changes to existing nodes.
        -   For control plane nodes, perform a scale-out followed by a scale-in to apply the new time zone to all control plane nodes.

Asia/Shanghai

## Response parameters

Parameter

Type

Description

Example

object

The returned data.

cluster\_id

string

The cluster ID.

cb95aa626a47740afbf6aa09\*\*\*\*

request\_id

string

The request ID.

687C5BAA-D103-4993-884B-C35E4314\*\*\*\*

task\_id

string

The task ID.

T-5a54309c80282e39ea00\*\*\*\*

## Examples

Sample success responses

`JSON`format

```
{
  "cluster_id": "cb95aa626a47740afbf6aa09****",
  "request_id": "687C5BAA-D103-4993-884B-C35E4314****",
  "task_id": "T-5a54309c80282e39ea00****"
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/CS/2015-12-15/errorCode).

## Change history

Change time

Summary of changes

Operation

2026-01-08

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/CS/2015-12-15/ModifyCluster?updateTime=2026-01-08#workbench-doc-change-demo)

2024-11-19

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/CS/2015-12-15/ModifyCluster?updateTime=2024-11-19#workbench-doc-change-demo)

2024-10-18

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/CS/2015-12-15/ModifyCluster?updateTime=2024-10-18#workbench-doc-change-demo)

2024-04-24

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/CS/2015-12-15/ModifyCluster?updateTime=2024-04-24#workbench-doc-change-demo)

2024-01-11

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/CS/2015-12-15/ModifyCluster?updateTime=2024-01-11#workbench-doc-change-demo)

2023-10-18

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/CS/2015-12-15/ModifyCluster?updateTime=2023-10-18#workbench-doc-change-demo)

2023-10-10

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/CS/2015-12-15/ModifyCluster?updateTime=2023-10-10#workbench-doc-change-demo)

2023-08-21

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/CS/2015-12-15/ModifyCluster?updateTime=2023-08-21#workbench-doc-change-demo)

2023-08-18

The internal configuration of the API is changed, but the call is not affected

[View Change Details](https://api.alibabacloud.com/document/CS/2015-12-15/ModifyCluster?updateTime=2023-08-18#workbench-doc-change-demo)

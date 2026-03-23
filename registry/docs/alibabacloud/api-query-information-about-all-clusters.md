Queries the details about Container Service for Kubernetes (ACK) clusters of specified types or specifications within an account.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/CS/2015-12-15/DescribeClustersV1)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/CS/2015-12-15/DescribeClustersV1)

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

cs:GetClusters

get

\*Cluster

`acs:cs:*:{#accountId}:cluster/*`

none

none

## Request syntax

```
GET /api/v1/clusters HTTP/1.1
```

## Request parameters

Parameter

Type

Required

Description

Example

name

string

No

The cluster name.

cluster-demo

cluster\_type

string

No

The type of the instance.

-   `Kubernetes`: ACK dedicated cluster.
-   `ManagedKubernetes`: ACK managed cluster. ACK managed clusters include ACK Basic clusters, ACK Pro clusters, ACK Serverless Basic clusters, ACK Serverless Pro clusters, ACK Edge Basic clusters, ACK Edge Pro clusters, and ACK Lingjun Pro clusters.
-   `ExternalKubernetes`: registered cluster

Kubernetes

page\_size

long

No

The number of entries per page.

10

page\_number

long

No

The page number of the returned page.

3

profile

string

No

If you set `cluster_type` to `ManagedKubernetes`, an ACK managed cluster is created. In this case, you can further specify the cluster edition. Valid values:

-   `Default`: ACK managed cluster. ACK managed clusters include ACK Basic clusters and ACK Pro clusters.
-   `Edge`: ACK Edge cluster. ACK Edge clusters include ACK Edge Basic clusters and ACK Edge Pro clusters.
-   `Serverless`: ACK Serverless cluster. ACK Serverless clusters include ACK Serverless Basic clusters and ACK Serverless Pro clusters.
-   `Lingjun`: ACK Lingjun Pro cluster.

Default

cluster\_spec

string

No

After you set `cluster_type` to `ManagedKubernetes` and configure the `profile` parameter, you can further specify the edition of the cluster. Valid values:

-   `ack.pro.small`: ACK Pro cluster.
-   `ack.standard`: ACK Basic cluster. If you leave the parameter empty, ACK Basic cluster is selected.

ack.pro.small

region\_id

string

No

The region ID of the clusters. You can use this parameter to query all clusters in the specified region.

cn-hangzhou

cluster\_id

string

No

The cluster ID.

ca418e5e6fa2849d78301341700axxxxx

## Response parameters

Parameter

Type

Description

Example

object

The response body.

clusters

array<object>

The queried cluster details.

clusters

object

Information about a cluster.

cluster\_id

string

The cluster ID.

c3fb96524f9274b4495df0f12a6b5\*\*\*\*

cluster\_type

string

The type of the instance.

Kubernetes

created

string

The time at which the instance is created.

2020-08-20T10:51:29+08:00

init\_version

string

The version of the cluster. For more information about the Kubernetes versions supported by ACK, see [Release notes for Kubernetes versions](/help/en/ack/overview-of-kubernetes-versions-supported-by-ack).

1.16.9-aliyun.1

current\_version

string

The Kubernetes version of the cluster.

1.16.9-aliyun.1

next\_version

string

The Kubernetes version to which the cluster can be updated.

1.18.8-aliyun.1

deletion\_protection

boolean

Specifies whether to enable cluster deletion protection. If you enable this option, the cluster cannot be deleted in the console or by calling API operations. Valid values:

-   `true`: enables deletion protection for the cluster. This way, the cluster cannot be deleted in the ACK console or by calling API operations.
-   `false`: disables deletion protection for the cluster. This way, the cluster can be deleted in the ACK console or by calling API operations.

true

docker\_version

string

The Docker version that is used by the cluster.

19.03.5

external\_loadbalancer\_id

string

The ID of the Server Load Balancer (SLB) instance that is used by the Ingresses of the cluster.

The default SLB specification is slb.s1.small, which belongs to the high-performance instance type.

lb-2vcrbmlevo6kjpgch\*\*\*\*

master\_url

string

The address of the cluster API server. It includes an internal endpoint and a public endpoint.

{\\"api\_server\_endpoint\\":\\"\\",\\"intranet\_api\_server\_endpoint\\":\\"https://192.168.0.251:6443\\"}

meta\_data

string

The metadata of the cluster.

{\\"Addons\\":\[{\\"config\\":\*\*\*}

name

string

The cluster name.

cluster-demo

network\_mode

string

The network mode of the cluster. Valid values:

-   `classic`: classic network.
-   `vpc`: virtual private cloud (VPC).
-   `overlay`: overlay network.
-   `calico`: network powered by Calico.

vpc

private\_zone

boolean

Indicates whether Alibaba Cloud DNS PrivateZone is enabled. Valid values:

-   `true`: Alibaba Cloud DNS PrivateZone is enabled.
-   `false`: Alibaba Cloud DNS PrivateZone is disabled.

false

profile

string

The subtype of the cluster.

Default

region\_id

string

The region ID of the cluster.

cn-beijing

resource\_group\_id

string

The ID of the resource group to which the cluster belongs.

rg-acfmyvw3wjm\*\*\*\*

security\_group\_id

string

The ID of the security group of the cluster.

sg-2vcgwsrwgt5mp0yi\*\*\*\*

container\_cidr

string

The pod CIDR block and the configuration of the Flannel network plug-in.

172.20.0.0/16

service\_cidr

string

The Service CIDR block.

172.21.0.0/20

proxy\_mode

string

The kube-proxy mode.

-   `iptables`: a mature and stable mode that uses iptables rules to conduct service discovery and load balancing. The performance of this mode is limited by the size of the cluster. This mode is suitable for clusters that run a small number of Services.
-   `ipvs`: provides high performance and uses IP Virtual Server (IPVS). This allows you to configure service discovery and load balancing. This mode is suitable for clusters that are required to run a large number of services. We recommend that you use this mode in scenarios that require high load balancing performance.

ipvs

timezone

string

The time zone

Asia/Shanghai

ip\_stack

string

The IP stack of the cluster. Valid values:

-   ipv4: creates a cluster that supports only the IPv4 protocol stack.
-   dual: creates a cluster that supports IPv4/IPv6 dual-stack.

ipv4

cluster\_domain

string

The domain name of the cluster.

cluster.local

size

long

The number of nodes in the cluster, including control planes and worker nodes.

5

state

string

The status of the cluster. Valid values:

-   `initial`: The cluster is being created.
-   `failed`: The cluster failed to be created.
-   `running`: The cluster is running.
-   `upgrading`: The cluster is undergoing an upgrade.
-   `updating`: Cluster specification changes are being applied.
-   `removing`: Nodes are being removed from the node pool.
-   `draining`: Node draining is in progress.
-   `scaling`: Auto-scaling operation is in progress for the cluster.
-   `stopped`: The cluster has stopped running.
-   `deleting`: The cluster is being deleted.
-   `deleted`: The cluster has been deleted.
-   `delete_failed`: The cluster failed to be deleted.

running

subnet\_cidr`deprecated`

string

This parameter is deprecated. Use the container\_cidr parameter to obtain the pod CIDR block.

172.21.0.0/16

tags

array

The label of the cluster.

tags

[tag](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-cs-2015-12-15-struct-tag)

The label of the cluster.

updated

string

The time when the cluster was updated.

2020-09-16T11:09:55+08:00

vpc\_id

string

The ID of the virtual private cloud (VPC) that is used by the cluster.

vpc-2vcg932hsxsxuqbgl\*\*\*\*

vswitch\_id`deprecated`

string

The ID of the vSwitch in the cluster.

vsw-2vc41xuumx5z2rdma\*\*\*\*,vsw-2vc41xuumx5z2rdma\*\*\*\*

vswitch\_ids

array

The vSwitches of the control planes.

string

The vSwitches of the control planes.

vsw-2vc41xuumx5z2rdma\*\*\*\*

worker\_ram\_role\_name

string

The name of the worker Resource Access Management (RAM) role. The RAM role is assigned to the worker nodes of the cluster to allow the worker nodes to manage ECS instances.

KubernetesWorkerRole-ec87d15b-edca-4302-933f-c8a16bf0\*\*\*\*

zone\_id

string

The ID of the zone where the cluster is deployed.

cn-beijing-b

cluster\_spec

string

The specification of the cluster.

ack.standard

maintenance\_window

[maintenance\_window](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-cs-2015-12-15-struct-maintenance-window)

The maintenance window of the cluster. This feature is available only for ACK managed clusters and ACK Serverless clusters.

operation\_policy

object

The automatic O&M policy of the cluster.

cluster\_auto\_upgrade

object

The configurations of auto cluster update.

enabled

boolean

Specifies whether to enable auto cluster update.

true

channel

string

The frequency of auto cluster updates. For more information, see [Update frequency](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/automatically-upgrade-an-ack-cluster).

Valid values:

-   patch: the latest patch version.
-   stables: the second-latest minor version.
-   rapid: the latest minor version.

patch

page\_info

object

The pagination information.

page\_number

integer

The page number.

3

page\_size

integer

The number of entries per page.

20

total\_count

integer

The total number of entries returned.

50

## Examples

Sample success responses

`JSON`format

```
{
  "clusters": [
    {
      "cluster_id": "c3fb96524f9274b4495df0f12a6b5****",
      "cluster_type": "Kubernetes",
      "created": "2020-08-20T10:51:29+08:00",
      "init_version": "1.16.9-aliyun.1",
      "current_version": "1.16.9-aliyun.1",
      "next_version": "1.18.8-aliyun.1",
      "deletion_protection": true,
      "docker_version": "19.03.5",
      "external_loadbalancer_id": "lb-2vcrbmlevo6kjpgch****",
      "master_url": "{\\\"api_server_endpoint\\\":\\\"\\\",\\\"intranet_api_server_endpoint\\\":\\\"https://192.168.0.251:6443\\\"}",
      "meta_data": "{\\\"Addons\\\":[{\\\"config\\\":***}",
      "name": "cluster-demo",
      "network_mode": "vpc",
      "private_zone": false,
      "profile": "Default",
      "region_id": "cn-beijing",
      "resource_group_id": "rg-acfmyvw3wjm****",
      "security_group_id": "sg-2vcgwsrwgt5mp0yi****",
      "container_cidr": "172.20.0.0/16",
      "service_cidr": "172.21.0.0/20",
      "proxy_mode": "ipvs",
      "timezone": "Asia/Shanghai",
      "ip_stack": "ipv4",
      "cluster_domain": "cluster.local",
      "size": 5,
      "state": "running",
      "subnet_cidr": "172.21.0.0/16",
      "tags": [
        {
          "key": "env",
          "value": "prod"
        }
      ],
      "updated": "2020-09-16T11:09:55+08:00",
      "vpc_id": "vpc-2vcg932hsxsxuqbgl****",
      "vswitch_id": "vsw-2vc41xuumx5z2rdma****,vsw-2vc41xuumx5z2rdma****",
      "vswitch_ids": [
        "vsw-2vc41xuumx5z2rdma****"
      ],
      "worker_ram_role_name": "KubernetesWorkerRole-ec87d15b-edca-4302-933f-c8a16bf0****",
      "zone_id": "cn-beijing-b",
      "cluster_spec": "ack.standard",
      "maintenance_window": {
        "enable": false,
        "maintenance_time": "03:00:00Z",
        "duration": "3h",
        "weekly_period": "Monday,Thursday",
        "recurrence": "FREQ=WEEKLY;INTERVAL=4;BYDAY=MO,TU"
      },
      "operation_policy": {
        "cluster_auto_upgrade": {
          "enabled": true,
          "channel": "patch"
        }
      }
    }
  ],
  "page_info": {
    "page_number": 3,
    "page_size": 20,
    "total_count": 50
  }
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/CS/2015-12-15/errorCode).

## Change history

Change time

Summary of changes

Operation

2024-10-18

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/CS/2015-12-15/DescribeClustersV1?updateTime=2024-10-18#workbench-doc-change-demo)

2024-10-15

The response structure of the API has changed

[View Change Details](https://api.alibabacloud.com/document/CS/2015-12-15/DescribeClustersV1?updateTime=2024-10-15#workbench-doc-change-demo)

2023-11-24

The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/CS/2015-12-15/DescribeClustersV1?updateTime=2023-11-24#workbench-doc-change-demo)

2020-09-14

The request parameters of the API has changed

[View Change Details](https://api.alibabacloud.com/document/CS/2015-12-15/DescribeClustersV1?updateTime=2020-09-14#workbench-doc-change-demo)

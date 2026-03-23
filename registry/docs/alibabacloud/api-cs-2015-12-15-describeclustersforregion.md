Queries all clusters in a specified region.

## Debugging

[You can run this interface directly in OpenAPI Explorer, saving you the trouble of calculating signatures. After running successfully, OpenAPI Explorer can automatically generate SDK code samples.](https://api.alibabacloud.com/api/CS/2015-12-15/DescribeClustersForRegion)

[![](https://img.alicdn.com/tfs/TB16JcyXHr1gK0jSZR0XXbP8XXa-24-26.png)Debug](https://api.alibabacloud.com/api/CS/2015-12-15/DescribeClustersForRegion)

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

cs:DescribeClustersForRegion

list

\*All Resources

`*`

none

none

## Request syntax

```
GET /regions/{region_id}/clusters HTTP/1.1
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

Perform a fuzzy search by using the cluster name.

test-cluster

cluster\_type

string

No

The type of the clusters to query. Valid values:

-   Kubernetes: ACK dedicated clusters.
-   ManagedKubernetes: ACK managed clusters. ACK managed clusters include ACK Basic clusters, ACK Pro clusters, ACK Serverless Basic clusters, ACK Serverless Pro clusters, ACK Edge Basic clusters, ACK Edge Pro clusters, and ACK Lingjun Pro clusters.
-   ExternalKubernetes: registered clusters.

Kubernetes

page\_size

long

No

The number of records on each page.

3

page\_number

long

No

The number of pages.

10

profile

string

No

The subtype of the clusters to query. Valid values:

-   Default: ACK managed clusters. ACK managed clusters include ACK Basic clusters and ACK Pro clusters.
-   Edge: ACK Edge clusters. ACK Edge clusters include ACK Edge Basic clusters and ACK Edge Pro clusters.
-   Serverless: ACK Serverless clusters. ACK Serverless clusters include ACK Serverless Basic clusters and ACK Serverless Pro clusters.
-   Lingjun: ACK Lingjun Pro clusters.

Enumeration Value:

-   LingJun: LingJun.
-   Serverless: Serverless.
-   Default: Default.
-   Edge: Edge.

Serverless

cluster\_spec

string

No

The specification of the clusters to query. Valid values:

-   ack.pro.small: ACK Pro clusters.
-   ack.standard: ACK Basic clusters.

ack.standard

cluster\_id

string

No

The cluster ID.

c8155823d057948c69a\*\*\*\*

region\_id

string

Yes

The region.

cn-hangzhou

## Response parameters

Parameter

Type

Description

Example

object

The response body.

clusters

array<object>

The information about the queried clusters.

clusters

object

The information about a queried cluster.

cluster\_id

string

The cluster ID.

c905d1364c2dd4b6284a3f41790c4\*\*\*\*

cluster\_type

string

The type of the cluster. Valid values:

-   Kubernetes: ACK dedicated cluster
-   ManagedKubernetes: ACK managed clusters. ACK managed clusters include ACK Basic clusters, ACK Pro clusters, ACK Serverless Basic clusters, ACK Serverless Pro clusters, ACK Edge Basic clusters, ACK Edge Pro clusters, and ACK Lingjun Pro clusters.
-   ExternalKubernetes: registered cluster

ManagedKubernetes

created

string

The time at which the instance is created.

2020-12-01T20:40:40+08:00

init\_version

string

The initial Kubernetes version of the cluster.

1.16.6-aliyun.1

current\_version

string

The current Kubernetes version of the cluster.

1.16.6-aliyun.1

next\_version

string

The Kubernetes version to which the cluster can be updated.

1.18.8-aliyun.1

deletion\_protection

boolean

Specifies whether to enable cluster deletion protection. If you enable this option, the cluster cannot be deleted in the console or by calling API operations. You can obtain the terminal ID by calling one of the following operations:

-   true: enables deletion protection for the cluster. This way, the cluster cannot be deleted in the ACK console or by calling API operations.
-   false: disables deletion protection for the cluster. This way, the cluster can be deleted in the ACK console or by calling API operations.

false

name

string

The name of the cluster.

test-cluster

profile

string

The subtype of the clusters. Valid values:

-   Default: ACK managed clusters. ACK managed clusters include ACK Basic clusters and ACK Pro clusters.
-   Edge: ACK Edge clusters. ACK Edge clusters include ACK Edge Basic clusters and ACK Edge Pro clusters.
-   Serverless: ACK Serverless clusters. ACK Serverless clusters include ACK Serverless Basic clusters and ACK Serverless Pro clusters.
-   Lingjun: ACK Lingjun Pro clusters.

Default

region\_id

string

The region ID.

cn-beijing-a

resource\_group\_id

string

The ID of the cluster resource group.

rg-acfmyvw3wjm\*\*\*\*

security\_group\_id

string

The ID of the security group of the cluster.

sg-2zeihch86ooz9io4\*\*\*\*

container\_cidr

string

The CIDR block of pods in the cluster.

172.20.0.0/16

service\_cidr

string

The CIDR block of the service network.

172.21.0.0/20

proxy\_mode

string

The kube-proxy mode of the cluster.

Valid value:

-   iptables: iptables.
-   ipvs: ipvs.

ipvs

timezone

string

The time zone.

Asia/Shanghai

ip\_stack

string

The IP protocol stack of the cluster.

ipv4

cluster\_domain

string

The domain name of the cluster.

cluster.local

size

long

The number of nodes in the ACK cluster.

2

state

string

The status of the cluster. Valid values:

-   initial: The cluster is being created.
-   failed: The cluster failed to be created.
-   running: The cluster is running.
-   Upgrading: The cluster is being updated.
-   scaling: The cluster is being scaled.
-   waiting: The cluster is waiting for connection requests.
-   disconnected: The cluster is disconnected.
-   inactive: The cluster is inactive.
-   unavailable: The cluster is unavailable.
-   deleting: The cluster is being deleted.
-   deleted: The ACK cluster is deleted.
-   delete\_failed: The cluster failed to be deleted.

running

tags

array

The list of cluster tags.

tags

[tag](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-cs-2015-12-15-struct-tag)

A tag of the cluster.

updated

string

The time when the cluster was updated.

2020-12-08T15:37:00+08:00

vpc\_id

string

The ID of the virtual private cloud (VPC) to which the cluster belongs.

vpc-2zeg8nf1ukc0fcmvq\*\*\*\*

vswitch\_ids

array

The list of vSwitches on the control plane of the cluster.

vswitch\_id

string

The vSwitches of the control plane.

vsw-2vc41xuumx5z2rdma\*\*\*\*

cluster\_spec

string

The types of ACK managed clusters:

-   ack.pro.small: ACK Pro cluster
-   ack.standard: ACK Basic cluster

ack.standard

page\_info

object

The pagination details.

page\_number

integer

The number of pages.

1

page\_size

integer

The number of records on each page.

10

total\_count

integer

The total number of entries returned.

10

## Examples

Sample success responses

`JSON`format

```
{
  "clusters": [
    {
      "cluster_id": "c905d1364c2dd4b6284a3f41790c4****",
      "cluster_type": "ManagedKubernetes",
      "created": "2020-12-01T20:40:40+08:00",
      "init_version": "1.16.6-aliyun.1",
      "current_version": "1.16.6-aliyun.1",
      "next_version": "1.18.8-aliyun.1",
      "deletion_protection": false,
      "name": "test-cluster",
      "profile": "Default",
      "region_id": "cn-beijing-a",
      "resource_group_id": "rg-acfmyvw3wjm****",
      "security_group_id": "sg-2zeihch86ooz9io4****",
      "container_cidr": "172.20.0.0/16",
      "service_cidr": "172.21.0.0/20",
      "proxy_mode": "ipvs",
      "timezone": "Asia/Shanghai",
      "ip_stack": "ipv4",
      "cluster_domain": "cluster.local",
      "size": 2,
      "state": "running",
      "tags": [
        {
          "key": "env",
          "value": "prod"
        }
      ],
      "updated": "2020-12-08T15:37:00+08:00",
      "vpc_id": "vpc-2zeg8nf1ukc0fcmvq****",
      "vswitch_ids": [
        "vsw-2vc41xuumx5z2rdma****"
      ],
      "cluster_spec": "ack.standard"
    }
  ],
  "page_info": {
    "page_number": 1,
    "page_size": 10,
    "total_count": 10
  }
}
```

## Error codes

For a list of error codes, visit the [Service error codes]( https://api.alibabacloud.com/document/CS/2015-12-15/errorCode).

## Change history

Change time

Summary of changes

Operation

No change history

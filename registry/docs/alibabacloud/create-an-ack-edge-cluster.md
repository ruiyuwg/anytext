You can call the CreateCluster operation to create a Container Service for Kubernetes (ACK) Edge cluster.

## Debugging

[OpenAPI Explorer automatically calculates the signature value. For your convenience, we recommend that you call this operation in OpenAPI Explorer. OpenAPI Explorer dynamically generates the sample code of the operation for different SDKs.](https://api.aliyun.com/#product=CS&api=CreateCluster&type=ROA&version=2015-12-15)

## Request syntax

```
POST /clusters HTTP/1.1
Content-Type:application/json
{
  "name" : "String",
  "cluster_type" : "String",
  "disable_rollback" : Boolean,
  "timeout_mins" : Long,
  "kubernetes_version" : "String",
  "runtime" : {
    "name" : "String",
    "version" : "String"
  },
  "region_id" : "String",
  "key_pair" : "String",
  "login_password" : "String",
  "num_of_nodes" : Long,
  "profile" : "String",
  "logging_type" : "String",
  "snat_entry" : Boolean,
  "vswitch_ids" : [ "String" ],
  "worker_system_disk_category" : "String",
  "worker_system_disk_size" : Long,
  "container_cidr" : "String",
  "cloud_monitor_flags" : Boolean,
  "endpoint_public_access" : Boolean,
  "service_cidr" : "String",
  "addons" : [ {
    "name" : "String",
    "config" : "String",
    "disabled" : Boolean
  } ],
  "tags" : [ {
    "key" : "String",
    "value" : "String"
  } ],
  "vpcid" : "String",
  "worker_data_disks" : [ {
    "category" : "String",
    "size" : Long,
    "encrypted" : "String",
    "auto_snapshot_policy_id" : "String"
  } ],
  "deletion_protection" : Boolean,
  "node_cidr_mask" : "String",
  "worker_instance_types" : [ "String" ],
  "worker_instance_charge_type" : "String",
  "security_group_id" : "String",
  "is_enterprise_security_group" : Boolean,
  "rds_instances" : [ "String" ]
}
```

## Request parameters

Table 1. Request body parameters

**Parameter**

**Type**

**Required**

**Example**

**Description**

name

String

Yes

demo-edge-cluster

The name of the cluster.

The name must be 1 to 63 characters in length, and can contain digits, letters, and hyphens (-). The name cannot start with a hyphen (-).

cluster\_type

String

Yes

ManagedKubernetes

The type of the cluster. Set the value to `ManagedKubernetes` to create an ACK Edge cluster.

disable\_rollback

Boolean

No

true

**This parameter is deprecated.**

Specifies whether to perform a rollback when the cluster fails to be created. Valid values:

-   `true`: performs a rollback when the cluster fails to be created.
    
-   `false`: does not perform a rollback when the cluster fails to be created.
    

Default value: `false`.

timeout\_mins

Long

No

60

**This parameter is deprecated.**

The timeout period during which a resource must be created. Unit: minutes. Default value: 60.

kubernetes\_version

String

No

1.30.1-aliyun.1

The Kubernetes version of the cluster. The Kubernetes versions supported by Container Service are the same as the Kubernetes versions supported by open source Kubernetes. We recommend that you specify the latest Kubernetes version. If you do not set this parameter, the latest Kubernetes version is used.

You can create clusters of the latest three Kubernetes versions in the ACK console. You can create clusters of earlier Kubernetes versions by calling API operations. For more information about the Kubernetes versions supported by ACK, see [Support for Kubernetes versions](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/support-for-kubernetes-versions/).

runtime

Array of [runtime](/help/en/ack/ack-edge/developer-reference/api-cs-2015-12-15-struct-runtime-edge)

No

{"name": "`containerd`", "version": "1.6.20"}

The container runtime that you want to use. The `containerd` and `docker` runtimes are supported.

This parameter specifies the following information:

-   `name`: the name of the container runtime.
    
-   `version`: the version of the container runtime.
    

region\_id

String

Yes

cn-beijing

The region ID of the cluster.

key\_pair

String

Yes

demo-key

**This parameter is deprecated.**

The name of the key pair. You must set this parameter or `login_password`.

login\_password

String

Yes

HelloWorld123

**This parameter is deprecated.**

The password for SSH logon. You must set this parameter or `key_pair`. The password must be 8 to 30 characters in length, and must contain at least three of the following character types: uppercase letters, lowercase letters, digits, and special characters.

num\_of\_nodes

Long

Yes

1

**This parameter is deprecated.**

The number of worker nodes. Valid values: 0 to 100.

profile

String

Yes

Edge

Specifies whether the cluster is an ACK Edge cluster. Default value: Edge.

logging\_type

String

No

SLS

Specifies whether to enable Simple Log Service for the cluster. Set the value to `SLS`. This parameter takes effect only for ACK Serverless clusters.

snat\_entry

Boolean

No

true

Specifies whether to configure SNAT rules for the virtual private cloud (VPC) in which you want to deploy the cluster.

-   If the VPC can access the Internet, set the value to `false`.
    
-   If the VPC does not provide access to the Internet, the following values are valid:
    
    -   `true`: configures SNAT rules. This enables the cluster to access the Internet from the VPC.
        
    -   `false`: does not configure SNAT rules. In this case, the cluster cannot access the Internet.
        

If your applications deployed in the cluster need to access the Internet, we recommend that you set the value to `true`.

Default value: `false`.

vswitch\_ids

Array of String

Yes

vsw-2ze48rkq464rsdts1\*\*\*\*

The IDs of vSwitches. You can specify one to three vSwitches.

worker\_system\_disk\_category

String

Yes

cloud\_efficiency

**This parameter is deprecated.**

The type of system disk that you want to use for worker nodes. Valid values:

-   `cloud_efficiency`: ultra disk.
    
-   `cloud_ssd`: standard SSD.
    

Default value: `cloud_ssd`.

worker\_system\_disk\_size

Long

Yes

100

**This parameter is deprecated.**

The size of the system disk that you want to use for worker nodes. Unit: GiB.

Valid values: 40 to 500

The value of this parameter must be at least 40 and no less than the image size.

Default value: `120`.

container\_cidr

String

No

172.20.0.0

The CIDR block of pods. This CIDR block cannot overlap with the CIDR block of the VPC in which the cluster is deployed. If the VPC is automatically created by the system, the default CIDR block of pods is 172.16.0.0/16.

**Important**

-   This parameter is required if the cluster uses Flannel as the network plug-in.
    
-   This parameter is optional if the cluster uses Terway as the network plug-in.
    

cloud\_monitor\_flags

Boolean

No

true

**This parameter is deprecated.**

Specifies whether to install the CloudMonitor agent. Valid values:

-   `true`: installs the CloudMonitor agent.
    
-   `false`: does not install the CloudMonitor agent.
    

Default value: `false`.

endpoint\_public\_access

Boolean

No

true

Specifies whether to enable Internet access for the API server. Valid values:

-   `true`: enables Internet access for the API server.
    
-   `false`: disables Internet access for the API server. The API server is accessible only within the internal network.
    

Default value: `true`.

**Important**

In ACK Edge clusters, edge nodes interact with the control plane in the cloud over the Internet. Therefore, you must enable Internet access for the API server when you create an ACK Edge cluster.

service\_cidr

String

Yes

172.21.0.0

The CIDR block of Services. This CIDR block cannot overlap with the CIDR block of pods or the CIDR block of the VPC in which you want to deploy the cluster. If the VPC is automatically created by the system, the default CIDR block of Services is 172.19.0.0/20.

addons

Array of [addon](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-commonly-used-parameters#addon)

No

\[{"name":"flannel","config":""},{"name":"logtail-ds-docker","config":""},{"name":"alibaba-log-controller","config":"{"IngressDashboardEnabled":"false"}"}\]

The components that you want to install in the cluster. Parameter description:

-   `name`: required. This parameter specifies the name of the component.
    
-   `config`: optional. If this parameter is left empty, no configurations are required.
    
-   `disabled`: optional. This parameter specifies whether to disable automatic installation.
    

**Network plug-in**: required. Supported network plug-ins are Flannel and Terway. Select one of the plug-ins for the cluster.

-   Specify the Flannel plug-in in the following format: \[{"name":"flannel","config":""}\].
    
-   Specify the Terway plug-in in the following format: \[{"name": "terway-eniip","config": ""}\].
    

**Volume plug-in**: optional. This parameter specifies the volume plug-in that you want to use. The `Container Storage Interface (CSI)` plug-in is supported.

Specify the `CSI` plug-in in the following format: \[{"name":"csi-plugin","config": ""},{"name": "csi-provisioner","config": ""}\].

**Log Service component**: optional.

**Note**

If Simple Log Service is disabled, you cannot use the cluster auditing feature.

-   To use an existing Simple Log Service project, specify the component in the following format: \[{"name": "logtail-ds","config": "{\\"IngressDashboardEnabled\\":\\"true\\",\\"sls\_project\_name\\":\\"your\_sls\_project\_name\\"}"}\].
    
-   To create a Simple Log Service project, specify the component in the following format: \[{"name": "logtail-ds","config": "{\\"IngressDashboardEnabled\\":\\"true\\"}"}\].
    

**Ingress controller**: optional. By default, the nginx-ingress-controller component is installed in ACK dedicated clusters.

-   To install nginx-ingress-controller and enable Internet access, specify the Ingress controller in the following format: \[{"name":"nginx-ingress-controller","config":"{\\"IngressSlbNetworkType\\":\\"internet\\"}"}\].
    
-   If you do not want to install nginx-ingress-controller, specify the Ingress controller in the following format: \[{"name": "nginx-ingress-controller","config": "","disabled": true}\].
    

**Event center**: optional. By default, the event center feature is enabled. You can use event centers to store and query events, and configure alert rules. You can use the Logstores that are associated with event centers for free within 90 days. For more information, see [Create and use an event center](/help/en/sls/create-and-use-an-event-center#task-2389213).

To enable the event center feature, specify the component in the following format: \[{"name":"ack-node-problem-detector","config":"{\\"sls\_project\_name\\":\\"

your\_sls\_project\_name\\"}"}\].

tags

Array of [tag](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-commonly-used-parameters#tag)

No

\[{"key": "env", "value": "prod"}\]

The labels that you want to add to the cluster.

-   key: the key of the label.
    
-   value: the value of the label.
    

vpcid

String

Yes

vpc-2zeik9h3ahvv2zz95\*\*\*\*

The VPC in which you want to deploy the cluster. You must specify a VPC when you create the cluster.

**Note**

Leave both `vpc_id` and `vswitch_ids` empty or make sure that the vSwitches that are specified by the vswitch\_ids parameter belong to the VPC that is specified by the vpc\_id parameter.

worker\_data\_disks

Array of [data\_disk](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-commonly-used-parameters#data-disk)

No

**This parameter is deprecated.**

The configuration of the data disk that is mounted to worker nodes. The configuration includes the disk type and disk size.

deletion\_protection

Boolean

No

true

Specifies whether to enable deletion protection for the cluster. If deletion protection is enabled, the cluster cannot be deleted in the ACK console or by calling API operations. Valid values:

-   `true`: enables deletion protection for the cluster. This way, the cluster cannot be deleted in the ACK console or by calling API operations.
    
-   `false`: disables deletion protection for the cluster. This way, the cluster can be deleted in the ACK console or by calling API operations.
    

Default value: `false`.

node\_cidr\_mask

String

No

25

The maximum number of IP addresses that can be assigned to each node. This number is determined by the specified pod CIDR block. This parameter takes effect only if the cluster uses the Flannel plug-in.

Default value: `25`.

worker\_instance\_types

Array of String

Yes

ecs.n4.large

**This parameter is deprecated.**

The Elastic Compute Service (ECS) instance types of worker nodes. You must specify at least one instance type. For more information, see [Overview of instance families](/help/en/ecs/user-guide/overview-of-instance-families#concept-sx4-lxv-tdb).

**Note**

The instance types are listed in descending order of priority. If the system fails to create worker nodes with the instance type of the highest priority, the system attempts to create worker nodes with the instance type of the next highest priority.

worker\_instance\_charge\_type

String

Yes

PrePaid

**This parameter is deprecated.**

The billing method of worker nodes. Valid values:

-   `PrePaid`: subscription.
    
-   `PostPaid`: pay-as-you-go.
    

Default value: PostPaid.

security\_group\_id

String

No

sg-bp1bdue0qc1g7k\*\*\*\*

The ID of the existing security group that you want to use for the cluster. You must set this parameter or `is_enterprise_security_group`. Nodes in the cluster are automatically added to the specified security group.

is\_enterprise\_security\_group

Boolean

No

true

Specifies whether to create an advanced security group. This parameter takes effect only if `security_group_id` is left empty.

**Note**

To use a basic security group, make sure that the sum of the number of nodes in the cluster and the number of pods that use Terway does not exceed 2,000. Therefore, if a cluster uses the Terway network plug-in, we recommend that you specify an advanced security group for the cluster.

-   `true`: creates an advanced security group.
    
-   `false`: does not create an advanced security group.
    

Default value: `true`.

rds\_instances

rds\_instances

No

rm-2zev748xi27xc\*\*\*\*

**This parameter is deprecated.**

The names of the ApsaraDB RDS instances.

**cluster\_spec**

String

No

ack.pro.small

The type of ACK managed cluster. Valid values:

-   `ack.pro.small`: ACK Edge Pro cluster.
    
-   `ack.standard`: ACK Edge Basic cluster.
    

Default value: `ack.standard`. If you leave this parameter empty, an ACK Edge Basic cluster is created.

For more information, see the [introduction](/help/en/ack/introduction-to-professional-edge-kubernetes-clusters#concept-2558837) to ACK Edge Pro clusters.

**resource\_group\_id**

String

No

rg-acfm3mkrure\*\*\*\*

The ID of the resource group to which the cluster belongs. You can use this parameter to isolate different clusters.

## Response syntax

```
HTTP/1.1 200
Content-Type:application/json
{
  "cluster_id" : "String",
  "request_id" : "String",
  "task_id" : "String"
}
```

## Response parameters

Table 2. Response body parameters

**Parameter**

**Type**

**Example**

**Description**

cluster\_id

String

cb95aa626a47740afbf6aa099b650\*\*\*\*

The cluster ID.

request\_id

String

687C5BAA-D103-4993-884B-C35E4314A1E1

The request ID.

task\_id

String

T-5a54309c80282e39ea00002f

The task ID.

## Examples

Sample requests

```
POST /clusters 
<Common request headers>
{
    "name":"ACK Edge cluster",
    "cluster_type":"ManagedKubernetes",
    "disable_rollback":true,
    "timeout_mins":60,
    "kubernetes_version":"1.14.8-aliyunedge.1",
    "region_id":"cn-zhangjiakou",
    "snat_entry":true,
    "cloud_monitor_flags":true,
    "endpoint_public_access":true,
    "deletion_protection":true,
    "node_cidr_mask":"25",
    "tags":[
        {
            "key":"tag-k",
            "value":"tag-v"
        }
    ],
    "addons":[
        {
            "name":"logtail-ds-docker"
        },
        {
            "name":"alibaba-log-controller",
            "config":"{\"IngressDashboardEnabled\":\"false\"}"
        },
        {
            "name":"flannel"
        },
        {
            "name":"alicloud-monitor-controller"
        }
    ],
    "profile":"Edge",            // Specifies that the cluster is an ACK Edge cluster. 
    "logging_type" : "SLS",
    "worker_instance_types":[
        "ecs.hfc6.large"
    ],
    "runtime":{                       // The configuration of the container runtime. 
        "name":"containerd",              // The name of the container runtime. 
        "version":"1.6.20"          // The version of the container runtime. 
    },
    "num_of_nodes":1,
    "worker_system_disk_category":"cloud_ssd",
    "worker_system_disk_size":40,
    "worker_data_disks":[
        {
            "category":"cloud_efficiency",
            "size":"40",
            "encrypted":"false",
            "auto_snapshot_policy_id":"",
        }
    ],
    "worker_instance_charge_type":"PostPaid",
    "vpcid":"vpc-8vb435kr467tnfj42****",
    "container_cidr":"172.20.0.0/16",
    "service_cidr":"172.21.0.0/20",
    "vswitch_ids":[
        "vsw-8vbhdhn461i65p32g****"
    ],
    "login_password":"Hello1234",
    "key_pair": "sin-name",
    "security_group_id":"sg-8vb7grbyvlb10j0i****",
    "is_enterprise_security_group":true,
    "rds_instances": ["rm-xx","rm-xx"]
}
```

Sample success responses

`XML` format

```
<cluster_id>cb95aa626a47740afbf6aa099b650****</cluster_id>
<task_id>T-5a54309c80282e39ea00002f</task_id>
<request_id>687C5BAA-D103-4993-884B-C35E4314A1E1</request_id>
```

`JSON` format

```
{
    "cluster_id": "cb95aa626a47740afbf6aa099b650****",
    "task_id": "T-5a54309c80282e39ea00002f",
    "request_id": "687C5BAA-D103-4993-884B-C35E4314A1E1"
}
```

## Error codes

For a list of error codes, see [Service error codes](https://error-center.alibabacloud.com/status/product/CS).

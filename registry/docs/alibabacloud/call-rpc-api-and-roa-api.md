This topic describes the syntax of common Alibaba Cloud CLI commands and the command syntax of API operations in the remote procedure call (RPC) or resource-oriented architecture (ROA) style.

## Syntax of common commands

In Alibaba Cloud CLI, you can use the following syntax to run common commands:

```
aliyun <Command> [SubCommand] [Options and Parameters]
```

-   `Command`: the top-level command.
    
    -   You can specify the code of an Alibaba Cloud service supported by Alibaba Cloud CLI, such as ecs or rds.
        
    -   You can also specify an Alibaba Cloud CLI command, such as configure.
        

-   `SubCommand`: the operation that you want to perform.
    
    -   If the top-level `command` is set to `configure`, the operations described in the [Profile-related commands](/help/en/cli/other-configure-command-operations) topic are supported.
        
    -   If the top-level `command` is set to the code of an Alibaba Cloud service and the operation is in the RPC style, you can specify the name of the operation that you want to perform.
        

-   `Options and Parameters`: the options or parameters that are used to specify the action of Alibaba Cloud CLI. You can specify a digit, a string, or a JSON string. For more information, see [Parameter formats](/help/en/cli/parameter-format-overview).
    

## **Check the API style**

The APIs of Alibaba Cloud services are classified into two styles: RPC and ROA. Most services use the RPC style. When you use Alibaba Cloud CLI to call an API operation, you must determine the style of the operation because the call method varies based on the API style. The following methods show how to determine the style of an API operation:

-   Go to the documentation of the Alibaba Cloud service whose API you want to call and view the API style in the **List of operations by function** topic of the **Development reference** chapter.
    
-   Append `--help` to the code of the Alibaba Cloud service whose API you want to call in the command to obtain the API operations of the Alibaba Cloud service. The output of the command varies based on the API operation style.
    
    -   If a brief description is returned, the API style is RPC.
        
    -   If the `PathPattern` parameter that indicates the request path is returned, the API style is ROA.
        
    
    For more information, see [Use the help command](/help/en/cli/use-the-help-command#bba9bfc3bb6n4).
    
-   Append `--help` to the `name of an API operation` in the command to obtain the parameters of the API operation. If the `Method` and `PathPattern` parameters are returned in addition to the parameters of the API operation, the API style is ROA. For more information, see the "Query the parameters of an API operation" section of the [Use the help command](/help/en/cli/use-the-help-command#6f830ae763a38) topic.
    

In most cases, all API operations of a service use the same API style. Each API supports only one style. For more information about the RPC and ROA styles, see [API styles](/help/en/sdk/product-overview/openapi-style).

## **Call an RPC-style API operation**

### **Syntax**

You can use the following syntax to run a command that is used to call an RPC-style API operation by using Alibaba Cloud CLI:

```
aliyun <ProductCode> <APIName> [Parameters]
```

-   `ProductCode`: the code of the Alibaba Cloud service whose API you want to call. For example, the code of Elastic Compute Service (ECS) is `ecs`.
    
-   `APIName`: the name of the API operation that you want to call. For example, you can call the `DescribeRegions` operation of Elastic Compute Service.
    
-   `Parameters`: the request parameters for the API operation. You can view the details of the request parameters in the API reference of each Alibaba Cloud service and specify the parameters as options.
    
-   You can use the `--help` command to obtain the help information about the preceding parameters. For more information, see [Use the help command](/help/en/cli/use-the-help-command).
    

### **Examples**

-   This example shows how to call the `DescribeRegions` operation of ECS. By default, the recent region list of ECS is queried. For more information, see [DescribeRegions](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeregions).
    
    ```
    aliyun ecs DescribeRegions
    ```
    
-   This example shows how to call the `DescribeInstanceAttribute` operation of ECS. The attributes of an ECS instance are queried. For more information, see [DescribeInstanceAttribute](/help/en/ecs/developer-reference/api-ecs-2014-05-26-describeinstanceattribute).
    
    ```
    aliyun rds DescribeInstanceAttribute --InstanceId 'i-uf6f5trc95ug8t33****'
    ```
    

## **Call an ROA-style API operation**

### **Syntax**

You can use the following syntax to run a command that is used to call an ROA-style API operation by using Alibaba Cloud CLI:

```
 aliyun <ProductCode> <Method> <PathPattern> [RequestBody] [Parameters]
```

-   `ProductCode`: the code of the Alibaba Cloud service whose API you want to call. For example, the code of Container Service for Kubernetes (ACK) is `cs`.
    
-   `Method`: the request method. You can select an appropriate request method based on the API reference. Common request methods include `GET`, `PUT`, `POST`, and `DELETE`.
    
-   `PathPattern`: the request path. You can specify a valid request path based on the API reference.
    
-   `RequestBody`: the request body. You can use one of the following options based on the API reference to specify the request body.
    
    -   Use the `--body` option to specify a string or a variable as the request body.
        
    -   Use the `--body-file` option to specify a file path. The file is used as the request body.
        
    
    For more information, see [Command line options for API calls](/help/en/cli/command-line-options).
    
-   `Parameters`: the request parameters for the API operation. You can view the details of the request parameters in the API reference and specify the parameters as options.
    
-   You can use the `--help` option to obtain the help information about the preceding parameters. For more information, see [Use the help command](/help/en/cli/use-the-help-command).
    

### **Examples**

## GET request

This example shows how to call the `DescribeClustersForRegion` operation of ACK to query ACK dedicated clusters in the China (Hangzhou) region. For more information, see [DescribeClustersForRegion](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-cs-2015-12-15-describeclustersforregion).

```
aliyun cs GET /regions/cn-hangzhou/clusters --cluster_type Kubernetes
```

## PUT request

This example shows how to call the `ModifyCluster` operation of ACK to modify the elastic IP address (EIP) that is associated with a cluster. For more information, see [ModifyCluster](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-cs-2015-12-15-modifycluster).

```
aliyun cs PUT /api/v2/clusters/cb95aa626a47740afbf6aa099b65**** --body "{\"api_server_eip\":true,\"api_server_eip_id\":\"eip-wz9fnasl6dsfhmvci****\"}"
```

## POST request

This example shows how to call the `CreateCluster` operation of ACK to create an ACK dedicated cluster by using a `create.json` file. For more information, see [CreateCluster](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-cs-2015-12-15-createcluster).

```
aliyun cs POST /clusters --body-file create.json
```

**Sample code of the JSON file**

```
{
    "cluster_type":"Kubernetes",
    "name":"webService",
    "region_id":"cn-beijing",
    "disable_rollback":true,
    "timeout_mins":60,
    "kubernetes_version":"1.14.8-aliyun.1",
    "snat_entry":true,
    "endpoint_public_access":true,
    "ssh_flags":true,
    "cloud_monitor_flags":true,
    "deletion_protection":false,
    "node_cidr_mask":"26",
    "proxy_mode":"ipvs",
    "tags":[],
    "addons":[{"name":"flannel"},{"name":"arms-prometheus"},{"name":"flexvolume"},{"name":"alicloud-disk-controller"},{"name":"logtail-ds","config":"{"IngressDashboardEnabled":"false"}"},{"name":"ack-node-problem-detector","config":"{"sls_project_name":""}"},{"name":"nginx-ingress-controller","config":"{"IngressSlbNetworkType":"internet"}"}],
    "os_type":"Linux",
    "platform":"CentOS",
    "node_port_range":"30000-32767",
    "key_pair":"sian-sshkey",
    "cpu_policy":"none",
    "master_count":3,
    "master_vswitch_ids":["vsw-2zete8s4qocqg0mf6****","vsw-2zete8s4qocqg0mf6****","vsw-2zete8s4qocqg0mf6****"],
    "master_instance_types":["ecs.n4.large","ecs.n4.large","ecs.n4.large"],
    "master_system_disk_category":"cloud_ssd",
    "master_system_disk_size":120,
    "runtime":{"name":"docker","version":"18.09.2"},
    "worker_instance_types":["ecs.i1.xlarge"],
    "num_of_nodes":1,
    "worker_system_disk_category":"cloud_efficiency",
    "worker_system_disk_size":120,
    "vpcid":"vpc-2zecuu62b9zw7a7q****",
    "worker_vswitch_ids":["vsw-2zete8s4qocqg0mf6****"],
    "container_cidr":"172.20.0.0/16",
    "service_cidr":"172.21.0.0/20"
}
```

## DELETE request

This example shows how to call the `DeleteClusterNodepool` operation of ACK to delete a specified node pool from a cluster. For more information, see [DeleteClusterNodepool](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-cs-2015-12-15-deleteclusternodepool).

```
aliyun cs DELETE /clusters/cb95aa626a47740afbf6aa099b65****/nodepools/np30db56bcac7843dca90b999c8928****
```

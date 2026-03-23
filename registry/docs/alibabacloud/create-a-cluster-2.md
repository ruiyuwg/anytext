This operation creates a Container Service for Kubernetes (ACK) cluster instance and adds a specified number of nodes.

For more information about the command parameters, see [CreateCluster - Create a cluster](/help/en/ack/ack-managed-and-ack-dedicated/developer-reference/api-cs-2015-12-15-createcluster).

## API request and response

Request format

```
aliyun cs  POST /clusters --region=${regionId} --header "Content-Type=application/json" --body "$(cat create.json)"
```

Parameters:

-   `--header`: Set Content-Type to application/json.
    
-   `--region`: The region where the cluster is located.
    
-   `--body`: The request body. The content is read from a local file and must be in a valid JSON format. The following example shows the content of the `create.json` file.
    

Request examples:

-   **Kubernetes cluster**
    
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
    
    Description
    
    ```
    If the cluster uses the terway network type, "pod_vswitch_ids" is a required parameter. The following is a sample of the request parameters.
    {
        "cluster_type":"Kubernetes",
        "name":"webService-terway",
        "region_id":"cn-beijing",
        "disable_rollback":true,
        "timeout_mins":60,
        "kubernetes_version":"1.14.8-aliyun.1",
        "snat_entry":true,
        "endpoint_public_access":true,
        "ssh_flags":true,"cloud_monitor_flags":true,
        "deletion_protection":false,
        "proxy_mode":"ipvs",
        "tags":[],
        "addons":[{"name":"terway-eni"},{"name":"flexvolume"},{"name":"alicloud-disk-controller"},{"name":"logtail-ds","config":"{\"IngressDashboardEnabled\":\"false\"}"},{"name":"ack-node-problem-detector","config":"{\"sls_project_name\":\"\"}"},{"name":"nginx-ingress-controller","config":"{\"IngressSlbNetworkType\":\"internet\"}"}],
        "os_type":"Linux",
        "platform":"CentOS",
        "node_port_range":"30000-32767",
        "pod_vswitch_ids":["vsw-2zete8s4qocqg0mf6****"],
        "key_pair":"sian-sshkey",
        "cpu_policy":"none",
        "master_count":3,
        "master_vswitch_ids":["vsw-2zed90q9inwtuyfzd****","vsw-2zed90q9inwtuyfzd****","vsw-2zed90q9inwtuyfzd****"],
        "master_instance_types":["ecs.i1.4xlarge","ecs.i1.4xlarge","ecs.i1.4xlarge"],
        "master_system_disk_category":"cloud_ssd",
        "master_system_disk_size":120,
        "runtime":{"name":"docker","version":"18.09.2"},
        "worker_instance_types":["ecs.i1.4xlarge"],
        "num_of_nodes":1,
        "worker_system_disk_category":"cloud_efficiency",
        "worker_system_disk_size":120,
        "vpcid":"vpc-2zecuu62b9zw7a7q****",
        "worker_vswitch_ids":["vsw-2zed90q9inwtuyfzd****"],
        "is_enterprise_security_group":true,
        "service_cidr":"172.21.0.0/20"
    }
    ```
    
-   **Managed Kubernetes cluster**
    
    ```
    {
        "name":"amk-cluster",
        "cluster_type":"ManagedKubernetes",
        "disable_rollback":true,
        "timeout_mins":60,
        "kubernetes_version":"1.16.9-aliyun.1",
        "region_id":"cn-beijing",
        "snat_entry":true,
        "cloud_monitor_flags":true,
        "endpoint_public_access":true,
        "deletion_protection":true,
        "node_cidr_mask":"26",
        "proxy_mode":"ipvs",
        "tags":[
            {
                "key":"tier",
                "value":"backend"
            }
        ],
        "addons":[{"name":"flannel"},{"name":"csi-plugin"},{"name":"csi-provisioner"},{"name":"logtail-ds","config":"{\"IngressDashboardEnabled\":\"true\"}"},{"name":"ack-node-problem-detector","config":"{\"sls_project_name\":\"\"}"},{"name":"nginx-ingress-controller","config":"{\"IngressSlbNetworkType\":\"internet\"}"},{"name":"arms-prometheus"}],
        "os_type":"Linux",
        "platform":"CentOS",
        "runtime":{
            "name":"docker",
            "version":"19.03.5"
        },
        "worker_instance_types":[
            "ecs.i2.2xlarge"
        ],
        "num_of_nodes":3,
        "worker_system_disk_category":"cloud_efficiency",
        "worker_system_disk_size":120,
        "worker_data_disks":[
            {
                "category":"cloud_efficiency",
                "size":"40",
                "encrypted":"true",
                "auto_snapshot_policy_id":""
            }
        ],
        "worker_instance_charge_type":"PrePaid",
        "worker_period_unit":"Month",
        "worker_period":1,
        "worker_auto_renew":true,
        "worker_auto_renew_period":1,
        "vpcid":"vpc-2zemm8mo5rmdppgqm****",
        "container_cidr":"172.20.0.0/16",
        "service_cidr":"172.21.0.0/20",
        "vswitch_ids":[
            "vsw-2zej67xyhh61oqn7i****"
        ],
        "login_password":"Hello1234",
        "logging_type":"SLS",
        "cpu_policy":"none",
        "taints":[
            {
                "key":"key1",
                "value":"value1",
                "effect":"NoSchedule"
            }
        ],
        "security_group_id":"sg-2zeg3u73kkhtixda****"
    }
    ```
    
-   **ACK serverless cluster**
    
    ```
    {
        "cluster_type":"Ask",
        "name":"ask-cluster",
        "kubernetes_version":"1.16.9-aliyun.1",
        "region_id":"cn-shenzhen",
        "endpoint_public_access":true,
        "private_zone":true,
        "tags":[
            {
                "key":"tier",
                "value":"frontend"
            }
        ],
        "deletion_protection":true,
        "addons":[
            {
                "name":"logtail-ds"
            }
        ],
        "zone_id":"cn-shenzhen-a",
        "vpc_id":"vpc-wz984yvbd6lck22z3****",
        "vswitch_ids":[
            "vsw-wz9uwxhawmtzg7u9h****"
        ],
        "logging_type":"SLS",
        "security_group_id":"sg-wz9b86l4s7nthi1k****"
    }
    ```
    

Response

```
{
    "cluster_id": "c61cf530524474386a7ab5a1c192****",
    "request_id": "348D4C9C-9105-4A1B-A86E-B58F0F875575",
    "task_id": "T-5ad724ab94a2b109e8000004"
}
```

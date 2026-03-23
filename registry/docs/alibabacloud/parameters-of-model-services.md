In Elastic Algorithm Service (EAS), you can define and deploy online services using a JSON configuration file. Once you prepare the file, you can deploy the service using the PAI console, the EASCMD client, or SDKs.

## **1\. Prepare a JSON configuration file**

Service deployment centers on a JSON file that defines the service configuration. For first-time users, we recommend using the console to configure basic settings on the service deployment page. The system automatically generates the corresponding JSON content, which you can then modify and extend.

The following code provides an example of a `service.json` file. For a complete list of parameters and their descriptions, see [Appendix: JSON parameter descriptions](#8d2bbe2f99n52).

```
{
    "cloud": {
        "computing": {
            "instances": [
                {
                    "type": "ecs.c7a.large"
                }
            ]
        }
    },
    "containers": [
        {
            "image": "****-registry.cn-beijing.cr.aliyuncs.com/***/***:latest",
            "port": 8000,
            "script": "python app.py"
        }
    ],
    "metadata": {
        "cpu": 2,
        "instance": 1,
        "memory": 4000,
        "name": "demo"
    }
}
```

## **2\. Deploy a service using a JSON file**

## Console

1.  Log on to the [PAI console](https://pai.console.alibabacloud.com/). Select a region on the top of the page. Then, select the desired workspace and click **Elastic Algorithm Service (EAS)**.
    
2.  On the **Inference Service** tab, click **Deploy Service**. On the **Deploy Service** page, select **Custom Model Deployment** > **JSON Deployment**.
    
3.  Paste the content of your prepared JSON file and click **Deploy**. The service is successfully deployed when its status changes to **Running**.
    

## EASCMD

You can use the EASCMD client tool to manage model services on your own server, including creating, viewing, deleting, and updating services. Follow these steps:

1.  **Download and authenticate the client**
    
    If you use a Data Science Workshop (DSW) development environment with an official image, the EASCMD client is pre-installed at `/etc/dsw/eascmd64`. Otherwise, you must [download and authenticate the client](/help/en/pai/developer-reference/download-the-eascmd-client-and-complete-user-authentication#task-2006065).
    
2.  **Run the deployment command**
    
    In the directory where your JSON file is located, run the following command to deploy the service. This example uses the 64-bit version for Windows. For more information about other operations, see [Command reference](/help/en/pai/developer-reference/run-commands-to-use-the-eascmd-client#concept-1936147).
    
    ```
    eascmdwin64.exe create <service.json>
    ```
    
    Replace <service.json> with the actual name of your JSON file.
    
    **Note**
    
    If you use a DSW development environment and need to upload the JSON configuration file. For more information, see [Upload and download files](/help/en/pai/user-guide/upload-or-download-data-files#task-2233173).
    
    The system returns a result similar to the following.
    
    ```
    [RequestId]: 1651567F-8F8D-4A2B-933D-F8D3E2DD****
    +-------------------+----------------------------------------------------------------------------+
    | Intranet Endpoint | http://166233998075****.cn-shanghai.pai-eas.aliyuncs.com/api/predict/test_eascmd |
    |             Token | YjhjOWQ2ZjNkYzdiYjEzMDZjOGEyNGY5MDIxMzczZWUzNGEyMzhi****                   |
    +-------------------+--------------------------------------------------------------------------+
    [OK] Creating api gateway
    [OK] Building image [registry-vpc.cn-shanghai.aliyuncs.com/eas/test_eascmd_cn-shanghai:v0.0.1-20221122114614]
    [OK] Pushing image [registry-vpc.cn-shanghai.aliyuncs.com/eas/test_eascmd_cn-shanghai:v0.0.1-20221122114614]
    [OK] Waiting [Total: 1, Pending: 1, Running: 0]
    [OK] Waiting [Total: 1, Pending: 1, Running: 0]
    [OK] Service is running
    ```
    

## **Appendix: JSON parameter descriptions**

**Parameter**

**Required**

**Description**

metadata

Yes

The metadata of the service. For more information about the parameters, see [metadata parameter descriptions](#430a5bd95aqgk).

cloud

No

The configurations of computing resources and VPCs. For more information, see [cloud parameter descriptions](#90218005e144w).

containers

No

The image configurations. For more information, see [containers parameter descriptions](#42d2d6b780s6c).

**dockerAuth**

No

When the image comes from a private repository, set **dockerAuth** to a Base64-encoded string of the image repository's `username:password`.

**networking**

No

The call configurations of the service. For more information about the parameters, see [networking parameter descriptions](#c005d839eahos).

storage

No

The information about service storage mounting. For more information about the configurations, see [Mount storage](/help/en/pai/user-guide/mount-storage-to-services#64ba65214cxa4).

token

No

The token string for access authentication. If you do not specify this parameter, the system automatically generates a token.

aimaster

No

You can enable [Computing power check and fault tolerance](/help/en/pai/user-guide/calculation-force-detection-and-fault-tolerance) for the multi-machine distributed inference service.

model\_path

Yes

This parameter is required when you deploy a service using a processor. The model\_path and processor\_path parameters specify the paths of the input data sources for the model and processor. The following address formats are supported:

-   OSS address: The address can be a path of a specific file or a directory.
    
-   HTTP address: The required file must be a compressed package, such as a TAR.GZ, TAR, BZ2, or ZIP package.
    
-   Local path: If you use the `test` command for local testing, you can use a local path.
    

oss\_endpoint

No

The endpoint of OSS. Example: oss-cn-beijing.aliyuncs.com. For other values, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).

**Note**

By default, you do not need to specify this parameter. The system uses the internal endpoint of OSS in the current region to download the model file or processor file. If you want to access OSS across regions, you must specify this parameter. For example, if you deploy a service in the China (Hangzhou) region and specify an OSS address in the China (Beijing) region for the model\_path parameter, you must use this parameter to specify the public endpoint of OSS in the China (Beijing) region.

model\_entry

No

The entry file of the model. It can be any file. If you do not specify this parameter, the file name in model\_path is used. The path of the main file is passed to the initialize() function in the processor.

model\_config

No

The configuration of the model. Any text is supported. The value of this parameter is passed to the second parameter of the initialize() function in the processor.

processor

No

-   If you use an official pre-built processor, specify the processor code. For information about the processor codes used in `eascmd`, see [Pre-built processors](/help/en/pai/user-guide/built-in-processors/#concept-1895821).
    
-   If you use a custom processor, you do not need to configure this parameter. You only need to configure the processor\_path, processor\_entry, processor\_mainclass, and processor\_type parameters.
    

processor\_path

No

The path of the processor file package. For more information, see the description of the model\_path parameter.

processor\_entry

No

The main file of the processor. Examples: libprocessor.so and app.py. The main file contains the implementations of the `initialize()` and `process()` functions that are required for prediction.

If you set processor\_type to cpp or python, you must specify this parameter.

processor\_mainclass

No

The main class of the processor in the JAR package. Example: com.aliyun.TestProcessor.

If you set processor\_type to java, you must specify this parameter.

processor\_type

No

The language in which the processor is implemented. Valid values:

-   cpp
    
-   java
    
-   python
    

warm\_up\_data\_path

No

The path of the request file used for model prefetching. For more information about the model prefetch feature, see [Prefetch a model service](/help/en/pai/user-guide/warm-up-model-services#task-2088179).

runtime.enable\_crash\_block

No

Specifies whether a service instance automatically restarts after it crashes due to an exception in the processor code. Valid values:

-   true: The service instance does not automatically restart. This lets you retain the scene for troubleshooting.
    
-   false: The service instance automatically restarts. This is the default value.
    

autoscaler

No

The configuration information for automatic horizontal scaling of the model service. For more information about the parameters, see [Horizontal auto scaling](/help/en/pai/user-guide/enable-or-disable-the-horizontal-auto-scaling-feature#task-2192621).

**labels**

No

The labels to configure for the EAS service. The format is `key:value`.

**unit.size**

No

The number of machines deployed for a single instance in a distributed inference configuration. Default value: 2.

**sinker**

No

Supports the persistence of all service requests and responses to MaxCompute or Simple Log Service (SLS). For more information about the parameters, see [sinker parameter descriptions](#a5f1c3b0c0pcu).

**confidential**

No

By configuring the system trust management service, you can ensure that information such as data, models, and code is securely encrypted during service deployment and invocation. This enables secure and verifiable inference services. The format is as follows:

**Note**

The secure encryption environment is mainly for your mounted storage files. Complete the mounting of storage files before you enable this feature.

```
"confidential": {
        "trustee_endpoint": "xxxx",
        "decryption_key": "xxxx"
    }
```

The following table describes the parameters.

-   **trustee\_endpoint**: The URI of the system trust management service Trustee.
    
-   **decryption\_key**: The KBS URI of the decryption key. Example: `kbs:///default/key/test-key`.
    

### **metadata parameter descriptions**

#### **General parameters**

**Parameter**

**Required**

**Description**

name

Yes

The service name, which must be unique within the same region.

instance

Yes

The number of instances to start for the service.

**workspace\_id**

No

After you set this parameter, the service can be used only within the specified PAI workspace. Example: `1405**`.

cpu

No

The number of CPU cores required by each instance.

memory

No

The amount of memory required by each instance. The value must be an integer. Unit: MB. For example, `"memory": 4096` indicates that each instance requires 4 GB of memory.

gpu

No

The number of GPUs required by each instance.

gpu\_memory

No

You can configure the [GPU slicing](/help/en/pai/user-guide/advanced-configuration-gpu-sharing) feature to enable multiple instances to share a single card when using EAS resource groups or resource quotas.

**gpu\_core\_percentage**

qos

No

The quality of service (QoS) for the instance. The value can be empty or `BestEffort`. When `qos` is set to `BestEffort`, it enables CPU sharing mode. This makes instances scheduled entirely based on GPU memory and system memory, no longer limited by the number of CPUs on the node. All instances on the node share the CPUs. The `cpu` field indicates the maximum quota a single instance can use in CPU sharing mode.

resource

No

The ID of the resource group. The configuration policy is as follows:

-   If the service is deployed in a public resource group, you can ignore this parameter. In this case, the service is pay-as-you-go.
    
-   If the service is deployed in a dedicated resource group, set this parameter to the resource group ID. Example: `eas-r-6dbzve8ip0xnzt****`.
    

cuda

No

The CUDA version required by the service. When the service runs, the specified CUDA version is automatically mounted to the `/usr/local/cuda` directory of the instance.

Supported CUDA versions are: 8.0, 9.0, 10.0, 10.1, 10.2, 11.0, 11.1, and 11.2. Example: `"cuda":"11.2"`.

**rdma**

No

In a distributed inference configuration, this specifies whether to enable Remote Direct Memory Access (RDMA) networking. Set to `1` to enable RDMA. If the `rdma` parameter is not configured, RDMA is disabled.

**Note**

Currently, only services deployed using Lingjun intelligent computing resources can use RDMA networking.

enable\_grpc

No

Specifies whether to enable the gRPC connection for the service gateway. Valid values:

-   false(default): The gateway does not enable gRPC connections and supports HTTP requests by default.
    
-   true: The gateway enables gRPC connections.
    

**Note**

If you deploy a service using a custom image and the server in the image is implemented with gRPC, you must use this parameter to switch the gateway protocol to gRPC.

enable\_webservice

No

Specifies whether to enable the web server to deploy the service as an AI web application. Valid values:

-   false(default): Does not enable a web server.
    
-   true: Enables a web server.
    

**type**

No

Set this parameter to **LLMGatewayService** to deploy an LLM intelligent router. For information about how to configure the JSON file, see [Deploy an LLM intelligent router](/help/en/pai/user-guide/use-llm-intelligent-router-to-improve-inference-efficiency#736ed1ebadm42).

#### **Advanced parameters**

**Important**

Adjust the advanced parameters with caution.

**Parameter**

**Required**

**Description**

**rpc**

batching

No

Specifies whether to enable server-side batching to accelerate GPU models. This is only supported in pre-built processor mode. Valid values:

-   false(default): Disables server-side batching.
    
-   true: Enables server-side batching.
    

keepalive

No

The maximum processing time for a single request, in milliseconds. If the request processing time exceeds this value, the server returns a `408` timeout error and closes the connection. The default value is `600000` for a dedicated gateway. This configuration is not supported for Application Load Balancer (ALB) dedicated gateways.

io\_threads

No

The number of threads used by each instance to process network I/O. The default value is `4`.

max\_batch\_size

No

The maximum size of each batch. The default value is `16`. This is only supported in pre-built processor mode. This parameter takes effect only when `rpc.batching` is set to `true`.

max\_batch\_timeout

No

The maximum timeout for each batch, in milliseconds. The default value is `50`. This is only supported in pre-built processor mode. This parameter takes effect only when `rpc.batching` is set to `true`.

max\_queue\_size

No

When creating an asynchronous inference service, this is the maximum length of the queue. The default value is `64`. If the queue is full, the server returns a `450` error and closes the connection. To prevent the server from being overloaded, the queue can notify the client in advance to retry with other instances. For services with high latency (long response times), consider reducing the queue length to prevent request backlogs and timeouts.

worker\_threads

No

The number of threads in each instance used for concurrent request processing. The default value is `5`. This is only supported in pre-built processor mode.

rate\_limit

No

Enables QPS rate limiting and sets the maximum QPS an instance can handle. The default value is `0`, which disables rate limiting.

For example, if this parameter is set to `2000`, requests are rejected with a `429` (Too Many Requests) error when the QPS exceeds `2000`.

**enable\_sigterm**

No

Valid values:

-   **false** (default): A `SIGTERM` signal is not sent when an instance enters the terminating state.
    
-   **true**: When a service instance enters the terminating state, the system immediately sends a `SIGTERM` signal to the main process. Upon receiving this signal, the service process must perform a custom graceful shutdown operation in the signal handler. If this signal is not handled, the main process may exit directly after receiving the signal, causing the graceful shutdown to fail.
    

rolling\_strategy

max\_surge

No

During a rolling update of the service, this is the maximum number of extra instances that can be created above the specified number of instances. This parameter can be a positive integer (number of instances) or a percentage, such as `2%`. The default is `2%`. Increasing this parameter can speed up service updates.

For example, if the number of service instances is `100` and this parameter is set to `20`, `20` new instances are created immediately when the service update begins.

max\_unavailable

No

During a rolling update, this is the maximum number of unavailable instances. This parameter allows resources to be freed up for new instances during the update process, preventing the update from getting stuck due to insufficient idle resources. Currently, the default value is `1` in dedicated resource groups and `0` in public resource groups.

For example, if this parameter is `N`, `N` instances are stopped immediately when the service update begins.

**Note**

If idle resources are sufficient, you can set this parameter to `0`. Setting this parameter too high may affect service stability. This is because the number of available instances decreases momentarily during the update, increasing the traffic load on each instance. Balance service stability with resource availability when configuring this parameter.

eas.termination\_grace\_period

No

The graceful termination period for an instance, in seconds. The default value is `30`.

EAS services use a rolling update strategy. An instance first enters a `Terminating` state. The service routes traffic away from the instance that is about to be terminated. The instance waits for `30` seconds to process any received requests before it shuts down. To ensure that all in-progress requests are handled during a service update, you can increase this value if request processing takes a long time.

**Important**

Decreasing this value may affect service stability. Setting it too high will slow down service updates. Do not configure this parameter unless you have a specific requirement.

scheduling

spread.policy

No

The distribution policy for scheduling service instances. The following policies are supported:

-   host: Instances are distributed by node. Instances are spread across as many different nodes as possible.
    
-   zone: Instances are distributed by the zone where the node is located. Instances are spread across as many different zones as possible.
    
-   default: Instances are scheduled based on the default policy. There is no active distribution logic.
    

Configuration example:

```
{
  "metadata": {
    "scheduling": {
      "spread": {
        "policy": "host"
      }
    }
}
```

**resource\_rebalancing**

No

Valid values:

-   **false** (default): This feature is disabled.
    
-   **true**: EAS periodically creates probe instances on high-priority resources. If a probe instance is successfully scheduled, more probe instances are created exponentially until scheduling fails. Meanwhile, after a successfully scheduled probe instance is initialized and enters the ready state, it replaces an instance on a lower-priority resource.
    

This feature can solve the following issues:

-   During a rolling update, terminating instances still occupy resources, causing newly created instances to start in a public resource group. Due to public resource limitations, these new instances are later rescheduled back to the dedicated resource group.
    
-   When using both spot and regular instances, the system periodically checks if spot instances are available. If they are, regular instances are migrated to spot instances.
    

**workload\_type**

No

If you want to deploy an EAS service as a job, you can set this parameter to `elasticjob`. For more information about how to use the elastic Job service, see [Elastic Job service](/help/en/pai/user-guide/elastic-job-service/).

**resource\_burstable**

No

Enables the [elastic resource pool](/help/en/pai/user-guide/elastic-resource-pool) for an EAS service deployed by using a dedicated resource group:

-   `true`: Enables the feature.
    
-   `false`: Disables the feature.
    

**shm\_size**

No

The shared memory of the instance. You can directly read and write data in the memory without data replication or transmission. Unit: GB.

### cloud parameter descriptions

**Parameter**

**Required**

**Description**

computing

instances

No

When deploying a service using a public resource group, you must set this parameter to specify a list of resource specifications. If a spot instance bid fails or inventory is insufficient, the system attempts to create the service using the next instance specification in the configured order.

-   **type**: The resource specification.
    
-   **spot\_price\_limit** is an optional parameter.
    
    -   When configured, it indicates that the corresponding instance specification uses a spot instance and specifies the price limit. The unit is USD, and it supports pay-as-you-go.
        
    -   When not configured, it indicates that the corresponding instance specification is a regular pay-as-you-go instance.
        
-   **capacity**: The upper limit on the number of instances of this type. This can be a number, like "500", or a string, like "20%". When configured, if the number of instances of this type reaches the limit, this type will not be used even if there is available inventory.
    
    For example, if the total number of service instances is `200` and the `capacity` for instance type A is `20%`, the service will use at most `40` instances of type A. The remaining instances will be launched using other specifications.
    

disable\_spot\_protection\_period

No

When using spot instances, you must set this parameter. Valid values:

-   **false** (default): After a spot instance is successfully created, it has a default protection period of 1 hour. During the protection period, the instance will not be released even if the market price exceeds your bid.
    
-   **true**: Disables the protection period. Instances without a protection period are always about 10% cheaper than those with one.
    

**networking**

**vpc\_id**

No

The VPC, vSwitch, and security group to bind to the EAS service.

**vswitch\_id**

No

**security\_group\_id**

No

Example:

```
{
    "cloud": {
        "computing": {
            "instances": [
                {
                    "type": "ecs.c8i.2xlarge",
                    "spot_price_limit": 1
                },
                {
                    "type": "ecs.c8i.xlarge",
                    "capacity": "20%"
                }
            ],
            "disable_spot_protection_period": false
        },
        "networking": {
            "vpc_id": "vpc-bp1oll7xawovg9*****",
            "vswitch_id": "vsw-bp1jjgkw51nsca1e****",
            "security_group_id": "sg-bp1ej061cnyfn0b*****"
        }
    }
}
```

### containers parameter descriptions

When deploying a service using a custom image, see [Deploy services with custom images](/help/en/pai/user-guide/deploy-a-model-service-by-using-a-custom-image#task-2086310).

**Parameter**

**Required**

**Description**

image

Yes

Required when deploying with an image. The address of the image used to deploy the model service.

env

name

No

The name of an environment variable for the container.

value

No

The value of the environment variable for the container.

command

One of the two is required.

The entry point command for the image. Only single commands are supported. Complex scripts, such as `cd xxx && python app.py`, are not supported. Use the `script` parameter for such scripts. This field is suitable for images that lack the `/bin/sh` command.

**script**

The entry point script for the image. More complex script formats can be specified. Use `\n` or semicolons to separate multiple lines.

port

No

The container port.

**Important**

-   Avoid ports `8080` and `9090`, which are reserved for the EAS engine.
    
-   This port must match the port that the process in your `command` or `script` listens on.
    

**prepare**

**pythonRequirements**

No

A list of Python requirements to install before the instance starts. The image must have `python` and `pip` commands in the system path. The format is a list, for example:

```
"prepare": {
  "pythonRequirements": [
    "numpy==1.16.4",
    "absl-py==0.11.0"
  ]
}
```

**pythonRequirementsPath**

No

The path to a `requirements.txt` file to install before the instance starts. The image must have Python and pip commands in the system path. The `requirements.txt` file can either be built into the image or mounted into the service instance from external storage, for example:

```
"prepare": {
  "pythonRequirementsPath": "/data_oss/requirements.txt"
}
```

### **networking parameter descriptions**

**Parameter**

**Required**

**Description**

**gateway**

No

The [dedicated gateway](/help/en/pai/user-guide/dedicated-service-gateway/) configured for the EAS service.

**gateway\_policy**

No

-   **rate\_limit:** The global rate limit for the service, which is the maximum number of requests the service can receive per second.
    
    -   enable: Whether to enable rate limiting. `true` enables it, `false` disables it.
        
    -   limit: The rate limit value.
        
        **Note**
        
        Services using the shared gateway have a default single-service limit of 1000 QPS and a server group limit of 10000 QPS. Dedicated gateways do not have a default value.
        
-   **concurrency\_limit:** The global concurrency control for the service, which is the maximum number of simultaneous in-flight requests. Application Load Balancer (ALB) dedicated gateways do not currently support this setting.
    
    -   enable: Whether to enable concurrency limiting. `true` enables it, `false` disables it.
        
    -   limit: The concurrency limit value.
        

Rate limit configuration example:

```
{
    "networking": {
        "gateway_policy": {
            "rate_limit": {
                "enable": true,
                "limit": 100
            },
            "concurrency_limit": {
                "enable": true,
                "limit": 50
            }
        }
    }
}
```

### **sinker parameter descriptions**

**Parameter**

**Required**

**Description**

**type**

No

The storage type for persisting records. The following types are supported:

-   maxcompute: MaxCompute.
    
-   sls: Simple Log Service (SLS).
    

**config**

**maxcompute.project**

No

The MaxCompute project name.

**maxcompute.table**

No

The MaxCompute data table.

**sls.project**

No

The SLS project name.

**sls.logstore**

No

The SLS Logstore.

The following are configuration examples:

#### **Store in MaxCompute**

```
"sinker": {
        "type": "maxcompute",
        "config": {
            "maxcompute": {
                "project": "cl****",
                "table": "te****"
            }
        }
    }
```

#### **Store in Simple Log Service**

```
"sinker": {
        "type": "sls",
        "config": {
            "sls": {
                "project": "k8s-log-****",
                "logstore": "d****"
            }
        }
    }
```

## **Appendix: JSON configuration example**

The following is a sample JSON file that shows how the preceding parameters can be configured:

```
{
  "token": "****M5Mjk0NDZhM2EwYzUzOGE0OGMx****",
  "processor": "tensorflow_cpu_1.12",
  "model_path": "oss://examplebucket/exampledir/",
  "oss_endpoint": "oss-cn-beijing.aliyuncs.com",
  "model_entry": "",
  "model_config": "",
  "processor_path": "",
  "processor_entry": "",
  "processor_mainclass": "",
  "processor_type": "",
  "warm_up_data_path": "",
  "runtime": {
    "enable_crash_block": false
  },
  "unit": {
        "size": 2
    },
  "sinker": {
        "type": "maxcompute",
        "config": {
            "maxcompute": {
                "project": "cl****",
                "table": "te****"
            }
        }
    },
  "cloud": {
    "computing": {
      "instances": [
        {
          "capacity": 800,
          "type": "dedicated_resource"
        },
        {
          "capacity": 200,
          "type": "ecs.c7.4xlarge",
          "spot_price_limit": 3.6
        }
      ],
      "disable_spot_protection_period": true
    },
    "networking": {
            "vpc_id": "vpc-bp1oll7xawovg9t8****",
            "vswitch_id": "vsw-bp1jjgkw51nsca1e****",
            "security_group_id": "sg-bp1ej061cnyfn0b****"
        }
  },
  "autoscaler": {
    "min": 2,
    "max": 5,
    "strategies": {
      "qps": 10
    }
  },
  "storage": [
    {
      "mount_path": "/data_oss",
      "oss": {
        "endpoint": "oss-cn-shanghai-internal.aliyuncs.com",
        "path": "oss://bucket/path/"
      }
    }
  ],
  "confidential": {
        "trustee_endpoint": "xx",
        "decryption_key": "xx"
    },
  "metadata": {
    "name": "test_eascmd",
    "resource": "eas-r-9lkbl2jvdm0puv****",
    "instance": 1,
    "workspace_id": "1405**",
    "gpu": 0,
    "cpu": 1,
    "memory": 2000,
    "gpu_memory": 10,
    "gpu_core_percentage": 10,
    "qos": "",
    "cuda": "11.2",
    "enable_grpc": false,
    "enable_webservice": false,
    "rdma": 1,
    "rpc": {
      "batching": false,
      "keepalive": 5000,
      "io_threads": 4,
      "max_batch_size": 16,
      "max_batch_timeout": 50,
      "max_queue_size": 64,
      "worker_threads": 5,
      "rate_limit": 0,
      "enable_sigterm": false
    },
    "rolling_strategy": {
      "max_surge": 1,
      "max_unavailable": 1
    },
    "eas.termination_grace_period": 30,
    "scheduling": {
      "spread": {
        "policy": "host"
      }
    },
    "resource_rebalancing": false,
    "workload_type": "elasticjob",
    "shm_size": 100
  },
  "features": {
    "eas.aliyun.com/extra-ephemeral-storage": "100Gi",
    "eas.aliyun.com/gpu-driver-version": "tesla=550.127.08"
  },
  "networking": {
    "gateway": "gw-m2vkzbpixm7mo****"
  },
  "containers": [
    {
      "image": "registry-vpc.cn-shanghai.aliyuncs.com/xxx/yyy:zzz",
      "prepare": {
        "pythonRequirements": [
          "numpy==1.16.4",
          "absl-py==0.11.0"
        ]
      },
      "command": "python app.py",
      "port": 8000
    }
  ],
  "dockerAuth": "dGVzdGNhbzoxM*******"
}
```

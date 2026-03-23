Use the eascmd Command Line Interface (CLI) to manage your Elastic Algorithm Service (EAS) services. You can create, update, and view services, and manage stress testing tasks. This document describes each command with usage instructions and examples to help you use eascmd effectively.

## Operation commands

The following table summarizes the commands available in the eascmd CLI for managing your services.

**Note**

The executable name for running commands may vary based on your client file.

**Type**

**Operation**

**Description**

Service-related

-   [Create a service](#section-mo1-ne3-yly)
    
-   [Modify service configurations](#section-tmv-2c4-jvq)
    
-   [Modify a service](#section-7pr-4c6-xsy)
    
-   [Add a version for a service](#section-cvh-ept-qrt)
    
-   [Stop a service](#title-2oa-w7y-iul)
    
-   [Start a service](#title-779-p3s-bq9)
    
-   [Delete a service](#section-ck2-h7q-3x8)
    
-   [Switch between service versions](#section-dy8-cjp-yj1)
    
-   [View the service list](#section-ivi-473-4jh)
    
-   [View the details of a service](#section-ip3-6ug-b25)
    
-   [View service process](#section-dl3-b4r-m4e)
    
-   [Create a stress testing task](#section-z66-8li-1f7)
    
-   [Manage stress testing tasks](#section-dnj-clo-tbc)
    
-   [Delete or restart one or more instances](#section-a0i-5sp-mli)
    
-   [Initialize the Python SDK environment](#section-vtp-yjs-jw5)
    
-   [Compress the complete environment and code](#section-b1l-p00-vui)
    

Use the eascmd CLI in either of the following ways:

-   Download the EASCMD client. For more information, see [Download the EASCMD client and complete user authentication](/help/en/pai/developer-reference/download-the-eascmd-client-and-complete-user-authentication#task-2006065).
    
-   Use the Terminal interface of Data Science Workshop (DSW). The EASCMD command-line tool is built in DSW.
    

Resource group-related

-   [View resource groups](#section-1w8-mfd-yx0)
    
-   [View the details of a resource group](#section-v05-x81-bu7)
    
-   [View the instances in a resource group](#section-yox-a51-imc)
    
-   [Enable direct connection for a resource group](#section-10w-iag-atq)
    

## Create a service

-   Description
    
    You can run the `create` command to create a service. When you create a service, you must provide the HTTP or OSS URL of a resource, which can be a model or processor package. You can upload the resource to Object Storage Service (OSS) and obtain the OSS URL of the uploaded package.
    
-   Syntax
    
    ```
    <eascmd64> create <service_desc_json>
    ```
    
-   Parameters
    
    service\_desc\_json: A JSON file that describes the service, including the model storage location and resource specifications. Example file content:
    
    ```
    {
      "name": "mnist_saved_model_example",
      "model_path": "http://eas-data.oss-cn-shanghai.aliyuncs.com/models%2Fmnist_saved_model.tar.gz",
      "processor": "tensorflow_cpu_1.12",
      "metadata": {
        "instance": 1,
        "cpu": 1
      }
    }
    ```
    
    For more information about the service parameters in the JSON file, see [JSON deployment](/help/en/pai/user-guide/parameters-of-model-services#concept-2246411).
    
-   Example (In this example, the JSON file that describes the service information is named pmml.json.)
    
    ```
    <eascmd64> create pmml.json
    ```
    
    The system returns a response similar to the following.
    
    ```
    [RequestId]: 1651567F-8F8D-4A2B-933D-F8D3E2DD****
    +-------------------+----------------------------------------------------------------------------+
    | Intranet Endpoint | http://pai-eas-vpc.cn-shanghai.aliyuncs.com/api/predict/savedmodel_example |
    |             Token | YjQxZDYzZTBiZTZjMzQ5ZmE0MzczZjIxMGZiNzZmMDBkY2VjMDg4****                   |
    +-------------------+----------------------------------------------------------------------------+
    [OK] Creating api gateway
    [OK] Building image [registry-vpc.cn-shanghai.aliyuncs.com/eas/savedmodel_example_cn-shanghai:v0.0.1-20190224001315]
    [OK] Pushing image [registry-vpc.cn-shanghai.aliyuncs.com/eas/savedmodel_example_cn-shanghai:v0.0.1-20190224001315]
    [OK] Waiting [Total: 1, Pending: 1, Running: 0]
    [OK] Waiting [Total: 1, Pending: 1, Running: 0]
    [OK] Service is running
    ```
    

## Modify service configurations

-   Description
    
    Use the `-D` option with the `modify` command to change metadata, such as the `Instance` count and `CPU` allocation.
    
-   Syntax
    
    ```
    <eascmd64> modify <service_name> -Dmetadata.<attr_name>=<attr_value>
    ```
    
    You can configure multiple parameters at the same time. See the example for details.
    
-   Parameters
    
    -   <service\_name>: the name of the service.
        
    -   <attr\_name>: the name of the parameter.
        
    -   <attr\_value>: the value of the parameter.
        
-   Example
    
    Sets the number of instances to 10 and allocates 5 CPU cores for each instance.
    
    ```
    <eascmd64> modify service_test -Dmetadata.instance=10 -Dmetadata.cpu=5
    ```
    
    To scale a service, modify only its metadata.instance parameter. If the specified number of instances is greater than the current number, the system starts new instances to meet the requirement without affecting existing ones. If the specified number is less than the current number, the system stops some instances to meet the requirement without affecting the others.
    
    **Note**
    
    Unlike a full update, an update that modifies only the `Instance` count does not trigger a rolling update of the service.
    

## Modify a service

-   Description
    
    Use the `modify` command to change the configuration of a deployed service.
    
-   Syntax
    
    ```
    <eascmd64> modify <service_name> -s <service_desc_json>
    ```
    
-   Parameters
    
    -   <service\_name>: the name of the service.
        
    -   <service\_desc\_json>: the service description file.
        
        **Note**
        
        In the service description file, include only the parameters you need to modify. If you include the model file and processor information, the system treats this as adding a new service version.
        

## Add a version for a service

-   Description
    
    Use the `modify` command to add a new version to a deployed service.
    
-   Syntax
    
    ```
    <eascmd64> modify <service_name> -s <service_desc_json>
    ```
    
-   Parameters
    
    -   <service\_name>: the name of the service.
        
    -   <service\_desc\_json>: the description file of the service.
        
        **Note**
        
        You must specify the model file and processor information in the service description file.
        

## Stop a service

-   Description
    
    Use the `stop` command to stop a running service.
    
-   Syntax
    
    ```
    <eascmd64> stop <service_name>
    ```
    
-   Parameters
    
    <service\_name> is the name of the service to stop.
    

## Start a service

-   Description
    
    Use the `start` command to restart a stopped service.
    
-   Syntax
    
    ```
    <eascmd64> start <service_name>
    ```
    
-   Parameters
    
    <service\_name> is the name of the service to start.
    

## Delete a service

-   Description
    
    Use the `delete` command to delete a service. You can only delete services in the current region.
    
-   Syntax
    
    ```
    <eascmd64> delete <service_name>
    ```
    
-   Parameters
    
    `<service_name>` is the name of the service to delete.
    
-   Example
    
    To delete the service named `savedmodel_example`:
    
    1.  Run the delete command.
        
        ```
        <eascmd64> delete savedmodel_example
        ```
        
        The system returns a confirmation prompt.
        
        ```
        Are you sure to delete the service [savedmodel_example] in [cn-shanghai]? [Y/n]
        ```
        
    2.  Enter `Y`. The system returns a response similar to the following.
        
        ```
        [RequestId]: 1651567F-8F8D-4A2B-933D-F8D3E2DD****
        [OK] Service [savedmodel_example] in region [cn-shanghai] is terminating
        [OK] Service is terminating
        [OK] Service is terminating
        [OK] Service was deleted successfully
        ```
        
    

## Switch between service versions

-   Description
    
    Use the `desc` command to view a service's available versions. You can then use the `version` command to switch the service to a different version.
    
-   Syntax
    
    ```
    <eascmd64> version <service_name> <version_id>
    ```
    
-   Parameters
    
    -   <service\_name>: The name of the service.
        
    -   <version\_id>: The ID of the version to which you want to switch.
        

## View the service list

-   Description
    
    Use the `list` (or `ls`) command to list the services deployed by the current user.
    
-   Syntax
    
    ```
    <eascmd64> ls
    ```
    
-   Parameters
    
    N/A
    
-   Example
    
    ```
    <eascmd64> ls
    ```
    
    The system returns a response similar to the following.
    
    ```
    [RequestId]: 83945D4E-ED3E-4D35-A989-831E36BB****
    +---------------------------+-------------+----------+---------------------+---------------------+---------+--------+----------------------------------------+
    |        SERVICENAME        |   REGION    | INSTANCE |     CREATETIME      |     UPDATETIME      | STATUS  | WEIGHT |              SERVICEPATH               |
    +---------------------------+-------------+----------+---------------------+---------------------+---------+--------+----------------------------------------+
    | mnist_saved_model_example | cn-shanghai |        1 | 2019-02-21 16:35:41 | 2019-02-21 16:35:41 | Running |      0 | /api/predict/mnist_saved_model_example |
    +---------------------------+-------------+----------+---------------------+---------------------+---------+--------+----------------------------------------+
    ```
    

## View the details of a service

-   Description
    
    Use the `desc` command to view detailed information about a deployed service.
    
-   Syntax
    
    ```
    <eascmd64> desc <service_name>
    ```
    
-   Parameters
    
    <service\_name> is the name of the service.
    
-   Example
    
    ```
    <eascmd64> desc mnist_saved_model_example
    ```
    
    The system returns a response similar to the following.
    
    ```
    +---------------------+--------------------------------------------------------------------------------------------------------------+
    |              Status | Running                                                                                                      |
    |         ServiceName | mnist_saved_model_example                                                                                    |
    |              Region | cn-shanghai                                                                                                  |
    |          CreateTime | 2019-02-21 16:35:41                                                                                          |
    |          UpdateTime | 2019-02-21 16:35:41                                                                                          |
    |         AccessToken |                                                                                                              |
    |        PrivateToken | ZWNjMTNkNDExMmExNjZkYTM4YWQ5YTY0YmFjNjk3YWYzZTRjM2Y2****                                                     |
    |       TotalInstance | 1                                                                                                            |
    |     RunningInstance | 1                                                                                                            |
    |     PendingInstance | 0                                                                                                            |
    |                 CPU | 1                                                                                                            |
    |                 GPU | 0                                                                                                            |
    |              Memory | 1000M                                                                                                        |
    |               Image | registry-vpc.cn-shanghai.aliyuncs.com/eas/mnist_saved_model_example_cn-shanghai:v0.0.1-20190221163541        |
    |              Weight | 0                                                                                                            |
    |       LatestVersion | 1                                                                                                            |
    |      CurrentVersion | 1                                                                                                            |
    |             Message | Service start successfully                                                                                   |
    |       APIGatewayUrl | 1c3b37ea83c047efa0dc6df0cacb****-cn-shanghai.alicloudapi.com/EAPI_182848887922****_mnist_saved_model_example |
    |    APIGatewayAppKey | 2564****                                                                                                     |
    | APIGatewayAppSecret | 12562a7b8858bbba2c2e9c4517ff****                                                                             |
    |    IntranetEndpoint | http://pai-eas-vpc.cn-shanghai.aliyuncs.com/api/predict/mnist_saved_model_example                            |
    |       ServiceConfig | {                                                                                                            |
    |                     |   "generate_token": "false",                                                                                 |
    |                     |   "metadata": {                                                                                              |
    |                     |     "cpu": 1,                                                                                                |
    |                     |     "instance": 1,                                                                                           |                                                                                  |
    |                     |     "region": "cn-shanghai"                                                                                  |
    |                     |   },                                                                                                         |
    |                     |   "model_path":                                                                                              |
    |                     | "http://eas-data.oss-cn-shanghai.aliyuncs.com/models%2Fmnist_saved_model.tar.gz",                            |
    |                     |   "name":                                                                                                    |
    |                     | "mnist_saved_model_example",                                                                                 |
    |                     |   "processor":                                                                                               |
    |                     | "tensorflow_cpu"                                                                                             |
    |                     | }                                                                                                            |
    +---------------------+--------------------------------------------------------------------------------------------------------------+
    ```
    

## View service process

-   Description
    
    Use the `showworkers` (or its alias `w`) command to view the status of the processes running for a service.
    
-   Syntax
    
    ```
    <eascmd64> w <service_name>
    ```
    
-   Parameters
    
    `<service_name>` is the name of the service.
    
-   Example
    
    ```
    <eascmd64> w mnist_saved_model_example
    ```
    
    The system returns a response similar to the following.
    
    ```
    [RequestId]: B23BA8AC-CDEC-5704-935F-3CEC6606****
    +-------------------------------+-------------+--------------+---------------------+----------+---------+-------+--------+----------------------------------------------------------------------------------------------------------+
    |         INSTANCENAME          |   INNERIP   |    HOSTIP    |       STARTAT       | RESTARTS | STATUS  | READY | REASON |                                                LASTSTATE                                                 |
    +-------------------------------+-------------+--------------+---------------------+----------+---------+-------+--------+----------------------------------------------------------------------------------------------------------+
    | network-test-69cf5dd6c7-5**** | 10.240.XX.XX | 10.224.XX.XX | 2021-09-27 15:04:22 |        1 | Running | [1/1] |        | {"exitCode":247,"finishedAt":"2021-09-27T07:04:21Z","reason":"Error","startedAt":"2021-09-27T05:36:56Z"} |
    +-------------------------------+-------------+--------------+---------------------+----------+---------+-------+--------+----------------------------------------------------------------------------------------------------------+
    ```
    
    The following table describes the parameters in the response.
    
    **Parameter**
    
    **Description**
    
    INSTANCENAME
    
    The name of the service instance.
    
    INNERIP
    
    The internal IP address of the instance.
    
    HOSTIP
    
    The IP address of the node where the instance is located.
    
    STARTAT
    
    The start time of the instance.
    
    RESTARTS
    
    The number of times the instance has restarted. An instance automatically restarts after an Out of Memory (OOM) event or a code crash, and each restart increments this value.
    
    STATUS
    
    The current status of the instance. `Pending` indicates that the instance is waiting for resource scheduling. If the instance remains in the `Pending` state for an extended period, this indicates that resources are insufficient and the instance cannot be scheduled.
    
    READY
    
    The status of the containers in the instance, in the format `[Number of ready containers/Total number of containers]`.
    
    A `[0/1]` status indicates that the container is starting or has failed the health check. In this case, no traffic is routed to this instance.
    
    If all instances in a service have a `[0/1]` ready status, the entire service is unavailable, and requests to the service will return a `5xx`
    
    error.
    
    REASON
    
    A brief description of the instance status.
    
    LASTSTATE
    
    The state of the instance at its last restart. If the `reason` in `LASTSTATE` is `OOMKilled`, it indicates that the instance experienced an OOM event.
    

## Create a stress testing task

-   Description
    
    Use the `bench create` command to create a stress testing task for a deployed service.
    
-   Syntax
    
    ```
    <eascmd64> bench create <bench_desc_json>
    ```
    
-   Parameters
    
    `bench_desc_json` is a JSON file that describes the stress testing task. The following is an example of the file content.
    
    ```
    {
        "service": {
            "serviceName": "servicename_example"
        },
        "data": {
            "content": "W1sxLDAsMCwwLDEsMSwwLDEsMCwxLDEsMCwwLDEsMCwxLDAsMSwwLDAsMSwxLDEsMCwxLDEsMCwwLDAsMSwxLDEsMCwxLDEsMSwxLDAsMSwxLDEsMCwxLDAsMCwwLDEsMSwwLDAsMCwxLDAsMSwwLDEsMCwwLDEsMCwwLDEsMCwxLDAsMCwxLDAsMCwwLDAsMSwwLDEsMCwxLDAsMCwxLDEsMSwwLDAsMSwwLDAsMCwwLDEsMSwxLDAsMSwxLDAsMCwxLDAsMSwwLDEsMSwxLDEsMCwxLDAsMCwxLDEsMSwxLDAsMCwwLDEsMSwwXV0K"
        }
    }
                    
    ```
    
    You can use `path` to specify multiple OSS files as stress testing data. The following is a configuration example. To configure test data entries in bulk, you can package the request data into a zip file and set the `path` to `oss://XX.zip`.
    
    ```
    {
        "service": {
            "serviceName": "servicename_example"
        },
        "data": {
            "path": "oss://examplebucket/test1.bin,oss://examplebucket/test2.bin"
        }
    }
                    
    ```
    
    For a detailed description of the parameters in the JSON file, see [Create a stress testing task](/help/en/pai/user-guide/automatic-service-stress-testing#section-10k-2rp-7o0).
    
-   Example
    
    Assume the JSON file that describes the stress testing task is `bench.json`.
    
    ```
    <eascmd64> bench create bench.json
    ```
    
    The system returns a response similar to the following.
    
    ```
    [RequestId]: DE240637-4976-59AF-A28C-BAA55C0A****
    [OK] Task [benchmark-servicename-example-b514] is creating
    [OK] [Agnet: 0/1]: Succeed to start benchmark master
    [OK] [Agnet: 0/1]: Succeed to start benchmark master
    [OK] [Agnet: 1/1]: Benchmark task is Running
    [OK] Benchmark task is Running
    [OK] Click the link http://127.0.0.1:18222/eas-benchmark/statsview to observe realtime visualization details, you can turn it off with CTRL+C.
    Turning off will not interrupt the benchmark test task, and you can reopen it by the visualize command:
    eascmd -c [config_file] bench visualize benchmark-servicename-example-b514
    ```
    

## Manage stress testing tasks

### View stress testing tasks

-   Description
    
    Use the `bench list` (or its alias `bench ls`) command to view the list of stress testing tasks created by the current user.
    
-   Syntax
    
    ```
    <eascmd64> bench ls
    ```
    
-   Parameters
    
    N/A
    
-   Example
    
    ```
    <eascmd64> bench ls
    ```
    
    The system returns a response similar to the following.
    
    ```
    [RequestId]: 7F953F8E-8897-5785-808A-CA648302****
    +-------------------------+--------------------------+-------------+----------------+---------+---------------------+
    |        TASKNAME         |          TASKID          |   REGION    | AVAILABLEAGENT | STATUS  |     CREATETIME      |
    +-------------------------+--------------------------+-------------+----------------+---------+---------------------+
    | benchmark-xgb-test-7846 | eas-b-ql470xog6qeh25**** | cn-shanghai |              0 | Stopped | 2022-06-17 17:58:01 |
    | benchmark-xgb-test-b514 | eas-b-bdnzvwq0z0h3xq**** | cn-shanghai |              2 | Running | 2022-06-20 12:18:54 |
    +-------------------------+--------------------------+-------------+----------------+---------+---------------------+
    ```
    

### View the details of a stress testing task

-   Description
    
    Use the `bench desc` command to view detailed information about a specific stress testing task.
    
-   Syntax
    
    ```
    <eascmd64> bench desc <benchmark_task_name>
    ```
    
-   Parameters
    
    `benchmark_task_name` is the name of the stress testing task.
    
-   Example
    
    ```
    <eascmd64> bench desc benchmark-demo-test-c7eb
    ```
    
    The system returns a response similar to the following.
    
    ```
    +----------------+------------------------------------------------------------------------------+
    |     TaskName   | benchmark-xgb-test-b514                                                      |
    |     TaskId     | eas-b-bdnzvwq0z0h3xq****                                                     |
    |    ServiceName | xgb_test                                                                     |
    |         Region | cn-shanghai                                                                  |
    |   DesiredAgent | 2                                                                            |
    | AvailableAgent | 2                                                                            |
    |         Status | Running                                                                      |
    |        Message | Benchmark task is running                                                    |
    |     CreateTime | 2021-10-20 12:38:35                                                          |
    |     UpdateTime | 2021-10-20 12:38:45                                                          |
    |         Config | {                                                                            |
    |                |   "base": {                                                                  |
    |                |     "agentCount": 2,                                                         |
    |                |     "concurrency": 40,                                                       |
    |                |     "duration": 1200,                                                        |
    |                |     "requestCount":                                                          |
    |                | 922337203685477****,                                                         |
    |                |   },                                                                         |
    |                |  ...                                                                         |
    |                | }                                                                            |
    +----------------+------------------------------------------------------------------------------+
    ```
    

### Enable real-time visualization for a stress testing task

-   Description
    
    Use the `bench visualize` command to enable real-time visualization for a stress testing task. This command starts a web server on `127.0.0.1` that displays a real-time monitoring page.
    
-   Syntax
    
    ```
    <eascmd64> bench visualize <benchmark_task_name>
    ```
    
-   Parameters
    
    `benchmark_task_name` is the name of the stress testing task.
    
-   Example
    
    ```
    <eascmd64> bench visualize benchmark-xgb-test-b514
    ```
    
    The system returns a response similar to the following.
    
    ```
    [OK] Click the link http://127.0.0.1:18734/eas-benchmark/statsview to observe realtime visualization details, you can turn it off with CTRL+C.
    Turning off will not interrupt the benchmark test task, and you can reopen it by the visualize command:
    eascmd -c [config_file] bench visualize benchmark-xgb-test-b514
    ```
    
    Open the link `http://127.0.0.1:18734/eas-benchmark/statsview` in your browser to view the real-time results.
    

### Stop a stress testing task

-   Description
    
    Use the `bench stop` command to stop a running stress testing task.
    
-   Syntax
    
    ```
    <eascmd64> bench stop <benchmark_task_name>
    ```
    
-   Parameters
    
    `benchmark_task_name` is the name of the stress testing task.
    
-   Example
    
    ```
    <eascmd64> bench stop benchmark-xgb-test-b514
    ```
    
    The system returns a response similar to the following.
    
    ```
    Are you sure to stop the benchmark task [benchmark-xgb-test-b514] in [cn-shanghai]? [Y/n]
    [OK] Task [benchmark-xgb-test-b514] is stopping
    [OK] [Agnet: 0/1]: Benchmark task is Running
    [OK] [Agnet: 0/1]: Benchmark task is Stopped
    [OK] Benchmark task is stopped
    ```
    

### Obtain the report of a stress testing task.

-   Description
    
    Use the `bench report` command to obtain the report of a stress testing task.
    
    **Note**
    
    A report is generated and saved to OSS after the task's status changes to `Stopped`.
    
-   Syntax
    
    ```
    <eascmd64>  bench report <benchmark_task_name>
    ```
    
-   Parameters
    
    `benchmark_task_name` is the name of the stress testing task.
    
-   Example
    
    ```
    <eascmd64> bench report benchmark-xgb-test-b514
    ```
    
    The system returns a response similar to the following.
    
    ```
    [OK] Benchmark task benchmark-demo-test-c7eb report url: http://eas-benchmark.oss-cn-chengdu.aliyuncs.com/summary/benchmark-demo-test-c7eb-10004.html
    ```
    
    Open the URL in your browser to view the stress test report.
    

### Start a stress testing task

-   Description
    
    Use the `bench start` command to start a stopped stress testing task.
    
-   Syntax
    
    ```
    <eascmd64> bench start <benchmark_task_name>
    ```
    
-   Parameters
    
    `benchmark_task_name` is the name of the stress testing task.
    
-   Example
    
    ```
    <eascmd64> bench start benchmark-xgb-test-b514
    ```
    
    The system returns a response similar to the following.
    
    ```
    Are you sure to start the benchmark task [benchmark-xgb-test-b514] in [cn-shanghai]? [Y/n]
    [OK] Task [benchmark-xgb-test-b514] is starting
    [OK] [Agnet: 0/1]: Succeed to start benchmark master
    [OK] [Agnet: 1/1]: Benchmark task is Running
    [OK] Benchmark task is Running
    [OK] Click the link http://127.0.0.1:18947/eas-benchmark/statsview to observe realtime visualization details, you can turn it off with CTRL+C.
    Turning off will not interrupt the benchmark test task, and you can reopen it by the visualize command:
    eascmd -c [config_file] bench visualize benchmark-xgb-test-b514
    ```
    

### Dynamically modify the number of agent workers and concurrency

-   Description
    
    When the stress testing mode is `manual`, use the `bench update` command to dynamically modify the number of agent workers and the level of concurrency.
    
-   Syntax
    
    ```
    <eascmd64> bench update <benchmark_task_name> -Doptional.concurrency=<attr_value> -Doptional.agentCount=<attr_value>
    ```
    
-   Parameters
    
    -   `benchmark_task_name`: The name of the stress testing task.
        
    -   `<attr_value>`: The specific value to set.
        
-   Example
    
    ```
    <eascmd64> bench update benchmark-demo-b99c -Doptional.concurrency=2 -Doptional.agentCount=1
    ```
    
    The system returns a response similar to the following.
    
    ```
    [RequestId]: 9920C672-4D41-5CC4-8EC0-C690F76E****
    [OK] Running [TaskName: benchmark-demo-b99c, DesiredAgent:1, AvailableAgent: 1, Message: Benchmark task is Updating]
    [OK] Benchmark task benchmark-demo-b99c was updated successfully
    ```
    

### Delete a stress testing task

-   Description
    
    Use the `bench delete` command to manually delete a stress testing task. Deleting a task also deletes its corresponding test report from OSS.
    
-   Syntax
    
    ```
    <eascmd64> bench delete <benchmark_task_name>
    ```
    
-   Parameters
    
    `benchmark_task_name` is the name of the stress testing task.
    
-   Example
    
    ```
    <eascmd64> bench delete benchmark-xgb-test-b514
    ```
    
    The system returns a response similar to the following.
    
    ```
    Are you sure to delete the benchmark task [benchmark-xgb-test-b514] in [cn-shanghai]? [Y/n]
    [OK] Benchmark task benchmark-xgb-test-b514 is Deleting
    [OK] Benchmark task was deleted successfully
    ```
    

## Delete or restart one or more instances

-   Description
    
    Use the `deleteworkers` (or its alias `dw`) command to delete one or more instances of a service. After deletion, the system automatically starts new instances to replace them. This command effectively restarts the specified instances.
    
-   Syntax
    
    ```
    <eascmd64> dw <service_name> <instance_names>
    ```
    
-   Parameters
    
    -   `<service_name>`: The name of the service.
        
    -   `<instance_names>`: The names of the service instances to delete, separated by commas (,).
        
-   Example
    
    ```
    <eascmd64> dw mnist_saved_model_example mnist-saved-model-example-69cf5dd6c7-5****
    ```
    
    The system returns a confirmation prompt.
    
    ```
    Are you sure to delete the instances [mnist-saved-model-example-69cf5dd6c7-5****] of service [mnist_saved_model_example] in [cn-shenzhen]? [Y/n]
    ```
    
    After you enter `Y`, the system returns a response similar to the following.
    
    ```
    [RequestId]: 564C8F56-D97A-555E-9E0B-22BE140A****
    [OK] Instance(s) [mnist-saved-model-example-69cf5dd6c7-5****] for service [mnist_saved_model_example] in region [cn-shenzhen] was deleted successfully
    ```
    

## Initialize the Python SDK environment

**Note**

This feature is supported only on Linux.

-   Description
    
    Use the `pysdk init` command to initialize the Python Software Development Kit (SDK) environment.
    
-   Syntax
    
    ```
    <eascmd64> pysdk init ./pysdk_demo
    ```
    
-   Parameters
    
    N/A
    
-   Example
    
    1.  Run the initialization command:
        
        ```
        <eascmd64> pysdk init ./pysdk_demo
        ```
        
        The system returns a prompt.
        
        ```
        [PYSDK] Please choose your python version [enter for 3.6]:
        ```
        
    2.  Enter `3.6`. The system returns a response similar to the following:
        
        ```
        Collecting package metadata (current_repodata.json): done
        Solving environment: done
        ...
        [PYSDK] Installing python processor example app.py
        [PYSDK] Installing python service example app.json
        ```
        

## Compress the complete environment and code

**Note**

This feature is supported only on Linux.

-   Description
    
    Use the `pysdk pack` command to package the complete environment.
    
-   Syntax
    
    ```
    <eascmd64> pysdk pack ./<demo>
    ```
    
-   Parameters
    
    `<demo>`: The directory where the environment or code is located.
    
-   Example
    
    Assume the directory to be packaged is `demo`.
    
    ```
    <eascmd64> pysdk pack ./demo
    ```
    
    The system returns a response similar to the following.
    
    ```
    [PYSDK] Creating package: /mnt/workspace/demo.tar.gz
    ```
    

## View resource groups

-   Description
    
    Use the `resource list` (or its alias `resource ls`) command to view the list of resource groups under the current account.
    
-   Syntax
    
    ```
    <eascmd64> resource ls
    ```
    
-   Parameters
    
    N/A
    
-   Example
    
    ```
    <eascmd64> resource ls
    ```
    
    The system returns a response similar to the following.
    
    ```
    +--------------------------+-------------+---------------+----------+----------+------------------+---------------------+---------------+
    |       RESOURCENAME       |  CLUSTERID  | INSTANCECOUNT | GPUCOUNT | CPUCOUNT |     OWNERUID     |     CREATETIME      |    STATUS     |
    +--------------------------+-------------+---------------+----------+----------+------------------+---------------------+---------------+
    | eas-r-lzo32vrdbtukr7te3i | cn-shanghai |             1 |        0 |       16 | 182848887922**** | 2020-03-18 13:09:24 | ResourceReady |
    +--------------------------+-------------+---------------+----------+----------+------------------+---------------------+---------------+
    ```
    

## View the details of a resource group

-   Description
    
    Use the `resource desc` command to view detailed information about a resource group.
    
-   Syntax
    
    ```
    <eascmd64> resource desc <resource_id>
    ```
    
-   Parameters
    
    `<resource_id>` is the ID of the resource group to view. This corresponds to the RESOURCENAME field in the output of the `resource list(ls)` command.
    
-   Example
    
    View the details of the resource group with the ID `eas-r-lzo32vrdbtukr7te3i`.
    
    ```
    <eascmd64> -c ~/.eas/shanghai2.conf resource desc eas-r-lzo32vrdbtukr7te3i
    ```
    
    The `-c ~/.eas/shanghai2.conf` parameter specifies a different configuration file instead of the default `~/.eas/config`. The system returns a response similar to the following.
    
    ```
    +---------+-----------------+----------------------------------------------------------+
    |   Basic | ResourceName    | eas-r-lzo32vrdbtukr7te3i                                 |
    |         | Region          | cn-shanghai                                              |
    |         | CpuCount        | 16                                                       |
    |         | GpuCount        | 0                                                        |
    |         | instanceCount   | 1                                                        |
    |         | CreateTime      | 2020-03-18 13:09:24                                      |
    |         | LastStatus      | ResourceReady                                            |
    |         | Message         | Resource is ready                                        |
    |         | RoleArn         | acs:ram::xxx:role/AliyunPAIAccessingENIRole              |
    | Network | VpcId           | vpc-uf6s9pv47nu03srne****                                |
    |         | VSwitchId       | vsw-uf6voq53e893k56ws****                                |
    |         | SecurityGroupId | sg-uf6c5twkfar8l06c****                                  |
    |         | DestinationCIDR |                                                          |
    |         | AuxVSwitchList  | []                                                       |
    +---------+-----------------+----------------------------------------------------------+
    ```
    

## View the instances in a resource group

-   Description
    
    Use the `resource list_instance` (or its alias `resource li`) command to view the list of instances in a resource group and the resource usage of each instance.
    
-   Syntax
    
    ```
    <eascmd64> resource list_instance <resource_id>
    ```
    
-   Parameters
    
    `<resource_id>` is the ID of the resource group to view. This corresponds to the RESOURCENAME field in the output of the `resource list` (`ls`) command.
    
-   Example
    
    ```
    <eascmd64> resource li eas-r-lzo32vrdbtukr7te3i
    ```
    
    The system returns a response similar to the following.
    
    ```
    +------------------------------------+--------------+--------+----------------+----------------+-------------------+---------------------+----------------+------------+
    |            INSTANCENAME            |  INSTANCEIP  | STATUS | TOTAL/USED CPU | TOTAL/USED GPU | TOTAL/USED MEMORY |     CREATETIME      |  INSTANCETYPE  | CHARGETYPE |
    +------------------------------------+--------------+--------+----------------+----------------+-------------------+---------------------+----------------+------------+
    | cn-shanghai.i-uf6dj71ir6mh3gjmaz3a | 10.224.XX.XX | Ready  | 16/6           | 0/0            | 62240M/4200M      | 2020-03-18 13:09:34 | ecs.g6.4xlarge | PostPaid   |
    +------------------------------------+--------------+--------+----------------+----------------+-------------------+---------------------+----------------+------------+
    ```
    

## Enable direct connection for a resource group

-   Description
    
    Use the `resource network` command to connect a resource group to your Virtual Private Cloud (VPC). This allows you to call EAS services through a direct connection with a soft load balancer within your VPC. It also enables EAS Processors to access private resources in your VPC, such as RDS and Redis.
    
-   Syntax
    
    ```
    <eascmd64> resource network <resource_id> -s <network_cfg.json>
    ```
    
-   Parameters
    
    -   `<resource_id>`: The ID of the resource group to view. This corresponds to the RESOURCENAME field in the output of the `resource list` (`ls`) command
        
    -   <network\_cfg.json>: The network configuration file. The file format is as follows.
        
        ```
        {
          "Action":"create",
          "VSwitchId": "vsw-8vbsunr5bkcbyxh94****",
          "SecurityGroupId": "sg-8vbhwowdxzx5fjcx****",
          "VSwitchIdList": ["vsw-8xbsunr5abcbyqh93****", "vsw-8xbs1y7gu6cxbvqzw****"],
          "DestinationCIDR": "192.XX.XX.XX/16"
        }
        ```
        
        The following table describes the parameters.
        
        **Parameter**
        
        **Description**
        
        **Required**
        
        **Default value**
        
        Action
        
        The network configuration operation. Valid values are:
        
        -   `create`: Enables VPC configuration.
            
        -   `delete`: Disables VPC configuration. No other parameters are needed.
            
        
        Yes
        
        N/A
        
        VSwitchId
        
        The ID of the primary target vSwitch to join. EAS automatically creates an Elastic Network Interface (ENI) in this vSwitch. Deleting this ENI causes network connectivity issues.
        
        Yes
        
        N/A
        
        SecurityGroupId
        
        The ID of the security group to which the client ECS belongs.
        
        **Note**
        
        To avoid network connectivity issues, the client ECS must be in this security group.
        
        Yes
        
        N/A
        
        VSwitchIdList
        
        A list of secondary vSwitches to join. They must be in the same VPC as the primary vSwitch. The IP address ranges of these vSwitches are automatically added to the EAS route table.
        
        No
        
        Empty array (\[\])
        
        DestinationCIDR
        
        The target CIDR block of the client, which must be in the same VPC as the primary vSwitch. This CIDR block is automatically added to the EAS route table.
        
        No
        
        Empty string ("")
        
        **Note**
        
        VSwitchIdList and DestinationCIDR serve the same purpose: to connect the EAS cluster to your network segment. You can use VSwitchIdList to connect to multiple vSwitches. You can use the DestinationCIDR field to connect to a large network segment, such as an entire VPC. Do not use the 10.0.0.0/8, 10.224.0.0/16, or 10.240.0.0/16 network segments. Otherwise, network conflicts will occur. If you have other requirements, contact your business manager for assistance.
        

## **References**

-   To make prediction calls, use the HTTP URL that was generated when you created the service. The input and output formats for prediction services are defined by the Processor. For more information, see [Construct requests for services based on a universal processor](/help/en/pai/user-guide/construct-requests-for-services-based-on-a-universal-processor/#title-xue-e5h-vic) chapter.
    
-   For more information about how to create and manage services through the console, see [Custom deployment](/help/en/pai/user-guide/model-service-deployment-by-using-the-pai-console/).

Elastic Algorithm Service (EAS) provides stress testing for large language model (LLM) and general-purpose services. Stress testing evaluates service performance under load. This topic describes how to create and manage stress testing tasks.

## **Feature comparison**

EAS provides two types of stress testing: LLM service and general-purpose service. Select the appropriate type based on service type and testing goals.

**Item**

**LLM service stress testing**

**General-purpose service stress testing**

**Use cases**

Optimized for large language models to evaluate response speed and token generation performance.

Suitable for all HTTP/HTTPS-based services.

**Creation method**

PAI console only

**PAI console**: `auto` mode only  
**EASCMD client**: `auto`, `scan`, and `manual` modes  
  

**Key metrics**

Includes all general-purpose metrics plus LLM-specific metrics: **time to first token (TTFT)**, **time per output token (TPOT)**, and **tokens per second (TPS)**.

Includes metrics such as queries per second (QPS) and response time (RT).

## **Prerequisites**

-   **Deployed and available EAS service**
    
    -   At least one EAS online service deployed in the destination region and workspace.
        
    -   Service status is Running and can be invoked.
        
-   **Requirements for LLM service stress testing**
    
    -   Service uses an OpenAI API-compatible inference engine, such as vLLM, SGLang, LMDeploy, or BladeLLM.
        
    -   Service exposes the `/v1/completions` or `/v1/chat/completions` endpoint.
        
    -   Stress testing data includes the `"stream": true` field to enable streaming requests for collecting token-related metrics such as TTFT and TPOT.
        

## **Quick start**

This section demonstrates stress testing on a `Qwen3-8B` LLM service using both LLM-specific and general-purpose testing scenarios. For more information, see [Deploy large language models](/help/en/pai/user-guide/deploy-an-llm/).

**Note**

This is a quick start guide. Do not perform general-purpose stress testing on LLM services in production.

### **Step 1: Create a stress testing task**

1.  Log on to the [PAI console](https://pai.console.alibabacloud.com/?&s#/sw?path=/eas) and select the destination region at the top of the page.
    
2.  In the left-side navigation pane, click **Elastic Algorithm Service (EAS)**, select the target workspace, and go to the EAS page.
    
3.  Go to the **Benchmark Task** tab and click **Create Stress Testing Task**.
    
4.  Configure the following parameters. Keep default values for others. For more information about parameters, see [LLM configuration details](#7e29e1deeeew1) and [General-purpose scenario configuration details](#c2a031f923jy9).
    
    #### **LLM service stress testing**
    
    **Parameter**
    
    **Description**
    
    **Basic Information**
    
    **Service**
    
    Select the service to test and choose **LLM Service**.
    
    **Service Endpoint**
    
    Select `Chat`.
    
    **Stress Testing URL**
    
    After you select a service interface, the system automatically configures the service invocation URL.
    
    **Model ID**
    
    The model ID from ModelScope or Hugging Face. Enter `Qwen/Qwen3-8B`.
    
    **Stress Testing Configurations**
    
    **Data Type**
    
    Select **Public Dataset**.
    
    **Dataset**
    
    ShareGPT.
    
    **Test Mode**
    
    Select **Fixed Concurrency Test**.
    
    **Number of Request Samples**
    
    200.
    
    #### **General-purpose service stress testing**
    
    **Note**
    
    The stress testing console has a fixed request timeout of 20 seconds. If the stress testing report shows a 512 return code, this indicates a request timeout. The EAS stress testing console does not support custom timeout settings.
    
    **Parameter**
    
    **Description**
    
    **Basic Information**
    
    **Service**
    
    The service to test.
    
    **Stress Testing URL**
    
    Service invocation URL. Provide the full interface path, such as `/api/predict/<service_name>/v1/chat/comletions`.
    
    **Stress Testing Configurations**
    
    **Data Source**
    
    Select **Single Data Entry**.
    
    **Single Data Entry**
    
    Run `echo -n '{"model": "Qwen3-8B", "messages": [{"role": "user", "content": "Hello!"}], "max_tokens": 1024}' | base64` to get the Base64 encoding:
    
    ```
    eyJtb2RlbCI6ICJRd2VuMy04QiIsICJtZXNzYWdlcyI6IFt7InJvbGUiOiAidXNlciIsICJjb250ZW50IjogIkhlbGxvISJ9XSwgIm1heF90b2tlbnMiOiAxMDI0fQ==
    ```
    

### **Step 2: View stress testing details**

1.  **View real-time monitoring data**. When task **Status** is **Running**, click the task name to view real-time monitoring data.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9726934471/p936822.png)
    
2.  **View the stress testing report**. When task **Status** is **Completed**, click the task name to view the stress testing report.
    
    The stress testing report includes **Basic Information**, **Stress Testing Configurations**, **Test Result**, and **Test Monitoring**. For more information about monitoring metrics, see [Stress testing task monitoring metrics](#98ac3281c3dpd).
    

### Step **3: Manage stress testing tasks**

#### **Manage stress testing tasks in the console**

On the **Benchmark Task** tab, view the list of created tasks and perform operations such as **Enable**, **Clone**, **Copy Report**, and **Delete**.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5560501571/p977075.png)

#### **Manage stress testing tasks using the EASCMD client**

-   View the list of stress testing tasks
    
    Use the `bench list` command to view the list of stress testing tasks created by the current user. The following example shows the command format for Windows 64-bit.
    
    ```
    eascmdwin64.exe bench ls
    ```
    
    The following is a sample output.
    
    ```
    [RequestId]: 7F953F8E-8897-5785-808A-CA648302****
    +-------------------------+--------------------------+-------------+----------------+---------+---------------------+
    |        TASKNAME         |          TASKID          |   REGION    | AVAILABLEAGENT | STATUS  |     CREATETIME      |
    +-------------------------+--------------------------+-------------+----------------+---------+---------------------+
    | benchmark-***-test-**** | eas-b-ql470xog6qeh25**** | cn-shanghai |              0 | Stopped | 2022-06-17 17:58:01 |
    | benchmark-***-test-**** | eas-b-bdnzvwq0z0h3xq**** | cn-shanghai |              2 | Running | 2022-06-20 12:18:54 |
    +-------------------------+--------------------------+-------------+----------------+---------+---------------------+
    ```
    
-   View stress testing task details
    
    Use the `bench desc` command to view the details of a specific stress testing task. The following example shows the command format for Windows 64-bit.
    
    ```
    eascmdwin64.exe bench desc [benchmark_task_name]
    ```
    
    Replace \[benchmark\_task\_name\] with the name of the stress testing task.
    
    The following is a sample output.
    
    ```
    +----------------+------------------------------------------------------------------------------+
    |     TaskName   | benchmark-***-test-b514                                                      |
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
    
-   Enable real-time visualization for a stress testing task
    
    Use the `bench visualize` command to enable real-time visualization for a stress testing task. After this command is run, a real-time monitoring page provided by a web server is started at 127.0.0.1. The following example shows the command format for Windows 64-bit.
    
    ```
    eascmdwin64.exe bench visualize [benchmark_task_name]
    ```
    
    Replace \[benchmark\_task\_name\] with the name of the stress testing task.
    
    The following is a sample output.
    
    ```
    [OK] Click the link http://127.0.0.1:18734/eas-benchmark/statsview to observe realtime visualization details, you can turn it off with CTRL+C.
    Turning off will not interrupt the benchmark test task, and you can reopen it by the visualize command:
    eascmd -c [config_file] bench visualize benchmark-xgb-test-b514
    ```
    
    Open the link `http://127.0.0.1:18734/eas-benchmark/statsview` in a browser to view the real-time data.
    
-   Obtain the stress testing report
    
    When the stress testing task status is Stopped, the task is complete. The stress testing report is saved to OSS. You can use the `bench report` command to retrieve the report URL. The following example shows the command format for Windows 64-bit.
    
    ```
    eascmdwin64.exe  bench report [benchmark_task_name]
    ```
    
    Replace \[benchmark\_task\_name\] with the name of the stress testing task.
    
    The following is a sample output.
    
    ```
    [OK] Benchmark task benchmark-demo-test-c7eb report url: http://eas-benchmark.oss-cn-chengdu.aliyuncs.com/summary/benchmark-demo-test-c7eb-10004.html
    ```
    
    Open the link after url in a browser to view the stress testing report, as shown in the following figure.![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4326282171/p730134.png)
    
-   Dynamically modify the number of client replicas and concurrency
    
    When the stress testing mode is manual, you must use the `bench update` command to dynamically modify the number of client replicas and concurrency. The following example shows the command format for Windows 64-bit.
    
    ```
    eascmdwin64.exe bench update [benchmark_task_name] -Doptional.concurrency=<attr_value> -Doptional.agentCount=<attr_value>
    ```
    
    The <attr\_value> is the specific value. The following is a sample command:
    
    ```
    eascmdwin64.exe bench update benchmark-demo-b99c -Doptional.concurrency=2 -Doptional.agentCount=1
    ```
    
    The following is a sample output.
    
    ```
    [RequestId]: 9920C672-4D41-5CC4-8EC0-C690F76EB2BA
    [OK] Running [TaskName: benchmark-demo-b99c, DesiredAgent:1, AvailableAgent: 1, Message: Benchmark task is Updating]
    [OK] Benchmark task benchmark-demo-b99c was updated successfully
    ```
    
-   Stop a stress testing task
    
    Use the `bench stop` command to stop a running stress testing task. The following example shows the command format for Windows 64-bit.
    
    ```
    eascmdwin64.exe bench stop [benchmark_task_name]
    ```
    
    Replace \[benchmark\_task\_name\] with the name of the stress testing task.
    
    The following is a sample output.
    
    ```
    Are you sure to stop the benchmark task [benchmark-***-test-b514] in [cn-shanghai]? [Y/n]
    [OK] Task [benchmark-***-test-b514] is stopping
    [OK] [Agnet: 0/1]: Benchmark task is Running
    [OK] [Agnet: 0/1]: Benchmark task is Stopped
    [OK] Benchmark task is stopped
    ```
    
    If the real-time visualization feature is running when you stop the task, the system outputs the stress testing report to the terminal where the visualization command was run. You can also use the `bench report` command to obtain a more detailed HTML report with graphs.
    
-   Start a stress testing task
    
    Use the `bench start` command to start a stopped stress testing task. The following example shows the command format for Windows 64-bit.
    
    ```
    eascmdwin64.exe bench start [benchmark_task_name]
    ```
    
    **Note**
    
    The difference between this command and the `bench create` command is that when you restart a stress testing task with this command, a new round of stress testing starts based on the last updated configuration of the task.
    
    Replace \[benchmark\_task\_name\] with the name of the stress testing task.
    
    The following is an example of system output.
    
    ```
    Are you sure to start the benchmark task [benchmark-***-test-b514] in [cn-shanghai]? [Y/n]
    [OK] Task [benchmark-***-test-b514] is starting
    [OK] [Agnet: 0/1]: Succeed to start benchmark master
    [OK] [Agnet: 1/1]: Benchmark task is Running
    [OK] Benchmark task is Running
    [OK] Click the link http://127.0.0.1:18947/eas-benchmark/statsview to observe realtime visualization details, you can turn it off with CTRL+C.
    Turning off will not interrupt the benchmark test task, and you can reopen it by the visualize command:
    eascmd -c [config_file] bench visualize benchmark-xgb-test-b514
    ```
    
-   Delete a stress testing task
    
    After a stress testing task is complete, the VPC controller retains the task record based on its end status. The retention rules are described in the following table.
    
    **End status**
    
    **Retention period**
    
    Stopped
    
    48 hours.
    
    CreateFailed, UpdateFailed, Terminated, or Error
    
    10 minutes.
    
    The system automatically deletes the stress testing task after the retention period.
    
    You can also use the `bench delete` command to manually delete a stress testing task. The command format is as follows.
    
    ```
    eascmdwin64.exe bench delete [benchmark_task_name]
    ```
    
    Replace \[benchmark\_task\_name\] with the name of the stress testing task.
    
    The following is a sample output.
    
    ```
    Are you sure to delete the benchmark task [benchmark-***-test-b514] in [cn-shanghai]? [Y/n]
    [OK] Benchmark task benchmark-***-test-b514 is Deleting
    [OK] Benchmark task was deleted successfully
    ```
    

## **LLM configuration details**

### **Basic information**

**Parameter**

**Description**

**Service**

Select the service to test and choose **LLM Service**.

**Service Endpoint**

Only these two OpenAI interfaces are supported:

-   **Completions**: single-turn completion. Request interface is `/v1/completions`.
    
-   **Chat**: multi-turn conversation. Request interface is `/v1/chat/completions`.
    

**Stress Testing URL**

After selecting a service interface, the system automatically configures the service invocation URL.

**Model ID**

Model ID from ModelScope or Hugging Face (**Required**). Used to load the corresponding tokenizer for accurate token metric calculation during stress testing.

**Model Name**

Constructs the model parameter in the request (Optional). Has higher priority than the model ID. If left empty, the model ID is used as the request parameter.

### **Select a data type**

**Data Type**

**Description**

**Public Dataset**

Use the public [ShareGPT dataset](https://huggingface.co/datasets/RyokoAI/ShareGPT52K) for stress testing.

-   **Dataset**: Only **ShareGPT** is supported.
    
-   **Output Length**: Controls generated text length. If left empty, output is not truncated. Configure output length to test LLM service stability and performance under different loads.
    

**Custom Dataset**

Configure a custom dataset based on your specific scenario:

**Important**

Request data for LLM stress testing must include the `"stream": true` parameter to construct streaming requests for collecting token-related metrics such as TTFT and TPOT.

-   **Data Source**: Upload a custom data file for stress testing from these sources:
    
    -   **Single Data Entry**: Enter a single stress testing request data entry in the **Single Data** text box. Format must be a Base64-encoded string.
        
    -   **Data Address**: Enter the HTTP path of the test data source in the **Data Address** text box. Single files or ZIP files are supported. ZIP files are automatically decompressed after download.
        
    -   **OSS Object**: Obtain the stress testing file by configuring an Object Storage Service (OSS) path.
        
    -   **Upload Local File**: Follow the console instructions to upload a local stress testing file to an OSS path and obtain the file from OSS.
        
-   **Split File Data by Line**: Available when **Data Source** is set to **Data Address**, **OSS File**, or **Upload from Local**. If enabled, the uploaded stress testing file is split by line, and each line is used as a data entry. Otherwise, the entire file content is used as a single data entry.
    
    **Note**
    
    For an example of stress testing file configuration, see [benchmark\_demo.json](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/en-US/20250627/yujbyu/benchmark_demo.json). Each data entry in the file is an actual user request in JSON format. First use the [online debugging](/help/en/pai/user-guide/debug-a-service-online) feature to confirm that single request data entry format is correct.
    

**Simulation Data**

-   **Data Generation Mode**: Only **Uniform Distribution** is supported.
    
-   **Input Tokens**: The length range of input tokens. The minimum value is 10, and the maximum is 10000. The default value is 1024.
    
-   **Output Tokens**: The length range of output tokens. The minimum value is 10, and the maximum is 10000. The default value is 128.
    

### **Select a test mode**

Three test modes are supported:

-   **Fixed Concurrency Test**: Sets a fixed number of concurrent users. Suitable for testing system performance under a specific concurrency level.
    
-   **Fixed Request Rate Test**: Sets a fixed request rate. Suitable for testing system performance at a specific request rate.
    
-   **Extreme Throughput Test**: Sends all requests simultaneously to determine the maximum request rate (QPS) that the inference service can handle. Suitable for testing system limits.
    

In **Fixed Concurrency Test** and **Fixed Request Rate Test** modes, you can enable **Continuous Test**.

-   If you enable **Continuous Test**, the task runs until the stress testing duration ends, regardless of the **Number of Request Samples**.
    
-   If you disable **Continuous Test**, the task stops after completing the specified **Number of Request Samples** or reaching the **Maximum Duration (s)**.
    

Parameter settings for different test modes are as follows:

**Test Mode**

**Parameter Settings**

**Fixed Concurrency Test**

-   **Concurrency**: Simulates the number of concurrent users. Value range: \[1, 200\].
    
-   **Maximum Duration (s)**: Duration of the stress test in seconds. Default: 300. Minimum: 30.
    
-   **Number of Request Samples**: Not required when **Continuous Test** is enabled. Represents the number of requests sent during the test. Value range: \[100, 1000\].
    

**Fixed Request Rate Test**

Sets a fixed request rate. Suitable for testing system performance at a specific request rate.

-   **Request Rate**: Number of requests sent per second.
    
-   **Maximum Concurrency**: Number of concurrent users to simulate.
    
-   **Maximum Duration (s)**: The duration of the stress test in seconds. The default value is 300, and the minimum is 30.
    
-   **Number of Request Samples**: This does not need to be set when **Continuous Test** is enabled. It represents the number of requests sent during the test. The value must be in the range of \[100, 1000\].
    

**Extreme Throughput Test**

-   **Maximum Duration (s)**: The duration of the stress test in seconds. The default value is 300, and the minimum is 30.
    
-   **Number of Request Samples**: The number of requests sent during the test. The value must be in the range of \[100, 1000\].
    

### **More configurations**

**Parameter**

**Description**

**HTTP Header**

A key-value pair. For example:

-   Pass authentication information: `Authorization: EAS_TOKEN`
    
-   Set the data format of the request body: `Content-Type: application/json`
    

**Burstiness**

-   Default value: 1. Valid range: 0.1 to 200, with granularity of 0.1.
    
-   Burstiness controls the time distribution pattern of request generation and **only takes effect in fixed request rate mode**. Default value is 1, which follows a Poisson distribution. Other values follow a Gamma distribution. Smaller values indicate more bursty request streams; larger values indicate more uniform request streams.
    

**Random Seed**

Default value: 0. Integer data type. Value range: 0-4294967295 (2\*\*32-1).

**Ignore EOS**

Enabling **Ignore EOS** causes the model to ignore the End-of-Sequence (EOS) token when generating text, forcing generation until the preset maximum generation length is reached.

## **General-purpose scenario configuration details**

### **Console parameters**

**Parameter**

**Description**

**Basic Information**

**Service**

Name of the service to test.

**Stress Testing URL**

Service invocation URL.

**Stress Testing Configurations**

**Data Source**

Configure stress testing data using **Single Data Entry**, **Data Address**, **OSS Object**, or **Upload Local File**.

-   **Stress testing data format:** Depends on the model definition and processor implementation.
    
    **Note**
    
    **Single Data** must be a Base64-encoded string.
    
    -   For unstructured data such as voice, images, or text, directly upload the file as the stress testing request data.
        
    -   For structured data such as TFRequest, you need to construct the request data using the EAS software development kit (SDK) (for more information, see [Model service warm-up](/help/en/pai/user-guide/warm-up-model-services#task-2088179)) and upload the generated binary data as a file.
        
-   **Stress testing file:**
    
    -   Single files or ZIP files are supported. ZIP files are automatically decompressed after download.
        
    -   **File type**: Supports formats such as `.txt`, `.jpg`, `.bin`, and `.zip`, depending on the service's business requirements.
        

**Split File Data by Line**

Available when **Data Source** is set to **Data Address**, **OSS Object**, or **Upload Local File**.

If enabled, the uploaded stress testing file is split by line, and each line is used as a data entry. Otherwise, the entire file content is used as a single data entry.

**Maximum Duration (s)**

Duration of the stress test in seconds. Default: 300 seconds.

**Maximum QPS**

Maximum allowed QPS (requests per second). Default: 10000.

**Maximum Response Time (ms)**

Maximum allowed response time (RT) in milliseconds. If this threshold is exceeded, QPS is automatically adjusted until real-time RT meets expectations.

**HTTP Header**

Request header configuration in key-value pairs. For example:

-   Pass authentication information: `Authorization: EAS_TOKEN`
    
-   Set the data format of the request body: `Content-Type: application/json`
    

### **Create using the EASCMD client**

Use the `bench create` command to create a stress testing task. For more information about how to log on to the EASCMD client, see [Download and authenticate the client](/help/en/pai/developer-reference/download-the-eascmd-client-and-complete-user-authentication#task-2006065). After the task is created, you can use the returned URL to view real-time monitoring data. The following example shows the command format for Windows 64-bit.

```
eascmdwin64.exe bench create [bench_desc_json]
```

The bench\_desc\_json is a JSON file containing information about the stress testing task. The following are examples. For more information, see [JSON parameter descriptions](#8e73256658r04).

**Single stress test**

```
{
    "service": {
        "serviceName": "xgb_test"
    },
    "data": {
        "content": "W1sxLDAsMCwwLDEsMSwwLDEsMCwxLDEsMCwwLDEsMCwxLDAsMSwwLDAsMSwxLDEsMCwxLDEsMCwwLDAsMSwxLDEsMCwxLDEsMSwxLDAsMSwxLDEsMCwxLDAsMCwwLDEsMSwwLDAsMCwxLDAsMSwwLDEsMCwwLDEsMCwwLDEsMCwxLDAsMCwxLDAsMCwwLDAsMSwwLDEsMCwxLDAsMCwxLDEsMSwwLDAsMSwwLDAsMCwwLDEsMSwxLDAsMSwxLDAsMCwxLDAsMSwwLDEsMSwxLDEsMCwxLDAsMCwxLDEsMSwxLDAsMCwwLDEsMSwwXV0K"
    }
}
```

**OSS file test**

Use path to specify multiple OSS files as stress testing data.

To configure multiple stress testing data entries in a batch, you can package multiple request data files into a ZIP package and set the path to oss://XX.zip.

```
{
    "service": {
        "serviceName": "xgb_test"
    },
    "data": {
        "path": "oss://examplebucket/test1.bin,oss://examplebucket/test2.bin"
    }
}
```

The following is a sample output.

```
[RequestId]: DE240637-4976-59AF-A28C-BAA55C0A****
[OK] Task [benchmark-xgb-test-b514] is creating
[OK] [Agnet: 0/1]: Succeed to start benchmark master
[OK] [Agnet: 0/1]: Succeed to start benchmark master
[OK] [Agnet: 1/1]: Benchmark task is Running
[OK] Benchmark task is Running
[OK] Click the link http://127.0.0.1:18222/eas-benchmark/statsview to observe realtime visualization details, you can turn it off with CTRL+C.
Turning off will not interrupt the benchmark test task, and you can reopen it by the visualize command:
eascmd -c [config_file] bench visualize benchmark-xgb-test-b514
```

### **Stress testing modes**

General-purpose service stress testing supports the following three modes:

-   **auto mode**: Automatic pressure mode. The eas-benchmark VPC controller automatically creates Agent Workers for stress testing and sets an appropriate concurrency level. It uses an auto-optimization algorithm to find the service's maximum capacity.
    
-   **scan mode**: Periodic pressure mode. This mode dynamically increases pressure based on parameters you specify, such as the starting QPS (minQPS), maximum QPS (maxQPS), QPS growth interval (adjustInterval), and QPS growth step (qpsGrowthDelta). The test stops when the service load reaches the specified maxRT or maxQPS, or when the number of errors exceeds the fault tolerance level (faultTolerate).
    
-   **manual mode**: Manual pressure mode. This mode uses a fixed number of stress testing agents and a fixed concurrency for each agent. You can dynamically adjust the number of agents and their concurrency during the test.
    

The console only supports auto mode. The EASCMD client supports auto, scan, and manual modes.

You can add the mode parameter in the optional section of the JSON configuration file to specify the stress testing mode. The following are configuration examples.

## auto mode

In auto mode, you only need to specify the service name and stress testing data in the configuration file. You can use the default values for other parameters. The following is a configuration example.

```
{
    "service": {
        "serviceName": "demo"
    },
    "data": {
        "path": "https://examplebucket.oss-cn-chengdu.aliyuncs.com/data/warmup.tf.bin"
    },
    "optional": {
        "maxQPS": 1000,
        "duration": 300
     }
}
```

## scan mode

```
{
    "service": {
        "serviceName": "demo"
    },
    "data": {
        "content": "aGVsbG8K"
    },
    "optional": {
        "mode": "scan",
        "maxQPS": 1000,
        "minQPS": 500,
        "qpsGrowthDelta": 100,
        "adjustInterval": 30
    }
}
```

## manual mode

```
{
    "service": {
        "serviceName": "demo"
    },
    "data": {
        "content": "aGVsbG8K"
    },
    "optional": {
        "mode": "manual",
        "agentCount": 1,
        "concurrency": 5
    }
}
```

### **JSON parameter descriptions**

**Item**

**Parameter**

**Required**

**Description**

service

serviceName

Yes

The name of the service to be stress-tested.

data

content

No

A single stress testing request data entry as a Base64-encoded string.

To specify multiple request data entries, use the path parameter.

path

No

The path of the test data source. You can configure an HTTP path or an OSS path. You can specify multiple paths separated by commas (,). You can also package multiple test files into a .zip file for batch configuration.

**Note**

Save the stress testing data file in its original format. Do not perform Base64 encoding.

multiLine

No

Specifies whether to split the test data by line. This is a Boolean value, and the default is false. If set to true, the downloaded data is parsed line by line.

http

headers

No

HTTP request header settings. This is a list. For example: `["Authorization:aaa", "Content-Type:text"]`.

timeout

No

The HTTP request timeout in milliseconds. The default is 20000.

optional

mode

No

The stress testing mode. The following three modes are supported. For more information, see [Stress testing modes](#48649f18b5qma).

-   auto (default): Automatic pressure mode.
    
-   scan: Periodic pressure mode.
    
-   manual: Manual pressure mode.
    

duration

No

The stress testing duration in seconds. The default is 600, and the maximum is 1200.

agentCount

No

The number of client replicas in manual mode. A higher number of replicas results in greater pressure. The default is 1.

concurrency

No

The number of concurrent requests per client instance in manual mode. Higher concurrency results in greater pressure. The default is 2. If the pressure is insufficient, first increase the concurrency. If increasing the concurrency does not increase the pressure, try increasing the number of client replicas.

adjustInterval

No

The dynamic adjustment interval for automatic pressure in scan mode, in seconds. The default is 60.

minQPS

No

The starting QPS value for automatic pressure in scan mode. The default is 100.

maxQPS

No

The maximum allowed QPS in scan or auto mode.

maxRT

No

The maximum RT (TP99) in scan or auto mode. If this threshold is exceeded, the QPS is automatically adjusted until the real-time RT meets expectations.

qpsGrowthDelta

No

The amount by which QPS increases each time in scan mode. The default is 50.

faultTolerate

No

The tolerance for request errors (status codes other than 200) in scan or auto mode. For example, a value of 0.01 means that if 1% of requests fail, the error handling process is triggered. The default value is 0.001, which means the tolerance for request errors is one in a thousand.

faultAction

No

The behavior of the stress testing VPC controller when the request error rate exceeds the threshold set by faultTolerate in scan or auto mode. The following values are supported:

-   stop: Maintains the current QPS and stops increasing the pressure.
    
-   revise (default): Dynamically adjusts the QPS until the request error rate meets expectations.
    

## **Stress testing task monitoring metrics**

### **LLM service-specific metrics**

**TTFT (Time To First Token)**

The time to the first token of a request. This is the time from when a request is sent until the first token generated by the service is received.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9726934471/p939716.png)

**TPOT (Time per Output Token)**

The time per token of a request. This is the time interval between two consecutive tokens generated by the service.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9726934471/p939717.png)

**TPS (Tokens Per Second)**

The number of tokens generated per second.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9726934471/p939718.png)

### **General metrics**

**Request per second distribution**

The distribution of the number of requests received by the service per second.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9726934471/p939720.png)

**Response time distribution**

The distribution of the number of responses returned by the service within the selected time range.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9726934471/p939721.png)

**Traffic distribution**

The distribution of the volume of request data sent from the client to the service and the volume of response data returned from the service to the client within the selected time range.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9726934471/p939722.png)

**Response time interval distribution**

The percentage of response times returned by the service that fall into different intervals, in milliseconds.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9726934471/p939723.png)

**Overall response time distribution**

The end-to-end latency of requests at different quantiles, in milliseconds.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9726934471/p939725.png)

**Return status code distribution**

The distribution of status codes returned by the service.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9726934471/p939726.png)

## **FAQ**

### **Why do I get a 400 or 404 error during a single data test when a curl request works?**

**Symptom:** When performing a one-click stress test on a large language model inference service deployed on EAS using a single data entry, all requests fail with an HTTP status code of 400 or 404. However, sending the same request manually with curl succeeds with a 200 status code.

**Root cause:**

-   404: The stress testing URL is incorrect. For example, it might contain an extra slash at the end (such as `/test/`), while the actual registered path for the service is `/test`, causing a routing mismatch.
    
-   400: The request body format is incorrect. A common mistake is not enclosing the JSON string in single quotes when generating the Base64 encoding for the request body (such as `echo -n {"file_names": [...]} | base64`). This causes the shell to parse the JSON incorrectly, resulting in an invalid JSON format that the service cannot parse.
    

**Solution**:

-   Ensure the stress testing URL path exactly matches the service's registered path. Remove any extra slashes at the end (use `/test` instead of `/test/`).
    
-   Before generating the Base64 encoding, enclose the entire JSON request body in single quotes. For example:
    
    ```
    echo -n '{"file_names": ["xxx.pdf"]}' | base64
    ```
    

## **Next steps**

-   To create and manage stress testing tasks using API operations, see [Stress testing tasks](/help/en/pai/developer-reference/api-eas-2021-07-01-dir-benchmark-task/).
    
-   To learn how to invoke the stress-tested service for inference, see [Overview of invocation methods](/help/en/doc-detail/601706.html).

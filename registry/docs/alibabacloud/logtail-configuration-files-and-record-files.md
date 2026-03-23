This topic covers choosing a network type for optimal Logtail collection speed, configuring startup parameters for performance tuning, and the configuration and record files Logtail uses.

## Network types and selection

When [installing Logtail](/help/en/sls/install-run-upgrade-and-uninstall-logtail), selecting the appropriate network type based on the relationship between the server and Simple Log Service (SLS) helps make log data transmission faster and more stable. Examples of network type selection are as follows:

![网络选择示例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2696549951/p12057.png)

**Network type**

**Description**

**Use case**

**Example**

Alibaba Cloud internal network

The Alibaba Cloud internal network is a shared gigabit network and offers faster, more stable log data transmission than the Internet. It includes VPC and classic network.

Your ECS instance and SLS project belong to the same region.

**Note**

Create your SLS project in the same region as your ECS instance to use the Alibaba Cloud internal network for log collection. This avoids public bandwidth usage.

Both your ECS instance and SLS project belong to the China (Hangzhou) region.

Internet

Using the Internet to transmit log data can be affected by bandwidth limitations, jitter, latency, and packet loss, impacting data collection speed and stability.

Choose to transmit data over the Internet in the following use cases:

-   Your ECS instance and SLS project belong to different regions.
    
-   The server used is provided by a third-party cloud service provider or deployed in a self-managed data center.
    

Your ECS instance and SLS project belong to different regions:

-   Project: China (Hangzhou)
    
-   ECS instance: China (Shanghai)
    

Self-managed data center:

-   Project: China (Shenzhen)
    
-   Data center: in China
    

Transfer acceleration

Transfer acceleration uses Alibaba Cloud CDN edge nodes to accelerate log collection. Compared with collection over the Internet, transfer acceleration has significant advantages in terms of network latency and stability.

If your business servers and SLS project respectively belong to regions inside and outside China, using the Internet to transmit data may result in high network latency and unstable transmission. We recommend that you use [transfer acceleration](#2ba2d6a585eny) to transmit data.

Self-managed data center:

-   Project: China (Hong Kong)
    
-   Data center: outside China
    

### **Transfer acceleration**

Enable transfer acceleration for your project if you choose it as the network type.

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com/). Go to the **Project Overview** page, and enable **Acceleration Endpoint** as shown in the following figure.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9194461271/p815610.png)
    
2.  Read the prompt in the dialog box, and then click **Confirm**.
    
3.  Configure log collection acceleration for Logtail in one of the following ways.
    
    ### Install Logtail using transfer acceleration
    
    If you enable transfer acceleration before installing Logtail, choose to [install Logtail using transfer acceleration](/help/en/sls/install-logtail-on-a-linux-server#section-h2x-fmv-vdb).
    
    ### **Modify the Logtail configuration**
    
    If you have installed Logtail before enabling transfer acceleration, you need to modify the Logtail configuration.
    
    1.  Stop Logtail.
        
        -   Linux:
            
            Run the `sudo /etc/init.d/ilogtaild stop` command.
            
        -   Windows:
            
            1.  Choose **Start** > **Control Panel** > **Administrative Tools** > **Services**.
                
            2.  In the **Services** dialog box, find the LogtailDaemon service (Logtail V1.0.0.0 and later) or LogtailWorker service (Logtail V0.x.x.x). Right-click it and choose **Stop**.
                
        
    2.  Modify the Logtail startup configuration file `ilogtail_config.json`.
        
        Replace the endpoint line in the data\_server\_list parameter with `log-global.aliyuncs.com`. For the file path, see [Startup parameter configuration file (ilogtail\_config.json)](#title-hwv-3ga-q8e).
        
    3.  Start Logtail.
        
        -   Linux:
            
            Run the `sudo /etc/init.d/ilogtaild start` command.
            
        -   Windows:
            
            1.  Choose **Start** > **Control Panel** > **Administrative Tools** > **Services**.
                
            2.  In the **Services** dialog box, find the LogtailDaemon service (Logtail V1.0.0.0 and later) or LogtailWorker service (Logtail V0.x.x.x). Right-click it and choose **Start**.
                
        
    

For more related operations, see [Use the transfer acceleration feature](/help/en/sls/transmission-acceleration).

## **Configure Logtail startup parameters**

SLS restricts Logtail's performance to avoid excessive resource use, which may impact other server services. To enhance Logtail's performance, adjust its startup parameters.

### **Use cases**

Modify Logtail's startup parameters if:

-   You handle many log files that use significant memory, such as over 100 files, or directories with more than 5,000 files.
    
-   High-speed data transmission increases CPU usage, with collection rates above 2 MB/s in simple mode or 1 MB/s in full regex mode.
    
-   Data is sent to SLS faster than 10 MB/s.
    

### **Recommended parameter values**

Logtail's performance in full regex and delimiter modes is similar to JSON mode, while simple mode is five times faster. Data complexity, rules, and the number of directories and files impact CPU and memory usage. Configure parameters according to the following recommended parameter values and your business needs.

-   Server environment
    
    **Parameter**
    
    **Collection rate**
    
    **Default**
    
    **Greater than 10 MB/s**
    
    **Greater than 20 MB/s**
    
    **Greater than 40 MB/s**
    
    cpu\_usage\_limit
    
    0.4
    
    1
    
    2
    
    4
    
    mem\_usage\_limit
    
    384
    
    1024
    
    2048
    
    4096
    
    max\_bytes\_per\_sec
    
    20971520
    
    209715200
    
    209715200
    
    209715200
    
    process\_thread\_count
    
    1
    
    2
    
    4
    
    8
    
    send\_request\_concurrency
    
    4
    
    20
    
    40
    
    80
    
-   Container or Kubernetes environment
    
    **Environment variable**
    
    **Collection rate**
    
    **Default**
    
    **Greater than 10 MB/s**
    
    **Greater than 20 MB/s**
    
    **Greater than 40 MB/s**
    
    cpu\_usage\_limit
    
    2
    
    3
    
    5
    
    9
    
    mem\_usage\_limit
    
    2048
    
    2048
    
    2048
    
    4096
    
    max\_bytes\_per\_sec
    
    209715200
    
    209715200
    
    209715200
    
    209715200
    
    process\_thread\_count
    
    1
    
    2
    
    4
    
    8
    
    send\_request\_concurrency
    
    20
    
    20
    
    40
    
    80
    
    resources.limits.cpu
    
    500m
    
    1000m
    
    2000m
    
    4000m
    
    resources.limits.memory
    
    2 Gi
    
    2 Gi
    
    3 Gi
    
    5 Gi
    
    The following section describes how to modify the startup parameters of Logtail in a container or Kubernetes environment:
    
    -   For Logtail-ds 1.7.3 or later deployed in an Alibaba Cloud Kubernetes cluster, modify the startup parameters in the [Container Service for Kubernetes console](https://cs.console.alibabacloud.com). On the **Add-ons** page, modify the corresponding parameters in the **logtail-ds** component.
        
    -   For Logtail-ds 1.7.3 or later deployed in a self-managed container or Kubernetes cluster, modify the startup parameters of Logtail by modifying DaemonSet-related environment variables. Some environments reference a ConfigMap. The ConfigMap path is **configmap** > **kube-system** > **alibaba-log-configuration**.
        
    -   For Logtail earlier than Logtail-ds 1.7.3, modify the startup parameters of Logtail by modifying DaemonSet-related environment variables. Some environments reference a ConfigMap. The ConfigMap path is **configmap** > **kube-system** > **alibaba-log-configuration**. You also need to adjust **resources.limits.cpu** and **resources.limits.memory** in **daemonset** > **kube-system** > **logtail-ds** to avoid container resource limits.
        

Configuring Logtail based on the 40 MB/s collection rate values brings its performance near the maximum limit. Increasing threads won't significantly boost performance. The table below shows Logtail's performance limits in different modes.

**Note**

The actual collection performance may vary based on the environment, such as test environments and production environments.

**Collection mode**

**Performance upper limit**

Simple mode

440 MB/s

Full regex mode

70 MB/s

Delimiter mode

75 MB/s

JSON mode

75 MB/s

### **Configure startup parameters**

1.  On the server where Logtail is installed, open the /usr/local/ilogtail/ilogtail\_config.json file.
    
    For containers or Kubernetes clusters, adjust Logtail parameters using DaemonSet-related environment variables. Some environments use a ConfigMap at **configmap** > **kube-system** > **alibaba-log-configuration**.
    
2.  Configure the startup parameters as needed.
    
    The following example shows the startup parameters of Logtail:
    
    ```
    {
        ...
        "cpu_usage_limit" : 0.4,
        "mem_usage_limit" : 384,
        "max_bytes_per_sec" : 20971520,
        "process_thread_count" : 1,
        "send_request_concurrency" : 4,
        "buffer_file_num" : 25,
        "buffer_file_size" : 20971520,
        "buffer_file_path" : "",
        ...
    }
    ```
    
    The following table lists common Logtail startup parameters. Keep the default values for others. Add or modify parameters as needed.
    
    Table 1. Startup parameters of Logtail
    
    **Parameter**
    
    **Type**
    
    **Description**
    
    **Example**
    
    cpu\_usage\_limit
    
    double
    
    The CPU utilization threshold for Logtail. The calculation is based on a single core.
    
    -   Valid values: 0.1 to the number of CPU cores of the current server
        
    -   Default value: 0.4
        
    
    **Warning**
    
    The `cpu_usage_limit` is a soft limit, meaning Logtail's CPU usage may exceed it. If this happens for over 5 minutes, circuit breaking occurs, and Logtail restarts automatically.
    
    For example, if you set this parameter to 0.4, SLS tries to limit the CPU utilization of Logtail to 40% of a single core. If the CPU utilization exceeds the threshold, Logtail automatically restarts.
    
    In most cases, a single core supports a collection speed of approximately 100 MB/s in simple mode and approximately 20 MB/s in full regex mode.
    
    **Note**
    
    If Logtail whose version is Logtail-ds 1.7.3 or later is deployed in an Alibaba Cloud Kubernetes cluster, we recommend that you set the CPU utilization threshold in the [Container Service for Kubernetes console](https://cs.console.alibabacloud.com). On the **Add-ons** page, modify the **LogtailDSLimitCPU** parameter in the **logtail-ds** component. For more information, see [Manage components](/help/en/ack/manage-system-components).
    
    "cpu\_usage\_limit" : 0.4
    
    mem\_usage\_limit
    
    int
    
    The memory usage threshold for Logtail. Unit: MB.
    
    -   Valid values: 128 to 8192
        
    -   Default value: 384 for a host environment and 2048 for ACK components
        
    
    **Warning**
    
    The mem\_usage\_limit parameter is a soft limit. The actual memory usage of Logtail may exceed the threshold. If the memory usage exceeds the threshold for more than 5 minutes, circuit breaking is triggered and Logtail automatically restarts.
    
    The collection rate, the number of monitored directories and files, and the degree of sending blocking are related to the mem\_usage\_limit parameter. For more information, see [Limits on Logtail](/help/en/sls/logtail-limits#concept-x1y-p3q-zdb).
    
    **Note**
    
    If Logtail whose version is Logtail-ds 1.7.3 or later is deployed in an Alibaba Cloud Kubernetes cluster, we recommend that you set the memory usage threshold in the [Container Service for Kubernetes console](https://cs.console.alibabacloud.com). On the **Add-ons** page, modify the **LogtailDSLimitMemory** parameter in the **logtail-ds** component. For more information, see [Manage components](/help/en/ack/manage-system-components).
    
    "mem\_usage\_limit" : 384
    
    max\_bytes\_per\_sec
    
    int
    
    The highest speed at which Logtail sends raw data. Unit: bytes per second.
    
    -   Valid values: 1024 to 52428800
        
    -   Default value: 20971520
        
        **Important**
        
        If you set the parameter to a value that is greater than 20971520, the speed at which Logtail sends data is not limited. The value 20971520 indicates that the speed is 20 MB/s.
        
    
    For example, if you set this parameter to 2097152, the speed at which Logtail sends data is 2 MB/s.
    
    **Note**
    
    If Logtail whose version is Logtail-ds 1.7.3 or later is deployed in an Alibaba Cloud Kubernetes cluster, we recommend that you set the flow limit in the [Container Service for Kubernetes console](https://cs.console.alibabacloud.com). On the **Add-ons** page, modify the **LogtailDSMaxBytePerSec** parameter in the **logtail-ds** component. For more information, see [Manage components](/help/en/ack/manage-system-components).
    
    "max\_bytes\_per\_sec" : 2097152
    
    process\_thread\_count
    
    int
    
    The number of threads that are used by Logtail to process data.
    
    -   Valid values: 1 to 64
        
    -   Default value: 1
        
    
    In most cases, a thread provides a write speed of 24 MB/s in simple mode and 12 MB/s in full regex mode. We recommend that you retain the default value for this parameter.
    
    **Note**
    
    If Logtail whose version is Logtail-ds 1.7.3 or later is deployed in an Alibaba Cloud Kubernetes cluster, we recommend that you set the number of threads in the [Container Service for Kubernetes console](https://cs.console.alibabacloud.com). On the **Add-ons** page, modify the **LogtailDSProcessThreadCount** parameter in the **logtail-ds** component. For more information, see [Manage components](/help/en/ack/manage-system-components).
    
    "process\_thread\_count" : 1
    
    send\_request\_concurrency
    
    int
    
    The number of concurrent requests that can be sent by Logtail to asynchronously send data.
    
    -   Valid values: 1 to 50
        
    -   Default value: 20
        
    
    If SLS provides a high transactions per second (TPS), set this parameter to a larger value. Each concurrent request supports a network throughput of 0.5 MB/s to 1 MB/s. The actual network throughput for a concurrent request varies based on the network latency.
    
    **Note**
    
    -   If you set this parameter to a large value, many network ports may be occupied. You need to adjust TCP-related parameters.
        
    -   For Logtail-ds 1.7.3 or later deployed in an Alibaba Cloud Kubernetes cluster, set the number of concurrent requests in the [Container Service for Kubernetes console](https://cs.console.alibabacloud.com). On the **Add-ons** page, modify the **LogtailDSSendRequestConcurrency** parameter in the **logtail-ds** component. For more information, see [Manage components](/help/en/ack/manage-system-components).
        
    
    "send\_request\_concurrency" : 4
    
    buffer\_file\_num
    
    int
    
    The maximum number of files that can be cached.
    
    -   Valid values: 1 to 100
        
    -   Default value: 25
        
    
    If a network error or data write limit is reached, Logtail caches parsed logs locally in its installation directory. It parses raw logs in real time and retries sending cached logs once issues are resolved.
    
    "buffer\_file\_num" : 25
    
    buffer\_file\_size
    
    int
    
    The maximum size of a cached file. Unit: bytes.
    
    -   Valid values: 1048576 to 104857600
        
    -   Default value: 20971520
        
    
    The maximum disk space that can be used by cached files is buffer\_file\_size × buffer\_file\_num.
    
    "buffer\_file\_size" : 20971520
    
    buffer\_file\_path
    
    String
    
    The directory in which cached files are stored. This parameter is empty by default, which indicates that cached files are stored in the Logtail installation directory /usr/local/ilogtail.
    
    After you set this parameter, you must manually move the files whose names start with logtail\\\_buffer\\\_file\_\* from the original directory to the new directory. Logtail can read the cached files and delete them after the files are sent.
    
    "buffer\_file\_path" : ""
    
    bind\_interface
    
    String
    
    The name of the network interface controller (NIC) that is associated with the server on which Logtail is installed. This parameter is empty by default, which indicates that the server is automatically associated with an available NIC.
    
    If you specify a value for this parameter, such as eth1, Logtail uses the NIC to upload logs.
    
    This parameter is available only if Logtail runs on a Linux server.
    
    "bind\_interface" : ""
    
    check\_point\_filename
    
    String
    
    The path in which Logtail checkpoint files are stored. Default value: /tmp/logtail\_check\_point.
    
    If you use Docker or Kubernetes, we recommend that you refer to [Data Reliability Discussion for iLogtail Container Restart](https://developer.aliyun.com/article/901257) to configure this parameter. This will prevent log collection duplication or loss caused by checkpoint information loss when the Logtail container restarts.
    
    "check\_point\_filename" : /tmp/logtail\_check\_point
    
    check\_point\_dump\_interval
    
    int
    
    The interval at which Logtail updates checkpoint files. Default value: 900. Unit: seconds. If you retain the default value, Logtail updates checkpoint files at 15-minute intervals.
    
    This parameter is available for only Linux Logtail V1.0.19 and later or Windows Logtail V1.0.19.0 and later.
    
    "check\_point\_dump\_interval" : 900
    
    user\_config\_file\_path
    
    String
    
    The path in which Logtail configuration files are stored. The default value is the directory where the binary file is located. The file name is user\_log\_config.json.
    
    If you use Docker or Kubernetes, we recommend that you refer to [Data Reliability Discussion for iLogtail Container Restart](https://developer.aliyun.com/article/901257) to configure this parameter. This will prevent log collection duplication or loss when the Logtail container restarts.
    
    "user\_config\_file\_path" : user\_log\_config.json
    
    docker\_file\_cache\_path
    
    String
    
    This file records the path mappings between container log files and host log files. The default value is /usr/local/ilogtail/docker\_path\_config.json.
    
    If you use Docker or Kubernetes, we recommend that you refer to [Data Reliability Discussion for iLogtail Container Restart](https://developer.aliyun.com/article/901257) to configure this parameter. This will prevent log collection duplication or loss when the Logtail container restarts.
    
    This parameter is available for only Linux Logtail V0.16.54 and later or Windows Logtail V0.16.54.0 and later.
    
    "docker\_file\_cache\_path": /usr/local/ilogtail/docker\_path\_config.json
    
    discard\_old\_data
    
    Boolean
    
    Specifies whether to discard historical logs. Default value: true, which indicates that logs that were generated more than 12 hours before the current time are discarded.
    
    "discard\_old\_data" : true
    
    ilogtail\_discard\_interval
    
    int
    
    The time threshold for discarding logs. If the difference between the time at which the logs were generated and the current time exceeds the threshold, the logs are discarded. Default value: 43200 (12 hours). Unit: seconds.
    
    "ilogtail\_discard\_interval": 43200
    
    working\_ip
    
    String
    
    This parameter is empty by default, indicating that the IP address will be automatically obtained from this server. After modification, Logtail will use this value as the reported server IP address to SLS.
    
    "working\_ip" : ""
    
    working\_hostname
    
    String
    
    The server hostname that is reported by Logtail to SLS. This parameter is empty by default, which indicates that SLS automatically obtains the hostname of the server on which Logtail is installed.
    
    "working\_hostname" : ""
    
    max\_read\_buffer\_size
    
    long
    
    The maximum size of a log that Logtail can read. Default value: 524288 (512 KB). Maximum value: 8388608 (8 MB). Unit: bytes.
    
    If the size of a log exceeds 524,288 bytes, change the value of this parameter.
    
    "max\_read\_buffer\_size" : 524288
    
    oas\_connect\_timeout
    
    long
    
    The timeout period of the connection that is established by Logtail to send a request to obtain the Logtail configuration or AccessKey pair. Default value: 5. Unit: seconds.
    
    If the connections cannot be established within the timeout period due to poor network conditions, change the value of this parameter.
    
    "oas\_connect\_timeout" : 5
    
    oas\_request\_timeout
    
    long
    
    The timeout period of the request that is sent by Logtail to obtain the Logtail configuration or AccessKey pair. Default value: 10. Unit: seconds.
    
    If the connections cannot be established within the timeout period due to poor network conditions, change the value of this parameter.
    
    "" : 10
    
    data\_server\_port
    
    long
    
    If you set data\_server\_port to 443, Logtail transmits data to SLS over HTTPS.
    
    This parameter is available for only Linux Logtail V1.0.10 and later or Windows Logtail V1.0.10.0 and later.
    
    "data\_server\_port": 443
    
    enable\_log\_time\_auto\_adjust
    
    Boolean
    
    If you set enable\_log\_time\_auto\_adjust to true, the log time is adapted to the local time of the server.
    
    To ensure security, SLS checks request timings, including those from Logtail. It rejects requests sent 15 minutes before or after its time, assuming requests reflect the server's local time. If the server's time is changed to the future during testing, SLS will reject Logtail requests, preventing data writing. Use this parameter to align log time with the server's local time.
    
    This parameter is available for only Linux Logtail V1.0.19 and later or Windows Logtail V1.0.19.0 and later.
    
    **Important**
    
    -   Setting `enable_log_time_auto_adjust` to `true` adds the offset between SLS time and Logtail server time to the log time. This offset updates only when a request is rejected, so the queried log time may differ from the writing time.
        
    -   Some Logtail functions depend on system time changes. Restart Logtail after adjusting the server's local time.
        
    
    "enable\_log\_time\_auto\_adjust": true
    
    accept\_multi\_config
    
    Boolean
    
    Specifies whether to allow Logtail to collect data from the same file using multiple Logtail configurations. Default value: false, which indicates that Logtail cannot collect data from the same file using multiple Logtail configurations.
    
    By default, a file is collected by one Logtail configuration. You can remove this restriction with this parameter. Each configuration is handled separately. Allowing multiple configurations for the same file increases CPU and memory usage.
    
    This parameter is available for only Linux Logtail V0.16.26 and later or Windows Logtail V0.16.26.0 and later.
    
    "accept\_multi\_config": true
    
    enable\_checkpoint\_sync\_write
    
    Boolean
    
    Specifies whether to enable the sync write feature. Default value: false, which indicates that the sync write feature is disabled.
    
    The sync write feature works with the ExactlyOnce write feature. When ExactlyOnce is enabled, Logtail creates precise file-level checkpoints on the disk. Normally, Logtail skips the sync function for performance, which risks losing checkpoints if buffered data isn't saved during a restart. Set `enable_checkpoint_sync_write` to `true` to enable sync write and prevent data loss. For more information, see [Logtail configuration](/help/en/sls/developer-reference/logtail-configurations#section-okt-nus-mpa).
    
    This parameter is available for only Linux Logtail V1.0.20 and later or Windows Logtail V1.0.20.0 and later.
    
    "enable\_checkpoint\_sync\_write": false
    
    enable\_env\_ref\_in\_config
    
    Boolean
    
    Specifies whether to enable the environment variable replacement feature in Logtail configurations. Default value: false.
    
    After you enable this feature, use `${xxx}` as a placeholder for the environment variable `xxx` in the Logtail configuration in the console. For example, if you set the collection path to `/${xxx}/logs` and the environment variable to `xxx=user`, the collection path that takes effect is `/user/logs`.
    
    If you want to use `${` or `}` in the configuration, use `$${` or `$}` for escaping.
    
    This parameter is available for only Linux Logtail V1.0.31 and later or Windows Logtail V1.0.31.0 and later.
    
    "enable\_env\_ref\_in\_config": false
    
    docker\_config\_update\_interval
    
    int
    
    The minimum interval at which the container path is updated.
    
    This parameter is used together with the max\_docker\_config\_update\_times parameter. If either parameter reaches the threshold, the container path is no longer updated.
    
    -   For Linux Logtail V1.0.32 and later or Windows Logtail V1.0.32.0 and later, the default value is 3. Unit: seconds.
        
    -   For Linux Logtail earlier than V1.0.32 or Windows Logtail earlier than V1.0.32.0, the default value is 10. Unit: seconds.
        
    
    "docker\_config\_update\_interval": 3
    
    max\_docker\_config\_update\_times
    
    int
    
    The maximum number of times that the container path can be updated within 3 minutes. By default, if the container path is updated more than three times within a 3-minute period, the container path cannot be updated again until the period ends.
    
    -   For Linux Logtail V1.0.32 and later or Windows Logtail V1.0.32.0 and later, the default value is 10.
        
    -   For Linux Logtail earlier than V1.0.32 or Windows Logtail earlier than V1.0.32.0, the default value is 3.
        
    
    "max\_docker\_config\_update\_times": 10
    
    DOCKER\_HOST
    
    String
    
    The socket address that is used to communicate with Docker. You must configure it using an environment variable.
    
    This parameter is empty by default, which indicates that the default socket address `unix:///var/run/docker.sock` is used.
    
    DOCKER\_HOST=unix:///var/run/docker.sock
    
    CONTAINERD\_SOCK\_PATH
    
    String
    
    The socket address that is used to communicate with containerd. You must configure it using an environment variable.
    
    This parameter is empty by default, which indicates that the default socket address `unix:///run/containerd/containerd.sock` is used. If a K3s cluster is used, change the default socket address to the value provided in the example.
    
    CONTAINERD\_SOCK\_PATH=/run/k3s/containerd/containerd.sock
    
    logreader\_max\_rotate\_queue\_size
    
    Int
    
    The maximum length of the queue in which a file is rotated. Default value: 20. If log collection is blocked or delayed, the files from which you want to collect logs are assigned the file handles and wait in the queue.
    
    If log collection is delayed and you need to manage the maximum disk usage, set this parameter to a smaller value.
    
    **Warning**
    
    If the number of delayed files exceeds the value of this parameter, Logtail does not collect logs from new files.
    
    "logreader\_max\_rotate\_queue\_size" : 10
    
    force\_release\_deleted\_file\_fd\_timeout
    
    Int
    
    A handle will be released within a specified time after a container exits or a file is deleted. You can set this time. Default value: -1, indicating the feature is disabled. Value 0 means immediate release. Unit: seconds.
    
    Set this parameter to control the maximum destruction latency for containerd containers.
    
    **Warning**
    
    If log collection latency exceeds the specified period, uncollected data is lost.
    
    "force\_release\_deleted\_file\_fd\_timeout" : 0
    
    data\_endpoint\_policy
    
    string
    
    The endpoint switchover policy for Logtail.
    
    **Note**
    
    You can check whether a default endpoint is configured in the data\_server\_list parameter in the ilogtail\_config.json file. For more information, see [Startup parameter configuration file (ilogtail\_config.json)](#title-hwv-3ga-q8e).
    
    -   designated\_first (default)
        
        -   If the default endpoint for a region is specified and the default endpoint is available, the system uses the default endpoint.
            
        -   If the default endpoint for a region is specified and the default endpoint is unavailable, the system automatically selects another available endpoint.
            
        -   If no default endpoint for a region is specified, the system automatically selects an available endpoint.
            
    -   designated\_locked
        
        -   If the default endpoint for a region is specified, the system uses the default endpoint regardless of whether the endpoint is available.
            
        -   If no default endpoint for a region is specified, the system automatically selects an available endpoint.
            
    
    This parameter is available for only Linux Logtail V1.5.0 and later or Windows Logtail V1.5.0.0 and later.
    
    "data\_endpoint\_policy" : "designated\_first"
    
    inotify\_black\_list
    
    Array<String>
    
    The blacklist of inotify. Only exact match is supported. inotify does not listen to the directories specified in the blacklist.
    
    "inotify\_black\_list": \["/tmp"\]
    
    host\_path\_blacklist
    
    String
    
    The global host path blacklist. Only substring match is supported.
    
    -   On a Linux server, separate multiple substrings with colons (:).
        
    -   On a Windows server, separate multiple substrings with semicolons (;).
        
    
    For example, `"host_path_blacklist" : "/volumes/kubernetes.io~csi/nas-"` indicates that data collection from NAS mounts is prohibited.
    
    This parameter is available for only Linux Logtail V1.8.0 and later or Windows Logtail V1.8.0.0 and later.
    
    "host\_path\_blacklist" : "/volumes/kubernetes.io~csi/nas-"
    
    LOGTAIL\_LOG\_LEVEL
    
    String
    
    The level of logs. You must configure the log level using an environment variable. This parameter is empty by default, which indicates that the log level is info. Valid values: trace, debug, info, warning, error, and fatal.
    
    This parameter is available for only Linux Logtail V1.8.0 and later or Windows Logtail V1.8.0.0 and later.
    
    LOGTAIL\_LOG\_LEVEL=info
    
    FORCE\_RELEASE\_STOP\_CONTAINER\_FILE
    
    Boolean
    
    -   Configuration method: This parameter can be configured only using an environment variable.
        
    -   Feature description: When this parameter is set to `true`, Logtail immediately releases container file handles when the application container exits. This operation prevents the container from failing to exit normally because file handles are not released.
        
    -   Notes:
        
        -   In this case, the completeness of data collection from the container cannot be guaranteed.
            
        -   We recommend that you add a delay of a few seconds before the business exits, to ensure that logs can be completely collected.
            
    -   Supported editions:
        
        -   Linux Logtail V2.1.6 and later
            
    
    **"**FORCE\_RELEASE\_STOP\_CONTAINER\_FILE**"** : "true"
    
    default\_reader\_flush\_timeout
    
    int
    
    The timeout in seconds for flushing the final, potentially incomplete log entry. Default value: 60 seconds.  
    This parameter is supported only in Logtail V2.0.0 and later.
    
3.  Restart Logtail for the configuration to take effect.
    
    ```
    /etc/init.d/ilogtaild stop && /etc/init.d/ilogtaild start                        
    ```
    
    After the restart, run the `/etc/init.d/ilogtaild status` command to check the status of Logtail.
    

### **Appendix: Environment variables**

Table 2 Mappings between environment variables and the startup parameters of Logtail

**Parameter**

**Environment variable**

**Priority**

**Supported versions**

cpu\_usage\_limit

cpu\_usage\_limit

If you modify Logtail startup parameters using environment variables and configuration files, the environment variables take precedence.

-   Linux Logtail V0.16.32 and later
    
-   Windows Logtail V0.16.32.0 and later
    

mem\_usage\_limit

mem\_usage\_limit

max\_bytes\_per\_sec

max\_bytes\_per\_sec

process\_thread\_count

process\_thread\_count

send\_request\_concurrency

send\_request\_concurrency

check\_point\_filename

check\_point\_filename or ALIYUN\_LOGTAIL\_CHECK\_POINT\_PATH

-   Linux Logtail V0.16.36 and later
    
-   Windows Logtail V0.16.36.0 and later
    

docker\_file\_cache\_path

docker\_file\_cache\_path

If you modify Logtail startup parameters using environment variables and configuration files, the configuration files take precedence.

-   Linux Logtail V0.16.54 and later
    
-   Windows Logtail V0.16.54.0 and later
    

user\_config\_file\_path

user\_config\_file\_path

-   Linux Logtail V0.16.56 and later
    
-   Windows Logtail V0.16.56.0 and later
    

discard\_old\_data

discard\_old\_data

working\_ip

working\_ip or ALIYUN\_LOGTAIL\_WORKING\_IP

working\_hostname

working\_hostname or ALIYUN\_LOGTAIL\_WORKING\_HOSTNAME

max\_read\_buffer\_size

max\_read\_buffer\_size

oas\_connect\_timeout

oas\_connect\_timeout

oas\_request\_timeout

oas\_request\_timeout

data\_server\_port

data\_server\_port

-   Linux Logtail V1.0.10 and later
    
-   Windows Logtail V1.0.10.0 and later
    

accept\_multi\_config

accept\_multi\_config

-   Linux Logtail V0.16.26 and later
    
-   Windows Logtail V0.16.26.0 and later
    

enable\_log\_time\_auto\_adjust

enable\_log\_time\_auto\_adjust

-   Linux Logtail V1.0.19 and later
    
-   Windows Logtail V1.0.19.0 and later
    

check\_point\_dump\_interval

check\_point\_dump\_interval

enable\_checkpoint\_sync\_write

enable\_checkpoint\_sync\_write

-   Linux Logtail V1.0.20 and later
    
-   Windows Logtail V1.0.20.0 and later
    

docker\_config\_update\_interval

docker\_config\_update\_interval or ALIYUN\_LOGTAIL\_DOCKER\_CONFIG\_UPDATE\_INTERVAL

-   Linux Logtail V1.0.29 and later
    
-   Windows Logtail V1.0.29.0 and later
    

max\_docker\_config\_update\_times

max\_docker\_config\_update\_times or ALIYUN\_LOGTAIL\_MAX\_DOCKER\_CONFIG\_UPDATE\_TIMES

logreader\_max\_rotate\_queue\_size

logreader\_max\_rotate\_queue\_size

-   Linux Logtail V0.16.54 and later
    
-   Windows Logtail V0.16.54.0 and later
    

force\_release\_deleted\_file\_fd\_timeout

force\_release\_deleted\_file\_fd\_timeout

If you modify Logtail startup parameters using environment variables and configuration files, the environment variables take precedence.

-   Linux Logtail V1.21.1 and later
    
-   Windows Logtail V1.21.1.0 and later
    

host\_path\_blacklist

host\_path\_blacklist

-   Linux Logtail V1.8.0 and later
    
-   Windows Logtail V1.8.0.0 and later
    

Not supported

FORCE\_RELEASE\_STOP\_CONTAINER\_FILE

This parameter can be configured only using environment variables.

Linux Logtail V2.1.6 and later

## **Logtail configuration files and record files**

Logtail relies on several configuration files and produces information record files. Below are the details and paths of common files.

### **Startup parameter configuration file (ilogtail\_config.json)**

The `ilogtail_config.json` file is used to configure the startup parameters of Logtail. For more information, see [Configure Logtail startup parameters](#5dbc2cc062rnz).

**Important**

-   The file must be a valid JSON file. Otherwise, Logtail cannot be started.
    
-   If you modify the file, you must restart Logtail for the modification to take effect. For more information, see [Start and stop Logtail](/help/en/sls/install-run-upgrade-and-uninstall-logtail#a1cd727db00rm).
    
-   By default, Logtail uses the HTTP protocol to communicate with the servers on control planes and data planes, and the HTTPS protocol to perform authentication with the servers.
    
    -   If you want to use the HTTPS protocol to communicate with the servers for security purposes, explicitly specify `https` for the `config_server_address` and `data_server_list.endpoint` parameters.
        
    -   If you use HTTPS to transmit data, the transmission latency increases. We recommend that you use it only when needed.
        

After Logtail is installed on a server, perform the following operations in the `ilogtail_config.json` file:

-   Modify the runtime parameters of Logtail.
    
-   Check whether the installation commands meet the requirements.
    
    The `config_server_address` and `data_server_list` values in `ilogtail_config.json` depend on your installation command choice. If their region doesn't match SLS's region or can't connect, the command is incorrect. Logtail won't be able to collect logs, and must be reinstalled.
    

-   File path
    
    -   Server environment
        
        **Operating system**
        
        **Logtail**
        
        **Path of the ilogtail\_config.json file**
        
        Linux
        
        Logtail (64-bit)
        
        /usr/local/ilogtail/ilogtail\_config.json
        
        Windows (64-bit)
        
        Logtail (64-bit)
        
        C:\\Program Files\\Alibaba\\Logtail\\ilogtail\_config.json
        
        Logtail (32-bit)
        
        C:\\Program Files (x86)\\Alibaba\\Logtail\\ilogtail\_config.json
        
        **Note**
        
        You can run 32- and 64-bit applications in a 64-bit Windows operating system. To ensure compatibility, the operating system stores 32-bit applications in a separate x86 directory.
        
        Windows (32-bit)
        
        Logtail (32-bit)
        
        C:\\Program Files\\Alibaba\\Logtail\\ilogtail\_config.json
        
    -   Container environment
        
        The `ilogtail_config.json` file is stored in a Logtail container. The file path is configured in the `ALIYUN_LOGTAIL_CONFIG` environment variable of the Logtail container. Run the `docker inspect ${logtail_container_name} | grep ALIYUN_LOGTAIL_CONFIG` command to view the file path. Example: /etc/ilogtail/conf/cn-hangzhou/ilogtail\_config.json.
        
-   File example
    
    ```
    $cat /usr/local/ilogtail/ilogtail_config.json
    {
        "config_server_address" : "http://logtail.cn-hangzhou-intranet.log.aliyuncs.com",
        "data_server_list" :
        [
            {
                "cluster" : "cn-hangzhou",
                "endpoint" : "cn-hangzhou-intranet.log.aliyuncs.com"
            }
        ],
        "cpu_usage_limit" : 0.4,
        "mem_usage_limit" : 100,
        "max_bytes_per_sec" : 2097152,
        "process_thread_count" : 1,
        "send_request_concurrency" : 4,
        "streamlog_open" : false
    }
    ```
    

### **User identifier file**

This file contains the ID of your Alibaba Cloud account. The file specifies that the account is authorized to access the server on which Logtail is installed, and to collect logs from the server. For more information, see [Configure a user identifier](/help/en/sls/machine-group-overview#5427758ed45tr).

**Important**

-   User identifier must be configured to collect logs from an ECS instance belonging to another Alibaba Cloud account, a server in a self-managed data center, or a server provided by another cloud service provider.
    
-   You must use an Alibaba Cloud account ID, not a RAM user ID, as a user identifier.
    
-   Specify the name of the file, but not its extension.
    
-   A server can have multiple user identifiers, but a Logtail container can have only one.
    

-   File path
    
    -   Server environment
        
        -   Linux: /etc/ilogtail/users/.
            
        -   Windows: C:\\LogtailData\\users\\.
            
    -   Container environment
        
        The user identifier is saved in the `ALIYUN_LOGTAIL_USER_ID` environment variable of the Logtail container. Run the `docker inspect ${logtail_container_name} | grep ALIYUN_LOGTAIL_USER_ID` command to view it.
        
-   File example
    
    ```
    $ls /etc/ilogtail/users/
    ```
    

### **Custom identifier file (user\_defined\_id)**

The `user_defined_id` file is used to configure a custom identifier. For more information, see [Create a custom identifier-based machine group](/help/en/sls/machine-group-overview#117759c17b2pz).

**Important**

When you create a custom identifier-based machine group, you must configure the user\_defined\_id file.

-   File path
    
    -   Host environment
        
        -   Linux: /etc/ilogtail/user\_defined\_id.
            
        -   Windows: C:\\LogtailData\\user\_defined\_id.
            
    -   Container environment
        
        The custom identifier is configured in the `ALIYUN_LOGTAIL_USER_DEFINED_ID` environment variable of the Logtail container. Run the `docker inspect ${logtail_container_name} | grep ALIYUN_LOGTAIL_USER_DEFINED_ID` command to view it.
        
-   File example
    
    ```
    $cat /etc/ilogtail/user_defined_id
    aliyun-ecs-rs1e16355
    ```
    

### **Logtail configuration file (user\_log\_config.json)**

The `user_log_config.json` file records the Logtail configuration information obtained from Simple Log Service. The file is in JSON format and is updated synchronously each time the Logtail configuration is updated. Use the file to check whether the Logtail configuration is delivered to the server. If the Logtail configuration file exists and its content is consistent with the Logtail configuration in Simple Log Service, the Logtail configuration is delivered.

**Important**

Do not modify the Logtail configuration file unless you need to specify sensitive information, such as your AccessKey pair and database password.

-   File path
    
    -   Host environment
        
        **Operating system**
        
        **Logtail**
        
        **Path of the user\_log\_config.json file**
        
        Linux
        
        Logtail (64-bit)
        
        /usr/local/ilogtail/user\_log\_config.json
        
        Windows (64-bit)
        
        Logtail (64-bit)
        
        C:\\Program Files\\Alibaba\\Logtail\\user\_log\_config.json
        
        Logtail (32-bit)
        
        C:\\Program Files (x86)\\Alibaba\\Logtail\\user\_log\_config.json
        
        **Note**
        
        You can run 32- and 64-bit applications in a 64-bit Windows operating system. To ensure compatibility, the operating system stores 32-bit applications in a separate x86 directory.
        
        Windows (32-bit)
        
        Logtail (32-bit)
        
        C:\\Program Files\\Alibaba\\Logtail\\user\_log\_config.json
        
    -   Container environment
        
        The user\_log\_config.json file is stored in a Logtail container. The file path is /usr/local/ilogtail/user\_log\_config.json.
        
-   File example
    
    ```
    $cat /usr/local/ilogtail/user_log_config.json
    {
       "metrics" : {
          "##1.0##k8s-log-c12ba2028*****939f0b$app-java" : {
             "aliuid" : "16542189*****50",
             "category" : "app-java",
             "create_time" : 1534739165,
             "defaultEndpoint" : "cn-hangzhou-intranet.log.aliyuncs.com",
             "delay_alarm_bytes" : 0,
             "enable" : true,
             "enable_tag" : true,
             "filter_keys" : [],
             "filter_regs" : [],
             "group_topic" : "",
             "local_storage" : true,
             "log_type" : "plugin",
             "log_tz" : "",
             "max_send_rate" : -1,
             "merge_type" : "topic",
             "plugin" : {
                "inputs" : [
                   {
                      "detail" : {
                         "IncludeEnv" : {
                            "aliyun_logs_app-java" : "stdout"
                         },
                         "IncludeLable" : {
                            "io.kubernetes.container.name" : "java-log-demo-2",
                            "io.kubernetes.pod.namespace" : "default"
                         },
                         "Stderr" : true,
                         "Stdout" : true
                      },
                      "type" : "service_docker_stdout"
                   }
                ]
             },
             "priority" : 0,
             "project_name" : "k8s-log-c12ba2028c*****ac1286939f0b",
             "raw_log" : false,
             "region" : "cn-hangzhou",
             "send_rate_expire" : 0,
             "sensitive_keys" : [],
             "tz_adjust" : false,
             "version" : 1
          }
       }
    }
    ```
    

### **AppInfo record file (app\_info.json)**

The `app_info.json` file records the information about Logtail, such as the startup time, obtained IP address, and hostname.

If the server's IP address is mapped to a hostname in `/etc/hosts`, Logtail gets the IP address directly. Otherwise, it uses the IP address of the first NIC on the server.

**Important**

-   The `app_info.json` file records only the basic information about Logtail. If you modify the file, the IP address obtained by Logtail does not change.
    
-   If you modify the hostname or other network settings of the server, you must restart Logtail to obtain a new IP address.
    

-   File path
    
    -   Host environment
        
        **Operating system**
        
        **Logtail**
        
        **Path of the app\_info.json file**
        
        Linux
        
        Logtail (64-bit)
        
        /usr/local/ilogtail/app\_info.json
        
        Windows (64-bit)
        
        Logtail (64-bit)
        
        C:\\Program Files\\Alibaba\\Logtail\\app\_info.json
        
        Logtail (32-bit)
        
        C:\\Program Files (x86)\\Alibaba\\Logtail\\app\_info.json
        
        **Note**
        
        You can run 32- and 64-bit applications in a 64-bit Windows operating system. To ensure compatibility, the operating system stores 32-bit applications in a separate x86 directory.
        
        Windows (32-bit)
        
        Logtail (32-bit)
        
        C:\\Program Files\\Alibaba\\Logtail\\app\_info.json
        
    -   Container environment
        
        The `app_info.json` file is stored in a Logtail container. The file path is `/usr/local/ilogtail/app_info.json`.
        
-   File example
    
    ```
    $cat /usr/local/ilogtail/app_info.json
    {
       "UUID" : "",
       "hostname" : "logtail-ds-slpn8",
       "instance_id" : "E5F93BC6-B024-11E8-8831-0A58AC14039E_1**.***.***.***_1536053315",
       "ip" : "1**.***.***.***",
       "logtail_version" : "0.16.13",
       "os" : "Linux; 3.10.0-693.2.2.el7.x86_64; #1 SMP Tue Sep 12 22:26:13 UTC 2017; x86_64",
       "update_time" : "2018-09-04 09:28:36"
    }
    ```
    
    **Field**
    
    **Description**
    
    UUID
    
    The serial number of the server.
    
    hostname
    
    The hostname.
    
    instance\_id
    
    The unique identifier of Logtail. The identifier is randomly generated.
    
    ip
    
    The IP address obtained by Logtail. If absent, this field is empty, and Logtail won't function properly. Specify an IP address for the server and restart Logtail.
    
    **Note**
    
    Ensure the specified IP address for the machine group matches this field's value. If they do not match, verify the correct value, and either update the IP address for the machine group in the SLS console or modify `working_ip` in [Logtail startup parameters](#5dbc2cc062rnz).
    
    logtail\_version
    
    The version of Logtail.
    
    os
    
    The version of the operating system.
    
    update\_time
    
    The last startup time of Logtail.
    

### **Logtail operational log (ilogtail.LOG)**

The `ilogtail.LOG` file records the operational logs of Logtail. The levels of logs in ascending order are INFO, WARN, and ERROR. You can ignore logs at the INFO level.

If a log collection error occurs, [troubleshoot using the error type and Logtail logs](/help/en/sls/user-guide/how-do-i-view-logtail-collection-errors#undefined).

**Note**

If you submit a [ticket](https://smartservice.console.alibabacloud.com/console.htm?spm=a2796.7919406.0.dcontactus3.676a2d23RjosdV#/ticket/add/?productId=1210) due to a Logtail collection error, upload the log file to the ticket.

-   File path
    
    -   Server environment
        
        **Operating system**
        
        **Logtail**
        
        **Path of the ilogtail.LOG file**
        
        Linux
        
        Logtail (64-bit)
        
        /usr/local/ilogtail/ilogtail.LOG
        
        Windows (64-bit)
        
        Logtail (64-bit)
        
        C:\\Program Files\\Alibaba\\Logtail\\ilogtail.LOG
        
        Logtail (32-bit)
        
        C:\\Program Files (x86)\\Alibaba\\Logtail\\ilogtail.LOG
        
        **Note**
        
        You can run 32- and 64-bit applications in a 64-bit Windows operating system. To ensure compatibility, the operating system stores 32-bit applications in a separate x86 directory.
        
        Windows (32-bit)
        
        Logtail (32-bit)
        
        C:\\Program Files\\Alibaba\\Logtail\\ilogtail.LOG
        
    -   Container environment:
        
        The ilogtail.LOG file is stored in a Logtail container. The file path is /usr/local/ilogtail/ilogtail.LOG.
        
-   File example
    
    ```
    $tail /usr/local/ilogtail/ilogtail.LOG
    [2018-09-13 01:13:59.024679]    [INFO]    [3155]    [build/release64/sls/ilogtail/elogtail.cpp:123]    change working dir:/usr/local/ilogtail/
    [2018-09-13 01:13:59.025443]    [INFO]    [3155]    [build/release64/sls/ilogtail/AppConfig.cpp:175]    load logtail config file, path:/etc/ilogtail/conf/ap-southeast-1/ilogtail_config.json
    [2018-09-13 01:13:59.025460]    [INFO]    [3155]    [build/release64/sls/ilogtail/AppConfig.cpp:176]    load logtail config file, detail:{
       "config_server_address" : "http://logtail.ap-southeast-1-intranet.log.aliyuncs.com",
       "data_server_list" : [
          {
             "cluster" : "ap-southeast-1",
             "endpoint" : "ap-southeast-1-intranet.log.aliyuncs.com"
          }
    ]
    ```
    

### **Logtail plug-in log (logtail\_plugin.LOG)**

The `logtail_plugin.LOG` file records the operational logs of Logtail plugins. The levels of logs in ascending order are INFO, WARN, and ERROR. You can ignore logs at the INFO level.

If the **CANAL\_RUNTIME\_ALARM** error appears during diagnosis, troubleshoot using this file.

**Note**

If you submit a [ticket](https://smartservice.console.alibabacloud.com/console.htm?spm=a2796.7919406.0.dcontactus3.676a2d23RjosdV#/ticket/add/?productId=1210) due to a plugin error, upload the file to the ticket.

-   File path
    
    -   Server environment
        
        **Operating system**
        
        **Logtail**
        
        **Path of the logtail\_plugin.LOG file**
        
        Linux
        
        Logtail (64-bit)
        
        /usr/local/ilogtail/logtail\_plugin.LOG
        
        Windows (64-bit)
        
        Logtail (64-bit)
        
        C:\\Program Files\\Alibaba\\Logtail\\logtail\_plugin.LOG
        
        Logtail (32-bit)
        
        C:\\Program Files (x86)\\Alibaba\\Logtail\\logtail\_plugin.LOG
        
        **Note**
        
        You can run 32- and 64-bit applications in a 64-bit Windows operating system. To ensure compatibility, the operating system stores 32-bit applications in a separate x86 directory.
        
        Windows (32-bit)
        
        Logtail (32-bit)
        
        C:\\Program Files\\Alibaba\\Logtail\\logtail\_plugin.LOG
        
    -   Container environment
        
        The `logtail_plugin.LOG` file is stored in a Logtail container. The file path is `/usr/local/ilogtail/logtail_plugin.LOG`.
        
-   File example
    
    ```
    $tail /usr/local/ilogtail/logtail_plugin.LOG
    2018-09-13 02:55:30 [INF] [docker_center.go:525] [func1] docker fetch all:start
    2018-09-13 02:55:30 [INF] [docker_center.go:529] [func1] docker fetch all:stop
    2018-09-13 03:00:30 [INF] [docker_center.go:525] [func1] docker fetch all:start
    2018-09-13 03:00:30 [INF] [docker_center.go:529] [func1] docker fetch all:stop
    2018-09-13 03:03:26 [INF] [log_file_reader.go:221] [ReadOpen] [##1.0##sls-zc-test-hz-pub$docker-stdout-config,k8s-stdout]    open file for read, file:/logtail_host/var/lib/docker/containers/7f46afec6a14de39b59ee9cdfbfa8a70c2fa26f1148b2e2f31bd3410f5b2d624/7f46afec6a14de39b59ee9cdfbfa8a70c2fa26f1148b2e2f31bd3410f5b2d624-json.log    offset:40379573    status:794354-64769-40379963
    2018-09-13 03:03:26 [INF] [log_file_reader.go:221] [ReadOpen] [##1.0##k8s-log-c12ba2028cfb444238cd9ac1286939f0b$docker-stdout-config,k8s-stdout]    open file for read, file:/logtail_host/var/lib/docker/containers/7f46afec6a14de39b59ee9cdfbfa8a70c2fa26f1148b2e2f31bd3410f5b2d624/7f46afec6a14de39b59ee9cdfbfa8a70c2fa26f1148b2e2f31bd3410f5b2d624-json.log    offset:40379573    status:794354-64769-40379963
    2018-09-13 03:04:26 [INF] [log_file_reader.go:308] [CloseFile] [##1.0##sls-zc-test-hz-pub$docker-stdout-config,k8s-stdout]    close file, reason:no read timeout    file:/logtail_host/var/lib/docker/containers/7f46afec6a14de39b59ee9cdfbfa8a70c2fa26f1148b2e2f31bd3410f5b2d624/7f46afec6a14de39b59ee9cdfbfa8a70c2fa26f1148b2e2f31bd3410f5b2d624-json.log    offset:40379963    status:794354-64769-40379963
    2018-09-13 03:04:27 [INF] [log_file_reader.go:308] [CloseFile] [##1.0##k8s-log-c12ba2028cfb444238cd9ac1286939f0b$docker-stdout-config,k8s-stdout]    close file, reason:no read timeout    file:/logtail_host/var/lib/docker/containers/7f46afec6a14de39b59ee9cdfbfa8a70c2fa26f1148b2e2f31bd3410f5b2d624/7f46afec6a14de39b59ee9cdfbfa8a70c2fa26f1148b2e2f31bd3410f5b2d624-json.log    offset:40379963    status:794354-64769-40379963
    2018-09-13 03:05:30 [INF] [docker_center.go:525] [func1] docker fetch all:start
    2018-09-13 03:05:30 [INF] [docker_center.go:529] [func1] docker fetch all:stop
    ```
    

### **Container path mapping file (docker\_path\_config.json)**

The `docker_path_config.json` file is created only when you collect container logs. The file records the path mappings between container log files and host log files.

If the **DOCKER\_FILE\_MAPPING\_ALARM** error appears during diagnosis, troubleshoot using this file.

**Note**

-   The `docker_path_config.json` file is a record file, and changes to it don't apply. If you delete it, it will be automatically recreated without interrupting service.
    
-   If you submit a [ticket](https://smartservice.console.alibabacloud.com/console.htm?spm=a2796.7919406.0.dcontactus3.676a2d23RjosdV#/ticket/add/?productId=1210) due to an exception during container log collection, upload this file to the ticket.
    

-   File path
    
    `/usr/local/ilogtail/docker_path_config.json`
    
-   File example
    
    ```
    $cat /usr/local/ilogtail/docker_path_config.json
    {
       "detail" : [
          {
             "config_name" : "##1.0##k8s-log-c12ba2028cfb444238cd9ac1286939f0b$nginx",
             "container_id" : "df19c06e854a0725ea7fca7e0378b0450f7bd3122f94fe3e754d8483fd330d10",
             "params" : "{\n   \"ID\" : \"df19c06e854a0725ea7fca7e0378b0450f7bd3122f94fe3e754d8483fd330d10\",\n   \"Path\" : \"/logtail_host/var/lib/docker/overlay2/947db346695a1f65e63e582ecfd10ae1f57019a1b99260b6c83d00fcd1892874/diff/var/log\",\n   \"Tags\" : [\n      \"nginx-type\",\n      \"access-log\",\n      \"_image_name_\",\n      \"registry.cn-hangzhou.aliyuncs.com/log-service/docker-log-test:latest\",\n      \"_container_name_\",\n      \"nginx-log-demo\",\n      \"_pod_name_\",\n      \"nginx-log-demo-h2lzc\",\n      \"_namespace_\",\n      \"default\",\n      \"_pod_uid_\",\n      \"87e56ac3-b65b-11e8-b172-00163f008685\",\n      \"_container_ip_\",\n      \"172.20.4.224\",\n      \"purpose\",\n      \"test\"\n   ]\n}\n"
          } 
       ],
       "version" : "0.1.0"
    }
    ```

In containerized environments, application logs are spread across the standard output and log files of different Docker containers, making management and retrieval challenging. Use LoongCollector from Simple Log Service (SLS) to gather logs from multiple nodes into one logstore. This allows for centralized storage, structured parsing, data masking, filtering, and efficient querying and analysis.

## **Usage notes**

-   **Permission requirements:** The Alibaba Cloud account or RAM user that you use for deployment must have the `AliyunLogFullAccess` permission.
    
-   **Docker version and LoongCollector requirements:**
    
    -   If your Docker Engine version is **29.0 or later**, or if the minimum supported Docker API version is **1.42 or later**, you must use **LoongCollector 3.2.4 or later**. Otherwise, LoongCollector cannot collect standard container outputs or file logs.
        
    -   LoongCollector versions **3.2.4 and later** support Docker API versions from **1.24 to 1.48**.
        
    -   LoongCollector versions **3.2.3 and earlier** support Docker API versions from **1.18 to 1.41**.
        
-   **Limits on collecting standard output:**
    
    -   You must add `"log-driver": "json-file"` to the Docker configuration file, daemon.json.
        
    -   For CentOS 7.4 and later versions, excluding CentOS 8.0, you must set `fs.may_detach_mounts=1`.
        
-   **Text log collection limitations:** Only the overlay and overlay2 storage drivers are supported. For other driver types, you must mount the log directory manually.
    

## **Process for creating a collection configuration**

1.  **[Preparations](#c851a560a1r6z)****:** Create a project and a logstore. A project is a resource management unit that is used to isolate logs from different applications, and a logstore is used to store logs.
    
2.  **[Configure a machine group (install LoongCollector)](#d4494a21475no)****:** Install LoongCollector on the servers where you want to collect logs and add the servers to a machine group. Use machine groups to centrally manage collection nodes, distribute configurations, and manage server status.
    
3.  **[Create and configure log collection rules](#3112e575a2o5h)**
    
    1.  **[Global and input configuration](#231059bba4ah9)**: Define the name of the collection configuration, and the source and scope of the log collection.
        
    2.  **[Log processing and structuring](#08406a8026mo8)**: Configure processing rules based on the log format.
        
        -   Multi-line logs: This applies to single logs that span multiple lines, such as Java exception stacks or Python tracebacks. You must use a regular expression to identify the start of each log.
            
        -   Structured parsing: Configure parsing plugins, such as the regular expression, separator, or NGINX mode plugin, to extract raw strings into structured key-value pairs. This facilitates subsequent queries and analysis.
            
    3.  **[Log filtering](#ea8fb78dadgai)**: Configure collection blacklists and content filtering rules to screen for valid log content. This practice reduces the transmission and storage of redundant data.
        
    4.  **[Log categorization](#28b33e9dd4b2y)**: Configure topics and log tags to flexibly distinguish logs from different applications, containers, or path sources.
        
4.  **[Query and analysis configuration](#3f32235bf71qt)**: The system enables full-text index by default, which supports keyword searches. We recommend that you enable field index for precise queries and analysis of structured fields to improve search efficiency.
    
5.  **[Validation and troubleshooting](#42731966a6exw)**: After you complete the configuration, verify that logs are collected successfully. If you encounter issues such as no data being collected, heartbeat failures, or parsing errors, see the [FAQ](#81b57c81fe0ls) section.
    

## **Preparations**

Before you collect logs, you must plan and create a project and a logstore to manage and store the logs. If you already have the required resources, skip this step and proceed to [Step 1: Configure a machine group (install LoongCollector)](#d4494a21475no).

#### **Create a project**

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com/).
    
2.  Click **Create Project** and configure the following parameters:
    
    -   **Region**: Select the region based on the log source. This parameter cannot be changed after the project is created.
        
    -   **Project Name**: The project name must be globally unique within Alibaba Cloud and cannot be changed after the project is created.
        
    -   Retain the default settings for the other parameters and click **Create**. For more information about the other parameters, see [Create a project](/help/en/sls/manage-a-project/#89b98c40c765r).
        

#### **Create a logstore**

1.  Click the name of the project.
    
2.  In the navigation pane on the left, choose ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3359329571/p1013781.png)**Log Storage** and click **+**.
    
3.  On the Create logstore page, configure the following core parameters:
    
    -   **Logstore Name**: Enter a name that is unique within the project. This name cannot be changed after the logstore is created.
        
    -   **Logstore Type**: Select Standard or Query based on a comparison of the specifications.
        
    -   **Billing Mode**:
        
        -   **Pay-by-feature**: Billed independently for resources such as storage, indexing, and read/write operations. This mode is suitable for small-scale scenarios or when feature usage is uncertain.
            
        -   **Pay-by-ingested-data**: Billed only for the amount of raw data that is written. This mode provides 30 days of free storage and free features such as data transformation and delivery. This mode is suitable for business scenarios in which the storage period is close to 30 days or the data processing pipeline is complex.
            
    -   **Data Retention Period**: Specify the number of days to retain logs. Valid values: 1 to 3650. A value of 3650 indicates permanent storage. The default value is 30.
        
    -   Retain the default settings for the other parameters and click **OK**. For more information about the other parameters, see [Manage a Logstore](/help/en/sls/manage-a-logstore).
        

## **Step 1: Configure a machine group (install LoongCollector)**

Deploy LoongCollector as a container on the Docker host and add the host to a machine group. Use the machine group to centrally manage multiple collection nodes, distribute configurations, and monitor status.

1.  **Pull the image**
    
    On a host that has Docker installed, run the following command to pull the LoongCollector image. Replace `${region_id}` with the [region ID](#46ebf58207utn) of the host or a nearby region, such as `cn-hangzhou`, to improve download speed and stability.
    
    ```
    # LoongCollector image address
    docker pull aliyun-observability-release-registry.${region_id}.cr.aliyuncs.com/loongcollector/loongcollector:v3.0.12.0-25723a1-aliyun
    
    # Logtail image address
    docker pull registry.${region_id}.aliyuncs.com/log-service/logtail:v2.1.11.0-aliyun
    ```
    
2.  **Start the LoongCollector container**
    
    Run the following command to start the container. Make sure that you correctly mount the directories and set the required environment variables:
    
    ```
    docker run -d \
        -v /:/logtail_host:ro \
        -v /var/run/docker.sock:/var/run/docker.sock \
        --env ALIYUN_LOGTAIL_CONFIG=/etc/ilogtail/conf/${sls_upload_channel}/ilogtail_config.json \
        --env ALIYUN_LOGTAIL_USER_ID=${aliyun_account_id} \
        --env ALIYUN_LOGTAIL_USER_DEFINED_ID=${user_defined_id} \
        aliyun-observability-release-registry.${region_id}.cr.aliyuncs.com/loongcollector/loongcollector:v3.0.12.0-25723a1-aliyun
    ```
    
    Parameter description:
    
    -   `${sls_upload_channel}`: The log upload channel. The format is **Project** [**Region**](#46ebf58207utn)**\-Network Transfer Type**. Example:
        
        **Transfer type**
        
        **Configuration value format**
        
        **Example**
        
        **Scenarios**
        
        Internal network transfer
        
        `regionId`
        
        `cn-hangzhou`
        
        The ECS instance and the project are in the same region.
        
        Internet transfer
        
        `regionId-internet`
        
        `cn-hangzhou-internet`
        
        -   The ECS instance and the project are in different regions.
            
        -   The server is from another cloud provider or a self-built data center.
            
        
        Transfer acceleration
        
        `regionId-acceleration`
        
        `cn-hangzhou-acceleration`
        
        Cross-region communication within and outside China.
        
    -   `${aliyun_account_id}`: The Alibaba Cloud account ID.
        
    -   `${user_defined_id}`: The custom ID of the machine group. This ID is used to bind the machine group. For example, use `user-defined-docker-1`. The ID must be unique within the region.
        
        **Important**
        
        The following startup conditions must be met:
        
        -   The three key environment variables are correctly configured:
            
            `ALIYUN_LOGTAIL_CONFIG`, `ALIYUN_LOGTAIL_USER_ID`, and `ALIYUN_LOGTAIL_USER_DEFINED_ID`.
            
        -   The `/var/run/docker.sock` directory is mounted. This directory is used to listen for container lifecycle events.
            
        -   The root directory `/` is mounted to `/logtail_host`. This is used to access the host file system.
            
        
3.  **Verify the running status of the container**
    
    ```
    docker ps | grep loongcollector
    ```
    
    Expected output example:
    
    ```
    6ad510001753   aliyun-observability-release-registry.cn-beijing.cr.aliyuncs.com/loongcollector/loongcollector:v3.0.12.0-25723a1-aliyun   "/usr/local/ilogtail…"   About a minute ago   Up About a minute             recursing_shirley
    ```
    
4.  **Configure the machine group**
    
    In the navigation pane on the left, choose **![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0229056571/p1000897.png)Resources** > **Machine Groups**, click **![机器组](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0229056571/p1000896.png)** > **Create Machine Group**, configure the following parameters, and click **OK**:
    
    -   **Name**: Enter a custom name for the machine group, such as `docker-host-group`.
        
    -   **Machine Group Identifier**: Select **Custom Identifier**.
        
    -   **Custom Identifier**: Enter the `${user_defined_id}` that you set when you started the container. **The ID must be an exact match. Otherwise, the association fails.**
        
5.  **Verify the machine group heartbeat status**
    
    Click the name of the new machine group to go to the details page and check the **Machine Group Status**:
    
    -   **OK:** Indicates that LoongCollector is connected to SLS.
        
    -   **FAIL:** For more information about how to troubleshoot the issue, see [Troubleshoot heartbeat errors](/help/en/sls/troubleshooting-of-abnormal-heartbeat-problems).
        

## **Step 2: Create and configure log collection rules**

Define which logs LoongCollector collects, how to parse their structure, how to filter content, and how to bind the configuration to the registered machine group.

1.  On the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7574404571/p992524.png)Logstores page, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8096561571/p970744.png) icon next to the name of the target logstore.
    
2.  Click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8096561571/p978728.png) next to **Data Collection**. In the **Quick Data Import** dialog box, select a template based on the log source and click **Integrate Now**.
    
    -   Docker standard output: Select **Docker Stdout and Stderr - New Version**.
        
        > Two templates, a new version and an old version, are available for collecting container standard output. We recommend that you use the new version. For more information about the differences between the new and old versions, see [Appendix: Comparison of old and new versions of container standard output](#d3fb7a82d3ec0). To use the old version for collection, see [Collect standard output from Docker containers (Old version)](/help/en/sls/collect-docker-container-standard-output).
        
    -   Docker file logs: Select **Docker File - Container**.
        
3.  Configure the **Machine Group** and click **Next**.
    
    -   **Scenario**: Select **Docker Containers**.
        
    -   Move the machine group that you created in [Step 1](#d4494a21475no) from the source machine group list to the applied machine group list.
        
4.  On the **Logtail Configuration** page, configure the following parameters and click **Next**.
    

### **1\. Global and input configurations**

Before you start, make sure that you selected a data import template and bound the machine group. In this step, define the name of the collection configuration, the log source, and the collection scope.

## **Collect Docker standard output**

**Global Configurations**

-   **Configuration Name**: Enter a custom name for the collection configuration. The name must be unique within the project and cannot be changed after the configuration is created. The name must meet the following conventions:
    
    -   Can contain only lowercase letters, digits, hyphens (-), and underscores (\_).
        
    -   Must start and end with a lowercase letter or a digit.
        

**Input Configurations**

-   Turn on the **Stdout and Stderr** or **Standard Error** switch. Both switches are turned on by default.
    
    **Important**
    
    We recommend that you do not enable both standard output and standard error at the same time because this may cause confusion in the collected logs.
    

## **Collect Docker container text logs**

**Global Configurations**:

-   **Configuration Name**: Enter a custom name for the collection configuration. The name must be unique within the project and cannot be changed after the configuration is created. The name must meet the following conventions:
    
    -   Can contain only lowercase letters, digits, hyphens (-), and underscores (\_).
        
    -   Must start and end with a lowercase letter or a digit.
        

**Input Configurations**:

-   **File Path Type**:
    
    -   **Path in Container**: Collect log files from within the container.
        
    -   **Host Path**: Collect logs from local services on the host.
        
-   **File Path**: The absolute path of the log file to be collected.
    
    -   Linux: The path must start with a forward slash (\`/\`). For example, `/data/mylogs/**/*.log` indicates all files that have the .log extension in the `/data/mylogs` directory.
        
    -   Windows: The path must start with a drive letter. For example, `C:\Program Files\Intel\**\*.Log`.
        
-   **Maximum Directory Monitoring Depth**: The maximum directory depth that the wildcard character `**` can match in the **File Path**. The default value is 0, which indicates the current directory. The value can range from 0 to 1000.
    
    > We recommend that you set this parameter to 0 and configure the path to the directory that contains the file.
    

### **2\. Log processing and structuring**

Configure log processing rules to transform raw, unstructured logs into structured data. This improves the efficiency of log queries and analysis. We recommend that you add a log sample before you configure the rules:

In the **Processor Configurations** section of the **Logtail Configuration** page, click **Add Log Sample** and enter the content of the log to be collected. The system identifies the log format based on the sample and helps you generate regular expressions and parsing rules. This simplifies the configuration.

#### **Scenario 1: Multi-line log processing (such as Java stack logs)**

Logs such as Java exception stacks and JSON objects often span multiple lines. In the default collection mode, these logs are split into multiple incomplete records, which leads to a loss of context. To address this issue, enable multi-line collection mode and configure a regular expression for the start of a line to merge consecutive lines of the same log into a single, complete log entry.

**Example effect:**

**Raw log without any processing**

**In default collection mode, each line is treated as an independent log, breaking up the stack information and losing context**

**With multi-line mode enabled, a regular expression for the start of a line identifies the complete log, preserving the full semantic structure.**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2285043671/p1026282.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2285043671/p1026283.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2285043671/p1026284.png)

**Configuration:** In the **Processor Configurations** section of the **Logtail Configuration** page, turn on **Multi-line Mode**:

-   **Type**: Select **Custom** or **Multi-line JSON**.
    
    -   **Custom**: The format of the raw log is not fixed. You must configure a **Regex to Match First Line** to identify the starting line of each log entry.
        
        -   **Regex to Match First Line**: Supports automatic generation or manual input. The regular expression must match a complete line of data. For example, the matching regular expression in the preceding example is `\[\d+-\d+-\w+:\d+:\d+,\d+]\s\[\w+]\s.*`.
            
            -   Automatic generation: Click **Generate**. Then, in the **Log Sample** text box, select the log content to be extracted and click **Automatically Generate**.
                
            -   Manual input: Click **Manually Enter Regular Expression**. After you enter the expression, click **Validate**.
                
    -   **Multi-line JSON**: If the raw logs are all in standard JSON format, SLS automatically handles line breaks within a single JSON log.
        

-   **Processing Method If Splitting Fails**:
    
    -   **Discard**: If a piece of text does not match the start-of-line rule, it is discarded.
        
    -   **Retain Single Line**: The unmatched text is chunked and retained in the original single-line mode.
        

#### **Scenario 2: Structured logging**

If raw logs are unstructured or semi-structured text, such as NGINX access logs or application output logs, direct querying and analysis are often inefficient. SLS provides a variety of data parsing plugins that can automatically convert raw logs of different formats into structured data. This provides a solid data foundation for subsequent analysis, monitoring, and alerting.

**Example effect:**

**Raw Logs**

**Parsed logs**

```
192.168.*.* - - [15/Apr/2025:16:40:00 +0800] "GET /nginx-logo.png HTTP/1.1" 0.000 514 200 368 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.*.* Safari/537.36"
```

```
body_bytes_sent: 368
http_referer: -
http_user_agent : Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.x.x Safari/537.36
remote_addr:192.168.*.*
remote_user: -
request_length: 514
request_method: GET
request_time: 0.000
request_uri: /nginx-logo.png
status: 200
time_local: 15/Apr/2025:16:40:00
```

**Configuration steps:** In the **Processor Configurations** section of the **Logtail Configuration** page:

1.  **Add a parsing plugin:** Click **Add Processor** and configure a [plugin such as regular expression parsing, separator parsing, or JSON parsing](#77651c5f95ibm) that matches the log format. For example, to collect NGINX logs, select **Native Processor** > **Data Parsing (NGINX Mode)**.
    
2.  **NGINX Log Configuration**: Copy the complete `log_format` definition from the NGINX server configuration file (nginx.conf) and paste it into this text box.
    
    Example:
    
    ```
    log_format main  '$remote_addr - $remote_user [$time_local] "$request" ''$request_time $request_length ''$status $body_bytes_sent "$http_referer" ''"$http_user_agent"';
    ```
    
    **Important**
    
    The format definition must be exactly the same as the format that is used to generate the logs on the server. Otherwise, log parsing fails.
    
3.  **Common parameters:** The following parameters appear in multiple data parsing plugins. Their functions and usage are consistent.
    
    -   **Original Field:** The name of the source field to be parsed. The default value is `content`, which indicates the entire collected log content.
        
    -   **Retain Original Field if Parsing Fails:** We recommend that you turn on this switch. If a log fails to be parsed by the plugin due to a format mismatch, this option ensures that the original log content is not lost and is retained in the specified raw field.
        
    -   **Retain Original Field if Parsing Succeeds:** If you select this option, the original log content is retained even if the log is successfully parsed.
        

### **3\. Log filtering**

During log collection, indiscriminately collecting large amounts of low-value or irrelevant logs, such as DEBUG- or INFO-level logs, wastes storage resources, increases costs, affects query efficiency, and poses data breach risks. To address these issues, implement fine-grained filtering strategies for efficient and secure log collection.

## **Reduce costs through content filtering**

Filter logs based on field content. For example, collect only logs of the WARNING or ERROR level.

**Example effect:**

**Raw log without any processing**

**Collect only** `**WARNING**` **or** `**ERROR**` **logs**

```
{"level":"WARNING","timestamp":"2025-09-23T19:11:40+0800","cluster":"yilu-cluster-0728","message":"Disk space is running low","freeSpace":"15%"}
{"level":"ERROR","timestamp":"2025-09-23T19:11:42+0800","cluster":"yilu-cluster-0728","message":"Failed to connect to database","errorCode":5003}
{"level":"INFO","timestamp":"2025-09-23T19:11:47+0800","cluster":"yilu-cluster-0728","message":"User logged in successfully","userId":"user-123"}
```

```
{"level":"WARNING","timestamp":"2025-09-23T19:11:40+0800","cluster":"yilu-cluster-0728","message":"Disk space is running low","freeSpace":"15%"}
{"level":"ERROR","timestamp":"2025-09-23T19:11:42+0800","cluster":"yilu-cluster-0728","message":"Failed to connect to database","errorCode":5003}
```

**Configuration steps:** In the **Processor Configurations** section of the **Logtail Configuration** page:

Click **Add Processor** and select **Native Processor** > ****Data Filtering****:

-   **Field Name**: The log field to be used for filtering.
    
-   **Field Value**: The regular expression to be used for filtering. Only full-text matching is supported. Partial keyword matching is not supported.
    

## **Control collection scope with a blacklist**

Use a blacklist to exclude specified directories or files. This prevents irrelevant or sensitive logs from being uploaded.

**Configuration steps:** In the **Input Configurations** section of the **Logtail Configuration** page, enable **Collection Blacklist** and click **Add**.

> Full matching and wildcard matching are supported for directories and filenames. The supported wildcard characters are the asterisk (\`\*\`) and the question mark (\`?\`).

-   **File Path Blacklist**: The file paths to be ignored. Example:
    
    -   `/home/admin/private*.log`: Ignores all files in the `/home/admin/` directory that start with "private" and end with ".log" during collection.
        
    -   `/home/admin/private*/*_inner.log`: Ignores files that end with "\_inner.log" in directories that start with "private" under the `/home/admin/` directory during collection.
        
-   **File Blacklist**: The filenames to be ignored during collection. Example:
    
    -   `app_inner.log`: Ignores all files named `app_inner.log` during collection.
        
-   **Directory Blacklist**: The directory path cannot end with a forward slash (\`/\`). Example:
    
    -   `/home/admin/dir1/`: The directory blacklist does not take effect.
        
    -   `/home/admin/dir*`: Ignores files in all subdirectories of the `/home/admin/` directory that start with "dir" during collection.
        
    -   `/home/admin/*/dir`: Ignores all files in subdirectories named "dir" at the second level of the `/home/admin/` directory during collection. For example, files in the `/home/admin/a/dir` directory are ignored, while files in the `/home/admin/a/b/dir` directory are collected.
        

## Container filtering

Set collection conditions based on container metadata, such as environment variables, pod labels, namespaces, and container names, to precisely control which containers' logs are collected.

**Configuration steps:** In the **Processor Configurations** section of the **Logtail Configuration** page, enable **Container Filtering** and click **Add**.

> Multiple conditions are combined using the AND logical operator. All regular expression matching is based on the RE2 regular expression engine of Go, which has some limitations compared with engines such as PCRE. When you write regular expressions, follow the limits described in [Appendix: Regular expression limits (container filtering)](#4ff2ac681ds0w).

-   Environment Variable Blacklist/Whitelist: Specify the environment variable conditions for the containers from which you want to collect logs.
    
-   K8s Pod Label Blacklist/Whitelist: Specify the label conditions for the pods where the containers to be collected are located.
    
-   K8s Pod Name Regular Matching: Specify the containers to be collected by pod name.
    
-   K8s Namespace Regular Matching: Specify the containers to be collected by namespace name.
    
-   K8s Container Name Regular Matching: Specify the containers to be collected by container name.
    
-   Container Label Blacklist/Whitelist: Collect logs from containers whose labels meet the specified conditions. This parameter is used in Docker scenarios and is not recommended for Kubernetes scenarios.
    

### **4\. Log categorization**

In scenarios where multiple applications or instances share the same log format, it is difficult to distinguish the log source. This leads to a lack of context during queries and low analysis efficiency. To address this issue, configure topics and log tags to achieve automated context association and logical categorization.

## Configure a topic

If multiple applications or instances have the same log format but different paths, such as `/apps/app-A/run.log` and `/apps/app-B/run.log`, it is difficult to distinguish the source of the collected logs. You can generate a topic based on the machine group, a custom name, or file path extraction to flexibly distinguish logs from different applications or path sources.

**Configuration steps:** **Global Configurations** > **Other Global Configurations** > **Log Topic Type**: Select the topic generation method. The following three types are supported:

-   **Machine Group Topic:** If a collection configuration is applied to multiple machine groups, LoongCollector automatically uses the name of the machine group to which the server belongs as the value of the `__topic__` field for upload. This is suitable for scenarios where logs are divided by host cluster.
    
-   **Custom**: The format is `customized://<custom_topic_name>`, for example, `customized://app-login`. This is suitable for static topic scenarios with fixed business identifiers.
    
-   **File Path Extraction:** Extract key information from the full path of the log file to dynamically mark the log source. This is suitable for situations where multiple users or applications share the same log filename but have different paths.
    
    If multiple users or services write logs to different top-level directories but the sub-paths and filenames are the same, the source cannot be distinguished by the filename alone. For example:
    
    ```
    /data/logs
    ├── userA
    │   └── serviceA
    │       └── service.log
    ├── userB
    │   └── serviceA
    │       └── service.log
    └── userC
        └── serviceA
            └── service.log
    ```
    
    Configure **File Path Extraction** and use a regular expression to extract key information from the full path. The matched result is uploaded to the logstore as the topic.
    
    ###### **Extraction rule: Based on regular expression capturing groups**
    
    When you configure a regular expression, the system automatically determines the output field format based on the number and naming of the capturing groups. The rules are as follows:
    
    > In the regular expression for the file path, you must escape the forward slash (/).
    
    **Capturing group type**
    
    **Scenario**
    
    **Generated field**
    
    **Regex example**
    
    **Matching path example**
    
    **Generated field**
    
    Single capturing group (only one `(.*?)`)
    
    Only one dimension is needed to distinguish the source (such as username, environment)
    
    Generates the `__topic__` field
    
    `\/logs\/(.*?)\/app\.log`
    
    `/logs/userA/app.log`
    
    `__topic__:userA`
    
    Multiple capturing groups - non-named (multiple `(.*?)`)
    
    Multiple dimensions are needed but no semantic labels
    
    Generates a tag field `__tag__:__topic_{i}__`, where `{i}` is the ordinal number of the capturing group
    
    `\/logs\/(.*?)\/(.*?)\/app\.log`
    
    `/logs/userA/svcA/app.log`
    
    `__tag__:__topic_1__userA`;
    
    `__tag__:__topic_2__svcA`
    
    Multiple capturing groups - named (using `(?P<name>.*？)`
    
    Multiple dimensions are needed and you want the field meanings to be clear for easy query and analysis
    
    Generates a tag field `__tag__:{name}`
    
    `\/logs\/(?P<user>.*?)\/(?P<service>.*?)\/app\.log`
    
    `/logs/userA/svcA/app.log`
    
    `__tag__:user:userA`;
    
    `__tag__:service:svcA`
    

## Log tagging

Enable the log tag enrichment feature to extract key information from container environment variables or Kubernetes pod labels and attach the information as tags. This achieves fine-grained grouping of logs.

**Configuration steps:** In the **Input Configurations** section of the **Logtail Configuration** page, enable **Log Tag Enrichment** and click **Add**.

-   **Environment Variables**: Configure the environment variable name and tag name. The environment variable value is stored in the tag name.
    
    -   Environment Variable Name: Specify the name of the environment variable to be extracted.
        
    -   Tag Name: The name of the environment variable tag.
        

-   **Pod Labels**: Configure the pod label name and tag name. The pod label value is stored in the tag name.
    
    -   Pod Label Name: The name of the Kubernetes pod label to be extracted.
        
    -   Tag Name: The name of the tag.
        

### **5\. Output configuration**

By default, all logs are sent to the current logstore with lz4 compression. To send logs from the same source to different logstores, follow the steps below:

#### **Dynamic distribution to multiple targets**

**Important**

-   Sending logs to multiple targets is available only for LoongCollector 3.0.0 and later. This feature is not supported by Logtail.
    
-   Up to five output targets can be configured.
    
-   After you configure multiple output targets, the collection configuration is no longer visible in the collection configuration list of the current logstore. To view, modify, or delete the multi-target distribution configuration, see [How do I manage multi-target distribution configurations?](/help/en/sls/host-text-log-collection-auto-install#9002c3418e8gb)
    

**Procedure**: In the **Output Configurations** section of the **Logtail Configuration** page

1.  Click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2222338671/p1041328.png) to expand the output configuration.
    
2.  Click **Add Output Targets** and configure the following settings:
    
    -   **Logstore**: Select the target logstore.
        
    -   **Compression Method**: Select **lz4** or **zstd**.
        
    -   **Route Settings**: Routes logs based on tag fields. Logs that match the routing rules are sent to the target logstore. If this configuration is empty, all collected logs are sent to the target logstore.
        
        -   **Tag Name**: The name of the tag field used for routing. Enter the field name directly, such as `__path__`, without the `__tag__:` prefix. Tag fields fall into two categories:
            
            > For more information about tags, see [Manage LoongCollector collection tags](/help/en/sls/manage-loongcollector-to-collect-tags).
            
            -   Agent-related: These tags are related to the collection agent and are independent of any plugins. Examples include `__hostname__` and `__user_defined_id__`.
                
            -   Input plugin-related: These tags depend on the input plugin, which adds and enriches the log with relevant information. Examples include `__path__` for file collection, and `_pod_name_` and `_container_name_` for Kubernetes collection.
                
        -   **Tag Value**: If a log's tag value matches this value, the log is sent to this target logstore.
            
        -   **Discard this tag?**: If you enable this option, this tag field is removed from the uploaded logs.
            

## **Step 3: Configure query and analysis**

After you complete the log processing and plugin configuration, click **Next** to go to the **Query and Analysis Configurations** page:

-   The system enables [Full-text Index](/help/en/sls/create-indexes#6f7eb27bcclmy) by default, which supports keyword searches on the original log content.
    
-   To perform precise queries by field, click **Automatic Index Generation** after the **Preview Data** is loaded on the page. SLS generates a [field index](/help/en/sls/create-indexes) based on the first entry in the preview data.
    

After you complete the configuration, click **Next** to complete the setup of the entire collection process.

## **Step 4: Validate and troubleshoot**

After the collection configuration is complete and applied to the machine group, the system automatically distributes the configuration and starts to collect incremental logs.

### **View uploaded logs**

1.  **Confirm that there is new content in the log file**: LoongCollector collects only incremental logs. Run `tail -f /path/to/your/log/file` and trigger a business operation to ensure that new logs are being written.
    
2.  **Query logs**: Go to the query and analysis page of the target logstore, click **Search & Analyze** (the default time range is the last 15 minutes), and check whether new logs are flowing in. Each collected Docker container text log contains the following fields by default:
    
    **Field name**
    
    **Description**
    
    **\_\_source\_\_**
    
    The IP address of the LoongCollector (Logtail) container.
    
    **\_container\_ip\_**
    
    The IP address of the application container.
    
    **\_\_tag\_\_:\_\_hostname\_\_**
    
    The name of the Docker host where LoongCollector (Logtail) is located.
    
    **\_\_tag\_\_:\_\_path\_\_**
    
    The log collection path.
    
    **\_\_tag\_\_:\_\_receive\_time\_\_**
    
    The time the log arrived at the server.
    
    **\_\_tag\_\_:\_\_user\_defined\_id\_\_**
    
    The custom ID of the machine group.
    

### **FAQ**

#### **Machine group heartbeat connection is FAIL**

1.  Check the user ID: If your server type is not ECS, or if the ECS instance and the project belong to different Alibaba Cloud accounts, check whether the correct user ID exists in the specified directory based on the following table.
    
    -   Linux: Run the `cd /etc/ilogtail/users/ && touch <uid>` command to create a user ID file.
        
    -   Windows: Go to the `C:\LogtailData\users\` directory and create an empty file named `<uid>`.
        
    
    If a file named with the Alibaba Cloud account ID of the current project exists in the specified path, the user ID is configured correctly.
    
2.  Check the machine group ID: If you are using a custom ID for the machine group, check whether a `user_defined_id` file exists in the specified directory. If it exists, check whether the content of the file is consistent with the custom ID configured for the machine group.
    
    **System**
    
    **Specified directory**
    
    **Solution**
    
    Linux
    
    `/etc/ilogtail/user_defined_id`
    
    ```
    # Configure the custom ID. If the directory does not exist, create it manually.
    echo "user-defined-1" > /etc/ilogtail/user_defined_id
    ```
    
    Windows
    
    `C:\LogtailData\user_defined_id`
    
    Create a new `user_defined_id` file in the `C:\LogtailData` directory and write the custom ID into it. (If the directory does not exist, create it manually.)
    
3.  If both the user ID and the machine group ID are configured correctly, see [Troubleshoot LoongCollector (Logtail) machine group issues](/help/en/sls/troubleshoot-the-errors-related-to-logtail-machine-groups) for further troubleshooting.
    

* * *

#### **No data collected for logs**

1.  **Check for incremental logs**: After you configure LoongCollector (Logtail) for collection, if there are no new logs in the log file to be collected, LoongCollector (Logtail) does not collect logs from that file.
    
2.  **Check the machine group heartbeat status**: Go to the **![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4654047571/p993962.png)Resources** > **Machine Groups** page, click the name of the target machine group, and in the **Machine Group Configurations** > **Machine Group Status** section, check the **Heartbeat** status.
    
    -   If the heartbeat is OK, the machine group is connected to the SLS project.
        
    -   If the heartbeat is FAIL: For more information about how to troubleshoot the issue, see [Machine group heartbeat connection is FAIL](/help/en/sls/host-text-log-collection-auto-install#f9ec8a2efe7xt).
        
3.  **Confirm whether the LoongCollector (Logtail) collection configuration has been applied to the machine group**: Even if the LoongCollector (Logtail) collection configuration is created, logs are not collected if the configuration is not applied to the machine group.
    
    1.  Go to the **![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8096561571/p979489.png)Resources** > **Machine Groups** page and click the name of the target machine group to go to the **Machine Group Configurations** page.
        
    2.  On the page, view **Manage Configuration**. The left side shows **All Logtail Configurations**, and the right side shows **Applied Logtail Configurations**. If the target LoongCollector (Logtail) collection configuration has been moved to the applied area on the right, the configuration has been successfully applied to the target machine group.
        
    3.  If the target LoongCollector (Logtail) collection configuration has not been moved to the applied area on the right, click **Modify**. In the **All Logtail Configurations** list on the left, select the name of the target LoongCollector (Logtail) configuration, click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8096561571/p981914.png) to move it to the applied area on the right, and then click **Save**.
        

* * *

#### **Log collection error or incorrect format**

Troubleshooting approach: This situation indicates that the network connection and basic configuration are normal. The problem is mainly a mismatch between the **log content** and the **parsing rules**. You need to view the specific error message to locate the problem:

1.  On the **Logtail Configuration** page, click the name of the LoongCollector (Logtail) configuration that has the collection error. On the **Log Collection Error** tab, click **Select Time Range** to set the query time.
    
2.  In the **Collection Exception Monitoring** > **Complete Error Information** section, view the alarm metric of the error log and find the corresponding solution in [Common error types in data collection](/help/en/sls/log-collection-error-type).
    

## **Next steps**

1.  [Log query and analysis](/help/en/sls/quick-guide-to-query-and-analysis):
    
2.  [Data visualization](/help/en/sls/dashboard-overview): Use visualization dashboards to monitor key metric trends.
    
3.  [Automatic alerting for data anomalies](/help/en/sls/configure-an-alert-monitoring-rule-in-log-service): Set up alert policies to be aware of system anomalies in real time.
    

## **Common commands**

### **View the running status of LoongCollector (Logtail)**

```
docker exec ${logtail_container_id} /etc/init.d/ilogtaild status
```

### **View information such as the version number, IP address, and startup time of LoongCollector (Logtail)**

```
docker exec ${logtail_container_id} cat /usr/local/ilogtail/app_info.json
```

### **View the running logs of LoongCollector (Logtail)**

The running logs of LoongCollector (Logtail) are saved in the `/usr/local/ilogtail/` directory inside the container. The filename is `ilogtail.LOG`, and rotated files are compressed and stored as `ilogtail.LOG.x.gz`. Example:

```
# View LoongCollector running logs
docker exec a287de895e40 tail -n 5 /usr/local/ilogtail/loongcollector.LOG

# View Logtail running logs
docker exec a287de895e40 tail -n 5 /usr/local/ilogtail/ilogtail.LOG
```

Example output:

```
[2025-08-25 09:17:44.610496]    [info]  [22]    /build/loongcollector/file_server/polling/PollingModify.cpp:75          polling modify resume:succeeded
[2025-08-25 09:17:44.610497]    [info]  [22]    /build/loongcollector/file_server/polling/PollingDirFile.cpp:100                polling discovery resume:starts
[2025-08-25 09:17:44.610498]    [info]  [22]    /build/loongcollector/file_server/polling/PollingDirFile.cpp:103                polling discovery resume:succeeded
[2025-08-25 09:17:44.610499]    [info]  [22]    /build/loongcollector/file_server/FileServer.cpp:117            file server resume:succeeded
[2025-08-25 09:17:44.610500]    [info]  [22]    /build/loongcollector/file_server/EventDispatcher.cpp:1019              checkpoint dump:succeeded
```

### **Restart LoongCollector (Logtail)**

```
# Stop loongcollector
docker exec a287de895e40 /etc/init.d/ilogtaild stop

# Start loongcollector
docker exec a287de895e40 /etc/init.d/ilogtaild start
```

## FAQ

### **Common error messages**

**Error phenomenon**

**Cause**

**Solution**

`Failed to connect to Logtail`

The project region is inconsistent with the LoongCollector (Logtail) container.

Check the region configuration in `ALIYUN_LOGTAIL_CONFIG`.

`No logs in LogStore`

Incorrect file path configuration.

Confirm that the log path in the application container matches the collection configuration.

* * *

### `**Error log: The parameter is invalid : uuid=none**`

**Problem description**: The LoongCollector (Logtail) log (`/usr/local/ilogtail/ilogtail.LOG`) contains the error log `The parameter is invalid : uuid=none`.

**Solution**: Create a `product_uuid` file on the host, enter any valid UUID, such as `169E98C9-ABC0-4A92-B1D2-AA6239C0D261`, and mount this file to the `/sys/class/dmi/id/product_uuid` directory of the LoongCollector (Logtail) container.

* * *

### How can the same log file or container standard output be collected by multiple collection configurations simultaneously**?**

By default, to prevent data duplication, SLS restricts each log source to be collected by only one collection configuration:

-   A text log file can match only one Logtail configuration.
    
-   Container standard output (stdout):
    
    -   If you are using the new version of the standard output template, it can be collected by only one standard output collection configuration by default.
        
    -   If you are using the old version of the standard output template, no extra configuration is needed, and it supports collecting multiple copies by default.
        

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com) and go to the target project.
    
2.  In the navigation pane on the left, choose ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7574404571/p992524.png)Logstores and find the target logstore.
    
3.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8096561571/p970744.png) icon next to its name to expand the logstore.
    
4.  Click **Logtail Configuration**. In the configuration list, find the target Logtail configuration and click **Manage Logtail Configuration** in the Actions column.
    
5.  On the Logtail configuration page, click **Edit** and scroll down to the **Input Configurations** section:
    
    -   To collect text file logs: Enable **Allow File to Be Collected for Multiple Times**.
        
    -   To collect container standard output: Turn on **Allow Collection by Different Logtail Configurations**.
        

#### **How do I manage multi-target distribution configurations?**

Multi-target distribution configurations are associated with multiple logstores. Manage these configurations from the project-level management page:

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com/) and click the name of the target project.
    
2.  On the project page, choose ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7938948671/p1041414.png) **Resources** > **Configurations** from the navigation pane on the left.
    
    **Note**
    
    This page provides centralized management for all collection configurations in the project, including configurations that remain after their associated logstores are accidentally deleted.
    

## **Appendix: Detailed explanation of native parsing plugins**

In the **Processing Configuration** section of the **Logtail Configuration** page, add processing plugins to configure structured processing for raw logs. To add a processing plugin to an existing collection configuration, follow these steps:

1.  In the navigation pane on the left, choose ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2061560671/p1016459.png)Logstores and find the target logstore.
    
2.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2061560671/p1016460.png) icon next to its name to expand the logstore.
    
3.  Click **Logtail Configuration**. In the configuration list, find the target Logtail configuration and click **Manage Logtail Configuration** in the Actions column.
    
4.  On the Logtail configuration page, click **Edit**.
    

> This section introduces only commonly used processing plugins that cover common log processing scenarios. For more information about other features, see [Extension processing plugins](/help/en/sls/developer-reference/api-sls-2020-12-30-createlogtailpipelineconfig#%E6%89%A9%E5%B1%95%E5%A4%84%E7%90%86%E6%8F%92%E4%BB%B6).

**Important**

**Rules for combining plugins (applicable to LoongCollector / Logtail 2.0 and later versions):**

-   Native processing plugins and extension processing plugins can be used independently or combined as needed.
    
-   We recommend that you prioritize native processing plugins because they offer better performance and higher stability.
    
-   If native features cannot meet your business needs, add extension processing plugins after the configured native processing plugins to perform supplementary processing.
    

**Order constraint:**

All plugins are executed sequentially in the order in which they are configured, which forms a processing chain. Note that **All native processing plugins must precede any extension processing plugins. After you add an extension processing plugin, you cannot add any more native processing plugins.**

### **Regular expression parsing**

Extract log fields using regular expressions and parse the logs into key-value pairs. Each field can be independently queried and analyzed.

**Example effect:**

**Raw log without any processing**

**Using the regex parsing plugin**

```
127.0.0.1 - - [16/Aug/2024:14:37:52 +0800] "GET /wp-admin/admin-ajax.php?action=rest-nonce HTTP/1.1" 200 41 "http://www.example.com/wp-admin/post-new.php?post_type=page" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36 Edg/127.0.0.0"
```

```
body_bytes_sent: 41
http_referer: http://www.example.com/wp-admin/post-new.php?post_type=page
http_user_agent: Mozilla/5.0 (Windows NT 10.0; Win64; ×64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36 Edg/127.0.0.0
remote_addr: 127.0.0.1
remote_user: -
request_method: GET
request_protocol: HTTP/1.1
request_uri: /wp-admin/admin-ajax.php?action=rest-nonce
status: 200
time_local: 16/Aug/2024:14:37:52 +0800
```

**Configuration steps:** In the **Processor Configurations** section of the **Logtail Configuration** page, click **Add Processor** and select **Native Processor** > ****Data Parsing (Regex Mode)****:

-   **Regular Expression**: Used to match the log. Supports automatic generation or manual input:
    
    -   Automatic generation:
        
        -   Click **Generate**.
            
        -   In the **Log Sample**, highlight the log content to be extracted.
            
        -   Click **Generate Regular Expression**.
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1446191571/p982663.png)
            
    -   Manual input: Click **Manually Enter Regular Expression** based on the log format.
        
    
    After you complete the configuration, click **Validate** to test whether the regular expression can correctly parse the log content.
    
-   **Extracted Field**: Set the corresponding field name (Key) for the extracted log content (Value).
    
-   For more information about the other parameters, see the common configuration parameter descriptions in [Scenario 2: Structured logging](#7874b2de35pf5).
    

* * *

### **Separator parsing**

Structure the log content using a separator, and parse it into multiple key-value pairs. Single-character and multi-character separators are supported.

**Example effect:**

**Raw log without any processing**

**Chunk fields by the specified character** `**,**`

```
05/May/2025:13:30:28,10.10.*.*,"POST /PutData?Category=YunOsAccountOpLog&AccessKeyId=****************&Date=Fri%2C%2028%20Jun%202013%2006%3A53%3A30%20GMT&Topic=raw&Signature=******************************** HTTP/1.1",200,18204,aliyun-sdk-java
```

```
ip:10.10.*.*
request:POST /PutData?Category=YunOsAccountOpLog&AccessKeyId=****************&Date=Fri%2C%2028%20Jun%202013%2006%3A53%3A30%20GMT&Topic=raw&Signature=******************************** HTTP/1.1
size:18204
status:200
time:05/May/2025:13:30:28
user_agent:aliyun-sdk-java
```

**Configuration steps:** In the **Processor Configurations** section of the **Logtail Configuration** page, click **Add Processor** and select **Native Processor** > **Data Parsing (Delimiter Mode)**.

-   **Delimiter**: Specify the character that is used to chunk the log content.
    
    Example: For a CSV format file, select **Custom** and enter a comma (,).
    
-   **Quote**: If a field value contains the separator, you must specify a quote to wrap the field to prevent incorrect chunking.
    
-   **Extracted Field**: Set the corresponding field name (Key) for each column in order of separation. The rules are as follows:
    
    -   Field names can contain only letters, digits, and underscores (\_).
        
    -   Must start with a letter or an underscore (\_).
        
    -   The maximum length is 128 bytes.
        
-   For more information about the other parameters, see the common configuration parameter descriptions in [Scenario 2: Structured logging](#7874b2de35pf5).
    

* * *

### **Standard JSON parsing**

Structure an Object-type JSON log by parsing it into key-value pairs.

**Example effect:**

**Raw log without any processing**

**Automatic extraction of standard JSON key-values**

```
{"url": "POST /PutData?Category=YunOsAccountOpLog&AccessKeyId=U0Ujpek********&Date=Fri%2C%2028%20Jun%202013%2006%3A53%3A30%20GMT&Topic=raw&Signature=pD12XYLmGxKQ%2Bmkd6x7hAgQ7b1c%3D HTTP/1.1", "ip": "10.200.98.220", "user-agent": "aliyun-sdk-java", "request": {"status": "200", "latency": "18204"}, "time": "05/Jan/2025:13:30:28"}
```

```
ip: 10.200.98.220
request: {"status": "200", "latency" : "18204" }
time: 05/Jan/2025:13:30:28
url: POST /PutData?Category=YunOsAccountOpLog&AccessKeyId=U0Ujpek******&Date=Fri%2C%2028%20Jun%202013%2006%3A53%3A30%20GMT&Topic=raw&Signature=pD12XYLmGxKQ%2Bmkd6x7hAgQ7b1c%3D HTTP/1.1
user-agent:aliyun-sdk-java
```

**Configuration steps:** In the **Processor Configurations** section of the **Logtail Configuration** page, click **Add Processor** and select **Native Processor** > ******Data Parsing (Delimiter Mode)******.

-   **Original Field**: The default value is content. This field is used to store the raw log content to be parsed.
    
-   For more information about the other parameters, see the common configuration parameter descriptions in [Scenario 2: Structured logging](#7874b2de35pf5).
    

* * *

### **Nested JSON parsing**

Parse a nested JSON log into key-value pairs by specifying the expansion depth.

**Example effect:**

**Raw log without any processing**

**Expansion depth: 0,** using expansion depth as a prefix

**Expansion depth: 1,** using expansion depth as a prefix

```
{"s_key":{"k1":{"k2":{"k3":{"k4":{"k51":"51","k52":"52"},"k41":"41"}}}}}
```

```
0_s_key_k1_k2_k3_k41:41
0_s_key_k1_k2_k3_k4_k51:51
0_s_key_k1_k2_k3_k4_k52:52
```

```
1_s_key:{"k1":{"k2":{"k3":{"k4":{"k51":"51","k52":"52"},"k41":"41"}}}}
```

**Configuration steps:** In the **Processor Configurations** section of the **Logtail Configuration** page, click **Add Processor** and select **Extended Processor** > ****Expand JSON Field****:

-   **Original Field**: The name of the raw field to be expanded, for example, `content`.
    
-   **JSON Expansion Depth**: The expansion level of the JSON object. The value 0 indicates full expansion, which is the default value. The value 1 indicates the current level.
    
-   **Character to Concatenate Expanded Keys**: The connector for field names during JSON expansion. The default connector is an underscore (\_).
    
-   **Name Prefix of Expanded Keys**: Specify the prefix for field names after JSON expansion.
    
-   **Expand Array**: Turn on this switch to expand the array into key-value pairs with indexes.
    
    Example: `{"k":["a","b"]}` is expanded to `{"k[0]":"a","k[1]":"b"}`.
    
    > To rename the expanded fields, for example, from prefix\_s\_key\_k1 to new\_field\_name, add a **Rename Field** plugin to complete the mapping.
    
-   For more information about the other parameters, see the common configuration parameter descriptions in [Scenario 2: Structured logging](#7874b2de35pf5).
    

* * *

### **JSON array parsing**

Use the `json_extract` [function](/help/en/sls/json-functions) to extract JSON objects from a JSON array.

**Example effect:**

**Raw log without any processing**

**Extract JSON array structure**

```
[{"key1":"value1"},{"key2":"value2"}]
```

```
json1:{"key1":"value1"}
json2:{"key2":"value2"}
```

**Configuration steps:** In the **Processor Configurations** section of the **Logtail Configuration** page, switch the **Processing Method** to **SPL**, configure the **SPL Statement**, and use the [json\_extract](/help/en/sls/json-functions) function to extract JSON objects from the JSON array.

**Example:** Extract elements from the JSON array in the log field `content` and store the results in new fields `json1` and `json2`.

```
* | extend json1 = json_extract(content, '$[0]'), json2 = json_extract(content, '$[1]')
```

* * *

### **Apache log parsing**

Structure the log content based on the definitions in the Apache log configuration file and parse it into multiple key-value pairs.

**Example effect:**

**Raw log without any processing**

**Apache Common Log Format** `**combined**` **parsing**

```
1 192.168.1.10 - - [08/May/2024:15:30:28 +0800] "GET /index.html HTTP/1.1" 200 1234 "https://www.example.com/referrer" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.X.X Safari/537.36"
```

```
http_referer:https://www.example.com/referrer
http_user_agent:Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/123.0.X.X Safari/537.36
remote_addr:192.168.1.10
remote_ident:-
remote_user:-
request_method:GET
request_protocol:HTTP/1.1
request_uri:/index.html
response_size_bytes:1234
status:200
time_local:[08/May/2024:15:30:28 +0800]
```

**Configuration steps:** In the **Processor Configurations** section of the **Logtail Configuration** page, click **Add Processor** and select **Native Processor** > ****Data Parsing (Apache Mode)****:

-   **Log Format**: **combined**
    
-   **APACHE LogFormat Configuration**: The system automatically fills in the configuration based on the **Log Format**.
    
    **Important**
    
    Verify the auto-filled content to ensure that it is exactly the same as the LogFormat defined in the server's Apache configuration file. The file is usually located at /etc/apache2/apache2.conf.
    
-   For more information about the other parameters, see the common configuration parameter descriptions in [Scenario 2: Structured logging](#7874b2de35pf5).
    

* * *

### **Data masking**

Mask sensitive data in logs.

**Example effect:**

**Raw log without any processing**

**Masking result**

```
[{'account':'1812213231432969','password':'04a23f38'}, {'account':'1812213685634','password':'123a'}]
```

```
[{'account':'1812213231432969','password':'********'}, {'account':'1812213685634','password':'********'}]
```

**Configuration steps:** In the **Processor Configurations** section of the **Logtail Configuration** page, click **Add Processor** and select **Native Processor** > **Data Masking**.

-   **Original Field**: The raw field that contains the log content before parsing.
    
-   **Data Masking Method**:
    
    -   **const**: Replace the sensitive content with the modified string.
        
    -   **md5**: Replace the sensitive content with its corresponding MD5 hash.
        
-   **Replacement String**: If you set the **Masking Method** to **const**, you must enter a string to replace the sensitive content.
    
-   **Content Expression that Precedes Replaced Content**: Used to find the sensitive content. Configure this parameter using the [RE2 syntax](https://github.com/google/re2/blob/master/doc/syntax.txt).
    
-   **Content Expression to Match Replaced Content**: The expression for the sensitive content. Configure this parameter using the [RE2 syntax](https://github.com/google/re2/blob/master/doc/syntax.txt).
    

* * *

### **Time parsing**

Parse the time field in the log and set the parsing result as the value of the `__time__` field of the log.

**Example effect:**

**Raw log without any processing**

**Time parsing**

```
{"level":"INFO","timestamp":"2025-09-23T19:11:47+0800","cluster":"yilu-cluster-0728","message":"User logged in successfully","userId":"user-123"}
```

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3359329571/p1012909.png)

**Configuration steps:** In the **Processor Configurations** section of the **Logtail Configuration** page, click **Add Processor** and select **Native Processor** > **Time Parsing**:

-   **Original Field**: The raw field that contains the log content before parsing.
    
-   **Time Format**: Set the corresponding time format based on the time content in the log.
    
-   **Time Zone**: Select the time zone of the log time field. By default, the machine time zone is used, which is the time zone of the environment where the LoongCollector (Logtail) process is located.
    

## **Appendix: Regular expression limits (container filtering)**

The regular expressions that are used for **Container Filtering** are based on the RE2 engine of Go, which has some syntax limitations compared with other engines such as PCRE. Note the following when you write regular expressions:

1\. Differences in named group syntax

Go uses the `(?P<name>...)` syntax to define named groups and does not support the `(?<name>...)` syntax from PCRE.

-   Correct example: `(?P<year>\d{4})`
    
-   Incorrect syntax: `(?<year>\d{4})`
    

2\. Unsupported regex features

The following common but complex regex features are not available in RE2. Avoid using them:

-   **Assertion:** `(?=...)`, `(?!...)`, `(?<=...)`, `（?<!...)`
    
-   **Conditional expression:** `(?(condition)true|false)`
    
-   **Recursion matching:** `(?R)`, `(?0)`
    
-   **Subprogram reference:** `(?&name)`, `(?P>name)`
    
-   **Atomic group:** `(?>...)`
    

3\. Usage recommendations

We recommend that you use tools such as [Regex101](https://regex101.com/) to debug regular expressions. Select the Golang (RE2) mode for validation to ensure compatibility. If you use any of the unsupported syntaxes mentioned above, the plugin does not parse or match correctly.

## **Appendix: Comparison of old and new versions of container standard output**

To improve log storage efficiency and collection consistency, the log metadata format for container standard output has been upgraded. The new format consolidates metadata into the `__tag__` field, which achieves storage optimization and format standardization.

1.  **Core advantages of the new standard output version**
    
    -   Significant performance improvement
        
        -   Refactored in C++, performance is improved by 180% to 300% compared with the old Go implementation.
            
        -   Supports native plugins for data processing and multi-threading parallel processing, which fully utilizes system resources.
            
        -   Supports flexible combination of native and Go plugins to meet complex scenario requirements.
            
    -   Greater reliability
        
        -   Supports a standard output log rotation queue. The log collection mechanism is unified with the file collection mechanism, which provides high reliability in scenarios with rapid standard output log rotation.
            
    -   Lower resource consumption
        
        -   CPU usage is reduced by 20% to 25%.
            
        -   Memory usage is reduced by 20% to 25%.
            
    -   Enhanced O&M consistency
        
        -   Unified parameter configuration: The configuration parameters of the new standard output collection plugin are consistent with the file collection plugin.
            
        -   Unified metadata management: The naming of container metadata fields and the storage location of tag logs are unified with the file collection scenario. The consumer side needs to maintain only one set of processing logic.
            
2.  **Comparison of new and old version features**
    
    **Feature dimension**
    
    **Old version features**
    
    **New version features**
    
    Storage method
    
    Metadata is directly embedded in the log content as a normal field.
    
    Metadata is centrally stored in the `__tag__` tag.
    
    Storage efficiency
    
    Each log carries the full metadata repeatedly, which consumes more storage space.
    
    Multiple logs in the same context can reuse metadata, which saves storage costs.
    
    Format consistency
    
    Inconsistent with the container file collection format.
    
    Field naming and storage structure are fully aligned with container file collection, which provides a unified experience.
    
    Query access method
    
    Can be queried directly by field name, such as `_container_name_`.
    
    Requires accessing the corresponding key-value through `__tag__`, such as `__tag__: _container_name_`.
    
3.  **Container metadata field mapping table**
    
    **Old version field name**
    
    **New version field name**
    
    \_container\_ip\_
    
    \_\_tag\_\_:\_container\_ip\_
    
    \_container\_name\_
    
    \_\_tag\_\_:\_container\_name\_
    
    \_image\_name\_
    
    \_\_tag\_\_:\_image\_name\_
    
    \_namespace\_
    
    \_\_tag\_\_:\_namespace\_
    
    \_pod\_name\_
    
    \_\_tag\_\_:\_pod\_name\_
    
    \_pod\_uid\_
    
    \_\_tag\_\_:\_pod\_uid\_
    
    In the new version, all metadata fields are stored in the tag area of the log in the format `__tag__:<key>`, rather than being embedded in the log content.
    
4.  **Impact of new version changes on users**
    
    -   Consumer-side adaptation: Because the storage location has changed from "content" to "tag", the user's log consumption logic needs to be adjusted accordingly. For example, you must access fields through \_\_tag\_\_ during queries.
        
    -   SQL compatibility: Query SQL has been automatically adapted for compatibility, so users do not need to modify their query statements to process both new and old version logs simultaneously.
        

## **More information**

### **Global configuration parameters**

**Configuration parameter**

**Description**

Configuration Name

The name of the Logtail configuration. It must be unique within its project. The name cannot be changed after the Logtail configuration is created.

Log Topic Type

Select the method for generating the log topic. Options include Machine Group Topic, File Path Extraction, and Custom.

Advanced Parameters

For other optional advanced feature parameters related to the global configuration, see [CreateLogtailPipelineConfig](https://next.api.aliyun.com/document/Sls/2020-12-30/CreateLogtailPipelineConfig?spm=api-workbench.api_explorer.0.0.4c5f31f27Lmdh1#request_params_desc).

### **Input configuration parameters**

**Configuration item**

**Description**

Logtail Deployment Mode

**DaemonSet**: Deploys one LoongCollector on each node of the cluster to collect logs from all containers on that node.

**Sidecar**: Each pod runs a LoongCollector container to collect logs from all containers within that pod. Log collection for different pods is isolated.

File Path Type

You can configure a **Container Path** or a **Host Path**.

-   **Path In Container**: Select this option to collect text log files from within a container.
    
-   **Host Path**: Select this to collect service logs from the cluster nodes.
    

File Path

Set the log directory and filename based on the log's location on the host, such as an ECS instance.

-   If the target host is a Linux system, the log path must start with a forward slash (/). For example, `/apsara/nuwa/**/app.Log`.
    
-   If the target host is a Windows system, the log path must start with a drive letter. For example, `C:\Program Files\Intel\**\*.Log`.
    

Both directory and file names support full and wildcard modes. For more information about filename rules, see [Wildcard matching](https://man7.org/linux/man-pages/man7/glob.7.html). The log path wildcard character supports only the asterisk (\*) and the question mark (?).

The log path supports multi-level directory matching. This means all files that meet the criteria in the specified directory and its subdirectories are collected. For example:

-   `/apsara/nuwa/**/*.log` indicates files with the .log extension in the `/apsara/nuwa` directory and its recursive subdirectories.
    
-   `/var/logs/app_*/**/*.log` indicates files with the `.log` extension in all directories that match the `app_*` format under the `/var/logs` directory and their recursive subdirectories.
    
-   `/var/log/nginx/**/access*` indicates files that start with `access` in the `/var/log/nginx` directory and its recursive subdirectories.
    

Max Directory Monitoring Depth

The maximum depth for monitoring the log directory. This is the maximum directory depth matched by the wildcard character `**` in the **File Path**. A value of 0 specifies that only the log file directory that you specify is monitored.

Standard Output

After you enable **Standard Output**, Logtail collects container standard output.

Standard Error

After you enable **Standard Error**, Logtail collects the container's standard error.

Allow multiple collections of standard output

By default, a container's standard output logs can match only one new-version Logtail standard output collection configuration. If the standard output needs to be collected by multiple new-version standard output collection configurations, you must enable **Allow Standard Output To Be Collected Multiple Times**.

Enable Container Metadata Preview

After you enable **Enable Container Metadata Preview**, you can view container metadata after you create a Logtail configuration. This metadata includes matched container information and full container information.

Container Filtering

-   **Filter condition description**
    

**Important**

-   Container labels are retrieved by running the docker inspect command and are different from Kubernetes labels. For more information about how to retrieve container labels, see [Obtain container labels](/help/en/sls/how-do-i-obtain-the-labels-and-environment-variables-of-a-container#section-7rp-xn8-crg).
    
-   Environment variables are the variables that are configured during container startup. For more information about how to obtain environment variables, see [Obtaining Container Environment Variables](/help/en/sls/how-do-i-obtain-the-labels-and-environment-variables-of-a-container#section-0a0-n4l-zhi).
    
-   In Kubernetes scenarios, we recommend that you use Kubernetes-level information, such as **K8s Pod Name Regex Match**, **K8s Namespace Regex Match**, **K8s Container Name Regex Match**, and **K8s Pod Label Whitelist**, for container filtering.
    

1.  The namespace and container name in Kubernetes are mapped to container labels, specifically `io.kubernetes.pod.namespace` and `io.kubernetes.container.name`. We recommend that you use these two container labels for container filtering. For example, if a pod belongs to the `backend-prod` namespace and the container name is `worker-server`, set the container label whitelist to `io.kubernetes.pod.namespace : backend-prod` or `io.kubernetes.container.name : worker-server` to collect logs from that container.
    
2.  If these two container labels do not meet your filtering needs, use the environment variable blacklist and whitelist for container filtering.
    

**K8s Pod Name Regular Expression Matching**

Specify the containers to be collected by pod name. Regular expression matching is supported. For example, if you set this parameter to `^(nginx-log-demo.*)$`, all containers in pods whose names start with nginx-log-demo are matched.

**K8s Namespace Regular Matching**

Specify the containers to be collected by namespace name. Regular expression matching is supported. For example, if you set this parameter to `^(default|nginx)$`, all containers in the nginx and default namespaces are matched.

**K8s Container Name Regular Matching**

Specify the containers to be collected by container name. The Kubernetes container name is defined in spec.containers. Regular expression matching is supported. For example, if you set this parameter to `^(container-test)$`, all containers named container-test are matched.

**Container Label Whitelist**

The container label whitelist specifies the containers to be collected. It is empty by default, which means all container standard outputs are collected. To set a container label whitelist, the LabelKey is required, and the LabelValue is optional.

-   If LabelValue is empty, all containers with a label that includes the LabelKey are matched.
    
-   If LabelValue is not empty, only containers with a label that matches LabelKey=LabelValue are matched.
    
    By default, LabelValue performs string matching, which means a match occurs only if the value for LabelValue is identical to the container's label value. If the value starts with `^` and ends with `$`, it is a regular expression match. For example, if you set **LabelKey** to io.kubernetes.container.name and **LabelValue** to ^(nginx|cube)$, containers named nginx or cube are matched.
    

Multiple whitelist entries have an OR relationship, which means a container is matched if its label satisfies any of the whitelist entries.

**Container Label Blacklist**

The container label blacklist excludes containers from collection. It is empty by default, which means no containers are excluded. To set a container label blacklist, the LabelKey is required, and the LabelValue is optional.

-   If LabelValue is empty, all containers with a label that includes the LabelKey are excluded.
    
-   If LabelValue is not empty, only containers with a label that matches LabelKey=LabelValue are excluded.
    
    By default, LabelValue is used for string matching, which requires an exact match with the container's label value. If the value starts with `^` and ends with `$`, a regular expression match is performed. For example, if you set **LabelKey** to io.kubernetes.container.name and **LabelValue** to ^(nginx|cube)$, containers named nginx or cube are matched.
    

Multiple blacklist entries have an OR relationship, which means a container is excluded if its label satisfies any of the blacklist entries.

**Environment Variable Whitelist**

The environment variable whitelist specifies the containers to be collected. It is empty by default, which means all container standard outputs are collected. To set an environment variable whitelist, the EnvKey is required, and the EnvValue is optional.

-   If EnvValue is empty, all containers with an environment variable that includes the EnvKey are matched.
    
-   If EnvValue is not empty, only containers with an environment variable that matches EnvKey=EnvValue are matched.
    
    By default, EnvValue is a string match, which means a match occurs only if its value is exactly the same as the environment variable's value. If the value starts with `^` and ends with `$`, it is a regular expression match. For example, if you set **EnvKey** to NGINX\_SERVICE\_PORT and **EnvValue** to ^(80|6379)$, containers with a service port of 80 or 6379 are matched.
    

Multiple whitelist entries have an OR relationship, which means a container is matched if its environment variables satisfy any of the key-value pairs.

**Environment Variable Blacklist**

The environment variable blacklist excludes containers from collection. It is empty by default, which means no containers are excluded. To set an environment variable blacklist, the EnvKey is required, and the EnvValue is optional.

-   If EnvValue is empty, logs from all containers with an environment variable that includes the EnvKey are excluded.
    
-   If EnvValue is not empty, only containers with an environment variable that matches EnvKey=EnvValue are excluded.
    
    By default, EnvValue is a string match, which means it only matches if the EnvValue is exactly the same as the environment variable's value. If the value starts with `^` and ends with `$`, it is a regular expression match. For example, if you set **EnvKey** to NGINX\_SERVICE\_PORT and **EnvValue** to ^(80|6379)$, containers with a service port of 80 or 6379 are matched.
    

Multiple blacklist entries have an OR relationship, which means a container is excluded if its environment variables satisfy any of the key-value pairs.

**K8s Pod Label Whitelist**

Specify the containers to be collected using a Kubernetes label whitelist. To set a Kubernetes label whitelist, the LabelKey is required, and the LabelValue is optional.

-   If LabelValue is empty, all containers with a Kubernetes label that includes the LabelKey are matched.
    
-   If LabelValue is not empty, only containers with a Kubernetes label that matches LabelKey=LabelValue are matched.
    
    By default, \`LabelValue\` is used for string matching. A match occurs only if the value of \`LabelValue\` is identical to the value of the Kubernetes label. If the value starts with `^` and ends with `$`, it is a regular expression match. For example, if you set **LabelKey** to app and set **LabelValue** to ^(test1|test2)$, containers with the Kubernetes labels app:test1 or app:test2 are matched.
    

Multiple whitelist entries have an OR relationship, which means a container is matched if its Kubernetes label satisfies any of the whitelist entries.

**Note**

-   If you change Kubernetes labels when Kubernetes control resources, such as deployments, are running, the operational pod is not restarted. Therefore, the pod cannot detect the change. This may cause a matching rule to become invalid. When you configure Kubernetes label blacklists and whitelists, we recommend that you use the Kubernetes labels of pods. For more information about Kubernetes labels, see [Labels and Selectors](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/).
    

**K8s Pod Label Blacklist**

Exclude containers from collection using a Kubernetes label blacklist. To set a Kubernetes label blacklist, the LabelKey is required, and the LabelValue is optional.

-   If LabelValue is empty, all containers with a Kubernetes label that includes the LabelKey are excluded.
    
-   If LabelValue is not empty, only containers with a Kubernetes label that matches LabelKey=LabelValue are excluded.
    
    By default, string matching is performed for LabelValue. A match occurs only if the value of LabelValue is exactly the same as the value of the Kubernetes label. If the value starts with `^` and ends with `$`, regular expression matching is performed. For example, if you set **LabelKey** to app and **LabelValue** to ^(test1|test2)$, containers with the Kubernetes labels app:test1 or app:test2 are matched.
    

Multiple blacklist entries have an OR relationship, which means a container is excluded if its Kubernetes label satisfies any of the blacklist entries.

**Note**

-   If you change Kubernetes labels when Kubernetes control resources, such as deployments, are running, the operational pod is not restarted. Therefore, the pod cannot detect the change. This may cause a matching rule to become invalid. When you configure the Kubernetes label whitelist and the Kubernetes label blacklist, we recommend that you use the Kubernetes labels of pods. For more information about Kubernetes labels, see [Labels and Selectors](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/).
    

Log Tag Enrichment

Add environment variables and Kubernetes labels to logs as log tags.

**Environment Variables**

After you configure this parameter, Simple Log Service adds environment variable-related fields to logs. For example, if you set **Environment Variable Name** to VERSION and **Tag Name** to env\_version, and a container includes the environment variable `VERSION=v1.0.0`, this information is added to the log as the field **\_\_tag\_\_:\_\_env\_version\_\_: v1.0.0**.

**Pod Labels**

After you configure this parameter, Simple Log Service adds Kubernetes pod label-related fields to logs. For example, if you set **Pod Label Name** to app and **Tag Name** to `k8s_pod_app`, and a Kubernetes pod includes the label `app=serviceA`, this information is added to the log as the field **\_\_tag\_\_:\_\_k8s\_pod\_app\_\_: serviceA**.

File Encoding

Select the encoding format of the log file.

First Collection Size

When the configuration first takes effect, this is the size from the end of the file from which collection starts. The default initial collection size is 1,024 KB.

-   For the first collection, if the file is smaller than 1,024 KB, collection starts from the beginning of the file.
    
-   For the first collection, if the file is larger than 1,024 KB, collection starts from 1,024 KB from the end of the file.
    

You can modify the **First Collection Size** here. The value can range from 0 to 10,485,760 KB.

Collection Blacklist

After you turn on the **Collection Blacklist** switch, you can configure a blacklist to ignore specified directories or files during collection. You can specify directories and file names using exact matches or wildcard characters. The only supported wildcard characters are the asterisk (\*) and the question mark (?).

**Important**

-   If you use a wildcard character when you configure the **File Path** but need to filter out some of those paths, you must enter the corresponding full path in the **Collection Blacklist** to ensure that the blacklist configuration takes effect.
    
    For example, if you set **File Path** to `/home/admin/app*/log/*.log` but want to filter out all subdirectories under `/home/admin/app1*`, you must select **Directory Blacklist** and configure the directory as `/home/admin/app1*/**`. If you configure it as `/home/admin/app1*`, the blacklist will not take effect.
    
-   Matching against a blacklist has a computational overhead. Keep the number of blacklist entries within 10.
    
-   A directory path cannot end with a forward slash (/). For example, if you set the path to `/home/admin/dir1/`, the directory blacklist will not take effect.
    

It supports setting by file path blacklist, file blacklist, and directory blacklist. The details are as follows:

#### **File Path Blacklist**

-   Select **File Path Blacklist** and configure the path as `/home/admin/private*.log`. This will ignore all files in the `/home/admin/` directory that start with "private" and end with ".log" during collection.
    
-   Select **File Path Blacklist** and configure the path as `/home/admin/private*/*_inner.log`. This will ignore files ending with \_inner.log in directories that start with private under the `/home/admin/` directory during collection. For example, the file `/home/admin/private/app_inner.log` is ignored, but the file `/home/admin/private/app.log` is collected.
    

#### File Blacklist

Select **File Blacklist** and configure the filename as `app_inner.log`. This will ignore all files named `app_inner.log` during collection.

#### Directory Blacklist

-   Select **Directory Blacklist** and configure the directory as `/home/admin/dir1`. This will ignore all files in the `/home/admin/dir1` directory during collection.
    
-   Select **Directory Blacklist** and configure the directory as `/home/admin/dir*`. This will ignore all files in subdirectories that start with "dir" under the `/home/admin/` directory during collection.
    
-   Select **Directory Blacklist** and configure the directory as `/home/admin/*/dir`. This will ignore all files in subdirectories named "dir" at the second level under the `/home/admin/` directory during collection. For example, files in the `/home/admin/a/dir` directory are ignored, but files in the `/home/admin/a/b/dir` directory are collected.
    

Allow File To Be Collected For Multiple Times

By default, you can use only one Logtail configuration to collect logs from a log file. If the logs in a file need to be collected multiple times, enable **Allow File To Be Collected For Multiple Times**.

Advanced Parameters

For more information about other optional advanced feature parameters related to the file input plugin, see [CreateLogtailPipelineConfig](https://next.api.aliyun.com/document/Sls/2020-12-30/CreateLogtailPipelineConfig?spm=api-workbench.api_explorer.0.0.4c5f31f27Lmdh1#request_params_desc).

### **Processing configuration parameters**

**Configuration Item**

**Description**

Log Sample

A sample of the log to be collected. Use a log from your actual scenario. The log sample helps configure log processing parameters and reduces configuration difficulty. You can add multiple samples, with a total length not exceeding 1,500 characters.

```
[2023-10-01T10:30:01,000] [INFO] java.lang.Exception: exception happened
    at TestPrintStackTrace.f(TestPrintStackTrace.java:3)
    at TestPrintStackTrace.g(TestPrintStackTrace.java:7)
    at TestPrintStackTrace.main(TestPrintStackTrace.java:16)
```

Multi-line Mode

-   Type: A multiline log is one where each log entry is distributed across multiple consecutive lines. It is necessary to distinguish each log entry from the log content.
    
    -   **Custom**: Use a **Regex To Match First Line** to distinguish each log entry.
        
    -   **Multi-line JSON**: Each JSON object is expanded into multiple lines, for example:
        
        ```
        {
          "name": "John Doe",
          "age": 30,
          "address": {
            "city": "New York",
            "country": "USA"
          }
        }
        ```
        
-   Processing Method If Splitting Fails:
    
    ```
    Exception in thread "main" java.lang.NullPointerException
        at com.example.MyClass.methodA(MyClass.java:12)
        at com.example.MyClass.methodB(MyClass.java:34)
        at com.example.MyClass.main(MyClass.java:½0)
    ```
    
    For the log content above, if Simple Log Service fails to split it:
    
    -   **Discard**: Directly discards this log segment.
        
    -   **Retain Single Line**: Retains each line of log text as a separate log entry, resulting in a total of four log entries.
        

Processing Method

The **Processing Plugin Group** includes **Native Plugins** and **Extension Plugins**. For more information, see [Use Native and Extension Processing Plugins](/help/en/sls/overview-22).

**Important**

For limitations on the use of processing plugins, refer to the prompts on the console page.

-   Logtail 2.0:
    
    -   Native plugins can be combined in any way.
        
    -   Native and extended plugins can be used at the same time, but extended plugins can only appear after all native plugins.
        
-   Logtail versions earlier than 2.0:
    
    -   Adding both native and extended plugins at the same time is not supported.
        
    -   Native plugins can only be used to collect text logs. When using native plugins, the following requirements must be met:
        
        -   The first plugin must be regular expression parsing, delimiter-based parsing, JSON parsing, NGINX pattern parsing, Apache pattern parsing, or IIS pattern parsing.
            
        -   From the second to the last plugin, there can be at most one time parsing plugin, one filtering plugin, and multiple data masking plugins.
            
    -   For the **Retain Original Field If Parsing Fails** and **Retain Original Field If Parsing Succeeds** parameters, only the following combinations are valid. Other combinations are invalid.
        
        -   Upload only successfully parsed logs:
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1304240271/p801939.png)
            
        -   Upload parsed logs on success, and upload raw logs on failure:
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1304240271/p801942.png)
            
        -   On success, upload parsed logs and append the raw log field. On failure, upload raw logs.
            
            For example, if the raw log `"content": "{"request_method":"GET", "request_time":"200"}"` is parsed successfully, appending the raw field adds another field to the parsed log. The field name is **New Name Of Original Field** (if left blank, it defaults to the original field name), and the field value is the raw log `{"request_method":"GET", "request_time":"200"}`.
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1304240271/p801943.png)
            

### **Regions**

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com/?spm=a2c4g.11186623.0.0.70905a3dccueNa). In the Project list, click the destination project.
    
2.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4287915571/p995186.png) icon to the right of the project name to open the project overview page.
    
3.  In the Basic Information section, view the region name of the current project. For the mapping between region names and Region IDs, see the following table.
    
    > A region is the geographical location of the physical data center for an Alibaba Cloud service. A Region ID is the unique identifier of an Alibaba Cloud service region.
    
    **Region name**
    
    **Region ID**
    
    China (Qingdao)
    
    cn-qingdao
    
    China (Beijing)
    
    cn-beijing
    
    China (Zhangjiakou)
    
    cn-zhangjiakou
    
    China (Hohhot)
    
    cn-huhehaote
    
    China (Ulanqab)
    
    cn-wulanchabu
    
    China (Hangzhou)
    
    cn-hangzhou
    
    China (Shanghai)
    
    cn-shanghai
    
    China (Nanjing - Local Region - Decommissioning)
    
    cn-nanjing
    
    China (Fuzhou - Local Region - Decommissioning)
    
    cn-fuzhou
    
    China (Shenzhen)
    
    cn-shenzhen
    
    China (Heyuan)
    
    cn-heyuan
    
    China (Guangzhou)
    
    cn-guangzhou
    
    Philippines (Manila)
    
    ap-southeast-6
    
    South Korea (Seoul)
    
    ap-northeast-2
    
    Malaysia (Kuala Lumpur)
    
    ap-southeast-3
    
    Japan (Tokyo)
    
    ap-northeast-1
    
    Thailand (Bangkok)
    
    ap-southeast-7
    
    China (Chengdu)
    
    cn-chengdu
    
    Singapore
    
    ap-southeast-1
    
    Indonesia (Jakarta)
    
    ap-southeast-5
    
    China (Hong Kong)
    
    cn-hongkong
    
    Germany (Frankfurt)
    
    eu-central-1
    
    US (Virginia)
    
    us-east-1
    
    US (Silicon Valley)
    
    us-west-1
    
    UK (London)
    
    eu-west-1
    
    UAE (Dubai)
    
    me-east-1
    
    SAU (Riyadh - Partner Region)
    
    me-central-1
    

### **Network transmission types**

**Network type**

**Corresponding domain name type**

**Description**

**Scenarios**

Alibaba Cloud internal network

Private domain name

The Alibaba Cloud internal network is a gigabit shared network. Transferring log data over this network is faster and more stable than over the Internet. The internal network includes virtual private clouds (VPCs) and classic networks.

The ECS instance and the SLS project are in the same region, or [a server is connected to a virtual private cloud (VPC) through Express Connect](/help/en/ecs/user-guide/manage-servers-that-are-not-provided-by-alibaba-cloud#bdcc5a304b7sl).

**Note**

Create a SLS project in the same region as the ECS instance to collect logs over the Alibaba Cloud internal network. This method does not consume public bandwidth.

Internet

Public domain name

Transferring log data over the Internet is limited by network bandwidth. The speed and stability of data collection can also be affected by network jitter, latency, and packet loss.

Transfer data over the Internet in the following two scenarios.

-   The ECS instance and the SLS project are in different regions.
    
-   The server is hosted by another cloud provider or in a self-managed data center.
    

Transfer acceleration

Acceleration endpoint

This method uses Alibaba Cloud Content Delivery Network (CDN) edge nodes to accelerate log collection. It offers significant advantages in network latency and stability compared to collecting data over the Internet. However, extra charges apply for the traffic.

If your application server and SLS project are in different countries, transferring data over the Internet can cause high latency and instability. Use transfer acceleration to resolve these issues. For more information, see [Transfer acceleration](/help/en/sls/select-a-network-type#2ba2d6a585eny).

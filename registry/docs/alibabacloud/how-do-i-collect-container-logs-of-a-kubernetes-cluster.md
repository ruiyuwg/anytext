Managing scattered container logs in Kubernetes can be difficult, resulting in inefficient troubleshooting and high maintenance costs. To fix this, deploy LoongCollector in DaemonSet mode and set up a collection configuration in the Simple Log Service (SLS) console. This approach allows for unified log collection and structured processing, enhancing log retrieval, problem diagnosis, and observability analysis.

## **Applicability**

-   **Runtime environment:**
    
    -   Container Service for Kubernetes (ACK) (Managed and Dedicated editions) and self-managed Kubernetes clusters are supported.
        
    -   Kubernetes 1.10.0 or later that supports `Mount propagation: HostToContainer`.
        
    -   **Container runtime: Docker and Containerd only**
        
        -   Docker:
            
            -   Requires access permissions to docker.sock.
                
            -   Standard output collection supports only the JSON log driver.
                
            -   Only the overlay and overlay2 storage drivers are supported. For other storage driver types, you must manually mount the log directory.
                
        -   Containerd: Requires access permissions to containerd.sock.
            
-   **Resource requirements:** LoongCollector (Logtail) runs with high priority as \`system-cluster-critical\`. **Do not deploy it if cluster resources are insufficient**. Otherwise, existing pods on the node might be evicted.
    
    -   **CPU**: Reserve at least **0.1 core**.
        
    -   **Memory**: Reserve at least **150 MB** for the collection component and at least **100 MB** for the controller component.
        
    -   Actual usage depends on the collection rate, the number of monitored directories and files, and the level of send congestion. Ensure that the actual usage is below 80% of the specified limit.
        

-   **Permission requirements:** The Alibaba Cloud account or RAM user used for deployment must have the `**AliyunLogFullAccess**` permission.
    
    > To create custom policies, see the [AliyunCSManagedLogRolePolicy](/help/en/ram/developer-reference/aliyuncsmanagedlogrolepolicy) system policy. Copy the permissions from the policy and grant them to the target RAM user or role for fine-grained permission configuration.
    

## **Collection configuration workflow**

1.  [**Install LoongCollector**](#9b3c2215b3gup)**:** Deploy LoongCollector in DaemonSet mode. This ensures that a collection container runs on each node in the cluster to collect logs from all containers on that node.
    
    > For information about the Sidecar pattern, see [Collect text logs from Kubernetes pods (Sidecar pattern)](/help/en/sls/collect-k8s-cluster-logs-through-sidecar).
    
2.  [**Create a Logstore**](#cdd8676d8d7ie)**:** A logstore is used to store collected logs.
    
3.  [**Create and configure log collection rules**](#d70a3bec60rwt)
    
    1.  [**Global and input configuration**](#231059bba4ah9): Define the name of the collection configuration and specify the source and scope of log collection.
        
    2.  [**Log processing and structuring**](#08406a8026mo8): Configure processing rules based on the log format.
        
        -   Multiline logs: This is suitable for single logs that span multiple lines, such as Java exception stacks or Python tracebacks. You can use a first-line regular expression to identify the start of each log entry.
            
        -   Structured parsing: Configure parsing plugins, such as regular expression, delimiter, or NGINX mode, to extract raw strings into structured key-value pairs for easier querying and analysis.
            
    3.  [**Log filtering**](#ea8fb78dadgai): Configure collection blacklists and content filtering rules to screen for valid log content. This helps reduce redundant data transmission and storage.
        
    4.  [**Log categorization**](#310ee74c3cf8m): Flexibly distinguish logs from different services, containers, or path sources by configuring log topics and tags.
        
4.  [**Query and analysis configuration**](#3f32235bf71qt): Full-text indexing is enabled by default to support keyword searches. You can also enable field indexes for precise queries and analysis of structured fields to improve search efficiency.
    
5.  [**Verification and troubleshooting**](#42731966a6exw): After the configuration is complete, verify that logs are collected successfully. If you encounter issues such as data collection failure, heartbeat failure, or parsing errors, see [Troubleshooting FAQ](#81b57c81fe0ls).
    

## **Step 1: Install LoongCollector**

> LoongCollector is the next-generation log collection agent from SLS and is an upgraded version of Logtail. LoongCollector and Logtail cannot coexist. To install Logtail, see [Install, run, upgrade, and uninstall Logtail](/help/en/sls/install-run-upgrade-and-uninstall-logtail).

This topic describes only the basic installation flow for LoongCollector. For more information about the parameters, see [Installation and configuration](/help/en/sls/loongcollector-installation-kubernetes-1). If you have already installed LoongCollector or Logtail, skip this step and proceed to [Step 2: Create a logstore](#cdd8676d8d7ie).

**Note**

If the host time changes while LoongCollector (Logtail) is running, it might cause duplicate log collection or data loss.

## **ACK cluster**

Install LoongCollector from the Container Service for Kubernetes console. By default, logs are sent to an SLS project under the current Alibaba Cloud account.

1.  Log on to the [Container Service Management Console](https://cs.console.alibabacloud.com) . In the navigation pane on the left, click **Clusters**.
    
2.  Click the name of the target cluster.
    
3.  In the left navigation pane, click **Add-ons**.
    
4.  Go to the **Logs and Monitoring** tab, find **loongcollector**, and click **Install**.
    
    **Note**
    
    When you create a cluster, log service is enabled by default on the **Advanced Settings** section. You can choose to create a project or use the existing project.
    
    After the installation is complete, SLS automatically creates the following resources under the current account. Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com/) to view them.
    
    **Resource type**
    
    **Resource name**
    
    **Function**
    
    Project
    
    `k8s-log-${cluster_id}`
    
    A resource management unit that isolates logs of different services.
    
    > To create a Project for more flexible log resource management, see [Create a Project](/help/en/sls/manage-a-project/#89b98c40c765r).
    
    Machine group
    
    `k8s-group-${cluster_id}`
    
    A collection of log collection nodes.
    
    Logstore
    
    `config-operation-log`
    
    **Important**
    
    Do not delete this logstore.
    
    Stores logs of the loongcollector-operator component. Its billing method is the same as that of a regular logstore. For more information, see [Billable items of the pay-by-ingested-data mode](/help/en/sls/billing-items-in-the-pay-per-data-write-mode)**.** We recommend that you do not create collection configurations in this logstore.
    

## **Self-managed cluster**

1.  Connect to the Kubernetes cluster and run the command for your cluster's region:
    
    China regions
    
    ```
    wget https://aliyun-observability-release-cn-shanghai.oss-cn-shanghai.aliyuncs.com/loongcollector/k8s-custom-pkg/3.0.12/loongcollector-custom-k8s-package.tgz; tar xvf loongcollector-custom-k8s-package.tgz; chmod 744 ./loongcollector-custom-k8s-package/k8s-custom-install.sh
    ```
    
    Regions outside China
    
    ```
    wget https://aliyun-observability-release-ap-southeast-1.oss-ap-southeast-1.aliyuncs.com/loongcollector/k8s-custom-pkg/3.0.12/loongcollector-custom-k8s-package.tgz; tar xvf loongcollector-custom-k8s-package.tgz; chmod 744 ./loongcollector-custom-k8s-package/k8s-custom-install.sh
    ```
    
2.  Go to the `loongcollector-custom-k8s-package` directory and modify the `./loongcollector/values.yaml` configuration file.
    
    ```
    # ===================== Required Information =====================
    # The name of the project where logs from this cluster will be collected, for example, k8s-log-custom-sd89ehdq
    projectName: ""
    # The region of the project, for example, Shanghai: cn-shanghai
    region: ""
    # The UID of the Alibaba Cloud account that owns the project. Enclose it in quotation marks, for example, "123456789"
    aliUid: ""
    # The network to use. Optional parameters: Internet, Intranet. The default is Internet.
    net: Internet
    # The AccessKey ID and AccessKey secret of the Alibaba Cloud account or RAM user. The account must have the AliyunLogFullAccess system policy permission.
    accessKeyID: ""
    accessKeySecret: ""
    # A custom cluster ID. The name can contain only uppercase letters, lowercase letters, digits, and hyphens (-).
    clusterID: ""
    ```
    
3.  In the `loongcollector-custom-k8s-package` directory, run the following command to install LoongCollector and its dependent components:
    
    ```
    bash k8s-custom-install.sh install
    ```
    
4.  After the installation is complete, check the running status of the components.
    
    > If a pod fails to start, check whether the \`values.yaml\` configuration is correct and whether the relevant images were pulled successfully.
    
    ```
    # Check the pod status
    kubectl get po -n kube-system | grep loongcollector-ds
    ```
    
    SLS also automatically creates the following resources. Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com/) to view them.
    
    **Resource type**
    
    **Resource name**
    
    **Function**
    
    Project
    
    The value of `projectName` defined in the values.yaml file
    
    A resource management unit that isolates logs of different services.
    
    > To create a Project for more flexible log resource management, see [Create a Project](/help/en/sls/manage-a-project/#89b98c40c765r).
    
    Machine group
    
    `k8s-group-${cluster_id}`
    
    A collection of log collection nodes.
    
    Logstore
    
    `config-operation-log`
    
    **Important**
    
    Do not delete this logstore.
    
    Stores logs of the loongcollector-operator component. Its billing method is the same as that of a regular logstore. For more information, see [Pay-by-data-written billable items](/help/en/sls/billing-items-in-the-pay-per-data-write-mode). We recommend that you do not create collection configurations in this logstore.
    

## **Step 2: Create a logstore**

A logstore is the storage unit in SLS that is used to store collected logs.

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com) and click the name of the target project.
    
2.  In the navigation pane on the left, choose ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3359329571/p1013781.png)**Log Storage**, click **+**, and create a logstore:
    
    -   **Logstore Name**: Enter a name that is unique within the project. This name cannot be modified after creation.
        
    -   **Logstore Type**: Select Standard or Query based on the feature comparison.
        
    -   **Billing Mode**:
        
        -   **Pay-by-feature**: You are billed independently for each resource, such as storage, indexes, and read/write operations. This mode is suitable for small-scale use cases or use cases where feature usage is uncertain.
            
        -   **Pay-by-ingested-Data**: You are billed only for the volume of raw data that you write. This mode provides 30 days of free storage and free features, such as data transformation and delivery. It is suitable for business use cases where the storage period is close to 30 days or the data processing pipeline is complex.
            
    -   **Data Retention Period**: Specifies the number of days to retain logs. The value can be from 1 to 3,650. A value of 3,650 indicates permanent retention. The default value is 30 days.
        
    -   Keep the default values for the other settings and click **OK**. For more information, see [Manage a Logstore](/help/en/sls/manage-a-logstore).
        

## **Step 3: Create and configure log collection rules**

Define which logs LoongCollector collects, how it parses log structures, and how it filters content. Then, apply the configuration to a machine group.

1.  On the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7574404571/p992524.png) Logstores page, click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8096561571/p970744.png) to the left of the target logstore name to expand it.
    
2.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8096561571/p978728.png) icon next to **Data Collection**. In the **Quick Data Import** dialog box that appears, select a template based on the log source and click **Integrate Now**:
    
    -   For container standard output, select **K8S - Stdout and Stderr - New Version**.
        
        > Templates for collecting container standard output are available in new and old versions. We recommend that you use the new version. For more information about the differences between the new and old versions, see [Appendix: Comparison of New and Old Container Standard Output Versions](#d3fb7a82d3ec0).
        
    -   For cluster text logs, select **Kubernetes - File**.
        
3.  Configure the machine group and click **Next**.
    
    -   **Scenario**: Select **Kubernetes Clusters**.
        
    -   **Deployment Method**: Select **ACK Daemonset** or **Self-managed Cluster in Daemonset Mode**.
        
    -   From the source machine group list, add the system-created machine group `k8s-group-${cluster_id}` to the applied machine groups list.
        
4.  On the **Logtail Configuration** page, specify the following parameters and click **Next**.
    

### **1\. Global and input configurations**

Before you begin, make sure that you have selected a data import template and applied it to a machine group. In this step, you define the name of the collection configuration, the log source, and the collection scope.

## **Collect container standard output**

**Global Configurations**

-   **Configuration Name**: The name of the collection configuration. The name must be unique within the project and cannot be modified after it is created. The name must meet the following requirements:
    
    -   It can contain only lowercase letters, digits, hyphens (-), and underscores (\_).
        
    -   It must start and end with a lowercase letter or a digit.
        

**Input Configurations**

-   Turn on the **Stdout and Stderr** or **Standard Error** switch (both are enabled by default).
    
    **Important**
    
    Do not enable both standard output and standard error at the same time. This might cause confusion in the collected logs.
    

## **Collect cluster text logs**

**Global Configurations**:

-   **Configuration Name**: The name of the collection configuration. The name must be unique within the project and cannot be modified after it is created. The name must meet the following requirements:
    
    -   It can contain only lowercase letters, digits, hyphens (-), and underscores (\_).
        
    -   It must start and end with a lowercase letter or a digit.
        

**Input Configurations**:

-   **File Path Type**:
    
    -   **Path in Container**: Collects log files from within the container.
        
    -   **Host Path**: Collects local service logs on the host.
        
-   **File Path**: The absolute path of the log file to be collected.
    
    -   Linux: The path must start with a forward slash (/). For example, `/data/mylogs/**/*.log` indicates all files with the .log extension in the `/data/mylogs` directory and its subdirectories.
        
    -   Windows: The path must start with a drive letter, for example, `C:\Program Files\Intel\**\*.Log`.
        
-   **Maximum Directory Monitoring Depth**: The maximum directory depth that the wildcard character `**` can match in the **File Path**. The default value is 0, which indicates the current directory only. The value can range from 0 to 1,000.
    
    > If you set the depth to 0, you must configure the path to the directory where the files are located.
    

### **2\. Log processing and structuring**

Configure log processing rules to convert raw, unstructured logs into structured, searchable data. This improves the efficiency of log querying and analysis. Before you configure the rules, add a log sample:

On the **Logtail Configuration** page, in the **Processor Configurations** section, click **Add Sample Log** and enter the log content that you want to collect. The system identifies the log format based on the sample and helps you generate regular expressions and parsing rules. This simplifies the configuration.

#### **Use case 1: Multiline log processing (such as Java stack traces)**

Logs, such as Java exception stacks and JSON objects, often span multiple lines. In the default collection mode, they are split into multiple incomplete records, which causes a loss of context. To resolve this issue, enable multiline collection mode and configure a first-line regular expression to merge the consecutive lines of a log into a single, complete log entry.

**Example:**

**Raw log without any processing**

**In default collection mode, each line is a separate log, and the stack information is broken up, losing context**

**Enable multiline mode and use a first-line regular expression to identify the complete log, preserving the full semantic structure.**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7982143671/p1026273.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7982143671/p1026274.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7982143671/p1026276.png)

**Procedure:** In the **Processor Configurations** section of the **Logtail Configuration** page, enable **Multi-line Mode**:

-   **Type**: Select **Custom** or **Multi-line JSON**.
    
    -   **Custom**: Because the format of raw logs is not fixed, you must configure the **Regex to Match First Line** to identify the first line of each log entry.
        
        -   **Regex to Match First Line**: Automatically generate or manually enter a regular expression. The regular expression must match an entire line of data. For example, the regular expression that matches the data in the preceding example is `\[\d+-\d+-\w+:\d+:\d+,\d+]\s\[\w+]\s.*`.
            
            -   Automatic generation: Click **Generate**. Then, in the **Log Sample** text box, select the log content that you want to extract and click **Automatically Generate**.
                
            -   Manual input: Click **Manually Enter Regular Expression**. After you enter the expression, click **Validate**.
                
    -   **Multi-line JSON**: Select this option if all raw logs are in standard JSON format. SLS automatically handles line breaks within a single JSON log.
        

-   **Processing Method If Splitting Fails**:
    
    -   **Discard**: If a segment of text fails to match the start-of-line rule, it is discarded.
        
    -   **Retain Single Line**: Unmatched text is chunked and retained based on the original single-line pattern.
        

#### **Use case 2: Structured logs**

When raw logs are unstructured or semi-structured text, such as NGINX access logs or application output logs, direct querying and analysis are often inefficient. SLS provides a variety of data parsing plugins that can automatically convert raw logs of different formats into structured data. This provides a solid data foundation for subsequent analysis, monitoring, and alerting.

**Example:**

**Raw log without any processing**

**Log after structured parsing**

```
192.168.*.* - - [15/Apr/2025:16:40:00 +0800] "GET /nginx-logo.png HTTP/1.1" 0.000 514 200 368 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.*.* Safari/537.36"
```

```
body_bytes_sent: 368
http_referer: -
http_user_agent : Mozi11a/5.0 (Nindows NT 10.0; Win64; x64) AppleMebKit/537.36 (KHTML, like Gecko) Chrome/131.0.x.x Safari/537.36
remote_addr:192.168.*.*
remote_user: -
request_length: 514
request_method: GET
request_time: 0.000
request_uri: /nginx-logo.png
status: 200
time_local: 15/Apr/2025:16:40:00
```

**Procedure:** In the **Processor Configurations** section of the **Logtail Configuration** page:

1.  **Add a parsing plugin:** Click **Add Processor** to configure [regular expression parsing, separator parsing, JSON parsing, and other plugins](#48907a690f6qo) that match your log format. For example, to collect NGINX logs, select **Native Processor** > **Data Parsing (NGINX Mode)**.
    
2.  **NGINX Log Configuration**: Completely copy the `log_format` definition from the NGINX server configuration file (nginx.conf) and paste it into this text box.
    
    Example:
    
    ```
    log_format main  '$remote_addr - $remote_user [$time_local] "$request" ''$request_time $request_length ''$status $body_bytes_sent "$http_referer" ''"$http_user_agent"';
    ```
    
    **Important**
    
    The format definition must be exactly the same as the format that generates the logs on the server. Otherwise, log parsing fails.
    
3.  **Common configuration parameters:** The following parameters appear in multiple data parsing plugins. Their functions and usage are consistent.
    
    -   **Original Field:** Specify the name of the source field to be parsed. The default value is `content`, which represents the entire collected log content.
        
    -   **Retain Original Field if Parsing Fails:** We recommend that you select this option. If a log cannot be successfully parsed by the plugin due to a format mismatch, this option ensures that the original log content is not lost and is fully retained in the specified original field.
        
    -   **Retain Original Field if Parsing Succeeds:** If you select this option, the original log content is retained even if the log is parsed successfully.
        

### **3\. Log filtering**

During log collection, collecting a large volume of low-value or irrelevant logs, such as DEBUG- or INFO-level logs, can waste storage resources, increase costs, affect query efficiency, and pose data breach risks. To address these issues, use fine-grained filtering policies for efficient and secure log collection.

## **Reduce costs through content filtering**

Filter fields based on log content, such as collecting only logs with a level of WARNING or ERROR.

**Example:**

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

**Procedure:** In the **Processor Configurations** section of the **Logtail Configuration** page:

Click **Add Processor** and choose **Native Processor** > ****Data Filtering****:

-   **Field Name**: The log field to filter.
    
-   **Field Value**: The regular expression used for filtering. Only full-text matching is supported. Partial keyword matching is not supported.
    

## **Control collection scope through blacklists**

Use the blacklist mechanism to exclude specified directories or files. This prevents irrelevant or sensitive logs from being uploaded.

**Procedure:** In the **Input Configurations** section of the **Logtail Configuration** page, enable **Collection Blacklist** and click **Add**.

> Full matching and wildcard matching for directories and filenames are supported. The only supported wildcard characters are the asterisk (\*) and the question mark (?).

-   **File Path Blacklist**: The file paths to ignore. Examples:
    
    -   `/home/admin/private*.log`: During collection, all files in the `/home/admin/` directory that start with \`private\` and end with \`.log\` are ignored.
        
    -   `/home/admin/private*/*_inner.log`: During collection, files that end with \`\_inner.log\` in directories that start with \`private\` under the `/home/admin/` directory are ignored.
        
-   **File Blacklist**: The names of files to ignore during data collection. Example:
    
    -   `app_inner.log`: During collection, all files named `app_inner.log` are ignored.
        
-   **Directory Blacklist**: The directory path cannot end with a forward slash (/). Examples:
    
    -   `/home/admin/dir1/`: The directory blacklist will not take effect.
        
    -   `/home/admin/dir*`: All files in the subdirectories of `/home/admin/` that start with \`dir\` are ignored.
        
    -   `/home/admin/*/dir`: During collection, all files in subdirectories named \`dir\` at the second level under the `/home/admin/` directory are ignored. For example, files in the `/home/admin/a/dir` directory are ignored, but files in the `/home/admin/a/b/dir` directory are collected.
        

## Container filtering

Set collection conditions based on container metadata, such as environment variables, pod labels, namespaces, and container names, to precisely control which containers' logs are collected.

**Procedure:** In the **Input Configurations** section of the **Logtail Configuration** page, enable **Container Filtering** and click **Add**.

> Multiple conditions are combined using a logical AND. All regular expression matching is based on the Go language's RE2 engine. This engine has more limitations than other engines, such as PCRE. Therefore, you must write regular expressions that comply with the guidelines in [Appendix: Regular Expression Limits (Container Filtering)](#4ff2ac681ds0w).

-   Environment Variable Blacklist/Whitelist: Specify the environment variable conditions for the containers from which you want to collect logs.
    
-   K8s Pod Label Blacklist/Whitelist: Specify the label conditions for the pod where the containers from which you want to collect logs are located.
    
-   K8s Pod Name Regex Match: Specify the containers from which you want to collect logs by pod name.
    
-   K8s Namespace Regex Match: Specify the containers from which you want to collect logs by namespace name.
    
-   K8s Container Name Regex Match: Specify the containers from which you want to collect logs by container name.
    
-   Container Label Blacklist/Whitelist: Collect logs from containers whose labels meet the specified conditions. This is used in Docker use cases and is not recommended for Kubernetes use cases.
    

### **4\. Log categorization**

In use cases where multiple applications or instances share the same log format, it is difficult to distinguish the log source. This leads to a lack of context during querying and inefficient analysis. To resolve this issue, configure log topics and tags for automatic context association and logical categorization.

## Configure log topics

If the logs of multiple applications or instances have the same format but different paths, such as `/apps/app-A/run.log` and `/apps/app-B/run.log`, it is difficult to distinguish the source of the collected logs. In this case, you can generate topics based on machine groups, custom names, or file path extraction to flexibly distinguish logs from different services or path sources.

**Procedure:** Choose **Global Configurations** > **Other Global Configurations** > **Log Topic Type**. Select a topic generation method. The following three types are supported:

-   **Machine Group Topic:** If a collection configuration is applied to multiple machine groups, LoongCollector automatically uses the machine group name of the server as the value of the `__topic__` field for upload. This is suitable for use cases where logs are divided by host cluster.
    
-   **Custom**: The format is `customized://<custom_topic_name>`, for example, `customized://app-login`. This applies to static topic use cases with fixed business identities.
    
-   **File Path Extraction:** Extract key information from the full path of the log file to dynamically mark the log source. This is suitable for situations where multiple users or applications share the same log filename but have different paths.
    
    If multiple users or services write logs to different top-level directories but with the same subdirectory paths and filenames, the source cannot be distinguished by filename alone. For example:
    
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
    
    Configure **File Path Extraction** and use a regular expression to extract key information from the full path. The matched result is then used as the log topic for upload to the logstore.
    
    ###### **Extraction rules: Based on regular expression capturing groups**
    
    When you configure a regular expression, the system automatically determines the output field format based on the number and naming of capturing groups. The rules are as follows:
    
    > In the regular expression for the file path, you must escape the forward slash (/).
    
    **Capturing group type**
    
    **Use cases**
    
    **Generated field**
    
    **Regex example**
    
    **Example matched path**
    
    **Generated field**
    
    Single capturing group (only one `(.*?)`)
    
    Only one dimension is needed to distinguish the source, such as username or environment
    
    Generates the `__topic__` field
    
    `\/logs\/(.*?)\/app\.log`
    
    `/logs/userA/app.log`
    
    `__topic__: userA`
    
    Multiple capturing groups - unnamed (multiple `(.*?)`)
    
    Multiple dimensions are needed but without semantic labels
    
    Generates the tag field `__tag__:__topic_{i}__`, where `{i}` is the sequence number of the capturing group
    
    `\/logs\/(.*?)\/(.*?)\/app\.log`
    
    `/logs/userA/svcA/app.log`
    
    `__tag__:__topic_1__userA`.
    
    `__tag__:__topic_2__svcA`
    
    Multiple capturing groups - named (using `(?P<name>.*?)`)
    
    Multiple dimensions are needed, and clear field meanings are desired for easy querying and analysis
    
    Generates the tag field `__tag__:{name}`
    
    `\/logs\/(?P<user>.*?)\/(?P<service>.*?)\/app\.log`
    
    `/logs/userA/svcA/app.log`
    
    `__tag__:user: userA`;
    
    `__tag__:service:svcA`
    

## Log tagging

Enable the log tag enrichment feature to extract key information from container environment variables or Kubernetes pod labels and attach the information as tags for fine-grained log grouping.

**Procedure:** In the **Input Configurations** section of the **Logtail Configuration** page, enable **Log Tag Enrichment** and click **Add**.

-   **Environment Variables**: Configure an environment variable name and the tag name in which to store the value of the variable.
    
    -   Environment Variable Name: Specify the name of the environment variable to be extracted.
        
    -   Tag Name: The name of the environment variable tag.
        

-   **Pod Labels**: Configure the pod label name and the tag name. The value of the pod label is stored as the tag value.
    
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
            

## **Step 4: Query and analysis configuration**

After you configure log processing and plugins, click **Next** to go to the **Query and Analysis Configurations** page:

-   By default, the system enables the [full-text index](/help/en/sls/create-indexes#6f7eb27bcclmy), which lets you search for keywords in the raw content of logs.
    
-   To perform a term query by field, click **Automatic Index Generation** after the **Preview Data** is loaded. SLS generates a [field index](/help/en/sls/create-indexes) based on the first entry in the preview data.
    

After the configuration is complete, click **Next** to complete the setup of the collection process.

## **Step 5: Validation and troubleshooting**

After you create a collection configuration and apply it to a machine group, the system automatically deploys the configuration and starts to collect incremental logs.

### **View reported logs**

1.  **Confirm that the log file has new content**: LoongCollector collects only incremental logs. Run the `tail -f /path/to/your/log/file` command and trigger a service operation to ensure that new logs are being written.
    
2.  **Query logs**: Go to the query and analysis page of the target logstore and click **Search & Analyze**. The default time range is the last 15 minutes. Check whether new logs are flowing in. Each collected container text log contains the following default field information:
    
    **Field**
    
    **Description**
    
    **\_\_tag\_\_:\_\_hostname\_\_**
    
    The name of the container's host.
    
    **\_\_tag\_\_:\_\_path\_\_**
    
    The path of the log file within the container.
    
    **\_\_tag\_\_:\_container\_ip\_**
    
    The IP address of the container.
    
    **\_\_tag\_\_:\_image\_name\_**
    
    The name of the image used by the container.
    
    **\_\_tag\_\_:\_pod\_name\_**
    
    The name of the pod.
    
    **\_\_tag\_\_:\_namespace\_**
    
    The namespace to which the pod belongs.
    
    **\_\_tag\_\_:\_pod\_uid\_**
    
    The unique identifier (UID) of the pod.
    

### **Common troubleshooting issues**

#### **Machine group heartbeat status is FAIL**

1.  Check the user identifier: If your server type is not ECS, or if the ECS instance and the project belong to different Alibaba Cloud accounts, check whether the correct user identifier exists in the specified directory as shown in the following table.
    
    -   Linux: Run the `cd /etc/ilogtail/users/ && touch <uid>` command to create the user identifier file.
        
    -   Windows: Go to the `C:\LogtailData\users\` directory and create an empty file named `<uid>`.
        
    
    If a file named with the Alibaba Cloud account ID of the current project exists in the specified path, the user identifier is configured correctly.
    
2.  Check the machine group identifier: If you are using a machine group with a custom ID, check whether a `user_defined_id` file exists in the specified directory. If the file exists, check whether the content of the file matches the custom ID that is configured for the machine group.
    
    -   Linux:
        
        ```
        # Configure the custom user ID. If the directory does not exist, create it manually.
        echo "user-defined-1" > /etc/ilogtail/user_defined_id
        ```
        
    -   Windows: In the `C:\LogtailData` directory, create a file named `user_defined_id` and write the custom user ID into the file. If the directory does not exist, you must create it manually.
        
3.  If both the user identity and the machine group identity are configured correctly, see [LoongCollector (Logtail) Machine Group Troubleshooting Guide](/help/en/sls/troubleshoot-the-errors-related-to-logtail-machine-groups) for more information about troubleshooting.
    

* * *

#### **Log collection errors or format errors**

Troubleshooting: This issue indicates that the network connection and basic configuration are normal. The issue is typically caused by a mismatch between the **log content** and the **parsing rules**. You must view the specific error message to locate the cause of the issue:

1.  On the **Logtail Configuration** page, click the name of the LoongCollector (Logtail) configuration that has a collection error. On the **Log Collection Error** tab, click **Select Time Range** to set the query time range.
    
2.  In the **Collection Exception Monitoring** > **Complete Error Information** section, view the alarm metric of the error log and find the corresponding solution in [Common Data Collection Errors](/help/en/sls/log-collection-error-type).
    

## **What to do next**

1.  [Log query and analysis](/help/en/sls/quick-guide-to-query-and-analysis)
    
2.  [Data visualization](/help/en/sls/dashboard-overview): Use visualization dashboards to monitor key metric trends.
    
3.  [Automatic alerting for data anomalies](/help/en/sls/configure-an-alert-monitoring-rule-in-log-service): Set alert policies to detect system anomalies in real time.
    

## **Troubleshooting: No data collected from container logs**

1.  Check for new logs: After you configure LoongCollector (Logtail) for collection, if there are no new logs in the target log file, LoongCollector (Logtail) does not collect data from that file.
    

**2\. View LoongCollector (Logtail) runtime logs**

View the runtime logs of LoongCollector (Logtail) to obtain detailed error information.

1.  **Log on to the Logtail container**:
    
    1.  Query the Logtail pod.
        
        ```
        kubectl get po -n kube-system | grep logtail
        ```
        
        The system returns a result similar to the following one.
        
        ```
        logtail-ds-****d                                             1/1       Running    0          8d
        logtail-ds-****8                                             1/1       Running    0          8d
        ```
        
    2.  Log on to the pod.
        
        ```
        kubectl exec -it -n kube-system logtail-ds-****d -- bash
        ```
        
        In this example, `logtail-ds-****d` is the pod ID. Replace it with the actual value.
        

2.  **View Logtail runtime logs**:
    
    Logtail logs are stored in the `/usr/local/ilogtail/` directory within the Logtail container. The filenames are `ilogtail.LOG` and `logtail_plugin.LOG`. Log on to the Logtail container and run the following commands to view the log files:
    
    ```
    Go to the /usr/local/ilogtail/ directory.
    cd /usr/local/ilogtail
    
    View the ilogtail.LOG and logtail_plugin.LOG files.
    cat ilogtail.LOG
    cat logtail_plugin.LOG
    ```
    
    **Purpose:** Check the alarm type in the error logs and find the corresponding solution in [Common errors in Simple Log Service data collection](/help/en/sls/log-collection-error-type).
    

**3\. Check the machine group heartbeat**

Check the machine group heartbeat status: Go to the  **![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8096561571/p979489.png) Resources** > **Machine Groups** page and click the name of the target machine group. In the **Machine Group Configurations** > **Machine Group Status** section, view the **Heartbeat** status and record the number of nodes with an OK heartbeat status.

1.  Check the number of worker nodes in the container cluster.
    
    1.  [Get a cluster kubeconfig and connect to the cluster using kubectl](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/obtain-the-kubeconfig-file-of-a-cluster-and-use-kubectl-to-connect-to-the-cluster).
        
    2.  View the number of worker nodes in the cluster.
        
        ```
        kubectl get node | grep -v master
        ```
        
        The system returns a result similar to the following one.
        
        ```
        NAME                                 STATUS    ROLES     AGE       VERSION
        cn-hangzhou.i-bp17enxc2us3624wexh2   Ready     <none>    238d      v1.10.4
        cn-hangzhou.i-bp1ad2b02jtqd1shi2ut   Ready     <none>    220d      v1.10.4
        ```
        
2.  Check whether the number of nodes with a heartbeat status of **OK** matches the number of worker nodes in the container cluster. Choose a troubleshooting method based on the comparison result.
    
    -   The heartbeat status of all nodes in the machine group is **Failed**:
        
        -   If it is a self-managed cluster, check whether the following parameters are configured correctly: `{regionId}`, `{aliuid}`, `{access-key-id}`, and `{access-key-secret}`.
            
            If they are incorrect, run the `helm del --purge alibaba-log-controller` command to delete the installation package and then reinstall it.
            
    -   The number of nodes with an OK heartbeat status is less than the number of worker nodes in the cluster.
        
        -   Determine whether a DaemonSet has been manually deployed using a YAML file.
            
            1.  Run the following command. If a result is returned, a DaemonSet was previously deployed manually using a YAML file.
                
                ```
                kubectl get po -n kube-system -l k8s-app=logtail
                ```
                
            2.  [Download the latest version of the DaemonSet template.](https://logtail-release.oss-cn-hangzhou.aliyuncs.com/docker/k8s/logtail-daemonset.yaml)
                
            3.  Configure parameters such as _${your\_region\_name}_, _${your\_aliyun\_user\_id}_, and _${your\_machine\_group\_name}_.
                
            4.  Update the resource.
                
                ```
                kubectl apply -f ./logtail-daemonset.yaml
                ```
                
    

**4\. Check the collection configuration filter conditions**

In the SLS console, check the Logtail collection configuration. Pay close attention to whether the **IncludeLabel**, **ExcludeLabel**, **IncludeEnv**, **ExcludeEnv**, and other settings in the Logtail configuration meet your collection requirements.

-   The label in this context refers to the container label, which is the label in Docker inspect, not the label in Kubernetes.
    
-   Temporarily remove the **IncludeLabel**, **ExcludeLabel**, **IncludeEnv**, and **ExcludeEnv** configurations to check whether logs can be collected as normal. If they can, the configuration of these parameters is incorrect.
    

## **FAQ**

### **How do I manage multi-target distribution configurations?**

Multi-target distribution configurations are associated with multiple logstores. Manage these configurations from the project-level management page:

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com/) and click the name of the target project.
    
2.  On the project page, choose ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7938948671/p1041414.png) **Resources** > **Configurations** from the navigation pane on the left.
    
    **Note**
    
    This page provides centralized management for all collection configurations in the project, including configurations that remain after their associated logstores are accidentally deleted.
    

### **How do I send ACK cluster logs to a project in another Alibaba Cloud account?**

Manually install the SLS **LoongCollector (Logtail)** component in the ACK cluster and configure it with the Alibaba Cloud account ID or access credential (AccessKey) of the target account. This lets you send container logs to an SLS project that belongs to another Alibaba Cloud account.

**Use case**: You want to collect log data from an ACK cluster and send it to an SLS project that belongs to a different Alibaba Cloud account for reasons such as organizational structure, permission isolation, or unified monitoring. Manually install LoongCollector (Logtail) for cross-account configuration.

**Procedure**: The following procedure describes how to manually install LoongCollector. For information about how to install Logtail, see [Install and configure Logtail](/help/en/sls/install-run-upgrade-and-uninstall-logtail).

1.  Connect to the Kubernetes cluster and run the command for your cluster's region:
    
    China regions
    
    ```
    wget https://aliyun-observability-release-cn-shanghai.oss-cn-shanghai.aliyuncs.com/loongcollector/k8s-custom-pkg/3.0.12/loongcollector-custom-k8s-package.tgz; tar xvf loongcollector-custom-k8s-package.tgz; chmod 744 ./loongcollector-custom-k8s-package/k8s-custom-install.sh
    ```
    
    Regions outside China
    
    ```
    wget https://aliyun-observability-release-ap-southeast-1.oss-ap-southeast-1.aliyuncs.com/loongcollector/k8s-custom-pkg/3.0.12/loongcollector-custom-k8s-package.tgz; tar xvf loongcollector-custom-k8s-package.tgz; chmod 744 ./loongcollector-custom-k8s-package/k8s-custom-install.sh
    ```
    
2.  Go to the `loongcollector-custom-k8s-package` directory and modify the `./loongcollector/values.yaml` configuration file.
    
    ```
    # ===================== Required Information =====================
    # The name of the project where logs from this cluster will be collected, for example, k8s-log-custom-sd89ehdq
    projectName: ""
    # The region of the project, for example, Shanghai: cn-shanghai
    region: ""
    # The UID of the Alibaba Cloud account that owns the project. Enclose it in quotation marks, for example, "123456789"
    aliUid: ""
    # The network to use. Optional parameters: Internet, Intranet. The default is Internet.
    net: Internet
    # The AccessKey ID and AccessKey secret of the Alibaba Cloud account or RAM user. The account must have the AliyunLogFullAccess system policy permission.
    accessKeyID: ""
    accessKeySecret: ""
    # A custom cluster ID. The name can contain only uppercase letters, lowercase letters, digits, and hyphens (-).
    clusterID: ""
    ```
    
3.  In the `loongcollector-custom-k8s-package` directory, run the following command to install LoongCollector and its dependent components:
    
    ```
    bash k8s-custom-install.sh install
    ```
    
4.  After the installation is complete, check the running status of the components.
    
    > If a pod fails to start, check whether the \`values.yaml\` configuration is correct and whether the relevant images were pulled successfully.
    
    ```
    # Check the pod status
    kubectl get po -n kube-system | grep loongcollector-ds
    ```
    
    SLS also automatically creates the following resources. Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com/) to view them.
    
    **Resource type**
    
    **Resource name**
    
    **Function**
    
    Project
    
    The value of `projectName` defined in the values.yaml file
    
    A resource management unit that isolates logs of different services.
    
    > To create a Project for more flexible log resource management, see [Create a Project](/help/en/sls/manage-a-project/#89b98c40c765r).
    
    Machine group
    
    `k8s-group-${cluster_id}`
    
    A collection of log collection nodes.
    
    Logstore
    
    `config-operation-log`
    
    **Important**
    
    Do not delete this logstore.
    
    Stores logs of the loongcollector-operator component. Its billing method is the same as that of a regular logstore. For more information, see [Pay-by-data-written billable items](/help/en/sls/billing-items-in-the-pay-per-data-write-mode). We recommend that you do not create collection configurations in this logstore.
    

### How can I collect logs from the same file or container standard output using multiple collection configurations**?**

By default, to prevent data duplication, SLS allows each log source to be collected by only one collection configuration:

-   A text log file can match only one Logtail collection configuration.
    
-   A container's standard output (stdout):
    
    -   If you use the new version of the standard output template, the standard output can be collected by only one standard output collection configuration by default.
        
    -   If you use the old version of the standard output template, no extra configuration is required. It supports multiple collections by default.
        

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com) and go to the target project.
    
2.  In the navigation pane on the left, choose ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7574404571/p992524.png)Logstores and find the target logstore.
    
3.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8096561571/p970744.png) icon before its name to expand the logstore.
    
4.  Click **Logtail Configuration**. In the configuration list, find the target Logtail configuration and click **Manage Logtail Configuration** in the Actions column.
    
5.  On the Logtail configuration page, click **Edit** and scroll down to the **Input Configurations** section:
    
    -   To collect text file logs: Enable Allow File To Be Collected For Multiple Times.
        
    -   To collect container standard output: Enable **Allow Collection By Different Logtail Configurations**.
        

### Why do I get a dependency error when uninstalling the loongcollector(logtail-ds) component in ACK?

**Problem:** When you try to delete the loongcollector (logtail-ds) log collection component in Container Service for Kubernetes (ACK), the system reports an error: \`The dependencies of this component are not met\`.

`Dependencies of addons are not met: terway-eniip depends on logtail-ds(>0.0) whose version is v3.x.x.x-aliyun or will be v3.x.x.x-aliyun`.

**Cause:** The `terway-eniip` network plugin has the log collection feature enabled, which depends on the loongcollector (logtail-ds) component. Therefore, ACK does not allow you to directly uninstall loongcollector (logtail-ds) before you remove this dependency.

**Solution:** Follow these steps to remove the dependency and then uninstall the component:

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com/).
    
2.  In the cluster list, click the name of the target cluster.
    
3.  In the navigation pane on the left, click **Add-ons**.
    
4.  In the component list, search for and find the `terway-eniip` component. Click **![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7982143671/p1024622.png)** > **Disable Logging**.
    
5.  In the dialog box that appears, click **OK**.
    
6.  After the configuration takes effect, try to uninstall the loongcollector (logtail-ds) component again.
    

### Why is the last log entry reported after a long delay? Why is it sometimes truncated?

**Cause:** Logs are usually truncated if a log file is missing a line feed at the end, or if a multiline log, such as an exception stack, has not been fully written. Because the collector cannot determine whether the log has ended, the last part of the content might be split prematurely or reported with a delay. The handling mechanism differs based on the version of LoongCollector (Logtail):

-   Versions earlier than 1.8:  
    If the last line of a log does not have a line feed (carriage return), or if a multiline log paragraph is not finished, the collector waits for the next write to trigger an output. This can cause the last log entry to be held for a long time without being sent until a new log is written.
    
-   Version 1.8 and later:  
    A timeout refresh mechanism was introduced to prevent logs from getting stuck. When an incomplete log line is detected, the system starts a timer. After the timeout period ends, the current content is automatically submitted, which ensures that the log is eventually collected.
    
    -   Default timeout: 60 seconds. This ensures integrity in most use cases.
        
    -   Adjust this value as needed, but do not set it to 0. This might cause logs to be truncated or partially lost.
        

**Solution:**

Extend the waiting time to ensure that the complete log is written before it is collected:

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com/) and go to the target project.
    
2.  In the navigation pane on the left, choose ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8395532671/p1020786.png)Logstores and find the target logstore.
    
3.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8395532671/p1020787.png) icon before its name to expand the logstore.
    
4.  Click **Logtail Configuration**. In the configuration list, find the target Logtail configuration and click **Manage Logtail Configuration** in the Actions column.
    
5.  On the Logtail configuration page, click **Edit**:
    
    -   Choose **Input Configurations** > **Other Input Configurations** > **Advanced Parameters**. Add the following JSON configuration to customize the timeout period.
        
        ```
        {
          "FlushTimeoutSecs": 1
        }
        ```
        
        -   Default value: Determined by the startup parameter `default_reader_flush_timeout`, which is usually a few seconds.
            
        -   Unit: Seconds.
            
        -   Recommended value: ≥1 second. Do not set it to 0. This might cause logs to be truncated or partially lost.
            
6.  After configuration, click **Save**.
    

### **Why does LoongCollector (Logtail) switch from an internal network domain to the public network during operation? Can it switch back automatically?**

If LoongCollector (Logtail) detects an anomaly in internal network domain communication, such as a network failure or connection timeout, the system automatically switches to the public domain name for data transmission. This ensures the continuity and reliability of log collection and prevents log accumulation or loss.

-   LoongCollector: Automatically switches back to the internal network after the network is restored.
    
-   Logtail: Does not automatically switch back. You must manually restart it to resume internal network communication.
    

## **Appendix: Detailed explanation of native plugins**

In the **Processor Configurations** section of the **Logtail Configuration** page, add processors to structure raw logs. To add a processing plugin to an existing collection configuration, follow these steps:

1.  In the navigation pane on the left, choose ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2061560671/p1016459.png)Logstores and find the target logstore.
    
2.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2061560671/p1016460.png) icon before its name to expand the logstore.
    
3.  Click **Logtail Configuration**. In the configuration list, find the target Logtail configuration and click **Manage Logtail Configuration** in the Actions column.
    
4.  On the Logtail configuration page, click **Edit**.
    

> This section introduces only commonly used processing plugins that cover common log processing use cases. For more features, see [Extended processors](/help/en/sls/developer-reference/api-sls-2020-12-30-createlogtailpipelineconfig#%E6%89%A9%E5%B1%95%E5%A4%84%E7%90%86%E6%8F%92%E4%BB%B6).

**Important**

**Rules for combining plugins (for LoongCollector / Logtail 2.0 and later):**

-   Native and extended processors can be used independently or combined as needed.
    
-   Prioritize native processor because they offer better performance and higher stability.
    
-   When native features cannot meet your business needs, add extended processors after the configured native ones for supplementary processing.
    

**Order constraint:**

All plugins are executed sequentially in the order they are configured, which forms a processing chain. Note: **All native processors must precede any extended processors. After you add an extended processor, you cannot add more native processors.**

### **Regular expression parsing**

Use regular expressions to extract log fields and parse the log into key-value pairs. Each field can be independently queried and analyzed.

**Example:**

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

**Procedure:** In the **Processor Configurations** section of the **Logtail Configuration** page, click **Add Processor** and choose **Native Processor** > ****Data Parsing (Regex Mode)****:

-   **Regular Expression**: Matches logs and supports automatic generation or manual input:
    
    -   Automatic generation:
        
        -   Click **Generate**.
            
        -   In the **Log Sample** text box, select the log content that you want to extract.
            
        -   Click **Generate Regular Expression**.
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1446191571/p982663.png)
            
    -   Manual input: Click **Manually Enter Regular Expression** based on the log format.
        
    
    After configuration, click **Validate** to test whether the regular expression can correctly parse the log content.
    
-   **Extracted Field**: For the fetched log content (Value), set the corresponding field name (Key).
    
-   For more information about the other parameters, see the descriptions of common configuration parameters in [Use case 2: Structured logs](#7874b2de35pf5).
    

* * *

### **Delimiter-based parsing**

Use a delimiter to structure the log content and parse it into multiple key-value pairs. Both single-character and multi-character delimiters are supported.

**Example:**

**Raw log without any processing**

**Split fields by the specified character**`**,**`

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

**Procedure:** In the **Processor Configurations** section of the **Logtail Configuration** page, click **Add Processor** and choose **Native Processor** > **Data Parsing (Delimiter Mode)**:

-   **Delimiter**: Specifies the character used to split the log content.
    
    For example, for CSV files, select **Custom** and enter a comma (,).
    
-   **Quote**: If a field value contains a separator, you must specify a quote to enclose that field to prevent incorrect splitting.
    
-   **Extracted Field**: Set a field name (Key) for each column in the order that the columns are separated. The following rules apply:
    
    -   Field names can contain only letters, digits, and underscores (\_).
        
    -   Field names must start with a letter or an underscore (\_).
        
    -   The maximum length is 128 bytes.
        
-   For more information about the other parameters, see the description of common configuration parameters in [Use case 2: Structured logs](#7874b2de35pf5).
    

* * *

### **Standard JSON parsing**

Structure an object-type JSON log and parse it into key-value pairs.

**Example:**

**Raw log without any processing**

**Standard JSON key-value pairs are automatically extracted**

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

**Procedure:** In the **Processor Configurations** section of the **Logtail Configuration** page, click **Add Processor** and choose **Native Processor** > ****Data Parsing (JSON Mode)****:

-   **Original Field**: The default value is content. This field is used to store the raw log content for parsing.
    
-   For more information about the other parameters, see the description of common configuration parameters in [Use case 2: Structured logs](#7874b2de35pf5).
    

* * *

### **Nested JSON parsing**

Parse a nested JSON log into key-value pairs by specifying the expansion depth.

**Example:**

**Raw log without any processing**

**Expansion depth: 0,** with the expansion depth used as a prefix

**Expansion depth: 1,** with the expansion depth used as a prefix

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

**Procedure:** In the **Processor Configurations** section of the **Logtail Configuration** page, click **Add Processor** and choose **Extended Processor** > ****Expand JSON Field****:

-   **Original Field**: The name of the source field to expand, such as `content`.
    
-   **JSON Expansion Depth**: The number of levels to expand in a JSON object. A value of 0 means full expansion (default), 1 means the current level, and so on.
    
-   **Character to Concatenate Expanded Keys**: The delimiter used to join field names during JSON expansion. The default is an underscore \_.
    
-   **Name Prefix of Expanded Keys**: Specifies the prefix for field names after JSON expansion.
    
-   **Expand Array**: Expands an array into indexed key-value pairs.
    
    Example: `{"k":["a","b"]}` is expanded to `{"k[0]":"a","k[1]":"b"}`.
    
    > To rename the expanded fields (for example, changing \`prefix\_s\_key\_k1\` to \`new\_field\_name\`), you can later add a **Rename Field** plugin to complete the mapping.
    
-   For more information about the other parameters, see the description of common configuration parameters in [Use case 2: Structured logs](#7874b2de35pf5).
    

* * *

### **JSON array parsing**

Use the `json_extract` [function](/help/en/sls/json-functions) to fetch a JSON object from a JSON array.

**Example:**

**Raw log without any processing**

**Extracted JSON array structure**

```
[{"key1":"value1"},{"key2":"value2"}]
```

```
json1:{"key1":"value1"}
json2:{"key2":"value2"}
```

**Configuration steps:** In the **Processor Configurations** section of the **Logtail Configuration** page, switch the **Processing Method** to **SPL**, configure the **SPL Statement**, and use the [json\_extract](/help/en/sls/json-functions) function to extract JSON objects from a JSON array.

**Example:** Extract elements from the JSON array in the log field `content` and store the results in new fields `json1` and `json2`.

```
* | extend json1 = json_extract(content, '$[0]'), json2 = json_extract(content, '$[1]')
```

* * *

### **Apache log parsing**

Structure the log content into multiple key-value pairs based on the definition in the Apache log configuration file.

**Example:**

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

**Procedure:** In the **Processor Configurations** section of the **Logtail Configuration** page, , click **Add Processor** and choose **Native Processor** > ****Data Parsing (Apache Mode)****:

-   **Log Format**: **combined**
    
-   **APACHE LogFormat Configuration**: The system automatically fills the configuration based on the **Log Format**.
    
    **Important**
    
    Make sure to verify the auto-filled content to ensure it is exactly the same as the LogFormat defined in the Apache configuration file on the server, which is usually located at \`/etc/apache2/apache2.conf\`.
    
-   For more information about the other parameters, see the description of common configuration parameters in [Use case 2: Structured logs](#7874b2de35pf5).
    

* * *

### **Data masking**

Mask sensitive data in logs.

**Example:**

**Raw log without any processing**

**Masking result**

```
[{'account':'1812213231432969','password':'04a23f38'}, {'account':'1812213685634','password':'123a'}]
```

```
[{'account':'1812213231432969','password':'********'}, {'account':'1812213685634','password':'********'}]
```

**Procedure:** In the **Processor Configurations** section of the **Logtail Configuration** page, click **Add Processor** and choose **Native Processor** > **Data Masking**:

-   **Original Field**: The field used to store log content before parsing.
    
-   Data Masking Method:
    
    -   **const**: Replaces the sensitive content with a specified string.
        
    -   **md5**: Replaces the sensitive content with its corresponding MD5 hash.
        
-   **Replacement String**: If you set **Data Masking Method** to **const**, you must enter a string to replace the sensitive content.
    
-   **Content Expression that Precedes Replaced Content**: Used to find sensitive content, configured using [RE2 syntax](https://github.com/google/re2/blob/master/doc/syntax.txt).
    
-   **Content Expression to Match Replaced Content**: An expression for sensitive content, configured using [RE2 syntax](https://github.com/google/re2/blob/master/doc/syntax.txt).
    

* * *

### **Time parsing**

Parse the time field in the log and set the parsing result as the log's `__time__` field.

**Example:**

**Raw log without any processing**

**Time parsing**

```
{"level":"INFO","timestamp":"2025-09-23T19:11:47+0800","cluster":"yilu-cluster-0728","message":"User logged in successfully","userId":"user-123"}
```

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3359329571/p1012909.png)

**Procedure:** In the **Processor Configurations** section of the **Logtail Configuration** page, click **Add Processor** and choose **Native Processor** > **Time Parsing**:

-   **Original Field**: The field that stores the original log content before parsing.
    
-   **Time Format**: Set the time format based on the time content in the log.
    
-   **Time Zone**: Select the time zone of the time field in the log. The default is the machine time zone, which is the time zone of the environment where the Logtail process is running.
    

## **Appendix: Regular expression limits (container filtering)**

The regular expressions for **container filtering** are based on the Go RE2 engine. The RE2 engine has several syntax limitations compared to other engines, such as Perl Compatible Regular Expressions (PCRE). Note the following when you write regular expressions:

1\. Named group syntax differences

Go uses the `(?P<name>...)` syntax to define named groups and does not support the `(?<name>...)` syntax from PCRE.

-   Correct: `(?P<year>\d{4})`
    
-   Incorrect: `(?<year>\d{4})`
    

2\. Unsupported regular expression features

The following common but complex regular expression features are not supported by RE2. Avoid using them:

-   **Assertions:** `(?=...)`, `(?!...)`, `(?<=...)`, or `(?<!...)`
    
-   **Conditional expressions:** `(?(condition)true|false)`
    
-   **Recursive matching:** `(?R)` or `(?0)`
    
-   **Subprogram references:** `(?&name)` or `(?P>name)`
    
-   **Atomic groups:** `(?>...)`
    

3\. Recommendations

Use a tool such as [Regex101](https://regex101.com/) to debug regular expressions. To validate compatibility, select the Golang (RE2) mode. The plugin cannot parse or match expressions that contain unsupported syntax.

## **Appendix: Comparison of new and old versions of container standard output**

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

**Parameter**

**Description**

Configuration Name

The name of the Logtail configuration. It must be unique within its project. The name cannot be changed after the Logtail configuration is created.

Log Topic Type

Select the method for generating the log topic. Options include Machine Group Topic, File Path Extraction, and Custom.

Advanced Parameters

For other optional advanced feature parameters related to the global configuration, see [Create Logtail Pipeline Configuration](https://next.api.aliyun.com/document/Sls/2020-12-30/CreateLogtailPipelineConfig?spm=api-workbench.api_explorer.0.0.4c5f31f27Lmdh1#request_params_desc).

### **Input configuration parameters**

**Parameter**

**Description**

Logtail Deployment Mode

**DaemonSet**: Deploys one LoongCollector on each node of the cluster to collect logs from all containers on that node.

**Sidecar**: Each pod runs a LoongCollector container to collect logs from all containers within that pod. Log collection for different pods is isolated.

File Path Type

Configure a **Path in Container** or **Host Path**.

-   **Path In Container**: Select this to collect text log files from within a container.
    
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

Stdout and Stderr

After you enable **Stdout and Stderr**, Logtail collects the container's standard output.

Standard Error

After you enable **Standard Error**, Logtail collects the container's standard error.

Allow File To Be Collected For Multiple Times

By default, a container's standard output logs can match only one new-version Logtail standard output collection configuration. If the standard output needs to be collected by multiple new-version standard output collection configurations, you must enable **Allow File To Be Collected For Multiple Times**.

Enable Container Metadata Preview

After you enable **Enable Container Metadata Preview**, view container metadata after you create a Logtail configuration. This metadata includes matched container information and full container information.

Container Filtering

-   **Filter condition description**
    

**Important**

-   Container labels are retrieved by running the docker inspect command and are different from Kubernetes labels. For more information about how to retrieve container labels, see [Obtain container labels](/help/en/sls/how-do-i-obtain-the-labels-and-environment-variables-of-a-container#section-7rp-xn8-crg).
    
-   Environment variables are the variables that are configured during container startup. For more information about how to obtain environment variables, see [Obtaining Container Environment Variables](/help/en/sls/how-do-i-obtain-the-labels-and-environment-variables-of-a-container#section-0a0-n4l-zhi).
    
-   In Kubernetes use cases, we recommend that you use Kubernetes-level information, such as **K8s Pod Name Regex Match**, **K8s Namespace Regex Match**, **K8s Container Name Regex Match**, and **K8s Pod Label Whitelist**, for container filtering.
    

1.  The namespace and container name in Kubernetes are mapped to container labels, specifically `io.kubernetes.pod.namespace` and `io.kubernetes.container.name`. We recommend that you use these two container labels for container filtering. For example, if a pod belongs to the `backend-prod` namespace and the container name is `worker-server`, set the container label whitelist to `io.kubernetes.pod.namespace : backend-prod` or `io.kubernetes.container.name : worker-server` to collect logs from that container.
    
2.  If these two container labels do not meet your filtering needs, use the environment variable blacklist and whitelist for container filtering.
    

K8s Pod Name Regular Matching

Specify the containers to be collected by pod name. Regular expression matching is supported. For example, if you set this parameter to `^(nginx-log-demo.*)$`, all containers in pods whose names start with \`nginx-log-demo\` are matched.

**K8s Namespace Regular Matching**

Specify the containers to be collected by namespace name. Regular expression matching is supported. For example, if you set this parameter to `^(default|nginx)$`, all containers in the `nginx` and `default` namespaces are matched.

**K8s Container Name Regular Matching**

Specify the containers to be collected by container name. The Kubernetes container name is defined in `spec.containers`. Regular expression matching is supported. For example, if you set this parameter to `^(container-test)$`, all containers named `container-test` are matched.

**Container Label Whitelist**

The container label whitelist specifies the containers to be collected. It is empty by default, which means all container standard outputs are collected. To set a container label whitelist, the LabelKey is required, and the LabelValue is optional.

-   If LabelValue is empty, all containers with a label that includes the LabelKey are matched.
    
-   If LabelValue is not empty, only containers with a label that matches LabelKey=LabelValue are matched.
    
    By default, LabelValue performs string matching, which means a match occurs only if the value for LabelValue is identical to the container's label value. If the value starts with `^` and ends with `$`, it is a regular expression match. For example, if you set **LabelKey** to io.kubernetes.container.name and **LabelValue** to ^(nginx|cube)$, containers named `nginx` or `cube` are matched.
    

Multiple whitelist entries have an OR relationship, which means a container is matched if its label satisfies any of the whitelist entries.

**Container Label Blacklist**

The container label blacklist excludes containers from collection. It is empty by default, which means no containers are excluded. To set a container label blacklist, the LabelKey is required, and the LabelValue is optional.

-   If LabelValue is empty, all containers with a label that includes the LabelKey are excluded.
    
-   If LabelValue is not empty, only containers with a label that matches LabelKey=LabelValue are excluded.
    
    By default, LabelValue is used for string matching, which requires an exact match with the container's label value. If the value starts with `^` and ends with `$`, a regular expression match is performed. For example, if you set **LabelKey** to io.kubernetes.container.name and **LabelValue** to ^(nginx|cube)$, containers named \`nginx\` or \`cube\` are matched.
    

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
    
    By default, LabelValue is a string match, which means it matches only if the LabelValue is exactly the same as the Kubernetes label's value. If the value starts with `^` and ends with `$`, it is a regular expression match. For example, if you set **LabelKey** to app and **LabelValue** to ^(test1|test2)$, containers with the Kubernetes labels \`app:test1\` or \`app:test2\` are matched.
    

Multiple whitelist entries have an OR relationship, which means a container is matched if its Kubernetes label satisfies any of the whitelist entries.

**Note**

-   If you change Kubernetes labels when Kubernetes control resources, such as Deployments, are running, the operational pod is not restarted. Therefore, the pod cannot detect the change. This may cause a matching rule to become invalid. When you configure Kubernetes label blacklists and whitelists, we recommend that you use the Kubernetes labels of pods. For more information about Kubernetes labels, see [Labels and Selectors](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/).
    

**K8s Pod Label Blacklist**

Exclude containers from collection using a Kubernetes label blacklist. To set a Kubernetes label blacklist, the LabelKey is required, and the LabelValue is optional.

-   If LabelValue is empty, all containers with a Kubernetes label that includes the LabelKey are excluded.
    
-   If LabelValue is not empty, only containers with a Kubernetes label that matches LabelKey=LabelValue are excluded.
    
    By default, string matching is performed for LabelValue. A match occurs only if the value of LabelValue is exactly the same as the value of the Kubernetes label. If the value starts with `^` and ends with `$`, regular expression matching is performed. For example, if you set **LabelKey** to app and **LabelValue** to ^(test1|test2)$, containers with the Kubernetes labels \`app:test1\` or \`app:test2\` are matched.
    

Multiple blacklist entries have an OR relationship, which means a container is excluded if its Kubernetes label satisfies any of the blacklist entries.

**Note**

-   If you change Kubernetes labels when Kubernetes control resources, such as Deployments, are running, the operational pod is not restarted. Therefore, the pod cannot detect the change. This may cause a matching rule to become invalid. When you configure the Kubernetes label whitelist and the Kubernetes label blacklist, we recommend that you use the Kubernetes labels of pods. For more information about Kubernetes labels, see [Labels and Selectors](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/).
    

Log Tag Enrichment

Add environment variables and Kubernetes labels to logs as log tags.

**Environment Variables**

After you configure this parameter, SLS adds environment variable-related fields to logs. For example, if you set **Environment Variable Name** to VERSION and **Tag Name** to env\_version, and a container includes the environment variable `VERSION=v1.0.0`, this information is added to the log as the field **\_\_tag\_\_:\_\_env\_version\_\_: v1.0.0**.

**Pod Labels**

After you configure this parameter, SLS adds Kubernetes pod label-related fields to logs. For example, if you set **Pod Label Name** to app and **Tag Name** to `k8s_pod_app`, and a Kubernetes pod includes the label `app=serviceA`, this information is added to the log as the field **\_\_tag\_\_:\_\_k8s\_pod\_app\_\_: serviceA**.

File Encoding

Select the encoding format of the log file.

First Collection Size

When the configuration first takes effect, this is the size from the end of the file from which collection starts. The default initial collection size is 1,024 KB. The value can range from 0 to 10,485,760 KB.

-   For the first collection, if the file is smaller than 1,024 KB, collection starts from the beginning of the file.
    
-   For the first collection, if the file is larger than 1,024 KB, collection starts from 1,024 KB from the end of the file.
    

The value can range from 0 to 10,485,760 KB.

Collection Blacklist

After you turn on the **Collection Blacklist** switch, configure a blacklist to ignore specified directories or files during collection. Specify directories and file names using exact matches or wildcard characters. The only supported wildcard characters are the asterisk (\*) and the question mark (?).

**Important**

-   If you use a wildcard character when you configure the **File Path** but need to filter out some of those paths, you must enter the corresponding full path in the **Collection Blacklist** to ensure that the blacklist configuration takes effect.
    
    For example, if you set **File Path** to `/home/admin/app*/log/*.log` but want to filter all subdirectories under `/home/admin/app1*`, you must select **Directory Blacklist** and configure the directory as `/home/admin/app1*/**`. If you configure it as `/home/admin/app1*`, the blacklist will not take effect.
    
-   Matching against a blacklist has a computational overhead. Keep the number of blacklist entries within 10.
    
-   A directory path cannot end with a forward slash (/). For example, if you set the path to `/home/admin/dir1/`, the directory blacklist will not take effect.
    

It supports setting by file path blacklist, file blacklist, and directory blacklist. The details are as follows:

## **File Path Blacklist**

-   Select **File Path Blacklist** and configure the path as `/home/admin/private*.log`. This will ignore all files in the `/home/admin/` directory that start with "private" and end with ".log" during collection.
    
-   Select **File Path Blacklist** and configure the path as `/home/admin/private*/*_inner.log`. This will ignore files ending with "\_inner.log" within directories that start with "private" under the `/home/admin/` directory during collection. For example, the file `/home/admin/private/app_inner.log` is ignored, but the file `/home/admin/private/app.log` is collected.
    

## File Blacklist

Select **File Blacklist** and configure the filename as `app_inner.log`. This will ignore all files named `app_inner.log` during collection.

## Directory Blacklist

-   Select **Directory Blacklist** and configure the directory as `/home/admin/dir1`. This will ignore all files in the `/home/admin/dir1` directory during collection.
    
-   Select **Directory Blacklist** and configure the directory as `/home/admin/dir*`. This will ignore all files in subdirectories that start with "dir" under the `/home/admin/` directory during collection.
    
-   Select **Directory Blacklist** and configure the directory as `/home/admin/*/dir`. This will ignore all files in subdirectories named "dir" at the second level under the `/home/admin/` directory during collection. For example, files in the `/home/admin/a/dir` directory are ignored, but files in the `/home/admin/a/b/dir` directory are collected.
    

Allow File to Be Collected Multiple Times

By default, you can use only one Logtail configuration to collect logs from a log file. If the logs in a file need to be collected multiple times, enable **Allow File To Be Collected For Multiple Times**.

Advanced Parameters

For more information about other optional advanced feature parameters related to the file input plugin, see [CreateLogtailPipelineConfig](https://next.api.aliyun.com/document/Sls/2020-12-30/CreateLogtailPipelineConfig?spm=api-workbench.api_explorer.0.0.4c5f31f27Lmdh1#request_params_desc).

### **Processor configuration parameters**

**Parameter**

**Description**

Log Sample

A sample of the log to be collected. Use a log from your actual scenario. The log sample helps configure log processing parameters and reduces configuration difficulty. You can add multiple samples, with a total length not exceeding 1500 characters.

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
    
    For the log content above, if SLS fails to split it:
    
    -   **Discard**: Directly discards this log segment.
        
    -   **Retain Single Line**: Retains each line of log text as a separate log entry, resulting in a total of four log entries.
        

Processing Method

**Processors**, which include **Native Processor** and **Extended Processor**. For more information, see [Overview of Logtail plugins for data processing](/help/en/sls/overview-22).

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
            
            For example, if the raw log `"content": "{"request_method":"GET", "request_time":"200"}"` is parsed successfully, appending the raw field adds another field to the parsed log. The field name is **New Name of Original Field** (if not filled, it defaults to the original field name), and the field value is the raw log `{"request_method":"GET", "request_time":"200"}`.
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1304240271/p801943.png)

In Kubernetes environments, container logs are scattered and difficult to manage centrally. This leads to low troubleshooting efficiency and high operational costs. Deploy LoongCollector as a DaemonSet and create a collection configuration in the Simple Log Service console to unify log collection and structured processing. This improves the efficiency of log retrieval, issue diagnosis, and observability analysis.

## **Applicable scenarios**

-   **Runtime environment:**
    
    -   Supports Alibaba Cloud Container Service for Kubernetes (ACK), including both managed and dedicated clusters, along with self-managed Kubernetes clusters.
        
    -   Kubernetes version must be **1.10.0 or later** and support `Mount propagation: HostToContainer`.
        
    -   **Container runtime (supports Docker and Containerd only)**
        
        -   Docker:
            
            -   Must have permission to access docker.sock.
                
            -   Stdout collection supports only JSON-type log drivers.
                
            -   Storage drivers support only overlay and overlay2. For other types, manually mount the log directory.
                
        -   Containerd: Must have permission to access containerd.sock.
            
-   **Resource requirements:** LoongCollector (Logtail) runs with system-cluster-critical priority. **Do not deploy it if cluster resources are insufficient**. Otherwise, existing pods on the node might be evicted.
    
    -   **CPU:** Reserve at least **0.1 core**.
        
    -   **Memory:** The collection component requires at least **150 MB**, and the controller component requires at least **100 MB**.
        
    -   Actual usage depends on collection rate, number of monitored directories and files, and send-blocking level. Ensure actual usage stays below 80% of the limit.
        

-   **Permission requirements:** The Alibaba Cloud account or RAM user used for deployment must have the `**AliyunLogFullAccess**` permission.
    
    > To create a custom policy, refer to the [AliyunCSManagedLogRolePolicy](/help/en/ram/developer-reference/aliyuncsmanagedlogrolepolicy) system policy. Copy its permissions and assign them to the target RAM user or role for fine-grained permission control.
    

## **Collection configuration workflow**

1.  [**Install LoongCollector**](#9b3c2215b3gup)**:** Deploy LoongCollector in DaemonSet mode to run one collector container on each cluster node, collecting logs from all containers on that node.
    
    > For Sidecar mode, see [Collect Kubernetes pod text logs (Sidecar mode)](/help/en/sls/collect-k8s-cluster-logs-through-sidecar).
    
2.  [**Create a Logstore**](#cdd8676d8d7ie)**:** Use it to store collected logs.
    
3.  [**Create and configure log collection rules**](#d70a3bec60rwt)
    
    1.  [**Global and input configuration**](#231059bba4ah9): Define the collection configuration name and specify log sources and scope.
        
    2.  [**Log processing and structuring**](#08406a8026mo8): Configure processing based on log format.
        
        -   Multiline logs: Applies when a single log entry spans multiple lines (such as Java exception stacks or Python tracebacks). Use a line-start regular expression to identify the start of each log entry.
            
        -   Structured parsing: Use parsing plugins (such as regular expressions, delimiters, or NGINX mode) to extract raw strings into structured key-value pairs for easier querying and analysis.
            
    3.  [**Log filtering**](#ea8fb78dadgai): Configure collection blacklists and content filters to select relevant logs, reducing redundant data transmission and storage.
        
    4.  [**Log classification**](#310ee74c3cf8m): Use topics and tagging to distinguish logs from different applications, containers, or paths.
        
4.  [**Query and analysis configuration**](#3f32235bf71qt): Full-text indexing is enabled by default for keyword searches. Enable field indexing for precise queries and analysis on structured fields to improve retrieval efficiency.
    
5.  [**Verification and troubleshooting**](#42731966a6exw): After configuration, verify successful log collection. If you encounter issues like no data collected, heartbeat failures, or parsing errors, see [Troubleshooting common issues](#81b57c81fe0ls).
    

## **Step 1: Install LoongCollector**

> LoongCollector is the next-generation log collection agent from Alibaba Cloud Simple Log Service and an upgraded version of Logtail. Both cannot coexist. To install Logtail instead, see [Install, run, upgrade, and uninstall Logtail](/help/en/sls/install-run-upgrade-and-uninstall-logtail).

This topic covers only the basic installation process for LoongCollector. For detailed parameters, see [Installation and configuration](/help/en/sls/loongcollector-installation-kubernetes-1). If LoongCollector or Logtail is already installed, skip this step and go directly to [Step 2: Create a Logstore](#cdd8676d8d7ie).

**Note**

If the host machine time changes while LoongCollector (Logtail) is running, logs might be duplicated or lost.

## **ACK clusters**

Install LoongCollector through the Container Service console. By default, logs are sent to the Simple Log Service project under your **current Alibaba Cloud account**.

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  Click the target cluster name to go to its details page.
    
3.  In the navigation pane on the left, click **Add-ons**.
    
4.  Switch to the **Logs and Monitoring** tab. Find **loongcollector** and click **Install**.
    
    **Note**
    
    When creating a cluster, you can select **Component Configurations** and check **Enable Log Service**. You can then choose to **Create Project** or **Select Project**.
    
    After installation, Simple Log Service automatically creates the following resources under your current account. You can view them in the [Simple Log Service console](https://sls.console.alibabacloud.com/).
    
    **Resource type**
    
    **Resource name**
    
    **Purpose**
    
    Project
    
    `k8s-log-${cluster_id}`
    
    Resource management unit that isolates logs from different businesses.
    
    > To create your own project for more flexible log resource management, see [Create a project](/help/en/sls/manage-a-project/#89b98c40c765r).
    
    Machine group
    
    `k8s-group-${cluster_id}`
    
    Collection of log collection nodes.
    
    Logstore
    
    `config-operation-log`
    
    **Important**
    
    Do not delete this Logstore.
    
    Stores logs from the loongcollector-operator component. It uses the same billing method as a standard Logstore. For details, see [Billing items for the pay-by-ingested-data metering method](/help/en/sls/billing-items-in-the-pay-per-data-write-mode). We recommend that you do not create collection configurations in this Logstore.
    

## **Self-managed clusters**

1.  Connect to your Kubernetes cluster and run the corresponding command based on the region:
    
    Regions in China
    
    ```
    wget https://aliyun-observability-release-cn-shanghai.oss-cn-shanghai.aliyuncs.com/loongcollector/k8s-custom-pkg/3.0.12/loongcollector-custom-k8s-package.tgz; tar xvf loongcollector-custom-k8s-package.tgz; chmod 744 ./loongcollector-custom-k8s-package/k8s-custom-install.sh
    ```
    
    Regions outside China
    
    ```
    wget https://aliyun-observability-release-ap-southeast-1.oss-ap-southeast-1.aliyuncs.com/loongcollector/k8s-custom-pkg/3.0.12/loongcollector-custom-k8s-package.tgz; tar xvf loongcollector-custom-k8s-package.tgz; chmod 744 ./loongcollector-custom-k8s-package/k8s-custom-install.sh
    ```
    
2.  Go to the `loongcollector-custom-k8s-package` directory and modify the configuration file `./loongcollector/values.yaml`.
    
    ```
    # ===================== Required fields =====================
    # Project name for this cluster, for example, k8s-log-custom-sd89ehdq
    projectName: ""
    # Region of the project, for example, cn-shanghai for Shanghai
    region: ""
    # Alibaba Cloud account ID of the project owner. Enclose it in quotes, for example, "123456789"
    aliUid: ""
    # Network type. Valid values: Internet (public network) and Intranet (private network). Default value: Internet.
    net: Internet
    # AccessKey ID and AccessKey secret of the Alibaba Cloud account or RAM user. The account must have the AliyunLogFullAccess system policy.
    accessKeyID: ""
    accessKeySecret: ""
    # Custom cluster ID. Only letters, digits, and hyphens (-) are allowed.
    clusterID: ""
    ```
    
3.  In the `loongcollector-custom-k8s-package` directory, run the following command to install LoongCollector and its dependencies:
    
    ```
    bash k8s-custom-install.sh install
    ```
    
4.  After installation, check the component status.
    
    > If the pod fails to start, verify that the values.yaml configuration is correct and that the related images are pulled successfully.
    
    ```
    # Check pod status
    kubectl get po -n kube-system | grep loongcollector-ds
    ```
    
    Simple Log Service also automatically creates the following resources. You can view them in the [Simple Log Service console](https://sls.console.alibabacloud.com/).
    
    **Resource type**
    
    **Resource name**
    
    **Purpose**
    
    Project
    
    Value of `projectName` in the values.yaml file
    
    Resource management unit that isolates logs from different businesses.
    
    > To create your own project for more flexible log resource management, see [Create a project](/help/en/sls/manage-a-project/#89b98c40c765r).
    
    Machine group
    
    `k8s-group-${cluster_id}`
    
    Collection of log collection nodes.
    
    Logstore
    
    `config-operation-log`
    
    **Important**
    
    Do not delete this Logstore.
    
    Stores logs from the loongcollector-operator component. It uses the same billing method as a standard Logstore. For details, see [Billing items for the pay-by-ingested-data metering method](/help/en/sls/billing-items-in-the-pay-per-data-write-mode). We recommend that you do not create collection configurations in this Logstore.
    

## **Step 2: Create a Logstore**

A Logstore is the storage unit in Simple Log Service for storing collected logs.

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com) and click the target project name.
    
2.  In the navigation pane on the left, select ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3359329571/p1013781.png)**Logstores** and click **+** to create a Logstore:
    
    -   **Logstore Name**: Enter a unique name within the project. This name cannot be changed after creation.
        
    -   **Logstore Type**: Choose Standard or Query based on your needs.
        
    -   **Billing Mode**:
        
        -   **Pay-by-feature (Cannot Be Changed)**: Charges are based on individual resources such as storage, indexing, and read/write operations. Suitable for small-scale scenarios or when feature usage is uncertain.
            
        -   **Pay-by-ingested-data**: Charges are based only on the raw data ingested. Includes 30 days of free storage and free data transformation and delivery features. Suitable for business scenarios with a storage period close to 30 days or complex data processing pipelines.
            
    -   **Data Retention Period**: Set the number of days to retain logs (1–3650 days; 3650 means permanent retention). The default is 30 days.
        
    -   Keep other settings at their defaults and click **OK**. For more information about other settings, see [Manage Logstores](/help/en/sls/manage-a-logstore).
        

## **Step 3: Create and configure log collection rules**

Define which logs LoongCollector collects, how to parse their structure, how to filter content, and bind the configuration to the registered machine group.

1.  On the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7574404571/p992524.png) Logstore page, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8096561571/p970744.png) icon before the target Logstore name to expand.
    
2.  Click **Import Data** next to the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8096561571/p978728.png) icon, and in the **Quick Data Import** dialog box, select an ingestion template based on your log source and click **Integrate Now**:
    
    -   Container stdout: Select **K8s-Stdout-New**
        
        > Two templates are available for container stdout collection: new and legacy. We recommend using the new template. For differences between the versions, see [Appendix: Comparison of new and legacy container stdout versions](#d3fb7a82d3ec0).
        
    -   Cluster text logs: Select **Kubernetes-File**
        
3.  Configure **Machine Group Configurations** and click **Next**:
    
    -   **Scenario**: Select **Docker Containers**.
        
    -   **Deployment mode**: Select **ACK Daemonset** or **Self-managed Cluster in DaemonSet Mode**.
        
    -   In **Source Machine Group**, add the default machine group `k8s-group-${cluster_id}` to the right-side **Applied Machine Group**.
        
4.  On the **Logtail Configuration** page, complete the following settings and click **Next**.
    

### **1\. Global and input configuration**

Before configuring, ensure you have selected a data ingestion template and bound a machine group. This step defines the collection configuration name, log sources, and collection scope.

## **Collect container stdout**

**Global Configurations**

-   **Configuration Name**: Enter a custom collection configuration name that must be unique within its project. After creation, it cannot be modified. Naming rules:
    
    -   Only lowercase letters, digits, hyphens (-), and underscores (\_) are allowed.
        
    -   Must start and end with a lowercase letter or digit.
        

**Input configuration**

-   Select to enable **Stdout and Stderr** or **Standard Error** (both are enabled by default).
    
    **Important**
    
    We recommend not enabling both standard output and standard error simultaneously, as this may cause log confusion.
    

## **Collect cluster text logs**

**Global Configurations**:

-   **Configuration Name**: Enter a custom collection configuration name that must be unique within its project. After creation, it cannot be modified. Naming rules:
    
    -   Only lowercase letters, digits, hyphens (-), and underscores (\_) are allowed.
        
    -   Must start and end with a lowercase letter or digit.
        

**Input Configurations**:

-   **File Path Type**:
    
    -   **Path in Container**: Collect log files inside containers.
        
    -   **Host Path**: Collect local service logs from the host machine.
        
-   **File Path**: Absolute path for log collection.
    
    -   Linux: Starts with "/", for example, `/data/mylogs/**/*.log`, which represents all files with the .log extension in the `/data/mylogs` directory.
        
    -   Windows: Starts with a drive letter, for example, `C:\Program Files\Intel\**\*.Log`.
        
-   **Maximum Directory Monitoring Depth**: The maximum directory depth that the `**` wildcard character matches in the **File Path**. Default value: 0 (current level only). Valid values: 0 to 1000.
    
    > We recommend that you set this value to 0 and configure the path to the directory that contains the file.
    

### **2\. Log processing and structuring**

Configure log processing rules to convert raw unstructured logs into structured, searchable data. This improves log query and analysis efficiency. Add a log sample before configuring:

In the **Logtail Configuration** page, go to the **Processor Configurations** section. Click **Add Sample Log** and enter the log content you want to collect. The system uses this sample to detect the log format and help generate regular expressions and parsing rules, reducing configuration complexity.

#### **Scenario 1: Multi-line log processing (such as Java stack trace logs)**

Logs like Java exception stack traces or JSON often span multiple lines. In default collection mode, they are split into multiple incomplete records, losing contextual information. Enable multi-line collection mode and configure a start-of-line regular expression to merge consecutive lines of the same log entry into one complete log.

**Example:**

**Raw log without processing**

**Default collection mode treats each line as a separate log. Stack trace information is fragmented, losing context.**

**Multi-line mode enabled. A start-of-line regular expression identifies complete logs, preserving full semantic structure.**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7982143671/p1026273.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7982143671/p1026274.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7982143671/p1026276.png)

**Configuration steps:** In the **Logtail Configuration** page, go to the **Processor Configurations** section and enable **Multi-line Mode**:

-   **Type**: Choose **Custom** or **Multi-line JSON**.
    
    -   **Custom**: Use this when raw log formats vary. Configure a **Regex to Match First Line** to identify the first line of each log entry.
        
        -   **Regex to Match First Line**: You can auto-generate or manually enter a regular expression that matches an entire line. For example, in the preceding scenario, the matching regular expression is `\[\d+-\d+-\w+:\d+:\d+,\d+]\s\[\w+]\s.*`.
            
            -   Auto-generate: Click **Auto-generate regular expression**. In the **Log Sample** text box, select the log content to extract and click **Generate Regex**.
                
            -   Manual input: Click **Manually enter regular expression**, enter your expression, then click **Validate**.
                
    -   **Multi-line JSON**: Select this when all raw logs use standard JSON format. Simple Log Service automatically handles line breaks within individual JSON log entries.
        

-   **Processing Method If Splitting Fails**:
    
    -   **Discard**: Discard any text that fails to match the start-of-line rule.
        
    -   **Retain Single Line**: Split and retain unmatched text using the original single-line mode.
        

#### **Scenario 2: Structured logs**

When raw logs are unstructured or semi-structured text—such as NGINX access logs or application output logs—querying and analyzing them directly is inefficient. Simple Log Service provides multiple parsing plugins that automatically convert raw logs of various formats into structured data, creating a solid foundation for subsequent analysis, monitoring, and alerting.

**Example:**

**Raw log without processing**

**Structured parsed log**

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

**Configuration steps:** In the **Logtail Configuration** page, go to the **Processor Configurations** section.

1.  **Add a parsing plugin:** Click **Add Processor** and configure a plugin such as [Regex Parse, Delimiter Parse, or JSON Parse](#48907a690f6qo) based on your log format. To collect NGINX logs, select **Native Processor** > **Data Parsing (NGINX Mode)**.
    
2.  **NGINX Log Configuration**: Copy the `log_format` definition from your NGINX server configuration file (nginx.conf) and paste it **exactly as-is** into this text box.
    
    Example:
    
    ```
    log_format main  '$remote_addr - $remote_user [$time_local] "$request" ''$request_time $request_length ''$status $body_bytes_sent "$http_referer" ''"$http_user_agent"';
    ```
    
    **Important**
    
    The format definition here must **exactly match** the format used by the server to generate logs. Otherwise, log parsing will fail.
    
3.  **General configuration parameter descriptions:** The following parameters appear in many parsing plugins and work consistently across them.
    
    -   **Source field:** Specifies the name of the field to parse. Default is `content`, which represents the entire collected log entry.
        
    -   **Keep source field on parse failure:** Recommended. If a log cannot be parsed successfully (for example, due to format mismatch), this option ensures the original log content is preserved intact in the specified source field.
        
    -   **Keep source field on parse success:** When selected, the original log content remains even after successful parsing.
        

### **3\. Log filtering**

Collecting large volumes of low-value or irrelevant logs—such as DEBUG or INFO level logs—without discrimination wastes storage resources, increases costs, reduces query efficiency, and introduces data breach risks. Use fine-grained filtering policies to achieve efficient and secure log collection.

## **Reduce costs with content-based filtering**

Filter logs based on field values—for example, collect only logs where the level field is WARNING or ERROR.

**Example:**

**Raw log without processing**

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

**Configuration steps:** In the **Logtail Configuration** page, go to the **Processor Configurations** section.

Click **Add Processor** and select **Native Processor** > **Data Filtering**:

-   **Field Name**: The log field to filter on.
    
-   **Field Value**: A regular expression for filtering. Only full-text matching is supported—not partial keyword matching.
    

## **Control collection scope with a blacklist**

Use a blacklist to exclude specific directories or files, preventing irrelevant or sensitive logs from being uploaded.

**Configuration steps:** In the **Logtail Configuration** page, go to **Input Configurations** > **Other Input Configurations**. Enable **Collection Blacklist** and click **Add**.

> Supports exact and wildcard matching for directory and file names. Wildcards support only the asterisk (\*) and question mark (?).

-   **File Path Blacklist**: File paths to ignore during collection. Examples:
    
    -   `/home/admin/private*.log`: Ignores all files under `/home/admin/` that start with "private" and end with ".log".
        
    -   `/home/admin/private*/*_inner.log`: Ignores files ending with "\_inner.log" inside any subdirectory under `/home/admin/` that starts with "private".
        
-   **File Blacklist**: File names to ignore during collection. Example:
    
    -   `app_inner.log`: Ignores all files named `app_inner.log`.
        
-   **Directory Blacklist**: Directory paths must not end with a forward slash (/). Examples:
    
    -   `/home/admin/dir1/`: This directory blacklist entry will not take effect.
        
    -   `/home/admin/dir*`: Ignores all files under subdirectories in `/home/admin/` that start with "dir".
        
    -   `/home/admin/*/dir`: Ignores all files under subdirectories named "dir" at the second level under `/home/admin/`. For example, files under `/home/admin/a/dir` are ignored, but files under `/home/admin/a/b/dir` are collected.
        

## Container filtering

Set collection conditions based on container metadata—such as environment variables, pod labels, namespaces, and container names—to precisely control which containers' logs are collected.

**Configuration steps:** In the **Logtail Configuration** page, go to the **Input Configurations** section. Enable **Container Filtering** and click **Add**.

> Multiple conditions use an AND relationship. All regular expression matching uses Go's RE2 engine, which has fewer features than engines like PCRE. Follow the guidelines in [Appendix: Regular expression usage limits (container filtering)](#4ff2ac681ds0w) when writing regular expressions.

-   Environment variable blacklist/whitelist: Specify environment variable conditions for containers to collect.
    
-   Kubernetes pod label blacklist/whitelist: Specify label conditions for pods containing containers to collect.
    
-   Kubernetes pod name regex match: Specify containers to collect by pod name.
    
-   Kubernetes namespace regex match: Specify containers to collect by namespace name.
    
-   Kubernetes container name regex match: Specify containers to collect by container name.
    
-   Container label blacklist/whitelist: Collect containers whose labels meet specified conditions. Use this for Docker scenarios. Do not use it for Kubernetes scenarios.
    

### **4\. Log categorization**

When multiple applications or instances share the same log format, it becomes hard to distinguish log sources. This leads to missing context during queries and inefficient analysis. Configure log topics and tagging to automatically associate context and logically categorize logs.

## Configure log topic

When multiple applications or instances produce logs with identical formats but different paths—such as `/apps/app-A/run.log` and `/apps/app-B/run.log`—collected logs become indistinguishable. In this case, generate a topic based on machine group, custom name, or file path extraction to flexibly differentiate logs by business or path source.

**Configuration steps:** Go to **Global Configurations** > **Other Global Configurations** > **Log Topic Type** and choose a topic generation method. Three types are supported:

-   **Machine group topic:** When applying a collection configuration to multiple machine groups, LoongCollector automatically uses the machine group name as the `__topic__` field. Use this for scenarios where logs are divided by host cluster.
    
-   **Custom**: Format is `customized://<custom topic name>`, for example `customized://app-login`. Use this for static topic scenarios with fixed business identifiers.
    
-   **File path extraction:** Extract key information from the full path of log files to dynamically tag log sources. Use this when multiple users or applications share the same log filename but use different paths.
    
    When multiple users or services write logs to different top-level directories but use identical subpaths and filenames, the filename alone cannot distinguish sources. For example:
    
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
    
    In this case, configure **File Path Extraction** and use a regular expression to extract key information from the full path. The match result becomes the log topic uploaded to the Logstore.
    
    ###### **Extraction rule: Capturing groups in regular expressions**
    
    When configuring a regular expression, the system automatically determines the output field format based on the number and naming of capturing groups, as follows:
    
    > In file path regular expressions, escape forward slashes (/).
    
    **Capturing group type**
    
    **Use case**
    
    **Generated field**
    
    **Regex example**
    
    **Matching path example**
    
    **Generated field**
    
    Single capturing group (only one `(.*?)`)
    
    Need only one dimension to distinguish sources (such as username or environment)
    
    Generates `__topic__` field
    
    `\/logs\/(.*?)\/app\.log`
    
    `/logs/userA/app.log`
    
    `__topic__: userA`
    
    Multiple capturing groups—unnamed (multiple `(.*?)`)
    
    Need multiple dimensions but no semantic labels
    
    Generates tag fields `__tag__:__topic_{i}__`, where `{i}` is the capturing group number
    
    `\/logs\/(.*?)\/(.*?)\/app\.log`
    
    `/logs/userA/svcA/app.log`
    
    `__tag__:__topic_1__userA`.
    
    `__tag__:__topic_2__svcA`
    
    Multiple capturing groups—named (using `(?P<name>.*?)`)
    
    Need multiple dimensions with clear field meanings for easier querying and analysis
    
    Generates tag fields `__tag__:{name}`
    
    `\/logs\/(?P<user>.*?)\/(?P<service>.*?)\/app\.log`
    
    `/logs/userA/svcA/app.log`
    
    `__tag__:user:userA`.
    
    `__tag__:service:svcA`
    

## Log tagging

Enable log tag enrichment to extract key information from container environment variables or Kubernetes pod labels and attach it as tags for fine-grained log grouping.

**Configuration steps:** In the **Logtail Configuration** page, go to the **Input Configurations** section. Enable **Log Tag Enrichment** and click **Add**.

-   **Environment Variables**: Configure an environment variable name and a tag name. The environment variable value will be stored under the tag name.
    
    -   Environment variable name: The name of the environment variable to extract.
        
    -   Tag name: The name of the environment variable tag.
        

-   **Pod Labels**: Configure a pod label name and a tag name. The pod label value will be stored under the tag name.
    
    -   Pod label name: The name of the Kubernetes pod label to extract.
        
    -   Tag name: The name of the tag.
        

### **5\. Output configuration**

By default, **all logs** are sent to the **current Logstore** using **lz4** compression. To distribute logs from the same source to different Logstores, follow these steps:

#### **Multi-destination dynamic distribution**

**Important**

-   Multi-destination sending is supported only in LoongCollector version 3.0.0 or later. Logtail does not support it.
    
-   You can configure up to five output destinations.
    
-   After configuring multiple output destinations, this collection configuration no longer appears in the current Logstore’s collection configuration list. To view, modify, or delete multi-destination distribution configurations, see [How do I manage multi-destination distribution configurations?](#9002c3418e8gb).
    

**Configuration steps:** In the **Logtail Configuration** page, go to the **Output Configurations** section.

1.  Click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2222338671/p1041328.png) to expand output configuration.
    
2.  Click **Add Output Targets** and complete the following settings:
    
    -   **Logstores**: Select the target Logstore.
        
    -   **Compression Method**: Supports **lz4** and **zstd**.
        
    -   **Route Settings**: Route logs based on tag fields. Logs matching the routing configuration are uploaded to the target Logstore. An empty routing configuration means all collected logs are uploaded to the target Logstore.
        
        -   **Tag Name**: The name of the tag field used for routing. Enter the field name directly (for example, `__path__`) without the `__tag__:` prefix. Tag fields fall into two categories:
            
            > For more information about tags, see [Manage LoongCollector collection tags](/help/en/sls/manage-loongcollector-to-collect-tags).
            
            -   Agent-related: Related to the collection agent itself and independent of plugins. Examples include `__hostname__` and `__user_defined_id__`.
                
            -   Input plugin-related: Provided by input plugins and enriched into logs. Examples include `__path__` for file collection, and `_pod_name_` and `_container_name_` for Kubernetes collection.
                
        -   **Tag Value**: Logs whose tag field value matches this value are sent to the target Logstore.
            
        -   **Discard this tag?**: When enabled, the uploaded logs do not include this tag field.
            

## **Step 4: Query and Analysis Configuration**

After configuring log processing and plugins, click **Next** to enter the **Query and Analysis Configurations** page:

-   The system enables [full-text index](/help/en/sls/create-indexes#6f7eb27bcclmy) by default. This supports keyword searches on raw log content.
    
-   To perform a term query by field, after **Preview Data** loads on the page, click **Automatic Index Generation**. Simple Log Service generates a [field index](/help/en/sls/create-indexes) based on the first entry in the preview data.
    

After completing the configuration, click **Next** to complete the setup for the entire collection process.

## **Step 5: Validation and troubleshooting**

After you create a collection configuration and apply it to a machine group, the system automatically deploys the configuration and starts to collect incremental logs.

### **View reported logs**

1.  **Confirm that new content is added to the log file**: LoongCollector collects only incremental logs. Run the `tail -f /path/to/your/log/file` command and trigger a business operation to ensure that new logs are being written.
    
2.  **Query logs**: Go to the query and analysis page of the destination LogStore. Click **Search & Analyze**. The default time range is the last 15 minutes. Check whether new logs are ingested. By default, each collected container text log contains the following fields:
    
    Field name
    
    Description
    
    **\_\_tag\_\_:\_\_hostname\_\_**
    
    The name of the container's host.
    
    **\_\_tag\_\_:\_\_path\_\_**
    
    The path of the log file in the container.
    
    **\_\_tag\_\_:\_container\_ip\_**
    
    The IP address of the container.
    
    **\_\_tag\_\_:\_image\_name\_**
    
    The name of the image that the container uses.
    
    **\_\_tag\_\_:\_pod\_name\_**
    
    The name of the pod.
    
    **\_\_tag\_\_:\_namespace\_**
    
    The namespace to which the pod belongs.
    
    **\_\_tag\_\_:\_pod\_uid\_**
    
    The unique identifier (UID) of the pod.
    

### **Troubleshoot common issues**

#### **The heartbeat of a machine group is abnormal**

1.  Check the user identity: If your server type is not ECS, or if the ECS instance and the project belong to different Alibaba Cloud accounts, check whether the correct user identity exists in the specified directory.
    
    -   Linux: Run the `cd /etc/ilogtail/users/ && touch <uid>` command to create a user identity file.
        
    -   Windows: Go to the `C:\LogtailData\users\` directory and create an empty file named `<uid>`.
        
    
    If a file named with the Alibaba Cloud account ID of the project exists in the specified path, the user identity is configured correctly.
    
2.  Check the machine group identity: If you use a custom identifier-based machine group, check whether a file named `user_defined_id` exists in the specified directory. If the file exists, check whether the content of the file is the same as the custom ID configured for the machine group.
    
    -   Linux:
        
        ```
        # Configure a custom ID. If the directory does not exist, create it manually.
        echo "user-defined-1" > /etc/ilogtail/user_defined_id
        ```
        
    -   Windows: In the `C:\LogtailData` directory, create a file named `user_defined_id` and write the custom ID to the file. If the directory does not exist, create it manually.
        
3.  If the user identity and machine group identity are correctly configured, see [Troubleshoot LoongCollector (Logtail) machine group issues](/help/en/sls/troubleshoot-the-errors-related-to-logtail-machine-groups) for more information.
    

* * *

#### **Log collection errors or format errors occur**

Troubleshooting: This issue indicates that the network connectivity and basic configurations are normal. The issue is caused by a mismatch between the **log content** and the **parsing rule**. View the specific error message to identify the cause of the issue:

1.  On the **Logtail Configuration** page, click the name of the LoongCollector (Logtail) configuration that is abnormal. On the **Log Collection Error** tab, click **Select Time Range** to set a time range for the query.
    
2.  In the section, view the alarm metric of the error log and find a solution based on the information in [Common errors during data collection](/help/en/sls/log-collection-error-type).
    

## **What to do next**

1.  [Log query and analysis](/help/en/sls/quick-guide-to-query-and-analysis):
    
2.  [Data visualization](/help/en/sls/dashboard-overview): Monitor key metric trends using visualization dashboards.
    
3.  [Automatic anomaly alerts](/help/en/sls/configure-an-alert-monitoring-rule-in-log-service): Set alert policies to detect system anomalies in real time.
    

## **Troubleshoot missing container log data**

1.  Check for new log entries. After you configure Logtail to collect logs, Logtail does not collect a log file unless new log entries are added to it.
    

**2\. Check the Logtail operational log**

Check Logtail’s own operational log for detailed error messages.

1.  **Log on to the Logtail container**:
    
    1.  Find the Logtail pod.
        
        ```
        kubectl get po -n kube-system | grep logtail
        ```
        
        The system returns output similar to the following:
        
        ```
        logtail-ds-****d                                             1/1       Running    0          8d
        logtail-ds-****8                                             1/1       Running    0          8d
        ```
        
    2.  Log on to the pod.
        
        ```
        kubectl exec -it -n kube-system logtail-ds-****d -- bash
        ```
        
        In this command, `logtail-ds-****d` is the pod ID. Replace it with your actual pod ID.
        

2.  **View the Logtail operational log**:
    
    Logtail stores its logs in the `/usr/local/ilogtail/` folder in the Logtail container. The log files are named `ilogtail.LOG` and `logtail_plugin.LOG`. After you log on to the Logtail container, run the following commands to view the log files:
    
    ```
    Open the /usr/local/ilogtail/ folder.
    cd /usr/local/ilogtail
    
    View the ilogtail.LOG and logtail_plugin.LOG files.
    cat ilogtail.LOG
    cat logtail_plugin.LOG
    ```
    
    **Purpose:** Identify the alarm metric in the error log. Then, see [common error types for Simple Log Service data collection](/help/en/sls/log-collection-error-type) for solutions.
    

**3\. Check the heartbeat of the machine group**

Check the heartbeat status of the machine group. Go to the **Resource Group** > **Machine Groups** page. Click the name of your target machine group. In the **Machine Group Configurations** > **Machine Group Status** section, check the **Heartbeat** status and record the number of nodes with an OK status.

1.  Check the number of worker nodes in your container cluster.
    
    1.  [Get the cluster KubeConfig and connect to the cluster using kubectl](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/obtain-the-kubeconfig-file-of-a-cluster-and-use-kubectl-to-connect-to-the-cluster).
        
    2.  Check the number of worker nodes in the cluster.
        
        ```
        kubectl get node | grep -v master
        ```
        
        The system returns output similar to the following:
        
        ```
        NAME                                 STATUS    ROLES     AGE       VERSION
        cn-hangzhou.i-bp17enxc2us3624wexh2   Ready     <none>    238d      v1.10.4
        cn-hangzhou.i-bp1ad2b02jtqd1shi2ut   Ready     <none>    220d      v1.10.4
        ```
        
2.  Check if the number of nodes with a heartbeat status of **OK** matches the number of worker nodes in the container cluster. Select a troubleshooting method based on the result.
    
    -   All nodes in the machine group show a **Failed** heartbeat status:
        
        -   If you use a self-managed cluster, verify that the following parameters are correctly configured: `{regionId}`, `{aliuid}`, `{access-key-id}`, and `{access-key-secret}`.
            
            If any parameter is incorrect, run `helm del --purge alibaba-log-controller` to delete the installation package. Then reinstall it.
            
    -   The number of nodes with an OK heartbeat status is less than the number of worker nodes in the cluster.
        
        -   Determine whether you manually deployed the DaemonSet using a YAML file.
            
            1.  Run the following command. If the command returns output, you previously deployed the DaemonSet manually using a YAML file.
                
                ```
                kubectl get po -n kube-system -l k8s-app=logtail
                ```
                
            2.  [Download the latest DaemonSet template.](https://logtail-release.oss-cn-hangzhou.aliyuncs.com/docker/k8s/logtail-daemonset.yaml)
                
            3.  Replace the placeholder values for _${your\_region\_name}_, _${your\_aliyun\_user\_id}_, _${your\_machine\_group\_name}_, and other parameters.
                
            4.  Update the resources.
                
                ```
                kubectl apply -f ./logtail-daemonset.yaml
                ```
                
    

**4\. Check the filter conditions in the collection configuration**

In the Simple Log Service console, check your Logtail collection configuration. Focus on these settings: **IncludeLabel**, **ExcludeLabel**, **IncludeEnv**, and **ExcludeEnv**. Make sure they match your collection requirements.

-   The labels here refer to container labels (from docker inspect), not Kubernetes labels.
    
-   Temporarily remove the **IncludeLabel**, **ExcludeLabel**, **IncludeEnv**, and **ExcludeEnv** settings. Then check whether logs are collected normally. If logs appear after removal, one or more of these settings is misconfigured.
    

## **FAQ**

### **Manage Multi-Target Distribution Configurations**

Because multi-target distribution configurations are associated with multiple Logstores, manage these configurations on the Project-level management page:

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com/). Then, click the name of the target Project.
    
2.  On the target Project page, click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7938948671/p1041414.png)**Resource Group** > **Configurations** in the navigation pane on the left.
    
    **Note**
    
    This page centrally manages all collection configurations under the Project, including those that remain because Logstores were accidentally deleted.
    

### **Transfer ACK Cluster Logs to a Project in Another Alibaba Cloud Account**

Manually install the Simple Log Service **LoongCollector (Logtail)** component in the ACK cluster. Then, configure the root account ID or access credential (AccessKey) of the destination account. This sends container logs to a Simple Log Service Project in another Alibaba Cloud account.

**Scenario**: When you need to collect log data from an ACK cluster into an independent Simple Log Service Project in another Alibaba Cloud account due to organizational structure, permission isolation, or unified monitoring requirements, manually install LoongCollector (Logtail) for cross-account configuration.

**Procedure**: This procedure uses manual installation of LoongCollector as an example. For information about how to install Logtail, see [Logtail Installation and Configuration](/help/en/sls/install-run-upgrade-and-uninstall-logtail).

1.  Connect to your Kubernetes cluster and run the corresponding command based on the region:
    
    Regions in China
    
    ```
    wget https://aliyun-observability-release-cn-shanghai.oss-cn-shanghai.aliyuncs.com/loongcollector/k8s-custom-pkg/3.0.12/loongcollector-custom-k8s-package.tgz; tar xvf loongcollector-custom-k8s-package.tgz; chmod 744 ./loongcollector-custom-k8s-package/k8s-custom-install.sh
    ```
    
    Regions outside China
    
    ```
    wget https://aliyun-observability-release-ap-southeast-1.oss-ap-southeast-1.aliyuncs.com/loongcollector/k8s-custom-pkg/3.0.12/loongcollector-custom-k8s-package.tgz; tar xvf loongcollector-custom-k8s-package.tgz; chmod 744 ./loongcollector-custom-k8s-package/k8s-custom-install.sh
    ```
    
2.  Go to the `loongcollector-custom-k8s-package` directory and modify the configuration file `./loongcollector/values.yaml`.
    
    ```
    # ===================== Required fields =====================
    # Project name for this cluster, for example, k8s-log-custom-sd89ehdq
    projectName: ""
    # Region of the project, for example, cn-shanghai for Shanghai
    region: ""
    # Alibaba Cloud account ID of the project owner. Enclose it in quotes, for example, "123456789"
    aliUid: ""
    # Network type. Valid values: Internet (public network) and Intranet (private network). Default value: Internet.
    net: Internet
    # AccessKey ID and AccessKey secret of the Alibaba Cloud account or RAM user. The account must have the AliyunLogFullAccess system policy.
    accessKeyID: ""
    accessKeySecret: ""
    # Custom cluster ID. Only letters, digits, and hyphens (-) are allowed.
    clusterID: ""
    ```
    
3.  In the `loongcollector-custom-k8s-package` directory, run the following command to install LoongCollector and its dependencies:
    
    ```
    bash k8s-custom-install.sh install
    ```
    
4.  After installation, check the component status.
    
    > If the pod fails to start, verify that the values.yaml configuration is correct and that the related images are pulled successfully.
    
    ```
    # Check pod status
    kubectl get po -n kube-system | grep loongcollector-ds
    ```
    
    Simple Log Service also automatically creates the following resources. You can view them in the [Simple Log Service console](https://sls.console.alibabacloud.com/).
    
    **Resource type**
    
    **Resource name**
    
    **Purpose**
    
    Project
    
    Value of `projectName` in the values.yaml file
    
    Resource management unit that isolates logs from different businesses.
    
    > To create your own project for more flexible log resource management, see [Create a project](/help/en/sls/manage-a-project/#89b98c40c765r).
    
    Machine group
    
    `k8s-group-${cluster_id}`
    
    Collection of log collection nodes.
    
    Logstore
    
    `config-operation-log`
    
    **Important**
    
    Do not delete this Logstore.
    
    Stores logs from the loongcollector-operator component. It uses the same billing method as a standard Logstore. For details, see [Billing items for the pay-by-ingested-data metering method](/help/en/sls/billing-items-in-the-pay-per-data-write-mode). We recommend that you do not create collection configurations in this Logstore.
    

### **Allow Multiple Collection Configurations to Collect the Same Log File or Container Standard Output**

By default, to prevent data duplication, Simple Log Service restricts each log source to be collected by only one collection configuration:

-   A text log file can match only one Logtail collection configuration.
    
-   A container's standard output (stdout):
    
    -   If you use the new standard output template, only one standard output collection configuration can collect it by default.
        
    -   If you use the old standard output template, no additional configuration is required. It supports collecting multiple copies by default.
        

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com). Go to the target Project.
    
2.  In the navigation pane on the left, choose ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7574404571/p992524.png)Logstores. Find the target Logstore.
    
3.  Click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8096561571/p970744.png) before its name to expand the Logstore.
    
4.  Click **Logtail Configuration**. In the configuration list, find the target Logtail configuration. Then, click **Manage Logtail Configuration** in the Actions column.
    
5.  On the Logtail Configuration page, click **Edit**. Scroll down to the **Input Configurations** section:
    
    -   To collect text file logs, enable **Allow File to Be Collected for Multiple Times**.
        
    -   To collect container standard output, enable **Allow Collection by Different Logtail Configurations**.
        

### Dependency Error When Uninstalling the loongcollector (logtail-ds) Component in ACK

**Problem Description**: When you try to delete the loongcollector (logtail-ds) log collection component in Container Service for Kubernetes (ACK), the system reports an error: The dependencies of this component are not met.

`Dependencies of addons are not met: terway-eniip depends on logtail-ds(>0.0) whose version is v3.x.x.x-aliyun or will be v3.x.x.x-aliyun`.

**Cause**: The `terway-eniip` network plug-in enables the log collection feature. It depends on the loongcollector (logtail-ds) component. Therefore, ACK does not allow you to directly uninstall loongcollector (logtail-ds) before you remove this dependency.

**Solution**: Follow these steps to remove the dependency and then uninstall the component:

1.  Log on to the [Container Service for Kubernetes console](https://cs.console.alibabacloud.com/).
    
2.  In the cluster list, click the name of the target cluster. Go to the cluster details page.
    
3.  In the navigation pane on the left, click **Add-ons**.
    
4.  In the component list, search for and find the `terway-eniip` component. Click **Disable Logging**.
    
5.  In the dialog box that appears, click **OK**.
    
6.  After the configuration takes effect, try to uninstall the loongcollector (logtail-ds) component again.
    

### Why is the Last Log Segment Reported with a Long Delay and Sometimes Truncated?

**Cause Analysis**: Log truncation usually occurs when a log file lacks a line feed at the end or when multi-line logs (such as exception stacks) are not fully written. Because the data collector cannot determine if the log has ended, the last segment of content may be chunked prematurely or reported with a delay. Different versions of LoongCollector (Logtail) have different processing mechanisms:

-   Versions earlier than 1.8:  
    If the last log line does not have a line feed (carriage return) or a multi-line log segment is not complete, the data collector waits for the next write to trigger output. This may cause the last log entry to remain unsent for a long time until new logs are written.  
      
      
      
      
      
      
      
    
-   Versions 1.8 and later:  
    A timeout refresh mechanism is introduced to prevent logs from getting stuck. When an incomplete log line is detected, the system starts a timer. After the timeout, it automatically submits the current content to ensure that logs are eventually collected.  
      
      
      
      
      
      
      
    
    -   Default timeout: 60 seconds (ensures completeness in most scenarios)
        
    -   Adjust this value as needed. However, do not set it to 0. Otherwise, logs may be truncated or some content may be lost.
        

**Solution:**

You can extend the wait time to ensure that a complete log is written before it is collected:

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com/). Go to the target Project.
    
2.  In the navigation pane on the left, choose ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8395532671/p1020786.png)Logstores. Find the target Logstore.
    
3.  Click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8395532671/p1020787.png) before its name to expand the Logstore.
    
4.  Click **Logtail Configuration**. In the configuration list, find the target Logtail configuration. Then, click **Manage Logtail Configuration** in the Actions column.
    
5.  On the Logtail Configuration page, click **Edit**:
    
    -   Choose **Input Configurations** > **Other Input Configurations** > **Advanced Parameters**. Add the following JSON configuration to customize the timeout:
        
        ```
        {
          "FlushTimeoutSecs": 1
        }
        ```
        
        -   Default value: Determined by the startup parameter `default_reader_flush_timeout` (usually a few seconds).
            
        -   Unit: seconds.
            
        -   Recommended value: ≥1 second. Do not set it to 0. Otherwise, logs may be truncated or some content may be lost.
            
6.  After the configuration is complete, click **OK**.
    

### **Why Does LoongCollector (Logtail) Switch from a Private Network Domain Name to a Public Network During Runtime? Can It Automatically Switch Back?**

During LoongCollector (Logtail) runtime, if it detects abnormal private network domain name communication (such as network unavailability or connection timeouts), the system automatically switches to the public network domain name to send data. This ensures the continuity and reliability of log collection and prevents log accumulation or loss.

-   LoongCollector: After the private network recovers, it automatically switches back to the private network.
    
-   Logtail: It does not automatically switch back. You must manually restart it to restore private network communication.
    

## **Appendix: Native Plugin Details**

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

### **Regular Expression Parsing**

Extract log fields using regular expressions and parse logs into key-value pairs. Each field can be queried and analyzed independently.

**Example:**

**Raw logs without processing**

**Using the Regular Expression Parsing plugin**

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

**Configuration steps:** In the **Logtail Configuration** area on the **Processor Configurations** page, click **Add Processor**, and select **Native Processor** > **Data Parsing (Regex Mode)**:

-   **Regular Expression**: Matches logs. Supports automatic generation or manual input:
    
    -   Automatic generation:
        
        -   Click **Generate Regular Expression automatically**.
            
        -   Select the log content to extract in the **Log Sample**.
            
        -   Click **Generate Regular Expression**.
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1446191571/p982663.png)
            
    -   Manual input: **Manually enter a regular expression** based on the log format.
        
    
    After configuration, click **Validate** to test if the regular expression correctly parses the log content.
    
-   **Extracted Field**: Set the corresponding field name (Key) for the extracted log content (Value).
    
-   For other parameters, see the general configuration parameter description in [Scenario 2: Structured Logs](#7874b2de35pf5).
    

* * *

### **Delimiter Parsing**

Structure log content using delimiters and parse it into multiple key-value pairs. Supports single-character and multi-character delimiters.

**Example:**

**Raw logs without processing**

**Split fields by the specified character** `**,**`

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

**Configuration steps:** In the **Logtail Configuration** area on the **Processor Configurations** page, click **Add Processor**, and select **Native Processor** > **Data Parsing (Delimiter Mode)**:

-   **Delimiter**: Specify the character used to split log content.
    
    Example: For CSV files, select **Custom** and enter a comma (,).
    
-   **Quote**: If a field value contains a delimiter, specify a quote character to enclose the field and prevent incorrect splitting.
    
-   **Extracted Field**: Set the corresponding field name (Key) for each column in the order of separation. Rules are as follows:
    
    -   Field names can only contain letters, numbers, and underscores (\_).
        
    -   Must start with a letter or an underscore (\_).
        
    -   Maximum length: 128 bytes.
        
-   For other parameters, see the general configuration parameter description in [Scenario 2: Structured Logs](#7874b2de35pf5).
    

* * *

### **Standard JSON Parsing**

Structure Object-type JSON logs and parse them into key-value pairs.

**Example:**

**Raw logs without processing**

**Standard JSON key-value automatic extraction**

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

**Configuration steps:** In the **Logtail Configuration** area on the **Processor Configurations** page, click **Add Processor**, and select **Native Processor** > **Data Parsing (JSON Mode)**:

-   **Original Field**: The default value is content (this field stores the raw log content to be parsed).
    
-   For other parameters, see the general configuration parameter description in [Scenario 2: Structured Logs](#7874b2de35pf5).
    

* * *

### **Nested JSON Parsing**

Parse nested JSON logs into key-value pairs by specifying the expansion depth.

**Example:**

**Raw logs without processing**

**Expansion depth: 0,** and use expansion depth as prefix

**Expansion depth: 1,** and use expansion depth as prefix

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

**Configuration steps:** In the **Logtail Configuration** area on the **Processor Configurations** page, click **Add Processor**, and select **Extended Processor** > **Expand JSON Field**:

-   **Original Field**: The source field name to expand, such as `content`.
    
-   **JSON Expansion Depth**: The expansion level of JSON objects. 0 means full expansion (default), 1 means the current level, and so on.
    
-   **Character to Concatenate Expanded Keys**: The connector for field names during JSON expansion. The default is an underscore (\_).
    
-   **Name Prefix of Expanded Keys**: Specify the prefix for field names after JSON expansion.
    
-   **Expand Array**: Enable this option to expand arrays into indexed key-value pairs.
    
    Example: `{"k":["a","b"]}` expands to `{"k[0]":"a","k[1]":"b"}`.
    
    > To rename expanded fields (for example, change prefix\_s\_key\_k1 to new\_field\_name), add a **Rename Fields** plugin later to complete the mapping.
    
-   For other parameters, see the general configuration parameter description in [Scenario 2: Structured Logs](#7874b2de35pf5).
    

* * *

### **JSON Array Parsing**

Use the `json_extract` [function](/help/en/sls/json-functions) to extract JSON objects from JSON arrays.

**Example:**

**Raw logs without processing**

**Extract JSON array structure**

```
[{"key1":"value1"},{"key2":"value2"}]
```

```
json1:{"key1":"value1"}
json2:{"key2":"value2"}
```

**Configuration steps:** In the **Logtail Configuration** area on the **Processor Configurations** page, switch the **Processing Method** to **SPL**, configure the **SPL statement**, and use the [json\_extract](/help/en/sls/json-functions) function to extract JSON objects from JSON arrays.

**Example:** Extract elements from the JSON array in the log field `content` and store the results in new fields `json1` and `json2`, respectively.

```
* | extend json1 = json_extract(content, '$[0]'), json2 = json_extract(content, '$[1]')
```

* * *

### **Apache Log Parsing**

Structure log content based on definitions in the Apache log configuration file and parse it into multiple key-value pairs.

**Example:**

**Raw logs without processing**

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

**Configuration steps:** In the **Logtail Configuration** area on the **Processor Configurations** page, click **Add Processor**, and select **Native Processor** > **Data Parsing (Apache Mode)**:

-   **Log Format**: **combined**
    
-   **APACHE LogFormat Configuration**: The system automatically populates the configuration based on the **Log Format**.
    
    **Important**
    
    Verify the auto-filled content to ensure it exactly matches the LogFormat defined in the Apache configuration file on the server (typically located at /etc/apache2/apache2.conf).
    
-   For other parameters, see the general configuration parameter description in [Scenario 2: Structured Logs](#7874b2de35pf5).
    

* * *

### **Data Masking**

Mask sensitive data in logs.

**Example:**

**Raw logs without processing**

**Masking result**

```
[{'account':'1812213231432969','password':'04a23f38'}, {'account':'1812213685634','password':'123a'}]
```

```
[{'account':'1812213231432969','password':'********'}, {'account':'1812213685634','password':'********'}]
```

**Configuration steps:** In the **Logtail Configuration** area on the **Processor Configurations** page, click **Add Processor**, and select **Native Processor** > **Data Masking**:

-   **Original Field**: The source field that stores log content before parsing.
    
-   **Data Masking Method**:
    
    -   **const**: Replaces sensitive content with the modified string.
        
    -   **md5**: Replaces sensitive content with its MD5 hash.
        
-   **Replacement String**: When you select **Data Masking Method** as **const**, enter the string to replace sensitive content.
    
-   **Content Expression that Precedes Replaced Content**: Used to find sensitive content. Configure using [RE2 syntax](https://github.com/google/re2/blob/master/doc/syntax.txt).
    
-   **Content Expression to Match Replaced Content**: The expression for sensitive content. Configure using [RE2 syntax](https://github.com/google/re2/blob/master/doc/syntax.txt).
    

* * *

### **Time Parsing**

Parse the time field in logs and set the parsed result as the `__time__` field of the log.

**Example:**

**Raw logs without processing**

**Time parsing**

```
{"level":"INFO","timestamp":"2025-09-23T19:11:47+0800","cluster":"yilu-cluster-0728","message":"User logged in successfully","userId":"user-123"}
```

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3359329571/p1012909.png)

**Configuration steps:** In the **Logtail Configuration** area on the **Processor Configurations** page, click **Add Processor**, and select **Native Processor** > **Time Parsing**:

-   **Original Field**: The source field that stores log content before parsing.
    
-   **Time Format**: Set the time format based on the time content in the log. For more information, see [Time Formats](/help/en/sls/time-processing-class-plug-in).
    
-   **Time Zone**: Select the time zone of the log time field. By default, the machine's time zone is used, which is the time zone of the environment where the LoongCollector (Logtail) process runs.
    

## **Appendix: Regular Expression Limits (Container Filtering)**

The regular expressions used for **container filtering** are based on Go's RE2 engine. This engine has some syntax limits compared to other engines, such as PCRE. Note the following when writing regular expressions:

1\. Named group syntax differences

Go uses the `(?P<name>...)` syntax to define named groups. It does not support the `(?<name>...)` syntax used in PCRE.

-   Correct example: `(?P<year>\d{4})`
    
-   Incorrect example: `(?<year>\d{4})`
    

2\. Unsupported regular expression features

The following common but complex regular expression features are not available in RE2. Avoid using them:

-   **Assertions:** `(?=...)`, `(?!...)`, `(?<=...)`, `（?<!...)`
    
-   **Conditional expressions:** `(?(condition)true|false)`
    
-   **Recursive matching:** `(?R)`, `(?0)`
    
-   **Subroutine references:** `(?&name)`, `(?P>name)`
    
-   **Atomic groups:** `(?>...)`
    

3\. Usage recommendations

When debugging regular expressions using tools such as [Regex101](https://regex101.com/), select the Golang (RE2) mode for validation to ensure compatibility. If the unsupported syntax mentioned above is used, the plugin cannot correctly parse or match.

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
        

## **More Information**

### **Global Configuration Parameters**

**Configuration Item**

**Description**

Configuration Name

The Logtail configuration name must be unique within its Project. You cannot modify the name after creating the Logtail configuration.

Log Topic Type

Select how to generate topics. Options include machine group topic, file path extraction, and custom.

Advanced Parameters

For other optional advanced features related to global configuration, see [CreateLogtailPipelineConfig](https://next.api.aliyun.com/document/Sls/2020-12-30/CreateLogtailPipelineConfig?spm=api-workbench.api_explorer.0.0.4c5f31f27Lmdh1#request_params_desc).

### **Input Configuration Parameters**

**Configuration Item**

**Description**

Logtail Deployment Mode

**DaemonSet**: Deploy one LoongCollector on each node in the cluster. It collects logs from all containers on that node.

**Sidecar**: Each pod runs one LoongCollector container. It collects logs from all containers within that pod. Log collection for different pods is isolated.

File Path Type

Supports **Path in Container** and **Host Path**.

-   **Path in Container**: Select this to collect text log files from within containers.
    
-   **Host Path**: Select this to collect service logs from cluster nodes.
    

File Path

Set the log directory and file name based on the log's location on the host (such as ECS).

-   If the target host is Linux, the log path must start with a forward slash (/), such as `/apsara/nuwa/**/app.Log`.
    
-   If the target host is Windows, the log path must start with a drive letter, such as `C:\Program Files\Intel\**\*.Log`.
    

Directory names and file names support full mode and wildcard mode. For file name rules, see [Wildcard matching](https://man7.org/linux/man-pages/man7/glob.7.html). The log path wildcards only support the asterisk (\*) and question mark (?).

Log file search uses multi-layer directory matching. All matching files in the specified directory (including all subdirectories) are found. For example:

-   `/apsara/nuwa/**/*.log` indicates files with the .log suffix in the `/apsara/nuwa` directory (including its recursive subdirectories).
    
-   `/var/logs/app_*/**/*.log` indicates files with the `.log` suffix in all directories matching the `app_*` format within the `/var/logs` directory (including their recursive subdirectories).
    
-   `/var/log/nginx/**/access*` indicates files starting with `access` in the `/var/log/nginx` directory (including its recursive subdirectories).
    

Maximum Directory Monitoring Depth

Set the maximum depth for monitoring log directories. This is the maximum directory depth matched by the wildcard `**` in **File Path**. A value of 0 means only monitor the current directory.

Standard Output

Enable **Stdout and Stderr** to collect container standard output.

Standard Error

Enable **Standard Error** to collect container standard error.

Allow Multiple Standard Output Collection

By default, a container's standard output log can only match one new Logtail standard output collection configuration. If standard output needs to be collected by multiple new standard output collection configurations, enable the **Allow File to Be Collected for Multiple Times** switch.

Enable Container Metadata Preview

Enable **Enable Container Metadata Preview** to view container metadata after creating the Logtail configuration. This includes matched container information and full container information.

Container Filtering

-   **Filter Condition Description**
    

**Important**

-   Container labels are from Docker inspect, not Kubernetes. For information about how to obtain container labels, see [Get Container Label](/help/en/sls/how-do-i-obtain-the-labels-and-environment-variables-of-a-container#section-7rp-xn8-crg).
    
-   Environment variables are configured during container startup. For information about how to obtain container environment variables, see [Get Container Environment Variables](/help/en/sls/how-do-i-obtain-the-labels-and-environment-variables-of-a-container#section-0a0-n4l-zhi).
    
-   In Kubernetes scenarios, use Kubernetes-level information (such as **K8s Pod Name Regular Matching**, **K8s Namespace Regular Matching**, **K8s Container Name Regular Matching**, and **Kubernetes Pod Label Whitelist**) for container filtering.
    

1.  Kubernetes Namespace and container name map to `io.kubernetes.pod.namespace` and `io.kubernetes.container.name` in container labels. Use these container labels for container filtering. For example, if a pod belongs to the `backend-prod` namespace and its container name is `worker-server`, to collect logs from this container, set the container label whitelist to `io.kubernetes.pod.namespace : backend-prod` or `io.kubernetes.container.name : worker-server`.
    
2.  If the two container labels above do not meet your filtering requirements, use environment variable blacklists and whitelists for container filtering.
    

**K8s Pod Name Regular Matching**

Specify containers to collect by Pod name. This supports regular expression matching. For example, set it to `^(nginx-log-demo.*)$` to match all containers in pods whose names start with nginx-log-demo.

**K8s Namespace Regular Matching**

Specify containers to collect by Namespace name. This supports regular expression matching. For example, set it to `^(default|nginx)$` to match all containers in the nginx and default namespaces.

**K8s Container Name Regular Matching**

Specify containers to collect by container name (defined in \`spec.containers\`). This supports regular expression matching. For example, set it to `^(container-test)$` to match all containers named container-test.

**Container Label Whitelist (We recommend that you configure this parameter in a Docker environment and do not configure this parameter in a Kubernetes environment.)**

This is a whitelist for container labels, used to specify containers to collect. It is empty by default, meaning all container standard output is collected. To set a container label whitelist, \`LabelKey\` is required, and \`LabelValue\` is optional.

-   If \`LabelValue\` is empty, all containers whose labels contain \`LabelKey\` are matched.
    
-   If \`LabelValue\` is not empty, only containers whose labels contain \`LabelKey=LabelValue\` are matched.
    
    \`LabelValue\` uses string match by default. This means \`LabelValue\` must exactly match the container label's value. If the value starts with `^` and ends with `$`, it uses regular expression matching. For example, set **LabelKey** to io.kubernetes.container.name and **LabelValue** to ^(nginx|cube)$. This matches containers named nginx or cube.
    

Multiple whitelists use an OR relationship. If a container label satisfies any whitelist entry, it is matched.

**Container Label Blacklist (We recommend that you configure this parameter in a Docker environment and do not configure this parameter in a Kubernetes environment.)**

This is a blacklist for container labels, used to exclude containers from collection. It is empty by default, meaning no containers are excluded. To set a container label blacklist, \`LabelKey\` is required, and \`LabelValue\` is optional.

-   If \`LabelValue\` is empty, all containers whose labels contain \`LabelKey\` are excluded.
    
-   If \`LabelValue\` is not empty, only containers whose labels contain \`LabelKey=LabelValue\` are excluded.
    
    \`LabelValue\` uses string match by default. This means \`LabelValue\` must exactly match the container label's value. If the value starts with `^` and ends with `$`, it uses regular expression matching. For example, set **LabelKey** to io.kubernetes.container.name and **LabelValue** to ^(nginx|cube)$. This matches containers named nginx or cube.
    

Multiple blacklists use an OR relationship. If a container label satisfies any blacklist entry, it is excluded.

**Environment Variable Whitelist**

This is a whitelist for environment variables, used to specify containers to collect. It is empty by default, meaning all container standard output is collected. To set an environment variable whitelist, \`EnvKey\` is required, and \`EnvValue\` is optional.

-   If \`EnvValue\` is empty, all containers whose environment variables contain \`EnvKey\` are matched.
    
-   If \`EnvValue\` is not empty, only containers whose environment variables contain \`EnvKey=EnvValue\` are matched.
    
    \`EnvValue\` uses string match by default. This means \`EnvValue\` must exactly match the environment variable's value. If the value starts with `^` and ends with `$`, it uses regular expression matching. For example, set **EnvKey** to NGINX\_SERVICE\_PORT and **EnvValue** to ^(80|6379)$. This matches containers with service ports 80 or 6379.
    

Multiple whitelists use an OR relationship. If a container's environment variables satisfy any key-value pair, it is matched.

**Environment Variable Blacklist**

This is a blacklist for environment variables, used to exclude containers from collection. It is empty by default, meaning no containers are excluded. To set an environment variable blacklist, \`EnvKey\` is required, and \`EnvValue\` is optional.

-   If \`EnvValue\` is empty, logs from all containers whose environment variables contain \`EnvKey\` are excluded.
    
-   If \`EnvValue\` is not empty, only containers whose environment variables contain \`EnvKey=EnvValue\` are excluded.
    
    \`EnvValue\` uses string match by default. This means \`EnvValue\` must exactly match the environment variable's value. If the value starts with `^` and ends with `$`, it uses regular expression matching. For example, set **EnvKey** to NGINX\_SERVICE\_PORT and **EnvValue** to ^(80|6379)$. This matches containers with service ports 80 or 6379.
    

Multiple blacklists use an OR relationship. If a container's environment variables satisfy any key-value pair, it is excluded.

**Kubernetes Pod Label Whitelist**

Specify containers to collect using the Kubernetes label whitelist. To set a Kubernetes label whitelist, \`LabelKey\` is required, and \`LabelValue\` is optional.

-   If \`LabelValue\` is empty, all containers whose Kubernetes labels contain \`LabelKey\` are matched.
    
-   If \`LabelValue\` is not empty, only containers whose Kubernetes labels contain \`LabelKey=LabelValue\` are matched.
    
    \`LabelValue\` uses string match by default. This means \`LabelValue\` must exactly match the Kubernetes label's value. If the value starts with `^` and ends with `$`, it uses regular expression matching. For example, set **LabelKey** to app and **LabelValue** to ^(test1|test2)$. This matches containers whose Kubernetes labels contain app:test1 or app:test2.
    

Multiple whitelists use an OR relationship. If a Kubernetes label satisfies any whitelist entry, it is matched.

**Note**

-   Changes to labels on Kubernetes control plane resources (such as Deployment) do not restart specific worker Pods. Therefore, Pods cannot detect this change, which may cause matching rules to fail. When setting K8s label blacklists and whitelists, use the Kubernetes labels in the Pod. For more information about Kubernetes labels, see [Labels and Selectors](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/).
    

**Kubernetes Pod Label Blacklist**

Exclude containers from collection using the Kubernetes label blacklist. To set a Kubernetes label blacklist, \`LabelKey\` is required, and \`LabelValue\` is optional.

-   If \`LabelValue\` is empty, all containers whose Kubernetes labels contain \`LabelKey\` are excluded.
    
-   If \`LabelValue\` is not empty, only containers whose Kubernetes labels contain \`LabelKey=LabelValue\` are excluded.
    
    \`LabelValue\` uses string match by default. This means \`LabelValue\` must exactly match the Kubernetes label's value. If the value starts with `^` and ends with `$`, it uses regular expression matching. For example, set **LabelKey** to app and **LabelValue** to ^(test1|test2)$. This matches containers whose Kubernetes labels contain app:test1 or app:test2.
    

Multiple blacklists use an OR relationship. If a Kubernetes label satisfies any blacklist entry, it is excluded.

**Note**

-   Changes to labels on Kubernetes control plane resources (such as Deployment) do not restart specific worker Pods. Therefore, Pods cannot detect this change, which may cause matching rules to fail. When setting K8s label blacklists and whitelists, use the Kubernetes labels in the Pod. For more information about Kubernetes labels, see [Labels and Selectors](https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/).
    

Log Tag Enrichment

Add environment variables and Kubernetes labels to logs as log tags.

**Environment Variables**

Set environment variable extension fields. Log Service adds environment variable-related fields to logs. For example, set **Environment Variable Name** to VERSION and **Tag Name** to env\_version. If the container contains the environment variable `VERSION=v1.0.0`, this information is added to the log as the field **\_\_tag\_\_:\_\_env\_version\_\_: v1.0.0**.

**Pod Labels**

Set Kubernetes Pod extension fields. Log Service adds Kubernetes Pod-related fields to logs. For example, set **Pod Label Name** to app and **Tag Name** to `k8s_pod_app`. If Kubernetes contains the label `app=serviceA`, this information is added to the log as the field **\_\_tag\_\_:\_\_k8s\_pod\_app\_\_: serviceA**.

File Encoding

Select the encoding format for log files.

Initial Collection Size

When the configuration first takes effect, this is the size from the end of the file where collection starts. The initial collection size is set to 1024 KB.

-   If the file is smaller than 1024 KB during initial collection, collection starts from the beginning of the file content.
    
-   If the file is larger than 1024 KB during initial collection, collection starts from 1024 KB from the end of the file.
    

Modify the **First Collection Size** here. The value range is 0 to 10485760 KB.

Collection Blacklist

Enable the **Collection Blacklist** switch to configure blacklists. This ignores specified directories or files during collection. It supports full and wildcard matching for directories and file names. Wildcards only support the asterisk (\*) and question mark (?).

**Important**

-   If you use wildcards in **File Path** but need to filter out some paths, specify the corresponding full path in the **Collection Blacklist** to ensure the blacklist configuration takes effect.
    
    For example, if **File Path** is `/home/admin/app*/log/*.log`, but you want to filter all subdirectories under `/home/admin/app1*`, select **Directory Blacklist** and set the directory to `/home/admin/app1*/**`. If you set it to `/home/admin/app1*`, the blacklist will not take effect.
    
-   Blacklist matching incurs computational overhead. Keep the number of blacklist entries under 10.
    
-   Directory paths cannot end with a forward slash (/). For example, if you set the path to `/home/admin/dir1/`, the directory blacklist will not take effect.
    

Supports setting file path blacklists, file blacklists, and directory blacklists. Details are as follows:

## **File Path Blacklist**

-   Select **File Path Blacklist** and set the path to `/home/admin/private*.log`. This ignores all files in `/home/admin/` that start with "private" and end with ".log" during collection.
    
-   Select **File Path Blacklist** and set the path to `/home/admin/private*/*_inner.log`. This ignores files ending with "\_inner.log" within directories starting with "private" in `/home/admin/`. For example, the file `/home/admin/private/app_inner.log` is ignored, and `/home/admin/private/app.log` is collected.
    

## File Blacklist

Select **File Blacklist** and set the file name to `app_inner.log`. This ignores all files named `app_inner.log` during collection.

## Directory Blacklist

-   Select **Directory Blacklist** and set the directory to `/home/admin/dir1`. This ignores all files in the `/home/admin/dir1` directory during collection.
    
-   Select **Directory Blacklist** and set the directory to `/home/admin/dir*`. This ignores all files in subdirectories starting with "dir" within `/home/admin/` during collection.
    
-   Select **Directory Blacklist** and set the directory to `/home/admin/*/dir`. This ignores all files in second-level subdirectories named "dir" within `/home/admin/` during collection. For example, files in `/home/admin/a/dir` are ignored, but files in `/home/admin/a/b/dir` are collected.
    

Allow Multiple File Collection

By default, a log file can only match one Logtail configuration. If logs in a file need to be collected multiple times, enable the **Allow File to Be Collected for Multiple Times** switch.

Advanced Parameters

For other optional advanced features related to the file input plugin, see [CreateLogtailPipelineConfig](https://next.api.aliyun.com/document/Sls/2020-12-30/CreateLogtailPipelineConfig?spm=api-workbench.api_explorer.0.0.4c5f31f27Lmdh1#request_params_desc).

### **Processing Configuration Parameters**

**Configuration Item**

**Description**

Log Sample

Provide a sample of the logs to collect. Use logs from your actual scenario. Log samples help configure log processing parameters and simplify configuration. You can add multiple samples, with a total length not exceeding 1500 characters.

```
[2023-10-01T10:30:01,000] [INFO] java.lang.Exception: exception happened
    at TestPrintStackTrace.f(TestPrintStackTrace.java:3)
    at TestPrintStackTrace.g(TestPrintStackTrace.java:7)
    at TestPrintStackTrace.main(TestPrintStackTrace.java:16)
```

Multiline Mode

-   Type of multiline logs: Multiline logs span multiple consecutive lines. Distinguish each log from the log content.
    
    -   **Custom**: Use the **Regex to Match First Line** to distinguish each log.
        
    -   **Multi-line JSON**: Each JSON object expands to multiple lines, such as:
        
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
        
-   Handling of chunking failures:
    
    ```
    Exception in thread "main" java.lang.NullPointerException
        at com.example.MyClass.methodA(MyClass.java:12)
        at com.example.MyClass.methodB(MyClass.java:34)
        at com.example.MyClass.main(MyClass.java:½0)
    ```
    
    For the log content above, if Log Service fails to chunk:
    
    -   **Discard**: Discard this log directly.
        
    -   **Retain Single Line**: Retain each log text line as a separate log, resulting in four logs.
        

Processing Mode

**Processors** includes **Native Processor** and **Extended Processor**. For more information about processing plugins, see [Native and Extension Processing Plugin Usage](/help/en/sls/overview-22).

**Important**

Processing plugin limits are based on the console prompts.

-   Logtail version 2.0:
    
    -   Native processing plugins can be combined freely.
        
    -   Native and extension processing plugins can be used together. Extension processing plugins must appear after all native processing plugins.
        
-   Logtail versions earlier than 2.0:
    
    -   Do not support adding native plugins and extension plugins simultaneously.
        
    -   Native plugins are only for collecting text logs. When using native plugins, meet the following requirements:
        
        -   The first processing plugin must be a regular expression parsing plugin, delimiter parsing plugin, JSON parsing plugin, NGINX parsing plugin, Apache parsing plugin, or IIS parsing plugin.
            
        -   From the second processing plugin to the last, include at most one time parsing plugin, one filter plugin, and multiple desensitization plugins.
            
    -   For the **Retain Original Field if Parsing Fails** and **Retain Original Field if Parsing Succeeds** parameters, only the following combinations are valid. Other combinations are invalid.
        
        -   Upload only successfully parsed logs:
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1304240271/p801939.png)
            
        -   Upload parsed logs on success, and original logs on failure:
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1304240271/p801942.png)
            
        -   On success, upload parsed logs and append original log fields. On failure, upload original logs.
            
            For example, if the original log `"content": "{"request_method":"GET", "request_time":"200"}"` is parsed successfully, appending the original field adds a field to the parsed log. The field name is **Renamed original field** (defaults to the original field name if empty), and the field value is the raw log `{"request_method":"GET", "request_time":"200"}`.
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1304240271/p801943.png)

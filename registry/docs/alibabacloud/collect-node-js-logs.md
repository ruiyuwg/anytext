Business and system logs that are distributed across different servers are difficult to search, monitor, and analyze centrally. Use LoongCollector (Logtail) to collect text logs in real time from ECS instances, self-managed IDCs, or hosts from other cloud providers and send them to Simple Log Service (SLS) for centralized management and analysis. To collect full logs, see [Collect host text logs in a one-time operation](/help/en/sls/one-time-collection-of-host-text-logs).

## **Usage notes**

-   **Supported operating systems and architectures:**
    
    LoongCollector supports only Linux systems. For Windows hosts, use Logtail. We recommend that you use LoongCollector for new collection use cases.
    
    > LoongCollector is the next-generation log collection agent from SLS. It is an upgraded version of Logtail. You need to install only LoongCollector or Logtail, not both.
    
-   **Computing resource requirements:**
    
    -   CPU: Minimum 0.4 cores.
        
    -   Memory: Minimum 300 MB.
        
    -   Recommended usage: To ensure stable operation, keep the actual resource usage of LoongCollector (Logtail) below **80%** of the limit. Actual usage depends on factors such as collection speed, the number of monitored directories and files, and the extent of sending blockage.
        
-   **Permission requirements:**
    
    If you use a Resource Access Management (RAM) user, you must grant the `AliyunLogFullAccess` and `AliyunECSFullAccess` permissions. For fine-grained authorization, see [Appendix: Custom permission policies](#39476a9e931wm).
    

## **Collection configuration workflow**

1.  **[Preparations](#c851a560a1r6z):** Create a project and a logstore. A project is a resource management unit that is used to isolate different application logs, and a logstore is used to store logs.
    
2.  **[Configure a machine group (Install LoongCollector)](#999a6653ca1s7)****:** Install LoongCollector based on the server type and add the server to a machine group. Machine groups are used to manage collection nodes, distribute configurations, and manage server status.
    
3.  **[Create and configure log collection rules](#c9192441dbnxy)****:**
    
    1.  **[Global and input configurations](#5850c01ab470m)**: Define the name of the collection configuration and the source and scope of log collection.
        
    2.  **[Log processing and structuring](#5ab5b5cbfeo8d)****:** Configure processing rules based on the log format.
        
        -   Multiline logs: Use this mode for single logs that span multiple lines, such as Java exception stacks or Python tracebacks. Identify the start of each log with a regular expression to merge consecutive lines into a single, complete log.
            
        -   Structured parsing: Use parsing plugins, such as the regular expression, separator, or NGINX pattern plugin, to extract raw strings into structured key-value pairs. Each field can then be queried and analyzed independently.
            
    3.  **[Log filtering](#fed5e5727enyy)**: Configure a collection blacklist and content filtering rules to screen for valid log content. This reduces the transmission and storage of redundant data.
        
    4.  [**Log categorization**](#14e381a175swc)**:** Use topics to distinguish logs from different applications, servers, or path sources.
        
4.  **[Query and analysis configuration](#3f32235bf71qt)**: Full-text index is enabled by default to support keyword searches. Enable field index for precise queries and analysis of structured fields to improve search efficiency.
    
5.  **[Verification and troubleshooting](#42731966a6exw)**: After the configuration is complete, verify that logs are collected successfully. If you encounter issues such as no data collection, heartbeat failures, or parsing errors, see the [FAQ](#81b57c81fe0ls) for troubleshooting.
    

## **Preparations**

Before you collect logs, you must create a project and a logstore to manage and store the logs. If you already have these resources, skip this step and proceed to [Configure a machine group (Install LoongCollector)](#999a6653ca1s7).

#### **Create a project**

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com/).
    
2.  Click **Create Project** and configure the following parameters:
    
    -   **Region**: The region where the log source is located. This setting cannot be changed after creation.
        
    -   **Project Name**: Must be globally unique within Alibaba Cloud and cannot be changed after creation.
        
    -   Keep the default settings for other configurations and click **Create**. For more information about other parameters, see [Create a project](/help/en/sls/manage-a-project/#89b98c40c765r).
        

#### **Create a logstore**

1.  Click the project name to go to the target project.
    
2.  In the navigation pane on the left, choose ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3359329571/p1013781.png)**Log Storage** and click **+**.
    
3.  On the Create Logstore page, complete the following core configurations:
    
    -   **Logstore Name**: A unique name for the logstore within the project. The name cannot be changed after creation.
        
    -   **Logstore Type**: Select Standard or Query based on your requirements.
        
    -   **Billing Mode**:
        
        -   **Pay-by-feature**: A billing mode where resources such as storage, indexing, and read/write operations are charged individually. This mode is suitable for small-scale use cases or when feature usage is unpredictable.
            
        -   **Pay-by-ingested-data**: Billing is based only on the volume of raw data written. This billing method includes 30 days of free storage and complimentary features such as data transformation and delivery. It is ideal for business use cases with a storage period of approximately 30 days or a complex data processing pipeline.
            
    -   **Data Retention Period**: The number of days to retain logs (from 1 to 3,650). A value of 3,650 indicates permanent storage. The default is 30 days.
        
    -   Keep the default settings for other configurations and click **OK**. For more information about other configurations, see [Manage a Logstore](/help/en/sls/manage-a-logstore).
        

## **Step 1: Configure a machine group (Install LoongCollector)**

After you complete the [Preparations](#c851a560a1r6z), install LoongCollector on your servers and add them to a machine group.

**Note**

The following installation steps apply only when the log source is an Alibaba Cloud ECS instance that is in the same Alibaba Cloud account and region as the SLS project.

If your ECS instance and project are in different accounts or regions, or if the log source is an on-premises server, see [Install and configure LoongCollector](/help/en/sls/loongcollector-installation-linux#ad1d9209f9t9z).

**Procedure:**

1.  On the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7574404571/p992524.png)Logstores page, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8096561571/p970744.png) icon before the target logstore name to expand it.
    
2.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8096561571/p978728.png) icon next to **Data Collection**, and in the **Quick Data Import** dialog box, select a text log collection template (such as Single Line - Text Log) and click **Integrate Now**.
    
    > All text log collection templates differ only in their parsing plugins. The rest of the configuration process is the same and can be modified later.
    
3.  On the **Machine Group Configurations** page, configure the following parameters:
    
    -   **Scenario**: **Servers**
        
    -   **Installation Environment**: **ECS**
        
    -   **Select Machine Group:** Based on the LoongCollector installation status and machine group configuration of the target server, select the corresponding operation:
        
        -   If LoongCollector is installed and has been added to a machine group, select the machine group from the **Source Machine Group** list and add it to the **Applied Server Groups**. You do not need to create a new one.
            
        -   If LoongCollector is not installed, click **Create Machine Group**:
            
            > The following steps guide you through the one-click automatic installation of LoongCollector and the creation of a machine group.
            
            1.  The system automatically lists the ECS instances in the same region as the project. Select one or more instances from which you want to collect logs.
                
            2.  Click **Install and Create Machine Group**. The system automatically installs LoongCollector on the selected ECS instances.
                
            3.  Configure the machine group **Name** and click **OK**.
                
            
            **Note**
            
            If the installation fails or remains in a waiting state, check whether the ECS region is the same as the project region.
            
        -   To add a server with LoongCollector already installed to an existing machine group, see the FAQ [How do I add a server to an existing machine group?](#fa759b7203ns5)
            
4.  **Check the heartbeat status:** Click **Next**. The **Machine Group Heartbeat** section appears. Check the **Heartbeat** status. If it is OK, the machine group connection is normal. Click **Next** to go to the Logtail configuration page.
    
    > If the status is FAIL, it may take some time to establish the initial heartbeat. Wait about two minutes and then refresh the heartbeat status. If it is still FAIL after you refresh, see [Machine group heartbeat is FAIL](#f9ec8a2efe7xt) for further troubleshooting.
    

## **Step 2: Create and configure log collection rules**

After you complete the [LoongCollector installation and machine group configuration](#999a6653ca1s7), go to the **Logtail Configuration** page and define log collection and processing rules.

### **1\. Global and input configurations**

Define the name of the collection configuration and the source and scope of log collection.

**Global Configurations**:

-   **Configuration Name**: A custom name for the collection configuration. This name must be unique within the project and cannot be changed after it is created. Naming conventions:
    
    -   Can contain only lowercase letters, digits, hyphens (-), and underscores (\_).
        
    -   Must start and end with a lowercase letter or a digit.
        

**Input Configurations**:

-   **Type**: **Text Log Collection**.
    
-   **File Path**: The log collection path.
    
    -   Linux: The path must start with a forward slash (/). For example, `/data/mylogs/**/*.log` indicates all files with the .log extension in the `/data/mylogs` directory and its subdirectories.
        
    -   Windows: The path must start with a drive letter. For example, `C:\Program Files\Intel\**\*.Log`.
        
-   **Maximum Directory Monitoring Depth**: The maximum depth of directories matched by the `**` wildcard character in the **File Path**. The default value is 0, which indicates that only the current directory is monitored.
    

* * *

### **2\. Log processing and structuring**

Configure log processing rules to transform raw, unstructured logs into structured, searchable data. This improves the efficiency of log queries and analysis. We recommend that you first **add a log sample**:

In the **Processor Configurations** section of the **Logtail Configuration** page, click **Add Sample Log** and enter the log content to be collected. The system identifies the log format based on the sample and helps generate regular expressions and parsing rules, which simplifies the configuration.

#### **Use case 1: Process multiline logs (such as Java stack logs)**

Because logs such as Java exception stacks and JSON objects often span multiple lines, the default collection mode splits them into multiple incomplete records, which causes a loss of context. To prevent this, enable multiline mode and configure a Regex to Match First Line to merge consecutive lines of the same log into a single, complete log.

**Example:**

**Raw log without any processing**

**In default collection mode, each line is a separate log, breaking the stack trace and losing context**

**With multiline mode enabled, a Regex to Match First Line identifies the complete log, preserving its full semantic structure.**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9459503671/p1026267.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9459503671/p1026270.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9459503671/p1026266.png)

**Procedure:** In the **Processor Configurations** section of the **Logtail Configuration** page, enable **Multi-line Mode**:

-   For **Type**, select **Custom** or **Multi-line JSON**.
    
    -   **Custom**: For raw logs with a variable format, configure a **Regex to Match First Line** to identify the starting line of each log.
        
        -   **Regex to Match First Line**: Automatically generate or manually enter a regular expression that matches a complete line of data. For example, the regular expression for the preceding example is `\[\d+-\d+-\w+:\d+:\d+,\d+]\s\[\w+]\s.*`.
            
            -   Automatic generation: Click **Generate**. Then, in the **Log Sample** text box, select the log content that you want to extract and click **Automatically Generate**.
                
            -   Manual entry: Click **Manually Enter Regular Expression**. After you enter the expression, click **Validate**.
                
    -   **Multi-line JSON**: SLS automatically handles line breaks within a single raw log if the log is in standard JSON format.
        

-   **Processing Method If Splitting Fails**:
    
    -   **Discard**: Discards a text segment if it does not match the start-of-line rule.
        
    -   **Retain Single Line**: Retains unmatched text on separate lines.
        

#### **Use case 2: Structured logs**

When raw logs are unstructured or semi-structured text, such as NGINX access logs or application output logs, direct querying and analysis are often inefficient. SLS provides various data parsing plugins that can automatically convert raw logs of different formats into structured data. This provides a solid data foundation for subsequent analysis, monitoring, and alerting.

**Example:**

**Raw log**

**Structured log**

```
192.168.*.* - - [15/Apr/2025:16:40:00 +0800] "GET /nginx-logo.png HTTP/1.1" 0.000 514 200 368 "-" "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.*.* Safari/537.36"
```

```
body_bytes_sent: 368
http_referer: -
http_user_agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.x.x Safari/537.36
remote_addr:192.168.*.*
remote_user: -
request_length: 514
request_method: GET
request_time: 0.000
request_uri: /nginx-logo.png
status: 200
time_local: 15/Apr/2025:16:40:00
```

**Procedure:** In the **Processor Configurations** section of the **Logtail Configuration** page

1.  **Add a parsing plugin:** Click **Add Processor** and configure a plugin such as [regular expression parsing, separator parsing, or JSON parsing](#a081b5a847v7k) based on the actual format. This example uses NGINX log collection and selects **Native Processor** > ****Data Parsing (NGINX Mode)****.
    
2.  **NGINX Log Configuration**: Copy the `log_format` definition from the NGINX server configuration file (nginx.conf) and paste it into this text box.
    
    Example:
    
    ```
    log_format main  '$remote_addr - $remote_user [$time_local] "$request" ''$request_time $request_length ''$status $body_bytes_sent "$http_referer" ''"$http_user_agent"';
    ```
    
    **Important**
    
    The format definition here must be exactly the same as the format that generates the logs on the server. Otherwise, log parsing fails.
    
3.  **Description of common configuration parameters:** The following parameters appear in multiple data parsing plugins and have a unified function and usage.
    
    -   **Original Field:** Specifies the name of the source field to be parsed. The default is `content`, which is the entire collected log entry.
        
    -   **Retain Original Field if Parsing Fails:** We recommend that you enable this option. When a log cannot be successfully parsed by the plugin, for example, due to a format mismatch, this option ensures that the original log content is not lost but is fully retained in the specified source field.
        
    -   **Retain Original Field if Parsing Succeeds:** If you select this, the original log content is retained even if the log is parsed successfully.
        

* * *

### **3\. Log filtering**

Collecting a large volume of low-value or irrelevant logs, such as DEBUG- or INFO-level logs, wastes storage resources, increases costs, affects query efficiency, and poses data breach risks. To address this, implement fine-grained filtering policies for efficient and secure log collection.

## **Reduce costs with content filtering**

Filter fields based on log content, such as collecting only logs where the level is WARNING or ERROR.

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

**Procedure:** In the **Processor Configurations** section of the **Logtail Configuration** page

Click **Add Processor** and select **Native Processor** > ****Data Filtering****:

-   **Field Name**: The log field to use for filtering.
    
-   **Field Value**: The regular expression used for filtering. Only full matches are supported, not partial keyword matches.
    

## **Control collection scope with a blacklist**

Use a blacklist to exclude specified directories or files, which prevents irrelevant or sensitive logs from being uploaded.

**Procedure:** In the **Input Configurations** > **Other Input Configurations** section of the **Logtail Configuration** page, enable **Collection Blacklist** and click **Add**.

> Supports full and wildcard matching for directories and filenames. The only supported wildcard characters are the asterisk (\*) and the question mark (?).

-   **File Path Blacklist**: Specifies the file paths to exclude. Examples:
    
    -   `/home/admin/private*.log`: Ignores all files in the `/home/admin/` directory that start with private and end with .log.
        
    -   `/home/admin/private*/*_inner.log`: Ignores files that end with \_inner.log within directories that start with private under the `/home/admin/` directory.
        
-   **File Blacklist**: A list of filenames to ignore during collection. Example:
    
    -   `app_inner.log`: Ignores all files named `app_inner.log` during collection.
        
-   **Directory Blacklist**: Directory paths cannot end with a forward slash (/). Examples:
    
    -   `/home/admin/dir1/`: The directory blacklist will not take effect.
        
    -   `/home/admin/dir*`: Ignores files in all subdirectories that start with dir under the `/home/admin/` directory during collection.
        
    -   `/home/admin/*/dir`: Ignores all files in subdirectories named dir at the second level of the `/home/admin/` directory. For example, files in the `/home/admin/a/dir` directory are ignored, but files in the `/home/admin/a/b/dir` directory are collected.
        

### **4\. Log categorization**

When logs from multiple applications or instances have the same format but different paths, such as `/apps/app-A/run.log` and `/apps/app-B/run.log`, it is difficult to distinguish their sources during collection. By configuring topics, you can logically differentiate logs from different applications, services, or paths. This enables efficient categorization and precise queries within a single logstore.

**Procedure:** **Global Configurations** > **Other Global Configurations** > **Log Topic Type**: Select a method for generating topics. The following three types are supported:

-   **Machine Group Topic:** When a collection configuration is applied to multiple machine groups, LoongCollector automatically uses the name of the server's machine group as the `__topic__` field for upload. This is suitable for use cases where logs are divided by host.
    
-   **Custom**: Uses the format `customized://<custom_topic_name>`, such as `customized://app-login`. This format is suitable for static topic use cases with fixed business identifiers.
    
-   **File Path Extraction:** Extract key information from the full path of the log file to dynamically mark the log source. This is suitable for situations where multiple users or applications share the same log filename but have different paths. For example, when multiple users or services write logs to different top-level directories but the sub-paths and filenames are identical, the source cannot be distinguished by filename alone:
    
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
    
    Configure **File Path Extraction** and use a regular expression to extract key information from the full path. The matched result is then uploaded to the logstore as the topic.
    
    **File path extraction rule: Based on regular expression capturing groups**
    
    When you configure a regular expression, the system automatically determines the output field format based on the number and naming of capturing groups. The rules are as follows:
    
    > In the regular expression for a file path, you must escape the forward slash (/).
    
    **Capturing group type**
    
    **Use case**
    
    **Generated field**
    
    **Regex example**
    
    **Matching path example**
    
    **Generated field example**
    
    Single capturing group (only one `(.*?)`)
    
    Only one dimension is needed to distinguish the source (such as username or environment)
    
    Generates the `__topic__` field
    
    `\/logs\/(.*?)\/app\.log`
    
    `/logs/userA/app.log`
    
    `__topic__: userA`
    
    Multiple capturing groups - unnamed (multiple `(.*?)`)
    
    Multiple dimensions are needed to distinguish the source, but no semantic tags are required
    
    Generates a tag field `__tag__:__topic_{i}__`, where `{i}` is the ordinal number of the capturing group
    
    `\/logs\/(.*?)\/(.*?)\/app\.log`
    
    `/logs/userA/svcA/app.log`
    
    `__tag__:__topic_1__userA`
    
    `__tag__:__topic_2__svcA`
    
    Multiple capturing groups - named (using `(?P<name>.*？)`
    
    Multiple dimensions are needed to distinguish the source, and the field meanings should be clear for easy querying and analysis
    
    Generates a tag field `__tag__:{name}`
    
    `\/logs\/(?P<user>.*?)\/(?P<service>.*?)\/app\.log`
    
    `/logs/userA/svcA/app.log`
    
    `__tag__:user:userA`;
    
    `__tag__:service:svcA`
    

### **5\. Output configuration**

By default, all logs are sent to the current logstore with lz4 compression. To send logs from the same source to different logstores, follow the steps below:

#### **Dynamic distribution to multiple targets**

**Important**

-   Sending logs to multiple targets is available only for LoongCollector 3.0.0 and later. This feature is not supported by Logtail.
    
-   Up to five output targets can be configured.
    
-   After you configure multiple output targets, the collection configuration is no longer visible in the collection configuration list of the current logstore. To view, modify, or delete the multi-target distribution configuration, see [How do I manage multi-target distribution configurations?](#9002c3418e8gb)
    

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
            

## **Step 3: Query and analysis configuration**

After you configure log processing and plugins, click **Next** to go to the **Query and Analysis Configurations** page:

-   [Full-text index](/help/en/sls/create-indexes#6f7eb27bcclmy) is enabled by default, which supports keyword searches on raw log content.
    
-   For precise queries by field, wait for the **Preview Data** to load, and then click **Automatic Index Generation**. SLS generates a [field index](/help/en/sls/create-indexes) based on the first entry in the preview data.
    

After the configuration is complete, click **Next** to finish setting up the entire collection process.

## **Step 4: Verification and troubleshooting**

After the configuration is complete, apply it to the machine group and save it. Wait a moment, and then verify using the following checklist.

### **Verification checklist**

1.  **Confirm that the log file has new content**: LoongCollector collects only incremental logs. Run `tail -f /path/to/your/log/file` and trigger a business operation to ensure that new logs are being written.
    
2.  **Check the LoongCollector status**: `sudo /etc/init.d/loongcollectord status`.
    
3.  **Check the machine group heartbeat**: Go to the **![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8395532671/p1019849.png)Resources** > **Machine Groups** page. Click the target machine group name. In the **Machine Group Configurations** > **Machine Group Status** section, check the **Heartbeat** status.
    
    -   If the heartbeat is OK, the machine group is connected to the SLS project.
        
    -   If the heartbeat is FAIL, see [Machine group heartbeat is FAIL](#f9ec8a2efe7xt) for troubleshooting.
        
4.  **Query logs**: Go to the query and analysis page of the target logstore. Click **Search & Analyze** (the default time range is the last 15 minutes) and check whether new logs are flowing in.
    

### **Troubleshooting common issues**

#### **Machine group heartbeat is FAIL**

1.  Check the user ID: If your server is not an ECS instance, or if the ECS instance and the project belong to different Alibaba Cloud accounts, check whether the correct user ID exists in the specified directory. If it does not, run the following command to create it manually.
    
    -   Linux: Run the `cd /etc/ilogtail/users/ && touch <uid>` command to create the user ID file.
        
    -   Windows: Go to the `C:\LogtailData\users\` directory and create an empty file named `<uid>`.
        
2.  Check the machine group ID: If you used a custom ID when you created the machine group, check whether the `user_defined_id` file exists in the specified directory. If it exists, check whether the content of the file is consistent with the custom ID configured for the machine group.
    
    -   Linux:
        
        ```
        # Configure a custom ID. If the directory does not exist, create it manually.
        echo "user-defined-1" > /etc/ilogtail/user_defined_id
        ```
        
    -   Windows: In the `C:\LogtailData` directory, create a new file named `user_defined_id` and write the custom ID to it. (If the directory does not exist, create it manually.)
        
3.  If both the user ID and the machine group ID are configured correctly, see [Troubleshooting LoongCollector (Logtail) machine group issues](/help/en/sls/troubleshoot-the-errors-related-to-logtail-machine-groups) for further investigation.
    

* * *

#### **No data is collected**

1.  **Check for incremental logs**: After you configure LoongCollector (Logtail) for collection, if no new logs are added to the target log file, LoongCollector (Logtail) does not collect data from that file.
    
2.  **Check the machine group heartbeat status**: Go to the **![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4654047571/p993962.png)Resources** > **Machine Groups** page. Click the target machine group name. In the **Machine Group Configurations** > **Machine Group Status** section, check the **Heartbeat** status.
    
    -   If the heartbeat is OK, the machine group is connected to the SLS project.
        
    -   If the heartbeat is FAIL, see [Machine group heartbeat is FAIL](#f9ec8a2efe7xt) for troubleshooting.
        
3.  **Confirm that the LoongCollector (Logtail) collection configuration has been applied to the machine group**: Even if a LoongCollector (Logtail) collection configuration is created, logs cannot be collected if it is not applied to a machine group.
    
    1.  Go to the **![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8096561571/p979489.png)Resources** > **Machine Groups** page, click the target machine group name, and go to the **Machine Group Configurations** page.
        
    2.  On the page, view **Manage Configuration**. The left side shows **All Logtail Configurations**, and the right side shows **Applied Logtail Configs**. If the target LoongCollector (Logtail) collection configuration has been moved to the applied area on the right, the configuration has been successfully applied to the target machine group.
        
    3.  If the target LoongCollector (Logtail) collection configuration has not been moved to the applied area on the right, click **Modify**. In the **All Logtail Configurations** list on the left, select the target LoongCollector (Logtail) configuration name, click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8096561571/p981914.png) to move it to the applied area on the right, and then click **Save**.
        

* * *

#### **Log collection errors or format errors**

Troubleshooting: This situation indicates that the network connection and basic configuration are normal. The problem is likely a mismatch between the log content and the parsing rules. You need to check the specific error message to locate the problem:

1.  On the **Logtail Configuration** page, click the name of the LoongCollector (Logtail) configuration that has a collection error. On the **Log Collection Error** tab, click **Select Time Range** to set the query time.
    
2.  In the **Collection Exception Monitoring** > **Complete Error Information** section, view the alarm metric of the error log and find the corresponding solution in [Common errors in data collection](/help/en/sls/log-collection-error-type).
    

## **Limitations**

**Item**

**Limitations**

Length of a single log

The default limit is 512 KB. Adjust this using the **max\_read\_buffer\_size** startup parameter, up to a maximum of 8 MB. For more information, see [Logtail network types, startup parameters, and configuration files](/help/en/sls/select-a-network-type#concept-sdg-czb-wdb).

After a multiline log is split by the Regex to Match First Line, the size limit for each log is still 512 KB. If a log exceeds 512 KB, it is forcibly split into multiple entries for collection. For example, if a single log is 1,025 KB, the first 512 KB is processed, then the next 512 KB, and finally the remaining 1 KB. The final result is multiple incomplete log entries.

File encoding

Supports log files with UTF-8 or GBK encoding. Use UTF-8 for better processing performance.

**Warning**

If the log file uses another encoding format, issues such as garbled characters and data loss may occur.

Log file rotation

The default size of the log rotation queue is 20. Adjust this using the **logreader\_max\_rotate\_queue\_size** startup parameter. For more information, see [Logtail network types, startup parameters, and configuration files](/help/en/sls/select-a-network-type#concept-sdg-czb-wdb).

Set the collection path to `xxx.log` or `xxx.log*` format.

**Important**

Do not mix these two formats in the same Logtail instance. Otherwise, the same file may match multiple Logtail collection configurations, which results in duplicate collection.

If more than 20 files are not yet processed, newly generated logs will be lost. In such cases, first check whether the logstore shard write quota is exceeded and adjust the Logtail concurrency level. For more information, see [Logtail network types, startup parameters, and configuration files](/help/en/sls/select-a-network-type#section-asp-6bg-net).

Collection behavior when log parsing is blocked

When log parsing is blocked, Logtail keeps the file descriptor for that log file open. This prevents the file from being deleted during the blockage, which would cause data loss.

If multiple log file rotations occur while parsing is blocked, Logtail places the files in the rotation queue.

Regular expression

Supports Perl Compatible Regular Expressions (PCRE).

JSON

Fully supports standard JSON ([RFC7159](https://tools.ietf.org/html/rfc7159), [ECMA-404](https://ecma-international.org/publications-and-standards/standards/ecma-404/)). Non-standard JSON, such as `{"name": "\xE5\xAD\xA6"}`, is not supported.

File opening behavior

Logtail keeps the collected file and the files in the rotation queue open to ensure data integrity. The file is closed in the following situations:

-   The file has not been modified for more than 5 minutes.
    
-   Rotation has occurred and collection is complete.
    
-   The Logtail collection configuration has changed.
    

If you want the file handle to be released within a controllable time after the file is deleted, regardless of whether the file has been fully collected or is still being written to, set a timeout using the **force\_release\_deleted\_file\_fd\_timeout** startup parameter. For more information, see [Logtail network types, startup parameters, and configuration files](/help/en/sls/select-a-network-type#concept-sdg-czb-wdb).

Initial log collection behavior

Logtail collects only incremental log files. When a file is first detected as modified, if its size exceeds 1 MB (512 KB for container standard output), collection starts from the last 1 MB. Otherwise, it starts from the beginning of the file.

Adjust the initial collection size for new files using the **tail\_size\_kb** parameter in the Logtail collection configuration. For more information, see Logtail Configuration [(legacy)](/help/en/sls/developer-reference/logtail-configurations#concept-f3n-s5q-12b).

If the log file is not modified after the Logtail collection configuration is applied, Logtail does not collect that file. To collect historical files, see [Import historical log files](/help/en/sls/import-historical-logs#task-g1x-q2s-g2b).

Behavior when a file is overwritten

Logtail identifies files using the inode plus a hash of the first 1,024 bytes of the file. If a file is overwritten and either the inode or the hash of the first 1,024 bytes changes, the file is treated as a new file and collection starts from the beginning. Otherwise, it is not collected.

Behavior when a file is moved

After a file is moved, if it matches a Logtail collection configuration that has never matched this file before, the moved document is treated as a new file and collection starts from the beginning. Otherwise, it is not collected.

File collection history

Logtail keeps the file collection history in memory to ensure that only the incremental part is collected after a file changes. If a write occurs to a log outside the retention range, duplicate collection occurs.

-   By default, historical files from the last month are retained.
    
-   If there are more than 5,000 historical files in the same directory, only records from the last week are kept.
    
-   If there are more than 10,000 historical files in the same directory, only records from the last day are kept.
    

Non-standard text logs

For lines in logs that contain `\0`, versions later than 2.1.10 and 3.0.12 retain only the `\0` in the middle of the log. The prefix and suffix `\0` parts are discarded. Other versions may truncate at the first `\0` or retain it completely. We recommend that you upgrade. For other escape characters (such as ASCII colors) or invisible characters, Logtail reports them as is.

## **Billing**

-   Installing LoongCollector or Logtail is free of charge.
    
-   Charges are incurred for log ingestion, storage, indexing, queries, transformation, and shipping based on the logstore's billing mode.
    
-   If you use the **Global Accelerator** feature during installation or configuration, additional traffic fees are generated for data transmitted over the accelerated network.
    

## **FAQ**

### **How do I manage multi-target distribution configurations?**

Multi-target distribution configurations are associated with multiple logstores. Manage these configurations from the project-level management page:

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com/) and click the name of the target project.
    
2.  On the project page, choose ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7938948671/p1041414.png) **Resources** > **Configurations** from the navigation pane on the left.
    
    **Note**
    
    This page provides centralized management for all collection configurations in the project, including configurations that remain after their associated logstores are accidentally deleted.
    

### **How do I send logs from an ECS server to a project in another Alibaba Cloud account?**

If you have not installed LoongCollector, see [Install the data collector](/help/en/sls/loongcollector-installation-linux) and select the appropriate cross-account use case for installation.

If you have already installed LoongCollector, follow these steps to configure a user ID. This ID indicates that the server has permission to be accessed and have its logs collected by the account that owns the SLS project.

> You need to configure a user ID only when you collect logs from non-account ECS instances, on-premises servers, or servers from other cloud providers.

1.  Copy the ID of the Alibaba Cloud account that owns SLS: Hover your mouse over the profile picture in the upper-right corner. View and copy the account ID from the tab that appears.
    
2.  Log on to the server from which you want to collect logs and create an Alibaba Cloud account ID file to configure the user ID:
    
    ```
    touch /etc/ilogtail/users/{Alibaba_Cloud_account_ID} # If the /etc/ilogtail/users directory does not exist, create it manually. The user ID configuration file only needs a filename, not a file extension.
    ```
    

* * *

### **How do I send logs from an ECS server to a project in the same account but a different region?**

If you have not installed LoongCollector, see [Install the data collector](/help/en/sls/loongcollector-installation-linux) and select the appropriate cross-region use case for installation.

If you have already installed LoongCollector, you need to modify the LoongCollector configuration.

1.  Run the `sudo /etc/init.d/ilogtaild stop` command to stop LoongCollector.
    
2.  Modify the LoongCollector startup configuration file `ilogtail_config.json`. Choose one of the following two methods based on your network requirements:
    
    Configuration file path: `/usr/local/ilogtail/ilogtail_config.json`
    
    -   Method 1: Use the Internet for transmission
        
        See [RegionID](/help/en/sls/loongcollector-installation-linux#c6871713371el) and replace the region in the configuration file with the region where SLS is located. The fields to modify include the following:
        
        -   `primary_region`
            
        -   The region part in `config_servers`
            
        -   The `region` and the region part of `endpoint_list` in `data_servers`
            
    -   Method 2: Use transfer acceleration
        
        Replace the endpoint line in the **data\_server\_list** parameter with `log-global.aliyuncs.com`. For the file path, see [Logtail network types, startup parameters, and configuration files](/help/en/sls/select-a-network-type#title-hwv-3ga-q8e).
        
    
    Configuration file example
    
    ```
    $cat 
    {
        "primary_region" : "cn-shanghai",
        "config_servers" :
        [
            "http://logtail.cn-shanghai.log.aliyuncs.com"
        ],
        "data_servers" :
        [
            {
                "region" : "cn-shanghai",
                "endpoint_list": [
                    "cn-shanghai.log.aliyuncs.com"
                ]
            }
        ],
        "cpu_usage_limit" : 0.4,
        "mem_usage_limit" : 384,
        "max_bytes_per_sec" : 20971520,
        "bytes_per_sec" : 1048576,
        "buffer_file_num" : 25,
        "buffer_file_size" : 20971520,
        "buffer_map_num" : 5
    }
    ```
    

3.  Run the `sudo /etc/init.d/ilogtaild start` command to start LoongCollector.
    

### **How do I add a server to an existing machine group?**

When you have a configured machine group and want to add a new server, such as a newly deployed ECS instance or an on-premises server, to inherit its collection configuration, bind it by following these steps.

**Prerequisites:**

-   A configured machine group already exists.
    
-   The new server has [LoongCollector installed](#999a6653ca1s7).
    

**Procedure:**

1.  View the target machine group ID:
    
    1.  On the target project page, click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8395532671/p1020796.png)**Resources** > **Machine Groups** in the navigation pane on the left.
        
    2.  On the Machine Groups page, click the target machine group name.
        
    3.  On the machine group configuration page, view the machine group ID.
        
2.  Perform the corresponding operation based on the ID type:
    
    **Note**
    
    A single machine group cannot contain both Linux and Windows servers. Do not configure the same custom ID on both Linux and Windows servers. A server can be configured with multiple custom IDs, separated by line feeds.
    
    -   Type 1: Machine group ID is an IP address
        
        1.  On the server, run the following command to open the `app_info.json` file and view the `ip` value.
            
            ```
            cat /usr/local/ilogtail/app_info.json
            ```
            
        2.  On the target machine group configuration page, click **Modify** and enter the server's IP address. Separate multiple IP addresses with line feeds.
            
        3.  After the configuration is complete, click **Save** and confirm the heartbeat status. After the heartbeat is OK, the server automatically applies the machine group's collection configuration.
            
            > If the heartbeat status is FAIL, see the FAQ [Machine group heartbeat is FAIL](#f9ec8a2efe7xt) for further troubleshooting.
            
    -   Type 2: Machine group ID is a custom ID
        
        Depending on the operating system, write the custom ID string that matches the target machine group to the specified file:
        
        > If the directory does not exist, you must create it manually. The file path and name are fixed by SLS and cannot be customized.
        
        -   Linux: Write the custom string to the `/etc/ilogtail/user_defined_id` file.
            
        -   Windows: Write the custom string to `C:\LogtailData\user_defined_id`.
            

### **How do I import a collection configuration from another project?**

After you complete the [Preparations](#c851a560a1r6z) and [Machine Group Configuration](#999a6653ca1s7), quickly import a collection configuration from an existing project into the current logstore. This avoids repetitive configuration and improves efficiency.

Procedure:

1.  After you complete the [machine group configuration](#999a6653ca1s7), click **Next** to go to the **Logtail Configuration** page.
    
2.  Click **Import Other Configuration** in the upper-right corner of the page.
    
3.  Select the project to import from and the collection configuration under that project.
    
4.  Click **OK**. The system automatically loads the selected configuration.
    
5.  After you check that the imported configuration information is correct, click Next to go to the [Query and Analysis Configurations](#3f32235bf71qt) page and complete the subsequent configuration.
    

### **How do I get a server's IP address to use as a machine group ID?**

On a server where LoongCollector (Logtail) is installed, open the `/usr/local/ilogtail/app_info.json` file and view the `ip` value.

The server IP address automatically obtained by Logtail is recorded in the `ip` field of the `app_info.json` file, as shown below.![IP地址](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8395532671/p1020691.png)

**Important**

-   If there are multiple servers, enter their corresponding IP addresses manually. IP addresses must be separated by line feeds.
    
-   A single machine group cannot contain both Linux and Windows servers. Do not add the IP addresses of both Windows and Linux servers to the same machine group.
    

### **How can the same log file be collected by multiple collection configurations at the same time?**

By default, to avoid data duplication, SLS restricts a text log file from being collected by more than one Logtail configuration. To allow the same log file to be collected by multiple collection configurations at the same time, you must manually enable the feature that allows a file to be collected multiple times.

Procedure:

**Important**

When you collect multiple copies, the file read IO, computing resources, and network IO increase linearly.

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com/) and go to the target project.
    
2.  In the navigation pane on the left, choose ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8395532671/p1020786.png)Logstores and find the target logstore.
    
3.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8395532671/p1020787.png) icon before its name to expand the logstore.
    
4.  Click **Logtail Configuration**. In the configuration list, find the target Logtail configuration and click **Manage Logtail Configuration** in the Actions column.
    
5.  On the Logtail configuration page, click **Edit**:
    
    -   In **Input Configurations** > **Other Input Configurations**, enable **Allow File to Be Collected for Multiple Times**.
        
6.  After the configuration is complete, click **Save**.
    

### Why is the last log entry reported after a long delay? Why is it sometimes truncated?

**Cause:** Log truncation usually occurs when a log file is missing a line feed at the end, or when a multiline log, such as an exception stack, has not been fully written. Because the agent cannot determine whether the log has ended, the last part of the content may be split prematurely or reported with a delay. Different versions of LoongCollector (Logtail) have different handling mechanisms:

-   Versions before 1.8:  
    If the last line of a log does not have a line feed (carriage return), or if a multiline log paragraph is not finished, the agent waits for the next write to trigger an output. This can cause the last log entry to be held for a long time without being sent, until a new log is written.
    
-   Version 1.8 and later:  
    A timeout refresh mechanism was introduced to prevent logs from getting stuck. When an incomplete log line is detected, the system starts a timer. After the timeout, it automatically submits the current content, which ensures the log is eventually collected.
    
    -   Default timeout: 60 seconds (to ensure completeness in most use cases)
        
    -   Adjust this value as needed, but do not set it to 0, as this may cause log truncation or partial content loss.
        

**Solution:**

Extend the waiting time to ensure the complete log is written before it is collected:

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com/) and go to the target project.
    
2.  In the navigation pane on the left, choose ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8395532671/p1020786.png)Logstores and find the target logstore.
    
3.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8395532671/p1020787.png) icon before its name to expand the logstore.
    
4.  Click **Logtail Configuration**. In the configuration list, find the target Logtail configuration and click **Manage Logtail Configuration** in the Actions column.
    
5.  On the Logtail configuration page, click **Edit**:
    
    -   In **Input Configurations** > **Other Input Configurations** > **Advanced Parameters**, add the following JSON configuration to customize the timeout:
        
        ```
        {
          "FlushTimeoutSecs": 1
        }
        ```
        
        -   Default value: Determined by the startup parameter `default_reader_flush_timeout` (usually a few seconds).
            
        -   Unit: Seconds.
            
        -   Recommended value: ≥1 second. Do not set it to 0, as this may cause log truncation or partial content loss.
            
6.  After the configuration is complete, click **Save**.
    

### **Why does LoongCollector (Logtail) switch from an internal endpoint to the Internet during operation? Can it switch back automatically?**

During operation, if LoongCollector (Logtail) detects a communication anomaly with the internal same-region endpoint, such as a network failure or connection timeout, the system automatically switches to a public domain name to send data. This ensures the continuity and reliability of log collection and prevents log backlog or loss.

-   LoongCollector: Automatically switches back to the internal network after it recovers.
    
-   Logtail: Does not switch back automatically. It must be manually restarted to resume internal network communication.
    

## **Appendix: Details of native processors**

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

Extract log fields using a regular expression and parse the log into key-value pairs. Each field can be independently queried and analyzed.

**Example:**

**Raw log without any processing**

**Using the regular expression parsing plugin**

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

**Procedure:** In the **Processor Configurations** section of the **Logtail Configuration** page, click **Add Processor** and select **Native Processor** > ****Data Parsing (Regex Mode)****:

-   **Regular Expression**: The expression used to match logs. Generate it automatically or enter it manually:
    
    -   Automatic generation:
        
        -   Click **Generate**.
            
        -   In the **Log Sample**, select the log content to extract.
            
        -   Click **Generate Regular Expression**.
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1446191571/p982663.png)
            
    -   Manual entry: **Manually Enter Regular Expression** based on the log format.
        
    
    After configuration, click **Validate** to test whether the regular expression can correctly parse the log content.
    
-   **Extracted Field**: The field name (Key) that corresponds to the extracted log content (Value).
    
-   For other parameters, see the description of common configuration parameters in [Use case 2: Structured logs](#7874b2de35pf5).
    

* * *

### **Separator parsing**

Structure log content using a separator to parse it into multiple key-value pairs. Both single-character and multi-character separators are supported.

**Example:**

**Raw log without any processing**

**Fields split by the specified character** `**,**`

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

**Procedure:** In the **Processor Configurations** section of the **Logtail Configuration** page, click **Add Processor** and select **Native Processor** > **Data Parsing (Delimiter Mode)**:

-   **Delimiter**: Specifies the character used to split log content.
    
    Example: For a CSV file, select **Custom** and enter a comma (,).
    
-   **Quote**: If a field value contains the separator, you must enclose the field value in quotes to prevent incorrect splitting.
    
-   **Extracted Field**: Specify the field name (Key) for each column in the order that they appear. The rules are as follows:
    
    -   Field names can contain only letters, digits, and underscores (\_).
        
    -   Must start with a letter or an underscore (\_).
        
    -   Maximum length: 128 bytes.
        
-   For other parameters, see the description of common configuration parameters in [Use case 2: Structured logs](#7874b2de35pf5).
    

* * *

### **Standard JSON parsing**

Structure an Object-type JSON log by parsing it into key-value pairs.

**Example:**

**Raw log without any processing**

**Automatic extraction of standard JSON key-value pairs**

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

**Procedure:** In the **Processor Configurations** section of the **Logtail Configuration** page, click **Add Processor** and select **Native Processor** > **Data Parsing (JSON Mode)**:

-   **Original Field**: The field that contains the raw log to be parsed. The default value is content.
    
-   For other parameters, see the description of common configuration parameters in [Use case 2: Structured logs](#7874b2de35pf5).
    

* * *

### **Nested JSON parsing**

Parse a nested JSON log into key-value pairs by specifying the expansion depth.

**Example:**

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

**Procedure:** In the **Processor Configurations** section of the **Logtail Configuration** page, click **Add Processor** and select **Extended Processor** > **Expand JSON Field**:

-   **Original Field**: Specifies the name of the source field to expand, such as `content`.
    
-   **JSON Expansion Depth**: The expansion depth of the JSON object, where 0 (the default) indicates full expansion, 1 indicates expansion of the current level, and so on.
    
-   **Character to Concatenate Expanded Keys**: The separator for field names when a JSON object is expanded. The default value is an underscore (\_).
    
-   **Name Prefix of Expanded Keys**: The prefix for field names after JSON expansion.
    
-   **Expand Array**: Expands an array into key-value pairs with indexes.
    
    Example: `{"k":["a","b"]}` is expanded to `{"k[0]":"a","k[1]":"b"}`.
    
    > To rename the expanded fields (for example, from prefix\_s\_key\_k1 to new\_field\_name), add a **[rename fields plugin](/help/en/sls/field-processing-class-plug-in#f86b01f0f947x)** afterward to complete the mapping.
    
-   For other parameters, see the description of common configuration parameters in [Use case 2: Structured logs](#7874b2de35pf5).
    

* * *

### **JSON array parsing**

Use the `json_extract` [function](/help/en/sls/json-functions) to extract JSON objects from a JSON array.

**Example:**

**Raw log without any processing**

**Extract JSON array structure**

```
[{"key1":"value1"},{"key2":"value2"}]
```

```
json1:{"key1":"value1"}
json2:{"key2":"value2"}
```

**Procedure:** In the **Processor Configurations** section of the **Logtail Configuration** page, switch the **Processing Mode** to **SPL**, configure the **SPL Statement**, and use the [json\_extract](/help/en/sls/json-functions) function to extract JSON objects from the JSON array.

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

**Procedure:** In the **Processor Configurations** section of the **Logtail Configuration** page, click **Add Processor** and select **Native Processor** > ****Data Parsing (Apache Mode)****:

-   The **Log Format** is **combined**.
    
-   The **APACHE LogFormat Configuration** are automatically populated based on the **Log Format**.
    
    **Important**
    
    Make sure to verify the auto-filled content to ensure it is exactly the same as the LogFormat defined in your server's Apache configuration file (usually located at /etc/apache2/apache2.conf).
    
-   For other parameters, see the description of common configuration parameters in [Use case 2: Structured logs](#7874b2de35pf5).
    

* * *

### **IIS log parsing**

Structure the log content into multiple key-value pairs based on the IIS log format definition.

**Comparison example:**

**Raw log**

**Adaptation for Microsoft IIS server-specific format**

```
#Fields: date time s-sitename s-ip cs-method cs-uri-stem cs-uri-query s-port cs-username c-ip cs(User-Agent) sc-status sc-substatus sc-win32-status sc-bytes cs-bytes time-taken
```

```
c-ip: cs-username
cs-bytes: sc-substatus
cs-method: cs-method
cs-uri-query: cs-uri-query
cs-uri-stem: cs-uri-stem
cs-username: s-port
date: #Fields:
s-computername: s-sitename
s-ip: s-ip
s-sitename: time
sc-bytes: sc-status
sc-status: c-ip
sc-win32-status: cs (User-Agent)
time: date
time-taken: sc-win32-status
```

**Procedure:** In the **Processor Configurations** section of the **Logtail Configuration** page, click **Add Processor** and select **Native Processor** > **Data Parsing (IIS Mode)**:

-   **Log Format**: Select the log format for your IIS server.
    
    -   **IIS**: The log file format for Microsoft Internet Information Services.
        
    -   **NCSA**: Common Log Format.
        
    -   **W3C** refers to the W3C Extended Log File Format.
        
-   **IIS Configuration Fields**: When you select IIS or NCSA, SLS uses the default IIS configuration fields. When you select W3C, you must set the fields to the value of the `logExtFileFlags` parameter in your IIS configuration file. For example:
    
    ```
    logExtFileFlags="Date, Time, ClientIP, UserName, SiteName, ComputerName, ServerIP, Method, UriStem, UriQuery, HttpStatus, Win32Status, BytesSent, BytesRecv, TimeTaken, ServerPort, UserAgent, Cookie, Referer, ProtocolVersion, Host, HttpSubStatus"
    ```
    
-   For other parameters, see the description of common configuration parameters in [Use case 2: Structured logs](#7874b2de35pf5).
    

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

**Procedure:** In the **Processor Configurations** section of the **Logtail Configuration** page, click **Add Processor** and select **Native Processor** > **Data Masking**:

-   **Original Field**: The field that contains the log content before parsing.
    
-   **Data Masking Method**:
    
    -   **const**: Replaces sensitive content with a constant string.
        
    -   **md5**: Replaces sensitive content with its MD5 hash.
        
-   **Replacement String**: If **Data Masking Method** is set to **const**, enter a string to replace the sensitive content.
    
-   **Content Expression that Precedes Replaced Content**: The expression used to find sensitive content, which is configured using [RE2 syntax](https://github.com/google/re2/blob/master/doc/syntax.txt).
    
-   **Content Expression to Match Replaced Content**: The regular expression used to match sensitive content. The expression must be written in [RE2 syntax](https://github.com/google/re2/blob/master/doc/syntax.txt).
    

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

**Procedure:** In the **Processor Configurations** section of the **Logtail Configuration** page, click **Add Processor** and select **Native Processor** > **Time Parsing**:

-   **Original Field**: The field that contains the log content before parsing.
    
-   **Time Format**: Set the time format that corresponds to the timestamps in the log.
    
-   **Time Zone**: Select the time zone for the log time field. By default, this is the time zone of the environment where the LoongCollector (Logtail) process is running.
    

## **Appendix: Permission policy reference**

Alibaba Cloud account logon: By default, an Alibaba Cloud account has full permissions and can perform all operations.

RAM user logon: The Alibaba Cloud account must [grant](/help/en/sls/create-a-ram-user-and-authorize-the-ram-user-to-access-log-service#undefined) the required access policies to the RAM user.

## Custom permission policies (fine-grained control)

If system policies do not meet the principle of least privilege, [create custom policies](/help/en/ram/create-a-custom-policy) for fine-grained authorization. The following is an example of a permission policy that includes these permissions:

-   **View projects:** View the project list and the details of a specified project.
    
-   **Manage logstores:** Create, modify, or delete logstores under a project.
    
-   **Manage collection configuration:** Create, delete, and modify collection configurations.
    
-   **View logs:** Query and analyze data in a specified logstore under a specified project.
    

> Replace `${regionName}`, `${uid}`, `${projectName}`, and `${logstoreName}` with the actual region name, Alibaba Cloud account ID, target project, and logstore.

**Example policy**

```
{
  "Version": "1",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": [
        "log:ListProject",
        "log:GetAcceleration",
        "log:ListDomains",
        "log:GetLogging",
        "log:ListTagResources"
      ],
      "Resource": "acs:log:${regionName}:${uid}:project/*"
    },
    {
      "Effect": "Allow",
      "Action": "log:GetProject",
      "Resource": "acs:log:${regionName}:${uid}:project/${projectName}"
    },
    {
      "Effect": "Allow",
      "Action": [
        "log:ListLogStores",
        "log:*LogStore",
        "log:*Index",
        "log:ListShards",
        "log:GetCursorOrData",
        "log:GetLogStoreHistogram",
        "log:GetLogStoreContextLogs",
        "log:PostLogStoreLogs"
      ],
      "Resource": "acs:log:${regionName}:${uid}:project/${projectName}/*"
    },
    {
      "Effect": "Allow",
      "Action": "log:*",
      "Resource": [
        "acs:log:${regionName}:${uid}:project/${projectName}/logtailconfig/*",
        "acs:log:${regionName}:${uid}:project/${projectName}/machinegroup/*"
      ]
    },
    {
      "Effect": "Allow",
      "Action": "log:ListSavedSearch",
      "Resource": "acs:log:${regionName}:${uid}:project/${projectName}/savedsearch/*"
    },
    {
      "Effect": "Allow",
      "Action": "log:ListDashboard",
      "Resource": "acs:log:${regionName}:${uid}:project/${projectName}/dashboard/*"
    },
    {
      "Effect": "Allow",
      "Action": "log:GetLogStoreLogs",
      "Resource": "acs:log:${regionName}:${uid}:project/${projectName}/logstore/${logstoreName}"
    },
    {
      "Effect": "Allow",
      "Action": [
        "ecs:DescribeTagKeys",
        "ecs:DescribeTags",
        "ecs:DescribeInstances",
        "ecs:DescribeInvocationResults",
        "ecs:RunCommand",
        "ecs:DescribeInvocations",
        "ecs:InvokeCommand"
      ],
      "Resource": "*"
    },
    {
      "Effect": "Allow",
      "Action": [
        "oos:ListTemplates",
        "oos:StartExecution",
        "oos:ListExecutions",
        "oos:GetExecutionTemplate",
        "oos:ListExecutionLogs",
        "oos:ListTaskExecutions"
      ],
      "Resource": "*"
    }
  ]
}
```

**Permission**

**Action**

**Resource**

**Read-only Project**

-   GetAcceleration
    
-   GetLogging
    
-   ListProject
    
-   ListDomains
    
-   ListTagResources
    

`acs:log:${regionName}:${uid}:project/*`

**Get a specified project**

`GetProject`

`acs:log:${regionName}:${uid}:project/${projectName}`

**Manage logstores**

-   ListLogStores
    
-   \*LogStore
    
-   \*Index
    
-   ListShards
    
-   GetCursorOrData
    
-   GetLogStoreHistogram
    
-   GetLogStoreContextLogs
    
-   PostLogStoreLogs
    

`acs:log:${regionName}:${uid}:project/${projectName}/*`

**Manage LoongCollector (Logtail) data import**

`*`

-   `acs:log:${regionName}:${uid}:project/${projectName}/logtailconfig/*`
    
-   `acs:log:${regionName}:${uid}:project/${projectName}/machinegroup/*`
    

**Query saved searches**

`ListSavedSearch`

`acs:log:${regionName}:${uid}:project/${projectName}/savedsearch/*`

**Query dashboards**

`ListDashboard`

`acs:log:${regionName}:${uid}:project/${projectName}/dashboard/*`

**Query logs in a specified logstore**

`GetLogStoreLogs`

`acs:log:${regionName}:${uid}:project/${projectName}/logstore/${logstoreName}`

**Permissions to operate ECS**

-   DescribeTagKeys
    
-   DescribeTags
    
-   DescribeInstances
    
-   DescribeInvocationResults
    
-   RunCommand
    
-   DescribeInvocations
    
-   InvokeCommand
    

`*`

**Permissions to operate OOS** (_Optional_)

Required only when LoongCollector (Logtail) is automatically installed via OOS in the same account and region as the SLS and ECS instance.

-   ListTemplates
    
-   StartExecution
    
-   ListExecutions
    
-   GetExecutionTemplate
    
-   ListExecutionLogs
    
-   ListTaskExecutions
    

`*`

## System permission policies

If you use system-defined policies, we recommend that you add the following permissions:

-   `AliyunLogFullAccess`: Permission to manage SLS.
    
-   `AliyunECSFullAccess`: Permission to manage ECS.
    
-   (Optional) `AliyunOOSFullAccess`: Required when LoongCollector (Logtail) is installed with one click using OOS.
    

## **More information**

### **Global Configurations**

**Parameter**

**Description**

Configuration Name

The name of the LoongCollector (Logtail) configuration. It must be unique within its project. The name cannot be changed after creation.

Log Topic Type

Select the method for generating the topic. The options are Machine Group Topic, File Path Extraction, and Custom.

Advanced Parameters

Other optional advanced feature parameters related to the global configuration. For more information, see [CreateLogtailPipelineConfig](https://next.api.aliyun.com/document/Sls/2020-12-30/CreateLogtailPipelineConfig?spm=api-workbench.api_explorer.0.0.4c5f31f27Lmdh1#request_params_desc).

### **Input Configurations**

**Parameter**

**Description**

File Path

Set the log directory and filename based on the log's location on the host (such as an ECS instance):

Both directory and filenames support full and wildcard modes. For filename rules, see [Wildcard matching](https://man7.org/linux/man-pages/man7/glob.7.html). The only supported wildcard characters for log paths are the asterisk (\*) and the question mark (?).

The log file search mode is multilayer directory matching, which means all files that meet the criteria in the specified directory (including all levels of subdirectories) will be found. For example:

-   `/apsara/nuwa/**/*.log` indicates files with the .log extension in the `/apsara/nuwa` directory and its subdirectories.
    
-   `/var/logs/app_*/**/*.log` indicates files with the `.log` extension in all directories that match the `app_*` format under the `/var/logs` directory and their subdirectories.
    
-   `/var/log/nginx/**/access*` indicates files that start with `access` in the `/var/log/nginx` directory and its subdirectories.
    

Maximum Directory Monitoring Depth

Set the maximum depth to which log directories are monitored. This is the maximum directory depth that the wildcard character `**` in the **File Path** can match. A value of 0 means only the current directory is monitored.

File Encoding

Select the encoding format of the log file.

First Collection Size

When the configuration first takes effect, this sets the starting collection position relative to the end of the matched file. The initial collection size is set to 1,024 KB.

-   During initial collection, if the file is smaller than 1,024 KB, collection starts from the beginning of the file content.
    
-   During initial collection, if the file is larger than 1,024 KB, collection starts from 1,024 KB before the end of the file.
    

The value can range from 0 to 10,485,760 KB.

Collection Blacklist

After you enable the **Collection Blacklist** switch, configure a blacklist to ignore specified directories or files during collection. Full and wildcard matching for directories and filenames are supported. The only supported wildcard characters are the asterisk (\*) and the question mark (?).

**Important**

-   If you use a wildcard character when configuring the **File Path** but need to filter out some of those paths, you must enter the corresponding full path in the **Collection Blacklist** to ensure the blacklist configuration takes effect.
    
    For example, if you set the **File Path** to `/home/admin/app*/log/*.log` but want to filter all subdirectories under the `/home/admin/app1*` directory, you must select **Directory Blacklist** and configure the directory as `/home/admin/app1*/**`. If you configure it as `/home/admin/app1*`, the blacklist will not take effect.
    
-   Matching against a blacklist has a computational overhead. Keep the number of blacklist entries under 10.
    
-   The directory path cannot end with a forward slash (/). For example, if you set the path to `/home/admin/dir1/`, the directory blacklist will not take effect.
    

Set a file path blacklist, file blacklist, or directory blacklist as needed. The details are as follows:

## **File Path Blacklist**

-   Select **File Path Blacklist** and configure the path as `/home/admin/private*.log`. This ignores all files in the `/home/admin/` directory that start with private and end with .log.
    
-   Select **File Path Blacklist** and configure the path as `/home/admin/private*/*_inner.log`. This ignores files that end with \_inner.log within directories that start with private under the `/home/admin/` directory. For example, the `/home/admin/private/app_inner.log` file is ignored, while the `/home/admin/private/app.log` file is collected.
    

## File Blacklist

Select **File Blacklist** and configure the filename as `app_inner.log`. This ignores all files named `app_inner.log` during collection.

## Directory Blacklist

-   Select **Directory Blacklist** and configure the directory as `/home/admin/dir1`. This ignores all files in the `/home/admin/dir1` directory during collection.
    
-   Select **Directory Blacklist** and configure the directory as `/home/admin/dir*`. This ignores files in all subdirectories that start with dir under the `/home/admin/` directory.
    
-   Select **Directory Blacklist** and configure the directory as `/home/admin/*/dir`. This ignores all files in subdirectories named dir at the second level of the `/home/admin/` directory. For example, files in the `/home/admin/a/dir` directory are ignored, but files in the `/home/admin/a/b/dir` directory are collected.
    

Allow File to Be Collected for Multiple Times

By default, a log file can only match one LoongCollector (Logtail) configuration. If the logs in a file need to be collected multiple times, you must enable the **Allow File to Be Collected for Multiple Times** switch.

Advanced Parameters

Other optional advanced feature parameters related to the file input plugin. For more information, see [CreateLogtailPipelineConfig](https://next.api.aliyun.com/document/Sls/2020-12-30/CreateLogtailPipelineConfig?spm=api-workbench.api_explorer.0.0.4c5f31f27Lmdh1#request_params_desc).

### **Processor Configurations**

**Parameter**

**Description**

Log Sample

A sample of the log to be collected. Be sure to use a log from your actual use case. The log sample helps you configure log processing parameters and simplifies the configuration. Multiple samples can be added, with a total length not exceeding 1,500 characters.

```
[2023-10-01T10:30:01,000] [INFO] java.lang.Exception: exception happened
    at TestPrintStackTrace.f(TestPrintStackTrace.java:3)
    at TestPrintStackTrace.g(TestPrintStackTrace.java:7)
    at TestPrintStackTrace.main(TestPrintStackTrace.java:16)
```

Multi-line Mode

-   Type of multiline log: A multiline log is one where each entry is distributed across consecutive lines. You need to distinguish each log from the content.
    
    -   **Custom**: Distinguish each log using a **Regex to Match First Line**.
        
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
    
    -   **Discard**: Discard this log segment directly.
        
    -   **Retain Single Line**: Retain each line of log text as a separate log, resulting in four logs in total.
        

Processing Method

**Processors**, which includes **Native Processor** and **Extended Processor**. For more information about processing plugins, see [Usage notes for native and extended processors](/help/en/sls/overview-22).

**Important**

The limits on using processing plugins are subject to the prompts on the console page.

-   Logtail 2.0:
    
    -   Native processor can be combined in any way.
        
    -   Native and extended processors can be used at the same time, but extended processors can only appear after all native processors.
        
-   Logtail versions earlier than 2.0:
    
    -   Adding both native and extended processors at the same time is not supported.
        
    -   Native processors can only be used to collect text logs. When using native processors, the following requirements must be met:
        
        -   The first processing plugin must be a regular expression parsing plugin, separator mode parsing plugin, JSON parsing plugin, Data Parsing (NGINX Mode) plugin, Apache pattern parsing plugin, or IIS pattern parsing plugin.
            
        -   From the second to the last processing plugin, you can include at most one time parsing plugin, one Data Filtering plugin, and multiple masking plugins.
            
    -   For the **Retain Original Field if Parsing Fails** and **Retain Original Field if Parsing Succeeds** parameters, only the following combinations are valid. Other combinations are invalid.
        
        -   Upload only successfully parsed logs:
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1304240271/p801939.png)
            
        -   Upload parsed logs on success, and upload raw logs on failure:
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1304240271/p801942.png)
            
        -   On successful parsing, upload the parsed log and also append the raw log field. On failure, upload the raw log.
            
            For example, if the raw log `"content": "{"request_method":"GET", "request_time":"200"}"` is parsed successfully, appending the raw field adds another field to the parsed log. The field name is **New Name of Original Field** (if not filled, it defaults to the source field name), and the field value is the raw log `{"request_method":"GET", "request_time":"200"}`.
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1304240271/p801943.png)

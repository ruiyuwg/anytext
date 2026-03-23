Traditional incremental log collection methods are unsuitable for collecting existing static files for tasks such as historical analysis, data migration, or batch processing. The one-time log collection feature addresses this limitation. You can use the console or an API to send collection configurations to machine groups in batches and collect the content of specified static files in a single operation. The task automatically stops after the collection is complete.

## **Scope**

-   LoongCollector 3.3 or later.
    
-   This feature supports log collection from hosts on Linux and Windows platforms. It does not support container scenarios.
    

## **Collection configuration workflow**

1.  **[Preparations](#c851a560a1r6z):** Create a Project and a Logstore. A Project is a resource management unit for isolating logs from different services, and a Logstore is a unit for storing logs.
    
2.  [**Configure a machine group (Install LoongCollector)**](#999a6653ca1s7)**:** Install LoongCollector on your servers and add the servers to a machine group. You can use machine groups to centrally manage collection nodes, distribute configurations, and monitor server status.
    
3.  [**Create and configure a one-time file collection rule**](#c9192441dbnxy)**:**
    
    1.  **[Global and input configurations](#5850c01ab470m)**: Define the name of the collection configuration and the source and scope of log collection.
        
    2.  **[Log processing and structuring](#5ab5b5cbfeo8d):** Configure processing rules based on the log format.
        
        -   Multi-line logs: This is for logs that span multiple lines, such as Java exception stacks or Python tracebacks. You can use a start-of-line regular expression to identify each log and merge consecutive lines of the same log into a single, complete log entry.
            
        -   Structured parsing: Use parsing plugins, such as regular expression, separator, or NGINX mode, to parse raw strings into structured key-value pairs. Each field can then be independently queried and analyzed.
            
    3.  **[Log filtering](#fed5e5727enyy):** Configure a collection blacklist and content filtering rules to retain only valid log content and reduce the transmission and storage of redundant data.
        
    4.  **[Log categorization](#14e381a175swc):** Use topics to flexibly distinguish logs from different services, servers, or source paths.
        
4.  **[Configure query and analysis](#3f32235bf71qt):** The system enables a full-text index by default to support keyword searches. You can enable a field index to allow term queries and analysis of structured fields, which improves search efficiency.
    
5.  **[Verify collection results](#f08560a75f6an):** After you complete the configuration, verify that the logs are collected successfully. If you encounter issues, such as no data being collected, heartbeat failures, or parsing errors, see the [FAQ](#81b57c81fe0ls) section.
    

## **Preparations**

Before you collect logs, you must plan and create a Project and a Logstore to manage and store the logs. If you already have available resources, you can skip this step and proceed to [Configure a machine group (Install LoongCollector)](#999a6653ca1s7).

#### **Create a Project**

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com/).
    
2.  Click **Create Project** and configure the following parameters:
    
    -   **Region**: Select the region based on the log source. This cannot be changed after creation.
        
    -   **Project Name**: Must be globally unique within Alibaba Cloud. This cannot be changed after creation.
        
    -   Keep the default settings for other configurations and click **Create**. For more information about other parameters, see [Create a Project](/help/en/sls/manage-a-project/#89b98c40c765r).
        

#### **Create a Logstore**

1.  Click the Project name to open the target Project.
    
2.  In the navigation pane on the left, choose ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3359329571/p1013781.png)**Log Storage** and click **+**.
    
3.  On the Create Logstore page, complete the following core configurations:
    
    -   **Logstore Name**: Set a name that is unique within the Project. This name cannot be changed after creation.
        
    -   **Logstore Type**: Select Standard or Query type based on the specification comparison.
        
    -   **Billing Mode**:
        
        -   **Pay-By-Feature**: Billing is based on individual resources such as storage, index, and read/write operations. This is suitable for small-scale scenarios or when feature usage is uncertain.
            
        -   **Pay-by-ingested-data**: Billing is based only on the amount of raw data ingested. It provides 30 days of free storage and free features such as data transformation and delivery. This is suitable for business scenarios with a storage period close to 30 days or complex data processing pipelines.
            
    -   **Data Retention Period**: Set the number of days to retain logs (1 to 3,650 days, where 3,650 means permanent retention). The default is 30 days.
        
    -   Keep the default settings for other configurations and click **OK**. For more information about other configurations, see [Manage a Logstore](/help/en/sls/manage-a-logstore).
        

## **Step 1: Configure a machine group (Install LoongCollector)**

After you complete the [preparations](#c851a560a1r6z), install LoongCollector on your servers and add them to a machine group.

**Note**

The following installation steps apply only when the log source is an Alibaba Cloud ECS instance, and the instance and the Simple Log Service Project are in the same Alibaba Cloud account and region.

If your ECS instance and Project are in different accounts or regions, or if the log source is a self-managed server, see [Install and configure LoongCollector](/help/en/sls/loongcollector-installation-linux#ad1d9209f9t9z).

**Procedure:**

1.  On the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7574404571/p992524.png)Logstores page, click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8096561571/p970744.png) before the name of the target Logstore to expand it.
    
2.  Click **Data Ingestion** > **Logtail Configuration**. On the **One-time Logtail Configurations** tab, click **Add Logtail Configuration**.
    
3.  In the **Quick Data Import** dialog box, click **Import Data** on the **One-time File Collection - Host** card.
    
4.  On the **Machine Group Configuration** page, configure the following parameters:
    
    -   **Scenario**: **Host**
        
    -   **Installation Environment**: **ECS**
        
    -   **Configure Machine Group:** Based on the LoongCollector installation status and machine group configuration of the target server, perform one of the following operations:
        
        -   If LoongCollector is installed and has been added to a machine group, select it from the **Source Machine Group** list and add it to the **Applied Machine Groups** list. You do not need to create it again.
            
        -   If LoongCollector is not installed, click **Create Machine Group**:
            
            > The following steps guide you through automatically installing LoongCollector and creating a machine group.
            
            1.  The system automatically lists ECS instances in the same region as the Project. Select one or more instances from which you want to collect logs.
                
            2.  Click **Install and Create as Machine Group**. The system automatically installs LoongCollector on the selected ECS instances.
                
            3.  Configure a **Name** for the machine group and click **OK**.
                
            
            **Note**
            
            If the installation fails or remains in a waiting state, check whether the ECS region is the same as the Project region.
            
        -   To add a server with LoongCollector already installed to an existing machine group, see [How do I add a server to an existing machine group?](#fa759b7203ns5)
            
5.  **Check Heartbeat Status:** Click **Next**. The **Machine Group Heartbeat Status** section appears. Check the **Heartbeat** status. If the status is OK, the machine group connection is normal. Click **Next** to go to the Logtail configuration page.
    
    > If the status is FAIL, it may take some time for the initial heartbeat to be established. Wait for about two minutes and then refresh the heartbeat status. If the status is still FAIL after you refresh the page, see [The heartbeat of a machine group is FAIL](#f9ec8a2efe7xt) for troubleshooting information.
    

## **Step 2: Create and configure a one-time file collection rule**

After you [install LoongCollector and configure a machine group](#999a6653ca1s7), go to the **Logtail Configuration** page to define log collection and processing rules.

### **1\. Global and input configurations**

Define the name of the collection configuration and the source and scope of log collection.

**Global Configurations**:

-   **Configuration Name**: A custom name for the collection configuration. It must be unique within its Project. It cannot be modified after creation. Naming conventions:
    
    -   Can contain only lowercase letters, digits, hyphens (-), and underscores (\_).
        
    -   Must start and end with a lowercase letter or a digit.
        
-   **Execution Timeout**: The default is 600 s (10 minutes). The range is from 600 to 604,800 seconds (10 minutes to 7 days). If the collection is not complete within this time, the task is automatically stopped and does not collect the remaining parts.
    
    **Important**
    
    **Note on configuration delivery:** The validity period of the configuration is reset when you update it. To avoid duplicate delivery or unexpected data reporting, confirm that the machine group scope is accurate and that the last task execution time has not exceeded the **Execution Timeout**.
    
-   **Force Rerun on Update**: Disabled by default.
    
    -   Shutdown:
        
        -   When you update collection configuration parameters other than **Execution Timeout** or **Input Configurations**, the system continues the current collection progress. It does not restart the collection task, which helps maintain collection continuity.
            
        -   If you modify **Execution Timeout** or **Input Configurations**, the system restarts the collection task.
            
    -   Enabled: Forces the collection task to restart when you update the collection configuration. This ensures that all data processing and reporting align with the latest changes. Note: Data collected before the update is not deleted. To clear it, see [Simple Log Service soft delete](/help/en/sls/soft-delete).
        

**Input Configurations**:

-   **Type**: **One-time File Collection (available for LoongCollector 3.3 and later)**.
    
-   **File Path**: The path for log collection.
    
    **Note**
    
    The list of files for one-time collection and the size of each file are determined at the time that LoongCollector pulls the configuration. New files or content appended to existing files are not collected.
    
    -   Linux: Starts with "/", such as `/data/mylogs/**/*.log`, which indicates all files with the .log extension in the `/data/mylogs` directory and its subdirectories.
        
    -   Windows: Starts with a drive letter, such as `C:\Program Files\Intel\**\*.Log`.
        

-   **Maximum Directory Monitoring Depth**: The maximum directory depth that the wildcard character `**` in the **File Path** can match. The default is 0, which means only the current directory is monitored.
    

* * *

### **2\. Log processing and structuring**

By configuring log processing rules, you can transform raw, unstructured logs into structured, searchable data, which improves the efficiency of log query and analysis. Before you configure the rules, **add a log sample**:

In the **Processing Configurations** area of the **Logtail Configuration** page, click **Add Log Sample** and enter the content of the logs to be collected. The system identifies the log format based on the sample and helps you generate regular expressions and parsing rules, which simplifies the configuration.

#### **Scenario 1: Process multi-line logs (such as Java stack logs)**

Because logs such as Java exception stacks and JSON objects often span multiple lines, they are split into multiple incomplete records in the default collection mode. This causes a loss of context. To prevent this, you can enable multi-line mode and configure a start-of-line regular expression to merge consecutive lines of the same log into a single, complete log entry.

**Example:**

**Raw log without any processing**

**In default collection mode, each line is treated as an independent log, breaking up the stack trace and losing context**

**With multi-line mode enabled, a start-of-line regular expression identifies the complete log, preserving its full semantic structure.**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9459503671/p1026267.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9459503671/p1026270.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9459503671/p1026266.png)

**Procedure:** In the **Processing Configurations** area of the **Logtail Configuration** page, enable **Multi-line Mode**:

-   **Type**: Select **Custom** or **Multi-line JSON**.
    
    -   **Custom**: If the raw log format is not fixed, you need to configure a **Start-of-line Regular Expression** to identify the starting line of each log.
        
        -   **Start-of-line Regular Expression**: Can be automatically generated or manually entered. The regular expression must match a complete line of data. For example, the matching regular expression in the preceding example is `\[\d+-\d+-\w+:\d+:\d+,\d+]\s\[\w+]\s.*`.
            
            -   Auto Generate: Click **Auto Generate Regular Expression**. Then, in the **Log Sample** text box, select the log content to be extracted and click **Generate Regex**.
                
            -   Manual Input: Click **Manually Enter Regular Expression**. After entering the expression, click **Validate**.
                
    -   **Multi-line JSON**: When all raw logs are in standard JSON format, Simple Log Service automatically handles line breaks within a single JSON log.
        

-   **Handling Chunking Failures**:
    
    -   **Discard**: If a text segment does not match the start-of-line rule, it is discarded.
        
    -   **Keep as single lines**: Unmatched text is split and retained in the original single-line mode.
        

#### **Scenario 2: Structured logs**

When raw logs are unstructured or semi-structured text, such as NGINX access logs or application output logs, direct query and analysis are often inefficient. Simple Log Service provides a variety of data parsing plugins that can automatically convert raw logs of different formats into structured data. This provides a solid data foundation for subsequent analysis, monitoring, and alerting.

**Example:**

**Raw logs**

**Parsed logs**

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

**Procedure:** In the **Processing Configurations** area of the **Logtail Configuration** page:

1.  **Add Parsing Plugin:** Click **Add Processing Plugin** and configure a plugin such as [regex parsing, delimiter parsing, or JSON parsing](#462cdc280far7) based on the actual format. This example uses NGINX log collection. Select **Native Processing Plugins** > ****NGINX Mode Parsing****.
    
2.  **NGINX Log Configuration**: **Completely copy** the `log_format` definition from the Nginx server configuration file (nginx.conf) and paste it into this text box.
    
    Example:
    
    ```
    log_format main  '$remote_addr - $remote_user [$time_local] "$request" ''$request_time $request_length ''$status $body_bytes_sent "$http_referer" ''"$http_user_agent"';
    ```
    
    **Important**
    
    The format definition here must be **exactly the same** as the format that generates the logs on the server. Otherwise, log parsing will fail.
    
3.  **General configuration parameters:** The following parameters appear in multiple data parsing plugins, and their functions and usage are consistent.
    
    -   **Source Field:** Specifies the source field name to be parsed. The default is `content`, which is the entire collected log content.
        
    -   **Keep Source Field on Failure:** Recommended. If a log cannot be successfully parsed by the plugin (for example, because of a format mismatch), this option ensures that the original log content is not lost but is fully retained in the specified source field.
        
    -   **Keep Source Field on Success:** If selected, the original log content will be retained even if the log is parsed successfully.
        

* * *

### **3\. Log filtering**

During log collection, indiscriminately collecting large amounts of low-value or irrelevant logs, such as DEBUG/INFO level logs, not only wastes storage resources and increases costs but also affects query efficiency and poses data breach risks. To address this, you can implement fine-grained filtering policies for efficient and secure log collection.

## **Reduce costs with content filtering**

Filter based on log content fields (for example, collect only logs with a level of WARNING or ERROR).

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

**Procedure:** In the **Processing Configurations** area of the **Logtail Configuration** page:

Click **Add Processing Plugin** and select **Native Processing Plugins** > ****Filter****:

-   **Field Name**: The log field to filter.
    
-   **Field Value**: The regular expression used for filtering. Only full matching is supported, not partial keyword matching.
    

## **Control collection scope with a blacklist**

Use a blacklist mechanism to exclude specified directories or files to prevent irrelevant or sensitive logs from being uploaded.

**Procedure:** In the **Input Configurations** > **Other Input Configurations** area of the **Logtail Configuration** page, enable **Collection Blacklist** and click **Add**.

> Supports full matching and wildcard matching for directories and filenames. Only the asterisk (\*) and question mark (?) are supported as wildcard characters.

-   **File Path Blacklist**: File paths to ignore. Example:
    
    -   `/home/admin/private*.log`: Ignores all files in the `/home/admin/` directory that start with "private" and end with ".log".
        
    -   `/home/admin/private*/*_inner.log`: Ignores files ending with "\_inner.log" in directories that start with "private" under the `/home/admin/` directory.
        
-   **File Blacklist**: Configure filenames to ignore during collection. Example:
    
    -   `app_inner.log`: Ignores all files named `app_inner.log` during collection.
        
-   **Directory Blacklist**: The directory path cannot end with a forward slash (/). Example:
    
    -   `/home/admin/dir1/`: The directory blacklist will not take effect.
        
    -   `/home/admin/dir*`: Ignores files in all subdirectories under `/home/admin/` that start with "dir".
        
    -   `/home/admin/*/dir`: Ignores all files in subdirectories named "dir" at the second level under the `/home/admin/` directory. For example, files in the `/home/admin/a/dir` directory are ignored, while files in the `/home/admin/a/b/dir` directory are collected.
        

### **4\. Log categorization**

When logs from multiple applications or instances have the same format but different paths (such as `/apps/app-A/run.log` and `/apps/app-B/run.log`), it is difficult to distinguish their sources during collection. By configuring topics, you can logically differentiate logs from different applications, services, or paths, which enables efficient categorization and precise queries under unified storage.

**Procedure:** In **Global Configurations** > **Other Global Configurations** > **Topic Generation Mode**, select a topic generation method. The following three types are supported:

-   **Machine Group Topic:** When a collection configuration is applied to multiple machine groups, LoongCollector automatically uses the name of the machine group to which the server belongs as the value for the `__topic__` field. This is suitable for scenarios where logs are divided by host.
    
-   **Custom**: The format is `customized://<custom_topic_name>`, for example, `customized://app-login`. This is suitable for static topic scenarios with fixed business identifiers.
    
-   **Extract from File Path:** Extracts key information from the full path of the log file to dynamically mark the log source. This is suitable for situations where multiple users or applications share the same log filename but have different paths. When multiple users or services write logs to different top-level directories, but the sub-paths and filenames are the same, the source cannot be distinguished by filename alone. For example:
    
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
    
    In this case, you can configure **Extract from File Path** and use a regular expression to extract key information from the full path. The matched result is then used as the topic and uploaded to the Logstore.
    
    **File path extraction rule: Based on regular expression capturing groups**
    
    When configuring a regular expression, the system automatically determines the output field format based on the number and naming of the capturing groups. The rules are as follows:
    
    > In the regular expression for the file path, you need to escape the forward slash (/).
    
    **Capturing Group Type**
    
    **Scenario**
    
    **Generated Field**
    
    **Regex Example**
    
    **Sample Matched Path**
    
    **Sample Generated Field**
    
    Single capturing group (only one `(.*?)`)
    
    Only one dimension is needed to distinguish the source (such as username or environment)
    
    Generates the `__topic__` field
    
    `\/logs\/(.*?)\/app\.log`
    
    `/logs/userA/app.log`
    
    `__topic__:userA`
    
    Multiple non-named capturing groups (multiple `(.*?)`)
    
    Multiple dimensions are needed to distinguish the source, but no semantic labels are required
    
    Generates a tag field `__tag__:__topic_{i}__`, where `{i}` is the ordinal number of the capturing group
    
    `\/logs\/(.*?)\/(.*?)\/app\.log`
    
    `/logs/userA/svcA/app.log`
    
    `__tag__:__topic_1__userA`;
    
    `__tag__:__topic_2__svcA`
    
    Multiple named capturing groups (using `(?P<name>.*?)`)
    
    Multiple dimensions are needed to distinguish the source, and you want the field meanings to be clear for easy query and analysis
    
    Generates a tag field `__tag__:{name}`
    
    `\/logs\/(?P<user>.*?)\/(?P<service>.*?)\/app\.log`
    
    `/logs/userA/svcA/app.log`
    
    `__tag__:user:userA`;
    
    `__tag__:service:svcA`
    

## **Step 3: Configure query and analysis**

After you finish configuring log processing and plugins, click **Next** to go to the **Query and Analysis Configuration** page:

-   The system enables [full-text index](/help/en/sls/create-indexes#6f7eb27bcclmy) by default, which supports keyword searches on the original log content.
    
-   To perform term queries by field, wait for the **Preview Data** to load on the page, then click **Auto Generate Indexes**. Simple Log Service will generate a [field index](/help/en/sls/create-indexes) based on the first entry in the preview data.
    

After completing the configuration, click **Next** to finish setting up the entire collection process.

## **Step 4: Verify collection results**

After the configuration takes effect, go to the query and analysis page of the target Logstore and click **Search & Analysis** to view the collected log data.

## **FAQ**

### **Lifecycle of a one-time collection configuration**

After a one-time collection configuration is created, it has the following lifecycle characteristics:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1376878671/CAEQUxiBgMCinc7P3hkiIGEwMzY2NDlkYjlkMjQ5NjBhYzhlZjk2YmViYzBjODc36160446_20260108143909.115.svg)

-   **Configuration delivery validity period**: Within 5 minutes after the configuration is created, LoongCollector can pull the configuration. After 5 minutes, new LoongCollector instances cannot obtain this configuration.
    
-   **Configuration auto-deletion**: The configuration is automatically deleted 7 days after it is created.
    
-   **Task execution**: The collection is completed within the execution timeout period. After the timeout, the task is automatically stopped.
    

### **What is the difference between one-time file collection and the previous historical file collection method?**

The [old method for historical file collection](/help/en/sls/import-historical-logs) is no longer recommended. Use the new feature for historical data import. Compared to the old method of manually creating configuration files, the new one-time file collection feature offers significant improvements in configuration efficiency, reliability, and observability. The specific comparison is as follows:

**Comparison Item**

**Old method for historical file collection**

**New one-time file collection**

Configuration Method

You must create a local\_event.json file on each host. This requires you to perform operations on each machine one by one.

You can create configurations using the console or an API and deliver them in batches at the machine group level.

File Matching

Requires manual entry of file paths and filenames.

Quick configuration similar to input\_file, with support for blacklist filtering.

Progress Monitoring

Stateless reporting without local logs

Provides checkpoints with fine-grained tracking down to the current collection offset for each file.

Reliability

Low. It is a separate process with no resource control or checkpoints.

High. It provides standard pipeline-level resource management, supports throttling, does not affect other collections, and supports resumable transmission.

Flexibility

Low. You must use existing collection configurations.

High. You can orchestrate collection configurations and modify them mid-process.

### **The heartbeat of a machine group is FAIL**

1.  Check the user ID: If your server is not an ECS instance, or if the ECS instance and the Project belong to different Alibaba Cloud accounts, check whether the correct user ID exists in the specified directory. If not, run the following command to create it manually.
    
    -   Linux: Run the `cd /etc/ilogtail/users/ && touch <uid>` command to create the user ID file.
        
    -   Windows: Go to the `C:\LogtailData\users\` directory and create an empty file named `<uid>`.
        
2.  Check the machine group ID: If you used a custom ID when you created the machine group, check whether a `user_defined_id` file exists in the specified directory. If it exists, check whether the content of the file is consistent with the custom ID configured for the machine group.
    
    -   Linux:
        
        ```
        # Configure a custom ID. If the directory does not exist, create it manually.
        echo "user-defined-1" > /etc/ilogtail/user_defined_id
        ```
        
    -   Windows: In the `C:\LogtailData` directory, create a new file named `user_defined_id` and write the custom ID into it. (If the directory does not exist, create it manually.)
        
3.  If both the user ID and the machine group ID are configured correctly, see [Troubleshoot LoongCollector (Logtail) machine group issues](/help/en/sls/troubleshoot-the-errors-related-to-logtail-machine-groups) for further investigation.
    

### **How do I add a server to an existing machine group?**

When you have an existing machine group and want to add a new server, such as a newly deployed ECS instance or a self-managed server, to it to inherit its collection configuration, you can follow these steps.

**Important**

Five minutes after the configuration is created, machines newly added to the machine group will not receive the collection configuration. For the specific time, see the countdown timer at the top of the collection configuration page.

**Prerequisites:**

-   A configured machine group already exists.
    
-   LoongCollector is [installed](/help/en/sls/loongcollector-installation-linux#ad1d9209f9t9z) on the new server.
    

**Procedure:**

1.  View the target machine group ID:
    
    1.  On the target Project page, click ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8395532671/p1020796.png)**Resource** > **Machine Groups** in the navigation pane on the left.
        
    2.  On the Machine Groups page, click the name of the target machine group.
        
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
            
        3.  After the configuration is complete, click **Save** and confirm the heartbeat status. After the heartbeat status is OK, the server automatically applies the machine group's collection configuration.
            
            > If the heartbeat status is FAIL, see [The heartbeat of a machine group is FAIL](#f9ec8a2efe7xt) for further troubleshooting.
            
    -   Type 2: Machine group ID is a custom ID
        
        Depending on the operating system, write a custom ID string that is consistent with the target machine group to the specified file:
        
        > If the directory does not exist, create it manually. The file path and name are fixed by Simple Log Service and cannot be customized.
        
        -   Linux: Write the custom string to the `/etc/ilogtail/user_defined_id` file.
            
        -   Windows: Write the custom string to `C:\LogtailData\user_defined_id`.
            

## **Appendix: Native parsing plugins explained**

### **Regex parsing**

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
    
-   For other parameters, see the description of common configuration parameters in [Use case 2: Structured logs](/help/en/sls/host-text-log-collection-auto-install#7874b2de35pf5).
    

-   For other parameters, see the general configuration parameter description in [Scenario 2: Structured logs](#7874b2de35pf5).
    

### **Delimiter parsing**

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
        
-   For other parameters, see the description of common configuration parameters in [Use case 2: Structured logs](/help/en/sls/host-text-log-collection-auto-install#7874b2de35pf5).
    

-   For other parameters, see the general configuration parameter description in [Scenario 2: Structured logs](#7874b2de35pf5).
    

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
    
-   For other parameters, see the description of common configuration parameters in [Use case 2: Structured logs](/help/en/sls/host-text-log-collection-auto-install#7874b2de35pf5).
    

-   For other parameters, see the general configuration parameter description in [Scenario 2: Structured logs](#7874b2de35pf5).
    

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
    
-   For other parameters, see the description of common configuration parameters in [Use case 2: Structured logs](/help/en/sls/host-text-log-collection-auto-install#7874b2de35pf5).
    

-   For other parameters, see the general configuration parameter description in [Scenario 2: Structured logs](#7874b2de35pf5).
    

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
    
-   For other parameters, see the description of common configuration parameters in [Use case 2: Structured logs](/help/en/sls/host-text-log-collection-auto-install#7874b2de35pf5).
    

-   For other parameters, see the general configuration parameter description in [Scenario 2: Structured logs](#7874b2de35pf5).
    

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
    
-   For other parameters, see the description of common configuration parameters in [Use case 2: Structured logs](/help/en/sls/host-text-log-collection-auto-install#7874b2de35pf5).
    

-   For other parameters, see the general configuration parameter description in [Scenario 2: Structured logs](#7874b2de35pf5).
    

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

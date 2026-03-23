The MaxCompute local client (odpscmd) provides a command-line interface for efficient operations on your local machine. Use it to execute commands and manage MaxCompute projects. This topic describes how to download, install, configure, run, and use the client.

## Usage notes

-   Your device must have Java 8 or later installed.
    
-   Version compatibility
    
    -   MaxCompute client v0.28.0 and later support JDK 1.9. Earlier versions support only JDK 1.8. After you start the MaxCompute client, check the version number in the command-line interface. [Start the MaxCompute client](#section-5ad-gj6-hku).
        
    -   Client output formats are not forward-compatible. Command syntax and behavior may differ across versions. Do not parse client output for automation.
        
    -   For more client versions, see [aliyun-odps-console](https://github.com/aliyun/aliyun-odps-console/releases).
        
-   Encoding format
    
    The client uses UTF-8 encoding by default. If your local environment uses a different encoding, Chinese characters in query results or uploaded files may appear as garbled text. This can occur when querying MaxCompute tables or uploading local data files using Tunnel commands.
    

## **Pricing**

Connecting to a MaxCompute project using the client is **free**. However, **operations you run** through the client may incur MaxCompute **charges**. For example, submitting an SQL query or a write command consumes computing resources. Writing data also uses storage space. You will be charged for both computing and storage. For details, see [Billing items and methods](/help/en/maxcompute/product-overview/overview-1/).

## Install and configure the MaxCompute client

Starting with v0.27.0, the client supports new MaxCompute V2.0 data types. We recommend using these new types. For a list of supported data types, see [MaxCompute V2.0 data types](/help/en/maxcompute/user-guide/maxcompute-v2-0-data-type-edition#concept-2454988).

Follow these steps:

1.  Download the [MaxCompute client package (GitHub)](https://github.com/aliyun/aliyun-odps-console/releases).
    
    **Note**
    
    -   Go to the client release page using the link above. Download the latest MaxCompute client package (odpscmd\_public.zip).
        
    -   If the link above fails, try downloading the [MaxCompute client package (OSS)](https://maxcompute-repo.oss-cn-hangzhou.aliyuncs.com/odpscmd/latest/odpscmd_public.zip). For GitHub access issues, search for solutions in a search engine.
        
    
2.  Extract the downloaded package. You get the bin, conf, lib, and plugins folders.
    
3.  Go to the conf folder and configure the odps\_config.ini file.
    
    The odps\_config.ini file uses the hash symbol (#) for comments. The following table describes the parameters.
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    **Example**
    
    project\_name
    
    Yes
    
    The name of the MaxCompute project you want to access.
    
    If you created a workspace in standard mode, make sure to distinguish between production and development (\_dev) project names when configuring project\_name. See [Differences between workspace modes](/help/en/dataworks/user-guide/differences-between-workspaces-in-basic-mode-and-workspaces-in-standard-mode#concept-z2j-nwp-r2b).
    
    1.  Log on to the [MaxCompute console](https://maxcompute.console.alibabacloud.com/), and select a region in the upper-left corner.
        
    2.  In the navigation pane on the left, choose **Manage Configurations** > **Projects**.
        
    3.  On the **Projects** page, find your MaxCompute project name.
        
    
    doc\_test\_dev
    
    access\_id
    
    Yes
    
    Your Alibaba Cloud account or RAM user AccessKey ID. Go to the [AccessKey management](https://ram.console.alibabacloud.com/manage/ak) page to get your AccessKey ID.
    
    None
    
    access\_key
    
    Yes
    
    The AccessKey secret that matches your AccessKey ID.
    
    None
    
    end\_point
    
    Yes
    
    The endpoint for the MaxCompute service.
    
    Set this based on the region and network type you selected when creating your MaxCompute project. For endpoints by region and network, see [Endpoint](/help/en/maxcompute/user-guide/endpoints#concept-m2j-h1y-5db).
    
    **Important**
    
    -   This endpoint is for the MaxCompute service. Use the Tunnel endpoint for the MaxCompute Tunnel service. Enter the MaxCompute endpoint here.
        
    -   An incorrect endpoint causes connection errors. Double-check your entry.
        
    
    http://service.cn-hangzhou.maxcompute.aliyun.com/api
    
    log\_view\_host
    
    No
    
    The LogView URL. We recommend setting this parameter. Without it, you cannot quickly locate issues when jobs fail.
    
    You can use this URL to view detailed job runtime information and troubleshoot errors. The value is fixed: http://logview.odps.aliyun.com.
    
    http://logview.odps.aliyun.com
    
    https\_check
    
    No
    
    Whether to enable HTTPS to encrypt requests to your MaxCompute project. Valid values:
    
    -   True: Use HTTPS.
        
    -   False: Use HTTP.
        
    
    Default: False.
    
    True
    
    data\_size\_confirm
    
    No
    
    The maximum input data size in GB. No limit applies. We recommend 100 GB.
    
    100
    
    update\_url
    
    No
    
    A reserved parameter. Ignore it for now.
    
    None
    
    use\_instance\_tunnel
    
    No
    
    Whether to use [InstanceTunnel](/help/en/maxcompute/user-guide/instancetunnel#concept-kn3-cxy-3hb) to download SQL query results. Valid values:
    
    -   True: Downloads the SQL execution results using InstanceTunnel.
        
    -   False: InstanceTunnel is not used to download SQL execution results.
        
    
    Default: False.
    
    True
    
    instance\_tunnel\_max\_record
    
    No
    
    The maximum number of records returned for SQL query results. Set this if use\_instance\_tunnel is True. Maximum: 10000.
    
    10000
    
    tunnel\_endpoint
    
    No
    
    The public endpoint for the Tunnel service.
    
    -   If you do not set a Tunnel endpoint, Tunnel automatically routes to the Tunnel endpoint for your MaxCompute service's region and network.
        
    -   If you set a Tunnel endpoint, Tunnel uses that endpoint and does not auto-route.
        
    
    For Tunnel endpoints by region and network, see [Endpoint](/help/en/maxcompute/user-guide/endpoints#concept-m2j-h1y-5db).
    
    http://dt.cn-hangzhou.maxcompute.aliyun.com
    
    set.<key>
    
    No
    
    Set properties for your MaxCompute project.
    
    For more properties, see [Property list](/help/en/maxcompute/user-guide/project-operations#table-u1x-d3e-c57).
    
    set.odps.sql.decimal.odps2=true
    
    Make sure all settings are correct. Incorrect settings cause connection failures.
    

## Run the MaxCompute client

1.  [Create a MaxCompute project](/help/en/maxcompute/getting-started/create-a-maxcompute-project#task-zl2-mtx-5db).
    
2.  If you use a RAM user to run the MaxCompute client, add that RAM user to your target MaxCompute project using your Alibaba Cloud account. For more details, see [Grant permissions to other users](/help/en/maxcompute/getting-started/add-a-workspace-member-and-configure-roles#task-1954109).
    
3.  Start the MaxCompute client in one of the following ways:
    
    ## Method 1: Script files in the installation package
    
    In the bin folder under your MaxCompute client installation path, double-click `odpscmd.bat` (Windows) or `odpscmd` (macOS). This starts the MaxCompute client. You see the following message when the connection succeeds.![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2192943071/p744934.png)
    
    ## Method 2: System command-line window
    
    In your system command-line window, go to the bin directory under your MaxCompute client installation path. Then run `odpscmd` (Windows) or `sh odpscmd` (Linux or macOS). This starts the MaxCompute client. You see the following message when the connection succeeds.
    
    **Note**
    
    On Ubuntu, running `sh odpscmd` returns an error. Try `./odpscmd` instead.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2192943071/p744938.png)
    
    If you start the MaxCompute client from the system command line, you can pass arguments to run commands. For more arguments, see [Startup parameters](#67e95fa68d1za).
    

## **Related operations**

### **Get help for all commands**

Use one of the following methods to get quick help for MaxCompute client commands:

## View command help in the MaxCompute client

-   View help for all commands.
    
    ```
    odps@project_name>help;
    -- Equivalent to:
    odps@project_name>h;
    ```
    
-   View help for commands matching a keyword.
    
    For example, get help for table-related commands.
    
    ```
    odps@project_name>help table;
    -- Returns:
    Usage: alter table <tablename> merge smallfiles
    Usage: export table <tablename>
    Usage: show tables [in <project_name>] [like '<prefix>']
           list|ls tables [-p,-project <project_name>]
    Usage: describe|desc [<projectname>.]<tablename> [partition(<spec>)]
    Usage: read [<project_name>.]<table_name> [(<col_name>[,..])] [PARTITION (<partition_spec>)] [line_num]
    ```
    
    **Important**
    
    The `read` command uses SQL syntax. For pricing details, see [SQL pricing](/help/en/maxcompute/product-overview/overview-1/#concept-nht-rsc-5db).
    

## View command help in the system command-line window

In your system command-line window, go to the bin folder under your MaxCompute client installation path. Then run the following command to view help for all commands. When you start the MaxCompute client from the command line, you can pass several arguments. See [Startup parameters](#67e95fa68d1za) for details.

```
...\odpscmd\bin>odpscmd -h
```

### **Get current user info**

After starting the MaxCompute client, run this command to retrieve your current user information.

```
odps@project_name>whoami;
```

The returned parameters are described below.

-   Name: Your account name.
    
-   Source IP: The IP address of the device where the MaxCompute client runs.
    
-   End\_Point: The endpoint for the MaxCompute service.
    
-   Project: The name of your MaxCompute project.
    
-   Schema: The schema in your MaxCompute project.
    

### **Exit the MaxCompute client**

Run this command to exit the MaxCompute client.

```
odps@project_name>quit;
-- Equivalent to:
odps@project_name>q;
```

### **Run the****tunnel download****command**

-   The first time you run the `tunnel download` command in the MaxCompute client, the client creates a session folder to store logs. This folder is located in the `plugins/dship` subdirectory of its installation directory on your device.
    
-   If multiple users share the same device to run the `tunnel download` command, use one of these methods to keep data secure:
    
    -   Use your device's folder permission controls to manage access to the session folder.
        
    -   In the `tunnel download` command, add the `-sd <new session folder name>` or `-session-dir <new session folder name>` parameter to download data to a different session folder. For more information about the `tunnel download` command, see [Download](/help/en/maxcompute/user-guide/tunnel-commands#section-qxw-2zf-vdb).
        

## **References**

After logging on to the MaxCompute client, you can run SQL commands in your MaxCompute project. See [Use MaxCompute with the client](/help/en/maxcompute/getting-started/use-the-maxcompute-client/).

For full command syntax, see [Common commands](/help/en/maxcompute/user-guide/common-sql-statements-1#undefined) or [SQL commands and functions](/help/en/maxcompute/user-guide/overview-of-maxcompute-sql#concept-awk-jmb-5db).

## FAQ

After you configure the odps\_config.ini file and start the MaxCompute client, common errors include the following:

### **Error:**`**no java found**`

-   Cause
    
    Your machine does not have Java installed.
    
-   Solution
    
    Install Java on your machine and set the environment variable. MaxCompute client v0.28.0 and later support JDK 1.9. Earlier versions support only JDK 1.8.
    

### **Error:**`**Could not find or load main class com.aliyun.openservices.odps.console.ODPSConsole**`

-   Cause
    
    You may have downloaded the client package twice. The second download renamed the folder to `odpscmd_public (1)`. Spaces or special characters in the folder name cause path errors.
    
-   Solution
    
    Remove spaces and special characters from the folder name.
    

### **Error:**`**Accessing project '<projectname>' failed: ODPS-0420111: Project not found - '<projectname>'.**`

-   Cause
    
    The project name in the odps\_config.ini file is incorrect.
    
-   Solution
    
    1.  Log on to the [MaxCompute console](https://maxcompute.console.alibabacloud.com/), and select a region in the upper-left corner.
        
    2.  In the navigation pane on the left, choose **Manage Configurations** > **Projects**.
        
    3.  On the **Projects** page, copy the correct project name. Then update the odps\_config.ini file.
        

### **Error:**`**Accessing project '<projectname>' failed: ODPS-0420095: Access Denied - Authorization Failed [4002], You don't exist in project <projectname>.**`

-   Cause
    
    Your AccessKey ID does not belong to an Alibaba Cloud account or RAM user added to the target project. Or the project name is wrong.
    
-   Solution
    
    Contact the project owner to add your Alibaba Cloud account or RAM user to the target project. See [Add an Alibaba Cloud account (project level)](/help/en/maxcompute/user-guide/user-planning-and-management#section-qg5-xtz-vdb) or [Add a RAM user (project level)](/help/en/maxcompute/user-guide/user-planning-and-management#section-udf-j5z-vdb).
    

### **Error:**`**Accessing project '<projectname>' failed: { "Code": "InvalidProjectTable", "Message": "The specified project or table name is not valid or missing."}**`**or**`**Accessing project '<projectname>' failed: connect timed out**`

-   Cause
    
    The `end_point` value is wrong. For example, you used the classic network endpoint for an internal network connection, or you entered the Tunnel endpoint instead of the MaxCompute endpoint.
    
-   Solution
    
    Choose an endpoint that matches your project's region and network. See the [Endpoint](/help/en/maxcompute/user-guide/endpoints#concept-m2j-h1y-5db) documentation.
    
    The `end_point` parameter must hold the MaxCompute endpoint, not the Tunnel endpoint.
    

### **Error:**`**Accessing project '<projectname>' failed: <endpoint>**`

-   Cause
    
    The value of the `end_point` parameter is incorrect. For example, the public endpoint for the China (Hangzhou) region, `http://service.cn-hangzhou.maxcompute.aliyun.com/api`, is incorrectly entered as `http://service.ch-hangzhou.maxcompute.aliyun.com/api`.
    
-   Solution
    
    Copy the correct endpoint from the [Endpoint](/help/en/maxcompute/user-guide/endpoints#concept-m2j-h1y-5db) documentation. Avoid typing it manually.
    

## **Startup parameters**

In your system command-line window, use startup parameters to run commands quickly. Syntax:

```
Usage: odpscmd [OPTION]...
where options include the following:
    --help                                  (-h)for help
    --config=<config_file>                  specify another config file
    --project=<prj_name>                    use project
    --endpoint=<http://host:port>           set endpoint
    -k <n>                                  will skip begining queries and start from specified position
    -r <n>                                  set retry times
    -f <"file_path;">                       execute command in file
    -e <"command;[command;]...">            execute command, include sql command
```

The following describes the startup parameters.

**Command**

**Description**

**Command example**

`--help` or `-h`

Get help for all MaxCompute client commands.

`odpscmd --help`

`--config`

Specify the path to the odps\_config.ini file. Default path: `odpscmd_public/conf/odps_config.ini`.

`odpscmd --config=D:/odpscmd/conf/odps_config.ini`

`--project`

Specify the MaxCompute project name to access.

`odpscmd --project=doc_test`

`--endpoint`

Specify the endpoint for the MaxCompute service. For more details, see [Endpoint](/help/en/maxcompute/user-guide/endpoints#concept-m2j-h1y-5db).

`odpscmd --endpoint=http://service.cn-shanghai.maxcompute.aliyun.com/api`

`-k`

Run statements starting from a specific position. If `n≤0`, start from the first statement. Statements are separated by semicolons (;).

Skip the first two statements and start from the third. `odpscmd -k 3 -e "drop table table_name;create table table_name (dummy string);insert overwrite table table_name select count(*) from table_name;"`

`-r`

Set the number of retries for failed jobs.

`odpscmd -r 2 -e "select * from sale_detail;select * from table_test;"`

`-f`

Specify the file to read.

1.  Create a local script file named script.txt on drive D. Its content is:
    
    ```
    drop table if exists test_table_mj;
    create table test_table_mj (id string, name string);
    drop table test_table_mj;
    ```
    
2.  In your system command-line window, go to the bin folder under your MaxCompute client installation path. Then run:
    
    ```
    ..\odpscmd\bin>odpscmd -f D:/script.txt;
    ```
    

`-e`

Specify the command to run.

`odpscmd -e "select * from sale_detail;"`

In a shell or Windows command prompt, you might need to capture the dynamic return value of `odpscmd -e <SQL statement>` in a shell variable. Then use that variable in follow-up tasks. To avoid extra output such as runtime information or table headers, set the odps\_config.ini parameter use\_instance\_tunnel to false. This disables Instance Tunnel. Then run `set odps.sql.select.output.format={"needHeader":false,"fieldDelim":" "};` to hide table headers.

For example, table noheader has one column and three rows: 1, 2, and 3. Run the following command to redirect output to stdout. Only raw data appears, with no extra information:

```
-- Run in Windows command prompt.
...\odpscmd\bin>odpscmd -e "set odps.sql.select.output.format={""needHeader"":false,""fieldDelim"":"" ""};select * from noheader;" >D:\test.txt
-- Output saves to D:\test.txt.

-- Run in shell.
/Users/.../odpscmd/bin/odpscmd -e "set odps.sql.select.output.format={\"needHeader\":false,\"fieldDelim\":\"\"};select * from noheader;" >/Users/A/temp/test.txt 
-- Output saves to /Users/A/temp/test.txt.
-- Output:
1
2
3
```

## **Version history**

The following table lists recent updates to the MaxCompute client. Click each version link for full details.

For more versions and feature updates, see [GitHub](https://github.com/aliyun/aliyun-odps-console/releases).

**Version**

**Type**

**Description**

[v0.52.3-public](https://github.com/aliyun/aliyun-odps-console/releases/tag/v0.52.3-public)

New feature

Support STS tokens as temporary security credentials.

Bug fix

Update Apache Arrow library to fix dependency compatibility issues.

[v0.52.2-public](https://github.com/aliyun/aliyun-odps-console/releases/tag/v0.52.2-public)

New feature

Add `skip_progress` to control progress reporting for MCQA 2.0 jobs.

Enhancement

-   Improve MCQA V2 support: Enhance commands to better handle MCQA V2 mode.
    
-   Enhance compact command and add support for specific compact IDs.
    

[v0.51.2-public](https://github.com/aliyun/aliyun-odps-console/releases/tag/v0.51.2-public)

Bug fix

Upgrade dependencies to fix CVE vulnerabilities.

[v0.51.1-public](https://github.com/aliyun/aliyun-odps-console/releases/tag/v0.51.1-public)

New feature

Speed up external volume creation: Add acceleration for external volume downloads.

Enhancement

Refactor `DescribeTableCommand`, `ShowPartitionsCommand`, and `ShowTablesCommand` to better handle external projects V2.

[v0.51.0-public](https://github.com/aliyun/aliyun-odps-console/releases/tag/v0.51.0-public)

New feature

-   Quota caching: Cache quota info in the local file system to improve performance.
    
-   Enhanced compact command: Add local threshold, force mode, and improved parameter validation.
    
-   SQL tuning command: Introduce `TUNE` to analyze and optimize SQL query plans. Evaluate candidate execution plans. Add tuning history and reports.
    

Enhancement

-   Enhance MCQA 2.0 session management and quota loading.
    
-   Network timeout config: Rework `network_read_timeout` and `network_connect_timeout`. Integrate timeouts with REST client config.
    

[v0.50.0-public](https://github.com/aliyun/aliyun-odps-console/releases/tag/v0.50.0-public)

New feature

-   Support MCQA 2.0 job submission.
    
-   Use UseQuotaCommand to specify interactive quota groups.
    

[v0.48.0-public](https://github.com/aliyun/aliyun-odps-console/releases/tag/v0.48.0)

New feature

-   Upgrade `odps-sdk` from `0.47.0-public` to `0.48.6-public`. See the [odps-sdk changelog](https://github.com/aliyun/aliyun-odps-java-sdk/blob/release/0.48.x/CHANGELOG_CN.md).
    
-   Add data masking info to `DESC EXTENDED`.
    

Bug fix

MCQA mode now detects fallback behavior more accurately and avoids duplicate logview displays.

[v0.47.0-public](https://github.com/aliyun/aliyun-odps-console/releases/tag/v0.47.0)

New feature

-   Add `http` command to send HTTP requests as the current user.
    
-   Add `--keep-session-variables` startup parameter. When enabled, `use [project]` does not clear flags like `SET a=b` when switching projects.
    

Enhancement

-   New data type support for `read`: Support `TIMESTAMP_NTZ` and `JSON`.
    
-   Tunnel command upgrades:
    
    -   Add `-qn` to `TUNNEL UPLOAD/DOWNLOAD` to set Tunnel QuotaName.
        
    -   Add `-dfp` to `TUNNEL UPLOAD` to set DATETIME text format.
        
-   Add grep to `HistoryCommand` for better search.
    
-   Align project deletion syntax with console: Support `DROP project` alongside `DELETE project`.
    
-   Optimize setproject: Support longer value strings and complex types like JSON.
    

[v0.46.5-public](https://github.com/aliyun/aliyun-odps-console/releases/tag/v0.46.5)

New feature

Support JSON data type for Tunnel operations.

[v0.46.4-public](https://github.com/aliyun/aliyun-odps-console/releases/tag/v0.46.4)

New feature

-   The `UPSERT` feature for data operations: Implements `UPSERT` operations through Tunnel and adds the `DshipUpdate` class and the `RESUME_UPSERT_ID` constant to support data updates and operation resume.
    
-   Improve timezone handling for SQL execution: Use `SET odps.sql.timezone=UTC;`.
    
-   Enhance security config commands: Improve security config handling.
    
-   Improve command parsing and validation: Refactor SetCommand for better parsing and matching.
    

Enhancement

Expand `DescribeTableCommand` to show more storage layer details.

[v0.45.1](https://github.com/aliyun/aliyun-odps-console/tree/v0.45.1)[\-public](https://github.com/aliyun/aliyun-odps-console/releases/tag/v0.45.1)

New feature

-   Show storage layer info for partitioned and non-partitioned tables in `DescribeTableCommand`.
    
-   Show storage layer names, last modified times for partitions, and storage sizes per storage layer in partitioned tables.
    

[v0.45.0-public](https://github.com/aliyun/aliyun-odps-console/releases/tag/v0.45.0)

New feature

-   Add `attach_session_timeout` to control MCQA session attach timeout.
    
-   Improve pattern validation in SetCommand: Better existence checks and error handling for invalid patterns.
    

Enhancement

-   Add `attachTimeout` to session builder config for configurable timeout.
    
-   Enhance `dship` command: Better datetime parsing and execution.
    
-   Enhance `TopInstanceCommand`: Better parsing and option handling.
    

[v0.43.2-public](https://github.com/aliyun/aliyun-odps-console/releases/tag/v0.43.2)

New feature

-   Support external volume creation.
    
-   Support show commands to list all built-in functions or those matching a rule in your MaxCompute project.
    

[v0.40.10-public](https://github.com/aliyun/aliyun-odps-console/releases/tag/v0.40.10)

Bug fix

Remove Log4j dependency.

[v0.40.8-public](https://github.com/aliyun/aliyun-odps-console/releases/tag/v0.40.8)

New feature

Support schema-based project storage. See [Schema operations](/help/en/maxcompute/user-guide/schema-related-operations#task-2224812).

[v0.37.5-public](https://github.com/aliyun/aliyun-odps-console/releases/tag/v0.37.5)

New feature

Support complex data types for Tunnel uploads and downloads.

[v0.37.4-public](https://github.com/aliyun/aliyun-odps-console/releases/tag/v0.37.4)

Enhancement

-   Improve command help text.
    
-   `desc extended partition` returns additional partition property information.
    

[v0.36.0-public](https://github.com/aliyun/aliyun-odps-console/releases/tag/v0.36.0)

New feature

Support external project connections to Data Lake Formation (DLF) for data lakehouse features.

Bug fix

Fix nanosecond (nano) handling when downloading TIMESTAMP data.

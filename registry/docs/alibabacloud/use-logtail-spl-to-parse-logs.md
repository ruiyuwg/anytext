Logtail supports three processing modes: native plug-in mode (implemented in C++, offering the highest performance), extended plug-in mode (implemented in Go, providing a rich and flexible ecosystem), and Structured Process Language (SPL) mode (introduced in Logtail 2.0, which combines performance with flexibility). By writing SPL statements, you can leverage SPL's robust computing power for data processing. This topic explains how to use SPL statements to achieve the same functionality as the other two processing modes.

## **Prerequisites**

-   Simple Log Service is activated. For more information, see [Activate Simple Log Service](/help/en/sls/resource-management-overview#li-cxd-fsr-n0l).
    

## **Limits**

-   SPL is supported only for Logtail V2.0 and later.
    
-   The collection of text logs can be configured using the console, while the collection of the log types requires APIs or custom resource definitions (CRDs).
    

## **Procedure**

## Add SPL when modifying a Logtail configuration

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com).
    
2.  In the Projects section, click the project you want.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0052190171/p768895.png)
    
3.  On the **Log Storage** > **Logstores** tab, click the **\>** icon next to the logstore you want, and then choose **Data Collection** > **Logtail Configurations**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1304240271/p786647.png)
    
4.  In the **Logtail Configuration** list, find the required Logtail configuration and click **Manage Logtail Configuration** in the **Actions** column.
    
5.  Click **Edit**. In the **Processor Configurations** section, set the **Processing Method** to **SPL**, and then click **Save**.
    
    **Global Configurations**
    
    **Parameter**
    
    **Description**
    
    Configuration Name
    
    Enter a name for the Logtail configuration. The name must be unique in a project. After you create the Logtail configuration, you cannot change its name.
    
    Log Topic Type
    
    Select a method to generate log topics. For more information, see [Log topics](/help/en/sls/log-topics#concept-js3-glc-wdb).
    
    -   **Machine Group Topic**: The topics of the machine groups are used as log topics. If you want to distinguish the logs from different machine groups, select this option.
        
    -   **File Path Extraction**: You must specify a **custom regular expression**. A part of the file path that matches the regular expression is used as the log topic. If you want to distinguish the logs from different sources, select this option.
        
    -   **Custom**: You must specify a custom log topic.
        
    
    Advanced Parameters
    
    Optional. Configure the advanced parameters that are related to global configurations. For more information, see [CreateLogtailPipelineConfig](https://next.api.aliyun.com/document/Sls/2020-12-30/CreateLogtailPipelineConfig?spm=api-workbench.api_explorer.0.0.4c5f31f27Lmdh1).
    
    **Input Configurations**
    
    **Parameter**
    
    **Description**
    
    File Path
    
    Specify the directory and name of log files based on the location of the logs on your server, such as an ECS instance.
    
    -   If you specify a file path in a Linux operating system, the path must start with a forward slash (/). Example: `/apsara/nuwa/**/app.Log`.
        
    -   If you specify a file path in a Windows operating system, the path must start with a drive letter. Example: `C:\Program Files\Intel\**\*.Log`.
        
    
    You can specify an exact directory and an exact name. You can also use wildcard characters to specify the directory and name. For more information, see [Wildcard matching](https://man7.org/linux/man-pages/man7/glob.7.html). When you configure this parameter, you can use only the asterisk (\*) or question mark (?) as wildcard characters.
    
    Simple Log Service scans all levels of the specified directory to find the log files that match the specified conditions. Examples:
    
    -   If you specify `/apsara/nuwa/**/*.log`, Simple Log Service collects logs from the log files whose names are suffixed by .log in the `/apsara/nuwa` directory and the recursive subdirectories of the directory.
        
    -   If you specify `/var/logs/app_*/**/*.log`, Simple Log Service collects logs from the log files that meet the following conditions: The file name is suffixed by `.log`. The file is stored in a subdirectory of the `/var/logs` directory or in a recursive subdirectory of the subdirectory. The name of the subdirectory matches the `app_*` pattern.
        
    -   If you specify `/var/log/nginx/**/access*`, Simple Log Service collects logs from the log files whose names start with `access` in the `/var/log/nginx` directory and the recursive subdirectories of the directory.
        
    
    Maximum Directory Monitoring Depth
    
    Specify the maximum number of levels of subdirectories that you want to monitor. The subdirectories are in the log file directory that you specify. This parameter specifies the levels of subdirectories that can be matched by the `**` wildcard characters included in the value of **File Path**. A value of 0 indicates that only the log file directory that you specify is monitored.
    
    File Encoding
    
    Select the encoding format of log files.
    
    First Collection Size
    
    Specify the size of data that Logtail can collect from a log file the first time it does so. The default value of First Collection Size is 1024. Unit: KB.
    
    -   If the file size is less than 1,024 KB, Logtail collects data from the beginning of the file.
        
    -   If the file size is greater than 1,024 KB, Logtail collects the last 1,024 KB of data in the file.
        
    
    You can configure **First Collection Size** based on your business requirements. Valid values: 0 to 10485760. Unit: KB.
    
    Collection Blacklist
    
    If you turn on **Collection Blacklist**, you must configure a blacklist to specify the directories or files that you want Simple Log Service to skip when it collects logs. You can specify exact directories and file names. You can also use wildcard characters to specify directories and file names. When you configure this parameter, you can use only the asterisk (\*) or question mark (?) as wildcard characters.
    
    **Important**
    
    -   If you use wildcard characters to specify a value for **File Path** and you want to skip some subdirectories in the specified directory, you must configure **Collection Blacklist** to specify the subdirectories. You must specify complete subdirectories.
        
        For example, if you set **File Path** to `/home/admin/app*/log/*.log` and you want to skip all subdirectories in the `/home/admin/app1*` directory, you must select **Directory Blacklist** and enter `/home/admin/app1*/**` in the Directory Name field. If you enter `/home/admin/app1*`, the blacklist does not take effect.
        
    -   When a blacklist is in use, computational overhead is generated. We recommend that you add no more than 10 entries to a blacklist.
        
    -   You cannot specify a directory that ends with a forward slash (/). For example, if you specify the `/home/admin/dir1/` directory in a directory blacklist, the directory blacklist does not take effect.
        
    
    The following types of blacklists are supported: File Path Blacklist, File Blacklist, and Directory Blacklist.
    
    ### **File Path Blacklist**
    
    -   If you select **File Path Blacklist** and enter `/home/admin/private*.log` in the File Path Name field, all files whose names are prefixed by private and suffixed by .log in the `/home/admin/` directory are skipped.
        
    -   If you select **File Path Blacklist** and enter `/home/admin/private*/*_inner.log` in the File Path Name field, all files whose names are suffixed by \_inner.log in the subdirectories whose names are prefixed by private in the `/home/admin/` directory are skipped. For example, the `/home/admin/private/app_inner.log` file is skipped, but the `/home/admin/private/app.log` file is not skipped.
        
    
    ### File Blacklist
    
    If you select **File Blacklist** and enter `app_inner.log` in the File Name field, all files whose names are `app_inner.log` are skipped.
    
    ### Directory Blacklist
    
    -   If you select **Directory Blacklist** and enter `/home/admin/dir1` in the Directory Name field, all files in the `/home/admin/dir1` directory are skipped.
        
    -   If you select **Directory Blacklist** and enter `/home/admin/dir*` in the Directory Name field, all files in the subdirectories whose names are prefixed by dir in the `/home/admin/` directory are skipped.
        
    -   If you select **Directory Blacklist** and enter `/home/admin/*/dir` in the Directory Name field, all files in the dir subdirectory in each second-level subdirectory of the `/home/admin/` directory are skipped. For example, the files in the `/home/admin/a/dir` directory are skipped, but the files in the `/home/admin/a/b/dir` directory are not skipped.
        
    
    Allow File to Be Collected Multiple Times
    
    By default, you can use only one Logtail configuration to collect logs from a log file. If you want to collect multiple copies of logs from a log file, you must turn on **Allow File to Be Collected Multiple Times**.
    
    Advanced Parameters
    
    Optional. Configure the advanced parameters that are related to input plug-ins. For more information, see [CreateLogtailPipelineConfig](https://next.api.aliyun.com/document/Sls/2020-12-30/CreateLogtailPipelineConfig?spm=api-workbench.api_explorer.0.0.4c5f31f27Lmdh1#request_params_desc).
    
    **Processor Configurations**
    
    **Parameter**
    
    **Description**
    
    Log Sample
    
    Add a sample log that is collected from an actual scenario. You can use the sample log to configure parameters that are related to log processing with ease. You can add multiple sample logs. The total length of the logs must not exceed 1,500 characters.
    
    ```
    [2023-10-01T10:30:01,000] [INFO] java.lang.Exception: exception happened
        at TestPrintStackTrace.f(TestPrintStackTrace.java:3)
        at TestPrintStackTrace.g(TestPrintStackTrace.java:7)
        at TestPrintStackTrace.main(TestPrintStackTrace.java:16)
    ```
    
    Multi-line Mode
    
    -   Specify the type of multi-line logs. A multi-line log spans multiple consecutive lines. You can configure this parameter to identify each multi-line log in a log file.
        
        -   **Custom**: A multi-line log is identified based on the value of **Regex to Match First Line**.
            
        -   **Multi-line JSON**: Each JSON object is expanded into multiple lines. Example:
            
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
            
    -   Configure **Processing Method If Splitting Fails**.
        
        ```
        Exception in thread "main" java.lang.NullPointerException
            at com.example.MyClass.methodA(MyClass.java:12)
            at com.example.MyClass.methodB(MyClass.java:34)
            at com.example.MyClass.main(MyClass.java:½0)
        ```
        
        For the preceding sample log, Simple Log Service can discard the log or retain each single line as a log when it fails to split the log.
        
        -   **Discard**: The log is discarded.
            
        -   **Retain Single Line**: Each line of the log text is retained as a log. A total of four logs are retained.
            
    
    Processing Mode
    
    Select **SPL**.
    
    SPL Statement
    
    For more information about SPL statements, see [SPL syntax](/help/en/sls/user-guide/spl-syntax). By default, prior to log parsing, logs are stored in the `content` field.
    
    Timeout Period
    
    The maximum duration for a single execution of an SPL statement.
    

## Add SPL when creating a Logtail configuration

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com).
    
2.  In the **Quick Data Import** section, click **Import Data**, and then click the **Self-managed Open Source/Commercial Software** tab. Select a card that contains the **Text Logs** suffix.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5130882371/p867127.png)
    
3.  In the **Select Logstore** step, select a project and a logstore and click **Next**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6316701171/p769790.png)
    
4.  In the **Machine Group Configurations** step, configure a machine group.
    
    1.  Configure the Scenario and Installation Environment parameters based on your business requirements.
        
        **Important**
        
        You must configure the Scenario and Installation Environment parameters regardless of whether a machine group is available. The parameter settings affect subsequent configurations.
        
    2.  Make sure that a machine group is displayed in the **Applied Server Groups** section and click **Next**.
        
        ### **Machine group available**
        
        Select a machine group from the **Source Machine Group** section.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6316701171/p769795.png)
        
        ### **No machine group available**
        
        Click **Create Machine Group**. In the **Create Machine Group** panel, configure the parameters. You can set the Machine Group Identifier parameter to **IP Address** or **Custom Identifier**. For more information, see [Create a custom identifier-based machine group](/help/en/sls/create-a-user-defined-identity-machine-group) or [Create an IP address-based machine group](/help/en/sls/create-an-ip-address-based-machine-group).
        
        **Important**
        
        If you apply a machine group immediately after you create the machine group, the heartbeat status of the machine group may be **FAIL**. This issue occurs because the machine group is not connected to Simple Log Service. To resolve this issue, you can click **Retry**. If the issue persists, see [What do I do if no heartbeat connections are detected on Logtail?](/help/en/sls/troubleshoot-the-errors-related-to-logtail-machine-groups#concept-nfs-hs3-bfb)
        
5.  In the Logtail Configuration step, create a Logtail configuration and click **Next**.
    
    -   **Global Configurations**
        
        **Parameter**
        
        **Description**
        
        Configuration Name
        
        Enter a name for the Logtail configuration. The name must be unique in a project. After you create the Logtail configuration, you cannot change its name.
        
        Log Topic Type
        
        Select a method to generate log topics. For more information, see [Log topics](/help/en/sls/log-topics#concept-js3-glc-wdb).
        
        -   **Machine Group Topic**: The topics of the machine groups are used as log topics. If you want to distinguish the logs from different machine groups, select this option.
            
        -   **File Path Extraction**: You must specify a **custom regular expression**. A part of the file path that matches the regular expression is used as the log topic. If you want to distinguish the logs from different sources, select this option.
            
        -   **Custom**: You must specify a custom log topic.
            
        
        Advanced Parameters
        
        Optional. Configure the advanced parameters that are related to global configurations. For more information, see [CreateLogtailPipelineConfig](https://next.api.aliyun.com/document/Sls/2020-12-30/CreateLogtailPipelineConfig?spm=api-workbench.api_explorer.0.0.4c5f31f27Lmdh1).
        
    -   **Input Configurations**
        
        **Parameter**
        
        **Description**
        
        File Path
        
        Specify the directory and name of log files based on the location of the logs on your server, such as an ECS instance.
        
        -   If you specify a file path in a Linux operating system, the path must start with a forward slash (/). Example: `/apsara/nuwa/**/app.Log`.
            
        -   If you specify a file path in a Windows operating system, the path must start with a drive letter. Example: `C:\Program Files\Intel\**\*.Log`.
            
        
        You can specify an exact directory and an exact name. You can also use wildcard characters to specify the directory and name. For more information, see [Wildcard matching](https://man7.org/linux/man-pages/man7/glob.7.html). When you configure this parameter, you can use only the asterisk (\*) or question mark (?) as wildcard characters.
        
        Simple Log Service scans all levels of the specified directory to find the log files that match the specified conditions. Examples:
        
        -   If you specify `/apsara/nuwa/**/*.log`, Simple Log Service collects logs from the log files whose names are suffixed by .log in the `/apsara/nuwa` directory and the recursive subdirectories of the directory.
            
        -   If you specify `/var/logs/app_*/**/*.log`, Simple Log Service collects logs from the log files that meet the following conditions: The file name is suffixed by `.log`. The file is stored in a subdirectory of the `/var/logs` directory or in a recursive subdirectory of the subdirectory. The name of the subdirectory matches the `app_*` pattern.
            
        -   If you specify `/var/log/nginx/**/access*`, Simple Log Service collects logs from the log files whose names start with `access` in the `/var/log/nginx` directory and the recursive subdirectories of the directory.
            
        
        Maximum Directory Monitoring Depth
        
        Specify the maximum number of levels of subdirectories that you want to monitor. The subdirectories are in the log file directory that you specify. This parameter specifies the levels of subdirectories that can be matched by the `**` wildcard characters included in the value of **File Path**. A value of 0 indicates that only the log file directory that you specify is monitored.
        
        File Encoding
        
        Select the encoding format of log files.
        
        First Collection Size
        
        Specify the size of data that Logtail can collect from a log file the first time it does so. The default value of First Collection Size is 1024. Unit: KB.
        
        -   If the file size is less than 1,024 KB, Logtail collects data from the beginning of the file.
            
        -   If the file size is greater than 1,024 KB, Logtail collects the last 1,024 KB of data in the file.
            
        
        You can configure **First Collection Size** based on your business requirements. Valid values: 0 to 10485760. Unit: KB.
        
        Collection Blacklist
        
        If you turn on **Collection Blacklist**, you must configure a blacklist to specify the directories or files that you want Simple Log Service to skip when it collects logs. You can specify exact directories and file names. You can also use wildcard characters to specify directories and file names. When you configure this parameter, you can use only the asterisk (\*) or question mark (?) as wildcard characters.
        
        **Important**
        
        -   If you use wildcard characters to specify a value for **File Path** and you want to skip some subdirectories in the specified directory, you must configure **Collection Blacklist** to specify the subdirectories. You must specify complete subdirectories.
            
            For example, if you set **File Path** to `/home/admin/app*/log/*.log` and you want to skip all subdirectories in the `/home/admin/app1*` directory, you must select **Directory Blacklist** and enter `/home/admin/app1*/**` in the Directory Name field. If you enter `/home/admin/app1*`, the blacklist does not take effect.
            
        -   When a blacklist is in use, computational overhead is generated. We recommend that you add no more than 10 entries to a blacklist.
            
        -   You cannot specify a directory that ends with a forward slash (/). For example, if you specify the `/home/admin/dir1/` directory in a directory blacklist, the directory blacklist does not take effect.
            
        
        The following types of blacklists are supported: File Path Blacklist, File Blacklist, and Directory Blacklist.
        
        ### **File Path Blacklist**
        
        -   If you select **File Path Blacklist** and enter `/home/admin/private*.log` in the File Path Name field, all files whose names are prefixed by private and suffixed by .log in the `/home/admin/` directory are skipped.
            
        -   If you select **File Path Blacklist** and enter `/home/admin/private*/*_inner.log` in the File Path Name field, all files whose names are suffixed by \_inner.log in the subdirectories whose names are prefixed by private in the `/home/admin/` directory are skipped. For example, the `/home/admin/private/app_inner.log` file is skipped, but the `/home/admin/private/app.log` file is not skipped.
            
        
        ### File Blacklist
        
        If you select **File Blacklist** and enter `app_inner.log` in the File Name field, all files whose names are `app_inner.log` are skipped.
        
        ### Directory Blacklist
        
        -   If you select **Directory Blacklist** and enter `/home/admin/dir1` in the Directory Name field, all files in the `/home/admin/dir1` directory are skipped.
            
        -   If you select **Directory Blacklist** and enter `/home/admin/dir*` in the Directory Name field, all files in the subdirectories whose names are prefixed by dir in the `/home/admin/` directory are skipped.
            
        -   If you select **Directory Blacklist** and enter `/home/admin/*/dir` in the Directory Name field, all files in the dir subdirectory in each second-level subdirectory of the `/home/admin/` directory are skipped. For example, the files in the `/home/admin/a/dir` directory are skipped, but the files in the `/home/admin/a/b/dir` directory are not skipped.
            
        
        Allow File to Be Collected Multiple Times
        
        By default, you can use only one Logtail configuration to collect logs from a log file. If you want to collect multiple copies of logs from a log file, you must turn on **Allow File to Be Collected Multiple Times**.
        
        Advanced Parameters
        
        Optional. Configure the advanced parameters that are related to input plug-ins. For more information, see [CreateLogtailPipelineConfig](https://next.api.aliyun.com/document/Sls/2020-12-30/CreateLogtailPipelineConfig?spm=api-workbench.api_explorer.0.0.4c5f31f27Lmdh1#request_params_desc).
        
    -   **Processor Configurations**
        
        **Parameter**
        
        **Description**
        
        Log Sample
        
        Add a sample log that is collected from an actual scenario. You can use the sample log to configure parameters that are related to log processing with ease. You can add multiple sample logs. The total length of the logs must not exceed 1,500 characters.
        
        ```
        [2023-10-01T10:30:01,000] [INFO] java.lang.Exception: exception happened
            at TestPrintStackTrace.f(TestPrintStackTrace.java:3)
            at TestPrintStackTrace.g(TestPrintStackTrace.java:7)
            at TestPrintStackTrace.main(TestPrintStackTrace.java:16)
        ```
        
        Multi-line Mode
        
        -   Specify the type of multi-line logs. A multi-line log spans multiple consecutive lines. You can configure this parameter to identify each multi-line log in a log file.
            
            -   **Custom**: A multi-line log is identified based on the value of **Regex to Match First Line**.
                
            -   **Multi-line JSON**: Each JSON object is expanded into multiple lines. Example:
                
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
                
        -   Configure **Processing Method If Splitting Fails**.
            
            ```
            Exception in thread "main" java.lang.NullPointerException
                at com.example.MyClass.methodA(MyClass.java:12)
                at com.example.MyClass.methodB(MyClass.java:34)
                at com.example.MyClass.main(MyClass.java:½0)
            ```
            
            For the preceding sample log, Simple Log Service can discard the log or retain each single line as a log when it fails to split the log.
            
            -   **Discard**: The log is discarded.
                
            -   **Retain Single Line**: Each line of the log text is retained as a log. A total of four logs are retained.
                
        
        Processing Mode
        
        Select **SPL**.
        
        SPL Statement
        
        For more information about SPL statements, see [SPL syntax](/help/en/sls/user-guide/spl-syntax). By default, prior to log parsing, logs are stored in the `content` field.
        
        Timeout Period
        
        The maximum duration for a single execution of an SPL statement.

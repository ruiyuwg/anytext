Logtail collects only incremental logs. If a log file is not updated after a Logtail configuration is delivered and applied to your server, Logtail does not collect logs from the file. If you want to collect historical logs, you can use the historical log import feature of Logtail.

## Prerequisites

-   Logtail V0.16.15 or later is installed on your Linux server, or Logtail V1.0.0.1 or later is installed on your Windows server. For more information, see [Install Logtail on a Linux server](/help/en/sls/install-logtail-on-a-linux-server#concept-u5y-3lv-vdb) or [Install Logtail on a Windows server](/help/en/sls/install-logtail-on-a-windows-server#concept-j22-xnv-vdb).
    
-   A Logtail configuration is created and applied to your machine group. For more information, see [Overview of text log collection](/help/en/sls/overview-10#concept-ed1-fbc-wdb).
    
    **Note**
    
    If a Logtail configuration is used to only import historical logs from log files, you can specify a collection path that does not exist.
    

## Background information

Logtail collects logs based on the modification events of monitored files. Logtail can load events from local files to collect logs. Logtail loads local events to collect historical logs from log files.

**Note**

-   The maximum latency that is allowed to import local events is 1 minute.
    
-   If a local event is loaded, Logtail sends the `LOAD_LOCAL_EVENT_ALARM` message to your server.
    
-   If you want to import a large number of files, we recommend that you modify the startup parameters of Logtail. You can set the CPU utilization threshold to 2.0 or a larger value and the memory usage threshold to 512 MB or a larger value. For more information, see [Configure the startup parameters of Logtail](/help/en/sls/configure-the-startup-parameters-of-logtail#concept-sdg-czb-wdb).
    
-   If your log file contains Chinese characters, you must configure a character set for the file.
    

You must import historical logs from log files in the installation directory of Logtail. The installation directory of Logtail varies based on operating systems. The following table describes the installation directories of Logtail in different operating systems.

**Operating system**

**Logtail**

**Installation directory of Logtail**

Linux

Logtail (64-bit)

/usr/local/ilogtail

64-bit Windows

Logtail (64-bit)

C:\\Program Files\\Alibaba\\Logtail

Logtail (32-bit)

C:\\Program Files (x86)\\Alibaba\\Logtail

**Note**

You can run 32-bit and 64-bit applications in 64-bit Windows. To ensure compatibility, the operating system stores 32-bit applications in a separate x86 directory.

32-bit Windows

Logtail (32-bit)

C:\\Program Files\\Alibaba\\Logtail

## Procedure

1.  Obtain the unique identifier of the Logtail configuration.
    
    You can obtain the unique identifier of a Logtail configuration from the user\_log\_config.json file in the installation directory of Logtail. For example, you can run the following command to obtain the unique identifier of a Logtail configuration on a Linux server:
    
    ```
    grep "##" /usr/local/ilogtail/user_log_config.json | awk '{print $1}'
    ```
    
2.  Add a local event.
    
    1.  Create the local\_event.json file in the installation directory of Logtail.
        
    2.  Add the local event in the JSON format to the local\_event.json file.
        
        **Important**
        
        To prevent Logtail from loading an invalid JSON event, we recommend that you save the configuration of the local event in a temporary file for editing and then copy the configuration to the local\_event.json file after editing.
        
        ```
        [ 
          {
            "config" : "${your_config_unique_id}",
            "dir" : "${your_log_dir}",
            "name" : "${your_log_file_name}"
           },
          {
           ...
           }
           ...
        ]
        ```
        
        **Parameter**
        
        **Description**
        
        config
        
        Enter the unique identifier of the Logtail configuration that is obtained in [Step 1](#step-ls6-3m5-xfr). Example: `##1.0##log-config-test$ecs-test`.
        
        dir
        
        Specify the directory of the log file from which you want to import historical logs. Example: /data/logs.
        
        **Important**
        
        -   Do not end the value with a forward slash `(/)`.
            
        -   Do not specify the installation directory of Logtail, such as `/usr/local/ilogtail`.
            
        
        name
        
        Specify the name of the log file from which you want to import historical logs. Wildcard characters are supported. Examples: access.log.2018-08-08 and access.log\*.
        
        The following sample code provides an example on how to configure a local event in Linux:
        
        ```
        $ cat /usr/local/ilogtail/local_event.json
        [
          {
            "config": "##1.0##log-config-test$ecs-test",
            "dir": "/data/log",
            "name": "access.log*"
          },
          {
            "config": "##1.0##log-config-test$tmp-test",
            "dir": "/tmp",
            "name": "access.log.2017-08-09"
          }
        ]                            
        ```
        

## FAQ

-   How do I check whether Logtail loads a Logtail configuration?
    
    In most cases, after you save the local\_event.json file, Logtail loads the content of the file to memory within 1 minute and then clears the file.
    
    You can use the following methods to check whether a Logtail configuration is loaded:
    
    1.  If no content exists in the local\_event.json file, Logtail has read the event information.
        
    2.  Check whether the ilogtail.LOG file in the installation directory of Logtail contains the `process local event` parameter. If no content exists in the local\_event.json file and the `process local event` parameter is not obtained, the content in the local\_event.json file may be filtered out because the content is invalid.
        
-   Why am I unable to collect data after a Logtail configuration is loaded?
    
    -   The Logtail configuration is invalid.
        
    -   The configuration in the local\_event.json file is invalid.
        
    -   The log file from which you want to collect logs is not stored in the directory that is specified in the Logtail configuration.
        
    -   The logs of the log file from which you want to collect logs are collected.
        

## **What to do next**

After historical logs are imported, you can query and analyze the logs. For more information, see [Query and analyze logs in index mode](/help/en/sls/query-and-analyze-logs-in-index-mode/).

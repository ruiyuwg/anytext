If the preview page is blank or the query page shows no data, work through the following checks in order. Each section targets a specific failure point in the Logtail collection pipeline.

## **Troubleshooting overview**

1.  Check whether a matched log file is updated. Logtail collects only incremental logs. If a log file is not updated after a Logtail configuration is delivered and applied to your server, Logtail does not collect logs from the file.
    
2.  Check whether the heartbeat status of your machine group is normal.
    
3.  Check whether a Logtail configuration is created.
    
4.  Check whether the Logtail configuration is applied to your machine group.
    
5.  View collection errors. If none of the above issues are present, check the Logtail collection error messages in the console.
    

## Step 1: Verify that the log file is being updated

Logtail collects only incremental logs. If a log file is not updated after a Logtail configuration is delivered and applied to your server, Logtail does not collect logs from the file.

Check whether new data is being written to the target log file:

```
# Linux: Watch for new lines appended to the log file
tail -f /path/to/your/logfile.log
```

-   **File is not being updated** -- No new logs are generated, so Logtail has nothing to collect. Confirm that your application is writing to the expected path.
    
-   **File is being updated** -- Proceed to [Step 2](#h2-ed512a67).
    

**Note**

Logtail does not collect historical logs by default. To import logs that were written before the Logtail configuration was applied, see [Import historical logs from log files](/help/en/sls/import-historical-logs).

## Step 2: Check the machine group heartbeat

Open the Simple Log Service console and view the heartbeat status of your machine group. For details, see [Manage machine groups](/help/en/sls/manage-machine-groups#section-ijx-mp1-ry).

-   **Heartbeat is FAIL** -- The server is not communicating with Simple Log Service. See [How do I troubleshoot the errors that are related to Logtail machine groups?](/help/en/sls/troubleshoot-the-errors-related-to-logtail-machine-groups#concept-nfs-hs3-bfb)
    
-   **Heartbeat is OK** -- Proceed to [Step 3](#h2-b433b22c).
    

## Step 3: Confirm that a Logtail configuration exists

If no Logtail configuration exists, create one by following [Manage Logtail configurations for log collection](/help/en/sls/manage-logtail-configurations-for-log-collection#section-gmp-lm1-ry).

If a Logtail configuration already exists, verify the following before proceeding:

-   **Log path matches the actual file location** -- The log path specified in the Logtail configuration must match the log files on the servers from which you want to collect logs.
    
-   **One configuration per file** -- By default, only one Logtail configuration can collect logs from a single log file. To use multiple configurations for the same file, see [What do I do if I want to use multiple Logtail configurations to collect logs from a log file?](/help/en/sls/what-do-i-do-if-i-want-to-use-multiple-logtail-configurations-to-collect-logs-from-a-log-file#concept-2180900)
    

## Step 4: Verify that the Logtail configuration is applied to the machine group

On the **Machine Group Settings** page, check whether the Logtail configuration is applied to the target machine group.

-   **Not applied** -- Apply the configuration by following [Manage machine groups](/help/en/sls/manage-machine-groups#section-gqq-rp1-ry).
    
-   **Already applied** -- Proceed to [Step 5](#h2-18697cdd).
    

## Step 5: Check collection errors

If the previous steps did not reveal the issue, inspect error messages and Logtail log files.

### View error messages in the console

Check the collection errors in the Simple Log Service console. For details, see [How do I view Logtail collection errors?](/help/en/sls/user-guide/how-do-i-view-logtail-collection-errors#task-njf-nkb-ry)

### Review Logtail log files

Logtail records important information and all WARNING and ERROR logs. Check the following log files for detailed error messages.

**Host environment**

**Operating system**

**Logtail version**

**Log file path**

Linux

64-bit

`/usr/local/ilogtail/ilogtail.LOG`

64-bit Windows

64-bit

`C:\Program Files\Alibaba\Logtail\logtail_*.log`

32-bit

`C:\Program Files(x86)\Alibaba\Logtail\logtail_*.log`

32-bit Windows

32-bit

`C:\Program Files\Alibaba\Logtail\logtail_*.log`

On Linux, an additional log file `/usr/local/ilogtail/logtail_plugin.LOG` is available. This file contains logs collected when the Logtail configuration uses data sources such as HTTP logs, MySQL binary logs, or MySQL query results.

**Note**

On 64-bit Windows, both 32-bit and 64-bit applications can run. The operating system stores 32-bit applications in a separate x86 directory, which is why the log paths differ.

**Container environment**

For Logtail running in containers, check the following files inside the Logtail container:

-   `/usr/local/ilogtail/ilogtail.LOG`
    
-   `/usr/local/ilogtail/logtail_plugin.LOG`
    

### Check usage limits

If you collect a large volume of log data or collect logs from many files, the default throughput settings may be insufficient. Adjust the startup parameters to increase throughput. For details, see [Configure the startup parameters of Logtail](/help/en/sls/configure-the-startup-parameters-of-logtail#concept-sdg-czb-wdb).

## Submit a support ticket

If the issue persists after completing all troubleshooting steps, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm?spm=a2796.7919406.0.dcontactus3.676a2d23RjosdV#/ticket/add/?productId=1210). Include the following information to help expedite resolution:

-   The Logtail configuration name and machine group name
    
-   The heartbeat status of the machine group
    
-   Relevant error messages from the collection error view or Logtail log files
    
-   The log file path and a sample of the log content

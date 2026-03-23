If an out of memory (OOM) issue occurs on the PC where a Cloud Backup client resides, the backup job fails. To resolve OOM issues, you can increase CPU and memory resources, split the source path into multiple directories, configure bandwidth throttling, and reduce the resource usage of the Cloud Backup client. This topic describes how to resolve OOM issues.

## Background information

When you use a Cloud Backup client to back up an excessively large amount of data whereas the system resources are insufficient, the Cloud Backup client may consume a large number of system resources. In this case, the backup process may trigger an OOM issue and then is terminated by the system, resulting in a backup failure.

**Important**

If you encounter an OOM issue, you can expand the memory or CPU capacity of the PC where the Cloud Backup client resides, or try to resolve the issue by referring to this topic. For more information about common backup failures, see [How do I resolve backup failures?](/help/en/cloud-backup/support/backup-failure-handling-best-practices)

## Method 1: Split the source path

Split the source path in a backup plan into multiple directories.

In the same backup plan, backup jobs for the split directories are run in series. The amount of data in each split directory is reduced compared to the original path. Therefore, the resources consumed by each backup job are also reduced. The following example shows the source path in your backup plan:

```
-/backup
--/path1
--/path2
--/path3
```

You can split the source path into three directories.

**Note**

After the splitting, the backup plan is executed based on the split directories. The original backup and restore jobs are not affected.

```
-/backup/path1
-/backup/path2
-/backup/path3
```

![拆分目录](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0266428071/p694180.png)

## **Method 2: Configure bandwidth throttling for a backup plan**

In the Cloud Backup console, find the backup plan corresponding to the data source, modify the backup plan, enable bandwidth throttling, and then configure the related parameters.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0266428071/p742198.png)

## Method 3: Reduce the resource consumption of the Cloud Backup client

You can modify the configuration file of the Cloud Backup client to limit the number of concurrent files. This way, the memory resources consumed by the Cloud Backup client can be reduced.

**Important**

This method does not apply to the backup of anti-ransomware files on Security Center servers.

1.  Log on to the host from which files are backed up.
    
2.  Find and open the installation path of the Cloud Backup client.
    
    -   Linux
        
        -   The default installation path for the new Cloud Backup client is /opt/alibabacloud/hbrclient.
            
        -   The default installation path for the old Cloud Backup client is /opt/alibabacloud/hbr/.
            
    -   Windows
        
        -   The default installation path for the new Cloud Backup client is C:\\Program Files\\Aliyun Hybrid Backup Service Client.
            
        -   The default installation path for the old Cloud Backup client is C:\\Program Files\\Aliyun Hybrid Backup Service.
            
3.  If the `hbr.config` file does not exist, create the `hbr.config` file in a subdirectory of the `client` folder.
    
    **Note**
    
    The `hbr.config` file must be at the same directory level as the `ids` file.
    
4.  Configure the following parameters in the `hbr.config` file.
    
    You can modify the configuration file of the Cloud Backup client to limit the number of cache files and concurrent files. This reduces the memory usage during file backup. For more information about the memory required for file backup, see [What are resource requirements for backup?](/help/en/cloud-backup/support/what-are-resource-requirements-for-backup#concept-862027)
    
    The following example shows the configurations of the `hbr.config` file:
    
    ```
    max_file_workers=5
    max_blob_uploader=16
    ```
    
    You can click here to download the [hbr.config](//help-static-aliyun-doc.aliyuncs.com/file-manage-files/en-US/20240305/snyohi/hbr.config) file.
    
    **Parameter**
    
    **Description**
    
    max\_file\_workers
    
    The maximum number of files or directories that can be concurrently backed up. Default value: 10.
    
    max\_blob\_uploader
    
    The maximum number of data blocks that can be concurrently uploaded. Default value: 32.
    

## **References**

-   [How do I handle backup failures?](/help/en/cloud-backup/support/backup-failure-handling-best-practices)
    
-   [How do I check the status of a Cloud Backup client?](/help/en/cloud-backup/how-to-check-the-status-of-an-hbr-client)
    
-   [Where do I view the default installation path and logs of a Cloud Backup client?](/help/en/cloud-backup/support/where-do-i-view-the-default-installation-path-and-logs-of-an-hbr-client)
    
-   [How do I uninstall a Cloud Backup client?](/help/en/cloud-backup/support/how-to-uninstall-an-hbr-client)
    
-   [How do I resolve OOM issues on a Cloud Backup client?](#)
    
-   [How do I troubleshoot and handle the status exceptions on a Cloud Backup client?](/help/en/cloud-backup/support/how-to-troubleshoot-and-handle-the-status-exceptions-of-an-hbr-client)
    
-   [Diagnostic tool for Cloud Backup clients](/help/en/cloud-backup/support/diagnostic-tool-for-hbr-clients)
    
-   [How do I select a component and account when I install a Cloud Backup client?](/help/en/cloud-backup/support/how-to-select-a-component-and-account-when-i-install-an-hbr-client)
    

**Important**

If the issue persists, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm).

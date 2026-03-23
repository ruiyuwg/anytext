Attackers can use ransomware to encrypt or steal your data and demand a ransom. Security Center provides the anti-ransomware feature. You can use the feature to create an anti-ransomware policy to back up data on your server. This way, if your server is attacked by ransomware, you can restore your data by using the backup. This minimizes the impact of ransomware on your workloads. This topic describes how to create an anti-ransomware policy for a server.

## Prerequisites

-   Purchase the anti-ransomware capacity and authorize your account to use the anti-ransomware feature. For more information, see [Enable anti-ransomware](/help/en/security-center/user-guide/enable-anti-ransomware#task-2488729).
    
-   Ensure that the [Security Center agent is installed](/help/en/security-center/user-guide/install-the-security-center-agent) on your server.
    

## Data backup

-   Security Center uploads data in the backup directory that is specified in an anti-ransomware policy to Cloud Backup for backup. You can incrementally back up data to protect your server against ransomware. The first time you back up all data in protected directories based on an anti-ransomware policy, a large number of CPU and memory resources are consumed. To avoid negative impacts on your services, we recommend that you back up data during off-peak hours. In subsequent backups, Security Center backs up only the files that are newly created, modified, or deleted. This reduces server resource consumption and prevents excessive consumption of the anti-ransomware capacity.
    
-   Security Center starts a specific number of data backup tasks based on the versions of anti-ransomware policies and the directories that you want to back up. For more information about V1.0 and V2.0 anti-ransomware policies, see [Version description of the anti-ransomware agent](#title-9eb-n45-5el).
    
    **Directory to back up**
    
    **V1.0 anti-ransomware policy**
    
    **V2.0 anti-ransomware policy**
    
    All directories
    
    -   For a Linux server, Security Center generates only one data backup task.
        
    -   For a Windows server, Security Center generates one data backup task for each data disk. If your Windows server has two data disks, Security Center generates two data backup tasks and starts the tasks at the same time. Compared with a Linux server, the Windows server consumes more CPU and memory resources during backup.
        
        **Important**
        
        We recommend that you schedule the data backup tasks based on the CPU utilization and memory usage of your Windows server.
        
    
    For a server, Security Center generates only one data backup task. For multiple servers, Security Center generates multiple data backup tasks and starts the tasks in sequence. This consumes less CPU and memory resources and does not affect your services.
    
    Specific directories
    
    Security Center starts one data backup task for each directory that is specified in an anti-ransomware policy. Security Center allows multiple data backup tasks to run at the same time. The tasks may consume a large number of CPU and memory resources.
    
    **Important**
    
    We recommend that you specify an appropriate number of directories in the anti-ransomware policy based on your business requirements.
    

## Create an anti-ransomware policy

Before you create an anti-ransomware policy, make sure that the operating system version of your server is supported by anti-ransomware for servers. If the operating system version is not supported, the data of your server cannot be backed up. For more information about supported operating system versions, see [Operating systems and versions supported by anti-ransomware for servers](/help/en/security-center/user-guide/overview-2#section-nsj-yty-2jl).

1.  [Log on to the Security Center console](https://yundun.console.alibabacloud.com/?p=sas). In the top navigation bar, select the region of the asset that you want to manage. You can select **China** or **Outside China**.
    
2.  In the left-side navigation pane, choose **Protection Configuration** > **Host Protection** > **Anti-ransomware**.
    
3.  On the **Anti-ransomware for Servers** tab of the **Anti-ransomware** page, click **Create Anti-ransomware Policy**.
    
4.  In the **Create Anti-ransomware Policy** panel, configure the Policy Name, Server Type, and Select Assets parameters.
    
    **Parameter**
    
    **Description**
    
    **Policy Name**
    
    The name of the anti-ransomware policy.
    
    **Server Type**
    
    The type of the server to which you want to apply the anti-ransomware policy.
    
    **Backup Route**
    
    The communication method that is used to back up data. If you set **Server Type** to **Server Not Deployed on Alibaba Cloud**, you must configure this parameter. Valid values:
    
    -   **Internet**: If you select this option, you may be charged for Internet bandwidth resources.
        
    -   **Internal Network**: If you select this option, you must use Alibaba Cloud virtual private clouds (VPCs), Express Connect circuits, or Cloud Enterprise Network (CEN) instances to establish connections between the servers that are not deployed on Alibaba Cloud and the anti-ransomware endpoint in the selected region.
        
    
    **Region**
    
    The region in which the server resides or a region in which an anti-ransomware endpoint is available. If you set **Server Type** to **Server Not Deployed on Alibaba Cloud**, you must configure this parameter. The selected region specifies the endpoint that is used to access anti-ransomware. To successfully back up data, make sure that the server can access the anti-ransomware endpoint in the selected region. For more information, see [Anti-ransomware endpoints](/help/en/security-center/user-guide/overview-2#section-1zj-v4y-x5a).
    
    **Select Asset**
    
    The assets that you want to protect. You can select an asset, an asset group, or multiple assets from asset groups. To select the assets that you want to protect, perform the following operations:
    
    -   In the **Asset Group** section, select an asset group. Then, all assets in the group are selected. You can clear assets that do not require protection in the **Assets** section.
        
    -   In the **Assets** section, enter the name of an asset in the search box to search for the asset. Fuzzy match is supported.
        
    
    **Note**
    
    -   If you want to apply the anti-ransomware policy to Elastic Compute Service (ECS) instances, you can select ECS instances that reside in different regions. If you want to apply the anti-ransomware policy to the servers that are not deployed on Alibaba Cloud, you must select the servers that reside in the same region.
        
    -   To make sure that the anti-ransomware capacity is effectively utilized, you can add a server to only one policy.
        
    
5.  Configure the remaining parameters and click **OK**.
    
    Protection Policies: the type of the anti-ransomware policy. Valid values: Recommended Policy and Custom Policy.
    
    -   **Recommended Policy**: The recommended policy is a built-in anti-ransomware policy of Security Center and cannot be modified. The default values of the following parameters are used:
        
        -   **Directory to Protect** All directories
            
        -   **Directory to Exclude**: Directories that are excluded from the policy
            
        -   **Non-local Mount Path**: Exclude non-local mount paths, such as a directory to which an OSS object or a NAS file system is attached.
            
        -   **File Type to Protect** All File Types
            
        -   **First Backup Starts At:** a point in time within the range of 00:00 to 03:00
            
        -   **Periodic Backup Interval:** One Day
            
        -   **Backup Data Retention Period** 7 Days
            
        -   **Maximum Backup Bandwidth**:
            
            -   Alibaba Cloud server: 0 MB/s
                
                **Note**
                
                The value 0 indicates that no limits are imposed on the bandwidth.
                
            -   Server not deployed on Alibaba Cloud: 5 MB/s
                
    -   **Custom Policy**: a custom policy that you can configure based on your business requirements. You must configure the following parameters: Protected Directories, Exclude specified directories, Protected File Types, Start Time, Backup policy execution interval, Backup data retention period, and The bandwidth limit of the backup network. The following table describes the parameters.
        
        **Parameter**
        
        **Description**
        
        **Directory to Protect**
        
        The directories that you want to back up. Valid values:
        
        -   **Specific Directory**: Security Center backs up only specified directories of the specified servers. You must enter the addresses of the specified directories for **Directory to Protect** Example:
            
            -   Windows server: `C:\Program Files (x86)\`
                
            -   Linux server: `/usr/bin/`
                
            
            You can enter up to 20 addresses. Security Center runs backup tasks in sequence based on protected directory addresses. If a large number of files are stored at a protected directory address, a large amount of server resources such as CPU and memory resources may be consumed to back up data at the address. In this case, you can split the directory into multiple addresses. Then, backup tasks run in sequence based on the addresses. This helps reduce the server resources that are consumed by each backup task.
            
        -   **All Directories**: Security Center backs up all directories of the specified servers.
            
        
        **Directory to Exclude**
        
        The directories that you do not want to back up. Security Center displays default directories that do not need to be backed up. You can add more directories or remove specific directories.
        
        **Non-local Mount Path**
        
        Select whether to exclude non-local mount paths, such as a directory to which an OSS object or a NAS file system is attached.
        
        **File Type to Protect**
        
        The type of the files that you want to protect. Valid values:
        
        -   **All File Types**: Security Center protects all files.
            
        -   **Specific File Types**: Security Center protects files only of the selected file type. You can select file types such as Document and Picture.
            
            **Important**
            
            You can select multiple file types. Security Center backs up only files of the selected file types for the specified assets.
            
        
        **First Backup Starts At:**
        
        The time at which you want to start a data backup task.
        
        **Important**
        
        If this is the first time that you back up all data in protected directories based on an anti-ransomware policy, a large number of CPU and memory resources are consumed. To avoid negative impacts on your services, we recommend that you back up data during off-peak hours.
        
        **Periodic Backup Interval:**
        
        The time interval between two data backup tasks. Default value: One Day.
        
        **Backup Data Retention Period**
        
        The retention period of backup data. Default value: 7 Days.
        
        **Important**
        
        The backup data is stored only within the specified retention period. We recommend that you specify the retention period based on your business requirements.
        
        Valid values:
        
        -   **Permanent**: The backup data is retained until Security Center expires, you delete the anti-ransomware policy, or you remove the specified server from the anti-ransomware policy.
            
        -   **Custom**: You can specify a retention period. Valid values: 1 to 65535. Unit: days.
            
        
        **Maximum Backup Bandwidth**
        
        The maximum bandwidth that can be consumed by a data backup task. Valid values: 0 to unlimited. Unit: MB/s.
        
        If you create the anti-ransomware policy for an ECS instance, only internal network bandwidth is consumed. If you create the anti-ransomware policy for a server that is not deployed on Alibaba Cloud, public or internal network bandwidth is consumed. You can configure this parameter to prevent backup tasks from consuming an excessive amount of bandwidth and ensure service stability.
        
        -   Alibaba Cloud server: 0 MB/s
            
        
        **Note**
        
        The value 0 indicates that no limits are imposed on the bandwidth.
        
        -   Server not deployed on Alibaba Cloud: 5 MB/s
            
        

6.  After the anti-ransomware policy is created, the policy is enabled by default, and Security Center installs the anti-ransomware agent on your server. Then, Security Center backs up data in the protected directories of your server based on the backup settings that you configure in the anti-ransomware policy.
    
    **Warning**
    
    You need to monitor the status of the anti-ransomware agent and promptly address any abnormal status to ensure that anti-ransomware backup and recovery tasks execute normally. For more information, see [View anti-ransomware client status](#section-vzf-avu-vt1).
    

## Configure anti-ransomware policies after the operating system of a server is replaced

After the operating system of a server is replaced, the protected directories on the server remain unchanged. In this case, the server may encounter issues such as high resource usage and backup failures due to the backup of all directories.

If you replace the operating system of a server, you must check whether the existing anti-ransomware policy can protect the directories of the new operating system.

-   If the existing anti-ransomware policy meets the protection requirements after the replacement, you can remove the server from the anti-ransomware policy and add the server to the anti-ransomware policy again.
    
-   If the existing anti-ransomware policy does not meet the protection requirements after the replacement, you can modify the anti-ransomware policy, or remove the server from the anti-ransomware policy and create another anti-ransomware policy.
    

## Manage the anti-ransomware agent

### **Version description of the anti-ransomware agent**

You can create V2.0 anti-ransomware policies. You cannot modify existing V1.0 anti-ransomware policies.

The following table describes the differences between a V1.0 anti-ransomware policy and a V2.0 anti-ransomware policy.

**Item**

**V1.0 anti-ransomware policy**

**V2.0 anti-ransomware policy**

Custom directories to be excluded

Not supported.

Supported.

Classic network

Compatibility with Cloud Backup

Backup method

Multiple data backup tasks can be run at a time, which may cause high CPU utilization.

Multiple data backup tasks can be run in sequence.

**Upgrade V1.0 anti-ransomware policies with a few clicks**

You can upgrade a V1.0 anti-ransomware policy to a V2.0 anti-ransomware policy with a few clicks. To upgrade a V1.0 anti-ransomware policy, you can click **Upgrade** in the **Actions** column in the anti-ransomware policy list. During the policy upgrade, the version of the anti-ransomware agent that is installed based on the anti-ransomware policy is automatically upgraded to V2.X.X.![升级客户端](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6911480461/p344905.png)

**Note**

-   The upgrade of the anti-ransomware agent does not affect backup data. After the upgrade, your data backup tasks run as expected. If the upgrade fails, the version of the anti-ransomware agent is automatically rolled back to V1.X.X, and data backup tasks are not affected.
    
-   For some servers, the installed anti-ransomware agent cannot be upgraded with a few clicks. In this case, we recommend that you remove the server on which the anti-ransomware agent fails to be upgraded from the anti-ransomware policy, and click **Upgrade** in the **Actions** column for the anti-ransomware policy to upgrade the policy. After the anti-ransomware policy is upgraded, re-add the server to the anti-ransomware policy. Then, the V2.X.X anti-ransomware agent is automatically installed on the server.
    

### **View the status of the anti-ransomware agent**

After you create an anti-ransomware policy, check the status of the anti-ransomware agent that is installed on the servers protected by the anti-ransomware policy and make sure that the status of the anti-ransomware agent is **Online**. To check the status, go to the **Anti-ransomware for Servers** tab of the Anti-ransomware page, find the anti-ransomware policy, and then click the ![展开](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6911480461/p345649.png) icon next to the policy name. In the list of servers that are protected by the anti-ransomware policy, view the agent status for each server in the Agent Status column. Security Center can back up data for a server only if the status of the anti-ransomware agent for the server is **Online**. You can find a server and click the number in the **Recoverable Versions** column to go to the **Recoverable Data Versions** panel. If a version is displayed in the **Version Name** column of the Recoverable Version panel, data on the server is backed up. The value in the Version column specifies the time at which the backup is started.

If the status of the anti-ransomware agent is Exception, data backup fails. You must identify the cause of the exception to the anti-ransomware agent and handle the exception. For more information, see [Troubleshoot the issues that cause the abnormal status of the anti-ransomware agent and backup tasks](/help/en/security-center/user-guide/troubleshoot-the-issues-that-cause-the-abnormal-status-of-the-anti-ransomware-agent).

**Note**

If the status of the anti-ransomware agent is Exception, errors may occur during data backup or data restoration. If errors occur during data restoration, data backup tasks are not affected. You can handle the exception as prompted.

### **Manually install the anti-ransomware agent**

After you create an anti-ransomware policy for a server, Security Center automatically installs the anti-ransomware agent on the server. If the server is not started or is configured with specific firewall policies, Security Center may fail to install the anti-ransomware agent on the server. If the anti-ransomware agent fails to be installed, you must identify the cause and resolve the issue. Then, install the anti-ransomware agent on the server. For more information about how to manually install the anti-ransomware agent, see [Manage servers that are added to an anti-ransomware policy](/help/en/security-center/user-guide/manage-an-anti-ransomware-policy-1#section-htb-pnn-zpb).![安装混合云备份客户端](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0469441061/p113416.png)

### **Uninstall the anti-ransomware agent**

If the anti-ransomware agent that is installed on a server protected by an anti-ransomware policy is abnormal, you can click **Uninstall** in the **Actions** column for the server to uninstall the anti-ransomware agent. Then, reinstall the anti-ransomware agent on the server.

**Note**

If you uninstall the anti-ransomware agent within the specified data retention period, Security Center does not delete the data that the anti-ransomware agent backs up. If you uninstall the anti-ransomware agent at the point in time that is not within the specified data retention period, Security Center deletes the backup data of the server.

![卸载混合云备份客户端](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0469441061/p113415.png)

### **Delete the anti-ransomware agent**

If a server no longer requires an anti-ransomware policy, you can delete the anti-ransomware agent from the server. If you delete the anti-ransomware agent from the server, the server is removed from the list of servers that is protected by the anti-ransomware policy, and **the backup data of the server is also deleted**. After the backup data on the server is deleted, Security Center releases the anti-ransomware capacity. The anti-ransomware capacity is updated within 24 to 72 hours after the release. We recommend that you do not run out of the anti-ransomware capacity. If the anti-ransomware capacity is used up, data backup tasks stop, and a full backup is performed. This significantly increases the resource usage of the server.

**Important**

If the anti-ransomware agent is deleted from your server, the backup data on your server is also deleted. Deleted backup data cannot be restored. Proceed with caution.

![删除客户端](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6197444071/p345689.png)

## **References**

-   [Use the anti-ransomware feature](/help/en/security-center/user-guide/ransomware-prevention-daily-operation-guidelines)
    
-   [Troubleshoot the issue that data backup caches of the anti-ransomware feature occupy a large volume of disk space](/help/en/security-center/user-guide/release-disk-space-occupied-by-backup-caches)
    
-   [Troubleshoot the issues that cause the abnormal status of the anti-ransomware agent and backup tasks](/help/en/security-center/user-guide/troubleshoot-the-issues-that-cause-the-abnormal-status-of-the-anti-ransomware-agent)

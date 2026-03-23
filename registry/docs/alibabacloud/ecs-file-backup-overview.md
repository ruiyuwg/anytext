This topic describes the Elastic Compute Service (ECS) file backup feature of Cloud Backup, including its advantages, how it works, procedure, and billing.

## Introduction

The ECS file backup feature is a data protection solution provided by Cloud Backup for file systems on ECS instances. This feature provides a simple, secure, and reliable way to back up ECS file data to backup vaults. This ensures that you can recover data from backup vaults if data in your production system is accidentally deleted or encrypted by ransomware.

**Important**

This feature has certain limitations. For more information, see [Compatible system list and limits](/help/en/cloud-backup/product-overview/limits-1#section-cm5-hdy-pfb).

## Key advantages

-   Automatic client installation
    
    After you select the ECS instance that you want to back up, Cloud Backup automatically installs the backup client.
    
-   Cross-account backup
    
    After you grant the required permissions, you can use Account A to back up data from Account B. This facilitates centralized data protection management for enterprises.
    
-   Deduplication and compression
    
    The Cloud Backup client compresses and deduplicates the source ECS data before a backup. This reduces storage consumption and accelerates backups.
    
-   Backup lock to prevent accidental or malicious deletion
    
    Cloud Backup provides a backup lock feature for backup vaults. Backup data cannot be deleted by any account or method before the configured retention period expires.
    
-   Cross-region or cross-account backup
    
    You can use the [cross-region backup](/help/en/cloud-backup/user-guide/cross-region-backup) or cross-account backup vault replication feature to quickly copy critical data to different regions or accounts. This provides multi-layered disaster recovery protection.
    

## How it works

### **Backup principle**

Cloud Backup backs up data by automatically deploying a [client](/help/en/cloud-backup/product-overview/basic-concepts#0306d5304cmsf) on an ECS instance. The client uses [Cloud Assistant](/help/en/ecs/user-guide/overview-10) for installation and management. The Cloud Assistant Agent must be installed on the ECS instance. The client then backs up specified folders on the ECS instance based on the backup plan configuration.

The backup process uses an incremental-forever mechanism. The first backup is a full backup. Subsequent backups are incremental and upload only changed data. A complete full backup is then synthesized in the cloud. The client scans the specified folders to identify the files to back up, and then performs data deduplication and compression to reduce network traffic.

### **Client O&M**

Cloud Backup uses Cloud Assistant to install or uninstall the backup client and check the client status. If the client status is abnormal, Cloud Backup attempts to repair the client using Cloud Assistant. These operations and maintenance (O&M) tasks are performed using scripts. The following list describes the scripts:

-   Installation process: The installation script prechecks file system permissions, network connectivity, and software dependencies. If the precheck is successful, the script downloads the installation package to a local disk and installs the package.
    
    After the installation is complete, two new services are added.
    
    -   Windows: Alibaba Cloud Backup Service and Alibaba Cloud Backup Update Service
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9541701671/p1011937.png)
        
    -   Linux: hbrclient.service and hbrupdater.service. The process names are hbrclient and updater, respectively.
        
        ```
        # Obtain information about all services and processes that contain "hbr".
        systemctl list-units | grep hbr | awk '{print $1}' | xargs -I {} sh -c 'echo Service: {}; systemctl show {} -p MainPID | grep MainPID=; ps -p $(systemctl show {} -p MainPID | grep MainPID= | cut -d "=" -f2) -o pid,comm,cmd'
        
        # The following result is returned:
        Service: hbrclient.service
        MainPID=2170
            PID COMMAND         CMD
           2170 hbrclient       /opt/alibabacloud/hbrclient/client/hbrclient run
        Service: hbrclientupdater.service
        MainPID=2246
            PID COMMAND         CMD
           2246 updater         /opt/alibabacloud/hbrclient/update/updater
        ```
        
-   Uninstallation process: The uninstallation script uses the installed uninstaller program to uninstall the client.
    
    After the uninstallation is complete, the hbrclient and hbrupdater services are removed, and the hbrclient and updater processes are stopped.
    
-   Restart process: The restart script uses system services to restart the hbrclient and hbrupdater services. If the system services cannot restart the services, the script attempts to restart the client by terminating the processes.
    
-   Check process: The diagnostic script checks the client version, error logs, network reachability, disk space, mount information, and system time.
    

## Procedure

The following procedure shows how to back up ECS files in the Cloud Backup console.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4629866671/CAEQFxiBgMDSvL_h6xgiIGQ4MWMxNjlhMmMzNzRkYTVhODc1MzJlZWNjYWViNTAw4079775_20231115164420.775.svg)

1.  [Activate Cloud Backup](/help/en/cloud-backup/product-overview/activate-hbr#task-2259775)
    
    You are not charged for activating Cloud Backup. You are charged for the Cloud Backup client that you use to back up files and the storage usage of backup vaults. For more information, see [Billing methods and billable items](/help/en/cloud-backup/product-overview/billing-methods-and-billable-items#concept-89062-zh).
    
2.  [Back up ECS files](/help/en/cloud-backup/user-guide/back-up-files-from-an-ecs-instance#task-1963036)
    
    When you create a backup plan, configure the backup vault, data source, backup cycle, and retention period. After you create the backup plan, Cloud Backup installs a backup client on the source ECS instance. Cloud Backup starts the backup plan and continuously backs up files from the ECS instance.
    
    **Important**
    
    -   If the region that you select supports backup policies, you can set a backup plan only by associating it with a backup policy. Cloud Backup periodically backs up ECS files based on the backup policy.
        
    -   To view the regions that support backup policies, click **Policy Center** in the left-side navigation pane of the Cloud Backup console. For more information about how to create a backup policy, see [Create a backup policy](/help/en/cloud-backup/user-guide/manage-backup-policies#section-49a-5tg-0ij).
        
    -   Backup plans are upgraded to backup policies. If you are using a backup plan of the previous version, you can create a backup policy or bind a backup policy to the backup plan when you edit the backup plan. After the upgrade, the backup history of the previous backup plan still exists. To ensure that you are able to view the backup history, we recommend that you use the same backup vault for the old backup plan and the new backup policy.
        
    
3.  [Restore files to an ECS instance](/help/en/cloud-backup/user-guide/restore-files-to-an-ecs-instance#task-1963037)
    
    If a file is lost or abnormal in the ECS instance, you can restore the file based on historical backup points. You can restore the file to the original ECS instance, a new ECS instance, or an on-premises server.
    
    **Important**
    
    -   If you restore data to a new ECS instance, you are charged for using a file backup client.
        
    -   If you restore data to an on-premises server, you are charged for using a file backup client and the outbound Internet traffic.
        
    

## Fees

The ECS file backup feature mainly incurs the following two types of fees:

-   **File backup software fees**: These fees are charged based on the number of ECS instances on which a backup client is installed.
    
-   **Storage capacity fees**: These fees are charged based on the actual storage capacity that is consumed by backup data in a backup vault.
    
    You can view the detailed data of the backup vault on the Overview page of the Cloud Backup console.
    

Additional fees may apply for specific Cloud Backup configurations or operations. For example, if you mount another file system, such as an OSS bucket mounted using ossfs, to the backup directory, you may incur additional request fees. These fees are charged by the corresponding service, such as OSS. For more information, see [Billing methods and billable items](/help/en/cloud-backup/product-overview/billing-methods-and-billable-items).

**Important**

To avoid unexpected fees, make sure that you understand the billing rules of the relevant service provider when you use a mounted file system.

For more information about the pricing of billable items, see [Pricing](https://www.alibabacloud.com/product/hybrid-backup-recovery/pricing).

## What to do next

-   [ECS backup FAQ](/help/en/cloud-backup/how-do-i-delete-ecs-backup-clients#task-2503322)
    
-   [Best practices of Cloud Backup](/help/en/cloud-backup/use-cases/create-a-ram-user-and-authorize-the-ram-user-to-access-hbr#concept-64817-zh)

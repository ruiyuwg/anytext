This topic provides answers to some frequently asked questions about host protection-related features of Security Center. The features are anti-ransomware and web tamper proofing.

## How do I purchase the anti-ransomware capacity?

If you use the Basic edition of Security Center, you can go to the [Security Center buy page](https://common-buy-intl.alibabacloud.com/?commodityCode=sas_intl&accounttraceid=1f5e0cf4-dfe1-4ab4-a4c9-57af70efdb4d#/buy) to upgrade Security Center to the Anti-virus, Advanced, Enterprise, or Ultimate edition, and purchase the anti-ransomware capacity. You can also purchase the Value-added Plan edition and purchase the anti-ransomware capacity. For more information, see [Enable anti-ransomware](/help/en/security-center/user-guide/enable-anti-ransomware#task-2488729).

If you use the Anti-virus, Advanced, Enterprise, or Ultimate edition, you can change the specifications and purchase anti-ransomware capacity based on your business requirements. For more information, see [Upgrade and downgrade Security Center](/help/en/security-center/product-overview/upgrade-and-downgrade-security-center#task-o55-wgb-b2b). After you purchase the anti-ransomware capacity and grant Security Center the permissions to use your cloud resources, the anti-ransomware feature is automatically enabled.

## What is the anti-ransomware feature? Why do I must pay for the anti-ransomware feature?

The anti-ransomware feature is provided by Security Center to protect your servers and databases against ransomware. To use the anti-ransomware feature, you must purchase storage for backup data. The storage is specified by Anti-ransomware.

If you use the Anti-virus, Advanced, Enterprise, or Ultimate edition, you can change the specifications and purchase anti-ransomware capacity based on your business requirements. For more information, see [Upgrade and downgrade Security Center](/help/en/security-center/product-overview/upgrade-and-downgrade-security-center#task-o55-wgb-b2b). After you purchase the anti-ransomware capacity and grant Security Center the permissions to use your cloud resources, the anti-ransomware feature is automatically enabled.

The anti-ransomware feature allows you to restore the files that are encrypted by ransomware and enable data backup for important directories and files on your servers with a few clicks. We recommend that you purchase 50 GB of anti-ransomware capacity for each server, which costs only USD 2.25 per month.

## What is the relationship between the anti-ransomware feature and Cloud Backup?

The anti-ransomware feature uses the storage capability provided by Alibaba Cloud Cloud Backup. If you have not activated Cloud Backup, it is automatically activated after you purchase the anti-ransomware capacity and grant Security Center the permissions to use Cloud Backup. You are not charged for the activation of Cloud Backup.

## Is the data backup feature automatically enabled after I purchase the anti-ransomware capacity?

No, the data backup feature is not automatically enabled. After you purchase the anti-ransomware capacity, you must create and enable an anti-ransomware policy. After you enable the anti-ransomware policy, Security Center backs up server data to protect your servers against ransomware. For more information, see [Create an anti-ransomware policy](/help/en/security-center/user-guide/create-an-anti-ransomware-policy-1#task-2488076).

## How do I view the anti-ransomware capacity that I purchased and the anti-ransomware capacity that is used?

After you enable the anti-ransomware feature, you can use one of the following methods to view the anti-ransomware capacity that you purchased and the anti-ransomware capacity that is used:

1.  [Log on to the Security Center console](https://yundun.console.alibabacloud.com/?p=sas). In the top navigation bar, select the region of the asset that you want to manage. The following regions are supported: **China** and **Outside China**.
    
2.  In the left-side navigation pane, choose **Protection Configuration** > **Host Protection** > **Anti-ransomware**.
    
3.  In the Proportion of Used Capacity section of the **Anti-ransomware** page, view the value of Used Capacity/Total.
    

## After I enable the anti-ransomware feature, the data backup cache occupies a large amount of disk space. How do I clear the cache?

To accelerate data backup, the anti-ransomware feature caches data during data backup. By default, the data backup cache occupies disk space on your server. If a large amount of disk space is occupied by the cache in the path of C:\\Program Files (x86)\\Alibaba\\Aegis\\hbr\\cache on Windows servers or /usr/local/aegis/hbr/cache on Linux servers, you can clear the cache. For more information, see [Clear backup caches](/help/en/security-center/user-guide/release-disk-space-occupied-by-backup-caches#section-kfl-l8e-0j5).

## After I enable the anti-ransomware feature, the data backup cache occupies a large amount of space on drive C of my server. Can I change the directory in which the data backup cache is stored?

Yes, you can modify the configuration file of the anti-ransomware agent to change the directory in which the data backup cache is stored. For more information, see [Modify backup cache configurations](/help/en/security-center/user-guide/release-disk-space-occupied-by-backup-caches#section-bgz-de4-jzg).

## What do I do if the anti-ransomware agent consumes excessive server CPU or memory resources?

Due to issues with historical versions of the anti-ransomware agent, backing up data may cause the anti-ransomware agent to consume excessive server CPU or memory resources. Security Center has resolved this issue by upgrading the anti-ransomware agent version. If your current agent version is lower than 2.19.6, we recommend that you update the agent promptly. The update procedure is as follows:

1.  Log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas). In the left-side navigation pane, choose **Protection Configuration** > **Host Protection** > **Anti-ransomware**.
    
2.  On the **Anti-ransomware for Servers** tab of the page that appears, find the server on which the issue occurs and click **Uninstall** in the Actions column. In the message that appears, click **OK**.
    
    Then, the status of the anti-ransomware agent changes to **Uninstalling Agent**. It requires approximately 5 minutes to uninstall the anti-ransomware agent.
    
3.  After the agent is uninstalled, click **Install** in the Actions column. In the message that appears, click **OK**.
    
    Then, the status of the anti-ransomware agent changes to **Installing**. It requires approximately 5 minutes to install the anti-ransomware agent.
    

**Note**

If the issue persists, we recommend that you submit a [ticket](https://smartservice.console.alibabacloud.com/console.htm#/ticket/createIndex).

## What are the differences between the anti-ransomware solution (Enterprise Edition + Anti-ransomware) and snapshot backup?

The following table describes the differences between the anti-ransomware solution (Enterprise Edition + Anti-ransomware) and the snapshot feature.

**Feature**

**Data backup**

**Antivirus capability**

**Fee**

Snapshot

Provides a one-time backup for the system disk. If you want to restore data, you must restart the system.

The antivirus capability is not provided.

High. The snapshot feature backs up the entire disk. You cannot back up only a specific file. The fee for the snapshot feature is USD 0.02 per GB per month. For more information, see [Snapshots](/help/en/ecs/snapshots-1#concept-rq2-pcx-ydb).

Anti-ransomware solution

Supports multi-version data backup in a flexible manner. You can restore a file to any backup version. If you want to restore data, you do not need to restart the system.

The general anti-ransomware solution blocks known ransomware and generates alerts in real time. This solution captures unknown ransomware and allows you to restore data that is encrypted by ransomware with a few clicks.

Low. The general anti-ransomware solution supports file-level protection. You are charged data backup fees based on your actual usage. You do not need to back up the entire disk. For more information, see [Billing overview](/help/en/security-center/product-overview/billing-overview#concept-z2v-2bc-zdb).

## What do I do if the anti-ransomware capacity that I purchased is insufficient?

If the anti-ransomware capacity that you purchased is insufficient, data backup may fail. You can purchase additional anti-ransomware capacity or release the anti-ransomware capacity.

-   Purchase additional anti-ransomware capacity
    
    Insufficient anti-ransomware capacity causes backup failures. We recommend that you purchase sufficient anti-ransomware capacity to prevent backup failures. To purchase sufficient anti-ransomware capacity, perform the following operations: Log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas). In the left-side navigation pane, choose **Protection Configuration** > **Host Protection** > **Anti-ransomware**. On the **Anti-ransomware** page, click **Upgrade** below **Used Capacity/Total**.
    
    **Note**
    
    We recommend that you purchase 50 GB of anti-ransomware capacity for each server.
    
-   Release the anti-ransomware capacity
    
    -   Remove servers
        
        You can release anti-ransomware capacity by removing servers such as test servers and idle servers from an anti-ransomware policy. For more information, see [Manage servers that are added to an anti-ransomware policy](/help/en/security-center/user-guide/manage-an-anti-ransomware-policy-1#section-htb-pnn-zpb).
        
    -   Specify directories that you want to protect based on your business requirements
        
        You can create **custom anti-ransomware policies** and back up only the directories that you want to protect. This helps reduce the amount of anti-ransomware capacity that is used. For more information, see [Create an anti-ransomware policy](/help/en/security-center/user-guide/create-an-anti-ransomware-policy-1#task-2488076).
        
    -   Delete backup data
        
        If you no longer require backup data of a server, you can delete all backup data of the server to release the anti-ransomware capacity. For more information, see the "[Delete backup data](/help/en/security-center/user-guide/create-a-restoration-task#section-0fz-xwm-hp1)" section of the Create a restoration task topic.
        

## What do I do if the status of an anti-ransomware policy is abnormal?

If the status of an anti-ransomware policy is abnormal, you cannot back up server data based on the anti-ransomware policy. We recommend that you handle the exception based on the causes that are provided on the **Anti-blackmail** page. Possible causes and solutions:

-   **Insufficient anti-ransomware capacity**
    
    If the capacity used for data backup exceeds the capacity that you purchased, the current backup tasks are suspended and you cannot create restoration tasks. You must purchase sufficient anti-ransomware capacity to continue to use the anti-ransomware feature. For more information, see [Upgrade and downgrade Security Center](/help/en/security-center/product-overview/upgrade-and-downgrade-security-center#task-o55-wgb-b2b).
    
-   **The Security Center agent is offline**
    
    If the Security Center agent is offline, the status of anti-ransomware policies is abnormal. You must handle the exception based on the causes. For more information, see [Troubleshoot why the Security Center agent is offline](/help/en/security-center/user-guide/troubleshoot-why-the-security-center-agent-is-offline#task-fkr-2lc-zdb).
    
-   **Data backup errors**
    
    An invalid directory in a restoration task or insufficient server disk capacity causes data backup failures. In this case, the status of anti-ransomware policies is abnormal. You must recreate a restoration task, specify a valid backup directory, and make sure that the server disk capacity is sufficient. After the new restoration task is complete, the status of anti-ransomware policies changes to **normal**.
    

## If the remaining validity period of Security Center is three years, can I purchase web tamper proofing for one year?

No, the validity period of web tamper proofing must be the same as the validity period of Security Center.

## Can web tamper proofing protect files of all sizes?

Yes, web tamper proofing can protect files of all sizes.

## The message "The protection module initialization failed. Check whether other software has blocked the creation of the service" appears when I enable web tamper proofing. Why?

If the web tamper proofing feature fails to be enabled and the message "The protection module initialization failed. Check whether other software has blocked the creation of the service" appears, the web tamper proofing program is blocked by third-party security software on your server.

We recommend that you add the process of the Security Center agent to the whitelists of the third-party security software on your server. You can also disable the blocking feature of the third-party security software.

## What are the requirements for the local backup directory of web tamper proofing?

The local backup directory of web tamper proofing stores the backups of a protected directory. The local backup directory can be empty. You can specify a protected directory that contains the files of your website.

If you want to protect multiple directories of a server, you can restore the backup files in different directories or in the same directory.

## What do I do if I receive a message that indicates that a protected directory is invalid?

When you specify a protected directory in Windows, use a backslash (\\) instead of a forward slash (/). Example: `C:\Program Files\Common Files`.

**Note**

A protected directory cannot contain the following characters:

/;\*?""<>|

## Why does web tamper proofing remain disabled after I specify a protected directory?

After you specify a protected directory, you must turn on the switch for web tamper proofing and make sure that the Security Center agent runs as expected.

We recommend that you perform the following operations:

-   Check whether the files that you want to protect are added to the protected directory.
    
-   After you specify the protected directory, check whether the switch for web tamper proofing is turned on.
    
    You must turn on the switch before web tamper proofing can protect the specified directory.
    
-   Check whether the Security Center agent runs as expected.
    
    You can log on to the [Security Center console](https://yundun.console.alibabacloud.com/?p=sas), choose **Protection Configuration** > **Host Protection** > **Web Tamper Proofing**, and then click the **Management** tab to view the status of the Security Center agent on a server.
    
    If the status is **Exception**, we recommend that you turn on the switch in the Protection column for the server again. If the status is **Offline**, we recommend that you reinstall the Security Center agent for the server. For more information, see [Install the Security Center agent](/help/en/security-center/user-guide/install-the-security-center-agent#concept-dl4-ykc-zdb).
    
-   Check whether the server has sufficient disk capacity. If the server does not have sufficient disk capacity, clean up the disk at the earliest opportunity.
    

## Can I write files to a protected directory on a server for which web tamper proofing is configured?

No, you cannot activate Security Center only for specific Elastic Compute Service (ECS) instances within your Alibaba Cloud account. After you configure web tamper proofing for a server to specify a protected directory, you cannot write files to the directory.

For more information about how to write files to the protected directory, see [After I enable web tamper proofing, what do I do if the website content and images cannot be modified?](#section-ysv-ggq-8vq)

## After I specify a protected directory, what do I do if web tamper proofing does not immediately take effect?

After you specify a protected directory, web tamper proofing does not immediately take effect and you can still write files to the directory. To enable web tamper proofing, you must go to the **Management** tab, turn off **Protection** for the server where the directory is located, and then turn on **Protection** again.

## I logged on to my server over SSH and modified the files that are protected by web tamper proofing, but I do not receive alert notifications. Why?

If you log on to your server for which web tamper proofing is enabled by using SSH and modify a file in the protected directory of the server, alerts for the modifications are not generated on the **Tamper Protection** page. The following list describes the possible causes:

-   **Protection** is turned off.
    
-   You have modified the settings of the protected directory on a server for which **Protection** is turned on. After the modification, you do not turn on **Protection** again to enable web tamper proofing.
    
-   The protected file is added to the whitelist of web tamper proofing.
    
    Files in the whitelist are trusted. Therefore, web tamper proofing does not block or generate alerts for modifications on the files. For more information, see [Add blocked processes to a whitelist](/help/en/doc-detail/151201.html#task-2398173).
    
-   The kernel version of your server is not supported by web tamper proofing.
    
    If an attempt is made to modify the files in the protected directory, web tamper proofing blocks the modification and does not generate alerts.
    
    **Note**
    
    After you modify a file in your server and save the modification, you can view that the modification was blocked by web tamper proofing in the handled alert list of the **Tamper Protection** page. You can log on to your server and view that the modification on the file does not take effect.
    

## After I enable web tamper proofing, what do I do if the website content and images cannot be modified?

You can use one of the following two methods to resolve this issue:

-   Disable web tamper proofing and update the website content. After the update is complete, enable web tamper proofing. For more information about how to enable web tamper proofing, see [Use the feature of web tamper proofing](/help/en/security-center/user-guide/use-the-feature-of-web-tamper-proofing#task-2233603).
    
-   Exclude the website paths to files that you want to modify from the protected directory.
    

**Note**

Web tamper proofing allows you to add Linux and Windows processes to a whitelist. This ensures that protected files are updated in real time. For more information, see [Add blocked processes to a whitelist](/help/en/doc-detail/151201.html#task-2398173).

## What do I do if I receive an email or text message that notifies me of a webshell detected on my server?

If you receive an email or text message that notifies you of a webshell detected on your server, your server is attacked. A webshell file is also implanted into the server. The attacker may manipulate the data on your website or database. You can quarantine the webshell file in Security Center. We recommend that you locate and fix the vulnerability. Otherwise, the attacker may exploit the vulnerability.

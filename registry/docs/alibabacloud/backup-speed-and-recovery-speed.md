This topic lists the backup and recovery speeds measured in a lab environment, provided for your reference only.

**Important**

-   The backup and recovery speeds in this topic are measured in an ideal lab environment with high-performance CPUs, adequate memory, and bandwidth, serving as a benchmark reference. Actual speeds may vary based on specific conditions.
    
-   For local databases, backup and recovery speeds can differ due to hardware configuration, disk performance, and network conditions.
    
-   When network bandwidth is sufficient, the backup and recovery speeds for on-premises files and ECS files① are the same, and the backup and recovery speeds for on-premises databases and cloud databases are the same.
    
-   The following tables show the backup speed during the first full backup. The backup speed is higher if an incremental backup is performed.
    

## File backup

**Type**

**5-MB file**

**500-KB file**

**10-KB file**

**Backup speed (MB/s)**

**Recovery speed (MB/s)**

**Backup speed (MB/s)**

**Recovery speed (MB/s)**

**Backup speed (MB/s)**

**Recovery speed (MB/s)**

NAS

120

50

40

40

1

1

Object Storage Service (OSS)

150

65

60

50

2

1

-   Elastic Compute Service (ECS) files①
    
-   On-premises files
    

110

60

45

40

1.5

1.2

**Note**

-   Annotation ① indicates the backup and recovery rates for ECS files backed up using the [ECS File Backup](/help/en/cloud-backup/user-guide/ecs-file-backup-new/) or [ECS Backup Essential Edition](/help/en/cloud-backup/user-guide/functional-overview).
    
-   The backup and recovery rate for [ECS File Backup Essential Edition](/help/en/cloud-backup/user-guide/ecs-file-backup-essential-edition) depends on the backup execution priority.
    
    -   High priority: The maximum backup and recovery throughput is 30 MB/s, using up to 2 vCPU cores.
        
    -   Low priority: The maximum backup and recovery throughput is 10 MB/s, using 1 vCPU core.
        

## Application backup

**Type**

**Backup speed (MB/s)**

**Recovery speed (MB/s)**

SAP HANA

380

220

## Database backup

**Type**

**Backup speed (MB/s)**

**Recovery speed (MB/s)**

-   ECS-hosted databases: MySQL, Oracle, and SQL Server
    
-   On-premises databases: MySQL, Oracle, and SQL Server
    

150

100

## **ECS instance backup or disk backup**

ECS instance backup and disk backup are implemented based on the snapshots of ECS instances. Snapshots can be created within a few **minutes**, depending on the amount of data written to the disk (including dirty data). The first snapshot of each disk is a full snapshot and takes longer to create than subsequent snapshots. Subsequent snapshots of the disk are incremental snapshots and do not take as long to be created as the full snapshot. The amount of time required varies based on the amount of data that is modified from the previous snapshot. As the amount of modified data increases, the amount of time required to create an incremental snapshot increases. The recovery operation can also be completed within a few minutes. Generally, you can quickly complete data recovery by clicking Restore in the console.

## **Resources required for backup**

The CPU and memory resources required for backup varies depending on the data volume. The following table describes the recommended configurations.

**Backup type**

**Data volume**

**CPU**

**Memory**

File backup

100,000 files

Dual-core

4 GB

1 million files (8 TB in total)

Dual-core

8 GB

10 million files

Quad-core

16 GB

VMware VM backup

N/A

Quad-core

16 GB

If you have special requirements for backup speeds, contact Cloud Backup technical support or join the DingTalk group.

-   **Cloud Backup Technical Support Group**
    
    Obtain quick answers to questions about costs, features, and usage. Search for the public DingTalk group and join. The DingTalk group number is 88650005148.
    
-   **Cloud Backup Expert Support**
    
    Technical experts provide on-site analysis to quickly resolve product issues. [Click to contact Cloud Backup support](dingtalk://dingtalkclient/action/sendmsg?dingtalk_id=d37_g935gslgo). We recommend that you use Chrome. Add the DingTalk contact. The DingTalk ID is d37\_g935gslgo.

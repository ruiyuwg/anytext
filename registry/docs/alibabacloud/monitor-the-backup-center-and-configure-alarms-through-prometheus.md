You can integrate the backup center with Managed Service for Prometheus and use Managed Service for Prometheus to monitor the status of backup vaults and tasks in real-time. This topic describes how to monitor the backup center and how to configure alerting.

## Prerequisites

-   The backup service component migrate-controller is installed and the version of the component is v1.7.10 or later. For more information, see [Install migrate-controller and grant permissions](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-migrate-controller-and-grant-permissions#p-03o-ytu-30t) and [Manage components](/help/en/ack/manage-system-components).
    
-   You cannot install the latest migrate-controller version in clusters that run a Kubernetes version earlier than 1.20. To use the backup center monitoring feature, update the Kubernetes version of your cluster first. For more information, see [Manually update a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/update-the-kubernetes-version-of-an-ack-cluster).
    
-   [Managed Service for Prometheus](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-managed-service-for-prometheus-to-monitor-an-ack-cluster#task-2461398) is enabled for the cluster.
    

## Billing

The migrate-controller component sends metrics to Managed Service for Prometheus. These metrics are considered [custom metrics](/help/en/arms/prometheus-monitoring/basic-metrics/). Using custom metrics incurs additional fees.

We recommend that you read [Metrics](/help/en/arms/prometheus-monitoring/product-overview/billing-overview-2) before enabling the backup center monitoring feature to learn the billing rules for custom metrics. The fees may vary based on the cluster size and number of applications. You can also [view resource usage](/help/en/arms/prometheus-monitoring/product-overview/view-resource-usage) in Managed Service for Prometheus.

## Interface the backup center with Managed Service for Prometheus

You can use Managed Service for Prometheus to monitor the status of backup vaults associated with a cluster and the status of backup tasks in the cluster.

1.  Log on to the [ARMS console](https://arms-ap-southeast-1.console.aliyun.com/#/home).
    
2.  In the left-side navigation pane, click **Integration Center**. On the **Infrastructure** tab, search for and click **Ack Backup Center** to go to the integration page.
    
3.  On the **Start Integration** tab, select the Container Service for Kubernetes (ACK) cluster that has the backup center installed and click **OK**.
    
    After the integration is complete, you can log on to the ACK console or ARMS console to view the dashboards.
    

## View backup center dashboards

### **Procedure**

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster you want and click its name. In the left navigation pane, choose **Operations** > **Prometheus Monitoring**.
    
3.  On the **Prometheus Monitoring** page, click the **Others** tab and view the backup center dashboards under the **ACK BackupCenter** tab.
    

**Note**

For more information about how to view the backup center dashboards in the ARMS console, see [View a dashboard](/help/en/arms/prometheus-monitoring/search-out-of-the-box-with-a-large-tray).

### **Dashboard introduction**

The following backup center dashboards are supported: Backup Locations (backup vault information), Backup Operation Status (backup task information), and Addon Status (working component information).

**Backup Locations**

This dashboard displays the detailed information (Backuplocation Detail) about backup vaults associated with the current cluster. ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6272271271/p816400.png)

A backup vault stores backup files and displays the association between the backup center and an Object Storage Service (OSS) bucket. The backup center can perform backup, snapshot, and restore tasks only after a backup vault enters the Available state. The following table describes the Backuplocation Detail metrics.

**Metric**

**Description**

Backuplocation

The name of the backup vault.

OSS Bucket

The name of the OSS bucket associated with the backup vault.

Region

The region of the OSS bucket, such as cn-hangzhou.

NetworkPolicy

The type of the network connection between the backup vault and OSS bucket. Valid values:

-   internal: internal network
    
-   Public: Internet.
    

Phase

The status of the backup vault. Valid values:

-   InProgress: The backup vault is performing an initialization and checking the connectivity to the OSS bucket. This state lasts a short period of time.
    
-   Available: The connectivity to the OSS bucket is normal. The OSS bucket is available for backup tasks.
    
-   Unavailable: The backup vault is disconnected from the OSS bucket. The OSS bucket is unavailable for backup tasks.
    

**Backup Operation Status**

This dashboard displays the status of backup tasks, including an overview of all backup tasks (Backup Overview) and the details of failed backup tasks (Failed Backup Detail).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6272271271/p816414.png)

-   **Backup Overview**: displays the number of backup tasks created in each backup vault in the current cluster through a histogram. The backup tasks include instant backup tasks and scheduled backup tasks. The X axis displays the names of backup vaults and the Y axis displays the number of backup tasks in each backup vault. The following table describes the Backup Overview metrics.
    
    **Metric**
    
    **Description**
    
    Backup (Failed)
    
    The red bar displays the number of failed backup tasks.
    
    Backup (Completed)
    
    The green bar displays the number of successful backup tasks.
    
-   **Failed Backup Detail**: displays the basic information of failed backup tasks in the current cluster. The following table describes the Failed Backup Detail metrics.
    
    **Metric**
    
    **Description**
    
    Backup
    
    The name of the backup task.
    
    Backuplocation
    
    The name of the backup vault to which the backup task belongs.
    
    BackupType
    
    The backup mode of the backup task. Valid values:
    
    -   AppBackup: creates only application backups (YAML backups).
        
    -   AppAndPvBackup: creates application and data backups. YAML files and data stored in persistent volumes (PVs) are backed up.
        
    
    DataType
    
    The type of data backups. Valid values:
    
    -   snapshot: The PVs are disk volumes.
        
    -   hbr: The PVs are file system volumes, including HostPath local volumes, NAS volumes, and OSS volumes.
        
    -   all: The PVs include disk volumes and file system volumes.
        
    -   none: Data backup is enabled. However, no PV is used in the specified namespace.
        
    
    FromSchedule
    
    The type of the backup task. Valid values:
    
    -   Empty: instant backup task.
        
    -   Not empty: scheduled backup task. The name of the backup plan is displayed.
        
    

**Addon Status**

This dashboard displays the status of the csdr-controller and csdr-velero working components. Make sure that the working components run as normal so that the backup center can run backup, snapshot, and restore tasks.

After the backup center component migrate-controller is installed, it runs a precheck on the cluster. After the precheck is complete, migrate-controller deploys the csdr-controller and csdr-velero working components in the csdr namespace of the backup center.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6272271271/p816543.png)

The csdr-controller and csdr-velero working components run in Deployment pods. The following table describes the Addon Status metrics.

**Metric**

**Description**

Age

The uptime of the working component.

Status

The status of the working component. Valid values:

-   Health: The pod of the working component runs as normal.
    
-   UnHealth: The pod of the working component cannot be started or probing failed.
    

Pods

The detailed information of the working component pod.

Memory Request

The amount of memory resources reserved for the working component.

CPU Request

The amount of CPU resources reserved for the working component.

Memory Limit

The memory upper limit of the working component.

CPU Limit

The CPU upper limit of the working component.

## Configure alerting for backup task failures

Alerts for backup task failures are event alerts. A applicationbackups CustomResourceDefinition (CRD) in the csdr.alibabacloud.com resource group is created for each backup task. When the backup task fails, the CRD generates a WARN event.

#### Query WARN events generated for failed backup tasks

Run the following command to query WARN events generated for failed backup tasks:

```
kubectl -n csdr get events --field-selector='type!=Normal' 
```

Expected output:

```
VaultError: backup vault is unavailable: oss: service returned error: StatusCode=403, ErrorCode=AccessDenied, ErrorMessage="The bucket you access does not belong to you.", RequestId=668516BC35F915******
```

VaultError displays the cause of failure.

#### Configure alert rules to generate WARN events for backup task failures

Use the alerting feature of ACK clusters to configure alert rules. For more information, see [Container Service alert management](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/alert-management#section-0a0-lrp-6bg).

## Analyze abnormal monitoring data

### **Troubleshoot the issue that a working component does not exist or in the abnormal state (UnHealth)**

-   After the backup center is installed, the working component cannot be found or is repeatedly deployed.
    
    Run the following command to query the status of the migrate-controller component:
    
    ```
    kubectl -n kube-system get pod -l app=migrate-controller
    ```
    
    If the component is in the `CrashLoopBackOff` state or keeps restarting, the cluster fails to pass the precheck. Typically, this issue occurs because the cluster uses FlexVolume or the registered cluster does not have the required permissions. For more information, see [Backup center FAQ](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-the-backup-center#section-fgd-bz0-jf3) and [Registered cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/install-migrate-controller-and-grant-permissions#50a56040f4q4q).
    
-   The UnHealth state of the working component lasts a long period of time. The pod dashboard does not display any data or abnormal states.
    
    The pod of the working component cannot be started. For more information, see [Pod troubleshooting](/help/en/ack/ack-managed-and-ack-dedicated/support/pod-troubleshooting).
    
-   The working component is in the Health state but the number of restarts displayed in the pod dashboard is not 0.
    
    The memory usage of the csdr-velero component experiences a spike during the backup process. In this scenario, Out-of-Memory (OOM) errors can easily occur, which cause the component to exceptionally exit. You can increase the memory usage to resolve this issue.
    
    **Note**
    
    If the pod of the working component exceptionally exits during the backup process, the backup task will fail or remain in the InProgress state for a long period of time.
    

### **Troubleshoot the issue that the backup vault is in the abnormal state (**Unavailable**)**

Run the following command to view the error message.

Replace `<unavailable-backuplocation-name>` with the name of the backup vault in the abnormal state.

```
kubectl -n csdr describe backuplocation <unavailabe-backuplocation-name> 
```

For more information about troubleshooting backup vault exceptions, see [Backup center FAQ](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-the-backup-center#p-3u6-yij-adt).

### **Troubleshoot backup task failures**

## Use the CLI

Run the following command to view the error message.

Replace `<failed-applicationbackup-name>` with the name of the failed backup task.

```
kubectl -ncsdr describe applicationbackup <failed-applicationbackup-name> 
```

For more information about troubleshooting backup task failures, see [Backup center FAQ](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/faq-about-the-backup-center).

## Use the console

1.  Log on to the [ACK console](https://cs.console.alibabacloud.com). In the left navigation pane, click **Clusters**.
    
2.  On the **Clusters** page, find the cluster you want and click its name. In the left navigation pane, choose **Operations** > **Application Backup**.
    
3.  On the **Application Backup** page, click the **Backup Records** tab, find the failed backup task, and click **Failed** in the **Status** column to view the error message.

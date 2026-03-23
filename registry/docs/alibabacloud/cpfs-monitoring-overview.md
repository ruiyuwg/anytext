You can view the capacity and performance information of a Cloud Parallel File Storage (CPFS) General-purpose Edition file system to understand its storage capacity usage, read/write throughput, and read/write input/output operations per second (IOPS). You can also set alert rules for important file system metrics to receive prompt notifications about exceptions and handle them quickly. This topic describes the metrics and alert rule configurations supported by CPFS General-purpose Edition.

## Background information

CloudMonitor is a service that monitors Internet applications and Alibaba Cloud resources. You can use CloudMonitor to monitor the metrics of Alibaba Cloud resources and configure alert rules for specific metrics. This way, you can monitor the usage of your Alibaba Cloud resources and the status of your applications. You can also handle alerts at the earliest opportunity to ensure the availability of your applications. For more information, see [What is CloudMonitor?](/help/en/cms/cloudmonitor-1-0/product-overview/what-is-cloudmonitor#concept-2452587)

## Retention policy of monitoring data

Monitoring data is retained for 90 days. After the retention period expires, the monitoring data is automatically cleared. The retention period starts when data is generated.

## Metrics

CPFS uses CloudMonitor to monitor the capacity of file system instances. It also monitors the performance of file system instances and NFS protocol services.

### Capacity monitoring

**Note**

-   Capacity monitoring is supported only for CPFS General-purpose Edition V2.3.1 and later. In the [NAS console](https://nas.console.alibabacloud.com/), go to the File Systems page. Click the name of the target CPFS General-purpose Edition file system to view its version on the Basic Information page.
    
-   The root fileset is the root directory of the file system. All files that are not in independently created filesets belong to the root fileset.
    

**Type**

**Metric**

**Metric name**

**Unit**

**Description**

File system

CPFSCapacity

Total storage capacity

Bytes

The total storage capacity of the file system during an epoch.

CPFSCapacityUsed

Data volume

Bytes

The actual data volume used by the file system during an epoch.

CPFSInode Limit

Maximum number of files

Unit

The maximum number of files that can be used in the file system during an epoch.

CPFSInode Alloc

Number of allocated files

Unit

The number of files allocated in the file system during an epoch.

CPFSInode Used

Number of used files

Unit

The number of files used in the file system during an epoch.

Fileset

FsetInode Used

Number of used files in the fileset

item

The number of files used in the fileset during an epoch.

FsetInode Alloc

Number of allocated files in the fileset

Unit

The number of files allocated in the fileset during an epoch.

### Performance monitoring

**Type**

**Metric**

**Metric name**

**Unit**

**Description**

File system

ThruputRead

Read throughput

Bytes/s

The average read throughput in bytes per second for the file system during an epoch.

ThruputWrite

Write throughput

Bytes/s

The average write throughput in bytes per second for the file system during an epoch.

IopsRead

Read IOPS

Count/s

The average number of read I/O operations per second for the file system during an epoch.

IopsWrite

Write IOPS

Count/s

The average number of write I/O operations per second for the file system during an epoch.

LatencyRead

Read latency

ms

The average read latency in milliseconds for the file system during an epoch.

LatencyWrite

Write latency

ms

The average write latency in milliseconds for the file system during an epoch.

QpsMeta

Metadata QPS

Count/s

The average number of metadata requests per second for the file system during an epoch, such as open, close, stat, create, and chmod.

NFS protocol service

NFSReadThroughput

NFS read throughput

Bytes/s

The average read throughput in bytes per second for the NFS protocol service during an epoch.

NFSWriteThroughput

NFS write throughput

Bytes/s

The average write throughput in bytes per second for the NFS protocol service during an epoch.

NFSRead IOPS

NFS read IOPS

Count/s

The average number of read I/O operations per second for the NFS protocol service during an epoch.

NFSWrite IOPS

NFS write IOPS

Count/s

The average number of write I/O operations per second for the NFS protocol service during an epoch.

## Alert rules

You can configure alert rules for various metrics in the CloudMonitor console. If the metric value of a resource meets the alert condition, CloudMonitor automatically sends notifications to the specified recipients. The following table describes the alert severity, notification methods, and alert condition that you can configure in alert rules.

**Alert severity**

**Notification method**

**Alert condition**

Critical

Phone call, Short Message Service (SMS) message, Email, and DingTalk chatbot

The average value of the metric reaches the specified threshold for consecutive N cycles. You can configure the value of N based on the alert severity.

**Note**

The alert condition varies based on the type of the metric that is used.

Warning

SMS message, Email, and DingTalk chatbot

Info

Email and DingTalk chatbot

## What to do next

-   [View CPFS capacity monitoring data](/help/en/cpfs/cpfsonecs/user-guide/view-the-capacity-monitoring-data-of-a-cpfs-file-system)
    
-   [View CPFS performance monitoring data](/help/en/cpfs/cpfsonecs/user-guide/view-the-performance-monitoring-data-of-a-cpfs-file-system)
    
-   [Configure basic alert rules](/help/en/cpfs/cpfsonecs/user-guide/configure-a-basic-alert-rule)
    
-   [Configure advanced alert rules](/help/en/cpfs/cpfsonecs/user-guide/configure-an-advanced-alert-rule)

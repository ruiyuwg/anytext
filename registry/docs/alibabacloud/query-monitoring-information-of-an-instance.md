You can monitor the health status of your Elastic Compute Service (ECS) instances to ensure that your users can always access your websites and applications, process data, or render videos. Alibaba Cloud allows collection and visualization of monitoring data, and provides real-time alerts to help ensure that your ECS instances run as expected.

## Background information

You can monitor your ECS instances in the ECS or CloudMonitor console.

-   ECS console: You can monitor vCPU utilization, network traffic, and disk I/O operations.
    
-   CloudMonitor console: You can monitor resources in a more fine-grained manner.
    

## **Metrics**

The following section describes the monitoring metrics for ECS instances:

-   vCPU utilization: the percentage of allocated compute units that are in use on an ECS instance. A higher percentage indicates a higher vCPU load on the instance. You can view the monitoring data of an ECS instance in the ECS or CloudMonitor console or by calling ECS API operations. You can also connect to an ECS instance to view the monitoring data of the instance.
    
    To view the vCPU utilization of an ECS instance after you connect to the instance, you can use one of the following methods:
    
    -   Windows instance: View the vCPU utilization in **Task Manager**. You can sort processes by vCPU utilization to identify processes that consume the vCPUs of the instance.
        
    -   Linux instance: Run the top command on the instance to view the vCPU utilization of the instance. Press **Shift**+**P** to sort processes by vCPU utilization and identify processes that consume the vCPUs of the ECS instance.
        
-   Network traffic-related metrics: the inbound and outbound bandwidth usages of the ECS instance in Kbit/s.
    
    ECS monitors public bandwidth usage. CloudMonitor monitors public and internal bandwidth usage. If an outbound public bandwidth of 1 Mbit/s is allocated to an ECS instance and the outbound public bandwidth usage by the instance reaches 1,024 Kbit/s, the allocated outbound public bandwidth is considered to be fully utilized.
    
    **Note**
    
    The monitoring data of public bandwidth over the classic network does not include back-to-origin traffic. You can view the complete monitoring data in the [CloudMonitor console](https://cloudmonitor.console.alibabacloud.com/).
    

## View monitoring data in the ECS console

1.  Go to [ECS console - Instances](https://ecs.console.alibabacloud.com/server/region).
    
2.  In the top navigation bar, select the region and resource group of the resource that you want to manage. ![Region](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8343404471/p680076.png) 
    
3.  Find the ECS instance whose monitoring data you want to view and click the instance ID. On the **Instance Details** page, click the **Monitoring** tab.
    
4.  Specify a time range to query the monitoring data of the instance, such as vCPU utilization and memory usage.
    
    The granularity of the displayed data varies based on the length of the specified time range. A shorter time range indicates a higher resolution of displayed data. For example, the aggregation interval is different for a 1-hour period and a 6-hour period, which results in different average values. You can specify a time range based on your business requirements.
    
    ![实例监控](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0160029661/p499177.png)
    
    **Note**
    
    You can also call ECS API operations, such as DescribeInstanceMonitorData, DescribeDiskMonitorData, and DescribeEniMonitorData, to query monitoring data.
    

The monitoring data of an ECS instance that you can view in the ECS console varies based on whether the CloudMonitor agent is installed on the instance.

-   If the CloudMonitor agent is installed on the ECS instance, the operating system metrics from CloudMonitor are displayed in the ECS console, and the data of the other metrics displayed in the ECS console is the same as the data of basic metrics displayed in the CloudMonitor console. CPU utilization, memory usage, and system load are operating system metrics for which data is obtained from instance operating systems.
    
-   If the CloudMonitor agent is not installed on the ECS instance, the data of metrics in the ECS console is the same as the data of basic metrics in the CloudMonitor console.
    
    **Note**
    
    Operating system metrics are collected every 15 seconds. Basic metrics are collected every 1 minute. For more information, see [Operating system monitoring](/help/en/cms/cloudmonitor-1-0/user-guide/operating-system-monitoring#concept-gdq-tgc-5db).
    
    The following table describes the metrics of ECS instances on which the CloudMonitor agent is not installed. The data collection interval is 1 minute.
    
    **Metric Name**
    
    **Metric descriptions**
    
    **Unit**
    
    **MetricName**
    
    **Dimensions**
    
    **Statistics**
    
    (ECS) CPU utilization
    
    CPU usage
    
    %
    
    CPUUtilization
    
    userId, instanceId
    
    Maximum, Minimum, Average
    
    (ECS) Inbound Internet bandwidth (classic network)
    
    Average rate of inbound Internet traffic
    
    bit/s
    
    InternetInRate
    
    userId, instanceId
    
    Maximum, Minimum, Average
    
    (ECS) Inbound private network bandwidth
    
    Average rate of inbound private network traffic
    
    bit/s
    
    IntranetInRate
    
    userId, instanceId
    
    Maximum, Minimum, Average
    
    (ECS) Outbound Internet bandwidth (classic network)
    
    Average rate of outbound Internet traffic
    
    bit/s
    
    InternetOutRate
    
    userId, instanceId
    
    Maximum, Minimum, Average
    
    (ECS) Outbound private network bandwidth
    
    Average rate of outbound private network traffic
    
    bit/s
    
    IntranetOutRate
    
    userId, instanceId
    
    Maximum, Minimum, Average
    
    (ECS) Read BPS for all disks
    
    Total bytes read from the system disk per second
    
    Byte/s
    
    DiskReadBPS
    
    userId, instanceId
    
    Maximum, Minimum, Average
    
    (ECS) Write BPS for all disks
    
    Total bytes written to the system disk per second
    
    Byte/s
    
    DiskWriteBPS
    
    userId, instanceId
    
    Maximum, Minimum, Average
    
    (ECS) Read IOPS for all disks
    
    Read IOPS for all disks
    
    counts/s
    
    DiskReadIOPS
    
    userId, instanceId
    
    Maximum, Minimum, Average
    
    (ECS) Write IOPS for all disks
    
    Write IOPS for all disks
    
    counts/s
    
    DiskWriteIOPS
    
    userId, instanceId
    
    Average, Minimum, Maximum
    
    (ECS) Inbound Internet bandwidth by IP address
    
    Inbound Internet bandwidth
    
    bit/s
    
    VPC\_PublicIP\_InternetInRate
    
    userId, instanceId, ip
    
    Maximum, Minimum, Average
    
    (ECS) Outbound Internet bandwidth by IP address
    
    Outbound Internet bandwidth
    
    bit/s
    
    VPC\_PublicIP\_InternetOutRate
    
    userId, instanceId, ip
    
    Maximum, Minimum, Average
    
    (ECS) Outbound Internet bandwidth utilization by IP address
    
    Outbound Internet bandwidth usage
    
    %
    
    VPC\_PublicIP\_InternetOutRate\_Percent
    
    userId, instanceId, ip
    
    Average
    
    (ECS) Inbound Internet traffic (classic network)
    
    Inbound Internet traffic
    
    Byte
    
    InternetIn
    
    userId, instanceId
    
    Average, Minimum, Maximum, Sum
    
    (ECS) Outbound Internet traffic (classic network)
    
    Outbound Internet traffic
    
    Byte
    
    InternetOut
    
    userId, instanceId
    
    Maximum, Minimum, Average
    

## View monitoring data in the CloudMonitor console

CloudMonitor provides end-to-end and out-of-the-box monitoring solutions for enterprises in the cloud. CloudMonitor provides the host monitoring service to monitor ECS instances. For more information about the host monitoring service, see [Overview](/help/en/cms/cloudmonitor-1-0/overview-8#concept-ypb-thv-vdb). For information about the host monitoring metrics, see [Operating system monitoring](/help/en/cms/cloudmonitor-1-0/user-guide/operating-system-monitoring#concept-gdq-tgc-5db).

**Note**

To monitor the utilization of various cloud resources, create alert rules in the CloudMonitor console. If resource metrics meet specific alert conditions, alerts are triggered and CloudMonitor sends alert notifications. This way, you can identify and handle monitoring data exceptions at the earliest opportunity. For more information, see [Create an alert rule](/help/en/cms/cloudmonitor-1-0/user-guide/create-an-alert-rule).

1.  Log on to the [CloudMonitor console](https://cloudmonitor.console.alibabacloud.com/).
    
2.  In the left-side navigation pane, click **Host Monitoring**.
    
3.  **(Optional)** On the **Host Monitoring** page, find and select the ECS instance whose monitoring data you want to view. In the lower part of the page, click **Batch Install** and then click **OK**.
    
    If the CloudMonitor agent is not installed on the ECS instance, you can install the agent on the instance. For more information, see [Manage a Cloud Monitor agent](/help/en/cms/cloudmonitor-1-0/user-guide/install-and-uninstall-the-cloudmonitor-agent-for-cpp#task-1950491).
    
    -   If the CloudMonitor agent is not installed on the ECS instance, you can view only basic metrics in the CloudMonitor console.
        
    -   If the CloudMonitor agent is installed on the ECS instance, you can view basic metrics and operating system metrics in the CloudMonitor console.
        
    
4.  On the Host Monitoring page, click the ID of the ECS instance whose monitoring data you want to view. On the **Basic Monitoring** and **OS Monitoring** tabs, view monitoring data.
    
    **Note**
    
    Monitoring data can be retained for up to 30 days.
    

## References

-   [DescribeInstanceMonitorData](/help/en/ecs/api-describeinstancemonitordata#doc-api-Ecs-DescribeInstanceMonitorData)
    
-   [DescribeDiskMonitorData](/help/en/ecs/api-describediskmonitordata#doc-api-Ecs-DescribeDiskMonitorData)
    
-   [DescribeEniMonitorData](/help/en/ecs/api-describeenimonitordata#doc-api-Ecs-DescribeEniMonitorData)

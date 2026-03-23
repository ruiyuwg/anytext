Simple Log Service allows you to collect metric data from hosts by using Logtail. The metric data includes CPU, memory, load, disk, and network data. This topic describes how to use Logtail to collect metric data from hosts.

## Prerequisites

A project and a Metricstore are created. For more information, see [Create a project](/help/en/sls/manage-a-project/#section-ahq-ggx-ndb) and [Create a Metricstore](/help/en/sls/manage-a-metricstore#section-8ju-apk-egg).

## Limits

-   Windows servers are not supported.
    
-   Metric data about GPUs and hardware status cannot be collected.
    
-   Only Linux Logtail V0.16.40 and later can collect host metric data. If you have installed an earlier version of Logtail on your server, you must update Logtail to a supported version. For more information, see [Install Logtail on a Linux server](/help/en/sls/install-logtail-on-a-linux-server#section-jcz-xmv-vdb).
    

## Procedure

1.  Log on to the [Simple Log Service console](https://sls.console.alibabacloud.com).
    
2.  In the **Import Data** section, click the **Monitoring Data** tab. Then, click **Host Monitoring Data**.
    
3.  Select the project and Metricstore. Then, click **Next**.
    
4.  Create a machine group.
    
    -   If a machine group is available, click **Use Existing Machine Groups**.
        
    -   If no machine groups are available, perform the following steps to create a machine group. In this example, an Elastic Compute Service (ECS) instance is used.
        
        1.  On the **ECS Instances** tab, select Manually Select Instances. Then, select the ECS instance that you want to use and click **Create**.
            
            For more information, see [Install Logtail on ECS instances](/help/en/sls/install-logtail-on-ecs-instances#task-2561331).
            
            **Important**
            
            If you want to collect logs from an ECS instance that belongs to a different Alibaba Cloud account than Simple Log Service, a server in a data center, or a server of a third-party cloud service provider, you must manually install Logtail. For more information, see [Install Logtail on a Linux server](/help/en/sls/install-logtail-on-a-linux-server#concept-u5y-3lv-vdb). After you manually install Logtail, you must configure a user identifier for the server. For more information, see [Configure a user identifier](/help/en/sls/configure-a-user-identifier#task-arl-ynt-qy).
            
        2.  After Logtail is installed, click **Complete Installation**.
            
        3.  In the **Create Machine Group** step, configure the **Name** parameter and click **Next**.
            
            Simple Log Service allows you to create IP address-based machine groups and custom identifier-based machine groups. For more information, see [Create an IP address-based machine group](/help/en/sls/create-an-ip-address-based-machine-group#task-wc3-xn1-ry) and [Create a custom identifier-based machine group](/help/en/sls/create-a-user-defined-identity-machine-group#concept-gyy-k3q-zdb).
            
    
5.  Select the new machine group from **Source Server Groups** and move the machine group to **Applied Server Groups**. Then, click **Next**.
    
    **Important**
    
    If you apply a machine group immediately after you create the machine group, the heartbeat status of the machine group may be **FAIL**. This issue occurs because the machine group is not connected to Simple Log Service. To resolve this issue, you can click **Automatic Retry**. If the issue persists, see [What do I do if no heartbeat connections are detected on Logtail?](/help/en/sls/troubleshoot-the-errors-related-to-logtail-machine-groups#concept-nfs-hs3-bfb)
    
6.  In the **Configure Data Source** step, configure the **Configuration Name** and **Plug-in Configuration** parameters. Then, click **Next**.
    
    inputs is required and is used to configure the data source settings for the Logtail configuration.
    
    **Important**
    
    You can specify only one type of data source in the inputs parameter.
    
    ```
    {
        "inputs": [
            {
                "detail": {
                    "IntervalMs": 30000
                },
                "type": "metric_system_v2"
            }
        ]
    }
    ```
    
    **Parameter**
    
    **Type**
    
    **Required**
    
    **Description**
    
    type
    
    string
    
    Yes
    
    The type of the data source. Set the value to metric\_system\_v2.
    
    IntervalMs
    
    int
    
    Yes
    
    The interval between two consecutive requests. Unit: milliseconds. The value must be greater than or equal to 5000. We recommend that you set the value to 30000.
    

## What to do next

-   Query and analysis
    
    After metric data is collected, you can query and analyze the data on the query and analysis page of the Metricstore. For more information, see [Query and analyze metric data](/help/en/sls/query-and-analyze-metric-data#task-2539642).
    
    For more information about host metrics, see [Metrics](#section-ofp-exd-8yb).
    
-   Visualization on Simple Log Service
    
    Simple Log Service automatically creates a host monitoring dashboard in the project. In the dashboard, you can view query and analysis results, configure alerts, and perform other operations. ![主机监控](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7762037361/p128234.png)
    
-   Visualization on Grafana
    
    Simple Log Service provides a Grafana dashboard template for host metric data. You can view query and analysis results on a Grafana dashboard. For more information, see [Use Prometheus to collect Kubernetes metric data](/help/en/sls/use-prometheus-to-collect-kubernetes-metric-data#task-2538952). For more information about the Grafana dashboard template, see [1 Host metric monitoring of Simple Log Service v2020.08.08](https://grafana.com/grafana/dashboards/12798).
    

## Metrics

The following tables describe metrics, including the metrics that are related to CPUs, memory, loads, disks, and networks.

-   CPU-related metrics
    
    **Metric**
    
    **Description**
    
    **Unit**
    
    **Example value**
    
    cpu\_count
    
    The number of CPU cores.
    
    N/A
    
    2.0
    
    cpu\_util
    
    The CPU utilization. The CPU utilization equals one minus the sum of the idle, wait, and steal counters.
    
    Percent (%)
    
    7.68
    
    cpu\_guest\_util
    
    The guest counter of Linux. This counter indicates the percentage of the time that the CPU spends on processes of the normal priority.
    
    Percent (%)
    
    0.0
    
    cpu\_guestnice\_util
    
    The guest\_nice counter of Linux. This counter indicates the percentage of the time that the CPU spends on processes of the niced priority.
    
    Percent (%)
    
    0.0
    
    cpu\_irq\_util
    
    The irq counter of Linux. This counter indicates the percentage of the time that the CPU spends serving hardware interrupt requests.
    
    Percent (%)
    
    0.0
    
    cpu\_nice\_util
    
    The nice counter of Linux. This counter indicates the percentage of the time that the CPU spends on user-mode processes of the niced priority.
    
    Percent (%)
    
    0.0
    
    cpu\_softirq\_util
    
    The softirq counter of Linux. This counter indicates the percentage of the time that the CPU spends serving software interrupt requests.
    
    Percent (%)
    
    0.06
    
    cpu\_steal\_util
    
    The steal counter of Linux. This counter indicates the percentage of the time that the CPU spends running other operating systems in a virtual environment.
    
    Percent (%)
    
    0.0
    
    cpu\_sys\_util
    
    The system counter of Linux. This counter indicates the percentage of the time that the CPU spends on kernel-mode processes.
    
    Percent (%)
    
    2.77
    
    cpu\_user\_util
    
    The user counter of Linux. This counter indicates the percentage of the time that the CPU spends on user-mode processes of the normal priority.
    
    Percent (%)
    
    4.84
    
    cpu\_wait\_util
    
    The iowait counter of Linux. This counter indicates the percentage of the time that the CPU spends idling when outstanding disk I/O requests exist.
    
    Percent (%)
    
    0.11
    
-   Memory-related metrics
    
    **Metric**
    
    **Description**
    
    **Unit**
    
    **Example value**
    
    mem\_util
    
    The memory usage.
    
    Percent (%)
    
    51.03
    
    mem\_cache
    
    The amount of the memory that is allocated but unused.
    
    Byte
    
    3566386668.0
    
    mem\_free
    
    The amount of the unused memory.
    
    Byte
    
    177350084.0
    
    mem\_available
    
    The amount of the available memory.
    
    Byte
    
    3699885553.0
    
    mem\_used
    
    The amount of the used memory.
    
    Byte
    
    4041510463.0
    
    mem\_swap\_util
    
    The swap usage.
    
    Percent (%)
    
    0.0
    
    mem\_total
    
    The memory size.
    
    Byte
    
    7919128576.0
    
-   Disk-related metrics
    
    **Metric**
    
    **Description**
    
    **Unit**
    
    **Example value**
    
    disk\_rbps
    
    The amount of data that is read from the disk per second.
    
    Byte/s
    
    8376.81
    
    disk\_wbps
    
    The amount of data that is written to the disk per second.
    
    Byte/s
    
    247633.58
    
    disk\_riops
    
    The number of read operations completed on the disk per second.
    
    Read/s
    
    0.22
    
    disk\_wiops
    
    The number of write operations completed on the disk per second.
    
    Write/s
    
    43.39
    
    disk\_rlatency
    
    The average read latency.
    
    ms
    
    2.83
    
    disk\_wlatency
    
    The average write latency.
    
    ms
    
    2.15
    
    disk\_util
    
    The I/O usage of the disk.
    
    Percent (%)
    
    0.27
    
    disk\_space\_usage
    
    The percentage of the used disk space.
    
    Percent (%)
    
    9.12
    
    disk\_inode\_usage
    
    The percentage of the used index node (inode) space.
    
    Percent (%)
    
    1.18
    
    disk\_space\_used
    
    The amount of the used disk space.
    
    Byte
    
    11068512238.59
    
    disk\_space\_total
    
    The total amount of the disk space.
    
    Byte
    
    126692061184.0
    
    disk\_inode\_total
    
    The total number of inodes.
    
    N/A
    
    7864320.0
    
    disk\_inode\_used
    
    The number of used inodes.
    
    N/A
    
    93054.78
    
-   Network-related metrics
    
    **Metric**
    
    **Description**
    
    **Unit**
    
    **Example value**
    
    net\_drop\_util
    
    The percentage of discarded packets to all packets.
    
    Percent (%)
    
    0.0
    
    net\_err\_util
    
    The percentage of error packets to all packets.
    
    Percent (%)
    
    0.0
    
    net\_in
    
    The amount of data that is received per second.
    
    Byte/s
    
    8440.91
    
    net\_in\_pkt
    
    The number of packets that are received per second.
    
    Packet/s
    
    40.83
    
    net\_out
    
    The amount of data that is sent per second.
    
    Byte/s
    
    12446.53
    
    net\_out\_pkt
    
    The number of packets that are sent per second.
    
    Packet/s
    
    39.95
    
-   TCP-related metrics
    
    **Metric**
    
    **Description**
    
    **Unit**
    
    **Example value**
    
    protocol\_tcp\_established
    
    The number of established connections.
    
    N/A
    
    205.0
    
    protocol\_tcp\_insegs
    
    The number of received packets.
    
    N/A
    
    4654.0
    
    protocol\_tcp\_outsegs
    
    The number of sent packets.
    
    N/A
    
    4870.0
    
    protocol\_tcp\_retran\_segs
    
    The number of re-sent packets.
    
    N/A
    
    0.0
    
    protocol\_tcp\_retran\_util
    
    The percentage of re-sent packets to sent packets.
    
    Percent (%)
    
    0.0
    
-   System-related metrics
    
    **Metric**
    
    **Description**
    
    **Unit**
    
    **Example value**
    
    system\_boot\_time
    
    The system startup time.
    
    s
    
    1578461935.0
    
    system\_load1
    
    The average system load every minute.
    
    N/A
    
    0.58
    
    system\_load5
    
    The average system load every 5 minutes.
    
    N/A
    
    0.68
    
    system\_load15
    
    The average system load every 15 minutes.
    
    N/A
    
    0.60

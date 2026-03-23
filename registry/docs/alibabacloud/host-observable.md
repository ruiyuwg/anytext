Alibaba Cloud Managed Service for Prometheus allows you to use the Node Exporter to collect metrics from an Elastic Compute Service (ECS) instance that runs Linux or Windows, and use the Process Exporter to collect monitoring data of the processes. You can also collect custom metrics that are configured in text files.

## Prerequisites

-   Managed Service for Prometheus is activated. For more information, see [Instance billing](/help/en/arms/prometheus-monitoring/product-overview/billing-description/).
    
-   An ECS instance is created. For more information, see [Create and manage an ECS instance by using the ECS console (express version)](/help/en/ecs/getting-started/create-and-manage-an-ecs-instance-by-using-the-ecs-console).
    
-   Alibaba Cloud Resource Center is activated. For more information, see [Activate Resource Center](/help/en/resource-management/resource-center/user-guide/activate-resource-center).
    

## **Benefits**

Managed Service for Prometheus provides an efficient and easy-to-manage monitoring solution for ECS instances. This solution meets the needs for observability and automated management in modern cloud computing environments.

The host monitoring solution provided by Managed Service for Prometheus allows you to integrate ECS instances, servers in self-managed data centers, and servers from third-party cloud service providers into Managed Service for Prometheus for monitoring. The host monitoring feature can automatically install different types of open source exporters and issue collection configurations for your ECS instances. Managed Prometheus agents can be used for automatic data collection. The collected data are stored and displayed and alert rules are managed in a centralized manner. The automatic service discovery mechanism does not apply to third-party hosts. If you use a third-party host, you must manually install an Alibaba Cloud data collection agent when you integrate the third-party host into Managed Service for Prometheus. This way, monitoring data can be sent to Managed Service for Prometheus for storage.

**Benefit**

**Description**

Host discovery in seconds

-   Adaptability: The automatic service discovery mechanism allows the monitoring system to quickly adapt to changes in cloud resources. This ensures that all running instances are monitored in a timely manner.
    
-   Diversity: Multiple service discovery methods are supported to meet monitoring needs in different scenarios. For example, automatic discovery of services in Kubernetes clusters and the integration of other types of cloud services are supported.
    

Exporter installation in seconds

-   Ready to use: Exporters can be automatically installed. This way, the monitoring system can immediately identify newly started compute nodes and collect the metrics of the compute nodes without any manual operations.
    
-   Comprehensive monitoring: Multiple exporters, including the Node Exporter, the Process Exporter, the GPU Exporter, and exporters for middleware, are provided for comprehensive performance tracking.
    

Metric collection in seconds

-   Simplified configurations: The automated configuration generation feature frees O&M engineers from manual configurations and ensures that the metrics of all nodes and services are accurately collected.
    
-   Flexibility: You can modify the configurations based on your monitoring requirements to keep up with complex and changing monitoring environments.
    

After you create an ECS instance, the ECS instance can be included in the monitoring system within 30 to 60 seconds. The interval at which all metrics of ECS instances are monitored can be flexibly adjusted from 1 to 60 seconds. This helps implement all-around monitoring of ECS instances within seconds.

Serverless agents

-   Centralized management: Managed Prometheus agents are used to manage data collection in a centralized manner. This simplifies the monitoring architecture and improves O&M efficiency. During data collection, your business is not affected.
    
-   High performance: Prometheus agents free you from configuring complex monitoring algorithms. This reduces the possibility of invalid configurations and improves the accuracy and timeliness of data monitoring.
    

Smart metric tags

-   The tags, resource groups, and regions of ECS instances are automatically extracted and injected into the entire metric system.
    
-   You can add custom tags, such as business tags, environment tags, and data source tags, to ECS instances. This improves the flexibility of tag management.
    

Ultra-large-scale data collection and storage

-   Multiple ECS instances can be integrated at a time, including dedicated and shared ECS instances. Hosted resources can be dynamically adjusted based on the number of ECS instances to be integrated. This ensures the timeliness and accuracy of the integration.
    
-   Ultra-large-scale metric storage and high-performance query and display are supported
    

Comprehensive monitoring data from upstream and downstream applications

-   Systematic and comprehensive observability requires the integration of monitoring data from different dimensions and the implementation of end-to-end monitoring. This way, the monitoring system can reflect the health status and performance of the whole application and service ecosystem.
    
-   The monitoring solution provided by Managed Service for Prometheus includes monitoring policies that cover underlying hardware, applications, and external services, such as remote direct memory access (RDMA) networks, Object Storage Service (OSS) buckets, and Redis. This monitoring solution applies to hosts, networks, and dependencies.
    

Process-level monitoring

-   Process-level monitoring allows you to track and analyze running processes on operating systems. This helps you understand the performance and resource utilization of the processes. Process-level monitoring plays a key role in implementing system-level monitoring and is designed to visualize the health status and performance of the applications that run on servers.
    
-   During process-level monitoring, key performance metrics, such as the CPU utilization, memory usage, and disk reads and writes of a process, are captured. Other information, such as the startup time of a process, the number of open file handles, and the number of threads initiated in a process, is also collected. Near real-time monitoring capabilities are provided for immediate feedback. This allows system administrators to identify and resolve issues at the earliest opportunity.
    
-   Process-level monitoring provides administrators with diverse fault diagnosis methods. It helps identify the processes that cause system performance degradation or faults, such as the processes in which memory leaks or resource contention issues occur and the processes that cause high CPU utilization or resource consumption.
    

Grafana dashboards

-   By default, Managed Service for Prometheus is integrated with Grafana dashboards, including the ECS Overview dashboard, ECS Detail dashboard, GPU Overview dashboard, GPU Detail dashboard, and Node Process dashboard.
    
-   ECS instances can be integrated into Managed Service for Prometheus for monitoring within a few clicks, and the monitoring feature can be used out of the box.
    

## **Step 1: Integrate the ECS instances**

1.  Log on to the [ARMS console](https://arms-ap-southeast-1.console.aliyun.com/). In the left-side navigation pane, click **Integration Center**.
    
2.  In the left-side navigation pane of the **Integration Center** page, click **Infrastructure** and then click **Host Monitor**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9705726171/p779330.png)
    
    **Note**
    
    -   Managed Service for Prometheus relies on Resource Center to obtain the data of resources such as virtual private clouds (VPCs) and ECS instances within the current Alibaba Cloud account. If you have not activated Resource Center, you must activate it as prompted. For more information, see [Activate Resource Center](/help/en/resource-management/resource-center/user-guide/activate-resource-center).
        
    -   The activation of Resource Center is an asynchronous operation. If the ARMS console still prompts that Resource Center is still not activated, wait for 10 to 20 seconds and then click **Redetect** again.
        
    
3.  In the panel that appears, select a **VPC** and specify the parameters in the **Configuration Information** section. The following table describes the parameters.
    
    **Parameter**
    
    **Description**
    
    **NodeExporter Installation Mode**
    
    -   **Automatic Installation**(recommended): Managed Service for Prometheus automatically installs the Node Exporter for the ECS instance that you select.
        
    -   **Self Installation**: You must manually install the Node Exporter.
        
    
    **Host Service Discovery Mode**
    
    -   **Stain Label Selection**: the blacklist mode. Specify the ECS instances that you do not want to integrate into Managed Service for Prometheus. The data of ECS instances that are not matched is collected.
        
    -   **Unconditional**: Collect metrics from all ECS instances in the VPC.
        
    -   **Tag Label Selection**: the whitelist mode. Specify the ECS instances that you want to integrate into Managed Service for Prometheus. The data of ECS instances that are not matched is not collected.
        
    -   **IP CIDR**: Specify a CIDR block. If the IP address of an ECS instance is matched, the data of the instance is collected. If you specify the CIDR block of the VPC, the data of all ECS instances in the current VPC is collected.
        
    -   **Instance ID**: Specify the IDs of ECS instances that you want to integrate. Separate multiple instance IDs with commas (,).
        
    
    **ECS Stain Label**
    
    Each taint consists of a key and a value. You can configure multiple taints.
    
    **Collect TextFile**
    
    Specify a text file from which metrics are collected.
    
    **Collect Process Status Metrics**
    
    By default, the process data of each ECS instance is collected.
    
    **Node-Exporter Service Port**
    
    Default value: 9100.
    
    **Metric Scrape interval (unit/second)**
    
    The interval at which data is collected. Unit: seconds. Default value: 15.
    
    **Security Groups Are Automatically Configured**
    
    By default, the switch is turned on.
    
    **Custom ECS Tag Injection**
    
    An ECS tag key for automatically injecting the corresponding key-value pair into Managed Service for Prometheus metrics.
    
4.  Click **OK**. Wait for about 1 to 2 minutes before the ECS instance metrics are integrated.
    

**Note**

If no data is displayed in the dashboards after the integration is complete, make sure that the security groups of the ECS instances allow inbound access to the 9100 and 9256 ports from the 100.64.0.0/10 and 192.168.0.0/18 CIDR blocks. For more information, see [Search for security groups](/help/en/ecs/user-guide/search-for-security-groups). 9100 is the default port of each Node Exporter and 9256 is the default port of each Process Exporter. You can adjust the specific ports based on your needs.

## **Step 2: View the dashboards**

1.  Log on to the [ARMS console](https://arms-ap-southeast-1.console.aliyun.com/#/home).
    
2.  In the left-side navigation pane, click **Integration Management**.
    
3.  On the **Integrated Environments** tab of the **Integration Management** page, click **ECS Instance**.
    
4.  On the **ECS Instance** tab, click the name of the environment instance.
    
5.  In the **Addon Type** section of the **Component Management** tab, click **Dashboards** to view the built-in Grafana dashboard.
    

## **Step 3: Configure alerting**

1.  Log on to the [ARMS console](https://arms-ap-southeast-1.console.aliyun.com/#/home). In the left-side navigation pane, click **Integration Management**.
    
2.  On the **Integrated Environments** tab of the **Integration Management** page, click **ECS Instance**.
    
3.  On the **ECS Instance** tab, click the name of the environment instance.
    
4.  In the **Addon Type** section of the **Component Management** tab, click **Alert Rule** to view the built-in alert rules.
    

**Note**

-   The built-in alert rules generate alert events without sending alert notifications. If you want to send alert notifications by using emails or other channels, click **Edit** to configure the notification methods. On the Edit Prometheus Alert Rules page, you can specify custom alert thresholds, duration, and alert content. For more information, see [Create an alert rule for a Prometheus instance](/help/en/arms/prometheus-monitoring/create-alert-rules-for-prometheus-instances).
    
-   If you set the Alert Notification parameter to Simple Mode, you can configure the contacts that receive alert notifications and the notification period, and specify whether alert notifications are repeatedly sent.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9705726171/p777887.png)

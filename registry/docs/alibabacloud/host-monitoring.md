Cloud Monitor provides the host monitoring feature. You can install the Cloud Monitor agent on your hosts to monitor the hosts. You can monitor Alibaba Cloud Elastic Compute Service (ECS) instances and virtual machines (VMs) or physical machines provided by other vendors. The host monitoring feature supports hosts that run the Linux and Windows operating systems.

## **Scenarios**

You can use the host monitoring feature to monitor the resource usage of hosts and receive alert notifications if exceptions occur on hosts. The host monitoring feature is applicable to the following scenarios:

-   **Monitor hosts in a hybrid cloud**
    
    Host monitoring uses the Cloud Monitor agent to collect the metric data of your hosts. You can install the Cloud Monitor agent on both ECS instances and non-ECS hosts. This way, you can collect the metric data of hosts in a hybrid cloud.
    
-   **Monitor hosts of an enterprise**
    
    Host monitoring allows you to group hosts in different regions to an application group for business-based host management. In addition, host monitoring allows you to manage alert rules by application group. After you apply an alert rule to an application group, the alert rule is applied to all hosts in the application group. This improves the O&M efficiency.
    

## **Features**

-   **Easy installation of the agent**
    
    Host monitoring allows you to monitor hosts by installing the Cloud Monitor agent on the hosts to collect operating system metrics. For more information, see [Manage a Cloud Monitor agent](/help/en/cms/cloudmonitor-1-0/user-guide/install-and-uninstall-the-cloudmonitor-agent-for-cpp#task-1950491).
    
-   **Rich monitoring metrics**
    
    Host monitoring allows you to monitor metrics related to CPU, memory, disk, and network to meet your basic O&M requirements of hosts. For more information about the metrics supported by Cloud Monitor, see [Operating system monitoring](/help/en/cms/cloudmonitor-1-0/user-guide/operating-system-monitoring#concept-gdq-tgc-5db).
    
-   **Business-level process monitoring**
    
    Cloud Monitor collects the CPU utilization, the memory usage, and the number of files that are opened for active processes. This enables you to monitor the resource usage of your hosts. For more information, see [Process monitoring](/help/en/cms/cloudmonitor-1-0/user-guide/process-monitoring#task-1962984).
    
-   **GPU monitoring**
    
    You can view the monitoring data of metrics by graphics processing unit (GPU), instance, and group. For more information, see [GPU monitoring](/help/en/cms/cloudmonitor-1-0/user-guide/gpu-monitoring#concept-ysn-byq-32b).
    
-   **Flexible alerting**
    
    You can manage hosts from different regions and configure alert rules by application group. This reduces the cost of monitoring management. For more information, see [Host monitoring](/help/en/cms/cloudmonitor-1-0/user-guide/monitoring-host#task-1962984).
    

## **References**

-   **About the Cloud Monitor agent**
    
    -   [Overview](/help/en/cms/cloudmonitor-1-0/user-guide/cloudmonitor-agent/)
        
    -   [Manage a Cloud Monitor agent](/help/en/cms/cloudmonitor-1-0/user-guide/install-and-uninstall-the-cloudmonitor-agent-for-cpp)
        
    -   [Configure network settings](/help/en/cms/cloudmonitor-1-0/user-guide/configure-network-settings)
        
    -   [Versions of the CloudMonitor agent](/help/en/cms/cloudmonitor-1-0/user-guide/release-notes)
        
-   **About host monitoring**
    
    -   [Host monitoring](/help/en/cms/cloudmonitor-1-0/user-guide/monitoring-host)
        
    -   [Operating system monitoring](/help/en/cms/cloudmonitor-1-0/user-guide/operating-system-monitoring)
        
    -   [Basic monitoring](/help/en/cms/cloudmonitor-1-0/user-guide/overview-of-basic-and-operating-system-monitoring)
        
    -   [GPU monitoring](/help/en/cms/cloudmonitor-1-0/user-guide/gpu-monitoring)
        
    -   [Process monitoring](/help/en/cms/cloudmonitor-1-0/user-guide/process-monitoring)
        
    -   [Network monitoring](/help/en/cms/cloudmonitor-1-0/user-guide/network-monitoring)
        
    -   [Disks](/help/en/cms/cloudmonitor-1-0/user-guide/cloud-disk)

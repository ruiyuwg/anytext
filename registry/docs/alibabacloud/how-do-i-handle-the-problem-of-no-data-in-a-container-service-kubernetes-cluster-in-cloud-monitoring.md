If no metric data exists for a Container Service for Kubernetes (ACK) cluster on the **Container Service Monitoring** page in the Cloud Monitor console, perform the following steps to troubleshoot the issue.

## **Issue**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2913562171/p789078.png)

## **Solution**

1.  Check whether the monitoring feature is enabled for the **metrics-server** component of the ACK cluster.
    
    **Note**
    
    This step is required only for ACK clusters created after 10:00:00 on April 25, 2024.
    
    -   If yes, proceed to [Step 2](#b38e72f536e5p).
        
    -   If no, enable the monitoring feature for the **metrics-server** component. For more information, see [Enable the monitoring feature of CloudMonitor for an ACK cluster](/help/en/cms/cloudmonitor-1-0/user-guide/enable-cloud-monitoring-for-container-service-kubernetes-clusters).
        
2.  Check whether the **metrics-server** component of the ACK cluster is upgraded to V0.3.8.5 or later.
    
    -   If yes, the issue may be caused by Cloud Monitor. In this case, [submit a ticket](https://smartservice.console.alibabacloud.com) to Cloud Monitor.
        
    -   If no, upgrade the **metrics-server** component to V0.3.8.5 or later. For more information, see [Update the metrics-server component before you update the Kubernetes version to 1.12](/help/en/ack/install-the-metrics-server-component#task-1664343).

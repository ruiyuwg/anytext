Global Accelerator (GA) can be used together with monitoring and log services to ensure the availability of GA resources and the normal operation and health of your business. You can use monitoring services to collect metrics. Alibaba Cloud provides various monitoring and log auditing services, such as CloudMonitor and Network Intelligence Service (NIS), to help you monitor the usage of GA resources and the status of your applications in real time. You can receive alerts when exceptions occur.

## **Instance diagnosis**

GA is integrated with NIS and supports quick diagnosis at the instance level. You can use NIS to check the configurations and status of instances, and troubleshoot based on suggestions provided by NIS. The instance diagnosis feature checks the following items: configurations, resource limits, certificates, security policies, payment status, and service access. You can also view previous diagnostic results.

For more information about how to diagnose GA instances, see [Instance diagnostics](/help/en/ga/user-guide/instance-diagnostics).

## **Alibaba Cloud resource healthiness updates**

We recommend that you keep track of the health status of your Alibaba Cloud resources so that you can handle exceptions at the earliest opportunity. For more information, visit [Alibaba Cloud Resource Healthiness Updates](https://status.alibabacloud.com/#/).

On the **Alibaba Cloud Resource Healthiness Updates** page, you can check the health status of every service in each region, and find the methods to subscribe to Really Simple Syndication (RSS) feeds about service exceptions.

![image..png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4117150961/p678410.png)

## **CloudMonitor**

GA is integrated with CloudMonitor. This service is free of charge and allows you to monitor GA metrics in real time.

### Real-time data query

You can monitor the running status and usage of GA resources.

-   For more information about the monitoring metrics supported by GA, see the "Supported monitoring metrics" section of the [Monitoring and alerting](/help/en/ga/user-guide/monitoring-and-alerting#section-qnd-gqm-xdp) topic.
    
-   For more information about how to query GA monitoring data, see the "View the monitoring information of an instance" section of the [Monitoring and alerting](/help/en/ga/user-guide/monitoring-and-alerting#section-rpx-6yw-d4n) topic.
    

### **Threshold-triggered alert**

You can create threshold-triggered alert rules for the monitoring metrics of GA resources. If the monitoring metrics meet the thresholds, the CloudMonitor automatically sends an alert notification. This way, you can handle exceptions at the earliest opportunity. For more information about how to create a threshold-triggered alert rule, see the "Create a threshold-triggered alert rule" section of the [Monitoring and alerting](/help/en/ga/user-guide/monitoring-and-alerting#section-2a5-fwq-1qi) topic.

## **Cloud Config**

Cloud Config is a resource auditing service that allows you to track configuration changes of your resources and evaluate configuration compliance. Cloud Config helps you evaluate a large number of resources and maintain the continuous compliance of your cloud infrastructure.

This service is free of charge. Cloud Config supports only specific resources. For information about the GA resource types that are supported by Cloud Config, see [Alibaba Cloud services and resource types supported by Cloud Config](/help/en/cloud-config/latest/alibaba-cloud-services-that-are-supported-by-cloud-config).

Cloud Config provides a list of all resources that are deployed in different regions. This way, you can retrieve a resource and view the configuration information and configuration change history of the resource in an efficient manner. For information about the resource management features of Cloud Config, see [Overview of global resources](/help/en/cloud-config/latest/global-resources-overview).

You can deliver the configuration change history and non-compliance events of GA resources to a specified Logstore in Log Service. Then, you can query and analyze log data in Log Service. For more information, see [Deliver resource data to a Log Service Logstore](/help/en/cloud-config/latest/deliver-resource-related-logs-to-a-log-service-logstore).

## ActionTrail

GA is integrated with Alibaba Cloud ActionTrail to allow you to manage operations logs in a centralized manner. ActionTrail records the logon and the access to the resources within your Alibaba Cloud account. You can perform security analysis, intrusion detection, resource change tracking, and compliance auditing.

ActionTrail can record the log data of your access to and use of cloud services in the Alibaba Cloud Management Console by calling API operations or by using developer tools. For more information about the supported audit events of GA, see [Audit events of GA](/help/en/actiontrail/product-overview/audit-events-of-ga).

By default, ActionTrail tracks the operations that are performed in the previous 90 days. If you want to save events for more than 90 days, you can create a trail to deliver events to a Log Service Logstore as logs or to an OSS bucket as log files. For more information, see the "Step 1: Create a trail" section of the [Getting Started](/help/en/actiontrail/use-advanced-event-query-feature-to-query-events#section-uxh-m43-tqk) topic.

After you create a trail to deliver events to a Log Service Logstore or OSS bucket, you can query or analyze the events in the Log Service or OSS console. For more information, see [Query events in the Log Service or OSS console](/help/en/actiontrail/user-guide/query-events-in-the-log-service-or-oss-console).

If you want to analyze the historical events that are generated in the previous 90 days or download these events for audit purpose, you can create a historical event delivery task to deliver these events to Log Service. For more information, see [Create a historical event delivery task](/help/en/actiontrail/user-guide/create-a-historical-event-delivery-task).

## **Log Service**

GA is integrated with Alibaba Could Log Service. You can create access logs for one or more endpoint groups of a GA instance. Then, the collected access logs are delivered to the Log Service Logstore in the region where the endpoint groups reside. An access log entry contains the following information: the source IP address, source port, destination IP address, destination port, and acceleration region.

For more information about how to create access logs for GA instances, see [Work with access logs](/help/en/ga/user-guide/using-access-logs).

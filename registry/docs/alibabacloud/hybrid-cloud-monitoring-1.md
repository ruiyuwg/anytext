Hybrid Cloud Monitoring is a one-stop monitoring solution for enterprises. It includes dashboards, second-level monitoring, and resource usage reports.

## Enable hybrid cloud monitoring

The first time you use Hybrid Cloud Monitoring, you must activate it separately. For more information, see [Activate Hybrid Cloud Monitoring](/help/en/cms/cloudmonitor-1-0/user-guide/activate-hybrid-cloud-monitoring#task-2083031).

## Scenarios and advantages

The following table describes the features, scenarios, and advantages of Hybrid Cloud Monitoring.

**Feature**

**Scenario**

**Advantages**

[Dashboard](/help/en/cms/cloudmonitor-1-0/user-guide/overview-1#concept-2087037)

Integrated monitoring for multicloud, hybrid cloud, and cross-account environments.

-   Multicloud: Use a unified solution based on Alibaba Cloud products to collect monitoring data from multiple cloud providers. This lets you centrally manage enterprise monitoring data.
    
-   Hybrid cloud: Efficiently and cost-effectively aggregate monitoring data from on-premises resources. You can quickly build an integrated monitoring system for both cloud and on-premises environments.
    
-   Cross-account: Use Resource Directory to easily implement unified monitoring for resources across multiple accounts.
    

-   Fully compatible with the Prometheus protocol.
    
    -   Data ingestion: Provides a one-click import feature for monitoring data from Alibaba Cloud products. You can install the CloudMonitor agent and Exporters to easily collect data from non-Alibaba Cloud resources.
        
    -   Flexible configuration: Supports the Prometheus Query Language (PromQL) syntax. This makes dashboard configuration more flexible.
        
    -   Open metric repository: In addition to configuring cloud-based dashboards, you can also configure the metric repository for locally deployed dashboards.
        
-   Richer dimension information.
    
    -   Multi-faceted data aggregation: Compared to custom dashboards, Hybrid Cloud Monitoring dashboards support the centralized configuration of monitoring data, such as site monitoring and availability monitoring, in a single dashboard.
        
    -   Richer dimension information: Adds dimension information such as IP addresses, regions, and tags to the original cloud service monitoring data. This makes dashboard configuration and display more efficient and user-friendly.
        

[Business Monitoring](/help/en/cms/cloudmonitor-1-0/user-guide/overview-1#concept-2087037)

Used for custom data ingestion scenarios.

You can report business data as metrics to the CloudMonitor repository for display in charts. You can also use Hybrid Cloud Monitoring dashboards to create various monitoring charts, set Prometheus alerts, and receive alert notifications.

[Second-level monitoring](/help/en/cms/cloudmonitor-1-0/user-guide/enable-high-precision-monitoring#task-2143633)

Used for monitoring scenarios that require high-precision metrics for cloud products.

You can enable second-level monitoring metrics with one click. The minimum monitoring granularity is 5 seconds.

[Resource usage report](/help/en/cms/cloudmonitor-1-0/user-guide/create-a-report-task#task-2084966)

Periodically collect and analyze statistics about the quantity and usage of your resources to provide a basis for resource configuration optimization.

You can generate resource usage reports with one click.

-   Configurable statistical scope: You can customize the cloud products, metrics, and statistical period for the report.
    
-   More complete resource information: Compared to calling an API to retrieve monitoring data, the report includes additional information such as resource names, regions, and specifications.

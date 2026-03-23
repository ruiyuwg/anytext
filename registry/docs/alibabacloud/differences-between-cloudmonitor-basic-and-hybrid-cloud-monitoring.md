This topic describes the feature differences between CloudMonitor Basic and Hybrid Cloud Monitoring.

The following table lists the feature differences between CloudMonitor Basic and Hybrid Cloud Monitoring.

**Feature**

**CloudMonitor Basic**

**Hybrid Cloud Monitoring**

Centralized cross-account monitoring

Not supported.

Supported only by Alibaba Cloud services.

Custom data retention period

Not supported. Default value: 3 months.

Supported. Maximum value: 367 days.

High precision monitoring

Not supported.

Supported only by Function Compute, Tair (Redis OSS-compatible), and ApsaraDB RDS.

Data export

The monitoring data of cloud services can be queried by calling API operations. Each API operation can be called up to 50 times per second. The free quota is 1 million calls per month.

The Cursor value can be obtained in real time by calling the [Cursor](/help/en/cms/cloudmonitor-1-0/api-cursor-2330730) and [BatchGet](/help/en/cms/cloudmonitor-1-0/api-batchexport-new) operations. The number of calls is unlimited. The data can be stored in an on-premises Prometheus system.

Dimensions of metric data

Metrics identify instance IDs, for example, instanceid.

-   Metrics identify instance IDs, for example, instanceid.
    
-   Metrics identify IP addresses, regions, and tags, for example, ip, regionid, and tag.
    

Aggregate queries

Aggregate queries are not supported. Only simple queries are supported.

Aggregate queries for multiple instances are supported, for example, aggregation by tag and resource group.

PromQL syntax

Not supported.

Supported.

Dashboard

Single-instance dashboards of standard cloud services are supported.

Various preset templates are provided.

Aggregate alerts

Not supported.

Aggregate alerts based on the PromQL syntax are supported. For example, aggregate alerts can be triggered based on conditions such as the total content delivery network (CDN) bandwidth, total elastic IP address (EIP) bandwidth, and Object Storage Service (OSS).

Business monitoring

Not supported.

Business monitoring based on on-premises Prometheus logs, Simple Log Service logs, and custom channels is supported.

Application monitoring

Not supported.

Monitoring of JVM, Spring, NGINX, Tengine, and Tomcat applications is supported.

On-premises data center monitoring

Only host monitoring is supported.

Monitoring of on-premises hardware, storage, and networks based on Prometheus exporters is supported.

On-premises middleware monitoring

Not supported.

Monitoring of on-premises middleware such as MongoDB, Redis, and RocketMQ is supported.

Connection to on-premises Grafana

Not supported.

Direct connection to on-premises Grafana by using Prometheus data sources is supported.

Resource usage analysis

Not supported.

Comprehensive analysis of resource usage is supported. Low-load, high-load, and idle resources can be displayed.

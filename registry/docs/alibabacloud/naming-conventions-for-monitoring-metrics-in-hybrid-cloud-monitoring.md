The names of the monitoring metrics in Hybrid Cloud Monitoring are changed based on the names of the monitoring metrics in CloudMonitor Basic. This topic describes the scenarios, naming conventions, and naming examples for monitoring metrics in Hybrid Cloud Monitoring.

## Scenarios

The naming conventions are applicable only to the monitoring metrics of Alibaba Cloud services in Hybrid Cloud Monitoring.

## Naming conventions for monitoring metrics

Naming conventions for monitoring metrics in Hybrid Cloud Monitoring: `AliyunNamespace_Metric`.

**Note** For information about cloud services and their monitoring metrics in CloudMonitor Basic, see MetricName in [Appendix 1: Metrics](/help/en/cms/cloudmonitor-1-0/support/appendix-1-metrics#concept-2486491).

### Rules for changing the namespaces of cloud services

Compared with the namespaces in CloudMonitor Basic, the namespaces in Hybrid Cloud Monitoring are changed based on the following rules:

-   The prefix `acs_` is removed.
-   The suffix `_dashboard` is removed.
-   The underscore (\_) in the middle is removed.
-   The first letter in the abbreviation of the cloud service name is uppercase and all the other letters are lowercase.

### Rules for changing the names of monitoring metrics

Compared with the metric names (MetricName) in CloudMonitor Basic, the metric names in Hybrid Cloud Monitoring are changed based on the following rules:

-   Symbols except underscores (\_), letters, and digits in the metric names are replaced with underscores (\_).
-   The letter case of the metric names remains unchanged.

## Examples of changes in metric names

The following table describes how the metric names in CloudMonitor Basic are changed in Hybrid Cloud Monitoring.

Namespace in CloudMonitor Basic

Metric ID in CloudMonitor Basic

Metric name in Hybrid Cloud Monitoring

Change description

acs\_ecs\_dashboard

cpu\_total

AliyunEcs\_cpu\_total

The name of the cloud service is `Ecs`.

waf

4XX\_ratio

AliyunWaf\_4XX\_ratio

The name of the cloud service is `Waf`.

acs\_fc

FunctionDequeueCount

AliyunFc\_FunctionDequeueCount

The name of the cloud service is `Fc`.

acs\_vpc\_eip

net.rxPkgs

AliyunVpceip\_net\_rxPkgs

-   The name of the cloud service is `Vpceip`.
-   The name of the monitoring metric is `net_rxPkgs`.

Managed Service for Prometheus provides a Prometheus managed service and a container monitoring service. Container Monitoring (including Basic Edition and Pro Edition) incurs container monitoring fees, including cluster scale fees and Prometheus instance fees. This topic describes the billing method, billable items, unit prices, and activation methods of Container Monitoring.

## **Cluster types that support Pro Edition**

-   ACK managed Pro cluster
    
-   ACK Lingjun cluster
    
-   ACK dedicated cluster
    

## **Differences between the Basic Edition and Pro Edition**

**Item**

**Basic Edition**

**Pro Edition**

Storage period of [container cluster basic metrics](/help/en/arms/prometheus-monitoring/container-cluster-metrics)

7 days

90 days

Prometheus collector

Provides non-managed agents. By default, each agent occupies 3 CPU cores and 4 GB of memory. You need to manage the agents by yourself.

Provides managed agents with a production-grade Service-Level Agreement (SLA) of 99.95%.

Dashboard

Provides basic non-Grafana dashboards based on visualization components developed by Alibaba Cloud.

Provides various Grafana dashboards.

Alerting

Provides no default alert rules.

Provides default alert rules for each component of container services.

Data export

Provides open source standard data export capabilities such as Remote Read and HTTP API.

Provides Remote Write and EventBridge-based data delivery capabilities in addition to the standard open source data export capabilities.

## **Billing method**

At present, only the pay-as-you-go billing method is available. Prepaid options, such as resource plans and subscriptions, are not supported.

## **Billable items**

Container monitoring fees include cluster scale fees and Prometheus instance fees.

### **Pro Edition**

**Billable item**

**Billing description**

**Billing method**

Container cluster scale fees

OCU usage is determined by the number of container cluster nodes (including virtual nodes). Specifically, every 10 cluster nodes are equivalent to 1 OCU.

**Note**

OCU: An Observability Capacity Unit (OCU) is a new billing unit introduced by Alibaba Cloud cloud-native observability services. OCU usage is automatically tracked and calculated based on hourly resource utilization. The price for each OCU is USD 0.023.

Pay-as-you-go:

Daily Container Cluster Scale Fee = Sum of hourly OCU counts × OCU unit price.

**Note**

Hourly OCU Count is determined by taking the maximum number of nodes during the current billing period, dividing it by 10, and then rounding up to the nearest whole number.

Prometheus instance fees

For more information, see [Instance billing](/help/en/prometheus/product-overview/billing-description/).

### **Basic Edition**

**Billable item**

**Billing description**

Container cluster scale fees

Free

Prometheus instance fees

For more information, see [Instance billing](/help/en/prometheus/product-overview/billing-description/).

## **Billing cycle**

For the Pro Edition, container cluster scale fees are calculated hourly. Managed Service for Prometheus will count the maximum number of cluster nodes per hour from the previous day starting at 00:00. It then calculates the hourly OCU count according to the billing rules. By summing up the hourly OCU counts, it calculates the total OCU amount for the previous day, multiplies this by the OCU unit price, and generates the container cluster scale fees on a daily basis. For information about the billing cycles of Prometheus instances, see [Instance billing](/help/en/prometheus/product-overview/billing-description/).

## **Unit prices**

### **Container cluster scale fees**

Container Monitoring Pro Edition provides the pay-as-you-go billing method. Upon activating or upgrading a cluster to the Pro Edition, the OCU usage is automatically calculated based on the cluster node scale.

**Edition**

**Unit price**

Pro Edition

Each set of 10 container cluster nodes counts as 1 OCU. If there are fewer than 10 nodes, it is still counted as 1 OCU.

### **OCU unit prices**

**Billable item**

**Unit price in the Chinese mainland (USD/OCU)**

**Unit price in other regions (USD/OCU)**

OCU

0.023

0.033

## [Billing examples](/help/en/prometheus/product-overview/billing-examples)

## **Activation methods**

Container Monitoring Pro Edition relies on Managed Service for Prometheus. To use Container Monitoring Pro Edition, you must first activate Managed Service for Prometheus. To use the pay-by-write-volume billing mode, click [here](https://common-buy-intl.alibabacloud.com/?commodityCode=prometheus_serverless_public_intl). To use the pay-by-reporting-volume billing mode, click [here](https://common-buy-intl.alibabacloud.com/?commodityCode=prometheus_pay_public_intl). After activating Managed Service for Prometheus, you can then proceed to [activate Container Monitoring Pro Edition](https://common-buy-intl.aliyun.com/?commodityCode=grafana_serverless_public_intl).

To upgrade from the Basic Edition to the Pro Edition, refer to [Upgrade Container Monitoring (Basic) to Container Monitoring (Pro)](/help/en/arms/prometheus-monitoring/using-container-monitoring-pro#360dff7fc0pd8).

## **Resource usage and bills**

You can check the overall usage of Container Monitoring Pro Edition in the [Expenses and Cost console](https://usercenter2-intl.console.alibabacloud.com/). For more information, see [Bill query](/help/en/prometheus/product-overview/view-bills#concept-174840).

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7153370471/p915144.png)

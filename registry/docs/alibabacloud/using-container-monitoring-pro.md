Running a self-managed Prometheus agent inside your Kubernetes cluster consumes resources (3 CPU cores and 4 GB memory by default) and limits metric retention to 7 days. Container Monitoring Pro Edition replaces the in-cluster agent with a fully managed collector, extends metric retention to 90 days, and provides comprehensive prebuilt dashboards with a 99.95% SLA.

**Important**

After you enable Pro Edition, you cannot downgrade to Basic Edition.

## Why upgrade to Pro Edition

**Capability**

**Basic Edition**

**Pro Edition**

Metric retention for [basic container cluster metrics](/help/en/arms/prometheus-monitoring/container-cluster-metrics)

7 days

90 days

Prometheus collector

Self-managed agent in your cluster (3 CPU cores, 4 GB memory by default)

Fully managed agent -- no in-cluster resource cost, production-level SLA of 99.95%

Dashboards

Basic monitoring dashboards

Comprehensive monitoring dashboards

## Supported cluster types

Pro Edition supports the following Container Service for Kubernetes (ACK) cluster types:

-   ACK managed Pro cluster
    
-   ACK Lingjun cluster
    
-   ACK dedicated cluster
    

## Billing

Container Monitoring Pro Edition has two billing components.

### Cluster scale fee

This fee is based on Observability Capacity Unit (OCU) usage, calculated from your cluster node count. OCU is a billing unit introduced by Alibaba Cloud Native Observability that automatically calculates usage based on hourly resource usage.

**Item**

**Detail**

Conversion

Every 10 cluster nodes = 1 OCU (rounded up)

Unit price

0.023 USD per OCU per hour

Billing method

Pay-as-you-go

Billing cycle

Hourly, aggregated into a daily charge

**How it works:** Each hour, the system records the maximum number of nodes in your cluster and converts that number to OCUs. At the end of each day, it sums the hourly OCU values and multiplies by the unit price.

**Example:** For a cluster with 35 nodes:

-   Hourly OCU = ceil(35 / 10) = 4 OCUs
    
-   Daily cost = 4 OCUs x 24 hours x 0.023 USD = **2.21 USD/day**
    

### Prometheus instance fee

Prometheus instance fees are billed separately. For details, see [Prometheus instance billing](/help/en/prometheus/product-overview/billing-description/).

## Prerequisites

Before you enable Pro Edition, complete the following steps:

1.  Activate Managed Service for Prometheus with one of these pay-as-you-go billing modes:
    
    -   [By ingestion data volume](https://common-buy-intl.alibabacloud.com/?commodityCode=prometheus_serverless_public_cn)
        
    -   [By ingestion metric sample count](https://common-buy-intl.alibabacloud.com/?commodityCode=prometheus_pay_public_cn#/open)
        
2.  [Activate Container Monitoring Pro Edition](https://common-buy-intl.alibabacloud.com/?commodityCode=grafana_serverless_public_cn).
    

## Enable Pro Edition

Choose the method that matches your situation:

-   **New cluster?** Select Pro Edition during integration. See [Select Pro Edition during integration](#c9dddb7afbv4w).
    
-   **Existing Basic Edition?** Upgrade your current integration. See [Upgrade from Basic Edition to Pro Edition](#68a8093db9n2g).
    

### Select Pro Edition during integration

1.  Go to the **Integration Center** page and select **Kubernetes Cluster Monitoring**.
    
2.  In the **Kubernetes Cluster Monitoring** panel, select the cluster to integrate, choose **Container Monitoring Pro Edition**, and click **OK**.
    

![Select Pro Edition during integration](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4570459471/p965994.jpg)

### Upgrade from Basic Edition to Pro Edition

1.  Go to the **Integration Management** page and choose **Integrated Environments** > **Container Service**.
    
2.  Find your cluster and click **Upgrade to Pro Edition** in the **Actions** column. In the dialog box, click **OK**.
    

![Upgrade to Pro Edition](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4570459471/p965999.jpg)

## Supported dashboards

All dashboards are automatically available after you enable Pro Edition.

**Category**

**Dashboard**

Monitoring overview

Cluster monitoring overview

Cluster namespace dashboard

Cluster core components

ACK Pro API server

ACK Pro ETCD

ACK Pro Scheduler

ACK Pro Cloud Controller Manager

ACK Pro Kube Controller Manager

Node monitoring

Node pool overview

Cluster node monitoring details

Application monitoring

StatefulSet monitoring

Deployment monitoring

Daemon process set application monitoring

Cluster Pod monitoring

Network monitoring

CoreDNS component monitoring

Cluster Ingress traffic monitoring

Storage monitoring

CSI storage component monitoring-cluster level

CSI storage component monitoring-node level

Pod IO Monitoring (Pod Level)

Frontend Storage IO Monitoring (Cluster Level)

GPU monitoring

Cluster GPU monitoring-cluster level

Cluster GPU monitoring-node level

Cluster GPU monitoring-application Pod dimension

Cost analysis/Resource optimization

Resource profile

Others

Backend Storage IO Monitoring (Cluster Level)

k8s-reclaimed-resource

Cluster Prometheus self-monitoring

Virtual Node(ECI) Overview

## Default alert rules

The following alert rules are active by default after you enable Pro Edition.

### Node alerts

**Alert rule**

**Alert template**

Node CPU usage greater than 75%

Node {{ $labels.instance }} CPU usage greater than 75%, current CPU usage {{ printf "%.2f" $value }}%

Node CPU usage greater than 85%

Node {{ $labels.instance }} CPU usage greater than 85%, current CPU usage {{ printf "%.2f" $value }}%

Node memory usage greater than 75%

Node {{ $labels.instance }} memory usage greater than 75%, current memory usage {{ printf "%.2f" $value }}%

Node memory usage greater than 85%

Node {{ $labels.instance }} memory usage greater than 85%, current memory usage {{ printf "%.2f" $value }}%

Node anomalies

Node {{$labels.node}} has been in unavailable status for more than 10 minutes

Disk usage greater than 95%

Node {{ $labels.instance }} disk {{ $labels.device }} usage exceeds 95%, current disk usage {{ printf "%.2f" $value }}%

### Workload alerts

**Alert rule**

**Alert template**

Deployment Pod availability less than 50%

Namespace: {{$labels.namespace}} / Deployment: {{$labels.deployment}} Pod availability less than 50%, current unavailable Pod count {{ $value }}

Job execution failed

Namespace: {{$labels.namespace}}/Job: {{$labels.job\_name}} execution failed

Pod startup timeout failure

Namespace: {{$labels.namespace}}/Pod: {{$labels.pod\_name}} has not started successfully for more than 15 minutes, waiting reason {{$labels.reason}}

Pod status abnormal

Namespace: {{$labels.namespace}}/Pod: {{$labels.pod\_name}} has been in {{$labels.phase}} status for more than 10 minutes

Pod frequent restart

Namespace: {{$labels.namespace}}/Pod: {{$labels.pod\_name}} restarted more than {{ $labels.metrics\_params\_value}} times within {{$labels.metrics\_params\_time}} minutes, current restart count {{ $value }}

Container CPU usage exceeds 85%

Namespace: {{$labels.namespace}} / Pod: {{$labels.pod\_name}} / Container: {{$labels.container}} CPU usage greater than 85%, current value {{ printf "%.2f" $value }}%

Container CPU usage exceeds 75%

Namespace: {{$labels.namespace}} / Pod: {{$labels.pod\_name}} / Container: {{$labels.container}} CPU usage greater than 75%, current value {{ printf "%.2f" $value }}%

Container memory usage exceeds 75%

Namespace: {{$labels.namespace}} / Pod: {{$labels.pod\_name}} / Container: {{$labels.container}} memory usage greater than 75%, current value {{ printf "%.2f" $value }}%

Container memory usage exceeds 85%

Namespace: {{$labels.namespace}} / Pod: {{$labels.pod\_name}} / Container: {{$labels.container}} memory usage greater than 85%, current value {{ printf "%.2f" $value }}%

This topic describes the observability capability of Container Service for Kubernetes (ACK) and its billing method.

## **Billing for the observability capability of ACK**

### **Billing for Managed Service for Prometheus**

To use Managed Service for Prometheus to collect monitoring data, you must select and enable Cluster Monitoring. Cluster Monitoring of Managed Service for Prometheus includes ACK Cluster Monitoring Pro Edition and ACK Cluster Monitoring Basic Edition. The following section describes the billing methods of these two editions.

**Important**

Currently, only ACK Pro clusters support ACK Cluster Monitoring Pro Edition. For other types of clusters, ACK Cluster Monitoring Basic Edition is used by default. ACK is gradually adding support for ACK Cluster Monitoring Pro Edition for other types of clusters.

**Category**

ACK Cluster Monitoring Basic Edition

ACK Cluster Monitoring Pro Edition

Billing of basic metrics

When you create a cluster, the basic monitoring metrics that are enabled by default are provided free of charge. If you modify the default settings, additional fees are generated.

When you create a cluster, the enabled basic metrics are billed based on the number of nodes by default. If you modify the default settings, additional fees are generated.

For more information, see [Container Monitoring billing](/help/en/grafana/product-overview/container-cluster-monitoring-pro-version-billing-rule#95160dc785cha).

Billing of custom metrics

You are charged for custom metrics that are reported by plug-ins that are installed in your cluster, such as ack-net-exporter, [ack-sysom-monitor](/help/en/ack/product-overview/ack-sysom-monitor), [migrate-controller](/help/en/ack/product-overview/migrate-controller), [Knative](/help/en/ack/product-overview/knative), [ack-arena](/help/en/ack/cloud-native-ai-suite/product-overview/ack-arena), and [ack-fluid](/help/en/ack/cloud-native-ai-suite/product-overview/ack-fluid).

All metrics except basic metrics are classified as custom metrics. Custom metrics are billed based on the reported data and storage usage. For more information, see [Prometheus instance billing](/help/en/arms/prometheus-monitoring/product-overview/billing-description/).

Billing of cluster resources

Provides non-managed agents. By default, each agent occupies 3 CPU cores and 4 GB of memory. You need to manage the agents by yourself. Additional resource consumption costs are generated.

Managed agents are used to implement monitoring, and no additional resource fees are generated.

Compared with ACK Cluster Monitoring Basic Edition, ACK Cluster Monitoring Pro Edition provides various built-in Grafana monitoring dashboards, default alert rules for ACK components, and Remote Write and data shipping capabilities (through EventBridge). For more information about the benefits of ACK Cluster Monitoring Pro Edition, see [Differences between the Basic Edition and Pro Edition](/help/en/arms/observable-visualization-grafana-edition/product-overview/container-cluster-monitoring-pro-version-billing-rule#37a4ce4d85kvn).

For more information about how to check whether the reported metrics are basic metrics, see [Container cluster basic metrics](/help/en/arms/prometheus-monitoring/container-cluster-metrics). All metrics not included in the basic metrics are considered custom metrics. This feature is continuously updated, so new custom metrics are progressively added.

### **Billing for ARMS Application Monitoring**

If Application Real-Time Monitoring Service (ARMS) is enabled for applications deployed in ACK clusters, such as [Java Application Monitoring](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/monitor-application-performance), [Python Application Monitoring](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/python-application-monitoring), and [Go Application Monitoring](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/golang-application-monitoring), fees are generated. These fees are billed based on the billing items of ARMS Application Monitoring. For more information, see [Billing](/help/en/arms/application-monitoring/product-overview/billing-description).

### **Billing for Simple Log Service**

When you use Simple Log Service to process logs in ACK clusters (such as audit logs, control plane logs, and container logs (pod logs)), fees are generated. These fees are calculated based on usage and are billed directly by Simple Log Service. For more information, see [Billing overview](/help/en/sls/billing-overview).

## **Observability features of clusters**

The following table describes which features use the cluster observability capability and which components report the generated observability data.

**Note**

You can check [Container cluster basic metrics](/help/en/arms/prometheus-monitoring/container-cluster-metrics) to confirm whether the monitoring metrics collected by Managed Service for Prometheus are basic metrics. If a metric is not listed in [Container cluster basic metrics](/help/en/arms/prometheus-monitoring/container-cluster-metrics), it is considered a custom metric.

**Module**

**Feature (Observable)**

**Alibaba Cloud observability service**

**Data reporting component**

Log monitoring of the control plane

[Collect control plane component logs of ACK managed clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/collect-control-plane-component-logs-of-ack-managed-cluster#task-2020982)

Simple Log Service

ACK managed clusters

CoreDNS log monitoring

[Analyze and monitor CoreDNS logs](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/collect-and-analyze-coredns-logs#task-2074495)

Simple Log Service

[CoreDNS](/help/en/ack/product-overview/coredns)

Monitoring for the audit logs feature of API servers

-   [Work with cluster API Server auditing](/help/en/ack/ack-managed-and-ack-dedicated/security-and-compliance/work-with-cluster-auditing)
    
-   [Collect control plane component logs of ACK managed clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/collect-control-plane-component-logs-of-ack-managed-cluster#task-2020982)
    

Simple Log Service

[API Server](/help/en/ack/product-overview/kube-api-server)

Container auditing

-   [Use Container Behavior Auditing](/help/en/ack/ack-managed-and-ack-dedicated/security-and-compliance/use-container-auditing)
    
-   [Collect control plane component logs of ACK managed clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/collect-control-plane-component-logs-of-ack-managed-cluster#task-2020982)
    

Simple Log Service

[ack-advanced-audit](/help/en/ack/product-overview/ack-advanced-audit)

Container log monitoring

-   [Collect container logs from ACK clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/collect-text-logs-from-ack-clusters-using-daemonset-deployed-logtail-agents#task-1797722)
    
-   [Collect control plane component logs of ACK managed clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/collect-control-plane-component-logs-of-ack-managed-cluster#task-2020982)
    

Simple Log Service

[logtail-ds component](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/collect-text-logs-from-ack-clusters-using-daemonset-deployed-logtail-agents)

Application Monitoring

[Java Application Monitoring](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/monitor-application-performance)

Application Real-Time Monitoring Service

[ack-onepilot](/help/en/ack/product-overview/ack-onepilot)

[Python Application Monitoring](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/python-application-monitoring)

Application Real-Time Monitoring Service

[ack-onepilot](/help/en/ack/product-overview/ack-onepilot)

[Go Application Monitoring](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/golang-application-monitoring)

Application Real-Time Monitoring Service

[ack-onepilot](/help/en/ack/product-overview/ack-onepilot)

Control plane component monitoring

[View control plane component dashboards](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/view-control-plane-component-dashboards-in-ack-pro-clusters)

Managed Service for Prometheus

[API Server](/help/en/ack/product-overview/kube-api-server)

Managed Service for Prometheus

[kube-controller-manager](/help/en/ack/product-overview/kube-controller-manager)

Managed Service for Prometheus

[cloud-controller-manager](/help/en/ack/product-overview/cloud-controller-manager)

Managed Service for Prometheus

[kube-scheduler](/help/en/ack/product-overview/kube-scheduler)

Managed Service for Prometheus

etcd

Network monitoring

[Use Managed Service for Prometheus to improve the observability of Ingress](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/best-practices-for-the-nginx-ingress-controller-2#section-6xc-cts-hk9)

Managed Service for Prometheus

[Nginx Ingress Controller](/help/en/ack/product-overview/nginx-ingress-controller)

[CoreDNS component monitoring](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/coredns-monitoring)

Managed Service for Prometheus

[CoreDNS](/help/en/ack/product-overview/coredns)

Storage

[Overview of container storage monitoring](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-csi-plugin-to-monitor-storage-resources-at-the-node-side)

Managed Service for Prometheus

-   [csi-plugin](/help/en/ack/product-overview/csi-plugin)
    
-   [storage-operator](/help/en/ack/product-overview/storage-operator)
    

GPU

[GPU monitoring](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/gpu-monitoring/)

Managed Service for Prometheus

ack-gpu-exporter

Cluster topology monitoring

[Cluster topology monitoring](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/architecture-aware-monitoring)

[What is Application Monitoring eBPF Edition?](/help/en/arms/application-monitoring-ebpf/product-overview/what-is-alibaba-cloud-application-monitoring-ebpf-version)

[ack-arms-cmonitor](/help/en/ack/product-overview/ack-arms-cmonitor)

Cluster basic monitoring

[Use Managed Service for Prometheus for monitoring](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-managed-service-for-prometheus-to-monitor-an-ack-cluster)

Managed Service for Prometheus

The [Prometheus agent](/help/en/prometheus/developer-reference/prometheus-monitoring-change-records-1) is provided by Managed Service for Prometheus. The cluster basic monitoring data consists of the following data:

-   The status data of the Kubernetes object is provided by the kube-state-metrics component.
    
-   The basic monitoring data of the cluster nodes is provided by the node-exporter component.
    
-   The basic container monitoring data from kubelet at the container engine layer of each node in the cluster and the ACK Virtual Node component.
    

Managed Service for Prometheus

Managed Service for Prometheus

Cost management suite

[Enable cost insights](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/enable-cost-insights#task-2078815)

Managed Service for Prometheus

[ack-cost-exporter](/help/en/ack/product-overview/ack-cost-exporter)

[Resource profiling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/resource-profiling)

Managed Service for Prometheus

[ack-koordinator (ack-slo-manager)](/help/en/ack/product-overview/ack-koordinator-fka-ack-slo-manager)

Scheduling

[QoS aware scheduling](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/qos-aware-scheduling/)

Managed Service for Prometheus

[Best practices for colocation of multi-types workloads](/help/en/doc-detail/450003.html)

Managed Service for Prometheus

Events and alerts monitoring

[Event monitoring](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/event-monitoring)

Simple Log Service

[ack-node-problem-detector](/help/en/ack/product-overview/ack-node-problem-detector)

[Container service alert management](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/alert-management)

-   Simple Log Service
    
-   Managed Service for Prometheus
    
-   CloudMonitor
    

[alicloud-monitor-controller](/help/en/ack/product-overview/alicloud-monitor-controller)

Kernel-level container monitoring

[Kernel-level container monitoring based on SysOM](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/sysom-kernel-level-container-monitoring)

Managed Service for Prometheus

[ack-sysom-monitor](/help/en/ack/product-overview/ack-sysom-monitor)

[Use SysOM to locate container memory issues](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-sysom-to-locate-container-memory-issues)

Managed Service for Prometheus

Network diagnosis

[Network diagnosis](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/network-diagnostics)

Managed Service for Prometheus

net-exporter

Backup center

[Use Managed Service for Prometheus to monitor the backup center and configure alerting](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/monitor-the-backup-center-and-configure-alarms-through-prometheus)

Managed Service for Prometheus

[migrate-controller](/help/en/ack/product-overview/migrate-controller)

Knative

[View the Knative monitoring dashboard](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/view-the-knative-dashboard-in-prometheus-service-1)

Managed Service for Prometheus

[Knative](/help/en/ack/product-overview/knative)

Auto Scaling

[Horizontal pod scaling based on Managed Service for Prometheus metrics](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/horizontal-pod-scaling-based-on-prometheus-service-metrics-1)

Managed Service for Prometheus

ack-alibaba-cloud-metrics-adapter

[Enable Managed Service for Prometheus for AHPA](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/enable-prometheus-service-for-ahpa)

Managed Service for Prometheus

AHPA controller

Cloud-native AI suite

[Configure the Arena client](/help/en/ack/cloud-native-ai-suite/user-guide/install-arena)

Managed Service for Prometheus

[ack-arena](/help/en/ack/cloud-native-ai-suite/product-overview/ack-arena)

[Elastic datasets](/help/en/ack/cloud-native-ai-suite/user-guide/overview-of-fluid/)

Managed Service for Prometheus

[ack-fluid](/help/en/ack/cloud-native-ai-suite/product-overview/ack-fluid)

This topic describes the release notes for the Prometheus agent.

## **2025**

### **Prometheus agent**

**Prometheus agent version**

**Release date**

**Description**

V1.1.31

-   The scheduling of large-scale Targets is optimized to accelerate the allocation of collection jobs.
    
-   By default, service discovery is performed only on pods in the Running state.
    
-   Service discovery is optimized to reduce memory usage.
    
-   Log output is optimized to reduce duplicate logs.
    
-   API Priority and Fairness (APF) metrics of API Server are supported.
    

V1.1.30

March 2025

-   The leader election logic among multiple runtime replicas is optimized.
    
-   Plaintext key parsing errors in certain scenarios are fixed.
    
-   The problem where the last collection job cannot be stopped properly when all collection configurations are deleted is resolved.
    
-   The collection method for virtual-kubelet nodes is optimized to return only metrics of the current node.
    
-   The GPU Exporter collection configuration is adjusted to include the own information of the GPU Exporter Pod in labels starting with `source_` to avoid conflicts with labels in the timeline.
    
-   Error retries are added to prevent token refresh failures.
    

V1.1.27

January 2025

-   The scheduling settings are optimized for workloads in ACK Edge clusters.
    
-   Security hardening is enabled for certain data collection jobs in ACK Edge clusters.
    
-   The cAdvisor uses a service discovery mode that ensures compatibility with Container Service for Kubernetes (ACK) clusters later than V1.20.0.
    

## 2024

### **Prometheus agent**

**Prometheus agent version**

**Release date**

**Metric**

**Description**

V1.1.25

October 2024

ACK environment

-   New metrics are supported for Node Exporter and Kube State Metrics.
    
-   Service discovery is supported for Ingress V1.
    
-   The cAdvisor data collection is integrated for Virtual Kubelet nodes.
    
-   The compatibility with the Exemplar timeline format of OpenMetrics is supported.
    
-   The issue that metric labels are not sorted alphabetically in certain scenarios is fixed.
    
-   The issue that sampling configurations are not updated correctly in certain scenarios is fixed.
    
-   The issue that Service Monitors assigned the same targets do not sample data correctly is fixed.
    

V1.1.22

September 2024

ACK environment

-   Some of the basic metrics of Prometheus Node Exporter and kube-state-metrics are supported.
    
-   The `/aliyun` page corresponding to port 9335 of the arms-prom-admin service is removed from the arms-prom namespace to meet security compliance requirements.
    

V1.1.20

May 2024

ACK environment

-   \[Collection\] The following issue is fixed: The built-in collection jobs cannot be overridden by custom collection jobs.
    
-   \[Collection\] aliyun\_prometheus\_agent\_hpa\_max\_limit, a self-monitoring metric for the maximum number of replicas, is added.
    
-   \[Collection\] The running performance of Prometheus agents that are hosted in virtual private clouds (VPCs) is improved.
    
-   \[Collection\] A switch can be turned on to report metrics over HTTP.
    
-   \[Collection\] Adaptive collection of metrics in the ASM mTLS environment is supported.
    
-   \[Collection\] The following issue is fixed: Metric preview URLs contain invalid characters and cannot be opened.
    
-   \[Collection\] The following issue is fixed: The program does not work because non-existent local certification authority (CA) certificates are loaded in the collection configurations.
    
-   \[Collection\] Self-monitoring metrics are added for SAU (Riyadh - Partner Region).
    
-   \[Collection\] Node names can be added as tags for metrics collected by Node Exporter in built-in collection jobs.
    
-   \[Collection\] The registration capability of Prometheus instances is disabled.
    
-   \[Collection\] Bucket-based metric convergence is supported in multi-replica mode.
    
-   \[Management\] An independent component is provided to enable registration of Prometheus instances. By default, the registration mechanism of collection components is disabled.
    
-   \[Management\] The component integration feature of Integration Center can be called in ACK clusters.
    
-   \[Management\] ACK Cluster Monitoring Pro Edition is supported.
    
-   \[Kube-State-Metrics\] The AutoScaling API is upgraded to v2.
    
-   \[Kube-State-Metrics\] The CronJob and PodDisruptionBudget APIs are upgraded to v1.
    
-   \[Kube-State-Metrics\] Security policies are adjusted.
    

Cloud service

-   More efficient data processing capabilities are provided to reduce the latency of metric collection in large-scale data processing scenarios to seconds.
    
-   Metric collection starts in seconds rather than minutes for newly integrated cloud services.
    
-   Custom tags can be added to the metrics of cloud services.
    
-   Due to the architecture adjustment, specific free-of-charge self-monitoring metrics that are related to the Prometheus agent are no longer delivered to the Prometheus instances created by users. If you have configured alert rules that are dependent on the self-monitoring metrics of non-cloud services, such as metrics whose names start with aliyun\_arms, remove the dependency before you upgrade the agent.
    
-   Metrics that contain `arms_instance_id` and `arms_instance_name` are deprecated.
    
-   Due to the architecture adjustment, target queries are no longer supported.
    

V1.1.19

March 2024

ACK environment

-   The latency of metric collection for newly integrated large-scale clusters is reduced.
    
-   The service discovery mode is optimized to reduce the impact of configuration changes in different collection jobs.
    
-   More self-monitoring metrics are provided to identify incomplete data caused by exceptions that occur during collection.
    
-   A more flexible whitelist can be configured to specify the metrics to be collected.
    
-   Specific data collection issues in edge cases are fixed.
    

## 2023

**View the release notes in 2023**

**Helm version**

**Agent image version**

**Description**

**Release date**

**Impact**

V1.1.18

registry.{REGION}.aliyuncs.com/acs/arms-prometheus-agent: V4.0.0

-   The requests and limits of resources, such as Node Exporter and GPU Exporter, are adjusted.
    
-   The port of Node Exporter can be modified. Default value: 9100.
    

December 2023

No impact on workloads.

V1.1.17

registry.{REGION}.aliyuncs.com/acs/arms-prometheus-agent: V4.0.0

-   Metric collection jobs can be created for cluster events. Cluster events can be displayed in the Kubernetes Deployment dashboard.
    
-   Self-monitoring metrics can be instrumented based on the service-level agreement (SLA) to stabilize the dashboard data. SLA stability data can be displayed in a self-monitoring dashboard.
    
-   ServiceMonitor supports the BasicAuth authentication method. Secrets must be in the same namespace as ServiceMonitor.
    
-   Metrics Metadata capabilities are provided to display the description of specific metrics.
    
-   The Agent Chart version can be passed to the server. Then, the server initializes or updates the dashboard based on the version.
    
-   Remote write self-monitoring metrics are supported to calculate the time consumed to send data in each batch.
    
-   Metrics about the errors and latency of basic metric collection are supported.
    
-   Metrics about the errors and latency of business metric collection are supported.
    
-   The queue\_config parameter in remote write settings supports the following default values: min\_shards=10, max\_samples\_per\_send=5000, and capacity=10000. This improves the adaptability of large-scale clusters.
    
-   The service discovery methods, especially the PV settings of Container Storage Interface (CSI) data collection, are optimized.
    
-   The senderLoop distribution frequency is optimized and the syncWorkersSeries frequency is modified to reduce unnecessary disturbances.
    
-   Some logs are simplified. Detailed information, such as the time consumed for trace capturing, can be displayed in some logs.
    
-   The collection period and collection timeout settings of basic metric collection jobs are separately configured, and the global configurations are no longer used. This reduces unnecessary interference on basic metric data collection.
    
-   The interaction logic in master-slave multi-replica mode is optimized. The Masters and Workers no longer affect each other. This helps improve stability.
    
-   The policy that specifies how the Master distributes Targets is optimized. This saves about 30% CPU utilization and 40% memory resources, and improves data collection performance.
    
-   metrics\_relabel is optimized. CPU utilization is reduced by 70%.
    
-   The multi-tenancy listening logic of Informer is optimized to save CPU utilization by 20% in multi-tenancy scenarios.
    
-   Cache IP addresses can be automatically used if CoreDNS fails to resolve domain names in real time. This improves the success rate of data transmission.
    
-   The distribution and collection configuration logic of SendConfig is optimized to improve configuration stability.
    
-   The Master prefetching policy is optimized to reduce the resource overhead of Master, and improve Master service discovery and target scheduling capabilities.
    
-   Adaptive control is implemented on data packets that exceed 1 MB in size in a single batch. This reduces data loss caused by backend restrictions.
    
-   The issue that some ScrapeLoop Targets are repeatedly collected is fixed.
    
-   In multi-tenancy scenarios, the Label caches of pods are not updated in a timely manner. As a result, duplicate timelines are generated. This issue is fixed.
    
-   Some targets related to out-of-memory (OOM) errors or replica restarting are not collected. This issue is fixed.
    
-   Secret parsing issues and remote write Header transmission issues are fixed.
    
-   Occasionally, the Kubernetes-pods cannot be shut down. This issue is fixed.
    
-   The issue that the global default parameters and the external\_labels parameter do not take effect is fixed. Parameters can be modified.
    

August 2023

No impact on workloads.

V1.1.15

registry.{REGION}.aliyuncs.com/acs/arms-prometheus-agent: V4.0.0

Helm is compatible with ACK clusters that run Kubernetes 1.26.

May 2023

No impact on workloads.

V1.1.14

registry.{REGION}.aliyuncs.com/acs/arms-prometheus-agent: V4.0.0

-   The memory usage is reduced by about 30% and the CPU utilization is reduced by about 50%.
    
-   Dependencies on CoreDNS domain name resolution are reduced, and data transmission stability is enhanced.
    
-   ServiceMonitor supports the BasicAuth authentication method.
    
-   Secret parsing issues of RemoteWrite are fixed.
    
-   Three self-monitoring metrics are released.
    
-   The description of specific metrics can be displayed in metrics metadata.
    
-   Metric collection jobs can be created for cluster events.
    
-   The multi-master mechanism is launched. It can handle service discovery and target scheduling in ultra-large clusters. The feature is disabled by default.
    
-   More than three bugs are fixed.
    

No impact on workloads.

V1.1.13

-   registry.{REGION}.aliyuncs.com/acs/arms-prometheus-agent: V4.0.0
    
-   registry.{REGION}.aliyuncs.com/acs/gpu-prometheus-exporter: V2.3.6-994eaf7-aliyun
    

-   GPU-Exporter V2.3.6-994eaf7-aliyun is upgraded.
    
-   Clusters registered in ACK One can be monitored.
    

April 2023

No impact on workloads.

V1.1.12

-   registry.{REGION}.aliyuncs.com/acs/arms-prometheus-agent: V3.2.1
    
-   registry.{REGION}.aliyuncs.com/acs/gpu-prometheus-exporter: V2.3.6-fdb40f2-aliyun
    

-   GPU-Exporter V2.3.6-fdb40f2-aliyun is upgraded.
    
-   Component image pulling is accelerated.
    

February 2023

No impact on workloads.

## 2022

**View the release notes in 2022**

**Version**

**Image address**

**Description**

**Release date**

**Impact**

V1.1.11

-   registry.{REGION}.aliyuncs.com/acs/arms-prometheus-agent: V3.2.1
    

-   The service degradation feature is provided. If a remote write fails, data collection on the primary link stably continues.
    
-   The Global Config in collection jobs can be modified.
    
-   The Remote Write feature is enhanced. If you fail to resolve a domain name by using CoreDNS, the cached IP address corresponding to the domain name is sent.
    
-   Remote Write allows you to configure multiple IP addresses.
    

December 2022

No impact on workloads.

V1.1.9

-   registry.{REGION}.aliyuncs.com/acs/arms-prometheus-agent: V3.2.0
    

-   The Prometheus agent supports the following CPU architectures: AMD64, ARM, ARM64, ppc64le, and s390x.
    
-   The self-monitoring capabilities of the Prometheus agent are enhanced.
    
-   The garbage collection (GC) policy of the Prometheus agent is optimized.
    
-   The multi-replica Target scheduling policy is optimized to prevent memory leaks of Worker nodes.
    
-   The memory degradation issue of the Prometheus agent is fixed.
    
-   The deadlock of boundary conditions in multi-replica scenarios is fixed.
    
-   The following service discovery capabilities are provided: IONOS, PuppetDB, Uyuni, and Vultr.
    

September 2022

No impact on workloads.

V1.1.7

-   arms-prom-operator: V3.1.0
    
-   gpu-prometheus-exporter: V2.3.6-2.0.0-0c0440f
    

The metrics and dashboards for the latest GPU Exporter are supported. For more information, see [Enable GPU monitoring for ACK clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/enable-gpu-monitoring-for-a-cluster#task-2226106).

July 2022

No impact on workloads.

V1.1.6

-   arms-prom-operator: V3.1.0
    
-   gpu-prometheus-exporter: V1.0.1-26c5321
    

The data collection issue of GPU Exporter V1.x is fixed.

June 2022

No impact on workloads.

V1.1.5

-   registry.{REGION}.aliyuncs.com/acs/arms-prometheus-agent: V3.1.0
    

-   The integration center is supported.
    
-   Clusters that contain more than 10,000 nodes are supported.
    
-   ServiceMonitor and PodMonitor configurations that are not created in the Managed Service for Prometheus console can be synchronized to Managed Service for Prometheus.
    
-   ServiceMonitor and PodMonitor configurations that declaratively specify how groups of services are monitored and are not created in the Managed Service for Prometheus console can be discovered by using the service discovery feature.
    
-   The maximum number of agent HPA replicas can be configured by using parameters.
    
-   The fields related to the Job metric of Managed Service for Prometheus can be edited.
    
-   The configuration files related to ServiceMonitor, PodMonitor, and Prometheus.yaml can be verified.
    
-   CPU, memory usage, and system stability are optimized.
    

May 2022

No impact on workloads.

V1.1.4

-   The security of Node Exporter is enhanced.
    
-   The issue that may occur during the volume mounting of GPU Exporter is fixed.
    

April 2022

No impact on workloads.

V1.1.3

Helm is compatible with the Kubernetes version 1.22 of ACK clusters.

February 2022

No impact on workloads.

V1.1.2

kube-state-metrics V2.3.0-755434c-aliyun is updated.

January 2022

No impact on workloads.

## 2021

**View the release notes in 2021**

**Version**

**Image address**

**Description**

**Release date**

**Impact**

V1.1.11

-   registry.{REGION}.aliyuncs.com/acs/arms-prometheus-agent: V3.2.1
    

-   The service degradation feature is provided. If a remote write fails, data collection on the primary link stably continues.
    
-   The Global Config in collection jobs can be modified.
    
-   The Remote Write feature is enhanced. If you fail to resolve a domain name by using CoreDNS, the cached IP address corresponding to the domain name is sent.
    
-   Remote Write allows you to configure multiple IP addresses.
    

December 2022

No impact on workloads.

V1.1.9

-   registry.{REGION}.aliyuncs.com/acs/arms-prometheus-agent: V3.2.0
    

-   The Prometheus agent supports the following CPU architectures: AMD64, ARM, ARM64, ppc64le, and s390x.
    
-   The self-monitoring capabilities of the Prometheus agent are enhanced.
    
-   The GC policy of the Prometheus agent is optimized.
    
-   The multi-replica Target scheduling policy is optimized to prevent memory leaks of Worker nodes.
    
-   The memory degradation issue of the Prometheus agent is fixed.
    
-   The deadlock of boundary conditions in multi-replica scenarios is fixed.
    
-   The following service discovery capabilities are provided: IONOS, PuppetDB, Uyuni, and Vultr.
    

September 2022

No impact on workloads.

V1.1.7

-   arms-prom-operator: V3.1.0
    
-   gpu-prometheus-exporter: V2.3.6-2.0.0-0c0440f
    

The metrics and dashboards for the latest GPU Exporter are supported. For more information, see [Enable GPU monitoring for ACK clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/enable-gpu-monitoring-for-a-cluster#task-2226106).

July 2022

No impact on workloads.

V1.1.6

-   arms-prom-operator: V3.1.0
    
-   gpu-prometheus-exporter: V1.0.1-26c5321
    

The data collection issue of GPU exporter V1x is fixed.

June 2022

No impact on workloads.

V1.1.5

-   registry.{REGION}.aliyuncs.com/acs/arms-prometheus-agent: V3.1.0
    

-   The integration center is supported.
    
-   Clusters that contain more than 10,000 nodes are supported.
    
-   ServiceMonitor and PodMonitor configurations that are not created in the Managed Service for Prometheus console can be synchronized to Managed Service for Prometheus.
    
-   ServiceMonitor and PodMonitor configurations that declaratively specify how groups of services are monitored and are not created in the Managed Service for Prometheus console can be discovered by using the service discovery feature.
    
-   The maximum number of agent HPA replicas can be configured by using parameters.
    
-   The fields related to the Job metric of Managed Service for Prometheus can be edited.
    
-   The configuration files related to ServiceMonitor, PodMonitor, and Prometheus.yaml can be verified.
    
-   CPU, memory usage, and system stability are optimized.
    

May 2022

No impact on workloads.

V1.1.4

-   The security of Node Exporter is enhanced.
    
-   The issue that may occur during the volume mounting of GPU Exporter is fixed.
    

April 2022

No impact on workloads.

V1.1.3

Helm is compatible with the Kubernetes version 1.22 of ACK clusters.

February 2022

No impact on workloads.

V1.1.2

kube-state-metrics V2.3.0-755434c-aliyun is updated.

January 2022

No impact on workloads.

## 2020

**View the release notes in 2020**

**Helm version**

**Agent image version**

**Description**

**Release date**

**Impact**

V0.1.5

arms-prom-operator: V0.1

-   ACK clusters that run Kubernetes 1.18 are supported.
    
-   Images can be pulled over internal endpoints.
    

October 2020

No impact on workloads.

V0.1.4

arms-prom-operator: V0.1

-   Out-of-the-box Kubernetes monitoring, including pod monitoring, node monitoring, and resource monitoring, is supported. This feature is used to monitor the Kubernetes container runtime where applications are deployed.
    
-   Web-based component monitoring, including nine common components such as MySQL, Redis, Kafka, ZooKeeper, and NGINX, is supported. This feature is suitable for scenarios where applications depend on middleware.
    
-   Managed Service for Prometheus is fully managed. It provides the prometheus.yaml collection rule, Grafana dashboards, and alerting system. Data can be migrated from self-managed Prometheus systems to Alibaba Cloud.
    
-   The bug related to authentication is fixed.
    

July 2020

No impact on workloads.

V0.1.3

arms-prom-operator: V0.1

The number of resources used by the Prometheus agent is limited.

April 2020

No impact on workloads.

## 2019

**View the release notes in 2019**

**Helm version**

**Agent image version**

**Description**

**Release date**

**Impact**

V0.1.2

arms-prom-operator: V0.1

First release.

August 2019

No impact on workloads.

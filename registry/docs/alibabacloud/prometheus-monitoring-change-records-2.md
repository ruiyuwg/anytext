This topic contains the release notes for the Prometheus agent.

## **2025**

### **Prometheus agent**

**Prometheus agent version**

**Release date**

**Description**

v1.1.33

August 2025

-   Chore: Removes all pprof dependencies.
    
-   Upgrades the GPU Exporter version to v3.3.9-1.12.16-2.6.6.1-2-473e40f-aliyun to be compatible with earlier driver versions.
    

v1.1.32

June 2025

-   Updates the GPU Exporter image version.
    
-   Adds self-monitoring metrics for the internal queue.
    
-   The remote write timeout is now determined by the remote write configuration. The default value is 30s.
    

v1.1.31

Phased release starting from March 2025

-   Optimizes the scheduling of large-scale targets to accelerate the allocation of collection jobs.
    
-   Performs service discovery only on pods in the Running state by default.
    
-   Optimizes service discovery to reduce memory usage.
    
-   Optimizes log output to reduce duplicate logs.
    
-   Adds support for API Priority and Fairness (APF) metrics of API Server.
    

v1.1.30

March 2025

-   Optimizes the leader election logic among multiple runtime replicas.
    
-   Fixes an issue where plaintext keys failed to be parsed in some scenarios.
    
-   Fixes an issue where the last collection job could not be stopped when all collection configurations were deleted.
    
-   Optimizes the collection method for virtual-kubelet nodes to return only the metrics of the current node.
    
-   Adjusts the GPU Exporter collection configuration to add the information of the GPU Exporter pod to labels that start with `source_`. This avoids conflicts with labels in the timeline.
    
-   Adds a retry mechanism to prevent token refresh failures.
    

v1.1.27

January 2025

-   Adjusts the scheduling settings for workloads in edge clusters.
    
-   Performs security hardening for some collection jobs in edge clusters.
    
-   Changes the cAdvisor service discovery to a more compatible mode to support container clusters with a version earlier than 1.20.0.
    

## 2024

### **Prometheus agent**

**Prometheus agent version**

**Release date**

**Metric**

**Description**

v1.1.25

October 2024

Container environment

-   Adds support for new metrics from Node Exporter and Kube State Metrics.
    
-   Adds support for service discovery for Ingress v1.
    
-   Adapts cAdvisor data collection for Virtual Kubelet nodes.
    
-   Adds compatibility for the exemplar timeline format of the OpenMetrics protocol.
    
-   Fixes an issue where metric labels were not sorted in lexicographic order in some scenarios.
    
-   Fixes an issue where collection configurations failed to update in some scenarios.
    
-   Fixes an issue where data was not collected correctly when different ServiceMonitors were configured with the same collection target.
    

v1.1.22

September 2024

Container environment

-   Adds support for some basic metrics from Node Exporter and Kube State Metrics (KSM).
    
-   Removes the `/aliyun` page of the arms-prom-admin service on port 9335 in the arms-prom namespace to meet security compliance requirements.
    

v1.1.20

May 2024

Container environment

-   \[Collection\] Fixes an issue where built-in collection jobs could not be overwritten by custom jobs.
    
-   \[Collection\] Adds the \`aliyun\_prometheus\_agent\_hpa\_max\_limit\` self-monitoring metric for the maximum number of replicas.
    
-   \[Collection\] Improves support for running in VPC-hosted scenarios.
    
-   \[Collection\] Adds a feature switch to enable metric reporting over HTTPS.
    
-   \[Collection\] Adds support for adaptive metric collection in ASM mTLS environments.
    
-   \[Collection\] Fixes an issue where metric preview URLs failed because they contained invalid characters.
    
-   \[Collection\] Fixes an issue where the program did not work because the collection configuration loaded a local CA certificate that did not exist.
    
-   \[Collection\] Adds the push of self-monitoring metrics for regions such as Saudi Arabia.
    
-   \[Collection\] Adds node name labels to Node Exporter metrics in built-in collection jobs.
    
-   \[Collection\] Disables the registration capability of Prometheus storage instances.
    
-   \[Collection\] Supports metric convergence based on bucketing in multi-replica mode.
    
-   \[Management\] Provides an independent component for Prometheus instance registration. The registration mechanism for collection components is disabled by default.
    
-   \[Management\] Provides the ability to install and uninstall Integration Center components.
    
-   \[Management\] Adds support for enabling Container Monitoring Pro Edition.
    
-   \[Kube-State-Metrics\] Upgrades the AutoScaling API to v2.
    
-   \[Kube-State-Metrics\] Upgrades the CronJob and PodDisruptionBudget API versions to v1.
    
-   \[Kube-State-Metrics\] Adjusts security policies.
    

Alibaba Cloud service

-   Provides more timely data processing. In large-scale data collection scenarios, the metric latency is reduced to seconds.
    
-   Metric collection starts in seconds instead of minutes for newly integrated Alibaba Cloud services.
    
-   Adds the ability to inject custom tags from Alibaba Cloud services into metrics.
    
-   Because of an architecture adjustment, self-monitoring metrics related to the Prometheus Agent are no longer delivered to user instances. These metrics are free of charge. If your alert rules depend on self-monitoring metrics for non-cloud services, such as metrics starting with \`aliyun\_arms\`, remove the dependency before you upgrade.
    
-   The `arms_instance_id` and `arms_instance_name` metrics from some older instances are deprecated in this version.
    
-   Because of an architecture adjustment, querying the list of targets is no longer supported.
    

v1.1.19

March 2024

Container environment

-   Improves the metric collection latency for newly connected large-scale clusters.
    
-   Optimizes the service discovery mode to reduce the impact of configuration changes in different collection jobs.
    
-   Provides more self-monitoring metrics to identify incomplete data caused by collection exceptions.
    
-   Supports more flexible whitelist configurations for metric cropping.
    
-   Fixes a number of collection exceptions that occurred in edge cases.
    

## 2023

**Expand to view the 2023 records of component changes**

**Helm version**

**Agent image version**

**Description**

**Release date**

**Impact**

v1.1.18

registry.{REGION}.aliyuncs.com/acs/arms-prometheus-agent:v4.0.0

-   Adjusts the request and limit of resources such as Node Exporter and GPU Exporter.
    
-   Adds support for configuring the Node Exporter port number. The default value remains 9100.
    

December 2023

This upgrade does not affect your business.

v1.1.17

registry.{REGION}.aliyuncs.com/acs/arms-prometheus-agent:v4.0.0

-   Adds a collection task for cluster events to support the Kubernetes deployment dashboard.
    
-   Adds instrumentation of self-monitoring metrics based on Service-Level Agreement (SLA) for the SLA stability dashboard.
    
-   Adds support for the BasicAuth authentication method for ServiceMonitor. The Secret must be in the same namespace as the ServiceMonitor.
    
-   Adds the Metrics Metadata feature to display the meaning of specific metrics.
    
-   Adds support for passing the Agent Chart version to the server. The server then initializes or upgrades the dashboard based on this version number.
    
-   Adds self-monitoring metrics for RemoteWrite to count the time consumed to send each data batch.
    
-   Adds self-monitoring metrics for errors and latency in basic metric collection.
    
-   Adds self-monitoring metrics for errors and latency in business metric collection.
    
-   Optimizes the default \`queue\_config\` parameters for RemoteWrite to \`min\_shards=10\`, \`max\_samples\_per\_send=5000\`, and \`capacity=10000\` to improve adaptability for large-scale clusters.
    
-   Optimizes the service discovery method for CSI collection jobs, mainly for PV collection.
    
-   Optimizes the senderLoop distribution frequency and modifies the syncWorkersSeries frequency to reduce unnecessary disturbances.
    
-   Streamlines some logs and adds more detailed information about the time consumed by the scrape link to other logs.
    
-   Optimizes the collection period and timeout settings for basic metric collection jobs. These jobs are now configured separately and no longer use the global configuration. This reduces unnecessary interference with basic metric collection.
    
-   Optimizes the interaction logic in the multi-replica Master-Slave mode. Master and Worker nodes no longer affect each other, which improves stability.
    
-   Optimizes the Master node's target distribution policy. This saves about 30% of CPU and 40% of memory overhead and improves collection performance.
    
-   Optimizes metrics\_relabel, reducing CPU usage by 70%.
    
-   Optimizes the Informer listener logic in multitenancy scenarios, saving about 20% of CPU overhead.
    
-   Optimizes the handling of occasional CoreDNS domain name resolution failures. The system automatically switches to and continues to use cached IP addresses. This reduces the dependency on real-time domain name resolution by CoreDNS and improves data sending stability.
    
-   Optimizes the logic for distributing collection configurations in SendConfig to improve distribution stability.
    
-   Optimizes the Master pre-scrape policy to save Master resource overhead and improve the Master's service discovery and target scheduling capabilities.
    
-   Optimizes the automatic rotation for single large packets that are greater than 1 MB. This reduces data packet loss caused by backend limitations.
    
-   Fixes an issue where some collection targets in ScrapeLoop could not be stopped, which caused repeated collection.
    
-   Fixes an issue in multitenancy scenarios where the label cache for pods was not updated promptly, which caused one timeline to become two.
    
-   Fixes an issue where the Master node occasionally failed to distribute targets for OOM or restarted replicas, which caused some collection targets to be lost.
    
-   Fixes issues with parsing Secret types and transmitting headers in RemoteWrite.
    
-   Fixes an issue where the shutdown operation for Kubernetes pods occasionally did not take effect.
    
-   Fixes an issue where the global default parameters and external\_labels did not take effect. Custom modifications are now supported.
    

August 2023

This upgrade does not affect your business.

v1.1.15

registry.{REGION}.aliyuncs.com/acs/arms-prometheus-agent:v4.0.0

Adapts to Container Service for Kubernetes (ACK) clusters of version 1.26.

May 2023

This upgrade does not affect your business.

v1.1.14

registry.{REGION}.aliyuncs.com/acs/arms-prometheus-agent:v4.0.0

-   Optimizes resource consumption by reducing memory usage by about 30% and CPU usage by about 50%, which improves collection capabilities.
    
-   Further reduces the dependency on CoreDNS domain name resolution to improve data sending stability.
    
-   ServiceMonitor supports BasicAuth authentication.
    
-   Fixes issues with parsing Secret types in RemoteWrite.
    
-   Adds three self-monitoring instrumentation points.
    
-   Metrics Metadata displays the meaning of metrics.
    
-   Adds a collection task to collect cluster event metrics.
    
-   Provides a Multi-Master mechanism to handle service discovery and target scheduling in extra-large clusters. This feature is disabled by default.
    
-   Fixes more than three bugs.
    

This upgrade does not affect your business.

v1.1.13

-   registry.{REGION}.aliyuncs.com/acs/arms-prometheus-agent:v4.0.0
    
-   registry.{REGION}.aliyuncs.com/acs/gpu-prometheus-exporter:v2.3.6-994eaf7-aliyun
    

-   Upgrades GPU-Exporter to v2.3.6-994eaf7-aliyun.
    
-   Adds support for registered clusters in ACK One.
    

April 2023

This upgrade does not affect your business.

v1.1.12

-   registry.{REGION}.aliyuncs.com/acs/arms-prometheus-agent:v3.2.1
    
-   registry.{REGION}.aliyuncs.com/acs/gpu-prometheus-exporter:v2.3.6-fdb40f2-aliyun
    

-   Upgrades GPU-Exporter to v2.3.6-fdb40f2-aliyun.
    
-   Optimizes the pull speed of component images.
    

February 2023

This upgrade does not affect your business.

## 2022

**Expand to view 2022 component change records**

**Version**

**Image address**

**Description**

**Release date**

**Impact**

v1.1.11

-   registry.{REGION}.aliyuncs.com/acs/arms-prometheus-agent:v3.2.1
    

-   Adds a service degradation feature. This ensures stable collection on the primary link if a remote write fails.
    
-   Supports modification of the Global Config in collection jobs.
    
-   Enhances the Remote Write feature. If CoreDNS fails to resolve a domain name, the system automatically switches to sending data using a pre-cached IP address.
    
-   Remote Write supports configuring multiple sending addresses.
    

December 2022

This upgrade does not affect your business.

v1.1.9

-   registry.{REGION}.aliyuncs.com/acs/arms-prometheus-agent:v3.2.0
    

-   The agent supports multiple CPU architectures, including amd64, arm, arm64, ppc64le, and s390x.
    
-   Enhances the self-monitoring capabilities of the agent.
    
-   Optimizes the memory garbage collection policy of the agent.
    
-   Optimizes the multi-replica target scheduling policy to prevent memory leaks on Worker nodes.
    
-   Fixes the memory degradation issue of the agent.
    
-   Fixes a deadlock issue at boundary conditions in multi-replica status.
    
-   Adds four new service discovery capabilities: IonOS, PuppetDB, Uyuni, and Vultr.
    

September 2022

This upgrade does not affect your business.

v1.1.7

-   arms-prom-operator:v3.1.0
    
-   gpu-prometheus-exporter:v2.3.6-2.0.0-0c0440f
    

Adds support for the metrics and dashboards of the new GPU-Exporter. For more information, see [Enable GPU monitoring for a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/enable-gpu-monitoring-for-a-cluster#task-2226106).

July 2022

This upgrade does not affect your business.

v1.1.6

-   arms-prom-operator:v3.1.0
    
-   gpu-prometheus-exporter:v1.0.1-26c5321
    

Fixes the data collection issue for GPU-Exporter v1.x.

June 2022

This upgrade does not affect your business.

v1.1.5

-   registry.{REGION}.aliyuncs.com/acs/arms-prometheus-agent:v3.1.0
    

-   Adds support for Integration Center.
    
-   Adds support for extra-large clusters with more than 10,000 nodes.
    
-   You can configure synchronization for ServiceMonitors and PodMonitors created outside the Managed Service for Prometheus console.
    
-   Supports declarative service discovery for ServiceMonitor and PodMonitor configurations that are not created in the Managed Service for Prometheus console.
    
-   Supports parameterized configuration for the upper limit of agent HPA replicas.
    
-   Supports editing some fields of the Prometheus basic metrics job.
    
-   Supports online validation of configuration files related to ServiceMonitor, PodMonitor, and Prometheus.yaml.
    
-   Optimizes CPU and memory resource usage and system stability.
    

May 2022

This upgrade does not affect your business.

v1.1.4

-   Performs security hardening for node-exporter.
    
-   Fixes a volume mounting issue for gpu-exporter.
    

April 2022

This upgrade does not affect your business.

v1.1.3

Compatible with clusters of version 1.22.

February 2022

This upgrade does not affect your business.

v1.1.2

Upgrades kube-state-metrics to v2.3.0-755434c-aliyun.

January 2022

This upgrade does not affect your business.

## 2021

**Expand to view the component change records for 2021**

**Version**

**Image address**

**Changes**

**Release date**

**Impact**

v1.1.11

-   registry.{REGION}.aliyuncs.com/acs/arms-prometheus-agent:v3.2.1
    

-   Adds a service degradation feature. This ensures stable collection on the primary link if a remote write fails.
    
-   Supports modification of the Global Config in collection jobs.
    
-   Enhances the Remote Write feature. If CoreDNS fails to resolve a domain name, the system automatically switches to sending data using a pre-cached IP address.
    
-   Remote Write supports configuring multiple sending addresses.
    

December 2022

This upgrade does not affect your business.

v1.1.9

-   registry.{REGION}.aliyuncs.com/acs/arms-prometheus-agent:v3.2.0
    

-   The agent supports multiple CPU architectures, including amd64, arm, arm64, ppc64le, and s390x.
    
-   Enhances the self-monitoring capabilities of the agent.
    
-   Optimizes the memory garbage collection policy of the agent.
    
-   Optimizes the multi-replica target scheduling policy to prevent memory leaks on Worker nodes.
    
-   Fixes the memory degradation issue of the agent.
    
-   Fixes a deadlock issue at boundary conditions in multi-replica status.
    
-   Adds four new service discovery capabilities: IonOS, PuppetDB, Uyuni, and Vultr.
    

September 2022

This upgrade does not affect your business.

v1.1.7

-   arms-prom-operator:v3.1.0
    
-   gpu-prometheus-exporter:v2.3.6-2.0.0-0c0440f
    

Adds support for the metrics and dashboards of the new GPU-Exporter. For more information, see [Enable GPU monitoring for a cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/enable-gpu-monitoring-for-a-cluster#task-2226106).

July 2022

This upgrade does not affect your business.

v1.1.6

-   arms-prom-operator:v3.1.0
    
-   gpu-prometheus-exporter:v1.0.1-26c5321
    

Fixes the data collection issue for GPU-Exporter v1x.

June 2022

This upgrade does not affect your business.

v1.1.5

-   registry.{REGION}.aliyuncs.com/acs/arms-prometheus-agent:v3.1.0
    

-   Adds support for Integration Center.
    
-   Adds support for extra-large clusters with more than 10,000 nodes.
    
-   Supports synchronization of ServiceMonitor and PodMonitor configurations that are not created in the Managed Service for Prometheus console.
    
-   Supports declarative service discovery for ServiceMonitor and PodMonitor configurations that are not created in the Managed Service for Prometheus console.
    
-   Supports parameterized configuration for the upper limit of agent HPA replicas.
    
-   Supports editing some fields of the Prometheus basic metrics job.
    
-   Supports online validation of configuration files related to ServiceMonitor, PodMonitor, and Prometheus.yaml.
    
-   Optimizes CPU and memory resource usage and system stability.
    

May 2022

This upgrade does not affect your business.

v1.1.4

-   Performs security hardening for node-exporter.
    
-   Fixes a volume mounting issue for gpu-exporter.
    

April 2022

This upgrade does not affect your business.

v1.1.3

Compatible with clusters of version 1.22.

February 2022

This upgrade does not affect your business.

1.1.2

Upgrades kube-state-metrics to v2.3.0-755434c-aliyun.

January 2022

This upgrade does not affect your business.

## 2020

**Expand to view the 2020 component change records**

**Helm version**

**Agent image version**

**Function Overview**

**Release date**

**Impact**

v0.1.5

arms-prom-operator:v0.1

-   Adds support for Container Service for Kubernetes (ACK) clusters of version 1.18.
    
-   Supports pulling images from internal endpoints of a region.
    

October 2020

This upgrade does not affect your business.

v0.1.4

arms-prom-operator:v0.1

-   Provides out-of-the-box Kubernetes container monitoring, including pod, node, and resource monitoring. This is mainly used to monitor the Kubernetes container runtime where applications are deployed.
    
-   Provides web-based monitoring for nine common components, such as MySQL, Redis, Kafka, ZooKeeper, and Nginx. This is mainly used for scenarios where applications depend on middleware.
    
-   Provides a fully managed Managed Service for Prometheus system, including Prometheus.yaml collection rules, Grafana dashboards, and an alerting system. This meets the needs for migrating self-managed Prometheus to Alibaba Cloud.
    
-   Bug fix: Fixes a bug related to access authentication.
    

July 2020

This upgrade does not affect your business.

v0.1.3

arms-prom-operator:v0.1

Adds resource usage limits for the agent.

April 2020

This upgrade does not affect your business.

## 2019

**Expand to view component change records for 2019**

**Helm version**

**Agent image version**

**Function Overview**

**Release date**

**Impact**

v0.1.2

arms-prom-operator:v0.1

Initial release.

August 2019

This upgrade does not affect your business.

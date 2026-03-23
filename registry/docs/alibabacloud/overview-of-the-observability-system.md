The observability of a system architecture that is built on top of Container Service for Kubernetes (ACK) can be achieved at four layers. The four layers from bottom to top are: infrastructure, container performance, application performance, and business. While the monitoring architecture of ACK Edge aligns with that of ACK, the monitoring capabilities vary. This topic describes the observability features of each layer in ACK Edge clusters.

## Infrastructure observability

Observability of underlying resources in ACK Edge allows you to locate the traces of resource pools that are composed of pods and nodes, visualize topological relationships, and monitor infrastructure. For example, you can monitor the performance of hosts and basic network plug-ins.

**Solution**

**Description**

**Scenario**

**Reference**

Visualized architecture discovery

Businesses within an ACK cluster run in resource pools that are composed of nodes. It is difficult to locate the traces and topological relationships of pods. The challenges are how to monitor the status of Kubernetes workloads in a visualized manner and better visualize the traffic throughput of Kubernetes clusters.

Kubernetes monitoring used by ACK integrates Extended Berkeley Packet Filter (eBPF) and Managed Service for Prometheus to support metric collection, application tracing, log analysis, and event monitoring. Kubernetes monitoring allows you to monitor ACK Edge clusters from end to end. It endows network monitoring and visualized architecture awareness capabilities to ACK clusters. Kubernetes monitoring provides developers and O&M engineers with intrusion-free observability solutions.

All scenarios are supported.

-   Monitor network traffic between nodes and pods in ACK clusters.
    
-   Monitor network traffic on top of Layer 4 between pods, monitor network connections established based on TCP, HTTP, and other protocols, and monitor DNS resolution.
    

For more information, see [Cluster topology monitoring](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/architecture-aware-monitoring#task-2214403).

## Container performance observability

Observability of container abstractions in the observability system is built on top of ACK Edge. Container performance observability allows you to monitor the performance of clusters and containers, and detect cluster events.

### Collect the performance metrics of clusters and container**s**

**Solution**

**Description**

**Scenario**

**Reference**

Managed Service for Prometheus

Prometheus is an open source service that is used to monitor containers based on cloud-native metrics. Managed Service for Prometheus is a managed monitoring service that is fully interfaced with the open source Prometheus ecosystem. Managed Service for Prometheus monitors a wide array of components and provides multiple ready-to-use dashboards. With Managed Service for Prometheus, you do not need to build a self-managed monitoring systems or worry about the underlying data storage, data display, or system O&M. We recommend that you use Managed Service for Prometheus.

All scenarios are supported, such as cluster component metric collection, and observability customization for advanced monitoring features.

For more information, see [Use Managed Service for Prometheus to monitor ACK Edge clusters](/help/en/ack/ack-edge/user-guide/monitor-ack-edge-clusters-with-managed-service-for-prometheus).

### Monitor the events of clusters and containers

**Solution**

**Description**

**Scenario**

**Reference**

Event monitoring

Event monitoring complements resource monitoring by offering real-time and accurate insights across various scenarios. Developers can diagnose cluster issues using real-time event data. We recommend that you use Simple Log Service to monitor events.

All scenarios are supported.

For more information, see [event monitoring](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/event-monitoring#task-1461430).

## Application performance observability

Observability that covers application metrics, tracing, and logging in the observability system is built on top of ACK Edge. For example, you can deploy a Java application in an ACK Edge cluster and monitor the number of threads of the application.

**Solution**

**Description**

**Scenario**

**Reference**

Intrusion-free APM for monitoring Java applications

We recommend that you use Application Real-Time Monitoring Service (ARMS) to monitor application performance. ARMS is an Alibaba Cloud monitoring service for Application Performance Management (APM). To monitor a Java application deployed in an ACK cluster, you only need to install the ARMS component for the Java application. No intrusion to the code is needed. You can use the component to locate faulty interfaces and slow interfaces, tune parameters, detect memory leaks, and identify system performance bottlenecks. This greatly improves troubleshooting efficiency.

Only certain scenarios are supported, such as Java application monitoring. The solution is intrusion-free.

For more information, see [Java Application Monitoring](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/monitor-application-performance#cs-k8s-arms).

## Business observability

Observability of businesses in the observability system is built on top of ACK Edge. After you deploy a highly available and scalable website based on ACK Edge, you can view statistics such as page views (PVs) and unique visitors (UVs). Observability of businesses also allows you to audit application costs.

**Solution**

**Description**

**Scenario**

**Reference**

Tailored logging and monitoring

We recommend that you use Simple Log Service to observe custom metrics. You can customize the content and format of application logs, use Simple Log Service to collect logs, and then configure dashboards in Simple Log Service to monitor your businesses or perform system auditing.

All scenarios are supported, such as traffic monitoring, cost auditing and statistics, and order trend analysis.

For more information, see [Use Simple Log Service to collect container logs from ACK Edge clusters](/help/en/ack/ack-edge/user-guide/use-log-service-to-collect-log-data-from-containers-of-ack-edge-clusters).

Custom dashboards with Managed Service for Grafana

Managed Service for Grafana is a cloud-native O&M data visualization platform. This platform provides O&M-free Grafana runtime environments that can be quickly launched. By default, Managed Service for Grafana can ingest data from Alibaba Cloud services such as database services, Message Queue, Managed Service for Prometheus, and Simple Log Service. Managed Service for Grafana also provides a variety of dashboards to allow you to monitor and maintain systems in a fine-grained manner.

Managed Service for Grafana allows you to analyze and view metrics, logs, and traces. You do not need to worry about server configurations or software updates. This greatly simplifies your O&M work. Empowered by the cloud-native capabilities of Alibaba Cloud, Managed Service for Grafana also comes with higher security and availability.

All scenarios are supported.

You can use Managed Service for Grafana to configure dashboards based on your business requirements. For example, you can create real-time dashboards to monitor PVs and UVs.

For more information, see [What is Managed Service for Grafana?](/help/en/arms/observable-visualization-grafana-edition/product-overview/what-is-grafana).

Business traffic and business health monitoring with ARMS Browser Monitoring

ARMS Browser Monitoring is intended for web application, Weex, and mini-program monitoring. It monitors the heath of web applications and mini-programs by detecting web page loading speeds (speed testing), web page stability (JS error diagnostics), and success rate of external service calls (APIs).

This solution is suitable for front-end applications that use JavaScript.

For more information, see

[What is ARMS Browser Monitoring?](/help/en/arms/browser-monitoring/product-overview/what-is-arms-browser-monitoring).

## References

-   For more information about log monitoring, see [Use Simple Log Service to collect container logs from ACK Edge clusters](/help/en/ack/ack-edge/user-guide/use-log-service-to-collect-log-data-from-containers-of-ack-edge-clusters) and [Collect the logs of control plane components in ACK Edge clusters](/help/en/ack/ack-edge/user-guide/collect-ack-edge-cluster-control-plane-component-logs).
    
-   For more information about monitoring metrics, see [Basic resource monitoring](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/monitor-basic-resources), [Java Application Monitoring](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/monitor-application-performance), [Cluster topology monitoring](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/architecture-aware-monitoring), and [Event monitoring](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/event-monitoring).
    
-   For more information about how to use the monitoring services and configure dashboards, see [Use Managed Service for Prometheus to monitor ACK Edge clusters](/help/en/ack/ack-edge/user-guide/monitor-ack-edge-clusters-with-managed-service-for-prometheus) and [Use PromQL to query Prometheus monitoring data](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-promql-to-query-prometheus-monitoring-data).

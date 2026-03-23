Container Service for Kubernetes (ACK) provides integration with the observability services of Alibaba Cloud, including CloudMonitor and Managed Service for Prometheus. ACK provides a variety of cluster monitoring components to help you monitor the health status of your clusters in a comprehensive manner. You can use the components to detect potential issues and respond to the issues. This topic describes the end-to-end monitoring solution provided by ACK that covers the monitoring of basic resources, applications, clusters, events, control plane components, networks, and kernel-level container monitoring.

## **Cluster observability**

The following table describes the monitoring modules provided by the cluster observability feature of ACK.

**Module**

**Description**

**References**

**Component**

Basic resource monitoring

This module allows you to enable the Kubernetes monitoring feature of CloudMonitor or Prometheus monitoring to monitor the usage and health status of basic resources in your cluster, including CPU, memory, and network resources, and enable alert notifications based on key metrics. This improves cluster stability.

[Basic resource monitoring](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/monitor-basic-resources)

[metrics-server](/help/en/ack/product-overview/metrics-server)

[Use Alibaba Cloud Prometheus monitoring](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-managed-service-for-prometheus-to-monitor-an-ack-cluster)

[ack-arms-prometheus](/help/en/ack/product-overview/ack-arms-prometheus)

[Use open source Prometheus to monitor an ACK cluster](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-open-source-prometheus-to-monitor-an-ack-cluster)

ack-prometheus-operator

Applicationmonitoring

This module uses [Application Real-Time Monitoring Service (ARMS)](/help/en/arms/product-overview/what-is-arms#concept-42781-zh) and the ack-onepilot component to enable topolocy analysis, API and event monitoring, tracing, and performance bottleneck check for containerized applications.

[Java Application Monitoring](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/monitor-application-performance)

[ack-onepilot](/help/en/ack/product-overview/ack-onepilot)

[Python Application Monitoring](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/python-application-monitoring)

[Go Application Monitoring](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/golang-application-monitoring)

Cluster monitoring

This module uses [Application Monitoring eBPF Edition](/help/en/arms/application-monitoring-ebpf/product-overview/what-is-alibaba-cloud-application-monitoring-ebpf-version) to obtain container performance data without code intrusion, identify pod issues, and automatically identify the Services and controller workloads that are related to the issues. This improves troubleshooting efficiency.

[Cluster topology monitoring](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/architecture-aware-monitoring)

[ack-arms-cmonitor](/help/en/ack/product-overview/ack-arms-cmonitor)

Event monitoring

This module uses Node Problem Detector (NPD) and the Kubernetes event center feature to enable real-time monitoring and alert notification. This module diagnoses nodes and generates events based on node exceptions, and supports closed-loop management of alerts and offline alert notifications.

[Event monitoring](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/event-monitoring)

[ack-node-problem-detector](/help/en/ack/product-overview/ack-node-problem-detector)

Control plane componentmonitoring

This module uses Prometheus and Grafana to monitor control plane planes components in real time, including the API server, etcd, kube-scheduler, and kube-controller-manager. You can use this module to optimize access to control plane components and configure self-managed Prometheus systems.

[View control plane component dashboards in ACK Pro clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/view-control-plane-component-dashboards-in-ack-pro-clusters)

[kube-apiserver](/help/en/ack/product-overview/kube-api-server)

[Kube Controller Manager](/help/en/ack/product-overview/kube-controller-manager)

[Cloud Controller Manager](/help/en/ack/product-overview/cloud-controller-manager)

[kube-scheduler](/help/en/ack/product-overview/kube-scheduler)

etcd

Network monitoring

This module integrates Simple Log Service for Ingress monitoring based on Ingress Dashboard and ARMS. This module provides CoreDNS monitoring and troubleshooting. In addition, this module visualizes network traffic and business topology in clusters that use Terway, implementing observability for container networks and containerized applications.

[Ingress Dashboard](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/ingress-dashboard#task-2005246)

[NGINX Ingress controller](/help/en/ack/product-overview/nginx-ingress-controller)

[CoreDNS monitoring](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/coredns-monitoring)

[CoreDNS](/help/en/ack/product-overview/coredns)

[Implement network observability by using ACK Terway and Cilium Hubble](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/implement-network-observability-by-using-ack-terway-and-cilium-hubble)

[Work with Terway](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/work-with-terway)

Kernel-level container monitoring

This module provides OS kernel-level container monitoring to allow you to monitor containers at the OS kernel level based on System Observer Monitoring (SysOM). This facilitates the delolyment and migration of containerized applications.

[Kernel-level container monitoring based on SysOM](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/sysom-kernel-level-container-monitoring)

[ack-sysom-monitor](/help/en/ack/product-overview/ack-sysom-monitor)

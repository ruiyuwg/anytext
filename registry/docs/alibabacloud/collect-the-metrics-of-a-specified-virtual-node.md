This topic describes how to modify the configuration of Prometheus to collect the metrics of the specified virtual node.

## **Introduction**

The virtual node architecture enables multiple virtual nodes in a cluster to share the same node IP address. Consequently, when you collect the metrics of a virtual node, the metrics of all virtual nodes are returned. Prometheus usually uses the kubelet Service to collect the metrics of all nodes. Therefore, duplicate metrics are returned.

To address this issue, Container Service for Kubernetes (ACK) allows you to collect the metrics of the specified virtual node. In addition to the data collection endpoint `<nodeIP>:10250/metrics/cadvisor`, ACK provides the endpoint `<nodeIP>:10250/metrics/cadvisor?nodeName=<nodeName>`, which allows you to specify the name of a virtual node. After you specify the name of a virtual node, only the monitoring data of the pods managed by the specified virtual node is returned.

## **Prerequisites**

The ACK virtual node component is installed and the version of the component is 2.11.0 or later. For more information, see [ACK Virtual Node](/help/en/ack/product-overview/ack-virtual-node).

## Modify the configuration of Prometheus

You can modify the configuration of Prometheus to collect the metrics of the specified virtual node. ACK allows you to modify the configurations of Managed Service for Prometheus, open-source Prometheus Operator ([open-source Prometheus Operator](https://prometheus-operator.dev/) or [ack-prometheus-operator](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-open-source-prometheus-to-monitor-an-ack-cluster) provided by ACK), and open-source Prometheus.

## Managed Service for Prometheus

By default, this feature is provided in clusters. No additional configuration is required.

## Open-source Prometheus Operator

If you use [open-source Prometheus Operator](https://prometheus-operator.dev/) or [ack-prometheus-operator](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-open-source-prometheus-to-monitor-an-ack-cluster) from the add-ons of ACK, you must add the following ServiceMonitor CustomResource (CR):

```
apiVersion: monitoring.coreos.com/v1
kind: ServiceMonitor
metadata:
  name: virtual-kubelet
  namespace: monitoring
  labels:
    k8s-app: kubelet
    # Add this label to automatically manage prometheus-operator. 
    release: prometheus-operator
spec:
  jobLabel: k8s-app
  selector:
    matchLabels:
      k8s-app: kubelet
  namespaceSelector:
    matchNames:
    - kube-system
  endpoints:
  - port: https-metrics
    interval: 15s
    scheme: https
    path: /metrics/cadvisor
    bearerTokenFile: /var/run/secrets/kubernetes.io/serviceaccount/token
    tlsConfig:
      caFile: /var/run/secrets/kubernetes.io/serviceaccount/ca.crt
      insecureSkipVerify: true
    relabelings:
    # Retain only the virtual node endpoint. 
    - sourceLabels: [__meta_kubernetes_endpoint_address_target_name]
      regex: (^virtual-kubelet.*)
      action: keep
    # Add parameters to query based on the specified nodeName. 
    - sourceLabels: [__meta_kubernetes_endpoint_address_target_name]
      regex: (^virtual-kubelet.*)
      targetLabel: __param_nodeName
      replacement: ${1}
      action: replace
```

If the cluster is already configured with service discovery to collect cAdvisor metrics based on the kubelet Service, you must add the following configuration to discard the `<Virtual Node IP>:10250/metrics/cadvisor` endpoint in case duplicate data is collected.

```
apiVersion: monitoring.coreos.com/v1
kind: ServiceMonitor
...
spec:
  endpoints:
  - path: /metrics/cadvisor
    port: https-metrics
    ...
    relabelings:
    # The relabeling rule discards the endpoints of all targets whose names start with virtual-kubelet.
    - action: drop
      regex: (^virtual-kubelet.*)
      sourceLabels:
      - __meta_kubernetes_endpoint_address_target_name
```

## Open-source Prometheus

Find the configuration file of open-source Prometheus. Normally, you can find the configuration file in `/etc/prometheus/prometheus.yml` or in your custom configuration directory. Then, add the following collection configuration to the file:

```
scrape_configs:

...Other job configuration. 

- job_name: monitoring/virtual-kubelet/0
  honor_timestamps: true
  scrape_interval: 15s
  scrape_timeout: 10s
  metrics_path: /metrics/cadvisor
  scheme: https
  bearer_token_file: /var/run/secrets/kubernetes.io/serviceaccount/token
  tls_config:
    ca_file: /var/run/secrets/kubernetes.io/serviceaccount/ca.crt
    insecure_skip_verify: true
  relabel_configs:
  - source_labels: [__meta_kubernetes_service_label_k8s_app]
    separator: ;
    regex: kubelet
    replacement: $1
    action: keep
  - source_labels: [__meta_kubernetes_endpoint_port_name]
    separator: ;
    regex: https-metrics
    replacement: $1
    action: keep
  - source_labels: [__meta_kubernetes_endpoint_address_target_kind, __meta_kubernetes_endpoint_address_target_name]
    separator: ;
    regex: Node;(.*)
    target_label: node
    replacement: ${1}
    action: replace
  - source_labels: [__meta_kubernetes_endpoint_address_target_kind, __meta_kubernetes_endpoint_address_target_name]
    separator: ;
    regex: Pod;(.*)
    target_label: pod
    replacement: ${1}
    action: replace
  - source_labels: [__meta_kubernetes_namespace]
    separator: ;
    regex: (.*)
    target_label: namespace
    replacement: $1
    action: replace
  - source_labels: [__meta_kubernetes_service_name]
    separator: ;
    regex: (.*)
    target_label: service
    replacement: $1
    action: replace
  - source_labels: [__meta_kubernetes_pod_name]
    separator: ;
    regex: (.*)
    target_label: pod
    replacement: $1
    action: replace
  - source_labels: [__meta_kubernetes_pod_container_name]
    separator: ;
    regex: (.*)
    target_label: container
    replacement: $1
    action: replace
  - source_labels: [__meta_kubernetes_service_name]
    separator: ;
    regex: (.*)
    target_label: job
    replacement: ${1}
    action: replace
  - source_labels: [__meta_kubernetes_service_label_k8s_app]
    separator: ;
    regex: (.+)
    target_label: job
    replacement: ${1}
    action: replace
  - separator: ;
    regex: (.*)
    target_label: endpoint
    replacement: https-metrics
    action: replace
  - source_labels: [__meta_kubernetes_endpoint_address_target_name]
    separator: ;
    regex: (^virtual-kubelet.*)
    replacement: $1
    action: keep
  - source_labels: [__meta_kubernetes_endpoint_address_target_name]
    separator: ;
    regex: (^virtual-kubelet.*)
    target_label: __param_nodeName
    replacement: ${1}
    action: replace
  kubernetes_sd_configs:
  - role: endpoints
    namespaces:
      names:
      - kube-system
```

If the cluster is already configured with service discovery to collect cAdvisor metrics based on the kubelet Service, you need to add the following configuration to discard the `<Virtual Node IP>:10250/metrics/cadvisor` endpoint in case duplicate data is collected.

```
scrape_configs:

...Other job configuration. 

- job_name: monitoring/ack-prometheus-operator-kubelet/0
  honor_labels: true
  honor_timestamps: true
  ...
  relabel_configs:
  ...
  // Discard the endpoint for collecting the /metrics/cadviso metrics of virtual nodes. 
  - source_labels: [__meta_kubernetes_endpoint_address_target_name]
    separator: ;
    regex: (^virtual-kubelet.*)
    replacement: $1
    action: drop
```

Applications, containers, and infrastructure components in a cluster continuously generate a large amount of scattered log data, which complicates log collection and management. Container Service for Kubernetes (ACK) is integrated with Simple Log Service (SLS) to simplify log management.

**Note**

For more information about the features and terms of SLS, see [What is Simple Log Service?](/help/en/sls/what-is-log-service) and [Terms](/help/en/sls/terms-1).

## Introduction to log collection components

Log collection components are provided by SLS to automate log discovery and collection from ACK clusters. You can use the components to simplify log management. The components support various types of logs, including text logs, binary logs, and HTTP logs. The collected logs can be persisted in SLS. SLS allows you to query and analyze logs in real time to quickly identify and locate issues. This improves troubleshooting efficiency and reduces O&M costs. The following log collection components are supported:

-   [LoongCollector-based data collection](/help/en/sls/loongcollector-collection/): LoongCollector is a new-generation log collection agent that is provided by Simple Log Service. LoongCollector is an upgraded version of Logtail. LoongCollector is expected to integrate the capabilities of specific collection agents of Application Real-Time Monitoring Service (ARMS), such as Managed Service for Prometheus-based data collection and Extended Berkeley Packet Filter (eBPF) technology-based non-intrusive data collection.
    
-   [Logtail-based data collection](/help/en/sls/logtail-collection/): Logtail is a log collection agent that is provided by Simple Log Service. You can use Logtail to collect logs from multiple data sources, such as Alibaba Cloud Elastic Compute Service (ECS) instances, servers in data centers, and servers from third-party cloud service providers. Logtail supports non-intrusive log collection based on log files. You do not need to modify your application code, and log collection does not affect the operation of your applications.
    

## **Log collection**

This section describes two methods that you can use to configure log collection.

### **Collection procedure**

You can install a log collection component in an ACK cluster to securely collect and transmit various types of data to SLS for storage and analysis. This simplifies log collection configuration and log management and improves log collection efficiency. The following figure describes the collection procedure.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3265758471/CAEQPxiBgMCMlMfTuBkiIDBhOTVhZDlkMmRhZjQ2Yjc5ZGFjZWE1NjNiYmFmMmRl4398044_20240719170709.989.svg)

The collection procedure includes the following steps:

1.  Deploy a log collection component
    
    When you install a log collection component in your cluster, ACK creates a [CustomResourceDefinition (CRD) named AliyunLogConfig](/help/en/sls/use-aliyunlogconfig-to-manage-collection-configurations#7bee628a41fqo) object. ACK also creates specific objects for the log collection component to associate the AliyunLogConfig object with SLS collection configurations.
    
    -   Objects created for LoongCollector: loongcollector-ds (DaemonSet), loongcollector-operator (Deployment), and alibaba-log-configuration (ConfigMap).
        
    -   Objects created for Logtail: logtail-ds (DaemonSet), alibaba-log-controller (Deployment), and alibaba-log-configuration (ConfigMap).
        
2.  Configure log collection: The log collection component obtains the collection configuration you create and collects logs based on the collection configuration.
    
    Create a log collection configuration. You can use the ACK console, CRDs, or environment variables to create log collection configurations. For more information, see [Collect text logs from Kubernetes containers in DaemonSet mode](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/collect-text-logs-from-ack-clusters-using-daemonset-deployed-logtail-agents), [Collect stdout and stderr from Kubernetes containers in DaemonSet mode (old version)](/help/en/sls/collect-container-stdout-and-stderr-in-daemonset-mode-1), and [Collect text logs from Kubernetes containers in Sidecar mode](/help/en/sls/collect-container-text-logs-through-sidecar-console).
    
3.  Report logs to SLS: The log collection component sends logs to SLS in real time.
    

### **Collection method**

In a Kubernetes cluster, you can use the Sidecar or DaemonSet mode to collect logs. Each method has different collection procedures and use scenarios.

-   DaemonSet  The log collection component is deployed as a DaemonSet in the `kube-system` namespace. The log collector pod on each node collects logs from all pods running on the node, including stdout and text logs. For more information, see [Collect text logs from Kubernetes containers in DaemonSet mode](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/collect-text-logs-from-ack-clusters-using-daemonset-deployed-logtail-agents).
    
-   Sidecar
    
    A log collector container runs in each business pod. The collector container and the main container share the same volume that is used to store logs. For more information, see [Collect text logs from Kubernetes containers in Sidecar mode](/help/en/sls/collect-container-text-logs-through-sidecar-console).
    

**Category**

**DaemonSet mode**

**Sidecar mode**

Use scenarios

A cluster has clear classifications of logs and a single function.

-   A cluster belongs to a single tenant and has a single function or few services.
    
-   You want to use the same log collection configuration for all containers on the same node.
    
-   You want to collect the stdout stream.
    
-   Low resource consumption
    

Large, hybrid clusters

If you require different log collection configurations for each pod, you can use this method to collect logs. However, a single pod in this mode generates a large amount of logs and consumes a large amount of resources.

Resource usage

Run a log collector pod on each node.

Run a log collector container in each pod.

Deployment and O&M

You need to maintain only the DaemonSet.

You need to deploy a log collector container in each business pod.

Log type

stdout and text logs.

Text logs.

## Supported log types

In an ACK cluster, you can collect log data from different sources and securely transmit the log data to SLS for storage and analysis.

**Log type**

**Description**

**References**

Application (container) logs

Log data from containers in the ACK cluster can be quickly collected. The log data includes the stdout and text files.

-   By default, ACK collects logs by row and does not parse logs. For more information, see [Collect container logs from ACK clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/collect-text-logs-from-ack-clusters-using-daemonset-deployed-logtail-agents).
    
-   For more information about how to collect stdout from containers in DaemonSet mode, see [Collect stdout and stderr from Kubernetes containers in DaemonSet mode (old version)](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/collect-container-stdout-and-stderr-in-daemonset-mode-1).
    
-   You can collect internal logs from Java applications that run in containers on collection nodes. For more information, see [Configure Log4jAppender for Kubernetes and Log Service](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/configure-log4jappender-for-kubernetes-and-log-service).
    
-   For more information about how to use sidecar containers to collect container logs, see [Collect text logs from Kubernetes containers in Sidecar mode](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/collect-container-text-logs-through-sidecar-console).
    

Control plane component logs

Logs are collected from control plane components, such as the API server, kube-scheduler, kube-controller-manager, cloud-controller-manager, Controlplane-Events, and the Application Load Balancer (ALB) Ingress controller. Logs are sent to a specific Logstore. This component facilitates centralized management and analysis of the running status of control plane components. This helps you quickly troubleshoot issues, monitor the health status of components, and verify the effect of custom parameter configurations.

Each Logstore corresponds to a Kubernetes control plane component.

[Collect control plane component logs of ACK managed clusters](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/collect-control-plane-component-logs-of-ack-managed-cluster)

Network component logs

-   The access logs of Ingress components can be collected to help you monitor traffic dynamics at the access layer of your application.
    
-   You can collect CoreDNS logs to identify and resolve issues, such as slow DNS resolution and abnormal access requests.
    

-   [View the log dashboard of ALB Ingresses](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/view-the-log-dashboard-of-alb-ingresses)
    
-   [Analyze and monitor the access log of nginx-ingress-controller](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/analyze-and-monitor-the-access-log-of-nginx-ingress)
    
-   [Collect and analyze CoreDNS logs](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/collect-and-analyze-coredns-logs)
    

Data plane component logs

The logs of [volume plug-ins](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/collect-log-files-of-system-components#7ad165eb04rir), [Terway](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/collect-log-files-of-system-components#c3e27ada484mr), [Flannel](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/collect-log-files-of-system-components#b3db9e77f46dx), and the [auto scaling components](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/collect-log-files-of-system-components#b4a27bc333cpp) can be collected.

[Collect data plane component logs](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/collect-log-files-of-system-components)

## **Limits**

**Item**

**Description**

Kubernetes version

-   When you collect logs in DaemonSet mode, Kubernetes 1.10.0 or later is required. The HostToContainer mount propagation must be supported.
    
-   When you use a custom resource definition (CRD) to collect logs, Kubernetes 1.16.0 or later is required, and the alibaba-log-controller component must be installed.
    
    The apiextensions.k8s.io/v1beta1 API provided by Kubernetes 1.7.0 and later also supports CRDs. However, the stability of the API in the Beta version varies based on the specified Kubernetes version.
    

[LoongCollector](/help/en/ack/product-overview/loongcollector)

-   loongcollector-ds: At least 0.1 CPU cores and 256 MB of memory must be reserved on each node.
    
-   loongcollector-operator: At least 0.1 CPU cores and 128 MB of memory must be reserved on each node.
    

[logtail-ds](/help/en/ack/product-overview/logtail-ds)

-   logtail-ds: At least 0.1 cores and 256 MB of memory must be reserved on each node.
    
-   alibaba-log-controller: At least 0.05 cores and 100 MB of memory must be reserved.
    

For more information about the limits, see [Logtail limits](/help/en/sls/logtail-limits#section-mdz-hhp-tcb).

## **Billing**

The costs incurred by SLS in the ACK cluster are the sum of cluster management fees and the SLS fees.

-   Cluster management fees are charged by ACK. The cluster management fee is charged only for ACK managed Pro clusters. No cluster management fee is charged for ACK managed Basic clusters or ACK dedicated clusters. For more information, see [Billing overview](/help/en/ack/ack-managed-and-ack-dedicated/product-overview/ack-pro-cluster-billing).
    
-   The SLS fee is charged on a pay-as-you-go basis. The Logstore fee is charged by SLS. For more information, see [Billing overview](/help/en/sls/billing-overview).
    

## **FAQ**

### **How do I copy logs from a project to another project?**

You can replicate the access logs from the `logstore-a` Logstore in the `project-a` project to the `logstore-b` Logstore in the `project-b` project. This allows you to query and analyze the data in the `project-b` project in a centralized manner. For more information, see [Replicate data from a Logstore](/help/en/sls/replicate-data-from-a-logstore).

### **What do I do if the log collection status is abnormal?**

When you use Logtail to collect logs from standard Docker containers or Kubernetes containers, errors may occur. For more information about how to troubleshoot the errors and check the running status of Logtail, see [What do I do if errors occur when I collect logs from containers?](/help/en/sls/what-do-i-do-if-an-error-occurs-when-i-use-logtail-to-collect-logs-from-containers)

### **FAQ about log loss, log deletion, and log cost reduction**

For more information about how to change the log retention period and disable log collection, see [FAQ about Logstores](/help/en/sls/logstore-related-issues).

### Logtail-related issues

For more information about the collection latency of Logtail, how to collect historical logs, and the effective time of Logtail configurations, see [FAQs about Logtail](/help/en/sls/faq-about-logtail).

## **Contact us**

If you have any questions about ACK, [contact us](/help/en/ack/ack-managed-and-ack-dedicated/support/contact-us).

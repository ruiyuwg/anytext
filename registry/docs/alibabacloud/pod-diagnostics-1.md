Container Service for Kubernetes provides the pod diagnostics feature to help you diagnose pods. This topic describes the pod diagnostic items and the solutions on how to fix pod issues.

ACK develops a diagnostics system based on expert experience and trains an AI-assisted diagnostics model based on large amounts of data. The pod diagnostics feature provides two diagnostic modes, including expert mode and AI mode, to help locate the root cause of issues. Pod diagnostics includes diagnostic items and root cause.

-   **Diagnostic items**: includes pod, cluster component diagnostics.
    
-   **Root cause**: locates the root cause of issues and provides suggestions on how to fix the issues. The pod diagnostics feature collects information about clusters, identifies anomalies, and then performs in-depth diagnostics.
    

**Important**

When you use the pod diagnostics feature, ACK runs a data collection program in the cluster to collect diagnostic results. The collected information includes the system version, the status of workloads, Docker, and kubelet, and the key error information in system logs. The data collection program does not collect business information or sensitive data.

## Scenarios

The following table describes the scenarios of pod diagnostics and AI-assisted diagnostics.

**Category**

**Scenario**

Pod diagnostics

Pods are not processed by the scheduler.

Pods cannot be scheduled because they do not meet the requirements of the constraints for scheduling.

Pods are scheduled but are not processed by the kubelet.

Pods are waiting for the volumes to reach the Ready state.

Pods are evicted.

Sandboxed containers in pods fail to be created.

Pods remain in the Terminating state.

Out-of-memory (OOM) errors occur to containers in pods.

Containers in pods exceptionally exit.

Containers in pods remain in the CrashLoopBackOff state.

Containers in pods are not ready.

Pods fail to pull container images.

Timeout errors occur when pods pull container images.

AI-assisted diagnostics

The status of pods is abnormal.

OOM errors occur to pods.

Containers in pods exceptionally exit.

The configuration of the ConfigMaps or Secrets of pods is invalid.

Pods fail to pass health checks.

The configuration of the persistent volume claims (PVCs) of pods is invalid.

Errors occur when pods pull container images.

## Procedure

The cluster diagnostics feature collects information about clusters, identifies anomalies, and then performs in-depth diagnostics. The expert mode and AI mode are used to help locate the root cause of issues. Diagnostic results are generated through the following steps: anomaly identification, data collection, diagnostic item check, and root cause analysis.

-   **Anomaly identification**: collects basic data, such as pod status, and cluster event streams, and analyzes the anomalies based on the collected data.
    
-   **Data collection**: collects and diagnoses context-related data based on the results of anomaly identification.
    
-   **Diagnostic item check**: checks whether key metrics are normal based on the collected data.
    
-   **Root cause analysis**: analyzes the root cause of issues based on the collected data and the check results of diagnostic items.
    

## Diagnostic results

The diagnostic results include the results of root cause analysis and the results of diagnostic item check. The results of root cause analysis include **detected anomalies**, **root cause**, **suggestions for fixes**. The results of diagnostic item check include the check results of each diagnostic item. Diagnostic item check is used to locate the cause that may not be identified by root cause analysis.

## Pod diagnostic items

**Category**

**Description**

[Pod](#section-sad-yfp-hjn)

Diagnoses common pod issues, including pod status, image pulling, and network connectivity.

[ClusterComponent](#section-3ns-5wh-qmr)

Diagnoses common cluster issues, including the availability of the API server and DNS service and the status of the NAT gateway.

## Pod

**Diagnostic item**

**Description**

**Solution**

Number of container restarts

Indicates the number of times that the containers in a pod restart.

Check the status and log of the pod. For more information, see [Pod troubleshooting](/help/en/ack/ack-managed-and-ack-dedicated/support/pod-troubleshooting#task-2187029).

Container image download failures

Check whether the other pods on the node of the current pod fail to download the container image.

Check the status and log of the pod. For more information, see [Pod troubleshooting](/help/en/ack/ack-managed-and-ack-dedicated/support/pod-troubleshooting#task-2187029).

Validity of Secrets used by pods to pull container images

Check the validity of the Secrets used by pods to pull container images.

Check the status and log of the pod. For more information, see [Pod troubleshooting](/help/en/ack/ack-managed-and-ack-dedicated/support/pod-troubleshooting#task-2187029).

Validity of the environment variables of GPU-accelerated pods

Check whether **NVIDIA\_VISIBLE\_DEVICES** is included in the environment variables of pods because this variable may conflict with the kubelet.

Check the status and log of the pod. For more information, see [Pod troubleshooting](/help/en/ack/ack-managed-and-ack-dedicated/support/pod-troubleshooting#task-2187029).

Connectivity between pods and CoreDNS pods

Check the connectivity between the pods and the CoreDNS pods.

Check the connectivity between the pods and the CoreDNS pods.

Connectivity between pods and CoreDNS Service

Check the connectivity between the pods and the CoreDNS Service.

Check the connectivity between the pods and the CoreDNS Service.

Connectivity between pods and DNS server in the host network

Check the connectivity between the pods and the DNS server in the host network.

Check the connectivity between the pods and the DNS server in the host network.

D status of container processes in pods

Check whether container processes in pods are in the D state.

In most cases, container processes are waiting on disk I/O if the container processes are in the D state. Restart the corresponding ECS instance to resolve this issue. If the issue persists, [Submit a ticket](https://smartservice.console.alibabacloud.com/console.htm).

Pod initialization

Check whether pods are initialized.

Check the status and log of the pod. For more information, see [Pod troubleshooting](/help/en/ack/ack-managed-and-ack-dedicated/support/pod-troubleshooting#task-2187029).

GPU resources requested by pods

Check whether pods request GPU resources. Make sure that the reason why pods cannot use GPUs is not because the pods have not requested GPU resources.

If the pods have not claimed GPU resources, check the configuration of the pods.

Pod scheduling

Check whether pods are scheduled.

If the pods have not claimed GPU resources, check the configuration of the pods.

## ClusterComponent

**Diagnostic item**

**Description**

**Solution**

aliyun-acr-credential-helper version

Checks whether the aliyun-acr-credential-helper version used by the cluster is outdated.

If the aliyun-acr-credential-helper version used by the cluster is outdated, update aliyun-acr-credential-helper. For more information, see [Use the aliyun-acr-credential-helper component to pull images without using a password](/help/en/ack/use-the-aliyun-acr-credential-helper-component-to-pull-images-without-using-secrets#task-2456294).

API Service availability

Checks whether the API Service of the cluster is available.

Run the `kubectl get apiservice` command to check the availability of the API Service of the cluster. If the API Service is unavailable, run the `kubectl describe apiservice` command to view information about the API Service and identify the cause.

Insufficient available pod CIDR blocks

Checks whether the number of available pod CIDR blocks in the cluster that has Flannel installed is less than five. Each node in a cluster is attached to a pod CIDR block. If all pod CIDR blocks are used, the new nodes that you add to the cluster cannot work as expected.

[Submit a ticket](https://smartservice.console.alibabacloud.com/console.htm).

CoreDNS endpoints

Checks the number of CoreDNS endpoints.

Check the status and logs of CoreDNS pods. For more information, see [DNS troubleshooting](/help/en/ack/ack-managed-and-ack-dedicated/support/dns-troubleshooting#task-2173473).

CoreDNS cluster IP addresses

Checks whether cluster IP addresses are allocated to CoreDNS pods. If cluster IP addresses are not allocated to CoreDNS pods, service interruptions may occur.

Check the status and logs of CoreDNS pods. For more information, see [DNS troubleshooting](/help/en/ack/ack-managed-and-ack-dedicated/support/dns-troubleshooting#task-2173473).

NAT gateway status

Checks the status of the NAT gateway used by the cluster.

Log on to the [NAT Gateway console](https://vpc.console.alibabacloud.com/nat) to check whether the NAT gateway is locked due to overdue payments.

Excessively high rate of concurrent connection drops on the NAT gateway

Checks whether the rate at which concurrent connections are dropped on the NAT gateway is high.

If the rate is high, upgrade the NAT gateway. For more information, see [FAQ about upgrading standard Internet NAT gateways to enhanced Internet NAT gateways](/help/en/doc-detail/198983.html).

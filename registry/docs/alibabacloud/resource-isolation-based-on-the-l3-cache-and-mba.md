In a Kubernetes cluster, multiple pods may be deployed on the same node to share the L3 cache (last level cache) and Memory Bandwidth Allocation (MBA) that are provided by the host. This can lead to applications competing for resources under tight constraints. We recommend that you enable resource isolation for applications with different priorities by controlling the L3 cache and using the MBA feature. This method ensures the quality of service (QoS) for high-priority applications during resource competition.

**Note**

To better understand and effectively use this feature, we recommend that you refer to the following official Kubernetes documentation: [Pod QoS class](https://kubernetes.io/docs/concepts/workloads/pods/pod-qos/) and [Assign memory resources to containers and pods](https://kubernetes.io/docs/tasks/configure-pod-container/assign-memory-resource/).

## Overview

To make full use of computing resources, different pods are usually deployed on the same node to share the L3 cache and memory bandwidth. If you do not enable resource isolation, workloads of different priorities may compete for computing resources such as the L3 cache and memory bandwidth. As a result, the resource assurance for high-priority tasks is compromised, and their QoS is degraded.

[Resource Director Technology (RDT)](https://www.intel.com/content/www/us/en/architecture-and-technology/resource-director-technology.html) enables resource isolation for applications of different priorities through ConfigMap. You can declare the amount of L3 cache and MBA resources available in the YAML file of BestEffort (BE) pods to effectively ensure the QoS of latency-sensitive (LS) applications.

## Prerequisites

-   A cluster with an Elastic Compute Service (ECS) bare metal instance whose CPU model supports the RDT feature is created. For more information, see [ECS Bare Metal Instance overview](/help/en/ecs/user-guide/elastic-bare-metal-server-overview#concept-lnh-hv2-5db) and [intel-cmt-cat](https://github.com/intel/intel-cmt-cat/wiki).
    
-   The ack-koordinator component is installed and the component version is 0.8.0 or later. For more information about how to install ack-koordinator, see [ack-koordinator (FKA ack-slo-manager)](/help/en/ack/product-overview/ack-koordinator-fka-ack-slo-manager#task-2172306).
    

## Billing

No fee is charged when you install or use the ack-koordinator component. However, fees may be charged in the following scenarios:

-   ack-koordinator is a non-managed component that occupies worker node resources after it is installed. You can specify the amount of resources requested by each module when you install the component.
    
-   By default, ack-koordinator exposes the monitoring metrics of features such as resource profiling and fine-grained scheduling as Prometheus metrics. If you **enable Prometheus metrics for ack-koordinator** and use Managed Service for Prometheus, these metrics are considered [custom metrics](/help/en/arms/prometheus-monitoring/basic-metrics/) and fees are charged for these metrics. The fee depends on factors such as the size of your cluster and the number of applications. Before you enable Prometheus metrics, we recommend that you read the [Billing](/help/en/arms/prometheus-monitoring/product-overview/billing-description/) topic of Managed Service for Prometheus to learn about the free quota and billing rules of custom metrics. For more information about how to monitor and manage resource usage, see [Query the amount of observable data and bills](/help/en/arms/prometheus-monitoring/product-overview/billing-and-usage-query).
    

## Step 1: Check if the node kernel has enabled RDT

Before using the L3 cache and MBA to enable resource isolation, you must enable the RDT feature of the kernel.

1.  Run the following command to check whether the RDT feature of the kernel is enabled:
    
    ```
    cat /proc/cmdline
    ```
    
    Expected output:
    
    ```
    # Other content omitted, this example only shows the RDT part of the BOOT_IMAGE field.
    BOOT_IMAGE=... rdt=cmt,l3cat,l3cdp,mba
    ```
    
    If the output includes `l3cat` and `mba` options, the RDT feature is enabled. If not, proceed to the next step.
    
2.  Enable the RDT feature of the kernel.
    
    1.  Modify the /etc/default/grub file to include RDT configuration in the `GRUB_CMDLINE_LINUX` field.
        
        ```
        # Other content omitted, this example only shows the RDT part of the GRUB_CMDLINE_LINUX field.
        GRUB_CMDLINE_LINUX="... rdt=cmt,mbmtotal,mbmlocal,l3cat,l3cdp,mba" 
        ```
        
        **Important**
        
        Separate the new RDT configuration from existing settings with a space.
        
    2.  Run the following command to update the grub.cfg file:
        
        ```
        # The file path is subject to actual conditions.
        sudo grub2-mkconfig -o /boot/grub2/grub.cfg
        ```
        
    3.  Run the following command to restart the node:
        
        ```
        sudo systemctl reboot
        ```
        

## Step 2: Use the L3 cache and MBA isolation feature

After the RDT feature of the kernel is enabled, you can enable L3 cache and MBA isolation at the cluster level using ConfigMap. This allows you to set the resource allocation of L3 cache and MBA for different QoS class pods, providing flexible and precise resource management. Once configured, you can specify the QoS level in the pod YAML file to limit the available L3 cache and MBA resources.

1.  Create a configmap.yaml file with the following YAML template:
    
    ```
    apiVersion: v1
    kind: ConfigMap
    metadata:
      name: ack-slo-config
      namespace: kube-system
    data:
      resource-qos-config: |
        {
          "clusterStrategy": {
            "beClass": {
              "resctrlQOS": {
                "enable": true # Set to true to enable L3 cache and MBA isolation for BE-type pods.
              }
            }
          }
        }
    ```
    
2.  Check whether the `ack-slo-config` ConfigMap exists in the `kube-system` namespace.
    
    -   If the ConfigMap exists: We recommend that you run the kubectl patch command to update the ConfigMap. This avoids changing other settings in the ConfigMap.
        
        ```
        kubectl patch cm -n kube-system ack-slo-config --patch "$(cat configmap.yaml)"
        ```
        
    -   If the ConfigMap does not exist: Run the following command to create a ConfigMap:
        
        ```
        kubectl apply -f configmap.yaml
        ```
        
    
3.  (Optional) For fine-grained isolation based on the QoS classes of workloads, configure advanced parameters based on the following YAML template:
    
    ```
    apiVersion: v1
    kind: ConfigMap
    metadata:
      name: ack-slo-config
      namespace: kube-system
    data:
      resource-qos-config: |
        {
          "clusterStrategy": {
            "lsClass": {
              "resctrlQOS": {
                "enable": true,
                "catRangeEndPercent": 100,
                "mbaPercent": 100
              }
            },
            "beClass": {
              "resctrlQOS": {
                "enable": true,
                "catRangeEndPercent": 30,
                "mbaPercent": 100
              }
            }
          }
        }
    ```
    
    The following table describes the key parameters:
    
    **Parameter**
    
    **Type**
    
    **Valid value**
    
    **Description**
    
    `enable`
    
    Boolean
    
    -   `true`
        
    -   `false`
        
    
    -   `true`: enables the isolation of the L3 cache and MBA for workloads in the cluster.
        
    -   `false`: disables the isolation of the L3 cache and MBA for workloads in the cluster.
        
    
    `catRangeEndPercent`
    
    Int
    
    \[0, 100\]
    
    The percentage of the L3 cache allocated for the respective QoS class. Unit: %. The default value for workloads of the LS class is `100`. The default value for workloads of the BE class is `30`.
    
    `mbaPercent`
    
    Int
    
    \[0, 100\]
    
    The percentage of the MBA that can be used by the respective QoS class. Unit: %. You must set the value to a multiple of 10. The default values for the workloads of the LS class and BE class are both `100`.
    
4.  Use the following YAML template to create a file named pod-demo.yaml. This file limits the L3 cache and memory bandwidth that the BE pods can use.
    
    **Note**
    
    To apply configurations to a workload, such as a deployment, set the appropriate annotations for the pod in the `template.metadata` field.
    
    ```
    apiVersion: v1
    kind: Pod
    metadata:
      name: pod-demo
      labels:
        koordinator.sh/qosClass: 'BE' # Set the QoS class of the pod to BE.
    spec:
      containers:
      - name: pod-demo
        image: polinux/stress
        resources:
          requests:
            cpu: 1
            memory: "50Mi"
          limits:
            cpu: 1
            memory: "1Gi"
        command: ["stress"]
        args: ["--vm", "1", "--vm-bytes", "256M", "-c", "2", "--vm-hang", "1"]
    ```
    
5.  Run the following command to deploy `pod-demo.yaml` in the cluster:
    
    ```
    kubectl apply -f pod-demo.yaml
    ```
    

## References

-   In dynamic resource overcommitment scenarios, you can overcommit the unused resources of high-priority Guaranteed or Burstable applications to low-priority BestEffort tasks. For more information, see [Enable dynamic resource overcommitment](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/dynamic-resource-overcommitment).
    
-   ack-koordinator provides features that are used to limit and evict reclaimed resources on the node. You can use the features to prevent the negative impact of BE pods on your business. For more information, see [CPU QoS](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/cpu-qos) and [Enable memory QoS](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/memory-qos-for-containers#task-2192401).

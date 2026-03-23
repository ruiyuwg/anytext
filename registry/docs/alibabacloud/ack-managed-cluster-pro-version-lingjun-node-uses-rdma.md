This document describes how to configure and use Remote Direct Memory Access (RDMA) on Node Lingjun in an ACK managed cluster Pro for high-performance container network communication. RDMA technology significantly reduces network latency and increases throughput, making it suitable for scenarios that require high network performance, such as high-performance computing (HPC), AI training, and distributed storage.

## **Introduction to RDMA**

Remote Direct Memory Access (RDMA) is a high-performance network communication technology designed to address the latency of server-side data processing in traditional network transmissions. RDMA allows data to be transferred directly from the memory of one computer to another without involving the operating system on either computer. This mechanism enables high-throughput, low-latency network communication, making it especially suitable for large-scale parallel computing clusters.

RDMA transfers data directly into the memory of a target computer over the network, bypassing the operating system. This process consumes minimal processing power and reduces the overhead of memory replication and context switching. As a result, memory bandwidth and CPU cycles are saved, which improves application performance.

## **Prerequisites**

In Kubernetes, pods support two network patterns:

-   Independent IP pattern: The pod has its own IP address (non-hostNetwork mode).
    
-   Shared network pattern: The pod directly uses the host node's network (hostNetwork mode).
    

To use the RDMA feature for pods in non-hostNetwork mode, the following conditions must be met:

-   The computing network of the Lingjun bare metal cluster that hosts Node Lingjun must use IPv6.
    
-   You must select IPv6 mode when you create the Lingjun bare metal cluster.
    

For more information about how to create a Lingjun bare metal cluster and its support for IPv6, contact the Lingjun team by [submitting a ticket](https://smartservice.console.alibabacloud.com/console.htm).

## **Procedure**

1.  Install the RDMA Device Plugin component.
    
    1.  On the **Clusters** page, find the one you want to manage and click its name. In the left navigation pane, click **Add-ons**.
        
    2.  On the **Add-ons** page, click the **Others** tab. Find the **ack-rdma-device-plugin** add-on and install it as prompted.
        
        **Parameter**
        
        **Description**
        
        Enable RDMA for non-hostNetwork
        
        Select whether to enable RDMA for pods in non-hostNetwork mode. Valid values:
        
        -   `False (cleared)`: Only pods in hostNetwork mode can use the RDMA network.
            
        -   `True (selected)`: Allows pods in non-hostNetwork mode to use the RDMA network. Before you enable this option, confirm that the Lingjun bare metal cluster associated with the ACK cluster uses IPv6. Otherwise, the RDMA configuration does not take effect.
            
        
2.  Verify that the RDMA Device Plugin is running correctly on each RDMA-enabled Node Lingjun.
    
    ```
    kubectl get ds ack-rdma-dp-ds -n kube-system
    ```
    
    Expected output:
    
    ```
    NAME             DESIRED   CURRENT   READY   UP-TO-DATE   AVAILABLE   NODE SELECTOR   AGE
    ack-rdma-dp-ds   2         2         2       2            2           <none>          xxh
    ```
    
3.  Check if the node has the `rdma/hca` resource.
    
    ```
    kubectl get node e01-cn-xxxx -oyaml
    ```
    
    Expected output:
    
    ```
    ...
      allocatable:
        cpu: 189280m
        ephemeral-storage: "3401372677838"
        hugepages-1Gi: "0"
        hugepages-2Mi: "0"
        memory: 2063229768Ki
        nvidia.com/gpu: "8"
        pods: "64"
        rdma/hca: 1k
      capacity:
        cpu: "192"
        ephemeral-storage: 3690725568Ki
        hugepages-1Gi: "0"
        hugepages-2Mi: "0"
        memory: 2112881480Ki
        nvidia.com/gpu: "8"
        pods: "64"
        rdma/hca: 1k
    ...
    ```
    
4.  Apply the following YAML file to request the `rdma/hca` resource, which allows the pod to use the RDMA feature.
    
    -   A request for `rdma/hca: 1` is sufficient.
        
    -   If you did not enable RDMA for pods in non-hostNetwork mode in the RDMA Device Plugin component, only pods with `hostNetwork: true` can use the RDMA feature.
        
    
    ```
    apiVersion: batch/v1
    kind: Job
    metadata:
      name: hps-benchmark
    spec:
      parallelism: 1
      template:
        spec:
          containers:
          - name: hps-benchmark
            image: **
            command:
            - sh
            - -c
            - |
              python /workspace/wdl_8gpu_outbrain.py
            resources:
              limits:
                nvidia.com/gpu: 8
                rdma/hca: 1
            workingDir: /root
            volumeMounts:
              - name: shm
                mountPath: /dev/shm
            securityContext:
              capabilities:
                add:
                - SYS_RESOURCE
                - IPC_LOCK
          restartPolicy: Never
          volumes:
            - name: shm
              emptyDir:
                medium: Memory
                sizeLimit: 8Gi
          hostNetwork: true
          tolerations:
            - operator: Exists
    ```

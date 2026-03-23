Elastic container instances start within seconds and scale out as needed. For short-running Jobs, using elastic container instances prevents resource waste, reduces costs while meeting business requirements, and improves cluster elasticity and resource utilization.

## Scenarios

Pods cannot run normally when cluster nodes have insufficient computing resources. However, creating many nodes may result in resource waste. If your workloads have distinct peak and off-peak hours, we recommend using elastic container instances as elastic resource pools. These instances start within seconds and scale out as needed, significantly improving cluster elasticity. When using elastic container instances to handle traffic spikes and run Jobs, you don't need to estimate service traffic or reserve idle resources in advance. This helps you meet business requirements while effectively reducing usage and maintenance costs.

![Kuberntes集群](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3538627261/p49860.png)

## Prerequisites

The [ack-virtual-node](/help/en/ack/product-overview/ack-virtual-node) component is installed in the cluster. For more information, see [Deploy the ack-virtual-node component](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/deploy-the-virtual-node-controller-and-use-it-to-create-elastic-container-instance-based-pods#section-nz6-jj2-383).

## Example

1.  Create a namespace for testing and add the `alibabacloud.com/eci=true` label to the namespace.
    
    **Note**
    
    After you add this label to a namespace, all pods in the namespace are scheduled to virtual nodes and run as elastic container instances. This example uses this method. For more information about how to schedule pods to elastic container instances, see [Schedule pods to virtual nodes](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/comparison-and-introduction-of-virtual-node-scheduling-scheme-ack/).
    
    ```
    kubectl create ns vk
    kubectl label namespace vk alibabacloud.com/eci=true
    ```
    
2.  Create a Job in the test namespace.
    
    1.  Modify the following YAML file and save it as job.yaml.
        
        ```
        apiVersion: batch/v1
        kind: Job
        metadata:
          name: pi
          namespace: vk     # Specify the namespace with the specific label to schedule pods to elastic container instances
        spec:
          template:
            spec:
              containers:
              - name: pi
                image: registry.cn-shanghai.aliyuncs.com/eci_open/perl:5.32  
                command: ["perl",  "-Mbignum=bpi", "-wle", "print bpi(2000)"]
                resources:
                  requests:
                    cpu: 16
                    memory: 32Gi
              restartPolicy: Never
          backoffLimit: 4
        ```
        
    2.  Create a job.
        
        ```
        kubectl -n vk apply -f job.yaml
        ```
        
3.  Check the running status of the pod that corresponds to the Job.
    
    ```
    kubectl -n vk get pod -o wide
    ```
    
    Expected output: The Job has completed (status is Completed) and is running on a virtual node (the node name has the `virtual-kubelet` prefix).
    
    ```
    NAME       READY   STATUS      RESTARTS   AGE   IP              NODE                            NOMINATED NODE   READINESS GATES
    pi-zw2lc   0/1     Completed   0          15m   192.168.XX.XX   virtual-kubelet-cn-shanghai-b   <none>           <none>
    ```
    
4.  View the details of the pod that corresponds to the Job.
    
    ```
    kubectl -n vk describe pod <pod-name>
    ```
    
    In the returned Events, the StopCharge event indicates that the elastic container instance pod has completed running and billing has stopped.
    
    **Note**
    
    Elastic container instance pods are billed based on the amount of resources used. The system stops billing when the pod is completed. For more information, see [Billing of elastic container instances](/help/en/eci/product-overview/elastic-container-instances) and [Lifecycle of elastic container instance pods](/help/en/eci/user-guide/lifecycle-of-an-elastic-container-instance-2).
    
    ```
    Events:
      Type     Reason            Age   From        Message
      ----     ------            ----  ----        -------
      Warning  ImageCacheMissed  16m   EciService  [eci.imagecache]Missed image cache.
      Normal   Pulling           16m   kubelet     Pulling image "registry.cn--shanghai.aliyuncs.com/eci_open/perl:5.32"
      Normal   Pulled            15m   kubelet     Successfully pulled image "registry.cn-shanghai.aliyuncs.com/eci_open/perl:5.32" in 12.951s (12.951s including waiting). Image size: 336066994 bytes.
      Normal   Created           15m   kubelet     Created container: pi
      Normal   Started           15m   kubelet     Started container pi
      Normal   StopCharge        15m   EciService  [eci.containergroup]The charge of current ECI instance has been stopped, but the related resources are still being cleaned.
    ```
    
    Therefore, running Jobs on elastic container instances can reduce computing costs and operational workloads. You don't need to worry about whether the cluster has sufficient computing resources or whether you need to scale the number of nodes.
    

## **References**

You can also use preemptible elastic container instances to reduce instance costs. For more information, see [Use preemptible elastic container instances to run Jobs](/help/en/eci/use-cases/run-jobs-on-a-preemptible-instance#topic4204).

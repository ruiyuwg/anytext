Elastic Container Instance supports preemptible instances. You can run short-lived jobs and stateless applications that feature high scalability and fault tolerance, such as scalable website services, on elastic container instances to reduce usage costs of instances. This topic describes how to create a preemptible Elastic Container Instance-based pod to run a job.

## Background information

Before you use a preemptible elastic container instance, take note of the following items:

-   **Billing rules**
    
    The market price of a preemptible instance fluctuates based on the supply and demand for its instance specification. When you create a preemptible instance, you must specify a bid policy for the instance. If your bid price is higher than the real-time market price and the resource inventory of the instance specification is sufficient, the preemptible instance is created. After a preemptible instance is created, it enters a protection period during which the instance is billed based on the market price at the time of purchase. By default, the protection period is 1 hour. After the protection period expires, the instance is billed based on the real-time market price.
    
-   **Reclaim mechanism**
    
    After the protection period of a preemptible instance expires, the system checks the market price and resource inventory of the instance specification every 5 minutes. If the real-time market price exceeds your bid price or the resource inventory is insufficient, the preemptible instance is released. Elastic Container Instance sends the event to the list of Kubernetes events approximately 5 minutes before the preemptible instance is released. During the 5-minute-period of time, you can perform specific operations to prevent your business from being interrupted. For example, you can configure to deny inbound traffic to the instance.
    
-   **Creation methods**
    
    You can create a preemptible elastic container instance by specifying ECS instance types or the number of vCPUs and memory size.
    
-   **Configuration methods**
    
    You can add the `k8s.aliyun.com/eci-spot-strategy` annotation to the metadata in the configuration file of the pod to create a preemptible instance. The annotation specifies a bid policy for the preemptible instance.
    
    Valid values:
    
    -   SpotAsPriceGo: The instance is created as a preemptible instance for which the market price at the time of purchase is automatically used as the bid price.
        
    -   SpotWithPriceLimit: The instance is created as a preemptible instance for which you specify the maximum hourly price If you use this value, you must also add the `k8s.aliyun.com/eci-spot-price-limit` annotation to the instance to specify the maximum hourly price of the instance.
        

For more information, see [Create a preemptible elastic container instance](/help/en/eci/user-guide/create-a-preemptible-elastic-container-instance-1).

## Procedure

In Kubernetes, jobs are used to batch process short-lived and one-off tasks at a time. This section provides an example on how to run jobs on a preemptible instance:

1.  Prepare the configuration file of a job and name it spot\_job.yaml.
    
    ```
    apiVersion: batch/v1
    kind: Job
    metadata:
      name: pi
    spec:
      template:
        metadata:
          annotations:
            k8s.aliyun.com/eci-use-specs: ecs.c5.large,2-4Gi # Specifies multiple instance specifications to improve the success rate of instance creation.
            k8s.aliyun.com/eci-spot-strategy: SpotAsPriceGo    # The current market price is automatically used as the bid price.
        spec:
          containers:
          - name: pi
            image: registry-vpc.cn-beijing.aliyuncs.com/ostest/perl
            command: ["perl",  "-Mbignum=bpi", "-wle", "print bpi(2000)"]
          restartPolicy: Never
    ```
    
2.  Create a job.
    
    ```
    kubectl create -f spot_job.yaml
    ```
    
3.  Check the status of the pod.
    
    ```
    kubectl get pod
    ```
    
    -   If the job is running, the status of the pod is Running.
        
        ```
        NAME       READY   STATUS      RESTARTS   AGE
        pi-frmr8   1/1     Running     0          35s
        ```
        
    -   If the job completes the running as expected, the status of the pod changes to Completed.
        
        ```
        NAME       READY   STATUS      RESTARTS   AGE
        pi-frmr8   0/1     Completed   0          2h
        ```
        
    -   If the pod is released before the job completes the running due to the reclaim mechanism of the preemptible instance, and the Job Controller in Kubernetes automatically creates a new pod to continue running the job.
        
        In this case, the information of the original pod is retained and the status of the pod changes to BidFailed.
        
        **Note**
        
        After a preemptible instance is created, it runs as expected during the protection period. After the protection period expires, the preemptible instance is released if the market price is higher than your bid price or the inventory resources are insufficient. A pre-release event (SpotToBeReleased) is generated approximately 5 minutes before a preemptible instance is released. You can view the event information. For more information, see [Release of preemptible instances](/help/en/eci/user-guide/create-a-preemptible-elastic-container-instance-1#6f730540ffiky).
        
        ```
        NAME       READY   STATUS      RESTARTS   AGE
        pi-frmr8   1/1     BidFailed   0          4h53m
        pi-kp5zx   1/1     Running     0          3h45m
        ```

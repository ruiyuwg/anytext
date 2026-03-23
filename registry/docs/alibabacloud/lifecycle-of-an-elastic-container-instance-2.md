This topic describes different statuses of a pod (elastic container instance) in its lifecycle. You can design and implement your business logic based on the status. Elastic Container Instance is seamlessly connected to Kubernetes. You can directly use elastic container instances as pods in Kubernetes clusters.

## **Pod status**

The following table describes the status of a pod during its lifecycle.

**Status of a pod in Elastic Container Instance**

**Description**

**Status of a pod in Kubernetes**

**Billed**

Scheduling

The pod is being created.

Pending

No

Pending

One or more containers in the pod are being started, and no containers are running.

Pending

Yes

Running

All containers in the pod are created, and at least one container is running or restarting.

Running

Yes

Restarting

The pod is restarting.

Pending

Yes

Updating

The pod is being updated.

Pending

Yes

Terminating

The pod is being terminated. When a running pod configured with preStop is being deleted, the pod enters the Terminating state. After you run the preStop function, the pod is deleted.

Running

Yes

Succeeded

All containers in the pod are terminated after they successfully run and will not restart.

Succeeded

No

Failed

All containers in the pod are terminated after they run. At least one container is terminated due to runtime errors, which indicates that the container exits with a non-zero code or is terminated by the system.

Failed

No

Expired

The pod is a preemptible instance and is terminated due to resource expiration and recycling.

Failed

No

ScheduleFailed

The pod failed to be created. The system deletes the pod after 24 hours, and you are not charged for the pod.

Failed

No

**Important**

The restart policy of an elastic container instance applies only to containers in the instance. The elastic container instance itself does not automatically restart.

The following figure shows the status transition of an elastic container instance during its lifecycle. ![生命周期新](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1926720661/p327075.png)

**Note**

-   After an elastic container instance is terminated, its underlying computing resources are recycled. By default, other resources, such as elastic IP addresses (EIPs), that are created together with the instance are released together with the instance.
    
-   The metadata of an instance in the final status (Failed, Succeeded, or Expired) is retained based on the following rules:
    
    -   All metadata information is retained within 1 hour since the instance enters the final status.
        
    -   One hour after the instance enters the final status, only the latest 100 entries of metadata information in each region are retained.
        

## Container statuses

Status

Description

Waiting

The container is waiting to be created.

Typically, application containers remain in the Waiting state when an InitContainer is running until the InitContainer exits.

Running

The container is created and running.

Terminated

The container is terminated and exits after a successful or failed run.

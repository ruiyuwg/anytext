This topic describes different statuses of an elastic container instance in its lifecycle. You can design and implement your business logic based on the statuses.

## Statuses of an elastic container instance

The following table describes the statuses of an elastic container instance during its lifecycle.

Status

Description

Billed

Scheduling

The elastic container instance is being created.

No

Pending

One or more containers in the elastic container instance are being started, and no containers are running.

Yes

Running

All containers in the elastic container instance are created, and at least one container is running or restarting.

Yes

Restarting

The elastic container instance is restarting.

Yes

Updating

The elastic container instance is being updated.

Yes

Terminating

The elastic container instance is being terminated. When a running instance configured with preStop is being deleted, the instance enters the Terminating state. After you run the preStop function, the instance is deleted.

Yes

Succeeded

All containers in the elastic container instance are terminated after they successfully run and will not restart.

No

Failed

All containers in the elastic container instance are terminated after they run. At least one container is terminated due to runtime errors, which indicates that the container exits with a non-zero code or is terminated by the system.

No

Expired

The elastic container instance is a preemptible instance and is terminated due to resource expiration and recycling.

No

ScheduleFailed

The elastic container instance failed to be created. The system deletes the elastic container instance after 24 hours, and you are not charged for the elastic container instance.

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

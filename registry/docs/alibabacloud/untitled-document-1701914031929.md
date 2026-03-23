When you change an instance or upgrade its version, RDS MySQL performs an instance switchover. This causes a transient disconnection and temporary service unavailability. We recommend that you perform these operations during off-peak hours and ensure that your application has an automatic reconnection mechanism.

## **Impact**

**Important**

Perform operations that trigger an instance switchover during off-peak hours. Ensure that your application has an automatic reconnection mechanism.

-   For Cluster Edition or high-availability series instances, a [primary/standby switchover](/help/en/rds/apsaradb-rds-for-mysql/switch-workloads-over-between-primary-and-secondary-apsaradb-rds-for-mysql-instances) occurs, which causes the service to be unavailable for up to 15 seconds.
    
    **Note**
    
    If local resources are insufficient during an instance change, the system automatically creates a new instance on a host that has sufficient resources. Data is then synchronized from the original instance. You can continue to use the original instance during the synchronization. After the synchronization is complete, the system performs an instance switchover, which causes service unavailability for up to 15 seconds.
    
-   For Basic Edition instances, the service unavailability period is longer and depends on the data volume of the instance.
    
-   If an instance fails, the switchover time may increase.

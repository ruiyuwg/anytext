This topic describes the features for changing cluster configurations and the scenarios where these changes are supported.

PolarDB clusters support online configuration changes without locking the database. You can scale clusters in three ways, and the changes take effect within minutes:

-   Scale up or down computing power (vertical scaling): Upgrade or downgrade the specifications of a cluster. You can change the specifications of the primary node and read-only nodes separately. The specifications of read-only nodes do not need to match those of the primary node.
    
    **Note**
    
    PolarDB clusters provide flexible configuration changes. This lets you change the specifications of read-only nodes independently from the primary node and assign different specifications as needed.
    
-   Scale out or in computing power (horizontal scaling): Add or remove read-only nodes. You can scale out to a maximum of 16 compute nodes.
    
-   Scale out storage space (horizontal scaling): Pay-as-you-go storage uses a serverless architecture where storage capacity automatically scales with your data volume. For subscription storage, you can manually scale out the storage capacity.
    

You can change cluster configurations in the following scenarios:

-   **Manually change specifications**: You can manually change the specifications of your PolarDB for MySQL clusters. For more information, see [Manually upgrade or downgrade a cluster](/help/en/polardb/polardb-for-mysql/user-guide/manually-upgrade-or-downgrade-a-polardb-cluster#task-1580301).
    
-   **Automatically change specifications (elastic scaling)**:
    
    -   **PolarDB for MySQL** **5.7 and 8.0 clusters**: These clusters use a serverless architecture for elastic resource scaling. A single cluster can scale seamlessly from 0 to 1000 cores. This provides rapid scaling within seconds to handle sudden workload spikes without affecting your business.
        
    -   **PolarDB for MySQL** **5.6 clusters**: You can configure automatic scaling parameters. The PolarDB for MySQL Cluster Edition instance then automatically scales out or in based on your settings. For more information, see [Use automatic scaling to achieve elastic scaling](/help/en/polardb/polardb-for-mysql/user-guide/automatic-configuration-changes-auto-scaling#task-2085804).
        
-   **Temporary upgrade**: You can temporarily upgrade the specifications of a subscription PolarDB cluster to improve its overall performance. At a specified time, the cluster specifications automatically revert to their original state. For more information, see [Temporary upgrade](/help/en/polardb/polardb-for-mysql/user-guide/temporary-upgrade#task-1580301).
    
    **Note**
    
    Only subscription PolarDB clusters support temporary upgrades.
    
-   **Add or delete nodes**: You can manually add or remove read-only nodes. For more information, see [Add or remove nodes](/help/en/polardb/polardb-for-mysql/user-guide/add-or-remove-read-only-nodes#task-1580301).
    
-   **Upgrade Archive Database Single Node Edition to Archive Database Cluster Edition**: You can upgrade an existing Archive Database (High Compression) instance to a High-compression Engine (X-Engine) Dedicated instance. For more information, see [Upgrade an Archive Database Single Node Edition to an Archive Database Cluster Edition](/help/en/polardb/polardb-for-mysql/user-guide/upgrade-an-archive-database-standalone-edition-cluster-to-an-archive-database-cluster-edition-cluster#task-2148737).
    
-   **Manually scale out storage**: You can manually expand the storage capacity. For more information, see [Manually scale out or scale in storage space](/help/en/polardb/polardb-for-mysql/user-guide/manually-scale-up-the-storage-capacity-of-a-cluster-1#task-2215590).

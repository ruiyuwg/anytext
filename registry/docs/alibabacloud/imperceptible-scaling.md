Tair (Redis OSS-compatible) cluster instances can scale out to increase the number of shards or scale in to decrease the number of shards. During scaling, Tair eliminates the `-ASK` and `-TRYAGAIN` errors that can occur in open source Redis clusters. This ensures a seamless scaling experience.

## **Features**

Scaling Tair (Redis OSS-compatible) cluster instances provides the following features compared to scaling open source Redis clusters:

-   Efficient scaling management: A centralized control component provides efficient and precise control over cluster behavior.
    
-   Atomic data migration: Tair ensures the atomicity of data migration by modifying the kernel's data replication logic. During scaling, data is migrated on a slot-by-slot basis. This approach prevents slot splitting and avoids the `-ASK` and `-TRYAGAIN` errors. This greatly improves service stability and user experience.
    
    **Note**
    
    -   In the Redis Serialization Protocol (RESP) for clusters, non-data commands, such as **PING** and **INFO**, and special command families, such as **PUB/SUB** and **BLOCKING**, cannot be automatically redirected after a slot migration. The application layer must periodically update the route table to retrieve the latest topology after scaling.
        
    -   To ensure data consistency before and after data migration, the write request latency for the corresponding slot increases during the final stage of data migration. However, the write requests do not fail.
        
    
-   Shorter data migration duration: During scaling, Tair migrates data on a slot-by-slot basis instead of a key-by-key basis. This method is significantly more efficient and reduces the time required for data migration.
    
-   Elastic resource scaling: Tair supports Auto Scaling to meet resource requirements in different business scenarios.
    

## **Applicable instances**

-   The instance must use the **cloud-native** deployment mode.
    
-   The instance uses a cluster architecture.
    
-   The following instance versions are supported:
    
    -   Redis Open-Source Edition 5.0 instances of minor version 5.2.0 or later
        
    -   Redis Open-Source Edition 6.0 instances of minor version 6.0.2.0 or later
        
    -   Redis Open-Source Edition 7.0 instances
        
    -   Tair (Enterprise Edition) memory-optimized instances that are compatible with Redis 5.0 (minor version 5.0.34 or later)
        
    -   Tair (Enterprise Edition) memory-optimized instances that are compatible with Redis 6.0
        
    -   Tair (Enterprise Edition) memory-optimized instances that are compatible with Redis 7.0
        
    -   Tair (Enterprise Edition) persistent memory-optimized instances
        
    -   Tair (Enterprise Edition) disk-based instances
        

## **Precautions**

-   Client requirements:
    
    -   If a cluster instance uses the direct connection mode, the client must correctly handle the MOVED command.
        
    -   If a cluster instance uses the proxy mode, some proxy nodes are released during a scale-in operation. This causes connections to drop. The client must be able to automatically reconnect.
        
    -   During scaling, high latency may cause client commands to time out. The client must be able to automatically reconnect after a timeout.
        
    
    **Note**
    
    We recommend that you use a [recommended client](/help/en/redis/product-overview/important-notes-for-tair-and-apsaradb-for-redis-clients).
    
-   Impacts of special commands:
    
    -   Using blocking commands during scaling may cause errors.
        
    -   Using Pub/Sub commands during scaling does not guarantee data consistency and may cause errors, depending on the client implementation.

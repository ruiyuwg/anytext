If a classic (local disk-based) cluster instance has a private endpoint or has Global Distributed Cache enabled, the shard specifications and number of shards cannot be changed at the same time.

## Solutions

-   If you want to continue using the private endpoint or Global Distributed Cache, you can adjust either the shard specifications or the number of shards each time.
    
    For example, if the original instance has four shards and each shard has 2 GB of memory, the total memory of the instance is 8 GB.
    
    -   If you change only the shard specifications, the following specifications are available:
        
        -   4 shards × 4 GB per shard = 16 GB instance memory (available if you upgrade shard specifications)
            
        -   4 shards × 1 GB per shard = 4 GB instance memory (available if you downgrade shard specifications)
            
    -   If you change only the number of shards, the new number must be twice or half the original number. The following specifications are available:
        
        -   8 shards × 2 GB per shard = 16 GB instance memory (available if you double the original number)
            
        -   2 shards × 2 GB per shard = 4 GB instance memory (available if you decrease the original number by half)
            
-   If you no longer need the private endpoint or Global Distributed Cache, you can release the endpoint or release the distributed instance. For more information, see [Release a private endpoint](/help/en/redis/user-guide/release-a-private-endpoint-from-an-apsaradb-for-redis-instance#task-2386010) or [Release a distributed instance](/help/en/redis/user-guide/release-a-distributed-instance#task-2004070). After the release, the preceding limits no longer apply when you change the configurations of the classic (local disk-based) cluster instance.

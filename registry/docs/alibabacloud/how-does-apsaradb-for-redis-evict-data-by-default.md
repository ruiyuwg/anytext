If a Tair (Redis OSS-compatible) instance is out of memory, a data eviction (or removal) policy is triggered to ensure that the instance does not exceed its memory limit. The default policy is **volatile-lru**. This policy evicts the less recently used (LRU) keys from keys that have a time-to-live (TTL) configured. This topic describes the eviction policies of Tair (Redis OSS-compatible).

## **Eviction policies**

-   volatile-lru (default for Tair DRAM-based instances and Redis Open-Source Edition instances): evicts the LRU keys from keys that have a TTL configured regardless of whether the keys have expired.
    
-   noeviction (default for Tair persistent memory-optimized instances): does not evict keys to make space when the memory limit is reached, but returns errors for write operations.
    
-   volatile-lfu: evicts the LFU keys from keys that have a TTL configured.
    
-   volatile-random: randomly evicts keys from keys that have a TTL configured.
    
-   volatile-ttl: evicts the keys that have the shortest TTL from keys that have a TTL configured.
    
-   allkeys-lru: evicts the LRU keys from all keys.
    
-   allkeys-lfu: evicts the LFU keys from all keys.
    
-   allkeys-random: randomly evicts keys from all keys.
    

**Note**

Data eviction is not supported for ESSD/SSD-based instances.

## **Modify the eviction policy of an instance**

Log on to the [console](https://kvstore.console.alibabacloud.com/). On the **Parameter Settings** page of the desired instance, modify the value of the maxmemory-policy parameter. For more information, see [Configure instance parameters](/help/en/redis/user-guide/modify-the-values-of-parameters-for-an-instance/#concept-q1w-kxn-tdb).

## **FAQ**

-   Why are keys with an expiration time deleted before the expiration time becomes zero?
    
    You can check whether the memory of the instance is used up. When the instance memory is exhausted, data eviction is triggered. Due to the default eviction policy of volatile-lru, when keys with an expiration time are written, these keys are preferentially deleted. In this case, you can expand the memory capacity of the instance. For more information, see [Change the configurations of an instance](/help/en/redis/user-guide/change-the-configurations-of-an-instance/).
    

## **References**

If the number of keys decreases, data may be cleared due to expiration. For information about the policies for clearing expired keys and methods to manually clear expired keys in Tair (Redis OSS-compatible), see [Clear expired keys in Tair](/help/en/redis/support/how-do-i-clear-expired-keys).

You can tune and customize the parameters of a Tair (Enterprise Edition) instance to improve its performance and security based on your business scenario. This topic describes these parameters in detail.

## Notes

-   If the error message `Parameter is not supported for current version` is returned when you set a parameter, upgrade the minor version of the instance and try again. For more information, see [Upgrade the minor version and proxy version](/help/en/redis/user-guide/update-the-minor-version#concept-itn-f44-tdb).
    
-   Some parameters automatically restart the instance after you submit the changes. The instance may experience a transient disconnection that lasts for a few seconds during the restart. When you set a parameter, check the **Takes Effect upon Restart** column for that parameter. For more information, see [Set parameters](/help/en/redis/user-guide/modify-the-values-of-parameters-for-an-instance/#concept-q1w-kxn-tdb).
    

**Important**

The supported parameters vary based on the database engine version and architecture. This topic describes only the parameters for Tair (Enterprise Edition) instances, including [memory-optimized](/help/en/redis/product-overview/dram-based-instances), [persistent memory](/help/en/redis/product-overview/persistent-memory-optimized-instances-1), and [disk-based](/help/en/redis/product-overview/essd-based-instances-1) instances. For information about the parameters for Redis Open-Source Edition instances, see [Supported Redis parameters](/help/en/redis/user-guide/supported-parameters#concept-2087327).

## Supported parameters and descriptions

For readability and clarity, the tables in this topic use the following conventions:

-   ✔️: The parameter is supported by the major version or architecture.
    
-   ❌: The parameter is not supported by the major version or architecture.
    

**Note**

-   To ensure instance stability, you can configure only the parameters that are listed in this topic.
    
-   For more information about architectures, see [Query architecture information](/help/en/redis/product-overview/product-architecture/).
    

  

### Memory-optimized and persistent memory instances

**Parameter**

**Description**

**Instance edition and architecture**

**Memory-optimized**

**Persistent memory**

#no\_loose\_check-whitelist-always

Specifies whether to check if the client IP address is in the instance's whitelist after you enable [passwordless access for a VPC](/help/en/redis/user-guide/enable-password-free-access#concept-ttq-dst-j2b). Valid values:

-   **yes**: Checks the IP address. After you enable passwordless access, you must add the IP address of a client in the same VPC to the instance's whitelist before you can connect to the instance from that client.
    
    If passwordless access is enabled but the whitelist is not correctly configured, an error similar to the following one is returned upon connection: `(error) ERR illegal address`.
    
-   **no** (default): Does not check the IP address. After you enable passwordless access, you can connect to the instance from a client in the same VPC without adding the client's IP address to the instance's whitelist.
    

**Note**

-   Only instances that use the classic architecture support this parameter.
    
-   Instances that use the cloud-native architecture always check the IP whitelist, regardless of whether passwordless access is enabled.
    

Standard ✔️

Cluster ✔️

Read/write splitting ✔️

❌

#no\_loose\_disabled-commands

Specifies the commands to disable. You can disable high-risk commands or commands with high time complexity as needed, such as FLUSHALL, FLUSHDB, KEYS, HGETALL, EVAL, EVALSHA, and SCRIPT.

**Note**

-   Enter the commands in lowercase. Separate multiple commands with commas (,).
    
-   Disabling the FLUSHALL command does not affect the **Clear Data** feature in the console.
    
-   To ensure stable instance performance, Tair (Redis OSS-compatible) does not allow commands such as CONFIG to be disabled. For more information, see [Commands that cannot be disabled](/help/en/redis/user-guide/disable-high-risk-commands#section-719-h69-vmi).
    

Standard ✔️

Cluster ✔️

Read/write splitting ✔️

Standard ✔️

Cluster ✔️

Read/write splitting ✔️

**#no\_loose\_high-cost-key-enabled**

Specifies whether to enable the feature that monitors hot keys (keys with high access traffic). This feature identifies keys that have high access traffic per second, such as keys with large values. After you enable this feature, you can view the monitored hot keys in the **CloudDBA** > **Top Key Statistics** panel.

-   **#no\_loose\_high-cost-key-enabled**: The switch for the feature. The default value is **no**, which indicates that the feature is disabled. To enable it, set the value to **yes**.
    
    **Important**
    
    Enabling this feature increases the CPU usage of the instance by more than 5%. The increase is positively correlated with the number of keys. Enable this feature as needed.
    
-   **#no\_loose\_high-cost-key-traffic-bytes-threshold**: The collection threshold for key access traffic per second. Valid values: \[1024-4294967295\]. Unit: **Byte/s**. Default value: 1048576 (1 MB/s).
    
-   **#no\_loose\_high-cost-key-parse-hashtag**: Specifies whether to enable hashtag parsing. The default value is **no**, which indicates that parsing is disabled. If you set the value to **yes**, the system aggregates keys that have the same `{hashtag}`. If the total access traffic of these keys exceeds the threshold, the hashtag is reported as a hot key of the Hashtag data type.
    
    Example: The keys `{user}a` and `{user}b` are not hot keys individually. However, if their aggregated traffic exceeds the threshold, **Top Key Statistics** marks `{user}` as a hot key.
    
-   **#no\_loose\_high-cost-key-parse-prefix**: Specifies whether to enable common prefix parsing. The default value is **no**, which indicates that parsing is disabled. If you set the value to **yes**, the system aggregates keys that have the same prefix. If the total access traffic of these keys exceeds the threshold, the prefix is reported as a hot key of the Prefix data type.
    
    -   **#no\_loose\_high-cost-key-parse-prefix-delimiters**: The separator for prefix parsing. The value is a string. The default value is empty. If you enter multiple characters, such as `: _`, the system splits the key using each character as a separator.
        
    -   **#no\_loose\_high-cost-key-parse-prefix-skip-first-n**: Skips the first N separators. Valid values: \[0-5\]. Default value: 0. This is useful for ignoring common prefixes.
        
    -   **#no\_loose\_high-cost-key-parse-prefix-find-limit-n**: The depth of prefix parsing. This controls the maximum number of segments to extract from the left as a prefix. Valid values: \[1-5\]. Default value: 1.
        
    
    Example: For the two keys `service:user:123` and `service:user:456`, the separator is set to `:`.
    
    -   If **skip-first-n** is 1 and **find-limit-n** is 1, the hot key `service:user` can be captured.
        
    -   If **skip-first-n** is 0 and **find-limit-n** is 2, the hot keys `service` and `service:user` can be captured.
        
    

**Note**

This feature is supported only by cloud-native memory-optimized instances with a minor version of 25.2.0.0 or later. Hashtag parsing and prefix parsing require minor version 25.9.1.0 or later.

Standard ✔️

Cluster ✔️

Read/write splitting ✔️

❌

**#no\_loose\_high-cost-key-traffic-bytes-threshold**

**#no\_loose\_high-cost-key-parse-hashtag**

**#no\_loose\_high-cost-key-parse-prefix**

**#no\_loose\_high-cost-key-parse-prefix-delimiters**

**#no\_loose\_high-cost-key-parse-prefix-find-limit-n**

**#no\_loose\_high-cost-key-parse-prefix-skip-first-n**

#no\_loose\_lua-strict-mode

Specifies whether to enable strict mode for Lua scripts. When enabled, standard architecture instances, similar to cluster architecture instances, require that data keys in Lua scripts are passed through the `KEYS` array and cannot be dynamically generated in the script. Enabling this feature allows Lua scripts to be accelerated with multi-threaded parallel processing, improving performance several times over. Valid values:

-   **no** (default): Disabled
    
-   **yes**: Enables strict mode (recommended). For more information about Lua script specifications, see [Lua script specifications and common errors](/help/en/redis/support/usage-of-lua-scripts).
    

**Note**

This parameter is supported only by memory-optimized instances that are compatible with Redis 6.0 or later.

Standard ✔️

Cluster ❌

Read/write splitting ❌

❌

**#no\_loose\_maxmemory-evict-percent-soft-limit**

Sets the memory threshold for early eviction. Valid values: \[50-100\]. Unit: percentage. Default value: 100. When the instance's memory usage reaches this threshold, Tair starts data eviction in the background without affecting the performance of command execution.

The eviction policy still depends on the configuration of the **maxmemory-policy** parameter.

**Note**

This parameter is supported only by memory-optimized instances that are compatible with Redis 6.0 or later and have a minor version of 25.2.0.0 or later.

Standard ✔️

Cluster ✔️

Read/write splitting ✔️

❌

#no\_loose\_publish-no-wait-result

Enabling this parameter improves the throughput of the PUBLISH command for Tair instances, but the return value of the PUBLISH command is always 0.

-   **no** (default): Does not enable this feature.
    
-   **Yes**: Enabled.
    

**Note**

This parameter is supported only by memory-optimized instances that are compatible with Redis 6.0 or later.

Standard ✔️

Cluster ✔️

Read/write splitting ✔️

❌

**#no\_loose\_slow-query-isolation-weight**

To improve the latency of regular commands, Tair isolates a separate thread to process slow query commands. This is an additional thread and does not affect the normal processing of the instance. Specific slow query commands include **KEYS**, **SMEMBERS**, **HKEYS**, **HVALS**, **HGETALL**, **EXHKEYS**, **EXHVALS**, and **EXHGETALL**. You cannot add or remove commands from this list.

This parameter defines the threshold for slow query commands, which is the number of sub-members of the corresponding key. For the **KEYS** command, it is the number of keys in the current DB. Valid values: \[1-999999999999999\]. Default value: 1000. For example, if a Set collection has more than 1,000 sub-members, running the **SMEMBERS** command on this key uses the isolated thread.

When the number of pending requests in the isolated thread exceeds 500, subsequent commands are processed on regular threads.

**Note**

-   This parameter is supported only by cloud-native memory-optimized instances.
    
-   Do not set this threshold too low. This may cause excessive pressure on the isolated thread and waste overall resources. If most of your business requests are the slow query commands listed above, consider disabling the isolation mechanism by setting this parameter to its maximum value of 999999999999999.
    

Standard ✔️

Direct connection cluster ✔️

Proxy cluster ❌

Read/write splitting ❌

❌

#no\_loose\_sentinel-enabled

Enables or disables Sentinel-compatible mode for standard architecture instances. Valid values:

-   **Yes**: Enabled.
    
-   **no** (default): Disables the mode.
    

Standard ✔️

Cluster ✔️

Read/write splitting ❌

Standard ✔️

Cluster ✔️

Read/write splitting ❌

**#no\_loose\_sentinel-password-free-access**

Specifies whether to allow password-free execution of Sentinel commands when the Sentinel mode is enabled. Valid values:

-   **yes**: After you enable the Sentinel mode, **password-free execution** of Sentinel commands is allowed on any connection. You can also use the **SENTINEL** command to listen to the `+switch-master` channel.
    
-   **no** (default): shutdown.
    

Standard ✔️

Cluster ✔️

Read/write splitting ✔️

Standard ✔️

Cluster ✔️

Read/write splitting ✔️

**#no\_loose\_sentinel-password-free-commands**

After you enable the Sentinel mode and set the **#no\_loose\_sentinel-password-free-access** parameter to yes, you can use this parameter to specify an additional list of commands that can be run without requiring a password. By default, this parameter is empty.

**Important**

-   After you configure this parameter, you can **run the specified commands without a password** on any connection. Proceed with caution.
    
-   The commands must be written in lowercase letters. Separate multiple commands with commas (,).
    

Standard ✔️

Cluster ✔️

Read/write splitting ✔️

Standard ✔️

Cluster ✔️

Read/write splitting ✔️

#no\_loose\_tls-min-version

Sets the minimum TLS version supported by the instance. Valid values:

-   TLSv1 (default).
    
-   TLSv1.1.
    
-   TLSv1.2.
    

Standard ❌

Cluster ✔️

Read/write splitting ✔️

❌

active-expire-effort

Sets the proactivity of the task that cleans up expired keys. Increasing this value makes the engine more proactive in cleaning up expired keys, reducing the memory space they occupy, but it also increases CPU usage and latency. Valid values: \[1-10\]. Default value: 1.

**Note**

This parameter is supported only by persistent memory instances.

❌

Standard ✔️

Cluster ✔️

Read/write splitting ✔️

appendfsync

The fsync frequency for Append-Only File (AOF) persistence. This parameter takes effect only when the appendonly parameter is enabled. The default value is everysec and cannot be modified.

Standard ✔️

Cluster ✔️

Read/write splitting ✔️

Standard ✔️

Cluster ✔️

Read/write splitting ✔️

appendonly

Enables or disables AOF persistence for the primary node. Valid values:

-   **yes** (default): Enables AOF persistence.
    
-   **no**: Disables AOF persistence.
    
    **Note**
    
    Redis database (RDB) persistence is performed once a day by default. For more information, see [Automatic or manual backup](/help/en/redis/user-guide/automatic-or-manual-backup#task-2066397).
    

Standard ✔️

Cluster ✔️

Read/write splitting ✔️

Standard ✔️

Cluster ✔️

Read/write splitting ✔️

-   client-output-buffer-limit pubsub
    
-   client-output-buffer-limit normal
    

Limits the output buffer for publish/subscribe clients and normal clients. The parameter value format is `<hard limit> <soft limit> <soft seconds>`. The default value for pubsub is 33554432 8388608 60, and the default value for normal is 524288000 0 0.

-   `<hard limit>`: When the memory occupied by a client's output buffer reaches or exceeds the hard limit, the connection to that client is closed. The unit for the hard limit is bytes.
    
-   `<soft limit>` and `<soft seconds>`: When the memory occupied by a client's output buffer reaches or exceeds the soft limit, and this state persists for a duration greater than or equal to the specified soft seconds, the connection to that client is closed. The unit for the soft limit is bytes, and the unit for soft seconds is seconds.
    

**Important**

-   Only memory-optimized instances compatible with Redis 6.0 or later support the client-output-buffer-limit normal parameter.
    
-   The client output buffer occupies runtime memory. If too many commands accumulate, it can cause **instance data eviction** or even an **out-of-memory breakdown**. Carefully check the instance memory specification before adjusting this parameter. Use with caution.
    

Standard ✔️

Cluster ✔️

Read/write splitting ✔️

Standard ✔️

Cluster ✔️

Read/write splitting ✔️

dynamic-hz

Enables or disables dynamic hz. Valid values:

-   **yes** (Default): Enables the functionality.
    
-   **no**: Performs a shutdown.
    

Standard ✔️

Cluster ✔️

Read/write splitting ✔️

Standard ✔️

Cluster ✔️

Read/write splitting ✔️

**globalvectorindex\_enabled**

The switch for the TairVector global index. Valid values:

-   **0** (default): Disables the index.
    
-   **1**: Enabled
    

Standard ❌

Cluster ✔️

Read/write splitting ❌

❌

-   hash-max-ziplist-entries
    
-   hash-max-ziplist-value
    

For instances compatible with Redis 6.0 and earlier, **ziplist** is used as the default encoding for hashes. A hash object uses **ziplist** encoding when both of the following conditions are met:

-   The number of key-value pairs in the hash is less than the value of hash-max-ziplist-entries.
    
-   The string length of both the keys and values in the hash is less than the value of hash-max-ziplist-value.
    

Standard ✔️

Cluster ✔️

Read/write splitting ✔️

Standard ✔️

Cluster ✔️

Read/write splitting ✔️

-   hash-max-listpack-entries
    
-   hash-max-listpack-value
    

For instances compatible with Redis 7.0 and later, **listpack** is used as the default encoding for hashes. A hash object uses **listpack** encoding when both of the following conditions are met:

-   The number of key-value pairs in the hash is less than the value of hash-max-listpack-entries.
    
-   The string length of both the keys and values in the hash is less than the value of hash-max-listpack-value.
    

Standard ✔️

Cluster ✔️

Read/write splitting ✔️

❌

hz

Sets the execution frequency of background tasks for the instance, such as the task to clear expired keys. Valid values: \[1-500\]. Default value: 10, which means 10 times per second.

**Note**

A higher value consumes more CPU resources but also results in a higher cleanup frequency when there are many expired keys. It also allows the instance to handle timeouts more precisely. We recommend a value no greater than 100.

Standard ✔️

Cluster ✔️

Read/write splitting ✔️

Standard ✔️

Cluster ✔️

Read/write splitting ✔️

lazyfree-lazy-eviction

Specifies whether to enable lazyfree-based eviction. Valid values:

-   **yes**: Enables the feature.
    
-   **no** (default): Disables the feature.
    

Standard ✔️

Cluster ✔️

Read/write splitting ✔️

Standard ✔️

Cluster ✔️

Read/write splitting ✔️

lazyfree-lazy-expire

Specifies whether to enable lazyfree-based deletion of expired keys. Valid values:

-   **yes** (default): Enables the feature.
    
-   **no**: Disabled
    

Standard ✔️

Cluster ✔️

Read/write splitting ✔️

Standard ✔️

Cluster ✔️

Read/write splitting ✔️

lazyfree-lazy-server-del

Specifies whether the DEL command asynchronously deletes data based on lazyfree. Valid values:

-   **Yes** (default): Enabled.
    
-   **no**: Disable.
    

Standard ✔️

Cluster ✔️

Read/write splitting ✔️

Standard ✔️

Cluster ✔️

Read/write splitting ✔️

lazyfree-lazy-user-del

Specifies whether the DEL command asynchronously deletes data based on lazyfree. Valid values:

-   **Yes** (default): Enabled.
    
-   **no**: Disabled.
    

❌

Standard ✔️

Cluster ✔️

Read/write splitting ✔️

list-compress-depth

The number of uncompressed nodes at both ends of a list. Valid values: \[0-65535\].

-   0 (default): No nodes are compressed.
    
-   1-65535: 1 to 65535 nodes at each end of the list are not compressed, while the nodes in the middle are compressed.
    

Standard ✔️

Cluster ✔️

Read/write splitting ✔️

Standard ✔️

Cluster ✔️

Read/write splitting ✔️

-   list-max-ziplist-size
    
-   list-max-listpack-size
    

For instances compatible with Redis 6.0 and earlier, **ziplist** is the default encoding for lists (the list-max-ziplist-size parameter). For instances compatible with Redis 7.0 and later, **listpack** is the default encoding for lists (the list-max-listpack-size parameter).

-   A positive value limits the length of the ziplist (or listpack) on each quicklist node by the number of data items. For example, if this parameter is set to 5, the ziplist (or listpack) of each quicklist node can contain at most 5 data items.
    
-   A negative value limits the length of the ziplist (or listpack) on each quicklist node by the number of bytes occupied. Valid values:
    
    -   \-5: The size of the ziplist (or listpack) on each quicklist node cannot exceed 64 KB.
        
    -   \-4: The size of the ziplist (or listpack) on each quicklist node cannot exceed 32 KB.
        
    -   \-3: The size of the ziplist (or listpack) on each quicklist node cannot exceed 16 KB.
        
    -   \-2 (default): The size of the ziplist (or listpack) on each quicklist node cannot exceed 8 KB.
        
    -   \-1: The size of the ziplist (or listpack) on each quicklist node cannot exceed 4 KB.
        

Standard ✔️

Cluster ✔️

Read/write splitting ✔️

Standard ✔️

Cluster ✔️

Read/write splitting ✔️

maxmemory-policy

The data eviction policy. When the instance runs out of memory and its memory usage reaches the Maxmemory limit, data eviction is triggered. You can select different data eviction policies. Valid values:

**Note**

-   The Maxmemory of an instance is its instance type size and cannot be modified. For example, if you purchase a 2 GB instance, its Maxmemory is 2 GB.
    
-   In a cluster architecture, when a single data node reaches its **Maxmemory** limit, data eviction is triggered on that node, even if the total memory usage has not reached the upper limit. You must handle data skew. For more information, see [How do I handle data skew?](/help/en/redis/user-guide/deal-with-data-skew-issues).
    
-   LRU stands for least recently used. LFU stands for least frequently used. The LRU, LFU, and volatile-ttl policies are implemented using approximate random algorithms.
    

-   volatile-lru (default for memory-optimized instances and Redis Open-Source Edition): From keys with an expiration time (Expire) set, deletes the least recently used key (LRU algorithm), regardless of whether the key has expired.
    
-   noeviction (default for persistent memory instances): Does not delete any keys. When the memory limit is reached, new data cannot be written, and the database returns an error message.
    
-   volatile-lfu: From keys with an expiration time (Expire) set, deletes the least frequently used key (LFU algorithm).
    
-   volatile-random: From keys with an expiration time (Expire) set, randomly deletes some keys.
    
-   volatile-ttl: From keys with an expiration time (Expire) set, deletes keys sorted by their time to live (TTL) in ascending order.
    
-   allkeys-lru: From all keys, deletes the least recently used key (LRU algorithm).
    
-   allkeys-lfu: From all keys, deletes the least frequently used key (LFU algorithm).
    
-   allkeys-random: From all keys, randomly deletes some keys.
    

Standard ✔️

Cluster ✔️

Read/write splitting ✔️

Standard ✔️

Cluster ✔️

Read/write splitting ✔️

notify-keyspace-events

The value of notify-keyspace-events can be any combination of the following characters. It specifies the types of notifications the server sends. This parameter enables notifications for the entire instance (all DBs). Enabling it consumes extra CPU resources. For more information, see [Redis keyspace notifications](https://redis.io/docs/latest/develop/use/keyspace-notifications/).

-   K: Keyspace notifications. All notifications are prefixed with `__keyspace@<db>__`.
    
-   E: Key-event notifications. All notifications are prefixed with `__keyevent@<db>__`.
    
-   g: Notifications for generic commands that are not type-specific, such as DEL, EXPIRE, and RENAME.
    
-   $: Notifications for string commands. Sends notifications about string creation, modification, deletion, and other operations.
    
-   l: Notifications for list commands.
    
-   s: Notifications for set commands.
    
-   h: Notifications for hash commands.
    
-   z: Notifications for sorted set commands.
    
-   x: Expired events. These are not necessarily sent when a key expires, but when the expired key is deleted.
    
-   e: Evicted events. Sent whenever a key is deleted due to the maxmemory policy.
    
-   A: An alias for the parameter g$lshzxe. It means listening for all the preceding events. Example setting: AKE.
    

**Important**

The value must contain at least K or E. Otherwise, no notifications are dispatched.

For example, to subscribe to expiration events, set this parameter to `Ex` in the parameter settings. After setting the parameter, run the corresponding subscription command on the client: `PSUBSCRIBE __keyevent@0__*`. This command subscribes to key event notifications for DB0.

Standard ✔️

Cluster ✔️

Read/write splitting ✔️

Standard ✔️

Cluster ✔️

Read/write splitting ✔️

pena\_rename\_move\_compatible\_enabled

Specifies whether to enable compatible mode for the MOVE and RENAME series of commands. The time complexity of these commands is O(n), unlike the O(1) of native Redis. If the object being operated on is a large key, the operation will take a long time. Valid values:

-   The default value is **no**, which disables the feature.
    
-   **yes**: Enables compatible mode. You can execute the related commands. The syntax is the same as native Redis.
    

**Note**

This parameter is supported only by persistent memory instances with version 1.2.4 or later.

❌

Standard ✔️

Cluster ✔️

Read/write splitting ✔️

set-max-intset-entries

When the data in a Set collection meets the following conditions, intset encoding is used.

-   All data in the collection are string objects.
    
-   All are base-10 integers within the range of 64-bit signed integers.
    

Standard ✔️

Cluster ✔️

Read/write splitting ✔️

Standard ✔️

Cluster ✔️

Read/write splitting ✔️

slowlog-log-slower-than

The threshold for the slow query log. Commands with an execution time exceeding this threshold are recorded. Unit: microseconds (μs). Valid values: \[10000-10000000\]. Default value: 20000 (20 milliseconds).

Standard ✔️

Cluster ✔️

Read/write splitting ✔️

Standard ✔️

Cluster ✔️

Read/write splitting ✔️

slowlog-max-len

The maximum number of records that the slow query log can store. Valid values: \[100-10000\]. Default value: 1024.

Standard ✔️

Cluster ✔️

Read/write splitting ✔️

Standard ✔️

Cluster ✔️

Read/write splitting ✔️

stream-node-max-bytes

The maximum memory that each macro node in a Stream can occupy. Unit: bytes. Valid values: \[0-999999999999999\]. Default value: 4096. A value of 0 means no limit.

Standard ✔️

Cluster ✔️

Read/write splitting ✔️

Standard ✔️

Cluster ✔️

Read/write splitting ✔️

stream-node-max-entries

The maximum number of entries that can be stored in each macro node of a Stream. Valid values: \[0-999999999999999\]. Default value: 100. A value of 0 means no limit.

Standard ✔️

Cluster ✔️

Read/write splitting ✔️

Standard ✔️

Cluster ✔️

Read/write splitting ✔️

timeout

When a client is idle for the specified number of seconds, the instance closes the connection. Unit: seconds. Valid values: \[0, 100000\]. Default value: 0 (no connections are closed).

Standard ✔️

Cluster ✔️

Read/write splitting ✔️

Standard ✔️

Cluster ✔️

Read/write splitting ✔️

**#no\_loose\_ts-auto-del-empty-skey-enable**

Specifies whether to automatically delete an Skey in a TairTS data structure when all data points within the Skey have expired. Valid values:

-   **yes** (default): Deletes the Skey when all data points in it have expired.
    
-   **no**: The resource will not be deleted.
    

**Note**

This parameter is supported only by memory-optimized instances that are compatible with Redis 6.0 or later and have a minor version of 24.7.0.0 or later.

Standard ✔️

Cluster ✔️

Read/write splitting ✔️

Standard ✔️

Cluster ✔️

Read/write splitting ✔️

-   zset-max-ziplist-entries
    
-   zset-max-ziplist-value
    

For instances compatible with Redis 6.0 and earlier, **ziplist** is the default encoding for Zsets. A Zset uses **ziplist** encoding when both of the following conditions are met:

-   The number of key-value pairs in the Zset is less than the value of zset-max-ziplist-entries.
    
-   The string length of both the keys and values in the Zset is less than the value of zset-max-ziplist-value.
    

Standard ✔️

Cluster ✔️

Read/write splitting ✔️

Standard ✔️

Cluster ✔️

Read/write splitting ✔️

-   zset-max-listpack-entries
    
-   zset-max-listpack-value
    

For instances compatible with Redis 7.0 and later, **listpack** is the default encoding for Zsets. A Zset uses **listpack** encoding when both of the following conditions are met:

-   The number of key-value pairs in the Zset is less than the value of zset-max-listpack-entries.
    
-   The string length of both the keys and values in the Zset is less than the value of zset-max-listpack-value.
    

bigkey-threshold

The element count threshold for large keys (keys with many elements) in [Top Key Statistics](/help/en/redis/user-guide/use-the-real-time-key-statistics-feature). Default value: 2000. Valid values: \[500-100000\].

**Note**

If this parameter is not displayed in the parameter settings, [upgrade the minor version](/help/en/redis/user-guide/update-the-minor-version) and try again.

Standard ✔️

Cluster ✔️

Read/write splitting ✔️

❌

bigkey-mem-threshold

The memory size threshold for large keys (keys with large memory usage) in [Top Key Statistics](/help/en/redis/user-guide/use-the-real-time-key-statistics-feature). Default value: 536870912 B. Valid values: \[1048576 B-1073741824 B\].

**Note**

This parameter is supported only by cloud-native memory-optimized instances with a minor version of 25.6.0.0 or later.

Standard ✔️

Cluster ✔️

Read/write splitting ✔️

❌

hotkey-threshold

The statistics threshold for hot keys (by QPS) in [Top Key Statistics](/help/en/redis/user-guide/use-the-real-time-key-statistics-feature). Default value: 5000. Valid values: \[100-100000\].

**Note**

This parameter is supported only by cloud-native memory-optimized instances, and the minor version must meet the following requirements:

-   Compatible with Redis 5.0: 5.5.0.50 or later.
    
-   Compatible with Redis 6.0 and 7.0: 25.2.0.0 or later.
    

Standard ✔️

Cluster ✔️

Read/write splitting ✔️

❌

### Disk-based instances

**Parameter**

**Description**

**Disk-based**

**#no\_loose\_disabled-commands**

Specifies the commands to disable. You can disable high-risk commands or commands with high time complexity as needed, such as FLUSHALL, FLUSHDB, KEYS, HGETALL, EVAL, EVALSHA, and SCRIPT.

**Note**

-   Enter the commands in lowercase. Separate multiple commands with commas (,).
    
-   Disabling the FLUSHALL command does not affect the **Clear Data** feature in the console.
    
-   To ensure stable instance performance, Tair (Redis OSS-compatible) does not allow commands such as CONFIG to be disabled. For more information, see [Commands that cannot be disabled](/help/en/redis/user-guide/disable-high-risk-commands#section-719-h69-vmi).
    

Standard ✔️

Cluster ✔️

#no\_loose\_lua-strict-mode

Specifies whether to enable strict mode for Lua scripts. When enabled, standard architecture instances, similar to cluster architecture instances, require that data keys in Lua scripts are passed through the `KEYS` array and cannot be dynamically generated in the script. Enabling this feature allows Lua scripts to be accelerated with multi-threaded parallel processing, improving performance several times over. Valid values:

-   **no** (default): The feature is disabled.
    
-   **yes**: Enables strict mode (recommended). To use this feature, you must also enable the txn-isolation-lock parameter. For more information about Lua script specifications, see [Lua script specifications and common errors](/help/en/redis/support/usage-of-lua-scripts).
    

Standard ✔️

Cluster ✔️

bigkey-threshold

The element count threshold for large keys (keys with many elements) in [Top Key Statistics](/help/en/redis/user-guide/use-the-real-time-key-statistics-feature). Default value: 2000. Valid values: \[500-100000\].

**Note**

This parameter is supported only by disk-based instances with version 2.6.0 or later.

Standard ✔️

Cluster ✔️

hotkey-threshold

The statistics threshold for hot keys (by QPS) in [Top Key Statistics](/help/en/redis/user-guide/use-the-real-time-key-statistics-feature). Default value: 5000. Valid values: \[100-100000\].

**Note**

This parameter is supported only by disk-based instances with version 2.6.0 or later.

Standard ✔️

Cluster ✔️

latency-monitor-threshold

Sets the latency threshold. Events with a duration exceeding this threshold are recorded as latency events. Unit: milliseconds. Valid values: \[0-10000000\]. Default value: 100.

Standard ✔️

Cluster ✔️

**max-rename-commit-size**

The maximum data volume that can be stored in a key that the **RENAME** command can rename. Unit: bytes. Valid values: \[1024-268435456\]. Default value: 16777216.

If the actual data volume exceeds this threshold, the operation fails.

Standard ✔️

Cluster ✔️

**max-write-batch-size**

The size limit for data generated in memory in the disk storage format during command execution. Unit: bytes. Valid values: 0-1073741824 (1 GB). The default value is 0, which means no upper limit.

**Note**

If the data distribution and requests are likely to generate large intermediate data, we recommend setting this to 1073741824 (1 GB) to prevent memory overflow.

Standard ✔️

Cluster ✔️

**optimise-huge-value**

Specifies whether to enable performance optimization for large values. Valid values:

-   **no** (default): Disables optimization.
    
-   **yes**: Enables optimization. This can double the write performance for large values but reduces the efficiency of range queries (such as **SCAN**, **HGETALL**, and **ZRANGE**) and increases memory usage fluctuations.
    
    We recommend enabling this only in scenarios with large values (average over 16 KB) and high write loads.
    

**Note**

This parameter is supported only by disk-based SSD instances with version 2.6.0 or later.

Standard ✔️

Cluster ✔️

slowlog-log-slower-than

The threshold for the slow query log. Commands with an execution time exceeding this threshold are recorded. Unit: microseconds (μs). Valid values: \[10000-10000000\]. Default value: 1000000.

Standard ✔️

Cluster ✔️

slowlog-max-len

The maximum number of records that the slow query log can store. Valid values: \[100-10000\]. Default value: 1024.

Standard ✔️

Cluster ✔️

**scan-background-interval-ms**

The instance's background process actively polls keys to determine information such as TTL and performs garbage collection.

-   **scan-background-interval-ms**: The polling interval. Unit: ms. Default value: 1000 (1s).
    
-   **batch-scan-count**: The number of keys polled each time. Default value: 20000, which means 20,000 keys are queried by default.
    
-   **batch-scan-size**: The upper limit of data polled each time. Unit: bytes. Default value: 2097152, which means 2 MB of data is queried by default.
    

**Note**

-   When either the **batch-scan-count** or **batch-scan-size** condition is met, the loop exits and waits for the next scan.
    
-   If you have high requirements for background garbage collection, you can appropriately decrease the **scan-background-interval-ms** value. However, increasing the polling frequency also consumes more disk bandwidth. To avoid affecting user requests, we do not recommend significantly increasing the polling frequency.
    

Standard ✔️

Cluster ✔️

**batch-scan-count**

**batch-scan-size**

**timeout**

When a client is idle for the specified number of seconds, the instance closes the connection. Unit: seconds. Valid values: \[0, 100000\]. Default value: 0 (no connections are closed).

Standard ✔️

Cluster ✔️

txn-isolation-lock

Specifies whether to enable transaction locks. When enabled, disk-based instances can execute MULTI, EXEC, and Lua script-related commands. The transaction lock feature may cause a 10% performance degradation. Valid values:

-   **No** (default): Disables this setting.
    
-   **yes**: You can execute the corresponding commands. The syntax is the same as that of native Redis.
    

Standard ✔️

Cluster ✔️

### **Proxy node parameters**

These parameters are provided by proxy nodes. They are supported only by instances that use the cluster architecture in proxy mode or the read/write splitting architecture.

**Parameter**

**Description**

cluster\_compat\_enable

Specifies whether to enable compatibility with native Redis cluster syntax. Valid values:

-   **0**: Shutdown.
    
-   **1** (default): Enables compatibility. When enabled, READONLY, READWRITE, and CLUSTER class commands are supported. For a list of specific commands, see [List of commands supported in proxy mode](/help/en/redis/developer-reference/limits-on-commands-supported-by-cluster-and-read-write-splitting-instances#76652bd051keb).
    

**hello\_enabled**

The switch to enable switching between RESP2 and RESP3 protocols using the **HELLO** command. Valid values:

-   **0** (default): Disables the switch.
    
-   **1**: Enables the switch. When enabled, you can use the **HELLO** command to switch between the RESP2 and RESP3 protocols.
    

**Note**

This parameter is supported only by Proxy version 7.0.9 and later.

max\_session\_processing

The maximum number of requests that can be stacked for a single connection. Valid values: \[10-10000000\]. Default value: 1000.

When a proxy node forwards a client's request to a data node but does not receive a reply, the request is in a stacked state. This parameter is mainly used to limit request stacking caused by differences in processing capabilities between the proxy node's frontend and backend, avoiding issues with increased memory usage.

-   #no\_loose\_statistics-ip-enable
    
-   #no\_loose\_statistics-cmds
    
-   #no\_loose\_statistics-keys
    

This group of parameters is part of the [observability](/help/en/redis/product-overview/observability) feature. After setting them, you must also enable the [audit log](/help/en/redis/user-guide/enable-the-new-audit-log-feature/) for them to take effect. The statistic period is 5 seconds.

-   #no\_loose\_statistics-ip-enable: Specifies whether to enable IP address statistics, which records the IP addresses of established connections. Valid values are yes (enable) and no (default, disable).
    
-   #no\_loose\_statistics-cmds: Specifies the commands to be tracked. It records the source IP address and frequency of these commands. The default is empty, meaning no commands are tracked. Separate multiple commands with commas (,).
    
-   #no\_loose\_statistics-keys: Specifies the keys to be tracked. It records the source IP address and frequency for these keys. The default is empty, meaning no keys are tracked. Separate multiple keys with commas (,).
    

**Note**

-   Only memory-optimized instances support this group of parameters.
    
-   To avoid affecting performance, do not set too many values for the #no\_loose\_statistics-cmds and #no\_loose\_statistics-keys parameters. Ensure they are enabled only for troubleshooting or O&M purposes.
    
-   You can download audit logs from the Simple Log Service console (for download instructions, see [Download audit logs](/help/en/redis/user-guide/download-audit-logs)), and then filter for the required information using keywords:
    
    -   type value 7: Indicates QPS statistics for IP addresses.
        
    -   type value 8: Indicates connection statistics for IP addresses.
        
    -   type value 9: Indicates key statistics.
        
    -   type value 10: Indicates command statistics.
        

ptod\_enabled

Specifies whether to pass through the client's IP address to the data node. Valid values:

-   **0**: Does not pass through the IP address. The IP addresses accessing the data nodes are all the IP addresses of the proxy nodes.
    
-   **1**: pass-through (default).
    

query\_cache\_enabled

The query cache feature for proxy nodes. When enabled, the proxy node caches requests and query results for hot keys. When the proxy node receives the same request within the validity period, it directly returns the result to the client without interacting with the backend data shards.

**Important**

Because the key-value pair information for hot keys cached in the proxy node is not updated during the validity period, you must confirm whether your business can tolerate eventual consistency for the data during the cache validity period before you enable this feature.

-   query\_cache\_enabled: Specifies whether to enable this feature. Valid values are **0** (disable, default) and **1** (enable).
    
-   query\_cache\_expire: The validity period of the cached data. Unit: milliseconds. Valid values: \[100-60000\]. Default value: 1000.
    
    -   If the cached data is modified during its validity period, the changes are not synchronized to the cache. This means that the same read request will retrieve dirty data from the cache until the cache expires.
        
    -   You must carefully evaluate the value of this parameter based on your specific business scenario and your tolerance for dirty data. A value that is too small reduces the cache hit rate. A value that is too large causes the client to read dirty data for a longer period.
        
-   query\_cache\_mode: The working mode of the proxy node query cache feature. Valid values:
    
    -   **0** (default): Caches only the hot keys pushed by data shards.
        
    -   **1**: Caches all keys and evicts them based on the Least Recently Used (LRU) algorithm.
        
        Because the cache space of a proxy node is limited (100 MB per thread for each proxy node), if you set this parameter to 1, the proxy node evicts keys based on the LRU algorithm. This may reduce the cache hit rate and degrade overall performance.
        

query\_cache\_expire

query\_cache\_mode

readonly\_lua\_route\_ronode\_enable

Enables or disables Lua execution mode for read replicas. Valid values:

-   **0** (default): Disables Lua execution mode. Read replicas do not support Lua. Lua commands are processed by the primary node.
    
-   **1**: Enables Lua execution mode. Only Lua scripts containing read operations are forwarded to read replicas for processing.
    

read\_request\_only\_ronode\_whenrwsplit\_enable

Enables or disables directional forwarding for read-only account requests. Valid values:

-   **0** (default): Disables directional forwarding. Requests from read-only accounts are distributed to all nodes, including the primary node, based on weight.
    
-   **1**: Enables directional forwarding. Requests from read-only accounts are forwarded directly to read replicas and not to the primary node.
    

rt\_threshold\_ms

The slow query log threshold for the proxy node. Unit: milliseconds (ms). Valid values: \[30-2000\]. Default value: 500.

If the time from when a proxy node sends a request to a data node to when the proxy node receives a response exceeds this threshold, a slow query log entry is generated.

script\_check\_enable

Enables or disables the proxy node's check for Lua scripts. For a list of check items, see [Proxy check items for Lua](/help/en/redis/support/usage-of-lua-scripts#p-f5i-8ra-qfv). Valid values:

-   **0**: Does not check. If the instance account executing the Lua script has read-only permissions, the check is still enabled.
    
-   **1** (default): Checks.
    

sentinel\_compat\_enable

Enables or disables Sentinel-compatible mode. Valid values:

-   **0** (default): Disables the mode.
    
-   **1**: Enabled.
    

transfer\_subscrible\_to\_psubscrible\_enable

Enables or disables the feature that converts SUBSCRIBE to PSUBSCRIBE. Valid values:

-   **0** (default): Disables the feature. The two are not converted.
    
-   **1**: Enables the feature. The proxy node converts SUBSCRIBE to PSUBSCRIBE for processing.
    
    **Note**
    
    You can enable this feature if you cannot receive notifications on a subscribed channel because PUB or SUB class commands are used in Lua.

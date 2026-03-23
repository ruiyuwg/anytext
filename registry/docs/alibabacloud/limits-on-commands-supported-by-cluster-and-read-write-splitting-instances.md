Compared to standard architecture instances, Tair (Redis OSS-compatible) instances that use a cluster architecture or a read/write splitting architecture have varying levels of support for Redis commands. For example, some commands are disabled, and commands cannot access keys across different slots. You must understand and follow these rules when you use these instances.

## Command limitations for cluster architecture

Cluster instances are compatible with different Redis versions. For more information about the commands supported by each version, see [Redis Open-Source Edition command support](/help/en/redis/developer-reference/commands-supported-by-apsaradb-for-redis-community-edition#concept-1960075) and [Tair (Enterprise Edition) command support and limitations](/help/en/redis/developer-reference/limits-on-commands-supported-by-apsaradb-for-redis-enhanced-edition).

Cluster architecture supports direct connection mode and proxy mode. The command limitations differ between the two modes:

### **Cluster architecture in direct connection mode**

-   The **SELECT** command is supported. Direct connection mode supports only cluster initialization. However, if your client does not support the **SELECT** command during cluster initialization, you cannot run this command.
    
-   The **SWAPDB** command is supported only on cluster architecture instances that are compatible with Redis 7.0.
    
-   When you run commands that involve multiple keys, ensure that all keys are in the same slot. For example, you can use hash tags.
    
-   When you run transactions on a cluster architecture instance in direct connection mode, the behavior must be consistent with open source Redis Cluster. All keys in a transaction must be in the same slot.
    

### **Cluster architecture in proxy mode**

-   The **SELECT** command is supported. Proxy mode uses a middle layer to hide the details of the cluster architecture, which provides better client compatibility.
    
-   In addition to the limitations of direct connection mode, proxy nodes do not support commands such as **CLIENT INFO** or **CLIENT ID**. However, proxy nodes support cross-slot multi-key operations for commands such as **DEL** and **EXISTS**. For more information, see [List of commands supported in proxy mode](#76652bd051keb).
    
-   The **CLIENT KILL** command currently supports the following formats: `CLIENT KILL <ip:port>` and `CLIENT KILL ADDR <ip:port>`.
    
-   When you run the **CLIENT LIST** command, it lists all connections to the proxy node. The returned result differs from that of the native Redis command. The differences are as follows:
    
    -   The `id`, `age`, `idle`, `addr`, `fd`, `name`, `db`, `multi`, `omem`, and `cmd` fields have the same meanings as in native Redis.
        
    -   The `sub` and `psub` fields are not differentiated on the proxy node. They are both set to 1 or 0.
        
    -   The `qbuf`, `qbuf-free`, `obl`, and `oll` fields currently have no specific meaning.
        
-   Limitations on transactions:
    
    -   If all keys in a transaction are in the same slot, the transaction can run normally and follows transaction semantics.
        
    -   If the keys in a transaction are in different slots, but the keys for each individual command are in the same slot, the transaction can run normally. Transaction semantics are guaranteed for commands whose keys are in the same slot, but not for commands whose keys are in different slots.
        
    -   If the keys for a single command in a transaction are in different slots, the command cannot be executed.
        
    -   Some commands that do not have keys are not supported in transactions. For more information, see the list of commands supported in proxy mode.
        
-   The `SCAN 0` command starts from the first data shard of the cluster and sequentially traverses the data in each shard. It moves to the next shard only after the traversal of the current shard is complete. To scan a specific shard, use the [ISCAN](/help/en/redis/developer-reference/in-house-commands-for-tair-instances-in-proxy-mode#c2f8665517fwh) command.
    
-   For easier daily management and O&M, cluster architecture instances in proxy mode support multiple self-developed commands. For more information, see [Alibaba Cloud self-developed proxy commands](/help/en/redis/developer-reference/in-house-commands-for-tair-instances-in-proxy-mode#concept-2353538).
    

In addition, Redis Cluster has some limitations on using Lua scripts. Tair (Redis OSS-compatible) cluster architecture has additional limitations. For more information, see [Special limitations for cluster architecture](/help/en/redis/support/usage-of-lua-scripts#section-8f7-qgv-dlv).

## Command limitations for read/write splitting instances

Read/write splitting instances are compatible with different Redis versions. For more information about command support for each version, see [Redis Open-Source Edition command support](/help/en/redis/developer-reference/commands-supported-by-apsaradb-for-redis-community-edition#concept-1960075) and [Tair (Enterprise Edition) command support and limitations](/help/en/redis/developer-reference/limits-on-commands-supported-by-apsaradb-for-redis-enhanced-edition).

-   Read/write splitting instances use proxy mode by default. These instances have the same command limitations as proxy nodes. For example, proxy nodes do not support commands such as **CLIENT INFO** or **CLIENT ID**. For more information, see [List of commands supported in proxy mode](#76652bd051keb).
    
-   For easier daily management and O&M, read/write splitting architecture instances support multiple self-developed commands. For more information, see [Alibaba Cloud self-developed proxy commands](/help/en/redis/developer-reference/in-house-commands-for-tair-instances-in-proxy-mode#concept-2353538).
    

## List of commands supported in proxy mode

The following content applies to cluster architecture in proxy mode and read/write splitting architecture. For readability, the tables in this topic use the following conventions:

-   ✔️: The proxy supports the command. If the command supports multiple keys, it can be executed across slots.
    
-   ⭕️: The proxy supports the command, but with limitations. Ensure that all keys in the command are in the same slot. For example, you can use hash tags.
    
-   ❌: The proxy does not support the command.
    
-   Note ①: To ensure compatibility with some client frameworks, the command only returns `OK` or an empty result and is not actually executed.
    
-   Note ②: The request is processed and returned directly by the proxy, regardless of the Redis DB version.
    

### Bitmap

**Command**

**Cluster architecture**

**Allowed in cluster architecture transactions**

**Read/write splitting architecture**

**Allowed in read/write splitting architecture transactions**

BITCOUNT

✔️

✔️

✔️

✔️

BITFIELD

✔️

✔️

✔️

✔️

BITFIELD\_RO

❌

❌

❌

❌

BITOP

⭕️

⭕️

✔️

✔️

BITPOS

✔️

✔️

✔️

✔️

GETBIT

✔️

✔️

✔️

✔️

SETBIT

✔️

✔️

✔️

✔️

### **Cluster management**

**Command**

**Cluster architecture**

**Allowed in cluster architecture transactions**

**Read/write splitting architecture**

**Allowed in read/write splitting architecture transactions**

CLUSTER ADDSLOTS ①②

✔️

❌

✔️

❌

CLUSTER ADDSLOTSRANGE

❌

❌

❌

❌

CLUSTER BUMPEPOCH

❌

❌

❌

❌

CLUSTER COUNT-FAILURE-REPORTS ②

✔️

❌

✔️

❌

CLUSTER COUNTKEYSINSLOT ②

✔️

❌

✔️

❌

CLUSTER DELSLOTS ①②

✔️

❌

✔️

❌

CLUSTER DELSLOTSRANGE

❌

❌

❌

❌

CLUSTER FAILOVER ①②

✔️

❌

✔️

❌

CLUSTER FLUSHSLOTS

❌

❌

❌

❌

CLUSTER FORGET ①②

✔️

❌

✔️

❌

CLUSTER GETKEYSINSLOT ①②

✔️

❌

✔️

❌

CLUSTER INFO ②

✔️

❌

✔️

❌

CLUSTER KEYSLOT ②

✔️

❌

✔️

❌

CLUSTER LINKS

❌

❌

❌

❌

CLUSTER MEET ①②

✔️

❌

✔️

❌

CLUSTER MYID

❌

❌

❌

❌

CLUSTER NODES ②

✔️

❌

✔️

❌

CLUSTER REPLICAS

❌

❌

❌

❌

CLUSTER REPLICATE ①②

✔️

❌

✔️

❌

CLUSTER RESET ①②

✔️

❌

✔️

❌

CLUSTER SAVECONFIG ①②

✔️

❌

✔️

❌

CLUSTER SET-CONFIG-EPOCH ①②

✔️

❌

✔️

❌

CLUSTER SETSLOT ①②

✔️

❌

✔️

❌

CLUSTER SHARDS

❌

❌

❌

❌

CLUSTER SLAVES ②

✔️

❌

✔️

❌

CLUSTER SLOTS ②

✔️

❌

✔️

❌

READONLY ①②

✔️

❌

✔️

❌

READWRITE ①②

✔️

❌

✔️

❌

### **Connection management**

**Command**

**Cluster architecture**

**Allowed in cluster architecture transactions**

**Read/write splitting architecture**

**Allowed in read/write splitting architecture transactions**

AUTH

✔️

❌

✔️

✔️

CLIENT CACHING

❌

❌

❌

❌

CLIENT GETNAME ②

✔️

❌

✔️

❌

CLIENT GETREDIR

❌

❌

❌

❌

CLIENT ID

❌

❌

❌

❌

CLIENT INFO

❌

❌

❌

❌

CLIENT KILL ②

✔️

❌

✔️

❌

CLIENT LIST ②

✔️

❌

✔️

❌

CLIENT NO-EVICT

❌

❌

❌

❌

CLIENT PAUSE

❌

❌

❌

❌

CLIENT REPLY

❌

❌

❌

❌

CLIENT SETNAME ②

✔️

❌

✔️

❌

CLIENT TRACKING

❌

❌

❌

❌

CLIENT TRACKINGINFO

❌

❌

❌

❌

CLIENT UNBLOCK

❌

❌

❌

❌

CLIENT UNPAUSE

❌

❌

❌

❌

ECHO

✔️

❌

✔️

✔️

HELLO

✔️ (with limitations)

✔️ (with limitations)

✔️ (with limitations)

✔️ (with limitations)

PING ②

✔️

❌

✔️

✔️

QUIT ②

✔️

✔️

✔️

✔️

RESET

❌

❌

❌

❌

SELECT

✔️

✔️

✔️

✔️

**Note**

The **HELLO** command is disabled by default. To use this command, you must [upgrade](/help/en/redis/user-guide/update-the-minor-version) the minor version of the proxy to 7.0.9 or later and [enable](/help/en/redis/user-guide/modify-the-values-of-parameters-for-an-instance/) the **hello\_enabled** parameter.

### **Generic**

**Command**

**Cluster architecture**

**Allowed in cluster architecture transactions**

**Read/write splitting architecture**

**Allowed in read/write splitting architecture transactions**

COPY

⭕️

⭕️

✔️

✔️

DEL

✔️

⭕️

✔️

✔️

DUMP

✔️

✔️

✔️

✔️

EXISTS

✔️

⭕️

✔️

✔️

EXPIRE

✔️

✔️

✔️

✔️

EXPIREAT

✔️

✔️

✔️

✔️

EXPIRETIME

✔️

✔️

✔️

✔️

KEYS

✔️

❌

✔️

✔️

MIGRATE

❌

❌

❌

❌

MOVE

✔️

✔️

✔️

✔️

OBJECT

✔️

✔️

✔️

✔️

OBJECT HELP

✔️

✔️

✔️

✔️

PERSIST

✔️

✔️

✔️

✔️

PEXPIRE

✔️

✔️

✔️

✔️

PEXPIREAT

✔️

✔️

✔️

✔️

PEXPIRETIME

✔️

✔️

✔️

✔️

PTTL

✔️

✔️

✔️

✔️

RANDOMKEY

✔️

❌

✔️

✔️

RENAME

⭕️

⭕️

✔️

✔️

RENAMENX

⭕️

⭕️

✔️

✔️

RESTORE

✔️

✔️

✔️

✔️

SCAN

✔️

❌

✔️

✔️

SORT

⭕️

⭕️

✔️

✔️

SORT\_RO

⭕️

⭕️

✔️

✔️

TOUCH

✔️

⭕️

✔️

✔️

TTL

✔️

✔️

✔️

✔️

TYPE

✔️

✔️

✔️

✔️

UNLINK

✔️

⭕️

✔️

✔️

WAIT

✔️

❌

✔️

✔️

### **Geospatial indices**

**Command**

**Cluster architecture**

**Allowed in cluster architecture transactions**

**Read/write splitting architecture**

**Allowed in read/write splitting architecture transactions**

GEOADD

✔️

✔️

✔️

✔️

GEODIST

✔️

✔️

✔️

✔️

GEOHASH

✔️

✔️

✔️

✔️

GEOPOS

✔️

✔️

✔️

✔️

GEORADIUS

⭕️

⭕️

✔️

✔️

GEORADIUSBYMEMBER

⭕️

⭕️

✔️

✔️

GEOSEARCH

✔️

✔️

✔️

✔️

GEOSEARCHSTORE

⭕️

⭕️

✔️

✔️

### **Hash**

**Command**

**Cluster architecture**

**Allowed in cluster architecture transactions**

**Read/write splitting architecture**

**Allowed in read/write splitting architecture transactions**

HDEL

✔️

✔️

✔️

✔️

HEXISTS

✔️

✔️

✔️

✔️

HGET

✔️

✔️

✔️

✔️

HGETALL

✔️

✔️

✔️

✔️

HINCRBY

✔️

✔️

✔️

✔️

HINCRBYFLOAT

✔️

✔️

✔️

✔️

HKEYS

✔️

✔️

✔️

✔️

HLEN

✔️

✔️

✔️

✔️

HMGET

✔️

✔️

✔️

✔️

HMSET

✔️

✔️

✔️

✔️

HRANDFIELD

✔️

✔️

✔️

✔️

HSCAN

✔️

✔️

✔️

✔️

HSET

✔️

✔️

✔️

✔️

HSETNX

✔️

✔️

✔️

✔️

HSTRLEN

✔️

✔️

✔️

✔️

HVALS

✔️

✔️

✔️

✔️

### **HyperLogLog**

**Command**

**Cluster architecture**

**Allowed in cluster architecture transactions**

**Read/write splitting architecture**

**Allowed in read/write splitting architecture transactions**

PFADD

✔️

✔️

✔️

✔️

PFCOUNT

⭕️

⭕️

✔️

✔️

PFMERGE

⭕️

⭕️

✔️

✔️

### **Lists**

**Command**

**Cluster architecture**

**Allowed in cluster architecture transactions**

**Read/write splitting architecture**

**Allowed in read/write splitting architecture transactions**

BLPOP

⭕️

⭕️

✔️

✔️

BLMOVE

⭕️

⭕️

✔️

✔️

BLMPOP

⭕️

⭕️

✔️

✔️

BRPOP

⭕️

⭕️

✔️

✔️

BRPOPLPUSH

⭕️

⭕️

✔️

✔️

LINDEX

✔️

✔️

✔️

✔️

LINSERT

✔️

✔️

✔️

✔️

LLEN

✔️

✔️

✔️

✔️

LMOVE

⭕️

⭕️

✔️

✔️

LMPOP

⭕️

⭕️

✔️

✔️

LPOP

✔️

✔️

✔️

✔️

LPUSH

✔️

✔️

✔️

✔️

LPUSHX

✔️

✔️

✔️

✔️

LRANGE

✔️

✔️

✔️

✔️

LREM

✔️

✔️

✔️

✔️

LSET

✔️

✔️

✔️

✔️

LTRIM

✔️

✔️

✔️

✔️

RPOP

✔️

✔️

✔️

✔️

RPOPLPUSH

⭕️

⭕️

✔️

✔️

RPUSH

✔️

✔️

✔️

✔️

RPUSHX

✔️

✔️

✔️

✔️

### **Pub/Sub**

**Command**

**Cluster architecture**

**Allowed in cluster architecture transactions**

**Read/write splitting architecture**

**Allowed in read/write splitting architecture transactions**

PSUBSCRIBE

✔️

❌

✔️

❌

PUBLISH

✔️

✔️

✔️

✔️

PUBSUB

✔️

❌

✔️

✔️

PUBSUB HELP

❌

❌

❌

❌

PUBSUB SHARDCHANNELS

✔️

❌

✔️

✔️

PUBSUB SHARDNUMSUB

✔️

❌

✔️

✔️

PUNSUBSCRIBE

✔️

❌

✔️

❌

SPUBLISH

✔️

✔️

✔️

✔️

SUBSCRIBE

✔️

❌

✔️

❌

SSUBSCRIBE

✔️

❌

✔️

❌

SUNSUBSCRIBE

✔️

❌

✔️

❌

UNSUBSCRIBE

✔️

❌

✔️

❌

### **Scripting and Functions**

**Command**

**Cluster architecture**

**Allowed in cluster architecture transactions**

**Read/write splitting architecture**

**Allowed in read/write splitting architecture transactions**

EVAL

⭕️

❌

✔️

✔️

EVAL\_RO

⭕️

❌

✔️

✔️

EVALSHA

⭕️

❌

✔️

✔️

EVALSHA\_RO

⭕️

❌

✔️

✔️

FCALL

⭕️

❌

✔️

✔️

FCALL\_RO

⭕️

❌

✔️

✔️

FUNCTION DELETE

✔️

❌

✔️

❌

FUNCTION DUMP

✔️

❌

✔️

❌

FUNCTION FLUSH

✔️

❌

✔️

❌

FUNCTION HELP

✔️

❌

✔️

❌

FUNCTION KILL

✔️

❌

✔️

❌

FUNCTION LIST

✔️

❌

✔️

❌

FUNCTION LOAD

✔️

❌

✔️

❌

FUNCTION RESTORE

✔️

❌

✔️

❌

FUNCTION STATS

✔️

❌

✔️

❌

SCRIPT DEBUG

❌

❌

❌

❌

SCRIPT EXISTS

✔️

❌

✔️

❌

SCRIPT FLUSH

✔️

❌

✔️

❌

SCRIPT KILL

✔️

❌

✔️

❌

SCRIPT LOAD

✔️

❌

✔️

❌

### **Server management**

**Command**

**Cluster architecture**

**Allowed in cluster architecture transactions**

**Read/write splitting architecture**

**Allowed in read/write splitting architecture transactions**

ACL CAT

❌

❌

❌

❌

ACL DELUSER

❌

❌

❌

❌

ACL DRYRUN

❌

❌

❌

➖

ACL GENPASS

❌

❌

❌

❌

ACL GETUSER

❌

❌

❌

❌

ACL HELP

❌

❌

❌

❌

ACL LIST

❌

❌

❌

❌

ACL LOAD

❌

❌

❌

❌

ACL LOG

❌

❌

❌

❌

ACL SAVE

❌

❌

❌

❌

ACL SETUSER

❌

❌

❌

❌

ACL USERS

❌

❌

❌

❌

ACL WHOAMI

❌

❌

❌

❌

BGREWRITEAOF

❌

❌

❌

❌

BGSAVE

❌

❌

❌

❌

COMMAND

✔️

❌

✔️

✔️

COMMAND COUNT

✔️

❌

✔️

✔️

COMMAND DOCS

✔️

❌

✔️

✔️

COMMAND GETKEYS

✔️

❌

✔️

✔️

COMMAND GETKEYSANDFLAGS

✔️

❌

✔️

✔️

COMMAND INFO

✔️

❌

✔️

✔️

COMMAND LIST

✔️

❌

✔️

✔️

CONFIG GET

✔️

❌

✔️

✔️

CONFIG HELP

❌

❌

❌

❌

CONFIG RESETSTAT

❌

❌

❌

❌

CONFIG REWRITE

❌

❌

❌

❌

CONFIG SET ①②

✔️

❌

✔️

✔️

DBSIZE

✔️

❌

✔️

✔️

DEBUG OBJECT

❌

❌

❌

❌

DEBUG SEGFAULT

❌

❌

❌

❌

FAILOVER

❌

❌

❌

❌

FLUSHALL

✔️

❌

✔️

✔️

FLUSHDB

✔️

❌

✔️

✔️

INFO

✔️

❌

✔️

✔️

LASTSAVE

❌

❌

❌

❌

LATENCY DOCTOR

❌

❌

❌

❌

LATENCY GRAPH

❌

❌

❌

❌

LATENCY HELP

❌

❌

❌

❌

LATENCY HISTOGRAM

❌

❌

❌

❌

LATENCY HISTORY

❌

❌

❌

❌

LATENCY LATEST

❌

❌

❌

❌

LATENCY RESET

❌

❌

❌

❌

LOLWUT

✔️

❌

✔️

✔️

MEMORY DOCTOR

✔️

❌

✔️

❌

MEMORY HELP

✔️

❌

✔️

❌

MEMORY MALLOC-STATS

✔️

❌

✔️

❌

MEMORY PURGE

✔️

❌

✔️

❌

MEMORY STATS

✔️

❌

✔️

❌

MEMORY USAGE

✔️

❌

✔️

❌

MODULE LIST

❌

❌

❌

❌

MODULE LOAD

❌

❌

❌

❌

MODULE LOADEX

❌

❌

❌

❌

MODULE UNLOAD

❌

❌

❌

❌

MONITOR

✔️

❌

✔️

❌

PSYNC

❌

❌

❌

❌

REPLICAOF

❌

❌

❌

❌

ROLE ②

✔️

❌

✔️

❌

SAVE

❌

❌

❌

❌

SHUTDOWN

❌

❌

❌

❌

SLAVEOF

❌

❌

❌

❌

SLOWLOG

✔️

❌

✔️

✔️

SLOWLOG HELP

✔️

❌

✔️

✔️

SLOWLOG RESET

✔️

❌

✔️

✔️

SWAPDB

✔️

❌

✔️

✔️

SYNC

❌

❌

❌

❌

TIME

✔️

❌

✔️

✔️

### **Sentinel**

**Command**

**Cluster architecture**

**Allowed in cluster architecture transactions**

**Read/write splitting architecture**

**Allowed in read/write splitting architecture transactions**

SENTINEL sentinels ②

✔️

❌

✔️

❌

SENTINEL get-master-addr-by-name ②

✔️

❌

✔️

❌

### **Set**

**Command**

**Cluster architecture**

**Allowed in cluster architecture transactions**

**Read/write splitting architecture**

**Allowed in read/write splitting architecture transactions**

SADD

✔️

✔️

✔️

✔️

SCARD

✔️

✔️

✔️

✔️

SDIFF

✔️

⭕️

✔️

✔️

SDIFFSTORE

✔️

⭕️

✔️

✔️

SINTER

✔️

⭕️

✔️

✔️

SINTERCARD

✔️

⭕️

✔️

✔️

SINTERSTORE

✔️

⭕️

✔️

✔️

SISMEMBER

✔️

✔️

✔️

✔️

SMEMBERS

✔️

✔️

✔️

✔️

SMISMEMBER

✔️

✔️

✔️

✔️

SMOVE

✔️

⭕️

✔️

✔️

SPOP

✔️

✔️

✔️

✔️

SRANDMEMBER

✔️

✔️

✔️

✔️

SREM

✔️

✔️

✔️

✔️

SSCAN

✔️

✔️

✔️

✔️

SUNION

✔️

⭕️

✔️

✔️

SUNIONSTORE

✔️

⭕️

✔️

✔️

### **Sorted Set**

**Command**

**Cluster architecture**

**Allowed in cluster architecture transactions**

**Read/write splitting architecture**

**Allowed in read/write splitting architecture transactions**

BZMPOP

⭕️

⭕️

✔️

✔️

BZPOPMAX

⭕️

⭕️

✔️

✔️

BZPOPMIN

⭕️

⭕️

✔️

✔️

ZADD

✔️

✔️

✔️

✔️

ZCARD

✔️

✔️

✔️

✔️

ZCOUNT

✔️

✔️

✔️

✔️

ZDIFF

✔️

⭕️

✔️

✔️

ZDIFFSTORE

✔️

⭕️

✔️

✔️

ZINCRBY

✔️

✔️

✔️

✔️

ZINTER

✔️

✔️

✔️

✔️

ZINTERCARD

✔️

⭕️

✔️

✔️

ZINTERSTORE

✔️

⭕️

✔️

✔️

ZLEXCOUNT

✔️

✔️

✔️

✔️

ZMPOP

⭕️

⭕️

✔️

✔️

ZMSCORE

✔️

✔️

✔️

✔️

ZPOPMAX

✔️

✔️

✔️

✔️

ZPOPMIN

✔️

✔️

✔️

✔️

ZRANDMEMBER

✔️

✔️

✔️

✔️

ZRANGE

✔️

✔️

✔️

✔️

ZRANGEBYLEX

✔️

✔️

✔️

✔️

ZRANGEBYSCORE

✔️

✔️

✔️

✔️

ZRANGESTORE

⭕️

⭕️

✔️

✔️

ZRANK

✔️

✔️

✔️

✔️

ZREM

✔️

✔️

✔️

✔️

ZREMRANGEBYLEX

✔️

✔️

✔️

✔️

ZREMRANGEBYRANK

✔️

✔️

✔️

✔️

ZREMRANGEBYSCORE

✔️

✔️

✔️

✔️

ZREVRANGE

✔️

✔️

✔️

✔️

ZREVRANGEBYLEX

✔️

✔️

✔️

✔️

ZREVRANGEBYSCORE

✔️

✔️

✔️

✔️

ZREVRANK

✔️

✔️

✔️

✔️

ZSCAN

✔️

✔️

✔️

✔️

ZSCORE

✔️

✔️

✔️

✔️

ZUNION

✔️

⭕️

✔️

✔️

ZUNIONSTORE

✔️

⭕️

✔️

✔️

### **Stream**

**Command**

**Cluster architecture**

**Allowed in cluster architecture transactions**

**Read/write splitting architecture**

**Allowed in read/write splitting architecture transactions**

XACK

✔️

✔️

✔️

✔️

XADD

✔️

✔️

✔️

✔️

XAUTOCLAIM

✔️

✔️

✔️

✔️

XCLAIM

✔️

✔️

✔️

✔️

XDEL

✔️

✔️

✔️

✔️

XGROUP

✔️

✔️

✔️

✔️

XGROUP CREATECONSUMER

✔️

✔️

✔️

✔️

XINFO

✔️

✔️

✔️

✔️

XLEN

✔️

✔️

✔️

✔️

XPENDING

✔️

✔️

✔️

✔️

XRANGE

✔️

✔️

✔️

✔️

XREAD

⭕️

⭕️

✔️

✔️

XREADGROUP

⭕️

⭕️

✔️

✔️

XREVRANGE

✔️

✔️

✔️

✔️

XTRIM

✔️

✔️

✔️

✔️

### **String**

**Command**

**Cluster architecture**

**Allowed in cluster architecture transactions**

**Read/write splitting architecture**

**Allowed in read/write splitting architecture transactions**

APPEND

✔️

✔️

✔️

✔️

DECR

✔️

✔️

✔️

✔️

DECRBY

✔️

✔️

✔️

✔️

GET

✔️

✔️

✔️

✔️

GETDEL

✔️

✔️

✔️

✔️

GETEX

✔️

✔️

✔️

✔️

GETRANGE

✔️

✔️

✔️

✔️

GETSET

✔️

✔️

✔️

✔️

LCS

✔️

⭕️

✔️

✔️

INCR

✔️

✔️

✔️

✔️

INCRBY

✔️

✔️

✔️

✔️

INCRBYFLOAT

✔️

✔️

✔️

✔️

MGET

✔️

⭕️

✔️

✔️

MSET

✔️

⭕️

✔️

✔️

MSETNX

⭕️

⭕️

✔️

✔️

PSETEX

✔️

✔️

✔️

✔️

SET

✔️

✔️

✔️

✔️

SETEX

✔️

✔️

✔️

✔️

SETNX

✔️

✔️

✔️

✔️

SETRANGE

✔️

✔️

✔️

✔️

STRALGO

❌

❌

❌

❌

STRLEN

✔️

✔️

✔️

✔️

### **Transactions**

**Command**

**Cluster architecture**

**Allowed in cluster architecture transactions**

**Read/write splitting architecture**

**Allowed in read/write splitting architecture transactions**

DISCARD

✔️

✔️

✔️

✔️

EXEC

✔️

✔️

✔️

✔️

MULTI

✔️

❌

✔️

❌

UNWATCH

✔️

❌

✔️

✔️

WATCH

⭕️

❌

✔️

❌

## **FAQ**

-   Q: Do cluster architecture and read/write splitting architecture instances in proxy mode support the **WAIT** command?
    
    A: Yes, the WAIT command is supported in proxy versions 7.1.5 and later. If you are using an earlier version, you can [upgrade the proxy version](/help/en/redis/user-guide/update-the-minor-version).

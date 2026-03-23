Redis Open-Source Edition supports multiple engine versions and architectures, and the supported Redis commands vary accordingly. This topic describes the supported commands and their limitations compared to native Redis commands to help you select an appropriate instance.

## Supported commands

Tair (Redis OSS-compatible) is compatible with multiple native Redis versions:

-   Tair (Enterprise Edition) [DRAM-based instances](/help/en/redis/product-overview/dram-based-instances#concept-1254543) (Redis 7.0-compatible): Fully compatible with Redis 7.0 and earlier, and supports Tair's extended data structures.
    
-   Tair (Enterprise Edition) [DRAM-based instances](/help/en/redis/product-overview/dram-based-instances#concept-1254543) (Redis 6.0-compatible): Fully compatible with Redis 6.2 and earlier, and supports Tair's extended data structures.
    
-   Tair (Enterprise Edition) [DRAM-based instances](/help/en/redis/product-overview/dram-based-instances#concept-1254543) (Redis 5.0-compatible): Fully compatible with Redis 5.0 and earlier, and supports Tair's extended data structures.
    
-   Tair (Enterprise Edition) [persistent memory-optimized instances](/help/en/redis/product-overview/persistent-memory-optimized-instances-1#concept-1952913): Compatible with Redis 6.0 and earlier. Some commands are limited. For more information, see [Limits on commands supported by Tair (Enterprise Edition)](/help/en/redis/developer-reference/limits-on-commands-supported-by-apsaradb-for-redis-enhanced-edition).
    
-   Tair (Enterprise Edition) [ESSD/SSD-based instances](/help/en/redis/product-overview/essd-based-instances-1#concept-1952915): Compatible with Redis 6.0 and earlier. Some commands are limited. For more information, see [Limits on commands supported by Tair (Enterprise Edition)](/help/en/redis/developer-reference/limits-on-commands-supported-by-apsaradb-for-redis-enhanced-edition).
    
-   Redis Open-Source Edition instances: Redis 7.0, 6.0, and 5.0. These instances are backward-compatible.
    

The following symbols are used in the tables in this topic:

-   ✔️: The command is supported.
    
-   ❌: The command is not supported.
    
-   ➖: The command is not yet available in the corresponding native Redis version. For example, the TOUCH command is supported only in Redis 3.2.1 and later. Therefore, this command is marked with ➖ for version 2.8.
    
-   ①: To run this command on a cluster instance, you must enable the direct connection mode and use an endpoint in direct connection mode. For more information, see [Connect to an instance in direct connection mode](/help/en/redis/user-guide/use-a-private-endpoint-to-connect-to-an-apsaradb-for-redis-instance). The command is also compatible when you connect to the instance using a proxy node endpoint.
    
-   ②: To ensure compatibility with some client frameworks, the CONFIG SET command returns only `OK` and does not modify any parameters.
    
-   This topic describes the commands supported by the latest minor engine versions. Some commands are supported only in specific minor versions or later. For more information, see [Release notes for minor versions of Redis Open-Source Edition](/help/en/redis/support/apsaradb-for-redis-community-edition) and [Release notes for minor versions of proxy nodes](/help/en/redis/support/apsaradb-for-redis-proxy-nodes).
    

**Note**

Unless otherwise specified, all commands are supported by standard, cluster, and read/write splitting instances. However, limitations apply to specific commands on cluster and read/write splitting instances. For more information, see [Limits on commands for cluster and read/write splitting instances](/help/en/redis/developer-reference/limits-on-commands-supported-by-cluster-and-read-write-splitting-instances#title-ud8-ufk-b8s).

### **Bitmap**

**Command**

**Version 2.8**

**Version 4.0**

**Version 5.0**

**Version 6.0**

**Version 7.0**

BITCOUNT

✔️

✔️

✔️

✔️

✔️

BITFIELD

✔️

✔️

✔️

✔️

✔️

BITFIELD\_RO

➖

➖

➖

✔️

✔️

BITOP

✔️

✔️

✔️

✔️

✔️

BITPOS

✔️

✔️

✔️

✔️

✔️

GETBIT

✔️

✔️

✔️

✔️

✔️

SETBIT

✔️

✔️

✔️

✔️

✔️

### **Cluster management**

-   Commands in the Cluster group are not applicable to instances that use the standard architecture.
    
-   For compatibility purposes, some commands in the Cluster group are supported when you connect to an instance using a proxy node. These commands are CLUSTER INFO, CLUSTER KEYSLOT, CLUSTER NODES, CLUSTER SLAVES, and CLUSTER SLOTS.
    
-   The READONLY and READWRITE commands are supported in Redis Open-Source Edition 5.0 starting from minor version 5.1.3 and in Redis Open-Source Edition 6.0 starting from minor version 0.1.14. Earlier versions do not support these commands.
    

**Command**

**Version 2.8**

**Version 4.0**

**Version 5.0**

**Version 6.0**

**Version 7.0**

CLUSTER ADDSLOTS

➖

❌

❌

❌

❌

CLUSTER ADDSLOTSRANGE

➖

➖

➖

➖

❌

CLUSTER BUMPEPOCH

➖

❌

❌

❌

❌

CLUSTER COUNT-FAILURE-REPORTS

➖

❌

❌

❌

❌

CLUSTER COUNTKEYSINSLOT ①

➖

❌

❌

❌

❌

CLUSTER DELSLOTS

➖

❌

❌

❌

❌

CLUSTER DELSLOTSRANGE

➖

➖

➖

➖

❌

CLUSTER FAILOVER

➖

❌

❌

❌

❌

CLUSTER FLUSHSLOTS

➖

❌

❌

❌

❌

CLUSTER FORGET

➖

❌

❌

❌

❌

CLUSTER GETKEYSINSLOT

➖️

❌

❌

❌

❌

CLUSTER INFO ①

✔️

✔️

✔️

✔️

✔️

CLUSTER KEYSLOT ①

✔️

✔️

✔️

✔️

✔️

CLUSTER LINKS

➖️

➖️

➖️

➖️

❌

CLUSTER MEET

➖

❌

❌

❌

❌

CLUSTER MYID

➖

❌

❌

❌

❌

CLUSTER NODES ①

✔️

✔️

✔️

✔️

✔️

CLUSTER REPLICAS

➖

➖

❌

❌

❌

CLUSTER REPLICATE

➖

❌

❌

❌

❌

CLUSTER RESET

➖

❌

❌

❌

❌

CLUSTER SAVECONFIG

➖

❌

❌

❌

❌

CLUSTER SET-CONFIG-EPOCH

➖

❌

❌

❌

❌

CLUSTER SETSLOT

➖

❌

❌

❌

❌

CLUSTER SHARDS

➖

➖

➖

➖

✔️

CLUSTER SLAVES

➖

❌

❌

❌

❌

CLUSTER SLOTS

✔️

✔️

✔️

✔️

✔️

READONLY

➖

❌

✔️️

✔️

✔️

READWRITE

➖

❌

✔️

✔️

✔️

### **Connection management**

**Command**

**Version 2.8**

**Version 4.0**

**Version 5.0**

**Version 6.0**

**Version 7.0**

AUTH

✔️

✔️

✔️

✔️

✔️

CLIENT CACHING

➖

➖

➖

✔️

✔️

CLIENT GETNAME

✔️

✔️

✔️

✔️

✔️

CLIENT GETREDIR

➖

➖

➖

✔️

✔️

CLIENT ID

➖

➖

✔️

✔️

✔️

CLIENT INFO

➖

➖

➖

➖

✔️

CLIENT KILL

✔️

✔️

✔️

✔️

✔️

CLIENT LIST

✔️

✔️

✔️

✔️

✔️

CLIENT NO-EVICT

➖

➖

➖

➖

✔️

CLIENT PAUSE

➖

❌

❌

❌

❌

CLIENT REPLY

➖

❌

❌

❌

❌

CLIENT SETNAME

✔️

✔️

✔️

✔️

✔️

CLIENT TRACKING

➖

➖

➖

✔️

✔️

CLIENT TRACKINGINFO

➖

➖

➖

➖

✔️

CLIENT UNBLOCK

➖

➖

✔️

✔️

✔️

CLIENT UNPAUSE

➖

➖

➖

➖

❌

ECHO

✔️

✔️

✔️

✔️

✔️

HELLO

➖

➖

➖

✔️

✔️

PING

✔️

✔️

✔️

✔️

✔️

QUIT

✔️

✔️

✔️

✔️

✔️

RESET

➖

➖

➖

➖

✔️

SELECT

✔️

✔️

✔️

✔️

✔️

### **Generic**

**Command**

**Version 2.8**

**Version 4.0**

**Version 5.0**

**Version 6.0**

**Version 7.0**

COPY

➖

➖

➖

➖

✔️

DEL

✔️

✔️

✔️

✔️

✔️

DUMP

✔️

✔️

✔️

✔️

✔️

EXISTS

✔️

✔️

✔️

✔️

✔️

EXPIRE

✔️

✔️

✔️

✔️

✔️

EXPIREAT

✔️

✔️

✔️

✔️

✔️

EXPIRETIME

➖

➖

➖

➖

✔️

KEYS

✔️

✔️

✔️

✔️

✔️

MIGRATE

❌

❌

❌

❌

❌

MOVE

✔️

✔️

✔️

✔️

✔️

OBJECT

✔️

✔️

✔️

✔️

✔️

OBJECT HELP

➖

➖

➖

➖

✔️

PERSIST

✔️

✔️

✔️

✔️

✔️

PEXPIRE

✔️

✔️

✔️

✔️

✔️

PEXPIREAT

✔️

✔️

✔️

✔️

✔️

PEXPIRETIME

➖

➖

➖

➖

✔️

PTTL

✔️

✔️

✔️

✔️

✔️

RANDOMKEY

✔️

✔️

✔️

✔️

✔️

RENAME

✔️

✔️

✔️

✔️

✔️

RENAMENX

✔️

✔️

✔️

✔️

✔️

RESTORE

✔️

✔️

✔️

✔️

✔️

SCAN

✔️

✔️

✔️

✔️

✔️

SORT

✔️

✔️

✔️

✔️

✔️

SORT\_RO

➖

➖

➖

➖

✔️

TOUCH

➖

✔️

✔️

✔️

✔️

TTL

✔️

✔️

✔️

✔️

✔️

TYPE

✔️

✔️

✔️

✔️

✔️

UNLINK

➖

✔️

✔️

✔️

✔️

WAIT

➖

✔️

✔️

✔️

✔️

### **Geospatial indices**

**Command**

**Version 2.8**

**Version 4.0**

**Version 5.0**

**Version 6.0**

**Version 7.0**

GEOADD

✔️

✔️

✔️

✔️

✔️

GEODIST

✔️

✔️

✔️

✔️

✔️

GEOHASH

✔️

✔️

✔️

✔️

✔️

GEOPOS

✔️

✔️

✔️

✔️

✔️

GEORADIUS

✔️

✔️

✔️

✔️

✔️

GEORADIUSBYMEMBER

✔️

✔️

✔️

✔️

✔️

GEOSEARCH

➖

➖

➖

➖

✔️

GEOSEARCHSTORE

➖

➖

➖

➖

✔️

### **Hash**

**Command**

**Version 2.8**

**Version 4.0**

**Version 5.0**

**Version 6.0**

**Version 7.0**

HDEL

✔️

✔️

✔️

✔️

✔️

HEXISTS

✔️

✔️

✔️

✔️

✔️

HGET

✔️

✔️

✔️

✔️

✔️

HGETALL

✔️

✔️

✔️

✔️

✔️

HINCRBY

✔️

✔️

✔️

✔️

✔️

HINCRBYFLOAT

✔️

✔️

✔️

✔️

✔️

HKEYS

✔️

✔️

✔️

✔️

✔️

HLEN

✔️

✔️

✔️

✔️

✔️

HMGET

✔️

✔️

✔️

✔️

✔️

HMSET

✔️

✔️

✔️

✔️

✔️

HRANDFIELD

➖

➖

➖

➖

✔️

HSCAN

✔️

✔️

✔️

✔️

✔️

HSET

✔️

✔️

✔️

✔️

✔️

HSETNX

✔️

✔️

✔️

✔️

✔️

HSTRLEN

✔️

✔️

✔️

✔️

✔️

HVALS

✔️

✔️

✔️

✔️

✔️

### **HyperLogLog**

**Command**

**Version 2.8**

**Version 4.0**

**Version 5.0**

**Version 6.0**

**Version 7.0**

PFADD

✔️

✔️

✔️

✔️

✔️

PFCOUNT

✔️

✔️

✔️

✔️

✔️

PFMERGE

✔️

✔️

✔️

✔️

✔️

### **Lists**

**Command**

**Version 2.8**

**Version 4.0**

**Version 5.0**

**Version 6.0**

**Version 7.0**

BLPOP

✔️

✔️

✔️

✔️

✔️

BLMOVE

➖

➖

➖

➖

✔️

BLMPOP

➖

➖

➖

➖

✔️

BRPOP

✔️

✔️

✔️

✔️

✔️

BRPOPLPUSH

✔️

✔️

✔️

✔️

✔️

LINDEX

✔️

✔️

✔️

✔️

✔️

LINSERT

✔️

✔️

✔️

✔️

✔️

LLEN

✔️

✔️

✔️

✔️

✔️

LMOVE

➖

➖

➖

➖

✔️

LMPOP

➖

➖

➖

➖

✔️

LPOP

✔️

✔️

✔️

✔️

✔️

LPOS

➖

➖

➖

✔️

✔️

LPUSH

✔️

✔️

✔️

✔️

✔️

LPUSHX

✔️

✔️

✔️

✔️

✔️

LRANGE

✔️

✔️

✔️

✔️

✔️

LREM

✔️

✔️

✔️

✔️

✔️

LSET

✔️

✔️

✔️

✔️

✔️

LTRIM

✔️

✔️

✔️

✔️

✔️

RPOP

✔️

✔️

✔️

✔️

✔️

RPOPLPUSH

✔️

✔️

✔️

✔️

✔️

RPUSH

✔️

✔️

✔️

✔️

✔️

RPUSHX

✔️

✔️

✔️

✔️

✔️

### **Pub/Sub**

**Command**

**Version 2.8**

**Version 4.0**

**Version 5.0**

**Version 6.0**

**Version 7.0**

PSUBSCRIBE

✔️

✔️

✔️

✔️

✔️

PUBLISH

✔️

✔️

✔️

✔️

✔️

PUBSUB

✔️

✔️

✔️

✔️

✔️

PUBSUB HELP

➖

➖

➖

➖

✔️

PUBSUB SHARDCHANNELS

➖

➖

➖

➖

✔️

PUBSUB SHARDNUMSUB

➖

➖

➖

➖

✔️

PUNSUBSCRIBE

✔️

✔️

✔️

✔️

✔️

SPUBLISH

➖

➖

➖

➖

✔️

SUBSCRIBE

✔️

✔️

✔️

✔️

✔️

SSUBSCRIBE

➖

➖

➖

➖

✔️

SUNSUBSCRIBE

➖

➖

➖

➖

✔️

UNSUBSCRIBE

✔️

✔️

✔️

✔️

✔️

### **Scripting and Functions**

**Command**

**Version 2.8**

**Version 4.0**

**Version 5.0**

**Version 6.0**

**Version 7.0**

EVAL

✔️

✔️

✔️

✔️

✔️

EVAL\_RO

➖

➖

➖

➖

✔️

EVALSHA

✔️

✔️

✔️

✔️

✔️

EVALSHA\_RO

➖

➖

➖

➖

✔️

FCALL

➖

➖

➖

➖

✔️

FCALL\_RO

➖

➖

➖

➖

✔️

FUNCTION DELETE

➖

➖

➖

➖

✔️

FUNCTION DUMP

➖

➖

➖

➖

✔️

FUNCTION FLUSH

➖

➖

➖

➖

✔️

FUNCTION HELP

➖

➖

➖

➖

✔️

FUNCTION KILL

➖

➖

➖

➖

✔️

FUNCTION LIST

➖

➖

➖

➖

✔️

FUNCTION LOAD

➖

➖

➖

➖

✔️

FUNCTION RESTORE

➖

➖

➖

➖

✔️

FUNCTION STATS

➖

➖

➖

➖

✔️

SCRIPT DEBUG

➖

❌

❌

❌

❌

SCRIPT EXISTS

✔️

✔️

✔️

✔️

✔️

SCRIPT FLUSH

✔️

✔️

✔️

✔️

✔️

SCRIPT KILL

✔️

✔️

✔️

✔️

✔️

SCRIPT LOAD

✔️

✔️

✔️

✔️

✔️

### **Server management**

**Command**

**Version 2.8**

**Version 4.0**

**Version 5.0**

**Version 6.0**

**Version 7.0**

ACL CAT

➖

➖

➖

❌

❌

ACL DELUSER

➖

➖

➖

❌

❌

ACL DRYRUN

➖

➖

➖

➖

❌

ACL GENPASS

➖

➖

➖

❌

❌

ACL GETUSER

➖

➖

➖

❌

❌

ACL HELP

➖

➖

➖

❌

❌

ACL LIST

➖

➖

➖

❌

❌

ACL LOAD

➖

➖

➖

❌

❌

ACL LOG

➖

➖

➖

❌

❌

ACL SAVE

➖

➖

➖

❌

❌

ACL SETUSER

➖

➖

➖

❌

❌

ACL USERS

➖

➖

➖

❌

❌

ACL WHOAMI

➖

➖

➖

❌

✔️

BGREWRITEAOF

❌

❌

❌

❌

❌

BGSAVE

❌

❌

❌

❌

❌

COMMAND

✔️

✔️

✔️

✔️

✔️

COMMAND COUNT

✔️

✔️

✔️

✔️

✔️

COMMAND DOCS

➖

➖

➖

➖

✔️

COMMAND GETKEYS

✔️

✔️

✔️

✔️

✔️

COMMAND GETKEYSANDFLAGS

➖

➖

➖

➖

✔️

COMMAND INFO

✔️

✔️

✔️

✔️

✔️

COMMAND LIST

➖

➖

➖

➖

✔️

CONFIG GET

✔️

✔️

✔️

✔️

✔️

CONFIG HELP

➖

➖

✔️

✔️

✔️

CONFIG RESETSTAT

✔️

✔️

✔️

✔️

✔️

CONFIG REWRITE

❌

❌

❌

❌

❌

CONFIG SET ②

✔️

✔️

✔️

✔️

✔️

DBSIZE

✔️

✔️

✔️

✔️

✔️

DEBUG OBJECT

❌

❌

❌

❌

❌

DEBUG SEGFAULT

❌

❌

❌

❌

❌

FAILOVER

➖

➖

➖

➖

❌

FLUSHALL

✔️

✔️

✔️

✔️

✔️

FLUSHDB

✔️

✔️

✔️

✔️

✔️

INFO

✔️

✔️

✔️

✔️

✔️

LASTSAVE

❌

❌

❌

❌

❌

LATENCY DOCTOR

✔️

✔️

✔️

✔️

✔️

LATENCY GRAPH

✔️

✔️

✔️

✔️

✔️

LATENCY HELP

❌

❌

✔️

✔️

✔️

LATENCY HISTOGRAM

➖

➖

➖

➖

✔️

LATENCY HISTORY

✔️

✔️

✔️

✔️

✔️

LATENCY LATEST

✔️

✔️

✔️

✔️

✔️

LATENCY RESET

✔️

✔️

✔️

✔️

➖

LOLWUT

➖

➖

✔️

✔️

✔️

MEMORY DOCTOR

➖

✔️

✔️

✔️

✔️

MEMORY HELP

➖

✔️

✔️

✔️

✔️

MEMORY MALLOC-STATS

➖

✔️

✔️

✔️

✔️

MEMORY PURGE

➖

✔️

✔️

✔️

✔️

MEMORY STATS

➖

✔️

✔️

✔️

✔️

MEMORY USAGE

➖

✔️

✔️

✔️

✔️

MODULE LIST

➖

❌

❌

❌

❌

MODULE LOAD

➖

❌

❌

❌

❌

MODULE LOADEX

➖

➖

➖

➖

❌

MODULE UNLOAD

➖

❌

❌

❌

❌

MONITOR

✔️

✔️

✔️

✔️

✔️

PSYNC

❌

❌

❌

❌

❌

REPLICAOF

➖

➖

❌

❌

❌

ROLE

❌

✔️

✔️

✔️

✔️

SAVE

❌

❌

❌

❌

❌

SHUTDOWN

❌

❌

❌

❌

❌

SLAVEOF

❌

❌

❌

❌

❌

SLOWLOG

✔️

✔️

✔️

✔️

✔️

SLOWLOG HELP

➖

➖

➖

➖

✔️

SLOWLOG RESET

❌

❌

❌

❌

❌

SWAPDB

➖

✔️

✔️

✔️

✔️

SYNC

❌

❌

❌

❌

❌

TIME

✔️

✔️

✔️

✔️

✔️

### **Sentinel**

**Command**

**Version 2.8**

**Version 4.0**

**Version 5.0**

**Version 6.0**

**Version 7.0**

SENTINEL sentinels

❌

✔️

✔️

✔️

✔️

SENTINEL get-master-addr-by-name

❌

✔️

✔️

✔️

✔️

### **Set**

**Command**

**Version 2.8**

**Version 4.0**

**Version 5.0**

**Version 6.0**

**Version 7.0**

SADD

✔️

✔️

✔️

✔️

✔️

SCARD

✔️

✔️

✔️

✔️

✔️

SDIFF

✔️

✔️

✔️

✔️

✔️

SDIFFSTORE

✔️

✔️

✔️

✔️

✔️

SINTER

✔️

✔️

✔️

✔️

✔️

SINTERCARD

➖

➖

➖

➖

✔️

SINTERSTORE

✔️

✔️

✔️

✔️

✔️

SISMEMBER

✔️

✔️

✔️

✔️

✔️

SMEMBERS

✔️

✔️

✔️

✔️

✔️

SMISMEMBER

❌

❌

❌

❌️

✔️

SMOVE

✔️

✔️

✔️

✔️

✔️

SPOP

✔️

✔️

✔️

✔️

✔️

SRANDMEMBER

✔️

✔️

✔️

✔️

✔️

SREM

✔️

✔️

✔️

✔️

✔️

SSCAN

✔️

✔️

✔️

✔️

✔️

SUNION

✔️

✔️

✔️

✔️

✔️

SUNIONSTORE

✔️

✔️

✔️

✔️

✔️

### **Sorted Set**

**Command**

**Version 2.8**

**Version 4.0**

**Version 5.0**

**Version 6.0**

**Version 7.0**

BZMPOP

➖

➖

➖

➖

✔️

BZPOPMAX

➖

➖

✔️

✔️

✔️

BZPOPMIN

➖

➖

✔️

✔️

✔️

ZADD

✔️

✔️

✔️

✔️

✔️

ZCARD

✔️

✔️

✔️

✔️

✔️

ZCOUNT

✔️

✔️

✔️

✔️

✔️

ZDIFF

➖

➖

➖

➖

✔️

ZDIFFSTORE

➖

➖

➖

➖

✔️

ZINCRBY

✔️

✔️

✔️

✔️

✔️

ZINTER

➖

➖

➖

➖

✔️

ZINTERCARD

➖

➖

➖

➖

✔️

ZINTERSTORE

✔️

✔️

✔️

✔️

✔️

ZLEXCOUNT

✔️

✔️

✔️

✔️

✔️

ZMPOP

➖

➖

➖

➖

✔️

ZMSCORE

➖

➖

➖

➖

✔️

ZPOPMAX

➖

➖

✔️

✔️

✔️

ZPOPMIN

➖

➖

✔️

✔️

✔️

ZRANDMEMBER

➖

➖

➖

➖

✔️

ZRANGE

✔️

✔️

✔️

✔️

✔️

ZRANGEBYLEX

✔️

✔️

✔️

✔️

✔️

ZRANGEBYSCORE

✔️

✔️

✔️

✔️

✔️

ZRANGESTORE

➖

➖

➖

➖

✔️

ZRANK

✔️

✔️

✔️

✔️

✔️

ZREM

✔️

✔️

✔️

✔️

✔️

ZREMRANGEBYLEX

✔️

✔️

✔️

✔️

✔️

ZREMRANGEBYRANK

✔️

✔️

✔️

✔️

✔️

ZREMRANGEBYSCORE

✔️

✔️

✔️

✔️

✔️

ZREVRANGE

✔️

✔️

✔️

✔️

✔️

ZREVRANGEBYLEX

✔️

✔️

✔️

✔️

✔️

ZREVRANGEBYSCORE

✔️

✔️

✔️

✔️

✔️

ZREVRANK

✔️

✔️

✔️

✔️

✔️

ZSCAN

✔️

✔️

✔️

✔️

✔️

ZSCORE

✔️

✔️

✔️

✔️

✔️

ZUNION

➖

➖

➖

➖

✔️

ZUNIONSTORE

✔️

✔️

✔️

✔️

✔️

### **Stream**

**Command**

**Version 2.8**

**Version 4.0**

**Version 5.0**

**Version 6.0**

**Version 7.0**

XACK

➖

➖

✔️

✔️

✔️

XADD

➖

➖

✔️

✔️

✔️

XAUTOCLAIM

➖

➖

➖

➖

✔️

XCLAIM

➖

➖

✔️

✔️

✔️

XDEL

➖

➖

✔️

✔️

✔️

XGROUP

➖

➖

✔️

✔️

✔️

XGROUP CREATECONSUMER

➖

➖

➖

➖

✔️

XINFO

➖

➖

✔️

✔️

✔️

XLEN

➖

➖

✔️

✔️

✔️

XPENDING

➖

➖

✔️

✔️

✔️

XRANGE

➖

➖

✔️

✔️

✔️

XREAD

➖

➖

✔️

✔️

✔️

XREADGROUP

➖

➖

✔️

✔️

✔️

XREVRANGE

➖

➖

✔️

✔️

✔️

XTRIM

➖

➖

✔️

✔️

✔️

### **String**

**Command**

**Version 2.8**

**Version 4.0**

**Version 5.0**

**Version 6.0**

**Version 7.0**

APPEND

✔️

✔️

✔️

✔️

✔️

DECR

✔️

✔️

✔️

✔️

✔️

DECRBY

✔️

✔️

✔️

✔️

✔️

GET

✔️

✔️

✔️

✔️

✔️

GETDEL

➖

➖

➖

➖

✔️

GETEX

➖

➖

➖

➖

✔️

GETRANGE

✔️

✔️

✔️

✔️

✔️

GETSET

✔️

✔️

✔️

✔️

✔️

LCS

➖

➖

➖

➖

✔️

INCR

✔️

✔️

✔️

✔️

✔️

INCRBY

✔️

✔️

✔️

✔️

✔️

INCRBYFLOAT

✔️

✔️

✔️

✔️

✔️

MGET

✔️

✔️

✔️

✔️

✔️

MSET

✔️

✔️

✔️

✔️

✔️

MSETNX

✔️

✔️

✔️

✔️

✔️

PSETEX

✔️

✔️

✔️

✔️

✔️

SET

✔️

✔️

✔️

✔️

✔️

SETEX

✔️

✔️

✔️

✔️

✔️

SETNX

✔️

✔️

✔️

✔️

✔️

SETRANGE

✔️

✔️

✔️

✔️

✔️

STRALGO

➖

➖

➖

✔️

➖

STRLEN

✔️

✔️

✔️

✔️

✔️

### **Transactions**

**Command**

**Version 2.8**

**Version 4.0**

**Version 5.0**

**Version 6.0**

**Version 7.0**

DISCARD

✔️

✔️

✔️

✔️

✔️

EXEC

✔️

✔️

✔️

✔️

✔️

MULTI

✔️

✔️

✔️

✔️

✔️

UNWATCH

✔️

✔️

✔️

✔️

✔️

WATCH

✔️

✔️

✔️

✔️

✔️

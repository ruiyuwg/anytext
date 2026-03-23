This topic describes the Redis commands that you can run in SQL Console and in database tickets.

**Category**

**Command**

Keys

-   Key-related read commands
    
    EXISTS, TTL, PTTL, RANDOMKEY, TYPE, SCAN, and OBJECTS
    
-   Key-related write commands
    
    DELDUMPEXPIRE, EXPIREART, MOVE, PERSIST, PEXPIRE, PEXPIREAT, RENAME, RENAMENX, RESTORE, SORT, TOUCH, UNLINK, WAIT, and MIGRATE
    

String

-   String-related read commands
    
    GET, GETRANGE, BITCOUNT, GETBIT, MGET, STRLEN, and BITOPS
    
-   String-related write commands
    
    APPEND, BITFIELD, BITOP, DECR, DECRBY, GETSET, INCR, INCRBY, INCRBYFLOAT, MSET, MSETNX, PSETEX, SET, and SETNX
    

List

-   List-related read commands
    
    LINDEX, LLEN, and LRANGE
    
-   List-related write commands
    
    BLPOP, BRPOP, BRPOPLPUSH, LINSERT, LPOP, LPUSH, LPUSHX, LREM, LSET, LTRIM, RPOP, RPOPLPUSH, RPUSH, RPUSHX
    

Set

-   Set-related read commands
    
    SCARD, SISMEMBER, SRANDMEMBER, and SSCAN
    
-   Set-related write commands
    
    SADD, SMOVE, SPOP, and SREM
    

Sortedset

-   Sorted set-related read commands
    
    ZCARD, ZCOUNT, ZLEXCOUNT, ZRANGE, ZRANGEBYLEX, ZRANGEBYSCORE, ZRANK, ZREVRANGE, ZREVRANGEBYLEX, ZREVRANGEBYSCORE, ZREVRANK, ZSCAN, and ZSCORE
    
-   Sorted set-related write commands
    
    ZADD, ZINCRBY, ZINTERSTORE, ZPOPMAX, ZPOPMIN, ZREM, ZUNIONSTORE, BZPOPMIN, and BZPOPMAX
    

Hash

-   Hash table-related read commands
    
    HEXISTS, HGET, HLEN, HMGET, HSCAN, and HSTRLEN
    
-   Hash table-related write commands
    
    HDEL, HINCRBY, HINCRBYFLOAT, HMSET, HSET, and HSETNX
    

Server

Server management-related read commands

DBSIZE, CLIENT LIST, INFO, and SLOWLOG

Connection

PING

HyperLogLog

PFCOUNT, PFADD, and PFMERGE

TairDoc

For more information about TairDoc commands, see [TairDoc](/help/en/redis/tairdoc-commands#section-px3-y8q-o0m).

TairString

For more information about TairString commands, see [TairString](/help/en/redis/tairstring-commands#section-ore-879-28l).

TairBloom

For more information about TairBloom commands, see [TairBloom](/help/en/redis/tairbloom-commands#section-d0m-93u-xld).

TairGIS

For more information about TairGIS commands, see [TairGIS](/help/en/redis/tairgis-commands#section-dsy-uzn-scz).

TairHash

For more information about TairHash commands, see [TairHash](/help/en/redis/tairhash-commands#section-b7v-3x2-7s7).

TairCpc

For more information about TairCpc commands, see [TairCpc](/help/en/redis/taircpc-commands#section-aws-4kh-qgu).

TairTS

For more information about TairTS commands, see [TairTS](/help/en/redis/tairts-commands#section-rdh-3iw-ctz).

TairRoaring

For more information about TairRoaring commands, see [TairRoaring](/help/en/redis/tairroaring-commands#section-jyu-is9-rr5).

TairSearch

For more information about TairSearch commands, see [TairSearch](/help/en/redis/tairsearch-command#section-wg5-o1f-9ln).

This topic describes common errors and solutions when you access Tair (Redis OSS-compatible).

## Error overview

**Classification**

**Error**

General Redis exceptions

-   [ERR illegal address](#redis-config-db-0001)
    
-   [ERR sentinel compatibility mode is disabled](#redis-config-db-0020)
    
-   [ERR max number of clients reached](#redis-connection-db-1001)
    
-   [NOAUTH Authentication required](#redis-connection-db-1002)
    
-   [WRONGPASS invalid username-password pair](#redis-connection-db-1003)
    
-   [ERR invalid password](#redis-connection-db-1004)
    
-   [Connection reset by peer](#redis-connection-db-1005)
    
-   [UnknownHostException](#redis-connection-db-1006)
    
-   [OOM command not allowed when used memory > 'maxmemory'](#redis-resource-db-2001)
    
-   [WRONGTYPE Operation against a key holding the wrong kind of value](#redis-request-db-4001)
    
-   [ERR unknown command 'xxx'](#redis-request-db-4002)
    
-   [ERR command 'xxx' not support for your account](#redis-request-db-4003)
    
-   [NOPERM this user has no permissions to run the 'xxx'](#redis-request-db-4004)
    
-   [ERR FLUSHDB is not allowed in migrating mode](#redis-request-db-4005)
    
-   [CROSSSLOT Keys in request don't hash to the same slot](#ee8e032034s1l)
    
-   [ERR READONLY you can't write against a read only instance](#redis-runtime-db-7001)
    
-   [Failed to connect to any host resolved for DNS name](#0cb60a5f4fz8z)
    

General proxy mode exceptions

-   [ERR client ip is not in whitelist](#redis-config-proxy-0001)
    
-   [NOWRITE You can't write against a non-write redis](#redis-config-proxy-0010)
    
-   [ERR syntax error](#redis-request-proxy-4010)
    
-   [ERR no such db node](#redis-request-proxy-4012)
    
-   [ERR 'xxx' command keys must in same slot](#redis-request-proxy-4020)
    
-   [ERR for redis cluster, eval/evalsha number of keys can't be negative or zero](#redis-script-proxy-6010)
    
-   [ERR request refused, too many pending request, now count xxx, beyond threshold xxx](#redis-request-proxy-6030)
    
-   [ERR redis temporary failure](#redis-runtime-proxy-7001)
    
-   [ERR redis temporary failure (ErrorCode 7002)](#redis-runtime-proxy-7002)
    

Lua scripts and transactions

-   [NOSCRIPT No matching script. Please use EVAL.](#redis-script-db-6001)
    
-   [BUSY Redis is busy running a script. You can only call SCRIPT KILL or SHUTDOWN NOSAVE.](#redis-script-db-6002)
    
-   [ERR command eval not support for normal user](#redis-script-db-6003)
    
-   [ERR eval/evalsha command keys must be in same slot](#redis-script-db-6004)
    
-   [ERR bad lua script for redis cluster, all the keys that the script uses should be passed using the KEYS array](#redis-script-db-6005)
    
-   [EXECABORT Transaction discarded because of previous errors](#redis-transaction-db-6100)
    
-   [UNKILLABLE Sorry the script already executed write commands against the dataset.](#redis-script-db-6006)
    
-   [UNKILLABLE The busy script was sent by a master instance in the context of replication and cannot be killed.](#redis-script-db-6007)
    
-   [NOTBUSY No scripts in execution right now.](#redis-script-db-6008)
    

Jedis client

-   [Could not get a resource from the pool](#redis-external-sdk-jedis-1010)
    
-   [java.net.SocketTimeoutException: connect timed out](#redis-external-sdk-jedis-1011)
    
-   [java.net.SocketTimeoutException: Read timed out](#redis-external-sdk-jedis-1012)
    
-   [No reachable node in cluster](#redis-external-sdk-jedis-1013)
    
-   [Caused by: java.lang.NumberFormatException: For input string: "6379@13028"](#redis-external-sdk-jedis-3001)
    
-   [No more cluster attempts left](#redis-external-sdk-jedis-4010)
    
-   [Unexpected end of stream](#redis-external-sdk-jedis-7001)
    
-   [java.lang.Long cannot be cast to java.util.List](#redis-external-sdk-jedis-8001)
    
-   [Broken pipe (Write failed)](#redis-external-sdk-jedis-8002)
    
-   [No way to dispatch this command to Redis Cluster because keys have different slots](#redis-external-sdk-jedis-8003)
    

Lettuce client

-   [Connection to xxx not allowed. This Partition is not known in the cluster view.](#redis-external-sdk-lettuce-0011)
    
-   [io.lettuce.core.RedisConnectionException: Unable to connect xxx](#redis-external-sdk-lettuce-1011)
    
-   [java.nio.channels.UnresolvedAddressException](#redis-external-sdk-lettuce-1014)
    
-   [ERR Unknown sentinel subcommand 'master'](#redis-external-sdk-lettuce-1015)
    
-   [Some instance versions do not support the RESP3 protocol and report an "unknown command" error](#redis-external-sdk-lettuce-1016)
    

Redisson client

-   [org.redisson.client.RedisConnectionException: Unable to connect to Redis server xxx](#redis-external-sdk-redisson-1011)
    
-   [No enum constant org.redisson.cluster.ClusterNodeInfo.Flag.NOFAILOVER](#redis-external-sdk-redisson-3001)
    

Spring Data Redis client

-   [NOPERM this user has no permissions to run the 'config|get' command](#redis-external-sdk-springdataredis-0030)
    

StackExchange.Redis client

-   [Multiple databases are not supported on this server; cannot switch to database](#redis-external-sdk-stackexchangeredis-8005)
    

Predis client

-   [Error while reading line from the server.](#redis-external-sdk-predis-1012)
    

phpredis client

-   [Cannot assign requested address](#redis-external-sdk-phpredis-1101)
    
-   [redis protocol error, got ' ' as reply type byte](#redis-external-sdk-phpredis-3001)
    
-   [php\_network\_getaddresses: getaddrinfo failed: Temporary failure in name resolution](#redis-external-sdk-phpredis-1101)
    

Go-redis client

-   [panic: got 4 elements in cluster info address, expected 2 or 3](#redis-external-sdk-goredis-1101)
    

node-redis client

-   [The SCAN command enters an infinite loop or returns empty data](#redis-external-sdk-noderedis-1101)
    

## General Redis exceptions

### ERR illegal address

Possible cause: The IP address of your client is not added to a whitelist of the Tair instance.

Solution: Add the IP address of your client to a whitelist of the Tair instance. For more information, see [Perform diagnostics on connections](/help/en/redis/user-guide/perform-diagnostics-on-connections#task-2272653).

### ERR sentinel compatibility mode is disabled

Possible cause: The Sentinel-compatible mode is not enabled for the Tair instance.

Solution: Enable the Sentinel-compatible mode for the instance in the console. For more information, see [Enable the Sentinel-compatible mode](/help/en/redis/user-guide/enable-the-sentinel-compatible-mode#task-x1d-nw2-4fb).

### ERR max number of clients reached

Possible cause: The maximum number of connections to the Tair instance is reached.

Solution:

-   Check whether connection leaks occur on the client. For example, check whether the `close` function is invoked after JedisPool is used on the Jedis client.
    
-   Check whether the current connection session runs as expected. For more information, see [Manage instance sessions](/help/en/redis/user-guide/instance-sessions#task-2490861). You can terminate the session or [upgrade the instance configurations](/help/en/redis/user-guide/change-the-configurations-of-an-instance/#concept-mgf-z25-tdb) to increase the maximum number of connections to the instance.
    

### NOAUTH Authentication required

Possible cause: Password-based authentication is configured for the Tair instance, but the client does not provide a password or provides an incorrect password.

Solution: Use the correct username and password to access the instance. For more information, see [Logon methods for instances](/help/en/redis/user-guide/logon-methods#task-2232441).

**Note**

If you use a Lettuce client from version 6.4.0.RELEASE to 6.4.1.RELEASE, this error may occur even if you provide the correct password. This issue was introduced when Lettuce added support for \`CLIENT SETINFO\` and was fixed in version 6.4.2.RELEASE. For more information, see [redis/lettuce#3035](https://github.com/redis/lettuce/pull/3035).

If you encounter this issue, you can [manually switch the protocol to RESP2](#redis-external-sdk-lettuce-1016) or upgrade the client to Lettuce 6.4.2.RELEASE or later. If you are using a Spring Data Redis client, we recommend using Spring Data Redis 3.4.2 or later.

### WRONGPASS invalid username-password pair

Possible cause: The password is invalid.

Solution: Use the correct account username and password to connect to the instance. For more information, see [Connect to an instance](/help/en/redis/user-guide/logon-methods#task-2232441).

**Note**

If the Sentinel-compatible mode is enabled for the instance, refer to the [Use the Sentinel-compatible mode to connect to an instance](/help/en/redis/user-guide/use-the-sentinel-compatible-mode-to-connect-to-an-apsaradb-for-redis-instance#task-1937025) topic.

### ERR invalid password

Possible cause: The password is invalid.

Solution: Use the correct account username and password to connect to the instance. For more information, see [Connect to an instance](/help/en/redis/user-guide/logon-methods#task-2232441).

**Note**

If this error is reported in Data Management (DMS), the possible cause is that the password saved by DMS during the last logon does not match the current password for the instance. In the DMS **instance list**, find the instance and choose More > **Edit** in the Actions column. Then, enter the new password in the **Database Password** field and try again.

### Connection reset by peer

Possible cause: The connection is closed due to an exception on the client buffer.

Solution: Check the application-side code or adjust the size of the client buffer. For more information, see the [Unexpected end of stream](#p-y43-cfp-848) section.

### UnknownHostException

Alternatively, the `failed to connect: xxx.redis.rds.aliyuncs.com could not be resolved` error occurs.

Possible cause: The client cannot resolve the domain name of the Tair instance.

Solution: Configure the DNS server correctly. For more information, see [How do I troubleshoot connection issues caused by failed DNS resolution?](/help/en/redis/support/troubleshoot-connection-issues-caused-by-failed-dns-resolution)

### OOM command not allowed when used memory > 'maxmemory'

Possible cause: The maximum memory configured for the Tair instance is reached.

**Note**

If the Tair instance uses the cluster architecture, the memory usage of a data shard may exceed the maximum memory configured for the data shard.

Solution:

-   If the memory usage of the instance reaches 100%, we recommend that you upgrade the instance configurations. For more information, see [Change the configurations of an instance](/help/en/redis/user-guide/change-the-configurations-of-an-instance/#concept-mgf-z25-tdb).
    
-   If the memory usage of a single data shard reaches 100%, large keys may exist in the instance. You can use the [offline key analysis](/help/en/redis/user-guide/offline-key-analysis#concept-ufz-byl-jgb) or [instance diagnostics](/help/en/redis/user-guide/create-a-diagnostic-report/#concept-2045851) feature to identify the cause.
    

### WRONGTYPE Operation against a key holding the wrong kind of value

Possible cause: The command is used incorrectly. For example, a `HASH` command is executed on a String data type.

Solution: Modify the incorrect code or command. For more information, see [Redis Commands](https://valkey.io/commands/).

### ERR unknown command 'xxx'

Possible cause: The current instance does not support this command.

If ERR unknown command 'WAIT' is returned, the proxy mode does not support the WAIT command. Use the direct link mode.

Solution: Check the command support for the current instance version. For more information, see [Tair (Enterprise Edition) Command Support and Limitations](/help/en/tair/developer-reference/limits-on-commands-supported-by-tair#concept-1960075), [Redis Open-Source Edition Command Support and Limitations](/help/en/redis/developer-reference/commands-supported-by-apsaradb-for-redis-community-edition#concept-1960075), and [Command Limitations for Cluster Architecture and Read/Write Splitting Instances](/help/en/redis/developer-reference/limits-on-commands-supported-by-cluster-and-read-write-splitting-instances).

**Note**

The latest minor version provides more features and stable services. We recommend upgrading the instance to the latest minor version. For more information, see [Upgrade the minor version and proxy version](/help/en/redis/user-guide/update-the-minor-version#concept-itn-f44-tdb).

### ERR command 'xxx' not support for your account

Possible cause: Specific commands of Tair are disabled in Alibaba Cloud, or these commands are specified by #no\_loose\_disabled-commands. For more information, see [Commands supported by Redis Open-Source Edition](/help/en/redis/developer-reference/commands-supported-by-apsaradb-for-redis-community-edition#concept-1960075) and [Disable high-risk commands](/help/en/redis/user-guide/disable-high-risk-commands#task-uzq-tgk-5gb).

Solution: Delete the command that you want to run from the disabled commands specified by #no\_loose\_disabled-commands.

### NOPERM this user has no permissions to run the 'xxx'

Possible cause: Specific commands of Tair are disabled in Alibaba Cloud, or these commands are specified by #no\_loose\_disabled-commands. For more information, see [Commands supported by Redis Open-Source Edition](/help/en/redis/developer-reference/commands-supported-by-apsaradb-for-redis-community-edition#concept-1960075) and [Disable high-risk commands](/help/en/redis/user-guide/disable-high-risk-commands#task-uzq-tgk-5gb).

Solution: Delete the command that you want to run from the disabled commands specified by #no\_loose\_disabled-commands.

### ERR FLUSHDB is not allowed in migrating mode

Possible cause: When the number of data shards is changing for a Tair cloud-native cluster instance, the `FLUSHDB` and `FLUSHALL` commands are disabled.

Solution: Wait until the change ends for the Tair cloud-native cluster instance. For more information, see [Adjust the number of shards for an instance](/help/en/redis/user-guide/adjust-the-number-of-cluster-shards#task-2022112).

### CROSSSLOT Keys in request don't hash to the same slot

Possible cause: Commands that involve multiple keys across slots, such as **DEL**, **MSET**, and **MGET**, are not supported for Tair cluster instances in direct connection mode.

Solution:

-   Before you run a command that involves multiple keys, use the **CLUSTER KEYSLOT** command to ensure that all the keys reside in the same slot.
    
-   Change key names and implement hash tags to ensure that the involved keys are allocated in the same slot. However, it is important to prevent data skew when you use hash tags.
    
-   Change the instance to a cluster instance in proxy mode that supports commands involving multiple keys across slots, such as **DEL**, **MGET**, and **MSET**. For more information, see [Features of proxy nodes](/help/en/redis/product-overview/features-of-proxy-nodes).
    

### ERR READONLY you can't write against a read only instance

Possible cause: During a master-replica switchover, configuration change, or minor version update for your Tair instance, transient connections occur and the instance remains read-only for up to 30 seconds.

Solution: Wait until the instance recovers. No manual operations are required. Design the reconnection and exception handling mechanisms for your application. For more information, see [Change the configurations of an instance](/help/en/redis/user-guide/change-the-configurations-of-an-instance/#concept-mgf-z25-tdb).

### **Failed to connect to any host resolved for DNS name**

Possible cause: The whitelist is not configured correctly.

Solution: Add the client's IP address to the instance's whitelist. For more information, see [Configure an IP address whitelist](/help/en/redis/user-guide/configure-whitelists#7e50dbd016fvz).

**Note**

For public network access, add the egress IP address to the whitelist. Visit [https://cip.cc/](https://cip.cc/) to get the egress IP address.

## General proxy mode exceptions

### ERR client ip is not in whitelist

Possible cause: The IP address of your client is not added to a whitelist of the Tair instance.

Solution: Add the IP address of your client to a whitelist of the Tair instance. For more information, see [Perform diagnostics on connections](/help/en/redis/user-guide/perform-diagnostics-on-connections#task-2272653).

### NOWRITE You can't write against a non-write redis

Alternatively, the `NOREAD You can't read against a non-read redis` error occurs.

Possible cause: Your instance has overdue payments or has expired. The instance is in the **Locked** state.

Solution: Add funds to your account or renew the instance. For more information, see [Expiration and overdue payments](/help/en/redis/product-overview/expiration-and-overdue-payments#concept-pvp-5b5-tdb).

### ERR syntax error

Possible cause: Incorrect command syntax. For example, a command that requires four parameters was passed only three.

Solution: Check if the command format is correct. For more information, see [Redis Commands](https://valkey.io/commands/).

### ERR no such db node

Possible cause: When you run an in-house command of Tair, the specified `db node` parameter is invalid.

Solution: Specify the `db node` parameter correctly. The value of `db node` must be less than the number of data shards in the instance. For more information, see [In-house commands for instances in proxy mode](/help/en/redis/developer-reference/in-house-commands-for-tair-instances-in-proxy-mode#concept-2353538).

### ERR 'xxx' command keys must in same slot

Possible cause: A transaction or script executed on a Tair cluster instance contains keys that are in different slots.

Solution: Modify the transaction or script. You can use the `CLUSTER KEYSLOT` command to query the slot in which a requested key is stored.

**Important**

Tair cluster instances use the Cyclic Redundancy Check (CRC) algorithm to evenly distribute keys across different slots. If you want to store keys in the same slot, you can use hash tags. However, this may cause data skew. Proceed with caution.

### ERR for redis cluster, eval/evalsha number of keys can't be negative or zero

Possible cause: No keys are specified or the numkeys parameter is set to a value less than or equal to 0 for the `EVAL` and `EVALSHA` commands.

Solution: When you use the `EVAL` and `EVALSHA` commands, you must specify at least one key and set the numkeys parameter to a value greater than 0. For more information, see [Usage of Lua scripts](/help/en/redis/support/usage-of-lua-scripts#section-4uj-b2r-yrl).

### ERR request refused, too many pending request, now count xxx, beyond threshold xxx

Possible cause: Pending requests are piled up in the backend of Tair because the client uses an invalid pipeline.

Solution: Reduce the number of pipelined requests.

### ERR redis temporary failure

Possible cause: When you connect to a node of your Tair instance, a timeout error occurs due to network jitter, excessive connections, a master-replica switchover, or an ongoing slow query.

Solution: Wait until the instance recovers. No manual operations are required. Design the reconnection and exception handling mechanisms for your application.

### ERR redis temporary failure (ErrorCode 7002)

Possible cause: When you connect to a node of your Tair instance, a timeout error occurs due to an ongoing instance configuration change or master-replica switchover.

Solution: Wait until the instance recovers. No manual operations are required. Design the reconnection and exception handling mechanisms for your application.

## Lua scripts and transactions

### NOSCRIPT No matching script. Please use EVAL.

Possible cause: When you run the `EVALSHA` command, the script corresponding to the SHA1 value is not cached to the Tair instance.

Solution: Run the `EVAL` or `SCRIPT LOAD` command to cache the required script to the Tair instance and try again. For more information, see [Handle the NOSCRIPT error](/help/en/redis/support/usage-of-lua-scripts#section-82q-id4-ycg).

### BUSY Redis is busy running a script. You can only call SCRIPT KILL or SHUTDOWN NOSAVE.

Possible cause: A Lua script timed out.

Solution: Run the SCRIPT KILL command to terminate the execution of the script or wait until the execution ends. For more information, see [Handle timeouts of Lua scripts](/help/en/redis/support/usage-of-lua-scripts#section-pl9-lpz-spd).

### ERR command eval not support for normal user

Possible cause: `EVAL`\-related commands cannot be run.

Solution: Update your instance to the latest minor version. For more information, see [Update the minor version of an instance](/help/en/redis/user-guide/update-the-minor-version#concept-itn-f44-tdb).

### ERR eval/evalsha command keys must be in same slot

Possible cause: The keys involved in the Lua script do not reside in the same slot. This error is common in cluster instances.

Solution: Modify the Lua script. You can query the slot in which a key resides by running the `CLUSTER KEYSLOT` command. For more information, see [Limits on Lua scripts in cluster instances](/help/en/redis/support/usage-of-lua-scripts#section-8f7-qgv-dlv).

### ERR bad lua script for redis cluster, all the keys that the script uses should be passed using the KEYS array

Possible cause: This error may be caused by limits of proxy nodes on Lua scripts.

Solution: Specify all keys in arrays. Example: `EVAL "return redis.call('mget', KEYS[1], KEYS[2])" 2 foo {foo}bar`. Keys cannot be replaced by Lua variables. For more information, see [Limits on Lua scripts in cluster instances](/help/en/redis/support/usage-of-lua-scripts#section-8f7-qgv-dlv).

### EXECABORT Transaction discarded because of previous errors

Possible cause: The command that you run in a transaction has syntax mistakes or errors.

Solution: Check your code logic and correct the syntax mistakes of the command.

### UNKILLABLE Sorry the script already executed write commands against the dataset.

Possible cause: Write operations that are involved in the current Lua script have been performed. In this case, the **SCRIPT KILL** command cannot be run.

Solution: Find the instance in the console and click **restart** in the **Actions** column. For more information, see [Restart an instance](/help/en/redis/user-guide/restart-one-or-more-apsaradb-for-redis-instances#task-rpc-4sw-kgb).

### UNKILLABLE The busy script was sent by a master instance in the context of replication and cannot be killed.

Possible cause: The current Lua script is forwarded by the master node to the corresponding replica node. In this case, the **SCRIPT KILL** command cannot be run.

Solution: Find the instance in the console and click **restart** in the **Actions** column. For more information, see [Restart an instance](/help/en/redis/user-guide/restart-one-or-more-apsaradb-for-redis-instances#task-rpc-4sw-kgb).

### NOTBUSY No scripts in execution right now.

Possible cause: No Lua scripts are being executed.

Solution: No manual operations are required. Do not run the **SCRIPT KILL** command.

## Jedis client

### Could not get a resource from the pool

Possible cause: Jedis connections cannot be borrowed from JedisPool.

-   When the blockWhenExhausted parameter is set to true, which is the default value, the client waits several milliseconds specified by the maxWaitMillis parameter if no connections are available from JedisPool. If the client still cannot obtain an available Jedis connection after waiting for a long time, the following exception is thrown:
    
    ```
    redis.clients.jedis.exceptions.JedisConnectionException: Could not get a resource from the pool
        ...
    Caused by: java.util.NoSuchElementException: Timeout waiting for idle object
        at org.apache.commons.pool2.impl.GenericObjectPool.borrowObject(GenericObjectPool.java:449)
    ```
    
-   When the blockWhenExhausted parameter is set to false, the following exception is thrown if no connections are available from JedisPool:
    
    ```
    redis.clients.jedis.exceptions.JedisConnectionException: Could not get a resource from the pool
        ...
    Caused by: java.util.NoSuchElementException: Timeout waiting for idle object
        at org.apache.commons.pool2.impl.GenericObjectPool.borrowObject(GenericObjectPool.java:449)
    ```
    

Solution: Consider the following aspects to troubleshoot the error:

-   Connection leaks
    
    By default, maxTotal is set to 8. The following code shows that the Jedis client borrows connections from JedisPool for eight times but does not return these connections. This is why the Jedis client cannot run the `jedisPool.getResource().ping()` command at the ninth attempt to obtain another connection from JedisPool.
    
    ```
    GenericObjectPoolConfig poolConfig = new GenericObjectPoolConfig();
    JedisPool jedisPool = new JedisPool(poolConfig, "127.0.0.1", 6379);
    // The client borrows connections from JedisPool for eight times, but does not return these connections. 
    for (int i = 0; i < 8; i++) {
        Jedis jedis = null;
        try {
            jedis = jedisPool.getResource();
            jedis.ping();
        } catch (Exception e) {
            logger.error(e.getMessage(), e);
        }
    }
    jedisPool.getResource().ping();
    ```
    
    Recommended code:
    
    ```
    Jedis jedis = null;
    try {
        jedis = jedisPool.getResource();
        // The command that you want to run. 
        jedis.executeCommand()
    } catch (Exception e) {
        // If the command involves a key, we recommend that you make configurations to display the key in error logs. This way, you can use the key to identify the data shard on which issues occur. 
        logger.error(e.getMessage(), e);
    } finally {
        // The client does not close a borrowed connection. Instead, the client returns the connection to JedisPool. 
        if (jedis != null) 
            jedis.close();
    }
    ```
    
-   A small value for the maxTotal parameter
    
    When the system has a large number of operations being processed in concurrency, a small value for the maxTotal parameter may cause exceptions. For example, it takes about 1 ms to run a command on average. This is calculated by using the following formula: `Amount of time consumed to borrow or return resources` + Amount of time consumed for Jedis to run the command + Network latency. The number of queries per second (QPS) of a connection is about 1,000, and the expected total QPS is 50,000. In theory, you need a maxTotal value of 50 to achieve the expected QPS of 50,000. The maxTotal value is obtained by dividing 50,000 by 1,000.
    
    In this case, you can run the following command on your client to obtain the number of client connections. You can adjust the value of maxTotal based on the obtained value.
    
    ```
    netstat -an | grep 6379 | grep EST | wc -l
    ```
    
-   Connection blocking
    
    When connections to the Tair instance are blocked due to reasons such as slow queries, all connections wait within the specified timeout period. In this case, when a large number of operations are processed in concurrency, a timeout error may be reported. For more information, see [java.net.SocketTimeoutException: connect timed out](/help/en/redis/support/common-errors-and-troubleshooting#redis-external-sdk-jedis-1011).
    
-   Connection rejected
    
    When you attempt to obtain a connection from JedisPool and no connections are available, Jedis attempts to create a Jedis connection. However, the connection attempt is rejected and an exception is thrown. Example:
    
    ```
    redis.clients.jedis.exceptions.JedisConnectionException: Could not get a resource from the pool
        at redis.clients.util.Pool.getResource(Pool.java:50)
        at redis.clients.jedis.JedisPool.getResource(JedisPool.java:99)
        at TestAdmin.main(TestAdmin.java:14)
    Caused by: redis.clients.jedis.exceptions.JedisConnectionException: java.net.ConnectException: Connection refused
        at redis.clients.jedis.Connection.connect(Connection.java:164)
        at redis.clients.jedis.BinaryClient.connect(BinaryClient.java:80)
        at redis.clients.jedis.BinaryJedis.connect(BinaryJedis.java:1676)
        at redis.clients.jedis.JedisFactory.makeObject(JedisFactory.java:87)
        at org.apache.commons.pool2.impl.GenericObjectPool.create(GenericObjectPool.java:861)
        at org.apache.commons.pool2.impl.GenericObjectPool.borrowObject(GenericObjectPool.java:435)
        at org.apache.commons.pool2.impl.GenericObjectPool.borrowObject(GenericObjectPool.java:363)
        at redis.clients.util.Pool.getResource(Pool.java:48)
        ... 2 more
    Caused by: java.net.ConnectException: Connection refused
        at java.net.PlainSocketImpl.socketConnect(Native Method)
        at java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:339)
        at java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:200)
        at java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:182)
        at java.net.SocksSocketImpl.connect(SocksSocketImpl.java:392)
        at java.net.Socket.connect(Socket.java:579)
        at redis.clients.jedis.Connection.connect(Connection.java:158)
        ... 9 more
    ```
    
    `at redis.clients.jedis.Connection.connect(Connection.java:158)` indicates that Jedis attempts to create a socket connection and invoke the `connect` function, but the connection attempt is rejected. Jedis source code:
    
    ```
    socket.setSoLinger(true, 0); 
    158:  socket.connect(new InetSocketAddress(host, port), connectionTimeout);
    ```
    
    Typically, to address this issue, you must check whether the domain name configuration of the Tair instance is correct and check the network connection within the corresponding time period.
    

### java.net.SocketTimeoutException: connect timed out

Possible cause: The connection between your client and the Tair instance timed out.

Solution: Refer to the [How do I troubleshoot connection issues in Tair?](/help/en/redis/support/how-do-i-troubleshoot-connection-issues-in-apsaradb-for-redis#concept-gm5-rgv-fgb) topic.

### java.net.SocketTimeoutException: Read timed out

Possible cause: A Jedis API call timed out due to unstable network connection, short read/write timeout periods, slow queries, or connection blocking.

Solution: Increase the timeout period or perform [instance diagnostics](/help/en/redis/user-guide/create-a-diagnostic-report/#concept-2045851) to check whether a performance issue or an exception occurs at the corresponding point in time.

**Note**

If this error occurs in DMS, the VPC endpoint or port of the instance may have been modified. In the DMS **database instance** list, right-click the destination instance, select **Edit Instance**, and then set **Entry Method** to **Connection String Address**. Enter the modified instance endpoint in the **Connection String Address** text box and try again.

### No reachable node in cluster

Possible cause: JedisCluster is inaccessible.

Solution: The first time your client connects to the Tair instance, check whether the IP address of the client is added to a whitelist of the Tair instance. If this is not your first time connecting to the Tair instance, perform [instance diagnostics](/help/en/redis/user-guide/create-a-diagnostic-report/#concept-2045851) to identify the cause.

### Caused by: java.lang.NumberFormatException: For input string: "6379@13028"

Possible cause: `ClusterNodeInformationParser` is introduced in Jedis 2.8.0 and earlier to resolve the output of `cluster slots`. However, open source Redis has changed the type of the output. This is why the `NumberFormatException` error is reported.

Solution: Update your Jedis client to 2.9.0 or later.

### No more cluster attempts left

Possible cause: An API call timed out and the five retries also failed. By default, after an API call times out, JedisCluster retries five times.

Solution: Increase the timeout period or perform [instance diagnostics](/help/en/redis/user-guide/create-a-diagnostic-report/#concept-2045851).

### Unexpected end of stream

Possible cause: An exception occurs on the Jedis client buffer. You can consider the following aspects to troubleshoot the error:

-   Multiple threads sharing one connection
    
    Typically, one thread uses one Jedis connection. The following code shows that two threads share one Jedis connection:
    
    ```
    new Thread(new Runnable() {
        public void run() {
            for (int i = 0; i < 100; i++) {
                jedis.get("hello");
            }
        }
    }).start();
    new Thread(new Runnable() {
        public void run() {
            for (int i = 0; i < 100; i++) {
                jedis.hget("haskey", "f");
            }
        }
    }).start();
    ```
    
    To prevent this issue and ensure thread security, you can use JedisPool to manage Jedis connections.
    
-   Long-time idle connections
    
    The server closes long-time idle connections. Query the timeout settings of the instance and related settings of JedisPool to determine whether to periodically check and clean up long-time idle connections.
    
    **Note**
    
    By default, Tair does not close a long-time idle connection. If you modify the value of the timeout parameter, this error may be reported. For more information, see [Specify a timeout period for idle client connections](/help/en/redis/user-guide/specify-a-timeout-period-for-client-connections#task-2333655).
    

Solution: Check whether multiple threads share Jedis code or whether the server closes a long-time idle connection.

### java.lang.Long cannot be cast to java.util.List

Possible cause: This error is reported if the same Jedis connection is shared among multiple threads. This is because Jedis itself is not thread-safe and must not be used concurrently across multiple threads.

Solution: Use one Jedis connection in a single thread. For that matter, you can use JedisPool.

### Broken pipe (Write failed)

Possible cause: After a timeout error occurs on the Jedis client in single connection mode and the client closes the socket, you continue to write data to the instance.

Solution: Use one Jedis connection in a single thread. For that matter, you can use JedisPool.

### No way to dispatch this command to Redis Cluster because keys have different slots

Possible cause: JedisCluster performs operations on keys that reside in different slots.

Solution: Modify keys by means of hash tags.

**Note**

You can also use the proxy mode to disable limits of the cluster architecture.

## Lettuce client

### Connection to xxx not allowed. This Partition is not known in the cluster view.

Possible cause: By default, `validateClusterNodeMembership` is set to true and `refreshOption` is set to null for the Lettuce client. After the routing address of the Tair instance changes, the route table is not updated because `refreshOption` is set to null. In this case, the error is reported for `validateClusterNodeMembership`.

Solution: Specify the `refreshOption` parameter and set the `validateClusterNodeMembership` parameter to `false`. For more information, see [Lettuce](/help/en/redis/user-guide/use-a-private-endpoint-to-connect-to-an-apsaradb-for-redis-instance#section-o4a-vul-849).

### io.lettuce.core.RedisConnectionException: Unable to connect xxx

Possible cause: The connection between your client and the Tair instance timed out.

Solution: Refer to the [How do I troubleshoot connection issues in Tair?](/help/en/redis/support/how-do-i-troubleshoot-connection-issues-in-apsaradb-for-redis#concept-gm5-rgv-fgb) topic.

### java.nio.channels.UnresolvedAddressException

Possible cause: The error occurs most likely due to the Netty version.

Solution: Check the Netty dependencies and choose a higher version. For more information, see [spring-projects/spring-boot#14307](https://github.com/spring-projects/spring-boot/issues/14307).

### ERR Unknown sentinel subcommand 'master'

Possible cause: In [master-replica](https://github.com/lettuce-io/lettuce-core/wiki/Master-Replica) Sentinel mode, the Lettuce client sends the `Sentinel master/slave` command to the Tair instance. However, an instance in Sentinel-compatible mode supports only the `Sentinel get-master-addr-by-name` command.

Solution: Modify your code to switch to a non-Sentinel mode. Tair uses an in-house high availability component. You do not need to use the Sentinel-compatible mode.

### Some instance versions do not support the RESP3 protocol and report an "unknown command" error

Possible cause: Redis 6.0 and later support the RESP3 protocol. You can run the **HELLO** command to switch the connection to the desired RESP protocol version. However, some instances of earlier versions do not support the **HELLO** command, leading to compatibility issues.

Solution: You can configure your program to use the RESP2 protocol to access the Tair instance. Example:

```
client.setOptions(ClientOptions.builder()
    .protocolVersion(ProtocolVersion.RESP2)
    .build());
```

Example when Spring Data Redis with Lettuce is used as the Redis client:

```
LettuceClientConfiguration lettuceClientConfiguration = LettuceClientConfiguration.builder().
    clientOptions(ClientOptions.builder().protocolVersion(ProtocolVersion.RESP2).build()).build();

return new LettuceConnectionFactory(redisClusterConfiguration, lettuceClientConfiguration);
```

## Redisson client

### org.redisson.client.RedisConnectionException: Unable to connect to Redis server xxx

Possible cause: The connection between your client and the Tair instance timed out.

Solution: Refer to the [How do I troubleshoot connection issues in Tair?](/help/en/redis/support/how-do-i-troubleshoot-connection-issues-in-apsaradb-for-redis#concept-gm5-rgv-fgb) topic.

### No enum constant org.redisson.cluster.ClusterNodeInfo.Flag.NOFAILOVER

Possible cause: A bug in an earlier version of Redisson. For more information, see [redisson/redisson#2399](https://github.com/redisson/redisson/issues/2399).

Solution: Update your Redisson client to 3.11.6 or later.

## Spring Data Redis client

### NOPERM this user has no permissions to run the 'config|get' command

Possible cause: The version of your instance is displayed as Redis 7.0 on the Instance Information page. The `CONFIG` command is disabled in Tair (Redis OSS-compatible) instances that run Redis 7.0.

When the application starts, Spring Data Redis executes the `CONFIG SET` command to dynamically set the `notify-keyspace-events` parameter to enable the KeyspaceEventMessageListener feature. Because the `CONFIG GET/SET` commands are disabled, an error occurs at startup.

Solution: Set keyspaceNotificationsConfigParameter to an empty string to work around this issue. For the complete code, see [SpringRedisTest.zip](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/en-US/20251027/aophcy/springredistest.zip). For more information, see [Spring Data Redis](https://docs.spring.io/spring-data/data-redis/docs/current-SNAPSHOT/reference/html/).

```
@EnableRedisRepositories(enableKeyspaceEvents = RedisKeyValueAdapter.EnableKeyspaceEvents.ON_STARTUP, keyspaceNotificationsConfigParameter = "")
```

Also, if you are listening for KeyExpirationListener, you need to set keyspaceNotificationsConfigParameter to an empty string in the constructor.

```
public RedisKeyExpirationListener(RedisMessageListenerContainer redisMessageListenerContainer) {
    super(redisMessageListenerContainer);
    setKeyspaceNotificationsConfigParameter(""); // Important
}
```

## StackExchange.Redis client

### Multiple databases are not supported on this server; cannot switch to database

Possible cause: The `SELECT` command is not supported for cluster instances.

Solution: Set the `cluster_compat_enable` parameter to 0 to disable the compatibility with open source Redis Cluster syntax. Then, restart your client and try again. For more information, see [Configure instance parameters](/help/en/redis/user-guide/modify-the-values-of-parameters-for-an-instance/#concept-q1w-kxn-tdb).

## Predis client

### Error while reading line from the server.

Possible cause: The read request timed out. A slow query may be in progress.

Solution: Increase the timeout period or set `read_write_timeout` to `0` or `-1`. For more information, see [Predis questions](https://stackoverflow.com/questions/11776029/predis-is-giving-error-while-reading-line-from-server/11931651#11931651).

## phpredis client

### Cannot assign requested address

Possible cause: The client connects to the Tair instance over a short-lived connection.

Solution: Replace the `connect` connection method with `pconnect`, or modify the `tcp_max_tw_buckets` kernel parameter of the ECS instance where the client is located. For more information, see ["Cannot assign requested address" error](/help/en/redis/support/what-do-i-do-if-the-cannot-assign-requested-address-error-is-returned-when-i-access-apsaradb-for-redis-over-short-lived-connections).

### redis protocol error, got ' ' as reply type byte

Possible cause: A bug in an earlier version of phpredis. For more information, see [phpredis/phpredis#1585](https://github.com/phpredis/phpredis/issues/1585).

Solution: Upgrade phpredis to the latest version.

### php\_network\_getaddresses: getaddrinfo failed: Temporary failure in name resolution

Solution: Configure the DNS server correctly. For more information, see [How do I troubleshoot connection issues caused by failed DNS resolution?](/help/en/redis/support/troubleshoot-connection-issues-caused-by-failed-dns-resolution)

Possible cause: The client cannot resolve the domain name of the Tair instance.

## Go-redis client

### panic: got 4 elements in cluster info address, expected 2 or 3

Possible cause: Your Redis version is 7.0 or later, but you are not using a compatible version of the Go-redis client. For more information, see [redis/go-redis#2085](https://github.com/go-redis/redis/issues/2085).

Solution: Use go-redis 9.0 or later.

## node-redis client

### The SCAN command enters an infinite loop or returns empty data

Possible cause: The cursor value returned by the **SCAN** command may exceed JavaScript's maximum safe integer, [Number.MAX\_SAFE\_INTEGER](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/MAX_SAFE_INTEGER). This leads to an inaccurate cursor and causes an infinite loop. For more information, see [redis/node-redis#2561](https://github.com/redis/node-redis/issues/2561).

Solution: Update your node-redis client to 5.0.0 or later.

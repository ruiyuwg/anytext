Tair (Redis OSS-compatible) instances can experience temporary faults from network jitter, service interruptions, or server load. Configure automatic retry mechanisms in your client library to handle these faults gracefully.

## Causes of temporary faults

**Cause**

**Effect**

Master-replica switchover

Tair monitors node health and triggers a switchover when the master node fails. The client may experience transient connections within seconds and a read-only state within 30 seconds. The read-only state prevents data loss and dual writes. For more information, see [High availability](/help/en/redis/user-guide/master-replica-switchovers/#concept-2025502).

Slow queries

Operations with O(N) time complexity block other requests, causing temporary failures for concurrent client operations.

Network issues

Network jitter and data retransmission between the client and server cause intermittent request failures.

## Retry best practices

### Retry only idempotent operations

A timeout can occur at any stage of command execution:

-   The command has not reached the server.
    
-   The command reached the server, but execution timed out.
    
-   The command executed on the server, but the response timed out.
    

Because a retried operation may execute more than once, only retry idempotent operations.

**Idempotent** -- `SET a b`: Running this command multiple times always produces the same result.

**Non-idempotent** -- `LPUSH mylist a`: Running this command multiple times appends duplicate `a` elements to `mylist`.

### Configure appropriate retry count and interval

Set the retry count and interval based on your workload:

-   **Too few retries or too long an interval**: The application may fail to complete operations during brief transient faults.
    
-   **Too many retries or too short an interval**: The application consumes excessive resources and may overwhelm the server.
    

**Strategy**

**Description**

Immediate retry

Retry without delay. Suitable only for faults expected to resolve within milliseconds.

Fixed-interval retry

Wait a fixed duration between retries. Can cause request spikes when many clients retry simultaneously.

Exponential backoff

Double the wait time after each attempt. Spreads retries over time and reduces server load.

Randomized backoff

Add random jitter to the backoff interval. Prevents multiple clients from retrying at the same instant after a shared failure event.

### Avoid retry nesting

Retry nesting -- where a retry operation triggers another retry loop -- can cause repeated or unlimited retries. Implement retry logic at a single layer in your application stack.

### Log retry failures

Generate retry logs at the WARN level. Log only when the final retry fails, not on each individual attempt, to avoid log noise.

## Jedis

Use Jedis 4.0.0 or later. The examples below use Jedis 5.0.0.

Add the dependency to your `pom.xml` file:

```
<dependency>
    <groupId>redis.clients</groupId>
    <artifactId>jedis</artifactId>
    <version>5.0.0</version>
</dependency>
```

### Standard or cluster instance in proxy mode (JedisPool)

For standard instances or cluster instances in proxy mode, use `PooledConnectionProvider` with `UnifiedJedis`.

This example retries the `SET` command up to 5 times within 10 seconds, with exponentially increasing wait times. If all retries fail, an exception is thrown.

```
PooledConnectionProvider provider = new PooledConnectionProvider(HostAndPort.from("127.0.0.1:6379"));
int maxAttempts = 5; // Maximum number of retries
Duration maxTotalRetriesDuration = Duration.ofSeconds(10); // Maximum total retry duration
UnifiedJedis jedis = new UnifiedJedis(provider, maxAttempts, maxTotalRetriesDuration);
try {
    System.out.println("set key: " + jedis.set("key", "value"));
} catch (Exception e) {
    // The operation failed after maxAttempts retries or after maxTotalRetriesDuration elapsed.
    e.printStackTrace();
}
```

**Parameter**

**Value in example**

**Description**

`maxAttempts`

5

Maximum number of retry attempts.

`maxTotalRetriesDuration`

10 seconds

Maximum total duration across all retry attempts. Retries stop when this duration is exceeded, even if `maxAttempts` has not been reached.

### Cluster instance in direct connection mode (JedisCluster)

For cluster instances in direct connection mode, use `JedisCluster`. The `maxAttempts` parameter sets the number of retry attempts. The default value is 5. If the operation fails after the maximum number of attempts, an exception is thrown.

```
HostAndPort hostAndPort = HostAndPort.from("127.0.0.1:30001");
int connectionTimeout = 5000;
int soTimeout = 2000;
int maxAttempts = 5;
ConnectionPoolConfig config = new ConnectionPoolConfig();
JedisCluster jedisCluster = new JedisCluster(hostAndPort, connectionTimeout, soTimeout, maxAttempts, config);
try {
    System.out.println("set key: " + jedisCluster.set("key", "value"));
} catch (Exception e) {
    // The operation failed after maxAttempts retries.
    e.printStackTrace();
}
```

**Parameter**

**Value in example**

**Default**

**Description**

`connectionTimeout`

5000

\--

Connection timeout in milliseconds.

`soTimeout`

2000

\--

Socket timeout in milliseconds.

`maxAttempts`

5

5

Maximum number of retry attempts on failure.

## Redisson

Redisson provides two parameters to control retry behavior:

**Parameter**

**Default**

**Description**

`retryAttempts`

3

Number of retry attempts.

`retryInterval`

1500 ms

Interval between retries, in milliseconds.

```
Config config = new Config();
config.useSingleServer()
    .setTimeout(1000)
    .setRetryAttempts(3)
    .setRetryInterval(1500) // ms
    .setAddress("redis://127.0.0.1:6379");
RedissonClient connect = Redisson.create(config);
```

## StackExchange.Redis

StackExchange.Redis supports connection retries only, not command-level retries. Use the `connectRetry` parameter to set the number of reconnection attempts.

```
var conn = ConnectionMultiplexer.Connect("redis0:6380,redis1:6380,connectRetry=3");
```

**Parameter**

**Value in example**

**Description**

`connectRetry`

3

Number of times to retry the initial connection.

For command-level retry logic, use a resilience library such as [Polly](https://github.com/App-vNext/Polly) to wrap individual commands with retry policies.

## Lettuce

Lettuce does not provide parameters for retrying individual commands after a timeout. Instead, it supports two execution reliability modes:

**Mode**

**Behavior**

At-most-once

Each command executes at most once. If the client disconnects and reconnects, pending commands may be lost.

At-least-once (default)

Each command executes at least once. The client retries commands to ensure successful execution. If a master-replica switchover occurs while the client is retrying, retry commands may accumulate. After the switchover completes, instance CPU utilization may surge.

The `autoReconnect` setting determines the execution mode:

```
clientOptions.isAutoReconnect() ? Reliability.AT_LEAST_ONCE : Reliability.AT_MOST_ONCE;
```

For more information, see [Client-Options](https://github.com/lettuce-io/lettuce-core/wiki/Client-Options) and [Command execution reliability](https://github.com/lettuce-io/lettuce-core/wiki/Command-execution-reliability).

## References

-   [Use a client to connect to an instance](/help/en/redis/user-guide/use-a-client-to-connect-to-an-apsaradb-for-redis-instance#concept-dys-yvb-5db)
    
-   [Use a client to connect to an instance for which TLS (SSL) encryption is enabled](/help/en/redis/user-guide/use-a-client-to-connect-to-an-apsaradb-for-redis-instance-that-has-ssl-encryption-enabled#task-2103865)

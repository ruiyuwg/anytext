This topic explains how to diagnose and resolve the `Cannot assign requested address` error that occurs when connecting to Tair (Redis OSS-compatible) instances using short-lived connections.

## **Quick solution**

Use persistent connections instead of short-lived connections. For PHP applications using phpredis, replace `connect()` with `pconnect()`:

```
// Replace this:
$redis->connect($host, $port);

// With this:
$redis->pconnect($host, $port, 0, null, 0, 0, ['auth' => [$password]]);
```

## Problem overview

Aspect

Details

Error message

`Cannot assign requested address`

Affected scenarios

High concurrency with short-lived connections

Root cause

TCP port exhaustion due to TIME\_WAIT connections

Recommended solution

Use persistent connections or connection pooling

## Prerequisites

Before troubleshooting, ensure you have:

-   Access to the client machine (ECS instance) running your application
    
-   Root or sudo privileges for kernel parameter modifications
    
-   Knowledge of your application's Redis client library
    

## Symptoms

You may encounter this error when:

-   Your application creates a new connection for each request
    
-   Your application handles high concurrent traffic
    
-   You see many TCP connections in TIME\_WAIT state on the client machine
    

To check for TIME\_WAIT connections, run:

```
ss -tan state time-wait | wc -l
```

If the count approaches your available port range (typically 28,232 ports by default), you are experiencing port exhaustion.

## Cause

When you use short-lived connections to access Tair, each request creates a new TCP connection. After the connection closes, the TCP socket enters the TIME\_WAIT state for approximately 60 seconds (as defined by the TCP protocol) before the port becomes available again.

In high concurrency scenarios, if connections are created and closed faster than ports can be recycled, the client runs out of available ports, resulting in the `Cannot assign requested address` error.

## Solutions

### Solution 1: Use persistent connections (Recommended)

Persistent connections or connection pooling maintains connections across requests, dramatically reducing the number of TCP connections and eliminating port exhaustion.

Benefits:

-   Eliminates TIME\_WAIT accumulation
    
-   Reduces connection latency
    
-   Lowers CPU overhead from TCP handshakes
    

#### PHP with phpredis

```
<?php
// Short-lived connection (causes the error)
$redis = new Redis();
$redis->connect($host, $port);
$redis->auth($password);

// Persistent connection (recommended)
$redis = new Redis();
$redis->pconnect($host, $port, 0, null, 0, 0, ['auth' => [$password]]);
```

Parameters for pconnect:

Parameter

Description

Recommended value

host

Tair instance endpoint

Your instance endpoint

port

Tair instance port

6379 (default)

timeout

Connection timeout in seconds

0 (no timeout)

persistent\_id

Persistent connection identifier

null

retry\_interval

Retry interval in milliseconds

0

read\_timeout

Read timeout in seconds

0

auth

Authentication options

`['auth' => [$password]]`

**Note**

For phpredis 5.3.0 or later, pass the password in the auth options array to prevent NOAUTH errors during reconnection.

#### Python with redis-py

```
import redis

# Connection pool (recommended)
pool = redis.ConnectionPool(
    host='your-tair-endpoint',
    port=6379,
    password='your-password',
    max_connections=10,
    decode_responses=True
)

# Reuse the pool across requests
r = redis.Redis(connection_pool=pool)
r.set('key', 'value')
```

#### Node.js with ioredis

```
const Redis = require('ioredis');

// Single persistent connection (recommended)
const redis = new Redis({
  host: 'your-tair-endpoint',
  port: 6379,
  password: 'your-password',
  lazyConnect: true,
  keepAlive: 10000
});

// For multiple connections, use a cluster or pool
```

### Solution 2: Adjust TCP kernel parameters

If modifying your application code is difficult, you can adjust the `tcp_max_tw_buckets` kernel parameter to limit TIME\_WAIT connections. This solution provides quick high availability (HA) but is less optimal than using persistent connections.

Steps:

1.  Log on to your Elastic Compute Service (ECS) instance where the client application runs.
    
2.  Check current TCP settings:
    
    ```
    sysctl net.ipv4.tcp_max_tw_buckets net.ipv4.ip_local_port_range
    ```
    
    Example output:
    
    ```
    net.ipv4.tcp_max_tw_buckets = 262144
    net.ipv4.ip_local_port_range = 32768    60999
    ```
    
3.  Set `tcp_max_tw_buckets` to a value smaller than your port range start value:
    
    ```
    sysctl -w net.ipv4.tcp_max_tw_buckets=10000
    ```
    
4.  To make this change persistent across reboots, add the following line to `/etc/sysctl.conf`:
    
    ```
    net.ipv4.tcp_max_tw_buckets = 10000
    ```
    
5.  Apply the changes:
    
    ```
    sysctl -p
    ```
    

Limitations:

-   If the server is in LAST\_ACK state when retransmitting packets, new connections using the same 5-tuple may fail
    
-   This is a workaround, not a complete solution
    
-   Persistent connections remain the recommended approach
    

### Choose the right solution

Scenario

Recommended solution

New application development

Persistent connections

Existing code, easy to modify

Persistent connections

Complex legacy codebase

TCP parameter adjustment

Containerized applications

Persistent connections

Temporary quick fix needed

TCP parameter adjustment

## Best practices and warnings

### Deprecated TCP parameters

The `tcp_tw_recycle` parameter was removed in Linux kernel 4.12. Do not use solutions that depend on `tcp_tw_recycle` or `tcp_tw_reuse`, especially if your environment uses:

-   Network Address Translation (NAT)
    
-   Linux Virtual Server (LVS)
    
-   Load balancers
    
-   Kubernetes or container orchestration platforms
    

### Monitoring recommendations

Monitor these metrics to prevent future issues:

-   TIME\_WAIT connection count on client machines
    
-   Redis connected clients (`INFO clients`)
    
-   Connection errors in application logs
    
-   Port utilization on client machines
    

## Applicable products

-   [Tair (Redis OSS-compatible)](/help/en/redis/product-overview/what-is-apsaradb-for-redis)

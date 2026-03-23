Direct connection mode connects a client to the data servers of a Tair (Redis OSS-Compatible) cluster instance using the native Redis Cluster protocol. This bypasses the proxy layer, reduces response latency, and enables seamless migration from self-managed Redis Cluster deployments.

## Direct connection vs. proxy mode

**Aspect**

**Direct connection mode**

**Proxy mode**

Latency

Lower (no proxy hop)

Slightly higher

Client requirement

Must support the Redis Cluster protocol

Any Redis client

Scalability

Client manages topology awareness

Transparent to the client

High availability

Client handles redirections

Proxy handles failover

For more information about proxy mode, see [Features of proxy nodes](/help/en/redis/product-overview/features-of-proxy-nodes).

## How it works

When direct connection mode is enabled, Tair (Redis OSS-Compatible) allocates a virtual IP address (VIP) to the master node of each data shard. A Domain Name System (DNS) server resolves the private endpoint to the VIP of a random data shard. The client then uses this VIP to manage instance data based on the Redis Cluster protocol.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6724712771/CAEQMxiBgMCWocD6pxkiIDQwOWY2ZGU1YzhlNzQwNGU4NDI0YmU4M2VlOWExYjQ54707971_20241014100011.613.svg)

## Prerequisites

Before you begin, ensure that you have:

-   A Tair (Redis OSS-Compatible) cluster instance with direct connection mode enabled. For more information, see [Enable the direct connection mode](/help/en/redis/user-guide/enable-the-direct-connection-mode#task-2362225)
    
-   The client IP address added to a whitelist. For more information, see [Configure whitelists](/help/en/redis/getting-started/step-2-configure-whitelists#concept-lmv-qhf-vdb)
    
-   An Elastic Compute Service (ECS) instance in the same virtual private cloud (VPC) as the cluster instance
    

## Supported client libraries

The following client libraries support the Redis Cluster protocol and work with direct connection mode.

**Client**

**Language**

**Version tested**

**GitHub**

**Notes**

Jedis

Java

4.3.0

[jedis](https://github.com/xetorthio/jedis/wiki/Getting-started)

Recommended for Spring Data Redis

Lettuce

Java

6.3.0.RELEASE or later

[lettuce-core](https://github.com/lettuce-io/lettuce-core/releases)

Requires TCP keepalive tuning. See [Lettuce parameter reference](#f82a503975caz)

redis-py

Python

4.4.1

[redis-py](https://github.com/redis/redis-py)

Use `RedisCluster` class

PhpRedis

PHP

5.3.7

[phpredis](https://github.com/phpredis/phpredis)

\-

StackExchange.Redis

.NET

2.6.90

\-

Does not support SELECT (DB0 only)

node-redis

Node.js

4.5.1

\-

Supply credentials in both `rootNodes` and `defaults`

go-redis

Go

9.5.1 (9.0 or later required)

\-

Versions earlier than 9.0 cause incompatibility errors

> If a client does not support the Redis Cluster protocol, it cannot redirect requests to the correct shard. This may result in data retrieval failures. For a full list of compatible clients, see the [Clients](https://redis.io/clients) page on the Redis website.

## Usage notes

-   Different instance architectures support different sets of native Redis commands. The cluster architecture imposes limits on Lua scripts. For more information, see [Limits on commands supported by cluster instances and read/write splitting instances](/help/en/redis/developer-reference/limits-on-commands-supported-by-cluster-and-read-write-splitting-instances#concept-2353537).
    
-   If you change the configurations of a cluster instance in direct connection mode, slot migration is performed. During migration, the client may receive `MOVED` and `TRYAGAIN` errors when accessing the slots being migrated. Configure a retry mechanism for the client. For more information, see [Retry mechanisms for clients](/help/en/redis/use-cases/retry-mechanisms-for-redis-clients#concept-2107101). For more information, see [Change the configurations of an instance](/help/en/redis/user-guide/change-the-configurations-of-an-instance/#concept-mgf-z25-tdb).
    
-   The SELECT command works in direct connection mode. However, some Redis Cluster clients, such as StackExchange.Redis, do not support SELECT. With these clients, only DB0 is available.
    
-   Private endpoints provide access only over the Alibaba Cloud internal network. Both [password-free access](/help/en/redis/user-guide/enable-password-free-access#concept-ttq-dst-j2b) and [account and password authentication](/help/en/redis/user-guide/create-and-manage-database-accounts#task-kth-pr4-hfb) are supported.
    

## Connect with redis-cli

Include the `-c` parameter to enable cluster mode when connecting through a private endpoint. Without it, the connection fails.

```
./redis-cli -h r-bp1zxszhcgatnx****.redis.rds.aliyuncs.com -p 6379 -c
```

Authenticate with your database account:

```
AUTH testaccount:Rp829dlwa
```

For more information, see [Use redis-cli to connect to an instance](/help/en/redis/user-guide/use-redis-cli-to-connect-to-an-apsaradb-for-redis-instance).

## Connect with Jedis

The following examples use Jedis 4.3.0. For more information, visit [GitHub](https://github.com/xetorthio/jedis/wiki/Getting-started).

### Custom connection pool (recommended)

A custom connection pool gives control over connection limits. In direct connection mode, each client connects directly to individual shards. Set pool sizes so that the total connections across all clients do not exceed the maximum connections per shard: **Number of clients x MaxTotal < Maximum connections to a single shard**.

**Parameter**

**Value**

**Description**

`MaxTotal`

30

Maximum number of connections in the pool. Must satisfy the per-shard formula above.

`MaxIdle`

20

Maximum idle connections. Set based on workload.

`MinIdle`

15

Minimum idle connections to maintain.

```
import redis.clients.jedis.*;
import java.util.HashSet;
import java.util.Set;

public class DirectTest {
    private static final int DEFAULT_TIMEOUT = 2000;
    private static final int DEFAULT_REDIRECTIONS = 5;
    private static final ConnectionPoolConfig config = new ConnectionPoolConfig();

    public static void main(String args[]) {
        // Number of clients x MaxTotal < Maximum connections to a single shard.
        config.setMaxTotal(30);
        config.setMaxIdle(20);
        config.setMinIdle(15);

        // Private endpoint of the cluster instance.
        String host = "r-bp1xxxxxxxxxxxx.redis.rds.aliyuncs.com";
        int port = 6379;
        // Password for the cluster instance.
        String password = "xxxxx";

        Set<HostAndPort> jedisClusterNode = new HashSet<HostAndPort>();
        jedisClusterNode.add(new HostAndPort(host, port));
        JedisCluster jc = new JedisCluster(jedisClusterNode, DEFAULT_TIMEOUT, DEFAULT_TIMEOUT, DEFAULT_REDIRECTIONS,
            password, "clientName", config);

        jc.set("key", "value");
        jc.get("key");

        jc.close();     // Close the connection and release resources when the application exits.
    }
}
```

### Default connection pool

```
import redis.clients.jedis.ConnectionPoolConfig;
import redis.clients.jedis.HostAndPort;
import redis.clients.jedis.JedisCluster;
import java.util.HashSet;
import java.util.Set;

public class DirectTest{
    private static final int DEFAULT_TIMEOUT = 2000;
    private static final int DEFAULT_REDIRECTIONS = 5;
    private static final ConnectionPoolConfig DEFAULT_CONFIG = new ConnectionPoolConfig();

    public static void main(String args[]){

        // Private endpoint of the cluster instance.
        String host = "r-bp1xxxxxxxxxxxx.redis.rds.aliyuncs.com";
        int port = 6379;
        String password = "xxxx";

        Set<HostAndPort>  jedisClusterNode = new HashSet<HostAndPort>();
        jedisClusterNode.add(new HostAndPort(host, port));

        JedisCluster jc = new JedisCluster(jedisClusterNode, DEFAULT_TIMEOUT, DEFAULT_TIMEOUT,
            DEFAULT_REDIRECTIONS,password, "clientName", DEFAULT_CONFIG);

        jc.set("key","value");
        jc.get("key");

        jc.close();     // Close the connection and release resources when the application exits.
    }
}
```

## Connect with PhpRedis

The following example uses PhpRedis 5.3.7. For more information, visit [GitHub](https://github.com/phpredis/phpredis).

```
<?php
 // Private endpoint and port of the cluster instance.
 $array = ['r-bp1xxxxxxxxxxxx.redis.rds.aliyuncs.com:6379'];
 // Password for the cluster instance.
 $pwd = "xxxx";

 // Connect to the cluster instance with the password.
 $obj_cluster = new RedisCluster(NULL, $array, 1.5, 1.5, true, $pwd);

 // Display the connection result.
 var_dump($obj_cluster);

 if ($obj_cluster->set("foo", "bar") == false) {
     die($obj_cluster->getLastError());
 }
 $value = $obj_cluster->get("foo");
 echo $value;
 ?>
```

## Connect with redis-py

The following example uses Python 3.9 and redis-py 4.4.1. For more information, visit [GitHub](https://github.com/redis/redis-py).

```
# !/usr/bin/env python
# -*- coding: utf-8 -*-
from redis.cluster import RedisCluster
# Replace with the endpoint and port of the instance.
host = 'r-bp10noxlhcoim2****.redis.rds.aliyuncs.com'
port = 6379
# Replace with the username and password of the instance.
user = 'testaccount'
pwd = 'Rp829dlwa'
rc = RedisCluster(host=host, port=port, username=user, password=pwd)
# Perform operations after connecting. Example: set and get.
rc.set('foo', 'bar')
print(rc.get('foo'))
```

## Connect with Spring Data Redis

The following Maven project uses Spring Data Redis 2.4.2. Alternatively, download the [Lettuce](https://github.com/lettuce-io/lettuce-core/releases) or [Jedis](https://github.com/redis/jedis/releases) client manually.

### Step 1: Add Maven dependencies

```
<?xml version="1.0" encoding="UTF-8"?>
<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 https://maven.apache.org/xsd/maven-4.0.0.xsd">
    <modelVersion>4.0.0</modelVersion>
    <parent>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-parent</artifactId>
        <version>2.4.2</version>
        <relativePath/> <!-- lookup parent from repository -->
    </parent>
    <groupId>com.aliyun.tair</groupId>
    <artifactId>spring-boot-example</artifactId>
    <version>0.0.1-SNAPSHOT</version>
    <name>spring-boot-example</name>
    <description>Demo project for Spring Boot</description>
    <properties>
        <java.version>1.8</java.version>
    </properties>
    <dependencies>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-web</artifactId>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-test</artifactId>
            <scope>test</scope>
        </dependency>
        <dependency>
            <groupId>org.springframework.boot</groupId>
            <artifactId>spring-boot-starter-data-redis</artifactId>
        </dependency>
        <dependency>
            <groupId>redis.clients</groupId>
            <artifactId>jedis</artifactId>
        </dependency>
        <dependency>
            <groupId>io.lettuce</groupId>
            <artifactId>lettuce-core</artifactId>
            <version>6.3.0.RELEASE</version>
        </dependency>
        <dependency>
            <groupId>io.netty</groupId>
            <artifactId>netty-transport-native-epoll</artifactId>
            <version>4.1.100.Final</version>
            <classifier>linux-x86_64</classifier>
        </dependency>
    </dependencies>
    <build>
        <plugins>
            <plugin>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-maven-plugin</artifactId>
            </plugin>
        </plugins>
    </build>
</project>
```

### Step 2: Configure the connection

Choose either Jedis (recommended) or Lettuce as the underlying client.

#### Spring Data Redis with Jedis (recommended)

```
@Bean
    JedisConnectionFactory redisConnectionFactory() {
        List<String> clusterNodes = Arrays.asList("r-bp10noxlhcoim2****.redis.rds.aliyuncs.com:6379");
        RedisClusterConfiguration redisClusterConfiguration = new RedisClusterConfiguration(clusterNodes);
        redisClusterConfiguration.setUsername("user");
        redisClusterConfiguration.setPassword("password");


        JedisPoolConfig jedisPoolConfig = new JedisPoolConfig();
        // Number of clients x MaxTotal < Maximum connections to a single shard.
        jedisPoolConfig.setMaxTotal(30);
        jedisPoolConfig.setMaxIdle(20);
        // Disable testOn[Borrow|Return] to avoid extra ping commands.
        jedisPoolConfig.setTestOnBorrow(false);
        jedisPoolConfig.setTestOnReturn(false);

        return new JedisConnectionFactory(redisClusterConfiguration, jedisPoolConfig);
    }
```

#### Spring Data Redis with Lettuce

**Warning**

-   Default Lettuce configurations may cause increased latency and inaccessibility during instance changes. Read the [Lettuce parameter reference](#f82a503975caz) carefully before configuring.
    
-   Use Lettuce 6.3.0.RELEASE or later. For more information, see [\[Notice\] Suggestions for upgrading Lettuce](/help/en/redis/product-overview/notice-on-lettuce-update).
    

```
/**
     * Enable TCP keepalive and configure the following three parameters:
     *  TCP_KEEPIDLE = 30
     *  TCP_KEEPINTVL = 10
     *  TCP_KEEPCNT = 3
     */
    private static final int TCP_KEEPALIVE_IDLE = 30;

    /**
     * TCP_USER_TIMEOUT avoids scenarios where Lettuce remains stuck in a
     * continuous timeout loop during a failure or crash event.
     * refer: https://github.com/lettuce-io/lettuce-core/issues/2082
     */
    private static final int TCP_USER_TIMEOUT = 30;

    @Bean
    public LettuceConnectionFactory redisConnectionFactory() {
        List<String> clusterNodes = Arrays.asList("r-bp10noxlhcoim2****.redis.rds.aliyuncs.com:6379");
        RedisClusterConfiguration redisClusterConfiguration = new RedisClusterConfiguration(clusterNodes);
        redisClusterConfiguration.setUsername("user");
        redisClusterConfiguration.setPassword("password");

        // Config TCP KeepAlive
        SocketOptions socketOptions = SocketOptions.builder()
            .keepAlive(KeepAliveOptions.builder()
                .enable()
                .idle(Duration.ofSeconds(TCP_KEEPALIVE_IDLE))
                .interval(Duration.ofSeconds(TCP_KEEPALIVE_IDLE / 3))
                .count(3)
                .build())
            .tcpUserTimeout(TcpUserTimeoutOptions.builder()
                .enable()
                .tcpUserTimeout(Duration.ofSeconds(TCP_USER_TIMEOUT))
                .build())
            .build();

        ClusterTopologyRefreshOptions topologyRefreshOptions = ClusterTopologyRefreshOptions.builder()
            .enablePeriodicRefresh(Duration.ofSeconds(60))
            .dynamicRefreshSources(false)
            .enableAllAdaptiveRefreshTriggers()
            .adaptiveRefreshTriggersTimeout(Duration.ofSeconds(15)).build();

        LettuceClientConfiguration lettuceClientConfiguration = LettuceClientConfiguration.builder().
            clientOptions(ClusterClientOptions.builder()
                .socketOptions(socketOptions)
                .validateClusterNodeMembership(false)
                .topologyRefreshOptions(topologyRefreshOptions).build()).build();

        return new LettuceConnectionFactory(redisClusterConfiguration, lettuceClientConfiguration);
    }
```

## Connect with .NET (StackExchange.Redis)

The following example uses .NET 6.0 and StackExchange.Redis 2.6.90.

```
using StackExchange.Redis;

class RedisConnSingleton {
    // Endpoint, port, username, and password for the cluster instance.
    private static ConfigurationOptions configurationOptions = ConfigurationOptions.Parse("r-bp10noxlhcoim2****.redis.rds.aliyuncs.com:6379,user=testaccount,password=Rp829dlwa,connectTimeout=2000");
    //the lock for singleton
    private static readonly object Locker = new object();
    //singleton
    private static ConnectionMultiplexer redisConn;
    //singleton
    public static ConnectionMultiplexer getRedisConn()
    {
        if (redisConn == null)
        {
            lock (Locker)
            {
                if (redisConn == null || !redisConn.IsConnected)
                {
                    redisConn = ConnectionMultiplexer.Connect(configurationOptions);
                }
            }
        }
        return redisConn;
    }
}

class Program
{
    static void Main(string[] args)
    {
        ConnectionMultiplexer cm = RedisConnSingleton.getRedisConn();
        var db = cm.GetDatabase();
        db.StringSet("key", "value");
        String ret = db.StringGet("key");
        Console.WriteLine("get key: " + ret);
    }
}
```

## Connect with node-redis

The following example uses Node.js 19.4.0 and node-redis 4.5.1.

Supply credentials in both the `rootNodes` URL and the `defaults` object. The `defaults` credentials authenticate connections to all remaining cluster nodes. Without them, a `NOAUTH` error occurs.

```
import { createCluster } from 'redis';

// Endpoint, port, username, and password for the instance.
// After supplying the username and password in the url parameter,
// also supply them in the defaults parameter.
// The defaults credentials authenticate the remaining nodes.
// Without defaults, a NOAUTH error occurs.

const cluster = createCluster({
    rootNodes: [{
        url: 'redis://testaccount:Rp829dlwa@r-bp10noxlhcoim2****.redis.rds.aliyuncs.com:6379'
    }],
    defaults: {
        username: 'testaccount',
        password: 'Rp829dlwa'
    }
});

cluster.on('error', (err) => console.log('Redis Cluster Error', err));

await cluster.connect();

await cluster.set('key', 'value');
const value = await cluster.get('key');
console.log('get key: %s', value);

await cluster.disconnect();
```

## Connect with go-redis

The following example uses Go 1.19.7 and go-redis 9.5.1.

**Important**

Use go-redis 9.0 or later. Earlier versions may cause incompatibility errors when connecting through a private endpoint. For more information, see [Common errors and troubleshooting](/help/en/redis/support/common-errors-and-troubleshooting#task-2277868).

```
package main

import (
	"context"
	"fmt"
	"github.com/go-redis/redis/v9"
)

var ctx = context.Background()

func main() {
	rdb := redis.NewClusterClient(&redis.ClusterOptions{
		Addrs:    []string{"r-bp10noxlhcoim2****.redis.rds.aliyuncs.com:6379"},
		Username: "testaccount",
		Password: "Rp829dlwa",
	})

	err := rdb.Set(ctx, "key", "value", 0).Err()
	if err != nil {
		panic(err)
	}

	val, err := rdb.Get(ctx, "key").Result()
	if err != nil {
		panic(err)
	}
	fmt.Println("key", val)
}
```

## Connect with Lettuce (standalone)

**Warning**

-   Default Lettuce configurations may cause increased latency and inaccessibility during instance changes. Read the [Lettuce parameter reference](#f82a503975caz) carefully before configuring.
    
-   Use Lettuce 6.3.0.RELEASE or later. For more information, see [\[Notice\] Suggestions for upgrading Lettuce](/help/en/redis/product-overview/notice-on-lettuce-update).
    

### Step 1: Add Maven dependencies

```
<dependency>
            <groupId>io.lettuce</groupId>
            <artifactId>lettuce-core</artifactId>
            <version>6.3.0.RELEASE</version>
        </dependency>
        <dependency>
            <groupId>io.netty</groupId>
            <artifactId>netty-transport-native-epoll</artifactId>
            <version>4.1.65.Final</version>
            <classifier>linux-x86_64</classifier>
        </dependency>
```

### Step 2: Add the connection code

Replace the values of `host`, `port`, and `password` with the actual instance information.

```
import io.lettuce.core.RedisURI;
import io.lettuce.core.SocketOptions;
import io.lettuce.core.cluster.ClusterClientOptions;
import io.lettuce.core.cluster.ClusterTopologyRefreshOptions;
import io.lettuce.core.cluster.RedisClusterClient;
import io.lettuce.core.cluster.api.StatefulRedisClusterConnection;

import java.time.Duration;

public class ClusterDemo {
    /**
     * Enable TCP keepalive and configure the following three parameters:
     *  TCP_KEEPIDLE = 30
     *  TCP_KEEPINTVL = 10
     *  TCP_KEEPCNT = 3
     */
    private static final int TCP_KEEPALIVE_IDLE = 30;

    /**
     * TCP_USER_TIMEOUT avoids situations where Lettuce remains stuck in a
     * continuous timeout loop during a failure or crash event.
     * refer: https://github.com/lettuce-io/lettuce-core/issues/2082
     */
    private static final int TCP_USER_TIMEOUT = 30;

    public static void main(String[] args) throws Exception {
        // Replace with the actual instance information.
        String host = "r-bp1ln3c4kopj3l****.redis.rds.aliyuncs.com";
        int port = 6379;
        String password = "Da****3";

        RedisURI redisURI = RedisURI.Builder.redis(host)
                .withPort(port)
                .withPassword(password)
                .build();

        ClusterTopologyRefreshOptions refreshOptions = ClusterTopologyRefreshOptions.builder()
                .enablePeriodicRefresh(Duration.ofSeconds(60))
                .dynamicRefreshSources(false)
                .enableAllAdaptiveRefreshTriggers()
                .adaptiveRefreshTriggersTimeout(Duration.ofSeconds(15)).build();

        // Config TCP KeepAlive
        SocketOptions socketOptions = SocketOptions.builder()
                .keepAlive(SocketOptions.KeepAliveOptions.builder()
                        .enable()
                        .idle(Duration.ofSeconds(TCP_KEEPALIVE_IDLE))
                        .interval(Duration.ofSeconds(TCP_KEEPALIVE_IDLE/3))
                        .count(3)
                        .build())
                .tcpUserTimeout(SocketOptions.TcpUserTimeoutOptions.builder()
                        .enable()
                        .tcpUserTimeout(Duration.ofSeconds(TCP_USER_TIMEOUT))
                        .build())
                .build();

        RedisClusterClient redisClient = RedisClusterClient.create(redisURI);
        redisClient.setOptions(ClusterClientOptions.builder()
                .socketOptions(socketOptions)
                .validateClusterNodeMembership(false)
                .topologyRefreshOptions(refreshOptions).build());

        StatefulRedisClusterConnection<String, String> connection = redisClient.connect();
        connection.sync().set("key", "value");
        System.out.println(connection.sync().get("key"));
    }
}
```

Expected output on success:

```
value
```

## Lettuce parameter reference

The following parameters control Lettuce cluster topology refresh and TCP behavior. Incorrect defaults can cause increased latency and inaccessibility during instance changes.

**Parameter**

**Default**

**Recommended**

**Description**

`enablePeriodicRefresh(Duration)`

Disabled

60 seconds

Enables periodic cluster topology refresh. Keeps the local topology view up to date, even for idle persistent connections.

`dynamicRefreshSources(boolean)`

`true`

`false`

When `true`, all nodes returned by CLUSTER NODES refresh topology, increasing server load. When `false`, only the specified endpoint is used. During configuration changes, the endpoint is typically faster and more reliable.

`enableAllAdaptiveRefreshTriggers()`

Disabled

Enabled (required)

Triggers automatic topology refresh when a MOVED message is received. Without this, Lettuce cannot update the local topology after a topology change.

`adaptiveRefreshTriggersTimeout(Duration)`

30s

15s

Limits topology refresh frequency to one refresh per timeout period. Topology changes across nodes are not atomic, so the first refresh may fail. A shorter timeout allows a faster follow-up refresh. Reduce this value further when the number of client applications is small.

`validateClusterNodeMembership(boolean)`

`true`

`false` (required)

When `true`, MOVED redirections only go to nodes listed in CLUSTER NODES output. Set to `false` to allow access to newly added nodes before the local topology is refreshed.

## FAQ

### Why does the `MOVED 4578 172.18.xx.xxx:6379` error occur?

The `MOVED <slot> <IP:Port>` error means the requested key is on a different node. This typically happens when the client does not support the Redis Cluster protocol. Common scenarios include:

-   Connecting with redis-cli without the `-c` option.
    
-   Using the standard `redis-py` client in Python, which does not handle automatic redirection. Use the `redis.cluster.RedisCluster` class instead.
    

For information about other errors, see [Common errors and troubleshooting](/help/en/redis/support/common-errors-and-troubleshooting#task-2277868).

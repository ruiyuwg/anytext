Tair (Redis OSS-compatible) uses a self-developed high availability (HA) service component and does not rely on Sentinel. However, to improve instance compatibility and reduce code modifications, Tair (Redis OSS-compatible) provides a Sentinel-compatible mode. After you enable this feature, you can connect to Tair (and Redis Open-Source Edition) instances in the same way as you connect to open-source Redis Sentinel.

## Introduction to Redis Sentinel

Redis Sentinel provides monitoring, alerting, and automatic failover services for master and replica instances in open-source Redis. Many business scenarios that use self-managed Redis databases and require high reliability use Sentinel. To facilitate the migration of Redis databases to the cloud in these scenarios, Alibaba Cloud has developed the Sentinel-compatible mode. After you enable the Sentinel-compatible mode, you can use the following Sentinel-related commands (the Master name in the following commands must be fixed as `redis_master`):

Command

Description

SENTINEL sentinels

Queries Sentinel instances of a specified master and the status of these Sentinel instances. The following syntax is used:

```
SENTINEL sentinels <Name of a master>
```

SENTINEL get-master-addr-by-name

Queries the IP address and port number of a specified master. The following syntax is used:

```
SENTINEL get-master-addr-by-name <Name of a master>
```

For information about the support for Sentinel-related commands in different versions, see [Redis Open-Source Edition command support](/help/en/redis/developer-reference/commands-supported-by-apsaradb-for-redis-community-edition#section-km1-b4x-hnb).

## Prerequisites

-   The [Sentinel-compatible mode](/help/en/redis/user-guide/enable-the-sentinel-compatible-mode) is enabled.
    
-   The IP address of the client (the internal IP address of the ECS instance or the public IP address of the local host) is added to the [instance whitelist](/help/en/redis/user-guide/configure-whitelists#concept-lmv-qhf-vdb).
    

## Connection examples

After you enable the Sentinel-compatible mode, you can connect to an instance in two ways: If password-free access over a virtual private cloud (VPC) is enabled for the instance, you can connect to the instance in password-free mode through Sentinel. If password-free access is not enabled, you need to configure authentication information when connecting.

### Password-free connection through Sentinel

**Note**

For more information about how to enable password-free access over a VPC, see [Enable password-free access over a VPC](/help/en/redis/user-guide/enable-password-free-access#concept-ttq-dst-j2b).

The following example shows how to configure the code for connecting to Alibaba Cloud Redis in Sentinel-compatible mode.

Spring Data Redis

In this example, Spring Data Redis 2.4.2 is used.

```
    @Bean
    public JedisConnectionFactory connectionFactory() {
        RedisSentinelConfiguration sentinelConfig = new RedisSentinelConfiguration()
                .master("redis_master")
                .sentinel("r-bp10noxlhcoim2****.redis.rds.aliyuncs.com", 6379);
        JedisPoolConfig poolConfig = new JedisPoolConfig();
        ...
        JedisConnectionFactory connectionFactory = new JedisConnectionFactory(sentinelConfig, poolConfig);
        return connectionFactory;
    }
```

Parameter description:

-   **master**: the SENTINEL name, which must be fixed as `redis_master`.
    
-   **sentinel**: the VPC endpoint and port number of the instance, separated by a comma (,), such as `"r-bp10noxlhcoim2****.redis.rds.aliyuncs.com", 6379`.
    

redis-py

In this example, Python 3.9 and redis-py 4.3.6 are used.

```
from redis.sentinel import Sentinel
SENTINEL_HOST = "r-bp10noxlhcoim2****.redis.rds.aliyuncs.com"
SENTINEL_PORT = 6379
SENTINEL_MASTER_NAME = "redis_master"

sentinel = Sentinel([(SENTINEL_HOST, SENTINEL_PORT)])
r = sentinel.master_for(SENTINEL_MASTER_NAME, db=0)
r.set('foo', 'bar')
print(r.get('foo'))
```

Parameter description:

-   **SENTINEL\_HOST** and **SENTINEL\_PORT**: the VPC endpoint and port number of the instance.
    
-   **SENTINEL\_MASTER\_NAME**: the SENTINEL name, which must be fixed as `redis_master`.
    

### Password-based connection through Sentinel

The following example shows how to configure the code for connecting to Alibaba Cloud Redis in Sentinel-compatible mode

Java

This example uses the minimum versions of Java clients. The client version requirements are as follows:

-   Jedis 3.6.1 or later.
    
-   Lettuce 6.3.0.RELEASE or later.
    
-   Spring Data Redis 2.5.1 or later. You also need to configure the **spring.redis.sentinel.password** parameter.
    

**Note**

We strongly recommend that you upgrade to the latest stable client version. For the latest version, search [MVN Repository](https://mvnrepository.com/?spm=a2o8d.corp_prod_req_detail.0.0.6e134097j6ODp7).

## Jedis

```
        String masterName = "redis_master";
        Set<String> sentinels = new HashSet<>();
        sentinels.add("r-bp10noxlhcoim2****.redis.rds.aliyuncs.com:6379");
        GenericObjectPoolConfig poolConfig = new GenericObjectPoolConfig();
        String dbPassword = "testaccount:Rp829dlwa";
        String sentinelPassword = "testaccount:Rp829dlwa";
        JedisSentinelPool jedisSentinelPool =
                new JedisSentinelPool(masterName, sentinels, poolConfig,
                        2000, 2000, dbPassword,
                        0, null, 2000, 2000,
                        sentinelPassword, null);
```

## Lettuce

```
    String masterName = "redis_master";
    String sentinelNodes = "r-bp10noxlhcoim2****.redis.rds.aliyuncs.com:6379";
    String sentinelPassword = "testaccount:Rp829dlwa";
    RedisURI redisURI = RedisURI.create("redis-sentinel://" + sentinelPassword + "@" + sentinelNodes + "#" + masterName);
    redisURI.getSentinels().forEach(it -> it.setPassword(sentinelPassword));
    RedisClient client = RedisClient.create(redisURI);
    RedisCommands<String, String> sync = client.connect().sync();
    System.out.println(sync.set("key", "value"));
    System.out.println(sync.get("key"));
    client.close();
```

Parameter description:

-   **masterName**: the SENTINEL name, which must be fixed as `redis_master`.
    
-   **sentinels.add**/**sentinelNodes**: the VPC endpoint and port number of the instance, in the format of `r-bp10noxlhcoim2****.redis.rds.aliyuncs.com:6379`.
    
-   **dbPassword** and **sentinelPassword**: the password of the instance account. The password format varies depending on the account you select. If you forget the password, you can reset it. For more information, see [Modify or reset the password](/help/en/redis/user-guide/change-or-reset-the-password#concept-xqd-p2z-5db).
    
    **Note**
    
    -   Default account (the account named after the instance ID): Enter the password directly.
        
    -   Newly created account: The password format is `<user>:<password>`. The default account also supports this authentication method. For example, if the custom account is `testaccount` and the password is `Rp829dlwa`, the password must be entered as `testaccount:Rp829dlwa`.
        
    

redis-py

In this example, Python 3.9 and redis-py 4.3.6 are used.

```
from redis.sentinel import Sentinel
SENTINEL_HOST = "r-bp10noxlhcoim2****.rds.aliyuncs.com"
SENTINEL_PORT = 6379
SENTINEL_MASTER_NAME = "redis_master"  # Note: This name cannot be changed
SENTINEL_REDIS_PWD = "testaccount:Rp829dlwa"

conf = {
    'password': SENTINEL_REDIS_PWD,
}

sentinel = Sentinel([(SENTINEL_HOST, SENTINEL_PORT)], sentinel_kwargs=conf)
r = sentinel.master_for(SENTINEL_MASTER_NAME, db=0, **conf)
r.set('foo', 'bar')
print(r.get('foo'))
```

Parameter description:

-   **SENTINEL\_HOST** and **SENTINEL\_PORT**: the VPC endpoint and port number of the instance.
    
-   **SENTINEL\_MASTER\_NAME**: the SENTINEL name, which must be fixed as `redis_master`.
    
-   **SENTINEL\_REDIS\_PWD:** the password of the instance account.
    

## **FAQ**

-   Q: I previously used a self-managed Redis Sentinel mode. After switching to the Redis Sentinel-compatible mode, I encountered the `NOAUTH Authentication required` error. How do I resolve this issue?
    
    A: You can enable the **#no\_loose\_sentinel-password-free-access** parameter (set it to **yes**) to implement password-free connection through Sentinel over a VPC connection address without enabling the VPC password-free feature.
    
    If your instance is running Redis 6.0 or earlier, upgrade your client and modify some code to add the Sentinel authentication password, and then try again. For more information, see **Password-based connection through Sentinel** in this topic.
    
-   Q: Why do I receive the error `Unknown sentinel subcommand 'MASTERS'`?
    
    A: The old minor version is not compatible with some commands. [Update the minor version](/help/en/redis/user-guide/update-the-minor-version) and try again.

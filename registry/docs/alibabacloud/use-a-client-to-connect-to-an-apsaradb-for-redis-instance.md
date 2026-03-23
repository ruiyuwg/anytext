Tair (Redis OSS-compatible) instances are fully compatible with open-source Redis. You can connect to a Tair instance using any Redis-compliant client in the same way that you connect to a Redis database.

## Prerequisites

Complete the following operations based on where your client is deployed.

**Client deployment location**

**Operations to complete**

[ECS instance](/help/en/ecs/user-guide/what-is-ecs#EcsWelcome) (recommended)

1.  Make sure that the Elastic Compute Service (ECS) instance and the Tair instance are in the same virtual private cloud (VPC). The instances are in the same VPC if their VPC IDs are the same.
    
    **Note**
    
    -   If the instances are in different VPCs, you can [change the VPC of the ECS instance](/help/en/ecs/user-guide/change-the-vpc-of-an-ecs-instance#task-2526213).
        
    -   The network types of the ECS instance and the Tair instance may be different. For example, the ECS instance is in the classic network and the Tair instance is in a VPC. For information about how to connect an ECS instance to a Tair instance when the instances are in different network types, see [Connect an ECS instance to a Redis instance when they are in different network types](/help/en/redis/connect-an-ecs-instance-to-an-apsaradb-for-redis-instance-in-different-types-of-networks#task-2013087).
        
    
2.  [Obtain the internal IP address of the ECS instance](/help/en/ecs/user-guide/network-faq/#section-vpl-qbg-qgb).
    
3.  You can add the private IP address of the ECS instance [to its whitelist](/help/en/redis/user-guide/configure-whitelists#concept-lmv-qhf-vdb).
    

Local

1.  Obtain the public IP address of your on-premises device. The following commands show how to obtain the public IP address of an on-premises device in different operating systems:
    
    -   Linux: Open the terminal and run the `curl ifconfig.me` command.
        
    -   Windows: Open Command Prompt and run the `curl ip.me` command.
        
    -   macOS: Open the terminal and run the `curl ifconfig.me` command.
        
2.  [Add the public IP address of the on-premises client to a whitelist of the Tair instance](/help/en/redis/user-guide/configure-whitelists#concept-lmv-qhf-vdb).
    
3.  By default, Tair instances provide only internal endpoints. If you want to connect to a Tair instance over the Internet, you must manually [apply for a public endpoint](/help/en/redis/user-guide/apply-for-a-public-endpoint-for-an-apsaradb-for-redis-instance#concept-1096127).
    

## Notes

-   If your instance uses the [cluster architecture](/help/en/redis/product-overview/cluster-master-replica-instances#concept-tds-4mm-tdb) or [read/write splitting architecture](/help/en/redis/product-overview/read-or-write-splitting-instances-1#concept-zm4-3mh-tdb), it provides a proxy node endpoint by default. You can connect to the instance in the same way that you connect to a standard-architecture instance.
    
    **Note**
    
    When you connect to a cluster instance using a [direct connection endpoint](/help/en/redis/user-guide/enable-the-direct-connection-mode#task-2362225), the connection method is the same as connecting to an open-source Redis cluster.
    
-   If [password-free access over a VPC](/help/en/redis/user-guide/enable-password-free-access#concept-ttq-dst-j2b) is enabled for the instance, clients in the same VPC can connect to the instance without a password.
    

## Obtain connection information

When you use a client to connect to a Tair (or Redis Open-Source Edition) instance, you must obtain the following information and set it in your code.

**Information to obtain**

**How to obtain**

Endpoint of the instance

Go to the [Instances](https://kvstore.console.alibabacloud.com/Redis/instance/cn-hangzhou) page, select a region in the top navigation bar, and then click the ID of the target instance. In the **Connection Information** section, you can view the endpoints and ports for different connection types.

**Note**

Instances support multiple endpoint types. We recommend that you use VPC endpoints for higher security and lower network latency. For more information, see [View endpoints](/help/en/redis/user-guide/view-endpoints#concept-apt-fkl-5gb).

Port

The default port is 6379. You can also customize the port. For more information, see [Change an endpoint or port](/help/en/redis/user-guide/change-the-endpoint-or-port-number-of-an-instance#concept-yyt-svt-j2b).

Account of the instance (not required for some clients)

By default, an instance has an account named after the instance ID, such as r-bp10noxlhcoim2\*\*\*\*. You can also create a new account and grant permissions to it. For more information, see [Create and manage accounts](/help/en/redis/user-guide/create-and-manage-database-accounts#task-kth-pr4-hfb).

Password of the account

The password format varies based on the selected account:

-   Default account (the account named after the instance ID): Enter only the password.
    
-   Newly created account: The password format is `<user>:<password>`. For example, if the custom account is `testaccount` and the password is `Rp829dlwa`, you must enter `testaccount:Rp829dlwa`.
    

**Note**

-   If you use a third-party database management tool such as Remote Desktop Manager (RDM) to connect to an instance, enter the password in the `user:password` format.
    
-   If you forget your password, you can reset it. For more information, see [Change or reset the password](/help/en/redis/user-guide/change-or-reset-the-password#concept-xqd-p2z-5db).
    

## Common client examples

For a list of clients that Tair (and Redis Open-Source Edition) supports, see [Redis Clients](http://redis.io/clients).

**Important**

This section provides only sample code on how to use common clients to connect to Tair.

### **Jedis**

This example uses Maven to create the project. You can also manually download the [Jedis](https://github.com/redis/jedis/releases) client.

1.  Open a compiler and create a project.
    
2.  Add the following code to the `pom.xml` file.
    
    This example uses Jedis 4.3.0.
    
    ```
    <dependency>
        <groupId>redis.clients</groupId>
        <artifactId>jedis</artifactId>
        <version>4.3.0</version>
    </dependency>
    ```
    
3.  Enter the following code in the editor and modify the code based on the comments.
    
    ```
    import redis.clients.jedis.Jedis;
    import redis.clients.jedis.JedisPool;
    import redis.clients.jedis.JedisPoolConfig;
    
    public class JedisExample {
        public static void main(String[] args) {
            JedisPoolConfig config = new JedisPoolConfig();
            // The maximum number of idle connections. Evaluate this value as needed. The value cannot exceed the maximum number of connections that is supported by the Tair instance.
            config.setMaxIdle(200);
            // The maximum number of connections. Evaluate this value as needed. The value cannot exceed the maximum number of connections that is supported by the Tair instance.
            config.setMaxTotal(300);
            config.setTestOnBorrow(false);
            config.setTestOnReturn(false);
            // Replace the values of the host and password parameters with the endpoint and password of the instance.
            String host = "r-bp1s1bt2tlq3p1****pd.redis.rds.aliyuncs.com";
            // For a default account, you can directly enter the password. For a newly created account, the password must be in the Account:Password format. For example, if the new account is testaccount and the password is Rp829dlwa, enter testaccount:Rp829dlwa.
            String password = "r-bp1s1bt2tlq3p1****:Database123";
            JedisPool pool = new JedisPool(config, host, 6379, 3000, password);
            Jedis jedis = null;
            try {
                jedis = pool.getResource();
                // Perform operations. The following code provides an example.
                jedis.set("foo10", "bar");
                System.out.println(jedis.get("foo10"));
                jedis.zadd("sose", 0, "car");
                jedis.zadd("sose", 0, "bike");
                System.out.println(jedis.zrange("sose", 0, -1));
            }
            catch (Exception e) {
                // Handle a timeout or other exceptions.
                e.printStackTrace();
            }
            finally {
                if (jedis != null) {
                    jedis.close();
                }
            }
            pool.destroy();    // When the application exits and resources must be destroyed, call this method. This method disconnects the connection and releases the resources.
        }
    }
    ```
    
4.  Run the project. The following output is expected:
    
    ```
    bar
    [bike, car]
    ```
    
    **Important**
    
    When you use Jedis, errors may occur if you set invalid parameters or use some features in an improper way. For information about how to troubleshoot these errors, see [Common errors](/help/en/redis/support/common-errors-and-troubleshooting).
    

### **PhpRedis**

1.  Download and install the [PhpRedis](https://github.com/phpredis/phpredis) client.
    
2.  Enter the following code in the PHP editor and modify the code based on the comments.
    
    This example uses PHP 8.2.1 and PhpRedis 5.3.7.
    
    ```
    <?php
     /* Replace the values of the host and port parameters with the endpoint and port of the instance. */
     $host = "r-bp10noxlhcoim2****.redis.rds.aliyuncs.com";
     $port = 6379;
     /* Replace the values of the user and pwd parameters with the account and password of the instance. */
     $user = "testaccount";
     $pwd = "Rp829dlwa";
     $redis = new Redis();
     if ($redis->connect($host, $port) == false) {
             die($redis->getLastError());
       }
     if ($redis->auth([$user, $pwd]) == false) {
             die($redis->getLastError());
      }
      /* After the authentication is complete, you can perform database operations. The following code provides an example on how to use SET and GET. */
     if ($redis->set("foo", "bar") == false) {
             die($redis->getLastError());
     }
     $value = $redis->get("foo");
     echo $value;
     ?>
    ```
    
3.  Run the code.
    
    **Note**
    
    Common errors and solutions:
    
    -   `Cannot assign requested address`: For information about the cause of and solution to this error, see [The "Cannot assign requested address" error is reported](/help/en/redis/support/what-do-i-do-if-the-cannot-assign-requested-address-error-is-returned-when-i-access-apsaradb-for-redis-over-short-lived-connections).
        
    -   `redis protocol error, got ' ' as reply type byte`: Upgrade your PhpRedis client. For more information, see [phpredis/phpredis#1585](https://github.com/phpredis/phpredis/issues/1585).
        
    

### **redis-py**

1.  Download and install the [redis-py](https://github.com/andymccurdy/redis-py) client.
    
2.  Enter the following code in the Python editor and modify the code based on the comments.
    
    This example uses Python 3.9 and redis-py 4.4.1.
    
    ```
    #!/usr/bin/env python
    #-*- coding: utf-8 -*-
    import redis
    # Replace the values of the host and port parameters with the endpoint and port of the instance.
    host = 'r-bp10noxlhcoim2****.redis.rds.aliyuncs.com'
    port = 6379
    # Replace the value of the pwd parameter with the password of the instance.
    # For a default account, you can directly enter the password. For a newly created account, the password must be in the Account:Password format. For example, if the new account is testaccount and the password is Rp829dlwa, enter testaccount:Rp829dlwa.
    pwd = 'testaccount:Rp829dlwa'
    r = redis.Redis(host=host, port=port, password=pwd)
    # After the connection is established, you can perform database operations. The following code provides an example on how to use SET and GET.
    r.set('foo', 'bar')
    print(r.get('foo'))
    ```
    
3.  Run the code.
    

### **Spring Data Redis**

This example uses Maven to create the project. You can also manually download the [Lettuce](https://github.com/lettuce-io/lettuce-core/releases) or [Jedis](https://github.com/redis/jedis/releases) client.

1.  Open a compiler and create a project.
    
2.  Add the following to the `pom` file and download Lettuce or Jedis.
    
    **Important**
    
    If you use Lettuce, we recommend that you use version 6.3.0.RELEASE or later and set the TCP\_USER\_TIMEOUT parameter. This prevents blackhole filtering issues on the Lettuce client.
    
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
    
3.  Enter the following code in the Spring Data Redis editor and modify the code based on the comments.
    
    This example uses Spring Data Redis 2.4.2.
    
    -   Spring Data Redis with Jedis
        
        ```
        @Bean
             JedisConnectionFactory redisConnectionFactory() {
                 RedisStandaloneConfiguration config = new RedisStandaloneConfiguration("host", port);
         
                 JedisPoolConfig jedisPoolConfig = new JedisPoolConfig();
                 // The maximum number of connections. Set this parameter as needed. The value cannot exceed the maximum number of connections that is supported by the instance type.
                 jedisPoolConfig.setMaxTotal(30);
                 // The maximum number of idle connections. Set this parameter as needed. The value cannot exceed the maximum number of connections that is supported by the instance type.
                 jedisPoolConfig.setMaxIdle(20);
                 // Disable testOn[Borrow|Return] to prevent additional PING commands from being generated.
                 jedisPoolConfig.setTestOnBorrow(false);
                 jedisPoolConfig.setTestOnReturn(false);
         
                 JedisClientConfiguration jedisClientConfiguration = JedisClientConfiguration.builder().usePooling().poolConfig(
                     jedisPoolConfig).build();
         
                 return new JedisConnectionFactory(config, jedisClientConfiguration);
             }
        ```
        
    -   Spring Data Redis with Lettuce (including setting the TCP\_USER\_TIMEOUT parameter)
        
        ```
        @Configuration
        public class BeanConfig {
            /**
             *  Enable TCP_KEEPALIVE and configure the following three parameters:
             *  TCP_KEEPIDLE = 30
             *  TCP_KEEPINTVL = 10
             *  TCP_KEEPCNT = 3
             */
            private static final int TCP_KEEPALIVE_IDLE = 30;
        
            /**
             * The TCP_USER_TIMEOUT parameter can prevent Lettuce from continuously timing out in case of a failure or breakdown.
             * refer: https://github.com/lettuce-io/lettuce-core/issues/2082
             */
            private static final int TCP_USER_TIMEOUT = 30;
        
            @Bean
            LettuceConnectionFactory redisConnectionFactory() {
                RedisStandaloneConfiguration config = new RedisStandaloneConfiguration();
                config.setHostName("r-bp1y4is8svonly****pd.redis.rds.aliyuncs.com");
                config.setPort(6379);
                config.setUsername("r-bp1y4is8svonly****");
                config.setPassword("Da****3");
        
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
                LettuceClientConfiguration lettuceClientConfiguration = LettuceClientConfiguration.builder().clientOptions(
                    ClientOptions.builder().socketOptions(socketOptions).build()).build();
                return new LettuceConnectionFactory(config, lettuceClientConfiguration);
            }
        
            @Bean
            RedisTemplate<String, Object> redisTemplate(RedisConnectionFactory connectionFactory) {
                RedisTemplate<String, Object> template = new RedisTemplate<>();
                template.setConnectionFactory(connectionFactory);
                return template;
            }
        }
        ```
        
    
4.  Run the code.
    

### **C or C++**

1.  Download and install the [C client](https://github.com/redis/hiredis/releases).
    
2.  Enter the following code in the C or C++ editor and modify the code based on the comments.
    
    This example uses HiRedis 1.1.0.
    
    ```
    #include <stdio.h>
    #include <stdlib.h>
    #include <string.h>
    #include <hiredis.h>
    int main(int argc, char **argv) {
        unsigned int j;
        redisContext *c;
        redisReply *reply;
        if (argc < 4) {
                printf("Usage: example r-bp10noxlhcoim2****.redis.rds.aliyuncs.com 6379 instance_id password\n");
                exit(0);
        }
        const char *hostname = argv[1];
        const int port = atoi(argv[2]);
        const char *instance_id = argv[3];
        const char *password = argv[4];
        struct timeval timeout = { 1, 500000 }; // 1.5 seconds
        c = redisConnectWithTimeout(hostname, port, timeout);
        if (c == NULL || c->err) {
        if (c) {
                printf("Connection error: %s\n", c->errstr);
                redisFree(c);
        } else {
            printf("Connection error: can't allocate redis context\n");
        }
        exit(1);
        }
        /* AUTH */
        reply = redisCommand(c, "AUTH %s", password);
        printf("AUTH: %s\n", reply->str);
        freeReplyObject(reply);
        /* PING server */
        reply = redisCommand(c,"PING");
        printf("PING: %s\n", reply->str);
        freeReplyObject(reply);
        /* Set a key */
        reply = redisCommand(c,"SET %s %s", "foo", "hello world");
        printf("SET: %s\n", reply->str);
        freeReplyObject(reply);
        /* Set a key using binary safe API */
        reply = redisCommand(c,"SET %b %b", "bar", (size_t) 3, "hello", (size_t) 5);
        printf("SET (binary API): %s\n", reply->str);
        freeReplyObject(reply);
        /* Try a GET and two INCR */
        reply = redisCommand(c,"GET foo");
        printf("GET foo: %s\n", reply->str);
        freeReplyObject(reply);
        reply = redisCommand(c,"INCR counter");
        printf("INCR counter: %lld\n", reply->integer);
        freeReplyObject(reply);
        /* again ... */
        reply = redisCommand(c,"INCR counter");
        printf("INCR counter: %lld\n", reply->integer);
        freeReplyObject(reply);
        /* Create a list of numbers, from 0 to 9 */
        reply = redisCommand(c,"DEL mylist");
        freeReplyObject(reply);
        for (j = 0; j < 10; j++) {
                char buf[64];
                snprintf(buf,64,"%d",j);
                reply = redisCommand(c,"LPUSH mylist element-%s", buf);
                freeReplyObject(reply);
            }
        /* Let's check what we have inside the list */
        reply = redisCommand(c,"LRANGE mylist 0 -1");
        if (reply->type == REDIS_REPLY_ARRAY) {
                for (j = 0; j < reply->elements; j++) {
                printf("%u) %s\n", j, reply->element[j]->str);
        }
        }
        freeReplyObject(reply);
        /* Disconnects and frees the context */
        redisFree(c);
        return 0;
    }
    ```
    
3.  Compile the code.
    
    ```
    gcc -o example -g example.c -I /usr/local/include/hiredis -lhiredis
    ```
    
4.  Run the test to establish the connection.
    
    ```
     ./example r-bp10noxlhcoim2****.redis.rds.aliyuncs.com 6379 r-bp10noxlhcoim2**** password
    ```
    

### **.NET**

1.  Download and install version 2.7.20 or later of the [StackExchange.Redis](https://github.com/StackExchange/StackExchange.Redis?spm=5176.100239.blogcont272212.10.IsQwET&file=StackExchange.Redis) client. For more information, see [Notice on update of StackExchange.Redis](/help/en/redis/product-overview/notice-suggestions-for-upgrading-stackexchange-redis-clients).
    
    **Important**
    
    We recommend that you do not use the ServiceStack Redis or CSRedis client.
    
    -   If you use ServiceStack Redis and run into issues related to the client, you must purchase technical support from ServiceStack.
        
    -   The support for the CSRedis client has been ended.
        
    
2.  Enter the following code in the StackExchange.Redis editor and modify the code based on the comments.
    
    This example uses StackExchange.Redis 2.7.20.
    
    ```
    using StackExchange.Redis;
     // Set the endpoint, port, and password of the instance.
     private static ConfigurationOptions configurationOptions = ConfigurationOptions.Parse("r-bp10noxlhcoim2****.redis.rds.aliyuncs.com:6379,password=testaccount:Rp829dlwa,connectTimeout=2000");
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
    ```
    
    **Note**
    
    -   ConfigurationOptions is the core of StackExchange.Redis. It is shared and reused by the entire application. You should configure it as a singleton. For more information about the parameters, see [ConfigurationOptions](https://stackexchange.github.io/StackExchange.Redis/Configuration#configuration-options).
        
    -   The object returned by `GetDatabase()` is lightweight. You can obtain it from the ConnectionMultiplexer object each time you use it.
        
        ```
         redisConn = getRedisConn();
         var db = redisConn.GetDatabase();
        ```
        
    
3.  Use the client to perform operations on common data structures. Examples:
    
    #### String
    
    ```
    //set get
    string strKey = "hello";
    string strValue = "world";
    bool setResult = db.StringSet(strKey, strValue);
    Console.WriteLine("set " + strKey + " " + strValue + ", result is " + setResult);
    //incr
    string counterKey = "counter";
    long counterValue = db.StringIncrement(counterKey);
    Console.WriteLine("incr " + counterKey + ", result is " + counterValue);
    //expire
    db.KeyExpire(strKey, new TimeSpan(0, 0, 5));
    Thread.Sleep(5 * 1000);
    Console.WriteLine("expire " + strKey + ", after 5 seconds, value is " + db.StringGet(strKey));
    //mset mget
    KeyValuePair<RedisKey, RedisValue> kv1 = new KeyValuePair<RedisKey, RedisValue>("key1", "value1");
    KeyValuePair<RedisKey, RedisValue> kv2 = new KeyValuePair<RedisKey, RedisValue>("key2", "value2");
    db.StringSet(new KeyValuePair<RedisKey, RedisValue>[] {kv1,kv2});            
    RedisValue[] values = db.StringGet(new RedisKey[] {kv1.Key, kv2.Key});
    Console.WriteLine("mget " + kv1.Key.ToString() + " " + kv2.Key.ToString() + ", result is " + values[0] + "&&" + values[1]);
    ```
    
    #### Hash
    
    ```
    string hashKey = "myhash";
    //hset
    db.HashSet(hashKey,"f1","v1");
    db.HashSet(hashKey,"f2", "v2");
    HashEntry[] values = db.HashGetAll(hashKey);
    //hgetall
    Console.Write("hgetall " + hashKey + ", result is");
    for (int i = 0; i < values.Length;i++) 
    {
      HashEntry hashEntry = values[i];
      Console.Write(" " + hashEntry.Name.ToString() + " " + hashEntry.Value.ToString());
    }
    Console.WriteLine();
    ```
    
    #### List
    
    ```
    //list key
    string listKey = "myList";
    //rpush
    db.ListRightPush(listKey, "a");
    db.ListRightPush(listKey, "b");
    db.ListRightPush(listKey, "c");
    //lrange
    RedisValue[] values = db.ListRange(listKey, 0, -1);
    Console.Write("lrange " + listKey + " 0 -1, result is ");
    for (int i = 0; i < values.Length; i++)
    {
     Console.Write(values[i] + " ");
    }
    Console.WriteLine();
    ```
    
    #### Set
    
    ```
    //set key
    string setKey = "mySet";
    //sadd
    db.SetAdd(setKey, "a");
    db.SetAdd(setKey, "b");
    db.SetAdd(setKey, "c");
    //sismember
    bool isContains = db.SetContains(setKey, "a");
    Console.WriteLine("set " + setKey + " contains a is " + isContains );
    ```
    
    #### Sorted Set
    
    ```
    string sortedSetKey = "myZset";
    //sadd
    db.SortedSetAdd(sortedSetKey, "xiaoming", 85);
    db.SortedSetAdd(sortedSetKey, "xiaohong", 100);
    db.SortedSetAdd(sortedSetKey, "xiaofei", 62);
    db.SortedSetAdd(sortedSetKey, "xiaotang", 73);
    //zrevrangebyscore
    RedisValue[] names = db.SortedSetRangeByRank(sortedSetKey, 0, 2, Order.Ascending);
    Console.Write("zrevrangebyscore " + sortedSetKey + " 0 2, result is ");
    for (int i = 0; i < names.Length; i++)
    {
      Console.Write(names[i] + " ");
    }
    Console.WriteLine();
    ```
    

### **node-redis**

1.  Download and install the [node-redis](https://github.com/redis/node-redis) client.
    
2.  Enter the following code in the node-redis client and modify the code based on the comments.
    
    This example uses Node.js 19.4.0 and node-redis 4.5.1.
    
    ```
    import { createClient } from 'redis';
    
    // Set the port, endpoint, account, and password of the instance.
    const host = 'r-bp10noxlhcoim2****.redis.rds.aliyuncs.com';
    const port = 6379;
    const username = 'testaccount';
    // If the password contains special characters such as !@#$%^&*()+-=_, we recommend that you use encodeURIComponent to encode the password. Example: password = encodeURIComponent(password).
    const password = 'Rp829dlwa';
    const client = createClient({
      // redis://[[username]:[password]@[host][:port]/[db-number]
      url: `redis://${username}:${password}@${host}:${port}/0`
    });
    
    client.on('error', (err) => console.log('Redis Client Error', err));
    
    await client.connect();
    
    await client.set('foo', 'bar');
    const value = await client.get('foo');
    console.log("get foo: %s", value);
    await client.disconnect();
    ```
    
    **Note**
    
    If the `SyntaxError: Cannot use import statement outside a module` error message is reported, change the file extension from `.js` to `.mjs` and add the `--experimental-modules` option when you make a call. For example: `node --experimental-modules redis.mjs`.
    
3.  Run the code.
    

### **go-redis**

1.  Download and install the [go-redis](https://github.com/go-redis) client.
    
2.  Enter the following code in the go-redis editor and modify the code based on the comments.
    
    This example uses Go 1.18.5 and go-redis 8.11.5.
    
    ```
    package main
    
    import (
    	"github.com/go-redis/redis"
    	"fmt"
    )
    
    func ExampleClient() {
    	client := redis.NewClient(&redis.Options{
            // Replace the placeholders with the endpoint and port of the instance.
    		Addr:     "r-bp10noxlhcoim2****.redis.rds.aliyuncs.com:6379",
            // Replace the placeholder with the password of the instance.
    		Password: "testaccount:Rp829dlwa",
    		DB:       0,  // use default DB
    	})
        // The following code provides an example on how to use SET and GET.
    	err := client.Set("foo", "bar", 0).Err()
    	if err != nil {
    		panic(err)
    	}
    
    	val, err := client.Get("foo").Result()
    	if err != nil {
    		panic(err)
    	}
    	fmt.Println("set : foo -> ", val)
    }
    
    func main() {
    	ExampleClient()
    }
    ```
    
3.  Run the code.
    

### **Lettuce**

The following sample project is created by using Maven. You can also manually download the [Lettuce](https://github.com/lettuce-io/lettuce-core/releases) client.

1.  Open the compiler and create a project.
    
2.  Add the following dependencies to the `pom.xml` file and download Lettuce 6.3.0. We recommend that you do not use a Lettuce version earlier than 6.3.0.
    
    In this example, Lettuce 6.3.0 is used.
    
    ```
    <<dependencies>
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
    ```
    
3.  Enter the following code in the editor and modify the code based on the comments:
    
    ```
    import io.lettuce.core.ClientOptions;
    import io.lettuce.core.RedisClient;
    import io.lettuce.core.RedisURI;
    import io.lettuce.core.SocketOptions;
    import io.lettuce.core.SocketOptions.KeepAliveOptions;
    import io.lettuce.core.SocketOptions.TcpUserTimeoutOptions;
    import io.lettuce.core.api.StatefulRedisConnection;
    import io.lettuce.core.api.sync.RedisCommands;
    import java.time.Duration;
    
    public class LettuceExample {
        /**
         * Enable TCP keepalive and configure the following three parameters:
         *  TCP_KEEPIDLE = 30
         *  TCP_KEEPINTVL = 10
         *  TCP_KEEPCNT = 3
         */
        private static final int TCP_KEEPALIVE_IDLE = 30;
    
        /**
         * The TCP_USER_TIMEOUT parameter can avoid situations where Lettuce remains stuck in a continuous timeout loop during a failure or crash event. 
         * refer: https://github.com/lettuce-io/lettuce-core/issues/2082
         */
        private static final int TCP_USER_TIMEOUT = 30;
    
        private static RedisClient client = null;
        private static StatefulRedisConnection<String, String> connection = null;
    
        public static void main(String[] args) {
            // Replace the values of host, user, password, and port with the actual instance information. 
            String host = "r-bp1s1bt2tlq3p1****.redis.rds.aliyuncs.com";
            String user = "r-bp1s1bt2tlq3p1****";
            String password = "Da****3";
            int port = 6379;
    
            // Config RedisURI
            RedisURI uri = RedisURI.Builder
                    .redis(host, port)
                    .withAuthentication(user, password)
                    .build();
    
            // Config TCP KeepAlive
            SocketOptions socketOptions = SocketOptions.builder()
                    .keepAlive(KeepAliveOptions.builder()
                            .enable()
                            .idle(Duration.ofSeconds(TCP_KEEPALIVE_IDLE))
                            .interval(Duration.ofSeconds(TCP_KEEPALIVE_IDLE/3))
                            .count(3)
                            .build())
                    .tcpUserTimeout(TcpUserTimeoutOptions.builder()
                            .enable()
                            .tcpUserTimeout(Duration.ofSeconds(TCP_USER_TIMEOUT))
                            .build())
                    .build();
    
            client = RedisClient.create(uri);
            client.setOptions(ClientOptions.builder()
                    .socketOptions(socketOptions)
                    .build());
            connection = client.connect();
            RedisCommands<String, String> commands = connection.sync();
    
            System.out.println(commands.set("foo", "bar"));
            System.out.println(commands.get("foo"));
    
            // If your application exits and you want to destroy the resources, call this method. Then, the connection is closed, and the resources are released. 
            connection.close();
            client.shutdown();
        }
    }
    ```
    
4.  Run the preceding code. The following output is expected on successful completion:
    
    ```
    OK
    bar
    ```
    

## Related documents

-   [Common errors](/help/en/redis/support/common-errors-and-troubleshooting#task-2277868)
    
-   [Troubleshoot Tair connection issues](/help/en/redis/support/how-do-i-troubleshoot-connection-issues-in-apsaradb-for-redis#concept-gm5-rgv-fgb)
    
-   [Client retry guide](/help/en/redis/use-cases/retry-mechanisms-for-redis-clients#concept-2107101)
    
-   [Configure alert rules](/help/en/redis/user-guide/alert-settings#concept-sj5-m2z-5db)
    
-   [View monitoring data](/help/en/redis/user-guide/view-monitoring-data#task-645669)

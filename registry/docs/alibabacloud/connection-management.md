This topic describes how to connect to Tair (and Redis Open-Source Edition) instances. To connect to an instance, you must first establish network connectivity and configure a whitelist.

## Establish network connectivity and configure whitelists

Before you connect to an instance, you must establish network connectivity between your client and the instance and configure an IP whitelist. For more information, see [Connection preparation](/help/en/redis/user-guide/connection-preparation).

## Connect to Tair (and Redis Open-Source Edition)

The following table describes the parameters required to connect to an instance.

**Parameter**

**Description**

**Method to obtain the parameter value**

hostname

Endpoint

1.  Log on to the console and go to the [Instances](https://kvstore.console.alibabacloud.com/Redis/instance/cn-hangzhou) page. In the top navigation bar, select the region in which the instance that you want to manage resides. Then, find the instance and click the instance ID.
    
2.  In the **Instance Information** page, find the **Connection Information** section to view the endpoints and port numbers for each connection type.
    
    **Note**
    
    -   To connect to an instance over the Internet, first apply for a [public endpoint](/help/en/redis/user-guide/apply-for-a-public-endpoint-for-an-apsaradb-for-redis-instance#concept-1096127) for the instance.
        
    -   You cannot apply for public endpoints for cloud-native cluster instances in direct connection mode. For more information, see [View endpoints](/help/en/redis/user-guide/view-endpoints#section-zzx-nxu-swn).
        
    

port

Port number

The default port number is 6379. You can also use a custom port number. For more information, see [Change the endpoint or port number of an instance](/help/en/redis/user-guide/change-the-endpoint-or-port-number-of-an-instance#concept-yyt-svt-j2b).

password

Password

Enter the account and password based on the account type:

-   Default account (usually named `default` or after the instance ID): Enter only the password.
    
-   Standard account: Enter the password in the format of `user:password`. For example, if the custom account is `testaccount` and the password is `Rp829dlwa`, enter `testaccount:Rp829dlwa` as the password.
    

If you forget the password or have not set a password, you can reset the password. For more information, see [Change or reset the password](/help/en/redis/user-guide/change-or-reset-the-password#concept-xqd-p2z-5db).

## Connect using redis-cli

If redis-cli is not installed on your device, follow these instructions.

Installation instructions for redis-cli

redis-cli is automatically installed when you install Redis on your ECS instance or on-premises device. If you use redis-cli to connect to a Tair (Redis OSS-compatible) instance, the version of redis-cli does not need to be the same as that of the Tair (Redis OSS-compatible) instance.

1.  Log on to the device on which you want to install redis-cli, such as an ECS instance or an on-premises device.
    
2.  Download and install redis-cli.
    
    ### Windows
    
    Only 64-bit Windows operating systems are supported.
    
    1.  Download the [Redis-x64-3.2.100.zip](https://docs-aliyun.cn-hangzhou.oss.aliyun-inc.com/assets/attach/109395/cn_zh/1608025472468/Redis-x64-3.2.100.zip) package.
        
        **Note**
        
        In this example, Redis 3.2 is used to demonstrate the operations. You can install other versions. For more information, visit [GitHub](https://github.com/MicrosoftArchive/redis/tags).
        
    2.  Decompress the Redis-x64-3.2.100.zip package to the directory in which you want to install Redis.
        
    
    ### macOS
    
    You can use the Homebrew package manager to install the Redis client on a macOS device. To use Homebrew to install Redis on your device, perform the following steps:
    
    **Install Homebrew if it is not installed**
    
    1.  Launch Terminal.
        
    2.  Copy and paste the following command into the Terminal window and press the Enter key. The command downloads and runs the Homebrew installation script.
        
    
    ```
    /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
    ```
    
    3.  Follow the instructions on the screen. You may need to enter a password.
        
    
    **Use Homebrew to install Redis**
    
    In the Terminal window, enter the following command to install the Redis toolkit (including redis-cli):
    
    ```
    brew install redis
    ```
    
    The command downloads and installs the latest stable version of Redis on your system. After the installation is successful, you can enter the `which redis-cli` command in the Terminal window to obtain the location of redis-cli.
    
    ### Linux
    
    Run the following command to install the GNU Compiler Collection (GCC) compiler and its dependencies:
    
    ```
    sudo yum -y install gcc
    ```
    
    Run the following command to download the Redis source code package:
    
    ```
    wget https://download.redis.io/releases/redis-7.0.0.tar.gz
    ```
    
    **Note**
    
    In this example, Redis 7.0.0 is used to demonstrate the operations. You can install other versions. For more information, visit the [Redis official website](https://redis.io/download).
    
    Run the following command to decompress the Redis source code package:
    
    ```
    tar xzf redis-7.0.0.tar.gz
    ```
    
    Run the following command to go to the directory to which the Redis source code package is decompressed. Then, compile and install Redis.
    
    ```
    cd redis-7.0.0&&make
    ```
    
    **Note**
    
    It takes 2 to 3 minutes to compile and install Redis.
    

Connect to the instance:

1.  Go to the directory where redis-cli is installed.
    
    ## Linux
    
    Go to the \`..\\redis-7.2.0\\src\` directory. For example, `cd /home/redis-7.2.0/src`.
    
    ## macOS
    
    Go to the directory where redis-cli is installed, such as `cd /opt/homebrew/bin`.
    
    ## Windows
    
    Open the command line and go to the directory where redis-cli is installed.
    
2.  Run the following command to connect to the instance using redis-cli:
    
    ```
    ./redis-cli -h <hostname> -p <port> [-c]
    ```
    
    **Note**
    
    In Windows, the command to start redis-cli using PowerShell is `.\redis-cli -h hostname -p port [-c]`.
    
    Sample command:
    
    -   Default endpoint: This endpoint is suitable for scenarios where you connect using a default endpoint, such as the endpoint of a standard architecture instance or the proxy endpoint of a cluster architecture instance.
        
        ```
        ./redis-cli -h r-bp1zxszhcgatnx****.redis.rds.aliyuncs.com -p 6379
        ```
        
    -   Direct connection endpoint of a cluster instance: This endpoint is suitable for scenarios where you connect to a cluster architecture instance using a direct connection endpoint.
        
        ```
        ./redis-cli -h r-bp1zxszhcgatnx****.redis.rds.aliyuncs.com -p 6379 -c
        ```
        
    
3.  Run the following command to verify the password:
    
    ```
    AUTH <password>
    ```
    
    Example:
    
    ```
    AUTH testaccount:Rp829dlwa
    ```
    

## Connect using code

## Spring Data Redis

This example uses Maven for the build. You can also manually download the [Lettuce](https://github.com/lettuce-io/lettuce-core/releases) or [Jedis](https://github.com/redis/jedis/releases) client.

1.  Open the compiler and create a project.
    
2.  Add the following `pom` file to download Lettuce or Jedis.
    
    **Important**
    
    If you use Lettuce, we recommend that you use 6.3.0.RELEASE or later and configure the TCP\_USER\_TIMEOUT parameter. This prevents blackhole filtering on the Lettuce client.
    
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
    
3.  Enter the following code in the Spring Data Redis editor and modify it based on the comments.
    
    In this example, Spring Data Redis 2.4.2 is used.
    
    -   Spring Data Redis with Jedis
        
        ```
        @Configuration
        public class RedisConfig {
            
            @Bean
            JedisConnectionFactory redisConnectionFactory() {
                //This example is only for testing connections. In production environments, we recommend that you store connection information in configuration files and retrieve the information using the @Value annotation.
                //You can obtain the endpoint (hostName) and port number (port) from the Connection Information section of the Instance Information page. Select a VPC or public connection based on your client network environment.
                RedisStandaloneConfiguration config = new RedisStandaloneConfiguration("r-8vbwds91ie1rdl****.redis.zhangbei.rds.aliyuncs.com", 6379);
                //Enter the password in the format of username:password. For example, if the username is testaccount and the password is Rp829dlwa, enter testaccount:Rp829dlwa as the password.
                //If you forget your username or password, click Account Management in the navigation pane on the left of the instance details page to reset the password or create an account.
                config.setPassword(RedisPassword.of("username:password"));
                JedisPoolConfig jedisPoolConfig = new JedisPoolConfig();
                // Specify the maximum number of connections as needed. This value cannot exceed the maximum number of connections supported by the instance type.
                jedisPoolConfig.setMaxTotal(30);
                // Specify the maximum number of idle connections as needed. This value cannot exceed the maximum number of connections supported by the instance type.
                jedisPoolConfig.setMaxIdle(20);
                // Disable testOn[Borrow|Return] to prevent additional PING commands from being generated.
                jedisPoolConfig.setTestOnBorrow(false);
                jedisPoolConfig.setTestOnReturn(false);
        
                JedisClientConfiguration jedisClientConfiguration = JedisClientConfiguration.builder().usePooling().poolConfig(
                        jedisPoolConfig).build();
        
                return new JedisConnectionFactory(config, jedisClientConfiguration);
            }
            @Bean
            public RedisTemplate<String, Object> redisTemplate() {
                RedisTemplate<String, Object> template = new RedisTemplate<>();
                template.setConnectionFactory(redisConnectionFactory());
                template.setKeySerializer(new StringRedisSerializer());
                template.setValueSerializer(new GenericJackson2JsonRedisSerializer());
                return template;
            }
        }
        ```
        
    -   Spring Data Redis with Lettuce (including the configuration of the TCP\_USER\_TIMEOUT parameter)
        
        ```
        @Configuration
        public class BeanConfig {
            /**
             * Enable TCP keepalive and configure the following three parameters:
             * TCP_KEEPIDLE = 30
             * TCP_KEEPINTVL = 10
             * TCP_KEEPCNT = 3
             */
            private static final int TCP_KEEPALIVE_IDLE = 30;
        
            /**
             * The TCP_USER_TIMEOUT parameter can prevent Lettuce from continuously timing out in case of a failure or breakdown.
             * Reference: https://github.com/lettuce-io/lettuce-core/issues/2082
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
        
    

## Jedis

This example uses Maven for the build. You can also manually download the [Jedis](https://github.com/redis/jedis/releases) client.

1.  Open the compiler and create a project.
    
2.  Add the following code to the `pom.xml` file.
    
    In this example, Jedis 4.3.0 is used.
    
    ```
    <dependency>
        <groupId>redis.clients</groupId>
        <artifactId>jedis</artifactId>
        <version>4.3.0</version>
    </dependency>
    ```
    
3.  Enter the following code in the editor and modify it based on the comments:
    
    ```
    import redis.clients.jedis.Jedis;
    import redis.clients.jedis.JedisPool;
    import redis.clients.jedis.JedisPoolConfig;
    
    public class JedisExample {
        public static void main(String[] args) {
            JedisPoolConfig config = new JedisPoolConfig();
            // Specify the maximum number of idle connections based on your requirements. The value cannot exceed the maximum number of connections supported by the Redis instance.
            config.setMaxIdle(200);
            // Specify the maximum number of connections based on your requirements. The value cannot exceed the maximum number of connections supported by the Redis instance.
            config.setMaxTotal(300);
            config.setTestOnBorrow(false);
            config.setTestOnReturn(false);
            // Replace the values of hostname and password with the endpoint and password of the instance.
            String hostname = "r-bp1s1bt2tlq3p1****pd.redis.rds.aliyuncs.com";
            // For a default account, you can directly enter the password. For a new account, enter the password in the format of user:password. For example, if the new account is testaccount and the password is Rp829dlwa, enter testaccount:Rp829dlwa.
            String password = "r-bp1s1bt2tlq3p1****:Database123";
            JedisPool pool = new JedisPool(config, hostname, 6379, 3000, password);
            Jedis jedis = null;
            try {
                jedis = pool.getResource();
                // Perform related operations. The following code provides an example.
                jedis.set("foo10", "bar");
                System.out.println(jedis.get("foo10"));
                jedis.zadd("sose", 0, "car");
                jedis.zadd("sose", 0, "bike");
                System.out.println(jedis.zrange("sose", 0, -1));
            }
            catch (Exception e) {
                // Handle timeouts or other exceptions.
                e.printStackTrace();
            }
            finally {
                if (jedis != null) {
                    jedis.close();
                }
            }
            pool.destroy();    // When the application exits and resources need to be destroyed, call this method. This method disconnects the connection and releases the resources.
        }
    }
    ```
    
4.  Run the preceding project. The following output is expected:
    
    ```
    bar
    [bike, car]
    ```
    

## **redis-py**

1.  Download and install the [redis-py](https://github.com/andymccurdy/redis-py) client.
    
2.  Enter the following code in the Python editor and modify it based on the comments.
    
    In this example, Python 3.9 and redis-py 4.4.1 are used.
    
    ```
    #!/usr/bin/env python
    #-*- coding: utf-8 -*-
    import redis
    # Replace the values of hostname and port with the endpoint and port number of the instance.
    hostname = 'r-bp10noxlhcoim2****.redis.rds.aliyuncs.com'
    port = 6379
    # Replace the value of pwd with the password of the instance.
    # For a default account, you can directly enter the password. For a new account, enter the password in the format of user:password. For example, if the new account is testaccount and the password is Rp829dlwa, enter testaccount:Rp829dlwa.
    password = 'testaccount:Rp829dlwa'
    r = redis.Redis(host=hostname, port=port, password=password)
    # After the connection is established, you can perform database operations. The following code provides an example on how to use SET and GET.
    r.set('foo', 'bar')
    print(r.get('foo'))
    ```
    
3.  Run the preceding project. The following output is expected:
    
    ```
    b'bar'
    ```
    

## **PhpRedis**

1.  Download and install the [PhpRedis](https://github.com/phpredis/phpredis) client.
    
2.  Enter the following code in the PHP editor and modify it based on the comments.
    
    In this example, PHP 8.2.1 and PhpRedis 5.3.7 are used.
    
    ```
    <?php
     /* Replace the values of hostname and port with the endpoint and port number of the instance. */
     $hostname = "r-bp10noxlhcoim2****.redis.rds.aliyuncs.com";
     $port = 6379;
     /* Replace the values of user and password with the account and password of the instance. */
     $user = "testaccount";
     $password = "Rp829dlwa";
     $redis = new Redis();
     if ($redis->connect($hostname, $port) == false) {
             die($redis->getLastError());
       }
     if ($redis->auth([$user, $password]) == false) {
             die($redis->getLastError());
      }
      /* After authentication, you can perform database operations. The following code provides an example on how to use SET and GET. */
     if ($redis->set("foo", "bar") == false) {
             die($redis->getLastError());
     }
     $value = $redis->get("foo");
     echo $value;
     ?>
    ```
    
3.  Run the preceding code.
    
    **Note**
    
    Common errors and solutions:
    
    -   `Cannot assign requested address`: For information about the cause of and solution to the error, see [What do I do if the "Cannot assign requested address" error is returned](/help/en/redis/support/what-do-i-do-if-the-cannot-assign-requested-address-error-is-returned-when-i-access-apsaradb-for-redis-over-short-lived-connections).
        
    -   `redis protocol error, got ' ' as reply type byte`: Update the version of your PhpRedis client. For more information, visit [GitHub](https://github.com/phpredis/phpredis/issues/1585).
        
    

## **C or C++**

1.  Download and install the [C client](https://github.com/redis/hiredis/releases).
    
2.  Enter the following code in the C or C++ editor and modify it based on the comments.
    
    In this example, hiredis 1.1.0 is used.
    
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
    
4.  Perform a test run and connect to the instance.
    
    ```
     ./example r-bp10noxlhcoim2****.redis.rds.aliyuncs.com 6379 r-bp10noxlhcoim2**** password
    ```
    

## **.NET**

1.  Download and install [StackExchange.Redis](https://github.com/StackExchange/StackExchange.Redis?spm=5176.100239.blogcont272212.10.IsQwET&file=StackExchange.Redis) 2.7.20 or later. For more information, see [Notice on update of StackExchange.Redis](/help/en/redis/product-overview/notice-suggestions-for-upgrading-stackexchange-redis-clients).
    
    **Important**
    
    We recommend that you do not use the ServiceStack Redis or CSRedis client.
    
    -   If you use ServiceStack Redis and run into issues related to the client, you must purchase technical support from ServiceStack.
        
    -   The support for the CSRedis client has been ended.
        
    
2.  Enter the following code in the StackExchange.Redis editor and modify it based on the comments.
    
    In this example, StackExchange.Redis 2.7.20 is used.
    
    ```
    using StackExchange.Redis;
     // Set the endpoint, port number, and password of the instance.
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
    
    -   ConfigurationOptions is the core of StackExchange.Redis. It is shared and reused by the entire application and should be set as a singleton. For more information about parameter settings, see [ConfigurationOptions](https://stackexchange.github.io/StackExchange.Redis/Configuration#configuration-options).
        
    -   The object returned by `GetDatabase()` is lightweight. You can obtain it from the ConnectionMultiplexer object each time you use it.
        
        ```
         redisConn = getRedisConn();
         var db = redisConn.GetDatabase();
        ```
        
    

## **node-redis**

1.  Download and install the [node-redis](https://github.com/redis/node-redis) client.
    
2.  Enter the following code in the node-redis client and modify it based on the comments.
    
    In this example, Node.js 19.4.0 and node-redis 4.5.1 are used.
    
    ```
    import { createClient } from 'redis';
    
    // Set the port number, endpoint, account, and password of the instance.
    const hostname = 'r-bp10noxlhcoim2****.redis.rds.aliyuncs.com';
    const port = 6379;
    const username = 'testaccount';
    // If the password contains special characters (!@#$%^&*()+-=_), we recommend that you encode the password using encodeURIComponent: password = encodeURIComponent(password)
    const password = 'Rp829dlwa';
    const client = createClient({
      // redis://[[username]:[password]@[hostname][:port]/[db-number]
      url: `redis://${username}:${password}@${hostname}:${port}/0`
    });
    
    client.on('error', (err) => console.log('Redis Client Error', err));
    
    await client.connect();
    
    await client.set('foo', 'bar');
    const value = await client.get('foo');
    console.log("get foo: %s", value);
    await client.disconnect();
    ```
    
    **Note**
    
    If the `SyntaxError: Cannot use import statement outside a module` error is reported, change the extension of the `.js` file to `.mjs` and add the `--experimental-modules` option when you call the file. Example: `node --experimental-modules redis.mjs`.
    

## **Go-redis**

1.  Download and install the [Go-Redis](https://github.com/go-redis) client.
    
2.  Enter the following code in the Go-redis editor and modify it based on the comments.
    
    In this example, Go 1.18.5 and Go-redis 8.11.5 are used.
    
    ```
    package main
    
    import (
    	"github.com/go-redis/redis"
    	"fmt"
    )
    
    func ExampleClient() {
    	client := redis.NewClient(&redis.Options{
            // Replace with the endpoint and port of the instance.
    		Addr:     "r-bp10noxlhcoim2****.redis.rds.aliyuncs.com:6379",
            // Replace with the password of the instance.
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
    

## **Lettuce**

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
    

## Connect using DMS

1.  Log on to the console and go to the [Instances](https://kvstore.console.alibabacloud.com/Redis/instance/cn-hangzhou) page. In the top navigation bar, select the region in which the instance that you want to manage resides. Then, find the instance and click the instance ID.
    
2.  In the upper-right corner of the page, click **Log into Database**.
    
3.  In the DMS console, set the access mode.
    
    **Access mode**
    
    **Description**
    
    **Account + password login**
    
    (Recommended)
    
    Enter the database account and the corresponding password. For information about how to create a database account, see [Create and manage database accounts](/help/en/redis/user-guide/create-and-manage-database-accounts#task-kth-pr4-hfb).
    
    **Note**
    
    By default, an instance comes with a database account named after the instance ID, such as r-bp10noxlhcoim2\*\*\*\*. You can use this account for logon. The account password was specified when you created the instance.
    
    **noSecret login**
    
    If password-free access is enabled for the instance, you can log on to the instance without using a password. For more information, see [Enable password-free access over a VPC](/help/en/redis/user-guide/enable-password-free-access#concept-ttq-dst-j2b).
    
    **password login**
    
    Use the password that you specified when you created the instance to log on to the instance. The password is created for the database account that is named after the instance ID.
    
    **Note**
    
    If you forget your password, you can reset it. For more information, see [Change or reset the password](/help/en/redis/user-guide/change-or-reset-the-password#concept-xqd-p2z-5db).
    
    You can keep the default values for the other parameters.
    
4.  Click **Login**.
    
    If you have not added the IP address of the DMS server to the instance whitelist, a dialog box appears. You must click **Set Whitelist**. The system creates a whitelist group named **ali\_dms\_group** for the instance and adds the IP address of the DMS server to this group.
    
5.  After you log on, you can enter and execute commands in the text box on the **SQLConsole** tab. For example, you can execute the DBSIZE command to query the number of keys in the current database.
    
    For information about the commands supported by Tair (and Redis Open-Source Edition), see [Command overview](/help/en/redis/developer-reference/overview-3/#concept-ztj-rpn-tdb).
    

**Other connection methods**

-   [Use the direct connection mode to connect to a cluster instance](/help/en/redis/user-guide/use-a-private-endpoint-to-connect-to-an-apsaradb-for-redis-instance#task-2378182): You can request a direct connection endpoint for a cluster instance to directly access the backend data shards, which is similar to connecting to a native Redis cluster. Compared with the proxy mode, the direct connection mode reduces response times because requests do not pass through proxy nodes.
    
-   [Enable TLS (SSL) encryption to connect to an instance](/help/en/redis/user-guide/use-a-client-to-connect-to-an-apsaradb-for-redis-instance-that-has-ssl-encryption-enabled#task-2103865): You can enable the TLS encryption feature to improve data link security and ensure data integrity.
    
-   [Use the Sentinel-compatible mode to connect to an instance](/help/en/redis/user-guide/use-the-sentinel-compatible-mode-to-connect-to-an-apsaradb-for-redis-instance#task-1937025): Tair provides a Sentinel-compatible mode. After you enable this mode, clients can connect to instances in the same way they connect to a native Redis Sentinel.
    

## Troubleshoot connection issues

[Troubleshoot Tair connection issues](/help/en/redis/support/how-do-i-troubleshoot-connection-issues-in-apsaradb-for-redis)

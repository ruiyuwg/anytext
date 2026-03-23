This topic describes how to connect to a Tair (Redis OSS-compatible) instance by using redis-cli, code, or [Data Management (DMS)](/help/en/dms/product-overview/what-is-dms).

## **Prerequisites**

-   An [IP address whitelist](/help/en/redis/getting-started/step-2-configure-whitelists) is configured for the instance.
    
-   A password is specified for the instance. If no password is specified for the instance, see [Change or reset the password](/help/en/redis/user-guide/change-or-reset-the-password).
    

## Procedure

## redis-cli

In this example, redis-cli is used to connect to a Tair (Redis OSS-compatible) instance from a Linux Elastic Compute Service (ECS) instance. The ECS instance is deployed in the same virtual private cloud (VPC) as the Tair (Redis OSS-compatible) instance.

**Note**

To connect to the Tair (Redis OSS-compatible) instance from your on-premises device over the Internet, [apply for a public endpoint](/help/en/redis/user-guide/apply-for-a-public-endpoint-for-an-apsaradb-for-redis-instance).

1.  Log on to the ECS instance and run the following commands in sequence to download, install, and compile redis-cli:
    
    ```
    sudo yum -y install gcc            # Install GNU Compiler Collection (GCC).
    wget https://download.redis.io/releases/redis-7.2.0.tar.gz
    tar xzf redis-7.2.0.tar.gz
    cd redis-7.2.0&&make
    ```
    
    In this example, redis-cli 7.2.0 is used. You can install another version. It takes 2 to 3 minutes to compile and install redis-cli.
    
2.  Run the following command to connect to the instance:
    
    ```
    src/redis-cli -h hostname -a password -p port
    ```
    
    Parameters:
    
    -   **hostname**: the endpoint of the instance. In the **Connection Information** section of the instance details page in the console, you can view the **VPC** endpoint of the instance, such as `r-8vbwds91ie1rdl****.redis.zhangbei.rds.aliyuncs.com`. For more information, see [View endpoints](/help/en/redis/user-guide/view-endpoints).
        
    -   **password**: the password of the instance**.**
        
    -   **port**: the port number. Default value: 6379.
        
    
    Sample command:
    
    ```
    src/redis-cli -h r-8vbwds91ie1rdl****.redis.zhangbei.rds.aliyuncs.com -a TestPassword123 -p 6379
    ```
    
3.  Write and read data.
    
    1.  Run the `SET bar foo` command.
        
        The expected output is `OK`.
        
    2.  Run the `GET bar` command.
        
        The expected output is `"foo"`.
        
    

## Code

**Note**

To connect to the Tair (Redis OSS-compatible) instance from your on-premises device over the Internet, [apply for a public endpoint](/help/en/redis/user-guide/apply-for-a-public-endpoint-for-an-apsaradb-for-redis-instance).

In this example, the Jedis client is used. For connection code examples using other common types of clients, see [Connection code examples with common types of clients](/help/en/redis/user-guide/use-a-client-to-connect-to-an-apsaradb-for-redis-instance).

1.  Configure pom.xml to include the necessary dependencies.
    
    ```
    <!-- Import spring-data-redis -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-data-redis</artifactId>
        <!-- Since Spring Boot 2.0, Lettuce is the default client. Exclude lettuce when using Jedis. -->
        <exclusions>
            <exclusion>
                <groupId>io.lettuce</groupId>
                <artifactId>lettuce-core</artifactId>
            </exclusion>
        </exclusions>
    </dependency>
    <!-- Import jedis -->
    <dependency>
        <groupId>redis.clients</groupId>
        <artifactId>jedis</artifactId>
    </dependency>
    ```
    
2.  Modify the connection parameters based on the comments.
    
    ```
    @Configuration
    public class RedisConfig {
        
        @Bean
        JedisConnectionFactory redisConnectionFactory() {
            // This example is used only to test connectivity. In production environments, we recommend that you place connection information in a configuration file and retrieve it using the @Value annotation.
            // The endpoint (hostName) and port (port) can be obtained from the Connection Information section of the instance details page. Select a VPC endpoint or public endpoint based on your client network environment.
            RedisStandaloneConfiguration config = new RedisStandaloneConfiguration("r-8vbwds91ie1rdl****.redis.zhangbei.rds.aliyuncs.com", 6379);
            // Specify the password in the username:password format. For example, if the username is testaccount and the password is Rp829dlwa, enter testaccount:Rp829dlwa as the password.
            // If you forget your username or password, you can reset the password or create a new account by clicking Account Management in the left-side navigation pane of the instance details page.
            config.setPassword(RedisPassword.of("Username:Password"));
            JedisPoolConfig jedisPoolConfig = new JedisPoolConfig();
            // Specify the maximum number of connections based on your business requirements. This value cannot exceed the maximum number of connections supported by the instance.
            jedisPoolConfig.setMaxTotal(30);
            // Specify the maximum number of idle connections based on your business requirements. This value cannot exceed the maximum number of connections supported by the instance.
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
    
3.  Test connectivity.
    
    ```
    @SpringBootTest
    public class RedisTest {
        @Autowired
        private RedisTemplate<String, Object> redisTemplate;
    
        @Test
        void test() {
            try {
                redisTemplate.opsForValue().set("test_key", "hello world!");
                System.out.println("Connection successful:"+redisTemplate.opsForValue().get("test_key"));
            } catch (Exception e) {
                e.printStackTrace();
                System.out.println("An exception occurred during the connection attempt. Refer to the documentation " +
                        "https://www.alibabacloud.com/help/en/redis/support/how-do-i-troubleshoot-connection-issues-in-apsaradb-for-redis?spm=a2c63.p38356.help-menu-26340.d_5_1_1_4.47ca2024nvxRlS" +
                        "to troubleshoot network, whitelist, and account/password issues." +
                        "You can also refer to the documentation based on the error message: https://www.alibabacloud.com/help/en/redis/support/common-errors-and-troubleshooting?spm=a2c63.p38356.help-menu-26340.d_5_0.77cc79fejApYJN");
            }
    
        }
    }
    ```
    
    After you run the preceding code, the following output is returned if the connection is successful:
    
    ```
    Connection successful: hello world!
    ```
    

## DMS

1.  Log on to the console and go to the [Instances](https://kvstore.console.alibabacloud.com/Redis/instance/cn-hangzhou) page. In the top navigation bar, select the region in which the instance that you want to manage resides. Then, find the instance and click the instance ID.
    
2.  In the upper-right corner of the instance details page, click **Log into Database**.
    
3.  In the **Log on to Database Instance** dialog box, set the **Access mode** parameter to **password login** and enter a password.
    
    In this mode, the default account is used for logon. You can view the account details on the **Account Management** page in the console.
    
4.  Click **Login**.
    
5.  Write and read data.
    
    1.  On the **SQLConsole** page in the DMS console, enter the `SET foo hello` command and click **Execute(F8)**.
        
        The expected output is `OK`.
        
    2.  Enter the `GET foo` command and click **Execute(F8)**.
        
        The expected output is `hello`.
        
    

## References

For more information, see the following topics:

-   [Use a client to connect to an instance](/help/en/redis/user-guide/use-a-client-to-connect-to-an-apsaradb-for-redis-instance#concept-dys-yvb-5db)
    
-   [Use redis-cli to connect to an instance](/help/en/redis/user-guide/use-redis-cli-to-connect-to-an-apsaradb-for-redis-instance#concept-tzm-xdd-5db)
    
-   [Connect to an instance by using DMS](/help/en/redis/user-guide/log-on-to-an-apsaradb-for-redis-instance-by-using-dms#concept-jvw-c24-tdb)
    

**Special connection methods**

-   [Enable TLS (SSL) encryption for instance connections](/help/en/redis/user-guide/use-a-client-to-connect-to-an-apsaradb-for-redis-instance-that-has-ssl-encryption-enabled#task-2103865): TLS encryption improves transport link security and ensures data integrity.
    
-   [Use the direct connection mode to connect to a cluster instance](/help/en/redis/user-guide/use-a-private-endpoint-to-connect-to-an-apsaradb-for-redis-instance#task-2378182): If your instance is a cluster instance in direct connection mode, you can use the private endpoint to bypass proxy nodes and directly access backend data shards. This connection to cluster instances is similar to the connection to open source Redis clusters. Compared with the proxy mode, the direct connection mode reduces the response time because requests do not need to pass through proxy nodes.
    
-   [Use the Sentinel-compatible mode to connect to an instance](/help/en/redis/user-guide/use-the-sentinel-compatible-mode-to-connect-to-an-apsaradb-for-redis-instance#task-1937025): Tair (Redis OSS-compatible) provides the Sentinel-compatible mode. After you enable this mode, instances can be connected from the client in the same manner as the native Redis Sentinel.
    

  

## Common errors and troubleshooting

**Error message**

**Cause and solution**

`(error) ERR illegal address`

The whitelist is incorrectly configured.

1.  Check whether the IP address of your client is added to a whitelist of the instance. For more information, see [Step 2: Configure whitelists](/help/en/redis/getting-started/step-2-configure-whitelists#concept-lmv-qhf-vdb).
    
2.  Check whether the endpoint of the instance is correct. If you connect to the instance over the Internet, you must select the public endpoint of the instance. Otherwise, connection to the instance fails.
    
3.  Check whether the ECS instance on which your client is deployed is in the same VPC as the Tair (Redis OSS-compatible) instance. If not, you must connect to the Tair (Redis OSS-compatible) instance over the Internet.
    

Then, run the `ping <Instance endpoint>` command. If no errors are returned, the client connects to the instance. Sample command: `ping r-bp1zxszhcgatnx****.redis.rds.aliyuncs.com`.

`(error) ERR client ip is not in whitelist`

`Could not connect to Redis`

-   `(error) ERR invalid password`
    
-   `(error) WRONGPASS invalid username-password pair`
    

The password is invalid. Specify the correct password in a valid format. The password format varies based on the selected account.

-   If you use the default account, enter the password. For example, if the username of the default account is `r-bp1zxszhcgatnx****` and the password is `Password21`, the command used to verify the password is `AUTH Password21`.
    
-   If you use a custom account, enter the password in the `user:password` format. For example, if the username of the custom account is `testaccount` and the password is `Rp829dlwa`, the command used to verify the password is `AUTH testaccount:Rp829dlwa`.
    

**Note**

-   If you use a third-party database management tool such as RDM to connect to your instance, specify the password in the `user:password` format and leave the **username** field empty. Otherwise, connection to the instance fails.
    
-   If you forget your password, you can reset it. For more information, see [Change or reset the password](/help/en/redis/user-guide/change-or-reset-the-password#concept-xqd-p2z-5db).

When your application needs to access Tair (Redis OSS-compatible) instances, you can store the account passwords of the instances in the secrets managed by Key Management Service (KMS). Business applications dynamically retrieve the account passwords from KMS by integrating Alibaba Cloud SDKs, KMS SDKs, or secret SDKs. You can configure secret rotation to reduce the risks of account password leaks.

## **Feature description**

When you manage database accounts of Tair (Redis OSS-compatible) instances in KMS, you do not need to configure static database accounts in applications. After you create a secret for a database account of an instance in KMS, applications can call the GetSecretValue operation to retrieve the secret to access the instance.

For example, if the name of the instance secret that you create in KMS is **username**, KMS creates the **username** and **username\_clone** accounts on the instance and uses the accounts to access the instance. Compared with the single-account mode, the dual-account mode ensures higher availability and security for your applications. You can configure account rotation policies in the KMS console. By default, KMS performs account rotation every 24 hours. Different accounts are used to log on to the instance to improve security. For more information, see [Manage and use Redis/Tair secrets](/help/en/kms/key-management-service/user-guide/apsaradb-for-redis-secrets).

**Important**

Do not modify or delete account passwords created by KMS in the Tair (Redis OSS-compatible) console to prevent service failures.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4511054371/CAEQMRiBgIDL09HKnhkiIDNhY2E5NTQwZTgzNzRhMjdiZWY3NTg2YjE4ZDM0ZDg24106570_20240506152533.954.svg)

#### **Limits**

-   You cannot change the password of a managed account created by KMS in the Tair (Redis OSS-compatible) console. However, you can change the password by manually rotating the password or configuring an automatic rotation policy in the KMS console. For more information, see [Rotate a Redis/Tair secret](/help/en/kms/key-management-service/user-guide/apsaradb-for-redis-secrets#053babd220exj).
    
-   You cannot delete a managed account created by KMS in the Tair (Redis OSS-compatible) console. To delete a managed account, go to the KMS console. For more information, see [Delete a Redis/Tair secret](/help/en/kms/key-management-service/user-guide/apsaradb-for-redis-secrets#c7c6872924rvh).
    
-   You cannot modify the description of a managed account created by KMS in the Tair (Redis OSS-compatible) console.
    

## **Prerequisites**

-   An Elastic Compute Service (ECS) instance is created to connect to the Tair (Redis OSS-compatible) instance that you want to manage. In the example, the operating system of the ECS instance is Alibaba Cloud Linux 3.2104 LTS 64-bit, and Java 1.8.0 is installed on the ECS instance.
    
-   If you use a Resource Access Management (RAM) user or RAM role to manage instance secrets, you must attach the **AliyunKMSSecretAdminAccess** system policy to the user or role. For more information, see [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user).
    

## Procedure

1.  Purchase and enable a KMS instance. For more information, see [Purchase and enable a KMS instance](/help/en/kms/key-management-service/getting-started/purchase-and-enable-a-kms-instance#task-2289651).
    
    When you create a KMS instance, select the same virtual private cloud (VPC) as the ECS instance.
    
    If you already created a KMS instance, add the VPC of the ECS instance to the KMS instance. For more information, see [Access a KMS instance from multiple VPCs in the same region](/help/en/kms/key-management-service/user-guide/access-a-kms-instance-from-multiple-vpcs-in-the-same-region).
    
2.  Create an application access point (AAP). For more information, see [Create an AAP](/help/en/kms/key-management-service/user-guide/create-an-aap).
    
    After an AAP is created, the browser automatically downloads the client key information. The client key information includes the **content** and **password** of the client key. The client key content is stored in a JSON file. Keep the information confidential.
    
3.  Download the Certificate Authority (CA) certificate of the KMS instance on the **Instances** page in the KMS console. For more information, see [Obtain the CA certificate of a KMS instance](/help/en/kms/key-management-service/user-guide/create-an-aap#b41286817d26w).
    
4.  Create a **customer master key (CMK)**. For more information, see [Getting started with keys](/help/en/kms/key-management-service/getting-started/getting-started-with-key-management#section-2fw-w4k-ji7).
    
5.  Create a secret for the Tair (Redis OSS-compatible) instance. For more information, see [Create a Redis/Tair secret](/help/en/kms/key-management-service/user-guide/apsaradb-for-redis-secrets#fa3edec3a1u2m).
    
6.  Write Java test code.
    
    1.  Add Maven dependencies to your project. Then, a Java package is automatically downloaded from the Maven repository. You can also add the following <build> section to package the project dependencies into a single JAR file.
        
        ```
            <dependencies>
                <dependency>
                    <groupId>redis.clients</groupId>
                    <artifactId>jedis</artifactId>
                    <version>5.1.0</version>
                </dependency>
                <dependency>
                    <groupId>com.aliyun</groupId>
                    <artifactId>alibabacloud-dkms-gcs-sdk</artifactId>
                    <version>0.5.2</version>
                </dependency>
                <dependency>
                    <groupId>com.aliyun</groupId>
                    <artifactId>tea</artifactId>
                    <version>1.2.3</version>
                </dependency>
                <dependency>
                    <groupId>org.slf4j</groupId>
                    <artifactId>slf4j-api</artifactId>
                    <version>1.7.10</version>
                </dependency>
                <dependency>
                    <groupId>ch.qos.logback</groupId>
                    <artifactId>logback-classic</artifactId>
                    <version>1.2.9</version>
                </dependency>
            </dependencies>
        
            <build>
                <plugins>
                    <plugin>
                        <groupId>org.apache.maven.plugins</groupId>
                        <artifactId>maven-assembly-plugin</artifactId>
                        <version>3.3.0</version>
                        <configuration>
                            <archive>
                                <manifest>
                                    <mainClass>
                                        com.aliyun.KMSJedisTest
                                    </mainClass>
                                </manifest>
                            </archive>
                            <descriptorRefs>
                                <descriptorRef>jar-with-dependencies</descriptorRef>
                            </descriptorRefs>
                        </configuration>
                        <executions>
                            <execution>
                                <id>assemble-all</id>
                                <phase>package</phase>
                                <goals>
                                    <goal>single</goal>
                                </goals>
                            </execution>
                        </executions>
                    </plugin>
                    <plugin>
                        <groupId>org.apache.maven.plugins</groupId>
                        <artifactId>maven-compiler-plugin</artifactId>
                        <configuration>
                            <source>1.8</source>
                            <target>1.8</target>
                        </configuration>
                    </plugin>
                </plugins>
            </build>
        ```
        
    2.  Write code to implement the **KMSJedisTest.java** main class.
        
        **Note**
        
        In this example, the credentialCacheTime parameter is added to prevent the system from retrieving the password from KMS every time a new connection is established. The default value of the credentialCacheTime parameter is 600 seconds. During the cache time, the cached password is returned without accessing KMS. You can call the setCredentialCacheTime operation to adjust the cache duration. We recommend that you set the cache duration to at least 10 minutes.
        
        ```
        package com.aliyun;
        
        import java.time.Duration;
        
        import redis.clients.jedis.DefaultJedisClientConfig;
        import redis.clients.jedis.HostAndPort;
        import redis.clients.jedis.Jedis;
        import redis.clients.jedis.JedisPool;
        
        public class KMSJedisTest {
            public static void main(String[] args) throws Exception {
                if (args.length < 2) {
                    System.out.println(
                        "Please input kmsEndpoint, clientKeyFilePath, clientKeyPass, caCertPath, secretName, redisHost");
                    return;
                }
        
                String endpoint = args[0];
                String clientKeyFilePath = args[1];
                String clientKeyPass = args[2];
                String caCertPath = args[3];
                String secretName = args[4];
                KMSRedisCredentialsProvider kmsRedisCredentialsProvider = new KMSRedisCredentialsProvider(endpoint,
                    clientKeyFilePath, clientKeyPass, caCertPath, secretName);
                kmsRedisCredentialsProvider.setCredentialCacheTime(Duration.ofSeconds(10)); // Specify a cache duration to prevent frequent requests to KMS.
        
                String redisHost = args[5];
                JedisPool jedisPool = new JedisPool(HostAndPort.from(redisHost),
                    DefaultJedisClientConfig.builder().credentialsProvider(kmsRedisCredentialsProvider).build());
        
                for (int i = 0; i < Integer.MAX_VALUE; i++) {
                    Thread.sleep(1000);
                    try (Jedis jedis = jedisPool.getResource()) {
                        System.out.println(jedis.set("" + i, "" + i));
                        System.out.println(jedis.get("" + i));
                    } catch (Exception e) {
                        System.out.println(e);
                    }
                }
            }
        }
        ```
        
    3.  Write code to implement the **KMSRedisCredentialsProvider.java** class.
        
        ```
        package com.aliyun;
        
        import java.time.Duration;
        import java.time.LocalDateTime;
        import java.time.format.DateTimeFormatter;
        
        import org.json.JSONObject;
        import org.slf4j.Logger;
        import org.slf4j.LoggerFactory;
        import redis.clients.jedis.DefaultRedisCredentials;
        import redis.clients.jedis.RedisCredentials;
        import redis.clients.jedis.RedisCredentialsProvider;
        
        import com.aliyun.dkms.gcs.openapi.models.Config;
        import com.aliyun.dkms.gcs.sdk.Client;
        import com.aliyun.dkms.gcs.sdk.models.*;
        
        public class KMSRedisCredentialsProvider implements RedisCredentialsProvider {
            private static final Logger logger = LoggerFactory.getLogger(KMSRedisCredentialsProvider.class);
        
            private final String endpoint;
            private final String clientKeyFilePath;
            private final String clientKeyPass;
            private final String caCertPath;
            private final String secretName;
            private static Client client = null;
        
            // credential cache time
            private Duration credentialCacheTime = Duration.ofSeconds(600);
            private DefaultRedisCredentials cachedCredentials = null;
            private LocalDateTime credentialsExpiration = null;
        
            public KMSRedisCredentialsProvider(String endpoint, String clientKeyFilePath, String clientKeyPass,
                String caCertPath, String secretName) {
                this.endpoint = endpoint;
                this.clientKeyFilePath = clientKeyFilePath;
                this.clientKeyPass = clientKeyPass;
                this.caCertPath = caCertPath;
                this.secretName = secretName;
                createClientInstance(endpoint, clientKeyFilePath, clientKeyPass, caCertPath);
            }
        
            public void setCredentialCacheTime(Duration credentialCacheTime) {
                this.credentialCacheTime = credentialCacheTime;
            }
        
            private static synchronized void createClientInstance(String endpoint, String clientKeyFilePath,
                String clientKeyPass, String caCertPath) {
                if (client == null) {
                    try {
                        client = new Client(new Config()
                            .setProtocol("https")
                            .setEndpoint(endpoint)
                            .setCaFilePath(caCertPath)
                            .setClientKeyFile(clientKeyFilePath)
                            .setPassword(clientKeyPass));
                    } catch (Exception e) {
                        logger.error("Init kms client failed", e);
                        throw new RuntimeException(e);
                    }
                }
            }
        
            @Override
            public RedisCredentials get() {
                try {
                    LocalDateTime now = LocalDateTime.now();
                    // Check cache
                    if (cachedCredentials != null && now.isBefore(credentialsExpiration)) {
                        return cachedCredentials;
                    }
        
                    GetSecretValueRequest request = new GetSecretValueRequest().setSecretName(secretName);
                    GetSecretValueResponse getSecretValueResponse = client.getSecretValue(request);
                    logger.debug("Now: " + now.format(DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm:ss")) +
                        ", getSecretValueRequest: " + request);
                    String secretData = getSecretValueResponse.getSecretData();
                    JSONObject secretObject = new JSONObject(secretData);
                    if (secretObject.get("AccountName") == null || secretObject.get("AccountPassword") == null) {
                        throw new IllegalArgumentException("secretData must contain AccountName and AccountPassword");
                    }
                    cachedCredentials = new DefaultRedisCredentials(secretObject.get("AccountName").toString(),
                        secretObject.get("AccountPassword").toString());
                    credentialsExpiration = now.plusSeconds(credentialCacheTime.getSeconds());
                    return cachedCredentials;
                } catch (Exception e) {
                    logger.error("get secret failed", e);
                    throw new RuntimeException(e);
                }
            }
        
            @Override
            public void prepare() {
                // do nothing
            }
        
            @Override
            public void cleanUp() {
                // do nothing
            }
        }
        ```
        
    4.  Run the `mvn package` command to package the entire project into a JAR file.
        
    
7.  On the ECS instance, use the SDK for Java to connect to the Tair (Redis OSS-compatible) instance.
    
    Sample syntax:
    
    ```
    java -jar <kms-redis-jar-with-dependencies.jar> <kmsEndpoint> <clientKeyFilePath> <clientKeyPass> <caCertPath> <secretName> <redisHost>
    ```
    
    Parameters:
    
    -   **kms-redis-jar-with-dependencies.jar**: the JAR file generated from the Maven packaging process. Make sure that you use the JAR file that has the **jar-with-dependencies** suffix.
        
    -   **kmsEndpoint**: the VPC endpoint of the KMS instance. You can obtain the endpoint on the KMS instance details page.
        
    -   **clientKeyFilePath**: the path to the client key file. This is the JSON file downloaded in Step 2.
        
    -   **clientKeyPass**: the password for the client key. The password is stored in the TXT file downloaded in Step 2.
        
    -   **caCertPath**: the CA certificate of the KMS instance, which is the PEM file downloaded in Step 3.
        
    -   **secretName**: the name of the instance secret created in Step 5.
        
    -   **redisHost**: the VPC endpoint and port number of the Tair (Redis OSS-compatible) instance, such as **r-bp1g727yrai5yh\*\*\*\*.redis.rds.aliyuncs.com:6379**.
        
    
    Sample command:
    
    ```
    java -jar kms-redis-samples-1.0-SNAPSHOT-jar-with-dependencies.jar kst-hzz6674e7fbw21x9x****.cryptoservice.kms.aliyuncs.com /root/clientKey_KAAP.6432ddc6-f23a-4d78-ac84-****4598206b.json 267d1****1cda4415058e1d72ec49e0a /root/PrivateKmsCA_kst-hzz6674e7fbw21x9x****.pem kms-redis r-bp1g727yrai5yh****.redis.rds.aliyuncs.com:6379
    ```
    
    The following output is returned, which indicates that the connection is established:
    
    ```
    0
    OK
    1
    OK
    2
    OK
    3
    OK
    4
    OK
    ```
    
8.  Immediately rotate the secret in the KMS console. For more information, see [Rotate a Redis/Tair secret](/help/en/kms/key-management-service/user-guide/apsaradb-for-redis-secrets#053babd220exj).
    
    During the rotation, KMS uses another account (**username** or **username\_clone**) to access the Tair (Redis OSS-compatible) instance.
    
    If the ECS instance can connect to the Tair (Redis OSS-compatible) instance, the password rotation feature works as expected.
    
    ```
    ...
    30
    OK
    31
    OK
    32
    OK
    33
    OK
    ```
    
9.  Perform a master-replica switchover or high-availability (HA) switchover on the Tair (Redis OSS-compatible) instance and check the status of the client.
    
    The following output is returned, which indicates that a transient connection occurs during the HA switchover, and the KMS instance updates the secret and reconnects to the Tair (Redis OSS-compatible) instance:
    
    ```
    138
    OK
    139
    redis.clients.jedis.exceptions.JedisConnectionException: Unexpected end of stream.
    OK
    142
    OK
    143
    OK
    ```
    

## **References**

-   [Use a client to connect to an instance](/help/en/redis/user-guide/use-a-client-to-connect-to-an-apsaradb-for-redis-instance)
    
-   [Manage and use Redis/Tair secrets](/help/en/kms/key-management-service/user-guide/apsaradb-for-redis-secrets)

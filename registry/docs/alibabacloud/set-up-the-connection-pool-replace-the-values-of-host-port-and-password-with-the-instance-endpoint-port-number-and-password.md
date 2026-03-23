When you use a client to connect to a Tair (Redis OSS-compatible) instance, you can enable TLS (SSL) encryption to improve data link security and ensure data integrity. You can use any client that is compatible with the Redis protocol. This topic provides sample code that shows how to connect to an instance using common clients.

## Prerequisites

-   TLS (SSL) encryption is enabled for your Tair instance. For more information, see [Enable TLS encryption](/help/en/redis/user-guide/enable-tls-encryption#task-2314850).
    
-   The client is hosted on an Elastic Compute Service (ECS) instance that resides in the same virtual private cloud (VPC) as the Tair instance.
    

## **Notes**

If [password-free access over VPC](/help/en/redis/user-guide/enable-password-free-access#concept-ttq-dst-j2b) is enabled for the instance, clients within the same VPC can connect to the instance without a password.

## Preparations

1.  Add the internal IP address of the ECS instance that hosts the client to a whitelist of the Tair instance. For more information, see [Configure whitelists](/help/en/redis/getting-started/step-2-configure-whitelists#concept-lmv-qhf-vdb).
    
2.  Obtain the following information to configure in your client program's code:
    
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
        
    
3.  Download the certification authority (CA) certificate. For more information, see [Enable TLS encryption](/help/en/redis/user-guide/enable-tls-encryption#task-2314850).
    

## Proxy **connection mode**

This mode applies to instances that use the standard architecture, cluster architecture with proxy mode, or read/write splitting architecture. Expand the following sections to view the code examples.

### redis-cli

When you compile Redis, you must specify `BUILD_TLS=yes` to enable TLS connections in redis-cli.

1.  Log on to the ECS instance and run the following commands to download, install, and compile redis-cli.
    
    ```
    sudo yum -y install openssl-devel gcc    # Install the gcc dependency.
    wget https://download.redis.io/releases/redis-7.2.0.tar.gz
    tar xzf redis-7.2.0.tar.gz
    cd redis-7.2.0&&make BUILD_TLS=yes
    ```
    
    This topic uses Redis 7.2.0 as an example. You can also install other versions. The compilation and installation process typically takes 2 to 3 minutes.
    
2.  Run the following command in the command-line window to connect to the instance.
    
    ```
    ./src/redis-cli -h r-bp14joyeihew30****.redis.rds.aliyuncs.com -p 6379 --tls --cacert ./ApsaraDB-CA-Chain.pem
    ```
    
    After the **cacert** parameter, specify the path to the CA certificate.
    
3.  Run the following command to complete password authentication.
    
    ```
    AUTH password
    ```
    
    The OK response indicates that you are connected to the instance.
    

### Java

This example uses [Jedis](https://github.com/redis/jedis) version 3.6.0. Use the latest version.

```
import java.io.FileInputStream;
import java.io.InputStream;
import java.security.KeyStore;
import java.security.SecureRandom;
import javax.net.ssl.SSLContext;
import javax.net.ssl.SSLSocketFactory;
import javax.net.ssl.TrustManager;
import javax.net.ssl.TrustManagerFactory;
import org.apache.commons.pool2.impl.GenericObjectPoolConfig;
import redis.clients.jedis.Jedis;
import redis.clients.jedis.JedisPool;

public class JedisSSLTest {
    private static SSLSocketFactory createTrustStoreSSLSocketFactory(String jksFile) throws Exception {
        KeyStore trustStore = KeyStore.getInstance("jks");
        InputStream inputStream = null;
        try {
            inputStream = new FileInputStream(jksFile);
            trustStore.load(inputStream, null);
        } finally {
            inputStream.close();
        }

        TrustManagerFactory trustManagerFactory = TrustManagerFactory.getInstance("PKIX");
        trustManagerFactory.init(trustStore);
        TrustManager[] trustManagers = trustManagerFactory.getTrustManagers();

        SSLContext sslContext = SSLContext.getInstance("TLS");
        sslContext.init(null, trustManagers, new SecureRandom());
        return sslContext.getSocketFactory();
    }

    public static void main(String[] args) throws Exception {
        // ApsaraDB-CA-Chain.jks is the certificate file name.
        final SSLSocketFactory sslSocketFactory = createTrustStoreSSLSocketFactory("ApsaraDB-CA-Chain.jks");
        // The connection pool settings are the instance endpoint, port number, timeout setting, and password.
        JedisPool pool = new JedisPool(new GenericObjectPoolConfig(), "r-bp1zxszhcgatnx****.redis.rds.aliyuncs.com",
            6379, 2000, "redistest:Pas***23", 0, true, sslSocketFactory, null, null);

        try (Jedis jedis = pool.getResource()) {
            jedis.set("key", "value");
            System.out.println(jedis.get("key"));
        }
    }
}
```

### Python

This example uses the [redis-py](https://github.com/andymccurdy/redis-py) client. Use the latest version.

## Connection pool

```
#!/bin/python
import redis

# Set up the connection pool. Replace the values of host, port, and password with the instance endpoint, port number, and password.
# ApsaraDB-CA-Chain.pem is the certificate file name.
pool = redis.ConnectionPool(connection_class=redis.connection.SSLConnection, max_connections=100,
                            host="r-bp1zxszhcgatnx****.redis.rds.aliyuncs.com", port=6379, password="redistest:Pas***23",
                            ssl_cert_reqs=True, ssl_ca_certs="ApsaraDB-CA-Chain.pem")
client = redis.Redis(connection_pool=pool)
client.set("hi", "redis")
print client.get("hi")
```

## Standard connection

```
#!/bin/python
import redis

# Set the connection information. Replace the values of host, port, and password with the instance endpoint, port number, and password.
# ApsaraDB-CA-Chain.pem is the certificate file name.
client = redis.Redis(host="r-bp1zxszhcgatnx****.redis.rds.aliyuncs.com", port=6379,
                     password="redistest:Test1234", ssl=True,
                    ssl_cert_reqs="required", ssl_ca_certs="ApsaraDB-CA-Chain.pem")

client.set("hello", "world")
print client.get("hello")
```

### PHP

This example uses the [predis](https://github.com/predis/predis) client. Use the latest version. If you use the [phpredis](https://github.com/phpredis/phpredis) client, see [phpredis/phpredis#1600](https://github.com/phpredis/phpredis/issues/1600) for a connection example.

```
<?php

require __DIR__.'/predis/autoload.php';

/* Set the connection information. Replace the values of host, port, and password with the instance endpoint, port number, and password.
ApsaraDB-CA-Chain.pem is the certificate file name. */
$client = new Predis\Client([
    'scheme' => 'tls',
    'host'   => 'r-bp1zxszhcgatnx****.redis.rds.aliyuncs.com',
    'port'   => 6379,
    'password' => 'redistest:Pas***23',
    'ssl'    => ['cafile' => 'ApsaraDB-CA-Chain.pem', 'verify_peer' => true],
]);
/* Replace the endpoint and port in the following code. */
//$client = new Predis\Client('tls://r-bp1zxszhcgatnx****.redis.rds.aliyuncs.com:6379?ssl[cafile]=ApsaraDB-CA-Chain.pem&ssl[verify_peer]=1');

$client->set("hello", "world");
print $client->get("hello")."\n";

?>
```

### C#

This example uses the [StackExchange.Redis](https://stackexchange.github.io/StackExchange.Redis/) client. Use the latest version.

```
using System.Net.Security;
using System.Security.Cryptography.X509Certificates;
using StackExchange.Redis;

namespace SSLTest
{
    class Program
    {
        private static bool CheckServerCertificate(object sender, X509Certificate certificate,
            X509Chain chain, SslPolicyErrors sslPolicyErrors)
        {
            var ca = new X509Certificate2(
                "/your path/ApsaraDB-CA-Chain/ApsaraDB-CA-Chain.pem");
            return chain.ChainElements
                .Cast<X509ChainElement>()
                .Any(x => x.Certificate.Thumbprint == ca.Thumbprint);
        }

        static void Main(string[] args)
        {
          // Set the connection information. Replace the values of host, port, and password with the instance endpoint, port number, and password.
          // ApsaraDB-CA-Chain.pem is the certificate file name.
            ConfigurationOptions config = new ConfigurationOptions()
            {
                EndPoints = {"r-bp10q23zyfriodu*****.redis.rds.aliyuncs.com:6379"},
                Password = "redistest:Pas***23",
                Ssl = true,
            };

            config.CertificateValidation += CheckServerCertificate;
            using (var conn = ConnectionMultiplexer.Connect(config))
            {
                Console.WriteLine("connected");
                var db = conn.GetDatabase();
                db.StringSet("hello", "world");
                Console.WriteLine(db.StringGet("hello"));
            }
        }
    }
}
```

### Spring Data Redis

This example uses [Spring Data Redis](https://github.com/spring-projects/spring-data-redis/releases) version 2.7.12 (for Java 1.8). Use the latest version.

```
@Configuration
public class RedisConfig {
    @Bean
    public RedisConnectionFactory redisConnectionFactory() {
        // Store the TLS certificate configuration in a properties file.
        String host = "r-bp1zxszhcgatnx****.redis.rds.aliyuncs.com";
        int port = 6379;
        String password = "Pas***23";
        String trustStoreFilePath = "/path/to/ApsaraDB-CA-Chain.jks";

        ClientOptions clientOptions = ClientOptions.builder().sslOptions(
            SslOptions.builder().jdkSslProvider().truststore(new File(trustStoreFilePath)).build()).build();
        RedisStandaloneConfiguration config = new RedisStandaloneConfiguration();
        config.setHostName(host);
        config.setPort(port);
        config.setPassword(password);
        LettuceClientConfiguration lettuceClientConfiguration = LettuceClientConfiguration.builder()
            .clientOptions(clientOptions)
            .useSsl().build();
        return new LettuceConnectionFactory(config, lettuceClientConfiguration);
    }

    @Bean
    public RedisTemplate<String, Object> redisTemplate(RedisConnectionFactory redisConnectionFactory) {
        RedisTemplate<String, Object> redisTemplate = new RedisTemplate<>();
    }
}
```

### Lettuce

This example uses Lettuce version 6.2.4.RELEASE. Use the latest version.

```
public class SSLExample {
    public static void main(String[] args) throws Exception {
        String host = "r-bp1zxszhcgatnx****.redis.rds.aliyuncs.com";
        int port = 6379;
        String password = "Pas***23";
        String trustStoreFilePath = "/path/to/ApsaraDB-CA-Chain.jks";

        RedisURI uri = RedisURI.builder()
            .withHost(host)
            .withPort(port)
            .withPassword(password.toCharArray())
            .withSsl(true).build();

        SslOptions sslOptions = SslOptions.builder()
            .jdkSslProvider()
            .truststore(new File(trustStoreFilePath)).build();

        ClientOptions clientOptions = ClientOptions.builder()
            .sslOptions(sslOptions).build();
        RedisClient client = RedisClient.create(uri);
        client.setOptions(clientOptions);

        RedisCommands<String, String> sync = client.connect().sync();
        System.out.println(sync.set("key", "value"));
        System.out.println(sync.get("key"));

    }
}
```

### **Go**

This example uses the go-redis client v9.5.1. Use v9.0 or later.

```
package main

import (
	"context"
	"fmt"
	"io/ioutil"
	"crypto/tls"
	"crypto/x509"
	"github.com/redis/go-redis/v9"
)

var ctx = context.Background()

func main() {
        caCert, err := ioutil.ReadFile("/root/ApsaraDB-CA-Chain.pem")
	if err != nil {
		fmt.Println("Error loading CA certificate:", err)
		return
	}

	caCertPool := x509.NewCertPool()
	caCertPool.AppendCertsFromPEM(caCert)

	tlsConfig := &tls.Config{
		RootCAs:            caCertPool,
		InsecureSkipVerify: true, // Not actually skipping, we check the cert in VerifyPeerCertificate
		VerifyPeerCertificate: func(rawCerts [][]byte, verifiedChains [][]*x509.Certificate) error {
			// Code copy/pasted and adapted from
			// https://github.com/golang/go/blob/81555cb4f3521b53f9de4ce15f64b77cc9df61b9/src/crypto/tls/handshake_client.go#L327-L344, but adapted to skip the hostname verification.
			// See https://github.com/golang/go/issues/21971#issuecomment-412836078.

			// If this is the first handshake on a connection, process and
			// (optionally) verify the server's certificates.
			certs := make([]*x509.Certificate, len(rawCerts))
			for i, asn1Data := range rawCerts {
				cert, err := x509.ParseCertificate(asn1Data)
				if err != nil {
					panic(err)
				}
				certs[i] = cert
			}

			opts := x509.VerifyOptions{
				Roots:         caCertPool,
				DNSName:       "", // <- skip hostname verification
				Intermediates: x509.NewCertPool(),
			}

			for i, cert := range certs {
				if i == 0 {
					continue
				}
				opts.Intermediates.AddCert(cert)
			}
			_, err := certs[0].Verify(opts)
			return err
		},
	}

	rdb := redis.NewClient(&redis.Options{
		Addr:    "r-2zee50zxi5iiqm****.redis.rds-aliyun.rds.aliyuncs.com:6379",
		Username: "default",
		Password: "Pas***23",
		TLSConfig: tlsConfig,
	})

	err = rdb.Set(ctx, "key", "value", 0).Err()
	if err != nil {
		panic(err)
	}

	val, err := rdb.Get(ctx, "key").Result()
	if err != nil {
		panic(err)
	}
	fmt.Println("key:", val)
}
```

## **Direct connection mode**

This mode applies only to instances that use the cluster architecture with direct connection mode. Expand the following sections to view the code examples.

### **redis-cli**

When you compile Redis, you must specify `BUILD_TLS=yes` to enable TLS connections in redis-cli.

1.  Log on to the ECS instance and run the following commands to download, install, and compile redis-cli.
    
    ```
    sudo yum -y install openssl-devel gcc    # Install the gcc dependency.
    wget https://download.redis.io/releases/redis-7.2.0.tar.gz
    tar xzf redis-7.2.0.tar.gz
    cd redis-7.2.0&&make BUILD_TLS=yes
    ```
    
    This topic uses Redis 7.2.0 as an example. You can also install other versions. The compilation and installation process typically takes 2 to 3 minutes.
    
2.  Run the following command in the command-line window to connect to the instance.
    
    ```
    ./src/redis-cli -h r-bp14joyeihew30****.redis.rds.aliyuncs.com -p 6379 -c --tls --cacert ./ApsaraDB-CA-Chain.pem
    ```
    
    After the **cacert** parameter, specify the path to the CA certificate.
    
3.  Run the following command to complete password authentication.
    
    ```
    AUTH password
    ```
    
    The OK response indicates that you are connected to the instance.
    

### Java

This example uses [Jedis](https://github.com/redis/jedis) version 4.3.0. Use the latest version.

```
import java.io.FileInputStream;
import java.io.InputStream;
import java.security.KeyStore;
import java.security.SecureRandom;
import java.util.HashSet;
import java.util.Set;
import javax.net.ssl.SSLContext;
import javax.net.ssl.SSLSocketFactory;
import javax.net.ssl.TrustManager;
import javax.net.ssl.TrustManagerFactory;
import redis.clients.jedis.ConnectionPoolConfig;
import redis.clients.jedis.DefaultJedisClientConfig;
import redis.clients.jedis.HostAndPort;
import redis.clients.jedis.JedisCluster;

public class JedisClusterTSL {
    private static final int DEFAULT_TIMEOUT = 2000;
    private static final int DEFAULT_REDIRECTIONS = 5;
    private static final ConnectionPoolConfig jedisPoolConfig = new ConnectionPoolConfig();

    private static SSLSocketFactory createTrustStoreSSLSocketFactory(String jksFile) throws Exception {
        KeyStore trustStore = KeyStore.getInstance("jks");
        InputStream inputStream = null;
        try {
            inputStream = new FileInputStream(jksFile);
            trustStore.load(inputStream, null);
        } finally {
            inputStream.close();
        }

        TrustManagerFactory trustManagerFactory = TrustManagerFactory.getInstance("PKIX");
        trustManagerFactory.init(trustStore);
        TrustManager[] trustManagers = trustManagerFactory.getTrustManagers();

        SSLContext sslContext = SSLContext.getInstance("TLS");
        sslContext.init(null, trustManagers, new SecureRandom());
        return sslContext.getSocketFactory();
    }

    public static void main(String args[]) throws Exception{
        // The maximum number of idle connections. In direct connection mode, the client connects directly to a database shard. Make sure that the value of (Number of business machines × MaxTotal) is less than the maximum number of connections for a single database shard.
        jedisPoolConfig.setMaxTotal(30);
        // The maximum number of idle connections. Set this value as needed.
        jedisPoolConfig.setMaxIdle(30);
        jedisPoolConfig.setMinIdle(15);

        // The direct connection endpoint.
        int port = 6379;
        String host = "r-2zee50zxi5iiq****.redis.rds-aliyun.rds.aliyuncs.com";
        String user = "default";
        String password = "Pas***23";

        final SSLSocketFactory sslSocketFactory = createTrustStoreSSLSocketFactory("/root/ApsaraDB-CA-Chain.jks");
        DefaultJedisClientConfig jedisClientConfig = DefaultJedisClientConfig.builder().connectionTimeoutMillis(DEFAULT_TIMEOUT)
            .socketTimeoutMillis(DEFAULT_TIMEOUT)
            .user(user).password(password)
            .ssl(true)
            .sslSocketFactory(sslSocketFactory).build();

        Set<HostAndPort> jedisClusterNode = new HashSet<HostAndPort>();
        jedisClusterNode.add(new HostAndPort(host, port));
        JedisCluster jc = new JedisCluster(jedisClusterNode, jedisClientConfig, DEFAULT_REDIRECTIONS, jedisPoolConfig);

        System.out.println(jc.set("key", "value"));
        System.out.println(jc.get("key"));

        jc.close();     // When the application exits and resources need to be destroyed, call this method. This method disconnects the client and releases resources.
    }
}
```

### Python

This example uses the [redis-py](https://github.com/andymccurdy/redis-py) client 4.3.6 (for Python 3.6). Use the latest version.

```
#!/usr/bin/env python
from redis.cluster import RedisCluster

# Replace the values of host and port with the instance endpoint and port number.
host = 'r-2zee50zxi5iiqm****.redis.rds-aliyun.rds.aliyuncs.com'
port = 6379
# Replace the values of user and pwd with the instance account and password.
user = 'default'
pwd = 'Pas***23'

rc = RedisCluster(host=host, port=port, username=user, password=pwd, ssl=True, ssl_ca_certs="/root/ApsaraDB-CA-Chain.pem")
# After the connection is established, you can perform database operations. The following code provides an example of how to use SET and GET.
rc.set('foo', 'bar')
print(rc.get('foo'))
```

### PHP

This example uses the [phpredis](https://github.com/phpredis/phpredis) client 5.3.7. Use the latest version.

```
<?php
 // The direct connection endpoint and port.
 $array = ['r-2zee50zxi5iiqm****.redis.rds-aliyun.rds.aliyuncs.com:6379'];
 // The connection password.
 $pwd = "Pas***23";
 // TLS connection information.
 $tls = ["verify_peer" => false, "verify_peer_name" => false];
 // Connect to the cluster with a password.
 $obj_cluster = new RedisCluster(NULL, $array, 1.5, 1.5, true, $pwd, $tls);

 // Output the connection result.
 var_dump($obj_cluster);

 if ($obj_cluster->set("foo", "bar") == false) {
     die($obj_cluster->getLastError());
 }
 $value = $obj_cluster->get("foo");
 echo $value;
 echo "\n";
 ?>
```

### C#

This example uses the [StackExchange.Redis](https://stackexchange.github.io/StackExchange.Redis/) client. Use the latest version.

```
using StackExchange.Redis;
using System;
using System.Linq;
using System.Net.Security;
using System.Security.Cryptography.X509Certificates;

namespace TairClient
{
    class Program
    {
        static void Main()
        {
            // The direct connection endpoint.
            const string Host = "r-2zee50zxi5iiqm****.redis.rds-aliyun.rds.aliyuncs.com";
            const int Port = 6379;
            Console.WriteLine("connecting...");
            var config = new ConfigurationOptions
            {
                EndPoints = { { Host, Port } },
                Ssl = true,
                Password = "Pas***23",
            };
            config.CertificateValidation += (sender, cert, chain, errors) =>
            {
                if (errors == SslPolicyErrors.RemoteCertificateChainErrors || errors ==  SslPolicyErrors.RemoteCertificateNameMismatch)
                {
                    return true;
                }
                var caCert = LoadCertificateFromPem("/root/ApsaraDB-CA-Chain.pem");

                var isCertIssuedByTrustedCA = chain.ChainElements
                    .Cast<X509ChainElement>()
                    .Any(x => x.Certificate.Thumbprint.Equals(caCert.Thumbprint, StringComparison.OrdinalIgnoreCase));

                // Customize other validation logic...
                return isCertIssuedByTrustedCA;
            };

            using (var conn = ConnectionMultiplexer.Connect(config))
            {
                Console.WriteLine("connected");
                var db = conn.GetDatabase();
                db.StringSet("hello", "world");
                Console.WriteLine(db.StringGet("hello")); // writes: world
            }
        }

        private static X509Certificate2 LoadCertificateFromPem(string pemFilePath)
        {
            // Use the static method of X509Certificate2 to load the certificate directly from the PEM content.
            X509Certificate2 cert = X509Certificate2.CreateFromPem(File.ReadAllText(pemFilePath));
            return cert;
        }

    }
}
```

### **Spring Data Redis**

This example uses [Spring Data Redis](https://github.com/spring-projects/spring-data-redis/releases) version 2.7.5 (for Java 1.8). Use the latest version.

## **With Jedis (recommended)**

```
import java.io.FileInputStream;
import java.io.InputStream;
import java.security.KeyStore;
import java.security.SecureRandom;
import java.util.Arrays;
import java.util.List;

import javax.net.ssl.SSLContext;
import javax.net.ssl.SSLSocketFactory;
import javax.net.ssl.TrustManager;
import javax.net.ssl.TrustManagerFactory;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.connection.RedisClusterConfiguration;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.connection.jedis.JedisClientConfiguration;
import org.springframework.data.redis.connection.jedis.JedisConnectionFactory;
import org.springframework.data.redis.core.RedisTemplate;
import redis.clients.jedis.JedisPoolConfig;

@Configuration
public class RedisConfigJedis {
    private static SSLSocketFactory createTrustStoreSSLSocketFactory(String jksFile) throws Exception {
        KeyStore trustStore = KeyStore.getInstance("jks");
        InputStream inputStream = null;
        try {
            inputStream = new FileInputStream(jksFile);
            trustStore.load(inputStream, null);
        } finally {
            inputStream.close();
        }

        TrustManagerFactory trustManagerFactory = TrustManagerFactory.getInstance("PKIX");
        trustManagerFactory.init(trustStore);
        TrustManager[] trustManagers = trustManagerFactory.getTrustManagers();

        SSLContext sslContext = SSLContext.getInstance("TLS");
        sslContext.init(null, trustManagers, new SecureRandom());
        return sslContext.getSocketFactory();
    }

    @Bean
    public RedisConnectionFactory redisConnectionFactory() throws Exception {
        String host = "r-2zee50zxi5iiqm****.redis.rds-aliyun.rds.aliyuncs.com:6379";
        String user = "default";
        String password = "Pas***23";
        String trustStoreFilePath = "/root/ApsaraDB-CA-Chain.jks";

        List<String> clusterNodes = Arrays.asList(host);
        RedisClusterConfiguration redisClusterConfiguration = new RedisClusterConfiguration(clusterNodes);
        redisClusterConfiguration.setUsername(user);
        redisClusterConfiguration.setPassword(password);

        JedisPoolConfig jedisPoolConfig = new JedisPoolConfig();
        // The maximum number of idle connections. In direct connection mode, the client connects directly to a database shard. Make sure that the value of (Number of business machines × MaxTotal) is less than the maximum number of connections for a single database shard.
        jedisPoolConfig.setMaxTotal(30);
        jedisPoolConfig.setMaxIdle(20);
        jedisPoolConfig.setMinIdle(20);

        final SSLSocketFactory sslSocketFactory = createTrustStoreSSLSocketFactory(trustStoreFilePath);
        JedisClientConfiguration jedisClientConfiguration = JedisClientConfiguration.builder().useSsl()
            .sslSocketFactory(sslSocketFactory).and().usePooling().poolConfig(jedisPoolConfig).build();

        return new JedisConnectionFactory(redisClusterConfiguration, jedisClientConfiguration);
    }

    @Bean
    public RedisTemplate<String, Object> redisTemplate(RedisConnectionFactory redisConnectionFactory) {
        RedisTemplate<String, Object> redisTemplate = new RedisTemplate<>();
        redisTemplate.setConnectionFactory(redisConnectionFactory);
        return redisTemplate;
    }
}
```

## With Lettuce

```
import java.io.File;

import io.lettuce.core.ClientOptions;
import io.lettuce.core.SslOptions;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.redis.connection.RedisClusterConfiguration;
import org.springframework.data.redis.connection.RedisConnectionFactory;
import org.springframework.data.redis.connection.lettuce.LettuceClientConfiguration;
import org.springframework.data.redis.connection.lettuce.LettuceConnectionFactory;
import org.springframework.data.redis.core.RedisTemplate;

@Configuration
public class RedisConfig {
    @Bean
    public RedisConnectionFactory redisConnectionFactory() {
        String host = "r-2zee50zxi5iiqm****.redis.rds-aliyun.rds.aliyuncs.com";
        int port = 6379;
        String user = "default";
        String password = "Pas***23";
        String trustStoreFilePath = "/root/ApsaraDB-CA-Chain.jks";

        ClientOptions clientOptions = ClientOptions.builder().sslOptions(
            SslOptions.builder().jdkSslProvider().truststore(new File(trustStoreFilePath)).build()).build();

        RedisClusterConfiguration clusterConfiguration = new RedisClusterConfiguration();
        clusterConfiguration.clusterNode(host, port);
        clusterConfiguration.setUsername(user);
        clusterConfiguration.setPassword(password);

        LettuceClientConfiguration lettuceClientConfiguration = LettuceClientConfiguration.builder()
            .clientOptions(clientOptions)
            .useSsl()
            .disablePeerVerification()
            .build();
        return new LettuceConnectionFactory(clusterConfiguration, lettuceClientConfiguration);
    }

    @Bean
    public RedisTemplate<String, Object> redisTemplate(RedisConnectionFactory redisConnectionFactory) {
        RedisTemplate<String, Object> redisTemplate = new RedisTemplate<>();
        redisTemplate.setConnectionFactory(redisConnectionFactory);
        return redisTemplate;
    }
}
```

### **Lettuce**

This example uses Lettuce version 6.3.0.RELEASE. Use the latest version.

```
import java.io.File;
import java.time.Duration;

import io.lettuce.core.RedisURI;
import io.lettuce.core.SocketOptions;
import io.lettuce.core.SocketOptions.KeepAliveOptions;
import io.lettuce.core.SocketOptions.TcpUserTimeoutOptions;
import io.lettuce.core.SslOptions;
import io.lettuce.core.SslVerifyMode;
import io.lettuce.core.cluster.ClusterClientOptions;
import io.lettuce.core.cluster.ClusterTopologyRefreshOptions;
import io.lettuce.core.cluster.RedisClusterClient;
import io.lettuce.core.cluster.api.StatefulRedisClusterConnection;

public class SSLClusterExample {
    /**
     *  TCP_KEEPALIVE is enabled, and the three parameters are configured as follows:
     *  TCP_KEEPIDLE = 30
     *  TCP_KEEPINTVL = 10
     *  TCP_KEEPCNT = 3
     */
    private static final int TCP_KEEPALIVE_IDLE = 30;

    /**
     * TCP_USER_TIMEOUT can prevent Lettuce from continuously timing out in case of a breakdown.
     * refer: https://github.com/lettuce-io/lettuce-core/issues/2082
     */
    private static final int TCP_USER_TIMEOUT = 30;

    public static void main(String[] args) throws Exception {
        String host = "r-2zee50zxi5iiqm****.redis.rds-aliyun.rds.aliyuncs.com";
        int port = 6379;
        String password = "Pas***23";
        String trustStoreFilePath = "/root/ApsaraDB-CA-Chain.jks";

        RedisURI uri = RedisURI.builder()
            .withHost(host)
            .withPort(port)
            .withPassword(password.toCharArray())
            .withSsl(true)
            .withVerifyPeer(SslVerifyMode.CA) // Due to the nature of direct cluster connections, SslVerifyMode.FULL cannot be used. You must skip hostname verification.
            .build();

        SslOptions sslOptions = SslOptions.builder()
            .jdkSslProvider()
            .truststore(new File(trustStoreFilePath)).build();

        ClusterTopologyRefreshOptions refreshOptions = ClusterTopologyRefreshOptions.builder()
            .enablePeriodicRefresh(Duration.ofSeconds(15))
            .dynamicRefreshSources(false)
            .enableAllAdaptiveRefreshTriggers()
            .adaptiveRefreshTriggersTimeout(Duration.ofSeconds(15)).build();

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

        RedisClusterClient redisClient = RedisClusterClient.create(uri);
        redisClient.setOptions(ClusterClientOptions.builder()
            .socketOptions(socketOptions)
            .sslOptions(sslOptions)
            .validateClusterNodeMembership(false)
            .topologyRefreshOptions(refreshOptions).build());

        StatefulRedisClusterConnection<String, String> connection = redisClient.connect();
        connection.sync().set("key", "value");
        System.out.println(connection.sync().get("key"));
    }
}
```

### **Go**

This example uses the go-redis client v9.5.1. Use v9.0 or later.

```
package main

import (
	"context"
	"fmt"
	"io/ioutil"
	"crypto/tls"
	"crypto/x509"
	"github.com/redis/go-redis/v9"
)

var ctx = context.Background()

func main() {
        caCert, err := ioutil.ReadFile("/root/ApsaraDB-CA-Chain.pem")
	if err != nil {
		fmt.Println("Error loading CA certificate:", err)
		return
	}

	caCertPool := x509.NewCertPool()
	caCertPool.AppendCertsFromPEM(caCert)

	tlsConfig := &tls.Config{
		RootCAs:            caCertPool,
		InsecureSkipVerify: true, // Not actually skipping, we check the cert in VerifyPeerCertificate
		VerifyPeerCertificate: func(rawCerts [][]byte, verifiedChains [][]*x509.Certificate) error {
			// Code copy/pasted and adapted from
			// https://github.com/golang/go/blob/81555cb4f3521b53f9de4ce15f64b77cc9df61b9/src/crypto/tls/handshake_client.go#L327-L344, but adapted to skip the hostname verification.
			// See https://github.com/golang/go/issues/21971#issuecomment-412836078.

			// If this is the first handshake on a connection, process and
			// (optionally) verify the server's certificates.
			certs := make([]*x509.Certificate, len(rawCerts))
			for i, asn1Data := range rawCerts {
				cert, err := x509.ParseCertificate(asn1Data)
				if err != nil {
					panic(err)
				}
				certs[i] = cert
			}

			opts := x509.VerifyOptions{
				Roots:         caCertPool,
				DNSName:       "", // <- skip hostname verification
				Intermediates: x509.NewCertPool(),
			}

			for i, cert := range certs {
				if i == 0 {
					continue
				}
				opts.Intermediates.AddCert(cert)
			}
			_, err := certs[0].Verify(opts)
			return err
		},
	}

	rdb := redis.NewClusterClient(&redis.ClusterOptions{
		Addrs:    []string{"r-2zee50zxi5iiqm****.redis.rds-aliyun.rds.aliyuncs.com:6379"},
		Username: "default",
		Password: "Pas***23",
		TLSConfig: tlsConfig,
	})

	err = rdb.Set(ctx, "key", "value", 0).Err()
	if err != nil {
		panic(err)
	}

	val, err := rdb.Get(ctx, "key").Result()
	if err != nil {
		panic(err)
	}
	fmt.Println("key:", val)
}
```

## **FAQ**

-   Why do I receive the `No subject alternative DNS name matching xxx found` error?
    
    This error occurs if you modify the instance endpoint or port number after you enable TLS. To resolve this issue, update the TLS certificate in the console and then try to connect again.
    

## References

-   [Client connection tutorials](/help/en/redis/user-guide/use-a-client-to-connect-to-an-apsaradb-for-redis-instance#concept-dys-yvb-5db)
    
-   [Client retry guide](/help/en/redis/use-cases/retry-mechanisms-for-redis-clients#concept-2107101)
    
-   [Connect to an instance using redis-cli](/help/en/redis/user-guide/use-redis-cli-to-connect-to-an-apsaradb-for-redis-instance#concept-tzm-xdd-5db)
    
-   [Connect to an instance using DMS](/help/en/redis/user-guide/log-on-to-an-apsaradb-for-redis-instance-by-using-dms#concept-jvw-c24-tdb)

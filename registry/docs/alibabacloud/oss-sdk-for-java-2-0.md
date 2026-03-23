The OSS SDK for Java 2.0 integrates Alibaba Cloud Object Storage Service (OSS) into your Java applications, enabling file upload, download, and management operations. The SDK supports both synchronous and asynchronous clients, making it suitable for websites, enterprises, and developers who need cloud-based file storage.

[Github](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2) | [OSS SDK for Java API](https://javadoc.io/doc/com.aliyun/alibabacloud-oss-v2/latest/index.html) | [mvnrepository](https://mvnrepository.com/artifact/com.aliyun/alibabacloud-oss-v2) | [deepwiki](https://deepwiki.com/aliyun/alibabacloud-oss-java-sdk-v2/1-alibaba-cloud-oss-java-sdk-v2-overview)

## Quick integration

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5575663771/CAEQVBiBgMDKhO_a5xkiIDZhMmI3MGI1NDQ3MzRhOWQ5Y2NlMjIyZjczMmVmNGZk5272737_20250624105943.598.svg)

### Prerequisites

Java 8 or later.

> Run the `java -version` command to check your Java version. If Java is not installed, or if the version is earlier than Java 8, [download and install Java](https://www.oracle.com/java/technologies/downloads/).

### **Install the SDK**

Use Maven to install the OSS SDK for Java 2.0.

## Maven

Add the following dependency to your `pom.xml` file. Replace `<version>` with the latest version number from the [Maven Repository](https://mvnrepository.com/artifact/com.aliyun/alibabacloud-oss-v2).

```
<dependency>
    <groupId>com.aliyun</groupId>
    <artifactId>alibabacloud-oss-v2</artifactId>
    <version><!-- Specify the latest version number--></version>
</dependency>
```

## **Source code**

Obtain the latest version of the OSS SDK for Java 2.0 from [Github](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2), and then build and install it using Maven.

```
mvn clean install -DskipTests -Dgpg.skip=true
```

### **Configure access credentials**

Set the environment variables with the AccessKey pair of a RAM user to use as credentials.

> In the [RAM console](https://ram.console.alibabacloud.com/users/create), create a RAM user with **Permanent AccessKey Pair** access. Save the AccessKey pair, and grant the `AliyunOSSFullAccess` permission to the user.

## Linux

1.  Run the following commands in the command-line interface to append the environment variable settings to the `~/.bashrc` file.
    
    ```
    echo "export OSS_ACCESS_KEY_ID='YOUR_ACCESS_KEY_ID'" >> ~/.bashrc
    echo "export OSS_ACCESS_KEY_SECRET='YOUR_ACCESS_KEY_SECRET'" >> ~/.bashrc
    ```
    
    1.  Run the following command to apply the changes.
        
        ```
        source ~/.bashrc
        ```
        
    2.  Run the following commands to verify that the environment variables are configured.
        
        ```
        echo $OSS_ACCESS_KEY_ID
        echo $OSS_ACCESS_KEY_SECRET
        ```
        

## macOS

1.  Run the following command in the terminal to check the default shell type.
    
    ```
    echo $SHELL
    ```
    
    1.  Follow the steps for your default shell type.
        
        #### **Zsh**
        
        1.  Run the following commands to append the environment variable settings to the `~/.zshrc` file.
            
            ```
            echo "export OSS_ACCESS_KEY_ID='YOUR_ACCESS_KEY_ID'" >> ~/.zshrc
            echo "export OSS_ACCESS_KEY_SECRET='YOUR_ACCESS_KEY_SECRET'" >> ~/.zshrc
            ```
            
        2.  Run the following command to apply the changes.
            
            ```
            source ~/.zshrc
            ```
            
        3.  Run the following commands to verify that the environment variables are configured.
            
            ```
            echo $OSS_ACCESS_KEY_ID
            echo $OSS_ACCESS_KEY_SECRET
            ```
            
        
        #### **Bash**
        
        1.  Run the following commands to append the environment variable settings to the `~/.bash_profile` file.
            
            ```
            echo "export OSS_ACCESS_KEY_ID='YOUR_ACCESS_KEY_ID'" >> ~/.bash_profile
            echo "export OSS_ACCESS_KEY_SECRET='YOUR_ACCESS_KEY_SECRET'" >> ~/.bash_profile
            ```
            
        2.  Run the following command to apply the changes.
            
            ```
            source ~/.bash_profile
            ```
            
        3.  Run the following commands to verify that the environment variables are configured.
            
            ```
            echo $OSS_ACCESS_KEY_ID
            echo $OSS_ACCESS_KEY_SECRET
            ```
            
        

## Windows

## CMD

1.  Run the following commands in Command Prompt.
    
    ```
    setx OSS_ACCESS_KEY_ID "YOUR_ACCESS_KEY_ID"
    setx OSS_ACCESS_KEY_SECRET "YOUR_ACCESS_KEY_SECRET"
    ```
    
    1.  Run the following commands to verify that the environment variables are configured.
        
        ```
        echo %OSS_ACCESS_KEY_ID%
        echo %OSS_ACCESS_KEY_SECRET%
        ```
        

## PowerShell

1.  Run the following commands in PowerShell.
    
    ```
    [Environment]::SetEnvironmentVariable("OSS_ACCESS_KEY_ID", "YOUR_ACCESS_KEY_ID", [EnvironmentVariableTarget]::User)
    [Environment]::SetEnvironmentVariable("OSS_ACCESS_KEY_SECRET", "YOUR_ACCESS_KEY_SECRET", [EnvironmentVariableTarget]::User)
    ```
    
    1.  Run the following commands to verify that the environment variables are configured.
        
        ```
        [Environment]::GetEnvironmentVariable("OSS_ACCESS_KEY_ID", [EnvironmentVariableTarget]::User)
        [Environment]::GetEnvironmentVariable("OSS_ACCESS_KEY_SECRET", [EnvironmentVariableTarget]::User)
        ```
        

### Initialize the client

Initialize the OSSClient by specifying a [region](https://www.alibabacloud.com/help/zh/oss/regions-and-endpoints/).

-   OSSClient implements AutoCloseable. If you create an instance using a try-with-resources statement, resources are automatically released. You do not need to call close() manually.
    
-   Creating and destroying an OSSClient instance is a time-consuming operation. Use the singleton pattern to reuse an OSSClient instance. With this pattern, call close() manually before the application terminates to prevent resource leaks.
    
    **Singleton pattern**
    
    ```
    public class OssClientSingleton {
        private OssClientSingleton() {}
    
        private static class Holder {
            private static final OSSClient INSTANCE = OSSClient.newBuilder()
                .credentialsProvider(new EnvironmentVariableCredentialsProvider())
                .region("cn-hangzhou")
                .build();
        }
    
        public static OSSClient getInstance() {
            return Holder.INSTANCE;
        }
    
        // Close the OSSClient instance. This must be explicitly called.
        public static void shutdown() {
            try {
                getInstance().close();
            } catch (Exception e) {
                // Handle the close exception.
            }
        }
    }
    ```
    

## Synchronous OSSClient

Use the synchronous OSSClient when an operation must complete before proceeding.

```
import com.aliyun.sdk.service.oss2.OSSClient;
import com.aliyun.sdk.service.oss2.OSSClientBuilder;
import com.aliyun.sdk.service.oss2.credentials.CredentialsProvider;
import com.aliyun.sdk.service.oss2.credentials.EnvironmentVariableCredentialsProvider;
import com.aliyun.sdk.service.oss2.exceptions.ServiceException;
import com.aliyun.sdk.service.oss2.models.*;
import com.aliyun.sdk.service.oss2.paginator.ListBucketsIterable;

public class Example {
    public static void main(String[] args) {
        String region = "cn-hangzhou";

        CredentialsProvider provider = new EnvironmentVariableCredentialsProvider();
        OSSClientBuilder clientBuilder = OSSClient.newBuilder()
                .credentialsProvider(provider)
                .region(region);

        try (OSSClient client = clientBuilder.build()) {

            ListBucketsIterable paginator = client.listBucketsPaginator(
                    ListBucketsRequest.newBuilder()
                            .build());

            for (ListBucketsResult result : paginator) {
                for (BucketSummary info : result.buckets()) {
                    System.out.printf("bucket: name:%s, region:%s, storageClass:%s\n", info.name(), info.region(), info.storageClass());
                }
            }

        } catch (Exception e) {
//            ServiceException se = ServiceException.asCause(e);
//            if (se != null) {
//                System.out.printf("ServiceException: requestId:%s, errorCode:%s\n", se.requestId(), se.errorCode());
//            }
            System.out.printf("error:\n%s", e);
        }
    }
}
```

## Asynchronous OSSClient

Use the asynchronous OSSClient to handle multiple concurrent OSS operations without blocking on each result.

```
import com.aliyun.sdk.service.oss2.OSSAsyncClient;
import com.aliyun.sdk.service.oss2.credentials.CredentialsProvider;
import com.aliyun.sdk.service.oss2.credentials.EnvironmentVariableCredentialsProvider;
import com.aliyun.sdk.service.oss2.exceptions.ServiceException;
import com.aliyun.sdk.service.oss2.models.*;

import java.util.concurrent.CompletableFuture;

public class ExampleAsync {
    public static void main(String[] args) {
        String region = "cn-hangzhou";
        CredentialsProvider provider = new EnvironmentVariableCredentialsProvider();

        try (OSSAsyncClient client = OSSAsyncClient.newBuilder()
                .region(region)
                .credentialsProvider(provider)
                .build()) {

            CompletableFuture<ListBucketsResult> future = client.listBucketsAsync(
                    ListBucketsRequest.newBuilder().build()
            );

            future.thenAccept(result -> {
                        for (BucketSummary info : result.buckets()) {
                            System.out.printf("bucket: name:%s, region:%s, storageClass:%s\n",
                                    info.name(), info.region(), info.storageClass());
                        }
                    })
                    .exceptionally(e -> {
//                ServiceException se = ServiceException.asCause(e);
//                if (se != null) {
//                    System.out.printf("Async ServiceException: requestId:%s, errorCode:%s\n",
//                            se.requestId(), se.errorCode());
//                }
                        System.out.printf("async error:\n%s\n", e);
                        return null;
                    });

            future.join();

        } catch (Exception e) {
            System.out.printf("main error:\n%s\n", e);
        }
    }
}
```

After you run the code, the buckets in all regions that are associated with your account are listed.

```
bucket: name: examplebucket01, region: cn-hangzhou, storageClass: Standard
bucket: name: examplebucket02, region: cn-hangzhou, storageClass: Standard
```

## Client configurations

**Supported client configurations**

**Parameter name**

**Description**

region

(Required) The region where requests are sent.

credentialsProvider

The access credential provider. (Required)

endpoint

The access endpoint.

httpClient

The HTTP client.

retryMaxAttempts

The maximum number of retry attempts for an HTTP request. The default value is 3.

retryer

The retry implementation for an HTTP request.

connectTimeout

The timeout for establishing a connection. The default value is 5 seconds.

readWriteTimeout

The timeout for reading and writing data. The default value is 20 seconds.

insecureSkipVerify

Skips SSL certificate verification. By default, SSL certificates are verified.

enabledRedirect

Enables HTTP redirection. By default, this feature is disabled.

signatureVersion

The signature version. The default value is v4.

disableSsl

By default, requests are sent over HTTPS.

usePathStyle

Path-style requests, also known as the second-level domain request style, are used by default with the bucket-hosted domain name.

useCName

Uses a custom domain name for access. By default, this is false.

useDualStackEndpoint

Uses a dual-stack endpoint for access. By default, this is false.

useAccelerateEndpoint

Uses a transfer acceleration endpoint for access. By default, this is false.

useInternalEndpoint

Uses an internal same-region endpoint for access. By default, this is false.

additionalHeaders

Additional request headers to sign. This is valid for V4 signatures.

userAgent

Additional User-Agent information.

### Use a custom domain name

If you use the default OSS domain name for access, you may encounter issues such as files being inaccessible or failing to be previewed. If you [use a custom domain name to access OSS](/help/en/oss/user-guide/access-buckets-via-custom-domain-names#concept-zt4-cvy-5db), you can preview files directly in a browser and use a CDN for accelerated content delivery.

```
import com.aliyun.sdk.service.oss2.*;
import com.aliyun.sdk.service.oss2.credentials.*;

public class Example {
    public static void main(String[] args) {
        // Load credential information from environment variables for identity verification.
        CredentialsProvider credentialsProvider = new EnvironmentVariableCredentialsProvider();

        // Specify the region where the bucket is located. For example, for China (Hangzhou), set the region to cn-hangzhou.
        String region = "cn-hangzhou";

        // Specify your custom domain name. For example, www.example-***.com.
        String endpoint = "https://www.example-***.com";

        // Create an OSS client with the configured information.
        try (OSSClient client = OSSClient.newBuilder()
                .credentialsProvider(credentialsProvider)
                .region(region)
                .endpoint(endpoint)
                // Note: Set useCName to true to enable the CNAME option. Otherwise, you cannot use a custom domain name.
                .useCName(true)
                .build()) {

            // Use the created client for subsequent operations...

        } catch (Exception e) {
            System.err.println("Error occurred: " + e.getMessage());
        }
    }
}
```

### Timeout control

```
import com.aliyun.sdk.service.oss2.*;
import com.aliyun.sdk.service.oss2.credentials.*;
import java.time.Duration;

public class Example {
    public static void main(String[] args) {
        // Load credential information from environment variables for identity verification.
        CredentialsProvider credentialsProvider = new EnvironmentVariableCredentialsProvider();

        // Specify the region where the bucket is located. For example, for China (Hangzhou), set the region to cn-hangzhou.
        String region = "cn-hangzhou";

        // Create an OSS client with the configured information.
        try (OSSClient client = OSSClient.newBuilder()
                .credentialsProvider(credentialsProvider)
                .region(region)
                // Set the timeout for establishing a connection. The default value is 5 seconds.
                .connectTimeout(Duration.ofSeconds(30))
                // Set the timeout for reading and writing data. The default value is 20 seconds.
                .readWriteTimeout(Duration.ofSeconds(30))
                .build()) {

            // Use the created client for subsequent operations...

        } catch (Exception e) {
            System.err.println("Error occurred: " + e.getMessage());
        }
    }
}
```

### Retry policy

```
import com.aliyun.sdk.service.oss2.*;
import com.aliyun.sdk.service.oss2.credentials.*;
import com.aliyun.sdk.service.oss2.retry.*;
import java.time.Duration;

public class Example {
    public static void main(String[] args) {
        /*
         * SDK retry policy configuration description:
         *
         * Default retry policy:
         * When no retry policy is configured, the SDK uses StandardRetryer as the default client implementation.
         * Its default configuration is as follows:
         * - maxAttempts: Sets the maximum number of attempts. The default is 3.
         * - maxBackoff: Sets the maximum backoff time in seconds. The default is 20 seconds.
         * - baseDelay: Sets the base delay time in seconds. The default is 0.2 seconds.
         * - backoffDelayer: Sets the backoff algorithm. The default is the FullJitter backoff algorithm.
         *   Formula: [0.0, 1.0) * min(2^attempts * baseDelay, maxBackoff)
         * - errorRetryables: Retryable error types, including HTTP status codes, service error codes, and client errors.
         *
         * When a retryable error occurs, the provided configuration is used to delay and then retry the request.
         * The overall latency of the request increases with the number of retries. If the default configuration
         * does not meet your scenario requirements, you can configure retry parameters or modify the retry implementation.
         */

        // Load credential information from environment variables for identity verification.
        CredentialsProvider credentialsProvider = new EnvironmentVariableCredentialsProvider();

        // Specify the region where the bucket is located. For example, for China (Hangzhou), set the region to cn-hangzhou.
        String region = "cn-hangzhou";

        // Retry policy configuration example:

        // 1. Customize the maximum number of retries (default is 3, here set to 5).
        Retryer customRetryer = StandardRetryer.newBuilder()
                .maxAttempts(5)
                .build();

        // 2. Customize the backoff delay time.
        // Adjust the baseDelay to 0.5 seconds (default 0.2 seconds) and maxBackoff to 25 seconds (default 20 seconds).
        // Retryer customRetryer = StandardRetryer.newBuilder()
        //         .backoffDelayer(new FullJitterBackoff(Duration.ofMillis(500), Duration.ofSeconds(25)))
        //         .build();

        // 3. Customize the backoff algorithm.
        // Use a fixed-delay backoff algorithm instead of the default FullJitter algorithm, with a 2-second delay each time.
        // Retryer customRetryer = StandardRetryer.newBuilder()
        //         .backoffDelayer(new FixedDelayBackoff(Duration.ofSeconds(2)))
        //         .build();

        // 4. Disable the retry policy.
        // To disable all retry attempts, use the NopRetryer implementation.
        // Retryer customRetryer = new NopRetryer();

        // Create an OSS client with the configured information.
        try (OSSClient client = OSSClient.newBuilder()
                .credentialsProvider(credentialsProvider)
                .region(region)
                .retryer(customRetryer)
                .build()) {

            // Use the created client for subsequent operations...

        } catch (Exception e) {
            System.err.println("Error occurred: " + e.getMessage());
        }
    }
}
```

### HTTP/HTTPS protocol

Use `disableSsl(true)` to disable the HTTPS protocol.

```
import com.aliyun.sdk.service.oss2.*;
import com.aliyun.sdk.service.oss2.credentials.*;

public class Example {
    public static void main(String[] args) {
        // Load credential information from environment variables for identity verification.
        CredentialsProvider credentialsProvider = new EnvironmentVariableCredentialsProvider();

        // Specify the region where the bucket is located. For example, for China (Hangzhou), set the region to cn-hangzhou.
        String region = "cn-hangzhou";

        // Create an OSS client with the configured information.
        try (OSSClient client = OSSClient.newBuilder()
                .credentialsProvider(credentialsProvider)
                .region(region)
                // Set to not use HTTPS requests.
                .disableSsl(true)
                .build()) {

            // Use the created client for subsequent operations...

        } catch (Exception e) {
            System.err.println("Error occurred: " + e.getMessage());
        }
    }
}
```

### Use an internal endpoint

You can use an internal endpoint to access OSS resources in the same region. This reduces traffic costs and improves access speed.

```
import com.aliyun.sdk.service.oss2.*;
import com.aliyun.sdk.service.oss2.credentials.*;

public class Example {
    public static void main(String[] args) {
        // Load credential information from environment variables for identity verification.
        CredentialsProvider credentialsProvider = new EnvironmentVariableCredentialsProvider();

        // Method 1: Specify the region and set useInternalEndpoint to true.
        // Specify the region where the bucket is located. For example, for China (Hangzhou), set the region to cn-hangzhou.
        String region = "cn-hangzhou";

        // // Method 2: Directly specify the region and endpoint.
        // // Specify the region where the bucket is located. For example, for China (Hangzhou), set the region to cn-hangzhou.
        // String region = "cn-hangzhou";
        // // Specify the internal endpoint for the bucket's region. For China (Hangzhou), the endpoint is 'oss-cn-hangzhou-internal.aliyuncs.com'.
        // String endpoint = "oss-cn-hangzhou-internal.aliyuncs.com";

        // Create an OSS client with the configured information.
        try (OSSClient client = OSSClient.newBuilder()
                .credentialsProvider(credentialsProvider)
                .region(region)
                .useInternalEndpoint(true)
                // .endpoint(endpoint) // If using Method 2, uncomment this line and comment out the previous one.
                .build()) {

            // Use the created client for subsequent operations...

        } catch (Exception e) {
            System.err.println("Error occurred: " + e.getMessage());
        }
    }
}
```

### Use a transfer acceleration endpoint

```
import com.aliyun.sdk.service.oss2.*;
import com.aliyun.sdk.service.oss2.credentials.*;

public class Example {
    public static void main(String[] args) {
        // Load credential information from environment variables for identity verification.
        CredentialsProvider credentialsProvider = new EnvironmentVariableCredentialsProvider();

        // Method 1: Specify the region and set useAccelerateEndpoint to true.
        // Specify the region where the bucket is located. For example, for China (Hangzhou), set the region to cn-hangzhou.
        String region = "cn-hangzhou";

        // // Method 2: Directly specify the region and transfer acceleration endpoint.
        // // Specify the region where the bucket is located. For example, for China (Hangzhou), set the region to cn-hangzhou.
        // String region = "cn-hangzhou";
        // // Specify the transfer acceleration endpoint for the bucket's region, for example, 'https://oss-accelerate.aliyuncs.com'.
        // String endpoint = "https://oss-accelerate.aliyuncs.com";

        // Create an OSS client with the configured information.
        try (OSSClient client = OSSClient.newBuilder()
                .credentialsProvider(credentialsProvider)
                .region(region)
                .useAccelerateEndpoint(true)
                // .endpoint(endpoint) // If using Method 2, uncomment this line and comment out the previous one.
                .build()) {

            // Use the created client for subsequent operations...

        } catch (Exception e) {
            System.err.println("Error occurred: " + e.getMessage());
        }
    }
}
```

### Use a private domain

```
import com.aliyun.sdk.service.oss2.*;
import com.aliyun.sdk.service.oss2.credentials.*;

public class Example {
    public static void main(String[] args) {
        // Load credential information from environment variables for identity verification.
        CredentialsProvider credentialsProvider = new EnvironmentVariableCredentialsProvider();

        // Specify the region where the bucket is located. For example, for China (Hangzhou), set the region to cn-hangzhou.
        String region = "cn-hangzhou";

        // Specify your private domain. For example: https://service.corp.example.com
        String endpoint = "https://service.corp.example.com";

        // Create an OSS client with the configured information.
        try (OSSClient client = OSSClient.newBuilder()
                .credentialsProvider(credentialsProvider)
                .region(region)
                .endpoint(endpoint)
                .build()) {

            // Use the created client for subsequent operations...

        } catch (Exception e) {
            System.err.println("Error occurred: " + e.getMessage());
        }
    }
}
```

### Use a Gov Cloud domain name

Configure an OSSClient using an [Alibaba Gov Cloud](https://www.alibabacloud.com/help/zh/oss/regions-and-endpoints/#3e2a1817f0pps) domain name.

```
import com.aliyun.sdk.service.oss2.*;
import com.aliyun.sdk.service.oss2.credentials.*;

public class Example {
    public static void main(String[] args) {
        // Load credential information from environment variables for identity verification.
        CredentialsProvider credentialsProvider = new EnvironmentVariableCredentialsProvider();

        // Specify the region and endpoint.
        // Specify the region where the bucket is located. For China (Beijing) Gov Cloud 1, set the region to cn-north-2-gov-1.
        String region = "cn-north-2-gov-1";
        // Specify the internal endpoint for the bucket's region. For China (Beijing) Gov Cloud 1, the endpoint is 'https://oss-cn-north-2-gov-1-internal.aliyuncs.com'.
        // To specify the HTTP protocol, set the domain to 'http://oss-cn-north-2-gov-1-internal.aliyuncs.com'.
        String endpoint = "https://oss-cn-north-2-gov-1-internal.aliyuncs.com";

        // Create an OSS client with the configured information.
        try (OSSClient client = OSSClient.newBuilder()
                .credentialsProvider(credentialsProvider)
                .region(region)
                .endpoint(endpoint)
                .build()) {

            // Use the created client for subsequent operations...

        } catch (Exception e) {
            System.err.println("Error occurred: " + e.getMessage());
        }
    }
}
```

### Use a custom HTTPClient

If the standard configuration parameters do not meet your needs, you can use a custom HTTP client.

```
import com.aliyun.sdk.service.oss2.*;
import com.aliyun.sdk.service.oss2.credentials.*;
import com.aliyun.sdk.service.oss2.transport.HttpClient;
import com.aliyun.sdk.service.oss2.transport.HttpClientOptions;
import com.aliyun.sdk.service.oss2.transport.apache5client.Apache5HttpClientBuilder;
import java.time.Duration;

public class Example {
    public static void main(String[] args) {
        // Load credential information from environment variables for identity verification.
        CredentialsProvider credentialsProvider = new EnvironmentVariableCredentialsProvider();

        // Specify the region where the bucket is located. For example, for China (Hangzhou), set the region to cn-hangzhou.
        String region = "cn-hangzhou";

        // Set the parameters for the HTTP client.
        HttpClientOptions httpClientOptions = HttpClientOptions.custom()
                // Connection timeout. The default value is 5 seconds.
                .connectTimeout(Duration.ofSeconds(30))
                // Timeout for reading and writing data. The default value is 20 seconds.
                .readWriteTimeout(Duration.ofSeconds(30))
                // Maximum number of connections. The default value is 1024.
                .maxConnections(2048)
                // Specifies whether to skip certificate verification. By default, this is false.
                .insecureSkipVerify(false)
                // Specifies whether to enable HTTP redirection. By default, this is disabled.
                .redirectsEnabled(false)
                // Set the proxy server.
                // .proxyHost("http://user:passswd@proxy.example-***.com")
                .build();

        // Create an HTTP client and pass in the HTTP client parameters.
        HttpClient httpClient = Apache5HttpClientBuilder.create()
                .options(httpClientOptions)
                .build();

        // Create an OSS client with the configured information.
        try (OSSClient client = OSSClient.newBuilder()
                .credentialsProvider(credentialsProvider)
                .region(region)
                .httpClient(httpClient)
                .build()) {

            // Use the created client for subsequent operations...

        } catch (Exception e) {
            System.err.println("Error occurred: " + e.getMessage());
        }
    }
}
```

## Access credential configurations

The OSS SDK for Java 2.0 provides multiple credential configuration methods. Choose the appropriate method based on your authentication and authorization requirements.

#### **Choose access credentials**

**Credential provider initialization method**

**Scenario**

**Java SDK 2.0 support**

**Underlying credentials**

**Credential validity**

**Credential rotation or refresh method**

[Use the AccessKey pair of a RAM user](#使用ram用户的ak)

Applications deployed in a secure environment that require long-term access to Alibaba Cloud services without frequent credential rotation.

**Built-in support**

AccessKey

Long-term

Manual rotation

[Use an STS token](#使用sts临时访问凭证)

Applications deployed in an untrusted environment where you need to control the validity period and permissions of access.

**Built-in support**

Security Token Service token

Temporary

Manual refresh

[Use RAM role ARN credentials](#9d4af14290wu9)

Cross-account access to OSS resources, requiring temporary credentials obtained by assuming a RAM role.

**Extended support**

Security Token Service token

Temporary

Auto-refresh

[Use ECS RAM role credentials](#d6c272ca310w1)

Applications running on ECS instances, ECI instances, or Container Service for Kubernetes.

**Extended support**

Security Token Service token

Temporary

Auto-refresh

[Use OIDC role ARN credentials](#6580c4f8c1kk0)

The RRSA feature in Container Service for Kubernetes, which implements pod-level permission isolation.

**Extended support**

Security Token Service token

Temporary

Auto-refresh

[Use custom access credentials](#使用自定义访问凭证)

Custom credential retrieval when none of the above methods meet your requirements.

**Built-in support**

Custom

Custom

Custom

[Anonymous access](#匿名访问)

Accessing public-read OSS resources without providing any credentials.

**Built-in support**

None

None

None

Credential features marked as **Extended support** must be implemented using the [custom access credentials](#使用自定义访问凭证) method and the Alibaba Cloud credentials management library. The SDK provides built-in support for basic credential configuration methods. You can implement extended features by integrating the `credentials-java` library.

### Use the AccessKey pair of a RAM user

Initialize the credential provider with the AccessKey pair (AccessKey ID and AccessKey secret) of an Alibaba Cloud account or a RAM user. This method is suitable for applications that run in a secure environment and require long-term access to OSS without frequent credential rotation. This method requires you to manually maintain an AccessKey pair, which increases security risks and maintenance complexity.

**Important**

-   An Alibaba Cloud account has full permissions over its resources. Leaking the AccessKey pair of an Alibaba Cloud account poses a significant security risk. Use the AccessKey pair of a RAM user with the minimum required permissions instead.
    
-   For more information about how to create an AccessKey pair for a RAM user, see [Create an AccessKey pair](https://www.alibabacloud.com/help/zh/ram/create-an-accesskey-pair-1#section-rjh-18m-7kp). The AccessKey ID and AccessKey secret of a RAM user are displayed only when they are created. You must save them. If you forget the AccessKey pair, you must create a new one.
    

#### Configure environment variables

## Linux/macOS

1.  Set the environment variables using the AccessKey pair of the RAM user.
    
    ```
    export OSS_ACCESS_KEY_ID='YOUR_ACCESS_KEY_ID'
    export OSS_ACCESS_KEY_SECRET='YOUR_ACCESS_KEY_SECRET'
    ```
    
2.  Run the following commands to verify that the environment variables are configured.
    
    ```
    echo $OSS_ACCESS_KEY_ID
    echo $OSS_ACCESS_KEY_SECRET
    ```
    

## Windows

## CMD

```
setx OSS_ACCESS_KEY_ID "YOUR_ACCESS_KEY_ID"
setx OSS_ACCESS_KEY_SECRET "YOUR_ACCESS_KEY_SECRET"
```

## PowerShell

```
[Environment]::SetEnvironmentVariable("OSS_ACCESS_KEY_ID", "YOUR_ACCESS_KEY_ID", [EnvironmentVariableTarget]::User)
[Environment]::SetEnvironmentVariable("OSS_ACCESS_KEY_SECRET", "YOUR_ACCESS_KEY_SECRET", [EnvironmentVariableTarget]::User)
```

#### Code sample

```
import com.aliyun.sdk.service.oss2.OSSClient;
import com.aliyun.sdk.service.oss2.credentials.CredentialsProvider;
import com.aliyun.sdk.service.oss2.credentials.EnvironmentVariableCredentialsProvider;

public class OSSExample {
    public static void main(String[] args) {
        // Load credential information from environment variables for identity verification.
        CredentialsProvider credentialsProvider = new EnvironmentVariableCredentialsProvider();
        
        // Create an OSS client.
        try (OSSClient client = OSSClient.newBuilder()
                .credentialsProvider(credentialsProvider)
                .region("cn-hangzhou") // Specify the region where the bucket is located.
                .build()) {
            
            // Use the created client for subsequent operations...
            
        } catch (Exception e) {
            System.err.println("Operation failed: " + e.getMessage());
        }
    }
}
```

#### Static credential configuration

Hard-code access credentials by explicitly setting the AccessKey pair.

**Warning**

Do not embed access credentials in your production applications. This method is for testing purposes only.

```
import com.aliyun.sdk.service.oss2.OSSClient;
import com.aliyun.sdk.service.oss2.credentials.CredentialsProvider;
import com.aliyun.sdk.service.oss2.credentials.StaticCredentialsProvider;

public class OSSExample {
    public static void main(String[] args) {
        // Create a static credential provider and explicitly set the AccessKey pair.
        // Replace with your RAM user's AccessKey ID and AccessKey secret.
        CredentialsProvider credentialsProvider = new StaticCredentialsProvider(
                "YOUR_ACCESS_KEY_ID",
                "YOUR_ACCESS_KEY_SECRET"
        );
        
        // Create an OSS client.
        try (OSSClient client = OSSClient.newBuilder()
                .credentialsProvider(credentialsProvider)
                .region("cn-hangzhou") // Specify the region where the bucket is located.
                .build()) {
            
            // Use the created client for subsequent operations...
            
        } catch (Exception e) {
            System.err.println("Operation failed: " + e.getMessage());
        }
    }
}
```

### Use an STS token

For temporary OSS access, use temporary identity credentials from the Security Token Service (STS). These credentials include an AccessKey ID, an AccessKey secret, and a security token. This method requires you to manually maintain and refresh the STS token, which increases security risks and maintenance complexity.

-   To quickly obtain an STS token using OpenAPI, see [AssumeRole - Obtain temporary identity credentials for a RAM role](/help/en/ram/developer-reference/api-sts-2015-04-01-assumerole).
    
-   To obtain an STS token using an SDK, see [Use an STS token to access OSS](/help/en/oss/developer-reference/use-temporary-access-credentials-provided-by-sts-to-access-oss#section-rjh-18m-7kp).
    
-   You must specify an expiration time when you generate an STS token. The token becomes invalid after it expires.
    
-   For a list of STS service endpoints, see [Service endpoints](/help/en/ram/developer-reference/api-sts-2015-04-01-endpoint).
    

#### Configure environment variables

**Important**

-   This method uses temporary identity credentials (AccessKey ID, AccessKey secret, and a Security Token Service (STS) token) that you obtain from STS, not the AccessKey pair of a RAM user.
    
-   The AccessKey ID that you obtain from STS starts with "STS", for example, "STS.L4aBSCSJVMuKg5U1\*\*\*\*".
    

## Linux/macOS

```
export OSS_ACCESS_KEY_ID=<STS_ACCESS_KEY_ID>
export OSS_ACCESS_KEY_SECRET=<STS_ACCESS_KEY_SECRET>
export OSS_SESSION_TOKEN=<STS_SECURITY_TOKEN>
```

## Windows

```
set OSS_ACCESS_KEY_ID=<STS_ACCESS_KEY_ID>
set OSS_ACCESS_KEY_SECRET=<STS_ACCESS_KEY_SECRET>
set OSS_SESSION_TOKEN=<STS_SECURITY_TOKEN>
```

#### Code sample

```
import com.aliyun.sdk.service.oss2.OSSClient;
import com.aliyun.sdk.service.oss2.credentials.CredentialsProvider;
import com.aliyun.sdk.service.oss2.credentials.EnvironmentVariableCredentialsProvider;

public class OSSExample {
    public static void main(String[] args) {
        // Load the authentication information required to access OSS from environment variables for identity verification.
        CredentialsProvider credentialsProvider = new EnvironmentVariableCredentialsProvider();
        
        // Create an OSS client.
        try (OSSClient client = OSSClient.newBuilder()
                .credentialsProvider(credentialsProvider)
                .region("cn-hangzhou") // Specify the region where the bucket is located.
                .build()) {
            
            // Use the created client for subsequent operations...
            
        } catch (Exception e) {
            System.err.println("Operation failed: " + e.getMessage());
        }
    }
}
```

#### Static credential configuration

Hard-code access credentials by explicitly setting the temporary AccessKey pair.

**Warning**

Do not embed access credentials in your production applications. This method is for testing purposes only.

```
import com.aliyun.sdk.service.oss2.OSSClient;
import com.aliyun.sdk.service.oss2.credentials.CredentialsProvider;
import com.aliyun.sdk.service.oss2.credentials.StaticCredentialsProvider;

public class OSSExample {
    public static void main(String[] args) {
        // Specify the obtained temporary AccessKey ID and AccessKey secret.
        // Note that the AccessKey ID obtained from STS starts with "STS".
        String stsAccessKeyId = "STS.****************";
        String stsAccessKeySecret = "yourAccessKeySecret";
        String stsSecurityToken = "yourSecurityToken";
        
        // Create a static credential provider and explicitly set the temporary AccessKey pair and STS security token.
        CredentialsProvider credentialsProvider = new StaticCredentialsProvider(
                stsAccessKeyId,
                stsAccessKeySecret,
                stsSecurityToken
        );
        
        // Create an OSS client.
        try (OSSClient client = OSSClient.newBuilder()
                .credentialsProvider(credentialsProvider)
                .region("cn-hangzhou") // Specify the region where the bucket is located.
                .build()) {
            
            // Use the created client for subsequent operations...
            
        } catch (Exception e) {
            System.err.println("Operation failed: " + e.getMessage());
        }
    }
}
```

### Use RAM role ARN credentials

If your application requires authorized access to OSS, such as for cross-account access, you can use the Alibaba Cloud Resource Name (ARN) of a RAM role to initialize a credential provider. The underlying logic of this method is to use a Security Token Service (STS) token. When you specify the ARN of the RAM role, the credential tool obtains an STS token from the STS service and calls the AssumeRole API operation to request a new STS token before the current one expires. Additionally, you can set the `policy` parameter to limit the permissions of the RAM role.

**Important**

-   An Alibaba Cloud account has full permissions over its resources. Leaking the AccessKey pair of an Alibaba Cloud account poses a significant security risk. Use the AccessKey pair of a RAM user with the minimum required permissions instead.
    
-   For more information about how to create an AccessKey pair for a RAM user, see [Create an AccessKey pair](/help/en/ram/user-guide/create-an-accesskey-pair#section-rjh-18m-7kp). The AccessKey ID and AccessKey secret of a RAM user are displayed only when they are created. You must save them. If you forget the AccessKey pair, you must create a new one.
    
-   For more information about how to obtain a RAM role ARN, see [Create a RAM role](/help/en/ram/developer-reference/api-ram-2015-05-01-createrole).
    

#### Add a dependency

Add the Alibaba Cloud credentials management dependency to your `pom.xml` file.

```
<dependency>
    <groupId>com.aliyun</groupId>
    <artifactId>credentials-java</artifactId>
    <version>0.3.4</version>
</dependency>
```

#### Configure an AccessKey pair and RAM role ARN as access credentials

```
import com.aliyun.sdk.service.oss2.OSSClient;
import com.aliyun.sdk.service.oss2.credentials.Credentials;
import com.aliyun.sdk.service.oss2.credentials.CredentialsProvider;
import com.aliyun.sdk.service.oss2.credentials.CredentialsProviderSupplier;
// Note: The following imports are from the external dependency credentials-java
import com.aliyun.credentials.Client;
import com.aliyun.credentials.models.Config;

public class OSSExample {
    public static void main(String[] args) {
        // Configure RAM role ARN credentials.
        Config credentialConfig = new Config()
                .setType("ram_role_arn")
                // Obtain the RAM user's AccessKey pair (AccessKey ID and AccessKey secret) from environment variables.
                .setAccessKeyId(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_ID"))
                .setAccessKeySecret(System.getenv("ALIBABA_CLOUD_ACCESS_KEY_SECRET"))
                // The ARN of the RAM role to assume. Example value: acs:ram::123456789012****:role/adminrole
                // You can set the RoleArn via the ALIBABA_CLOUD_ROLE_ARN environment variable.
                .setRoleArn("acs:ram::123456789012****:role/adminrole")
                // The role session name. You can set the RoleSessionName via the ALIBABA_CLOUD_ROLE_SESSION_NAME environment variable.
                .setRoleSessionName("your-session-name")
                // Set a more restrictive permission policy. This is optional. Example value: {"Statement": [{"Action": ["*"],"Effect": "Allow","Resource": ["*"]}],"Version":"1"}
                .setPolicy("{\"Statement\": [{\"Action\": [\"*\"],\"Effect\": \"Allow\",\"Resource\": [\"*\"]}],\"Version\":\"1\"}")
                // Set the role session validity period in seconds. The default is 3600 seconds (1 hour). This is optional.
                .setRoleSessionExpiration(3600);

        Client credentialClient = new Client(credentialConfig);

        // Create a credential provider for dynamic credential loading.
        CredentialsProvider credentialsProvider = new CredentialsProviderSupplier(() -> {
            try {
                com.aliyun.credentials.models.CredentialModel cred = credentialClient.getCredential();
                return new Credentials(
                    cred.getAccessKeyId(),
                    cred.getAccessKeySecret(),
                    cred.getSecurityToken()
                );
            } catch (Exception e) {
                throw new RuntimeException("Failed to obtain credentials", e);
            }
        });

        // Create an OSS client instance.
        try (OSSClient client = OSSClient.newBuilder()
                .credentialsProvider(credentialsProvider)
                .region("cn-hangzhou") // Specify the region where the bucket is located, for example, China (Hangzhou).
                .build()) {
            
            // Use the client for subsequent operations...
            
        } catch (Exception e) {
            System.err.println("Operation failed: " + e.getMessage());
        }
    }
}
```

### Use ECS RAM role credentials

If your application runs on an ECS instance, an ECI instance, or a Container Service for Kubernetes worker node, you can use an ECS RAM role to initialize the credential provider. The SDK automatically retrieves and refreshes temporary STS tokens for the role that is attached to the instance. This method eliminates the need to manually manage AccessKey pairs or STS tokens. For more information about how to create an ECS RAM role, see [Create a RAM role](/help/en/ram/developer-reference/api-ram-2015-05-01-createrole).

#### Add a dependency

```
<dependency>
    <groupId>com.aliyun</groupId>
    <artifactId>credentials-java</artifactId>
    <version>0.3.4</version>
</dependency>
```

#### Configure an ECS RAM role as an access credential

```
import com.aliyun.sdk.service.oss2.OSSClient;
import com.aliyun.sdk.service.oss2.credentials.Credentials;
import com.aliyun.sdk.service.oss2.credentials.CredentialsProvider;
import com.aliyun.sdk.service.oss2.credentials.CredentialsProviderSupplier;
// Note: The following imports are from the external dependency credentials-java
import com.aliyun.credentials.Client;
import com.aliyun.credentials.models.Config;

public class OSSExample {
    public static void main(String[] args) {
        // Configure ECS RAM role credentials.
        Config credentialConfig = new Config()
                .setType("ecs_ram_role")      // Access credential type. Fixed as ecs_ram_role.
                .setRoleName("EcsRoleExample"); // The name of the RAM role granted to the ECS instance. Optional parameter. If not set, it will be automatically retrieved. We strongly recommend setting it to reduce requests.

        Client credentialClient = new Client(credentialConfig);

        // Create a credential provider for dynamic credential loading.
        CredentialsProvider credentialsProvider = new CredentialsProviderSupplier(() -> {
            try {
                com.aliyun.credentials.models.CredentialModel cred = credentialClient.getCredential();
                return new Credentials(
                    cred.getAccessKeyId(),
                    cred.getAccessKeySecret(),
                    cred.getSecurityToken()
                );
            } catch (Exception e) {
                throw new RuntimeException("Failed to obtain credentials", e);
            }
        });

        // Create an OSS client instance.
        try (OSSClient client = OSSClient.newBuilder()
                .credentialsProvider(credentialsProvider)
                .region("cn-hangzhou") // Specify the region where the bucket is located, for example, China (Hangzhou).
                .build()) {
            
            // Use the client for subsequent operations...
            
        } catch (Exception e) {
            System.err.println("Operation failed: " + e.getMessage());
        }
    }
}
```

### Use OIDC role ARN credentials

In Container Service for Kubernetes, you can use RAM Roles for Service Accounts (RRSA) for fine-grained permission control at the pod level. This is useful for multi-tenant clusters where you do not want all pods to inherit the permissions of the worker node's RAM role. With RRSA, the SDK uses an OpenID Connect (OIDC) token that is mounted into the pod to assume a specific RAM role and obtain a temporary STS token. This process is automatic and eliminates the need to manually manage credentials. For more information, see [Use RRSA to grant RAM permissions to a ServiceAccount](/help/en/ack/ack-managed-and-ack-dedicated/user-guide/use-rrsa-to-authorize-pods-to-access-different-cloud-services#task-2142941).

#### Add a dependency

```
<dependency>
    <groupId>com.aliyun</groupId>
    <artifactId>credentials-java</artifactId>
    <version>0.3.4</version>
</dependency>
```

#### Configure an OIDC role ARN as an access credential

```
import com.aliyun.sdk.service.oss2.OSSClient;
import com.aliyun.sdk.service.oss2.credentials.Credentials;
import com.aliyun.sdk.service.oss2.credentials.CredentialsProvider;
import com.aliyun.sdk.service.oss2.credentials.CredentialsProviderSupplier;
// Note: The following imports are from the external dependency credentials-java
import com.aliyun.credentials.Client;
import com.aliyun.credentials.models.Config;

public class OSSExample {
    public static void main(String[] args) {
        // Configure OIDC role ARN credentials.
        Config credentialConfig = new Config()
                // Specify the credential type. Fixed as oidc_role_arn.
                .setType("oidc_role_arn")
                // The RAM role ARN. You can set the RoleArn via the ALIBABA_CLOUD_ROLE_ARN environment variable.
                .setRoleArn(System.getenv("ALIBABA_CLOUD_ROLE_ARN"))
                // The OIDC provider ARN. You can set the OidcProviderArn via the ALIBABA_CLOUD_OIDC_PROVIDER_ARN environment variable.
                .setOidcProviderArn(System.getenv("ALIBABA_CLOUD_OIDC_PROVIDER_ARN"))
                // The OIDC token file path. You can set the OidcTokenFilePath via the ALIBABA_CLOUD_OIDC_TOKEN_FILE environment variable.
                .setOidcTokenFilePath(System.getenv("ALIBABA_CLOUD_OIDC_TOKEN_FILE"))
                // The role session name. You can set the RoleSessionName via the ALIBABA_CLOUD_ROLE_SESSION_NAME environment variable.
                .setRoleSessionName("your-session-name")
                // Set a more restrictive permission policy. This is optional. Example value: {"Statement": [{"Action": ["*"],"Effect": "Allow","Resource": ["*"]}],"Version":"1"}
                .setPolicy("{\"Statement\": [{\"Action\": [\"*\"],\"Effect\": \"Allow\",\"Resource\": [\"*\"]}],\"Version\":\"1\"}")
                // Set the role session validity period in seconds. The default is 3600 seconds (1 hour). This is optional.
                .setRoleSessionExpiration(3600);

        Client credentialClient = new Client(credentialConfig);

        // Create a credential provider for dynamic credential loading.
        CredentialsProvider credentialsProvider = new CredentialsProviderSupplier(() -> {
            try {
                com.aliyun.credentials.models.CredentialModel cred = credentialClient.getCredential();
                return new Credentials(
                    cred.getAccessKeyId(),
                    cred.getAccessKeySecret(),
                    cred.getSecurityToken()
                );
            } catch (Exception e) {
                throw new RuntimeException("Failed to obtain credentials", e);
            }
        });

        // Create an OSS client instance.
        try (OSSClient client = OSSClient.newBuilder()
                .credentialsProvider(credentialsProvider)
                .region("cn-hangzhou") // Specify the region where the bucket is located, for example, China (Hangzhou).
                .build()) {
            
            // Use the client for subsequent operations...
            
        } catch (Exception e) {
            System.err.println("Operation failed: " + e.getMessage());
        }
    }
}
```

### Use custom access credentials

When the preceding credential methods are insufficient, customize your credential retrieval. The Java SDK supports multiple implementation methods for this purpose.

#### Implement through the Supplier interface

```
import com.aliyun.sdk.service.oss2.OSSClient;
import com.aliyun.sdk.service.oss2.credentials.Credentials;
import com.aliyun.sdk.service.oss2.credentials.CredentialsProvider;
import com.aliyun.sdk.service.oss2.credentials.CredentialsProviderSupplier;

public class OSSExample {
    public static void main(String[] args) {
        // Create a custom credential provider.
        CredentialsProvider credentialsProvider = new CredentialsProviderSupplier(() -> {
            // TODO: Implement your custom credential retrieval logic.
            
            // Return long-term credentials.
            return new Credentials("access_key_id", "access_key_secret");
            
            // Return an STS token (if needed).
            // return new Credentials("sts_access_key_id", "sts_access_key_secret", "security_token");
        });
        
        // Create an OSS client.
        try (OSSClient client = OSSClient.newBuilder()
                .credentialsProvider(credentialsProvider)
                .region("cn-hangzhou") // Specify the region where the bucket is located.
                .build()) {
            
            // Use the created client for subsequent operations...
            
        } catch (Exception e) {
            System.err.println("Operation failed: " + e.getMessage());
        }
    }
}
```

#### Implement the CredentialsProvider interface

```
import com.aliyun.sdk.service.oss2.OSSClient;
import com.aliyun.sdk.service.oss2.credentials.Credentials;
import com.aliyun.sdk.service.oss2.credentials.CredentialsProvider;

public class CustomCredentialsProvider implements CredentialsProvider {
    
    @Override
    public Credentials getCredentials() {
        // TODO: Implement your custom credential retrieval logic.
        
        // Return long-term credentials.
        return new Credentials("access_key_id", "access_key_secret");
        
        // Return an STS token (if needed).
        // For temporary credentials, you need to refresh them based on their expiration time.
        // return new Credentials("sts_access_key_id", "sts_access_key_secret", "security_token");
    }
}

public class OSSExample {
    public static void main(String[] args) {
        // Create a custom credential provider.
        CredentialsProvider credentialsProvider = new CustomCredentialsProvider();
        
        // Create an OSS client.
        try (OSSClient client = OSSClient.newBuilder()
                .credentialsProvider(credentialsProvider)
                .region("cn-hangzhou") // Specify the region where the bucket is located.
                .build()) {
            
            // Use the created client for subsequent operations...
            
        } catch (Exception e) {
            System.err.println("Operation failed: " + e.getMessage());
        }
    }
}
```

### Anonymous access

If you only require access to public-read OSS resources, you can use anonymous access without providing any credentials.

```
import com.aliyun.sdk.service.oss2.OSSClient;
import com.aliyun.sdk.service.oss2.credentials.CredentialsProvider;
import com.aliyun.sdk.service.oss2.credentials.AnonymousCredentialsProvider;

public class OSSExample {
    public static void main(String[] args) {
        // Create an anonymous credential provider.
        CredentialsProvider credentialsProvider = new AnonymousCredentialsProvider();
        
        // Create an OSS client.
        try (OSSClient client = OSSClient.newBuilder()
                .credentialsProvider(credentialsProvider)
                .region("cn-hangzhou") // Specify the region where the bucket is located.
                .build()) {
            
            // Use the created client for subsequent operations...
            // Note: Anonymous access can only be used for resources with public-read permissions.
            
        } catch (Exception e) {
            System.err.println("Operation failed: " + e.getMessage());
        }
    }
}
```

## Sample code

**Feature classification**

**Example description**

**Sync version**

**Asynchronous version**

**Bucket**

Create a bucket

[PutBucket.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/PutBucket.java)

[PutBucketAsync.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/PutBucketAsync.java)

List buckets

[ListBuckets.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/ListBuckets.java)

[ListBucketsAsync.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/ListBucketsAsync.java)

Get bucket information

[GetBucketInfo.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/GetBucketInfo.java)

[GetBucketInfoAsync.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/GetBucketInfoAsync.java)

Get bucket region

[GetBucketLocation.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/GetBucketLocation.java)

[GetBucketLocationAsync.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/GetBucketLocationAsync.java)

Get bucket storage statistics

[GetBucketStat.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/GetBucketStat.java)

[GetBucketStatAsync.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/GetBucketStatAsync.java)

Delete a bucket

[DeleteBucket.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/DeleteBucket.java)

[DeleteBucketAsync.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/DeleteBucketAsync.java)

**File upload**

Simple upload

[PutObject.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/PutObject.java)

[PutObjectAsync.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/PutObjectAsync.java)

Append upload

[AppendObject.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/AppendObject.java)

[AppendObjectAsync.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/AppendObjectAsync.java)

Multipart upload

[MultipartUpload.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/MultipartUpload.java)

[MultipartUploadAsync.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/MultipartUploadAsync.java)

List multipart upload tasks

[ListMultipartUploads.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/ListMultipartUploads.java)

[ListMultipartUploadsAsync.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/ListMultipartUploadsAsync.java)

List uploaded parts

[ListParts.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/ListParts.java)

[ListPartsAsync.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/ListPartsAsync.java)

Cancel a multipart upload

[AbortMultipartUpload.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/AbortMultipartUpload.java)

[AbortMultipartUploadAsync.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/AbortMultipartUploadAsync.java)

**File download**

Simple download

[GetObject.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/GetObject.java)

[GetObjectAsync.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/GetObjectAsync.java)

**File management**

Copy a file

[CopyObject.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/CopyObject.java)

[CopyObjectAsync.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/CopyObjectAsync.java)

Check if a file exists

[HeadObject.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/HeadObject.java)

[HeadObjectAsync.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/HeadObjectAsync.java)

List files

[ListObjects.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/ListObjects.java)

[ListObjectsAsync.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/ListObjectsAsync.java)

List files V2

[ListObjectsV2.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/ListObjectsV2.java)

[ListObjectsV2Async.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/ListObjectsV2Async.java)

Delete a file

[DeleteObject.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/DeleteObject.java)

[DeleteObjectAsync.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/DeleteObjectAsync.java)

Delete multiple files

[DeleteMultipleObjects.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/DeleteMultipleObjects.java)

[DeleteMultipleObjectsAsync.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/DeleteMultipleObjectsAsync.java)

Get file metadata

[GetObjectMeta.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/GetObjectMeta.java)

[GetObjectMetaAsync.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/GetObjectMetaAsync.java)

**Archived object**

Restore a file

[RestoreObject.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/RestoreObject.java)

[RestoreObjectAsync.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/RestoreObjectAsync.java)

Clean up a restored file

[CleanRestoredObject.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/CleanRestoredObject.java)

[CleanRestoredObjectAsync.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/CleanRestoredObjectAsync.java)

**Symbolic link**

Create a symbolic link

[PutSymlink.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/PutSymlink.java)

[PutSymlinkAsync.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/PutSymlinkAsync.java)

Get a symbolic link

[GetSymlink.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/GetSymlink.java)

[GetSymlinkAsync.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/GetSymlinkAsync.java)

**Object tagging**

Set object tags

[PutObjectTagging.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/PutObjectTagging.java)

[PutObjectTaggingAsync.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/PutObjectTaggingAsync.java)

Get object tags

[GetObjectTagging.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/GetObjectTagging.java)

[GetObjectTaggingAsync.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/GetObjectTaggingAsync.java)

Delete object tags

[DeleteObjectTagging.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/DeleteObjectTagging.java)

[DeleteObjectTaggingAsync.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/DeleteObjectTaggingAsync.java)

**Access control**

Set bucket ACL

[PutBucketAcl.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/PutBucketAcl.java)

[PutBucketAclAsync.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/PutBucketAclAsync.java)

Get bucket ACL

[GetBucketAcl.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/GetBucketAcl.java)

[GetBucketAclAsync.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/GetBucketAclAsync.java)

Set object ACL

[PutObjectAcl.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/PutObjectAcl.java)

[PutObjectAclAsync.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/PutObjectAclAsync.java)

Get object ACL

[GetObjectAcl.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/GetObjectAcl.java)

[GetObjectAclAsync.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/GetObjectAclAsync.java)

**Versioning**

Set versioning

[PutBucketVersioning.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/PutBucketVersioning.java)

[PutBucketVersioningAsync.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/PutBucketVersioningAsync.java)

Get versioning status

[GetBucketVersioning.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/GetBucketVersioning.java)

[GetBucketVersioningAsync.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/GetBucketVersioningAsync.java)

List object versions

[ListObjectVersions.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/ListObjectVersions.java)

[ListObjectVersionsAsync.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/ListObjectVersionsAsync.java)

**Cross-domain access**

Set CORS rules

[PutBucketCors.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/PutBucketCors.java)

[PutBucketCorsAsync.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/PutBucketCorsAsync.java)

Get CORS rules

[GetBucketCors.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/GetBucketCors.java)

[GetBucketCorsAsync.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/GetBucketCorsAsync.java)

Delete CORS rules

[DeleteBucketCors.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/DeleteBucketCors.java)

[DeleteBucketCorsAsync.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/DeleteBucketCorsAsync.java)

Preflight request

[OptionObject.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/OptionObject.java)

[OptionObjectAsync.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/OptionObjectAsync.java)

**System features**

Query endpoint information

[DescribeRegions.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/DescribeRegions.java)

[DescribeRegionsAsync.java](https://github.com/aliyun/alibabacloud-oss-java-sdk-v2/blob/main/samples/src/main/java/com/example/oss/DescribeRegionsAsync.java)

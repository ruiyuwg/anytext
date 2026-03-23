The advanced settings of Alibaba Cloud SDK, such as HTTP connection pool settings, HTTPS request settings, proxy settings, and timeout and retry settings, are applicable to scenarios that require high concurrency and network security but are limited by the network environment. The advanced settings of Alibaba Cloud SDK support more scenarios by improving the performance, security, and reliability.

## **HTTP connection pool settings**

### **Use scenarios**

-   High-concurrency requests: If your application needs to send a large number of HTTP requests at the same time, connection pools can reuse the existing TCP connections to reduce the overhead on frequent connection creation and destruction.
    
-   Performance optimization: You can specify the size of your connection pool to limit the maximum number of connections. This configuration prevents resource exhaustion caused by massive connections and increases the request processing efficiency.
    

### Examples

-   An application needs to call multiple Alibaba Cloud services, such as Object Storage Service (OSS), Elastic Compute Service (ECS), and ApsaraDB RDS, and the requests are concurrently sent.
    
-   When you upload multiple files to OSS at the same time, connection pools can greatly accelerate the upload process.
    

For more information about how to configure a connection pool, see [Configure an HTTP connection pool](/help/en/sdk/developer-reference/connection-pool-of-an-http-client).

## **HTTPS request settings**

### **Use scenarios**

-   Data security: Compared to HTTP, HTTPS encrypts data transmission over SSL and TLS to prevent network eavesdropping and tampering, ensuring data integrity.
    
-   Compliance requirements: Some industries, such as finance and healthcare, require high data transmission security. In such scenarios, HTTPS is required.
    

### Examples

-   An application needs to obtain sensitive data, such as bill information and user privacy, by calling Alibaba Cloud API operations.
    
-   Some industries need to meet General Data Protection Regulation (GDPR) or other data protection requirements.
    

For more information about how to configure HTTPS requests, see [Configure an HTTPS request](/help/en/sdk/developer-reference/using-https).

## **Proxy settings**

### **Use scenarios**

-   Strictly controlled network: If your application is in a network environment where access to external networks is controlled by a proxy server, such as an enterprise internal network and a firewall-controlled network, you can configure a proxy to enable access to external services.
    
-   Traffic monitoring: During the development and debugging processes, you can use a proxy to capture and analyze requests for debugging purpose.
    

### Examples

-   An application deployed in the internal network of an enterprise needs to use an HTTP or HTTPS proxy to access Alibaba Cloud services.
    
-   Multiple applications in an enterprise share the same proxy server, which manages and schedules requests to external services.
    

For more information about how to configure a proxy, see [Configure a proxy](/help/en/sdk/developer-reference/proxy).

## **Timeout settings**

### **Use scenarios**

-   Improve network stability: If the network latency is high or server response speed is low, a proper timeout period can prevent long-time request hangs.
    
-   Improve user experience: A proper timeout period for user-oriented applications can prevent long-time waiting caused by service unavailability.
    

### Examples

-   If the network connection is interrupted when a user uploads large files to OSS, a proper timeout period can terminate the requests in time and prompt the user to re-upload the files.
    
-   A proper timeout period for time-consuming API operations, such as batch operations, can prevent long-time waiting for requests.
    

For more information about how to configure a timeout period, see [Configure a timeout period](/help/en/sdk/developer-reference/timeout-configuration).

## **Retry settings**

### **Use scenarios**

-   Network jitter: Requests may fail in an unstable network environment. A retry mechanism automatically resends requests, increasing the success rate.
    
-   Temporary service unavailability: If an Alibaba Cloud service becomes temporarily unavailable, a retry mechanism helps applications automatically recover.
    

### Examples

If your application encounters intermittent network issues when it calls an Alibaba Cloud service, you can configure the number of retries and retry interval to increase the request success rate.

For more information about how to configure a retry mechanism, see [Configure a retry mechanism](/help/en/sdk/developer-reference/configuration-for-retries).

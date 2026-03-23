The OssClient class is used to manage Object Storage Service (OSS) resources, such as buckets and objects. Before you can send an OSS request using the C++ software development kit (SDK), you must initialize an OssClient instance and, if necessary, modify the default ClientConfiguration settings.

## Create an OssClient instance

**Important**

-   The OssClient class is thread-safe, which lets you use multiple threads to access the same instance. You can reuse the same OssClient instance or create multiple instances as needed.
    
-   InitializeSdk() and ShutdownSdk() are global functions. You must call these functions only once during the program lifecycle.
    

### **(Recommended) V4 signature**

We recommend that you use the more secure V4 signature algorithm. When you initialize an instance using a V4 signature, you must specify both the endpoint and the Alibaba Cloud region ID for the request. For example, a region ID can be `cn-hangzhou`. You must also declare `SignatureVersionType::V4`. C++ SDK versions 1.10.0 and later support V4 signatures.

The following code provides an example of how to create an OssClient instance using an OSS domain name and a V4 signature. To use a custom domain name or Security Token Service (STS) credentials, modify the example accordingly.

```
#include <alibabacloud/oss/OssClient.h>
using namespace AlibabaCloud::OSS;

int main(void)
{
    /* Initialize the OSS account information. */
            
    /* Set yourEndpoint to the endpoint of the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com. */
    std::string Endpoint = "yourEndpoint";
    /* Set yourRegion to the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou. */
    std::string Region = "yourRegion";
    
    /* Initialize resources, such as network resources. */
    InitializeSdk();

    ClientConfiguration conf;
    conf.signatureVersion = SignatureVersionType::V4;
    /* Obtain access credentials from environment variables. Before you run this code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set. */
    auto credentialsProvider = std::make_shared<EnvironmentVariableCredentialsProvider>();
    OssClient client(Endpoint, credentialsProvider, conf);
    client.SetRegion(Region);

    /* Release resources, such as network resources. */
    ShutdownSdk();
    return 0;
}
```

### **(Not recommended) V1 signature**

**Important**

From March 1, 2025, the V1 signature algorithm of OSS is no longer available to new customers with new UIDs. From September 1, 2025, OSS no longer updates and maintains the V1 signature algorithm, and the V1 signature algorithm is no longer available for new buckets. Upgrade V1 signatures to V4 signatures at the earliest opportunity to prevent impact on your business.

### **Create an OssClient instance using an OSS domain name**

```
#include <alibabacloud/oss/OssClient.h>
using namespace AlibabaCloud::OSS;

int main(void)
{
    /* Initialize the OSS account information. */
            
    /* Set yourEndpoint to the endpoint of the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com. */
    std::string Endpoint = "yourEndpoint";
    
    /* Initialize resources, such as network resources. */
    InitializeSdk();

    ClientConfiguration conf;
    /* Obtain access credentials from environment variables. Before you run this code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set. */
    auto credentialsProvider = std::make_shared<EnvironmentVariableCredentialsProvider>();
    OssClient client(Endpoint, credentialsProvider, conf);   

    /* Release resources, such as network resources. */
    ShutdownSdk();
    return 0;
}
```

### **Create an OssClient instance using a custom domain name**

```
#include <alibabacloud/oss/OssClient.h>
using namespace AlibabaCloud::OSS;

int main(void)
{
    /* Initialize the OSS account information. */
            
    /* Set yourEndpoint to the custom domain name. */
    std::string Endpoint = "yourEndpoint";
    
    /* Initialize resources, such as network resources. */
    InitializeSdk();

    ClientConfiguration conf;
    conf.isCname = true;
    /* Obtain access credentials from environment variables. Before you run this code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set. */
    auto credentialsProvider = std::make_shared<EnvironmentVariableCredentialsProvider>();
    OssClient client(Endpoint, credentialsProvider, conf);   

    /* Release resources, such as network resources. */
    ShutdownSdk();
    return 0;
}
```

### Create an OssClient instance using STS

Temporary access credentials provided by Security Token Service (STS) consist of a temporary AccessKey pair (an AccessKey ID and an AccessKey secret) and a security token. For more information about how to obtain temporary access credentials from STS, see [Use temporary credentials provided by STS to access OSS](/help/en/oss/developer-reference/use-temporary-access-credentials-provided-by-sts-to-access-oss#concept-xzh-nzk-2gb).

```
#include <alibabacloud/oss/OssClient.h>
using namespace AlibabaCloud::OSS;

int main(void)
{
    /* Set yourEndpoint to the endpoint of the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com. */
    std::string Endpoint = "yourEndpoint";
        
    /* Initialize resources, such as network resources. */
    InitializeSdk();

    ClientConfiguration conf;
    /* Obtain access credentials from environment variables. Before you run this code, make sure that the temporary AccessKey pair and security token are set as environment variables. */
    auto credentialsProvider = std::make_shared<EnvironmentVariableCredentialsProvider>();
    OssClient client(Endpoint, credentialsProvider, conf); 

    /* Release resources, such as network resources. */
    ShutdownSdk();
    return 0;
}
```

## Configure OssClient

ClientConfiguration is the class used to configure OssClient. You can use this class to set parameters such as the proxy, connection timeout, and the maximum number of connections.

You can set the following parameters for OssClient:

**Parameter**

**Description**

isCname

Specifies whether to use a CNAME as the endpoint. By default, this feature is not supported.

userAgent

The user agent, which is the User-Agent header in HTTP. The default value is aliyun-sdk-cpp/1.X.X.

maxConnections

The size of the connection pool. The default value is 16.

requestTimeoutMs

The request timeout period in milliseconds. If no data is received within the timeout period, the connection is closed. The default value is 10,000 ms.

connectTimeoutMs

The timeout period for establishing a connection. The default value is 5,000 ms.

retryStrategy

A custom retry policy for failed requests.

proxyScheme

The protocol of the proxy. The default value is HTTP.

proxyPort

The port of the proxy server.

proxyPassword

The password for proxy server authentication.

proxyUserName

The username for proxy server authentication.

verifySSL

Specifies whether to enable SSL certificate verification. By default, this feature is disabled.

**Note**

By default, SSL certificate verification is enabled in C++ SDK 1.8.2 and later versions.

caPath

The root path of the CA certificate. This parameter takes effect only when verifySSL is set to true. By default, this parameter is empty.

caFile

The path of the CA certificate. This parameter takes effect only when verifySSL is set to true. By default, this parameter is empty.

enableCrc64

Specifies whether to enable 64-bit cyclic redundancy check (CRC64) verification. By default, this feature is enabled.

enableDateSkewAdjustment

Specifies whether to enable automatic correction for HTTP request time skew. By default, this feature is enabled.

sendRateLimiter

The upload speed limit in KB/s.

recvRateLimiter

The download speed limit in KB/s.

## Set the timeout period

The following code shows an example of how to set the timeout period:

```
#include <alibabacloud/oss/OssClient.h>
using namespace AlibabaCloud::OSS;

int main(void)
{
    /* Initialize the OSS account information. */
            
    /* Set yourEndpoint to the endpoint of the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com. */
    std::string Endpoint = "yourEndpoint";
    /* Set yourRegion to the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou. */
    std::string Region = "yourRegion";
    
    /* Initialize resources, such as network resources. */
    InitializeSdk();
    ClientConfiguration conf;
    conf.signatureVersion = SignatureVersionType::V4;

    /* Set the size of the connection pool. The default value is 16. */
    conf.maxConnections = 20;

    /* Set the request timeout period. If no data is received within this period, the connection is closed. The default value is 10,000 ms. */
    conf.requestTimeoutMs = 8000;

    /* Set the timeout period for establishing a connection. The default value is 5,000 ms. */
    conf.connectTimeoutMs = 8000;

    /* Obtain access credentials from environment variables. Before you run this code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set. */
    auto credentialsProvider = std::make_shared<EnvironmentVariableCredentialsProvider>();
    OssClient client(Endpoint, credentialsProvider, conf);  
    client.SetRegion(Region);

    /* Release resources, such as network resources. */
    ShutdownSdk();
    return 0;
}
```

## Set SSL certificate verification

C++ SDK 1.8.2 and later versions enable SSL certificate verification by default. If SSL certificate verification fails, you can set the correct certificate path or disable SSL certificate verification.

The following code shows how to set SSL certificate verification:

```
#include <alibabacloud/oss/OssClient.h>
using namespace AlibabaCloud::OSS;

int main(void)
{
    /* Initialize the OSS account information. */
            
    /* Set yourEndpoint to the endpoint of the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com. */
    std::string Endpoint = "yourEndpoint";
    /* Set yourRegion to the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou. */
    std::string Region = "yourRegion";
    
    /* Initialize resources, such as network resources. */
    InitializeSdk();
    ClientConfiguration conf;
    conf.signatureVersion = SignatureVersionType::V4;

    /* Set the switch for SSL certificate verification. The default value is true, which enables verification. */
    conf.verifySSL = true;

    /* Set the root path of the CA certificate. This parameter takes effect only when verifySSL is set to true. By default, this parameter is empty. */
    conf.caPath = "/etc/ssl/certs/";

    /* Set the path of the CA certificate. This parameter takes effect only when verifySSL is set to true. By default, this parameter is empty. */
    conf.caFile = "/etc/ssl/certs/ca-certificates.crt";;

    /* Obtain access credentials from environment variables. Before you run this code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set. */
    auto credentialsProvider = std::make_shared<EnvironmentVariableCredentialsProvider>();
    OssClient client(Endpoint, credentialsProvider, conf);  
    client.SetRegion(Region);

    /* Release resources, such as network resources. */
    ShutdownSdk();
    return 0;
}
```

## Set rate limits

The following code shows how to set rate limits for uploads or downloads:

```
#include <alibabacloud/oss/OssClient.h>
#include <alibabacloud/oss/client/RateLimiter.h>

using namespace AlibabaCloud::OSS;

class UserRateLimiter : public RateLimiter
{
public:
    UserRateLimiter() : rate_(0) {};
    ~UserRateLimiter() {};
    virtual void setRate(int rate) { rate_ = rate; };
    virtual int Rate() const { return rate_; };
private:
    int rate_;
};

int main(void)
{
    /* Initialize the OSS account information. */
            
    /* Set yourEndpoint to the endpoint of the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com. */
    std::string Endpoint = "yourEndpoint";
    /* Set yourRegion to the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou. */
    std::string Region = "yourRegion";
    /* Enter the bucket name. Example: examplebucket. */
    std::string BucketName = "examplebucket";
    /* Enter the full path of the object. The path cannot include the bucket name. Example: exampledir/exampleobject.txt. */
    std::string ObjectName = "exampledir/exampleobject.txt";

    /* Initialize resources, such as network resources. */
    InitializeSdk();

    ClientConfiguration conf;
    conf.signatureVersion = SignatureVersionType::V4;

    auto sendrateLimiter = std::make_shared<UserRateLimiter>();
    auto recvrateLimiter = std::make_shared<UserRateLimiter>();
    conf.sendRateLimiter = sendrateLimiter;
    conf.recvRateLimiter = recvrateLimiter;

    /* Obtain access credentials from environment variables. Before you run this code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set. */
    auto credentialsProvider = std::make_shared<EnvironmentVariableCredentialsProvider>();
    OssClient client(Endpoint, credentialsProvider, conf);
    client.SetRegion(Region);

    /* Set the download rate limit in KB/s. */
    recvrateLimiter->setRate(256);

    /* Set the upload rate limit in KB/s. */
    sendrateLimiter->setRate(256);

    /* Upload a file. Set yourLocalFilename to the full path of the local file. */
    auto outcome = client.PutObject(BucketName, ObjectName, "yourLocalFilename");  

    /* Update the upload rate limit in KB/s during the upload. */
    sendrateLimiter->setRate(300);

    /* Release resources, such as network resources. */
    ShutdownSdk();
    return 0;
}
```

## Set a retry policy

The following code sets the retry policy:

```
#include <alibabacloud/oss/OssClient.h>
#include <alibabacloud/oss/client/RetryStrategy.h>

using namespace AlibabaCloud::OSS;

class UserRetryStrategy : public RetryStrategy
{
public:

    /* maxRetries specifies the maximum number of retries. scaleFactor is the scaling factor for the retry interval. */
    UserRetryStrategy(long maxRetries = 3, long scaleFactor = 300) :
        m_scaleFactor(scaleFactor), m_maxRetries(maxRetries)  
    {}

    /* You can customize the shouldRetry function to determine whether to retry a request. */
    bool shouldRetry(const Error & error, long attemptedRetries) const;

    /* You can customize the calcDelayTimeMs function to calculate the delay before a retry. */
    long calcDelayTimeMs(const Error & error, long attemptedRetries) const;

private:
    long m_scaleFactor;
    long m_maxRetries;
};

bool UserRetryStrategy::shouldRetry(const Error & error, long attemptedRetries) const
{    
    if (attemptedRetries >= m_maxRetries)
        return false;

    long responseCode = error.Status();

    //http code
    if ((responseCode == 403 && error.Message().find("RequestTimeTooSkewed") != std::string::npos) ||
        (responseCode > 499 && responseCode < 599)) {
        return true;
    }
    else {
        switch (responseCode)
        {
        //curl error code
        case (ERROR_CURL_BASE + 7):  //CURLE_COULDNT_CONNECT
        case (ERROR_CURL_BASE + 18): //CURLE_PARTIAL_FILE
        case (ERROR_CURL_BASE + 23): //CURLE_WRITE_ERROR
        case (ERROR_CURL_BASE + 28): //CURLE_OPERATION_TIMEDOUT
        case (ERROR_CURL_BASE + 52): //CURLE_GOT_NOTHING
        case (ERROR_CURL_BASE + 55): //CURLE_SEND_ERROR
        case (ERROR_CURL_BASE + 56): //CURLE_RECV_ERROR
        case (ERROR_CURL_BASE + 65): //CURLE_SEND_FAIL_REWIND
            return true;
        default:
            break;
        };
    }

    return false;
}

long UserRetryStrategy::calcDelayTimeMs(const Error & error, long attemptedRetries) const
{
    return (1 << attemptedRetries) * m_scaleFactor;
}

int main(void)
{
    /* Initialize the OSS account information. */
            
   /* Set yourEndpoint to the endpoint of the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com. */
    std::string Endpoint = "yourEndpoint";
    /* Set yourRegion to the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou. */
    std::string Region = "yourRegion";
    
    /* Initialize resources, such as network resources. */
    InitializeSdk();
    ClientConfiguration conf;
    conf.signatureVersion = SignatureVersionType::V4;

    /* Set the number of retries for failed requests. The default value is 3. */
    auto defaultRetryStrategy = std::make_shared<UserRetryStrategy>(5);
    conf.retryStrategy = defaultRetryStrategy;

    /* Obtain access credentials from environment variables. Before you run this code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set. */
    auto credentialsProvider = std::make_shared<EnvironmentVariableCredentialsProvider>();
    OssClient client(Endpoint, credentialsProvider, conf);  
    client.SetRegion(Region);

    /* Release resources, such as network resources. */
    ShutdownSdk();
    return 0;
}
```

## **Set a proxy server**

Use the following code to set a proxy server:

```
#include <alibabacloud/oss/OssClient.h>
using namespace AlibabaCloud::OSS;

int main(void)
{
    /* Initialize the OSS account information. */
            
    /* Set yourEndpoint to the endpoint of the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com. */
    std::string Endpoint = "yourEndpoint";
    /* Set yourRegion to the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou. */
    std::string Region = "yourRegion";
    
    /* Initialize resources, such as network resources. */
    InitializeSdk();
    ClientConfiguration conf;
    conf.signatureVersion = SignatureVersionType::V4;

    /* Set the address of the proxy server. */
    conf.proxyHost = "yourProxyHost";

    /* Set the port of the proxy server. */
    conf.proxyPort = 1234;

    /* Optional. Set the username for proxy server authentication. */
    conf.proxyUserName = "yourProxyUserName";

    /* Optional. Set the password for proxy server authentication. */
    conf.proxyPassword = "yourProxyPassword";

    /* Obtain access credentials from environment variables. Before you run this code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set. */
    auto credentialsProvider = std::make_shared<EnvironmentVariableCredentialsProvider>();
    OssClient client(Endpoint, credentialsProvider, conf);
    client.SetRegion(Region);

    /* Release resources, such as network resources. */
    ShutdownSdk();
    return 0;
}
```

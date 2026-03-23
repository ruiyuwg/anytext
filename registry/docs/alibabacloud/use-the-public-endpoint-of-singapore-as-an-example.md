Object Storage Service (OSS) provides regional endpoints for accessing the service. You use these endpoints to construct bucket domain names for your specific buckets. These endpoints are tailored for different network environments, such as public, internal, and accelerated networks, to meet diverse performance and cost requirements.

## **Core concepts**

A standard OSS access address consists of several hierarchical components. Understanding the following concepts is key to accessing OSS correctly:

**Concept**

**Description**

**Example**

**Use case**

Region ID

General region identifier

`ap-southeast-1`

Used in scenarios such as V4 signature generation with an SDK or ossutil.

OSS-specific region ID

OSS-specific region identifier

`oss-ap-southeast-1`

Used to construct an endpoint and in API request and response parameters.

Endpoint

Service endpoint

`oss-ap-southeast-1.aliyuncs.com`

Configure in an SDK or ossutil to connect to the OSS service.

Bucket domain name

Domain name for accessing a specific bucket

`bucket-name.oss-ap-southeast-1.aliyuncs.com`

Used for direct browser access, generating presigned URLs, or hosting static websites.

These four concepts are hierarchical: A **region ID** identifies a geographic location, and OSS assigns a corresponding **OSS-specific region ID** to it. The OSS region ID combines with a domain suffix to form an **endpoint** (the service access address). To access a specific bucket, you use a **bucket domain name** (the resource access address), which combines the bucket name with the endpoint.

## **Endpoint types**

OSS provides different endpoint types based on your network environment and performance requirements.

**Important**

Due to a [policy change](https://www.alibabacloud.com/en/notice/oss_update_notice_policy_change_in_calling_data_api_operations_via_the_default_public_domain_name_45a) to improve compliance and security, starting **March 20, 2025, new OSS users** must [use a custom domain name](/help/en/oss/user-guide/access-buckets-via-custom-domain-names) (CNAME) to perform data API operations on OSS buckets located in Chinese mainland regions. Default public endpoints are restricted for these operations. Refer to the [official announcement](https://www.alibabacloud.com/en/notice/oss_update_notice_policy_change_in_calling_data_api_operations_via_the_default_public_domain_name_45a) for a complete list of the affected operations. If you access your data via HTTPS, you must [bind a valid SSL Certificate](/help/en/oss/user-guide/access-oss-by-https-protocol) to your custom domain. This is **mandatory for OSS Console access**, as the console enforces HTTPS.

### Public endpoint

Designed for internet access, this endpoint is ideal for web applications, mobile clients, and cross-region access.

#### **Formats**

-   **Endpoint**: `oss-[RegionID].aliyuncs.com`
    
-   **Bucket domain name**: `[BucketName].oss-[RegionID].aliyuncs.com`
    

#### **Access examples**

## Object URL

This example shows how to get a presigned URL for an object in a private bucket from the console. For more information, see [Download or preview a file using a presigned URL](/help/en/oss/user-guide/how-to-obtain-the-url-of-a-single-object-or-the-urls-of-multiple-objects).

1.  Go to the [Buckets](https://oss.console.alibabacloud.com/bucket) page and click the target bucket.
    
2.  For the target object, click its **File Name** or **View Details** in the Actions column.
    
3.  Set the **Domain Name** to **Public Domain Name** and click **Copy Object URL**.
    
4.  Access the URL in a browser.
    

When you access objects like HTML files or images using a bucket domain name, the browser downloads the object instead of displaying it. To preview objects online, [access OSS using a custom domain name](/help/en/oss/user-guide/access-buckets-via-custom-domain-names).

## ossutil

This example shows how to download an object using ossutil 2.0. Before you start, [install and configure ossutil 2.0](/help/en/oss/developer-reference/ossutil-overview/). The tool uses the public access endpoint by default, but you can also explicitly specify it using the `-e` parameter.

```
ossutil cp oss://example-bucket/dest.jpg dest.jpg -e oss-ap-southeast-1.aliyuncs.com
```

## SDK

The following sections provide integration examples for common SDKs. For other languages, see the initialization examples in the [SDK Reference](/help/en/oss/developer-reference/sdk-code-samples/).

## Java SDK V2

The SDK uses the public endpoint by default when initializing the client. You only need to provide the region ID, and an endpoint is not required. For the complete initialization code, see [OSS SDK for Java 2.0 (Preview)](/help/en/oss/developer-reference/oss-sdk-for-java-2-0/).

## Java SDK V1

Specify the public endpoint when you initialize the OSS client instance. For the complete initialization code, see [OSS SDK for Java 1.0](/help/en/oss/developer-reference/oss-java-sdk/).

```
// Use the public endpoint of Singapore as an example.
String endpoint = "oss-ap-southeast-1.aliyuncs.com";
// Initialize the OSS client.
OSS ossClient = OSSClientBuilder.create()
        .credentialsProvider(provider)
        .clientConfiguration(clientBuilderConfiguration)
        .region("ap-southeast-1")
        .endpoint(endpoint)
        .build();
```

## Python SDK V2

The SDK uses the public endpoint by default when initializing the client. You only need to provide the region ID, and an endpoint is not required. For the complete initialization code, see [OSS SDK for Python 2.0](/help/en/oss/developer-reference/2-0-manual-preview-version/).

## Python SDK V1

Specify the public endpoint when you initialize the OSS client instance. For the complete initialization code, see [Initialization (Python SDK 1.0)](/help/en/oss/initialization-2).

```
# Use the public endpoint of Singapore as an example.
endpoint = "https://oss-ap-southeast-1.aliyuncs.com"
# Initialize the OSS client instance.
bucket = oss.Bucket(auth, endpoint, bucket, region="ap-southeast-1")
```

## Go SDK V2

The SDK uses the public endpoint by default when initializing the client. You only need to provide the region ID, and an endpoint is not required. For the complete initialization code, see [OSS SDK for Go 2.0](/help/en/oss/developer-reference/manual-for-go-sdk-v2/).

## Go SDK V1

Specify the public endpoint when you initialize the OSS client instance. For the complete initialization code, see [Configure OSSClient instances](/help/en/oss/initialization-9).

```
// Create an OSS client instance.
client, _ := oss.New(
        "oss-ap-southeast-1.aliyuncs.com",	// Use the public endpoint of Singapore as an example.
        "",
        "",
        oss.SetCredentialsProvider(&provider),
        oss.AuthVersion(oss.AuthV4),
        oss.Region("ap-southeast-1"),
)
```

### Internal endpoint

Designed for the Alibaba Cloud internal network, this endpoint is ideal for accessing OSS from an ECS instance in the same region. Internal access avoids public network traffic fees and provides a more stable network connection with lower latency.

#### **Formats**

-   **Endpoint**: `oss-[RegionID]-internal.aliyuncs.com`
    
-   **Bucket domain name**: `[BucketName].oss-[RegionID]-internal.aliyuncs.com`
    

#### **Usage notes**

-   **Optimize DNS configuration**
    
    When using an internal endpoint, configure Alibaba Cloud's private DNS servers (`100.100.2.136` and `100.100.2.138`). This ensures correct VIP address resolution and prevents access issues caused by DNS resolution problems.
    
-   **Ensure complete routing for the VIP range**
    
    OSS allocates a fixed address range for the internal VIP range in each region, and the system dynamically switches IP addresses within this range. When you access OSS from on-premises devices or data centers over the internal network, your route configuration must cover the entire VIP range. An incomplete route configuration may lead to connection interruptions. For the internal VIP range of each region, see [Regions and Endpoints](/help/en/oss/user-guide/regions-and-endpoints#ec304ac5f79f1).
    
    **Important**
    
    To prevent intermittent connectivity issues and potential service outages, your route configuration must cover the entire VIP range for the region. An incomplete configuration is a common cause of service disruption.
    
-   **Configure security group rules**
    
    When you use an ECS instance to access OSS over the internal network, ensure your security group rules allow access to the entire VIP range.
    

#### **Access examples**

## ossutil

This example shows how to download an object using ossutil 2.0 on an ECS instance in the same region. Before you start, [install and configure ossutil 2.0](/help/en/oss/developer-reference/ossutil-overview/). Specify the internal access endpoint during configuration or by using the `-e` parameter during the download.

```
ossutil cp oss://example-bucket/dest.jpg dest.jpg -e oss-ap-southeast-1-internal.aliyuncs.com
```

## SDK

The following sections provide integration examples for common SDKs. For other languages, see the initialization examples in the [SDK Reference](/help/en/oss/developer-reference/sdk-code-samples/).

## Java SDK V2

When you initialize an OSS client instance, use the internal endpoint by specifying the endpoint or setting `useInternalEndpoint(true)`. For the complete initialization code, see [OSS Java SDK V2 (Preview)](/help/en/oss/developer-reference/oss-sdk-for-java-2-0/).

-   **Method 1: Specify the internal endpoint**
    
    ```
    // Use the internal endpoint of Singapore as an example.
    String endpoint = "oss-ap-southeast-1-internal.aliyuncs.com";
    // Initialize the OSS client.
    OSSClient client = OSSClient.newBuilder()
            .credentialsProvider(provider)
            .region("ap-southeast-1")
            .endpoint(endpoint)
            .build();
    ```
    
-   **Method 2: Set using** `**useInternalEndpoint(true)**`
    
    ```
    // Initialize the OSS client.
    OSSClient client = OSSClient.newBuilder()
            .credentialsProvider(provider)
            .region("ap-southeast-1")
            .useInternalEndpoint(true)
            .build();
    ```
    

## Java SDK V1

Specify the internal endpoint when you initialize the OSS client instance. For the complete initialization code, see [OSS Java SDK V1](/help/en/oss/developer-reference/oss-java-sdk/).

```
// Use the internal endpoint of Singapore as an example.
String endpoint = "oss-ap-southeast-1-internal.aliyuncs.com";
// Initialize the OSS client.
OSS ossClient = OSSClientBuilder.create()
        .credentialsProvider(provider)
        .clientConfiguration(clientBuilderConfiguration)
        .region("ap-southeast-1")
        .endpoint(endpoint)
        .build();
```

## Python SDK V2

When you initialize an OSS client instance, use the internal endpoint by specifying the endpoint or setting `use_internal_endpoint = True`. For the complete initialization code, see [OSS SDK for Python 2.0](/help/en/oss/developer-reference/2-0-manual-preview-version/).

-   **Method 1: Specify the internal endpoint**
    
    ```
    # Use the internal endpoint of Singapore as an example.
    config.endpoint = "https://oss-ap-southeast-1-internal.aliyuncs.com"
    # Initialize the OSS client.
    client = oss.Client(config)
    ```
    
-   **Method 2: Set using** `**use_internal_endpoint = True**`
    
    ```
    config.use_internal_endpoint = True
    # Initialize the OSS client.
    client = oss.Client(config)
    ```
    

## Python SDK V1

Specify the internal endpoint when you initialize the OSS client instance. For the complete initialization code, see [Initialization (Python SDK V1)](/help/en/oss/initialization-2).

```
# Use the internal endpoint of Singapore as an example.
endpoint = "oss-ap-southeast-1-internal.aliyuncs.com"
# Initialize the OSS client instance.
bucket = oss.Bucket(auth, endpoint, bucket, region="ap-southeast-1")
```

## Go SDK V2

When you initialize an OSS client instance, use the internal endpoint by specifying the endpoint or setting `WithUseInternalEndpoint(true)`. For the complete initialization code, see [OSS Go SDK V2](/help/en/oss/developer-reference/manual-for-go-sdk-v2/).

-   **Method 1: Specify an endpoint for internal access**
    
    ```
    // Configure the OSS client by setting the credentials provider and service region.
    config := oss.LoadDefaultConfig().
            WithCredentialsProvider(credentials.NewEnvironmentVariableCredentialsProvider()).
            WithRegion("ap-southeast-1").
            WithEndpoint("oss-ap-southeast-1-internal.aliyuncs.com") // Take the internal endpoint for Singapore as an example.
    
    // Initialize the OSS client instance.
    client := oss.NewClient(config)
    ```
    
-   **Method 2: Set using** `**WithUseInternalEndpoint(true)**`
    
    ```
    // Configure the OSS client, and set the credential provider and service region.
    config := oss.LoadDefaultConfig().
            WithCredentialsProvider(credentials.NewEnvironmentVariableCredentialsProvider()).
            WithRegion("ap-southeast-1").
            WithUseInternalEndpoint(true)
    
    // Initialize the OSS client instance.
    client := oss.NewClient(config)
    ```
    

## Go SDK V1

Specify the internal endpoint when you initialize the OSS client instance. For the complete initialization code, see [Configure a client](/help/en/oss/initialization-9).

```
// Create an OSS client instance.
client, _ := oss.New(
        "oss-ap-southeast-1-internal.aliyuncs.com", // Use the internal endpoint of Singapore as an example.
        "",
        "",
        oss.SetCredentialsProvider(&provider),
        oss.AuthVersion(oss.AuthV4),
        oss.Region("ap-southeast-1"),
)
```

### **Transfer acceleration endpoint**

The transfer acceleration endpoint is a globally distributed access point that leverages Global Accelerator to optimize data transfer paths. After [enabling transfer acceleration](/help/en/oss/user-guide/transfer-acceleration#task-1813962) for your bucket, use this endpoint for high-speed, long-distance uploads and downloads across regions.

#### **Formats**

-   **Endpoint**: `oss-accelerate.aliyuncs.com`
    
-   **Bucket domain name**: `[BucketName].oss-accelerate.aliyuncs.com`
    

#### **Access examples**

## ossutil

This example demonstrates an international download using ossutil 2.0. Before you start, [install and configure ossutil 2.0](/help/en/oss/developer-reference/ossutil-overview/). Specify the transfer acceleration endpoint during configuration or by using the `-e` parameter during the download.

```
ossutil cp oss://example-bucket/dest.jpg dest.jpg -e oss-accelerate.aliyuncs.com
```

## SDK

The following sections provide integration examples for common SDKs. For other languages, see the initialization examples in the [SDK Reference](/help/en/oss/developer-reference/sdk-code-samples/).

## Java SDK V2

When you initialize an OSS client instance, use the transfer acceleration endpoint by specifying the endpoint or setting `useAccelerateEndpoint(true)`. For the complete initialization code, see [OSS Java SDK V2 (Preview)](/help/en/oss/developer-reference/oss-sdk-for-java-2-0/).

-   **Method 1: Specify the transfer acceleration endpoint**
    
    ```
    String endpoint = "oss-accelerate.aliyuncs.com";
    // Initialize the OSS client
    OSSClient client = OSSClient.newBuilder()
            .credentialsProvider(provider)
            .region("ap-southeast-1")
            .endpoint(endpoint)
            .build();
    ```
    
-   **Method 2: Set** `**useAccelerateEndpoint(true)**`
    
    ```
    // Initialize the OSS client
    OSSClient client = OSSClient.newBuilder()
            .credentialsProvider(provider)
            .region("ap-southeast-1")
            .useAccelerateEndpoint(true)
            .build();
    ```
    

## Java SDK V1

Specify the transfer acceleration endpoint when you initialize the OSS client instance. For the complete initialization code, see [OSS Java SDK V1](/help/en/oss/developer-reference/oss-java-sdk/).

```
String endpoint = "oss-accelerate.aliyuncs.com";
// Initialize the OSS client
OSS ossClient = OSSClientBuilder.create()
        .credentialsProvider(provider)
        .clientConfiguration(clientBuilderConfiguration)
        .region("ap-southeast-1")
        .endpoint(endpoint)
        .build();
```

## Python SDK V2

When you initialize an OSS client instance, use the transfer acceleration endpoint by specifying the endpoint or setting `use_accelerate_endpoint = True`. For the complete initialization code, see [OSS SDK for Python 2.0](/help/en/oss/developer-reference/2-0-manual-preview-version/).

-   **Method 1: Specify the transfer acceleration endpoint**
    
    ```
    config.endpoint = "oss-accelerate.aliyuncs.com"
    # Initialize the OSS client
    client = oss.Client(config)
    ```
    
-   **Method 2: Set** `**use_accelerate_endpoint = True**`
    
    ```
    config.use_accelerate_endpoint = True
    # Initialize the OSS client
    client = oss.Client(config)
    ```
    

## Python SDK V1

Specify the transfer acceleration endpoint when you initialize the OSS client instance. For the complete initialization code, see [Initialization (Python SDK V1)](/help/en/oss/initialization-2).

```
endpoint = "oss-accelerate.aliyuncs.com"
# Initialize the OSS client instance
bucket = oss.Bucket(auth, endpoint, bucket, region="ap-southeast-1")
```

## Go SDK V2

When you initialize an OSS client instance, use the transfer acceleration endpoint by specifying the endpoint or setting `WithUseAccelerateEndpoint(true)`. For the complete initialization code, see [OSS Go SDK V2](/help/en/oss/developer-reference/manual-for-go-sdk-v2/).

-   **Method 1: Specify the transfer acceleration endpoint**
    
    ```
    // Configure the OSS client, and set the credential provider and service region
    config := oss.LoadDefaultConfig().
            WithCredentialsProvider(credentials.NewEnvironmentVariableCredentialsProvider()).
            WithRegion("ap-southeast-1").
            WithEndpoint("oss-accelerate.aliyuncs.com")
    
    // Initialize the OSS client instance
    client := oss.NewClient(config)
    ```
    
-   **Method 2: Set** `**WithUseAccelerateEndpoint(true)**`
    
    ```
    // Configure the OSS client, and set the credential provider and service region
    config := oss.LoadDefaultConfig().
            WithCredentialsProvider(credentials.NewEnvironmentVariableCredentialsProvider()).
            WithRegion("ap-southeast-1").
            WithUseAccelerateEndpoint(true)
    
    // Initialize the OSS client instance
    client := oss.NewClient(config)
    ```
    

## Go SDK V1

Specify the transfer acceleration endpoint when you initialize the OSS client instance. For the complete initialization code, see [Configure the client](/help/en/oss/initialization-9).

```
// Create an OSS client instance
client, _ := oss.New(
        "oss-accelerate.aliyuncs.com",
        "",
        "",
        oss.SetCredentialsProvider(&provider),
        oss.AuthVersion(oss.AuthV4),
        oss.Region("ap-southeast-1"),
)
```

## **Protocol support**

### **HTTP/HTTPS protocols**

Endpoints and bucket domain names in all regions support access over HTTP and HTTPS. To ensure data transfer security, use the HTTPS protocol in production environments.

### IPv4 and IPv6 support

All regions support IPv4 access. Some regions also support dual-stack access to endpoints over IPv4 and IPv6. This allows clients in IPv6 network environments to connect directly to OSS resources. For Endpoints that support IPv6, no special client configuration is required. In pure IPv6 or dual-stack network environments, DNS automatically resolves and prioritizes the IPv6 address to establish a connection. ECS instances in a classic network cannot access OSS resources over IPv4 or IPv6.

**Verify IPv6 support for an endpoint**

Use the `dig AAAA` command to check if an endpoint supports IPv6 access.

```
dig AAAA ap-southeast-1.oss.aliyuncs.com
```

If the Endpoint supports IPv6, the `ANSWER SECTION` of the command output displays an AAAA record. This indicates that an IPv6 address is configured for the domain name.

```
ap-southeast-1.oss.aliyuncs.com. 60 IN  AAAA    240b:4000:f10::2c5
```

## **Reference**

-   [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints)

You must initialize request options (oss\_request\_options\_t) and specify an endpoint when you use Object Storage Service (OSS) SDK for C.

## Initialize request options

### **Use the V4 signature algorithm (recommended)**

We recommend that you use the V4 signature algorithm for improved security. When you initialize the SDK using the V4 signature, you must specify an endpoint and an Alibaba Cloud region ID. The region ID specifies the region to which the request is sent, such as `cn-hangzhou`. You must also declare `signature_version = 4`. V4 signatures are supported in OSS SDK for C 3.11.0 and later.

The following sample code provides an example on how to create an OSSClient instance using an OSS endpoint and the V4 signature algorithm. To create an OSSClient instance using a custom domain name or access credentials obtained from STS, modify the following sample code accordingly.

```
#include "oss_api.h"
#include "aos_http_io.h"
/* Specify the endpoint of the region in which the bucket is located. For example, if the bucket is located in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com. */
const char *endpoint = "yourEndpoint";
/* Specify the region in which the bucket is located. For example, if the bucket is located in the China (Hangzhou) region, set the region to cn-hangzhou. */
const char *region = "yourRegion";

void init_options(oss_request_options_t *options)
{
    options->config = oss_config_create(options->pool);
    /* Use a char* string to initialize the aos_string_t data type. */
    aos_str_set(&options->config->endpoint, endpoint);
    /* Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured. */  
    aos_str_set(&options->config->access_key_id, getenv("OSS_ACCESS_KEY_ID"));
    aos_str_set(&options->config->access_key_secret, getenv("OSS_ACCESS_KEY_SECRET"));
    // Specify two additional parameters.
    aos_str_set(&options->config->region, region);
    options->config->signature_version = 4;
    /* Specify whether to use CNAME to access OSS. The value 0 indicates that CNAME is not used. */
    options->config->is_cname = 0;
    /* Specify network parameters. The second parameter in this function specifies the ownership of ctl. By default, the value of the second parameter is 0. */
    options->ctl = aos_http_controller_create(options->pool, 0);
}
int main() {
    aos_pool_t *p;
    oss_request_options_t *options;
    /* Initialize global variables. You need to initialize global variables only once in the program lifecycle. */
    if (aos_http_io_initialize(NULL, 0) != AOSE_OK) {
        return -1;
    }
    /* Initialize the memory pool and options. */
    aos_pool_create(&p, NULL);
    options = oss_request_options_create(p);
    init_options(options);
    /* The logic code. In this example, the logic code is omitted. */
    /* Release the memory pool. This operation releases the memory resources allocated for the request. */
    aos_pool_destroy(p);
    /* Release global resources that are allocated. You need to release global resources only once in the program lifecycle. */
    aos_http_io_deinitialize();
    return 0;
}
```

### **Use the V1 signature algorithm (not recommend)**

**Important**

From March 1, 2025, the V1 signature algorithm of OSS is no longer available to new customers with new UIDs. From September 1, 2025, OSS no longer updates and maintains the V1 signature algorithm, and the V1 signature algorithm is no longer available for new buckets. Upgrade V1 signatures to V4 signatures at the earliest opportunity to prevent impact on your business.

### Use an OSS endpoint to initialize request options

The following sample code provides an example on how to use an OSS endpoint to initialize request options:

```
#include "oss_api.h"
#include "aos_http_io.h"
/* Specify the endpoint of the region in which the bucket is located. For example, if the bucket is located in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com. */
const char *endpoint = "yourEndpoint";

void init_options(oss_request_options_t *options)
{
    options->config = oss_config_create(options->pool);
    /* Use a char* string to initialize aos_string_t. */
    aos_str_set(&options->config->endpoint, endpoint);
    /* Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured. */  
    aos_str_set(&options->config->access_key_id, getenv("OSS_ACCESS_KEY_ID"));
    aos_str_set(&options->config->access_key_secret, getenv("OSS_ACCESS_KEY_SECRET"));
    /* Specify whether to use CNAME. The value 0 indicates that CNAME is not used. */
    options->config->is_cname = 0;
    /* Specify network parameters. The second parameter in this function specifies the ownership of ctl. By default, the value of the second parameter is 0. */
    options->ctl = aos_http_controller_create(options->pool, 0);
}
int main() {
    aos_pool_t *p;
    oss_request_options_t *options;
    /* Initialize global variables. You need to initialize global variables only once in the program lifecycle. */
    if (aos_http_io_initialize(NULL, 0) != AOSE_OK) {
        return -1;
    }
    /* Initialize the memory pool and options. */
    aos_pool_create(&p, NULL);
    options = oss_request_options_create(p);
    init_options(options);
    /* The logic code. In this example, the logic code is omitted. */
    /* Release the memory pool. This operation releases the memory resources allocated for the request. */
    aos_pool_destroy(p);
    /* Release global resources that are allocated. You need to release global resources only once in the program lifecycle. */
    aos_http_io_deinitialize();
    return 0;
}
```

### Use a custom domain name to initialize request options

The following sample code provides an example on how to use a custom domain name to initialize request options:

```
#include "oss_api.h"
#include "aos_http_io.h"
# Specify the custom domain name. */
const char *endpoint = "yourCustomEndpoint";

void init_options(oss_request_options_t *options) {
    options->config = oss_config_create(options->pool);
    /* Use a char* string to initialize aos_string_t. */
    aos_str_set(&options->config->endpoint, endpoint);
    /* Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured. */  
    aos_str_set(&options->config->access_key_id, getenv("OSS_ACCESS_KEY_ID"));
    aos_str_set(&options->config->access_key_secret, getenv("OSS_ACCESS_KEY_SECRET"));
    /* Enable CNAME and map the custom domain name to your bucket. */
    options->config->is_cname = 1;
    options->ctl = aos_http_controller_create(options->pool, 0);
}
int main() {
    aos_pool_t *p;
    oss_request_options_t *options;
    /* Initialize global variables. You need to initialize global variables only once in the program lifecycle. */
    if (aos_http_io_initialize(NULL, 0) != AOSE_OK) {
        return -1;
    }
    /* Initialize the memory pool and options. */
    aos_pool_create(&p, NULL);
    options = oss_request_options_create(p);
    init_options(options);
    /* The logic code. In this example, the logic code is omitted. */
    /* Release the memory pool. This operation releases the memory resources allocated for the request. */
    aos_pool_destroy(p);
    /* Release global resources that are allocated. You need to release global resources only once in the program lifecycle. */
    aos_http_io_deinitialize();
    return 0;
}
```

### Use STS-provided temporary access credentials to initialize request options

The following sample code provides an example on how to use temporary access credentials that are obtained from Security Token Service (STS) to initialize request options:

```
#include "oss_api.h"
#include "aos_http_io.h"
/* Specify the endpoint of the region in which the bucket is located. For example, if the bucket is located in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com. */
const char *endpoint = "yourEndpoint";
/* Before you run the sample code, make sure that the YOUR_ACCESS_KEY_ID and YOUR_ACCESS_KEY_SECRET environment variables are configured to store temporary access credentials obtained from STS. */  
const char *access_key_id = getenv("YOUR_ACCESS_KEY_ID");
const char *access_key_secret = getenv("YOUR_ACCESS_KEY_SECRET");
/* Specify the security token that is obtained from STS. */
const char *sts_token = "<yourSecurityToken>";
void init_options(oss_request_options_t *options)
{
    options->config = oss_config_create(options->pool);
    /* Use a char* string to initialize aos_string_t. */
    aos_str_set(&options->config->endpoint, endpoint);
    aos_str_set(&options->config->access_key_id, access_key_id);
    aos_str_set(&options->config->access_key_secret, access_key_secret);
    /* Set the token. */
    aos_str_set(&options->config->sts_token, sts_token);
    /* Specify whether to use CNAME. The value 0 indicates that CNAME is not used. */
    options->config->is_cname = 0;
    options->ctl = aos_http_controller_create(options->pool, 0);
}
int main() {
    aos_pool_t *p;
    oss_request_options_t *options;
    /* Initialize global variables. You need to initialize global variables only once in the program lifecycle. */
    if (aos_http_io_initialize(NULL, 0) != AOSE_OK) {
        return -1;
    }
    /* Initialize the memory pool and options. */
    aos_pool_create(&p, NULL);
    options = oss_request_options_create(p);
    init_options(options);
    /* The logic code. In this example, the logic code is omitted. */
    /* Release the memory pool. This operation releases the memory resources allocated for the request. */
    aos_pool_destroy(p);
    /* Release global resources that are allocated. You need to release global resources only once in the program lifecycle. */
    aos_http_io_deinitialize();
    return 0;
}
```

## Parameters

The following table describes the common parameters.

**Parameter**

**Description**

speed\_limit

The lower limit on the average speed. Unit: bytes/second. Default value: 1024.

speed\_time

The minimum duration for the average speed calculation, in seconds. The default value is 15.

**Important**

Both the speed\_limit and speed\_time parameters are required. If the average speed is less than the lower limit that is specified by the speed\_limit parameter for a period of time that is specified by the speed\_time parameter, the request is interrupted.

connect\_timeout

The timeout period for establishing a connection. Unit: seconds. Default value: 10.

dns\_cache\_timeout

The timeout period of the DNS cache. Unit: seconds. Default value: 60.

max\_memory\_size

The maximum size of data that can be written to the memory when data is downloaded. Unit: bytes. By default, the maximum size of data that can be written to the memory when data is downloaded is 1 GB.

enable\_crc

Specifies whether to enable CRC-64. Valid values:

-   0: disables CRC-64.
    
-   1 (default): enables CRC-64.
    

verify\_ssl

Specifies whether to enable SSL-based authentication. Valid values:

-   0: disables SSL-based authentication.
    
-   1 (default): enables SSL-based authentication.
    

ca\_path

The root path of the CA certificate. This parameter is valid when verify\_ssl is set to 1. By default, this parameter is left empty.

ca\_file

The path of the CA certificate. This parameter is valid when verify\_ssl is set to 1. By default, this parameter is left empty.

proxy\_host

The address of the proxy server in the `host:port` format.

proxy\_auth

The authentication credentials for the proxy server in the `user:password` format.

## **Configuration examples**

### **Specify a timeout period**

The following sample code provides an example on how to specify a timeout period:

```
#include "oss_api.h"
#include "aos_http_io.h"
/* Specify the endpoint of the region in which the bucket is located. For example, if the bucket is located in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com. */
const char *endpoint = "yourEndpoint";

void init_options(oss_request_options_t *options)
{
    options->config = oss_config_create(options->pool);
    /* Use a char* string to initialize aos_string_t. */
    aos_str_set(&options->config->endpoint, endpoint);
    /* Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured. */  
    aos_str_set(&options->config->access_key_id, getenv("OSS_ACCESS_KEY_ID"));
    aos_str_set(&options->config->access_key_secret, getenv("OSS_ACCESS_KEY_SECRET"));
    /* Specify whether to use CNAME. The value 0 indicates that CNAME is not used. */
    options->config->is_cname = 0;
    /* Specify network parameters. The second parameter in this function specifies the ownership of ctl. By default, the value of the second parameter is 0. */
    options->ctl = aos_http_controller_create(options->pool, 0);
    /* Specify the timeout period for establishing a connection. Default value: 10. Unit: seconds. */
    options->ctl->options->connect_timeout = 10;
    /* Specify the timeout period of the DNS cache. Default value: 60. Unit: seconds. */
    options->ctl->options->dns_cache_timeout = 60;
    /* 
    Specify the timeout period. 
    Configure the speed_limit parameter to specify the lower limit on the average speed. Default value: 1024 (1 KB/s). 
    Configure the speed_time parameter to specify the allowed maximum time period for an average speed that is less than the lower speed limit. Default value: 15. Unit: seconds. 
    The following lines specify that a request timeout occurs when the transmission speed is less than 1 KB/s for 15 consecutive seconds: 
    */
    options->ctl->options->speed_limit = 1024;
    options->ctl->options->speed_time = 15;
}
int main() {
    aos_pool_t *p;
    oss_request_options_t *options;
    /* Initialize global variables. You need to initialize global variables only once in the program lifecycle. */
    if (aos_http_io_initialize(NULL, 0) != AOSE_OK) {
        return -1;
    }
    /* Initialize the memory pool and options. */
    aos_pool_create(&p, NULL);
    options = oss_request_options_create(p);
    init_options(options);
    /* The logic code. In this example, the logic code is omitted. */
    /* Release the memory pool. This operation releases the memory resources allocated for the request. */
    aos_pool_destroy(p);
    /* Release global resources that are allocated. You need to release global resources only once in the program lifecycle. */
    aos_http_io_deinitialize();
    return 0;
}
```

### **Configure SSL-based authentication**

By default, SSL-based authentication is enabled for OSS SDK for C 3.9.2 and later. If SSL-based authentication fails, check whether the path of the SSL certificate is correct or disable SSL-based authentication.

The following sample code provides an example on how to configure SSL-based authentication:

```
#include "oss_api.h"
#include "aos_http_io.h"
/* Specify the endpoint of the region in which the bucket is located. For example, if the bucket is located in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com. */
const char *endpoint = "yourEndpoint";

void init_options(oss_request_options_t *options)
{
    options->config = oss_config_create(options->pool);
    /* Use a char* string to initialize aos_string_t. */
    aos_str_set(&options->config->endpoint, endpoint);
    /* Obtain access credentials from environment variables. Before you run the sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured. */  
    aos_str_set(&options->config->access_key_id, getenv("OSS_ACCESS_KEY_ID"));
    aos_str_set(&options->config->access_key_secret, getenv("OSS_ACCESS_KEY_SECRET"));
    /* Specify whether to use CNAME. The value 0 indicates that CNAME is not used. */
    options->config->is_cname = 0;
    /* Specify network parameters. The second parameter in this function specifies the ownership of ctl. By default, the value of the second parameter is 0. */
    options->ctl = aos_http_controller_create(options->pool, 0);

    /* Configure SSL-based authentication. */
    Configure the verify_ssl parameter to specify whether to enable SSL-based authentication. Valid values: 0 and 1. Default value: 1. The value 1 specifies that SSL-based authentication is enabled. 
    Configure the ca_path parameter to specify the root path of the CA certificate. This parameter is valid when verify_ssl is set to 1. By default, this parameter is left empty. 
    Configure the ca_file parameter to specify the path of the CA certificate. This parameter is valid when verify_ssl is set to 1. By default, this parameter is left empty. */
    /* Enable SSL-based authentication and specify the path of the CA certificate. */
    //options->ctl->options->verify_ssl = 1;
    //options->ctl->options->ca_path = "/etc/ssl/certs/";
    //options->ctl->options->ca_file = "/etc/ssl/certs/ca-certificates.crt";

    /* Disable SSL-based authentication. */
    //options->ctl->options->verify_ssl = 0;
}
int main() {
    aos_pool_t *p;
    oss_request_options_t *options;
    /* Initialize global variables. You need to initialize global variables only once in the program lifecycle. */
    if (aos_http_io_initialize(NULL, 0) != AOSE_OK) {
        return -1;
    }
    /* Initialize the memory pool and options. */
    aos_pool_create(&p, NULL);
    options = oss_request_options_create(p);
    init_options(options);
    /* The logic code. In this example, the logic code is omitted. */
    /* Release the memory pool. This operation releases the memory resources allocated for the request. */
    aos_pool_destroy(p);
    /* Release global resources that are allocated. You need to release global resources only once in the program lifecycle. */
    aos_http_io_deinitialize();
    return 0;
}
```

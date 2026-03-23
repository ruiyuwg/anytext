To retrieve only a portion of an object, you can perform a range download to obtain a specific range of data.

## Usage notes

-   In this topic, the public endpoint of the China (Hangzhou) region is used. If you want to access OSS from other Alibaba Cloud services in the same region as OSS, use an internal endpoint. For more information about OSS regions and endpoints, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
    
-   In this topic, an OSSClient instance is created by using an OSS endpoint. If you want to create an OSSClient instance by using custom domain names or Security Token Service (STS), see [Initialization](/help/en/oss/developer-reference/initialization-5#concept-32133-zh).
    

## **Permissions**

By default, an Alibaba Cloud account has full permissions. RAM users or RAM roles under an Alibaba Cloud account do not have any permissions by default. The Alibaba Cloud account or account administrator must grant operation permissions through [RAM Policy](/help/en/oss/ram-policy-overview/) or [Bucket policies](/help/en/oss/user-guide/oss-bucket-policy/).

**API**

**Action**

**Definition**

GetObject

`oss:GetObject`

Downloads an object.

`oss:GetObjectVersion`

When downloading an object, if you specify the object version through versionId, this permission is required.

`kms:Decrypt`

When downloading an object, if the object metadata contains X-Oss-Server-Side-Encryption: KMS, this permission is required.

## Sample code

The following code provides an example of how to download a specific range of data from an object.

```
#include "oss_api.h"
#include "aos_http_io.h"
/* Specify the endpoint of the region in which the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com. */
const char *endpoint = "yourEndpoint";

/* Specify the bucket name. Example: examplebucket. */
const char *bucket_name = "examplebucket";
/* Specify the full path of the object. Do not include the bucket name in the full path. Example: exampledir/exampleobject.txt. */
const char *object_name = "exampledir/exampleobject.txt";
/* Specify the region in which the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou. */
const char *region = "yourRegion";
void init_options(oss_request_options_t *options)
{
    options->config = oss_config_create(options->pool);
    /* Initialize the aos_string_t type with a char* string. */
    aos_str_set(&options->config->endpoint, endpoint);
    /* Obtain access credentials from environment variables. Before running this sample code, make sure the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set. */    
    aos_str_set(&options->config->access_key_id, getenv("OSS_ACCESS_KEY_ID"));
    aos_str_set(&options->config->access_key_secret, getenv("OSS_ACCESS_KEY_SECRET"));
    // Configure two additional parameters.
    aos_str_set(&options->config->region, region);
    options->config->signature_version = 4;
    /* Specify whether to use a CNAME. A value of 0 indicates that a CNAME is not used. */
    options->config->is_cname = 0;
    /* Set network-related parameters, such as the timeout period. */
    options->ctl = aos_http_controller_create(options->pool, 0);
}
int main(int argc, char *argv[])
{
    /* Call the aos_http_io_initialize method at the program entry point to initialize global resources, such as the network and memory. */
    if (aos_http_io_initialize(NULL, 0) != AOSE_OK) {
        exit(1);
    }
    /* The memory pool for memory management, which is equivalent to apr_pool_t. The implementation code is in the APR library. */
    aos_pool_t *pool;
    /* Create a new memory pool. The second parameter is NULL, which indicates that the pool does not inherit from other memory pools. */
    aos_pool_create(&pool, NULL);
    /* Create and initialize options. This parameter includes global configuration information, such as the endpoint, access_key_id, access_key_secret, is_cname, and curl. */
    oss_request_options_t *oss_client_options;
    /* Allocate memory for options in the memory pool. */
    oss_client_options = oss_request_options_create(pool);
    /* Initialize the client options oss_client_options. */
    init_options(oss_client_options);
    /* Initialize the parameters. */
    aos_string_t bucket;
    aos_string_t object;
    aos_list_t buffer;
    aos_buf_t *content = NULL;
    aos_table_t *params = NULL;
    aos_table_t *headers = NULL;
    aos_table_t *resp_headers = NULL; 
    aos_status_t *resp_status = NULL; 
    char *buf = NULL;
    int64_t len = 0;
    int64_t size = 0;
    int64_t pos = 0;
    aos_str_set(&bucket, bucket_name);
    aos_str_set(&object, object_name);
    aos_list_init(&buffer);
    headers = aos_table_make(pool, 1);
    /* Set the Range header to download bytes 20 to 100. */
    apr_table_set(headers, "Range", "bytes=20-100");
    /* Download the object to memory. */
    resp_status = oss_get_object_to_buffer(oss_client_options, &bucket, &object, headers, params, &buffer, &resp_headers);
    if (aos_status_is_ok(resp_status)) {
        printf("get object to buffer succeeded\n");
        /* Get the buffer length. */
        aos_list_for_each_entry(aos_buf_t, content, &buffer, node) {
            len += aos_buf_size(content);
        }
        buf = aos_pcalloc(pool, (apr_size_t)(len + 1));
        buf[len] = '\0';
        /* Copy the buffer content to memory. */
        aos_list_for_each_entry(aos_buf_t, content, &buffer, node) {
            size = aos_buf_size(content);
            memcpy(buf + pos, content->pos, (size_t)size);
            pos += size;
        }
    }
    else {
        printf("get object to buffer failed\n");  
    }
    /* Release the memory pool. This releases the memory allocated for resources during the request. */
    aos_pool_destroy(pool);
    /* Release the previously allocated global resources. */
    aos_http_io_deinitialize();
    return 0;
}
```

## References

For more information about the API operation for range downloads, see [GetObject](/help/en/oss/developer-reference/getobject#reference-ccf-rgd-5db).

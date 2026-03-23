This topic describes how to use a progress bar to monitor the upload progress.

## Notes

-   In this topic, the public endpoint of the China (Hangzhou) region is used. If you want to access OSS from other Alibaba Cloud services in the same region as OSS, use an internal endpoint. For more information about OSS regions and endpoints, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
    
-   In this topic, an OSSClient instance is created by using an OSS endpoint. If you want to create an OSSClient instance by using custom domain names or Security Token Service (STS), see [Initialization](/help/en/oss/developer-reference/initialization-5#concept-32133-zh).
    

## Limits

The progress bar feature is not supported for oss\_put\_object\_from\_file or oss\_put\_object\_from\_buffer.

## Sample code

The following code provides an example of how to use a progress bar with the PutObject method.

```
#include "oss_api.h"
#include "aos_http_io.h"
/* Replace yourEndpoint with the Endpoint of the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the Endpoint to https://oss-cn-hangzhou.aliyuncs.com. */
const char *endpoint = "yourEndpoint";

/* Replace with your bucket name, for example, examplebucket. */
const char *bucket_name = "examplebucket";
/* Replace with the full path of the object. The full path cannot contain the bucket name. For example, exampledir/exampleobject.txt. */
const char *object_name = "exampledir/exampleobject.txt";
/* Replace with the full path of the local file. */
const char *local_filename = "yourLocalFilename";
/* Replace yourRegion with the ID of the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region ID to cn-hangzhou. */
const char *region = "yourRegion";
void init_options(oss_request_options_t *options)
{
    options->config = oss_config_create(options->pool);
    /* Initialize the aos_string_t type with a char* string. */
    aos_str_set(&options->config->endpoint, endpoint);
    /* Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set. */    
    aos_str_set(&options->config->access_key_id, getenv("OSS_ACCESS_KEY_ID"));
    aos_str_set(&options->config->access_key_secret, getenv("OSS_ACCESS_KEY_SECRET"));
    // Configure the following two parameters.
    aos_str_set(&options->config->region, region);
    options->config->signature_version = 4;
    /* Specify whether to use a CNAME. 0 indicates that a CNAME is not used. */
    options->config->is_cname = 0;
    /* Set network parameters, such as the timeout period. */
    options->ctl = aos_http_controller_create(options->pool, 0);
}
void percentage(int64_t consumed_bytes, int64_t total_bytes) 
{
    assert(total_bytes >= consumed_bytes);
    printf("%%%" APR_INT64_T_FMT "\n", consumed_bytes * 100 / total_bytes);
}
int main(int argc, char *argv[])
{
    /* Call the aos_http_io_initialize method at the program entry to initialize global resources such as the network and memory. */
    if (aos_http_io_initialize(NULL, 0) != AOSE_OK) {
        exit(1);
    }
    /* The memory pool (pool) is used for memory management and is equivalent to apr_pool_t. The implementation code is in the apr library. */
    aos_pool_t *pool;
    /* Create a new memory pool. The second parameter is NULL, which indicates that the new memory pool does not inherit from another memory pool. */
    aos_pool_create(&pool, NULL);
    /* Create and initialize options. This parameter contains global configurations, such as endpoint, access_key_id, access_key_secret, is_cname, and curl. */
    oss_request_options_t *oss_client_options;
    /* Allocate memory for options in the memory pool. */
    oss_client_options = oss_request_options_create(pool);
    /* Initialize the client options oss_client_options. */
    init_options(oss_client_options);
    /* Initialize parameters. */
    aos_string_t bucket;
    aos_string_t object;
    aos_string_t file;   
    aos_list_t resp_body;
    aos_table_t *resp_headers = NULL;
    aos_status_t *resp_status = NULL; 
    aos_str_set(&bucket, bucket_name);
    aos_str_set(&object, object_name);
    aos_str_set(&file, local_filename);
    /* Upload with a progress bar. */
    resp_status = oss_do_put_object_from_file(oss_client_options, &bucket, &object, &file, NULL, NULL, percentage, &resp_headers, &resp_body);
    if (aos_status_is_ok(resp_status)) {
        printf("put object from file succeeded\n");
    } else {
        printf("put object from file failed\n");
    }
    /* Release the memory pool. This releases the memory allocated for various resources during the request. */
    aos_pool_destroy(pool);
    /* Release the previously allocated global resources. */
    aos_http_io_deinitialize();
    return 0;
}
```

## References

For the complete sample code that shows how to use a progress bar when you upload a file, see the [GitHub example](https://github.com/aliyun/aliyun-oss-c-sdk/blob/master/oss_c_sdk_sample/oss_progress_sample.c?spm=a2c4g.11186623.0.0.6f642ef5bkGXza&file=oss_progress_sample.c).

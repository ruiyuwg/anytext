Track download progress in real time by passing a progress callback to `oss_do_get_object_to_file`.

## Usage notes

-   The examples in this topic use the public endpoint for the China (Hangzhou) region. To access OSS from another Alibaba Cloud service in the same region, use an internal endpoint instead. For more information, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints).
    
-   The examples create an OSSClient instance using an OSS endpoint. To create an instance using a custom domain name or Security Token Service (STS), see [Initialization](/help/en/oss/developer-reference/initialization-5).
    

## Limitations

`oss_get_object_from_file` and `oss_get_object_from_buffer` do not support progress callbacks. Use `oss_do_get_object_to_file` instead, which accepts a progress callback as a parameter.

## Example code

The example below registers a `percentage` callback and passes it to `oss_do_get_object_to_file`. The callback receives `consumed_bytes` (bytes downloaded so far) and `total_bytes` (total object size), and is invoked incrementally as data is transferred.

```
#include "oss_api.h"
#include "aos_http_io.h"

/* Set to the endpoint of the region where your bucket is located.
   Example for China (Hangzhou): https://oss-cn-hangzhou.aliyuncs.com */
const char *endpoint = "yourEndpoint";

/* Bucket name. Example: examplebucket */
const char *bucket_name = "examplebucket";

/* Full object path, excluding the bucket name. Example: exampledir/exampleobject.txt */
const char *object_name = "example.txt";

/* Local path to save the downloaded file */
const char *download_filename = "1.txt";

/* Region ID of the bucket. Example for China (Hangzhou): cn-hangzhou */
const char *region = "yourRegion";

void init_options(oss_request_options_t *options)
{
    options->config = oss_config_create(options->pool);

    /* Initialize aos_string_t fields from char* strings */
    aos_str_set(&options->config->endpoint, endpoint);

    /* Read credentials from environment variables.
       Set OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET before running this code. */
    aos_str_set(&options->config->access_key_id, getenv("OSS_ACCESS_KEY_ID"));
    aos_str_set(&options->config->access_key_secret, getenv("OSS_ACCESS_KEY_SECRET"));

    aos_str_set(&options->config->region, region);
    options->config->signature_version = 4;

    /* Set is_cname to 0 when not using a custom domain name (CNAME) */
    options->config->is_cname = 0;

    /* Configure network settings, such as timeouts */
    options->ctl = aos_http_controller_create(options->pool, 0);
}

/* Progress callback: called incrementally during the download.
   consumed_bytes — bytes received so far
   total_bytes    — total size of the object */
void percentage(int64_t consumed_bytes, int64_t total_bytes)
{
    assert(total_bytes >= consumed_bytes);
    printf("%%%" APR_INT64_T_FMT "\n", consumed_bytes * 100 / total_bytes);
}

int main(int argc, char *argv[])
{
    /* Initialize global resources (network, memory) at program entry */
    if (aos_http_io_initialize(NULL, 0) != AOSE_OK) {
        exit(1);
    }

    /* Create a memory pool (equivalent to apr_pool_t from the APR library) */
    aos_pool_t *pool;
    aos_pool_create(&pool, NULL);

    /* Allocate and initialize client options */
    oss_request_options_t *oss_client_options;
    oss_client_options = oss_request_options_create(pool);
    init_options(oss_client_options);

    /* Initialize parameters */
    aos_string_t bucket;
    aos_string_t object;
    aos_string_t file;
    aos_status_t *resp_status = NULL;

    aos_str_set(&bucket, bucket_name);
    aos_str_set(&object, object_name);

    /* Download the object with progress tracking.
       The percentage callback is invoked as data arrives. */
    aos_pool_create(&pool, NULL);
    oss_client_options = oss_request_options_create(pool);
    init_options(oss_client_options);
    aos_str_set(&file, download_filename);

    resp_status = oss_do_get_object_to_file(
        oss_client_options, &bucket, &object,
        NULL, NULL, &file, percentage, NULL
    );

    if (aos_status_is_ok(resp_status)) {
        printf("get object to file succeeded\n");
    } else {
        printf("get object to file failed\n");
    }

    /* Release the memory pool and global resources */
    aos_pool_destroy(pool);
    aos_http_io_deinitialize();

    return 0;
}
```

## References

For the complete sample, see the [GitHub example](https://github.com/aliyun/aliyun-oss-c-sdk/blob/master/oss_c_sdk_sample/oss_progress_sample.c).

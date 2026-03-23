Resumable upload splits a large file into multiple parts and uploads them separately. After all parts are uploaded, OSS merges them into a single object. If a part fails to upload, the upload resumes from the last recorded checkpoint.

Use resumable upload instead of a regular `oss_put_object` call when:

-   The file is large enough that a network interruption would be costly to restart
    
-   You need parallel uploads to improve throughput
    
-   Upload reliability over unstable networks is a priority
    

`oss_resumable_upload_file` wraps the multipart upload protocol into a single function call. It splits the file into parts, uploads them using concurrent threads, records progress in a checkpoint file, and merges all parts on success. The checkpoint file is deleted automatically after the upload completes.

## Parameters

Configure resumable uploads using `oss_resumable_clt_params_t`.

**Parameter**

**Description**

**Default**

`thread_num`

Number of concurrent upload threads

`1`

`enable_checkpoint`

Whether to enable checkpoint-based resumption. Set to `AOS_TRUE` to resume interrupted uploads.

Disabled

`partSize`

Size of each part in bytes. Valid range: 100 KB–5 GB

—

`checkpoint_path`

Path of the checkpoint file. Deleted automatically after a successful upload.

`{upload_file_path}.cp`

## Usage notes

-   The examples in this topic use the public endpoint for the China (Hangzhou) region. To access OSS from other Alibaba Cloud services in the same region, use an internal endpoint. For details, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints).
    
-   To create an OSSClient instance using a custom domain name or Security Token Service (STS), see [Initialization](/help/en/oss/developer-reference/initialization-5).
    
-   To use resumable upload, you must have the `oss:PutObject` permission. For details, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies).
    

## Sample code

The following example uploads a local file to an OSS bucket with checkpoint-based resumption enabled.

```
#include "oss_api.h"
#include "aos_http_io.h"

/* Replace with the endpoint for your bucket's region.
   Example for China (Hangzhou): https://oss-cn-hangzhou.aliyuncs.com */
const char *endpoint = "yourEndpoint";

/* Replace with your bucket name. Example: examplebucket */
const char *bucket_name = "examplebucket";

/* Replace with the full object path (excluding the bucket name).
   Example: exampledir/exampleobject.txt */
const char *object_name = "exampledir/exampleobject.txt";

/* Replace with the full path of the local file to upload. */
const char *local_filename = "yourLocalFilename";

/* Replace with the region ID of your bucket. Example: cn-hangzhou */
const char *region = "yourRegion";

void init_options(oss_request_options_t *options)
{
    options->config = oss_config_create(options->pool);

    /* Set the endpoint. */
    aos_str_set(&options->config->endpoint, endpoint);

    /* Load credentials from environment variables.
       Set OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET before running this code. */
    aos_str_set(&options->config->access_key_id, getenv("OSS_ACCESS_KEY_ID"));
    aos_str_set(&options->config->access_key_secret, getenv("OSS_ACCESS_KEY_SECRET"));

    /* Set the region and signature version. Both are required. */
    aos_str_set(&options->config->region, region);
    options->config->signature_version = 4;

    /* Set to 0 to disable CNAME. */
    options->config->is_cname = 0;

    /* Configure network settings such as timeouts. */
    options->ctl = aos_http_controller_create(options->pool, 0);
}

int main(int argc, char *argv[])
{
    /* Initialize global resources (network, memory). */
    if (aos_http_io_initialize(NULL, 0) != AOSE_OK) {
        exit(1);
    }

    /* Create a memory pool for this request. */
    aos_pool_t *pool;
    aos_pool_create(&pool, NULL);

    /* Initialize the client options. */
    oss_request_options_t *oss_client_options;
    oss_client_options = oss_request_options_create(pool);
    init_options(oss_client_options);

    /* Initialize request parameters. */
    aos_string_t bucket;
    aos_string_t object;
    aos_string_t file;
    aos_list_t resp_body;
    aos_table_t *headers = NULL;
    aos_table_t *resp_headers = NULL;
    aos_status_t *resp_status = NULL;
    oss_resumable_clt_params_t *clt_params;

    aos_str_set(&bucket, bucket_name);
    aos_str_set(&object, object_name);
    aos_str_set(&file, local_filename);
    aos_list_init(&resp_body);

    /* Configure the resumable upload:
       - part size:       100 KB (1024 * 100 bytes)
       - thread count:    3 concurrent threads
       - enable checkpoint: AOS_TRUE (resumes from checkpoint on failure)
       - checkpoint path: NULL (defaults to {upload_file_path}.cp) */
    clt_params = oss_create_resumable_clt_params_content(pool, 1024 * 100, 3, AOS_TRUE, NULL);

    resp_status = oss_resumable_upload_file(oss_client_options, &bucket, &object, &file,
                                            headers, NULL, clt_params, NULL,
                                            &resp_headers, &resp_body);
    if (aos_status_is_ok(resp_status)) {
        printf("resumable upload succeeded\n");
    } else {
        printf("resumable upload failed\n");
    }

    /* Release the memory pool and global resources. */
    aos_pool_destroy(pool);
    aos_http_io_deinitialize();
    return 0;
}
```

## References

For the complete sample code, see [GitHub](https://github.com/aliyun/aliyun-oss-c-sdk/blob/master/oss_c_sdk_sample/oss_resumable_sample.c).

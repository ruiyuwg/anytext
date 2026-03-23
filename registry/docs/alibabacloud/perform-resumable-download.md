Use `oss_resumable_download_file` to download large objects from OSS with automatic recovery from network interruptions — the SDK records progress in a checkpoint file and resumes from the last successful position on retry.

## Prerequisites

Before you begin, make sure you have:

-   An OSS bucket with at least one object to download
    
-   The `oss:GetObject` permission. For details, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies)
    
-   C SDK V3.5.2 or later if authenticating with Security Token Service (STS)
    

## Usage notes

-   The examples use the China (Hangzhou) region endpoint. To access OSS from another Alibaba Cloud service in the same region, use an internal endpoint instead. For a full list of endpoints, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints).
    
-   The examples create an OSSClient instance using an OSS domain name. To use a custom domain name or STS, see [Initialization (C SDK)](/help/en/oss/developer-reference/initialization-5#concept-32133-zh).
    

## How it works

Pass an `oss_resumable_clt_params_t` struct to `oss_resumable_download_file` to control download behavior. Create the struct with `oss_create_resumable_clt_params_content`:

```
oss_create_resumable_clt_params_content(pool, partSize, thread_num, enable_checkpoint, checkpoint_path)
```

The parameters map to the following positional arguments:

**Parameter**

**Description**

**Default**

`partSize`

Size of each part in bytes. Valid range: 1 B to 5 GB.

—

`thread_num`

Number of concurrent download threads.

1

`enable_checkpoint`

Whether to enable resumable download. Set to `AOS_TRUE` to record progress in a checkpoint file.

`AOS_FALSE` (disabled)

`checkpoint_path`

Path to the checkpoint file.

`{upload_file_path}.cp`

**Checkpoint file lifecycle:** When `enable_checkpoint` is `AOS_TRUE`, the SDK writes progress to a checkpoint file during the download. If the download fails, the next attempt reads that file and resumes from where it stopped. The checkpoint file is deleted automatically after the download completes.

## Download a large object

The following example uses three concurrent threads and a 100 KB part size without checkpointing. This is suitable for large objects on stable networks where parallelism speeds up the download but resume-on-failure is not required.

```
#include "oss_api.h"
#include "aos_http_io.h"

/* Replace with the endpoint for your bucket's region.
   Example for China (Hangzhou): https://oss-cn-hangzhou.aliyuncs.com */
const char *endpoint = "yourEndpoint";

/* Replace with your bucket name. Example: examplebucket */
const char *bucket_name = "examplebucket";

/* Full object path, excluding the bucket name. Example: exampledir/exampleobject.txt */
const char *object_name = "exampledir/exampleobject.txt";

/* Full path of the local file to save the download. */
const char *local_filename = "yourLocalFilename";

/* Replace with the region where your bucket is located. Example: cn-hangzhou */
const char *region = "yourRegion";

void init_options(oss_request_options_t *options)
{
    options->config = oss_config_create(options->pool);
    aos_str_set(&options->config->endpoint, endpoint);
    /* Read credentials from environment variables.
       Set OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET before running this code. */
    aos_str_set(&options->config->access_key_id, getenv("OSS_ACCESS_KEY_ID"));
    aos_str_set(&options->config->access_key_secret, getenv("OSS_ACCESS_KEY_SECRET"));
    aos_str_set(&options->config->region, region);
    options->config->signature_version = 4;
    /* Set to 0 to use the OSS domain name instead of a CNAME. */
    options->config->is_cname = 0;
    options->ctl = aos_http_controller_create(options->pool, 0);
}

int main(int argc, char *argv[])
{
    if (aos_http_io_initialize(NULL, 0) != AOSE_OK) {
        exit(1);
    }

    aos_pool_t *pool;
    aos_pool_create(&pool, NULL);

    oss_request_options_t *oss_client_options;
    oss_client_options = oss_request_options_create(pool);
    init_options(oss_client_options);

    aos_string_t bucket;
    aos_string_t object;
    aos_string_t file;
    aos_table_t *headers = NULL;
    aos_table_t *resp_headers = NULL;
    aos_status_t *resp_status = NULL;
    oss_resumable_clt_params_t *clt_params;

    aos_str_set(&bucket, bucket_name);
    aos_str_set(&object, object_name);
    aos_str_set(&file, local_filename);

    /* 100 KB part size, 3 threads, checkpointing disabled */
    clt_params = oss_create_resumable_clt_params_content(pool, 1024 * 100, 3, AOS_FALSE, NULL);
    resp_status = oss_resumable_download_file(oss_client_options, &bucket, &object, &file,
                                              headers, NULL, clt_params, NULL, &resp_headers);
    if (aos_status_is_ok(resp_status)) {
        printf("download succeeded\n");
    } else {
        printf("download failed\n");
    }

    aos_pool_destroy(pool);
    aos_http_io_deinitialize();
    return 0;
}
```

## Download with resume on failure

Enable checkpointing to resume an interrupted download rather than restarting from scratch. This is the recommended approach for large objects or unreliable networks.

```
#include "oss_api.h"
#include "aos_http_io.h"

/* Replace with the endpoint for your bucket's region.
   Example for China (Hangzhou): https://oss-cn-hangzhou.aliyuncs.com */
const char *endpoint = "yourEndpoint";

/* Replace with your bucket name. Example: examplebucket */
const char *bucket_name = "examplebucket";

/* Full object path, excluding the bucket name. Example: exampledir/exampleobject.txt */
const char *object_name = "exampledir/exampleobject.txt";

/* Full path of the local file to save the download. */
const char *local_filename = "yourLocalFilename";

/* Replace with the region where your bucket is located. Example: cn-hangzhou */
const char *region = "yourRegion";

void init_options(oss_request_options_t *options)
{
    options->config = oss_config_create(options->pool);
    aos_str_set(&options->config->endpoint, endpoint);
    /* Read credentials from environment variables.
       Set OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET before running this code. */
    aos_str_set(&options->config->access_key_id, getenv("OSS_ACCESS_KEY_ID"));
    aos_str_set(&options->config->access_key_secret, getenv("OSS_ACCESS_KEY_SECRET"));
    aos_str_set(&options->config->region, region);
    options->config->signature_version = 4;
    options->config->is_cname = 0;
    options->ctl = aos_http_controller_create(options->pool, 0);
}

int main(int argc, char *argv[])
{
    if (aos_http_io_initialize(NULL, 0) != AOSE_OK) {
        exit(1);
    }

    aos_pool_t *pool;
    aos_pool_create(&pool, NULL);

    oss_request_options_t *oss_client_options;
    oss_client_options = oss_request_options_create(pool);
    init_options(oss_client_options);

    aos_string_t bucket;
    aos_string_t object;
    aos_string_t file;
    aos_table_t *headers = NULL;
    aos_table_t *resp_headers = NULL;
    aos_status_t *resp_status = NULL;
    oss_resumable_clt_params_t *clt_params;

    aos_str_set(&bucket, bucket_name);
    aos_str_set(&object, object_name);
    aos_str_set(&file, local_filename);

    /* 100 KB part size, 3 threads, checkpointing enabled (default checkpoint path) */
    clt_params = oss_create_resumable_clt_params_content(pool, 1024 * 100, 3, AOS_TRUE, NULL);
    resp_status = oss_resumable_download_file(oss_client_options, &bucket, &object, &file,
                                              headers, NULL, clt_params, NULL, &resp_headers);
    if (aos_status_is_ok(resp_status)) {
        printf("download succeeded\n");
    } else {
        printf("download failed\n");
    }

    aos_pool_destroy(pool);
    aos_http_io_deinitialize();
    return 0;
}
```

## What's next

-   For the complete sample code, see the [GitHub sample](https://github.com/aliyun/aliyun-oss-c-sdk/blob/master/oss_c_sdk_sample/oss_resumable_sample.c).
    
-   For the underlying API operation, see [GetObject](/help/en/oss/developer-reference/getobject#reference-ccf-rgd-5db).

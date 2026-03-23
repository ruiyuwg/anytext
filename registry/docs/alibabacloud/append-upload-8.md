Append upload lets you add data to the end of an existing object without rewriting it, using the `AppendObject` API operation. This is well suited for workloads where data arrives sequentially over time — such as writing log entries, recording IoT sensor streams, or capturing video segments as they are generated. For workloads where parts can be written in parallel and don't need to be read mid-upload, use multipart upload instead.

## Usage notes

-   The examples in this topic use the public endpoint for the China (Hangzhou) region. To access OSS from other Alibaba Cloud services in the same region, use an internal endpoint. For details, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints).
    
-   The examples create an OSSClient instance using an OSS endpoint. To create an OSSClient instance using a custom domain name or Security Token Service (STS), see [Initialization](/help/en/oss/developer-reference/initialization-5).
    

## Permissions

By default, an Alibaba Cloud account has full permissions. RAM users and RAM roles have no permissions by default and must be granted access through [RAM Policy](/help/en/oss/ram-policy-overview/) or [Bucket Policy](/help/en/oss/user-guide/oss-bucket-policy/).

**API**

**Action**

**When required**

AppendObject

`oss:PutObject`

Always

AppendObject

`oss:PutObjectTagging`

Only when object tags are specified via `x-oss-tagging`

## How it works

Each `AppendObject` request requires a **position** parameter — the byte offset at which to start writing. The position must equal the current size of the object:

-   **New object**: Set position to `0`. OSS creates an appendable object and writes data starting at byte 0.
    
-   **Existing appendable object**: Set position to the object's current size. When the position matches the current length of the object, the content is appended to the end of the object. Retrieve the current size by calling `oss_head_object()` and reading the `x-oss-next-append-position` response header.
    

`AppendObject` returns the following errors if the position is incorrect:

-   `PositionNotEqualToLength` — the object is appendable but the position doesn't match the object's current size.
    
-   `ObjectNotAppendable` — the object exists but was created using a different upload method (such as simple upload) and cannot be appended to.
    

## Append data from memory

The following example appends an in-memory string to an object. It first calls `oss_head_object()` to get the current append position, then calls `oss_append_object_from_buffer()` to write the data.

```
#include "oss_api.h"
#include "aos_http_io.h"

/* Replace yourEndpoint with the endpoint for your bucket's region.
   Example for China (Hangzhou): https://oss-cn-hangzhou.aliyuncs.com */
const char *endpoint = "yourEndpoint";

/* Replace with your bucket name. */
const char *bucket_name = "examplebucket";

/* Replace with the full object path, excluding the bucket name.
   Example: exampledir/exampleobject.txt */
const char *object_name = "exampledir/exampleobject.txt";

const char *object_content = "More than just cloud.";

/* Replace yourRegion with the region ID for your bucket.
   Example for China (Hangzhou): cn-hangzhou */
const char *region = "yourRegion";

void init_options(oss_request_options_t *options)
{
    options->config = oss_config_create(options->pool);

    /* Initialize the endpoint, credentials, region, and signature version. */
    aos_str_set(&options->config->endpoint, endpoint);

    /* Credentials are read from environment variables.
       Set OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET before running this code. */
    aos_str_set(&options->config->access_key_id, getenv("OSS_ACCESS_KEY_ID"));
    aos_str_set(&options->config->access_key_secret, getenv("OSS_ACCESS_KEY_SECRET"));
    aos_str_set(&options->config->region, region);
    options->config->signature_version = 4;

    /* Set is_cname to 0 if you are not using a custom domain name (CNAME). */
    options->config->is_cname = 0;

    /* Set network parameters such as timeout. */
    options->ctl = aos_http_controller_create(options->pool, 0);
}

int main(int argc, char *argv[])
{
    /* Initialize global resources (network, memory) at program entry. */
    if (aos_http_io_initialize(NULL, 0) != AOSE_OK) {
        exit(1);
    }

    /* Create a memory pool for this request's resources. */
    aos_pool_t *pool;
    aos_pool_create(&pool, NULL);

    /* Create and initialize the client options. */
    oss_request_options_t *oss_client_options;
    oss_client_options = oss_request_options_create(pool);
    init_options(oss_client_options);

    /* Initialize request parameters. */
    aos_string_t bucket;
    aos_string_t object;
    aos_list_t buffer;
    int64_t position = 0;
    char *next_append_position = NULL;
    aos_buf_t *content = NULL;
    aos_table_t *headers1 = NULL;
    aos_table_t *headers2 = NULL;
    aos_table_t *resp_headers = NULL;
    aos_status_t *resp_status = NULL;

    aos_str_set(&bucket, bucket_name);
    aos_str_set(&object, object_name);
    headers1 = aos_table_make(pool, 0);

    /* Get the current append position from the object's metadata.
       If the object does not exist yet, skip this step and keep position = 0. */
    resp_status = oss_head_object(oss_client_options, &bucket, &object, headers1, &resp_headers);
    if (aos_status_is_ok(resp_status)) {
        next_append_position = (char*)(apr_table_get(resp_headers, "x-oss-next-append-position"));
        position = atoi(next_append_position);
    }

    /* Append the in-memory content to the object. */
    headers2 = aos_table_make(pool, 0);
    aos_list_init(&buffer);
    content = aos_buf_pack(pool, object_content, strlen(object_content));
    aos_list_add_tail(&content->node, &buffer);
    resp_status = oss_append_object_from_buffer(oss_client_options, &bucket, &object, position, &buffer, headers2, &resp_headers);
    if (aos_status_is_ok(resp_status)) {
        printf("append object from buffer succeeded\n");
    } else {
        printf("append object from buffer failed\n");
    }

    /* Release the memory pool and global resources. */
    aos_pool_destroy(pool);
    aos_http_io_deinitialize();
    return 0;
}
```

## Append data from a local file

The following example appends the contents of a local file to an object using `oss_append_object_from_file()`. The pattern for getting the append position is the same as in the memory example.

```
#include "oss_api.h"
#include "aos_http_io.h"

/* Replace yourEndpoint with the endpoint for your bucket's region.
   Example for China (Hangzhou): https://oss-cn-hangzhou.aliyuncs.com */
const char *endpoint = "yourEndpoint";

/* Replace with your bucket name. */
const char *bucket_name = "examplebucket";

/* Replace with the full object path, excluding the bucket name.
   Example: exampledir/exampleobject.txt */
const char *object_name = "exampledir/exampleobject.txt";

/* Replace with the full path of the local file to append. */
const char *local_filename = "yourLocalFilename";

/* Replace yourRegion with the region ID for your bucket.
   Example for China (Hangzhou): cn-hangzhou */
const char *region = "yourRegion";

void init_options(oss_request_options_t *options)
{
    options->config = oss_config_create(options->pool);

    /* Initialize the endpoint, credentials, region, and signature version. */
    aos_str_set(&options->config->endpoint, endpoint);

    /* Credentials are read from environment variables.
       Set OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET before running this code. */
    aos_str_set(&options->config->access_key_id, getenv("OSS_ACCESS_KEY_ID"));
    aos_str_set(&options->config->access_key_secret, getenv("OSS_ACCESS_KEY_SECRET"));
    aos_str_set(&options->config->region, region);
    options->config->signature_version = 4;

    /* Set is_cname to 0 if you are not using a custom domain name (CNAME). */
    options->config->is_cname = 0;

    /* Set network parameters such as timeout. */
    options->ctl = aos_http_controller_create(options->pool, 0);
}

int main(int argc, char *argv[])
{
    /* Initialize global resources (network, memory) at program entry. */
    if (aos_http_io_initialize(NULL, 0) != AOSE_OK) {
        exit(1);
    }

    /* Create a memory pool for this request's resources. */
    aos_pool_t *pool;
    aos_pool_create(&pool, NULL);

    /* Create and initialize the client options. */
    oss_request_options_t *oss_client_options;
    oss_client_options = oss_request_options_create(pool);
    init_options(oss_client_options);

    /* Initialize request parameters. */
    aos_string_t bucket;
    aos_string_t object;
    aos_string_t file;
    int64_t position = 0;
    char *next_append_position = NULL;
    aos_table_t *headers1 = NULL;
    aos_table_t *headers2 = NULL;
    aos_table_t *resp_headers = NULL;
    aos_status_t *resp_status = NULL;

    aos_str_set(&bucket, bucket_name);
    aos_str_set(&object, object_name);
    aos_str_set(&file, local_filename);

    /* Get the current append position from the object's metadata.
       If the object does not exist yet, skip this step and keep position = 0. */
    resp_status = oss_head_object(oss_client_options, &bucket, &object, headers1, &resp_headers);
    if (aos_status_is_ok(resp_status)) {
        next_append_position = (char*)(apr_table_get(resp_headers, "x-oss-next-append-position"));
        position = atoi(next_append_position);
    }

    /* Append the local file's contents to the object. */
    resp_status = oss_append_object_from_file(oss_client_options, &bucket, &object, position, &file, headers2, &resp_headers);
    if (aos_status_is_ok(resp_status)) {
        printf("append object from file succeeded\n");
    } else {
        printf("append object from file failed\n");
    }

    /* Release the memory pool and global resources. */
    aos_pool_destroy(pool);
    aos_http_io_deinitialize();
    return 0;
}
```

## What's next

-   For a complete runnable sample, see [GitHub](https://github.com/aliyun/aliyun-oss-c-sdk/blob/master/oss_c_sdk_sample/oss_append_object_sample.c).
    
-   For full API details, see [AppendObject](/help/en/oss/developer-reference/appendobject#reference-fvf-xld-5db).

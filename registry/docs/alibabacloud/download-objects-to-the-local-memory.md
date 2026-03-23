Use `oss_get_object_to_buffer()` to download an OSS object directly into a memory buffer, so your program can process the content without writing it to disk.

## Prerequisites

Before you begin, make sure you have:

-   An OSS bucket with at least one object
    
-   The `oss:GetObject` RAM permission (see [Permissions](#987568303ayig) for conditional requirements)
    
-   AccessKey ID and AccessKey Secret set as environment variables `OSS_ACCESS_KEY_ID` and `OSS_ACCESS_KEY_SECRET`
    

## Permissions

By default, an Alibaba Cloud account has full permissions. RAM users or RAM roles have no permissions by default and must be granted access through [RAM Policy](/help/en/oss/ram-policy-overview/) or [Bucket policies](/help/en/oss/user-guide/oss-bucket-policy/).

**API**

**Action**

**When it's required**

GetObject

`oss:GetObject`

Always required to download an object

GetObject

`oss:GetObjectVersion`

Required when downloading a specific version using `versionId`

GetObject

`kms:Decrypt`

Required when the object's metadata includes `X-Oss-Server-Side-Encryption: KMS`

## How it works

Call `oss_get_object_to_buffer()` with the bucket name and object key. The function downloads the object content into a linked list of `aos_buf_t` buffers (`aos_list_t`) and returns an `aos_status_t` that indicates success or failure. To work with the content as a contiguous byte array, iterate the list and copy each chunk into a single allocated buffer using `memcpy`.

## Sample code

```
#include "oss_api.h"
#include "aos_http_io.h"

/* Replace yourEndpoint with the endpoint of the region where your bucket is located.
   Example: https://oss-cn-hangzhou.aliyuncs.com */
const char *endpoint = "yourEndpoint";

/* Replace examplebucket with your bucket name. */
const char *bucket_name = "examplebucket";

/* Specify the full object path, excluding the bucket name.
   Example: exampledir/exampleobject.txt */
const char *object_name = "exampledir/exampleobject.txt";

/* Replace yourRegion with the region ID where your bucket is located.
   Example: cn-hangzhou */
const char *region = "yourRegion";

void init_options(oss_request_options_t *options)
{
    options->config = oss_config_create(options->pool);

    /* Initialize config fields from char* strings. */
    aos_str_set(&options->config->endpoint, endpoint);

    /* Load credentials from environment variables.
       Set OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET before running this sample. */
    aos_str_set(&options->config->access_key_id, getenv("OSS_ACCESS_KEY_ID"));
    aos_str_set(&options->config->access_key_secret, getenv("OSS_ACCESS_KEY_SECRET"));

    aos_str_set(&options->config->region, region);
    options->config->signature_version = 4;

    /* Set to 0 to use the OSS endpoint directly (no CNAME). */
    options->config->is_cname = 0;

    options->ctl = aos_http_controller_create(options->pool, 0);
}

int main(int argc, char *argv[])
{
    /* Initialize global resources (network, memory). Call once at program startup. */
    if (aos_http_io_initialize(NULL, 0) != AOSE_OK) {
        exit(1);
    }

    /* Create a memory pool to manage all allocations for this request. */
    aos_pool_t *pool;
    aos_pool_create(&pool, NULL);

    /* Create and initialize the request options (endpoint, credentials, region). */
    oss_request_options_t *oss_client_options;
    oss_client_options = oss_request_options_create(pool);
    init_options(oss_client_options);

    /* Declare request and response variables. */
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

    /* Step 1: Download the object into the linked-list buffer. */
    resp_status = oss_get_object_to_buffer(oss_client_options, &bucket, &object,
                                 headers, params, &buffer, &resp_headers);

    if (aos_status_is_ok(resp_status)) {
        printf("get object to buffer succeeded\n");

        /* Step 2: Copy the buffer list into a single contiguous byte array.
           aos_buf_list_len() returns the total content length across all chunks. */
        len = aos_buf_list_len(&buffer);
        buf = aos_pcalloc(pool, len + 1);
        buf[len] = '\0';
        aos_list_for_each_entry(aos_buf_t, content, &buffer, node) {
            size = aos_buf_size(content);
            memcpy(buf + pos, content->pos, size);
            pos += size;
        }
        /* buf now contains the full object content as a null-terminated byte array. */
    } else {
        printf("get object to buffer failed\n");
    }

    /* Release the memory pool. This frees all memory allocated during the request. */
    aos_pool_destroy(pool);

    /* Release global resources initialized at startup. */
    aos_http_io_deinitialize();
    return 0;
}
```

**Placeholder reference**

**Placeholder**

**Description**

**Example**

`yourEndpoint`

The endpoint of the region where your bucket is located

`https://oss-cn-hangzhou.aliyuncs.com`

`yourRegion`

The region ID where your bucket is located

`cn-hangzhou`

`examplebucket`

Your bucket name

`my-bucket`

`exampledir/exampleobject.txt`

The full object path, excluding the bucket name

`logs/app.log`

> The examples in this topic use the public endpoint of the China (Hangzhou) region. To access OSS from another Alibaba Cloud service in the same region, use the internal endpoint instead. For endpoint details, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints). To create an OSSClient instance using a custom domain name or Security Token Service (STS), see [Initialization](/help/en/oss/developer-reference/initialization-5).

## What's next

-   For the complete sample, see the [GitHub example](https://github.com/aliyun/aliyun-oss-c-sdk/blob/master/oss_c_sdk_sample/oss_get_object_sample.c).
    
-   For the GetObject API reference, see [GetObject](/help/en/oss/developer-reference/getobject#reference-ccf-rgd-5db).

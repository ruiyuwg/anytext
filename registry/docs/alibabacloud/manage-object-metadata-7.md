Objects in Object Storage Service (OSS) have three components: a key, data, and object metadata. Object metadata describes the properties of an object and falls into two categories:

-   **Standard HTTP headers** — Set cache policies, content type, forced download behavior, and other HTTP-level controls.
    
-   **User-defined metadata** — Attach arbitrary key-value pairs to identify the purpose or properties of an object.
    

## Prerequisites

Before you begin, ensure that you have:

-   The OSS C SDK installed with the build environment configured
    
-   The `OSS_ACCESS_KEY_ID` and `OSS_ACCESS_KEY_SECRET` environment variables set with valid credentials
    
-   The `oss:PutObject` permission to set object metadata
    
-   The `oss:GetObject` permission to retrieve object metadata
    

For permission setup, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies).

## Usage notes

-   The examples use the public endpoint for the China (Hangzhou) region. To access OSS from other Alibaba Cloud services in the same region, use the internal endpoint instead. For details, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints).
    
-   The examples create a client using an OSS endpoint. To create a client using a custom domain name or Security Token Service (STS), see [Initialization](/help/en/oss/developer-reference/initialization-5).
    

**Warning**

When you set metadata during upload, if an object with the same name already exists in the bucket, the existing object is overwritten. To prevent this, see [Prevent objects with the same name from being overwritten](/help/en/oss/user-guide/simple-upload#6b588465e3tks).

## Set and retrieve object metadata

The following example uploads an object with standard HTTP headers and user-defined metadata, then retrieves the metadata using `oss_get_object_meta`.

You can call `oss_get_object_meta` after upload or before reading the object to retrieve the object's metadata, such as its length and type.

```
#include "oss_api.h"
#include "aos_http_io.h"

/* Replace with the endpoint for your bucket's region.
   Example for China (Hangzhou): https://oss-cn-hangzhou.aliyuncs.com */
const char *endpoint = "yourEndpoint";

/* Bucket and object path */
const char *bucket_name = "examplebucket";
const char *object_name = "exampledir/exampleobject.txt";
const char *object_content = "hello world";

/* Replace with your bucket's region ID. Example: cn-hangzhou */
const char *region = "yourRegion";

void init_options(oss_request_options_t *options)
{
    options->config = oss_config_create(options->pool);

    aos_str_set(&options->config->endpoint, endpoint);

    /* Load credentials from environment variables.
       Set OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET before running. */
    aos_str_set(&options->config->access_key_id, getenv("OSS_ACCESS_KEY_ID"));
    aos_str_set(&options->config->access_key_secret, getenv("OSS_ACCESS_KEY_SECRET"));

    /* Required for Signature V4 */
    aos_str_set(&options->config->region, region);
    options->config->signature_version = 4;

    /* Set to 0: no CNAME */
    options->config->is_cname = 0;

    options->ctl = aos_http_controller_create(options->pool, 0);
}

int main(int argc, char *argv[])
{
    /* Initialize global network and memory resources */
    if (aos_http_io_initialize(NULL, 0) != AOSE_OK) {
        exit(1);
    }

    aos_pool_t *pool;
    aos_pool_create(&pool, NULL);

    oss_request_options_t *oss_client_options;
    oss_client_options = oss_request_options_create(pool);
    init_options(oss_client_options);

    /* Initialize request parameters */
    aos_string_t bucket;
    aos_string_t object;
    aos_table_t *headers;
    aos_list_t buffer;
    aos_table_t *resp_headers = NULL;
    aos_status_t *resp_status = NULL;
    aos_buf_t *content = NULL;
    char *content_length_str = NULL;
    char *object_type = NULL;
    char *object_author = NULL;
    int64_t content_length = 0;

    aos_str_set(&bucket, bucket_name);
    aos_str_set(&object, object_name);

    /* Set metadata headers before upload */
    headers = aos_table_make(pool, 2);
    apr_table_set(headers, "Expires", "Fri, 28 Feb 2032 05:38:42 GMT");  /* Standard HTTP header */
    apr_table_set(headers, "x-oss-meta-author", "oss");                  /* User-defined metadata */

    /* Build the request body from a buffer */
    aos_list_init(&buffer);
    content = aos_buf_pack(oss_client_options->pool, object_content, strlen(object_content));
    aos_list_add_tail(&content->node, &buffer);

    /* Upload the object with metadata */
    resp_status = oss_put_object_from_buffer(oss_client_options, &bucket, &object,
                   &buffer, headers, &resp_headers);
    if (aos_status_is_ok(resp_status)) {
        printf("put object from buffer with md5 succeeded\n");
    } else {
        printf("put object from buffer with md5 failed\n");
    }

    /* Retrieve object metadata (no object body is downloaded) */
    resp_status = oss_get_object_meta(oss_client_options, &bucket, &object, &resp_headers);
    if (aos_status_is_ok(resp_status)) {
        content_length_str = (char*)apr_table_get(resp_headers, OSS_CONTENT_LENGTH);
        if (content_length_str != NULL) {
            content_length = atol(content_length_str);
        }
        object_author = (char*)apr_table_get(resp_headers, OSS_AUTHORIZATION);
        object_type = (char*)apr_table_get(resp_headers, OSS_OBJECT_TYPE);
        printf("get object meta succeeded, object author:%s, object type:%s, content_length:%ld\n",
               object_author, object_type, content_length);
    } else {
        printf("req:%s, get object meta failed\n", resp_status->req_id);
    }

    /* Release the memory pool and global resources */
    aos_pool_destroy(pool);
    aos_http_io_deinitialize();
    return 0;
}
```

## References

-   Complete sample code: [GitHub](https://github.com/aliyun/aliyun-oss-c-sdk/blob/master/oss_c_sdk_sample/oss_head_object_sample.c)
    
-   API reference: [GetObjectMeta](/help/en/oss/developer-reference/getobjectmeta#reference-sg4-k2w-wdb)

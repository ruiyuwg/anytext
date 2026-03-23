Use the OSS C SDK to upload data from a memory buffer or a local file to an OSS bucket using the `PutObject` API.

## Prerequisites

Before you begin, make sure you have:

-   An OSS bucket in the target region
    
-   The `oss:PutObject` permission on the target bucket (see [Permissions](#section-84032d5e))
    
-   The OSS C SDK installed and initialized. For setup details, see [Initialization](/help/en/oss/developer-reference/initialization-5)
    
-   The environment variables `OSS_ACCESS_KEY_ID` and `OSS_ACCESS_KEY_SECRET` set with valid access credentials
    

> The examples below use the public endpoint for China (Hangzhou). If your application runs in the same region as your bucket on another Alibaba Cloud service, use the internal endpoint instead. For a full list of regions and endpoints, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints).

## Permissions

By default, an Alibaba Cloud account has full permissions. RAM users and RAM roles have no permissions by default and must be granted access through a [RAM policy](/help/en/oss/ram-policy-overview/) or a [bucket policy](/help/en/oss/user-guide/oss-bucket-policy/).

**API**

**Action**

**Required when**

PutObject

`oss:PutObject`

Always

PutObject

`oss:PutObjectTagging`

Object tags are set via `x-oss-tagging`

PutObject

`kms:GenerateDataKey`, `kms:Decrypt`

Metadata includes `X-Oss-Server-Side-Encryption: KMS`

## Upload data from memory

Call `oss_put_object_from_buffer()` to upload an in-memory byte buffer as an OSS object.

**Function prototype**

```
aos_status_t *oss_put_object_from_buffer(
    const oss_request_options_t *options,
    const aos_string_t          *bucket,
    const aos_string_t          *object,
    aos_list_t                  *buffer,
    aos_table_t                 *headers,
    aos_table_t                **resp_headers
);
```

**Parameters**

**Parameter**

**Type**

**Description**

`options`

`oss_request_options_t *`

Client options including endpoint, credentials, and region

`bucket`

`aos_string_t *`

Bucket name

`object`

`aos_string_t *`

Full object path, not including the bucket name. Example: `exampledir/exampleobject.txt`

`buffer`

`aos_list_t *`

Linked list of `aos_buf_t` nodes containing the data to upload

`headers`

`aos_table_t *`

Additional HTTP request headers. Pass `NULL` to use defaults

`resp_headers`

`aos_table_t **`

Output parameter that receives the HTTP response headers

**Return value**

Returns an `aos_status_t *`. Check the result with `aos_status_is_ok()`. On failure, inspect the following fields:

**Field**

**Type**

**Description**

`code`

`int`

HTTP status code

`error_code`

`char *`

OSS error code string, for example `AccessDenied`

`error_msg`

`char *`

Human-readable error description

`req_id`

`char *`

Request ID for troubleshooting with Alibaba Cloud support

**Example**

```
#include "oss_api.h"
#include "aos_http_io.h"

/* Replace these placeholders with your actual values. */
const char *endpoint    = "yourEndpoint";   /* e.g., https://oss-cn-hangzhou.aliyuncs.com */
const char *bucket_name = "examplebucket";
const char *object_name = "exampledir/exampleobject.txt";
const char *object_content = "More than just cloud.";
const char *region      = "yourRegion";     /* e.g., cn-hangzhou */

void init_options(oss_request_options_t *options)
{
    options->config = oss_config_create(options->pool);
    aos_str_set(&options->config->endpoint, endpoint);
    /* Read credentials from environment variables to avoid hardcoding secrets. */
    aos_str_set(&options->config->access_key_id,     getenv("OSS_ACCESS_KEY_ID"));
    aos_str_set(&options->config->access_key_secret, getenv("OSS_ACCESS_KEY_SECRET"));
    aos_str_set(&options->config->region, region);
    options->config->signature_version = 4;
    options->config->is_cname = 0;
    options->ctl = aos_http_controller_create(options->pool, 0);
}

int main(int argc, char *argv[])
{
    /* Initialize global resources (network, memory). */
    if (aos_http_io_initialize(NULL, 0) != AOSE_OK) {
        exit(1);
    }

    aos_pool_t            *pool;
    oss_request_options_t *oss_client_options;
    aos_string_t           bucket, object;
    aos_list_t             buffer;
    aos_buf_t             *content      = NULL;
    aos_table_t           *headers      = NULL;
    aos_table_t           *resp_headers = NULL;
    aos_status_t          *resp_status  = NULL;

    aos_pool_create(&pool, NULL);
    oss_client_options = oss_request_options_create(pool);
    init_options(oss_client_options);

    aos_str_set(&bucket, bucket_name);
    aos_str_set(&object, object_name);
    aos_list_init(&buffer);
    content = aos_buf_pack(oss_client_options->pool, object_content, strlen(object_content));
    aos_list_add_tail(&content->node, &buffer);

    /* Upload the buffer content to OSS. */
    resp_status = oss_put_object_from_buffer(oss_client_options, &bucket, &object,
                                             &buffer, headers, &resp_headers);
    if (aos_status_is_ok(resp_status)) {
        printf("put object from buffer succeeded\n");
    } else {
        printf("put object from buffer failed, error_code: %s, error_msg: %s, req_id: %s\n",
               resp_status->error_code, resp_status->error_msg, resp_status->req_id);
    }

    /* Release the memory pool and global resources. */
    aos_pool_destroy(pool);
    aos_http_io_deinitialize();
    return 0;
}
```

## Upload a local file

Call `oss_put_object_from_file()` to upload a file from the local filesystem to OSS.

**Function prototype**

```
aos_status_t *oss_put_object_from_file(
    const oss_request_options_t *options,
    const aos_string_t          *bucket,
    const aos_string_t          *object,
    const aos_string_t          *filename,
    aos_table_t                 *headers,
    aos_table_t                **resp_headers
);
```

**Parameters**

**Parameter**

**Type**

**Description**

`options`

`oss_request_options_t *`

Client options including endpoint, credentials, and region

`bucket`

`aos_string_t *`

Bucket name

`object`

`aos_string_t *`

Full object path in OSS, not including the bucket name

`filename`

`aos_string_t *`

Absolute or relative path of the local file to upload

`headers`

`aos_table_t *`

Additional HTTP request headers. Pass `NULL` to use defaults

`resp_headers`

`aos_table_t **`

Output parameter that receives the HTTP response headers

**Return value**

Same structure as `oss_put_object_from_buffer()`. Check `aos_status_is_ok()` and inspect `error_code`, `error_msg`, and `req_id` on failure.

**Example**

```
#include "oss_api.h"
#include "aos_http_io.h"

const char *endpoint       = "yourEndpoint";
const char *bucket_name    = "examplebucket";
const char *object_name    = "exampledir/exampleobject.txt";
const char *local_filename = "yourLocalFilename";
const char *region         = "yourRegion";

void init_options(oss_request_options_t *options)
{
    options->config = oss_config_create(options->pool);
    aos_str_set(&options->config->endpoint, endpoint);
    aos_str_set(&options->config->access_key_id,     getenv("OSS_ACCESS_KEY_ID"));
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

    aos_pool_t            *pool;
    oss_request_options_t *oss_client_options;
    aos_string_t           bucket, object, file;
    aos_table_t           *headers      = NULL;
    aos_table_t           *resp_headers = NULL;
    aos_status_t          *resp_status  = NULL;

    aos_pool_create(&pool, NULL);
    oss_client_options = oss_request_options_create(pool);
    init_options(oss_client_options);

    aos_str_set(&bucket, bucket_name);
    aos_str_set(&object, object_name);
    aos_str_set(&file,   local_filename);

    /* Upload the local file to OSS. */
    resp_status = oss_put_object_from_file(oss_client_options, &bucket, &object,
                                           &file, headers, &resp_headers);
    if (aos_status_is_ok(resp_status)) {
        printf("put object from file succeeded\n");
    } else {
        printf("put object from file failed, error_code: %s, error_msg: %s, req_id: %s\n",
               resp_status->error_code, resp_status->error_msg, resp_status->req_id);
    }

    aos_pool_destroy(pool);
    aos_http_io_deinitialize();
    return 0;
}
```

## FAQ

### Files with Chinese character names fail to upload on Windows

### **On Linux**

On Linux, uploading files with Chinese character names works without any special handling — follow the same steps as a standard local file upload.

### **On Windows**

On Windows, the system uses the ANSI code page (CP\_ACP) by default. OSS requires filenames to be UTF-8 encoded. Convert the filename before passing it to `oss_put_object_from_file()`:

```
#include "oss_api.h"
#include "aos_http_io.h"
#include <wchar.h>

const char *endpoint           = "yourEndpoint";
const char *bucket_name        = "examplebucket";
const char *object_name        = "exampledir/exampleobject.txt";
const char *local_filename_ch  = "yourLocalFilename"; /* ANSI-encoded filename */
const char *region             = "yourRegion";

void init_options(oss_request_options_t *options)
{
    options->config = oss_config_create(options->pool);
    aos_str_set(&options->config->endpoint, endpoint);
    aos_str_set(&options->config->access_key_id,     getenv("OSS_ACCESS_KEY_ID"));
    aos_str_set(&options->config->access_key_secret, getenv("OSS_ACCESS_KEY_SECRET"));
    aos_str_set(&options->config->region, region);
    options->config->signature_version = 4;
    options->config->is_cname = 0;
    options->ctl = aos_http_controller_create(options->pool, 0);
}

/* Convert a multibyte (ANSI) string to UTF-8. Returns NULL on failure. */
char *multibyte_to_utf8(const char *ch, char *str, int size)
{
    if (!ch || !str || size <= 0)
        return NULL;

    int chlen = strlen(ch);
    int multi_byte_cnt = 0;
    for (int i = 0; i < chlen - 1; i++) {
        if ((ch[i] & 0x80) && (ch[i + 1] & 0x80)) {
            i++;
            multi_byte_cnt++;
        }
    }
    if (multi_byte_cnt == 0)
        return (char *)ch;  /* Already ASCII — no conversion needed. */

    int len = MultiByteToWideChar(CP_ACP, 0, ch, -1, NULL, 0);
    if (len <= 0)
        return NULL;
    wchar_t *wch = malloc(sizeof(wchar_t) * (len + 1));
    if (!wch)
        return NULL;
    wmemset(wch, 0, len + 1);
    MultiByteToWideChar(CP_ACP, 0, ch, -1, wch, len);

    len = WideCharToMultiByte(CP_UTF8, 0, wch, -1, NULL, 0, NULL, NULL);
    if ((len <= 0) || (size < len + 1)) {
        free(wch);
        return NULL;
    }
    memset(str, 0, len + 1);
    WideCharToMultiByte(CP_UTF8, 0, wch, -1, str, len, NULL, NULL);
    free(wch);
    return str;
}

int main(int argc, char *argv[])
{
    if (aos_http_io_initialize(NULL, 0) != AOSE_OK) {
        exit(1);
    }

    aos_pool_t            *pool;
    oss_request_options_t *oss_client_options;
    aos_string_t           bucket, object, file;
    aos_table_t           *headers      = NULL;
    aos_table_t           *resp_headers = NULL;
    aos_status_t          *resp_status  = NULL;

    aos_pool_create(&pool, NULL);
    oss_client_options = oss_request_options_create(pool);
    init_options(oss_client_options);

    aos_str_set(&bucket, bucket_name);
    aos_str_set(&object, object_name);

    /* UTF-8 encode the Chinese filename before uploading. */
    char local_filename_buf[1024];
    char *local_filename = multibyte_to_utf8(local_filename_ch, local_filename_buf, 1024);
    aos_str_set(&file, local_filename);

    resp_status = oss_put_object_from_file(oss_client_options, &bucket, &object,
                                           &file, headers, &resp_headers);
    if (aos_status_is_ok(resp_status)) {
        printf("put object from file succeeded\n");
    } else {
        printf("put object from file failed, error_code: %s, error_msg: %s, req_id: %s\n",
               resp_status->error_code, resp_status->error_msg, resp_status->req_id);
    }

    aos_pool_destroy(pool);
    aos_http_io_deinitialize();
    return 0;
}
```

## What's next

-   For the complete sample code, see the [GitHub example](https://github.com/aliyun/aliyun-oss-c-sdk/blob/master/oss_c_sdk_sample/oss_put_object_sample.c).
    
-   For the full API specification, see [PutObject](/help/en/oss/developer-reference/putobject#reference-l5p-ftw-tdb).

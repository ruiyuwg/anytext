Use the OSS C SDK to delete a single object, multiple objects by name, or all objects that share a prefix (including folder contents).

**Warning**

Deleted objects cannot be recovered. Exercise caution before running any delete operation.

## Prerequisites

Before you begin, ensure that you have:

-   The `oss:DeleteObject` permission. For details, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies)
    
-   The `OSS_ACCESS_KEY_ID` and `OSS_ACCESS_KEY_SECRET` environment variables set with valid AccessKey credentials
    
-   The OSS C SDK headers `oss_api.h` and `aos_http_io.h` available in your project
    

## Initialization

All delete examples share the same `init_options()` helper and pool lifecycle. The helper configures the endpoint, credentials, region, and signature version:

```
#include "oss_api.h"
#include "aos_http_io.h"

/* Replace with the endpoint for your bucket's region.
   Example: https://oss-cn-hangzhou.aliyuncs.com for China (Hangzhou). */
const char *endpoint = "https://oss-cn-hangzhou.aliyuncs.com";
const char *bucket_name = "examplebucket";

/* Replace with your bucket's region ID. Example: cn-hangzhou. */
const char *region = "<your-region-id>";

void init_options(oss_request_options_t *options)
{
    options->config = oss_config_create(options->pool);
    aos_str_set(&options->config->endpoint, endpoint);

    /* Load credentials from environment variables — do not hard-code keys. */
    aos_str_set(&options->config->access_key_id,
                getenv("OSS_ACCESS_KEY_ID"));
    aos_str_set(&options->config->access_key_secret,
                getenv("OSS_ACCESS_KEY_SECRET"));

    aos_str_set(&options->config->region, region);
    options->config->signature_version = 4;  /* Signature Version 4 */
    options->config->is_cname = 0;           /* 0 = standard endpoint, not CNAME */
    options->ctl = aos_http_controller_create(options->pool, 0);
}
```

Each example follows this pool lifecycle:

```
aos_http_io_initialize(NULL, 0);   /* Initialize global network and memory resources */
aos_pool_t *pool;
aos_pool_create(&pool, NULL);       /* Create a memory pool (no parent pool) */
 oss_request_options_t *oss_client_options = oss_request_options_create(pool);
init_options(oss_client_options);

/* ... perform the delete operation ... */

aos_pool_destroy(pool);            /* Release all pool-allocated memory */
aos_http_io_deinitialize();        /* Release global resources */
```

## Delete a single object

**Function signature**

```
aos_status_t *oss_delete_object(
    const oss_request_options_t *options,
    const aos_string_t          *bucket,
    const aos_string_t          *object,
    aos_table_t                **resp_headers
);
```

**Parameters**

**Parameter**

**Type**

**Description**

`options`

`oss_request_options_t *`

Client options, including endpoint and credentials

`bucket`

`aos_string_t *`

Bucket name

`object`

`aos_string_t *`

Full object path, not including the bucket name

`resp_headers`

`aos_table_t **`

Output: HTTP response headers

**Returns** an `aos_status_t *`. Check success with `aos_status_is_ok(resp_status)`.

**Example**

The following example deletes `exampleobject.jpg` from `examplebucket`.

```
#include "oss_api.h"
#include "aos_http_io.h"

const char *endpoint    = "https://oss-cn-hangzhou.aliyuncs.com";
const char *bucket_name = "examplebucket";
const char *object_name = "exampleobject.jpg";
const char *region      = "<your-region-id>";

/* init_options() — see Initialization section above */

int main(int argc, char *argv[])
{
    if (aos_http_io_initialize(NULL, 0) != AOSE_OK) { exit(1); }

    aos_pool_t *pool;
    aos_pool_create(&pool, NULL);
    oss_request_options_t *oss_client_options = oss_request_options_create(pool);
    init_options(oss_client_options);

    aos_string_t bucket, object;
    aos_table_t *resp_headers = NULL;
    aos_status_t *resp_status = NULL;

    aos_str_set(&bucket, bucket_name);
    aos_str_set(&object, object_name);

    resp_status = oss_delete_object(oss_client_options, &bucket, &object,
                                    &resp_headers);
    if (aos_status_is_ok(resp_status)) {
        printf("delete object succeeded\n");
    } else {
        /* Print error details for troubleshooting. */
        printf("delete object failed: code=%d, error_code=%s, error_msg=%s, "
               "req_id=%s\n",
               resp_status->code,
               resp_status->error_code,
               resp_status->error_msg,
               resp_status->req_id);
    }

    aos_pool_destroy(pool);
    aos_http_io_deinitialize();
    return 0;
}
```

## Delete multiple objects by name

A single batch request can delete up to 1,000 objects. To automate deletion over time, configure [lifecycle rules](/help/en/oss/user-guide/lifecycle-rules-based-on-the-last-modified-time#concept-y2g-szy-5db) instead.

### Delete multiple objects by name

**Function signature**

```
aos_status_t *oss_delete_objects(
    const oss_request_options_t *options,
    const aos_string_t          *bucket,
    aos_list_t                  *object_list,
    int                          is_quiet,
    aos_table_t                **resp_headers,
    aos_list_t                  *deleted_object_list
);
```

**Parameters**

**Parameter**

**Type**

**Description**

`options`

`oss_request_options_t *`

Client options, including endpoint and credentials

`bucket`

`aos_string_t *`

Bucket name

`object_list`

`aos_list_t *`

List of `oss_object_key_t` entries to delete

`is_quiet`

`int`

Response mode: `1` = Quiet (returns only failures), `0` = Verbose (returns all results)

`resp_headers`

`aos_table_t **`

Output: HTTP response headers

`deleted_object_list`

`aos_list_t *`

Output: list of deleted objects (populated in Verbose mode)

**Returns** an `aos_status_t *`. Check success with `aos_status_is_ok(resp_status)`.

**Example**

The following example deletes two objects by name using Quiet mode, which returns only failures.

```
#include "oss_api.h"
#include "aos_http_io.h"

const char *endpoint     = "https://oss-cn-hangzhou.aliyuncs.com";
const char *bucket_name  = "examplebucket";
const char *object_name1 = "exampleobject1.jpg";
const char *object_name2 = "testobject2.png";
const char *region       = "<your-region-id>";

/* init_options() — see Initialization section above */

int main(int argc, char *argv[])
{
    if (aos_http_io_initialize(NULL, 0) != AOSE_OK) { exit(1); }

    aos_pool_t *pool;
    aos_pool_create(&pool, NULL);
    oss_request_options_t *oss_client_options = oss_request_options_create(pool);
    init_options(oss_client_options);

    aos_string_t bucket;
    aos_str_set(&bucket, bucket_name);

    /* Build the object list. */
    aos_list_t object_list;
    aos_list_t deleted_object_list;
    aos_list_init(&object_list);
    aos_list_init(&deleted_object_list);

    oss_object_key_t *entry1 = oss_create_oss_object_key(pool);
    aos_str_set(&entry1->key, object_name1);
    aos_list_add_tail(&entry1->node, &object_list);

    oss_object_key_t *entry2 = oss_create_oss_object_key(pool);
    aos_str_set(&entry2->key, object_name2);
    aos_list_add_tail(&entry2->node, &object_list);

    /* is_quiet = 1: Quiet mode — the response lists only failed deletions. */
    int is_quiet = 1;
    aos_table_t  *resp_headers = NULL;
    aos_status_t *resp_status  = NULL;

    resp_status = oss_delete_objects(oss_client_options, &bucket, &object_list,
                                     is_quiet, &resp_headers,
                                     &deleted_object_list);
    if (aos_status_is_ok(resp_status)) {
        printf("delete objects succeeded\n");
    } else {
        printf("delete objects failed: code=%d, error_code=%s, error_msg=%s, "
               "req_id=%s\n",
               resp_status->code,
               resp_status->error_code,
               resp_status->error_msg,
               resp_status->req_id);
    }

    aos_pool_destroy(pool);
    aos_http_io_deinitialize();
    return 0;
}
```

### Delete objects by prefix

Use this approach to delete all objects that share a prefix — for example, to clear a folder and all of its contents.

**Warning**

If `object_prefix` is an empty string or `NULL`, all objects in the bucket are deleted. Double-check the prefix before running this operation.

**Function signature**

```
aos_status_t *oss_delete_objects_by_prefix(
    const oss_request_options_t *options,
    const aos_string_t          *bucket,
    const aos_string_t          *prefix
);
```

**Parameters**

**Parameter**

**Type**

**Description**

`options`

`oss_request_options_t *`

Client options, including endpoint and credentials

`bucket`

`aos_string_t *`

Bucket name

`prefix`

`aos_string_t *`

Prefix to match. See the prefix behavior table below.

**Prefix behavior**

**Prefix value**

**Objects deleted**

`src`

All objects whose keys start with `src`, including `src/` itself and everything inside it

`src/`

All objects inside the `src/` folder, plus the `src/` placeholder object

`""` or `NULL`

**All objects in the bucket** — use with extreme caution

**Returns** an `aos_status_t *`. Check success with `aos_status_is_ok(resp_status)`.

**Example**

The following example deletes all objects with the prefix `src` (including the `src/` folder and all files in it).

```
#include "oss_api.h"
#include "aos_http_io.h"

const char *endpoint       = "https://oss-cn-hangzhou.aliyuncs.com";
const char *bucket_name    = "examplebucket";
const char *object_prefix  = "src";   /* Deletes all non-folder files with the prefix src, the src folder, and all files in the src folder */
/* const char *object_prefix = "src/"; */ /* To delete only the src/ folder and all files in it, use this prefix instead */
const char *region         = "<your-region-id>";

/* init_options() — see Initialization section above */

int main(int argc, char *argv[])
{
    if (aos_http_io_initialize(NULL, 0) != AOSE_OK) { exit(1); }

    aos_pool_t *pool;
    aos_pool_create(&pool, NULL);
    oss_request_options_t *oss_client_options = oss_request_options_create(pool);
    init_options(oss_client_options);

    aos_string_t bucket, prefix;
    aos_status_t *resp_status = NULL;

    aos_str_set(&bucket, bucket_name);
    aos_str_set(&prefix, object_prefix);

    resp_status = oss_delete_objects_by_prefix(oss_client_options, &bucket,
                                               &prefix);
    if (aos_status_is_ok(resp_status)) {
        printf("delete objects by prefix succeeded\n");
    } else {
        printf("delete objects by prefix failed: code=%d, error_code=%s, "
               "error_msg=%s, req_id=%s\n",
               resp_status->code,
               resp_status->error_code,
               resp_status->error_msg,
               resp_status->req_id);
    }

    aos_pool_destroy(pool);
    aos_http_io_deinitialize();
    return 0;
}
```

## Usage notes

-   The examples use the public endpoint for the China (Hangzhou) region (`https://oss-cn-hangzhou.aliyuncs.com`). Replace it with the endpoint for your bucket's region. For a full list, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints).
    
-   To create an OSSClient instance using a custom domain name or Security Token Service (STS), see [Initialization](/help/en/oss/developer-reference/initialization-5).
    
-   Always call `aos_pool_destroy(pool)` and `aos_http_io_deinitialize()` to avoid memory leaks.
    
-   When a delete fails, log `resp_status->error_code`, `resp_status->error_msg`, and `resp_status->req_id`. The request ID is required when contacting support.
    

## What's next

-   Complete sample code for all delete scenarios: [GitHub — oss\_delete\_object\_sample.c](https://github.com/aliyun/aliyun-oss-c-sdk/blob/master/oss_c_sdk_sample/oss_delete_object_sample.c)
    
-   API reference for single-object deletion: [DeleteObject](/help/en/oss/developer-reference/deleteobject)
    
-   API reference for batch deletion: [DeleteMultipleObjects](/help/en/oss/developer-reference/deletemultipleobjects)

Use the OSS SDK for C to download an object from a bucket and save it to a local file.

## Prerequisites

Before you begin, ensure that you have:

-   An OSS bucket that contains the object you want to download
    
-   The `oss:GetObject` permission on the object (and `kms:Decrypt` if the object uses KMS server-side encryption)
    
-   The `OSS_ACCESS_KEY_ID` and `OSS_ACCESS_KEY_SECRET` environment variables set to your Alibaba Cloud access key ID and access key secret
    

## Usage notes

-   The examples in this topic use the public endpoint for the China (Hangzhou) region. If your application runs inside an Alibaba Cloud service in the same region as your bucket, use an internal endpoint instead to reduce latency and data transfer costs. For a full list of endpoints, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints).
    
-   The examples create an `OSSClient` instance using an OSS endpoint. To initialize `OSSClient` with a custom domain name or Security Token Service (STS), see [Initialization](/help/en/oss/developer-reference/initialization-5).
    

## Permissions

By default, an Alibaba Cloud account has full permissions. RAM users and RAM roles have no permissions by default. To grant access, use [RAM Policy](/help/en/oss/ram-policy-overview/) or [Bucket policies](/help/en/oss/user-guide/oss-bucket-policy/).

**API**

**Action**

**Required when**

GetObject

`oss:GetObject`

Always required to download an object

GetObject

`oss:GetObjectVersion`

The request specifies `versionId`

GetObject

`kms:Decrypt`

The object metadata contains `X-Oss-Server-Side-Encryption: KMS`

## Download an object to a local file

`oss_get_object_to_file()` downloads an object from OSS and writes it to a local file path. It returns an `aos_status_t` pointer that indicates whether the download succeeded. If a file at the specified path already exists, the download overwrites it; otherwise, the function creates a new file.

**Function signature**

```
aos_status_t *oss_get_object_to_file(
    oss_request_options_t *options,
    const aos_string_t    *bucket,
    const aos_string_t    *object,
    aos_table_t           *headers,
    aos_table_t           *params,
    aos_string_t          *filename,
    aos_table_t           **resp_headers
);
```

**Parameters**

**Parameter**

**Type**

**Description**

`options`

`oss_request_options_t *`

Client configuration, including endpoint, credentials, and network settings

`bucket`

`const aos_string_t *`

Name of the bucket that contains the object

`object`

`const aos_string_t *`

Full path of the object within the bucket, for example, `exampledir/exampleobject.txt`

`headers`

`aos_table_t *`

Additional request headers. Pass `NULL` if not needed.

`params`

`aos_table_t *`

Additional query parameters. Pass `NULL` or an empty table if not needed.

`filename`

`aos_string_t *`

Local file path where the downloaded content is saved

`resp_headers`

`aos_table_t **`

Output parameter that receives the HTTP response headers

**Return value**: An `aos_status_t *` where `aos_status_is_ok(resp_status)` returns true on success.

**Example**

```
#include "oss_api.h"
#include "aos_http_io.h"

/* Replace the following placeholders with your actual values. */
const char *endpoint    = "yourEndpoint";     /* e.g., https://oss-cn-hangzhou.aliyuncs.com */
const char *bucket_name = "examplebucket";
const char *object_name = "exampledir/exampleobject.txt";
const char *local_filename = "yourLocalFilename";
const char *region      = "yourRegion";       /* e.g., cn-hangzhou */

void init_options(oss_request_options_t *options)
{
    options->config = oss_config_create(options->pool);

    /* Initialize the endpoint, credentials, region, and signature version. */
    aos_str_set(&options->config->endpoint, endpoint);
    aos_str_set(&options->config->access_key_id,     getenv("OSS_ACCESS_KEY_ID"));
    aos_str_set(&options->config->access_key_secret, getenv("OSS_ACCESS_KEY_SECRET"));
    aos_str_set(&options->config->region, region);
    options->config->signature_version = 4;

    /* Set is_cname to 0 to use the standard OSS endpoint (not a custom domain). */
    options->config->is_cname = 0;

    /* Configure network settings such as timeout. */
    options->ctl = aos_http_controller_create(options->pool, 0);
}

int main(int argc, char *argv[])
{
    /* Initialize global resources (network, memory). Must be called once before any SDK operation. */
    if (aos_http_io_initialize(NULL, 0) != AOSE_OK) {
        exit(1);
    }

    /* Create a memory pool to manage all allocations for this request. */
    aos_pool_t *pool;
    aos_pool_create(&pool, NULL);

    /* Create and initialize the client options. */
    oss_request_options_t *oss_client_options;
    oss_client_options = oss_request_options_create(pool);
    init_options(oss_client_options);

    /* Set up the bucket, object, and local file path. */
    aos_string_t bucket;
    aos_string_t object;
    aos_string_t file;
    aos_table_t *params;
    aos_table_t *headers      = NULL;
    aos_table_t *resp_headers = NULL;
    aos_status_t *resp_status = NULL;

    aos_str_set(&bucket, bucket_name);
    aos_str_set(&object, object_name);
    aos_str_set(&file,   local_filename);
    params = aos_table_make(pool, 0);

    /* Download the object to the local file.
       If the file already exists, it is overwritten. Otherwise, a new file is created. */
    resp_status = oss_get_object_to_file(
        oss_client_options, &bucket, &object,
        headers, params, &file, &resp_headers
    );

    if (aos_status_is_ok(resp_status)) {
        printf("Get object from file succeeded\n");
    } else {
        printf("Get object from file failed\n");
    }

    /* Release the memory pool and global resources. */
    aos_pool_destroy(pool);
    aos_http_io_deinitialize();
    return 0;
}
```

**Placeholders**

Replace the following placeholders with your actual values:

**Placeholder**

**Description**

**Example**

`yourEndpoint`

The endpoint of the region where your bucket is located

`https://oss-cn-hangzhou.aliyuncs.com`

`examplebucket`

Your bucket name

`my-bucket`

`exampledir/exampleobject.txt`

The full path of the object in the bucket

`images/photo.jpg`

`yourLocalFilename`

The local file path where the object is saved

`/tmp/photo.jpg`

`yourRegion`

The region ID of your bucket

`cn-hangzhou`

## What's next

-   For the complete sample code, see [oss\_get\_object\_sample.c](https://github.com/aliyun/aliyun-oss-c-sdk/blob/master/oss_c_sdk_sample/oss_get_object_sample.c) on GitHub.
    
-   For the API reference of the underlying GetObject operation, see [GetObject](/help/en/oss/developer-reference/getobject#reference-ccf-rgd-5db).

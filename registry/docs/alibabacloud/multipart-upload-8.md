Multipart upload lets you split a large object into parts and upload them independently. After all parts are uploaded, call `CompleteMultipartUpload` to assemble them into a complete object, which enables resumable uploads.

## Prerequisites

Before you begin, make sure you have:

-   An OSS bucket
    
-   The `oss:PutObject` permission. For details, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies)
    

## Usage notes

-   Examples in this topic use the public endpoint for the China (Hangzhou) region. To access OSS from another Alibaba Cloud service in the same region, use an internal endpoint instead. For more information, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints).
    
-   Examples create an OSSClient instance using an OSS endpoint. To use a custom domain name or Security Token Service (STS), see [Initialization](/help/en/oss/developer-reference/initialization-5).
    

## How it works

Multipart upload involves three operations:

1.  **Initialize** — Call `oss_init_multipart_upload` to start an upload session. OSS returns a globally unique upload ID.
    
2.  **Upload parts** — Call `oss_upload_part_from_file` for each part. Save the part number and ETag from each response — you need both to complete the upload.
    
3.  **Complete** — Call `oss_complete_multipart_upload` with the list of part numbers and ETags to assemble the final object.
    

**Part numbering:** Part numbers identify the relative position of each part in the final object. Uploading a part with an existing part number overwrites the previous part.

**Integrity check:** OSS includes the MD5 hash of each part in the `ETag` response header. If the hash does not match what the SDK calculates, OSS returns `InvalidDigest`.

## Upload an object using multipart upload

The following example initializes a multipart upload, uploads a local file in 100 KB parts, collects the ETag from each response, and completes the upload.

```
#include "oss_api.h"
#include "aos_http_io.h"
#include <sys/stat.h>

/* Set yourEndpoint to the endpoint for the region where the bucket is located.
   For example, for the China (Hangzhou) region: https://oss-cn-hangzhou.aliyuncs.com */
const char *endpoint = "yourEndpoint";

/* Bucket name, for example: examplebucket */
const char *bucket_name = "examplebucket";

/* Full object path, excluding the bucket name. For example: exampledir/exampleobject.txt */
const char *object_name = "exampledir/exampleobject.txt";

/* Full path to the local file to upload */
const char *local_filename = "yourLocalFilename";

/* Region where the bucket is located. For example: cn-hangzhou */
const char *region = "yourRegion";

void init_options(oss_request_options_t *options)
{
    options->config = oss_config_create(options->pool);
    /* Initialize the endpoint */
    aos_str_set(&options->config->endpoint, endpoint);
    /* Load credentials from environment variables.
       Set OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET before running this code. */
    aos_str_set(&options->config->access_key_id, getenv("OSS_ACCESS_KEY_ID"));
    aos_str_set(&options->config->access_key_secret, getenv("OSS_ACCESS_KEY_SECRET"));
    aos_str_set(&options->config->region, region);
    options->config->signature_version = 4;
    /* Set to 0 to disable CNAME */
    options->config->is_cname = 0;
    /* Set network parameters such as timeout */
    options->ctl = aos_http_controller_create(options->pool, 0);
}

int64_t get_file_size(const char *file_path)
{
    int64_t filesize = -1;
    struct stat statbuff;
    if (stat(file_path, &statbuff) < 0) {
        return filesize;
    } else {
        filesize = statbuff.st_size;
    }
    return filesize;
}

int main(int argc, char *argv[])
{
    /* Initialize global resources (network, memory) */
    if (aos_http_io_initialize(NULL, 0) != AOSE_OK) {
        exit(1);
    }

    /* Create a memory pool for this request */
    aos_pool_t *pool;
    aos_pool_create(&pool, NULL);

    /* Create and initialize the client options */
    oss_request_options_t *oss_client_options;
    oss_client_options = oss_request_options_create(pool);
    init_options(oss_client_options);

    /* Initialize parameters */
    aos_string_t bucket;
    aos_string_t object;
    oss_upload_file_t *upload_file = NULL;
    aos_string_t upload_id;
    aos_table_t *headers = NULL;
    aos_table_t *complete_headers = NULL;
    aos_table_t *resp_headers = NULL;
    aos_status_t *resp_status = NULL;
    aos_str_set(&bucket, bucket_name);
    aos_str_set(&object, object_name);
    aos_str_null(&upload_id);
    headers = aos_table_make(pool, 1);
    complete_headers = aos_table_make(pool, 1);
    int part_num = 1;

    /* Step 1: Initialize the multipart upload and get an upload ID */
    resp_status = oss_init_multipart_upload(oss_client_options, &bucket, &object, &upload_id, headers, &resp_headers);
    if (aos_status_is_ok(resp_status)) {
        printf("Init multipart upload succeeded, upload_id:%.*s\n",
               upload_id.len, upload_id.data);
    } else {
        printf("Init multipart upload failed, upload_id:%.*s\n",
               upload_id.len, upload_id.data);
    }

    /* Step 2: Upload parts and collect ETags */
    int64_t file_length = 0;
    int64_t pos = 0;
    aos_list_t complete_part_list;
    oss_complete_part_content_t *complete_content = NULL;
    char *part_num_str = NULL;
    char *etag = NULL;
    aos_list_init(&complete_part_list);
    file_length = get_file_size(local_filename);

    while (pos < file_length) {
        upload_file = oss_create_upload_file(pool);
        aos_str_set(&upload_file->filename, local_filename);
        upload_file->file_pos = pos;
        pos += 100 * 1024;  /* 100 KB per part */
        upload_file->file_last = pos < file_length ? pos : file_length;

        resp_status = oss_upload_part_from_file(oss_client_options, &bucket, &object,
                                                 &upload_id, part_num++, upload_file, &resp_headers);

        /* Save the part number and ETag for the completion step */
        complete_content = oss_create_complete_part_content(pool);
        part_num_str = apr_psprintf(pool, "%d", part_num - 1);
        aos_str_set(&complete_content->part_number, part_num_str);
        etag = apr_pstrdup(pool, (char *)apr_table_get(resp_headers, "ETag"));
        aos_str_set(&complete_content->etag, etag);
        aos_list_add_tail(&complete_content->node, &complete_part_list);

        if (aos_status_is_ok(resp_status)) {
            printf("Multipart upload part from file succeeded\n");
        } else {
            printf("Multipart upload part from file failed\n");
        }
    }

    /* Step 3: Complete the multipart upload */
    resp_status = oss_complete_multipart_upload(oss_client_options, &bucket, &object,
                                                 &upload_id, &complete_part_list, complete_headers, &resp_headers);
    if (aos_status_is_ok(resp_status)) {
        printf("Complete multipart upload from file succeeded, upload_id:%.*s\n",
               upload_id.len, upload_id.data);
    } else {
        printf("Complete multipart upload from file failed\n");
    }

    /* Release the memory pool and global resources */
    aos_pool_destroy(pool);
    aos_http_io_deinitialize();
    return 0;
}
```

**Getting ETags for the completion step**

`oss_complete_multipart_upload` requires the ETag for every uploaded part. There are two ways to get them:

-   **From upload responses** (used in the example above): save the ETag from each `oss_upload_part_from_file` response as you go.
    
-   **By listing parts**: call `oss_list_upload_part` to retrieve the ETags of previously uploaded parts.
    

## Abort a multipart upload

Call `oss_abort_multipart_upload` to cancel an upload session. This deletes the upload ID and all uploaded parts.

**Note**

After a multipart upload event is aborted, the upload ID cannot be used for any other operations. The uploaded parts are also deleted.

```
#include "oss_api.h"
#include "aos_http_io.h"

/* Set yourEndpoint to the endpoint for the region where the bucket is located.
   For example, for the China (Hangzhou) region: https://oss-cn-hangzhou.aliyuncs.com */
const char *endpoint = "yourEndpoint";

/* Bucket name, for example: examplebucket */
const char *bucket_name = "examplebucket";

/* Full object path, excluding the bucket name. For example: exampledir/exampleobject.txt */
const char *object_name = "exampledir/exampleobject.txt";

/* Region where the bucket is located. For example: cn-hangzhou */
const char *region = "yourRegion";

void init_options(oss_request_options_t *options)
{
    options->config = oss_config_create(options->pool);
    aos_str_set(&options->config->endpoint, endpoint);
    /* Load credentials from environment variables.
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
    aos_string_t upload_id;
    aos_table_t *headers = NULL;
    aos_table_t *resp_headers = NULL;
    aos_status_t *resp_status = NULL;
    aos_str_set(&bucket, bucket_name);
    aos_str_set(&object, object_name);
    aos_str_null(&upload_id);

    /* Initialize a multipart upload to get an upload ID */
    resp_status = oss_init_multipart_upload(oss_client_options, &bucket, &object, &upload_id, headers, &resp_headers);
    if (aos_status_is_ok(resp_status)) {
        printf("Init multipart upload succeeded, upload_id:%.*s\n",
               upload_id.len, upload_id.data);
    } else {
        printf("Init multipart upload failed, upload_id:%.*s\n",
               upload_id.len, upload_id.data);
    }

    /* Abort the multipart upload */
    resp_status = oss_abort_multipart_upload(oss_client_options, &bucket, &object, &upload_id, &resp_headers);
    if (aos_status_is_ok(resp_status)) {
        printf("Abort multipart upload succeeded, upload_id::%.*s\n",
               upload_id.len, upload_id.data);
    } else {
        printf("Abort multipart upload failed\n");
    }

    aos_pool_destroy(pool);
    aos_http_io_deinitialize();
    return 0;
}
```

## What's next

-   For a complete code sample, see the [GitHub sample](https://github.com/aliyun/aliyun-oss-c-sdk/blob/master/oss_c_sdk_sample/oss_multipart_upload_sample.c).
    
-   For API reference, see:
    
    -   [InitiateMultipartUpload](/help/en/oss/developer-reference/initiatemultipartupload)
        
    -   [UploadPart](/help/en/oss/developer-reference/uploadpart)
        
    -   [CompleteMultipartUpload](/help/en/oss/developer-reference/completemultipartupload)
        
    -   [AbortMultipartUpload](/help/en/oss/developer-reference/abortmultipartupload#reference-txp-bvx-wdb)

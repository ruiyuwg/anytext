Use the OSS C SDK to apply image processing operations to objects stored in OSS. You can resize, rotate, and apply other transformations using inline parameters or predefined styles, and generate signed URLs for private objects.

## Prerequisites

Before you begin, ensure that you have:

-   An OSS bucket with at least one image object uploaded
    
-   The OSS C SDK installed and linked (headers: `oss_api.h`, `aos_http_io.h`)
    
-   The `OSS_ACCESS_KEY_ID` and `OSS_ACCESS_KEY_SECRET` environment variables set with valid credentials
    

## Usage notes

-   The examples use the public endpoint for the China (Hangzhou) region. To access OSS from other Alibaba Cloud services in the same region, use an internal endpoint. For more information, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints).
    
-   The examples create an OSSClient instance using an OSS endpoint. To create an OSSClient instance using a custom domain name or Security Token Service (STS), see [Initialization](/help/en/oss/developer-reference/initialization-5).
    

## Initialization pattern

All examples below share the same initialization pattern. The `init_options` function configures the client with your endpoint, credentials, region, and signature version:

```
void init_options(oss_request_options_t *options)
{
    options->config = oss_config_create(options->pool);
    aos_str_set(&options->config->endpoint, endpoint);
    /* Read access credentials from environment variables. */
    aos_str_set(&options->config->access_key_id, getenv("OSS_ACCESS_KEY_ID"));
    aos_str_set(&options->config->access_key_secret, getenv("OSS_ACCESS_KEY_SECRET"));
    aos_str_set(&options->config->region, region);
    options->config->signature_version = 4;
    options->config->is_cname = 0;
    options->ctl = aos_http_controller_create(options->pool, 0);
}
```

Set these variables before running any example:

```
const char *endpoint    = "yourEndpoint";    /* e.g., https://oss-cn-hangzhou.aliyuncs.com */
const char *bucket_name = "examplebucket";
const char *object_name = "exampledir/exampleobject.txt";
const char *region      = "yourRegion";      /* e.g., cn-hangzhou */
```

The core image processing call is `oss_get_object_to_file`. All three use cases below differ only in the value of the `OSS_PROCESS` parameter.

## Process images using image processing parameters

Set image processing parameters as the value of the `OSS_PROCESS` key in the request params table. Separate multiple parameters with forward slashes (`/`).

### Process an image with a single parameter

This example resizes the image to a fixed 100x100 px and saves the result to a local file.

```
#include "oss_api.h"
#include "aos_http_io.h"

const char *endpoint    = "yourEndpoint";
const char *bucket_name = "examplebucket";
const char *object_name = "exampledir/exampleobject.txt";
const char *region      = "yourRegion";

void init_options(oss_request_options_t *options)
{
    options->config = oss_config_create(options->pool);
    aos_str_set(&options->config->endpoint, endpoint);
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
    aos_table_t *headers    = NULL;
    aos_table_t *params     = NULL;
    aos_table_t *resp_headers = NULL;
    aos_status_t *resp_status = NULL;

    aos_str_set(&bucket, bucket_name);
    aos_str_set(&object, object_name);

    /* Resize to a fixed 100x100 px. */
    params = aos_table_make(pool, 1);
    apr_table_set(params, OSS_PROCESS, "image/resize,m_fixed,w_100,h_100");

    aos_str_set(&file, "yourLocalFileName");
    resp_status = oss_get_object_to_file(oss_client_options, &bucket, &object,
                                         headers, params, &file, &resp_headers);
    if (aos_status_is_ok(resp_status)) {
        printf("get object to file succeeded\n");
    } else {
        printf("get object to file failed\n");
    }

    aos_pool_destroy(pool);
    aos_http_io_deinitialize();
    return 0;
}
```

### Process an image with multiple parameters

Separate multiple parameters with `/`. This example resizes the image to 100x100 px and then rotates it 90 degrees.

Replace the `OSS_PROCESS` value with:

```
apr_table_set(params, OSS_PROCESS, "image/resize,m_fixed,w_100,h_100/rotate,90");
```

The rest of the code is identical to the single-parameter example. For other operations, change only the `OSS_PROCESS` value. For a full list of supported parameters, see [Image processing](/help/en/oss/user-guide/overview-17/#section-tx1-qtj-ar8).

## Process images using image styles

An image style bundles multiple processing parameters into a single named rule, so you can apply complex transformations with one call.

1.  Create an image style in the OSS console. For details, see [Image styles](/help/en/oss/user-guide/image-styles#concept-mr2-x3c-wdb).
    
2.  Apply the style by replacing the `OSS_PROCESS` value with `style/<style-name>`:
    
    ```
       apr_table_set(params, OSS_PROCESS, "style/yourCustomStyleName");
    ```
    
    Replace `yourCustomStyleName` with the name of the style you created in step 1. The rest of the code is identical to the single-parameter example.
    

## Generate a signed URL with image processing parameters

Access URLs for private objects must be signed. OSS does not support adding image processing parameters directly to a signed URL, so you must include the parameters in the signature.

The key function is `oss_gen_signed_url`. The example below generates a URL that resizes the image to 100x100 px and expires in 10 minutes.

```
#include "oss_api.h"
#include "aos_http_io.h"

const char *endpoint    = "yourEndpoint";
const char *bucket_name = "examplebucket";
const char *object_name = "exampledir/exampleobject.txt";
const char *region      = "yourRegion";

void init_options(oss_request_options_t *options)
{
    options->config = oss_config_create(options->pool);
    aos_str_set(&options->config->endpoint, endpoint);
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
    aos_table_t *params = NULL;
    aos_http_request_t *req;
    char *url_str;
    apr_time_t now;
    int64_t expire_time;

    aos_str_set(&bucket, bucket_name);
    aos_str_set(&object, object_name);

    /* Set the image processing parameter. */
    params = aos_table_make(pool, 1);
    apr_table_set(params, OSS_PROCESS, "image/resize,m_fixed,w_100,h_100");

    req = aos_http_request_create(pool);
    req->method = HTTP_GET;
    req->query_params = params;

    /* Set the expiration time (10 minutes from now). */
    now = apr_time_now();
    expire_time = now / 1000000 + 10 * 60;

    /* Generate the signed URL. */
    url_str = oss_gen_signed_url(oss_client_options, &bucket, &object,
                                  expire_time, req);
    printf("url: %s\n", url_str);

    aos_pool_destroy(pool);
    aos_http_io_deinitialize();
    return 0;
}
```

## References

-   For a complete list of image processing parameters, see [Image processing](/help/en/oss/user-guide/overview-17/#section-tx1-qtj-ar8).
    
-   For the full sample code, see the [example on GitHub](https://github.com/aliyun/aliyun-oss-c-sdk/blob/master/oss_c_sdk_sample/oss_image_sample.c).

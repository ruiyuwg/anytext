After an object is uploaded, Object Storage Service (OSS) can send a callback to an application server. To implement an upload callback, you must include the required callback parameters in your request to OSS.

## Notes

-   In this topic, the public endpoint of the China (Hangzhou) region is used. If you want to access OSS from other Alibaba Cloud services in the same region as OSS, use an internal endpoint. For more information about OSS regions and endpoints, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
    
-   In this topic, an OSSClient instance is created by using an OSS endpoint. If you want to create an OSSClient instance by using custom domain names or Security Token Service (STS), see [Initialization](/help/en/oss/developer-reference/initialization-5#concept-32133-zh).
    

## Sample code

The following code provides an example of how to implement an upload callback:

```
#include "oss_api.h"
#include "aos_http_io.h"
/* Set yourEndpoint to the endpoint of the region where the bucket is located. For example, for the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com. */
const char *endpoint = "yourEndpoint";

/* Specify the bucket name. Example: examplebucket. */
const char *bucket_name = "examplebucket";
/* Specify the full path of the object. The full path cannot include the bucket name. Example: exampledir/exampleobject.txt. */
const char *object_name = "exampledir/exampleobject.txt";
const char *object_content = "More than just cloud.";
/* Set yourRegion to the region where the bucket is located. For example, for the China (Hangzhou) region, set the region to cn-hangzhou. */
const char *region = "yourRegion";
void init_options(oss_request_options_t *options)
{
    options->config = oss_config_create(options->pool);
    /* Initialize the aos_string_t type with a char* string. */
    aos_str_set(&options->config->endpoint, endpoint);
    /* Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set. */    
    aos_str_set(&options->config->access_key_id, getenv("OSS_ACCESS_KEY_ID"));
    aos_str_set(&options->config->access_key_secret, getenv("OSS_ACCESS_KEY_SECRET"));
    // Configure the following two parameters.
    aos_str_set(&options->config->region, region);
    options->config->signature_version = 4;
    /* Specifies whether a canonical name (CNAME) is used. A value of 0 indicates that no CNAME is used. */
    options->config->is_cname = 0;
    /* Set network parameters, such as the timeout period. */
    options->ctl = aos_http_controller_create(options->pool, 0);
}
int main(int argc, char *argv[])
{
    aos_pool_t *p = NULL;
    aos_status_t *s = NULL;
    aos_string_t bucket;
    aos_string_t object;
    aos_table_t *headers = NULL;
    oss_request_options_t *options = NULL;
    aos_table_t *resp_headers = NULL;
    aos_list_t resp_body;
    aos_list_t buffer;
    aos_buf_t *content;
    char *buf = NULL;
    int64_t len = 0;
    int64_t size = 0;
    int64_t pos = 0;
    char b64_buf[1024];
    int b64_len;
    /* Use the JSON format. */
    /* (Optional) Set the Host value in the header of the callback request message, such as the Host value configured on your server. */
    char *callback =  "{"
        "\"callbackUrl\":\"http://oss-demo.aliyuncs.com:23450\","
         "\"callbackHost\":\"yourCallbackHost\","
        "\"callbackBody\":\"bucket=${bucket}&object=${object}&size=${size}&mimeType=${mimeType}\","
        "\"callbackBodyType\":\"application/x-www-form-urlencoded\""
        "}";
    /* Call the aos_http_io_initialize method at the program entry to initialize global resources such as the network and memory. */
    if (aos_http_io_initialize(NULL, 0) != AOSE_OK) {
        exit(1);
    }
    /* Initialize parameters. */
    aos_pool_create(&p, NULL);
    options = oss_request_options_create(p);
    init_options(options);
    aos_str_set(&bucket, bucket_name);
    aos_str_set(&object, object_name);
    aos_list_init(&resp_body);
    aos_list_init(&buffer);
    content = aos_buf_pack(options->pool, object_content, strlen(object_content));
    aos_list_add_tail(&content->node, &buffer);
    /* Add the callback to the header. */
    b64_len = aos_base64_encode((unsigned char*)callback, strlen(callback), b64_buf);
    b64_buf[b64_len] = '\0';
    headers = aos_table_make(p, 1);
    apr_table_set(headers, OSS_CALLBACK, b64_buf);
    /* Upload callback. */
    s = oss_do_put_object_from_buffer(options, &bucket, &object, &buffer,
        headers, NULL, NULL, &resp_headers, &resp_body);
    if (aos_status_is_ok(s)) {
        printf("put object from buffer succeeded\n");
    } else {
        printf("put object from buffer failed\n");
    }
    /* Get the buffer length. */
    len = aos_buf_list_len(&resp_body);
    buf = (char *)aos_pcalloc(p, (apr_size_t)(len + 1));
    buf[len] = '\0';
    /* Copy the buffer content to the memory. */
    aos_list_for_each_entry(aos_buf_t, content, &resp_body, node) {
        size = aos_buf_size(content);
        memcpy(buf + pos, content->pos, (size_t)size);
        pos += size;
    }
    /* Release the memory pool. This releases the memory allocated for various resources during the request. */
    aos_pool_destroy(p);
    /* Release the previously allocated global resources. */
    aos_http_io_deinitialize();
    return 0;
}
```

## References

-   For the complete sample code for upload callbacks, see [GitHub sample](https://github.com/aliyun/aliyun-oss-c-sdk/blob/master/oss_c_sdk_sample/oss_callback_sample.c?spm=a2c4g.11186623.0.0.6f642ef5bkGXza&file=oss_callback_sample.c).
    
-   For more information about the API operation for upload callbacks, see [Callback](/help/en/oss/developer-reference/callback#reference-zkm-311-hgb).

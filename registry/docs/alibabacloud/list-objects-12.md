This topic describes how to list all objects, a specified number of objects, or objects with a specified prefix in a bucket.

## Notes

-   In this topic, the public endpoint of the China (Hangzhou) region is used. If you want to access OSS from other Alibaba Cloud services in the same region as OSS, use an internal endpoint. For more information about OSS regions and endpoints, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
    
-   In this topic, an OSSClient instance is created by using an OSS endpoint. If you want to create an OSSClient instance by using custom domain names or Security Token Service (STS), see [Initialization](/help/en/oss/developer-reference/initialization-5#concept-32133-zh).
    
-   To list objects, you must have the `oss:ListObjects` permission. For more information, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).
    

## List all objects

The following code shows how to list all objects in a bucket.

```
#include "oss_api.h"
#include "aos_http_io.h"
/* Replace yourEndpoint with the endpoint of the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com. */
const char *endpoint = "yourEndpoint";
/* Replace with your bucket name, for example, examplebucket. */
const char *bucket_name = "examplebucket";
/* Replace yourRegion with the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou. */
const char *region = "yourRegion";
void init_options(oss_request_options_t *options)
{
    options->config = oss_config_create(options->pool);
    /* Initialize the aos_string_t type with a char* string. */
    aos_str_set(&options->config->endpoint, endpoint);
    /* Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set. */
    aos_str_set(&options->config->access_key_id, getenv("OSS_ACCESS_KEY_ID"));
    aos_str_set(&options->config->access_key_secret, getenv("OSS_ACCESS_KEY_SECRET"));
    // Configure the following two additional parameters.
    aos_str_set(&options->config->region, region);
    options->config->signature_version = 4;
    /* Specifies whether a CNAME is used. A value of 0 indicates that no CNAME is used. */
    options->config->is_cname = 0;
    /* Set network parameters, such as the timeout period. */
    options->ctl = aos_http_controller_create(options->pool, 0);
}
int main(int argc, char *argv[])
{
    /* Call the aos_http_io_initialize method at the program entry to initialize global resources such as the network and memory. */
    if (aos_http_io_initialize(NULL, 0) != AOSE_OK) {
        exit(1);
    }
    /* The memory pool for memory management, which is equivalent to apr_pool_t. The implementation code is in the apr library. */
    aos_pool_t *pool;
    /* Create a new memory pool. The second parameter is NULL, which indicates that the new memory pool does not inherit from another memory pool. */
    aos_pool_create(&pool, NULL);
    /* Create and initialize options. This parameter contains global configurations, such as endpoint, access_key_id, access_key_secret, is_cname, and curl. */
    oss_request_options_t *oss_client_options;
    /* Allocate memory for options in the memory pool. */
    oss_client_options = oss_request_options_create(pool);
    /* Initialize the client options oss_client_options. */
    init_options(oss_client_options);
    /* Initialize parameters. */
    aos_string_t bucket;
    aos_status_t *resp_status = NULL; 
    oss_list_object_params_t *params = NULL;
    oss_list_object_content_t *content = NULL;
    int size = 0;
    char *line = NULL;
    char *prefix = "";
    char *nextMarker = "";
    aos_str_set(&bucket, bucket_name);
    params = oss_create_list_object_params(pool);
    /* Use the max_ret parameter to set the number of objects to return. */
    /* By default, a maximum of 1,000 objects can be listed. If the number of objects to list exceeds 1,000, only the first 1,000 objects in alphabetical order are returned. The truncated value in the response is true, and the next_marker value is returned as the starting point for the next read operation. */
    params->max_ret = 100;
    aos_str_set(&params->prefix, prefix);
    aos_str_set(&params->marker, nextMarker);
    printf("Object\tSize\tLastModified\n");
    /* List all objects. */
    do {
        resp_status = oss_list_object(oss_client_options, &bucket, params, NULL);
        if (!aos_status_is_ok(resp_status))
        {
            printf("list object failed\n");
            break;
        }
        aos_list_for_each_entry(oss_list_object_content_t, content, &params->object_list, node) {
            ++size;
            line = apr_psprintf(pool, "%.*s\t%.*s\t%.*s\n", content->key.len, content->key.data, 
                content->size.len, content->size.data, 
                content->last_modified.len, content->last_modified.data);
            printf("%s", line);
        }
        nextMarker = apr_psprintf(pool, "%.*s", params->next_marker.len, params->next_marker.data);
        aos_str_set(&params->marker, nextMarker);
        aos_list_init(&params->object_list);
        aos_list_init(&params->common_prefix_list);
    } while (params->truncated == AOS_TRUE);
    printf("Total %d\n", size);
    /* Release the memory pool. This releases the memory allocated to various resources during the request. */
    aos_pool_destroy(pool);
    /* Release the previously allocated global resources. */
    aos_http_io_deinitialize();
    return 0;
}
```

## List a specified number of objects

The following code shows how to list a specified number of objects.

```
#include "oss_api.h"
#include "aos_http_io.h"
/* Replace yourEndpoint with the endpoint of the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com. */
const char *endpoint = "yourEndpoint";
/* Replace with your bucket name, for example, examplebucket. */
const char *bucket_name = "examplebucket";
/* Replace yourRegion with the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou. */
const char *region = "yourRegion";
void init_options(oss_request_options_t *options)
{
    options->config = oss_config_create(options->pool);
    /* Initialize the aos_string_t type with a char* string. */
    aos_str_set(&options->config->endpoint, endpoint);
    /* Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set. */
    aos_str_set(&options->config->access_key_id, getenv("OSS_ACCESS_KEY_ID"));
    aos_str_set(&options->config->access_key_secret, getenv("OSS_ACCESS_KEY_SECRET"));
    // Configure the following two additional parameters.
    aos_str_set(&options->config->region, region);
    options->config->signature_version = 4;
    /* Specifies whether a CNAME is used. A value of 0 indicates that no CNAME is used. */
    options->config->is_cname = 0;
    /* Set network parameters, such as the timeout period. */
    options->ctl = aos_http_controller_create(options->pool, 0);
}
int main(int argc, char *argv[])
{
    /* Call the aos_http_io_initialize method at the program entry. This method initializes global resources, such as the network and memory. */
    if (aos_http_io_initialize(NULL, 0) != AOSE_OK) {
        exit(1);
    }
    /* The memory pool for memory management, which is equivalent to apr_pool_t. The implementation code is in the apr library. */
    aos_pool_t *pool;
    /* Create a new memory pool. The second parameter is NULL, which indicates that the new memory pool does not inherit from another memory pool. */
    aos_pool_create(&pool, NULL);
    /* Create and initialize options. This parameter contains global configurations, such as endpoint, access_key_id, access_key_secret, is_cname, and curl. */
    oss_request_options_t *oss_client_options;
    /* The memory for options is allocated from the pool. When the pool is released, the memory for options is also released. You do not need to release the memory for options separately. */
    oss_client_options = oss_request_options_create(pool);
    /* Initialize the client options oss_client_options. */
    init_options(oss_client_options);
    /* Initialize parameters. */
    aos_string_t bucket;
    aos_status_t *resp_status = NULL; 
    oss_list_object_params_t *params = NULL;
    oss_list_object_content_t *content = NULL;
    int size = 0;
    char *line = NULL;
    char *prefix = "";
    char *nextMarker = "";
    aos_str_set(&bucket, bucket_name);
    params = oss_create_list_object_params(pool);
    /* Set the maximum number of objects to list. The value cannot be greater than 1,000. If you do not set this parameter, the default value is 100. */
    params->max_ret = 200;
    aos_str_set(&params->prefix, prefix);
    aos_str_set(&params->marker, nextMarker);
    printf("Object\tSize\tLastModified\n");
    /* List all objects. */
    resp_status = oss_list_object(oss_client_options, &bucket, params, NULL);
    if (!aos_status_is_ok(resp_status))
    {
        printf("list object failed\n");
    }
    aos_list_for_each_entry(oss_list_object_content_t, content, &params->object_list, node) {
        ++size;
        line = apr_psprintf(pool, "%.*s\t%.*s\t%.*s\n", content->key.len, content->key.data, 
            content->size.len, content->size.data, 
            content->last_modified.len, content->last_modified.data);
        printf("%s", line);
    }
    printf("Total %d\n", size);
    /* After a request is complete, release the memory pool. This releases the memory allocated to various resources during the request. */
    aos_pool_destroy(pool);
    /* Before the program exits, call the aos_http_io_deinitialize method to release the previously allocated global resources. */
    aos_http_io_deinitialize();
    return 0;
}
```

## List objects with a specified prefix

The following code shows how to list objects that have a specified prefix.

```
#include "oss_api.h"
#include "aos_http_io.h"
/* Replace yourEndpoint with the endpoint of the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com. */
const char *endpoint = "yourEndpoint";
/* Replace with your bucket name, for example, examplebucket. */
const char *bucket_name = "examplebucket";
/* Replace yourRegion with the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou. */
const char *region = "yourRegion";
void init_options(oss_request_options_t *options)
{
    options->config = oss_config_create(options->pool);
    /* Initialize the aos_string_t type with a char* string. */
    aos_str_set(&options->config->endpoint, endpoint);
    /* Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set. */
    aos_str_set(&options->config->access_key_id, getenv("OSS_ACCESS_KEY_ID"));
    aos_str_set(&options->config->access_key_secret, getenv("OSS_ACCESS_KEY_SECRET"));
    // Configure the following two additional parameters.
    aos_str_set(&options->config->region, region);
    options->config->signature_version = 4;
    /* Specifies whether a CNAME is used. A value of 0 indicates that no CNAME is used. */
    options->config->is_cname = 0;
    /* Set network parameters, such as the timeout period. */
    options->ctl = aos_http_controller_create(options->pool, 0);
}
int main(int argc, char *argv[])
{
    /* Call the aos_http_io_initialize method at the program entry. This method initializes global resources, such as the network and memory. */
    if (aos_http_io_initialize(NULL, 0) != AOSE_OK) {
        exit(1);
    }
    /* The memory pool for memory management, which is equivalent to apr_pool_t. The implementation code is in the apr library. */
    aos_pool_t *pool;
    /* Create a new memory pool. The second parameter is NULL, which indicates that the new memory pool does not inherit from another memory pool. */
    aos_pool_create(&pool, NULL);
    /* Create and initialize options. This parameter contains global configurations, such as endpoint, access_key_id, access_key_secret, is_cname, and curl. */
    oss_request_options_t *oss_client_options;
    /* The memory for options is allocated from the pool. When the pool is released, the memory for options is also released. You do not need to release the memory for options separately. */
    oss_client_options = oss_request_options_create(pool);
    /* Initialize the client options oss_client_options. */
    init_options(oss_client_options);
    /* Initialize parameters. */
    aos_string_t bucket;
    aos_status_t *resp_status = NULL; 
    oss_list_object_params_t *params = NULL;
    oss_list_object_content_t *content = NULL;
    int size = 0;
    char *line = NULL;
    /* List objects with the specified prefix. */
    char *prefix = "<yourObjectPrefix>";
    char *nextMarker = "";
    aos_str_set(&bucket, bucket_name);
    params = oss_create_list_object_params(pool);
    params->max_ret = 100;
    aos_str_set(&params->prefix, prefix);
    aos_str_set(&params->marker, nextMarker);
    printf("Object\tSize\tLastModified\n");
    /* List all objects. */
    do {
        resp_status = oss_list_object(oss_client_options, &bucket, params, NULL);
        if (!aos_status_is_ok(resp_status))
        {
            printf("list object failed\n");
            break;
        }
        aos_list_for_each_entry(oss_list_object_content_t, content, &params->object_list, node) {
            ++size;
            line = apr_psprintf(pool, "%.*s\t%.*s\t%.*s\n", content->key.len, content->key.data, 
                content->size.len, content->size.data, 
                content->last_modified.len, content->last_modified.data);
            printf("%s", line);
        }
        nextMarker = apr_psprintf(pool, "%.*s", params->next_marker.len, params->next_marker.data);
        aos_str_set(&params->marker, nextMarker);
        aos_list_init(&params->object_list);
        aos_list_init(&params->common_prefix_list);
    } while (params->truncated == AOS_TRUE);
    printf("Total %d\n", size);
    /* After a request is complete, release the memory pool. This releases the memory allocated to various resources during the request. */
    aos_pool_destroy(pool);
    /* Before the program exits, call the aos_http_io_deinitialize method to release the previously allocated global resources. */
    aos_http_io_deinitialize();
    return 0;
}
```

## List objects after a specified marker

The marker parameter specifies an object name. The following code shows how to list objects that appear after the specified marker.

```
#include "oss_api.h"
#include "aos_http_io.h"
/* Replace yourEndpoint with the endpoint of the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com. */
const char *endpoint = "yourEndpoint";
/* Replace with your bucket name, for example, examplebucket. */
const char *bucket_name = "examplebucket";
/* Replace yourRegion with the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou. */
const char *region = "yourRegion";
void init_options(oss_request_options_t *options)
{
    options->config = oss_config_create(options->pool);
    /* Initialize the aos_string_t type with a char* string. */
    aos_str_set(&options->config->endpoint, endpoint);
    /* Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set. */
    aos_str_set(&options->config->access_key_id, getenv("OSS_ACCESS_KEY_ID"));
    aos_str_set(&options->config->access_key_secret, getenv("OSS_ACCESS_KEY_SECRET"));
    // Configure the following two additional parameters.
    aos_str_set(&options->config->region, region);
    options->config->signature_version = 4;
    /* Specifies whether a CNAME is used. A value of 0 indicates that no CNAME is used. */
    options->config->is_cname = 0;
    /* Set network parameters, such as the timeout period. */
    options->ctl = aos_http_controller_create(options->pool, 0);
}
int main(int argc, char *argv[])
{
    /* Call the aos_http_io_initialize method at the program entry. This method initializes global resources, such as the network and memory. */
    if (aos_http_io_initialize(NULL, 0) != AOSE_OK) {
        exit(1);
    }
    /* The memory pool for memory management, which is equivalent to apr_pool_t. The implementation code is in the apr library. */
    aos_pool_t *pool;
    /* Create a new memory pool. The second parameter is NULL, which indicates that the new memory pool does not inherit from another memory pool. */
    aos_pool_create(&pool, NULL);
    /* Create and initialize options. This parameter contains global configurations, such as endpoint, access_key_id, access_key_secret, is_cname, and curl. */
    oss_request_options_t *oss_client_options;
    /* The memory for options is allocated from the pool. When the pool is released, the memory for options is also released. You do not need to release the memory for options separately. */
    oss_client_options = oss_request_options_create(pool);
    /* Initialize the client options oss_client_options. */
    init_options(oss_client_options);
    /* Initialize parameters. */
    aos_string_t bucket;
    aos_status_t *resp_status = NULL; 
    oss_list_object_params_t *params = NULL;
    oss_list_object_content_t *content = NULL;
    int size = 0;
    char *line = NULL;
    char *prefix = "";
    /* List objects that appear after the specified marker. */
    char *nextMarker = "<yourObjectMarker>";
    aos_str_set(&bucket, bucket_name);
    params = oss_create_list_object_params(pool);
    params->max_ret = 100;
    aos_str_set(&params->prefix, prefix);
    aos_str_set(&params->marker, nextMarker);
    printf("Object\tSize\tLastModified\n");
    /* List all objects. */
    do {
        resp_status = oss_list_object(oss_client_options, &bucket, params, NULL);
        if (!aos_status_is_ok(resp_status))
        {
            printf("list object failed\n");
            break;
        }
        aos_list_for_each_entry(oss_list_object_content_t, content, &params->object_list, node) {
            ++size;
            line = apr_psprintf(pool, "%.*s\t%.*s\t%.*s\n", content->key.len, content->key.data, 
                content->size.len, content->size.data, 
                content->last_modified.len, content->last_modified.data);
            printf("%s", line);
        }
        nextMarker = apr_psprintf(pool, "%.*s", params->next_marker.len, params->next_marker.data);
        aos_str_set(&params->marker, nextMarker);
        aos_list_init(&params->object_list);
        aos_list_init(&params->common_prefix_list);
    } while (params->truncated == AOS_TRUE);
    printf("Total %d\n", size);
    /* After a request is complete, release the memory pool. This releases the memory allocated to various resources during the request. */
    aos_pool_destroy(pool);
    /* Before the program exits, call the aos_http_io_deinitialize method to release the previously allocated global resources. */
    aos_http_io_deinitialize();
    return 0;
}
```

## Simulate folders

OSS does not have a native folder structure. All data is stored as objects. You can simulate a folder by creating a zero-byte object that has a name ending with a forward slash (/). The OSS console then displays this type of object as a folder.

You can specify the delimiter and prefix parameters to list objects by directory.

-   If you set prefix to a directory name in the request, the objects and subdirectories whose names contain the prefix are listed.
    
-   If you specify a prefix and set delimiter to a forward slash (/) in the request, the objects and subdirectories whose names start with the specified prefix in the directory are listed. Each subdirectory is listed as a single result element in CommonPrefixes. The objects and directories in these subdirectories are not listed.
    

For example, a bucket contains the following objects: `oss.jpg`, `fun/test.jpg`, `fun/movie/001.avi`, and `fun/movie/007.avi`. The forward slash (/) is specified as the directory delimiter. The following examples describe how to list objects in simulated directories.

### **List all objects in a bucket**

The following code shows how to list all objects in a specified bucket.

```
#include "oss_api.h"
#include "aos_http_io.h"
/* Replace yourEndpoint with the endpoint of the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com. */
const char *endpoint = "yourEndpoint";
/* Replace with your bucket name, for example, examplebucket. */
const char *bucket_name = "examplebucket";
/* Replace yourRegion with the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou. */
const char *region = "yourRegion";
void init_options(oss_request_options_t *options)
{
    options->config = oss_config_create(options->pool);
    /* Initialize the aos_string_t type with a char* string. */
    aos_str_set(&options->config->endpoint, endpoint);
    /* Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set. */
    aos_str_set(&options->config->access_key_id, getenv("OSS_ACCESS_KEY_ID"));
    aos_str_set(&options->config->access_key_secret, getenv("OSS_ACCESS_KEY_SECRET"));
    // Configure the following two additional parameters.
    aos_str_set(&options->config->region, region);
    options->config->signature_version = 4;
    /* Specifies whether a CNAME is used. A value of 0 indicates that no CNAME is used. */
    options->config->is_cname = 0;
    /* Set network parameters, such as the timeout period. */
    options->ctl = aos_http_controller_create(options->pool, 0);
}
int main(int argc, char *argv[])
{
    /* Call the aos_http_io_initialize method at the program entry to initialize global resources such as the network and memory. */
    if (aos_http_io_initialize(NULL, 0) != AOSE_OK) {
        exit(1);
    }
    /* The memory pool for memory management, which is equivalent to apr_pool_t. The implementation code is in the apr library. */
    aos_pool_t *pool;
    /* Create a new memory pool. The second parameter is NULL, which indicates that the new memory pool does not inherit from another memory pool. */
    aos_pool_create(&pool, NULL);
    /* Create and initialize options. This parameter contains global configurations, such as endpoint, access_key_id, access_key_secret, is_cname, and curl. */
    oss_request_options_t *oss_client_options;
    /* Allocate memory for options in the memory pool. */
    oss_client_options = oss_request_options_create(pool);
    /* Initialize the client options oss_client_options. */
    init_options(oss_client_options);
    /* Initialize parameters. */
    aos_string_t bucket;
    aos_status_t *resp_status = NULL; 
    oss_list_object_params_t *params = NULL;
    oss_list_object_content_t *content = NULL;
    int size = 0;
    char *line = NULL;
    char *nextMarker = "";
    aos_str_set(&bucket, bucket_name);
    params = oss_create_list_object_params(pool);
    params->max_ret = 100;
    aos_str_set(&params->marker, nextMarker);
    printf("Object\tSize\tLastModified\n");
    /* List all objects. */
    do {
        resp_status = oss_list_object(oss_client_options, &bucket, params, NULL);
        if (!aos_status_is_ok(resp_status))
        {
            printf("list object failed\n");
            break;
        }
        aos_list_for_each_entry(oss_list_object_content_t, content, &params->object_list, node) {
            ++size;
            line = apr_psprintf(pool, "%.*s\t%.*s\t%.*s\n", content->key.len, content->key.data, 
                content->size.len, content->size.data, 
                content->last_modified.len, content->last_modified.data);
            printf("%s", line);
        }
        nextMarker = apr_psprintf(pool, "%.*s", params->next_marker.len, params->next_marker.data);
        aos_str_set(&params->marker, nextMarker);
        aos_list_init(&params->object_list);
        aos_list_init(&params->common_prefix_list);
    } while (params->truncated == AOS_TRUE);
    printf("Total %d\n", size);
    /* Release the memory pool. This releases the memory allocated to various resources during the request. */
    aos_pool_destroy(pool);
    /* Release the previously allocated global resources. */
    aos_http_io_deinitialize();
    return 0;
}
```

The following result is returned:

```
Object                  Size    LastModified
exampleobject.txt       1       2023-08-15T06:53:44.000Z
fun/                    0       2023-08-15T06:22:02.000Z
fun/movie/              0       2023-08-15T06:22:29.000Z
fun/movie/001.avi       11      2023-08-15T06:22:37.000Z
fun/movie/007.avi       0       2023-08-15T06:22:37.000Z
fun/test.jpg           57210    2023-08-15T06:22:15.000Z
oss.jpg                 9       2023-08-15T06:23:20.000Z
Total 7
```

### **List all objects in a specified folder**

The following code shows how to list all objects in a specified folder.

```
#include "oss_api.h"
#include "aos_http_io.h"
/* Replace yourEndpoint with the endpoint of the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com. */
const char *endpoint = "yourEndpoint";
/* Replace with your bucket name, for example, examplebucket. */
const char *bucket_name = "examplebucket";
/* Replace yourRegion with the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou. */
const char *region = "yourRegion";
void init_options(oss_request_options_t *options)
{
    options->config = oss_config_create(options->pool);
    /* Use aos_str_set to initialize the aos_string_t type with a char* string. */
    aos_str_set(&options->config->endpoint, endpoint);
    /* Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set. */
    aos_str_set(&options->config->access_key_id, getenv("OSS_ACCESS_KEY_ID"));
    aos_str_set(&options->config->access_key_secret, getenv("OSS_ACCESS_KEY_SECRET"));
    // Configure the following two additional parameters.
    aos_str_set(&options->config->region, region);
    options->config->signature_version = 4;
    /* Specifies whether a CNAME is used. A value of 0 indicates that no CNAME is used. */
    options->config->is_cname = 0;
    /* Set network parameters, such as the timeout period. */
    options->ctl = aos_http_controller_create(options->pool, 0);
}
int main(int argc, char *argv[])
{
    /* Call the aos_http_io_initialize method at the program entry. This method initializes global resources, such as the network and memory. */
    if (aos_http_io_initialize(NULL, 0) != AOSE_OK) {
        exit(1);
    }
    /* The memory pool for memory management, which is equivalent to apr_pool_t. The implementation code is in the apr library. */
    aos_pool_t *pool;
    /* Create a new memory pool. The second parameter is NULL, which indicates that the new memory pool does not inherit from another memory pool. */
    aos_pool_create(&pool, NULL);
    /* Create and initialize options. This parameter contains global configurations, such as endpoint, access_key_id, access_key_secret, is_cname, and curl. */
    oss_request_options_t *oss_client_options;
    /* The memory for options is allocated from the pool. When the pool is released, the memory for options is also released. You do not need to release the memory for options separately. */
    oss_client_options = oss_request_options_create(pool);
    /* Initialize the client options oss_client_options. */
    init_options(oss_client_options);
    /* Initialize parameters. */
    aos_string_t bucket;
    aos_status_t *resp_status = NULL; 
    oss_list_object_params_t *params = NULL;
    oss_list_object_content_t *content = NULL;
    int size = 0;
    char *line = NULL;
    /* List objects with the specified prefix. */
    char *prefix = "fun/";
    char *nextMarker = "";
    aos_str_set(&bucket, bucket_name);
    params = oss_create_list_object_params(pool);
    params->max_ret = 100;
    aos_str_set(&params->prefix, prefix);
    aos_str_set(&params->marker, nextMarker);
    printf("Object\tSize\tLastModified\n");
    /* List all objects. */
    do {
        resp_status = oss_list_object(oss_client_options, &bucket, params, NULL);
        if (!aos_status_is_ok(resp_status))
        {
            printf("list object failed\n");
            break;
        }
        aos_list_for_each_entry(oss_list_object_content_t, content, &params->object_list, node) {
            ++size;
            line = apr_psprintf(pool, "%.*s\t%.*s\t%.*s\n", content->key.len, content->key.data, 
                content->size.len, content->size.data, 
                content->last_modified.len, content->last_modified.data);
            printf("%s", line);
        }
        nextMarker = apr_psprintf(pool, "%.*s", params->next_marker.len, params->next_marker.data);
        aos_str_set(&params->marker, nextMarker);
        aos_list_init(&params->object_list);
        aos_list_init(&params->common_prefix_list);
    } while (params->truncated == AOS_TRUE);
    printf("Total %d\n", size);
    /* After a request is complete, release the memory pool. This releases the memory allocated to various resources during the request. */
    aos_pool_destroy(pool);
    /* Before the program exits, call the aos_http_io_deinitialize method to release the previously allocated global resources. */
    aos_http_io_deinitialize();
    return 0;
}
```

The following result is returned:

```
Object             Size     LastModified
fun/                0       2023-08-15T06:22:02.000Z
fun/movie/          0       2023-08-15T06:22:29.000Z
fun/movie/001.avi   11      2023-08-15T06:22:37.000Z
fun/movie/007.avi   0       2023-08-15T06:22:37.000Z
fun/test.jpg       57210   2023-08-15T06:22:15.000Z
Total 5
```

### **List objects and subfolders in a folder**

The following code shows how to list objects and subfolders in a specified folder.

```
#include "oss_api.h"
#include "aos_http_io.h"
/* Replace yourEndpoint with the endpoint of the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com. */
const char *endpoint = "yourEndpoint";
/* Replace with your bucket name, for example, examplebucket. */
const char *bucket_name = "examplebucket";
/* Replace yourRegion with the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou. */
const char *region = "yourRegion";
void init_options(oss_request_options_t *options)
{
    options->config = oss_config_create(options->pool);
    /* Use aos_str_set to initialize the aos_string_t type with a char* string. */
    aos_str_set(&options->config->endpoint, endpoint);
    /* Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set. */
    aos_str_set(&options->config->access_key_id, getenv("OSS_ACCESS_KEY_ID"));
    aos_str_set(&options->config->access_key_secret, getenv("OSS_ACCESS_KEY_SECRET"));
    // Configure the following two additional parameters.
    aos_str_set(&options->config->region, region);
    options->config->signature_version = 4;
    /* Specifies whether a CNAME is used. A value of 0 indicates that no CNAME is used. */
    options->config->is_cname = 0;
    /* Set network parameters, such as the timeout period. */
    options->ctl = aos_http_controller_create(options->pool, 0);
}
int main(int argc, char *argv[])
{
    /* Call the aos_http_io_initialize method at the program entry. This method initializes global resources, such as the network and memory. */
    if (aos_http_io_initialize(NULL, 0) != AOSE_OK) {
        exit(1);
    }
    /* The memory pool for memory management, which is equivalent to apr_pool_t. The implementation code is in the apr library. */
    aos_pool_t *pool;
    /* Create a new memory pool. The second parameter is NULL, which indicates that the new memory pool does not inherit from another memory pool. */
    aos_pool_create(&pool, NULL);
    /* Create and initialize options. This parameter contains global configurations, such as endpoint, access_key_id, access_key_secret, is_cname, and curl. */
    oss_request_options_t *oss_client_options;
    /* The memory for options is allocated from the pool. When the pool is released, the memory for options is also released. You do not need to release the memory for options separately. */
    oss_client_options = oss_request_options_create(pool);
    /* Initialize the client options oss_client_options. */
    init_options(oss_client_options);
    /* Initialize parameters. */
    aos_string_t bucket;
    aos_status_t *resp_status = NULL; 
    oss_list_object_params_t *params = NULL;
    oss_list_object_content_t *content = NULL;
    oss_list_object_common_prefix_t *commonPrefix = NULL;
    int size = 0;
    char *line = NULL;
    /* List objects with the specified prefix. */
    char *prefix = "fun/";
    char *nextMarker = "";
    /* Set the folder separator to a forward slash (/). */
    char *delimiter = "/";
    aos_str_set(&bucket, bucket_name);
    params = oss_create_list_object_params(pool);
    params->max_ret = 100;
    aos_str_set(&params->prefix, prefix);
    aos_str_set(&params->marker, nextMarker);
    aos_str_set(&params->delimiter, delimiter);
    printf("Object\tSize\tLastModified\n");
    /*List all objects.*/
    do {
        resp_status = oss_list_object(oss_client_options, &bucket, params, NULL);
        if (!aos_status_is_ok(resp_status))
        {
            printf("list object failed\n");
            break;
        }
        aos_list_for_each_entry(oss_list_object_content_t, content, &params->object_list, node) {
            ++size;
            line = apr_psprintf(pool, "%.*s\t%.*s\t%.*s\n", content->key.len, content->key.data, 
                content->size.len, content->size.data, 
                content->last_modified.len, content->last_modified.data);
            printf("%s", line);
        }
        aos_list_for_each_entry(oss_list_object_common_prefix_t, commonPrefix, &params->common_prefix_list, node) {
            line = apr_psprintf(pool, "%.*s", commonPrefix->prefix.len, commonPrefix->prefix.data);
            printf("%s", line);
        }
        nextMarker = apr_psprintf(pool, "%.*s", params->next_marker.len, params->next_marker.data);
        aos_str_set(&params->marker, nextMarker);
        aos_list_init(&params->object_list);
        aos_list_init(&params->common_prefix_list);
    } while (params->truncated == AOS_TRUE);
    printf("Total %d\n", size);
    /* After a request is complete, release the memory pool. This releases the memory allocated to various resources during the request. */
    aos_pool_destroy(pool);
    /* Before the program exits, call the aos_http_io_deinitialize method to release the previously allocated global resources. */
    aos_http_io_deinitialize();
    return 0;
}
```

The following result is returned:

```
Object          Size    LastModified
fun/             0       2023-08-15T06:22:02.000Z
fun/test.jpg    57210   2023-08-15T06:22:15.000Z
fun/movie/      0       2023-08-15T06:22:29.000Z
Total 3
```

### **List the size of objects in a specified folder**

The following code shows how to obtain the size of objects in a specified folder.

```
#include "oss_api.h"
#include "aos_http_io.h"
/* Replace yourEndpoint with the endpoint of the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com. */
const char *endpoint = "yourEndpoint";
/* Replace with your bucket name, for example, examplebucket. */
const char *bucket_name = "examplebucket";
/* Replace yourRegion with the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou. */
const char *region = "yourRegion";

void init_options(oss_request_options_t *options)
{
    options->config = oss_config_create(options->pool);
    /* Use aos_str_set to initialize the aos_string_t type with a char* string. */
    aos_str_set(&options->config->endpoint, endpoint);
    /* Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set. */
    aos_str_set(&options->config->access_key_id, getenv("OSS_ACCESS_KEY_ID"));
    aos_str_set(&options->config->access_key_secret, getenv("OSS_ACCESS_KEY_SECRET"));
    // Configure the following two additional parameters.
    aos_str_set(&options->config->region, region);
    options->config->signature_version = 4;
    /* Specifies whether a CNAME is used. A value of 0 indicates that no CNAME is used. */
    options->config->is_cname = 0;
    /* Set network parameters, such as the timeout period. */
    options->ctl = aos_http_controller_create(options->pool, 0);
}

int64_t calculateFolderLength (aos_string_t bucketName, char* folder)
{
    int64_t size = 0;
    oss_list_object_params_t *params = NULL;
    char *nextMarker = "";
    aos_status_t *resp_status = NULL;
    aos_pool_t *p = NULL;
    oss_request_options_t *options = NULL;
    oss_list_object_content_t* content = NULL;
    aos_pool_create(&p, NULL);
    options = oss_request_options_create(p);
    params = oss_create_list_object_params(p);
    params->max_ret = 10;
    aos_str_set(&params->prefix, folder);
    aos_str_set(&params->marker, nextMarker);

    /* List all objects. */
    do {
        resp_status = oss_list_object(options, &bucketName, params, NULL);
        if (!aos_status_is_ok(resp_status))
        {
            printf("list object failed\n");
            break;
        }
        aos_list_for_each_entry(oss_list_object_content_t, content, &params->object_list, node) {
            size += content->size.len;
        }
        nextMarker = apr_psprintf(p, "%.*s", params->next_marker.len, params->next_marker.data);
        aos_str_set(&params->marker, nextMarker);
        aos_list_init(&params->object_list);
        aos_list_init(&params->common_prefix_list);
    } while (params->truncated == AOS_TRUE); 

    /* After a request is complete, release the memory pool. This releases the memory allocated to various resources during the request. */
    aos_pool_destroy(p);
    return size;
}

int main(int argc, char *argv[])
{
    /* Call the aos_http_io_initialize method at the program entry. This method initializes global resources, such as the network and memory. */
    if (aos_http_io_initialize(NULL, 0) != AOSE_OK) {
        exit(1);
    }
    /* The memory pool for memory management, which is equivalent to apr_pool_t. The implementation code is in the apr library. */
    aos_pool_t *pool;
    /* Create a new memory pool. The second parameter is NULL, which indicates that the new memory pool does not inherit from another memory pool. */
    aos_pool_create(&pool, NULL);
    /* Create and initialize options. This parameter contains global configurations, such as endpoint, access_key_id, access_key_secret, is_cname, and curl. */
    oss_request_options_t *oss_client_options;
    /* The memory for options is allocated from the pool. When the pool is released, the memory for options is also released. You do not need to release the memory for options separately. */
    oss_client_options = oss_request_options_create(pool);
    /* Initialize the client options oss_client_options. */
    init_options(oss_client_options);
    /* Initialize parameters. */
    aos_string_t bucket;
    aos_status_t *resp_status = NULL; 
    oss_list_object_params_t *params = NULL;
    oss_list_object_content_t *content = NULL;
    oss_list_object_common_prefix_t *commonPrefix = NULL;
    int size = 0;
    char *line = NULL;
    /* List objects with the specified prefix. */
    char *prefix = "fun/";
    char *nextMarker = "";
    /* Set the folder separator to a forward slash (/). */
    char *delimiter = "/";
    aos_str_set(&bucket, bucket_name);
    params = oss_create_list_object_params(pool);
    params->max_ret = 100;
    aos_str_set(&params->prefix, prefix);
    aos_str_set(&params->marker, nextMarker);
    aos_str_set(&params->delimiter, delimiter);
    printf("Object\tSize\tLastModified\n");
    /*List all objects.*/
    do {
        resp_status = oss_list_object(oss_client_options, &bucket, params, NULL);
        if (!aos_status_is_ok(resp_status))
        {
            printf("list object failed\n");
            break;
        }
        aos_list_for_each_entry(oss_list_object_content_t, content, &params->object_list, node) {
            ++size;
            line = apr_psprintf(pool, "%.*s\t%.*s\t%.*s\n", content->key.len, content->key.data, 
                content->size.len, content->size.data, 
                content->last_modified.len, content->last_modified.data);
            printf("%s", line);
        }
        aos_list_for_each_entry(oss_list_object_common_prefix_t, commonPrefix, &params->common_prefix_list, node) {
            line = apr_psprintf(pool, "%.*s", commonPrefix->prefix.len, commonPrefix->prefix.data);
            int64_t size = calculateFolderLength(bucket, commonPrefix->prefix.data);
            printf("Total %ld\n", size);
        }
        nextMarker = apr_psprintf(pool, "%.*s", params->next_marker.len, params->next_marker.data);
        aos_str_set(&params->marker, nextMarker);
        aos_list_init(&params->object_list);
        aos_list_init(&params->common_prefix_list);
    } while (params->truncated == AOS_TRUE);
    printf("Total %d\n", size);
    /* After a request is complete, release the memory pool. This releases the memory allocated to various resources during the request. */
    aos_pool_destroy(pool);
    /* Before the program exits, call the aos_http_io_deinitialize method to release the previously allocated global resources. */
    aos_http_io_deinitialize();
    return 0;
}
```

The following result is returned:

```
Object          Size    LastModified
fun/            0       2023-08-15T06:22:02.000Z
fun/test.jpg    57210   2023-08-15T06:22:15.000Z
```

## References

-   For the complete sample code that is used to list objects, see [GitHub sample](https://github.com/aliyun/aliyun-oss-c-sdk/blob/master/oss_c_sdk_sample/oss_list_object_sample.c?spm=a2c4g.11186623.0.0.6f642ef5bkGXza&file=oss_list_object_sample.c).
    
-   For more information about the API operations that are used to list objects, see [GetBucket (ListObjects)](/help/en/oss/developer-reference/listobjects#reference-iwr-xlv-tdb) and [ListObjectsV2 (GetBucketV2)](/help/en/oss/developer-reference/listobjects-v2#reference-2520881).

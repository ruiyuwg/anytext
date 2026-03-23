In addition to bucket-level access control lists (ACLs), OSS provides object-level ACLs. You can set an ACL when you upload an object or modify an existing object's ACL at any time.

## Notes

-   In this topic, the public endpoint of the China (Hangzhou) region is used. If you want to access OSS from other Alibaba Cloud services in the same region as OSS, use an internal endpoint. For more information about OSS regions and endpoints, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
    
-   In this topic, an OSSClient instance is created by using an OSS endpoint. If you want to create an OSSClient instance by using custom domain names or Security Token Service (STS), see [Initialization](/help/en/oss/developer-reference/initialization-5#concept-32133-zh).
    
-   To configure the ACL for an object, you must have the `oss:PutObjectAcl` permission. To query object ACLs, you must have the `oss:GetObjectAcl` permission. For more information, see [Attach a custom policy to a RAM user](/help/en/oss/user-guide/common-examples-of-ram-policies#section-ucu-jv0-zip).
    

## ACL types

Objects have the following four types of ACLs:

**Note**

Object ACLs have a higher priority than bucket ACLs. For example, if an object is set to public-read, anyone, including anonymous users, can read the object even if the bucket that contains the object is private.

**Permission type**

**Description**

**Permission value**

Inherit from bucket (default)

If an object does not have an ACL, it inherits the ACL of its bucket.

OSS\_ACL\_DEFAULT

Private

Only the object owner can read and write the object. Other users cannot access the object.

OSS\_ACL\_PRIVATE

Public-read

Only the object owner can write to the object. Anyone, including anonymous users, can read the object.

**Warning**

Any user on the Internet can access the object. This may cause data leaks and an increase in fees. Use this permission with caution.

OSS\_ACL\_PUBLIC\_READ

Public-read-write

Anyone, including anonymous users, can read and write the object.

**Warning**

Any user on the Internet can access this object and write data to it. This can cause data leaks and increased fees. If malicious users write illegal information to the object, your legal rights may be violated. Do not configure public-read-write permissions unless absolutely necessary.

OSS\_ACL\_PUBLIC\_READ\_WRITE

## Sample code

The following sample code shows how to set and retrieve the ACL for a specified object:

```
#include "oss_api.h"
#include "aos_http_io.h"
/* Set yourEndpoint to the Endpoint of the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the Endpoint to https://oss-cn-hangzhou.aliyuncs.com. */
const char *endpoint = "yourEndpoint";
/* Specify the bucket name. Example: examplebucket. */
const char *bucket_name = "examplebucket";
/* Specify the full path of the object. The full path cannot contain the bucket name. Example: exampledir/exampleobject.txt. */
const char *object_name = "exampledir/exampleobject.txt";
/* Set yourRegion to the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the region to cn-hangzhou. */
const char *region = "yourRegion";
void init_options(oss_request_options_t *options)
{
    options->config = oss_config_create(options->pool);
    /* Initialize an aos_string_t type with a char* string. */
    aos_str_set(&options->config->endpoint, endpoint);
    /* Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are configured. */
    aos_str_set(&options->config->access_key_id, getenv("OSS_ACCESS_KEY_ID"));
    aos_str_set(&options->config->access_key_secret, getenv("OSS_ACCESS_KEY_SECRET"));
    // The following two parameters also need to be configured.
    aos_str_set(&options->config->region, region);
    options->config->signature_version = 4;
    /* Specify whether a CNAME is used. 0 indicates that no CNAME is used. */
    options->config->is_cname = 0;
    /* Set network parameters, such as the timeout period. */
    options->ctl = aos_http_controller_create(options->pool, 0);
}
int main(int argc, char *argv[])
{
    /* Call the aos_http_io_initialize method at the program entrance to initialize global resources such as the network and memory. */
    if (aos_http_io_initialize(NULL, 0) != AOSE_OK) {
        exit(1);
    }
    /* The memory pool (pool) is used for memory management and is equivalent to apr_pool_t. The implementation code is in the apr library. */
    aos_pool_t *pool;
    /* Create a new memory pool. The second parameter is NULL, which indicates that the new memory pool does not inherit from another memory pool. */
    aos_pool_create(&pool, NULL);
    /* Create and initialize options. This parameter includes global configuration information such as endpoint, access_key_id, access_key_secret, is_cname, and curl. */
    oss_request_options_t *oss_client_options;
    /* Allocate memory to options in the memory pool. */
    oss_client_options = oss_request_options_create(pool);
    /* Initialize the client options oss_client_options. */
    init_options(oss_client_options);
    /* Initialize parameters. */
    aos_string_t bucket;
    aos_string_t object;
    aos_table_t *resp_headers = NULL; 
    aos_status_t *resp_status = NULL; 
    aos_str_set(&bucket, bucket_name);
    aos_str_set(&object, object_name);
    oss_acl_e oss_acl = OSS_ACL_PRIVATE;
    /* Set the object ACL. */
    resp_status = oss_put_object_acl(oss_client_options, &bucket, &object, oss_acl, &resp_headers);
    if (aos_status_is_ok(resp_status)) {
        printf("put object acl success!\n"); 
    } else {
        printf("put object acl failed!\n"); 
    }
    /* Get the object ACL. */
    aos_string_t oss_acl_string;
    resp_status = oss_get_object_acl(oss_client_options, &bucket, &object, &oss_acl_string, &resp_headers);
    if (aos_status_is_ok(resp_status)) {
        printf("get object acl success!\n");
        printf("acl: %s \n", oss_acl_string.data);
    } else {
        printf("get object acl failed!\n");
    }
    /* Release the memory pool. This releases the memory allocated to resources during the request. */
    aos_pool_destroy(pool);
    /* Release the allocated global resources. */
    aos_http_io_deinitialize();
    return 0;
}
```

## References

-   For more information about the API operation used to set object access permissions, see [PutObjectACL](/help/en/oss/developer-reference/putobjectacl#reference-fs3-gfw-wdb).
    
-   For more information about the API operation used to retrieve object access permissions, see [GetObjectACL](/help/en/oss/developer-reference/getobjectacl#reference-lzc-24w-wdb).

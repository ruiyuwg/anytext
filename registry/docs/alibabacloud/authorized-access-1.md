This topic describes how to use temporary access credentials from Alibaba Cloud Security Token Service (STS) or a presigned URL to temporarily access Object Storage Service (OSS) resources.

**Important**

You must specify a validity period for STS temporary access credentials and a presigned URL. If you use temporary access credentials to generate a presigned URL for operations such as uploading or downloading files, the shorter validity period takes effect. For example, if the validity period of your STS temporary access credentials is 1200 seconds and the validity period of the presigned URL is 3600 seconds, you cannot use the presigned URL to upload files after 1200 seconds because the STS temporary access credentials have expired.

## Usage notes

-   In this topic, the public endpoint of the China (Hangzhou) region is used. If you want to access OSS from other Alibaba Cloud services in the same region as OSS, use an internal endpoint. For more information about OSS regions and endpoints, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).
    
-   In this topic, an OSSClient instance is created by using an OSS endpoint. If you want to create an OSSClient instance by using custom domain names or Security Token Service (STS), see [Initialization](/help/en/oss/developer-reference/initialization-5#concept-32133-zh).
    

## Use STS to authorize temporary access

OSS supports temporary access authorization through Alibaba Cloud Security Token Service (STS). STS is a web service that provides temporary access tokens for cloud computing users. With STS, you can issue an access credential with a custom validity period and permissions to third-party applications or sub-users (users whose identities you manage). For more information about STS, see [What is STS](/help/en/ram/user-guide/what-is-sts#reference-ong-5nv-xdb).

STS provides the following benefits:

-   You do not have to expose your long-term AccessKey pair to third-party applications. Instead, you can generate an access token and provide it to the application. You can customize the access permissions and validity period of this token.
    
-   You do not need to manage permission revocation. The access token automatically becomes invalid when it expires.
    

To access OSS using temporary access credentials from STS, perform the following steps:

1.  Obtain temporary access credentials
    
    Temporary access credentials include a temporary AccessKey pair (an AccessKey ID and an AccessKey secret) and a security token (SecurityToken). The validity period of temporary access credentials is specified in seconds. The minimum value is 900. The maximum value is the maximum session duration specified for the current RAM role. For more information, see [Set the maximum session duration for a RAM role](/help/en/ram/user-guide/specify-the-maximum-session-duration-for-a-ram-role#task-2498608).
    
    You can obtain temporary access credentials in one of the following ways.
    
    -   Method 1
        
        Call the [AssumeRole](/help/en/ram/api-assumerole#reference-clc-3sv-xdb) operation to obtain temporary access credentials.
        
    -   Method 2
        
        Use STS SDKs to obtain temporary access credentials. For more information, see [STS SDKs](/help/en/ram/developer-reference/sts-sdk-overview#reference-w5t-25v-xdb).
        
2.  Use the STS credentials to create a signed request.
    
    -   Upload a file
        
        ```
        #include "oss_api.h"
        #include "aos_http_io.h"
        /* Set yourEndpoint to the endpoint of the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com. */
        const char *endpoint = "yourEndpoint";
        /* Before you run this sample code, make sure that you have set the YOUR_ACCESS_KEY_ID and YOUR_ACCESS_KEY_SECRET environment variables based on the temporary AccessKey pair obtained from STS. */  
        const char *access_key_id = getenv("OSS_ACCESS_KEY_ID");
        const char *access_key_secret = getenv("OSS_ACCESS_KEY_SECRET");
        /* The security token (SecurityToken) obtained from STS. */
        const char *sts_token = "yourStsToken";
        /* Specify the bucket name. For example, examplebucket. */
        const char *bucket_name = "examplebucket";
        /* Specify the full path of the object. The full path cannot contain the bucket name. For example, exampledir/exampleobject.txt. */
        const char *object_name = "exampledir/exampleobject.txt";
        const char *object_content = "More than just cloud.";
        
        void init_options(oss_request_options_t *options)
        {
            options->config = oss_config_create(options->pool);
            /* Initialize the aos_string_t type with a char* string. */
            aos_str_set(&options->config->endpoint, endpoint);
            aos_str_set(&options->config->access_key_id, access_key_id);
            aos_str_set(&options->config->access_key_secret, access_key_secret);
            aos_str_set(&options->config->sts_token, sts_token);
            /* Specify whether to use a CNAME to access OSS. A value of 0 indicates that a CNAME is not used. */
            options->config->is_cname = 0;
            /* Set network parameters, such as the timeout period. */
            options->ctl = aos_http_controller_create(options->pool, 0);
        }
        
        int main(int argc, char *argv[])
        {
            /* Call the aos_http_io_initialize method at the program entry to initialize global resources, such as the network and memory. */
            if (aos_http_io_initialize(NULL, 0) != AOSE_OK) {
                exit(1);
            }
        
            /* The memory pool (pool) for memory management, which is equivalent to apr_pool_t. Its implementation code is in the APR library. */
            aos_pool_t *pool;
            /* Create a new memory pool. The second parameter is NULL, which indicates that the pool does not inherit from other memory pools. */
            aos_pool_create(&pool, NULL);
            /* Create and initialize options. This parameter includes global configuration information, such as endpoint, access_key_id, access_key_secret, is_cname, and curl. */
            oss_request_options_t *oss_client_options;
            /* Allocate memory for options in the memory pool. */
            oss_client_options = oss_request_options_create(pool);
            /* Initialize the client option oss_client_options. */
            init_options(oss_client_options);
        
            /* Initialize parameters. */
            aos_string_t bucket;
            aos_string_t object;
            aos_list_t buffer;
            aos_buf_t *content = NULL;
            aos_table_t *headers = NULL;
            aos_table_t *resp_headers = NULL; 
            aos_status_t *resp_status = NULL; 
            /* Assign the data of the char* type to the bucket. */
            aos_str_set(&bucket, bucket_name);
            aos_str_set(&object, object_name);
        
            aos_list_init(&buffer);
            content = aos_buf_pack(oss_client_options->pool, object_content, strlen(object_content));
            aos_list_add_tail(&content->node, &buffer);
        
            /* Upload the file. */
            resp_status = oss_put_object_from_buffer(oss_client_options, &bucket, &object, &buffer, headers, &resp_headers);
            /* Check whether the file is uploaded. */
            if (aos_status_is_ok(resp_status)) {
                printf("put object from buffer succeeded\n");
            } else {
                printf("put object from buffer failed\n");      
            }    
        
            /* Release the memory pool. This is equivalent to releasing the memory allocated for various resources during the request. */
            aos_pool_destroy(pool);
        
            /* Release the previously allocated global resources. */
            aos_http_io_deinitialize();
        
            return 0;
        }            
        ```
        
    -   Download a file
        
        ```
        #include "oss_api.h"
        #include "aos_http_io.h"
        /* Set yourEndpoint to the endpoint of the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com. */
        const char *endpoint = "yourEndpoint";
        /* Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set. */  
        const char *access_key_id = getenv("OSS_ACCESS_KEY_ID");
        const char *access_key_secret = getenv("OSS_ACCESS_KEY_SECRET");
        /* The security token (SecurityToken) obtained from STS. */
        const char *sts_token = "yourStsToken";
        /* Specify the bucket name. For example, examplebucket. */
        const char *bucket_name = "examplebucket";
        /* Specify the full path of the object. The full path cannot contain the bucket name. For example, exampledir/exampleobject.txt. */
        const char *object_name = "exampledir/exampleobject.txt";
        void init_options(oss_request_options_t *options)
        {
            options->config = oss_config_create(options->pool);
            /* Initialize the aos_string_t type with a char* string. */
            aos_str_set(&options->config->endpoint, endpoint);
            aos_str_set(&options->config->access_key_id, access_key_id);
            aos_str_set(&options->config->access_key_secret, access_key_secret);
            aos_str_set(&options->config->sts_token, sts_token);
            /* Specify whether a CNAME is used. A value of 0 indicates that a CNAME is not used. */
            options->config->is_cname = 0;
            /* Used to set network parameters, such as the timeout period. */
            options->ctl = aos_http_controller_create(options->pool, 0);
        }
        int main(int argc, char *argv[])
        {
            /* Call the aos_http_io_initialize method at the program entry to initialize global resources, such as the network and memory. */
            if (aos_http_io_initialize(NULL, 0) != AOSE_OK) {
                exit(1);
            }
            /* The memory pool (pool) for memory management, which is equivalent to apr_pool_t. Its implementation code is in the APR library. */
            aos_pool_t *pool;
            /* Create a new memory pool. The second parameter is NULL, which indicates that the pool does not inherit from other memory pools. */
            aos_pool_create(&pool, NULL);
            /* Create and initialize options. This parameter includes global configuration information, such as endpoint, access_key_id, access_key_secret, is_cname, and curl. */
            oss_request_options_t *oss_client_options;
            /* Allocate memory for options in the memory pool. */
            oss_client_options = oss_request_options_create(pool);
            /* Initialize the client option oss_client_options. */
            init_options(oss_client_options);
            /* Initialize parameters. */
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
            /* Download the file to the local memory. */
            resp_status = oss_get_object_to_buffer(oss_client_options, &bucket, &object, 
                                         headers, params, &buffer, &resp_headers);
            if (aos_status_is_ok(resp_status)) {
                printf("get object to buffer succeeded\n");
                /* Copy the downloaded content to the buffer. */
                len = aos_buf_list_len(&buffer);
                buf = aos_pcalloc(pool, len + 1);
                buf[len] = '\0';
                aos_list_for_each_entry(aos_buf_t, content, &buffer, node) {
                size = aos_buf_size(content);
                    memcpy(buf + pos, content->pos, size);
                    pos += size;
                }
            }
            else {
                printf("get object to buffer failed\n");  
            }
            /* Release the memory pool. This is equivalent to releasing the memory allocated for various resources during the request. */
            aos_pool_destroy(pool);
            /* Release the previously allocated global resources. */
            aos_http_io_deinitialize();
            return 0;
        }
        ```
        

## Use a presigned URL to authorize temporary access

### **Usage notes**

-   When you use an OSS SDK to generate a presigned URL, the OSS SDK uses a specific algorithm based on the key information stored in the local computer to calculate a signature and adds the signature to a URL to ensure the validity and security of the URL. The operations performed to calculate and construct the URL are completed on the client. You do not need to send requests to the server over the network. This way, you do not need to grant specific permissions to the caller when you generate the presigned URL. However, to allow third-party users to perform relevant operations on the resources authorized by the presigned URL, you must make sure that the principal that calls the API operations to generate the presigned URL has the corresponding permissions.
    
    For example, if a principal wants to upload an object by using a presigned URL, you must grant the oss:PutObject permission to the principal. If a principal wants to download or preview an object by using a presigned URL, you must grant the oss:GetObject permission to the principal.
    
-   You can generate a presigned URL and provide the URL to a visitor for temporary access. When you generate a presigned URL, you can specify the validity period of the URL to limit the period of time during which the visitor can access specific data.
    
-   To generate a presigned URL that is used to access resources over HTTPS, set the protocol in the endpoint to HTTPS.
    
-   The presigned URL generated by using the following sample code may contain a plus sign (`+`). In this case, replace the plus sign (`+`) in the URL with `%2B`. Otherwise, the presigned URL may not be used to access the object as expected.
    

### **Generate a presigned URL and use it to upload a file**

1.  Generate a presigned URL for upload
    
    ```
    #include "oss_api.h"
    #include "aos_http_io.h"
    /* Set yourEndpoint to the endpoint of the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com. */
    const char *endpoint = "yourEndpoint";
    
    /* Specify the bucket name. For example, examplebucket. */
    const char *bucket_name = "examplebucket";
    /* Specify the full path of the object. The full path cannot contain the bucket name. For example, exampledir/exampleobject.txt. */
    const char *object_name = "exampledir/exampleobject.txt";
    /* Specify the full path of the local file. */
    const char *local_filename = "yourLocalFilename";
    void init_options(oss_request_options_t *options)
    {
        options->config = oss_config_create(options->pool);
        /* Initialize the aos_string_t type with a char* string. */
        aos_str_set(&options->config->endpoint, endpoint);
        /* Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set. */
        aos_str_set(&options->config->access_key_id, getenv("OSS_ACCESS_KEY_ID"));
        aos_str_set(&options->config->access_key_secret, getenv("OSS_ACCESS_KEY_SECRET"));
        /* Specify whether to use a CNAME to access OSS. A value of 0 indicates that a CNAME is not used. */
        options->config->is_cname = 0;
        /* Set network parameters, such as the timeout period. */
        options->ctl = aos_http_controller_create(options->pool, 0);
    }
    int main(int argc, char *argv[])
    {
        /* Call the aos_http_io_initialize method at the program entry to initialize global resources, such as the network and memory. */
        if (aos_http_io_initialize(NULL, 0) != AOSE_OK) {
            exit(1);
        }
        /* The memory pool (pool) for memory management, which is equivalent to apr_pool_t. Its implementation code is in the APR library. */
        aos_pool_t *pool;
        /* Create a new memory pool. The second parameter is NULL, which indicates that the pool does not inherit from other memory pools. */
        aos_pool_create(&pool, NULL);
        /* Create and initialize options. This parameter includes global configuration information, such as endpoint, access_key_id, access_key_secret, is_cname, and curl. */
        oss_request_options_t *oss_client_options;
        /* Allocate memory for options in the memory pool. */
        oss_client_options = oss_request_options_create(pool);
        /* Initialize the client option oss_client_options. */
        init_options(oss_client_options);
        /* Initialize parameters. */
        aos_string_t bucket;
        aos_string_t object;
        aos_string_t file;    
        aos_http_request_t *req;
        apr_time_t now;
        char *url_str;
        aos_string_t url;
        int64_t expire_time; 
        int one_hour = 3600;
        aos_str_set(&bucket, bucket_name);
        aos_str_set(&object, object_name);
        aos_str_set(&file, local_filename);
        expire_time = now / 1000000 + one_hour;    
        req = aos_http_request_create(pool);
        req->method = HTTP_PUT;
        now = apr_time_now(); 
        /* Unit: microseconds. */
        expire_time = now / 1000000 + one_hour;
        /* Generate a presigned URL. */
        url_str = oss_gen_signed_url(oss_client_options, &bucket, &object, expire_time, req);
        aos_str_set(&url, url_str);
        printf("Temporary upload URL: %s\n", url_str);    
        /* Release the memory pool. This is equivalent to releasing the memory allocated for various resources during the request. */
        aos_pool_destroy(pool);
        /* Release the previously allocated global resources. */
        aos_http_io_deinitialize();
        return 0;
    }
    ```
    
2.  Use the presigned URL to upload a file
    
    You can refer to the sample code for the Android SDK to upload a file using a presigned URL. For more information, see [Authorize access (Android SDK)](/help/en/oss/developer-reference/authorize-access#section-fhz-qki-j3e).
    

### **Generate a presigned URL and use it to download a file**

1.  Generate a presigned URL for download
    
    ```
    #include "oss_api.h"
    #include "aos_http_io.h"
    /* Set yourEndpoint to the endpoint of the region where the bucket is located. For example, if the bucket is in the China (Hangzhou) region, set the endpoint to https://oss-cn-hangzhou.aliyuncs.com. */
    const char *endpoint = "yourEndpoint";
    /* Specify the bucket name. For example, examplebucket. */
    const char *bucket_name = "examplebucket";
    /* Specify the full path of the object. The full path cannot contain the bucket name. For example, exampledir/exampleobject.txt. */
    const char *object_name = "exampledir/exampleobject.txt";
    /* Specify the full path of the local file. */
    const char *local_filename = "yourLocalFilename";
    
    void init_options(oss_request_options_t *options)
    {
        options->config = oss_config_create(options->pool);
        /* Initialize the aos_string_t type with a char* string. */
        aos_str_set(&options->config->endpoint, endpoint);
        /* Obtain access credentials from environment variables. Before you run this sample code, make sure that the OSS_ACCESS_KEY_ID and OSS_ACCESS_KEY_SECRET environment variables are set. */
        aos_str_set(&options->config->access_key_id, getenv("OSS_ACCESS_KEY_ID"));
        aos_str_set(&options->config->access_key_secret, getenv("OSS_ACCESS_KEY_SECRET"));
        /* Specify whether to use a CNAME to access OSS. A value of 0 indicates that a CNAME is not used. */
        options->config->is_cname = 0;
        /* Set network parameters, such as the timeout period. */
        options->ctl = aos_http_controller_create(options->pool, 0);
    }
    int main(int argc, char *argv[])
    {
        /* Call the aos_http_io_initialize method at the program entry to initialize global resources, such as the network and memory. */
        if (aos_http_io_initialize(NULL, 0) != AOSE_OK) {
            exit(1);
        }
        /* The memory pool (pool) for memory management, which is equivalent to apr_pool_t. Its implementation code is in the APR library. */
        aos_pool_t *pool;
        /* Create a new memory pool. The second parameter is NULL, which indicates that the pool does not inherit from other memory pools. */
        aos_pool_create(&pool, NULL);
        /* Create and initialize options. This parameter includes global configuration information, such as endpoint, access_key_id, access_key_secret, is_cname, and curl. */
        oss_request_options_t *oss_client_options;
        /* Allocate memory for options in the memory pool. */
        oss_client_options = oss_request_options_create(pool);
        /* Initialize the client option oss_client_options. */
        init_options(oss_client_options);
        /* Initialize parameters. */
        aos_string_t bucket;
        aos_string_t object;
        aos_string_t file;    
        aos_http_request_t *req;
        apr_time_t now;
        char *url_str;
        aos_string_t url;
        int64_t expire_time; 
        int one_hour = 3600;
        aos_str_set(&bucket, bucket_name);
        aos_str_set(&object, object_name);
        aos_str_set(&file, local_filename);
        expire_time = now / 1000000 + one_hour;    
        req = aos_http_request_create(pool);
        req->method = HTTP_GET;
        now = apr_time_now();  
        /* Unit: microseconds. */
        expire_time = now / 1000000 + one_hour;
        /* Generate a presigned URL. */
        url_str = oss_gen_signed_url(oss_client_options, &bucket, &object, expire_time, req);
        aos_str_set(&url, url_str);
        printf("Temporary download URL: %s\n", url_str);     
        /* Release the memory pool. This is equivalent to releasing the memory allocated for various resources during the request. */
        aos_pool_destroy(pool);
        /* Release the previously allocated global resources. */
        aos_http_io_deinitialize();
        return 0;
    }
    ```
    
2.  Use the presigned URL to download a file
    
    You can refer to the sample code for the Android SDK to download a file using a presigned URL. For more information, see [Authorize access (Android SDK)](/help/en/oss/developer-reference/authorize-access#section-fhz-qki-j3e).

This topic is written based on Object Storage Service (OSS) SDK for C 3.10.0.

## Compatibility

Version compatibility of OSS SDK for C:

-   For OSS SDK for C V3.X.X: compatible.
    
-   For OSS SDK for C V2.X.X:
    
    -   Compatible with Windows.
        
    -   Compatible with Linux API operations but incompatible with the following linked list (aos\_list\_t) traversal API operations:
        
        -   aos\_list\_for\_each\_entry
            
        -   aos\_list\_for\_each\_entry\_reverse
            
        -   aos\_list\_for\_each\_entry\_safe
            
        -   aos\_list\_for\_each\_entry\_safe\_reverse
            
-   For OSS SDK for C V1.0.0: compatible except the following structures and API operations:
    
    -   oss\_request\_options\_t
        
    -   oss\_get\_object\_to\_buffer
        
    -   oss\_get\_object\_to\_file
        
    -   oss\_get\_object\_to\_buffer\_by\_url
        
    -   oss\_get\_object\_to\_file\_by\_url
        
    -   oss\_init\_multipart\_upload
        
    -   oss\_complete\_multipart\_upload
        
-   For OSS SDK for C V0.0.X: incompatible.
    

## Sample code

OSS SDK for C provides a variety of sample code files for your reference or use. The following table describes the sample code files provided by OSS SDK for C.

**Sample code file**

**Content**

[oss\_put\_object\_sample](https://github.com/aliyun/aliyun-oss-c-sdk/blob/master/oss_c_sdk_sample/oss_put_object_sample.c)

[Upload objects](/help/en/oss/developer-reference/overview-32#concept-32136-zh)

-   [put\_object\_acl\_sample.c](https://github.com/aliyun/aliyun-oss-c-sdk/blob/master/oss_c_sdk_sample/oss_put_object_acl_sample.c)
    
-   [get\_object\_acl\_sample.c](https://github.com/aliyun/aliyun-oss-c-sdk/blob/master/oss_c_sdk_sample/oss_get_object_acl_sample.c)
    

[Manage object ACLs](/help/en/oss/developer-reference/manage-object-acls-11)

[oss\_get\_object\_sample.c](https://github.com/aliyun/aliyun-oss-c-sdk/blob/master/oss_c_sdk_sample/oss_get_object_sample.c)

[Download objects](/help/en/oss/developer-reference/overview-30#concept-32137-zh)

[oss\_append\_object\_sample.c](https://github.com/aliyun/aliyun-oss-c-sdk/blob/master/oss_c_sdk_sample/oss_append_object_sample.c)

[Append upload](/help/en/oss/developer-reference/append-upload-8#concept-90215-zh)

[oss\_multipart\_upload\_sample.c](https://github.com/aliyun/aliyun-oss-c-sdk/blob/master/oss_c_sdk_sample/oss_multipart_upload_sample.c)

[Multipart upload](/help/en/oss/developer-reference/multipart-upload-8#concept-90222-zh)

[oss\_resumable\_sample.c](https://github.com/aliyun/aliyun-oss-c-sdk/blob/master/oss_c_sdk_sample/oss_resumable_sample.c)

[Resumable upload](/help/en/oss/developer-reference/resumable-upload-7#concept-90219-zh) and [Resumable download](/help/en/oss/developer-reference/perform-resumable-download#concept-90283-zh)

[get\_object\_meta\_sample.c](https://github.com/aliyun/aliyun-oss-c-sdk/blob/master/oss_c_sdk_sample/oss_get_object_meta_sample.c)

[Manage object metadata](/help/en/oss/developer-reference/manage-object-metadata-7)

[oss\_list\_object\_sample.c](https://github.com/aliyun/aliyun-oss-c-sdk/blob/master/oss_c_sdk_sample/oss_list_object_sample.c)

[List objects](/help/en/oss/developer-reference/list-objects-12#concept-90514-zh)

[oss\_delete\_object\_sample.c](https://github.com/aliyun/aliyun-oss-c-sdk/blob/master/oss_c_sdk_sample/oss_delete_object_sample.c)

[Delete objects](/help/en/oss/developer-reference/delete-objects-6#concept-90493-zh)

[oss\_callback\_sample.c](https://github.com/aliyun/aliyun-oss-c-sdk/blob/master/oss_c_sdk_sample/oss_callback_sample.c)

[Upload callbacks](/help/en/oss/developer-reference/upload-callbacks-8#concept-90224-zh)

[oss\_progress\_sample.c](https://github.com/aliyun/aliyun-oss-c-sdk/blob/master/oss_c_sdk_sample/oss_progress_sample.c)

[Upload progress bar](/help/en/oss/developer-reference/progress-bar-4#concept-90225-zh) and [Download progress bar](/help/en/oss/developer-reference/progress-bars-2#concept-90284-zh)

[oss\_crc\_sample.c](https://github.com/aliyun/aliyun-oss-c-sdk/blob/master/oss_c_sdk_sample/oss_crc_sample.c)

Perform CRC-64 on object upload and download

[oss\_image\_sample.c](https://github.com/aliyun/aliyun-oss-c-sdk/blob/master/oss_c_sdk_sample/oss_image_sample.c)

[IMG](/help/en/oss/developer-reference/img-9#concept-48113-zh)

**Note**

For more information about the source code of OSS SDK for C, visit [GitHub](https://github.com/aliyun/aliyun-oss-c-sdk/tree/master).

## References

-   [Installation](/help/en/oss/developer-reference/installation-4)
    
-   [Initialization](/help/en/oss/developer-reference/initialization-5)
    
-   [Get started with OSS SDK for C](/help/en/oss/developer-reference/getting-started-with-oss-sdk-for-c)
    
-   [Buckets](/help/en/oss/developer-reference/buckets-9/)
    
-   [Access control](/help/en/oss/developer-reference/access-control-4/)
    
-   [Objects](/help/en/oss/developer-reference/objects-3/)
    
-   [Data security](/help/en/oss/developer-reference/data-security-4/)
    
-   [Data management](/help/en/oss/developer-reference/data-management-4/)
    
-   [IMG](/help/en/oss/developer-reference/img-9)
    
-   [Error handling](/help/en/oss/developer-reference/error-handling-3)

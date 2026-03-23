This topic describes the sample code of OSS SDK for PHP 1.0 in various scenarios.

## The latest OSS SDK for PHP 2.0

-   OSS SDK for PHP 2.0 ([alibabacloud-oss-php-sdk-v2](https://github.com/aliyun/alibabacloud-oss-php-sdk-v2/tree/master)) is a major rewrite of the OSS SDK for PHP 1.0 ([aliyun-oss-php-sdk](https://github.com/aliyun/aliyun-oss-php-sdk)) code repository.
    
-   OSS SDK for PHP 2.0 is a new version that simplifies underlying operations such as identity authentication, automatic request retry, and error handling. You can access OSS by calling API operations without complex programming.
    
-   OSS SDK for PHP 2.0 provides flexible parameter configuration methods and rich advanced operations, such as paginator, transmission managers, and File-like operations. This comprehensively improves development efficiency and experience.
    
-   Refer to [OSS SDK for PHP 2.0 (preview)](/help/en/oss/developer-reference/manual-for-php-v2/) to learn about how to get started.
    

## Source code

For the source code of OSS SDK for PHP, visit [GitHub](https://github.com/aliyun/aliyun-oss-php-sdk).

## Sample code

OSS SDK for PHP provides a variety of sample code for your reference or use. The following table lists the sample code files provided by OSS SDK for PHP.

**Sample code file**

**Content**

[Object.php](https://github.com/aliyun/aliyun-oss-php-sdk/blob/master/samples/Object.php)

Operations related to objects, including uploading, downloading, and managing objects. For more information, see [Upload objects](/help/en/oss/developer-reference/upload-file-overview/#concept-32103-zh), [Download objects](/help/en/oss/developer-reference/overview-37#concept-32104-zh), and [Manage objects](/help/en/oss/overview-38#concept-32105-zh).

[MultipartUpload.php](https://github.com/aliyun/aliyun-oss-php-sdk/blob/master/samples/MultipartUpload.php)

[Multipart upload](/help/en/oss/developer-reference/multipart-upload#concept-88477-zh)

[Signature.php](https://github.com/aliyun/aliyun-oss-php-sdk/blob/master/samples/Signature.php)

[Authorized access](/help/en/oss/developer-reference/download-objects-using-a-signed-url-generated-with-oss-sdk-for-phpa-signed-url-generated-with-oss-sdk-for-php#section-m2g-jwr-kfb)

[Callback.php](https://github.com/aliyun/aliyun-oss-php-sdk/blob/master/samples/Callback.php)

[Upload callback](/help/en/oss/developer-reference/upload-callbacks#concept-88478-zh)

[Image.php](https://github.com/aliyun/aliyun-oss-php-sdk/blob/master/samples/Image.php)

[Image processing](/help/en/oss/developer-reference/img-6#concept-47735-zh)

[LiveChannel.php](https://github.com/aliyun/aliyun-oss-php-sdk/blob/master/samples/LiveChannel.php)

Operations related to [LiveChannel](/help/en/oss/developer-reference/livechannel-operations/#concept-njb-pbd-xdb).

[Bucket.php](https://github.com/aliyun/aliyun-oss-php-sdk/blob/master/samples/Bucket.php)

Operations related to buckets, including [Create buckets](/help/en/oss/developer-reference/create-buckets-3#concept-32102-zh), [List buckets](/help/en/oss/developer-reference/list-buckets-6#concept-2358122), and [Delete buckets](/help/en/oss/developer-reference/delete-buckets-3#concept-2358166).

[BucketLifecycle.php](https://github.com/aliyun/aliyun-oss-php-sdk/blob/master/samples/BucketLifecycle.php)

Operations related to lifecycle management, such as configuring, querying, and deleting lifecycle rules for buckets. For more information, see [Manage lifecycle rules](/help/en/oss/developer-reference/manage-lifecycle-rules-2#concept-32108-zh).

[BucketLogging.php](https://github.com/aliyun/aliyun-oss-php-sdk/blob/master/samples/BucketLogging.php)

Operations related to logging, such as configuring, querying, and deleting logging configurations. For more information, see [Logging](/help/en/oss/user-guide/logging#concept-t3h-4hd-5db).

[BucketReferer.php](https://github.com/aliyun/aliyun-oss-php-sdk/blob/master/samples/BucketReferer.php)

Operations related to hotlink protection on buckets, such as configuring, querying, and deleting hotlink protection configurations for buckets. For more information, see [Hotlink protection](/help/en/oss/developer-reference/php-hotlink-protection#concept-32111-zh).

[BucketWebsite.php](https://github.com/aliyun/aliyun-oss-php-sdk/blob/master/samples/BucketWebsite.php)

Operations related to static website hosting, such as configuring, querying, and deleting static website hosting configurations for buckets. For more information, see [Static website hosting](/help/en/oss/developer-reference/static-website-hosting-6#concept-32107-zh).

[BucketCors.php](https://github.com/aliyun/aliyun-oss-php-sdk/blob/master/samples/BucketCors.php)

Operations related to cross-origin resource sharing (CORS), such as configuring, querying, and deleting CORS configurations. For more information, see [CORS](/help/en/oss/developer-reference/cors-7#concept-32110-zh).

## References

-   [Installation](/help/en/oss/developer-reference/installation-13)
    
-   [Configure access credentials](/help/en/oss/developer-reference/oss-php-configure-access-credentials)
    
-   [Initialization](/help/en/oss/developer-reference/initialization-6)
    
-   [Get started with OSS SDK for PHP](/help/en/oss/developer-reference/getting-started-1)
    
-   [Buckets](/help/en/oss/developer-reference/buckets-6/)
    
-   [Access control](/help/en/oss/developer-reference/access-control-8/)
    
-   [Objects](/help/en/oss/developer-reference/objects-7/)
    
-   [Data security](/help/en/oss/developer-reference/data-security-10/)
    
-   [Data management](/help/en/oss/developer-reference/data-management-7/)
    
-   [Transfer management](/help/en/oss/developer-reference/transmission-management-3/)
    
-   [Data processing](/help/en/oss/developer-reference/php-data-processing/)
    
-   [FAQ](/help/en/oss/developer-reference/faq-23)
    
-   [Exception handling](/help/en/oss/developer-reference/exception-handling-1)

This topic describes Object Storage Service (OSS) SDK for Python 1.0.

## About OSS SDK for Python 2.0

-   OSS SDK for Python 2.0 ([alibabacloud-oss-python-sdk-v2](https://github.com/aliyun/alibabacloud-oss-python-sdk-v2/blob/master/README-CN.md)) is a major rewrite of the OSS SDK for Python 1.0 code repository ([aliyun-oss-python-sdk](https://github.com/aliyun/aliyun-oss-python-sdk)).
    
-   OSS SDK for Python 2.0 is a new version that simplifies underlying operations such as identity authentication, automatic request retry, and error handling. You can access OSS by calling API operations without complex programming.
    
-   OSS SDK for Python 2.0 provides flexible parameter configuration methods and rich advanced operations, such as paginator, transmission managers, and File-like operations. This comprehensively improves development efficiency and experience.
    
-   Refer to [OSS SDK for Python 2.0](/help/en/oss/developer-reference/2-0-manual-preview-version/) to get started.
    

## Source code

For more information about the source code of OSS SDK for Python, visit [GitHub](https://github.com/aliyun/aliyun-oss-python-sdk).

## Sample code

OSS SDK for Python provides various sample code files for your reference or use. The following table describes the sample code files provided by OSS SDK for Python.

**Sample code file**

**Content**

[bucket.py](https://github.com/aliyun/aliyun-oss-python-sdk/blob/master/examples/bucket.py)

-   [Create buckets](/help/en/oss/developer-reference/create-buckets#concept-32029-zh)
    
-   [List buckets](/help/en/oss/developer-reference/list-buckets-1#concept-2352096)
    
-   [Query the region of a bucket](/help/en/oss/developer-reference/query-the-region-of-a-bucket-3#concept-2358579)
    
-   [Query bucket information](/help/en/oss/developer-reference/query-bucket-information-1#concept-2352130)
    
-   [Determine whether a bucket exists](/help/en/oss/developer-reference/determine-whether-a-bucket-exists-6#concept-2358574)
    
-   [Lifecycle rules](/help/en/oss/developer-reference/lifecycle-rules#concept-32035-zh)
    
-   [Manage bucket ACLs](/help/en/oss/developer-reference/manage-bucket-acls#concept-2352117)
    

[bucket\_cname.py](https://github.com/aliyun/aliyun-oss-python-sdk/blob/master/examples/bucket_cname.py)

[Map custom domain names](/help/en/oss/developer-reference/map-custom-domain-names-4#concept-2234995)

[bucket\_cors.py](https://github.com/aliyun/aliyun-oss-python-sdk/blob/master/examples/bucket_cors.py)

[CORS](/help/en/oss/developer-reference/cors#concept-32036-zh)

[bucket\_inventory.py](https://github.com/aliyun/aliyun-oss-python-sdk/blob/master/examples/bucket_inventory.py)

[Bucket inventories](/help/en/oss/developer-reference/bucket-inventories#concept-2401068)

[bucket\_logging.py](https://github.com/aliyun/aliyun-oss-python-sdk/blob/master/examples/bucket_logging.py)

[Logging](/help/en/oss/developer-reference/logging#concept-32037-zh)

[bucket\_meta\_query.py](https://github.com/aliyun/aliyun-oss-python-sdk/blob/master/examples/bucket_meta_query.py)

[Data indexing](/help/en/oss/developer-reference/data-indexing-3#concept-2234987)

[bucket\_policy.py](https://github.com/aliyun/aliyun-oss-python-sdk/blob/master/examples/bucket_policy.py)

[Bucket policies](/help/en/oss/developer-reference/bucket-policies-3#concept-2426842)

[bucket\_referer.py](https://github.com/aliyun/aliyun-oss-python-sdk/blob/master/examples/bucket_referer.py)

[Hotlink protection](/help/en/oss/developer-reference/python-hotlink-protection#concept-32038-zh)

[bucket\_replication.py](https://github.com/aliyun/aliyun-oss-python-sdk/blob/master/examples/bucket_replication.py)

[Data replication](/help/en/oss/developer-reference/data-replication-3#concept-2093703)

[bucket\_symlink.py](https://github.com/aliyun/aliyun-oss-python-sdk/blob/master/examples/bucket_symlink.py)

[Manage symbolic links](/help/en/oss/developer-reference/manage-symbolic-links-1#concept-88468-zh)

[bucket\_tagging.py](https://github.com/aliyun/aliyun-oss-python-sdk/blob/master/examples/bucket_tagging.py)

[Bucket tagging](/help/en/oss/developer-reference/bucket-tagging-3#concept-265114)

[bucket\_transfer\_acceleration.py](https://github.com/aliyun/aliyun-oss-python-sdk/blob/master/examples/bucket_transfer_acceleration.py)

[Transfer acceleration](/help/en/oss/developer-reference/transfer-acceleration-1#concept-2089133)

[bucket\_versioning.py](https://github.com/aliyun/aliyun-oss-python-sdk/blob/master/examples/bucket_versioning.py)

[Manage versioning](/help/en/oss/developer-reference/manage-versioning-2#concept-265070)

[bucket\_website.py](https://github.com/aliyun/aliyun-oss-python-sdk/blob/master/examples/bucket_website.py)

[Static website hosting (mirroring-based back-to-origin)](/help/en/oss/developer-reference/static-website-hosting-1#concept-32034-zh)

[bucket\_worm.py](https://github.com/aliyun/aliyun-oss-python-sdk/blob/master/examples/bucket_worm.py)

[Retention policies](/help/en/oss/developer-reference/retention-policies-5#concept-1950641)

[download.py](https://github.com/aliyun/aliyun-oss-python-sdk/blob/master/examples/download.py)

-   [Download objects as files](/help/en/oss/developer-reference/download-objects-as-files-1#concept-88442-zh)
    
-   [Streaming download](/help/en/oss/developer-reference/streaming-download-1#concept-88441-zh)
    
-   [Range download](/help/en/oss/developer-reference/range-download-2#concept-88443-zh)
    
-   [Resumable download](/help/en/oss/developer-reference/resumable-upload#concept-88444-zh)
    

[image.py](https://github.com/aliyun/aliyun-oss-python-sdk/blob/master/examples/image.py)

[IMG](/help/en/oss/developer-reference/img-7#concept-47660-zh)

[object\_basic.py](https://github.com/aliyun/aliyun-oss-python-sdk/blob/master/examples/object_basic.py)

-   [Simple upload](/help/en/oss/developer-reference/simple-upload-1#concept-88426-zh)
    
-   [Copy objects](/help/en/oss/developer-reference/copy-objects-2#concept-88465-zh)
    
-   [List objects](/help/en/oss/developer-reference/list-objects-by-python-sdk-v1#concept-88458-zh)
    
-   [Delete objects](/help/en/oss/developer-reference/delete-objects-2#concept-88463-zh)
    

[object\_callback.py](https://github.com/aliyun/aliyun-oss-python-sdk/blob/master/examples/object_callback.py)

[Upload callback](/help/en/oss/developer-reference/upload-callbacks-2#concept-88437-zh)

[object\_check.py](https://github.com/aliyun/aliyun-oss-python-sdk/blob/master/examples/object_check.py)

[Data verification](/help/en/oss/developer-reference/data-verification-4#concept-2358582)

[object\_crypto.py](https://github.com/aliyun/aliyun-oss-python-sdk/blob/master/examples/object_crypto.py)

[Client-side encryption](/help/en/oss/developer-reference/client-side-encryption-1#concept-74371-zh)

[object\_extra.py](https://github.com/aliyun/aliyun-oss-python-sdk/blob/master/examples/object_extra.py)

[Manage object metadata](/help/en/oss/developer-reference/manage-object-metadata-1#concept-88456-zh)

[object\_forbid\_overwrite.py](https://github.com/aliyun/aliyun-oss-python-sdk/blob/master/examples/object_forbid_overwrite.py)

[Prevent overwrites of same-name objects](/help/en/oss/developer-reference/prevent-objects-from-being-overwritten-by-objects-that-have-the-same-names-2#concept-2353857)

[object\_operation.py](https://github.com/aliyun/aliyun-oss-python-sdk/blob/master/examples/object_operation.py)

-   [Determine whether an object exists](/help/en/oss/developer-reference/determine-whether-an-object-exists#concept-88454-zh)
    
-   [Manage object ACLs](/help/en/oss/developer-reference/manage-object-acls-1#concept-88455-zh)
    

[object\_post.py](https://github.com/aliyun/aliyun-oss-python-sdk/blob/master/examples/object_post.py)

[Form upload](/help/en/oss/user-guide/form-upload#concept-uln-lcb-5db)

[object\_progress.py](https://github.com/aliyun/aliyun-oss-python-sdk/blob/master/examples/object_progress.py)

-   [Progress bars](/help/en/oss/developer-reference/upload-progress-bar#concept-dfm-s2j-kfb)
    
-   [Progress bars](/help/en/oss/developer-reference/download-progress-bar#concept-88445-zh)
    

[object\_request\_payment.py](https://github.com/aliyun/aliyun-oss-python-sdk/blob/master/examples/object_request_payment.py)

[Pay-by-requester](/help/en/oss/developer-reference/pay-by-requester-1#concept-944152)

[object\_restore.py](https://github.com/aliyun/aliyun-oss-python-sdk/blob/master/examples/object_restore.py)

[Restore objects](/help/en/oss/developer-reference/restore-objects-1#concept-88467-zh)

[server\_side\_encryption.py](https://github.com/aliyun/aliyun-oss-python-sdk/blob/master/examples/server_side_encryption.py)

[Server-side encryption](/help/en/oss/developer-reference/server-side-encryption-5#concept-265074)

[object\_storage\_type.py](https://github.com/aliyun/aliyun-oss-python-sdk/blob/master/examples/object_storage_type.py)

[Convert the storage classes of objects](/help/en/oss/developer-reference/convert-the-storage-classes-of-objects-5#concept-189228)

[sts.py](https://github.com/aliyun/aliyun-oss-python-sdk/blob/master/examples/sts.py)

[Authorize access](/help/en/oss/developer-reference/authorized-access#concept-32033-zh)

[object\_tagging.py](https://github.com/aliyun/aliyun-oss-python-sdk/blob/master/examples/object_tagging.py)

-   [Configure object tagging](/help/en/oss/developer-reference/configure-object-tagging-3#concept-644876)
    
-   [Query object tags](/help/en/oss/developer-reference/query-object-tags#concept-645145)
    
-   [Delete object tags](/help/en/oss/developer-reference/delete-object-tags-1#concept-645158)
    
-   [Use object tagging for lifecycle management](/help/en/oss/developer-reference/use-object-tagging-for-lifecycle-management-1#concept-645503)
    

[select\_csv.py](https://github.com/aliyun/aliyun-oss-python-sdk/blob/master/examples/select_csv.py)

[Query objects](/help/en/oss/developer-reference/query-objects-2#concept-1958219)

[traffic\_limit.py](https://github.com/aliyun/aliyun-oss-python-sdk/blob/master/examples/traffic_limit.py)

[Single-connection bandwidth throttling](/help/en/oss/developer-reference/single-connection-bandwidth-throttling-1#concept-1180895)

[upload.py](https://github.com/aliyun/aliyun-oss-python-sdk/blob/master/examples/upload.py)

-   [Resumable upload](/help/en/oss/developer-reference/resumable-upload-1#concept-edl-r2j-kfb)
    
-   [Multipart upload](/help/en/oss/developer-reference/use-oss-python-sdk-to-multipart-upload#concept-88434-zh)
    

## References

-   [Installation](/help/en/oss/installation-14)
    
-   [Configure access credentials](/help/en/oss/python-configuration-access-credentials)
    
-   [Initialization](/help/en/oss/initialization-2)
    
-   [Get Started](/help/en/oss/developer-reference/getting-started-with-oss-sdk-for-python)
    
-   [Query the endpoints of regions by using OSS SDK for Python](/help/en/oss/python-query-endpoint-information)
    
-   [Buckets](/help/en/oss/developer-reference/buckets-2/)
    
-   [Objects/files](/help/en/oss/developer-reference/objects-2/)
    
-   [Access control](/help/en/oss/developer-reference/access-control-2/)
    
-   [Data security](/help/en/oss/developer-reference/data-security-2/)
    
-   [Data management](/help/en/oss/developer-reference/data-management/)
    
-   [Transfer management](/help/en/oss/developer-reference/transmission-management-14/)
    
-   [Data processing](/help/en/oss/developer-reference/image-services/)
    
-   [LiveChannel management](/help/en/oss/developer-reference/common-operations-of-oss-sdk-for-python-on-livechannels)
    
-   [Chinese characters and time](/help/en/oss/developer-reference/chinese-characters-and-time)
    
-   [Exception handling](/help/en/oss/developer-reference/exception-handling)
    
-   [FAQ](/help/en/oss/developer-reference/faq-5)

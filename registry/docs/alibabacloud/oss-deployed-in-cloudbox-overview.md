OSS on CloudBox brings Object Storage Service (OSS) to your data center, providing local storage, local access, and local data processing for unstructured data. It uses the same OSS APIs and SDKs as Alibaba Cloud public cloud, so your existing code works without modification.

## How it works

CloudBox is a fully managed cloud service provided by Alibaba Cloud. The hardware and software of Alibaba Cloud public cloud are integrated into your data center, giving you cloud capabilities on your own premises.

To store data in OSS on CloudBox:

1.  Create a bucket in OSS on CloudBox. Each CloudBox deployment has its own region, and buckets are region-specific.
    
2.  Access the bucket through an internal endpoint within your CloudBox Virtual Private Cloud (VPC). OSS on CloudBox does not support public endpoints.
    
3.  Upload, download, and manage objects using the standard OSS APIs and SDKs—the same interfaces you use on Alibaba Cloud public cloud.
    

To transfer data between OSS on CloudBox and Alibaba Cloud public cloud, establish a network connection between CloudBox and Alibaba Cloud public cloud, then use [ossimport](/help/en/oss/overview-36#concept-rc2-t1h-wdb).

For more information about CloudBox, see [What is CloudBox?](/help/en/cloud-box/product-overview/what-is-cloudbox#concept-2035794)

## Benefits

**Benefit**

**Description**

Data security

Data stays in your data centers, meeting regulatory requirements for local data residency.

Local data processing

Process data on-premises without uploading it to Alibaba Cloud public cloud, reducing data transfer costs.

Low latency

CloudBox is physically close to your local devices and applications, enabling near real-time interactions.

Exclusive resources

Storage resources are not shared with other customers, making it suitable for sensitive data.

## Billing

For billing methods, scale-up rules, and billing examples, see [OSS resources](/help/en/cloud-box/product-overview/oss-resources#concept-2203995).

## Limitations

### Quotas

**Resource**

**Limit**

Buckets per Alibaba Cloud account

100 (region-specific)

### Unsupported features

**Feature**

**Limitation**

Storage class

Only Standard is supported. Other storage classes are not available.

Server-side encryption

Only SSE-OSS is supported. SSE-KMS is not supported.

Endpoint type

Only internal endpoints are supported. Public endpoints are not supported.

## Endpoints

OSS on CloudBox uses two types of endpoints, accessed through a CloudBox VPC:

-   **Control endpoints**: For bucket-level operations only (create, delete, configure buckets). Control endpoints do not support object operations.
    
    -   Format: `<Cloudbox-Id>.<Region>.oss-cloudbox-control.aliyuncs.com`
        
    -   Example: `cb-f8z7yvzgwfkl9q0h****.cn-shenzhen.oss-cloudbox-control.aliyuncs.com`
        
-   **Data endpoints**: For both bucket-level and object-level operations.
    
    -   Format: `<Cloudbox-Id>.<Region>.oss-cloudbox.aliyuncs.com`
        
    -   Example: `cb-f8z7yvzgwfkl9q0h****.cn-shenzhen.oss-cloudbox.aliyuncs.com`
        

> If you create a VPC in CloudBox and need to use OSS within that VPC, contact [technical support](https://smartservice.console.alibabacloud.com/#/ticket/createIndex) to enable the endpoints.

## API operations supported by control endpoints

Control endpoints support bucket-level operations only.

**Category**

**API**

**Description**

Basic operations

[PutBucket](/help/en/oss/developer-reference/putbucket#reference-wdh-fj5-tdb)

Creates a bucket.

[DeleteBucket](/help/en/oss/developer-reference/deletebucket#reference-o1j-rrw-tdb)

Deletes a bucket.

[GetBucketInfo](/help/en/oss/developer-reference/getbucketinfo#reference-rwk-bwv-tdb)

Queries bucket information.

[GetBucketLocation](/help/en/oss/developer-reference/getbucketlocation#reference-e11-qtv-tdb)

Queries the region of a bucket.

Access control list (ACL)

[PutBucketAcl](/help/en/oss/developer-reference/putbucketacl#reference-zzr-hk5-tdb)

Sets the ACL of a bucket.

[GetBucketAcl](/help/en/oss/developer-reference/getbucketacl#reference-hgp-psv-tdb)

Queries the ACL of a bucket.

Lifecycle

[PutBucketLifecycle](/help/en/oss/developer-reference/putbucketlifecycle#reference-xlw-dbv-tdb)

Configures lifecycle rules for a bucket.

[GetBucketLifecycle](/help/en/oss/developer-reference/getbucketlifecycle#reference-zq5-grw-tdb)

Queries lifecycle rules of a bucket.

[DeleteBucketLifecycle](/help/en/oss/developer-reference/deletebucketlifecycle#reference-wl1-xsw-tdb)

Deletes lifecycle rules of a bucket.

Versioning

[PutBucketVersioning](/help/en/oss/developer-reference/putbucketversioning#reference-w2w-nm3-fhb)

Sets the versioning status of a bucket.

[GetBucketVersioning](/help/en/oss/developer-reference/getbucketversioning#reference-fhn-kt3-fhb)

Queries the versioning status of a bucket.

Bucket policy

[PutBucketPolicy](/help/en/oss/developer-reference/putbucketpolicy#reference-2424532)

Configures a bucket policy.

[GetBucketPolicy](/help/en/oss/developer-reference/getbucketpolicy#reference-2424982)

Queries bucket policies.

[DeleteBucketPolicy](/help/en/oss/developer-reference/deletebucketpolicy#reference-2424995)

Deletes a bucket policy.

Logging

[PutBucketLogging](/help/en/oss/developer-reference/putbucketlogging#reference-t1g-zj5-tdb)

Enables logging for a bucket.

[GetBucketLogging](/help/en/oss/developer-reference/getbucketlogging#reference-mm3-zwv-tdb)

Queries logging configurations of a bucket.

[DeleteBucketLogging](/help/en/oss/developer-reference/deletebucketlogging#reference-jrn-gsw-tdb)

Disables logging for a bucket.

Static website hosting

[PutBucketWebsite](/help/en/oss/developer-reference/putbucketwebsite#reference-hwb-yr5-tdb)

Enables static website hosting for a bucket.

[GetBucketWebsite](/help/en/oss/developer-reference/getbucketwebsite#reference-wvy-s4w-tdb)

Queries static website hosting configurations.

[DeleteBucketWebsite](/help/en/oss/developer-reference/deletebucketwebsite#reference-zrl-msw-tdb)

Disables static website hosting for a bucket.

Hotlink protection

[PutBucketReferer](/help/en/oss/developer-reference/putbucketreferer#reference-prc-ys5-tdb)

Configures hotlink protection for a bucket.

[GetBucketReferer](/help/en/oss/developer-reference/getbucketreferer#reference-bs5-rpw-tdb)

Queries hotlink protection configurations.

Encryption

[PutBucketEncryption](/help/en/oss/developer-reference/putbucketencryption#concept-262214)

Configures encryption rules for a bucket.

[GetBucketEncryption](/help/en/oss/developer-reference/getbucketencryption#concept-262215)

Queries encryption rules of a bucket.

[DeleteBucketEncryption](/help/en/oss/developer-reference/deletebucketencryption#concept-262216)

Deletes encryption rules of a bucket.

## API operations supported by data endpoints

Data endpoints support service-level, bucket-level, and object-level operations.

### Service-level operations

**API**

**Description**

[ListBuckets (GetService)](/help/en/oss/developer-reference/listbuckets#reference-ahf-k4t-tdb)

Lists all buckets owned by the requester.

### Bucket-level operations

Data endpoints support all bucket-level operations listed for control endpoints, plus the following:

**Category**

**API**

**Description**

Basic operations

[GetBucket (ListObjects)](/help/en/oss/developer-reference/listobjects#reference-iwr-xlv-tdb)

Lists all objects in a bucket.

[ListObjectsV2 (GetBucketV2)](/help/en/oss/developer-reference/listobjects-v2#reference-2520881)

Lists all objects in a bucket.

Versioning

[ListObjectVersions (GetBucketVersions)](/help/en/oss/developer-reference/listobjectversions#reference-n2s-xy3-fhb)

Lists all object versions in a bucket.

### Object-level operations

**Category**

**API**

**Description**

Basic operations

[PutObject](/help/en/oss/developer-reference/putobject#reference-l5p-ftw-tdb)

Uploads an object.

[GetObject](/help/en/oss/developer-reference/getobject#reference-ccf-rgd-5db)

Queries an object.

[CopyObject](/help/en/oss/developer-reference/copyobject#reference-mvx-xxc-5db)

Copies an object.

[AppendObject](/help/en/oss/developer-reference/appendobject#reference-fvf-xld-5db)

Uploads an object using append upload.

[DeleteObject](/help/en/oss/developer-reference/deleteobject#reference-iqc-mqv-wdb)

Deletes an object.

[DeleteMultipleObjects](/help/en/oss/developer-reference/deletemultipleobjects#reference-ydg-25v-wdb)

Deletes multiple objects in a single request.

[HeadObject](/help/en/oss/developer-reference/headobject#reference-bgh-cbw-wdb)

Queries object metadata only.

[GetObjectMeta](/help/en/oss/developer-reference/getobjectmeta#reference-sg4-k2w-wdb)

Queries basic object metadata: ETag, size, and last modified time.

Multipart upload

[InitiateMultipartUpload](/help/en/oss/developer-reference/initiatemultipartupload#reference-zgh-cnx-wdb)

Initiates a multipart upload task.

[UploadPart](/help/en/oss/developer-reference/uploadpart#reference-pnq-2px-wdb)

Uploads a part by object name and upload ID.

[UploadPartCopy](/help/en/oss/developer-reference/uploadpartcopy#reference-t4b-vpx-wdb)

Copies data from an existing object to upload a part by adding the x-oss-copy-source request header to an UploadPart request.

[CompleteMultipartUpload](/help/en/oss/developer-reference/completemultipartupload#reference-lq1-dtx-wdb)

Completes a multipart upload task.

[AbortMultipartUpload](/help/en/oss/developer-reference/abortmultipartupload#reference-txp-bvx-wdb)

Cancels a multipart upload task and deletes uploaded parts.

[ListMultipartUploads](/help/en/oss/developer-reference/listmultipartuploads#reference-hj2-3wx-wdb)

Lists all ongoing multipart upload tasks, including tasks that are initiated but not completed or canceled.

[ListParts](/help/en/oss/developer-reference/listparts#reference-hzm-1zx-wdb)

Lists all parts uploaded under a specific upload ID.

ACL

[PutObjectACL](/help/en/oss/developer-reference/putobjectacl#reference-fs3-gfw-wdb)

Sets the ACL of an object.

[GetObjectACL](/help/en/oss/developer-reference/getobjectacl#reference-lzc-24w-wdb)

Queries the ACL of an object.

Symbolic link

[PutSymlink](/help/en/oss/developer-reference/putsymlink#reference-qzz-qzw-wdb)

Creates a symbolic link.

[GetSymlink](/help/en/oss/developer-reference/getsymlink#reference-s3d-s1x-wdb)

Queries a symbolic link.

Tagging

[PutObjectTagging](/help/en/oss/developer-reference/putobjecttagging#reference-185784)

Adds or updates object tags.

[GetObjectTagging](/help/en/oss/developer-reference/getobjecttagging#concept-185787)

Queries object tags.

[DeleteObjectTagging](/help/en/oss/developer-reference/deleteobjecttagging#reference-185788)

Deletes object tags.

## What's next

-   [Get started with OSS on CloudBox](/help/en/oss/user-guide/getting-started-with-oss-deployed-in-cloudbox)
    
-   [Bucket operations supported by OSS on CloudBox](/help/en/oss/user-guide/bucket-operations-supported-by-oss-deployed-in-cloudbox/)
    
-   [Object operations supported by OSS on CloudBox](/help/en/oss/user-guide/object-operations-supported-by-oss-deployed-in-cloudbox/)

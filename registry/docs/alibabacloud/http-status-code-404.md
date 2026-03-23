OSS returns HTTP 404 when a requested resource — a bucket, object, configuration, or policy — does not exist. Use the error code in the response body to identify the specific cause and apply the corresponding fix.

## Error code reference

**Error code**

**Description**

[KeyNotFound](#section-2gy-c0r-o6w)

The specified Key Management Service (KMS) customer master key (CMK) ID is not found.

[AliasNotFound](#section-8j5-6u4-jw6)

The specified CMK alias is not found.

[NoSuchServerSideEncryptionRule](/help/en/oss/user-guide/server-side-encryption-8#concept-lqm-fkd-5db)

Server-side encryption is not configured for the bucket.

[NoSuchWebsiteConfiguration](#section-psr-e1w-lzw)

Static website hosting is not configured for the bucket.

[NoSuchBucketObjectTagging](#section-060-908-6gh)

No objects in the bucket have tags.

[NoSuchCORSConfiguration](#section-jw8-rml-t43)

No cross-origin resource sharing (CORS) rules are configured for the bucket.

[NoSuchWORMConfiguration](#section-e86-z4l-ajw)

No retention policy exists, or the specified retention policy ID does not exist.

[SymlinkTargetNotExist](#section-97s-ghj-dia)

The object name is invalid, or the symlink target does not exist.

[NoSuchUser](#section-o23-aba-2uh)

The specified user does not exist.

[NoSuchRegion](#e5123831291g1)

The specified region does not exist.

[NoSuchLifecycle](#section-4ry-ud1-bqm)

No lifecycle rules are configured for the bucket.

[NoSuchInventory](/help/en/oss/developer-reference/putbucketinventory#reference-2379014)

No inventories are configured for the bucket.

[NoSuchBucket](#section-7jw-p56-9do)

The bucket name is invalid or the bucket does not exist.

[NoSuchKey](#section-glg-gqy-2vc)

The object does not exist — deleted by a lifecycle rule, a user, or a cross-region replication (CRR) sync.

[NoSuchUpload](#section-dy4-f1z-e7w)

The upload ID is invalid, or the multipart upload was aborted or completed.

[NoSuchVersion](#section-46n-iz4-lcj)

The specified object version does not exist.

[NoSuchLiveChannel](#section-dtg-zk8-s3h)

The specified LiveChannel does not exist.

[NoSuchBucketPolicy](#section-kg7-xv3-ijf)

No bucket policy is configured for the bucket.

[NoSuchReplicationConfiguration](#section-8rl-fqy-kpt)

No CRR rules are configured for the bucket.

[NoSuchReplicationRule](/help/en/oss/developer-reference/getbucketreplication#topic-2611071)

The specified CRR rule ID does not exist.

[NoSuchTransferAccelerationConfiguration](/help/en/oss/user-guide/transfer-acceleration#concept-1813960)

Transfer acceleration is not enabled for the bucket.

[NoSuchChannel](#section-0qd-eez-qrq)

The specified image channel does not exist (legacy Image Processing (IMG) version).

[NoSuchStyle](#section-k97-2t1-bhu)

The specified image style does not exist.

[NoSuchCacheControlConfiguration](#section-1az-eae-mbu)

No cache control policy is configured for the bucket.

## KeyNotFound

**Error message:** The specified parameter KMS keyId is not found

**Cause:** The specified CMK ID does not exist in KMS.

**Solution:** Verify that KMS is activated for your account, then specify a valid CMK ID in the format `9468da86-3509-4f8d-a61e-6eab1eac***`. For more information, see [Configure server-side encryption](/help/en/oss/configure-server-side-encryption).

## AliasNotFound

**Error message:** The specified Alias is not found

**Cause:** The specified CMK alias does not exist in KMS.

**Solution:** Verify that KMS is activated for your account, then specify a valid CMK alias. The CMK alias must start with `alias`, for example, `alias/example`.

## NoSuchServerSideEncryptionRule

**Error message:** The server side encryption configuration was not found

**Cause:** Server-side encryption is not enabled for the bucket.

**Solution:** Enable server-side encryption for the bucket. For more information, see [Server-side encryption](/help/en/oss/user-guide/server-side-encryption-8).

## NoSuchWebsiteConfiguration

**Error message:** The specified bucket does not have a website configuration

**Cause:** Static website hosting is not configured for the bucket.

**Solution:** Configure static website hosting for the bucket. For more information, see [Overview](/help/en/oss/user-guide/hosting-static-websites#concept-ynd-phc-5db).

## NoSuchBucketObjectTagging

**Error message:** The specified bucket does not have a object tagging

**Cause:** None of the objects in the bucket have tags.

**Solution:** Add tags to objects in the bucket. Object tags must meet the following requirements:

-   Each object can have up to 10 tags. Tag keys must be unique within an object.
    
-   A tag key can be up to 128 characters. A tag value can be up to 256 characters.
    
-   Tag keys and values are case-sensitive.
    
-   Tag keys and values can contain letters, digits, spaces, and the following characters: `+ - = . _ : /`
    
-   If tags are passed in an HTTP header, URL-encode any tag keys and values that contain special characters.
    

## NoSuchCORSConfiguration

**Error message:** The CORS Configuration does not exist

**Cause:** No CORS rules are configured for the bucket.

**Solution:** Configure CORS rules for the bucket to control which cross-origin requests are allowed or denied. For more information, see [CORS](/help/en/oss/user-guide/cors-settings#concept-bwn-tjd-5db).

## NoSuchWORMConfiguration

### The WORM Configuration does not exist

**Cause:** No retention policy is configured for the bucket.

**Solution:** Configure a retention policy for the bucket to prevent objects from being modified or deleted. For more information, see [Configure retention policies](/help/en/oss/configure-retention-policies#concept-lnq-csm-cfb).

### The specified WORM ID does not exist

**Cause:** The retention policy ID specified in the request does not exist.

**Solution:** Specify a valid retention policy ID when locking a policy or extending its retention period. To get the policy ID, call [GetBucketWorm](/help/en/oss/developer-reference/getbucketworm#reference-2537016).

## SymlinkTargetNotExist

**Error message:** The symlink target object does not exist

**Causes:**

-   The object name does not comply with naming rules.
    
-   The object that the symbolic link points to does not exist.
    

**Solutions:**

-   Verify that the object name meets the following rules:
    
    -   Must be 1 to 1,023 characters in length.
        
    -   Must be encoded in UTF-8.
        
    -   Cannot start with a forward slash (`/`) or a backslash (`\`).
        
-   If the request references a symbolic link, verify that the target object exists.
    

## NoSuchUser

**Error message:** User not found

**Cause:** The specified user does not exist.

**Solution:** Check whether the Alibaba Cloud account has been canceled.

## NoSuchRegion

**Error message:** NoSuchRegion

**Cause:** The specified region does not exist.

**Solution:** Verify the region identifier. For a list of valid OSS regions and endpoints, see [Regions and endpoints](/help/en/oss/user-guide/regions-and-endpoints#concept-zt4-cvy-5db).

## NoSuchLifecycle

**Error message:** No Row found in Lifecycle Table

**Cause:** No lifecycle rules are configured for the bucket.

**Solution:** Configure lifecycle rules to automatically delete expired objects and parts, or transition objects to a lower-cost storage class — Infrequent Access (IA), Archive, Cold Archive, or Deep Cold Archive. For more information, see [Configure lifecycle rules](/help/en/oss/configure-lifecycle-rules#concept-bmx-p2f-vdb).

## NoSuchInventory

**Error message:** No Row found in Inventory Table

**Cause:** No inventories are configured for the bucket.

**Solution:** Configure an inventory to export metadata about objects in the bucket — including object count, size, storage class, and encryption status. For more information, see [PutBucketInventory](/help/en/oss/developer-reference/putbucketinventory#reference-2379014).

## NoSuchBucket

**Error message:** The specified bucket does not exist

**Cause:** The bucket name does not comply with naming rules.

**Solution:** Verify that the bucket name meets the following rules:

-   Contains only lowercase letters, digits, and hyphens (`-`).
    
-   Starts and ends with a lowercase letter or digit.
    
-   Is 3 to 63 characters in length.
    

## NoSuchKey

**Error message:** The specified key does not exist

**Causes:**

-   The object name does not comply with naming rules.
    
-   The object was deleted because a lifecycle rule expired it.
    
-   The object was deleted by an authorized user through the OSS console, an OSS client, or an API call.
    
-   A CRR delete operation — triggered by a deletion in the source or destination bucket — was synchronized to this object.
    

**Solutions:**

-   Verify that the object name meets the following rules: 1 to 1,023 characters, UTF-8 encoded, and not starting with `/` or `\`.
    
-   Check the bucket's lifecycle rules to confirm the object was not expired. For more information, see [Configure lifecycle rules](/help/en/oss/configure-lifecycle-rules#concept-bmx-p2f-vdb).
    
-   Confirm that no authorized user deleted the object.
    
-   Review the bucket's CRR rules to determine whether a synchronized delete removed the object. For more information, see [Configure CRR](/help/en/oss/configure-crr#concept-h3r-shf-vdb).
    

## NoSuchUpload

**Error message:** The specified upload does not exist. The upload ID may be invalid, or the upload may have been aborted or completed

**Causes:**

-   The upload failed and no request ID was returned to the client.
    
-   Only some parts were uploaded in a multipart upload or resumable upload.
    

**Solutions:**

-   If this error occurs when you access a recently uploaded object, confirm that the upload response includes a request ID.
    
-   If this error occurs during multipart upload or resumable upload, confirm that the `CompleteMultipartUpload` operation returned HTTP 200 and a request ID. For more information, see [InitiateMultipartUpload](/help/en/oss/developer-reference/initiatemultipartupload#reference-zgh-cnx-wdb).
    

## NoSuchVersion

**Error message:** The specified version does not exist

**Cause:** The specified version of the object does not exist.

**Solution:** Specify a valid version ID when listing, downloading, or deleting a specific object version. To get all version IDs for an object, call [ListObjectVersions (GetBucketVersions)](/help/en/oss/developer-reference/listobjectversions#reference-n2s-xy3-fhb).

## NoSuchLiveChannel

**Error message:** The specified live channel does not exist

**Cause:** The specified LiveChannel does not exist.

**Solution:** Create a LiveChannel to ingest streams into OSS and get the ingest URL. For more information, see [Stream ingest over RTMP](/help/en/oss/developer-reference/rtmp-based-stream-ingest#concept-vbb-dmb-5db).

## NoSuchBucketPolicy

**Error message:** The specified bucket policy does not exist

**Cause:** No bucket policy is configured for the bucket.

**Solution:** Configure a bucket policy to grant other users access to your OSS resources. For more information, see [Configure bucket policies to authorize other users to access OSS resources](/help/en/oss/configure-bucket-policies-to-authorize-other-users-to-access-oss-resources#concept-ahc-tx4-j2b).

## NoSuchReplicationConfiguration

**Error message:** The bucket you specified does not have replication configuration

**Cause:** No CRR rules are configured for the bucket.

**Solution:** Configure CRR rules to automatically replicate objects across buckets in different regions. CRR syncs object creation, overwrites, and deletions from the source bucket to the destination bucket — supporting geo-disaster recovery and data replication. For more information, see [Configure CRR](/help/en/oss/configure-crr#concept-h3r-shf-vdb).

## NoSuchReplicationRule

**Error message:** The BucketReplicationRule you specified does not exist

**Cause:** The specified CRR rule ID does not exist.

**Solution:** Specify a valid CRR rule ID when querying replication task progress or deleting a CRR rule. To get the rule IDs configured for a bucket, call [GetBucketReplication](/help/en/oss/developer-reference/getbucketreplication#topic-2611071).

## NoSuchTransferAccelerationConfiguration

**Error message:** The bucket you specified does not have transfer acceleration configuration

**Cause:** Transfer acceleration is not enabled for the bucket.

**Solution:** Enable transfer acceleration for the bucket if you need to speed up remote data transfers, upload or download large objects (gigabytes to terabytes), or improve download performance for non-static or non-hot data. For more information, see [Enable transfer acceleration](/help/en/oss/user-guide/transfer-acceleration#concept-1813960).

## NoSuchChannel

**Error message:** No Such Image Channel

**Cause:** The specified image channel does not exist. This error typically occurs when using a deprecated version of IMG.

**Solution:** Migrate to the current version of IMG. Earlier versions are no longer supported. For more information, see [Overview](/help/en/oss/user-guide/overview-17/#concept-2333980).

## NoSuchStyle

**Error message:** No Such Image Style

**Cause:** The specified image style does not exist.

**Solution:** Create an image style that combines multiple IMG parameters to apply complex transformations to image objects in bulk. For more information, see [Image styles](/help/en/oss/user-guide/image-styles#concept-mr2-x3c-wdb).

## NoSuchCacheControlConfiguration

**Error message:** The bucket you specified does not have cache control configuration

**Cause:** No cache control policy is configured for the bucket.

**Solution:** Set the `cache-control` header in your HTTP requests and responses to define caching behavior. The `cache-control` header is supported by [PutObject](/help/en/oss/developer-reference/putobject#reference-l5p-ftw-tdb), [AppendObject](/help/en/oss/developer-reference/appendobject#reference-fvf-xld-5db), and [GetObject](/help/en/oss/developer-reference/getobject#reference-ccf-rgd-5db).

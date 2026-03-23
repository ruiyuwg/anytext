This topic describes the log fields for Object Storage Service (OSS).

## OSS log types

**Log type**

**Description**

Access logs

-   This feature must be enabled manually. For more information, see [Enable the log collection feature](/help/en/sls/enable-the-log-collection-feature-46).
    
-   Collects all access logs and deletion information from batch deletion logs for the specified OSS bucket in real time.
    
    **Note**
    
    -   When you call the DeleteObjects operation, a request record is generated in the access log.
        
    -   `oss-log-store` may contain both **Access Logs** and **Hourly Metering Logs** (which are different from the metering logs described below). `_topic_:oss_access_log` represents **Access Logs**, and `_topic_:oss_metering_log` represents **Hourly Metering Logs**.
        
    

Metering logs

-   Enabled by default for free.
    
-   Records the hourly accumulated metering data for a specific OSS bucket. The log collection time is several hours later than the actual generation time. These logs are used for auxiliary analysis.
    

Monitoring metrics

-   Enabled by default for free.
    
-   Records metrics such as requests, latency, and traffic at a 10-second granularity, and metrics such as requests and traffic at a 5-minute granularity.
    

## Access logs

**Field**

**Description**

\_\_topic\_\_

The log topic. The value is fixed to oss\_access\_log.

time

The time when the OSS request ended, for example, 27/Feb/2018:13:58:45.

If you need a timestamp, use the \_\_time\_\_ field.

access\_id

The AccessKey ID of the requester.

owner\_id

The Alibaba Cloud account ID of the OSS bucket owner.

user\_agent

The User-Agent header of the HTTP request, for example, curl/7.15.5.

logging\_flag

Indicates whether the feature that periodically exports logs to an OSS bucket is enabled. A value of true indicates that the feature is enabled.

bucket

The name of the OSS bucket.

content\_length\_in

The value of Content-Length in the request header. Unit: bytes.

content\_length\_out

The value of Content-Length in the response header. Unit: bytes.

object

The requested OSS object. The object is URL encoded.

When you query the object, run `select url_decode(object)` to decode it.

object\_size

The size of the OSS object. Unit: bytes.

operation

The API operation. For more information, see [Appendix: API operations](#section-z8x-xpl-qbi).

bucket\_location

The data center where the OSS bucket is located. The format is usually `oss-<region ID>`.

request\_uri

The URI of the HTTP request, including the query string. The URI is URL encoded.

When you query the URI, run `select url_decode(request_uri)` to decode it.

error\_code

The error code returned by OSS. For more information, see [OSS error codes](/help/en/oss/user-guide/overview-14#concept-dt2-hq3-wdb).

request\_length

The size of the HTTP request, including the header. Unit: bytes.

client\_ip

The IP address from which the request is initiated. This can be the IP address of the client, its network firewall, or a proxy.

response\_body\_length

The size of the body in the HTTP response, excluding the header.

http\_method

The HTTP request method.

referer

The HTTP Referer of the request.

requester\_id

The ID of the requester. If the access is anonymous, a hyphen (-) is displayed.

request\_id

The request ID.

response\_time

The HTTP response time. Unit: milliseconds.

server\_cost\_time

The time that the OSS server takes to process the request. Unit: milliseconds.

http\_type

The HTTP request type. Valid values: HTTP and HTTPS.

sign\_type

The signature type.

-   NotSign: The request is not signed.
    
-   NormalSign: The request is signed in a common way.
    
-   UriSign: The request is signed using a URL.
    
-   AdminSign: Specifies the administrator account.
    
-   NORMAL\_SIGN4: [V4 signature](/help/en/oss/developer-reference/guidelines-for-upgrading-v1-signatures-to-v4-signatures).
    
-   URI\_SIGN4: [V4 signature included in a URL](/help/en/oss/developer-reference/add-signatures-to-urls).
    

http\_status

The status returned for the HTTP request.

sync\_request

The synchronization request type.

-   Hyphen (-): a common request.
    
-   cdn: a back-to-origin request from CDN.
    
-   lifecycle: a request to set a lifecycle rule.
    

bucket\_storage\_type

The storage class of the OSS object.

-   standard: Standard
    
-   archive: Archive
    
-   IA: Infrequent Access
    

host

The endpoint used for the request, for example, bucket123.oss-cn-beijing.aliyuncs.com.

vpc\_addr

The Havip address of the VPC where OSS is located.

This address is an integer, for example, 343819108. Use `int_to_ip(cast(vpc_addr as bigint))` to convert it to an IP address. After the conversion, you must reverse the IP address. For example, if the conversion result is `9.58.XXX.XXX`, the reversed result is `XXX.XXX.58.9`.

vpc\_id

The ID of the VPC where OSS is located.

delta\_data\_size

The change in the size of the OSS object. If the size does not change, the value is 0. If the request is not an upload request, a hyphen (-) is returned.

ec

The detailed error code. To troubleshoot issues based on the error code, see [Troubleshoot issues based on ECs](/help/en/oss/support/self-troubleshooting-by-using-error-codes).

acc\_access\_region

If the request is a transfer acceleration request, this field indicates the region of the access point. Otherwise, a hyphen (-) is returned.

restore\_priority

The restoration priority.

extend\_information

An extended field. The default value is a hyphen (-).

If a request is initiated using a RAM role, the log records the information about the RAM role. The information is concatenated in the `requesterParentId,roleName,roleSessionName,roleOwnerId` format. The fields are separated by commas (,). New fields may be added.

user\_defined\_log\_fields

An extended field. The default value is a hyphen (-).

If you configure custom headers and parameters for the bucket, the log records the information about the matching headers and parameters. The value is the Base64 encoding of a JSON field.

archive\_direct\_read\_size

The billed size for real-time access of Archive objects generated by the request. If real-time access of Archive objects is not used, a hyphen (-) is returned. Unit: bytes.

## Metering logs

**Field**

**Description**

\_\_topic\_\_

The log topic. The value is fixed to oss\_metering\_log.

owner\_id

The Alibaba Cloud account ID of the OSS bucket owner.

bucket

The name of the OSS bucket.

cdn\_in

The inbound traffic from CDN. Unit: bytes.

cdn\_out

The outbound traffic to CDN. Unit: bytes.

metering\_datasize

The size of the metered data for non-Standard storage classes.

get\_request

The number of GET requests.

intranet\_in

The inbound traffic over the internal network. Unit: bytes.

intranet\_out

The outbound traffic over the internal network. Unit: bytes.

network\_in

The inbound traffic over the Internet. Unit: bytes.

network\_out

The outbound traffic over the Internet. Unit: bytes.

put\_request

The number of PUT requests.

storage

The storage usage of the OSS bucket. Unit: bytes.

storage\_type

The storage class of the OSS bucket.

-   standard: Standard
    
-   archive: Archive Storage
    
-   IA: Infrequent Access
    

process\_img\_size

The size of the processed image. Unit: bytes.

sync\_in

The inbound traffic for synchronization. Unit: bytes.

sync\_out

The outbound traffic for synchronization. Unit: bytes.

start\_time

The start timestamp of the metering. Unit: seconds.

end\_time

The end timestamp of the metering. Unit: seconds.

region

The region where the OSS bucket is located.

process\_img

The processed image.

bucket\_location

The data center where the OSS bucket is located. The format is usually oss-<region ID>.

standard\_total

Standard - Total physical capacity. Unit: bytes.

standard\_lrs

Standard - Locally redundant storage - Physical capacity. Unit: bytes.

standard\_zrs

Standard - Zone-redundant storage - Physical capacity. Unit: bytes.

ia\_total

IA storage class - Total physical capacity. Unit: bytes.

ia\_lrs

IA storage class - Locally redundant storage - Physical capacity. Unit: bytes.

ia\_zrs

IA storage class - Zone-redundant storage - Physical capacity. Unit: bytes.

ia\_total\_charged\_datasize

IA storage class - Total billable storage usage. Unit: bytes.

ia\_lrs\_charged\_datasize

IA storage class - Locally redundant storage - Billable storage usage. Unit: bytes.

ia\_zrs\_charged\_datasize

IA storage class - Zone-redundant storage - Billable storage usage. Unit: bytes.

archive\_total

Archive Storage - Total physical capacity. Unit: bytes.

archive\_lrs

Archive Storage - Locally redundant storage - Physical capacity. Unit: bytes.

archive\_zrs

Archive Storage - Zone-redundant storage - Physical capacity. Unit: bytes.

archive\_total\_charged\_datasize

Archive Storage - Total billable storage usage. Unit: bytes.

archive\_lrs\_charged\_datasize

Archive Storage - Locally redundant storage - Billable storage usage. Unit: bytes.

archive\_zrs\_charged\_datasize

Archive Storage - Zone-redundant storage - Billable storage usage. Unit: bytes.

coldarchive\_total

Cold Archive - Total physical capacity. Unit: bytes.

coldarchive\_lrs

Cold Archive - Locally redundant storage - Initial physical capacity. Unit: bytes.

coldarchive\_total\_charged\_datasize

Cold Archive - Total billable storage usage. Unit: bytes.

coldarchive\_lrs\_charged\_datasize

Cold Archive - Locally redundant storage - Billable storage usage. Unit: bytes.

deepcoldarchive\_total

Deep Cold Archive - Total physical capacity. Unit: bytes.

deepcoldarchive\_lrs

Deep Cold Archive - Locally redundant storage - Physical capacity. Unit: bytes.

deepcoldarchive\_total\_charged\_datasize

Deep Cold Archive - Total billable storage usage. Unit: bytes.

deepcoldarchive\_lrs\_charged\_datasize

Deep Cold Archive - Locally redundant storage - Billable storage usage. Unit: bytes.

reserved\_capacity

Reserved capacity - Total used capacity. Unit: bytes.

reserved\_capacity\_lrs

Reserved capacity - Locally redundant storage - Used capacity. Unit: bytes.

reserved\_capacity\_zrs

Reserved capacity - Zone-redundant storage - Used capacity. Unit: bytes.

total\_storage

Total physical capacity. Unit: bytes.

total\_storage\_charged\_datasize

Total billable storage usage (excluding Standard storage). Unit: bytes.

## Batch delete logs

When you call the DeleteObjects operation, a request record is generated in the access log. However, because the information about the deleted files is stored in the HTTP request body, the value of the object field in the access log is a hyphen (-). To view the list of deleted files, you need to check the batch delete log. The following table describes the fields of a batch delete log. You can associate the batch delete log with the access log using the request\_id field.

**Field name**

**Description**

\_\_topic\_\_

The log topic. The value is fixed to oss\_batch\_delete\_log.

bucket

The name of the OSS bucket.

bucket\_location

The data center where the OSS bucket is located. The format is oss-<region ID>.

client\_ip

The IP address from which the request is initiated. This can be the IP address of the client, its network firewall, or a proxy.

delta\_data\_size

The change in the size of the OSS object. If the size does not change, the value is 0. If the request is not an upload request, a hyphen (-) is returned.

error\_code

The error code returned by OSS. For more information, see [OSS error codes](/help/en/oss/user-guide/overview-14#undefined).

host

The endpoint used for the request, for example, bucket123.oss-cn-beijing.aliyuncs.com.

http\_method

The HTTP request method, for example, POST.

http\_status

The status returned for the HTTP request.

logging\_flag

Indicates whether the feature that periodically exports logs to an OSS bucket is enabled. A value of true indicates that the feature is enabled.

object

The requested OSS object. The object is URL encoded. When you query the object, run `select url_decode(object)` to decode it.

object\_size

The size of the OSS object. This corresponds to the size of the requested object. Unit: bytes.

operation

The API operation. For more information, see [Appendix: API operations](#section-z8x-xpl-qbi).

owner\_id

The Alibaba Cloud account ID of the OSS bucket owner.

response\_body\_length

The size of the HTTP response body, excluding the header.

request\_length

The size of the HTTP request, including the header. Unit: bytes.

referer

The HTTP Referer of the request.

request\_id

The request ID.

requester\_id

The ID of the requester. If the access is anonymous, a hyphen (-) is returned.

request\_uri

The URI of the request, including the query string. The URI is URL encoded. When you query the URI, run `select url_decode(request_uri)` to decode it.

sync\_request

The synchronization request type.

-   Hyphen (-): a common request.
    
-   cdn: a back-to-origin request from CDN.
    
-   lifecycle: a request to set a lifecycle rule.
    

server\_cost\_time

The time that the OSS server takes to process the request. Unit: milliseconds.

user\_agent

The User-Agent header of the HTTP request, for example, curl/7.15.5.

## Monitoring metrics

The metrics described in this topic follow the [metric data format](/help/en/sls/metric#concept-2539048). Use Prometheus Query Language (PromQL) or SQL to query and analyze the metrics. For more information, see [Syntax of query and analysis on metric data](/help/en/sls/time-metric-data-query-and-analysis-syntax#concept-2539032).

**Metric**

**Unit**

**Description**

**Labels**

private\_net\_in\_traffic\_10s

byte

Inbound traffic over the internal network per 10 seconds.

owner\_id, region, bucket, storage\_type, operation, sync\_type

private\_net\_out\_traffic\_10s

byte

Outbound traffic over the internal network per 10 seconds.

owner\_id, region, bucket, storage\_type, operation, sync\_type

public\_net\_in\_traffic\_10s

byte

Inbound traffic over the Internet per 10 seconds.

owner\_id, region, bucket, storage\_type, operation, sync\_type

public\_net\_out\_traffic\_10s

byte

Outbound traffic over the Internet per 10 seconds.

owner\_id, region, bucket, storage\_type, operation, sync\_type

cdn\_in\_10s

byte

Inbound traffic from CDN per 10 seconds.

owner\_id, region, bucket, storage\_type, operation, sync\_type

cdn\_out\_10s

byte

Outbound traffic to CDN per 10 seconds.

owner\_id, region, bucket, storage\_type, operation, sync\_type

sync\_in\_10s

byte

Inbound traffic for synchronization requests per 10 seconds.

owner\_id, region, bucket, storage\_type, operation, sync\_type

sync\_out\_10s

byte

Outbound traffic for synchronization requests per 10 seconds.

owner\_id, region, bucket, storage\_type, operation, sync\_type

request\_cnt\_total\_10s

Count

Total number of requests per 10 seconds.

owner\_id, region, bucket, storage\_type, operation, sync\_type

write\_qps\_10s

Count

Number of billable PUT, POST, and HEAD requests per 10 seconds.

owner\_id, region, bucket, storage\_type, operation, sync\_type

read\_qps\_10s

Count

Number of billable GET requests per 10 seconds.

owner\_id, region, bucket, storage\_type, operation, sync\_type

error\_4xx\_10s

Count

Number of 4xx requests per 10 seconds.

owner\_id, region, bucket, storage\_type, operation, sync\_type

error\_403\_10s

Count

Number of 403 requests per 10 seconds.

owner\_id, region, bucket, storage\_type, operation, sync\_type

error\_404\_10s

Count

Number of 404 requests per 10 seconds.

owner\_id, region, bucket, storage\_type, operation, sync\_type

error\_408\_10s

Count

Number of 408 requests per 10 seconds.

owner\_id, region, bucket, storage\_type, operation, sync\_type

error\_499\_10s

Count

Number of 499 requests per 10 seconds.

owner\_id, region, bucket, storage\_type, operation, sync\_type

error\_5xx\_10s

Count

Number of 5xx requests per 10 seconds.

owner\_id, region, bucket, storage\_type, operation, sync\_type

error\_503\_10s

Count

Number of 503 requests per 10 seconds.

owner\_id, region, bucket, storage\_type, operation, sync\_type

success\_2xx\_10s

Count

Number of 2xx requests per 10 seconds.

owner\_id, region, bucket, storage\_type, operation, sync\_type

success\_203\_10s

Count

Number of 203 requests per 10 seconds.

owner\_id, region, bucket, storage\_type, operation, sync\_type

success\_3xx\_10s

Count

Number of 3xx requests per 10 seconds.

owner\_id, region, bucket, storage\_type, operation, sync\_type

client\_latency\_10s

millisecond

Client-side latency per 10 seconds.

owner\_id, region, bucket, storage\_type, operation, sync\_type

server\_latency\_10s

millisecond

Server-side latency per 10 seconds.

owner\_id, region, bucket, storage\_type, operation, sync\_type

request\_cnt\_level4\_10s

Count

Number of requests per 10 seconds for files larger than 1 MB.

owner\_id, region, bucket, storage\_type, operation, sync\_type

client\_latency\_level4\_10s

millisecond

Client-side latency per 10 seconds for files larger than 1 MB.

owner\_id, region, bucket, storage\_type, operation, sync\_type

server\_latency\_level4\_10s

millisecond

Server-side latency per 10 seconds for files larger than 1 MB.

owner\_id, region, bucket, storage\_type, operation, sync\_type

request\_cnt\_level2\_10s

Count

Number of requests per 10 seconds for files that are 100 KB to 200 KB in size.

owner\_id, region, bucket, storage\_type, operation, sync\_type

client\_latency\_level2\_10s

millisecond

Client-side latency per 10 seconds for files that are 100 KB to 200 KB in size.

owner\_id, region, bucket, storage\_type, operation, sync\_type

server\_latency\_level2\_10s

millisecond

Server-side latency per 10 seconds for files that are 100 KB to 200 KB in size.

owner\_id, region, bucket, storage\_type, operation, sync\_type

request\_cnt\_level1\_10s

Count

Number of requests per 10 seconds for files smaller than 100 KB.

owner\_id, region, bucket, storage\_type, operation, sync\_type

client\_latency\_level1\_10s

millisecond

Client-side latency per 10 seconds for files smaller than 100 KB.

owner\_id, region, bucket, storage\_type, operation, sync\_type

server\_latency\_level1\_10s

millisecond

Server-side latency per 10 seconds for files smaller than 100 KB.

owner\_id, region, bucket, storage\_type, operation, sync\_type

request\_cnt\_level3\_10s

Count

Number of requests per 10 seconds for files that are 200 KB to 1 MB in size.

owner\_id, region, bucket, storage\_type, operation, sync\_type

client\_latency\_level3\_10s

millisecond

Client-side latency per 10 seconds for files that are 200 KB to 1 MB in size.

owner\_id, region, bucket, storage\_type, operation, sync\_type

server\_latency\_level3\_10s

millisecond

Server-side latency per 10 seconds for files that are 200 KB to 1 MB in size.

owner\_id, region, bucket, storage\_type, operation, sync\_type

error\_timeout\_10s

Count

Number of timed-out requests per 10 seconds.

owner\_id, region, bucket, storage\_type, operation, sync\_type

delta\_add\_10s

byte

Storage increment per 10 seconds.

owner\_id, region, bucket, storage\_type, operation, sync\_type

delta\_del\_10s

byte

Storage decrement per 10 seconds.

owner\_id, region, bucket, storage\_type, operation, sync\_type

top\_object\_pv\_5m

Count

Number of visits to top files per 5 minutes.

owner\_id, region, bucket, storage\_type, object

top\_object\_bandwidth\_out\_5m

byte

Outbound traffic of top files per 5 minutes.

owner\_id, region, bucket, storage\_type, object

top\_object\_bandwidth\_in\_5m

byte

Inbound traffic of top files per 5 minutes.

owner\_id, region, bucket, storage\_type, object

top\_ip\_method\_pv\_5m

Count

Number of visits from top IP addresses per 5 minutes.

owner\_id, region, bucket, storage\_type, operation, client\_ip

top\_ip\_method\_bandwidth\_out\_5m

byte

Outbound traffic from top IP addresses per 5 minutes.

owner\_id, region, bucket, storage\_type, operation, client\_ip

top\_ip\_method\_bandwidth\_in\_5m

byte

Inbound traffic from top IP addresses per 5 minutes.

owner\_id, region, bucket, storage\_type, operation, client\_ip

top\_ip\_storage\_pv\_5m

Count

Number of visits from top IP addresses per 5 minutes.

owner\_id, region, bucket, storage\_type, client\_ip

top\_ip\_storage\_bandwidth\_out\_5m

byte

Outbound traffic from top IP addresses per 5 minutes.

owner\_id, region, bucket, storage\_type, client\_ip

top\_ip\_storage\_bandwidth\_in\_5m

byte

Inbound traffic from top IP addresses per 5 minutes.

owner\_id, region, bucket, storage\_type, client\_ip

top\_refer\_pv\_5m

Count

Number of visits from top referers per 5 minutes.

owner\_id, region, bucket, storage\_type, refer

The following table describes the label fields.

**Label field**

**Description**

owner\_id

The Alibaba Cloud account ID of the OSS bucket owner.

region

The region where the OSS bucket is located.

bucket

The name of the OSS bucket.

object

The name of the OSS object.

storage\_type

The storage class of the OSS bucket.

operation

The API operation. For more information, see [Appendix: API operations](#section-z8x-xpl-qbi).

sync\_type

The synchronization type.

client\_ip

The source IP address of the access request.

refer

The HTTP Referer of the request.

## Appendix: API operations

The following table lists the API operations. For more information, see [API overview](/help/en/oss/developer-reference/list-of-operations-by-function#reference-wrz-l2q-tdb).

**Operation**

**Description**

AbortMultiPartUpload

Aborts a multipart upload.

AppendObject

Appends data by uploading a file.

CompleteUploadPart

Completes the breakpoint upload.

CopyObject

Copies the file.

DeleteBucket

Deletes a bucket.

DeleteLiveChannel

Deletes a LiveChannel.

DeleteObject

Deletes an object.

DeleteObjects

Deletes multiple objects.

ExpireObject

Deletes an expired object.

GetBucket

Lists objects.

GetBucketAcl

Gets the access control list (ACL) of a bucket.

GetBucketCors

Qets the cross-origin resource sharing (CORS) rules of a bucket.

GetBucketEventNotification

Gets the notification configurations of a bucket.

GetBucketInfo

Qets the information about a bucket.

GetBucketLifecycle

Qets the lifecycle configuration of a bucket.

GetBucketLocation

Qets the region of a bucket.

GetBucketLog

Qets the access log configuration of a bucket.

GetBucketReferer

Qets the hotlink protection settings of a bucket.

GetBucketReplication

Qets the cross-region replication (CRR) configuration.

GetBucketReplicationProgress

Qets the CRR progress.

GetBucketStat

Qets the information about a bucket.

GetBucketWebSite

Qets the static website hosting status of a bucket.

get\_image\_exif

Qets the EXIF information of an image.

get\_image\_info

Qets the information about an image, such as its height and width.

get\_image\_infoexif

Qets the height, width, and EXIF information of an image.

GetLiveChannelStat

Qets the status information of a LiveChannel.

GetObject

Reads the object.

GetObjectAcl

Obtains object access permissions.

GetObjectInfo

Gets the information about an object.

GetObjectMeta

Qets the object meta information.

GetObjectSymlink

Gets the details of a symbolic link file.

GetPartData

Gets the data of a part in a multipart upload.

GetPartInfo

Gets the information about a part in a multipart upload.

GetProcessConfiguration

Gets the image processing configuration of a bucket.

GetService

Lists buckets.

get\_style

Gets a bucket style.

HeadBucket

Queies the information about a bucket.

HeadObject

Views file information.

InitiateMultipartUpload

Initiates a multipart upload.

ListMultiPartUploads

Lists multipart upload tasks in progress.

ListParts

Lists the status of parts in a multipart upload.

list\_style

Lists the styles of a bucket.

PostObject

Uploads an object using a form.

PostProcessTask

Submits a data processing task, such as taking a screenshot.

PostVodPlaylist

Creates a video-on-demand (VOD) playlist for a LiveChannel.

ProcessImage

Processes an image.

PutBucket

Creates a bucket.

PutBucketCors

Configures the CORS rules for a bucket.

PutBucketLifecycle

Configures the lifecycle rules for a bucket.

PutBucketLog

Configures access logs for a bucket.

PutBucketWebSite

Configures the static website hosting mode for a bucket.

PutLiveChannel

Creates a LiveChannel.

PutLiveChannelStatus

Sets the status of a LiveChannel.

PutObject

Uploads files.

PutObjectAcl

Modifies file access permissions.

PutObjectSymlink

Creates a symbolic link file.

put\_style

Creates a bucket style.

RedirectBucket

Redirects a bucket endpoint.

RestoreObject

Restores the file.

UploadPart

Uploads data by part.

UploadPartCopy

Copies a part.

This topic outlines the API operations for managing objects.

## List of API operations

The following table describes the API features related to basic operations.

**Classification**

**API**

**Description**

Upload objects

[PutObject](/help/en/oss/developer-reference/putobject#title-pra-1h6-c74)

Upload a single object. The size of the uploaded object cannot exceed 5 GB.

[AppendObject](/help/en/oss/developer-reference/appendobject#title-xa5-d1m-864)

Upload an object by appending data. The size of the appended object cannot exceed 5 GB.

[PostObject](/help/en/oss/developer-reference/postobject#title-rur-jiq-8ge)

Upload objects by using HTML forms. The size of the uploaded object cannot exceed 5 GB.

[Callback](/help/en/oss/developer-reference/callback#title-ewc-amp-w7h)

Configure upload callbacks by adding the related callback parameters to the request sent to OSS. Only the [PutObject](/help/en/oss/developer-reference/putobject#reference-l5p-ftw-tdb), [PostObject](/help/en/oss/developer-reference/postobject#reference-smp-nsw-wdb), and [CompleteMultipartUpload](/help/en/oss/developer-reference/completemultipartupload#reference-lq1-dtx-wdb) operations support callbacks.

Query objects

[GetObject](/help/en/oss/developer-reference/getobject#title-al9-811-n1f)

Query an object.

[HeadObject](/help/en/oss/developer-reference/headobject#title-6xg-0fp-ws3)

Query the metadata of an object. The content of the object is not returned in the response.

[GetObjectMeta](/help/en/oss/developer-reference/getobjectmeta#title-czf-pc0-6zs)

Query the metadata of an object, including the ETag, size, and last modified time of the object. The content of the object is not returned in the response.

Delete objects

[DeleteObject](/help/en/oss/developer-reference/deleteobject#title-pbb-zhw-1by)

Delete an object.

[DeleteMultipleObjects](/help/en/oss/developer-reference/deletemultipleobjects#title-lm7-88z-tny)

Delete multiple objects.

Copy objects

[CopyObject](/help/en/oss/developer-reference/copyobject#title-ltb-2rv-tej)

Copy objects within a bucket or between buckets in the same region.

Restore objects

[RestoreObject](/help/en/oss/developer-reference/restoreobject#title-45v-u48-atd)

Restore Archive, Cold Archive, and Deep Cold Archive objects.

SQL queries

[SelectObject](/help/en/oss/developer-reference/selectobject#title-wet-zfa-l75)

Execute SQL statements to perform operations on an object and obtains the execution results.

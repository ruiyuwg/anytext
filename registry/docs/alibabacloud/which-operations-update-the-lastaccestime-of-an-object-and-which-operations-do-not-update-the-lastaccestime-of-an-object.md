`LastAccessTime` records when an OSS object was last accessed. It drives lifecycle rules that transition or expire objects based on access recency, and it affects billing. To track access times, [enable access tracking](https://www.alibabacloud.com/help/en/oss/user-guide/enable-access-tracking) on the bucket first.

The following table lists which operations update `LastAccessTime` and which do not.

**Operation**

**Description**

**Effect on LastAccessTime**

CopyObject

Copies a source object to a different destination object.

Updated on the destination object. The source object is not affected.

CopyObject

Copies an object to itself to modify its ACL, user metadata, storage class, and encryption type.

Updated.

PutObjectACL

Modifies the ACL of an object.

Updated.

PutObject, PostObject, CompleteMultipartUpload

Overwrites an existing object.

Updated.

AppendObject (versioned bucket)

Appends content to an object in a versioned bucket.

Not updated. OSS appends new content to the latest object version rather than creating a separate version per append. Only the first AppendObject operation on an object records a `LastAccessTime`; subsequent operations do not update it.

AppendObject (non-versioned bucket)

Appends content to an object in a non-versioned bucket.

Updated.

GetObject (data access)

Retrieves object data.

Updated. If the object is accessed through a symbolic link, the `LastAccessTime` of the linked object is also updated.

GetObject (image processing)

Processes an image stored as an object.

Not updated.

SelectObject

Runs a SQL query against an object.

Not updated.

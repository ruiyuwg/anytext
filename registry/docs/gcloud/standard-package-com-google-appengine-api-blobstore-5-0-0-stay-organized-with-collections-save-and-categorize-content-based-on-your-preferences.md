-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Application hosting](https://docs.cloud.google.com/docs/application-hosting)
-   [App Engine](https://docs.cloud.google.com/appengine/docs)
-   [Standard environment](https://docs.cloud.google.com/appengine/docs/standard)
-   [Référence](https://docs.cloud.google.com/appengine/docs/standard/apis)

Send feedback

# Package com.google.appengine.api.blobstore (5.0.0) Stay organized with collections Save and categorize content based on your preferences.

Provides management and persistent storage of large, immutable byte arrays. This allows applications to accept, save, and later serve files of any size. See Also: [com.google.appengine.api.blobstore.BlobstoreService](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.blobstore.BlobstoreService), [The Blobstore Java API in the _Google App Engine Developer's Guide_](http://cloud.google.com/appengine/docs/java/blobstore/).

## Classes

### [BlobInfo](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.blobstore.BlobInfo)

`BlobInfo` contains metadata about a blob. This metadata is gathered by parsing the HTTP headers included in the blob upload. See Also: [RFC 1867](http://tools.ietf.org/html/rfc1867) for the specification of HTTP file uploads.

### [BlobInfoFactory](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.blobstore.BlobInfoFactory)

`BlobInfoFactory` provides a trivial interface for retrieving [BlobInfo](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.blobstore.BlobInfo) metadata.

BlobInfo metadata is stored in read-only `**BlobInfo**` entities in the datastore. This class provides an easy way to access these entities. For more complex queries, you can use the datastore directly.

### [BlobKey](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.blobstore.BlobKey)

`BlobKey` contains the string identifier of a large (possibly larger than 1MB) blob of binary data that was uploaded in a previous request and can be streamed directly to users.

### [BlobstoreInputStream](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.blobstore.BlobstoreInputStream)

BlobstoreInputStream provides an InputStream view of a blob in Blobstore.

It is thread compatible but not thread safe: there is no static state, but any multithreaded use must be externally synchronized.

### [BlobstoreServiceFactory](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.blobstore.BlobstoreServiceFactory)

Creates [BlobstoreService](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.blobstore.BlobstoreService) implementations.

### [BlobstoreServicePb](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.blobstore.BlobstoreServicePb)

### [BlobstoreServicePb.BlobstoreServiceError](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.blobstore.BlobstoreServicePb.BlobstoreServiceError)

### [BlobstoreServicePb.BlobstoreServiceError.Builder](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.blobstore.BlobstoreServicePb.BlobstoreServiceError.Builder)

### [BlobstoreServicePb.CloneBlobRequest](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.blobstore.BlobstoreServicePb.CloneBlobRequest)

### [BlobstoreServicePb.CloneBlobRequest.Builder](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.blobstore.BlobstoreServicePb.CloneBlobRequest.Builder)

### [BlobstoreServicePb.CloneBlobResponse](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.blobstore.BlobstoreServicePb.CloneBlobResponse)

### [BlobstoreServicePb.CloneBlobResponse.Builder](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.blobstore.BlobstoreServicePb.CloneBlobResponse.Builder)

### [BlobstoreServicePb.CreateEncodedGoogleStorageKeyRequest](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.blobstore.BlobstoreServicePb.CreateEncodedGoogleStorageKeyRequest)

### [BlobstoreServicePb.CreateEncodedGoogleStorageKeyRequest.Builder](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.blobstore.BlobstoreServicePb.CreateEncodedGoogleStorageKeyRequest.Builder)

### [BlobstoreServicePb.CreateEncodedGoogleStorageKeyResponse](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.blobstore.BlobstoreServicePb.CreateEncodedGoogleStorageKeyResponse)

### [BlobstoreServicePb.CreateEncodedGoogleStorageKeyResponse.Builder](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.blobstore.BlobstoreServicePb.CreateEncodedGoogleStorageKeyResponse.Builder)

### [BlobstoreServicePb.CreateUploadURLRequest](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.blobstore.BlobstoreServicePb.CreateUploadURLRequest)

### [BlobstoreServicePb.CreateUploadURLRequest.Builder](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.blobstore.BlobstoreServicePb.CreateUploadURLRequest.Builder)

### [BlobstoreServicePb.CreateUploadURLResponse](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.blobstore.BlobstoreServicePb.CreateUploadURLResponse)

### [BlobstoreServicePb.CreateUploadURLResponse.Builder](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.blobstore.BlobstoreServicePb.CreateUploadURLResponse.Builder)

### [BlobstoreServicePb.DecodeBlobKeyRequest](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.blobstore.BlobstoreServicePb.DecodeBlobKeyRequest)

### [BlobstoreServicePb.DecodeBlobKeyRequest.Builder](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.blobstore.BlobstoreServicePb.DecodeBlobKeyRequest.Builder)

### [BlobstoreServicePb.DecodeBlobKeyResponse](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.blobstore.BlobstoreServicePb.DecodeBlobKeyResponse)

### [BlobstoreServicePb.DecodeBlobKeyResponse.Builder](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.blobstore.BlobstoreServicePb.DecodeBlobKeyResponse.Builder)

### [BlobstoreServicePb.DeleteBlobRequest](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.blobstore.BlobstoreServicePb.DeleteBlobRequest)

### [BlobstoreServicePb.DeleteBlobRequest.Builder](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.blobstore.BlobstoreServicePb.DeleteBlobRequest.Builder)

### [BlobstoreServicePb.FetchDataRequest](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.blobstore.BlobstoreServicePb.FetchDataRequest)

### [BlobstoreServicePb.FetchDataRequest.Builder](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.blobstore.BlobstoreServicePb.FetchDataRequest.Builder)

### [BlobstoreServicePb.FetchDataResponse](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.blobstore.BlobstoreServicePb.FetchDataResponse)

### [BlobstoreServicePb.FetchDataResponse.Builder](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.blobstore.BlobstoreServicePb.FetchDataResponse.Builder)

### [ByteRange](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.blobstore.ByteRange)

A byte range as parsed from a request Range header. Format produced by this class is also compatible with the X-AppEngine-BlobRange header, used for serving sub-ranges of blobs.

### [FileInfo](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.blobstore.FileInfo)

`FileInfo` contains metadata about an uploaded file. This metadata is gathered by parsing the HTTP headers included in the file upload. See Also: [RFC 1867](http://tools.ietf.org/html/rfc1867) for the specification of HTTP file uploads.

### [IBlobstoreServiceFactoryProvider](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.blobstore.IBlobstoreServiceFactoryProvider)

Factory provider for [IBlobstoreServiceFactory](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.blobstore.IBlobstoreServiceFactory).

**Note:** This class is not intended for end users.

### [UploadOptions](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.blobstore.UploadOptions)

Allows users to customize the behavior of a single upload to the [BlobstoreService](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.blobstore.jakarta.BlobstoreService).

### [UploadOptions.Builder](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.blobstore.UploadOptions.Builder)

Contains static creation methods for [UploadOptions](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.blobstore.UploadOptions).

## Interfaces

### [BlobstoreService](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.blobstore.BlobstoreService)

`BlobstoreService` allows you to manage the creation and serving of large, immutable blobs to users.

### [BlobstoreServicePb.BlobstoreServiceErrorOrBuilder](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.blobstore.BlobstoreServicePb.BlobstoreServiceErrorOrBuilder)

### [BlobstoreServicePb.CloneBlobRequestOrBuilder](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.blobstore.BlobstoreServicePb.CloneBlobRequestOrBuilder)

### [BlobstoreServicePb.CloneBlobResponseOrBuilder](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.blobstore.BlobstoreServicePb.CloneBlobResponseOrBuilder)

### [BlobstoreServicePb.CreateEncodedGoogleStorageKeyRequestOrBuilder](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.blobstore.BlobstoreServicePb.CreateEncodedGoogleStorageKeyRequestOrBuilder)

### [BlobstoreServicePb.CreateEncodedGoogleStorageKeyResponseOrBuilder](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.blobstore.BlobstoreServicePb.CreateEncodedGoogleStorageKeyResponseOrBuilder)

### [BlobstoreServicePb.CreateUploadURLRequestOrBuilder](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.blobstore.BlobstoreServicePb.CreateUploadURLRequestOrBuilder)

### [BlobstoreServicePb.CreateUploadURLResponseOrBuilder](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.blobstore.BlobstoreServicePb.CreateUploadURLResponseOrBuilder)

### [BlobstoreServicePb.DecodeBlobKeyRequestOrBuilder](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.blobstore.BlobstoreServicePb.DecodeBlobKeyRequestOrBuilder)

### [BlobstoreServicePb.DecodeBlobKeyResponseOrBuilder](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.blobstore.BlobstoreServicePb.DecodeBlobKeyResponseOrBuilder)

### [BlobstoreServicePb.DeleteBlobRequestOrBuilder](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.blobstore.BlobstoreServicePb.DeleteBlobRequestOrBuilder)

### [BlobstoreServicePb.FetchDataRequestOrBuilder](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.blobstore.BlobstoreServicePb.FetchDataRequestOrBuilder)

### [BlobstoreServicePb.FetchDataResponseOrBuilder](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.blobstore.BlobstoreServicePb.FetchDataResponseOrBuilder)

### [IBlobstoreServiceFactory](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.blobstore.IBlobstoreServiceFactory)

Creates [BlobstoreService](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.blobstore.BlobstoreService) implementations.

## Enums

### [BlobstoreServicePb.BlobstoreServiceError.ErrorCode](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.blobstore.BlobstoreServicePb.BlobstoreServiceError.ErrorCode)

## Exceptions

### [BlobstoreFailureException](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.blobstore.BlobstoreFailureException)

`BlobstoreFailureException` is an unchecked exception that is thrown for any unexpected error that occurs while communicating with the blobstore.

### [BlobstoreInputStream.BlobstoreIOException](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.blobstore.BlobstoreInputStream.BlobstoreIOException)

A subclass of [IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html) that indicates that there was a problem interacting with Blobstore.

### [BlobstoreInputStream.ClosedStreamException](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.blobstore.BlobstoreInputStream.ClosedStreamException)

A subclass of [IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html) that indicates operations on a stream after it is closed.

### [RangeFormatException](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.blobstore.RangeFormatException)

`RangeFormatException` is an unchecked exception that is thrown when an invalid Range header format is provided.

### [UnsupportedRangeFormatException](/appengine/docs/standard/java-gen2/reference/services/bundled/latest/com.google.appengine.api.blobstore.UnsupportedRangeFormatException)

`UnsupportedRangeFormatException` is an unchecked exception that is thrown when an valid but unsupported Range header format is provided.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-02-28 UTC.

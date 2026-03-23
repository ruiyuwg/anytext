-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface Storage (2.27.1) Stay organized with collections Save and categorize content based on your preferences.

2.64.0 (latest) 2.63.0 2.62.1 2.60.0 2.59.0 2.58.1 2.57.0 2.56.0 2.55.0 2.54.0 2.53.3 2.52.3 2.50.0 2.49.0 2.48.2 2.47.0 2.46.0 2.45.0 2.44.1 2.43.2 2.42.0 2.41.0 2.40.1 2.39.0 2.38.0 2.37.0 2.36.1 2.34.0 2.33.0 2.32.1 2.30.1 2.29.1 2.28.0 2.27.1 2.24.0 2.23.0 2.22.6 2.21.0 2.20.2 2.19.0 2.18.0 2.17.2 2.16.0 2.15.1 2.14.0 2.13.1 2.12.0 2.11.3 2.10.0 2.9.3 2.8.1 2.7.1 2.6.1 2.5.1 2.4.5 2.3.0 2.2.3 2.1.10

```
public interface Storage extends Service<StorageOptions>, AutoCloseable
```

An interface for Google Cloud Storage. See Also: [Google Cloud Storage](https://cloud.google.com/storage/docs)

## Implements

com.google.cloud.Service<com.google.cloud.storage.StorageOptions>, [AutoCloseable](https://docs.oracle.com/javase/8/docs/api/java/lang/AutoCloseable.html)

## Methods

### batch()

```
public abstract StorageBatch batch()
```

Creates a new empty batch for grouping multiple service calls in one underlying RPC call.

Example of using a batch request to delete, update and get a blob.

 ```

 String bucketName = "my-unique-bucket";
 String blobName1 = "my-blob-name1";
 String blobName2 = "my-blob-name2";
 StorageBatch batch = storage.batch();
 BlobId firstBlob = BlobId.of(bucketName, blobName1);
 BlobId secondBlob = BlobId.of(bucketName, blobName2);
 batch.delete(firstBlob).notify(new BatchResult.Callback<Boolean, StorageException>() {
   public void success(Boolean result) {
     // deleted successfully
   }

   public void error(StorageException exception) {
     // delete failed
   }
 });
 batch.update(BlobInfo.newBuilder(secondBlob).setContentType("text/plain").build());
 StorageBatchResult<Blob> result = batch.get(secondBlob);
 batch.submit();
 Blob blob = result.get(); // returns get result or throws StorageException
 
```
 

**Returns**

**Type**

**Description**

`[StorageBatch](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.StorageBatch)`

### blobWriteSession(BlobInfo blobInfo, Storage.BlobWriteOption\[\] options)

```
public default BlobWriteSession blobWriteSession(BlobInfo blobInfo, Storage.BlobWriteOption[] options)
```

Create a new [BlobWriteSession](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.BlobWriteSession) for the specified `blobInfo` and `options`.

The returned `BlobWriteSession` can be used to write an individual version, a new session must be created each time you want to create a new version.

By default, any MD5 value in the provided `blobInfo` is ignored unless the option [BlobWriteOption#md5Match()](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.BlobWriteOption#com_google_cloud_storage_Storage_BlobWriteOption_md5Match_) is included in `options`.

By default, any CRC32c value in the provided `blobInfo` is ignored unless the option [BlobWriteOption#crc32cMatch()](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.BlobWriteOption#com_google_cloud_storage_Storage_BlobWriteOption_crc32cMatch_) is included in `options`.

#### Example of creating an object using `BlobWriteSession`:

 ```

 String bucketName = "my-unique-bucket";
 String blobName = "my-blob-name";
 BlobId blobId = BlobId.of(bucketName, blobName);
 BlobInfo blobInfo = BlobInfo.newBuilder(blobId).build();
 ReadableByteChannel readableByteChannel = ...;
 BlobWriteSession blobWriteSession = storage.blobWriteSession(blobInfo, BlobWriteOption.doesNotExist());

 // open the channel for writing
 try (WritableByteChannel writableByteChannel = blobWriteSession.open()) {
   // copy all bytes
   ByteStreams.copy(readableByteChannel, writableByteChannel);
 } catch (IOException e) {
   // handle IOException
 }

 // get the resulting object metadata
 ApiFuture<BlobInfo> resultFuture = blobWriteSession.getResult();
 BlobInfo gen1 = resultFuture.get();
 
```
 

See Also: [BlobWriteSessionConfigs](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.BlobWriteSessionConfigs), [BlobWriteSessionConfig](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.BlobWriteSessionConfig), GrpcStorageOptions.Builder#setBlobWriteSessionConfig(BlobWriteSessionConfig)

**Parameters**

**Name**

**Description**

`blobInfo`

`[BlobInfo](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.BlobInfo)`  

blob to create

`options`

`[BlobWriteOption](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.BlobWriteOption)[]`  

blob write options

**Returns**

**Type**

**Description**

`[BlobWriteSession](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.BlobWriteSession)`

### close()

```
public default void close()
```

**Exceptions**

**Type**

**Description**

`[Exception](https://docs.oracle.com/javase/8/docs/api/java/lang/Exception.html)`

thrown if interrupted while awaiting termination of underlying resources

### compose(Storage.ComposeRequest composeRequest)

```
public abstract Blob compose(Storage.ComposeRequest composeRequest)
```

Sends a compose request.

Accepts an optional userProject [BlobTargetOption](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.BlobTargetOption) option which defines the project id to assign operational costs.

Example of composing two blobs.

 ```

 String bucketName = "my-unique-bucket";
 String blobName = "my-blob-name";
 String sourceBlob1 = "source_blob_1";
 String sourceBlob2 = "source_blob_2";
 BlobId blobId = BlobId.of(bucketName, blobName);
 BlobInfo blobInfo = BlobInfo.newBuilder(blobId).setContentType("text/plain").build();
 ComposeRequest request = ComposeRequest.newBuilder()
     .setTarget(blobInfo)
     .addSource(sourceBlob1)
     .addSource(sourceBlob2)
     .build();
 Blob blob = storage.compose(request);
 
```
 

**Parameter**

**Name**

**Description**

`composeRequest`

`[Storage.ComposeRequest](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.ComposeRequest)`  

**Returns**

**Type**

**Description**

`[Blob](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Blob)`

the composed blob

### copy(Storage.CopyRequest copyRequest)

```
public abstract CopyWriter copy(Storage.CopyRequest copyRequest)
```

Sends a copy request. This method copies both blob's data and information. To override source blob's information supply a `BlobInfo` to the `CopyRequest` using either Storage.CopyRequest.Builder#setTarget(BlobInfo, Storage.BlobTargetOption...) or [Storage.CopyRequest.Builder#setTarget(BlobInfo, Iterable)](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.CopyRequest.Builder#com_google_cloud_storage_Storage_CopyRequest_Builder_setTarget_com_google_cloud_storage_BlobInfo_java_lang_Iterable_com_google_cloud_storage_Storage_BlobTargetOption__).

This method returns a [CopyWriter](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.CopyWriter) object for the provided `CopyRequest`. If source and destination objects share the same location and storage class the source blob is copied with one request and [CopyWriter#getResult()](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.CopyWriter#com_google_cloud_storage_CopyWriter_getResult__) immediately returns, regardless of the CopyRequest#megabytesCopiedPerChunk parameter. If source and destination have different location or storage class [CopyWriter#getResult()](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.CopyWriter#com_google_cloud_storage_CopyWriter_getResult__) might issue multiple RPC calls depending on blob's size.

Example of copying a blob.

 ```

 String bucketName = "my-unique-bucket";
 String blobName = "my-blob-name";
 String copyBlobName = "copy_blob_name";
 CopyRequest request = CopyRequest.newBuilder()
     .setSource(BlobId.of(bucketName, blobName))
     .setTarget(BlobId.of(bucketName, copyBlobName))
     .build();
 Blob blob = storage.copy(request).getResult();
 
```
 

Example of copying a blob in chunks.

 ```

 String bucketName = "my-unique-bucket";
 String blobName = "my-blob-name";
 String copyBlobName = "copy_blob_name";
 CopyRequest request = CopyRequest.newBuilder()
     .setSource(BlobId.of(bucketName, blobName))
     .setTarget(BlobId.of(bucketName, copyBlobName))
     .build();
 CopyWriter copyWriter = storage.copy(request);
 while (!copyWriter.isDone()) {
   copyWriter.copyChunk();
 }
 Blob blob = copyWriter.getResult();
 
```
 

Example of rotating the encryption key of a blob.

 ```

 String bucketName = "my-unique-bucket";
 String blobName = "my-blob-name";
 String oldEncryptionKey = "old_encryption_key";
 String newEncryptionKey = "new_encryption_key";
 BlobId blobId = BlobId.of(bucketName, blobName);
 CopyRequest request = CopyRequest.newBuilder()
     .setSource(blobId)
     .setSourceOptions(BlobSourceOption.decryptionKey(oldEncryptionKey))
     .setTarget(blobId, BlobTargetOption.encryptionKey(newEncryptionKey))
     .build();
 Blob blob = storage.copy(request).getResult();
 
```
 

See Also: [Rewrite](https://cloud.google.com/storage/docs/json_api/v1/objects/rewrite)

**Parameter**

**Name**

**Description**

`copyRequest`

`[Storage.CopyRequest](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.CopyRequest)`  

**Returns**

**Type**

**Description**

`[CopyWriter](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.CopyWriter)`

a [CopyWriter](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.CopyWriter) object that can be used to get information on the newly created blob or to complete the copy if more than one RPC request is needed

### create(BlobInfo blobInfo, byte\[\] content, Storage.BlobTargetOption\[\] options)

```
public abstract Blob create(BlobInfo blobInfo, byte[] content, Storage.BlobTargetOption[] options)
```

Creates a new blob. Direct upload is used to upload `content`. For large content, [#writer](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage#com_google_cloud_storage_Storage_writer_) is recommended as it uses resumable upload. MD5 and CRC32C hashes of `content` are computed and used for validating transferred data. Accepts an optional userProject [BlobGetOption](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.BlobGetOption) option which defines the project id to assign operational costs. The content type is detected from the blob name if not explicitly set. Note that all [non-editable metadata](https://cloud.google.com/storage/docs/metadata#fixed), such as generation or metageneration, will be ignored even if it's present in the provided BlobInfo object.

Example of creating a blob from a byte array:

 ```

 String bucketName = "my-unique-bucket";
 String blobName = "my-blob-name";
 BlobId blobId = BlobId.of(bucketName, blobName);
 BlobInfo blobInfo = BlobInfo.newBuilder(blobId).setContentType("text/plain").build();
 Blob blob = storage.create(blobInfo, "Hello, World!".getBytes(UTF_8));
 
```
 

See Also: [Hashes and ETags](https://cloud.google.com/storage/docs/hashes-etags)

**Parameters**

**Name**

**Description**

`blobInfo`

`[BlobInfo](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.BlobInfo)`  

`content`

`byte[]`  

`options`

`[BlobTargetOption](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.BlobTargetOption)[]`  

**Returns**

**Type**

**Description**

`[Blob](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Blob)`

a `Blob` with complete information

### create(BlobInfo blobInfo, byte\[\] content, int offset, int length, Storage.BlobTargetOption\[\] options)

```
public abstract Blob create(BlobInfo blobInfo, byte[] content, int offset, int length, Storage.BlobTargetOption[] options)
```

Creates a new blob with the sub array of the given byte array. Direct upload is used to upload `content`. For large content, [#writer](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage#com_google_cloud_storage_Storage_writer_) is recommended as it uses resumable upload. MD5 and CRC32C hashes of `content` are computed and used for validating transferred data. Accepts a userProject [BlobGetOption](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.BlobGetOption) option, which defines the project id to assign operational costs. Note that all [non-editable metadata](https://cloud.google.com/storage/docs/metadata#fixed), such as generation or metageneration, will be ignored even if it's present in the provided BlobInfo object.

Example of creating a blob from a byte array:

 ```

 String bucketName = "my-unique-bucket";
 String blobName = "my-blob-name";
 BlobId blobId = BlobId.of(bucketName, blobName);
 BlobInfo blobInfo = BlobInfo.newBuilder(blobId).setContentType("text/plain").build();
 Blob blob = storage.create(blobInfo, "Hello, World!".getBytes(UTF_8), 7, 5);
 
```
 

See Also: [Hashes and ETags](https://cloud.google.com/storage/docs/hashes-etags)

**Parameters**

**Name**

**Description**

`blobInfo`

`[BlobInfo](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.BlobInfo)`  

`content`

`byte[]`  

`offset`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`length`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`options`

`[BlobTargetOption](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.BlobTargetOption)[]`  

**Returns**

**Type**

**Description**

`[Blob](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Blob)`

a `Blob` with complete information

### create(BlobInfo blobInfo, Storage.BlobTargetOption\[\] options)

```
public abstract Blob create(BlobInfo blobInfo, Storage.BlobTargetOption[] options)
```

Creates a new blob with no content. Note that all [non-editable metadata](https://cloud.google.com/storage/docs/metadata#fixed), such as generation or metageneration, will be ignored even if it's present in the provided BlobInfo object.

Example of creating a blob with no content.

 ```

 String bucketName = "my-unique-bucket";
 String blobName = "my-blob-name";
 BlobId blobId = BlobId.of(bucketName, blobName);
 BlobInfo blobInfo = BlobInfo.newBuilder(blobId).setContentType("text/plain").build();
 Blob blob = storage.create(blobInfo);
 
```
 

**Parameters**

**Name**

**Description**

`blobInfo`

`[BlobInfo](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.BlobInfo)`  

`options`

`[BlobTargetOption](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.BlobTargetOption)[]`  

**Returns**

**Type**

**Description**

`[Blob](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Blob)`

a `Blob` with complete information

### create(BlobInfo blobInfo, InputStream content, Storage.BlobWriteOption\[\] options)

```
public abstract Blob create(BlobInfo blobInfo, InputStream content, Storage.BlobWriteOption[] options)
```

Creates a new blob. Direct upload is used to upload `content`. For large content, [#writer](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage#com_google_cloud_storage_Storage_writer_) is recommended as it uses resumable upload. By default any MD5 and CRC32C values in the given `blobInfo` are ignored unless requested via the `BlobWriteOption.md5Match` and `BlobWriteOption.crc32cMatch` options. The given input stream is closed upon success. Note that all [non-editable metadata](https://cloud.google.com/storage/docs/metadata#fixed), such as generation or metageneration, will be ignored even if it's present in the provided BlobInfo object.

This method is marked as Deprecated because it cannot safely retry, given that it accepts an [InputStream](https://docs.oracle.com/javase/8/docs/api/java/io/InputStream.html) which can only be consumed once.

Example of creating a blob from an input stream.

 ```

 String bucketName = "my-unique-bucket";
 String blobName = "my-blob-name";
 InputStream content = new ByteArrayInputStream("Hello, World!".getBytes(UTF_8));
 BlobId blobId = BlobId.of(bucketName, blobName);
 BlobInfo blobInfo = BlobInfo.newBuilder(blobId).setContentType("text/plain").build();
 Blob blob = storage.create(blobInfo, content);
 
```
 

Example of uploading an encrypted blob.

 ```

 String bucketName = "my-unique-bucket";
 String blobName = "my-blob-name";
 String encryptionKey = "my_encryption_key";
 InputStream content = new ByteArrayInputStream("Hello, World!".getBytes(UTF_8));

 BlobId blobId = BlobId.of(bucketName, blobName);
 BlobInfo blobInfo = BlobInfo.newBuilder(blobId)
     .setContentType("text/plain")
     .build();
 Blob blob = storage.create(blobInfo, content, BlobWriteOption.encryptionKey(encryptionKey));
 
```
 

**Parameters**

**Name**

**Description**

`blobInfo`

`[BlobInfo](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.BlobInfo)`  

`content`

`[InputStream](https://docs.oracle.com/javase/8/docs/api/java/io/InputStream.html)`  

`options`

`[BlobWriteOption](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.BlobWriteOption)[]`  

**Returns**

**Type**

**Description**

`[Blob](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Blob)`

a `Blob` with complete information

### create(BucketInfo bucketInfo, Storage.BucketTargetOption\[\] options)

```
public abstract Bucket create(BucketInfo bucketInfo, Storage.BucketTargetOption[] options)
```

Creates a new bucket.

Accepts an optional userProject [BucketTargetOption](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.BucketTargetOption) option which defines the project id to assign operational costs.

Example of creating a bucket.

 ```

 String bucketName = "my-unique-bucket";
 Bucket bucket = storage.create(BucketInfo.of(bucketName));
 
```
 

Example of creating a bucket with storage class and location.

 ```

 String bucketName = "my-unique-bucket";
 Bucket bucket = storage.create(BucketInfo.newBuilder(bucketName)
     // See here for possible values: http://g.co/cloud/storage/docs/storage-classes
     .setStorageClass(StorageClass.COLDLINE)
     // Possible values: http://g.co/cloud/storage/docs/bucket-locations#location-mr
     .setLocation("asia")
     .build());
 
```
 

**Parameters**

**Name**

**Description**

`bucketInfo`

`[BucketInfo](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.BucketInfo)`  

`options`

`[BucketTargetOption](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.BucketTargetOption)[]`  

**Returns**

**Type**

**Description**

`[Bucket](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Bucket)`

a complete bucket

### createAcl(BlobId blob, Acl acl)

```
public abstract Acl createAcl(BlobId blob, Acl acl)
```

Creates a new ACL entry on the specified blob.

Example of creating a new ACL entry on a blob.

 ```

 String bucketName = "my-unique-bucket";
 String blobName = "my-blob-name";
 long blobGeneration = 42;
 BlobId blobId = BlobId.of(bucketName, blobName, blobGeneration);
 Acl acl = storage.createAcl(blobId, Acl.of(User.ofAllAuthenticatedUsers(), Role.READER));
 
```
 

Example of updating a blob to be public-read.

 ```

 String bucketName = "my-unique-bucket";
 String blobName = "my-blob-name";
 long blobGeneration = 42;
 BlobId blobId = BlobId.of(bucketName, blobName, blobGeneration);
 Acl acl = storage.createAcl(blobId, Acl.of(User.ofAllUsers(), Role.READER));
 
```
 

**Parameters**

**Name**

**Description**

`blob`

`[BlobId](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.BlobId)`  

`acl`

`[Acl](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Acl)`  

**Returns**

**Type**

**Description**

`[Acl](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Acl)`

### createAcl(String bucket, Acl acl)

```
public abstract Acl createAcl(String bucket, Acl acl)
```

See Also: [#createAcl(String, Acl, BucketSourceOption...)](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage#com_google_cloud_storage_Storage_createAcl_)

**Parameters**

**Name**

**Description**

`bucket`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`acl`

`[Acl](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Acl)`  

**Returns**

**Type**

**Description**

`[Acl](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Acl)`

### createAcl(String bucket, Acl acl, Storage.BucketSourceOption\[\] options)

```
public abstract Acl createAcl(String bucket, Acl acl, Storage.BucketSourceOption[] options)
```

Creates a new ACL entry on the specified bucket.

Example of creating a new ACL entry on a bucket.

 ```

 String bucketName = "my-unique-bucket";
 Acl acl = storage.createAcl(bucketName, Acl.of(User.ofAllAuthenticatedUsers(), Role.READER));
 
```
 

Example of creating a new ACL entry on a requester\_pays bucket with a user\_project option.

 ```

 String bucketName = "my-unique-bucket";
 Acl acl = storage.createAcl(bucketName, Acl.of(User.ofAllAuthenticatedUsers(), Role.READER),
     BucketSourceOption.userProject("myProject"));
 
```
 

**Parameters**

**Name**

**Description**

`bucket`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

name of the bucket for which an ACL should be created

`acl`

`[Acl](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Acl)`  

ACL to create

`options`

`[BucketSourceOption](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.BucketSourceOption)[]`  

extra parameters to apply to this operation

**Returns**

**Type**

**Description**

`[Acl](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Acl)`

### createDefaultAcl(String bucket, Acl acl)

```
public abstract Acl createDefaultAcl(String bucket, Acl acl)
```

Creates a new default blob ACL entry on the specified bucket.

Default ACLs are applied to a new blob within the bucket when no ACL was provided for that blob.

Example of creating a new default ACL entry on a bucket.

 ```

 String bucketName = "my-unique-bucket";
 Acl acl =
     storage.createDefaultAcl(bucketName, Acl.of(User.ofAllAuthenticatedUsers(), Role.READER));
 
```
 

**Parameters**

**Name**

**Description**

`bucket`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`acl`

`[Acl](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Acl)`  

**Returns**

**Type**

**Description**

`[Acl](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Acl)`

### createFrom(BlobInfo blobInfo, InputStream content, Storage.BlobWriteOption\[\] options)

```
public abstract Blob createFrom(BlobInfo blobInfo, InputStream content, Storage.BlobWriteOption[] options)
```

Reads bytes from an input stream and uploads those bytes to the blob using [#writer](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage#com_google_cloud_storage_Storage_writer_). By default any MD5 and CRC32C values in the given `blobInfo` are ignored unless requested via the [BlobWriteOption#md5Match()](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.BlobWriteOption#com_google_cloud_storage_Storage_BlobWriteOption_md5Match_) and [BlobWriteOption#crc32cMatch()](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.BlobWriteOption#com_google_cloud_storage_Storage_BlobWriteOption_crc32cMatch_) options. Note that all [non-editable metadata](https://cloud.google.com/storage/docs/metadata#fixed), such as generation or metageneration, will be ignored even if it's present in the provided BlobInfo object.

Example of uploading data with CRC32C checksum:

 ```

 BlobId blobId = BlobId.of(bucketName, blobName);
 byte[] content = "Hello, world".getBytes(StandardCharsets.UTF_8);
 Hasher hasher = Hashing.crc32c().newHasher().putBytes(content);
 String crc32c = BaseEncoding.base64().encode(Ints.toByteArray(hasher.hash().asInt()));
 BlobInfo blobInfo = BlobInfo.newBuilder(blobId).setCrc32c(crc32c).build();
 storage.createFrom(blobInfo, new ByteArrayInputStream(content), Storage.BlobWriteOption.crc32cMatch());
 
```
 

See Also: [#createFrom(BlobInfo, InputStream, int, BlobWriteOption...)](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage#com_google_cloud_storage_Storage_createFrom_)

**Parameters**

**Name**

**Description**

`blobInfo`

`[BlobInfo](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.BlobInfo)`  

blob to create

`content`

`[InputStream](https://docs.oracle.com/javase/8/docs/api/java/io/InputStream.html)`  

input stream to read from

`options`

`[BlobWriteOption](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.BlobWriteOption)[]`  

blob write options

**Returns**

**Type**

**Description**

`[Blob](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Blob)`

a `Blob` with complete information

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

on I/O error

### createFrom(BlobInfo blobInfo, InputStream content, int bufferSize, Storage.BlobWriteOption\[\] options)

```
public abstract Blob createFrom(BlobInfo blobInfo, InputStream content, int bufferSize, Storage.BlobWriteOption[] options)
```

Reads bytes from an input stream and uploads those bytes to the blob using [#writer](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage#com_google_cloud_storage_Storage_writer_) and `bufferSize`. By default any MD5 and CRC32C values in the given `blobInfo` are ignored unless requested via the [BlobWriteOption#md5Match()](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.BlobWriteOption#com_google_cloud_storage_Storage_BlobWriteOption_md5Match_) and [BlobWriteOption#crc32cMatch()](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.BlobWriteOption#com_google_cloud_storage_Storage_BlobWriteOption_crc32cMatch_) options. Note that all [non-editable metadata](https://cloud.google.com/storage/docs/metadata#fixed), such as generation or metageneration, will be ignored even if it's present in the provided BlobInfo object.

[#createFrom(BlobInfo, InputStream, BlobWriteOption...)](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage#com_google_cloud_storage_Storage_createFrom_) )} invokes this method with a buffer size of 15 MiB. Users can pass alternative values. Larger buffer sizes might improve the upload performance but require more memory. This can cause an OutOfMemoryError or add significant garbage collection overhead. Smaller buffer sizes reduce memory consumption, that is noticeable when uploading many objects in parallel. Buffer sizes less than 256 KiB are treated as 256 KiB.

**Parameters**

**Name**

**Description**

`blobInfo`

`[BlobInfo](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.BlobInfo)`  

blob to create

`content`

`[InputStream](https://docs.oracle.com/javase/8/docs/api/java/io/InputStream.html)`  

input stream to read from

`bufferSize`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

size of the buffer I/O operations

`options`

`[BlobWriteOption](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.BlobWriteOption)[]`  

blob write options

**Returns**

**Type**

**Description**

`[Blob](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Blob)`

a `Blob` with complete information

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

on I/O error

### createFrom(BlobInfo blobInfo, Path path, Storage.BlobWriteOption\[\] options)

```
public abstract Blob createFrom(BlobInfo blobInfo, Path path, Storage.BlobWriteOption[] options)
```

Uploads `path` to the blob using [#writer](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage#com_google_cloud_storage_Storage_writer_). By default any MD5 and CRC32C values in the given `blobInfo` are ignored unless requested via the [BlobWriteOption#md5Match()](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.BlobWriteOption#com_google_cloud_storage_Storage_BlobWriteOption_md5Match_) and [BlobWriteOption#crc32cMatch()](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.BlobWriteOption#com_google_cloud_storage_Storage_BlobWriteOption_crc32cMatch_) options. Folder upload is not supported. Note that all [non-editable metadata](https://cloud.google.com/storage/docs/metadata#fixed), such as generation or metageneration, will be ignored even if it's present in the provided BlobInfo object.

Example of uploading a file:

 ```

 String bucketName = "my-unique-bucket";
 String fileName = "readme.txt";
 BlobId blobId = BlobId.of(bucketName, fileName);
 BlobInfo blobInfo = BlobInfo.newBuilder(blobId).setContentType("text/plain").build();
 storage.createFrom(blobInfo, Paths.get(fileName));
 
```
 

See Also: [#createFrom(BlobInfo, Path, int, BlobWriteOption...)](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage#com_google_cloud_storage_Storage_createFrom_)

**Parameters**

**Name**

**Description**

`blobInfo`

`[BlobInfo](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.BlobInfo)`  

blob to create

`path`

`[Path](https://docs.oracle.com/javase/8/docs/api/java/nio/file/Path.html)`  

file to upload

`options`

`[BlobWriteOption](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.BlobWriteOption)[]`  

blob write options

**Returns**

**Type**

**Description**

`[Blob](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Blob)`

a `Blob` with complete information

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

on I/O error

### createFrom(BlobInfo blobInfo, Path path, int bufferSize, Storage.BlobWriteOption\[\] options)

```
public abstract Blob createFrom(BlobInfo blobInfo, Path path, int bufferSize, Storage.BlobWriteOption[] options)
```

Uploads `path` to the blob using [#writer](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage#com_google_cloud_storage_Storage_writer_) and `bufferSize`. By default any MD5 and CRC32C values in the given `blobInfo` are ignored unless requested via the [BlobWriteOption#md5Match()](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.BlobWriteOption#com_google_cloud_storage_Storage_BlobWriteOption_md5Match_) and [BlobWriteOption#crc32cMatch()](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.BlobWriteOption#com_google_cloud_storage_Storage_BlobWriteOption_crc32cMatch_) options. Folder upload is not supported. Note that all [non-editable metadata](https://cloud.google.com/storage/docs/metadata#fixed), such as generation or metageneration, will be ignored even if it's present in the provided BlobInfo object.

[#createFrom(BlobInfo, Path, BlobWriteOption...)](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage#com_google_cloud_storage_Storage_createFrom_) invokes this method with a buffer size of 15 MiB. Users can pass alternative values. Larger buffer sizes might improve the upload performance but require more memory. This can cause an OutOfMemoryError or add significant garbage collection overhead. Smaller buffer sizes reduce memory consumption, that is noticeable when uploading many objects in parallel. Buffer sizes less than 256 KiB are treated as 256 KiB.

Example of uploading a humongous file:

 ```

 BlobId blobId = BlobId.of(bucketName, blobName);
 BlobInfo blobInfo = BlobInfo.newBuilder(blobId).setContentType("video/webm").build();

 int largeBufferSize = 150 * 1024 * 1024;
 Path file = Paths.get("humongous.file");
 storage.createFrom(blobInfo, file, largeBufferSize);
 
```
 

**Parameters**

**Name**

**Description**

`blobInfo`

`[BlobInfo](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.BlobInfo)`  

blob to create

`path`

`[Path](https://docs.oracle.com/javase/8/docs/api/java/nio/file/Path.html)`  

file to upload

`bufferSize`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

size of the buffer I/O operations

`options`

`[BlobWriteOption](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.BlobWriteOption)[]`  

blob write options

**Returns**

**Type**

**Description**

`[Blob](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Blob)`

a `Blob` with complete information

**Exceptions**

**Type**

**Description**

`[IOException](https://docs.oracle.com/javase/8/docs/api/java/io/IOException.html)`

on I/O error

### createHmacKey(ServiceAccount serviceAccount, Storage.CreateHmacKeyOption\[\] options)

```
public abstract HmacKey createHmacKey(ServiceAccount serviceAccount, Storage.CreateHmacKeyOption[] options)
```

Creates a new HMAC Key for the provided service account, including the secret key. Note that the secret key is only returned upon creation via this method.

Example of creating a new HMAC Key.

 ```

 ServiceAccount serviceAccount = ServiceAccount.of("my-service-account@google.com");

 HmacKey hmacKey = storage.createHmacKey(serviceAccount);

 String secretKey = hmacKey.getSecretKey();
 HmacKey.HmacKeyMetadata metadata = hmacKey.getMetadata();
 
```
 

**Parameters**

**Name**

**Description**

`serviceAccount`

`[ServiceAccount](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.ServiceAccount)`  

`options`

`[CreateHmacKeyOption](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.CreateHmacKeyOption)[]`  

**Returns**

**Type**

**Description**

`[HmacKey](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.HmacKey)`

### createNotification(String bucket, NotificationInfo notificationInfo)

```
public abstract Notification createNotification(String bucket, NotificationInfo notificationInfo)
```

Creates the notification for a given bucket.

Example of creating a notification:

 ```

 String bucketName = "my-unique-bucket";
 String topic = "projects/myProject/topics/myTopic"
 NotificationInfo notificationInfo = NotificationInfo.newBuilder(topic)
  .setCustomAttributes(ImmutableMap.of("label1", "value1"))
  .setEventTypes(NotificationInfo.EventType.OBJECT_FINALIZE)
  .setPayloadFormat(NotificationInfo.PayloadFormat.JSON_API_V1)
  .build();
 Notification notification = storage.createNotification(bucketName, notificationInfo);
 
```
 

**Parameters**

**Name**

**Description**

`bucket`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

name of the bucket

`notificationInfo`

`[NotificationInfo](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.NotificationInfo)`  

notification to create

**Returns**

**Type**

**Description**

`[Notification](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Notification)`

the created notification

### delete(BlobId blob)

```
public abstract boolean delete(BlobId blob)
```

Deletes the requested blob.

Example of deleting a blob.

 ```

 String bucketName = "my-unique-bucket";
 String blobName = "my-blob-name";
 BlobId blobId = BlobId.of(bucketName, blobName);
 boolean deleted = storage.delete(blobId);
 if (deleted) {
   // the blob was deleted
 } else {
   // the blob was not found
 }
 
```
 

**Parameter**

**Name**

**Description**

`blob`

`[BlobId](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.BlobId)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

`true` if blob was deleted, `false` if it was not found

### delete(BlobId blob, Storage.BlobSourceOption\[\] options)

```
public abstract boolean delete(BlobId blob, Storage.BlobSourceOption[] options)
```

Deletes the requested blob.

Accepts an optional userProject [BlobSourceOption](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.BlobSourceOption) option which defines the project id to assign operational costs.

Example of deleting a blob, only if its generation matches a value, otherwise a [StorageException](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.StorageException) is thrown.

 ```

 String bucketName = "my-unique-bucket";
 String blobName = "my-blob-name";
 long blobGeneration = 42;
 BlobId blobId = BlobId.of(bucketName, blobName);
 boolean deleted = storage.delete(blobId, BlobSourceOption.generationMatch(blobGeneration));
 if (deleted) {
   // the blob was deleted
 } else {
   // the blob was not found
 }
 
```
 

**Parameters**

**Name**

**Description**

`blob`

`[BlobId](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.BlobId)`  

`options`

`[BlobSourceOption](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.BlobSourceOption)[]`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

`true` if blob was deleted, `false` if it was not found

### delete(BlobId\[\] blobIds)

```
public abstract List<Boolean> delete(BlobId[] blobIds)
```

Deletes the requested blobs. A batch request is used to perform this call.

Example of deleting several blobs using a single batch request.

 ```

 String bucketName = "my-unique-bucket";
 String blobName1 = "my-blob-name1";
 String blobName2 = "my-blob-name2";
 BlobId firstBlob = BlobId.of(bucketName, blobName1);
 BlobId secondBlob = BlobId.of(bucketName, blobName2);
 List<Boolean> deleted = storage.delete(firstBlob, secondBlob);
 
```
 

**Parameter**

**Name**

**Description**

`blobIds`

`[BlobId](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.BlobId)[]`  

blobs to delete

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Boolean](https://docs.oracle.com/javase/8/docs/api/java/lang/Boolean.html)>`

an immutable list of booleans. If a blob has been deleted the corresponding item in the list is `true`. If a blob was not found, deletion failed or access to the resource was denied the corresponding item is `false`.

### delete(Iterable<BlobId> blobIds)

```
public abstract List<Boolean> delete(Iterable<BlobId> blobIds)
```

Deletes the requested blobs. A batch request is used to perform this call.

Example of deleting several blobs using a single batch request.

 ```

 String bucketName = "my-unique-bucket";
 String blobName1 = "my-blob-name1";
 String blobName2 = "my-blob-name2";
 List<BlobId> blobIds = new LinkedList<>();
 blobIds.add(BlobId.of(bucketName, blobName1));
 blobIds.add(BlobId.of(bucketName, blobName2));
 List<Boolean> deleted = storage.delete(blobIds);
 
```
 

**Parameter**

**Name**

**Description**

`blobIds`

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<[BlobId](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.BlobId)>`  

blobs to delete

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Boolean](https://docs.oracle.com/javase/8/docs/api/java/lang/Boolean.html)>`

an immutable list of booleans. If a blob has been deleted the corresponding item in the list is `true`. If a blob was not found, deletion failed or access to the resource was denied the corresponding item is `false`.

### delete(String bucket, Storage.BucketSourceOption\[\] options)

```
public abstract boolean delete(String bucket, Storage.BucketSourceOption[] options)
```

Deletes the requested bucket.

Accepts an optional userProject [BucketSourceOption](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.BucketSourceOption) option which defines the project id to assign operational costs.

Example of deleting a bucket, only if its metageneration matches a value, otherwise a [StorageException](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.StorageException) is thrown.

 ```

 String bucketName = "my-unique-bucket";
 long bucketMetageneration = 42;
 boolean deleted = storage.delete(bucketName,
     BucketSourceOption.metagenerationMatch(bucketMetageneration));
 if (deleted) {
   // the bucket was deleted
 } else {
   // the bucket was not found
 }
 
```
 

**Parameters**

**Name**

**Description**

`bucket`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`options`

`[BucketSourceOption](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.BucketSourceOption)[]`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

`true` if bucket was deleted, `false` if it was not found

### delete(String bucket, String blob, Storage.BlobSourceOption\[\] options)

```
public abstract boolean delete(String bucket, String blob, Storage.BlobSourceOption[] options)
```

Deletes the requested blob.

Example of deleting a blob, only if its generation matches a value, otherwise a [StorageException](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.StorageException) is thrown.

 ```

 String bucketName = "my-unique-bucket";
 String blobName = "my-blob-name";
 long blobGeneration = 42;
 boolean deleted = storage.delete(bucketName, blobName,
     BlobSourceOption.generationMatch(blobGeneration));
 if (deleted) {
   // the blob was deleted
 } else {
   // the blob was not found
 }
 
```
 

**Parameters**

**Name**

**Description**

`bucket`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`blob`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`options`

`[BlobSourceOption](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.BlobSourceOption)[]`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

`true` if blob was deleted, `false` if it was not found

### deleteAcl(BlobId blob, Acl.Entity entity)

```
public abstract boolean deleteAcl(BlobId blob, Acl.Entity entity)
```

Deletes the ACL entry for the specified entity on the specified blob.

Example of deleting the ACL entry for an entity on a blob.

 ```

 String bucketName = "my-unique-bucket";
 String blobName = "my-blob-name";
 long blobGeneration = 42;
 BlobId blobId = BlobId.of(bucketName, blobName, blobGeneration);
 boolean deleted = storage.deleteAcl(blobId, User.ofAllAuthenticatedUsers());
 if (deleted) {
   // the acl entry was deleted
 } else {
   // the acl entry was not found
 }
 
```
 

**Parameters**

**Name**

**Description**

`blob`

`[BlobId](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.BlobId)`  

`entity`

`[Acl.Entity](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Acl.Entity)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

`true` if the ACL was deleted, `false` if it was not found

### deleteAcl(String bucket, Acl.Entity entity)

```
public abstract boolean deleteAcl(String bucket, Acl.Entity entity)
```

See Also: [#deleteAcl(String, Entity, BucketSourceOption...)](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage#com_google_cloud_storage_Storage_deleteAcl_)

**Parameters**

**Name**

**Description**

`bucket`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`entity`

`[Acl.Entity](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Acl.Entity)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### deleteAcl(String bucket, Acl.Entity entity, Storage.BucketSourceOption\[\] options)

```
public abstract boolean deleteAcl(String bucket, Acl.Entity entity, Storage.BucketSourceOption[] options)
```

Deletes the ACL entry for the specified entity on the specified bucket.

Example of deleting the ACL entry for an entity on a bucket.

 ```

 String bucketName = "my-unique-bucket";
 boolean deleted = storage.deleteAcl(bucketName, User.ofAllAuthenticatedUsers());
 if (deleted) {
   // the acl entry was deleted
 } else {
   // the acl entry was not found
 }
 
```
 

Example of deleting the ACL entry for a specific user on a requester\_pays bucket with a user\_project option.

 ```

 String bucketName = "my-unique-bucket";
 BucketSourceOption userProject = BucketSourceOption.userProject("myProject");
 boolean deleted = storage.deleteAcl(bucketName, User.ofAllAuthenticatedUsers(), userProject);
 
```
 

**Parameters**

**Name**

**Description**

`bucket`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

name of the bucket to delete an ACL from

`entity`

`[Acl.Entity](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Acl.Entity)`  

ACL entity to delete

`options`

`[BucketSourceOption](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.BucketSourceOption)[]`  

extra parameters to apply to this operation

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

`true` if the ACL was deleted, `false` if it was not found

### deleteDefaultAcl(String bucket, Acl.Entity entity)

```
public abstract boolean deleteDefaultAcl(String bucket, Acl.Entity entity)
```

Deletes the default object ACL entry for the specified entity on the specified bucket.

Default ACLs are applied to a new blob within the bucket when no ACL was provided for that blob.

Example of deleting the default ACL entry for an entity on a bucket.

 ```

 String bucketName = "my-unique-bucket";
 boolean deleted = storage.deleteDefaultAcl(bucketName, User.ofAllAuthenticatedUsers());
 if (deleted) {
   // the acl entry was deleted
 } else {
   // the acl entry was not found
 }
 
```
 

**Parameters**

**Name**

**Description**

`bucket`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`entity`

`[Acl.Entity](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Acl.Entity)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

`true` if the ACL was deleted, `false` if it was not found

### deleteHmacKey(HmacKey.HmacKeyMetadata hmacKeyMetadata, Storage.DeleteHmacKeyOption\[\] options)

```
public abstract void deleteHmacKey(HmacKey.HmacKeyMetadata hmacKeyMetadata, Storage.DeleteHmacKeyOption[] options)
```

Deletes an HMAC key. Note that only an `INACTIVE` key can be deleted. Attempting to delete a key whose `HmacKey.HmacKeyState` is anything other than `INACTIVE` will fail.

Example of updating an HMAC key's state to INACTIVE and then deleting it.

 ```

 String hmacKeyAccessId = "my-access-id";
 HmacKey.HmacKeyMetadata hmacKeyMetadata = storage.getHmacKey(hmacKeyAccessId);

 storage.updateHmacKeyState(hmacKeyMetadata, HmacKey.HmacKeyState.INACTIVE);
 storage.deleteHmacKey(hmacKeyMetadata);
 
```
 

**Parameters**

**Name**

**Description**

`hmacKeyMetadata`

`[HmacKey.HmacKeyMetadata](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.HmacKey.HmacKeyMetadata)`  

`options`

`[DeleteHmacKeyOption](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.DeleteHmacKeyOption)[]`  

### deleteNotification(String bucket, String notificationId)

```
public abstract boolean deleteNotification(String bucket, String notificationId)
```

Deletes the notification with the specified id.

Example of deleting the notification:

 ```

 String bucketName = "my-unique-bucket";
 String notificationId = "my-unique-notification-id";
 boolean deleted = storage.deleteNotification(bucketName, notificationId);
 if (deleted) {
   // the notification was deleted
 } else {
   // the notification was not found
 }
 
```
 

**Parameters**

**Name**

**Description**

`bucket`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

name of the bucket

`notificationId`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

ID of the notification to delete

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

`true` if the notification has been deleted, `false` if not found

### downloadTo(BlobId blob, OutputStream outputStream, Storage.BlobSourceOption\[\] options)

```
public abstract void downloadTo(BlobId blob, OutputStream outputStream, Storage.BlobSourceOption[] options)
```

Downloads the given blob to the given output stream using specified blob read options.

 ```

 String bucketName = "my-unique-bucket";
 String blobName = "my-blob-name";
 BlobId blobId = BlobId.of(bucketName, blobName);
 Path destination = Paths.get("my-blob-destination.txt");
 try (OutputStream outputStream = Files.newOutputStream(path)) {
  downloadTo(blob, outputStream);
  // do stuff with destination
 }
 
```
 

**Parameters**

**Name**

**Description**

`blob`

`[BlobId](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.BlobId)`  

`outputStream`

`[OutputStream](https://docs.oracle.com/javase/8/docs/api/java/io/OutputStream.html)`  

`options`

`[BlobSourceOption](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.BlobSourceOption)[]`  

### downloadTo(BlobId blob, Path path, Storage.BlobSourceOption\[\] options)

```
public abstract void downloadTo(BlobId blob, Path path, Storage.BlobSourceOption[] options)
```

Downloads the given blob to the given path using specified blob read options.

 ```

 String bucketName = "my-unique-bucket";
 String blobName = "my-blob-name";
 BlobId blobId = BlobId.of(bucketName, blobName);
 Path destination = Paths.get("my-blob-destination.txt");
 downloadTo(blobId, destination);
 // do stuff with destination
 
```
 

**Parameters**

**Name**

**Description**

`blob`

`[BlobId](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.BlobId)`  

`path`

`[Path](https://docs.oracle.com/javase/8/docs/api/java/nio/file/Path.html)`  

`options`

`[BlobSourceOption](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.BlobSourceOption)[]`  

### generateSignedPostPolicyV4(BlobInfo blobInfo, long duration, TimeUnit unit, PostPolicyV4.PostConditionsV4 conditions, Storage.PostPolicyV4Option\[\] options)

```
public abstract PostPolicyV4 generateSignedPostPolicyV4(BlobInfo blobInfo, long duration, TimeUnit unit, PostPolicyV4.PostConditionsV4 conditions, Storage.PostPolicyV4Option[] options)
```

Generates a presigned post policy without any fields. Automatically creates required fields. See full documentation for #generateSignedPostPolicyV4(BlobInfo, long, TimeUnit, PostPolicyV4.PostFieldsV4, PostPolicyV4.PostConditionsV4, PostPolicyV4Option...).

**Parameters**

**Name**

**Description**

`blobInfo`

`[BlobInfo](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.BlobInfo)`  

`duration`

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`unit`

`[TimeUnit](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/TimeUnit.html)`  

`conditions`

`[PostPolicyV4.PostConditionsV4](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.PostPolicyV4.PostConditionsV4)`  

`options`

`[PostPolicyV4Option](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.PostPolicyV4Option)[]`  

**Returns**

**Type**

**Description**

`[PostPolicyV4](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.PostPolicyV4)`

### generateSignedPostPolicyV4(BlobInfo blobInfo, long duration, TimeUnit unit, PostPolicyV4.PostFieldsV4 fields, PostPolicyV4.PostConditionsV4 conditions, Storage.PostPolicyV4Option\[\] options)

```
public abstract PostPolicyV4 generateSignedPostPolicyV4(BlobInfo blobInfo, long duration, TimeUnit unit, PostPolicyV4.PostFieldsV4 fields, PostPolicyV4.PostConditionsV4 conditions, Storage.PostPolicyV4Option[] options)
```

Generates a URL and a map of fields that can be specified in an HTML form to submit a POST request. The returned map includes a signature which must be provided with the request. Generating a presigned POST policy requires a service account signer. If an instance of com.google.auth.ServiceAccountSigner was passed to [StorageOptions](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.StorageOptions)' builder via `setCredentials(Credentials)` or the default credentials are being used and the environment variable `GOOGLE_APPLICATION_CREDENTIALS` is set, generatPresignedPostPolicyV4 will use that credentials to sign the URL. If the credentials passed to [StorageOptions](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.StorageOptions) do not implement ServiceAccountSigner (this is the case, for instance, for Google Cloud SDK credentials) then `signUrl` will throw an IllegalStateException unless an implementation of ServiceAccountSigner is passed using the [PostPolicyV4Option#signWith(ServiceAccountSigner)](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.PostPolicyV4Option#com_google_cloud_storage_Storage_PostPolicyV4Option_signWith_) option.

Example of generating a presigned post policy which has the condition that only jpeg images can be uploaded, and applies the public read acl to each image uploaded, and making the POST request:

 ```

 PostFieldsV4 fields = PostFieldsV4.newBuilder().setAcl("public-read").build();
 PostConditionsV4 conditions = PostConditionsV4.newBuilder().addContentTypeCondition(ConditionV4Type.MATCHES, "image/jpeg").build();

 PostPolicyV4 policy = storage.generateSignedPostPolicyV4(
     BlobInfo.newBuilder("my-bucket", "my-object").build(),
     7, TimeUnit.DAYS, fields, conditions);

 HttpClient client = HttpClientBuilder.create().build();
 HttpPost request = new HttpPost(policy.getUrl());
 MultipartEntityBuilder builder = MultipartEntityBuilder.create();

 for (Map.Entry<String, String> entry : policy.getFields().entrySet()) {
     builder.addTextBody(entry.getKey(), entry.getValue());
 }
 File file = new File("path/to/your/file/to/upload");
 builder.addBinaryBody("file", new FileInputStream(file), ContentType.APPLICATION_OCTET_STREAM, file.getName());
 request.setEntity(builder.build());
 client.execute(request);
 
```
 

See Also: [POST Object](https://cloud.google.com/storage/docs/xml-api/post-object#usage_and_examples)

**Parameters**

**Name**

**Description**

`blobInfo`

`[BlobInfo](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.BlobInfo)`  

the blob uploaded in the form

`duration`

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

time before expiration

`unit`

`[TimeUnit](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/TimeUnit.html)`  

duration time unit

`fields`

`[PostPolicyV4.PostFieldsV4](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.PostPolicyV4.PostFieldsV4)`  

the fields specified in the form

`conditions`

`[PostPolicyV4.PostConditionsV4](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.PostPolicyV4.PostConditionsV4)`  

which conditions every upload must satisfy

`options`

`[PostPolicyV4Option](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.PostPolicyV4Option)[]`  

optional post policy options

**Returns**

**Type**

**Description**

`[PostPolicyV4](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.PostPolicyV4)`

### generateSignedPostPolicyV4(BlobInfo blobInfo, long duration, TimeUnit unit, PostPolicyV4.PostFieldsV4 fields, Storage.PostPolicyV4Option\[\] options)

```
public abstract PostPolicyV4 generateSignedPostPolicyV4(BlobInfo blobInfo, long duration, TimeUnit unit, PostPolicyV4.PostFieldsV4 fields, Storage.PostPolicyV4Option[] options)
```

Generates a presigned post policy without any conditions. Automatically creates required conditions. See full documentation for #generateSignedPostPolicyV4(BlobInfo, long, TimeUnit, PostPolicyV4.PostFieldsV4, PostPolicyV4.PostConditionsV4, PostPolicyV4Option...).

**Parameters**

**Name**

**Description**

`blobInfo`

`[BlobInfo](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.BlobInfo)`  

`duration`

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`unit`

`[TimeUnit](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/TimeUnit.html)`  

`fields`

`[PostPolicyV4.PostFieldsV4](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.PostPolicyV4.PostFieldsV4)`  

`options`

`[PostPolicyV4Option](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.PostPolicyV4Option)[]`  

**Returns**

**Type**

**Description**

`[PostPolicyV4](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.PostPolicyV4)`

### generateSignedPostPolicyV4(BlobInfo blobInfo, long duration, TimeUnit unit, Storage.PostPolicyV4Option\[\] options)

```
public abstract PostPolicyV4 generateSignedPostPolicyV4(BlobInfo blobInfo, long duration, TimeUnit unit, Storage.PostPolicyV4Option[] options)
```

Generates a presigned post policy without any fields or conditions. Automatically creates required fields and conditions. See full documentation for #generateSignedPostPolicyV4(BlobInfo, long, TimeUnit, PostPolicyV4.PostFieldsV4, PostPolicyV4.PostConditionsV4, PostPolicyV4Option...).

**Parameters**

**Name**

**Description**

`blobInfo`

`[BlobInfo](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.BlobInfo)`  

`duration`

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`unit`

`[TimeUnit](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/TimeUnit.html)`  

`options`

`[PostPolicyV4Option](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.PostPolicyV4Option)[]`  

**Returns**

**Type**

**Description**

`[PostPolicyV4](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.PostPolicyV4)`

### get(BlobId blob)

```
public abstract Blob get(BlobId blob)
```

Returns the requested blob or `null` if not found.

Example of getting information on a blob.

 ```

 String bucketName = "my-unique-bucket";
 String blobName = "my-blob-name";
 BlobId blobId = BlobId.of(bucketName, blobName);
 Blob blob = storage.get(blobId);
 
```
 

**Parameter**

**Name**

**Description**

`blob`

`[BlobId](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.BlobId)`  

**Returns**

**Type**

**Description**

`[Blob](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Blob)`

### get(BlobId blob, Storage.BlobGetOption\[\] options)

```
public abstract Blob get(BlobId blob, Storage.BlobGetOption[] options)
```

Returns the requested blob or `null` if not found.

Accepts an optional userProject [BlobGetOption](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.BlobGetOption) option which defines the project id to assign operational costs.

Example of getting information on a blob, only if its metageneration matches a value, otherwise a [StorageException](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.StorageException) is thrown.

 ```

 String bucketName = "my-unique-bucket";
 String blobName = "my-blob-name";
 long blobMetageneration = 42;
 BlobId blobId = BlobId.of(bucketName, blobName);
 Blob blob = storage.get(blobId, BlobGetOption.metagenerationMatch(blobMetageneration));
 
```
 

Example of getting information on a blob encrypted using Customer Supplied Encryption Keys, only if supplied Decrpytion Key decrypts the blob successfully, otherwise a [StorageException](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.StorageException) is thrown. For more information review See Also: [Encrypted Elements](https://cloud.google.com/storage/docs/encryption/customer-supplied-keys#encrypted-elements) {@code String bucketName = "my-unique-bucket"; String blobName = "my-blob-name"; String blobEncryptionKey = ""; BlobId blobId = BlobId.of(bucketName, blobName); Blob blob = storage.get(blobId, BlobGetOption.decryptionKey(blobEncryptionKey)); }

**Parameters**

**Name**

**Description**

`blob`

`[BlobId](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.BlobId)`  

`options`

`[BlobGetOption](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.BlobGetOption)[]`  

**Returns**

**Type**

**Description**

`[Blob](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Blob)`

### get(BlobId\[\] blobIds)

```
public abstract List<Blob> get(BlobId[] blobIds)
```

Gets the requested blobs. A batch request is used to perform this call.

Example of getting information on several blobs using a single batch request.

 ```

 String bucketName = "my-unique-bucket";
 String blobName1 = "my-blob-name1";
 String blobName2 = "my-blob-name2";
 BlobId firstBlob = BlobId.of(bucketName, blobName1);
 BlobId secondBlob = BlobId.of(bucketName, blobName2);
 List<Blob> blobs = storage.get(firstBlob, secondBlob);
 
```
 

**Parameter**

**Name**

**Description**

`blobIds`

`[BlobId](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.BlobId)[]`  

blobs to get

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Blob](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Blob)>`

an immutable list of `Blob` objects. If a blob does not exist or access to it has been denied the corresponding item in the list is `null`.

### get(Iterable<BlobId> blobIds)

```
public abstract List<Blob> get(Iterable<BlobId> blobIds)
```

Gets the requested blobs. A batch request is used to perform this call.

Example of getting information on several blobs using a single batch request.

 ```

 String bucketName = "my-unique-bucket";
 String blobName1 = "my-blob-name1";
 String blobName2 = "my-blob-name2";
 List<BlobId> blobIds = new LinkedList<>();
 blobIds.add(BlobId.of(bucketName, blobName1));
 blobIds.add(BlobId.of(bucketName, blobName2));
 List<Blob> blobs = storage.get(blobIds);
 
```
 

**Parameter**

**Name**

**Description**

`blobIds`

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<[BlobId](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.BlobId)>`  

blobs to get

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Blob](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Blob)>`

an immutable list of `Blob` objects. If a blob does not exist or access to it has been denied the corresponding item in the list is `null`.

### get(String bucket, Storage.BucketGetOption\[\] options)

```
public abstract Bucket get(String bucket, Storage.BucketGetOption[] options)
```

Returns the requested bucket or `null` if not found.

Accepts an optional userProject [BucketGetOption](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.BucketGetOption) option which defines the project id to assign operational costs.

Example of getting information on a bucket, only if its metageneration matches a value, otherwise a [StorageException](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.StorageException) is thrown.

 ```

 String bucketName = "my-unique-bucket";
 long bucketMetageneration = 42;
 Bucket bucket = storage.get(bucketName,
     BucketGetOption.metagenerationMatch(bucketMetageneration));
 
```
 

**Parameters**

**Name**

**Description**

`bucket`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`options`

`[BucketGetOption](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.BucketGetOption)[]`  

**Returns**

**Type**

**Description**

`[Bucket](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Bucket)`

### get(String bucket, String blob, Storage.BlobGetOption\[\] options)

```
public abstract Blob get(String bucket, String blob, Storage.BlobGetOption[] options)
```

Returns the requested blob or `null` if not found.

Accepts an optional userProject [BlobGetOption](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.BlobGetOption) option which defines the project id to assign operational costs.

Example of getting information on a blob, only if its metageneration matches a value, otherwise a [StorageException](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.StorageException) is thrown.

 ```

 String bucketName = "my-unique-bucket";
 String blobName = "my-blob-name";
 long blobMetageneration = 42;
 Blob blob = storage.get(bucketName, blobName,
     BlobGetOption.metagenerationMatch(blobMetageneration));
 
```
 

**Parameters**

**Name**

**Description**

`bucket`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`blob`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`options`

`[BlobGetOption](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.BlobGetOption)[]`  

**Returns**

**Type**

**Description**

`[Blob](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Blob)`

### getAcl(BlobId blob, Acl.Entity entity)

```
public abstract Acl getAcl(BlobId blob, Acl.Entity entity)
```

Returns the ACL entry for the specified entity on the specified blob or `null` if not found.

Example of getting the ACL entry for an entity on a blob.

 ```

 String bucketName = "my-unique-bucket";
 String blobName = "my-blob-name";
 long blobGeneration = 42;
 BlobId blobId = BlobId.of(bucketName, blobName, blobGeneration);
 Acl acl = storage.getAcl(blobId, User.ofAllAuthenticatedUsers());
 
```
 

Example of getting the ACL entry for a specific user on a blob.

 ```

 String bucketName = "my-unique-bucket";
 String blobName = "my-blob-name";
 String userEmail = "google-cloud-java-tests@java-docs-samples-tests.iam.gserviceaccount.com";
 BlobId blobId = BlobId.of(bucketName, blobName);
 Acl acl = storage.getAcl(blobId, new User(userEmail));
 
```
 

**Parameters**

**Name**

**Description**

`blob`

`[BlobId](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.BlobId)`  

`entity`

`[Acl.Entity](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Acl.Entity)`  

**Returns**

**Type**

**Description**

`[Acl](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Acl)`

### getAcl(String bucket, Acl.Entity entity)

```
public abstract Acl getAcl(String bucket, Acl.Entity entity)
```

See Also: [#getAcl(String, Entity, BucketSourceOption...)](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage#com_google_cloud_storage_Storage_getAcl_)

**Parameters**

**Name**

**Description**

`bucket`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`entity`

`[Acl.Entity](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Acl.Entity)`  

**Returns**

**Type**

**Description**

`[Acl](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Acl)`

### getAcl(String bucket, Acl.Entity entity, Storage.BucketSourceOption\[\] options)

```
public abstract Acl getAcl(String bucket, Acl.Entity entity, Storage.BucketSourceOption[] options)
```

Returns the ACL entry for the specified entity on the specified bucket or `null` if not found.

Example of getting the ACL entry for an entity on a bucket.

 ```

 String bucketName = "my-unique-bucket";
 Acl acl = storage.getAcl(bucketName, User.ofAllAuthenticatedUsers());
 
```
 

Example of getting the ACL entry for a specific user on a requester\_pays bucket with a user\_project option.

 ```

 String bucketName = "my-unique-bucket";
 String userEmail = "google-cloud-java-tests@java-docs-samples-tests.iam.gserviceaccount.com";
 BucketSourceOption userProjectOption = BucketSourceOption.userProject("myProject");
 Acl acl = storage.getAcl(bucketName, new User(userEmail), userProjectOption);
 
```
 

#### Behavioral Differences between HTTP and gRPC

1.  Calling this method for a Bucket which has <a target="\_blank"href="[https://cloud.google.com/storage/docs/uniform-bucket-level-access">Uniform](https://cloud.google.com/storage/docs/uniform-bucket-level-access">Uniform) bucket-level access enabled exhibits different behavior Depending on which Transport is used. For JSON, an HTTP 400 Bad Request error will be thrown. Whereas for gRPC, an empty list will be returned.

**Parameters**

**Name**

**Description**

`bucket`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

name of the bucket where the getAcl operation takes place

`entity`

`[Acl.Entity](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Acl.Entity)`  

ACL entity to fetch

`options`

`[BucketSourceOption](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.BucketSourceOption)[]`  

extra parameters to apply to this operation

**Returns**

**Type**

**Description**

`[Acl](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Acl)`

### getDefaultAcl(String bucket, Acl.Entity entity)

```
public abstract Acl getDefaultAcl(String bucket, Acl.Entity entity)
```

Returns the default object ACL entry for the specified entity on the specified bucket or `null` if not found.

Default ACLs are applied to a new blob within the bucket when no ACL was provided for that blob.

Example of getting the default ACL entry for an entity on a bucket.

 ```

 String bucketName = "my-unique-bucket";
 Acl acl = storage.getDefaultAcl(bucketName, User.ofAllAuthenticatedUsers());
 
```
 

#### Behavioral Differences between HTTP and gRPC

1.  Calling this method for a Bucket which has <a target="\_blank"href="[https://cloud.google.com/storage/docs/uniform-bucket-level-access">Uniform](https://cloud.google.com/storage/docs/uniform-bucket-level-access">Uniform) bucket-level access enabled exhibits different behavior Depending on which Transport is used. For JSON, an HTTP 400 Bad Request error will be thrown. Whereas for gRPC, an empty list will be returned.

**Parameters**

**Name**

**Description**

`bucket`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`entity`

`[Acl.Entity](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Acl.Entity)`  

**Returns**

**Type**

**Description**

`[Acl](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Acl)`

### getHmacKey(String accessId, Storage.GetHmacKeyOption\[\] options)

```
public abstract HmacKey.HmacKeyMetadata getHmacKey(String accessId, Storage.GetHmacKeyOption[] options)
```

Gets an HMAC key given its access id. Note that this returns a `HmacKeyMetadata` object, which does not contain the secret key.

Example of getting an HMAC key. Since projectId isn't specified, the same project ID as the storage client instance will be used.

 ```

 String hmacKeyAccessId = "my-access-id";
 HmacKey.HmackeyMetadata hmacKeyMetadata = storage.getHmacKey(hmacKeyAccessId);
 
```
 

**Parameters**

**Name**

**Description**

`accessId`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`options`

`[GetHmacKeyOption](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.GetHmacKeyOption)[]`  

**Returns**

**Type**

**Description**

`[HmacKey.HmacKeyMetadata](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.HmacKey.HmacKeyMetadata)`

### getIamPolicy(String bucket, Storage.BucketSourceOption\[\] options)

```
public abstract Policy getIamPolicy(String bucket, Storage.BucketSourceOption[] options)
```

Gets the IAM policy for the provided bucket.

It's possible for bindings to be empty and instead have permissions inherited through Project or Organization IAM Policies. To prevent corrupting policies when you update an IAM policy with `Storage.setIamPolicy`, the ETAG value is used to perform optimistic concurrency.

Example of getting the IAM policy for a bucket.

 ```

 String bucketName = "my-unique-bucket";
 Policy policy = storage.getIamPolicy(bucketName);
 
```
 

**Parameters**

**Name**

**Description**

`bucket`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

name of the bucket where the getIamPolicy operation takes place

`options`

`[BucketSourceOption](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.BucketSourceOption)[]`  

extra parameters to apply to this operation

**Returns**

**Type**

**Description**

`com.google.cloud.Policy`

### getNotification(String bucket, String notificationId)

```
public abstract Notification getNotification(String bucket, String notificationId)
```

Gets the notification with the specified id.

Example of getting the notification:

 ```

 String bucketName = "my-unique-bucket";
 String notificationId = "my-unique-notification-id";
 Notification notification = storage.getNotification(bucketName, notificationId);
 
```
 

**Parameters**

**Name**

**Description**

`bucket`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

name of the bucket

`notificationId`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

notification ID

**Returns**

**Type**

**Description**

`[Notification](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Notification)`

the `Notification` object with the given id or `null` if not found

### getServiceAccount(String projectId)

```
public abstract ServiceAccount getServiceAccount(String projectId)
```

Returns the service account associated with the given project.

Example of getting a service account.

 ```

 String projectId = "test@gmail.com";
 ServiceAccount account = storage.getServiceAccount(projectId);
 
```
 

**Parameter**

**Name**

**Description**

`projectId`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

the ID of the project for which the service account should be fetched.

**Returns**

**Type**

**Description**

`[ServiceAccount](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.ServiceAccount)`

the service account associated with this project

### list(Storage.BucketListOption\[\] options)

```
public abstract Page<Bucket> list(Storage.BucketListOption[] options)
```

Lists the project's buckets.

Example of listing buckets, specifying the page size and a name prefix.

 ```

 String prefix = "bucket_";
 Page<Bucket> buckets = storage.list(BucketListOption.pageSize(100),
     BucketListOption.prefix(prefix));
 Iterator<Bucket> bucketIterator = buckets.iterateAll().iterator();
 while (bucketIterator.hasNext()) {
   Bucket bucket = bucketIterator.next();
   // do something with the bucket
 }
 
```
 

**Parameter**

**Name**

**Description**

`options`

`[BucketListOption](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.BucketListOption)[]`  

**Returns**

**Type**

**Description**

`[Page](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.paging.Page.html)<[Bucket](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Bucket)>`

### list(String bucket, Storage.BlobListOption\[\] options)

```
public abstract Page<Blob> list(String bucket, Storage.BlobListOption[] options)
```

Lists the bucket's blobs. If the [BlobListOption#currentDirectory()](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.BlobListOption#com_google_cloud_storage_Storage_BlobListOption_currentDirectory_) option is provided, results are returned in a directory-like mode.

Example of listing blobs in a provided directory.

 ```

 String bucketName = "my-unique-bucket";
 String directory = "my_directory/";
 Page<Blob> blobs = storage.list(bucketName, BlobListOption.currentDirectory(),
     BlobListOption.prefix(directory));
 Iterator<Blob> blobIterator = blobs.iterateAll().iterator();
 while (blobIterator.hasNext()) {
   Blob blob = blobIterator.next();
   // do something with the blob
 }
 
```
 

**Parameters**

**Name**

**Description**

`bucket`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`options`

`[BlobListOption](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.BlobListOption)[]`  

**Returns**

**Type**

**Description**

`[Page](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.paging.Page.html)<[Blob](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Blob)>`

### listAcls(BlobId blob)

```
public abstract List<Acl> listAcls(BlobId blob)
```

Lists the ACL entries for the provided blob.

Example of listing the ACL entries for a blob.

 ```

 String bucketName = "my-unique-bucket";
 String blobName = "my-blob-name";
 long blobGeneration = 42;
 BlobId blobId = BlobId.of(bucketName, blobName, blobGeneration);
 List<Acl> acls = storage.listAcls(blobId);
 for (Acl acl : acls) {
   // do something with ACL entry
 }
 
```
 

**Parameter**

**Name**

**Description**

`blob`

`[BlobId](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.BlobId)`  

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Acl](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Acl)>`

### listAcls(String bucket)

```
public abstract List<Acl> listAcls(String bucket)
```

See Also: [#listAcls(String, BucketSourceOption...)](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage#com_google_cloud_storage_Storage_listAcls_)

**Parameter**

**Name**

**Description**

`bucket`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Acl](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Acl)>`

### listAcls(String bucket, Storage.BucketSourceOption\[\] options)

```
public abstract List<Acl> listAcls(String bucket, Storage.BucketSourceOption[] options)
```

Lists the ACL entries for the provided bucket.

Example of listing the ACL entries for a blob.

 ```

 String bucketName = "my-unique-bucket";
 List<Acl> acls = storage.listAcls(bucketName);
 for (Acl acl : acls) {
   // do something with ACL entry
 }
 
```
 

Example of listing the ACL entries for a blob in a requester\_pays bucket with a user\_project option.

 ```

 String bucketName = "my-unique-bucket";
 List<Acl> acls = storage.listAcls(bucketName, BucketSourceOption.userProject("myProject"));
 for (Acl acl : acls) {
   // do something with ACL entry
 }
 
```
 

#### Behavioral Differences between HTTP and gRPC

1.  Calling this method for a Bucket which has <a target="\_blank"href="[https://cloud.google.com/storage/docs/uniform-bucket-level-access">Uniform](https://cloud.google.com/storage/docs/uniform-bucket-level-access">Uniform) bucket-level access enabled exhibits different behavior Depending on which Transport is used. For JSON, an HTTP 400 Bad Request error will be thrown. Whereas for gRPC, an empty list will be returned.

**Parameters**

**Name**

**Description**

`bucket`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

the name of the bucket to list ACLs for

`options`

`[BucketSourceOption](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.BucketSourceOption)[]`  

any number of BucketSourceOptions to apply to this operation

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Acl](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Acl)>`

### listDefaultAcls(String bucket)

```
public abstract List<Acl> listDefaultAcls(String bucket)
```

Lists the default blob ACL entries for the provided bucket.

Default ACLs are applied to a new blob within the bucket when no ACL was provided for that blob.

Example of listing the default ACL entries for a blob.

 ```

 String bucketName = "my-unique-bucket";
 List<Acl> acls = storage.listDefaultAcls(bucketName);
 for (Acl acl : acls) {
   // do something with ACL entry
 }
 
```
 

#### Behavioral Differences between HTTP and gRPC

1.  Calling this method for a Bucket which has <a target="\_blank"href="[https://cloud.google.com/storage/docs/uniform-bucket-level-access">Uniform](https://cloud.google.com/storage/docs/uniform-bucket-level-access">Uniform) bucket-level access enabled exhibits different behavior Depending on which Transport is used. For JSON, an HTTP 400 Bad Request error will be thrown. Whereas for gRPC, an empty list will be returned.

**Parameter**

**Name**

**Description**

`bucket`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Acl](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Acl)>`

### listHmacKeys(Storage.ListHmacKeysOption\[\] options)

```
public abstract Page<HmacKey.HmacKeyMetadata> listHmacKeys(Storage.ListHmacKeysOption[] options)
```

Lists HMAC keys for a given service account. Note this returns `HmacKeyMetadata` objects, which do not contain secret keys.

Example of listing HMAC keys, specifying project id.

 ```

 Page<HmacKey.HmacKeyMetadata> metadataPage = storage.listHmacKeys(
     Storage.ListHmacKeysOption.projectId("my-project-id"));
 for (HmacKey.HmacKeyMetadata hmacKeyMetadata : metadataPage.getValues()) {
     //do something with the metadata
 }
 
```
 

Example of listing HMAC keys, specifying max results and showDeletedKeys. Since projectId is not specified, the same project ID as the storage client instance will be used

 ```

 ServiceAccount serviceAccount = ServiceAccount.of("my-service-account@google.com");

 Page<HmacKey.HmacKeyMetadata> metadataPage = storage.listHmacKeys(
     Storage.ListHmacKeysOption.serviceAccount(serviceAccount),
     Storage.ListHmacKeysOption.maxResults(10L),
     Storage.ListHmacKeysOption.showDeletedKeys(true));
 for (HmacKey.HmacKeyMetadata hmacKeyMetadata : metadataPage.getValues()) {
     //do something with the metadata
 }
 
```
 

**Parameter**

**Name**

**Description**

`options`

`[ListHmacKeysOption](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.ListHmacKeysOption)[]`  

the options to apply to this operation

**Returns**

**Type**

**Description**

`[Page](https://cloud.google.com/java/docs/reference/gax/latest/com.google.api.gax.paging.Page.html)<[HmacKeyMetadata](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.HmacKey.HmacKeyMetadata)>`

### listNotifications(String bucket)

```
public abstract List<Notification> listNotifications(String bucket)
```

Retrieves the list of notifications associated with the bucket.

Example of listing the bucket notifications:

 ```

 String bucketName = "my-unique-bucket";
 List<Notification> notifications = storage.listNotifications(bucketName);
 
```
 

**Parameter**

**Name**

**Description**

`bucket`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

name of the bucket

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Notification](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Notification)>`

a list of [Notification](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Notification) objects added to the bucket.

### lockRetentionPolicy(BucketInfo bucket, Storage.BucketTargetOption\[\] options)

```
public abstract Bucket lockRetentionPolicy(BucketInfo bucket, Storage.BucketTargetOption[] options)
```

Locks bucket retention policy. Requires a local metageneration value in the request. Review example below.

Accepts an optional userProject [BucketTargetOption](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.BucketTargetOption) option which defines the project id to assign operational costs.

Warning: Once a retention policy is locked, it can't be unlocked, removed, or shortened.

Example of locking a retention policy on a bucket, only if its local metageneration value matches the bucket's service metageneration otherwise a [StorageException](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.StorageException) is thrown.

 ```

 String bucketName = "my-unique-bucket";
 Bucket bucket = storage.get(bucketName, BucketGetOption.fields(BucketField.METAGENERATION));
 storage.lockRetentionPolicy(bucket, BucketTargetOption.metagenerationMatch());
 
```
 

**Parameters**

**Name**

**Description**

`bucket`

`[BucketInfo](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.BucketInfo)`  

`options`

`[BucketTargetOption](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.BucketTargetOption)[]`  

**Returns**

**Type**

**Description**

`[Bucket](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Bucket)`

a `Bucket` object of the locked bucket

### readAllBytes(BlobId blob, Storage.BlobSourceOption\[\] options)

```
public abstract byte[] readAllBytes(BlobId blob, Storage.BlobSourceOption[] options)
```

Reads all the bytes from a blob.

Example of reading all bytes of a blob's specific generation, otherwise a [StorageException](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.StorageException) is thrown.

 ```

 String bucketName = "my-unique-bucket";
 String blobName = "my-blob-name";
 long blobGeneration = 42;
 BlobId blobId = BlobId.of(bucketName, blobName, blobGeneration);
 byte[] content = storage.readAllBytes(blobId);
 
```
 

Example of reading all bytes of an encrypted blob.

 ```

 String bucketName = "my-unique-bucket";
 String blobName = "my-blob-name";
 String decryptionKey = "my_encryption_key";
 byte[] content = storage.readAllBytes(
     bucketName, blobName, BlobSourceOption.decryptionKey(decryptionKey));
 
```
 

**Parameters**

**Name**

**Description**

`blob`

`[BlobId](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.BlobId)`  

`options`

`[BlobSourceOption](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.BlobSourceOption)[]`  

**Returns**

**Type**

**Description**

`byte[]`

the blob's content

### readAllBytes(String bucket, String blob, Storage.BlobSourceOption\[\] options)

```
public abstract byte[] readAllBytes(String bucket, String blob, Storage.BlobSourceOption[] options)
```

Reads all the bytes from a blob.

Example of reading all bytes of a blob, if generation matches a value, otherwise a [StorageException](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.StorageException) is thrown.

 ```

 String bucketName = "my-unique-bucket";
 String blobName = "my-blob-name";
 long blobGeneration = 42";
 byte[] content = storage.readAllBytes(bucketName, blobName,
     BlobSourceOption.generationMatch(blobGeneration));
 
```
 

**Parameters**

**Name**

**Description**

`bucket`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`blob`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`options`

`[BlobSourceOption](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.BlobSourceOption)[]`  

**Returns**

**Type**

**Description**

`byte[]`

the blob's content

### reader(BlobId blob, Storage.BlobSourceOption\[\] options)

```
public abstract ReadChannel reader(BlobId blob, Storage.BlobSourceOption[] options)
```

Returns a channel for reading the blob's content. If `blob.generation()` is set data corresponding to that generation is read. If `blob.generation()` is `null` the blob's latest generation is read. If the blob changes while reading (i.e. [BlobInfo#getEtag()](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.BlobInfo#com_google_cloud_storage_BlobInfo_getEtag__) changes), subsequent calls to `blobReadChannel.read(ByteBuffer)` may throw [StorageException](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.StorageException).

The [BlobSourceOption#generationMatch()](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.BlobSourceOption#com_google_cloud_storage_Storage_BlobSourceOption_generationMatch_) and [BlobSourceOption#generationMatch(long)](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.BlobSourceOption#com_google_cloud_storage_Storage_BlobSourceOption_generationMatch_) options can be used to ensure that `blobReadChannel.read(ByteBuffer)` calls will throw [StorageException](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.StorageException) if the blob\`s generation differs from the expected one.

Example of reading a blob's content through a reader.

 ```

 String bucketName = "my-unique-bucket";
 String blobName = "my-blob-name";
 BlobId blobId = BlobId.of(bucketName, blobName);
 try (ReadChannel reader = storage.reader(blobId)) {
   ByteBuffer bytes = ByteBuffer.allocate(64 * 1024);
   while (reader.read(bytes) > 0) {
     bytes.flip();
     // do something with bytes
     bytes.clear();
   }
 }
 
```
 

**Parameters**

**Name**

**Description**

`blob`

`[BlobId](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.BlobId)`  

`options`

`[BlobSourceOption](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.BlobSourceOption)[]`  

**Returns**

**Type**

**Description**

`com.google.cloud.ReadChannel`

### reader(String bucket, String blob, Storage.BlobSourceOption\[\] options)

```
public abstract ReadChannel reader(String bucket, String blob, Storage.BlobSourceOption[] options)
```

Returns a channel for reading the blob's content. The blob's latest generation is read. If the blob changes while reading (i.e. [BlobInfo#getEtag()](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.BlobInfo#com_google_cloud_storage_BlobInfo_getEtag__) changes), subsequent calls to `blobReadChannel.read(ByteBuffer)` may throw [StorageException](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.StorageException).

Example of reading a blob's content through a reader.

 ```

 String bucketName = "my-unique-bucket";
 String blobName = "my-blob-name";
 try (ReadChannel reader = storage.reader(bucketName, blobName)) {
   ByteBuffer bytes = ByteBuffer.allocate(64 * 1024);
   while (reader.read(bytes) > 0) {
     bytes.flip();
     // do something with bytes
     bytes.clear();
   }
 }
 
```
 

**Parameters**

**Name**

**Description**

`bucket`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`blob`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`options`

`[BlobSourceOption](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.BlobSourceOption)[]`  

**Returns**

**Type**

**Description**

`com.google.cloud.ReadChannel`

### setIamPolicy(String bucket, Policy policy, Storage.BucketSourceOption\[\] options)

```
public abstract Policy setIamPolicy(String bucket, Policy policy, Storage.BucketSourceOption[] options)
```

Updates the IAM policy on the specified bucket.

To prevent corrupting policies when you update an IAM policy with `Storage.setIamPolicy`, the ETAG value is used to perform optimistic concurrency.

Example of updating the IAM policy on a bucket.

 ```

 // We want to make all objects in our bucket publicly readable.
 String bucketName = "my-unique-bucket";
 Policy currentPolicy = storage.getIamPolicy(bucketName);
 Policy updatedPolicy =
     storage.setIamPolicy(
         bucketName,
         currentPolicy.toBuilder()
             .addIdentity(StorageRoles.objectViewer(), Identity.allUsers())
             .build());
 
```
 

**Parameters**

**Name**

**Description**

`bucket`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

name of the bucket where the setIamPolicy operation takes place

`policy`

`com.google.cloud.Policy`  

policy to be set on the specified bucket

`options`

`[BucketSourceOption](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.BucketSourceOption)[]`  

extra parameters to apply to this operation

**Returns**

**Type**

**Description**

`com.google.cloud.Policy`

### signUrl(BlobInfo blobInfo, long duration, TimeUnit unit, Storage.SignUrlOption\[\] options)

```
public abstract URL signUrl(BlobInfo blobInfo, long duration, TimeUnit unit, Storage.SignUrlOption[] options)
```

Generates a signed URL for a blob. If you have a blob that you want to allow access to for a fixed amount of time, you can use this method to generate a URL that is only valid within a certain time period. This is particularly useful if you don't want publicly accessible blobs, but also don't want to require users to explicitly log in. Signing a URL requires a service account signer. If an instance of com.google.auth.ServiceAccountSigner was passed to [StorageOptions](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.StorageOptions)' builder via `setCredentials(Credentials)` or the default credentials are being used and the environment variable `GOOGLE_APPLICATION_CREDENTIALS` is set or your application is running in App Engine, then `signUrl` will use that credentials to sign the URL. If the credentials passed to [StorageOptions](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.StorageOptions) do not implement ServiceAccountSigner (this is the case, for instance, for Google Cloud SDK credentials) then `signUrl` will throw an IllegalStateException unless an implementation of ServiceAccountSigner is passed using the [SignUrlOption#signWith(ServiceAccountSigner)](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.SignUrlOption#com_google_cloud_storage_Storage_SignUrlOption_signWith_) option.

A service account signer is looked for in the following order:

1.  The signer passed with the option [SignUrlOption#signWith(ServiceAccountSigner)](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.SignUrlOption#com_google_cloud_storage_Storage_SignUrlOption_signWith_)
2.  The credentials passed to [StorageOptions](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.StorageOptions)
3.  The default credentials, if no credentials were passed to [StorageOptions](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.StorageOptions)

Example of creating a signed URL that is valid for 1 week, using the default credentials for signing the URL, the default signing method (V2), and the default URL style (path-style):

 ```

 String bucketName = "my-unique-bucket";
 String blobName = "my-blob-name";
 URL signedUrl = storage.signUrl(
     BlobInfo.newBuilder(bucketName, blobName).build(),
     7, TimeUnit.DAYS);
 
```
 

Example of creating a signed URL passing the [SignUrlOption#withV4Signature()](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.SignUrlOption#com_google_cloud_storage_Storage_SignUrlOption_withV4Signature_) option, which enables V4 signing:

 ```

 String bucketName = "my-unique-bucket";
 String blobName = "my-blob-name";
 URL signedUrl = storage.signUrl(
     BlobInfo.newBuilder(bucketName, blobName).build(),
     7, TimeUnit.DAYS,
     Storage.SignUrlOption.withV4Signature());
 
```
 

Example of creating a signed URL passing the [SignUrlOption#withVirtualHostedStyle()](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.SignUrlOption#com_google_cloud_storage_Storage_SignUrlOption_withVirtualHostedStyle_) option, which specifies the bucket name in the hostname of the URI, rather than in the path:

 ```

 URL signedUrl = storage.signUrl(
     BlobInfo.newBuilder(bucketName, blobName).build(),
     1, TimeUnit.DAYS,
     Storage.SignUrlOption.withVirtualHostedStyle());
 
```
 

Example of creating a signed URL passing the [SignUrlOption#withPathStyle()](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.SignUrlOption#com_google_cloud_storage_Storage_SignUrlOption_withPathStyle_) option, which specifies the bucket name in path portion of the URI, rather than in the hostname:

 ```

 URL signedUrl = storage.signUrl(
     BlobInfo.newBuilder(bucketName, blobName).build(),
     1, TimeUnit.DAYS,
     Storage.SignUrlOption.withPathStyle());
 
```
 

Example of creating a signed URL passing the [SignUrlOption#signWith(ServiceAccountSigner)](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.SignUrlOption#com_google_cloud_storage_Storage_SignUrlOption_signWith_) option, that will be used for signing the URL:

 ```

 String bucketName = "my-unique-bucket";
 String blobName = "my-blob-name";
 String kfPath = "/path/to/keyfile.json";
 URL signedUrl = storage.signUrl(
     BlobInfo.newBuilder(bucketName, blobName).build(),
     7, TimeUnit.DAYS,
     SignUrlOption.signWith(ServiceAccountCredentials.fromStream(new FileInputStream(kfPath))));
 
```
 

Note that the ServiceAccountSigner may require additional configuration to enable URL signing. See the documentation for the implementation for more details.

Example of creating a signed URL for a blob with generation:

 ```

 String bucketName = "my-unique-bucket";
 String blobName = "my-blob-name";
 long generation = 1576656755290328L;

 URL signedUrl = storage.signUrl(
     BlobInfo.newBuilder(bucketName, blobName, generation).build(),
     7, TimeUnit.DAYS,
     SignUrlOption.withQueryParams(ImmutableMap.of("generation", String.valueOf(generation))));
 
```
 

See Also: [Signed-URLs](https://cloud.google.com/storage/docs/access-control#Signed-URLs)

**Parameters**

**Name**

**Description**

`blobInfo`

`[BlobInfo](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.BlobInfo)`  

the blob associated with the signed URL

`duration`

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

time until the signed URL expires, expressed in `unit`. The finest granularity supported is 1 second, finer granularities will be truncated

`unit`

`[TimeUnit](https://docs.oracle.com/javase/8/docs/api/java/util/concurrent/TimeUnit.html)`  

time unit of the `duration` parameter

`options`

`[SignUrlOption](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.SignUrlOption)[]`  

optional URL signing options

**Returns**

**Type**

**Description**

`[URL](https://docs.oracle.com/javase/8/docs/api/java/net/URL.html)`

### testIamPermissions(String bucket, List<String> permissions, Storage.BucketSourceOption\[\] options)

```
public abstract List<Boolean> testIamPermissions(String bucket, List<String> permissions, Storage.BucketSourceOption[] options)
```

Tests whether the caller holds the permissions on the specified bucket. Returns a list of booleans in the same placement and order in which the permissions were specified.

Example of testing permissions on a bucket.

 ```

 String bucketName = "my-unique-bucket";
 List<Boolean> response =
     storage.testIamPermissions(
         bucketName,
         ImmutableList.of("storage.buckets.get", "storage.buckets.getIamPolicy"));
 for (boolean hasPermission : response) {
   // Do something with permission test response
 }
 
```
 

**Parameters**

**Name**

**Description**

`bucket`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

name of the bucket where the testIamPermissions operation takes place

`permissions`

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

list of permissions to test on the bucket

`options`

`[BucketSourceOption](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.BucketSourceOption)[]`  

extra parameters to apply to this operation

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Boolean](https://docs.oracle.com/javase/8/docs/api/java/lang/Boolean.html)>`

### update(BlobInfo blobInfo)

```
public abstract Blob update(BlobInfo blobInfo)
```

Updates the properties of the blob. This method issues an RPC request to merge the current blob properties with the properties in the provided `blobInfo`. Properties not defined in `blobInfo` will not be updated. To unset a blob property this property in `blobInfo` should be explicitly set to `null`.

Bucket or blob's name cannot be changed by this method. If you want to rename the blob or move it to a different bucket use the [Blob#copyTo](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Blob#com_google_cloud_storage_Blob_copyTo_) and [#delete](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage#com_google_cloud_storage_Storage_delete_) operations.

Property update alters the blob metadata generation and doesn't alter the blob generation.

Example of how to update blob's user provided metadata and unset the content type:

 ```

 Map<String, String> metadataUpdate = new HashMap<>();
 metadataUpdate.put("keyToAdd", "new value");
 metadataUpdate.put("keyToRemove", null);
 BlobInfo blobUpdate = BlobInfo.newBuilder(bucketName, blobName)
     .setMetadata(metadataUpdate)
     .setContentType(null)
     .build();
 Blob blob = storage.update(blobUpdate);
 
```
 

See Also: [https://cloud.google.com/storage/docs/json\_api/v1/objects/update](https://cloud.google.com/storage/docs/json_api/v1/objects/update)

**Parameter**

**Name**

**Description**

`blobInfo`

`[BlobInfo](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.BlobInfo)`  

information to update

**Returns**

**Type**

**Description**

`[Blob](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Blob)`

the updated blob

### update(BlobInfo blobInfo, Storage.BlobTargetOption\[\] options)

```
public abstract Blob update(BlobInfo blobInfo, Storage.BlobTargetOption[] options)
```

Updates the blob properties if the preconditions specified by `options` are met. The property update works as described in [#update(BlobInfo)](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage#com_google_cloud_storage_Storage_update_com_google_cloud_storage_BlobInfo_).

`options` parameter can contain the preconditions for applying the update. E.g. update of the blob properties might be required only if the properties have not been updated externally. `StorageException` with the code `412` is thrown if preconditions fail.

Example of updating the content type only if the properties are not updated externally:

 ```

 BlobId blobId = BlobId.of(bucketName, blobName);
 BlobInfo blobInfo = BlobInfo.newBuilder(blobId).setContentType("text/plain").build();
 Blob blob = storage.create(blobInfo);

 doSomething();

 BlobInfo update = blob.toBuilder().setContentType("multipart/form-data").build();
 Storage.BlobTargetOption option = Storage.BlobTargetOption.metagenerationMatch();
 try {
   storage.update(update, option);
 } catch (StorageException e) {
   if (e.getCode() == 412) {
     // the properties were updated externally
   } else {
     throw e;
   }
 }
 
```
 

See Also: [https://cloud.google.com/storage/docs/json\_api/v1/objects/update](https://cloud.google.com/storage/docs/json_api/v1/objects/update)

**Parameters**

**Name**

**Description**

`blobInfo`

`[BlobInfo](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.BlobInfo)`  

information to update

`options`

`[BlobTargetOption](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.BlobTargetOption)[]`  

preconditions to apply the update

**Returns**

**Type**

**Description**

`[Blob](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Blob)`

the updated blob

### update(BlobInfo\[\] blobInfos)

```
public abstract List<Blob> update(BlobInfo[] blobInfos)
```

Updates the requested blobs. A batch request is used to perform this call. The original properties are merged with the properties in the provided `BlobInfo` objects. Unsetting a property can be done by setting the property of the provided `BlobInfo` objects to `null`. See [#update(BlobInfo)](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage#com_google_cloud_storage_Storage_update_com_google_cloud_storage_BlobInfo_) for a code example.

Example of updating information on several blobs using a single batch request.

 ```

 String bucketName = "my-unique-bucket";
 String blobName1 = "my-blob-name1";
 String blobName2 = "my-blob-name2";
 Blob firstBlob = storage.get(bucketName, blobName1);
 Blob secondBlob = storage.get(bucketName, blobName2);
 List<Blob> updatedBlobs = storage.update(
     firstBlob.toBuilder().setContentType("text/plain").build(),
     secondBlob.toBuilder().setContentType("text/plain").build());
 
```
 

**Parameter**

**Name**

**Description**

`blobInfos`

`[BlobInfo](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.BlobInfo)[]`  

blobs to update

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Blob](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Blob)>`

an immutable list of `Blob` objects. If a blob does not exist or access to it has been denied the corresponding item in the list is `null`.

### update(BucketInfo bucketInfo, Storage.BucketTargetOption\[\] options)

```
public abstract Bucket update(BucketInfo bucketInfo, Storage.BucketTargetOption[] options)
```

Updates bucket information.

Accepts an optional userProject [BucketTargetOption](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.BucketTargetOption) option which defines the project id to assign operational costs.

Example of updating bucket information.

 ```

 String bucketName = "my-unique-bucket";
 BucketInfo bucketInfo = BucketInfo.newBuilder(bucketName).setVersioningEnabled(true).build();
 Bucket bucket = storage.update(bucketInfo);
 
```
 

**Parameters**

**Name**

**Description**

`bucketInfo`

`[BucketInfo](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.BucketInfo)`  

`options`

`[BucketTargetOption](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.BucketTargetOption)[]`  

**Returns**

**Type**

**Description**

`[Bucket](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Bucket)`

the updated bucket

### update(Iterable<BlobInfo> blobInfos)

```
public abstract List<Blob> update(Iterable<BlobInfo> blobInfos)
```

Updates the requested blobs. A batch request is used to perform this call. The original properties are merged with the properties in the provided `BlobInfo` objects. Unsetting a property can be done by setting the property of the provided `BlobInfo` objects to `null`. See [#update(BlobInfo)](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage#com_google_cloud_storage_Storage_update_com_google_cloud_storage_BlobInfo_) for a code example.

Example of updating information on several blobs using a single batch request.

 ```

 String bucketName = "my-unique-bucket";
 String blobName1 = "my-blob-name1";
 String blobName2 = "my-blob-name2";
 Blob firstBlob = storage.get(bucketName, blobName1);
 Blob secondBlob = storage.get(bucketName, blobName2);
 List<BlobInfo> blobs = new LinkedList<>();
 blobs.add(firstBlob.toBuilder().setContentType("text/plain").build());
 blobs.add(secondBlob.toBuilder().setContentType("text/plain").build());
 List<Blob> updatedBlobs = storage.update(blobs);
 
```
 

**Parameter**

**Name**

**Description**

`blobInfos`

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<[BlobInfo](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.BlobInfo)>`  

blobs to update

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Blob](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Blob)>`

an immutable list of `Blob` objects. If a blob does not exist or access to it has been denied the corresponding item in the list is `null`.

### updateAcl(BlobId blob, Acl acl)

```
public abstract Acl updateAcl(BlobId blob, Acl acl)
```

Updates an ACL entry on the specified blob.

Example of updating a new ACL entry on a blob.

 ```

 String bucketName = "my-unique-bucket";
 String blobName = "my-blob-name";
 long blobGeneration = 42;
 BlobId blobId = BlobId.of(bucketName, blobName, blobGeneration);
 Acl acl = storage.updateAcl(blobId, Acl.of(User.ofAllAuthenticatedUsers(), Role.OWNER));
 
```
 

**Parameters**

**Name**

**Description**

`blob`

`[BlobId](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.BlobId)`  

`acl`

`[Acl](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Acl)`  

**Returns**

**Type**

**Description**

`[Acl](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Acl)`

### updateAcl(String bucket, Acl acl)

```
public abstract Acl updateAcl(String bucket, Acl acl)
```

See Also: [#updateAcl(String, Acl, BucketSourceOption...)](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage#com_google_cloud_storage_Storage_updateAcl_)

**Parameters**

**Name**

**Description**

`bucket`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`acl`

`[Acl](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Acl)`  

**Returns**

**Type**

**Description**

`[Acl](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Acl)`

### updateAcl(String bucket, Acl acl, Storage.BucketSourceOption\[\] options)

```
public abstract Acl updateAcl(String bucket, Acl acl, Storage.BucketSourceOption[] options)
```

Updates an ACL entry on the specified bucket.

Example of updating a new ACL entry on a bucket.

 ```

 String bucketName = "my-unique-bucket";
 Acl acl = storage.updateAcl(bucketName, Acl.of(User.ofAllAuthenticatedUsers(), Role.OWNER));
 
```
 

Example of updating a new ACL entry on a requester\_pays bucket with a user\_project option.

 ```

 String bucketName = "my-unique-bucket";
 Acl acl = storage.updateAcl(bucketName, Acl.of(User.ofAllAuthenticatedUsers(), Role.OWNER),
     BucketSourceOption.userProject("myProject"));
 
```
 

**Parameters**

**Name**

**Description**

`bucket`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

name of the bucket where the updateAcl operation takes place

`acl`

`[Acl](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Acl)`  

ACL to update

`options`

`[BucketSourceOption](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.BucketSourceOption)[]`  

extra parameters to apply to this operation

**Returns**

**Type**

**Description**

`[Acl](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Acl)`

### updateDefaultAcl(String bucket, Acl acl)

```
public abstract Acl updateDefaultAcl(String bucket, Acl acl)
```

Updates a default blob ACL entry on the specified bucket.

Default ACLs are applied to a new blob within the bucket when no ACL was provided for that blob.

Example of updating a new default ACL entry on a bucket.

 ```

 String bucketName = "my-unique-bucket";
 Acl acl =
     storage.updateDefaultAcl(bucketName, Acl.of(User.ofAllAuthenticatedUsers(), Role.OWNER));
 
```
 

**Parameters**

**Name**

**Description**

`bucket`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`acl`

`[Acl](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Acl)`  

**Returns**

**Type**

**Description**

`[Acl](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Acl)`

### updateHmacKeyState(HmacKey.HmacKeyMetadata hmacKeyMetadata, HmacKey.HmacKeyState state, Storage.UpdateHmacKeyOption\[\] options)

```
public abstract HmacKey.HmacKeyMetadata updateHmacKeyState(HmacKey.HmacKeyMetadata hmacKeyMetadata, HmacKey.HmacKeyState state, Storage.UpdateHmacKeyOption[] options)
```

Updates the state of an HMAC key and returns the updated metadata.

Example of updating the state of an HMAC key.

 ```

 String hmacKeyAccessId = "my-access-id";
 HmacKey.HmacKeyMetadata hmacKeyMetadata = storage.getHmacKey(hmacKeyAccessId);

 storage.updateHmacKeyState(hmacKeyMetadata, HmacKey.HmacKeyState.INACTIVE);
 
```
 

**Parameters**

**Name**

**Description**

`hmacKeyMetadata`

`[HmacKey.HmacKeyMetadata](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.HmacKey.HmacKeyMetadata)`  

`state`

`[HmacKey.HmacKeyState](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.HmacKey.HmacKeyState)`  

`options`

`[UpdateHmacKeyOption](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.UpdateHmacKeyOption)[]`  

**Returns**

**Type**

**Description**

`[HmacKey.HmacKeyMetadata](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.HmacKey.HmacKeyMetadata)`

### writer(BlobInfo blobInfo, Storage.BlobWriteOption\[\] options)

```
public abstract WriteChannel writer(BlobInfo blobInfo, Storage.BlobWriteOption[] options)
```

Creates a blob and returns a channel for writing its content. By default any MD5 and CRC32C values in the given `blobInfo` are ignored unless requested via the `BlobWriteOption.md5Match` and `BlobWriteOption.crc32cMatch` options.

Example of writing a blob's content through a writer:

 ```

 String bucketName = "my-unique-bucket";
 String blobName = "my-blob-name";
 BlobId blobId = BlobId.of(bucketName, blobName);
 byte[] content = "Hello, World!".getBytes(UTF_8);
 BlobInfo blobInfo = BlobInfo.newBuilder(blobId).setContentType("text/plain").build();
 try (WriteChannel writer = storage.writer(blobInfo)) {
     writer.write(ByteBuffer.wrap(content, 0, content.length));
 } catch (IOException ex) {
   // handle exception
 }
 
```
 

**Parameters**

**Name**

**Description**

`blobInfo`

`[BlobInfo](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.BlobInfo)`  

`options`

`[BlobWriteOption](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Storage.BlobWriteOption)[]`  

**Returns**

**Type**

**Description**

`com.google.cloud.WriteChannel`

### writer(URL signedURL)

```
public abstract WriteChannel writer(URL signedURL)
```

Accepts signed URL and return a channel for writing content.

Example of writing content through a writer using signed URL.

 ```

 String bucketName = "my-unique-bucket";
 String blobName = "my-blob-name";
 BlobId blobId = BlobId.of(bucketName, blobName);
 byte[] content = "Hello, World!".getBytes(UTF_8);
 BlobInfo blobInfo = BlobInfo.newBuilder(blobId).setContentType("text/plain").build();
 URL signedURL = storage.signUrl(
     blobInfo,
     1, TimeUnit.HOURS,
     Storage.SignUrlOption.httpMethod(HttpMethod.POST));
 try (WriteChannel writer = storage.writer(signedURL)) {
    writer.write(ByteBuffer.wrap(content, 0, content.length));
 }
 
```
 

**Parameter**

**Name**

**Description**

`signedURL`

`[URL](https://docs.oracle.com/javase/8/docs/api/java/net/URL.html)`  

**Returns**

**Type**

**Description**

`com.google.cloud.WriteChannel`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.

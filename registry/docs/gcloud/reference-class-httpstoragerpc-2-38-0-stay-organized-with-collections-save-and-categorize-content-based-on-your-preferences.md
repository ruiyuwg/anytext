-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class HttpStorageRpc (2.38.0) Stay organized with collections Save and categorize content based on your preferences.

2.64.0 (latest) 2.63.0 2.62.1 2.60.0 2.59.0 2.58.1 2.57.0 2.56.0 2.55.0 2.54.0 2.53.3 2.52.3 2.50.0 2.49.0 2.48.2 2.47.0 2.46.0 2.45.0 2.44.1 2.43.2 2.42.0 2.41.0 2.40.1 2.39.0 2.38.0 2.37.0 2.36.1 2.34.0 2.33.0 2.32.1 2.30.1 2.29.1 2.28.0 2.27.1 2.24.0 2.23.0 2.22.6 2.21.0 2.20.2 2.19.0 2.18.0 2.17.2 2.16.0 2.15.1 2.14.0 2.13.1 2.12.0 2.11.3 2.10.0 2.9.3 2.8.1 2.7.1 2.6.1 2.5.1 2.4.5 2.3.0 2.2.3 2.1.10

```
public class HttpStorageRpc implements StorageRpc
```

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> HttpStorageRpc

## Implements

[StorageRpc](/java/docs/reference/google-cloud-storage/2.38.0/com.google.cloud.storage.spi.v1.StorageRpc)

## Inherited Members

[Object.clone()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#clone--)

[Object.equals(Object)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#equals-java.lang.Object-)

[Object.finalize()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#finalize--)

[Object.getClass()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#getClass--)

[Object.hashCode()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#hashCode--)

[Object.notify()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notify--)

[Object.notifyAll()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notifyAll--)

[Object.toString()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#toString--)

[Object.wait()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait--)

[Object.wait(long)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-)

[Object.wait(long,int)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-int-)

## Static Fields

### DEFAULT\_PROJECTION

```
public static final String DEFAULT_PROJECTION
```

**Field Value**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### NO\_ACL\_PROJECTION

```
public static final String NO_ACL_PROJECTION
```

**Field Value**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

## Constructors

### HttpStorageRpc(StorageOptions options)

```
public HttpStorageRpc(StorageOptions options)
```

**Parameter**

**Name**

**Description**

`options`

`[StorageOptions](/java/docs/reference/google-cloud-storage/2.38.0/com.google.cloud.storage.StorageOptions)`  

### HttpStorageRpc(StorageOptions options, JsonFactory jsonFactory)

```
public HttpStorageRpc(StorageOptions options, JsonFactory jsonFactory)
```

**Parameters**

**Name**

**Description**

`options`

`[StorageOptions](/java/docs/reference/google-cloud-storage/2.38.0/com.google.cloud.storage.StorageOptions)`  

`jsonFactory`

`com.google.api.client.json.JsonFactory`  

## Methods

### compose(Iterable<StorageObject> sources, StorageObject target, Map<StorageRpc.Option,?> targetOptions)

```
public StorageObject compose(Iterable<StorageObject> sources, StorageObject target, Map<StorageRpc.Option,?> targetOptions)
```

Sends a compose request.

**Parameters**

**Name**

**Description**

`sources`

`[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<com.google.api.services.storage.model.StorageObject>`  

`target`

`com.google.api.services.storage.model.StorageObject`  

`targetOptions`

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[Option](/java/docs/reference/google-cloud-storage/2.38.0/com.google.cloud.storage.spi.v1.StorageRpc.Option),?>`  

**Returns**

**Type**

**Description**

`com.google.api.services.storage.model.StorageObject`

### continueRewrite(StorageRpc.RewriteResponse previousResponse)

```
public StorageRpc.RewriteResponse continueRewrite(StorageRpc.RewriteResponse previousResponse)
```

Continues rewriting on an already open rewrite channel.

**Parameter**

**Name**

**Description**

`previousResponse`

`[StorageRpc.RewriteResponse](/java/docs/reference/google-cloud-storage/2.38.0/com.google.cloud.storage.spi.v1.StorageRpc.RewriteResponse)`  

**Returns**

**Type**

**Description**

`[StorageRpc.RewriteResponse](/java/docs/reference/google-cloud-storage/2.38.0/com.google.cloud.storage.spi.v1.StorageRpc.RewriteResponse)`

### create(Bucket bucket, Map<StorageRpc.Option,?> options)

```
public Bucket create(Bucket bucket, Map<StorageRpc.Option,?> options)
```

Creates a new bucket.

**Parameters**

**Name**

**Description**

`bucket`

`com.google.api.services.storage.model.Bucket`  

`options`

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[Option](/java/docs/reference/google-cloud-storage/2.38.0/com.google.cloud.storage.spi.v1.StorageRpc.Option),?>`  

**Returns**

**Type**

**Description**

`com.google.api.services.storage.model.Bucket`

### create(StorageObject storageObject, InputStream content, Map<StorageRpc.Option,?> options)

```
public StorageObject create(StorageObject storageObject, InputStream content, Map<StorageRpc.Option,?> options)
```

Creates a new storage object.

**Parameters**

**Name**

**Description**

`storageObject`

`com.google.api.services.storage.model.StorageObject`  

`content`

`[InputStream](https://docs.oracle.com/javase/8/docs/api/java/io/InputStream.html)`  

`options`

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[Option](/java/docs/reference/google-cloud-storage/2.38.0/com.google.cloud.storage.spi.v1.StorageRpc.Option),?>`  

**Returns**

**Type**

**Description**

`com.google.api.services.storage.model.StorageObject`

### createAcl(BucketAccessControl acl, Map<StorageRpc.Option,?> options)

```
public BucketAccessControl createAcl(BucketAccessControl acl, Map<StorageRpc.Option,?> options)
```

Creates a new ACL entry on the specified bucket.

**Parameters**

**Name**

**Description**

`acl`

`com.google.api.services.storage.model.BucketAccessControl`  

`options`

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[Option](/java/docs/reference/google-cloud-storage/2.38.0/com.google.cloud.storage.spi.v1.StorageRpc.Option),?>`  

**Returns**

**Type**

**Description**

`com.google.api.services.storage.model.BucketAccessControl`

### createAcl(ObjectAccessControl acl)

```
public ObjectAccessControl createAcl(ObjectAccessControl acl)
```

Creates a new ACL entry on the specified object.

**Parameter**

**Name**

**Description**

`acl`

`com.google.api.services.storage.model.ObjectAccessControl`  

**Returns**

**Type**

**Description**

`com.google.api.services.storage.model.ObjectAccessControl`

### createBatch()

```
public RpcBatch createBatch()
```

Creates an empty batch.

**Returns**

**Type**

**Description**

`[RpcBatch](/java/docs/reference/google-cloud-storage/2.38.0/com.google.cloud.storage.spi.v1.RpcBatch)`

### createDefaultAcl(ObjectAccessControl acl)

```
public ObjectAccessControl createDefaultAcl(ObjectAccessControl acl)
```

Creates a new default object ACL entry on the specified bucket.

**Parameter**

**Name**

**Description**

`acl`

`com.google.api.services.storage.model.ObjectAccessControl`  

**Returns**

**Type**

**Description**

`com.google.api.services.storage.model.ObjectAccessControl`

### createHmacKey(String serviceAccountEmail, Map<StorageRpc.Option,?> options)

```
public HmacKey createHmacKey(String serviceAccountEmail, Map<StorageRpc.Option,?> options)
```

Creates a new HMAC key for the provided service account email.

**Parameters**

**Name**

**Description**

`serviceAccountEmail`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`options`

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[Option](/java/docs/reference/google-cloud-storage/2.38.0/com.google.cloud.storage.spi.v1.StorageRpc.Option),?>`  

**Returns**

**Type**

**Description**

`com.google.api.services.storage.model.HmacKey`

### createNotification(String bucket, Notification notification)

```
public Notification createNotification(String bucket, Notification notification)
```

Creates the notification for a given bucket.

**Parameters**

**Name**

**Description**

`bucket`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`notification`

`com.google.api.services.storage.model.Notification`  

**Returns**

**Type**

**Description**

`com.google.api.services.storage.model.Notification`

### delete(Bucket bucket, Map<StorageRpc.Option,?> options)

```
public boolean delete(Bucket bucket, Map<StorageRpc.Option,?> options)
```

Deletes the requested bucket.

**Parameters**

**Name**

**Description**

`bucket`

`com.google.api.services.storage.model.Bucket`  

`options`

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[Option](/java/docs/reference/google-cloud-storage/2.38.0/com.google.cloud.storage.spi.v1.StorageRpc.Option),?>`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### delete(StorageObject blob, Map<StorageRpc.Option,?> options)

```
public boolean delete(StorageObject blob, Map<StorageRpc.Option,?> options)
```

Deletes the requested storage object.

**Parameters**

**Name**

**Description**

`blob`

`com.google.api.services.storage.model.StorageObject`  

`options`

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[Option](/java/docs/reference/google-cloud-storage/2.38.0/com.google.cloud.storage.spi.v1.StorageRpc.Option),?>`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### deleteAcl(String bucket, String object, Long generation, String entity)

```
public boolean deleteAcl(String bucket, String object, Long generation, String entity)
```

Deletes the ACL entry for the specified entity on the specified object.

**Parameters**

**Name**

**Description**

`bucket`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`object`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`generation`

`[Long](https://docs.oracle.com/javase/8/docs/api/java/lang/Long.html)`  

`entity`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### deleteAcl(String bucket, String entity, Map<StorageRpc.Option,?> options)

```
public boolean deleteAcl(String bucket, String entity, Map<StorageRpc.Option,?> options)
```

Deletes the ACL entry for the specified entity on the specified bucket.

**Parameters**

**Name**

**Description**

`bucket`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`entity`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`options`

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[Option](/java/docs/reference/google-cloud-storage/2.38.0/com.google.cloud.storage.spi.v1.StorageRpc.Option),?>`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### deleteDefaultAcl(String bucket, String entity)

```
public boolean deleteDefaultAcl(String bucket, String entity)
```

Deletes the default object ACL entry for the specified entity on the specified bucket.

**Parameters**

**Name**

**Description**

`bucket`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`entity`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### deleteHmacKey(HmacKeyMetadata hmacKeyMetadata, Map<StorageRpc.Option,?> options)

```
public void deleteHmacKey(HmacKeyMetadata hmacKeyMetadata, Map<StorageRpc.Option,?> options)
```

Deletes the HMAC key associated with the provided metadata object.

**Parameters**

**Name**

**Description**

`hmacKeyMetadata`

`com.google.api.services.storage.model.HmacKeyMetadata`  

`options`

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[Option](/java/docs/reference/google-cloud-storage/2.38.0/com.google.cloud.storage.spi.v1.StorageRpc.Option),?>`  

### deleteNotification(String bucket, String notification)

```
public boolean deleteNotification(String bucket, String notification)
```

Deletes the notification with the specified id on the bucket.

**Parameters**

**Name**

**Description**

`bucket`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`notification`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### get(Bucket bucket, Map<StorageRpc.Option,?> options)

```
public Bucket get(Bucket bucket, Map<StorageRpc.Option,?> options)
```

Returns the requested bucket or `null` if not found.

**Parameters**

**Name**

**Description**

`bucket`

`com.google.api.services.storage.model.Bucket`  

`options`

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[Option](/java/docs/reference/google-cloud-storage/2.38.0/com.google.cloud.storage.spi.v1.StorageRpc.Option),?>`  

**Returns**

**Type**

**Description**

`com.google.api.services.storage.model.Bucket`

### get(StorageObject object, Map<StorageRpc.Option,?> options)

```
public StorageObject get(StorageObject object, Map<StorageRpc.Option,?> options)
```

Returns the requested storage object or `null` if not found.

**Parameters**

**Name**

**Description**

`object`

`com.google.api.services.storage.model.StorageObject`  

`options`

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[Option](/java/docs/reference/google-cloud-storage/2.38.0/com.google.cloud.storage.spi.v1.StorageRpc.Option),?>`  

**Returns**

**Type**

**Description**

`com.google.api.services.storage.model.StorageObject`

### getAcl(String bucket, String object, Long generation, String entity)

```
public ObjectAccessControl getAcl(String bucket, String object, Long generation, String entity)
```

Returns the ACL entry for the specified entity on the specified object or `null` if not found.

**Parameters**

**Name**

**Description**

`bucket`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`object`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`generation`

`[Long](https://docs.oracle.com/javase/8/docs/api/java/lang/Long.html)`  

`entity`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`com.google.api.services.storage.model.ObjectAccessControl`

### getAcl(String bucket, String entity, Map<StorageRpc.Option,?> options)

```
public BucketAccessControl getAcl(String bucket, String entity, Map<StorageRpc.Option,?> options)
```

Returns the ACL entry for the specified entity on the specified bucket or `null` if not found.

**Parameters**

**Name**

**Description**

`bucket`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`entity`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`options`

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[Option](/java/docs/reference/google-cloud-storage/2.38.0/com.google.cloud.storage.spi.v1.StorageRpc.Option),?>`  

**Returns**

**Type**

**Description**

`com.google.api.services.storage.model.BucketAccessControl`

### getCurrentUploadOffset(String uploadId)

```
public long getCurrentUploadOffset(String uploadId)
```

Requests current byte offset from Cloud Storage API. Used to recover from a failure in some bytes were committed successfully to the open resumable session.

**Parameter**

**Name**

**Description**

`uploadId`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getDefaultAcl(String bucket, String entity)

```
public ObjectAccessControl getDefaultAcl(String bucket, String entity)
```

Returns the default object ACL entry for the specified entity on the specified bucket or `null` if not found.

**Parameters**

**Name**

**Description**

`bucket`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`entity`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`com.google.api.services.storage.model.ObjectAccessControl`

### getHmacKey(String accessId, Map<StorageRpc.Option,?> options)

```
public HmacKeyMetadata getHmacKey(String accessId, Map<StorageRpc.Option,?> options)
```

Returns the HMAC key associated with the provided access id.

**Parameters**

**Name**

**Description**

`accessId`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`options`

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[Option](/java/docs/reference/google-cloud-storage/2.38.0/com.google.cloud.storage.spi.v1.StorageRpc.Option),?>`  

**Returns**

**Type**

**Description**

`com.google.api.services.storage.model.HmacKeyMetadata`

### getIamPolicy(String bucket, Map<StorageRpc.Option,?> options)

```
public Policy getIamPolicy(String bucket, Map<StorageRpc.Option,?> options)
```

Returns the IAM policy for the specified bucket.

**Parameters**

**Name**

**Description**

`bucket`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`options`

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[Option](/java/docs/reference/google-cloud-storage/2.38.0/com.google.cloud.storage.spi.v1.StorageRpc.Option),?>`  

**Returns**

**Type**

**Description**

`com.google.api.services.storage.model.Policy`

### getNotification(String bucket, String notification)

```
public Notification getNotification(String bucket, String notification)
```

Gets the notification with the specified id.

**Parameters**

**Name**

**Description**

`bucket`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`notification`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`com.google.api.services.storage.model.Notification`

### getServiceAccount(String projectId)

```
public ServiceAccount getServiceAccount(String projectId)
```

Returns the service account associated with the given project.

**Parameter**

**Name**

**Description**

`projectId`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`com.google.api.services.storage.model.ServiceAccount`

### getStorage()

```
public Storage getStorage()
```

**Returns**

**Type**

**Description**

`com.google.api.services.storage.Storage`

### list(String bucket, Map<StorageRpc.Option,?> options)

```
public Tuple<String,Iterable<StorageObject>> list(String bucket, Map<StorageRpc.Option,?> options)
```

Lists the bucket's blobs.

**Parameters**

**Name**

**Description**

`bucket`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`options`

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[Option](/java/docs/reference/google-cloud-storage/2.38.0/com.google.cloud.storage.spi.v1.StorageRpc.Option),?>`  

**Returns**

**Type**

**Description**

`com.google.cloud.Tuple<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<com.google.api.services.storage.model.StorageObject>>`

### list(Map<StorageRpc.Option,?> options)

```
public Tuple<String,Iterable<Bucket>> list(Map<StorageRpc.Option,?> options)
```

Lists the project's buckets.

**Parameter**

**Name**

**Description**

`options`

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[Option](/java/docs/reference/google-cloud-storage/2.38.0/com.google.cloud.storage.spi.v1.StorageRpc.Option),?>`  

**Returns**

**Type**

**Description**

`com.google.cloud.Tuple<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<com.google.api.services.storage.model.Bucket>>`

### listAcls(String bucket, String object, Long generation)

```
public List<ObjectAccessControl> listAcls(String bucket, String object, Long generation)
```

Lists the ACL entries for the provided object.

**Parameters**

**Name**

**Description**

`bucket`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`object`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`generation`

`[Long](https://docs.oracle.com/javase/8/docs/api/java/lang/Long.html)`  

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<com.google.api.services.storage.model.ObjectAccessControl>`

### listAcls(String bucket, Map<StorageRpc.Option,?> options)

```
public List<BucketAccessControl> listAcls(String bucket, Map<StorageRpc.Option,?> options)
```

Lists the ACL entries for the provided bucket.

**Parameters**

**Name**

**Description**

`bucket`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`options`

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[Option](/java/docs/reference/google-cloud-storage/2.38.0/com.google.cloud.storage.spi.v1.StorageRpc.Option),?>`  

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<com.google.api.services.storage.model.BucketAccessControl>`

### listDefaultAcls(String bucket)

```
public List<ObjectAccessControl> listDefaultAcls(String bucket)
```

Lists the default object ACL entries for the provided bucket.

**Parameter**

**Name**

**Description**

`bucket`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<com.google.api.services.storage.model.ObjectAccessControl>`

### listHmacKeys(Map<StorageRpc.Option,?> options)

```
public Tuple<String,Iterable<HmacKeyMetadata>> listHmacKeys(Map<StorageRpc.Option,?> options)
```

Lists the HMAC keys for the provided service account email.

**Parameter**

**Name**

**Description**

`options`

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[Option](/java/docs/reference/google-cloud-storage/2.38.0/com.google.cloud.storage.spi.v1.StorageRpc.Option),?>`  

**Returns**

**Type**

**Description**

`com.google.cloud.Tuple<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[Iterable](https://docs.oracle.com/javase/8/docs/api/java/lang/Iterable.html)<com.google.api.services.storage.model.HmacKeyMetadata>>`

### listNotifications(String bucket)

```
public List<Notification> listNotifications(String bucket)
```

Retrieves the list of notifications associated with the bucket.

**Parameter**

**Name**

**Description**

`bucket`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<com.google.api.services.storage.model.Notification>`

### load(StorageObject from, Map<StorageRpc.Option,?> options)

```
public byte[] load(StorageObject from, Map<StorageRpc.Option,?> options)
```

Reads all the bytes from a storage object.

**Parameters**

**Name**

**Description**

`from`

`com.google.api.services.storage.model.StorageObject`  

`options`

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[Option](/java/docs/reference/google-cloud-storage/2.38.0/com.google.cloud.storage.spi.v1.StorageRpc.Option),?>`  

**Returns**

**Type**

**Description**

`byte[]`

### lockRetentionPolicy(Bucket bucket, Map<StorageRpc.Option,?> options)

```
public Bucket lockRetentionPolicy(Bucket bucket, Map<StorageRpc.Option,?> options)
```

Lock retention policy for the provided bucket.

**Parameters**

**Name**

**Description**

`bucket`

`com.google.api.services.storage.model.Bucket`  

`options`

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[Option](/java/docs/reference/google-cloud-storage/2.38.0/com.google.cloud.storage.spi.v1.StorageRpc.Option),?>`  

**Returns**

**Type**

**Description**

`com.google.api.services.storage.model.Bucket`

### open(StorageObject object, Map<StorageRpc.Option,?> options)

```
public String open(StorageObject object, Map<StorageRpc.Option,?> options)
```

Opens a resumable upload channel for a given storage object.

**Parameters**

**Name**

**Description**

`object`

`com.google.api.services.storage.model.StorageObject`  

`options`

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[Option](/java/docs/reference/google-cloud-storage/2.38.0/com.google.cloud.storage.spi.v1.StorageRpc.Option),?>`  

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### open(String signedURL)

```
public String open(String signedURL)
```

Opens a resumable upload channel for a given signedURL.

**Parameter**

**Name**

**Description**

`signedURL`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### openRewrite(StorageRpc.RewriteRequest rewriteRequest)

```
public StorageRpc.RewriteResponse openRewrite(StorageRpc.RewriteRequest rewriteRequest)
```

Sends a rewrite request to open a rewrite channel.

**Parameter**

**Name**

**Description**

`rewriteRequest`

`[StorageRpc.RewriteRequest](/java/docs/reference/google-cloud-storage/2.38.0/com.google.cloud.storage.spi.v1.StorageRpc.RewriteRequest)`  

**Returns**

**Type**

**Description**

`[StorageRpc.RewriteResponse](/java/docs/reference/google-cloud-storage/2.38.0/com.google.cloud.storage.spi.v1.StorageRpc.RewriteResponse)`

### patch(Bucket bucket, Map<StorageRpc.Option,?> options)

```
public Bucket patch(Bucket bucket, Map<StorageRpc.Option,?> options)
```

Updates bucket information.

**Parameters**

**Name**

**Description**

`bucket`

`com.google.api.services.storage.model.Bucket`  

`options`

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[Option](/java/docs/reference/google-cloud-storage/2.38.0/com.google.cloud.storage.spi.v1.StorageRpc.Option),?>`  

**Returns**

**Type**

**Description**

`com.google.api.services.storage.model.Bucket`

### patch(StorageObject storageObject, Map<StorageRpc.Option,?> options)

```
public StorageObject patch(StorageObject storageObject, Map<StorageRpc.Option,?> options)
```

Updates the storage object's information. Original metadata are merged with metadata in the provided `storageObject`.

**Parameters**

**Name**

**Description**

`storageObject`

`com.google.api.services.storage.model.StorageObject`  

`options`

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[Option](/java/docs/reference/google-cloud-storage/2.38.0/com.google.cloud.storage.spi.v1.StorageRpc.Option),?>`  

**Returns**

**Type**

**Description**

`com.google.api.services.storage.model.StorageObject`

### patchAcl(BucketAccessControl acl, Map<StorageRpc.Option,?> options)

```
public BucketAccessControl patchAcl(BucketAccessControl acl, Map<StorageRpc.Option,?> options)
```

Updates an ACL entry on the specified bucket.

**Parameters**

**Name**

**Description**

`acl`

`com.google.api.services.storage.model.BucketAccessControl`  

`options`

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[Option](/java/docs/reference/google-cloud-storage/2.38.0/com.google.cloud.storage.spi.v1.StorageRpc.Option),?>`  

**Returns**

**Type**

**Description**

`com.google.api.services.storage.model.BucketAccessControl`

### patchAcl(ObjectAccessControl acl)

```
public ObjectAccessControl patchAcl(ObjectAccessControl acl)
```

Updates an ACL entry on the specified object.

**Parameter**

**Name**

**Description**

`acl`

`com.google.api.services.storage.model.ObjectAccessControl`  

**Returns**

**Type**

**Description**

`com.google.api.services.storage.model.ObjectAccessControl`

### patchDefaultAcl(ObjectAccessControl acl)

```
public ObjectAccessControl patchDefaultAcl(ObjectAccessControl acl)
```

Updates a default object ACL entry on the specified bucket.

**Parameter**

**Name**

**Description**

`acl`

`com.google.api.services.storage.model.ObjectAccessControl`  

**Returns**

**Type**

**Description**

`com.google.api.services.storage.model.ObjectAccessControl`

### queryCompletedResumableUpload(String uploadId, long totalBytes)

```
public StorageObject queryCompletedResumableUpload(String uploadId, long totalBytes)
```

Attempts to retrieve the StorageObject from a completed resumable upload. When a resumable upload completes, the response will be the up-to-date StorageObject metadata. This up-to-date metadata can then be used to validate the total size of the object along with new generation and other information.

If for any reason, the response to the final PUT to a resumable upload is not received, this method can be used to query for the up-to-date StorageObject. If the upload is complete, this method can be used to access the StorageObject independently from any other liveness or conditional criteria requirements that are otherwise applicable when using [#get(StorageObject, Map)](/java/docs/reference/google-cloud-storage/2.38.0/com.google.cloud.storage.spi.v1.HttpStorageRpc#com_google_cloud_storage_spi_v1_HttpStorageRpc_get_com_google_api_services_storage_model_StorageObject_java_util_Map_com_google_cloud_storage_spi_v1_StorageRpc_Option____).

**Parameters**

**Name**

**Description**

`uploadId`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`totalBytes`

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`com.google.api.services.storage.model.StorageObject`

### read(StorageObject from, Map<StorageRpc.Option,?> options, long position, int bytes)

```
public Tuple<String,byte[]> read(StorageObject from, Map<StorageRpc.Option,?> options, long position, int bytes)
```

Reads the given amount of bytes from a storage object at the given position.

**Parameters**

**Name**

**Description**

`from`

`com.google.api.services.storage.model.StorageObject`  

`options`

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[Option](/java/docs/reference/google-cloud-storage/2.38.0/com.google.cloud.storage.spi.v1.StorageRpc.Option),?>`  

`position`

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`bytes`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`com.google.cloud.Tuple<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),byte[]>`

### read(StorageObject from, Map<StorageRpc.Option,?> options, long position, OutputStream outputStream)

```
public long read(StorageObject from, Map<StorageRpc.Option,?> options, long position, OutputStream outputStream)
```

Reads all the bytes from a storage object at the given position in to outputstream using direct download.

**Parameters**

**Name**

**Description**

`from`

`com.google.api.services.storage.model.StorageObject`  

`options`

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[Option](/java/docs/reference/google-cloud-storage/2.38.0/com.google.cloud.storage.spi.v1.StorageRpc.Option),?>`  

`position`

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`outputStream`

`[OutputStream](https://docs.oracle.com/javase/8/docs/api/java/io/OutputStream.html)`  

**Returns**

**Type**

**Description**

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### restore(StorageObject object, Map<StorageRpc.Option,?> options)

```
public StorageObject restore(StorageObject object, Map<StorageRpc.Option,?> options)
```

If an object has been soft-deleted, restores it and returns the restored object.j

**Parameters**

**Name**

**Description**

`object`

`com.google.api.services.storage.model.StorageObject`  

`options`

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[Option](/java/docs/reference/google-cloud-storage/2.38.0/com.google.cloud.storage.spi.v1.StorageRpc.Option),?>`  

**Returns**

**Type**

**Description**

`com.google.api.services.storage.model.StorageObject`

### setIamPolicy(String bucket, Policy policy, Map<StorageRpc.Option,?> options)

```
public Policy setIamPolicy(String bucket, Policy policy, Map<StorageRpc.Option,?> options)
```

Updates the IAM policy for the specified bucket.

**Parameters**

**Name**

**Description**

`bucket`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`policy`

`com.google.api.services.storage.model.Policy`  

`options`

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[Option](/java/docs/reference/google-cloud-storage/2.38.0/com.google.cloud.storage.spi.v1.StorageRpc.Option),?>`  

**Returns**

**Type**

**Description**

`com.google.api.services.storage.model.Policy`

### testIamPermissions(String bucket, List<String> permissions, Map<StorageRpc.Option,?> options)

```
public TestIamPermissionsResponse testIamPermissions(String bucket, List<String> permissions, Map<StorageRpc.Option,?> options)
```

Tests whether the caller holds the specified permissions for the specified bucket.

**Parameters**

**Name**

**Description**

`bucket`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`permissions`

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

`options`

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[Option](/java/docs/reference/google-cloud-storage/2.38.0/com.google.cloud.storage.spi.v1.StorageRpc.Option),?>`  

**Returns**

**Type**

**Description**

`com.google.api.services.storage.model.TestIamPermissionsResponse`

### updateHmacKey(HmacKeyMetadata hmacKeyMetadata, Map<StorageRpc.Option,?> options)

```
public HmacKeyMetadata updateHmacKey(HmacKeyMetadata hmacKeyMetadata, Map<StorageRpc.Option,?> options)
```

Updates an HMAC key for the provided metadata object and returns the updated object. Only updates the State field.

**Parameters**

**Name**

**Description**

`hmacKeyMetadata`

`com.google.api.services.storage.model.HmacKeyMetadata`  

`options`

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[Option](/java/docs/reference/google-cloud-storage/2.38.0/com.google.cloud.storage.spi.v1.StorageRpc.Option),?>`  

**Returns**

**Type**

**Description**

`com.google.api.services.storage.model.HmacKeyMetadata`

### write(String uploadId, byte\[\] toWrite, int toWriteOffset, long destOffset, int length, boolean last)

```
public void write(String uploadId, byte[] toWrite, int toWriteOffset, long destOffset, int length, boolean last)
```

Writes the provided bytes to a storage object at the provided location.

**Parameters**

**Name**

**Description**

`uploadId`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`toWrite`

`byte[]`  

`toWriteOffset`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`destOffset`

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`length`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`last`

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

### writeWithResponse(String uploadId, byte\[\] toWrite, int toWriteOffset, long destOffset, int length, boolean last)

```
public StorageObject writeWithResponse(String uploadId, byte[] toWrite, int toWriteOffset, long destOffset, int length, boolean last)
```

Writes the provided bytes to a storage object at the provided location. If `last=true` returns metadata of the updated object, otherwise returns null.

**Parameters**

**Name**

**Description**

`uploadId`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`toWrite`

`byte[]`  

`toWriteOffset`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`destOffset`

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`length`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

`last`

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`com.google.api.services.storage.model.StorageObject`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.

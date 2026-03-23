-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface RewriteResponseOrBuilder (2.14.0) Stay organized with collections Save and categorize content based on your preferences.

2.64.0 (latest) 2.63.0 2.62.1 2.60.0 2.59.0 2.58.1 2.57.0 2.56.0 2.55.0 2.54.0 2.53.3 2.52.3 2.50.0 2.49.0 2.48.2 2.47.0 2.46.0 2.45.0 2.44.1 2.43.2 2.42.0 2.41.0 2.40.1 2.39.0 2.38.0 2.37.0 2.36.1 2.34.0 2.33.0 2.32.1 2.30.1 2.29.1 2.28.0 2.27.1 2.24.0 2.23.0 2.22.6 2.21.0 2.20.2 2.19.0 2.18.0 2.17.2 2.16.0 2.15.1 2.14.0 2.13.1 2.12.0 2.11.3 2.10.0 2.9.3 2.8.1 2.7.1 2.6.1 2.5.1 2.4.5 2.3.0 2.2.3 2.1.10

```
public interface RewriteResponseOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getDone()

```
public abstract boolean getDone()
```

`true` if the copy is finished; otherwise, `false` if the copy is in progress. This property is always present in the response.

`bool done = 3;`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

The done.

### getObjectSize()

```
public abstract long getObjectSize()
```

The total size of the object being copied in bytes. This property is always present in the response.

`int64 object_size = 2;`

**Returns**

**Type**

**Description**

[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

The objectSize.

### getResource()

```
public abstract Object getResource()
```

A resource containing the metadata for the copied-to object. This property is present in the response only when copying completes.

`.google.storage.v2.Object resource = 5;`

**Returns**

**Type**

**Description**

[Object](/java/docs/reference/google-cloud-storage/2.14.0/com.google.storage.v2.Object)

The resource.

### getResourceOrBuilder()

```
public abstract ObjectOrBuilder getResourceOrBuilder()
```

A resource containing the metadata for the copied-to object. This property is present in the response only when copying completes.

`.google.storage.v2.Object resource = 5;`

**Returns**

**Type**

**Description**

[ObjectOrBuilder](/java/docs/reference/google-cloud-storage/2.14.0/com.google.storage.v2.ObjectOrBuilder)

### getRewriteToken()

```
public abstract String getRewriteToken()
```

A token to use in subsequent requests to continue copying data. This token is present in the response only when there is more data to copy.

`string rewrite_token = 4;`

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The rewriteToken.

### getRewriteTokenBytes()

```
public abstract ByteString getRewriteTokenBytes()
```

A token to use in subsequent requests to continue copying data. This token is present in the response only when there is more data to copy.

`string rewrite_token = 4;`

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes for rewriteToken.

### getTotalBytesRewritten()

```
public abstract long getTotalBytesRewritten()
```

The total bytes written so far, which can be used to provide a waiting user with a progress indicator. This property is always present in the response.

`int64 total_bytes_rewritten = 1;`

**Returns**

**Type**

**Description**

[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

The totalBytesRewritten.

### hasResource()

```
public abstract boolean hasResource()
```

A resource containing the metadata for the copied-to object. This property is present in the response only when copying completes.

`.google.storage.v2.Object resource = 5;`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

Whether the resource field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.

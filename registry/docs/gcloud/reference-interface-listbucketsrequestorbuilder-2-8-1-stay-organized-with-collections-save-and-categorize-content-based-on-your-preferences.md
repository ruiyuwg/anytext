-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface ListBucketsRequestOrBuilder (2.8.1) Stay organized with collections Save and categorize content based on your preferences.

2.64.0 (latest) 2.63.0 2.62.1 2.60.0 2.59.0 2.58.1 2.57.0 2.56.0 2.55.0 2.54.0 2.53.3 2.52.3 2.50.0 2.49.0 2.48.2 2.47.0 2.46.0 2.45.0 2.44.1 2.43.2 2.42.0 2.41.0 2.40.1 2.39.0 2.38.0 2.37.0 2.36.1 2.34.0 2.33.0 2.32.1 2.30.1 2.29.1 2.28.0 2.27.1 2.24.0 2.23.0 2.22.6 2.21.0 2.20.2 2.19.0 2.18.0 2.17.2 2.16.0 2.15.1 2.14.0 2.13.1 2.12.0 2.11.3 2.10.0 2.9.3 2.8.1 2.7.1 2.6.1 2.5.1 2.4.5 2.3.0 2.2.3 2.1.10

```
public interface ListBucketsRequestOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getPageSize()

```
public abstract int getPageSize()
```

Maximum number of buckets to return in a single response. The service will use this parameter or 1,000 items, whichever is smaller. If "acl" is present in the read\_mask, the service will use this parameter of 200 items, whichever is smaller.

`int32 page_size = 2;`

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

The pageSize.

### getPageToken()

```
public abstract String getPageToken()
```

A previously-returned page token representing part of the larger set of results to view.

`string page_token = 3;`

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The pageToken.

### getPageTokenBytes()

```
public abstract ByteString getPageTokenBytes()
```

A previously-returned page token representing part of the larger set of results to view.

`string page_token = 3;`

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes for pageToken.

### getParent()

```
public abstract String getParent()
```

Required. The project whose buckets we are listing.

`string parent = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The parent.

### getParentBytes()

```
public abstract ByteString getParentBytes()
```

Required. The project whose buckets we are listing.

`string parent = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes for parent.

### getPrefix()

```
public abstract String getPrefix()
```

Filter results to buckets whose names begin with this prefix.

`string prefix = 4;`

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

The prefix.

### getPrefixBytes()

```
public abstract ByteString getPrefixBytes()
```

Filter results to buckets whose names begin with this prefix.

`string prefix = 4;`

**Returns**

**Type**

**Description**

[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)

The bytes for prefix.

### getReadMask()

```
public abstract FieldMask getReadMask()
```

Mask specifying which fields to read from each result. If no mask is specified, will default to all fields except items.owner, items.acl, and items.default\_object\_acl.

-   may be used to mean "all fields".

`optional .google.protobuf.FieldMask read_mask = 5;`

**Returns**

**Type**

**Description**

[FieldMask](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.FieldMask.html)

The readMask.

### getReadMaskOrBuilder()

```
public abstract FieldMaskOrBuilder getReadMaskOrBuilder()
```

Mask specifying which fields to read from each result. If no mask is specified, will default to all fields except items.owner, items.acl, and items.default\_object\_acl.

-   may be used to mean "all fields".

`optional .google.protobuf.FieldMask read_mask = 5;`

**Returns**

**Type**

**Description**

[FieldMaskOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.FieldMaskOrBuilder.html)

### hasReadMask()

```
public abstract boolean hasReadMask()
```

Mask specifying which fields to read from each result. If no mask is specified, will default to all fields except items.owner, items.acl, and items.default\_object\_acl.

-   may be used to mean "all fields".

`optional .google.protobuf.FieldMask read_mask = 5;`

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

Whether the readMask field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.

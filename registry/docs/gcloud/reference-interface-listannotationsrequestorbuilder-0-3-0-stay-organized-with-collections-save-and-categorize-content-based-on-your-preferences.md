-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface ListAnnotationsRequestOrBuilder (0.3.0) Stay organized with collections Save and categorize content based on your preferences.

0.44.0 (latest) 0.42.0 0.40.0 0.39.0 0.37.0 0.35.0 0.33.0 0.32.0 0.31.0 0.30.0 0.29.0 0.27.0 0.25.0 0.24.0 0.21.0 0.20.0 0.19.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.6.0 0.5.0 0.4.0 0.3.0 0.2.0 0.1.0

```
public interface ListAnnotationsRequestOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getFilter()

```
public abstract String getFilter()
```

The filter applied to the returned list. We only support filtering for the following fields: For corpus of STREAM\_VIDEO type: `partition.temporal_partition.start_time`, `partition.temporal_partition.end_time`, and `key`. For corpus of VIDEO\_ON\_DEMAND type, `partition.relative_temporal_partition.start_offset`, `partition.relative_temporal_partition.end_offset`, and `key`. For corpus of IMAGE type, only `key` is supported. Timestamps are specified in the RFC-3339 format, and only one restriction may be applied per field, joined by conjunctions. Format: "partition.temporal\_partition.start\_time > "2012-04-21T11:30:00-04:00" AND partition.temporal\_partition.end\_time < "2012-04-22T11:30:00-04:00" AND key = "example\_key""

`string filter = 4;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The filter.

### getFilterBytes()

```
public abstract ByteString getFilterBytes()
```

The filter applied to the returned list. We only support filtering for the following fields: For corpus of STREAM\_VIDEO type: `partition.temporal_partition.start_time`, `partition.temporal_partition.end_time`, and `key`. For corpus of VIDEO\_ON\_DEMAND type, `partition.relative_temporal_partition.start_offset`, `partition.relative_temporal_partition.end_offset`, and `key`. For corpus of IMAGE type, only `key` is supported. Timestamps are specified in the RFC-3339 format, and only one restriction may be applied per field, joined by conjunctions. Format: "partition.temporal\_partition.start\_time > "2012-04-21T11:30:00-04:00" AND partition.temporal\_partition.end\_time < "2012-04-22T11:30:00-04:00" AND key = "example\_key""

`string filter = 4;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for filter.

### getPageSize()

```
public abstract int getPageSize()
```

The maximum number of annotations to return. The service may return fewer than this value. If unspecified, at most 50 annotations will be returned. The maximum value is 1000; values above 1000 will be coerced to 1000.

`int32 page_size = 2;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The pageSize.

### getPageToken()

```
public abstract String getPageToken()
```

A page token, received from a previous `ListAnnotations` call. Provide this to retrieve the subsequent page.

When paginating, all other parameters provided to `ListAnnotations` must match the call that provided the page token.

`string page_token = 3;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The pageToken.

### getPageTokenBytes()

```
public abstract ByteString getPageTokenBytes()
```

A page token, received from a previous `ListAnnotations` call. Provide this to retrieve the subsequent page.

When paginating, all other parameters provided to `ListAnnotations` must match the call that provided the page token.

`string page_token = 3;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for pageToken.

### getParent()

```
public abstract String getParent()
```

The parent, which owns this collection of annotations. Format: `projects/{project_number}/locations/{location}/corpora/{corpus}/assets/{asset}`

`string parent = 1 [(.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The parent.

### getParentBytes()

```
public abstract ByteString getParentBytes()
```

The parent, which owns this collection of annotations. Format: `projects/{project_number}/locations/{location}/corpora/{corpus}/assets/{asset}`

`string parent = 1 [(.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for parent.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.

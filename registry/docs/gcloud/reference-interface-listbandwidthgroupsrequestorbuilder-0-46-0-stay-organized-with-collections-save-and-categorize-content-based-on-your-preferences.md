-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface ListBandwidthGroupsRequestOrBuilder (0.46.0) Stay organized with collections Save and categorize content based on your preferences.

0.46.0 (latest) 0.44.0 0.42.0 0.41.0 0.40.0 0.39.0 0.37.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.29.0 0.27.0 0.26.0 0.23.0 0.22.0 0.21.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.0 0.3.0 0.2.0 0.1.0

```
public interface ListBandwidthGroupsRequestOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getFilter()

```
public abstract String getFilter()
```

Optional. Expression to filter the response. See syntax details at [https://developers.google.com/ad-manager/api/beta/filters](https://developers.google.com/ad-manager/api/beta/filters)

`string filter = 4 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The filter.

### getFilterBytes()

```
public abstract ByteString getFilterBytes()
```

Optional. Expression to filter the response. See syntax details at [https://developers.google.com/ad-manager/api/beta/filters](https://developers.google.com/ad-manager/api/beta/filters)

`string filter = 4 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for filter.

### getOrderBy()

```
public abstract String getOrderBy()
```

Optional. Expression to specify sorting order. See syntax details at [https://developers.google.com/ad-manager/api/beta/filters#order](https://developers.google.com/ad-manager/api/beta/filters#order)

`string order_by = 5 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The orderBy.

### getOrderByBytes()

```
public abstract ByteString getOrderByBytes()
```

Optional. Expression to specify sorting order. See syntax details at [https://developers.google.com/ad-manager/api/beta/filters#order](https://developers.google.com/ad-manager/api/beta/filters#order)

`string order_by = 5 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for orderBy.

### getPageSize()

```
public abstract int getPageSize()
```

Optional. The maximum number of `BandwidthGroups` to return. The service may return fewer than this value. If unspecified, at most 50 `BandwidthGroups` will be returned. The maximum value is 1000; values greater than 1000 will be coerced to 1000.

`int32 page_size = 2 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The pageSize.

### getPageToken()

```
public abstract String getPageToken()
```

Optional. A page token, received from a previous `ListBandwidthGroups` call. Provide this to retrieve the subsequent page.

When paginating, all other parameters provided to `ListBandwidthGroups` must match the call that provided the page token.

`string page_token = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The pageToken.

### getPageTokenBytes()

```
public abstract ByteString getPageTokenBytes()
```

Optional. A page token, received from a previous `ListBandwidthGroups` call. Provide this to retrieve the subsequent page.

When paginating, all other parameters provided to `ListBandwidthGroups` must match the call that provided the page token.

`string page_token = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for pageToken.

### getParent()

```
public abstract String getParent()
```

Required. The parent, which owns this collection of BandwidthGroups. Format: `networks/{network_code}`

`string parent = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The parent.

### getParentBytes()

```
public abstract ByteString getParentBytes()
```

Required. The parent, which owns this collection of BandwidthGroups. Format: `networks/{network_code}`

`string parent = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for parent.

### getSkip()

```
public abstract int getSkip()
```

Optional. Number of individual resources to skip while paginating.

`int32 skip = 6 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The skip.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.

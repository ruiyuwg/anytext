-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface ListNetworkPeeringsRequestOrBuilder (0.48.0) Stay organized with collections Save and categorize content based on your preferences.

0.81.0 (latest) 0.79.0 0.77.0 0.76.0 0.74.0 0.72.0 0.70.0 0.69.0 0.68.0 0.67.0 0.66.0 0.64.0 0.62.0 0.61.0 0.58.0 0.57.0 0.56.0 0.54.0 0.53.0 0.52.0 0.51.0 0.50.0 0.49.0 0.48.0 0.47.0 0.46.0 0.45.0 0.43.0 0.42.0 0.41.0 0.40.0 0.39.0 0.38.0 0.37.0 0.36.0 0.35.0 0.34.0 0.33.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.0 0.3.0 0.2.0 0.1.0

```
public interface ListNetworkPeeringsRequestOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getFilter()

```
public abstract String getFilter()
```

A filter expression that matches resources returned in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be `=`, `!=`, `>`, or `<`.

For example, if you are filtering a list of network peerings, you can exclude the ones named `example-peering` by specifying `name != "example-peering"`.

To filter on multiple expressions, provide each separate expression within parentheses. For example: \` `` `(name = "example-peering") (createTime > "2021-04-12T08:15:10.40Z")` ``

`By default, each expression is an` AND `expression. However, you can include` AND `and` OR `expressions explicitly. For example:` `` `(name = "example-peering-1") AND (createTime > "2021-04-12T08:15:10.40Z") OR (name = "example-peering-2")` `` \`

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

A filter expression that matches resources returned in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be `=`, `!=`, `>`, or `<`.

For example, if you are filtering a list of network peerings, you can exclude the ones named `example-peering` by specifying `name != "example-peering"`.

To filter on multiple expressions, provide each separate expression within parentheses. For example: \` `` `(name = "example-peering") (createTime > "2021-04-12T08:15:10.40Z")` ``

`By default, each expression is an` AND `expression. However, you can include` AND `and` OR `expressions explicitly. For example:` `` `(name = "example-peering-1") AND (createTime > "2021-04-12T08:15:10.40Z") OR (name = "example-peering-2")` `` \`

`string filter = 4;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for filter.

### getOrderBy()

```
public abstract String getOrderBy()
```

Sorts list results by a certain order. By default, returned results are ordered by `name` in ascending order. You can also sort results in descending order based on the `name` value using `orderBy="name desc"`. Currently, only ordering by `name` is supported.

`string order_by = 5;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The orderBy.

### getOrderByBytes()

```
public abstract ByteString getOrderByBytes()
```

Sorts list results by a certain order. By default, returned results are ordered by `name` in ascending order. You can also sort results in descending order based on the `name` value using `orderBy="name desc"`. Currently, only ordering by `name` is supported.

`string order_by = 5;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for orderBy.

### getPageSize()

```
public abstract int getPageSize()
```

The maximum number of network peerings to return in one page. The maximum value is coerced to 1000. The default value of this field is 500.

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

A page token, received from a previous `ListNetworkPeerings` call. Provide this to retrieve the subsequent page.

When paginating, all other parameters provided to `ListNetworkPeerings` must match the call that provided the page token.

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

A page token, received from a previous `ListNetworkPeerings` call. Provide this to retrieve the subsequent page.

When paginating, all other parameters provided to `ListNetworkPeerings` must match the call that provided the page token.

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

Required. The resource name of the location (global) to query for network peerings. Resource names are schemeless URIs that follow the conventions in [https://cloud.google.com/apis/design/resource\_names](https://cloud.google.com/apis/design/resource_names). For example: `projects/my-project/locations/global`

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

Required. The resource name of the location (global) to query for network peerings. Resource names are schemeless URIs that follow the conventions in [https://cloud.google.com/apis/design/resource\_names](https://cloud.google.com/apis/design/resource_names). For example: `projects/my-project/locations/global`

`string parent = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for parent.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.

-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface ListServicesRequestOrBuilder (2.28.0) Stay organized with collections Save and categorize content based on your preferences.

2.88.0 (latest) 2.86.0 2.84.0 2.83.0 2.81.0 2.79.0 2.77.0 2.76.0 2.75.0 2.74.0 2.73.0 2.71.0 2.69.0 2.68.0 2.65.0 2.64.0 2.63.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.5 2.2.7

```
public interface ListServicesRequestOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getFilter()

```
public abstract String getFilter()
```

Optional. The filter to list results by.

General `filter` string syntax: `<field> <operator> <value> (<logical connector>)`

-   `<field>` can be `name` or `metadata.<key>` for map field
-   `<operator>` can be `<`, `>`, `<=`, `>=`, `!=`, `=`, `:`. Of which `:` means `HAS`, and is roughly the same as `=`
-   `<value>` must be the same data type as field
-   `<logical connector>` can be `AND`, `OR`, `NOT`
    
    Examples of valid filters:
    
-   `metadata.owner` returns services that have a metadata with the key `owner`, this is the same as `metadata:owner`
    
-   `metadata.protocol=gRPC` returns services that have key/value `protocol=gRPC` \* `name>projects/my-project/locations/us-east1/namespaces/my-namespace/services/service-c` returns services that have name that is alphabetically later than the string, so "service-e" is returned but "service-a" is not
-   `metadata.owner!=sd AND metadata.foo=bar` returns services that have `owner` in metadata key but value is not `sd` AND have key/value `foo=bar`
-   `doesnotexist.foo=bar` returns an empty list. Note that service doesn't have a field called "doesnotexist". Since the filter does not match any services, it returns no results
-   `attributes.managed_registration=true` returns services that are managed by a GCP product or service
    
    For more information about filtering, see [API Filtering](https://aip.dev/160).
    

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

Optional. The filter to list results by.

General `filter` string syntax: `<field> <operator> <value> (<logical connector>)`

-   `<field>` can be `name` or `metadata.<key>` for map field
-   `<operator>` can be `<`, `>`, `<=`, `>=`, `!=`, `=`, `:`. Of which `:` means `HAS`, and is roughly the same as `=`
-   `<value>` must be the same data type as field
-   `<logical connector>` can be `AND`, `OR`, `NOT`
    
    Examples of valid filters:
    
-   `metadata.owner` returns services that have a metadata with the key `owner`, this is the same as `metadata:owner`
    
-   `metadata.protocol=gRPC` returns services that have key/value `protocol=gRPC` \* `name>projects/my-project/locations/us-east1/namespaces/my-namespace/services/service-c` returns services that have name that is alphabetically later than the string, so "service-e" is returned but "service-a" is not
-   `metadata.owner!=sd AND metadata.foo=bar` returns services that have `owner` in metadata key but value is not `sd` AND have key/value `foo=bar`
-   `doesnotexist.foo=bar` returns an empty list. Note that service doesn't have a field called "doesnotexist". Since the filter does not match any services, it returns no results
-   `attributes.managed_registration=true` returns services that are managed by a GCP product or service
    
    For more information about filtering, see [API Filtering](https://aip.dev/160).
    

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

Optional. The order to list results by.

General `order_by` string syntax: `<field> (<asc|desc>) (,)`

-   `<field>` allows value: `name`
-   `<asc|desc>` ascending or descending order by `<field>`. If this is left blank, `asc` is used
    
    Note that an empty `order_by` string results in default order, which is order by `name` in ascending order.
    

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

Optional. The order to list results by.

General `order_by` string syntax: `<field> (<asc|desc>) (,)`

-   `<field>` allows value: `name`
-   `<asc|desc>` ascending or descending order by `<field>`. If this is left blank, `asc` is used
    
    Note that an empty `order_by` string results in default order, which is order by `name` in ascending order.
    

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

Optional. The maximum number of items to return.

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

Optional. The next\_page\_token value returned from a previous List request, if any.

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

Optional. The next\_page\_token value returned from a previous List request, if any.

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

Required. The resource name of the namespace whose services you'd like to list.

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

Required. The resource name of the namespace whose services you'd like to list.

`string parent = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for parent.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.

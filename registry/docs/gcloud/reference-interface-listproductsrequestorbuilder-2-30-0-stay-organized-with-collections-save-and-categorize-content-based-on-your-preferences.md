-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface ListProductsRequestOrBuilder (2.30.0) Stay organized with collections Save and categorize content based on your preferences.

2.89.0 (latest) 2.87.0 2.85.0 2.84.0 2.82.0 2.80.0 2.78.0 2.77.0 2.76.0 2.75.0 2.74.0 2.72.0 2.70.0 2.69.0 2.66.0 2.65.0 2.64.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.1 2.4.0 2.3.0 2.2.3 2.1.0 2.0.19

```
public interface ListProductsRequestOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getFilter()

```
public abstract String getFilter()
```

A filter to apply on the list results. Supported features:

-   List all the products under the parent branch if filter is unset.
-   List Product.Type.VARIANT Products sharing the same Product.Type.PRIMARY Product. For example: `primary_product_id = "some_product_id"`
-   List Products bundled in a Product.Type.COLLECTION Product. For example: `collection_product_id = "some_product_id"`
-   List Products with a partibular type. For example: `type = "PRIMARY"` `type = "VARIANT"` `type = "COLLECTION"`
    
    If the field is unrecognizable, an INVALID\_ARGUMENT error is returned.
    
    If the specified Product.Type.PRIMARY Product or Product.Type.COLLECTION Product does not exist, a NOT\_FOUND error is returned.
    

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

A filter to apply on the list results. Supported features:

-   List all the products under the parent branch if filter is unset.
-   List Product.Type.VARIANT Products sharing the same Product.Type.PRIMARY Product. For example: `primary_product_id = "some_product_id"`
-   List Products bundled in a Product.Type.COLLECTION Product. For example: `collection_product_id = "some_product_id"`
-   List Products with a partibular type. For example: `type = "PRIMARY"` `type = "VARIANT"` `type = "COLLECTION"`
    
    If the field is unrecognizable, an INVALID\_ARGUMENT error is returned.
    
    If the specified Product.Type.PRIMARY Product or Product.Type.COLLECTION Product does not exist, a NOT\_FOUND error is returned.
    

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

Maximum number of Products to return. If unspecified, defaults to 100. The maximum allowed value is 1000. Values above 1000 will be coerced to 1000.

If this field is negative, an INVALID\_ARGUMENT error is returned.

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

A page token ListProductsResponse.next\_page\_token, received from a previous ProductService.ListProducts call. Provide this to retrieve the subsequent page.

When paginating, all other parameters provided to ProductService.ListProducts must match the call that provided the page token. Otherwise, an INVALID\_ARGUMENT error is returned.

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

A page token ListProductsResponse.next\_page\_token, received from a previous ProductService.ListProducts call. Provide this to retrieve the subsequent page.

When paginating, all other parameters provided to ProductService.ListProducts must match the call that provided the page token. Otherwise, an INVALID\_ARGUMENT error is returned.

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

Required. The parent branch resource name, such as `projects/*/locations/global/catalogs/default_catalog/branches/0`. Use `default_branch` as the branch ID, to list products under the default branch.

If the caller does not have permission to list Products under this branch, regardless of whether or not this branch exists, a PERMISSION\_DENIED error is returned.

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

Required. The parent branch resource name, such as `projects/*/locations/global/catalogs/default_catalog/branches/0`. Use `default_branch` as the branch ID, to list products under the default branch.

If the caller does not have permission to list Products under this branch, regardless of whether or not this branch exists, a PERMISSION\_DENIED error is returned.

`string parent = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for parent.

### getReadMask()

```
public abstract FieldMask getReadMask()
```

The fields of Product to return in the responses. If not set or empty, the following fields are returned:

-   Product.name
-   Product.id
-   Product.title
-   Product.uri
-   Product.images
-   Product.price\_info
-   Product.brands
    
    If "\*" is provided, all fields are returned. Product.name is always returned no matter what mask is set.
    
    If an unsupported or unknown field is provided, an INVALID\_ARGUMENT error is returned.
    

`.google.protobuf.FieldMask read_mask = 5;`

**Returns**

**Type**

**Description**

`[FieldMask](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.FieldMask.html)`

The readMask.

### getReadMaskOrBuilder()

```
public abstract FieldMaskOrBuilder getReadMaskOrBuilder()
```

The fields of Product to return in the responses. If not set or empty, the following fields are returned:

-   Product.name
-   Product.id
-   Product.title
-   Product.uri
-   Product.images
-   Product.price\_info
-   Product.brands
    
    If "\*" is provided, all fields are returned. Product.name is always returned no matter what mask is set.
    
    If an unsupported or unknown field is provided, an INVALID\_ARGUMENT error is returned.
    

`.google.protobuf.FieldMask read_mask = 5;`

**Returns**

**Type**

**Description**

`[FieldMaskOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.FieldMaskOrBuilder.html)`

### hasReadMask()

```
public abstract boolean hasReadMask()
```

The fields of Product to return in the responses. If not set or empty, the following fields are returned:

-   Product.name
-   Product.id
-   Product.title
-   Product.uri
-   Product.images
-   Product.price\_info
-   Product.brands
    
    If "\*" is provided, all fields are returned. Product.name is always returned no matter what mask is set.
    
    If an unsupported or unknown field is provided, an INVALID\_ARGUMENT error is returned.
    

`.google.protobuf.FieldMask read_mask = 5;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the readMask field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.

-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface UpdateProductInputRequestOrBuilder (1.15.0) Stay organized with collections Save and categorize content based on your preferences.

1.15.0 (latest) 1.13.0 1.11.0 1.10.0 1.8.0 1.6.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0 0.26.0 0.24.0 0.23.0 0.20.0 0.19.0 0.18.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.5.0 0.4.0 0.3.0 0.2.0 0.1.0

```
public interface UpdateProductInputRequestOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getDataSource()

```
public abstract String getDataSource()
```

Required. The primary or supplemental product data source where `data_source` name identifies the product input to be updated.

Only API data sources are supported.

Format: `accounts/{account}/dataSources/{datasource}`. For example, `accounts/123456/dataSources/104628`.

`string data_source = 3 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The dataSource.

### getDataSourceBytes()

```
public abstract ByteString getDataSourceBytes()
```

Required. The primary or supplemental product data source where `data_source` name identifies the product input to be updated.

Only API data sources are supported.

Format: `accounts/{account}/dataSources/{datasource}`. For example, `accounts/123456/dataSources/104628`.

`string data_source = 3 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for dataSource.

### getProductInput()

```
public abstract ProductInput getProductInput()
```

Required. The product input resource to update. Information you submit will be applied to the processed product as well.

`.google.shopping.merchant.products.v1.ProductInput product_input = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[ProductInput](/java/docs/reference/google-shopping-merchant-products/latest/com.google.shopping.merchant.products.v1.ProductInput)`

The productInput.

### getProductInputOrBuilder()

```
public abstract ProductInputOrBuilder getProductInputOrBuilder()
```

Required. The product input resource to update. Information you submit will be applied to the processed product as well.

`.google.shopping.merchant.products.v1.ProductInput product_input = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[ProductInputOrBuilder](/java/docs/reference/google-shopping-merchant-products/latest/com.google.shopping.merchant.products.v1.ProductInputOrBuilder)`

### getUpdateMask()

```
public abstract FieldMask getUpdateMask()
```

Optional. The list of product attributes to be updated.

If the update mask is omitted, then it is treated as implied field mask equivalent to all fields that are populated (have a non-empty value).

Attributes specified in the update mask without a value specified in the body will be deleted from the product.

Update mask can only be specified for top level fields in attributes and custom attributes.

To specify the update mask for custom attributes you need to add the `custom_attribute.` prefix.

Providing special "\*" value for full product replacement is not supported.

`.google.protobuf.FieldMask update_mask = 2 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[FieldMask](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.FieldMask.html)`

The updateMask.

### getUpdateMaskOrBuilder()

```
public abstract FieldMaskOrBuilder getUpdateMaskOrBuilder()
```

Optional. The list of product attributes to be updated.

If the update mask is omitted, then it is treated as implied field mask equivalent to all fields that are populated (have a non-empty value).

Attributes specified in the update mask without a value specified in the body will be deleted from the product.

Update mask can only be specified for top level fields in attributes and custom attributes.

To specify the update mask for custom attributes you need to add the `custom_attribute.` prefix.

Providing special "\*" value for full product replacement is not supported.

`.google.protobuf.FieldMask update_mask = 2 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[FieldMaskOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.FieldMaskOrBuilder.html)`

### hasProductInput()

```
public abstract boolean hasProductInput()
```

Required. The product input resource to update. Information you submit will be applied to the processed product as well.

`.google.shopping.merchant.products.v1.ProductInput product_input = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the productInput field is set.

### hasUpdateMask()

```
public abstract boolean hasUpdateMask()
```

Optional. The list of product attributes to be updated.

If the update mask is omitted, then it is treated as implied field mask equivalent to all fields that are populated (have a non-empty value).

Attributes specified in the update mask without a value specified in the body will be deleted from the product.

Update mask can only be specified for top level fields in attributes and custom attributes.

To specify the update mask for custom attributes you need to add the `custom_attribute.` prefix.

Providing special "\*" value for full product replacement is not supported.

`.google.protobuf.FieldMask update_mask = 2 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the updateMask field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.

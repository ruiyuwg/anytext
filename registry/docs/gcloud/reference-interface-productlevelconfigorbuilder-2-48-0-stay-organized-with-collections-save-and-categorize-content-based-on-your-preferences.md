-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface ProductLevelConfigOrBuilder (2.48.0) Stay organized with collections Save and categorize content based on your preferences.

2.89.0 (latest) 2.87.0 2.85.0 2.84.0 2.82.0 2.80.0 2.78.0 2.77.0 2.76.0 2.75.0 2.74.0 2.72.0 2.70.0 2.69.0 2.66.0 2.65.0 2.64.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.1 2.4.0 2.3.0 2.2.3 2.1.0 2.0.19

```
public interface ProductLevelConfigOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getIngestionProductType()

```
public abstract String getIngestionProductType()
```

The type of Products allowed to be ingested into the catalog. Acceptable values are:

-   `primary` (default): You can ingest Products of all types. When ingesting a Product, its type will default to Product.Type.PRIMARY if unset.
-   `variant` (incompatible with Retail Search): You can only ingest Product.Type.VARIANT Products. This means Product.primary\_product\_id cannot be empty.
    
    If this field is set to an invalid value other than these, an INVALID\_ARGUMENT error is returned.
    
    If this field is `variant` and merchant\_center\_product\_id\_field is `itemGroupId`, an INVALID\_ARGUMENT error is returned.
    
    See [Product levels](https://cloud.google.com/retail/docs/catalog#product-levels) for more details.
    

`string ingestion_product_type = 1;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The ingestionProductType.

### getIngestionProductTypeBytes()

```
public abstract ByteString getIngestionProductTypeBytes()
```

The type of Products allowed to be ingested into the catalog. Acceptable values are:

-   `primary` (default): You can ingest Products of all types. When ingesting a Product, its type will default to Product.Type.PRIMARY if unset.
-   `variant` (incompatible with Retail Search): You can only ingest Product.Type.VARIANT Products. This means Product.primary\_product\_id cannot be empty.
    
    If this field is set to an invalid value other than these, an INVALID\_ARGUMENT error is returned.
    
    If this field is `variant` and merchant\_center\_product\_id\_field is `itemGroupId`, an INVALID\_ARGUMENT error is returned.
    
    See [Product levels](https://cloud.google.com/retail/docs/catalog#product-levels) for more details.
    

`string ingestion_product_type = 1;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for ingestionProductType.

### getMerchantCenterProductIdField()

```
public abstract String getMerchantCenterProductIdField()
```

Which field of [Merchant Center Product](/bigquery-transfer/docs/merchant-center-products-schema) should be imported as Product.id. Acceptable values are:

-   `offerId` (default): Import `offerId` as the product ID.
-   `itemGroupId`: Import `itemGroupId` as the product ID. Notice that Retail API will choose one item from the ones with the same `itemGroupId`, and use it to represent the item group.
    
    If this field is set to an invalid value other than these, an INVALID\_ARGUMENT error is returned.
    
    If this field is `itemGroupId` and ingestion\_product\_type is `variant`, an INVALID\_ARGUMENT error is returned.
    
    See [Product levels](https://cloud.google.com/retail/docs/catalog#product-levels) for more details.
    

`string merchant_center_product_id_field = 2;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The merchantCenterProductIdField.

### getMerchantCenterProductIdFieldBytes()

```
public abstract ByteString getMerchantCenterProductIdFieldBytes()
```

Which field of [Merchant Center Product](/bigquery-transfer/docs/merchant-center-products-schema) should be imported as Product.id. Acceptable values are:

-   `offerId` (default): Import `offerId` as the product ID.
-   `itemGroupId`: Import `itemGroupId` as the product ID. Notice that Retail API will choose one item from the ones with the same `itemGroupId`, and use it to represent the item group.
    
    If this field is set to an invalid value other than these, an INVALID\_ARGUMENT error is returned.
    
    If this field is `itemGroupId` and ingestion\_product\_type is `variant`, an INVALID\_ARGUMENT error is returned.
    
    See [Product levels](https://cloud.google.com/retail/docs/catalog#product-levels) for more details.
    

`string merchant_center_product_id_field = 2;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for merchantCenterProductIdField.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.

-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface PriceCompetitivenessProductViewOrBuilder (0.13.0) Stay organized with collections Save and categorize content based on your preferences.

1.15.0 (latest) 1.13.0 1.11.0 1.10.0 1.8.0 1.6.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0 0.46.0 0.44.0 0.43.0 0.40.0 0.39.0 0.38.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.0 0.3.0

```
public interface PriceCompetitivenessProductViewOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getBenchmarkPrice()

```
public abstract Price getBenchmarkPrice()
```

Latest available price benchmark for the product's catalog in the benchmark country.

`.google.shopping.type.Price benchmark_price = 17;`

**Returns**

**Type**

**Description**

`[Price](/java/docs/reference/google-shopping-merchant-reports/0.13.0/com.google.shopping.type.Price)`

The benchmarkPrice.

### getBenchmarkPriceOrBuilder()

```
public abstract PriceOrBuilder getBenchmarkPriceOrBuilder()
```

Latest available price benchmark for the product's catalog in the benchmark country.

`.google.shopping.type.Price benchmark_price = 17;`

**Returns**

**Type**

**Description**

`[PriceOrBuilder](/java/docs/reference/google-shopping-merchant-reports/0.13.0/com.google.shopping.type.PriceOrBuilder)`

### getBrand()

```
public abstract String getBrand()
```

Brand of the product.

`optional string brand = 5;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The brand.

### getBrandBytes()

```
public abstract ByteString getBrandBytes()
```

Brand of the product.

`optional string brand = 5;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for brand.

### getCategoryL1()

```
public abstract String getCategoryL1()
```

Product category (1st level) in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436).

`optional string category_l1 = 6;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The categoryL1.

### getCategoryL1Bytes()

```
public abstract ByteString getCategoryL1Bytes()
```

Product category (1st level) in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436).

`optional string category_l1 = 6;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for categoryL1.

### getCategoryL2()

```
public abstract String getCategoryL2()
```

Product category (2nd level) in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436).

`optional string category_l2 = 7;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The categoryL2.

### getCategoryL2Bytes()

```
public abstract ByteString getCategoryL2Bytes()
```

Product category (2nd level) in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436).

`optional string category_l2 = 7;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for categoryL2.

### getCategoryL3()

```
public abstract String getCategoryL3()
```

Product category (3rd level) in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436).

`optional string category_l3 = 8;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The categoryL3.

### getCategoryL3Bytes()

```
public abstract ByteString getCategoryL3Bytes()
```

Product category (3rd level) in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436).

`optional string category_l3 = 8;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for categoryL3.

### getCategoryL4()

```
public abstract String getCategoryL4()
```

Product category (4th level) in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436).

`optional string category_l4 = 9;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The categoryL4.

### getCategoryL4Bytes()

```
public abstract ByteString getCategoryL4Bytes()
```

Product category (4th level) in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436).

`optional string category_l4 = 9;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for categoryL4.

### getCategoryL5()

```
public abstract String getCategoryL5()
```

Product category (5th level) in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436).

`optional string category_l5 = 10;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The categoryL5.

### getCategoryL5Bytes()

```
public abstract ByteString getCategoryL5Bytes()
```

Product category (5th level) in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436).

`optional string category_l5 = 10;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for categoryL5.

### getId()

```
public abstract String getId()
```

REST ID of the product, in the form of `channel~languageCode~feedLabel~offerId`. Can be used to join data with the `product_view` table.

Required in the `SELECT` clause.

`optional string id = 2;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The id.

### getIdBytes()

```
public abstract ByteString getIdBytes()
```

REST ID of the product, in the form of `channel~languageCode~feedLabel~offerId`. Can be used to join data with the `product_view` table.

Required in the `SELECT` clause.

`optional string id = 2;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for id.

### getOfferId()

```
public abstract String getOfferId()
```

Merchant-provided id of the product.

`optional string offer_id = 3;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The offerId.

### getOfferIdBytes()

```
public abstract ByteString getOfferIdBytes()
```

Merchant-provided id of the product.

`optional string offer_id = 3;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for offerId.

### getPrice()

```
public abstract Price getPrice()
```

Current price of the product.

`.google.shopping.type.Price price = 16;`

**Returns**

**Type**

**Description**

`[Price](/java/docs/reference/google-shopping-merchant-reports/0.13.0/com.google.shopping.type.Price)`

The price.

### getPriceOrBuilder()

```
public abstract PriceOrBuilder getPriceOrBuilder()
```

Current price of the product.

`.google.shopping.type.Price price = 16;`

**Returns**

**Type**

**Description**

`[PriceOrBuilder](/java/docs/reference/google-shopping-merchant-reports/0.13.0/com.google.shopping.type.PriceOrBuilder)`

### getProductTypeL1()

```
public abstract String getProductTypeL1()
```

Product type (1st level) in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324406).

`optional string product_type_l1 = 11;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The productTypeL1.

### getProductTypeL1Bytes()

```
public abstract ByteString getProductTypeL1Bytes()
```

Product type (1st level) in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324406).

`optional string product_type_l1 = 11;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for productTypeL1.

### getProductTypeL2()

```
public abstract String getProductTypeL2()
```

Product type (2nd level) in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324406).

`optional string product_type_l2 = 12;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The productTypeL2.

### getProductTypeL2Bytes()

```
public abstract ByteString getProductTypeL2Bytes()
```

Product type (2nd level) in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324406).

`optional string product_type_l2 = 12;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for productTypeL2.

### getProductTypeL3()

```
public abstract String getProductTypeL3()
```

Product type (3rd level) in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324406).

`optional string product_type_l3 = 13;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The productTypeL3.

### getProductTypeL3Bytes()

```
public abstract ByteString getProductTypeL3Bytes()
```

Product type (3rd level) in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324406).

`optional string product_type_l3 = 13;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for productTypeL3.

### getProductTypeL4()

```
public abstract String getProductTypeL4()
```

Product type (4th level) in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324406).

`optional string product_type_l4 = 14;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The productTypeL4.

### getProductTypeL4Bytes()

```
public abstract ByteString getProductTypeL4Bytes()
```

Product type (4th level) in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324406).

`optional string product_type_l4 = 14;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for productTypeL4.

### getProductTypeL5()

```
public abstract String getProductTypeL5()
```

Product type (5th level) in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324406).

`optional string product_type_l5 = 15;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The productTypeL5.

### getProductTypeL5Bytes()

```
public abstract ByteString getProductTypeL5Bytes()
```

Product type (5th level) in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324406).

`optional string product_type_l5 = 15;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for productTypeL5.

### getReportCountryCode()

```
public abstract String getReportCountryCode()
```

Country of the price benchmark. Represented in the ISO 3166 format.

Required in the `SELECT` clause.

`optional string report_country_code = 1;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The reportCountryCode.

### getReportCountryCodeBytes()

```
public abstract ByteString getReportCountryCodeBytes()
```

Country of the price benchmark. Represented in the ISO 3166 format.

Required in the `SELECT` clause.

`optional string report_country_code = 1;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for reportCountryCode.

### getTitle()

```
public abstract String getTitle()
```

Title of the product.

`optional string title = 4;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The title.

### getTitleBytes()

```
public abstract ByteString getTitleBytes()
```

Title of the product.

`optional string title = 4;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for title.

### hasBenchmarkPrice()

```
public abstract boolean hasBenchmarkPrice()
```

Latest available price benchmark for the product's catalog in the benchmark country.

`.google.shopping.type.Price benchmark_price = 17;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the benchmarkPrice field is set.

### hasBrand()

```
public abstract boolean hasBrand()
```

Brand of the product.

`optional string brand = 5;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the brand field is set.

### hasCategoryL1()

```
public abstract boolean hasCategoryL1()
```

Product category (1st level) in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436).

`optional string category_l1 = 6;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the categoryL1 field is set.

### hasCategoryL2()

```
public abstract boolean hasCategoryL2()
```

Product category (2nd level) in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436).

`optional string category_l2 = 7;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the categoryL2 field is set.

### hasCategoryL3()

```
public abstract boolean hasCategoryL3()
```

Product category (3rd level) in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436).

`optional string category_l3 = 8;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the categoryL3 field is set.

### hasCategoryL4()

```
public abstract boolean hasCategoryL4()
```

Product category (4th level) in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436).

`optional string category_l4 = 9;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the categoryL4 field is set.

### hasCategoryL5()

```
public abstract boolean hasCategoryL5()
```

Product category (5th level) in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436).

`optional string category_l5 = 10;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the categoryL5 field is set.

### hasId()

```
public abstract boolean hasId()
```

REST ID of the product, in the form of `channel~languageCode~feedLabel~offerId`. Can be used to join data with the `product_view` table.

Required in the `SELECT` clause.

`optional string id = 2;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the id field is set.

### hasOfferId()

```
public abstract boolean hasOfferId()
```

Merchant-provided id of the product.

`optional string offer_id = 3;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the offerId field is set.

### hasPrice()

```
public abstract boolean hasPrice()
```

Current price of the product.

`.google.shopping.type.Price price = 16;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the price field is set.

### hasProductTypeL1()

```
public abstract boolean hasProductTypeL1()
```

Product type (1st level) in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324406).

`optional string product_type_l1 = 11;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the productTypeL1 field is set.

### hasProductTypeL2()

```
public abstract boolean hasProductTypeL2()
```

Product type (2nd level) in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324406).

`optional string product_type_l2 = 12;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the productTypeL2 field is set.

### hasProductTypeL3()

```
public abstract boolean hasProductTypeL3()
```

Product type (3rd level) in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324406).

`optional string product_type_l3 = 13;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the productTypeL3 field is set.

### hasProductTypeL4()

```
public abstract boolean hasProductTypeL4()
```

Product type (4th level) in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324406).

`optional string product_type_l4 = 14;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the productTypeL4 field is set.

### hasProductTypeL5()

```
public abstract boolean hasProductTypeL5()
```

Product type (5th level) in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324406).

`optional string product_type_l5 = 15;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the productTypeL5 field is set.

### hasReportCountryCode()

```
public abstract boolean hasReportCountryCode()
```

Country of the price benchmark. Represented in the ISO 3166 format.

Required in the `SELECT` clause.

`optional string report_country_code = 1;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the reportCountryCode field is set.

### hasTitle()

```
public abstract boolean hasTitle()
```

Title of the product.

`optional string title = 4;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the title field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.

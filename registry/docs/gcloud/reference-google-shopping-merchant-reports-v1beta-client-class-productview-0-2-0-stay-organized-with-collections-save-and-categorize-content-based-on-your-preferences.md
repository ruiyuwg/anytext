-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Shopping Merchant Reports V1beta Client - Class ProductView (0.2.0) Stay organized with collections Save and categorize content based on your preferences.

1.2.0 (latest) 1.1.3 1.0.0 0.10.0 0.9.1 0.8.4 0.7.3 0.6.0 0.5.0 0.4.0 0.3.0 0.2.0 0.1.0

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

Reference documentation and code samples for the Google Shopping Merchant Reports V1beta Client class ProductView.

Fields available for query in `product_view` table.

Products in the current inventory. Products in this table are the same as in Products sub-API but not all product attributes from Products sub-API are available for query in this table. In contrast to Products sub-API, this table allows to filter the returned list of products by product attributes. To retrieve a single product by `id` or list all products, Products sub-API should be used. Values are only set for fields requested explicitly in the request's search query.

Generated from protobuf message `google.shopping.merchant.reports.v1beta.ProductView`

## Namespace

Google \\ Shopping \\ Merchant \\ Reports \\ V1beta

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ id`

`string`  

REST ID of the product, in the form of `channel~languageCode~feedLabel~offerId`. Merchant API methods that operate on products take this as their `name` parameter. Required in the `SELECT` clause.

`↳ channel`

`int`  

Channel of the product. Can be `ONLINE` or `LOCAL`.

`↳ language_code`

`string`  

Language code of the product in BCP 47 format.

`↳ feed_label`

`string`  

Feed label of the product.

`↳ offer_id`

`string`  

Merchant-provided id of the product.

`↳ title`

`string`  

Title of the product.

`↳ brand`

`string`  

Brand of the product.

`↳ category_l1`

`string`  

Product category (1st level) in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436).

`↳ category_l2`

`string`  

Product category (2nd level) in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436).

`↳ category_l3`

`string`  

Product category (3rd level) in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436).

`↳ category_l4`

`string`  

Product category (4th level) in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436).

`↳ category_l5`

`string`  

Product category (5th level) in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436).

`↳ product_type_l1`

`string`  

Product type (1st level) in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324406).

`↳ product_type_l2`

`string`  

Product type (2nd level) in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324406).

`↳ product_type_l3`

`string`  

Product type (3rd level) in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324406).

`↳ product_type_l4`

`string`  

Product type (4th level) in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324406).

`↳ product_type_l5`

`string`  

Product type (5th level) in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324406).

`↳ price`

`Google\Shopping\Type\Price`  

Product price. Absent if the information about the price of the product is not available.

`↳ condition`

`string`  

[Condition](https://support.google.com/merchants/answer/6324469) of the product.

`↳ availability`

`string`  

[Availability](https://support.google.com/merchants/answer/6324448) of the product.

`↳ shipping_label`

`string`  

Normalized [shipping label](https://support.google.com/merchants/answer/6324504) specified in the feed.

`↳ gtin`

`array`  

List of Global Trade Item Numbers (GTINs) of the product.

`↳ item_group_id`

`string`  

Item group id provided by the merchant for grouping variants together.

`↳ thumbnail_link`

`string`  

Link to the processed image of the product, hosted on the Google infrastructure.

`↳ creation_time`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

The time the merchant created the product in timestamp seconds.

`↳ expiration_date`

`[Google\Type\Date](https://googleapis.github.io/common-protos-php#Google/Type/Date)`  

Expiration date for the product, specified on insertion.

`↳ aggregated_reporting_context_status`

`int`  

Aggregated status.

`↳ item_issues`

`array<[Google\Shopping\Merchant\Reports\V1beta\ProductView\ItemIssue](/php/docs/reference/shopping-merchant-reports/0.2.0/V1beta.ProductView.ItemIssue)>`  

List of item issues for the product. **This field cannot be used for sorting the results.** **Only selected attributes of this field (for example, `item_issues.severity.aggregated_severity`) can be used for filtering the results.**

### getId

REST ID of the product, in the form of `channel~languageCode~feedLabel~offerId`. Merchant API methods that operate on products take this as their `name` parameter.

Required in the `SELECT` clause.

**Returns**

**Type**

**Description**

`string`

### hasId

### clearId

### setId

REST ID of the product, in the form of `channel~languageCode~feedLabel~offerId`. Merchant API methods that operate on products take this as their `name` parameter.

Required in the `SELECT` clause.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getChannel

Channel of the product. Can be `ONLINE` or `LOCAL`.

**Returns**

**Type**

**Description**

`int`

### hasChannel

### clearChannel

### setChannel

Channel of the product. Can be `ONLINE` or `LOCAL`.

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

### getLanguageCode

Language code of the product in BCP 47 format.

**Returns**

**Type**

**Description**

`string`

### hasLanguageCode

### clearLanguageCode

### setLanguageCode

Language code of the product in BCP 47 format.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getFeedLabel

Feed label of the product.

**Returns**

**Type**

**Description**

`string`

### hasFeedLabel

### clearFeedLabel

### setFeedLabel

Feed label of the product.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getOfferId

Merchant-provided id of the product.

**Returns**

**Type**

**Description**

`string`

### hasOfferId

### clearOfferId

### setOfferId

Merchant-provided id of the product.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getTitle

Title of the product.

**Returns**

**Type**

**Description**

`string`

### hasTitle

### clearTitle

### setTitle

Title of the product.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getBrand

Brand of the product.

**Returns**

**Type**

**Description**

`string`

### hasBrand

### clearBrand

### setBrand

Brand of the product.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getCategoryL1

Product category (1st level) in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436).

**Returns**

**Type**

**Description**

`string`

### hasCategoryL1

### clearCategoryL1

### setCategoryL1

Product category (1st level) in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436).

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getCategoryL2

Product category (2nd level) in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436).

**Returns**

**Type**

**Description**

`string`

### hasCategoryL2

### clearCategoryL2

### setCategoryL2

Product category (2nd level) in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436).

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getCategoryL3

Product category (3rd level) in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436).

**Returns**

**Type**

**Description**

`string`

### hasCategoryL3

### clearCategoryL3

### setCategoryL3

Product category (3rd level) in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436).

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getCategoryL4

Product category (4th level) in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436).

**Returns**

**Type**

**Description**

`string`

### hasCategoryL4

### clearCategoryL4

### setCategoryL4

Product category (4th level) in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436).

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getCategoryL5

Product category (5th level) in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436).

**Returns**

**Type**

**Description**

`string`

### hasCategoryL5

### clearCategoryL5

### setCategoryL5

Product category (5th level) in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436).

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getProductTypeL1

Product type (1st level) in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324406).

**Returns**

**Type**

**Description**

`string`

### hasProductTypeL1

### clearProductTypeL1

### setProductTypeL1

Product type (1st level) in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324406).

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getProductTypeL2

Product type (2nd level) in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324406).

**Returns**

**Type**

**Description**

`string`

### hasProductTypeL2

### clearProductTypeL2

### setProductTypeL2

Product type (2nd level) in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324406).

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getProductTypeL3

Product type (3rd level) in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324406).

**Returns**

**Type**

**Description**

`string`

### hasProductTypeL3

### clearProductTypeL3

### setProductTypeL3

Product type (3rd level) in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324406).

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getProductTypeL4

Product type (4th level) in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324406).

**Returns**

**Type**

**Description**

`string`

### hasProductTypeL4

### clearProductTypeL4

### setProductTypeL4

Product type (4th level) in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324406).

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getProductTypeL5

Product type (5th level) in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324406).

**Returns**

**Type**

**Description**

`string`

### hasProductTypeL5

### clearProductTypeL5

### setProductTypeL5

Product type (5th level) in merchant's own [product taxonomy](https://support.google.com/merchants/answer/6324406).

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getPrice

Product price. Absent if the information about the price of the product is not available.

**Returns**

**Type**

**Description**

`Google\Shopping\Type\Price|null`

### hasPrice

### clearPrice

### setPrice

Product price. Absent if the information about the price of the product is not available.

**Parameter**

**Name**

**Description**

`var`

`Google\Shopping\Type\Price`  

**Returns**

**Type**

**Description**

`$this`

### getCondition

[Condition](https://support.google.com/merchants/answer/6324469) of the product.

**Returns**

**Type**

**Description**

`string`

### hasCondition

### clearCondition

### setCondition

[Condition](https://support.google.com/merchants/answer/6324469) of the product.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getAvailability

[Availability](https://support.google.com/merchants/answer/6324448) of the product.

**Returns**

**Type**

**Description**

`string`

### hasAvailability

### clearAvailability

### setAvailability

[Availability](https://support.google.com/merchants/answer/6324448) of the product.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getShippingLabel

Normalized [shipping label](https://support.google.com/merchants/answer/6324504) specified in the feed.

**Returns**

**Type**

**Description**

`string`

### hasShippingLabel

### clearShippingLabel

### setShippingLabel

Normalized [shipping label](https://support.google.com/merchants/answer/6324504) specified in the feed.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getGtin

List of Global Trade Item Numbers (GTINs) of the product.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setGtin

List of Global Trade Item Numbers (GTINs) of the product.

**Parameter**

**Name**

**Description**

`var`

`string[]`  

**Returns**

**Type**

**Description**

`$this`

### getItemGroupId

Item group id provided by the merchant for grouping variants together.

**Returns**

**Type**

**Description**

`string`

### hasItemGroupId

### clearItemGroupId

### setItemGroupId

Item group id provided by the merchant for grouping variants together.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getThumbnailLink

Link to the processed image of the product, hosted on the Google infrastructure.

**Returns**

**Type**

**Description**

`string`

### hasThumbnailLink

### clearThumbnailLink

### setThumbnailLink

Link to the processed image of the product, hosted on the Google infrastructure.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getCreationTime

The time the merchant created the product in timestamp seconds.

**Returns**

**Type**

**Description**

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)|null`

### hasCreationTime

### clearCreationTime

### setCreationTime

The time the merchant created the product in timestamp seconds.

**Parameter**

**Name**

**Description**

`var`

`[Google\Protobuf\Timestamp](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Timestamp)`  

**Returns**

**Type**

**Description**

`$this`

### getExpirationDate

Expiration date for the product, specified on insertion.

**Returns**

**Type**

**Description**

`[Google\Type\Date](https://googleapis.github.io/common-protos-php#Google/Type/Date)|null`

### hasExpirationDate

### clearExpirationDate

### setExpirationDate

Expiration date for the product, specified on insertion.

**Parameter**

**Name**

**Description**

`var`

`[Google\Type\Date](https://googleapis.github.io/common-protos-php#Google/Type/Date)`  

**Returns**

**Type**

**Description**

`$this`

### getAggregatedReportingContextStatus

Aggregated status.

**Returns**

**Type**

**Description**

`int`

### hasAggregatedReportingContextStatus

### clearAggregatedReportingContextStatus

### setAggregatedReportingContextStatus

Aggregated status.

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

### getItemIssues

List of item issues for the product.

**This field cannot be used for sorting the results.** **Only selected attributes of this field (for example, `item_issues.severity.aggregated_severity`) can be used for filtering the results.**

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setItemIssues

List of item issues for the product.

**This field cannot be used for sorting the results.** **Only selected attributes of this field (for example, `item_issues.severity.aggregated_severity`) can be used for filtering the results.**

**Parameter**

**Name**

**Description**

`var`

`array<[Google\Shopping\Merchant\Reports\V1beta\ProductView\ItemIssue](/php/docs/reference/shopping-merchant-reports/0.2.0/V1beta.ProductView.ItemIssue)>`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.

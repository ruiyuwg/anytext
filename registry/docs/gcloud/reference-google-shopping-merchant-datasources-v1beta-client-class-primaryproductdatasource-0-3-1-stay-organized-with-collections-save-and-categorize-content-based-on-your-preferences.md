-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Shopping Merchant DataSources V1beta Client - Class PrimaryProductDataSource (0.3.1) Stay organized with collections Save and categorize content based on your preferences.

2.0.0 (latest) 1.3.0 1.2.1 1.1.1 1.0.0 0.6.0 0.5.1 0.4.0 0.3.1 0.2.3 0.1.0

**Beta**

This library is covered by the [Pre-GA Offerings Terms](/terms/service-terms#1) of the Terms of Service. Pre-GA libraries might have limited support, and changes to pre-GA libraries might not be compatible with other pre-GA versions. For more information, see the [launch stage descriptions](/products#product-launch-stages).

Reference documentation and code samples for the Google Shopping Merchant DataSources V1beta Client class PrimaryProductDataSource.

The primary data source for local and online products.

Generated from protobuf message `google.shopping.merchant.datasources.v1beta.PrimaryProductDataSource`

## Namespace

Google \\ Shopping \\ Merchant \\ DataSources \\ V1beta

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ channel`

`int`  

Required. Immutable. Specifies the type of data source channel.

`↳ feed_label`

`string`  

Optional. Immutable. The feed label that is specified on the data source level. Must be less than or equal to 20 uppercase letters (A-Z), numbers (0-9), and dashes (-). See also [migration to feed labels](https://developers.google.com/shopping-content/guides/products/feed-labels). `feedLabel` and `contentLanguage` must be either both set or unset for data sources with product content type. They must be set for data sources with a file input. If set, the data source will only accept products matching this combination. If unset, the data source will accept products without that restriction.

`↳ content_language`

`string`  

Optional. Immutable. The two-letter ISO 639-1 language of the items in the data source. `feedLabel` and `contentLanguage` must be either both set or unset. The fields can only be unset for data sources without file input. If set, the data source will only accept products matching this combination. If unset, the data source will accept products without that restriction.

`↳ countries`

`array`  

Optional. The countries where the items may be displayed. Represented as a [CLDR territory code](https://github.com/unicode-org/cldr/blob/latest/common/main/en.xml).

`↳ default_rule`

`[PrimaryProductDataSource\DefaultRule](/php/docs/reference/shopping-merchant-datasources/0.3.1/V1beta.PrimaryProductDataSource.DefaultRule)`  

Optional. Default rule management of the data source. If set, the linked data sources will be replaced.

### getChannel

Required. Immutable. Specifies the type of data source channel.

**Returns**

**Type**

**Description**

`int`

### setChannel

Required. Immutable. Specifies the type of data source channel.

**Parameter**

**Name**

**Description**

`var`

`int`  

**Returns**

**Type**

**Description**

`$this`

### getFeedLabel

Optional. Immutable. The feed label that is specified on the data source level.

Must be less than or equal to 20 uppercase letters (A-Z), numbers (0-9), and dashes (-). See also [migration to feed labels](https://developers.google.com/shopping-content/guides/products/feed-labels). `feedLabel` and `contentLanguage` must be either both set or unset for data sources with product content type. They must be set for data sources with a file input. If set, the data source will only accept products matching this combination. If unset, the data source will accept products without that restriction.

**Returns**

**Type**

**Description**

`string`

### hasFeedLabel

### clearFeedLabel

### setFeedLabel

Optional. Immutable. The feed label that is specified on the data source level.

Must be less than or equal to 20 uppercase letters (A-Z), numbers (0-9), and dashes (-). See also [migration to feed labels](https://developers.google.com/shopping-content/guides/products/feed-labels). `feedLabel` and `contentLanguage` must be either both set or unset for data sources with product content type. They must be set for data sources with a file input. If set, the data source will only accept products matching this combination. If unset, the data source will accept products without that restriction.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getContentLanguage

Optional. Immutable. The two-letter ISO 639-1 language of the items in the data source.

`feedLabel` and `contentLanguage` must be either both set or unset. The fields can only be unset for data sources without file input. If set, the data source will only accept products matching this combination. If unset, the data source will accept products without that restriction.

**Returns**

**Type**

**Description**

`string`

### hasContentLanguage

### clearContentLanguage

### setContentLanguage

Optional. Immutable. The two-letter ISO 639-1 language of the items in the data source.

`feedLabel` and `contentLanguage` must be either both set or unset. The fields can only be unset for data sources without file input. If set, the data source will only accept products matching this combination. If unset, the data source will accept products without that restriction.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getCountries

Optional. The countries where the items may be displayed. Represented as a [CLDR territory code](https://github.com/unicode-org/cldr/blob/latest/common/main/en.xml).

**Returns**

**Type**

**Description**

`[Google\Protobuf\Internal\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/Internal/RepeatedField)`

### setCountries

Optional. The countries where the items may be displayed. Represented as a [CLDR territory code](https://github.com/unicode-org/cldr/blob/latest/common/main/en.xml).

**Parameter**

**Name**

**Description**

`var`

`string[]`  

**Returns**

**Type**

**Description**

`$this`

### getDefaultRule

Optional. Default rule management of the data source. If set, the linked data sources will be replaced.

**Returns**

**Type**

**Description**

`[PrimaryProductDataSource\DefaultRule](/php/docs/reference/shopping-merchant-datasources/0.3.1/V1beta.PrimaryProductDataSource.DefaultRule)|null`

### hasDefaultRule

### clearDefaultRule

### setDefaultRule

Optional. Default rule management of the data source. If set, the linked data sources will be replaced.

**Parameter**

**Name**

**Description**

`var`

`[PrimaryProductDataSource\DefaultRule](/php/docs/reference/shopping-merchant-datasources/0.3.1/V1beta.PrimaryProductDataSource.DefaultRule)`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-19 UTC.

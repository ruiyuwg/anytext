-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Google Shopping Merchant Promotions V1 Client - Class Promotion (1.2.0) Stay organized with collections Save and categorize content based on your preferences.

1.2.0 (latest) 1.1.3 1.0.0 0.3.0 0.2.1 0.1.3

Reference documentation and code samples for the Google Shopping Merchant Promotions V1 Client class Promotion.

Represents a promotion. See the following articles for more details.

Required promotion input attributes to pass data validation checks are primarily defined below:

-   [Promotions data specification](https://support.google.com/merchants/answer/2906014)
-   [Local promotions data specification](https://support.google.com/merchants/answer/10146130) After inserting, updating a promotion input, it may take several minutes before the final promotion can be retrieved.

Generated from protobuf message `google.shopping.merchant.promotions.v1.Promotion`

## Namespace

Google \\ Shopping \\ Merchant \\ Promotions \\ V1

## Methods

### \_\_construct

Constructor.

**Parameters**

**Name**

**Description**

`data`

`array`  

Optional. Data for populating the Message object.

`↳ name`

`string`  

Identifier. The name of the promotion. Format: `accounts/{account}/promotions/{promotion}`

`↳ promotion_id`

`string`  

Required. The user provided promotion ID to uniquely identify the promotion. Follow [minimum requirements](https://support.google.com/merchants/answer/7050148?ref_topic=7322920&sjid=871860036916537104-NC#minimum_requirements) to prevent promotion disapprovals.

`↳ content_language`

`string`  

Required. The two-letter [ISO 639-1](http://en.wikipedia.org/wiki/ISO_639-1) language code for the promotion. Promotions is only for [selected languages](https://support.google.com/merchants/answer/4588281?ref_topic=6396150&sjid=18314938579342094533-NC#option3&zippy=).

`↳ target_country`

`string`  

Required. The target country used as part of the unique identifier. Represented as a [CLDR territory code](https://github.com/unicode-org/cldr/blob/latest/common/main/en.xml). Promotions are only available in selected countries, [Free Listings and Shopping ads](https://support.google.com/merchants/answer/4588460) [Local Inventory ads](https://support.google.com/merchants/answer/10146326)

`↳ redemption_channel`

`int[]`  

Required. [Redemption channel](https://support.google.com/merchants/answer/13837674?ref_topic=13773355&sjid=17642868584668136159-NC) for the promotion. At least one channel is required.

`↳ data_source`

`string`  

Output only. The primary data source of the promotion.

`↳ attributes`

`[Attributes](/php/docs/reference/shopping-merchant-promotions/latest/V1.Attributes)`  

Optional. A list of promotion attributes.

`↳ custom_attributes`

`array<[Google\Shopping\Type\CustomAttribute](https://docs.cloud.google.com/php/docs/reference/shopping-common-protos/latest/Type.CustomAttribute.html)>`  

Optional. A list of custom (merchant-provided) attributes. It can also be used for submitting any attribute of the data specification in its generic form (for example, `{ "name": "size type", "value": "regular" }`). This is useful for submitting attributes not explicitly exposed by the API.

`↳ promotion_status`

`[PromotionStatus](/php/docs/reference/shopping-merchant-promotions/latest/V1.PromotionStatus)`  

Output only. The [status of a promotion](https://support.google.com/merchants/answer/3398326?ref_topic=7322924&sjid=5155774230887277618-NC), data validation issues, that is, information about a promotion computed asynchronously.

`↳ version_number`

`int|string`  

Optional. Represents the existing version (freshness) of the promotion, which can be used to preserve the right order when multiple updates are done at the same time. If set, the insertion is prevented when version number is lower than the current version number of the existing promotion. Re-insertion (for example, promotion refresh after 30 days) can be performed with the current `version_number`. If the operation is prevented, the aborted exception will be thrown.

### getName

Identifier. The name of the promotion.

Format: `accounts/{account}/promotions/{promotion}`

**Returns**

**Type**

**Description**

`string`

### setName

Identifier. The name of the promotion.

Format: `accounts/{account}/promotions/{promotion}`

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getPromotionId

Required. The user provided promotion ID to uniquely identify the promotion. Follow [minimum requirements](https://support.google.com/merchants/answer/7050148?ref_topic=7322920&sjid=871860036916537104-NC#minimum_requirements) to prevent promotion disapprovals.

**Returns**

**Type**

**Description**

`string`

### setPromotionId

Required. The user provided promotion ID to uniquely identify the promotion. Follow [minimum requirements](https://support.google.com/merchants/answer/7050148?ref_topic=7322920&sjid=871860036916537104-NC#minimum_requirements) to prevent promotion disapprovals.

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

Required. The two-letter [ISO 639-1](http://en.wikipedia.org/wiki/ISO_639-1) language code for the promotion.

Promotions is only for [selected languages](https://support.google.com/merchants/answer/4588281?ref_topic=6396150&sjid=18314938579342094533-NC#option3&zippy=).

**Returns**

**Type**

**Description**

`string`

### setContentLanguage

Required. The two-letter [ISO 639-1](http://en.wikipedia.org/wiki/ISO_639-1) language code for the promotion.

Promotions is only for [selected languages](https://support.google.com/merchants/answer/4588281?ref_topic=6396150&sjid=18314938579342094533-NC#option3&zippy=).

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getTargetCountry

Required. The target country used as part of the unique identifier.

Represented as a [CLDR territory code](https://github.com/unicode-org/cldr/blob/latest/common/main/en.xml). Promotions are only available in selected countries, [Free Listings and Shopping ads](https://support.google.com/merchants/answer/4588460) [Local Inventory ads](https://support.google.com/merchants/answer/10146326)

**Returns**

**Type**

**Description**

`string`

### setTargetCountry

Required. The target country used as part of the unique identifier.

Represented as a [CLDR territory code](https://github.com/unicode-org/cldr/blob/latest/common/main/en.xml). Promotions are only available in selected countries, [Free Listings and Shopping ads](https://support.google.com/merchants/answer/4588460) [Local Inventory ads](https://support.google.com/merchants/answer/10146326)

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getRedemptionChannel

Required. [Redemption channel](https://support.google.com/merchants/answer/13837674?ref_topic=13773355&sjid=17642868584668136159-NC) for the promotion. At least one channel is required.

**Returns**

**Type**

**Description**

`[Google\Protobuf\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/RepeatedField)<int>`

### setRedemptionChannel

Required. [Redemption channel](https://support.google.com/merchants/answer/13837674?ref_topic=13773355&sjid=17642868584668136159-NC) for the promotion. At least one channel is required.

**Parameter**

**Name**

**Description**

`var`

`int[]`  

**Returns**

**Type**

**Description**

`$this`

### getDataSource

Output only. The primary data source of the promotion.

**Returns**

**Type**

**Description**

`string`

### setDataSource

Output only. The primary data source of the promotion.

**Parameter**

**Name**

**Description**

`var`

`string`  

**Returns**

**Type**

**Description**

`$this`

### getAttributes

Optional. A list of promotion attributes.

**Returns**

**Type**

**Description**

`[Attributes](/php/docs/reference/shopping-merchant-promotions/latest/V1.Attributes)|null`

### hasAttributes

### clearAttributes

### setAttributes

Optional. A list of promotion attributes.

**Parameter**

**Name**

**Description**

`var`

`[Attributes](/php/docs/reference/shopping-merchant-promotions/latest/V1.Attributes)`  

**Returns**

**Type**

**Description**

`$this`

### getCustomAttributes

Optional. A list of custom (merchant-provided) attributes. It can also be used for submitting any attribute of the data specification in its generic form (for example, `{ "name": "size type", "value": "regular" }`).

This is useful for submitting attributes not explicitly exposed by the API.

**Returns**

**Type**

**Description**

`[Google\Protobuf\RepeatedField](https://protobuf.dev/reference/php/api-docs/Google/Protobuf/RepeatedField)<[Google\Shopping\Type\CustomAttribute](https://docs.cloud.google.com/php/docs/reference/shopping-common-protos/latest/Type.CustomAttribute.html)>`

### setCustomAttributes

Optional. A list of custom (merchant-provided) attributes. It can also be used for submitting any attribute of the data specification in its generic form (for example, `{ "name": "size type", "value": "regular" }`).

This is useful for submitting attributes not explicitly exposed by the API.

**Parameter**

**Name**

**Description**

`var`

`array<[Google\Shopping\Type\CustomAttribute](https://docs.cloud.google.com/php/docs/reference/shopping-common-protos/latest/Type.CustomAttribute.html)>`  

**Returns**

**Type**

**Description**

`$this`

### getPromotionStatus

Output only. The [status of a promotion](https://support.google.com/merchants/answer/3398326?ref_topic=7322924&sjid=5155774230887277618-NC), data validation issues, that is, information about a promotion computed asynchronously.

**Returns**

**Type**

**Description**

`[PromotionStatus](/php/docs/reference/shopping-merchant-promotions/latest/V1.PromotionStatus)|null`

### hasPromotionStatus

### clearPromotionStatus

### setPromotionStatus

Output only. The [status of a promotion](https://support.google.com/merchants/answer/3398326?ref_topic=7322924&sjid=5155774230887277618-NC), data validation issues, that is, information about a promotion computed asynchronously.

**Parameter**

**Name**

**Description**

`var`

`[PromotionStatus](/php/docs/reference/shopping-merchant-promotions/latest/V1.PromotionStatus)`  

**Returns**

**Type**

**Description**

`$this`

### getVersionNumber

Optional. Represents the existing version (freshness) of the promotion, which can be used to preserve the right order when multiple updates are done at the same time.

If set, the insertion is prevented when version number is lower than the current version number of the existing promotion. Re-insertion (for example, promotion refresh after 30 days) can be performed with the current `version_number`. If the operation is prevented, the aborted exception will be thrown.

**Returns**

**Type**

**Description**

`int|string`

### hasVersionNumber

### clearVersionNumber

### setVersionNumber

Optional. Represents the existing version (freshness) of the promotion, which can be used to preserve the right order when multiple updates are done at the same time.

If set, the insertion is prevented when version number is lower than the current version number of the existing promotion. Re-insertion (for example, promotion refresh after 30 days) can be performed with the current `version_number`. If the operation is prevented, the aborted exception will be thrown.

**Parameter**

**Name**

**Description**

`var`

`int|string`  

**Returns**

**Type**

**Description**

`$this`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.

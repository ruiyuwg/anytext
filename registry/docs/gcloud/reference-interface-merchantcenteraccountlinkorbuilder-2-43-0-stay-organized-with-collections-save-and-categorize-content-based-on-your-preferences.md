-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface MerchantCenterAccountLinkOrBuilder (2.43.0) Stay organized with collections Save and categorize content based on your preferences.

2.89.0 (latest) 2.87.0 2.85.0 2.84.0 2.82.0 2.80.0 2.78.0 2.77.0 2.76.0 2.75.0 2.74.0 2.72.0 2.70.0 2.69.0 2.66.0 2.65.0 2.64.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.1 2.4.0 2.3.0 2.2.3 2.1.0 2.0.19

```
public interface MerchantCenterAccountLinkOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getBranchId()

```
public abstract String getBranchId()
```

Required. The branch id (e.g. 0/1/2) within the catalog that products from merchant\_center\_account\_id are streamed to. When updating this field, an empty value will use the currently configured default branch. However, changing the default branch later on won't change the linked branch here.

A single branch id can only have one linked merchant center account id.

`string branch_id = 3 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The branchId.

### getBranchIdBytes()

```
public abstract ByteString getBranchIdBytes()
```

Required. The branch id (e.g. 0/1/2) within the catalog that products from merchant\_center\_account\_id are streamed to. When updating this field, an empty value will use the currently configured default branch. However, changing the default branch later on won't change the linked branch here.

A single branch id can only have one linked merchant center account id.

`string branch_id = 3 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for branchId.

### getFeedFilters(int index)

```
public abstract MerchantCenterAccountLink.MerchantCenterFeedFilter getFeedFilters(int index)
```

Criteria for the Merchant Center feeds to be ingested via the link. All offers will be ingested if the list is empty. Otherwise the offers will be ingested from selected feeds.

`repeated .google.cloud.retail.v2alpha.MerchantCenterAccountLink.MerchantCenterFeedFilter feed_filters = 6;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[MerchantCenterAccountLink.MerchantCenterFeedFilter](/java/docs/reference/google-cloud-retail/2.43.0/com.google.cloud.retail.v2alpha.MerchantCenterAccountLink.MerchantCenterFeedFilter)`

### getFeedFiltersCount()

```
public abstract int getFeedFiltersCount()
```

Criteria for the Merchant Center feeds to be ingested via the link. All offers will be ingested if the list is empty. Otherwise the offers will be ingested from selected feeds.

`repeated .google.cloud.retail.v2alpha.MerchantCenterAccountLink.MerchantCenterFeedFilter feed_filters = 6;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getFeedFiltersList()

```
public abstract List<MerchantCenterAccountLink.MerchantCenterFeedFilter> getFeedFiltersList()
```

Criteria for the Merchant Center feeds to be ingested via the link. All offers will be ingested if the list is empty. Otherwise the offers will be ingested from selected feeds.

`repeated .google.cloud.retail.v2alpha.MerchantCenterAccountLink.MerchantCenterFeedFilter feed_filters = 6;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[MerchantCenterFeedFilter](/java/docs/reference/google-cloud-retail/2.43.0/com.google.cloud.retail.v2alpha.MerchantCenterAccountLink.MerchantCenterFeedFilter)>`

### getFeedFiltersOrBuilder(int index)

```
public abstract MerchantCenterAccountLink.MerchantCenterFeedFilterOrBuilder getFeedFiltersOrBuilder(int index)
```

Criteria for the Merchant Center feeds to be ingested via the link. All offers will be ingested if the list is empty. Otherwise the offers will be ingested from selected feeds.

`repeated .google.cloud.retail.v2alpha.MerchantCenterAccountLink.MerchantCenterFeedFilter feed_filters = 6;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[MerchantCenterAccountLink.MerchantCenterFeedFilterOrBuilder](/java/docs/reference/google-cloud-retail/2.43.0/com.google.cloud.retail.v2alpha.MerchantCenterAccountLink.MerchantCenterFeedFilterOrBuilder)`

### getFeedFiltersOrBuilderList()

```
public abstract List<? extends MerchantCenterAccountLink.MerchantCenterFeedFilterOrBuilder> getFeedFiltersOrBuilderList()
```

Criteria for the Merchant Center feeds to be ingested via the link. All offers will be ingested if the list is empty. Otherwise the offers will be ingested from selected feeds.

`repeated .google.cloud.retail.v2alpha.MerchantCenterAccountLink.MerchantCenterFeedFilter feed_filters = 6;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.retail.v2alpha.MerchantCenterAccountLink.MerchantCenterFeedFilterOrBuilder>`

### getFeedLabel()

```
public abstract String getFeedLabel()
```

The FeedLabel used to perform filtering. Note: this replaces [region\_id](https://developers.google.com/shopping-content/reference/rest/v2.1/products#Product.FIELDS.feed_label).

Example value: `US`. Example value: `FeedLabel1`.

`string feed_label = 4;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The feedLabel.

### getFeedLabelBytes()

```
public abstract ByteString getFeedLabelBytes()
```

The FeedLabel used to perform filtering. Note: this replaces [region\_id](https://developers.google.com/shopping-content/reference/rest/v2.1/products#Product.FIELDS.feed_label).

Example value: `US`. Example value: `FeedLabel1`.

`string feed_label = 4;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for feedLabel.

### getId()

```
public abstract String getId()
```

Output only. Immutable. MerchantCenterAccountLink identifier, which is the final component of name. This field is auto generated and follows the convention: `BranchId_MerchantCenterAccountId`. `projects/*/locations/global/catalogs/default_catalog/merchantCenterAccountLinks/id_1`.

`string id = 8 [(.google.api.field_behavior) = IMMUTABLE, (.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The id.

### getIdBytes()

```
public abstract ByteString getIdBytes()
```

Output only. Immutable. MerchantCenterAccountLink identifier, which is the final component of name. This field is auto generated and follows the convention: `BranchId_MerchantCenterAccountId`. `projects/*/locations/global/catalogs/default_catalog/merchantCenterAccountLinks/id_1`.

`string id = 8 [(.google.api.field_behavior) = IMMUTABLE, (.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for id.

### getLanguageCode()

```
public abstract String getLanguageCode()
```

Language of the title/description and other string attributes. Use language tags defined by [BCP 47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). ISO 639-1.

This specifies the language of offers in Merchant Center that will be accepted. If empty, no language filtering will be performed.

Example value: `en`.

`string language_code = 5;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The languageCode.

### getLanguageCodeBytes()

```
public abstract ByteString getLanguageCodeBytes()
```

Language of the title/description and other string attributes. Use language tags defined by [BCP 47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). ISO 639-1.

This specifies the language of offers in Merchant Center that will be accepted. If empty, no language filtering will be performed.

Example value: `en`.

`string language_code = 5;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for languageCode.

### getMerchantCenterAccountId()

```
public abstract long getMerchantCenterAccountId()
```

Required. The linked [Merchant center account id](https://developers.google.com/shopping-content/guides/accountstatuses). The account must be a standalone account or a sub-account of a MCA.

`int64 merchant_center_account_id = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The merchantCenterAccountId.

### getName()

```
public abstract String getName()
```

Output only. Immutable. Full resource name of the Merchant Center Account Link, such as `projects/*/locations/global/catalogs/default_catalog/merchantCenterAccountLinks/merchant_center_account_link`.

`string name = 1 [(.google.api.field_behavior) = IMMUTABLE, (.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The name.

### getNameBytes()

```
public abstract ByteString getNameBytes()
```

Output only. Immutable. Full resource name of the Merchant Center Account Link, such as `projects/*/locations/global/catalogs/default_catalog/merchantCenterAccountLinks/merchant_center_account_link`.

`string name = 1 [(.google.api.field_behavior) = IMMUTABLE, (.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for name.

### getProjectId()

```
public abstract String getProjectId()
```

Output only. GCP project ID.

`string project_id = 9 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The projectId.

### getProjectIdBytes()

```
public abstract ByteString getProjectIdBytes()
```

Output only. GCP project ID.

`string project_id = 9 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for projectId.

### getState()

```
public abstract MerchantCenterAccountLink.State getState()
```

Output only. Represents the state of the link.

`.google.cloud.retail.v2alpha.MerchantCenterAccountLink.State state = 7 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[MerchantCenterAccountLink.State](/java/docs/reference/google-cloud-retail/2.43.0/com.google.cloud.retail.v2alpha.MerchantCenterAccountLink.State)`

The state.

### getStateValue()

```
public abstract int getStateValue()
```

Output only. Represents the state of the link.

`.google.cloud.retail.v2alpha.MerchantCenterAccountLink.State state = 7 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for state.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.

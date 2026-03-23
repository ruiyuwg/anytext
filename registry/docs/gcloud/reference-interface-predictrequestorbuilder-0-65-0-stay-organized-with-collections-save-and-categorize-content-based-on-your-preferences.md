-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface PredictRequestOrBuilder (0.65.0) Stay organized with collections Save and categorize content based on your preferences.

0.94.0 (latest) 0.92.0 0.90.0 0.89.0 0.87.0 0.85.0 0.83.0 0.82.0 0.81.0 0.80.0 0.79.0 0.77.0 0.75.0 0.74.0 0.71.0 0.70.0 0.69.0 0.67.0 0.66.0 0.65.0 0.64.0 0.63.0 0.62.0 0.61.0 0.60.0 0.59.0 0.58.0 0.56.0 0.55.0 0.54.0 0.53.0 0.52.0 0.51.0 0.50.0 0.49.0 0.48.0 0.47.0 0.46.0 0.44.0 0.43.0 0.42.0 0.41.0 0.40.0 0.39.0 0.38.0 0.37.0 0.36.0 0.35.0 0.34.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.4 0.8.10

```
public interface PredictRequestOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### containsLabels(String key)

```
public abstract boolean containsLabels(String key)
```

Optional. The labels for the predict request.

-   Label keys can contain lowercase letters, digits and hyphens, must start with a letter, and must end with a letter or digit.
-   Non-zero label values can contain lowercase letters, digits and hyphens, must start with a letter, and must end with a letter or digit.
-   No more than 64 labels can be associated with a given request.
    
    See [https://goo.gl/xmQnxf](https://goo.gl/xmQnxf) for more information on and examples of labels.
    

`map<string, string> labels = 9 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### containsParams(String key)

```
public abstract boolean containsParams(String key)
```

Optional. Additional domain specific parameters for the predictions.

Allowed values:

-   `returnCatalogItem`: Boolean. If set to true, the associated catalogItem object will be returned in the `PredictResponse.PredictionResult.itemMetadata` object in the method response.
-   `returnItemScore`: Boolean. If set to true, the prediction 'score' corresponding to each returned item will be set in the `metadata` field in the prediction response. The given 'score' indicates the probability of an item being clicked/purchased given the user's context and history.

`map<string, .google.protobuf.Value> params = 6 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getDryRun()

```
public abstract boolean getDryRun()
```

Optional. Use dryRun mode for this prediction query. If set to true, a dummy model will be used that returns arbitrary catalog items. Note that the dryRun mode should only be used for testing the API, or if the model is not ready.

`bool dry_run = 4 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The dryRun.

### getFilter()

```
public abstract String getFilter()
```

Optional. Filter for restricting prediction results. Accepts values for tags and the `filterOutOfStockItems` flag.

-   Tag expressions. Restricts predictions to items that match all of the specified tags. Boolean operators `OR` and `NOT` are supported if the expression is enclosed in parentheses, and must be separated from the tag values by a space. `-"tagA"` is also supported and is equivalent to `NOT "tagA"`. Tag values must be double quoted UTF-8 encoded strings with a size limit of 1 KiB.
    
-   filterOutOfStockItems. Restricts predictions to items that do not have a stockState value of OUT\_OF\_STOCK.
    
    Examples:
    
-   tag=("Red" OR "Blue") tag="New-Arrival" tag=(NOT "promotional")
    
-   filterOutOfStockItems tag=(-"promotional")
-   filterOutOfStockItems

`string filter = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The filter.

### getFilterBytes()

```
public abstract ByteString getFilterBytes()
```

Optional. Filter for restricting prediction results. Accepts values for tags and the `filterOutOfStockItems` flag.

-   Tag expressions. Restricts predictions to items that match all of the specified tags. Boolean operators `OR` and `NOT` are supported if the expression is enclosed in parentheses, and must be separated from the tag values by a space. `-"tagA"` is also supported and is equivalent to `NOT "tagA"`. Tag values must be double quoted UTF-8 encoded strings with a size limit of 1 KiB.
    
-   filterOutOfStockItems. Restricts predictions to items that do not have a stockState value of OUT\_OF\_STOCK.
    
    Examples:
    
-   tag=("Red" OR "Blue") tag="New-Arrival" tag=(NOT "promotional")
    
-   filterOutOfStockItems tag=(-"promotional")
-   filterOutOfStockItems

`string filter = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for filter.

### getLabels() (deprecated)

```
public abstract Map<String,String> getLabels()
```

Use [#getLabelsMap()](/java/docs/reference/google-cloud-recommendations-ai/0.65.0/com.google.cloud.recommendationengine.v1beta1.PredictRequestOrBuilder#com_google_cloud_recommendationengine_v1beta1_PredictRequestOrBuilder_getLabelsMap__) instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getLabelsCount()

```
public abstract int getLabelsCount()
```

Optional. The labels for the predict request.

-   Label keys can contain lowercase letters, digits and hyphens, must start with a letter, and must end with a letter or digit.
-   Non-zero label values can contain lowercase letters, digits and hyphens, must start with a letter, and must end with a letter or digit.
-   No more than 64 labels can be associated with a given request.
    
    See [https://goo.gl/xmQnxf](https://goo.gl/xmQnxf) for more information on and examples of labels.
    

`map<string, string> labels = 9 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getLabelsMap()

```
public abstract Map<String,String> getLabelsMap()
```

Optional. The labels for the predict request.

-   Label keys can contain lowercase letters, digits and hyphens, must start with a letter, and must end with a letter or digit.
-   Non-zero label values can contain lowercase letters, digits and hyphens, must start with a letter, and must end with a letter or digit.
-   No more than 64 labels can be associated with a given request.
    
    See [https://goo.gl/xmQnxf](https://goo.gl/xmQnxf) for more information on and examples of labels.
    

`map<string, string> labels = 9 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getLabelsOrDefault(String key, String defaultValue)

```
public abstract String getLabelsOrDefault(String key, String defaultValue)
```

Optional. The labels for the predict request.

-   Label keys can contain lowercase letters, digits and hyphens, must start with a letter, and must end with a letter or digit.
-   Non-zero label values can contain lowercase letters, digits and hyphens, must start with a letter, and must end with a letter or digit.
-   No more than 64 labels can be associated with a given request.
    
    See [https://goo.gl/xmQnxf](https://goo.gl/xmQnxf) for more information on and examples of labels.
    

`map<string, string> labels = 9 [(.google.api.field_behavior) = OPTIONAL];`

**Parameters**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`defaultValue`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### getLabelsOrThrow(String key)

```
public abstract String getLabelsOrThrow(String key)
```

Optional. The labels for the predict request.

-   Label keys can contain lowercase letters, digits and hyphens, must start with a letter, and must end with a letter or digit.
-   Non-zero label values can contain lowercase letters, digits and hyphens, must start with a letter, and must end with a letter or digit.
-   No more than 64 labels can be associated with a given request.
    
    See [https://goo.gl/xmQnxf](https://goo.gl/xmQnxf) for more information on and examples of labels.
    

`map<string, string> labels = 9 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### getName()

```
public abstract String getName()
```

Required. Full resource name of the format: `{name=projects/*/locations/global/catalogs/default_catalog/eventStores/default_event_store/placements/*}` The id of the recommendation engine placement. This id is used to identify the set of models that will be used to make the prediction.

We currently support three placements with the following IDs by default:

-   `shopping_cart`: Predicts items frequently bought together with one or more catalog items in the same shopping session. Commonly displayed after `add-to-cart` events, on product detail pages, or on the shopping cart page.
    
-   `home_page`: Predicts the next product that a user will most likely engage with or purchase based on the shopping or viewing history of the specified `userId` or `visitorId`. For example - Recommendations for you.
    
-   `product_detail`: Predicts the next product that a user will most likely engage with or purchase. The prediction is based on the shopping or viewing history of the specified `userId` or `visitorId` and its relevance to a specified `CatalogItem`. Typically used on product detail pages. For example - More items like this.
    
-   `recently_viewed_default`: Returns up to 75 items recently viewed by the specified `userId` or `visitorId`, most recent ones first. Returns nothing if neither of them has viewed any items yet. For example - Recently viewed.
    
    The full list of available placements can be seen at [https://console.cloud.google.com/recommendation/datafeeds/default\_catalog/dashboard](https://console.cloud.google.com/recommendation/datafeeds/default_catalog/dashboard)
    

`string name = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The name.

### getNameBytes()

```
public abstract ByteString getNameBytes()
```

Required. Full resource name of the format: `{name=projects/*/locations/global/catalogs/default_catalog/eventStores/default_event_store/placements/*}` The id of the recommendation engine placement. This id is used to identify the set of models that will be used to make the prediction.

We currently support three placements with the following IDs by default:

-   `shopping_cart`: Predicts items frequently bought together with one or more catalog items in the same shopping session. Commonly displayed after `add-to-cart` events, on product detail pages, or on the shopping cart page.
    
-   `home_page`: Predicts the next product that a user will most likely engage with or purchase based on the shopping or viewing history of the specified `userId` or `visitorId`. For example - Recommendations for you.
    
-   `product_detail`: Predicts the next product that a user will most likely engage with or purchase. The prediction is based on the shopping or viewing history of the specified `userId` or `visitorId` and its relevance to a specified `CatalogItem`. Typically used on product detail pages. For example - More items like this.
    
-   `recently_viewed_default`: Returns up to 75 items recently viewed by the specified `userId` or `visitorId`, most recent ones first. Returns nothing if neither of them has viewed any items yet. For example - Recently viewed.
    
    The full list of available placements can be seen at [https://console.cloud.google.com/recommendation/datafeeds/default\_catalog/dashboard](https://console.cloud.google.com/recommendation/datafeeds/default_catalog/dashboard)
    

`string name = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for name.

### getPageSize()

```
public abstract int getPageSize()
```

Optional. Maximum number of results to return per page. Set this property to the number of prediction results required. If zero, the service will choose a reasonable default.

`int32 page_size = 7 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The pageSize.

### getPageToken()

```
public abstract String getPageToken()
```

Optional. The previous PredictResponse.next\_page\_token.

`string page_token = 8 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The pageToken.

### getPageTokenBytes()

```
public abstract ByteString getPageTokenBytes()
```

Optional. The previous PredictResponse.next\_page\_token.

`string page_token = 8 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for pageToken.

### getParams() (deprecated)

```
public abstract Map<String,Value> getParams()
```

Use [#getParamsMap()](/java/docs/reference/google-cloud-recommendations-ai/0.65.0/com.google.cloud.recommendationengine.v1beta1.PredictRequestOrBuilder#com_google_cloud_recommendationengine_v1beta1_PredictRequestOrBuilder_getParamsMap__) instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[Value](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Value.html)>`

### getParamsCount()

```
public abstract int getParamsCount()
```

Optional. Additional domain specific parameters for the predictions.

Allowed values:

-   `returnCatalogItem`: Boolean. If set to true, the associated catalogItem object will be returned in the `PredictResponse.PredictionResult.itemMetadata` object in the method response.
-   `returnItemScore`: Boolean. If set to true, the prediction 'score' corresponding to each returned item will be set in the `metadata` field in the prediction response. The given 'score' indicates the probability of an item being clicked/purchased given the user's context and history.

`map<string, .google.protobuf.Value> params = 6 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getParamsMap()

```
public abstract Map<String,Value> getParamsMap()
```

Optional. Additional domain specific parameters for the predictions.

Allowed values:

-   `returnCatalogItem`: Boolean. If set to true, the associated catalogItem object will be returned in the `PredictResponse.PredictionResult.itemMetadata` object in the method response.
-   `returnItemScore`: Boolean. If set to true, the prediction 'score' corresponding to each returned item will be set in the `metadata` field in the prediction response. The given 'score' indicates the probability of an item being clicked/purchased given the user's context and history.

`map<string, .google.protobuf.Value> params = 6 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[Value](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Value.html)>`

### getParamsOrDefault(String key, Value defaultValue)

```
public abstract Value getParamsOrDefault(String key, Value defaultValue)
```

Optional. Additional domain specific parameters for the predictions.

Allowed values:

-   `returnCatalogItem`: Boolean. If set to true, the associated catalogItem object will be returned in the `PredictResponse.PredictionResult.itemMetadata` object in the method response.
-   `returnItemScore`: Boolean. If set to true, the prediction 'score' corresponding to each returned item will be set in the `metadata` field in the prediction response. The given 'score' indicates the probability of an item being clicked/purchased given the user's context and history.

`map<string, .google.protobuf.Value> params = 6 [(.google.api.field_behavior) = OPTIONAL];`

**Parameters**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`defaultValue`

`[Value](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Value.html)`  

**Returns**

**Type**

**Description**

`[Value](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Value.html)`

### getParamsOrThrow(String key)

```
public abstract Value getParamsOrThrow(String key)
```

Optional. Additional domain specific parameters for the predictions.

Allowed values:

-   `returnCatalogItem`: Boolean. If set to true, the associated catalogItem object will be returned in the `PredictResponse.PredictionResult.itemMetadata` object in the method response.
-   `returnItemScore`: Boolean. If set to true, the prediction 'score' corresponding to each returned item will be set in the `metadata` field in the prediction response. The given 'score' indicates the probability of an item being clicked/purchased given the user's context and history.

`map<string, .google.protobuf.Value> params = 6 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[Value](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Value.html)`

### getUserEvent()

```
public abstract UserEvent getUserEvent()
```

Required. Context about the user, what they are looking at and what action they took to trigger the predict request. Note that this user event detail won't be ingested to userEvent logs. Thus, a separate userEvent write request is required for event logging.

`.google.cloud.recommendationengine.v1beta1.UserEvent user_event = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[UserEvent](/java/docs/reference/google-cloud-recommendations-ai/0.65.0/com.google.cloud.recommendationengine.v1beta1.UserEvent)`

The userEvent.

### getUserEventOrBuilder()

```
public abstract UserEventOrBuilder getUserEventOrBuilder()
```

Required. Context about the user, what they are looking at and what action they took to trigger the predict request. Note that this user event detail won't be ingested to userEvent logs. Thus, a separate userEvent write request is required for event logging.

`.google.cloud.recommendationengine.v1beta1.UserEvent user_event = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[UserEventOrBuilder](/java/docs/reference/google-cloud-recommendations-ai/0.65.0/com.google.cloud.recommendationengine.v1beta1.UserEventOrBuilder)`

### hasUserEvent()

```
public abstract boolean hasUserEvent()
```

Required. Context about the user, what they are looking at and what action they took to trigger the predict request. Note that this user event detail won't be ingested to userEvent logs. Thus, a separate userEvent write request is required for event logging.

`.google.cloud.recommendationengine.v1beta1.UserEvent user_event = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the userEvent field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.

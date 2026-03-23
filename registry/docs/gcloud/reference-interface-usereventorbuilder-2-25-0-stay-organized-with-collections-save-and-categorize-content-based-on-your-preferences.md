-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface UserEventOrBuilder (2.25.0) Stay organized with collections Save and categorize content based on your preferences.

2.89.0 (latest) 2.87.0 2.85.0 2.84.0 2.82.0 2.80.0 2.78.0 2.77.0 2.76.0 2.75.0 2.74.0 2.72.0 2.70.0 2.69.0 2.66.0 2.65.0 2.64.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.1 2.4.0 2.3.0 2.2.3 2.1.0 2.0.19

```
public interface UserEventOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### containsAttributes(String key)

```
public abstract boolean containsAttributes(String key)
```

Extra user event features to include in the recommendation model.

If you provide custom attributes for ingested user events, also include them in the user events that you associate with prediction requests. Custom attribute formatting must be consistent between imported events and events provided with prediction requests. This lets the Retail API use those custom attributes when training models and serving predictions, which helps improve recommendation quality.

This field needs to pass all below criteria, otherwise an INVALID\_ARGUMENT error is returned:

-   The key must be a UTF-8 encoded string with a length limit of 5,000 characters.
-   For text attributes, at most 400 values are allowed. Empty values are not allowed. Each value must be a UTF-8 encoded string with a length limit of 256 characters.
-   For number attributes, at most 400 values are allowed.
    
    For product recommendations, an example of extra user information is traffic\_channel, which is how a user arrives at the site. Users can arrive at the site by coming to the site directly, coming through Google search, or in other ways.
    

`map<string, .google.cloud.retail.v2alpha.CustomAttribute> attributes = 7;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getAttributes()

```
public abstract Map<String,CustomAttribute> getAttributes()
```

Use [#getAttributesMap()](/java/docs/reference/google-cloud-retail/2.25.0/com.google.cloud.retail.v2alpha.UserEventOrBuilder#com_google_cloud_retail_v2alpha_UserEventOrBuilder_getAttributesMap__) instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[CustomAttribute](/java/docs/reference/google-cloud-retail/2.25.0/com.google.cloud.retail.v2alpha.CustomAttribute)>`

### getAttributesCount()

```
public abstract int getAttributesCount()
```

Extra user event features to include in the recommendation model.

If you provide custom attributes for ingested user events, also include them in the user events that you associate with prediction requests. Custom attribute formatting must be consistent between imported events and events provided with prediction requests. This lets the Retail API use those custom attributes when training models and serving predictions, which helps improve recommendation quality.

This field needs to pass all below criteria, otherwise an INVALID\_ARGUMENT error is returned:

-   The key must be a UTF-8 encoded string with a length limit of 5,000 characters.
-   For text attributes, at most 400 values are allowed. Empty values are not allowed. Each value must be a UTF-8 encoded string with a length limit of 256 characters.
-   For number attributes, at most 400 values are allowed.
    
    For product recommendations, an example of extra user information is traffic\_channel, which is how a user arrives at the site. Users can arrive at the site by coming to the site directly, coming through Google search, or in other ways.
    

`map<string, .google.cloud.retail.v2alpha.CustomAttribute> attributes = 7;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getAttributesMap()

```
public abstract Map<String,CustomAttribute> getAttributesMap()
```

Extra user event features to include in the recommendation model.

If you provide custom attributes for ingested user events, also include them in the user events that you associate with prediction requests. Custom attribute formatting must be consistent between imported events and events provided with prediction requests. This lets the Retail API use those custom attributes when training models and serving predictions, which helps improve recommendation quality.

This field needs to pass all below criteria, otherwise an INVALID\_ARGUMENT error is returned:

-   The key must be a UTF-8 encoded string with a length limit of 5,000 characters.
-   For text attributes, at most 400 values are allowed. Empty values are not allowed. Each value must be a UTF-8 encoded string with a length limit of 256 characters.
-   For number attributes, at most 400 values are allowed.
    
    For product recommendations, an example of extra user information is traffic\_channel, which is how a user arrives at the site. Users can arrive at the site by coming to the site directly, coming through Google search, or in other ways.
    

`map<string, .google.cloud.retail.v2alpha.CustomAttribute> attributes = 7;`

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[CustomAttribute](/java/docs/reference/google-cloud-retail/2.25.0/com.google.cloud.retail.v2alpha.CustomAttribute)>`

### getAttributesOrDefault(String key, CustomAttribute defaultValue)

```
public abstract CustomAttribute getAttributesOrDefault(String key, CustomAttribute defaultValue)
```

Extra user event features to include in the recommendation model.

If you provide custom attributes for ingested user events, also include them in the user events that you associate with prediction requests. Custom attribute formatting must be consistent between imported events and events provided with prediction requests. This lets the Retail API use those custom attributes when training models and serving predictions, which helps improve recommendation quality.

This field needs to pass all below criteria, otherwise an INVALID\_ARGUMENT error is returned:

-   The key must be a UTF-8 encoded string with a length limit of 5,000 characters.
-   For text attributes, at most 400 values are allowed. Empty values are not allowed. Each value must be a UTF-8 encoded string with a length limit of 256 characters.
-   For number attributes, at most 400 values are allowed.
    
    For product recommendations, an example of extra user information is traffic\_channel, which is how a user arrives at the site. Users can arrive at the site by coming to the site directly, coming through Google search, or in other ways.
    

`map<string, .google.cloud.retail.v2alpha.CustomAttribute> attributes = 7;`

**Parameters**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`defaultValue`

`[CustomAttribute](/java/docs/reference/google-cloud-retail/2.25.0/com.google.cloud.retail.v2alpha.CustomAttribute)`  

**Returns**

**Type**

**Description**

`[CustomAttribute](/java/docs/reference/google-cloud-retail/2.25.0/com.google.cloud.retail.v2alpha.CustomAttribute)`

### getAttributesOrThrow(String key)

```
public abstract CustomAttribute getAttributesOrThrow(String key)
```

Extra user event features to include in the recommendation model.

If you provide custom attributes for ingested user events, also include them in the user events that you associate with prediction requests. Custom attribute formatting must be consistent between imported events and events provided with prediction requests. This lets the Retail API use those custom attributes when training models and serving predictions, which helps improve recommendation quality.

This field needs to pass all below criteria, otherwise an INVALID\_ARGUMENT error is returned:

-   The key must be a UTF-8 encoded string with a length limit of 5,000 characters.
-   For text attributes, at most 400 values are allowed. Empty values are not allowed. Each value must be a UTF-8 encoded string with a length limit of 256 characters.
-   For number attributes, at most 400 values are allowed.
    
    For product recommendations, an example of extra user information is traffic\_channel, which is how a user arrives at the site. Users can arrive at the site by coming to the site directly, coming through Google search, or in other ways.
    

`map<string, .google.cloud.retail.v2alpha.CustomAttribute> attributes = 7;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[CustomAttribute](/java/docs/reference/google-cloud-retail/2.25.0/com.google.cloud.retail.v2alpha.CustomAttribute)`

### getAttributionToken()

```
public abstract String getAttributionToken()
```

Highly recommended for user events that are the result of PredictionService.Predict. This field enables accurate attribution of recommendation model performance.

The value must be a valid PredictResponse.attribution\_token for user events that are the result of PredictionService.Predict. The value must be a valid SearchResponse.attribution\_token for user events that are the result of SearchService.Search.

This token enables us to accurately attribute page view or purchase back to the event and the particular predict response containing this clicked/purchased product. If user clicks on product K in the recommendation results, pass PredictResponse.attribution\_token as a URL parameter to product K's page. When recording events on product K's page, log the PredictResponse.attribution\_token to this field.

`string attribution_token = 5;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The attributionToken.

### getAttributionTokenBytes()

```
public abstract ByteString getAttributionTokenBytes()
```

Highly recommended for user events that are the result of PredictionService.Predict. This field enables accurate attribution of recommendation model performance.

The value must be a valid PredictResponse.attribution\_token for user events that are the result of PredictionService.Predict. The value must be a valid SearchResponse.attribution\_token for user events that are the result of SearchService.Search.

This token enables us to accurately attribute page view or purchase back to the event and the particular predict response containing this clicked/purchased product. If user clicks on product K in the recommendation results, pass PredictResponse.attribution\_token as a URL parameter to product K's page. When recording events on product K's page, log the PredictResponse.attribution\_token to this field.

`string attribution_token = 5;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for attributionToken.

### getCartId()

```
public abstract String getCartId()
```

The ID or name of the associated shopping cart. This ID is used to associate multiple items added or present in the cart before purchase.

This can only be set for `add-to-cart`, `purchase-complete`, or `shopping-cart-page-view` events.

`string cart_id = 8;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The cartId.

### getCartIdBytes()

```
public abstract ByteString getCartIdBytes()
```

The ID or name of the associated shopping cart. This ID is used to associate multiple items added or present in the cart before purchase.

This can only be set for `add-to-cart`, `purchase-complete`, or `shopping-cart-page-view` events.

`string cart_id = 8;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for cartId.

### getCompletionDetail()

```
public abstract CompletionDetail getCompletionDetail()
```

The main auto-completion details related to the event.

This field should be set for `search` event when autocomplete function is enabled and the user clicks a suggestion for search.

`.google.cloud.retail.v2alpha.CompletionDetail completion_detail = 22;`

**Returns**

**Type**

**Description**

`[CompletionDetail](/java/docs/reference/google-cloud-retail/2.25.0/com.google.cloud.retail.v2alpha.CompletionDetail)`

The completionDetail.

### getCompletionDetailOrBuilder()

```
public abstract CompletionDetailOrBuilder getCompletionDetailOrBuilder()
```

The main auto-completion details related to the event.

This field should be set for `search` event when autocomplete function is enabled and the user clicks a suggestion for search.

`.google.cloud.retail.v2alpha.CompletionDetail completion_detail = 22;`

**Returns**

**Type**

**Description**

`[CompletionDetailOrBuilder](/java/docs/reference/google-cloud-retail/2.25.0/com.google.cloud.retail.v2alpha.CompletionDetailOrBuilder)`

### getEntity()

```
public abstract String getEntity()
```

The entity for customers that may run multiple different entities, domains, sites or regions, for example, `Google US`, `Google Ads`, `Waymo`, `google.com`, `youtube.com`, etc. It is recommended to set this field to get better per-entity search, completion and prediction results.

`string entity = 23;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The entity.

### getEntityBytes()

```
public abstract ByteString getEntityBytes()
```

The entity for customers that may run multiple different entities, domains, sites or regions, for example, `Google US`, `Google Ads`, `Waymo`, `google.com`, `youtube.com`, etc. It is recommended to set this field to get better per-entity search, completion and prediction results.

`string entity = 23;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for entity.

### getEventTime()

```
public abstract Timestamp getEventTime()
```

Only required for UserEventService.ImportUserEvents method. Timestamp of when the user event happened.

`.google.protobuf.Timestamp event_time = 3;`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The eventTime.

### getEventTimeOrBuilder()

```
public abstract TimestampOrBuilder getEventTimeOrBuilder()
```

Only required for UserEventService.ImportUserEvents method. Timestamp of when the user event happened.

`.google.protobuf.Timestamp event_time = 3;`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getEventType()

```
public abstract String getEventType()
```

Required. User event type. Allowed values are:

-   `add-to-cart`: Products being added to cart.
-   `category-page-view`: Special pages such as sale or promotion pages viewed.
-   `detail-page-view`: Products detail page viewed.
-   `home-page-view`: Homepage viewed.
-   `promotion-offered`: Promotion is offered to a user.
-   `promotion-not-offered`: Promotion is not offered to a user.
-   `purchase-complete`: User finishing a purchase.
-   `search`: Product search.
-   `shopping-cart-page-view`: User viewing a shopping cart.

`string event_type = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The eventType.

### getEventTypeBytes()

```
public abstract ByteString getEventTypeBytes()
```

Required. User event type. Allowed values are:

-   `add-to-cart`: Products being added to cart.
-   `category-page-view`: Special pages such as sale or promotion pages viewed.
-   `detail-page-view`: Products detail page viewed.
-   `home-page-view`: Homepage viewed.
-   `promotion-offered`: Promotion is offered to a user.
-   `promotion-not-offered`: Promotion is not offered to a user.
-   `purchase-complete`: User finishing a purchase.
-   `search`: Product search.
-   `shopping-cart-page-view`: User viewing a shopping cart.

`string event_type = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for eventType.

### getExperimentIds(int index)

```
public abstract String getExperimentIds(int index)
```

A list of identifiers for the independent experiment groups this user event belongs to. This is used to distinguish between user events associated with different experiment setups (e.g. using Retail API, using different recommendation models).

`repeated string experiment_ids = 4;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the element to return.

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The experimentIds at the given index.

### getExperimentIdsBytes(int index)

```
public abstract ByteString getExperimentIdsBytes(int index)
```

A list of identifiers for the independent experiment groups this user event belongs to. This is used to distinguish between user events associated with different experiment setups (e.g. using Retail API, using different recommendation models).

`repeated string experiment_ids = 4;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the value to return.

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes of the experimentIds at the given index.

### getExperimentIdsCount()

```
public abstract int getExperimentIdsCount()
```

A list of identifiers for the independent experiment groups this user event belongs to. This is used to distinguish between user events associated with different experiment setups (e.g. using Retail API, using different recommendation models).

`repeated string experiment_ids = 4;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of experimentIds.

### getExperimentIdsList()

```
public abstract List<String> getExperimentIdsList()
```

A list of identifiers for the independent experiment groups this user event belongs to. This is used to distinguish between user events associated with different experiment setups (e.g. using Retail API, using different recommendation models).

`repeated string experiment_ids = 4;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

A list containing the experimentIds.

### getFilter()

```
public abstract String getFilter()
```

The filter syntax consists of an expression language for constructing a predicate from one or more fields of the products being filtered.

See SearchRequest.filter for definition and syntax.

The value must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an INVALID\_ARGUMENT error is returned.

`string filter = 16;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The filter.

### getFilterBytes()

```
public abstract ByteString getFilterBytes()
```

The filter syntax consists of an expression language for constructing a predicate from one or more fields of the products being filtered.

See SearchRequest.filter for definition and syntax.

The value must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an INVALID\_ARGUMENT error is returned.

`string filter = 16;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for filter.

### getOffset()

```
public abstract int getOffset()
```

An integer that specifies the current offset for pagination (the 0-indexed starting location, amongst the products deemed by the API as relevant).

See SearchRequest.offset for definition.

If this field is negative, an INVALID\_ARGUMENT is returned.

This can only be set for `search` events. Other event types should not set this field. Otherwise, an INVALID\_ARGUMENT error is returned.

`int32 offset = 18;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The offset.

### getOrderBy()

```
public abstract String getOrderBy()
```

The order in which products are returned.

See SearchRequest.order\_by for definition and syntax.

The value must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an INVALID\_ARGUMENT error is returned.

This can only be set for `search` events. Other event types should not set this field. Otherwise, an INVALID\_ARGUMENT error is returned.

`string order_by = 17;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The orderBy.

### getOrderByBytes()

```
public abstract ByteString getOrderByBytes()
```

The order in which products are returned.

See SearchRequest.order\_by for definition and syntax.

The value must be a UTF-8 encoded string with a length limit of 1,000 characters. Otherwise, an INVALID\_ARGUMENT error is returned.

This can only be set for `search` events. Other event types should not set this field. Otherwise, an INVALID\_ARGUMENT error is returned.

`string order_by = 17;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for orderBy.

### getPageCategories(int index)

```
public abstract String getPageCategories(int index)
```

The categories associated with a category page.

To represent full path of category, use '>' sign to separate different hierarchies. If '>' is part of the category name, replace it with other character(s).

Category pages include special pages such as sales or promotions. For instance, a special sale page may have the category hierarchy: "pageCategories" : \["Sales > 2017 Black Friday Deals"\].

Required for `category-page-view` events. At least one of search\_query or page\_categories is required for `search` events. Other event types should not set this field. Otherwise, an INVALID\_ARGUMENT error is returned.

`repeated string page_categories = 11;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the element to return.

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The pageCategories at the given index.

### getPageCategoriesBytes(int index)

```
public abstract ByteString getPageCategoriesBytes(int index)
```

The categories associated with a category page.

To represent full path of category, use '>' sign to separate different hierarchies. If '>' is part of the category name, replace it with other character(s).

Category pages include special pages such as sales or promotions. For instance, a special sale page may have the category hierarchy: "pageCategories" : \["Sales > 2017 Black Friday Deals"\].

Required for `category-page-view` events. At least one of search\_query or page\_categories is required for `search` events. Other event types should not set this field. Otherwise, an INVALID\_ARGUMENT error is returned.

`repeated string page_categories = 11;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the value to return.

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes of the pageCategories at the given index.

### getPageCategoriesCount()

```
public abstract int getPageCategoriesCount()
```

The categories associated with a category page.

To represent full path of category, use '>' sign to separate different hierarchies. If '>' is part of the category name, replace it with other character(s).

Category pages include special pages such as sales or promotions. For instance, a special sale page may have the category hierarchy: "pageCategories" : \["Sales > 2017 Black Friday Deals"\].

Required for `category-page-view` events. At least one of search\_query or page\_categories is required for `search` events. Other event types should not set this field. Otherwise, an INVALID\_ARGUMENT error is returned.

`repeated string page_categories = 11;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of pageCategories.

### getPageCategoriesList()

```
public abstract List<String> getPageCategoriesList()
```

The categories associated with a category page.

To represent full path of category, use '>' sign to separate different hierarchies. If '>' is part of the category name, replace it with other character(s).

Category pages include special pages such as sales or promotions. For instance, a special sale page may have the category hierarchy: "pageCategories" : \["Sales > 2017 Black Friday Deals"\].

Required for `category-page-view` events. At least one of search\_query or page\_categories is required for `search` events. Other event types should not set this field. Otherwise, an INVALID\_ARGUMENT error is returned.

`repeated string page_categories = 11;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

A list containing the pageCategories.

### getPageViewId()

```
public abstract String getPageViewId()
```

A unique ID of a web page view.

This should be kept the same for all user events triggered from the same pageview. For example, an item detail page view could trigger multiple events as the user is browsing the page. The `pageViewId` property should be kept the same for all these events so that they can be grouped together properly.

When using the client side event reporting with JavaScript pixel and Google Tag Manager, this value is filled in automatically.

`string page_view_id = 15;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The pageViewId.

### getPageViewIdBytes()

```
public abstract ByteString getPageViewIdBytes()
```

A unique ID of a web page view.

This should be kept the same for all user events triggered from the same pageview. For example, an item detail page view could trigger multiple events as the user is browsing the page. The `pageViewId` property should be kept the same for all these events so that they can be grouped together properly.

When using the client side event reporting with JavaScript pixel and Google Tag Manager, this value is filled in automatically.

`string page_view_id = 15;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for pageViewId.

### getProductDetails(int index)

```
public abstract ProductDetail getProductDetails(int index)
```

The main product details related to the event.

This field is optional except for the following event types:

-   `add-to-cart`
-   `detail-page-view`
-   `purchase-complete`
    
    In a `search` event, this field represents the products returned to the end user on the current page (the end user may have not finished browsing the whole page yet). When a new page is returned to the end user, after pagination/filtering/ordering even for the same query, a new `search` event with different product\_details is desired. The end user may have not finished browsing the whole page yet.
    

`repeated .google.cloud.retail.v2alpha.ProductDetail product_details = 6;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[ProductDetail](/java/docs/reference/google-cloud-retail/2.25.0/com.google.cloud.retail.v2alpha.ProductDetail)`

### getProductDetailsCount()

```
public abstract int getProductDetailsCount()
```

The main product details related to the event.

This field is optional except for the following event types:

-   `add-to-cart`
-   `detail-page-view`
-   `purchase-complete`
    
    In a `search` event, this field represents the products returned to the end user on the current page (the end user may have not finished browsing the whole page yet). When a new page is returned to the end user, after pagination/filtering/ordering even for the same query, a new `search` event with different product\_details is desired. The end user may have not finished browsing the whole page yet.
    

`repeated .google.cloud.retail.v2alpha.ProductDetail product_details = 6;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getProductDetailsList()

```
public abstract List<ProductDetail> getProductDetailsList()
```

The main product details related to the event.

This field is optional except for the following event types:

-   `add-to-cart`
-   `detail-page-view`
-   `purchase-complete`
    
    In a `search` event, this field represents the products returned to the end user on the current page (the end user may have not finished browsing the whole page yet). When a new page is returned to the end user, after pagination/filtering/ordering even for the same query, a new `search` event with different product\_details is desired. The end user may have not finished browsing the whole page yet.
    

`repeated .google.cloud.retail.v2alpha.ProductDetail product_details = 6;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[ProductDetail](/java/docs/reference/google-cloud-retail/2.25.0/com.google.cloud.retail.v2alpha.ProductDetail)>`

### getProductDetailsOrBuilder(int index)

```
public abstract ProductDetailOrBuilder getProductDetailsOrBuilder(int index)
```

The main product details related to the event.

This field is optional except for the following event types:

-   `add-to-cart`
-   `detail-page-view`
-   `purchase-complete`
    
    In a `search` event, this field represents the products returned to the end user on the current page (the end user may have not finished browsing the whole page yet). When a new page is returned to the end user, after pagination/filtering/ordering even for the same query, a new `search` event with different product\_details is desired. The end user may have not finished browsing the whole page yet.
    

`repeated .google.cloud.retail.v2alpha.ProductDetail product_details = 6;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[ProductDetailOrBuilder](/java/docs/reference/google-cloud-retail/2.25.0/com.google.cloud.retail.v2alpha.ProductDetailOrBuilder)`

### getProductDetailsOrBuilderList()

```
public abstract List<? extends ProductDetailOrBuilder> getProductDetailsOrBuilderList()
```

The main product details related to the event.

This field is optional except for the following event types:

-   `add-to-cart`
-   `detail-page-view`
-   `purchase-complete`
    
    In a `search` event, this field represents the products returned to the end user on the current page (the end user may have not finished browsing the whole page yet). When a new page is returned to the end user, after pagination/filtering/ordering even for the same query, a new `search` event with different product\_details is desired. The end user may have not finished browsing the whole page yet.
    

`repeated .google.cloud.retail.v2alpha.ProductDetail product_details = 6;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.retail.v2alpha.ProductDetailOrBuilder>`

### getPurchaseTransaction()

```
public abstract PurchaseTransaction getPurchaseTransaction()
```

A transaction represents the entire purchase transaction.

Required for `purchase-complete` events. Other event types should not set this field. Otherwise, an INVALID\_ARGUMENT error is returned.

`.google.cloud.retail.v2alpha.PurchaseTransaction purchase_transaction = 9;`

**Returns**

**Type**

**Description**

`[PurchaseTransaction](/java/docs/reference/google-cloud-retail/2.25.0/com.google.cloud.retail.v2alpha.PurchaseTransaction)`

The purchaseTransaction.

### getPurchaseTransactionOrBuilder()

```
public abstract PurchaseTransactionOrBuilder getPurchaseTransactionOrBuilder()
```

A transaction represents the entire purchase transaction.

Required for `purchase-complete` events. Other event types should not set this field. Otherwise, an INVALID\_ARGUMENT error is returned.

`.google.cloud.retail.v2alpha.PurchaseTransaction purchase_transaction = 9;`

**Returns**

**Type**

**Description**

`[PurchaseTransactionOrBuilder](/java/docs/reference/google-cloud-retail/2.25.0/com.google.cloud.retail.v2alpha.PurchaseTransactionOrBuilder)`

### getReferrerUri()

```
public abstract String getReferrerUri()
```

The referrer URL of the current page.

When using the client side event reporting with JavaScript pixel and Google Tag Manager, this value is filled in automatically.

`string referrer_uri = 14;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The referrerUri.

### getReferrerUriBytes()

```
public abstract ByteString getReferrerUriBytes()
```

The referrer URL of the current page.

When using the client side event reporting with JavaScript pixel and Google Tag Manager, this value is filled in automatically.

`string referrer_uri = 14;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for referrerUri.

### getSearchQuery()

```
public abstract String getSearchQuery()
```

The user's search query.

See SearchRequest.query for definition.

The value must be a UTF-8 encoded string with a length limit of 5,000 characters. Otherwise, an INVALID\_ARGUMENT error is returned.

At least one of search\_query or page\_categories is required for `search` events. Other event types should not set this field. Otherwise, an INVALID\_ARGUMENT error is returned.

`string search_query = 10;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The searchQuery.

### getSearchQueryBytes()

```
public abstract ByteString getSearchQueryBytes()
```

The user's search query.

See SearchRequest.query for definition.

The value must be a UTF-8 encoded string with a length limit of 5,000 characters. Otherwise, an INVALID\_ARGUMENT error is returned.

At least one of search\_query or page\_categories is required for `search` events. Other event types should not set this field. Otherwise, an INVALID\_ARGUMENT error is returned.

`string search_query = 10;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for searchQuery.

### getSessionId()

```
public abstract String getSessionId()
```

A unique identifier for tracking a visitor session with a length limit of 128 bytes. A session is an aggregation of an end user behavior in a time span.

A general guideline to populate the sesion\_id:

1.  If user has no activity for 30 min, a new session\_id should be assigned.
2.  The session\_id should be unique across users, suggest use uuid or add visitor\_id as prefix.

`string session_id = 21;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The sessionId.

### getSessionIdBytes()

```
public abstract ByteString getSessionIdBytes()
```

A unique identifier for tracking a visitor session with a length limit of 128 bytes. A session is an aggregation of an end user behavior in a time span.

A general guideline to populate the sesion\_id:

1.  If user has no activity for 30 min, a new session\_id should be assigned.
2.  The session\_id should be unique across users, suggest use uuid or add visitor\_id as prefix.

`string session_id = 21;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for sessionId.

### getUri()

```
public abstract String getUri()
```

Complete URL (window.location.href) of the user's current page.

When using the client side event reporting with JavaScript pixel and Google Tag Manager, this value is filled in automatically. Maximum length 5,000 characters.

`string uri = 13;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The uri.

### getUriBytes()

```
public abstract ByteString getUriBytes()
```

Complete URL (window.location.href) of the user's current page.

When using the client side event reporting with JavaScript pixel and Google Tag Manager, this value is filled in automatically. Maximum length 5,000 characters.

`string uri = 13;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for uri.

### getUserInfo()

```
public abstract UserInfo getUserInfo()
```

User information.

`.google.cloud.retail.v2alpha.UserInfo user_info = 12;`

**Returns**

**Type**

**Description**

`[UserInfo](/java/docs/reference/google-cloud-retail/2.25.0/com.google.cloud.retail.v2alpha.UserInfo)`

The userInfo.

### getUserInfoOrBuilder()

```
public abstract UserInfoOrBuilder getUserInfoOrBuilder()
```

User information.

`.google.cloud.retail.v2alpha.UserInfo user_info = 12;`

**Returns**

**Type**

**Description**

`[UserInfoOrBuilder](/java/docs/reference/google-cloud-retail/2.25.0/com.google.cloud.retail.v2alpha.UserInfoOrBuilder)`

### getVisitorId()

```
public abstract String getVisitorId()
```

Required. A unique identifier for tracking visitors.

For example, this could be implemented with an HTTP cookie, which should be able to uniquely identify a visitor on a single device. This unique identifier should not change if the visitor log in/out of the website.

Don't set the field to the same fixed ID for different users. This mixes the event history of those users together, which results in degraded model quality.

The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID\_ARGUMENT error is returned.

The field should not contain PII or user-data. We recommend to use Google Analytics [Client ID](https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#clientId) for this field.

`string visitor_id = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The visitorId.

### getVisitorIdBytes()

```
public abstract ByteString getVisitorIdBytes()
```

Required. A unique identifier for tracking visitors.

For example, this could be implemented with an HTTP cookie, which should be able to uniquely identify a visitor on a single device. This unique identifier should not change if the visitor log in/out of the website.

Don't set the field to the same fixed ID for different users. This mixes the event history of those users together, which results in degraded model quality.

The field must be a UTF-8 encoded string with a length limit of 128 characters. Otherwise, an INVALID\_ARGUMENT error is returned.

The field should not contain PII or user-data. We recommend to use Google Analytics [Client ID](https://developers.google.com/analytics/devguides/collection/analyticsjs/field-reference#clientId) for this field.

`string visitor_id = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for visitorId.

### hasCompletionDetail()

```
public abstract boolean hasCompletionDetail()
```

The main auto-completion details related to the event.

This field should be set for `search` event when autocomplete function is enabled and the user clicks a suggestion for search.

`.google.cloud.retail.v2alpha.CompletionDetail completion_detail = 22;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the completionDetail field is set.

### hasEventTime()

```
public abstract boolean hasEventTime()
```

Only required for UserEventService.ImportUserEvents method. Timestamp of when the user event happened.

`.google.protobuf.Timestamp event_time = 3;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the eventTime field is set.

### hasPurchaseTransaction()

```
public abstract boolean hasPurchaseTransaction()
```

A transaction represents the entire purchase transaction.

Required for `purchase-complete` events. Other event types should not set this field. Otherwise, an INVALID\_ARGUMENT error is returned.

`.google.cloud.retail.v2alpha.PurchaseTransaction purchase_transaction = 9;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the purchaseTransaction field is set.

### hasUserInfo()

```
public abstract boolean hasUserInfo()
```

User information.

`.google.cloud.retail.v2alpha.UserInfo user_info = 12;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the userInfo field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.

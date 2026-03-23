-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface SearchRequest.FacetSpec.FacetKeyOrBuilder (2.32.0) Stay organized with collections Save and categorize content based on your preferences.

2.89.0 (latest) 2.87.0 2.85.0 2.84.0 2.82.0 2.80.0 2.78.0 2.77.0 2.76.0 2.75.0 2.74.0 2.72.0 2.70.0 2.69.0 2.66.0 2.65.0 2.64.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.1 2.4.0 2.3.0 2.2.3 2.1.0 2.0.19

```
public static interface SearchRequest.FacetSpec.FacetKeyOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getCaseInsensitive()

```
public abstract boolean getCaseInsensitive()
```

True to make facet keys case insensitive when getting faceting values with prefixes or contains; false otherwise.

`bool case_insensitive = 10;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The caseInsensitive.

### getContains(int index)

```
public abstract String getContains(int index)
```

Only get facet values that contains the given strings. For example, suppose "categories" has three values "Women > Shoe", "Women > Dress" and "Men > Shoe". If set "contains" to "Shoe", the "categories" facet will give only "Women > Shoe" and "Men > Shoe". Only supported on textual fields. Maximum is 10.

`repeated string contains = 9;`

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

The contains at the given index.

### getContainsBytes(int index)

```
public abstract ByteString getContainsBytes(int index)
```

Only get facet values that contains the given strings. For example, suppose "categories" has three values "Women > Shoe", "Women > Dress" and "Men > Shoe". If set "contains" to "Shoe", the "categories" facet will give only "Women > Shoe" and "Men > Shoe". Only supported on textual fields. Maximum is 10.

`repeated string contains = 9;`

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

The bytes of the contains at the given index.

### getContainsCount()

```
public abstract int getContainsCount()
```

Only get facet values that contains the given strings. For example, suppose "categories" has three values "Women > Shoe", "Women > Dress" and "Men > Shoe". If set "contains" to "Shoe", the "categories" facet will give only "Women > Shoe" and "Men > Shoe". Only supported on textual fields. Maximum is 10.

`repeated string contains = 9;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of contains.

### getContainsList()

```
public abstract List<String> getContainsList()
```

Only get facet values that contains the given strings. For example, suppose "categories" has three values "Women > Shoe", "Women > Dress" and "Men > Shoe". If set "contains" to "Shoe", the "categories" facet will give only "Women > Shoe" and "Men > Shoe". Only supported on textual fields. Maximum is 10.

`repeated string contains = 9;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

A list containing the contains.

### getIntervals(int index)

```
public abstract Interval getIntervals(int index)
```

Set only if values should be bucketized into intervals. Must be set for facets with numerical values. Must not be set for facet with text values. Maximum number of intervals is 40.

For all numerical facet keys that appear in the list of products from the catalog, the percentiles 0, 10, 30, 50, 70, 90 and 100 are computed from their distribution weekly. If the model assigns a high score to a numerical facet key and its intervals are not specified in the search request, these percentiles will become the bounds for its intervals and will be returned in the response. If the facet key intervals are specified in the request, then the specified intervals will be returned instead.

`repeated .google.cloud.retail.v2beta.Interval intervals = 2;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[Interval](/java/docs/reference/google-cloud-retail/2.32.0/com.google.cloud.retail.v2beta.Interval)`

### getIntervalsCount()

```
public abstract int getIntervalsCount()
```

Set only if values should be bucketized into intervals. Must be set for facets with numerical values. Must not be set for facet with text values. Maximum number of intervals is 40.

For all numerical facet keys that appear in the list of products from the catalog, the percentiles 0, 10, 30, 50, 70, 90 and 100 are computed from their distribution weekly. If the model assigns a high score to a numerical facet key and its intervals are not specified in the search request, these percentiles will become the bounds for its intervals and will be returned in the response. If the facet key intervals are specified in the request, then the specified intervals will be returned instead.

`repeated .google.cloud.retail.v2beta.Interval intervals = 2;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getIntervalsList()

```
public abstract List<Interval> getIntervalsList()
```

Set only if values should be bucketized into intervals. Must be set for facets with numerical values. Must not be set for facet with text values. Maximum number of intervals is 40.

For all numerical facet keys that appear in the list of products from the catalog, the percentiles 0, 10, 30, 50, 70, 90 and 100 are computed from their distribution weekly. If the model assigns a high score to a numerical facet key and its intervals are not specified in the search request, these percentiles will become the bounds for its intervals and will be returned in the response. If the facet key intervals are specified in the request, then the specified intervals will be returned instead.

`repeated .google.cloud.retail.v2beta.Interval intervals = 2;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Interval](/java/docs/reference/google-cloud-retail/2.32.0/com.google.cloud.retail.v2beta.Interval)>`

### getIntervalsOrBuilder(int index)

```
public abstract IntervalOrBuilder getIntervalsOrBuilder(int index)
```

Set only if values should be bucketized into intervals. Must be set for facets with numerical values. Must not be set for facet with text values. Maximum number of intervals is 40.

For all numerical facet keys that appear in the list of products from the catalog, the percentiles 0, 10, 30, 50, 70, 90 and 100 are computed from their distribution weekly. If the model assigns a high score to a numerical facet key and its intervals are not specified in the search request, these percentiles will become the bounds for its intervals and will be returned in the response. If the facet key intervals are specified in the request, then the specified intervals will be returned instead.

`repeated .google.cloud.retail.v2beta.Interval intervals = 2;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[IntervalOrBuilder](/java/docs/reference/google-cloud-retail/2.32.0/com.google.cloud.retail.v2beta.IntervalOrBuilder)`

### getIntervalsOrBuilderList()

```
public abstract List<? extends IntervalOrBuilder> getIntervalsOrBuilderList()
```

Set only if values should be bucketized into intervals. Must be set for facets with numerical values. Must not be set for facet with text values. Maximum number of intervals is 40.

For all numerical facet keys that appear in the list of products from the catalog, the percentiles 0, 10, 30, 50, 70, 90 and 100 are computed from their distribution weekly. If the model assigns a high score to a numerical facet key and its intervals are not specified in the search request, these percentiles will become the bounds for its intervals and will be returned in the response. If the facet key intervals are specified in the request, then the specified intervals will be returned instead.

`repeated .google.cloud.retail.v2beta.Interval intervals = 2;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.retail.v2beta.IntervalOrBuilder>`

### getKey()

```
public abstract String getKey()
```

Required. Supported textual and numerical facet keys in Product object, over which the facet values are computed. Facet key is case-sensitive.

Allowed facet keys when FacetKey.query is not specified:

-   textual\_field =
    
    -   "brands"
    -   "categories"
    -   "genders"
    -   "ageGroups"
    -   "availability"
    -   "colorFamilies"
    -   "colors"
    -   "sizes"
    -   "materials"
    -   "patterns"
    -   "conditions"
    -   "attributes.key"
    -   "pickupInStore"
    -   "shipToStore"
    -   "sameDayDelivery"
    -   "nextDayDelivery"
    -   "customFulfillment1"
    -   "customFulfillment2"
    -   "customFulfillment3"
    -   "customFulfillment4"
    -   "customFulfillment5"
    -   "inventory(place\_id,attributes.key)"
-   numerical\_field =
    
    -   "price"
    -   "discount"
    -   "rating"
    -   "ratingCount"
    -   "attributes.key"
    -   "inventory(place\_id,price)"
    -   "inventory(place\_id,original\_price)"
    -   "inventory(place\_id,attributes.key)"

`string key = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The key.

### getKeyBytes()

```
public abstract ByteString getKeyBytes()
```

Required. Supported textual and numerical facet keys in Product object, over which the facet values are computed. Facet key is case-sensitive.

Allowed facet keys when FacetKey.query is not specified:

-   textual\_field =
    
    -   "brands"
    -   "categories"
    -   "genders"
    -   "ageGroups"
    -   "availability"
    -   "colorFamilies"
    -   "colors"
    -   "sizes"
    -   "materials"
    -   "patterns"
    -   "conditions"
    -   "attributes.key"
    -   "pickupInStore"
    -   "shipToStore"
    -   "sameDayDelivery"
    -   "nextDayDelivery"
    -   "customFulfillment1"
    -   "customFulfillment2"
    -   "customFulfillment3"
    -   "customFulfillment4"
    -   "customFulfillment5"
    -   "inventory(place\_id,attributes.key)"
-   numerical\_field =
    
    -   "price"
    -   "discount"
    -   "rating"
    -   "ratingCount"
    -   "attributes.key"
    -   "inventory(place\_id,price)"
    -   "inventory(place\_id,original\_price)"
    -   "inventory(place\_id,attributes.key)"

`string key = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for key.

### getOrderBy()

```
public abstract String getOrderBy()
```

The order in which SearchResponse.Facet.values are returned.

Allowed values are:

-   "count desc", which means order by SearchResponse.Facet.values.count descending.
    
-   "value desc", which means order by SearchResponse.Facet.values.value descending. Only applies to textual facets.
    
    If not set, textual values are sorted in [natural order](https://en.wikipedia.org/wiki/Natural_sort_order); numerical intervals are sorted in the order given by FacetSpec.FacetKey.intervals; FulfillmentInfo.place\_ids are sorted in the order given by FacetSpec.FacetKey.restricted\_values.
    

`string order_by = 4;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The orderBy.

### getOrderByBytes()

```
public abstract ByteString getOrderByBytes()
```

The order in which SearchResponse.Facet.values are returned.

Allowed values are:

-   "count desc", which means order by SearchResponse.Facet.values.count descending.
    
-   "value desc", which means order by SearchResponse.Facet.values.value descending. Only applies to textual facets.
    
    If not set, textual values are sorted in [natural order](https://en.wikipedia.org/wiki/Natural_sort_order); numerical intervals are sorted in the order given by FacetSpec.FacetKey.intervals; FulfillmentInfo.place\_ids are sorted in the order given by FacetSpec.FacetKey.restricted\_values.
    

`string order_by = 4;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for orderBy.

### getPrefixes(int index)

```
public abstract String getPrefixes(int index)
```

Only get facet values that start with the given string prefix. For example, suppose "categories" has three values "Women > Shoe", "Women > Dress" and "Men > Shoe". If set "prefixes" to "Women", the "categories" facet will give only "Women > Shoe" and "Women > Dress". Only supported on textual fields. Maximum is 10.

`repeated string prefixes = 8;`

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

The prefixes at the given index.

### getPrefixesBytes(int index)

```
public abstract ByteString getPrefixesBytes(int index)
```

Only get facet values that start with the given string prefix. For example, suppose "categories" has three values "Women > Shoe", "Women > Dress" and "Men > Shoe". If set "prefixes" to "Women", the "categories" facet will give only "Women > Shoe" and "Women > Dress". Only supported on textual fields. Maximum is 10.

`repeated string prefixes = 8;`

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

The bytes of the prefixes at the given index.

### getPrefixesCount()

```
public abstract int getPrefixesCount()
```

Only get facet values that start with the given string prefix. For example, suppose "categories" has three values "Women > Shoe", "Women > Dress" and "Men > Shoe". If set "prefixes" to "Women", the "categories" facet will give only "Women > Shoe" and "Women > Dress". Only supported on textual fields. Maximum is 10.

`repeated string prefixes = 8;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of prefixes.

### getPrefixesList()

```
public abstract List<String> getPrefixesList()
```

Only get facet values that start with the given string prefix. For example, suppose "categories" has three values "Women > Shoe", "Women > Dress" and "Men > Shoe". If set "prefixes" to "Women", the "categories" facet will give only "Women > Shoe" and "Women > Dress". Only supported on textual fields. Maximum is 10.

`repeated string prefixes = 8;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

A list containing the prefixes.

### getQuery()

```
public abstract String getQuery()
```

The query that is used to compute facet for the given facet key. When provided, it will override the default behavior of facet computation. The query syntax is the same as a filter expression. See SearchRequest.filter for detail syntax and limitations. Notice that there is no limitation on FacetKey.key when query is specified.

In the response, SearchResponse.Facet.values.value will be always "1" and SearchResponse.Facet.values.count will be the number of results that match the query.

For example, you can set a customized facet for "shipToStore", where FacetKey.key is "customizedShipToStore", and FacetKey.query is "availability: ANY(\\"IN\_STOCK\\") AND shipToStore: ANY(\\"123\\")". Then the facet will count the products that are both in stock and ship to store "123".

`string query = 5;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The query.

### getQueryBytes()

```
public abstract ByteString getQueryBytes()
```

The query that is used to compute facet for the given facet key. When provided, it will override the default behavior of facet computation. The query syntax is the same as a filter expression. See SearchRequest.filter for detail syntax and limitations. Notice that there is no limitation on FacetKey.key when query is specified.

In the response, SearchResponse.Facet.values.value will be always "1" and SearchResponse.Facet.values.count will be the number of results that match the query.

For example, you can set a customized facet for "shipToStore", where FacetKey.key is "customizedShipToStore", and FacetKey.query is "availability: ANY(\\"IN\_STOCK\\") AND shipToStore: ANY(\\"123\\")". Then the facet will count the products that are both in stock and ship to store "123".

`string query = 5;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for query.

### getRestrictedValues(int index)

```
public abstract String getRestrictedValues(int index)
```

Only get facet for the given restricted values. For example, when using "pickupInStore" as key and set restricted values to \["store123", "store456"\], only facets for "store123" and "store456" are returned. Only supported on predefined textual fields, custom textual attributes and fulfillments. Maximum is 20.

Must be set for the fulfillment facet keys:

-   pickupInStore
    
-   shipToStore
    
-   sameDayDelivery
    
-   nextDayDelivery
    
-   customFulfillment1
    
-   customFulfillment2
    
-   customFulfillment3
    
-   customFulfillment4
    
-   customFulfillment5
    

`repeated string restricted_values = 3;`

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

The restrictedValues at the given index.

### getRestrictedValuesBytes(int index)

```
public abstract ByteString getRestrictedValuesBytes(int index)
```

Only get facet for the given restricted values. For example, when using "pickupInStore" as key and set restricted values to \["store123", "store456"\], only facets for "store123" and "store456" are returned. Only supported on predefined textual fields, custom textual attributes and fulfillments. Maximum is 20.

Must be set for the fulfillment facet keys:

-   pickupInStore
    
-   shipToStore
    
-   sameDayDelivery
    
-   nextDayDelivery
    
-   customFulfillment1
    
-   customFulfillment2
    
-   customFulfillment3
    
-   customFulfillment4
    
-   customFulfillment5
    

`repeated string restricted_values = 3;`

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

The bytes of the restrictedValues at the given index.

### getRestrictedValuesCount()

```
public abstract int getRestrictedValuesCount()
```

Only get facet for the given restricted values. For example, when using "pickupInStore" as key and set restricted values to \["store123", "store456"\], only facets for "store123" and "store456" are returned. Only supported on predefined textual fields, custom textual attributes and fulfillments. Maximum is 20.

Must be set for the fulfillment facet keys:

-   pickupInStore
    
-   shipToStore
    
-   sameDayDelivery
    
-   nextDayDelivery
    
-   customFulfillment1
    
-   customFulfillment2
    
-   customFulfillment3
    
-   customFulfillment4
    
-   customFulfillment5
    

`repeated string restricted_values = 3;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of restrictedValues.

### getRestrictedValuesList()

```
public abstract List<String> getRestrictedValuesList()
```

Only get facet for the given restricted values. For example, when using "pickupInStore" as key and set restricted values to \["store123", "store456"\], only facets for "store123" and "store456" are returned. Only supported on predefined textual fields, custom textual attributes and fulfillments. Maximum is 20.

Must be set for the fulfillment facet keys:

-   pickupInStore
    
-   shipToStore
    
-   sameDayDelivery
    
-   nextDayDelivery
    
-   customFulfillment1
    
-   customFulfillment2
    
-   customFulfillment3
    
-   customFulfillment4
    
-   customFulfillment5
    

`repeated string restricted_values = 3;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

A list containing the restrictedValues.

### getReturnMinMax()

```
public abstract boolean getReturnMinMax()
```

Returns the min and max value for each numerical facet intervals. Ignored for textual facets.

`bool return_min_max = 11;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The returnMinMax.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.

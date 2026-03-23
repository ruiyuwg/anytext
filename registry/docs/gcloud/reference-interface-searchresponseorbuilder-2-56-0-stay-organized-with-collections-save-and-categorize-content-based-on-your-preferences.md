-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface SearchResponseOrBuilder (2.56.0) Stay organized with collections Save and categorize content based on your preferences.

2.89.0 (latest) 2.87.0 2.85.0 2.84.0 2.82.0 2.80.0 2.78.0 2.77.0 2.76.0 2.75.0 2.74.0 2.72.0 2.70.0 2.69.0 2.66.0 2.65.0 2.64.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.1 2.4.0 2.3.0 2.2.3 2.1.0 2.0.19

```
public interface SearchResponseOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getAppliedControls(int index)

```
public abstract String getAppliedControls(int index)
```

The fully qualified resource name of applied [controls](https://cloud.google.com/retail/docs/serving-control-rules).

`repeated string applied_controls = 12;`

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

The appliedControls at the given index.

### getAppliedControlsBytes(int index)

```
public abstract ByteString getAppliedControlsBytes(int index)
```

The fully qualified resource name of applied [controls](https://cloud.google.com/retail/docs/serving-control-rules).

`repeated string applied_controls = 12;`

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

The bytes of the appliedControls at the given index.

### getAppliedControlsCount()

```
public abstract int getAppliedControlsCount()
```

The fully qualified resource name of applied [controls](https://cloud.google.com/retail/docs/serving-control-rules).

`repeated string applied_controls = 12;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of appliedControls.

### getAppliedControlsList()

```
public abstract List<String> getAppliedControlsList()
```

The fully qualified resource name of applied [controls](https://cloud.google.com/retail/docs/serving-control-rules).

`repeated string applied_controls = 12;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

A list containing the appliedControls.

### getAttributionToken()

```
public abstract String getAttributionToken()
```

A unique search token. This should be included in the UserEvent logs resulting from this search, which enables accurate attribution of search model performance.

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

A unique search token. This should be included in the UserEvent logs resulting from this search, which enables accurate attribution of search model performance.

`string attribution_token = 5;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for attributionToken.

### getConversationalSearchResult()

```
public abstract SearchResponse.ConversationalSearchResult getConversationalSearchResult()
```

This field specifies all related information that is needed on client side for UI rendering of conversational retail search.

`.google.cloud.retail.v2.SearchResponse.ConversationalSearchResult conversational_search_result = 18;`

**Returns**

**Type**

**Description**

`[SearchResponse.ConversationalSearchResult](/java/docs/reference/google-cloud-retail/2.56.0/com.google.cloud.retail.v2.SearchResponse.ConversationalSearchResult)`

The conversationalSearchResult.

### getConversationalSearchResultOrBuilder()

```
public abstract SearchResponse.ConversationalSearchResultOrBuilder getConversationalSearchResultOrBuilder()
```

This field specifies all related information that is needed on client side for UI rendering of conversational retail search.

`.google.cloud.retail.v2.SearchResponse.ConversationalSearchResult conversational_search_result = 18;`

**Returns**

**Type**

**Description**

`[SearchResponse.ConversationalSearchResultOrBuilder](/java/docs/reference/google-cloud-retail/2.56.0/com.google.cloud.retail.v2.SearchResponse.ConversationalSearchResultOrBuilder)`

### getCorrectedQuery()

```
public abstract String getCorrectedQuery()
```

Contains the spell corrected query, if found. If the spell correction type is AUTOMATIC, then the search results are based on corrected\_query. Otherwise the original query is used for search.

`string corrected_query = 4;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The correctedQuery.

### getCorrectedQueryBytes()

```
public abstract ByteString getCorrectedQueryBytes()
```

Contains the spell corrected query, if found. If the spell correction type is AUTOMATIC, then the search results are based on corrected\_query. Otherwise the original query is used for search.

`string corrected_query = 4;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for correctedQuery.

### getExperimentInfo(int index)

```
public abstract ExperimentInfo getExperimentInfo(int index)
```

Metadata related to A/B testing \[Experiment\]\[\] associated with this response. Only exists when an experiment is triggered.

`repeated .google.cloud.retail.v2.ExperimentInfo experiment_info = 17;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[ExperimentInfo](/java/docs/reference/google-cloud-retail/2.56.0/com.google.cloud.retail.v2.ExperimentInfo)`

### getExperimentInfoCount()

```
public abstract int getExperimentInfoCount()
```

Metadata related to A/B testing \[Experiment\]\[\] associated with this response. Only exists when an experiment is triggered.

`repeated .google.cloud.retail.v2.ExperimentInfo experiment_info = 17;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getExperimentInfoList()

```
public abstract List<ExperimentInfo> getExperimentInfoList()
```

Metadata related to A/B testing \[Experiment\]\[\] associated with this response. Only exists when an experiment is triggered.

`repeated .google.cloud.retail.v2.ExperimentInfo experiment_info = 17;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[ExperimentInfo](/java/docs/reference/google-cloud-retail/2.56.0/com.google.cloud.retail.v2.ExperimentInfo)>`

### getExperimentInfoOrBuilder(int index)

```
public abstract ExperimentInfoOrBuilder getExperimentInfoOrBuilder(int index)
```

Metadata related to A/B testing \[Experiment\]\[\] associated with this response. Only exists when an experiment is triggered.

`repeated .google.cloud.retail.v2.ExperimentInfo experiment_info = 17;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[ExperimentInfoOrBuilder](/java/docs/reference/google-cloud-retail/2.56.0/com.google.cloud.retail.v2.ExperimentInfoOrBuilder)`

### getExperimentInfoOrBuilderList()

```
public abstract List<? extends ExperimentInfoOrBuilder> getExperimentInfoOrBuilderList()
```

Metadata related to A/B testing \[Experiment\]\[\] associated with this response. Only exists when an experiment is triggered.

`repeated .google.cloud.retail.v2.ExperimentInfo experiment_info = 17;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.retail.v2.ExperimentInfoOrBuilder>`

### getFacets(int index)

```
public abstract SearchResponse.Facet getFacets(int index)
```

Results of facets requested by user.

`repeated .google.cloud.retail.v2.SearchResponse.Facet facets = 2;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[SearchResponse.Facet](/java/docs/reference/google-cloud-retail/2.56.0/com.google.cloud.retail.v2.SearchResponse.Facet)`

### getFacetsCount()

```
public abstract int getFacetsCount()
```

Results of facets requested by user.

`repeated .google.cloud.retail.v2.SearchResponse.Facet facets = 2;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getFacetsList()

```
public abstract List<SearchResponse.Facet> getFacetsList()
```

Results of facets requested by user.

`repeated .google.cloud.retail.v2.SearchResponse.Facet facets = 2;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Facet](/java/docs/reference/google-cloud-retail/2.56.0/com.google.cloud.retail.v2.SearchResponse.Facet)>`

### getFacetsOrBuilder(int index)

```
public abstract SearchResponse.FacetOrBuilder getFacetsOrBuilder(int index)
```

Results of facets requested by user.

`repeated .google.cloud.retail.v2.SearchResponse.Facet facets = 2;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[SearchResponse.FacetOrBuilder](/java/docs/reference/google-cloud-retail/2.56.0/com.google.cloud.retail.v2.SearchResponse.FacetOrBuilder)`

### getFacetsOrBuilderList()

```
public abstract List<? extends SearchResponse.FacetOrBuilder> getFacetsOrBuilderList()
```

Results of facets requested by user.

`repeated .google.cloud.retail.v2.SearchResponse.Facet facets = 2;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.retail.v2.SearchResponse.FacetOrBuilder>`

### getInvalidConditionBoostSpecs(int index)

```
public abstract SearchRequest.BoostSpec.ConditionBoostSpec getInvalidConditionBoostSpecs(int index)
```

The invalid SearchRequest.BoostSpec.condition\_boost\_specs that are not applied during serving.

`repeated .google.cloud.retail.v2.SearchRequest.BoostSpec.ConditionBoostSpec invalid_condition_boost_specs = 14;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[SearchRequest.BoostSpec.ConditionBoostSpec](/java/docs/reference/google-cloud-retail/2.56.0/com.google.cloud.retail.v2.SearchRequest.BoostSpec.ConditionBoostSpec)`

### getInvalidConditionBoostSpecsCount()

```
public abstract int getInvalidConditionBoostSpecsCount()
```

The invalid SearchRequest.BoostSpec.condition\_boost\_specs that are not applied during serving.

`repeated .google.cloud.retail.v2.SearchRequest.BoostSpec.ConditionBoostSpec invalid_condition_boost_specs = 14;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getInvalidConditionBoostSpecsList()

```
public abstract List<SearchRequest.BoostSpec.ConditionBoostSpec> getInvalidConditionBoostSpecsList()
```

The invalid SearchRequest.BoostSpec.condition\_boost\_specs that are not applied during serving.

`repeated .google.cloud.retail.v2.SearchRequest.BoostSpec.ConditionBoostSpec invalid_condition_boost_specs = 14;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[ConditionBoostSpec](/java/docs/reference/google-cloud-retail/2.56.0/com.google.cloud.retail.v2.SearchRequest.BoostSpec.ConditionBoostSpec)>`

### getInvalidConditionBoostSpecsOrBuilder(int index)

```
public abstract SearchRequest.BoostSpec.ConditionBoostSpecOrBuilder getInvalidConditionBoostSpecsOrBuilder(int index)
```

The invalid SearchRequest.BoostSpec.condition\_boost\_specs that are not applied during serving.

`repeated .google.cloud.retail.v2.SearchRequest.BoostSpec.ConditionBoostSpec invalid_condition_boost_specs = 14;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[SearchRequest.BoostSpec.ConditionBoostSpecOrBuilder](/java/docs/reference/google-cloud-retail/2.56.0/com.google.cloud.retail.v2.SearchRequest.BoostSpec.ConditionBoostSpecOrBuilder)`

### getInvalidConditionBoostSpecsOrBuilderList()

```
public abstract List<? extends SearchRequest.BoostSpec.ConditionBoostSpecOrBuilder> getInvalidConditionBoostSpecsOrBuilderList()
```

The invalid SearchRequest.BoostSpec.condition\_boost\_specs that are not applied during serving.

`repeated .google.cloud.retail.v2.SearchRequest.BoostSpec.ConditionBoostSpec invalid_condition_boost_specs = 14;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.retail.v2.SearchRequest.BoostSpec.ConditionBoostSpecOrBuilder>`

### getNextPageToken()

```
public abstract String getNextPageToken()
```

A token that can be sent as SearchRequest.page\_token to retrieve the next page. If this field is omitted, there are no subsequent pages.

`string next_page_token = 6;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The nextPageToken.

### getNextPageTokenBytes()

```
public abstract ByteString getNextPageTokenBytes()
```

A token that can be sent as SearchRequest.page\_token to retrieve the next page. If this field is omitted, there are no subsequent pages.

`string next_page_token = 6;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for nextPageToken.

### getQueryExpansionInfo()

```
public abstract SearchResponse.QueryExpansionInfo getQueryExpansionInfo()
```

Query expansion information for the returned results.

`.google.cloud.retail.v2.SearchResponse.QueryExpansionInfo query_expansion_info = 7;`

**Returns**

**Type**

**Description**

`[SearchResponse.QueryExpansionInfo](/java/docs/reference/google-cloud-retail/2.56.0/com.google.cloud.retail.v2.SearchResponse.QueryExpansionInfo)`

The queryExpansionInfo.

### getQueryExpansionInfoOrBuilder()

```
public abstract SearchResponse.QueryExpansionInfoOrBuilder getQueryExpansionInfoOrBuilder()
```

Query expansion information for the returned results.

`.google.cloud.retail.v2.SearchResponse.QueryExpansionInfo query_expansion_info = 7;`

**Returns**

**Type**

**Description**

`[SearchResponse.QueryExpansionInfoOrBuilder](/java/docs/reference/google-cloud-retail/2.56.0/com.google.cloud.retail.v2.SearchResponse.QueryExpansionInfoOrBuilder)`

### getRedirectUri()

```
public abstract String getRedirectUri()
```

The URI of a customer-defined redirect page. If redirect action is triggered, no search is performed, and only redirect\_uri and attribution\_token are set in the response.

`string redirect_uri = 10;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The redirectUri.

### getRedirectUriBytes()

```
public abstract ByteString getRedirectUriBytes()
```

The URI of a customer-defined redirect page. If redirect action is triggered, no search is performed, and only redirect\_uri and attribution\_token are set in the response.

`string redirect_uri = 10;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for redirectUri.

### getResults(int index)

```
public abstract SearchResponse.SearchResult getResults(int index)
```

A list of matched items. The order represents the ranking.

`repeated .google.cloud.retail.v2.SearchResponse.SearchResult results = 1;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[SearchResponse.SearchResult](/java/docs/reference/google-cloud-retail/2.56.0/com.google.cloud.retail.v2.SearchResponse.SearchResult)`

### getResultsCount()

```
public abstract int getResultsCount()
```

A list of matched items. The order represents the ranking.

`repeated .google.cloud.retail.v2.SearchResponse.SearchResult results = 1;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getResultsList()

```
public abstract List<SearchResponse.SearchResult> getResultsList()
```

A list of matched items. The order represents the ranking.

`repeated .google.cloud.retail.v2.SearchResponse.SearchResult results = 1;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[SearchResult](/java/docs/reference/google-cloud-retail/2.56.0/com.google.cloud.retail.v2.SearchResponse.SearchResult)>`

### getResultsOrBuilder(int index)

```
public abstract SearchResponse.SearchResultOrBuilder getResultsOrBuilder(int index)
```

A list of matched items. The order represents the ranking.

`repeated .google.cloud.retail.v2.SearchResponse.SearchResult results = 1;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[SearchResponse.SearchResultOrBuilder](/java/docs/reference/google-cloud-retail/2.56.0/com.google.cloud.retail.v2.SearchResponse.SearchResultOrBuilder)`

### getResultsOrBuilderList()

```
public abstract List<? extends SearchResponse.SearchResultOrBuilder> getResultsOrBuilderList()
```

A list of matched items. The order represents the ranking.

`repeated .google.cloud.retail.v2.SearchResponse.SearchResult results = 1;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.retail.v2.SearchResponse.SearchResultOrBuilder>`

### getTileNavigationResult()

```
public abstract SearchResponse.TileNavigationResult getTileNavigationResult()
```

This field specifies all related information for tile navigation that will be used in client side.

`.google.cloud.retail.v2.SearchResponse.TileNavigationResult tile_navigation_result = 19;`

**Returns**

**Type**

**Description**

`[SearchResponse.TileNavigationResult](/java/docs/reference/google-cloud-retail/2.56.0/com.google.cloud.retail.v2.SearchResponse.TileNavigationResult)`

The tileNavigationResult.

### getTileNavigationResultOrBuilder()

```
public abstract SearchResponse.TileNavigationResultOrBuilder getTileNavigationResultOrBuilder()
```

This field specifies all related information for tile navigation that will be used in client side.

`.google.cloud.retail.v2.SearchResponse.TileNavigationResult tile_navigation_result = 19;`

**Returns**

**Type**

**Description**

`[SearchResponse.TileNavigationResultOrBuilder](/java/docs/reference/google-cloud-retail/2.56.0/com.google.cloud.retail.v2.SearchResponse.TileNavigationResultOrBuilder)`

### getTotalSize()

```
public abstract int getTotalSize()
```

The estimated total count of matched items irrespective of pagination. The count of results returned by pagination may be less than the total\_size that matches.

`int32 total_size = 3;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The totalSize.

### hasConversationalSearchResult()

```
public abstract boolean hasConversationalSearchResult()
```

This field specifies all related information that is needed on client side for UI rendering of conversational retail search.

`.google.cloud.retail.v2.SearchResponse.ConversationalSearchResult conversational_search_result = 18;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the conversationalSearchResult field is set.

### hasQueryExpansionInfo()

```
public abstract boolean hasQueryExpansionInfo()
```

Query expansion information for the returned results.

`.google.cloud.retail.v2.SearchResponse.QueryExpansionInfo query_expansion_info = 7;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the queryExpansionInfo field is set.

### hasTileNavigationResult()

```
public abstract boolean hasTileNavigationResult()
```

This field specifies all related information for tile navigation that will be used in client side.

`.google.cloud.retail.v2.SearchResponse.TileNavigationResult tile_navigation_result = 19;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the tileNavigationResult field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.

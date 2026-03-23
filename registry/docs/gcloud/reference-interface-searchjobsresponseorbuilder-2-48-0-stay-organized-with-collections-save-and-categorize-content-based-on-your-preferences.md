-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface SearchJobsResponseOrBuilder (2.48.0) Stay organized with collections Save and categorize content based on your preferences.

2.88.0 (latest) 2.86.0 2.84.0 2.83.0 2.81.0 2.79.0 2.77.0 2.76.0 2.75.0 2.74.0 2.73.0 2.71.0 2.69.0 2.68.0 2.65.0 2.64.0 2.63.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.6 2.2.9

```
public interface SearchJobsResponseOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getBroadenedQueryJobsCount()

```
public abstract int getBroadenedQueryJobsCount()
```

If query broadening is enabled, we may append additional results from the broadened query. This number indicates how many of the jobs returned in the jobs field are from the broadened query. These results are always at the end of the jobs list. In particular, a value of 0, or if the field isn't set, all the jobs in the jobs list are from the original (without broadening) query. If this field is non-zero, subsequent requests with offset after this result set should contain all broadened results.

`int32 broadened_query_jobs_count = 8;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The broadenedQueryJobsCount.

### getHistogramQueryResults(int index)

```
public abstract HistogramQueryResult getHistogramQueryResults(int index)
```

The histogram results that match with specified SearchJobsRequest.histogram\_queries.

`repeated .google.cloud.talent.v4.HistogramQueryResult histogram_query_results = 2;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[HistogramQueryResult](/java/docs/reference/google-cloud-talent/2.48.0/com.google.cloud.talent.v4.HistogramQueryResult)`

### getHistogramQueryResultsCount()

```
public abstract int getHistogramQueryResultsCount()
```

The histogram results that match with specified SearchJobsRequest.histogram\_queries.

`repeated .google.cloud.talent.v4.HistogramQueryResult histogram_query_results = 2;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getHistogramQueryResultsList()

```
public abstract List<HistogramQueryResult> getHistogramQueryResultsList()
```

The histogram results that match with specified SearchJobsRequest.histogram\_queries.

`repeated .google.cloud.talent.v4.HistogramQueryResult histogram_query_results = 2;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[HistogramQueryResult](/java/docs/reference/google-cloud-talent/2.48.0/com.google.cloud.talent.v4.HistogramQueryResult)>`

### getHistogramQueryResultsOrBuilder(int index)

```
public abstract HistogramQueryResultOrBuilder getHistogramQueryResultsOrBuilder(int index)
```

The histogram results that match with specified SearchJobsRequest.histogram\_queries.

`repeated .google.cloud.talent.v4.HistogramQueryResult histogram_query_results = 2;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[HistogramQueryResultOrBuilder](/java/docs/reference/google-cloud-talent/2.48.0/com.google.cloud.talent.v4.HistogramQueryResultOrBuilder)`

### getHistogramQueryResultsOrBuilderList()

```
public abstract List<? extends HistogramQueryResultOrBuilder> getHistogramQueryResultsOrBuilderList()
```

The histogram results that match with specified SearchJobsRequest.histogram\_queries.

`repeated .google.cloud.talent.v4.HistogramQueryResult histogram_query_results = 2;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.talent.v4.HistogramQueryResultOrBuilder>`

### getLocationFilters(int index)

```
public abstract Location getLocationFilters(int index)
```

The location filters that the service applied to the specified query. If any filters are lat-lng based, the Location.location\_type is Location.LocationType.LOCATION\_TYPE\_UNSPECIFIED.

`repeated .google.cloud.talent.v4.Location location_filters = 4;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[Location](/java/docs/reference/google-cloud-talent/2.48.0/com.google.cloud.talent.v4.Location)`

### getLocationFiltersCount()

```
public abstract int getLocationFiltersCount()
```

The location filters that the service applied to the specified query. If any filters are lat-lng based, the Location.location\_type is Location.LocationType.LOCATION\_TYPE\_UNSPECIFIED.

`repeated .google.cloud.talent.v4.Location location_filters = 4;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getLocationFiltersList()

```
public abstract List<Location> getLocationFiltersList()
```

The location filters that the service applied to the specified query. If any filters are lat-lng based, the Location.location\_type is Location.LocationType.LOCATION\_TYPE\_UNSPECIFIED.

`repeated .google.cloud.talent.v4.Location location_filters = 4;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Location](/java/docs/reference/google-cloud-talent/2.48.0/com.google.cloud.talent.v4.Location)>`

### getLocationFiltersOrBuilder(int index)

```
public abstract LocationOrBuilder getLocationFiltersOrBuilder(int index)
```

The location filters that the service applied to the specified query. If any filters are lat-lng based, the Location.location\_type is Location.LocationType.LOCATION\_TYPE\_UNSPECIFIED.

`repeated .google.cloud.talent.v4.Location location_filters = 4;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[LocationOrBuilder](/java/docs/reference/google-cloud-talent/2.48.0/com.google.cloud.talent.v4.LocationOrBuilder)`

### getLocationFiltersOrBuilderList()

```
public abstract List<? extends LocationOrBuilder> getLocationFiltersOrBuilderList()
```

The location filters that the service applied to the specified query. If any filters are lat-lng based, the Location.location\_type is Location.LocationType.LOCATION\_TYPE\_UNSPECIFIED.

`repeated .google.cloud.talent.v4.Location location_filters = 4;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.talent.v4.LocationOrBuilder>`

### getMatchingJobs(int index)

```
public abstract SearchJobsResponse.MatchingJob getMatchingJobs(int index)
```

The Job entities that match the specified SearchJobsRequest.

`repeated .google.cloud.talent.v4.SearchJobsResponse.MatchingJob matching_jobs = 1;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[SearchJobsResponse.MatchingJob](/java/docs/reference/google-cloud-talent/2.48.0/com.google.cloud.talent.v4.SearchJobsResponse.MatchingJob)`

### getMatchingJobsCount()

```
public abstract int getMatchingJobsCount()
```

The Job entities that match the specified SearchJobsRequest.

`repeated .google.cloud.talent.v4.SearchJobsResponse.MatchingJob matching_jobs = 1;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getMatchingJobsList()

```
public abstract List<SearchJobsResponse.MatchingJob> getMatchingJobsList()
```

The Job entities that match the specified SearchJobsRequest.

`repeated .google.cloud.talent.v4.SearchJobsResponse.MatchingJob matching_jobs = 1;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[MatchingJob](/java/docs/reference/google-cloud-talent/2.48.0/com.google.cloud.talent.v4.SearchJobsResponse.MatchingJob)>`

### getMatchingJobsOrBuilder(int index)

```
public abstract SearchJobsResponse.MatchingJobOrBuilder getMatchingJobsOrBuilder(int index)
```

The Job entities that match the specified SearchJobsRequest.

`repeated .google.cloud.talent.v4.SearchJobsResponse.MatchingJob matching_jobs = 1;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[SearchJobsResponse.MatchingJobOrBuilder](/java/docs/reference/google-cloud-talent/2.48.0/com.google.cloud.talent.v4.SearchJobsResponse.MatchingJobOrBuilder)`

### getMatchingJobsOrBuilderList()

```
public abstract List<? extends SearchJobsResponse.MatchingJobOrBuilder> getMatchingJobsOrBuilderList()
```

The Job entities that match the specified SearchJobsRequest.

`repeated .google.cloud.talent.v4.SearchJobsResponse.MatchingJob matching_jobs = 1;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.talent.v4.SearchJobsResponse.MatchingJobOrBuilder>`

### getMetadata()

```
public abstract ResponseMetadata getMetadata()
```

Additional information for the API invocation, such as the request tracking id.

`.google.cloud.talent.v4.ResponseMetadata metadata = 7;`

**Returns**

**Type**

**Description**

`[ResponseMetadata](/java/docs/reference/google-cloud-talent/2.48.0/com.google.cloud.talent.v4.ResponseMetadata)`

The metadata.

### getMetadataOrBuilder()

```
public abstract ResponseMetadataOrBuilder getMetadataOrBuilder()
```

Additional information for the API invocation, such as the request tracking id.

`.google.cloud.talent.v4.ResponseMetadata metadata = 7;`

**Returns**

**Type**

**Description**

`[ResponseMetadataOrBuilder](/java/docs/reference/google-cloud-talent/2.48.0/com.google.cloud.talent.v4.ResponseMetadataOrBuilder)`

### getNextPageToken()

```
public abstract String getNextPageToken()
```

The token that specifies the starting position of the next page of results. This field is empty if there are no more results.

`string next_page_token = 3;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The nextPageToken.

### getNextPageTokenBytes()

```
public abstract ByteString getNextPageTokenBytes()
```

The token that specifies the starting position of the next page of results. This field is empty if there are no more results.

`string next_page_token = 3;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for nextPageToken.

### getSpellCorrection()

```
public abstract SpellingCorrection getSpellCorrection()
```

The spell checking result, and correction.

`.google.cloud.talent.v4.SpellingCorrection spell_correction = 9;`

**Returns**

**Type**

**Description**

`[SpellingCorrection](/java/docs/reference/google-cloud-talent/2.48.0/com.google.cloud.talent.v4.SpellingCorrection)`

The spellCorrection.

### getSpellCorrectionOrBuilder()

```
public abstract SpellingCorrectionOrBuilder getSpellCorrectionOrBuilder()
```

The spell checking result, and correction.

`.google.cloud.talent.v4.SpellingCorrection spell_correction = 9;`

**Returns**

**Type**

**Description**

`[SpellingCorrectionOrBuilder](/java/docs/reference/google-cloud-talent/2.48.0/com.google.cloud.talent.v4.SpellingCorrectionOrBuilder)`

### getTotalSize()

```
public abstract int getTotalSize()
```

Number of jobs that match the specified query.

Note: This size is precise only if the total is less than 100,000.

`int32 total_size = 6;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The totalSize.

### hasMetadata()

```
public abstract boolean hasMetadata()
```

Additional information for the API invocation, such as the request tracking id.

`.google.cloud.talent.v4.ResponseMetadata metadata = 7;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the metadata field is set.

### hasSpellCorrection()

```
public abstract boolean hasSpellCorrection()
```

The spell checking result, and correction.

`.google.cloud.talent.v4.SpellingCorrection spell_correction = 9;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the spellCorrection field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.

-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Google Cloud Talent Solution v4 API - Class SearchJobsRequest (2.3.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.3.0keyboard\_arrow\_down

-   [2.8.0 (latest)](/dotnet/docs/reference/Google.Cloud.Talent.V4/latest/Google.Cloud.Talent.V4.SearchJobsRequest)
-   [2.7.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.7.0/Google.Cloud.Talent.V4.SearchJobsRequest)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.6.0/Google.Cloud.Talent.V4.SearchJobsRequest)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.5.0/Google.Cloud.Talent.V4.SearchJobsRequest)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.4.0/Google.Cloud.Talent.V4.SearchJobsRequest)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.3.0/Google.Cloud.Talent.V4.SearchJobsRequest)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.2.0/Google.Cloud.Talent.V4.SearchJobsRequest)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.1.0/Google.Cloud.Talent.V4.SearchJobsRequest)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.0.0/Google.Cloud.Talent.V4.SearchJobsRequest)
-   [1.4.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/1.4.0/Google.Cloud.Talent.V4.SearchJobsRequest)
-   [1.3.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/1.3.0/Google.Cloud.Talent.V4.SearchJobsRequest)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/1.2.0/Google.Cloud.Talent.V4.SearchJobsRequest)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/1.1.0/Google.Cloud.Talent.V4.SearchJobsRequest)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/1.0.0/Google.Cloud.Talent.V4.SearchJobsRequest)

```
public sealed class SearchJobsRequest : IMessage<SearchJobsRequest>, IEquatable<SearchJobsRequest>, IDeepCloneable<SearchJobsRequest>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Google Cloud Talent Solution v4 API class SearchJobsRequest.

The Request body of the `SearchJobs` call.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> SearchJobsRequest

## Implements

[IMessage](https://github.com/protocolbuffers/protobuf/blob/e7e8f04a4ff0df9c7233ac0fcb3c41b9b84e174c/csharp/src/Google.Protobuf/IMessage.cs)[SearchJobsRequest](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.3.0/Google.Cloud.Talent.V4.SearchJobsRequest), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[SearchJobsRequest](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.3.0/Google.Cloud.Talent.V4.SearchJobsRequest), [IDeepCloneable](https://github.com/protocolbuffers/protobuf/blob/e7e8f04a4ff0df9c7233ac0fcb3c41b9b84e174c/csharp/src/Google.Protobuf/IDeepCloneable.cs)[SearchJobsRequest](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.3.0/Google.Cloud.Talent.V4.SearchJobsRequest), [IBufferMessage](https://github.com/protocolbuffers/protobuf/blob/e7e8f04a4ff0df9c7233ac0fcb3c41b9b84e174c/csharp/src/Google.Protobuf/IBufferMessage.cs), [IMessage](https://github.com/protocolbuffers/protobuf/blob/e7e8f04a4ff0df9c7233ac0fcb3c41b9b84e174c/csharp/src/Google.Protobuf/IMessage.cs)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Talent.V4](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.3.0/Google.Cloud.Talent.V4)

## Assembly

Google.Cloud.Talent.V4.dll

## Constructors

### SearchJobsRequest()

```
public SearchJobsRequest()
```

### SearchJobsRequest(SearchJobsRequest)

```
public SearchJobsRequest(SearchJobsRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[SearchJobsRequest](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.3.0/Google.Cloud.Talent.V4.SearchJobsRequest)`  

## Properties

### CustomRankingInfo

```
public SearchJobsRequest.Types.CustomRankingInfo CustomRankingInfo { get; set; }
```

Controls over how job documents get ranked on top of existing relevance score (determined by API algorithm).

**Property Value**

**Type**

**Description**

`[SearchJobsRequest](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.3.0/Google.Cloud.Talent.V4.SearchJobsRequest)[Types](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.3.0/Google.Cloud.Talent.V4.SearchJobsRequest.Types)[CustomRankingInfo](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.3.0/Google.Cloud.Talent.V4.SearchJobsRequest.Types.CustomRankingInfo)`

### DisableKeywordMatch

```
[Obsolete]
public bool DisableKeywordMatch { get; set; }
```

This field is deprecated. Please use \[SearchJobsRequest.keyword\_match\_mode\]\[google.cloud.talent.v4.SearchJobsRequest.keyword\_match\_mode\] going forward.

To migrate, disable\_keyword\_match set to false maps to \[KeywordMatchMode.KEYWORD\_MATCH\_ALL\]\[google.cloud.talent.v4.SearchJobsRequest.KeywordMatchMode.KEYWORD\_MATCH\_ALL\], and disable\_keyword\_match set to true maps to \[KeywordMatchMode.KEYWORD\_MATCH\_DISABLED\]\[google.cloud.talent.v4.SearchJobsRequest.KeywordMatchMode.KEYWORD\_MATCH\_DISABLED\]. If \[SearchJobsRequest.keyword\_match\_mode\]\[google.cloud.talent.v4.SearchJobsRequest.keyword\_match\_mode\] is set, this field is ignored.

Controls whether to disable exact keyword match on \[Job.title\]\[google.cloud.talent.v4.Job.title\], \[Job.description\]\[google.cloud.talent.v4.Job.description\], \[Job.company\_display\_name\]\[google.cloud.talent.v4.Job.company\_display\_name\], \[Job.addresses\]\[google.cloud.talent.v4.Job.addresses\], \[Job.qualifications\]\[google.cloud.talent.v4.Job.qualifications\]. When disable keyword match is turned off, a keyword match returns jobs that do not match given category filters when there are matching keywords. For example, for the query "program manager," a result is returned even if the job posting has the title "software developer," which doesn't fall into "program manager" ontology, but does have "program manager" appearing in its description.

For queries like "cloud" that don't contain title or location specific ontology, jobs with "cloud" keyword matches are returned regardless of this flag's value.

Use \[Company.keyword\_searchable\_job\_custom\_attributes\]\[google.cloud.talent.v4.Company.keyword\_searchable\_job\_custom\_attributes\] if company-specific globally matched custom field/attribute string values are needed. Enabling keyword match improves recall of subsequent search requests.

Defaults to false.

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### DiversificationLevel

```
public SearchJobsRequest.Types.DiversificationLevel DiversificationLevel { get; set; }
```

Controls whether highly similar jobs are returned next to each other in the search results. Jobs are identified as highly similar based on their titles, job categories, and locations. Highly similar results are clustered so that only one representative job of the cluster is displayed to the job seeker higher up in the results, with the other jobs being displayed lower down in the results.

Defaults to \[DiversificationLevel.SIMPLE\]\[google.cloud.talent.v4.SearchJobsRequest.DiversificationLevel.SIMPLE\] if no value is specified.

**Property Value**

**Type**

**Description**

`[SearchJobsRequest](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.3.0/Google.Cloud.Talent.V4.SearchJobsRequest)[Types](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.3.0/Google.Cloud.Talent.V4.SearchJobsRequest.Types)[DiversificationLevel](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.3.0/Google.Cloud.Talent.V4.SearchJobsRequest.Types.DiversificationLevel)`

### EnableBroadening

```
public bool EnableBroadening { get; set; }
```

Controls whether to broaden the search when it produces sparse results. Broadened queries append results to the end of the matching results list.

Defaults to false.

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HistogramQueries

```
public RepeatedField<HistogramQuery> HistogramQueries { get; }
```

An expression specifies a histogram request against matching jobs.

Expression syntax is an aggregation function call with histogram facets and other options.

Available aggregation function calls are:

-   `count(string_histogram_facet)`: Count the number of matching entities, for each distinct attribute value.
-   `count(numeric_histogram_facet, list of buckets)`: Count the number of matching entities within each bucket.

A maximum of 200 histogram buckets are supported.

Data types:

-   Histogram facet: facet names with format `[a-zA-Z][a-zA-Z0-9_]+`.
-   String: string like "any string with backslash escape for quote(")."
-   Number: whole number and floating point number like 10, -1 and -0.01.
-   List: list of elements with comma(,) separator surrounded by square brackets, for example, \[1, 2, 3\] and \["one", "two", "three"\].

Built-in constants:

-   MIN (minimum number similar to java Double.MIN\_VALUE)
-   MAX (maximum number similar to java Double.MAX\_VALUE)

Built-in functions:

-   bucket(start, end\[, label\]): bucket built-in function creates a bucket with range of \[start, end). Note that the end is exclusive, for example, bucket(1, MAX, "positive number") or bucket(1, 10).

Job histogram facets:

-   company\_display\_name: histogram by \[Job.company\_display\_name\]\[google.cloud.talent.v4.Job.company\_display\_name\].
-   employment\_type: histogram by \[Job.employment\_types\]\[google.cloud.talent.v4.Job.employment\_types\], for example, "FULL\_TIME", "PART\_TIME".
-   company\_size (DEPRECATED): histogram by \[CompanySize\]\[google.cloud.talent.v4.CompanySize\], for example, "SMALL", "MEDIUM", "BIG".
-   publish\_time\_in\_day: histogram by the \[Job.posting\_publish\_time\]\[google.cloud.talent.v4.Job.posting\_publish\_time\] in days. Must specify list of numeric buckets in spec.
-   publish\_time\_in\_month: histogram by the \[Job.posting\_publish\_time\]\[google.cloud.talent.v4.Job.posting\_publish\_time\] in months. Must specify list of numeric buckets in spec.
-   publish\_time\_in\_year: histogram by the \[Job.posting\_publish\_time\]\[google.cloud.talent.v4.Job.posting\_publish\_time\] in years. Must specify list of numeric buckets in spec.
-   degree\_types: histogram by the \[Job.degree\_types\]\[google.cloud.talent.v4.Job.degree\_types\], for example, "Bachelors", "Masters".
-   job\_level: histogram by the \[Job.job\_level\]\[google.cloud.talent.v4.Job.job\_level\], for example, "Entry Level".
-   country: histogram by the country code of jobs, for example, "US", "FR".
-   admin1: histogram by the admin1 code of jobs, which is a global placeholder referring to the state, province, or the particular term a country uses to define the geographic structure below the country level, for example, "CA", "IL".
-   city: histogram by a combination of the "city name, admin1 code". For example, "Mountain View, CA", "New York, NY".
-   admin1\_country: histogram by a combination of the "admin1 code, country", for example, "CA, US", "IL, US".
-   city\_coordinate: histogram by the city center's GPS coordinates (latitude and longitude), for example, 37.4038522,-122.0987765. Since the coordinates of a city center can change, customers may need to refresh them periodically.
-   locale: histogram by the \[Job.language\_code\]\[google.cloud.talent.v4.Job.language\_code\], for example, "en-US", "fr-FR".
-   language: histogram by the language subtag of the \[Job.language\_code\]\[google.cloud.talent.v4.Job.language\_code\], for example, "en", "fr".
-   category: histogram by the \[JobCategory\]\[google.cloud.talent.v4.JobCategory\], for example, "COMPUTER\_AND\_IT", "HEALTHCARE".
-   base\_compensation\_unit: histogram by the \[CompensationInfo.CompensationUnit\]\[google.cloud.talent.v4.CompensationInfo.CompensationUnit\] of base salary, for example, "WEEKLY", "MONTHLY".
-   base\_compensation: histogram by the base salary. Must specify list of numeric buckets to group results by.
-   annualized\_base\_compensation: histogram by the base annualized salary. Must specify list of numeric buckets to group results by.
-   annualized\_total\_compensation: histogram by the total annualized salary. Must specify list of numeric buckets to group results by.
-   string\_custom\_attribute: histogram by string \[Job.custom\_attributes\]\[google.cloud.talent.v4.Job.custom\_attributes\]. Values can be accessed via square bracket notations like string\_custom\_attribute\["key1"\].
-   numeric\_custom\_attribute: histogram by numeric \[Job.custom\_attributes\]\[google.cloud.talent.v4.Job.custom\_attributes\]. Values can be accessed via square bracket notations like numeric\_custom\_attribute\["key1"\]. Must specify list of numeric buckets to group results by.

Example expressions:

-   `count(admin1)`
-   `count(base_compensation, [bucket(1000, 10000), bucket(10000, 100000), bucket(100000, MAX)])`
-   `count(string_custom_attribute["some-string-custom-attribute"])`
-   `count(numeric_custom_attribute["some-numeric-custom-attribute"], [bucket(MIN, 0, "negative"), bucket(0, MAX, "non-negative")])`

**Property Value**

**Type**

**Description**

`[RepeatedField](https://github.com/protocolbuffers/protobuf/blob/e7e8f04a4ff0df9c7233ac0fcb3c41b9b84e174c/csharp/src/Google.Protobuf/Collections/RepeatedField.cs)[HistogramQuery](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.3.0/Google.Cloud.Talent.V4.HistogramQuery)`

### JobQuery

```
public JobQuery JobQuery { get; set; }
```

Query used to search against jobs, such as keyword, location filters, etc.

**Property Value**

**Type**

**Description**

`[JobQuery](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.3.0/Google.Cloud.Talent.V4.JobQuery)`

### JobView

```
public JobView JobView { get; set; }
```

The desired job attributes returned for jobs in the search response. Defaults to \[JobView.JOB\_VIEW\_SMALL\]\[google.cloud.talent.v4.JobView.JOB\_VIEW\_SMALL\] if no value is specified.

**Property Value**

**Type**

**Description**

`[JobView](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.3.0/Google.Cloud.Talent.V4.JobView)`

### KeywordMatchMode

```
public SearchJobsRequest.Types.KeywordMatchMode KeywordMatchMode { get; set; }
```

Controls what keyword match options to use. If both keyword\_match\_mode and disable\_keyword\_match are set, keyword\_match\_mode will take precedence.

Defaults to \[KeywordMatchMode.KEYWORD\_MATCH\_ALL\]\[google.cloud.talent.v4.SearchJobsRequest.KeywordMatchMode.KEYWORD\_MATCH\_ALL\] if no value is specified.

**Property Value**

**Type**

**Description**

`[SearchJobsRequest](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.3.0/Google.Cloud.Talent.V4.SearchJobsRequest)[Types](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.3.0/Google.Cloud.Talent.V4.SearchJobsRequest.Types)[KeywordMatchMode](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.3.0/Google.Cloud.Talent.V4.SearchJobsRequest.Types.KeywordMatchMode)`

### MaxPageSize

```
public int MaxPageSize { get; set; }
```

A limit on the number of jobs returned in the search results. Increasing this value above the default value of 10 can increase search response time. The value can be between 1 and 100.

**Property Value**

**Type**

**Description**

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`

### Offset

```
public int Offset { get; set; }
```

An integer that specifies the current offset (that is, starting result location, amongst the jobs deemed by the API as relevant) in search results. This field is only considered if \[page\_token\]\[google.cloud.talent.v4.SearchJobsRequest.page\_token\] is unset.

The maximum allowed value is 5000. Otherwise an error is thrown.

For example, 0 means to return results starting from the first matching job, and 10 means to return from the 11th job. This can be used for pagination, (for example, pageSize = 10 and offset = 10 means to return from the second page).

**Property Value**

**Type**

**Description**

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`

### OrderBy

```
public string OrderBy { get; set; }
```

The criteria determining how search results are sorted. Default is `"relevance desc"`.

Supported options are:

-   `"relevance desc"`: By relevance descending, as determined by the API algorithms. Relevance thresholding of query results is only available with this ordering.
-   `"posting_publish_time desc"`: By \[Job.posting\_publish\_time\]\[google.cloud.talent.v4.Job.posting\_publish\_time\] descending.
-   `"posting_update_time desc"`: By \[Job.posting\_update\_time\]\[google.cloud.talent.v4.Job.posting\_update\_time\] descending.
-   `"title"`: By \[Job.title\]\[google.cloud.talent.v4.Job.title\] ascending.
-   `"title desc"`: By \[Job.title\]\[google.cloud.talent.v4.Job.title\] descending.
-   `"annualized_base_compensation"`: By job's \[CompensationInfo.annualized\_base\_compensation\_range\]\[google.cloud.talent.v4.CompensationInfo.annualized\_base\_compensation\_range\] ascending. Jobs whose annualized base compensation is unspecified are put at the end of search results.
-   `"annualized_base_compensation desc"`: By job's \[CompensationInfo.annualized\_base\_compensation\_range\]\[google.cloud.talent.v4.CompensationInfo.annualized\_base\_compensation\_range\] descending. Jobs whose annualized base compensation is unspecified are put at the end of search results.
-   `"annualized_total_compensation"`: By job's \[CompensationInfo.annualized\_total\_compensation\_range\]\[google.cloud.talent.v4.CompensationInfo.annualized\_total\_compensation\_range\] ascending. Jobs whose annualized base compensation is unspecified are put at the end of search results.
-   `"annualized_total_compensation desc"`: By job's \[CompensationInfo.annualized\_total\_compensation\_range\]\[google.cloud.talent.v4.CompensationInfo.annualized\_total\_compensation\_range\] descending. Jobs whose annualized base compensation is unspecified are put at the end of search results.
-   `"custom_ranking desc"`: By the relevance score adjusted to the \[SearchJobsRequest.CustomRankingInfo.ranking\_expression\]\[google.cloud.talent.v4.SearchJobsRequest.CustomRankingInfo.ranking\_expression\] with weight factor assigned by \[SearchJobsRequest.CustomRankingInfo.importance\_level\]\[google.cloud.talent.v4.SearchJobsRequest.CustomRankingInfo.importance\_level\] in descending order.
-   Location sorting: Use the special syntax to order jobs by distance:<br> `"distance_from('Hawaii')"`: Order by distance from Hawaii.<br> `"distance_from(19.89, 155.5)"`: Order by distance from a coordinate.<br> `"distance_from('Hawaii'), distance_from('Puerto Rico')"`: Order by multiple locations. See details below.<br> `"distance_from('Hawaii'), distance_from(19.89, 155.5)"`: Order by multiple locations. See details below.<br> The string can have a maximum of 256 characters. When multiple distance centers are provided, a job that is close to any of the distance centers would have a high rank. When a job has multiple locations, the job location closest to one of the distance centers will be used. Jobs that don't have locations will be ranked at the bottom. Distance is calculated with a precision of 11.3 meters (37.4 feet). Diversification strategy is still applied unless explicitly disabled in \[diversification\_level\]\[google.cloud.talent.v4.SearchJobsRequest.diversification\_level\].

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### PageToken

```
public string PageToken { get; set; }
```

The token specifying the current offset within search results. See \[SearchJobsResponse.next\_page\_token\]\[google.cloud.talent.v4.SearchJobsResponse.next\_page\_token\] for an explanation of how to obtain the next set of query results.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Parent

```
public string Parent { get; set; }
```

Required. The resource name of the tenant to search within.

The format is "projects/{project\_id}/tenants/{tenant\_id}". For example, "projects/foo/tenants/bar".

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### ParentAsTenantName

```
public TenantName ParentAsTenantName { get; set; }
```

[TenantName](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.3.0/Google.Cloud.Talent.V4.TenantName)\-typed view over the [Parent](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.3.0/Google.Cloud.Talent.V4.SearchJobsRequest#Google_Cloud_Talent_V4_SearchJobsRequest_Parent) resource name property.

**Property Value**

**Type**

**Description**

`[TenantName](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.3.0/Google.Cloud.Talent.V4.TenantName)`

### RequestMetadata

```
public RequestMetadata RequestMetadata { get; set; }
```

Required. The meta information collected about the job searcher, used to improve the search quality of the service. The identifiers (such as `user_id`) are provided by users, and must be unique and consistent.

**Property Value**

**Type**

**Description**

`[RequestMetadata](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.3.0/Google.Cloud.Talent.V4.RequestMetadata)`

### SearchMode

```
public SearchJobsRequest.Types.SearchMode SearchMode { get; set; }
```

Mode of a search.

Defaults to \[SearchMode.JOB\_SEARCH\]\[google.cloud.talent.v4.SearchJobsRequest.SearchMode.JOB\_SEARCH\].

**Property Value**

**Type**

**Description**

`[SearchJobsRequest](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.3.0/Google.Cloud.Talent.V4.SearchJobsRequest)[Types](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.3.0/Google.Cloud.Talent.V4.SearchJobsRequest.Types)[SearchMode](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.3.0/Google.Cloud.Talent.V4.SearchJobsRequest.Types.SearchMode)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.

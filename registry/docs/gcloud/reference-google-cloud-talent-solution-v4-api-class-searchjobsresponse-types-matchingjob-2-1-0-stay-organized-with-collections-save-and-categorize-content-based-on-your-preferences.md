-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Google Cloud Talent Solution v4 API - Class SearchJobsResponse.Types.MatchingJob (2.1.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.1.0keyboard\_arrow\_down

-   [2.8.0 (latest)](/dotnet/docs/reference/Google.Cloud.Talent.V4/latest/Google.Cloud.Talent.V4.SearchJobsResponse.Types.MatchingJob)
-   [2.7.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.7.0/Google.Cloud.Talent.V4.SearchJobsResponse.Types.MatchingJob)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.6.0/Google.Cloud.Talent.V4.SearchJobsResponse.Types.MatchingJob)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.5.0/Google.Cloud.Talent.V4.SearchJobsResponse.Types.MatchingJob)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.4.0/Google.Cloud.Talent.V4.SearchJobsResponse.Types.MatchingJob)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.3.0/Google.Cloud.Talent.V4.SearchJobsResponse.Types.MatchingJob)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.2.0/Google.Cloud.Talent.V4.SearchJobsResponse.Types.MatchingJob)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.1.0/Google.Cloud.Talent.V4.SearchJobsResponse.Types.MatchingJob)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.0.0/Google.Cloud.Talent.V4.SearchJobsResponse.Types.MatchingJob)
-   [1.4.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/1.4.0/Google.Cloud.Talent.V4.SearchJobsResponse.Types.MatchingJob)
-   [1.3.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/1.3.0/Google.Cloud.Talent.V4.SearchJobsResponse.Types.MatchingJob)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/1.2.0/Google.Cloud.Talent.V4.SearchJobsResponse.Types.MatchingJob)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/1.1.0/Google.Cloud.Talent.V4.SearchJobsResponse.Types.MatchingJob)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/1.0.0/Google.Cloud.Talent.V4.SearchJobsResponse.Types.MatchingJob)

```
public sealed class MatchingJob : IMessage<SearchJobsResponse.Types.MatchingJob>, IEquatable<SearchJobsResponse.Types.MatchingJob>, IDeepCloneable<SearchJobsResponse.Types.MatchingJob>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Google Cloud Talent Solution v4 API class SearchJobsResponse.Types.MatchingJob.

Job entry with metadata inside \[SearchJobsResponse\]\[google.cloud.talent.v4.SearchJobsResponse\].

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> SearchJobsResponse.Types.MatchingJob

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)<[SearchJobsResponse.Types.MatchingJob](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.1.0/Google.Cloud.Talent.V4.SearchJobsResponse.Types.MatchingJob)\>, [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)<[SearchJobsResponse.Types.MatchingJob](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.1.0/Google.Cloud.Talent.V4.SearchJobsResponse.Types.MatchingJob)\>, [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)<[SearchJobsResponse.Types.MatchingJob](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.1.0/Google.Cloud.Talent.V4.SearchJobsResponse.Types.MatchingJob)\>, [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.Talent.V4](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.1.0/Google.Cloud.Talent.V4)

## Assembly

Google.Cloud.Talent.V4.dll

## Constructors

### MatchingJob()

```
public MatchingJob()
```

### MatchingJob(SearchJobsResponse.Types.MatchingJob)

```
public MatchingJob(SearchJobsResponse.Types.MatchingJob other)
```

**Parameter**

**Name**

**Description**

`other`

`[SearchJobsResponse.Types.MatchingJob](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.1.0/Google.Cloud.Talent.V4.SearchJobsResponse.Types.MatchingJob)`  

## Properties

### CommuteInfo

```
public SearchJobsResponse.Types.CommuteInfo CommuteInfo { get; set; }
```

Commute information which is generated based on specified \[CommuteFilter\]\[google.cloud.talent.v4.CommuteFilter\].

**Property Value**

**Type**

**Description**

`[SearchJobsResponse.Types.CommuteInfo](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.1.0/Google.Cloud.Talent.V4.SearchJobsResponse.Types.CommuteInfo)`

### Job

```
public Job Job { get; set; }
```

Job resource that matches the specified \[SearchJobsRequest\]\[google.cloud.talent.v4.SearchJobsRequest\].

**Property Value**

**Type**

**Description**

`[Job](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.1.0/Google.Cloud.Talent.V4.Job)`

### JobSummary

```
public string JobSummary { get; set; }
```

A summary of the job with core information that's displayed on the search results listing page.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### JobTitleSnippet

```
public string JobTitleSnippet { get; set; }
```

Contains snippets of text from the \[Job.title\]\[google.cloud.talent.v4.Job.title\] field most closely matching a search query's keywords, if available. The matching query keywords are enclosed in HTML bold tags.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### SearchTextSnippet

```
public string SearchTextSnippet { get; set; }
```

Contains snippets of text from the \[Job.description\]\[google.cloud.talent.v4.Job.description\] and similar fields that most closely match a search query's keywords, if available. All HTML tags in the original fields are stripped when returned in this field, and matching query keywords are enclosed in HTML bold tags.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.

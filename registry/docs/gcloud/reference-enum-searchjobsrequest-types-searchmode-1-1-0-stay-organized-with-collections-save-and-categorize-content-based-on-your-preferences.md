-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Enum SearchJobsRequest.Types.SearchMode (1.1.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.1.0keyboard\_arrow\_down

-   [2.8.0 (latest)](/dotnet/docs/reference/Google.Cloud.Talent.V4/latest/Google.Cloud.Talent.V4.SearchJobsRequest.Types.SearchMode)
-   [2.7.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.7.0/Google.Cloud.Talent.V4.SearchJobsRequest.Types.SearchMode)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.6.0/Google.Cloud.Talent.V4.SearchJobsRequest.Types.SearchMode)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.5.0/Google.Cloud.Talent.V4.SearchJobsRequest.Types.SearchMode)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.4.0/Google.Cloud.Talent.V4.SearchJobsRequest.Types.SearchMode)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.3.0/Google.Cloud.Talent.V4.SearchJobsRequest.Types.SearchMode)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.2.0/Google.Cloud.Talent.V4.SearchJobsRequest.Types.SearchMode)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.1.0/Google.Cloud.Talent.V4.SearchJobsRequest.Types.SearchMode)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.0.0/Google.Cloud.Talent.V4.SearchJobsRequest.Types.SearchMode)
-   [1.4.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/1.4.0/Google.Cloud.Talent.V4.SearchJobsRequest.Types.SearchMode)
-   [1.3.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/1.3.0/Google.Cloud.Talent.V4.SearchJobsRequest.Types.SearchMode)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/1.2.0/Google.Cloud.Talent.V4.SearchJobsRequest.Types.SearchMode)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/1.1.0/Google.Cloud.Talent.V4.SearchJobsRequest.Types.SearchMode)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/1.0.0/Google.Cloud.Talent.V4.SearchJobsRequest.Types.SearchMode)

```
public enum SearchMode
```

A string-represented enumeration of the job search mode. The service operate differently for different modes of service.

## Namespace

[Google.Cloud.Talent.V4](/dotnet/docs/reference/Google.Cloud.Talent.V4/1.1.0/Google.Cloud.Talent.V4)

## Assembly

Google.Cloud.Talent.V4.dll

## Fields

**Name**

**Description**

`FeaturedJobSearch`

The job search matches only against featured jobs (jobs with a promotionValue > 0). This method doesn't return any jobs having a promotionValue <= 0. The search results order is determined by the promotionValue (jobs with a higher promotionValue are returned higher up in the search results), with relevance being used as a tiebreaker.

`JobSearch`

The job search matches against all jobs, and featured jobs (jobs with promotionValue > 0) are not specially handled.

`Unspecified`

The mode of the search method isn't specified. The default search behavior is identical to JOB\_SEARCH search behavior.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.

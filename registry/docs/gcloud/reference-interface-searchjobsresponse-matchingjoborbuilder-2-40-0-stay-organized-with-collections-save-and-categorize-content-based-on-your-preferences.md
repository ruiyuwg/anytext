-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface SearchJobsResponse.MatchingJobOrBuilder (2.40.0) Stay organized with collections Save and categorize content based on your preferences.

2.88.0 (latest) 2.86.0 2.84.0 2.83.0 2.81.0 2.79.0 2.77.0 2.76.0 2.75.0 2.74.0 2.73.0 2.71.0 2.69.0 2.68.0 2.65.0 2.64.0 2.63.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.6 2.2.9

```
public static interface SearchJobsResponse.MatchingJobOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getCommuteInfo()

```
public abstract SearchJobsResponse.CommuteInfo getCommuteInfo()
```

Commute information which is generated based on specified CommuteFilter.

`.google.cloud.talent.v4.SearchJobsResponse.CommuteInfo commute_info = 5;`

**Returns**

**Type**

**Description**

`[SearchJobsResponse.CommuteInfo](/java/docs/reference/google-cloud-talent/2.40.0/com.google.cloud.talent.v4.SearchJobsResponse.CommuteInfo)`

The commuteInfo.

### getCommuteInfoOrBuilder()

```
public abstract SearchJobsResponse.CommuteInfoOrBuilder getCommuteInfoOrBuilder()
```

Commute information which is generated based on specified CommuteFilter.

`.google.cloud.talent.v4.SearchJobsResponse.CommuteInfo commute_info = 5;`

**Returns**

**Type**

**Description**

`[SearchJobsResponse.CommuteInfoOrBuilder](/java/docs/reference/google-cloud-talent/2.40.0/com.google.cloud.talent.v4.SearchJobsResponse.CommuteInfoOrBuilder)`

### getJob()

```
public abstract Job getJob()
```

Job resource that matches the specified SearchJobsRequest.

`.google.cloud.talent.v4.Job job = 1;`

**Returns**

**Type**

**Description**

`[Job](/java/docs/reference/google-cloud-talent/2.40.0/com.google.cloud.talent.v4.Job)`

The job.

### getJobOrBuilder()

```
public abstract JobOrBuilder getJobOrBuilder()
```

Job resource that matches the specified SearchJobsRequest.

`.google.cloud.talent.v4.Job job = 1;`

**Returns**

**Type**

**Description**

`[JobOrBuilder](/java/docs/reference/google-cloud-talent/2.40.0/com.google.cloud.talent.v4.JobOrBuilder)`

### getJobSummary()

```
public abstract String getJobSummary()
```

A summary of the job with core information that's displayed on the search results listing page.

`string job_summary = 2;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The jobSummary.

### getJobSummaryBytes()

```
public abstract ByteString getJobSummaryBytes()
```

A summary of the job with core information that's displayed on the search results listing page.

`string job_summary = 2;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for jobSummary.

### getJobTitleSnippet()

```
public abstract String getJobTitleSnippet()
```

Contains snippets of text from the Job.title field most closely matching a search query's keywords, if available. The matching query keywords are enclosed in HTML bold tags.

`string job_title_snippet = 3;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The jobTitleSnippet.

### getJobTitleSnippetBytes()

```
public abstract ByteString getJobTitleSnippetBytes()
```

Contains snippets of text from the Job.title field most closely matching a search query's keywords, if available. The matching query keywords are enclosed in HTML bold tags.

`string job_title_snippet = 3;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for jobTitleSnippet.

### getSearchTextSnippet()

```
public abstract String getSearchTextSnippet()
```

Contains snippets of text from the Job.description and similar fields that most closely match a search query's keywords, if available. All HTML tags in the original fields are stripped when returned in this field, and matching query keywords are enclosed in HTML bold tags.

`string search_text_snippet = 4;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The searchTextSnippet.

### getSearchTextSnippetBytes()

```
public abstract ByteString getSearchTextSnippetBytes()
```

Contains snippets of text from the Job.description and similar fields that most closely match a search query's keywords, if available. All HTML tags in the original fields are stripped when returned in this field, and matching query keywords are enclosed in HTML bold tags.

`string search_text_snippet = 4;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for searchTextSnippet.

### hasCommuteInfo()

```
public abstract boolean hasCommuteInfo()
```

Commute information which is generated based on specified CommuteFilter.

`.google.cloud.talent.v4.SearchJobsResponse.CommuteInfo commute_info = 5;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the commuteInfo field is set.

### hasJob()

```
public abstract boolean hasJob()
```

Job resource that matches the specified SearchJobsRequest.

`.google.cloud.talent.v4.Job job = 1;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the job field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.

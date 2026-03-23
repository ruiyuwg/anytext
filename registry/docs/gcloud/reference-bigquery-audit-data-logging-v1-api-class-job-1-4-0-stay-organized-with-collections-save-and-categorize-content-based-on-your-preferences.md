-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# BigQuery Audit Data Logging v1 API - Class Job (1.4.0) Stay organized with collections Save and categorize content based on your preferences.

Version latestkeyboard\_arrow\_down

-   [1.4.0 (latest)](/dotnet/docs/reference/Google.Cloud.BigQuery.Logging.V1/latest/Google.Cloud.BigQuery.Logging.V1.Job)
-   [1.3.0](/dotnet/docs/reference/Google.Cloud.BigQuery.Logging.V1/1.3.0/Google.Cloud.BigQuery.Logging.V1.Job)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.BigQuery.Logging.V1/1.2.0/Google.Cloud.BigQuery.Logging.V1.Job)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.BigQuery.Logging.V1/1.1.0/Google.Cloud.BigQuery.Logging.V1.Job)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.BigQuery.Logging.V1/1.0.0/Google.Cloud.BigQuery.Logging.V1.Job)

```
public sealed class Job : IMessage<Job>, IEquatable<Job>, IDeepCloneable<Job>, IBufferMessage, IMessage
```

Reference documentation and code samples for the BigQuery Audit Data Logging v1 API class Job.

Describes a job.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> Job

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[Job](/dotnet/docs/reference/Google.Cloud.BigQuery.Logging.V1/latest/Google.Cloud.BigQuery.Logging.V1.Job), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[Job](/dotnet/docs/reference/Google.Cloud.BigQuery.Logging.V1/latest/Google.Cloud.BigQuery.Logging.V1.Job), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[Job](/dotnet/docs/reference/Google.Cloud.BigQuery.Logging.V1/latest/Google.Cloud.BigQuery.Logging.V1.Job), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.BigQuery.Logging.V1](/dotnet/docs/reference/Google.Cloud.BigQuery.Logging.V1/latest/Google.Cloud.BigQuery.Logging.V1)

## Assembly

Google.Cloud.BigQuery.Logging.V1.dll

## Constructors

### Job()

```
public Job()
```

### Job(Job)

```
public Job(Job other)
```

**Parameter**

**Name**

**Description**

`other`

`[Job](/dotnet/docs/reference/Google.Cloud.BigQuery.Logging.V1/latest/Google.Cloud.BigQuery.Logging.V1.Job)`  

## Properties

### JobConfiguration

```
public JobConfiguration JobConfiguration { get; set; }
```

Job configuration.

**Property Value**

**Type**

**Description**

`[JobConfiguration](/dotnet/docs/reference/Google.Cloud.BigQuery.Logging.V1/latest/Google.Cloud.BigQuery.Logging.V1.JobConfiguration)`

### JobName

```
public JobName JobName { get; set; }
```

Job name.

**Property Value**

**Type**

**Description**

`[JobName](/dotnet/docs/reference/Google.Cloud.BigQuery.Logging.V1/latest/Google.Cloud.BigQuery.Logging.V1.JobName)`

### JobStatistics

```
public JobStatistics JobStatistics { get; set; }
```

Job statistics.

**Property Value**

**Type**

**Description**

`[JobStatistics](/dotnet/docs/reference/Google.Cloud.BigQuery.Logging.V1/latest/Google.Cloud.BigQuery.Logging.V1.JobStatistics)`

### JobStatus

```
public JobStatus JobStatus { get; set; }
```

Job status.

**Property Value**

**Type**

**Description**

`[JobStatus](/dotnet/docs/reference/Google.Cloud.BigQuery.Logging.V1/latest/Google.Cloud.BigQuery.Logging.V1.JobStatus)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.

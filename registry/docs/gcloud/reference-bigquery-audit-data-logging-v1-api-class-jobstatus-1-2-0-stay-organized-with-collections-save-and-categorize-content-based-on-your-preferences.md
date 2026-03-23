-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# BigQuery Audit Data Logging v1 API - Class JobStatus (1.2.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.2.0keyboard\_arrow\_down

-   [1.4.0 (latest)](/dotnet/docs/reference/Google.Cloud.BigQuery.Logging.V1/latest/Google.Cloud.BigQuery.Logging.V1.JobStatus)
-   [1.3.0](/dotnet/docs/reference/Google.Cloud.BigQuery.Logging.V1/1.3.0/Google.Cloud.BigQuery.Logging.V1.JobStatus)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.BigQuery.Logging.V1/1.2.0/Google.Cloud.BigQuery.Logging.V1.JobStatus)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.BigQuery.Logging.V1/1.1.0/Google.Cloud.BigQuery.Logging.V1.JobStatus)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.BigQuery.Logging.V1/1.0.0/Google.Cloud.BigQuery.Logging.V1.JobStatus)

```
public sealed class JobStatus : IMessage<JobStatus>, IEquatable<JobStatus>, IDeepCloneable<JobStatus>, IBufferMessage, IMessage
```

Reference documentation and code samples for the BigQuery Audit Data Logging v1 API class JobStatus.

Running state of a job.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> JobStatus

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[JobStatus](/dotnet/docs/reference/Google.Cloud.BigQuery.Logging.V1/1.2.0/Google.Cloud.BigQuery.Logging.V1.JobStatus), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[JobStatus](/dotnet/docs/reference/Google.Cloud.BigQuery.Logging.V1/1.2.0/Google.Cloud.BigQuery.Logging.V1.JobStatus), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[JobStatus](/dotnet/docs/reference/Google.Cloud.BigQuery.Logging.V1/1.2.0/Google.Cloud.BigQuery.Logging.V1.JobStatus), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.BigQuery.Logging.V1](/dotnet/docs/reference/Google.Cloud.BigQuery.Logging.V1/1.2.0/Google.Cloud.BigQuery.Logging.V1)

## Assembly

Google.Cloud.BigQuery.Logging.V1.dll

## Constructors

### JobStatus()

```
public JobStatus()
```

### JobStatus(JobStatus)

```
public JobStatus(JobStatus other)
```

**Parameter**

**Name**

**Description**

`other`

`[JobStatus](/dotnet/docs/reference/Google.Cloud.BigQuery.Logging.V1/1.2.0/Google.Cloud.BigQuery.Logging.V1.JobStatus)`  

## Properties

### AdditionalErrors

```
public RepeatedField<Status> AdditionalErrors { get; }
```

Errors encountered during the running of the job. Do not necessarily mean that the job has completed or was unsuccessful.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[Status](https://github.com/googleapis/gax-dotnet/blob/c093bb0dfda4fafe4484fe06586b6cb68d1623f1/Google.Api.CommonProtos/Rpc/Status.g.cs)`

### Error

```
public Status Error { get; set; }
```

If the job did not complete successfully, this field describes why.

**Property Value**

**Type**

**Description**

`[Status](https://github.com/googleapis/gax-dotnet/blob/c093bb0dfda4fafe4484fe06586b6cb68d1623f1/Google.Api.CommonProtos/Rpc/Status.g.cs)`

### State

```
public string State { get; set; }
```

State of a job: `PENDING`, `RUNNING`, or `DONE`.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.

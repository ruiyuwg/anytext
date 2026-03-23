-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Batch v1alpha API - Class JobStatus (1.0.0-alpha33) Stay organized with collections Save and categorize content based on your preferences.

Version latestkeyboard\_arrow\_down

-   [1.0.0-alpha33 (latest)](/dotnet/docs/reference/Google.Cloud.Batch.V1Alpha/latest/Google.Cloud.Batch.V1Alpha.JobStatus)
-   [1.0.0-alpha32](/dotnet/docs/reference/Google.Cloud.Batch.V1Alpha/1.0.0-alpha32/Google.Cloud.Batch.V1Alpha.JobStatus)

```
public sealed class JobStatus : IMessage<JobStatus>, IEquatable<JobStatus>, IDeepCloneable<JobStatus>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Batch v1alpha API class JobStatus.

Job status.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> JobStatus

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[JobStatus](/dotnet/docs/reference/Google.Cloud.Batch.V1Alpha/latest/Google.Cloud.Batch.V1Alpha.JobStatus), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[JobStatus](/dotnet/docs/reference/Google.Cloud.Batch.V1Alpha/latest/Google.Cloud.Batch.V1Alpha.JobStatus), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[JobStatus](/dotnet/docs/reference/Google.Cloud.Batch.V1Alpha/latest/Google.Cloud.Batch.V1Alpha.JobStatus), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Batch.V1Alpha](/dotnet/docs/reference/Google.Cloud.Batch.V1Alpha/latest/Google.Cloud.Batch.V1Alpha)

## Assembly

Google.Cloud.Batch.V1Alpha.dll

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

`[JobStatus](/dotnet/docs/reference/Google.Cloud.Batch.V1Alpha/latest/Google.Cloud.Batch.V1Alpha.JobStatus)`  

## Properties

### ResourceUsage

```
public ResourceUsage ResourceUsage { get; set; }
```

The resource usage of the job.

**Property Value**

**Type**

**Description**

`[ResourceUsage](/dotnet/docs/reference/Google.Cloud.Batch.V1Alpha/latest/Google.Cloud.Batch.V1Alpha.ResourceUsage)`

### RunDuration

```
public Duration RunDuration { get; set; }
```

The duration of time that the Job spent in status RUNNING.

**Property Value**

**Type**

**Description**

`[Duration](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Duration.html)`

### State

```
public JobStatus.Types.State State { get; set; }
```

Job state

**Property Value**

**Type**

**Description**

`[JobStatus](/dotnet/docs/reference/Google.Cloud.Batch.V1Alpha/latest/Google.Cloud.Batch.V1Alpha.JobStatus)[Types](/dotnet/docs/reference/Google.Cloud.Batch.V1Alpha/latest/Google.Cloud.Batch.V1Alpha.JobStatus.Types)[State](/dotnet/docs/reference/Google.Cloud.Batch.V1Alpha/latest/Google.Cloud.Batch.V1Alpha.JobStatus.Types.State)`

### StatusEvents

```
public RepeatedField<StatusEvent> StatusEvents { get; }
```

Job status events

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[StatusEvent](/dotnet/docs/reference/Google.Cloud.Batch.V1Alpha/latest/Google.Cloud.Batch.V1Alpha.StatusEvent)`

### TaskGroups

```
public MapField<string, JobStatus.Types.TaskGroupStatus> TaskGroups { get; }
```

Aggregated task status for each TaskGroup in the Job. The map key is TaskGroup ID.

**Property Value**

**Type**

**Description**

`[MapField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.MapField-2.html)[string](https://learn.microsoft.com/dotnet/api/system.string)[JobStatus](/dotnet/docs/reference/Google.Cloud.Batch.V1Alpha/latest/Google.Cloud.Batch.V1Alpha.JobStatus)[Types](/dotnet/docs/reference/Google.Cloud.Batch.V1Alpha/latest/Google.Cloud.Batch.V1Alpha.JobStatus.Types)[TaskGroupStatus](/dotnet/docs/reference/Google.Cloud.Batch.V1Alpha/latest/Google.Cloud.Batch.V1Alpha.JobStatus.Types.TaskGroupStatus)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.

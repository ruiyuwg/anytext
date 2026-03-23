-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Cloud Run Admin v2 API - Class EmptyDirVolumeSource (2.6.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.6.0keyboard\_arrow\_down

-   [2.19.0 (latest)](/dotnet/docs/reference/Google.Cloud.Run.V2/latest/Google.Cloud.Run.V2.EmptyDirVolumeSource)
-   [2.18.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.18.0/Google.Cloud.Run.V2.EmptyDirVolumeSource)
-   [2.17.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.17.0/Google.Cloud.Run.V2.EmptyDirVolumeSource)
-   [2.16.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.16.0/Google.Cloud.Run.V2.EmptyDirVolumeSource)
-   [2.15.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.15.0/Google.Cloud.Run.V2.EmptyDirVolumeSource)
-   [2.14.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.14.0/Google.Cloud.Run.V2.EmptyDirVolumeSource)
-   [2.13.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.13.0/Google.Cloud.Run.V2.EmptyDirVolumeSource)
-   [2.12.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.12.0/Google.Cloud.Run.V2.EmptyDirVolumeSource)
-   [2.11.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.11.0/Google.Cloud.Run.V2.EmptyDirVolumeSource)
-   [2.10.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.10.0/Google.Cloud.Run.V2.EmptyDirVolumeSource)
-   [2.9.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.9.0/Google.Cloud.Run.V2.EmptyDirVolumeSource)
-   [2.8.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.8.0/Google.Cloud.Run.V2.EmptyDirVolumeSource)
-   [2.7.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.7.0/Google.Cloud.Run.V2.EmptyDirVolumeSource)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.EmptyDirVolumeSource)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.5.0/Google.Cloud.Run.V2.EmptyDirVolumeSource)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.4.0/Google.Cloud.Run.V2.EmptyDirVolumeSource)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.3.0/Google.Cloud.Run.V2.EmptyDirVolumeSource)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.2.0/Google.Cloud.Run.V2.EmptyDirVolumeSource)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.1.0/Google.Cloud.Run.V2.EmptyDirVolumeSource)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.Run.V2/2.0.0/Google.Cloud.Run.V2.EmptyDirVolumeSource)
-   [1.0.0-beta02](/dotnet/docs/reference/Google.Cloud.Run.V2/1.0.0-beta02/Google.Cloud.Run.V2.EmptyDirVolumeSource)

```
public sealed class EmptyDirVolumeSource : IMessage<EmptyDirVolumeSource>, IEquatable<EmptyDirVolumeSource>, IDeepCloneable<EmptyDirVolumeSource>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Cloud Run Admin v2 API class EmptyDirVolumeSource.

In memory (tmpfs) ephemeral storage. It is ephemeral in the sense that when the sandbox is taken down, the data is destroyed with it (it does not persist across sandbox runs).

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> EmptyDirVolumeSource

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[EmptyDirVolumeSource](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.EmptyDirVolumeSource), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[EmptyDirVolumeSource](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.EmptyDirVolumeSource), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[EmptyDirVolumeSource](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.EmptyDirVolumeSource), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Run.V2](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2)

## Assembly

Google.Cloud.Run.V2.dll

## Constructors

### EmptyDirVolumeSource()

```
public EmptyDirVolumeSource()
```

### EmptyDirVolumeSource(EmptyDirVolumeSource)

```
public EmptyDirVolumeSource(EmptyDirVolumeSource other)
```

**Parameter**

**Name**

**Description**

`other`

`[EmptyDirVolumeSource](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.EmptyDirVolumeSource)`  

## Properties

### Medium

```
public EmptyDirVolumeSource.Types.Medium Medium { get; set; }
```

The medium on which the data is stored. Acceptable values today is only MEMORY or none. When none, the default will currently be backed by memory but could change over time. +optional

**Property Value**

**Type**

**Description**

`[EmptyDirVolumeSource](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.EmptyDirVolumeSource)[Types](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.EmptyDirVolumeSource.Types)[Medium](/dotnet/docs/reference/Google.Cloud.Run.V2/2.6.0/Google.Cloud.Run.V2.EmptyDirVolumeSource.Types.Medium)`

### SizeLimit

```
public string SizeLimit { get; set; }
```

Limit on the storage usable by this EmptyDir volume. The size limit is also applicable for memory medium. The maximum usage on memory medium EmptyDir would be the minimum value between the SizeLimit specified here and the sum of memory limits of all containers. The default is nil which means that the limit is undefined. More info: [https://cloud.google.com/run/docs/configuring/in-memory-volumes#configure-volume](https://cloud.google.com/run/docs/configuring/in-memory-volumes#configure-volume). Info in Kubernetes: [https://kubernetes.io/docs/concepts/storage/volumes/#emptydir](https://kubernetes.io/docs/concepts/storage/volumes/#emptydir)

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.

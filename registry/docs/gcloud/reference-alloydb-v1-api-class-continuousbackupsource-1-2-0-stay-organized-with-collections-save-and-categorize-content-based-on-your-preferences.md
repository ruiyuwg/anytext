-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# AlloyDB v1 API - Class ContinuousBackupSource (1.2.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.2.0keyboard\_arrow\_down

-   [1.14.0 (latest)](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/latest/Google.Cloud.AlloyDb.V1.ContinuousBackupSource)
-   [1.13.0](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.13.0/Google.Cloud.AlloyDb.V1.ContinuousBackupSource)
-   [1.12.0](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.12.0/Google.Cloud.AlloyDb.V1.ContinuousBackupSource)
-   [1.11.0](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.11.0/Google.Cloud.AlloyDb.V1.ContinuousBackupSource)
-   [1.10.0](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.10.0/Google.Cloud.AlloyDb.V1.ContinuousBackupSource)
-   [1.9.0](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.9.0/Google.Cloud.AlloyDb.V1.ContinuousBackupSource)
-   [1.8.0](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.8.0/Google.Cloud.AlloyDb.V1.ContinuousBackupSource)
-   [1.7.0](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.7.0/Google.Cloud.AlloyDb.V1.ContinuousBackupSource)
-   [1.6.0](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.6.0/Google.Cloud.AlloyDb.V1.ContinuousBackupSource)
-   [1.5.0](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.5.0/Google.Cloud.AlloyDb.V1.ContinuousBackupSource)
-   [1.4.0](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.4.0/Google.Cloud.AlloyDb.V1.ContinuousBackupSource)
-   [1.3.0](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.3.0/Google.Cloud.AlloyDb.V1.ContinuousBackupSource)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.2.0/Google.Cloud.AlloyDb.V1.ContinuousBackupSource)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.1.0/Google.Cloud.AlloyDb.V1.ContinuousBackupSource)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.0.0/Google.Cloud.AlloyDb.V1.ContinuousBackupSource)

```
public sealed class ContinuousBackupSource : IMessage<ContinuousBackupSource>, IEquatable<ContinuousBackupSource>, IDeepCloneable<ContinuousBackupSource>, IBufferMessage, IMessage
```

Reference documentation and code samples for the AlloyDB v1 API class ContinuousBackupSource.

Message describing a ContinuousBackupSource.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> ContinuousBackupSource

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[ContinuousBackupSource](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.2.0/Google.Cloud.AlloyDb.V1.ContinuousBackupSource), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[ContinuousBackupSource](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.2.0/Google.Cloud.AlloyDb.V1.ContinuousBackupSource), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[ContinuousBackupSource](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.2.0/Google.Cloud.AlloyDb.V1.ContinuousBackupSource), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.AlloyDb.V1](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.2.0/Google.Cloud.AlloyDb.V1)

## Assembly

Google.Cloud.AlloyDb.V1.dll

## Constructors

### ContinuousBackupSource()

```
public ContinuousBackupSource()
```

### ContinuousBackupSource(ContinuousBackupSource)

```
public ContinuousBackupSource(ContinuousBackupSource other)
```

**Parameter**

**Name**

**Description**

`other`

`[ContinuousBackupSource](/dotnet/docs/reference/Google.Cloud.AlloyDb.V1/1.2.0/Google.Cloud.AlloyDb.V1.ContinuousBackupSource)`  

## Properties

### Cluster

```
public string Cluster { get; set; }
```

Required. The source cluster from which to restore. This cluster must have continuous backup enabled for this operation to succeed. For the required format, see the comment on the Cluster.name field.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### PointInTime

```
public Timestamp PointInTime { get; set; }
```

Required. The point in time to restore to.

**Property Value**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Timestamp.html)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.

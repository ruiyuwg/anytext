-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Cloud Dataplex v1 API - Class EntrySource.Types.Ancestor (3.6.0) Stay organized with collections Save and categorize content based on your preferences.

3.13.0 (latest) 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.0.0

```
public sealed class EntrySource.Types.Ancestor : IMessage<EntrySource.Types.Ancestor>, IEquatable<EntrySource.Types.Ancestor>, IDeepCloneable<EntrySource.Types.Ancestor>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Cloud Dataplex v1 API class EntrySource.Types.Ancestor.

Information about individual items in the hierarchy that is associated with the data resource.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> EntrySource.Types.Ancestor

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[EntrySource](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.6.0/Google.Cloud.Dataplex.V1.EntrySource)[Types](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.6.0/Google.Cloud.Dataplex.V1.EntrySource.Types)[Ancestor](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.6.0/Google.Cloud.Dataplex.V1.EntrySource.Types.Ancestor), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[EntrySource](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.6.0/Google.Cloud.Dataplex.V1.EntrySource)[Types](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.6.0/Google.Cloud.Dataplex.V1.EntrySource.Types)[Ancestor](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.6.0/Google.Cloud.Dataplex.V1.EntrySource.Types.Ancestor), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[EntrySource](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.6.0/Google.Cloud.Dataplex.V1.EntrySource)[Types](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.6.0/Google.Cloud.Dataplex.V1.EntrySource.Types)[Ancestor](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.6.0/Google.Cloud.Dataplex.V1.EntrySource.Types.Ancestor), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Dataplex.V1](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.6.0/Google.Cloud.Dataplex.V1)

## Assembly

Google.Cloud.Dataplex.V1.dll

## Constructors

### Ancestor()

```
public Ancestor()
```

### Ancestor(Ancestor)

```
public Ancestor(EntrySource.Types.Ancestor other)
```

**Parameter**

**Name**

**Description**

`other`

`[EntrySource](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.6.0/Google.Cloud.Dataplex.V1.EntrySource)[Types](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.6.0/Google.Cloud.Dataplex.V1.EntrySource.Types)[Ancestor](/dotnet/docs/reference/Google.Cloud.Dataplex.V1/3.6.0/Google.Cloud.Dataplex.V1.EntrySource.Types.Ancestor)`  

## Properties

### Name

```
public string Name { get; set; }
```

Optional. The name of the ancestor resource.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Type

```
public string Type { get; set; }
```

Optional. The type of the ancestor resource.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.

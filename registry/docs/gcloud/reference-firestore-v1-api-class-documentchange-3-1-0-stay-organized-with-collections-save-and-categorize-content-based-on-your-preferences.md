-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Firestore v1 API - Class DocumentChange (3.1.0) Stay organized with collections Save and categorize content based on your preferences.

Version 3.1.0keyboard\_arrow\_down

-   [4.2.0 (latest)](/dotnet/docs/reference/Google.Cloud.Firestore.V1/latest/Google.Cloud.Firestore.V1.DocumentChange)
-   [4.1.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/4.1.0/Google.Cloud.Firestore.V1.DocumentChange)
-   [4.0.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/4.0.0/Google.Cloud.Firestore.V1.DocumentChange)
-   [3.13.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.13.0/Google.Cloud.Firestore.V1.DocumentChange)
-   [3.12.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.12.0/Google.Cloud.Firestore.V1.DocumentChange)
-   [3.11.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.11.0/Google.Cloud.Firestore.V1.DocumentChange)
-   [3.10.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.10.0/Google.Cloud.Firestore.V1.DocumentChange)
-   [3.9.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.9.0/Google.Cloud.Firestore.V1.DocumentChange)
-   [3.8.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.8.0/Google.Cloud.Firestore.V1.DocumentChange)
-   [3.7.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.7.0/Google.Cloud.Firestore.V1.DocumentChange)
-   [3.6.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.6.0/Google.Cloud.Firestore.V1.DocumentChange)
-   [3.5.1](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.5.1/Google.Cloud.Firestore.V1.DocumentChange)
-   [3.4.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.4.0/Google.Cloud.Firestore.V1.DocumentChange)
-   [3.3.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.3.0/Google.Cloud.Firestore.V1.DocumentChange)
-   [3.2.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.2.0/Google.Cloud.Firestore.V1.DocumentChange)
-   [3.1.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.1.0/Google.Cloud.Firestore.V1.DocumentChange)
-   [3.0.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.0.0/Google.Cloud.Firestore.V1.DocumentChange)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/2.5.0/Google.Cloud.Firestore.V1.DocumentChange)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/2.4.0/Google.Cloud.Firestore.V1.DocumentChange)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/2.3.0/Google.Cloud.Firestore.V1.DocumentChange)

```
public sealed class DocumentChange : IMessage<DocumentChange>, IEquatable<DocumentChange>, IDeepCloneable<DocumentChange>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Firestore v1 API class DocumentChange.

A \[Document\]\[google.firestore.v1.Document\] has changed.

May be the result of multiple \[writes\]\[google.firestore.v1.Write\], including deletes, that ultimately resulted in a new value for the \[Document\]\[google.firestore.v1.Document\].

Multiple \[DocumentChange\]\[google.firestore.v1.DocumentChange\] messages may be returned for the same logical change, if multiple targets are affected.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> DocumentChange

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[DocumentChange](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.1.0/Google.Cloud.Firestore.V1.DocumentChange), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[DocumentChange](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.1.0/Google.Cloud.Firestore.V1.DocumentChange), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[DocumentChange](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.1.0/Google.Cloud.Firestore.V1.DocumentChange), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google](https://cloud.google.com/dotnet/docs/reference/Google.Apis/latest/Google.html)[Cloud](https://cloud.google.com/dotnet/docs/reference/Google.LongRunning/latest/Google.Cloud.html)Google.Cloud.Firestore[V1](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.1.0/Google.Cloud.Firestore.V1)

## Assembly

Google.Cloud.Firestore.V1.dll

## Constructors

### DocumentChange()

```
public DocumentChange()
```

### DocumentChange(DocumentChange)

```
public DocumentChange(DocumentChange other)
```

**Parameter**

**Name**

**Description**

`other`

`[DocumentChange](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.1.0/Google.Cloud.Firestore.V1.DocumentChange)`  

## Properties

### Document

```
public Document Document { get; set; }
```

The new state of the \[Document\]\[google.firestore.v1.Document\].

If `mask` is set, contains only fields that were updated or added.

**Property Value**

**Type**

**Description**

`[Document](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.1.0/Google.Cloud.Firestore.V1.Document)`

### RemovedTargetIds

```
public RepeatedField<int> RemovedTargetIds { get; }
```

A set of target IDs for targets that no longer match this document.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[int](https://learn.microsoft.com/dotnet/api/system.int32)`

### TargetIds

```
public RepeatedField<int> TargetIds { get; }
```

A set of target IDs of targets that match this document.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[int](https://learn.microsoft.com/dotnet/api/system.int32)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.

-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Firestore v1 API - Class WriteResult (3.9.0) Stay organized with collections Save and categorize content based on your preferences.

Version 3.9.0keyboard\_arrow\_down

-   [4.2.0 (latest)](/dotnet/docs/reference/Google.Cloud.Firestore.V1/latest/Google.Cloud.Firestore.V1.WriteResult)
-   [4.1.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/4.1.0/Google.Cloud.Firestore.V1.WriteResult)
-   [4.0.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/4.0.0/Google.Cloud.Firestore.V1.WriteResult)
-   [3.13.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.13.0/Google.Cloud.Firestore.V1.WriteResult)
-   [3.12.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.12.0/Google.Cloud.Firestore.V1.WriteResult)
-   [3.11.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.11.0/Google.Cloud.Firestore.V1.WriteResult)
-   [3.10.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.10.0/Google.Cloud.Firestore.V1.WriteResult)
-   [3.9.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.9.0/Google.Cloud.Firestore.V1.WriteResult)
-   [3.8.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.8.0/Google.Cloud.Firestore.V1.WriteResult)
-   [3.7.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.7.0/Google.Cloud.Firestore.V1.WriteResult)
-   [3.6.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.6.0/Google.Cloud.Firestore.V1.WriteResult)
-   [3.5.1](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.5.1/Google.Cloud.Firestore.V1.WriteResult)
-   [3.4.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.4.0/Google.Cloud.Firestore.V1.WriteResult)
-   [3.3.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.3.0/Google.Cloud.Firestore.V1.WriteResult)
-   [3.2.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.2.0/Google.Cloud.Firestore.V1.WriteResult)
-   [3.1.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.1.0/Google.Cloud.Firestore.V1.WriteResult)
-   [3.0.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.0.0/Google.Cloud.Firestore.V1.WriteResult)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/2.5.0/Google.Cloud.Firestore.V1.WriteResult)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/2.4.0/Google.Cloud.Firestore.V1.WriteResult)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.Firestore.V1/2.3.0/Google.Cloud.Firestore.V1.WriteResult)

```
public sealed class WriteResult : IMessage<WriteResult>, IEquatable<WriteResult>, IDeepCloneable<WriteResult>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Firestore v1 API class WriteResult.

The result of applying a write.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> WriteResult

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[WriteResult](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.9.0/Google.Cloud.Firestore.V1.WriteResult), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[WriteResult](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.9.0/Google.Cloud.Firestore.V1.WriteResult), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[WriteResult](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.9.0/Google.Cloud.Firestore.V1.WriteResult), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Firestore.V1](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.9.0/Google.Cloud.Firestore.V1)

## Assembly

Google.Cloud.Firestore.V1.dll

## Constructors

### WriteResult()

```
public WriteResult()
```

### WriteResult(WriteResult)

```
public WriteResult(WriteResult other)
```

**Parameter**

**Name**

**Description**

`other`

`[WriteResult](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.9.0/Google.Cloud.Firestore.V1.WriteResult)`  

## Properties

### TransformResults

```
public RepeatedField<Value> TransformResults { get; }
```

The results of applying each \[DocumentTransform.FieldTransform\]\[google.firestore.v1.DocumentTransform.FieldTransform\], in the same order.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[Value](/dotnet/docs/reference/Google.Cloud.Firestore.V1/3.9.0/Google.Cloud.Firestore.V1.Value)`

### UpdateTime

```
public Timestamp UpdateTime { get; set; }
```

The last update time of the document after applying the write. Not set after a `delete`.

If the write did not actually change the document, this will be the previous update\_time.

**Property Value**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Timestamp.html)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.

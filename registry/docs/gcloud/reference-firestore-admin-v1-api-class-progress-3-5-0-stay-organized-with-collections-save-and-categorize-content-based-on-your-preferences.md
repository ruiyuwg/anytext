-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Firestore Admin v1 API - Class Progress (3.5.0) Stay organized with collections Save and categorize content based on your preferences.

Version 3.5.0keyboard\_arrow\_down

-   [3.17.0 (latest)](/dotnet/docs/reference/Google.Cloud.Firestore.Admin.V1/latest/Google.Cloud.Firestore.Admin.V1.Progress)
-   [3.16.0](/dotnet/docs/reference/Google.Cloud.Firestore.Admin.V1/3.16.0/Google.Cloud.Firestore.Admin.V1.Progress)
-   [3.15.0](/dotnet/docs/reference/Google.Cloud.Firestore.Admin.V1/3.15.0/Google.Cloud.Firestore.Admin.V1.Progress)
-   [3.14.0](/dotnet/docs/reference/Google.Cloud.Firestore.Admin.V1/3.14.0/Google.Cloud.Firestore.Admin.V1.Progress)
-   [3.13.0](/dotnet/docs/reference/Google.Cloud.Firestore.Admin.V1/3.13.0/Google.Cloud.Firestore.Admin.V1.Progress)
-   [3.12.0](/dotnet/docs/reference/Google.Cloud.Firestore.Admin.V1/3.12.0/Google.Cloud.Firestore.Admin.V1.Progress)
-   [3.11.0](/dotnet/docs/reference/Google.Cloud.Firestore.Admin.V1/3.11.0/Google.Cloud.Firestore.Admin.V1.Progress)
-   [3.10.0](/dotnet/docs/reference/Google.Cloud.Firestore.Admin.V1/3.10.0/Google.Cloud.Firestore.Admin.V1.Progress)
-   [3.9.0](/dotnet/docs/reference/Google.Cloud.Firestore.Admin.V1/3.9.0/Google.Cloud.Firestore.Admin.V1.Progress)
-   [3.8.0](/dotnet/docs/reference/Google.Cloud.Firestore.Admin.V1/3.8.0/Google.Cloud.Firestore.Admin.V1.Progress)
-   [3.7.0](/dotnet/docs/reference/Google.Cloud.Firestore.Admin.V1/3.7.0/Google.Cloud.Firestore.Admin.V1.Progress)
-   [3.6.0](/dotnet/docs/reference/Google.Cloud.Firestore.Admin.V1/3.6.0/Google.Cloud.Firestore.Admin.V1.Progress)
-   [3.5.0](/dotnet/docs/reference/Google.Cloud.Firestore.Admin.V1/3.5.0/Google.Cloud.Firestore.Admin.V1.Progress)
-   [3.4.0](/dotnet/docs/reference/Google.Cloud.Firestore.Admin.V1/3.4.0/Google.Cloud.Firestore.Admin.V1.Progress)
-   [3.3.0](/dotnet/docs/reference/Google.Cloud.Firestore.Admin.V1/3.3.0/Google.Cloud.Firestore.Admin.V1.Progress)
-   [3.2.0](/dotnet/docs/reference/Google.Cloud.Firestore.Admin.V1/3.2.0/Google.Cloud.Firestore.Admin.V1.Progress)
-   [3.1.0](/dotnet/docs/reference/Google.Cloud.Firestore.Admin.V1/3.1.0/Google.Cloud.Firestore.Admin.V1.Progress)
-   [3.0.0](/dotnet/docs/reference/Google.Cloud.Firestore.Admin.V1/3.0.0/Google.Cloud.Firestore.Admin.V1.Progress)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.Firestore.Admin.V1/2.4.0/Google.Cloud.Firestore.Admin.V1.Progress)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.Firestore.Admin.V1/2.3.0/Google.Cloud.Firestore.Admin.V1.Progress)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.Firestore.Admin.V1/2.2.0/Google.Cloud.Firestore.Admin.V1.Progress)

```
public sealed class Progress : IMessage<Progress>, IEquatable<Progress>, IDeepCloneable<Progress>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Firestore Admin v1 API class Progress.

Describes the progress of the operation. Unit of work is generic and must be interpreted based on where \[Progress\]\[google.firestore.admin.v1.Progress\] is used.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> Progress

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[Progress](/dotnet/docs/reference/Google.Cloud.Firestore.Admin.V1/3.5.0/Google.Cloud.Firestore.Admin.V1.Progress), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[Progress](/dotnet/docs/reference/Google.Cloud.Firestore.Admin.V1/3.5.0/Google.Cloud.Firestore.Admin.V1.Progress), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[Progress](/dotnet/docs/reference/Google.Cloud.Firestore.Admin.V1/3.5.0/Google.Cloud.Firestore.Admin.V1.Progress), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Firestore.Admin.V1](/dotnet/docs/reference/Google.Cloud.Firestore.Admin.V1/3.5.0/Google.Cloud.Firestore.Admin.V1)

## Assembly

Google.Cloud.Firestore.Admin.V1.dll

## Constructors

### Progress()

```
public Progress()
```

### Progress(Progress)

```
public Progress(Progress other)
```

**Parameter**

**Name**

**Description**

`other`

`[Progress](/dotnet/docs/reference/Google.Cloud.Firestore.Admin.V1/3.5.0/Google.Cloud.Firestore.Admin.V1.Progress)`  

## Properties

### CompletedWork

```
public long CompletedWork { get; set; }
```

The amount of work completed.

**Property Value**

**Type**

**Description**

`[long](https://learn.microsoft.com/dotnet/api/system.int64)`

### EstimatedWork

```
public long EstimatedWork { get; set; }
```

The amount of work estimated.

**Property Value**

**Type**

**Description**

`[long](https://learn.microsoft.com/dotnet/api/system.int64)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.

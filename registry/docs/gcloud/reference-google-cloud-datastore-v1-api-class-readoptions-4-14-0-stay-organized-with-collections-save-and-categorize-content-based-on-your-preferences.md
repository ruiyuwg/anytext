-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Google Cloud Datastore v1 API - Class ReadOptions (4.14.0) Stay organized with collections Save and categorize content based on your preferences.

Version 4.14.0keyboard\_arrow\_down

-   [5.1.0 (latest)](/dotnet/docs/reference/Google.Cloud.Datastore.V1/latest/Google.Cloud.Datastore.V1.ReadOptions)
-   [5.0.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/5.0.0/Google.Cloud.Datastore.V1.ReadOptions)
-   [4.17.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.17.0/Google.Cloud.Datastore.V1.ReadOptions)
-   [4.16.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.16.0/Google.Cloud.Datastore.V1.ReadOptions)
-   [4.15.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.15.0/Google.Cloud.Datastore.V1.ReadOptions)
-   [4.14.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.14.0/Google.Cloud.Datastore.V1.ReadOptions)
-   [4.13.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.13.0/Google.Cloud.Datastore.V1.ReadOptions)
-   [4.12.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.12.0/Google.Cloud.Datastore.V1.ReadOptions)
-   [4.11.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.11.0/Google.Cloud.Datastore.V1.ReadOptions)
-   [4.10.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.10.0/Google.Cloud.Datastore.V1.ReadOptions)
-   [4.9.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.9.0/Google.Cloud.Datastore.V1.ReadOptions)
-   [4.8.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.8.0/Google.Cloud.Datastore.V1.ReadOptions)
-   [4.7.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.7.0/Google.Cloud.Datastore.V1.ReadOptions)
-   [4.6.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.6.0/Google.Cloud.Datastore.V1.ReadOptions)
-   [4.5.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.5.0/Google.Cloud.Datastore.V1.ReadOptions)
-   [4.4.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.4.0/Google.Cloud.Datastore.V1.ReadOptions)
-   [4.3.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.3.0/Google.Cloud.Datastore.V1.ReadOptions)
-   [4.2.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.2.0/Google.Cloud.Datastore.V1.ReadOptions)
-   [4.1.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.1.0/Google.Cloud.Datastore.V1.ReadOptions)
-   [4.0.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.0.0/Google.Cloud.Datastore.V1.ReadOptions)
-   [3.5.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/3.5.0/Google.Cloud.Datastore.V1.ReadOptions)
-   [3.4.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/3.4.0/Google.Cloud.Datastore.V1.ReadOptions)
-   [3.3.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/3.3.0/Google.Cloud.Datastore.V1.ReadOptions)
-   [3.2.0](/dotnet/docs/reference/Google.Cloud.Datastore.V1/3.2.0/Google.Cloud.Datastore.V1.ReadOptions)

```
public sealed class ReadOptions : IMessage<ReadOptions>, IEquatable<ReadOptions>, IDeepCloneable<ReadOptions>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Google Cloud Datastore v1 API class ReadOptions.

The options shared by read requests.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> ReadOptions

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[ReadOptions](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.14.0/Google.Cloud.Datastore.V1.ReadOptions), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[ReadOptions](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.14.0/Google.Cloud.Datastore.V1.ReadOptions), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[ReadOptions](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.14.0/Google.Cloud.Datastore.V1.ReadOptions), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Datastore.V1](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.14.0/Google.Cloud.Datastore.V1)

## Assembly

Google.Cloud.Datastore.V1.dll

## Constructors

### ReadOptions()

```
public ReadOptions()
```

### ReadOptions(ReadOptions)

```
public ReadOptions(ReadOptions other)
```

**Parameter**

**Name**

**Description**

`other`

`[ReadOptions](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.14.0/Google.Cloud.Datastore.V1.ReadOptions)`  

## Properties

### ConsistencyTypeCase

```
public ReadOptions.ConsistencyTypeOneofCase ConsistencyTypeCase { get; }
```

**Property Value**

**Type**

**Description**

`[ReadOptions](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.14.0/Google.Cloud.Datastore.V1.ReadOptions)[ConsistencyTypeOneofCase](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.14.0/Google.Cloud.Datastore.V1.ReadOptions.ConsistencyTypeOneofCase)`

### HasReadConsistency

```
public bool HasReadConsistency { get; }
```

Gets whether the "read\_consistency" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasTransaction

```
public bool HasTransaction { get; }
```

Gets whether the "transaction" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### NewTransaction

```
public TransactionOptions NewTransaction { get; set; }
```

Options for beginning a new transaction for this request.

The new transaction identifier will be returned in the corresponding response as either \[LookupResponse.transaction\]\[google.datastore.v1.LookupResponse.transaction\] or \[RunQueryResponse.transaction\]\[google.datastore.v1.RunQueryResponse.transaction\].

**Property Value**

**Type**

**Description**

`[TransactionOptions](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.14.0/Google.Cloud.Datastore.V1.TransactionOptions)`

### ReadConsistency

```
public ReadOptions.Types.ReadConsistency ReadConsistency { get; set; }
```

The non-transactional read consistency to use.

**Property Value**

**Type**

**Description**

`[ReadOptions](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.14.0/Google.Cloud.Datastore.V1.ReadOptions)[Types](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.14.0/Google.Cloud.Datastore.V1.ReadOptions.Types)[ReadConsistency](/dotnet/docs/reference/Google.Cloud.Datastore.V1/4.14.0/Google.Cloud.Datastore.V1.ReadOptions.Types.ReadConsistency)`

### ReadTime

```
public Timestamp ReadTime { get; set; }
```

Reads entities as they were at the given time. This value is only supported for Cloud Firestore in Datastore mode.

This must be a microsecond precision timestamp within the past one hour, or if Point-in-Time Recovery is enabled, can additionally be a whole minute timestamp within the past 7 days.

**Property Value**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.WellKnownTypes.Timestamp.html)`

### Transaction

```
public ByteString Transaction { get; set; }
```

The identifier of the transaction in which to read. A transaction identifier is returned by a call to \[Datastore.BeginTransaction\]\[google.datastore.v1.Datastore.BeginTransaction\].

**Property Value**

**Type**

**Description**

`[ByteString](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.ByteString.html)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.

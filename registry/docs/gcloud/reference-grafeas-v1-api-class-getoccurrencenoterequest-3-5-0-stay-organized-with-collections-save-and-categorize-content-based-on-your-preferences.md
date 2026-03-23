-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Grafeas v1 API - Class GetOccurrenceNoteRequest (3.5.0) Stay organized with collections Save and categorize content based on your preferences.

3.15.0 (latest) 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.4.0 2.3.0 2.2.0

```
public sealed class GetOccurrenceNoteRequest : IMessage<GetOccurrenceNoteRequest>, IEquatable<GetOccurrenceNoteRequest>, IDeepCloneable<GetOccurrenceNoteRequest>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Grafeas v1 API class GetOccurrenceNoteRequest.

Request to get the note to which the specified occurrence is attached.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> GetOccurrenceNoteRequest

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[GetOccurrenceNoteRequest](/dotnet/docs/reference/Grafeas.V1/3.5.0/Grafeas.V1.GetOccurrenceNoteRequest), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[GetOccurrenceNoteRequest](/dotnet/docs/reference/Grafeas.V1/3.5.0/Grafeas.V1.GetOccurrenceNoteRequest), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[GetOccurrenceNoteRequest](/dotnet/docs/reference/Grafeas.V1/3.5.0/Grafeas.V1.GetOccurrenceNoteRequest), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Grafeas.V1](/dotnet/docs/reference/Grafeas.V1/3.5.0/Grafeas.V1)

## Assembly

Grafeas.V1.dll

## Constructors

### GetOccurrenceNoteRequest()

```
public GetOccurrenceNoteRequest()
```

### GetOccurrenceNoteRequest(GetOccurrenceNoteRequest)

```
public GetOccurrenceNoteRequest(GetOccurrenceNoteRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[GetOccurrenceNoteRequest](/dotnet/docs/reference/Grafeas.V1/3.5.0/Grafeas.V1.GetOccurrenceNoteRequest)`  

## Properties

### Name

```
public string Name { get; set; }
```

The name of the occurrence in the form of `projects/[PROJECT_ID]/occurrences/[OCCURRENCE_ID]`.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### OccurrenceName

```
public OccurrenceName OccurrenceName { get; set; }
```

[OccurrenceName](/dotnet/docs/reference/Grafeas.V1/3.5.0/Grafeas.V1.OccurrenceName)\-typed view over the [Name](/dotnet/docs/reference/Grafeas.V1/3.5.0/Grafeas.V1.GetOccurrenceNoteRequest#Grafeas_V1_GetOccurrenceNoteRequest_Name) resource name property.

**Property Value**

**Type**

**Description**

`[OccurrenceName](/dotnet/docs/reference/Grafeas.V1/3.5.0/Grafeas.V1.OccurrenceName)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-16 UTC.

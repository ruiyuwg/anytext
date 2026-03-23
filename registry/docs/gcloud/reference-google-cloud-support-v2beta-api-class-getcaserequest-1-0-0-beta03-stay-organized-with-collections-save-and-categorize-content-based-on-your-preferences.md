-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Google Cloud Support v2beta API - Class GetCaseRequest (1.0.0-beta03) Stay organized with collections Save and categorize content based on your preferences.

Version latestkeyboard\_arrow\_down

-   [1.0.0-beta03 (latest)](/dotnet/docs/reference/Google.Cloud.Support.V2Beta/latest/Google.Cloud.Support.V2Beta.GetCaseRequest)
-   [1.0.0-beta02](/dotnet/docs/reference/Google.Cloud.Support.V2Beta/1.0.0-beta02/Google.Cloud.Support.V2Beta.GetCaseRequest)

```
public sealed class GetCaseRequest : IMessage<GetCaseRequest>, IEquatable<GetCaseRequest>, IDeepCloneable<GetCaseRequest>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Google Cloud Support v2beta API class GetCaseRequest.

The request message for the GetCase endpoint.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> GetCaseRequest

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[GetCaseRequest](/dotnet/docs/reference/Google.Cloud.Support.V2Beta/latest/Google.Cloud.Support.V2Beta.GetCaseRequest), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[GetCaseRequest](/dotnet/docs/reference/Google.Cloud.Support.V2Beta/latest/Google.Cloud.Support.V2Beta.GetCaseRequest), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[GetCaseRequest](/dotnet/docs/reference/Google.Cloud.Support.V2Beta/latest/Google.Cloud.Support.V2Beta.GetCaseRequest), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Support.V2Beta](/dotnet/docs/reference/Google.Cloud.Support.V2Beta/latest/Google.Cloud.Support.V2Beta)

## Assembly

Google.Cloud.Support.V2Beta.dll

## Constructors

### GetCaseRequest()

```
public GetCaseRequest()
```

### GetCaseRequest(GetCaseRequest)

```
public GetCaseRequest(GetCaseRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[GetCaseRequest](/dotnet/docs/reference/Google.Cloud.Support.V2Beta/latest/Google.Cloud.Support.V2Beta.GetCaseRequest)`  

## Properties

### CaseName

```
public CaseName CaseName { get; set; }
```

[CaseName](/dotnet/docs/reference/Google.Cloud.Support.V2Beta/latest/Google.Cloud.Support.V2Beta.CaseName)\-typed view over the [Name](/dotnet/docs/reference/Google.Cloud.Support.V2Beta/latest/Google.Cloud.Support.V2Beta.GetCaseRequest#Google_Cloud_Support_V2Beta_GetCaseRequest_Name) resource name property.

**Property Value**

**Type**

**Description**

`[CaseName](/dotnet/docs/reference/Google.Cloud.Support.V2Beta/latest/Google.Cloud.Support.V2Beta.CaseName)`

### Name

```
public string Name { get; set; }
```

Required. The full name of a case to be retrieved.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.

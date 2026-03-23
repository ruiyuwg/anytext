-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class ListEnvironmentsResponse (1.0.0-beta04) Stay organized with collections Save and categorize content based on your preferences.

Version 1.0.0-beta04keyboard\_arrow\_down

-   [2.0.0-beta06 (latest)](/dotnet/docs/reference/Google.Cloud.Notebooks.V1Beta1/latest/Google.Cloud.Notebooks.V1Beta1.ListEnvironmentsResponse)
-   [2.0.0-beta05](/dotnet/docs/reference/Google.Cloud.Notebooks.V1Beta1/2.0.0-beta05/Google.Cloud.Notebooks.V1Beta1.ListEnvironmentsResponse)
-   [1.0.0-beta04](/dotnet/docs/reference/Google.Cloud.Notebooks.V1Beta1/1.0.0-beta04/Google.Cloud.Notebooks.V1Beta1.ListEnvironmentsResponse)

```
public sealed class ListEnvironmentsResponse : IPageResponse<Environment>, IEnumerable<Environment>, IEnumerable, IMessage<ListEnvironmentsResponse>, IEquatable<ListEnvironmentsResponse>, IDeepCloneable<ListEnvironmentsResponse>, IBufferMessage, IMessage
```

Response for listing environments.

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> ListEnvironmentsResponse

## Implements

[IPageResponse](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.IPageResponse-1.html)<[Environment](/dotnet/docs/reference/Google.Cloud.Notebooks.V1Beta1/1.0.0-beta04/Google.Cloud.Notebooks.V1Beta1.Environment)\>, [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)<[Environment](/dotnet/docs/reference/Google.Cloud.Notebooks.V1Beta1/1.0.0-beta04/Google.Cloud.Notebooks.V1Beta1.Environment)\>, [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.ienumerable), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)<[ListEnvironmentsResponse](/dotnet/docs/reference/Google.Cloud.Notebooks.V1Beta1/1.0.0-beta04/Google.Cloud.Notebooks.V1Beta1.ListEnvironmentsResponse)\>, [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)<[ListEnvironmentsResponse](/dotnet/docs/reference/Google.Cloud.Notebooks.V1Beta1/1.0.0-beta04/Google.Cloud.Notebooks.V1Beta1.ListEnvironmentsResponse)\>, [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)<[ListEnvironmentsResponse](/dotnet/docs/reference/Google.Cloud.Notebooks.V1Beta1/1.0.0-beta04/Google.Cloud.Notebooks.V1Beta1.ListEnvironmentsResponse)\>, [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.Notebooks.V1Beta1](/dotnet/docs/reference/Google.Cloud.Notebooks.V1Beta1/1.0.0-beta04/Google.Cloud.Notebooks.V1Beta1)

## Assembly

Google.Cloud.Notebooks.V1Beta1.dll

## Constructors

### ListEnvironmentsResponse()

```
public ListEnvironmentsResponse()
```

### ListEnvironmentsResponse(ListEnvironmentsResponse)

```
public ListEnvironmentsResponse(ListEnvironmentsResponse other)
```

**Parameter**

**Name**

**Description**

`other`

`[ListEnvironmentsResponse](/dotnet/docs/reference/Google.Cloud.Notebooks.V1Beta1/1.0.0-beta04/Google.Cloud.Notebooks.V1Beta1.ListEnvironmentsResponse)`  

## Properties

### Environments

```
public RepeatedField<Environment> Environments { get; }
```

A list of returned environments.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)<[Environment](/dotnet/docs/reference/Google.Cloud.Notebooks.V1Beta1/1.0.0-beta04/Google.Cloud.Notebooks.V1Beta1.Environment)>`

### NextPageToken

```
public string NextPageToken { get; set; }
```

A page token that can be used to continue listing from the last result in the next list call.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### Unreachable

```
public RepeatedField<string> Unreachable { get; }
```

Locations that could not be reached.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)<[String](https://learn.microsoft.com/dotnet/api/system.string)>`

## Methods

### GetEnumerator()

```
public IEnumerator<Environment> GetEnumerator()
```

Returns an enumerator that iterates through the resources in this response.

**Returns**

**Type**

**Description**

`[IEnumerator](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerator-1)<[Environment](/dotnet/docs/reference/Google.Cloud.Notebooks.V1Beta1/1.0.0-beta04/Google.Cloud.Notebooks.V1Beta1.Environment)>`

## Explicit Interface Implementations

### IEnumerable.GetEnumerator()

```
IEnumerator IEnumerable.GetEnumerator()
```

**Returns**

**Type**

**Description**

`[IEnumerator](https://learn.microsoft.com/dotnet/api/system.collections.ienumerator)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.

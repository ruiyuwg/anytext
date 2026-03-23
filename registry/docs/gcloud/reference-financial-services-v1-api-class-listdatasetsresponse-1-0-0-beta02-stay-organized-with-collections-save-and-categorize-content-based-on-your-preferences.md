-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Financial Services v1 API - Class ListDatasetsResponse (1.0.0-beta02) Stay organized with collections Save and categorize content based on your preferences.

Version latestkeyboard\_arrow\_down

-   [1.0.0-beta02 (latest)](/dotnet/docs/reference/Google.Cloud.FinancialServices.V1/latest/Google.Cloud.FinancialServices.V1.ListDatasetsResponse)
-   [1.0.0-beta01](/dotnet/docs/reference/Google.Cloud.FinancialServices.V1/1.0.0-beta01/Google.Cloud.FinancialServices.V1.ListDatasetsResponse)

```
public sealed class ListDatasetsResponse : IPageResponse<Dataset>, IEnumerable<Dataset>, IEnumerable, IMessage<ListDatasetsResponse>, IEquatable<ListDatasetsResponse>, IDeepCloneable<ListDatasetsResponse>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Financial Services v1 API class ListDatasetsResponse.

Response for retrieving a list of Datasets

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> ListDatasetsResponse

## Implements

[IPageResponse](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.IPageResponse-1.html)[Dataset](/dotnet/docs/reference/Google.Cloud.FinancialServices.V1/latest/Google.Cloud.FinancialServices.V1.Dataset), [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)[Dataset](/dotnet/docs/reference/Google.Cloud.FinancialServices.V1/latest/Google.Cloud.FinancialServices.V1.Dataset), [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.ienumerable), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[ListDatasetsResponse](/dotnet/docs/reference/Google.Cloud.FinancialServices.V1/latest/Google.Cloud.FinancialServices.V1.ListDatasetsResponse), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[ListDatasetsResponse](/dotnet/docs/reference/Google.Cloud.FinancialServices.V1/latest/Google.Cloud.FinancialServices.V1.ListDatasetsResponse), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[ListDatasetsResponse](/dotnet/docs/reference/Google.Cloud.FinancialServices.V1/latest/Google.Cloud.FinancialServices.V1.ListDatasetsResponse), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.FinancialServices.V1](/dotnet/docs/reference/Google.Cloud.FinancialServices.V1/latest/Google.Cloud.FinancialServices.V1)

## Assembly

Google.Cloud.FinancialServices.V1.dll

## Constructors

### ListDatasetsResponse()

```
public ListDatasetsResponse()
```

### ListDatasetsResponse(ListDatasetsResponse)

```
public ListDatasetsResponse(ListDatasetsResponse other)
```

**Parameter**

**Name**

**Description**

`other`

`[ListDatasetsResponse](/dotnet/docs/reference/Google.Cloud.FinancialServices.V1/latest/Google.Cloud.FinancialServices.V1.ListDatasetsResponse)`  

## Properties

### Datasets

```
public RepeatedField<Dataset> Datasets { get; }
```

List of Dataset resources

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[Dataset](/dotnet/docs/reference/Google.Cloud.FinancialServices.V1/latest/Google.Cloud.FinancialServices.V1.Dataset)`

### NextPageToken

```
public string NextPageToken { get; set; }
```

This token should be passed to the next ListDatasetsRequest to retrieve the next page of Datasets (empty indicates we are done).

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Unreachable

```
public RepeatedField<string> Unreachable { get; }
```

Locations that could not be reached.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[string](https://learn.microsoft.com/dotnet/api/system.string)`

## Methods

### GetEnumerator()

```
public IEnumerator<Dataset> GetEnumerator()
```

Returns an enumerator that iterates through the resources in this response.

**Returns**

**Type**

**Description**

`[IEnumerator](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerator-1)[Dataset](/dotnet/docs/reference/Google.Cloud.FinancialServices.V1/latest/Google.Cloud.FinancialServices.V1.Dataset)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.

-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Organization Policy v2 API - Class ListPoliciesResponse (2.9.0) Stay organized with collections Save and categorize content based on your preferences.

Version latestkeyboard\_arrow\_down

-   [2.9.0 (latest)](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/latest/Google.Cloud.OrgPolicy.V2.ListPoliciesResponse)
-   [2.8.0](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/2.8.0/Google.Cloud.OrgPolicy.V2.ListPoliciesResponse)
-   [2.7.0](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/2.7.0/Google.Cloud.OrgPolicy.V2.ListPoliciesResponse)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/2.6.0/Google.Cloud.OrgPolicy.V2.ListPoliciesResponse)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/2.5.0/Google.Cloud.OrgPolicy.V2.ListPoliciesResponse)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/2.4.0/Google.Cloud.OrgPolicy.V2.ListPoliciesResponse)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/2.3.0/Google.Cloud.OrgPolicy.V2.ListPoliciesResponse)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/2.2.0/Google.Cloud.OrgPolicy.V2.ListPoliciesResponse)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/2.1.0/Google.Cloud.OrgPolicy.V2.ListPoliciesResponse)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/2.0.0/Google.Cloud.OrgPolicy.V2.ListPoliciesResponse)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/1.2.0/Google.Cloud.OrgPolicy.V2.ListPoliciesResponse)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/1.1.0/Google.Cloud.OrgPolicy.V2.ListPoliciesResponse)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/1.0.0/Google.Cloud.OrgPolicy.V2.ListPoliciesResponse)

```
public sealed class ListPoliciesResponse : IMessage<ListPoliciesResponse>, IEquatable<ListPoliciesResponse>, IDeepCloneable<ListPoliciesResponse>, IBufferMessage, IMessage, IPageResponse<Policy>, IEnumerable<Policy>, IEnumerable
```

Reference documentation and code samples for the Organization Policy v2 API class ListPoliciesResponse.

The response returned from the \[ListPolicies\] \[google.cloud.orgpolicy.v2.OrgPolicy.ListPolicies\] method. It will be empty if no policies are set on the resource.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> ListPoliciesResponse

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[ListPoliciesResponse](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/latest/Google.Cloud.OrgPolicy.V2.ListPoliciesResponse), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[ListPoliciesResponse](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/latest/Google.Cloud.OrgPolicy.V2.ListPoliciesResponse), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[ListPoliciesResponse](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/latest/Google.Cloud.OrgPolicy.V2.ListPoliciesResponse), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html), [IPageResponse](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.IPageResponse-1.html)[Policy](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/latest/Google.Cloud.OrgPolicy.V2.Policy), [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)[Policy](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/latest/Google.Cloud.OrgPolicy.V2.Policy), [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.ienumerable)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.OrgPolicy.V2](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/latest/Google.Cloud.OrgPolicy.V2)

## Assembly

Google.Cloud.OrgPolicy.V2.dll

## Constructors

### ListPoliciesResponse()

```
public ListPoliciesResponse()
```

### ListPoliciesResponse(ListPoliciesResponse)

```
public ListPoliciesResponse(ListPoliciesResponse other)
```

**Parameter**

**Name**

**Description**

`other`

`[ListPoliciesResponse](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/latest/Google.Cloud.OrgPolicy.V2.ListPoliciesResponse)`  

## Properties

### NextPageToken

```
public string NextPageToken { get; set; }
```

Page token used to retrieve the next page. This is currently not used, but the server may at any point start supplying a valid token.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Policies

```
public RepeatedField<Policy> Policies { get; }
```

All policies that exist on the resource. It will be empty if no policies are set.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[Policy](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/latest/Google.Cloud.OrgPolicy.V2.Policy)`

## Methods

### GetEnumerator()

```
public IEnumerator<Policy> GetEnumerator()
```

Returns an enumerator that iterates through the resources in this response.

**Returns**

**Type**

**Description**

`[IEnumerator](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerator-1)[Policy](/dotnet/docs/reference/Google.Cloud.OrgPolicy.V2/latest/Google.Cloud.OrgPolicy.V2.Policy)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.

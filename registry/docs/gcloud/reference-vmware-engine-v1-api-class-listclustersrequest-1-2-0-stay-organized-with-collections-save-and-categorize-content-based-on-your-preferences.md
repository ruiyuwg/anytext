-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# VMware Engine v1 API - Class ListClustersRequest (1.2.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.2.0keyboard\_arrow\_down

-   [1.7.0 (latest)](/dotnet/docs/reference/Google.Cloud.VmwareEngine.V1/latest/Google.Cloud.VmwareEngine.V1.ListClustersRequest)
-   [1.6.0](/dotnet/docs/reference/Google.Cloud.VmwareEngine.V1/1.6.0/Google.Cloud.VmwareEngine.V1.ListClustersRequest)
-   [1.5.0](/dotnet/docs/reference/Google.Cloud.VmwareEngine.V1/1.5.0/Google.Cloud.VmwareEngine.V1.ListClustersRequest)
-   [1.4.0](/dotnet/docs/reference/Google.Cloud.VmwareEngine.V1/1.4.0/Google.Cloud.VmwareEngine.V1.ListClustersRequest)
-   [1.3.0](/dotnet/docs/reference/Google.Cloud.VmwareEngine.V1/1.3.0/Google.Cloud.VmwareEngine.V1.ListClustersRequest)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.VmwareEngine.V1/1.2.0/Google.Cloud.VmwareEngine.V1.ListClustersRequest)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.VmwareEngine.V1/1.1.0/Google.Cloud.VmwareEngine.V1.ListClustersRequest)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.VmwareEngine.V1/1.0.0/Google.Cloud.VmwareEngine.V1.ListClustersRequest)

```
public sealed class ListClustersRequest : IMessage<ListClustersRequest>, IEquatable<ListClustersRequest>, IDeepCloneable<ListClustersRequest>, IBufferMessage, IMessage, IPageRequest
```

Reference documentation and code samples for the VMware Engine v1 API class ListClustersRequest.

Request message for \[VmwareEngine.ListClusters\]\[google.cloud.vmwareengine.v1.VmwareEngine.ListClusters\]

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> ListClustersRequest

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[ListClustersRequest](/dotnet/docs/reference/Google.Cloud.VmwareEngine.V1/1.2.0/Google.Cloud.VmwareEngine.V1.ListClustersRequest), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[ListClustersRequest](/dotnet/docs/reference/Google.Cloud.VmwareEngine.V1/1.2.0/Google.Cloud.VmwareEngine.V1.ListClustersRequest), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[ListClustersRequest](/dotnet/docs/reference/Google.Cloud.VmwareEngine.V1/1.2.0/Google.Cloud.VmwareEngine.V1.ListClustersRequest), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html), [IPageRequest](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax.Grpc/PagedEnumerableCommon.cs)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.VmwareEngine.V1](/dotnet/docs/reference/Google.Cloud.VmwareEngine.V1/1.2.0/Google.Cloud.VmwareEngine.V1)

## Assembly

Google.Cloud.VmwareEngine.V1.dll

## Constructors

### ListClustersRequest()

```
public ListClustersRequest()
```

### ListClustersRequest(ListClustersRequest)

```
public ListClustersRequest(ListClustersRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[ListClustersRequest](/dotnet/docs/reference/Google.Cloud.VmwareEngine.V1/1.2.0/Google.Cloud.VmwareEngine.V1.ListClustersRequest)`  

## Properties

### Filter

```
public string Filter { get; set; }
```

To filter on multiple expressions, provide each separate expression within parentheses. For example:

```
(name = "example-cluster")
(nodeCount = "3")
```

By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example:

```
(name = "example-cluster-1") AND
(createTime > "2021-04-12T08:15:10.40Z") OR
(name = "example-cluster-2")
```

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### OrderBy

```
public string OrderBy { get; set; }
```

Sorts list results by a certain order. By default, returned results are ordered by `name` in ascending order. You can also sort results in descending order based on the `name` value using `orderBy="name desc"`. Currently, only ordering by `name` is supported.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### PageSize

```
public int PageSize { get; set; }
```

The maximum number of clusters to return in one page. The service may return fewer than this value. The maximum value is coerced to 1000. The default value of this field is 500.

**Property Value**

**Type**

**Description**

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`

### PageToken

```
public string PageToken { get; set; }
```

A page token, received from a previous `ListClusters` call. Provide this to retrieve the subsequent page.

When paginating, all other parameters provided to `ListClusters` must match the call that provided the page token.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Parent

```
public string Parent { get; set; }
```

Required. The resource name of the private cloud to query for clusters. Resource names are schemeless URIs that follow the conventions in [https://cloud.google.com/apis/design/resource\_names](https://cloud.google.com/apis/design/resource_names). For example: `projects/my-project/locations/us-central1-a/privateClouds/my-cloud`

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### ParentAsPrivateCloudName

```
public PrivateCloudName ParentAsPrivateCloudName { get; set; }
```

[PrivateCloudName](/dotnet/docs/reference/Google.Cloud.VmwareEngine.V1/1.2.0/Google.Cloud.VmwareEngine.V1.PrivateCloudName)\-typed view over the [Parent](/dotnet/docs/reference/Google.Cloud.VmwareEngine.V1/1.2.0/Google.Cloud.VmwareEngine.V1.ListClustersRequest#Google_Cloud_VmwareEngine_V1_ListClustersRequest_Parent) resource name property.

**Property Value**

**Type**

**Description**

`[PrivateCloudName](/dotnet/docs/reference/Google.Cloud.VmwareEngine.V1/1.2.0/Google.Cloud.VmwareEngine.V1.PrivateCloudName)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.

-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# VMware Engine v1 API - Class ListExternalAccessRulesRequest (1.1.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.1.0keyboard\_arrow\_down

-   [1.7.0 (latest)](/dotnet/docs/reference/Google.Cloud.VmwareEngine.V1/latest/Google.Cloud.VmwareEngine.V1.ListExternalAccessRulesRequest)
-   [1.6.0](/dotnet/docs/reference/Google.Cloud.VmwareEngine.V1/1.6.0/Google.Cloud.VmwareEngine.V1.ListExternalAccessRulesRequest)
-   [1.5.0](/dotnet/docs/reference/Google.Cloud.VmwareEngine.V1/1.5.0/Google.Cloud.VmwareEngine.V1.ListExternalAccessRulesRequest)
-   [1.4.0](/dotnet/docs/reference/Google.Cloud.VmwareEngine.V1/1.4.0/Google.Cloud.VmwareEngine.V1.ListExternalAccessRulesRequest)
-   [1.3.0](/dotnet/docs/reference/Google.Cloud.VmwareEngine.V1/1.3.0/Google.Cloud.VmwareEngine.V1.ListExternalAccessRulesRequest)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.VmwareEngine.V1/1.2.0/Google.Cloud.VmwareEngine.V1.ListExternalAccessRulesRequest)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.VmwareEngine.V1/1.1.0/Google.Cloud.VmwareEngine.V1.ListExternalAccessRulesRequest)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.VmwareEngine.V1/1.0.0/Google.Cloud.VmwareEngine.V1.ListExternalAccessRulesRequest)

```
public sealed class ListExternalAccessRulesRequest : IMessage<ListExternalAccessRulesRequest>, IEquatable<ListExternalAccessRulesRequest>, IDeepCloneable<ListExternalAccessRulesRequest>, IBufferMessage, IMessage, IPageRequest
```

Reference documentation and code samples for the VMware Engine v1 API class ListExternalAccessRulesRequest.

Request message for \[VmwareEngine.ListExternalAccessRules\]\[google.cloud.vmwareengine.v1.VmwareEngine.ListExternalAccessRules\]

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> ListExternalAccessRulesRequest

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[ListExternalAccessRulesRequest](/dotnet/docs/reference/Google.Cloud.VmwareEngine.V1/1.1.0/Google.Cloud.VmwareEngine.V1.ListExternalAccessRulesRequest), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[ListExternalAccessRulesRequest](/dotnet/docs/reference/Google.Cloud.VmwareEngine.V1/1.1.0/Google.Cloud.VmwareEngine.V1.ListExternalAccessRulesRequest), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[ListExternalAccessRulesRequest](/dotnet/docs/reference/Google.Cloud.VmwareEngine.V1/1.1.0/Google.Cloud.VmwareEngine.V1.ListExternalAccessRulesRequest), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html), [IPageRequest](https://github.com/googleapis/gax-dotnet/blob/510f63bbae727cfa4cee5180d0a9916bc2dee248/Google.Api.Gax.Grpc/PagedEnumerableCommon.cs)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.VmwareEngine.V1](/dotnet/docs/reference/Google.Cloud.VmwareEngine.V1/1.1.0/Google.Cloud.VmwareEngine.V1)

## Assembly

Google.Cloud.VmwareEngine.V1.dll

## Constructors

### ListExternalAccessRulesRequest()

```
public ListExternalAccessRulesRequest()
```

### ListExternalAccessRulesRequest(ListExternalAccessRulesRequest)

```
public ListExternalAccessRulesRequest(ListExternalAccessRulesRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[ListExternalAccessRulesRequest](/dotnet/docs/reference/Google.Cloud.VmwareEngine.V1/1.1.0/Google.Cloud.VmwareEngine.V1.ListExternalAccessRulesRequest)`  

## Properties

### Filter

```
public string Filter { get; set; }
```

A filter expression that matches resources returned in the response. The expression must specify the field name, a comparison operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The comparison operator must be `=`, `!=`, `>`, or `<`.

For example, if you are filtering a list of external access rules, you can exclude the ones named `example-rule` by specifying `name != "example-rule"`.

To filter on multiple expressions, provide each separate expression within parentheses. For example:

```
(name = "example-rule")
(createTime > "2021-04-12T08:15:10.40Z")
```

By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example:

```
(name = "example-rule-1") AND
(createTime > "2021-04-12T08:15:10.40Z") OR
(name = "example-rule-2")
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

The maximum number of external access rules to return in one page. The service may return fewer than this value. The maximum value is coerced to 1000. The default value of this field is 500.

**Property Value**

**Type**

**Description**

`[int](https://learn.microsoft.com/dotnet/api/system.int32)`

### PageToken

```
public string PageToken { get; set; }
```

A page token, received from a previous `ListExternalAccessRulesRequest` call. Provide this to retrieve the subsequent page.

When paginating, all other parameters provided to `ListExternalAccessRulesRequest` must match the call that provided the page token.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Parent

```
public string Parent { get; set; }
```

Required. The resource name of the network policy to query for external access firewall rules. Resource names are schemeless URIs that follow the conventions in [https://cloud.google.com/apis/design/resource\_names](https://cloud.google.com/apis/design/resource_names). For example: `projects/my-project/locations/us-central1/networkPolicies/my-policy`

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### ParentAsNetworkPolicyName

```
public NetworkPolicyName ParentAsNetworkPolicyName { get; set; }
```

[NetworkPolicyName](/dotnet/docs/reference/Google.Cloud.VmwareEngine.V1/1.1.0/Google.Cloud.VmwareEngine.V1.NetworkPolicyName)\-typed view over the [Parent](/dotnet/docs/reference/Google.Cloud.VmwareEngine.V1/1.1.0/Google.Cloud.VmwareEngine.V1.ListExternalAccessRulesRequest#Google_Cloud_VmwareEngine_V1_ListExternalAccessRulesRequest_Parent) resource name property.

**Property Value**

**Type**

**Description**

`[NetworkPolicyName](/dotnet/docs/reference/Google.Cloud.VmwareEngine.V1/1.1.0/Google.Cloud.VmwareEngine.V1.NetworkPolicyName)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.

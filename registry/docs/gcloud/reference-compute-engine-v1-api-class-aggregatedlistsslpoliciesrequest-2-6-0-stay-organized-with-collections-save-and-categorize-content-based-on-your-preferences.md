-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Compute Engine v1 API - Class AggregatedListSslPoliciesRequest (2.6.0) Stay organized with collections Save and categorize content based on your preferences.

3.26.0 (latest) 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public sealed class AggregatedListSslPoliciesRequest : IMessage<AggregatedListSslPoliciesRequest>, IEquatable<AggregatedListSslPoliciesRequest>, IDeepCloneable<AggregatedListSslPoliciesRequest>, IBufferMessage, IMessage, IPageRequest
```

Reference documentation and code samples for the Compute Engine v1 API class AggregatedListSslPoliciesRequest.

A request message for SslPolicies.AggregatedList. See the method description for details.

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> AggregatedListSslPoliciesRequest

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)<[AggregatedListSslPoliciesRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.6.0/Google.Cloud.Compute.V1.AggregatedListSslPoliciesRequest)\>, [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)<[AggregatedListSslPoliciesRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.6.0/Google.Cloud.Compute.V1.AggregatedListSslPoliciesRequest)\>, [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)<[AggregatedListSslPoliciesRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.6.0/Google.Cloud.Compute.V1.AggregatedListSslPoliciesRequest)\>, [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html), [IPageRequest](https://cloud.google.com/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Grpc.IPageRequest.html)

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.Compute.V1](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.6.0/Google.Cloud.Compute.V1)

## Assembly

Google.Cloud.Compute.V1.dll

## Constructors

### AggregatedListSslPoliciesRequest()

```
public AggregatedListSslPoliciesRequest()
```

### AggregatedListSslPoliciesRequest(AggregatedListSslPoliciesRequest)

```
public AggregatedListSslPoliciesRequest(AggregatedListSslPoliciesRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[AggregatedListSslPoliciesRequest](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.6.0/Google.Cloud.Compute.V1.AggregatedListSslPoliciesRequest)`  

## Properties

### Filter

```
public string Filter { get; set; }
```

A filter expression that filters resources listed in the response. Most Compute resources support two types of filter expressions: expressions that support regular expressions and expressions that follow API improvement proposal AIP-160. If you want to use AIP-160, your expression must specify the field name, an operator, and the value that you want to use for filtering. The value must be a string, a number, or a boolean. The operator must be either `=`, `!=`, `>`, `<`, `<=`, `>=` or `:`. For example, if you are filtering Compute Engine instances, you can exclude instances named `example-instance` by specifying `name != example-instance`. The `:` operator can be used with string fields to match substrings. For non-string fields it is equivalent to the `=` operator. The `:*` comparison can be used to test whether a key has been defined. For example, to find all objects with `owner` label use: `labels.owner:*` You can also filter nested fields. For example, you could specify `scheduling.automaticRestart = false` to include instances only if they are not scheduled for automatic restarts. You can use filtering on nested fields to filter based on resource labels. To filter on multiple expressions, provide each separate expression within parentheses. For example: `(scheduling.automaticRestart = true) (cpuPlatform = &quot;Intel Skylake&quot;)` By default, each expression is an `AND` expression. However, you can include `AND` and `OR` expressions explicitly. For example: `(cpuPlatform = &quot;Intel Skylake&quot;) OR (cpuPlatform = &quot;Intel Broadwell&quot;) AND (scheduling.automaticRestart = true)` If you want to use a regular expression, use the `eq` (equal) or `ne` (not equal) operator against a single un-parenthesized expression with or without quotes or against multiple parenthesized expressions. Examples: `fieldname eq unquoted literal` `fieldname eq &apos;single quoted literal&apos;` `fieldname eq &quot;double quoted literal&quot;` `(fieldname1 eq literal) (fieldname2 ne &quot;literal&quot;)` The literal value is interpreted as a regular expression using Google RE2 library syntax. The literal value must match the entire field. For example, to filter for instances that do not end with name "instance", you would use `name ne .*instance`.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### HasFilter

```
public bool HasFilter { get; }
```

Gets whether the "filter" field is set

**Property Value**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasIncludeAllScopes

```
public bool HasIncludeAllScopes { get; }
```

Gets whether the "include\_all\_scopes" field is set

**Property Value**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasMaxResults

```
public bool HasMaxResults { get; }
```

Gets whether the "max\_results" field is set

**Property Value**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasOrderBy

```
public bool HasOrderBy { get; }
```

Gets whether the "order\_by" field is set

**Property Value**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasPageToken

```
public bool HasPageToken { get; }
```

Gets whether the "page\_token" field is set

**Property Value**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasReturnPartialSuccess

```
public bool HasReturnPartialSuccess { get; }
```

Gets whether the "return\_partial\_success" field is set

**Property Value**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

### IncludeAllScopes

```
public bool IncludeAllScopes { get; set; }
```

Indicates whether every visible scope for each scope type (zone, region, global) should be included in the response. For new resource types added after this field, the flag has no effect as new resource types will always include every visible scope for each scope type in response. For resource types which predate this field, if this flag is omitted or false, only scopes of the scope types where the resource type is expected to be found will be included.

**Property Value**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

### MaxResults

```
public uint MaxResults { get; set; }
```

The maximum number of results per page that should be returned. If the number of available results is larger than `maxResults`, Compute Engine returns a `nextPageToken` that can be used to get the next page of results in subsequent list requests. Acceptable values are `0` to `500`, inclusive. (Default: `500`)

**Property Value**

**Type**

**Description**

`[UInt32](https://learn.microsoft.com/dotnet/api/system.uint32)`

### OrderBy

```
public string OrderBy { get; set; }
```

Sorts list results by a certain order. By default, results are returned in alphanumerical order based on the resource name. You can also sort results in descending order based on the creation timestamp using `orderBy=&quot;creationTimestamp desc&quot;`. This sorts results based on the `creationTimestamp` field in reverse chronological order (newest result first). Use this to sort resources like operations so that the newest operation is returned first. Currently, only sorting by `name` or `creationTimestamp desc` is supported.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### PageSize

```
public int PageSize { get; set; }
```

**Property Value**

**Type**

**Description**

`[Int32](https://learn.microsoft.com/dotnet/api/system.int32)`

### PageToken

```
public string PageToken { get; set; }
```

Specifies a page token to use. Set `pageToken` to the `nextPageToken` returned by a previous list request to get the next page of results.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### Project

```
public string Project { get; set; }
```

Name of the project scoping this request.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### ReturnPartialSuccess

```
public bool ReturnPartialSuccess { get; set; }
```

Opt-in for partial success behavior which provides partial results in case of failure. The default value is false.

**Property Value**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-17 UTC.

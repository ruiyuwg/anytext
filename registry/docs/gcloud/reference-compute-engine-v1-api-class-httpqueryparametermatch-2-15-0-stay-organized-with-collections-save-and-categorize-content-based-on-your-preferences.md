-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Compute Engine v1 API - Class HttpQueryParameterMatch (2.15.0) Stay organized with collections Save and categorize content based on your preferences.

3.26.0 (latest) 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.11.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.0 3.3.0 3.2.0 3.1.0 3.0.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.0 2.2.0 2.1.0 2.0.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0

```
public sealed class HttpQueryParameterMatch : IMessage<HttpQueryParameterMatch>, IEquatable<HttpQueryParameterMatch>, IDeepCloneable<HttpQueryParameterMatch>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Compute Engine v1 API class HttpQueryParameterMatch.

HttpRouteRuleMatch criteria for a request's query parameter.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> HttpQueryParameterMatch

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[HttpQueryParameterMatch](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.HttpQueryParameterMatch), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[HttpQueryParameterMatch](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.HttpQueryParameterMatch), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[HttpQueryParameterMatch](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.HttpQueryParameterMatch), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Compute.V1](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1)

## Assembly

Google.Cloud.Compute.V1.dll

## Constructors

### HttpQueryParameterMatch()

```
public HttpQueryParameterMatch()
```

### HttpQueryParameterMatch(HttpQueryParameterMatch)

```
public HttpQueryParameterMatch(HttpQueryParameterMatch other)
```

**Parameter**

**Name**

**Description**

`other`

`[HttpQueryParameterMatch](/dotnet/docs/reference/Google.Cloud.Compute.V1/2.15.0/Google.Cloud.Compute.V1.HttpQueryParameterMatch)`  

## Properties

### ExactMatch

```
public string ExactMatch { get; set; }
```

The queryParameterMatch matches if the value of the parameter exactly matches the contents of exactMatch. Only one of presentMatch, exactMatch, or regexMatch must be set.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### HasExactMatch

```
public bool HasExactMatch { get; }
```

Gets whether the "exact\_match" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasName

```
public bool HasName { get; }
```

Gets whether the "name" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasPresentMatch

```
public bool HasPresentMatch { get; }
```

Gets whether the "present\_match" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### HasRegexMatch

```
public bool HasRegexMatch { get; }
```

Gets whether the "regex\_match" field is set

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### Name

```
public string Name { get; set; }
```

The name of the query parameter to match. The query parameter must exist in the request, in the absence of which the request match fails.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### PresentMatch

```
public bool PresentMatch { get; set; }
```

Specifies that the queryParameterMatch matches if the request contains the query parameter, irrespective of whether the parameter has a value or not. Only one of presentMatch, exactMatch, or regexMatch must be set.

**Property Value**

**Type**

**Description**

`[bool](https://learn.microsoft.com/dotnet/api/system.boolean)`

### RegexMatch

```
public string RegexMatch { get; set; }
```

The queryParameterMatch matches if the value of the parameter matches the regular expression specified by regexMatch. For more information about regular expression syntax, see Syntax. Only one of presentMatch, exactMatch, or regexMatch must be set. Regular expressions can only be used when the loadBalancingScheme is set to INTERNAL\_SELF\_MANAGED.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-17 UTC.

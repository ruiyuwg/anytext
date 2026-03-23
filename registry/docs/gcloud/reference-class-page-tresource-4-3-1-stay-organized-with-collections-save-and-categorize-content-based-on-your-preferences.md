-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class Page<TResource> (4.3.1) Stay organized with collections Save and categorize content based on your preferences.

Version 4.3.1keyboard\_arrow\_down

-   [4.10.0 (latest)](/dotnet/docs/reference/Google.Api.Gax/latest/Google.Api.Gax.Page-1)
-   [4.8.0](/dotnet/docs/reference/Google.Api.Gax/4.8.0/Google.Api.Gax.Page-1)
-   [4.4.0](/dotnet/docs/reference/Google.Api.Gax/4.4.0/Google.Api.Gax.Page-1)
-   [4.3.1](/dotnet/docs/reference/Google.Api.Gax/4.3.1/Google.Api.Gax.Page-1)
-   [4.2.0](/dotnet/docs/reference/Google.Api.Gax/4.2.0/Google.Api.Gax.Page-1)
-   [4.0.0](/dotnet/docs/reference/Google.Api.Gax/4.0.0/Google.Api.Gax.Page-1)
-   [3.2.0](/dotnet/docs/reference/Google.Api.Gax/3.2.0/Google.Api.Gax.Page-1)

```
public sealed class Page<TResource> : IEnumerable<TResource>, IEnumerable
```

A page of resources which will only have fewer results than requested if there is no more data to fetch.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> Page<TResource>

## Implements

[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1), [IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.ienumerable)

## Inherited Members

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

[object.Equals(object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals\(system-object\))

[object.Equals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.equals#system-object-equals\(system-object-system-object\))

[object.ReferenceEquals(object, object)](https://learn.microsoft.com/dotnet/api/system.object.referenceequals#system-object-referenceequals\(system-object-system-object\))

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

## Namespace

[Google](https://cloud.google.com/dotnet/docs/reference/Google.Apis/latest/Google.html)Google.Api[Gax](/dotnet/docs/reference/Google.Api.Gax/4.3.1/Google.Api.Gax)

## Assembly

Google.Api.Gax.dll

## Type Parameter

**Name**

**Description**

`TResource`

The type of resource within the page.

## Constructors

### Page(IEnumerable<TResource>, string)

```
public Page(IEnumerable<TResource> resources, string nextPageToken)
```

Constructs a fixed-size page from the given resource sequence and page token.

**Parameters**

**Name**

**Description**

`resources`

`[IEnumerable](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerable-1)`  

The resources in the page.

`nextPageToken`

`[string](https://learn.microsoft.com/dotnet/api/system.string)`  

The next page token.

## Properties

### NextPageToken

```
public string NextPageToken { get; }
```

The page token to use to fetch the next set of resources.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

**Remarks**

gRPC-based APIs use an empty string as a "no page token", whereas REST-based APIs use a null reference instead. The value here will be consistent with the value returned by the API itself.

## Methods

### GetEnumerator()

```
public IEnumerator<TResource> GetEnumerator()
```

**Returns**

**Type**

**Description**

`[IEnumerator](https://learn.microsoft.com/dotnet/api/system.collections.generic.ienumerator-1)`

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

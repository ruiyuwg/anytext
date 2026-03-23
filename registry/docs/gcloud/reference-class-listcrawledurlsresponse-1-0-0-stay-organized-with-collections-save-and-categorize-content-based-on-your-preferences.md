-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class ListCrawledUrlsResponse (1.0.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.0.0keyboard\_arrow\_down

-   [2.6.0 (latest)](/dotnet/docs/reference/Google.Cloud.WebSecurityScanner.V1/latest/Google.Cloud.WebSecurityScanner.V1.ListCrawledUrlsResponse)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.WebSecurityScanner.V1/2.5.0/Google.Cloud.WebSecurityScanner.V1.ListCrawledUrlsResponse)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.WebSecurityScanner.V1/2.4.0/Google.Cloud.WebSecurityScanner.V1.ListCrawledUrlsResponse)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.WebSecurityScanner.V1/2.3.0/Google.Cloud.WebSecurityScanner.V1.ListCrawledUrlsResponse)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.WebSecurityScanner.V1/2.2.0/Google.Cloud.WebSecurityScanner.V1.ListCrawledUrlsResponse)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.WebSecurityScanner.V1/2.1.0/Google.Cloud.WebSecurityScanner.V1.ListCrawledUrlsResponse)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.WebSecurityScanner.V1/2.0.0/Google.Cloud.WebSecurityScanner.V1.ListCrawledUrlsResponse)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.WebSecurityScanner.V1/1.2.0/Google.Cloud.WebSecurityScanner.V1.ListCrawledUrlsResponse)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.WebSecurityScanner.V1/1.1.0/Google.Cloud.WebSecurityScanner.V1.ListCrawledUrlsResponse)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.WebSecurityScanner.V1/1.0.0/Google.Cloud.WebSecurityScanner.V1.ListCrawledUrlsResponse)

```
public sealed class ListCrawledUrlsResponse : IMessage<ListCrawledUrlsResponse>, IEquatable<ListCrawledUrlsResponse>, IDeepCloneable<ListCrawledUrlsResponse>, IBufferMessage, IMessage, IPageResponse<CrawledUrl>, IEnumerable<CrawledUrl>, IEnumerable
```

Response for the `ListCrawledUrls` method.

## Inheritance

System.Object \> ListCrawledUrlsResponse

## Implements

Google.Protobuf.IMessage<[ListCrawledUrlsResponse](/dotnet/docs/reference/Google.Cloud.WebSecurityScanner.V1/1.0.0/Google.Cloud.WebSecurityScanner.V1.ListCrawledUrlsResponse)\>, System.IEquatable<[ListCrawledUrlsResponse](/dotnet/docs/reference/Google.Cloud.WebSecurityScanner.V1/1.0.0/Google.Cloud.WebSecurityScanner.V1.ListCrawledUrlsResponse)\>, Google.Protobuf.IDeepCloneable<[ListCrawledUrlsResponse](/dotnet/docs/reference/Google.Cloud.WebSecurityScanner.V1/1.0.0/Google.Cloud.WebSecurityScanner.V1.ListCrawledUrlsResponse)\>, Google.Protobuf.IBufferMessage, Google.Protobuf.IMessage, Google.Api.Gax.Grpc.IPageResponse<[CrawledUrl](/dotnet/docs/reference/Google.Cloud.WebSecurityScanner.V1/1.0.0/Google.Cloud.WebSecurityScanner.V1.CrawledUrl)\>, System.Collections.Generic.IEnumerable<[CrawledUrl](/dotnet/docs/reference/Google.Cloud.WebSecurityScanner.V1/1.0.0/Google.Cloud.WebSecurityScanner.V1.CrawledUrl)\>, System.Collections.IEnumerable

## Inherited Members

System.Object.ToString()

System.Object.GetHashCode()

System.Object.GetType()

System.Object.MemberwiseClone()

## Namespace

[Google.Cloud.WebSecurityScanner.V1](/dotnet/docs/reference/Google.Cloud.WebSecurityScanner.V1/1.0.0/Google.Cloud.WebSecurityScanner.V1)

## Assembly

Google.Cloud.WebSecurityScanner.V1.dll

## Constructors

### ListCrawledUrlsResponse()

```
public ListCrawledUrlsResponse()
```

### ListCrawledUrlsResponse(ListCrawledUrlsResponse)

```
public ListCrawledUrlsResponse(ListCrawledUrlsResponse other)
```

**Parameter**

**Name**

**Description**

`other`

`[ListCrawledUrlsResponse](/dotnet/docs/reference/Google.Cloud.WebSecurityScanner.V1/1.0.0/Google.Cloud.WebSecurityScanner.V1.ListCrawledUrlsResponse)`  

## Properties

### CrawledUrls

```
public RepeatedField<CrawledUrl> CrawledUrls { get; }
```

The list of CrawledUrls returned.

**Property Value**

**Type**

**Description**

`Google.Protobuf.Collections.RepeatedField<[CrawledUrl](/dotnet/docs/reference/Google.Cloud.WebSecurityScanner.V1/1.0.0/Google.Cloud.WebSecurityScanner.V1.CrawledUrl)>`

### NextPageToken

```
public string NextPageToken { get; set; }
```

Token to retrieve the next page of results, or empty if there are no more results in the list.

**Property Value**

**Type**

**Description**

`System.String`

## Methods

### GetEnumerator()

```
public IEnumerator<CrawledUrl> GetEnumerator()
```

Returns an enumerator that iterates through the resources in this response.

**Returns**

**Type**

**Description**

`System.Collections.Generic.IEnumerator<[CrawledUrl](/dotnet/docs/reference/Google.Cloud.WebSecurityScanner.V1/1.0.0/Google.Cloud.WebSecurityScanner.V1.CrawledUrl)>`

## Explicit Interface Implementations

### IEnumerable.GetEnumerator()

```
IEnumerator IEnumerable.GetEnumerator()
```

**Returns**

**Type**

**Description**

`System.Collections.IEnumerator`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.

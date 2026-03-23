-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Web Security Scanner v1 API - Class VulnerableHeaders (2.6.0) Stay organized with collections Save and categorize content based on your preferences.

Version latestkeyboard\_arrow\_down

-   [2.6.0 (latest)](/dotnet/docs/reference/Google.Cloud.WebSecurityScanner.V1/latest/Google.Cloud.WebSecurityScanner.V1.VulnerableHeaders)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.WebSecurityScanner.V1/2.5.0/Google.Cloud.WebSecurityScanner.V1.VulnerableHeaders)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.WebSecurityScanner.V1/2.4.0/Google.Cloud.WebSecurityScanner.V1.VulnerableHeaders)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.WebSecurityScanner.V1/2.3.0/Google.Cloud.WebSecurityScanner.V1.VulnerableHeaders)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.WebSecurityScanner.V1/2.2.0/Google.Cloud.WebSecurityScanner.V1.VulnerableHeaders)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.WebSecurityScanner.V1/2.1.0/Google.Cloud.WebSecurityScanner.V1.VulnerableHeaders)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.WebSecurityScanner.V1/2.0.0/Google.Cloud.WebSecurityScanner.V1.VulnerableHeaders)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.WebSecurityScanner.V1/1.2.0/Google.Cloud.WebSecurityScanner.V1.VulnerableHeaders)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.WebSecurityScanner.V1/1.1.0/Google.Cloud.WebSecurityScanner.V1.VulnerableHeaders)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.WebSecurityScanner.V1/1.0.0/Google.Cloud.WebSecurityScanner.V1.VulnerableHeaders)

```
public sealed class VulnerableHeaders : IMessage<VulnerableHeaders>, IEquatable<VulnerableHeaders>, IDeepCloneable<VulnerableHeaders>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Web Security Scanner v1 API class VulnerableHeaders.

Information about vulnerable or missing HTTP Headers.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> VulnerableHeaders

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[VulnerableHeaders](/dotnet/docs/reference/Google.Cloud.WebSecurityScanner.V1/latest/Google.Cloud.WebSecurityScanner.V1.VulnerableHeaders), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[VulnerableHeaders](/dotnet/docs/reference/Google.Cloud.WebSecurityScanner.V1/latest/Google.Cloud.WebSecurityScanner.V1.VulnerableHeaders), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[VulnerableHeaders](/dotnet/docs/reference/Google.Cloud.WebSecurityScanner.V1/latest/Google.Cloud.WebSecurityScanner.V1.VulnerableHeaders), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.WebSecurityScanner.V1](/dotnet/docs/reference/Google.Cloud.WebSecurityScanner.V1/latest/Google.Cloud.WebSecurityScanner.V1)

## Assembly

Google.Cloud.WebSecurityScanner.V1.dll

## Constructors

### VulnerableHeaders()

```
public VulnerableHeaders()
```

### VulnerableHeaders(VulnerableHeaders)

```
public VulnerableHeaders(VulnerableHeaders other)
```

**Parameter**

**Name**

**Description**

`other`

`[VulnerableHeaders](/dotnet/docs/reference/Google.Cloud.WebSecurityScanner.V1/latest/Google.Cloud.WebSecurityScanner.V1.VulnerableHeaders)`  

## Properties

### Headers

```
public RepeatedField<VulnerableHeaders.Types.Header> Headers { get; }
```

List of vulnerable headers.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[VulnerableHeaders](/dotnet/docs/reference/Google.Cloud.WebSecurityScanner.V1/latest/Google.Cloud.WebSecurityScanner.V1.VulnerableHeaders)[Types](/dotnet/docs/reference/Google.Cloud.WebSecurityScanner.V1/latest/Google.Cloud.WebSecurityScanner.V1.VulnerableHeaders.Types)[Header](/dotnet/docs/reference/Google.Cloud.WebSecurityScanner.V1/latest/Google.Cloud.WebSecurityScanner.V1.VulnerableHeaders.Types.Header)`

### MissingHeaders

```
public RepeatedField<VulnerableHeaders.Types.Header> MissingHeaders { get; }
```

List of missing headers.

**Property Value**

**Type**

**Description**

`[RepeatedField](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.Collections.RepeatedField-1.html)[VulnerableHeaders](/dotnet/docs/reference/Google.Cloud.WebSecurityScanner.V1/latest/Google.Cloud.WebSecurityScanner.V1.VulnerableHeaders)[Types](/dotnet/docs/reference/Google.Cloud.WebSecurityScanner.V1/latest/Google.Cloud.WebSecurityScanner.V1.VulnerableHeaders.Types)[Header](/dotnet/docs/reference/Google.Cloud.WebSecurityScanner.V1/latest/Google.Cloud.WebSecurityScanner.V1.VulnerableHeaders.Types.Header)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.

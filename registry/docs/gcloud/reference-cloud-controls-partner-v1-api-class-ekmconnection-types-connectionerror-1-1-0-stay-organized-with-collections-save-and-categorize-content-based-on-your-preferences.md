-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Cloud Controls Partner v1 API - Class EkmConnection.Types.ConnectionError (1.1.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.1.0keyboard\_arrow\_down

-   [1.3.0 (latest)](/dotnet/docs/reference/Google.Cloud.CloudControlsPartner.V1/latest/Google.Cloud.CloudControlsPartner.V1.EkmConnection.Types.ConnectionError)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.CloudControlsPartner.V1/1.2.0/Google.Cloud.CloudControlsPartner.V1.EkmConnection.Types.ConnectionError)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.CloudControlsPartner.V1/1.1.0/Google.Cloud.CloudControlsPartner.V1.EkmConnection.Types.ConnectionError)
-   [1.0.0-beta02](/dotnet/docs/reference/Google.Cloud.CloudControlsPartner.V1/1.0.0-beta02/Google.Cloud.CloudControlsPartner.V1.EkmConnection.Types.ConnectionError)

```
public sealed class EkmConnection.Types.ConnectionError : IMessage<EkmConnection.Types.ConnectionError>, IEquatable<EkmConnection.Types.ConnectionError>, IDeepCloneable<EkmConnection.Types.ConnectionError>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Cloud Controls Partner v1 API class EkmConnection.Types.ConnectionError.

Information around the error that occurred if the connection state is anything other than available or unspecified

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> EkmConnection.Types.ConnectionError

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[EkmConnection](/dotnet/docs/reference/Google.Cloud.CloudControlsPartner.V1/1.1.0/Google.Cloud.CloudControlsPartner.V1.EkmConnection)[Types](/dotnet/docs/reference/Google.Cloud.CloudControlsPartner.V1/1.1.0/Google.Cloud.CloudControlsPartner.V1.EkmConnection.Types)[ConnectionError](/dotnet/docs/reference/Google.Cloud.CloudControlsPartner.V1/1.1.0/Google.Cloud.CloudControlsPartner.V1.EkmConnection.Types.ConnectionError), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[EkmConnection](/dotnet/docs/reference/Google.Cloud.CloudControlsPartner.V1/1.1.0/Google.Cloud.CloudControlsPartner.V1.EkmConnection)[Types](/dotnet/docs/reference/Google.Cloud.CloudControlsPartner.V1/1.1.0/Google.Cloud.CloudControlsPartner.V1.EkmConnection.Types)[ConnectionError](/dotnet/docs/reference/Google.Cloud.CloudControlsPartner.V1/1.1.0/Google.Cloud.CloudControlsPartner.V1.EkmConnection.Types.ConnectionError), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[EkmConnection](/dotnet/docs/reference/Google.Cloud.CloudControlsPartner.V1/1.1.0/Google.Cloud.CloudControlsPartner.V1.EkmConnection)[Types](/dotnet/docs/reference/Google.Cloud.CloudControlsPartner.V1/1.1.0/Google.Cloud.CloudControlsPartner.V1.EkmConnection.Types)[ConnectionError](/dotnet/docs/reference/Google.Cloud.CloudControlsPartner.V1/1.1.0/Google.Cloud.CloudControlsPartner.V1.EkmConnection.Types.ConnectionError), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.CloudControlsPartner.V1](/dotnet/docs/reference/Google.Cloud.CloudControlsPartner.V1/1.1.0/Google.Cloud.CloudControlsPartner.V1)

## Assembly

Google.Cloud.CloudControlsPartner.V1.dll

## Constructors

### ConnectionError()

```
public ConnectionError()
```

### ConnectionError(ConnectionError)

```
public ConnectionError(EkmConnection.Types.ConnectionError other)
```

**Parameter**

**Name**

**Description**

`other`

`[EkmConnection](/dotnet/docs/reference/Google.Cloud.CloudControlsPartner.V1/1.1.0/Google.Cloud.CloudControlsPartner.V1.EkmConnection)[Types](/dotnet/docs/reference/Google.Cloud.CloudControlsPartner.V1/1.1.0/Google.Cloud.CloudControlsPartner.V1.EkmConnection.Types)[ConnectionError](/dotnet/docs/reference/Google.Cloud.CloudControlsPartner.V1/1.1.0/Google.Cloud.CloudControlsPartner.V1.EkmConnection.Types.ConnectionError)`  

## Properties

### ErrorDomain

```
public string ErrorDomain { get; set; }
```

The error domain for the error

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### ErrorMessage

```
public string ErrorMessage { get; set; }
```

The error message for the error

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.

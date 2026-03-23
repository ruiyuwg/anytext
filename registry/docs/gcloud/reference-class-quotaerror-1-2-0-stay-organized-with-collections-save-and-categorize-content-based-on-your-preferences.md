-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class QuotaError (1.2.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.2.0keyboard\_arrow\_down

-   [2.5.0 (latest)](/dotnet/docs/reference/Google.Cloud.ServiceControl.V1/latest/Google.Cloud.ServiceControl.V1.QuotaError)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.ServiceControl.V1/2.4.0/Google.Cloud.ServiceControl.V1.QuotaError)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.ServiceControl.V1/2.3.0/Google.Cloud.ServiceControl.V1.QuotaError)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.ServiceControl.V1/2.2.0/Google.Cloud.ServiceControl.V1.QuotaError)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.ServiceControl.V1/2.1.0/Google.Cloud.ServiceControl.V1.QuotaError)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.ServiceControl.V1/2.0.0/Google.Cloud.ServiceControl.V1.QuotaError)
-   [1.4.0](/dotnet/docs/reference/Google.Cloud.ServiceControl.V1/1.4.0/Google.Cloud.ServiceControl.V1.QuotaError)
-   [1.3.0](/dotnet/docs/reference/Google.Cloud.ServiceControl.V1/1.3.0/Google.Cloud.ServiceControl.V1.QuotaError)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.ServiceControl.V1/1.2.0/Google.Cloud.ServiceControl.V1.QuotaError)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.ServiceControl.V1/1.1.0/Google.Cloud.ServiceControl.V1.QuotaError)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.ServiceControl.V1/1.0.0/Google.Cloud.ServiceControl.V1.QuotaError)

```
public sealed class QuotaError : IMessage<QuotaError>, IEquatable<QuotaError>, IDeepCloneable<QuotaError>, IBufferMessage, IMessage
```

Represents error information for \[QuotaOperation\]\[google.api.servicecontrol.v1.QuotaOperation\].

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> QuotaError

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)<[QuotaError](/dotnet/docs/reference/Google.Cloud.ServiceControl.V1/1.2.0/Google.Cloud.ServiceControl.V1.QuotaError)\>, [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)<[QuotaError](/dotnet/docs/reference/Google.Cloud.ServiceControl.V1/1.2.0/Google.Cloud.ServiceControl.V1.QuotaError)\>, [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)<[QuotaError](/dotnet/docs/reference/Google.Cloud.ServiceControl.V1/1.2.0/Google.Cloud.ServiceControl.V1.QuotaError)\>, [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.ServiceControl.V1](/dotnet/docs/reference/Google.Cloud.ServiceControl.V1/1.2.0/Google.Cloud.ServiceControl.V1)

## Assembly

Google.Cloud.ServiceControl.V1.dll

## Constructors

### QuotaError()

```
public QuotaError()
```

### QuotaError(QuotaError)

```
public QuotaError(QuotaError other)
```

**Parameter**

**Name**

**Description**

`other`

`[QuotaError](/dotnet/docs/reference/Google.Cloud.ServiceControl.V1/1.2.0/Google.Cloud.ServiceControl.V1.QuotaError)`  

## Properties

### Code

```
public QuotaError.Types.Code Code { get; set; }
```

Error code.

**Property Value**

**Type**

**Description**

`[QuotaError.Types.Code](/dotnet/docs/reference/Google.Cloud.ServiceControl.V1/1.2.0/Google.Cloud.ServiceControl.V1.QuotaError.Types.Code)`

### Description

```
public string Description { get; set; }
```

Free-form text that provides details on the cause of the error.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### Status

```
public Status Status { get; set; }
```

Contains additional information about the quota error. If available, `status.code` will be non zero.

**Property Value**

**Type**

**Description**

`[Status](https://cloud.google.com/dotnet/docs/reference/Google.Api.CommonProtos/latest/Google.Rpc.Status.html)`

### Subject

```
public string Subject { get; set; }
```

Subject to whom this error applies. See the specific enum for more details on this field. For example, "clientip:<ip address of client>" or "project:<Google developer project id>".

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.

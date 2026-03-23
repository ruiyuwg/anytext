-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class GetConnectionProfileRequest (1.0.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.0.0keyboard\_arrow\_down

-   [2.6.0 (latest)](/dotnet/docs/reference/Google.Cloud.CloudDms.V1/latest/Google.Cloud.CloudDms.V1.GetConnectionProfileRequest)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.CloudDms.V1/2.5.0/Google.Cloud.CloudDms.V1.GetConnectionProfileRequest)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.CloudDms.V1/2.4.0/Google.Cloud.CloudDms.V1.GetConnectionProfileRequest)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.CloudDms.V1/2.3.0/Google.Cloud.CloudDms.V1.GetConnectionProfileRequest)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.CloudDms.V1/2.2.0/Google.Cloud.CloudDms.V1.GetConnectionProfileRequest)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.CloudDms.V1/2.1.0/Google.Cloud.CloudDms.V1.GetConnectionProfileRequest)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.CloudDms.V1/2.0.0/Google.Cloud.CloudDms.V1.GetConnectionProfileRequest)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.CloudDms.V1/1.2.0/Google.Cloud.CloudDms.V1.GetConnectionProfileRequest)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.CloudDms.V1/1.1.0/Google.Cloud.CloudDms.V1.GetConnectionProfileRequest)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.CloudDms.V1/1.0.0/Google.Cloud.CloudDms.V1.GetConnectionProfileRequest)

```
public sealed class GetConnectionProfileRequest : IMessage<GetConnectionProfileRequest>, IEquatable<GetConnectionProfileRequest>, IDeepCloneable<GetConnectionProfileRequest>, IBufferMessage, IMessage
```

Request message for 'GetConnectionProfile' request.

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> GetConnectionProfileRequest

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)<[GetConnectionProfileRequest](/dotnet/docs/reference/Google.Cloud.CloudDms.V1/1.0.0/Google.Cloud.CloudDms.V1.GetConnectionProfileRequest)\>, [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)<[GetConnectionProfileRequest](/dotnet/docs/reference/Google.Cloud.CloudDms.V1/1.0.0/Google.Cloud.CloudDms.V1.GetConnectionProfileRequest)\>, [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)<[GetConnectionProfileRequest](/dotnet/docs/reference/Google.Cloud.CloudDms.V1/1.0.0/Google.Cloud.CloudDms.V1.GetConnectionProfileRequest)\>, [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.CloudDms.V1](/dotnet/docs/reference/Google.Cloud.CloudDms.V1/1.0.0/Google.Cloud.CloudDms.V1)

## Assembly

Google.Cloud.CloudDms.V1.dll

## Constructors

### GetConnectionProfileRequest()

```
public GetConnectionProfileRequest()
```

### GetConnectionProfileRequest(GetConnectionProfileRequest)

```
public GetConnectionProfileRequest(GetConnectionProfileRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[GetConnectionProfileRequest](/dotnet/docs/reference/Google.Cloud.CloudDms.V1/1.0.0/Google.Cloud.CloudDms.V1.GetConnectionProfileRequest)`  

## Properties

### ConnectionProfileName

```
public ConnectionProfileName ConnectionProfileName { get; set; }
```

[ConnectionProfileName](/dotnet/docs/reference/Google.Cloud.CloudDms.V1/1.0.0/Google.Cloud.CloudDms.V1.ConnectionProfileName)\-typed view over the [Name](/dotnet/docs/reference/Google.Cloud.CloudDms.V1/1.0.0/Google.Cloud.CloudDms.V1.GetConnectionProfileRequest#Google_Cloud_CloudDms_V1_GetConnectionProfileRequest_Name) resource name property.

**Property Value**

**Type**

**Description**

`[ConnectionProfileName](/dotnet/docs/reference/Google.Cloud.CloudDms.V1/1.0.0/Google.Cloud.CloudDms.V1.ConnectionProfileName)`

### Name

```
public string Name { get; set; }
```

Required. Name of the connection profile resource to get.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.

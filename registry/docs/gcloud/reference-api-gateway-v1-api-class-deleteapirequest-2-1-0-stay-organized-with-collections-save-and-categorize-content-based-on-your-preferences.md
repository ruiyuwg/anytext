-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# API Gateway v1 API - Class DeleteApiRequest (2.1.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.1.0keyboard\_arrow\_down

-   [2.5.0 (latest)](/dotnet/docs/reference/Google.Cloud.ApiGateway.V1/latest/Google.Cloud.ApiGateway.V1.DeleteApiRequest)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.ApiGateway.V1/2.4.0/Google.Cloud.ApiGateway.V1.DeleteApiRequest)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.ApiGateway.V1/2.3.0/Google.Cloud.ApiGateway.V1.DeleteApiRequest)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.ApiGateway.V1/2.2.0/Google.Cloud.ApiGateway.V1.DeleteApiRequest)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.ApiGateway.V1/2.1.0/Google.Cloud.ApiGateway.V1.DeleteApiRequest)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.ApiGateway.V1/2.0.0/Google.Cloud.ApiGateway.V1.DeleteApiRequest)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.ApiGateway.V1/1.1.0/Google.Cloud.ApiGateway.V1.DeleteApiRequest)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.ApiGateway.V1/1.0.0/Google.Cloud.ApiGateway.V1.DeleteApiRequest)

```
public sealed class DeleteApiRequest : IMessage<DeleteApiRequest>, IEquatable<DeleteApiRequest>, IDeepCloneable<DeleteApiRequest>, IBufferMessage, IMessage
```

Reference documentation and code samples for the API Gateway v1 API class DeleteApiRequest.

Request message for ApiGatewayService.DeleteApi

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> DeleteApiRequest

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)<[DeleteApiRequest](/dotnet/docs/reference/Google.Cloud.ApiGateway.V1/2.1.0/Google.Cloud.ApiGateway.V1.DeleteApiRequest)\>, [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)<[DeleteApiRequest](/dotnet/docs/reference/Google.Cloud.ApiGateway.V1/2.1.0/Google.Cloud.ApiGateway.V1.DeleteApiRequest)\>, [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)<[DeleteApiRequest](/dotnet/docs/reference/Google.Cloud.ApiGateway.V1/2.1.0/Google.Cloud.ApiGateway.V1.DeleteApiRequest)\>, [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.ApiGateway.V1](/dotnet/docs/reference/Google.Cloud.ApiGateway.V1/2.1.0/Google.Cloud.ApiGateway.V1)

## Assembly

Google.Cloud.ApiGateway.V1.dll

## Constructors

### DeleteApiRequest()

```
public DeleteApiRequest()
```

### DeleteApiRequest(DeleteApiRequest)

```
public DeleteApiRequest(DeleteApiRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[DeleteApiRequest](/dotnet/docs/reference/Google.Cloud.ApiGateway.V1/2.1.0/Google.Cloud.ApiGateway.V1.DeleteApiRequest)`  

## Properties

### ApiName

```
public ApiName ApiName { get; set; }
```

[ApiName](/dotnet/docs/reference/Google.Cloud.ApiGateway.V1/2.1.0/Google.Cloud.ApiGateway.V1.ApiName)\-typed view over the [Name](/dotnet/docs/reference/Google.Cloud.ApiGateway.V1/2.1.0/Google.Cloud.ApiGateway.V1.DeleteApiRequest#Google_Cloud_ApiGateway_V1_DeleteApiRequest_Name) resource name property.

**Property Value**

**Type**

**Description**

`[ApiName](/dotnet/docs/reference/Google.Cloud.ApiGateway.V1/2.1.0/Google.Cloud.ApiGateway.V1.ApiName)`

### Name

```
public string Name { get; set; }
```

Required. Resource name of the form: `projects/*/locations/global/apis/*`

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.

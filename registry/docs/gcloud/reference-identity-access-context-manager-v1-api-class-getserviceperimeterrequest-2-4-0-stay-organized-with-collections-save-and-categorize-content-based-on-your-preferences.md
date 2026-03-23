-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Identity Access Context Manager v1 API - Class GetServicePerimeterRequest (2.4.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.4.0keyboard\_arrow\_down

-   [2.6.0 (latest)](/dotnet/docs/reference/Google.Identity.AccessContextManager.V1/latest/Google.Identity.AccessContextManager.V1.GetServicePerimeterRequest)
-   [2.5.0](/dotnet/docs/reference/Google.Identity.AccessContextManager.V1/2.5.0/Google.Identity.AccessContextManager.V1.GetServicePerimeterRequest)
-   [2.4.0](/dotnet/docs/reference/Google.Identity.AccessContextManager.V1/2.4.0/Google.Identity.AccessContextManager.V1.GetServicePerimeterRequest)
-   [2.3.0](/dotnet/docs/reference/Google.Identity.AccessContextManager.V1/2.3.0/Google.Identity.AccessContextManager.V1.GetServicePerimeterRequest)
-   [2.2.0](/dotnet/docs/reference/Google.Identity.AccessContextManager.V1/2.2.0/Google.Identity.AccessContextManager.V1.GetServicePerimeterRequest)
-   [2.1.0](/dotnet/docs/reference/Google.Identity.AccessContextManager.V1/2.1.0/Google.Identity.AccessContextManager.V1.GetServicePerimeterRequest)
-   [2.0.0](/dotnet/docs/reference/Google.Identity.AccessContextManager.V1/2.0.0/Google.Identity.AccessContextManager.V1.GetServicePerimeterRequest)
-   [1.5.0](/dotnet/docs/reference/Google.Identity.AccessContextManager.V1/1.5.0/Google.Identity.AccessContextManager.V1.GetServicePerimeterRequest)
-   [1.4.0](/dotnet/docs/reference/Google.Identity.AccessContextManager.V1/1.4.0/Google.Identity.AccessContextManager.V1.GetServicePerimeterRequest)
-   [1.3.0](/dotnet/docs/reference/Google.Identity.AccessContextManager.V1/1.3.0/Google.Identity.AccessContextManager.V1.GetServicePerimeterRequest)
-   [1.2.0](/dotnet/docs/reference/Google.Identity.AccessContextManager.V1/1.2.0/Google.Identity.AccessContextManager.V1.GetServicePerimeterRequest)

```
public sealed class GetServicePerimeterRequest : IMessage<GetServicePerimeterRequest>, IEquatable<GetServicePerimeterRequest>, IDeepCloneable<GetServicePerimeterRequest>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Identity Access Context Manager v1 API class GetServicePerimeterRequest.

A request to get a particular `ServicePerimeter`.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> GetServicePerimeterRequest

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[GetServicePerimeterRequest](/dotnet/docs/reference/Google.Identity.AccessContextManager.V1/2.4.0/Google.Identity.AccessContextManager.V1.GetServicePerimeterRequest), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[GetServicePerimeterRequest](/dotnet/docs/reference/Google.Identity.AccessContextManager.V1/2.4.0/Google.Identity.AccessContextManager.V1.GetServicePerimeterRequest), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[GetServicePerimeterRequest](/dotnet/docs/reference/Google.Identity.AccessContextManager.V1/2.4.0/Google.Identity.AccessContextManager.V1.GetServicePerimeterRequest), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Identity.AccessContextManager.V1](/dotnet/docs/reference/Google.Identity.AccessContextManager.V1/2.4.0/Google.Identity.AccessContextManager.V1)

## Assembly

Google.Identity.AccessContextManager.V1.dll

## Constructors

### GetServicePerimeterRequest()

```
public GetServicePerimeterRequest()
```

### GetServicePerimeterRequest(GetServicePerimeterRequest)

```
public GetServicePerimeterRequest(GetServicePerimeterRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[GetServicePerimeterRequest](/dotnet/docs/reference/Google.Identity.AccessContextManager.V1/2.4.0/Google.Identity.AccessContextManager.V1.GetServicePerimeterRequest)`  

## Properties

### Name

```
public string Name { get; set; }
```

Required. Resource name for the \[Service Perimeter\] \[google.identity.accesscontextmanager.v1.ServicePerimeter\].

Format: `accessPolicies/{policy_id}/servicePerimeters/{service_perimeters_id}`

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### ServicePerimeterName

```
public ServicePerimeterName ServicePerimeterName { get; set; }
```

[ServicePerimeterName](/dotnet/docs/reference/Google.Identity.AccessContextManager.V1/2.4.0/Google.Identity.AccessContextManager.V1.ServicePerimeterName)\-typed view over the [Name](/dotnet/docs/reference/Google.Identity.AccessContextManager.V1/2.4.0/Google.Identity.AccessContextManager.V1.GetServicePerimeterRequest#Google_Identity_AccessContextManager_V1_GetServicePerimeterRequest_Name) resource name property.

**Property Value**

**Type**

**Description**

`[ServicePerimeterName](/dotnet/docs/reference/Google.Identity.AccessContextManager.V1/2.4.0/Google.Identity.AccessContextManager.V1.ServicePerimeterName)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.

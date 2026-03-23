-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Cloud Functions v1 API - Class CreateFunctionRequest (2.3.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.3.0keyboard\_arrow\_down

-   [2.8.0 (latest)](/dotnet/docs/reference/Google.Cloud.Functions.V1/latest/Google.Cloud.Functions.V1.CreateFunctionRequest)
-   [2.7.0](/dotnet/docs/reference/Google.Cloud.Functions.V1/2.7.0/Google.Cloud.Functions.V1.CreateFunctionRequest)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.Functions.V1/2.6.0/Google.Cloud.Functions.V1.CreateFunctionRequest)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.Functions.V1/2.5.0/Google.Cloud.Functions.V1.CreateFunctionRequest)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.Functions.V1/2.4.0/Google.Cloud.Functions.V1.CreateFunctionRequest)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.Functions.V1/2.3.0/Google.Cloud.Functions.V1.CreateFunctionRequest)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.Functions.V1/2.2.0/Google.Cloud.Functions.V1.CreateFunctionRequest)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.Functions.V1/2.1.0/Google.Cloud.Functions.V1.CreateFunctionRequest)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.Functions.V1/2.0.0/Google.Cloud.Functions.V1.CreateFunctionRequest)
-   [1.3.0](/dotnet/docs/reference/Google.Cloud.Functions.V1/1.3.0/Google.Cloud.Functions.V1.CreateFunctionRequest)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.Functions.V1/1.2.0/Google.Cloud.Functions.V1.CreateFunctionRequest)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.Functions.V1/1.1.0/Google.Cloud.Functions.V1.CreateFunctionRequest)

```
public sealed class CreateFunctionRequest : IMessage<CreateFunctionRequest>, IEquatable<CreateFunctionRequest>, IDeepCloneable<CreateFunctionRequest>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Cloud Functions v1 API class CreateFunctionRequest.

Request for the `CreateFunction` method.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> CreateFunctionRequest

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[CreateFunctionRequest](/dotnet/docs/reference/Google.Cloud.Functions.V1/2.3.0/Google.Cloud.Functions.V1.CreateFunctionRequest), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[CreateFunctionRequest](/dotnet/docs/reference/Google.Cloud.Functions.V1/2.3.0/Google.Cloud.Functions.V1.CreateFunctionRequest), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[CreateFunctionRequest](/dotnet/docs/reference/Google.Cloud.Functions.V1/2.3.0/Google.Cloud.Functions.V1.CreateFunctionRequest), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Functions.V1](/dotnet/docs/reference/Google.Cloud.Functions.V1/2.3.0/Google.Cloud.Functions.V1)

## Assembly

Google.Cloud.Functions.V1.dll

## Constructors

### CreateFunctionRequest()

```
public CreateFunctionRequest()
```

### CreateFunctionRequest(CreateFunctionRequest)

```
public CreateFunctionRequest(CreateFunctionRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[CreateFunctionRequest](/dotnet/docs/reference/Google.Cloud.Functions.V1/2.3.0/Google.Cloud.Functions.V1.CreateFunctionRequest)`  

## Properties

### Function

```
public CloudFunction Function { get; set; }
```

Required. Function to be created.

**Property Value**

**Type**

**Description**

`[CloudFunction](/dotnet/docs/reference/Google.Cloud.Functions.V1/2.3.0/Google.Cloud.Functions.V1.CloudFunction)`

### Location

```
public string Location { get; set; }
```

Required. The project and location in which the function should be created, specified in the format `projects/*/locations/*`

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### LocationAsLocationName

```
public LocationName LocationAsLocationName { get; set; }
```

[LocationName](https://github.com/googleapis/gax-dotnet/blob/510f63bbae727cfa4cee5180d0a9916bc2dee248/Google.Api.Gax/ResourceNames/LocationName.cs)\-typed view over the [Location](/dotnet/docs/reference/Google.Cloud.Functions.V1/2.3.0/Google.Cloud.Functions.V1.CreateFunctionRequest#Google_Cloud_Functions_V1_CreateFunctionRequest_Location) resource name property.

**Property Value**

**Type**

**Description**

`[LocationName](https://github.com/googleapis/gax-dotnet/blob/510f63bbae727cfa4cee5180d0a9916bc2dee248/Google.Api.Gax/ResourceNames/LocationName.cs)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.

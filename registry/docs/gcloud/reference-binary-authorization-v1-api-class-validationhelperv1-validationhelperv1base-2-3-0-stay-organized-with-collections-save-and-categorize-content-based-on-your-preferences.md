-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Binary Authorization v1 API - Class ValidationHelperV1.ValidationHelperV1Base (2.3.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.3.0keyboard\_arrow\_down

-   [2.6.0 (latest)](/dotnet/docs/reference/Google.Cloud.BinaryAuthorization.V1/latest/Google.Cloud.BinaryAuthorization.V1.ValidationHelperV1.ValidationHelperV1Base)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.BinaryAuthorization.V1/2.5.0/Google.Cloud.BinaryAuthorization.V1.ValidationHelperV1.ValidationHelperV1Base)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.BinaryAuthorization.V1/2.4.0/Google.Cloud.BinaryAuthorization.V1.ValidationHelperV1.ValidationHelperV1Base)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.BinaryAuthorization.V1/2.3.0/Google.Cloud.BinaryAuthorization.V1.ValidationHelperV1.ValidationHelperV1Base)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.BinaryAuthorization.V1/2.2.0/Google.Cloud.BinaryAuthorization.V1.ValidationHelperV1.ValidationHelperV1Base)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.BinaryAuthorization.V1/2.1.0/Google.Cloud.BinaryAuthorization.V1.ValidationHelperV1.ValidationHelperV1Base)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.BinaryAuthorization.V1/2.0.0/Google.Cloud.BinaryAuthorization.V1.ValidationHelperV1.ValidationHelperV1Base)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.BinaryAuthorization.V1/1.0.0/Google.Cloud.BinaryAuthorization.V1.ValidationHelperV1.ValidationHelperV1Base)

```
[BindServiceMethod(typeof(ValidationHelperV1), "BindService")]
public abstract class ValidationHelperV1.ValidationHelperV1Base
```

Reference documentation and code samples for the Binary Authorization v1 API class ValidationHelperV1.ValidationHelperV1Base.

Base class for server-side implementations of ValidationHelperV1

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> ValidationHelperV1.ValidationHelperV1Base

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.BinaryAuthorization.V1](/dotnet/docs/reference/Google.Cloud.BinaryAuthorization.V1/2.3.0/Google.Cloud.BinaryAuthorization.V1)

## Assembly

Google.Cloud.BinaryAuthorization.V1.dll

## Methods

### ValidateAttestationOccurrence(ValidateAttestationOccurrenceRequest, ServerCallContext)

```
public virtual Task<ValidateAttestationOccurrenceResponse> ValidateAttestationOccurrence(ValidateAttestationOccurrenceRequest request, ServerCallContext context)
```

Returns whether the given Attestation for the given image URI was signed by the given Attestor

**Parameters**

**Name**

**Description**

`request`

`[ValidateAttestationOccurrenceRequest](/dotnet/docs/reference/Google.Cloud.BinaryAuthorization.V1/2.3.0/Google.Cloud.BinaryAuthorization.V1.ValidateAttestationOccurrenceRequest)`  

The request received from the client.

`context`

`[ServerCallContext](https://github.com/grpc/grpc-dotnet/blob/6eccb614c532d52c1569ce9f14754fdc826609ef/src/Grpc.Core.Api/ServerCallContext.cs)`  

The context of the server-side call handler being invoked.

**Returns**

**Type**

**Description**

`[Task](https://learn.microsoft.com/dotnet/api/system.threading.tasks.task-1)[ValidateAttestationOccurrenceResponse](/dotnet/docs/reference/Google.Cloud.BinaryAuthorization.V1/2.3.0/Google.Cloud.BinaryAuthorization.V1.ValidateAttestationOccurrenceResponse)`

The response to send back to the client (wrapped by a task).

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.

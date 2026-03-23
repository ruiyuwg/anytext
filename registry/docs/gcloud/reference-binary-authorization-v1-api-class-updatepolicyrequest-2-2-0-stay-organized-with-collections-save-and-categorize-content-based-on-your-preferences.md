-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Binary Authorization v1 API - Class UpdatePolicyRequest (2.2.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.2.0keyboard\_arrow\_down

-   [2.6.0 (latest)](/dotnet/docs/reference/Google.Cloud.BinaryAuthorization.V1/latest/Google.Cloud.BinaryAuthorization.V1.UpdatePolicyRequest)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.BinaryAuthorization.V1/2.5.0/Google.Cloud.BinaryAuthorization.V1.UpdatePolicyRequest)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.BinaryAuthorization.V1/2.4.0/Google.Cloud.BinaryAuthorization.V1.UpdatePolicyRequest)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.BinaryAuthorization.V1/2.3.0/Google.Cloud.BinaryAuthorization.V1.UpdatePolicyRequest)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.BinaryAuthorization.V1/2.2.0/Google.Cloud.BinaryAuthorization.V1.UpdatePolicyRequest)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.BinaryAuthorization.V1/2.1.0/Google.Cloud.BinaryAuthorization.V1.UpdatePolicyRequest)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.BinaryAuthorization.V1/2.0.0/Google.Cloud.BinaryAuthorization.V1.UpdatePolicyRequest)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.BinaryAuthorization.V1/1.0.0/Google.Cloud.BinaryAuthorization.V1.UpdatePolicyRequest)

```
public sealed class UpdatePolicyRequest : IMessage<UpdatePolicyRequest>, IEquatable<UpdatePolicyRequest>, IDeepCloneable<UpdatePolicyRequest>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Binary Authorization v1 API class UpdatePolicyRequest.

Request message for \[BinauthzManagementService.UpdatePolicy\]\[\].

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> UpdatePolicyRequest

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[UpdatePolicyRequest](/dotnet/docs/reference/Google.Cloud.BinaryAuthorization.V1/2.2.0/Google.Cloud.BinaryAuthorization.V1.UpdatePolicyRequest), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[UpdatePolicyRequest](/dotnet/docs/reference/Google.Cloud.BinaryAuthorization.V1/2.2.0/Google.Cloud.BinaryAuthorization.V1.UpdatePolicyRequest), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[UpdatePolicyRequest](/dotnet/docs/reference/Google.Cloud.BinaryAuthorization.V1/2.2.0/Google.Cloud.BinaryAuthorization.V1.UpdatePolicyRequest), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.BinaryAuthorization.V1](/dotnet/docs/reference/Google.Cloud.BinaryAuthorization.V1/2.2.0/Google.Cloud.BinaryAuthorization.V1)

## Assembly

Google.Cloud.BinaryAuthorization.V1.dll

## Constructors

### UpdatePolicyRequest()

```
public UpdatePolicyRequest()
```

### UpdatePolicyRequest(UpdatePolicyRequest)

```
public UpdatePolicyRequest(UpdatePolicyRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[UpdatePolicyRequest](/dotnet/docs/reference/Google.Cloud.BinaryAuthorization.V1/2.2.0/Google.Cloud.BinaryAuthorization.V1.UpdatePolicyRequest)`  

## Properties

### Policy

```
public Policy Policy { get; set; }
```

Required. A new or updated \[policy\]\[google.cloud.binaryauthorization.v1.Policy\] value. The service will overwrite the \[policy name\]\[google.cloud.binaryauthorization.v1.Policy.name\] field with the resource name in the request URL, in the format `projects/*/policy`.

**Property Value**

**Type**

**Description**

`[Policy](/dotnet/docs/reference/Google.Cloud.BinaryAuthorization.V1/2.2.0/Google.Cloud.BinaryAuthorization.V1.Policy)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.

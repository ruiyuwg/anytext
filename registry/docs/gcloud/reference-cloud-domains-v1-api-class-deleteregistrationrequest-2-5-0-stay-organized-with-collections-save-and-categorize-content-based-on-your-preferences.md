-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Cloud Domains v1 API - Class DeleteRegistrationRequest (2.5.0) Stay organized with collections Save and categorize content based on your preferences.

Version latestkeyboard\_arrow\_down

-   [2.5.0 (latest)](/dotnet/docs/reference/Google.Cloud.Domains.V1/latest/Google.Cloud.Domains.V1.DeleteRegistrationRequest)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.Domains.V1/2.4.0/Google.Cloud.Domains.V1.DeleteRegistrationRequest)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.Domains.V1/2.3.0/Google.Cloud.Domains.V1.DeleteRegistrationRequest)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.Domains.V1/2.2.0/Google.Cloud.Domains.V1.DeleteRegistrationRequest)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.Domains.V1/2.1.0/Google.Cloud.Domains.V1.DeleteRegistrationRequest)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.Domains.V1/2.0.0/Google.Cloud.Domains.V1.DeleteRegistrationRequest)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.Domains.V1/1.0.0/Google.Cloud.Domains.V1.DeleteRegistrationRequest)

```
public sealed class DeleteRegistrationRequest : IMessage<DeleteRegistrationRequest>, IEquatable<DeleteRegistrationRequest>, IDeepCloneable<DeleteRegistrationRequest>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Cloud Domains v1 API class DeleteRegistrationRequest.

Request for the `DeleteRegistration` method.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> DeleteRegistrationRequest

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[DeleteRegistrationRequest](/dotnet/docs/reference/Google.Cloud.Domains.V1/latest/Google.Cloud.Domains.V1.DeleteRegistrationRequest), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[DeleteRegistrationRequest](/dotnet/docs/reference/Google.Cloud.Domains.V1/latest/Google.Cloud.Domains.V1.DeleteRegistrationRequest), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[DeleteRegistrationRequest](/dotnet/docs/reference/Google.Cloud.Domains.V1/latest/Google.Cloud.Domains.V1.DeleteRegistrationRequest), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Domains.V1](/dotnet/docs/reference/Google.Cloud.Domains.V1/latest/Google.Cloud.Domains.V1)

## Assembly

Google.Cloud.Domains.V1.dll

## Constructors

### DeleteRegistrationRequest()

```
public DeleteRegistrationRequest()
```

### DeleteRegistrationRequest(DeleteRegistrationRequest)

```
public DeleteRegistrationRequest(DeleteRegistrationRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[DeleteRegistrationRequest](/dotnet/docs/reference/Google.Cloud.Domains.V1/latest/Google.Cloud.Domains.V1.DeleteRegistrationRequest)`  

## Properties

### Name

```
public string Name { get; set; }
```

Required. The name of the `Registration` to delete, in the format `projects/*/locations/*/registrations/*`.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### RegistrationName

```
public RegistrationName RegistrationName { get; set; }
```

[RegistrationName](/dotnet/docs/reference/Google.Cloud.Domains.V1/latest/Google.Cloud.Domains.V1.RegistrationName)\-typed view over the [Name](/dotnet/docs/reference/Google.Cloud.Domains.V1/latest/Google.Cloud.Domains.V1.DeleteRegistrationRequest#Google_Cloud_Domains_V1_DeleteRegistrationRequest_Name) resource name property.

**Property Value**

**Type**

**Description**

`[RegistrationName](/dotnet/docs/reference/Google.Cloud.Domains.V1/latest/Google.Cloud.Domains.V1.RegistrationName)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.

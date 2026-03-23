-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Google Cloud Talent Solution v4 API - Class DeleteTenantRequest (2.6.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.6.0keyboard\_arrow\_down

-   [2.8.0 (latest)](/dotnet/docs/reference/Google.Cloud.Talent.V4/latest/Google.Cloud.Talent.V4.DeleteTenantRequest)
-   [2.7.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.7.0/Google.Cloud.Talent.V4.DeleteTenantRequest)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.6.0/Google.Cloud.Talent.V4.DeleteTenantRequest)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.5.0/Google.Cloud.Talent.V4.DeleteTenantRequest)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.4.0/Google.Cloud.Talent.V4.DeleteTenantRequest)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.3.0/Google.Cloud.Talent.V4.DeleteTenantRequest)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.2.0/Google.Cloud.Talent.V4.DeleteTenantRequest)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.1.0/Google.Cloud.Talent.V4.DeleteTenantRequest)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.0.0/Google.Cloud.Talent.V4.DeleteTenantRequest)
-   [1.4.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/1.4.0/Google.Cloud.Talent.V4.DeleteTenantRequest)
-   [1.3.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/1.3.0/Google.Cloud.Talent.V4.DeleteTenantRequest)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/1.2.0/Google.Cloud.Talent.V4.DeleteTenantRequest)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/1.1.0/Google.Cloud.Talent.V4.DeleteTenantRequest)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.Talent.V4/1.0.0/Google.Cloud.Talent.V4.DeleteTenantRequest)

```
public sealed class DeleteTenantRequest : IMessage<DeleteTenantRequest>, IEquatable<DeleteTenantRequest>, IDeepCloneable<DeleteTenantRequest>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Google Cloud Talent Solution v4 API class DeleteTenantRequest.

Request to delete a tenant.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> DeleteTenantRequest

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[DeleteTenantRequest](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.6.0/Google.Cloud.Talent.V4.DeleteTenantRequest), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[DeleteTenantRequest](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.6.0/Google.Cloud.Talent.V4.DeleteTenantRequest), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[DeleteTenantRequest](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.6.0/Google.Cloud.Talent.V4.DeleteTenantRequest), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.Talent.V4](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.6.0/Google.Cloud.Talent.V4)

## Assembly

Google.Cloud.Talent.V4.dll

## Constructors

### DeleteTenantRequest()

```
public DeleteTenantRequest()
```

### DeleteTenantRequest(DeleteTenantRequest)

```
public DeleteTenantRequest(DeleteTenantRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[DeleteTenantRequest](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.6.0/Google.Cloud.Talent.V4.DeleteTenantRequest)`  

## Properties

### Name

```
public string Name { get; set; }
```

Required. The resource name of the tenant to be deleted.

The format is "projects/{project\_id}/tenants/{tenant\_id}", for example, "projects/foo/tenants/bar".

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### TenantName

```
public TenantName TenantName { get; set; }
```

[TenantName](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.6.0/Google.Cloud.Talent.V4.TenantName)\-typed view over the [Name](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.6.0/Google.Cloud.Talent.V4.DeleteTenantRequest#Google_Cloud_Talent_V4_DeleteTenantRequest_Name) resource name property.

**Property Value**

**Type**

**Description**

`[TenantName](/dotnet/docs/reference/Google.Cloud.Talent.V4/2.6.0/Google.Cloud.Talent.V4.TenantName)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.

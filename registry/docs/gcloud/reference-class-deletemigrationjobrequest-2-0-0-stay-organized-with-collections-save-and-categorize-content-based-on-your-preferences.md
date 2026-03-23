-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Class DeleteMigrationJobRequest (2.0.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.0.0keyboard\_arrow\_down

-   [2.6.0 (latest)](/dotnet/docs/reference/Google.Cloud.CloudDms.V1/latest/Google.Cloud.CloudDms.V1.DeleteMigrationJobRequest)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.CloudDms.V1/2.5.0/Google.Cloud.CloudDms.V1.DeleteMigrationJobRequest)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.CloudDms.V1/2.4.0/Google.Cloud.CloudDms.V1.DeleteMigrationJobRequest)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.CloudDms.V1/2.3.0/Google.Cloud.CloudDms.V1.DeleteMigrationJobRequest)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.CloudDms.V1/2.2.0/Google.Cloud.CloudDms.V1.DeleteMigrationJobRequest)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.CloudDms.V1/2.1.0/Google.Cloud.CloudDms.V1.DeleteMigrationJobRequest)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.CloudDms.V1/2.0.0/Google.Cloud.CloudDms.V1.DeleteMigrationJobRequest)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.CloudDms.V1/1.2.0/Google.Cloud.CloudDms.V1.DeleteMigrationJobRequest)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.CloudDms.V1/1.1.0/Google.Cloud.CloudDms.V1.DeleteMigrationJobRequest)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.CloudDms.V1/1.0.0/Google.Cloud.CloudDms.V1.DeleteMigrationJobRequest)

```
public sealed class DeleteMigrationJobRequest : IMessage<DeleteMigrationJobRequest>, IEquatable<DeleteMigrationJobRequest>, IDeepCloneable<DeleteMigrationJobRequest>, IBufferMessage, IMessage
```

Request message for 'DeleteMigrationJob' request.

## Inheritance

[Object](https://learn.microsoft.com/dotnet/api/system.object) \> DeleteMigrationJobRequest

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)<[DeleteMigrationJobRequest](/dotnet/docs/reference/Google.Cloud.CloudDms.V1/2.0.0/Google.Cloud.CloudDms.V1.DeleteMigrationJobRequest)\>, [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)<[DeleteMigrationJobRequest](/dotnet/docs/reference/Google.Cloud.CloudDms.V1/2.0.0/Google.Cloud.CloudDms.V1.DeleteMigrationJobRequest)\>, [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)<[DeleteMigrationJobRequest](/dotnet/docs/reference/Google.Cloud.CloudDms.V1/2.0.0/Google.Cloud.CloudDms.V1.DeleteMigrationJobRequest)\>, [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[Object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode#system-object-gethashcode)

[Object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype#system-object-gettype)

[Object.MemberwiseClone()](https://learn.microsoft.com/dotnet/api/system.object.memberwiseclone#system-object-memberwiseclone)

[Object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring#system-object-tostring)

## Namespace

[Google.Cloud.CloudDms.V1](/dotnet/docs/reference/Google.Cloud.CloudDms.V1/2.0.0/Google.Cloud.CloudDms.V1)

## Assembly

Google.Cloud.CloudDms.V1.dll

## Constructors

### DeleteMigrationJobRequest()

```
public DeleteMigrationJobRequest()
```

### DeleteMigrationJobRequest(DeleteMigrationJobRequest)

```
public DeleteMigrationJobRequest(DeleteMigrationJobRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[DeleteMigrationJobRequest](/dotnet/docs/reference/Google.Cloud.CloudDms.V1/2.0.0/Google.Cloud.CloudDms.V1.DeleteMigrationJobRequest)`  

## Properties

### Force

```
public bool Force { get; set; }
```

The destination CloudSQL connection profile is always deleted with the migration job. In case of force delete, the destination CloudSQL replica database is also deleted.

**Property Value**

**Type**

**Description**

`[Boolean](https://learn.microsoft.com/dotnet/api/system.boolean)`

### MigrationJobName

```
public MigrationJobName MigrationJobName { get; set; }
```

[MigrationJobName](/dotnet/docs/reference/Google.Cloud.CloudDms.V1/2.0.0/Google.Cloud.CloudDms.V1.MigrationJobName)\-typed view over the [Name](/dotnet/docs/reference/Google.Cloud.CloudDms.V1/2.0.0/Google.Cloud.CloudDms.V1.DeleteMigrationJobRequest#Google_Cloud_CloudDms_V1_DeleteMigrationJobRequest_Name) resource name property.

**Property Value**

**Type**

**Description**

`[MigrationJobName](/dotnet/docs/reference/Google.Cloud.CloudDms.V1/2.0.0/Google.Cloud.CloudDms.V1.MigrationJobName)`

### Name

```
public string Name { get; set; }
```

Required. Name of the migration job resource to delete.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

### RequestId

```
public string RequestId { get; set; }
```

A unique id used to identify the request. If the server receives two requests with the same id, then the second request will be ignored.

It is recommended to always set this value to a UUID.

The id must contain only letters (a-z, A-Z), numbers (0-9), underscores (\_), and hyphens (-). The maximum length is 40 characters.

**Property Value**

**Type**

**Description**

`[String](https://learn.microsoft.com/dotnet/api/system.string)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.

-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# NetApp v1 API - Class CreateBackupVaultRequest (1.0.0) Stay organized with collections Save and categorize content based on your preferences.

Version 1.0.0keyboard\_arrow\_down

-   [1.14.0 (latest)](/dotnet/docs/reference/Google.Cloud.NetApp.V1/latest/Google.Cloud.NetApp.V1.CreateBackupVaultRequest)
-   [1.13.0](/dotnet/docs/reference/Google.Cloud.NetApp.V1/1.13.0/Google.Cloud.NetApp.V1.CreateBackupVaultRequest)
-   [1.12.0](/dotnet/docs/reference/Google.Cloud.NetApp.V1/1.12.0/Google.Cloud.NetApp.V1.CreateBackupVaultRequest)
-   [1.11.0](/dotnet/docs/reference/Google.Cloud.NetApp.V1/1.11.0/Google.Cloud.NetApp.V1.CreateBackupVaultRequest)
-   [1.10.0](/dotnet/docs/reference/Google.Cloud.NetApp.V1/1.10.0/Google.Cloud.NetApp.V1.CreateBackupVaultRequest)
-   [1.9.0](/dotnet/docs/reference/Google.Cloud.NetApp.V1/1.9.0/Google.Cloud.NetApp.V1.CreateBackupVaultRequest)
-   [1.8.0](/dotnet/docs/reference/Google.Cloud.NetApp.V1/1.8.0/Google.Cloud.NetApp.V1.CreateBackupVaultRequest)
-   [1.7.0](/dotnet/docs/reference/Google.Cloud.NetApp.V1/1.7.0/Google.Cloud.NetApp.V1.CreateBackupVaultRequest)
-   [1.6.0](/dotnet/docs/reference/Google.Cloud.NetApp.V1/1.6.0/Google.Cloud.NetApp.V1.CreateBackupVaultRequest)
-   [1.5.0](/dotnet/docs/reference/Google.Cloud.NetApp.V1/1.5.0/Google.Cloud.NetApp.V1.CreateBackupVaultRequest)
-   [1.4.0](/dotnet/docs/reference/Google.Cloud.NetApp.V1/1.4.0/Google.Cloud.NetApp.V1.CreateBackupVaultRequest)
-   [1.3.0](/dotnet/docs/reference/Google.Cloud.NetApp.V1/1.3.0/Google.Cloud.NetApp.V1.CreateBackupVaultRequest)
-   [1.2.0](/dotnet/docs/reference/Google.Cloud.NetApp.V1/1.2.0/Google.Cloud.NetApp.V1.CreateBackupVaultRequest)
-   [1.1.0](/dotnet/docs/reference/Google.Cloud.NetApp.V1/1.1.0/Google.Cloud.NetApp.V1.CreateBackupVaultRequest)
-   [1.0.0](/dotnet/docs/reference/Google.Cloud.NetApp.V1/1.0.0/Google.Cloud.NetApp.V1.CreateBackupVaultRequest)

```
public sealed class CreateBackupVaultRequest : IMessage<CreateBackupVaultRequest>, IEquatable<CreateBackupVaultRequest>, IDeepCloneable<CreateBackupVaultRequest>, IBufferMessage, IMessage
```

Reference documentation and code samples for the NetApp v1 API class CreateBackupVaultRequest.

CreateBackupVaultRequest creates a backup vault.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> CreateBackupVaultRequest

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[CreateBackupVaultRequest](/dotnet/docs/reference/Google.Cloud.NetApp.V1/1.0.0/Google.Cloud.NetApp.V1.CreateBackupVaultRequest), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[CreateBackupVaultRequest](/dotnet/docs/reference/Google.Cloud.NetApp.V1/1.0.0/Google.Cloud.NetApp.V1.CreateBackupVaultRequest), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[CreateBackupVaultRequest](/dotnet/docs/reference/Google.Cloud.NetApp.V1/1.0.0/Google.Cloud.NetApp.V1.CreateBackupVaultRequest), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.NetApp.V1](/dotnet/docs/reference/Google.Cloud.NetApp.V1/1.0.0/Google.Cloud.NetApp.V1)

## Assembly

Google.Cloud.NetApp.V1.dll

## Constructors

### CreateBackupVaultRequest()

```
public CreateBackupVaultRequest()
```

### CreateBackupVaultRequest(CreateBackupVaultRequest)

```
public CreateBackupVaultRequest(CreateBackupVaultRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[CreateBackupVaultRequest](/dotnet/docs/reference/Google.Cloud.NetApp.V1/1.0.0/Google.Cloud.NetApp.V1.CreateBackupVaultRequest)`  

## Properties

### BackupVault

```
public BackupVault BackupVault { get; set; }
```

Required. A backupVault resource

**Property Value**

**Type**

**Description**

`[BackupVault](/dotnet/docs/reference/Google.Cloud.NetApp.V1/1.0.0/Google.Cloud.NetApp.V1.BackupVault)`

### BackupVaultId

```
public string BackupVaultId { get; set; }
```

Required. The ID to use for the backupVault. The ID must be unique within the specified location. The max supported length is 63 characters. This value must start with a lowercase letter followed by up to 62 lowercase letters, numbers, or hyphens, and cannot end with a hyphen. Values that do not match this pattern will trigger an INVALID\_ARGUMENT error.

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Parent

```
public string Parent { get; set; }
```

Required. The location to create the backup vaults, in the format `projects/{project_id}/locations/{location}`

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### ParentAsLocationName

```
public LocationName ParentAsLocationName { get; set; }
```

[LocationName](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax/ResourceNames/LocationName.cs)\-typed view over the [Parent](/dotnet/docs/reference/Google.Cloud.NetApp.V1/1.0.0/Google.Cloud.NetApp.V1.CreateBackupVaultRequest#Google_Cloud_NetApp_V1_CreateBackupVaultRequest_Parent) resource name property.

**Property Value**

**Type**

**Description**

`[LocationName](https://github.com/googleapis/gax-dotnet/blob/6f6fd6b220bf1c4e24ee3d6057cef7e9123d7054/Google.Api.Gax/ResourceNames/LocationName.cs)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.

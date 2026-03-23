-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Backup for GKE v1 API - Class CreateBackupRequest (2.3.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.3.0keyboard\_arrow\_down

-   [2.9.0 (latest)](/dotnet/docs/reference/Google.Cloud.GkeBackup.V1/latest/Google.Cloud.GkeBackup.V1.CreateBackupRequest)
-   [2.8.0](/dotnet/docs/reference/Google.Cloud.GkeBackup.V1/2.8.0/Google.Cloud.GkeBackup.V1.CreateBackupRequest)
-   [2.7.0](/dotnet/docs/reference/Google.Cloud.GkeBackup.V1/2.7.0/Google.Cloud.GkeBackup.V1.CreateBackupRequest)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.GkeBackup.V1/2.6.0/Google.Cloud.GkeBackup.V1.CreateBackupRequest)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.GkeBackup.V1/2.5.0/Google.Cloud.GkeBackup.V1.CreateBackupRequest)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.GkeBackup.V1/2.4.0/Google.Cloud.GkeBackup.V1.CreateBackupRequest)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.GkeBackup.V1/2.3.0/Google.Cloud.GkeBackup.V1.CreateBackupRequest)
-   [2.2.0](/dotnet/docs/reference/Google.Cloud.GkeBackup.V1/2.2.0/Google.Cloud.GkeBackup.V1.CreateBackupRequest)
-   [2.1.0](/dotnet/docs/reference/Google.Cloud.GkeBackup.V1/2.1.0/Google.Cloud.GkeBackup.V1.CreateBackupRequest)
-   [2.0.0](/dotnet/docs/reference/Google.Cloud.GkeBackup.V1/2.0.0/Google.Cloud.GkeBackup.V1.CreateBackupRequest)
-   [1.0.0-beta01](/dotnet/docs/reference/Google.Cloud.GkeBackup.V1/1.0.0-beta01/Google.Cloud.GkeBackup.V1.CreateBackupRequest)

```
public sealed class CreateBackupRequest : IMessage<CreateBackupRequest>, IEquatable<CreateBackupRequest>, IDeepCloneable<CreateBackupRequest>, IBufferMessage, IMessage
```

Reference documentation and code samples for the Backup for GKE v1 API class CreateBackupRequest.

Request message for CreateBackup.

## Inheritance

[object](https://learn.microsoft.com/dotnet/api/system.object) \> CreateBackupRequest

## Implements

[IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage-1.html)[CreateBackupRequest](/dotnet/docs/reference/Google.Cloud.GkeBackup.V1/2.3.0/Google.Cloud.GkeBackup.V1.CreateBackupRequest), [IEquatable](https://learn.microsoft.com/dotnet/api/system.iequatable-1)[CreateBackupRequest](/dotnet/docs/reference/Google.Cloud.GkeBackup.V1/2.3.0/Google.Cloud.GkeBackup.V1.CreateBackupRequest), [IDeepCloneable](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IDeepCloneable-1.html)[CreateBackupRequest](/dotnet/docs/reference/Google.Cloud.GkeBackup.V1/2.3.0/Google.Cloud.GkeBackup.V1.CreateBackupRequest), [IBufferMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IBufferMessage.html), [IMessage](https://cloud.google.com/dotnet/docs/reference/Google.Protobuf/latest/Google.Protobuf.IMessage.html)

## Inherited Members

[object.GetHashCode()](https://learn.microsoft.com/dotnet/api/system.object.gethashcode)

[object.GetType()](https://learn.microsoft.com/dotnet/api/system.object.gettype)

[object.ToString()](https://learn.microsoft.com/dotnet/api/system.object.tostring)

## Namespace

[Google.Cloud.GkeBackup.V1](/dotnet/docs/reference/Google.Cloud.GkeBackup.V1/2.3.0/Google.Cloud.GkeBackup.V1)

## Assembly

Google.Cloud.GkeBackup.V1.dll

## Constructors

### CreateBackupRequest()

```
public CreateBackupRequest()
```

### CreateBackupRequest(CreateBackupRequest)

```
public CreateBackupRequest(CreateBackupRequest other)
```

**Parameter**

**Name**

**Description**

`other`

`[CreateBackupRequest](/dotnet/docs/reference/Google.Cloud.GkeBackup.V1/2.3.0/Google.Cloud.GkeBackup.V1.CreateBackupRequest)`  

## Properties

### Backup

```
public Backup Backup { get; set; }
```

The Backup resource to create.

**Property Value**

**Type**

**Description**

`[Backup](/dotnet/docs/reference/Google.Cloud.GkeBackup.V1/2.3.0/Google.Cloud.GkeBackup.V1.Backup)`

### BackupId

```
public string BackupId { get; set; }
```

The client-provided short name for the Backup resource. This name must:

-   be between 1 and 63 characters long (inclusive)
-   consist of only lower-case ASCII letters, numbers, and dashes
-   start with a lower-case letter
-   end with a lower-case letter or number
-   be unique within the set of Backups in this BackupPlan

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### Parent

```
public string Parent { get; set; }
```

Required. The BackupPlan within which to create the Backup. Format: `projects/*/locations/*/backupPlans/*`

**Property Value**

**Type**

**Description**

`[string](https://learn.microsoft.com/dotnet/api/system.string)`

### ParentAsBackupPlanName

```
public BackupPlanName ParentAsBackupPlanName { get; set; }
```

[BackupPlanName](/dotnet/docs/reference/Google.Cloud.GkeBackup.V1/2.3.0/Google.Cloud.GkeBackup.V1.BackupPlanName)\-typed view over the [Parent](/dotnet/docs/reference/Google.Cloud.GkeBackup.V1/2.3.0/Google.Cloud.GkeBackup.V1.CreateBackupRequest#Google_Cloud_GkeBackup_V1_CreateBackupRequest_Parent) resource name property.

**Property Value**

**Type**

**Description**

`[BackupPlanName](/dotnet/docs/reference/Google.Cloud.GkeBackup.V1/2.3.0/Google.Cloud.GkeBackup.V1.BackupPlanName)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.

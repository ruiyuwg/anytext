-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface CreateBackupVaultRequestOrBuilder (0.21.0) Stay organized with collections Save and categorize content based on your preferences.

0.66.0 (latest) 0.64.0 0.62.0 0.61.0 0.59.0 0.57.0 0.55.0 0.54.0 0.53.0 0.52.0 0.51.0 0.49.0 0.47.0 0.46.0 0.43.0 0.42.0 0.41.0 0.39.0 0.38.0 0.37.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.28.0 0.27.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.3.0 0.2.0 0.1.0

```
public interface CreateBackupVaultRequestOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getBackupVault()

```
public abstract BackupVault getBackupVault()
```

Required. A backupVault resource

`.google.cloud.netapp.v1.BackupVault backup_vault = 3 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[BackupVault](/java/docs/reference/google-cloud-netapp/0.21.0/com.google.cloud.netapp.v1.BackupVault)`

The backupVault.

### getBackupVaultId()

```
public abstract String getBackupVaultId()
```

Required. The ID to use for the backupVault. The ID must be unique within the specified location. The max supported length is 63 characters. This value must start with a lowercase letter followed by up to 62 lowercase letters, numbers, or hyphens, and cannot end with a hyphen. Values that do not match this pattern will trigger an INVALID\_ARGUMENT error.

`string backup_vault_id = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The backupVaultId.

### getBackupVaultIdBytes()

```
public abstract ByteString getBackupVaultIdBytes()
```

Required. The ID to use for the backupVault. The ID must be unique within the specified location. The max supported length is 63 characters. This value must start with a lowercase letter followed by up to 62 lowercase letters, numbers, or hyphens, and cannot end with a hyphen. Values that do not match this pattern will trigger an INVALID\_ARGUMENT error.

`string backup_vault_id = 2 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for backupVaultId.

### getBackupVaultOrBuilder()

```
public abstract BackupVaultOrBuilder getBackupVaultOrBuilder()
```

Required. A backupVault resource

`.google.cloud.netapp.v1.BackupVault backup_vault = 3 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[BackupVaultOrBuilder](/java/docs/reference/google-cloud-netapp/0.21.0/com.google.cloud.netapp.v1.BackupVaultOrBuilder)`

### getParent()

```
public abstract String getParent()
```

Required. The location to create the backup vaults, in the format `projects/{project_id}/locations/{location}`

`string parent = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The parent.

### getParentBytes()

```
public abstract ByteString getParentBytes()
```

Required. The location to create the backup vaults, in the format `projects/{project_id}/locations/{location}`

`string parent = 1 [(.google.api.field_behavior) = REQUIRED, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for parent.

### hasBackupVault()

```
public abstract boolean hasBackupVault()
```

Required. A backupVault resource

`.google.cloud.netapp.v1.BackupVault backup_vault = 3 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the backupVault field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.

-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface CreateCloudBackupActionOrBuilder (6.80.1) Stay organized with collections Save and categorize content based on your preferences.

6.111.1 (latest) 6.111.0 6.108.0 6.107.0 6.103.0 6.102.1 6.101.1 6.100.0 6.99.0 6.98.1 6.97.1 6.96.1 6.95.1 6.94.0 6.93.0 6.89.0 6.88.0 6.87.0 6.86.0 6.85.0 6.83.0 6.82.0 6.80.1 6.79.0 6.77.0 6.74.1 6.72.0 6.71.0 6.69.0 6.68.0 6.66.0 6.65.1 6.62.0 6.60.0 6.58.0 6.57.0 6.56.0 6.55.0 6.54.0 6.53.0 6.52.1 6.51.0 6.50.1 6.49.0 6.25.1 6.24.0 6.23.4 6.22.0 6.21.2 6.20.0 6.19.1 6.18.0 6.17.4 6.14.1

```
public interface CreateCloudBackupActionOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getBackupId()

```
public abstract String getBackupId()
```

The id of the backup to be created, e.g. "test-backup".

`string backup_id = 3;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The backupId.

### getBackupIdBytes()

```
public abstract ByteString getBackupIdBytes()
```

The id of the backup to be created, e.g. "test-backup".

`string backup_id = 3;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for backupId.

### getDatabaseId()

```
public abstract String getDatabaseId()
```

The id of the database from which this backup was created, e.g. "db0". Note that this needs to be in the same instance as the backup.

`string database_id = 4;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The databaseId.

### getDatabaseIdBytes()

```
public abstract ByteString getDatabaseIdBytes()
```

The id of the database from which this backup was created, e.g. "db0". Note that this needs to be in the same instance as the backup.

`string database_id = 4;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for databaseId.

### getEncryptionConfig()

```
public abstract EncryptionConfig getEncryptionConfig()
```

The KMS key(s) used to encrypt the backup to be created if the backup should be CMEK protected.

`.google.spanner.admin.database.v1.EncryptionConfig encryption_config = 7;`

**Returns**

**Type**

**Description**

`[EncryptionConfig](/java/docs/reference/google-cloud-spanner/6.80.1/com.google.spanner.admin.database.v1.EncryptionConfig)`

The encryptionConfig.

### getEncryptionConfigOrBuilder()

```
public abstract EncryptionConfigOrBuilder getEncryptionConfigOrBuilder()
```

The KMS key(s) used to encrypt the backup to be created if the backup should be CMEK protected.

`.google.spanner.admin.database.v1.EncryptionConfig encryption_config = 7;`

**Returns**

**Type**

**Description**

`[EncryptionConfigOrBuilder](/java/docs/reference/google-cloud-spanner/6.80.1/com.google.spanner.admin.database.v1.EncryptionConfigOrBuilder)`

### getExpireTime()

```
public abstract Timestamp getExpireTime()
```

Output only. The expiration time of the backup, which must be at least 6 hours and at most 366 days from the time the request is received.

`.google.protobuf.Timestamp expire_time = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The expireTime.

### getExpireTimeOrBuilder()

```
public abstract TimestampOrBuilder getExpireTimeOrBuilder()
```

Output only. The expiration time of the backup, which must be at least 6 hours and at most 366 days from the time the request is received.

`.google.protobuf.Timestamp expire_time = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getInstanceId()

```
public abstract String getInstanceId()
```

Cloud instance ID (not path), e.g. "test-instance".

`string instance_id = 2;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The instanceId.

### getInstanceIdBytes()

```
public abstract ByteString getInstanceIdBytes()
```

Cloud instance ID (not path), e.g. "test-instance".

`string instance_id = 2;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for instanceId.

### getProjectId()

```
public abstract String getProjectId()
```

Cloud project ID, e.g. "spanner-cloud-systest".

`string project_id = 1;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The projectId.

### getProjectIdBytes()

```
public abstract ByteString getProjectIdBytes()
```

Cloud project ID, e.g. "spanner-cloud-systest".

`string project_id = 1;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for projectId.

### getVersionTime()

```
public abstract Timestamp getVersionTime()
```

The version time of the backup, which must be within the time range of \[earliest\_version\_time, NOW\], where earliest\_version\_time is retrieved by cloud spanner frontend API (See details: go/cs-pitr-lite-design).

`optional .google.protobuf.Timestamp version_time = 6;`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The versionTime.

### getVersionTimeOrBuilder()

```
public abstract TimestampOrBuilder getVersionTimeOrBuilder()
```

The version time of the backup, which must be within the time range of \[earliest\_version\_time, NOW\], where earliest\_version\_time is retrieved by cloud spanner frontend API (See details: go/cs-pitr-lite-design).

`optional .google.protobuf.Timestamp version_time = 6;`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### hasEncryptionConfig()

```
public abstract boolean hasEncryptionConfig()
```

The KMS key(s) used to encrypt the backup to be created if the backup should be CMEK protected.

`.google.spanner.admin.database.v1.EncryptionConfig encryption_config = 7;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the encryptionConfig field is set.

### hasExpireTime()

```
public abstract boolean hasExpireTime()
```

Output only. The expiration time of the backup, which must be at least 6 hours and at most 366 days from the time the request is received.

`.google.protobuf.Timestamp expire_time = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the expireTime field is set.

### hasVersionTime()

```
public abstract boolean hasVersionTime()
```

The version time of the backup, which must be within the time range of \[earliest\_version\_time, NOW\], where earliest\_version\_time is retrieved by cloud spanner frontend API (See details: go/cs-pitr-lite-design).

`optional .google.protobuf.Timestamp version_time = 6;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the versionTime field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.

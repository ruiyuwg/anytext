-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface WorkstationConfig.PersistentDirectory.GceRegionalPersistentDiskOrBuilder (0.45.0) Stay organized with collections Save and categorize content based on your preferences.

0.75.0 (latest) 0.73.0 0.71.0 0.70.0 0.68.0 0.66.0 0.64.0 0.63.0 0.62.0 0.61.0 0.60.0 0.58.0 0.56.0 0.55.0 0.52.0 0.51.0 0.50.0 0.48.0 0.47.0 0.46.0 0.45.0 0.44.0 0.43.0 0.42.0 0.41.0 0.40.0 0.39.0 0.37.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.0 0.3.0 0.2.0 0.1.0

```
public static interface WorkstationConfig.PersistentDirectory.GceRegionalPersistentDiskOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getDiskType()

```
public abstract String getDiskType()
```

Optional. The [type of the persistent disk](https://cloud.google.com/compute/docs/disks#disk-types) for the home directory. Defaults to `"pd-standard"`.

`string disk_type = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The diskType.

### getDiskTypeBytes()

```
public abstract ByteString getDiskTypeBytes()
```

Optional. The [type of the persistent disk](https://cloud.google.com/compute/docs/disks#disk-types) for the home directory. Defaults to `"pd-standard"`.

`string disk_type = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for diskType.

### getFsType()

```
public abstract String getFsType()
```

Optional. Type of file system that the disk should be formatted with. The workstation image must support this file system type. Must be empty if source\_snapshot is set. Defaults to `"ext4"`.

`string fs_type = 2 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The fsType.

### getFsTypeBytes()

```
public abstract ByteString getFsTypeBytes()
```

Optional. Type of file system that the disk should be formatted with. The workstation image must support this file system type. Must be empty if source\_snapshot is set. Defaults to `"ext4"`.

`string fs_type = 2 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for fsType.

### getReclaimPolicy()

```
public abstract WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.ReclaimPolicy getReclaimPolicy()
```

Optional. Whether the persistent disk should be deleted when the workstation is deleted. Valid values are `DELETE` and `RETAIN`. Defaults to `DELETE`.

`.google.cloud.workstations.v1.WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.ReclaimPolicy reclaim_policy = 4 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.ReclaimPolicy](/java/docs/reference/google-cloud-workstations/0.45.0/com.google.cloud.workstations.v1.WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.ReclaimPolicy)`

The reclaimPolicy.

### getReclaimPolicyValue()

```
public abstract int getReclaimPolicyValue()
```

Optional. Whether the persistent disk should be deleted when the workstation is deleted. Valid values are `DELETE` and `RETAIN`. Defaults to `DELETE`.

`.google.cloud.workstations.v1.WorkstationConfig.PersistentDirectory.GceRegionalPersistentDisk.ReclaimPolicy reclaim_policy = 4 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for reclaimPolicy.

### getSizeGb()

```
public abstract int getSizeGb()
```

Optional. The GB capacity of a persistent home directory for each workstation created with this configuration. Must be empty if source\_snapshot is set.

Valid values are `10`, `50`, `100`, `200`, `500`, or `1000`. Defaults to `200`. If less than `200` GB, the disk\_type must be `"pd-balanced"` or `"pd-ssd"`.

`int32 size_gb = 1 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The sizeGb.

### getSourceSnapshot()

```
public abstract String getSourceSnapshot()
```

Optional. Name of the snapshot to use as the source for the disk. If set, size\_gb and fs\_type must be empty.

`string source_snapshot = 5 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The sourceSnapshot.

### getSourceSnapshotBytes()

```
public abstract ByteString getSourceSnapshotBytes()
```

Optional. Name of the snapshot to use as the source for the disk. If set, size\_gb and fs\_type must be empty.

`string source_snapshot = 5 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for sourceSnapshot.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.

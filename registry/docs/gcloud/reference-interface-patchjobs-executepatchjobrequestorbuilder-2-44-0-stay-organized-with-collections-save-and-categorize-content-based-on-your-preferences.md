-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface PatchJobs.ExecutePatchJobRequestOrBuilder (2.44.0) Stay organized with collections Save and categorize content based on your preferences.

2.89.0 (latest) 2.87.0 2.85.0 2.84.0 2.82.0 2.80.0 2.78.0 2.77.0 2.76.0 2.75.0 2.74.0 2.72.0 2.70.0 2.69.0 2.66.0 2.65.0 2.64.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.6 2.4.3 2.3.2

```
public static interface PatchJobs.ExecutePatchJobRequestOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getDescription()

```
public abstract String getDescription()
```

Description of the patch job. Length of the description is limited to 1024 characters.

`string description = 2;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The description.

### getDescriptionBytes()

```
public abstract ByteString getDescriptionBytes()
```

Description of the patch job. Length of the description is limited to 1024 characters.

`string description = 2;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for description.

### getDisplayName()

```
public abstract String getDisplayName()
```

Display name for this patch job. This does not have to be unique.

`string display_name = 8;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The displayName.

### getDisplayNameBytes()

```
public abstract ByteString getDisplayNameBytes()
```

Display name for this patch job. This does not have to be unique.

`string display_name = 8;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for displayName.

### getDryRun()

```
public abstract boolean getDryRun()
```

If this patch is a dry-run only, instances are contacted but will do nothing.

`bool dry_run = 6;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The dryRun.

### getDuration()

```
public abstract Duration getDuration()
```

Duration of the patch job. After the duration ends, the patch job times out.

`.google.protobuf.Duration duration = 5;`

**Returns**

**Type**

**Description**

`[Duration](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.html)`

The duration.

### getDurationOrBuilder()

```
public abstract DurationOrBuilder getDurationOrBuilder()
```

Duration of the patch job. After the duration ends, the patch job times out.

`.google.protobuf.Duration duration = 5;`

**Returns**

**Type**

**Description**

`[DurationOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.DurationOrBuilder.html)`

### getInstanceFilter()

```
public abstract PatchJobs.PatchInstanceFilter getInstanceFilter()
```

Required. Instances to patch, either explicitly or filtered by some criteria such as zone or labels.

`.google.cloud.osconfig.v1beta.PatchInstanceFilter instance_filter = 7 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[PatchJobs.PatchInstanceFilter](/java/docs/reference/google-cloud-os-config/2.44.0/com.google.cloud.osconfig.v1beta.PatchJobs.PatchInstanceFilter)`

The instanceFilter.

### getInstanceFilterOrBuilder()

```
public abstract PatchJobs.PatchInstanceFilterOrBuilder getInstanceFilterOrBuilder()
```

Required. Instances to patch, either explicitly or filtered by some criteria such as zone or labels.

`.google.cloud.osconfig.v1beta.PatchInstanceFilter instance_filter = 7 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[PatchJobs.PatchInstanceFilterOrBuilder](/java/docs/reference/google-cloud-os-config/2.44.0/com.google.cloud.osconfig.v1beta.PatchJobs.PatchInstanceFilterOrBuilder)`

### getParent()

```
public abstract String getParent()
```

Required. The project in which to run this patch in the form `projects/*`

`string parent = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The parent.

### getParentBytes()

```
public abstract ByteString getParentBytes()
```

Required. The project in which to run this patch in the form `projects/*`

`string parent = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for parent.

### getPatchConfig()

```
public abstract PatchJobs.PatchConfig getPatchConfig()
```

Patch configuration being applied. If omitted, instances are patched using the default configurations.

`.google.cloud.osconfig.v1beta.PatchConfig patch_config = 4;`

**Returns**

**Type**

**Description**

`[PatchJobs.PatchConfig](/java/docs/reference/google-cloud-os-config/2.44.0/com.google.cloud.osconfig.v1beta.PatchJobs.PatchConfig)`

The patchConfig.

### getPatchConfigOrBuilder()

```
public abstract PatchJobs.PatchConfigOrBuilder getPatchConfigOrBuilder()
```

Patch configuration being applied. If omitted, instances are patched using the default configurations.

`.google.cloud.osconfig.v1beta.PatchConfig patch_config = 4;`

**Returns**

**Type**

**Description**

`[PatchJobs.PatchConfigOrBuilder](/java/docs/reference/google-cloud-os-config/2.44.0/com.google.cloud.osconfig.v1beta.PatchJobs.PatchConfigOrBuilder)`

### getRollout()

```
public abstract PatchJobs.PatchRollout getRollout()
```

Rollout strategy of the patch job.

`.google.cloud.osconfig.v1beta.PatchRollout rollout = 9;`

**Returns**

**Type**

**Description**

`[PatchJobs.PatchRollout](/java/docs/reference/google-cloud-os-config/2.44.0/com.google.cloud.osconfig.v1beta.PatchJobs.PatchRollout)`

The rollout.

### getRolloutOrBuilder()

```
public abstract PatchJobs.PatchRolloutOrBuilder getRolloutOrBuilder()
```

Rollout strategy of the patch job.

`.google.cloud.osconfig.v1beta.PatchRollout rollout = 9;`

**Returns**

**Type**

**Description**

`[PatchJobs.PatchRolloutOrBuilder](/java/docs/reference/google-cloud-os-config/2.44.0/com.google.cloud.osconfig.v1beta.PatchJobs.PatchRolloutOrBuilder)`

### hasDuration()

```
public abstract boolean hasDuration()
```

Duration of the patch job. After the duration ends, the patch job times out.

`.google.protobuf.Duration duration = 5;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the duration field is set.

### hasInstanceFilter()

```
public abstract boolean hasInstanceFilter()
```

Required. Instances to patch, either explicitly or filtered by some criteria such as zone or labels.

`.google.cloud.osconfig.v1beta.PatchInstanceFilter instance_filter = 7 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the instanceFilter field is set.

### hasPatchConfig()

```
public abstract boolean hasPatchConfig()
```

Patch configuration being applied. If omitted, instances are patched using the default configurations.

`.google.cloud.osconfig.v1beta.PatchConfig patch_config = 4;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the patchConfig field is set.

### hasRollout()

```
public abstract boolean hasRollout()
```

Rollout strategy of the patch job.

`.google.cloud.osconfig.v1beta.PatchRollout rollout = 9;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the rollout field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.

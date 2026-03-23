-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface ReportConfigOrBuilder (0.4.0) Stay organized with collections Save and categorize content based on your preferences.

0.69.0 (latest) 0.67.0 0.65.0 0.64.0 0.62.0 0.60.0 0.58.0 0.57.0 0.56.0 0.55.0 0.54.0 0.52.0 0.50.0 0.49.0 0.46.0 0.45.0 0.44.0 0.42.0 0.41.0 0.40.0 0.39.0 0.38.0 0.37.0 0.36.0 0.35.0 0.34.0 0.33.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.6.0 0.5.0 0.4.0 0.3.0 0.2.0 0.1.0

```
public interface ReportConfigOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getCreateTime()

```
public abstract Timestamp getCreateTime()
```

Output only. The timestamp when the resource was created.

`.google.protobuf.Timestamp create_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The createTime.

### getCreateTimeOrBuilder()

```
public abstract TimestampOrBuilder getCreateTimeOrBuilder()
```

Output only. The timestamp when the resource was created.

`.google.protobuf.Timestamp create_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getDescription()

```
public abstract String getDescription()
```

Free-text description.

`string description = 5;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The description.

### getDescriptionBytes()

```
public abstract ByteString getDescriptionBytes()
```

Free-text description.

`string description = 5;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for description.

### getDisplayName()

```
public abstract String getDisplayName()
```

User-friendly display name. Maximum length is 63 characters.

`string display_name = 4;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The displayName.

### getDisplayNameBytes()

```
public abstract ByteString getDisplayNameBytes()
```

User-friendly display name. Maximum length is 63 characters.

`string display_name = 4;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for displayName.

### getGroupPreferencesetAssignments(int index)

```
public abstract ReportConfig.GroupPreferenceSetAssignment getGroupPreferencesetAssignments(int index)
```

Required. Collection of combinations of groups and preference sets.

`repeated .google.cloud.migrationcenter.v1.ReportConfig.GroupPreferenceSetAssignment group_preferenceset_assignments = 6 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[ReportConfig.GroupPreferenceSetAssignment](/java/docs/reference/google-cloud-migrationcenter/0.4.0/com.google.cloud.migrationcenter.v1.ReportConfig.GroupPreferenceSetAssignment)`

### getGroupPreferencesetAssignmentsCount()

```
public abstract int getGroupPreferencesetAssignmentsCount()
```

Required. Collection of combinations of groups and preference sets.

`repeated .google.cloud.migrationcenter.v1.ReportConfig.GroupPreferenceSetAssignment group_preferenceset_assignments = 6 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getGroupPreferencesetAssignmentsList()

```
public abstract List<ReportConfig.GroupPreferenceSetAssignment> getGroupPreferencesetAssignmentsList()
```

Required. Collection of combinations of groups and preference sets.

`repeated .google.cloud.migrationcenter.v1.ReportConfig.GroupPreferenceSetAssignment group_preferenceset_assignments = 6 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[GroupPreferenceSetAssignment](/java/docs/reference/google-cloud-migrationcenter/0.4.0/com.google.cloud.migrationcenter.v1.ReportConfig.GroupPreferenceSetAssignment)>`

### getGroupPreferencesetAssignmentsOrBuilder(int index)

```
public abstract ReportConfig.GroupPreferenceSetAssignmentOrBuilder getGroupPreferencesetAssignmentsOrBuilder(int index)
```

Required. Collection of combinations of groups and preference sets.

`repeated .google.cloud.migrationcenter.v1.ReportConfig.GroupPreferenceSetAssignment group_preferenceset_assignments = 6 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[ReportConfig.GroupPreferenceSetAssignmentOrBuilder](/java/docs/reference/google-cloud-migrationcenter/0.4.0/com.google.cloud.migrationcenter.v1.ReportConfig.GroupPreferenceSetAssignmentOrBuilder)`

### getGroupPreferencesetAssignmentsOrBuilderList()

```
public abstract List<? extends ReportConfig.GroupPreferenceSetAssignmentOrBuilder> getGroupPreferencesetAssignmentsOrBuilderList()
```

Required. Collection of combinations of groups and preference sets.

`repeated .google.cloud.migrationcenter.v1.ReportConfig.GroupPreferenceSetAssignment group_preferenceset_assignments = 6 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.migrationcenter.v1.ReportConfig.GroupPreferenceSetAssignmentOrBuilder>`

### getName()

```
public abstract String getName()
```

Output only. Name of resource.

`string name = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The name.

### getNameBytes()

```
public abstract ByteString getNameBytes()
```

Output only. Name of resource.

`string name = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for name.

### getUpdateTime()

```
public abstract Timestamp getUpdateTime()
```

Output only. The timestamp when the resource was last updated.

`.google.protobuf.Timestamp update_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The updateTime.

### getUpdateTimeOrBuilder()

```
public abstract TimestampOrBuilder getUpdateTimeOrBuilder()
```

Output only. The timestamp when the resource was last updated.

`.google.protobuf.Timestamp update_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### hasCreateTime()

```
public abstract boolean hasCreateTime()
```

Output only. The timestamp when the resource was created.

`.google.protobuf.Timestamp create_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the createTime field is set.

### hasUpdateTime()

```
public abstract boolean hasUpdateTime()
```

Output only. The timestamp when the resource was last updated.

`.google.protobuf.Timestamp update_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the updateTime field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.

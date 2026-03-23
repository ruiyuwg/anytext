-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface ProjectOrBuilder (1.42.0) Stay organized with collections Save and categorize content based on your preferences.

1.89.0 (latest) 1.87.0 1.85.0 1.84.0 1.82.0 1.80.0 1.78.0 1.77.0 1.76.0 1.75.0 1.74.0 1.72.0 1.70.0 1.69.0 1.66.0 1.65.0 1.64.0 1.62.0 1.61.0 1.60.0 1.59.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.51.0 1.50.0 1.49.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.39.0 1.38.0 1.37.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.26.0 1.25.0 1.24.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.11.0 1.10.0 1.9.0 1.8.0 1.7.0 1.6.0 1.5.6 1.4.0 1.3.2 1.2.12

```
public interface ProjectOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### containsLabels(String key)

```
public abstract boolean containsLabels(String key)
```

Optional. The labels associated with this project.

Label keys must be between 1 and 63 characters long and must conform to the following regular expression: \\[a-z\\](/java/docs/reference/google-cloud-resourcemanager/1.42.0/\[-a-z0-9\]*\[a-z0-9\])?.

Label values must be between 0 and 63 characters long and must conform to the regular expression (\\[a-z\\](/java/docs/reference/google-cloud-resourcemanager/1.42.0/\[-a-z0-9\]*\[a-z0-9\])?)?.

No more than 64 labels can be associated with a given resource.

Clients should store labels in a representation such as JSON that does not depend on specific characters being disallowed.

Example: `"myBusinessDimension" : "businessValue"`

`map<string, string> labels = 10 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getCreateTime()

```
public abstract Timestamp getCreateTime()
```

Output only. Creation time.

`.google.protobuf.Timestamp create_time = 6 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The createTime.

### getCreateTimeOrBuilder()

```
public abstract TimestampOrBuilder getCreateTimeOrBuilder()
```

Output only. Creation time.

`.google.protobuf.Timestamp create_time = 6 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getDeleteTime()

```
public abstract Timestamp getDeleteTime()
```

Output only. The time at which this resource was requested for deletion.

`.google.protobuf.Timestamp delete_time = 8 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The deleteTime.

### getDeleteTimeOrBuilder()

```
public abstract TimestampOrBuilder getDeleteTimeOrBuilder()
```

Output only. The time at which this resource was requested for deletion.

`.google.protobuf.Timestamp delete_time = 8 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getDisplayName()

```
public abstract String getDisplayName()
```

Optional. A user-assigned display name of the project. When present it must be between 4 to 30 characters. Allowed characters are: lowercase and uppercase letters, numbers, hyphen, single-quote, double-quote, space, and exclamation point.

Example: `My Project`

`string display_name = 5 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The displayName.

### getDisplayNameBytes()

```
public abstract ByteString getDisplayNameBytes()
```

Optional. A user-assigned display name of the project. When present it must be between 4 to 30 characters. Allowed characters are: lowercase and uppercase letters, numbers, hyphen, single-quote, double-quote, space, and exclamation point.

Example: `My Project`

`string display_name = 5 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for displayName.

### getEtag()

```
public abstract String getEtag()
```

Output only. A checksum computed by the server based on the current value of the Project resource. This may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.

`string etag = 9 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The etag.

### getEtagBytes()

```
public abstract ByteString getEtagBytes()
```

Output only. A checksum computed by the server based on the current value of the Project resource. This may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.

`string etag = 9 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for etag.

### getLabels() (deprecated)

```
public abstract Map<String,String> getLabels()
```

Use [#getLabelsMap()](/java/docs/reference/google-cloud-resourcemanager/1.42.0/com.google.cloud.resourcemanager.v3.ProjectOrBuilder#com_google_cloud_resourcemanager_v3_ProjectOrBuilder_getLabelsMap__) instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getLabelsCount()

```
public abstract int getLabelsCount()
```

Optional. The labels associated with this project.

Label keys must be between 1 and 63 characters long and must conform to the following regular expression: \\[a-z\\](/java/docs/reference/google-cloud-resourcemanager/1.42.0/\[-a-z0-9\]*\[a-z0-9\])?.

Label values must be between 0 and 63 characters long and must conform to the regular expression (\\[a-z\\](/java/docs/reference/google-cloud-resourcemanager/1.42.0/\[-a-z0-9\]*\[a-z0-9\])?)?.

No more than 64 labels can be associated with a given resource.

Clients should store labels in a representation such as JSON that does not depend on specific characters being disallowed.

Example: `"myBusinessDimension" : "businessValue"`

`map<string, string> labels = 10 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getLabelsMap()

```
public abstract Map<String,String> getLabelsMap()
```

Optional. The labels associated with this project.

Label keys must be between 1 and 63 characters long and must conform to the following regular expression: \\[a-z\\](/java/docs/reference/google-cloud-resourcemanager/1.42.0/\[-a-z0-9\]*\[a-z0-9\])?.

Label values must be between 0 and 63 characters long and must conform to the regular expression (\\[a-z\\](/java/docs/reference/google-cloud-resourcemanager/1.42.0/\[-a-z0-9\]*\[a-z0-9\])?)?.

No more than 64 labels can be associated with a given resource.

Clients should store labels in a representation such as JSON that does not depend on specific characters being disallowed.

Example: `"myBusinessDimension" : "businessValue"`

`map<string, string> labels = 10 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getLabelsOrDefault(String key, String defaultValue)

```
public abstract String getLabelsOrDefault(String key, String defaultValue)
```

Optional. The labels associated with this project.

Label keys must be between 1 and 63 characters long and must conform to the following regular expression: \\[a-z\\](/java/docs/reference/google-cloud-resourcemanager/1.42.0/\[-a-z0-9\]*\[a-z0-9\])?.

Label values must be between 0 and 63 characters long and must conform to the regular expression (\\[a-z\\](/java/docs/reference/google-cloud-resourcemanager/1.42.0/\[-a-z0-9\]*\[a-z0-9\])?)?.

No more than 64 labels can be associated with a given resource.

Clients should store labels in a representation such as JSON that does not depend on specific characters being disallowed.

Example: `"myBusinessDimension" : "businessValue"`

`map<string, string> labels = 10 [(.google.api.field_behavior) = OPTIONAL];`

**Parameters**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`defaultValue`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### getLabelsOrThrow(String key)

```
public abstract String getLabelsOrThrow(String key)
```

Optional. The labels associated with this project.

Label keys must be between 1 and 63 characters long and must conform to the following regular expression: \\[a-z\\](/java/docs/reference/google-cloud-resourcemanager/1.42.0/\[-a-z0-9\]*\[a-z0-9\])?.

Label values must be between 0 and 63 characters long and must conform to the regular expression (\\[a-z\\](/java/docs/reference/google-cloud-resourcemanager/1.42.0/\[-a-z0-9\]*\[a-z0-9\])?)?.

No more than 64 labels can be associated with a given resource.

Clients should store labels in a representation such as JSON that does not depend on specific characters being disallowed.

Example: `"myBusinessDimension" : "businessValue"`

`map<string, string> labels = 10 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### getName()

```
public abstract String getName()
```

Output only. The unique resource name of the project. It is an int64 generated number prefixed by "projects/".

Example: `projects/415104041262`

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

Output only. The unique resource name of the project. It is an int64 generated number prefixed by "projects/".

Example: `projects/415104041262`

`string name = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for name.

### getParent()

```
public abstract String getParent()
```

Optional. A reference to a parent Resource. eg., `organizations/123` or `folders/876`.

`string parent = 2 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The parent.

### getParentBytes()

```
public abstract ByteString getParentBytes()
```

Optional. A reference to a parent Resource. eg., `organizations/123` or `folders/876`.

`string parent = 2 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for parent.

### getProjectId()

```
public abstract String getProjectId()
```

Immutable. The unique, user-assigned id of the project. It must be 6 to 30 lowercase ASCII letters, digits, or hyphens. It must start with a letter. Trailing hyphens are prohibited.

Example: `tokyo-rain-123`

`string project_id = 3 [(.google.api.field_behavior) = IMMUTABLE];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The projectId.

### getProjectIdBytes()

```
public abstract ByteString getProjectIdBytes()
```

Immutable. The unique, user-assigned id of the project. It must be 6 to 30 lowercase ASCII letters, digits, or hyphens. It must start with a letter. Trailing hyphens are prohibited.

Example: `tokyo-rain-123`

`string project_id = 3 [(.google.api.field_behavior) = IMMUTABLE];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for projectId.

### getState()

```
public abstract Project.State getState()
```

Output only. The project lifecycle state.

`.google.cloud.resourcemanager.v3.Project.State state = 4 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Project.State](/java/docs/reference/google-cloud-resourcemanager/1.42.0/com.google.cloud.resourcemanager.v3.Project.State)`

The state.

### getStateValue()

```
public abstract int getStateValue()
```

Output only. The project lifecycle state.

`.google.cloud.resourcemanager.v3.Project.State state = 4 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for state.

### getUpdateTime()

```
public abstract Timestamp getUpdateTime()
```

Output only. The most recent time this resource was modified.

`.google.protobuf.Timestamp update_time = 7 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The updateTime.

### getUpdateTimeOrBuilder()

```
public abstract TimestampOrBuilder getUpdateTimeOrBuilder()
```

Output only. The most recent time this resource was modified.

`.google.protobuf.Timestamp update_time = 7 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### hasCreateTime()

```
public abstract boolean hasCreateTime()
```

Output only. Creation time.

`.google.protobuf.Timestamp create_time = 6 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the createTime field is set.

### hasDeleteTime()

```
public abstract boolean hasDeleteTime()
```

Output only. The time at which this resource was requested for deletion.

`.google.protobuf.Timestamp delete_time = 8 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the deleteTime field is set.

### hasUpdateTime()

```
public abstract boolean hasUpdateTime()
```

Output only. The most recent time this resource was modified.

`.google.protobuf.Timestamp update_time = 7 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the updateTime field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.

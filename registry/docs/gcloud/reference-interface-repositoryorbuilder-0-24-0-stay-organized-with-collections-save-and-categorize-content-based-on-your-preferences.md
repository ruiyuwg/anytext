-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface RepositoryOrBuilder (0.24.0) Stay organized with collections Save and categorize content based on your preferences.

0.57.0 (latest) 0.55.0 0.53.0 0.52.0 0.50.0 0.48.0 0.46.0 0.45.0 0.44.0 0.43.0 0.42.0 0.40.0 0.38.0 0.37.0 0.34.0 0.33.0 0.32.0 0.30.0 0.29.0 0.28.0 0.27.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.7.0 0.6.0 0.5.0 0.4.0 0.3.0 0.2.0 0.1.0

```
public interface RepositoryOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getCreateTime()

```
public abstract Timestamp getCreateTime()
```

Output only. Create timestamp.

`.google.protobuf.Timestamp create_time = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The createTime.

### getCreateTimeOrBuilder()

```
public abstract TimestampOrBuilder getCreateTimeOrBuilder()
```

Output only. Create timestamp.

`.google.protobuf.Timestamp create_time = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getDescription()

```
public abstract String getDescription()
```

Optional. Description of the repository, which cannot exceed 500 characters.

`string description = 2 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The description.

### getDescriptionBytes()

```
public abstract ByteString getDescriptionBytes()
```

Optional. Description of the repository, which cannot exceed 500 characters.

`string description = 2 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for description.

### getEtag()

```
public abstract String getEtag()
```

Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.

`string etag = 8 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The etag.

### getEtagBytes()

```
public abstract ByteString getEtagBytes()
```

Optional. This checksum is computed by the server based on the value of other fields, and may be sent on update and delete requests to ensure the client has an up-to-date value before proceeding.

`string etag = 8 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for etag.

### getInitialConfig()

```
public abstract Repository.InitialConfig getInitialConfig()
```

Input only. Initial configurations for the repository.

`.google.cloud.securesourcemanager.v1.Repository.InitialConfig initial_config = 10 [(.google.api.field_behavior) = INPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Repository.InitialConfig](/java/docs/reference/google-cloud-securesourcemanager/0.24.0/com.google.cloud.securesourcemanager.v1.Repository.InitialConfig)`

The initialConfig.

### getInitialConfigOrBuilder()

```
public abstract Repository.InitialConfigOrBuilder getInitialConfigOrBuilder()
```

Input only. Initial configurations for the repository.

`.google.cloud.securesourcemanager.v1.Repository.InitialConfig initial_config = 10 [(.google.api.field_behavior) = INPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Repository.InitialConfigOrBuilder](/java/docs/reference/google-cloud-securesourcemanager/0.24.0/com.google.cloud.securesourcemanager.v1.Repository.InitialConfigOrBuilder)`

### getInstance()

```
public abstract String getInstance()
```

Optional. The name of the instance in which the repository is hosted, formatted as `projects/{project_number}/locations/{location_id}/instances/{instance_id}` When creating repository via securesourcemanager.googleapis.com (Control Plane API), this field is used as input. When creating repository via \*.sourcemanager.dev (Data Plane API), this field is output only.

`string instance = 3 [(.google.api.field_behavior) = OPTIONAL, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The instance.

### getInstanceBytes()

```
public abstract ByteString getInstanceBytes()
```

Optional. The name of the instance in which the repository is hosted, formatted as `projects/{project_number}/locations/{location_id}/instances/{instance_id}` When creating repository via securesourcemanager.googleapis.com (Control Plane API), this field is used as input. When creating repository via \*.sourcemanager.dev (Data Plane API), this field is output only.

`string instance = 3 [(.google.api.field_behavior) = OPTIONAL, (.google.api.resource_reference) = { ... }`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for instance.

### getName()

```
public abstract String getName()
```

Optional. A unique identifier for a repository. The name should be of the format: `projects/{project}/locations/{location_id}/repositories/{repository_id}`

`string name = 1 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The name.

### getNameBytes()

```
public abstract ByteString getNameBytes()
```

Optional. A unique identifier for a repository. The name should be of the format: `projects/{project}/locations/{location_id}/repositories/{repository_id}`

`string name = 1 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for name.

### getUid()

```
public abstract String getUid()
```

Output only. Unique identifier of the repository.

`string uid = 4 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The uid.

### getUidBytes()

```
public abstract ByteString getUidBytes()
```

Output only. Unique identifier of the repository.

`string uid = 4 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for uid.

### getUpdateTime()

```
public abstract Timestamp getUpdateTime()
```

Output only. Update timestamp.

`.google.protobuf.Timestamp update_time = 6 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The updateTime.

### getUpdateTimeOrBuilder()

```
public abstract TimestampOrBuilder getUpdateTimeOrBuilder()
```

Output only. Update timestamp.

`.google.protobuf.Timestamp update_time = 6 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getUris()

```
public abstract Repository.URIs getUris()
```

Output only. URIs for the repository.

`.google.cloud.securesourcemanager.v1.Repository.URIs uris = 9 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Repository.URIs](/java/docs/reference/google-cloud-securesourcemanager/0.24.0/com.google.cloud.securesourcemanager.v1.Repository.URIs)`

The uris.

### getUrisOrBuilder()

```
public abstract Repository.URIsOrBuilder getUrisOrBuilder()
```

Output only. URIs for the repository.

`.google.cloud.securesourcemanager.v1.Repository.URIs uris = 9 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Repository.URIsOrBuilder](/java/docs/reference/google-cloud-securesourcemanager/0.24.0/com.google.cloud.securesourcemanager.v1.Repository.URIsOrBuilder)`

### hasCreateTime()

```
public abstract boolean hasCreateTime()
```

Output only. Create timestamp.

`.google.protobuf.Timestamp create_time = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the createTime field is set.

### hasInitialConfig()

```
public abstract boolean hasInitialConfig()
```

Input only. Initial configurations for the repository.

`.google.cloud.securesourcemanager.v1.Repository.InitialConfig initial_config = 10 [(.google.api.field_behavior) = INPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the initialConfig field is set.

### hasUpdateTime()

```
public abstract boolean hasUpdateTime()
```

Output only. Update timestamp.

`.google.protobuf.Timestamp update_time = 6 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the updateTime field is set.

### hasUris()

```
public abstract boolean hasUris()
```

Output only. URIs for the repository.

`.google.cloud.securesourcemanager.v1.Repository.URIs uris = 9 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the uris field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.

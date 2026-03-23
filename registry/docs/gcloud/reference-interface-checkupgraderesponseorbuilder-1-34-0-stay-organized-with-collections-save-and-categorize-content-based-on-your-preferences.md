-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface CheckUpgradeResponseOrBuilder (1.34.0) Stay organized with collections Save and categorize content based on your preferences.

1.87.0 (latest) 1.85.0 1.83.0 1.82.0 1.80.0 1.78.0 1.76.0 1.75.0 1.74.0 1.73.0 1.72.0 1.70.0 1.68.0 1.67.0 1.64.0 1.63.0 1.62.0 1.60.0 1.59.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.51.0 1.49.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.37.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.24.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.11.0 1.9.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0

```
public interface CheckUpgradeResponseOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### containsPypiDependencies(String key)

```
public abstract boolean containsPypiDependencies(String key)
```

Pypi dependencies specified in the environment configuration, at the time when the build was triggered.

`map<string, string> pypi_dependencies = 6;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getBuildLogUri()

```
public abstract String getBuildLogUri()
```

Output only. Url for a docker build log of an upgraded image.

`string build_log_uri = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The buildLogUri.

### getBuildLogUriBytes()

```
public abstract ByteString getBuildLogUriBytes()
```

Output only. Url for a docker build log of an upgraded image.

`string build_log_uri = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for buildLogUri.

### getContainsPypiModulesConflict()

```
public abstract CheckUpgradeResponse.ConflictResult getContainsPypiModulesConflict()
```

Output only. Whether build has succeeded or failed on modules conflicts.

`.google.cloud.orchestration.airflow.service.v1.CheckUpgradeResponse.ConflictResult contains_pypi_modules_conflict = 4 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[CheckUpgradeResponse.ConflictResult](/java/docs/reference/google-cloud-orchestration-airflow/1.34.0/com.google.cloud.orchestration.airflow.service.v1.CheckUpgradeResponse.ConflictResult)`

The containsPypiModulesConflict.

### getContainsPypiModulesConflictValue()

```
public abstract int getContainsPypiModulesConflictValue()
```

Output only. Whether build has succeeded or failed on modules conflicts.

`.google.cloud.orchestration.airflow.service.v1.CheckUpgradeResponse.ConflictResult contains_pypi_modules_conflict = 4 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for containsPypiModulesConflict.

### getImageVersion()

```
public abstract String getImageVersion()
```

Composer image for which the build was happening.

`string image_version = 5;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The imageVersion.

### getImageVersionBytes()

```
public abstract ByteString getImageVersionBytes()
```

Composer image for which the build was happening.

`string image_version = 5;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for imageVersion.

### getPypiConflictBuildLogExtract()

```
public abstract String getPypiConflictBuildLogExtract()
```

Output only. Extract from a docker image build log containing information about pypi modules conflicts.

`string pypi_conflict_build_log_extract = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The pypiConflictBuildLogExtract.

### getPypiConflictBuildLogExtractBytes()

```
public abstract ByteString getPypiConflictBuildLogExtractBytes()
```

Output only. Extract from a docker image build log containing information about pypi modules conflicts.

`string pypi_conflict_build_log_extract = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for pypiConflictBuildLogExtract.

### getPypiDependencies() (deprecated)

```
public abstract Map<String,String> getPypiDependencies()
```

Use [#getPypiDependenciesMap()](/java/docs/reference/google-cloud-orchestration-airflow/1.34.0/com.google.cloud.orchestration.airflow.service.v1.CheckUpgradeResponseOrBuilder#com_google_cloud_orchestration_airflow_service_v1_CheckUpgradeResponseOrBuilder_getPypiDependenciesMap__) instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getPypiDependenciesCount()

```
public abstract int getPypiDependenciesCount()
```

Pypi dependencies specified in the environment configuration, at the time when the build was triggered.

`map<string, string> pypi_dependencies = 6;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getPypiDependenciesMap()

```
public abstract Map<String,String> getPypiDependenciesMap()
```

Pypi dependencies specified in the environment configuration, at the time when the build was triggered.

`map<string, string> pypi_dependencies = 6;`

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getPypiDependenciesOrDefault(String key, String defaultValue)

```
public abstract String getPypiDependenciesOrDefault(String key, String defaultValue)
```

Pypi dependencies specified in the environment configuration, at the time when the build was triggered.

`map<string, string> pypi_dependencies = 6;`

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

### getPypiDependenciesOrThrow(String key)

```
public abstract String getPypiDependenciesOrThrow(String key)
```

Pypi dependencies specified in the environment configuration, at the time when the build was triggered.

`map<string, string> pypi_dependencies = 6;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.

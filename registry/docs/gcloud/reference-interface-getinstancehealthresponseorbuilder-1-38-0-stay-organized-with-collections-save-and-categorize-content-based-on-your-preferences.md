-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface GetInstanceHealthResponseOrBuilder (1.38.0) Stay organized with collections Save and categorize content based on your preferences.

1.85.0 (latest) 1.83.0 1.81.0 1.80.0 1.78.0 1.76.0 1.74.0 1.73.0 1.72.0 1.71.0 1.70.0 1.68.0 1.66.0 1.65.0 1.62.0 1.61.0 1.60.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.51.0 1.50.0 1.49.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.38.0 1.37.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.26.0 1.25.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.11.0 1.10.0 1.9.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.0 1.2.0 1.1.3 1.0.6 0.6.2

```
public interface GetInstanceHealthResponseOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### containsHealthInfo(String key)

```
public abstract boolean containsHealthInfo(String key)
```

Output only. Additional information about instance health. Example: healthInfo": { "docker\_proxy\_agent\_status": "1", "docker\_status": "1", "jupyterlab\_api\_status": "-1", "jupyterlab\_status": "-1", "updated": "2020-10-18 09:40:03.573409" }

`map<string, string> health_info = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getHealthInfo() (deprecated)

```
public abstract Map<String,String> getHealthInfo()
```

Use [#getHealthInfoMap()](/java/docs/reference/google-cloud-notebooks/1.38.0/com.google.cloud.notebooks.v1.GetInstanceHealthResponseOrBuilder#com_google_cloud_notebooks_v1_GetInstanceHealthResponseOrBuilder_getHealthInfoMap__) instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getHealthInfoCount()

```
public abstract int getHealthInfoCount()
```

Output only. Additional information about instance health. Example: healthInfo": { "docker\_proxy\_agent\_status": "1", "docker\_status": "1", "jupyterlab\_api\_status": "-1", "jupyterlab\_status": "-1", "updated": "2020-10-18 09:40:03.573409" }

`map<string, string> health_info = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getHealthInfoMap()

```
public abstract Map<String,String> getHealthInfoMap()
```

Output only. Additional information about instance health. Example: healthInfo": { "docker\_proxy\_agent\_status": "1", "docker\_status": "1", "jupyterlab\_api\_status": "-1", "jupyterlab\_status": "-1", "updated": "2020-10-18 09:40:03.573409" }

`map<string, string> health_info = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getHealthInfoOrDefault(String key, String defaultValue)

```
public abstract String getHealthInfoOrDefault(String key, String defaultValue)
```

Output only. Additional information about instance health. Example: healthInfo": { "docker\_proxy\_agent\_status": "1", "docker\_status": "1", "jupyterlab\_api\_status": "-1", "jupyterlab\_status": "-1", "updated": "2020-10-18 09:40:03.573409" }

`map<string, string> health_info = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

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

### getHealthInfoOrThrow(String key)

```
public abstract String getHealthInfoOrThrow(String key)
```

Output only. Additional information about instance health. Example: healthInfo": { "docker\_proxy\_agent\_status": "1", "docker\_status": "1", "jupyterlab\_api\_status": "-1", "jupyterlab\_status": "-1", "updated": "2020-10-18 09:40:03.573409" }

`map<string, string> health_info = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### getHealthState()

```
public abstract GetInstanceHealthResponse.HealthState getHealthState()
```

Output only. Runtime health\_state.

`.google.cloud.notebooks.v1.GetInstanceHealthResponse.HealthState health_state = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[GetInstanceHealthResponse.HealthState](/java/docs/reference/google-cloud-notebooks/1.38.0/com.google.cloud.notebooks.v1.GetInstanceHealthResponse.HealthState)`

The healthState.

### getHealthStateValue()

```
public abstract int getHealthStateValue()
```

Output only. Runtime health\_state.

`.google.cloud.notebooks.v1.GetInstanceHealthResponse.HealthState health_state = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for healthState.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.

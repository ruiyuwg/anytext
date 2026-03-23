-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface ResourceBundleOrBuilder (0.21.0) Stay organized with collections Save and categorize content based on your preferences.

0.21.0 (latest) 0.19.0 0.17.0 0.16.0 0.15.0 0.14.0 0.12.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.4.0 0.2.0 0.1.0

```
public interface ResourceBundleOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### containsLabels(String key)

```
public abstract boolean containsLabels(String key)
```

Optional. Labels as key value pairs.

`map<string, string> labels = 4 [(.google.api.field_behavior) = OPTIONAL];`

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

Output only. Time `ResourceBundle` was created.

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

Output only. Time `ResourceBundle` was created.

`.google.protobuf.Timestamp create_time = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getDescription()

```
public abstract String getDescription()
```

Optional. Human readable description of the `ResourceBundle`.

`string description = 5 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The description.

### getDescriptionBytes()

```
public abstract ByteString getDescriptionBytes()
```

Optional. Human readable description of the `ResourceBundle`.

`string description = 5 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for description.

### getLabels() (deprecated)

```
public abstract Map<String,String> getLabels()
```

Use [#getLabelsMap()](/java/docs/reference/google-cloud-configdelivery/latest/com.google.cloud.configdelivery.v1.ResourceBundleOrBuilder#com_google_cloud_configdelivery_v1_ResourceBundleOrBuilder_getLabelsMap__) instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getLabelsCount()

```
public abstract int getLabelsCount()
```

Optional. Labels as key value pairs.

`map<string, string> labels = 4 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getLabelsMap()

```
public abstract Map<String,String> getLabelsMap()
```

Optional. Labels as key value pairs.

`map<string, string> labels = 4 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getLabelsOrDefault(String key, String defaultValue)

```
public abstract String getLabelsOrDefault(String key, String defaultValue)
```

Optional. Labels as key value pairs.

`map<string, string> labels = 4 [(.google.api.field_behavior) = OPTIONAL];`

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

Optional. Labels as key value pairs.

`map<string, string> labels = 4 [(.google.api.field_behavior) = OPTIONAL];`

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

Identifier. Name of the `ResourceBundle`. Format is `projects/{project}/locations/{location}/resourceBundle /a-z{0,62}`.

`string name = 1 [(.google.api.field_behavior) = IDENTIFIER];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The name.

### getNameBytes()

```
public abstract ByteString getNameBytes()
```

Identifier. Name of the `ResourceBundle`. Format is `projects/{project}/locations/{location}/resourceBundle /a-z{0,62}`.

`string name = 1 [(.google.api.field_behavior) = IDENTIFIER];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for name.

### getUpdateTime()

```
public abstract Timestamp getUpdateTime()
```

Output only. Time `ResourceBundle` was last updated.

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

Output only. Time `ResourceBundle` was last updated.

`.google.protobuf.Timestamp update_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### hasCreateTime()

```
public abstract boolean hasCreateTime()
```

Output only. Time `ResourceBundle` was created.

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

Output only. Time `ResourceBundle` was last updated.

`.google.protobuf.Timestamp update_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the updateTime field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.

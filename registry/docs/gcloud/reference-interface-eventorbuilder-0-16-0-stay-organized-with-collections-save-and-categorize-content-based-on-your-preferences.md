-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface EventOrBuilder (0.16.0) Stay organized with collections Save and categorize content based on your preferences.

Version latestkeyboard\_arrow\_down

-   [0.16.0 (latest)](/java/docs/reference/google-cloudevent-types/latest/com.google.events.cloud.visionai.v1.EventOrBuilder)
-   [0.15.0](/java/docs/reference/google-cloudevent-types/0.15.0/com.google.events.cloud.visionai.v1.EventOrBuilder)
-   [0.14.1](/java/docs/reference/google-cloudevent-types/0.14.1/com.google.events.cloud.visionai.v1.EventOrBuilder)

```
public interface EventOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### containsAnnotations(String key)

```
public abstract boolean containsAnnotations(String key)
```

Annotations to allow clients to store small amounts of arbitrary data.

`map<string, string> annotations = 5;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### containsLabels(String key)

```
public abstract boolean containsLabels(String key)
```

Labels as key value pairs.

`map<string, string> labels = 4;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getAlignmentClock()

```
public abstract Event.Clock getAlignmentClock()
```

The clock used for joining streams.

`.google.events.cloud.visionai.v1.Event.Clock alignment_clock = 6;`

**Returns**

**Type**

**Description**

`[Event.Clock](/java/docs/reference/google-cloudevent-types/latest/com.google.events.cloud.visionai.v1.Event.Clock)`

The alignmentClock.

### getAlignmentClockValue()

```
public abstract int getAlignmentClockValue()
```

The clock used for joining streams.

`.google.events.cloud.visionai.v1.Event.Clock alignment_clock = 6;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for alignmentClock.

### getAnnotations()

```
public abstract Map<String,String> getAnnotations()
```

Use [#getAnnotationsMap()](/java/docs/reference/google-cloudevent-types/latest/com.google.events.cloud.visionai.v1.EventOrBuilder#com_google_events_cloud_visionai_v1_EventOrBuilder_getAnnotationsMap__) instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getAnnotationsCount()

```
public abstract int getAnnotationsCount()
```

Annotations to allow clients to store small amounts of arbitrary data.

`map<string, string> annotations = 5;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getAnnotationsMap()

```
public abstract Map<String,String> getAnnotationsMap()
```

Annotations to allow clients to store small amounts of arbitrary data.

`map<string, string> annotations = 5;`

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getAnnotationsOrDefault(String key, String defaultValue)

```
public abstract String getAnnotationsOrDefault(String key, String defaultValue)
```

Annotations to allow clients to store small amounts of arbitrary data.

`map<string, string> annotations = 5;`

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

### getAnnotationsOrThrow(String key)

```
public abstract String getAnnotationsOrThrow(String key)
```

Annotations to allow clients to store small amounts of arbitrary data.

`map<string, string> annotations = 5;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### getCreateTime()

```
public abstract Timestamp getCreateTime()
```

Output only. The create timestamp.

`.google.protobuf.Timestamp create_time = 2;`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The createTime.

### getCreateTimeOrBuilder()

```
public abstract TimestampOrBuilder getCreateTimeOrBuilder()
```

Output only. The create timestamp.

`.google.protobuf.Timestamp create_time = 2;`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getGracePeriod()

```
public abstract Duration getGracePeriod()
```

Grace period for cleaning up the event. This is the time the controller waits for before deleting the event. During this period, if there is any active channel on the event. The deletion of the event after grace\_period will be ignored.

`.google.protobuf.Duration grace_period = 7;`

**Returns**

**Type**

**Description**

`[Duration](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.html)`

The gracePeriod.

### getGracePeriodOrBuilder()

```
public abstract DurationOrBuilder getGracePeriodOrBuilder()
```

Grace period for cleaning up the event. This is the time the controller waits for before deleting the event. During this period, if there is any active channel on the event. The deletion of the event after grace\_period will be ignored.

`.google.protobuf.Duration grace_period = 7;`

**Returns**

**Type**

**Description**

`[DurationOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.DurationOrBuilder.html)`

### getLabels()

```
public abstract Map<String,String> getLabels()
```

Use [#getLabelsMap()](/java/docs/reference/google-cloudevent-types/latest/com.google.events.cloud.visionai.v1.EventOrBuilder#com_google_events_cloud_visionai_v1_EventOrBuilder_getLabelsMap__) instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getLabelsCount()

```
public abstract int getLabelsCount()
```

Labels as key value pairs.

`map<string, string> labels = 4;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getLabelsMap()

```
public abstract Map<String,String> getLabelsMap()
```

Labels as key value pairs.

`map<string, string> labels = 4;`

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getLabelsOrDefault(String key, String defaultValue)

```
public abstract String getLabelsOrDefault(String key, String defaultValue)
```

Labels as key value pairs.

`map<string, string> labels = 4;`

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

Labels as key value pairs.

`map<string, string> labels = 4;`

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

Name of the resource.

`string name = 1;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The name.

### getNameBytes()

```
public abstract ByteString getNameBytes()
```

Name of the resource.

`string name = 1;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for name.

### getUpdateTime()

```
public abstract Timestamp getUpdateTime()
```

Output only. The update timestamp.

`.google.protobuf.Timestamp update_time = 3;`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The updateTime.

### getUpdateTimeOrBuilder()

```
public abstract TimestampOrBuilder getUpdateTimeOrBuilder()
```

Output only. The update timestamp.

`.google.protobuf.Timestamp update_time = 3;`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### hasCreateTime()

```
public abstract boolean hasCreateTime()
```

Output only. The create timestamp.

`.google.protobuf.Timestamp create_time = 2;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the createTime field is set.

### hasGracePeriod()

```
public abstract boolean hasGracePeriod()
```

Grace period for cleaning up the event. This is the time the controller waits for before deleting the event. During this period, if there is any active channel on the event. The deletion of the event after grace\_period will be ignored.

`.google.protobuf.Duration grace_period = 7;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the gracePeriod field is set.

### hasUpdateTime()

```
public abstract boolean hasUpdateTime()
```

Output only. The update timestamp.

`.google.protobuf.Timestamp update_time = 3;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the updateTime field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.

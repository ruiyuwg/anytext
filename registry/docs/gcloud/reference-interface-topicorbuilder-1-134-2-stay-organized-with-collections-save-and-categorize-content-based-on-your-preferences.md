-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface TopicOrBuilder (1.134.2) Stay organized with collections Save and categorize content based on your preferences.

1.149.0 (latest) 1.148.0 1.147.0 1.145.0 1.143.1 1.142.0 1.141.5 1.140.2 1.139.4 1.138.0 1.137.1 1.136.1 1.135.0 1.134.2 1.133.1 1.132.2 1.131.0 1.130.0 1.129.6 1.127.3 1.126.6 1.125.13 1.123.18 1.122.2 1.121.1 1.120.24 1.119.1 1.118.0 1.117.0 1.116.4 1.115.5

```
public interface TopicOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### containsLabels(String key)

```
public abstract boolean containsLabels(String key)
```

Optional. See [Creating and managing labels](https://cloud.google.com/pubsub/docs/labels).

`map<string, string> labels = 2 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getIngestionDataSourceSettings()

```
public abstract IngestionDataSourceSettings getIngestionDataSourceSettings()
```

Optional. Settings for ingestion from a data source into this topic.

`.google.pubsub.v1.IngestionDataSourceSettings ingestion_data_source_settings = 10 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[IngestionDataSourceSettings](/java/docs/reference/google-cloud-pubsub/1.134.2/com.google.pubsub.v1.IngestionDataSourceSettings)`

The ingestionDataSourceSettings.

### getIngestionDataSourceSettingsOrBuilder()

```
public abstract IngestionDataSourceSettingsOrBuilder getIngestionDataSourceSettingsOrBuilder()
```

Optional. Settings for ingestion from a data source into this topic.

`.google.pubsub.v1.IngestionDataSourceSettings ingestion_data_source_settings = 10 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[IngestionDataSourceSettingsOrBuilder](/java/docs/reference/google-cloud-pubsub/1.134.2/com.google.pubsub.v1.IngestionDataSourceSettingsOrBuilder)`

### getKmsKeyName()

```
public abstract String getKmsKeyName()
```

Optional. The resource name of the Cloud KMS CryptoKey to be used to protect access to messages published on this topic.

The expected format is `projects/*/locations/*/keyRings/*/cryptoKeys/*`.

`string kms_key_name = 5 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The kmsKeyName.

### getKmsKeyNameBytes()

```
public abstract ByteString getKmsKeyNameBytes()
```

Optional. The resource name of the Cloud KMS CryptoKey to be used to protect access to messages published on this topic.

The expected format is `projects/*/locations/*/keyRings/*/cryptoKeys/*`.

`string kms_key_name = 5 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for kmsKeyName.

### getLabels() (deprecated)

```
public abstract Map<String,String> getLabels()
```

Use [#getLabelsMap()](/java/docs/reference/google-cloud-pubsub/1.134.2/com.google.pubsub.v1.TopicOrBuilder#com_google_pubsub_v1_TopicOrBuilder_getLabelsMap__) instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getLabelsCount()

```
public abstract int getLabelsCount()
```

Optional. See [Creating and managing labels](https://cloud.google.com/pubsub/docs/labels).

`map<string, string> labels = 2 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getLabelsMap()

```
public abstract Map<String,String> getLabelsMap()
```

Optional. See [Creating and managing labels](https://cloud.google.com/pubsub/docs/labels).

`map<string, string> labels = 2 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getLabelsOrDefault(String key, String defaultValue)

```
public abstract String getLabelsOrDefault(String key, String defaultValue)
```

Optional. See [Creating and managing labels](https://cloud.google.com/pubsub/docs/labels).

`map<string, string> labels = 2 [(.google.api.field_behavior) = OPTIONAL];`

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

Optional. See [Creating and managing labels](https://cloud.google.com/pubsub/docs/labels).

`map<string, string> labels = 2 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### getMessageRetentionDuration()

```
public abstract Duration getMessageRetentionDuration()
```

Optional. Indicates the minimum duration to retain a message after it is published to the topic. If this field is set, messages published to the topic in the last `message_retention_duration` are always available to subscribers. For instance, it allows any attached subscription to [seek to a timestamp](https://cloud.google.com/pubsub/docs/replay-overview#seek_to_a_time) that is up to `message_retention_duration` in the past. If this field is not set, message retention is controlled by settings on individual subscriptions. Cannot be more than 31 days or less than 10 minutes.

`.google.protobuf.Duration message_retention_duration = 8 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[Duration](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.html)`

The messageRetentionDuration.

### getMessageRetentionDurationOrBuilder()

```
public abstract DurationOrBuilder getMessageRetentionDurationOrBuilder()
```

Optional. Indicates the minimum duration to retain a message after it is published to the topic. If this field is set, messages published to the topic in the last `message_retention_duration` are always available to subscribers. For instance, it allows any attached subscription to [seek to a timestamp](https://cloud.google.com/pubsub/docs/replay-overview#seek_to_a_time) that is up to `message_retention_duration` in the past. If this field is not set, message retention is controlled by settings on individual subscriptions. Cannot be more than 31 days or less than 10 minutes.

`.google.protobuf.Duration message_retention_duration = 8 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[DurationOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.DurationOrBuilder.html)`

### getMessageStoragePolicy()

```
public abstract MessageStoragePolicy getMessageStoragePolicy()
```

Optional. Policy constraining the set of Google Cloud Platform regions where messages published to the topic may be stored. If not present, then no constraints are in effect.

`.google.pubsub.v1.MessageStoragePolicy message_storage_policy = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[MessageStoragePolicy](/java/docs/reference/google-cloud-pubsub/1.134.2/com.google.pubsub.v1.MessageStoragePolicy)`

The messageStoragePolicy.

### getMessageStoragePolicyOrBuilder()

```
public abstract MessageStoragePolicyOrBuilder getMessageStoragePolicyOrBuilder()
```

Optional. Policy constraining the set of Google Cloud Platform regions where messages published to the topic may be stored. If not present, then no constraints are in effect.

`.google.pubsub.v1.MessageStoragePolicy message_storage_policy = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[MessageStoragePolicyOrBuilder](/java/docs/reference/google-cloud-pubsub/1.134.2/com.google.pubsub.v1.MessageStoragePolicyOrBuilder)`

### getName()

```
public abstract String getName()
```

Required. The name of the topic. It must have the format `"projects/{project}/topics/{topic}"`. `{topic}` must start with a letter, and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`), underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent signs (`%`). It must be between 3 and 255 characters in length, and it must not start with `"goog"`.

`string name = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The name.

### getNameBytes()

```
public abstract ByteString getNameBytes()
```

Required. The name of the topic. It must have the format `"projects/{project}/topics/{topic}"`. `{topic}` must start with a letter, and contain only letters (`[A-Za-z]`), numbers (`[0-9]`), dashes (`-`), underscores (`_`), periods (`.`), tildes (`~`), plus (`+`) or percent signs (`%`). It must be between 3 and 255 characters in length, and it must not start with `"goog"`.

`string name = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for name.

### getSatisfiesPzs()

```
public abstract boolean getSatisfiesPzs()
```

Optional. Reserved for future use. This field is set only in responses from the server; it is ignored if it is set in any requests.

`bool satisfies_pzs = 7 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The satisfiesPzs.

### getSchemaSettings()

```
public abstract SchemaSettings getSchemaSettings()
```

Optional. Settings for validating messages published against a schema.

`.google.pubsub.v1.SchemaSettings schema_settings = 6 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[SchemaSettings](/java/docs/reference/google-cloud-pubsub/1.134.2/com.google.pubsub.v1.SchemaSettings)`

The schemaSettings.

### getSchemaSettingsOrBuilder()

```
public abstract SchemaSettingsOrBuilder getSchemaSettingsOrBuilder()
```

Optional. Settings for validating messages published against a schema.

`.google.pubsub.v1.SchemaSettings schema_settings = 6 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[SchemaSettingsOrBuilder](/java/docs/reference/google-cloud-pubsub/1.134.2/com.google.pubsub.v1.SchemaSettingsOrBuilder)`

### getState()

```
public abstract Topic.State getState()
```

Output only. An output-only field indicating the state of the topic.

`.google.pubsub.v1.Topic.State state = 9 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Topic.State](/java/docs/reference/google-cloud-pubsub/1.134.2/com.google.pubsub.v1.Topic.State)`

The state.

### getStateValue()

```
public abstract int getStateValue()
```

Output only. An output-only field indicating the state of the topic.

`.google.pubsub.v1.Topic.State state = 9 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for state.

### hasIngestionDataSourceSettings()

```
public abstract boolean hasIngestionDataSourceSettings()
```

Optional. Settings for ingestion from a data source into this topic.

`.google.pubsub.v1.IngestionDataSourceSettings ingestion_data_source_settings = 10 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the ingestionDataSourceSettings field is set.

### hasMessageRetentionDuration()

```
public abstract boolean hasMessageRetentionDuration()
```

Optional. Indicates the minimum duration to retain a message after it is published to the topic. If this field is set, messages published to the topic in the last `message_retention_duration` are always available to subscribers. For instance, it allows any attached subscription to [seek to a timestamp](https://cloud.google.com/pubsub/docs/replay-overview#seek_to_a_time) that is up to `message_retention_duration` in the past. If this field is not set, message retention is controlled by settings on individual subscriptions. Cannot be more than 31 days or less than 10 minutes.

`.google.protobuf.Duration message_retention_duration = 8 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the messageRetentionDuration field is set.

### hasMessageStoragePolicy()

```
public abstract boolean hasMessageStoragePolicy()
```

Optional. Policy constraining the set of Google Cloud Platform regions where messages published to the topic may be stored. If not present, then no constraints are in effect.

`.google.pubsub.v1.MessageStoragePolicy message_storage_policy = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the messageStoragePolicy field is set.

### hasSchemaSettings()

```
public abstract boolean hasSchemaSettings()
```

Optional. Settings for validating messages published against a schema.

`.google.pubsub.v1.SchemaSettings schema_settings = 6 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the schemaSettings field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.

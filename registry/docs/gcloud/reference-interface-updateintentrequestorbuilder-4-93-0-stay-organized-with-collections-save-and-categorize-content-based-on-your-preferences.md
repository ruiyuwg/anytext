-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface UpdateIntentRequestOrBuilder (4.93.0) Stay organized with collections Save and categorize content based on your preferences.

4.93.0 (latest) 4.91.0 4.89.0 4.88.0 4.87.0 4.86.0 4.84.0 4.82.0 4.81.0 4.80.0 4.79.0 4.78.0 4.76.0 4.74.0 4.73.0 4.70.0 4.69.0 4.68.0 4.66.0 4.65.0 4.64.0 4.63.0 4.62.0 4.61.0 4.60.0 4.59.0 4.58.0 4.57.0 4.55.0 4.54.0 4.53.0 4.52.0 4.51.0 4.50.0 4.49.0 4.48.0 4.47.0 4.46.0 4.45.0 4.43.0 4.42.0 4.41.0 4.40.0 4.39.0 4.38.0 4.37.0 4.36.0 4.35.0 4.34.0 4.33.0 4.30.0 4.29.0 4.28.0 4.27.0 4.26.0 4.25.0 4.24.0 4.23.0 4.22.0 4.21.0 4.20.0 4.19.0 4.18.0 4.17.0 4.15.0 4.14.0 4.13.0 4.12.0 4.11.0 4.10.0 4.9.1 4.8.6 4.7.5 4.6.0 4.5.11 4.4.0 4.3.1

```
public interface UpdateIntentRequestOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getIntent()

```
public abstract Intent getIntent()
```

Required. The intent to update.

`.google.cloud.dialogflow.v2beta1.Intent intent = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[Intent](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.Intent)`

The intent.

### getIntentOrBuilder()

```
public abstract IntentOrBuilder getIntentOrBuilder()
```

Required. The intent to update.

`.google.cloud.dialogflow.v2beta1.Intent intent = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[IntentOrBuilder](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.IntentOrBuilder)`

### getIntentView()

```
public abstract IntentView getIntentView()
```

Optional. The resource view to apply to the returned intent.

`.google.cloud.dialogflow.v2beta1.IntentView intent_view = 4;`

**Returns**

**Type**

**Description**

`[IntentView](/java/docs/reference/google-cloud-dialogflow/latest/com.google.cloud.dialogflow.v2beta1.IntentView)`

The intentView.

### getIntentViewValue()

```
public abstract int getIntentViewValue()
```

Optional. The resource view to apply to the returned intent.

`.google.cloud.dialogflow.v2beta1.IntentView intent_view = 4;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for intentView.

### getLanguageCode()

```
public abstract String getLanguageCode()
```

Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).

`string language_code = 2 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The languageCode.

### getLanguageCodeBytes()

```
public abstract ByteString getLanguageCodeBytes()
```

Optional. The language used to access language-specific data. If not specified, the agent's default language is used. For more information, see [Multilingual intent and entity data](https://cloud.google.com/dialogflow/docs/agents-multilingual#intent-entity).

`string language_code = 2 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for languageCode.

### getUpdateMask()

```
public abstract FieldMask getUpdateMask()
```

Optional. The mask to control which fields get updated.

`.google.protobuf.FieldMask update_mask = 3;`

**Returns**

**Type**

**Description**

`[FieldMask](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.FieldMask.html)`

The updateMask.

### getUpdateMaskOrBuilder()

```
public abstract FieldMaskOrBuilder getUpdateMaskOrBuilder()
```

Optional. The mask to control which fields get updated.

`.google.protobuf.FieldMask update_mask = 3;`

**Returns**

**Type**

**Description**

`[FieldMaskOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.FieldMaskOrBuilder.html)`

### hasIntent()

```
public abstract boolean hasIntent()
```

Required. The intent to update.

`.google.cloud.dialogflow.v2beta1.Intent intent = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the intent field is set.

### hasUpdateMask()

```
public abstract boolean hasUpdateMask()
```

Optional. The mask to control which fields get updated.

`.google.protobuf.FieldMask update_mask = 3;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the updateMask field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.

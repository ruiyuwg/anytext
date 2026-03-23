-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface UpdateRecommenderConfigRequestOrBuilder (2.21.0) Stay organized with collections Save and categorize content based on your preferences.

2.89.0 (latest) 2.87.0 2.85.0 2.84.0 2.82.0 2.80.0 2.78.0 2.77.0 2.76.0 2.75.0 2.74.0 2.72.0 2.70.0 2.69.0 2.66.0 2.65.0 2.64.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.7 2.4.1 2.3.0 2.2.0 2.1.5

```
public interface UpdateRecommenderConfigRequestOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getRecommenderConfig()

```
public abstract RecommenderConfig getRecommenderConfig()
```

Required. The RecommenderConfig to update.

`.google.cloud.recommender.v1beta1.RecommenderConfig recommender_config = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[RecommenderConfig](/java/docs/reference/google-cloud-recommender/2.21.0/com.google.cloud.recommender.v1beta1.RecommenderConfig)`

The recommenderConfig.

### getRecommenderConfigOrBuilder()

```
public abstract RecommenderConfigOrBuilder getRecommenderConfigOrBuilder()
```

Required. The RecommenderConfig to update.

`.google.cloud.recommender.v1beta1.RecommenderConfig recommender_config = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[RecommenderConfigOrBuilder](/java/docs/reference/google-cloud-recommender/2.21.0/com.google.cloud.recommender.v1beta1.RecommenderConfigOrBuilder)`

### getUpdateMask()

```
public abstract FieldMask getUpdateMask()
```

The list of fields to be updated.

`.google.protobuf.FieldMask update_mask = 2;`

**Returns**

**Type**

**Description**

`[FieldMask](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.FieldMask.html)`

The updateMask.

### getUpdateMaskOrBuilder()

```
public abstract FieldMaskOrBuilder getUpdateMaskOrBuilder()
```

The list of fields to be updated.

`.google.protobuf.FieldMask update_mask = 2;`

**Returns**

**Type**

**Description**

`[FieldMaskOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.FieldMaskOrBuilder.html)`

### getValidateOnly()

```
public abstract boolean getValidateOnly()
```

If true, validate the request and preview the change, but do not actually update it.

`bool validate_only = 3;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The validateOnly.

### hasRecommenderConfig()

```
public abstract boolean hasRecommenderConfig()
```

Required. The RecommenderConfig to update.

`.google.cloud.recommender.v1beta1.RecommenderConfig recommender_config = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the recommenderConfig field is set.

### hasUpdateMask()

```
public abstract boolean hasUpdateMask()
```

The list of fields to be updated.

`.google.protobuf.FieldMask update_mask = 2;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the updateMask field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.

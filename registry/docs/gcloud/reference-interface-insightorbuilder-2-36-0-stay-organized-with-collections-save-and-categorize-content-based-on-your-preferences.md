-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface InsightOrBuilder (2.36.0) Stay organized with collections Save and categorize content based on your preferences.

2.89.0 (latest) 2.87.0 2.85.0 2.84.0 2.82.0 2.80.0 2.78.0 2.77.0 2.76.0 2.75.0 2.74.0 2.72.0 2.70.0 2.69.0 2.66.0 2.65.0 2.64.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.7 2.4.1 2.3.0 2.2.0 2.1.5

```
public interface InsightOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getAssociatedRecommendations(int index)

```
public abstract Insight.RecommendationReference getAssociatedRecommendations(int index)
```

Recommendations derived from this insight.

`repeated .google.cloud.recommender.v1beta1.Insight.RecommendationReference associated_recommendations = 8;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[Insight.RecommendationReference](/java/docs/reference/google-cloud-recommender/2.36.0/com.google.cloud.recommender.v1beta1.Insight.RecommendationReference)`

### getAssociatedRecommendationsCount()

```
public abstract int getAssociatedRecommendationsCount()
```

Recommendations derived from this insight.

`repeated .google.cloud.recommender.v1beta1.Insight.RecommendationReference associated_recommendations = 8;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getAssociatedRecommendationsList()

```
public abstract List<Insight.RecommendationReference> getAssociatedRecommendationsList()
```

Recommendations derived from this insight.

`repeated .google.cloud.recommender.v1beta1.Insight.RecommendationReference associated_recommendations = 8;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[RecommendationReference](/java/docs/reference/google-cloud-recommender/2.36.0/com.google.cloud.recommender.v1beta1.Insight.RecommendationReference)>`

### getAssociatedRecommendationsOrBuilder(int index)

```
public abstract Insight.RecommendationReferenceOrBuilder getAssociatedRecommendationsOrBuilder(int index)
```

Recommendations derived from this insight.

`repeated .google.cloud.recommender.v1beta1.Insight.RecommendationReference associated_recommendations = 8;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[Insight.RecommendationReferenceOrBuilder](/java/docs/reference/google-cloud-recommender/2.36.0/com.google.cloud.recommender.v1beta1.Insight.RecommendationReferenceOrBuilder)`

### getAssociatedRecommendationsOrBuilderList()

```
public abstract List<? extends Insight.RecommendationReferenceOrBuilder> getAssociatedRecommendationsOrBuilderList()
```

Recommendations derived from this insight.

`repeated .google.cloud.recommender.v1beta1.Insight.RecommendationReference associated_recommendations = 8;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.recommender.v1beta1.Insight.RecommendationReferenceOrBuilder>`

### getCategory()

```
public abstract Insight.Category getCategory()
```

Category being targeted by the insight.

`.google.cloud.recommender.v1beta1.Insight.Category category = 7;`

**Returns**

**Type**

**Description**

`[Insight.Category](/java/docs/reference/google-cloud-recommender/2.36.0/com.google.cloud.recommender.v1beta1.Insight.Category)`

The category.

### getCategoryValue()

```
public abstract int getCategoryValue()
```

Category being targeted by the insight.

`.google.cloud.recommender.v1beta1.Insight.Category category = 7;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for category.

### getContent()

```
public abstract Struct getContent()
```

A struct of custom fields to explain the insight. Example: "grantedPermissionsCount": "1000"

`.google.protobuf.Struct content = 3;`

**Returns**

**Type**

**Description**

`[Struct](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Struct.html)`

The content.

### getContentOrBuilder()

```
public abstract StructOrBuilder getContentOrBuilder()
```

A struct of custom fields to explain the insight. Example: "grantedPermissionsCount": "1000"

`.google.protobuf.Struct content = 3;`

**Returns**

**Type**

**Description**

`[StructOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.StructOrBuilder.html)`

### getDescription()

```
public abstract String getDescription()
```

Free-form human readable summary in English. The maximum length is 500 characters.

`string description = 2;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The description.

### getDescriptionBytes()

```
public abstract ByteString getDescriptionBytes()
```

Free-form human readable summary in English. The maximum length is 500 characters.

`string description = 2;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for description.

### getEtag()

```
public abstract String getEtag()
```

Fingerprint of the Insight. Provides optimistic locking when updating states.

`string etag = 11;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The etag.

### getEtagBytes()

```
public abstract ByteString getEtagBytes()
```

Fingerprint of the Insight. Provides optimistic locking when updating states.

`string etag = 11;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for etag.

### getInsightSubtype()

```
public abstract String getInsightSubtype()
```

Insight subtype. Insight content schema will be stable for a given subtype.

`string insight_subtype = 10;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The insightSubtype.

### getInsightSubtypeBytes()

```
public abstract ByteString getInsightSubtypeBytes()
```

Insight subtype. Insight content schema will be stable for a given subtype.

`string insight_subtype = 10;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for insightSubtype.

### getLastRefreshTime()

```
public abstract Timestamp getLastRefreshTime()
```

Timestamp of the latest data used to generate the insight.

`.google.protobuf.Timestamp last_refresh_time = 4;`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The lastRefreshTime.

### getLastRefreshTimeOrBuilder()

```
public abstract TimestampOrBuilder getLastRefreshTimeOrBuilder()
```

Timestamp of the latest data used to generate the insight.

`.google.protobuf.Timestamp last_refresh_time = 4;`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getName()

```
public abstract String getName()
```

Name of the insight.

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

Name of the insight.

`string name = 1;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for name.

### getObservationPeriod()

```
public abstract Duration getObservationPeriod()
```

Observation period that led to the insight. The source data used to generate the insight ends at last\_refresh\_time and begins at (last\_refresh\_time - observation\_period).

`.google.protobuf.Duration observation_period = 5;`

**Returns**

**Type**

**Description**

`[Duration](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.html)`

The observationPeriod.

### getObservationPeriodOrBuilder()

```
public abstract DurationOrBuilder getObservationPeriodOrBuilder()
```

Observation period that led to the insight. The source data used to generate the insight ends at last\_refresh\_time and begins at (last\_refresh\_time - observation\_period).

`.google.protobuf.Duration observation_period = 5;`

**Returns**

**Type**

**Description**

`[DurationOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.DurationOrBuilder.html)`

### getSeverity()

```
public abstract Insight.Severity getSeverity()
```

Insight's severity.

`.google.cloud.recommender.v1beta1.Insight.Severity severity = 15;`

**Returns**

**Type**

**Description**

`[Insight.Severity](/java/docs/reference/google-cloud-recommender/2.36.0/com.google.cloud.recommender.v1beta1.Insight.Severity)`

The severity.

### getSeverityValue()

```
public abstract int getSeverityValue()
```

Insight's severity.

`.google.cloud.recommender.v1beta1.Insight.Severity severity = 15;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for severity.

### getStateInfo()

```
public abstract InsightStateInfo getStateInfo()
```

Information state and metadata.

`.google.cloud.recommender.v1beta1.InsightStateInfo state_info = 6;`

**Returns**

**Type**

**Description**

`[InsightStateInfo](/java/docs/reference/google-cloud-recommender/2.36.0/com.google.cloud.recommender.v1beta1.InsightStateInfo)`

The stateInfo.

### getStateInfoOrBuilder()

```
public abstract InsightStateInfoOrBuilder getStateInfoOrBuilder()
```

Information state and metadata.

`.google.cloud.recommender.v1beta1.InsightStateInfo state_info = 6;`

**Returns**

**Type**

**Description**

`[InsightStateInfoOrBuilder](/java/docs/reference/google-cloud-recommender/2.36.0/com.google.cloud.recommender.v1beta1.InsightStateInfoOrBuilder)`

### getTargetResources(int index)

```
public abstract String getTargetResources(int index)
```

Fully qualified resource names that this insight is targeting.

`repeated string target_resources = 9;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the element to return.

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The targetResources at the given index.

### getTargetResourcesBytes(int index)

```
public abstract ByteString getTargetResourcesBytes(int index)
```

Fully qualified resource names that this insight is targeting.

`repeated string target_resources = 9;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the value to return.

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes of the targetResources at the given index.

### getTargetResourcesCount()

```
public abstract int getTargetResourcesCount()
```

Fully qualified resource names that this insight is targeting.

`repeated string target_resources = 9;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of targetResources.

### getTargetResourcesList()

```
public abstract List<String> getTargetResourcesList()
```

Fully qualified resource names that this insight is targeting.

`repeated string target_resources = 9;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

A list containing the targetResources.

### hasContent()

```
public abstract boolean hasContent()
```

A struct of custom fields to explain the insight. Example: "grantedPermissionsCount": "1000"

`.google.protobuf.Struct content = 3;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the content field is set.

### hasLastRefreshTime()

```
public abstract boolean hasLastRefreshTime()
```

Timestamp of the latest data used to generate the insight.

`.google.protobuf.Timestamp last_refresh_time = 4;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the lastRefreshTime field is set.

### hasObservationPeriod()

```
public abstract boolean hasObservationPeriod()
```

Observation period that led to the insight. The source data used to generate the insight ends at last\_refresh\_time and begins at (last\_refresh\_time - observation\_period).

`.google.protobuf.Duration observation_period = 5;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the observationPeriod field is set.

### hasStateInfo()

```
public abstract boolean hasStateInfo()
```

Information state and metadata.

`.google.cloud.recommender.v1beta1.InsightStateInfo state_info = 6;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the stateInfo field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.

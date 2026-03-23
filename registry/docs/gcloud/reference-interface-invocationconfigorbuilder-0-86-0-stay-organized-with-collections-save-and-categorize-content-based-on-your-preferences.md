-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface InvocationConfigOrBuilder (0.86.0) Stay organized with collections Save and categorize content based on your preferences.

0.86.0 (latest) 0.84.0 0.82.0 0.81.0 0.80.0 0.79.0 0.77.0 0.75.0 0.74.0 0.73.0 0.72.0 0.71.0 0.69.0 0.67.0 0.66.0 0.63.0 0.62.0 0.61.0 0.59.0 0.58.0 0.57.0 0.56.0 0.55.0 0.54.0 0.53.0 0.52.0 0.51.0 0.50.0 0.48.0 0.47.0 0.46.0 0.45.0 0.44.0 0.43.0 0.42.0 0.41.0 0.40.0 0.39.0 0.38.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.26.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.0 0.3.0 0.2.4

```
public interface InvocationConfigOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getFullyRefreshIncrementalTablesEnabled()

```
public abstract boolean getFullyRefreshIncrementalTablesEnabled()
```

Optional. When set to true, any incremental tables will be fully refreshed.

`bool fully_refresh_incremental_tables_enabled = 5 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The fullyRefreshIncrementalTablesEnabled.

### getIncludedTags(int index)

```
public abstract String getIncludedTags(int index)
```

Optional. The set of tags to include.

`repeated string included_tags = 2 [(.google.api.field_behavior) = OPTIONAL];`

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

The includedTags at the given index.

### getIncludedTagsBytes(int index)

```
public abstract ByteString getIncludedTagsBytes(int index)
```

Optional. The set of tags to include.

`repeated string included_tags = 2 [(.google.api.field_behavior) = OPTIONAL];`

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

The bytes of the includedTags at the given index.

### getIncludedTagsCount()

```
public abstract int getIncludedTagsCount()
```

Optional. The set of tags to include.

`repeated string included_tags = 2 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of includedTags.

### getIncludedTagsList()

```
public abstract List<String> getIncludedTagsList()
```

Optional. The set of tags to include.

`repeated string included_tags = 2 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

A list containing the includedTags.

### getIncludedTargets(int index)

```
public abstract Target getIncludedTargets(int index)
```

Optional. The set of action identifiers to include.

`repeated .google.cloud.dataform.v1beta1.Target included_targets = 1 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[Target](/java/docs/reference/google-cloud-dataform/latest/com.google.cloud.dataform.v1beta1.Target)`

### getIncludedTargetsCount()

```
public abstract int getIncludedTargetsCount()
```

Optional. The set of action identifiers to include.

`repeated .google.cloud.dataform.v1beta1.Target included_targets = 1 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getIncludedTargetsList()

```
public abstract List<Target> getIncludedTargetsList()
```

Optional. The set of action identifiers to include.

`repeated .google.cloud.dataform.v1beta1.Target included_targets = 1 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Target](/java/docs/reference/google-cloud-dataform/latest/com.google.cloud.dataform.v1beta1.Target)>`

### getIncludedTargetsOrBuilder(int index)

```
public abstract TargetOrBuilder getIncludedTargetsOrBuilder(int index)
```

Optional. The set of action identifiers to include.

`repeated .google.cloud.dataform.v1beta1.Target included_targets = 1 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[TargetOrBuilder](/java/docs/reference/google-cloud-dataform/latest/com.google.cloud.dataform.v1beta1.TargetOrBuilder)`

### getIncludedTargetsOrBuilderList()

```
public abstract List<? extends TargetOrBuilder> getIncludedTargetsOrBuilderList()
```

Optional. The set of action identifiers to include.

`repeated .google.cloud.dataform.v1beta1.Target included_targets = 1 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.dataform.v1beta1.TargetOrBuilder>`

### getQueryPriority()

```
public abstract InvocationConfig.QueryPriority getQueryPriority()
```

Optional. Specifies the priority for query execution in BigQuery. More information can be found at [https://cloud.google.com/bigquery/docs/running-queries#queries](https://cloud.google.com/bigquery/docs/running-queries#queries).

`optional .google.cloud.dataform.v1beta1.InvocationConfig.QueryPriority query_priority = 9 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[InvocationConfig.QueryPriority](/java/docs/reference/google-cloud-dataform/latest/com.google.cloud.dataform.v1beta1.InvocationConfig.QueryPriority)`

The queryPriority.

### getQueryPriorityValue()

```
public abstract int getQueryPriorityValue()
```

Optional. Specifies the priority for query execution in BigQuery. More information can be found at [https://cloud.google.com/bigquery/docs/running-queries#queries](https://cloud.google.com/bigquery/docs/running-queries#queries).

`optional .google.cloud.dataform.v1beta1.InvocationConfig.QueryPriority query_priority = 9 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for queryPriority.

### getServiceAccount()

```
public abstract String getServiceAccount()
```

Optional. The service account to run workflow invocations under.

`string service_account = 6 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The serviceAccount.

### getServiceAccountBytes()

```
public abstract ByteString getServiceAccountBytes()
```

Optional. The service account to run workflow invocations under.

`string service_account = 6 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for serviceAccount.

### getTransitiveDependenciesIncluded()

```
public abstract boolean getTransitiveDependenciesIncluded()
```

Optional. When set to true, transitive dependencies of included actions will be executed.

`bool transitive_dependencies_included = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The transitiveDependenciesIncluded.

### getTransitiveDependentsIncluded()

```
public abstract boolean getTransitiveDependentsIncluded()
```

Optional. When set to true, transitive dependents of included actions will be executed.

`bool transitive_dependents_included = 4 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The transitiveDependentsIncluded.

### hasQueryPriority()

```
public abstract boolean hasQueryPriority()
```

Optional. Specifies the priority for query execution in BigQuery. More information can be found at [https://cloud.google.com/bigquery/docs/running-queries#queries](https://cloud.google.com/bigquery/docs/running-queries#queries).

`optional .google.cloud.dataform.v1beta1.InvocationConfig.QueryPriority query_priority = 9 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the queryPriority field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.

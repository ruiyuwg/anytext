-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface FeatureOrBuilder (1.49.0) Stay organized with collections Save and categorize content based on your preferences.

1.87.0 (latest) 1.85.0 1.83.0 1.82.0 1.81.0 1.80.0 1.78.0 1.76.0 1.75.0 1.74.0 1.73.0 1.72.0 1.70.0 1.68.0 1.67.0 1.64.0 1.63.0 1.62.0 1.60.0 1.59.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.51.0 1.49.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.37.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.24.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.11.0 1.9.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.6 1.2.1 1.1.0 1.0.1 0.5.4

```
public interface FeatureOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### containsLabels(String key)

```
public abstract boolean containsLabels(String key)
```

GCP labels for this Feature.

`map<string, string> labels = 2;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### containsMembershipSpecs(String key)

```
public abstract boolean containsMembershipSpecs(String key)
```

Optional. Membership-specific configuration for this Feature. If this Feature does not support any per-Membership configuration, this field may be unused.

The keys indicate which Membership the configuration is for, in the form:

 ```
 projects/{p}/locations/{l}/memberships/{m}
```

Where {p} is the project, {l} is a valid location and {m} is a valid Membership in this project at that location. {p} WILL match the Feature's project.

{p} will always be returned as the project number, but the project ID is also accepted during input. If the same Membership is specified in the map twice (using the project ID form, and the project number form), exactly ONE of the entries will be saved, with no guarantees as to which. For this reason, it is recommended the same format be used for all entries when mutating a Feature.

`map<string, .google.cloud.gkehub.v1alpha.MembershipFeatureSpec> membership_specs = 5 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### containsMembershipStates(String key)

```
public abstract boolean containsMembershipStates(String key)
```

Output only. Membership-specific Feature status. If this Feature does report any per-Membership status, this field may be unused.

The keys indicate which Membership the state is for, in the form:

 ```
 projects/{p}/locations/{l}/memberships/{m}
```

Where {p} is the project number, {l} is a valid location and {m} is a valid Membership in this project at that location. {p} MUST match the Feature's project number.

`map<string, .google.cloud.gkehub.v1alpha.MembershipFeatureState> membership_states = 7 [(.google.api.field_behavior) = OUTPUT_ONLY];`

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

Output only. When the Feature resource was created.

`.google.protobuf.Timestamp create_time = 8 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The createTime.

### getCreateTimeOrBuilder()

```
public abstract TimestampOrBuilder getCreateTimeOrBuilder()
```

Output only. When the Feature resource was created.

`.google.protobuf.Timestamp create_time = 8 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getDeleteTime()

```
public abstract Timestamp getDeleteTime()
```

Output only. When the Feature resource was deleted.

`.google.protobuf.Timestamp delete_time = 10 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The deleteTime.

### getDeleteTimeOrBuilder()

```
public abstract TimestampOrBuilder getDeleteTimeOrBuilder()
```

Output only. When the Feature resource was deleted.

`.google.protobuf.Timestamp delete_time = 10 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getLabels() (deprecated)

```
public abstract Map<String,String> getLabels()
```

Use [#getLabelsMap()](/java/docs/reference/google-cloud-gkehub/1.49.0/com.google.cloud.gkehub.v1alpha.FeatureOrBuilder#com_google_cloud_gkehub_v1alpha_FeatureOrBuilder_getLabelsMap__) instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getLabelsCount()

```
public abstract int getLabelsCount()
```

GCP labels for this Feature.

`map<string, string> labels = 2;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getLabelsMap()

```
public abstract Map<String,String> getLabelsMap()
```

GCP labels for this Feature.

`map<string, string> labels = 2;`

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getLabelsOrDefault(String key, String defaultValue)

```
public abstract String getLabelsOrDefault(String key, String defaultValue)
```

GCP labels for this Feature.

`map<string, string> labels = 2;`

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

GCP labels for this Feature.

`map<string, string> labels = 2;`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### getMembershipSpecs() (deprecated)

```
public abstract Map<String,MembershipFeatureSpec> getMembershipSpecs()
```

Use [#getMembershipSpecsMap()](/java/docs/reference/google-cloud-gkehub/1.49.0/com.google.cloud.gkehub.v1alpha.FeatureOrBuilder#com_google_cloud_gkehub_v1alpha_FeatureOrBuilder_getMembershipSpecsMap__) instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[MembershipFeatureSpec](/java/docs/reference/google-cloud-gkehub/1.49.0/com.google.cloud.gkehub.v1alpha.MembershipFeatureSpec)>`

### getMembershipSpecsCount()

```
public abstract int getMembershipSpecsCount()
```

Optional. Membership-specific configuration for this Feature. If this Feature does not support any per-Membership configuration, this field may be unused.

The keys indicate which Membership the configuration is for, in the form:

 ```
 projects/{p}/locations/{l}/memberships/{m}
```

Where {p} is the project, {l} is a valid location and {m} is a valid Membership in this project at that location. {p} WILL match the Feature's project.

{p} will always be returned as the project number, but the project ID is also accepted during input. If the same Membership is specified in the map twice (using the project ID form, and the project number form), exactly ONE of the entries will be saved, with no guarantees as to which. For this reason, it is recommended the same format be used for all entries when mutating a Feature.

`map<string, .google.cloud.gkehub.v1alpha.MembershipFeatureSpec> membership_specs = 5 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getMembershipSpecsMap()

```
public abstract Map<String,MembershipFeatureSpec> getMembershipSpecsMap()
```

Optional. Membership-specific configuration for this Feature. If this Feature does not support any per-Membership configuration, this field may be unused.

The keys indicate which Membership the configuration is for, in the form:

 ```
 projects/{p}/locations/{l}/memberships/{m}
```

Where {p} is the project, {l} is a valid location and {m} is a valid Membership in this project at that location. {p} WILL match the Feature's project.

{p} will always be returned as the project number, but the project ID is also accepted during input. If the same Membership is specified in the map twice (using the project ID form, and the project number form), exactly ONE of the entries will be saved, with no guarantees as to which. For this reason, it is recommended the same format be used for all entries when mutating a Feature.

`map<string, .google.cloud.gkehub.v1alpha.MembershipFeatureSpec> membership_specs = 5 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[MembershipFeatureSpec](/java/docs/reference/google-cloud-gkehub/1.49.0/com.google.cloud.gkehub.v1alpha.MembershipFeatureSpec)>`

### getMembershipSpecsOrDefault(String key, MembershipFeatureSpec defaultValue)

```
public abstract MembershipFeatureSpec getMembershipSpecsOrDefault(String key, MembershipFeatureSpec defaultValue)
```

Optional. Membership-specific configuration for this Feature. If this Feature does not support any per-Membership configuration, this field may be unused.

The keys indicate which Membership the configuration is for, in the form:

 ```
 projects/{p}/locations/{l}/memberships/{m}
```

Where {p} is the project, {l} is a valid location and {m} is a valid Membership in this project at that location. {p} WILL match the Feature's project.

{p} will always be returned as the project number, but the project ID is also accepted during input. If the same Membership is specified in the map twice (using the project ID form, and the project number form), exactly ONE of the entries will be saved, with no guarantees as to which. For this reason, it is recommended the same format be used for all entries when mutating a Feature.

`map<string, .google.cloud.gkehub.v1alpha.MembershipFeatureSpec> membership_specs = 5 [(.google.api.field_behavior) = OPTIONAL];`

**Parameters**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`defaultValue`

`[MembershipFeatureSpec](/java/docs/reference/google-cloud-gkehub/1.49.0/com.google.cloud.gkehub.v1alpha.MembershipFeatureSpec)`  

**Returns**

**Type**

**Description**

`[MembershipFeatureSpec](/java/docs/reference/google-cloud-gkehub/1.49.0/com.google.cloud.gkehub.v1alpha.MembershipFeatureSpec)`

### getMembershipSpecsOrThrow(String key)

```
public abstract MembershipFeatureSpec getMembershipSpecsOrThrow(String key)
```

Optional. Membership-specific configuration for this Feature. If this Feature does not support any per-Membership configuration, this field may be unused.

The keys indicate which Membership the configuration is for, in the form:

 ```
 projects/{p}/locations/{l}/memberships/{m}
```

Where {p} is the project, {l} is a valid location and {m} is a valid Membership in this project at that location. {p} WILL match the Feature's project.

{p} will always be returned as the project number, but the project ID is also accepted during input. If the same Membership is specified in the map twice (using the project ID form, and the project number form), exactly ONE of the entries will be saved, with no guarantees as to which. For this reason, it is recommended the same format be used for all entries when mutating a Feature.

`map<string, .google.cloud.gkehub.v1alpha.MembershipFeatureSpec> membership_specs = 5 [(.google.api.field_behavior) = OPTIONAL];`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[MembershipFeatureSpec](/java/docs/reference/google-cloud-gkehub/1.49.0/com.google.cloud.gkehub.v1alpha.MembershipFeatureSpec)`

### getMembershipStates() (deprecated)

```
public abstract Map<String,MembershipFeatureState> getMembershipStates()
```

Use [#getMembershipStatesMap()](/java/docs/reference/google-cloud-gkehub/1.49.0/com.google.cloud.gkehub.v1alpha.FeatureOrBuilder#com_google_cloud_gkehub_v1alpha_FeatureOrBuilder_getMembershipStatesMap__) instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[MembershipFeatureState](/java/docs/reference/google-cloud-gkehub/1.49.0/com.google.cloud.gkehub.v1alpha.MembershipFeatureState)>`

### getMembershipStatesCount()

```
public abstract int getMembershipStatesCount()
```

Output only. Membership-specific Feature status. If this Feature does report any per-Membership status, this field may be unused.

The keys indicate which Membership the state is for, in the form:

 ```
 projects/{p}/locations/{l}/memberships/{m}
```

Where {p} is the project number, {l} is a valid location and {m} is a valid Membership in this project at that location. {p} MUST match the Feature's project number.

`map<string, .google.cloud.gkehub.v1alpha.MembershipFeatureState> membership_states = 7 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getMembershipStatesMap()

```
public abstract Map<String,MembershipFeatureState> getMembershipStatesMap()
```

Output only. Membership-specific Feature status. If this Feature does report any per-Membership status, this field may be unused.

The keys indicate which Membership the state is for, in the form:

 ```
 projects/{p}/locations/{l}/memberships/{m}
```

Where {p} is the project number, {l} is a valid location and {m} is a valid Membership in this project at that location. {p} MUST match the Feature's project number.

`map<string, .google.cloud.gkehub.v1alpha.MembershipFeatureState> membership_states = 7 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[MembershipFeatureState](/java/docs/reference/google-cloud-gkehub/1.49.0/com.google.cloud.gkehub.v1alpha.MembershipFeatureState)>`

### getMembershipStatesOrDefault(String key, MembershipFeatureState defaultValue)

```
public abstract MembershipFeatureState getMembershipStatesOrDefault(String key, MembershipFeatureState defaultValue)
```

Output only. Membership-specific Feature status. If this Feature does report any per-Membership status, this field may be unused.

The keys indicate which Membership the state is for, in the form:

 ```
 projects/{p}/locations/{l}/memberships/{m}
```

Where {p} is the project number, {l} is a valid location and {m} is a valid Membership in this project at that location. {p} MUST match the Feature's project number.

`map<string, .google.cloud.gkehub.v1alpha.MembershipFeatureState> membership_states = 7 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameters**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`defaultValue`

`[MembershipFeatureState](/java/docs/reference/google-cloud-gkehub/1.49.0/com.google.cloud.gkehub.v1alpha.MembershipFeatureState)`  

**Returns**

**Type**

**Description**

`[MembershipFeatureState](/java/docs/reference/google-cloud-gkehub/1.49.0/com.google.cloud.gkehub.v1alpha.MembershipFeatureState)`

### getMembershipStatesOrThrow(String key)

```
public abstract MembershipFeatureState getMembershipStatesOrThrow(String key)
```

Output only. Membership-specific Feature status. If this Feature does report any per-Membership status, this field may be unused.

The keys indicate which Membership the state is for, in the form:

 ```
 projects/{p}/locations/{l}/memberships/{m}
```

Where {p} is the project number, {l} is a valid location and {m} is a valid Membership in this project at that location. {p} MUST match the Feature's project number.

`map<string, .google.cloud.gkehub.v1alpha.MembershipFeatureState> membership_states = 7 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[MembershipFeatureState](/java/docs/reference/google-cloud-gkehub/1.49.0/com.google.cloud.gkehub.v1alpha.MembershipFeatureState)`

### getName()

```
public abstract String getName()
```

Output only. The full, unique name of this Feature resource in the format `projects/*/locations/*/features/*`.

`string name = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The name.

### getNameBytes()

```
public abstract ByteString getNameBytes()
```

Output only. The full, unique name of this Feature resource in the format `projects/*/locations/*/features/*`.

`string name = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for name.

### getResourceState()

```
public abstract FeatureResourceState getResourceState()
```

Output only. State of the Feature resource itself.

`.google.cloud.gkehub.v1alpha.FeatureResourceState resource_state = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[FeatureResourceState](/java/docs/reference/google-cloud-gkehub/1.49.0/com.google.cloud.gkehub.v1alpha.FeatureResourceState)`

The resourceState.

### getResourceStateOrBuilder()

```
public abstract FeatureResourceStateOrBuilder getResourceStateOrBuilder()
```

Output only. State of the Feature resource itself.

`.google.cloud.gkehub.v1alpha.FeatureResourceState resource_state = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[FeatureResourceStateOrBuilder](/java/docs/reference/google-cloud-gkehub/1.49.0/com.google.cloud.gkehub.v1alpha.FeatureResourceStateOrBuilder)`

### getSpec()

```
public abstract CommonFeatureSpec getSpec()
```

Optional. Hub-wide Feature configuration. If this Feature does not support any Hub-wide configuration, this field may be unused.

`.google.cloud.gkehub.v1alpha.CommonFeatureSpec spec = 4 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[CommonFeatureSpec](/java/docs/reference/google-cloud-gkehub/1.49.0/com.google.cloud.gkehub.v1alpha.CommonFeatureSpec)`

The spec.

### getSpecOrBuilder()

```
public abstract CommonFeatureSpecOrBuilder getSpecOrBuilder()
```

Optional. Hub-wide Feature configuration. If this Feature does not support any Hub-wide configuration, this field may be unused.

`.google.cloud.gkehub.v1alpha.CommonFeatureSpec spec = 4 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[CommonFeatureSpecOrBuilder](/java/docs/reference/google-cloud-gkehub/1.49.0/com.google.cloud.gkehub.v1alpha.CommonFeatureSpecOrBuilder)`

### getState()

```
public abstract CommonFeatureState getState()
```

Output only. The Hub-wide Feature state.

`.google.cloud.gkehub.v1alpha.CommonFeatureState state = 6 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[CommonFeatureState](/java/docs/reference/google-cloud-gkehub/1.49.0/com.google.cloud.gkehub.v1alpha.CommonFeatureState)`

The state.

### getStateOrBuilder()

```
public abstract CommonFeatureStateOrBuilder getStateOrBuilder()
```

Output only. The Hub-wide Feature state.

`.google.cloud.gkehub.v1alpha.CommonFeatureState state = 6 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[CommonFeatureStateOrBuilder](/java/docs/reference/google-cloud-gkehub/1.49.0/com.google.cloud.gkehub.v1alpha.CommonFeatureStateOrBuilder)`

### getUpdateTime()

```
public abstract Timestamp getUpdateTime()
```

Output only. When the Feature resource was last updated.

`.google.protobuf.Timestamp update_time = 9 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The updateTime.

### getUpdateTimeOrBuilder()

```
public abstract TimestampOrBuilder getUpdateTimeOrBuilder()
```

Output only. When the Feature resource was last updated.

`.google.protobuf.Timestamp update_time = 9 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### hasCreateTime()

```
public abstract boolean hasCreateTime()
```

Output only. When the Feature resource was created.

`.google.protobuf.Timestamp create_time = 8 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the createTime field is set.

### hasDeleteTime()

```
public abstract boolean hasDeleteTime()
```

Output only. When the Feature resource was deleted.

`.google.protobuf.Timestamp delete_time = 10 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the deleteTime field is set.

### hasResourceState()

```
public abstract boolean hasResourceState()
```

Output only. State of the Feature resource itself.

`.google.cloud.gkehub.v1alpha.FeatureResourceState resource_state = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the resourceState field is set.

### hasSpec()

```
public abstract boolean hasSpec()
```

Optional. Hub-wide Feature configuration. If this Feature does not support any Hub-wide configuration, this field may be unused.

`.google.cloud.gkehub.v1alpha.CommonFeatureSpec spec = 4 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the spec field is set.

### hasState()

```
public abstract boolean hasState()
```

Output only. The Hub-wide Feature state.

`.google.cloud.gkehub.v1alpha.CommonFeatureState state = 6 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the state field is set.

### hasUpdateTime()

```
public abstract boolean hasUpdateTime()
```

Output only. When the Feature resource was last updated.

`.google.protobuf.Timestamp update_time = 9 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the updateTime field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.

-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface MembershipOrBuilder (1.16.0) Stay organized with collections Save and categorize content based on your preferences.

1.87.0 (latest) 1.85.0 1.83.0 1.82.0 1.81.0 1.80.0 1.78.0 1.76.0 1.75.0 1.74.0 1.73.0 1.72.0 1.70.0 1.68.0 1.67.0 1.64.0 1.63.0 1.62.0 1.60.0 1.59.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.51.0 1.49.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.37.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.24.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.11.0 1.9.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.6 1.2.1 1.1.0 1.0.1 0.5.4

```
public interface MembershipOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### containsLabels(String key)

```
public abstract boolean containsLabels(String key)
```

Optional. GCP labels for this membership.

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

### getAuthority()

```
public abstract Authority getAuthority()
```

Optional. How to identify workloads from this Membership. See the documentation on Workload Identity for more details: [https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity](https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity)

`.google.cloud.gkehub.v1alpha2.Authority authority = 10 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[Authority](/java/docs/reference/google-cloud-gkehub/1.16.0/com.google.cloud.gkehub.v1alpha2.Authority)`

The authority.

### getAuthorityOrBuilder()

```
public abstract AuthorityOrBuilder getAuthorityOrBuilder()
```

Optional. How to identify workloads from this Membership. See the documentation on Workload Identity for more details: [https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity](https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity)

`.google.cloud.gkehub.v1alpha2.Authority authority = 10 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[AuthorityOrBuilder](/java/docs/reference/google-cloud-gkehub/1.16.0/com.google.cloud.gkehub.v1alpha2.AuthorityOrBuilder)`

### getCreateTime()

```
public abstract Timestamp getCreateTime()
```

Output only. When the Membership was created.

`.google.protobuf.Timestamp create_time = 6 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The createTime.

### getCreateTimeOrBuilder()

```
public abstract TimestampOrBuilder getCreateTimeOrBuilder()
```

Output only. When the Membership was created.

`.google.protobuf.Timestamp create_time = 6 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getDeleteTime()

```
public abstract Timestamp getDeleteTime()
```

Output only. When the Membership was deleted.

`.google.protobuf.Timestamp delete_time = 8 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The deleteTime.

### getDeleteTimeOrBuilder()

```
public abstract TimestampOrBuilder getDeleteTimeOrBuilder()
```

Output only. When the Membership was deleted.

`.google.protobuf.Timestamp delete_time = 8 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getDescription()

```
public abstract String getDescription()
```

Output only. Description of this membership, limited to 63 characters. Must match the regex: `a-zA-Z0-9*` This field is present for legacy purposes.

`string description = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The description.

### getDescriptionBytes()

```
public abstract ByteString getDescriptionBytes()
```

Output only. Description of this membership, limited to 63 characters. Must match the regex: `a-zA-Z0-9*` This field is present for legacy purposes.

`string description = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for description.

### getEndpoint()

```
public abstract MembershipEndpoint getEndpoint()
```

Optional. Endpoint information to reach this member.

`.google.cloud.gkehub.v1alpha2.MembershipEndpoint endpoint = 4 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[MembershipEndpoint](/java/docs/reference/google-cloud-gkehub/1.16.0/com.google.cloud.gkehub.v1alpha2.MembershipEndpoint)`

The endpoint.

### getEndpointOrBuilder()

```
public abstract MembershipEndpointOrBuilder getEndpointOrBuilder()
```

Optional. Endpoint information to reach this member.

`.google.cloud.gkehub.v1alpha2.MembershipEndpoint endpoint = 4 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[MembershipEndpointOrBuilder](/java/docs/reference/google-cloud-gkehub/1.16.0/com.google.cloud.gkehub.v1alpha2.MembershipEndpointOrBuilder)`

### getExternalId()

```
public abstract String getExternalId()
```

Optional. An externally-generated and managed ID for this Membership. This ID may be modified after creation, but this is not recommended. For GKE clusters, external\_id is managed by the Hub API and updates will be ignored. The ID must match the regex: `a-zA-Z0-9*` If this Membership represents a Kubernetes cluster, this value should be set to the UID of the `kube-system` namespace object.

`string external_id = 9 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The externalId.

### getExternalIdBytes()

```
public abstract ByteString getExternalIdBytes()
```

Optional. An externally-generated and managed ID for this Membership. This ID may be modified after creation, but this is not recommended. For GKE clusters, external\_id is managed by the Hub API and updates will be ignored. The ID must match the regex: `a-zA-Z0-9*` If this Membership represents a Kubernetes cluster, this value should be set to the UID of the `kube-system` namespace object.

`string external_id = 9 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for externalId.

### getInfrastructureType()

```
public abstract Membership.InfrastructureType getInfrastructureType()
```

Optional. The infrastructure type this Membership is running on.

`.google.cloud.gkehub.v1alpha2.Membership.InfrastructureType infrastructure_type = 13 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[Membership.InfrastructureType](/java/docs/reference/google-cloud-gkehub/1.16.0/com.google.cloud.gkehub.v1alpha2.Membership.InfrastructureType)`

The infrastructureType.

### getInfrastructureTypeValue()

```
public abstract int getInfrastructureTypeValue()
```

Optional. The infrastructure type this Membership is running on.

`.google.cloud.gkehub.v1alpha2.Membership.InfrastructureType infrastructure_type = 13 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for infrastructureType.

### getLabels()

```
public abstract Map<String,String> getLabels()
```

Use [#getLabelsMap()](/java/docs/reference/google-cloud-gkehub/1.16.0/com.google.cloud.gkehub.v1alpha2.MembershipOrBuilder#com_google_cloud_gkehub_v1alpha2_MembershipOrBuilder_getLabelsMap__) instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getLabelsCount()

```
public abstract int getLabelsCount()
```

Optional. GCP labels for this membership.

`map<string, string> labels = 2 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getLabelsMap()

```
public abstract Map<String,String> getLabelsMap()
```

Optional. GCP labels for this membership.

`map<string, string> labels = 2 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getLabelsOrDefault(String key, String defaultValue)

```
public abstract String getLabelsOrDefault(String key, String defaultValue)
```

Optional. GCP labels for this membership.

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

Optional. GCP labels for this membership.

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

### getLastConnectionTime()

```
public abstract Timestamp getLastConnectionTime()
```

Output only. For clusters using Connect, the timestamp of the most recent connection established with Google Cloud. This time is updated every several minutes, not continuously. For clusters that do not use GKE Connect, or that have never connected successfully, this field will be unset.

`.google.protobuf.Timestamp last_connection_time = 11 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The lastConnectionTime.

### getLastConnectionTimeOrBuilder()

```
public abstract TimestampOrBuilder getLastConnectionTimeOrBuilder()
```

Output only. For clusters using Connect, the timestamp of the most recent connection established with Google Cloud. This time is updated every several minutes, not continuously. For clusters that do not use GKE Connect, or that have never connected successfully, this field will be unset.

`.google.protobuf.Timestamp last_connection_time = 11 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getName()

```
public abstract String getName()
```

Output only. The full, unique name of this Membership resource in the format `projects/*/locations/*/memberships/{membership_id}`, set during creation. `membership_id` must be a valid RFC 1123 compliant DNS label:

1.  At most 63 characters in length
2.  It must consist of lower case alphanumeric characters or `-`
3.  It must start and end with an alphanumeric character Which can be expressed as the regex: `[a-z0-9](/java/docs/reference/google-cloud-gkehub/1.16.0/[-a-z0-9]*[a-z0-9])?`, with a maximum length of 63 characters.

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

Output only. The full, unique name of this Membership resource in the format `projects/*/locations/*/memberships/{membership_id}`, set during creation. `membership_id` must be a valid RFC 1123 compliant DNS label:

1.  At most 63 characters in length
2.  It must consist of lower case alphanumeric characters or `-`
3.  It must start and end with an alphanumeric character Which can be expressed as the regex: `[a-z0-9](/java/docs/reference/google-cloud-gkehub/1.16.0/[-a-z0-9]*[a-z0-9])?`, with a maximum length of 63 characters.

`string name = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for name.

### getState()

```
public abstract MembershipState getState()
```

Output only. State of the Membership resource.

`.google.cloud.gkehub.v1alpha2.MembershipState state = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[MembershipState](/java/docs/reference/google-cloud-gkehub/1.16.0/com.google.cloud.gkehub.v1alpha2.MembershipState)`

The state.

### getStateOrBuilder()

```
public abstract MembershipStateOrBuilder getStateOrBuilder()
```

Output only. State of the Membership resource.

`.google.cloud.gkehub.v1alpha2.MembershipState state = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[MembershipStateOrBuilder](/java/docs/reference/google-cloud-gkehub/1.16.0/com.google.cloud.gkehub.v1alpha2.MembershipStateOrBuilder)`

### getTypeCase()

```
public abstract Membership.TypeCase getTypeCase()
```

**Returns**

**Type**

**Description**

`[Membership.TypeCase](/java/docs/reference/google-cloud-gkehub/1.16.0/com.google.cloud.gkehub.v1alpha2.Membership.TypeCase)`

### getUniqueId()

```
public abstract String getUniqueId()
```

Output only. Google-generated UUID for this resource. This is unique across all Membership resources. If a Membership resource is deleted and another resource with the same name is created, it gets a different unique\_id.

`string unique_id = 12 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The uniqueId.

### getUniqueIdBytes()

```
public abstract ByteString getUniqueIdBytes()
```

Output only. Google-generated UUID for this resource. This is unique across all Membership resources. If a Membership resource is deleted and another resource with the same name is created, it gets a different unique\_id.

`string unique_id = 12 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for uniqueId.

### getUpdateTime()

```
public abstract Timestamp getUpdateTime()
```

Output only. When the Membership was last updated.

`.google.protobuf.Timestamp update_time = 7 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The updateTime.

### getUpdateTimeOrBuilder()

```
public abstract TimestampOrBuilder getUpdateTimeOrBuilder()
```

Output only. When the Membership was last updated.

`.google.protobuf.Timestamp update_time = 7 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### hasAuthority()

```
public abstract boolean hasAuthority()
```

Optional. How to identify workloads from this Membership. See the documentation on Workload Identity for more details: [https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity](https://cloud.google.com/kubernetes-engine/docs/how-to/workload-identity)

`.google.cloud.gkehub.v1alpha2.Authority authority = 10 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the authority field is set.

### hasCreateTime()

```
public abstract boolean hasCreateTime()
```

Output only. When the Membership was created.

`.google.protobuf.Timestamp create_time = 6 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the createTime field is set.

### hasDeleteTime()

```
public abstract boolean hasDeleteTime()
```

Output only. When the Membership was deleted.

`.google.protobuf.Timestamp delete_time = 8 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the deleteTime field is set.

### hasEndpoint()

```
public abstract boolean hasEndpoint()
```

Optional. Endpoint information to reach this member.

`.google.cloud.gkehub.v1alpha2.MembershipEndpoint endpoint = 4 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the endpoint field is set.

### hasLastConnectionTime()

```
public abstract boolean hasLastConnectionTime()
```

Output only. For clusters using Connect, the timestamp of the most recent connection established with Google Cloud. This time is updated every several minutes, not continuously. For clusters that do not use GKE Connect, or that have never connected successfully, this field will be unset.

`.google.protobuf.Timestamp last_connection_time = 11 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the lastConnectionTime field is set.

### hasState()

```
public abstract boolean hasState()
```

Output only. State of the Membership resource.

`.google.cloud.gkehub.v1alpha2.MembershipState state = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the state field is set.

### hasUpdateTime()

```
public abstract boolean hasUpdateTime()
```

Output only. When the Membership was last updated.

`.google.protobuf.Timestamp update_time = 7 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the updateTime field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.

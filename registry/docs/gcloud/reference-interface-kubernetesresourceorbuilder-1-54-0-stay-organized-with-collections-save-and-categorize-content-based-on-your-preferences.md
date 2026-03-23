-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface KubernetesResourceOrBuilder (1.54.0) Stay organized with collections Save and categorize content based on your preferences.

1.87.0 (latest) 1.85.0 1.83.0 1.82.0 1.81.0 1.80.0 1.78.0 1.76.0 1.75.0 1.74.0 1.73.0 1.72.0 1.70.0 1.68.0 1.67.0 1.64.0 1.63.0 1.62.0 1.60.0 1.59.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.51.0 1.49.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.37.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.24.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.11.0 1.9.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.6 1.2.1 1.1.0 1.0.1 0.5.4

```
public interface KubernetesResourceOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getConnectResources(int index)

```
public abstract ResourceManifest getConnectResources(int index)
```

Output only. The Kubernetes resources for installing the GKE Connect agent

This field is only populated in the Membership returned from a successful long-running operation from CreateMembership or UpdateMembership. It is not populated during normal GetMembership or ListMemberships requests. To get the resource manifest after the initial registration, the caller should make a UpdateMembership call with an empty field mask.

`repeated .google.cloud.gkehub.v1.ResourceManifest connect_resources = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[ResourceManifest](/java/docs/reference/google-cloud-gkehub/1.54.0/com.google.cloud.gkehub.v1.ResourceManifest)`

### getConnectResourcesCount()

```
public abstract int getConnectResourcesCount()
```

Output only. The Kubernetes resources for installing the GKE Connect agent

This field is only populated in the Membership returned from a successful long-running operation from CreateMembership or UpdateMembership. It is not populated during normal GetMembership or ListMemberships requests. To get the resource manifest after the initial registration, the caller should make a UpdateMembership call with an empty field mask.

`repeated .google.cloud.gkehub.v1.ResourceManifest connect_resources = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getConnectResourcesList()

```
public abstract List<ResourceManifest> getConnectResourcesList()
```

Output only. The Kubernetes resources for installing the GKE Connect agent

This field is only populated in the Membership returned from a successful long-running operation from CreateMembership or UpdateMembership. It is not populated during normal GetMembership or ListMemberships requests. To get the resource manifest after the initial registration, the caller should make a UpdateMembership call with an empty field mask.

`repeated .google.cloud.gkehub.v1.ResourceManifest connect_resources = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[ResourceManifest](/java/docs/reference/google-cloud-gkehub/1.54.0/com.google.cloud.gkehub.v1.ResourceManifest)>`

### getConnectResourcesOrBuilder(int index)

```
public abstract ResourceManifestOrBuilder getConnectResourcesOrBuilder(int index)
```

Output only. The Kubernetes resources for installing the GKE Connect agent

This field is only populated in the Membership returned from a successful long-running operation from CreateMembership or UpdateMembership. It is not populated during normal GetMembership or ListMemberships requests. To get the resource manifest after the initial registration, the caller should make a UpdateMembership call with an empty field mask.

`repeated .google.cloud.gkehub.v1.ResourceManifest connect_resources = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[ResourceManifestOrBuilder](/java/docs/reference/google-cloud-gkehub/1.54.0/com.google.cloud.gkehub.v1.ResourceManifestOrBuilder)`

### getConnectResourcesOrBuilderList()

```
public abstract List<? extends ResourceManifestOrBuilder> getConnectResourcesOrBuilderList()
```

Output only. The Kubernetes resources for installing the GKE Connect agent

This field is only populated in the Membership returned from a successful long-running operation from CreateMembership or UpdateMembership. It is not populated during normal GetMembership or ListMemberships requests. To get the resource manifest after the initial registration, the caller should make a UpdateMembership call with an empty field mask.

`repeated .google.cloud.gkehub.v1.ResourceManifest connect_resources = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.gkehub.v1.ResourceManifestOrBuilder>`

### getMembershipCrManifest()

```
public abstract String getMembershipCrManifest()
```

Input only. The YAML representation of the Membership CR. This field is ignored for GKE clusters where Hub can read the CR directly.

Callers should provide the CR that is currently present in the cluster during CreateMembership or UpdateMembership, or leave this field empty if none exists. The CR manifest is used to validate the cluster has not been registered with another Membership.

`string membership_cr_manifest = 1 [(.google.api.field_behavior) = INPUT_ONLY];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The membershipCrManifest.

### getMembershipCrManifestBytes()

```
public abstract ByteString getMembershipCrManifestBytes()
```

Input only. The YAML representation of the Membership CR. This field is ignored for GKE clusters where Hub can read the CR directly.

Callers should provide the CR that is currently present in the cluster during CreateMembership or UpdateMembership, or leave this field empty if none exists. The CR manifest is used to validate the cluster has not been registered with another Membership.

`string membership_cr_manifest = 1 [(.google.api.field_behavior) = INPUT_ONLY];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for membershipCrManifest.

### getMembershipResources(int index)

```
public abstract ResourceManifest getMembershipResources(int index)
```

Output only. Additional Kubernetes resources that need to be applied to the cluster after Membership creation, and after every update.

This field is only populated in the Membership returned from a successful long-running operation from CreateMembership or UpdateMembership. It is not populated during normal GetMembership or ListMemberships requests. To get the resource manifest after the initial registration, the caller should make a UpdateMembership call with an empty field mask.

`repeated .google.cloud.gkehub.v1.ResourceManifest membership_resources = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[ResourceManifest](/java/docs/reference/google-cloud-gkehub/1.54.0/com.google.cloud.gkehub.v1.ResourceManifest)`

### getMembershipResourcesCount()

```
public abstract int getMembershipResourcesCount()
```

Output only. Additional Kubernetes resources that need to be applied to the cluster after Membership creation, and after every update.

This field is only populated in the Membership returned from a successful long-running operation from CreateMembership or UpdateMembership. It is not populated during normal GetMembership or ListMemberships requests. To get the resource manifest after the initial registration, the caller should make a UpdateMembership call with an empty field mask.

`repeated .google.cloud.gkehub.v1.ResourceManifest membership_resources = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getMembershipResourcesList()

```
public abstract List<ResourceManifest> getMembershipResourcesList()
```

Output only. Additional Kubernetes resources that need to be applied to the cluster after Membership creation, and after every update.

This field is only populated in the Membership returned from a successful long-running operation from CreateMembership or UpdateMembership. It is not populated during normal GetMembership or ListMemberships requests. To get the resource manifest after the initial registration, the caller should make a UpdateMembership call with an empty field mask.

`repeated .google.cloud.gkehub.v1.ResourceManifest membership_resources = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[ResourceManifest](/java/docs/reference/google-cloud-gkehub/1.54.0/com.google.cloud.gkehub.v1.ResourceManifest)>`

### getMembershipResourcesOrBuilder(int index)

```
public abstract ResourceManifestOrBuilder getMembershipResourcesOrBuilder(int index)
```

Output only. Additional Kubernetes resources that need to be applied to the cluster after Membership creation, and after every update.

This field is only populated in the Membership returned from a successful long-running operation from CreateMembership or UpdateMembership. It is not populated during normal GetMembership or ListMemberships requests. To get the resource manifest after the initial registration, the caller should make a UpdateMembership call with an empty field mask.

`repeated .google.cloud.gkehub.v1.ResourceManifest membership_resources = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[ResourceManifestOrBuilder](/java/docs/reference/google-cloud-gkehub/1.54.0/com.google.cloud.gkehub.v1.ResourceManifestOrBuilder)`

### getMembershipResourcesOrBuilderList()

```
public abstract List<? extends ResourceManifestOrBuilder> getMembershipResourcesOrBuilderList()
```

Output only. Additional Kubernetes resources that need to be applied to the cluster after Membership creation, and after every update.

This field is only populated in the Membership returned from a successful long-running operation from CreateMembership or UpdateMembership. It is not populated during normal GetMembership or ListMemberships requests. To get the resource manifest after the initial registration, the caller should make a UpdateMembership call with an empty field mask.

`repeated .google.cloud.gkehub.v1.ResourceManifest membership_resources = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.gkehub.v1.ResourceManifestOrBuilder>`

### getResourceOptions()

```
public abstract ResourceOptions getResourceOptions()
```

Optional. Options for Kubernetes resource generation.

`.google.cloud.gkehub.v1.ResourceOptions resource_options = 4 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ResourceOptions](/java/docs/reference/google-cloud-gkehub/1.54.0/com.google.cloud.gkehub.v1.ResourceOptions)`

The resourceOptions.

### getResourceOptionsOrBuilder()

```
public abstract ResourceOptionsOrBuilder getResourceOptionsOrBuilder()
```

Optional. Options for Kubernetes resource generation.

`.google.cloud.gkehub.v1.ResourceOptions resource_options = 4 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ResourceOptionsOrBuilder](/java/docs/reference/google-cloud-gkehub/1.54.0/com.google.cloud.gkehub.v1.ResourceOptionsOrBuilder)`

### hasResourceOptions()

```
public abstract boolean hasResourceOptions()
```

Optional. Options for Kubernetes resource generation.

`.google.cloud.gkehub.v1.ResourceOptions resource_options = 4 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the resourceOptions field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.

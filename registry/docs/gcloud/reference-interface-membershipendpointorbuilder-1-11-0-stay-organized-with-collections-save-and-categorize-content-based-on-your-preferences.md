-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface MembershipEndpointOrBuilder (1.11.0) Stay organized with collections Save and categorize content based on your preferences.

1.87.0 (latest) 1.85.0 1.83.0 1.82.0 1.81.0 1.80.0 1.78.0 1.76.0 1.75.0 1.74.0 1.73.0 1.72.0 1.70.0 1.68.0 1.67.0 1.64.0 1.63.0 1.62.0 1.60.0 1.59.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.51.0 1.49.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.37.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.24.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.11.0 1.9.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.6 1.2.1 1.1.0 1.0.1 0.5.4

```
public interface MembershipEndpointOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getGkeCluster()

```
public abstract GkeCluster getGkeCluster()
```

Optional. GKE-specific information. Only present if this Membership is a GKE cluster.

`.google.cloud.gkehub.v1.GkeCluster gke_cluster = 1 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[GkeCluster](/java/docs/reference/google-cloud-gkehub/1.11.0/com.google.cloud.gkehub.v1.GkeCluster)`

The gkeCluster.

### getGkeClusterOrBuilder()

```
public abstract GkeClusterOrBuilder getGkeClusterOrBuilder()
```

Optional. GKE-specific information. Only present if this Membership is a GKE cluster.

`.google.cloud.gkehub.v1.GkeCluster gke_cluster = 1 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[GkeClusterOrBuilder](/java/docs/reference/google-cloud-gkehub/1.11.0/com.google.cloud.gkehub.v1.GkeClusterOrBuilder)`

### getKubernetesMetadata()

```
public abstract KubernetesMetadata getKubernetesMetadata()
```

Output only. Useful Kubernetes-specific metadata.

`.google.cloud.gkehub.v1.KubernetesMetadata kubernetes_metadata = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[KubernetesMetadata](/java/docs/reference/google-cloud-gkehub/1.11.0/com.google.cloud.gkehub.v1.KubernetesMetadata)`

The kubernetesMetadata.

### getKubernetesMetadataOrBuilder()

```
public abstract KubernetesMetadataOrBuilder getKubernetesMetadataOrBuilder()
```

Output only. Useful Kubernetes-specific metadata.

`.google.cloud.gkehub.v1.KubernetesMetadata kubernetes_metadata = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[KubernetesMetadataOrBuilder](/java/docs/reference/google-cloud-gkehub/1.11.0/com.google.cloud.gkehub.v1.KubernetesMetadataOrBuilder)`

### getKubernetesResource()

```
public abstract KubernetesResource getKubernetesResource()
```

Optional. The in-cluster Kubernetes Resources that should be applied for a correctly registered cluster, in the steady state. These resources:

-   Ensure that the cluster is exclusively registered to one and only one Hub Membership.
-   Propagate Workload Pool Information available in the Membership Authority field.
-   Ensure proper initial configuration of default Hub Features.

`.google.cloud.gkehub.v1.KubernetesResource kubernetes_resource = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[KubernetesResource](/java/docs/reference/google-cloud-gkehub/1.11.0/com.google.cloud.gkehub.v1.KubernetesResource)`

The kubernetesResource.

### getKubernetesResourceOrBuilder()

```
public abstract KubernetesResourceOrBuilder getKubernetesResourceOrBuilder()
```

Optional. The in-cluster Kubernetes Resources that should be applied for a correctly registered cluster, in the steady state. These resources:

-   Ensure that the cluster is exclusively registered to one and only one Hub Membership.
-   Propagate Workload Pool Information available in the Membership Authority field.
-   Ensure proper initial configuration of default Hub Features.

`.google.cloud.gkehub.v1.KubernetesResource kubernetes_resource = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[KubernetesResourceOrBuilder](/java/docs/reference/google-cloud-gkehub/1.11.0/com.google.cloud.gkehub.v1.KubernetesResourceOrBuilder)`

### hasGkeCluster()

```
public abstract boolean hasGkeCluster()
```

Optional. GKE-specific information. Only present if this Membership is a GKE cluster.

`.google.cloud.gkehub.v1.GkeCluster gke_cluster = 1 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the gkeCluster field is set.

### hasKubernetesMetadata()

```
public abstract boolean hasKubernetesMetadata()
```

Output only. Useful Kubernetes-specific metadata.

`.google.cloud.gkehub.v1.KubernetesMetadata kubernetes_metadata = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the kubernetesMetadata field is set.

### hasKubernetesResource()

```
public abstract boolean hasKubernetesResource()
```

Optional. The in-cluster Kubernetes Resources that should be applied for a correctly registered cluster, in the steady state. These resources:

-   Ensure that the cluster is exclusively registered to one and only one Hub Membership.
-   Propagate Workload Pool Information available in the Membership Authority field.
-   Ensure proper initial configuration of default Hub Features.

`.google.cloud.gkehub.v1.KubernetesResource kubernetes_resource = 3 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the kubernetesResource field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.

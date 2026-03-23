-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface Backup.ClusterMetadataOrBuilder (0.43.0) Stay organized with collections Save and categorize content based on your preferences.

0.86.0 (latest) 0.84.0 0.82.0 0.81.0 0.80.0 0.79.0 0.77.0 0.75.0 0.74.0 0.73.0 0.72.0 0.71.0 0.69.0 0.67.0 0.66.0 0.63.0 0.62.0 0.61.0 0.59.0 0.58.0 0.57.0 0.56.0 0.55.0 0.54.0 0.53.0 0.52.0 0.51.0 0.50.0 0.48.0 0.47.0 0.46.0 0.45.0 0.44.0 0.43.0 0.42.0 0.41.0 0.40.0 0.39.0 0.38.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.26.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.0 0.3.0 0.2.6 0.1.0

```
public static interface Backup.ClusterMetadataOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### containsBackupCrdVersions(String key)

```
public abstract boolean containsBackupCrdVersions(String key)
```

Output only. A list of the Backup for GKE CRD versions found in the cluster.

`map<string, string> backup_crd_versions = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getAnthosVersion()

```
public abstract String getAnthosVersion()
```

Output only. Anthos version

`string anthos_version = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The anthosVersion.

### getAnthosVersionBytes()

```
public abstract ByteString getAnthosVersionBytes()
```

Output only. Anthos version

`string anthos_version = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for anthosVersion.

### getBackupCrdVersions() (deprecated)

```
public abstract Map<String,String> getBackupCrdVersions()
```

Use [#getBackupCrdVersionsMap()](/java/docs/reference/google-cloud-gke-backup/0.43.0/com.google.cloud.gkebackup.v1.Backup.ClusterMetadataOrBuilder#com_google_cloud_gkebackup_v1_Backup_ClusterMetadataOrBuilder_getBackupCrdVersionsMap__) instead.

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getBackupCrdVersionsCount()

```
public abstract int getBackupCrdVersionsCount()
```

Output only. A list of the Backup for GKE CRD versions found in the cluster.

`map<string, string> backup_crd_versions = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getBackupCrdVersionsMap()

```
public abstract Map<String,String> getBackupCrdVersionsMap()
```

Output only. A list of the Backup for GKE CRD versions found in the cluster.

`map<string, string> backup_crd_versions = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getBackupCrdVersionsOrDefault(String key, String defaultValue)

```
public abstract String getBackupCrdVersionsOrDefault(String key, String defaultValue)
```

Output only. A list of the Backup for GKE CRD versions found in the cluster.

`map<string, string> backup_crd_versions = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

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

### getBackupCrdVersionsOrThrow(String key)

```
public abstract String getBackupCrdVersionsOrThrow(String key)
```

Output only. A list of the Backup for GKE CRD versions found in the cluster.

`map<string, string> backup_crd_versions = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`key`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### getCluster()

```
public abstract String getCluster()
```

Output only. The source cluster from which this Backup was created. Valid formats:

-   `projects/*/locations/*/clusters/*`
-   `projects/*/zones/*/clusters/*`
    
    This is inherited from the parent BackupPlan's cluster field.
    

`string cluster = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The cluster.

### getClusterBytes()

```
public abstract ByteString getClusterBytes()
```

Output only. The source cluster from which this Backup was created. Valid formats:

-   `projects/*/locations/*/clusters/*`
-   `projects/*/zones/*/clusters/*`
    
    This is inherited from the parent BackupPlan's cluster field.
    

`string cluster = 1 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for cluster.

### getGkeVersion()

```
public abstract String getGkeVersion()
```

Output only. GKE version

`string gke_version = 4 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The gkeVersion.

### getGkeVersionBytes()

```
public abstract ByteString getGkeVersionBytes()
```

Output only. GKE version

`string gke_version = 4 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for gkeVersion.

### getK8SVersion()

```
public abstract String getK8SVersion()
```

Output only. The Kubernetes server version of the source cluster.

`string k8s_version = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The k8sVersion.

### getK8SVersionBytes()

```
public abstract ByteString getK8SVersionBytes()
```

Output only. The Kubernetes server version of the source cluster.

`string k8s_version = 2 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for k8sVersion.

### getPlatformVersionCase()

```
public abstract Backup.ClusterMetadata.PlatformVersionCase getPlatformVersionCase()
```

**Returns**

**Type**

**Description**

`[Backup.ClusterMetadata.PlatformVersionCase](/java/docs/reference/google-cloud-gke-backup/0.43.0/com.google.cloud.gkebackup.v1.Backup.ClusterMetadata.PlatformVersionCase)`

### hasAnthosVersion()

```
public abstract boolean hasAnthosVersion()
```

Output only. Anthos version

`string anthos_version = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the anthosVersion field is set.

### hasGkeVersion()

```
public abstract boolean hasGkeVersion()
```

Output only. GKE version

`string gke_version = 4 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the gkeVersion field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.

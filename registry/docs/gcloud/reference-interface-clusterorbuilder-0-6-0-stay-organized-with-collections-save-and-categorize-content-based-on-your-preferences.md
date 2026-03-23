-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface ClusterOrBuilder (0.6.0) Stay organized with collections Save and categorize content based on your preferences.

0.59.0 (latest) 0.57.0 0.55.0 0.54.0 0.52.0 0.50.0 0.48.0 0.47.0 0.46.0 0.45.0 0.44.0 0.42.0 0.40.0 0.39.0 0.36.0 0.35.0 0.34.0 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.26.0 0.25.0 0.24.0 0.23.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.0 0.3.0 0.2.0 0.1.0

```
public interface ClusterOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getAuthorizationMode()

```
public abstract AuthorizationMode getAuthorizationMode()
```

Optional. The authorization mode of the Redis cluster. If not provided, auth feature is disabled for the cluster.

`.google.cloud.redis.cluster.v1.AuthorizationMode authorization_mode = 11 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[AuthorizationMode](/java/docs/reference/google-cloud-redis-cluster/0.6.0/com.google.cloud.redis.cluster.v1.AuthorizationMode)`

The authorizationMode.

### getAuthorizationModeValue()

```
public abstract int getAuthorizationModeValue()
```

Optional. The authorization mode of the Redis cluster. If not provided, auth feature is disabled for the cluster.

`.google.cloud.redis.cluster.v1.AuthorizationMode authorization_mode = 11 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for authorizationMode.

### getCreateTime()

```
public abstract Timestamp getCreateTime()
```

Output only. The timestamp associated with the cluster creation request.

`.google.protobuf.Timestamp create_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Timestamp](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Timestamp.html)`

The createTime.

### getCreateTimeOrBuilder()

```
public abstract TimestampOrBuilder getCreateTimeOrBuilder()
```

Output only. The timestamp associated with the cluster creation request.

`.google.protobuf.Timestamp create_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[TimestampOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.TimestampOrBuilder.html)`

### getDiscoveryEndpoints(int index)

```
public abstract DiscoveryEndpoint getDiscoveryEndpoints(int index)
```

Output only. Endpoints created on each given network, for Redis clients to connect to the cluster. Currently only one discovery endpoint is supported.

`repeated .google.cloud.redis.cluster.v1.DiscoveryEndpoint discovery_endpoints = 16 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[DiscoveryEndpoint](/java/docs/reference/google-cloud-redis-cluster/0.6.0/com.google.cloud.redis.cluster.v1.DiscoveryEndpoint)`

### getDiscoveryEndpointsCount()

```
public abstract int getDiscoveryEndpointsCount()
```

Output only. Endpoints created on each given network, for Redis clients to connect to the cluster. Currently only one discovery endpoint is supported.

`repeated .google.cloud.redis.cluster.v1.DiscoveryEndpoint discovery_endpoints = 16 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getDiscoveryEndpointsList()

```
public abstract List<DiscoveryEndpoint> getDiscoveryEndpointsList()
```

Output only. Endpoints created on each given network, for Redis clients to connect to the cluster. Currently only one discovery endpoint is supported.

`repeated .google.cloud.redis.cluster.v1.DiscoveryEndpoint discovery_endpoints = 16 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[DiscoveryEndpoint](/java/docs/reference/google-cloud-redis-cluster/0.6.0/com.google.cloud.redis.cluster.v1.DiscoveryEndpoint)>`

### getDiscoveryEndpointsOrBuilder(int index)

```
public abstract DiscoveryEndpointOrBuilder getDiscoveryEndpointsOrBuilder(int index)
```

Output only. Endpoints created on each given network, for Redis clients to connect to the cluster. Currently only one discovery endpoint is supported.

`repeated .google.cloud.redis.cluster.v1.DiscoveryEndpoint discovery_endpoints = 16 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[DiscoveryEndpointOrBuilder](/java/docs/reference/google-cloud-redis-cluster/0.6.0/com.google.cloud.redis.cluster.v1.DiscoveryEndpointOrBuilder)`

### getDiscoveryEndpointsOrBuilderList()

```
public abstract List<? extends DiscoveryEndpointOrBuilder> getDiscoveryEndpointsOrBuilderList()
```

Output only. Endpoints created on each given network, for Redis clients to connect to the cluster. Currently only one discovery endpoint is supported.

`repeated .google.cloud.redis.cluster.v1.DiscoveryEndpoint discovery_endpoints = 16 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.redis.cluster.v1.DiscoveryEndpointOrBuilder>`

### getName()

```
public abstract String getName()
```

Required. Unique name of the resource in this scope including project and location using the form: `projects/{project_id}/locations/{location_id}/clusters/{cluster_id}`

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

Required. Unique name of the resource in this scope including project and location using the form: `projects/{project_id}/locations/{location_id}/clusters/{cluster_id}`

`string name = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for name.

### getPscConfigs(int index)

```
public abstract PscConfig getPscConfigs(int index)
```

Required. Each PscConfig configures the consumer network where IPs will be designated to the cluster for client access through Private Service Connect Automation. Currently, only one PscConfig is supported.

`repeated .google.cloud.redis.cluster.v1.PscConfig psc_configs = 15 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[PscConfig](/java/docs/reference/google-cloud-redis-cluster/0.6.0/com.google.cloud.redis.cluster.v1.PscConfig)`

### getPscConfigsCount()

```
public abstract int getPscConfigsCount()
```

Required. Each PscConfig configures the consumer network where IPs will be designated to the cluster for client access through Private Service Connect Automation. Currently, only one PscConfig is supported.

`repeated .google.cloud.redis.cluster.v1.PscConfig psc_configs = 15 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getPscConfigsList()

```
public abstract List<PscConfig> getPscConfigsList()
```

Required. Each PscConfig configures the consumer network where IPs will be designated to the cluster for client access through Private Service Connect Automation. Currently, only one PscConfig is supported.

`repeated .google.cloud.redis.cluster.v1.PscConfig psc_configs = 15 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[PscConfig](/java/docs/reference/google-cloud-redis-cluster/0.6.0/com.google.cloud.redis.cluster.v1.PscConfig)>`

### getPscConfigsOrBuilder(int index)

```
public abstract PscConfigOrBuilder getPscConfigsOrBuilder(int index)
```

Required. Each PscConfig configures the consumer network where IPs will be designated to the cluster for client access through Private Service Connect Automation. Currently, only one PscConfig is supported.

`repeated .google.cloud.redis.cluster.v1.PscConfig psc_configs = 15 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[PscConfigOrBuilder](/java/docs/reference/google-cloud-redis-cluster/0.6.0/com.google.cloud.redis.cluster.v1.PscConfigOrBuilder)`

### getPscConfigsOrBuilderList()

```
public abstract List<? extends PscConfigOrBuilder> getPscConfigsOrBuilderList()
```

Required. Each PscConfig configures the consumer network where IPs will be designated to the cluster for client access through Private Service Connect Automation. Currently, only one PscConfig is supported.

`repeated .google.cloud.redis.cluster.v1.PscConfig psc_configs = 15 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.redis.cluster.v1.PscConfigOrBuilder>`

### getPscConnections(int index)

```
public abstract PscConnection getPscConnections(int index)
```

Output only. PSC connections for discovery of the cluster topology and accessing the cluster.

`repeated .google.cloud.redis.cluster.v1.PscConnection psc_connections = 17 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[PscConnection](/java/docs/reference/google-cloud-redis-cluster/0.6.0/com.google.cloud.redis.cluster.v1.PscConnection)`

### getPscConnectionsCount()

```
public abstract int getPscConnectionsCount()
```

Output only. PSC connections for discovery of the cluster topology and accessing the cluster.

`repeated .google.cloud.redis.cluster.v1.PscConnection psc_connections = 17 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getPscConnectionsList()

```
public abstract List<PscConnection> getPscConnectionsList()
```

Output only. PSC connections for discovery of the cluster topology and accessing the cluster.

`repeated .google.cloud.redis.cluster.v1.PscConnection psc_connections = 17 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[PscConnection](/java/docs/reference/google-cloud-redis-cluster/0.6.0/com.google.cloud.redis.cluster.v1.PscConnection)>`

### getPscConnectionsOrBuilder(int index)

```
public abstract PscConnectionOrBuilder getPscConnectionsOrBuilder(int index)
```

Output only. PSC connections for discovery of the cluster topology and accessing the cluster.

`repeated .google.cloud.redis.cluster.v1.PscConnection psc_connections = 17 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[PscConnectionOrBuilder](/java/docs/reference/google-cloud-redis-cluster/0.6.0/com.google.cloud.redis.cluster.v1.PscConnectionOrBuilder)`

### getPscConnectionsOrBuilderList()

```
public abstract List<? extends PscConnectionOrBuilder> getPscConnectionsOrBuilderList()
```

Output only. PSC connections for discovery of the cluster topology and accessing the cluster.

`repeated .google.cloud.redis.cluster.v1.PscConnection psc_connections = 17 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.cloud.redis.cluster.v1.PscConnectionOrBuilder>`

### getReplicaCount()

```
public abstract int getReplicaCount()
```

Optional. The number of replica nodes per shard.

`optional int32 replica_count = 8 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The replicaCount.

### getShardCount()

```
public abstract int getShardCount()
```

Required. Number of shards for the Redis cluster.

`optional int32 shard_count = 14 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The shardCount.

### getSizeGb()

```
public abstract int getSizeGb()
```

Output only. Redis memory size in GB for the entire cluster.

`optional int32 size_gb = 13 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The sizeGb.

### getState()

```
public abstract Cluster.State getState()
```

Output only. The current state of this cluster. Can be CREATING, READY, UPDATING, DELETING and SUSPENDED

`.google.cloud.redis.cluster.v1.Cluster.State state = 4 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Cluster.State](/java/docs/reference/google-cloud-redis-cluster/0.6.0/com.google.cloud.redis.cluster.v1.Cluster.State)`

The state.

### getStateInfo()

```
public abstract Cluster.StateInfo getStateInfo()
```

Output only. Additional information about the current state of the cluster.

`.google.cloud.redis.cluster.v1.Cluster.StateInfo state_info = 18 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Cluster.StateInfo](/java/docs/reference/google-cloud-redis-cluster/0.6.0/com.google.cloud.redis.cluster.v1.Cluster.StateInfo)`

The stateInfo.

### getStateInfoOrBuilder()

```
public abstract Cluster.StateInfoOrBuilder getStateInfoOrBuilder()
```

Output only. Additional information about the current state of the cluster.

`.google.cloud.redis.cluster.v1.Cluster.StateInfo state_info = 18 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[Cluster.StateInfoOrBuilder](/java/docs/reference/google-cloud-redis-cluster/0.6.0/com.google.cloud.redis.cluster.v1.Cluster.StateInfoOrBuilder)`

### getStateValue()

```
public abstract int getStateValue()
```

Output only. The current state of this cluster. Can be CREATING, READY, UPDATING, DELETING and SUSPENDED

`.google.cloud.redis.cluster.v1.Cluster.State state = 4 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for state.

### getTransitEncryptionMode()

```
public abstract TransitEncryptionMode getTransitEncryptionMode()
```

Optional. The in-transit encryption for the Redis cluster. If not provided, encryption is disabled for the cluster.

`.google.cloud.redis.cluster.v1.TransitEncryptionMode transit_encryption_mode = 12 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[TransitEncryptionMode](/java/docs/reference/google-cloud-redis-cluster/0.6.0/com.google.cloud.redis.cluster.v1.TransitEncryptionMode)`

The transitEncryptionMode.

### getTransitEncryptionModeValue()

```
public abstract int getTransitEncryptionModeValue()
```

Optional. The in-transit encryption for the Redis cluster. If not provided, encryption is disabled for the cluster.

`.google.cloud.redis.cluster.v1.TransitEncryptionMode transit_encryption_mode = 12 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for transitEncryptionMode.

### getUid()

```
public abstract String getUid()
```

Output only. System assigned, unique identifier for the cluster.

`string uid = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The uid.

### getUidBytes()

```
public abstract ByteString getUidBytes()
```

Output only. System assigned, unique identifier for the cluster.

`string uid = 5 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for uid.

### hasCreateTime()

```
public abstract boolean hasCreateTime()
```

Output only. The timestamp associated with the cluster creation request.

`.google.protobuf.Timestamp create_time = 3 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the createTime field is set.

### hasReplicaCount()

```
public abstract boolean hasReplicaCount()
```

Optional. The number of replica nodes per shard.

`optional int32 replica_count = 8 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the replicaCount field is set.

### hasShardCount()

```
public abstract boolean hasShardCount()
```

Required. Number of shards for the Redis cluster.

`optional int32 shard_count = 14 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the shardCount field is set.

### hasSizeGb()

```
public abstract boolean hasSizeGb()
```

Output only. Redis memory size in GB for the entire cluster.

`optional int32 size_gb = 13 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the sizeGb field is set.

### hasStateInfo()

```
public abstract boolean hasStateInfo()
```

Output only. Additional information about the current state of the cluster.

`.google.cloud.redis.cluster.v1.Cluster.StateInfo state_info = 18 [(.google.api.field_behavior) = OUTPUT_ONLY];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the stateInfo field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.

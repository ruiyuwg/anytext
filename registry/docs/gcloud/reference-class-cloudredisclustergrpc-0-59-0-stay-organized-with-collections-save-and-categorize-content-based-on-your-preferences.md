-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class CloudRedisClusterGrpc (0.59.0) Stay organized with collections Save and categorize content based on your preferences.

0.59.0 (latest) 0.57.0 0.55.0 0.54.0 0.52.0 0.50.0 0.48.0 0.47.0 0.46.0 0.45.0 0.44.0 0.42.0 0.40.0 0.39.0 0.36.0 0.35.0 0.34.0 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.26.0 0.25.0 0.24.0 0.23.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.0 0.3.0 0.2.0 0.1.0

```
public final class CloudRedisClusterGrpc
```

Configures and manages Cloud Memorystore for Redis clusters Google Cloud Memorystore for Redis Cluster The `redis.googleapis.com` service implements the Google Cloud Memorystore for Redis API and defines the following resource model for managing Redis clusters:

-   The service works with a collection of cloud projects, named: `/projects/*`
-   Each project has a collection of available locations, named: `/locations/*`
-   Each location has a collection of Redis clusters, named: `/clusters/*`
-   As such, Redis clusters are resources of the form: `/projects/{project_id}/locations/{location_id}/clusters/{instance_id}` Note that location\_id must be a GCP `region`; for example:
-   `projects/redpepper-1290/locations/us-central1/clusters/my-redis`

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> CloudRedisClusterGrpc

## Inherited Members

[Object.clone()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#clone--)

[Object.equals(Object)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#equals-java.lang.Object-)

[Object.finalize()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#finalize--)

[Object.getClass()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#getClass--)

[Object.hashCode()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#hashCode--)

[Object.notify()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notify--)

[Object.notifyAll()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notifyAll--)

[Object.toString()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#toString--)

[Object.wait()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait--)

[Object.wait(long)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-)

[Object.wait(long,int)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-int-)

## Static Fields

### SERVICE\_NAME

```
public static final String SERVICE_NAME
```

**Field Value**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

## Static Methods

### bindService(CloudRedisClusterGrpc.AsyncService service)

```
public static final ServerServiceDefinition bindService(CloudRedisClusterGrpc.AsyncService service)
```

**Parameter**

**Name**

**Description**

`service`

`[CloudRedisClusterGrpc.AsyncService](/java/docs/reference/google-cloud-redis-cluster/latest/com.google.cloud.redis.cluster.v1.CloudRedisClusterGrpc.AsyncService)`  

**Returns**

**Type**

**Description**

`io.grpc.ServerServiceDefinition`

### getBackupClusterMethod()

```
public static MethodDescriptor<BackupClusterRequest,Operation> getBackupClusterMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[BackupClusterRequest](/java/docs/reference/google-cloud-redis-cluster/latest/com.google.cloud.redis.cluster.v1.BackupClusterRequest),[Operation](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getCreateClusterMethod()

```
public static MethodDescriptor<CreateClusterRequest,Operation> getCreateClusterMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[CreateClusterRequest](/java/docs/reference/google-cloud-redis-cluster/latest/com.google.cloud.redis.cluster.v1.CreateClusterRequest),[Operation](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getDeleteBackupMethod()

```
public static MethodDescriptor<DeleteBackupRequest,Operation> getDeleteBackupMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[DeleteBackupRequest](/java/docs/reference/google-cloud-redis-cluster/latest/com.google.cloud.redis.cluster.v1.DeleteBackupRequest),[Operation](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getDeleteClusterMethod()

```
public static MethodDescriptor<DeleteClusterRequest,Operation> getDeleteClusterMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[DeleteClusterRequest](/java/docs/reference/google-cloud-redis-cluster/latest/com.google.cloud.redis.cluster.v1.DeleteClusterRequest),[Operation](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getExportBackupMethod()

```
public static MethodDescriptor<ExportBackupRequest,Operation> getExportBackupMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[ExportBackupRequest](/java/docs/reference/google-cloud-redis-cluster/latest/com.google.cloud.redis.cluster.v1.ExportBackupRequest),[Operation](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getGetBackupCollectionMethod()

```
public static MethodDescriptor<GetBackupCollectionRequest,BackupCollection> getGetBackupCollectionMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[GetBackupCollectionRequest](/java/docs/reference/google-cloud-redis-cluster/latest/com.google.cloud.redis.cluster.v1.GetBackupCollectionRequest),[BackupCollection](/java/docs/reference/google-cloud-redis-cluster/latest/com.google.cloud.redis.cluster.v1.BackupCollection)>`

### getGetBackupMethod()

```
public static MethodDescriptor<GetBackupRequest,Backup> getGetBackupMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[GetBackupRequest](/java/docs/reference/google-cloud-redis-cluster/latest/com.google.cloud.redis.cluster.v1.GetBackupRequest),[Backup](/java/docs/reference/google-cloud-redis-cluster/latest/com.google.cloud.redis.cluster.v1.Backup)>`

### getGetClusterCertificateAuthorityMethod()

```
public static MethodDescriptor<GetClusterCertificateAuthorityRequest,CertificateAuthority> getGetClusterCertificateAuthorityMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[GetClusterCertificateAuthorityRequest](/java/docs/reference/google-cloud-redis-cluster/latest/com.google.cloud.redis.cluster.v1.GetClusterCertificateAuthorityRequest),[CertificateAuthority](/java/docs/reference/google-cloud-redis-cluster/latest/com.google.cloud.redis.cluster.v1.CertificateAuthority)>`

### getGetClusterMethod()

```
public static MethodDescriptor<GetClusterRequest,Cluster> getGetClusterMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[GetClusterRequest](/java/docs/reference/google-cloud-redis-cluster/latest/com.google.cloud.redis.cluster.v1.GetClusterRequest),[Cluster](/java/docs/reference/google-cloud-redis-cluster/latest/com.google.cloud.redis.cluster.v1.Cluster)>`

### getListBackupCollectionsMethod()

```
public static MethodDescriptor<ListBackupCollectionsRequest,ListBackupCollectionsResponse> getListBackupCollectionsMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[ListBackupCollectionsRequest](/java/docs/reference/google-cloud-redis-cluster/latest/com.google.cloud.redis.cluster.v1.ListBackupCollectionsRequest),[ListBackupCollectionsResponse](/java/docs/reference/google-cloud-redis-cluster/latest/com.google.cloud.redis.cluster.v1.ListBackupCollectionsResponse)>`

### getListBackupsMethod()

```
public static MethodDescriptor<ListBackupsRequest,ListBackupsResponse> getListBackupsMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[ListBackupsRequest](/java/docs/reference/google-cloud-redis-cluster/latest/com.google.cloud.redis.cluster.v1.ListBackupsRequest),[ListBackupsResponse](/java/docs/reference/google-cloud-redis-cluster/latest/com.google.cloud.redis.cluster.v1.ListBackupsResponse)>`

### getListClustersMethod()

```
public static MethodDescriptor<ListClustersRequest,ListClustersResponse> getListClustersMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[ListClustersRequest](/java/docs/reference/google-cloud-redis-cluster/latest/com.google.cloud.redis.cluster.v1.ListClustersRequest),[ListClustersResponse](/java/docs/reference/google-cloud-redis-cluster/latest/com.google.cloud.redis.cluster.v1.ListClustersResponse)>`

### getRescheduleClusterMaintenanceMethod()

```
public static MethodDescriptor<RescheduleClusterMaintenanceRequest,Operation> getRescheduleClusterMaintenanceMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[RescheduleClusterMaintenanceRequest](/java/docs/reference/google-cloud-redis-cluster/latest/com.google.cloud.redis.cluster.v1.RescheduleClusterMaintenanceRequest),[Operation](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### getServiceDescriptor()

```
public static ServiceDescriptor getServiceDescriptor()
```

**Returns**

**Type**

**Description**

`io.grpc.ServiceDescriptor`

### getUpdateClusterMethod()

```
public static MethodDescriptor<UpdateClusterRequest,Operation> getUpdateClusterMethod()
```

**Returns**

**Type**

**Description**

`io.grpc.MethodDescriptor<[UpdateClusterRequest](/java/docs/reference/google-cloud-redis-cluster/latest/com.google.cloud.redis.cluster.v1.UpdateClusterRequest),[Operation](https://docs.cloud.google.com/java/docs/reference/gax/latest/com.google.longrunning.Operation.html)>`

### newBlockingStub(Channel channel)

```
public static CloudRedisClusterGrpc.CloudRedisClusterBlockingStub newBlockingStub(Channel channel)
```

Creates a new blocking-style stub that supports unary and streaming output calls on the service

**Parameter**

**Name**

**Description**

`channel`

`io.grpc.Channel`  

**Returns**

**Type**

**Description**

`[CloudRedisClusterGrpc.CloudRedisClusterBlockingStub](/java/docs/reference/google-cloud-redis-cluster/latest/com.google.cloud.redis.cluster.v1.CloudRedisClusterGrpc.CloudRedisClusterBlockingStub)`

### newBlockingV2Stub(Channel channel)

```
public static CloudRedisClusterGrpc.CloudRedisClusterBlockingV2Stub newBlockingV2Stub(Channel channel)
```

Creates a new blocking-style stub that supports all types of calls on the service

**Parameter**

**Name**

**Description**

`channel`

`io.grpc.Channel`  

**Returns**

**Type**

**Description**

`[CloudRedisClusterGrpc.CloudRedisClusterBlockingV2Stub](/java/docs/reference/google-cloud-redis-cluster/latest/com.google.cloud.redis.cluster.v1.CloudRedisClusterGrpc.CloudRedisClusterBlockingV2Stub)`

### newFutureStub(Channel channel)

```
public static CloudRedisClusterGrpc.CloudRedisClusterFutureStub newFutureStub(Channel channel)
```

Creates a new ListenableFuture-style stub that supports unary calls on the service

**Parameter**

**Name**

**Description**

`channel`

`io.grpc.Channel`  

**Returns**

**Type**

**Description**

`[CloudRedisClusterGrpc.CloudRedisClusterFutureStub](/java/docs/reference/google-cloud-redis-cluster/latest/com.google.cloud.redis.cluster.v1.CloudRedisClusterGrpc.CloudRedisClusterFutureStub)`

### newStub(Channel channel)

```
public static CloudRedisClusterGrpc.CloudRedisClusterStub newStub(Channel channel)
```

Creates a new async stub that supports all call types for the service

**Parameter**

**Name**

**Description**

`channel`

`io.grpc.Channel`  

**Returns**

**Type**

**Description**

`[CloudRedisClusterGrpc.CloudRedisClusterStub](/java/docs/reference/google-cloud-redis-cluster/latest/com.google.cloud.redis.cluster.v1.CloudRedisClusterGrpc.CloudRedisClusterStub)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.

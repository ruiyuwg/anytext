-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback

# Class ClusterManagerClient (2.16.0) Stay organized with collections Save and categorize content based on your preferences.

3.4.0-rc 3.3.0 (latest) 3.2.0 2.48.0-rc 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.1 2.24.0 2.23.0 2.22.1 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.1 2.14.0 2.13.0 2.12.0 2.11.0

Google Kubernetes Engine Cluster Manager v1.

###### Equality

Instances of this class created via copy-construction or copy-assignment always compare equal. Instances created with equal `std::shared_ptr<*Connection>` objects compare equal. Objects that compare equal share the same underlying resources.

###### Performance

Creating a new instance of this class is a relatively expensive operation, new objects establish new connections to the service. In contrast, copy-construction, move-construction, and the corresponding assignment operations are relatively efficient as the copies share all underlying resources.

###### Thread Safety

Concurrent access to different instances of this class, even if they compare equal, is guaranteed to work. Two or more threads operating on the same instance of this class is not guaranteed to work. Since copy-construction and move-construction is a relatively efficient operation, consider using such a copy when using this class from multiple threads.

## Constructors

### ClusterManagerClient(ClusterManagerClient const &)

Copy and move support

**Parameter**

**Name**

**Description**

`ClusterManagerClient const &`  

### ClusterManagerClient(ClusterManagerClient &&)

Copy and move support

**Parameter**

**Name**

**Description**

`ClusterManagerClient &&`  

### ClusterManagerClient(std::shared\_ptr< ClusterManagerConnection >, Options)

**Parameters**

**Name**

**Description**

`connection`

`std::shared_ptr< ClusterManagerConnection >`  

`opts`

`Options`  

## Operators

### operator=(ClusterManagerClient const &)

Copy and move support

**Parameter**

**Name**

**Description**

`ClusterManagerClient const &`  

**Returns**

**Type**

**Description**

`ClusterManagerClient &`

### operator=(ClusterManagerClient &&)

Copy and move support

**Parameter**

**Name**

**Description**

`ClusterManagerClient &&`  

**Returns**

**Type**

**Description**

`ClusterManagerClient &`

## Functions

### ListClusters(std::string const &, Options)

Lists all clusters owned by a project in either the specified zone or all zones.

**Parameters**

**Name**

**Description**

`parent`

`std::string const &`  

The parent (project and location) where the clusters will be listed. Specified in the format `projects/*/locations/*`. [Location](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Location.html) "-" matches all zones and all regions.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::container::v1::ListClustersResponse >`

the result of the RPC. The response message type ([google.container.v1.ListClustersResponse](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L3009)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### ListClusters(google::container::v1::ListClustersRequest const &, Options)

Lists all clusters owned by a project in either the specified zone or all zones.

**Parameters**

**Name**

**Description**

`request`

`google::container::v1::ListClustersRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.container.v1.ListClustersRequest](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L2990). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::container::v1::ListClustersResponse >`

the result of the RPC. The response message type ([google.container.v1.ListClustersResponse](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L3009)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### GetCluster(std::string const &, Options)

Gets the details of a specific cluster.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

The name (project, location, cluster) of the cluster to retrieve. Specified in the format `projects/*/locations/*/clusters/*`.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::container::v1::Cluster >`

the result of the RPC. The response message type ([google.container.v1.Cluster](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L1617)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### GetCluster(google::container::v1::GetClusterRequest const &, Options)

Gets the details of a specific cluster.

**Parameters**

**Name**

**Description**

`request`

`google::container::v1::GetClusterRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.container.v1.GetClusterRequest](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L2556). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::container::v1::Cluster >`

the result of the RPC. The response message type ([google.container.v1.Cluster](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L1617)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### CreateCluster(std::string const &, google::container::v1::Cluster const &, Options)

Creates a cluster, consisting of the specified number and type of Google Compute Engine instances.

By default, the cluster is created in the project's [default network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks).

One firewall is added for the cluster. After cluster creation, the Kubelet creates routes for each node to allow the containers on that node to communicate with all other instances in the cluster.

Finally, an entry is added to the project's global metadata indicating which CIDR range the cluster is using.

**Parameters**

**Name**

**Description**

`parent`

`std::string const &`  

The parent (project and location) where the cluster will be created. Specified in the format `projects/*/locations/*`.

`cluster`

`google::container::v1::Cluster const &`  

Required. A [cluster resource](https://cloud.google.com/container-engine/reference/rest/v1/projects.locations.clusters)

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::container::v1::Operation >`

the result of the RPC. The response message type ([google.container.v1.Operation](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L2280)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### CreateCluster(google::container::v1::CreateClusterRequest const &, Options)

Creates a cluster, consisting of the specified number and type of Google Compute Engine instances.

By default, the cluster is created in the project's [default network](https://cloud.google.com/compute/docs/networks-and-firewalls#networks).

One firewall is added for the cluster. After cluster creation, the Kubelet creates routes for each node to allow the containers on that node to communicate with all other instances in the cluster.

Finally, an entry is added to the project's global metadata indicating which CIDR range the cluster is using.

**Parameters**

**Name**

**Description**

`request`

`google::container::v1::CreateClusterRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.container.v1.CreateClusterRequest](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L2534). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::container::v1::Operation >`

the result of the RPC. The response message type ([google.container.v1.Operation](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L2280)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### UpdateCluster(std::string const &, google::container::v1::ClusterUpdate const &, Options)

Updates the settings of a specific cluster.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

The name (project, location, cluster) of the cluster to update. Specified in the format `projects/*/locations/*/clusters/*`.

`update`

`google::container::v1::ClusterUpdate const &`  

Required. A description of the update.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::container::v1::Operation >`

the result of the RPC. The response message type ([google.container.v1.Operation](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L2280)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### UpdateCluster(google::container::v1::UpdateClusterRequest const &, Options)

Updates the settings of a specific cluster.

**Parameters**

**Name**

**Description**

`request`

`google::container::v1::UpdateClusterRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.container.v1.UpdateClusterRequest](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L2578). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::container::v1::Operation >`

the result of the RPC. The response message type ([google.container.v1.Operation](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L2280)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### UpdateNodePool(google::container::v1::UpdateNodePoolRequest const &, Options)

Updates the version and/or image type for the specified node pool.

**Parameters**

**Name**

**Description**

`request`

`google::container::v1::UpdateNodePoolRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.container.v1.UpdateNodePoolRequest](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L2603). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::container::v1::Operation >`

the result of the RPC. The response message type ([google.container.v1.Operation](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L2280)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### SetNodePoolAutoscaling(google::container::v1::SetNodePoolAutoscalingRequest const &, Options)

Sets the autoscaling settings for the specified node pool.

**Parameters**

**Name**

**Description**

`request`

`google::container::v1::SetNodePoolAutoscalingRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.container.v1.SetNodePoolAutoscalingRequest](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L2731). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::container::v1::Operation >`

the result of the RPC. The response message type ([google.container.v1.Operation](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L2280)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### SetLoggingService(std::string const &, std::string const &, Options)

Sets the logging service for a specific cluster.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

The name (project, location, cluster) of the cluster to set logging. Specified in the format `projects/*/locations/*/clusters/*`.

`logging_service`

`std::string const &`  

Required. The logging service the cluster should use to write logs. Currently available options:  

-   `logging.googleapis.com/kubernetes` - The Cloud Logging service with a Kubernetes-native resource model
-   `logging.googleapis.com` - The legacy Cloud Logging service (no longer available as of GKE 1.15).
-   `none` - no logs will be exported from the cluster.  
    If left as an empty string,`logging.googleapis.com/kubernetes` will be used for GKE 1.14+ or `logging.googleapis.com` for earlier versions.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::container::v1::Operation >`

the result of the RPC. The response message type ([google.container.v1.Operation](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L2280)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### SetLoggingService(google::container::v1::SetLoggingServiceRequest const &, Options)

Sets the logging service for a specific cluster.

**Parameters**

**Name**

**Description**

`request`

`google::container::v1::SetLoggingServiceRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.container.v1.SetLoggingServiceRequest](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L2761). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::container::v1::Operation >`

the result of the RPC. The response message type ([google.container.v1.Operation](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L2280)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### SetMonitoringService(std::string const &, std::string const &, Options)

Sets the monitoring service for a specific cluster.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

The name (project, location, cluster) of the cluster to set monitoring. Specified in the format `projects/*/locations/*/clusters/*`.

`monitoring_service`

`std::string const &`  

Required. The monitoring service the cluster should use to write metrics. Currently available options:  

-   "monitoring.googleapis.com/kubernetes" - The Cloud Monitoring service with a Kubernetes-native resource model
-   `monitoring.googleapis.com` - The legacy Cloud Monitoring service (no longer available as of GKE 1.15).
-   `none` - No metrics will be exported from the cluster.  
    If left as an empty string,`monitoring.googleapis.com/kubernetes` will be used for GKE 1.14+ or `monitoring.googleapis.com` for earlier versions.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::container::v1::Operation >`

the result of the RPC. The response message type ([google.container.v1.Operation](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L2280)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### SetMonitoringService(google::container::v1::SetMonitoringServiceRequest const &, Options)

Sets the monitoring service for a specific cluster.

**Parameters**

**Name**

**Description**

`request`

`google::container::v1::SetMonitoringServiceRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.container.v1.SetMonitoringServiceRequest](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L2796). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::container::v1::Operation >`

the result of the RPC. The response message type ([google.container.v1.Operation](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L2280)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### SetAddonsConfig(std::string const &, google::container::v1::AddonsConfig const &, Options)

Sets the addons for a specific cluster.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

The name (project, location, cluster) of the cluster to set addons. Specified in the format `projects/*/locations/*/clusters/*`.

`addons_config`

`google::container::v1::AddonsConfig const &`  

Required. The desired configurations for the various addons available to run in the cluster.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::container::v1::Operation >`

the result of the RPC. The response message type ([google.container.v1.Operation](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L2280)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### SetAddonsConfig(google::container::v1::SetAddonsConfigRequest const &, Options)

Sets the addons for a specific cluster.

**Parameters**

**Name**

**Description**

`request`

`google::container::v1::SetAddonsConfigRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.container.v1.SetAddonsConfigRequest](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L2831). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::container::v1::Operation >`

the result of the RPC. The response message type ([google.container.v1.Operation](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L2280)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### SetLocations(std::string const &, std::vector< std::string > const &, Options)

Sets the locations for a specific cluster.

Deprecated. Use [projects.locations.clusters.update](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters/update) instead.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

The name (project, location, cluster) of the cluster to set locations. Specified in the format `projects/*/locations/*/clusters/*`.

`locations`

`std::vector< std::string > const &`  

Required. The desired list of Google Compute Engine [zones](https://cloud.google.com/compute/docs/zones#available) in which the cluster's nodes should be located. Changing the locations a cluster is in will result in nodes being either created or removed from the cluster, depending on whether locations are being added or removed.  
This list must always include the cluster's primary zone.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::container::v1::Operation >`

the result of the RPC. The response message type ([google.container.v1.Operation](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L2280)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### SetLocations(google::container::v1::SetLocationsRequest const &, Options)

Sets the locations for a specific cluster.

Deprecated. Use [projects.locations.clusters.update](https://cloud.google.com/kubernetes-engine/docs/reference/rest/v1/projects.locations.clusters/update) instead.

**Parameters**

**Name**

**Description**

`request`

`google::container::v1::SetLocationsRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.container.v1.SetLocationsRequest](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L2857). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::container::v1::Operation >`

the result of the RPC. The response message type ([google.container.v1.Operation](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L2280)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### UpdateMaster(std::string const &, std::string const &, Options)

Updates the master for a specific cluster.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

The name (project, location, cluster) of the cluster to update. Specified in the format `projects/*/locations/*/clusters/*`.

`master_version`

`std::string const &`  

Required. The Kubernetes version to change the master to.  
Users may specify either explicit versions offered by Kubernetes Engine or version aliases, which have the following behavior:  

-   "latest": picks the highest valid Kubernetes version
-   "1.X": picks the highest valid patch+gke.N patch in the 1.X version
-   "1.X.Y": picks the highest valid gke.N patch in the 1.X.Y version
-   "1.X.Y-gke.N": picks an explicit Kubernetes version
-   "-": picks the default Kubernetes version

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::container::v1::Operation >`

the result of the RPC. The response message type ([google.container.v1.Operation](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L2280)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### UpdateMaster(google::container::v1::UpdateMasterRequest const &, Options)

Updates the master for a specific cluster.

**Parameters**

**Name**

**Description**

`request`

`google::container::v1::UpdateMasterRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.container.v1.UpdateMasterRequest](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L2888). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::container::v1::Operation >`

the result of the RPC. The response message type ([google.container.v1.Operation](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L2280)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### SetMasterAuth(google::container::v1::SetMasterAuthRequest const &, Options)

Sets master auth materials.

Currently supports changing the admin password or a specific cluster, either via password generation or explicitly setting the password.

**Parameters**

**Name**

**Description**

`request`

`google::container::v1::SetMasterAuthRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.container.v1.SetMasterAuthRequest](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L2922). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::container::v1::Operation >`

the result of the RPC. The response message type ([google.container.v1.Operation](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L2280)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### DeleteCluster(std::string const &, Options)

Deletes the cluster, including the Kubernetes endpoint and all worker nodes.

Firewalls and routes that were configured during cluster creation are also deleted.

Other Google Compute Engine resources that might be in use by the cluster, such as load balancer resources, are not deleted if they weren't present when the cluster was initially created.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

The name (project, location, cluster) of the cluster to delete. Specified in the format `projects/*/locations/*/clusters/*`.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::container::v1::Operation >`

the result of the RPC. The response message type ([google.container.v1.Operation](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L2280)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### DeleteCluster(google::container::v1::DeleteClusterRequest const &, Options)

Deletes the cluster, including the Kubernetes endpoint and all worker nodes.

Firewalls and routes that were configured during cluster creation are also deleted.

Other Google Compute Engine resources that might be in use by the cluster, such as load balancer resources, are not deleted if they weren't present when the cluster was initially created.

**Parameters**

**Name**

**Description**

`request`

`google::container::v1::DeleteClusterRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.container.v1.DeleteClusterRequest](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L2968). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::container::v1::Operation >`

the result of the RPC. The response message type ([google.container.v1.Operation](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L2280)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### ListOperations(google::container::v1::ListOperationsRequest const &, Options)

Lists all operations in a project in a specific zone or all zones.

**Parameters**

**Name**

**Description**

`request`

`google::container::v1::ListOperationsRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.container.v1.ListOperationsRequest](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L3042). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::container::v1::ListOperationsResponse >`

the result of the RPC. The response message type ([google.container.v1.ListOperationsResponse](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L3083)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### GetOperation(std::string const &, Options)

Gets the specified operation.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

The name (project, location, operation id) of the operation to get. Specified in the format `projects/*/locations/*/operations/*`.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::container::v1::Operation >`

the result of the RPC. The response message type ([google.container.v1.Operation](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L2280)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### GetOperation(google::container::v1::GetOperationRequest const &, Options)

Gets the specified operation.

**Parameters**

**Name**

**Description**

`request`

`google::container::v1::GetOperationRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.container.v1.GetOperationRequest](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L3020). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::container::v1::Operation >`

the result of the RPC. The response message type ([google.container.v1.Operation](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L2280)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### CancelOperation(std::string const &, Options)

Cancels the specified operation.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

The name (project, location, operation id) of the operation to cancel. Specified in the format `projects/*/locations/*/operations/*`.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`Status`

a [`Status`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Status.html) object. If the request failed, the status contains the details of the failure.

### CancelOperation(google::container::v1::CancelOperationRequest const &, Options)

Cancels the specified operation.

**Parameters**

**Name**

**Description**

`request`

`google::container::v1::CancelOperationRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.container.v1.CancelOperationRequest](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L3061). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`Status`

a [`Status`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Status.html) object. If the request failed, the status contains the details of the failure.

### GetServerConfig(std::string const &, Options)

Returns configuration info about the Google Kubernetes Engine service.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

The name (project and location) of the server config to get, specified in the format `projects/*/locations/*`.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::container::v1::ServerConfig >`

the result of the RPC. The response message type ([google.container.v1.ServerConfig](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L3111)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### GetServerConfig(google::container::v1::GetServerConfigRequest const &, Options)

Returns configuration info about the Google Kubernetes Engine service.

**Parameters**

**Name**

**Description**

`request`

`google::container::v1::GetServerConfigRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.container.v1.GetServerConfigRequest](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L3093). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::container::v1::ServerConfig >`

the result of the RPC. The response message type ([google.container.v1.ServerConfig](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L3111)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### GetJSONWebKeys(google::container::v1::GetJSONWebKeysRequest const &, Options)

Gets the public component of the cluster signing keys in JSON Web Key format.

This API is not yet intended for general use, and is not available for all clusters.

**Parameters**

**Name**

**Description**

`request`

`google::container::v1::GetJSONWebKeysRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.container.v1.GetJSONWebKeysRequest](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L4404). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::container::v1::GetJSONWebKeysResponse >`

the result of the RPC. The response message type ([google.container.v1.GetJSONWebKeysResponse](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L4441)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### ListNodePools(std::string const &, Options)

Lists the node pools for a cluster.

**Parameters**

**Name**

**Description**

`parent`

`std::string const &`  

The parent (project, location, cluster name) where the node pools will be listed. Specified in the format `projects/*/locations/*/clusters/*`.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::container::v1::ListNodePoolsResponse >`

the result of the RPC. The response message type ([google.container.v1.ListNodePoolsResponse](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L3817)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### ListNodePools(google::container::v1::ListNodePoolsRequest const &, Options)

Lists the node pools for a cluster.

**Parameters**

**Name**

**Description**

`request`

`google::container::v1::ListNodePoolsRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.container.v1.ListNodePoolsRequest](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L3197). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::container::v1::ListNodePoolsResponse >`

the result of the RPC. The response message type ([google.container.v1.ListNodePoolsResponse](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L3817)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### GetNodePool(std::string const &, Options)

Retrieves the requested node pool.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

The name (project, location, cluster, node pool id) of the node pool to get. Specified in the format `projects/*/locations/*/clusters/*/nodePools/*`.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::container::v1::NodePool >`

the result of the RPC. The response message type ([google.container.v1.NodePool](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L3280)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### GetNodePool(google::container::v1::GetNodePoolRequest const &, Options)

Retrieves the requested node pool.

**Parameters**

**Name**

**Description**

`request`

`google::container::v1::GetNodePoolRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.container.v1.GetNodePoolRequest](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L3219). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::container::v1::NodePool >`

the result of the RPC. The response message type ([google.container.v1.NodePool](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L3280)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### CreateNodePool(std::string const &, google::container::v1::NodePool const &, Options)

Creates a node pool for a cluster.

**Parameters**

**Name**

**Description**

`parent`

`std::string const &`  

The parent (project, location, cluster name) where the node pool will be created. Specified in the format `projects/*/locations/*/clusters/*`.

`node_pool`

`google::container::v1::NodePool const &`  

Required. The node pool to create.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::container::v1::Operation >`

the result of the RPC. The response message type ([google.container.v1.Operation](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L2280)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### CreateNodePool(google::container::v1::CreateNodePoolRequest const &, Options)

Creates a node pool for a cluster.

**Parameters**

**Name**

**Description**

`request`

`google::container::v1::CreateNodePoolRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.container.v1.CreateNodePoolRequest](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L3144). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::container::v1::Operation >`

the result of the RPC. The response message type ([google.container.v1.Operation](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L2280)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### DeleteNodePool(std::string const &, Options)

Deletes a node pool from a cluster.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

The name (project, location, cluster, node pool id) of the node pool to delete. Specified in the format `projects/*/locations/*/clusters/*/nodePools/*`.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::container::v1::Operation >`

the result of the RPC. The response message type ([google.container.v1.Operation](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L2280)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### DeleteNodePool(google::container::v1::DeleteNodePoolRequest const &, Options)

Deletes a node pool from a cluster.

**Parameters**

**Name**

**Description**

`request`

`google::container::v1::DeleteNodePoolRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.container.v1.DeleteNodePoolRequest](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L3170). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::container::v1::Operation >`

the result of the RPC. The response message type ([google.container.v1.Operation](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L2280)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### CompleteNodePoolUpgrade(google::container::v1::CompleteNodePoolUpgradeRequest const &, Options)

CompleteNodePoolUpgrade will signal an on-going node pool upgrade to complete.

**Parameters**

**Name**

**Description**

`request`

`google::container::v1::CompleteNodePoolUpgradeRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.container.v1.CompleteNodePoolUpgradeRequest](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L3776). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`Status`

a [`Status`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Status.html) object. If the request failed, the status contains the details of the failure.

### RollbackNodePoolUpgrade(std::string const &, Options)

Rolls back a previously Aborted or Failed NodePool upgrade.

This makes no changes if the last upgrade successfully completed.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

The name (project, location, cluster, node pool id) of the node poll to rollback upgrade. Specified in the format `projects/*/locations/*/clusters/*/nodePools/*`.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::container::v1::Operation >`

the result of the RPC. The response message type ([google.container.v1.Operation](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L2280)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### RollbackNodePoolUpgrade(google::container::v1::RollbackNodePoolUpgradeRequest const &, Options)

Rolls back a previously Aborted or Failed NodePool upgrade.

This makes no changes if the last upgrade successfully completed.

**Parameters**

**Name**

**Description**

`request`

`google::container::v1::RollbackNodePoolUpgradeRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.container.v1.RollbackNodePoolUpgradeRequest](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L3786). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::container::v1::Operation >`

the result of the RPC. The response message type ([google.container.v1.Operation](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L2280)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### SetNodePoolManagement(google::container::v1::SetNodePoolManagementRequest const &, Options)

Sets the NodeManagement options for a node pool.

**Parameters**

**Name**

**Description**

`request`

`google::container::v1::SetNodePoolManagementRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.container.v1.SetNodePoolManagementRequest](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L3715). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::container::v1::Operation >`

the result of the RPC. The response message type ([google.container.v1.Operation](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L2280)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### SetLabels(google::container::v1::SetLabelsRequest const &, Options)

Sets labels on a cluster.

**Parameters**

**Name**

**Description**

`request`

`google::container::v1::SetLabelsRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.container.v1.SetLabelsRequest](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L3982). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::container::v1::Operation >`

the result of the RPC. The response message type ([google.container.v1.Operation](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L2280)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### SetLegacyAbac(std::string const &, bool, Options)

Enables or disables the ABAC authorization mechanism on a cluster.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

The name (project, location, cluster name) of the cluster to set legacy abac. Specified in the format `projects/*/locations/*/clusters/*`.

`enabled`

`bool`  

Required. Whether ABAC authorization will be enabled in the cluster.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::container::v1::Operation >`

the result of the RPC. The response message type ([google.container.v1.Operation](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L2280)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### SetLegacyAbac(google::container::v1::SetLegacyAbacRequest const &, Options)

Enables or disables the ABAC authorization mechanism on a cluster.

**Parameters**

**Name**

**Description**

`request`

`google::container::v1::SetLegacyAbacRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.container.v1.SetLegacyAbacRequest](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L4017). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::container::v1::Operation >`

the result of the RPC. The response message type ([google.container.v1.Operation](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L2280)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### StartIPRotation(std::string const &, Options)

Starts master IP rotation.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

The name (project, location, cluster name) of the cluster to start IP rotation. Specified in the format `projects/*/locations/*/clusters/*`.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::container::v1::Operation >`

the result of the RPC. The response message type ([google.container.v1.Operation](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L2280)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### StartIPRotation(google::container::v1::StartIPRotationRequest const &, Options)

Starts master IP rotation.

**Parameters**

**Name**

**Description**

`request`

`google::container::v1::StartIPRotationRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.container.v1.StartIPRotationRequest](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L4043). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::container::v1::Operation >`

the result of the RPC. The response message type ([google.container.v1.Operation](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L2280)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### CompleteIPRotation(std::string const &, Options)

Completes master IP rotation.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

The name (project, location, cluster name) of the cluster to complete IP rotation. Specified in the format `projects/*/locations/*/clusters/*`.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::container::v1::Operation >`

the result of the RPC. The response message type ([google.container.v1.Operation](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L2280)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### CompleteIPRotation(google::container::v1::CompleteIPRotationRequest const &, Options)

Completes master IP rotation.

**Parameters**

**Name**

**Description**

`request`

`google::container::v1::CompleteIPRotationRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.container.v1.CompleteIPRotationRequest](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L4068). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::container::v1::Operation >`

the result of the RPC. The response message type ([google.container.v1.Operation](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L2280)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### SetNodePoolSize(google::container::v1::SetNodePoolSizeRequest const &, Options)

Sets the size for a specific node pool.

The new size will be used for all replicas, including future replicas created by modifying [NodePool.locations](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L3480).

**Parameters**

**Name**

**Description**

`request`

`google::container::v1::SetNodePoolSizeRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.container.v1.SetNodePoolSizeRequest](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L3745). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::container::v1::Operation >`

the result of the RPC. The response message type ([google.container.v1.Operation](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L2280)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### SetNetworkPolicy(std::string const &, google::container::v1::NetworkPolicy const &, Options)

Enables or disables Network Policy for a cluster.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

The name (project, location, cluster name) of the cluster to set networking policy. Specified in the format `projects/*/locations/*/clusters/*`.

`network_policy`

`google::container::v1::NetworkPolicy const &`  

Required. Configuration options for the NetworkPolicy feature.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::container::v1::Operation >`

the result of the RPC. The response message type ([google.container.v1.Operation](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L2280)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### SetNetworkPolicy(google::container::v1::SetNetworkPolicyRequest const &, Options)

Enables or disables Network Policy for a cluster.

**Parameters**

**Name**

**Description**

`request`

`google::container::v1::SetNetworkPolicyRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.container.v1.SetNetworkPolicyRequest](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L4177). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::container::v1::Operation >`

the result of the RPC. The response message type ([google.container.v1.Operation](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L2280)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### SetMaintenancePolicy(std::string const &, std::string const &, std::string const &, google::container::v1::MaintenancePolicy const &, Options)

Sets the maintenance policy for a cluster.

**Parameters**

**Name**

**Description**

`project_id`

`std::string const &`  

Required. The Google Developers Console [project ID or project number](https://cloud.google.com/resource-manager/docs/creating-managing-projects).

`zone`

`std::string const &`  

Required. The name of the Google Compute Engine [zone](https://cloud.google.com/compute/docs/zones#available) in which the cluster resides.

`cluster_id`

`std::string const &`  

Required. The name of the cluster to update.

`maintenance_policy`

`google::container::v1::MaintenancePolicy const &`  

Required. The maintenance policy to be set for the cluster. An empty field clears the existing maintenance policy.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::container::v1::Operation >`

the result of the RPC. The response message type ([google.container.v1.Operation](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L2280)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### SetMaintenancePolicy(std::string const &, google::container::v1::MaintenancePolicy const &, Options)

Sets the maintenance policy for a cluster.

**Parameters**

**Name**

**Description**

`name`

`std::string const &`  

The name (project, location, cluster name) of the cluster to set maintenance policy. Specified in the format `projects/*/locations/*/clusters/*`.

`maintenance_policy`

`google::container::v1::MaintenancePolicy const &`  

Required. The maintenance policy to be set for the cluster. An empty field clears the existing maintenance policy.

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::container::v1::Operation >`

the result of the RPC. The response message type ([google.container.v1.Operation](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L2280)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### SetMaintenancePolicy(google::container::v1::SetMaintenancePolicyRequest const &, Options)

Sets the maintenance policy for a cluster.

**Parameters**

**Name**

**Description**

`request`

`google::container::v1::SetMaintenancePolicyRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.container.v1.SetMaintenancePolicyRequest](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L4202). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::container::v1::Operation >`

the result of the RPC. The response message type ([google.container.v1.Operation](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L2280)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

### ListUsableSubnetworks(google::container::v1::ListUsableSubnetworksRequest, Options)

Lists subnetworks that are usable for creating clusters in a project.

**Parameters**

**Name**

**Description**

`request`

`google::container::v1::ListUsableSubnetworksRequest`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.container.v1.ListUsableSubnetworksRequest](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L4657). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StreamRange< google::container::v1::UsableSubnetwork >`

a [StreamRange](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StreamRange.html) to iterate of the results. See the documentation of this type for details. In brief, this class has `begin()` and `end()` member functions returning a iterator class meeting the [input iterator requirements](https://en.cppreference.com/w/cpp/named_req/InputIterator). The value type for this iterator is a [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) as the iteration may fail even after some values are retrieved successfully, for example, if there is a network disconnect. An empty set of results does not indicate an error, it indicates that there are no resources meeting the request criteria. On a successful iteration the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html)`<T>` contains elements of type [google.container.v1.UsableSubnetwork](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L4730), or rather, the C++ class generated by Protobuf from that type. Please consult the Protobuf documentation for details on the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

### CheckAutopilotCompatibility(google::container::v1::CheckAutopilotCompatibilityRequest const &, Options)

Checks the cluster compatibility with Autopilot mode, and returns a list of compatibility issues.

**Parameters**

**Name**

**Description**

`request`

`google::container::v1::CheckAutopilotCompatibilityRequest const &`  

Unary RPCs, such as the one wrapped by this function, receive a single `request` proto message which includes all the inputs for the RPC. In this case, the proto message is a [google.container.v1.CheckAutopilotCompatibilityRequest](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L4449). Proto messages are converted to C++ classes by Protobuf, using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/).

`opts`

`Options`  

Optional. Override the class-level options, such as retry and backoff policies.

**Returns**

**Type**

**Description**

`StatusOr< google::container::v1::CheckAutopilotCompatibilityResponse >`

the result of the RPC. The response message type ([google.container.v1.CheckAutopilotCompatibilityResponse](https://github.com/googleapis/googleapis/blob/d482d7e5793b7444260526ca813b5d1e8b3be582/google/container/v1/cluster_service.proto#L4497)) is mapped to a C++ class using the [Protobuf mapping rules](https://protobuf.dev/reference/cpp/cpp-generated/). If the request fails, the [`StatusOr`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1StatusOr.html) contains the error details.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-13 UTC.

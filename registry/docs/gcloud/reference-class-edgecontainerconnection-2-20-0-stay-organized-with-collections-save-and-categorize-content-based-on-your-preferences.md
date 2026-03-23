-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback

# Class EdgeContainerConnection (2.20.0) Stay organized with collections Save and categorize content based on your preferences.

3.4.0-rc 3.3.0 (latest) 3.2.0 2.48.0-rc 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.1 2.24.0 2.23.0 2.22.1 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.1 2.14.0 2.13.0 2.12.0 2.11.0

The [`EdgeContainerConnection`](/cpp/docs/reference/edgecontainer/2.20.0/classgoogle_1_1cloud_1_1edgecontainer__v1_1_1EdgeContainerConnection) object for [`EdgeContainerClient`](/cpp/docs/reference/edgecontainer/2.20.0/classgoogle_1_1cloud_1_1edgecontainer__v1_1_1EdgeContainerClient).

This interface defines virtual methods for each of the user-facing overload sets in [`EdgeContainerClient`](/cpp/docs/reference/edgecontainer/2.20.0/classgoogle_1_1cloud_1_1edgecontainer__v1_1_1EdgeContainerClient). This allows users to inject custom behavior (e.g., with a Google Mock object) when writing tests that use objects of type [`EdgeContainerClient`](/cpp/docs/reference/edgecontainer/2.20.0/classgoogle_1_1cloud_1_1edgecontainer__v1_1_1EdgeContainerClient).

To create a concrete instance, see [`MakeEdgeContainerConnection()`](/cpp/docs/reference/edgecontainer/2.20.0/namespacegoogle_1_1cloud_1_1edgecontainer__v1).

For mocking, see [`edgecontainer_v1_mocks::MockEdgeContainerConnection`](/cpp/docs/reference/edgecontainer/2.20.0/classgoogle_1_1cloud_1_1edgecontainer__v1__mocks_1_1MockEdgeContainerConnection).

## Functions

### virtual options()

**Returns**

**Type**

**Description**

`Options`

### virtual ListClusters(google::cloud::edgecontainer::v1::ListClustersRequest)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::edgecontainer::v1::ListClustersRequest`  

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::edgecontainer::v1::Cluster >`

### virtual GetCluster(google::cloud::edgecontainer::v1::GetClusterRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::edgecontainer::v1::GetClusterRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::edgecontainer::v1::Cluster >`

### virtual CreateCluster(google::cloud::edgecontainer::v1::CreateClusterRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::edgecontainer::v1::CreateClusterRequest const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::edgecontainer::v1::Cluster > >`

### virtual UpdateCluster(google::cloud::edgecontainer::v1::UpdateClusterRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::edgecontainer::v1::UpdateClusterRequest const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::edgecontainer::v1::Cluster > >`

### virtual DeleteCluster(google::cloud::edgecontainer::v1::DeleteClusterRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::edgecontainer::v1::DeleteClusterRequest const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::edgecontainer::v1::OperationMetadata > >`

### virtual GenerateAccessToken(google::cloud::edgecontainer::v1::GenerateAccessTokenRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::edgecontainer::v1::GenerateAccessTokenRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::edgecontainer::v1::GenerateAccessTokenResponse >`

### virtual ListNodePools(google::cloud::edgecontainer::v1::ListNodePoolsRequest)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::edgecontainer::v1::ListNodePoolsRequest`  

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::edgecontainer::v1::NodePool >`

### virtual GetNodePool(google::cloud::edgecontainer::v1::GetNodePoolRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::edgecontainer::v1::GetNodePoolRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::edgecontainer::v1::NodePool >`

### virtual CreateNodePool(google::cloud::edgecontainer::v1::CreateNodePoolRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::edgecontainer::v1::CreateNodePoolRequest const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::edgecontainer::v1::NodePool > >`

### virtual UpdateNodePool(google::cloud::edgecontainer::v1::UpdateNodePoolRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::edgecontainer::v1::UpdateNodePoolRequest const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::edgecontainer::v1::NodePool > >`

### virtual DeleteNodePool(google::cloud::edgecontainer::v1::DeleteNodePoolRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::edgecontainer::v1::DeleteNodePoolRequest const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::edgecontainer::v1::OperationMetadata > >`

### virtual ListMachines(google::cloud::edgecontainer::v1::ListMachinesRequest)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::edgecontainer::v1::ListMachinesRequest`  

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::edgecontainer::v1::Machine >`

### virtual GetMachine(google::cloud::edgecontainer::v1::GetMachineRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::edgecontainer::v1::GetMachineRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::edgecontainer::v1::Machine >`

### virtual ListVpnConnections(google::cloud::edgecontainer::v1::ListVpnConnectionsRequest)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::edgecontainer::v1::ListVpnConnectionsRequest`  

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::edgecontainer::v1::VpnConnection >`

### virtual GetVpnConnection(google::cloud::edgecontainer::v1::GetVpnConnectionRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::edgecontainer::v1::GetVpnConnectionRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::edgecontainer::v1::VpnConnection >`

### virtual CreateVpnConnection(google::cloud::edgecontainer::v1::CreateVpnConnectionRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::edgecontainer::v1::CreateVpnConnectionRequest const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::edgecontainer::v1::VpnConnection > >`

### virtual DeleteVpnConnection(google::cloud::edgecontainer::v1::DeleteVpnConnectionRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::edgecontainer::v1::DeleteVpnConnectionRequest const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::edgecontainer::v1::OperationMetadata > >`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-13 UTC.

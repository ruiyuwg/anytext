-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback

# Class GameServerClustersServiceConnection (2.12.0) Stay organized with collections Save and categorize content based on your preferences.

Version 2.12.0keyboard\_arrow\_down

-   [2.13.0-rc (latest)](/cpp/docs/reference/gameservices/latest/classgoogle_1_1cloud_1_1gameservices__v1_1_1GameServerClustersServiceConnection)
-   [2.12.0](/cpp/docs/reference/gameservices/2.12.0/classgoogle_1_1cloud_1_1gameservices__v1_1_1GameServerClustersServiceConnection)
-   [2.11.0](/cpp/docs/reference/gameservices/2.11.0/classgoogle_1_1cloud_1_1gameservices__v1_1_1GameServerClustersServiceConnection)

The [`GameServerClustersServiceConnection`](/cpp/docs/reference/gameservices/2.12.0/classgoogle_1_1cloud_1_1gameservices__v1_1_1GameServerClustersServiceConnection) object for [`GameServerClustersServiceClient`](/cpp/docs/reference/gameservices/2.12.0/classgoogle_1_1cloud_1_1gameservices__v1_1_1GameServerClustersServiceClient).

This interface defines virtual methods for each of the user-facing overload sets in [`GameServerClustersServiceClient`](/cpp/docs/reference/gameservices/2.12.0/classgoogle_1_1cloud_1_1gameservices__v1_1_1GameServerClustersServiceClient). This allows users to inject custom behavior (e.g., with a Google Mock object) when writing tests that use objects of type [`GameServerClustersServiceClient`](/cpp/docs/reference/gameservices/2.12.0/classgoogle_1_1cloud_1_1gameservices__v1_1_1GameServerClustersServiceClient).

To create a concrete instance, see [`MakeGameServerClustersServiceConnection()`](/cpp/docs/reference/gameservices/2.12.0/namespacegoogle_1_1cloud_1_1gameservices__v1).

For mocking, see [`gameservices_v1_mocks::MockGameServerClustersServiceConnection`](/cpp/docs/reference/gameservices/2.12.0/classgoogle_1_1cloud_1_1gameservices__v1__mocks_1_1MockGameServerClustersServiceConnection).

## Functions

### virtual options()

**Returns**

**Type**

**Description**

`Options`

### virtual ListGameServerClusters(google::cloud::gaming::v1::ListGameServerClustersRequest)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::gaming::v1::ListGameServerClustersRequest`  

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::gaming::v1::GameServerCluster >`

### virtual GetGameServerCluster(google::cloud::gaming::v1::GetGameServerClusterRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::gaming::v1::GetGameServerClusterRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::gaming::v1::GameServerCluster >`

### virtual CreateGameServerCluster(google::cloud::gaming::v1::CreateGameServerClusterRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::gaming::v1::CreateGameServerClusterRequest const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::gaming::v1::GameServerCluster > >`

### virtual PreviewCreateGameServerCluster(google::cloud::gaming::v1::PreviewCreateGameServerClusterRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::gaming::v1::PreviewCreateGameServerClusterRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::gaming::v1::PreviewCreateGameServerClusterResponse >`

### virtual DeleteGameServerCluster(google::cloud::gaming::v1::DeleteGameServerClusterRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::gaming::v1::DeleteGameServerClusterRequest const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::gaming::v1::OperationMetadata > >`

### virtual PreviewDeleteGameServerCluster(google::cloud::gaming::v1::PreviewDeleteGameServerClusterRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::gaming::v1::PreviewDeleteGameServerClusterRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::gaming::v1::PreviewDeleteGameServerClusterResponse >`

### virtual UpdateGameServerCluster(google::cloud::gaming::v1::UpdateGameServerClusterRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::gaming::v1::UpdateGameServerClusterRequest const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::gaming::v1::GameServerCluster > >`

### virtual PreviewUpdateGameServerCluster(google::cloud::gaming::v1::PreviewUpdateGameServerClusterRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::gaming::v1::PreviewUpdateGameServerClusterRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::gaming::v1::PreviewUpdateGameServerClusterResponse >`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.

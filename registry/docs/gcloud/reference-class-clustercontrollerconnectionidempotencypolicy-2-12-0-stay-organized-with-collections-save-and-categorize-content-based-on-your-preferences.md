-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback

# Class ClusterControllerConnectionIdempotencyPolicy (2.12.0) Stay organized with collections Save and categorize content based on your preferences.

3.4.0-rc 3.3.0 (latest) 3.2.0 2.48.0-rc 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.1 2.24.0 2.23.0 2.22.1 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.1 2.14.0 2.13.0 2.12.0 2.11.0

## Functions

### virtual clone() const

Create a new copy of this object.

**Returns**

**Type**

**Description**

`std::unique_ptr< ClusterControllerConnectionIdempotencyPolicy >`

### virtual CreateCluster(google::cloud::dataproc::v1::CreateClusterRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::dataproc::v1::CreateClusterRequest const &`  

**Returns**

**Type**

**Description**

`google::cloud::Idempotency`

### virtual UpdateCluster(google::cloud::dataproc::v1::UpdateClusterRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::dataproc::v1::UpdateClusterRequest const &`  

**Returns**

**Type**

**Description**

`google::cloud::Idempotency`

### virtual StopCluster(google::cloud::dataproc::v1::StopClusterRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::dataproc::v1::StopClusterRequest const &`  

**Returns**

**Type**

**Description**

`google::cloud::Idempotency`

### virtual StartCluster(google::cloud::dataproc::v1::StartClusterRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::dataproc::v1::StartClusterRequest const &`  

**Returns**

**Type**

**Description**

`google::cloud::Idempotency`

### virtual DeleteCluster(google::cloud::dataproc::v1::DeleteClusterRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::dataproc::v1::DeleteClusterRequest const &`  

**Returns**

**Type**

**Description**

`google::cloud::Idempotency`

### virtual GetCluster(google::cloud::dataproc::v1::GetClusterRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::dataproc::v1::GetClusterRequest const &`  

**Returns**

**Type**

**Description**

`google::cloud::Idempotency`

### virtual ListClusters(google::cloud::dataproc::v1::ListClustersRequest)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::dataproc::v1::ListClustersRequest`  

**Returns**

**Type**

**Description**

`google::cloud::Idempotency`

### virtual DiagnoseCluster(google::cloud::dataproc::v1::DiagnoseClusterRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::dataproc::v1::DiagnoseClusterRequest const &`  

**Returns**

**Type**

**Description**

`google::cloud::Idempotency`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-13 UTC.

-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback

# Class ConnectorsConnectionIdempotencyPolicy (2.33.0) Stay organized with collections Save and categorize content based on your preferences.

3.4.0-rc 3.3.0 (latest) 3.2.0 2.48.0-rc 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.1 2.24.0 2.23.0 2.22.1 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.1 2.14.0 2.13.0 2.12.0 2.11.0

## Functions

### virtual clone() const

Create a new copy of this object.

**Returns**

**Type**

**Description**

`std::unique_ptr< ConnectorsConnectionIdempotencyPolicy >`

### virtual ListConnections(google::cloud::connectors::v1::ListConnectionsRequest)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::connectors::v1::ListConnectionsRequest`  

**Returns**

**Type**

**Description**

`google::cloud::Idempotency`

### virtual GetConnection(google::cloud::connectors::v1::GetConnectionRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::connectors::v1::GetConnectionRequest const &`  

**Returns**

**Type**

**Description**

`google::cloud::Idempotency`

### virtual CreateConnection(google::cloud::connectors::v1::CreateConnectionRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::connectors::v1::CreateConnectionRequest const &`  

**Returns**

**Type**

**Description**

`google::cloud::Idempotency`

### virtual UpdateConnection(google::cloud::connectors::v1::UpdateConnectionRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::connectors::v1::UpdateConnectionRequest const &`  

**Returns**

**Type**

**Description**

`google::cloud::Idempotency`

### virtual DeleteConnection(google::cloud::connectors::v1::DeleteConnectionRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::connectors::v1::DeleteConnectionRequest const &`  

**Returns**

**Type**

**Description**

`google::cloud::Idempotency`

### virtual ListProviders(google::cloud::connectors::v1::ListProvidersRequest)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::connectors::v1::ListProvidersRequest`  

**Returns**

**Type**

**Description**

`google::cloud::Idempotency`

### virtual GetProvider(google::cloud::connectors::v1::GetProviderRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::connectors::v1::GetProviderRequest const &`  

**Returns**

**Type**

**Description**

`google::cloud::Idempotency`

### virtual ListConnectors(google::cloud::connectors::v1::ListConnectorsRequest)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::connectors::v1::ListConnectorsRequest`  

**Returns**

**Type**

**Description**

`google::cloud::Idempotency`

### virtual GetConnector(google::cloud::connectors::v1::GetConnectorRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::connectors::v1::GetConnectorRequest const &`  

**Returns**

**Type**

**Description**

`google::cloud::Idempotency`

### virtual ListConnectorVersions(google::cloud::connectors::v1::ListConnectorVersionsRequest)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::connectors::v1::ListConnectorVersionsRequest`  

**Returns**

**Type**

**Description**

`google::cloud::Idempotency`

### virtual GetConnectorVersion(google::cloud::connectors::v1::GetConnectorVersionRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::connectors::v1::GetConnectorVersionRequest const &`  

**Returns**

**Type**

**Description**

`google::cloud::Idempotency`

### virtual GetConnectionSchemaMetadata(google::cloud::connectors::v1::GetConnectionSchemaMetadataRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::connectors::v1::GetConnectionSchemaMetadataRequest const &`  

**Returns**

**Type**

**Description**

`google::cloud::Idempotency`

### virtual RefreshConnectionSchemaMetadata(google::cloud::connectors::v1::RefreshConnectionSchemaMetadataRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::connectors::v1::RefreshConnectionSchemaMetadataRequest const &`  

**Returns**

**Type**

**Description**

`google::cloud::Idempotency`

### virtual ListRuntimeEntitySchemas(google::cloud::connectors::v1::ListRuntimeEntitySchemasRequest)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::connectors::v1::ListRuntimeEntitySchemasRequest`  

**Returns**

**Type**

**Description**

`google::cloud::Idempotency`

### virtual ListRuntimeActionSchemas(google::cloud::connectors::v1::ListRuntimeActionSchemasRequest)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::connectors::v1::ListRuntimeActionSchemasRequest`  

**Returns**

**Type**

**Description**

`google::cloud::Idempotency`

### virtual GetRuntimeConfig(google::cloud::connectors::v1::GetRuntimeConfigRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::connectors::v1::GetRuntimeConfigRequest const &`  

**Returns**

**Type**

**Description**

`google::cloud::Idempotency`

### virtual GetGlobalSettings(google::cloud::connectors::v1::GetGlobalSettingsRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::connectors::v1::GetGlobalSettingsRequest const &`  

**Returns**

**Type**

**Description**

`google::cloud::Idempotency`

### virtual ListLocations(google::cloud::location::ListLocationsRequest)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::location::ListLocationsRequest`  

**Returns**

**Type**

**Description**

`google::cloud::Idempotency`

### virtual GetLocation(google::cloud::location::GetLocationRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::location::GetLocationRequest const &`  

**Returns**

**Type**

**Description**

`google::cloud::Idempotency`

### virtual SetIamPolicy(google::iam::v1::SetIamPolicyRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::iam::v1::SetIamPolicyRequest const &`  

**Returns**

**Type**

**Description**

`google::cloud::Idempotency`

### virtual GetIamPolicy(google::iam::v1::GetIamPolicyRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::iam::v1::GetIamPolicyRequest const &`  

**Returns**

**Type**

**Description**

`google::cloud::Idempotency`

### virtual TestIamPermissions(google::iam::v1::TestIamPermissionsRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::iam::v1::TestIamPermissionsRequest const &`  

**Returns**

**Type**

**Description**

`google::cloud::Idempotency`

### virtual ListOperations(google::longrunning::ListOperationsRequest)

**Parameter**

**Name**

**Description**

`request`

`google::longrunning::ListOperationsRequest`  

**Returns**

**Type**

**Description**

`google::cloud::Idempotency`

### virtual GetOperation(google::longrunning::GetOperationRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::longrunning::GetOperationRequest const &`  

**Returns**

**Type**

**Description**

`google::cloud::Idempotency`

### virtual DeleteOperation(google::longrunning::DeleteOperationRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::longrunning::DeleteOperationRequest const &`  

**Returns**

**Type**

**Description**

`google::cloud::Idempotency`

### virtual CancelOperation(google::longrunning::CancelOperationRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::longrunning::CancelOperationRequest const &`  

**Returns**

**Type**

**Description**

`google::cloud::Idempotency`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-13 UTC.

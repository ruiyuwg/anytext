-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback

# Class MockVmMigrationConnection (2.27.0) Stay organized with collections Save and categorize content based on your preferences.

3.4.0-rc 3.3.0 (latest) 3.2.0 2.48.0-rc 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.1 2.24.0 2.23.0 2.22.1 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.1 2.14.0 2.13.0 2.12.0 2.11.0

A class to mock `VmMigrationConnection`.

Application developers may want to test their code with simulated responses, including errors, from an object of type `VmMigrationClient`. To do so, construct an object of type `VmMigrationClient` with an instance of this class. Then use the Google Test framework functions to program the behavior of this mock.

###### See Also

[This example](https://cloud.google.com/cpp/docs/reference/bigquery/2.27.0/bigquery-read-mock) for how to test your application with GoogleTest. While the example showcases types from the BigQuery library, the underlying principles apply for any pair of `*Client` and `*Connection`.

## Functions

### virtual options()

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Returns**

**Type**

**Description**

`Options`

### virtual ListSources(google::cloud::vmmigration::v1::ListSourcesRequest)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::vmmigration::v1::ListSourcesRequest`  

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::vmmigration::v1::Source >`

### virtual GetSource(google::cloud::vmmigration::v1::GetSourceRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::vmmigration::v1::GetSourceRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::vmmigration::v1::Source >`

### virtual CreateSource(google::longrunning::Operation const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`operation`

`google::longrunning::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::vmmigration::v1::Source > >`

### virtual UpdateSource(google::longrunning::Operation const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`operation`

`google::longrunning::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::vmmigration::v1::Source > >`

### virtual DeleteSource(google::longrunning::Operation const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`operation`

`google::longrunning::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::vmmigration::v1::OperationMetadata > >`

### virtual FetchInventory(google::cloud::vmmigration::v1::FetchInventoryRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::vmmigration::v1::FetchInventoryRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::vmmigration::v1::FetchInventoryResponse >`

### virtual ListUtilizationReports(google::cloud::vmmigration::v1::ListUtilizationReportsRequest)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::vmmigration::v1::ListUtilizationReportsRequest`  

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::vmmigration::v1::UtilizationReport >`

### virtual GetUtilizationReport(google::cloud::vmmigration::v1::GetUtilizationReportRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::vmmigration::v1::GetUtilizationReportRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::vmmigration::v1::UtilizationReport >`

### virtual CreateUtilizationReport(google::longrunning::Operation const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`operation`

`google::longrunning::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::vmmigration::v1::UtilizationReport > >`

### virtual DeleteUtilizationReport(google::longrunning::Operation const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`operation`

`google::longrunning::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::vmmigration::v1::OperationMetadata > >`

### virtual ListDatacenterConnectors(google::cloud::vmmigration::v1::ListDatacenterConnectorsRequest)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::vmmigration::v1::ListDatacenterConnectorsRequest`  

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::vmmigration::v1::DatacenterConnector >`

### virtual GetDatacenterConnector(google::cloud::vmmigration::v1::GetDatacenterConnectorRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::vmmigration::v1::GetDatacenterConnectorRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::vmmigration::v1::DatacenterConnector >`

### virtual CreateDatacenterConnector(google::longrunning::Operation const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`operation`

`google::longrunning::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::vmmigration::v1::DatacenterConnector > >`

### virtual DeleteDatacenterConnector(google::longrunning::Operation const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`operation`

`google::longrunning::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::vmmigration::v1::OperationMetadata > >`

### virtual UpgradeAppliance(google::longrunning::Operation const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`operation`

`google::longrunning::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::vmmigration::v1::UpgradeApplianceResponse > >`

### virtual CreateMigratingVm(google::longrunning::Operation const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`operation`

`google::longrunning::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::vmmigration::v1::MigratingVm > >`

### virtual ListMigratingVms(google::cloud::vmmigration::v1::ListMigratingVmsRequest)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::vmmigration::v1::ListMigratingVmsRequest`  

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::vmmigration::v1::MigratingVm >`

### virtual GetMigratingVm(google::cloud::vmmigration::v1::GetMigratingVmRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::vmmigration::v1::GetMigratingVmRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::vmmigration::v1::MigratingVm >`

### virtual UpdateMigratingVm(google::longrunning::Operation const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`operation`

`google::longrunning::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::vmmigration::v1::MigratingVm > >`

### virtual DeleteMigratingVm(google::longrunning::Operation const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`operation`

`google::longrunning::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::vmmigration::v1::OperationMetadata > >`

### virtual StartMigration(google::longrunning::Operation const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`operation`

`google::longrunning::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::vmmigration::v1::StartMigrationResponse > >`

### virtual ResumeMigration(google::longrunning::Operation const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`operation`

`google::longrunning::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::vmmigration::v1::ResumeMigrationResponse > >`

### virtual PauseMigration(google::longrunning::Operation const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`operation`

`google::longrunning::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::vmmigration::v1::PauseMigrationResponse > >`

### virtual FinalizeMigration(google::longrunning::Operation const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`operation`

`google::longrunning::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::vmmigration::v1::FinalizeMigrationResponse > >`

### virtual CreateCloneJob(google::longrunning::Operation const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`operation`

`google::longrunning::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::vmmigration::v1::CloneJob > >`

### virtual CancelCloneJob(google::longrunning::Operation const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`operation`

`google::longrunning::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::vmmigration::v1::CancelCloneJobResponse > >`

### virtual ListCloneJobs(google::cloud::vmmigration::v1::ListCloneJobsRequest)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::vmmigration::v1::ListCloneJobsRequest`  

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::vmmigration::v1::CloneJob >`

### virtual GetCloneJob(google::cloud::vmmigration::v1::GetCloneJobRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::vmmigration::v1::GetCloneJobRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::vmmigration::v1::CloneJob >`

### virtual CreateCutoverJob(google::longrunning::Operation const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`operation`

`google::longrunning::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::vmmigration::v1::CutoverJob > >`

### virtual CancelCutoverJob(google::longrunning::Operation const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`operation`

`google::longrunning::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::vmmigration::v1::CancelCutoverJobResponse > >`

### virtual ListCutoverJobs(google::cloud::vmmigration::v1::ListCutoverJobsRequest)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::vmmigration::v1::ListCutoverJobsRequest`  

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::vmmigration::v1::CutoverJob >`

### virtual GetCutoverJob(google::cloud::vmmigration::v1::GetCutoverJobRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::vmmigration::v1::GetCutoverJobRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::vmmigration::v1::CutoverJob >`

### virtual ListGroups(google::cloud::vmmigration::v1::ListGroupsRequest)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::vmmigration::v1::ListGroupsRequest`  

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::vmmigration::v1::Group >`

### virtual GetGroup(google::cloud::vmmigration::v1::GetGroupRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::vmmigration::v1::GetGroupRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::vmmigration::v1::Group >`

### virtual CreateGroup(google::longrunning::Operation const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`operation`

`google::longrunning::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::vmmigration::v1::Group > >`

### virtual UpdateGroup(google::longrunning::Operation const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`operation`

`google::longrunning::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::vmmigration::v1::Group > >`

### virtual DeleteGroup(google::longrunning::Operation const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`operation`

`google::longrunning::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::vmmigration::v1::OperationMetadata > >`

### virtual AddGroupMigration(google::longrunning::Operation const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`operation`

`google::longrunning::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::vmmigration::v1::AddGroupMigrationResponse > >`

### virtual RemoveGroupMigration(google::longrunning::Operation const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`operation`

`google::longrunning::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::vmmigration::v1::RemoveGroupMigrationResponse > >`

### virtual ListTargetProjects(google::cloud::vmmigration::v1::ListTargetProjectsRequest)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::vmmigration::v1::ListTargetProjectsRequest`  

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::vmmigration::v1::TargetProject >`

### virtual GetTargetProject(google::cloud::vmmigration::v1::GetTargetProjectRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::vmmigration::v1::GetTargetProjectRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::vmmigration::v1::TargetProject >`

### virtual CreateTargetProject(google::longrunning::Operation const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`operation`

`google::longrunning::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::vmmigration::v1::TargetProject > >`

### virtual UpdateTargetProject(google::longrunning::Operation const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`operation`

`google::longrunning::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::vmmigration::v1::TargetProject > >`

### virtual DeleteTargetProject(google::longrunning::Operation const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`operation`

`google::longrunning::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::vmmigration::v1::OperationMetadata > >`

### virtual ListReplicationCycles(google::cloud::vmmigration::v1::ListReplicationCyclesRequest)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::vmmigration::v1::ListReplicationCyclesRequest`  

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::vmmigration::v1::ReplicationCycle >`

### virtual GetReplicationCycle(google::cloud::vmmigration::v1::GetReplicationCycleRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::vmmigration::v1::GetReplicationCycleRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::vmmigration::v1::ReplicationCycle >`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-13 UTC.

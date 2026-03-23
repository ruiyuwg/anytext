-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback

# Class MockCloudDeployConnection (2.36.0) Stay organized with collections Save and categorize content based on your preferences.

3.4.0-rc 3.3.0 (latest) 3.2.0 2.48.0-rc 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.1 2.24.0 2.23.0 2.22.1 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.1 2.14.0 2.13.0 2.12.0 2.11.0

A class to mock `CloudDeployConnection`.

Application developers may want to test their code with simulated responses, including errors, from an object of type `CloudDeployClient`. To do so, construct an object of type `CloudDeployClient` with an instance of this class. Then use the Google Test framework functions to program the behavior of this mock.

###### See Also

[This example](https://cloud.google.com/cpp/docs/reference/bigquery/2.36.0/bigquery-read-mock) for how to test your application with GoogleTest. While the example showcases types from the BigQuery library, the underlying principles apply for any pair of `*Client` and `*Connection`.

## Functions

### virtual options()

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Returns**

**Type**

**Description**

`Options`

### virtual ListDeliveryPipelines(google::cloud::deploy::v1::ListDeliveryPipelinesRequest)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::deploy::v1::ListDeliveryPipelinesRequest`  

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::deploy::v1::DeliveryPipeline >`

### virtual GetDeliveryPipeline(google::cloud::deploy::v1::GetDeliveryPipelineRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::deploy::v1::GetDeliveryPipelineRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::deploy::v1::DeliveryPipeline >`

### virtual CreateDeliveryPipeline(google::longrunning::Operation const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`operation`

`google::longrunning::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::deploy::v1::DeliveryPipeline > >`

### virtual UpdateDeliveryPipeline(google::longrunning::Operation const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`operation`

`google::longrunning::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::deploy::v1::DeliveryPipeline > >`

### virtual DeleteDeliveryPipeline(google::longrunning::Operation const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`operation`

`google::longrunning::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::deploy::v1::OperationMetadata > >`

### virtual ListTargets(google::cloud::deploy::v1::ListTargetsRequest)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::deploy::v1::ListTargetsRequest`  

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::deploy::v1::Target >`

### virtual RollbackTarget(google::cloud::deploy::v1::RollbackTargetRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::deploy::v1::RollbackTargetRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::deploy::v1::RollbackTargetResponse >`

### virtual GetTarget(google::cloud::deploy::v1::GetTargetRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::deploy::v1::GetTargetRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::deploy::v1::Target >`

### virtual CreateTarget(google::longrunning::Operation const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`operation`

`google::longrunning::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::deploy::v1::Target > >`

### virtual UpdateTarget(google::longrunning::Operation const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`operation`

`google::longrunning::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::deploy::v1::Target > >`

### virtual DeleteTarget(google::longrunning::Operation const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`operation`

`google::longrunning::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::deploy::v1::OperationMetadata > >`

### virtual ListCustomTargetTypes(google::cloud::deploy::v1::ListCustomTargetTypesRequest)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::deploy::v1::ListCustomTargetTypesRequest`  

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::deploy::v1::CustomTargetType >`

### virtual GetCustomTargetType(google::cloud::deploy::v1::GetCustomTargetTypeRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::deploy::v1::GetCustomTargetTypeRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::deploy::v1::CustomTargetType >`

### virtual CreateCustomTargetType(google::longrunning::Operation const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`operation`

`google::longrunning::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::deploy::v1::CustomTargetType > >`

### virtual UpdateCustomTargetType(google::longrunning::Operation const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`operation`

`google::longrunning::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::deploy::v1::CustomTargetType > >`

### virtual DeleteCustomTargetType(google::longrunning::Operation const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`operation`

`google::longrunning::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::deploy::v1::OperationMetadata > >`

### virtual ListReleases(google::cloud::deploy::v1::ListReleasesRequest)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::deploy::v1::ListReleasesRequest`  

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::deploy::v1::Release >`

### virtual GetRelease(google::cloud::deploy::v1::GetReleaseRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::deploy::v1::GetReleaseRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::deploy::v1::Release >`

### virtual CreateRelease(google::longrunning::Operation const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`operation`

`google::longrunning::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::deploy::v1::Release > >`

### virtual AbandonRelease(google::cloud::deploy::v1::AbandonReleaseRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::deploy::v1::AbandonReleaseRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::deploy::v1::AbandonReleaseResponse >`

### virtual CreateDeployPolicy(google::longrunning::Operation const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`operation`

`google::longrunning::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::deploy::v1::DeployPolicy > >`

### virtual UpdateDeployPolicy(google::longrunning::Operation const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`operation`

`google::longrunning::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::deploy::v1::DeployPolicy > >`

### virtual DeleteDeployPolicy(google::longrunning::Operation const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`operation`

`google::longrunning::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::deploy::v1::OperationMetadata > >`

### virtual ListDeployPolicies(google::cloud::deploy::v1::ListDeployPoliciesRequest)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::deploy::v1::ListDeployPoliciesRequest`  

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::deploy::v1::DeployPolicy >`

### virtual GetDeployPolicy(google::cloud::deploy::v1::GetDeployPolicyRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::deploy::v1::GetDeployPolicyRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::deploy::v1::DeployPolicy >`

### virtual ApproveRollout(google::cloud::deploy::v1::ApproveRolloutRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::deploy::v1::ApproveRolloutRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::deploy::v1::ApproveRolloutResponse >`

### virtual AdvanceRollout(google::cloud::deploy::v1::AdvanceRolloutRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::deploy::v1::AdvanceRolloutRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::deploy::v1::AdvanceRolloutResponse >`

### virtual CancelRollout(google::cloud::deploy::v1::CancelRolloutRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::deploy::v1::CancelRolloutRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::deploy::v1::CancelRolloutResponse >`

### virtual ListRollouts(google::cloud::deploy::v1::ListRolloutsRequest)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::deploy::v1::ListRolloutsRequest`  

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::deploy::v1::Rollout >`

### virtual GetRollout(google::cloud::deploy::v1::GetRolloutRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::deploy::v1::GetRolloutRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::deploy::v1::Rollout >`

### virtual CreateRollout(google::longrunning::Operation const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`operation`

`google::longrunning::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::deploy::v1::Rollout > >`

### virtual IgnoreJob(google::cloud::deploy::v1::IgnoreJobRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::deploy::v1::IgnoreJobRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::deploy::v1::IgnoreJobResponse >`

### virtual RetryJob(google::cloud::deploy::v1::RetryJobRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::deploy::v1::RetryJobRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::deploy::v1::RetryJobResponse >`

### virtual ListJobRuns(google::cloud::deploy::v1::ListJobRunsRequest)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::deploy::v1::ListJobRunsRequest`  

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::deploy::v1::JobRun >`

### virtual GetJobRun(google::cloud::deploy::v1::GetJobRunRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::deploy::v1::GetJobRunRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::deploy::v1::JobRun >`

### virtual TerminateJobRun(google::cloud::deploy::v1::TerminateJobRunRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::deploy::v1::TerminateJobRunRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::deploy::v1::TerminateJobRunResponse >`

### virtual GetConfig(google::cloud::deploy::v1::GetConfigRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::deploy::v1::GetConfigRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::deploy::v1::Config >`

### virtual CreateAutomation(google::longrunning::Operation const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`operation`

`google::longrunning::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::deploy::v1::Automation > >`

### virtual UpdateAutomation(google::longrunning::Operation const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`operation`

`google::longrunning::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::deploy::v1::Automation > >`

### virtual DeleteAutomation(google::longrunning::Operation const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`operation`

`google::longrunning::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::deploy::v1::OperationMetadata > >`

### virtual GetAutomation(google::cloud::deploy::v1::GetAutomationRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::deploy::v1::GetAutomationRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::deploy::v1::Automation >`

### virtual ListAutomations(google::cloud::deploy::v1::ListAutomationsRequest)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::deploy::v1::ListAutomationsRequest`  

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::deploy::v1::Automation >`

### virtual GetAutomationRun(google::cloud::deploy::v1::GetAutomationRunRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::deploy::v1::GetAutomationRunRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::deploy::v1::AutomationRun >`

### virtual ListAutomationRuns(google::cloud::deploy::v1::ListAutomationRunsRequest)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::deploy::v1::ListAutomationRunsRequest`  

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::deploy::v1::AutomationRun >`

### virtual CancelAutomationRun(google::cloud::deploy::v1::CancelAutomationRunRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::deploy::v1::CancelAutomationRunRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::deploy::v1::CancelAutomationRunResponse >`

### virtual ListLocations(google::cloud::location::ListLocationsRequest)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::location::ListLocationsRequest`  

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::location::Location >`

### virtual GetLocation(google::cloud::location::GetLocationRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::cloud::location::GetLocationRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::location::Location >`

### virtual SetIamPolicy(google::iam::v1::SetIamPolicyRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::iam::v1::SetIamPolicyRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::iam::v1::Policy >`

### virtual GetIamPolicy(google::iam::v1::GetIamPolicyRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::iam::v1::GetIamPolicyRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::iam::v1::Policy >`

### virtual TestIamPermissions(google::iam::v1::TestIamPermissionsRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::iam::v1::TestIamPermissionsRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::iam::v1::TestIamPermissionsResponse >`

### virtual ListOperations(google::longrunning::ListOperationsRequest)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::longrunning::ListOperationsRequest`  

**Returns**

**Type**

**Description**

`StreamRange< google::longrunning::Operation >`

### virtual GetOperation(google::longrunning::GetOperationRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::longrunning::GetOperationRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::longrunning::Operation >`

### virtual DeleteOperation(google::longrunning::DeleteOperationRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::longrunning::DeleteOperationRequest const &`  

**Returns**

**Type**

**Description**

`Status`

### virtual CancelOperation(google::longrunning::CancelOperationRequest const &)

This function is implemented using [gMock](https://google.github.io/googletest)'s `MOCK_METHOD()`. Consult the gMock documentation to use this mock in your tests.

**Parameter**

**Name**

**Description**

`request`

`google::longrunning::CancelOperationRequest const &`  

**Returns**

**Type**

**Description**

`Status`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-13 UTC.

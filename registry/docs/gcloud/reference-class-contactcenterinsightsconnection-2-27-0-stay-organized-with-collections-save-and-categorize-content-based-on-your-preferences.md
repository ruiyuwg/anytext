-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback

# Class ContactCenterInsightsConnection (2.27.0) Stay organized with collections Save and categorize content based on your preferences.

3.4.0-rc 3.3.0 (latest) 3.2.0 2.48.0-rc 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.1 2.24.0 2.23.0 2.22.1 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.1 2.14.0 2.13.0 2.12.0 2.11.0

The [`ContactCenterInsightsConnection`](/cpp/docs/reference/contactcenterinsights/2.27.0/classgoogle_1_1cloud_1_1contactcenterinsights__v1_1_1ContactCenterInsightsConnection) object for [`ContactCenterInsightsClient`](/cpp/docs/reference/contactcenterinsights/2.27.0/classgoogle_1_1cloud_1_1contactcenterinsights__v1_1_1ContactCenterInsightsClient).

This interface defines virtual methods for each of the user-facing overload sets in [`ContactCenterInsightsClient`](/cpp/docs/reference/contactcenterinsights/2.27.0/classgoogle_1_1cloud_1_1contactcenterinsights__v1_1_1ContactCenterInsightsClient). This allows users to inject custom behavior (e.g., with a Google Mock object) when writing tests that use objects of type [`ContactCenterInsightsClient`](/cpp/docs/reference/contactcenterinsights/2.27.0/classgoogle_1_1cloud_1_1contactcenterinsights__v1_1_1ContactCenterInsightsClient).

To create a concrete instance, see [`MakeContactCenterInsightsConnection()`](/cpp/docs/reference/contactcenterinsights/2.27.0/namespacegoogle_1_1cloud_1_1contactcenterinsights__v1).

For mocking, see [`contactcenterinsights_v1_mocks::MockContactCenterInsightsConnection`](/cpp/docs/reference/contactcenterinsights/2.27.0/classgoogle_1_1cloud_1_1contactcenterinsights__v1__mocks_1_1MockContactCenterInsightsConnection).

## Functions

### virtual options()

**Returns**

**Type**

**Description**

`Options`

### virtual CreateConversation(google::cloud::contactcenterinsights::v1::CreateConversationRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::contactcenterinsights::v1::CreateConversationRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::contactcenterinsights::v1::Conversation >`

### virtual UploadConversation(google::cloud::contactcenterinsights::v1::UploadConversationRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::contactcenterinsights::v1::UploadConversationRequest const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::contactcenterinsights::v1::Conversation > >`

### virtual UploadConversation(NoAwaitTag, google::cloud::contactcenterinsights::v1::UploadConversationRequest const &)

**Parameters**

**Name**

**Description**

`NoAwaitTag`  

`request`

`google::cloud::contactcenterinsights::v1::UploadConversationRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::longrunning::Operation >`

### virtual UploadConversation(google::longrunning::Operation const &)

**Parameter**

**Name**

**Description**

`operation`

`google::longrunning::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::contactcenterinsights::v1::Conversation > >`

### virtual UpdateConversation(google::cloud::contactcenterinsights::v1::UpdateConversationRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::contactcenterinsights::v1::UpdateConversationRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::contactcenterinsights::v1::Conversation >`

### virtual GetConversation(google::cloud::contactcenterinsights::v1::GetConversationRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::contactcenterinsights::v1::GetConversationRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::contactcenterinsights::v1::Conversation >`

### virtual ListConversations(google::cloud::contactcenterinsights::v1::ListConversationsRequest)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::contactcenterinsights::v1::ListConversationsRequest`  

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::contactcenterinsights::v1::Conversation >`

### virtual DeleteConversation(google::cloud::contactcenterinsights::v1::DeleteConversationRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::contactcenterinsights::v1::DeleteConversationRequest const &`  

**Returns**

**Type**

**Description**

`Status`

### virtual CreateAnalysis(google::cloud::contactcenterinsights::v1::CreateAnalysisRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::contactcenterinsights::v1::CreateAnalysisRequest const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::contactcenterinsights::v1::Analysis > >`

### virtual CreateAnalysis(NoAwaitTag, google::cloud::contactcenterinsights::v1::CreateAnalysisRequest const &)

**Parameters**

**Name**

**Description**

`NoAwaitTag`  

`request`

`google::cloud::contactcenterinsights::v1::CreateAnalysisRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::longrunning::Operation >`

### virtual CreateAnalysis(google::longrunning::Operation const &)

**Parameter**

**Name**

**Description**

`operation`

`google::longrunning::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::contactcenterinsights::v1::Analysis > >`

### virtual GetAnalysis(google::cloud::contactcenterinsights::v1::GetAnalysisRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::contactcenterinsights::v1::GetAnalysisRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::contactcenterinsights::v1::Analysis >`

### virtual ListAnalyses(google::cloud::contactcenterinsights::v1::ListAnalysesRequest)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::contactcenterinsights::v1::ListAnalysesRequest`  

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::contactcenterinsights::v1::Analysis >`

### virtual DeleteAnalysis(google::cloud::contactcenterinsights::v1::DeleteAnalysisRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::contactcenterinsights::v1::DeleteAnalysisRequest const &`  

**Returns**

**Type**

**Description**

`Status`

### virtual BulkAnalyzeConversations(google::cloud::contactcenterinsights::v1::BulkAnalyzeConversationsRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::contactcenterinsights::v1::BulkAnalyzeConversationsRequest const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::contactcenterinsights::v1::BulkAnalyzeConversationsResponse > >`

### virtual BulkAnalyzeConversations(NoAwaitTag, google::cloud::contactcenterinsights::v1::BulkAnalyzeConversationsRequest const &)

**Parameters**

**Name**

**Description**

`NoAwaitTag`  

`request`

`google::cloud::contactcenterinsights::v1::BulkAnalyzeConversationsRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::longrunning::Operation >`

### virtual BulkAnalyzeConversations(google::longrunning::Operation const &)

**Parameter**

**Name**

**Description**

`operation`

`google::longrunning::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::contactcenterinsights::v1::BulkAnalyzeConversationsResponse > >`

### virtual BulkDeleteConversations(google::cloud::contactcenterinsights::v1::BulkDeleteConversationsRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::contactcenterinsights::v1::BulkDeleteConversationsRequest const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::contactcenterinsights::v1::BulkDeleteConversationsResponse > >`

### virtual BulkDeleteConversations(NoAwaitTag, google::cloud::contactcenterinsights::v1::BulkDeleteConversationsRequest const &)

**Parameters**

**Name**

**Description**

`NoAwaitTag`  

`request`

`google::cloud::contactcenterinsights::v1::BulkDeleteConversationsRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::longrunning::Operation >`

### virtual BulkDeleteConversations(google::longrunning::Operation const &)

**Parameter**

**Name**

**Description**

`operation`

`google::longrunning::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::contactcenterinsights::v1::BulkDeleteConversationsResponse > >`

### virtual IngestConversations(google::cloud::contactcenterinsights::v1::IngestConversationsRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::contactcenterinsights::v1::IngestConversationsRequest const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::contactcenterinsights::v1::IngestConversationsResponse > >`

### virtual IngestConversations(NoAwaitTag, google::cloud::contactcenterinsights::v1::IngestConversationsRequest const &)

**Parameters**

**Name**

**Description**

`NoAwaitTag`  

`request`

`google::cloud::contactcenterinsights::v1::IngestConversationsRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::longrunning::Operation >`

### virtual IngestConversations(google::longrunning::Operation const &)

**Parameter**

**Name**

**Description**

`operation`

`google::longrunning::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::contactcenterinsights::v1::IngestConversationsResponse > >`

### virtual ExportInsightsData(google::cloud::contactcenterinsights::v1::ExportInsightsDataRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::contactcenterinsights::v1::ExportInsightsDataRequest const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::contactcenterinsights::v1::ExportInsightsDataResponse > >`

### virtual ExportInsightsData(NoAwaitTag, google::cloud::contactcenterinsights::v1::ExportInsightsDataRequest const &)

**Parameters**

**Name**

**Description**

`NoAwaitTag`  

`request`

`google::cloud::contactcenterinsights::v1::ExportInsightsDataRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::longrunning::Operation >`

### virtual ExportInsightsData(google::longrunning::Operation const &)

**Parameter**

**Name**

**Description**

`operation`

`google::longrunning::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::contactcenterinsights::v1::ExportInsightsDataResponse > >`

### virtual CreateIssueModel(google::cloud::contactcenterinsights::v1::CreateIssueModelRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::contactcenterinsights::v1::CreateIssueModelRequest const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::contactcenterinsights::v1::IssueModel > >`

### virtual CreateIssueModel(NoAwaitTag, google::cloud::contactcenterinsights::v1::CreateIssueModelRequest const &)

**Parameters**

**Name**

**Description**

`NoAwaitTag`  

`request`

`google::cloud::contactcenterinsights::v1::CreateIssueModelRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::longrunning::Operation >`

### virtual CreateIssueModel(google::longrunning::Operation const &)

**Parameter**

**Name**

**Description**

`operation`

`google::longrunning::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::contactcenterinsights::v1::IssueModel > >`

### virtual UpdateIssueModel(google::cloud::contactcenterinsights::v1::UpdateIssueModelRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::contactcenterinsights::v1::UpdateIssueModelRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::contactcenterinsights::v1::IssueModel >`

### virtual GetIssueModel(google::cloud::contactcenterinsights::v1::GetIssueModelRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::contactcenterinsights::v1::GetIssueModelRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::contactcenterinsights::v1::IssueModel >`

### virtual ListIssueModels(google::cloud::contactcenterinsights::v1::ListIssueModelsRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::contactcenterinsights::v1::ListIssueModelsRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::contactcenterinsights::v1::ListIssueModelsResponse >`

### virtual DeleteIssueModel(google::cloud::contactcenterinsights::v1::DeleteIssueModelRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::contactcenterinsights::v1::DeleteIssueModelRequest const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::contactcenterinsights::v1::DeleteIssueModelMetadata > >`

### virtual DeleteIssueModel(NoAwaitTag, google::cloud::contactcenterinsights::v1::DeleteIssueModelRequest const &)

**Parameters**

**Name**

**Description**

`NoAwaitTag`  

`request`

`google::cloud::contactcenterinsights::v1::DeleteIssueModelRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::longrunning::Operation >`

### virtual DeleteIssueModel(google::longrunning::Operation const &)

**Parameter**

**Name**

**Description**

`operation`

`google::longrunning::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::contactcenterinsights::v1::DeleteIssueModelMetadata > >`

### virtual DeployIssueModel(google::cloud::contactcenterinsights::v1::DeployIssueModelRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::contactcenterinsights::v1::DeployIssueModelRequest const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::contactcenterinsights::v1::DeployIssueModelResponse > >`

### virtual DeployIssueModel(NoAwaitTag, google::cloud::contactcenterinsights::v1::DeployIssueModelRequest const &)

**Parameters**

**Name**

**Description**

`NoAwaitTag`  

`request`

`google::cloud::contactcenterinsights::v1::DeployIssueModelRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::longrunning::Operation >`

### virtual DeployIssueModel(google::longrunning::Operation const &)

**Parameter**

**Name**

**Description**

`operation`

`google::longrunning::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::contactcenterinsights::v1::DeployIssueModelResponse > >`

### virtual UndeployIssueModel(google::cloud::contactcenterinsights::v1::UndeployIssueModelRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::contactcenterinsights::v1::UndeployIssueModelRequest const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::contactcenterinsights::v1::UndeployIssueModelResponse > >`

### virtual UndeployIssueModel(NoAwaitTag, google::cloud::contactcenterinsights::v1::UndeployIssueModelRequest const &)

**Parameters**

**Name**

**Description**

`NoAwaitTag`  

`request`

`google::cloud::contactcenterinsights::v1::UndeployIssueModelRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::longrunning::Operation >`

### virtual UndeployIssueModel(google::longrunning::Operation const &)

**Parameter**

**Name**

**Description**

`operation`

`google::longrunning::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::contactcenterinsights::v1::UndeployIssueModelResponse > >`

### virtual GetIssue(google::cloud::contactcenterinsights::v1::GetIssueRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::contactcenterinsights::v1::GetIssueRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::contactcenterinsights::v1::Issue >`

### virtual ListIssues(google::cloud::contactcenterinsights::v1::ListIssuesRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::contactcenterinsights::v1::ListIssuesRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::contactcenterinsights::v1::ListIssuesResponse >`

### virtual UpdateIssue(google::cloud::contactcenterinsights::v1::UpdateIssueRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::contactcenterinsights::v1::UpdateIssueRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::contactcenterinsights::v1::Issue >`

### virtual DeleteIssue(google::cloud::contactcenterinsights::v1::DeleteIssueRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::contactcenterinsights::v1::DeleteIssueRequest const &`  

**Returns**

**Type**

**Description**

`Status`

### virtual CalculateIssueModelStats(google::cloud::contactcenterinsights::v1::CalculateIssueModelStatsRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::contactcenterinsights::v1::CalculateIssueModelStatsRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::contactcenterinsights::v1::CalculateIssueModelStatsResponse >`

### virtual CreatePhraseMatcher(google::cloud::contactcenterinsights::v1::CreatePhraseMatcherRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::contactcenterinsights::v1::CreatePhraseMatcherRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::contactcenterinsights::v1::PhraseMatcher >`

### virtual GetPhraseMatcher(google::cloud::contactcenterinsights::v1::GetPhraseMatcherRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::contactcenterinsights::v1::GetPhraseMatcherRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::contactcenterinsights::v1::PhraseMatcher >`

### virtual ListPhraseMatchers(google::cloud::contactcenterinsights::v1::ListPhraseMatchersRequest)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::contactcenterinsights::v1::ListPhraseMatchersRequest`  

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::contactcenterinsights::v1::PhraseMatcher >`

### virtual DeletePhraseMatcher(google::cloud::contactcenterinsights::v1::DeletePhraseMatcherRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::contactcenterinsights::v1::DeletePhraseMatcherRequest const &`  

**Returns**

**Type**

**Description**

`Status`

### virtual UpdatePhraseMatcher(google::cloud::contactcenterinsights::v1::UpdatePhraseMatcherRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::contactcenterinsights::v1::UpdatePhraseMatcherRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::contactcenterinsights::v1::PhraseMatcher >`

### virtual CalculateStats(google::cloud::contactcenterinsights::v1::CalculateStatsRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::contactcenterinsights::v1::CalculateStatsRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::contactcenterinsights::v1::CalculateStatsResponse >`

### virtual GetSettings(google::cloud::contactcenterinsights::v1::GetSettingsRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::contactcenterinsights::v1::GetSettingsRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::contactcenterinsights::v1::Settings >`

### virtual UpdateSettings(google::cloud::contactcenterinsights::v1::UpdateSettingsRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::contactcenterinsights::v1::UpdateSettingsRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::contactcenterinsights::v1::Settings >`

### virtual CreateView(google::cloud::contactcenterinsights::v1::CreateViewRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::contactcenterinsights::v1::CreateViewRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::contactcenterinsights::v1::View >`

### virtual GetView(google::cloud::contactcenterinsights::v1::GetViewRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::contactcenterinsights::v1::GetViewRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::contactcenterinsights::v1::View >`

### virtual ListViews(google::cloud::contactcenterinsights::v1::ListViewsRequest)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::contactcenterinsights::v1::ListViewsRequest`  

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::contactcenterinsights::v1::View >`

### virtual UpdateView(google::cloud::contactcenterinsights::v1::UpdateViewRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::contactcenterinsights::v1::UpdateViewRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::contactcenterinsights::v1::View >`

### virtual DeleteView(google::cloud::contactcenterinsights::v1::DeleteViewRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::contactcenterinsights::v1::DeleteViewRequest const &`  

**Returns**

**Type**

**Description**

`Status`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-13 UTC.

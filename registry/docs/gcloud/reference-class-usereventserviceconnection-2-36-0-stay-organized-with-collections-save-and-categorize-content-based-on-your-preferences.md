-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback

# Class UserEventServiceConnection (2.36.0) Stay organized with collections Save and categorize content based on your preferences.

3.4.0-rc 3.3.0 (latest) 3.2.0 2.48.0-rc 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.1 2.24.0 2.23.0 2.22.1 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.1

The [`UserEventServiceConnection`](/cpp/docs/reference/discoveryengine/2.36.0/classgoogle_1_1cloud_1_1discoveryengine__v1_1_1UserEventServiceConnection) object for [`UserEventServiceClient`](/cpp/docs/reference/discoveryengine/2.36.0/classgoogle_1_1cloud_1_1discoveryengine__v1_1_1UserEventServiceClient).

This interface defines virtual methods for each of the user-facing overload sets in [`UserEventServiceClient`](/cpp/docs/reference/discoveryengine/2.36.0/classgoogle_1_1cloud_1_1discoveryengine__v1_1_1UserEventServiceClient). This allows users to inject custom behavior (e.g., with a Google Mock object) when writing tests that use objects of type [`UserEventServiceClient`](/cpp/docs/reference/discoveryengine/2.36.0/classgoogle_1_1cloud_1_1discoveryengine__v1_1_1UserEventServiceClient).

To create a concrete instance, see [`MakeUserEventServiceConnection()`](/cpp/docs/reference/discoveryengine/2.36.0/namespacegoogle_1_1cloud_1_1discoveryengine__v1).

For mocking, see [`discoveryengine_v1_mocks::MockUserEventServiceConnection`](/cpp/docs/reference/discoveryengine/2.36.0/classgoogle_1_1cloud_1_1discoveryengine__v1__mocks_1_1MockUserEventServiceConnection).

## Functions

### virtual options()

**Returns**

**Type**

**Description**

`Options`

### virtual WriteUserEvent(google::cloud::discoveryengine::v1::WriteUserEventRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::discoveryengine::v1::WriteUserEventRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::discoveryengine::v1::UserEvent >`

### virtual CollectUserEvent(google::cloud::discoveryengine::v1::CollectUserEventRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::discoveryengine::v1::CollectUserEventRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::api::HttpBody >`

### virtual PurgeUserEvents(google::cloud::discoveryengine::v1::PurgeUserEventsRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::discoveryengine::v1::PurgeUserEventsRequest const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::discoveryengine::v1::PurgeUserEventsResponse > >`

### virtual PurgeUserEvents(NoAwaitTag, google::cloud::discoveryengine::v1::PurgeUserEventsRequest const &)

**Parameters**

**Name**

**Description**

`NoAwaitTag`  

`request`

`google::cloud::discoveryengine::v1::PurgeUserEventsRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::longrunning::Operation >`

### virtual PurgeUserEvents(google::longrunning::Operation const &)

**Parameter**

**Name**

**Description**

`operation`

`google::longrunning::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::discoveryengine::v1::PurgeUserEventsResponse > >`

### virtual ImportUserEvents(google::cloud::discoveryengine::v1::ImportUserEventsRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::discoveryengine::v1::ImportUserEventsRequest const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::discoveryengine::v1::ImportUserEventsResponse > >`

### virtual ImportUserEvents(NoAwaitTag, google::cloud::discoveryengine::v1::ImportUserEventsRequest const &)

**Parameters**

**Name**

**Description**

`NoAwaitTag`  

`request`

`google::cloud::discoveryengine::v1::ImportUserEventsRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::longrunning::Operation >`

### virtual ImportUserEvents(google::longrunning::Operation const &)

**Parameter**

**Name**

**Description**

`operation`

`google::longrunning::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::discoveryengine::v1::ImportUserEventsResponse > >`

### virtual ListOperations(google::longrunning::ListOperationsRequest)

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

**Parameter**

**Name**

**Description**

`request`

`google::longrunning::GetOperationRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::longrunning::Operation >`

### virtual CancelOperation(google::longrunning::CancelOperationRequest const &)

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

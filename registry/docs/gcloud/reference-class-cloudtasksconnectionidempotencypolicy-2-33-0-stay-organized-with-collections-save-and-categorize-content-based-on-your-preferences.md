-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback

# Class CloudTasksConnectionIdempotencyPolicy (2.33.0) Stay organized with collections Save and categorize content based on your preferences.

3.4.0-rc 3.3.0 (latest) 3.2.0 2.48.0-rc 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.1 2.24.0 2.23.0 2.22.1 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.1 2.14.0 2.13.0 2.12.0 2.11.0

## Functions

### virtual clone() const

Create a new copy of this object.

**Returns**

**Type**

**Description**

`std::unique_ptr< CloudTasksConnectionIdempotencyPolicy >`

### virtual ListQueues(google::cloud::tasks::v2::ListQueuesRequest)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::tasks::v2::ListQueuesRequest`  

**Returns**

**Type**

**Description**

`google::cloud::Idempotency`

### virtual GetQueue(google::cloud::tasks::v2::GetQueueRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::tasks::v2::GetQueueRequest const &`  

**Returns**

**Type**

**Description**

`google::cloud::Idempotency`

### virtual CreateQueue(google::cloud::tasks::v2::CreateQueueRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::tasks::v2::CreateQueueRequest const &`  

**Returns**

**Type**

**Description**

`google::cloud::Idempotency`

### virtual UpdateQueue(google::cloud::tasks::v2::UpdateQueueRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::tasks::v2::UpdateQueueRequest const &`  

**Returns**

**Type**

**Description**

`google::cloud::Idempotency`

### virtual DeleteQueue(google::cloud::tasks::v2::DeleteQueueRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::tasks::v2::DeleteQueueRequest const &`  

**Returns**

**Type**

**Description**

`google::cloud::Idempotency`

### virtual PurgeQueue(google::cloud::tasks::v2::PurgeQueueRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::tasks::v2::PurgeQueueRequest const &`  

**Returns**

**Type**

**Description**

`google::cloud::Idempotency`

### virtual PauseQueue(google::cloud::tasks::v2::PauseQueueRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::tasks::v2::PauseQueueRequest const &`  

**Returns**

**Type**

**Description**

`google::cloud::Idempotency`

### virtual ResumeQueue(google::cloud::tasks::v2::ResumeQueueRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::tasks::v2::ResumeQueueRequest const &`  

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

### virtual ListTasks(google::cloud::tasks::v2::ListTasksRequest)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::tasks::v2::ListTasksRequest`  

**Returns**

**Type**

**Description**

`google::cloud::Idempotency`

### virtual GetTask(google::cloud::tasks::v2::GetTaskRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::tasks::v2::GetTaskRequest const &`  

**Returns**

**Type**

**Description**

`google::cloud::Idempotency`

### virtual CreateTask(google::cloud::tasks::v2::CreateTaskRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::tasks::v2::CreateTaskRequest const &`  

**Returns**

**Type**

**Description**

`google::cloud::Idempotency`

### virtual DeleteTask(google::cloud::tasks::v2::DeleteTaskRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::tasks::v2::DeleteTaskRequest const &`  

**Returns**

**Type**

**Description**

`google::cloud::Idempotency`

### virtual RunTask(google::cloud::tasks::v2::RunTaskRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::tasks::v2::RunTaskRequest const &`  

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

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-13 UTC.

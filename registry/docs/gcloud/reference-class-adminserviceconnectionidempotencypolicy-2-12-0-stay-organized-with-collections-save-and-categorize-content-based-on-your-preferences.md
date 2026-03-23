-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback

# Class AdminServiceConnectionIdempotencyPolicy (2.12.0) Stay organized with collections Save and categorize content based on your preferences.

3.4.0-rc 3.3.0 (latest) 3.2.0 2.48.0-rc 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.1 2.24.0 2.23.0 2.22.1 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.1 2.14.0 2.13.0 2.12.0 2.11.0

## Functions

### virtual clone() const

Create a new copy of this object.

**Returns**

**Type**

**Description**

`std::unique_ptr< AdminServiceConnectionIdempotencyPolicy >`

### virtual CreateTopic(google::cloud::pubsublite::v1::CreateTopicRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::pubsublite::v1::CreateTopicRequest const &`  

**Returns**

**Type**

**Description**

`google::cloud::Idempotency`

### virtual GetTopic(google::cloud::pubsublite::v1::GetTopicRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::pubsublite::v1::GetTopicRequest const &`  

**Returns**

**Type**

**Description**

`google::cloud::Idempotency`

### virtual GetTopicPartitions(google::cloud::pubsublite::v1::GetTopicPartitionsRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::pubsublite::v1::GetTopicPartitionsRequest const &`  

**Returns**

**Type**

**Description**

`google::cloud::Idempotency`

### virtual ListTopics(google::cloud::pubsublite::v1::ListTopicsRequest)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::pubsublite::v1::ListTopicsRequest`  

**Returns**

**Type**

**Description**

`google::cloud::Idempotency`

### virtual UpdateTopic(google::cloud::pubsublite::v1::UpdateTopicRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::pubsublite::v1::UpdateTopicRequest const &`  

**Returns**

**Type**

**Description**

`google::cloud::Idempotency`

### virtual DeleteTopic(google::cloud::pubsublite::v1::DeleteTopicRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::pubsublite::v1::DeleteTopicRequest const &`  

**Returns**

**Type**

**Description**

`google::cloud::Idempotency`

### virtual ListTopicSubscriptions(google::cloud::pubsublite::v1::ListTopicSubscriptionsRequest)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::pubsublite::v1::ListTopicSubscriptionsRequest`  

**Returns**

**Type**

**Description**

`google::cloud::Idempotency`

### virtual CreateSubscription(google::cloud::pubsublite::v1::CreateSubscriptionRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::pubsublite::v1::CreateSubscriptionRequest const &`  

**Returns**

**Type**

**Description**

`google::cloud::Idempotency`

### virtual GetSubscription(google::cloud::pubsublite::v1::GetSubscriptionRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::pubsublite::v1::GetSubscriptionRequest const &`  

**Returns**

**Type**

**Description**

`google::cloud::Idempotency`

### virtual ListSubscriptions(google::cloud::pubsublite::v1::ListSubscriptionsRequest)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::pubsublite::v1::ListSubscriptionsRequest`  

**Returns**

**Type**

**Description**

`google::cloud::Idempotency`

### virtual UpdateSubscription(google::cloud::pubsublite::v1::UpdateSubscriptionRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::pubsublite::v1::UpdateSubscriptionRequest const &`  

**Returns**

**Type**

**Description**

`google::cloud::Idempotency`

### virtual DeleteSubscription(google::cloud::pubsublite::v1::DeleteSubscriptionRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::pubsublite::v1::DeleteSubscriptionRequest const &`  

**Returns**

**Type**

**Description**

`google::cloud::Idempotency`

### virtual SeekSubscription(google::cloud::pubsublite::v1::SeekSubscriptionRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::pubsublite::v1::SeekSubscriptionRequest const &`  

**Returns**

**Type**

**Description**

`google::cloud::Idempotency`

### virtual CreateReservation(google::cloud::pubsublite::v1::CreateReservationRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::pubsublite::v1::CreateReservationRequest const &`  

**Returns**

**Type**

**Description**

`google::cloud::Idempotency`

### virtual GetReservation(google::cloud::pubsublite::v1::GetReservationRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::pubsublite::v1::GetReservationRequest const &`  

**Returns**

**Type**

**Description**

`google::cloud::Idempotency`

### virtual ListReservations(google::cloud::pubsublite::v1::ListReservationsRequest)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::pubsublite::v1::ListReservationsRequest`  

**Returns**

**Type**

**Description**

`google::cloud::Idempotency`

### virtual UpdateReservation(google::cloud::pubsublite::v1::UpdateReservationRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::pubsublite::v1::UpdateReservationRequest const &`  

**Returns**

**Type**

**Description**

`google::cloud::Idempotency`

### virtual DeleteReservation(google::cloud::pubsublite::v1::DeleteReservationRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::pubsublite::v1::DeleteReservationRequest const &`  

**Returns**

**Type**

**Description**

`google::cloud::Idempotency`

### virtual ListReservationTopics(google::cloud::pubsublite::v1::ListReservationTopicsRequest)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::pubsublite::v1::ListReservationTopicsRequest`  

**Returns**

**Type**

**Description**

`google::cloud::Idempotency`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-13 UTC.

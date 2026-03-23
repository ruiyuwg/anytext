-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback

# Class SubscriptionAdminConnection (2.35.0) Stay organized with collections Save and categorize content based on your preferences.

3.4.0-rc 3.3.0 (latest) 3.2.0 2.48.0-rc 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.1 2.24.0 2.23.0 2.22.1 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.1 2.14.0 2.13.0 2.12.0 2.11.0

A connection to Cloud Pub/Sub for subscription-related administrative operations.

**Deprecated:** Please use [`google::cloud::pubsub_admin::SubscriptionAdminClient`](/cpp/docs/reference/pubsub/2.35.0/classgoogle_1_1cloud_1_1pubsub__admin_1_1SubscriptionAdminClient) and [`google::cloud::pubsub_admin::SubscriptionAdminClient`](/cpp/docs/reference/pubsub/2.35.0/classgoogle_1_1cloud_1_1pubsub__admin_1_1SubscriptionAdminClient) instead.

This interface defines pure-virtual functions for each of the user-facing overload sets in [`SubscriptionAdminClient`](/cpp/docs/reference/pubsub/2.35.0/classgoogle_1_1cloud_1_1pubsub_1_1SubscriptionAdminClient). That is, all of [`SubscriptionAdminClient`](/cpp/docs/reference/pubsub/2.35.0/classgoogle_1_1cloud_1_1pubsub_1_1SubscriptionAdminClient) overloads will forward to the one pure-virtual function declared in this interface. This allows users to inject custom behavior (e.g., with a Google Mock object) in a [`SubscriptionAdminClient`](/cpp/docs/reference/pubsub/2.35.0/classgoogle_1_1cloud_1_1pubsub_1_1SubscriptionAdminClient) object for use in their own tests.

To create a concrete instance that connects you to the real Cloud Pub/Sub service, see [`MakeSubscriptionAdminConnection()`](/cpp/docs/reference/pubsub/2.35.0/namespacegoogle_1_1cloud_1_1pubsub).

###### The \*Params nested classes

Applications may define classes derived from [`SubscriptionAdminConnection`](/cpp/docs/reference/pubsub/2.35.0/classgoogle_1_1cloud_1_1pubsub_1_1SubscriptionAdminConnection), for example, because they want to mock the class. To avoid breaking all such derived classes when we change the number or type of the arguments to the member functions we define lightweight structures to pass the arguments.

## Functions

### virtual CreateSubscription(CreateSubscriptionParams)

Defines the interface for [`SubscriptionAdminClient::CreateSubscription()`](/cpp/docs/reference/pubsub/2.35.0/classgoogle_1_1cloud_1_1pubsub_1_1SubscriptionAdminClient#classgoogle_1_1cloud_1_1pubsub_1_1SubscriptionAdminClient_1a5de41b90ad90e9284d16f67d591026ce)

**Parameter**

**Name**

**Description**

`CreateSubscriptionParams`  

**Returns**

**Type**

**Description**

`StatusOr< google::pubsub::v1::Subscription >`

### virtual GetSubscription(GetSubscriptionParams)

Defines the interface for [`SubscriptionAdminClient::GetSubscription()`](/cpp/docs/reference/pubsub/2.35.0/classgoogle_1_1cloud_1_1pubsub_1_1SubscriptionAdminClient#classgoogle_1_1cloud_1_1pubsub_1_1SubscriptionAdminClient_1a5db46a8f2cea079581820d9c3f970ce4)

**Parameter**

**Name**

**Description**

`GetSubscriptionParams`  

**Returns**

**Type**

**Description**

`StatusOr< google::pubsub::v1::Subscription >`

### virtual UpdateSubscription(UpdateSubscriptionParams)

Defines the interface for [`SubscriptionAdminClient::UpdateSubscription()`](/cpp/docs/reference/pubsub/2.35.0/classgoogle_1_1cloud_1_1pubsub_1_1SubscriptionAdminClient#classgoogle_1_1cloud_1_1pubsub_1_1SubscriptionAdminClient_1a08a1b5414e08b85b6b7b498db8db95c1)

**Parameter**

**Name**

**Description**

`UpdateSubscriptionParams`  

**Returns**

**Type**

**Description**

`StatusOr< google::pubsub::v1::Subscription >`

### virtual ListSubscriptions(ListSubscriptionsParams)

Defines the interface for [`SubscriptionAdminClient::ListSubscriptions()`](/cpp/docs/reference/pubsub/2.35.0/classgoogle_1_1cloud_1_1pubsub_1_1SubscriptionAdminClient#classgoogle_1_1cloud_1_1pubsub_1_1SubscriptionAdminClient_1a5441694c664576d298ce33628e4f998a)

**Parameter**

**Name**

**Description**

`ListSubscriptionsParams`  

**Returns**

**Type**

**Description**

`ListSubscriptionsRange`

### virtual DeleteSubscription(DeleteSubscriptionParams)

Defines the interface for [`SubscriptionAdminClient::DeleteSubscription()`](/cpp/docs/reference/pubsub/2.35.0/classgoogle_1_1cloud_1_1pubsub_1_1SubscriptionAdminClient#classgoogle_1_1cloud_1_1pubsub_1_1SubscriptionAdminClient_1adbee4a577908d080f381cc7d82c915a5)

**Parameter**

**Name**

**Description**

`DeleteSubscriptionParams`  

**Returns**

**Type**

**Description**

`Status`

### virtual ModifyPushConfig(ModifyPushConfigParams)

Defines the interface for `SubscriptionAdminClient::ModifyPushConfig()`

**Parameter**

**Name**

**Description**

`ModifyPushConfigParams`  

**Returns**

**Type**

**Description**

`Status`

### virtual CreateSnapshot(CreateSnapshotParams)

Defines the interface for `SnapshotAdminClient::CreateSnapshot()`

**Parameter**

**Name**

**Description**

`CreateSnapshotParams`  

**Returns**

**Type**

**Description**

`StatusOr< google::pubsub::v1::Snapshot >`

### virtual GetSnapshot(GetSnapshotParams)

Defines the interface for `SnapshotAdminClient::GetSnapshot()`

**Parameter**

**Name**

**Description**

`GetSnapshotParams`  

**Returns**

**Type**

**Description**

`StatusOr< google::pubsub::v1::Snapshot >`

### virtual UpdateSnapshot(UpdateSnapshotParams)

Defines the interface for `SnapshotAdminClient::UpdateSnapshot()`

**Parameter**

**Name**

**Description**

`UpdateSnapshotParams`  

**Returns**

**Type**

**Description**

`StatusOr< google::pubsub::v1::Snapshot >`

### virtual ListSnapshots(ListSnapshotsParams)

Defines the interface for [`SubscriptionAdminClient::ListSnapshots()`](/cpp/docs/reference/pubsub/2.35.0/classgoogle_1_1cloud_1_1pubsub_1_1SubscriptionAdminClient#classgoogle_1_1cloud_1_1pubsub_1_1SubscriptionAdminClient_1af509412c7e632328e10af4e1ac048a09)

**Parameter**

**Name**

**Description**

`ListSnapshotsParams`  

**Returns**

**Type**

**Description**

`ListSnapshotsRange`

### virtual DeleteSnapshot(DeleteSnapshotParams)

Defines the interface for `SnapshotAdminClient::DeleteSnapshot()`

**Parameter**

**Name**

**Description**

`DeleteSnapshotParams`  

**Returns**

**Type**

**Description**

`Status`

### virtual Seek(SeekParams)

Defines the interface for [`SubscriptionAdminClient::Seek()`](/cpp/docs/reference/pubsub/2.35.0/classgoogle_1_1cloud_1_1pubsub_1_1SubscriptionAdminClient#classgoogle_1_1cloud_1_1pubsub_1_1SubscriptionAdminClient_1adf39ab4e4cd24b2447a97410f2d2252b)

**Parameter**

**Name**

**Description**

`SeekParams`  

**Returns**

**Type**

**Description**

`StatusOr< google::pubsub::v1::SeekResponse >`

### virtual options() const

Return the options used to create the connection.

**Returns**

**Type**

**Description**

`Options`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-13 UTC.

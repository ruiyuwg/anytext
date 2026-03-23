-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback

# Class ReservationsConnection (2.35.0) Stay organized with collections Save and categorize content based on your preferences.

3.4.0-rc 3.3.0 (latest) 3.2.0 2.48.0-rc 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.1 2.24.0 2.23.0 2.22.1 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.1

The [`ReservationsConnection`](/cpp/docs/reference/compute/2.35.0/classgoogle_1_1cloud_1_1compute__reservations__v1_1_1ReservationsConnection) object for [`ReservationsClient`](/cpp/docs/reference/compute/2.35.0/classgoogle_1_1cloud_1_1compute__reservations__v1_1_1ReservationsClient).

This interface defines virtual methods for each of the user-facing overload sets in [`ReservationsClient`](/cpp/docs/reference/compute/2.35.0/classgoogle_1_1cloud_1_1compute__reservations__v1_1_1ReservationsClient). This allows users to inject custom behavior (e.g., with a Google Mock object) when writing tests that use objects of type [`ReservationsClient`](/cpp/docs/reference/compute/2.35.0/classgoogle_1_1cloud_1_1compute__reservations__v1_1_1ReservationsClient).

To create a concrete instance, see `MakeReservationsConnection()`.

For mocking, see [`compute_reservations_v1_mocks::MockReservationsConnection`](/cpp/docs/reference/compute/2.35.0/classgoogle_1_1cloud_1_1compute__reservations__v1__mocks_1_1MockReservationsConnection).

## Functions

### virtual options()

**Returns**

**Type**

**Description**

`Options`

### virtual AggregatedListReservations(google::cloud::cpp::compute::reservations::v1::AggregatedListReservationsRequest)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::cpp::compute::reservations::v1::AggregatedListReservationsRequest`  

**Returns**

**Type**

**Description**

`StreamRange< std::pair< std::string, google::cloud::cpp::compute::v1::ReservationsScopedList > >`

### virtual DeleteReservation(google::cloud::cpp::compute::reservations::v1::DeleteReservationRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::cpp::compute::reservations::v1::DeleteReservationRequest const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::cpp::compute::v1::Operation > >`

### virtual DeleteReservation(NoAwaitTag, google::cloud::cpp::compute::reservations::v1::DeleteReservationRequest const &)

**Parameters**

**Name**

**Description**

`NoAwaitTag`  

`request`

`google::cloud::cpp::compute::reservations::v1::DeleteReservationRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::cpp::compute::v1::Operation >`

### virtual DeleteReservation(google::cloud::cpp::compute::v1::Operation const &)

**Parameter**

**Name**

**Description**

`operation`

`google::cloud::cpp::compute::v1::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::cpp::compute::v1::Operation > >`

### virtual GetReservation(google::cloud::cpp::compute::reservations::v1::GetReservationRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::cpp::compute::reservations::v1::GetReservationRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::cpp::compute::v1::Reservation >`

### virtual GetIamPolicy(google::cloud::cpp::compute::reservations::v1::GetIamPolicyRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::cpp::compute::reservations::v1::GetIamPolicyRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::cpp::compute::v1::Policy >`

### virtual InsertReservation(google::cloud::cpp::compute::reservations::v1::InsertReservationRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::cpp::compute::reservations::v1::InsertReservationRequest const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::cpp::compute::v1::Operation > >`

### virtual InsertReservation(NoAwaitTag, google::cloud::cpp::compute::reservations::v1::InsertReservationRequest const &)

**Parameters**

**Name**

**Description**

`NoAwaitTag`  

`request`

`google::cloud::cpp::compute::reservations::v1::InsertReservationRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::cpp::compute::v1::Operation >`

### virtual InsertReservation(google::cloud::cpp::compute::v1::Operation const &)

**Parameter**

**Name**

**Description**

`operation`

`google::cloud::cpp::compute::v1::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::cpp::compute::v1::Operation > >`

### virtual ListReservations(google::cloud::cpp::compute::reservations::v1::ListReservationsRequest)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::cpp::compute::reservations::v1::ListReservationsRequest`  

**Returns**

**Type**

**Description**

`StreamRange< google::cloud::cpp::compute::v1::Reservation >`

### virtual Resize(google::cloud::cpp::compute::reservations::v1::ResizeRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::cpp::compute::reservations::v1::ResizeRequest const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::cpp::compute::v1::Operation > >`

### virtual Resize(NoAwaitTag, google::cloud::cpp::compute::reservations::v1::ResizeRequest const &)

**Parameters**

**Name**

**Description**

`NoAwaitTag`  

`request`

`google::cloud::cpp::compute::reservations::v1::ResizeRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::cpp::compute::v1::Operation >`

### virtual Resize(google::cloud::cpp::compute::v1::Operation const &)

**Parameter**

**Name**

**Description**

`operation`

`google::cloud::cpp::compute::v1::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::cpp::compute::v1::Operation > >`

### virtual SetIamPolicy(google::cloud::cpp::compute::reservations::v1::SetIamPolicyRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::cpp::compute::reservations::v1::SetIamPolicyRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::cpp::compute::v1::Policy >`

### virtual TestIamPermissions(google::cloud::cpp::compute::reservations::v1::TestIamPermissionsRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::cpp::compute::reservations::v1::TestIamPermissionsRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::cpp::compute::v1::TestPermissionsResponse >`

### virtual UpdateReservation(google::cloud::cpp::compute::reservations::v1::UpdateReservationRequest const &)

**Parameter**

**Name**

**Description**

`request`

`google::cloud::cpp::compute::reservations::v1::UpdateReservationRequest const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::cpp::compute::v1::Operation > >`

### virtual UpdateReservation(NoAwaitTag, google::cloud::cpp::compute::reservations::v1::UpdateReservationRequest const &)

**Parameters**

**Name**

**Description**

`NoAwaitTag`  

`request`

`google::cloud::cpp::compute::reservations::v1::UpdateReservationRequest const &`  

**Returns**

**Type**

**Description**

`StatusOr< google::cloud::cpp::compute::v1::Operation >`

### virtual UpdateReservation(google::cloud::cpp::compute::v1::Operation const &)

**Parameter**

**Name**

**Description**

`operation`

`google::cloud::cpp::compute::v1::Operation const &`  

**Returns**

**Type**

**Description**

`future< StatusOr< google::cloud::cpp::compute::v1::Operation > >`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-13 UTC.

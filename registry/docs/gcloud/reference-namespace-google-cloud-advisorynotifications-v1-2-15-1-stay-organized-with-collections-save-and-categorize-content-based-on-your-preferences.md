-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback

# Namespace google::cloud::advisorynotifications\_v1 (2.15.1) Stay organized with collections Save and categorize content based on your preferences.

3.4.0-rc 3.3.0 (latest) 3.2.0 2.48.0-rc 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.1 2.24.0 2.23.0 2.22.1 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.1 2.14.0 2.13.0 2.12.0 2.11.0

## Classes

### [AdvisoryNotificationsServiceClient](/cpp/docs/reference/advisorynotifications/2.15.1/classgoogle_1_1cloud_1_1advisorynotifications__v1_1_1AdvisoryNotificationsServiceClient)

Service to manage Security and Privacy Notifications.

### [AdvisoryNotificationsServiceConnection](/cpp/docs/reference/advisorynotifications/2.15.1/classgoogle_1_1cloud_1_1advisorynotifications__v1_1_1AdvisoryNotificationsServiceConnection)

The [`AdvisoryNotificationsServiceConnection`](/cpp/docs/reference/advisorynotifications/2.15.1/classgoogle_1_1cloud_1_1advisorynotifications__v1_1_1AdvisoryNotificationsServiceConnection) object for [`AdvisoryNotificationsServiceClient`](/cpp/docs/reference/advisorynotifications/2.15.1/classgoogle_1_1cloud_1_1advisorynotifications__v1_1_1AdvisoryNotificationsServiceClient).

### [AdvisoryNotificationsServiceConnectionIdempotencyPolicy](/cpp/docs/reference/advisorynotifications/2.15.1/classgoogle_1_1cloud_1_1advisorynotifications__v1_1_1AdvisoryNotificationsServiceConnectionIdempotencyPolicy)

### [AdvisoryNotificationsServiceLimitedErrorCountRetryPolicy](/cpp/docs/reference/advisorynotifications/2.15.1/classgoogle_1_1cloud_1_1advisorynotifications__v1_1_1AdvisoryNotificationsServiceLimitedErrorCountRetryPolicy)

A retry policy for [`AdvisoryNotificationsServiceConnection`](/cpp/docs/reference/advisorynotifications/2.15.1/classgoogle_1_1cloud_1_1advisorynotifications__v1_1_1AdvisoryNotificationsServiceConnection) based on counting errors.

### [AdvisoryNotificationsServiceLimitedTimeRetryPolicy](/cpp/docs/reference/advisorynotifications/2.15.1/classgoogle_1_1cloud_1_1advisorynotifications__v1_1_1AdvisoryNotificationsServiceLimitedTimeRetryPolicy)

A retry policy for [`AdvisoryNotificationsServiceConnection`](/cpp/docs/reference/advisorynotifications/2.15.1/classgoogle_1_1cloud_1_1advisorynotifications__v1_1_1AdvisoryNotificationsServiceConnection) based on elapsed time.

### [AdvisoryNotificationsServiceRetryPolicy](/cpp/docs/reference/advisorynotifications/2.15.1/classgoogle_1_1cloud_1_1advisorynotifications__v1_1_1AdvisoryNotificationsServiceRetryPolicy)

The retry policy for [`AdvisoryNotificationsServiceConnection`](/cpp/docs/reference/advisorynotifications/2.15.1/classgoogle_1_1cloud_1_1advisorynotifications__v1_1_1AdvisoryNotificationsServiceConnection).

## Structs

### [AdvisoryNotificationsServiceBackoffPolicyOption](/cpp/docs/reference/advisorynotifications/2.15.1/structgoogle_1_1cloud_1_1advisorynotifications__v1_1_1AdvisoryNotificationsServiceBackoffPolicyOption)

Use with [`google::cloud::Options`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Options.html) to configure the backoff policy.

### [AdvisoryNotificationsServiceConnectionIdempotencyPolicyOption](/cpp/docs/reference/advisorynotifications/2.15.1/structgoogle_1_1cloud_1_1advisorynotifications__v1_1_1AdvisoryNotificationsServiceConnectionIdempotencyPolicyOption)

Use with [`google::cloud::Options`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Options.html) to configure which operations are retried.

### [AdvisoryNotificationsServiceRetryPolicyOption](/cpp/docs/reference/advisorynotifications/2.15.1/structgoogle_1_1cloud_1_1advisorynotifications__v1_1_1AdvisoryNotificationsServiceRetryPolicyOption)

Use with [`google::cloud::Options`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Options.html) to configure the retry policy.

## Functions

### MakeAdvisoryNotificationsServiceConnection(Options)

A factory function to construct an object of type [`AdvisoryNotificationsServiceConnection`](/cpp/docs/reference/advisorynotifications/2.15.1/classgoogle_1_1cloud_1_1advisorynotifications__v1_1_1AdvisoryNotificationsServiceConnection).

The returned connection object should not be used directly; instead it should be passed as an argument to the constructor of [AdvisoryNotificationsServiceClient](/cpp/docs/reference/advisorynotifications/2.15.1/classgoogle_1_1cloud_1_1advisorynotifications__v1_1_1AdvisoryNotificationsServiceClient).

The optional `options` argument may be used to configure aspects of the returned [`AdvisoryNotificationsServiceConnection`](/cpp/docs/reference/advisorynotifications/2.15.1/classgoogle_1_1cloud_1_1advisorynotifications__v1_1_1AdvisoryNotificationsServiceConnection). Expected options are any of the types in the following option lists:

-   [`google::cloud::CommonOptionList`](https://cloud.google.com/cpp/docs/reference/common/latest/namespacegoogle_1_1cloud.html)
-   [`google::cloud::GrpcOptionList`](https://cloud.google.com/cpp/docs/reference/common/latest/namespacegoogle_1_1cloud.html)
-   [`google::cloud::UnifiedCredentialsOptionList`](https://cloud.google.com/cpp/docs/reference/common/latest/namespacegoogle_1_1cloud.html)
-   [`google::cloud::advisorynotifications_v1::AdvisoryNotificationsServicePolicyOptionList`](/cpp/docs/reference/advisorynotifications/2.15.1/namespacegoogle_1_1cloud_1_1advisorynotifications__v1)

**Note:** Unexpected options will be ignored. To log unexpected options instead, set `GOOGLE_CLOUD_CPP_ENABLE_CLOG=yes` in the environment.

**Parameter**

**Name**

**Description**

`options`

  

(optional) Configure the [`AdvisoryNotificationsServiceConnection`](/cpp/docs/reference/advisorynotifications/2.15.1/classgoogle_1_1cloud_1_1advisorynotifications__v1_1_1AdvisoryNotificationsServiceConnection) created by this function.

**Returns**

**Type**

**Description**

`std::shared_ptr< AdvisoryNotificationsServiceConnection >`

### MakeDefaultAdvisoryNotificationsServiceConnectionIdempotencyPolicy()

**Returns**

**Type**

**Description**

`std::unique_ptr< AdvisoryNotificationsServiceConnectionIdempotencyPolicy >`

## Type Aliases

### AdvisoryNotificationsServicePolicyOptionList

**Alias Of**: `OptionList< AdvisoryNotificationsServiceRetryPolicyOption, AdvisoryNotificationsServiceBackoffPolicyOption, AdvisoryNotificationsServiceConnectionIdempotencyPolicyOption >`

The options applicable to AdvisoryNotificationsService.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-13 UTC.

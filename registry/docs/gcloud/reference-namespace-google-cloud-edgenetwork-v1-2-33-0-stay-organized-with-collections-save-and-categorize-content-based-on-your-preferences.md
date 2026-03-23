-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback

# Namespace google::cloud::edgenetwork\_v1 (2.33.0) Stay organized with collections Save and categorize content based on your preferences.

3.4.0-rc 3.3.0 (latest) 3.2.0 2.48.0-rc 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.1 2.24.0 2.23.0 2.22.1 2.21.0 2.20.0 2.19.0

## Classes

### [EdgeNetworkClient](/cpp/docs/reference/edgenetwork/2.33.0/classgoogle_1_1cloud_1_1edgenetwork__v1_1_1EdgeNetworkClient)

EdgeNetwork API provides managed, highly available cloud dynamic network configuration service to the GEC customer to enable edge application and network function solutions.

### [EdgeNetworkConnection](/cpp/docs/reference/edgenetwork/2.33.0/classgoogle_1_1cloud_1_1edgenetwork__v1_1_1EdgeNetworkConnection)

The [`EdgeNetworkConnection`](/cpp/docs/reference/edgenetwork/2.33.0/classgoogle_1_1cloud_1_1edgenetwork__v1_1_1EdgeNetworkConnection) object for [`EdgeNetworkClient`](/cpp/docs/reference/edgenetwork/2.33.0/classgoogle_1_1cloud_1_1edgenetwork__v1_1_1EdgeNetworkClient).

### [EdgeNetworkConnectionIdempotencyPolicy](/cpp/docs/reference/edgenetwork/2.33.0/classgoogle_1_1cloud_1_1edgenetwork__v1_1_1EdgeNetworkConnectionIdempotencyPolicy)

### [EdgeNetworkLimitedErrorCountRetryPolicy](/cpp/docs/reference/edgenetwork/2.33.0/classgoogle_1_1cloud_1_1edgenetwork__v1_1_1EdgeNetworkLimitedErrorCountRetryPolicy)

A retry policy for [`EdgeNetworkConnection`](/cpp/docs/reference/edgenetwork/2.33.0/classgoogle_1_1cloud_1_1edgenetwork__v1_1_1EdgeNetworkConnection) based on counting errors.

### [EdgeNetworkLimitedTimeRetryPolicy](/cpp/docs/reference/edgenetwork/2.33.0/classgoogle_1_1cloud_1_1edgenetwork__v1_1_1EdgeNetworkLimitedTimeRetryPolicy)

A retry policy for [`EdgeNetworkConnection`](/cpp/docs/reference/edgenetwork/2.33.0/classgoogle_1_1cloud_1_1edgenetwork__v1_1_1EdgeNetworkConnection) based on elapsed time.

### [EdgeNetworkRetryPolicy](/cpp/docs/reference/edgenetwork/2.33.0/classgoogle_1_1cloud_1_1edgenetwork__v1_1_1EdgeNetworkRetryPolicy)

The retry policy for [`EdgeNetworkConnection`](/cpp/docs/reference/edgenetwork/2.33.0/classgoogle_1_1cloud_1_1edgenetwork__v1_1_1EdgeNetworkConnection).

## Structs

### [EdgeNetworkBackoffPolicyOption](/cpp/docs/reference/edgenetwork/2.33.0/structgoogle_1_1cloud_1_1edgenetwork__v1_1_1EdgeNetworkBackoffPolicyOption)

Use with [`google::cloud::Options`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Options.html) to configure the backoff policy.

### [EdgeNetworkConnectionIdempotencyPolicyOption](/cpp/docs/reference/edgenetwork/2.33.0/structgoogle_1_1cloud_1_1edgenetwork__v1_1_1EdgeNetworkConnectionIdempotencyPolicyOption)

Use with [`google::cloud::Options`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Options.html) to configure which operations are retried.

### [EdgeNetworkPollingPolicyOption](/cpp/docs/reference/edgenetwork/2.33.0/structgoogle_1_1cloud_1_1edgenetwork__v1_1_1EdgeNetworkPollingPolicyOption)

Use with [`google::cloud::Options`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Options.html) to configure the long-running operations polling policy.

### [EdgeNetworkRetryPolicyOption](/cpp/docs/reference/edgenetwork/2.33.0/structgoogle_1_1cloud_1_1edgenetwork__v1_1_1EdgeNetworkRetryPolicyOption)

Use with [`google::cloud::Options`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Options.html) to configure the retry policy.

## Functions

### MakeEdgeNetworkConnection(Options)

A factory function to construct an object of type [`EdgeNetworkConnection`](/cpp/docs/reference/edgenetwork/2.33.0/classgoogle_1_1cloud_1_1edgenetwork__v1_1_1EdgeNetworkConnection).

The returned connection object should not be used directly; instead it should be passed as an argument to the constructor of [EdgeNetworkClient](/cpp/docs/reference/edgenetwork/2.33.0/classgoogle_1_1cloud_1_1edgenetwork__v1_1_1EdgeNetworkClient).

The optional `options` argument may be used to configure aspects of the returned [`EdgeNetworkConnection`](/cpp/docs/reference/edgenetwork/2.33.0/classgoogle_1_1cloud_1_1edgenetwork__v1_1_1EdgeNetworkConnection). Expected options are any of the types in the following option lists:

-   [`google::cloud::CommonOptionList`](https://cloud.google.com/cpp/docs/reference/common/latest/namespacegoogle_1_1cloud.html)
-   [`google::cloud::GrpcOptionList`](https://cloud.google.com/cpp/docs/reference/common/latest/namespacegoogle_1_1cloud.html)
-   [`google::cloud::UnifiedCredentialsOptionList`](https://cloud.google.com/cpp/docs/reference/common/latest/namespacegoogle_1_1cloud.html)
-   [`google::cloud::edgenetwork_v1::EdgeNetworkPolicyOptionList`](about:invalid#zCSafez)

**Note:** Unexpected options will be ignored. To log unexpected options instead, set `GOOGLE_CLOUD_CPP_ENABLE_CLOG=yes` in the environment.

**Parameter**

**Name**

**Description**

`options`

  

(optional) Configure the [`EdgeNetworkConnection`](/cpp/docs/reference/edgenetwork/2.33.0/classgoogle_1_1cloud_1_1edgenetwork__v1_1_1EdgeNetworkConnection) created by this function.

**Returns**

**Type**

**Description**

`std::shared_ptr< EdgeNetworkConnection >`

### MakeDefaultEdgeNetworkConnectionIdempotencyPolicy()

**Returns**

**Type**

**Description**

`std::unique_ptr< EdgeNetworkConnectionIdempotencyPolicy >`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-13 UTC.

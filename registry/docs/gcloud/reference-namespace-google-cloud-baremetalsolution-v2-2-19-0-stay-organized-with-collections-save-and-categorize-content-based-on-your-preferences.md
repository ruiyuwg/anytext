-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback

# Namespace google::cloud::baremetalsolution\_v2 (2.19.0) Stay organized with collections Save and categorize content based on your preferences.

3.4.0-rc 3.3.0 (latest) 3.2.0 2.48.0-rc 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.1 2.24.0 2.23.0 2.22.1 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.1 2.14.0 2.13.0 2.12.0 2.11.0

## Classes

### [BareMetalSolutionClient](/cpp/docs/reference/baremetalsolution/2.19.0/classgoogle_1_1cloud_1_1baremetalsolution__v2_1_1BareMetalSolutionClient)

Performs management operations on Bare Metal Solution servers.

### [BareMetalSolutionConnection](/cpp/docs/reference/baremetalsolution/2.19.0/classgoogle_1_1cloud_1_1baremetalsolution__v2_1_1BareMetalSolutionConnection)

The [`BareMetalSolutionConnection`](/cpp/docs/reference/baremetalsolution/2.19.0/classgoogle_1_1cloud_1_1baremetalsolution__v2_1_1BareMetalSolutionConnection) object for [`BareMetalSolutionClient`](/cpp/docs/reference/baremetalsolution/2.19.0/classgoogle_1_1cloud_1_1baremetalsolution__v2_1_1BareMetalSolutionClient).

### [BareMetalSolutionConnectionIdempotencyPolicy](/cpp/docs/reference/baremetalsolution/2.19.0/classgoogle_1_1cloud_1_1baremetalsolution__v2_1_1BareMetalSolutionConnectionIdempotencyPolicy)

### [BareMetalSolutionLimitedErrorCountRetryPolicy](/cpp/docs/reference/baremetalsolution/2.19.0/classgoogle_1_1cloud_1_1baremetalsolution__v2_1_1BareMetalSolutionLimitedErrorCountRetryPolicy)

A retry policy for [`BareMetalSolutionConnection`](/cpp/docs/reference/baremetalsolution/2.19.0/classgoogle_1_1cloud_1_1baremetalsolution__v2_1_1BareMetalSolutionConnection) based on counting errors.

### [BareMetalSolutionLimitedTimeRetryPolicy](/cpp/docs/reference/baremetalsolution/2.19.0/classgoogle_1_1cloud_1_1baremetalsolution__v2_1_1BareMetalSolutionLimitedTimeRetryPolicy)

A retry policy for [`BareMetalSolutionConnection`](/cpp/docs/reference/baremetalsolution/2.19.0/classgoogle_1_1cloud_1_1baremetalsolution__v2_1_1BareMetalSolutionConnection) based on elapsed time.

### [BareMetalSolutionRetryPolicy](/cpp/docs/reference/baremetalsolution/2.19.0/classgoogle_1_1cloud_1_1baremetalsolution__v2_1_1BareMetalSolutionRetryPolicy)

The retry policy for [`BareMetalSolutionConnection`](/cpp/docs/reference/baremetalsolution/2.19.0/classgoogle_1_1cloud_1_1baremetalsolution__v2_1_1BareMetalSolutionConnection).

## Structs

### [BareMetalSolutionBackoffPolicyOption](/cpp/docs/reference/baremetalsolution/2.19.0/structgoogle_1_1cloud_1_1baremetalsolution__v2_1_1BareMetalSolutionBackoffPolicyOption)

Use with [`google::cloud::Options`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Options.html) to configure the backoff policy.

### [BareMetalSolutionConnectionIdempotencyPolicyOption](/cpp/docs/reference/baremetalsolution/2.19.0/structgoogle_1_1cloud_1_1baremetalsolution__v2_1_1BareMetalSolutionConnectionIdempotencyPolicyOption)

Use with [`google::cloud::Options`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Options.html) to configure which operations are retried.

### [BareMetalSolutionPollingPolicyOption](/cpp/docs/reference/baremetalsolution/2.19.0/structgoogle_1_1cloud_1_1baremetalsolution__v2_1_1BareMetalSolutionPollingPolicyOption)

Use with [`google::cloud::Options`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Options.html) to configure the long-running operations polling policy.

### [BareMetalSolutionRetryPolicyOption](/cpp/docs/reference/baremetalsolution/2.19.0/structgoogle_1_1cloud_1_1baremetalsolution__v2_1_1BareMetalSolutionRetryPolicyOption)

Use with [`google::cloud::Options`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Options.html) to configure the retry policy.

## Functions

### MakeBareMetalSolutionConnection(Options)

A factory function to construct an object of type [`BareMetalSolutionConnection`](/cpp/docs/reference/baremetalsolution/2.19.0/classgoogle_1_1cloud_1_1baremetalsolution__v2_1_1BareMetalSolutionConnection).

The returned connection object should not be used directly; instead it should be passed as an argument to the constructor of [BareMetalSolutionClient](/cpp/docs/reference/baremetalsolution/2.19.0/classgoogle_1_1cloud_1_1baremetalsolution__v2_1_1BareMetalSolutionClient).

The optional `options` argument may be used to configure aspects of the returned [`BareMetalSolutionConnection`](/cpp/docs/reference/baremetalsolution/2.19.0/classgoogle_1_1cloud_1_1baremetalsolution__v2_1_1BareMetalSolutionConnection). Expected options are any of the types in the following option lists:

-   [`google::cloud::CommonOptionList`](https://cloud.google.com/cpp/docs/reference/common/latest/namespacegoogle_1_1cloud.html)
-   [`google::cloud::GrpcOptionList`](https://cloud.google.com/cpp/docs/reference/common/latest/namespacegoogle_1_1cloud.html)
-   [`google::cloud::UnifiedCredentialsOptionList`](https://cloud.google.com/cpp/docs/reference/common/latest/namespacegoogle_1_1cloud.html)
-   [`google::cloud::baremetalsolution_v2::BareMetalSolutionPolicyOptionList`](/cpp/docs/reference/baremetalsolution/2.19.0/namespacegoogle_1_1cloud_1_1baremetalsolution__v2)

**Note:** Unexpected options will be ignored. To log unexpected options instead, set `GOOGLE_CLOUD_CPP_ENABLE_CLOG=yes` in the environment.

**Parameter**

**Name**

**Description**

`options`

  

(optional) Configure the [`BareMetalSolutionConnection`](/cpp/docs/reference/baremetalsolution/2.19.0/classgoogle_1_1cloud_1_1baremetalsolution__v2_1_1BareMetalSolutionConnection) created by this function.

**Returns**

**Type**

**Description**

`std::shared_ptr< BareMetalSolutionConnection >`

### MakeDefaultBareMetalSolutionConnectionIdempotencyPolicy()

**Returns**

**Type**

**Description**

`std::unique_ptr< BareMetalSolutionConnectionIdempotencyPolicy >`

## Type Aliases

### BareMetalSolutionPolicyOptionList

**Alias Of**: `OptionList< BareMetalSolutionRetryPolicyOption, BareMetalSolutionBackoffPolicyOption, BareMetalSolutionPollingPolicyOption, BareMetalSolutionConnectionIdempotencyPolicyOption >`

The options applicable to BareMetalSolution.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-13 UTC.

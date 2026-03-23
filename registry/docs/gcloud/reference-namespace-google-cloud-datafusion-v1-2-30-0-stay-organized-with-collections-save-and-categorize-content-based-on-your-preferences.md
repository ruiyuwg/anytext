-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback

# Namespace google::cloud::datafusion\_v1 (2.30.0) Stay organized with collections Save and categorize content based on your preferences.

3.4.0-rc 3.3.0 (latest) 3.2.0 2.48.0-rc 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.1 2.24.0 2.23.0 2.22.1 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.1 2.14.0 2.13.0

## Classes

### [DataFusionClient](/cpp/docs/reference/datafusion/2.30.0/classgoogle_1_1cloud_1_1datafusion__v1_1_1DataFusionClient)

Service for creating and managing Data Fusion instances.

### [DataFusionConnection](/cpp/docs/reference/datafusion/2.30.0/classgoogle_1_1cloud_1_1datafusion__v1_1_1DataFusionConnection)

The [`DataFusionConnection`](/cpp/docs/reference/datafusion/2.30.0/classgoogle_1_1cloud_1_1datafusion__v1_1_1DataFusionConnection) object for [`DataFusionClient`](/cpp/docs/reference/datafusion/2.30.0/classgoogle_1_1cloud_1_1datafusion__v1_1_1DataFusionClient).

### [DataFusionConnectionIdempotencyPolicy](/cpp/docs/reference/datafusion/2.30.0/classgoogle_1_1cloud_1_1datafusion__v1_1_1DataFusionConnectionIdempotencyPolicy)

### [DataFusionLimitedErrorCountRetryPolicy](/cpp/docs/reference/datafusion/2.30.0/classgoogle_1_1cloud_1_1datafusion__v1_1_1DataFusionLimitedErrorCountRetryPolicy)

A retry policy for [`DataFusionConnection`](/cpp/docs/reference/datafusion/2.30.0/classgoogle_1_1cloud_1_1datafusion__v1_1_1DataFusionConnection) based on counting errors.

### [DataFusionLimitedTimeRetryPolicy](/cpp/docs/reference/datafusion/2.30.0/classgoogle_1_1cloud_1_1datafusion__v1_1_1DataFusionLimitedTimeRetryPolicy)

A retry policy for [`DataFusionConnection`](/cpp/docs/reference/datafusion/2.30.0/classgoogle_1_1cloud_1_1datafusion__v1_1_1DataFusionConnection) based on elapsed time.

### [DataFusionRetryPolicy](/cpp/docs/reference/datafusion/2.30.0/classgoogle_1_1cloud_1_1datafusion__v1_1_1DataFusionRetryPolicy)

The retry policy for [`DataFusionConnection`](/cpp/docs/reference/datafusion/2.30.0/classgoogle_1_1cloud_1_1datafusion__v1_1_1DataFusionConnection).

## Structs

### [DataFusionBackoffPolicyOption](/cpp/docs/reference/datafusion/2.30.0/structgoogle_1_1cloud_1_1datafusion__v1_1_1DataFusionBackoffPolicyOption)

Use with [`google::cloud::Options`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Options.html) to configure the backoff policy.

### [DataFusionConnectionIdempotencyPolicyOption](/cpp/docs/reference/datafusion/2.30.0/structgoogle_1_1cloud_1_1datafusion__v1_1_1DataFusionConnectionIdempotencyPolicyOption)

Use with [`google::cloud::Options`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Options.html) to configure which operations are retried.

### [DataFusionPollingPolicyOption](/cpp/docs/reference/datafusion/2.30.0/structgoogle_1_1cloud_1_1datafusion__v1_1_1DataFusionPollingPolicyOption)

Use with [`google::cloud::Options`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Options.html) to configure the long-running operations polling policy.

### [DataFusionRetryPolicyOption](/cpp/docs/reference/datafusion/2.30.0/structgoogle_1_1cloud_1_1datafusion__v1_1_1DataFusionRetryPolicyOption)

Use with [`google::cloud::Options`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Options.html) to configure the retry policy.

## Functions

### MakeDataFusionConnection(Options)

A factory function to construct an object of type [`DataFusionConnection`](/cpp/docs/reference/datafusion/2.30.0/classgoogle_1_1cloud_1_1datafusion__v1_1_1DataFusionConnection).

The returned connection object should not be used directly; instead it should be passed as an argument to the constructor of [DataFusionClient](/cpp/docs/reference/datafusion/2.30.0/classgoogle_1_1cloud_1_1datafusion__v1_1_1DataFusionClient).

The optional `options` argument may be used to configure aspects of the returned [`DataFusionConnection`](/cpp/docs/reference/datafusion/2.30.0/classgoogle_1_1cloud_1_1datafusion__v1_1_1DataFusionConnection). Expected options are any of the types in the following option lists:

-   [`google::cloud::CommonOptionList`](https://cloud.google.com/cpp/docs/reference/common/latest/namespacegoogle_1_1cloud.html)
-   [`google::cloud::GrpcOptionList`](https://cloud.google.com/cpp/docs/reference/common/latest/namespacegoogle_1_1cloud.html)
-   [`google::cloud::UnifiedCredentialsOptionList`](https://cloud.google.com/cpp/docs/reference/common/latest/namespacegoogle_1_1cloud.html)
-   [`google::cloud::datafusion_v1::DataFusionPolicyOptionList`](about:invalid#zCSafez)

**Note:** Unexpected options will be ignored. To log unexpected options instead, set `GOOGLE_CLOUD_CPP_ENABLE_CLOG=yes` in the environment.

**Parameter**

**Name**

**Description**

`options`

  

(optional) Configure the [`DataFusionConnection`](/cpp/docs/reference/datafusion/2.30.0/classgoogle_1_1cloud_1_1datafusion__v1_1_1DataFusionConnection) created by this function.

**Returns**

**Type**

**Description**

`std::shared_ptr< DataFusionConnection >`

### MakeDefaultDataFusionConnectionIdempotencyPolicy()

**Returns**

**Type**

**Description**

`std::unique_ptr< DataFusionConnectionIdempotencyPolicy >`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-13 UTC.

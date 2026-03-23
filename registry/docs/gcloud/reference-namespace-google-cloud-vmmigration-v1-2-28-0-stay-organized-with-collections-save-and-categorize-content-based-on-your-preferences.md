-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback

# Namespace google::cloud::vmmigration\_v1 (2.28.0) Stay organized with collections Save and categorize content based on your preferences.

3.4.0-rc 3.3.0 (latest) 3.2.0 2.48.0-rc 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.1 2.24.0 2.23.0 2.22.1 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.1 2.14.0 2.13.0 2.12.0 2.11.0

## Classes

### [VmMigrationClient](/cpp/docs/reference/vmmigration/2.28.0/classgoogle_1_1cloud_1_1vmmigration__v1_1_1VmMigrationClient)

VM Migration Service.

### [VmMigrationConnection](/cpp/docs/reference/vmmigration/2.28.0/classgoogle_1_1cloud_1_1vmmigration__v1_1_1VmMigrationConnection)

The [`VmMigrationConnection`](/cpp/docs/reference/vmmigration/2.28.0/classgoogle_1_1cloud_1_1vmmigration__v1_1_1VmMigrationConnection) object for [`VmMigrationClient`](/cpp/docs/reference/vmmigration/2.28.0/classgoogle_1_1cloud_1_1vmmigration__v1_1_1VmMigrationClient).

### [VmMigrationConnectionIdempotencyPolicy](/cpp/docs/reference/vmmigration/2.28.0/classgoogle_1_1cloud_1_1vmmigration__v1_1_1VmMigrationConnectionIdempotencyPolicy)

### [VmMigrationLimitedErrorCountRetryPolicy](/cpp/docs/reference/vmmigration/2.28.0/classgoogle_1_1cloud_1_1vmmigration__v1_1_1VmMigrationLimitedErrorCountRetryPolicy)

A retry policy for [`VmMigrationConnection`](/cpp/docs/reference/vmmigration/2.28.0/classgoogle_1_1cloud_1_1vmmigration__v1_1_1VmMigrationConnection) based on counting errors.

### [VmMigrationLimitedTimeRetryPolicy](/cpp/docs/reference/vmmigration/2.28.0/classgoogle_1_1cloud_1_1vmmigration__v1_1_1VmMigrationLimitedTimeRetryPolicy)

A retry policy for [`VmMigrationConnection`](/cpp/docs/reference/vmmigration/2.28.0/classgoogle_1_1cloud_1_1vmmigration__v1_1_1VmMigrationConnection) based on elapsed time.

### [VmMigrationRetryPolicy](/cpp/docs/reference/vmmigration/2.28.0/classgoogle_1_1cloud_1_1vmmigration__v1_1_1VmMigrationRetryPolicy)

The retry policy for [`VmMigrationConnection`](/cpp/docs/reference/vmmigration/2.28.0/classgoogle_1_1cloud_1_1vmmigration__v1_1_1VmMigrationConnection).

## Structs

### [VmMigrationBackoffPolicyOption](/cpp/docs/reference/vmmigration/2.28.0/structgoogle_1_1cloud_1_1vmmigration__v1_1_1VmMigrationBackoffPolicyOption)

Use with [`google::cloud::Options`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Options.html) to configure the backoff policy.

### [VmMigrationConnectionIdempotencyPolicyOption](/cpp/docs/reference/vmmigration/2.28.0/structgoogle_1_1cloud_1_1vmmigration__v1_1_1VmMigrationConnectionIdempotencyPolicyOption)

Use with [`google::cloud::Options`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Options.html) to configure which operations are retried.

### [VmMigrationPollingPolicyOption](/cpp/docs/reference/vmmigration/2.28.0/structgoogle_1_1cloud_1_1vmmigration__v1_1_1VmMigrationPollingPolicyOption)

Use with [`google::cloud::Options`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Options.html) to configure the long-running operations polling policy.

### [VmMigrationRetryPolicyOption](/cpp/docs/reference/vmmigration/2.28.0/structgoogle_1_1cloud_1_1vmmigration__v1_1_1VmMigrationRetryPolicyOption)

Use with [`google::cloud::Options`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Options.html) to configure the retry policy.

## Functions

### MakeVmMigrationConnection(Options)

A factory function to construct an object of type [`VmMigrationConnection`](/cpp/docs/reference/vmmigration/2.28.0/classgoogle_1_1cloud_1_1vmmigration__v1_1_1VmMigrationConnection).

The returned connection object should not be used directly; instead it should be passed as an argument to the constructor of [VmMigrationClient](/cpp/docs/reference/vmmigration/2.28.0/classgoogle_1_1cloud_1_1vmmigration__v1_1_1VmMigrationClient).

The optional `options` argument may be used to configure aspects of the returned [`VmMigrationConnection`](/cpp/docs/reference/vmmigration/2.28.0/classgoogle_1_1cloud_1_1vmmigration__v1_1_1VmMigrationConnection). Expected options are any of the types in the following option lists:

-   [`google::cloud::CommonOptionList`](https://cloud.google.com/cpp/docs/reference/common/latest/namespacegoogle_1_1cloud.html)
-   [`google::cloud::GrpcOptionList`](https://cloud.google.com/cpp/docs/reference/common/latest/namespacegoogle_1_1cloud.html)
-   [`google::cloud::UnifiedCredentialsOptionList`](https://cloud.google.com/cpp/docs/reference/common/latest/namespacegoogle_1_1cloud.html)
-   [`google::cloud::vmmigration_v1::VmMigrationPolicyOptionList`](about:invalid#zCSafez)

**Note:** Unexpected options will be ignored. To log unexpected options instead, set `GOOGLE_CLOUD_CPP_ENABLE_CLOG=yes` in the environment.

**Parameter**

**Name**

**Description**

`options`

  

(optional) Configure the [`VmMigrationConnection`](/cpp/docs/reference/vmmigration/2.28.0/classgoogle_1_1cloud_1_1vmmigration__v1_1_1VmMigrationConnection) created by this function.

**Returns**

**Type**

**Description**

`std::shared_ptr< VmMigrationConnection >`

### MakeDefaultVmMigrationConnectionIdempotencyPolicy()

**Returns**

**Type**

**Description**

`std::unique_ptr< VmMigrationConnectionIdempotencyPolicy >`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-13 UTC.

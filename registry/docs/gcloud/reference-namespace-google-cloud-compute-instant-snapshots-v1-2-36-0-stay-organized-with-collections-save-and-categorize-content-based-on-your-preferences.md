-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback

# Namespace google::cloud::compute\_instant\_snapshots\_v1 (2.36.0) Stay organized with collections Save and categorize content based on your preferences.

3.4.0-rc 3.3.0 (latest) 3.2.0 2.48.0-rc 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.1 2.24.0 2.23.0 2.22.1 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.1

## Classes

### [InstantSnapshotsClient](/cpp/docs/reference/compute/2.36.0/classgoogle_1_1cloud_1_1compute__instant__snapshots__v1_1_1InstantSnapshotsClient)

Service for the instantSnapshots resource.

### [InstantSnapshotsConnection](/cpp/docs/reference/compute/2.36.0/classgoogle_1_1cloud_1_1compute__instant__snapshots__v1_1_1InstantSnapshotsConnection)

The [`InstantSnapshotsConnection`](/cpp/docs/reference/compute/2.36.0/classgoogle_1_1cloud_1_1compute__instant__snapshots__v1_1_1InstantSnapshotsConnection) object for [`InstantSnapshotsClient`](/cpp/docs/reference/compute/2.36.0/classgoogle_1_1cloud_1_1compute__instant__snapshots__v1_1_1InstantSnapshotsClient).

### [InstantSnapshotsConnectionIdempotencyPolicy](/cpp/docs/reference/compute/2.36.0/classgoogle_1_1cloud_1_1compute__instant__snapshots__v1_1_1InstantSnapshotsConnectionIdempotencyPolicy)

### [InstantSnapshotsLimitedErrorCountRetryPolicy](/cpp/docs/reference/compute/2.36.0/classgoogle_1_1cloud_1_1compute__instant__snapshots__v1_1_1InstantSnapshotsLimitedErrorCountRetryPolicy)

A retry policy for [`InstantSnapshotsConnection`](/cpp/docs/reference/compute/2.36.0/classgoogle_1_1cloud_1_1compute__instant__snapshots__v1_1_1InstantSnapshotsConnection) based on counting errors.

### [InstantSnapshotsLimitedTimeRetryPolicy](/cpp/docs/reference/compute/2.36.0/classgoogle_1_1cloud_1_1compute__instant__snapshots__v1_1_1InstantSnapshotsLimitedTimeRetryPolicy)

A retry policy for [`InstantSnapshotsConnection`](/cpp/docs/reference/compute/2.36.0/classgoogle_1_1cloud_1_1compute__instant__snapshots__v1_1_1InstantSnapshotsConnection) based on elapsed time.

### [InstantSnapshotsRetryPolicy](/cpp/docs/reference/compute/2.36.0/classgoogle_1_1cloud_1_1compute__instant__snapshots__v1_1_1InstantSnapshotsRetryPolicy)

The retry policy for [`InstantSnapshotsConnection`](/cpp/docs/reference/compute/2.36.0/classgoogle_1_1cloud_1_1compute__instant__snapshots__v1_1_1InstantSnapshotsConnection).

## Structs

### [InstantSnapshotsBackoffPolicyOption](/cpp/docs/reference/compute/2.36.0/structgoogle_1_1cloud_1_1compute__instant__snapshots__v1_1_1InstantSnapshotsBackoffPolicyOption)

Use with [`google::cloud::Options`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Options.html) to configure the backoff policy.

### [InstantSnapshotsConnectionIdempotencyPolicyOption](/cpp/docs/reference/compute/2.36.0/structgoogle_1_1cloud_1_1compute__instant__snapshots__v1_1_1InstantSnapshotsConnectionIdempotencyPolicyOption)

Use with [`google::cloud::Options`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Options.html) to configure which operations are retried.

### [InstantSnapshotsPollingPolicyOption](/cpp/docs/reference/compute/2.36.0/structgoogle_1_1cloud_1_1compute__instant__snapshots__v1_1_1InstantSnapshotsPollingPolicyOption)

Use with [`google::cloud::Options`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Options.html) to configure the long-running operations polling policy.

### [InstantSnapshotsRetryPolicyOption](/cpp/docs/reference/compute/2.36.0/structgoogle_1_1cloud_1_1compute__instant__snapshots__v1_1_1InstantSnapshotsRetryPolicyOption)

Use with [`google::cloud::Options`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Options.html) to configure the retry policy.

## Functions

### MakeDefaultInstantSnapshotsConnectionIdempotencyPolicy()

**Returns**

**Type**

**Description**

`std::unique_ptr< InstantSnapshotsConnectionIdempotencyPolicy >`

### MakeInstantSnapshotsConnectionRest(Options)

A factory function to construct an object of type [`InstantSnapshotsConnection`](/cpp/docs/reference/compute/2.36.0/classgoogle_1_1cloud_1_1compute__instant__snapshots__v1_1_1InstantSnapshotsConnection) that uses REST over HTTP as transport in lieu of gRPC.

REST transport should only be used for services that do not support gRPC or if the existing network configuration precludes using gRPC.

The returned connection object should not be used directly; instead it should be passed as an argument to the constructor of [InstantSnapshotsClient](/cpp/docs/reference/compute/2.36.0/classgoogle_1_1cloud_1_1compute__instant__snapshots__v1_1_1InstantSnapshotsClient).

The optional `options` argument may be used to configure aspects of the returned [`InstantSnapshotsConnection`](/cpp/docs/reference/compute/2.36.0/classgoogle_1_1cloud_1_1compute__instant__snapshots__v1_1_1InstantSnapshotsConnection). Expected options are any of the types in the following option lists:

-   [`google::cloud::CommonOptionList`](https://cloud.google.com/cpp/docs/reference/common/latest/namespacegoogle_1_1cloud.html)
-   [`google::cloud::RestOptionList`](https://cloud.google.com/cpp/docs/reference/common/latest/namespacegoogle_1_1cloud.html)
-   [`google::cloud::UnifiedCredentialsOptionList`](https://cloud.google.com/cpp/docs/reference/common/latest/namespacegoogle_1_1cloud.html)
-   [`google::cloud::compute_instant_snapshots_v1::InstantSnapshotsPolicyOptionList`](about:invalid#zCSafez)

**Note:** Unexpected options will be ignored. To log unexpected options instead, set `GOOGLE_CLOUD_CPP_ENABLE_CLOG=yes` in the environment.

**Parameter**

**Name**

**Description**

`options`

  

(optional) Configure the [`InstantSnapshotsConnection`](/cpp/docs/reference/compute/2.36.0/classgoogle_1_1cloud_1_1compute__instant__snapshots__v1_1_1InstantSnapshotsConnection) created by this function.

**Returns**

**Type**

**Description**

`std::shared_ptr< InstantSnapshotsConnection >`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-13 UTC.

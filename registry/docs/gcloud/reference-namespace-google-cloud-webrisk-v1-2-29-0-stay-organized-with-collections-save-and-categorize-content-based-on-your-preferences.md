-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback

# Namespace google::cloud::webrisk\_v1 (2.29.0) Stay organized with collections Save and categorize content based on your preferences.

3.4.0-rc 3.3.0 (latest) 3.2.0 2.48.0-rc 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.1 2.24.0 2.23.0 2.22.1 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.1 2.14.0 2.13.0 2.12.0 2.11.0

## Classes

### [WebRiskServiceClient](/cpp/docs/reference/webrisk/2.29.0/classgoogle_1_1cloud_1_1webrisk__v1_1_1WebRiskServiceClient)

Web Risk API defines an interface to detect malicious URLs on your website and in client applications.

### [WebRiskServiceConnection](/cpp/docs/reference/webrisk/2.29.0/classgoogle_1_1cloud_1_1webrisk__v1_1_1WebRiskServiceConnection)

The [`WebRiskServiceConnection`](/cpp/docs/reference/webrisk/2.29.0/classgoogle_1_1cloud_1_1webrisk__v1_1_1WebRiskServiceConnection) object for [`WebRiskServiceClient`](/cpp/docs/reference/webrisk/2.29.0/classgoogle_1_1cloud_1_1webrisk__v1_1_1WebRiskServiceClient).

### [WebRiskServiceConnectionIdempotencyPolicy](/cpp/docs/reference/webrisk/2.29.0/classgoogle_1_1cloud_1_1webrisk__v1_1_1WebRiskServiceConnectionIdempotencyPolicy)

### [WebRiskServiceLimitedErrorCountRetryPolicy](/cpp/docs/reference/webrisk/2.29.0/classgoogle_1_1cloud_1_1webrisk__v1_1_1WebRiskServiceLimitedErrorCountRetryPolicy)

A retry policy for [`WebRiskServiceConnection`](/cpp/docs/reference/webrisk/2.29.0/classgoogle_1_1cloud_1_1webrisk__v1_1_1WebRiskServiceConnection) based on counting errors.

### [WebRiskServiceLimitedTimeRetryPolicy](/cpp/docs/reference/webrisk/2.29.0/classgoogle_1_1cloud_1_1webrisk__v1_1_1WebRiskServiceLimitedTimeRetryPolicy)

A retry policy for [`WebRiskServiceConnection`](/cpp/docs/reference/webrisk/2.29.0/classgoogle_1_1cloud_1_1webrisk__v1_1_1WebRiskServiceConnection) based on elapsed time.

### [WebRiskServiceRetryPolicy](/cpp/docs/reference/webrisk/2.29.0/classgoogle_1_1cloud_1_1webrisk__v1_1_1WebRiskServiceRetryPolicy)

The retry policy for [`WebRiskServiceConnection`](/cpp/docs/reference/webrisk/2.29.0/classgoogle_1_1cloud_1_1webrisk__v1_1_1WebRiskServiceConnection).

## Structs

### [WebRiskServiceBackoffPolicyOption](/cpp/docs/reference/webrisk/2.29.0/structgoogle_1_1cloud_1_1webrisk__v1_1_1WebRiskServiceBackoffPolicyOption)

Use with [`google::cloud::Options`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Options.html) to configure the backoff policy.

### [WebRiskServiceConnectionIdempotencyPolicyOption](/cpp/docs/reference/webrisk/2.29.0/structgoogle_1_1cloud_1_1webrisk__v1_1_1WebRiskServiceConnectionIdempotencyPolicyOption)

Use with [`google::cloud::Options`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Options.html) to configure which operations are retried.

### [WebRiskServicePollingPolicyOption](/cpp/docs/reference/webrisk/2.29.0/structgoogle_1_1cloud_1_1webrisk__v1_1_1WebRiskServicePollingPolicyOption)

Use with [`google::cloud::Options`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Options.html) to configure the long-running operations polling policy.

### [WebRiskServiceRetryPolicyOption](/cpp/docs/reference/webrisk/2.29.0/structgoogle_1_1cloud_1_1webrisk__v1_1_1WebRiskServiceRetryPolicyOption)

Use with [`google::cloud::Options`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Options.html) to configure the retry policy.

## Functions

### MakeWebRiskServiceConnection(Options)

A factory function to construct an object of type [`WebRiskServiceConnection`](/cpp/docs/reference/webrisk/2.29.0/classgoogle_1_1cloud_1_1webrisk__v1_1_1WebRiskServiceConnection).

The returned connection object should not be used directly; instead it should be passed as an argument to the constructor of [WebRiskServiceClient](/cpp/docs/reference/webrisk/2.29.0/classgoogle_1_1cloud_1_1webrisk__v1_1_1WebRiskServiceClient).

The optional `options` argument may be used to configure aspects of the returned [`WebRiskServiceConnection`](/cpp/docs/reference/webrisk/2.29.0/classgoogle_1_1cloud_1_1webrisk__v1_1_1WebRiskServiceConnection). Expected options are any of the types in the following option lists:

-   [`google::cloud::CommonOptionList`](https://cloud.google.com/cpp/docs/reference/common/latest/namespacegoogle_1_1cloud.html)
-   [`google::cloud::GrpcOptionList`](https://cloud.google.com/cpp/docs/reference/common/latest/namespacegoogle_1_1cloud.html)
-   [`google::cloud::UnifiedCredentialsOptionList`](https://cloud.google.com/cpp/docs/reference/common/latest/namespacegoogle_1_1cloud.html)
-   [`google::cloud::webrisk_v1::WebRiskServicePolicyOptionList`](about:invalid#zCSafez)

**Note:** Unexpected options will be ignored. To log unexpected options instead, set `GOOGLE_CLOUD_CPP_ENABLE_CLOG=yes` in the environment.

**Parameter**

**Name**

**Description**

`options`

  

(optional) Configure the [`WebRiskServiceConnection`](/cpp/docs/reference/webrisk/2.29.0/classgoogle_1_1cloud_1_1webrisk__v1_1_1WebRiskServiceConnection) created by this function.

**Returns**

**Type**

**Description**

`std::shared_ptr< WebRiskServiceConnection >`

### MakeDefaultWebRiskServiceConnectionIdempotencyPolicy()

**Returns**

**Type**

**Description**

`std::unique_ptr< WebRiskServiceConnectionIdempotencyPolicy >`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-13 UTC.

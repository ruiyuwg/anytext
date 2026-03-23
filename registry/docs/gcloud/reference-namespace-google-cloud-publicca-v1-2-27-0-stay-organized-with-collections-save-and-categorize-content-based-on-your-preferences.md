-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback

# Namespace google::cloud::publicca\_v1 (2.27.0) Stay organized with collections Save and categorize content based on your preferences.

3.4.0-rc 3.3.0 (latest) 3.2.0 2.48.0-rc 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.1

## Classes

### [PublicCertificateAuthorityServiceClient](/cpp/docs/reference/publicca/2.27.0/classgoogle_1_1cloud_1_1publicca__v1_1_1PublicCertificateAuthorityServiceClient)

Manages the resources required for ACME [external account binding](https://tools.ietf.org/html/rfc8555#section-7.3.4) for the public certificate authority service.

### [PublicCertificateAuthorityServiceConnection](/cpp/docs/reference/publicca/2.27.0/classgoogle_1_1cloud_1_1publicca__v1_1_1PublicCertificateAuthorityServiceConnection)

The [`PublicCertificateAuthorityServiceConnection`](/cpp/docs/reference/publicca/2.27.0/classgoogle_1_1cloud_1_1publicca__v1_1_1PublicCertificateAuthorityServiceConnection) object for [`PublicCertificateAuthorityServiceClient`](/cpp/docs/reference/publicca/2.27.0/classgoogle_1_1cloud_1_1publicca__v1_1_1PublicCertificateAuthorityServiceClient).

### [PublicCertificateAuthorityServiceConnectionIdempotencyPolicy](/cpp/docs/reference/publicca/2.27.0/classgoogle_1_1cloud_1_1publicca__v1_1_1PublicCertificateAuthorityServiceConnectionIdempotencyPolicy)

### [PublicCertificateAuthorityServiceLimitedErrorCountRetryPolicy](/cpp/docs/reference/publicca/2.27.0/classgoogle_1_1cloud_1_1publicca__v1_1_1PublicCertificateAuthorityServiceLimitedErrorCountRetryPolicy)

A retry policy for [`PublicCertificateAuthorityServiceConnection`](/cpp/docs/reference/publicca/2.27.0/classgoogle_1_1cloud_1_1publicca__v1_1_1PublicCertificateAuthorityServiceConnection) based on counting errors.

### [PublicCertificateAuthorityServiceLimitedTimeRetryPolicy](/cpp/docs/reference/publicca/2.27.0/classgoogle_1_1cloud_1_1publicca__v1_1_1PublicCertificateAuthorityServiceLimitedTimeRetryPolicy)

A retry policy for [`PublicCertificateAuthorityServiceConnection`](/cpp/docs/reference/publicca/2.27.0/classgoogle_1_1cloud_1_1publicca__v1_1_1PublicCertificateAuthorityServiceConnection) based on elapsed time.

### [PublicCertificateAuthorityServiceRetryPolicy](/cpp/docs/reference/publicca/2.27.0/classgoogle_1_1cloud_1_1publicca__v1_1_1PublicCertificateAuthorityServiceRetryPolicy)

The retry policy for [`PublicCertificateAuthorityServiceConnection`](/cpp/docs/reference/publicca/2.27.0/classgoogle_1_1cloud_1_1publicca__v1_1_1PublicCertificateAuthorityServiceConnection).

## Structs

### [PublicCertificateAuthorityServiceBackoffPolicyOption](/cpp/docs/reference/publicca/2.27.0/structgoogle_1_1cloud_1_1publicca__v1_1_1PublicCertificateAuthorityServiceBackoffPolicyOption)

Use with [`google::cloud::Options`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Options.html) to configure the backoff policy.

### [PublicCertificateAuthorityServiceConnectionIdempotencyPolicyOption](/cpp/docs/reference/publicca/2.27.0/structgoogle_1_1cloud_1_1publicca__v1_1_1PublicCertificateAuthorityServiceConnectionIdempotencyPolicyOption)

Use with [`google::cloud::Options`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Options.html) to configure which operations are retried.

### [PublicCertificateAuthorityServiceRetryPolicyOption](/cpp/docs/reference/publicca/2.27.0/structgoogle_1_1cloud_1_1publicca__v1_1_1PublicCertificateAuthorityServiceRetryPolicyOption)

Use with [`google::cloud::Options`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Options.html) to configure the retry policy.

## Functions

### MakePublicCertificateAuthorityServiceConnection(Options)

A factory function to construct an object of type [`PublicCertificateAuthorityServiceConnection`](/cpp/docs/reference/publicca/2.27.0/classgoogle_1_1cloud_1_1publicca__v1_1_1PublicCertificateAuthorityServiceConnection).

The returned connection object should not be used directly; instead it should be passed as an argument to the constructor of [PublicCertificateAuthorityServiceClient](/cpp/docs/reference/publicca/2.27.0/classgoogle_1_1cloud_1_1publicca__v1_1_1PublicCertificateAuthorityServiceClient).

The optional `options` argument may be used to configure aspects of the returned [`PublicCertificateAuthorityServiceConnection`](/cpp/docs/reference/publicca/2.27.0/classgoogle_1_1cloud_1_1publicca__v1_1_1PublicCertificateAuthorityServiceConnection). Expected options are any of the types in the following option lists:

-   [`google::cloud::CommonOptionList`](https://cloud.google.com/cpp/docs/reference/common/latest/namespacegoogle_1_1cloud.html)
-   [`google::cloud::GrpcOptionList`](https://cloud.google.com/cpp/docs/reference/common/latest/namespacegoogle_1_1cloud.html)
-   [`google::cloud::UnifiedCredentialsOptionList`](https://cloud.google.com/cpp/docs/reference/common/latest/namespacegoogle_1_1cloud.html)
-   [`google::cloud::publicca_v1::PublicCertificateAuthorityServicePolicyOptionList`](about:invalid#zCSafez)

**Note:** Unexpected options will be ignored. To log unexpected options instead, set `GOOGLE_CLOUD_CPP_ENABLE_CLOG=yes` in the environment.

**Parameter**

**Name**

**Description**

`options`

  

(optional) Configure the [`PublicCertificateAuthorityServiceConnection`](/cpp/docs/reference/publicca/2.27.0/classgoogle_1_1cloud_1_1publicca__v1_1_1PublicCertificateAuthorityServiceConnection) created by this function.

**Returns**

**Type**

**Description**

`std::shared_ptr< PublicCertificateAuthorityServiceConnection >`

### MakeDefaultPublicCertificateAuthorityServiceConnectionIdempotencyPolicy()

**Returns**

**Type**

**Description**

`std::unique_ptr< PublicCertificateAuthorityServiceConnectionIdempotencyPolicy >`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-13 UTC.

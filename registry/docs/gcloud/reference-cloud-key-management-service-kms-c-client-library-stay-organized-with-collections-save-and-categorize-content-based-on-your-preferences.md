-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback

# Cloud Key Management Service (KMS) C++ Client Library Stay organized with collections Save and categorize content based on your preferences.

3.4.0-rc 3.3.0 (latest) 3.2.0 2.48.0-rc 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.1 2.24.0 2.23.0 2.22.1 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.1 2.14.0 2.13.0 2.12.0 2.11.0 2.10.1

An idiomatic C++ client library for [Cloud Key Management Service (KMS)](https://cloud.google.com/kms/), a service that manages keys and performs cryptographic operations in a central cloud service, for direct use by other cloud resources and applications.

While this library is **GA**, please note Google Cloud C++ client libraries do **not** follow [Semantic Versioning](https://semver.org/).

### Quickstart

The following shows the code that you'll run in the `google/cloud/kms/quickstart/` directory, which should give you a taste of the KMS C++ client library API.

```
#include "google/cloud/kms/v1/key_management_client.h"
#include "google/cloud/location.h"
#include <iostream>

int main(int argc, char* argv[]) try {
  if (argc != 3) {
    std::cerr << "Usage: " << argv[0] << " project-id location-id\n";
    return 1;
  }

  auto const location = google::cloud::Location(argv[1], argv[2]);

  namespace kms = ::google::cloud::kms_v1;
  auto client = kms::KeyManagementServiceClient(
      kms::MakeKeyManagementServiceConnection());

  for (auto kr : client.ListKeyRings(location.FullName())) {
    if (!kr) throw std::move(kr).status();
    std::cout << kr->DebugString() << "\n";
  }

  return 0;
} catch (google::cloud::Status const& status) {
  std::cerr << "google::cloud::Status thrown: " << status << "\n";
  return 1;
}
```

### Main classes

This library offers multiple `*Client` classes, which are listed below. Each one of these classes exposes all the RPCs for a service as member functions of the class. This library groups multiple services because they are part of the same product or are often used together. A typical example may be the administrative and data plane operations for a single product.

The library also has other classes that provide helpers, configuration parameters, and infrastructure to mock the `*Client` classes when testing your application.

-   [`kms_inventory_v1::KeyDashboardServiceClient`](/cpp/docs/reference/kms/latest/classgoogle_1_1cloud_1_1kms__inventory__v1_1_1KeyDashboardServiceClient)
-   [`kms_inventory_v1::KeyTrackingServiceClient`](/cpp/docs/reference/kms/latest/classgoogle_1_1cloud_1_1kms__inventory__v1_1_1KeyTrackingServiceClient)
-   [`kms_v1::AutokeyAdminClient`](/cpp/docs/reference/kms/latest/classgoogle_1_1cloud_1_1kms__v1_1_1AutokeyAdminClient)
-   [`kms_v1::AutokeyClient`](/cpp/docs/reference/kms/latest/classgoogle_1_1cloud_1_1kms__v1_1_1AutokeyClient)
-   [`kms_v1::EkmServiceClient`](/cpp/docs/reference/kms/latest/classgoogle_1_1cloud_1_1kms__v1_1_1EkmServiceClient)
-   [`kms_v1::KeyManagementServiceClient`](/cpp/docs/reference/kms/latest/classgoogle_1_1cloud_1_1kms__v1_1_1KeyManagementServiceClient)

### More Information

-   [Error Handling](https://docs.cloud.google.com/cpp/docs/reference/common/latest/common-error-handling.html) - describes how the library reports errors.
-   [How to Override the Default Endpoint](/cpp/docs/reference/kms/latest/kms-override-endpoint) - describes how to override the default endpoint.
-   [How to Override the Authentication Credentials](/cpp/docs/reference/kms/latest/kms-override-authentication) - describes how to change the authentication credentials used by the library.
-   [Override Retry, Backoff, and Idempotency Policies](/cpp/docs/reference/kms/latest/kms-override-retry) - describes how to change the default retry policies.
-   [Environment Variables](/cpp/docs/reference/kms/latest/kms-env) - describes environment variables that can configure the behavior of the library.
-   [How to Override the Default Universe Domain](/cpp/docs/reference/kms/latest/kms-override-universe-domain) - describes how to override the default universe domain.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-13 UTC.

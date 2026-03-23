-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback Stay organized with collections Save and categorize content based on your preferences.

3.4.0-rc 3.3.0 (latest) 3.2.0 2.48.0-rc 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.1 2.24.0 2.23.0 2.22.1 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.1 2.14.0 2.13.0 2.12.0 2.11.0

# Google Cloud Support API C++ Client Library

An idiomatic C++ client library for the [Google Cloud Support API](https://cloud.google.com/support), a service to Manages Google Cloud technical support cases for Customer Care support offerings.

While this library is **GA**, please note that the Google Cloud C++ client libraries do **not** follow [Semantic Versioning](https://semver.org/).

### Quickstart

The following shows the code that you'll run in the `google/cloud/support/quickstart/` directory, which should give you a taste of the Google Cloud Support API C++ client library API.

```
#include "google/cloud/support/v2/case_client.h"
#include "google/cloud/project.h"
#include <iostream>

int main(int argc, char* argv[]) try {
  if (argc != 2) {
    std::cerr << "Usage: " << argv[0] << " project-id\n";
    return 1;
  }

  namespace support = ::google::cloud::support_v2;
  auto client =
      support::CaseServiceClient(support::MakeCaseServiceConnection());

  auto const project = google::cloud::Project(argv[1]);
  for (auto c : client.ListCases(project.FullName())) {
    if (!c) throw std::move(c).status();
    std::cout << c->DebugString() << "\n";
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

-   [`support_v2::CaseAttachmentServiceClient`](/cpp/docs/reference/support/2.31.0/classgoogle_1_1cloud_1_1support__v2_1_1CaseAttachmentServiceClient)
-   [`support_v2::CaseServiceClient`](/cpp/docs/reference/support/2.31.0/classgoogle_1_1cloud_1_1support__v2_1_1CaseServiceClient)
-   [`support_v2::CommentServiceClient`](/cpp/docs/reference/support/2.31.0/classgoogle_1_1cloud_1_1support__v2_1_1CommentServiceClient)

### More Information

-   [Error Handling](https://cloud.google.com/cpp/docs/reference/common/latest/common-error-handling.html) - describes how the library reports errors.
-   [How to Override the Default Endpoint](/cpp/docs/reference/support/2.31.0/support-override-endpoint) - describes how to override the default endpoint.
-   [How to Override the Authentication Credentials](/cpp/docs/reference/support/2.31.0/support-override-authentication) - describes how to change the authentication credentials used by the library.
-   [Override Retry, Backoff, and Idempotency Policies](/cpp/docs/reference/support/2.31.0/support-override-retry) - describes how to change the default retry policies.
-   [Environment Variables](/cpp/docs/reference/support/2.31.0/support-env) - describes environment variables that can configure the behavior of the library.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-13 UTC.

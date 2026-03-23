-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback

# Essential Contacts API C++ Client Library Stay organized with collections Save and categorize content based on your preferences.

3.4.0-rc 3.3.0 (latest) 3.2.0 2.48.0-rc 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.1 2.24.0 2.23.0 2.22.1 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.1 2.14.0 2.13.0 2.12.0

Many Google Cloud services, such as Cloud Billing, send out notifications to share important information with Google Cloud users. By default, these notifications are sent to members with certain Identity and Access Management (IAM) roles. With the [Essential Contacts API](https://cloud.google.com/essentialcontacts), you can customize who receives notifications by providing your own list of contacts.

While this library is **GA**, please note that the Google Cloud C++ client libraries do **not** follow [Semantic Versioning](https://semver.org/).

### Quickstart

The following shows the code that you'll run in the `google/cloud/essentialcontacts/quickstart/` directory, which should give you a taste of the Essential Contacts API C++ client library API.

```
#include "google/cloud/essentialcontacts/v1/essential_contacts_client.h"
#include "google/cloud/project.h"
#include <iostream>

int main(int argc, char* argv[]) try {
  if (argc != 2) {
    std::cerr << "Usage: " << argv[0] << " project-id\n";
    return 1;
  }

  namespace essentialcontacts = ::google::cloud::essentialcontacts_v1;
  auto client = essentialcontacts::EssentialContactsServiceClient(
      essentialcontacts::MakeEssentialContactsServiceConnection());

  auto const project = google::cloud::Project(argv[1]);
  for (auto r : client.ListContacts(project.FullName())) {
    if (!r) throw std::move(r).status();
    std::cout << r->DebugString() << "\n";
  }

  return 0;
} catch (google::cloud::Status const& status) {
  std::cerr << "google::cloud::Status thrown: " << status << "\n";
  return 1;
}
```

### Main classes

The main class in this library is [`essentialcontacts_v1::EssentialContactsServiceClient`](/cpp/docs/reference/essentialcontacts/latest/classgoogle_1_1cloud_1_1essentialcontacts__v1_1_1EssentialContactsServiceClient). All RPCs are exposed as member functions of this class. Other classes provide helpers, configuration parameters, and infrastructure to mock [`essentialcontacts_v1::EssentialContactsServiceClient`](/cpp/docs/reference/essentialcontacts/latest/classgoogle_1_1cloud_1_1essentialcontacts__v1_1_1EssentialContactsServiceClient) when testing your application.

### More Information

-   [Error Handling](https://docs.cloud.google.com/cpp/docs/reference/common/latest/common-error-handling.html) - describes how the library reports errors.
-   [How to Override the Default Endpoint](/cpp/docs/reference/essentialcontacts/latest/essentialcontacts-override-endpoint) - describes how to override the default endpoint.
-   [How to Override the Authentication Credentials](/cpp/docs/reference/essentialcontacts/latest/essentialcontacts-override-authentication) - describes how to change the authentication credentials used by the library.
-   [Override Retry, Backoff, and Idempotency Policies](/cpp/docs/reference/essentialcontacts/latest/essentialcontacts-override-retry) - describes how to change the default retry policies.
-   [Environment Variables](/cpp/docs/reference/essentialcontacts/latest/essentialcontacts-env) - describes environment variables that can configure the behavior of the library.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-13 UTC.

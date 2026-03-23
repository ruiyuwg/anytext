-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback

# Cloud Spanner C++ Client Library Stay organized with collections Save and categorize content based on your preferences.

3.4.0-rc 3.3.0 (latest) 3.2.0 2.48.0-rc 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.1 2.24.0 2.23.0 2.22.1 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.1 2.14.0 2.13.0 2.12.0 2.11.0

The Cloud Spanner C++ Client library offers types and functions to use Cloud Spanner from C++ applications.

### Quickstart

The following "Hello World" program should give you a sense of how to use this library. This program is also used to illustrate how to incorporate the library into your project.

```
#include "google/cloud/spanner/client.h"
#include <iostream>

int main(int argc, char* argv[]) {
  if (argc != 4) {
    std::cerr << "Usage: " << argv[0]
              << " project-id instance-id database-id\n";
    return 1;
  }

  namespace spanner = ::google::cloud::spanner;
  spanner::Client client(
      spanner::MakeConnection(spanner::Database(argv[1], argv[2], argv[3])));

  auto rows =
      client.ExecuteQuery(spanner::SqlStatement("SELECT 'Hello World'"));

  for (auto const& row : spanner::StreamOf<std::tuple<std::string>>(rows)) {
    if (!row) {
      std::cerr << row.status() << "\n";
      return 1;
    }
    std::cout << std::get<0>(*row) << "\n";
  }

  return 0;
}
```

### More Information

-   Read more about [Cloud Spanner](https://cloud.google.com/spanner/docs/)
-   [`Client::ExecuteQuery()`](/cpp/docs/reference/spanner/latest/classgoogle_1_1cloud_1_1spanner_1_1Client#classgoogle_1_1cloud_1_1spanner_1_1Client_1a8e2afee42f535c0436d9161c54b84179) to execute SQL queries in Cloud Spanner.
-   [`Client::Commit()`](/cpp/docs/reference/spanner/latest/classgoogle_1_1cloud_1_1spanner_1_1Client#classgoogle_1_1cloud_1_1spanner_1_1Client_1ae83521aef8045ac04b0a5dc85b08a2d9) to execute read-write transactions in Cloud Spanner.
-   [`Client::Read()`](/cpp/docs/reference/spanner/latest/classgoogle_1_1cloud_1_1spanner_1_1Client#classgoogle_1_1cloud_1_1spanner_1_1Client_1a167955c44cd3ccb46ffe07cad6e7e52b) to read the rows in a table.
-   [Error Handling](/cpp/docs/reference/spanner/latest/spanner-error-handling) to learn how the library reports run-time errors.
-   [Environment Variables](/cpp/docs/reference/spanner/latest/spanner-env) for environment variables affecting the library. Some of these environment variables enable logging to the console. This can be an effective approach to diagnose runtime problems.
-   [Override Retry, Backoff, and Re-Run Policies](/cpp/docs/reference/spanner/latest/spanner-retry-policies) to learn how to override the default retry policies used by the library.
-   [Override the default endpoint](/cpp/docs/reference/spanner/latest/spanner-endpoint-example)
-   [Override the authentication configuration](/cpp/docs/reference/spanner/latest/spanner-auth-example)
-   [Override the default universe domain](/cpp/docs/reference/spanner/latest/spanner-universe-domain-example)
-   [Mocking the Cloud Spanner C++ Client with Google Mock](/cpp/docs/reference/spanner/latest/spanner-mocking)
-   [Support Isolation Level](/cpp/docs/reference/spanner/latest/spanner-isolation-level-example)
-   The [Setting up your development environment](https://cloud.google.com/cpp/docs/setup) guide describes how to set up a C++ development environment in various platforms, including the Google Cloud C++ client libraries.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-13 UTC.

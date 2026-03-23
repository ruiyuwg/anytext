-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback Stay organized with collections Save and categorize content based on your preferences.

3.4.0-rc 3.3.0 (latest) 3.2.0 2.48.0-rc 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.1 2.24.0 2.23.0 2.22.1 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.1 2.14.0 2.13.0 2.12.0 2.11.0

# Google Cloud Memorystore for Redis API C++ Client Library

An idiomatic C++ client library for the [Google Cloud Memorystore for Redis API](https://cloud.google.com/memorystore/docs/redis), a service to create and manage Redis instances on the Google Cloud Platform.

While this library is **GA**, please note Google Cloud C++ client libraries do **not** follow [Semantic Versioning](https://semver.org/).

### Quickstart

The following shows the code that you'll run in the `google/cloud/redis/quickstart/` directory, which should give you a taste of the Google Cloud Memorystore for Redis API C++ client library API.

```
#include "google/cloud/redis/v1/cloud_redis_client.h"
#include "google/cloud/project.h"
#include <iostream>

int main(int argc, char* argv[]) try {
  if (argc != 2) {
    std::cerr << "Usage: " << argv[0] << " project-id\n";
    return 1;
  }

  namespace redis = ::google::cloud::redis_v1;
  auto client = redis::CloudRedisClient(redis::MakeCloudRedisConnection());

  auto const project_id = std::string(argv[1]);
  auto const parent = "projects/" + project_id + "/locations/-";
  for (auto r : client.ListInstances(parent)) {
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

The main class in this library is [`redis_v1::CloudRedisClient`](/cpp/docs/reference/redis/2.14.0/classgoogle_1_1cloud_1_1redis__v1_1_1CloudRedisClient). All RPCs are exposed as member functions of this class. Other classes provide helpers, configuration parameters, and infrastructure to mock [`redis_v1::CloudRedisClient`](/cpp/docs/reference/redis/2.14.0/classgoogle_1_1cloud_1_1redis__v1_1_1CloudRedisClient) when testing your application.

### More Information

-   [Error Handling](https://cloud.google.com/cpp/docs/reference/common/latest/common-error-handling.html) - describes how the library reports errors.
-   [How to Override the Default Endpoint](/cpp/docs/reference/redis/2.14.0/redis-override-endpoint) - describes how to override the default endpoint.
-   [How to Override the Authentication Credentials](/cpp/docs/reference/redis/2.14.0/redis-override-authentication) - describes how to change the authentication credentials used by the library.
-   [Override Retry, Backoff, and Idempotency Policies](/cpp/docs/reference/redis/2.14.0/redis-override-retry) - describes how to change the default retry policies.
-   [Environment Variables](/cpp/docs/reference/redis/2.14.0/redis-env) - describes environment variables that can configure the behavior of the library.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-13 UTC.

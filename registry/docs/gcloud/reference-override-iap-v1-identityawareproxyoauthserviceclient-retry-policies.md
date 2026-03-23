-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback Stay organized with collections Save and categorize content based on your preferences.

3.4.0-rc 3.3.0 (latest) 3.2.0 2.48.0-rc 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.1 2.24.0 2.23.0 2.22.1 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.1 2.14.0 2.13.0 2.12.0 2.11.0

# Override iap\_v1::IdentityAwareProxyOAuthServiceClient Retry Policies

This shows how to override the retry policies for iap\_v1::IdentityAwareProxyOAuthServiceClient:

  ```
  auto options =
      google::cloud::Options{}
          .set<
              google::cloud::iap_v1::
                  IdentityAwareProxyOAuthServiceConnectionIdempotencyPolicyOption>(
              CustomIdempotencyPolicy().clone())
          .set<google::cloud::iap_v1::
                   IdentityAwareProxyOAuthServiceRetryPolicyOption>(
              google::cloud::iap_v1::
                  IdentityAwareProxyOAuthServiceLimitedErrorCountRetryPolicy(3)
                      .clone())
          .set<google::cloud::iap_v1::
                   IdentityAwareProxyOAuthServiceBackoffPolicyOption>(
              google::cloud::ExponentialBackoffPolicy(
                  /*initial_delay=*/std::chrono::milliseconds(200),
                  /*maximum_delay=*/std::chrono::seconds(45),
                  /*scaling=*/2.0)
                  .clone());
  auto connection =
      google::cloud::iap_v1::MakeIdentityAwareProxyOAuthServiceConnection(
          options);

  // c1 and c2 share the same retry policies
  auto c1 =
      google::cloud::iap_v1::IdentityAwareProxyOAuthServiceClient(connection);
  auto c2 =
      google::cloud::iap_v1::IdentityAwareProxyOAuthServiceClient(connection);

  // You can override any of the policies in a new client. This new client
  // will share the policies from c1 (or c2) *except* for the retry policy.
  auto c3 = google::cloud::iap_v1::IdentityAwareProxyOAuthServiceClient(
      connection,
      google::cloud::Options{}
          .set<google::cloud::iap_v1::
                   IdentityAwareProxyOAuthServiceRetryPolicyOption>(
              google::cloud::iap_v1::
                  IdentityAwareProxyOAuthServiceLimitedTimeRetryPolicy(
                      std::chrono::minutes(5))
                      .clone()));

  // You can also override the policies in a single call:
  // c3.SomeRpc(..., google::cloud::Options{}
  //     .set<google::cloud::iap_v1::IdentityAwareProxyOAuthServiceRetryPolicyOption>(
  //       google::cloud::iap_v1::IdentityAwareProxyOAuthServiceLimitedErrorCountRetryPolicy(10).clone()));
```

Assuming you have created a custom idempotency policy. Such as:

```
class CustomIdempotencyPolicy
    : public google::cloud::iap_v1::
          IdentityAwareProxyOAuthServiceConnectionIdempotencyPolicy {
 public:
  ~CustomIdempotencyPolicy() override = default;
  std::unique_ptr<google::cloud::iap_v1::
                      IdentityAwareProxyOAuthServiceConnectionIdempotencyPolicy>
  clone() const override {
    return std::make_unique<CustomIdempotencyPolicy>(*this);
  }
  // Override inherited functions to define as needed.
};
```

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-13 UTC.

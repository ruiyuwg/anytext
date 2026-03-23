-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback Stay organized with collections Save and categorize content based on your preferences.

3.4.0-rc 3.3.0 (latest) 3.2.0 2.48.0-rc 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.1 2.24.0 2.23.0 2.22.1 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.1 2.14.0 2.13.0 2.12.0 2.11.0

# Override Retry, Backoff, and Idempotency Policies

When it is safe to do so, the library automatically retries requests that fail due to a transient error. The library then uses [exponential backoff](https://en.wikipedia.org/wiki/Exponential_backoff) to backoff before trying again. Which operations are considered safe to retry, which errors are treated as transient failures, the details of the exponential backoff algorithm, and for how long the library retries are all configurable via policies.

This document provides examples showing how to override the default policies.

The policies can be set when the `*Connection` object is created. The library provides default policies for any policy that is not set. The application can also override some (or all) policies when the `*Client` object is created. This can be useful if multiple `*Client` objects share the same `*Connection` object, but you want different retry behavior in some of the clients. Finally, the application can override some retry policies when calling a specific member function.

The library uses three different options to control the retry loop. The options have per-client names.

## Configuring the transient errors and retry duration

The `*RetryPolicyOption` controls:

-   Which errors are to be treated as transient errors.
-   How long the library will keep retrying transient errors.

You can provide your own class for this option. The library also provides two built-in policies:

-   `*LimitedErrorCountRetryPolicy`: stops retrying after a specified number of transient errors.
-   `*LimitedTimeRetryPolicy`: stops retrying after a specified time.

Note that a library may have more than one version of these classes. Their name match the `*Client` and `*Connection` object they are intended to be used with. Some `*Client` objects treat different error codes as transient errors. In most cases, only [kUnavailable](https://cloud.google.com/cpp/docs/reference/common/latest/namespacegoogle_1_1cloud_1a90e17f75452470f0f3ee1a06ffe58847.html) is treated as a transient error.

## Controlling the backoff algorithm

The `*BackoffPolicyOption` controls how long the client library will wait before retrying a request that failed with a transient error. You can provide your own class for this option.

The only built-in backoff policy is [`ExponentialBackoffPolicy`](https://cloud.google.com/cpp/docs/reference/common/latest/namespacegoogle_1_1cloud.html). This class implements a truncated exponential backoff algorithm, with jitter. In summary, it doubles the current backoff time after each failure. The actual backoff time for an RPC is chosen at random, but never exceeds the current backoff. The current backoff is doubled after each failure, but never exceeds (or is "truncated") if it reaches a prescribed maximum.

## Controlling which operations are retryable

The `*IdempotencyPolicyOption` controls which requests are retryable, as some requests are never safe to retry.

Only one built-in idempotency policy is provided by the library. The name matches the name of the client it is intended for. For example, `FooBarClient` will use `FooBarIdempotencyPolicy`. This policy is very conservative.

## Example

For example, this will override the retry policies for `dialogflow_cx::AgentsClient`:

  ```
  auto options =
      google::cloud::Options{}
          .set<google::cloud::dialogflow_cx::
                   AgentsConnectionIdempotencyPolicyOption>(
              CustomIdempotencyPolicy().clone())
          .set<google::cloud::dialogflow_cx::AgentsRetryPolicyOption>(
              google::cloud::dialogflow_cx::AgentsLimitedErrorCountRetryPolicy(
                  3)
                  .clone())
          .set<google::cloud::dialogflow_cx::AgentsBackoffPolicyOption>(
              google::cloud::ExponentialBackoffPolicy(
                  /*initial_delay=*/std::chrono::milliseconds(200),
                  /*maximum_delay=*/std::chrono::seconds(45),
                  /*scaling=*/2.0)
                  .clone());
  auto connection = google::cloud::dialogflow_cx::MakeAgentsConnection(options);

  // c1 and c2 share the same retry policies
  auto c1 = google::cloud::dialogflow_cx::AgentsClient(connection);
  auto c2 = google::cloud::dialogflow_cx::AgentsClient(connection);

  // You can override any of the policies in a new client. This new client
  // will share the policies from c1 (or c2) *except* for the retry policy.
  auto c3 = google::cloud::dialogflow_cx::AgentsClient(
      connection,
      google::cloud::Options{}
          .set<google::cloud::dialogflow_cx::AgentsRetryPolicyOption>(
              google::cloud::dialogflow_cx::AgentsLimitedTimeRetryPolicy(
                  std::chrono::minutes(5))
                  .clone()));

  // You can also override the policies in a single call:
  // c3.SomeRpc(..., google::cloud::Options{}
  //     .set<google::cloud::dialogflow_cx::AgentsRetryPolicyOption>(
  //       google::cloud::dialogflow_cx::AgentsLimitedErrorCountRetryPolicy(10).clone()));
```

This assumes you have created a custom idempotency policy. Such as:

```
class CustomIdempotencyPolicy
    : public google::cloud::dialogflow_cx::AgentsConnectionIdempotencyPolicy {
 public:
  ~CustomIdempotencyPolicy() override = default;
  std::unique_ptr<
      google::cloud::dialogflow_cx::AgentsConnectionIdempotencyPolicy>
  clone() const override {
    return std::make_unique<CustomIdempotencyPolicy>(*this);
  }
  // Override inherited functions to define as needed.
};
```

This will override the polling policies for `dialogflow_cx::AgentsClient`

  ```

  // The polling policy controls how the client waits for long-running
  // operations. `GenericPollingPolicy<>` combines existing policies.
  // In this case, keep polling until the operation completes (with success
  // or error) or 45 minutes, whichever happens first. Initially pause for
  // 10 seconds between polling requests, increasing the pause by a factor
  // of 4 until it becomes 2 minutes.
  auto options =
      google::cloud::Options{}
          .set<google::cloud::dialogflow_cx::AgentsPollingPolicyOption>(
              google::cloud::GenericPollingPolicy<
                  google::cloud::dialogflow_cx::AgentsRetryPolicyOption::Type,
                  google::cloud::dialogflow_cx::AgentsBackoffPolicyOption::
                      Type>(
                  google::cloud::dialogflow_cx::AgentsLimitedTimeRetryPolicy(
                      /*maximum_duration=*/std::chrono::minutes(45))
                      .clone(),
                  google::cloud::ExponentialBackoffPolicy(
                      /*initial_delay=*/std::chrono::seconds(10),
                      /*maximum_delay=*/std::chrono::minutes(2),
                      /*scaling=*/4.0)
                      .clone())
                  .clone());

  auto connection = google::cloud::dialogflow_cx::MakeAgentsConnection(options);

  // c1 and c2 share the same polling policies.
  auto c1 = google::cloud::dialogflow_cx::AgentsClient(connection);
  auto c2 = google::cloud::dialogflow_cx::AgentsClient(connection);
```

Follow these links to find examples for other `*Client` classes:

-   [`dialogflow_cx::AgentsClient`](/cpp/docs/reference/dialogflow_cx/2.30.0/dialogflow_cx_1_1AgentsClient-retry-snippet)
-   [`dialogflow_cx::ChangelogsClient`](/cpp/docs/reference/dialogflow_cx/2.30.0/dialogflow_cx_1_1ChangelogsClient-retry-snippet)
-   [`dialogflow_cx::DeploymentsClient`](/cpp/docs/reference/dialogflow_cx/2.30.0/dialogflow_cx_1_1DeploymentsClient-retry-snippet)
-   [`dialogflow_cx::EntityTypesClient`](/cpp/docs/reference/dialogflow_cx/2.30.0/dialogflow_cx_1_1EntityTypesClient-retry-snippet)
-   [`dialogflow_cx::EnvironmentsClient`](/cpp/docs/reference/dialogflow_cx/2.30.0/dialogflow_cx_1_1EnvironmentsClient-retry-snippet)
-   [`dialogflow_cx::ExperimentsClient`](/cpp/docs/reference/dialogflow_cx/2.30.0/dialogflow_cx_1_1ExperimentsClient-retry-snippet)
-   [`dialogflow_cx::FlowsClient`](/cpp/docs/reference/dialogflow_cx/2.30.0/dialogflow_cx_1_1FlowsClient-retry-snippet)
-   [`dialogflow_cx::GeneratorsClient`](/cpp/docs/reference/dialogflow_cx/2.30.0/dialogflow_cx_1_1GeneratorsClient-retry-snippet)
-   [`dialogflow_cx::IntentsClient`](/cpp/docs/reference/dialogflow_cx/2.30.0/dialogflow_cx_1_1IntentsClient-retry-snippet)
-   [`dialogflow_cx::PagesClient`](/cpp/docs/reference/dialogflow_cx/2.30.0/dialogflow_cx_1_1PagesClient-retry-snippet)
-   [`dialogflow_cx::SecuritySettingsServiceClient`](/cpp/docs/reference/dialogflow_cx/2.30.0/dialogflow_cx_1_1SecuritySettingsServiceClient-retry-snippet)
-   [`dialogflow_cx::SessionEntityTypesClient`](/cpp/docs/reference/dialogflow_cx/2.30.0/dialogflow_cx_1_1SessionEntityTypesClient-retry-snippet)
-   [`dialogflow_cx::SessionsClient`](/cpp/docs/reference/dialogflow_cx/2.30.0/dialogflow_cx_1_1SessionsClient-retry-snippet)
-   [`dialogflow_cx::TestCasesClient`](/cpp/docs/reference/dialogflow_cx/2.30.0/dialogflow_cx_1_1TestCasesClient-retry-snippet)
-   [`dialogflow_cx::TransitionRouteGroupsClient`](/cpp/docs/reference/dialogflow_cx/2.30.0/dialogflow_cx_1_1TransitionRouteGroupsClient-retry-snippet)
-   [`dialogflow_cx::VersionsClient`](/cpp/docs/reference/dialogflow_cx/2.30.0/dialogflow_cx_1_1VersionsClient-retry-snippet)
-   [`dialogflow_cx::WebhooksClient`](/cpp/docs/reference/dialogflow_cx/2.30.0/dialogflow_cx_1_1WebhooksClient-retry-snippet)

## More Information

###### See Also

[`google::cloud::Options`](https://cloud.google.com/cpp/docs/reference/common/latest/classgoogle_1_1cloud_1_1Options.html)

###### See Also

[`google::cloud::BackoffPolicy`](https://cloud.google.com/cpp/docs/reference/common/latest/namespacegoogle_1_1cloud.html)

###### See Also

[`google::cloud::ExponentialBackoffPolicy`](https://cloud.google.com/cpp/docs/reference/common/latest/namespacegoogle_1_1cloud.html)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-13 UTC.

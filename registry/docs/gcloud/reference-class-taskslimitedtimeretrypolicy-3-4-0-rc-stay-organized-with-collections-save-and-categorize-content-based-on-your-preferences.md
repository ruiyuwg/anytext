-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [C++](https://docs.cloud.google.com/cpp/docs)
-   [Client libraries](https://docs.cloud.google.com/cpp/docs/reference)

Send feedback

# Class TasksLimitedTimeRetryPolicy (3.4.0-rc) Stay organized with collections Save and categorize content based on your preferences.

3.4.0-rc 3.3.0 (latest) 3.2.0 2.48.0-rc 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.26.0 2.25.1 2.24.0 2.23.0 2.22.1 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.1 2.14.0 2.13.0 2.12.0 2.11.0

A retry policy for [`TasksConnection`](/cpp/docs/reference/run/latest/classgoogle_1_1cloud_1_1run__v2_1_1TasksConnection) based on elapsed time.

This policy stops retrying if:

-   An RPC returns a non-transient error.
-   The elapsed time in the retry loop exceeds a prescribed duration.

In this class the following status codes are treated as transient errors:

-   [`kUnavailable`](https://docs.cloud.google.com/cpp/docs/reference/common/latest/namespacegoogle_1_1cloud_1a90e17f75452470f0f3ee1a06ffe58847.html)

## Constructors

### TasksLimitedTimeRetryPolicy(std::chrono::duration< DurationRep, DurationPeriod >)

Constructor given a `std::chrono::duration<>` object.

###### See Also

[https://en.cppreference.com/w/cpp/chrono/duration](https://en.cppreference.com/w/cpp/chrono/duration) for more information about `std::chrono::duration`.

**Parameters**

**Name**

**Description**

`maximum_duration`

`std::chrono::duration< DurationRep, DurationPeriod >`  

the maximum time allowed before the policy expires. While the application can express this time in any units they desire, the class truncates to milliseconds.

`typename DurationRep`

  

a placeholder to match the `Rep` tparam for `duration's` type. The semantics of this template parameter are documented in `std::chrono::duration<>`. In brief, the underlying arithmetic type used to store the number of ticks. For our purposes it is simply a formal parameter.

`typename DurationPeriod`

  

a placeholder to match the `Period` tparam for `duration's` type. The semantics of this template parameter are documented in `std::chrono::duration<>`. In brief, the length of the tick in seconds, expressed as a `std::ratio<>`. For our purposes it is simply a formal parameter.

### TasksLimitedTimeRetryPolicy(TasksLimitedTimeRetryPolicy &&)

**Parameter**

**Name**

**Description**

`rhs`

`TasksLimitedTimeRetryPolicy &&`  

### TasksLimitedTimeRetryPolicy(TasksLimitedTimeRetryPolicy const &)

**Parameter**

**Name**

**Description**

`rhs`

`TasksLimitedTimeRetryPolicy const &`  

## Functions

### maximum\_duration() const

**Returns**

**Type**

**Description**

`std::chrono::milliseconds`

### virtual OnFailure(Status const &)

**Parameter**

**Name**

**Description**

`status`

`Status const &`  

**Returns**

**Type**

**Description**

`bool`

### virtual IsExhausted() const

**Returns**

**Type**

**Description**

`bool`

### virtual IsPermanentFailure(Status const &) const

**Parameter**

**Name**

**Description**

`status`

`Status const &`  

**Returns**

**Type**

**Description**

`bool`

### virtual clone() const

Creates a new instance of the policy, reset to the initial state.

**Returns**

**Type**

**Description**

`std::unique_ptr< TasksRetryPolicy >`

## Type Aliases

### BaseType

**Alias Of**: `TasksRetryPolicy`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-13 UTC.

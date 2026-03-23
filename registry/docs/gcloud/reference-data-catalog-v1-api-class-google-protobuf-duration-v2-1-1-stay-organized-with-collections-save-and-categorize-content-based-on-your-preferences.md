-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Ruby](https://docs.cloud.google.com/ruby/docs)
-   [Client libraries](https://docs.cloud.google.com/ruby/docs/reference)

Send feedback

# Data Catalog V1 API - Class Google::Protobuf::Duration (v2.1.1) Stay organized with collections Save and categorize content based on your preferences.

Version 2.1.1keyboard\_arrow\_down

-   [2.5.1 (latest)](/ruby/docs/reference/google-cloud-data_catalog-v1/latest/Google-Protobuf-Duration)
-   [2.5.0](/ruby/docs/reference/google-cloud-data_catalog-v1/2.5.0/Google-Protobuf-Duration)
-   [2.4.0](/ruby/docs/reference/google-cloud-data_catalog-v1/2.4.0/Google-Protobuf-Duration)
-   [2.3.1](/ruby/docs/reference/google-cloud-data_catalog-v1/2.3.1/Google-Protobuf-Duration)
-   [2.2.2](/ruby/docs/reference/google-cloud-data_catalog-v1/2.2.2/Google-Protobuf-Duration)
-   [2.1.1](/ruby/docs/reference/google-cloud-data_catalog-v1/2.1.1/Google-Protobuf-Duration)
-   [2.0.0](/ruby/docs/reference/google-cloud-data_catalog-v1/2.0.0/Google-Protobuf-Duration)
-   [1.4.0](/ruby/docs/reference/google-cloud-data_catalog-v1/1.4.0/Google-Protobuf-Duration)
-   [1.3.1](/ruby/docs/reference/google-cloud-data_catalog-v1/1.3.1/Google-Protobuf-Duration)
-   [1.2.0](/ruby/docs/reference/google-cloud-data_catalog-v1/1.2.0/Google-Protobuf-Duration)
-   [1.1.0](/ruby/docs/reference/google-cloud-data_catalog-v1/1.1.0/Google-Protobuf-Duration)
-   [1.0.1](/ruby/docs/reference/google-cloud-data_catalog-v1/1.0.1/Google-Protobuf-Duration)
-   [0.23.0](/ruby/docs/reference/google-cloud-data_catalog-v1/0.23.0/Google-Protobuf-Duration)
-   [0.22.0](/ruby/docs/reference/google-cloud-data_catalog-v1/0.22.0/Google-Protobuf-Duration)
-   [0.21.2](/ruby/docs/reference/google-cloud-data_catalog-v1/0.21.2/Google-Protobuf-Duration)
-   [0.20.1](/ruby/docs/reference/google-cloud-data_catalog-v1/0.20.1/Google-Protobuf-Duration)
-   [0.19.0](/ruby/docs/reference/google-cloud-data_catalog-v1/0.19.0/Google-Protobuf-Duration)
-   [0.18.1](/ruby/docs/reference/google-cloud-data_catalog-v1/0.18.1/Google-Protobuf-Duration)
-   [0.17.0](/ruby/docs/reference/google-cloud-data_catalog-v1/0.17.0/Google-Protobuf-Duration)
-   [0.16.1](/ruby/docs/reference/google-cloud-data_catalog-v1/0.16.1/Google-Protobuf-Duration)
-   [0.15.0](/ruby/docs/reference/google-cloud-data_catalog-v1/0.15.0/Google-Protobuf-Duration)
-   [0.14.0](/ruby/docs/reference/google-cloud-data_catalog-v1/0.14.0/Google-Protobuf-Duration)
-   [0.13.0](/ruby/docs/reference/google-cloud-data_catalog-v1/0.13.0/Google-Protobuf-Duration)
-   [0.12.1](/ruby/docs/reference/google-cloud-data_catalog-v1/0.12.1/Google-Protobuf-Duration)
-   [0.11.0](/ruby/docs/reference/google-cloud-data_catalog-v1/0.11.0/Google-Protobuf-Duration)
-   [0.10.0](/ruby/docs/reference/google-cloud-data_catalog-v1/0.10.0/Google-Protobuf-Duration)
-   [0.9.1](/ruby/docs/reference/google-cloud-data_catalog-v1/0.9.1/Google-Protobuf-Duration)

Reference documentation and code samples for the Data Catalog V1 API class Google::Protobuf::Duration.

A Duration represents a signed, fixed-length span of time represented as a count of seconds and fractions of seconds at nanosecond resolution. It is independent of any calendar and concepts like "day" or "month". It is related to Timestamp in that the difference between two Timestamp values is a Duration and it can be added or subtracted from a Timestamp. Range is approximately +-10,000 years.

## Examples

Example 1: Compute Duration from two Timestamps in pseudo code.

```
Timestamp start = ...;
Timestamp end = ...;
Duration duration = ...;

duration.seconds = end.seconds - start.seconds;
duration.nanos = end.nanos - start.nanos;

if (duration.seconds < 0 && duration.nanos > 0) {
  duration.seconds += 1;
  duration.nanos -= 1000000000;
} else if (duration.seconds > 0 && duration.nanos < 0) {
  duration.seconds -= 1;
  duration.nanos += 1000000000;
}
```

Example 2: Compute Timestamp from Timestamp + Duration in pseudo code.

```
Timestamp start = ...;
Duration duration = ...;
Timestamp end = ...;

end.seconds = start.seconds + duration.seconds;
end.nanos = start.nanos + duration.nanos;

if (end.nanos < 0) {
  end.seconds -= 1;
  end.nanos += 1000000000;
} else if (end.nanos >= 1000000000) {
  end.seconds += 1;
  end.nanos -= 1000000000;
}
```

Example 3: Compute Duration from datetime.timedelta in Python.

```
td = datetime.timedelta(days=3, minutes=10)
duration = Duration()
duration.FromTimedelta(td)
```

## JSON Mapping

In JSON format, the Duration type is encoded as a string rather than an object, where the string ends in the suffix "s" (indicating seconds) and is preceded by the number of seconds, with nanoseconds expressed as fractional seconds. For example, 3 seconds with 0 nanoseconds should be encoded in JSON format as "3s", while 3 seconds and 1 nanosecond should be expressed in JSON format as "3.000000001s", and 3 seconds and 1 microsecond should be expressed in JSON format as "3.000001s".

## Inherits

-   Object

## Extended By

-   Google::Protobuf::MessageExts::ClassMethods

## Includes

-   Google::Protobuf::MessageExts

## Methods

### #nanos

```
def nanos() -> ::Integer
```

**Returns**

-   (::Integer) — Signed fractions of a second at nanosecond resolution of the span of time. Durations less than one second are represented with a 0 `seconds` field and a positive or negative `nanos` field. For durations of one second or more, a non-zero value for the `nanos` field must be of the same sign as the `seconds` field. Must be from -999,999,999 to +999,999,999 inclusive.

### #nanos=

```
def nanos=(value) -> ::Integer
```

**Parameter**

-   **value** (::Integer) — Signed fractions of a second at nanosecond resolution of the span of time. Durations less than one second are represented with a 0 `seconds` field and a positive or negative `nanos` field. For durations of one second or more, a non-zero value for the `nanos` field must be of the same sign as the `seconds` field. Must be from -999,999,999 to +999,999,999 inclusive.

**Returns**

-   (::Integer) — Signed fractions of a second at nanosecond resolution of the span of time. Durations less than one second are represented with a 0 `seconds` field and a positive or negative `nanos` field. For durations of one second or more, a non-zero value for the `nanos` field must be of the same sign as the `seconds` field. Must be from -999,999,999 to +999,999,999 inclusive.

### #seconds

```
def seconds() -> ::Integer
```

**Returns**

-   (::Integer) — Signed seconds of the span of time. Must be from -315,576,000,000 to +315,576,000,000 inclusive. Note: these bounds are computed from: 60 sec/min \* 60 min/hr \* 24 hr/day \* 365.25 days/year \* 10000 years

### #seconds=

```
def seconds=(value) -> ::Integer
```

**Parameter**

-   **value** (::Integer) — Signed seconds of the span of time. Must be from -315,576,000,000 to +315,576,000,000 inclusive. Note: these bounds are computed from: 60 sec/min \* 60 min/hr \* 24 hr/day \* 365.25 days/year \* 10000 years

**Returns**

-   (::Integer) — Signed seconds of the span of time. Must be from -315,576,000,000 to +315,576,000,000 inclusive. Note: these bounds are computed from: 60 sec/min \* 60 min/hr \* 24 hr/day \* 365.25 days/year \* 10000 years

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.

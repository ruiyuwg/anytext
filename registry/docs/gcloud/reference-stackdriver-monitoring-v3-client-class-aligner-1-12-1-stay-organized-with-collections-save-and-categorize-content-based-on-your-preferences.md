-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [PHP](https://docs.cloud.google.com/php/docs)
-   [Client libraries](https://docs.cloud.google.com/php/docs/reference)

Send feedback

# Stackdriver Monitoring V3 Client - Class Aligner (1.12.1) Stay organized with collections Save and categorize content based on your preferences.

2.2.2 (latest) 2.2.1 2.1.2 2.0.1 1.12.1 1.11.1 1.10.3 1.9.0 1.8.0 1.7.1 1.6.0 1.5.1 1.4.0 1.3.2 1.2.2

Reference documentation and code samples for the Stackdriver Monitoring V3 Client class Aligner.

The `Aligner` specifies the operation that will be applied to the data points in each alignment period in a time series. Except for `ALIGN_NONE`, which specifies that no operation be applied, each alignment operation replaces the set of data values in each alignment period with a single value: the result of applying the operation to the data values.

An aligned time series has a single data value at the end of each `alignment_period`. An alignment operation can change the data type of the values, too. For example, if you apply a counting operation to boolean values, the data `value_type` in the original time series is `BOOLEAN`, but the `value_type` in the aligned result is `INT64`.

Protobuf type `google.monitoring.v3.Aggregation.Aligner`

## Namespace

Google \\ Cloud \\ Monitoring \\ V3 \\ Aggregation

## Methods

### static::name

**Parameter**

**Name**

**Description**

`value`

`mixed`  

### static::value

**Parameter**

**Name**

**Description**

`name`

`mixed`  

## Constants

### ALIGN\_NONE

```
Value: 0
```

No alignment. Raw data is returned. Not valid if cross-series reduction is requested. The `value_type` of the result is the same as the `value_type` of the input.

Generated from protobuf enum `ALIGN_NONE = 0;`

### ALIGN\_DELTA

```
Value: 1
```

Align and convert to [DELTA](https://cloud.google.com/php/docs/reference/common-protos/latest/Api.MetricDescriptor.MetricKind.html#_Google_Api_MetricDescriptor_MetricKind__DELTA).

The output is `delta = y1 - y0`. This alignment is valid for [CUMULATIVE](https://cloud.google.com/php/docs/reference/common-protos/latest/Api.MetricDescriptor.MetricKind.html#_Google_Api_MetricDescriptor_MetricKind__CUMULATIVE) and `DELTA` metrics. If the selected alignment period results in periods with no data, then the aligned value for such a period is created by interpolation. The `value_type` of the aligned result is the same as the `value_type` of the input.

Generated from protobuf enum `ALIGN_DELTA = 1;`

### ALIGN\_RATE

```
Value: 2
```

Align and convert to a rate. The result is computed as `rate = (y1 - y0)/(t1 - t0)`, or "delta over time".

Think of this aligner as providing the slope of the line that passes through the value at the start and at the end of the `alignment_period`. This aligner is valid for `CUMULATIVE` and `DELTA` metrics with numeric values. If the selected alignment period results in periods with no data, then the aligned value for such a period is created by interpolation. The output is a `GAUGE` metric with `value_type` `DOUBLE`. If, by "rate", you mean "percentage change", see the `ALIGN_PERCENT_CHANGE` aligner instead.

Generated from protobuf enum `ALIGN_RATE = 2;`

### ALIGN\_INTERPOLATE

```
Value: 3
```

Align by interpolating between adjacent points around the alignment period boundary. This aligner is valid for `GAUGE` metrics with numeric values. The `value_type` of the aligned result is the same as the `value_type` of the input.

Generated from protobuf enum `ALIGN_INTERPOLATE = 3;`

### ALIGN\_NEXT\_OLDER

```
Value: 4
```

Align by moving the most recent data point before the end of the alignment period to the boundary at the end of the alignment period. This aligner is valid for `GAUGE` metrics. The `value_type` of the aligned result is the same as the `value_type` of the input.

Generated from protobuf enum `ALIGN_NEXT_OLDER = 4;`

### ALIGN\_MIN

```
Value: 10
```

Align the time series by returning the minimum value in each alignment period. This aligner is valid for `GAUGE` and `DELTA` metrics with numeric values. The `value_type` of the aligned result is the same as the `value_type` of the input.

Generated from protobuf enum `ALIGN_MIN = 10;`

### ALIGN\_MAX

```
Value: 11
```

Align the time series by returning the maximum value in each alignment period. This aligner is valid for `GAUGE` and `DELTA` metrics with numeric values. The `value_type` of the aligned result is the same as the `value_type` of the input.

Generated from protobuf enum `ALIGN_MAX = 11;`

### ALIGN\_MEAN

```
Value: 12
```

Align the time series by returning the mean value in each alignment period. This aligner is valid for `GAUGE` and `DELTA` metrics with numeric values. The `value_type` of the aligned result is `DOUBLE`.

Generated from protobuf enum `ALIGN_MEAN = 12;`

### ALIGN\_COUNT

```
Value: 13
```

Align the time series by returning the number of values in each alignment period. This aligner is valid for `GAUGE` and `DELTA` metrics with numeric or Boolean values. The `value_type` of the aligned result is `INT64`.

Generated from protobuf enum `ALIGN_COUNT = 13;`

### ALIGN\_SUM

```
Value: 14
```

Align the time series by returning the sum of the values in each alignment period. This aligner is valid for `GAUGE` and `DELTA` metrics with numeric and distribution values. The `value_type` of the aligned result is the same as the `value_type` of the input.

Generated from protobuf enum `ALIGN_SUM = 14;`

### ALIGN\_STDDEV

```
Value: 15
```

Align the time series by returning the standard deviation of the values in each alignment period. This aligner is valid for `GAUGE` and `DELTA` metrics with numeric values. The `value_type` of the output is `DOUBLE`.

Generated from protobuf enum `ALIGN_STDDEV = 15;`

### ALIGN\_COUNT\_TRUE

```
Value: 16
```

Align the time series by returning the number of `True` values in each alignment period. This aligner is valid for `GAUGE` metrics with Boolean values. The `value_type` of the output is `INT64`.

Generated from protobuf enum `ALIGN_COUNT_TRUE = 16;`

### ALIGN\_COUNT\_FALSE

```
Value: 24
```

Align the time series by returning the number of `False` values in each alignment period. This aligner is valid for `GAUGE` metrics with Boolean values. The `value_type` of the output is `INT64`.

Generated from protobuf enum `ALIGN_COUNT_FALSE = 24;`

### ALIGN\_FRACTION\_TRUE

```
Value: 17
```

Align the time series by returning the ratio of the number of `True` values to the total number of values in each alignment period. This aligner is valid for `GAUGE` metrics with Boolean values. The output value is in the range \[0.0, 1.0\] and has `value_type` `DOUBLE`.

Generated from protobuf enum `ALIGN_FRACTION_TRUE = 17;`

### ALIGN\_PERCENTILE\_99

```
Value: 18
```

Align the time series by using [percentile aggregation](https://en.wikipedia.org/wiki/Percentile). The resulting data point in each alignment period is the 99th percentile of all data points in the period. This aligner is valid for `GAUGE` and `DELTA` metrics with distribution values. The output is a `GAUGE` metric with `value_type` `DOUBLE`.

Generated from protobuf enum `ALIGN_PERCENTILE_99 = 18;`

### ALIGN\_PERCENTILE\_95

```
Value: 19
```

Align the time series by using [percentile aggregation](https://en.wikipedia.org/wiki/Percentile). The resulting data point in each alignment period is the 95th percentile of all data points in the period. This aligner is valid for `GAUGE` and `DELTA` metrics with distribution values. The output is a `GAUGE` metric with `value_type` `DOUBLE`.

Generated from protobuf enum `ALIGN_PERCENTILE_95 = 19;`

### ALIGN\_PERCENTILE\_50

```
Value: 20
```

Align the time series by using [percentile aggregation](https://en.wikipedia.org/wiki/Percentile). The resulting data point in each alignment period is the 50th percentile of all data points in the period. This aligner is valid for `GAUGE` and `DELTA` metrics with distribution values. The output is a `GAUGE` metric with `value_type` `DOUBLE`.

Generated from protobuf enum `ALIGN_PERCENTILE_50 = 20;`

### ALIGN\_PERCENTILE\_05

```
Value: 21
```

Align the time series by using [percentile aggregation](https://en.wikipedia.org/wiki/Percentile). The resulting data point in each alignment period is the 5th percentile of all data points in the period. This aligner is valid for `GAUGE` and `DELTA` metrics with distribution values. The output is a `GAUGE` metric with `value_type` `DOUBLE`.

Generated from protobuf enum `ALIGN_PERCENTILE_05 = 21;`

### ALIGN\_PERCENT\_CHANGE

```
Value: 23
```

Align and convert to a percentage change. This aligner is valid for `GAUGE` and `DELTA` metrics with numeric values. This alignment returns `((current - previous)/previous) * 100`, where the value of `previous` is determined based on the `alignment_period`.

If the values of `current` and `previous` are both 0, then the returned value is 0. If only `previous` is 0, the returned value is infinity. A 10-minute moving mean is computed at each point of the alignment period prior to the above calculation to smooth the metric and prevent false positives from very short-lived spikes. The moving mean is only applicable for data whose values are `>= 0`. Any values `< 0` are treated as a missing datapoint, and are ignored. While `DELTA` metrics are accepted by this alignment, special care should be taken that the values for the metric will always be positive. The output is a `GAUGE` metric with `value_type` `DOUBLE`.

Generated from protobuf enum `ALIGN_PERCENT_CHANGE = 23;`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-18 UTC.

-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [.NET](https://docs.cloud.google.com/dotnet/docs)
-   [Client libraries](https://docs.cloud.google.com/dotnet/docs/reference)

Send feedback

# Google Cloud Monitoring v3 API - Enum Aggregation.Types.Aligner (3.5.0) Stay organized with collections Save and categorize content based on your preferences.

Version 3.5.0keyboard\_arrow\_down

-   [3.16.0 (latest)](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/latest/Google.Cloud.Monitoring.V3.Aggregation.Types.Aligner)
-   [3.15.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.15.0/Google.Cloud.Monitoring.V3.Aggregation.Types.Aligner)
-   [3.14.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.14.0/Google.Cloud.Monitoring.V3.Aggregation.Types.Aligner)
-   [3.13.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.13.0/Google.Cloud.Monitoring.V3.Aggregation.Types.Aligner)
-   [3.12.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.12.0/Google.Cloud.Monitoring.V3.Aggregation.Types.Aligner)
-   [3.11.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.11.0/Google.Cloud.Monitoring.V3.Aggregation.Types.Aligner)
-   [3.10.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.10.0/Google.Cloud.Monitoring.V3.Aggregation.Types.Aligner)
-   [3.9.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.9.0/Google.Cloud.Monitoring.V3.Aggregation.Types.Aligner)
-   [3.8.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.8.0/Google.Cloud.Monitoring.V3.Aggregation.Types.Aligner)
-   [3.7.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.7.0/Google.Cloud.Monitoring.V3.Aggregation.Types.Aligner)
-   [3.6.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.6.0/Google.Cloud.Monitoring.V3.Aggregation.Types.Aligner)
-   [3.5.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.5.0/Google.Cloud.Monitoring.V3.Aggregation.Types.Aligner)
-   [3.4.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.4.0/Google.Cloud.Monitoring.V3.Aggregation.Types.Aligner)
-   [3.3.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.3.0/Google.Cloud.Monitoring.V3.Aggregation.Types.Aligner)
-   [3.2.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.2.0/Google.Cloud.Monitoring.V3.Aggregation.Types.Aligner)
-   [3.1.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.1.0/Google.Cloud.Monitoring.V3.Aggregation.Types.Aligner)
-   [3.0.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.0.0/Google.Cloud.Monitoring.V3.Aggregation.Types.Aligner)
-   [2.6.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/2.6.0/Google.Cloud.Monitoring.V3.Aggregation.Types.Aligner)
-   [2.5.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/2.5.0/Google.Cloud.Monitoring.V3.Aggregation.Types.Aligner)
-   [2.4.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/2.4.0/Google.Cloud.Monitoring.V3.Aggregation.Types.Aligner)
-   [2.3.0](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/2.3.0/Google.Cloud.Monitoring.V3.Aggregation.Types.Aligner)

```
public enum Aggregation.Types.Aligner
```

Reference documentation and code samples for the Google Cloud Monitoring v3 API enum Aggregation.Types.Aligner.

The `Aligner` specifies the operation that will be applied to the data points in each alignment period in a time series. Except for `ALIGN_NONE`, which specifies that no operation be applied, each alignment operation replaces the set of data values in each alignment period with a single value: the result of applying the operation to the data values. An aligned time series has a single data value at the end of each `alignment_period`.

An alignment operation can change the data type of the values, too. For example, if you apply a counting operation to boolean values, the data `value_type` in the original time series is `BOOLEAN`, but the `value_type` in the aligned result is `INT64`.

## Namespace

[Google.Cloud.Monitoring.V3](/dotnet/docs/reference/Google.Cloud.Monitoring.V3/3.5.0/Google.Cloud.Monitoring.V3)

## Assembly

Google.Cloud.Monitoring.V3.dll

## Fields

**Name**

**Description**

`AlignCount`

Align the time series by returning the number of values in each alignment period. This aligner is valid for `GAUGE` and `DELTA` metrics with numeric or Boolean values. The `value_type` of the aligned result is `INT64`.

`AlignCountFalse`

Align the time series by returning the number of `False` values in each alignment period. This aligner is valid for `GAUGE` metrics with Boolean values. The `value_type` of the output is `INT64`.

`AlignCountTrue`

Align the time series by returning the number of `True` values in each alignment period. This aligner is valid for `GAUGE` metrics with Boolean values. The `value_type` of the output is `INT64`.

`AlignDelta`

Align and convert to \[DELTA\]\[google.api.MetricDescriptor.MetricKind.DELTA\]. The output is `delta = y1 - y0`.

This alignment is valid for \[CUMULATIVE\]\[google.api.MetricDescriptor.MetricKind.CUMULATIVE\] and `DELTA` metrics. If the selected alignment period results in periods with no data, then the aligned value for such a period is created by interpolation. The `value_type` of the aligned result is the same as the `value_type` of the input.

`AlignFractionTrue`

Align the time series by returning the ratio of the number of `True` values to the total number of values in each alignment period. This aligner is valid for `GAUGE` metrics with Boolean values. The output value is in the range \[0.0, 1.0\] and has `value_type` `DOUBLE`.

`AlignInterpolate`

Align by interpolating between adjacent points around the alignment period boundary. This aligner is valid for `GAUGE` metrics with numeric values. The `value_type` of the aligned result is the same as the `value_type` of the input.

`AlignMax`

Align the time series by returning the maximum value in each alignment period. This aligner is valid for `GAUGE` and `DELTA` metrics with numeric values. The `value_type` of the aligned result is the same as the `value_type` of the input.

`AlignMean`

Align the time series by returning the mean value in each alignment period. This aligner is valid for `GAUGE` and `DELTA` metrics with numeric values. The `value_type` of the aligned result is `DOUBLE`.

`AlignMin`

Align the time series by returning the minimum value in each alignment period. This aligner is valid for `GAUGE` and `DELTA` metrics with numeric values. The `value_type` of the aligned result is the same as the `value_type` of the input.

`AlignNextOlder`

Align by moving the most recent data point before the end of the alignment period to the boundary at the end of the alignment period. This aligner is valid for `GAUGE` metrics. The `value_type` of the aligned result is the same as the `value_type` of the input.

`AlignNone`

No alignment. Raw data is returned. Not valid if cross-series reduction is requested. The `value_type` of the result is the same as the `value_type` of the input.

`AlignPercentChange`

Align and convert to a percentage change. This aligner is valid for `GAUGE` and `DELTA` metrics with numeric values. This alignment returns `((current - previous)/previous) * 100`, where the value of `previous` is determined based on the `alignment_period`.

If the values of `current` and `previous` are both 0, then the returned value is 0. If only `previous` is 0, the returned value is infinity.

A 10-minute moving mean is computed at each point of the alignment period prior to the above calculation to smooth the metric and prevent false positives from very short-lived spikes. The moving mean is only applicable for data whose values are `>= 0`. Any values `< 0` are treated as a missing datapoint, and are ignored. While `DELTA` metrics are accepted by this alignment, special care should be taken that the values for the metric will always be positive. The output is a `GAUGE` metric with `value_type` `DOUBLE`.

`AlignPercentile05`

Align the time series by using [percentile aggregation](https://en.wikipedia.org/wiki/Percentile). The resulting data point in each alignment period is the 5th percentile of all data points in the period. This aligner is valid for `GAUGE` and `DELTA` metrics with distribution values. The output is a `GAUGE` metric with `value_type` `DOUBLE`.

`AlignPercentile50`

Align the time series by using [percentile aggregation](https://en.wikipedia.org/wiki/Percentile). The resulting data point in each alignment period is the 50th percentile of all data points in the period. This aligner is valid for `GAUGE` and `DELTA` metrics with distribution values. The output is a `GAUGE` metric with `value_type` `DOUBLE`.

`AlignPercentile95`

Align the time series by using [percentile aggregation](https://en.wikipedia.org/wiki/Percentile). The resulting data point in each alignment period is the 95th percentile of all data points in the period. This aligner is valid for `GAUGE` and `DELTA` metrics with distribution values. The output is a `GAUGE` metric with `value_type` `DOUBLE`.

`AlignPercentile99`

Align the time series by using [percentile aggregation](https://en.wikipedia.org/wiki/Percentile). The resulting data point in each alignment period is the 99th percentile of all data points in the period. This aligner is valid for `GAUGE` and `DELTA` metrics with distribution values. The output is a `GAUGE` metric with `value_type` `DOUBLE`.

`AlignRate`

Align and convert to a rate. The result is computed as `rate = (y1 - y0)/(t1 - t0)`, or "delta over time". Think of this aligner as providing the slope of the line that passes through the value at the start and at the end of the `alignment_period`.

This aligner is valid for `CUMULATIVE` and `DELTA` metrics with numeric values. If the selected alignment period results in periods with no data, then the aligned value for such a period is created by interpolation. The output is a `GAUGE` metric with `value_type` `DOUBLE`.

If, by "rate", you mean "percentage change", see the `ALIGN_PERCENT_CHANGE` aligner instead.

`AlignStddev`

Align the time series by returning the standard deviation of the values in each alignment period. This aligner is valid for `GAUGE` and `DELTA` metrics with numeric values. The `value_type` of the output is `DOUBLE`.

`AlignSum`

Align the time series by returning the sum of the values in each alignment period. This aligner is valid for `GAUGE` and `DELTA` metrics with numeric and distribution values. The `value_type` of the aligned result is the same as the `value_type` of the input.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-09 UTC.

-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface ScorecardOrBuilder (2.20.0) Stay organized with collections Save and categorize content based on your preferences.

2.89.0 (latest) 2.87.0 2.85.0 2.84.0 2.82.0 2.80.0 2.78.0 2.77.0 2.76.0 2.75.0 2.74.0 2.72.0 2.70.0 2.69.0 2.66.0 2.65.0 2.64.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.6 2.4.0 2.3.0 2.2.6

```
public interface ScorecardOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getDataViewCase()

```
public abstract Scorecard.DataViewCase getDataViewCase()
```

**Returns**

**Type**

**Description**

`[Scorecard.DataViewCase](/java/docs/reference/google-cloud-monitoring-dashboard/2.20.0/com.google.monitoring.dashboard.v1.Scorecard.DataViewCase)`

### getGaugeView()

```
public abstract Scorecard.GaugeView getGaugeView()
```

Will cause the scorecard to show a gauge chart.

`.google.monitoring.dashboard.v1.Scorecard.GaugeView gauge_view = 4;`

**Returns**

**Type**

**Description**

`[Scorecard.GaugeView](/java/docs/reference/google-cloud-monitoring-dashboard/2.20.0/com.google.monitoring.dashboard.v1.Scorecard.GaugeView)`

The gaugeView.

### getGaugeViewOrBuilder()

```
public abstract Scorecard.GaugeViewOrBuilder getGaugeViewOrBuilder()
```

Will cause the scorecard to show a gauge chart.

`.google.monitoring.dashboard.v1.Scorecard.GaugeView gauge_view = 4;`

**Returns**

**Type**

**Description**

`[Scorecard.GaugeViewOrBuilder](/java/docs/reference/google-cloud-monitoring-dashboard/2.20.0/com.google.monitoring.dashboard.v1.Scorecard.GaugeViewOrBuilder)`

### getSparkChartView()

```
public abstract Scorecard.SparkChartView getSparkChartView()
```

Will cause the scorecard to show a spark chart.

`.google.monitoring.dashboard.v1.Scorecard.SparkChartView spark_chart_view = 5;`

**Returns**

**Type**

**Description**

`[Scorecard.SparkChartView](/java/docs/reference/google-cloud-monitoring-dashboard/2.20.0/com.google.monitoring.dashboard.v1.Scorecard.SparkChartView)`

The sparkChartView.

### getSparkChartViewOrBuilder()

```
public abstract Scorecard.SparkChartViewOrBuilder getSparkChartViewOrBuilder()
```

Will cause the scorecard to show a spark chart.

`.google.monitoring.dashboard.v1.Scorecard.SparkChartView spark_chart_view = 5;`

**Returns**

**Type**

**Description**

`[Scorecard.SparkChartViewOrBuilder](/java/docs/reference/google-cloud-monitoring-dashboard/2.20.0/com.google.monitoring.dashboard.v1.Scorecard.SparkChartViewOrBuilder)`

### getThresholds(int index)

```
public abstract Threshold getThresholds(int index)
```

The thresholds used to determine the state of the scorecard given the time series' current value. For an actual value x, the scorecard is in a danger state if x is less than or equal to a danger threshold that triggers below, or greater than or equal to a danger threshold that triggers above. Similarly, if x is above/below a warning threshold that triggers above/below, then the scorecard is in a warning state - unless x also puts it in a danger state. (Danger trumps warning.) As an example, consider a scorecard with the following four thresholds: `<code><code> { value: 90, category: 'DANGER', trigger: 'ABOVE', }, { value: 70, category: 'WARNING', trigger: 'ABOVE', }, { value: 10, category: 'DANGER', trigger: 'BELOW', }, { value: 20, category: 'WARNING', trigger: 'BELOW', } </code></code>` Then: values less than or equal to 10 would put the scorecard in a DANGER state, values greater than 10 but less than or equal to 20 a WARNING state, values strictly between 20 and 70 an OK state, values greater than or equal to 70 but less than 90 a WARNING state, and values greater than or equal to 90 a DANGER state.

`repeated .google.monitoring.dashboard.v1.Threshold thresholds = 6;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[Threshold](/java/docs/reference/google-cloud-monitoring-dashboard/2.20.0/com.google.monitoring.dashboard.v1.Threshold)`

### getThresholdsCount()

```
public abstract int getThresholdsCount()
```

The thresholds used to determine the state of the scorecard given the time series' current value. For an actual value x, the scorecard is in a danger state if x is less than or equal to a danger threshold that triggers below, or greater than or equal to a danger threshold that triggers above. Similarly, if x is above/below a warning threshold that triggers above/below, then the scorecard is in a warning state - unless x also puts it in a danger state. (Danger trumps warning.) As an example, consider a scorecard with the following four thresholds: `<code><code> { value: 90, category: 'DANGER', trigger: 'ABOVE', }, { value: 70, category: 'WARNING', trigger: 'ABOVE', }, { value: 10, category: 'DANGER', trigger: 'BELOW', }, { value: 20, category: 'WARNING', trigger: 'BELOW', } </code></code>` Then: values less than or equal to 10 would put the scorecard in a DANGER state, values greater than 10 but less than or equal to 20 a WARNING state, values strictly between 20 and 70 an OK state, values greater than or equal to 70 but less than 90 a WARNING state, and values greater than or equal to 90 a DANGER state.

`repeated .google.monitoring.dashboard.v1.Threshold thresholds = 6;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getThresholdsList()

```
public abstract List<Threshold> getThresholdsList()
```

The thresholds used to determine the state of the scorecard given the time series' current value. For an actual value x, the scorecard is in a danger state if x is less than or equal to a danger threshold that triggers below, or greater than or equal to a danger threshold that triggers above. Similarly, if x is above/below a warning threshold that triggers above/below, then the scorecard is in a warning state - unless x also puts it in a danger state. (Danger trumps warning.) As an example, consider a scorecard with the following four thresholds: `<code><code> { value: 90, category: 'DANGER', trigger: 'ABOVE', }, { value: 70, category: 'WARNING', trigger: 'ABOVE', }, { value: 10, category: 'DANGER', trigger: 'BELOW', }, { value: 20, category: 'WARNING', trigger: 'BELOW', } </code></code>` Then: values less than or equal to 10 would put the scorecard in a DANGER state, values greater than 10 but less than or equal to 20 a WARNING state, values strictly between 20 and 70 an OK state, values greater than or equal to 70 but less than 90 a WARNING state, and values greater than or equal to 90 a DANGER state.

`repeated .google.monitoring.dashboard.v1.Threshold thresholds = 6;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Threshold](/java/docs/reference/google-cloud-monitoring-dashboard/2.20.0/com.google.monitoring.dashboard.v1.Threshold)>`

### getThresholdsOrBuilder(int index)

```
public abstract ThresholdOrBuilder getThresholdsOrBuilder(int index)
```

The thresholds used to determine the state of the scorecard given the time series' current value. For an actual value x, the scorecard is in a danger state if x is less than or equal to a danger threshold that triggers below, or greater than or equal to a danger threshold that triggers above. Similarly, if x is above/below a warning threshold that triggers above/below, then the scorecard is in a warning state - unless x also puts it in a danger state. (Danger trumps warning.) As an example, consider a scorecard with the following four thresholds: `<code><code> { value: 90, category: 'DANGER', trigger: 'ABOVE', }, { value: 70, category: 'WARNING', trigger: 'ABOVE', }, { value: 10, category: 'DANGER', trigger: 'BELOW', }, { value: 20, category: 'WARNING', trigger: 'BELOW', } </code></code>` Then: values less than or equal to 10 would put the scorecard in a DANGER state, values greater than 10 but less than or equal to 20 a WARNING state, values strictly between 20 and 70 an OK state, values greater than or equal to 70 but less than 90 a WARNING state, and values greater than or equal to 90 a DANGER state.

`repeated .google.monitoring.dashboard.v1.Threshold thresholds = 6;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[ThresholdOrBuilder](/java/docs/reference/google-cloud-monitoring-dashboard/2.20.0/com.google.monitoring.dashboard.v1.ThresholdOrBuilder)`

### getThresholdsOrBuilderList()

```
public abstract List<? extends ThresholdOrBuilder> getThresholdsOrBuilderList()
```

The thresholds used to determine the state of the scorecard given the time series' current value. For an actual value x, the scorecard is in a danger state if x is less than or equal to a danger threshold that triggers below, or greater than or equal to a danger threshold that triggers above. Similarly, if x is above/below a warning threshold that triggers above/below, then the scorecard is in a warning state - unless x also puts it in a danger state. (Danger trumps warning.) As an example, consider a scorecard with the following four thresholds: `<code><code> { value: 90, category: 'DANGER', trigger: 'ABOVE', }, { value: 70, category: 'WARNING', trigger: 'ABOVE', }, { value: 10, category: 'DANGER', trigger: 'BELOW', }, { value: 20, category: 'WARNING', trigger: 'BELOW', } </code></code>` Then: values less than or equal to 10 would put the scorecard in a DANGER state, values greater than 10 but less than or equal to 20 a WARNING state, values strictly between 20 and 70 an OK state, values greater than or equal to 70 but less than 90 a WARNING state, and values greater than or equal to 90 a DANGER state.

`repeated .google.monitoring.dashboard.v1.Threshold thresholds = 6;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.monitoring.dashboard.v1.ThresholdOrBuilder>`

### getTimeSeriesQuery()

```
public abstract TimeSeriesQuery getTimeSeriesQuery()
```

Required. Fields for querying time series data from the Stackdriver metrics API.

`.google.monitoring.dashboard.v1.TimeSeriesQuery time_series_query = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[TimeSeriesQuery](/java/docs/reference/google-cloud-monitoring-dashboard/2.20.0/com.google.monitoring.dashboard.v1.TimeSeriesQuery)`

The timeSeriesQuery.

### getTimeSeriesQueryOrBuilder()

```
public abstract TimeSeriesQueryOrBuilder getTimeSeriesQueryOrBuilder()
```

Required. Fields for querying time series data from the Stackdriver metrics API.

`.google.monitoring.dashboard.v1.TimeSeriesQuery time_series_query = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[TimeSeriesQueryOrBuilder](/java/docs/reference/google-cloud-monitoring-dashboard/2.20.0/com.google.monitoring.dashboard.v1.TimeSeriesQueryOrBuilder)`

### hasGaugeView()

```
public abstract boolean hasGaugeView()
```

Will cause the scorecard to show a gauge chart.

`.google.monitoring.dashboard.v1.Scorecard.GaugeView gauge_view = 4;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the gaugeView field is set.

### hasSparkChartView()

```
public abstract boolean hasSparkChartView()
```

Will cause the scorecard to show a spark chart.

`.google.monitoring.dashboard.v1.Scorecard.SparkChartView spark_chart_view = 5;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the sparkChartView field is set.

### hasTimeSeriesQuery()

```
public abstract boolean hasTimeSeriesQuery()
```

Required. Fields for querying time series data from the Stackdriver metrics API.

`.google.monitoring.dashboard.v1.TimeSeriesQuery time_series_query = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the timeSeriesQuery field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.

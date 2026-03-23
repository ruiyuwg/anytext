-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface XyChartOrBuilder (2.21.0) Stay organized with collections Save and categorize content based on your preferences.

2.89.0 (latest) 2.87.0 2.85.0 2.84.0 2.82.0 2.80.0 2.78.0 2.77.0 2.76.0 2.75.0 2.74.0 2.72.0 2.70.0 2.69.0 2.66.0 2.65.0 2.64.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.6 2.4.0 2.3.0 2.2.6

```
public interface XyChartOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getChartOptions()

```
public abstract ChartOptions getChartOptions()
```

Display options for the chart.

`.google.monitoring.dashboard.v1.ChartOptions chart_options = 8;`

**Returns**

**Type**

**Description**

`[ChartOptions](/java/docs/reference/google-cloud-monitoring-dashboard/2.21.0/com.google.monitoring.dashboard.v1.ChartOptions)`

The chartOptions.

### getChartOptionsOrBuilder()

```
public abstract ChartOptionsOrBuilder getChartOptionsOrBuilder()
```

Display options for the chart.

`.google.monitoring.dashboard.v1.ChartOptions chart_options = 8;`

**Returns**

**Type**

**Description**

`[ChartOptionsOrBuilder](/java/docs/reference/google-cloud-monitoring-dashboard/2.21.0/com.google.monitoring.dashboard.v1.ChartOptionsOrBuilder)`

### getDataSets(int index)

```
public abstract XyChart.DataSet getDataSets(int index)
```

Required. The data displayed in this chart.

`repeated .google.monitoring.dashboard.v1.XyChart.DataSet data_sets = 1 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[XyChart.DataSet](/java/docs/reference/google-cloud-monitoring-dashboard/2.21.0/com.google.monitoring.dashboard.v1.XyChart.DataSet)`

### getDataSetsCount()

```
public abstract int getDataSetsCount()
```

Required. The data displayed in this chart.

`repeated .google.monitoring.dashboard.v1.XyChart.DataSet data_sets = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getDataSetsList()

```
public abstract List<XyChart.DataSet> getDataSetsList()
```

Required. The data displayed in this chart.

`repeated .google.monitoring.dashboard.v1.XyChart.DataSet data_sets = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[DataSet](/java/docs/reference/google-cloud-monitoring-dashboard/2.21.0/com.google.monitoring.dashboard.v1.XyChart.DataSet)>`

### getDataSetsOrBuilder(int index)

```
public abstract XyChart.DataSetOrBuilder getDataSetsOrBuilder(int index)
```

Required. The data displayed in this chart.

`repeated .google.monitoring.dashboard.v1.XyChart.DataSet data_sets = 1 [(.google.api.field_behavior) = REQUIRED];`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[XyChart.DataSetOrBuilder](/java/docs/reference/google-cloud-monitoring-dashboard/2.21.0/com.google.monitoring.dashboard.v1.XyChart.DataSetOrBuilder)`

### getDataSetsOrBuilderList()

```
public abstract List<? extends XyChart.DataSetOrBuilder> getDataSetsOrBuilderList()
```

Required. The data displayed in this chart.

`repeated .google.monitoring.dashboard.v1.XyChart.DataSet data_sets = 1 [(.google.api.field_behavior) = REQUIRED];`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.monitoring.dashboard.v1.XyChart.DataSetOrBuilder>`

### getThresholds(int index)

```
public abstract Threshold getThresholds(int index)
```

Threshold lines drawn horizontally across the chart.

`repeated .google.monitoring.dashboard.v1.Threshold thresholds = 5;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[Threshold](/java/docs/reference/google-cloud-monitoring-dashboard/2.21.0/com.google.monitoring.dashboard.v1.Threshold)`

### getThresholdsCount()

```
public abstract int getThresholdsCount()
```

Threshold lines drawn horizontally across the chart.

`repeated .google.monitoring.dashboard.v1.Threshold thresholds = 5;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### getThresholdsList()

```
public abstract List<Threshold> getThresholdsList()
```

Threshold lines drawn horizontally across the chart.

`repeated .google.monitoring.dashboard.v1.Threshold thresholds = 5;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[Threshold](/java/docs/reference/google-cloud-monitoring-dashboard/2.21.0/com.google.monitoring.dashboard.v1.Threshold)>`

### getThresholdsOrBuilder(int index)

```
public abstract ThresholdOrBuilder getThresholdsOrBuilder(int index)
```

Threshold lines drawn horizontally across the chart.

`repeated .google.monitoring.dashboard.v1.Threshold thresholds = 5;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

**Returns**

**Type**

**Description**

`[ThresholdOrBuilder](/java/docs/reference/google-cloud-monitoring-dashboard/2.21.0/com.google.monitoring.dashboard.v1.ThresholdOrBuilder)`

### getThresholdsOrBuilderList()

```
public abstract List<? extends ThresholdOrBuilder> getThresholdsOrBuilderList()
```

Threshold lines drawn horizontally across the chart.

`repeated .google.monitoring.dashboard.v1.Threshold thresholds = 5;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<? extends com.google.monitoring.dashboard.v1.ThresholdOrBuilder>`

### getTimeshiftDuration()

```
public abstract Duration getTimeshiftDuration()
```

The duration used to display a comparison chart. A comparison chart simultaneously shows values from two similar-length time periods (e.g., week-over-week metrics). The duration must be positive, and it can only be applied to charts with data sets of LINE plot type.

`.google.protobuf.Duration timeshift_duration = 4;`

**Returns**

**Type**

**Description**

`[Duration](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Duration.html)`

The timeshiftDuration.

### getTimeshiftDurationOrBuilder()

```
public abstract DurationOrBuilder getTimeshiftDurationOrBuilder()
```

The duration used to display a comparison chart. A comparison chart simultaneously shows values from two similar-length time periods (e.g., week-over-week metrics). The duration must be positive, and it can only be applied to charts with data sets of LINE plot type.

`.google.protobuf.Duration timeshift_duration = 4;`

**Returns**

**Type**

**Description**

`[DurationOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.DurationOrBuilder.html)`

### getXAxis()

```
public abstract XyChart.Axis getXAxis()
```

The properties applied to the X axis.

`.google.monitoring.dashboard.v1.XyChart.Axis x_axis = 6;`

**Returns**

**Type**

**Description**

`[XyChart.Axis](/java/docs/reference/google-cloud-monitoring-dashboard/2.21.0/com.google.monitoring.dashboard.v1.XyChart.Axis)`

The xAxis.

### getXAxisOrBuilder()

```
public abstract XyChart.AxisOrBuilder getXAxisOrBuilder()
```

The properties applied to the X axis.

`.google.monitoring.dashboard.v1.XyChart.Axis x_axis = 6;`

**Returns**

**Type**

**Description**

`[XyChart.AxisOrBuilder](/java/docs/reference/google-cloud-monitoring-dashboard/2.21.0/com.google.monitoring.dashboard.v1.XyChart.AxisOrBuilder)`

### getY2Axis()

```
public abstract XyChart.Axis getY2Axis()
```

The properties applied to the Y2 axis.

`.google.monitoring.dashboard.v1.XyChart.Axis y2_axis = 9;`

**Returns**

**Type**

**Description**

`[XyChart.Axis](/java/docs/reference/google-cloud-monitoring-dashboard/2.21.0/com.google.monitoring.dashboard.v1.XyChart.Axis)`

The y2Axis.

### getY2AxisOrBuilder()

```
public abstract XyChart.AxisOrBuilder getY2AxisOrBuilder()
```

The properties applied to the Y2 axis.

`.google.monitoring.dashboard.v1.XyChart.Axis y2_axis = 9;`

**Returns**

**Type**

**Description**

`[XyChart.AxisOrBuilder](/java/docs/reference/google-cloud-monitoring-dashboard/2.21.0/com.google.monitoring.dashboard.v1.XyChart.AxisOrBuilder)`

### getYAxis()

```
public abstract XyChart.Axis getYAxis()
```

The properties applied to the Y axis.

`.google.monitoring.dashboard.v1.XyChart.Axis y_axis = 7;`

**Returns**

**Type**

**Description**

`[XyChart.Axis](/java/docs/reference/google-cloud-monitoring-dashboard/2.21.0/com.google.monitoring.dashboard.v1.XyChart.Axis)`

The yAxis.

### getYAxisOrBuilder()

```
public abstract XyChart.AxisOrBuilder getYAxisOrBuilder()
```

The properties applied to the Y axis.

`.google.monitoring.dashboard.v1.XyChart.Axis y_axis = 7;`

**Returns**

**Type**

**Description**

`[XyChart.AxisOrBuilder](/java/docs/reference/google-cloud-monitoring-dashboard/2.21.0/com.google.monitoring.dashboard.v1.XyChart.AxisOrBuilder)`

### hasChartOptions()

```
public abstract boolean hasChartOptions()
```

Display options for the chart.

`.google.monitoring.dashboard.v1.ChartOptions chart_options = 8;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the chartOptions field is set.

### hasTimeshiftDuration()

```
public abstract boolean hasTimeshiftDuration()
```

The duration used to display a comparison chart. A comparison chart simultaneously shows values from two similar-length time periods (e.g., week-over-week metrics). The duration must be positive, and it can only be applied to charts with data sets of LINE plot type.

`.google.protobuf.Duration timeshift_duration = 4;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the timeshiftDuration field is set.

### hasXAxis()

```
public abstract boolean hasXAxis()
```

The properties applied to the X axis.

`.google.monitoring.dashboard.v1.XyChart.Axis x_axis = 6;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the xAxis field is set.

### hasY2Axis()

```
public abstract boolean hasY2Axis()
```

The properties applied to the Y2 axis.

`.google.monitoring.dashboard.v1.XyChart.Axis y2_axis = 9;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the y2Axis field is set.

### hasYAxis()

```
public abstract boolean hasYAxis()
```

The properties applied to the Y axis.

`.google.monitoring.dashboard.v1.XyChart.Axis y_axis = 7;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the yAxis field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.

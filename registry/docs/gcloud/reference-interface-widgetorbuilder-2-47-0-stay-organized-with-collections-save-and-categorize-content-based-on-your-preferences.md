-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface WidgetOrBuilder (2.47.0) Stay organized with collections Save and categorize content based on your preferences.

2.89.0 (latest) 2.87.0 2.85.0 2.84.0 2.82.0 2.80.0 2.78.0 2.77.0 2.76.0 2.75.0 2.74.0 2.72.0 2.70.0 2.69.0 2.66.0 2.65.0 2.64.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.6 2.4.0 2.3.0 2.2.6

```
public interface WidgetOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getAlertChart()

```
public abstract AlertChart getAlertChart()
```

A chart of alert policy data.

`.google.monitoring.dashboard.v1.AlertChart alert_chart = 7;`

**Returns**

**Type**

**Description**

`[AlertChart](/java/docs/reference/google-cloud-monitoring-dashboard/2.47.0/com.google.monitoring.dashboard.v1.AlertChart)`

The alertChart.

### getAlertChartOrBuilder()

```
public abstract AlertChartOrBuilder getAlertChartOrBuilder()
```

A chart of alert policy data.

`.google.monitoring.dashboard.v1.AlertChart alert_chart = 7;`

**Returns**

**Type**

**Description**

`[AlertChartOrBuilder](/java/docs/reference/google-cloud-monitoring-dashboard/2.47.0/com.google.monitoring.dashboard.v1.AlertChartOrBuilder)`

### getBlank()

```
public abstract Empty getBlank()
```

A blank space.

`.google.protobuf.Empty blank = 5;`

**Returns**

**Type**

**Description**

`[Empty](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.Empty.html)`

The blank.

### getBlankOrBuilder()

```
public abstract EmptyOrBuilder getBlankOrBuilder()
```

A blank space.

`.google.protobuf.Empty blank = 5;`

**Returns**

**Type**

**Description**

`[EmptyOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.EmptyOrBuilder.html)`

### getCollapsibleGroup()

```
public abstract CollapsibleGroup getCollapsibleGroup()
```

A widget that groups the other widgets. All widgets that are within the area spanned by the grouping widget are considered member widgets.

`.google.monitoring.dashboard.v1.CollapsibleGroup collapsible_group = 9;`

**Returns**

**Type**

**Description**

`[CollapsibleGroup](/java/docs/reference/google-cloud-monitoring-dashboard/2.47.0/com.google.monitoring.dashboard.v1.CollapsibleGroup)`

The collapsibleGroup.

### getCollapsibleGroupOrBuilder()

```
public abstract CollapsibleGroupOrBuilder getCollapsibleGroupOrBuilder()
```

A widget that groups the other widgets. All widgets that are within the area spanned by the grouping widget are considered member widgets.

`.google.monitoring.dashboard.v1.CollapsibleGroup collapsible_group = 9;`

**Returns**

**Type**

**Description**

`[CollapsibleGroupOrBuilder](/java/docs/reference/google-cloud-monitoring-dashboard/2.47.0/com.google.monitoring.dashboard.v1.CollapsibleGroupOrBuilder)`

### getContentCase()

```
public abstract Widget.ContentCase getContentCase()
```

**Returns**

**Type**

**Description**

`[Widget.ContentCase](/java/docs/reference/google-cloud-monitoring-dashboard/2.47.0/com.google.monitoring.dashboard.v1.Widget.ContentCase)`

### getErrorReportingPanel()

```
public abstract ErrorReportingPanel getErrorReportingPanel()
```

A widget that displays a list of error groups.

`.google.monitoring.dashboard.v1.ErrorReportingPanel error_reporting_panel = 19;`

**Returns**

**Type**

**Description**

`[ErrorReportingPanel](/java/docs/reference/google-cloud-monitoring-dashboard/2.47.0/com.google.monitoring.dashboard.v1.ErrorReportingPanel)`

The errorReportingPanel.

### getErrorReportingPanelOrBuilder()

```
public abstract ErrorReportingPanelOrBuilder getErrorReportingPanelOrBuilder()
```

A widget that displays a list of error groups.

`.google.monitoring.dashboard.v1.ErrorReportingPanel error_reporting_panel = 19;`

**Returns**

**Type**

**Description**

`[ErrorReportingPanelOrBuilder](/java/docs/reference/google-cloud-monitoring-dashboard/2.47.0/com.google.monitoring.dashboard.v1.ErrorReportingPanelOrBuilder)`

### getId()

```
public abstract String getId()
```

Optional. The widget id. Ids may be made up of alphanumerics, dashes and underscores. Widget ids are optional.

`string id = 17 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The id.

### getIdBytes()

```
public abstract ByteString getIdBytes()
```

Optional. The widget id. Ids may be made up of alphanumerics, dashes and underscores. Widget ids are optional.

`string id = 17 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for id.

### getIncidentList()

```
public abstract IncidentList getIncidentList()
```

A widget that shows list of incidents.

`.google.monitoring.dashboard.v1.IncidentList incident_list = 12;`

**Returns**

**Type**

**Description**

`[IncidentList](/java/docs/reference/google-cloud-monitoring-dashboard/2.47.0/com.google.monitoring.dashboard.v1.IncidentList)`

The incidentList.

### getIncidentListOrBuilder()

```
public abstract IncidentListOrBuilder getIncidentListOrBuilder()
```

A widget that shows list of incidents.

`.google.monitoring.dashboard.v1.IncidentList incident_list = 12;`

**Returns**

**Type**

**Description**

`[IncidentListOrBuilder](/java/docs/reference/google-cloud-monitoring-dashboard/2.47.0/com.google.monitoring.dashboard.v1.IncidentListOrBuilder)`

### getLogsPanel()

```
public abstract LogsPanel getLogsPanel()
```

A widget that shows a stream of logs.

`.google.monitoring.dashboard.v1.LogsPanel logs_panel = 10;`

**Returns**

**Type**

**Description**

`[LogsPanel](/java/docs/reference/google-cloud-monitoring-dashboard/2.47.0/com.google.monitoring.dashboard.v1.LogsPanel)`

The logsPanel.

### getLogsPanelOrBuilder()

```
public abstract LogsPanelOrBuilder getLogsPanelOrBuilder()
```

A widget that shows a stream of logs.

`.google.monitoring.dashboard.v1.LogsPanel logs_panel = 10;`

**Returns**

**Type**

**Description**

`[LogsPanelOrBuilder](/java/docs/reference/google-cloud-monitoring-dashboard/2.47.0/com.google.monitoring.dashboard.v1.LogsPanelOrBuilder)`

### getPieChart()

```
public abstract PieChart getPieChart()
```

A widget that displays timeseries data as a pie chart.

`.google.monitoring.dashboard.v1.PieChart pie_chart = 14;`

**Returns**

**Type**

**Description**

`[PieChart](/java/docs/reference/google-cloud-monitoring-dashboard/2.47.0/com.google.monitoring.dashboard.v1.PieChart)`

The pieChart.

### getPieChartOrBuilder()

```
public abstract PieChartOrBuilder getPieChartOrBuilder()
```

A widget that displays timeseries data as a pie chart.

`.google.monitoring.dashboard.v1.PieChart pie_chart = 14;`

**Returns**

**Type**

**Description**

`[PieChartOrBuilder](/java/docs/reference/google-cloud-monitoring-dashboard/2.47.0/com.google.monitoring.dashboard.v1.PieChartOrBuilder)`

### getScorecard()

```
public abstract Scorecard getScorecard()
```

A scorecard summarizing time series data.

`.google.monitoring.dashboard.v1.Scorecard scorecard = 3;`

**Returns**

**Type**

**Description**

`[Scorecard](/java/docs/reference/google-cloud-monitoring-dashboard/2.47.0/com.google.monitoring.dashboard.v1.Scorecard)`

The scorecard.

### getScorecardOrBuilder()

```
public abstract ScorecardOrBuilder getScorecardOrBuilder()
```

A scorecard summarizing time series data.

`.google.monitoring.dashboard.v1.Scorecard scorecard = 3;`

**Returns**

**Type**

**Description**

`[ScorecardOrBuilder](/java/docs/reference/google-cloud-monitoring-dashboard/2.47.0/com.google.monitoring.dashboard.v1.ScorecardOrBuilder)`

### getSectionHeader()

```
public abstract SectionHeader getSectionHeader()
```

A widget that defines a section header for easier navigation of the dashboard.

`.google.monitoring.dashboard.v1.SectionHeader section_header = 21;`

**Returns**

**Type**

**Description**

`[SectionHeader](/java/docs/reference/google-cloud-monitoring-dashboard/2.47.0/com.google.monitoring.dashboard.v1.SectionHeader)`

The sectionHeader.

### getSectionHeaderOrBuilder()

```
public abstract SectionHeaderOrBuilder getSectionHeaderOrBuilder()
```

A widget that defines a section header for easier navigation of the dashboard.

`.google.monitoring.dashboard.v1.SectionHeader section_header = 21;`

**Returns**

**Type**

**Description**

`[SectionHeaderOrBuilder](/java/docs/reference/google-cloud-monitoring-dashboard/2.47.0/com.google.monitoring.dashboard.v1.SectionHeaderOrBuilder)`

### getSingleViewGroup()

```
public abstract SingleViewGroup getSingleViewGroup()
```

A widget that groups the other widgets by using a dropdown menu.

`.google.monitoring.dashboard.v1.SingleViewGroup single_view_group = 22;`

**Returns**

**Type**

**Description**

`[SingleViewGroup](/java/docs/reference/google-cloud-monitoring-dashboard/2.47.0/com.google.monitoring.dashboard.v1.SingleViewGroup)`

The singleViewGroup.

### getSingleViewGroupOrBuilder()

```
public abstract SingleViewGroupOrBuilder getSingleViewGroupOrBuilder()
```

A widget that groups the other widgets by using a dropdown menu.

`.google.monitoring.dashboard.v1.SingleViewGroup single_view_group = 22;`

**Returns**

**Type**

**Description**

`[SingleViewGroupOrBuilder](/java/docs/reference/google-cloud-monitoring-dashboard/2.47.0/com.google.monitoring.dashboard.v1.SingleViewGroupOrBuilder)`

### getText()

```
public abstract Text getText()
```

A raw string or markdown displaying textual content.

`.google.monitoring.dashboard.v1.Text text = 4;`

**Returns**

**Type**

**Description**

`[Text](/java/docs/reference/google-cloud-monitoring-dashboard/2.47.0/com.google.monitoring.dashboard.v1.Text)`

The text.

### getTextOrBuilder()

```
public abstract TextOrBuilder getTextOrBuilder()
```

A raw string or markdown displaying textual content.

`.google.monitoring.dashboard.v1.Text text = 4;`

**Returns**

**Type**

**Description**

`[TextOrBuilder](/java/docs/reference/google-cloud-monitoring-dashboard/2.47.0/com.google.monitoring.dashboard.v1.TextOrBuilder)`

### getTimeSeriesTable()

```
public abstract TimeSeriesTable getTimeSeriesTable()
```

A widget that displays time series data in a tabular format.

`.google.monitoring.dashboard.v1.TimeSeriesTable time_series_table = 8;`

**Returns**

**Type**

**Description**

`[TimeSeriesTable](/java/docs/reference/google-cloud-monitoring-dashboard/2.47.0/com.google.monitoring.dashboard.v1.TimeSeriesTable)`

The timeSeriesTable.

### getTimeSeriesTableOrBuilder()

```
public abstract TimeSeriesTableOrBuilder getTimeSeriesTableOrBuilder()
```

A widget that displays time series data in a tabular format.

`.google.monitoring.dashboard.v1.TimeSeriesTable time_series_table = 8;`

**Returns**

**Type**

**Description**

`[TimeSeriesTableOrBuilder](/java/docs/reference/google-cloud-monitoring-dashboard/2.47.0/com.google.monitoring.dashboard.v1.TimeSeriesTableOrBuilder)`

### getTitle()

```
public abstract String getTitle()
```

Optional. The title of the widget.

`string title = 1 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The title.

### getTitleBytes()

```
public abstract ByteString getTitleBytes()
```

Optional. The title of the widget.

`string title = 1 [(.google.api.field_behavior) = OPTIONAL];`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for title.

### getXyChart()

```
public abstract XyChart getXyChart()
```

A chart of time series data.

`.google.monitoring.dashboard.v1.XyChart xy_chart = 2;`

**Returns**

**Type**

**Description**

`[XyChart](/java/docs/reference/google-cloud-monitoring-dashboard/2.47.0/com.google.monitoring.dashboard.v1.XyChart)`

The xyChart.

### getXyChartOrBuilder()

```
public abstract XyChartOrBuilder getXyChartOrBuilder()
```

A chart of time series data.

`.google.monitoring.dashboard.v1.XyChart xy_chart = 2;`

**Returns**

**Type**

**Description**

`[XyChartOrBuilder](/java/docs/reference/google-cloud-monitoring-dashboard/2.47.0/com.google.monitoring.dashboard.v1.XyChartOrBuilder)`

### hasAlertChart()

```
public abstract boolean hasAlertChart()
```

A chart of alert policy data.

`.google.monitoring.dashboard.v1.AlertChart alert_chart = 7;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the alertChart field is set.

### hasBlank()

```
public abstract boolean hasBlank()
```

A blank space.

`.google.protobuf.Empty blank = 5;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the blank field is set.

### hasCollapsibleGroup()

```
public abstract boolean hasCollapsibleGroup()
```

A widget that groups the other widgets. All widgets that are within the area spanned by the grouping widget are considered member widgets.

`.google.monitoring.dashboard.v1.CollapsibleGroup collapsible_group = 9;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the collapsibleGroup field is set.

### hasErrorReportingPanel()

```
public abstract boolean hasErrorReportingPanel()
```

A widget that displays a list of error groups.

`.google.monitoring.dashboard.v1.ErrorReportingPanel error_reporting_panel = 19;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the errorReportingPanel field is set.

### hasIncidentList()

```
public abstract boolean hasIncidentList()
```

A widget that shows list of incidents.

`.google.monitoring.dashboard.v1.IncidentList incident_list = 12;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the incidentList field is set.

### hasLogsPanel()

```
public abstract boolean hasLogsPanel()
```

A widget that shows a stream of logs.

`.google.monitoring.dashboard.v1.LogsPanel logs_panel = 10;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the logsPanel field is set.

### hasPieChart()

```
public abstract boolean hasPieChart()
```

A widget that displays timeseries data as a pie chart.

`.google.monitoring.dashboard.v1.PieChart pie_chart = 14;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the pieChart field is set.

### hasScorecard()

```
public abstract boolean hasScorecard()
```

A scorecard summarizing time series data.

`.google.monitoring.dashboard.v1.Scorecard scorecard = 3;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the scorecard field is set.

### hasSectionHeader()

```
public abstract boolean hasSectionHeader()
```

A widget that defines a section header for easier navigation of the dashboard.

`.google.monitoring.dashboard.v1.SectionHeader section_header = 21;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the sectionHeader field is set.

### hasSingleViewGroup()

```
public abstract boolean hasSingleViewGroup()
```

A widget that groups the other widgets by using a dropdown menu.

`.google.monitoring.dashboard.v1.SingleViewGroup single_view_group = 22;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the singleViewGroup field is set.

### hasText()

```
public abstract boolean hasText()
```

A raw string or markdown displaying textual content.

`.google.monitoring.dashboard.v1.Text text = 4;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the text field is set.

### hasTimeSeriesTable()

```
public abstract boolean hasTimeSeriesTable()
```

A widget that displays time series data in a tabular format.

`.google.monitoring.dashboard.v1.TimeSeriesTable time_series_table = 8;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the timeSeriesTable field is set.

### hasXyChart()

```
public abstract boolean hasXyChart()
```

A chart of time series data.

`.google.monitoring.dashboard.v1.XyChart xy_chart = 2;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the xyChart field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.

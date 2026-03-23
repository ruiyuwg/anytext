-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface NonProductPerformanceViewOrBuilder (0.30.0) Stay organized with collections Save and categorize content based on your preferences.

1.15.0 (latest) 1.13.0 1.11.0 1.10.0 1.8.0 1.6.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0 0.46.0 0.44.0 0.43.0 0.40.0 0.39.0 0.38.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.0 0.3.0

```
public interface NonProductPerformanceViewOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getClickThroughRate()

```
public abstract double getClickThroughRate()
```

Click-through rate - the number of clicks (`clicks`) divided by the number of impressions (`impressions`) of images and online store links leading to your non-product pages. Metric.

`optional double click_through_rate = 5;`

**Returns**

**Type**

**Description**

`[double](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The clickThroughRate.

### getClicks()

```
public abstract long getClicks()
```

Number of clicks on images and online store links leading to your non-product pages. Metric.

`optional int64 clicks = 3;`

**Returns**

**Type**

**Description**

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The clicks.

### getDate()

```
public abstract Date getDate()
```

Date in the merchant timezone to which metrics apply. Segment.

Condition on `date` is required in the `WHERE` clause.

`.google.type.Date date = 1;`

**Returns**

**Type**

**Description**

`com.google.type.Date`

The date.

### getDateOrBuilder()

```
public abstract DateOrBuilder getDateOrBuilder()
```

Date in the merchant timezone to which metrics apply. Segment.

Condition on `date` is required in the `WHERE` clause.

`.google.type.Date date = 1;`

**Returns**

**Type**

**Description**

`com.google.type.DateOrBuilder`

### getImpressions()

```
public abstract long getImpressions()
```

Number of times images and online store links leading to your non-product pages were shown. Metric.

`optional int64 impressions = 4;`

**Returns**

**Type**

**Description**

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The impressions.

### getWeek()

```
public abstract Date getWeek()
```

First day of the week (Monday) of the metrics date in the merchant timezone. Segment.

`.google.type.Date week = 2;`

**Returns**

**Type**

**Description**

`com.google.type.Date`

The week.

### getWeekOrBuilder()

```
public abstract DateOrBuilder getWeekOrBuilder()
```

First day of the week (Monday) of the metrics date in the merchant timezone. Segment.

`.google.type.Date week = 2;`

**Returns**

**Type**

**Description**

`com.google.type.DateOrBuilder`

### hasClickThroughRate()

```
public abstract boolean hasClickThroughRate()
```

Click-through rate - the number of clicks (`clicks`) divided by the number of impressions (`impressions`) of images and online store links leading to your non-product pages. Metric.

`optional double click_through_rate = 5;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the clickThroughRate field is set.

### hasClicks()

```
public abstract boolean hasClicks()
```

Number of clicks on images and online store links leading to your non-product pages. Metric.

`optional int64 clicks = 3;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the clicks field is set.

### hasDate()

```
public abstract boolean hasDate()
```

Date in the merchant timezone to which metrics apply. Segment.

Condition on `date` is required in the `WHERE` clause.

`.google.type.Date date = 1;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the date field is set.

### hasImpressions()

```
public abstract boolean hasImpressions()
```

Number of times images and online store links leading to your non-product pages were shown. Metric.

`optional int64 impressions = 4;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the impressions field is set.

### hasWeek()

```
public abstract boolean hasWeek()
```

First day of the week (Monday) of the metrics date in the merchant timezone. Segment.

`.google.type.Date week = 2;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the week field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.

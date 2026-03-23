-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface CompetitiveVisibilityBenchmarkViewOrBuilder (0.23.0) Stay organized with collections Save and categorize content based on your preferences.

1.15.0 (latest) 1.13.0 1.11.0 1.10.0 1.8.0 1.6.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0 0.46.0 0.44.0 0.43.0 0.40.0 0.39.0 0.38.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.0 0.3.0

```
public interface CompetitiveVisibilityBenchmarkViewOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getCategoryBenchmarkVisibilityTrend()

```
public abstract double getCategoryBenchmarkVisibilityTrend()
```

Change in visibility based on impressions with respect to the start of the selected time range (or first day with non-zero impressions) for a combined set of merchants with highest visibility approximating the market.

Cannot be filtered on in the 'WHERE' clause.

`optional double category_benchmark_visibility_trend = 6;`

**Returns**

**Type**

**Description**

`[double](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The categoryBenchmarkVisibilityTrend.

### getDate()

```
public abstract Date getDate()
```

Date of this row.

Required in the `SELECT` clause. A condition on `date` is required in the `WHERE` clause.

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

Date of this row.

Required in the `SELECT` clause. A condition on `date` is required in the `WHERE` clause.

`.google.type.Date date = 1;`

**Returns**

**Type**

**Description**

`com.google.type.DateOrBuilder`

### getReportCategoryId()

```
public abstract long getReportCategoryId()
```

Google product category ID to calculate the report for, represented in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436).

Required in the `SELECT` clause. A condition on `report_category_id` is required in the `WHERE` clause.

`optional int64 report_category_id = 3;`

**Returns**

**Type**

**Description**

`[long](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The reportCategoryId.

### getReportCountryCode()

```
public abstract String getReportCountryCode()
```

Country where impressions appeared.

Required in the `SELECT` clause. A condition on `report_country_code` is required in the `WHERE` clause.

`optional string report_country_code = 2;`

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The reportCountryCode.

### getReportCountryCodeBytes()

```
public abstract ByteString getReportCountryCodeBytes()
```

Country where impressions appeared.

Required in the `SELECT` clause. A condition on `report_country_code` is required in the `WHERE` clause.

`optional string report_country_code = 2;`

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes for reportCountryCode.

### getTrafficSource()

```
public abstract TrafficSource.TrafficSourceEnum getTrafficSource()
```

Traffic source of impressions.

Required in the `SELECT` clause.

`optional .google.shopping.merchant.reports.v1beta.TrafficSource.TrafficSourceEnum traffic_source = 4;`

**Returns**

**Type**

**Description**

`[TrafficSource.TrafficSourceEnum](/java/docs/reference/google-shopping-merchant-reports/0.23.0/com.google.shopping.merchant.reports.v1beta.TrafficSource.TrafficSourceEnum)`

The trafficSource.

### getTrafficSourceValue()

```
public abstract int getTrafficSourceValue()
```

Traffic source of impressions.

Required in the `SELECT` clause.

`optional .google.shopping.merchant.reports.v1beta.TrafficSource.TrafficSourceEnum traffic_source = 4;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for trafficSource.

### getYourDomainVisibilityTrend()

```
public abstract double getYourDomainVisibilityTrend()
```

Change in visibility based on impressions for your domain with respect to the start of the selected time range (or first day with non-zero impressions).

Cannot be filtered on in the 'WHERE' clause.

`optional double your_domain_visibility_trend = 5;`

**Returns**

**Type**

**Description**

`[double](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The yourDomainVisibilityTrend.

### hasCategoryBenchmarkVisibilityTrend()

```
public abstract boolean hasCategoryBenchmarkVisibilityTrend()
```

Change in visibility based on impressions with respect to the start of the selected time range (or first day with non-zero impressions) for a combined set of merchants with highest visibility approximating the market.

Cannot be filtered on in the 'WHERE' clause.

`optional double category_benchmark_visibility_trend = 6;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the categoryBenchmarkVisibilityTrend field is set.

### hasDate()

```
public abstract boolean hasDate()
```

Date of this row.

Required in the `SELECT` clause. A condition on `date` is required in the `WHERE` clause.

`.google.type.Date date = 1;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the date field is set.

### hasReportCategoryId()

```
public abstract boolean hasReportCategoryId()
```

Google product category ID to calculate the report for, represented in [Google's product taxonomy](https://support.google.com/merchants/answer/6324436).

Required in the `SELECT` clause. A condition on `report_category_id` is required in the `WHERE` clause.

`optional int64 report_category_id = 3;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the reportCategoryId field is set.

### hasReportCountryCode()

```
public abstract boolean hasReportCountryCode()
```

Country where impressions appeared.

Required in the `SELECT` clause. A condition on `report_country_code` is required in the `WHERE` clause.

`optional string report_country_code = 2;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the reportCountryCode field is set.

### hasTrafficSource()

```
public abstract boolean hasTrafficSource()
```

Traffic source of impressions.

Required in the `SELECT` clause.

`optional .google.shopping.merchant.reports.v1beta.TrafficSource.TrafficSourceEnum traffic_source = 4;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the trafficSource field is set.

### hasYourDomainVisibilityTrend()

```
public abstract boolean hasYourDomainVisibilityTrend()
```

Change in visibility based on impressions for your domain with respect to the start of the selected time range (or first day with non-zero impressions).

Cannot be filtered on in the 'WHERE' clause.

`optional double your_domain_visibility_trend = 5;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the yourDomainVisibilityTrend field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.

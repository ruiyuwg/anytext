-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface ProductView.ItemIssue.ItemIssueSeverity.IssueSeverityPerReportingContextOrBuilder (0.10.0) Stay organized with collections Save and categorize content based on your preferences.

1.15.0 (latest) 1.13.0 1.11.0 1.10.0 1.8.0 1.6.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0 0.46.0 0.44.0 0.43.0 0.40.0 0.39.0 0.38.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.0 0.3.0

```
public static interface ProductView.ItemIssue.ItemIssueSeverity.IssueSeverityPerReportingContextOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getDemotedCountries(int index)

```
public abstract String getDemotedCountries(int index)
```

List of demoted countries in the reporting context, represented in ISO 3166 format.

`repeated string demoted_countries = 3;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the element to return.

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The demotedCountries at the given index.

### getDemotedCountriesBytes(int index)

```
public abstract ByteString getDemotedCountriesBytes(int index)
```

List of demoted countries in the reporting context, represented in ISO 3166 format.

`repeated string demoted_countries = 3;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the value to return.

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes of the demotedCountries at the given index.

### getDemotedCountriesCount()

```
public abstract int getDemotedCountriesCount()
```

List of demoted countries in the reporting context, represented in ISO 3166 format.

`repeated string demoted_countries = 3;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of demotedCountries.

### getDemotedCountriesList()

```
public abstract List<String> getDemotedCountriesList()
```

List of demoted countries in the reporting context, represented in ISO 3166 format.

`repeated string demoted_countries = 3;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

A list containing the demotedCountries.

### getDisapprovedCountries(int index)

```
public abstract String getDisapprovedCountries(int index)
```

List of disapproved countries in the reporting context, represented in ISO 3166 format.

`repeated string disapproved_countries = 2;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the element to return.

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

The disapprovedCountries at the given index.

### getDisapprovedCountriesBytes(int index)

```
public abstract ByteString getDisapprovedCountriesBytes(int index)
```

List of disapproved countries in the reporting context, represented in ISO 3166 format.

`repeated string disapproved_countries = 2;`

**Parameter**

**Name**

**Description**

`index`

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`  

The index of the value to return.

**Returns**

**Type**

**Description**

`[ByteString](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ByteString.html)`

The bytes of the disapprovedCountries at the given index.

### getDisapprovedCountriesCount()

```
public abstract int getDisapprovedCountriesCount()
```

List of disapproved countries in the reporting context, represented in ISO 3166 format.

`repeated string disapproved_countries = 2;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of disapprovedCountries.

### getDisapprovedCountriesList()

```
public abstract List<String> getDisapprovedCountriesList()
```

List of disapproved countries in the reporting context, represented in ISO 3166 format.

`repeated string disapproved_countries = 2;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

A list containing the disapprovedCountries.

### getReportingContext()

```
public abstract ReportingContext.ReportingContextEnum getReportingContext()
```

Reporting context the issue applies to.

`optional .google.shopping.type.ReportingContext.ReportingContextEnum reporting_context = 1;`

**Returns**

**Type**

**Description**

`[ReportingContext.ReportingContextEnum](/java/docs/reference/google-shopping-merchant-reports/0.10.0/com.google.shopping.type.ReportingContext.ReportingContextEnum)`

The reportingContext.

### getReportingContextValue()

```
public abstract int getReportingContextValue()
```

Reporting context the issue applies to.

`optional .google.shopping.type.ReportingContext.ReportingContextEnum reporting_context = 1;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for reportingContext.

### hasReportingContext()

```
public abstract boolean hasReportingContext()
```

Reporting context the issue applies to.

`optional .google.shopping.type.ReportingContext.ReportingContextEnum reporting_context = 1;`

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

Whether the reportingContext field is set.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.

-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Interface ProductStatus.DestinationStatusOrBuilder (0.12.0) Stay organized with collections Save and categorize content based on your preferences.

1.15.0 (latest) 1.13.0 1.11.0 1.10.0 1.8.0 1.6.0 1.4.0 1.3.0 1.2.0 1.1.0 1.0.0 0.26.0 0.24.0 0.23.0 0.20.0 0.19.0 0.18.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.5.0 0.4.0 0.3.0 0.2.0 0.1.0

```
public static interface ProductStatus.DestinationStatusOrBuilder extends MessageOrBuilder
```

## Implements

[MessageOrBuilder](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.MessageOrBuilder.html)

## Methods

### getApprovedCountries(int index)

```
public abstract String getApprovedCountries(int index)
```

List of country codes (ISO 3166-1 alpha-2) where the offer is approved.

`repeated string approved_countries = 2;`

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

The approvedCountries at the given index.

### getApprovedCountriesBytes(int index)

```
public abstract ByteString getApprovedCountriesBytes(int index)
```

List of country codes (ISO 3166-1 alpha-2) where the offer is approved.

`repeated string approved_countries = 2;`

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

The bytes of the approvedCountries at the given index.

### getApprovedCountriesCount()

```
public abstract int getApprovedCountriesCount()
```

List of country codes (ISO 3166-1 alpha-2) where the offer is approved.

`repeated string approved_countries = 2;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of approvedCountries.

### getApprovedCountriesList()

```
public abstract List<String> getApprovedCountriesList()
```

List of country codes (ISO 3166-1 alpha-2) where the offer is approved.

`repeated string approved_countries = 2;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

A list containing the approvedCountries.

### getDisapprovedCountries(int index)

```
public abstract String getDisapprovedCountries(int index)
```

List of country codes (ISO 3166-1 alpha-2) where the offer is disapproved.

`repeated string disapproved_countries = 4;`

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

List of country codes (ISO 3166-1 alpha-2) where the offer is disapproved.

`repeated string disapproved_countries = 4;`

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

List of country codes (ISO 3166-1 alpha-2) where the offer is disapproved.

`repeated string disapproved_countries = 4;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of disapprovedCountries.

### getDisapprovedCountriesList()

```
public abstract List<String> getDisapprovedCountriesList()
```

List of country codes (ISO 3166-1 alpha-2) where the offer is disapproved.

`repeated string disapproved_countries = 4;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

A list containing the disapprovedCountries.

### getPendingCountries(int index)

```
public abstract String getPendingCountries(int index)
```

List of country codes (ISO 3166-1 alpha-2) where the offer is pending approval.

`repeated string pending_countries = 3;`

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

The pendingCountries at the given index.

### getPendingCountriesBytes(int index)

```
public abstract ByteString getPendingCountriesBytes(int index)
```

List of country codes (ISO 3166-1 alpha-2) where the offer is pending approval.

`repeated string pending_countries = 3;`

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

The bytes of the pendingCountries at the given index.

### getPendingCountriesCount()

```
public abstract int getPendingCountriesCount()
```

List of country codes (ISO 3166-1 alpha-2) where the offer is pending approval.

`repeated string pending_countries = 3;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The count of pendingCountries.

### getPendingCountriesList()

```
public abstract List<String> getPendingCountriesList()
```

List of country codes (ISO 3166-1 alpha-2) where the offer is pending approval.

`repeated string pending_countries = 3;`

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

A list containing the pendingCountries.

### getReportingContext()

```
public abstract ReportingContext.ReportingContextEnum getReportingContext()
```

The name of the reporting context.

`.google.shopping.type.ReportingContext.ReportingContextEnum reporting_context = 1;`

**Returns**

**Type**

**Description**

`com.google.shopping.type.ReportingContext.ReportingContextEnum`

The reportingContext.

### getReportingContextValue()

```
public abstract int getReportingContextValue()
```

The name of the reporting context.

`.google.shopping.type.ReportingContext.ReportingContextEnum reporting_context = 1;`

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

The enum numeric value on the wire for reportingContext.

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.

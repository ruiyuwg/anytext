-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class UtilizationReportName (1.2.0) Stay organized with collections Save and categorize content based on your preferences.

1.87.0 (latest) 1.85.0 1.83.0 1.82.0 1.80.0 1.78.0 1.76.0 1.75.0 1.74.0 1.73.0 1.72.0 1.70.0 1.68.0 1.67.0 1.64.0 1.63.0 1.62.0 1.60.0 1.59.0 1.58.0 1.57.0 1.56.0 1.55.0 1.54.0 1.53.0 1.52.0 1.51.0 1.49.0 1.48.0 1.47.0 1.46.0 1.45.0 1.44.0 1.43.0 1.42.0 1.41.0 1.40.0 1.39.0 1.37.0 1.36.0 1.35.0 1.34.0 1.33.0 1.32.0 1.31.0 1.30.0 1.29.0 1.28.0 1.27.0 1.24.0 1.23.0 1.22.0 1.21.0 1.20.0 1.19.0 1.18.0 1.17.0 1.16.0 1.15.0 1.14.0 1.13.0 1.12.0 1.11.0 1.9.0 1.8.0 1.7.0 1.6.0 1.5.0 1.4.0 1.3.5 1.2.0 1.1.1 1.0.5

```
public class UtilizationReportName implements ResourceName
```

## Inheritance

[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> UtilizationReportName

## Implements

com.google.api.resourcenames.ResourceName

## Inherited Members

[Object.clone()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#clone--)

[Object.equals(Object)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#equals-java.lang.Object-)

[Object.finalize()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#finalize--)

[Object.getClass()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#getClass--)

[Object.hashCode()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#hashCode--)

[Object.notify()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notify--)

[Object.notifyAll()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notifyAll--)

[Object.toString()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#toString--)

[Object.wait()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait--)

[Object.wait(long)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-)

[Object.wait(long,int)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-int-)

## Static Methods

### format(String project, String location, String source, String utilizationReport)

```
public static String format(String project, String location, String source, String utilizationReport)
```

**Parameters**

**Name**

**Description**

project

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

location

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

source

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

utilizationReport

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

### isParsableFrom(String formattedString)

```
public static boolean isParsableFrom(String formattedString)
```

**Parameter**

**Name**

**Description**

formattedString

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

### newBuilder()

```
public static UtilizationReportName.Builder newBuilder()
```

**Returns**

**Type**

**Description**

[UtilizationReportName.Builder](/java/docs/reference/google-cloud-vmmigration/1.2.0/com.google.cloud.vmmigration.v1.UtilizationReportName.Builder)

### of(String project, String location, String source, String utilizationReport)

```
public static UtilizationReportName of(String project, String location, String source, String utilizationReport)
```

**Parameters**

**Name**

**Description**

project

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

location

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

source

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

utilizationReport

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

[UtilizationReportName](/java/docs/reference/google-cloud-vmmigration/1.2.0/com.google.cloud.vmmigration.v1.UtilizationReportName)

### parse(String formattedString)

```
public static UtilizationReportName parse(String formattedString)
```

**Parameter**

**Name**

**Description**

formattedString

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

[UtilizationReportName](/java/docs/reference/google-cloud-vmmigration/1.2.0/com.google.cloud.vmmigration.v1.UtilizationReportName)

### parseList(List<String> formattedStrings)

```
public static List<UtilizationReportName> parseList(List<String> formattedStrings)
```

**Parameter**

**Name**

**Description**

formattedStrings

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[UtilizationReportName](/java/docs/reference/google-cloud-vmmigration/1.2.0/com.google.cloud.vmmigration.v1.UtilizationReportName)\>

### toStringList(List<UtilizationReportName> values)

```
public static List<String> toStringList(List<UtilizationReportName> values)
```

**Parameter**

**Name**

**Description**

values

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[UtilizationReportName](/java/docs/reference/google-cloud-vmmigration/1.2.0/com.google.cloud.vmmigration.v1.UtilizationReportName)>`  

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)\>

## Constructors

### UtilizationReportName()

```
protected UtilizationReportName()
```

## Methods

### equals(Object o)

```
public boolean equals(Object o)
```

**Parameter**

**Name**

**Description**

o

`[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html)`  

**Returns**

**Type**

**Description**

[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

**Overrides**

[Object.equals(Object)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#equals-java.lang.Object-)

### getFieldValue(String fieldName)

```
public String getFieldValue(String fieldName)
```

**Parameter**

**Name**

**Description**

fieldName

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

### getFieldValuesMap()

```
public Map<String,String> getFieldValuesMap()
```

**Returns**

**Type**

**Description**

[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)\>

### getLocation()

```
public String getLocation()
```

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

### getProject()

```
public String getProject()
```

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

### getSource()

```
public String getSource()
```

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

### getUtilizationReport()

```
public String getUtilizationReport()
```

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

### hashCode()

```
public int hashCode()
```

**Returns**

**Type**

**Description**

[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)

**Overrides**

[Object.hashCode()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#hashCode--)

### toBuilder()

```
public UtilizationReportName.Builder toBuilder()
```

**Returns**

**Type**

**Description**

[UtilizationReportName.Builder](/java/docs/reference/google-cloud-vmmigration/1.2.0/com.google.cloud.vmmigration.v1.UtilizationReportName.Builder)

### toString()

```
public String toString()
```

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

**Overrides**

[Object.toString()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#toString--)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.

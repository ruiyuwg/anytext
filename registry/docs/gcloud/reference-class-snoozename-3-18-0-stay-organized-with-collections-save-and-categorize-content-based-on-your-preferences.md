-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class SnoozeName (3.18.0) Stay organized with collections Save and categorize content based on your preferences.

3.88.0 (latest) 3.86.0 3.84.0 3.83.0 3.81.0 3.79.0 3.77.0 3.76.0 3.75.0 3.74.0 3.73.0 3.71.0 3.69.0 3.68.0 3.65.0 3.64.0 3.63.0 3.61.0 3.60.0 3.59.0 3.58.0 3.57.0 3.56.0 3.55.0 3.54.0 3.53.0 3.52.0 3.50.0 3.49.0 3.48.0 3.47.0 3.46.0 3.45.0 3.44.0 3.43.0 3.42.0 3.41.0 3.40.0 3.38.0 3.37.0 3.36.0 3.35.0 3.34.0 3.33.0 3.32.0 3.31.0 3.30.0 3.29.0 3.28.0 3.25.0 3.24.0 3.23.0 3.22.0 3.21.0 3.20.0 3.19.0 3.18.0 3.17.0 3.16.0 3.15.0 3.14.0 3.13.0 3.12.0 3.10.0 3.9.0 3.8.0 3.7.0 3.6.0 3.5.0 3.4.6 3.3.6 3.2.10

```
public class SnoozeName implements ResourceName
```

## Inheritance

[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> SnoozeName

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

### format(String project, String snooze)

```
public static String format(String project, String snooze)
```

**Parameters**

**Name**

**Description**

`project`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`snooze`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### isParsableFrom(String formattedString)

```
public static boolean isParsableFrom(String formattedString)
```

**Parameter**

**Name**

**Description**

`formattedString`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

### newBuilder()

```
public static SnoozeName.Builder newBuilder()
```

**Returns**

**Type**

**Description**

`[SnoozeName.Builder](/java/docs/reference/google-cloud-monitoring/3.18.0/com.google.monitoring.v3.SnoozeName.Builder)`

### of(String project, String snooze)

```
public static SnoozeName of(String project, String snooze)
```

**Parameters**

**Name**

**Description**

`project`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`snooze`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[SnoozeName](/java/docs/reference/google-cloud-monitoring/3.18.0/com.google.monitoring.v3.SnoozeName)`

### parse(String formattedString)

```
public static SnoozeName parse(String formattedString)
```

**Parameter**

**Name**

**Description**

`formattedString`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[SnoozeName](/java/docs/reference/google-cloud-monitoring/3.18.0/com.google.monitoring.v3.SnoozeName)`

### parseList(List<String> formattedStrings)

```
public static List<SnoozeName> parseList(List<String> formattedStrings)
```

**Parameter**

**Name**

**Description**

`formattedStrings`

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[SnoozeName](/java/docs/reference/google-cloud-monitoring/3.18.0/com.google.monitoring.v3.SnoozeName)>`

### toStringList(List<SnoozeName> values)

```
public static List<String> toStringList(List<SnoozeName> values)
```

**Parameter**

**Name**

**Description**

`values`

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[SnoozeName](/java/docs/reference/google-cloud-monitoring/3.18.0/com.google.monitoring.v3.SnoozeName)>`  

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

## Constructors

### SnoozeName()

```
protected SnoozeName()
```

## Methods

### equals(Object o)

```
public boolean equals(Object o)
```

**Parameter**

**Name**

**Description**

`o`

`[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

**Overrides**

[Object.equals(Object)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#equals-java.lang.Object-)

### getFieldValue(String fieldName)

```
public String getFieldValue(String fieldName)
```

**Parameter**

**Name**

**Description**

`fieldName`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### getFieldValuesMap()

```
public Map<String,String> getFieldValuesMap()
```

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getProject()

```
public String getProject()
```

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### getSnooze()

```
public String getSnooze()
```

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### hashCode()

```
public int hashCode()
```

**Returns**

**Type**

**Description**

`[int](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

**Overrides**

[Object.hashCode()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#hashCode--)

### toBuilder()

```
public SnoozeName.Builder toBuilder()
```

**Returns**

**Type**

**Description**

`[SnoozeName.Builder](/java/docs/reference/google-cloud-monitoring/3.18.0/com.google.monitoring.v3.SnoozeName.Builder)`

### toString()

```
public String toString()
```

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

**Overrides**

[Object.toString()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#toString--)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.

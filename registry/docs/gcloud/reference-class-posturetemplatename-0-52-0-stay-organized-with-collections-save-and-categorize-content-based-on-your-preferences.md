-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class PostureTemplateName (0.52.0) Stay organized with collections Save and categorize content based on your preferences.

0.52.0 (latest) 0.50.0 0.48.0 0.47.0 0.45.0 0.43.0 0.41.0 0.40.0 0.39.0 0.38.0 0.37.0 0.35.0 0.33.0 0.32.0 0.29.0 0.28.0 0.27.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.0 0.2.0 0.1.0

```
public class PostureTemplateName implements ResourceName
```

## Inheritance

[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> PostureTemplateName

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

### format(String organization, String location, String postureTemplate)

```
public static String format(String organization, String location, String postureTemplate)
```

**Parameters**

**Name**

**Description**

`organization`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`location`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`postureTemplate`

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
public static PostureTemplateName.Builder newBuilder()
```

**Returns**

**Type**

**Description**

`[PostureTemplateName.Builder](/java/docs/reference/google-cloud-securityposture/latest/com.google.cloud.securityposture.v1.PostureTemplateName.Builder)`

### of(String organization, String location, String postureTemplate)

```
public static PostureTemplateName of(String organization, String location, String postureTemplate)
```

**Parameters**

**Name**

**Description**

`organization`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`location`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`postureTemplate`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[PostureTemplateName](/java/docs/reference/google-cloud-securityposture/latest/com.google.cloud.securityposture.v1.PostureTemplateName)`

### parse(String formattedString)

```
public static PostureTemplateName parse(String formattedString)
```

**Parameter**

**Name**

**Description**

`formattedString`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[PostureTemplateName](/java/docs/reference/google-cloud-securityposture/latest/com.google.cloud.securityposture.v1.PostureTemplateName)`

### parseList(List<String> formattedStrings)

```
public static List<PostureTemplateName> parseList(List<String> formattedStrings)
```

**Parameter**

**Name**

**Description**

`formattedStrings`

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[PostureTemplateName](/java/docs/reference/google-cloud-securityposture/latest/com.google.cloud.securityposture.v1.PostureTemplateName)>`

### toStringList(List<PostureTemplateName> values)

```
public static List<String> toStringList(List<PostureTemplateName> values)
```

**Parameter**

**Name**

**Description**

`values`

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[PostureTemplateName](/java/docs/reference/google-cloud-securityposture/latest/com.google.cloud.securityposture.v1.PostureTemplateName)>`  

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

## Constructors

### PostureTemplateName() (deprecated)

```
protected PostureTemplateName()
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

### getLocation()

```
public String getLocation()
```

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### getOrganization()

```
public String getOrganization()
```

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### getPostureTemplate()

```
public String getPostureTemplate()
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
public PostureTemplateName.Builder toBuilder()
```

**Returns**

**Type**

**Description**

`[PostureTemplateName.Builder](/java/docs/reference/google-cloud-securityposture/latest/com.google.cloud.securityposture.v1.PostureTemplateName.Builder)`

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

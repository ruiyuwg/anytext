-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class SecretVersionName (2.46.0) Stay organized with collections Save and categorize content based on your preferences.

2.87.0 (latest) 2.85.0 2.83.0 2.82.0 2.80.0 2.78.0 2.76.0 2.75.0 2.74.0 2.73.0 2.72.0 2.70.0 2.68.0 2.67.0 2.64.0 2.63.0 2.62.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.52.0 2.51.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.40.0 2.39.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.28.0 2.27.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.12.0 2.11.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.0 2.4.0 2.3.10 2.2.0 2.1.7 2.0.7

```
public class SecretVersionName implements ResourceName
```

## Inheritance

[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> SecretVersionName

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

### format(String project, String secret, String secretVersion)

```
public static String format(String project, String secret, String secretVersion)
```

**Parameters**

**Name**

**Description**

`project`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`secret`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`secretVersion`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### formatProjectLocationSecretSecretVersionName(String project, String location, String secret, String secretVersion)

```
public static String formatProjectLocationSecretSecretVersionName(String project, String location, String secret, String secretVersion)
```

**Parameters**

**Name**

**Description**

`project`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`location`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`secret`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`secretVersion`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### formatProjectSecretSecretVersionName(String project, String secret, String secretVersion)

```
public static String formatProjectSecretSecretVersionName(String project, String secret, String secretVersion)
```

**Parameters**

**Name**

**Description**

`project`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`secret`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`secretVersion`

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
public static SecretVersionName.Builder newBuilder()
```

**Returns**

**Type**

**Description**

`[SecretVersionName.Builder](/java/docs/reference/google-cloud-secretmanager/2.46.0/com.google.cloud.secretmanager.v1.SecretVersionName.Builder)`

### newProjectLocationSecretSecretVersionBuilder()

```
public static SecretVersionName.ProjectLocationSecretSecretVersionBuilder newProjectLocationSecretSecretVersionBuilder()
```

**Returns**

**Type**

**Description**

`[SecretVersionName.ProjectLocationSecretSecretVersionBuilder](/java/docs/reference/google-cloud-secretmanager/2.46.0/com.google.cloud.secretmanager.v1.SecretVersionName.ProjectLocationSecretSecretVersionBuilder)`

### newProjectSecretSecretVersionBuilder()

```
public static SecretVersionName.Builder newProjectSecretSecretVersionBuilder()
```

**Returns**

**Type**

**Description**

`[SecretVersionName.Builder](/java/docs/reference/google-cloud-secretmanager/2.46.0/com.google.cloud.secretmanager.v1.SecretVersionName.Builder)`

### of(String project, String secret, String secretVersion)

```
public static SecretVersionName of(String project, String secret, String secretVersion)
```

**Parameters**

**Name**

**Description**

`project`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`secret`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`secretVersion`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[SecretVersionName](/java/docs/reference/google-cloud-secretmanager/2.46.0/com.google.cloud.secretmanager.v1.SecretVersionName)`

### ofProjectLocationSecretSecretVersionName(String project, String location, String secret, String secretVersion)

```
public static SecretVersionName ofProjectLocationSecretSecretVersionName(String project, String location, String secret, String secretVersion)
```

**Parameters**

**Name**

**Description**

`project`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`location`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`secret`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`secretVersion`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[SecretVersionName](/java/docs/reference/google-cloud-secretmanager/2.46.0/com.google.cloud.secretmanager.v1.SecretVersionName)`

### ofProjectSecretSecretVersionName(String project, String secret, String secretVersion)

```
public static SecretVersionName ofProjectSecretSecretVersionName(String project, String secret, String secretVersion)
```

**Parameters**

**Name**

**Description**

`project`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`secret`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

`secretVersion`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[SecretVersionName](/java/docs/reference/google-cloud-secretmanager/2.46.0/com.google.cloud.secretmanager.v1.SecretVersionName)`

### parse(String formattedString)

```
public static SecretVersionName parse(String formattedString)
```

**Parameter**

**Name**

**Description**

`formattedString`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[SecretVersionName](/java/docs/reference/google-cloud-secretmanager/2.46.0/com.google.cloud.secretmanager.v1.SecretVersionName)`

### parseList(List<String> formattedStrings)

```
public static List<SecretVersionName> parseList(List<String> formattedStrings)
```

**Parameter**

**Name**

**Description**

`formattedStrings`

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[SecretVersionName](/java/docs/reference/google-cloud-secretmanager/2.46.0/com.google.cloud.secretmanager.v1.SecretVersionName)>`

### toStringList(List<SecretVersionName> values)

```
public static List<String> toStringList(List<SecretVersionName> values)
```

**Parameter**

**Name**

**Description**

`values`

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[SecretVersionName](/java/docs/reference/google-cloud-secretmanager/2.46.0/com.google.cloud.secretmanager.v1.SecretVersionName)>`  

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

## Constructors

### SecretVersionName() (deprecated)

```
protected SecretVersionName()
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

### getProject()

```
public String getProject()
```

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### getSecret()

```
public String getSecret()
```

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### getSecretVersion()

```
public String getSecretVersion()
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
public SecretVersionName.Builder toBuilder()
```

**Returns**

**Type**

**Description**

`[SecretVersionName.Builder](/java/docs/reference/google-cloud-secretmanager/2.46.0/com.google.cloud.secretmanager.v1.SecretVersionName.Builder)`

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

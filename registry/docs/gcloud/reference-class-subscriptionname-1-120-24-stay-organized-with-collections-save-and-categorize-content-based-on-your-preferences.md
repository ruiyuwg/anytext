-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class SubscriptionName (1.120.24) Stay organized with collections Save and categorize content based on your preferences.

1.149.0 (latest) 1.148.0 1.147.0 1.145.0 1.143.1 1.142.0 1.141.5 1.140.2 1.139.4 1.138.0 1.137.1 1.136.1 1.135.0 1.134.2 1.133.1 1.132.2 1.131.0 1.130.0 1.129.6 1.127.3 1.126.6 1.125.13 1.123.18 1.122.2 1.121.1 1.120.24 1.119.1 1.118.0 1.117.0 1.116.4 1.115.5

```
public class SubscriptionName implements ResourceName
```

## Inheritance

[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> SubscriptionName

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

### format(String project, String subscription)

```
public static String format(String project, String subscription)
```

**Parameters**

**Name**

**Description**

project

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

subscription

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
public static SubscriptionName.Builder newBuilder()
```

**Returns**

**Type**

**Description**

[SubscriptionName.Builder](/java/docs/reference/google-cloud-pubsub/1.120.24/com.google.pubsub.v1.SubscriptionName.Builder)

### of(String project, String subscription)

```
public static SubscriptionName of(String project, String subscription)
```

**Parameters**

**Name**

**Description**

project

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

subscription

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

[SubscriptionName](/java/docs/reference/google-cloud-pubsub/1.120.24/com.google.pubsub.v1.SubscriptionName)

### parse(String formattedString)

```
public static SubscriptionName parse(String formattedString)
```

**Parameter**

**Name**

**Description**

formattedString

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

[SubscriptionName](/java/docs/reference/google-cloud-pubsub/1.120.24/com.google.pubsub.v1.SubscriptionName)

### parseList(List<String> formattedStrings)

```
public static List<SubscriptionName> parseList(List<String> formattedStrings)
```

**Parameter**

**Name**

**Description**

formattedStrings

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[SubscriptionName](/java/docs/reference/google-cloud-pubsub/1.120.24/com.google.pubsub.v1.SubscriptionName)\>

### toStringList(List<SubscriptionName> values)

```
public static List<String> toStringList(List<SubscriptionName> values)
```

**Parameter**

**Name**

**Description**

values

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[SubscriptionName](/java/docs/reference/google-cloud-pubsub/1.120.24/com.google.pubsub.v1.SubscriptionName)>`  

**Returns**

**Type**

**Description**

[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)\>

## Constructors

### SubscriptionName()

```
protected SubscriptionName()
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

### getProject()

```
public String getProject()
```

**Returns**

**Type**

**Description**

[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)

### getSubscription()

```
public String getSubscription()
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
public SubscriptionName.Builder toBuilder()
```

**Returns**

**Type**

**Description**

[SubscriptionName.Builder](/java/docs/reference/google-cloud-pubsub/1.120.24/com.google.pubsub.v1.SubscriptionName.Builder)

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

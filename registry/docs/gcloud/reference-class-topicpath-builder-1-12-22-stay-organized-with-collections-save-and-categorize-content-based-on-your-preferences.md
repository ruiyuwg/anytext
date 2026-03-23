-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class TopicPath.Builder (1.12.22) Stay organized with collections Save and categorize content based on your preferences.

1.16.2 (latest) 1.16.1 1.15.21 1.14.8 1.13.8 1.12.22 1.11.2 1.10.0 1.9.4 1.8.0 1.7.1 1.6.3 1.5.5 1.4.12

```
public abstract static class TopicPath.Builder extends ProjectLocationBuilderHelper<TopicPath.Builder>
```

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> com.google.cloud.pubsublite.ProjectBuilderHelper \> com.google.cloud.pubsublite.ProjectLocationBuilderHelper \> TopicPath.Builder

## Inherited Members

com.google.cloud.pubsublite.ProjectBuilderHelper.setProject(com.google.cloud.pubsublite.ProjectId)

com.google.cloud.pubsublite.ProjectBuilderHelper.setProject(com.google.cloud.pubsublite.ProjectIdOrNumber)

com.google.cloud.pubsublite.ProjectBuilderHelper.setProject(com.google.cloud.pubsublite.ProjectNumber)

com.google.cloud.pubsublite.ProjectLocationBuilderHelper.setLocation(com.google.cloud.pubsublite.CloudRegion)

com.google.cloud.pubsublite.ProjectLocationBuilderHelper.setLocation(com.google.cloud.pubsublite.CloudRegionOrZone)

com.google.cloud.pubsublite.ProjectLocationBuilderHelper.setLocation(com.google.cloud.pubsublite.CloudZone)

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

## Constructors

### Builder()

```
public Builder()
```

## Methods

### build()

```
public abstract TopicPath build()
```

Build a new TopicPath.

**Returns**

**Type**

**Description**

`[TopicPath](/java/docs/reference/google-cloud-pubsublite/1.12.22/com.google.cloud.pubsublite.TopicPath)`

### setName(TopicName name)

```
public abstract TopicPath.Builder setName(TopicName name)
```

**Parameter**

**Name**

**Description**

`name`

`[TopicName](/java/docs/reference/google-cloud-pubsublite/1.12.22/com.google.cloud.pubsublite.TopicName)`  

**Returns**

**Type**

**Description**

`[TopicPath.Builder](/java/docs/reference/google-cloud-pubsublite/1.12.22/com.google.cloud.pubsublite.TopicPath.Builder)`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.

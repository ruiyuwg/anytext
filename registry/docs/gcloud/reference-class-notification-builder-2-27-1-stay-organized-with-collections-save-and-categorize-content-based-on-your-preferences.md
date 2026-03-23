-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class Notification.Builder (2.27.1) Stay organized with collections Save and categorize content based on your preferences.

2.64.0 (latest) 2.63.0 2.62.1 2.60.0 2.59.0 2.58.1 2.57.0 2.56.0 2.55.0 2.54.0 2.53.3 2.52.3 2.50.0 2.49.0 2.48.2 2.47.0 2.46.0 2.45.0 2.44.1 2.43.2 2.42.0 2.41.0 2.40.1 2.39.0 2.38.0 2.37.0 2.36.1 2.34.0 2.33.0 2.32.1 2.30.1 2.29.1 2.28.0 2.27.1 2.24.0 2.23.0 2.22.6 2.21.0 2.20.2 2.19.0 2.18.0 2.17.2 2.16.0 2.15.1 2.14.0 2.13.1 2.12.0 2.11.3 2.10.0 2.9.3 2.8.1 2.7.1 2.6.1 2.5.1 2.4.5 2.3.0 2.2.3 2.1.10

```
public static class Notification.Builder extends NotificationInfo.Builder
```

Builder for `Notification`.

## Inheritance

[java.lang.Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> [NotificationInfo.Builder](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.NotificationInfo.Builder) \> Notification.Builder

## Inherited Members

[NotificationInfo.Builder.build()](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.NotificationInfo.Builder#com_google_cloud_storage_NotificationInfo_Builder_build__)

[NotificationInfo.Builder.setCustomAttributes(Map<String,String>)](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.NotificationInfo.Builder#com_google_cloud_storage_NotificationInfo_Builder_setCustomAttributes_java_util_Map_java_lang_String_java_lang_String__)

[NotificationInfo.Builder.setEtag(String)](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.NotificationInfo.Builder#com_google_cloud_storage_NotificationInfo_Builder_setEtag_java_lang_String_)

[NotificationInfo.Builder.setEventTypes(NotificationInfo.EventType)](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.NotificationInfo.Builder#com_google_cloud_storage_NotificationInfo_Builder_setEventTypes_com_google_cloud_storage_NotificationInfo_EventType____)

[NotificationInfo.Builder.setObjectNamePrefix(String)](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.NotificationInfo.Builder#com_google_cloud_storage_NotificationInfo_Builder_setObjectNamePrefix_java_lang_String_)

[NotificationInfo.Builder.setPayloadFormat(NotificationInfo.PayloadFormat)](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.NotificationInfo.Builder#com_google_cloud_storage_NotificationInfo_Builder_setPayloadFormat_com_google_cloud_storage_NotificationInfo_PayloadFormat_)

[NotificationInfo.Builder.setSelfLink(String)](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.NotificationInfo.Builder#com_google_cloud_storage_NotificationInfo_Builder_setSelfLink_java_lang_String_)

[NotificationInfo.Builder.setTopic(String)](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.NotificationInfo.Builder#com_google_cloud_storage_NotificationInfo_Builder_setTopic_java_lang_String_)

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

## Methods

### build()

```
public Notification build()
```

Creates a `NotificationInfo` object.

**Returns**

**Type**

**Description**

`[Notification](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Notification)`

**Overrides**

[NotificationInfo.Builder.build()](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.NotificationInfo.Builder#com_google_cloud_storage_NotificationInfo_Builder_build__)

### setCustomAttributes(Map<String,String> customAttributes)

```
public Notification.Builder setCustomAttributes(Map<String,String> customAttributes)
```

**Parameter**

**Name**

**Description**

`customAttributes`

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`  

**Returns**

**Type**

**Description**

`[Notification.Builder](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Notification.Builder)`

**Overrides**

[NotificationInfo.Builder.setCustomAttributes(Map<String,String> customAttributes)](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.NotificationInfo.Builder#com_google_cloud_storage_NotificationInfo_Builder_setCustomAttributes_java_util_Map_java_lang_String_java_lang_String__)

### setEtag(String etag)

```
public Notification.Builder setEtag(String etag)
```

**Parameter**

**Name**

**Description**

`etag`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[Notification.Builder](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Notification.Builder)`

**Overrides**

[NotificationInfo.Builder.setEtag(String etag)](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.NotificationInfo.Builder#com_google_cloud_storage_NotificationInfo_Builder_setEtag_java_lang_String_)

### setEventTypes(NotificationInfo.EventType\[\] eventTypes)

```
public Notification.Builder setEventTypes(NotificationInfo.EventType[] eventTypes)
```

**Parameter**

**Name**

**Description**

`eventTypes`

`[EventType](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.NotificationInfo.EventType)[]`  

**Returns**

**Type**

**Description**

`[Notification.Builder](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Notification.Builder)`

**Overrides**

[NotificationInfo.Builder.setEventTypes(NotificationInfo.EventType\[\] eventTypes)](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.NotificationInfo.Builder#com_google_cloud_storage_NotificationInfo_Builder_setEventTypes_com_google_cloud_storage_NotificationInfo_EventType____)

### setObjectNamePrefix(String objectNamePrefix)

```
public Notification.Builder setObjectNamePrefix(String objectNamePrefix)
```

**Parameter**

**Name**

**Description**

`objectNamePrefix`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[Notification.Builder](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Notification.Builder)`

**Overrides**

[NotificationInfo.Builder.setObjectNamePrefix(String objectNamePrefix)](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.NotificationInfo.Builder#com_google_cloud_storage_NotificationInfo_Builder_setObjectNamePrefix_java_lang_String_)

### setPayloadFormat(NotificationInfo.PayloadFormat payloadFormat)

```
public Notification.Builder setPayloadFormat(NotificationInfo.PayloadFormat payloadFormat)
```

**Parameter**

**Name**

**Description**

`payloadFormat`

`[NotificationInfo.PayloadFormat](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.NotificationInfo.PayloadFormat)`  

**Returns**

**Type**

**Description**

`[Notification.Builder](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Notification.Builder)`

**Overrides**

[NotificationInfo.Builder.setPayloadFormat(NotificationInfo.PayloadFormat payloadFormat)](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.NotificationInfo.Builder#com_google_cloud_storage_NotificationInfo_Builder_setPayloadFormat_com_google_cloud_storage_NotificationInfo_PayloadFormat_)

### setSelfLink(String selfLink)

```
public Notification.Builder setSelfLink(String selfLink)
```

**Parameter**

**Name**

**Description**

`selfLink`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[Notification.Builder](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Notification.Builder)`

**Overrides**

[NotificationInfo.Builder.setSelfLink(String selfLink)](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.NotificationInfo.Builder#com_google_cloud_storage_NotificationInfo_Builder_setSelfLink_java_lang_String_)

### setTopic(String topic)

```
public Notification.Builder setTopic(String topic)
```

**Parameter**

**Name**

**Description**

`topic`

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`  

**Returns**

**Type**

**Description**

`[Notification.Builder](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.Notification.Builder)`

**Overrides**

[NotificationInfo.Builder.setTopic(String topic)](/java/docs/reference/google-cloud-storage/2.27.1/com.google.cloud.storage.NotificationInfo.Builder#com_google_cloud_storage_NotificationInfo_Builder_setTopic_java_lang_String_)

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.

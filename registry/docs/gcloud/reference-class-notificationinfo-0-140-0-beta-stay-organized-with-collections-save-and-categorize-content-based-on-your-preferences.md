-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Class NotificationInfo (0.140.0-beta) Stay organized with collections Save and categorize content based on your preferences.

0.205.0-beta (latest) 0.203.0-beta 0.201.0-beta 0.200.0-beta 0.198.0-beta 0.196.0-beta 0.194.0-beta 0.193.0-beta 0.192.0-beta 0.191.0-beta 0.190.0-beta 0.188.0-beta 0.186.0-beta 0.185.0-beta 0.182.0-beta 0.181.0-beta 0.180.0-beta 0.178.0-beta 0.177.0-beta 0.176.0-beta 0.175.0-beta 0.174.0-beta 0.173.0-beta 0.172.0-beta 0.171.0-beta 0.170.0-beta 0.169.0-beta 0.167.0-beta 0.166.0-beta 0.165.0-beta 0.164.0-beta 0.163.0-beta 0.162.0-beta 0.161.0-beta 0.160.0-beta 0.159.0-beta 0.158.0-beta 0.157.0-beta 0.155.0-beta 0.154.0-beta 0.153.0-beta 0.152.0-beta 0.151.0-beta 0.150.0-beta 0.149.0-beta 0.148.0-beta 0.147.0-beta 0.146.0-beta 0.145.0-beta 0.142.0-beta 0.141.0-beta 0.140.0-beta 0.139.0-beta 0.138.0-beta 0.137.0-beta 0.136.0-beta 0.135.0-beta 0.134.0-beta 0.133.0-beta 0.132.0-beta 0.131.0-beta 0.130.0-beta 0.129.0-beta 0.127.0-beta 0.126.0-beta 0.125.0-beta 0.124.0-beta 0.123.21-beta 0.122.29-beta

```
public class NotificationInfo implements Serializable
```

Google Storage Notification metadata; See Also: [Concepts and Terminology](https://cloud.google.com/storage/docs/concepts-techniques#concepts)

## Inheritance

[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html) \> NotificationInfo

## Implements

[Serializable](https://docs.oracle.com/javase/8/docs/api/java/io/Serializable.html)

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

### newBuilder(ProjectTopicName topic)

```
public static NotificationInfo.Builder newBuilder(ProjectTopicName topic)
```

Returns a `NotificationInfo` builder where the topic's name is set to the provided name.

**Parameter**

**Name**

**Description**

`topic`

`com.google.pubsub.v1.ProjectTopicName`  

**Returns**

**Type**

**Description**

`[NotificationInfo.Builder](/java/docs/reference/google-cloud-notification/0.140.0-beta/com.google.cloud.notification.NotificationInfo.Builder)`

### of(ProjectTopicName topic)

```
public static NotificationInfo of(ProjectTopicName topic)
```

Creates a `NotificationInfo` object for the provided topic name.

**Parameter**

**Name**

**Description**

`topic`

`com.google.pubsub.v1.ProjectTopicName`  

**Returns**

**Type**

**Description**

`[NotificationInfo](/java/docs/reference/google-cloud-notification/0.140.0-beta/com.google.cloud.notification.NotificationInfo)`

## Methods

### equals(Object obj)

```
public boolean equals(Object obj)
```

**Parameter**

**Name**

**Description**

`obj`

`[Object](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html)`  

**Returns**

**Type**

**Description**

`[boolean](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html)`

**Overrides**

[Object.equals(Object)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#equals-java.lang.Object-)

### getCustomAttributes()

```
public Map<String,String> getCustomAttributes()
```

Returns the list of additional attributes to attach to each Cloud PubSub message published for this notification subscription. See Also: [About Access Control Lists](https://cloud.google.com/storage/docs/access-control#About-Access-Control-Lists)

**Returns**

**Type**

**Description**

`[Map](https://docs.oracle.com/javase/8/docs/api/java/util/Map.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html),[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getEtag()

```
public String getEtag()
```

Returns HTTP 1.1 Entity tag for the notification. See Also: [Entity Tags](http://tools.ietf.org/html/rfc2616#section-3.11)

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### getEventTypes()

```
public List<String> getEventTypes()
```

Returns the list of event types that this notification will apply to. If empty, notifications will be sent on all event types. See Also: [Cross-Origin Resource Sharing (CORS)](https://cloud.google.com/storage/docs/cross-origin)

**Returns**

**Type**

**Description**

`[List](https://docs.oracle.com/javase/8/docs/api/java/util/List.html)<[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)>`

### getGeneratedId()

```
public String getGeneratedId()
```

Returns the service-generated id for the notification.

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### getObjectNamePrefix()

```
public String getObjectNamePrefix()
```

Returns the object name prefix for which this notification configuration applies.

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### getPayloadFormat()

```
public NotificationInfo.PayloadFormat getPayloadFormat()
```

Returns the desired content of the Payload.

**Returns**

**Type**

**Description**

`[NotificationInfo.PayloadFormat](/java/docs/reference/google-cloud-notification/0.140.0-beta/com.google.cloud.notification.NotificationInfo.PayloadFormat)`

### getSelfLink()

```
public String getSelfLink()
```

Returns the canonical URI of this topic as a string.

**Returns**

**Type**

**Description**

`[String](https://docs.oracle.com/javase/8/docs/api/java/lang/String.html)`

### getTopic()

```
public ProjectTopicName getTopic()
```

Returns the Cloud PubSub topic to which this subscription publishes.

**Returns**

**Type**

**Description**

`com.google.pubsub.v1.ProjectTopicName`

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
public NotificationInfo.Builder toBuilder()
```

Returns a builder for the current notification.

**Returns**

**Type**

**Description**

`[NotificationInfo.Builder](/java/docs/reference/google-cloud-notification/0.140.0-beta/com.google.cloud.notification.NotificationInfo.Builder)`

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

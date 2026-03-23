-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Enum Event.Relevance (0.2.0) Stay organized with collections Save and categorize content based on your preferences.

0.54.0 (latest) 0.52.0 0.50.0 0.49.0 0.47.0 0.45.0 0.43.0 0.42.0 0.41.0 0.40.0 0.39.0 0.37.0 0.35.0 0.34.0 0.31.0 0.30.0 0.29.0 0.27.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.4.0 0.3.0 0.2.0 0.1.0

```
public enum Event.Relevance extends Enum<Event.Relevance> implements ProtocolMessageEnum
```

Communicates why a given incident is deemed relevant in the context of a given project. This enum lists all possible detailed states of relevance.

Protobuf enum `google.cloud.servicehealth.v1.Event.Relevance`

## Implements

[ProtocolMessageEnum](https://cloud.google.com/java/docs/reference/protobuf/latest/com.google.protobuf.ProtocolMessageEnum.html)

## Inherited Members

[Enum.<T>valueOf(Class<T>,String)](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#valueOf-java.lang.Class-java.lang.String-)

[Enum.clone()](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#clone--)

[Enum.compareTo(E)](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#compareTo-E-)

[Enum.equals(Object)](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#equals-java.lang.Object-)

[Enum.finalize()](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#finalize--)

[Enum.getDeclaringClass()](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#getDeclaringClass--)

[Enum.hashCode()](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#hashCode--)

[Enum.name()](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#name--)

[Enum.ordinal()](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#ordinal--)

[Enum.toString()](https://docs.oracle.com/javase/8/docs/api/java/lang/Enum.html#toString--)

[Object.getClass()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#getClass--)

[Object.notify()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notify--)

[Object.notifyAll()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#notifyAll--)

[Object.wait()](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait--)

[Object.wait(long)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-)

[Object.wait(long,int)](https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html#wait-long-int-)

## Static Fields

**Name**

**Description**

`IMPACTED`

The incident is verified to be impacting your project.

`IMPACTED = 9;`

`IMPACTED_VALUE`

The incident is verified to be impacting your project.

`IMPACTED = 9;`

`NOT_IMPACTED`

The incident does not impact the project.

`NOT_IMPACTED = 6;`

`NOT_IMPACTED_VALUE`

The incident does not impact the project.

`NOT_IMPACTED = 6;`

`PARTIALLY_RELATED`

The incident is associated with a Google Cloud product your project uses, but the incident may not be impacting your project. For example, the incident may be impacting a Google Cloud product that your project uses, but in a location that your project does not use.

`PARTIALLY_RELATED = 7;`

`PARTIALLY_RELATED_VALUE`

The incident is associated with a Google Cloud product your project uses, but the incident may not be impacting your project. For example, the incident may be impacting a Google Cloud product that your project uses, but in a location that your project does not use.

`PARTIALLY_RELATED = 7;`

`RELATED`

The incident has a direct connection with your project and impacts a Google Cloud product in a location your project uses.

`RELATED = 8;`

`RELATED_VALUE`

The incident has a direct connection with your project and impacts a Google Cloud product in a location your project uses.

`RELATED = 8;`

`RELEVANCE_UNSPECIFIED`

Unspecified relevance.

`RELEVANCE_UNSPECIFIED = 0;`

`RELEVANCE_UNSPECIFIED_VALUE`

Unspecified relevance.

`RELEVANCE_UNSPECIFIED = 0;`

`UNKNOWN`

The relevance of the incident to the project is unknown.

`UNKNOWN = 2;`

`UNKNOWN_VALUE`

The relevance of the incident to the project is unknown.

`UNKNOWN = 2;`

`UNRECOGNIZED`

## Static Methods

**Name**

**Description**

`forNumber(int value)`

`getDescriptor()`

`internalGetValueMap()`

`valueOf(Descriptors.EnumValueDescriptor desc)`

`valueOf(int value)`

**Deprecated.** _Use [#forNumber(int)](/java/docs/reference/google-cloud-servicehealth/0.2.0/com.google.cloud.servicehealth.v1.Event.Relevance#com_google_cloud_servicehealth_v1_Event_Relevance_forNumber_int_) instead._

`valueOf(String name)`

`values()`

## Methods

**Name**

**Description**

`getDescriptorForType()`

`getNumber()`

`getValueDescriptor()`

Send feedback

Except as otherwise noted, the content of this page is licensed under the [Creative Commons Attribution 4.0 License](https://creativecommons.org/licenses/by/4.0/), and code samples are licensed under the [Apache 2.0 License](https://www.apache.org/licenses/LICENSE-2.0). For details, see the [Google Developers Site Policies](https://developers.google.com/site-policies). Java is a registered trademark of Oracle and/or its affiliates.

Last updated 2026-03-14 UTC.

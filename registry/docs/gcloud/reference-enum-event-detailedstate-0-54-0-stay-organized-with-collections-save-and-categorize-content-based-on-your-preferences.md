-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Enum Event.DetailedState (0.54.0) Stay organized with collections Save and categorize content based on your preferences.

0.54.0 (latest) 0.52.0 0.50.0 0.49.0 0.47.0 0.45.0 0.43.0 0.42.0 0.41.0 0.40.0 0.39.0 0.37.0 0.35.0 0.34.0 0.31.0 0.30.0 0.29.0 0.27.0 0.26.0 0.25.0 0.24.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.9.0 0.8.0 0.7.0 0.6.0 0.4.0 0.3.0 0.2.0 0.1.0

```
public enum Event.DetailedState extends Enum<Event.DetailedState> implements ProtocolMessageEnum
```

The detailed state of the incident. This enum lists all possible detailed states of an incident.

Protobuf enum `google.cloud.servicehealth.v1.Event.DetailedState`

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

`AUTO_CLOSED`

The incident was automatically closed because of the following reasons:

-   The impact of the incident could not be confirmed.
-   The incident was intermittent or resolved itself.
    
    The incident does not have a resolution because no action or investigation happened. If it is intermittent, the incident may reopen.
    

`AUTO_CLOSED = 9;`

`AUTO_CLOSED_VALUE`

The incident was automatically closed because of the following reasons:

-   The impact of the incident could not be confirmed.
-   The incident was intermittent or resolved itself.
    
    The incident does not have a resolution because no action or investigation happened. If it is intermittent, the incident may reopen.
    

`AUTO_CLOSED = 9;`

`CONFIRMED`

The incident is confirmed and impacting at least one Google Cloud product. Ongoing status updates will be provided until it is resolved.

`CONFIRMED = 2;`

`CONFIRMED_VALUE`

The incident is confirmed and impacting at least one Google Cloud product. Ongoing status updates will be provided until it is resolved.

`CONFIRMED = 2;`

`DETAILED_STATE_UNSPECIFIED`

Unspecified detail state.

`DETAILED_STATE_UNSPECIFIED = 0;`

`DETAILED_STATE_UNSPECIFIED_VALUE`

Unspecified detail state.

`DETAILED_STATE_UNSPECIFIED = 0;`

`EMERGING`

Google engineers are actively investigating the event to determine the impact.

`EMERGING = 1;`

`EMERGING_VALUE`

Google engineers are actively investigating the event to determine the impact.

`EMERGING = 1;`

`FALSE_POSITIVE`

Upon investigation, Google engineers concluded that the incident is not affecting a Google Cloud product. This state can change if the incident is reviewed again.

`FALSE_POSITIVE = 10;`

`FALSE_POSITIVE_VALUE`

Upon investigation, Google engineers concluded that the incident is not affecting a Google Cloud product. This state can change if the incident is reviewed again.

`FALSE_POSITIVE = 10;`

`MERGED`

The incident was merged into a parent incident. All further updates will be published to the parent only. The `parent_event` field contains the name of the parent.

`MERGED = 4;`

`MERGED_VALUE`

The incident was merged into a parent incident. All further updates will be published to the parent only. The `parent_event` field contains the name of the parent.

`MERGED = 4;`

`RESOLVED`

The incident is no longer affecting any Google Cloud product, and there will be no further updates.

`RESOLVED = 3;`

`RESOLVED_VALUE`

The incident is no longer affecting any Google Cloud product, and there will be no further updates.

`RESOLVED = 3;`

`UNRECOGNIZED`

## Static Methods

**Name**

**Description**

`forNumber(int value)`

`getDescriptor()`

`internalGetValueMap()`

`valueOf(Descriptors.EnumValueDescriptor desc)`

`valueOf(int value)`

**Deprecated.** _Use [#forNumber(int)](/java/docs/reference/google-cloud-servicehealth/latest/com.google.cloud.servicehealth.v1.Event.DetailedState#com_google_cloud_servicehealth_v1_Event_DetailedState_forNumber_int_) instead._

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

-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Enum RestoreConfig.TransformationRuleAction.Op (0.27.0) Stay organized with collections Save and categorize content based on your preferences.

0.86.0 (latest) 0.84.0 0.82.0 0.81.0 0.80.0 0.79.0 0.77.0 0.75.0 0.74.0 0.73.0 0.72.0 0.71.0 0.69.0 0.67.0 0.66.0 0.63.0 0.62.0 0.61.0 0.59.0 0.58.0 0.57.0 0.56.0 0.55.0 0.54.0 0.53.0 0.52.0 0.51.0 0.50.0 0.48.0 0.47.0 0.46.0 0.45.0 0.44.0 0.43.0 0.42.0 0.41.0 0.40.0 0.39.0 0.38.0 0.36.0 0.35.0 0.34.0 0.33.0 0.32.0 0.31.0 0.30.0 0.29.0 0.28.0 0.27.0 0.26.0 0.23.0 0.22.0 0.21.0 0.20.0 0.19.0 0.18.0 0.17.0 0.16.0 0.15.0 0.14.0 0.13.0 0.12.0 0.11.0 0.10.0 0.8.0 0.7.0 0.6.0 0.5.0 0.4.0 0.3.0 0.2.6 0.1.0

```
public enum RestoreConfig.TransformationRuleAction.Op extends Enum<RestoreConfig.TransformationRuleAction.Op> implements ProtocolMessageEnum
```

Possible values for operations of a transformation rule action.

Protobuf enum `google.cloud.gkebackup.v1.RestoreConfig.TransformationRuleAction.Op`

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

`ADD`

The "add" operation performs one of the following functions, depending upon what the target location references:

1.  If the target location specifies an array index, a new value is inserted into the array at the specified index.
2.  If the target location specifies an object member that does not already exist, a new member is added to the object.
3.  If the target location specifies an object member that does exist, that member's value is replaced.

`ADD = 4;`

`ADD_VALUE`

The "add" operation performs one of the following functions, depending upon what the target location references:

1.  If the target location specifies an array index, a new value is inserted into the array at the specified index.
2.  If the target location specifies an object member that does not already exist, a new member is added to the object.
3.  If the target location specifies an object member that does exist, that member's value is replaced.

`ADD = 4;`

`COPY`

The "copy" operation copies the value at a specified location to the target location.

`COPY = 3;`

`COPY_VALUE`

The "copy" operation copies the value at a specified location to the target location.

`COPY = 3;`

`MOVE`

The "move" operation removes the value at a specified location and adds it to the target location.

`MOVE = 2;`

`MOVE_VALUE`

The "move" operation removes the value at a specified location and adds it to the target location.

`MOVE = 2;`

`OP_UNSPECIFIED`

Unspecified operation

`OP_UNSPECIFIED = 0;`

`OP_UNSPECIFIED_VALUE`

Unspecified operation

`OP_UNSPECIFIED = 0;`

`REMOVE`

The "remove" operation removes the value at the target location.

`REMOVE = 1;`

`REMOVE_VALUE`

The "remove" operation removes the value at the target location.

`REMOVE = 1;`

`REPLACE`

The "replace" operation replaces the value at the target location with a new value. The operation object MUST contain a "value" member whose content specifies the replacement value.

`REPLACE = 6;`

`REPLACE_VALUE`

The "replace" operation replaces the value at the target location with a new value. The operation object MUST contain a "value" member whose content specifies the replacement value.

`REPLACE = 6;`

`TEST`

The "test" operation tests that a value at the target location is equal to a specified value.

`TEST = 5;`

`TEST_VALUE`

The "test" operation tests that a value at the target location is equal to a specified value.

`TEST = 5;`

`UNRECOGNIZED`

## Static Methods

**Name**

**Description**

`forNumber(int value)`

`getDescriptor()`

`internalGetValueMap()`

`valueOf(Descriptors.EnumValueDescriptor desc)`

`valueOf(int value)`

**Deprecated.** _Use [#forNumber(int)](/java/docs/reference/google-cloud-gke-backup/0.27.0/com.google.cloud.gkebackup.v1.RestoreConfig.TransformationRuleAction.Op#com_google_cloud_gkebackup_v1_RestoreConfig_TransformationRuleAction_Op_forNumber_int_) instead._

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

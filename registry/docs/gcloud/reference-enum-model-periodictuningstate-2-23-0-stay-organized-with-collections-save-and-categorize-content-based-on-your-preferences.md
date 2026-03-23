-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Enum Model.PeriodicTuningState (2.23.0) Stay organized with collections Save and categorize content based on your preferences.

2.89.0 (latest) 2.87.0 2.85.0 2.84.0 2.82.0 2.80.0 2.78.0 2.77.0 2.76.0 2.75.0 2.74.0 2.72.0 2.70.0 2.69.0 2.66.0 2.65.0 2.64.0 2.62.0 2.61.0 2.60.0 2.59.0 2.58.0 2.57.0 2.56.0 2.55.0 2.54.0 2.53.0 2.51.0 2.50.0 2.49.0 2.48.0 2.47.0 2.46.0 2.45.0 2.44.0 2.43.0 2.42.0 2.41.0 2.39.0 2.38.0 2.37.0 2.36.0 2.35.0 2.34.0 2.33.0 2.32.0 2.31.0 2.30.0 2.29.0 2.26.0 2.25.0 2.24.0 2.23.0 2.22.0 2.21.0 2.20.0 2.19.0 2.18.0 2.17.0 2.16.0 2.15.0 2.14.0 2.13.0 2.11.0 2.10.0 2.9.0 2.8.0 2.7.0 2.6.0 2.5.1 2.4.0 2.3.0 2.2.3 2.1.0 2.0.19

```
public enum Model.PeriodicTuningState extends Enum<Model.PeriodicTuningState> implements ProtocolMessageEnum
```

Describes whether periodic tuning is enabled for this model or not. Periodic tuning is scheduled at most every three months. You can start a tuning process manually by using the `TuneModel` method, which starts a tuning process immediately and resets the quarterly schedule. Enabling or disabling periodic tuning does not affect any current tuning processes.

Protobuf enum `google.cloud.retail.v2.Model.PeriodicTuningState`

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

`ALL_TUNING_DISABLED`

The model cannot be tuned with periodic tuning OR the `TuneModel` method. Hide the options in customer UI and reject any requests through the backend self serve API.

`ALL_TUNING_DISABLED = 3;`

`ALL_TUNING_DISABLED_VALUE`

The model cannot be tuned with periodic tuning OR the `TuneModel` method. Hide the options in customer UI and reject any requests through the backend self serve API.

`ALL_TUNING_DISABLED = 3;`

`PERIODIC_TUNING_DISABLED`

The model has periodic tuning disabled. Tuning can be reenabled by calling the `EnableModelPeriodicTuning` method or by calling the `TuneModel` method.

`PERIODIC_TUNING_DISABLED = 1;`

`PERIODIC_TUNING_DISABLED_VALUE`

The model has periodic tuning disabled. Tuning can be reenabled by calling the `EnableModelPeriodicTuning` method or by calling the `TuneModel` method.

`PERIODIC_TUNING_DISABLED = 1;`

`PERIODIC_TUNING_ENABLED`

The model has periodic tuning enabled. Tuning can be disabled by calling the `DisableModelPeriodicTuning` method.

`PERIODIC_TUNING_ENABLED = 2;`

`PERIODIC_TUNING_ENABLED_VALUE`

The model has periodic tuning enabled. Tuning can be disabled by calling the `DisableModelPeriodicTuning` method.

`PERIODIC_TUNING_ENABLED = 2;`

`PERIODIC_TUNING_STATE_UNSPECIFIED`

Unspecified default value, should never be explicitly set.

`PERIODIC_TUNING_STATE_UNSPECIFIED = 0;`

`PERIODIC_TUNING_STATE_UNSPECIFIED_VALUE`

Unspecified default value, should never be explicitly set.

`PERIODIC_TUNING_STATE_UNSPECIFIED = 0;`

`UNRECOGNIZED`

## Static Methods

**Name**

**Description**

`forNumber(int value)`

`getDescriptor()`

`internalGetValueMap()`

`valueOf(Descriptors.EnumValueDescriptor desc)`

`valueOf(int value)`

**Deprecated.** _Use [#forNumber(int)](/java/docs/reference/google-cloud-retail/2.23.0/com.google.cloud.retail.v2.Model.PeriodicTuningState#com_google_cloud_retail_v2_Model_PeriodicTuningState_forNumber_int_) instead._

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

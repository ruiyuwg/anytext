-   [Home](https://docs.cloud.google.com/)
-   [Documentation](https://docs.cloud.google.com/docs)
-   [Developer tools](https://docs.cloud.google.com/docs/costs-usage)
-   [Java](https://docs.cloud.google.com/java/docs)
-   [Client libraries](https://docs.cloud.google.com/java/docs/reference)

Send feedback

# Enum DataprocMetricConfig.MetricSource (4.84.0) Stay organized with collections Save and categorize content based on your preferences.

4.84.0 (latest) 4.82.0 4.80.0 4.79.0 4.78.0 4.77.0 4.75.0 4.73.0 4.72.0 4.71.0 4.70.0 4.69.0 4.67.0 4.65.0 4.64.0 4.61.0 4.60.0 4.59.0 4.57.0 4.56.0 4.55.0 4.54.0 4.53.0 4.52.0 4.51.0 4.50.0 4.49.0 4.48.0 4.46.0 4.45.0 4.44.0 4.43.0 4.42.0 4.41.0 4.40.0 4.39.0 4.38.0 4.37.0 4.36.0 4.34.0 4.33.0 4.32.0 4.31.0 4.30.0 4.29.0 4.28.0 4.27.0 4.26.0 4.25.0 4.24.0 4.21.0 4.20.0 4.19.0 4.18.0 4.17.0 4.16.0 4.15.0 4.14.0 4.13.0 4.12.0 4.11.0 4.10.0 4.9.0 4.8.0 4.6.0 4.5.0 4.4.0 4.3.0 4.2.0 4.1.0 4.0.8 3.1.2 3.0.3 2.3.1

```
public enum DataprocMetricConfig.MetricSource extends Enum<DataprocMetricConfig.MetricSource> implements ProtocolMessageEnum
```

A source for the collection of Dataproc custom metrics (see [Custom metrics](https://cloud.google.com//dataproc/docs/guides/dataproc-metrics#custom_metrics)).

Protobuf enum `google.cloud.dataproc.v1.DataprocMetricConfig.MetricSource`

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

`FLINK`

flink metric source

`FLINK = 8;`

`FLINK_VALUE`

flink metric source

`FLINK = 8;`

`HDFS`

HDFS metric source.

`HDFS = 2;`

`HDFS_VALUE`

HDFS metric source.

`HDFS = 2;`

`HIVEMETASTORE`

hivemetastore metric source

`HIVEMETASTORE = 7;`

`HIVEMETASTORE_VALUE`

hivemetastore metric source

`HIVEMETASTORE = 7;`

`HIVESERVER2`

Hiveserver2 metric source.

`HIVESERVER2 = 6;`

`HIVESERVER2_VALUE`

Hiveserver2 metric source.

`HIVESERVER2 = 6;`

`METRIC_SOURCE_UNSPECIFIED`

Required unspecified metric source.

`METRIC_SOURCE_UNSPECIFIED = 0;`

`METRIC_SOURCE_UNSPECIFIED_VALUE`

Required unspecified metric source.

`METRIC_SOURCE_UNSPECIFIED = 0;`

`MONITORING_AGENT_DEFAULTS`

Monitoring agent metrics. If this source is enabled, Dataproc enables the monitoring agent in Compute Engine, and collects monitoring agent metrics, which are published with an `agent.googleapis.com` prefix.

`MONITORING_AGENT_DEFAULTS = 1;`

`MONITORING_AGENT_DEFAULTS_VALUE`

Monitoring agent metrics. If this source is enabled, Dataproc enables the monitoring agent in Compute Engine, and collects monitoring agent metrics, which are published with an `agent.googleapis.com` prefix.

`MONITORING_AGENT_DEFAULTS = 1;`

`SPARK`

Spark metric source.

`SPARK = 3;`

`SPARK_HISTORY_SERVER`

Spark History Server metric source.

`SPARK_HISTORY_SERVER = 5;`

`SPARK_HISTORY_SERVER_VALUE`

Spark History Server metric source.

`SPARK_HISTORY_SERVER = 5;`

`SPARK_VALUE`

Spark metric source.

`SPARK = 3;`

`UNRECOGNIZED`

`YARN`

YARN metric source.

`YARN = 4;`

`YARN_VALUE`

YARN metric source.

`YARN = 4;`

## Static Methods

**Name**

**Description**

`forNumber(int value)`

`getDescriptor()`

`internalGetValueMap()`

`valueOf(Descriptors.EnumValueDescriptor desc)`

`valueOf(int value)`

**Deprecated.** _Use [#forNumber(int)](/java/docs/reference/google-cloud-dataproc/latest/com.google.cloud.dataproc.v1.DataprocMetricConfig.MetricSource#com_google_cloud_dataproc_v1_DataprocMetricConfig_MetricSource_forNumber_int_) instead._

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

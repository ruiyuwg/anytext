Simple Log Service SDK for Android encapsulates all API operations of Simple Log Service. You can use Simple Log Service SDK for Android to collect Android logs in a convenient manner.

## Release notes

For more information, see [aliyun-log-android-sdk](https://github.com/aliyun/aliyun-log-android-sdk/releases).

## Sample code

Simple Log Service SDK for Android provides a variety of sample code for your reference and use. The following table provides links to the sample code.

**GitHub source code**

**Description**

[ProducerExample.java](https://github.com/aliyun/aliyun-log-android-sdk/blob/master/app/src/main/java/com/aliyun/sls/android/producer/example/example/producer/ProducerExample.java)

Examples on how to collect logs based on recommended collection configurations

[ProducerWithDynamicConfig.java](https://github.com/aliyun/aliyun-log-android-sdk/blob/master/app/src/main/java/com/aliyun/sls/android/producer/example/example/producer/ProducerWithDynamicConfig.java)

Examples on how to collect logs based on collection configurations that can be dynamically updated

[ProducerWithNoPersistent.java](https://github.com/aliyun/aliyun-log-android-sdk/blob/master/app/src/main/java/com/aliyun/sls/android/producer/example/example/producer/ProducerWithNoPersistent.java)

Examples on how to collect logs based on collection configurations in which no caches are included

## Description

The following table describes the modules that are provided by Simple Log Service SDK for Android to implement log collection.

**Module**

**SDK component**

**Description**

Producer

[aliyun-log-android-sdk](https://github.com/aliyun/aliyun-log-android-sdk/tree/master/aliyun_sls_android_producer)

A basic collection SDK that encapsulates the API operations related to log collection.

Framework-specific core library

[sls-android-core](https://github.com/aliyun/aliyun-log-android-sdk/tree/master/aliyun_sls_android_core)

The core library of the SDK framework that must be connected when crash data, data of network quality analysis, and trace data are collected.

OpenTelemetry protocol library

[sls-android-ot](https://github.com/aliyun/aliyun-log-android-sdk/tree/master/aliyun_sls_android_ot)

The core implementation library of OpenTelemetry.

OpenTelemetry protocol extension library

[sls-android-ot-ktx](https://github.com/aliyun/aliyun-log-android-sdk/tree/master/aliyun_sls_android_ot_ktx)

The Kotlin extension library of OpenTelemetry that supports features such as coroutine.

Trace data collection

[sls-android-trace](https://github.com/aliyun/aliyun-log-android-sdk/tree/master/aliyun_sls_android_trace)

The library used to collect Android trace data. For more information, see [Collect user experience monitoring data from Android devices](/help/en/sls/access-android-user-experience-monitoring-data).

Network extension library

[sls-android-okhttp](https://github.com/aliyun/aliyun-log-android-sdk/tree/master/aliyun_sls_android_okhttp)

The library used to automatically collect Android trace data from the OkHttp network library. For more information, see [Collect user experience monitoring data from Android devices](/help/en/sls/access-android-user-experience-monitoring-data).

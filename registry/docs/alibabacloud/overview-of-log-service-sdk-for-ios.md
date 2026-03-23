Simple Log Service SDK for iOS encapsulates collection-related API operations of Simple Log Service. You can use Simple Log Service SDK for iOS to collect iOS logs with ease.

## Versions

For more information, see [Alibaba Cloud Simple Log Service SDK for iOS Releases](https://github.com/aliyun/aliyun-log-ios-sdk/releases).

## Sample code

Simple Log Service SDK for iOS provides a variety of sample code that you can use for reference. The following table describes the sample code that is provided by Simple Log Service SDK for iOS.

**GitHub source code**

**Description**

[ViewController.swift](https://github.com/aliyun/aliyun-log-ios-sdk/blob/master/XcodeSwift/AliyunLogSwift/ViewController.swift)

Includes sample code that shows how to collect logs based on the Swift programming language.

[ProducerExampleNoCacheController.m](https://github.com/aliyun/aliyun-log-ios-sdk/blob/master/Xcode/iOS/iOS/Example/Producer/ProducerExampleNoCacheController.m)

Includes sample code that shows how to collect logs based on the Objective-C programming language and the collection configurations excluding caches.

[ProducerExampleController.m](https://github.com/aliyun/aliyun-log-ios-sdk/blob/master/Xcode/iOS/iOS/Example/Producer/ProducerExampleController.m)

Includes sample code that shows how to collect logs based on the Objective-C programming language and the collection configurations including caches.

[ProducerExampleController.m](https://github.com/aliyun/aliyun-log-ios-sdk/blob/master/Xcode/iOS/iOS/Example/Producer/ProducerExampleController.m)

Includes sample code that shows how to collect logs based on the Objective-C programming language and the collection configurations including callbacks.

## Description

The following table describes the modules that are provided by Simple Log Service SDK for iOS to implement log collection.

**Module**

**SDK component**

**Description**

Producer

Producer

A basic collection SDK that encapsulates the API operations related to log collection.

Framework-specific core library

Core

The core library of the SDK framework that must be connected when crash data, data of network quality analysis, and trace data are collected.

OpenTelemetry protocol library

OT

The core implementation library of OpenTelemetry.

OpenTelemetry protocol extension library

OTSwift

The Swift extension library of OpenTelemetry.

Trace data collection

Trace

The library used to collect iOS trace data.

Network extension library

URLSessionInstrumentation

The library used to automatically collect iOS trace data from the OkHttp network library.

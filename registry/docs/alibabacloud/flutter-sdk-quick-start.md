The Log Service Flutter SDK wraps log collection APIs, allowing you to easily send logs from your Flutter applications to Log Service.

## **Release notes**

The Log Service Flutter SDK is published on the official Dart package repository. For more information, see [Aliyun Log Flutter Release](https://pub.dev/packages/aliyun_log_dart_sdk/versions).

## **Sample code**

The Log Service Flutter SDK provides sample code for your reference. For more examples, see [Aliyun Log Flutter SDK Example](https://pub.dev/packages/aliyun_log_dart_sdk/example).

## **Prerequisites**

-   You have installed the [Flutter development environment](https://docs.flutter.dev/get-started/install).
    
-   The Log Service Flutter SDK supports Android 4.0 or later and iOS 10.0 or later.
    
    -   For iOS builds, you must add the following to your Podfile:
        
        ```
        source 'https://github.com/CocoaPods/Specs.git'
        source 'https://github.com/aliyun-sls/Specs.git'
        # If you are using a repository in Chinese mainland, you must also add this line.
        source 'https://gitee.com/aliyun-sls/Specs.git'
        ```
        

## **Procedure**

### **Install the SDK**

1.  Create a Flutter project.
    
2.  Add the Log Service Flutter SDK module. From the root of your project, run the following command:
    
    ```
    flutter pub add aliyun_log_dart_sdk
    ```
    
    After the process is complete, the following information is automatically added to the project's `pubspec.yaml` file, and `flutter pub get` is implicitly run.
    
    ```
    dependencies:
     aliyun_log_dart_sdk: ^1.0.0 // For more version information, see the Flutter SDK overview.
    ```
    
3.  Import the package in your Dart file.
    
    ```
    import 'package:aliyun_log_dart_sdk/aliyun_log_dart_sdk.dart';
    ```
    

### **Initialize the SDK**

In most cases, you can use the following code for initialization. If you need to configure the `LogProducerConfiguration` class, for example, to specify the size of log packages to upload or enable resumable upload, see [Configuration parameters](#3a02a6f0) for more information.

```
import 'package:aliyun_log_dart_sdk/aliyun_log_dart_sdk.dart';

AliyunLogDartSdk? _aliyunLogSdk;

void _initProducer() async {
  // Configure the Endpoint, Project name, and Logstore name. You can dynamically update these and other parameters.
    LogProducerConfiguration configuration = LogProducerConfiguration(
      endpoint: 'your endpoint', project: 'your project', logstore: 'your logstore'
    ); 
  // An Alibaba Cloud AccessKey. Using an AccessKey pair is risky as it grants full access to your resources. We strongly recommend using a RAM User for API calls.
    configuration.accessKeyId = 'your access key id';
    configuration.accessKeySecret = 'your access key secret';
    configuration.securityToken = 'your access key token'; // Required only when using a temporary AccessKey from Security Token Service (STS).
    _aliyunLogSdk = AliyunLogDartSdk();
    LogProducerResult result = await _aliyunLogSdk!.initProducer(configuration);
}
```

### **Upload logs**

You can call the `addLog` method to upload custom business logs.

```
LogProducerResult code = await _aliyunLogSdk!.addLog({
 'str': 'str value',
 'int': 12,
 'double': 12.12,
 'boolean': true,
 'map': {'key': 'value', 'inntt': 3333},
 'array': ['a1', 'a2'],
 'null': null,
 'content': 'Chinese content'
});
```

Logs are uploaded successfully only if `code == LogProducerResult.ok`. Otherwise, an error code is returned. For more information, see [Error codes](#5fe496b030hff).

### **Obfuscation rules**

If your Flutter project has obfuscation rules enabled (these rules are enabled by default in Flutter v1.16.2 and later), you also need to add the following rules to your project's obfuscation configuration file. Otherwise, the `Android` project may not run correctly. iOS projects are not affected by this rule.

```
-keep class com.aliyun.sls.android.producer.* { *; }
-keep interface com.aliyun.sls.android.producer.* { *; }
```

### **Dynamic configuration**

You can dynamically configure parameters such as Endpoint, Project, Logstore, and AccessKey.

-   Dynamically configure the Endpoint, Project, and Logstore.
    
    ```
    await _aliyunLogSdk!.setEndpoint('new-endpoint');
    await _aliyunLogSdk!.setProject('new-project-name');
    await _aliyunLogSdk!.setLogstore('new-logstore-name');
    ```
    
-   Dynamically configure the AccessKey.
    
    ```
    // The securityToken is optional. It is required only when the AccessKey is obtained through Security Token Service (STS).
    await _aliyunLogSdk!.setAccessKey('your accesskey id', 'your accesskey secret', securityToken: 'your accesskey token');
    ```
    
-   Dynamically configure source, topic, and tag parameters.
    
    ```
    await _aliyunLogSdk!.setSource('flutter');
    await _aliyunLogSdk!.setTopic('flutter-test');
    await _aliyunLogSdk!.addTag('tag1', 'value1');
    await _aliyunLogSdk!.addTag('tag2', 'value2');
    ```
    
-   Dynamically configure other parameters.
    
    **Important**
    
    `AliyunLogDartSdk.updateConfiguration()` does not support dynamically configuring resumable upload parameters.
    
    ```
    LogProducerConfiguration configuration = LogProducerConfiguration();
    configuration.dropDelayLog = true;
    configuration.dropUnauthorizedLog = true;
    // Other parameters of the LogProducerConfiguration class can also be set this way.
    await _aliyunLogSdk!.updateConfiguration(configuration);
    ```
    

### **Set a log callback**

You can set a callback for log-sending operations, which is triggered on success or failure. Use this callback to monitor the SDK's status or update its configuration.

```
_aliyunLogSdk!.setLogCallback((resultCode, errorMessage, logBytes, compressedBytes) {
	// The parameters are invalid. You need to update the configuration.
	if (LogProducerResult.parametersInvalid == resultCode) {
	// For example, update the Endpoint.
	_aliyunLogSdk!.setEndpoint('your endpoint');
	// A missing or incorrect AccessKey also triggers parametersInvalid.
	_aliyunLogSdk!.setAccessKey('your access key id', 'your access key secret', securityToken: 'your token');
}

 	// The authorization has expired. You need to update the AccessKey.
	if (LogProducerResult.sendUnauthorized == resultCode) {
		_aliyunLogSdk!.setAccessKey('your access key id', 'your access key secret', securityToken: 'your token');
	}
});
```

### **Enable Resumable Upload**

**Important**

To enable the resumable upload feature, you must enable it when you initialize `AliyunLogDartSdk`. You cannot dynamically modify the resumable upload configuration after the SDK is initialized.

You can refer to the following code to enable resumable upload when you initialize `AliyunLogDartSdk`.

```
configuration.persistent = true; // Enable Resumable Upload.
configuration.persistentFilePath = 'flutter/demo'; // The directory to cache binlogs.
configuration.persistentForceFlush = false; // Disable force flush. We recommend keeping this disabled, as enabling it can affect performance.
configuration.persistentMaxFileCount = 10; // The maximum number of cached files. Default: 10.
configuration.persistentMaxFileSize = 1024 * 1024; // The maximum size of a single cache file, in bytes. Default: 1024 * 1024.
configuration.persistentMaxLogCount = 64 * 1024; // The maximum number of cached logs. Default: 64 * 1024.
_aliyunLogSdk = AliyunLogDartSdk();
LogProducerResult result = await _aliyunLogSdk!.initProducer(configuration);
```

## Parameters

The parameters supported by the `LogProducerConfiguration` class are listed in the following table.

**Parameter**

**Type**

**Description**

endpoint

string

The endpoint of the region where the Project is located. For example, `cn-hangzhou.log.aliyuncs.com`. To obtain the endpoint, see [Endpoint](/help/en/sls/manage-a-project/#section-mb8-vvq-67c).

project

string

The name of the Project. For more information, see [Project](/help/en/sls/project).

logstore

string

The name of the Logstore. For more information, see [Logstore](/help/en/sls/logstore).

accessKeyId

string

Your AccessKey ID. For more information, see [AccessKey pair](/help/en/sls/developer-reference/access-key#title-jdr-pib-wlv).

accessKeySecret

string

Your AccessKey Secret. For more information, see [AccessKey pair](/help/en/sls/developer-reference/access-key#title-jdr-pib-wlv).

securityToken

string

The security token required for Security Token Service (STS) authentication. For more information, see [AssumeRole](/help/en/ram/developer-reference/api-sts-2015-04-01-assumerole).

debuggable

bool

Specifies whether to enable Debug Mode. Default: false.

We recommend enabling this mode when troubleshooting log collection issues.

maxBufferLimit

int

The maximum memory that the SDK can use for caching. Unit: bytes. Default: 64 \* 1024 \* 1024.

connectTimeout

int

The network connection timeout period, in seconds. Default: 10. We recommend that you do not change this value.

sendTimeout

int

The timeout period for sending data, in seconds. Default: 15. We recommend that you do not change this value.

ntpTimeOffset

int

The difference between the device time and the standard time, in seconds. Default: 0. We recommend that you do not change this value, as the SDK automatically corrects the time.

maxLogDelayTime

int

The maximum time difference allowed between a log's timestamp and the local device time. Unit: seconds. Default: 7 \* 24 \* 3600. If this value is exceeded, the log is processed based on the **dropDelayLog** parameter. We recommend that you do not change this value.

dropDelayLog

bool

Specifies the policy for handling logs that exceed **maxLogDelayTime**. The default value is false, which means that logs are not discarded. `__time__`

field is reset to the current time.

dropUnauthorizedLog

bool

Specifies whether to drop logs that fail authentication. Default: false.

source

string

`__source__`

field, which indicates the log source. Default: Android or iOS.

topic

string

`__topic__`

field, which indicates the Log Topic. No default value.

Tags (via addTag() method)

string

`__tag__:xxx:yyy`

The value of the field, which is the tag metadata. This field has no default value. You must set this value by calling `LogProducerConfiguration.addTag()` or `AliyunLogDartSdk.addTag()`.

method.

packetLogBytes

int

The size of each log package to be sent. Valid values: 1 to 5,242,880. Unit: bytes. Default: 1024 \* 1024.

packetLogCount

int

The maximum number of logs in each package. Valid values: 1 to 4,096. Default: 1,024.

packetTimeout

int

The timeout period for a log package. If the timeout is reached, the package is sent immediately. Unit: milliseconds. Default: 3000.

persistent

boolean

Specifies whether to enable the Resumable Upload feature. Default: false. We recommend enabling this feature.

persistentForceFlush

boolean

Specifies whether to forcibly flush the cache every time addLog is called.

`true`: Enabled. Enabling this can affect performance.

`false` (Default): Disabled.

We recommend enabling this feature only in high-reliability scenarios.

persistentFilePath

string

The path to store cached binlogs for Resumable Upload. Default: empty string.

**Important**

The specified path must exist. Each `AliyunLogDartSdk` instance requires a unique path.

persistentMaxFileCount

int

The maximum number of persistent files. Default: 10.

persistentMaxFileSize

int

The maximum size of each persistent file, in bytes. Default: 1024\*1024.

persistentMaxLogCount

int

The maximum number of logs that can be cached. Default: 64\*1024.

## Error codes

**Error code**

**Description**

**Solution**

invalid

The SDK is uninitialized or has been destroyed.

1.  Check if the SDK was initialized correctly.
    
2.  Check if the `destroy()` method was called.
    

writeError

A write error occurred, likely because the Project's write traffic quota was exceeded.

Adjust the write traffic quota for the Project. For more information, see [Adjust resource quotas](/help/en/sls/adjust-resource-quotas).

dropError

The cache is full.

Refer to the parameter descriptions for the `LogProducerConfiguration` class, adjust the values of the maxBufferLimit, persistentMaxLogCount, and persistentMaxFileSize parameters, and retry.

sendNetworkError

Network error.

Check your network connection and retry.

sendQuotaError

The write traffic of the Project has reached its limit.

Adjust the write traffic quota for the Project. For more information, see [Adjust resource quotas](/help/en/sls/adjust-resource-quotas).

sendUnauthorized

The AccessKey has expired, is invalid, or its permission policy is incorrect.

Verify that your AccessKey is valid and that the associated RAM User has the required permissions on Log Service resources.

For more information, see [Grant permissions to a RAM user](/help/en/sls/create-a-ram-user-and-authorize-the-ram-user-to-access-log-service#section-kxp-1ok-zj4).

sendServerError

Server error.

We recommend that you retry the operation.

sendDiscardError

The data was discarded. This is usually caused by time skew between the device and the server.

The SDK automatically resends the data.

sendTimeError

The device time is not synchronized with the server time.

The SDK automatically resolves this issue.

sendExitBuffered

Cached data was not sent before the SDK was destroyed.

We recommend enabling the Resumable Upload feature to prevent data loss.

parametersInvalid

Invalid SDK initialization parameters.

Check the configurations for AccessKey, Endpoint, Project, and Logstore.

persistentError

Failed to write cached data to the disk.

1.  Check if the cache file path is correctly configured.
    
2.  Check if the cache is full.
    
3.  Check if there is sufficient disk space.
    

unknown

Unknown error.

We recommend that you retry the operation.

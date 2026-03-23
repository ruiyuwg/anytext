This topic describes how to collect user experience monitoring data from Android devices to the Full-stack Observability application.

## Prerequisites

A Full-stack Observability instance is created, and the version of the instance is 2.1.0 or later. For more information, see [Create an instance](/help/en/sls/create-an-instance-1).

## **Step 1: Integrate an SDK**

Add the following settings to the build.gradle file at the app or module level of your Android Studio project:

```
// Specify the OpenTelemetry protocol library.
implementation(platform("io.opentelemetry:opentelemetry-bom:1.30.0"))
implementation("io.opentelemetry:opentelemetry-api")
implementation('io.opentelemetry:opentelemetry-sdk')
implementation("io.opentelemetry:opentelemetry-semconv:1.30.0-alpha")

// Capture crashes on the Android platform.
implementation 'io.github.aliyun-sls:aliyun-log-android-sdk:2.7.0@aar'
implementation 'io.github.aliyun-sls:android-crashreporter:1.0.0@aar'
implementation 'io.github.aliyun-sls:android-exporter-otlp:1.0.0@aar'
implementation 'io.github.aliyun-sls:android-otel-common:1.0.0@aar'
```

### **Step 2: Configure permissions**

If you want to upload error monitoring data, you must apply for network permissions. Add the following permission declaration to the AndroidManifest.xml file:

```
<uses-permission android:name="android.permission.INTERNET" />
```

### **Step 3: Initialize the SDK**

```
private void initCrashReporter() {
    ConfigurationManager.getInstance().setProvider(
        scope -> AccessKey.accessKey(
            "${access-key-id}",
            "${access-key-secret}",
            "${access-key-token}"),
        scope -> Workspace.workspace("https://${endpoint}", "${project}", "${instanceId}"),
        scope -> {
            Environment environment = Environment.environment();
            // Configure the environment information. The default value is default. In most cases, we recommend you set this parameter to dev if you use the debug version and to pub if you use the release version. 
            environment.setEnv("default");
            // The user ID. This parameter is optional. 
            //environment.setUid("123456789");
            // The device ID. This parameter is optional. 
            //environment.setUtdid("your device id");
            return environment;
        }
    );
    // In most cases, we recommend that you set this parameter to true if you use the debug version and to false if you use the release version. 
    final boolean debuggable = false;
    // Complete SDK initialization. 
    CrashReporter.init(context, debuggable);
}
```

## **Variables**

**Variable**

**Description**

**Example**

`${endpoint}`

The endpoint of the Simple Log Service project. Specify an endpoint in the `${region-endpoint}` format. You can access Simple Log Service by using a public or internal endpoint. A public endpoint can be accessed over the Internet. An internal endpoint can be accessed over the classic network or a virtual private cloud (VPC). For more information, see [Endpoints](/help/en/sls/endpoints).

cn-hangzhou.log.aliyuncs.com

`${project}`

The name of the Simple Log Service project.

test-project

`${instance}`

The ID of the Full-stack Observability instance. For more information, see [Create an instance](/help/en/sls/create-an-instance-1).

test-traces

`${access-key-id}`

The AccessKey ID of your Alibaba Cloud account.

We recommend that you use the AccessKey pair of a Resource Access Management (RAM) user that has only the write permissions on the Simple Log Service project. An AccessKey pair consists of an AccessKey ID and an AccessKey secret. For more information about how to grant the write permissions on a specified project to a RAM user, see [Use custom policies to grant permissions to a RAM user](/help/en/sls/use-custom-policies-to-grant-permissions-to-a-ram-user). For more information about how to obtain an AccessKey pair, see [AccessKey pair](/help/en/sls/accesskey-pair).

None

`${access-key-secret}`

The AccessKey secret of your Alibaba Cloud account.

We recommend that you use the AccessKey pair of a RAM user that has only the write permissions on the Simple Log Service project.

None

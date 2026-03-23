This topic describes how to use Simple Log Service SDK for HarmonyOS to collect logs from HarmonyOS devices.

## Prerequisites

Simple Log Service SDK for HarmonyOS is installed. For more information, see [Install Simple Log Service SDK for HarmonyOS](/help/en/sls/developer-reference/install-the-harmonyos-sdk).

## Initialize the SDK

You can initialize the SDK based on the following sample code:

```
import { AliyunLog, LogCallback } from "@aliyunsls/producer"

let aliyunLog: AliyunLog = new AliyunLog(
  "<your endpoint>",
  "<your project>",
  "<your logstore>",
  "<your accesskey id>",
  "<your accesskey secret>",
  "<your accesskey token>" // This variable is required only when the AccessKey pair is obtained by calling a Security Token Service (STS) operation.
);
```

-   Simple Log Service provides endpoints for the region where a project resides. You can access Simple Log Service by using an internal or public endpoint. An internal endpoint can be accessed over the classic network or a virtual private cloud (VPC). A public endpoint can be accessed over the Internet. For more information, see [Endpoints](/help/en/sls/manage-a-project/#section-mb8-vvq-67c).
    
-   An Alibaba Cloud AccessKey pair is a secure identity credential that you can use to access your Alibaba Cloud resources by calling API operations. You can use the AccessKey pair to sign API requests to pass the security authentication. For more information, see [AccessKey pair](/help/en/sls/accesskey-pair).
    

## Report logs

You can use the addLog method to report custom business logs.

```
let code = aliyunLog.addLog(new Map(
  [
    ["key1", "value1"],
    ["key2", "value2"],
    ["key3", "value3"],
  ]
));
```

If `code == 0` is returned, logs are reported. For more information about ststus codes, see [Status codes](#1e3131c420v7t).

## Configure an AccessKey pair

Simple Log Service SDK for HarmonyOS SDK allows you to dynamically update an AccessKey pair. You can update an AccessKey pair based on the following sample code:

```
aliyunLog.setAccessKey(
    "<your accesskey id>", // Specify a valid AccessKey ID.
    "<your accesskey secret>", // Specify a valid AccessKey secret.
    null // Specify a valid AccessKey token. This variable is required only when the AccessKey pair is obtained by calling an STS operation.
);
```

## Configure callback for log sending

Simple Log Service SDK for HarmonyOS supports callback for log sending. When a log is sent or fails to be sent, callback information is generated. You can use the callback information to view the status of the SDK or update the parameter settings of the SDK.

```
class MyLogCallback implements LogCallback {

    init() {
        aliyunLog.setLogCallback(this);
    }

    onLogCallback(logStore:string, code:number, logBytes:number, compressedBytes:number, errorMessage:string) {
        // The error code 6 indicates that the AccessKey pair is invalid.
        // The error code 11 indicates that the parameter settings are invalid.
        if (code == 6 || code == 11) {
            aliyunLog.setAccessKey(
                    "<your accesskey id>", // Specify a valid AccessKey ID.
                    "<your accesskey secret>", // Specify a valid AccessKey secret.
                    null // Specify a valid AccessKey token. This variable is required only when the AccessKey pair is obtained by calling an STS operation.
            );
        }
    }
}
```

## Status codes

**Status code**

**Description**

**Solution**

0

The operation was successful.

Normal. No operations are required.

1

The SDK is destroyed or invalid.

Check whether the SDK fails to be initialized.

2

A data write error occurred.

The write traffic of the project has reached the upper limit. If you want to increase the limit, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) to contact technical support.

3

The cache is full.

[Submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) to contact technical support.

4

A network error occurred.

Check the network connection and try again.

5

A write quota error occurred in the project.

The write traffic of the project has reached the upper limit. If you want to increase the limit, [submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) to contact technical support.

6

The AccessKey pair is expired or invalid.

The AccessKey is expired or invalid, or the permission policy of the RAM user to which the AccessKey pair belongs is incorrectly configured. Modify the permission policy of the RAM user to grant the management permissions on Simple Log Service resources. For more information, see [Step 2: Grant permissions to the RAM user](/help/en/sls/create-a-ram-user-and-authorize-the-ram-user-to-access-log-service#section-kxp-1ok-zj4).

7

A service error occurred.

A service error occurred. [Submit a ticket](https://smartservice.console.alibabacloud.com/console.htm) to contact technical support.

8

Data is discarded.

In most cases, the error is caused by inconsistency between the device time and server time. The SDK automatically re-sends the data.

9

The time is not synchronized with the server time.

The device time is inconsistent with the server time. The SDK automatically troubleshoots the error.

10

When the SDK is destroyed, the cached data has not been sent.

Data loss may occur. We recommend that you enable resumable upload to prevent data loss.

11

A parameter error occurred during SDK initialization.

In most cases, the error occurs because no AccessKey pair is specified or the Endpoint, Project, and Logstore parameters are incorrectly configured. Check the parameter settings and try again.

99

Cached data failed to be written to the system disk.

In most cases, the error occurs because the cache file path is incorrectly configured, the cache file is full, or the system disk space is insufficient.

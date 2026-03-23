You can use Simple Log Service SDK for HarmonyOS to collect logs from HarmonyOS devices. Simple Log Service SDK for HarmonyOS encapsulates collection-related API operations of Simple Log Service based on ArkTS and is written in the C programming language.

## Versions

Simple Log Service SDK for HarmonyOS is hosted and released on OpenHarmony Package Management. For more information, see [Aliyun Log HarmonyOS SDK Release](https://ohpm.openharmony.cn/#/cn/detail/@aliyunsls%2Fproducer).

## Sample code

Simple Log Service SDK for HarmonyOS provides a variety of sample code that you can use or reference.

```
import hilog from '@ohos.hilog';

// Import the SDK module.
import { AliyunLog, LogCallback } from "@aliyunsls/producer"

// Initialize the SDK.
let aliyunLog: AliyunLog = new AliyunLog(
  "<your endpoint>",
  "<your project>",
  "<your logstore>",
  "<your accesskey id>",
  "<your accesskey secret>",
  "<your accesskey token>" // This variable is required only when the AccessKey pair is obtained by calling a Security Token Service (STS) operation.
);

// Write logs.
aliyunLog.addLog(new Map(
  [
    ["key1", "value1"],
    ["key2", "value2"],
    ["key3", "value3"],
  ]
));

class MyLog implements LogCallback {

  // Configure a log callback.
  init() {
    aliyunLog.setLogCallback(this);
  }

  // Write logs.
  addLog() {
    aliyunLog.addLog(new Map([
      ["key1", "val1"],
      ["key2", "val2"],
      ["key3", "val3"],
      ["key4", "val4"],
    ]))
  }

  // Process the log callback.
  // For information about the valid values of code, see the related topics.
  onLogCallback(logStore: string, code: number, logBytes: number, compressedBytes: number, errorMessage: string) {
    hilog.info(0x0000,
      'testTag',
      'onLogCallback. logStore: %{public}s, code: %{public}d, logBytes: %{public}d, compressedBytes: %{public}d, errorMessage: %{public}s',
      logStore, code, logBytes, compressedBytes, errorMessage
    );
    aliyunLog.setAccessKey(
      "<your accesskey id>", // Specify a valid AccessKey ID.
      "<your accesskey secret>", // Specify a valid AccessKey secret.
      null // Specify a valid AccessKey token. This variable is required only when the AccessKey pair is obtained by calling an STS operation.
    );
  }
}

@Entry
@Component
struct Index {
  @State message: string = 'Hello World'
  private log: MyLog = new MyLog();

  build() {
    Row() {
      Column() {
        Text("Init")
          .fontSize(50)
          .fontWeight(FontWeight.Bold)
          .onClick(() => {
            this.log.init();
          });
        Text("Add")
          .fontSize(50)
          .fontWeight(FontWeight.Bold)
          .onClick(() => {
            this.log.addLog();
          })
      }
      .width('100%')
    }
    .height('100%')
  }
}
```

## **Billing**

The fees that are incurred when you collect logs by using Simple Log Service SDK for HarmonyOS are the same as the fees that are incurred when you collect logs in the Simple Log Service console. For more information, see [Billing overview](/help/en/sls/billing-overview).

## **References**

-   For information about how to install Simple Log Servic SDK for HarmonyOS, see [Install Simple Log Service SDK for HarmonyOS](/help/en/sls/developer-reference/install-the-harmonyos-sdk).
    
-   For information about how to get started with Simple Log Service SDK for HarmonyOS, see [Get started with Simple Log Service SDK for HarmonyOS](/help/en/sls/developer-reference/harmonyos-sdk-quick-start).

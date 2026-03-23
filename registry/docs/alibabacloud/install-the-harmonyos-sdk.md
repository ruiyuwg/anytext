Before you can use Simple Log Service SDK for HarmonyOS to collect logs from HarmonyOS devices to Simple Log Service, you must activate Simple Log Service, obtain an Alibaba Cloud AccessKey pair, and prepare a HarmonyOS development environment. This topic describes how to install Simple Log Service SDK for HarmonyOS.

## Prerequisites

-   Simple Log Service is activated. For more information, see [Activate Simple Log Service](https://www.alibabacloud.com/product/log-service?).
    
-   A project and a Logstore are created. For more information, see [Manage a project](/help/en/sls/manage-a-project/#section-ahq-ggx-ndb) and [Manage a Logstore](/help/en/sls/manage-a-logstore#section-v52-2jx-ndb).
    
-   An AccessKey pair is created and obtained. For more information, see [AccessKey pair](/help/en/sls/accesskey-pair).
    
    **Important**
    
    The AccessKey pair of an Alibaba Cloud account has permissions on all API operations. Using these credentials to perform operations in Simple Log Service is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O&M. To create a RAM user, log on to the RAM console. Make sure that the RAM user has the management permissions on Simple Log Service resources. For more information, see [Step 2: Grant permissions to the RAM user](/help/en/sls/create-a-ram-user-and-authorize-the-ram-user-to-access-log-service#section-kxp-1ok-zj4).
    
-   A HarmonyOS application development environment is installed. For more information, see [HarmonyOS Developer Guide](https://developer.harmonyos.com/cn/docs/documentation/doc-guides/document-outline-js-ets-0000001282486428).
    
    Simple Log Service SDK for HarmonyOS supports the HarmonyOS API V9.0 and later.
    

## Procedure

1.  Create a HarmonyOS application project.
    
2.  Import the Simple Log Service SDK for HarmonyOS module. Run the following command in the entry or library directory of the project:
    

```
ohpm install @aliyunsls/producer
```

After the command is run, the following information is automatically added to the oh-package.json5 file of the entry or library directory.

```
"dependencies": {
 "@aliyunsls/producer": "^0.3.0"
}
```

3.  After the Simple Log Service module is imported to the project, you can import the module to a specified ets file and write code.
    

```
import { AliyunLog, LogCallback } from "@aliyunsls/producer"
```

## **What to do next**

For information about how to use Simple Log Service SDK for HarmonyOS to collect logs, see [Get started with Simple Log Service SDK for HarmonyOS](/help/en/sls/developer-reference/harmonyos-sdk-quick-start).

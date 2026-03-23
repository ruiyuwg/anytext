Simple Log Service (SLS) provides an SDK for different programming languages, such as .NET Core, Java, Python, PHP, Node.js, C, Go, iOS, Android, and C++. The SDK allows you to perform various operations, such as collecting, querying, and analyzing logs.

## Usage notes

SLS SDK for different programming languages varies in terms of implementation. However, SLS SDK for different programming languages encapsulates the same operations of SLS API and provides similar features. SLS SDK supports the following features:

-   Encapsulation of SLS API. SLS SDK implements the underlying API request creation and response parsing. SLS API for different programming languages supports similar operations. This simplifies the switchover between different programming languages. For more information, see [API regulations](/help/en/sls/developer-reference/procedure#reference-sxt-cwq-12b).
    
-   Automatic digital signature of API requests. You do not need to specify the digital signature logic of SLS API. This simplifies the use of SLS API. For more information, see [Request signatures](/help/en/sls/developer-reference/request-signatures#reference-chp-ptq-12b).
    
-   Protocol Buffer-formatted encapsulation of logs. The logs that are collected by SLS are encapsulated in the Protocol Buffer format. You do not need to specify a format. For more information, see [Protocol Buffer format](/help/en/sls/developer-reference/data-encoding#reference-uvb-r5q-12b).
    
-   Log compression by using the method that is defined in SLS API. SLS SDK for several programming languages allows you to specify whether logs can be written to SLS in compression mode. By default, the compression mode is used.
    
-   Unified exception handling mechanism. Use SLS SDK to handle exceptions based on the programming language. For more information, see [Exception handling](/help/en/sls/developer-reference/exception-handling#reference-jpz-bwq-12b).
    
-   Support only for synchronous requests.
    

## SLS SDK for different programming languages

The following table provides links to the references and GitHub source code of SLS SDK for different programming languages.

**Note**

SLS imposes limits on basic resources, such as the number of projects, the number of logstores, the number of shards, and the size of LogItem. Read [Limits on basic resources](/help/en/sls/basic-resources#concept-abm-gdd-p2b) before you use SLS SDK.

After you collect logs to SLS by using SLS SDK, you must configure indexes for the logs. Then, perform various operations such as query, analysis, and transformation on the logs. For more information, see [Create indexes](/help/en/sls/create-indexes#task-jqz-v55-cfb) and [Guide to log query and analysis](/help/en/sls/quick-guide-to-query-and-analysis#task-tqc-ddm-gfb).

**Programming language**

**References**

**GitHub source code**

Java

[Overview of Simple SLS SDK for Java](/help/en/sls/developer-reference/overview-of-log-service-sdk-for-java#reference-cxs-zdm-12b)

[SLS SDK for Java](https://github.com/aliyun/aliyun-log-java-sdk) and [Producer Library](/help/en/sls/producer-library#concept-ax1-n45-vdb)

.NET Core

[Overview of SLS SDK for .NET Core](/help/en/sls/developer-reference/overview-of-log-service-sdk-for-dotnet-core#task-fxd-m2r-32b)

[SLS SDK for .NET Core](https://github.com/aliyun/aliyun-log-dotnetcore-sdk)

PHP

[Overview of Simple SLS SDK for PHP](/help/en/sls/developer-reference/overview-of-log-service-sdk-for-php#task-2334635)

[SLS SDK for PHP](https://github.com/aliyun/aliyun-log-php-sdk)

Python

[Overview](/help/en/sls/developer-reference/overview-4#task-2323893)

[SLS SDK for Python](https://github.com/aliyun/aliyun-log-python-sdk)

Node.js

[Overview of SLS SDK for Node.js](/help/en/sls/developer-reference/overview-of-log-service-sdk-for-node-js#task-2325110)

[SLS SDK for Node.js](https://github.com/aliyun-UED/aliyun-sdk-js/tree/master/samples/sls)

C

[C Producer SDK](/help/en/sls/developer-reference/log-service-sdk-for-c#reference-klg-gwq-12b)

[SLS SDK for C](https://github.com/aliyun/aliyun-log-c-sdk)

Go

[Overview](/help/en/sls/developer-reference/overview-14#reference-kjq-gwq-12b)

[SLS SDK for Go](https://github.com/aliyun/aliyun-log-go-sdk)

iOS

[Overview of SLS SDK for iOS](/help/en/sls/developer-reference/overview-of-log-service-sdk-for-ios#reference-qyv-vh4-12b)

[SLS SDK for iOS](https://github.com/aliyun/aliyun-log-ios-sdk) and [SLS SDK for Objective-C](https://github.com/lujiajing1126/AliyunLogObjc)

Android

[Overview of SLS SDK for Android](/help/en/sls/developer-reference/overview-of-log-service-sdk-for-android#reference-lnl-wh4-12b)

[SLS SDK for Android](https://github.com/aliyun/aliyun-log-android-sdk)

C++

[Overview of SLS SDK for C++](/help/en/sls/developer-reference/overview-of-log-service-sdk-for-cpp#concept-vtl-hmv-vgb)

[SLS SDK for C++](https://github.com/aliyun/aliyun-log-cpp-sdk)

HarmonyOS

[Overview of SLS SDK for HarmonyOS](/help/en/sls/developer-reference/harmonyos-sdk-overview)

[SLS SDK for HarmonyOS](https://github.com/aliyun-sls/alibabacloud_log_harmony_sdk)

## **Examples**

For more information about the examples, see [List projects](/help/en/sls/developer-reference/list-projects).

## FAQs

### What features does SLS SDK support?

SLS SDK supports most features of SLS. For example, use SLS SDK to collect, index, query, analyze, transform, consume, and ship logs. You can also configure alerts for logs and manage Scheduled SQL jobs. If you identify a feature that is not supported when you use SLS SDK, we recommend that you update SLS SDK to the latest version and try again or pay attention to subsequent SDK version updates.

### How do I use SLS SDK?

SLS SDK provides end-to-end log management. Use SLS SDK in the similar manner as you perform operations in the SLS console. Perform the following steps to use SLS SDK:

1.  Activate SLS.
    
2.  Obtain an AccessKey pair.
    
3.  Create a project and a logstore.
    
4.  Collect logs and store the logs to the logstore.
    
5.  Create indexes for the logs.
    
6.  Query and analyze the logs and visualize the query and analysis results.
    
7.  Transform and ship the logs, and configure alerts for the logs.
    

SLS provides a console in which you can perform operations in an efficient manner. For more information, see [Use LoongCollector to collect and analyze ECS text logs](/help/en/sls/getting-started#concept-gpw-x2w-ydb).

### How do I handle common errors that may occur when I use SLS SDK?

SLS SDK provides error handing logic. The following errors may occur when you use SLS SDK.

-   Exceptions that are returned by Simple Log Service. This type of exceptions are handled by Simple Log Service SDK. For more information about this type of exceptions, see the description and error codes of each API operation. For more information about the error codes, see [Error codes](/help/en/sls/developer-reference/error-codes#reference-ypb-rtq-12b).
    
-   Network exceptions that occur when you use Simple Log Service SDK to send requests. This type of exceptions include network disconnection and server response timeout.
    
-   Exceptions that are generated by Simple Log Service SDK and related to platforms and programming languages, such as, memory overflow.
    

For more information, see [Exception handling](/help/en/sls/developer-reference/exception-handling#reference-jpz-bwq-12b).

When you use SLS SDK to perform operations such as log collection, index management, data query and analysis, and data transformation, errors may occur. Handle the errors based on the SLS FAQ. For more information, see [FAQs](/help/en/sls/faq-15#concept-2623749).

### Are limits imposed when I use SLS SDK?

Yes, SLS imposes limits on basic resources such as the number of projects, the number of logstores, the number of shards, and the size of LogItem. Read [Limits on basic resources](/help/en/sls/basic-resources#concept-abm-gdd-p2b) before you use SLS SDK.

### Where can I find SDK code examples?

SLS provides documents for you to obtain sample code of commonly used operations. For more information, see related SDK documents.

-   SLS SDK for Java:
    
    -   [Use GetLogs to query logs](/help/en/sls/developer-reference/use-getlogs-to-query-logs#task-2183255)
        
    -   [Use SLS SDK for Java to manage a](/help/en/sls/developer-reference/use-log-service-sdk-for-java-to-manage-a-logstore#task-2264635) logstore
        
    -   [Use consumer groups to consume logs](/help/en/sls/developer-reference/use-consumer-groups-to-consume-data#concept-dv4-xnq-zdb)
        
    -   [Use Aliyun Log Java Producer to write log data to Simple Log Service](/help/en/sls/developer-reference/use-aliyun-log-java-producer-to-write-log-data-to-log-service#task-2232453)
        
-   SLS SDK for Python:
    
    -   [Use GetLogs to query logs](/help/en/sls/developer-reference/use-getlogs-to-query-logs-46#task-2183255)
        
    -   [Use SLS SDK for Python to manage logstores](/help/en/sls/developer-reference/use-log-service-sdk-for-python-to-manage-logstores#task-2278420)
        
    -   [Use GetHistograms to query the distribution of logs](/help/en/sls/developer-reference/use-gethistograms-to-query-the-distribution-of-logs-1#task-2278991)
        
    -   [Use consumer groups to consume logs](/help/en/sls/developer-reference/use-consumer-groups-to-consume-logs#task-2282578)
        
-   SLS SDK for various programming languages:
    
    -   [Get started with SLS SDK for Go](/help/en/sls/developer-reference/get-started-with-log-service-sdk-for-go)
        
    -   [Get started with SLS SDK for .NET](/help/en/sls/get-started-with-log-service-sdk-for-dotnet)
        
    -   [Get started with SLS SDK for Node.js](/help/en/sls/developer-reference/get-started-with-log-service-sdk-for-node-js)
        
    -   [Get started with SLS SDK for PHP](/help/en/sls/developer-reference/get-started-with-log-service-sdk-for-php)
        
    -   [Get started with SLS SDK for C++](/help/en/sls/developer-reference/get-started-with-log-service-sdk-for-cpp)
        
    -   [Quick start for Android SDK](/help/en/sls/developer-reference/get-started-with-log-service-sdk-for-android)
        
    -   [Get started with the iOS SDK](/help/en/sls/developer-reference/get-started-with-log-service-sdk-for-ios)
        
    -   [Get started with SLS SDK for Flutter](/help/en/sls/developer-reference/flutter-sdk-quick-start)
        
    -   [Get started with SLS SDK for HarmonyOS](/help/en/sls/developer-reference/harmonyos-sdk-quick-start)
        

For more information about source code, visit [Alibaba Cloud GitHub](https://github.com/aliyun?q=log&type=all&language=&sort=).

## **References**

#### Debugging platform for SLS SDK

Alibaba Cloud provides OpenAPI Explorer for you to debug SLS SDK. The platform also provides other SDKs, examples, and related documents. Use OpenAPI Explorer to debug SLS API operations without the need to manually encapsulate or sign requests. For more information, visit [OpenAPI Explorer](https://next.api.alibabacloud.com/api/Sls/2020-12-30/CreateProject?lang=JAVA&sdkStyle=dara&params=%7B%7D).

#### SLS CLI

SLS provides the CLI to meet the requirements for automated configurations. For more information, see [Overview of SLS CLI](/help/en/sls/developer-reference/overview-of-log-service-cli).

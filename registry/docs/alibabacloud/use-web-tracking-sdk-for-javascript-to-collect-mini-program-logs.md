If you want to collect and analyze information about mini program users, such as the mini programs accessed by users, their browsing behavior records, and their purchasing behavior records, you can use web tracking SDK for JavaScript to upload user logs to a Logstore. You can use web tracking SDK for JavaScript to upload logs directly from mini programs to Simple Log Service, without the need to upload logs to an application server. This helps reduces server loads. This topic describes how to use web tracking SDK for JavaScript to collect mini program logs.

## Prerequisites

-   The web tracking feature is enabled for your Logstore. For more information about how to enable and use the web tracking feature, see [Use the web tracking feature to collect logs](/help/en/sls/use-the-web-tracking-feature-to-collect-logs).
    
-   The domain name that is used by the web tracking feature for secure communications is added to the legal domain list on the admin console of the mini programs whose logs you want to collect. This helps ensure data security. After you add the domain name, you can establish network connections between the domain name and the mini programs. You must add the domain name in the `https://${project}.${host}` format. For more information about `project` and `host`, see the following sections.
    

## Limits

-   If you use web tracking SDK for JavaScript to upload mini program logs, you can write no more than 10 MB of log data at a time. For more information about web tracking SDK for JavaScript, see [Web tracking SDK for JavaScript](https://www.npmjs.com/package/@aliyun-sls/web-track-mini).
    
-   The web tracking feature supports only the following mini programs: WeChat mini programs, WeChat mini games, Alipay mini programs, ByteDance mini programs, DingTalk mini programs, QQ mini programs, QQ mini games, and Baidu mini programs.
    

## **Step 1: Install and configure the SDK**

1.  Install [Node.js](https://nodejs.org/en/download/).
    
2.  Run the following code on your server to install dependencies:
    
    ```
    npm install --save @aliyun-sls/web-track-mini
    ```
    
3.  Add the following code to your program to configure the SDK:
    
    **Important**
    
    When you develop a quickApp mini program, you must add configuration items based on the request module that is used before you create an SlsTracker object. The following sample code shows the configuration items when the requesttask module is used:
    
    ```
    // Define the quickappSDK object and encapsulate the request-related API operations into the object.
    const quickappSDK = {     
          request: requesttask.request
        }
    
    const tracker = new SlsTracker({
          ...opts,
          platformSDK: quickappSDK,
          platformRequestName: 'request',
        })
    ```
    
    ```
    import SlsTracker from '@aliyun-sls/web-track-mini'
    
    const opts = {
      host: '${host}', // The Simple Log Service endpoint for the region where your project resides. Example: cn-hangzhou.log.aliyuncs.com.
      project: '${project}', // The name of the project. 
      logstore: '${logstore}', // The name of the Logstore. 
      time: 10, // The interval at which logs are sent. Default value: 10. Unit: seconds. 
      count: 10, // The maximum number of logs that can be sent in each request. Default value: 10. 
      topic: 'topic',// The custom topic of logs. 
      source: 'source',
      tags: {
        tags: 'tags',
      },
    }
    
    const tracker = new SlsTracker(opts)  // Create an SlsTracker object.
    ```
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    host
    
    Yes
    
    The Simple Log Service endpoint for the region where your project resides. In this example, the Simple Log Service endpoint for the China (Hangzhou) region is used. Replace this parameter value with your actual endpoint. For more information, see [Endpoints](/help/en/sls/endpoints#reference-wgx-pwq-zdb).
    
    project
    
    Yes
    
    The name of the project.
    
    logstore
    
    Yes
    
    The name of the Logstore.
    
    time
    
    No
    
    The interval at which logs are sent. Default value: 10. Unit: seconds.
    
    count
    
    No
    
    The maximum number of logs that can be sent in each request. Default value: 10.
    
    topic
    
    No
    
    The topic of logs. You can specify a custom value to identify logs.
    
    source
    
    No
    
    The source of logs. You can specify a custom value to identify logs.
    
    tags
    
    No
    
    The tag information about logs. You can specify a custom value to identify logs.
    

## Step 2: Upload logs

When you upload a single log, the log is uploaded as a separate `object`. When you upload multiple logs, the logs are uploaded as an `array` that contains multiple `objects`.

-   Upload a single log. The type is `object`. Example:
    
    ```
    tracker.send({
      eventType:'view_product',
      productName: 'Tablet',
      price: 500
    })
    ```
    
-   **Immediately upload a single log. The time and count parameters do not take effect.** The type is `object`. Example:
    
    ```
    tracker.sendImmediate({
      eventType:'view_product',
      productName: 'Tablet',
      price: 500
    })
    ```
    
-   Upload multiple logs at a time. The type is `array`. Example:
    
    ```
    tracker.sendBatchLogs([
      {
        eventType: 'view_product',
        productName: 'Tablet',
        price: 500
      },
      {
        eventType: 'view_product',
        productName: 'Laptop',
        price: 1200
      }
    ])
    ```
    
-   **Immediately upload multiple logs at a time. The time and count parameters do not take effect.** The type is `array`. Example:
    
    ```
    tracker.sendBatchLogsImmediate([
      {
        eventType:'view_product',
        productName: 'Tablet',
        price: 500
      },
      {
        eventType:'view_product',
        productName: 'Laptop',
        price: 1200
      }
    ])
    ```
    

## Step 3: View the upload result

After logs are uploaded to a Logstore, you must create indexes to query and analyze the logs. For more information, see [Create indexes](/help/en/sls/create-indexes).

### **Quick view**

If no indexes are created, you can click **Consumption Preview** to quickly view logs. Then, you can query and analyze the logs. For more information, see [Query and analyze logs](/help/en/sls/quick-guide-to-query-and-analysis).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5722057171/p798019.png)

### **Query and analyze logs**

1.  You can call the [CreateIndex](/help/en/sls/developer-reference/api-sls-2020-12-30-createindex) operation to create full-text indexes or field indexes. If you want to use the SELECT statement, you must create field indexes.
    
2.  You can call the [GetLogsV2](/help/en/sls/developer-reference/api-sls-2020-12-30-getlogsv2) operation to query logs in a Logstore. The returned result is an array of logs. Each element in the array is a log.
    

## References

-   If the response that is returned by Log Service contains error information after you call an API operation, the call fails. You can handle errors based on the error codes that are returned when API calls fail. For more information, see [Error codes](/help/en/sls/developer-reference/error-codes#reference-ypb-rtq-12b).
-   Alibaba Cloud OpenAPI Explorer provides debugging capabilities, SDKs, examples, and related documents. You can use OpenAPI Explorer to debug Log Service API operations without the need to manually encapsulate or sign requests. For more information, visit [OpenAPI Portal](https://next.api.alibabacloud.com/api/Sls/2020-12-30/CreateProject?lang=JAVA&sdkStyle=dara&params=%7B%7D).
-   Log Service provides the command-line interface (CLI) to meet the requirements for automated configurations in Log Service. For more information, see [Log Service CLI](/help/en/sls/developer-reference/overview-of-log-service-cli#concept-wzj-vhf-lfb).

If you use the web tracking SDK for JavaScript to upload logs, you must enable the web tracking feature for the Logstore. This may generate dirty data records. Alibaba Cloud Security Token Service (STS) allows you to manage temporary credentials to your Alibaba Cloud resources. You can use STS to obtain temporary credentials (STS tokens) with custom validity periods and access permissions. You can use the STS plug-in of web tracking SDK for JavaScript to upload logs. In this case, you do not need to enable the web tracking feature for the Logstore.

## Background information

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1224512371/CAEQJxiBgICCpaTigRkiIDMyZGJiZDg2YjBmODQ5YTJhZjg5OGIxYzU0MzY2Yzhk4192457_20240126151602.125.svg)

If you do not use STS for temporary authorization, you must enable the web tracking feature for the Logstore. Web tracking SDK for JavaScript uploads logs collected from browsers to the Logstore of Simple Log Service, which may generate dirty data. The following items describe the process of using the STS plug-in of web tracking SDK for JavaScript to upload logs:

1.  A browser requests a temporary identity credential (STS token) from a business server.
    
2.  The service server requests an STS token from the STS service.
    
    1.  An AccessKey pair of the Resource Access Management (RAM) user is configured in the server and the RAM user is attached the [AliyunSTSAssumeRoleAccess](/help/en/ram/developer-reference/aliyunstsassumeroleaccess) policy.
        
    2.  The server uses the AccessKey pair of the RAM user to call the [AssumeRole](/help/en/ram/developer-reference/api-sts-2015-04-01-assumerole) operation of STS to obtain the STS token of the RAM role. You can use the `Policy` parameter of AssumeRole to restrict the permissions of different STS tokens based on the user or device.
        
3.  STS returns an STS token to the business server.
    
4.  The service server returns an STS token to the browser.
    
5.  The browser uses the obtained STS token to assume the RAM role and uploads logs collected from the browser to the Logstore.
    
6.  Simple Log Service returns a response to the browser after the log is uploaded.
    

## Prerequisites

-   The RAM user is created and the [AliyunSTSAssumeRoleAccess](/help/en/ram/developer-reference/aliyunstsassumeroleaccess) policy is attached to the RAM user. For more information, see [Create a RAM user](/help/en/ram/user-guide/create-a-ram-user).
    
-   For more information about how to configure the AccessKey pair of the RAM user in environment variables of the business server, see [Configure environment variables in Linux, macOS, and Windows](/help/en/sdk/developer-reference/configure-the-alibaba-cloud-accesskey-environment-variable-on-linux-macos-and-windows-systems).
    
-   You have created a RAM role for a trusted Alibaba Cloud account and granted the RAM role the permission to write data to the specified project. For more information, see [Create a RAM role for a trusted Alibaba Cloud account](/help/en/ram/user-guide/create-a-ram-role-for-a-trusted-alibaba-cloud-account) and [Examples of using custom policies to grant permissions to a RAM user](/help/en/sls/use-custom-policies-to-grant-permissions-to-a-ram-user).
    
    ```
    {
      "Version": "1",
      "Statement": [
        {
          "Action": [
            "log:Post*"
          ],
          "Resource": "acs:log:*:*:project/<The name of the specified project.>/*",
          "Effect": "Allow"
        }
      ]
    }
    ```
    

## Step 1: Install and configure the SDK

**Important**

-   The npm method is used in this topic to install the web tracking SDK for JavaScript to collect website logs. If you want to use the Alibaba Cloud CDN method, see [Use web tracking SDK for JavaScript to collect website logs](/help/en/sls/developer-reference/use-web-tracking-sdk-for-javascript-to-collect-browser-logs).
    

1.  Install [Node.js](https://nodejs.org/en/download/).
    
2.  Run the following command on the business server to install dependencies.
    
    ```
    npm install --save @aliyun-sls/web-track-browser
    npm install --save @aliyun-sls/web-sts-plugin
    ```
    
3.  Add the following code to your program to configure the SDK.
    
    ```
    import SlsTracker from '@aliyun-sls/web-track-browser'
    import createStsPlugin from '@aliyun-sls/web-sts-plugin'
    
    const opts = {
      host: '${host}', // The Simple Log Service endpoint for the region. Example: cn-hangzhou.log.aliyuncs.com.
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
    
    const stsOpt = {
      accessKeyId: '',
      accessKeySecret: '',
      securityToken: '',
      // The following is a simple example of an STS token refresh function.
      refreshSTSToken: () =>
        new Promise((resolve, reject) => {
          const xhr = new window.XMLHttpRequest()
            xhr.open('GET', 'localhost:7000/test/sts', true)
            xhr.send()
            xhr.onreadystatechange = () => {
              if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                  let credential = JSON.parse(xhr.response)
                  // The purpose of the function is to configure the temporary key and token of stsOpt. 
                  stsOpt.accessKeyId = credential.AccessKeyId
                  stsOpt.accessKeySecret = credential.AccessKeySecret
                  stsOpt.securityToken = credential.SecurityToken
                  resolve()
                } else {
                  reject('Wrong status code.')
                }
              }
            }
          }),
      // refreshSTSTokenInterval: 300000,
      // stsTokenFreshTime: undefined,
    }
    
    // Create a tracker.
    const tracker = new SlsTracker(opts)
    // Create the STS plug-in.
    const stsPlugin = createStsPlugin(stsOpt)
    // Use the STS plug-in.
    tracker.useStsPlugin(stsPlugin)
    
    // Assume that you want to upload a single log.
    tracker.send({
      eventType:'view_product',
      productName: 'Tablet',
      price: 500
    })
    ```
    
    The description of web tracking parameters is as follows:
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    host
    
    Yes
    
    The endpoint of the region where Simple Log Service resides. In this example, the Simple Log Service endpoint for the China (Hangzhou) region is used. Replace the parameter value with the actual endpoint. For more information, see [Endpoints](/help/en/sls/endpoints#reference-wgx-pwq-zdb).
    
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
    
    The topic of logs. You can specify a custom value for this parameter to facilitate identification.
    
    source
    
    No
    
    The source of logs. You can specify a custom value for this parameter to facilitate identification.
    
    tags
    
    No
    
    The tag information about logs. You can specify a custom tag to identify logs.
    
    The description of STS parameters is as follows:
    
    **Parameter**
    
    **Required**
    
    **Description**
    
    -   accessKeyId
        
    -   accessKeySecret
        
    -   securityToken
        
    
    Yes
    
    -   The business server uses the AccessKey pair of the RAM user to call the [AssumeRole](/help/en/ram/api-assumerole#reference-clc-3sv-xdb) operation. The response parameters include `AccessKeySecret`, `AccessKeyId`, and `SecurityToken`.
        
    -   In the input parameters of the [AssumeRole](/help/en/ram/api-assumerole#reference-clc-3sv-xdb) operation, `DurationSeconds` specifies the validity period of the token and `Policy` specifies the permission scope of the token.
        
    
    refreshSTSToken
    
    Yes
    
    Your STS token request function, which is used to periodically obtain STS tokens to update the preceding fields. You can use a Promise/async function.
    
    refreshSTSTokenInterval
    
    No
    
    The interval at which tokens are refreshed, in millisecond. Default value: 300,000, which indicates 5 minutes.
    
    stsTokenFreshTime
    
    No
    
    The latest token acquisition time. You do not need to specify this parameter.
    

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

-   This topic uses the web tracking SDK for JavaScript to collect website logs. For more information about how to use web tracking SDK for JavaScript to collect mini program logs, see [Use web tracking SDK for JavaScript to collect mini program logs](/help/en/sls/developer-reference/use-web-tracking-sdk-for-javascript-to-collect-mini-program-logs).
    

## FAQ

The SDK starts without errors, but when sending logs, it reports the `TypeError: Cannot read properties of undefined (reading 'sigBytes')`. What do I do if this issue occurs?

Possible cause: Issues with CryptoJS encryption. Due to the difficulty in modifying the third-party package, we recommend that you use web tracking for unauthenticated writes. For more information, see [Use the web tracking feature to collect logs](/help/en/sls/use-the-web-tracking-feature-to-collect-logs).

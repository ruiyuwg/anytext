Alibaba Cloud APIs are a powerful tool set that allows developers to manage and call various Alibaba Cloud services by using programming interfaces. For example, you can call API operations of Elastic Compute Service (ECS), Object Storage Service (OSS), and Short Message Service (SMS). This topic describes how to debug an API operation online.

## **Create an Alibaba Cloud account**

You must use an Alibaba Cloud account to call API operations. If you do not have an Alibaba Cloud account, visit the [Alibaba Cloud official website](https://www.alibabacloud.com/en?_p_lc=1&spm=api-workbench-intl.home.0.0.20b54f45PkRGx0) to create one.

## **Activate Alibaba Cloud services**

You can use one of the following methods to activate the Alibaba Cloud services that you need. In this example, SMS is activated.

-   Log on to the [User Center](https://api.alibabacloud.com/user_center/open) console. Search for SMS, select SMS, and then click Activate to activate SMS.
    
-   Go to the [buy page of SMS](https://www.alibabacloud.com/en/product/short-message-service?_p_lc=1&spm=a2796.11401589.6791778070.8.4fd48eb1KkZ4G3) and activate the service.
    

**Important**

You can call the API operations of an Alibaba Cloud service only after you activate the service.

## **Debug an API operation online**

Log on to [OpenAPI Explorer](https://api.alibabacloud.com/). In the top navigation bar, move the pointer over Cloud Products and select the activated Alibaba Cloud service that you want to manage. In this example, ECS is selected. In the upper-right corner of the service page, click **Debug**.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2243229171/p796231.png)

On the debugging page, select the API operation that you want to debug. In this example, the DescribeInstanceTypeFamilies operation is selected. Configure the required parameters on the **Parameters** tab based on the API reference on the **Document** tab, and then click **Initiate Call**. Make sure that the parameter values are valid. For more information, see [OpenAPI online debugging](/help/en/openapi/user-guide/api-online-debugging).

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2243229171/p800851.png)

## **View call results**

After you call an API operation, you can view the call results on the **Response** tab. You can view the **HTTP status code** and data returned for the API call.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2243229171/p800860.png)

### **Successful API call**

In most cases, the returned HTTP status code is 200 for a successful API call. The returned data is generally in the JSON format. You can view the meaning of each response parameter in the corresponding API reference. The following figure shows the response parameters returned for a successful call of the DescribeInstanceTypeFamilies operation of ECS.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2243229171/p796770.png)

### **Failed API call**

In most cases, the returned HTTP status code is 4xx for a failed API call. The error information returned for failed Alibaba Cloud API calls is in a unified structure except for specific non-unified gateway services. The following sample code provides an example on the error information returned for a failed call of the RunInstances operation of ECS:

```
{
  "RequestId": "7DC0013A-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
  "Message": "The specified endpoint cant operate this region. Please use API DescribeRegions to get the appropriate endpoint, or upgrade your SDK to latest version.(from POP)",
  "Recommend": "https://api.aliyun.com/troubleshoot?q=InvalidOperation.NotSupportedEndpoint&product=Ecs&requestId=7DC0013A-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
  "HostId": "ecs-cn-hangzhou.aliyuncs.com",
  "Code": "InvalidOperation.NotSupportedEndpoint"
}
```

Parameter

Description

RequestId

The GUID of the request, which is used to trace and identify a call of a specific API operation. If you need to contact Alibaba Cloud technical support on a failed API call, provide the request ID of the API operation to help identify the context of the error in an efficient manner.

HostId

The host ID of the server or service endpoint on which the error occurred. In this example, the error occurred on the endpoint of an ECS instance that resides in the China (Hangzhou) region.

Code

The error code. An error code indicates a short and precise description of the error. Developers can use the error code to find the code meaning and solutions in Alibaba Cloud documentation. In this example, the error code indicates that the API operation failed to be called because the specified endpoint is not supported in the destination region.

Message

The error message. In this example, the error message indicates that the specified endpoint is not supported in the destination region. To query a valid endpoint, we recommend that you call the `DescribeRegions` operation.

Recommend

The URL of the corresponding error diagnostics. You can directly copy the URL to go to the [OpenAPI Troubleshoot](https://api.alibabacloud.com/troubleshoot) page to obtain a solution.

For more information about troubleshooting, see [Troubleshooting API request errors](/help/en/openapi/user-guide/api-error-diagnosis).

## **Run SDK sample code**

To run the SDK sample code of an API operation, perform the following operations: On the **SDK Sample Code** tab, select an **SDK version**, select a language, and then click **Example**.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2243229171/p800876.png)

## **Run CLI commands**

To call an API operation by running CLI commands in Cloud Shell, click the Run Command in CloudShell icon in the upper-right corner of the **CLI Example** tab.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2243229171/p800884.png)

## **View the call history**

You can view the call history of an API operation on the **Call History** tab. To view the parameters of a call, click View call parameters in the Actions column of the call. To initiate a call to debug the API operation again, click **redebugging** in the Actions column of the call. If the **status** of a call is failure, click **Diagnose** in the Actions column to diagnose the cause of the call failure.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2243229171/p800886.png)

## **View error codes**

You can view the error codes that may be returned for API calls and the description of each error code on the **Error Codes** tab. You can click **Diagnose** in the Actions column of an error code to go to the OpenAPI problem diagnosis page of the corresponding error. Then, you can query related documentation, go to related forums, or contact technical support to troubleshoot the error.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2243229171/p800896.png)

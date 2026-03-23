When you access an Alibaba Cloud service, a unique RequestId is assigned to each API request. You can use this ID to query request details in tools like OpenAPI Troubleshoot or ActionTrail. A common use case is to diagnose errors. If an API call fails, you can use its RequestId on the OpenAPI Troubleshoot page to find the error's cause and solution. This topic uses a common permission error as an example to demonstrate how to obtain the value of RequestId in various use cases.

**Note**

This topic applies only to APIs that are available on the OpenAPI Portal.

## **Methods**

You can obtain the value of RequestId using the following methods. If a request fails, you can use the RequestId on the OpenAPI Troubleshoot page to find a solution. For permission errors, the error message also contains `AccessDeniedDetail`, which provides the specific unauthorized action (`AuthAction`) and an encrypted diagnostic message (`EncodedDiagnosticMessage`).

### **Use browser developer tools in the console**

When you perform an operation in the console, you can open your browser's developer tools (F12) and inspect the network requests. To find the relevant API call, filter the network activity by `api.json?`. The RequestId is available in the response headers or payload of the request.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7505710671/p1009495.png)

### **Use the OpenAPI Portal**

When you make a test call from the [OpenAPI Explorer](https://api.alibabacloud.com/), the value of RequestId appears in the response.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7505710671/p1009466.png)

### **Use SDKs**

When you use an Alibaba Cloud SDK, the value of RequestId appears in the API response object. If an error occurs, you can catch the exception type to access the error details, which include the RequestId.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7505710671/p1009416.png)

### **Use the Alibaba Cloud CLI**

When making an API call with the Alibaba Cloud CLI, the value of RequestId appears in the standard output.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7505710671/p1009454.png)

### **Use Terraform**

Because Terraform orchestrates multiple API calls to manage resources, a single request ID is not typically displayed for a successful Terraform apply. However, if an API call fails during the process, the error output will contain the relevant request ID for debugging.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7505710671/p1009477.png)

### **Other API clients**

If you are using a different API client, such as cURL or Postman, the request ID will be included in the response headers of any API call. For example, if an API call that uses Signature V3 fails, the request ID is returned in the error response.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7505710671/p1009513.png)

## **Use a request ID for diagnostics**

### **OpenAPI Troubleshoot**

On the page, you can enter a request ID to query the full call chain, basic information, authentication details, and content for the corresponding request. If the request returned an error, you can also find a solution.

**Note**

If a request is denied because of insufficient RAM permissions, you can obtain the EncodedDiagnosticMessage parameter from the error message and call the [DecodeDiagnosticMessage](/help/en/ram/developer-reference/api-ram-2015-05-01-decodediagnosticmessage) operation to decode the diagnostic information.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7505710671/p1009558.png)

### **ActionTrail**

You can call the [LookupEvents](/help/en/actiontrail/developer-reference/api-actiontrail-2020-07-06-lookupevents) operation and pass the RequestId parameter to query event details. When you call this operation, set the LookupAttribute array as follows:

**Parameter**

**Description**

Key

Set this to **EventId**.

Value

Enter the actual value of RequestId.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7505710671/p1009581.png)

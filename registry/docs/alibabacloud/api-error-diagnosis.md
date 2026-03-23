If you encounter an error when calling an API operation, copy the error message to the OpenAPI Troubleshoot page to find a solution.

## **Obtain an error message**

### **From the debugging page of OpenAPI Explorer**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1398538171/p800919.png)

### **From an SDK call**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1398538171/p800917.png)

### **From the CLI**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1398538171/p800921.png)

### **From Terraform**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1398538171/p800911.png)

### **From Alibaba Cloud Developer Toolkit**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1398538171/p800926.png)

## **Diagnose API errors**

**Important**

To query error messages across different Alibaba Cloud accounts or for different RAM users within the same account, you must first obtain the necessary permission. For more information, see [Grant permissions for cross-account API error diagnosis](/help/en/openapi/user-guide/authorization-for-api-error-diagnosis).

After you obtain the error message, you can copy the complete JSON error response or copy only the value of the RequestId, Code, or Message parameter to the page to find a solution.

For example, the following result is returned when you call the RunInstances operation of Elastic Compute Service (ECS):

```
{
  "RequestId": "6BE56E05-XXXX-XXXX-XXXX-FD90C4FFD581",
  "HostId": "ecs.ap-southeast-3.aliyuncs.com",
  "Code": "InvalidImageId.NotFound",
  "Message": "The specified ImageId does not exist.",
  "Recommend": "https://api.alibabacloud.com/troubleshoot?intl_lang=EN_US&q=InvalidImageId.NotFound&product=Ecs&requestId=6BE56E05-XXXX-XXXX-XXXX-FD90C4FFD581"
}
```

The following list describes the parameters:

-   RequestId: the request ID. You can copy the request ID to the page to obtain a solution.
    
-   HostId: the host ID of the server.
    
-   Code: the error code.
    
-   Message: the detailed error message. Use this message to troubleshoot request parameters. In this example, it indicates that the provided ImageId is invalid. To resolve the error, use a valid image ID.
    
-   Recommend: a direct link to the error diagnostics page for this specific issue.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8170633671/p797394.png)

In some scenarios, like using an SDK, you might not get the complete JSON error response. You can still diagnose the issue by copying just the value of the RequestId, Code, or Message parameter to the page. Using RequestId is recommended for the most accurate results.

The following figure shows how to use the request ID to obtain a diagnostic solution.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8170633671/p797396.png)

### **View the diagnostic solution**

The OpenAPI Troubleshoot page contains the Diagnostic Solution and Log Information tabs. The Diagnostic Solution tab displays the corresponding solution to an error. In this example, the following solution is provided for the error message `The specified ImageId does not exist.`:

```
The specified image does not exist under this user account. Check whether the image ID is correct.
```

Based on this solution, you should check that the \`ImageId\` parameter in your request is correct.

### **Review logs and request details**

If you did not save the original request body, you can retrieve the request parameters, response, and other information from the **OpenAPI Troubleshoot** page.

Using the **request ID** "6BE56E05-XXXX-XXXX-XXXX-FD90C4FFD581" as an example, open the Log Information tab. This tab provides a visual analysis of the API call trace, the complete error response, and the original request content. This information helps you pinpoint and resolve the issue.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8170633671/p797399.png)

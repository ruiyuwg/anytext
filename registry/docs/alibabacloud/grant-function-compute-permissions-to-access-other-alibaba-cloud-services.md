When you use specific features provided by Function Compute, such as logging, Virtual Private Cloud (VPC) access, and asynchronous invocation, Function Compute needs to access other Alibaba Cloud services. For example, when you configure the logging feature for your function, you must grant Function Compute permissions to write logs to the specified Logstore.

Function Compute can use its [service-linked role](/help/en/functioncompute/fc/service-linked-role-of-function-compute) to access specific Alibaba Cloud services, such as Simple Log Service and VPC, and enable asynchronous invocations. If you confirm to let Function Compute assume a role, the functions that you create automatically use this role as their default role, eliminating the need to separately configure function roles.

However, if your code logic needs to access more services or requires more fine-grained access control, you can still manually configure roles for your functions.

## How it works

Based on the function role, Function Compute uses [AssumeRole](/help/en/ram/developer-reference/api-sts-2015-04-01-assumerole#main-107864) to obtain a Security Token Service (STS) token as the temporary key. It then passes the temporary key to the function by using the Credentials or credentials parameter in the context. This temporary key grants access to all resources for which you have configured permissions. You can use it in your function code.

The temporary key is valid for 36 hours and cannot be modified, while the maximum execution duration of a function is 24 hours. Therefore, the temporary key remains valid for the entire duration of the function.

The location of the Credentials or credentials parameter varies based on different runtimes. You can refer to the following topics. It should be noted that when you use a custom runtime or a Custom Container runtime, the temporary key is injected into the headers of HTTP requests.

-   [Node.js context](/help/en/functioncompute/fc/user-guide/context-1-1)
    
-   [Python context](/help/en/functioncompute/fc/user-guide/context-1)
    
-   [PHP context](/help/en/functioncompute/fc/user-guide/context-2-1)
    
-   [Java context](/help/en/functioncompute/fc/user-guide/context-3-1)
    
-   [.NetCore context](/help/en/functioncompute/fc/user-guide/context-4)
    
-   [Go context](/help/en/functioncompute/fc/user-guide/context-5)
    
-   [Common request headers for custom runtimes and Custom Container runtimes](/help/en/functioncompute/fc/user-guide/context-and-log-format-1)
    

## Example: Grant Function Compute the permissions to access Object Storage Service (OSS)

In this example, Function Compute is granted the permissions to manage OSS resources. To do this, create a role with the required OSS permissions and then attach that role to the function.

### **Before you begin**

[Create a function](/help/en/functioncompute/fc/user-guide/function-instance-1/)

### **Procedures**

#### **Step 1: Create a role and grant it the required permissions**

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/). In the left-side navigation pane, choose **Identities** > **Roles**. On the page that appears, click Create Role.
    
2.  On the **Create Role** page, select **Cloud Service** for **Principal Type**, select **Function Compute / FC** for **Principal Name**, and click **OK**.
    
3.  In the **Create Role** dialog box, set **Role Name** as `mytestrole` and click **OK**.
    
4.  On the page that appears, choose the **Permissions** tab, and click **Grant Permission**. In the **Grant Permission** panel, grant the required permissions to the role.
    
    Select your **Resource Scope**. **Principal** defaults to the role you just created. In the policy list, select the check boxes next to the system or custom policies as needed. Selected policies are automatically added to the **Selected Policy** list on the right. Then, click **OK**. For more information, see [Policies and sample policies](/help/en/functioncompute/fc-2-0/security-and-compliance/policies). The following items describe the options for the Resource Scope parameter.
    
    -   **Account**: The permissions are valid for all resources within the current Alibaba Cloud account.
        
    -   **Resource Group**: The permissions are valid for a specific resource group. If you want to select Resource Group, make sure that the required cloud service supports resource groups. For more information, see [Services that work with Resource Group](/help/en/resource-management/resource-group/product-overview/services-that-work-with-resource-group#concept-flc-p3m-4fb).
        
    
    In this example, **AliyunOSSFullAccess** is attached to the created role to grant Function Compute permissions to access OSS.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8863946371/p885652.png)
    

#### **Step 2: Bind the role to the function**

1.  Log on to the [Function Compute console](https://fc.console.alibabacloud.com). In the left-side navigation pane, choose **Function Management** > **Functions**.
    
2.  In the top navigation bar, select a region. On the **Functions** page, locate the target function and click **Configure** in the **Actions** column.
    
3.  On the Function Details page that appears, choose the **Configurations** tab. Click **Modify** on the right of the **Advanced Settings** section. In the **Advanced Settings** panel, expand the **Permissions** section. Select the role (`mytestrole`) that you just created in [Step 1](#022f955922l2e) for **Function Role**. Then, click **Deploy**.
    

#### **Step 3: Test the function**

Test whether the function can manage OSS resources after it assumes the `mytestrole` role.

1.  Go back to the Functions page, click the function to be tested. In the Function Details page, choose the **Code** tab. Click the arrow next to **Test Function**, and then select **Configure Test Parameters**. The following code snippet shows the test parameters:
    
    ```
    {
       "endpoint": "http://oss-cn-hangzhou.aliyuncs.com",
       "bucket": "web****",
       "objectName": "myObj",
       "message": "your-message"
    }
    ```
    
    Replace the `bucket` value with the name of the bucket that you want the function to access. Take note that the bucket must reside in the same region as the function.
    
2.  On the **Code** tab, write code in the code editor and click **Deploy**.
    
    In this example, a built-in Python runtime is used. Use the temporary key provided by Function Compute to access OSS.
    
    ```
    import json
    import oss2
    
    def handler(event, context):
        evt = json.loads(event)
        creds = context.credentials
        # Enter the temporary key, including the temporary token. 
        # The AccessKey ID and AccessKey secret of an Alibaba Cloud account can be used to access all API operations. Using these credentials to perform operations in Function Compute is a high-risk operation. We recommend that you use a RAM user to call API operations or perform routine O&M. 
        # We recommend that you avoid saving the AccessKey pair in your project code. If this sensitive information is leaked, the security of all resources in your account could be compromised. 
        # In this example, the AccessKey pair is obtained from the context. 
        auth = oss2.StsAuth(creds.access_key_id, creds.access_key_secret, creds.security_token)
        bucket = oss2.Bucket(auth, evt['endpoint'], evt['bucket'])
        bucket.put_object(evt['objectName'], evt['message'])
        return 'success'
    ```
    
3.  Click **Test Function**. After the function is executed, log on to the [OSS console](https://oss.console.alibabacloud.com/) and find the desired bucket. You can see that the content of the object is replaced with `message` in the test parameters.
    

## **References**

-   Function Compute 3.0 supports minimal authorization by using the service-linked role. For more information about the policy content of the service-linked role, see [AliyunServiceRoleForFC](/help/en/functioncompute/fc/service-linked-role-of-function-compute#2236e75048oaq).
    
-   For more information about how to configure a role for a function, see [Create a function](/help/en/functioncompute/fc/user-guide/creating-a-web-function#section-b9y-zn1-5wr).

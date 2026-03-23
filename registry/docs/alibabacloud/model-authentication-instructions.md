This topic describes how to use the Alibaba Cloud account to authorize model services for sub-workspaces. After authorization, you can use the authorized model services in the sub-workspaces.

## **Usage notes**

-   You must use the Alibaba Cloud account. Otherwise, contact your account administrator.
    
-   Authorization is only required for sub-workspaces (non-default workspaces).
    
-   You have created a [sub-workspace](/help/en/model-studio/use-workspace).
    

## **Procedure**

1.  Log on to the [Model Studio console](https://modelstudio.console.alibabacloud.com/) with your Alibaba Cloud account.
    
2.  Go to the [Workspaces](https://modelstudio.console.alibabacloud.com/?admin=1&tab=globalset#/efm/business_management) page, find the sub-workspace that you want to authorize, and click **Authorization & Throttling Settings** on the right.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3963385471/p935847.png)
    

3.  Find the target model and click **Modify** on the right.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6444755471/p948533.png)
    
4.  Turn on the corresponding permissions and click **Save**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6444755471/p948534.png)
    

## **What to do next**

Use the authorized model in the sub-workspace. To call the models with SDK or API, you must [first obtain workspace ID](/help/en/model-studio/use-workspace#c5222ec081sbo).

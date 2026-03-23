This topic describes how to authorize Data Transmission Service (DTS) to access Alibaba Cloud resources of an Alibaba Cloud account when you use DTS for the first time.

## Background

### Why is authorization required?

If you use DTS for the first time, you must assign the default role **AliyunDTSDefaultRole** to DTS and attach the **AliyunDTSRolePolicy** policy to the role. After the authorization is complete, DTS can access Alibaba Cloud resources such as ApsaraDB for RDS and Elastic Compute Service (ECS) instances within the current Alibaba Cloud account. When you configure data migration, data synchronization, or change tracking tasks, you can specify relevant Alibaba Cloud resources to be accessed by DTS. Otherwise, an error occurs due to permission-related issues and you cannot use DTS as expected.

If you do not authorize DTS to access Alibaba Cloud resources, the following error message is displayed when you log on to the DTS console:

-   **Error code**: Abnormal.RamCheckUserRole
    
-   **Error message**: You have not authorized the default role "AliyunDTSDefaultRole" of DTS. If your account has the write permissions on Resource Access Management (RAM), you can authorize the role in the RAM console by using the account. Otherwise, you must authorize the role in the RAM console by using the Alibaba Cloud account, and then refresh this page.
    

### **Policy description**

The **AliyunDTSRolePolicy** policy is used to grant permissions to the default role **AliyunDTSDefaultRole**. These permissions allow DTS to manage multiple cloud resources such as ApsaraDB for RDS, ECS, PolarDB, ApsaraDB for MongoDB, ApsaraDB for Redis, PolarDB-X, DataHub, and Elasticsearch. For more information, see [AliyunDTSRolePolicy](/help/en/ram/developer-reference/aliyundtsrolepolicy).

**Note**

For more information about policies, see [Policy structure and syntax](/help/en/ram/policy-structure-and-syntax#concept-srq-fbk-xdb).

## Procedure

**Note**

If you use an Alibaba Cloud account to log on to the [RAM Console](https://ram.console.alibabacloud.com/roles) and find that the role **AliyunDTSDefaultRole** is created, check whether the authorization is correct. For more information, see the section [View the authorization result](#section-l47-1m9-fc9) of this topic.

### Method 1 (recommend): Use a shortcut to RAM to perform the authorization

Access the [RAM Quick Authorization](https://ram.console.alibabacloud.com/role/authorization?spm=a2c4g.11186623.0.0.10d26adb3cmjiD&request=%7B%22Services%22%3A%5B%7B%22Service%22%3A%22DTS%22%2C%22Roles%22%3A%5B%7B%22RoleName%22%3A%22AliyunDTSDefaultRole%22%2C%22TemplateId%22%3A%22DefaultRole%22%7D%5D%7D%5D%2C%22ReturnUrl%22%3A%22https%3A%2F%2Fdts.console.alibabacloud.com%2F%22%7D) page by using an Alibaba Cloud account, and click **Authorize**.

If "EntityAlreadyExists.Role" and "EntityAlreadyExists.Role.Policy" appear on the displayed page after you perform the preceding operations, DTS is granted the permissions to access cloud resources by using the Alibaba Cloud account. Click **Return** to the console and configure a DTS task.

![screenshot_2025-03-21_13-37-47](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1105743471/p931981.png)

### **Method 2:** Authorize DTS to access Alibaba Cloud resources in the Cloud Resource Access Authorization message

1.  Log on to the [DTS Console](https://dts.alibabacloud.com) by using an Alibaba Cloud account.
    
2.  In the **Error Prompt** message, click **Authorize Role in RAM Console**.
    
3.  On the **RAM Quick Authorization** page that appears, click **Authorize**.
    
4.  After you complete authorization, click **Return** to continue.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5558131471/p924133.png)
    

### **Method 3:** Authorize DTS to access Alibaba Cloud resources in the RAM console

1.  Find the default role.
    
    1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/roles).
        
    2.  **Optional:** In the left-side navigation pane, choose **Identities** > **Roles**.
        
    3.  In the text box next to **Create Role**, enter **AliyunDTSDefaultRole**, and click the search icon.
        
        **Note**
        
        If the role **AliyunDTSDefaultRole** is not found, we recommend that you use [Method 1](#c544a52af6xio) of this topic for authorization.
        
    
2.  Click the role name in the search results.
    
3.  Grant the required permissions to the RAM role.
    
    1.  On the **Permissions** tab, click **Precise Permission**.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5139748071/p766192.png)
        
    2.  **Optional**. In the **Precise Permission** panel, select **System Policy** for the **Type** parameter.
        
        ![4-1](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6247990471/p922698.png)
        
    3.  In the **Policy Name** field, enter **AliyunDTSRolePolicy**.
        
    4.  Click **OK**.
        
        To verify the authorization, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6247990471/p922702.png) icon on the right side of the **Permissions** tab to refresh the page.
        
    
4.  After the required permissions are granted, click **Close**.
    

## View the authorization result

**Note**

You can perform the following steps to view the result of authorization by using the default role.

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/roles).
    
2.  **Optional:** In the left-side navigation pane, choose **Identities** > **Roles**.
    
3.  In the text box next to **Create Role**, enter **AliyunDTSDefaultRole**, and click the search icon.
    
4.  Click the role name in the search results.
    
5.  Click **AliyunDTSDefaultRole** to view the details.
    
    -   If both of the following conditions are met, the authorization is successful:
        
        -   On the **Trust Policy** tab, `dts.aliyuncs.com` is included in the Service field.
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9366089071/p766291.png)
            
        -   On the **Permissions** tab, the **AliyunDTSRolePolicy** policy exists.
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9366089071/p766293.png)
            
    -   If one of the preceding conditions is not met, the authorization fails. You must grant the permissions again.
        
        Delete the role **AliyunDTSDefaultRole**. Authorize again.
        
        **Note**
        
        -   We recommend that you use [Method 1](#c544a52af6xio) of this topic for authorization.
            
        -   For more information about how to delete a RAM role, see [Delete a RAM role](/help/en/ram/user-guide/delete-a-ram-role).

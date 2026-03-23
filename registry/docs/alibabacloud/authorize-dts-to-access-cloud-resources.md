When using MongoDB Global Distributed Cache for the first time, you must create a default service role named AliyunDTSDefaultRole and grant the AliyunDTSRolePolicy system policy to this role. This authorization grants Data Transmission Service (DTS) the necessary permissions to access your MongoDB and other cloud resources so you can configure and manage your Global Active Database (GAD). It's required only to ensure the proper functioning of the GAD service and has no impact on the performance of your MongoDB instances.

**Note**

If you log on to the [RAM console](https://ram.console.alibabacloud.com/roles) with your Alibaba Cloud account and see that this role and its permission already exist, skip this topic and proceed to [create a Global Distributed Cache instance group](/help/en/mongodb/user-guide/gad/#c246195afci07).

## **Prerequisites**

-   An Alibaba Cloud account is created. For more information, see [Create an Alibaba Cloud account](/help/en/account/sign-up-with-alibaba-cloud).
    
-   You must use an **Alibaba Cloud account** to grant the authorization.
    

## **Policy description**

The **AliyunDTSRolePolicy** policy is used to grant permissions to the default role **AliyunDTSDefaultRole**. These permissions allow DTS to manage multiple cloud resources such as ApsaraDB for RDS, ECS, PolarDB, ApsaraDB for MongoDB, ApsaraDB for Redis, PolarDB-X, DataHub, and Elasticsearch. For more information, see [AliyunDTSRolePolicy](/help/en/ram/developer-reference/aliyundtsrolepolicy).

**Note**

For more information about policies, see [Policy structure and syntax](/help/en/ram/policy-structure-and-syntax#concept-srq-fbk-xdb).

## **Method 1: Grant permissions from the RAM console (recommended)**

Use your Alibaba Cloud account to access the [AliyunDTSDefaultRole quick authorization page](https://ram.console.alibabacloud.com/role/authorization?spm=a2c4g.11186623.0.0.10d26adb3cmjiD&request=%7B%22Services%22%3A%5B%7B%22Service%22%3A%22DTS%22%2C%22Roles%22%3A%5B%7B%22RoleName%22%3A%22AliyunDTSDefaultRole%22%2C%22TemplateId%22%3A%22DefaultRole%22%7D%5D%7D%5D%2C%22ReturnUrl%22%3A%22https%3A%2F%2Fdts.console.alibabacloud.com%2F%22%7D). In the **Cloud Resource Access Authorization** dialog box, click **Agree To Authorization**. If a success message is displayed, the authorization is complete.

## **Method 2: Grant permissions using Resource Access Management**

1.  Find the default role.
    
    1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/roles).
        
    2.  **Optional:** In the left-side navigation pane, choose **Identities** > **Roles**.
        
    3.  In the text box next to **Create Role**, enter **AliyunDTSDefaultRole**, and click the search icon.
        
        **Note**
        
        If the role **AliyunDTSDefaultRole** is not found, we recommend that you use [Method 1](/help/en/dts/user-guide/authorize-dts-to-access-alibaba-cloud-resources#c544a52af6xio) of this topic for authorization.
        
    
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
        
        -   We recommend that you use [Method 1](/help/en/dts/user-guide/authorize-dts-to-access-alibaba-cloud-resources#c544a52af6xio) of this topic for authorization.
            
        -   For more information about how to delete a RAM role, see [Delete a RAM role](/help/en/ram/user-guide/delete-a-ram-role).
            
        
    

## **Next steps**

[Create a Global Distributed Cache instance group](/help/en/mongodb/user-guide/gad/#c246195afci07)

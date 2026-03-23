You can create a Resource Access Management (RAM) user provisioning for a member in your resource directory to create a RAM user that has the same username as a CloudSSO user that you use. This way, the CloudSSO user can access the resources of the member as the RAM user.

## Background information

This topic provides an example on how to create a RAM user provisioning to allow a CloudSSO user to access the MaxCompute resources that belong to a RD account in a resource directory as a RAM user. In this example, you need to create the RAM user user1@xxx.onaliyun.com that has the same username as the CloudSSO user user1 within the member Sandbox\_Account, attach the AliyunMaxComputeFullAccess policy to the RAM user to manage MaxCompute resources, and then use the CloudSSO user user1 to access the MaxCompute resources that belong to the member Sandbox\_Account as the RAM user.

## Step 1: Create a RAM user provisioning

Create a RAM user provisioning by using the management account of a resource directory in the CloudSSO console.

1.  Log on to the [CloudSSO console](https://cloudsso.console.alibabacloud.com).
    
2.  In the left-side navigation pane, click **Multi-account Permission Configuration**.
    
3.  On the **Multi-account Permission Configuration** page, select the required account in your resource directory and click **Configure RAM User Provisioning**.
    
    In this example, the member Sandbox\_Account is selected.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0794056371/p890972.png)
    
4.  In the **Configure RAM User Provisioning** panel, select the required CloudSSO user or CloudSSO user group and click **Next**.
    
    In this example, the CloudSSO user user1 is selected. If you select a CloudSSO user group, all CloudSSO users in the group are synchronized.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0794056371/p891021.png)
    
5.  Configure basic information and click **Next**.
    
    1.  Enter a description for the RAM user provisioning.
        
    2.  Configure **Handling Mode**. Valid values:
        
        -   **Single Handling**: If you select this option, you need to configure Conflict Policy and Deletion Policy for multiple members one by one.
            
        -   **Batch Handling**: If you select this option, you can configure Conflict Policy and Deletion Policy for multiple members at a time.
            
        
    3.  Configure **Conflict Policy** and **Deletion Policy**.
        
        -   **Conflict Policy**: the handling policy that is used if the selected member already has a RAM user that is named the same as the CloudSSO user. Valid values:
            
            -   **Replace**: The new RAM user overwrites the existing RAM user. The permissions, basic information, and ID of the RAM user are not change. The login method are affected. If you use a synchronized RAM user, you can only log on to the RAM user by using CloudSSO. You cannot use the RAM user name or password to log on to the RAM user.
                
            -   **Retain Both**: The system renames the new RAM user and retains both RAM users.
                
        -   **Deletion Policy**: the handling policy that is used to determine whether to retain the provisioned RAM user when you delete a RAM user provisioning. Valid values:
            
            -   **Retain**: When you delete a RAM user provisioning, the system retains the provisioned RAM user.
                
            -   **Delete**: When you delete a RAM user provisioning, the system deletes the provisioned RAM user.
                
        
6.  Click **Submit**.
    
7.  Click **Complete**.
    

After the configuration is complete, the RAM user that has the same username as your CloudSSO user is created within the selected member in the resource directory. In this example, the RAM user user1@xxx.onaliyun.com is created within the member Sandbox\_Account. The RAM user has the same username as the CloudSSO user user1.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0794056371/p891027.png)

## Step 2: Grant permissions to the RAM user

You can access the member Sandbox\_Account and attach the AliyunMaxComputeFullAccess policy to the RAM user user1@xxx.onaliyun.com to manage MaxCompute resources.

1.  Access the member Sandbox\_Account
    
    For more information, see [Use a member to log on to the Alibaba Cloud Management Console](/help/en/resource-management/resource-directory/user-guide/use-a-member-to-log-on-to-the-alibaba-cloud-management-console#task-snm-hs1-dhb).
    
2.  Grant permissions to the RAM user user1@xxx.onaliyun.com.
    
    In this example, the AliyunMaxComputeFullAccess policy is attached to the RAM user user1@xxx.onaliyun.com. The policy grants management permissions on MaxCompute resources. For more information, see [Grant permissions to a RAM user](/help/en/ram/user-guide/grant-permissions-to-the-ram-user#task-187800).
    

**Note**

For your convenience, we recommend that you specify a CloudSSO user as the permission administrator to grant permissions to the RAM users that are provisioned within a member in a resource directory. For example, you can create an access configuration that contains the AliyunRAMFullAccess policy in CloudSSO. Then, select multiple members that you want to manage and the permission administrator to provision the access configuration. This way, the permission administrator can grant permissions to the RAM users that are provisioned within the members. For more information, see [Create an access configuration](/help/en/cloudsso/user-guide/create-an-access-configuration#task-2091273) and [Assign access permissions on the accounts in a resource directory](/help/en/cloudsso/user-guide/assign-access-permissions-on-the-accounts-in-a-resource-directory#task-2090971).

## Step 3: Use the CloudSSO user to access Alibaba Cloud resources

The CloudSSO user user1 can access the MaxCompute resources that belong to the member Sandbox\_Account as the RAM user user1@xxx.onaliyun.com.

1.  Log on to the CloudSSO user portal as user1.
    
    For more information, see [Step 1: Obtain the URL of the CloudSSO user portal](/help/en/cloudsso/user-guide/log-on-to-the-cloudsso-user-portal-and-access-alibaba-cloud-resources#section-za3-pg2-tc4) and [Step 2: Log on to the user portal](/help/en/cloudsso/user-guide/log-on-to-the-cloudsso-user-portal-and-access-alibaba-cloud-resources#section-cii-si9-0pe).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0794056371/p891012.png)
    
2.  Access MaxCompute resources that belong to the member Sandbox\_Account as the RAM user user1@xxx.onaliyun.com.
    
    For more information, see the **RAM user-based logon** part in [Step 3: Access the resources of an account in your resource directory](/help/en/cloudsso/user-guide/log-on-to-the-cloudsso-user-portal-and-access-alibaba-cloud-resources#section-dmm-w90-3jl).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0794056371/p891010.png)

When you create an Intelligent Media Management (IMM) project, you must specify a service role for the project. This allows the IMM service to assume the role and access your authorized cloud resources, such as Object Storage Service (OSS). This topic describes how to configure a service role and grant permissions.

**Warning**

When you create a service role, create a project, or change the service role of a project, you must have all the permissions that are granted to that role. Otherwise, the operation fails because of insufficient permissions. Proceed with caution.

## Create a service role and grant permissions

### **Authorize the default service role**

1.  When you create a project for the first time, authorize access to cloud resources as prompted.
    

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0716240371/p814421.png)

2.  On the [Cloud Resource Access Authorization](https://ram.console.alibabacloud.com/?spm=5176.10523362.0.0.6e87309dpVZSB6#/role/authorize?request=%7B%22Requests%22%3A%20%7B%22request1%22%3A%20%7B%22RoleName%22%3A%20%22AliyunIMMDefaultRole%22%2C%20%22TemplateId%22%3A%20%22DefaultRole%22%7D%7D%2C%20%22ReturnUrl%22%3A%20%22https%3A//imm.console.alibabacloud.com/%22%2C%20%22Service%22%3A%20%22IMM%22%7D) page, view the information about the default authorization role **AliyunIMMDefaultRole** and click **Authorize**.
    

After the authorization role is created, you can use the [Resource Access Management (RAM) console](https://ram.console.alibabacloud.com) to configure fine-grained permissions.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4680584671/p1032138.png)

**Warning**

Note that the **AliyunIMMDefaultRole** service role has high-level access permissions to OSS. If a RAM user in your Alibaba Cloud account has IMM permissions such as **CreateProject / UpdateProject**, that user can attach the **AliyunIMMDefaultRole** and use the [metadata indexing](/help/en/imm/user-guide/create-a-metadata-index) feature to list or analyze your OSS files. To precisely control these permissions, see [Create a custom service role](#f676b1c03397m).

### **Create a custom service role**

You can use the [RAM console](https://ram.console.alibabacloud.com) to configure a service role and grant permissions. For more information, see [Create a service-linked role](/help/en/ram/user-guide/create-a-ram-role-for-a-trusted-alibaba-cloud-service#section-lvq-6d5-o89).

1.  Set Pricipal Type to **Cloud Service**, select **Intelligent Media Management** for **Pricipal Name**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4680584671/p1032142.png)
    
2.  Click the **OK** button and enter a Role Name to create the custom service role.
    
3.  After the role is created in the RAM console, it does not have any permissions. You must grant permissions to this RAM role. At a minimum, grant the required permissions for OSS and Message Service (MNS).
    
    You can create a policy in the RAM console. Use the **JSON** to create the policy.
    
    ![创建权限策略.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0716240371/p815449.png)
    
    The following policy grants permissions only on the OSS bucket named "my-bucket". When you copy and use this policy, replace the bucket name with your actual bucket name.
    
    ```
    {
        "Version": "1",
        "Statement": [
            {
                "Action": [
                    "oss:Get*",
                    "oss:List*",
                    "oss:PutBucketLifecycle",
                    "oss:PutBucketNotification",
                    "oss:DeleteBucketNotification",
                    "oss:PutBucketAcl",
                    "oss:PutObjectAcl",
                    "oss:CopyObject",
                    "oss:AppendObject",
                    "oss:PutSymlink",
                    "oss:PutObject",
                    "oss:StartEventRecord",
                    "oss:StopEventRecord",
                    "oss:GetEventRecordStatus"
                ],
                "Resource": "acs:oss:*:*:my-bucket/*",
                "Effect": "Allow"
            },
            {
                "Action":"mns:*",
                "Resource": "*",
                "Effect": "Allow"
            },
            {
                "Action": "ram:PassRole",
                "Resource": "*",
                "Effect": "Allow",
                "Condition": {
                    "StringEquals": {
                        "acs:Service": "imm.aliyuncs.com"
                    }
                }
            }
        ]
    }
    ```
    
4.  Attach the created policy to the service role. For more information, see [Grant permissions to a RAM role](/help/en/ram/user-guide/grant-permissions-to-a-ram-role).
    
    ![为角色授权.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0716240371/p815473.png)
    

## Use the service role

After the service role is created, click the refresh icon next to the service role input box. Then, you can select the new service role to create an Intelligent Media Management project, as shown in the following figure.

![使用服务角色.jpg](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0716240371/p815480.jpg)

## (Optional) Modify the permissions of the service role

You can modify the permissions of the role in the [RAM console](https://ram.console.alibabacloud.com). For more information, see [Grant permissions to a RAM role](/help/en/ram/user-guide/grant-permissions-to-a-ram-role).

When you modify the permissions of the service role, ensure that you grant at least the permissions required for OSS and MNS based on your use case. Otherwise, API calls may fail because of insufficient permissions.

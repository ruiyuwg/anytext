This topic describes how to obtain AccessKey pairs and AgentKey.

**Note**

AccessKey is typically used for user authentication in [GenAI Service Platform SDK](https://api.alibabacloud.com/product/bailian). AgentKey was used to specify Model Studio workspaces in previous API versions, but is no longer used in the latest version.

If you are a new user and need to call models or applications or use the latest workspaces, use the application ID and workspace ID instead.

## **AccessKey**

An AccessKey pair is a permanent access key for Alibaba Cloud users, consisting of an AccessKey ID and an AccessKey secret. It is used for authentication when you access Alibaba Cloud using development tools like APIs, CLI, SDKs, Cloud Shell, and Terraform.

**Important**

You can choose to obtain the AccessKey pair for a RAM user or an Alibaba Cloud account.

The AccessKey pair for an Alibaba Cloud account has full permissions for the account, and can pose a serious security risk if leaked. You must keep it secure and not disclose it through any external channels. We strongly recommend that you follow the [security best practices](/help/en/ram/use-cases/ensure-security-of-alibaba-cloud-resources) and use the AccessKey pair for a RAM user instead.

### (Recommended) Obtain the AccessKey pair for a RAM user

If you do not have a RAM user, [create a RAM user](/help/en/ram/user-guide/create-a-ram-user) and enable **OpenAPI Access** for it.

Take the following steps to obtain the AccessKey pair of a RAM user:

1.  Go to the [RAM console](https://ram.console.alibabacloud.com/overview). In the left-side navigation pane, choose **Identities** > **Users**. All RAM users within your Alibaba Cloud account are displayed.
    
2.  Click the desired RAM user in the **User Logon Name/Display Name** column to go to the details page of the RAM user.
    
3.  On the Authentication tab of the page that appears, click **Create AccessKey**.
    

### **(Not recommended) Obtain the AccessKey pair for an Alibaba Cloud account**

You can obtain the AccessKey pair for your Alibaba Cloud account on the [AccessKey Pair](https://ram.console.alibabacloud.com/manage/ak) page.

## Agentkey (deprecated)

AgentKey was used to specify workspaces in previous versions. It is no longer used in the latest version.

**Steps:**

1.  Go to the [Model Studio console homepage](https://modelstudio.console.alibabacloud.com/?tab=playground#/efm/prompt).
    
2.  Click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7713235471/p943050.png) icon in the lower-left corner, then click **Workspace Details**.
    
    > By default, RAM users can only view the IDs of sub-workspaces they have joined.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4799735471/p946908.png)

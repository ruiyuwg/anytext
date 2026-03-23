When you use Data Science Workshop (DSW) for the first time, you must grant the DSW service-linked role the required permissions to access cloud resources. If you use Object Storage Service (OSS) for data storage, you must also grant the DSW service-linked role access to OSS. This topic explains how to complete the necessary authorizations for DSW.

## Background information

Before using DSW, ensure your account has the necessary permissions for DSW features. Platform for AI (PAI) also allows you to manage fine-grained permissions for RAM users to operate DSW instances through workspaces. Additionally, DSW needs to access storage services such as Object Storage Service (OSS) and Apsara File Storage NAS. PAI performs operations on these services in the background, so you must also grant PAI access to them. For detailed instructions, see the procedures below.

-   [Authorize the operating account](#e765a9700chjd)
    
    Describes the services that DSW depends on and the required authorization operations.
    
-   [Authorize the PAI service account](#8cb7e5a00cp82)
    
    Describes how to grant an Alibaba Cloud account general DSW operation permissions and access to OSS or NAS.
    

## **Authorize the operating account**

DSW is a cloud-based IDE for machine learning that provides an interactive programming environment for developers of all skill levels. When you use DSW for interactive modeling, you may need to use the following cloud services. You must activate these services and grant the necessary permissions in advance.

-   PAI sub-product: DSW
    
    Account type
    
    Scenario
    
    Link to guide
    
    Root account
    
    An Alibaba Cloud account can use all DSW features without additional authorization.
    
    Not applicable
    
    RAM user (Recommended)
    
    PAI provides different member roles. You can add a RAM user as a workspace member and assign a role that grants the required permissions. For more information about the permissions of each role, see [Roles and permissions](/help/en/pai/appendix-list-of-roles-and-permissions).
    
    [Create and manage workspaces](/help/en/pai/user-guide/create-and-manage-workspaces)
    
-   Dependent cloud products: OSS
    
    DSW depends on OSS for data storage. Therefore, you must activate OSS and grant the required permissions.
    
    Scenario
    
    Description
    
    Link to guide
    
    Activate OSS
    
    Use an Alibaba Cloud account to activate OSS to avoid the need for additional authorization. To use a RAM user to activate OSS, grant the RAM user the `AliyunOSSFullAccess` permission.
    
    -   Activation: [Quick Start](/help/en/oss/user-guide/console-quick-start)
        
    -   Grant permissions to a RAM user: [RAM Policy](/help/en/oss/user-guide/ram-policy/)
        
    -   Common operations: [Quick Start](/help/en/oss/user-guide/console-quick-start)
        
    
    Use OSS
    
    When using OSS:
    
    -   Authorization: OSS provides detailed RAM control policies. You can grant specific operation permissions to RAM users as needed.
        
    -   Common operations: You typically need to create a bucket first to upload files to OSS.
        
    

## **Authorize the PAI service account**

### **Grant general DSW permissions to an Alibaba Cloud account**

To ensure DSW works correctly, confirm your Alibaba Cloud account has the necessary general permissions. These permissions are typically granted when you [activate PAI and create a default workspace](/help/en/pai/user-guide/activate-pai-and-create-the-default-workspace#task-2121596). You can follow the instructions in [Reference: Check if the AliyunPAIDSWDefaultRole role is attached to your account](#section-1s2-wd9-cmy) to verify if your account already has the permissions. If not, you can grant them manually by following the steps below.

1.  Go to the DSW page.
    
    1.  Log on to the [PAI console](https://pai.data.aliyun.com/console).
        
    2.  On the **Overview** page, select the destination region.
        
    3.  In the navigation pane on the left, click **Workspaces**. On the Workspaces page, click the name of the workspace that you want to manage to go to the workspace page.
        
    4.  In the navigation pane on the left of the workspace page, choose **Model Training** > **Data Science Workshop (DSW)** to go to the DSW page.
        
2.  Grant the AliyunPAIDSWDefaultRole role.
    
    1.  Click **Create Instance**.
        
    2.  In the **Grant Permissions** dialog box, click **Authorize Now**.
        
    3.  On the Cloud Resource Access Authorization page, click **Agree to Authorization**.
        
        The system automatically configures the service-linked role required by DSW, so no manual configuration is needed.
        

### **Authorize PAI to access cloud services: OSS and Apsara File Storage NAS**

PAI provides a one-click authorization method to grant PAI access to cloud products such as OSS and NAS. The procedure is as follows:

1.  Log on to the [PAI console](https://pai.data.aliyun.com/console).
    
2.  In the navigation pane on the left, choose **Activation & Authorization** > **Dependent Services**. In the DSW section, find **OSS** and **NAS**.
    
3.  In the **Actions** column, check the authorization status of OSS.
    
    -   If the service is not authorized, click **One-click Authorization** in the **Actions** column and follow the on-screen instructions to complete the authorization.
        
    -   If the service is already authorized, you can click **View Authorization Information** in the **Actions** column to view the details.
        
    

If you do not grant the `AliyunPAIDLCAccessingOSSRole` role permission to access OSS, an error may occur when you mount an OSS dataset, as shown in the following figure:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0990228071/p761178.png)

## Reference: **Check if the** `**AliyunPAIDSWDefaultRole**` **role is attached to your account**

To ensure DSW works correctly, confirm that the `AliyunPAIDSWDefaultRole` service-linked role is attached to your Alibaba Cloud account. Follow these steps to check.

**Note**

Only an Alibaba Cloud account can grant these permissions. RAM users cannot complete this authorization.

1.  Log on to the [RAM console](https://ram.console.alibabacloud.com/).
    
2.  In the left navigation pane, click **Identity Management** > **Role**.
    
3.  On the **Roles** page, enter AliyunPAIDSWDefaultRole in the search box and search for the role.
    
    -   If the role is found, the DSW service role is already authorized.
        
    -   If the role is not found, you must perform the authorization. For more information, see [Grant general DSW permissions to an Alibaba Cloud account](#d1fe113b87e6n).
        

## **References**

After completing the authorization, you can create a DSW instance and use the DSW development environment to develop and train AI models. For more information, see [Create a DSW instance](/help/en/pai/user-guide/create-and-manage-dsw-instances).

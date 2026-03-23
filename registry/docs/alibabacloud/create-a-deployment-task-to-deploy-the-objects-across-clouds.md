DataWorks allows you to add multiple objects, such as nodes, functions, resources, and script templates, to a deployment package at a time for unified deployment. Cross-cloud deployment refers to the process of deploying objects across accounts, regions, or cloud platforms such as Alibaba Finance Cloud and Alibaba Gov Cloud. After you create a deployment package that is used to deploy objects across clouds, you must download the deployment package from the source workspace. Then, you can import the deployment package to the destination workspace and deploy objects in the deployment package. This topic describes how to create a deployment package to deploy objects in the deployment package across clouds.

## **Use cases**

This feature supports the deployment of objects, such as nodes, functions, resources, and components, across accounts, regions, or cloud platforms. It is available only for workspaces that use the **legacy DataStudio**. In essence, this feature migrates and deploys nodes from a source workspace to a target workspace that resides in a different region, account, or cloud platform.

**Note**

To ensure that tasks run smoothly and as expected in the target workspace, please read the [deployment change logic](/help/en/dataworks/user-guide/deployment-center/#section-3qk-b23-3ln) carefully before using this feature. Ensure that you fully understand the **mapping logic** between the source and target workspaces before you proceed.

## Limits

### **Permissions**

-   **Create a deployment environment**: Only members with the **Workspace Administrator** role are allowed to create and configure a deployment environment.
    
-   **Deploy tasks to the production environment of the source workspace**: Members with the **O&M**, **Deploy**, or **Workspace Administrator** roles can deploy tasks to the production environment of the source workspace in DataStudio.
    
-   **Create a deployment package**: Only members with the **Development** role can create a deployment package in Deploy Center.
    
-   **Deploy the package**: Members with the **O&M**, **Deploy**, or **Workspace Administrator** roles in both the source and destination workspaces can deploy packages.
    

For information about how to add members to a workspace and grant permissions to the members, see [Manage permissions on workspace-level services](/help/en/dataworks/user-guide/manage-permissions-on-workspace-level-services#task-2059693).

### **Environments**

The following environment limits apply when you perform cross-workspace deployment from the source workspace to the destination workspace.

**Source workspace**

**Destination workspace**

**Workspace mode**

**DataStudio version**

**Basic mode**

**DataStudio (new version)**

**Basic mode**

**DataStudio (old version)**

**Standard mode**

**DataStudio (new version)**

**Standard mode**

**DataStudio (old version)**

Basic mode

[DataStudio (new version)](/help/en/dataworks/user-guide/overview-new-data-studio/)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8923090571/p952164.png)

**Unsupported**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8923090571/p952164.png)

**Unsupported**

[DataStudio (legacy version)](/help/en/dataworks/user-guide/overview-26/)

**Unsupported**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8923090571/p952164.png)

**Unsupported**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8923090571/p952164.png)

Standard mode

\-

**Unsupported**

**Unsupported**

**Unsupported**

**Unsupported**

### **Others**

**Cross-workspace deployment** is used to deploy objects across workspaces within the same Alibaba Cloud account and in the same region. Cross-region deployment is not supported. If you need to deploy objects across regions, use [Deploy Center](/help/en/dataworks/user-guide/deployment-center/#9f2704fdc3xpj).

## Procedure

For information about the logic of cross-cloud deployment, see [Logic description](/help/en/dataworks/user-guide/overview-of-deployment-center#section-wtn-gwi-xyv).

To create a cross-cloud deployment package, perform the following steps:

1.  Create a deployment package in a source workspace. For more information, see [Create a deployment package in the source workspace](#section-vw7-0gx-67u).
    
2.  Download the created deployment package to your on-premises machine. For more information, see [Download the deployment package from the source workspace](#section-z96-qzq-xpn).
    
3.  Import the downloaded deployment package to a destination workspace. Then, commit and deploy the deployment package. For more information, see [Import the deployment package to the destination workspace](#section-tqx-r6n-yqd).
    

## Create a deployment package in a source workspace

1.  Go to the Deployment Package Creation page.
    
    In the left-side navigation pane of the Deploy Center page, click **Deployment Package Creation**.
    
    **Note**
    
    -   The Deployment Package Creation page displays the committed nodes in the current workspace. All committed nodes can be packaged and deployed on this page.
        
    -   A node can be repackaged only if the status of the deployment package to which the node belongs is **Deployed** or **Failed**.
        
    
2.  Create a deployment package.
    
    On the **Deployment Package Creation** page, add the objects that you want to deploy, such as nodes, functions, and resources, to a deployment package.![跨云发布](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0012104171/p421215.png)
    
    1.  Select a deployment environment.
        
        In the area that is marked with 1, select a cross-cloud deployment environment for the deployment package that you want to create.
        
    2.  Search for objects based on specific conditions.
        
        In the area that is marked with 2, search for objects based on specific conditions, such as **Solution**, **Workflow**, and **Node Type**.
        
    3.  Add the objects to a deployment package.
        
        In the area that is marked with 3, select the objects that you want to deploy and click **Batch Add to Deployment Package**. After you add the objects to the list of undeployed objects, the number of objects to be deployed is displayed in the upper-right corner of the **Nodes to Deploy** button.
        
        **Note**
        
        If you want to deploy only a small number of objects, you can find each object that you want to deploy and click **Deploy** in the **Actions** column. In the **Deployment Confirmation** dialog box, you can perform subsequent operations as prompted.
        
    4.  Confirm the deployment information and create the deployment package.
        
        1.  View the objects to be deployed.
            
            -   View the objects to be deployed: Click **Nodes to Deploy**. In the Nodes to Deploy pane, view the basic information about the objects to be deployed, such as **ID**, **Node Type**, **Change Type**, and **Node Status**.
                
            -   View object details or remove an object: Find the object that you want to view or remove and click **View Details** or **Remove** in the **Actions** column.
                
        2.  Confirm the deployment information.
            
            Click **Deployment Package Creation**. In the **Deployment Confirmation** dialog box, enter a name in the **Deployment Package Name** field and check the **deployment environment** and **the objects** to be deployed.![发布信息确认](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0012104171/p421252.png)
            
        3.  After you confirm the deployment information, click **Deployment Package Creation**. The system creates a deployment package.
            
            After the deployment package is created, you must download the deployment package on the **Deployment Packages** page of the source workspace. Then, you can import the deployment package to the destination workspace and deploy the objects in the deployment package.
            
            **Note**
            
            -   A deployment package can be retained only for 30 days after it is created. We recommend that you download and save the created deployment package at the earliest opportunity. After 30 days, you can no longer download the deployment package. You must create another deployment package.
                
            -   For a node whose instance generation mode is `Next Day`, the deployment takes effect based on the following rules:
                
                -   If you deploy the node before 23:30 on the current day, the deployment takes effect on an instance that is generated for the node on the next day.
                    
                -   If you deploy the node after 23:30 on the current day, the deployment takes effect on an instance that is generated for the node on the third day.
                    
            -   For a node whose instance generation mode is Immediately After Deployment, the deployment takes effect based on the following rules:
                
                -   If the scheduling time of the node is at least 10 minutes after the node is deployed, the updated instance is generated as scheduled.
                    
                -   If the scheduling time of the node is within 10 minutes after the node is deployed, or you deploy the node after 23:30 on the current day, the updated instance is generated on the third day.
                    
            
        

## Download the deployment package from the source workspace

1.  Go to the **Deployment Packages** page.
    
    In the left-side navigation pane of the **Deploy Center** page, click **Deployment Packages**.
    
2.  Download the deployment package.
    
    On the **Deployment Packages** page, download the desired deployment package to your on-premises machine.![查看并下载发布包](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0012104171/p346521.png)
    
    1.  Search for the desired deployment package.
        
        On the **Deployment Packages** page, you can view the basic information about a deployment package, such as the name, deployment environment, and deployment type. You can also filter the desired deployment package based on specific conditions, such as **Deployed By**, **Deployed On**, **Deployment Status**, and **Deployment Environment**.
        
    2.  Click **Download** in the **Actions** column of the desired deployment package.
        
        **Note**
        
        -   A deployment package can be retained only for 30 days after it is created. We recommend that you download and save the created deployment package at the earliest opportunity. After 30 days, you can no longer download the deployment package. You must create another deployment package.
            
        -   For a node whose instance generation mode is `Next Day`, the deployment takes effect based on the following rules:
            
            -   If you deploy the node before 23:30 on the current day, the deployment takes effect on an instance that is generated for the node on the next day.
                
            -   If you deploy the node after 23:30 on the current day, the deployment takes effect on an instance that is generated for the node on the third day.
                
        -   For a node whose instance generation mode is Immediately After Deployment, the deployment takes effect based on the following rules:
            
            -   If the scheduling time of the node is at least 10 minutes after the node is deployed, the updated instance is generated as scheduled.
                
            -   If the scheduling time of the node is within 10 minutes after the node is deployed, or you deploy the node after 23:30 on the current day, the updated instance is generated on the third day.
                
        
    3.  In the **Download Deployment Package** message, confirm the information and click **OK**.
        
        After you download the deployment package, you can import it to a destination workspace.
        

## Import the deployment package to a destination workspace

1.  Go to the **Deployment Package Creation** page.
    
    The procedure of going to the **Deployment Package Creation** page of the destination workspace is similar to the procedure of going to the Deployment Package Creation page of the source workspace. For more information, see the [Create a deployment package](#step-rn4-gif-5sn) section in this topic.
    
2.  Import the deployment package.
    
    1.  In the upper-right corner of the **Deployment Package Creation** page, click **Import Deployment Package**.
        
    2.  Configure the **Deployment Package Name** and Upload Method parameters.
        
        You can set the Upload Method parameter to Upload On-premises File or Upload from OSS.![上传方式](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0012104171/p421495.png)
        
        -   Upload On-premises File: If you select this method, you can directly upload the downloaded deployment package. If the size of a deployment package that you want to upload is less than or equal to 30 MB, select this method.
            
            **Note**
            
            You can upload an on-premises file with a maximum size of 30 MB.
            
        -   Upload from OSS: If you select this method, you must upload the downloaded deployment package to Object Storage Service (OSS) and obtain the URL of OSS. If the size of a deployment package that you want to upload exceeds 30 MB, select this method.
            
            For information about how to upload a deployment package to OSS, see [Upload objects](/help/en/oss/upload-download-and-manage-objects-upload-objects#task-zx1-4p4-tdb). For information about how to obtain the URL of OSS, see [Use object URLs](/help/en/oss/user-guide/share-objects-by-url#task-2025983).
            
        
    3.  Preview and deploy the deployment package.
        
        After you upload the deployment package, you can click **Preview Deployment Package** to check the development environment and the objects to be deployed. Click **Deploy** to deploy the deployment package.
        
        **Note**
        
        If an existing deployment package has the same name as the created deployment package in the destination workspace, the created deployment package overwrites the existing deployment package the first time you deploy the created package. Proceed with caution.
        

## Next steps

After a cross-cloud deployment package is deployed, you can go to the **Deployment Packages** page of the current workspace to view the deployment results. For more information, see [View the deployment packages](/help/en/dataworks/user-guide/view-deployment-tasks#task-2190415).

The deployment packages page lists all created deployment packages, including their names, types, creation times, and statuses. On this page, you can track deployment progress, view details like environment configurations and deployment objects, and perform actions such as delete or rollback.

## Prerequisites

You have created a deployment package. For more information, see [Same-Workspace Deployment](/help/en/dataworks/user-guide/publish-with-workspace), [Cross-Workspace Deployment](/help/en/dataworks/user-guide/create-a-deployment-task-to-deploy-the-objects-across-workspaces), and [Cross-Cloud Deployment](/help/en/dataworks/user-guide/create-a-deployment-task-to-deploy-the-objects-across-clouds).

## Go to the deployment packages page

1.  Go to the Deploy Center.
    
    1.  Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **More** > **Management Center**. On the page that appears, select the desired workspace from the drop-down list and click **Go to Management Center**.
        
    2.  In the top navigation bar, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1068833371/p872407.png) icon and choose **All Products** > **More** > **Deploy Center**.
        
2.  On the **Deploy Center** page, click **Deployment Packages** in the left-side navigation pane to go to the **Deployment Packages** page.
    

## **Filter deployment packages**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6554609471/p961020.png)

You can filter deployment packages by criteria such as **Deployed By**, **Applicant**, **Deployment Status**, **Deployment Environment**, and **Deployment Package Name/ID**.

**Parameter**

**Description**

**Applicant**

The user who created the deployment package.

**Deployed By**

The user who performed the deployment.

**Deployment Status**

-   **Preparing**: The deployment package has been created and is being generated.
    
-   **Pending Deployment**: The deployment package has been generated and is ready to be deployed.
    
-   **Deploying**: The deployment package is being deployed.
    
-   **Successful**: The deployment package is successfully deployed. A package is considered successful only when all its objects deploy successfully.
    
-   ****Publish failed.****: The deployment package failed to deploy. A package is considered failed if any of its objects fails to deploy. You can click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6554609471/p961031.png) icon to view the reason for the failure.
    
-   **Cancelled**: The deployment of the package has been canceled.
    
-   **Importing**: The deployment package is being imported into the destination workspace.
    
    **Note**
    
    This status applies only to cross-cloud deployment scenarios.
    
-   **Rolling Back**: The deployment package is being rolled back to the previous version.
    
-   **Rolled Back**: The deployment package has been successfully rolled back to the previous version.
    
-   **Rollback Failed**: The deployment package failed to roll back to the previous version.
    

## Deployment package information

The deployment packages list displays basic information for all created packages. You can also perform actions such as deploy, delete, or rollback based on your business needs.

The available actions in the **Actions** column vary depending on the deployment scenario:

### **Same-workspace deployment**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6554609471/p961069.png)

After you create a deployment package, it appears in the **Deployment Packages** list. You can perform the following operations:

-   **View Details**: View the environment configuration and deployment object details of the package.
    
-   Users with **Workspace Administrator**, **O&M**, or **Deploy** permissions can **Deploy** packages in the Pending Deployment state.
    

After deployment, you can click **View Details** to check the deployment status of all objects in the package. If the package is in the **Publish failed.** state, you can use the details to identify the specific object that failed and resolve the error.

### **Cross-workspace deployment**

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6554609471/p961098.png)

After you create a deployment package, it appears in the **Deployment Packages** list. You can perform the following operations:

-   **View Details**: View the environment configuration and deployment object details of the package.
    
-   Users with **O&M**, **Deploy**, or **Workspace Administrator** permissions for both the source and destination workspaces can **Deploy** packages in the Pending Deployment state.
    
-   **Delete**: If a deployment package is no longer needed, you can delete it.
    
    **Note**
    
    This action cannot be undone. Proceed with caution.
    

After deployment, you can perform the following operations:

-   **View Details**: You can view the deployment status of all objects in the package. If the package is in the **Publish failed.** state, you can use the details to identify the specific object that failed and resolve the error.
    
-   **Roll Back**: Roll back a deployed package to its previous version.
    
    **Note**
    
    Packages deployed from the Deploy Center in workspaces that use the new version of Data Studio do not currently support rollback.
    

### **Cross-cloud deployment**

-   Source operations
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6554609471/p961143.png)
    
    -   **View Details**: View the environment configuration and deployment object details of the package.
        
    -   **Download**: In a cross-cloud deployment scenario, you must download the deployment package to your local machine so it can be imported and deployed in the destination workspace.
        
    -   **Update Deployment Status**: In a cross-cloud deployment scenario, to redeploy a package that is not in the **Successful** or **Publish failed.** state, you must first manually update its status to either **Successful** or **Publish failed.**. The package cannot be redeployed otherwise.
        
    -   **Delete**: If a deployment package is no longer needed, you can delete it.
        
        **Note**
        
        This action cannot be undone. Proceed with caution.
        
-   Destination operations
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6554609471/p961150.png)
    
    After you import the deployment package into the destination workspace, it appears in the **Deployment Packages** list. The **Deployment Type** is set to **Deployment in Current Workspace**, and the **Deployment Status** is set to **Pending Deployment**.
    
    -   **View Details**: View the environment configuration and deployment object details of the package.
        
    -   Users with **O&M**, **Deploy**, or **Workspace Administrator** permissions for the source and destination workspace can **Deploy** packages in the Pending Deployment state.
        
    -   **Delete**: If a deployment package is no longer needed, you can delete it.
        
        **Note**
        
        This action cannot be undone. Proceed with caution.
        
    
    After deployment, you can perform the following operations:
    
    -   **View Details**: You can view the deployment status of all objects in the package. If the package is in the **Publish failed.** state, you can use the details to identify the specific object that failed and resolve the error.
        
    -   **Roll Back**: Roll back a deployed package to its previous version.

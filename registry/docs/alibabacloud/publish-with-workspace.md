DataWorks lets you bundle multiple objects (such as nodes, functions, resources, and script templates) into deployment packages for unified publishing. This guide explains how to create and publish deployment packages within the same workspace.

## **Use cases**

This feature is available only for workspaces using the **standard mode with the new Data Studio**. It allows you to batch publish objects like nodes, functions, resources, and widgets from the development environment to the production environment within the same workspace.

**Note**

For the batch publishing workflow in the standard mode using the legacy Data Studio, see [Publish tasks](/help/en/dataworks/user-guide/deploy-nodes).

## **Limitations**

### **Permission requirements**

-   **Initiate Publishing**: Members with Workspace Administrator or **Develop** roles can start the publishing process from Data Studio.
    
-   **Create Deployment Packages**: Members with the **Develop** role can create deployment packages in the Deploy Center.
    
-   **Publish Deployment Packages**: Members with **O&M**, **Deploy**, or **Workspace Administrator** roles can publish deployment packages.
    

For more information, see [Workspace-level module permission control](/help/en/dataworks/user-guide/manage-permissions-on-workspace-level-services#task-2059693).

### **Environment requirements**

-   Only workspaces using the **standard mode with the new Data Studio** can batch publish tasks from the development environment to the production environment within the same workspace through the Deploy Center.
    
-   Workspaces in the basic mode have only one environment. To batch publish in the basic Mode, use the batch operations feature in Data Studio instead of the Deploy Center.
    

## **Publishing process**

The publishing process within a workspace follows these steps:

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0871815671/CAEQThiBgMCvo5aczxkiIGI5ODFiZTY4Mjc1MDRmMjBhNGI3ZWRhZjA0NWNhMDYw5215718_20250522170037.966.svg)

## **Procedure**

### **Step 1: Start a publishing process**

1.  In [Data Studio (new version)](/help/en/dataworks/user-guide/overview-new-data-studio/), locate the nodes, functions, or other objects you want to publish, then click **Publish** in the top toolbar to begin the process.
    
2.  In the publishing process, click **Start Deployment to Production Environment** and wait until you reach the **Prod Online** step.
    
    **Note**
    
    -   Members with Workspace Administrator or **Develop** roles can initiate the publishing process in Data Studio.
        
    -   This example uses a user with the **Develop** role. Since only members with **O&M**, **Deploy**, or **Workspace Administrator** roles can complete the publishing process, the **Deploy** button is unavailable.
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3407850671/p959136.png)
    

### **Step 2: Create deployment packages**

**Note**

Members with the **Develop** role can create deployment packages in the Deploy Center. If you have the **Workspace Administrator** role, you can skip manual package creation. After selecting objects to publish, you can proceed directly to batch publishing, and the system will automatically generate the deployment package.

1.  Sign in with an account that has the **Develop** role and navigate to the Deploy Center of the source workspace.
    
    From any DataWorks module, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1068833371/p872407.png) icon in the upper-left corner, then select **All Products** > **More** > **Deploy Center**.
    
2.  In the left navigation pane, click **Nodes to Deploy** to view pending objects. For each object you want to include, click **Add to Deployment Package**.
    
    **Note**
    
    -   You can also select multiple objects and click **Batch Add to Deployment Package** at the bottom of the page.
        
    -   If you clicked **Terminate Deployment** in the publishing process, those objects will no longer appear here.
        
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3407850671/p959174.png)
    
3.  After adding objects to the deployment package, click **View Deployment Package** to verify the contents. You can click **Remove** to exclude unwanted objects from the package.
    
4.  On the **Pending Deployment** page, click **Deployment Package Creation** and follow the prompts to complete package creation.
    
5.  ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/8923090571/p959185.png)
    
    **Note**
    
    If you have **Workspace Administrator** role permissions, the **Deployment Package Creation** button will not be displayed here. Instead, the **Deploy All** button will be displayed, allowing you to publish packages directly.
    

### **Step 3: Publish deployment packages**

1.  Use an account with the **O&M**, **Deploy**, or **Workspace Administrator** role to access the Deploy Center.
    
2.  In the left navigation pane, click **Deployment Packages** to view created deployment packages.
    
3.  Click **Deploy** in the **Actions** column and follow the prompts to complete the operation.
    

### **Step 4: View deployment results**

1.  Once the package is published, you can view the [publishing results](/help/en/dataworks/user-guide/view-deployment-tasks) on the **Deployment Packages** page of the source workspace.
    
2.  After publishing succeeds, click the ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1068833371/p872407.png) icon in the upper-left corner and select **All Products** > **Data Development and O&M** > **Operation Center** to access the production environment. Then, view the published tasks in **Auto Triggered Node O&M** > **Auto Triggered Nodes**.

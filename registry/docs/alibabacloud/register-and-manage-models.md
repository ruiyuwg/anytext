Register trained models and manage versions for deployment tracking and comparison.

## **Prerequisites**

1.  Train and export a model on [Designer](/help/en/pai/user-guide/machine-learning-designer-overview) or [Data Science Workshop (DSW)](/help/en/pai/user-guide/dsw-overview).
    
2.  Upload the model to Object Storage Service (OSS). See [Upload a file](/help/en/oss/getting-started/upload-objects-16).
    
3.  **Alibaba Cloud account**: Perform all operations without additional authorization.
    
4.  **Resource Access Management (RAM) user**: Add the user as workspace member with assigned role. See [Appendix: Roles and permissions](/help/en/pai/appendix-list-of-roles-and-permissions#ea33eb5e1fk05).
    

## Register a model

Register a new model or add a version to an existing model.

1.  Open the **Model Management** page.
    
    1.  Log on to the [PAI console](https://pai.console.alibabacloud.com/).
        
    2.  In the left-side navigation pane, click **Workspace Management**. Select the workspace.
        
    3.  In the left-side navigation pane, choose **AI Asset Management** > **Models**.
        
2.  On the **Models** page, click **Register Model**.
    
3.  In the **Register Model** panel, configure the parameters and click **OK**.
    
    Select a registration method:
    
    -   **Create Model**: Create a new model.
        
    -   **Create Version**: Add a version to an existing model.
        
    
    Configure the parameters:
    
    **Parameter**
    
    **Description**
    
    **Model Name**
    
    Required when **Create Model** is selected. Enter a name for the new model.
    
    **Select Model**
    
    Required when **Create Version** is selected. Select an existing registered model.
    
    **Version Number**
    
    Version number. Editable when **Create Version** is selected.
    
    **Model Address**
    
    Specify model path using one of these methods:
    
    -   Enter the OSS path where model files are stored.
        
    -   Click ![Browse OSS](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4696338671/p839027.png) to select OSS path.
        
        In the **Select OSS folder or file** dialog box, select an existing file or upload a local file:
        
        1.  (Optional) To upload to a new folder, click **Create folder**, then double-click to open the folder.
            
        2.  Click **Upload file**.
            
        3.  Click **Select local file** or drag and drop files to upload.
            
        
    
    **Model Service Deployment**
    
    Select a configuration method:
    
    -   **Automatic Configuration**: System automatically generates deployment configuration after **Model Format** is configured.
        
    -   **Custom Configuration**: Enter deployment configuration directly. See [Deployment configuration](/help/en/pai/user-guide/deployment-configuration-and-push-button-deployment).
        
    
    **Advanced Settings**
    
    Select **Advanced Settings** to configure these parameters:
    
    -   **Version Approval Status**: Approval status. Set to **Pending** (default) or **Approved**.
        
    -   **Model Metrics**: Model metrics for version comparison. See [Model metrics](/help/en/pai/user-guide/model-metrics).
        
    

## View and manage registered models

The Model Management page displays all accessible models. View details, delete models, and perform other operations.![Model Management page](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1024638861/p535463.png)

-   Click **View** to navigate to OSS storage path and view model details. Click **Delete** to remove an obsolete model.
    
-   Set tags to filter models by tag keys and values.
    
-   Click the settings icon in the upper-right corner to customize displayed model information.
    
-   Hover over the area marked with ④ to view model ID.

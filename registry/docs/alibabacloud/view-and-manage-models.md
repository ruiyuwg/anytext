The Models page in DataWorks lets you centrally manage all your models. On this page, you can filter models and perform batch operations.

## Limitations

Currently, you can only batch modify a model's **Lifecycle** and **Owner**.

## View and filter models

1.  Go to the **Models** page.
    
    1.  Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **Data Development and O&M** > **Data Modeling**. On the page that appears, select the desired workspace from the drop-down list and click **Go to Data Modeling**.
        
    2.  On the **Data Modeling** page, click **Dimensional Modeling** in the top navigation bar.
        
    3.  On the **Dimensional Modeling** page, click the ![列表页](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5949416661/p486289.png) icon to go to the **Models** page.
        
2.  Filter or search for models. At the top of the list, filter models by criteria such as **Model Name** and **Data Layer**. The
    
    field supports fuzzy search.
    
    ## **Manage individual models**
    
    On the Models page, you can create, clone, view, and delete individual models.
    
    **Actions**
    
    **Description**
    
    **Create**
    
    Create a data model.
    
    **Clone**
    
    Clone an existing model. You can also right-click a model in the Directory Tree on the left and select **Clone**.
    
    **View**
    
    Open the model details page to view or edit the model.
    
    **Delete**
    
    You must remove a model's associations before you can delete it.
    
    **Important**
    
    Deleted models cannot be restored.
    
    ## **Batch modify models**
    
    You can modify multiple models in batches.
    
    1.  On the **Models** page, select one or more models that you want to modify.
        
    2.  Click **Batch Modify** at the bottom of the list.
        
    3.  In the dialog box that appears, modify the model information. Currently, you can only batch modify a model's **Lifecycle** and **Owner**.
        
    

## **Manage from the details page**

After you create a Dimension Table, Fact Table, Aggregate Table, or application table, you can double-click the model name in the Directory Tree on the left to open its details page. On the details page, you can edit, publish, or develop the model.

-   Edit the model: On the details page, you can modify the basic information and fields of the current table. After you finish editing, click **Save**.
    
    **Note**
    
    After you modify the table information, you must publish and materialize it to the Engine to make the latest version available for development.
    
-   **Refresh model information**: Click **Refresh** to refresh the current content and get the latest table information.
    
-   **Configure model associations**: Click **Association** to create or modify the associations for the current model.
    
-   **Submit the model**: Submitting the model generates a new version that overwrites the previous content.
    
-   **Publish the model**: Click **Publish** to publish and materialize the table to the Engine. This also automatically generates a corresponding Data Quality Rule. For more information, see [Materialize logical models](/help/en/dataworks/user-guide/publish-and-materialize-a-table).
    
-   **View model publishing logs**: Click **View Logs** to view the details of the model's publishing logs.
    
-   **Generate data quality rules for the model**: After the model is successfully published to the production environment, click **Data Quality Rule** to go to the page of the automatically generated Data Quality Rules. You can use these rules to enforce data quality for the corresponding model in the production environment.
    
-   **Generate model code framework**: After the model is successfully published, click **Develop Model** to generate a code framework. This feature helps you improve data development efficiency. For more information, see [Generate ETL code framework (Develop Model)](/help/en/dataworks/user-guide/publish-and-materialize-a-table#45da5edfd9y5o).
    
-   **Export model code statements**: Click **Export** to convert the model information into a DDL statement or ETL statement for the corresponding Engine. You can then copy the code or export it as a file.
    

## Version comparison

Submitting a model generates a new version. In the right-side navigation pane of the model editing page, you can view all versions of the model. You can also perform the following operations:

-   **Version Comparison**
    
    Compare the content of selected versions. If you select only one version, the system compares it with the currently saved model content. You can select up to two versions for comparison.
    
-   **Roll Back**
    
    Switch to a desired model version. This action overwrites the content on the model editing page with the content of the selected version.
    
    **Note**
    
    Rolling back only updates the UI configuration to the selected version.

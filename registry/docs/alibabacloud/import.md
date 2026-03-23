The Batch Import tool in DataWorks Intelligent Data Modeling provides templates for various object types, such as data models and Data Standards. You can use these templates to create multiple objects at once. This feature eliminates repetitive creation tasks, saving you significant time. This topic explains how to use the Batch Import feature to create objects for Intelligent Data Modeling.

## Limitations

You can import only files in the `.xlsx` format. Each import task supports up to 30,000 data entries and a maximum file size of 10 MB.

## Go to the import page

1.  Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **Data Development and O&M** > **Data Modeling**. On the page that appears, select the desired workspace from the drop-down list and click **Go to Data Modeling**.
    
2.  On the **Data Modeling** page, click **General Tools** in the top navigation bar.
    
    On this page, you can create new import tasks or manage existing ones. For more information, see [Create an import task](#section-xuh-lb7-58w) and [Manage import tasks](#section-b9s-sqb-mav).
    

## Create an import task

**Note**

The user interface (UI) for creating an import task varies by object type. This topic uses a Data Domain import task as an example, so the actual UI you see may differ.

1.  On the **Import Tasks** page, click **Create Import Task**.
    
2.  Select an import type and download the template.
    
    On the **Confirm Import Type** tab, select the object type to import, download the corresponding template, and fill it in according to your business requirements.
    
    **Note**
    
    After selecting an import type, you can preview the template to see which fields are required.
    
    ![选择导入类型](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9087416661/p485656.png)
    
3.  Upload and confirm the data.
    
    On the **Data Import** tab, upload and preview your data file. You can choose to preview only the objects that have the same name as existing objects in DataWorks. This helps you decide how to handle these naming conflicts.
    
    **Note**
    
    -   The available **Import Mode** and **Import Status** options depend on the selected import type.
        
        -   **Import Mode**: If an object in the import file has the same name as an existing object in DataWorks, you can choose to **Import Mode** the object or **Import Mode** the existing object.
            
        -   **Import Status**:
            
            -   **Import and Save**: Imports and saves the data without creating a new version.
                
            -   **Import and Submit**: Imports the data and submits it as a new version.
                
    -   You can import only files in the `.xlsx` format. Each import task supports up to 30,000 data entries and a maximum file size of 10 MB.
        
    
    ![导入数据](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9087416661/p485657.png)
    
4.  View the import results.
    
    On the **OK** tab, you can view the details of the import results. In the details list, click **View More Details** next to a Data Domain to open its edit page. If an import Failed, you must resolve the issues based on the error details and retry the import.![查看结果](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0187416661/p485658.png)
    

## Manage import tasks

On the Import Tasks page, you can view an overview and details of all import tasks.![管理导入任务](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0187416661/p485659.png)

**Area**

**Description**

1

In this area, you can filter import tasks by creation date, type, and **Creator**.

2

In this area, you can view information such as the task status, the number of successfully imported items, and the total number of items in the import task. Click **View Details** to see the full details of a specific task. Key information:

-   **Import Status**:
    
    -   **Succeeded**: All objects in the task were imported successfully.
        
    -   **Failed**: All objects in the task failed to import.
        
    -   **Partially Successful**: Some objects in the task failed to import.
        
    
    Use the error details to identify and resolve any issues.
    
-   If the **number of succeeded items** does not match the **total number of items**, possible reasons include:
    
    -   Some objects in the task failed to import.
        
    -   The task includes objects with names that already exist in DataWorks, and the import mode was set to Skip them.
        
    
    Troubleshoot the issue based on your actual situation.
    

## Next steps

After the import task is complete, you can go to the pages of the imported objects for further development.

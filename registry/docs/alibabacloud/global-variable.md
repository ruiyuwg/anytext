You can use global variables to reduce the workload of repetitive parameter configurations in online pipelines and DataWorks offline scheduling pipelines. For online pipelines, global variables allow multiple components to share the same parameters. For DataWorks offline scheduling, global variables are used to replace timed scheduling parameters, thereby enhancing the flexibility and efficiency of the pipeline.

## **How to use**

1.  Configure global variables.
    
    Enter a created pipeline, click on the blank area of the canvas. Then, click **Add Global Variable** on the right side of the interface.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6030193371/p866159.png)
    
2.  Enter `${variableName}` where the variable is needed to reference the variable.
    

## **Example 1: Use global variables in online pipelines**

This example uses a global variable `para1` to change the column name `status` to `ifHealth`**,** and references the variable in the SQL script.

1.  [Create a pipeline](/help/en/pai/user-guide/create-and-manage-pipelines).
    
    This example creates a pipeline based on the preset template "Heart Disease Prediction". Then, retain only the first two nodes and delete the others.
    
2.  Click on the blank area of the canvas, and create a new global variable on the right side of the page.
    
    Set **Variable Name** to `para1`, and **Variable Value** to `ifHealth`.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6030193371/p866193.png)
    
3.  Use the global variable.
    
    Modify the **SQL** component by referencing the variable `${para1}`.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6030193371/p866830.png)
    
4.  Run the pipeline.
    
    After the run is complete, right-click the **SQL** component, select **View Data > SQL Script Output Port**. You can see that the column name `status` has been changed to `ifHealth`.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6030193371/p866209.png)
    

## **Example 2:** Use global variables in **DataWorks offline scheduling pipelines**

This example uses a global variable `gDate` to associate the timed scheduling pipeline with a date, and then sets a scheduling parameter with the same name on DataWorks for scheduling.

1.  Create a test data table.
    
    This example creates a table named **dwtest** on the [MaxCompute console](https://maxcompute.console.alibabacloud.com/) (see the table below). For more information, see [SQL References](/help/en/maxcompute/user-guide/sql-references/).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6030193371/p866878.png)
    
2.  [Create a pipeline](/help/en/pai/user-guide/create-and-manage-pipelines) and configure global variables.
    
    1.  Click on the blank area of the canvas, and create a new global variable `gDate` on the right side of the page.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6030193371/p866897.png)
        
    2.  Configure pipeline components.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6030193371/p866889.png)
        
        -   Read Table: Set **Table Name** to **dwtest**.
            
        -   SQL Script: Reference the global variable `gDate` in the SQL script.
            
            ```
            select * from ${t1} where ds=${gDate}
            ```
            
3.  Run the pipeline.
    
    After the run is complete, right-click the **SQL Script** component, select **View Data > SQL Script Output Port**. You can see the data corresponding to the global variable gDate.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6030193371/p866916.png)
    
4.  Click **Periodic Scheduling** to the upper left corner of the canvas, then click **Create Scheduling Node** to jump to DataWorks. In the **Create Node** dialog box, enter a name and click **Confirm**.
    
5.  **Select PAI Designer Experiment**, then click **Properties** on the right side of the screen. For more information, see [Task scheduling configuration](/help/en/dataworks/user-guide/schedule/).
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6030193371/p866980.png)
    
    Configure the following parameters for this example, with the rest remaining as default:
    
    -   **Scheduling Parameter**: Add a new scheduling parameter with the same name `gDate`, with a value of `$bizdate`.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6030193371/p866975.png)
        
    -   **Schedule**: Set **Rerun** to **Allow Regardless of Running Status**.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6030193371/p866976.png)
        
    -   **Dependencies**: Select **Add Root Node**.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6030193371/p866978.png)
        
6.  Click the ![保存](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6030193371/p866981.png) and ![提交](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6030193371/p866981.png) icons in the toolbar to save and submit the node.
    
7.  Click **Operation Center** at the top of the page to view the running status and operation log of the machine learning task.
    
    You can also directly perform operations such as data backfill and pipeline trial runs, see [View and manage auto triggered tasks](/help/en/dataworks/user-guide/view-and-manage-auto-triggered-nodes#task-2056582).
    

## **References**

-   [Create and manage pipelines](/help/en/pai/user-guide/create-and-manage-pipelines)
    
-   [Schedule](/help/en/dataworks/user-guide/schedule/)
    
-   [View and manage auto triggered tasks](/help/en/dataworks/user-guide/view-and-manage-auto-triggered-nodes#task-2056582)

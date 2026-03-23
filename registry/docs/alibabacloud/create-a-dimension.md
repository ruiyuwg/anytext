A dimension defines a perspective for business analysis. After you create a dimension, you can associate it with a Dimension Table to build structured analytical models from various perspectives, such as time or region.

## Procedure

1.  Go to **Dimensional Modeling**.
    
    1.  Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). Switch to the target Region. In the left-side navigation pane, click **Data Development & O&M** > **Data Modeling**. Select the target Workspace from the drop-down list and click **Go to Data Modeling**.
        
    2.  On the **Data Modeling** page, click **Dimensional Modeling** in the top menu bar.
        
2.  On the **Dimensional Modeling** page, hover over the ![加号](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3367251371/p289535.png) icon and click **Conceptual Model** > **Create Dimension**.
    
3.  Configure the basic information for the dimension.
    
    ![PixPin_2025-12-11_15-44-55](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5187745671/p1034367.png)
    
    **Parameter**
    
    **Description**
    
    Data Warehousing Level
    
    Select the Data Warehousing Level for the dimension. Different levels correspond to different business scenarios:
    
    -   **Common Layer**: Stores processed and integrated common data to create a unified, enterprise-level dimension. If you select this level, you must also specify a Data Domain. For information about how to create a data domain, see [Data Domain](/help/en/dataworks/user-guide/business-planning#0325b13dbd1hy).
        
    -   **Application Layer**: Builds business-level dimensions based on specific application requirements. If you select this level, you must also specify a Data Mart. For information about how to create a data mart, see [Data Mart](/help/en/dataworks/user-guide/business-planning#e6023f7defrj3).
        
    
    **Note**
    
    By default, you can create only Application Tables in the Application Layer. To create a dimension in the Application Layer, you must create a new Application Layer and set its model type to **Dimension** or **Dimension Table, Dimension**. For more information, see [Customize Data Warehousing Levels](/help/en/dataworks/user-guide/data-warehouse-layering#da57313b59lyu).
    
    Business Category
    
    Select the Business Category for the dimension. For more information, see [Define Business Categories](/help/en/dataworks/user-guide/business-planning#a1cb3a430e2us).
    
    Data Domain / Data Mart
    
    Specify the Data Domain or Data Mart for the dimension based on the selected Data Warehousing Level. The Data Mart option is available only when you select Application Layer for the Data Warehousing Level.
    
    Abbreviation
    
    The abbreviation for the dimension. The abbreviation must be unique within the specified Data Domain or Data Mart.
    
    Name
    
    The name of the dimension.
    
4.  Click **Save**.
    
    After the dimension is created, you can find and manage it in the directory tree on the left of the Dimensional Modeling page, under the corresponding Data Domain or Data Mart.
    

## FAQ

**Q: How do I create a dimension in the Application Layer?**

**A:** By default, you can create only Application Tables in the Application Layer. You can create a new Data Warehousing Level, select Application Layer, and then configure the model type for the new level. The available model types are **Application Table**, **Dimension Table**, and **Conceptual Dimensions**. You can enable **Dimension Table** and **Conceptual Dimensions** separately or together.

## What to do next

After creating a dimension, you can associate it with a Dimension Table. For more information, see [Create a logical model: Dimension Table](/help/en/dataworks/user-guide/create-a-dimension-table#task-2090825).

A modifier defines the business scope of statistical data. After you create a modifier, you can use it to filter data from multiple dimensions to analyze specific business scenarios, such as "Shanghai area" or "fresh food outlets". You can combine a modifier with an atomic metric and a period to create a derived metric.

## Concept description

A modifier is a business qualifier that defines or narrows the business scope of statistical data. For example, if you calculate the sales amount of online channels and fresh food outlets, "online channel" and "fresh food outlet" are the modifiers that define the business scope. A derived metric consists of one or more modifiers, an atomic metric, and a period. This derived metric indicates the status of a specific business activity. For more information, see [Derived metric](/help/en/dataworks/user-guide/derived-metric#task-2090832).

## Create a modifier

1.  Go to the **Modifier** page.
    
    1.  Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **Data Development and O&M** > **Data Modeling**. On the page that appears, select the desired workspace from the drop-down list and click **Go to Data Modeling**.
        
    2.  On the **Data Modeling** page, click **Data Metric** in the top navigation bar. Then, in the navigation pane on the left, click **Modifiers** to go to the **Modifiers** page.
        
2.  Click the ![新建](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2897207361/p289518.png) icon to create a modifier.
    
3.  Configure the modifier parameters.
    
    **Parameter**
    
    **Description**
    
    **Modifier Type**
    
    -   **Common Business Modifier**: A general and flexible modifier. Its value is usually a custom business tag or text and is not directly associated with a specific dimension table.
        
    -   **Dimension Enumeration Modifier**: A structured and managed modifier. Its value must be a member (an enumerated value) from a defined dimension table.
        
    
    **Abbreviation**
    
    The English abbreviation of the modifier.
    
    It uniquely identifies the modifier and cannot be changed after creation. For example, fresh\_store.
    
    **Name**
    
    The English name of the modifier. For example, Fresh Food Store Type.
    
    **Display Name**
    
    The Chinese name of the modifier. For example, fresh food outlet.
    
    **Effective Scope**
    
    Defines the scope of the business activity for which data is collected. For example, outlets that sell fresh food.
    
    **Owner**
    
    The owner of the modifier. The default owner is the user who creates the modifier.
    
    **Description**
    
    The description of the modifier.
    
    **Data Layer**
    
    Click **Advanced Settings** and select the data warehouse layer for the modifier: **Common Layer** or **Application Layer**.
    
    **Mart/Subject**
    
    If you set **Data warehouse layer** to **Application Layer**, select the mart or subject area for the modifier.
    
    **Business Category**
    
    If you set **Data warehouse layer** to **Common Layer**, use this parameter to associate the modifier with a data domain.
    
    **Data Domain**
    
    If you set **Data warehouse layer** to **Common Layer**, select the **data domain** for the modifier. Before you configure this parameter, you must create a [data domain](/help/en/dataworks/user-guide/business-planning#bca166717ffr9).
    
    **Associated Dimension Table**
    
    If you set **Modifier type** to Dimension Enumeration Modifier, configure the dimension to associate with the modifier.
    
    **Dimension Table**: Click the drop-down list and select a submitted dimension table. For more information about dimension tables, see [Create a logical model: Dimension table](/help/en/dataworks/user-guide/create-a-dimension-table).
    
    **Dimension Field**: After you select a dimension table, select a dimension property from the table as the associated dimension.
    
    **Associated Lookup Table**
    
    If you set **Modifier type** to **Dimension Enumeration Modifier**, configure the lookup table to associate with the modifier.
    
    **Lookup table**: Click the drop-down list and select a created lookup table. For more information, see [Data Standard: Lookup table](/help/en/dataworks/user-guide/data-standards#8677e5641bn3m).
    
    **Enumeration value**: After you select a lookup table, you can select an encoded value from the lookup table as the enumerated value.
    
4.  Click **Save**.
    

## Batch import modifiers

If you have many modifiers to create, you can use the batch import feature. DataWorks provides an import template. You can add the modifiers to the template and then import the file to create them in a batch.

1.  Go to the **Modifier** page. Move the pointer over the ![导入](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0075072661/p389579.png) icon and click **Import from Excel**.
    
2.  Select **Modifier** for the **Import Type** parameter. Download the corresponding template and fill it in with the required information.
    
    **Note**
    
    After you select an import type, you can preview the template information and prepare the content for each field.
    
    ![导入修饰词](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0884065671/p670663.png)
    
3.  On the **Data Import** tab, upload and preview the data file.
    
    You can choose to preview only the fields that have the same names as existing fields in DataWorks. Then, you can delete or modify the fields with the same names.
    
    -   **Import Mode**: If an object in the import file has the same name as an existing object in DataWorks, you can choose to either skip the object or overwrite the existing object.
        
    -   **Import Status**:
        
        -   **Import and Save**: Imports and saves the data without creating a new version.
            
        -   **Import and Submit**: Imports the data and submits a new version for the imported data.
            
    -   Batch import limits:
        
        -   File format: Only the `.xlsx` format is supported.
            
        -   Data volume: You can import up to 30,000 data entries at a time.
            
        -   File size: The file cannot exceed 10 MB.
            
4.  View the import results.
    
    On the **OK** tab, you can view the import result details. In the details list, click **Details** next to a modifier to go to its edit page, where you can perform additional operations. If the import fails, you must resolve the error based on the provided details and then import the file again.
    

## Next steps

A modifier can be combined with an atomic metric and a period to form a derived metric. If a modifier is referenced by a derived metric, you must delete all associated derived metrics before you can delete the modifier. For more information, see [Derived metric](/help/en/dataworks/user-guide/derived-metric#task-2090832).

Business metrics often need to be calculated within specific time frames, such as "last 7 days" or "current calendar month". You can create standardized periods to standardize business statistics and improve analysis efficiency. These periods can be reused when you configure derived metrics.

## Overview

An atomic metric, a period, and one or more modifiers constitute a derived metric that can reflect the status of a business activity of an enterprise. For more information about derived metrics, see [Derived metric](/help/en/dataworks/user-guide/derived-metric#task-2090832).

## Create a period

1.  Go to the **Data Modeling** page.
    
    1.  Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **Data Development and O&M** > **Data Modeling**. On the page that appears, select the desired workspace from the drop-down list and click **Go to Data Modeling**.
        
    2.  On the **Data Modeling** page, click **Data Metric** in the top navigation bar. Then, in the navigation pane on the left, click **Period**.
        
2.  Create and configure a period.
    
    1.  In the Period pane of the page that appears, click the ![新建](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2897207361/p289518.png) icon.
        
        DataWorks provides nine built-in period granularities, such as **Day**, **Week**, and **Month**. You can create finer-grained periods based on these granularities, such as "the last day" and "the last three weeks".
        
    2.  Configure **Basic Information** for the period.
        
        The following table describes the basic parameters of the period.
        
        **Parameter**
        
        **Description**
        
        **Period Granularity**
        
        The granularity to which the period belongs.
        
        **Abbreviation**
        
        The abbreviation for the name of the period. The abbreviation is the unique identifier of the period and cannot be changed after the period is created.
        
        **Name**
        
        The name of the period.
        
        **Display Name**
        
        The display name of the period.
        
        **Owner**
        
        The owner of the period. The default owner is the creator of the period.
        
        **Description**
        
        The description of the period.
        
3.  Click **Save** and then click **Submit**. You can then reference the submitted period when you create derived metrics.
    
    After the period is submitted, you can reference the period when you create a derived metric. If you want to delete a period that is referenced by a derived metric, you must remove the reference relationship between the period and derived metric first.
    

## Import periods

To create multiple periods efficiently, you can use the batch import feature.

1.  On the **Period** page, hover over the ![导入](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0075072661/p389579.png) icon and click **Import from Excel**. In the dialog box that appears, download the template file.
    
2.  In the template, enter the information for the periods that you want to import. Follow the column descriptions and examples provided in the template.
    
3.  Return to the dialog box. Upload the completed template file and run the import task. When you create the import task, set **Import Type** to **Period**. For more information, see [Import](/help/en/dataworks/user-guide/import#task-2248263).
    

## What to do next

You can reference the created period, an atomic metric, and one or more modifiers when you create a derived metric. The derived metric can be used to collect statistical data on the values of an atomic metric within the period based on specific dimensions and business conditions. For more information about how to reference a period when you create a derived metric, see [Derived metric](/help/en/dataworks/user-guide/derived-metric#task-2090832).

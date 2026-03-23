HoloWeb displays logical and physical execution plans for SQL queries as tree diagrams to help you analyze them more easily. This topic describes how to use the execution plan and run analysis features in HoloWeb to view the execution plan of an SQL statement.

## Prerequisites

[Purchase a Hologres instance](/help/en/hologres/getting-started/purchase-a-hologres-instance) and [create a database](/help/en/hologres/getting-started/create-a-database).

## View execution plans

1.  Go to the HoloWeb developer page. For more information, see [Connect to HoloWeb and run queries](/help/en/hologres/getting-started/connect-to-holoweb#task-2523359).
    
2.  In the menu bar at the top of the HoloWeb developer page, click **SQL Editor**.
    
3.  On the **SQL Editor** page, click **Ad-hoc Query** in the upper-left corner.
    
4.  On the new **Ad-hoc Query** page, select the created **Instance Name** and **Database**. In the SQL query editor, enter the SQL statement whose execution plan you want to view, then click **Execution Plan** to view the graphical execution plan.
    
5.  (Optional) On the **Plan** tab, click the ![DAG](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2212818361/p339384.png) icon in the upper-right corner to switch the execution plan view to a DAG graph.
    

## View run analysis

Run analysis executes and analyzes an SQL statement, returning its detailed physical execution plan and runtime overhead.

1.  Go to the HoloWeb developer page. For more information, see [Connect to HoloWeb and run queries](/help/en/hologres/getting-started/connect-to-holoweb#task-2523359).
    
2.  In the menu bar at the top of the HoloWeb developer page, click **SQL Editor**.
    
3.  On the **SQL Editor** page, click **Ad-hoc Query** in the upper-left corner.
    
4.  On the new **Ad-hoc Query** page, select the created **Instance Name** and **Database**. In the SQL query editor, enter the SQL statement whose execution plan you want to view, then click **Analyze** to view the graphical run analysis.
    
5.  (Optional) On the **Analysis** tab, click the ![DAG](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2212818361/p339384.png) icon in the upper-right corner to switch the execution plan view to a DAG graph.
    
    **Note**
    
    Click an operator on the DAG graph to view its details.

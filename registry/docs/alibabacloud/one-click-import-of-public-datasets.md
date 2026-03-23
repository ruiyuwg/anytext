HoloWeb supports one-click import of public datasets through its visual interface. This feature helps you quickly import and query public data. This topic describes how to create a one-click import task and view its status information in HoloWeb.

## **Background information**

HoloWeb supports one-click import for four public datasets: `tpch_10g`, `tpch_100g`, `tpch_1t`, and `github_event`.

-   The `tpch_10g`, `tpch_100g`, and `tpch_1t` public datasets simulate a retail scenario. Their data volumes are 10 GB, 100 GB, and 1 TB, respectively. For more information, see [Test plan introduction](/help/en/hologres/user-guide/test-plan).
    
-   The `github_event` public dataset is the official public event dataset from GitHub. For more information, see [Business and data overview](/help/en/hologres/use-cases/integration-of-offline-and-real-time-processing-of-data-in-github-public-event-datasets#f52c81c0cca5h).
    

## **Prerequisites**

-   Your Hologres instance must be version V1.3.13 or later.
    
-   You have logged on to an instance in HoloWeb. For more information, see [Log on to an instance](/help/en/hologres/user-guide/log-on-to-an-instance#section-ds8-hm8-pa5).
    

## **Precautions**

-   Only Hologres instances in the China (Beijing), China (Shanghai), China (Hangzhou), China (Shenzhen), and China (Zhangjiakou) regions support one-click import of public datasets.
    
-   The user who performs the one-click import must have permissions to create schemas, create tables, and write data. For information about how to grant permissions, see [Hologres permission model](/help/en/hologres/security-and-compliance/hologres-permission-model/).
    
-   A public dataset import task takes approximately 3 to 20 minutes to complete. The actual time depends on factors such as the instance type. Plan your compute resources in advance to avoid affecting your online business.
    
-   The import task automatically creates two schemas and several foreign and internal tables. Check the existing schemas, foreign tables, and internal tables in your database to prevent name conflicts and accidental data deletion.
    

## **Create a public dataset import task**

1.  Go to the HoloWeb developer page. For more information, see [Connect to HoloWeb](/help/en/hologres/getting-started/connect-to-holoweb).
    
2.  In the top menu bar of the HoloWeb developer page, click **Data Solutions**.
    
3.  On the **Data Solutions** page, click **Import Public Dataset** in the navigation pane on the left.
    
4.  On the **Import Public Dataset** page, click **Create Task for Importing Public Dataset**.
    
5.  On the **Create Task for Importing Public Dataset** page, select an **Instance Name**, a **Database**, and a **Public Dataset Name**. Then, select whether to **Use Serverless Computing resources to execute data import** and click **Submit**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2369967371/p903323.png)
    

## **View public dataset import task information**

1.  On the **Import Public Dataset** page, select an **Instance Name** and a **Database**, and then click **Search** to view the list of public dataset tasks.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2369967371/p903330.png)
    
    The task list includes the following information and operations:
    
    -   Information: **No.**, **Instance Name**, **Database**, **Public Dataset Name**, **Status**, **Progress** (Completed SQL statements/Total SQL statements), **Created At**, and **End Time**.
        
    -   Operations: **Details**, **Stop**, **Rerun**, **Delete**, **Execution History**, and **Query**.
        
    
2.  When the task **Status** changes to **Successful**, the import is complete. You can then click **Query** in the **Actions** column for the task to perform data analytics.
    

## **Delete a public dataset**

Execute the following SQL statement to delete the schema of the public dataset and all its dependencies. The `tpch_100g` dataset is used as an example. Use this statement with caution to prevent accidental data deletion.

```
DROP SCHEMA hologres_dataset_tpch_100g, hologres_foreign_dataset_tpch_100g CASCADE;
```

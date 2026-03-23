DataWorks Data Map is a centralized platform for managing and discovering data assets. It helps you understand your enterprise data and find what you need quickly and accurately, much like a search engine. Its core features include the following:

-   **Data overview**: Provides a statistical view of your data assets, helping you quickly gain insights into your data.
    
-   **Global keyword search**: Use a single entry point to quickly locate tables, fields, or business terms.
    
-   **Multi-dimensional filtering and browsing**: Combine conditions for fine-grained, exploratory data searches.
    

## **Limits**

-   Tenants who have [created a PAI workspace](/help/en/pai/user-guide/create-and-manage-workspaces#title-gt5-z4q-ytf) can search for and view corresponding AI asset types, such as datasets, AI models, algorithm tasks, and model services.
    
-   Code search is available only for users of DataWorks Standard Edition and higher.
    

## Access Data Map

Log on to the [DataWorks console](https://dataworks.console.aliyun.com/overview). In the top navigation bar, select the desired region. In the left-side navigation pane, choose **Data Governance** > **Data Map**. On the page that appears, click **Go to Data Map**.

## **Data overview: Gain insights from a macro perspective**

The data overview shows the overall usage of your data sources.

1.  On the **Home Page** of Data Map, click **Data Overview** next to **Collect Metadata**.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4392192671/p1025402.png)
    
2.  On the data overview page, you can view all engine resources in the current region.
    
    1.  **Key MaxCompute metrics**:
        
        **Name**
        
        **Description**
        
        **Total Number of Projects**
        
        The total number of MaxCompute projects in the current region. This is a **quasi-real-time** metric.
        
        **Total Number of Tables**
        
        The total number of MaxCompute tables in the current region. This is an offline metric with **one day delay**.
        
        **Storage**
        
        The total logical storage size of all tables in the current region. This includes temporary files from scheduling tasks and storage space that has not been released after tables are deleted. This is an offline metric with **one day later**.
        
        **Total APIs**
        
        The total number of MaxCompute APIs published to API Gateway in the current region.
        
        **Storage Trend Chart**
        
        A trend graph of the total logical storage for MaxCompute projects in the current region. This includes temporary files from scheduling tasks and storage space that has not been released after tables are deleted. This is an offline metric with **one day later**.
        
        **Top Projects By Table Storage**
        
        A ranking of MaxCompute projects by logical storage size in the current region. This is an offline metric with **one** **day delay**. Click a project to view its metadata.
        
        **Important**
        
        Project storage is greater than table storage because it includes the storage of resources, the recycle bin, and other system files in addition to table storage.
        
        **Top Tables By Occupied Storage**
        
        A ranking of MaxCompute tables by size. This is an offline metric with a **T+1 day delay**. Click a table to view its metadata.
        
        **Important**
        
        Table storage is calculated based on logical storage, not physical storage.
        
        **Most Frequently Viewed Tables**
        
        The most viewed tables in the last 30 days. This is ranked by the number of page views (PV) for table details pages in Data Map over the last 30 days. This is a **quasi-real-time** metric.
        
    2.  **Other engine metrics**: Displays information such as the total number of databases, tables, and clusters.
        

## **How to find data: From search to discovery**

Data Map provides two complementary search methods to meet your various data discovery needs.

### **Global keyword search**

Global search is the most efficient way to find data when you know what you are looking for. The home page also provides quick access to **Recently Viewed** items, **Albums Followed,** and the **Albums Managed** page.

1.  **Go to the search bar**: Find the search box at the top of the Data Map home page.
    
2.  **Enter keywords**: Select a metadata type and enter **keywords**, such as a table name, field name, or comment. For example, you can enter "user", "order", or "user\_info".
    
3.  **Run the search**: Press Enter. The system returns a list of all relevant data assets. You can click an asset to view its details.
    

### **Multi-dimensional filtering and browsing**

To narrow your search or explore data by business category, you can use the advanced search page. The global keyword search bar from the home page is also available above the navigation bar.![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4392192671/p1025426.png)

1.  **Go to the search page**: In the navigation pane on the left, click the search icon ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4392192671/p1025424.png) to go to the advanced search page.
    
2.  **Combine filter conditions**: On the left side of the page, you can filter your results by selecting various conditions:
    
    -   **Type**: Select a metadata type. Supported types include **Table**, **Code**, **Index**, **API**, **Dataset**, and **Workspace**, etc.
        
    -   **Data Source**: When you select Table, you can limit the search to a specific engine, such as **MaxCompute**, **EMR Hive**, or **Hologres**.
        
        **Important**
        
        If the number of data sources exceeds a certain limit, click the **More** button in the upper-right corner to display hidden data sources.
        
    -   **Filter Conditions**
        
        -   You can filter by **Project**, **Owner**, **Environment**, **Cluster**, **Data Catalog**, **Database**, and more.
            
            > Filter conditions vary depending on the metadata type.
            
        -   **Tag**: Filter by tags that are applied during the data governance process. You can set [tags](/help/en/dataworks/user-guide/label-management#e7162d9eb7a9q) on the **My Data** > **Owned by me** page or in the metadata details.
            
        -   **Category**: Filter by business category. To configure business categories, go to the **Manage Configurations** > **Manage Categories** page. For more information, see [Category Navigation Configuration](/help/en/dataworks/user-guide/configuration-management/#section-izn-48s-j05).
            

**Example:**

> To find all production tables in MaxCompute that are owned by "Zhang San", set **Data Source** to `MaxCompute`, enter `Zhang San` for Owner, and set Environment to `Production`.

## **FAQ**

-   **Q: Why can't I find the table I'm looking for?**
    
    A: If you cannot find a table in DataWorks Data Map, it is usually due to one of the following reasons. Review the following possible reasons and solutions.
    
    -   **Mismatched search keywords**: The search feature matches table names, descriptions, and field names. Try using more precise or partial keywords.
        
    -   **Metadata is not synchronized**: After you attach a MaxCompute or DLF data source to DataWorks, metadata is automatically collected. However, a delay may occur before the metadata is synchronized after you create a new table or modify its schema.  
        Solution: Go to **My Data** **>** **My Tools** **>** **Refresh Table Metadata**. After the operation is successful, search again.
        
    -   **The table is hidden**: The table might be set to a "hidden" state, which prevents it from being discovered by search. If a table's status is "hidden", no one can view it. If its status is "project-only", only members of the current workspace can view it.
        
    -   **Insufficient permissions**: By default, the search scope covers only the current workspace and authorized projects. If the target table belongs to another account or an unauthorized workspace, it will not appear in the search results. In addition, if you do not have query permissions for a table, it is not visible in Data Map by default. This is particularly true for standard mode workspaces.
        
        Solution: Contact the table owner or an administrator to request the required permissions, or confirm that you have been added as a member to the corresponding project.

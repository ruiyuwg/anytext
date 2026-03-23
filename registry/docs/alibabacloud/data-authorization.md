This topic describes how to perform data authorization.

**Note**

Supported engines:

-   E-MapReduce product (EMR-3.40.0 and later versions or EMR-5.6.0 and later versions), including the following compute engines:
    
    -   Spark
        
    -   Hive
        
    -   Presto (Only supported in EMR-3.40.0 and EMR-5.6.0 versions)
        
-   Databricks product.
    

## **Add** permissions

1.  Open the [Data Lake Formation console](https://dlf.console.alibabacloud.com/cn-hangzhou/home?spm=5176.19711204.J_5253785160.3.66d92bf5mZ6OXc) and log on as a data lake administrator or a user with permission permissions.
    
2.  In the left-side navigation pane, click **Data Permission** > **Data Permissions**.
    
3.  Click **Add Permission** to open the add permission page.
    
4.  Specify the **Principal**.
    
    1.  **Principal Type**: You can choose **RAM User/Role** or **Role**.
        
        -   **RAM User/Role**: You can select an RAM user or RAM role. For the management of RAM users or RAM roles, you can configure them in the [RAM console](https://ram.console.alibabacloud.com/users).
            
        -   **Role**: Refers to the role defined in Data Lake Formation (DLF). For role management, you can configure it in the [Data Lake Formation console](https://dlf.console.alibabacloud.com/auth/role).
            
    2.  **Choose Principal**: You can select one or more RAM users/roles or DLF roles.
        
5.  Select the **Resources**.
    
    1.  **Authorization Method**: Only resource authorization is supported. Resource authorization refers to configuring data permissions for resources such as data catalogs, databases, data tables, data columns, and functions.
        
    2.  **Resource Type**: You can choose data catalog, database, data table, data column, or function.
        
    3.  Select the resource entity. You can perform a fuzzy search and select the data catalog, database, table, column, and function you want to authorize.
        
6.  Configure the **Permission**. Configure the corresponding data permissions and granted permissions for the resource type to be authorized. Click **OK**.
    
    **Note**
    
    Different resource types correspond to different permission configurations. You can refer to the interface display for specific situations.
    

## **Query** permissions

1.  Open the [Data Lake Formation console](https://dlf.console.alibabacloud.com/cn-hangzhou/home?spm=5176.19711204.J_5253785160.3.66d92bf5mZ6OXc) and log on as a data lake administrator or a user with authorization permissions.
    
2.  In the left-side navigation pane, click **Data Permission** > **Data Permissions**.
    
3.  On the **Data Permissions** page, view the data permission information. The explanation of related fields is as follows:
    
    -   Principal: Refers to the ID and name of the authorized entity.
        
    -   Principal Type: Supports RAM user/RAM role/DLF role.
        
    -   Resource Type: Includes three types: database, data table, and data column.
        
    -   Resource Name: Specify the specific resource name, such as the database name.
        
    -   Data Permission: The name of the granted permission. For a description of the permissions, see [Permissions](/help/en/dlf/dlf-1-0/user-guide/overview#section-o28-mmj-sh0).
        

## **Cancel** permissions

1.  On the **Data Permissions** page, search for the permission information you want to cancel.
    
2.  In the **Actions** column of the corresponding permission information, click **Revoke Permissions**.
    
3.  In the pop-up dialog box, click **Delete** to complete the cancel permission operation.

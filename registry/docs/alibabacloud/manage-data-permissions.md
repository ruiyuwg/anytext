This topic describes how to grant permissions on catalogs, databases, and tables in Data Lake Formation (DLF).

## **Limitations**

Only DLF users with `super_administrator`, `admin` roles, or explicit `Grant` permission on a resource can assign data permissions to DLF users or roles. To obtain `admin` permission, contact a `super_administrator`.

## **Catalog**

### **Grant permissions**

1.  Log on to the [DLF console](https://dlf-next.console.alibabacloud.com/).
    
2.  In the left navigation menu, select **Catalogs**, and click your catalog name.
    
3.  Select the **Permissions** tab, and click **Grant Permissions**.
    
4.  In the **Grant Permissions** panel, configure the following parameters and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Principal**
    
    Select **DLF User** or **DLF Role**.
    
    **Select DLF User** or **Select DLF Role**
    
    -   **Select DLF User**: Select a RAM identity from the dropdown list.
        
    -   **Select DLF Role**: Select a system or custom role from the dropdown list. For more information, see [Manage DLF users and roles](/help/en/dlf/dlf-2-0/user-guide/manage-dlf-users-and-roles).
        
    
    **Predefined Permission Type**
    
    Select one of the following permission types:
    
    -   **Custom** (default): Defines custom permissions.
        
    -   **Data Reader**: Predefines read-only access to catalog resources.
        
    -   **Data Editor**: Predefines read/write access to catalog resources.
        
    
    **Permissions**
    
    Select the permissions to grant.
    

### **Query permissions**

1.  In the left navigation menu, select **Catalogs**, and click your catalog name.
    
2.  Select the **Permissions** tab to view principal permissions.
    

### **Revoke permissions**

1.  In the left navigation menu, select **Catalogs**, and click your catalog name.
    
2.  On the **Permissions** tab, select the permissions to revoke, and click **Revoke Permissions**.
    

## **Databases**

### **Grant permissions**

1.  Log on to the [DLF console](https://dlf-next.console.alibabacloud.com/).
    
2.  In the left navigation menu, select **Catalogs**, and click your catalog name.
    
3.  In the **Database** section, click your database name.
    
4.  Select the **Permissions** tab, and click **Grant Permissions**.
    
5.  In the **Grant Permissions** panel, enter the following information:
    
    **Parameter**
    
    **Description**
    
    **Principal**
    
    Select **DLF User** or **DLF Role**.
    
    **Select DLF User** or **Select DLF Role**
    
    -   **Select DLF User**: Select a RAM identity from the dropdown list.
        
    -   **Select DLF Role**: Select a system or custom role from the dropdown list. For more information, see [Manage DLF users and roles](/help/en/dlf/dlf-2-0/user-guide/manage-dlf-users-and-roles).
        
    
    **Predefined Permission Type**
    
    Select one of the following permission types:
    
    -   **Custom** (default): Defines custom permissions.
        
    -   **Data Reader**: Predefines read-only access to database resources.
        
    -   **Data Editor**: Predefines read/write access to database resources.
        
    
    **Permissions**
    
    Select the permissions to grant.
    

### **Query permissions**

1.  In the **Database** section, click your database name.
    
2.  Select the **Permissions** tab to view principal permissions.
    

### **Revoke permissions**

1.  In the **Database** section, click your database name.
    
2.  On the **Permissions** tab, select the permissions to revoke, and click **Revoke Permissions**.
    

## **Tables**

### **Grant permissions**

1.  Log on to the [DLF console](https://dlf-next.console.alibabacloud.com/).
    
2.  In the left navigation menu, select **Catalogs**, and click your catalog name.
    
3.  In the **Database** section, click your database name.
    
4.  On the **Tables** subtab, click a table name to open the table details page.
    
5.  Select the **Permissions** tab, and click **Grant Permissions**.
    
6.  In the **Grant Permissions** panel, enter the following information and click **OK**.
    
    **Parameter**
    
    **Description**
    
    **Principal**
    
    Select whether to grant permissions to a user or a role.
    
    **Select DLF User** or **Select DLF Role**
    
    -   **Select DLF User**: Select a RAM identity from the dropdown list.
        
    -   **Select DLF Role**: Select a system or custom role from the dropdown list. For more information, see [Manage DLF users and roles](/help/en/dlf/dlf-2-0/user-guide/manage-dlf-users-and-roles).
        
    
    **Predefined Permission Type**
    
    Select one of the following permission types:
    
    -   **Custom** (default): Defines custom permissions.
        
    -   **Data Reader**: Predefines read-only access to table resources.
        
    -   **Data Editor**: Predefines read/write access to table resources.
        
    
    **Table**
    
    Select the table permissions to grant. Valid options:
    
    -   **ALL**: Grant all permissions.
        
    -   **Alter**: Modify the table schema.
        
    -   **Drop**: Delete the table.
        
    -   **Select**: Query data in the table.
        
    -   **Update**: Update data in the table.
        
    -   **Grant**: Grant permissions to other users.
        
    
    **Column**
    
    Valid options:
    
    -   **All Columns** (default): Permission configurations apply to all columns in the table.
        
    -   **Selected Columns**: Permissions apply to specific columns. This option is only available if `Select` is the only table permission granted. Available options:
        
        -   **Include Selected Columns**: Permissions are applied to these specific columns. Users can only access columns for which they have explicit permissions.
            
        -   **Exclude Selected Columns**: Permissions are not applied to these specific columns. Users can access all other columns, but not the excluded ones.
            
    
    **Note**
    
    -   **Version requirements**: For column-level permissions to enforce, your compute engine must have integrated Paimon 1.2 (1-ali-12.0) or later, such as Realtime Compute for Apache Flink Ververica Runtime (VVR) 11.1+.
        
        For assistance with other versions, join our DingTalk group (ID: 106575000021).
        
    -   **Scope**: Column-level permission management is restricted to internal Paimon tables.
        
    -   **Permission intersection rule**: If a user and their associated role both have column-level `Select` permission, DLF grants access to the intersection of their granted column sets.
        
    

### **Query permissions**

1.  In the **Database** section, click your database name.
    
2.  On the **Tables** subtab, click a table name to open the table details page.
    
3.  Select the **Permissions** tab to view principal permissions.
    

### **Revoke permissions**

1.  In the **Database** section, click your database name.
    
2.  On the **Tables** subtab, click a table name to open the table details page.
    
3.  On the **Permissions** tab, select the permissions to revoke, and click **Revoke Permissions**.

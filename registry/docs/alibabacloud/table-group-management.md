A table group is a logical grouping of tables that share the same shard count. By managing table groups, you can control how tables are distributed and grouped within a database, which directly affects data layout and query coordination. This topic describes how to view, create, and manage table groups and the tables they contain using **HoloWeb**.

## Prerequisites

-   You have connected to the **HoloWeb** developer page. For instructions, see [Connect to HoloWeb](/help/en/hologres/getting-started/connect-to-holoweb).
    
-   You are a superuser. Only superusers can view and manage all table groups.
    

## Go to the Table Group Management page

The following procedures all begin from the **Table Group Management** page. To navigate to it:

1.  In the top menu bar of the **HoloWeb** developer page, click **Diagnostics and Optimization**.
    
2.  In the left-side navigation pane, click **Table Metadata Management** > **Table Group Management**.
    

## View table groups

1.  On the **Table Group Management** tab, select an **Instance** and a **Database** to view the list of table groups.
    

The table group list displays the following columns:

**Column**

**Description**

**Table Group Name**

The name of the table group.

**Default Table Group Or Not**

Indicates whether the table group is the default table group for the database.

**Table Count**

The number of tables in the table group.

**Shard Count**

The shard count configured for the table group.

From the list, you can perform the following operations on each table group:

-   **View details**: Opens the **Management for Tables in Table Group** tab, where you can view all tables that belong to the table group. For more information, see [View tables in a table group](#6e78e22019qfz).
    
-   **Set as Default Table Group**: Sets a non-default table group as the default table group for the database.
    
-   **Delete**: Deletes the table group. You can delete a table group only if it contains no tables. Remove all tables from the table group before you attempt deletion.
    

## Create a table group

1.  On the **Table Group Management** tab, select an **Instance** and a **Database**.
    
2.  Click **Create Table Group**.
    
3.  In the dialog that appears, configure the following parameters:
    
    **Parameter**
    
    **Description**
    
    **Table Group Name**
    
    Enter a name for the table group.
    
    **Default Table Group Or Not**
    
    Specify whether to set this table group as the default table group.
    
    **Shard Count**
    
    Enter the shard count for the table group.
    
4.  Click **OK** to create the table group.
    

## View tables in a table group

1.  Click the **Management for Tables in Table Group** tab.
    
2.  Select an **Instance**, a **Database**, and a **Table Group**. Optionally, enter a **Table Name** to filter the results.
    
3.  Click **Search** to view the tables in the selected table group.
    
    The list includes all standard tables and parent partition tables in the selected table group. By default, child partition tables belong to the same table group as their parent partition tables.
    

## Related topics

-   [Table Group and Shard Count Operation Guide](/help/en/hologres/user-guide/user-guide-of-table-groups-and-shard-counts)

The Database Clone feature of Data Management (DMS) allows you to clone table schemas and table data from the source database to the destination database to back up all or specific tables. This feature is applicable to database initialization in multiple environments. For example, you can use this feature to copy the development environment to the test environment.

## Prerequisites

-   The source and destination databases are of the MySQL type.
    
-   The database instances to which the source and destination databases belong are managed in Flexible Management mode or Stable Change. For more information, see [Control modes](/help/en/dms/product-overview/control-modes#multiTask8447).
    

## Procedure

1.  Log on to the [DMS console](https://dms.aliyun.com).
    
2.  In the top navigation bar, move your pointer over **Database Development**. Choose **Environment Construction** > **Database Clone**.
    
3.  In the upper-right corner of the Database CloneTickets page, click **Database Clone**.
    
4.  On the Database Clone Tickets page, set the parameters that are described in the following table.
    
    Parameter
    
    Description
    
    **Task Name**
    
    The name of the task. Specify a descriptive name for easy identification
    
    **Source database** **(Only Support MySQL)**
    
    The source database whose data you want to clone. You can enter a keyword to search for a database and select the database from the matched results.
    
    **Note**
    
    The source database must be of the MySQL type.
    
    **Destination Database (Only Support MySQL)**
    
    The destination database to which you want to write the cloned data. You can enter a keyword to search for a database and select the database from the matched results.
    
    **Note**
    
    The destination database is of the same type as the source database.
    
    **Source Tables**
    
    The table that you want to clone from the source database. You can specify one or more tables. Valid values:
    
    -   Partial Tables: Clone the specified tables from the source database to the destination database.
        
    -   All Tables: Clone all tables from the source database to the destination database.
        
    
    **Duplicate objects**
    
    The method that is used to handle object conflicts if the destination database contains an object that has the same name as an object in the source database. For example, the object is a table. Valid values:
    
    -   **Skip duplicate name object**: Skip the object that has the name.
        
    -   **Overwrite duplicate name object (warning: the structure and data of the target object will be replaced)**: Overwrite the schema and data of the object in the destination database with those of the object in the source database.
        
    
    **Migration Objects**
    
    The other objects that you want to clone. In addition to tables, you can clone programmable objects from the source database to the destination database.
    
    Programmable objects include **View**, **Procedures**, **functions**, **triggers**, and **events**.
    
    **Time options**
    
    The time when you want to run the database cloning task.
    
    -   **Running immediately**: The task is immediately run after the ticket is approved.
        
    -   **Specified time**: The task is run at the specified point in time. After the ticket is approved, the task is run at the specified point in time.
        
    
5.  Click **Submit**.
    
6.  After the ticket is approved, the database cloning task is automatically run based on the time settings.
    

**Note**

-   On the Ticket Details page, you can view the progress of the ticket.
    
-   After the ticket is executed, you can go to the SQLConsole of the destination database to view the cloned tables.

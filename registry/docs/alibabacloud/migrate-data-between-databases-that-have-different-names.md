Data Transmission Service (DTS) supports the object name mapping feature that allows you to map the names of objects such as databases, tables, and columns when you configure a data synchronization or data migration task. This way, you can change the names of the objects that are synchronized or migrated to the destination database. You can use the object name mapping feature to synchronize or migrate data to specific databases, tables, or columns in the destination database, or create an object with the same schema as the source object but a different name in the destination database.

## Scenarios

**Scenario**

**Description**

Create an object in the destination database to receive data.

-   Data migration task: You must select **Schema Migration** for the **Migration Types** parameter, and select at least one of **Full Data Migration** and **Incremental Data Migration**.
    
-   Data synchronization task: By default, **Incremental Data Synchronization** is selected for the **Synchronization Types** parameter. You must also select **Schema Synchronization**, and select **Full Data Synchronization** based on your business requirements.
    

Specify the objects in the destination database to receive data. For example, you want to synchronize or migrate data of multiple databases or tables to a single large database or table.

You must create an object in the destination database in advance to receive data and ensure data compatibility.

-   Data migration task: You do not need to select **Schema Migration** for the **Migration Types** parameter.
    
-   Data synchronization task: You do not need to select **Schema Synchronization** for the **Synchronization Types** parameter.
    

Create an object in the destination database.

This scenario is supported only for data migration tasks. You need to select only **Schema Migration** for the **Migration Types** parameter.

## Procedure

In the **Configure Objects and Advanced Settings** step of a data synchronization or data migration task, perform object name mapping. For more information about the usage notes and procedures, see [Map object names](/help/en/dts/user-guide/map-object-names).

## FAQ

-   Am I able to use the object name mapping feature to modify the names of objects in the source database?
    
    No, you cannot use the object name mapping feature to modify the names of objects in the source database. When you use the object name mapping feature, the system uses the specified name as an object name and creates or maps the object in the destination database instance.
    
-   What is the impact of using the object name mapping feature?
    
    If you use the object name mapping feature to rename an object, other objects that depend on this object may fail to be synchronized or migrated.
    
-   Am I able to use the object name mapping feature to modify the schema of databases and tables?
    
    No, you cannot use the object name mapping feature to modify the schemas of databases or tables.

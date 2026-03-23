This topic describes how to grant data access permissions to virtual warehouses in Hologres.

## **Precautions**

-   When you create a Table Group in virtual warehouse A, virtual warehouse A is set as the default leader virtual warehouse for that Table Group.
    
-   The memory state is synchronized between virtual warehouses in real time at the millisecond level. When you write data to the leader virtual warehouse, the system automatically synchronizes the data from the leader virtual warehouse's memory to the follower virtual warehouses. This process incurs a small amount of CPU and memory overhead on the follower virtual warehouses. The configuration differences between virtual warehouses should not be significant. A difference of more than four times is not recommended.
    
-   Only the default virtual warehouse of an instance can write data to foreign tables.
    
-   In Hologres V2.0, virtual warehouses support data read and write tasks as follows:
    
    -   A virtual warehouse that has a Table Group loaded (a **follower virtual warehouse**) can perform only read tasks on tables in the Table Group. It does not support write tasks.
        
    -   A virtual warehouse set as the leader of a Table Group (a **leader virtual warehouse**) can perform read and write tasks on tables in that Table Group.
        
    -   A virtual warehouse that has not loaded a Table Group cannot read data from or write data to the corresponding Table Group.
        
-   Hologres V4.0 features an upgraded virtual warehouse instance architecture. It supports data read and write tasks as follows:
    
    -   You must enable the Grand Unified Configuration (GUC) parameter `hg_warehouse_enable_use_local_resource`. For more information, see [GUC parameters reference](/help/en/hologres/developer-reference/guc-parameters).
        
    -   You can execute read and write tasks that are not optimized by Fixed Plan without loading the Table Group into the virtual warehouse.
        
    -   For information about read and write tasks that can be optimized by Fixed Plan, see [Accelerate SQL execution with Fixed Plan](/help/en/hologres/developer-reference/accelerate-the-execution-of-sql-statements-by-using-fixed-plans).
        
    -   All write tasks, such as real-time and batch writes, can still be routed to the leader virtual warehouse for execution using the DML auto-routing feature.
        

**Task Type/virtual warehouse Type**

**Leader virtual warehouse**

**Follower virtual warehouse**  
**(Table Group loaded)**  
  

**Other virtual warehouses**  
**(Table Group not loaded)**  
  

Real-time write  
(Write task optimized by Fixed Plan)  
  

Support

Not supported

Not supported

Batch write  
(Write task not optimized by Fixed Plan)  
  

Support

Supported  
(Hologres V4.0 feature, GUC must be enabled)  
  

Supported  
(Hologres V4.0 feature, GUC must be enabled)  
  

Key/Value point query, Prefixscan  
(Read task optimized by Fixed Plan)  
  

Support

Support

Not supported

Other read tasks  
(Read task not optimized by Fixed Plan)  
  

Support

Support

Supported  
(Hologres V4.0 feature, GUC must be enabled)  
  

## **View Table Group access permissions for a virtual warehouse**

-   Command format
    
    You can use the following SQL statement to view the Table Group permissions for all virtual warehouses in the current instance.
    
    ```
    SELECT * FROM hologres.hg_warehouse_table_groups;
    ```
    
-   Description
    
    The hg\_warehouse\_table\_groups table contains the following columns:
    
    **Column**
    
    **Data Type**
    
    **Description**
    
    **Example**
    
    warehouse\_name
    
    TEXT
    
    The name of the virtual warehouse.
    
    init\_warehouse
    
    warehouse\_id
    
    INTEGER
    
    The ID of the virtual warehouse. This ID is unique.
    
    1
    
    database\_name
    
    TEXT
    
    The name of the database.
    
    wh\_demo
    
    tablegroup\_name
    
    TEXT
    
    The name of the Table Group.
    
    wh\_demo\_tg\_default
    
    leader
    
    BOOLEAN
    
    Indicates whether the virtual warehouse is the leader virtual warehouse for the Table Group.
    
    t
    
    replica\_count
    
    INTEGER
    
    The number of replicas.
    
    1
    

## **Load a Table Group into a virtual warehouse** (Set a follower virtual warehouse for a Table Group)

Loading a Table Group into a virtual warehouse makes that virtual warehouse a follower virtual warehouse for the Table Group.

-   A virtual warehouse can operate on tables in a Table Group only after that Table Group is loaded into the virtual warehouse.
    
-   To load a Table Group into a virtual warehouse, you must have Superuser permissions for the instance.
    
-   Command format:
    
    ```
    CALL hg_table_group_load_to_warehouse ('<database_name>.<table_group_name>', '<warehouse_name>', <replica_count>);
    ```
    
-   Parameters:
    
    **Parameter**
    
    **Type**
    
    **Description**
    
    database\_name
    
    TEXT
    
    The name of the database.
    
    table\_group\_name
    
    TEXT
    
    The name of the Table Group.
    
    warehouse\_name
    
    TEXT
    
    The name of the virtual warehouse into which you want to load the Table Group.
    
    replica\_count
    
    INTEGER
    
    The number of replicas. The default value is 1. This parameter is optional.
    
-   Examples:
    
    ```
    -- Load table_group_1 in the db1 database into the warehouse_1 virtual warehouse with one replica.
    CALL hg_table_group_load_to_warehouse ('db1.table_group_1', 'warehouse_1');
    -- Load table_group_1 in the db1 database into the warehouse_1 virtual warehouse with two replicas.
    CALL hg_table_group_load_to_warehouse ('db1.table_group_1', 'warehouse_1',2);
    ```
    

## **Set the leader virtual warehouse for a Table Group**

-   Precautions
    
    -   Only the leader virtual warehouse can perform DML operations, such as writing data, on tables in the Table Group.
        
    -   A Table Group can have only one leader virtual warehouse. When you change the leader virtual warehouse of a Table Group, the new leader virtual warehouse must be restarted. Be aware of the potential impact on your services.
        
    -   To set the leader virtual warehouse for a Table Group, you must have Superuser permissions for the instance.
        
-   Command format
    
    ```
    CALL hg_table_group_set_leader_warehouse ('<database_name>.<table_group_name>', '<warehouse_name>');
    ```
    
-   Parameters
    
    **Parameter**
    
    **Type**
    
    **Description**
    
    database\_name
    
    TEXT
    
    The name of the database.
    
    table\_group\_name
    
    TEXT
    
    The name of the Table Group.
    
    warehouse\_name
    
    TEXT
    
    The name of the virtual warehouse to set as the leader.
    

## **Unload a Table Group from a virtual warehouse**

-   Precautions
    
    -   To unload a Table Group from a virtual warehouse, you must have Superuser permissions for the instance.
        
    -   You cannot unload a Table Group from its leader virtual warehouse. You must first change the leader virtual warehouse.
        
-   Command format
    
    ```
    CALL hg_table_group_unload_from_warehouse ('<database_name>.<table_group_name>', '<warehouse_name>');
    ```
    
-   Parameters
    
    **Parameter**
    
    **Type**
    
    **Description**
    
    database\_name
    
    TEXT
    
    The name of the database.
    
    table\_group\_name
    
    TEXT
    
    The name of the Table Group.
    
    warehouse\_name
    
    TEXT
    
    The name of the virtual warehouse from which you want to unload the Table Group.
    

## **Change the number of replicas for a Table Group loaded in a virtual warehouse**

-   To change the number of replicas of a Table Group in a virtual warehouse, you must have Superuser permissions for the instance.
    
-   Command format
    
    ```
    CALL hg_table_group_set_warehouse_replica_count ('<database_name>.<table_group_name>', <replica_count>,'<warehouse_name>');
    ```
    
-   Parameters
    
    **Parameter**
    
    **Type**
    
    **Description**
    
    database\_name
    
    TEXT
    
    The name of the database.
    
    table\_group\_name
    
    TEXT
    
    The name of the Table Group.
    
    replica\_count
    
    INTEGER
    
    The number of replicas.
    
    warehouse\_name
    
    TEXT
    
    The name of the virtual warehouse for which you want to change the number of replicas.
    

## **DML auto-routing for virtual warehouses (Beta)**

-   Precautions
    
    A Table Group can have only one leader virtual warehouse, and only that leader virtual warehouse can perform DML operations on the Table Group. Starting with Hologres V2.2, you can automatically route DML operations to the leader virtual warehouse of the Table Group. When this feature is enabled, write tasks automatically use the resources of the leader virtual warehouse for execution. However, metrics such as queries per second (QPS) for write tasks are still recorded on the follower virtual warehouse.
    
    **Note**
    
    If you enable the multi-DML mixed transaction feature, you cannot use the DML auto-routing feature for virtual warehouses. For more information about the multi-DML mixed transaction feature, see [SQL Transaction Capabilities](/help/en/hologres/developer-reference/sql-transaction-capabilities).
    
-   Enable or disable DML auto-routing for virtual warehouses
    
    You can use the following GUC parameter to enable or disable DML auto-routing for virtual warehouses at the session or database level.
    
    **Note**
    
    The GUC parameter for DML auto-routing for virtual warehouses, `hg_experimental_enable_warehouse_dml_auto_routing`, is enabled by default.
    
    -   Session level
        
        ```
        -- Enable DML auto-routing for virtual warehouses.
        SET hg_experimental_enable_warehouse_dml_auto_routing = ON;
        
        -- Disable DML auto-routing for virtual warehouses.
        SET hg_experimental_enable_warehouse_dml_auto_routing = OFF;
        ```
        
    -   Database level
        
        ```
        -- Enable DML auto-routing for virtual warehouses.
        ALTER DATABASE <database_name> SET hg_experimental_enable_warehouse_dml_auto_routing = ON;
        
        -- Disable DML auto-routing for virtual warehouses.
        ALTER DATABASE <database_name> SET hg_experimental_enable_warehouse_dml_auto_routing = OFF;
        ```
        
        Parameters
        
        **Parameter**
        
        **Type**
        
        **Description**
        
        database\_name
        
        TEXT
        
        The name of the database.
        
    
-   Example
    
    1.  Go to the HoloWeb developer page. For more information, see [Connect to HoloWeb and run a query](/help/en/hologres/getting-started/connect-to-holoweb).
        
    2.  In the menu bar at the top of the HoloWeb developer page, click **Security Center**.
        
    3.  On the Security Center page, click **Virtual Warehouse Management** in the navigation pane on the left.
        
    4.  On the **Virtual Warehouse Resource Management** tab, click **Create Virtual Warehouse** to add a virtual warehouse named `read_wh1`.
        
        **Note**
        
        You can create up to 10 virtual warehouses for each instance. The resources for each virtual warehouse can range from a minimum of 32 CUs to a maximum of 512 CUs. If you have less than 32 CUs of unallocated compute resources, you cannot create a new virtual warehouse. To scale up your resources, see [Scale up a](/help/en/hologres/user-guide/manage-virtual-warehouses#7271c2d0f4rs3) virtual warehouse.
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4390060271/p790383.png)
        
    5.  On the **Management on Permissions of Virtual Warehouses on Table Groups** tab, click **Grant Permissions to Virtual Warehouse** to set the `read_wh1` virtual warehouse as a follower virtual warehouse for the target Table Group.
        
        **Note**
        
        For information about how to create a Table Group, see [Manage Table Groups](/help/en/hologres/user-guide/table-group-management).
        
        ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4390060271/p790400.png)
        
    6.  In the **SQL Editor**, set the current virtual warehouse to `read_wh1`. Then, run DML statements with DML auto-routing for virtual warehouses enabled and disabled.
        
        -   When DML auto-routing for virtual warehouses is enabled, the DML statement is automatically routed to the leader virtual warehouse of the Table Group (init\_warehouse) for execution.
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4390060271/p790482.png)
            
        -   When DML auto-routing for virtual warehouses is disabled, the DML statement is not routed to the leader virtual warehouse of the Table Group (init\_warehouse). Instead, it is executed by the current virtual warehouse (read\_wh1). An error occurs because only the leader virtual warehouse can perform DML operations on tables in the Table Group.
            
            ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4390060271/p790480.png)

This topic describes the system tables related to Hologres Dynamic Tables.

**Table name**

**Description**

[The hologres.hg\_dynamic\_table\_properties system table](#20f00ccbeapww)

Stores the metadata of Dynamic Tables.

[The hologres.hg\_dynamic\_table\_dependencies system table](#bb450f6b86mso)

Stores the data lineage of Dynamic Tables.

[The hologres.hg\_dynamic\_table\_refresh\_activity system table](#e882722d9ccuv)

Stores information about running Dynamic Table refresh tasks.

**Note**

This system table is not supported for Hologres instances of V3.1 and later.

[The hologres.hg\_dynamic\_table\_refresh\_history system table](#498772f5e35xc)

Stores the history of Dynamic Table refresh tasks.

## The `hologres.hg_dynamic_table_properties` system table

The `hologres.hg_dynamic_table_properties` system table stores the metadata of Dynamic Tables. The following table describes its fields.

**Field**

**Description**

dynamic\_table\_namespace

The schema where the Dynamic Table resides.

dynamic\_table\_name

The name of the Dynamic Table.

property\_key and property\_value

The properties and property values of the Dynamic Table. The properties are described as follows:

-   General properties:
    
    -   execution\_mode: The refresh mode. Valid values:
        
        -   full: full refresh.
            
        -   incremental: incremental refresh.
            
        -   none: No refresh mode is set.
            
    -   task\_definition: The query definition of the Dynamic Table.
        
    -   auto\_refresh\_enable: Specifies whether to enable auto-refresh. Valid values:
        
        -   true: enabled.
            
        -   false: Cancel.
            
    -   task\_definition\_search\_path: The schema of the query.
        
    -   state\_time\_to\_live\_in\_seconds: The lifecycle of data in the state table.
        

-   Parameters for incremental refresh:
    
    -   incremental\_auto\_refresh\_schd\_start\_time: The start time of the refresh. Valid values:
        
        -   immediate: The refresh starts immediately after the table is created.
            
        -   A custom time: A specific time value, such as 2024-08-27 15:00:00.
            
    -   incremental\_auto\_refresh\_interval: The refresh interval. The value ranges from 1 minute to 48 hours.
        
    -   incremental\_guc\_hg\_computing\_resource: The computing resource for the refresh. The value is serverless, which indicates that serverless computing resources are used for the refresh.
        
    -   incremental\_guc\_hg\_experimental\_serverless\_computing\_required\_cores: The specifications of computing resources for incremental refresh.
        
    -   incremental\_state\_table\_group: The table group where the state table resides in incremental refresh mode.
        
    -   incremental\_plan: The execution plan for incremental refresh.
        
-   Parameters for full refresh:
    
    -   full\_auto\_refresh\_schd\_start\_time: The start time of the refresh. Valid values:
        
        -   immediate: The refresh starts immediately after the table is created.
            
        -   A custom time: A specific time value, such as 2024-08-27 15:00:00.
            
    -   full\_auto\_refresh\_interval: The refresh interval. The value ranges from 1 minute to 48 hours.
        
    -   full\_guc\_hg\_computing\_resource: The computing resource used. Valid values:
        
        -   local: The resources of the current instance are used.
            
        -   serverless: Serverless resources are used. For more information about serverless resources, see [Serverless Computing](/help/en/hologres/user-guide/serverless-computing/).
            
    -   full\_guc\_hg\_experimental\_serverless\_computing\_required\_cores: The specifications of computing resources for full refresh.
        

## The `hologres.hg_dynamic_table_dependencies` system table

The `hologres.hg_dynamic_table_dependencies` system table stores the data lineage of Dynamic Tables. The following table describes its fields. Note the following points:

-   A Dynamic Table can correspond to multiple base tables. Therefore, multiple records may exist.
    
-   A state table is also considered a base table of a Dynamic Table. By default, it is placed in the `hologres_streaming_mv` system schema. You can ignore it in practice.
    
-   You can use system tables such as pg\_class to further differentiate the base tables of a Dynamic Table.
    

**Field**

**Description**

table\_namespace

The schema where the base table resides.

table\_name

The name of the base table.

dynamic\_table\_namespace

The schema where the Dynamic Table resides.

dynamic\_table\_name

The name of the Dynamic Table.

dependency

The type of the base table. Valid values:

-   base\_table: standard table.
    
-   base\_dimension\_table: dimension table.
    
-   internal\_table: internal table. You can ignore this value in practice.
    

## The `hologres.hg_dynamic_table_refresh_activity` system table

**Note**

This system table is not supported in Hologres instances of V3.1 and later.

The `hologres.hg_dynamic_table_refresh_activity` system table records currently running Dynamic Table refresh tasks. The following table describes its fields:

**Field**

**Description**

pid

The process ID of the Dynamic Table refresh task.

You can use the PID to cancel a running refresh task. For more information, see [Cancel a refresh task](/help/en/hologres/user-guide/maintain-dynamic-table-update-tasks#fb6cafd54a2fj).

datname

The database where the Dynamic Table resides.

query\_id

The query ID of the Dynamic Table refresh task.

usename

The user who performs the Dynamic Table refresh.

query

The refresh query.

refresh\_mode

The refresh mode of the Dynamic Table. Valid values:

-   full: full refresh.
    
-   incremental: incremental refresh.
    
-   none: No refresh mode is set.
    

refresh\_start

The start time of the refresh task.

duration

The running time of the refresh task.

serverless\_queue\_time\_ms

The queuing time for the refresh task to use serverless resources.

**Note**

This field is displayed only for refreshes that are performed using Serverless Computing resources.

serverless\_resource\_used\_time\_ms

The time that the refresh task uses serverless resources.

**Note**

This field is displayed only for refreshes that are performed using Serverless Computing resources.

serverless\_allocated\_cores

The specifications of the serverless resources used by the refresh task.

**Note**

This field is displayed only for refreshes that are performed using Serverless Computing resources.

serverless\_allocated\_workers

The number of serverless workers used by the refresh task.

**Note**

This field is displayed only for refreshes that are performed using Serverless Computing resources.

table\_write

The Dynamic Table on which the refresh task is performed.

**Note**

This field is displayed only for refreshes that are performed using Serverless Computing resources.

## The `hologres.hg_dynamic_table_refresh_history` system table

The `hologres.hg_dynamic_table_refresh_history` system table stores the historical data of Dynamic Table refresh tasks. By default, the data is retained for one month. The following table describes its fields.

**Field**

**Description**

datname

The name of the database where the Dynamic Table resides.

schema\_name

The schema where the Dynamic Table resides.

dynamic\_table\_name

The name of the Dynamic Table.

query\_id

The query ID of the refresh.

You can use the query ID to go to [Get query insights](/help/en/hologres/user-guide/query-insights) to view more detailed query information.

refresh\_start

The start time of the refresh.

refresh\_end

The end time of the refresh.

duration

The duration of the refresh.

refresh\_latency

The data latency when the refresh was completed.

refresh\_mode

The refresh mode of the Dynamic Table. Valid values:

-   full: full refresh.
    
-   incremental: incremental refresh.
    
-   none: No refresh mode is set.
    

status

The status of the refresh. Valid values:

-   SUCCESS: Success.
    
-   FAILED: The task failed.
    

queue\_time\_ms

The queuing time to request serverless resources.

**Note**

This field is displayed only for refreshes that are performed using Serverless Computing resources.

serverless\_allocated\_cores

The amount of serverless resources used, in CUs.

**Note**

This field is displayed only for refreshes that are performed using Serverless Computing resources.

serverless\_allocated\_workers

The number of serverless workers used.

**Note**

This field is displayed only for refreshes that are performed using Serverless Computing resources.

serverless\_resource\_used\_time\_ms

The actual time that serverless resources were used to execute the query, in milliseconds. This does not include the queuing time for resources.

**Note**

This field is displayed only for refreshes that are performed using Serverless Computing resources.

## References

For more information about how to use these system tables, see the following topics:

-   [O&M for Dynamic Table refresh tasks](/help/en/hologres/user-guide/maintain-dynamic-table-update-tasks)
    
-   [View the schema and data lineage of a Dynamic Table](/help/en/hologres/user-guide/view-the-dynamic-table-structure-and-blood-relationship)

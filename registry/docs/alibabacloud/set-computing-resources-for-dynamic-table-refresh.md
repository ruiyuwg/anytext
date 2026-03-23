This topic describes the refresh resources for a Hologres dynamic table.

## Syntax

In Hologres, you can specify the refresh resources for a dynamic table using the \`computing\_resource\` parameter. The syntax for setting this parameter varies based on the Hologres version.

#### **Parameter description**

**Parameter**

**Required**

**Description**

**Example**

computing\_resource

No

The resource type for refreshing the Dynamic Table:

-   `local`: The resources of the current instance. If the instance is a general-purpose instance, \`local\` represents the instance's resources. These resources are shared with other queries and do not provide resource isolation between queries. Resource contention may occur during peak business hours.
    
-   `serverless`: A remote, fully managed Serverless Computing resource pool. You do not need to reserve computing resources with defined specifications. The engine automatically determines the resources required for the refresh based on the query. This enables query-level resource isolation and elastic scaling. For more information, see [Serverless Computing Overview](/help/en/hologres/user-guide/overview-of-serverless-computing).
    
-   `warehouse_name`: If the instance is a virtual warehouse instance, you can specify any warehouse to perform the refresh. This provides warehouse-level resource isolation. For more information, see [Quickstart](/help/en/hologres/user-guide/getting-started-with-virtual-warehouses).
    
    **Note**
    
    Only Hologres V4.0.7 or later supports the parameter value `warehouse_name`.
    

Set the resource type to serverless: `computing_resource='serverless'`

#### **SQL syntax**

**Important**

The SQL syntax for setting dynamic table refresh resources described here is for Hologres V4.0.7 and later. For the syntax in versions V4.0.1 to V4.0.6, V3.2, V3.1, and V3.0, see [Auto-refresh resources](#4662f5ad4bo5w).

-   The following SQL syntax sets the refresh resources when you create a table:
    

```
-- The syntax in this example is for Hologres V4.0.7 and later.
-- Specify refresh resources when creating the table.
CREATE [EXTERNAL] DYNAMIC TABLE [ IF NOT EXISTS ] [<schema_name>.]<table_name>
  [ (<col_name> [, ...] ) ]
  [LOGICAL PARTITION BY LIST(<partition_key>)]
  WITH (
  -- Properties of the dynamic table.
  freshness = '<num> {minutes | hours}', -- Required.
  [computing_resource = {'local' | 'serverless' | '<warehouse_name>'},] -- Optional.
  )
  AS
  <query>; -- Definition of the query.
```

-   The following SQL syntax sets the refresh resources when you manually refresh a table:
    

```
-- The syntax in this example is for Hologres V4.0.7 and later.
-- Specify refresh resources during a manual refresh.
refresh dynamic table [<schema_name>.]<table_name> with(computing_resource='local' | 'serverless' |  '<warehouse_name>',]);
```

## Notes

-   If you set \`computing\_resource\` to a \`warehouse\_name\` when creating a dynamic table and then delete the virtual warehouse instance, the refresh operation will fail.
    
-   If you set \`computing\_resource\` to a \`warehouse\_name\` when creating a dynamic table and then rename the warehouse, the refresh operation continues to run normally. The new warehouse name appears in the Data Definition Language (DDL).
    
-   If you set \`computing\_resource\` to \`serverless\`, but the query definition of the dynamic table does not meet the conditions for Serverless execution, the following behavior occurs:
    
    -   The refresh automatically falls back to using \`local\` resources.
        
        -   For a virtual warehouse instance, \`local\` resources refer to the leader warehouse of the table group (TG) where the dynamic table resides. For an external dynamic table, \`local\` resources refer to the default warehouse of the instance.
            
        -   For a non-virtual warehouse instance, \`local\` resources refer to the reserved resources of the instance.
            
    -   When you view the DDL using \`hg\_dump\_script\`, the \`computing\_resource\` value is still \`serverless\`. If the query meets the conditions for serverless execution, the refresh operation will then use serverless resources. To determine the resources used for each refresh, check the slow query log.
        

## Refresh resource methods

Hologres provides two methods for refreshing dynamic table resources: auto-refresh and manual refresh. The default behavior for these methods varies by version.

### Auto-refresh resources

The following sections describe the syntax and default behavior for setting refresh resources when you create a table in different versions.

## V4.0.7 and later

The SQL syntax is as follows:

```
-- Specify refresh resources when creating the table.
CREATE [EXTERNAL] DYNAMIC TABLE [ IF NOT EXISTS ] [<schema_name>.]<table_name>
  [ (<col_name> [, ...] ) ]
  [LOGICAL PARTITION BY LIST(<partition_key>)]
  WITH (
  -- Properties of the dynamic table.
  freshness = '<num> {minutes | hours}', -- Required.
  [computing_resource = {'local' | 'serverless' | '<warehouse_name>'},] -- Optional.
  )
  AS
  <query>; -- Definition of the query.
```

The default behavior for refresh resources is as follows:

**Table class**

**Refresh pattern**

**Refresh resource**

**Non-virtual warehouse instance**

**Virtual warehouse instance**

Dynamic Table

Incremental refresh & full refresh

-   Uses Serverless resources by default.
    
-   You can specify \`local\` resources of the instance.
    

-   Uses Serverless resources by default.
    
-   **You can specify a \`warehouse\_name\`**. The specified warehouse is then used for the refresh.
    
-   If you specify \`local\` resources without explicitly setting a \`warehouse\_name\`, **the system uses the warehouse of the current connection for the refresh by default.**
    

External Dynamic Table

Incremental refresh & full refresh

-   Uses Serverless resources by default.
    
-   You can specify \`local\` resources of the instance.
    

-   Uses Serverless resources by default.
    
-   **You can specify a \`warehouse\_name\`**. The specified warehouse is then used for the refresh.
    
-   If you specify \`local\` resources without explicitly setting a \`warehouse\_name\`, **the system uses the warehouse of the current connection for the refresh by default.**
    

## V4.0.1 to V4.0.6

The SQL syntax is as follows:

```
-- Specify refresh resources when creating the table.
CREATE [EXTERNAL] DYNAMIC TABLE [ IF NOT EXISTS ] [<schema_name>.]<table_name>
  [ (<col_name> [, ...] ) ]
  [LOGICAL PARTITION BY LIST(<partition_key>)]
  WITH (
  -- Properties of the dynamic table.
  freshness = '<num> {minutes | hours}', -- Required.
  [computing_resource = {'local' | 'serverless' },] -- Optional.
  )
  AS
  <query>; -- Definition of the query.
```

The default behavior for refresh resources is as follows:

**Table class**

**Refresh pattern**

**Refresh resource**

**Non-virtual warehouse instance**

**Virtual warehouse instance**

Dynamic Table

Incremental refresh & full refresh

-   Uses Serverless resources by default.
    
-   You can specify \`local\` resources of the instance.
    

-   Uses Serverless resources by default.
    
-   You can specify \`local\` resources. When the refresh is performed, the resources used are the leader warehouse of the base table's TG and the leader warehouse of the Dynamic Table's TG. **Multiple warehouses may be used.**
    
-   **Specifying a \`warehouse\_name\` is not supported.**
    

External Dynamic Table

Incremental refresh & full refresh

-   Uses Serverless resources by default.
    
-   You can specify \`local\` resources of the instance.
    

-   Uses Serverless resources by default.
    
-   You can specify \`local\` resources. When the refresh is performed, the resources used are the leader warehouse of the default table group in the DB where the External Dynamic Table was created.
    
-   **Specifying a \`warehouse\_name\` is not supported.**
    

## V3.1 to V3.2

The SQL syntax is as follows:

```
-- Specify refresh resources when creating the table.
CREATE [EXTERNAL] DYNAMIC TABLE [ IF NOT EXISTS ] [<schema_name>.]<table_name>
  [ (<col_name> [, ...] ) ]
  [LOGICAL PARTITION BY LIST(<partition_key>)]
  WITH (
  -- Properties of the dynamic table.
  freshness = '<num> {minutes | hours}', -- Required.
  [computing_resource = {'local' | 'serverless' },] -- Optional.
  )
  AS
  <query>; -- Definition of the query.
```

The default behavior for refresh resources is as follows:

**Table class**

**Refresh pattern**

**Refresh resource**

**Non-virtual warehouse instance**

**Virtual warehouse instance**

Dynamic Table

Incremental refresh & full refresh

-   Uses Serverless resources by default.
    
-   You can specify \`local\` resources of the instance.
    

-   Uses Serverless resources by default.
    
-   You can specify \`local\` resources. When the refresh is performed, the resources used are the leader warehouse of the base table's TG and the leader warehouse of the Dynamic Table's TG. **Multiple warehouses may be used.**
    
-   **Specifying a \`warehouse\_name\` is not supported.**
    

## V3.0

The SQL syntax is as follows:

```
CREATE DYNAMIC TABLE [IF NOT EXISTS] <schema.tablename>(
[col_name],
[col_name]
  ) [PARTITION BY LIST (col_name)]
WITH (
      [refresh_mode='[full|incremental]',]
      [incremental_auto_refresh_schd_start_time='[immediate|<timestamptz>]',]
      [incremental_auto_refresh_interval='[<num> {minute|minutes|hour|hours]',] 
      [incremental_guc_hg_computing_resource='[ local | serverless]',]
      [full_guc_hg_computing_resource='[ local | serverless]',]
) 
AS
<query> --Definition of the query
```

The default behavior for refresh resources is as follows:

**Table class**

**Refresh pattern**

**Refresh resource**

**Non-virtual warehouse instance**

**Virtual warehouse instance**

Dynamic Table

Incremental refresh & full refresh

-   Uses \`local\` resources by default.
    
-   You can specify \`serverless\` resources.
    

-   Uses \`local\` resources by default. When the refresh is performed, the resources used are the leader warehouse of the Dynamic Table's TG.
    
-   You can specify \`serverless\` resources.
    
-   Specifying a \`warehouse\_name\` is not supported.
    

### Manual refresh resources

The following sections describe the syntax and default behavior for manual resource refreshes in different versions.

## V4.0.7 and later

The SQL syntax is as follows:

```
--Specify refresh resources during a manual refresh.
refresh dynamic table [<schema_name>.]<table_name> with(computing_resource='local' | 'serverless' |  '<warehouse_name>',]);
```

**Note**

-   When you perform a manual refresh without explicitly setting the \`computing\_resource\` parameter, the refresh operation uses the \`computing\_resource\` value from the table's DDL by default.
    
-   If you perform a manual refresh and explicitly set the \`computing\_resource\` parameter, the operation uses that value, even if it differs from the \`computing\_resource\` value in the table's DDL.
    
-   For virtual warehouse-based instances, you can set one of three values: `local | serverless | warehouse_name` , where local specifies the warehouse for the current connection.
    
-   For non-virtual warehouse instances, only two values are allowed: `local | serverless`, where \`local\` specifies the resources of the current instance.
    

## V4.0.1 to V4.0.6

The SQL syntax is as follows:

```
refresh dynamic table [<schema_name>.]<table_name> with([computing_resource='local' | 'serverless' ,]);
```

**Note**

-   For virtual warehouse instances, you can set the parameter to \`local\` or \`serverless\`. The \`local\` resources refer to the leader warehouse of the base table's TG and the leader warehouse of the dynamic table's TG. **Multiple warehouses may be used.**
    
-   For non-virtual warehouse instances, you can only set the parameter to \`local\` or \`serverless\`. \`local\` refers to the resources of the current instance.
    

## V3.1 to V3.2

The SQL syntax is as follows:

```
refresh dynamic table [<schema_name>.]<table_name> with([computing_resource='local' | 'serverless' ,]);
```

**Note**

-   For virtual warehouse instances, you can set the parameter to \`local\` or \`serverless\`. The \`local\` resources refer to the leader warehouse of the base table's TG and the leader warehouse of the dynamic table's TG. **Multiple warehouses may be used.**
    
-   For non-virtual warehouse instances, you can only set the parameter to \`local\` or \`serverless\`. \`local\` refers to the resources of the current instance.
    

## V3.0

The SQL syntax is as follows:

```
refresh dynamic table [<schema_name>.]<table_name> with(
       [incremental_guc_hg_computing_resource='[ local | serverless]',]
      [full_guc_hg_computing_resource='[ local | serverless]',]);
```

**Note**

-   For virtual warehouse instances, you can set the parameter to \`local\` or \`serverless\`. **The \`local\` resources refer to the leader warehouse of the dynamic table's TG.**
    
-   For non-virtual warehouse instances, you can only set the parameter to \`local\` or \`serverless\`. \`local\` refers to the resources of the current instance.
    

## Upgrade notes

The following tables detail how upgrading a Hologres instance affects dynamic tables in auto-refresh and manual refresh scenarios. Changes include the default refresh resource, such as from `Local` to `Serverless`, and the rules for specifying resources. The core difference lies in the behavior of tables created using new versus old syntax. Use these tables to understand the potential impact of an upgrade and ensure a smooth business transition.

-   ### **Auto-refresh resource upgrades**
    
    **Source version**
    
    **Target version**
    
    **Table type**
    
    **Refresh mode**
    
    **Refresh resource**
    
    **Non-virtual warehouse instances**
    
    **Virtual warehouse instances**
    
    3.0
    
    -   3.1
        
    -   3.2
        
    -   4.0.1-4.0.6
        
    
    Dynamic Table
    
    Incremental & full refresh
    
    New tables (using the new syntax):
    
    -   The default resource changes from Local to Serverless.
        
    -   You can set the refresh resource to Local.
        
    
    Legacy table (3.0 syntax):
    
    -   The default resource remains Local.
        
    -   You can change the refresh resource to Serverless.
        
    
    New tables (using the new syntax):
    
    -   The default resource changes from Local to Serverless.
        
    -   You can set the refresh resource to Local. The refresh is then executed by the leader warehouse of the table group (TG) for the base table and the leader warehouse of the TG for the dynamic table. **This process might involve multiple warehouses**.
        
    
    Legacy table (uses the old 3.0 syntax):
    
    -   The default resource remains Local. By default, the refresh is executed by the leader warehouse of the dynamic table's TG. Specifying a warehouse\_name is not supported.
        
    -   You can change the refresh resource to Serverless.
        
    -   **After an old table's syntax is updated to the new syntax**, if you use the local resource, the executing warehouse changes. It changes from the leader warehouse of the dynamic table's TG to both the leader warehouse of the base table's TG and the leader warehouse of the dynamic table's TG. **This process might involve multiple warehouses**.
        
    
    3.0
    
    4.0.7 and later
    
    Dynamic Table
    
    Incremental & full refresh
    
    New tables (using the new syntax):
    
    -   The default resource changes from Local to Serverless.
        
    -   You can set the refresh resource to Local.
        
    
    Old tables (using the V3.0 syntax):
    
    -   The default resource remains Local.
        
    -   You can change the refresh resource to Serverless.
        
    
    New tables (using the new syntax):
    
    -   The default resource changes from Local to Serverless.
        
    -   You can specify a warehouse\_name to execute the refresh.
        
    -   If you set the refresh resource to Local but do not explicitly specify a warehouse\_name, **the system uses the warehouse that was connected when the Dynamic Table was created to execute the refresh by default.**
        
    
    Legacy table (using legacy 3.0 syntax):
    
    -   The default resource remains Local. By default, the refresh is executed by the leader warehouse of the dynamic table's TG. Specifying a warehouse\_name is not supported.
        
    -   You can change the refresh resource to Serverless.
        
    -   **After an old table's syntax is updated to the new syntax, if you use the local resource, the executing warehouse remains the leader warehouse of the Dynamic Table's TG.**
        
    
    -   3.1
        
    -   3.2
        
    -   4.0.1-4.0.6
        
    
    4.0.7 and later
    
    Dynamic Table
    
    Incremental & full refresh
    
    New tables (using the new syntax):
    
    -   The default resource remains Serverless.
        
    -   You can set the refresh resource to Local.
        
    
    Table that uses the legacy 3.0 syntax:
    
    -   The default resource remains Local.
        
    -   You can change the refresh resource to Serverless.
        
    
    New tables (using the new syntax):
    
    -   The default resource remains Serverless.
        
    -   You can specify a warehouse\_name to execute the refresh.
        
    -   If you set the refresh resource to Local but do not explicitly specify a warehouse\_name, **the system uses the currently connected warehouse to execute the refresh by default.**
        
    
    Table that uses the old 3.0 syntax:
    
    -   The default resource remains Local. By default, the refresh is executed by the leader warehouse of the Dynamic Table's TG. Specifying a warehouse\_name is not supported.
        
    -   You can change the refresh resource to Serverless.
        
    -   **After an old table's syntax is updated to the new syntax**, if you use the local resource, the executing warehouse **changes from both the leader warehouse of the base table's TG and the leader warehouse of the Dynamic Table's TG to the leader warehouse of the Dynamic Table's TG.**
        
    
    4.0.1-4.0.6
    
    4.0.7 and later
    
    External Dynamic Table
    
    Incremental & full refresh
    
    New tables (using the new syntax):
    
    -   The default resource is Serverless.
        
    -   You can set the refresh resource to Local.
        
    
    New tables (using the new syntax):
    
    -   The default resource remains Serverless.
        
    -   You can specify a warehouse\_name to execute the refresh.
        
    -   If you set the refresh resource to Local but do not explicitly specify a warehouse\_name, **the system uses the currently connected warehouse to execute the refresh by default.**
        
    
    Old tables (created in versions 4.0.1-4.0.6):
    
    -   The default resource remains Serverless.
        
    -   **If you set the refresh resource to local, the system uses the instance's Default Warehouse by default.**
        
    

-   ### **Manual refresh resource upgrades**
    
    **Source version**
    
    **Target version**
    
    **Table type**
    
    **Refresh mode**
    
    **Refresh resource**
    
    **Non-virtual warehouse instances**
    
    **Virtual warehouse instances**
    
    3.0
    
    -   3.1
        
    -   3.2
        
    -   4.0.1-4.0.6
        
    
    Dynamic Table
    
    Incremental & full refresh
    
    -   If no refresh resource is specified, the resource set in the table's Data Definition Language (DDL) is used by default.
        
    -   You can explicitly specify the refresh resource as serverless or local.
        
    -   Explicitly specified refresh resources take precedence.
        
    
      
    
    -   If no refresh resource is specified, the resource set in the table's DDL is used by default.
        
    -   You can explicitly specify the refresh resource as serverless or local.
        
    -   **For tables created with the new syntax**: The Local resource **changes from the leader warehouse of the Dynamic Table's TG to both the leader warehouse of the base table's TG and the leader warehouse of the Dynamic Table's TG. This process might involve multiple warehouses.**
        
    -   **For tables still using the old syntax (V3.0 syntax): The Local resource represents the leader warehouse of the Dynamic Table's TG.**
        
    -   Explicitly specified refresh resources take precedence.
        
    
    3.0
    
    4.0.7 and later
    
    Dynamic Table
    
    Incremental & full refresh
    
    -   If no refresh resource is specified, the resource set in the table's DDL is used by default.
        
    -   You can explicitly specify the refresh resource as serverless or local.
        
    -   Explicitly specified refresh resources take precedence.
        
    
    -   If no refresh resource is specified, the resource set in the table's DDL is used by default.
        
    -   You can explicitly specify the refresh resource as serverless, local, or a warehouse\_name.
        
    -   **For tables created with the new syntax:** The Local resource changes from the leader warehouse of the Dynamic Table's TG to the **currently connected warehouse.**
        
    -   **For tables still using the old syntax (V3.0 syntax): The Local resource represents the leader warehouse of the Dynamic Table's TG.**
        
    -   Explicitly specified refresh resources take precedence.
        
    
    -   3.1
        
    -   3.2
        
    -   4.0.1-4.0.6
        
    
    4.0.7 and later
    
    Dynamic Table
    
    Incremental & full refresh
    
    -   If no refresh resource is specified, the resource set in the table's DDL is used by default.
        
    -   You can explicitly specify the refresh resource as serverless or local.
        
    -   Explicitly specified refresh resources take precedence.
        
    
    -   If no refresh resource is specified, the resource set in the table's DDL is used by default.
        
    -   You can explicitly specify the refresh resource as serverless, local, or a warehouse\_name.
        
    -   **For tables created with the new syntax:** The Local resource changes from **both the leader warehouse of the base table's TG and the leader warehouse of the Dynamic Table's TG** to the currently **connected warehouse.**
        
    -   **For tables still using the old syntax (V3.0 syntax): The Local resource represents the leader warehouse of the Dynamic Table's TG.**
        
    -   Explicitly specified refresh resources take precedence.
        
    
    4.0.1-4.0.6
    
    4.0.7 and later
    
    External Dynamic Table
    
    Incremental & full refresh
    
    -   If no refresh resource is specified, the resource set in the table's DDL is used by default.
        
    -   You can explicitly specify the refresh resource as serverless or local.
        
    -   Explicitly specified refresh resources take precedence.
        
    
    -   If no refresh resource is specified, the resource set in the table's DDL is used by default.
        
    -   Explicitly specify the refresh resource as serverless, local, or a warehouse\_name.
        
    -   **The Local resource represents the currently connected warehouse.**
        
    -   Explicitly specified refresh resources take precedence.

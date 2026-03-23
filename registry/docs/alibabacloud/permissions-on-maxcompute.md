When Hologres queries MaxCompute data through a foreign table, it uses the RAM user's MaxCompute credentials. If that RAM user lacks the required permissions on the MaxCompute project, Hologres returns a permission error. Most errors on this page share the same root cause: the RAM user has not been granted the required privilege on the MaxCompute project or table.

## Errors when querying MaxCompute data

### `odps:Select` denied when querying a MaxCompute table

```
You have NO privilege 'odps:Select' on <project_name>.<table_name>
```

The RAM user does not have the SELECT privilege on the MaxCompute table. Ask the MaxCompute project administrator to grant the RAM user SELECT access. For details, see [MaxCompute permissions](/help/en/maxcompute/user-guide/permissions#concept-bcx-q25-ngb).

* * *

### `odps:Select` denied when querying across MaxCompute projects

```
You have NO privilege 'odps:Select' on <project_name>.<table_name>
```

This error appears when your RAM user accesses a table in Project 2 from a query running in Project 1, and the RAM user was granted access to Project 2 through package-based authorization rather than direct project membership.

Add the following `SET` statement before your SQL query in Hologres. Choose the statement that matches your Hologres instance version.

For Hologres V0.7:

```
SET seahawks.seahawks_internal_current_odps_project = 'holoprojectname';
```

For Hologres V0.8:

```
SET hg_experimental_odps_current_project_name = 'holoprojectname';
```

Replace `holoprojectname` with the name of the MaxCompute project that contains the table you want to query.

* * *

### Column-level security label mismatch

```
The sensitive label of column '<column_name>' is 2, but your effective label is 0
```

The RAM user has access to the table but not to all columns. MaxCompute column-level security restricts access to columns whose sensitivity label exceeds the RAM user's effective label.

Use one of the following approaches:

1.  Ask the MaxCompute administrator to grant the RAM user access to all required columns. For details, see [MaxCompute permissions](/help/en/maxcompute/user-guide/maxcompute-permissions#concept-ubm-4yz-vdb).
    
2.  Add the following parameters before your query statement:
    
    > **Note:** This option requires Hologres V0.8 or later. To upgrade your instance, contact [Hologres technical support](/help/en/hologres/support/obtain-online-support-for-hologres).
    
    ```
       SET hg_experimental_enable_odps_executor = on;
       SET hg_experimental_enable_query_master = on;
    ```
    

* * *

## Errors when creating a foreign table

### `odps:List` denied when creating a foreign table

```
You have NO privilege 'odps:List' on <project_name>
```

The RAM user does not have the LIST privilege on the MaxCompute project. HoloWeb and HoloStudio require this privilege to browse and select tables when creating a foreign table through the console.

Use one of the following approaches:

1.  Ask the MaxCompute administrator to grant the RAM user the LIST privilege on the project. For details, see [MaxCompute permissions](/help/en/maxcompute/user-guide/maxcompute-permissions#concept-ubm-4yz-vdb).
    
2.  Create the foreign table using a SQL statement instead of the console. This bypasses the LIST requirement. For details, see [Create a foreign table to accelerate MaxCompute data queries](/help/en/hologres/user-guide/accelerate-maxcompute-data-querying-based-on-foreign-table#task-1950070).
    

* * *

### IP address not in the MaxCompute project allowlist

```
Access denied by project ip white list: sourceIP:'<source_ip>' is not in white list. project: <project_name>
```

The MaxCompute project has an IP allowlist configured, and the HoloWeb IP address is not included. Even with valid credentials, all requests from unlisted IP addresses are denied.

Add the IP address shown in the error message to the MaxCompute project's IP allowlist. For details, see Set IP address whitelists.

* * *

### RAM user not a member of the MaxCompute project

```
You don't exist in project <project_name>
```

First, verify that the MaxCompute project name in your foreign table definition is spelled correctly. If the project name is wrong, update it to the correct one.

If the project name is correct but the error persists, the RAM user has not been added to that MaxCompute project. Ask the MaxCompute administrator to add the RAM user. For details, see [Permissions](/help/en/maxcompute/user-guide/permissions#concept-bcx-q25-ngb).

* * *

## What's next

-   [MaxCompute permissions overview](/help/en/maxcompute/user-guide/maxcompute-permissions#concept-ubm-4yz-vdb)
    
-   [Create a foreign table to accelerate MaxCompute data queries](/help/en/hologres/user-guide/accelerate-maxcompute-data-querying-based-on-foreign-table#task-1950070)
    
-   [Get support for Hologres](/help/en/hologres/support/obtain-online-support-for-hologres)

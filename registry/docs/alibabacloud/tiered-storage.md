MaxCompute supports three storage tiers: Standard, Infrequent Access (IA), and Archive. By default, data is stored in the Standard tier. Based on data access frequency, you can set the storage tier of specific tables or partitions to IA or Archive to implement tiered storage for hot and cold data and reduce data storage costs.

## **Storage tiers**

**Storage tier**

**Description**

Standard

The default storage tier. This tier is suitable for scenarios where data is frequently accessed and requires frequent read and write operations.

IA

Suitable for data that is not frequently accessed. This can effectively reduce storage costs.

**Note**

-   Data in the IA and Archive storage tiers cannot be directly accessed by Hologres. When Hologres directly reads data from MaxCompute, the \`last\_access\_time\` of the tables or partitions in MaxCompute is not updated. Therefore, if you configure a lifecycle rule for tiered storage based on the \`last\_access\_time\` condition, some tables or partitions that are continuously read only by Hologres may also hit the rule.
    
-   If a large volume of data is accessed or data is accessed frequently, the incurred fees may be higher than the fees for the Standard storage tier. For example:
    
    -   The cost of accessing all data in a table or partition in the IA storage tier once a month is equal to the storage cost of the data in the Standard storage tier.
        
    -   The cost of accessing all data in a table or partition in the Archive storage tier once every six months is equal to the storage cost of the data in the Standard storage tier.
        

Archive

## **Tiered storage billing**

-   For more information about storage billing, see [Storage fees](/help/en/maxcompute/product-overview/storage-fee#undefined).
    
-   If a table or partition is set to the IA or Archive storage tier, consider the data volume and access frequency. If a large volume of data is accessed or data is accessed frequently, the fees incurred may be higher than the fees for the Standard storage tier.
    
    -   The cost of accessing all data in a table or partition in the IA storage tier once a month is equal to the storage cost of the data in the Standard storage tier.
        
    -   The cost of accessing all data in a table or partition in the Archive storage tier once every six months is equal to the storage cost of the data in the Standard storage tier.
        
-   Log on to [Expenses and Costs](https://usercenter2-intl.console.alibabacloud.com/billing/#/account/overview). On the **Billing** > **Bill Details** page, you can view the costs for different storage classes. The billable items for Standard storage, IA storage, and Archive storage are named Storage, Tiered Storage-IA, and Long-term Storage, respectively. For more information, see [View bill details](/help/en/maxcompute/product-overview/view-billing-details).
    

## **Usage notes**

-   **Region restrictions**: China (Hangzhou), China (Shanghai), China (Beijing), China (Zhangjiakou), China (Ulanqab), China (Shenzhen), China (Chengdu), China (Hong Kong), China East 2 Finance, China North 2 Finance, China South 1 Finance, Singapore, Malaysia (Kuala Lumpur), Indonesia (Jakarta), Japan (Tokyo), Germany (Frankfurt), and US (Silicon Valley).
    
-   Data in the IA and Archive storage tiers **cannot be directly accessed by Hologres**. When Hologres directly reads data from MaxCompute, the \`last\_access\_time\` of the tables or partitions in MaxCompute is not updated. Therefore, if you configure a lifecycle rule for tiered storage based on the `last_access_time` condition, some tables or partitions that are continuously read only by Hologres may also match the rule.
    

## **Set a storage tier**

You can convert data between storage tiers. Modifying the storage tier does not affect data access.

This section describes storage class conversion.

**Conversion**

**Description**

Standard to IA

Supports manual and automatic conversion. No I/O access fees are incurred. The last data update time and last data access time of the table or partition are not updated.

Standard to Archive

IA to Archive

Supports manual and automatic conversion. Manual conversion incurs I/O access fees, but automatic conversion does not. The last data update time and last data access time of the table or partition are not updated.

IA to Standard

Supports only manual conversion. I/O access fees are incurred. The last data update time and last data access time of the table or partition are updated.

Archive to IA

Archive to Standard

### **Manual custom settings**

You can manually set the storage tier of a non-partitioned table or a partition to IA or Archive. The setting takes effect immediately.

#### **Syntax**

```
ALTER TABLE <TABLE_NAME> [PARTITION(<PARTITION_SPEC>)]
        SET <TBLPROPERTIES|PARTITIONPROPERTIES>("storagetier"="standard|lowfrequency|longterm");
```

#### **Parameter**

-   **TABLE\_NAME**: Required. The name of the table or the partitioned table whose storage tier you want to modify.
    
-   **PARTITION\_SPEC**: Required when you modify the storage tier of a partition.
    
-   **TBLPROPERTIES|PARTITIONPROPERTIES**: Modifies the storage tier of a table or partition. Valid values:
    
    -   **TBLPROPERTIES**: Modifies the storage tier of a table.
        
    -   **PARTITIONPROPERTIES**: Modifies the storage tier of a partition.
        
-   **storagetier**: Required. The storage tier. Valid values:
    
    -   **standard**: Standard storage. Only storage fees are charged.
        
    -   **lowfrequency**: IA storage. Storage fees and data access fees for IA storage are charged.
        
    -   **longterm**: Archive storage. Storage fees and data access fees for Archive storage are charged.
        

**Note**

For a partitioned table, you can set a storage tier only for its partitions, not for the table itself.

#### **Examples**

-   Example 1: Set the storage tier of a non-partitioned table to IA.
    
    ```
    ALTER TABLE tablename
            SET TBLPROPERTIES("storagetier"="lowfrequency");
    ```
    
    View the table properties. You can check the current storage tier in the `StorageTier` field.
    
    ```
    --View table properties.
    DESC extended tablename;  
    
    ---The following result is returned:
    +-------------------------------------------------------------------+
    | Owner:                    ALIYUN$mofan_****@test.aliyunid.com      |
    | Project:                  mf_mc_****                                |
    | TableComment:                                                     |
    +-------------------------------------------------------------------+
    | CreateTime:               2021-11-18 15:14:00                     |
    | LastDDLTime:              2023-09-11 14:34:55                     |
    | LastModifiedTime:         2023-09-13 15:02:28                     |
    | LastAccessTime:           2023-09-14 10:50:57                     |
    +-------------------------------------------------------------------+
    | InternalTable: YES      | Size: 1923683131                        |
    +-------------------------------------------------------------------+
    | Native Columns:                                                   |
    +-------------------------------------------------------------------+
    | Field| Type| Label |ExtendedLabel| Nullable| DefaultValue|Comment |
    +-------------------------------------------------------------------+
    | empno    | bigint |       |               | true     | NULL  |    |
    | ename    | string |       |               | true     | NULL  |    |
    | job      | string |       |               | true     | NULL  |    |
    | mgr      | bigint |       |               | true     | NULL  |    |
    | hiredate | datetime |     |               | true     | NULL  |    |
    | sal      | bigint |       |               | true     | NULL  |    |
    | comm     | bigint |       |               | true     | NULL  |    |
    | deptno   | bigint |       |               | true     | NULL  |    |
    +-------------------------------------------------------------------+
    | Extended Info:                                                    |
    +-------------------------------------------------------------------+
    | TableID:                  8e0cc78c81ab4ad7af30bff7a8e****         |
    | IsArchived:               false                                   |
    | PhysicalSize:             5771049393                              |
    | FileNum:                  3                                       |
    | StoredAs:                 AliOrc                                  |
    | CompressionStrategy:      normal                                  |
    | odps.timemachine.retention.days: 1                                |
    | ColdStorageStatus:        N/A                                     |
    | encryption_enable:        false                                   |
    | StorageTier:              lowfrequency                            |
    | StorageTierLastModifiedTime:  2023-09-11 14:34:55                 |
    +-------------------------------------------------------------------+
    ```
    
-   Example 2: Set the storage tier of the specified partition in the [bank\_data\_pt](/help/en/maxcompute/getting-started/create-tables-1#section-gwe-8vc-iwx) partitioned table to IA.
    
    ```
    ALTER TABLE bank_data_pt  PARTITION (credit='yes') SET PARTITIONPROPERTIES ("storagetier" = 'lowfrequency');
    ```
    
    View the partition properties. You can check the current storage tier in the `StorageTier` field.
    
    ```
    --View partition properties.
    DESC extended bank_data_pt PARTITION(credit='yes');  
    
    --The following result is returned:
    +------------------------------------------------------------------------------------+
    | PartitionSize: 0                                                                   |
    +------------------------------------------------------------------------------------+
    | CreateTime:               2024-05-10 10:28:16                                      |
    | LastDDLTime:              2024-05-10 10:31:01                                      |
    | LastModifiedTime:         2024-05-10 10:28:16                                      |
    +------------------------------------------------------------------------------------+
    | IsExstore:                false                                                    |
    | IsArchived:               false                                                    |
    | PhysicalSize:             0                                                        |
    | FileNum:                  0                                                        |
    | ColdStorageStatus:        N/A                                                      |
    | StorageTier:              LowFrequency                                             |
    | StorageTierLastModifiedTime:  2024-05-10 10:31:01                                  |
    +------------------------------------------------------------------------------------+
    ```
    

### **Automatically set using lifecycle rules**

You can configure lifecycle rules for tiered storage at the **project** or **partitioned table** level. The system automatically converts storage tiers based on these rules.

-   Project-level settings:
    
    After configuration, this rule serves as the default rule for all non-partitioned tables in the project and for partitions in partitioned tables that do not have specific rules defined. These tables and partitions are automatically converted to the corresponding storage tier.
    
-   Partitioned table-level settings:
    
    After a specific rule is set for a partitioned table, it takes precedence over the project-level rule. If all partitions in the table match the rule, the **partitions** are automatically converted to the corresponding storage tier.
    

#### **Important restrictions**

Rules cannot be configured at a finer granularity:

-   You cannot set an independent rule for a single non-partitioned table. It inherits the project rule.
    
-   You cannot set an independent rule for a specific partition within a partitioned table. It inherits the rule of its parent partitioned table.
    

#### **Rule execution**

-   If a table or partition matches both the Archive storage (\`longterm\`) rule and the IA storage (\`lowfrequency\`) rule, it is converted to `longterm` by preference.
    
-   If a table or partition's lifecycle first matches the `lowfrequency` rule, it is converted to the `lowfrequency` tier. If it later matches the `longterm` rule, it is converted to the `longterm` tier. No **access fees** are charged for the `lowfrequency` tier during the conversion from `lowfrequency` to `longterm`. For billing details, see [Tiered storage billing](#194292407d2gw).
    
-   The platform scans the rules twice a day. Therefore, the conversion may not be performed immediately after the conditions are matched and a delay may occur.
    

#### **Syntax**

-   Set a lifecycle rule at the project level
    
    ```
    SETPROJECT odps.table.lifecycle.config=<lifecycle_config_json_string>;
    ```
    
    You can also configure the rules in the MaxCompute console as follows:
    
    1.  Log on to the [MaxCompute console](https://maxcompute.console.alibabacloud.com/), and select a region in the upper-left corner.
        
    2.  In the navigation pane on the left, choose **Manage Configurations** > **Projects**.
        
    3.  On the **Projects** page, find the target project and click **Manage** in the **Actions** column.
        
    4.  On the **Project Settings** page, you can select the **Parameter Configuration** tab.
        
    5.  In the **Lifecycle Configuration** section, click **Edit**.
        
    6.  Configure the **Last Access Configuration Policy** and **Last Modified Configuration Policy** parameters.
        
        -   **Last Access Configuration Policy**: corresponds to the `DaysAfterLastAccessGreaterThan` parameter.
            
        -   **Last Modified Configuration Policy**: corresponds to the `DaysAfterLastModificationGreaterThan` parameter.
            
    
-   Set a lifecycle rule for a partitioned table
    
    -   Set the rule when you create a partitioned table:
        
        ```
        CREATE [EXTERNAL] TABLE [IF NOT EXISTS] <table_name>
         [PRIMARY KEY (<pk_col_name>, <pk_col_name2>),(<col_name> <data_type> [NOT NULL] [DEFAULT <default_value>] [comment <col_comment>], ...)]
         PARTITIONED BY (<col_name> <data_type> [comment <col_comment>], ...)
        tblproperties ('lifecycle_config' = '<lifecycle_config_json_string>')
        ;
        ```
        
    -   Modify the rule for a partitioned table:
        
        ```
        ALTER TABLE <TABLE_NAME> SET TBLPROPERTIES ('lifecycle_config' = '<lifecycle_config_json_string>');
        ```
        
-   View the lifecycle rule configuration for tiered storage of a partitioned table
    
    ```
    SHOW CREATE TABLE <table_name>;
    ```
    

#### **Parameter**

The following table describes the main parameters. For more information, see [General parameters](/help/en/maxcompute/table-operations-1#li-s4j-l41-vtj).

**lifecycle\_config\_json\_string**:

-   A lifecycle rule set at the project level is defined as follows.
    
    ```
    {
      "TierToLowFrequency": {
        "DaysAfterLastModificationGreaterThan": <days>, // The number of days after the last modification.
        "DaysAfterLastAccessGreaterThan": <days>, // The number of days after the last access.
      },
      "TierToLongterm": {
        "DaysAfterLastModificationGreaterThan": <days>,
        "DaysAfterLastAccessGreaterThan": <days>
      }
      // Each condition is optional. Multiple conditions have an OR relationship.
    }
    ```
    
-   The following code shows the definition of a lifecycle rule for a partitioned table.
    
    ```
    {
      \"TierToLowFrequency\": {
        \"DaysAfterLastModificationGreaterThan\": <days>, // The number of days after the last modification.
        \"DaysAfterLastAccessGreaterThan\": <days>, // The number of days after the last access.
      },
      \"TierToLongterm\": {
        \"DaysAfterLastModificationGreaterThan\": <days>,
        \"DaysAfterLastAccessGreaterThan\": <days>
      }
      // Each condition is optional. Multiple conditions have an OR relationship.
    }
    ```
    
-   **TierToLowFrequency**: The identifier for the IA storage tier.
    
-   **TierToLongterm**: The identifier for the Archive storage tier.
    
-   **DaysAfterLastModificationGreaterThan**: The number of days after the last data modification time to trigger the automatic conversion. This value corresponds to the \`LastModifiedTime\` of the table or partition.
    
-   **DaysAfterLastAccessGreaterThan**: The number of days after the last data access time to trigger the automatic conversion. If the \`LastAccessTime\` of the table or partition is empty:
    
    -   For tables or partitions created before October 1, 2023, the time is calculated based on `2023-10-01 00:00:00` in the UTC+0 time zone by default.
        
    -   For tables or partitions created on or after October 1, 2023, if the data has not been accessed, the time is calculated based on the CreateTime.
        

#### **Examples**

-   Example 1: Set a lifecycle rule at the project level.
    
    ```
    setproject odps.table.lifecycle.config={"TierToLongterm":{"DaysAfterLastAccessGreaterThan":180},"TierToLowFrequency":{"DaysAfterLastAccessGreaterThan":120}};
    ```
    
-   Example 2: Cancel the lifecycle configuration at the project level.
    
    ```
    setproject odps.table.lifecycle.config=;
    ```
    
-   Example 3: Set a lifecycle rule for a partitioned table.
    
    ```
    --Set the rule when you create a partitioned table.
    CREATE TABLE lifecycle_part_t (key string) 
    PARTITIONED BY (ds  STRING)
    tblproperties ('lifecycle_config' = '{\"TierToLowFrequency\": {\"DaysAfterLastModificationGreaterThan\": 2,\"DaysAfterLastAccessGreaterThan\": 2},\"TierToLongterm\": {\"DaysAfterLastModificationGreaterThan\": 4,\"DaysAfterLastAccessGreaterThan\": 7}}')
    ;
    --Modify the rule for a partitioned table.
    ALTER TABLE lifecycle_part_t SET tblproperties ('lifecycle_config'='{\"TierToLowFrequency\": {\"DaysAfterLastModificationGreaterThan\": 90,\"DaysAfterLastAccessGreaterThan\": 30},\"TierToLongterm\": {\"DaysAfterLastModificationGreaterThan\": 180,\"DaysAfterLastAccessGreaterThan\": 7}}');
    ```
    
-   Example 4: Cancel the lifecycle configuration for tiered storage of a partitioned table.
    
    ```
    ALTER TABLE lifecycle_part_t SET tblproperties ('lifecycle_config'='{}');
    ```
    

## Configure access permissions for tiered storage data

Accessing data in the IA or Archive storage tier incurs access fees. You can use the GET\_PARTITION\_META function with [row-level access control](/help/en/maxcompute/user-guide/row-level-access-control) to manage access permissions for data in the IA or Archive storage tiers and effectively control access.

### **GET\_PARTITION\_META**

**Note**

GET\_PARTITION\_META is a special function that can be used only with row-level access control. It cannot be used in regular SQL queries.

#### **Syntax**

```
struct GET_PARTITION_META(<tableName>, <pt_col1>, <pt_col2>, ..., <pt_col_n>);
```

#### **Parameter**

**Parameter**

**Description**

tableName

The name of the table. The table must be a partitioned table. The value is of the String type. The name can be in the `project.table` or `project.schema.table` format.

pt\_col

Each parameter from pt\_col1 to pt\_col\_n corresponds to a partition level of the partitioned table. Each parameter must be a column reference.

#### **Return value**

Returns a Struct value of the type `struct<storagetier:string>`. The struct contains a single String field that describes the storage tier of the corresponding partition.

### **Precautions**

-   When you add a row-level rule to a table, consider the access behavior of other users. If other users have accessed the table, set explicit rules for them to prevent unexpected access denial and data filtering issues. For more information, see [Row-level access control](/help/en/maxcompute/user-guide/row-level-access-control).
    
-   By default, MaxCompute tables can be accessed not only through SQL but also by external engines, such as Spark and Flink, that read table data. However, the GET\_PARTITION\_META function is currently supported only by the MaxCompute SQL engine. Therefore, if the GET\_PARTITION\_META function is used in row-level access control, the table can be read only through the MaxCompute SQL engine. Other engines cannot access the table.
    
-   To access data, you must have data access permissions, specifically the SELECT permission on the data, in addition to satisfying the row-level permission requirements.
    
-   Filter conditions in GET\_PARTITION\_META result in different partition pruning effects depending on the scenario.
    
    -   The filter conditions involve only the partition fields of a partitioned table. For example, you can allow access to the Standard storage tier and require that the value of the first-level partition is `2024`.
        
        ```
        GET_PARTITION_META('storage_table', pt1, pt2).storagetier == 'standard') AND pt1='2024'
        ```
        
        When you use SQL to access `storage_table`, if the WHERE clause does not contain a partition condition, the system supports partition pruning to prevent a full table scan. Only partitions in `storage_table` that match the requirements are accessed.
        
    -   The filter condition contains the value of a non-partition field, and the AND operator is used to connect the two filter conditions. For example, you can allow access to the Standard storage tier and use the **AND** operator with the non-partition value `a>100`.
        
        ```
        GET_PARTITION_META('storage_table', pt1, pt2).storagetier == 'standard') AND a > 100
        ```
        
        When you use SQL to access `storage_table`, if the WHERE clause does not contain a partition condition, partition pruning is still supported. Only partitions stored in the `standard` tier are accessed.
        
    -   The filter condition contains the value of a non-partition field, and the OR operator is used to connect the two filter conditions. For example, you can allow access to the Standard storage tier and use the **OR** operator with the non-partition value `a>100`.
        
        ```
        get_partition_meta('storage_table', pt1, pt2).storagetier == 'standard') OR a > 100
        ```
        
        When you use SQL to access `storage_table`, two scenarios may occur:
        
        -   If the WHERE clause does not contain a partition condition, all partitions are accessed to scan for data that matches the `a>100` condition.
            
        -   If the WHERE clause contains a partition condition, only data in the corresponding partition that matches the `standard` or `a>100` condition is scanned.
            

### **Examples**

Define the partitioned table `storage_table`.

```
CREATE TABLE storage_table(a BIGINT, b BIGINT) PARTITIONED BY (pt1 STRING, pt2 STRING);
```

-   Example 1:
    
    Grant the `policy01` permission to the default user to access Standard storage data in `storage_table`. All users, including the project owner, cannot access IA or Archive storage data, and null values are returned for these requests.
    
    ```
    CREATE ROW ACCESS POLICY policy01 
    ON storage_table 
    TO DEFAULT 
    FILTER USING (get_partition_meta('storage_table', pt1, pt2).storagetier == 'standard');
    ```
    
    If the following keywords appear in the Summary section of Logview, row-level filtering is triggered.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/0884296571/p994177.png)
    
-   Example 2:
    
    Grant the `policy02` permission to the user `user_x` to access IA and Archive storage data in `storage_table`.
    
    ```
    CREATE ROW ACCESS POLICY policy02 
    ON storage_table 
    TO USER (user_x)  --You can also grant permissions to a role using TO role rolename and then grant the role to the user.
    FILTER USING (get_partition_meta('storage_table', pt1, pt2).storagetier IN ('lowfrequency','longterm'));
    ```
    
    Two scenarios may occur:
    
    -   If the table already has the `policy01` permission, all users except \`user\_x\` can access Standard storage data in `storage_table` but cannot access IA or Archive storage data. Null values are returned for the inaccessible data. The user \`user\_x\` can access IA and Archive storage data in `storage_table` but cannot access Standard storage data. A null value is returned for this inaccessible data.
        
    -   If the `policy01` permission is not configured for the table, all users except \`user\_x\` are denied access to any storage data in `storage_table`, which results in null return values. Only \`user\_x\` is granted access to IA and Archive storage data but is denied access to Standard storage data, which also results in null values.
        
-   Example 3:
    
    Grant the `policy03` permission to user `user_y` to access all data in `storage_table`.
    
    ```
    CREATE ROW ACCESS POLICY policy03 
    ON storage_table 
    TO USER (user_y)  -- You can also grant permissions to a role using the TO role rolename clause and then grant the role to the user.
    FILTER USING (true);  -- The constant true indicates that all data in the table can be accessed
    ```
    
    Two possible scenarios:
    
    -   If the table has the `policy01` permission, all users except \`user\_y\` can access the Standard storage data in `storage_table`. They cannot access IA or Archive storage data, and a null value is returned for such requests. User `user_y` can access data from all storage classes in `storage_table`.
        
    -   If the table does not have the `policy01` permission, all users except \`user\_y\` cannot access any data in `storage_table`, and a null value is returned. Only user `user_y` can access data of all storage classes in `storage_table`.

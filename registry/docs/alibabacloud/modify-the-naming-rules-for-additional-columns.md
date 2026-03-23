Data Transmission Service (DTS) adds additional columns to the tables that are synchronized to DataHub and MaxCompute. These additional columns are used to manage metadata, sort data, and remove duplicates. If the names of additional columns are the same as the names of existing columns in the destination table, data synchronization fails. To avoid this issue, we recommend that you modify the naming rules for additional columns.

## Background information

Before you modify the naming rules for additional columns, check whether the names of the additional columns are the same as those of existing columns in the destination table. The following table lists the previous and new naming rules for additional columns.

**Important** If you use the previous naming rules for additional columns, DTS automatically adds the `dts_` prefix to the original columns that are synchronized from the source database in the destination database. If you use the new naming rules for additional columns, DTS does not add prefixes to the original columns that are synchronized from the source database in the destination database.

Table 1. Naming rules for additional columns

Destination instance

Previous additional column name

New additional column name

Reference

DataHub

-   dts\_record\_id
-   dts\_instance\_id
-   dts\_db\_name
-   dts\_table\_name
-   dts\_operation\_flag
-   dts\_utc\_timestamp
-   dts\_before\_flag
-   dts\_after\_flag

-   new\_dts\_sync\_dts\_record\_id
-   new\_dts\_sync\_dts\_instance\_id
-   new\_dts\_sync\_dts\_db\_name
-   new\_dts\_sync\_dts\_table\_name
-   new\_dts\_sync\_dts\_operation\_flag
-   new\_dts\_sync\_dts\_utc\_timestamp
-   new\_dts\_sync\_dts\_before\_flag
-   new\_dts\_sync\_dts\_after\_flag

[Schema of a DataHub topic](/help/en/dts/user-guide/synchronize-data-from-an-apsaradb-rds-for-mysql-instance-to-a-datahub-project#section-jzv-vhj-d1e)

MaxCompute

-   record\_id
-   operation\_flag
-   utc\_timestamp
-   before\_flag
-   after\_flag
-   modifytime\_year
-   modifytime\_month
-   modifytime\_day
-   modifytime\_hour
-   modifytime\_minute

-   new\_dts\_sync\_record\_id
-   new\_dts\_sync\_operation\_flag
-   new\_dts\_sync\_utc\_timestamp
-   new\_dts\_sync\_before\_flag
-   new\_dts\_sync\_after\_flag
-   new\_dts\_sync\_modifytime\_year
-   new\_dts\_sync\_modifytime\_month
-   new\_dts\_sync\_modifytime\_day
-   new\_dts\_sync\_modifytime\_hour
-   new\_dts\_sync\_modifytime\_minute

[Schema of an incremental data table](/help/en/dts/user-guide/synchronize-data-from-an-apsaradb-rds-for-mysql-instance-to-a-maxcompute-project#section-5kn-hla-atd)

## Procedure

1.  Create and configure a data synchronization task. For more information, see Steps 1 to 7 in [Configure a data synchronization task](/help/en/dts/getting-started/configure-a-data-synchronization-task-1#concept-266093).
2.  In the Select Object to Be Synchronized step, specify Whether to enable new additional column rules.
    
    ![Modify the naming rules for additional columns](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1700398951/p65393.png)
    
    Section
    
    Description
    
    Yes
    
    If you select Yes, the new naming rules for additional columns are used.
    
    **Note** If the previous names of additional columns are the same as the names of existing columns in the destination table, select Yes.
    
    DTS adds the `new_dts_sync_` prefix to the previous names of additional columns.
    
    For example, if the previous name of an additional column is `record_id`, the new name of the additional column is `new_dts_sync_record_id`.
    
    No
    
    If you select No, the previous naming rules for additional columns are used.
    
    **Note** For more information about the naming rules for additional columns, see [Naming rules for additional columns](#table-zyo-yb6-p5y).
    
3.  Configure other parameters that are required for the data synchronization task.

## References

-   [Overview of data synchronization scenarios](/help/en/dts/user-guide/data-synchronization-scenarios#concept-1732301)
-   [Overview of data synchronization scenarios](/help/en/dts/data-synchronization-scenarios-1#concept-2313406)

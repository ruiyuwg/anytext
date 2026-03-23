To continuously optimize user experience, Alibaba Cloud no longer provides and supports ApsaraDB RDS for MySQL instances that run the X-Engine storage engine.

## End-of-sale plan

Starting November 1, 2024 (UTC+8), RDS instances that run the X-Engine storage engine are no longer available for purchase.

Starting April 30, 2025 (UTC+8), existing RDS instances that run the X-Engine storage engine are no longer supported.

## **Impacts and suggestions**

### **Impacts**

-   If you are using or plan to create an RDS instance that runs the X-Engine storage engine, take note of the following items:
    
    -   Starting November 1, 2024 (UTC+8), you can no longer create and renew RDS instances that run the X-Engine storage engine. ApsaraDB RDS for MySQL no longer supports feature iteration for RDS instances that run the X-Engine storage engine.
        
    -   You can still use existing RDS instances that run the X-Engine storage engine and related features as expected before April 30, 2025 (UTC+8).
        
    -   Starting April 30, 2025 (UTC+8), you can no longer use the database restoration feature for existing RDS instances that run the X-Engine storage engine. The database restoration feature is formerly known as instance cloning. For more information, see [Restoration](/help/en/rds/apsaradb-rds-for-mysql/restoration-1/). In this case, if you continue to use existing RDS instances that run the X-Engine storage engine, you are responsible for potential risks and consequences. Alibaba Cloud no longer provides technical support and service for existing RDS instances that run the X-Engine storage engine. Technical support and service include but are not limited to document services and after-sales tickets.
        

### **Suggestions**

To ensure business continuity, we recommend that you use the following transition solutions before April 30, 2025:

-   Change the storage engine of your RDS instance from X-Engine to InnoDB. For more information, see [Change the storage engine of an RDS instance from X-Engine to InnoDB](#8fa7a3659cpsi).
    
-   Enable the storage compression feature for your RDS instance that runs the X-Engine storage engine. For more information, see [Enable the storage compression feature](/help/en/rds/apsaradb-rds-for-mysql/storage-compression#375f41283agm4).
    

## **Solutions**

### **Solution 1: Change the storage engine of an RDS instance from X-Engine to InnoDB**

You can execute the `ALTER TABLE` statement to change the storage engine of your RDS instance from X-Engine to InnoDB. However, if you directly execute the statement, DML operations may be blocked during the entire execution. In addition, a long period of time is required to migrate large tables, which adversely affects your workloads. We recommend that you use the lock-free schema change feature of Alibaba Cloud Data Management (DMS) to change the storage engine of your RDS instance from X-Engine to InnoDB. This way, DML operations are not blocked, and the storage engine of the RDS instance is smoothly changed. For more information, see [What is DMS?](/help/en/dms/getting-started/solutions-for-r-and-d-processes/)

```
ALTER TABLE table_name ENGINE=InnoDB;
```

**Important**

-   You are charged when you use the lock-free schema change feature of Alibaba Cloud DMS. For more information, see [Lock-free schema changes](/help/en/dms/getting-started/change-schemas-without-locking-tables).
    
-   After you change the storage engine of an RDS instance from X-Engine to InnoDB, data bloat occurs because the X-Engine storage engine supports efficient data compression but the InnoDB storage engine does not support data compression. After the change, twice the original storage capacity is required. If the storage capacity of the RDS instance is exhausted by the bloated data, adverse events such as instance locking occur. To prevent the events, make sure that the automatic storage expansion feature is enabled. For more information, see [Use the automatic storage expansion feature](/help/en/rds/apsaradb-rds-for-mysql/use-the-automatic-storage-expansion-feature-for-an-apsaradb-rds-for-mysql-instance).
    
-   After you change the storage engine of an RDS instance from X-Engine to InnoDB, CPU utilization decreases but IOPS increases when the same amount of data is read. This is because the InnoDB storage engine does not support data compression. In this case, the required disk seek time during data reads increases and more disk sectors must be accessed. This causes frequent I/O operations and higher IOPS.
    

### **Solution 2:** Enable the storage compression feature

If your RDS instance runs the X-Engine storage engine, you must enable the storage compression feature. ApsaraDB RDS for MySQL provides the storage compression feature that you can use to compress your data at the storage layer. This reduces the unit storage cost. For more information, see [Enable the storage compression feature](/help/en/rds/apsaradb-rds-for-mysql/storage-compression#375f41283agm4).

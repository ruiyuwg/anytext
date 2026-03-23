This topic describes the Logical Replication Slot Failover feature of ApsaraDB RDS for PostgreSQL. If the primary ApsaraDB RDS for PostgreSQL instance of your database system fails, this feature can synchronize all logical replication slots to the secondary RDS instance.

## Prerequisites

The RDS instance runs PostgreSQL 10 or later. If the Logical Replication Slot Failover feature is still not supported, you must update the minor engine version of the RDS instance. For more information, see [Update the minor engine version](/help/en/rds/apsaradb-rds-for-postgresql/update-the-minor-engine-version-of-an-apsaradb-rds-for-postgresql-instance#concept-gnx-vgj-wdb11).

## Background information

The logical replication slots that are created in the primary RDS instance are not synchronized to the secondary RDS instance in compliance with the streaming replication protocol. In the event of a primary/secondary switchover, the logical replication slots are lost, and consequently the logical subscriptions are interrupted. The Logical Replication Slot Failover feature can synchronize all logical replication slots from the primary RDS instance to the secondary RDS instance.

**Note**

-   The Logical Replication Slot Failover feature is enabled for ApsaraDB RDS for PostgreSQL instances by default. Failovers are supported for logical replication slots. However, failovers are not supported for physical replication slots.
    
-   For more information, see [Logical Decoding Concepts](https://www.postgresql.org/docs/13/logicaldecoding-explanation.html#id-1.8.14.8.2).
    

## View the status of the Logical Replication Slot Failover feature

You can execute the following SQL statement to check whether the Logical Replication Slot Failover feature is enabled:

```
SHOW rds_failover_slot_mode;
```

The following result is returned:

```
 rds_failover_slot_mode
------------------------
 async
(One row of records)
```

One of the following results can be returned:

-   **async**: The Logical Replication Slot Failover feature is enabled.
    
-   **off**: The Logical Replication Slot Failover feature is supported but is disabled.
    
-   **ERROR: unrecognized configuration parameter "rds\_failover\_slot\_mode"**: The Logical Replication Slot Failover feature is not supported. Make sure that the major engine version and the minor engine version that you use meet the requirements described in the Prerequisites section. If the major engine version or the minor engine version that you use does not meet the requirements described in the Prerequisites section, you must perform an upgrade or update. For more information, see [Upgrade the major engine version](/help/en/rds/apsaradb-rds-for-postgresql/upgrade-the-major-engine-version-of-an-apsaradb-rds-for-postgresql-instance/#task-2039768) and [Update the minor engine version](/help/en/rds/apsaradb-rds-for-postgresql/update-the-minor-engine-version-of-an-apsaradb-rds-for-postgresql-instance#concept-gnx-vgj-wdb11).

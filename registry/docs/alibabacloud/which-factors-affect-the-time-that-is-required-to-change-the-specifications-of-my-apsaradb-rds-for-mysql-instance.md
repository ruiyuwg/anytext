When you change the specifications of your ApsaraDB RDS for MySQL instance, you can estimate the time required based on the factors that are described in this topic. The specifications include the RDS edition, instance type, and storage capacity.

**Important**

The time required varies based on several factors. We recommend that you change the specifications when only a small amount of data is written to your RDS instance. Alternatively, we recommend that you stop writing data to your RDS instance before you change the specifications.

If your RDS instance uses Premium Local SSDs, a specification change may trigger a data migration from your original RDS instance to a new RDS instance. In this case, the specification change requires a long period of time. The following table describes the crucial factors that affect the time required.

**Note**

During the data migration process, ApsaraDB RDS backs up the data of your original RDS instance and restores the data to a new RDS instance.

**Storage type**

**Cross-instance data migration required**

**Factor**

**Description**

Premium Local SSDs

Yes

The size of full data

The size of full data affects the time required for the data migration. The time required for the data migration is also affected by the backup speed and the network bandwidth.

The size of redo logs

If the size of redo logs is large, more data needs to be backed up than indicated by the estimated amount. In this case, a long period of time is required to restore the data to the new RDS instance.

Locks

When ApsaraDB RDS backs up the data of your original RDS instance during the data migration process, the related objects are locked. This affects the backup speed.

The number of tables

\-

The size of incremental data

After the full data is migrated to the new RDS instance, ApsaraDB RDS also needs to migrate the incremental data that is generated during the data migration process. This affects the time required for the specification change.

The speed to write incremental data

The speed to write incremental data is affected by several factors. The factors include the speed to replay the logged SQL statements, whether the logged SQL statements are executed on individual tables, and whether data definition languages (DDL) statements are executed on your original RDS instance.

Data synchronization latency

Before the incremental data is written to the new RDS instance, you must establish a synchronization link between the new RDS instance and your original RDS instance. ApsaraDB RDS switches your workloads over from your original RDS instance to the new RDS instance only after the data synchronization is complete. The time required for the specification change is affected by the data synchronization latency. The latency is further affected by several factors. The factors include the write loads on your original RDS instance, whether DDL statements are executed on your original RDS instance, and whether joint queries are run on multiple tables.

No

\-

If your RDS instance uses Premium Local SSDs and no cross-instance data migration is required, the specification change requires a short period of time. In this case, you do not need to consider the previous factors.

Cloud disks

No

\-

If your RDS instance uses cloud disks, you do not need to migrate the data of your original RDS instance to a new RDS instance. The specification change requires a short period of time. In this case, you do not need to consider the previous factors.

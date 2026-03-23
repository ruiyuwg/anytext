This topic describes the reasons and procedure for migrating the metadata of an E-MapReduce (EMR) cluster from the metadatabase of the cluster to Data Lake Formation (DLF).

## Reasons for metadata migration

In 2020, Alibaba Cloud EMR launched a new storage type DLF Unified Metadata to provide users with a better unified metadata service. Some users still use the Built-in MySQL or Unified Metabases storage type to store Hive metadata in the production environment. The Built-in MySQL and Unified Metabases storage types are provided in the old EMR console. We strongly recommend that you migrate the metadata of your cluster to DLF at the earliest opportunity due to the following causes:

-   An on-premises MySQL database is deployed in standalone mode, which cannot ensure high service availability and is prone to service interruption.
-   The Unified Metabases storage type will be gradually discontinued in the future. You need to use the DLF Unified Metadata storage type that is provided in the new EMR console to store metadata.

**Note** If your cluster uses an ApsaraDB RDS database to store metadata, you can also migrate the metadata to DLF to achieve better storage performance and scalability.

DLF provides an O&M-free, highly available, and high-performance unified metadata service. The metadata service is compatible with multiple versions of a Hive metastore, can be seamlessly integrated with open source compute engines in EMR, and supports data profiling. In addition, DLF also provides features such as data exploration, data lake management, and data permission management, and can be seamlessly integrated with other Alibaba Cloud computing services, such as MaxCompute, Databricks DataInsight (DDI), and Hologres. This allows you to use DLF in a wide range of computing scenarios. For more information about DLF, see [Overview](/help/en/dlf/dlf-1-0/product-overview/overview-1#topic-1948699).

## Migration process

The Alibaba Cloud EMR and DLF teams provide a comprehensive migration process and technical support in the entire migration process to ensure fast and smooth data migration.

Phase

Operation

Participant

Estimated duration

1\. Preparations

1.  Search for the DingTalk group number 33719678 in DingTalk to join the group for EMR metadata migration.
    
    Then, engineers will conduct a survey of your cluster configurations and actual resource usage to determine the feasibility and the schedule of metadata migration.
    

Alibaba Cloud EMR team and customers

2 hours

2\. Migration

1.  Suspend the tasks that are running on your cluster and stop the metadata service.
2.  Back up existing metadata.
3.  Use the metadata migration feature to migrate metadata to DLF and check whether the migration operation is performed as expected.
4.  Change the value of the Type parameter that you configured when you create your cluster to DLF Unified Metadata.
5.  Recover the tasks that are suspended.

Alibaba Cloud EMR team and customers

30 minutes

3\. Check

Observe the running of the tasks for one week or a longer period of time and view the results.

-   If the tasks are run as expected, the migration is successful.
-   If an issue occurs, identify the cause of the issue and determine whether to fix the issue online or perform rollback based on actual situations.
    
    For more information about rollback, see [Phase 4](#entry-RollBACK).
    

Alibaba Cloud EMR team and customers

1 week

(Optional) 4. Rollback

1.  Suspend the tasks that are running on your cluster.
2.  Compare metadata between DLF and a Hive metastore and write incremental data back to the Hive metastore.
3.  Change the value of the Type parameter that you configured when you create your cluster to Unified Metabases.
4.  Start the Hive metastore.
5.  Recover the tasks that are suspended and check the results of the tasks.

Alibaba Cloud EMR team and customers

30 minutes

## Contact technical support

The Alibaba Cloud EMR and DLF teams provide a comprehensive migration process and technical support in the entire migration process. If you want to migrate EMR metadata to DLF, join the DingTalk group for migration by searching for the DingTalk group number 33719678. Then, engineers will contact you to formulate a migration plan.

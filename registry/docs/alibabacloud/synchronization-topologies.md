The data synchronization feature supports multiple types of synchronization topologies. You can plan your data synchronization instances based on your business requirements. This topic describes the synchronization topologies that are supported by Data Transmission Service (DTS) and how to use these topologies.

## One-way synchronization

To ensure data consistency for one-way synchronization, we recommend that you perform only read operations on the objects in the destination instance. Do not perform write operations on the objects.

**Topology type**

**Topology**

**Description**

One-way one-to-one synchronization

![一对一单向同步](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2108539951/p51087.png)

None

One-way one-to-many synchronization

![一对多单向同步](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2108539951/p51088.png)

You must purchase multiple data synchronization instances to implement one-way one-to-many synchronization.

For example, if you want to synchronize data from Instance A to Instance B, Instance C, and Instance D, you must purchase three data synchronization instances.

One-way cascade synchronization

![级联单向同步](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2108539951/p51089.png)

You must purchase multiple data synchronization instances to implement one-way cascade synchronization.

For example, if you want to synchronize data from Instance A to Instance B and then from Instance B to Instance C, you must purchase two data synchronization instances.

One-way many-to-one synchronization

![多对一单向同步](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/2108539951/p51090.png)

You must purchase multiple data synchronization instances to implement one-way many-to-one synchronization.

For example, if you want to synchronize data from Instance B, Instance C, and Instance D to Instance A, you must purchase three data synchronization instances.

**Note**

In specific scenarios, such as multi-table merging, if you perform change operations on multiple data records of different objects in the source instance and you want to synchronize the data records to the same data row in the destination instance, DTS concurrently performs the change operations on the destination instance. This may cause data inconsistency.

## Two-way synchronization

The following table describes the supported database instances for two-way data synchronization.

**Note**

-   If the **Database Type** is **MongoDB** or **Tair/Redis**, DTS supports two-way data synchronization between only Alibaba Cloud database instances. The **Access Method** must be **Alibaba Cloud Instance**.
    
-   DTS supports only two-way synchronization between two databases. DTS does not support two-way synchronization between multiple databases.
    
-   You can update the synchronization topology of a data synchronization task from one-way to two-way. For more information, see **Upgrade synchronization topology from one-way to two-way**.
    

**Source instance**

**Destination instance**

**Reference**

**MySQL**

**MySQL**

[Configure two-way data synchronization between ApsaraDB RDS for MySQL instances](/help/en/dts/user-guide/configure-two-way-data-synchronization-between-mysql-instances)

**PolarDB for MySQL**

[Configure two-way data synchronization between an ApsaraDB RDS for MySQL instance and a PolarDB for MySQL cluster](/help/en/dts/user-guide/configure-two-way-data-synchronization-between-an-apsaradb-rds-for-mysql-instance-and-a-polardb-for-mysql-cluster)

**PolarDB for MySQL**

**MySQL**

Available soon

**PolarDB for MySQL**

[Two-way data synchronization between PolarDB for MySQL clusters](/help/en/dts/user-guide/configure-two-way-data-synchronization-between-polardb-for-mysql-clusters-new)

**PostgreSQL**

**PostgreSQL**

[Configure two-way data synchronization between ApsaraDB RDS for PostgreSQL instances](/help/en/dts/user-guide/configure-two-way-synchronization-between-apsaradb-rds-for-postgresql-instances)

**PolarDB for PostgreSQL**

[Configure two-way data synchronization between an ApsaraDB RDS for PostgreSQL instance and a PolarDB for PostgreSQL cluster](/help/en/dts/user-guide/configure-two-way-synchronization-between-an-apsaradb-rds-for-postgresql-instance-and-a-polardb-for-postgresql-cluster)

**PolarDB for PostgreSQL**

**PostgreSQL**

[Configure two-way data synchronization between a PolarDB for PostgreSQL cluster and an ApsaraDB RDS for PostgreSQL database](/help/en/dts/user-guide/configure-two-way-synchronization-between-a-polardb-for-postgresql-cluster-and-an-apsaradb-rds-for-postgresql-instance)

**PolarDB for PostgreSQL**

[Configure two-way data synchronization between PolarDB for PostgreSQL clusters](/help/en/dts/user-guide/configure-two-way-synchronization-between-polardb-for-postgresql-clusters)

**PolarDB (Compatible with Oracle)**

**PolarDB (Compatible with Oracle)**

[Configure two-way data synchronization between PolarDB for PostgreSQL (Compatible with Oracle) clusters](/help/en/dts/user-guide/polardb-postgresql-compatible-with-oracle-two-way-synchronization-between-clusters)

**PolarDB-X 2.0**

**PolarDB-X 2.0**

[Configure two-way synchronization between PolarDB-X 2.0 instances](/help/en/dts/user-guide/two-phase-synchronization-between-polardb-x-2-0)

**Tair/Redis**

**Tair/Redis**

[Configure two-way synchronization between Tair instances](/help/en/dts/user-guide/configure-two-way-synchronization-between-tair-instances)

**MongoDB** replica set instance

**MongoDB** replica set instance

[Configure two-way data synchronization between ApsaraDB for MongoDB replica set instances](/help/en/dts/user-guide/configure-two-way-data-synchronization-between-apsaradb-for-mongodb-replica-set-instances)

**MongoDB** sharded cluster instance

**MongoDB** sharded cluster instance

[Configure two-way data synchronization between ApsaraDB for MongoDB sharded cluster instances](/help/en/dts/user-guide/configure-two-way-data-synchronization-between-apsaradb-for-mongodb-instances)

**Topology type**

**Topology**

**Description**

Two-way one-to-one synchronization

![双向数据同步架构](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/7920359951/p41047.png)

To ensure data consistency, make sure that data records with the same primary key, business primary key, or unique key are updated on only one of the source and destination instances.

**Note**

If data records are updated on both the source and destination instances, DTS responds to conflicts based on the conflict resolution policy that you specify for the data synchronization task.

## References

-   [Overview of data synchronization scenarios](/help/en/dts/data-synchronization-scenarios-1#concept-2313406)
    
-   [Overview of data synchronization scenarios](/help/en/dts/user-guide/data-synchronization-scenarios#concept-1732301)

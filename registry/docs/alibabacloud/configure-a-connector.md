This topic describes the built-in connectors provided by Trino in E-MapReduce (EMR). This topic also shows you how to modify the configurations of a connector and add a custom connector in the EMR console.

## Built-in connectors of EMR Trino

The following table describes the out-of-the-box built-in connectors that are provided by EMR Trino.

**Connector**

**Description**

**References**

Hive

You can use the connector to query data in Hive data warehouses.

[Hive connector](/help/en/emr/emr-on-ecs/user-guide/hive-connector-1#task-2109964)

Kudu

You can use the connector to query data in, insert data into, and delete data from Kudu.

[Kudu connector](/help/en/emr/emr-on-ecs/user-guide/kudu-connector#task-2109963)

MySQL

You can use the connector to query data in tables in an external MySQL instance and create tables in the instance.

[MySQL connector](/help/en/emr/emr-on-ecs/user-guide/mysql-connector#task-2109853)

Iceberg

You can use the connector to query data files in the Iceberg format.

[Iceberg connector](/help/en/emr/emr-on-ecs/user-guide/iceberg-connector#task-2109976)

Hudi

You can use the connector to query data in Copy on Write (COW) and Merge on Read (MOR) tables.

[Hudi connector](/help/en/emr/emr-on-ecs/user-guide/hudi-connector#task-2109977)

Delta

You can use the connector to query data in Delta Lake tables.

[Delta connector](/help/en/emr/emr-on-ecs/user-guide/delta-connector#task-2191032)

JMX

You can use the connector to perform system monitoring and debugging.

[JMX connector](/help/en/emr/emr-on-ecs/user-guide/jmx-connector#concept-y5p-j4r-zgb)

system

You can use the connector to query the basic information and measures of Trino clusters.

**Note**

You do not need to configure the system connector. All information about the connector can be obtained from the `system` directory.

None

## Modify the configurations of a built-in connector

You can go to the **Configure** tab for the Trino service in the EMR console and modify the related parameters in the configuration file of the connector that you want to modify. The following table describes the mappings between connectors and configuration files.

**Connector**

**Configuration file**

Hive

**hive.properties**

Kudu

**kudu.properties**

MySQL

**mysql.properties**

Iceberg

**iceberg.properties**

Hudi

**hudi.properties**

Delta

**delta.properties**

JMX

**jmx.properties**

system

**system.properties**

Example: Modify the configurations of a Hive connector

1.  Go to the Trino service page in the EMR console, click the **Configure** tab, and then click the **hive.properties** tab.
    
2.  Modify the configuration items based on your business requirements.
    
    For more information about how to modify the configuration items, see [Manage configuration items](/help/en/emr/emr-on-ecs/user-guide/manage-configuration-items#task-2140037).
    
3.  After you save the configurations, choose **More** > **Restart** in the upper-right corner of the Services tab.
    
    **Note**
    
    After the service is restarted, the connector becomes available.
    

## Add a custom connector

**Note**

This feature is supported only in EMR V3.27.0, EMR V4.3.0, EMR V5.2.0, and their later minor versions.

By default, EMR Trino provides five placeholder connectors, including connector1, connector2, connector3, connector4, and connector5. You can use these placeholder connectors to add custom connectors. You can go to the **Configure** tab of the Trino service page in the EMR console and configure the placeholder connectors on the **connector1.properties** tab, **connector2.properties** tab, **connector3.properties** tab, **connector4.properties** tab, and **connector5.properties** tab. Placeholder connectors are configured in the same way as built-in connectors.

To add a custom connector, you need to only modify the configurations of an unoccupied placeholder connector.

Example: Add a MongoDB connector

1.  Go to the Trino service page in the EMR console, click the **Configure** tab, and then click the **connector1.properties** tab.
    
2.  Change the value of the **connector.name** configuration item to **mongodb**.
    
3.  Add custom configuration items based on your business requirements.
    
    For more information about how to add custom configuration items, see [Modify configuration items](/help/en/emr/emr-on-ecs/user-guide/manage-configuration-items#section-2zx-r0v-1lm).
    
4.  After you save the configurations, choose **More** > **Restart** in the upper-right corner of the Services tab.
    
    **Note**
    
    After the service is restarted, the connector becomes available.

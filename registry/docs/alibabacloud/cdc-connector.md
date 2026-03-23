This topic describes how to use the Change Data Capture (CDC) connectors for Apache Flink in Alibaba Cloud Realtime Compute for Apache Flink and how to change the connector name.

**Important**

The CDC connectors for Apache Flink are open source connectors that comply with the protocol of Apache Flink 2.0. The services supported by the CDC connectors for Apache Flink and their service level agreement (SLA) are different from those of the CDC connectors that are commercially released by Alibaba Cloud Realtime Compute for Apache Flink.

-   If you encounter an issue such as configuration failure, deployment failure, or data loss when you use the CDC connectors for Apache Flink, you must find the related troubleshooting method in the open source community. Alibaba Cloud Realtime Compute for Apache Flink does not provide technical support for the CDC connectors for Apache Flink.
    
-   You must guarantee the SLA of the CDC connectors for Apache Flink by yourself.
    

## **Available CDC connectors**

**CDC connector**

**Description**

-   [MySQL CDC](/help/en/flink/realtime-flink/developer-reference/mysql-connector/)
    
-   [PostgreSQL CDC](/help/en/flink/realtime-flink/developer-reference/postgresql-cdc-connector/)
    
-   [MongoDB CDC connector (public preview)](/help/en/flink/realtime-flink/developer-reference/mongodb-connector)
    

These CDC connectors are provided in Realtime Compute for Apache Flink. You do not need to use the CDC connectors for Apache Flink.

-   [OceanBase CDC](https://nightlies.apache.org/flink/flink-cdc-docs-release-3.1/docs/connectors/flink-sources/oceanbase-cdc/)
    
-   [Oracle CDC](https://nightlies.apache.org/flink/flink-cdc-docs-release-3.1/docs/connectors/flink-sources/oracle-cdc/)
    
-   [SQL Server CDC](https://nightlies.apache.org/flink/flink-cdc-docs-release-3.1/docs/connectors/flink-sources/sqlserver-cdc/)
    
-   [TiDB CDC](https://nightlies.apache.org/flink/flink-cdc-docs-release-3.1/docs/connectors/flink-sources/tidb-cdc/)
    
-   [Db2 CDC](https://nightlies.apache.org/flink/flink-cdc-docs-release-3.1/docs/connectors/flink-sources/db2-cdc/)
    
-   [Vitess CDC](https://nightlies.apache.org/flink/flink-cdc-docs-release-3.1/docs/connectors/flink-sources/vitess-cdc/)
    

These CDC connectors are not available for commercial use. For more information about how to use these connectors, see [Use an Apache Flink CDC connector](#8669fd70829vd).

**Note**

If the default name of a CDC connector for Apache Flink or a new custom connector is the same as the name of a [built-in connector](/help/en/flink/realtime-flink/developer-reference/supported-connectors) or an existing custom connector of Realtime Compute for Apache Flink, change the default connector name to prevent name conflicts. For the SQL Server CDC connector and Db2 CDC connector, you must change the default connector name in the community and repackage the connector. For example, you can change sqlserver-cdc to sqlserver-cdc-test. For more information, see [Change the connector name](#59e3187473tws).

## Version mappings between CDC connectors for Apache Flink and VVR

**VVR version**

**Release version of CDC connectors for Apache Flink**

vvr-4.0.0-flink-1.13 to vvr-4.0.6-flink-1.13

release-1.4

vvr-4.0.7-flink-1.13 to vvr-4.0.9-flink-1.13

release-2.0

vvr-4.0.10-flink-1.13 to vvr-4.0.12-flink-1.13

release-2.1

vvr-4.0.13-flink-1.13 to vvr-4.0.14-flink-1.13

release-2.2

vvr-4.0.15-flink-1.13 to vvr-6.0.2-flink-1.15

release-2.3

vvr-6.0.2-flink-1.15 to vvr-8.0.5-flink-1.17

release-2.4

vvr-8.0.1-flink-1.17 to vvr-8.0.7-flink-1.17

release-3.0

vvr-8.0.11-flink-1.17 to vvr-11.1-jdk11-flink-1.20

release-3.4

## **Use an Apache Flink CDC connector**

### **SQL deployments**

1.  On the [Apache Flink CDC connectors](https://nightlies.apache.org/flink/) page, select the desired release version of CDC connectors for Apache Flink.
    
    **Note**
    
    -   We recommend that you use the latest stable version.
        
    -   To prevent compatibility issues, select the CDC release version corresponding to the Ververica Runtime (VVR) version you use. For information about the version mappings, see [Version mappings between CDC connectors for Apache Flink and VVR](#59c085b71ehbt).
        
    
2.  In the table of contents on the left, click **Connectors** and choose the desired CDC connector. On the page that appears, in the **SQL Client JAR** section, click the link to download the CDC connector's JAR file.
    
    ![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/6474351171/p781578.png)
    
    **Note**
    
    You can also go to the [Maven repository](https://mvnrepository.com/artifact/com.ververica/) to download the desired CDC connector JAR.
    
3.  Log on to the [Realtime Compute for Apache Flink management console](https://realtime-compute.console.alibabacloud.com/regions/cn-shanghai).
    
4.  Click **Console** in the **Actions** column of your workspace.
    
    The development console opens.
    
5.  In the left-side navigation pane, click **Connectors**.
    
    ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4779669471/p731562.png)
    
6.  On the **Connectors** page, click **Create Custom Connector**.
    
7.  In the dialog, upload the JAR file downloaded in Step 2.
    
    For more information, see [Manage custom connectors](/help/en/flink/realtime-flink/user-guide/manage-custom-connectors).
    
8.  Develop a job in SQL and set the `connector` option to the name of the Apache Flink CDC connector.
    
    For information about the options supported by each connector, see [CDC Connectors for Apache Flink](https://nightlies.apache.org/flink/flink-cdc-docs-release-3.0/docs/connectors/flink-sources/overview/).
    

### **JAR deployments**

1.  If you want to use a CDC connector for Apache Flink in a JAR deployment, you must declare the following dependency in the `pom.xml` file:
    
    ```
    <dependency>
      <groupId>com.ververica</groupId>
      <artifactId>flink-connector-${Name of the desired connector}-cdc</artifactId>
      <version>${Version of the connector for Apache Flink}</version>
    </dependency>
    ```
    
    The Maven repository contains only release versions and does not contain snapshot versions. If you want to use a snapshot version, you can clone the [GitHub repository](https://github.com/ververica/flink-cdc-connectors) and compile the JAR file of the snapshot version.
    
2.  Use the `import` keyword to import the related implementation class in the code and use the class based on the description in the documentation.
    
    **Important**
    
    Take note of the differences between `flink-connector-xxx` and `flink-sql-connector-xxx` for the artifacts with different IDs.
    
    -   `flink-connector-xxx`: contains only the code of the connector. If you want to use the dependencies of the connector, you must declare the dependencies in the code.
        
    -   `flink-sql-connector-xxx`: packages all dependencies into a single JAR file for direct use.
        
    
    Select a connector implementation class based on your business requirements. For example, you can use `flink-sql-connector-xxx` when you create a custom connector in the development console of Realtime Compute for Apache Flink.
    

## **Change the connector name**

This section describes how to change the name of the SQL Server CDC connector for Apache Flink.

1.  Clone the [GitHub repository](https://github.com/ververica/flink-cdc-connectors) and switch to the branch corresponding to the version you want to use.
    
2.  Change the identifier of the factory class of the SQL Server CDC connector.
    
    ```
    //com.ververica.cdc.connectors.sqlserver.table.SqlServerTableFactory
    @Override
    public String factoryIdentifier() {
        return "sqlserver-cdc-test";
    }
    ```
    
3.  Compile and package the flink-sql-connector-sqlserver-cdc submodule.
    
4.  In the left-side navigation pane of the development console of Realtime Compute for Apache Flink, click **Connectors**. On the Connectors page, click **Create Custom Connector**. In the Create custom connector dialog box, upload the JAR file that is packaged in Step 3.
    
    For more information, see [Manage custom connectors](/help/en/flink/realtime-flink/user-guide/manage-custom-connectors).
    
5.  When you write an SQL draft based on the procedure in [SQL deployments](#59e1e00373hqb), set the `connector` parameter to the connector name `sqlserver-cdc-test`.

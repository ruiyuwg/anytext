This topic lists the clients and drivers for PolarDB for PostgreSQL (Compatible with Oracle).

## Clients

**Type**

**Description**

**Installation package**

**PolarDB-Tools**

Available only for Alibaba Cloud Linux, Rocky Linux, CentOS Stream, and CentOS operating systems. The toolset includes tools such as psql, pg\_dump, and pg\_restore. For instructions, see [PolarDB-Tools](/help/en/polardb/polardb-for-oracle/polardb-tools-o-1/).

**Note**

-   The tools in PolarDB-Tools, such as psql and pg\_dump, differ from the corresponding community versions. The tools in this toolset are adapted for PolarDB for PostgreSQL (Compatible with Oracle). If you use community versions of tools such as psql and pg\_dump, you may encounter unknown errors or issues such as incomplete data in backups and restores.
    

[PolarDB-Tools.tar.gz](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/en-US/20241212/ocgnij/PolarDB-Tools.tar.gz)

**PolarPlus**

Available only for Linux systems. It provides a command-line user interface and supports SQL commands, PolarPlus commands, PL/SQL anonymous blocks, functions, and stored procedures. For instructions, see [PolarPlus](/help/en/polardb/polardb-for-oracle/polarplus).

[PolarPlus](https://help-static-aliyun-doc.aliyuncs.com/file-manage-files/en-US/20241204/eozaey/polarplus_release.tar.gz)

## **Drivers**

**Type**

**Description**

**Driver package**

**JDBC**

Includes Java Database Connectivity (JDBC) drivers for Java 6, Java 7, and Java 8, which correspond to three Java Archive (JAR) packages. The package names are `polardb-jdbc16.jar`, `polardb-jdbc17.jar`, and `polardb-jdbc18.jar`. Select the appropriate JDBC driver based on the Java Development Kit (JDK) version that your application uses. For instructions, see [JDBC](/help/en/polardb/polardb-for-oracle/jdbc-o-1-0).

\-

**OCI**

A native C language interface for PolarDB for PostgreSQL (Compatible with Oracle). Oracle Call Interface (OCI) provides the foundation for building language-specific interfaces, such as PolarDB JDBC, PolarDB .Net, and PolarDB ODBC. It also provides search statement and SQL call capabilities for PolarDB for PostgreSQL (Compatible with Oracle). For instructions, see [OCI](/help/en/polardb/polardb-for-oracle/oci).

[polardb-oci.tar.gz](https://docs-aliyun.cn-hangzhou.oss.aliyun-inc.com/assets/attach/150267/cn_zh/1591869252504/polardb-oci.tar.gz)

**ODBC**

Provides driver packages for Unix/Linux and Windows operating systems. For instructions, see [ODBC](/help/en/polardb/polardb-for-oracle/odbc).

-   For Unix or Linux systems (x86, 32-bit): [PolarDB-ODBC\_Linux\_X86\_32.tar.gz](https://docs-aliyun.cn-hangzhou.oss.aliyun-inc.com/assets/attach/183466/cn_zh/1630050685567/PolarDB-ODBC_Linux_X86_32.tar.gz)
    
-   For Unix or Linux systems (x86, 64-bit): [PolarDB-ODBC\_Linux\_X86\_64.tar.gz](https://docs-aliyun.cn-hangzhou.oss.aliyun-inc.com/assets/attach/183466/cn_zh/1630050734377/PolarDB-ODBC_Linux_X86_64.tar.gz)
    
-   For Unix or Linux systems (ARM, 64-bit): [PolarDB-ODBC\_Linux\_arm\_64.tar.gz](https://docs-aliyun.cn-hangzhou.oss.aliyun-inc.com/assets/attach/183466/cn_zh/1630050802154/PolarDB-ODBC_Linux_arm_64.tar.gz)
    
-   For Windows systems (x86, 64-bit): [PolarDB-ODBC\_Windows\_x86\_64.7z](https://docs-aliyun.cn-hangzhou.oss.aliyun-inc.com/assets/attach/183466/cn_zh/1630050866037/PolarDB-ODBC_Windows_x86_64.7z)
    
-   For Windows systems (x86, 32-bit): [PolarDB-ODBC\_Windows\_x86\_32.7z](https://docs-aliyun.cn-hangzhou.oss.aliyun-inc.com/assets/attach/183466/cn_zh/1630050834958/PolarDB-ODBC_Windows_x86_32.7z)
    

**.NET**

PolarDB .NET, also known as ADO.NET Data Provider for PolarDB, is a driver used to access PolarDB from languages such as C#, Visual Basic, and F#. It is compatible with Entity Framework Core and Entity Framework 6.x. You can use this driver with Entity Framework to quickly develop applications. For instructions, see [.NET](/help/en/polardb/polardb-for-oracle/dotnet).

[.NET driver](/help/en/polardb/polardb-for-oracle/dotnet#title-emi-u6b-6qu)

**PHP**

Connect by installing the pgsql driver for PolarDB for PostgreSQL (Compatible with Oracle). For instructions, see [PHP](/help/en/polardb/polardb-for-oracle/php).

-   Windows: Download and install [WampServer](http://www.wampserver.com/), and then add the pgsql driver.
    
-   Linux: `php-pgsql.x86_64` driver package.
    

**PolarDBO Flink CDC**

Based on the community Postgres CDC, the PolarDBO Flink CDC is a Flink CDC connector adapted with minor code changes to be compatible with PolarDB for PostgreSQL (Compatible with Oracle).

[PolarDBO Flink CDC](/help/en/polardb/polardb-for-oracle/polardbo-cdc-1-0)

**Debezium PolarDBO connector**

Based on the community Debezium PostgreSQL connector, the Debezium PolarDBO connector is a Debezium connector adapted with minor code changes to support PolarDB for PostgreSQL (Compatible with Oracle).

[Debezium PolarDBO connector](/help/en/polardb/polardb-for-oracle/debezium-polardbo-connector-1)

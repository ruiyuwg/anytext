This topic describes common development tools that you can use to connect to and perform operations on Hologres. This topic also describes the use scenarios of the development tools. You can connect to Hologres for data development by using a development tool that you are familiar with.

## **Introduction**

**Note**

Hologres is compatible with PostgreSQL and provides Java Database Connectivity (JDBC) and Open Database Connectivity (ODBC) drivers.

-   You can click [here](https://jdbc.postgresql.org/download/) to download a JDBC driver. Make sure that the version of the JDBC driver that you use to connect to Hologres is 42.2.18 or later.
    
-   You can click [here](https://www.postgresql.org/ftp/odbc/versions.old/msi/) to download an ODBC driver. Make sure that the version of the ODBC driver that you use to connect to Hologres is psqlodbc\_11\_01\_0000 or later.
    

The following table describes common development tools.

**Tool**

**Description and use scenario**

**References**

HoloWeb

Recommended.

An all-in-one big data development platform that is developed based on Hologres.

This tool allows you to perform data development in a visualized manner or by using SQL statements. This way, this tool meets the requirements of developers with different development experiences and is applicable to various development operations in Hologres.

[HoloWeb](/help/en/hologres/user-guide/connect-to-an-instance#task-2523198)

DataWorks

An all-in-one big data development platform with which Hologres is deeply integrated.

DataWorks is suitable for big data development scenarios in which development is highly dependent on DataWorks, such as scenarios in which DataWorks is used for job scheduling.

[DataWorks](/help/en/hologres/user-guide/overview-2/#concept-1664144)

Third-party clients

Navicat

A development tool that connects to multiple databases.

This tool allows you to perform data development in a visualized manner or by using SQL statements. This tool is more suitable for scenarios in which services are highly dependent on Navicat.

[Navicat](/help/en/hologres/user-guide/navicat#task-1946186)

DataGrip

A development tool that allows you to connect an application to multiple databases. DataGrip facilitates the creation, management, and maintenance of databases.

[DataGrip](/help/en/hologres/user-guide/datagrip)

Apache Nifi

An easy-to-use and reliable data processing and distribution platform. It is designed to facilitate the automatic management of data streams across systems. Apache NiFi provides a web user interface (UI) that is highly interactive and user-friendly. You can use Apache Nifi to manage and process data streams in a system or across systems.

[Apache NiFi](/help/en/hologres/user-guide/apache-nifi)

SQL Workbench/J

A free, cross-platform SQL query tool.

This tool allows you to perform data development only by using SQL statements and is more suitable for developers with a basic SQL development ability.

[SQL Workbench/J](/help/en/hologres/user-guide/sql-workbench-or-j#task-1946249)

PSQL

An interactive command-line client based on PostgreSQL.

This tool allows you to perform data development only by using SQL statements and is more suitable for developers with a basic SQL development ability.

[PSQL client](/help/en/hologres/user-guide/use-the-postgresql-client-to-connect-to-hologres#task-1928661)

Using code for connection

JDBC

A Java API that is used to execute SQL statements, which allows you to access multiple types of relational databases in a unified manner. The Java API consists of a set of classes and API operations that are written in Java.

This tool allows you to perform data development only by using SQL statements and is more suitable for developers with JDBC development experiences.

[JDBC](/help/en/hologres/user-guide/use-jdbc-to-connect-to-hologres#task-1946174)

Python

An advanced programming language. Python is widely used in the data analysis field due to its concise and easy-to-read syntax and comprehensive ecosystem of third-party libraries.

[Python](/help/en/hologres/user-guide/use-python-to-connect-to-hologres/)

Holo Client

A development interface that is developed for Hologres based on JDBC. Holo Client is applicable to writes of a large amount of data and point queries with high queries per second (QPS). For example, you can use Holo Client if you want to associate with dimension tables for queries or synchronize data to Hologres at a time or in real time.

[Holo Client](/help/en/hologres/user-guide/read-and-write-data-over-holo-client)

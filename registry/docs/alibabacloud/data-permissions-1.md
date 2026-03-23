Data Lake Formation (DLF) allows you to configure permissions on databases, tables, columns, and functions in data lakes. This topic describes the permissions that are required to perform different operations. This topic also introduces the concepts of owners and owner permissions and describes the permission verification mechanism.

## Permission management

-   [Data permissions](/help/en/dlf/dlf-1-0/user-guide/data-authorization#topic-2129196)
    
-   [User management](/help/en/dlf/dlf-1-0/user-guide/manage-users#topic-2129199)
    
-   [Role Management](/help/en/dlf/dlf-1-0/user-guide/manage-roles#topic-2129200)
    

## **Permission** configurations

You can enable and disable permission control on data catalogs. For more information, see [Configure permissions](/help/en/dlf/dlf-1-0/user-guide/configure-permissions).

## Background information

The following table describes the three elements that must be specified when you configure permissions:

Element

Description

Principal

The user or role to which the permissions are granted. The user must be an Alibaba Cloud account, a RAM user, or a RAM role. The role must be created in the DLF console. For more information about how to create a role in the DLF console, see [Role Management](/help/en/dlf/dlf-1-0/user-guide/manage-roles#topic-2129200).

You can specify a principal in one of the following formats:

-   Alibaba Cloud account: acs:ram::<User ID of the Alibaba Cloud account>:root, such as `acs:ram::123456:root`.
    
-   RAM user: acs:ram::<User ID of the Alibaba Cloud account>:user/<Username of the RAM user>, such as `acs:ram::123456:user/user_a`.
    
-   RAM role: acs:ram::<User ID of the Alibaba Cloud account>:role/<Name of the RAM role>, such as `acs:ram::123456:role/role_a`.
    

Resource

The resources that are managed in a data lake.

-   Data catalog: The top-level entity of data lake metadata, which can contain multiple databases.
    
-   Database: A database managed in data lake metadata.
    
-   Table: A table managed in data lake metadata.
    
-   Column: A column managed in data lake metadata.
    
-   Function: A function managed in data lake metadata.
    

Access

The method that is used to access resources. The access method varies based on the type of resource. For example, databases support the Create Table and List methods, tables support the Select and Update methods, and columns support only the Select method.

## Permission overview

The following table describes the permissions that are supported for data lakes:

Resource

Access

Description

Catalog

Alter

The permissions to modify the catalog. For example, users who are granted these permissions can execute the `alter catalog <catalog_name> set ...`.

Drop

The permissions to delete the catalog. For example, users who are granted these permissions can execute the `drop catalog <catalog_name>`.

Grant

The permissions to perform authorization operations on the catalog. For example, users who are granted these permissions can execute the `grant drop on catalog <catalog_name> to ...`.

Create Database

The permissions to create a database in the catalog. For example, users who are granted these permissions can execute the `create database <catalog_name>.<database_name> ...`.

Database

Describe

The permissions to query the metadata of a database or select a database. For example, users who are granted these permissions can execute the `desc database <database_name>` and `use <database_name>` statements.

Alter

The permissions to modify a database. For example, users who are granted these permissions can execute the `alter database <database_name> set location '<path>'` statement.

Drop

The permissions to delete a database. For example, users who are granted these permissions can execute the `drop database <database>` statement.

Create Table

The permissions to create tables in a database. For example, users who are granted these permissions can execute the `create table <database_name>.<table_name> ...` statement.

List

The permissions to query the resources that belong to a database. For example, users who are granted these permissions can execute the `show tables` statement.

**Important**

-   The EMR Spark engine does not support the verification of the List permission on databases.
    
-   Resources cannot be filtered and displayed based on user permissions. All resources that belong to a database are displayed.
    

Table

Describe

The permissions to query the metadata of a table. For example, users who are granted these permissions can execute the `desc formatted <table_name>` statement.

Alter

The permissions to modify a table. For example, users who are granted these permissions can execute the `alter table <table_name> add columns ...` and `alter table <table_name> drop partition ...` statements.

Drop

The permissions to delete a table. For example, users who are granted these permissions can execute the `drop table <table_name>;` statement.

Select

The permissions to query the data of a table. For example, users who are granted these permissions can execute the `select * from <table_name>` statement.

Update

The permissions to update the data of a table. For example, users who are granted these permissions can execute the `insert into table <table_name>` and `delete from <table_name> where ...` statements.

Column

Select

The permissions to query the data of a column. For example, users who are granted these permissions can execute the `select <column_name1>, <column_name2> from <table_name>` statement.

Function

Describe

The permissions to query the metadata of a function.

Alter

The permissions to modify the information about a function.

Drop

The permissions to delete a function.

Execute

The permissions to use or execute a function.

## Owner permissions

### Definition of an owner

The user who creates a resource is referred to as the owner of the resource. You can view the owner information of a database or table in the corresponding Basic Information section.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4825144371/p873030.png)

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/4825144371/p873031.png)

-   When a database or table is created in Data Lake Formation by an Alibaba Cloud RAM user, the RAM user is the owner of the database or table resource. The owner is represented in the format corresponding to the user.
    
-   If you use a Linux or Lightweight Directory Access Protocol (LDAP) user to execute an SQL statement in an EMR engine to create a resource, the Linux or LDAP user becomes the owner of the resource.
    
-   The Databricks engine does not support resource owners.
    

**Important**

-   In DLF, if a RAM user and a Linux or LDAP user have the same username, they are equivalent as resource owners. For example, the following settings have the same effect: Owner=acs:ram::<User ID of the Alibaba Cloud account>:user/user\_a and Owner=user\_a. This allows you to use RAM users to perform operations on open source big data systems based on the granted permissions.
    
-   If you use an Alibaba Cloud account as the owner of a resource, no equivalent Linux or LDAP user exists. Take note that the setting of Owner=acs:ram::<User ID of the Alibaba Cloud account>:root is not equivalent to the setting of Owner=root.
    
-   To view the username of a RAM user, perform the following steps: Log on to the DLF console and choose **Data Permission** > **User** in the left-side navigation pane. On the page that appears, find the RAM user and click the logon name. If you use an EMR engine, we recommend that you add a Linux or LDAP user that has the same username as your RAM user. For more information about how to add the user, see [Manage user accounts](/help/en/emr/manage-user-accounts).
    

### Definition of owner permissions

The owner of a resource is granted all permissions on the resource. The permissions that are granted to the owner of a resource are referred to as owner permissions. For example, if the owner of a database is user\_a, user\_a can perform operations such as Alter Database and Drop Database.

**Important**

The owner of a resource is not granted the permissions on the subresources that belong to the resource. For example, the owner of a database is granted only the permissions on the database and is not granted the permissions on all tables in the database.

### Verification of owner permissions

-   When you log on to the DLF console as a RAM user, you are identified as a RAM user. You are automatically granted the owner permissions on the resources that are created by the RAM user or a user that is equivalent to the RAM user.
    
-   When you use an EMR engine to access the metadata in a data lake, you are identified as a Linux or LDAP user. You are automatically granted the owner permissions on the resources that are created by the Linux or LDAP user or a user that is equivalent to the Linux or LDAP user.
    
-   The Databricks engine does not support the verification of owner permissions.
    

### **Supported compute engines**

The following table lists the compute engines that are supported by DLF in different EMR versions:

### **Supported compute engines**

-   The following table lists the compute engines that are supported by DLF in different EMR versions.
    

**EMR version**

**Hive**

**Spark**

**Presto**

**Impala**

EMR V3.X

EMR V3.39.0 and earlier

Not supported

Not supported

Not supported

Not supported

EMR-3.40.0

Supported

Supported

Supported

Not supported

EMR V3.41.0 to EMR V3.43.1

Supported

Supported

Not supported

Not supported

EMR V3.44.0 and later (under planning)

Supported

Supported

Supported

Supported

EMR V5.X

EMR V5.5.0 and earlier

Not supported

Not supported

Not supported

Not supported

EMR-5.6.0

Supported

Supported

Supported

Not supported

EMR V5.7.0 to EMR V5.9.1

Supported

Supported

Not supported

Not supported

EMR V5.10.0 and later (under planning)

Supported

Supported

Supported

Supported

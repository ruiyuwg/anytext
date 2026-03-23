JDBC Catalog is a type of External Catalog supported since version 3.0. This topic describes how to create and view a JDBC catalog.

## **Background**

With a JDBC catalog, you can:

-   Directly query data in MySQL, PostgreSQL, and data sources that are compatible with their protocols.
    
-   Transform and import data from JDBC data sources by using the INSERT INTO capability with JDBC catalogs.
    

## Create a JDBC catalog

### Syntax

```
CREATE EXTERNAL CATALOG <catalog_name>
[COMMENT <comment>]
PROPERTIES
( 
  "key"="value", 
  ...
);
```

### Parameters

-   `catalog_name`: the name of the JDBC catalog. This parameter is required. The name must meet the following requirements:
    
    -   The name can contain letters, digits, and underscores (\_). It must start with a letter.
        
    -   The name must be 1 to 64 characters in length.
        
-   `comment`: optional. The description of the JDBC catalog.
    
-   `PROPERTIES`: the properties of the JDBC catalog. The following table describes the properties.
    
    **Property**
    
    **Required**
    
    **Description**
    
    type
    
    Yes
    
    The type of the data source. Set the value to `jdbc`.
    
    user
    
    Yes
    
    The username that is used to log on to the database.
    
    password
    
    Yes
    
    The password that is used to log on to the database.
    
    jdbc\_uri
    
    Yes
    
    The URI for the JDBC driver to connect to the database.
    
    -   If MySQL is used, specify the URL in the `"jdbc:mysql://ip:port"` format.
        
    -   If PostgreSQL is used, specify the URL in the `"jdbc:postgresql://ip:port/db_name"` format.
        
    
    driver\_url
    
    Yes
    
    The URL for downloading the JAR package of the JDBC driver.
    
    For a Serverless StarRocks instance, you must upload the JAR package of the JDBC driver to OSS and set the public-read permission for the JAR package. For more information, see [Simple upload](/help/en/oss/user-guide/simple-upload) and [Set the ACL for a bucket](/help/en/oss/user-guide/oss-bucket-acl). Then, set the driver\_url parameter to an HTTP URL that contains the **internal endpoint** of the OSS bucket. Example: `http://<YourBucketName>.oss-cn-xxxx-internal.aliyuncs.com/mysql-connector-java-*.jar`.
    
    driver\_class
    
    Yes
    
    The class name of the JDBC driver. You can specify the class name based on your business requirements.
    
    -   MySQL:
        
        -   For MySQL 5.X and earlier, use `com.mysql.jdbc.Driver`.
            
        -   For MySQL 6.X and later, use `com.mysql.cj.jdbc.Driver`.
            
    -   PostgreSQL: Use `org.postgresql.Driver`.
        
    

### Example

```
CREATE EXTERNAL CATALOG mysql_catalog
PROPERTIES
(
    "type"="jdbc",
    "user"="root",
    "password"="xxxxx",
    "jdbc_uri"="jdbc:mysql://127.0.0.1:3306",
    "driver_url"="http://<YourBucketName>.oss-cn-xxxx-internal.aliyuncs.com/mysql-connector-java-*.jar",
    "driver_class"="com.mysql.cj.jdbc.Driver"
);
```

**Note**

Specify the version of the MySQL driver in `mysql-connector-java-*.jar` based on your business requirements.

## View JDBC catalogs[​](https://docs.starrocks.io/zh/docs/data_source/catalog/jdbc_catalog/#%E6%9F%A5%E7%9C%8B-jdbc-catalog)

-   You can use the SHOW CATALOGS statement to query all catalogs in the current StarRocks cluster.
    
    ```
    SHOW CATALOGS;
    ```
    
-   You can also use the SHOW CREATE CATALOG statement to query the creation statement of a specific External Catalog. For example, use the following statement to query the creation statement of the JDBC catalog `jdbc0`.
    
    ```
    SHOW CREATE CATALOG jdbc0;
    ```
    

## Delete a JDBC catalog[​](https://docs.starrocks.io/zh/docs/data_source/catalog/jdbc_catalog/#%E5%88%A0%E9%99%A4-jdbc-catalog)

You can use the DROP CATALOG statement to delete a JDBC catalog.

For example, use the following statement to delete the JDBC catalog `jdbc0`.

```
DROP Catalog jdbc0;
```

## **Use the JDBC catalog to query data**

-   You can use the following operations to query data in tables within a JDBC catalog.
    
    1.  Use the SHOW DATABASES statement to view the databases in the cluster to which the specified catalog belongs.
        
        ```
        SHOW DATABASES FROM <catalog_name>;
        ```
        
    2.  Use the SET CATALOG statement to switch the catalog that takes effect in the current session.
        
        ```
        SET CATALOG <catalog_name>;
        ```
        
        Then use the USE statement to specify the database that takes effect in the current session.
        
        ```
        USE <db_name>;
        ```
        
        Alternatively, you can use the USE statement to directly switch the session to a specific database under the target catalog.
        
        ```
        USE <catalog_name>.<db_name>;
        ```
        
    3.  Use the SELECT statement to query the target table in the target database.
        
        ```
        SELECT * FROM <table_name>;
        ```
        
-   You can also use the SELECT statement to query the target table in the target database.
    
    ```
    SELECT * FROM <catalog_name>.<database_name>.<table_name>;
    ```
    

## FAQ[​](https://docs.starrocks.io/zh/docs/data_source/catalog/jdbc_catalog/#%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98)

Q: How do I handle the error "Malformed database URL, failed to parse the main URL sections"?

A: This error is typically caused by an incorrect URI in the `jdbc_uri` parameter. Check and ensure that the URI you entered is accurate. For more information, see the parameter description for `PROPERTIES` in this topic.

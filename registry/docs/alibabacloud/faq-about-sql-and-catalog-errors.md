This topic provides answers to some frequently asked questions about catalog errors.

-   [When reading data from Hologres via Hologres Catalog, Flink automatically ends the job without consuming data in real time. What do I do?](#69d8b1028e2b6)
    
-   [What do I do if the error message "CREATE TABLE ... AS TABLE ... statement requires target catalog ... implements org.apache.flink.table.catalog.CatalogTableProvider interface." appears?](#4fd63b7760133)
    
-   [What do I do if the information about a MySQL catalog is queried at a low speed or a server exception is returned during the query?](#section-823-b4s-447)
    
-   [What do I do if the error message "Cannot obtain STS token from EMR meta-service." appears?](#section-z0d-ra7-ayp)
    

## When reading data from Hologres via Hologres Catalog, Flink automatically ends the job without consuming data in real time. What do I do?

-   **Cause**
    
    By default, Realtime Compute for Apache Flink reads data from Hologres in batch mode, not in real time.
    
-   **Solution**
    
    To change the execution mode to stream mode, add the `/*+ OPTIONS('binlog'='true') */` hint in your SQL script, as shown below:
    
    ```
    INSERT INTO testfinish
    SELECT 
      col1,
      col2,
      col3
    FROM testsource /*+ OPTIONS ('binlog' = 'true') */
       LEFT JION testdim /*+ OPTIONS ('binlog' = 'true') */
             ON testsource.co11 = testdim.'col1';
    ```
    

## **What do I do if the error message "CREATE TABLE ... AS TABLE ... statement requires target catalog ... implements org.apache.flink.table.catalog.CatalogTableProvider interface." appears?**

-   Problem description
    
    ```
    org.apache.flink.table.api.ValidationException: SQL validation failed. CREATE TABLE ... AS TABLE ... statement requires target catalog 'XXXXXX' (MongoDBCatalog) implements org.apache.flink.table.catalog.CatalogTableProvider interface. Hint: Please refer the document and use another catalog that supports schema evolution as the target catalog.
    ```
    
-   Cause
    
    The upstream and downstream storage systems that you use are not supported by the CREATE TABLE AS statement. For example, tables of MongoDB catalogs cannot be used as sink tables to write data when you use the CREATE TABLE AS statement to create a deployment.
    
-   Solution
    
    Use the upstream and downstream storage systems that are supported by the CREATE TABLE AS statement. For more information, see [CREATE TABLE AS (CTAS)](/help/en/flink/realtime-flink/developer-reference/create-table-as-statement#section-6cg-tqj-k0s). You can use a source table and a sink table supported by the CREATE TABLE AS statement.
    

## What do I do if the information about a MySQL catalog is queried at a low speed or a server exception is returned during the query?

-   **Problem description**
    
    After I create a MySQL catalog, the information about the MySQL catalog is queried at a low speed or a server exception is returned during the query. The following figure shows the error details.![问题实例](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/1910050861/p526469.jpg)
    
-   **Cause**
    
    The problem may be caused by high network latency between between Flink and MySQL, or by frequent connection interruptions.
    
-   **Solutions**
    
    You can use one of the following methods to resolve the issue:
    
    -   Check whether the public bandwidth from Realtime Compute for Apache Flink to MySQL is insufficient. For example, the default value of the public bandwidth may be only 2 Mbit/s. In addition, check whether cross-region access is performed. For more information, see [How do I view the public bandwidth?](/help/en/flink/realtime-flink/support/faq-about-network-connectivity#section-hhy-399-v5m)
        
    -   If your network connection is unstable, increase the values of the `interactive_timeout` and `wait_timeout` parameters that are related to the MySQL instance.
        
    -   Add the `'connect.timeout'='120s'` configuration to the WITH clause when you create a table for the MySQL catalog.
        

## What do I do if the error message "Cannot obtain STS token from EMR meta-service." appears?

-   **Problem description**
    
    ```
    Caused by: MetaException(message:Initialize DlfMetaStoreClient failed: Initialize DlfMetaStoreClient failed: Cannot obtain STS token from EMR meta-service. Note that AK-Mode[dlf.catalog.akMode] can only used in EMR clusters, otherwise you should config the dlf.catalog.accessKeyId and dlf.catalog.accessKeySecret explicitly.)
      at com.aliyun.datalake.metastore.hive2.ProxyMetaStoreClient.createClient(ProxyMetaStoreClient.java:91)
      at com.aliyun.datalake.metastore.hive2.ProxyMetaStoreClient.<init>(ProxyMetaStoreClient.java:71)
      ... 41 more
    ```
    
-   **Cause**
    
    The configuration file is invalid. As a result, an error occurs during the initialization of the Hive catalog.
    
-   **Solutions**
    
    1.  Find the hive-site.xml file in the hive-conf-dir directory and delete the following property information from the hive-site.xml file:
        
        ```
         <property>
           <name>dlf.catalog.akMode</name>
           <value>EMR_AUTO</value>
         </property>
        ```
        
    2.  Configure an AccessKey ID and an AccessKey secret for the Hive catalog.
        
        ```
        <property>
            <name>dlf.catalog.accessKeyId</name>
            <value>${AccessKeyId}</value>
          </property>
        <property>
            <name>dlf.catalog.accessKeySecret</name>
            <value>${AccessKeySecret}</value>
          </property>
        ```

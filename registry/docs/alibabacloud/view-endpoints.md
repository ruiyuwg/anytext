This topic describes how to view the endpoints used to connect to the Lindorm engines in the Lindorm console.

## Endpoint network types

**Network type**

**Description**

VPC

A virtual private cloud (VPC) is a cloud-based private network dedicated for your use. VPCs are logically isolated from each other at Layer 2 to ensure high security and high performance. When Lindorm-cli is deployed on an Elastic Compute Service (ECS) instance, you can connect to a Lindorm instance over a VPC to ensure high security and reduce network latency.

Internet

If you want to connect an on-premises device to a Lindorm instance, you can apply for a public endpoint for the Lindorm instance. You are not charged for traffic that is generated when you connect to the Lindorm instance over the Internet. The connection may be exposed to security risks. We recommend that you use a VPC to ensure higher security.

## Procedure

1.  Log on to the [Lindorm console](https://lindorm.console.alibabacloud.com/cn-hangzhou/clusterhou/cluster).
    
2.  In the upper-left corner of the page, select the region where the instance is deployed.
    
3.  On the **Instances** page, click the ID of the instance that you want to manage or click **Manage** in the **Actions** column corresponding to the instance.
    
4.  In the left-side navigation pane, click **Database Connections**.
    
5.  Click the tab of the Lindorm engine to which you want to connect to view the endpoints of the Lindorm engine.
    
    **Note**
    
    To connect to a Lindorm engine by using a public endpoint, click **Apply for Public Endpoint** in the upper-right corner of the tab corresponding to the Lindorm engine.
    
    -   [View the endpoints of LindormTable](#section-i3a-42q-7c7)
        
    -   [View the endpoints of LindormTSDB](#section-fw6-u8u-jlf)
        
    -   [View the endpoints of LindormSearch](#section-8ms-q0x-lbb)
        
    -   [View the endpoints of LindormDFS](#section-9ka-b7c-i9u)
        
    -   [View the endpoints of LDPS](#section-nry-299-sjz)
        
    -   [View the endpoints of the Lindorm streaming engine](#section-vvi-yix-euh)
        
    

## View the endpoints of LindormTable

Before you view the endpoints of the Lindorm wide table engine (LindormTable), make sure that LindormTable is activated for the Lindorm instance. To connect to LindormTable by using a public endpoint, perform the following steps in the Lindorm console: In the left-side navigation pane, click **Database Connections**. Click the **Wide Table Engine** tab, and then click **Apply for Public Endpoint** in the upper-right corner of the tab. The following table lists the different types of endpoints that can be used to connect to LindormTable. ![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/3672682371/p732077.png)

**Endpoint type**

**Connection method**

**Supported series**

**Network type**

**Reference**

Endpoints for LindormTable SQL

Use LindormTable SQL to connect to LindormTable. This type of endpoints is shown in the section marked with ① in the preceding figure.

-   Lindorm
    
-   Lindorm Standalone
    

-   VPC
    
-   Internet
    

-   [Use Java JDBC APIs to develop applications](/help/en/lindorm/user-guide/call-java-api-operations-in-sql-based-connection-to-and-usage-of-lindormtable#topic-2088117)
    
-   [Use Python DB-API to develop applications](/help/en/lindorm/user-guide/use-the-lindorm-sql-api-for-a-non-java-language-to-connect-to-and-use-the-wide-table-engine-lindormtable#concept-2088132)
    
-   [Use Lindorm-cli to connect to and use LindormTable](/help/en/lindorm/user-guide/use-lindorm-cli-to-connect-to-and-use-lindormtable#concept-2088134)
    

Endpoints for MySQL

Use MySQL to connect to LindormTable. This type of endpoints is shown in the section marked with ② in the preceding figure.

Lindorm

-   VPC
    
-   Internet
    

-   [Use Java JDBC APIs to develop applications](/help/en/lindorm/user-guide/application-development-based-on-java-jdbc-interface)
    
-   [Use Druid to develop applications](/help/en/lindorm/user-guide/application-development-based-on-java-connection-pool-druid)
    

Endpoints for HBase APIs

Use the HBase Java API to connect to LindormTable. This type of endpoints is shown in the section marked with ③ in the preceding figure.

-   Lindorm
    
-   Lindorm Standalone
    

-   VPC
    
-   Internet
    

-   [Use ApsaraDB for HBase API for Java to develop applications](/help/en/lindorm/user-guide/use-the-hbase-api-for-java-to-connect-to-and-use-the-wide-table-engine#concept-2556855)
    
-   [Use Lindorm Shell to connect to LindormTable](/help/en/lindorm/user-guide/use-hbase-shell-to-connect-to-and-use-the-wide-table-engine#concept-2556990)
    

Use HBase non-Java APIs to connect to LindormTable. This type of endpoints is shown in the section marked with ④ in the preceding figure.

-   Lindorm
    
-   Lindorm Standalone
    

-   VPC
    
-   Internet
    

[Use the ApsaraDB for HBase API for a non-Java language to develop applications](/help/en/lindorm/user-guide/use-the-hbase-api-for-a-non-java-language-to-connect-to-and-use-the-wide-table-engine#concept-1953449)

Endpoints for Cassandra SQL

Use Cassandra SQL (CQL) to connect to LindormTable. This type of endpoints is shown in the section marked with ⑤ in the preceding figure.

-   Lindorm
    
-   Lindorm Standalone
    

-   VPC
    
-   Internet
    

-   [Use Lindorm-cqlsh to connect to LindormTable](/help/en/lindorm/user-guide/use-lindorm-cqlsh-to-connect-to-and-use-the-wide-table-engine#concept-1948288)
    
-   [Use a Cassandra client driver for Java to develop applications](/help/en/lindorm/user-guide/use-a-cassandra-client-driver-for-java-to-connect-to-and-use-the-wide-table-engine#concept-1948348)
    
-   [Use Cassandra client drivers for non-Java languages to develop applications](/help/en/lindorm/user-guide/use-a-multi-language-cassandra-client-driver-to-connect-to-and-use-the-wide-table-engine#concept-1948289)
    

Endpoints for Amazon S3

Use the Amazon Simple Storage Service (S3) protocol to connect to LindormTable. This type of endpoints is shown in the section marked with ⑥ in the preceding figure.

Lindorm

VPC

**Note**

To view LindormTable endpoints for Amazon S3, you must first enable the S3 protocol compatibility feature. For more information, see [Enable the S3 protocol compatibility feature](/help/en/lindorm/user-guide/activate-s3-protocol-compatibility#topic-2114883).

-   [Use the Amazon S3 API for Java to connect to and use LindormTable](/help/en/lindorm/user-guide/connect-and-use-the-wide-table-engine-with-the-s3#topic-2114890)
    
-   [Use Amazon S3 SDK for a non-Java language to connect to and use LindormTable](/help/en/lindorm/user-guide/connect-via-s3-non-java-api-and-use-the-wide-table#topic-2114892)
    

## View the endpoints of LindormTSDB

Before you view the endpoints of the Lindorm time series engine (LindormTSDB), make sure that LindormTSDB is activated for the Lindorm instance. To connect to LindormTSDB by using a public endpoint, perform the following steps in the Lindorm console: In the left-side navigation pane, click **Database Connections**. Click the **Time Series Engine** tab, and then click **Apply for Public Endpoint** in the upper-right corner of the tab. The following table lists the different types of endpoints that can be used to connect to LindormTSDB.

![查看时序引擎连接地址](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9356901271/p674237.png)

**Endpoint type**

**Connection method**

**Supported series**

**Network type**

**Reference**

Endpoints for LindormTSDB SQL

-   Use the JDBC driver to connect to LindormTSDB. This type of endpoints is shown in the section marked with ① in the preceding figure.
    
-   Use Lindorm-cli to connect to LindormTSDB. This type of endpoints is shown in the section marked with ① in the preceding figure.
    

-   Lindorm
    
-   Lindorm Standalone
    

-   VPC
    
-   Internet
    

-   [Use the JDBC driver for Lindorm to connect to and use LindormTSDB](/help/en/lindorm/user-guide/use-the-jdbc-driver-for-lindorm-to-connect-to-and-use-lindormtsdb#topic-2079050)
    
-   [Use Lindorm-cli to connect to and use LindormTSDB](/help/en/lindorm/user-guide/connect-through-lindorm-cli#topic-2079049)
    

Endpoints for HTTP

-   Use LindormTSDB SDK for Java to connect to LindormTSDB. This type of endpoints is shown in the section marked with ② in the preceding figure.
    
-   Use Lindorm-cli to connect to LindormTSDB. This type of endpoints is shown in the section marked with ② in the preceding figure.
    

-   Lindorm
    
-   Lindorm Standalone
    

-   VPC
    
-   Internet
    

-   [Tutorial: Use LindormTSDB SDK for Java to connect to and use LindormTSDB](/help/en/lindorm/user-guide/use-lindormtsdb-sdk-for-java-to-connect-to-and-use-lindormtsdb#task-2217082)
    
-   [Use Lindorm-cli to connect to and use LindormTSDB](/help/en/lindorm/user-guide/connect-through-lindorm-cli#topic-2079049)
    

## View the endpoints of LindormSearch

Before you view the endpoints of the Lindorm search engine (LindormSearch), make sure that LindormSearch is activated for the Lindorm instance.

### **LindormSearch endpoint for Elasticsearch**

To connect to LindormSearch by using a public endpoint, perform the following steps in the Lindorm console: In the left-side navigation pane, click **Database Connections**. Click the **Search Engine** tab, and then click **Apply for Public Endpoint** in the upper-right corner of the tab.

![image](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9356901271/p764237.png)

**Endpoint type**

**Connection method**

**Supported series**

**Network type**

**Reference**

LindormSearch endpoint for Elasticsearch

Run curl commands to connect to and use LindormSearch.

Lindorm

-   VPC
    
-   Internet
    

[Run curl commands to connect to and use LindormSearch](/help/en/lindorm/user-guide/connect-and-use-the-search-engine-with-the-curl-command)

### **LindormSearch endpoint for Solr**

To connect to LindormSearch by using a public endpoint, perform the following steps in the Lindorm console: In the left-side navigation pane, click **Database Connections**. Click the **Search Engine** tab, and then click **Apply for Public Endpoint** in the upper-right corner of the tab. The following table lists the different types of endpoints that can be used to connect to LindormSearch.

![查看搜索引擎连接地址](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/9356901271/p674254.png)

**Endpoint type**

**Connection method**

**Supported series**

**Network type**

**Reference**

Endpoints for LindormSearch SQL

Use LindormSearch SQL to connect to LindormSearch. This type of endpoints is shown in the section marked with ① in the preceding figure.

Lindorm

-   VPC
    
-   Internet
    

[Use a JDBC driver to connect to and send SQL requests to LindormSearch](/help/en/lindorm/user-guide/use-sql-to-connect-to-and-use-lindormsearch#concept-1987740)

Endpoints for Solr

Use Search Shell to connect to LindormSearch. This type of endpoints is shown in the section marked with ② in the preceding figure.

-   Lindorm
    
-   Lindorm Standalone
    

VPC

[Use Search Shell to connect to and use LindormSearch](/help/en/lindorm/user-guide/use-the-apache-solr-shell-to-connect-to-and-use-lindormsearch#concept-2411889)

## View the endpoints of LindormDFS

LindormDFS provides a complete set of configuration items for the client to connect to LindormDFS. You can perform the following steps in the Lindorm console to view the configuration item set: In the left-side navigation pane, click **Database Connections**. Click the **File Engine** tab, and then click **Generate Configuration Items**.

## View the endpoints of LDPS

Before you view the endpoints of Lindorm Distributed Processing System (LDPS), make sure that LDPS is activated for the Lindorm instance. To connect to LDPS by using a public endpoint, perform the following steps in the Lindorm console: In the left-side navigation pane, click **Database Connections**. Click the **Compute Engine** tab, and then click **Apply for Public Endpoint** in the upper-right corner of the tab. The following table lists the different types of endpoints that can be used to connect to LDPS.

![计算引擎](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5768866071/p686228.png)

**Endpoint type**

**Connection method**

**Supported series**

**Network type**

**Reference**

Endpoints for JDBC

Use SQL to connect to LDPS. This type of endpoints is shown in the section marked with ① in the preceding figure.

Lindorm

-   VPC
    
-   Internet
    

[Use JDBC in application development](/help/en/lindorm/user-guide/use-sql-to-connect-to-ldps#task-2143223)

Endpoints for the submission of Java jobs

Use the endpoint to submit a Java job in LDPS. This type of endpoints is shown in the section marked with ② in the preceding figure.

Lindorm

-   VPC
    
-   Internet
    

[Create a job in Java](/help/en/lindorm/user-guide/jar-job-development-practice#task-2143303)

Endpoints for Hive Metastore

Use SQL to access data in Hive. This type of endpoints is shown in the section marked with ③ in the preceding figure.

Lindorm

VPC

[Access data in Hive](/help/en/lindorm/user-guide/use-hive-metastore-to-manage-metadata-of-the-lindorm-compute-engine#task-2175068)

## View the endpoints of the Lindorm streaming engine

Before you view the endpoints of the Lindorm streaming engine, make sure that the Lindorm streaming engine is activated for the Lindorm instance. To connect to the Lindorm streaming engine by using a public endpoint, perform the following steps in the Lindorm console: In the left-side navigation pane, click **Database Connections**. Click the **Stream Engine** tab, and then click **Apply for Public Endpoint** in the upper-right corner of the tab. The following table lists the different types of endpoints that can be used to connect to the Lindorm streaming engine.

![image.png](https://help-static-aliyun-doc.aliyuncs.com/assets/img/en-US/5768866071/p700779.png)

**Endpoint type**

**Connection method**

**Supported series**

**Network type**

**Reference**

Endpoints for SQL supported by the Lindorm streaming engine

Use Lindorm-cli to connect to the Lindorm streaming engine. This type of endpoints is shown in the section marked with ① in the preceding figure.

Lindorm

-   VPC
    
-   Internet
    

[Use Lindorm-cli to connect to and use the Lindorm streaming engine](/help/en/lindorm/use-lindorm-cli-to-connect-to-and-use-the-lindorm-streaming-engine#task-2190769)

Endpoints for open source clients supported by the Lindorm streaming engine

Use an open-source client to connect to the Lindorm streaming engine. This type of endpoints is shown in the section marked with ② in the preceding figure.

Lindorm

VPC

[Use an open source client to write data to the Lindorm streaming engine](/help/en/lindorm/use-an-open-source-apache-kafka-client-to-write-data-to-the-lindorm-streaming-engine#task-2190770)
